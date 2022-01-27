import React from 'react';

const User = ({ usuario }) => {
  const { name, monto } = usuario;
  console.log(name);
  return (
    <div className="userContainer">
      <h2 className="titleUser">{name}</h2>
      <h4 className="montoUser">{`$ ${monto}`}</h4>
    </div>
  );
};

export default User;
