import React, { Component } from 'react';

class Buttons extends Component {

  render() {
    return (
      <div style={{
        color: 'white',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0px 50px'
      }}>
        <button onClick = {() => this.props.previous() } > {'<'} Previous </button>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '250px',
          marginRight: '40px'
        }}
        >
          <button className='blackDynamite' onClick = {() => this.props.editUser() }> Edit </button>

          <button className='blackDynamite' onClick = {() => this.props.deleteUser() }> Delete </button>

          <button className='blackDynamite' onClick = {() => this.props.newUser() }> New </button>

        </div>

        <button onClick = {() => this.props.thankYouNext() } >  Next {'>'} </button>
      </div>
    )
  }

}


export default Buttons;