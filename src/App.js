import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import SideBar from './Components/SideBar';
import QuationTable from './Components/QuationsTable';
import Revenue from './Components/Revenue';
import Table from './Components/Table-2';
import CorPorateWeb from './Components/CorporateWeb';
import { Route, Switch } from "react-router-dom";
import HelloTeam from './Components/HelloTeam';
import Profile from './Components/Profile';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <SideBar/>
     
     <Switch>
      <Route exact path="/dashboard" component={CorPorateWeb} />
      <Route exact path="/university" component={QuationTable} />
      <Route exact path="/profile" component={Profile}/>
      <Route exact path="/" component={HelloTeam}/>
      <Switch>
        <Route exact path="/revenue" component={Revenue} />
        <Route exact path="/quations" component={Table} />


        </Switch>

        
      </Switch>
    </div>
  );
}

export default App;
