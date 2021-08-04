import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

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
        Change Colours
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
