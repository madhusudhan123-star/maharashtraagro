import React, { useState } from 'react';

function Contact({ lang }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
    
  //   if (!formData.consent) {
  //     alert(lang === "mr" ? "कृपया अटी व शर्ती स्वीकारा" : "Please accept the terms and conditions");
  //     return;
  //   }

  //   setIsSubmitting(true);
  //   setSubmitStatus(null);

  //   try {
  //     const response = await fetch('https://formsubmit.co/dmadhusudhan98@gmail.com', {
  //       method: 'POST',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         name: formData.name,
  //         phone: formData.phone,
  //         email: formData.email,
  //         subject: formData.subject,
  //         message: formData.message,
  //         _subject: `New Contact Form Submission: ${formData.subject}`,
  //         _template: 'table',
  //         _captcha: false,
  //         _next: window.location.href // Redirect back to current page
  //       })
  //     });

  //     if (response.ok) {
  //       setSubmitStatus('success');
  //       setFormData({
  //         name: '',
  //         phone: '',
  //         email: '',
  //         subject: 'General Inquiry',
  //         message: '',
  //         consent: false
  //       });
  //     } else {
  //       setSubmitStatus('error');
  //     }
  //   } catch (error) {
  //     console.error('Form submission error:', error);
  //     setSubmitStatus('error');
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };
  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.consent) {
    alert(lang === "mr" ? "कृपया अटी व शर्ती स्वीकारा" : "Please accept the terms and conditions");
    return;
  }

  setIsSubmitting(true);
  setSubmitStatus(null);

  try {
    const response = await fetch("https://formsubmit.co/maharashtraagro123@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        _subject: `New Contact Form Submission: ${formData.subject}`,
        _template: "table",
        _captcha: "false",
        _next: window.location.href
      })
    });

    if (response.ok) {
      setSubmitStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "General Inquiry",
        message: "",
        consent: false
      });
    } else {
      setSubmitStatus("error");
    }
  } catch (error) {
    console.error("Form submission error:", error);
    setSubmitStatus("error");
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <>
      {/* Add custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out;
        }
        
        .animate-pulse-slow {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .gradient-bg {
          background: linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%);
        }
        
        .input-focus {
          transition: all 0.3s ease;
        }
        
        .input-focus:focus {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.2);
        }
        
        .card-hover {
          transition: all 0.3s ease;
        }
        
        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        
        .floating {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

      <section className="py-20 bg-gradient-to-br from-gray-50 via-green-50 to-blue-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-green-200/20 rounded-full floating"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-blue-200/20 rounded-full floating" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-200/20 rounded-full floating" style={{animationDelay: '4s'}}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              {lang === "mr" ? "संपर्क साधा" : "Get In Touch"}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              {lang === "mr" ? "आमच्याशी संपर्क साधा" : "Contact Us"}
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              {lang === "mr" 
                ? "आमच्या सहकारी संस्थेबद्दल अधिक माहितीसाठी किंवा कोणत्याही सेवेसाठी आमच्याशी संपर्क साधा"
                : "Get in touch with our cooperative society for more information about our services or to join our farming community"
              }
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Information */}
            <div className="animate-slide-in-left">
              <div className="bg-white rounded-2xl shadow-xl p-8 card-hover border border-gray-100 h-full">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {lang === "mr" ? "संपर्क माहिती" : "Contact Information"}
                  </h2>
                </div>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                      <a href="mailto:Mahaagromcsl@gmail.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                        Mahaagromcsl@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        {lang === "mr" ? "फोन नंबर" : "Phone Number"}
                      </h3>
                      <a href="tel:+919066515656" className="text-green-600 hover:text-green-700 transition-colors">
                        +91 90665 15656
                      </a>
                    </div>
                  </div>

                  {/* Office */}
                  <div className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        {lang === "mr" ? "कार्यालय" : "Office"}
                      </h3>
                      <p className="text-gray-600">Pune, Maharashtra, India</p>
                    </div>
                  </div>

                  {/* Head Office */}
                  <div className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                      <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        {lang === "mr" ? "मुख्य कार्यालय" : "Head Office"}
                      </h3>
                      <p className="text-gray-600">Karjat, Dist. Ahilyanagar, Maharashtra, India</p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {lang === "mr" ? "कार्यालयीन वेळा" : "Business Hours"}
                  </h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>{lang === "mr" ? "सोमवार - शुक्रवार:" : "Monday - Friday:"}</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{lang === "mr" ? "शनिवार:" : "Saturday:"}</span>
                      <span>9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{lang === "mr" ? "रविवार:" : "Sunday:"}</span>
                      <span>{lang === "mr" ? "बंद" : "Closed"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 card-hover border border-gray-100">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {lang === "mr" ? "संदेश पाठवा" : "Send Message"}
                  </h2>
                </div>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-green-700">
                      {lang === "mr" ? "तुमचा संदेश यशस्वीरित्या पाठविला गेला!" : "Your message has been sent successfully!"}
                    </span>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg flex items-center">
                    <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-red-700">
                      {lang === "mr" ? "संदेश पाठविताना त्रुटी झाली. कृपया पुन्हा प्रयत्न करा." : "Error sending message. Please try again."}
                    </span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="sm:col-span-1">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {lang === "mr" ? "पूर्ण नाव" : "Full Name"}
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent input-focus"
                        placeholder={lang === "mr" ? "तुमचे पूर्ण नाव" : "Enter your full name"}
                      />
                      <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="sm:col-span-1">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {lang === "mr" ? "फोन नंबर" : "Phone Number"}
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent input-focus"
                        placeholder={lang === "mr" ? "तुमचा फोन नंबर" : "Enter your phone number"}
                      />
                      <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent input-focus"
                        placeholder={lang === "mr" ? "तुमचा ईमेल" : "Enter your email address"}
                      />
                      <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {lang === "mr" ? "विषय" : "Subject"}
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent input-focus"
                      >
                        <option value="General Inquiry">{lang === "mr" ? "सामान्य चौकशी" : "General Inquiry"}</option>
                        <option value="Membership Application">{lang === "mr" ? "सदस्यत्व अर्ज" : "Membership Application"}</option>
                        <option value="Services">{lang === "mr" ? "सेवा" : "Services"}</option>
                        <option value="Market Linkage">{lang === "mr" ? "बाजारपेठ जोडणी" : "Market Linkage"}</option>
                        <option value="Training">{lang === "mr" ? "प्रशिक्षण" : "Training"}</option>
                        <option value="Technical Support">{lang === "mr" ? "तांत्रिक मदत" : "Technical Support"}</option>
                      </select>
                      <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {lang === "mr" ? "संदेश" : "Message"}
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <div className="relative">
                      <textarea
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent input-focus resize-none"
                        placeholder={lang === "mr" ? "तुमचा संदेश इथे लिहा..." : "Write your message here..."}
                      />
                      <svg className="absolute left-3 top-4 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                  </div>

                  {/* Consent Checkbox */}
                  <div className="sm:col-span-2">
                    <label className="flex items-start space-x-3 text-sm text-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        className="mt-0.5 rounded border-gray-300 text-green-600 focus:ring-green-500"
                        required
                      />
                      <span className="leading-tight">
                        {lang === "mr"
                          ? "मी दिलेली माहिती योग्य असल्याची खात्री देतो आणि माझ्याशी संपर्क साधण्याची परवानगी देतो."
                          : "I confirm the information provided is accurate and give permission to contact me regarding my inquiry."
                        }
                        <span className="text-red-500 ml-1">*</span>
                      </span>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full gradient-bg text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 ${
                      isSubmitting 
                        ? 'opacity-70 cursor-not-allowed' 
                        : 'hover:shadow-lg transform hover:scale-105 animate-pulse-slow'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {lang === "mr" ? "पाठवत आहे..." : "Sending..."}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        {lang === "mr" ? "संदेश पाठवा" : "Send Message"}
                      </div>
                    )}
                  </button>
                </div>

                {/* Additional Info */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 text-center">
                    {lang === "mr"
                      ? "आम्ही 24 तासांच्या आत तुमच्या संदेशाचे उत्तर देण्याचा प्रयत्न करतो."
                      : "We strive to respond to your message within 24 hours."
                    }
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;