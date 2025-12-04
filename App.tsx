

import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { SettingsProvider } from './context/SettingsContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
// Fix: Corrected the import statement for NSEStocksPage
import NSEStocksPage from './pages/NSEStocksPage'; 
import TradePage from './pages/TradePage';
import PortfolioPage from './pages/PortfolioPage';
import ProfilePage from './pages/ProfilePage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import RealisedPnLPage from './pages/RealisedPnLPage'; // Import the new RealisedPnLPage
import { ToastProvider } from './components/common/Toast'; 
import { ThemeMode } from './types'; // Import ThemeMode

const App: React.FC = () => {
  return (
    <React.Suspense fallback={
      <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        Loading application...
      </div>
    }>
      <SettingsProvider>
        <ThemeProvider initialTheme={ThemeMode.DARK}> {/* Set initial theme to DARK */}
          <ToastProvider> 
            <Router>
              <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow container mx-auto px-4 py-8">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/market" element={<NSEStocksPage />} />
                    {/* No authentication needed for trade, portfolio, profile, or admin */}
                    <Route path="/trade/:symbol" element={<TradePage />} />
                    <Route path="/portfolio" element={<PortfolioPage />} />
                    <Route path="/realised-pnl" element={<RealisedPnLPage />} /> {/* New route for Realised P&L */}
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/admin" element={<AdminDashboardPage />} />
                    {/* Fallback for unknown routes */}
                    <Route path="*" element={
                      <div className="text-center py-20 text-xl font-semibold text-gray-700 dark:text-gray-300">
                        404 - Page Not Found
                      </div>
                    } />
                  </Routes>
                </main>
                <Footer />
              </div>
            </Router>
          </ToastProvider>
        </ThemeProvider>
      </SettingsProvider>
    </React.Suspense>
  );
};

export default App;