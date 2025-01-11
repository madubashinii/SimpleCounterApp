import React, { useState } from 'react';

function Common() {
  // State to hold the message
  const [message, setMessage] = useState('Welcome to my React App!');

  // Function to change the message when the button is clicked
  const changeMessage = () => {
    setMessage('You clicked the button!');
  };

  return (
    <div className="common-container">
      <h2>{message}</h2>
      <button onClick={changeMessage} className="change-button">
        Click Me
      </button>
    </div>
  );
}

export default Common;
