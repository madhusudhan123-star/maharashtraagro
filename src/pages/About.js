import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function About({ lang = "en" }) {
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

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
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

        .pulse-hover:hover {
          animation: pulse 0.6s ease-in-out;
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

      <main className="w-full overflow-hidden">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="animate-on-scroll">
                <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                  {isMr ? "आमच्याबद्दल" : "About Us"}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  {isMr 
                    ? "महाराष्ट्र अ‍ॅग्रो मल्टी स्टेट को-ऑपरेटिव्ह सोसायटी" 
                    : "Maharashtra Agro Multi State Cooperative Society"}
                </h1>
                <p className="text-green-100 text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
                  {isMr
                    ? "शेतकऱ्यांचे सशक्तीकरण, शाश्वत शेती आणि ग्रामीण अर्थव्यवस्था मजबूत करणे हा आमचा उद्देश आहे"
                    : "Empowering farmers, promoting sustainable agriculture, and strengthening rural economy through cooperative excellence"}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact?subject=Membership%20Application"
                    className="inline-flex items-center bg-white text-green-700 px-8 py-4 rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 font-bold pulse-hover"
                  >
                    {isMr ? "सदस्य व्हा" : "Join Us Today"}
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating decorative elements */}
          <div className="absolute top-20 left-10 w-24 h-24 bg-white/10 rounded-full floating"></div>
          <div className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full floating" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-white/5 rounded-full floating" style={{animationDelay: '4s'}}></div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Mission */}
              <div className="animate-on-scroll">
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 card-hover">
                  <div className="text-5xl mb-6">🎯</div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    {isMr ? "आमचे ध्येय" : "Our Mission"}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {isMr
                      ? "शेतकऱ्यांना आधुनिक शेतीतंत्रज्ञान, उच्च गुणवत्तेचे साधने आणि विश्वसनीय माहिती उपलब्ध करून देणे. उत्पादनासाठी योग्य बाजारपेठ मिळवून देणे आणि शेतकऱ्यांच्या आर्थिक प्रगतीसाठी सहकारी तत्त्वांवर आधारित सेवा प्रदान करणे."
                      : "To provide farmers with modern agricultural technology, high-quality resources, and reliable information. To secure appropriate markets for their produce and deliver cooperative-based services for farmers' economic progress and self-reliance."}
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="animate-on-scroll">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 card-hover">
                  <div className="text-5xl mb-6">🔮</div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    {isMr ? "आमचे विजन" : "Our Vision"}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {isMr
                      ? "शेतकरी आर्थिकदृष्ट्या सक्षम होऊन जास्तीत जास्त फायदा घेतील असा मजबूत सहकारी प्लॅटफॉर्म उभारणे. ग्रामीण अर्थव्यवस्था मजबूत करून शाश्वत शेतीच्या दिशेने प्रगती साधणे आणि भावी पिढ्यांसाठी समृद्ध कृषी समुदाय तयार करणे."
                      : "To create a strong cooperative platform where farmers become economically self-reliant and maximize their benefits. To strengthen rural economy through sustainable agriculture and build a prosperous farming community for future generations."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Information Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-on-scroll">
                <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                  {isMr ? "कायदेशीर माहिती" : "Legal Information"}
                </div>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  {isMr ? "अधिकृत नोंदणी" : "Official Registration"}
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="animate-on-scroll">
                  <div className="bg-white rounded-2xl p-8 shadow-lg card-hover border border-gray-100">
                    <div className="text-4xl mb-4">📋</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {isMr ? "नोंदणी तपशील" : "Registration Details"}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {isMr
                        ? "मल्टी स्टेट को-ऑपरेटिव्ह सोसायटीज अ‍ॅक्ट, 2002 अंतर्गत अधिकृत नोंदणीकृत संस्था म्हणून आम्ही कार्यरत आहोत."
                        : "Registered under the Multi State Cooperative Societies Act, 2002, ensuring legal compliance and transparency in all operations."}
                    </p>
                  </div>
                </div>
                
                <div className="animate-on-scroll">
                  <div className="bg-white rounded-2xl p-8 shadow-lg card-hover border border-gray-100">
                    <div className="text-4xl mb-4">🏢</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {isMr ? "कार्यालय स्थाने" : "Office Locations"}
                    </h3>
                    <div className="space-y-3 text-gray-600">
                      <div>
                        <p className="font-medium">{isMr ? "मुख्य कार्यालय:" : "Head Office:"}</p>
                        <p>{isMr ? "कर्जत, जिल्हा. अहिल्यानगर, महाराष्ट्र, भारत" : "Karjat, Dist. Ahilyanagar, Maharashtra, India"}</p>
                      </div>
                      <div>
                        <p className="font-medium">{isMr ? "शाखा कार्यालय:" : "Branch Office:"}</p>
                        <p>{isMr ? "पुणे, महाराष्ट्र, भारत" : "Pune, Maharashtra, India"}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-on-scroll">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                {isMr ? "आमची मूल्ये" : "Our Values"}
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {isMr ? "सहकारी तत्त्वे" : "Cooperative Principles"}
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                {isMr 
                  ? "आमची कार्यपद्धती या मूलभूत तत्त्वांवर आधारित आहे"
                  : "Our operations are built on these fundamental cooperative values"}
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: "🤝", title: "Unity", mrTitle: "एकता", desc: "Working together", mrDesc: "एकत्र काम करणे" },
                { icon: "💡", title: "Innovation", mrTitle: "नवोन्मेष", desc: "Modern solutions", mrDesc: "आधुनिक उपाय" },
                { icon: "🌱", title: "Sustainability", mrTitle: "शाश्वतता", desc: "Future focused", mrDesc: "भविष्य केंद्रित" },
                { icon: "⚖️", title: "Transparency", mrTitle: "पारदर्शकता", desc: "Open operations", mrDesc: "खुली कार्यपद्धती" }
              ].map((value, i) => (
                <div key={i} className="animate-on-scroll">
                  <div className="bg-white shadow-lg rounded-2xl p-6 card-hover border border-gray-100 text-center group">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <h3 className="font-bold text-xl text-gray-800 mb-3">
                      {isMr ? value.mrTitle : value.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {isMr ? value.mrDesc : value.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-on-scroll">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                {isMr ? "आमच्या सेवा" : "Our Services"}
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {isMr ? "व्यापक सेवा श्रेणी" : "Comprehensive Service Range"}
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  icon: "🌾", 
                  title: "Quality Seeds & Fertilizers", 
                  mrTitle: "उच्च गुणवत्तेचे बियाणे व खतं",
                  desc: "Premium agricultural inputs at affordable prices",
                  mrDesc: "परवडणाऱ्या किमतीत उत्कृष्ट शेती सामग्री"
                },
                { 
                  icon: "📚", 
                  title: "Training & Workshops", 
                  mrTitle: "प्रशिक्षण व कार्यशाळा",
                  desc: "Modern farming techniques and skill development",
                  mrDesc: "आधुनिक शेती तंत्रे आणि कौशल्य विकास"
                },
                { 
                  icon: "🏪", 
                  title: "Market Linkage", 
                  mrTitle: "बाजारपेठ जोडणी",
                  desc: "Direct market access for better prices",
                  mrDesc: "चांगल्या किमतीसाठी थेट बाजारपेठ"
                },
                { 
                  icon: "💰", 
                  title: "Financial Support", 
                  mrTitle: "आर्थिक सहाय्य",
                  desc: "Loans and investment opportunities",
                  mrDesc: "कर्ज आणि गुंतवणूक संधी"
                },
                { 
                  icon: "☎️", 
                  title: "Expert Guidance", 
                  mrTitle: "तज्ज्ञ मार्गदर्शन",
                  desc: "24/7 helpline and consultation",
                  mrDesc: "२४/७ हेल्पलाइन आणि सल्लामसलत"
                },
                { 
                  icon: "🚚", 
                  title: "Logistics Support", 
                  mrTitle: "लॉजिस्टिक सहाय्य",
                  desc: "Transportation and storage facilities",
                  mrDesc: "वाहतूक आणि गोदाम सुविधा"
                }
              ].map((service, i) => (
                <div key={i} className="animate-on-scroll">
                  <div className="bg-white rounded-2xl p-6 shadow-lg card-hover border border-gray-100">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="font-bold text-lg text-gray-800 mb-3">
                      {isMr ? service.mrTitle : service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {isMr ? service.mrDesc : service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 gradient-bg text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {isMr ? "आमच्या सहकारी कुटुंबात सामील व्हा" : "Join Our Cooperative Family"}
              </h2>
              <p className="text-green-100 text-lg mb-8 leading-relaxed">
                {isMr
                  ? "आज च सदस्यत्व घ्या आणि आमच्या सर्व सेवांचा फायदा घ्या. एकत्र मिळून शेतीक्षेत्रात क्रांती घडवूया."
                  : "Become a member today and unlock access to all our services. Together, let's revolutionize agriculture and build a prosperous farming community."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact?subject=Membership%20Application"
                  className="inline-flex items-center bg-white text-green-700 px-8 py-4 rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 font-bold pulse-hover"
                >
                  {isMr ? "आज च सदस्य व्हा" : "Become a Member Today"}
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-green-700 transition-all duration-300 font-semibold"
                >
                  {isMr ? "अधिक माहिती मिळवा" : "Get More Information"}
                </Link>
              </div>
            </div>
          </div>
          
          {/* Background decorative elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full floating"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full floating" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/5 rounded-full floating" style={{animationDelay: '4s'}}></div>
        </section>
      </main>
    </>
  );
}

export default About;




// function About({ lang }) {
//   return (
//     <section className="py-12">
//       <div className="container mx-auto px-4">
//         <h1 className="text-3xl font-semibold text-gray-900">
//           {lang === "mr" ? "आमच्याबद्दल" : "About Us"}
//         </h1>
//         <p className="mt-4 text-gray-700">
//           {lang === "mr"
//             ? "ध्येय: शेतकऱ्यांना आधुनिक तंत्रज्ञान, साधने व माहिती उपलब्ध करून देणे."
//             : "Mission: Provide farmers with modern techniques, resources, and information."}
//         </p>
//         <p className="mt-2 text-gray-700">
//           {lang === "mr"
//             ? "विजन: शेतकऱ्यांसाठी सक्षम सहकारी प्लॅटफॉर्म उभारणे."
//             : "Vision: Build a strong cooperative platform that enables farmer self-reliance."}
//         </p>
//       </div>
//     </section>
//   );
// }


// export default About;