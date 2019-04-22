import React, { Component } from 'react';
import StartPage from '../startPage/startPage';
import {Switch, Route} from 'react-router-dom';
import MainWrap from '../MainWrap/MainWrap';
import NewData from '../newData/newData';
import moment from "moment";
import './App.css';

class App extends Component {
    state = {
        weight: JSON.parse(localStorage.getItem('weight')) || '',
        height: JSON.parse(localStorage.getItem('height')) || '',
        desWeight: JSON.parse(localStorage.getItem('desWeight')) || '',
        date: JSON.parse(localStorage.getItem('date')) || [],
        data: JSON.parse(localStorage.getItem('data')) || [],
    }

    
    Start = (e) => {
        let val = e.target.value;
        let name = e.target.name;
       

        this.setState({
            [name]: val,
            
        })
    }

    setNewInput = async(e) => {
        let val = e.target.value;
        await this.setState({
            weight: val,
        })
        let stor ={
            weight: this.state.weight,
            heigth: this.state.height,
            desWeight: this.state.desWeight,
            date: this.state.date,
            data: this.state.data,
        } 
        localStorage.setItem('storage', JSON.stringify(stor))
    } 

    setNewWeight = async() => {
        let newStore= JSON.parse(localStorage.getItem('storage')).weight;
        let newDate = moment().format('dddd Do')
        await 
        this.setState( prev=>({
            data:[...prev.data, newStore],
            date: [...prev.date, newDate],
            
        }))
        localStorage.setItem('data', JSON.stringify(this.state.data))
        localStorage.setItem('date', JSON.stringify(this.state.date))
    }

    setLocalStorage = async() => {
        await  this.setState({
            date: [moment().format('dddd Do')],
        })
        let stor ={
            weight: this.state.weight,
            heigth: this.state.height,
            desWeight: this.state.desWeight,
            date:this.state.date,
        } 
            localStorage.setItem('storage', JSON.stringify(stor))
            this.setState({
                data: [this.state.weight]
            })
            
    }
    render() {
        const {weight, height, desWeight, date, newWeight, } = this.state;
        
        
  
        

        return (
            <div className='mainWrap'>
                <Switch>
                    <Route exact path='/' render={props=>
                        <StartPage 
                        setLocalStorage={this.setLocalStorage} 
                        Start={this.Start} 
                        weight={weight} 
                        height={height} 
                        desWeight={desWeight} 
                        {...props}/>}
                    />
                    <Route path='/main' render={props=>
                        <MainWrap 
                        weight={weight} 
                        height={height} 
                        desWeight={desWeight} 
                        date={date} 
                        {...props}/>}
                    />
                    <Route path='/newData' render={props=>
                         <NewData 
                         setNewInput={this.setNewInput} 
                         setNewWeight={this.setNewWeight} 
                         newWeight={newWeight} 
                         {...props}/>}
                    />
                </Switch>
            </div>
        );
    }
}



export default App;