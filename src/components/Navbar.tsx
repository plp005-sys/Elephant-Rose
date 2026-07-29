import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../assets/images/regenerated_image_1784761103325.png';

export default function Navbar() {
  const location = useLocation();

  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    return `transition-colors duration-300 active:text-[#71ea27] ${isActive ? 'text-[#71ea27]' : 'text-gray-300 hover:text-[#71ea27]'}`;
  };

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between glass-panel !rounded-none !border-t-0 !border-x-0"
    >
      <div className="flex items-center gap-12">
        <div className="flex items-center">
          <Link to="/">
            <img src={logoImage} alt="Logo" className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover shadow-sm" />
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-4 lg:gap-8 text-xs font-bold uppercase tracking-widest">
          <Link to="/" className={getLinkClass('/')}>Home</Link>
          <Link to="/about" className={getLinkClass('/about')}>About Us</Link>
          <Link to="/features" className={getLinkClass('/features')}>Features</Link>
          <Link to="/our-work" className={getLinkClass('/our-work')}>Our Work</Link>
          <Link to="/contact" className={getLinkClass('/contact')}>Contact</Link>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Link to="/contact#donate" className="glass-button px-6 py-2 rounded-full text-xs uppercase tracking-widest font-medium text-white inline-block text-center">Donate</Link>
        <button className="glass-button px-6 py-2 rounded-full text-xs uppercase tracking-widest font-medium text-white">Join Us</button>
      </div>
    </motion.nav>
  );
}
