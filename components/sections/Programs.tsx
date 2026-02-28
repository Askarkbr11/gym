"use client";

import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

interface Program {
  title: string;
  description: string;
  icon: string;
}

const programs: Program[] = [
  {
    title: "Strength Training",
    description: "Build muscle mass and increase your overall strength with our comprehensive strength training programs.",
    icon: "/assets/icons/strength.svg",
  },
  {
    title: "Fat Loss",
    description: "Scientifically designed programs to help you burn fat and achieve your ideal body composition.",
    icon: "/assets/icons/fat-loss.svg",
  },
  {
    title: "Personal Training",
    description: "One-on-one sessions with certified trainers tailored to your specific goals and fitness level.",
    icon: "/assets/icons/personal-training.svg",
  },
  {
    title: "CrossFit",
    description: "High-intensity functional fitness that combines strength, cardio, and agility training.",
    icon: "/assets/icons/crossfit.svg",
  },
  {
    title: "Group Classes",
    description: "Motivating group sessions including HIIT, yoga, spinning, and more. Train together, achieve together.",
    icon: "/assets/icons/group-classes.svg",
  },
];

function ProgramCard({ program, index }: { program: Program; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-primary/50 transition-all duration-300"
    >
      {/* Red glow on hover */}
      <div className="absolute inset-0 rounded-xl bg-primary opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300" />
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="w-16 h-16 mb-6 relative">
          <Image
            src={program.icon}
            alt={program.title}
            fill
            className="object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
            onError={(e) => {
              // Fallback if icon doesn't exist
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
            }}
          />
        </div>

        <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
          {program.title}
        </h3>
        <p className="text-gray-400 leading-relaxed">
          {program.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Programs() {
  const { ref } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="programs"
      ref={ref}
      className="py-24 px-4 bg-gradient-to-b from-background to-gray-900"
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
            Our <span className="text-primary">Programs</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose from our comprehensive range of fitness programs designed to help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={program.title} program={program} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
