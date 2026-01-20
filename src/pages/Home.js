import Hero from "../components/Hero";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import voter from '../assets/voter.jpg'

export default function Home({ lang = "en" }) {
  const [showPopup, setShowPopup] = React.useState(true);
  const [showVoterList, setShowVoterList] = React.useState(false);
  const [zoomedImg, setZoomedImg] = React.useState(false);
  function handleZoomOpen() { setZoomedImg(true); }
  function handleZoomClose() { setZoomedImg(false); }



  function handleClosePopup() {
    setShowPopup(false);
  }
  function handleShowVoterList() {
    setShowVoterList(true);
  }
  function handleCloseVoterList() {
    setShowVoterList(false);
  } 

  const isMr = lang === "mr";
  
  // Animation observer setup
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  
  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 text-center relative animate-fade-in-up overflow-y-auto" style={{ maxHeight: '90vh' }}>
            <button
              onClick={handleClosePopup}
              className="absolute top-3 right-3 text-gray-400 hover:text-green-600 text-2xl font-bold"
              aria-label="Close"
            >&times;</button>
            <div className="text-5xl mb-4">🗳️</div>
            <h3 className="text-2xl font-bold mb-2 text-green-700">
              {isMr ? "मतदानाला सुरूवात झालेली आहे!" : "Voting Has Started!"}
            </h3>
            <p className="text-gray-700 mb-3">
              {isMr
                ? "आपला मतदानाचा हक्क नक्की वापरा. मतदान खुलं आहे!"
                : "The voting process has begun. Cast your vote now!"}
            </p>
            {zoomedImg && (
              <div
                className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-60 cursor-zoom-out"
                onClick={handleZoomClose}
                aria-label="Close zoomed image"
              >
                <img
                  src={voter}
                  alt="Zoomed Election Program"
                  className="max-w-full max-h-[100vh] rounded-lg shadow-lg"
                />
              </div>
            )}
            <img
              src={voter}
              alt="Election Program"
              className="rounded-lg shadow mb-4 w-full max-h-[320px] object-contain mx-auto cursor-zoom-in"
              onClick={handleZoomOpen}
            />
            <a
              href={`https://drive.google.com/drive/folders/1c2gIlh0JzY_UuZHmCkTf9XUORGoL8adW?usp=sharing`}
              className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-all duration-300 mt-2"
            >
              {isMr ? "मतदार यादी पहा" : "Show Voter List"}
            </a>
          </div>
        </div>
      )}
      
      {/* Add custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-pulse-hover:hover {
          animation: pulse 0.6s ease-in-out;
        }
        
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
        }
        
        .gradient-bg {
          background: linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%);
        }
        
        .card-hover {
          transition: all 0.3s ease;
        }
        
        .card-hover:hover {
          transform: translateY(-8px);
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

      <Hero lang={lang} autoPlay />
      
      <main className="w-full overflow-hidden">
        {/* About Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative">
          <div className="absolute inset-0 bg-green-50/30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text */}
              <div className="animate-on-scroll">
                <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                  {isMr ? "आमच्याबद्दल" : "About Us"}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight">
                  {isMr 
                    ? "शेतकऱ्यांचे सशक्तीकरण" 
                    : "Empowering Farmers"}
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {isMr
                    ? "शेतकऱ्यांना आधुनिक तंत्रज्ञान व बाजारपेठ जोडणी उपलब्ध करून देणे हा आमचा उद्देश. आमच्या सहकारी संस्थेमार्फत शाश्वत शेती आणि ग्रामीण अर्थव्यवस्था मजबूत करणे."
                    : "Our mission is to empower farmers with modern techniques, quality resources, and better market access through our cooperative platform, promoting sustainable agriculture and strengthening rural economy."}
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gradient-bg text-white px-8 py-4 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold"
                >
                  {isMr ? "अधिक जाणून घ्या" : "Learn More"}
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              
              {/* Enhanced Image Placeholder */}
              <div className="animate-on-scroll">
                <div className="relative">
                  <div className="h-80 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl shadow-2xl flex items-center justify-center floating relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                    <div className="relative z-10 text-center text-white">
                      <div className="text-6xl mb-4">🌾</div>
                      <span className="text-xl font-medium">Farming Excellence</span>
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-400 rounded-full opacity-20"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-on-scroll">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                {isMr ? "आमच्या सेवा" : "Our Services"}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                {isMr ? "व्यापक सेवा" : "Comprehensive Services"}
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                {isMr 
                  ? "शेतकऱ्यांच्या गरजा पूर्ण करण्यासाठी आम्ही विविध सेवा प्रदान करतो"
                  : "We provide comprehensive services designed to meet all farming needs"}
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: "🌱", title: "Seeds & Fertilizers", mrTitle: "बियाणे व खतं" },
                { icon: "📚", title: "Training", mrTitle: "प्रशिक्षण" },
                { icon: "🏪", title: "Market Linkage", mrTitle: "बाजारपेठ जोडणी" },
                { icon: "💰", title: "Financial Support", mrTitle: "आर्थिक सहाय्य" }
              ].map((service, i) => (
                <div key={i} className="animate-on-scroll">
                  <div className="bg-white shadow-lg rounded-2xl p-8 card-hover border border-gray-100 group">
                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="font-bold text-xl text-gray-800 mb-4">
                      {isMr ? service.mrTitle : service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {isMr
                        ? "उच्च गुणवत्तेची सेवा आणि संपूर्ण मार्गदर्शन"
                        : "High-quality service with complete guidance"}
                    </p>
                    <div className="mt-6 inline-flex items-center text-green-600 font-medium group-hover:text-green-700">
                      {isMr ? "अधिक माहिती" : "Learn More"}
                      <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Crops Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-on-scroll">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                {isMr ? "प्रमुख पिके" : "Major Crops"}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                {isMr ? "आमची विशेषता" : "Our Specialty"}
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: "🎋", crop: "Sugarcane", mrCrop: "ऊस", color: "from-green-400 to-green-600" },
                { icon: "🌸", crop: "Cotton", mrCrop: "कापूस", color: "from-blue-400 to-blue-600" },
                { icon: "🫘", crop: "Soybean", mrCrop: "सोयाबीन", color: "from-yellow-400 to-orange-500" },
                { icon: "🌾", crop: "Wheat", mrCrop: "गहू", color: "from-amber-400 to-yellow-600" }
              ].map((item, i) => (
                <div key={i} className="animate-on-scroll">
                  <div className="bg-white shadow-xl rounded-2xl overflow-hidden card-hover group">
                    <div className={`h-48 bg-gradient-to-br ${item.color} flex items-center justify-center relative overflow-hidden`}>
                      <div className="text-6xl group-hover:scale-110 transition-transform duration-300 relative z-10">
                        {item.icon}
                      </div>
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl text-gray-800 mb-3">
                        {isMr ? item.mrCrop : item.crop}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {isMr
                          ? "उच्च उत्पादन आणि गुणवत्तेसाठी आधुनिक तंत्रे"
                          : "Modern techniques for high yield and quality"}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Membership Section */}
        <section className="py-20 gradient-bg text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {isMr ? "सदस्यत्व फायदे" : "Membership Benefits"}
              </h2>
              <p className="text-green-100 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
                {isMr
                  ? "आमच्या सहकारी संस्थेचे सदस्य बनून सर्व सेवा, प्रशिक्षण, बाजारपेठ जोडणी व आर्थिक सहाय्य मिळवा"
                  : "Join our cooperative society to get access to all services, training programs, market linkage, and financial support"}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact?subject=Membership%20Application"
                  className="inline-flex items-center bg-white text-green-700 px-8 py-4 rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 font-bold animate-pulse-hover"
                >
                  {isMr ? "सदस्य व्हा" : "Join as a Member"}
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-green-700 transition-all duration-300 font-semibold"
                >
                  {isMr ? "अधिक माहिती" : "Learn More"}
                </Link>
              </div>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full floating"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full floating" style={{animationDelay: '2s'}}></div>
        </section>

        {/* News & Updates Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-on-scroll">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                {isMr ? "बातम्या व अपडेट्स" : "News & Updates"}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                {isMr ? "ताजी बातमी" : "Latest Updates"}
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="animate-on-scroll">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover group">
                  <div className="h-56 bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center relative overflow-hidden">
                    <div className="text-6xl group-hover:scale-110 transition-transform duration-300">🌱</div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Workshop</span>
                      <span className="text-gray-500 text-sm ml-2">Coming Soon</span>
                    </div>
                    <h3 className="font-bold text-xl text-gray-800 mb-3">
                      {isMr ? "सेंद्रिय शेती कार्यशाळा" : "Organic Farming Workshop"}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {isMr
                        ? "पुण्यात लवकरच आयोजित केली जाणार. आधुनिक सेंद्रिय शेती तंत्रांचे प्रशिक्षण."
                        : "Coming soon in Pune. Training on modern organic farming techniques."}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="animate-on-scroll">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover group">
                  <div className="h-56 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center relative overflow-hidden">
                    <div className="text-6xl group-hover:scale-110 transition-transform duration-300">💻</div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Technology</span>
                      <span className="text-gray-500 text-sm ml-2">Launching</span>
                    </div>
                    <h3 className="font-bold text-xl text-gray-800 mb-3">
                      {isMr ? "डिजिटल मेंबरशिप पोर्टल" : "Digital Membership Portal"}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {isMr
                        ? "लवकरच सुरू होणार. ऑनलाइन सेवा व सदस्यत्व व्यवस्थापन."
                        : "Launching soon. Online service and membership management system."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-16 animate-on-scroll">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                {isMr ? "गॅलरी" : "Gallery"}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                {isMr ? "आमचे कार्य" : "Our Work"}
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="animate-on-scroll">
                  <div className="h-48 bg-gradient-to-br from-green-200 via-green-300 to-green-400 rounded-xl shadow-lg card-hover flex items-center justify-center group overflow-hidden">
                    <div className="text-4xl group-hover:scale-125 transition-transform duration-300">
                      {['🌾', '👥', '🚜', '🏆'][i]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <Link to="/gallery" className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold group">
              {isMr ? "सर्व फोटो पहा" : "View All Photos"}
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-r from-green-600 via-green-700 to-emerald-800 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {isMr ? "आमच्याशी संपर्क साधा" : "Get in Touch"}
              </h2>
              <p className="text-green-100 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
                {isMr
                  ? "आमच्या सहकारी कुटुंबात सामील व्हा किंवा अधिक माहितीसाठी आमच्याशी संपर्क साधा"
                  : "Join our cooperative family or contact us for more information about our services"}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-green-700 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 animate-pulse-hover"
                >
                  {isMr ? "संपर्क करा" : "Contact Us"}
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </Link>
                <a
                  href="tel:+919066515656"
                  className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-green-700 transition-all duration-300 font-semibold"
                >
                  <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 90665 15656
                </a>
              </div>
            </div>
          </div>
          
          {/* Background decorative elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/10 rounded-full floating"></div>
          <div className="absolute top-20 right-10 w-16 h-16 bg-white/10 rounded-full floating" style={{animationDelay: '1s'}}></div>
          <div className="absolute -bottom-8 left-1/3 w-32 h-32 bg-white/5 rounded-full floating" style={{animationDelay: '3s'}}></div>
        </section>
      </main>
    </>
  );
}