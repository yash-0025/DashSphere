import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { usersData } from '../data/dummyData';

const DataTable = () => {
  const [data] = useState(usersData);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div
      id="users-table"
      className="bg-gray-900/50 backdrop-blur-xl rounded-2xl shadow-2xl p-6 mb-8 border border-gray-700/50 scroll-mt-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <h3 className="text-xl font-semibold mb-6 text-white">User Management</h3>
      <div className="mb-6">
        <div className="relative">
          <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search users..."
            className="w-full p-4 pl-12 border rounded-xl transition-all duration-300 shadow-sm bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-electric focus:border-electric focus:outline-none backdrop-blur-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="overflow-x-auto rounded-xl border border-gray-600/30 bg-gray-800/30 backdrop-blur-sm">
        <table className="min-w-full divide-y divide-gray-600/30">
          <thead className="bg-gray-800/50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-300">Name</th>
              <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-300">Email</th>
              <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-300">Status</th>
            </tr>
          </thead>
          <tbody className="bg-gray-800/20 divide-y divide-gray-600/30">
            {filteredData.length > 0 ? (
              filteredData.map((user) => (
                <motion.tr
                  key={user.id}
                  className="hover:bg-gray-700/30 transition-colors"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.status === 'Active' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      user.status === 'Inactive' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                      'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                </motion.tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-gray-400 px-6 py-8 text-center">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default DataTable;
