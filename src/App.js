// App.js
import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, Link, useLocation } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero"; // Ensure your Hero component is at src/components/Hero.jsx
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";




function App() {
  const [lang, setLang] = useState("en"); // "en" | "mr"

  return (
    <Router>
      {/* Skip link for keyboard users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:text-gray-900 shadow"
      >
        {lang === "mr" ? "मुख्य मजकूराकडे जा" : "Skip to main content"}
      </a>

      <div className="min-h-screen flex flex-col">
        <Navbar lang={lang} setLang={setLang} />

        {/* Scroll + focus management on route changes */}
        <ScrollAndFocus />

        <main id="main" className="flex-1">
          <Routes>
            <Route
              path="/"
              element={<Home lang={lang} />}
            />
            <Route
              path="/about"
              element={<About lang={lang} />}
            />
            <Route
              path="/gallery"
              element={<Gallery lang={lang} />}
            />
            <Route
              path="/contact"
              element={<Contact lang={lang} />}
            />
            <Route
              path="*"
              element={<NotFoundPage lang={lang} />}
            />
          </Routes>
        </main>

        <Footer lang={lang} />
      </div>
    </Router>
  );
}


function ScrollAndFocus() {
  const location = useLocation();
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Move focus to the main landmark
    const main = document.getElementById("main");
    if (main) {
      // Delay to ensure route content mounted
      setTimeout(() => {
        main.setAttribute("tabindex", "-1");
        main.focus({ preventScroll: true });
        // cleanup tabindex to avoid persistent focus stops
        const t = setTimeout(() => main.removeAttribute("tabindex"), 100);
        return () => clearTimeout(t);
      }, 50);
    }
  }, [location]);

  return null;
}


function NotFoundPage({ lang }) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl font-semibold text-gray-900">
          {lang === "mr" ? "पान सापडले नाही" : "Page not found"}
        </h1>
        <p className="mt-3 text-gray-700">
          {lang === "mr" ? "हे पान अस्तित्वात नाही." : "The page you’re looking for doesn’t exist."}
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-800"
          >
            {lang === "mr" ? "मुख्य पानावर जा" : "Go Home"}
          </Link>
        </div>
      </div>
    </section>
  );
}



export default App;
