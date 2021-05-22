import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const colourList = [
  'white',
  'blue',
  'green',
  'yellow',
  'red',
  'black',
  'cyan',
  'brown',
  'orange'
];

const getRandomColour = () => colourList[Math.floor(Math.random() * colourList.length)];

const App = () => {
  const [bgColour, setColour] = useState('white');

  return (
    <div style={{ backgroundColor: bgColour }}>
      <p>App is running</p>
      <button
        onClick={() => {
          setColour(getRandomColour());
        }}
      >
        Change Colour
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
