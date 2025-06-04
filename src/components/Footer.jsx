import React from 'react';
import emailjs from "@emailjs/browser";
import { useState } from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    const [email, setEmail] = useState("");
    const categories = [ "Breakfast", "Side", "Starter", "Dessert", "Seafood", "Vegan"];

  const sendEmail = () => {
    emailjs.send(
        "service_yq2tkut",
      "template_l199vwj", 
      { to_email: email }, 
      "XSY89yjoj3YNni6e5", 
    )
    .then(() => alert("Email sent!"))
    .catch(() => alert("Failed to send email."));
  };
  return (
    <div className='bg-[#1D2128FF] w-[100vw] h-[300px] mt-4 flex'>
      <div className='pl-10 w-[70vw]' >
        <p className='text-[16px] text-white font-bold mt-6  '>About Us</p>
        <p className='text-[#DEE1E6FF] text-[14px]'>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
        <input 
        type="email" 
        placeholder="Enter email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        className="border p-2 mr-2 bg-white mt-5 w-[60%] rounded-[10px]"
      />
      <button onClick={sendEmail} className="bg-[#636AE8FF] rounded-[10px] pl-4 pr-4 pt-2 pb-2 cursor-pointer text-white ">
        Send
      </button>
      <img src="/Footerlogo.png" alt="logo" srcSet="" className='mt-[90px] pt-1 pb-1' />
      </div>
      <div className=' w-[15vw]'>
      <p className='text-[16px] text-white font-bold mt-6'></p>
      <ul className='text-[#DEE1E6FF] text-[14px] flex flex-col gap-2 mt-3'>
       
      
      </ul>
      <p className='text-[16px] text-white font-bold mt-6'></p>
      <ul className='text-[#DEE1E6FF] text-[14px] flex flex-col gap-2 mt-3'>

        </ul>
       
      </div>
      <div>
      <p className='text-[16px] text-white font-bold mt-6 '>Recipes</p>
      <ul className='text-[#DEE1E6FF] text-[14px] flex flex-col gap-2 mt-3'>
      {categories.map((category) => (
        <li key={category}>
          <Link to={`/recipes/${category}`} className="hover:text-white hover:text-[15px]">{category}</Link>
        </li>
      ))}

        </ul>
      </div>
    </div>
  )
}

export default Footer
