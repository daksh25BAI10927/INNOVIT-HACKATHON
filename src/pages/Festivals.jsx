import React from 'react'
import { useForm } from 'react-hook-form'

const festivals = [
  { id:1, name:'Diwali', date:'2026-11-01' },
  { id:2, name:'Holi', date:'2026-03-25' },
  { id:3, name:'Navratri', date:'2026-10-15' },
  { id:4, name:'Makar Sankranti', date:'2026-01-14' },
  { id:5, name:'Pongal', date:'2026-01-15' },
  { id:6, name:'Basant Panchami', date:'2026-02-14' },
  { id:7, name:'Raksha Bandhan', date:'2026-08-19' },
  { id:8, name:'Janmashtami', date:'2026-08-26' },
  { id:9, name:'Ganesh Chaturthi', date:'2026-09-07' },
  { id:10, name:'Onam', date:'2026-09-15' },
  { id:11, name:'Dussehra', date:'2026-10-12' },
  { id:12, name:'Chhath Puja', date:'2026-11-07' }
]

function Countdown({ date }){
  const diff = Math.max(new Date(date) - new Date(), 0)
  const days = Math.floor(diff / (1000*60*60*24))
  return <div className="text-sm text-gold font-medium">{days} days remaining</div>
}

export default function Festivals(){
  const { register, watch } = useForm({ defaultValues:{ search:'' } })
  const query = watch('search') || ''
  const list = festivals.filter(f=> f.name.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-white">Festivals & Traditions</h1>
      <div className="mt-4">
        <input {...register('search')} placeholder="Search festivals" className="border px-3 py-2 w-full md:w-1/2 rounded" />
      </div>
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        {list.map(f=> (
          <div key={f.id} className="bg-gray-800 rounded shadow p-4 text-white border border-gold/30 hover:shadow-lg transition">
            <h3 className="font-bold text-gold">{f.name}</h3>
            <p className="text-sm mt-2 text-gray-300">Date: {f.date}</p>
            <Countdown date={f.date} />
          </div>
        ))}
      </div>
    </div>
  )
}
