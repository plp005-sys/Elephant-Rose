import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send, MessageCircle, Heart } from 'lucide-react';
import bgImage from '../assets/images/Acc.jpg';

export default function Contact() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">Get in Touch</h1>
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
                  <div className="bg-[#71ea27]/20 p-4 rounded-full text-[#71ea27]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Our Location</h3>
                    <p className="text-gray-300">123 Eco District, Green City<br />Earth, Planet 45678</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#71ea27]/20 p-4 rounded-full text-[#71ea27]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Email Us</h3>
                    <p className="text-gray-300">hello@proverbalmedia.com<br />support@proverbalmedia.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#71ea27]/20 p-4 rounded-full text-[#71ea27]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Call Us</h3>
                    <p className="text-gray-300">+1 (555) 123-4567<br />Mon-Fri, 9am-5pm EST</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-8">
                <h3 className="text-2xl font-bold mb-6">Quick Connect</h3>
                <a 
                  href="https://wa.me/15551234567" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white font-bold py-4 px-8 rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,211,102,0.3)] w-full sm:w-auto"
                >
                  <MessageCircle className="w-6 h-6" />
                  Chat on WhatsApp
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
              Your contribution helps us continue our environmental education initiatives and support crucial green projects worldwide. 
              Together, we can create a more sustainable future. You can send funds via bank transfer, crypto, or through our secure payment gateway.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-[#71ea27] hover:bg-[#5ec81e] text-[#111] font-bold py-4 px-8 rounded-xl transition-all hover:scale-[1.02] active:scale-95 w-full sm:w-auto">
                Donate
              </button>
              <button className="bg-transparent border border-white/30 hover:border-[#71ea27] hover:text-[#71ea27] text-white font-bold py-4 px-8 rounded-xl transition-all hover:scale-[1.02] active:scale-95 w-full sm:w-auto">
                Other Ways to Give
              </button>
            </div>
          </motion.div>
        </div>
      </main>
      
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
