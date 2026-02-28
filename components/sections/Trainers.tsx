"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Trainer {
  name: string;
  role: string;
  specialties: string[];
  image: string;
  instagram?: string;
}

const trainers: Trainer[] = [
  {
    name: "Ahmed Al-Mansoori",
    role: "Head Strength Coach",
    specialties: ["Strength Training", "Powerlifting", "Bodybuilding"],
    image: "/assets/images/trainer-1.webp",
    instagram: "@ahmed_fitness",
  },
  {
    name: "Sarah Johnson",
    role: "Personal Training Specialist",
    specialties: ["Fat Loss", "Nutrition", "HIIT"],
    image: "/assets/images/trainer-2.webp",
    instagram: "@sarah_fit",
  },
  {
    name: "Mohammed Hassan",
    role: "CrossFit Coach",
    specialties: ["CrossFit", "Functional Training", "Mobility"],
    image: "/assets/images/trainer-3.webp",
    instagram: "@moh_crossfit",
  },
];

function TrainerCard({ trainer, index }: { trainer: Trainer; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative h-[500px] perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className="relative w-full h-full preserve-3d transition-transform duration-700"
        style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden">
          <div className="relative h-full rounded-xl overflow-hidden bg-gray-900">
            <Image
              src={trainer.image}
              alt={trainer.name}
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold mb-2">{trainer.name}</h3>
              <p className="text-primary font-semibold">{trainer.role}</p>
            </div>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 backface-hidden bg-gray-900 rounded-xl p-6 flex flex-col justify-center"
          style={{ transform: "rotateY(180deg)" }}
        >
          <h3 className="text-2xl font-bold mb-4 text-center">{trainer.name}</h3>
          <p className="text-primary font-semibold mb-6 text-center">{trainer.role}</p>
          
          <div className="space-y-3 mb-6">
            <p className="text-gray-400 font-semibold">Specialties:</p>
            <ul className="space-y-2">
              {trainer.specialties.map((specialty) => (
                <li key={specialty} className="text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                  {specialty}
                </li>
              ))}
            </ul>
          </div>

          {trainer.instagram && (
            <a
              href={`https://instagram.com/${trainer.instagram.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-primary hover:text-red-600 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>{trainer.instagram}</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Trainers() {
  return (
    <section
      id="trainers"
      className="py-24 px-4 bg-gradient-to-b from-gray-900 to-background"
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
            Meet Our <span className="text-primary">Expert Trainers</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our certified trainers are here to guide you on your fitness journey with personalized attention and expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <TrainerCard key={trainer.name} trainer={trainer} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
