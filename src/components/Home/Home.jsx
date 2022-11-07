import React, { Component } from 'react';

class Home extends Component {
    state={
        name :'Shazly'
      }
    render() {
        return (
            <>
                <h1>Home Component</h1>
                <h2>{this.state.name}</h2>
            </>
        );
    }
}

export default Home;
