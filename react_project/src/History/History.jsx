import React from 'react';
import {Line} from 'react-chartjs-2';

const History = () => {
    const data = {
        labels: JSON.parse(localStorage.getItem('date')),
        datasets: [{
            label: 'Weight',
            data: JSON.parse(localStorage.getItem('data')),
        }]
    };
    const locStor= JSON.parse(localStorage.getItem('data'));

    
    return (
    
        <div>
            <div>
                <Line
	                data={data}
	                width={100}
	                height={100}
                />
            </div>
            <ul>
                {locStor.map(el=> <li>{el} + {parseInt(el[localStorage.length-1])- parseInt(el[localStorage.length-2])}</li>)}
            </ul>
        </div>
        
    );
};

export default History;