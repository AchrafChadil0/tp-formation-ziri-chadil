import React, { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'



function FormationsDetails() {

    const [formation , setFormation] = useState([]);

    let {formationID} = useParams();
    useEffect(() => {
        fetch(`http://localhost:9000/formations/${formationID}`)
        .then((res) => res.json())
        .then((formation) => {
            setFormation(formation)
        })
    })
  return (
    <>
      <h1>{formation.title}</h1>
    </>
  )
}

export default FormationsDetails
