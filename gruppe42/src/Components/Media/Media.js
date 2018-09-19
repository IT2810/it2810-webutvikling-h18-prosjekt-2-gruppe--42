import React, { Component } from 'react';
import './Media.css';

class Media extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "",
            image: "",
            sound: ""
        };
    }

    componentDidMount() {
        // Gets the hardcoded default files when the component has mounted
        fetch(this.props.categories["text"][this.props.textCurrentCat][this.props.textCurrentFile])
            .then(res => res.json())
            .then(
                res => this.setState({
                    'text': res.text
                })
            )

        fetch(this.props.categories["image"][this.props.imageCurrentCat][this.props.imageCurrentFile])
            .then(res => res.text())
            .then(
                res => this.setState({
                    image: res
                })
            )

        this.setState({
            sound: this.props.categories['sound'][this.props.soundCurrentCat][this.props.soundCurrentFile]
        })

    }

    componentDidUpdate(prevProps, prevState) {
        // Updates the current state if any changes have been made
        // Needed because of the scope of anonymous functions 
        let that = this
        document.getElementById("player").pause()
        // Checks if the update has changed anything in compared to the current state and then updates if needed
        // If these checks were not here we would end up with an endless loop as  the component would be updated and
        // therefore run this code again. Then your computer would be an expensive heater
        if (prevState.sound !== this.props.categories['sound'][this.props.soundCurrentCat][this.props.soundCurrentFile]) {
            this.setState({
                sound: this.props.categories['sound'][this.props.soundCurrentCat][this.props.soundCurrentFile]
            })
            document.getElementById("player").load()

        }

        if ((prevProps.textCurrentCat !== this.props.textCurrentCat) || (prevProps.textCurrentFile !== this.props.textCurrentFile)) {
            fetch(this.props.categories["text"][this.props.textCurrentCat][this.props.textCurrentFile]).then(res => res.json())
                .then(function (res) {
                    if (prevState.text !== res.text) {
                        that.setState({
                            'text': res.text
                        })
                        console.log(that.state.text)
                    }
                })
        }

        if ((prevProps.imageCurrentCat !== this.props.imageCurrentCat) ||
            (prevProps.imageCurrentFile !== this.props.imageCurrentFile))
            fetch(this.props.categories["image"][this.props.imageCurrentCat][this.props.imageCurrentFile]).then(res => res.text())
            .then(function (res) {
                if (prevState.image !== res) {
                    that.setState({
                        image: res
                    })
                }
            })

        // Don't think we need this anymore. 
        // It was here becasue of an error which happend when we tried to change file, pause and play all at once.
        // Therefore we ended up with this bad way of preventing the warning
        /*
        setTimeout(function () {
            document.getElementById("player").play()
        }, 150);
        */
    }

    render() {
        let audio = (
            <audio controls id="player">
            <source src={this.state.sound}/>
            </audio>
        )
        return([
                (<div className="grid-item image" dangerouslySetInnerHTML={{'__html':this.state.image}}>
                </div>),
                (<div className="grid-item text">
                    {this.state.text}
                    <div>
                        {audio}
                    </div>
                </div>)
         ]);
    }
}

export default Media;
