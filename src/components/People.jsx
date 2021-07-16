import { React, useState, useEffect } from 'react'
import axios from 'axios';

const People = (props) => {
    console.log(props.id)
    const [data, setData] = useState([]);

    useEffect( () => {
        axios.get("https://swapi.dev/api/people") 
        .then(res => {
            console.log("RESULTS", res.data.results[props.id - 1]);
            setData(res.data.results[props.id - 1])
        })
        .catch(err => console.log(err))
        }, [props.id])

    
    return (
        <div>
            {data && 
                <div>
                    <h3> Name: {data.name} </h3>
                    <h3> Height: {data.height}   </h3>
                    <h3> Mass: {data.mass}  </h3>
                    <h3> Hair Color: {data.hair_color}  </h3>
                    <h3> Skin Color: {data.skin_color}  </h3>
                </div>
            }
        </div>
    )
}
export default People