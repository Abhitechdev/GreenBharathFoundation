import { create } from 'zustand';

interface AppState {
  donationAmount: number;
  isMobileMenuOpen: boolean;
  setDonationAmount: (amount: number) => void;
  setMobileMenuOpen: (open: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  donationAmount: 500,
  isMobileMenuOpen: false,
  setDonationAmount: (amount) => set({ donationAmount: amount }),
  setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
}));
