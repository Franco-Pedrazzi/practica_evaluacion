import React, { useState } from 'react';
import './App.css';
import ShoppingForm from './ShoppingForm';

function App() {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");
  const [aux, setaux] = useState(".");
  const [categoría , setCategoría] = useState("Lacteo");
  function addItem(newItem,categoría){
    setItems([...items, newItem+" "+categoría]);
    setaux("")
  };
  const handleItem = (event) => {
    setaux(event.target.value)
    if(aux!=""){
      setItem(event.target.value)
    }
    else{
      event.target.value=""
    }
  };
  const handleCategoría  = (event) => {
    setCategoría(event.target.value)
  };
  return (
    <div className="App">
      <h1>Lista de Compras</h1>
      <input id="input"type="text" onChange={handleItem}></input>
      <select onChange={handleCategoría}>
      <option value='Lacteo'>Lacteo</option>
      <option value='Despensa'>Despensa</option>
      <option value='Higiene'>Higiene</option>
      <option value='Bebida'>Bebida</option>
      <option value='Limpieza'>Limpieza</option>
      <option value='Otro'>Otro</option>
      </select>
      <ShoppingForm addItem={()=>addItem(item,categoría)} />

      <ul>
      {items.map((item) => <li>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;