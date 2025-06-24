import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardOverview from './pages/DashboardOverview';
import DataTable from './components/DataTable';
import ActivityFeed from './components/ActivityFeed';
import FormExample from './components/FormExample';
import { sidebarNavItems } from './data/dummyData';
import ProductSalesChart from './components/ProductSalesChart';
import SalesPerformanceChart from './components/SalesPerformanceChart';
import MarketShareChart from './components/MarketShareChart';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard-overview');
  const observerRef = useRef(null);

  // Ultra-fast sidebar toggle
  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  // Instant scroll to section - no smooth scrolling delays
  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      // Use native scroll with minimal duration
      window.scrollTo({ 
        top: y, 
        behavior: 'smooth'
      });
    }
    
    setActiveSection(id);
    
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  }, []);

  // Optimized section detection with minimal overhead
  useEffect(() => {
    const sections = sidebarNavItems.map(item => document.getElementById(item.id)).filter(Boolean);

    if (sections.length > 0) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
              setActiveSection(entry.target.id);
            }
          });
        },
        {
          threshold: 0.6,
          rootMargin: '-70px 0px -30% 0px'
        }
      );

      sections.forEach(section => {
        if (section) observerRef.current.observe(section);
      });
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Minimal resize handler
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Memoized sidebar props
  const sidebarProps = useMemo(() => ({
    activeSection,
    scrollToSection,
    toggleSidebar
  }), [activeSection, scrollToSection, toggleSidebar]);

  return (
    <div className="min-h-screen font-inter bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="flex min-h-screen">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block fixed h-full z-30 transform-gpu">
          <Sidebar
            isOpen={true}
            {...sidebarProps}
          />
        </div>

        {/* Mobile Sidebar */}
        {isSidebarOpen && (
          <div className="lg:hidden">
            <Sidebar
              isOpen={isSidebarOpen}
              {...sidebarProps}
            />
          </div>
        )}
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0 lg:ml-[288px] transform-gpu">
          <Header toggleSidebar={toggleSidebar} />
          <main className="flex-1 px-4 sm:px-6 md:px-8 py-6">
            <div className="max-w-7xl mx-auto w-full space-y-6">
              
              {/* Dashboard Overview */}
              <div id="dashboard-overview" className="scroll-mt-20">
                <DashboardOverview />
              </div>
              
              {/* Sales Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="group bg-gradient-to-br from-electric/10 to-electric-light/10 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-electric/20 hover:border-electric/40 transition-colors duration-150 transform-gpu">
                  <h3 className="text-xl font-semibold mb-4 text-electric-light">Sales Performance</h3>
                  <div className="w-full h-[300px]">
                    <SalesPerformanceChart />
                  </div>
                </div>
                
                <div className="group bg-gradient-to-br from-neon/10 to-neon-light/10 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-neon/20 hover:border-neon/40 transition-colors duration-150 transform-gpu">
                  <h3 className="text-xl font-semibold mb-4 text-neon-light">Product Sales</h3>
                  <div className="w-full h-[300px]">
                    <ProductSalesChart />
                  </div>
                </div>
              </div>
              
              {/* Market Data */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="group bg-gradient-to-br from-lava/10 to-lava-light/10 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-lava/20 hover:border-lava/40 transition-colors duration-150 transform-gpu">
                  <h3 className="text-xl font-semibold mb-4 text-lava-light">Market Share</h3>
                  <div className="w-full h-[300px]">
                    <MarketShareChart />
                  </div>
                </div>
                
                <div className="w-full transform-gpu">
                  <DataTable />
                </div>
              </div>
              
              {/* Bottom Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-hyper/5 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-electric/20 transform-gpu">
                  <ActivityFeed />
                </div>
                <div className="bg-gradient-to-br from-electric/5 via-neon/5 to-lava/5 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-neon/20 transform-gpu">
                  <FormExample />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;