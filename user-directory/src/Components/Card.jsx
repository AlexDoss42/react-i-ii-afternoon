import React, { Component } from 'react';

class Card extends Component {

  render() {
    return (
      <div style={{
        background: 'white',
        margin: '80px 50px 0px 50px',
        height: '350px',
        paddingLeft: '40px'
      }}>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '5px'
        }}>

          <h1 style={{
            textDecoration: 'underline deepskyblue',
            lineHeight: '40px',
            paddingTop: '20px',
            paddingBottom: '20px'

          }}>
          {this.props.name.first} {this.props.name.last}
          </h1>

          <h2>{this.props.id}/25</h2>

        </div>

        <p><b>From:</b> {this.props.city}, {this.props.country}</p>
        <p><b>Job Title:</b> {this.props.title} </p>
        <p style={{
          paddingBottom: '20px'
        }}
        ><b>Employer:</b> {this.props.employer}</p>
        <p><b>Favorite Movies:</b></p>
        
        <ol>
          {this.props.favoriteMovies.map((element)=> {
            return <li>{element}</li>
          })}
        </ol>

      </div>
    )
  }

}


export default Card;