import React from 'react';
import { useNavigate } from 'react-router-dom';

import reactLogo from '../assets/react.svg';
import '../App.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <button onClick={() => navigate('/about')}>About</button>
      </div>
      <div className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      </div>
    </>
  );
};

export default HomePage;
