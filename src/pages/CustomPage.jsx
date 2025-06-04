import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import { IoHomeOutline } from 'react-icons/io5';

const categoryApi = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";

const CustomPage = () => {
    const { category } = useParams();
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRecipes = async () => {
            if (!category) return;
            setIsLoading(true);
            try {
                const response = await fetch(categoryApi + category);
                const data = await response.json();
                setRecipes(data.meals || []);
            } catch (error) {
                console.error('Error fetching recipes:', error);
                setRecipes([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchRecipes();
    }, [category]);

    // Redirect to homepage when logo is clicked
    const handleRedirectToHomepage = () => {
        navigate('/');  // Redirect to the homepage
    };

    return (
        <div className='bg_home min-h-[100vh] w-[100vw]'>
            {/* Header with centered title and logo aligned to the right */}
            <div className="flex justify-between items-center mt-4 px-6 overflow-hidden">
                <h1 className='text-3xl text-[#36034d] font-bold text-center flex-grow overflow-hidden'>
                    {category} Recipes
                </h1>
                {/* Logo aligned to the right of the header */}
                <IoHomeOutline
                    className="w-10 h-10 text-[#36034d] cursor-pointer overflow-hidden"
                    onClick={handleRedirectToHomepage}
                />
            </div>
            
            {isLoading ? (
                <div className='text-center mt-4 text-xl text-gray-500'>Loading...</div>
            ) : (
                <div className="flex flex-wrap justify-center mt-4">
                    {recipes.length > 0 ? (
                        recipes.slice(0, 6).map(recipe => (
                            <RecipeCard
                                key={recipe.idMeal}
                                recipe={recipe}
                            />
                        ))
                    ) : (
                        <div className='text-center text-xl text-gray-500 mt-4'>No recipes found.</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default CustomPage;
