
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { barChartData } from '../data/dummyData';

const ProductSalesChart = () => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-900 bg-opacity-95 p-4 rounded-xl border border-cyan-400 shadow-2xl backdrop-blur-lg">
          <p className="text-cyan-300 font-semibold">{`${label}`}</p>
          <p className="text-yellow-300">{`Sales: ${payload[0].value}`}</p>
          <p className="text-green-300">{`Revenue: $${payload[1]?.value || 0}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">
      <h3 className="text-2xl font-bold text-white mb-6 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
        💰 Product Sales Performance
      </h3>
      <div className="relative w-full h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={barChartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <defs>
              <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="50%" stopColor="#4ECDC4" />
                <stop offset="100%" stopColor="#45B7D1" />
              </linearGradient>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FECA57" />
                <stop offset="50%" stopColor="#FF9FF3" />
                <stop offset="100%" stopColor="#54A0FF" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
            <XAxis dataKey="name" stroke="#9CA3AF" tick={{ fill: '#E5E7EB', fontSize: 12 }} axisLine={{ stroke: '#4B5563' }} />
            <YAxis stroke="#9CA3AF" tick={{ fill: '#E5E7EB', fontSize: 12 }} axisLine={{ stroke: '#4B5563' }} />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ color: '#E5E7EB', paddingTop: '20px' }} iconType="circle" />
            <Bar dataKey="sales" fill="url(#salesGradient)" radius={[8, 8, 0, 0]} filter="url(#glow)" name="Sales" />
            <Bar dataKey="revenue" fill="url(#revenueGradient)" radius={[8, 8, 0, 0]} filter="url(#glow)" name="Revenue ($)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProductSalesChart;
