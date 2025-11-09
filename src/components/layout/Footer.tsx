import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t mt-16"
      style={{ borderColor: 'var(--color-border)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {navLinks.map((link, index) => (
              <React.Fragment key={link.href}>
                <Link
                  href={link.href}
                  className="font-medium transition-colors duration-200 hover:text-[var(--color-accent)]"
                  style={{
                    color: 'var(--color-secondary)',
                    transition: 'var(--transition-fast)',
                  }}
                >
                  {link.label}
                </Link>
                {index < navLinks.length - 1 && (
                  <span
                    className="hidden md:inline"
                    style={{ color: 'var(--color-border)' }}
                  >
                    |
                  </span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Contact Email */}
          <div className="text-center md:text-right">
            <a
              href="mailto:chunkiet@jiuve.com"
              className="font-medium transition-colors duration-200 hover:text-[var(--color-accent)]"
              style={{
                color: 'var(--color-secondary)',
                transition: 'var(--transition-fast)',
              }}
            >
              chunkiet@jiuve.com
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t text-center" style={{ borderColor: 'var(--color-border)' }}>
          <p className="text-sm" style={{ color: 'var(--color-secondary)' }}>
            © {currentYear} Jiuve. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
