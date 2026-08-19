import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronLeft, ChevronRight, Play, X, Image as ImageIcon, CheckCircle2, Upload, Trash2, Plus, Film, Tv, Layers, ArrowLeft, Video } from 'lucide-react';
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

import filmingImg1 from '../assets/images/IMG_4640.jpg';
import filmingImg2 from '../assets/images/IMG_5967-1.jpg';
import filmingImg3 from '../assets/images/IMG_7617.jpg';
import filmingImg4 from '../assets/images/IMG_7691.jpg';
import filmingImg5 from '../assets/images/IMG_7760.jpg';
import filmingImg6 from '../assets/images/IMG_7969.jpg';
import filmingImg7 from '../assets/images/IMG_8196.jpg';
import filmingImg8 from '../assets/images/IMG_9049.jpg';
import filmingImg9 from '../assets/images/IMG_9067.jpg';
import filmingImg10 from '../assets/images/Sunset POSTER.jpg';

import rTeamImg1 from '../assets/images/jpeg-optimizer_IMG_1673.JPG';
import rTeamImg2 from '../assets/images/jpeg-optimizer_IMG_1699.JPG';
import rTeamImg3 from '../assets/images/jpeg-optimizer_IMG_5761.JPG';
import rTeamImg4 from '../assets/images/jpeg-optimizer_IMG_5791.jpg';
import rTeamImg5 from '../assets/images/jpeg-optimizer_IMG_5871.jpg';
import rTeamImg6 from '../assets/images/jpeg-optimizer_IMG_5907.JPG';
import rTeamImg7 from '../assets/images/jpeg-optimizer_IMG_7740.JPG';
import rTeamImg8 from '../assets/images/jpeg-optimizer_IMG_7769.JPG';
import rTeamImg9 from '../assets/images/jpeg-optimizer_IMG_7998.JPG';
import rTeamImg10 from '../assets/images/jpeg-optimizer_IMG_8078.JPG';
import rTeamImg11 from '../assets/images/jpeg-optimizer_IMG_9059.JPG';

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
    thumb: filmingImg1,
    images: [
      filmingImg1,
      filmingImg2,
      filmingImg3,
      filmingImg4,
      filmingImg5,
      filmingImg6,
      filmingImg7,
      filmingImg8,
      filmingImg9,
      filmingImg10,
    ]
  },
  {
    id: 'wedding',
    title: 'The R-Team',
    galleryTitle: 'The R-Team',
    thumb: rTeamImg1,
    images: [
      rTeamImg1,
      rTeamImg2,
      rTeamImg3,
      rTeamImg4,
      rTeamImg5,
      rTeamImg6,
      rTeamImg7,
      rTeamImg8,
      rTeamImg9,
      rTeamImg10,
      rTeamImg11,
    ]
  }
];

const documentaryVideo = {
  id: 'doc',
  title: 'Nature Documentary',
  subtitle: 'Wildlife & Ecosystem Feature',
  videoUrl: 'https://ik.imagekit.io/csia005/kling_20260703_VIDEO__4574_0.mp4?updatedAt=1783087085867',
  poster: rosiePoster,
  isYoutube: false
};

const dual2DCard = {
  id: '2d-cinema',
  title: '2D Cinema',
  subtitle: 'Animated Wildlife & Sanctuary Stories',
  badge: 'Animation',
  poster: 'https://img.youtube.com/vi/AbnEOFOdutw/hqdefault.jpg',
  episodes: [
    {
      id: 'ep1',
      title: 'Rosie 2D Trailer',
      episodeLabel: 'Episode 1',
      subtitle: 'by VMP (Australia)',
      buttonText: 'Rosie 2D trailer by VMP (Australia)',
      videoUrl: 'https://www.youtube.com/embed/AbnEOFOdutw?si=Gaj53Ee5ZnyKHdo1',
      poster: 'https://img.youtube.com/vi/AbnEOFOdutw/hqdefault.jpg',
      badge: 'Trailer'
    },
    {
      id: 'ep2',
      title: 'Rosie 2D Intro',
      episodeLabel: 'Episode 2',
      subtitle: 'by Azure Prince Animation',
      buttonText: 'Rosie 2D Intro by Azure Prince Animation',
      videoUrl: 'https://www.youtube.com/embed/KSHei1YaxCY',
      poster: 'https://img.youtube.com/vi/KSHei1YaxCY/hqdefault.jpg',
      badge: 'Intro'
    }
  ]
};

export default function Features() {
  const [templates, setTemplates] = useState<GalleryTemplate[]>(initialTemplates);
  const [activeTemplateId, setActiveTemplateId] = useState<string>(initialTemplates[0].id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlayingDoc, setIsPlayingDoc] = useState(false);
  const [is2DSeriesOpen, setIs2DSeriesOpen] = useState(false);
  const [active2DEpisodeIndex, setActive2DEpisodeIndex] = useState<number | null>(null);
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
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-gray-400 text-center lg:text-left">Select a category</h3>
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

        {/* 2D Cinema Sector */}
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

            <div className="flex flex-col lg:flex-row justify-center items-center gap-8 relative min-h-[420px] max-w-6xl mx-auto">
              
              {/* Card 1: Nature Documentary */}
              <motion.div
                layout
                className={`relative rounded-3xl overflow-hidden border border-white/15 bg-[#141414] shadow-2xl transition-all duration-300 ${
                  isPlayingDoc 
                    ? 'z-50 w-full lg:w-[960px] aspect-video' 
                    : 'z-10 w-full lg:w-1/2 aspect-[16/10] cursor-pointer group hover:border-[#71ea27]/50 hover:shadow-[0_0_30px_rgba(113,234,39,0.2)]'
                }`}
                onClick={() => {
                  if (!isPlayingDoc && !is2DSeriesOpen) {
                    setIsPlayingDoc(true);
                  }
                }}
                transition={{ type: 'spring', stiffness: 220, damping: 25 }}
              >
                {isPlayingDoc ? (
                  <div className="w-full h-full relative bg-black">
                    <video
                      src={documentaryVideo.videoUrl}
                      controls
                      autoPlay
                      className="w-full h-full object-cover"
                    />
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsPlayingDoc(false);
                      }}
                      aria-label="Close documentary player"
                      className="absolute top-5 right-5 w-11 h-11 rounded-full bg-black/70 hover:bg-red-600 flex items-center justify-center text-white backdrop-blur-md z-50 transition-colors border border-white/20 shadow-lg"
                    >
                      <X size={22} />
                    </button>
                    <div className="absolute top-5 left-5 pointer-events-none">
                      <span className="bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow">
                        Nature Documentary
                      </span>
                    </div>
                  </div>
                ) : (
                  <>
                    <img 
                      src={documentaryVideo.poster} 
                      alt={documentaryVideo.title} 
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-between p-6">
                      <div className="flex justify-between items-start">
                        <span className="bg-black/60 backdrop-blur-md border border-white/20 text-[#71ea27] text-xs font-bold px-3 py-1 rounded-full">
                          Feature Film
                        </span>
                      </div>

                      <div className="text-center space-y-3">
                        <motion.div 
                          whileHover={{ scale: 1.12 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-md border border-white/25 flex items-center justify-center text-white mx-auto group-hover:border-[#71ea27] group-hover:text-[#71ea27] group-hover:shadow-[0_0_20px_rgba(113,234,39,0.4)] transition-all"
                        >
                          <Play size={28} className="ml-1" />
                        </motion.div>
                        <div>
                          <h3 className="text-2xl font-bold text-white drop-shadow-md">{documentaryVideo.title}</h3>
                          <p className="text-gray-300 text-xs sm:text-sm mt-1">{documentaryVideo.subtitle}</p>
                        </div>
                      </div>

                      <div className="text-center">
                        <span className="text-[11px] uppercase tracking-wider text-white/70 font-semibold">Click to Play Documentary</span>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>

              {/* Card 2: 2D Cinema Series (Hosts 2 YouTube links) */}
              <motion.div
                layout
                className={`relative rounded-3xl overflow-hidden border border-white/15 bg-[#141414] shadow-2xl transition-all duration-300 ${
                  is2DSeriesOpen 
                    ? 'z-50 w-full lg:w-[1000px] min-h-[500px]' 
                    : 'z-10 w-full lg:w-1/2 aspect-[16/10] cursor-pointer group hover:border-[#71ea27]/50 hover:shadow-[0_0_30px_rgba(113,234,39,0.2)]'
                }`}
                onClick={() => {
                  if (!is2DSeriesOpen && !isPlayingDoc) {
                    setIs2DSeriesOpen(true);
                    setActive2DEpisodeIndex(null); // opens side-by-side selection panels by default
                  }
                }}
                transition={{ type: 'spring', stiffness: 220, damping: 25 }}
              >
                {is2DSeriesOpen ? (
                  <div className="w-full h-full p-5 sm:p-7 flex flex-col bg-gradient-to-b from-[#1b1b1b] to-[#111111] text-white">
                    
                    {/* Header bar inside expanded card */}
                    <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#71ea27]/20 border border-[#71ea27]/40 flex items-center justify-center text-[#71ea27]">
                          <Tv className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg sm:text-xl font-bold text-white">2D Cinema</h3>
                          </div>
                          <p className="text-xs text-gray-300">
                            {active2DEpisodeIndex === null 
                              ? 'Select an episode below to watch in-line in the cinema player' 
                              : `Currently playing: ${dual2DCard.episodes[active2DEpisodeIndex].title}`}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIs2DSeriesOpen(false);
                          setActive2DEpisodeIndex(null);
                        }}
                        aria-label="Close 2D Cinema"
                        className="w-10 h-10 rounded-full bg-black/60 hover:bg-red-600 flex items-center justify-center text-white backdrop-blur-md transition-colors border border-white/20"
                      >
                        <X size={20} />
                      </button>
                    </div>

                    {/* Content View: EITHER 2 Panels Side-by-Side OR In-line Player */}
                    {active2DEpisodeIndex === null ? (
                      /* 2 Panels Side-by-Side */
                      <div className="space-y-4 my-auto py-2">
                        <div className="text-center mb-2">
                          <p className="text-sm font-semibold text-gray-200">
                            Choose an episode to play in the main player:
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {dual2DCard.episodes.map((ep, idx) => (
                            <motion.div
                              key={ep.id}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActive2DEpisodeIndex(idx);
                              }}
                              className="group/panel bg-black/60 hover:bg-black/80 border border-white/15 hover:border-[#71ea27] rounded-2xl p-4 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_0_25px_rgba(113,234,39,0.25)] flex flex-col justify-between"
                            >
                              <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-white/10">
                                <img 
                                  src={ep.poster} 
                                  alt={ep.title}
                                  className="w-full h-full object-cover group-hover/panel:scale-105 transition-transform duration-500" 
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover/panel:bg-black/20 transition-colors flex items-center justify-center">
                                  <div className="w-14 h-14 rounded-full bg-black/60 border border-white/30 group-hover/panel:border-[#71ea27] group-hover/panel:text-[#71ea27] text-white flex items-center justify-center transition-all shadow-md group-hover/panel:scale-110">
                                    <Play size={24} className="ml-1" />
                                  </div>
                                </div>
                              </div>

                              <button 
                                className="w-full py-2.5 px-4 rounded-xl bg-[#71ea27] hover:bg-[#5ec81e] text-[#111] font-bold text-xs flex items-center justify-center gap-2 transition-colors mt-auto shadow-md"
                              >
                                <Play size={14} className="fill-current" />
                                <span>{ep.buttonText || `Play ${ep.episodeLabel} in Main Card`}</span>
                              </button>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      /* In-line Player in Main Card */
                      <div className="flex-grow flex flex-col justify-between space-y-4">
                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black">
                          <iframe
                            src={`${dual2DCard.episodes[active2DEpisodeIndex].videoUrl}${
                              dual2DCard.episodes[active2DEpisodeIndex].videoUrl.includes('?') ? '&' : '?'
                            }autoplay=1`}
                            title={dual2DCard.episodes[active2DEpisodeIndex].title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full border-0"
                          />
                        </div>

                        {/* Switcher Controls: Switch episodes or return to side-by-side panels */}
                        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mr-1">Switch Episode:</span>
                            {dual2DCard.episodes.map((ep, idx) => (
                              <button
                                key={ep.id}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActive2DEpisodeIndex(idx);
                                }}
                                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                                  active2DEpisodeIndex === idx
                                    ? 'bg-[#71ea27] text-black shadow-[0_0_15px_rgba(113,234,39,0.4)] scale-105'
                                    : 'bg-black/60 hover:bg-black/90 text-gray-200 border border-white/15 hover:border-[#71ea27]/50'
                                }`}
                              >
                                <Play size={12} className={active2DEpisodeIndex === idx ? 'fill-current' : ''} />
                                {ep.episodeLabel}: {ep.title}
                              </button>
                            ))}
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setActive2DEpisodeIndex(null); // Back to side-by-side selection panels
                              }}
                              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all flex items-center gap-1.5"
                            >
                              <Layers size={14} className="text-[#71ea27]" />
                              <span>View Both Panels</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                  </div>
                ) : (
                  /* Idle State for 2D Cinema Card */
                  <>
                    <img 
                      src={dual2DCard.poster} 
                      alt={dual2DCard.title} 
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-between p-6">
                      <div className="flex justify-between items-start">
                        <span className="bg-black/60 backdrop-blur-md border border-white/20 text-[#71ea27] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                          <Layers size={13} className="text-[#71ea27]" />
                          {dual2DCard.badge}
                        </span>
                      </div>

                      <div className="text-center space-y-3">
                        <motion.div 
                          whileHover={{ scale: 1.12 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-md border border-white/25 flex items-center justify-center text-white mx-auto group-hover:border-[#71ea27] group-hover:text-[#71ea27] group-hover:shadow-[0_0_20px_rgba(113,234,39,0.4)] transition-all"
                        >
                          <Play size={28} className="ml-1" />
                        </motion.div>
                        <div>
                          <h3 className="text-2xl font-bold text-white drop-shadow-md">{dual2DCard.title}</h3>
                          <p className="text-gray-300 text-xs sm:text-sm mt-1">{dual2DCard.subtitle}</p>
                        </div>
                      </div>

                      <div className="h-4" />
                    </div>
                  </>
                )}
              </motion.div>

              {/* Background Backdrop Overlay when any video is playing or modal is open */}
              <AnimatePresence>
                {(isPlayingDoc || is2DSeriesOpen) && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/85 z-40 backdrop-blur-sm"
                    onClick={() => {
                      setIsPlayingDoc(false);
                      setIs2DSeriesOpen(false);
                      setActive2DEpisodeIndex(null);
                    }}
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
