import React, { useEffect, useState } from 'react';

type info = {
  title: string;
  year: number;
  message?: string;
};

function AppHeader({ title, year, message }: info) {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    console.log('useEffect called');
  }, [isShow]);

  function display() {
    setIsShow(!isShow);
  }

  return (
    <>
      <h1 onMouseOver={display}>
        {title} {year} {message}
      </h1>
      {isShow && (
        <h3>
          <img src="https://placehold.jp/f0c975/ffffff/400x100.png" alt="" />
        </h3>
      )}
    </>
  );
}

export default AppHeader;
