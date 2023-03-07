import React from 'react';

function AppHeader() {
  function showAlert() {
    alert('You clicked a button');
  }

  return (
    <>
      <div>
        <button onClick={showAlert}>Click Me</button>
      </div>
      <h1>Hello 😁</h1>;
    </>
  );
}

export default AppHeader;
