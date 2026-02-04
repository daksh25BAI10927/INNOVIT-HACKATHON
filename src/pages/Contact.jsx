import React from 'react'
import { useForm } from 'react-hook-form'

export default function Contact(){
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = (data) => {
    console.log('Form data:', data)
    alert('Thank you for reaching out!')
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 text-white">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-lg font-bold mb-4">Get in Touch</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block mb-1">Name</label>
              <input {...register('name', { required: 'Name required' })} className="border px-3 py-2 w-full rounded" />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <input {...register('email', { required: 'Email required' })} type="email" className="border px-3 py-2 w-full rounded" />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div>
              <label className="block mb-1">Message</label>
              <textarea {...register('message', { required: 'Message required' })} rows="5" className="border px-3 py-2 w-full rounded"></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>
            <button type="submit" className="bg-earth text-white px-4 py-2 rounded">Send</button>
          </form>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4">Location</h2>
          <div className="h-64 bg-gray-200 rounded">
            {/* Placeholder for map integration */}
            <p className="p-4 text-center mt-20">Map Integration Here</p>
          </div>
        </div>
      </div>
    </div>
  )
}
