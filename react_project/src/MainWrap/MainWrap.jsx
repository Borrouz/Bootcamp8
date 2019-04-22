import React from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Weight from '../Weight/Weight';
import History from '../History/History';
import {Switch, Route} from 'react-router-dom';

const MainWrap = ({weight, height, desWeight,date}) => {
    return (
        <div>
            <Header/>
            <Menu/>
            <Switch>
                <Route path='/main' exact render={props => 
                    <Weight 
                    date={date} 
                    weight={weight} 
                    height={height} 
                    desWeight={desWeight} 
                    {...props}/>}
                />
                <Route path='/main/history' render={props => 
                    <History   
                    date={date} 
                    weight={weight}  
                    {...props}/> }
                />
            </Switch>
        </div>
    );
};

export default MainWrap;