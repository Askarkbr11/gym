"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const quickLinks = [
  { name: "About Us", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Trainers", href: "#trainers" },
  { name: "Membership", href: "#membership" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/247gym" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/247gym" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/247gym" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com/247gym" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              247 <span className="text-primary">Gym</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Build Strength. Break Limits.
            </p>
            <p className="text-gray-500 text-sm">
              The Fitness District - Oud Metha, Dubai, UAE
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                2nd St - Oud Metha
                <br />
                Dubai - United Arab Emirates
              </li>
              <li>
                <a
                  href="tel:+971585240247"
                  className="hover:text-primary transition-colors"
                >
                  +971 58 524 0247
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@247gym.ae"
                  className="hover:text-primary transition-colors"
                >
                  info@247gym.ae
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} 247 Gym - The Fitness District. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
