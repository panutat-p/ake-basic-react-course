import React, { useState } from 'react';

const AppFooter = () => {
  const [vite, setVite] = useState('Vite');

  function update() {
    setVite('Vite'.toUpperCase());
  }

  return (
    <>
      <div>
        <button onClick={update}>uppercase</button>
      </div>
      <p>Powered by React 18</p>
      <p>Built by {vite}</p>
    </>
  );
};

export default AppFooter;
