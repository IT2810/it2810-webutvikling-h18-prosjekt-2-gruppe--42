import React, { Component } from 'react';
import './Files.css';


class Files extends Component {
    constructor(props) {
        super(props)
        this.state = {
          Compositions: ["Komp1", "Komp2", "komp3", "komp4"],
          active: 0
        };
        this.onHandleChangeFile = this.onHandleChangeFile.bind(this)
    }

	onHandleChangeFile(e) {
    // Calls App.js's onChangeFile funtion with the new files and updates current state
		this.props.onChangeFile([this.props.type, e.target.value])
    this.setState({active:e.target.value})
	}

  render() {
    return (
      <div className="Files">
        {
          Object.keys(this.state.Compositions).map((i, x) =>
            // <span classname= "composition-button-span">
                <button 
                className={parseInt(this.state.active, 10) === parseInt(i, 10) ? "composition-button activeComp" : "composition-button" } 
                key={x} 
                value={i} 
                onClick={this.onHandleChangeFile}>
                Combo #{parseInt(i,10) + 1}
                </button>
            // </span>)
        )
        }
      </div>
    );
  }
}

export default Files;
