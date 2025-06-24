
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { lineChartData } from '../data/dummyData';

const SalesPerformanceChart = () => {
  return (
    <div className="bg-gradient-to-br from-blue-900 via-gray-900 to-black p-6 rounded-2xl shadow-2xl border border-blue-500 overflow-hidden">
      <h3 className="text-2xl font-bold text-white mb-6 text-center bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent">
        📈 Sales Performance Trends
      </h3>
      <div className="relative w-full h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={lineChartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <defs>
              <linearGradient id="revenueLineGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4ECDC4" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#4ECDC4" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="profitLineGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FECA57" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#FECA57" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="expenseLineGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF6B6B" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#FF6B6B" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
            <XAxis dataKey="name" stroke="#9CA3AF" tick={{ fill: '#E5E7EB', fontSize: 12 }} axisLine={{ stroke: '#4B5563' }} />
            <YAxis stroke="#9CA3AF" tick={{ fill: '#E5E7EB', fontSize: 12 }} axisLine={{ stroke: '#4B5563' }} />
            <Tooltip contentStyle={{
              backgroundColor: 'rgba(17, 24, 39, 0.95)',
              border: '1px solid #3B82F6',
              borderRadius: '12px',
              backdropFilter: 'blur(8px)',
              color: '#fff',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }} />
            <Legend wrapperStyle={{ color: '#E5E7EB', paddingTop: '20px' }} iconType="circle" />
            <Line type="monotone" dataKey="uv" stroke="#4ECDC4" strokeWidth={3} dot={{ fill: '#4ECDC4', strokeWidth: 2, r: 6 }} activeDot={{ r: 8, stroke: '#4ECDC4', strokeWidth: 2, fill: '#fff' }} name="Revenue" />
            <Line type="monotone" dataKey="pv" stroke="#FECA57" strokeWidth={3} dot={{ fill: '#FECA57', strokeWidth: 2, r: 6 }} activeDot={{ r: 8, stroke: '#FECA57', strokeWidth: 2, fill: '#fff' }} name="Profit" />
            <Line type="monotone" dataKey="amt" stroke="#FF6B6B" strokeWidth={3} dot={{ fill: '#FF6B6B', strokeWidth: 2, r: 6 }} activeDot={{ r: 8, stroke: '#FF6B6B', strokeWidth: 2, fill: '#fff' }} name="Expenses" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesPerformanceChart;
