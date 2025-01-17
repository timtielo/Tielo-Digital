import React from 'react';
import { motion } from 'framer-motion';
import { UserCircle } from 'lucide-react';

export function BusinessCardHero() {
  return (
    <section className="pt-32 pb-12 bg-gradient-to-br from-[#fff5f0] to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <UserCircle className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-4 font-rubik">
              Tim Tielkemeijer
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              AI & Automation Expert
            </p>
            <p className="text-gray-500">
              Tielo Digital
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}