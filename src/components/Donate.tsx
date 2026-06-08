'use client';

import { useEffect, useRef, useState } from 'react';
import { useAppStore } from '@/lib/store';

const presetAmounts = [250, 500, 1000, 2500, 5000];

const treeEquivalents: Record<number, string> = {
  250: '1 Tree planted in your name',
  500: '2 Trees + Certificate of Green Impact',
  1000: '5 Trees + Named grove dedication',
  2500: '12 Trees + Community garden sponsorship',
  5000: '25 Trees + Forest patch sponsorship',
};

export default function Donate() {
  const sectionRef = useRef<HTMLElement>(null);
  const { donationAmount, setDonationAmount } = useAppStore();
  const [customAmount, setCustomAmount] = useState('');
  const [isCustom, setIsCustom] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handlePreset = (amount: number) => {
    setDonationAmount(amount);
    setIsCustom(false);
    setCustomAmount('');
  };

  const handleCustom = (val: string) => {
    const num = parseInt(val);
    setCustomAmount(val);
    setIsCustom(true);
    if (!isNaN(num) && num > 0) setDonationAmount(num);
  };

  const currentEquivalent =
    treeEquivalents[donationAmount] ||
    `~${Math.floor(donationAmount / 250)} Trees planted in our reforestation projects`;

  const handleDonate = () => {
    const subject = encodeURIComponent(`Donation pledge: Rs ${donationAmount.toLocaleString()}`);
    const body = encodeURIComponent(
      `Hello Green Bharat Foundation,\n\nI would like to donate Rs ${donationAmount.toLocaleString()}.\n\nImpact selected: ${currentEquivalent}\n\nPlease share the next steps for completing this contribution.`
    );

    window.location.href = `mailto:donate@greenbharat.org?subject=${subject}&body=${body}`;
  };

  return (
    <section ref={sectionRef} id="donate" className="section relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-saffron/5 blur-[150px]" />

      <div className="section-container relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-sm font-semibold text-saffron tracking-[0.2em] uppercase mb-4">
            Support the Cause
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-ivory mb-6">
            Plant a <span className="text-gradient-saffron">Tree Today</span>
          </h2>
          <p className="text-ivory/50 text-lg max-w-2xl mx-auto">
            Every contribution directly funds tree planting, habitat restoration, and community empowerment.
          </p>
        </div>

        <div className="max-w-2xl mx-auto reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="glass-strong rounded-3xl p-8 md:p-12">
            {/* Amount selector */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-ivory/60 mb-4">
                Choose your impact
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 mb-4">
                {presetAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handlePreset(amount)}
                    className={`py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                      donationAmount === amount && !isCustom
                        ? 'bg-gradient-to-br from-saffron to-saffron-dark text-white shadow-lg shadow-saffron/20'
                        : 'bg-ivory/5 text-ivory/60 hover:bg-ivory/10 hover:text-ivory border border-ivory/10'
                    }`}
                    id={`donate-amount-${amount}`}
                    suppressHydrationWarning
                  >
                    ₹{amount.toLocaleString()}
                  </button>
                ))}
              </div>

              {/* Custom */}
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-ivory/40 font-medium">₹</span>
                <input
                  type="number"
                  placeholder="Enter custom amount"
                  value={customAmount}
                  onChange={(e) => handleCustom(e.target.value)}
                  className="w-full py-3.5 pl-8 pr-4 rounded-xl bg-ivory/5 border border-ivory/10 text-ivory placeholder:text-ivory/25 focus:outline-none focus:border-gold/50 focus:bg-ivory/8 transition-all duration-300"
                  id="donate-custom-input"
                  suppressHydrationWarning
                />
              </div>
            </div>

            {/* Impact preview */}
            <div className="rounded-2xl bg-forest/20 border border-forest-light/10 p-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-forest to-forest-light flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4A843" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22V8" />
                    <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
                    <path d="M12 2a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-gold mb-1">Your Impact</div>
                  <div className="text-ivory/70 text-sm leading-relaxed">
                    {currentEquivalent}
                  </div>
                </div>
              </div>
            </div>

            {/* Donate button */}
            <button
              type="button"
              onClick={handleDonate}
              className="w-full btn-gold !py-4 !text-lg justify-center cursor-pointer"
              id="donate-submit-btn"
            >
              <span className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
                Donate ₹{donationAmount.toLocaleString()}
              </span>
            </button>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 mt-6 text-xs text-ivory/30">
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                Secure Payment
              </span>
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                80G Tax Benefits
              </span>
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                100% Transparent
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
