import { motion } from 'motion/react';

const plants = [
  { name: "AUCUBA", price: "20.99 $", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=400&q=80" },
  { name: "DRACAENA", price: "19.99 $", image: "https://images.unsplash.com/photo-1597055905081-8b01056502ba?auto=format&fit=crop&w=400&q=80" },
  { name: "AGLAONEMA SILVER", price: "14.99 $", image: "https://images.unsplash.com/photo-1616843798939-c5cce4ec48ab?auto=format&fit=crop&w=400&q=80" },
  { name: "CALLA", price: "11.99 $", image: "https://images.unsplash.com/photo-1600411833196-1c731a29ed01?auto=format&fit=crop&w=400&q=80" },
  { name: "ASPLENIUM", price: "13.99 $", image: "https://images.unsplash.com/photo-1598880940080-c9a9c20a9bc4?auto=format&fit=crop&w=400&q=80" },
  { name: "CORDILLINA KIWI", price: "19.99 $", image: "https://images.unsplash.com/photo-1613739118925-cde1e8f5d65b?auto=format&fit=crop&w=400&q=80" },
  { name: "KALATEA ZEBRINA", price: "20.99 $", image: "https://images.unsplash.com/photo-1611211232932-da3113c5b960?auto=format&fit=crop&w=400&q=80" },
  { name: "FATSIA JAPONICA", price: "15.99 $", image: "https://images.unsplash.com/photo-1599598425947-33002621ec6b?auto=format&fit=crop&w=400&q=80" },
  { name: "CALATHEA", price: "11.99 $", image: "https://images.unsplash.com/photo-1595053982937-56e6d1acbdde?auto=format&fit=crop&w=400&q=80" }
];

export default function Catalog() {
  return (
    <section 
      id="catalog" 
      className="py-24 px-6 relative z-10"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white text-center font-sans tracking-tight leading-tight">
            Making an Impact,<br />
            One Feature at a Time
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-white/80 text-center text-sm md:text-base leading-relaxed">
              Empowering individuals and communities to create a more sustainable<br className="hidden md:block" />
              world. Together, we're building a greener future, one step at a time.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plants.map((plant, index) => (
            <motion.div
              key={plant.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass-panel p-6 flex flex-col items-center group hover:bg-white/10 transition-colors duration-500"
            >
              <div className="h-64 w-full mb-6 overflow-hidden rounded-xl relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 mix-blend-multiply" />
                <img 
                  src={plant.image} 
                  alt={plant.name} 
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="text-lg tracking-widest uppercase mb-2 font-medium">{plant.name}</h3>
              <p className="text-xs text-gray-400 mb-4 text-center">A brief description of this plant, etc.</p>
              <span className="text-xl font-medium mb-6 text-green-300">{plant.price}</span>
              <button className="glass-button w-full py-3 rounded-full text-sm uppercase tracking-wider">
                Buy it now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
