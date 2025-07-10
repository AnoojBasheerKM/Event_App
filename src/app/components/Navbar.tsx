'use client';

import { useState } from 'react';
import { Menu, X, MapPin, User, Calendar, LogOut, Search } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-white text-xl font-bold hover:text-indigo-300 transition-colors">
                EventHub
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search for a location"
                  className="pl-10 pr-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-64 transition-all duration-200"
                />
              </div>
              
              <div className="flex items-baseline space-x-8">
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Location
                </a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  About Us
                </a>
                <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleSidebar}
                className="text-gray-300 hover:text-white p-2 rounded-md transition-colors"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>

            {/* Desktop menu button */}
            <div className="hidden md:block">
              <button
                onClick={toggleSidebar}
                className="text-gray-300 hover:text-white p-2 rounded-md transition-colors"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={toggleSidebar}
          />
          
          {/* Sidebar Panel */}
          <div className="absolute right-0 top-0 h-full w-80 bg-zinc-900/95 backdrop-blur-md border-l border-zinc-800 transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-zinc-800">
                <h2 className="text-white text-lg font-semibold">Menu</h2>
                <button
                  onClick={toggleSidebar}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex-1 px-6 py-4">
                <div className="space-y-4">
                  <a 
                    href="#" 
                    className="flex items-center space-x-3 text-gray-300 hover:text-white p-3 rounded-lg hover:bg-zinc-800/50 transition-colors"
                  >
                    <Calendar className="h-5 w-5" />
                    <span>Your Bookings</span>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center space-x-3 text-gray-300 hover:text-white p-3 rounded-lg hover:bg-zinc-800/50 transition-colors"
                  >
                    <User className="h-5 w-5" />
                    <span>Your Account</span>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center space-x-3 text-gray-300 hover:text-white p-3 rounded-lg hover:bg-zinc-800/50 transition-colors"
                  >
                    <MapPin className="h-5 w-5" />
                    <span>Saved Locations</span>
                  </a>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-zinc-800">
                <button className="flex items-center space-x-3 text-gray-400 hover:text-white w-full p-3 rounded-lg hover:bg-zinc-800/50 transition-colors">
                  <LogOut className="h-5 w-5" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 