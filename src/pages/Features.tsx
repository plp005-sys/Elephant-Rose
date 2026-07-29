import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import galleryBgImage from '../assets/images/ChatGPT Image Jul 22, 2026, 05_30_15 PM.jpg';
import cinemaBgImage from '../assets/images/ChatGPT Image Jul 29, 2026, 12_28_28 PM.jpg';
import mainBgImage from '../assets/images/ChatGPT Image Jul 29, 2026, 12_50_35 PM.png';

const templates = [
  {
    id: 'traveler',
    title: 'Traveler',
    galleryTitle: 'My Big Adventure',
    thumb: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=300&q=80',
    images: [
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
    ]
  },
  {
    id: 'product',
    title: 'Product Seller',
    galleryTitle: 'Audio Gear',
    thumb: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80',
    ]
  },
  {
    id: 'photo',
    title: 'Photo Shoots',
    galleryTitle: 'Portrait Portfolio',
    thumb: 'https://images.unsplash.com/photo-1516280440514-679800812573?auto=format&fit=crop&w=300&q=80',
    images: [
      'https://images.unsplash.com/photo-1516280440514-679800812573?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80',
    ]
  },
  {
    id: 'wedding',
    title: 'Wedding Photographer',
    galleryTitle: 'Special Moments',
    thumb: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=300&q=80',
    images: [
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
    ]
  }
];

const cinemaVideos = [
  {
    id: 1,
    title: 'Nature Documentary',
    videoUrl: 'https://ik.imagekit.io/csia005/kling_20260709_Image_to_Video__781_0.mp4?updatedAt=1783538491981',
    poster: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Ocean Deep',
    videoUrl: 'https://ik.imagekit.io/csia005/kling_20260709_Image_to_Video__781_0.mp4?updatedAt=1783538491981',
    poster: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Wildlife Conservation',
    videoUrl: 'https://ik.imagekit.io/csia005/kling_20260709_Image_to_Video__781_0.mp4?updatedAt=1783538491981',
    poster: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80'
  }
];

export default function Features() {
  const [activeTemplate, setActiveTemplate] = useState(templates[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % activeTemplate.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + activeTemplate.images.length) % activeTemplate.images.length);
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
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          <div className="relative z-10 container mx-auto">
              <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/20 pb-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">The R-Gallery</h1>
                  <p className="text-gray-300 text-lg max-w-2xl">Find the perfect layout for your content. Browse our beautiful pre-designed templates.</p>
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
                        setActiveTemplate(template);
                        setCurrentImageIndex(0);
                      }}
                      className="cursor-pointer group flex flex-col items-center gap-3 relative"
                    >
                      <div className={`w-full aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 relative ${activeTemplate.id === template.id ? 'border-[#71ea27] shadow-[0_0_15px_rgba(113,234,39,0.3)]' : 'border-transparent bg-[#222] group-hover:border-gray-600 group-hover:bg-[#2a2a2a]'}`}>
                        <img src={activeTemplate.id === template.id ? template.images[currentImageIndex] : template.thumb} alt={template.title} className="w-full h-full object-cover p-1 rounded-[10px]" />
                        
                        {/* Checkmark indicator */}
                        {activeTemplate.id === template.id && (
                          <div className="absolute top-2 right-2 w-5 h-5 bg-[#71ea27] rounded-full flex items-center justify-center border border-[#1a1a1a]">
                            <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
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
                <h2 className="text-3xl mb-8 font-medium text-center">{activeTemplate.galleryTitle}</h2>
                
                <div className="relative w-full flex-grow flex items-center justify-center rounded-xl overflow-hidden min-h-[400px]">
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
                  <button 
                    onClick={handlePrevImage}
                    className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-[#71ea27] hover:text-black flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-transparent group/btn z-10"
                  >
                    <ChevronLeft size={24} className="group-hover/btn:-translate-x-0.5 transition-transform" />
                  </button>
                  <button 
                    onClick={handleNextImage}
                    className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-[#71ea27] hover:text-black flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-transparent group/btn z-10"
                  >
                    <ChevronRight size={24} className="group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
                
                {/* Thumbnails indicator */}
                <div className="flex justify-center gap-2 mt-6">
                  {activeTemplate.images.map((_, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'w-8 bg-[#71ea27]' : 'w-2 bg-gray-600 hover:bg-gray-400'}`}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
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
                    onClick={() => !isPlaying && setPlayingVideoId(video.id)}
                    transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                  >
                    {isPlaying ? (
                      <div className="w-full h-full relative">
                        <video
                          src={video.videoUrl}
                          controls
                          autoPlay
                          className="w-full h-full object-cover"
                        />
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
