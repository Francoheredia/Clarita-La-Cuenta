import { useState } from 'react';
import Forms from './components/Forms';
import ListUsers from './components/ListUsers';
function App() {
  const [user, setUser] = useState([]);
  return (
    <div className="container">
      <header> Saquemos Cuentas</header>
      <Forms user={user} setUser={setUser} />
      <ListUsers user={user} />
    </div>
  );
}

export default App;
