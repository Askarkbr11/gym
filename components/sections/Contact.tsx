"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-4 bg-background"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Visit us at our location in Oud Metha, Dubai or contact us to book your free trial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Address</h3>
                <p className="text-gray-400 leading-relaxed">
                  2nd St - Oud Metha
                  <br />
                  Dubai - United Arab Emirates
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <a
                  href="tel:+971585240247"
                  className="text-primary hover:text-red-600 transition-colors"
                >
                  +971 58 524 0247
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <a
                  href="mailto:info@247gym.ae"
                  className="text-primary hover:text-red-600 transition-colors"
                >
                  info@247gym.ae
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Opening Hours</h3>
                <div className="text-gray-400 space-y-1">
                  <p>Monday - Friday: 6:00 AM - 11:00 PM</p>
                  <p>Saturday - Sunday: 7:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] rounded-lg overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1234567890123!2d55.27845678901234!3d25.23456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69c2c8b8b8b9%3A0x1234567890abcdef!2s2nd%20St%20-%20Oud%20Metha%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="247 Gym - The Fitness District Location Map"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
