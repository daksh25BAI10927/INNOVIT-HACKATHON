# 🎬 Development Examples

This file shows common patterns used throughout the project.

## 1. Creating a New Page

**File: `src/pages/NewPage.jsx`**
```jsx
import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function NewPage(){
  const { t } = useTranslation()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto px-4 py-8"
    >
      <h1 className="text-3xl font-bold">{t('home')}</h1>
      <p className="mt-4 text-gray-700">Your content here</p>
    </motion.div>
  )
}
```

Then add route in `src/App.jsx`:
```jsx
const NewPage = lazy(() => import('./pages/NewPage'))
<Route path="/newpage" element={<NewPage/>} />
```

---

## 2. Using Zustand for State

**Global State in `src/store/useStore.js`:**
```javascript
import create from 'zustand'

export const useStore = create(set => ({
  myVar: false,
  setMyVar: (val) => set({ myVar: val })
}))
```

**Use in a component:**
```jsx
import { useStore } from '../store/useStore'

export default function MyComponent(){
  const myVar = useStore(state => state.myVar)
  const setMyVar = useStore(state => state.setMyVar)

  return (
    <button onClick={() => setMyVar(!myVar)}>
      {myVar ? 'On' : 'Off'}
    </button>
  )
}
```

---

## 3. React Hook Form with Validation

```jsx
import { useForm } from 'react-hook-form'

export default function ContactForm(){
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log('Submitted:', data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input
        {...register('email', {
          required: 'Email is required',
          pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email' }
        })}
        placeholder="Your email"
        className="border px-3 py-2 w-full rounded"
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <button type="submit" className="bg-earth text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  )
}
```

---

## 4. Framer Motion Animations

```jsx
import { motion } from 'framer-motion'

export default function AnimatedComponent(){
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white p-6 rounded shadow"
    >
      Hover and click me!
    </motion.div>
  )
}
```

---

## 5. React Leaflet Map

```jsx
import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export default function MapPage(){
  const center = [22.0, 80.0]
  const sites = [
    { id: 1, lat: 27.1751, lng: 78.0421, name: 'Taj Mahal' }
  ]

  return (
    <MapContainer center={center} zoom={5} style={{ height: '100vh', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {sites.map(site => (
        <Marker key={site.id} position={[site.lat, site.lng]}>
          <Popup>{site.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
```

---

## 6. Internationalization (i18next)

**Define translations in `src/i18n.js`:**
```javascript
const resources = {
  en: { translation: { hello: 'Hello', goodbye: 'Goodbye' } },
  hi: { translation: { hello: 'नमस्ते', goodbye: 'अलविदा' } }
}
```

**Use in component:**
```jsx
import { useTranslation } from 'react-i18next'

export default function Greeting(){
  const { t, i18n } = useTranslation()

  return (
    <div>
      <p>{t('hello')}</p>
      <select onChange={(e) => i18n.changeLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="hi">हिंदी</option>
      </select>
    </div>
  )
}
```

---

## 7. Dark Mode Toggle

Stored in Zustand and persisted to localStorage:
```jsx
import { useStore } from '../store/useStore'

export default function DarkModeToggle(){
  const dark = useStore(state => state.dark)
  const setDark = useStore(state => state.setDark)

  return (
    <button onClick={() => setDark(!dark)}>
      {dark ? '🌙 Dark' : '☀️ Light'}
    </button>
  )
}
```

---

## 8. Search & Filter Example

```jsx
import { useForm } from 'react-hook-form'

const items = [
  { id: 1, name: 'Taj Mahal', city: 'Agra' },
  { id: 2, name: 'Qutub Minar', city: 'Delhi' }
]

export default function SearchPage(){
  const { register, watch } = useForm({ defaultValues: { query: '' } })
  const query = watch('query') || ''

  const filtered = items.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div>
      <input
        {...register('query')}
        placeholder="Search..."
        className="border px-3 py-2 w-full rounded"
      />
      <div className="mt-4">
        {filtered.map(item => (
          <div key={item.id} className="p-3 border rounded mb-2">
            <h3 className="font-bold">{item.name}</h3>
            <p className="text-sm">{item.city}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
```

---

## 9. Responsive Grid Layout

```jsx
export default function Gallery(){
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map(item => (
        <div key={item.id} className="bg-white rounded shadow overflow-hidden hover:shadow-lg">
          <img src={item.img} alt={item.name} className="h-48 w-full object-cover" />
          <div className="p-3">
            <h3 className="font-bold">{item.name}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}
```

**Responsive breakpoints:**
- Mobile (default): 1 column
- Tablet (`md:`): 3 columns
- Desktop (`lg:`): 4 columns

---

## 10. Modal Component

```jsx
import React from 'react'

export default function Modal({ children, onClose }){
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>
      <div className="bg-white rounded shadow max-w-lg w-full p-6 z-10">
        <button className="ml-auto block mb-2" onClick={onClose}>✕</button>
        {children}
      </div>
    </div>
  )
}
```

---

## 11. Tailwind Color Utilities

```jsx
<div className="text-earth">Earth brown text</div>
<div className="bg-sand">Sand background</div>
<button className="bg-gold text-white">Gold button</button>
<div className="hover:text-earth">Hover effect</div>
<div className="dark:bg-gray-800">Dark mode</div>
```

---

## 12. Environment Variables

Create `.env.local`:
```
VITE_API_URL=https://api.example.com
VITE_MAP_TOKEN=your-token-here
```

Use in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

---

## Tips & Tricks

✅ Always use `lazy(() => import('./Page'))` for pages
✅ Use `motion` from Framer Motion for smooth animations
✅ Use Tailwind `md:`, `lg:` for responsive design
✅ Use `useStore` from Zustand for cross-component state
✅ Use `useTranslation()` for multi-language support
✅ Use `useForm` from React Hook Form for validation
✅ Wrap forms with error handling

---

Feel free to copy-paste these patterns into your pages!
