import React from 'react';

const Forms = () => {
  return (
    <>
      <form className="formUser" action="">
        <div className="nameuser">
          <label htmlFor="">Nombre</label>
          <input type="text" id="nameUser" />
        </div>
        <div className="nameuser">
          <label htmlFor="">Monto</label>
          <input type="number" id="nameUser" />
        </div>
        <div className="buttons">
          <input
            className="buttonOpc one"
            type="submit"
            name="AddButton"
            value={'Agregar'}
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
          />
        </div>
      </form>
    </>
  );
};

export default Forms;
