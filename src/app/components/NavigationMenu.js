import React from 'react'
import mockData from '../../../data/mockData';
import Link from 'next/link';

function getUniqueCatergories (data) {
const categories = data.map((item) => item.category);
return [...new Set(categories)];
}

const NavigationMenu = () => { 
    const categories = getUniqueCatergories(mockData);
    console.log({categories});

  return (
    <div className="bg-gray-800 p-4">
      <ul className="flex space-x-4 justify-center">
        {categories.map((category, index) => (
          <li key={index} className={"text-white"}>
            <Link href={`/productos/${category.toLowerCase()}`}>
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavigationMenu