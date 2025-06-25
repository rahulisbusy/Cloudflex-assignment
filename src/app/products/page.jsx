import React from 'react'
import { products } from '@/constants/products'
import Card from '@/components/card'
import Layout from '@/components/layout'

export default function ProductsPage() {
  return (
    <Layout>
      <section className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-2">Discover Our Top Tech Picks</h1>
        <p className="text-gray-600 text-lg">
          Curated gadgets and accessories to power up your productivity and lifestyle.
        </p>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  )
}
