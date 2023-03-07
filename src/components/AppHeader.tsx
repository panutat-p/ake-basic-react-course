import React from 'react';

type info = {
  title: string;
  year: number;
  message?: string;
};

function AppHeader({ title, year, message }: info) {
  function showAlert() {
    alert('You clicked a button');
  }

  return (
    <>
      <div>
        <button onClick={showAlert}>Click Me</button>
      </div>
      <h1>
        {title} {year} {message}
      </h1>
      ;
    </>
  );
}

export default AppHeader;
