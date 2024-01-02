import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Utilisateurs() {
    const [utilisateurs , setUtilisateurs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:9000/Utilisateurs')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setUtilisateurs(data)
        })
    }, [])

    return (
    <>
    <h1>Utilisateurs : </h1>

    <Link to={"/Utilisateurs/add"} className="btn btn-success mt-3">Ajouter</Link>

    <table className="table table-striped mt-5"> 
        <thead>
            <tr>
            <th>id</th>
            <th>titre</th>
            <th>domaine</th>
            <th>Niveau</th>
            </tr>
        </thead>

        <tbody>
            {utilisateurs.map ((utilisateur) => {
                return (
                <tr>
                    <td>{utilisateur.id}</td>
                    <td>{utilisateur.name}</td>
                    <td>{utilisateur.role}</td>
                    <td>{utilisateur.enrolledCourses} </td>
                    <td>
                        <button className="btn btn-danger btn-sm">supprimer</button>
                        <button className="btn btn-primary btn-sm">editer</button>
                        <button className="btn btn-info btn-sm">voir</button>
                    </td>
                </tr>
                )
            })}
            
            
        </tbody>
    </table>
    </>
    );
}

export default Utilisateurs;