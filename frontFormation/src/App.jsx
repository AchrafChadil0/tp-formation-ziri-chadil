import React from 'react';
import Navbar from './Components/AppNavbar';
import Sidebar from './Components/Sidebar';
import './App.css'
import { Route , Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Formations from './Pages/formations';
import AddFormation from './Pages/AddFormation';
import Utilisateurs from './Pages/Utilisateurs';
import AddUtilisateurs from './Pages/AddUtilisateurs';
import FormationsDetails from './Pages/FormationsDetails';

function App() {
  return (
  <div className="App">
      <Navbar />
      <div className='row'>
        <div className='col-2 sidebar'> <Sidebar /></div>
        <div className='col-10'>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/Formations" element={ <Formations /> } />
            <Route path="/Formations/:formationID" element={ <FormationsDetails /> } />
            <Route path="/Utilisateurs" element={ <Utilisateurs /> } />
            <Route path="/Formations/add" element={ <AddFormation /> } />
            <Route path="/Utilisateurs/add" element={ <AddUtilisateurs /> } />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
