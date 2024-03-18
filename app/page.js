"use client";

import { useState, useEffect } from 'react';
import DogList from '../Components/DogList/DogList';
import Form from '../Components/Form/Form';
import '../app/globals.css';


export default function Page() {
    const [dogImages, setDogImages] = useState([]);
    const [numDogs, setNumDogs] = useState(3);

    useEffect(() => {
        fetch(`https://dog.ceo/api/breeds/image/random/${numDogs}`)
            .then(response => response.json())
            .then(data => setDogImages(data.message));
    }, [numDogs]);

    return (
      <div className="container mx-auto p-5 " style={{ marginTop: '4rem', color: '#333 !important' }}> 
          <div className="text-center" >
              <Form onNumberChange={(number) => setNumDogs(number)} />
          </div>
          <DogList dogs={dogImages} />
          
      </div>
  
  );
}