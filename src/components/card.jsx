'use client';

import Link from 'next/link';

export default function Card({ product }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 transition-transform hover:scale-105 hover:shadow-lg">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600 mb-2">{product.price}</p>
      <Link
        href={`/products/${product.id}`}
        className=" inline-block mt-auto text-sm text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        View Details
      </Link>
    </div>
  );
}
