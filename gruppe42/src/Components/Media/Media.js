import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class Media extends Component {
    constructor(props) {
        super(props)
        this.state = {text: ""};
    }
    componentDidMount() {
        fetch("example.json").then(res => res.json() )
        .then(
            res => this.setState({'text':res.text})
        )
    }

  render() {
    return (
      <div className="Media">
        {this.state.text}
      </div>
    );
  }
}

export default Media;
