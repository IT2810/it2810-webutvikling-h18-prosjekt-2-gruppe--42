import React, { Component } from 'react';
// import logo from './logo.svg';
import './Media.css';

class Media extends Component {
    constructor(props) {
        super(props)
        this.state = {text: "", image:"", sound:""};
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

        this.setState({sound:this.props.categories['sound'][this.props.soundCurrentCat][this.props.soundCurrentFile]})

    }

    componentDidUpdate(prevProps, prevState) {
        let that = this
        document.getElementById("player").pause()
        if(prevState.sound !== this.props.categories['sound'][this.props.soundCurrentCat][this.props.soundCurrentFile] ){
            this.setState({sound:this.props.categories['sound'][this.props.soundCurrentCat][this.props.soundCurrentFile]})
            document.getElementById("player").load()

        }
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

            setTimeout(function () {
                document.getElementById("player").play()
            }, 150);
    }

  render() {
      let audio = (<audio controls id="player">
          <source src={this.state.sound}/>
      </audio>)
    return (
        <div className="media-grid-container">

            <div className="media-grid-item image" dangerouslySetInnerHTML={{'__html':this.state.image}}>
            </div>

            <div className="media-grid-item text">
                {this.state.text}
            </div>
            {audio}

        </div>


    );
  }
}

export default Media;
