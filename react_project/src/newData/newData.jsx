import React from 'react';
import {NavLink} from 'react-router-dom';
import './newData.css';

const NewData = ({newWeight, setNewWeight, setNewInput}) => {
   
    
    return (
        <div>
            <form action="">
                <input type="number" name="newWeight" value={newWeight} onChange={setNewInput}/>
            </form>
            <button onClick={setNewWeight}>
                <NavLink to='/main'>Сохранить</NavLink>
            </button>
            <button>Отменить</button>
        </div>
    );
};

export default NewData;