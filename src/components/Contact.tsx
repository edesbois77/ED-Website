import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div 
          ref={ref}
          className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6 tracking-tight">
            Contact-<span className="font-bold">ED</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Ready to transform your business? Get in touch with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 h-full flex flex-col">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all text-sm sm:text-base"
                  placeholder="Your company name"
                />
              </div>

              <div className="flex-grow">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full h-full min-h-[120px] sm:min-h-[144px] px-4 py-3 bg-white border border-gray-200 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none text-sm sm:text-base"
                  placeholder="Tell us about your project and requirements..."
                />
              </div>

              <button
                type="submit"
                className="group w-full bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all flex items-center justify-center space-x-2 mt-auto text-sm sm:text-base"
              >
                <Send className="h-4 w-4" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 h-full flex flex-col">
              <h3 className="text-xl sm:text-2xl font-light text-black mb-6 sm:mb-8 tracking-tight">Get in touch</h3>
              
              <div className="space-y-4 sm:space-y-6 flex-grow">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-black p-2.5 sm:p-3 rounded-xl">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-black font-medium mb-1 text-sm sm:text-base">Email</h4>
                    <p className="text-gray-600 font-light text-sm sm:text-base">hello@ed-solutions.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-black p-2.5 sm:p-3 rounded-xl">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-black font-medium mb-1 text-sm sm:text-base">Phone</h4>
                    <p className="text-gray-600 font-light text-sm sm:text-base">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-black p-2.5 sm:p-3 rounded-xl">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-black font-medium mb-1 text-sm sm:text-base">Office</h4>
                    <p className="text-gray-600 font-light text-sm sm:text-base">
                      123 Innovation Drive<br />
                      Tech Valley, CA 94000
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-light">
                  Our team typically responds within 24 hours. For urgent inquiries, 
                  please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;