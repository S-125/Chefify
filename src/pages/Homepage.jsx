import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import RecipeSection from '../components/RecipeSection';
import EditorsSection from '../components/EditorsSection';
import Footer from '../components/Footer';
import ConvertCard from '../components/ConvertCard';
import RecipeDrawer from '../components/RecipeDrawer';

const Homepage = () => {
  const [query, setQuery] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?q=${query}`);
    }
  };

  const toggleDrawer = () => setDrawerOpen(prev => !prev);

  useEffect(() => {
    const fetchRecipes = async () => {
      const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const data = await res.json();
      setRecipes(data.meals || []);
    };
    fetchRecipes();
  }, []);

  return (
    <div className='bg_home'>
      <div className='w-[100vw] h-auto m-0 p-0 '>
        <Navbar onRecipesClick={toggleDrawer} />
        <div className="w-[100vw] h-[95vh] m-0 bg-[url('/hero2.jpg')] bg-cover bg-center relative">
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]"></div>
          <div className="relative z-10">
            <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
          </div>
        </div>
        
        <RecipeSection />
        <EditorsSection />
        <Footer />
        <RecipeDrawer isOpen={drawerOpen} onClose={toggleDrawer} recipes={recipes} />
      </div>
    </div>
  );
};

export default Homepage;
