import React, { useState } from "react";
import axios from 'axios';
import Form from "../views/Form";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Display = () => {
    const { category, id } = useParams()
    const [thing, setThing] = useState({})

    const keyNames =
    {
        'people': ['name', 'hair_color', 'skin_color'],
        'planets': ['name', 'climate', 'terrain', 'surface_water', 'population'],
        'starships': ['name', 'model', 'length', 'passengers'],
        'vehicles': ['name', 'cargo_capacity', 'consumables', 'crew']
    }

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${category}/${id}/`)
            .then(response => {
                setThing(response.data)
                console.log(thing)

            })
            .catch(err => {
                setThing({})
                console.log(err)
            })
    }, [category, id])


    return (
        <>
            {

                keyNames[category].map((categoryName, i) => {
                    return (
                        <>
                            <h2 key={i}>{categoryName} : {thing[categoryName]}</h2>
                        </>)
                })
            }


        </>


    )

}
//Ternary operator, keep top for people.
//Seperate div for planets,ect
//people is key object, array, height, weight,
//planet has key ect....
//.then get the response and change the state to grab object then return


export default Display;