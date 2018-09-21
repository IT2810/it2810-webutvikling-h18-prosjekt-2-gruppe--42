import React, { Component } from 'react';

class Media extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: "",
        };
    }

    componentDidMount() {
        // Gets the randomized default files when the component has mounted
        fetch(this.props.categories["image"][this.props.imageCurrentCat][this.props.imageCurrentFile])
            .then(res => res.text())
            .then(
                res => this.setState({
                    image: res
                })
            )
    }

    componentDidUpdate(prevProps, prevState) {
        // Updates the current state if any changes have been made
        // Needed because of the scope of anonymous functions
        let that = this
        // Checks if the update has changed anything in compared to the current state and then updates if needed
        // If these checks were not here we would end up with an endless loop as  the component would be updated and
        // therefore run this code again. Then your computer would be an expensive heater
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
    }

    render() {
        return(
                <div 
                    key={1} 
                    className="grid-item image" 
                    dangerouslySetInnerHTML={{'__html':this.state.image}}>
                </div>
         );
    }
}

export default Media;
