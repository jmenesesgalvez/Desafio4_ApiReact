import { useState } from 'react';
import './App.css';
import { MusiCards } from './component/MusiCards';
import 'bootstrap/dist/css/bootstrap.min.css';
import MiApi from './component/MiApi';
import Busqueda from './component/Busqueda';

function App() {
  const [search, setSearch] = useState();
  const [exist, setExist] = useState(false);
  const [secondSearch, setSecondSearch] = useState([]);

  async function handleSearch(e) {
    if (!search) {
      e.preventDefault();
      alert('Ingresa tu cancion Favorita !!');
    } else {
      e.preventDefault();
      const data = await MiApi(search);
      setExist(true);
      setSecondSearch(data);
    }
  }

  return (
    <div className="App">
      <Busqueda handleSearch={handleSearch} setSearch={setSearch} />
      {exist && <MusiCards secondSearch={secondSearch} />}
    </div>
  );
}

export default App;