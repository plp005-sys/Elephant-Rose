import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, HeartHandshake } from 'lucide-react';
import logoImage from '../assets/images/regenerated_image_1784761103325.png';

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu whenever location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'Our Work', path: '/our-work' },
    { name: 'Contact', path: '/contact' },
  ];

  const isLinkActive = (path: string) => {
    return location.pathname === path;
  };

  const getDesktopLinkClass = (path: string) => {
    const active = isLinkActive(path);
    return `transition-colors duration-300 active:text-[#71ea27] ${active ? 'text-[#71ea27]' : 'text-gray-300 hover:text-[#71ea27]'}`;
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between glass-panel !rounded-none !border-t-0 !border-x-0"
      >
        <div className="flex items-center gap-6 lg:gap-12">
          <Link to="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
            <img 
              src={logoImage} 
              alt="The Elephant Rose Foundation Logo" 
              className="h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-full object-cover shadow-sm transition-transform duration-300 group-hover:scale-105" 
            />
          </Link>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8 text-xs font-bold uppercase tracking-widest">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={getDesktopLinkClass(link.path)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <Link 
            to="/contact#donate" 
            className="glass-button px-6 py-2 rounded-full text-xs uppercase tracking-widest font-medium text-white inline-block text-center hover:text-[#71ea27] hover:border-[#71ea27]"
          >
            Donate
          </Link>
          <Link
            to="/contact#get-in-touch"
            className="glass-button px-6 py-2 rounded-full text-xs uppercase tracking-widest font-medium text-white inline-block text-center hover:text-[#71ea27] hover:border-[#71ea27]"
          >
            Join Us
          </Link>
        </div>

        {/* Mobile Controls (Donate + Hamburger Button) */}
        <div className="flex md:hidden items-center gap-2.5">
          <Link 
            to="/contact#donate" 
            className="px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#71ea27] text-[#0a2312] hover:bg-[#85f63d] transition-colors"
          >
            Donate
          </Link>

          <button
            type="button"
            id="mobile-menu-toggle-button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            className="p-2 rounded-xl bg-white/10 border border-white/20 text-white hover:text-[#71ea27] hover:border-[#71ea27] hover:bg-white/15 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#71ea27]"
          >
            {isOpen ? <X className="w-6 h-6 text-[#71ea27]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-black/75 backdrop-blur-md pt-20 pb-8 px-6 flex flex-col justify-between overflow-y-auto"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="flex flex-col gap-2 pt-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pb-3 mb-3 border-b border-white/15">
                <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Navigation</span>
              </div>

              {navLinks.map((link, idx) => {
                const active = isLinkActive(link.path);
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.08 + idx * 0.04 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between py-3.5 px-4 rounded-xl text-base font-semibold transition-all ${
                        active
                          ? 'bg-[#71ea27]/15 text-[#71ea27] border border-[#71ea27]/30 shadow-[0_0_15px_rgba(113,234,39,0.15)]'
                          : 'text-gray-200 hover:text-[#71ea27] hover:bg-white/5 active:bg-white/10'
                      }`}
                    >
                      <span>{link.name}</span>
                      {active && <span className="h-2 w-2 rounded-full bg-[#71ea27]" />}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Mobile Actions Footer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="flex flex-col gap-3 pt-6 border-t border-white/15 mt-6"
              onClick={(e) => e.stopPropagation()}
            >
              <Link
                to="/contact#donate"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#71ea27] text-[#0a2312] font-bold text-base shadow-[0_0_20px_rgba(113,234,39,0.35)] hover:bg-[#85f63d] transition-all"
              >
                <HeartHandshake className="w-5 h-5" />
                <span>Donate & Support</span>
              </Link>
              <Link
                to="/contact#get-in-touch"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center py-3 px-6 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-sm hover:border-[#71ea27] hover:text-[#71ea27] transition-all"
              >
                Get In Touch / Join Us
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

