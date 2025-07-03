import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Send, Mail, Phone, MapPin, Clock, Users, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ContactPage: React.FC = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    requestType: 'general'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ 
      name: '', 
      email: '', 
      company: '', 
      phone: '', 
      subject: '', 
      message: '', 
      requestType: 'general' 
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white py-8 sm:py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Back Link */}
        <div 
          ref={headerRef}
          className={`mb-4 sm:mb-6 transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <Link
            to="/"
            className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors font-light"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to home</span>
          </Link>
        </div>

        {/* Header */}
        <div className={`mb-12 sm:mb-16 transition-all duration-1000 delay-100 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 font-light max-w-2xl">
            Ready to transform your business with <span className="font-bold">ED</span>? Get in touch with our team of experts. 
            We're here to help you find the perfect solution for your needs.
          </p>
        </div>

        {/* Stats Section */}
        <div 
          ref={statsRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 sm:mb-20 transition-all duration-1000 delay-200 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center bg-gray-50 rounded-2xl p-8">
            <div className="bg-black p-3 rounded-xl w-fit mx-auto mb-4">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-2">24 Hours</h3>
            <p className="text-gray-600 font-light">Average response time</p>
          </div>
          
          <div className="text-center bg-gray-50 rounded-2xl p-8">
            <div className="bg-black p-3 rounded-xl w-fit mx-auto mb-4">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-2">500+</h3>
            <p className="text-gray-600 font-light">Companies served</p>
          </div>
          
          <div className="text-center bg-gray-50 rounded-2xl p-8">
            <div className="bg-black p-3 rounded-xl w-fit mx-auto mb-4">
              <Award className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-2">98%</h3>
            <p className="text-gray-600 font-light">Client satisfaction</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div 
            ref={formRef}
            className={`transition-all duration-1000 delay-300 ${formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="bg-white rounded-2xl border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-black mb-8 tracking-tight">
                Send us a message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Request Type */}
                <div>
                  <label htmlFor="requestType" className="block text-sm font-medium text-gray-700 mb-2">
                    What can we help you with?
                  </label>
                  <select
                    id="requestType"
                    name="requestType"
                    value={formData.requestType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  >
                    <option value="general">General inquiry</option>
                    <option value="demo">Request a demo</option>
                    <option value="pricing">Pricing information</option>
                    <option value="support">Technical support</option>
                    <option value="partnership">Partnership opportunities</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    placeholder="Brief subject line"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project, requirements, or how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full font-medium transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="h-4 w-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div 
            ref={infoRef}
            className={`transition-all duration-1000 delay-500 ${infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="space-y-8">
              {/* Contact Info Card */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-black mb-8 tracking-tight">Get in touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-black p-3 rounded-xl">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-black font-medium mb-1">Email</h4>
                      <p className="text-gray-600 font-light">hello@ed-solutions.com</p>
                      <p className="text-gray-500 text-sm font-light">We typically respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-black p-3 rounded-xl">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-black font-medium mb-1">Phone</h4>
                      <p className="text-gray-600 font-light">+1 (555) 123-4567</p>
                      <p className="text-gray-500 text-sm font-light">Monday - Friday, 9AM - 6PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-black p-3 rounded-xl">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-black font-medium mb-1">Office</h4>
                      <p className="text-gray-600 font-light">
                        123 Innovation Drive<br />
                        Tech Valley, CA 94000<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-white rounded-2xl border border-gray-100 p-8">
                <h3 className="text-xl font-medium text-black mb-6">What happens next?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <h4 className="text-black font-medium mb-1">We'll review your message</h4>
                      <p className="text-gray-600 text-sm font-light">Our team will carefully review your inquiry and requirements.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <h4 className="text-black font-medium mb-1">Schedule a consultation</h4>
                      <p className="text-gray-600 text-sm font-light">We'll reach out to schedule a personalized consultation.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <h4 className="text-black font-medium mb-1">Tailored solution</h4>
                      <p className="text-gray-600 text-sm font-light">We'll present a customized solution that fits your needs.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
                <h4 className="text-red-800 font-medium mb-2">Need urgent support?</h4>
                <p className="text-red-700 text-sm font-light mb-3">
                  For critical issues affecting your production systems, please call our emergency support line.
                </p>
                <p className="text-red-800 font-medium">+1 (555) 911-HELP</p>
                <p className="text-red-600 text-xs font-light">Available 24/7 for enterprise customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;