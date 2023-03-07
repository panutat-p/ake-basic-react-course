import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <>
      <h1>About</h1>
      <button>
        <Link to={'/'} replace={true}>
          Home
        </Link>
      </button>
    </>
  );
};

export default AboutPage;
