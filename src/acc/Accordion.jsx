/* eslint-disable react/prop-types */
import { useState } from 'react';

const Accordion = ({ isOpen, setIsOpen }) => {
  return (
    <div className="w-11/12 sm:w-[700px]  rounded-lg p-4">
      <div
        className="p-4 bg-gray-300 rounded-t-lg flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen()}
      >
        <span>Acc Title</span>
        <span className="font-bold">+</span>
      </div>
      {isOpen && (
        <div className="p-4 bg-gray-300 rounded-b-lg">
          <p>Acc Content</p>
        </div>
      )}
    </div>
  );
};

const ListOfAcc = () => {
  const [index, setIndex] = useState(null);
  const data = new Array(5).fill('');
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div>
        {data.map((_, idx) => (
          <Accordion
            key={idx}
            isOpen={idx === index ? true : false}
            setIsOpen={() => setIndex(idx === index ? null : idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default ListOfAcc;
