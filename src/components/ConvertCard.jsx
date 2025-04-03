import React from "react";

const ConvertCard = () => {
  return (
    <div className="w-full flex justify-center mt-8">
      <div className="relative w-[90%] max-w-lg bg-gradient-to-r from-[#7A89F5] to-[#CED0F8] rounded-2xl p-8 border border-[#525CEB] shadow-xl shadow-[#525CEB]/50 backdrop-blur-md">
        <p className="text-black text-lg text-center font-poppins leading-relaxed">
          Having trouble with teaspoon and tablespoon conversions? <br /> We got you covered! <br /> Use our converter to make cooking easier.
        </p>
        <button  onClick={() => window.location.href = "/conversion"}
        className="mt-6 bg-white text-[#525CEB] font-medium px-5 py-2.5 rounded-lg shadow-lg hover:bg-[#525CEB] hover:text-white hover:shadow-[#525CEB]/70 transition-all duration-300 ease-in-out cursor-pointer">
          Convert Now
        </button>
        <div className="absolute top-2 left-2 w-3 h-3 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-2 right-2 w-3 h-3 bg-white rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default ConvertCard;
