import React from 'react';
import User from './User';

const ListUsers = ({ user }) => {
  console.log(user);
  return (
    <div>
      <header className="hero-listUsers">
        <h2 className="hero-title-listUsers"> Participantes: </h2>
      </header>
      <section className="participantes-container">
        {' '}
        {user.map((usuario, index) => (
          <User usuario={usuario} key={index} />
        ))}
      </section>
    </div>
  );
};

export default ListUsers;
