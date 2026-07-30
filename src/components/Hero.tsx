import { motion } from 'motion/react';
import heroBg from '../assets/images/acacia-tree-featured-1024x605.jpg';
import cardImg1 from '../assets/images/regenerated_image_1785448799308.jpg';
import cardImg2 from '../assets/images/regenerated_image_1785449435958.png';
import cardImg3 from '../assets/images/regenerated_image_1785449769722.jpg';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative pt-32 pb-12 overflow-hidden flex flex-col justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-[#050b06]/30 z-0"></div>
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center mb-16 relative z-10">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-xl z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
            Small Actions,<br />
            <span className="text-[#71ea27]">Big Impact</span>
          </h1>
          <p className="text-lg text-gray-300 mb-10 max-w-md italic">
            "A noble plan once recorded never dies, but will live on long after we are gone"
          </p>
          <a href="#about" className="inline-block bg-[#bce3a5] text-green-900 font-bold px-8 py-3 rounded-full text-sm hover:bg-[#a6d18f] transition-all duration-300">
            Our Approach
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="relative h-[400px] md:h-[500px] hidden md:flex justify-center items-center"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#050b06] to-transparent z-10 bottom-0 top-1/2 pointer-events-none" />
          <video 
            src="https://ik.imagekit.io/csia005/kling_20260709_Image_to_Video__781_0.mp4?updatedAt=1783538491981" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="object-cover h-full w-full rounded-3xl"
            style={{ maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)' }}
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {[
          {
            title: 'Conservation & Environmental Education',
            desc: 'Safeguarding our green planet',
            img: cardImg1,
            bg: 'bg-blue-500/10 hover:bg-blue-500/20',
            border: 'border-blue-500/20',
            imgClass: 'object-center'
          },
          {
            title: 'Media Projects & Cinema',
            desc: 'Inspiring stories through Books, Films, Documentaries, Animation & Music',
            img: cardImg2,
            bg: 'bg-green-500/10 hover:bg-green-500/20',
            border: 'border-green-500/20',
            imgClass: 'object-center md:object-[center_20%]'
          },
          {
            title: 'Fundraisers, Merch, Donations & Book Sales',
            desc: 'Learn More',
            img: cardImg3,
            bg: 'bg-gray-500/10 hover:bg-gray-500/20',
            border: 'border-gray-500/20',
            imgClass: 'object-center md:object-[center_20%]'
          }
        ].map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 + idx * 0.2 }}
            className={`glass-panel p-8 flex flex-col items-center text-center transition-colors duration-300 ${card.bg} ${card.border}`}
          >
            <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 relative shadow-lg">
               <img src={card.img} alt={card.title} className={`w-full h-full object-cover transition-transform duration-500 hover:scale-110 ${card.imgClass}`} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">{card.title}</h3>
            <p className="text-sm text-gray-400">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
