"use client";

import Link from "next/link";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="site-footer-container">
      <div className="site-footer-noise"></div>

      <div className="site-footer-content">
        {/* Compact Grid */}
        <div className="site-footer-grid">
          {/* Brand Section */}
          <div className="site-footer-brand">
            <h2 className="brand-title">YOUR BRAND</h2>
            <p className="brand-tagline">Building digital experiences.</p>
          </div>

          {/* Navigation - Compact */}
          <div className="site-footer-nav">
            <div className="nav-column">
              <h3 className="nav-title">PRODUCT</h3>
              <ul className="nav-list">
                <li>
                  <Link href="/features">Features</Link>
                </li>
                <li>
                  <Link href="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link href="/docs">Docs</Link>
                </li>
              </ul>
            </div>

            <div className="nav-column">
              <h3 className="nav-title">COMPANY</h3>
              <ul className="nav-list">
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/careers">Careers</Link>
                </li>
              </ul>
            </div>

            <div className="nav-column">
              <h3 className="nav-title">LEGAL</h3>
              <ul className="nav-list">
                <li>
                  <Link href="/privacy">Privacy</Link>
                </li>
                <li>
                  <Link href="/terms">Terms</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="site-footer-social">
            <h3 className="nav-title">CONNECT</h3>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Twitter">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="GitHub">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"></path>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Dribbble">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.5m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="site-footer-bottom">
          <p>© 2024 Your Brand. All rights reserved.</p>
          <div className="site-footer-status">
            <span className="status-indicator"></span>
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
