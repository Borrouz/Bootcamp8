import React from 'react';
import {NavLink} from 'react-router-dom';
import './startPage.css';


const startPage = ({weight, height, desWeight, Start, setLocalStorage}) => {

    return (
        <div className="mainWrap">
            <div className = 'Header'>
                <h1>welcome to i`mfknfat</h1>
                <p>enter your options</p>
            </div>
            <ul className='startPageList'>
                <li className='startPageListItem'>
                    <h2 className='Options'>weight</h2>
                    <form action="" className="Form" onSubmit={(e) => e.preventDefault()}>
                        <input type="number"  name="weight" className='Number' value= {weight} onChange={Start}/><span className="span">kg</span>
                    </form>
                    
                </li>
                <li className='startPageListItem'>
                    <h2 className='Options'>desired weight</h2>
                    <form action="" className="Form" onSubmit={(e) => e.preventDefault()}>
                    <input type="number" name="desWeight" className='Number' value= {desWeight} onChange={Start}/><span className="span">kg</span>
                    </form>
                    
                </li>
                <li className='startPageListItem'>
                    <h2 className='Options'>height</h2>
                    <form action="" className="Form" onSubmit={(e) => e.preventDefault()}>
                    <input name="height" type="number" className='Number' value= {height} onChange={Start}/><span className="span">cm</span>
                    </form>
                    

                </li>
               
                <li className="linkWrap">
                    <NavLink to = '/main' onClick={setLocalStorage} className="textDec">
                        <button className="startPageBtn">
                            <span className="textDec">start</span>
                        </button>
                    </NavLink>
                </li>
                
            </ul>
        </div>
    );
};

export default startPage;