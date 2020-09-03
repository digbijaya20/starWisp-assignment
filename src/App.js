import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import SideBar from './Components/SideBar';
//import QuationTable from './Components/QuationsTable';
//import Revenue from './Components/Revenue';
//import Table from './Components/Table-2';
import CorPorateWeb from './Components/CorporateWeb';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <SideBar/>
     <CorPorateWeb/>
    </div>
  );
}

export default App;
