import React from 'react'
import { BsSearch } from "react-icons/bs";
const SearchBar = ({ query, setQuery, onSearch }) => {
  const handleInputChange = (e) => {
    setQuery(e.target.value); // This should update the state with the current input value
};
  return (
     <form onSubmit={(e) => { e.preventDefault(); onSearch(); }}  className='w-full h-[40vh] flex items-center justify-center'>
     <div className='w-[85vw]  h-[40px] bg-white  rounded-[30px] flex items-center'>
      <BsSearch className='ml-4 text-lg'/>
      <input
                    type="text"
                    placeholder='What would you like to cook?'
                    value={query}
                    onChange={handleInputChange} 
                    className='w-[90%] h-[30px] p-0 m-0 ml-5 pl-3 outline-none border-none rounded-[30px] text-sm'
                />
                <button type="submit" className='hidden'>Search</button>
            </div>
     
    </form>
  )
}

export default SearchBar
