import React from 'react'

export default function Modal({ children, onClose }){
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>
      <div className="bg-white rounded shadow max-w-lg w-full p-6 z-10"> 
        <button className="ml-auto block mb-2" onClick={onClose}>Close</button>
        {children}
      </div>
    </div>
  )
}
