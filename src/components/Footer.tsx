import { Send, PlaySquare, Facebook, Instagram, Twitter, Youtube, MapPin, Mail, MessageCircle } from 'lucide-react';
import rosieLogo from '../assets/images/Rosie logo icon.jpg';

interface FooterProps {
  textWhiteBold?: boolean;
}

export default function Footer({ textWhiteBold = false }: FooterProps) {
  return (
    <footer className="relative z-10 glass-panel !rounded-none !border-b-0 !border-x-0 mt-20 pt-16">
      <div className="px-6 container mx-auto max-w-7xl flex justify-center mb-16">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
          <img src={rosieLogo} alt="The Elephant Rose Foundation Logo" className="w-64 h-auto object-contain rounded-md shrink-0" />
          <div className="mt-1 flex flex-col items-center sm:items-start">
            <h4 className={`text-base uppercase tracking-widest font-bold mb-5 ${textWhiteBold ? 'text-white font-black drop-shadow' : 'text-white/90'}`}>Contacts</h4>
            <div className={`space-y-4 text-sm md:text-base ${textWhiteBold ? 'text-white font-bold drop-shadow-sm' : 'text-gray-300'}`}>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#71ea27] shrink-0 mt-0.5" />
                <p className={textWhiteBold ? 'text-white font-bold' : ''}>11 Courtney Rd, Ballantyne Park, Harare.</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#71ea27] shrink-0 mt-0.5" />
                <p className={textWhiteBold ? 'text-white font-bold' : ''}>SkyGold Estate, 01 DRC Govera Village Domboshava, Goromonzi Rural District.</p>
              </div>
              <a 
                href="https://wa.me/263772112011" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`flex items-center gap-3 hover:text-[#71ea27] transition-colors group ${textWhiteBold ? 'text-white font-bold' : 'text-gray-300'}`}
              >
                <MessageCircle className="w-5 h-5 text-[#71ea27] shrink-0 group-hover:scale-110 transition-transform" />
                <p className={textWhiteBold ? 'text-white font-bold' : ''}>+263 77 211 2011</p>
              </a>
              <a 
                href="mailto:elephantrose@gmail.com" 
                className={`flex items-center gap-3 hover:text-[#71ea27] transition-colors group ${textWhiteBold ? 'text-white font-bold' : 'text-gray-300'}`}
              >
                <Mail className="w-5 h-5 text-[#71ea27] shrink-0 group-hover:scale-110 transition-transform" />
                <p className={textWhiteBold ? 'text-white font-bold' : ''}>elephantrose@gmail.com</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#71ea27] px-6 py-4">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center text-sm font-semibold text-[#050b06]">
          <p className="mb-4 md:mb-0">
            &copy; 2026 The Elephant Rose Foundation. All Rights Reserved.
          </p>
          <div className="flex items-center gap-3">
            <a href="#" className="bg-white text-[#71ea27] p-2 rounded-full hover:bg-[#050b06] hover:text-[#71ea27] transition-colors flex items-center justify-center">
              <Facebook className="w-4 h-4 fill-current" />
            </a>
            <a href="#" className="bg-white text-[#71ea27] p-2 rounded-full hover:bg-[#050b06] hover:text-[#71ea27] transition-colors flex items-center justify-center">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="bg-white text-[#71ea27] p-2 rounded-full hover:bg-[#050b06] hover:text-[#71ea27] transition-colors flex items-center justify-center">
              <Twitter className="w-4 h-4 fill-current" />
            </a>
            <a href="#" className="bg-white text-[#71ea27] p-2 rounded-full hover:bg-[#050b06] hover:text-[#71ea27] transition-colors flex items-center justify-center">
              <Youtube className="w-4 h-4 fill-current" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
