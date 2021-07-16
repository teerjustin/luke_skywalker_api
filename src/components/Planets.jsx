import { React, useState, useEffect } from 'react'
import axios from 'axios';

const Planets = (props) => {
    console.log(props.id)
    const [data, setData] = useState([]);

    useEffect( () => {
        axios.get("https://swapi.dev/api/planets") 
        .then(res => {
            console.log("RESULTS", res.data.results[props.id - 1]);
            setData(res.data.results[props.id - 1])
        })
        .catch(err => console.log(err))
        }, [props.id])

    
    return (
        <div>
            {data ? 
                <div>
                    <h3> Name: {data.name}</h3>
                    <h3> Climate: {data.climate} </h3>
                    <h3> Terrain: {data.terrain}   </h3>
                    <h3> Surface Water: {data.surface_water}  </h3>
                    <h3> Population: {data.population}  </h3>
                </div>
            : <div> This planet does not exist (at this point) </div>}
        </div>
    )
}
export default Planets