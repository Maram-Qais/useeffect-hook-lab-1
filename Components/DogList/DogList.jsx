

import React from 'react';


function DogList({ dogs }) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {dogs.map((dog, index) => (
        <React.Fragment key={index}>
          <div className="w-44 h-44 overflow-hidden rounded-lg shadow-lg hover:shadow-pink-500/50 transition-shadow duration-300">
            <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" src={dog} alt="Dog" />
          </div>
          {index < dogs.length - 1 && ( 
            <div className="flex items-center justify-center w-12 text-lg">💖🐾</div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default DogList;
