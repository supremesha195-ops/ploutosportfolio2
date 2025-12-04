
export interface User {
  id: string;
  username: string;
  role: 'user' | 'admin';
  balance: number;
  profile: UserProfile;
}

export interface UserProfile {
  teamName?: string;
  teammate1?: string;
  teammate2?: string;
  collegeName?: string;
  department?: string;
}

export interface Stock {
  id: string;
  name: string;
  symbol: string;
  // Live price fields for the current simulation tick
  currentPrice: number; // Maps to `close` for OHLC
  openPriceForDay: number; // The 'open' for the current simulated day (e.g., 2025-01-01)
  dayHigh: number;
  dayLow: number;
  changePercent: number; // % change relative to openPriceForDay

  // OHLCV fields (for detailed historical data and current candle)
  open: number;
  high: number;
  low: number;
  close: number; // Same as currentPrice
  volume: number;

  marketCap?: number;
  peRatio?: number;
}

export enum TradeType {
  BUY = 'BUY',
  SELL = 'SELL',
}

export interface Trade {
  id: string;
  userId: string;
  stockSymbol: string;
  stockName: string;
  type: TradeType;
  quantity: number;
  price: number;
  timestamp: string;
  status: 'completed' | 'pending' | 'cancelled';
}

export interface Holding {
  stockSymbol: string;
  stockName: string;
  quantity: number;
  averagePrice: number;
  currentPrice: number;
}

// For charting, represents an OHLCV candle at a specific timestamp
export interface OHLCVDataPoint {
  time: string; // ISO string, e.g., '2025-01-01T09:15:00.000Z'
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface RealisedPnLTrade {
  id: string;
  userId: string;
  stockSymbol: string;
  stockName: string;
  buyPrice: number;
  sellPrice: number;
  quantity: number;
  realisedProfit: number;
  realisedProfitPercent: number;
  timestamp: string; // When the sell occurred
}

export interface AppSettings {
  appName: string;
  logoUrl: string;
  heroTitle: string;
  heroDescription: string;
  ctaButtonText: string;
  aboutSectionTitle: string;
  aboutSectionContent: string;
  contactEmail: string;
  facebookUrl: string;
  twitterUrl: string;
  linkedinUrl: string;
  primaryColorClass: string; // Tailwind class e.g., 'bg-indigo-600'
  accentColorClass: string; // Tailwind class e.g., 'text-emerald-400'
  fontFamilyClass: string; // Tailwind class e.g., 'font-inter'
  portfolioRefreshKey: number; // New field to trigger portfolio refresh
  isSimulationRunning: boolean; // New field to control simulation state
  currentSimulationDate: string; // The current date/time of the simulation
}

export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
}

export interface SettingsContextType {
  settings: AppSettings;
  updateSettings: (newSettings: Partial<AppSettings>) => void;
  getPrimaryColorClass: () => string;
  getAccentColorClass: () => string;
  triggerPortfolioRefresh: () => void; // New function to trigger portfolio refresh
  toggleSimulationRunning: () => void; // New function to toggle simulation running state
  updateSimulationDate: (date: string) => void; // New function to update simulation date
}