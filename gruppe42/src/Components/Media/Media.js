import React, { Component } from 'react';
// import logo from './logo.svg';
import './Media.css';

class Media extends Component {
    constructor(props) {
        super(props)
        this.state = {text: "", image:""};
        console.log("Media change")
    }

    componentDidMount() {
        console.log(this.props.categories["text"][this.props.textCurrentCat][this.props.textCurrentFile], this.props.textCurrentCat)
        fetch(this.props.categories["text"][this.props.textCurrentCat][this.props.textCurrentFile]).then(res => res.json() )
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
        <div className="media-grid-container">
            <div className="media-grid-item text">
                {this.state.text}
            </div>
            <div className="media-grid-item image">
                <svg dangerouslySetInnerHTML={{'__html':this.state.image}} />
            </div>
        </div>
    );
  }
}

export default Media;
