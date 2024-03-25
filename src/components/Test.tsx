import React from 'react';
import { useState } from 'react';

const Test = () => {
  const [state, setState] = useState(0);

  const handleClick = () => {
    setState(state + 1);
    console.log(state);
  };
  console.log(state);

  return (
    <>
      <h1>{state}</h1>
      <button onClick={handleClick}>Test</button>
    </>
  );
};

export default Test;
