'use client';

import React from 'react';

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function TextInput({ value, onChange }: TextInputProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-display font-bold">Enter Your Text</h3>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-64 p-4 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary resize-none"
        placeholder="Enter your text here..."
      />
    </div>
  );
}
