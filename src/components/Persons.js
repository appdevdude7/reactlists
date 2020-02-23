import React from 'react'
import Person from './Person'

const Persons = ({ persons }) => {


    return (
        <div className="persons">
            {persons.map( person => <Person 
                                        key={person.name+person.age} 
                                        name={person.name} 
                                        phone={person.phone}
                                        city={person.address.city} 
                                        email={person.email} /> )} 
        </div>
    )
}

export default Persons
