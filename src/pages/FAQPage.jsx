import React from 'react';

const faqs = [
  {
    question: "How do I create an account?",
    answer: "Click on the 'Sign Up' button on the top right and fill out the registration form."
  },
  {
    question: "Do I need to pay to access recipes?",
    answer: "No, most of our recipes are free. Premium recipes are marked and require a subscription."
  },
  {
    question: "Can I submit my own recipes?",
    answer: "Yes, registered users can submit their recipes through the 'Submit Recipe' section."
  },
  {
    question: "How can I get help with cooking techniques?",
    answer: "You can check our 'Learn' section or watch our instructional videos under each recipe."
  },
  {
    question: "Is there a mobile app available?",
    answer: "We're currently developing our mobile app. Stay tuned!"
  }
];

const FAQPage = () => {
  return (
    <div className="p-8 max-w-3xl mx-auto h-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#1D2128] h-[50px]">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-xl shadow p-4 border border-gray-200">
            <h2 className="text-lg font-semibold text-[#636AE8]">{faq.question}</h2>
            <p className="text-gray-700 mt-2 text-sm">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
