import { motion } from 'motion/react';
import { Video, Users, Tent, HandHeart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedLeaves from '../components/AnimatedLeaves';

export default function AboutUs() {
  return (
    <div className="min-h-screen relative font-sans selection:bg-green-500/30 text-white flex flex-col">
      <div 
        className="fixed inset-0 z-[-2]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1545241047-6083a36a1c08?auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      <div className="fixed inset-0 bg-black/40 z-[-1] pointer-events-none" />
      <AnimatedLeaves />
      <Navbar />
      
      <main className="pt-32 pb-24">
        {/* Header Section */}
        <section className="px-6 mb-20">
          <div className="container mx-auto max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
                The Elephant Rose Foundation
              </h1>
              <p 
                className="text-3xl md:text-4xl text-[#71ea27] mb-8 tracking-wide"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                "To forgive the unforgivable, and loving even the unlovable"
              </p>
              <div className="w-24 h-1 bg-[#71ea27]/50 mx-auto rounded-full mb-8"></div>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                We are an environmental conservation NGO based in Zimbabwe dedicated to supporting children's environmental education and wildlife custodianship. We promote conservation and environmental education for future generations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="px-6 mb-24">
          <div className="container mx-auto max-w-6xl">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                { icon: Video, title: "Cinema", desc: "Using the power of visual storytelling to inspire environmental stewardship." },
                { icon: Users, title: "Seminars", desc: "Engaging communities and experts to share knowledge and conservation strategies." },
                { icon: Tent, title: "Outreach", desc: "Hands-on projects and field education connecting youth directly with nature." },
                { icon: HandHeart, title: "Fundraisers", desc: "Mobilizing resources to sustain critical wildlife and habitat protection efforts." }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-panel p-8 text-center flex flex-col items-center group hover:bg-white/5 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-panel p-10 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-[50px] rounded-full"></div>
                <h2 className="text-2xl font-bold text-green-300 mb-4 tracking-wider uppercase">Our Mission</h2>
                <p className="text-white/80 leading-relaxed relative z-10">
                  To empower the next generation of wildlife custodians in Zimbabwe by providing comprehensive environmental education and hands-on conservation experiences. We believe that protecting our natural heritage starts with inspiring our youth.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-panel p-10 relative overflow-hidden"
              >
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full"></div>
                <h2 className="text-2xl font-bold text-blue-300 mb-4 tracking-wider uppercase">Our Vision</h2>
                <p className="text-white/80 leading-relaxed relative z-10">
                  A future where Zimbabwe's wildlife and natural habitats thrive in harmony with local communities, supported by a generation of deeply educated and passionate environmental stewards.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
