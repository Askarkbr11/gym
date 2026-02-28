"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface Plan {
  name: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

const plans: Plan[] = [
  {
    name: "Basic",
    price: "299",
    period: "month",
    features: [
      "Access to all equipment",
      "Group classes included",
      "Locker room access",
      "Free parking",
      "Basic nutrition guidance",
    ],
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: "499",
    period: "month",
    features: [
      "Everything in Basic",
      "2 Personal training sessions/month",
      "Custom workout plans",
      "Progress tracking app",
      "Priority class booking",
      "Nutrition consultation",
    ],
    cta: "Get Started",
  },
  {
    name: "Elite",
    price: "799",
    period: "month",
    highlighted: true,
    features: [
      "Everything in Pro",
      "Unlimited personal training",
      "24/7 gym access",
      "Dedicated trainer",
      "Meal planning included",
      "Recovery & massage sessions",
      "Priority support",
      "VIP locker",
    ],
    cta: "Get Started",
  },
];

function MembershipCard({ plan, index }: { plan: Plan; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative rounded-2xl p-8 ${
        plan.highlighted
          ? "bg-gradient-to-br from-primary/20 to-red-900/20 border-2 border-primary scale-105 md:scale-110"
          : "bg-gray-900/50 border border-gray-800"
      } hover:scale-105 transition-transform duration-300`}
    >
      {plan.highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
          MOST POPULAR
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
        <div className="flex items-baseline justify-center gap-2">
          <span className="text-5xl font-bold text-primary">{plan.price}</span>
          <span className="text-gray-400">AED/{plan.period}</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className={`block w-full text-center py-4 rounded-lg font-semibold transition-all duration-300 ${
          plan.highlighted
            ? "bg-primary text-white hover:bg-red-700"
            : "bg-gray-800 text-white hover:bg-gray-700"
        }`}
      >
        {plan.cta}
      </a>
    </motion.div>
  );
}

export default function Membership() {
  return (
    <section
      id="membership"
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
            Membership <span className="text-primary">Plans</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose the plan that fits your fitness goals. All plans include a free trial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <MembershipCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
