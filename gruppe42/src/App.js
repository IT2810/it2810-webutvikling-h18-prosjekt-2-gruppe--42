import React, {Component} from 'react'
import './App.css'
import Media from './Components/Media/Media.js'
import Categories from './Components/Categories/Categories.js'
import Files from './Components/Files/Files'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            files: {
                sound: {
                    cat1: {
                        file1: "Resources/Sound/buzz.mp3",
                        file2: "Resources/Sound/cyberrace.mp3",
                        file3: "Resources/Sound/desertshimmer.mp3",
                    },
                    cat2: {
                        file1: "Resources/Sound/funmusic.mp3"
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
                    },
                    cat2: {
                        file1: "Resources/Text/fifty.json"
                    },
                    cat3: {
                        file1: ""
                    }
                },
                image: {
                    cat1: {
                        file1: "Resources/Image/Dummy",

                    },
                    cat2: {
                        file1: "Resources/Image/Dummy",

                    },
                    cat3: {
                        file1: "Resources/Image/Dummy",

                    },
                }
            },
            soundCurrentCat: "cat1",
            imageCurrentCat: "cat1",
            textCurrentCat: "cat1",

            soundCurrentFile: "file1",
            imageCurrentFile: "file1",
            textCurrentFile: "file1",
        }
        console.log(this.state)
        this.onChangeCategory = this.onChangeCategory.bind(this)
        this.onChangeFile = this.onChangeFile.bind(this)
    }

    componentDidMount() {
        /*
        this.setState({
            soundCurrentCat: Object.keys(this.state.files.sound)[0],
            imageCurrentCat: Object.keys(this.state.files.image)[0],
            textCurrentCat: Object.keys(this.state.files.text)[0],
        })
        console.log(this.state)
        */
    }

	onChangeCategory(e) {
        let currentCat = e[0] + "CurrentCat"
        console.log(e)
        this.setState({
            // The [currentCat] forces the key to be treated as a variable when being changed instead of the name currentCat itself
            [currentCat]: e[1]
        },() => console.log(/*this.state*/)) // You can't use .then() after setState, but can add a callback after setState is done like this
    }
    
    onChangeFile(e) { 
        //console.log(e)
        let currentFile = e[0] + "CurrentFile"
        this.setState({
            [currentFile]: e[1]
        }, () => console.log(/*this.state*/))
    }

    render() {
        let that = this
        console.log(this.state)
        return (<div className="App">
            <Media categories={this.state.files} textCurrentCat={this.state.textCurrentCat} textCurrentFile={this.state.textCurrentFile} soundCurrentCat={this.statesoundCurrentCat} soundCurrentFile={this.state.soundCurrentFile} imageCurrentCat={this.state.imageCurrentCat} imageCurrentFile={this.state.imageCurrentFile}/>
            {/* <Categories/> */}
            { Object.keys(this.state.files)
                .map(category => <Categories category={ category } categories={ this.state.files } onChangeCategory={this.onChangeCategory}/>) }
            { Object.keys(this.state.files).map(
                // Curse this function. Requires the use of that = this    
                function(type){
                    return Object.keys(that.state.files[type])
                    .filter(cat => cat == that.state[type + "CurrentCat"])
                    .map(cat => <Files category={cat} type={type} categories={that.state.files} onChangeFile={that.onChangeFile} />)
                })
            }
        </div>);
    }
}

export default App;
