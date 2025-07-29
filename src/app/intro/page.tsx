'use client';
import React from "react";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center">
      <motion.div
        className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-pink-600 mb-4">Welcome to Kritivya</h1>
        <p className="text-lg text-gray-700 mb-6">
          Handcrafted flowers made with love 💐
        </p>
        
      </motion.div>
    </div>
  );
};

export default Intro;
