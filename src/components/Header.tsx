'use client';

import React from 'react';
import { FaVideo } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-primary to-secondary p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-center">
        <FaVideo className="text-3xl mr-2" />
        <h1 className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
          Teleprompter
        </h1>
      </div>
    </header>
  );
}
