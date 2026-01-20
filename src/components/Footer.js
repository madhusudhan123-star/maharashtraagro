import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

function Footer({ lang }) {
  const socialLinks = [
    {
      name: 'Twitter',
      url: 'https://x.com/maharashtraagro',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/maharashtraagro.in/',
      icon: <Instagram className="w-5 h-5" />
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@maharashtra-w4g',
      icon: <Youtube className="w-5 h-5" />
    }
  ];

  return (
    <footer className="bg-gradient-to-r from-green-800 to-green-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-green-100">
              {lang === "mr" 
                ? "महाराष्ट्र अॅग्रो मल्टी स्टेट कोऑपरेटिव्ह सोसायटी लि." 
                : "Maharashtra Agro Multi State Cooperative Society Ltd."}
            </h3>
            <p className="text-green-200 text-sm leading-relaxed">
              {lang === "mr"
                ? "शेतकऱ्यांच्या कल्याणासाठी आणि कृषी विकासासाठी प्रतिबद्ध"
                : "Committed to farmer welfare and agricultural development"}
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-100">
              {lang === "mr" ? "संपर्क माहिती" : "Contact Information"}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-green-300" />
                <a 
                  href="mailto:Mahaagromcsl@gmail.com" 
                  className="text-green-200 hover:text-white text-sm transition-colors"
                >
                  Mahaagromcsl@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-green-300" />
                <a 
                  href="tel:+919066515656" 
                  className="text-green-200 hover:text-white text-sm transition-colors"
                >
                  +91 90665 15656
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-100">
              {lang === "mr" ? "सोशल मीडिया" : "Follow Us"}
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-700 hover:bg-green-600 p-2 rounded-full transition-colors duration-200 group"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <div className="text-green-200 group-hover:text-white">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
            <p className="text-green-300 text-xs">
              {lang === "mr" 
                ? "आमच्यासोबत जुडून राहा आणि नवीन अपडेट्स मिळवा" 
                : "Stay connected for latest updates and news"}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-green-200 text-sm">
                © 2025 Maharashtra Agro Multi State Cooperative Society Ltd. 
                <span className="mx-2">|</span>
                {lang === "mr" ? "सर्व हक्क राखीव" : "All Rights Reserved"}
              </p>
            </div>
            {/* <div className="flex space-x-6 text-sm">
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                {lang === "mr" ? "गोपनीयता धोरण" : "Privacy Policy"}
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                {lang === "mr" ? "अटी व शर्ती" : "Terms & Conditions"}
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
