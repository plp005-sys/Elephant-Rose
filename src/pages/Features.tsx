import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronLeft, ChevronRight, Play, X, Image as ImageIcon, CheckCircle2, Upload, Trash2, Plus } from 'lucide-react';
import { loadGalleryTemplatesFromDB, saveGalleryTemplatesToDB } from '../utils/galleryStorage';
import galleryBgImage from '../assets/images/ChatGPT Image Jul 22, 2026, 05_30_15 PM.jpg';
import cinemaBgImage from '../assets/images/ChatGPT Image Jul 29, 2026, 12_28_28 PM.jpg';
import mainBgImage from '../assets/images/ChatGPT Image Jul 29, 2026, 12_50_35 PM.png';
import rosiePoster from '../assets/images/Rosie.jpg';
import outreachImg1 from '../assets/images/IMG_5713.jpg';
import outreachImg2 from '../assets/images/IMG_5791.jpg';
import outreachImg3 from '../assets/images/IMG_5821.jpg';
import outreachImg4 from '../assets/images/IMG_5871.jpg';
import outreachImg5 from '../assets/images/IMG_7750.jpg';
import outreachImg6 from '../assets/images/IMG_8107.jpg';
import outreachImg7 from '../assets/images/IMG_8164.jpg';
import outreachImg8 from '../assets/images/IMG_8181.jpg';
import outreachImg9 from '../assets/images/IMG_8191.jpg';
import outreachImg10 from '../assets/images/IMG_8271.jpg';

import fundraiserImg1 from '../assets/images/IMG_0032.jpg';
import fundraiserImg2 from '../assets/images/IMG_0033.jpg';
import fundraiserImg3 from '../assets/images/IMG_0034.jpg';
import fundraiserImg4 from '../assets/images/IMG_0037.jpg';
import fundraiserImg5 from '../assets/images/IMG_0051.jpg';
import fundraiserImg6 from '../assets/images/IMG_0059.jpg';
import fundraiserImg7 from '../assets/images/IMG_0062.jpg';
import fundraiserImg8 from '../assets/images/IMG_0063.jpg';
import fundraiserImg9 from '../assets/images/IMG_0064.jpg';
import fundraiserImg10 from '../assets/images/IMG_0065.jpg';
import fundraiserImg11 from '../assets/images/IMG_1852.jpg';
import fundraiserImg12 from '../assets/images/_MG_3559.jpg';

interface GalleryTemplate {
  id: string;
  title: string;
  galleryTitle: string;
  thumb: string;
  images: string[];
}

const initialTemplates: GalleryTemplate[] = [
  {
    id: 'outreach',
    title: 'Outreach',
    galleryTitle: 'Outreach',
    thumb: outreachImg1,
    images: [
      outreachImg1,
      outreachImg2,
      outreachImg3,
      outreachImg4,
      outreachImg5,
      outreachImg6,
      outreachImg7,
      outreachImg8,
      outreachImg9,
      outreachImg10,
    ]
  },
  {
    id: 'fundraisers',
    title: 'Fundraisers',
    galleryTitle: 'Fundraisers',
    thumb: fundraiserImg1,
    images: [
      fundraiserImg1,
      fundraiserImg2,
      fundraiserImg3,
      fundraiserImg4,
      fundraiserImg5,
      fundraiserImg6,
      fundraiserImg7,
      fundraiserImg8,
      fundraiserImg9,
      fundraiserImg10,
      fundraiserImg11,
      fundraiserImg12,
    ]
  },
  {
    id: 'photo',
    title: 'Filming',
    galleryTitle: 'Filming',
    thumb: '',
    images: []
  },
  {
    id: 'wedding',
    title: 'Wedding Photographer',
    galleryTitle: 'Wedding Photographer',
    thumb: '',
    images: []
  }
];

const cinemaVideos = [
  {
    id: 1,
    title: 'Nature Documentary',
    videoUrl: 'https://ik.imagekit.io/csia005/kling_20260703_VIDEO__4574_0.mp4?updatedAt=1783087085867',
    poster: rosiePoster,
    isYoutube: false
  },
  {
    id: 2,
    title: 'Ocean Deep',
    videoUrl: 'https://www.youtube.com/embed/AbnEOFOdutw?si=Gaj53Ee5ZnyKHdo1',
    poster: 'https://img.youtube.com/vi/AbnEOFOdutw/hqdefault.jpg',
    isYoutube: true
  },
  {
    id: 3,
    title: 'Forest Life',
    videoUrl: 'https://www.youtube.com/embed/KSHei1YaxCY',
    poster: 'https://img.youtube.com/vi/KSHei1YaxCY/hqdefault.jpg',
    isYoutube: true
  }
];

export default function Features() {
  const [templates, setTemplates] = useState<GalleryTemplate[]>(initialTemplates);
  const [activeTemplateId, setActiveTemplateId] = useState<string>(initialTemplates[0].id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isSaved, setIsSaved] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load from IndexedDB on initial mount
  useEffect(() => {
    let isMounted = true;
    loadGalleryTemplatesFromDB().then((saved) => {
      if (isMounted && saved && Array.isArray(saved) && saved.length > 0) {
        // Merge with initialTemplates to ensure updated titles and built-in template images take effect
        const merged = initialTemplates.map((initT) => {
          const found = saved.find((s: GalleryTemplate) => s.id === initT.id);
          if (found) {
            const hasSavedImages = found.images && found.images.length > 0;
            const images = hasSavedImages ? found.images : initT.images;
            const thumb = (found.thumb && found.thumb.length > 0) ? found.thumb : (initT.thumb || (images.length > 0 ? images[0] : ''));
            return {
              ...found,
              title: initT.title,
              galleryTitle: initT.galleryTitle,
              images,
              thumb,
            };
          }
          return initT;
        });
        setTemplates(merged);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  // Sync activeTemplate object with current state in templates array
  const activeTemplate = templates.find(t => t.id === activeTemplateId) || templates[0];

  useEffect(() => {
    saveGalleryTemplatesToDB(templates).then(() => {
      setIsSaved(true);
    });
  }, [templates]);

  useEffect(() => {
    if (!activeTemplate.images || activeTemplate.images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % activeTemplate.images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [activeTemplate, currentImageIndex]);

  const handleNextImage = () => {
    if (!activeTemplate.images || activeTemplate.images.length === 0) return;
    setCurrentImageIndex((prev) => (prev + 1) % activeTemplate.images.length);
  };

  const handlePrevImage = () => {
    if (!activeTemplate.images || activeTemplate.images.length === 0) return;
    setCurrentImageIndex((prev) => (prev - 1 + activeTemplate.images.length) % activeTemplate.images.length);
  };

  const handleFilesSelected = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const fileArray = Array.from(files);
    const readPromises = fileArray.map(file => {
      return new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            resolve(e.target.result as string);
          }
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(readPromises).then(newImages => {
      setTemplates(prevTemplates => {
        return prevTemplates.map(t => {
          if (t.id === activeTemplate.id) {
            const combinedImages = [...t.images, ...newImages];
            return {
              ...t,
              images: combinedImages,
              thumb: t.thumb || combinedImages[0] || ''
            };
          }
          return t;
        });
      });
      setCurrentImageIndex(0);
    });
  };

  const handleClearGallery = (templateId: string) => {
    setTemplates(prev => prev.map(t => {
      if (t.id === templateId) {
        return {
          ...t,
          images: [],
          thumb: ''
        };
      }
      return t;
    }));
    setCurrentImageIndex(0);
  };

  const handleDeleteCurrentImage = () => {
    if (!activeTemplate.images || activeTemplate.images.length === 0) return;
    setTemplates(prev => prev.map(t => {
      if (t.id === activeTemplate.id) {
        const filtered = t.images.filter((_, idx) => idx !== currentImageIndex);
        return {
          ...t,
          images: filtered,
          thumb: filtered[0] || ''
        };
      }
      return t;
    }));
    setCurrentImageIndex(0);
  };

  return (
    <div 
      className="min-h-screen text-white overflow-x-hidden font-sans"
      style={{
        backgroundImage: `url('${mainBgImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <Navbar />
      
      <div className="pb-20">
        {/* Gallery Section */}
        <section 
          className="relative overflow-hidden pt-36 pb-16 px-6"
          style={{ 
            backgroundImage: `url('${galleryBgImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Hidden File Input */}
          <input 
            type="file" 
            ref={fileInputRef} 
            multiple 
            accept="image/*" 
            className="hidden" 
            onChange={(e) => {
              handleFilesSelected(e.target.files);
              if (e.target) e.target.value = '';
            }}
          />

          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          <div className="relative z-10 container mx-auto">
              <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/20 pb-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">The R-Gallery</h1>
                  <p className="text-gray-300 text-lg max-w-2xl">Our journey in images, from Outreaches, Filming sites, Seminars and Classes...</p>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-8 bg-[#1a1a1a]/80 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl">
              {/* Sidebar */}
              <div className="w-full lg:w-[280px] shrink-0">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-gray-400 text-center lg:text-left">Select a template to start with</h3>
                <div className="grid grid-cols-2 lg:grid-cols-2 gap-4">
                  {templates.map(template => (
                    <div 
                      key={template.id}
                      onClick={() => {
                        setActiveTemplateId(template.id);
                        setCurrentImageIndex(0);
                      }}
                      className="cursor-pointer group flex flex-col items-center gap-3 relative"
                    >
                      <div className={`w-full aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 relative ${activeTemplate.id === template.id ? 'border-[#71ea27] shadow-[0_0_15px_rgba(113,234,39,0.3)]' : 'border-transparent bg-[#222] group-hover:border-gray-600 group-hover:bg-[#2a2a2a]'}`}>
                        {template.images && template.images.length > 0 ? (
                          <img 
                            src={activeTemplate.id === template.id ? (template.images[currentImageIndex] || template.images[0]) : (template.thumb || template.images[0])} 
                            alt={template.title} 
                            className="w-full h-full object-cover p-1 rounded-[10px]" 
                          />
                        ) : template.thumb ? (
                          <img 
                            src={template.thumb} 
                            alt={template.title} 
                            className="w-full h-full object-cover p-1 rounded-[10px]" 
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center bg-[#151515] text-gray-500 p-2 text-center">
                            <ImageIcon size={22} className="mb-1 text-gray-400 opacity-50" />
                            <span className="text-[10px] text-gray-400 font-medium">Blank</span>
                          </div>
                        )}
                        
                        {/* Checkmark indicator */}
                        {activeTemplate.id === template.id && (
                          <div className="absolute top-2 right-2 w-5 h-5 bg-[#71ea27] rounded-full flex items-center justify-center border border-[#1a1a1a]">
                            <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        )}

                        {/* Image count pill */}
                        {template.images && template.images.length > 0 && (
                          <div className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded-full bg-black/70 backdrop-blur-sm text-[9px] font-semibold text-[#71ea27]">
                            {template.images.length}
                          </div>
                        )}
                      </div>
                      <span className={`text-xs text-center font-medium transition-colors ${activeTemplate.id === template.id ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                        {template.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Gallery */}
              <div className="w-full lg:w-[calc(100%-280px-2rem)] flex flex-col bg-black p-6 rounded-2xl relative overflow-hidden">
                <div className="flex items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
                  <h2 className="text-2xl sm:text-3xl font-medium">{activeTemplate.galleryTitle}</h2>
                </div>
                
                <div 
                  onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                  }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={(e) => {
                    e.preventDefault();
                    setIsDragging(false);
                    handleFilesSelected(e.dataTransfer.files);
                  }}
                  className={`relative w-full flex-grow flex items-center justify-center rounded-xl overflow-hidden min-h-[400px] transition-all duration-300 ${
                    isDragging ? 'border-2 border-dashed border-[#71ea27] bg-[#71ea27]/5' : ''
                  }`}
                >
                  {activeTemplate.images && activeTemplate.images.length > 0 ? (
                    <>
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={activeTemplate.images[currentImageIndex]}
                          src={activeTemplate.images[currentImageIndex]}
                          alt={activeTemplate.galleryTitle}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          className="w-full max-h-[600px] object-contain drop-shadow-2xl"
                        />
                      </AnimatePresence>
                      
                      {/* Navigation Arrows */}
                      {activeTemplate.images.length > 1 && (
                        <>
                          <button 
                            onClick={handlePrevImage}
                            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-[#71ea27] hover:text-black flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-transparent group/btn z-10"
                            aria-label="Previous image"
                          >
                            <ChevronLeft size={24} className="group-hover/btn:-translate-x-0.5 transition-transform" />
                          </button>
                          <button 
                            onClick={handleNextImage}
                            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-[#71ea27] hover:text-black flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-transparent group/btn z-10"
                            aria-label="Next image"
                          >
                            <ChevronRight size={24} className="group-hover/btn:translate-x-0.5 transition-transform" />
                          </button>
                        </>
                      )}
                    </>
                  ) : (
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className="cursor-pointer flex flex-col items-center justify-center py-16 px-6 text-center border-2 border-dashed border-white/15 hover:border-[#71ea27]/50 rounded-2xl w-full max-w-lg mx-auto bg-white/5 hover:bg-white/[0.08] transition-all group"
                    >
                      <div className="w-16 h-16 rounded-full bg-[#71ea27]/10 border border-[#71ea27]/20 flex items-center justify-center mb-4 text-[#71ea27] group-hover:scale-110 transition-transform">
                        <Upload size={28} />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{activeTemplate.title} Gallery is Ready</h3>
                      <p className="text-gray-300 text-sm leading-relaxed max-w-xs mb-5">
                        Drag and drop your 12 images here, or click to browse from your device.
                      </p>
                      <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#71ea27] text-[#0a2312] shadow-lg group-hover:bg-[#85f63d] transition-all">
                        <Plus size={16} />
                        <span>Select 12 Photos</span>
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Thumbnails indicator */}
                {activeTemplate.images && activeTemplate.images.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-2 mt-6">
                    {activeTemplate.images.map((img, idx) => (
                      <button 
                        key={idx} 
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`h-10 w-14 rounded-md overflow-hidden border-2 transition-all duration-300 ${
                          idx === currentImageIndex ? 'border-[#71ea27] scale-105 shadow-[0_0_10px_rgba(113,234,39,0.4)]' : 'border-white/20 opacity-60 hover:opacity-100'
                        }`}
                        aria-label={`Go to image ${idx + 1}`}
                      >
                        <img src={img} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Cinema Sector */}
        <section 
          className="mb-24 relative overflow-hidden py-16 px-6"
          style={{ 
            backgroundImage: `url('${cinemaBgImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          
          <div className="relative z-10 container mx-auto">
            <div className="mb-12 border-t border-b border-white/20 py-6 text-center">
              <h2 className="text-4xl font-bold mb-4">Cinema</h2>
              <p className="text-gray-300 text-lg">Watch our selected stories and features.</p>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center gap-6 relative min-h-[400px]">
              {cinemaVideos.map((video) => {
                const isPlaying = playingVideoId === video.id;
                
                return (
                  <motion.div
                    key={video.id}
                    layout
                    className={`relative rounded-3xl overflow-hidden border border-gray-800 bg-[#1a1a1a] shadow-xl ${
                      isPlaying ? 'z-50 w-full lg:w-[1000px] aspect-video' : 'z-10 w-full lg:w-1/3 aspect-[4/3] cursor-pointer group hover:border-gray-600 transition-colors'
                    }`}
                    onClick={() => {
                      if (!isPlaying) {
                        setPlayingVideoId(video.id);
                      }
                    }}
                    transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                  >
                    {isPlaying ? (
                      <div className="w-full h-full relative">
                        {video.isYoutube ? (
                          <iframe
                            src={`${video.videoUrl}&autoplay=1`}
                            title={video.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full border-0"
                          ></iframe>
                        ) : (
                          <video
                            src={video.videoUrl}
                            controls
                            autoPlay
                            className="w-full h-full object-cover"
                          />
                        )}
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setPlayingVideoId(null);
                          }}
                          className="absolute top-6 right-6 w-12 h-12 rounded-full bg-black/60 hover:bg-red-500 flex items-center justify-center text-white backdrop-blur-sm z-50 transition-colors border border-white/10"
                        >
                          <X size={24} />
                        </button>
                      </div>
                    ) : (
                      <>
                        <img src={video.poster} alt={video.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 hover:bg-black/20 transition-colors">
                          <motion.div 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-20 h-20 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-6 group-hover:border-[#71ea27] group-hover:text-[#71ea27] transition-colors"
                          >
                            <Play size={32} className="ml-2" />
                          </motion.div>
                          <h3 className="text-2xl font-bold text-white drop-shadow-md px-6 text-center">{video.title}</h3>
                        </div>
                      </>
                    )}
                  </motion.div>
                );
              })}
              
              {/* Overlay when a video is playing */}
              <AnimatePresence>
                {playingVideoId && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/90 z-40 backdrop-blur-sm"
                    onClick={() => setPlayingVideoId(null)}
                  />
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
}
