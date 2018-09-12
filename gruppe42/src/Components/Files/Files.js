import React, { Component } from 'react';


class Files extends Component {
    constructor(props) {
        super(props)
        this.state = {categories: []};
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
    return (
      <div className="Files">
        { 
          Object.keys(this.props.categories[this.props.type][this.props.category])
          .map((i, x) => <button key={x} value={i} onClick={this.onHandleChangeFile}>{i}</button>)
        }
      </div>
    );
  }
}

export default Files;