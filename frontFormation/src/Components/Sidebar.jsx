import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <>
      <ul className='list-unstyled'>
        <li>
          <Link to={'/Formations'}>Formations</Link>
        </li>
        <li>
          <Link to={'/Utilisateurs'}>Utilisateurs</Link>
        </li>
      </ul>
    </>
  );
}

export default Sidebar;