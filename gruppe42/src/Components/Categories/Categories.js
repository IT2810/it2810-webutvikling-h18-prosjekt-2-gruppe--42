import React, { Component } from 'react';
import './Categories.css'


class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
          categories: [],
          active: "Category1"
        };
        //console.log(this.props)
        this.onHandleChangeCategory = this.onHandleChangeCategory.bind(this)
    }

    componentDidMount() {
      this.setState( {
        categories: Object.keys(this.props.categories[this.props.category]),
        category: this.props.category}
        )
    }

	onHandleChangeCategory(e) {
    this.props.onChangeCategory([this.state.category, e.target.value])
    this.setState({active:e.target.value})
	}

  render() {
    return (
      <div className="Categories">
        <h5 className="category-name">{ this.props.category[0].toUpperCase()+this.props.category.slice(1, this.props.category.length)}</h5>
        {this.state.categories.map((i, x) => 
            <button 
            className={this.state.active === i ? "category-buttons active-cat" : "category-buttons"} 
            key={x} 
            value={i} 
            onClick={this.onHandleChangeCategory}> {i} </button>)
            // console.log(parseInt(this.state.active, 10) === parseInt(i, 10) ? "category-buttons active-cat" : "category-buttons", x, this.state.active))
       }	
      </div>
    );
  }
}

export default Categories;
