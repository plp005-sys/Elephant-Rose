import { Send, PlaySquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 glass-panel !rounded-none !border-b-0 !border-x-0 mt-20 pt-16 pb-8 px-6">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div>
          <h4 className="text-sm uppercase tracking-widest font-bold mb-6 text-white/80">Contacts</h4>
          <div className="space-y-4 text-gray-300 text-sm">
            <p>+44-7871234567</p>
            <p>plantsstore@gmail.com</p>
            <p>Our social networks:</p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-white transition-colors"><Send className="w-6 h-6" /></a>
              <a href="#" className="hover:text-white transition-colors"><PlaySquare className="w-6 h-6" /></a>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest font-bold mb-6 text-white/80">Catalog</h4>
          <div className="space-y-4 text-gray-300 text-sm flex flex-col items-start">
            <a href="#" className="hover:text-white transition-colors">Plants</a>
            <a href="#" className="hover:text-white transition-colors">Plant Care Products</a>
            <a href="#" className="hover:text-white transition-colors">Pots and planters</a>
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest font-bold mb-6 text-white/80">About store</h4>
          <div className="space-y-4 text-gray-300 text-sm flex flex-col items-start">
            <a href="#" className="hover:text-white transition-colors">Blog</a>
            <a href="#" className="hover:text-white transition-colors">About us</a>
            <a href="#" className="hover:text-white transition-colors">Q&A</a>
            <a href="#" className="hover:text-white transition-colors">Delivery and payment</a>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 pt-8 border-t border-white/10">
        <a href="#" className="hover:text-gray-300 transition-colors mb-4 md:mb-0">Privacy policy</a>
        <a href="#" className="hover:text-gray-300 transition-colors mb-4 md:mb-0">User agreement</a>
        <a href="#" className="hover:text-gray-300 transition-colors">Terms of exchange and refund</a>
      </div>
    </footer>
  );
}
