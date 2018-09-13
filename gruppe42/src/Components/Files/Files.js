import React, { Component } from 'react';


class Files extends Component {
    constructor(props) {
        super(props)
        this.state = {Compositions: ["Komp1", "Komp2", "komp3", "komp4"]};
        //console.log(this.props)
        this.onHandleChangeFile = this.onHandleChangeFile.bind(this)
    }

    componentDidMount() {
      /*
      this.setState({categories: Object.keys(this.props.categories[this.props.category]),
        category: this.props.category})
        */
    }

	onHandleChangeFile(e) {
		this.props.onChangeFile([this.props.type, e.target.value])
	}

  render() {
    console.log(this.props.sound)
    return (
      <div className="Files">
        {
          Object.keys(this.state.Compositions)
          .map((i, x) => <span><button key={x} value={i} onClick={this.onHandleChangeFile}>Let me see composition #{i}</button><br/></span>)
        }
      </div>
    );
  }
}

export default Files;
