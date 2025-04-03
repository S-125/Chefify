import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Correct import for useNavigate
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import RecipeSection from '../components/RecipeSection';
import EditorsSection from '../components/EditorsSection';
import Footer from '../components/Footer';
import ConvertCard from '../components/ConvertCard';

const Homepage = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate(); // Use useNavigate to get the navigate function

  const handleSearch = () => {
      if (query.trim()) {
          navigate(`/search?q=${query}`); // Use navigate instead of history.push
      }
  };

  return (
    <div className='w-[100vw] h-auto m-0 p-0'>
      <Navbar />
      <div className="w-[100vw] h-[95vh] m-0 bg-[url('/hero.png')] bg-cover bg-center backdrop-blur-[50px]">
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]"></div>
        <div className="relative z-10">
          <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
        </div>
      </div>
      <ConvertCard/>
      <RecipeSection />
      <EditorsSection />
      <Footer />
    </div>
  );
}

export default Homepage;