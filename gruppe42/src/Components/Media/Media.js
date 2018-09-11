import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class Media extends Component {
    constructor(props) {
        super(props)
        this.state = {text: "", image:""};
    }
    componentDidMount() {
        fetch("example.json").then(res => res.json() )
        .then(
            res => this.setState({'text':res.text})
        )

        fetch("Resources/Images/example.svg").then(res => res.text() )
        .then(
            res => this.setState({image:res})
        )

    }

  render() {
    return (
      <div className="Media">
        {this.state.text}
        <svg dangerouslySetInnerHTML={{'__html':this.state.image}} />
      </div>
    );
  }
}

export default Media;
