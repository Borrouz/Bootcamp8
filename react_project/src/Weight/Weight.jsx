import React from 'react';
import ReactSpeedometer from "react-d3-speedometer";
import moment from 'moment';
import './Weight.css';

const Weight = ({weight, height, desWeight}) => {
 
    return (
        <div className='weightWrap'>
            <div className="weightOption">
                <p>поточна вага</p>
                <h2>{weight}</h2>
                <p>{moment().format('dddd Do')}</p>
            </div>
            <div className="weightOption">
                <p>бажана вага</p>
                <h2>{desWeight}</h2>
                <p>Разница {weight-desWeight}</p>
            </div>
            <div>
                <ReactSpeedometer maxValue={40} minValue= {16} segments={3} value={+(weight/((height/100)*(height/100))).toFixed(2) } startColor='#FFFF00' endColor='#ff0000'/>
            </div>
        </div>
    );
};

export default Weight;