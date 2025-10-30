import React from "react";

export default function Footer() {
  return (
    <div className='bg-slate-300 mt-8'>
      <footer>
        <div className='max-w-6xl mx-auto p-4 flex flex-col md:flex-row justify-between items-center gap-2'>
          <div className='text-sm text-gray-700 text-center md:text-left w-full md:w-auto'>
            © {new Date().getFullYear()} Backpacking Gear Tracker
          </div>
          <div className='text-sm text-gray-700 text-center w-full md:w-auto'>
            Built for backpackers — keep your kit light
          </div>
          <div className='text-sm text-gray-700 text-center md:text-right w-full md:w-auto'>
            A website by Bourgeois Website Development
          </div>
        </div>
      </footer>
    </div>
  );
}
