import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedLeaves from '../components/AnimatedLeaves';
import { 
  Droplets, 
  HeartHandshake, 
  Compass, 
  Trees, 
  CheckCircle2, 
  Flame, 
  Eye, 
  Tv, 
  GraduationCap, 
  ShieldCheck, 
  Sprout, 
  BookOpen, 
  Users2, 
  Sparkles, 
  Lightbulb 
} from 'lucide-react';
import boreholeRigSunset from '../assets/images/borehole_drilling_sunset_1786998939130.jpg';
import gardenPeaceSanctuary from '../assets/images/garden_of_peace_sanctuary_1786999773912.jpg';
import studentsPuttingOutFire from '../assets/images/students_putting_out_fire_1787000710420.jpg';
import studentsWatchingAnimals from '../assets/images/students_watching_animals_1787000723552.jpg';
import studentsClassroomNature from '../assets/images/students_classroom_nature_1787000734810.jpg';

const educationScenarios = [
  {
    id: 'bushfire-management',
    badge: 'Field Practice & Safety',
    badgeIcon: Flame,
    title: 'Bushfire Control & Grassroots Defense',
    context: 'Rural students actively learning bushfire mitigation techniques, putting out creeping grass fires using tree branches.',
    image: studentsPuttingOutFire,
    imageAlt: 'Young African students working together to put out a bushfire using tree branches',
    advantages: [
      {
        title: 'Community Disaster Resilience',
        desc: 'Equips youth with immediate practical safety skills to protect village crops, homesteads, and natural grazing corridors.'
      },
      {
        title: 'Habitat & Flora Preservation',
        desc: 'Prevents uncontrolled veld fires from destroying topsoil microorganisms, native saplings, and wild bird nesting grounds.'
      },
      {
        title: 'Collective Civic Responsibility',
        desc: 'Fosters unity, quick teamwork, and an ingrained sense of community ownership over vulnerable rural landscapes.'
      }
    ]
  },
  {
    id: 'wildlife-immersion',
    badge: 'Outdoor Ecology',
    badgeIcon: Eye,
    title: 'Wildlife Observation & Coexistence',
    context: 'Students silently traversing bush trails to observe small native animals grazing peacefully in their natural habitat.',
    image: studentsWatchingAnimals,
    imageAlt: 'Students standing in the bush observing small grazing wild animals peacefully',
    advantages: [
      {
        title: 'Compassion & Stewardship',
        desc: 'Transforms abstract classroom concepts into visceral empathy, teaching children to respect animals as peaceful neighbors.'
      },
      {
        title: 'Biodiversity Literacy',
        desc: 'Provides hands-on recognition of animal behaviors, migration paths, and the ecological roles of native flora and fauna.'
      },
      {
        title: 'Anti-Poaching Foundations',
        desc: 'Builds early cultural pride and moral responsibility, rejecting destructive snaring and poaching in favor of preservation.'
      }
    ]
  },
  {
    id: 'classroom-documentaries',
    badge: 'Visual Literacy & Inspiration',
    badgeIcon: Tv,
    title: 'Documentaries & Eco-Science Learning',
    context: 'Students in remote school classrooms engrossed in wildlife and conservation films, broadening their ecological perspective.',
    image: studentsClassroomNature,
    imageAlt: 'Rural African students in a classroom watching an inspiring wildlife documentary on a screen',
    advantages: [
      {
        title: 'Bridging the Rural Knowledge Gap',
        desc: 'Delivers high-quality ecological media and global conservation insights to children in under-resourced remote schools.'
      },
      {
        title: 'Inspiring Green Careers',
        desc: 'Sparks ambitions in young minds to pursue careers in veterinary medicine, forestry, eco-tourism, and park management.'
      },
      {
        title: 'Critical Environmental Thinking',
        desc: 'Empowers kids to discuss climate adaptation, watershed protection, and sustainable tree planting with their families.'
      }
    ]
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

      <main className="flex-grow flex flex-col items-center justify-center relative z-10 pt-28 pb-20 px-4 md:px-8 space-y-16">
        
        {/* Rural Borehole Sinking & Garden of Peace Section */}
        <motion.section 
          id="borehole-project"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-6xl mx-auto rounded-3xl overflow-hidden relative scroll-mt-28"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
          }}
        >
          <div className="p-8 md:p-12 lg:p-16">
            
            {/* Project Status Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-white/20">
              <div className="inline-flex items-center gap-2 bg-[#71ea27]/25 border border-[#71ea27]/60 px-4 py-1.5 rounded-full text-[#71ea27] font-bold text-sm tracking-wide shadow-sm drop-shadow">
                <Droplets className="w-4 h-4 animate-pulse text-[#71ea27]" />
                <span className="drop-shadow-sm">Featured Project • In Progress</span>
              </div>
              <div className="text-xs font-semibold tracking-widest uppercase text-white/80 drop-shadow-sm bg-black/30 px-3.5 py-1.5 rounded-full border border-white/10">
                SkyGold Estate • Domboshava, Goromonzi
              </div>
            </div>

            {/* Title & Vision */}
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight mb-4 drop-shadow-md">
                Rural Borehole Sinking <br className="hidden sm:inline" />
                <span className="text-[#71ea27] drop-shadow-[0_2px_12px_rgba(113,234,39,0.35)]">&amp; The 'Garden of Peace'</span>
              </h2>
              <p className="text-white/95 text-base md:text-lg leading-relaxed font-medium drop-shadow-sm">
                One Vision, Many Hands: Our active rural borehole project brings vital water access to sustain life, protect indigenous flora, and nurture our dedicated sanctuary.
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-6">
              
              {/* Image Showcase */}
              <div className="lg:col-span-6 space-y-4">
                {/* Borehole Drilling Rig Image */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/20 shadow-2xl group">
                  <img 
                    id="borehole-project-image"
                    src={boreholeRigSunset} 
                    alt="Rural borehole drilling rig in action with water tanks and pipes at golden sunset" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-sm text-white drop-shadow-md">
                    <p className="font-bold text-[#71ea27] text-base">Borehole Drilling in Progress</p>
                  </div>
                </div>

                {/* Garden of Peace Sanctuary Image */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/20 shadow-2xl group">
                  <img 
                    id="garden-peace-image"
                    src={gardenPeaceSanctuary} 
                    alt="The Garden of Peace sanctuary and reflection pool at SkyGold Estate" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-sm text-white drop-shadow-md">
                    <p className="font-bold text-[#71ea27] text-base">The 'Garden of Peace' Sanctuary</p>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 pt-1">
                  <div className="bg-black/35 backdrop-blur-md border border-white/15 rounded-2xl p-4 text-center shadow-lg">
                    <span className="text-2xl md:text-3xl font-extrabold text-[#71ea27] block drop-shadow">100%</span>
                    <span className="text-xs text-white font-medium">Clean Groundwater Source</span>
                  </div>
                  <div className="bg-black/35 backdrop-blur-md border border-white/15 rounded-2xl p-4 text-center shadow-lg">
                    <span className="text-2xl md:text-3xl font-extrabold text-[#71ea27] block drop-shadow">Sanctuary</span>
                    <span className="text-xs text-white font-medium">Open for Community Retreat</span>
                  </div>
                </div>
              </div>

              {/* Story & Garden of Peace Details */}
              <div className="lg:col-span-6 space-y-6">
                
                <div className="space-y-4 text-white text-base leading-relaxed font-normal drop-shadow-sm bg-black/25 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
                  <p>
                    We are currently advancing a crucial <strong className="text-white font-bold underline decoration-[#71ea27]/50 underline-offset-4">rural borehole sinking project</strong> at the heart of our community site. Water is the lifeblood of our conservation mission, unlocking sustainable irrigation and resilient greening.
                  </p>
                  <p>
                    Once complete, the borehole will directly water the <strong className="text-[#71ea27] font-bold">'Garden of Peace'</strong> — a quiet plantation bush nestled within the SkyGold Estate.
                  </p>
                </div>

                {/* Sanctuary Features Box */}
                <div className="bg-black/45 backdrop-blur-md border border-white/15 rounded-2xl p-6 space-y-4 shadow-xl">
                  <div className="flex items-center gap-2.5 text-white font-bold text-base md:text-lg">
                    <Trees className="w-5 h-5 text-[#71ea27] drop-shadow" />
                    <span className="drop-shadow-sm">A Haven in Nature at SkyGold Estate</span>
                  </div>

                  <ul className="space-y-3 text-sm text-white/95 leading-snug">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#71ea27] shrink-0 mt-0.5" />
                      <span><strong className="text-white font-semibold">Quiet Retreats &amp; Solitude:</strong> A peaceful refuge designed for meditation, reflection, and rejuvenation.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#71ea27] shrink-0 mt-0.5" />
                      <span><strong className="text-white font-semibold">Prayer &amp; Contemplation:</strong> Welcoming visitors seeking serene open spaces for prayer and spiritual calm.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#71ea27] shrink-0 mt-0.5" />
                      <span><strong className="text-white font-semibold">A Get-Away from World Noise:</strong> Unplug from urban distractions and immerse yourself in birdsong and indigenous trees.</span>
                    </li>
                  </ul>
                </div>

                {/* Action Links */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-[#71ea27] hover:bg-[#5ec81e] text-[#111] font-bold py-3.5 px-6 rounded-xl transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(113,234,39,0.3)] text-sm"
                  >
                    <HeartHandshake className="w-4 h-4" />
                    Support This Project
                  </a>
                  <a
                    href="https://wa.me/263772112011?text=Hello,%20I%20would%20like%20to%20learn%20more%20about%20the%20Rural%20Borehole%20Sinking%20and%20Garden%20of%20Peace%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-black/40 hover:bg-black/60 border border-white/25 text-white font-semibold py-3.5 px-6 rounded-xl transition-all text-sm backdrop-blur-sm shadow-md"
                  >
                    <Compass className="w-4 h-4 text-[#71ea27]" />
                    Inquire About Visiting
                  </a>
                </div>

              </div>

            </div>

          </div>
        </motion.section>

        {/* Environmental Education & Wildlife Stewardship Section */}
        <motion.section 
          id="environmental-education"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-6xl mx-auto rounded-3xl overflow-hidden relative scroll-mt-28"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
          }}
        >
          <div className="p-8 md:p-12 lg:p-16">
            
            {/* Top Pill / Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-white/20">
              <div className="inline-flex items-center gap-2 bg-[#71ea27]/25 border border-[#71ea27]/60 px-4 py-1.5 rounded-full text-[#71ea27] font-bold text-sm tracking-wide shadow-sm drop-shadow">
                <GraduationCap className="w-4 h-4 text-[#71ea27]" />
                <span className="drop-shadow-sm">Children's Environmental Education</span>
              </div>
              <div className="text-xs font-semibold tracking-widest uppercase text-white/80 drop-shadow-sm bg-black/30 px-3.5 py-1.5 rounded-full border border-white/10">
                Remote &amp; Rural Community Stewardship
              </div>
            </div>

            {/* Section Header */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-start">
              <div className="lg:col-span-7">
                <span className="text-[#71ea27] font-bold tracking-widest uppercase text-xs md:text-sm block mb-2">
                  Wildlife Stewardship &amp; Youth Empowerment
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight drop-shadow-md">
                  Achieve More, <br />
                  <span className="text-[#71ea27] drop-shadow-[0_2px_12px_rgba(113,234,39,0.35)]">Together</span>
                </h2>
              </div>
              <div className="lg:col-span-5 bg-black/30 backdrop-blur-md p-6 rounded-2xl border border-white/15 shadow-lg">
                <p className="text-white/95 text-base md:text-lg leading-relaxed font-medium drop-shadow-sm">
                  "Our work is dedicated to imparting knowledge of wildlife stewardship and children's environmental education, mostly in remote areas."
                </p>
                <div className="mt-4 flex items-center gap-3 text-xs font-semibold text-[#71ea27]">
                  <Sparkles className="w-4 h-4" />
                  <span>Hands-on learning that preserves biodiversity and saves lives</span>
                </div>
              </div>
            </div>

            {/* 3 Scenario Cards with Detailed Advantages */}
            <div className="space-y-12">
              {educationScenarios.map((scenario, index) => {
                const BadgeIcon = scenario.badgeIcon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={scenario.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="bg-black/40 backdrop-blur-md border border-white/15 rounded-3xl p-6 md:p-8 shadow-2xl hover:border-white/25 transition-all duration-300"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      
                      {/* Image side */}
                      <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/20 shadow-2xl group">
                          <img 
                            src={scenario.image} 
                            alt={scenario.imageAlt} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                          <div className="absolute top-4 left-4">
                            <span className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md border border-white/25 text-[#71ea27] px-3 py-1 rounded-full text-xs font-bold shadow-md">
                              <BadgeIcon className="w-3.5 h-3.5 text-[#71ea27]" />
                              {scenario.badge}
                            </span>
                          </div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <p className="text-white text-sm font-semibold drop-shadow-md">
                              {scenario.title}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Content & Educational Advantages */}
                      <div className={`lg:col-span-6 space-y-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 leading-tight">
                            {scenario.title}
                          </h3>
                          <p className="text-white/85 text-sm md:text-base leading-relaxed">
                            {scenario.context}
                          </p>
                        </div>

                        {/* Advantages list */}
                        <div className="space-y-3 pt-2">
                          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#71ea27]">
                            <ShieldCheck className="w-4 h-4" />
                            <span>Advantages of Environmental Education</span>
                          </div>

                          <div className="space-y-3">
                            {scenario.advantages.map((adv, aIdx) => (
                              <div 
                                key={aIdx} 
                                className="bg-white/5 border border-white/10 rounded-xl p-3.5 hover:bg-white/10 transition-colors"
                              >
                                <h4 className="text-white font-bold text-sm mb-1 flex items-center gap-2">
                                  <span className="w-2 h-2 rounded-full bg-[#71ea27] shrink-0" />
                                  {adv.title}
                                </h4>
                                <p className="text-white/80 text-xs md:text-sm leading-relaxed pl-4">
                                  {adv.desc}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Core Impact Summary Banner */}
            <div className="mt-14 bg-gradient-to-r from-black/60 via-black/40 to-black/60 border border-white/15 rounded-3xl p-8 text-center backdrop-blur-md shadow-2xl relative overflow-hidden">
              <div className="max-w-3xl mx-auto space-y-4">
                <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-[#71ea27]/20 border border-[#71ea27]/40 text-[#71ea27] mb-1">
                  <Sprout className="w-6 h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white">
                  Cultivating a Lifetime of Rural Conservation
                </h3>
                <p className="text-white/90 text-sm md:text-base leading-relaxed">
                  When children in remote areas understand ecology, wildlife behavior, and fire prevention, they become the first line of defense for Africa's most cherished ecosystems.
                </p>
                <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#71ea27] hover:bg-[#5ec81e] text-[#111] font-bold py-3 px-6 rounded-xl transition-all hover:scale-105 shadow-[0_0_20px_rgba(113,234,39,0.3)] text-sm"
                  >
                    <BookOpen className="w-4 h-4" />
                    Partner in Education
                  </a>
                  <a
                    href="https://wa.me/263772112011?text=Hello,%20I%20would%20like%20to%20learn%20more%20about%20your%20environmental%20education%20programs%20for%20remote%20schools."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-black/40 hover:bg-black/60 border border-white/25 text-white font-semibold py-3 px-6 rounded-xl transition-all text-sm backdrop-blur-sm"
                  >
                    <Users2 className="w-4 h-4 text-[#71ea27]" />
                    Support a Remote School
                  </a>
                </div>
              </div>
            </div>

          </div>
        </motion.section>

      </main>
      
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

