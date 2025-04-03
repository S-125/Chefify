import React, { useState } from "react";

const ConversionPage = () => {
  const [ingredients, setIngredients] = useState([{ name: "", quantity: "", unit: "" }]);

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const updatedIngredients = [...ingredients];
    updatedIngredients[index][name] = value;
    setIngredients(updatedIngredients);
  };

  const addIngredient = () => {
    setIngredients([...ingredients, { name: "", quantity: "", unit: "" }]);
  };

  const removeIngredient = (index) => {
    const updatedIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(updatedIngredients);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#dee0f8] p-6">
      {/* Page Heading */}
      <h1 className="text-4xl font-bold text-[#525CEB] mb-6 h-[50px]">
        Ingredient <span className="text-gray-700">Converter</span>
      </h1>

      <div className="bg-white shadow-2xl rounded-2xl p-6 w-full max-w-lg border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">
          Enter Ingredients
        </h2>

        {ingredients.map((ingredient, index) => (
          <div key={index} className="flex gap-3 mb-4 items-center">
            <input
              type="text"
              name="name"
              placeholder="Ingredient Name"
              value={ingredient.name}
              onChange={(e) => handleChange(index, e)}
              className="w-2/5 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              value={ingredient.quantity}
              onChange={(e) => handleChange(index, e)}
              className="w-1/4 px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <select
              name="unit"
              value={ingredient.unit}
              onChange={(e) => handleChange(index, e)}
              className="w-1/4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Unit</option>
              <option value="cups">Cups</option>
              <option value="tbsp">Tbsp</option>
              <option value="tsp">Tsp</option>
            </select>
            <button
              onClick={() => removeIngredient(index)}
              className="bg-gray-300 cursor-pointer px-3 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              ❌
            </button>
          </div>
        ))}

        {/* Add Ingredient Button */}
        <button
          onClick={addIngredient}
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 cursor-pointer text-white font-semibold py-3 rounded-lg mt-4 shadow-md hover:shadow-lg transition-all duration-300"
        >
         Add More Ingredients
        </button>
      </div>
    </div>
  );
};

export default ConversionPage;
