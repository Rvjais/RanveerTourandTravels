import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  CreditCard,
  Shield,
  Award,
} from "lucide-react";
import "../Footer/Footer.css";
const Footer = () => {
  function popUp() {
    prompt = "popUP";
  }
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white ">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Sangam Tour & Travels
              </h2>
              <p className="text-slate-300 mt-3 leading-relaxed">
                Your trusted travel companion for unforgettable journeys.
                Discover the world with our expertly crafted tours and
                personalized travel experiences.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>
                  <a href="tel:+91 9648165493">+91 9648165493</a></span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5 text-blue-400" />
                <span><a href="mailto:ranveerjais9984@gmail.com">ranveerjais9984</a></span>
              </div>
              <div className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <span><a href="https://www.google.com/maps/search/?api=1&query=Daraganj,Sapphire Hotel,Prayagraj">Daraganj,Prayagraj</a></span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-blue-300">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                "Home",
                "About Us",
                "Destinations",
                "Hotels",
                "Car Rentals",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-blue-300">
                Customer Support
              </h3>
              <div className="space-y-3">
                <ul>
                  <li>
                    <a href="https://wa.me/+919648165493">24/7 Support</a>
                  </li>
                  <li>
                    <a href="tel: +91 9648165493">Contact Us</a>
                  </li>
                  <li>
                    <a href="mailto:ranveerjais9984@gmail.com">E-mail us</a>
                  </li>
                </ul>

                <br />
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg">
            <Shield className="w-8 h-8 text-green-400" />
            <div>
              <h4 className="font-semibold text-white">Secure Booking</h4>
              <p className="text-slate-300 text-sm">No delays and tanturums</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg">
            <Award className="w-8 h-8 text-yellow-400" />
            <div>
              <h4 className="font-semibold text-white">trustworthy</h4>
              <p className="text-slate-300 text-sm">
                We earn trust more then money
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg">
            <CreditCard className="w-8 h-8 text-blue-400" />
            <div>
              <h4 className="font-semibold text-white">Flexible Payment</h4>
              <p className="text-slate-300 text-sm">Multiple payment options</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-slate-400 text-center lg:text-left">
              <p>&copy; 2025 Sangam Tour & Travels. All rights reserved.</p>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-2">
              <span className="text-slate-400 mr-4">Follow us:</span>
              <div className="flex gap-3">
                {[
                  { Icon: Facebook, color: "hover:text-blue-500" },
                  { Icon: Twitter, color: "hover:text-sky-400" },
                  { Icon: Instagram, color: "hover:text-pink-500" },
                  { Icon: Youtube, color: "hover:text-red-500" },
                ].map(({ Icon, color }, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`p-2 bg-slate-800 rounded-full text-slate-400 ${color} transition-all duration-200 hover:scale-110 hover:shadow-lg`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
