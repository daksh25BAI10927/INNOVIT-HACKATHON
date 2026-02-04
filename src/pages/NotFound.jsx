import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-center">
      <h1 className="text-6xl font-bold text-earth">404</h1>
      <p className="text-lg text-gray-600 mt-4">This page is not yet part of our heritage collection.</p>
      <Link to="/" className="mt-6 inline-block bg-gold text-white px-6 py-2 rounded">Back Home</Link>
    </div>
  )
}
