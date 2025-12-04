
import { AppSettings, Stock, User } from './types';
import { v4 as uuidv4 } from 'uuid';

// Predefined color schemes for customization
export const COLOR_SCHEMES = [
  { name: 'Indigo-Emerald', primary: 'bg-indigo-600', accent: 'text-emerald-400', primaryDark: 'dark:bg-indigo-700', accentDark: 'dark:text-emerald-300' },
  { name: 'Blue-Orange', primary: 'bg-blue-600', accent: 'text-orange-400', primaryDark: 'dark:bg-blue-700', accentDark: 'dark:text-orange-300' },
  { name: 'Green-Violet', primary: 'bg-green-600', accent: 'text-violet-400', primaryDark: 'dark:bg-green-700', accentDark: 'dark:text-violet-300' },
  // New Rich Gray - Metallic Gold scheme, uses overridden Tailwind classes
  { name: 'RichGray-MetallicGold', primary: 'bg-gray-900', accent: 'text-amber-400', primaryDark: 'dark:bg-gray-800', accentDark: 'dark:text-amber-400' }, 
];

// Predefined font families for customization
export const FONT_FAMILIES = [
  { name: 'Inter', class: 'font-inter' },
  { name: 'Roboto Mono', class: 'font-mono' },
];

// Simulation specific constants
export const DATA_GENERATION_START_DATE = new Date('2025-01-01T09:15:00.000Z'); // Full range for data generation
export const SIMULATION_START_DATE = new Date('2025-10-01T09:15:00.000Z'); // Market open 9:15 AM IST (UTC-5:45, but using UTC for simplicity)
export const SIMULATION_END_DATE = new Date('2025-10-31T15:30:00.000Z'); // Market close 3:30 PM IST
export const SIMULATION_INTERVAL_MS = 10000; // 10 seconds per update
export const MARKET_TICK_MINUTES = 15; // Each update advances by 15 minutes of market time

// --- MANDATORY: REPLACED WITH EXACT SPECIFIED STOCK LIST ONLY ---
export const MOCK_NSE_STOCKS: Omit<Stock, 'id' | 'openPriceForDay' | 'changePercent'>[] = [
  // Initial OHLCV data will be overridden by the simulation engine's historical data
  { name: 'Aster DM Healthcare', symbol: 'ASTERDM', currentPrice: 400.00, open: 398, high: 405, low: 395, close: 400, volume: 150000, dayHigh: 408.00, dayLow: 392.00, marketCap: 20000, peRatio: 25.1 },
  { name: 'Radico Khaitan', symbol: 'RADICO', currentPrice: 1700.00, open: 1690, high: 1710, low: 1680, close: 1700, volume: 80000, dayHigh: 1720.00, dayLow: 1670.00, marketCap: 22000, peRatio: 60.5 },
  { name: 'Hindustan Copper', symbol: 'HINDCOPPER', currentPrice: 130.00, open: 129, high: 132, low: 128, close: 130, volume: 2000000, dayHigh: 135.00, dayLow: 125.00, marketCap: 12000, peRatio: 45.2 },
  { name: 'CDSL', symbol: 'CDSL', currentPrice: 2000.00, open: 1995, high: 2010, low: 1990, close: 2000, volume: 300000, dayHigh: 2020.00, dayLow: 1980.00, marketCap: 21000, peRatio: 50.1 },
  { name: 'Poonawalla Fincorp', symbol: 'POONAWALLA', currentPrice: 450.00, open: 448, high: 455, low: 445, close: 450, volume: 500000, dayHigh: 460.00, dayLow: 440.00, marketCap: 35000, peRatio: 30.8 },
  { name: 'Delhivery', symbol: 'DELHIVERY', currentPrice: 420.00, open: 418, high: 425, low: 415, close: 420, volume: 700000, dayHigh: 430.00, dayLow: 410.00, marketCap: 30000, peRatio: 75.0 },
  { name: 'Suzlon Energy', symbol: 'SUZLON', currentPrice: 45.00, open: 44.50, high: 45.50, low: 44.00, close: 45.00, volume: 15000000, dayHigh: 46.00, dayLow: 43.50, marketCap: 60000, peRatio: 120.1 },
  { name: 'Marico', symbol: 'MARICO', currentPrice: 600.00, open: 598, high: 605, low: 595, close: 600, volume: 400000, dayHigh: 610.00, dayLow: 590.00, marketCap: 75000, peRatio: 55.3 },
  { name: 'Indus Towers', symbol: 'INDUSTOWER', currentPrice: 350.00, open: 348, high: 355, low: 345, close: 350, volume: 900000, dayHigh: 360.00, dayLow: 340.00, marketCap: 90000, peRatio: 28.9 },
  { name: 'Gillette India', symbol: 'GILLETTE', currentPrice: 6500.00, open: 6480, high: 6550, low: 6450, close: 6500, volume: 10000, dayHigh: 6600.00, dayLow: 6400.00, marketCap: 25000, peRatio: 70.1 },
  { name: 'Tata Elxsi', symbol: 'TATAELXSI', currentPrice: 7500.00, open: 7450, high: 7550, low: 7400, close: 7500, volume: 50000, dayHigh: 7600.00, dayLow: 7350.00, marketCap: 45000, peRatio: 80.2 },
];

export const DEFAULT_USER_ID = uuidv4();

export const DEFAULT_USER: User = {
  id: DEFAULT_USER_ID,
  username: 'LoyolaUser',
  role: 'user', // Default role is 'user'
  balance: 1000000.00, // Starting virtual balance
  profile: {
    teamName: 'Default Team',
    teammate1: 'Player One',
    teammate2: 'Player Two',
    collegeName: 'Loyola College',
    department: 'Commerce',
  },
};

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Market / NSE Stocks', path: '/market' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Realised P&L', path: '/realised-pnl' }, // New navigation link
  { name: 'Trade', path: '/trade/ASTERDM' }, // Default to ASTERDM for trade page
  { name: 'Dashboard', path: '/admin', admin: true },
  { name: 'Profile', path: '/profile' },
];

// Default application settings
export const DEFAULT_APP_SETTINGS: AppSettings = {
  appName: 'DENARIUS 2025',
  // REPLACED with a short, valid, minimal Base64 string to resolve SyntaxError
  logoUrl: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==', 
  heroTitle: 'Denarius 2025',
  heroDescription: 'organised by Loyola Commerce Forum',
  ctaButtonText: 'Start Trading',
  aboutSectionTitle: 'How Stock Market Simulation works?',
  aboutSectionContent: 'It is a dynamic on-spot stock trading simulation designed to test participants decision-making abilities and reaction speed under pressure. Competitors will trade in a fast-paced environment. The team with the highest profits takes home the trophy.',
  contactEmail: '',
  facebookUrl: '',
  twitterUrl: '',
  linkedinUrl: '',
  primaryColorClass: 'bg-gray-900', // Uses overridden Rich Gray
  accentColorClass: 'text-amber-400', // Uses overridden Metallic Gold
  fontFamilyClass: 'font-inter',
  portfolioRefreshKey: 0, 
  isSimulationRunning: false, // Simulation OFF by default on website load
  currentSimulationDate: SIMULATION_START_DATE.toISOString(), // Initialize with simulation start date
};

// Colors for Candlestick Chart (and general P&L indication)
export const CANDLE_BULL_COLOR = '#16C784'; // Green
export const CANDLE_BEAR_COLOR = '#EA3943'; // Red
export const METALLIC_GOLD_HEX = '#D4AF37';
export const RICH_GRAY_BACKGROUND = '#1F2022';
export const CARD_BACKGROUND = '#2A2B2D';
