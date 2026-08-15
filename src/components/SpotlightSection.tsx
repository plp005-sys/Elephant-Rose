import { motion } from 'motion/react';
import story1 from '../assets/images/boy_holding_seedling_1786047643938.jpg';
import story2 from '../assets/images/IMG_8157.jpg';
import story3 from '../assets/images/IMG_7945.jpg';
import story4 from '../assets/images/IMG_7621.jpg';

const stories = [
  {
    id: 1,
    title: 'The Green around us; partnering with schools and communities for  replantation and tree conserving projects.',
    date: 'January 15, 2024',
    image: story1,
  },
  {
    id: 2,
    title: 'Environmental Education Outreach',
    date: 'March 5, 2024',
    image: story2,
  },
  {
    id: 3,
    title: 'The gentle giant... A touch of friendship',
    date: 'May 20, 2024',
    image: story3,
  },
  {
    id: 4,
    title: 'From hearts to hearts - The R-Team.',
    date: 'July 22, 2024',
    image: story4,
  },
];

export default function SpotlightSection() {
  return (
    <section className="py-24 relative z-10 font-sans">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="bg-white/10 backdrop-blur-md border border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(255,255,255,0.2)] rounded-[40px] p-8 md:p-12 relative overflow-hidden">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#71ea27] tracking-tight text-center">
              Current Initiatives
            </h2>
            <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto mt-3">
              Our journey in images, from filming sites, outreach expeditions, fundraisers, seminars and classes...
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-[280px] rounded-[32px] overflow-hidden block"
              >
                {/* Background Image */}
                <img 
                  loading="lazy"
                  decoding="async"
                  width={600}
                  height={400}
                  src={story.image}
                  alt={story.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 bg-[#0a2e23]"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex items-end justify-between gap-4">
                  <h3 className="text-white text-sm md:text-base font-bold leading-tight group-hover:text-[#71ea27] transition-colors duration-300">
                    {story.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
