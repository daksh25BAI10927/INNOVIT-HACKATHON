import React from 'react'
import { motion } from 'framer-motion'

export default function Explore(){
  const tours = [
    { id:1, name:'Virtual Tour - Taj Mahal', icon:'🏛️' },
    { id:2, name:'AR Preview - Hampi', icon:'📱' },
    { id:3, name:'3D Gallery - Khajuraho', icon:'🖼️' }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 text-white">Explore - Virtual Tours & AR</h1>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {tours.map(t=> (
          <motion.div key={t.id} whileHover={{ scale:1.05 }} className="bg-gray-800 rounded shadow p-6 text-center cursor-pointer text-white border border-gold/30 hover:shadow-lg transition">
            <div className="text-4xl mb-2">{t.icon}</div>
            <h3 className="font-bold text-white">{t.name}</h3>
            <button className="mt-3 bg-gold text-gray-800 px-4 py-2 rounded text-sm font-medium hover:bg-gold/90 transition">Launch</button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
