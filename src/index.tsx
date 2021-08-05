import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import Button from 'Components/Button';

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

// enables Hot Modules Replacement
if (module.hot) {
  module.hot.accept();
}

const getRandomColour = () => colourList[Math.floor(Math.random() * colourList.length)];

const App = () => {
  const [bgColour, setColour] = useState('white');

  return (
    <div className='main' style={{ backgroundColor: bgColour }}>
      <p>App is runningsssssss</p>
      <Button
        label={`Change Colour`}
        onClick={() => {
          setColour(getRandomColour());
        }}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
