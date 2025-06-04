import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-violet-50 min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-violet-800 mb-4 h-[80px]">About Chefify</h1>
        <p className="text-lg text-violet-700 mb-8">
          Welcome to <span className="font-semibold">Chefify</span> — your go-to destination for discovering delicious recipes tailored to your tastes. Whether you're craving a hearty meal or a light snack, our extensive collection has something for everyone.
        </p>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-violet-800 mb-4">Our Mission</h2>
          <p className="text-violet-700 mb-4">
            At Chefify, we aim to simplify your cooking journey by providing easy access to a wide array of recipes. Our intuitive search and filter options help you find the perfect dish based on ingredients, cuisine, dietary preferences, and more.
          </p>
          <h2 className="text-2xl font-semibold text-violet-800 mb-4">Features</h2>
          <ul className="list-disc list-inside text-violet-700 mb-4 text-left">
            <li>Comprehensive recipe search functionality</li>
            <li>Filter options for categories, cuisines, and dietary needs</li>
            <li>User-friendly interface for seamless navigation</li>
            <li>Regularly updated content to keep your menu fresh</li>
          </ul>
          <p className="text-violet-700">
            Join us in exploring a world of flavors and make every meal an adventure with Chefify!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
