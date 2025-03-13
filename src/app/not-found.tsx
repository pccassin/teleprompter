'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-display font-bold mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Redirecting to home page...
        </p>
      </div>
    </div>
  );
}
