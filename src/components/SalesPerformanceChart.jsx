import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import { lineChartData } from '../data/dummyData';

const SalesPerformanceChart = () => {
  return (
    <div className="w-full max-w-full overflow-x-auto rounded-2xl shadow-2xl border border-blue-500 bg-gradient-to-br from-blue-900 via-gray-900 to-black px-4 py-5 sm:p-6">
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent">
        📈 Sales Performance Trends
      </h3>

      <div className="w-full h-[220px] md:h-[200px] sm:h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={lineChartData} margin={{ top: 10, right: 20, left: 10, bottom: 5 }}>
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
              color: '#fff'
            }} />
            <Legend wrapperStyle={{ color: '#E5E7EB', paddingTop: '20px' }} iconType="circle" />
            <Line type="monotone" dataKey="uv" stroke="#4ECDC4" strokeWidth={3} name="Revenue" />
            <Line type="monotone" dataKey="pv" stroke="#FECA57" strokeWidth={3} name="Profit" />
            <Line type="monotone" dataKey="amt" stroke="#FF6B6B" strokeWidth={3} name="Expenses" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesPerformanceChart;