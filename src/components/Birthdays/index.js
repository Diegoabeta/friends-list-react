import React from 'react'
import './index.css'
import { data } from '../../Data.js';


export const Birthdays = () => {
    const [people, setPeople] = React.useState(data);
    const unfriend = (id) => { setPeople(people.filter(person => person.id !== id)) };
    return (
        <div className="header">
            <h2>{people.length} Birthdays today</h2>

            {people.map(({ name, age, photo, id }) => {

                return (
                    <div key={id}>
                        <div className="flex1">
                            <div className="flexphoto">
                                <img src={photo} alt="foto" />
                            </div>
                            <div className="flex2">
                                <h3>{name}</h3>
                                <h4>{age} years</h4>
                            </div>
                            <button onClick={() => unfriend(id)}>unfriend</button>

                        </div>

                    </div>

                );
            })}
            <button className="unfriendAll" onClick={() => setPeople([])}>Unfriend All</button>
        </div>


    )
}


