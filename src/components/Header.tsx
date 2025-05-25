"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
              LR
            </div>
            <h1 className="text-xl font-bold text-gray-800">Land Records</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link
              href="/search"
              className="text-gray-600 hover:text-red-600 transition-colors"
            >
              Search
            </Link>
            <Link
              href="/records"
              className="text-gray-600 hover:text-red-600 transition-colors"
            >
              All Records
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-red-600 transition-colors"
            >
              About
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-red-600 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            mobileMenuOpen ? "max-h-96 mt-4" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col space-y-3 pb-4">
            <Link
              href="/search"
              className="text-gray-600 hover:text-red-600 transition-colors px-2 py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              Search Records
            </Link>
            <Link
              href="/records"
              className="text-gray-600 hover:text-red-600 transition-colors px-2 py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              All Records
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-red-600 transition-colors px-2 py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
