import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send, MessageCircle, Heart, HandHeart, Users, Sprout, Share2, X } from 'lucide-react';
import bgImage from '../assets/images/Acc.jpg';

export default function Contact() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isInvolvedOpen, setIsInvolvedOpen] = useState(false);
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    if (location.hash === '#donate') {
      setTimeout(() => {
        const element = document.getElementById('donate');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (location.hash === '#get-in-touch') {
      setTimeout(() => {
        const element = document.getElementById('get-in-touch');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="min-h-screen text-white font-sans overflow-x-hidden relative flex flex-col">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url('${bgImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      
      {/* Dark Overlay */}
      <div className="fixed inset-0 z-0 bg-black/40 pointer-events-none" />
      
      <Navbar />

      <main className="flex-grow relative z-10 pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 id="get-in-touch" className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight scroll-mt-32">Get in Touch</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Have questions about our initiatives or want to get involved? We'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information & WhatsApp */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-panel p-8 md:p-12"
            >
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="bg-[#71ea27]/20 p-4 rounded-full text-[#71ea27] shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold mb-1">Our Locations</h3>
                    <div className="text-gray-300">
                      <p className="font-medium text-white/90 text-sm">Primary Office</p>
                      <p>11 Courtney Rd, Ballantyne Park, Harare.</p>
                    </div>
                    <div className="text-gray-300">
                      <p className="font-medium text-white/90 text-sm">Operations & Estate</p>
                      <p>SkyGold Estate, 01 DRC Govera Village Domboshava, Goromonzi Rural District.</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#71ea27]/20 p-4 rounded-full text-[#71ea27] shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Email Us</h3>
                    <p className="text-gray-300">elephantrose@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#71ea27]/20 p-4 rounded-full text-[#71ea27] shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Call Us</h3>
                    <p className="text-gray-300">+263 77 211 2011</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-8">
                <h3 className="text-2xl font-bold mb-6">Quick Connect</h3>
                <a 
                  href="https://wa.me/263772112011" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe57] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(37,211,102,0.4)] w-full sm:w-auto text-base md:text-lg"
                >
                  <MessageCircle className="w-6 h-6 shrink-0" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-panel p-8 md:p-12"
            >
              <h2 className="text-3xl font-bold mb-8">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#71ea27]/50 focus:border-transparent transition-all"
                      placeholder="Sarah Mavhunga"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#71ea27]/50 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#71ea27]/50 focus:border-transparent transition-all"
                    placeholder="How can we help you?"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#71ea27]/50 focus:border-transparent transition-all resize-none"
                    placeholder="Write your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#71ea27] hover:bg-[#5ec81e] text-[#111] font-bold py-4 px-8 rounded-xl transition-all hover:scale-[1.02] active:scale-95"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>

          {/* Donate Section */}
          <motion.div 
            id="donate"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 glass-panel p-8 md:p-12 text-center"
          >
            <div className="inline-flex items-center justify-center bg-[#71ea27]/20 p-4 rounded-full text-[#71ea27] mb-6">
              <Heart className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Support Our Mission</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Your contribution helps us continue our environmental education initiatives and support crucial green projects worldwide. Together, we can create a more sustainable future. We would love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => setIsDonateOpen(true)}
                className="bg-[#71ea27] hover:bg-[#5ec81e] text-[#111] font-bold py-4 px-8 rounded-xl transition-all hover:scale-[1.02] active:scale-95 w-full sm:w-auto shadow-[0_0_20px_rgba(113,234,39,0.3)]"
              >
                Donate
              </button>
              <button 
                onClick={() => setIsInvolvedOpen(true)}
                className="bg-transparent border border-white/30 hover:border-[#71ea27] hover:text-[#71ea27] text-white font-bold py-4 px-8 rounded-xl transition-all hover:scale-[1.02] active:scale-95 w-full sm:w-auto"
              >
                Other Ways to Be Involved
              </button>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Other Ways to Be Involved Modal */}
      <AnimatePresence>
        {isInvolvedOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsInvolvedOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#181a18] border border-white/15 rounded-2xl p-6 sm:p-8 text-left shadow-2xl z-10"
            >
              <button
                onClick={() => setIsInvolvedOpen(false)}
                className="absolute top-5 right-5 p-2 text-gray-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#71ea27]/20 p-3 rounded-xl text-[#71ea27]">
                  <HandHeart className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Other Ways to Be Involved</h3>
                  <p className="text-sm text-gray-300">Join our movement through hands-on participation and collaborative impact</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-white/5 border border-white/10 p-5 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-[#71ea27] font-semibold">
                    <Sprout className="w-5 h-5" />
                    <h4>Field Volunteering</h4>
                  </div>
                  <p className="text-sm text-gray-300">
                    Participate in tree-planting days, nursery development, and agroecology workshops at SkyGold Estate and local communities.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 p-5 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-[#71ea27] font-semibold">
                    <Users className="w-5 h-5" />
                    <h4>Institutional Partnerships</h4>
                  </div>
                  <p className="text-sm text-gray-300">
                    Partner with us as a school, university, NGO, or corporate sponsor for sustainability programs and environmental research.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 p-5 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-[#71ea27] font-semibold">
                    <Heart className="w-5 h-5" />
                    <h4>In-Kind Support</h4>
                  </div>
                  <p className="text-sm text-gray-300">
                    Contribute gardening tools, native tree seedlings, media/recording equipment, or educational books and materials.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 p-5 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-[#71ea27] font-semibold">
                    <Share2 className="w-5 h-5" />
                    <h4>Advocacy & Storytelling</h4>
                  </div>
                  <p className="text-sm text-gray-300">
                    Amplify our message by sharing our documentaries, hosting community screenings, or contributing creative content.
                  </p>
                </div>
              </div>

              <div className="bg-black/40 border border-white/10 p-5 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="font-semibold text-white">Ready to take part?</p>
                  <p className="text-sm text-gray-400">Reach out directly to connect with our outreach team.</p>
                </div>
                <div className="flex gap-3 w-full sm:w-auto">
                  <a
                    href="https://wa.me/263772112011?text=Hello%20Elephant%20Rose%20Foundation,%20I%20would%20like%20to%20get%20involved!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold py-2.5 px-5 rounded-xl transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Us
                  </a>
                  <button
                    onClick={() => {
                      setIsInvolvedOpen(false);
                      const contactForm = document.getElementById('get-in-touch');
                      if (contactForm) contactForm.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#71ea27] hover:bg-[#5ec81e] text-[#111] font-semibold py-2.5 px-5 rounded-xl transition-all"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Donate Details Modal */}
      <AnimatePresence>
        {isDonateOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDonateOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#181a18] border border-white/15 rounded-2xl p-6 sm:p-8 text-left shadow-2xl z-10"
            >
              <button
                onClick={() => setIsDonateOpen(false)}
                className="absolute top-5 right-5 p-2 text-gray-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#71ea27]/20 p-3 rounded-xl text-[#71ea27]">
                  <Heart className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Support Elephant Rose Foundation</h3>
                  <p className="text-sm text-gray-300">Direct contributions empower local conservation and community initiatives</p>
                </div>
              </div>

              <div className="space-y-4 mb-6 text-sm text-gray-300">
                <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                  <p className="font-semibold text-white mb-1">Direct Bank & Wire Details</p>
                  <p>Bank: Standard Bank / Ecocash Merchant</p>
                  <p>Account Name: Elephant Rose Foundation</p>
                  <p>Reference: Donation / Your Name</p>
                </div>

                <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                  <p className="font-semibold text-white mb-1">Direct Inquiries & Pledges</p>
                  <p>Email: <a href="mailto:elephantrose@gmail.com" className="text-[#71ea27] underline">elephantrose@gmail.com</a></p>
                  <p>Phone / WhatsApp: <a href="https://wa.me/263772112011" className="text-[#71ea27] underline">+263 77 211 2011</a></p>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setIsDonateOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-white/20 hover:border-white/40 text-white transition-colors"
                >
                  Close
                </button>
                <a
                  href="https://wa.me/263772112011?text=Hello,%20I%20would%20like%20to%20make%20a%20donation%20to%20Elephant%20Rose%20Foundation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold px-5 py-2.5 rounded-xl transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Confirm via WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
