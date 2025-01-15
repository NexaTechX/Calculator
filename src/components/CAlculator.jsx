import { useState } from 'react';
import React from 'react';
import Keys from './Keys';

const Calculator = () => {
  const keys = [
    'AC', '+/-', '%', '÷',
    '7', '8', '9', '×',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '='
  ];

  const [display, setDisplay] = useState('0');
  const [operation, setOperation] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'AC') {
      setDisplay('0');
      setOperation('');
    } else if (value === '+/-') {
      setDisplay(prev => (parseFloat(prev) * -1).toString());
    } else if (value === '%') {
      setDisplay(prev => (parseFloat(prev) / 100).toString());
    } else if (value === '=') {
      try {
        const result = eval(operation + display).toString();
        setDisplay(result);
        setOperation('');
      } catch (error) {
        setDisplay('Error');
      }
    } else if (['+', '-', '×', '÷'].includes(value)) {
      setOperation(prev => prev + display + value.replace('×', '*').replace('÷', '/'));
      setDisplay('0');
    } else if (display === '0' || display === 'Error') {
      setDisplay(value);
    } else {
      setDisplay(prev => prev + value);
    }
  };

  return (
    <div className="bg-gray-900 rounded-3xl shadow-2xl p-8 w-80">
      {/* Display Section */}
      <div className="text-right mb-6 h-24 flex flex-col justify-end">
        <div className="text-gray-400 text-lg mb-2">{operation}</div>
        <div className="text-white text-5xl font-light tracking-wider">
          {display}
        </div>
      </div>

      {/* Button Grid Section */}
      <div className="grid grid-cols-4 gap-4">
        {keys.map((item, index) => (
          <Keys
            key={index}
            label={item}
            keyClass={
              isNaN(item) && item !== '.' 
                ? item === '=' 
                  ? 'equals' 
                  : 'operator' 
                : 'number'
            }
            onClick={() => handleButtonClick(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;