import { BrowserRouter as Router, Routes, Route, NavLink, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from '../assets/logo.webp'

function NavItem({ to, label, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        [
          "block w-full text-left rounded-md px-3 py-2 text-base font-medium transition-colors duration-200 md:inline-flex md:items-center md:text-sm md:w-auto",
          isActive ? "text-green-700 bg-green-50" : "text-gray-700 hover:text-gray-900 hover:bg-gray-100",
        ].join(" ")
      }
      end
    >
      {label}
    </NavLink>
  );
}

function LangSwitch({ lang, setLang }) {
  return (
    <div className="inline-flex overflow-hidden rounded-md border border-gray-300 shadow-sm">
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`px-2.5 py-1.5 text-xs font-medium transition-colors duration-200 md:px-3 md:py-2 md:text-sm ${
          lang === "en" 
            ? "bg-green-600 text-white" 
            : "bg-white text-gray-700 hover:bg-gray-50"
        }`}
        aria-pressed={lang === "en"}
        aria-label="English"
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("mr")}
        className={`px-2.5 py-1.5 text-xs font-medium transition-colors duration-200 md:px-3 md:py-2 md:text-sm ${
          lang === "mr" 
            ? "bg-green-600 text-white" 
            : "bg-white text-gray-700 hover:bg-gray-50"
        }`}
        aria-pressed={lang === "mr"}
        aria-label="Marathi"
      >
        MR
      </button>
    </div>
  );
}

function MobileMenuButton({ isOpen, onClick }) {
  return (
    <button
      type="button"
      className="relative inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 transition-colors duration-200"
      aria-controls="mobile-menu"
      aria-expanded={isOpen}
      onClick={onClick}
    >
      <span className="sr-only">
        {isOpen ? 'Close main menu' : 'Open main menu'}
      </span>
      <div className="w-6 h-6">
        <span
          className={`absolute block w-5 h-0.5 bg-current left-0.5 top-2 transform transition duration-300 ease-in-out ${
            isOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}
        />
        <span
          className={`absolute block w-5 h-0.5 bg-current left-0.5 top-3 transform transition duration-300 ease-in-out ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`absolute block w-5 h-0.5 bg-current left-0.5 top-4 transform transition duration-300 ease-in-out ${
            isOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}
        />
      </div>
    </button>
  );
}

function Navbar({ lang, setLang }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { to: "/", label: lang === "mr" ? "मुख्य पान" : "Home" },
    // { to: "/about", label: lang === "mr" ? "आमच्याबद्दल" : "About" },
    // { to: "/gallery", label: lang === "mr" ? "गॅलरी" : "Gallery" },
    { to: "/contact", label: lang === "mr" ? "संपर्क" : "Contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-white backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link 
                to="/" 
                className="flex items-center gap-2 font-semibold tracking-tight text-gray-900 hover:opacity-80 transition-opacity duration-200"
                onClick={closeMobileMenu}
              >
                <img src={logo} alt="Maharashtra Agro Logo" className="h-10 sm:h-12 md:h-20 object-contain" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav 
              className="hidden md:flex flex-1 justify-center" 
              aria-label={lang === "mr" ? "मुख्य नेव्हिगेशन" : "Primary navigation"}
            >
              <ul className="flex items-center gap-1 lg:gap-2">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <NavItem to={item.to} label={item.label} />
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop Action Buttons & Language Switch */}
            <div className="hidden md:flex items-center gap-3 flex-shrink-0">
              <Link
                to="/contact?subject=Membership%20Application"
                className="inline-flex items-center justify-center rounded-lg bg-green-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500 transition-colors duration-200 shadow-sm"
              >
                {lang === "mr" ? "सदस्य व्हा" : "Join as a Member"}
              </Link>
              {/* <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-lg bg-gray-800 px-4 py-2.5 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-700 transition-colors duration-200 shadow-sm"
              >
                {lang === "mr" ? "अधिक जाणून घ्या" : "Learn More"}
              </Link> */}
              <LangSwitch lang={lang} setLang={setLang} />
            </div>

            {/* Mobile Right Side - Language Switch & Menu Button */}
            <div className="flex md:hidden items-center gap-2 flex-shrink-0">
              <LangSwitch lang={lang} setLang={setLang} />
              <MobileMenuButton isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className="md:hidden">
          <div 
            className={`transition-all duration-300 ease-in-out overflow-hidden bg-white border-t border-gray-200 ${
              isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}
            id="mobile-menu"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {/* Mobile Navigation Links */}
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <NavItem 
                    key={item.to}
                    to={item.to} 
                    label={item.label} 
                    onClick={closeMobileMenu}
                  />
                ))}
              </nav>

              {/* Mobile Action Buttons */}
              <div className="pt-6 space-y-3 border-t border-gray-200 mt-6">
                <Link
                  to="/contact?subject=Membership%20Application"
                  className="flex items-center justify-center w-full rounded-lg bg-green-600 px-4 py-3 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500 transition-colors duration-200"
                  onClick={closeMobileMenu}
                >
                  <span className="mr-2">👥</span>
                  {lang === "mr" ? "सदस्य व्हा" : "Join as a Member"}
                </Link>
                {/* <Link
                  to="/about"
                  className="flex items-center justify-center w-full rounded-lg bg-gray-800 px-4 py-3 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-700 transition-colors duration-200"
                  onClick={closeMobileMenu}
                >
                  <span className="mr-2">ℹ️</span>
                  {lang === "mr" ? "अधिक जाणून घ्या" : "Learn More"}
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-25 md:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
}

export default Navbar;

// import { BrowserRouter as Router, Routes, Route, NavLink, Link, useLocation } from "react-router-dom";
// import logo from '../assets/logo.webp'


// function NavItem({ to, label }) {
//   return (
//     <NavLink
//       to={to}
//       className={({ isActive }) =>
//         [
//           "inline-flex items-center rounded-md px-3 py-2 text-sm font-medium",
//           isActive ? "text-green-700" : "text-gray-700 hover:text-gray-900",
//         ].join(" ")
//       }
//       end
//     >
//       {label}
//     </NavLink>
//   );
// }

// function LangSwitch({ lang, setLang }) {
//   return (
//     <div className="inline-flex overflow-hidden rounded-md border">
//       <button
//         type="button"
//         onClick={() => setLang("en")}
//         className={`px-3 py-2 text-sm ${lang === "en" ? "bg-gray-900 text-white" : "bg-white text-gray-800 hover:bg-gray-100"}`}
//         aria-pressed={lang === "en"}
//         aria-label="English"
//       >
//         EN
//       </button>
//       <button
//         type="button"
//         onClick={() => setLang("mr")}
//         className={`px-3 py-2 text-sm ${lang === "mr" ? "bg-gray-900 text-white" : "bg-white text-gray-800 hover:bg-gray-100"}`}
//         aria-pressed={lang === "mr"}
//         aria-label="Marathi"
//       >
//         MR
//       </button>
//     </div>
//   );
// }


// function Navbar({ lang, setLang }) {
//   return (
//     <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
//       <div className="container mx-auto px-4">
//         <div className="flex h-16 items-center justify-between gap-4">
//           <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight text-gray-900">
//             <img src={logo} alt="Maharashtra Agro Logo" className="h-14 object-contain" />
//           </Link>

//           <nav aria-label={lang === "mr" ? "मुख्य नेव्हिगेशन" : "Primary navigation"}>
//             <ul className="flex items-center gap-2 sm:gap-4">
//               <li>
//                 <NavItem to="/" label={lang === "mr" ? "मुख्य पान" : "Home"} />
//               </li>
//               <li>
//                 <NavItem to="/about" label={lang === "mr" ? "आमच्याबद्दल" : "About"} />
//               </li>
//               <li>
//                 <NavItem to="/gallery" label={lang === "mr" ? "गॅलरी" : "Gallery"} />
//               </li>
//               <li>
//                 <NavItem to="/contact" label={lang === "mr" ? "संपर्क" : "Contact"} />
//               </li>
//             </ul>
//           </nav>

//           <div className="flex items-center gap-2">
//             <Link
//               to="/contact?subject=Membership%20Application"
//               className="hidden sm:inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
//             >
//               {lang === "mr" ? "सदस्य व्हा" : "Join as a Member"}
//             </Link>
//             <Link
//               to="/about"
//               className="hidden sm:inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-800"
//             >
//               {lang === "mr" ? "अधिक जाणून घ्या" : "Learn More"}
//             </Link>
//             <LangSwitch lang={lang} setLang={setLang} />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }



// export default Navbar;