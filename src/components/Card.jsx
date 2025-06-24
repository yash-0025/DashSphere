import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ title, value, icon, className = '', accentColor = 'electric' }) => {
  const colorClasses = {
    electric: 'from-electric/20 to-electric-light/20 border-electric/30 group-hover:border-electric/50',
    neon: 'from-neon/20 to-neon-light/20 border-neon/30 group-hover:border-neon/50',
    lava: 'from-lava/20 to-lava-light/20 border-lava/30 group-hover:border-lava/50',
    green: 'from-green-500/20 to-green-400/20 border-green-500/30 group-hover:border-green-500/50'
  };

  const iconColors = {
    electric: 'text-electric',
    neon: 'text-neon',
    lava: 'text-lava',
    green: 'text-green-400'
  };

  return (
    <motion.div
      className={`relative flex flex-col justify-between h-full w-full rounded-2xl p-6 bg-gradient-to-br ${colorClasses[accentColor]} backdrop-blur-xl shadow-2xl border group overflow-hidden transition-all duration-500 ${className}`}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl bg-gray-800/50 ${iconColors[accentColor]}`}>
          {React.cloneElement(icon, { size: 24, className: 'group-hover:scale-110 transition-transform' })}
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-white">{value}</p>
          <p className="text-sm text-gray-300">{title}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
