import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ShoppingCart,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="gradient-primary py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-foreground">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-primary-foreground/80">
                Get the latest deals and offers directly in your inbox
              </p>
            </div>
            <form className="flex gap-2 w-full md:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 w-full md:w-64"
              />
              <Button variant="secondary" className="shrink-0">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="gradient-primary flex h-10 w-10 items-center justify-center rounded-lg">
                <ShoppingCart className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Raghukul</span>
            </div>
            <p className="text-background/70 mb-4">
              Your trusted destination for premium electronics and gadgets.
              Quality products, competitive prices, and exceptional service.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-background/70 hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-background/70 hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-background/70 hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-background/70 hover:text-primary transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  to="/products?deal=true"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Today's Deals
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products?category=smartphones"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Smartphones
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=laptops"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Laptops
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=tablets"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Tablets
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=audio"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Audio
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=accessories"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-background/70">
                  123 Tech Street, Electronics City, Mumbai - 400001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="mailto:support@Raghukul.com"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  support@Raghukul.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-background/20" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
          <p>© 2024 Raghukul. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/shipping" className="hover:text-primary transition-colors">
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
