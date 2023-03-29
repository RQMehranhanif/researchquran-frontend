/* eslint-disable no-template-curly-in-string */
import React from 'react';
import './Spinner.scss';

const Spinner = () => {
  return (
    <div className='view'>
      <img  className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="" />
    </div>
  );
};

export default Spinner;
