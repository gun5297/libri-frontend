'use client';

import { useStore } from '@/store/useStore';

export default function Home() {
  const { count, increase, decrease } = useStore();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Next.js + Zustand + Tanstack Query</h1>
        <p className="text-xl font-semibold">Count: {count}</p>
        <div className="mt-4 flex space-x-4">
          <button onClick={increase} className="px-4 py-2 bg-blue-500 text-white rounded">
            증가
          </button>
          <button onClick={decrease} className="px-4 py-2 bg-red-500 text-white rounded">
            감소
          </button>
        </div>
      </div>
    </main>
  );
}
