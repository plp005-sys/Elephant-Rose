import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedLeaves from '../components/AnimatedLeaves';
import { ArrowRight, MousePointer2 } from 'lucide-react';

const cards = [
  {
    id: 1,
    title: 'First impressions',
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
                <h2 className="text-2xl md:text-3xl font-medium mb-1">Crash Course on</h2>
                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
                  BEFRIENDING<br />A MONSTERA
                </h1>
              </div>
              
              <div className="pt-2">
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium drop-shadow-md max-w-lg">
                  Most likely, you already have noticed the gorgeous leaves here and there. 
                  Quite plausible that you want one as well. Let's see how to make sure the 
                  stunning green treasure desires to be friends with you as much as you with it!
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cards.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: card.delay, ease: "easeOut" }}
                  className="group relative rounded-[2rem] p-6 pt-32 cursor-pointer transition-all duration-300 hover:-translate-y-2"
                  style={{
                    background: index === 0 ? 'rgba(240, 244, 240, 0.85)' : 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: index === 0 ? '0 10px 30px rgba(0,0,0,0.1)' : 'none',
                    color: index === 0 ? '#1f2937' : '#ffffff'
                  }}
                >
                  {/* Floating Image Area */}
                  <div className="absolute top-4 left-4 right-4 h-32 flex items-center justify-center">
                     <img 
                       src={card.image} 
                       alt={card.title} 
                       className="w-full h-full object-cover rounded-2xl shadow-sm opacity-90 group-hover:opacity-100 transition-opacity"
                     />
                  </div>
                  
                  {/* Text Content */}
                  <div className="relative z-10 mt-2">
                    <h3 className={`text-[22px] font-medium leading-tight mb-4 tracking-tight ${index === 0 ? 'text-gray-900' : 'text-white'}`}>
                      {card.title.split(' ').map((word, i) => (
                        <span key={i} className="block">{word}</span>
                      ))}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider opacity-70 group-hover:opacity-100 transition-opacity">
                      <span>Read more</span>
                      {index === 0 && (
                        <MousePointer2 className="w-4 h-4 ml-1" />
                      )}
                    </div>
                  </div>
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
