import { create } from 'zustand';

interface AppState {
  scrollProgress: number;
  activeSection: string;
  donationAmount: number;
  selectedState: string | null;
  isMobileMenuOpen: boolean;
  isLoaded: boolean;
  setScrollProgress: (progress: number) => void;
  setActiveSection: (section: string) => void;
  setDonationAmount: (amount: number) => void;
  setSelectedState: (state: string | null) => void;
  setMobileMenuOpen: (open: boolean) => void;
  setLoaded: (loaded: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  scrollProgress: 0,
  activeSection: 'hero',
  donationAmount: 500,
  selectedState: null,
  isMobileMenuOpen: false,
  isLoaded: false,
  setScrollProgress: (progress) => set({ scrollProgress: progress }),
  setActiveSection: (section) => set({ activeSection: section }),
  setDonationAmount: (amount) => set({ donationAmount: amount }),
  setSelectedState: (state) => set({ selectedState: state }),
  setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
  setLoaded: (loaded) => set({ isLoaded: loaded }),
}));
