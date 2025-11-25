"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import './header.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Product", href: "/product" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="header">
      <nav className="header-nav">
        <div className="header-container">
          {/* Logo */}
          <div className="header-logo">
            <Link href="/">
              <img src="./assets/BeBlock_Bangkok_Logo-02.png" alt="BeBlock Logo" className="logo-img" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-desktop">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="nav-link">
                {item.name}
              </Link>
            ))}
            <button className="btn-primary">Get Started</button>
          </div>

          {/* Mobile menu button */}
          <div className="nav-mobile-toggle">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="menu-button"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="nav-mobile">
            <div className="nav-mobile-items">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="nav-link-mobile"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button className="btn-primary-mobile">Get Started</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
