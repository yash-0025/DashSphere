
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Send, CheckCircle, AlertCircle } from 'lucide-react';

const FormExample = () => {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setIsSubmitting(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setMessage(`Action submitted successfully!`);
      setInputValue('');
      setIsSubmitting(false);
    } else {
      setMessage('Please enter an action!');
    }
    setTimeout(() => setMessage(''), 3000);
  };

  const quickActions = [
    'Generate monthly report',
    'Update user permissions',
    'Schedule maintenance',
    'Export data analytics'
  ];

  return (
    <motion.div
      id="quick-action-form"
      className="bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-700/30 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      {/* Header */}
      <div className="px-8 py-6 bg-gradient-to-r from-electric/10 to-neon/10 border-b border-gray-700/30">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-electric/20 backdrop-blur-sm">
            <Zap className="w-5 h-5 text-electric" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Quick Actions</h3>
            <p className="text-sm text-gray-400">Execute commands instantly</p>
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* Quick Action Buttons */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-3 text-gray-300">
            Popular Actions
          </label>
          <div className="grid grid-cols-2 gap-2">
            {quickActions.map((action, index) => (
              <motion.button
                key={index}
                onClick={() => setInputValue(action)}
                className="text-left p-3 rounded-xl bg-gray-800/40 hover:bg-gray-700/60 border border-gray-600/30 hover:border-electric/40 text-sm text-gray-300 hover:text-white transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {action}
              </motion.button>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Input Field */}
          <div className="space-y-2">
            <label htmlFor="actionInput" className="block text-sm font-medium text-gray-300">
              Custom Action
            </label>
            <div className="relative">
              <input
                type="text"
                id="actionInput"
                className="w-full p-4 pr-12 bg-gray-800/60 backdrop-blur-sm border border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric/60 transition-all duration-300"
                placeholder="Type your custom action here..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <div className="w-2 h-2 bg-electric rounded-full animate-pulse" />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting || !inputValue.trim()}
            className={`
              relative w-full p-4 rounded-2xl font-semibold text-white overflow-hidden
              transition-all duration-300 shadow-lg hover:shadow-2xl
              ${!inputValue.trim() 
                ? 'bg-gray-700/50 cursor-not-allowed' 
                : 'bg-gradient-to-r from-electric via-electric-light to-neon hover:from-neon-light hover:via-electric hover:to-electric-light'
              }
              ${isSubmitting ? 'cursor-wait' : ''}
            `}
            whileHover={inputValue.trim() ? { 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(0, 255, 255, 0.3)"
            } : {}}
            whileTap={inputValue.trim() ? { scale: 0.98 } : {}}
          >
            {/* Button Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-1000" />
            
            <div className="relative flex items-center justify-center gap-3">
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Execute Action
                </>
              )}
            </div>
          </motion.button>

          {/* Status Message */}
          {message && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 400, damping: 25 }}
              className={`
                flex items-center gap-3 p-4 rounded-2xl backdrop-blur-sm border
                ${message.includes('Please') 
                  ? 'bg-red-500/10 border-red-500/30 text-red-400' 
                  : 'bg-green-500/10 border-green-500/30 text-green-400'
                }
              `}
            >
              {message.includes('Please') ? (
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
              ) : (
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
              )}
              <span className="text-sm font-medium">{message}</span>
            </motion.div>
          )}
        </form>

        {/* Footer Info */}
        <div className="mt-6 pt-6 border-t border-gray-700/30">
          <div className="flex justify-between items-center text-xs text-gray-500">
            <span>Last action: 2 minutes ago</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>System Ready</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FormExample;