'use client';

import React from 'react';
import { products } from '@/constants/products';
import Card from '@/components/card';
import Layout from '@/components/layout';

export default function ProductPage({ params }) {
  const currentProduct = products.find((p) => p.id === params.id);

  if (!currentProduct) {
    return (
      <Layout>
        <p className="text-center text-xl mt-10">Product not found.</p>
      </Layout>
    );
  }

 
  const currentIndex = products.findIndex(p => p.id === params.id);
  const moreItems = Array.from({ length: 4 }, (_, i) => products[(currentIndex + i + 1) % products.length]);

  return (
    <Layout>
      <div className="max-w-2xl mx-auto mb-12">
        <img
          src={currentProduct.image}
          alt={currentProduct.name}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold mb-2">{currentProduct.name}</h1>
        <p className="text-lg text-gray-700 mb-4">{currentProduct.price}</p>
        <p className="text-gray-600">{currentProduct.details}</p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-6 text-blue-800">More items you might like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {moreItems.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
