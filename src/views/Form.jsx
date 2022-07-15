import React, { useState } from "react";
import { useNavigate, Outlet } from 'react-router-dom'
import Display from '../components/Display';
import App from "../App";


const Form = () => {
    const [category, setCategory] = useState("")
    const [id, setId] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/${category}/${id}`)
        //catergory = people,ect. then id is id
        //have a hidden or default value for drop downs
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label> Search For: </label>
                <select name="reciever" value={category} onChange={e => setCategory(e.target.value)}>
                    <option hidden> Chose one: </option>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="starships">Star Ships</option>
                    <option value="vehicles">Vehicles</option>
                </select>

                <label> Id: </label>
                <input type="number" name="id" value={id} onChange={e => setId(e.target.value)} />

                <button type="submit">Select</button>

            </form>
            <Outlet />
        </div >
    )
}



export default Form;