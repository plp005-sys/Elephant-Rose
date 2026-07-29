import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import story1 from '../assets/images/story_reforestation_1784826410808.jpg';
import story2 from '../assets/images/story_plastic_waste_1784826425283.jpg';
import story3 from '../assets/images/story_solar_farm_1784826437624.jpg';
import story4 from '../assets/images/story_urban_green_1784826450104.jpg';

const stories = [
  {
    id: 1,
    title: 'Global Reforestation Initiative Hits 1 Million Trees Planted',
    date: 'January 15, 2024',
    image: story1,
  },
  {
    id: 2,
    title: 'New Legislation to Curb Plastic Waste Gains Global Support',
    date: 'March 5, 2024',
    image: story2,
  },
  {
    id: 3,
    title: 'Largest Solar Farm in the Region Goes Operational',
    date: 'May 20, 2024',
    image: story3,
  },
  {
    id: 4,
    title: 'Urban Green Spaces Project Transforms Cities Globally',
    date: 'July 22, 2024',
    image: story4,
  },
];

export default function SpotlightSection() {
  return (
    <section className="py-24 relative z-10 font-sans">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="bg-white/10 backdrop-blur-md border border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(255,255,255,0.2)] rounded-[40px] p-8 md:p-12 relative overflow-hidden">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a473a] tracking-tight">
              In the Spotlight: Stories That Matter
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-[280px] rounded-[32px] overflow-hidden cursor-pointer"
              >
                {/* Background Image */}
                <img loading="lazy"
                  src={story.image}
                  alt={story.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-white text-xl md:text-2xl font-bold leading-tight mb-3 pr-12 group-hover:text-[#71ea27] transition-colors duration-300">
                    {story.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 text-sm font-medium">
                      {story.date}
                    </span>
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:bg-[#c60c91] transition-colors duration-300">
                      <ArrowUpRight className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
