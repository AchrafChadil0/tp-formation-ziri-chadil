import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classNames from 'classnames';
import './Formations.css'



function Formations( formation ) {
    const [formations , setFormations] = useState([]);
    useEffect(() => {
        fetch('http://localhost:9000/formations')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setFormations(data)
        })
    }, [])

    const availabilityClass = classNames({
        'text-success': formation.availability, 
        'text-danger': !formation.availability,
      });

    return (
    <>
    <h1>Formations : </h1>

        <Link to={"/Formations/add"} className="btn btn-success mt-3">Ajouter</Link>

    <table className="table table-striped mt-5 formation-table"> 
        <thead>
            <tr>
            <th>id</th>
            <th>titre</th>
            <th>domaine</th>
            <th>Niveau</th>
            <th>Description</th>
            <th>Disponibilité</th>
            <th>Actions</th>
            </tr>
        </thead>

        <tbody>
            {formations.map ((formation) => {
                return (
                <tr key={formation.id}>
                    <td>{formation.id}</td>
                    <td>{formation.title}</td>
                    <td>{formation.domain}</td>
                    <td>{formation.level}</td>
                    <td>{formation.description}</td>
                    <td>
                    <span className={`text-${formation.availability ? 'success' : 'danger'}`}>
                        {formation.availability ? 'Disponible' : 'Indisponible'}
                    </span>
                    </td>

                    <td>
                        <button className="btn btn-danger btn-sm">supprimer</button>
                        <button className="btn btn-primary btn-sm">editer</button>
                        <Link to={`/Formations/${formation.id}`} className="btn btn-info btn-sm">voir</Link>
                    </td>
                </tr>
                )
            })}
            
            
        </tbody>
    </table>
    </>
    );
}

export default Formations;