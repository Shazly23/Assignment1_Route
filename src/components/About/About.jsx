import React, { Component } from 'react';

class About extends Component {
    state={
        name :'Front-end'
      }
    render() {
        return (
            <div>
                <h1>About Component</h1>
                <h2>{this.state.name}</h2>
            </div>
        );
    }
}

export default About;
