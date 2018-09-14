import React, { Component } from 'react';
import './Files.css';


class Files extends Component {
    constructor(props) {
        super(props)
        this.state = {Compositions: ["Komp1", "Komp2", "komp3", "komp4"]};
        //console.log(this.props)
        this.onHandleChangeFile = this.onHandleChangeFile.bind(this)
    }

	onHandleChangeFile(e) {
		this.props.onChangeFile([this.props.type, e.target.value])
	}

  render() {
    return (
      <div className="Files">
        {
          Object.keys(this.state.Compositions).map((i, x) => 
            <span classname="composition-button-span"><button className="composition-button" key={x} value={i} onClick={this.onHandleChangeFile}>Let me see composition #{i}</button></span>)
        }
      </div>
    );
  }
}

export default Files;
