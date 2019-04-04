import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Card from './Components/Card'
import Buttons from './Components/Buttons'
import data from './data'

class App extends Component {
  
  constructor(){
    super();

    this.state ={
      data,
      displayNo: 0
    }
  }

  previous = () => {
    if(this.state.displayNo > 0){
      this.setState({
        displayNo: --this.state.displayNo
      }
    )}
  }

  editUser = () => {

  }

  deleteUser = () => {

  }

  addUser = () => {

  }

  thankYouNext = () => {
    if(this.state.displayNo < data.length)
    this.setState({
      displayNo: ++this.state.displayNo
    })
  }
  
  render() {
    return (
      <div className="App">
        <Header />

        <Card 
          id = {this.state.data[this.state.displayNo].id}
          name = {this.state.data[this.state.displayNo].name}
          city = {this.state.data[this.state.displayNo].city}
          country = {this.state.data[this.state.displayNo].country}
          employer = {this.state.data[this.state.displayNo].employer}
          title = {this.state.data[this.state.displayNo].title}
          favoriteMovies = {this.state.data[this.state.displayNo].favoriteMovies}
        />

        <Buttons 
        previous = {this.previous}
        edit = {this.editUser}
        delete = {this.deleteUser}
        new = {this.newUser}
        thankYouNext = {this.thankYouNext}
        />
      </div>
    );
  }
}

export default App;
