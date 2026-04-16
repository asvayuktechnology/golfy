"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Globe,
  Phone,
  Mail,
} from "lucide-react";
import { LuMenu } from "react-icons/lu";
import { BsX } from "react-icons/bs";

const languages = [
  { name: "English", code: "EN", flag: "/assets/img/home1/england-flag.png" },
  { name: "Dutch", code: "NL", flag: "/assets/img/home1/netherlands-flag.png" },
  { name: "Japanese", code: "JP", flag: "/assets/img/home1/japan-flag.png" },
  { name: "Korean", code: "KR", flag: "/assets/img/home1/korea-flag.png" },
  { name: "Chinese", code: "CN", flag: "/assets/img/home1/china-flag.png" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  return (
    <>
      {/* ================= Topbar ================= */}
      <div className="hidden lg:block bg-gray-100 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Logo + Search */}
            <div className="flex items-center gap-6">
              <Link href="/">
                <Image
                  src="/assets/img/header-logo.svg"
                  alt="Logo"
                  width={150}
                  height={50}
                  priority
                />
              </Link>

              {/* Search */}
              <form className="hidden xl:block">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Find Your Perfect Tour Package"
                    className="w-80 rounded-full border border-gray-300 py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Search
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  />
                </div>
              </form>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-6">
              <Link href="#" className="text-sm font-medium text-gray-600">
                Need Help?
              </Link>

              {/* Language Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setLanguageOpen(!languageOpen)}
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  <Globe size={16} />
                  EN
                  <ChevronDown size={14} />
                </button>

                {languageOpen && (
                  <ul className="absolute right-0 mt-2 w-40 rounded-lg bg-white shadow-lg border z-50">
                    {languages.map((lang) => (
                      <li key={lang.code}>
                        <button
                          onClick={() => setLanguageOpen(false)}
                          className="flex w-full items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          <Image
                            src={lang.flag}
                            alt={lang.name}
                            width={18}
                            height={18}
                          />
                          {lang.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Login Button */}
              <Link
                href="/login"
                className="rounded-full bg-black px-5 py-2 text-sm font-semibold text-white hover:bg-gray-800 transition"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ================= Header ================= */}
      <header className="sticky top-0 z-50 bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Mobile Logo */}
            <Link href="/" className="lg:hidden">
              <Image
                src="/assets/img/header-logo.svg"
                alt="Logo"
                width={120}
                height={40}
              />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/" className="font-medium  text-blue-900"> 
                Home
              </Link>
              <Link
                href="/destination"
                className="font-medium hover:text-primary"
              >
                Destination
              </Link>
              <Link
                href="/travel-package"
                className="font-medium hover:text-primary"
              >
                Travel Package
              </Link>
              <Link href="/visa" className="font-medium hover:text-primary">
                Visa
              </Link>
              <Link href="/about" className="font-medium hover:text-primary">
                About
              </Link>
              <Link href="/contact" className="font-medium hover:text-primary">
                Contact
              </Link>
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              {/* Contact */}
              <div className="hidden lg:flex items-center gap-2 text-sm">
                <Phone size={16} className="text-green-600" />
                <a
                  href="https://wa.me/91345533865"
                  className="font-medium hover:underline"
                >
                  +91 345 533 865
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden"
                aria-label="Open Menu"
              >
                <LuMenu size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* ================= Mobile Menu ================= */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black/50">
            <div className="absolute left-0 top-0 h-full w-72 bg-white p-5 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <Image
                  src="/assets/img/header-logo.svg"
                  alt="Logo"
                  width={120}
                  height={40}
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close Menu"
                >
                  <BsX size={24} />
                </button>
              </div>

              <nav className="flex flex-col gap-4">
                <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </Link>
                <Link
                  href="/destination"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Destination
                </Link>
                <Link
                  href="/travel-package"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Travel Package
                </Link>
                <Link href="/visa" onClick={() => setMobileMenuOpen(false)}>
                  Visa
                </Link>
                <Link href="/about" onClick={() => setMobileMenuOpen(false)}>
                  About
                </Link>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </Link>
              </nav>

              {/* Contact Info */}
              <div className="mt-8 border-t pt-4 text-sm space-y-3">
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <a href="https://wa.me/91345533865">
                    +91 345 533 865
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <a href="mailto:info@example.com">
                    info@example.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;