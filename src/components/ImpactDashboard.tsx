import { motion } from 'motion/react';
import { TreePine, Baby, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ImpactDashboard() {
  const [trees, setTrees] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTrees(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-10 relative overflow-hidden"
        >
          {/* Decorative background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-green-500/10 blur-[100px] rounded-full" />
          
          <div className="relative z-10">
            <h2 className="text-3xl font-serif font-bold tracking-wider mb-12 text-center text-green-300">
              LIVE IMPACT DASHBOARD
              <span className="block text-lg font-normal text-gray-300 mt-2 tracking-normal">(Help the numbers grow)</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
                  <MapPin className="w-8 h-8 text-orange-400" />
                </div>
                <span className="text-4xl font-bold mb-2 font-serif">34</span>
                <p className="text-sm tracking-widest text-gray-400 uppercase">Projects Completed</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
