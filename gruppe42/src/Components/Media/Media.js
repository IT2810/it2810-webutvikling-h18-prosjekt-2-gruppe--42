import React, { Component } from 'react';
import TextAudio from '../TextAudio/TextAudio';
import Image from '../Image/Image';
import './Media.css';

class Media extends Component {

    render() {

        return([
                (<Image key={1246}
                    categories={this.props.categories}
                    imageCurrentCat={this.props.imageCurrentCat}
                    imageCurrentFile={this.props.imageCurrentFile}/>),
                (<TextAudio key={12364}
                    categories={this.props.categories}
                    textCurrentCat={this.props.textCurrentCat}
                    textCurrentFile={this.props.textCurrentFile}
                    soundCurrentCat={this.props.soundCurrentCat}
                    soundCurrentFile={this.props.soundCurrentFile}/>
                )
         ]);
    }
}

export default Media;
