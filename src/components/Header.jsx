import React from 'react';
import { motion } from 'framer-motion';
import { BellRing, User, Search, Menu, Settings } from 'lucide-react';

const Header = ({ toggleSidebar }) => {
  return (
    <motion.header 
      className="p-4 px-6 flex items-center justify-between bg-gray-900/70 backdrop-blur-xl text-white border-b border-gray-700/50 sticky top-0 z-20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="flex items-center space-x-4">
        <motion.button 
          onClick={toggleSidebar} 
          className="lg:hidden p-3 rounded-xl text-white hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-electric"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Menu size={24} />
        </motion.button>
        <div className="relative">
          <Search size={20} className="absolute left-4 top-2/3 -translate-y-1/2 text-gray-400 z-10" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-12 pr-6 py-3 rounded-xl border border-gray-600/50 bg-gray-800/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-electric focus:border-electric w-64 md:w-80 focus:outline-none backdrop-blur-sm"
          />
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <button className="p-3 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 text-white focus:outline-none focus:ring-2 focus:ring-electric">
          <Settings size={24} />
        </button>
        <button className="relative p-3 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 text-white focus:outline-none focus:ring-2 focus:ring-electric">
          <BellRing size={24} />
          <span className="absolute -top-1 -right-1 block h-3 w-3 rounded-full bg-electric ring-2 ring-gray-900" />
        </button>
        <div className="flex items-center space-x-3 cursor-pointer p-3 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600/50">
          <div className="p-2 rounded-full bg-gradient-to-r from-electric to-electric-light flex items-center justify-center">
            <User size={20} className="text-white" />
          </div>
          <div className="hidden md:block">
            <span className="font-bold text-sm text-white">John Doe</span>
            <p className="text-xs text-gray-400">Administrator</p>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
