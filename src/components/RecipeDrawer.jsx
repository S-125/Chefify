// components/RecipeDrawer.jsx
import React from 'react';

const RecipeDrawer = ({ isOpen, onClose, recipes }) => {
  return (
    <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-lg font-bold">Recipes</h2>
        <button onClick={onClose} className="text-gray-600">&times;</button>
      </div>
      <ul className="p-4">
        {recipes.map((recipe, index) => (
          <li key={index} className="py-2 border-b text-sm text-gray-700">
            {recipe.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeDrawer;
