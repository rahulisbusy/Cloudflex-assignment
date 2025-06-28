"use client";
import React from 'react'
import { products } from '@/constants/products'
import Card from '@/components/card'
import Layout from '@/components/layout'
import { useState } from 'react'


export default function ProductsPage() {
    const [item, setItem] = useState("");
  return (
    <Layout>
      <section>
          <div className="max-w-md mx-auto mb-8">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setItem(e.target.value)}
      />
    </div>
        </section> 
      
      <section className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-2">Discover Our Top Tech Picks</h1>
        <p className="text-gray-600 text-lg">
          Curated gadgets and accessories to power up your productivity and lifestyle.
        </p>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {
            products.filter((product) => {
                if (!item) return true; 
                return product.name.toLowerCase().includes(item) === item.toLowerCase().includes(item)                  ;
            }
            ).map((product) => (
                <Card key={product.id} product={product} />
            ))
        
        }
       
      </div>
    </Layout>
  )
}
