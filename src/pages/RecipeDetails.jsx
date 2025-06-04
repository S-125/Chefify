import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingBar from '../components/LoadingBar';

const RecipeDetails = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchRecipe = async () => {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            const data = await response.json();
            setRecipe(data.meals[0]);
            setIsLoading(false);
        };

        fetchRecipe();
    }, [id]);

    if (isLoading) {
        return <LoadingBar/>;
    }

    if (!recipe) {
        return <div className="text-center text-red-500 text-xl">No recipe found.</div>;
    }

    return (
        <div className="w-[100-vw] min-h-[100vh] bg-recipe">
        <div className="max-w-3xl mx-auto p-6 bg-white/90 shadow-lg rounded-lg ">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">{recipe.strMeal}</h1>
            <img 
                src={recipe.strMealThumb} 
                alt={recipe.strMeal} 
                className="w-[300px] rounded-lg shadow-md "
            />
            <h2 className="text-lg font-semibold text-gray-700 mt-4">
                Category: <span className="text-indigo-600">{recipe.strCategory}</span>
            </h2>
            <h3 className="text-lg font-semibold text-gray-700 mt-4">Instructions:</h3>
            <p className="text-gray-600 mt-2">{recipe.strInstructions}</p>
        </div>
        </div>
    );
};

export default RecipeDetails;
