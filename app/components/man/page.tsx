import Image from 'next/image';
import React from 'react';

const Man = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-left w-10/12 text-lg font-semibold mb-4">Featured</h2>

      <div className="w-10/12 h-[70vh] relative mb-8">
        <Image
          src="/man.png" 
          alt="Running Man"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      <div className="text-center px-4">
        <h1 className="text-3xl font-bold mb-2">STEP INTO WHAT FEELS GOOD</h1>
        <p className="text-gray-600 mb-6">
          Cause everyone should know the feeling of running in that perfect pair.
        </p>
        <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
          Find Your Shoe
        </button>
      </div>
    </div>
  );
};

export default Man;
