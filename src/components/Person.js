import React from 'react'
import './Person.css'

const Person = ({ name,age }) => {
    return (
        <div className="person-card">
            Person details are as below :
            <p>Name : {name} </p>
            <p>Age  : {age} </p>
        </div>
    )
}

export default Person
