import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { sidebarNavItems } from '../data/dummyData';

const Sidebar = ({ isOpen, toggleSidebar, activeSection, scrollToSection }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
        />
      )}
      
      {/* Sidebar */}
      <motion.div
        initial={false}
        animate={{ 
          x: isOpen ? 0 : '-100%'
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="
          flex flex-col h-screen w-72 fixed top-0 left-0 z-50 bg-gray-900/95 backdrop-blur-xl text-white border-r border-gray-700/50 px-6
          overflow-y-auto shadow-2xl
          lg:static lg:translate-x-0 lg:z-auto
        "
        style={{
          // Ensure the sidebar is always rendered but positioned off-screen when closed on mobile
          display: 'flex'
        }}
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b border-gray-700/50 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-electric to-neon"></div>
            <span className="text-xl font-bold tracking-tight">DashSphere</span>
          </div>
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 rounded-full text-white hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-electric transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Main Action Button */}
        <div className="p-4">
          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-electric bg-blue-800 to-electric-light text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105">
            Create New
          </button>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 px-2 space-y-2">
          {sidebarNavItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={e => { 
                e.preventDefault(); 
                scrollToSection(item.id);
                // Close sidebar on mobile after navigation
                if (window.innerWidth < 1024) {
                  toggleSidebar();
                }
              }}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all
                ${activeSection === item.id
                  ? 'bg-gradient-to-r from-electric/20 to-electric-light/20 text-white border border-electric/30 shadow-lg'
                  : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'}
              `}
            >
              <span className="inline-flex items-center justify-center w-6 h-6">
                {React.createElement(item.icon, { 
                  size: 20, 
                  className: activeSection === item.id ? 'text-electric' : 'text-gray-400' 
                })}
              </span>
              <span className="flex-1">{item.label}</span>
            </a>
          ))}
        </nav>
        
        {/* Sidebar Footer */}
        <div className="p-4 border-t border-gray-700/50">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-800/50">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50" />
            <span className="text-sm font-medium text-gray-300">System Online</span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;