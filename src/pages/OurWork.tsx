import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedLeaves from '../components/AnimatedLeaves';
import { ArrowRight, MousePointer2 } from 'lucide-react';

const cards = [
  {
    id: 1,
    title: 'Community Engagement',
    image: 'https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?auto=format&fit=crop&w=400&q=80',
    delay: 0.2
  },
  {
    id: 2,
    title: 'Living conditions',
    image: 'https://images.unsplash.com/photo-1416879598555-220f8623b34b?auto=format&fit=crop&w=400&q=80',
    delay: 0.3
  },
  {
    id: 3,
    title: 'Watering',
    image: 'https://images.unsplash.com/photo-1598531405073-671c662243ea?auto=format&fit=crop&w=400&q=80',
    delay: 0.4
  },
  {
    id: 4,
    title: 'Extra love',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=400&q=80',
    delay: 0.5
  }
];

export default function OurWork() {
  return (
    <div className="min-h-screen text-white font-sans overflow-x-hidden relative flex flex-col">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1545241047-6083a36a1c08?auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      
      <AnimatedLeaves />
      
      <Navbar />

      <main className="flex-grow flex items-center justify-center relative z-10 pt-28 pb-20 px-4 md:px-8">
        
        {/* Glass Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-6xl mx-auto rounded-3xl overflow-hidden relative"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
          }}
        >
          {/* Logo / Header area */}
          <div className="p-8 md:p-12 lg:p-16">
            <div className="flex items-center gap-2 mb-12">
              <span className="text-white font-bold tracking-wider text-sm uppercase">FASTER</span>
              <span className="bg-[#ed0933] text-white px-2 py-0.5 rounded text-sm font-bold tracking-wider uppercase">COURSE</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16 items-start">
              <div className="flex flex-col">
                <h2 className="text-2xl md:text-3xl font-medium mb-1">Making an Impact,</h2>
                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
                  One Feature at a Time
                </h1>
              </div>
              
              <div className="pt-2">
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium drop-shadow-md max-w-lg">
                  Empowering individuals and communities to create a more sustainable world. Together, we're building a greener future, one step at a time.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cards.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="glass-panel p-6 flex flex-col items-center group hover:bg-white/10 transition-colors duration-500"
                >
                  <div className="h-64 w-full mb-6 overflow-hidden rounded-xl relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 mix-blend-multiply" />
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="text-lg tracking-widest uppercase mb-2 font-medium">{card.title}</h3>
                  <p className="text-xs text-gray-400 mb-4 text-center">A brief description of this feature, etc.</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </main>
      
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
