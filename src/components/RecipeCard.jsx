import React from "react";
import { FiBookmark } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
    const {
        idMeal,
        strMeal,
        strCategory,
        strMealThumb,
    } = recipe;

    const navigate = useNavigate(); // Get the navigate function

    const handleCardClick = () => {
        navigate(`/recipe/${idMeal}`); // Navigate to the recipe details page
    };

    return (
        <div className="m-7 p-4 bg-white rounded-lg w-[280px] shadow-sm" onClick={handleCardClick}>
            <img
                src={strMealThumb}
                alt={strMeal}
                className="w-full object-cover rounded-xl"
            />
            <div className="text-left text-[16px] p-2 font-bold">
                <div className="flex items-center justify-between">
                    <h3>{strMeal}</h3>
                    <button>
                        <FiBookmark className="ml-auto text-[35px] rounded-[50%] border-1 p-2 text-[#636AE8FF] bg-[#ededf9] cursor-pointer" />
                    </button>
                </div>
                <p  className="text-[12px] font-semibold text-[#636AE8FF] rounded-[30px] bg-[#CED0F8FF] p-1 w-[80px] flex justify-center cursor-pointer">
                    Instructions
                </p>
            </div>
        </div>
    );
};

export default RecipeCard;