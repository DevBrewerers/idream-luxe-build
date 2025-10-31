import { motion } from "framer-motion";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/idreamgroupltd",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/idream_interiordesignbuild",
  },
];

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Process", href: "#process" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-background text-foreground">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <img
              src="https://res.cloudinary.com/di9xtaqhg/image/upload/v1761932892/iDream_u1wxhb.png"
              alt="iDream Interior Design & Build"
              className="h-16 w-auto mb-6"
            />
            <p className="font-sans text-foreground/80 mb-6 leading-relaxed">
              Local master building contractors specializing in luxury interior design, new builds, and extensions across West & North London.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 bg-foreground/10 hover:bg-foreground/20 flex items-center justify-center transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="font-sans text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-xl mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={20} className="mt-1 flex-shrink-0" />
                <a
                  href="tel:02080450533"
                  className="font-sans text-foreground/80 hover:text-foreground transition-colors"
                >
                  0208 045 0533
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="mt-1 flex-shrink-0" />
                <a
                  href="mailto:info@idreamlondon.com"
                  className="font-sans text-foreground/80 hover:text-foreground transition-colors"
                >
                  info@idreamlondon.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span className="font-sans text-foreground/80">
                  West & North London
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-sm text-foreground/70">
            © {new Date().getFullYear()} iDream Interior Design & Build. All rights reserved.
          </p>
          <a
            href="https://www.idreamlondon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            www.idreamlondon.com
          </a>
        </div>
      </div>
    </footer>
  );
};
