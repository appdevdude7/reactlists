import React from 'react'
import './Person.css'

const Person = ({ name,phone,email,city }) => {
    return (
        <div className="person-card">
            <p>Name : {name} </p>
            <p>Phone  : {phone} </p>
            <p>City  : {city} </p>
            <p>Email id  : {email} </p>
        </div>
    )
}

export default Person
