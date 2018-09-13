import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class Media extends Component {
    constructor(props) {
        super(props)
        this.state = {text: "", image:""};
        // console.log("Media change")
    }

    componentDidMount() {
        // console.log(this.props.categories["text"][this.props.textCurrentCat][this.props.textCurrentFile], this.props.textCurrentCat)
        fetch(this.props.categories["text"][this.props.textCurrentCat][this.props.textCurrentFile]).then(res => res.json() )
        .then(
            res => this.setState({'text':res.text})
        )

        fetch(this.props.categories["image"][this.props.imageCurrentCat][this.props.imageCurrentFile]).then(res => res.text() )
        .then(
            res => this.setState({image:res})
        )

    }

    componentDidUpdate(prevProps, prevState) {
        let that = this
        if((prevProps.textCurrentCat !== this.props.textCurrentCat) || (prevProps.textCurrentFile !== this.props.textCurrentFile) ) {
            fetch(this.props.categories["text"][this.props.textCurrentCat][this.props.textCurrentFile]).then(res => res.json() )
            .then(function(res){
                if(prevState.text !== res.text){
                    that.setState({'text':res.text})
                    console.log(that.state.text)
                }
            }
            )
        }

        if((prevProps.imageCurrentCat !== this.props.imageCurrentCat) || (prevProps.imageCurrentFile !== this.props.imageCurrentFile))
            fetch(this.props.categories["image"][this.props.imageCurrentCat][this.props.imageCurrentFile]).then(res => res.text() )
            .then(function(res){
                if(prevState.image !== res) {
                    that.setState({image:res})
                }
            }
            )
    }

  render() {
    return (
      <div className="Media">
        {this.state.text}
        <div dangerouslySetInnerHTML={{'__html':this.state.image}} />
      </div>
    );
  }
}

export default Media;
