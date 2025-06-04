import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';  // Example of a home icon from react-icons
import RecipeCard from '../components/RecipeCard';
import SearchBar from '../components/SearchBar';

const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const SearchPage = () => {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const query = new URLSearchParams(location.search).get('q') || ''; // Default to empty string if no query

    useEffect(() => {
        const fetchRecipes = async () => {
            if (!query) return;
            setIsLoading(true);
            const response = await fetch(searchApi + query);
            const data = await response.json();
            setRecipes(data.meals || []);
            setIsLoading(false);
        };

        fetchRecipes();
    }, [query]);

    const handleSearch = (newQuery) => {
        if (newQuery.trim()) {
            navigate(`/search?q=${newQuery}`);
        } else {
            navigate('/search'); // Navigate to the search page without a query
        }
    };

    // Function to redirect to homepage
    const handleRedirectToHomepage = () => {
        navigate('/');  // Redirect to the homepage
    };

    return (
        <div className='bg_home min-h-[100vh] w-[100vw]'>
            {/* Header and Icon (Logo) side by side */}
            <div className="flex items-center justify-between mt-4 px-6 ">
                <h1 className='text-3xl font-bold text-[#2a3d3f] pl-[4rem] ml-3 overflow-hidden'>
                    Search Results for "{query}"
                </h1>
                {/* Logo (Icon) aligned to the right of the header */}
                <IoHomeOutline
                    className="w-10 h-10  text-[#36034d] cursor-pointer" 
                    onClick={handleRedirectToHomepage}
                />
            </div>

            <SearchBar query={query} setQuery={handleSearch} onSearch={handleSearch} />
            
            {isLoading ? (
                <div className='text-center mt-4 text-xl text-gray-500'>Loading...</div>
            ) : (
                <div className="flex flex-wrap justify-center">
                    {recipes.length > 0 ? (
                        recipes.slice(0, 6).map(recipe => (
                            <RecipeCard
                                key={recipe.idMeal}
                                recipe={recipe}
                            />
                        ))
                    ) : (
                        <div className='text-center text-xl text-gray-500 mt-4'>No Results.</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchPage;
