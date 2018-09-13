import React, { Component } from 'react';
import './Categories.css'


class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {categories: []};
        //console.log(this.props)
        this.onHandleChangeCategory = this.onHandleChangeCategory.bind(this)
    }

    componentDidMount() {
      this.setState({categories: Object.keys(this.props.categories[this.props.category]),
        category: this.props.category})
    }

	onHandleChangeCategory(e) {
		this.props.onChangeCategory([this.state.category, e.target.value])
	}

  render() {
    return (
      <div className="Categories">
        <h5 className="category-name">{ this.props.category }</h5>
        {  this.state.categories.map((i, x) => 
            <button className="category-buttons" key={x} value={i} onClick={this.onHandleChangeCategory}>{i}</button>)
       }	
      </div>
    );
  }
}

export default Categories;
