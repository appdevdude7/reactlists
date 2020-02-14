import React from 'react'
import './Person.css'

const Person = ({ name,age }) => {
    return (
        <div className="person-card">
            <p>Name : {name} </p>
            <p>Age  : {age} </p>
        </div>
    )
}

export default Person
