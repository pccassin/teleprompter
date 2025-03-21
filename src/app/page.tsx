'use client';

import { useState } from 'react';
import TextInput from '@/components/TextInput';
import Teleprompter from '@/components/Teleprompter';

export default function Home() {
  const [text, setText] = useState('');

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-display font-bold mb-4">
          Welcome to Teleprompter
        </h2>
        <p className="text-lg text-gray-300">
          A modern, web-based teleprompter for professional presentations
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-800 rounded-lg p-6">
          <TextInput value={text} onChange={setText} />
        </div>
        <div className="bg-gray-800 rounded-lg p-6">
          <Teleprompter text={text} />
        </div>
      </div>
    </main>
  );
}
