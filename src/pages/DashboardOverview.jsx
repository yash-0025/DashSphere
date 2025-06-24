import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Users, CalendarDays, TrendingUp } from 'lucide-react';
import Card from '../components/Card';

const DashboardOverview = () => {
  return (
    <motion.div
      id="dashboard-overview"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, staggerChildren: 0.1 }}
    >
      <Card
        title="Total Revenue"
        value="$12,345"
        icon={<DollarSign />}
        accentColor="electric"
        className="h-full w-full"
      />
      <Card
        title="Active Users"
        value="1,567"
        icon={<Users />}
        accentColor="neon"
        className="h-full w-full"
      />
      <Card
        title="Pending Orders"
        value="89"
        icon={<CalendarDays />}
        accentColor="lava"
        className="h-full w-full"
      />
      <Card
        title="Growth Rate"
        value="+23.5%"
        icon={<TrendingUp />}
        accentColor="green"
        className="h-full w-full"
      />
    </motion.div>
  );
};

export default DashboardOverview;