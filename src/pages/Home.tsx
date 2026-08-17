import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AnimatedLeaves from '../components/AnimatedLeaves';
import AboutSection from '../components/AboutSection';
import ImpactDashboard from '../components/ImpactDashboard';
import RebuildingSection from '../components/RebuildingSection';
import SpotlightSection from '../components/SpotlightSection';
import VideoSection from '../components/VideoSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen relative font-sans selection:bg-green-500/30">
      <div className="fixed inset-0 bg-black/40 z-[-1] pointer-events-none" />
      <AnimatedLeaves />
      <Navbar />
      
      <main>
        <Hero />
        <AboutSection />
        <ImpactDashboard />
        <RebuildingSection />
        <SpotlightSection />
        <VideoSection />
      </main>
      <Footer />
    </div>
  );
}
