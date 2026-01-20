import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Gallery({ lang = "en" }) {
  const isMr = lang === "mr";
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

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

  // Sample gallery data - replace with your actual data
  const galleryItems = [
    { id: 1, category: 'farmers', type: 'image', title: 'Progressive Farmers', mrTitle: 'प्रगतीशील शेतकरी' },
    { id: 2, category: 'training', type: 'image', title: 'Training Workshop', mrTitle: 'प्रशिक्षण कार्यशाळा' },
    { id: 3, category: 'events', type: 'image', title: 'Annual Conference', mrTitle: 'वार्षिक परिषद' },
    { id: 4, category: 'crops', type: 'image', title: 'Quality Harvest', mrTitle: 'गुणवत्तापूर्ण कापणी' },
    { id: 5, category: 'farmers', type: 'video', title: 'Success Stories', mrTitle: 'यशोगाथा' },
    { id: 6, category: 'training', type: 'image', title: 'Organic Farming', mrTitle: 'सेंद्रिय शेती' },
    { id: 7, category: 'events', type: 'image', title: 'Award Ceremony', mrTitle: 'पुरस्कार सोहळा' },
    { id: 8, category: 'crops', type: 'image', title: 'Modern Equipment', mrTitle: 'आधुनिक उपकरणे' },
    { id: 9, category: 'farmers', type: 'image', title: 'Cooperative Unity', mrTitle: 'सहकारी एकता' },
  ];

  const categories = [
    { key: 'all', label: isMr ? 'सर्व' : 'All', icon: '🔍' },
    { key: 'farmers', label: isMr ? 'शेतकरी' : 'Farmers', icon: '👨‍🌾' },
    { key: 'training', label: isMr ? 'प्रशिक्षण' : 'Training', icon: '📚' },
    { key: 'events', label: isMr ? 'कार्यक्रम' : 'Events', icon: '🎉' },
    { key: 'crops', label: isMr ? 'पिके' : 'Crops', icon: '🌾' },
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

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
        
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-zoom-in {
          animation: zoomIn 0.5s ease-out forwards;
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
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .gallery-item {
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .gallery-item:hover {
          transform: scale(1.05);
          box-shadow: 0 15px 30px rgba(0,0,0,0.2);
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

        .modal-backdrop {
          backdrop-filter: blur(10px);
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
                  {isMr ? "गॅलरी" : "Gallery"}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  {isMr 
                    ? "आमचे कार्य आणि यश" 
                    : "Our Work & Success Stories"}
                </h1>
                <p className="text-green-100 text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
                  {isMr
                    ? "शेतकऱ्यांच्या यशोगाथा, प्रशिक्षण कार्यक्रम, सहकारी उपक्रम आणि कृषी प्रगतीची दस्तऐवजीकरण"
                    : "Documenting farmers' success stories, training programs, cooperative initiatives, and agricultural progress through visual storytelling"}
                </p>
              </div>
            </div>
          </div>
          
          {/* Floating decorative elements */}
          <div className="absolute top-20 left-10 w-24 h-24 bg-white/10 rounded-full floating"></div>
          <div className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full floating" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-white/5 rounded-full floating" style={{animationDelay: '4s'}}></div>
        </section>

        {/* Filter Section */}
        <section className="py-16 bg-white sticky top-16 z-30 border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="animate-on-scroll">
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {categories.map((category) => (
                  <button
                    key={category.key}
                    onClick={() => setActiveFilter(category.key)}
                    className={`inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                      activeFilter === category.key
                        ? 'bg-green-600 text-white shadow-lg transform scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                    }`}
                  >
                    <span className="mr-2 text-lg">{category.icon}</span>
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {filteredItems.map((item, index) => (
                <div key={item.id} className="animate-on-scroll" style={{animationDelay: `${index * 0.1}s`}}>
                  <div 
                    className="gallery-item bg-white rounded-2xl overflow-hidden shadow-lg group"
                    onClick={() => setSelectedImage(item)}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      {/* Placeholder for actual image */}
                      <div className="w-full h-full bg-gradient-to-br from-green-200 via-green-300 to-green-400 flex items-center justify-center relative">
                        <div className="text-4xl md:text-5xl group-hover:scale-125 transition-transform duration-300">
                          {item.type === 'video' ? '🎥' : '📸'}
                        </div>
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                        
                        {/* Category Badge */}
                        <div className="absolute top-3 left-3 px-2 py-1 bg-black/70 text-white text-xs rounded-full">
                          {categories.find(cat => cat.key === item.category)?.icon} {categories.find(cat => cat.key === item.category)?.label}
                        </div>
                        
                        {/* View Icon */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                        {isMr ? item.mrTitle : item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results Message */}
            {filteredItems.length === 0 && (
              <div className="text-center py-16 animate-on-scroll">
                <div className="text-6xl mb-4">📭</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {isMr ? "कोणतेही परिणाम सापडले नाहीत" : "No Results Found"}
                </h3>
                <p className="text-gray-600">
                  {isMr ? "कृपया दुसरा श्रेणी निवडा" : "Please try selecting a different category"}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-on-scroll">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                {isMr ? "आकडेवारी" : "Our Impact"}
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {isMr ? "आमची कामगिरी" : "Impact in Numbers"}
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "5000+", label: isMr ? "शेतकरी सदस्य" : "Farmer Members", icon: "👨‍🌾" },
                { number: "200+", label: isMr ? "प्रशिक्षण कार्यक्रम" : "Training Programs", icon: "📚" },
                { number: "50+", label: isMr ? "यशस्वी प्रकल्प" : "Successful Projects", icon: "🎯" },
                { number: "15+", label: isMr ? "वर्षांचा अनुभव" : "Years of Experience", icon: "⭐" }
              ].map((stat, i) => (
                <div key={i} className="animate-on-scroll">
                  <div className="text-center bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 card-hover">
                    <div className="text-4xl mb-4">{stat.icon}</div>
                    <div className="text-3xl font-bold text-green-600 mb-2">{stat.number}</div>
                    <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 gradient-bg text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {isMr ? "आपली यशोगाथा सामायिक करा" : "Share Your Success Story"}
              </h2>
              <p className="text-green-100 text-lg mb-8 leading-relaxed">
                {isMr
                  ? "आपली शेतीतील यशाची कहाणी आमच्यासोबत सामायिक करा आणि इतर शेतकऱ्यांना प्रेरणा द्या"
                  : "Share your farming success story with us and inspire other farmers in our cooperative community"}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact?subject=Share%20Success%20Story"
                  className="inline-flex items-center bg-white text-green-700 px-8 py-4 rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 font-bold pulse-hover"
                >
                  {isMr ? "आपली कहाणी सामायिक करा" : "Share Your Story"}
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-green-700 transition-all duration-300 font-semibold"
                >
                  {isMr ? "संपर्क साधा" : "Contact Us"}
                </Link>
              </div>
            </div>
          </div>
          
          {/* Background decorative elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full floating"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full floating" style={{animationDelay: '2s'}}></div>
        </section>
      </main>

      {/* Modal for Image Preview */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop bg-black/70"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Image */}
              <div className="aspect-[16/10] bg-gradient-to-br from-green-200 via-green-300 to-green-400 flex items-center justify-center">
                <div className="text-8xl">
                  {selectedImage.type === 'video' ? '🎥' : '📸'}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {isMr ? selectedImage.mrTitle : selectedImage.title}
                </h3>
                <p className="text-gray-600">
                  {isMr ? "विस्तृत वर्णन येथे असेल" : "Detailed description would go here"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;


// function Gallery({ lang }) {
//   return (
//     <section className="py-12">
//       <div className="container mx-auto px-4">
//         <h1 className="text-3xl font-semibold text-gray-900">
//           {lang === "mr" ? "गॅलरी" : "Gallery"}
//         </h1>
//         <p className="mt-4 text-gray-700">
//           {lang === "mr"
//             ? "शेतकरी, कार्यक्रम व प्रशिक्षणांचे फोटो/व्हिडिओ."
//             : "Photos and videos of farmers, events, and training programs."}
//         </p>
//         {/* Replace with your actual gallery grid */}
//         <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           <div className="aspect-[16/9] bg-gray-100 rounded-md" />
//           <div className="aspect-[16/9] bg-gray-100 rounded-md" />
//           <div className="aspect-[16/9] bg-gray-100 rounded-md" />
//         </div>
//       </div>
//     </section>
//   );
// }
// export default Gallery;