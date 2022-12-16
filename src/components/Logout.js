import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Logout() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token")
    useEffect(() => {
        axios.post('http://localhost:9000/api/logout', {}, {
            headers: {
                authorization: token
            }
        })
            .then(res => {
                localStorage.removeItem("token")
                navigate('/');
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div></div>
    )
}