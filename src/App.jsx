import React from 'react'
import Homepage from './pages/Homepage'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import SearchPage from './pages/SearchPage'
import RecipeDetails from './pages/RecipeDetails'
import ConversionPage from './pages/ConversionPage'
import FAQPage from './pages/FAQPage'
import CustomPage from './pages/CustomPage'
import AboutPage from './pages/AboutPage'

const App = () => {
  return (
    <div className="w-[100vw] h-[100vh] m-0 p-0">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/conversion" element={<ConversionPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/recipes/:category" element={<CustomPage />} />
          <Route path="*" element={<h1 style={{ color: 'white' }}>404 - Page Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
