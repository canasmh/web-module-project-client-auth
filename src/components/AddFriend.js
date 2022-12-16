import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddFriend() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: '',
        age: '',
        email: ''
    })

    const handleChange = (evt) => {
        setForm({
            ...form,
            [evt.target.name]: evt.target.value
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const token = localStorage.getItem("token");
        axios.post('http://localhost:9000/api/friends', form, {
            headers: {
                authorization: token
            }
        })
            .then(res => navigate("/friends"))
            .catch(err => console.log(err))
    }
    console.log(form);
    return (
    <div>
        <h2>Add Friend</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Username:</label>
                <input onChange={handleChange} type="text" id="name" name="name"/>
            </div>
            <div>
                <label htmlFor="age">Age:</label>
                <input onChange={handleChange} type="text" id="age" name="age"/>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input onChange={handleChange} type="email" id="email" name="email"/>
            </div>
            <button type="submit">Add Friend</button>
        </form>
    </div>);
  }