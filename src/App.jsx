import React from 'react'
import Homepage from './pages/Homepage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import RecipeDetails from './pages/RecipeDetails';
const App = () => {
  return (
    <div className='w-[100vw] h-[100vh] m-0 p-0'>
       <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/recipe/:id" element={<RecipeDetails />} />
            </Routes>
        </Router>
    </div>
  )
}

export default App
