import React from 'react'
import Person from './Person'

const persons = [
    { name: 'chris', age: 25 },
    { name: 'nick', age: 22 }
  ];

const Persons = () => {
    return (
        <div className="persons">
            {persons.map( person => <Person key={person.name+person.age} name={person.name} age={person.age} /> )} 
        </div>
    )
}

export default Persons
