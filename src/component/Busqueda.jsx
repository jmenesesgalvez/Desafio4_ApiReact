import React from 'react';
import '../style/busqueda.css';
import { Form, Button } from 'react-bootstrap';


function Busqueda({ handleSearch, setSearch }) {
    return (
      <form className="custom-container" onSubmit={handleSearch}>
        <h1>ENCUENTRA TU ARTISTA FAVORITO</h1>
        
        <Form.Control
          type="text"
          className="mb-3"
          placeholder="Search ... "
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="danger">Success</Button>
      </form>
    );
  }
  
  export default Busqueda;