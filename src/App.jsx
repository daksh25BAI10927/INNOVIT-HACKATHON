import React, { lazy } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './styles/main.css'

const Home = lazy(() => import('./pages/Home'))
const Heritage = lazy(() => import('./pages/Heritage'))
const Festivals = lazy(() => import('./pages/Festivals'))
const ArtCrafts = lazy(() => import('./pages/ArtCrafts'))
const Cuisine = lazy(() => import('./pages/Cuisine'))
const Languages = lazy(() => import('./pages/Languages'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Explore = lazy(() => import('./pages/Explore'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App(){
  return (
    <div className="min-h-screen flex flex-col motif">
      <Helmet>
        <title>Heritage & Culture Portal</title>
      </Helmet>
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/heritage" element={<Heritage/>} />
          <Route path="/festivals" element={<Festivals/>} />
          <Route path="/arts" element={<ArtCrafts/>} />
          <Route path="/cuisine" element={<Cuisine/>} />
          <Route path="/languages" element={<Languages/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/explore" element={<Explore/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
