// src/app/page.tsx

'use client';

import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
        Welcome to TechZone
      </h1>
      <p className="text-lg text-blue-600 max-w-xl mb-8">
        Discover our handpicked selection of high-quality tech accessories including keyboards,
        headphones, smartwatches, and more.
      </p>

      <button
        onClick={() => router.push('/products')}
        className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 cursor-pointer hover:scale-105 transition duration-300 text-lg font-medium"
      >
        Explore Products
      </button>
    </div>
  );
}
