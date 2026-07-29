import { motion } from 'motion/react';
import { Play, Share2, ThumbsUp, MessageSquare, Bookmark, Maximize, Settings, Cast, ClosedCaption } from 'lucide-react';

export default function VideoSection() {
  return (
    <section className="py-24 relative z-10 font-sans">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">Watch Our Impact</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-sm">
            Discover the stories of conservation and community building through our latest documentary.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-[2rem] overflow-hidden p-4 md:p-8 backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl"
          style={{
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.2)'
          }}
        >
          {/* Glass frame reflections */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
          <div className="absolute -left-[100%] top-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 transform-gpu pointer-events-none animate-[shimmer_8s_infinite]"></div>

          {/* Player Top Bar (Glass UI Elements) */}
          <div className="flex justify-between items-center mb-4 px-2 text-white/80">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <span className="font-medium text-sm">Conservation Video</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 bg-white/10 rounded-full px-2 py-1 border border-white/10">
                <div className="w-3 h-3 rounded-full bg-white/40"></div>
                <div className="w-3 h-3 rounded-full bg-white"></div>
              </div>
              <Cast className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              <ClosedCaption className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              <Settings className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>

          {/* YouTube Embed Container */}
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] group z-10">
            {/* The actual iframe for YouTube */}
            <iframe loading="lazy" 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/WXhMy0AcLBs?si=0wZiaqGuDTGp61Lq" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="absolute inset-0 w-full h-full z-10"
            ></iframe>
            
            {/* Overlay to catch clicks if needed, or visual enhancement */}
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-xl z-20"></div>
          </div>
          
          {/* Player Bottom Bar (Glass UI Elements) */}
          <div className="mt-4 px-2">
            <div className="flex items-center justify-between text-white/80">
              <div className="flex space-x-4">
                <ThumbsUp className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
                <ThumbsUp className="w-5 h-5 cursor-pointer hover:text-white transition-colors transform rotate-180" />
                <MessageSquare className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
                <Bookmark className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
                <Share2 className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
                <span className="cursor-pointer font-bold tracking-widest hover:text-white transition-colors">...</span>
              </div>
              <div>
                <Maximize className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              </div>
            </div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}
