import React, { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import banner1 from "../assets/banner1.webp";
import banner2 from "../assets/banner2.webp";
import banner3 from "../assets/banner3.webp";

const SLIDE_DURATION_MS = 7000;

const slides = [
  {
    id: "empower",
    img: banner1,
    en: {
      title: "Empowering Farmers, Sustainable Agriculture",
      sub: "Quality inputs, training, and market linkage for productivity and income.",
      ctas: [
        { label: "Join as a Member", to: "/contact?subject=Membership%20Application" },
      ],
    },
    mr: {
      title: "शेतकऱ्यांचे सशक्तीकरण, शाश्वत शेती",
      sub: "गुणवत्तापूर्ण इनपुट्स, प्रशिक्षण व बाजारपेठ जोडणीने उत्पादन व उत्पन्न वाढ.",
      ctas: [
        { label: "सदस्य व्हा", to: "/contact?subject=Membership%20Application" },
      ],
    },
  },
  {
    id: "organic",
    img: banner2,
    en: {
      title: "Organic Fertilizers & Soil Care",
      sub: "Improve soil health and long-term yield sustainability.",
    },
    mr: {
      title: "सेंद्रिय खतं व माती संवर्धन",
      sub: "मातीचे आरोग्य व दीर्घकालीन उत्पादनक्षमता वाढवा.",
    },
  },
];

export default function Hero({ lang = "en", autoPlay = true }) {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [focusInside, setFocusInside] = useState(false);
  const liveRef = useRef(null);
  const total = slides.length;

  const goTo = useCallback((i) => setIndex(((i % total) + total) % total), [total]);
  const next = useCallback(() => goTo(index + 1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1), [index, goTo]);

  useEffect(() => {
    if (!autoPlay || !isPlaying || isHover || focusInside) return;
    const id = setInterval(next, SLIDE_DURATION_MS);
    return () => clearInterval(id);
  }, [autoPlay, isPlaying, isHover, focusInside, next]);

  useEffect(() => {
    if (!liveRef.current) return;
    const s = slides[index];
    const t = (lang === "mr" ? s.mr.title : s.en.title) || "";
    liveRef.current.textContent = `Slide ${index + 1} of ${total}: ${t}`;
  }, [index, lang, total]);

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    }
  };

  return (
    <section
      className="relative w-full min-h-[320px] h-[320px] xs:h-[350px] sm:h-[450px] md:h-[60vh] lg:h-[500px] overflow-hidden"
      role="region"
      aria-roledescription="carousel"
      aria-label={lang === "mr" ? "हिरो बॅनर" : "Hero promotions"}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onFocusCapture={() => setFocusInside(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setFocusInside(false);
      }}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      {/* Slides track */}
      <div className="h-full w-full relative overflow-hidden">
        <div
          className="flex h-full w-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((s, i) => {
            const copy = lang === "mr" ? s.mr : s.en;
            return (
              <div
                key={s.id}
                className="min-w-full h-full relative flex-shrink-0"
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${total}`}
              >
                {/* Background */}
                <img
                  src={s.img}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  onError={(e) => {
                    e.currentTarget.style.opacity = "0.2";
                  }}
                />
                <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent"
                  aria-hidden="true"
                />

                {/* Content */}
                <div className="relative z-10 h-full w-full flex items-center justify-center px-2 py-4">
                  <div className="container mx-auto px-2 sm:px-4 md:px-6 max-w-4xl">
                    <div className="w-full text-white text-center">
                      <h1 className="text-base xs:text-lg sm:text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight break-words">
                        {copy.title}
                      </h1>
                      <p className="mt-2 sm:mt-3 text-xs xs:text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto break-words">
                        {copy.sub}
                      </p>
                      {copy.ctas && copy.ctas.length > 0 && (
                        <div className="mt-3 sm:mt-4 md:mt-6 flex flex-wrap justify-center gap-2">
                          {copy.ctas.map((cta) => (
                            <Link
                              key={cta.label}
                              to={cta.to}
                              className="inline-flex items-center justify-center rounded-md bg-green-600 px-3 xs:px-4 sm:px-5 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500 transition-colors duration-200"
                            >
                              {cta.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-3 sm:bottom-4 left-0 right-0 flex items-center justify-center gap-1.5 sm:gap-2">
        {slides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            className={`h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full border border-white/70 transition-all duration-200 ${
              i === index ? "bg-white" : "bg-white/30 hover:bg-white/60"
            }`}
            aria-label={lang === "mr" ? `स्लाइड ${i + 1} ला जा` : `Go to slide ${i + 1}`}
            aria-current={i === index ? "true" : undefined}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      {/* Live region for SR */}
      <div ref={liveRef} aria-live="polite" className="sr-only" />
    </section>
  );
}

// import React, { useEffect, useRef, useState, useCallback } from "react";
// import { Link } from "react-router-dom";
// import banner1 from "../assets/banner1.webp";
// import banner2 from "../assets/banner2.webp";
// import banner3 from "../assets/banner3.webp";

// const SLIDE_DURATION_MS = 7000;

// const slides = [
//   {
//     id: "empower",
//     img: banner1,
//     en: {
//       title: "Empowering Farmers, Sustainable Agriculture",
//       sub: "Quality inputs, training, and market linkage for productivity and income.",
//       ctas: [
//         { label: "Join as a Member", to: "/contact?subject=Membership%20Application" },
//         // { label: "Learn More", to: "/about" },
//       ],
//     },
//     mr: {
//       title: "शेतकऱ्यांचे सशक्तीकरण, शाश्वत शेती",
//       sub: "गुणवत्तापूर्ण इनपुट्स, प्रशिक्षण व बाजारपेठ जोडणीने उत्पादन व उत्पन्न वाढ.",
//       ctas: [
//         { label: "सदस्य व्हा", to: "/contact?subject=Membership%20Application" },
//         // { label: "अधिक जाणून घ्या", to: "/about" },
//       ],
//     },
//   },
//   {
//     id: "organic",
//     img: banner2,
//     en: {
//       title: "Organic Fertilizers & Soil Care",
//       sub: "Improve soil health and long-term yield sustainability.",
//       // ctas: [{ label: "Explore Products", to: "/about" }],
//     },
//     mr: {
//       title: "सेंद्रिय खतं व माती संवर्धन",
//       sub: "मातीचे आरोग्य व दीर्घकालीन उत्पादनक्षमता वाढवा.",
//       // ctas: [{ label: "उत्पादने पाहा", to: "/about" }],
//     },
//   },
//   // {
//   //   id: "biofert",
//   //   img: "/images/hero/biofert.jpg",
//   //   en: {
//   //     title: "Bio-fertilizers & Water Rejuvenation",
//   //     sub: "Boost nutrient uptake and conserve water resources.",
//   //     ctas: [{ label: "See Solutions", to: "/about" }],
//   //   },
//   //   mr: {
//   //     title: "बायो-फर्टिलायझर्स व पाणी पुनरुज्जीवन",
//   //     sub: "पोषकतत्व शोषण वाढवा व पाणी संसाधने जपा.",
//   //     ctas: [{ label: "उपाय पहा", to: "/about" }],
//   //   },
//   // },
//   // {
//   //   id: "training",
//   //   img: banner3,
//   //   en: {
//   //     title: "Training & Technical Assistance",
//   //     sub: "Modern techniques, on-field guidance, and expert support.",
//   //     ctas: [{ label: "Join a Workshop", to: "/about" }],
//   //   },
//   //   mr: {
//   //     title: "प्रशिक्षण व तांत्रिक सहाय्य",
//   //     sub: "आधुनिक तंत्र, शेतात मार्गदर्शन व तज्ज्ञ सहाय्य.",
//   //     ctas: [{ label: "कार्यशाळेत सहभागी व्हा", to: "/about" }],
//   //   },
//   // },
// ];

// export default function Hero({ lang = "en", autoPlay = true }) {
//   const [index, setIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isHover, setIsHover] = useState(false);
//   const [focusInside, setFocusInside] = useState(false);
//   const liveRef = useRef(null);
//   const total = slides.length;

//   const goTo = useCallback((i) => setIndex(((i % total) + total) % total), [total]);
//   const next = useCallback(() => goTo(index + 1), [index, goTo]);
//   const prev = useCallback(() => goTo(index - 1), [index, goTo]);

//   useEffect(() => {
//     if (!autoPlay || !isPlaying || isHover || focusInside) return;
//     const id = setInterval(next, SLIDE_DURATION_MS);
//     return () => clearInterval(id);
//   }, [autoPlay, isPlaying, isHover, focusInside, next]);

//   useEffect(() => {
//     if (!liveRef.current) return;
//     const s = slides[index];
//     const t = (lang === "mr" ? s.mr.title : s.en.title) || "";
//     liveRef.current.textContent = `Slide ${index + 1} of ${total}: ${t}`;
//   }, [index, lang, total]);

//   const onKeyDown = (e) => {
//     if (e.key === "ArrowRight") {
//       e.preventDefault();
//       next();
//     } else if (e.key === "ArrowLeft") {
//       e.preventDefault();
//       prev();
//     }
//   };

//   return (
//     <section
//       className="relative w-full h-[350px] sm:h-[550px] md:h-[70vh] lg:h-[500px] overflow-hidden"
//       role="region"
//       aria-roledescription="carousel"
//       aria-label={lang === "mr" ? "हिरो बॅनर" : "Hero promotions"}
//       onMouseEnter={() => setIsHover(true)}
//       onMouseLeave={() => setIsHover(false)}
//       onFocusCapture={() => setFocusInside(true)}
//       onBlurCapture={(e) => {
//         if (!e.currentTarget.contains(e.relatedTarget)) setFocusInside(false);
//       }}
//       tabIndex={0}
//       onKeyDown={onKeyDown}
//     >
//       {/* Slides track */}
//       <div className="h-full w-full relative overflow-hidden">
//         <div
//           className="flex h-full w-full transition-transform duration-700 ease-in-out"
//           style={{ transform: `translateX(-${index * 100}%)` }}
//         >
//           {slides.map((s, i) => {
//             const copy = lang === "mr" ? s.mr : s.en;
//             return (
//               <div
//                 key={s.id}
//                 className="min-w-full h-full relative flex-shrink-0"
//                 role="group"
//                 aria-roledescription="slide"
//                 aria-label={`${i + 1} of ${total}`}
//               >
//                 {/* Background */}
//                 <img
//                   src={s.img}
//                   alt=""
//                   className="absolute inset-0 h-full w-full  object-center"
//                   onError={(e) => {
//                     e.currentTarget.style.opacity = "0.2";
//                   }}
//                 />
//                 <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
//                 <div
//                   className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent"
//                   aria-hidden="true"
//                 />

//                 {/* Content */}
//                 {/* <div className="relative z-10 h-full w-full flex items-center">
//                   <div className="container mx-auto px-4">
//                     <div className="max-w-3xl text-white">
//                       <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold leading-tight">
//                         {copy.title}
//                       </h1>
//                       <p className="mt-4 text-sm sm:text-base md:text-lg text-white/90">
//                         {copy.sub}
//                       </p>
//                       <div className="mt-6 flex flex-wrap gap-3">
//                         {copy.ctas?.map((cta) => (
//                           <Link
//                             key={cta.label}
//                             to={cta.to}
//                             className="inline-flex items-center justify-center rounded-md bg-green-600 px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
//                           >
//                             {cta.label}
//                           </Link>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div> */}
//                 <div className="relative z-10 h-full w-full flex items-center">
//                   <div className="container mx-auto px-3 sm:px-4 md:px-6">
//                     <div className="max-w-3xl text-white text-center sm:text-left">
//                       <h1 className="text-xl sm:text-3xl md:text-5xl font-semibold leading-tight">
//                         {copy.title}
//                       </h1>
//                       <p className="mt-3 text-xs sm:text-base md:text-lg text-white/90">
//                         {copy.sub}
//                       </p>
//                       <div className="mt-5 sm:mt-6 flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3">
//                         {copy.ctas?.map((cta) => (
//                           <Link
//                             key={cta.label}
//                             to={cta.to}
//                             className="inline-flex items-center justify-center rounded-md bg-green-600 px-3 sm:px-5 py-1.5 sm:py-2.5 text-xs sm:text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
//                           >
//                             {cta.label}
//                           </Link>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Controls */}
//       {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2 sm:px-4">
//         <button
//           type="button"
//           className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-gray-900 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
//           aria-label={lang === "mr" ? "मागील स्लाइड" : "Previous slide"}
//           onClick={prev}
//         >
//           <span aria-hidden="true">‹</span>
//         </button>
//         <button
//           type="button"
//           className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-gray-900 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
//           aria-label={lang === "mr" ? "पुढील स्लाइड" : "Next slide"}
//           onClick={next}
//         >
//           <span aria-hidden="true">›</span>
//         </button>
//       </div> */}

//       {/* Play/Pause */}
//       {/* <div className="absolute right-3 top-3 flex items-center gap-2">
//         <button
//           type="button"
//           className="inline-flex items-center justify-center rounded-md bg-white/90 px-3 py-1.5 text-sm font-medium text-gray-900 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
//           aria-pressed={isPlaying}
//           aria-label={
//             isPlaying
//               ? lang === "mr"
//                 ? "स्वयंचलन थांबवा"
//                 : "Pause auto-rotation"
//               : lang === "mr"
//               ? "स्वयंचलन सुरू करा"
//               : "Play auto-rotation"
//           }
//           onClick={() => setIsPlaying((p) => !p)}
//         >
//           {isPlaying ? (lang === "mr" ? "Pause" : "Pause") : (lang === "mr" ? "Play" : "Play")}
//         </button>
//       </div> */}

//       {/* Indicators */}
//       <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
//         {slides.map((s, i) => (
//           <button
//             key={s.id}
//             type="button"
//             className={`h-2.5 w-2.5 rounded-full border border-white/70 ${
//               i === index ? "bg-white" : "bg-white/30 hover:bg-white/60"
//             }`}
//             aria-label={lang === "mr" ? `स्लाइड ${i + 1} ला जा` : `Go to slide ${i + 1}`}
//             aria-current={i === index ? "true" : undefined}
//             onClick={() => goTo(i)}
//           />
//         ))}
//       </div>

//       {/* Live region for SR */}
//       <div ref={liveRef} aria-live="polite" className="sr-only" />
//     </section>
//   );
// }
