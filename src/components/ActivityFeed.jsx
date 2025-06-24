import React from 'react';
import { motion } from 'framer-motion';
import { recentActivity } from '../data/dummyData';

const ActivityFeed = () => {
  return (
    <motion.div
      id="activity-feed"
      className="bg-gray-900/50 backdrop-blur-xl rounded-2xl shadow-2xl p-6 mb-8 border border-gray-700/50 scroll-mt-20 h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
    >
      <h3 className="text-xl font-semibold mb-6 text-white">Recent Activity</h3>
      <div className="space-y-4">
        {recentActivity.map((activity, index) => (
          <motion.div
            key={activity.id}
            className="flex items-start space-x-4 p-4 rounded-xl bg-gray-800/40 border border-gray-600/30 hover:bg-gray-700/40 transition-colors"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <div className="flex-shrink-0 w-2 h-2 bg-electric rounded-full mt-2"></div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white">{activity.description}</p>
              <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ActivityFeed;