"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import './header.css'

export default function Header() {
  // For mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Product", href: "/product" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="header">

    </header>
  );
}
