import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import ServiceCategories from './components/ServiceCategories'
import TechnicianList from './components/TechnicianList'
import TechnicianProfile from './components/TechnicianProfile'
import Footer from './components/Footer'

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <HowItWorks />
              <ServiceCategories 
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
              <TechnicianList selectedCategory={selectedCategory} />
            </>
          } />
          <Route path="/technician/:id" element={<TechnicianProfile />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
