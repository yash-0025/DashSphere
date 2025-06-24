
import { LayoutDashboard, TrendingUp, Users, PieChart as PieChartIcon, Settings } from 'lucide-react';

// Chart Colors for light and dark themes
export const LIGHT_CHART_COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#3b82f6', '#ec4899'];
export const DARK_CHART_COLORS = ['#a78bfa', '#34d399', '#fcd34d', '#f87171', '#60a5fa', '#f472b6'];

// Enhanced Neon Colors for vibrant charts
export const NEON_COLORS = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FECA57', '#FF9FF3', '#54A0FF', '#5F27CD'];

// Dummy data for Line Chart - Enhanced with better naming
export const lineChartData = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400, revenue: 4000, profit: 2400, expenses: 1600 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210, revenue: 3000, profit: 1398, expenses: 1602 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290, revenue: 2000, profit: 9800, expenses: 800 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000, revenue: 2780, profit: 3908, expenses: 1200 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181, revenue: 1890, profit: 4800, expenses: 1000 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500, revenue: 2390, profit: 3800, expenses: 1400 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100, revenue: 3490, profit: 4300, expenses: 1800 },
];

// Dummy data for Bar Chart - Enhanced with revenue data
export const barChartData = [
  { name: 'Product A', sales: 400, revenue: 2400 },
  { name: 'Product B', sales: 300, revenue: 1398 },
  { name: 'Product C', sales: 200, revenue: 980 },
  { name: 'Product D', sales: 278, revenue: 3908 },
  { name: 'Product E', sales: 189, revenue: 4800 },
];

// Dummy data for Pie Chart - Enhanced with better category names
export const pieChartData = [
  { name: 'Mobile', value: 400 },
  { name: 'Desktop', value: 300 },
  { name: 'Tablet', value: 300 },
  { name: 'Smart TV', value: 200 },
  { name: 'Other', value: 150 },
];

// Additional data for more diverse pie chart
export const marketShareData = [
  { name: 'iOS', value: 35, color: '#FF6B6B' },
  { name: 'Android', value: 45, color: '#4ECDC4' },
  { name: 'Windows', value: 15, color: '#45B7D1' },
  { name: 'Others', value: 5, color: '#96CEB4' },
];

// Enhanced revenue data for advanced charts
export const revenueData = [
  { month: 'Jan', revenue: 45000, target: 50000, growth: 12 },
  { month: 'Feb', revenue: 52000, target: 55000, growth: 15 },
  { month: 'Mar', revenue: 48000, target: 52000, growth: 8 },
  { month: 'Apr', revenue: 61000, target: 58000, growth: 22 },
  { month: 'May', revenue: 55000, target: 60000, growth: 18 },
  { month: 'Jun', revenue: 67000, target: 65000, growth: 25 },
];

// Performance metrics data
export const performanceData = [
  { category: 'Sales', current: 85, target: 90, color: '#4ECDC4' },
  { category: 'Marketing', current: 72, target: 80, color: '#FECA57' },
  { category: 'Support', current: 91, target: 95, color: '#96CEB4' },
  { category: 'Development', current: 78, target: 85, color: '#FF9FF3' },
];

// Dummy data for Recent Activity Feed
export const recentActivity = [
  { id: 1, type: 'Order', description: 'New order #1001 from John Doe', time: '2 mins ago', icon: '🛒', color: 'text-green-400' },
  { id: 2, type: 'Update', description: 'Dashboard data updated', time: '1 hour ago', icon: '🔄', color: 'text-blue-400' },
  { id: 3, type: 'Payment', description: 'Payment received from Jane Smith', time: 'Yesterday', icon: '💰', color: 'text-yellow-400' },
  { id: 4, type: 'Report', description: 'Monthly sales report generated', time: '2 days ago', icon: '📊', color: 'text-purple-400' },
  { id: 5, type: 'Alert', description: 'Low inventory alert for Product C', time: '3 days ago', icon: '⚠️', color: 'text-red-400' },
];

// Dummy data for User List (DataTable) - Enhanced with more fields
export const usersData = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', status: 'Active', role: 'Admin', lastLogin: '2 hours ago' },
  { id: 2, name: 'Bob Williams', email: 'bob@example.com', status: 'Inactive', role: 'User', lastLogin: '5 days ago' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', status: 'Active', role: 'Manager', lastLogin: '1 hour ago' },
  { id: 4, name: 'Diana Prince', email: 'diana@example.com', status: 'Pending', role: 'User', lastLogin: 'Never' },
  { id: 5, name: 'Eve Adams', email: 'eve@example.com', status: 'Active', role: 'Editor', lastLogin: '30 mins ago' },
];

// Enhanced KPI data for dashboard cards
export const kpiData = [
  { 
    title: 'Total Revenue', 
    value: '$124,592', 
    change: '+12.5%', 
    trend: 'up', 
    icon: '💰',
    color: 'from-green-400 to-emerald-600'
  },
  { 
    title: 'Active Users', 
    value: '1,429', 
    change: '+8.2%', 
    trend: 'up', 
    icon: '👥',
    color: 'from-blue-400 to-cyan-600'
  },
  { 
    title: 'Orders Today', 
    value: '89', 
    change: '-2.1%', 
    trend: 'down', 
    icon: '🛍️',
    color: 'from-purple-400 to-pink-600'
  },
  { 
    title: 'Conversion Rate', 
    value: '3.24%', 
    change: '+0.8%', 
    trend: 'up', 
    icon: '📈',
    color: 'from-orange-400 to-red-600'
  },
];

// Sidebar Navigation Items with their corresponding section IDs and icons
export const sidebarNavItems = [
  { id: 'dashboard-overview', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'charts-section', label: 'Analytics', icon: TrendingUp },
  { id: 'users-table', label: 'Users', icon: Users },
  { id: 'activity-feed', label: 'Activity', icon: PieChartIcon },
  { id: 'quick-action-form', label: 'Quick Action', icon: Settings },
];