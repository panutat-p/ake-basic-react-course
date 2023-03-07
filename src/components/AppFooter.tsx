import React, { useState } from 'react';

type User = {
  name: string;
};

const AppFooter = () => {
  const [vite, setVite] = useState('Vite');
  const [user, setUser] = useState<User>({ name: '😃' });

  function update() {
    setVite('Vite'.toUpperCase());
  }

  setTimeout(() => {
    setUser({ name: '😛' });
  }, 2000);

  return (
    <>
      <h3>User: {user?.name}</h3>
      <p>Powered by React 18</p>
      <p>
        Built by {vite} <button onClick={update}>uppercase</button>
      </p>
    </>
  );
};

export default AppFooter;
