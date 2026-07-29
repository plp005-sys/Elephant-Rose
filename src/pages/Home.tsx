import { lazy, Suspense } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AnimatedLeaves from '../components/AnimatedLeaves';

const AboutSection = lazy(() => import('../components/AboutSection'));
const Catalog = lazy(() => import('../components/Catalog'));
const Footer = lazy(() => import('../components/Footer'));
const ImpactDashboard = lazy(() => import('../components/ImpactDashboard'));
const AnimatedTree = lazy(() => import('../components/AnimatedTree'));
const RebuildingSection = lazy(() => import('../components/RebuildingSection'));
const SpotlightSection = lazy(() => import('../components/SpotlightSection'));
const VideoSection = lazy(() => import('../components/VideoSection'));

export default function Home() {
  return (
    <div className="min-h-screen relative font-sans selection:bg-green-500/30">
      <div className="fixed inset-0 bg-black/40 z-[-1] pointer-events-none" />
      <AnimatedLeaves />
      <Navbar />
      
      <main>
        <Hero />
        <Suspense fallback={<div className="h-24" />}>
          <AboutSection />
          <Catalog />
          <AnimatedTree />
          <ImpactDashboard />
          <RebuildingSection />
          <SpotlightSection />
          <VideoSection />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-24" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
