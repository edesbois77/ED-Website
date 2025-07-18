import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Send, Mail, Phone, MapPin, Clock, Users, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ContactPage: React.FC = () => {
  const navigate = useNavigate();
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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formcarry.com/s/xljVi0wYcWi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          requestType: formData.requestType,
          _subject: `${formData.subject || 'Contact Form Submission'} - ${formData.name}`,
          _source: 'ED Website - Contact Page'
        })
      });

      if (response.ok) {
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
        
        // Navigate to thank you page
        navigate('/thank-you');
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Sorry, there was an error sending your message. Please try again or contact us directly at hello@ed-solutions.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white py-8 sm:py-12 md:py-16">
      <div className="lg:max-w-6xl lg:mx-auto px-6">
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
          <p className="text-lg text-gray-600 font-light max-w-4xl">
            Ready to transform your business with <span className="font-bold">ED</span>? Get in touch and we will find you the perfect solution for your needs.
          </p>
        </div>

        {/* Stats Section */}
        <div 
          ref={statsRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 sm:mb-20 transition-all duration-1000 delay-200 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center bg-gray-50 rounded-2xl p-8 flex flex-col items-center">
            <div className="bg-custom-dark p-3 rounded-xl w-fit mx-auto mb-4 flex justify-center items-center">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-2">24 Hours</h3>
            <p className="text-gray-600 font-light">Average response time</p>
          </div>
          
          <div className="text-center bg-gray-50 rounded-2xl p-8 flex flex-col items-center">
            <div className="bg-custom-dark p-3 rounded-xl w-fit mx-auto mb-4 flex justify-center items-center">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-2">500+</h3>
            <p className="text-gray-600 font-light">Companies served</p>
          </div>
          
          <div className="text-center bg-gray-50 rounded-2xl p-8 flex flex-col items-center">
            <div className="bg-custom-dark p-3 rounded-xl w-fit mx-auto mb-4 flex justify-center items-center">
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
                    <option value="general">General Inquiry</option>
                    <option value="demo">Hiring ED</option>
                    <option value="pricing">Pricing Information</option>
                    <option value="support">Consultative Services</option>
                    <option value="partnership">Investment Opportunities</option>
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
                      placeholder="+44(0) 7123-456789"
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
                    placeholder="Tell us about your project, requirements, or how ED can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full bg-custom-dark hover:bg-gray-800 text-white px-8 py-4 rounded-full font-medium transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-4 w-4" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
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
                    <div className="bg-custom-dark p-3 rounded-xl">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-black font-medium mb-1">Email</h4>
                      <p className="text-gray-600 font-light">edproductsolutions@gmail.com</p>
                      <p className="text-gray-500 text-sm font-light">ED typically responds within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-custom-dark p-3 rounded-xl">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-black font-medium mb-1">Phone</h4>
                      <p className="text-gray-600 font-light">+44 (0) 7918086200</p>
                      <p className="text-gray-500 text-sm font-light">Monday - Sunday, 9AM - 6PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-custom-dark p-3 rounded-xl">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-black font-medium mb-1">Office</h4>
                      <p className="text-gray-600 font-light">
                        1 Ed Estate<br />
                        London, LN5 9DN
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
                    <div className="w-6 h-6 bg-custom-dark text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <h4 className="text-black font-medium mb-1">ED will review your message</h4>
                      <p className="text-gray-600 text-sm font-light">ED will carefully review your inquiry and requirements.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-custom-dark text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <h4 className="text-black font-medium mb-1">Schedule a consultation</h4>
                      <p className="text-gray-600 text-sm font-light">ED will reach out to schedule a personalised consultation.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-custom-dark text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <h4 className="text-black font-medium mb-1">Tailored solution</h4>
                      <p className="text-gray-600 text-sm font-light">ED will present a customised solution that fits your needs.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
                <h4 className="text-red-800 font-medium mb-2">Need urgent support?</h4>
                <p className="text-red-700 text-sm font-light mb-3">
                  If you simply can't wait to acquire ED's services, please call our emergency support line.
                </p>
                <p className="text-red-800 font-medium">+44 (0) 999-HELP</p>
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