import React, { useState } from 'react';
import Error from './Error';

const Forms = ({ user, setUser }) => {
  const [name, setName] = useState('');
  const [monto, setMonto] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleReset = (e) => {
    setName('');
    setMonto('');
  };

  const handleAdd = (e) => {
    if ([name, monto].includes('')) {
      setError(true);
      return;
    }

    setError(false);

    setUser([...user, { name, monto }]);
    setName('');
    setMonto('');
  };

  return (
    <>
      <form className="formUser" action="" onSubmit={handleSubmit}>
        {error && <Error />}
        <div className="nameuser">
          <label htmlFor="">Nombre</label>
          <input
            type="text"
            id="nameUser"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="nameuser">
          <label htmlFor="">Monto</label>
          <input
            type="number"
            id="nameUser"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
          />
        </div>
        <div className="buttons">
          <input
            className="buttonOpc one"
            type="submit"
            name="AddButton"
            value={'Agregar'}
            onClick={handleAdd}
          />
          <input
            className="buttonOpc two"
            type="submit"
            name="ResultButton"
            value={'Calcular'}
          />
          <input
            className="buttonOpc three"
            type="submit"
            name="ResetButton "
            value={'Limpiar'}
            onClick={handleReset}
          />
        </div>
      </form>
    </>
  );
};

export default Forms;
