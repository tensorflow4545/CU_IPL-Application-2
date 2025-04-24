"use client";
import { motion } from "framer-motion";
import { Users, Trophy, Calendar, TrendingUp } from "lucide-react";

export default function Stats() {
  const stats = [
    { icon: Users, title: "Total Matches", value: "74" },
    { icon: Trophy, title: "Teams", value: "10" },
    { icon: Calendar, title: "Tournament duration", value: "74" },
    { icon: TrendingUp, title: "Highest Score", value: "74" },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-orange-600 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 ">
          IPL 2025 Stats and Highlights
        </h2>

        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((items, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-[20px] p-6 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex justify-center mb-2">
                <items.icon className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-medium mb-2 text-center">
                {items.title}
              </h3>
              <p className="text-3xl font-bold text-center">{items.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
