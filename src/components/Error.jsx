import React from 'react';

const Error = () => {
  return (
    <div className="error-container">
      <picture className="logo-error">
        {' '}
        <img
          className="img-error"
          src="https://cdn-icons-png.flaticon.com/512/753/753345.png"
          alt=""
        />{' '}
      </picture>
      <div className="container-title-error">
        <h2 className="title-error">Error</h2>
        <p className="text-error">Por favor completa todos los campos</p>
      </div>
    </div>
  );
};

export default Error;
