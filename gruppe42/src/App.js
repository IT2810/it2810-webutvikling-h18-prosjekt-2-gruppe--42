import React, {Component} from 'react';
import './App.css';
import Media from './Components/Media/Media.js'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sound: {
                cat1: {
                    file1: "Resources/Sound/buzz.mp3",
                    file2: "Resources/Sound/cyberrace.mp3",
                    file3: "Resources/Sound/desertshimmer.mp3",
                    file1: "Resources/Sound/funmusic.mp3"
                },
                cat2: {
                    file1: ""
                },
                cat3: {
                    file1: ""
                }
            },
            text: {
                cat1: {
                    file1: "Resources/Text/fifty-five.json",
                    file2: "Resources/Text/fifty-four.json",
                    file3: "Resources/Text/fifty-four2.json",
                    file1: "Resources/Text/fifty.json"
                },
                cat2: {
                    file1: ""
                },
                cat3: {
                    file1: ""
                }
            }

        }
    }
    render() {
        return (<div className="App">
            <Media/>
            {/* <Categories/> */}
        </div>);
    }
}

export default App;
