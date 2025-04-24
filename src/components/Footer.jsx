import { Link } from "react-router-dom";
import { Twitter, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Twitter", icon: Twitter, url: "#" },
    { name: "Facebook", icon: Facebook, url: "#" },
    { name: "Instagram", icon: Instagram, url: "#" },
    { name: "YouTube", icon: Youtube, url: "#" },
  ];

  const quickLinks = [
    { name: "Live Scores", path: "/live-scores" },
    { name: "Schedule", path: "/schedule" },
    { name: "Teams", path: "/teams" },
    { name: "Stats", path: "/stats" },
    { name: "News", path: "/news" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">
              IPL Score Tracker
            </h3>
            <p className="text-sm">
              The ultimate destination for IPL cricket fans to stay updated with
              live scores, team standings, and match schedules.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-orange-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">
              Connect With Us
            </h3>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-orange-600 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
            <p className="text-sm">
              Download our mobile app for a better experience
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {currentYear} IPL Score Tracker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
