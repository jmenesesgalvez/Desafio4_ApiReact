import React from 'react';
import '../style/busqueda.css';
import { Form, Button } from 'react-bootstrap';


function Busqueda({ handleSearch, setSearch }) {
    return (
      <form className="custom-container" onSubmit={handleSearch}>
        <h1>BUSCA TU ARTISTA & CANCION FAVORITA</h1>
        
        <Form.Control
          type="text"
          className="mb-3"
          placeholder="Search ... "
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="danger">Buscar</Button>
      </form>
    );
  }
  
  export default Busqueda;