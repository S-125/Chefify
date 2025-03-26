import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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

    return (
        <div className='bg-[#CED0F8FF] min-h-[100vh] w-[100vw]'>
            <h1 className='text-center mt-4'>Search Results for "{query}"</h1>
            <SearchBar query={query} setQuery={handleSearch} onSearch={handleSearch} />
            {isLoading ? (
                <div className='text-center'>Loading...</div>
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
                        <div className='text-center'>No Results.</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchPage;