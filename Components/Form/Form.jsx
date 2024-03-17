import React, { useState } from 'react';

const Form = ({ onNumberChange }) => {
    const [number, setNumber] = useState(3);

    return (
        <div className="text-center  mt-8"> 
            <h5 className="text-1xl font-semibold text-gray-600 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>🐶 Explore Adorable Dogos 🐶</h5>
            <form className="flex justify-center items-center mb-8" onSubmit={(e) => { e.preventDefault(); onNumberChange(number); }}> 
                <div className="relative w-full max-w-xs">
                <input 
                        type="number" 
                        value={number} 
                        onChange={(e) => setNumber(e.target.value)} 
                        className="input input-bordered input-primary pl-10 w-full bg-transparent focus:outline-none"
                        placeholder="Write a num"
                        style={{
                            borderRadius: '30px', 
                            borderColor: 'rgba(233, 30, 99, 0.5)', 
                            boxShadow: '0 4px 6px -1px rgba(233, 30, 99, 0.1), 0 2px 4px -1px rgba(233, 30, 99, 0.06)', 
                            transition: 'background-color 0.3s, borderColor 0.3s', 
                            height: '48px',
                            outline: 'none',
                            borderWidth: '2px',
                            borderStyle: 'solid',
                            borderColor: 'transparent', 
                            boxShadow: '0 0 0 2px rgba(233, 30, 99, 0.5)'
                        }}
                    />
                    <button
                     type="submit"
                      className="btn absolute right-0 top-0 bg-pink-300 text-white hover:bg-pink-400 focus:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                      style={{
                          transition: 'background-color 0.3s, box-shadow 0.3s', 
                          height: '48px', 
                          width: '90px', 
                          borderRadius: '30px'
                      }} 
                    >Paws 🐾</button>
                </div>
            </form>
        </div>
    );
};

export default Form;


