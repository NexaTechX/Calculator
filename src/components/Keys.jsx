import React from 'react';

function Keys({ label, keyClass, onClick }) {
  const baseClass = "flex items-center justify-center h-16 w-16 rounded-full text-2xl font-medium cursor-pointer transition-all duration-200 transform hover:scale-105 active:scale-95";
  
  const keyClasses = {
    number: "bg-gray-800 text-white hover:bg-gray-700",
    operator: "bg-orange-500 text-white hover:bg-orange-400",
    equals: "bg-orange-600 text-white hover:bg-orange-500",
  };

  return (
    <div
      className={`${baseClass} ${keyClasses[keyClass]}`}
      onClick={onClick}
    >
      {label}
    </div>
  );
}

export default Keys;

