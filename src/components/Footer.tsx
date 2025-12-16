import { Link } from "react-router-dom";
import { Home, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Home className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Harmony Living</span>
            </Link>
            <p className="text-sm opacity-80 mb-4">
              Your home away from home. Safe, comfortable, and affordable living for students and working professionals.
            </p>
            <div className="flex gap-3">
              <a href="#" className="h-9 w-9 flex items-center justify-center rounded-full bg-primary/20 hover:bg-primary/30 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 flex items-center justify-center rounded-full bg-primary/20 hover:bg-primary/30 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 flex items-center justify-center rounded-full bg-primary/20 hover:bg-primary/30 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/about" className="hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link to="/rooms" className="hover:opacity-100 transition-opacity">Rooms & Pricing</Link></li>
              <li><Link to="/amenities" className="hover:opacity-100 transition-opacity">Amenities</Link></li>
              <li><Link to="/gallery" className="hover:opacity-100 transition-opacity">Gallery</Link></li>
              <li><Link to="/rules" className="hover:opacity-100 transition-opacity">Rules & Policies</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Block-E 316, Pramukh Anand Mall  Reliance Circle, Kudasan, Gandhinagar, Gujarat 382421</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+91 9106161585 </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>harmonylivingorbit@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Timings */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Office Hours</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li className="flex justify-between">
                <span>Monday - Saturday</span>
                <span>9:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>10:00 AM - 5:00 PM</span>
              </li>
            </ul>
            <p className="mt-4 text-sm opacity-80">
              Visits by appointment preferred
            </p>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm opacity-60">
          <p>&copy; {new Date().getFullYear()} Harmony Living. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
