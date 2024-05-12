'use client'
import { ThemeProvider } from 'next-themes';
import React from 'react';

export default function Providers({ children }) {
  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
      <div className='text-gray-900  dark:text-gray-200 dark:border-b-gray-700 min-h-screen select-none transition-colors duration-400'>
        {children}
      </div>
    </ThemeProvider>
  );
}
