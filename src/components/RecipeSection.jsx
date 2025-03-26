import React from 'react';
import { useState,useEffect } from 'react';
import RecipeCard from './RecipeCard';
const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const RecipeSection = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const searchRecipes = async () => {
        setIsLoading(true);
        const url = searchApi + query
        const res = await fetch(url);
        const data = await res.json();
        setRecipes(data.meals);
        setIsLoading(false);
      };
    
      useEffect(() => {
        searchRecipes()
      }, []);
    
      const handleSubmit = (event) => {
        event.preventDefault();
        searchRecipes();
      }
  return (
    <div className='w-full h-auto bg-white'>
      <h1 className='flex justify-center text-[42px] pt-10 font-bold text-[#636AE8FF]'>THIS SUMMER RECIPES</h1>
      <div className="flex flex-wrap justify-center">
        
        {recipes.length>0? recipes.slice(0, 6).map(recipe => (
          <RecipeCard
             key={recipe.idMeal}
             recipe={recipe}
          />
        )) : "No Results."}
      </div>
    </div>
  )
}

export default RecipeSection
