import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { TreePine, Baby, Book, HeartHandshake, Sparkles, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ImpactDashboard() {
  const [trees, setTrees] = useState(0);
  
  useEffect(() => {
    // Keep at 0 for 150 days
  }, []);

  return (
    <section className="py-16 w-full relative z-10 px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel w-full p-8 md:p-14 lg:p-16 relative overflow-hidden rounded-2xl md:rounded-3xl"
        >
          {/* Decorative background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-green-500/10 blur-[100px] rounded-full" />
          
          <div className="relative z-10 w-full">
            <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-wider mb-12 text-center text-[#71ea27]">
              LIVE IMPACT DASHBOARD
              <span className="block text-lg font-normal text-white mt-2 tracking-normal">(Help the numbers grow)</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-7xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center mb-6 border-green-500/30">
                  <TreePine className="w-8 h-8 text-green-400" />
                </div>
                <motion.span 
                  key={trees}
                  initial={{ opacity: 0, scale: 1.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-4xl font-bold mb-2 font-serif"
                >
                  {trees}
                </motion.span>
                <p className="text-sm tracking-widest text-gray-400 uppercase">Trees Planted</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center mb-6 border-blue-500/30">
                  <Baby className="w-8 h-8 text-blue-400" />
                </div>
                <span className="text-4xl font-bold mb-2 font-serif">1000</span>
                <p className="text-sm tracking-widest text-gray-400 uppercase">Children Reached</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center mb-6 border-orange-500/30">
                  <Book className="w-8 h-8 text-orange-400" />
                </div>
                <span className="text-4xl font-bold mb-2 font-serif">10</span>
                <p className="text-sm tracking-widest text-gray-400 uppercase">Projects Completed</p>
              </div>
            </div>

            {/* Liquid Glass Donor Inspiration & CTA Container */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-14 w-full max-w-5xl mx-auto relative group"
            >
              {/* Liquid glass container */}
              <div className="relative rounded-2xl md:rounded-3xl p-8 md:p-10 bg-gradient-to-b from-white/[0.16] via-white/[0.07] to-white/[0.03] backdrop-blur-2xl border border-white/25 shadow-[0_12px_40px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.4)] overflow-hidden transition-all duration-500 hover:border-white/40">
                {/* Liquid light reflection highlights */}
                <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#71ea27]/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 shadow-sm">
                    <HeartHandshake className="w-4 h-4 text-[#71ea27]" />
                    <span className="text-xs md:text-sm font-semibold tracking-wider uppercase text-white/90">
                      Partner With Our Mission
                    </span>
                  </div>

                  {/* Inspiring message for donors */}
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4 tracking-tight leading-snug">
                    Fueling Lasting Change Through Grassroots Action
                  </h3>
                  
                  <p className="text-base md:text-lg text-white/90 font-light leading-relaxed max-w-3xl mb-8">
                    Every seed planted, every young mind inspired, and every habitat restored begins with passionate supporters like you. Your generous contribution directly funds sustainable agroforestry, educational outreach across rural communities, and the frontline protection of native ecosystems. Together, we can turn ambitious conservation visions into flourishing realities.
                  </p>

                  {/* Liquid Glass CTA Box */}
                  <div className="w-full rounded-xl md:rounded-2xl p-5 md:p-6 bg-black/20 border border-white/15 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-start md:items-center gap-3 text-left">
                      <Sparkles className="w-6 h-6 text-[#71ea27] shrink-0 mt-0.5 md:mt-0" />
                      <p className="text-sm md:text-base font-medium text-white/95 leading-relaxed">
                        Schools, donors, bookstores, journalists or fellow dreamers — we'd love to hear from you.
                      </p>
                    </div>

                    <Link 
                      to="/contact"
                      className="shrink-0 inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-[#71ea27] text-[#050b06] font-bold text-sm md:text-base transition-all duration-300 hover:bg-[#85f63d] hover:shadow-[0_0_20px_rgba(113,234,39,0.5)] hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span>Connect With Us</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
