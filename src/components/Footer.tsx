'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-ivory/5" id="footer">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-forest to-forest-light flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4A843" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22V8" />
                  <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
                  <path d="M12 2a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7Z" />
                </svg>
              </div>
              <div>
                <span className="text-lg font-bold font-[var(--font-outfit)] text-ivory">
                  Green <span className="text-gradient-saffron">Bharat</span>
                </span>
              </div>
            </div>
            <p className="text-sm text-ivory/40 leading-relaxed">
              Nurturing Bharat&apos;s green heritage through science-driven
              conservation, community empowerment, and ecological restoration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-ivory uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {['About Us', 'Our Programs', 'Impact Report', 'Volunteer', 'Careers'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-ivory/40 hover:text-gold transition-colors duration-200 cursor-pointer"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-sm font-semibold text-ivory uppercase tracking-wider mb-4">
              Programs
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                'Van Mahotsav Drive',
                'Wildlife Guardians',
                'Green Schools',
                'Clean Rivers',
                'Urban Forests',
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-ivory/40 hover:text-gold transition-colors duration-200 cursor-pointer"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-ivory uppercase tracking-wider mb-4">
              Stay Updated
            </h4>
            <p className="text-sm text-ivory/40 mb-4">
              Get monthly updates on our conservation efforts and impact stories.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 py-2.5 px-4 rounded-xl bg-ivory/5 border border-ivory/10 text-ivory text-sm placeholder:text-ivory/25 focus:outline-none focus:border-gold/30 transition-all duration-300"
                id="footer-email-input"
                suppressHydrationWarning
              />
              <button
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-saffron to-saffron-dark text-white text-sm font-semibold hover:shadow-lg hover:shadow-saffron/20 transition-all duration-300 cursor-pointer"
                id="footer-subscribe-btn"
                suppressHydrationWarning
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mandala-divider mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-ivory/25">
          <span>© {currentYear} Green Bharat Foundation. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ivory/50 transition-colors cursor-pointer">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-ivory/50 transition-colors cursor-pointer">
              Terms of Use
            </a>
            <a href="#" className="hover:text-ivory/50 transition-colors cursor-pointer">
              Financials
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
