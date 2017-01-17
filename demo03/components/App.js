import React from 'react';
import style from './App.css';

export default () => {
  return (
    <div>
         <h1 className='title'>
           Hello World
        </h1>
        <h2 className={style.title}>Hello Second</h2>
    </div>
  );
};
