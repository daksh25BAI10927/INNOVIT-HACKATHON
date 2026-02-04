# 🧩 Component Template Library

Copy-paste ready component templates for quick development!

---

## 1. Basic Page Template

Use this for all new pages in `src/pages/`:

```jsx
import React from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

export default function MyPage(){
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>My Page Title</title>
        <meta name="description" content="Page description for SEO" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto px-4 py-8"
      >
        <h1 className="text-3xl font-bold mb-4">{t('myKey')}</h1>
        <p className="text-gray-700">Your content here</p>
      </motion.div>
    </>
  )
}
```

---

## 2. Card Component

Reusable card for lists:

```jsx
import React from 'react'
import { motion } from 'framer-motion'

export default function Card({ title, description, image, onClick }){
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="bg-white rounded shadow overflow-hidden cursor-pointer hover:shadow-lg transition"
    >
      {image && <img src={image} alt={title} className="h-48 w-full object-cover" />}
      <div className="p-4">
        <h3 className="font-bold text-lg">{title}</h3>
        {description && <p className="text-sm text-gray-600 mt-2">{description}</p>}
      </div>
    </motion.div>
  )
}
```

Usage:
```jsx
<div className="grid md:grid-cols-3 gap-4">
  {items.map(item => (
    <Card key={item.id} title={item.name} description={item.desc} />
  ))}
</div>
```

---

## 3. Search/Filter Component

```jsx
import React from 'react'
import { useForm } from 'react-hook-form'

export default function SearchFilter({ items, onFilter }){
  const { register, watch } = useForm({ defaultValues: { query: '' } })
  const query = watch('query') || ''

  const filtered = items.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  )

  React.useEffect(() => {
    onFilter(filtered)
  }, [filtered, onFilter])

  return (
    <div className="mb-6">
      <input
        {...register('query')}
        placeholder="Search..."
        className="border px-4 py-2 w-full md:w-1/2 rounded focus:outline-none focus:ring-2 focus:ring-gold"
      />
    </div>
  )
}
```

---

## 4. Modal with Backdrop

Reusable modal for any content:

```jsx
import React from 'react'
import { motion } from 'framer-motion'

export default function Modal({ isOpen, onClose, title, children }){
  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded shadow max-w-lg w-full p-6 z-10 relative"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✕</button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto">
          {children}
        </div>
      </motion.div>
    </motion.div>
  )
}
```

Usage:
```jsx
const [isOpen, setIsOpen] = useState(false)

return (
  <>
    <button onClick={() => setIsOpen(true)}>Open Modal</button>
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="My Modal">
      <p>Your content here</p>
    </Modal>
  </>
)
```

---

## 5. Form with Validation

```jsx
import React from 'react'
import { useForm } from 'react-hook-form'

export default function MyForm(){
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { name: '', email: '', message: '' }
  })

  const onSubmit = (data) => {
    console.log('Form data:', data)
    // Send to server
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md">
      <div>
        <label className="block mb-1 font-medium">Name</label>
        <input
          {...register('name', { required: 'Name is required' })}
          className="border px-3 py-2 w-full rounded"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' }
          })}
          className="border px-3 py-2 w-full rounded"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block mb-1 font-medium">Message</label>
        <textarea
          {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'Min 10 chars' } })}
          rows="5"
          className="border px-3 py-2 w-full rounded"
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
      </div>

      <button type="submit" className="bg-gold text-white px-6 py-2 rounded hover:bg-opacity-90">
        Submit
      </button>
    </form>
  )
}
```

---

## 6. Gallery with Lightbox

```jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Gallery({ images }){
  const [selected, setSelected] = useState(null)

  return (
    <>
      <div className="grid md:grid-cols-3 gap-4">
        {images.map(img => (
          <motion.img
            key={img.id}
            src={img.src}
            alt={img.alt}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelected(img)}
            className="h-48 w-full object-cover rounded cursor-pointer"
          />
        ))}
      </div>

      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
        >
          <motion.img
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            src={selected.src}
            alt={selected.alt}
            className="max-h-[80vh] w-auto rounded"
          />
        </motion.div>
      )}
    </>
  )
}
```

---

## 7. Animated Counter

Great for stats sections:

```jsx
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Counter({ end, duration = 2 }){
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = end / (duration * 60)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [end, duration])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-3xl font-bold text-gold"
    >
      {count.toLocaleString()}+
    </motion.div>
  )
}
```

Usage:
```jsx
<Counter end={50} duration={2} />
```

---

## 8. Accordion Component

```jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Accordion({ items }){
  const [active, setActive] = useState(null)

  return (
    <div className="space-y-2">
      {items.map((item, idx) => (
        <div key={idx} className="border rounded">
          <button
            onClick={() => setActive(active === idx ? null : idx)}
            className="w-full px-4 py-3 text-left font-semibold hover:bg-sand"
          >
            {item.title}
          </button>

          {active === idx && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="px-4 py-3 bg-sand"
            >
              {item.content}
            </motion.div>
          )}
        </div>
      ))}
    </div>
  )
}
```

---

## 9. Loader Component

```jsx
import React from 'react'
import { motion } from 'framer-motion'

export default function Loader(){
  return (
    <div className="flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity }}
        className="w-8 h-8 border-4 border-gold border-t-transparent rounded-full"
      ></motion.div>
    </div>
  )
}
```

---

## 10. Notification Toast

```jsx
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Toast({ message, type = 'info', duration = 3000 }){
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), duration)
    return () => clearTimeout(timer)
  }, [duration])

  if (!isVisible) return null

  const bgColor = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500'
  }[type] || 'bg-blue-500'

  return (
    <motion.div
      initial={{ x: 400, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 400, opacity: 0 }}
      className={`${bgColor} text-white px-4 py-3 rounded shadow fixed bottom-4 right-4`}
    >
      {message}
    </motion.div>
  )
}
```

---

## Quick Copy-Paste Tips

1. **Use these templates** for consistency
2. **Customize colors** with Tailwind classes (earth, sand, gold)
3. **Add Framer Motion** for smooth animations
4. **Use i18next** for translations
5. **Always add Helmet** for SEO meta tags

---

## Component Patterns

### Always Include:
```jsx
import React from 'react'                          // React
import { motion } from 'framer-motion'             // Animations
import { useTranslation } from 'react-i18next'     // i18n
import { Helmet } from 'react-helmet-async'        // SEO
```

### Always Structure:
```jsx
export default function MyComponent(){
  // 1. State hooks
  // 2. Effects
  // 3. Handlers
  // 4. JSX return
}
```

### Always Style:
```jsx
className="max-w-6xl mx-auto px-4 py-8"            // Container
className="grid md:grid-cols-3 gap-4"              // Responsive grid
className="bg-white rounded shadow"                // Card style
className="text-earth"                             // Theme color
className="hover:shadow-lg transition"             // Interaction
```

---

Happy coding! Copy these templates and build amazing pages! 🎨
