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
                        file4: "Resources/Text/fifty.json",
                    },
                    cat2: {
                        file1: "Resources/Text/forty-five.json",
                        file2: "Resources/Text/forty-five2.json",
                        file3: "Resources/Text/forty-seven.json",
                        file4: "Resources/Text/thirty-eight.json",
                    },
                    cat3: {
                        file1: "Resources/Text/thirty-five.json",
                        file2: "Resources/Text/thirty-four.json",
                        file3:"Resources/Text/thirty-nine.json",
                        file4: "Resources/Text/thirty-one.json",
                    }
                },
                image: {
                    cat1: {
                        file1: "Resources/Images/img1.svg",
                        file2: "Resources/Images/img2.svg",
                        file3: "Resources/Images/img3.svg",
                        file4: "Resources/Images/img4.svg",

                    },
                    cat2: {
                        file1: "Resources/Images/img5.svg",
                        file2: "Resources/Images/img6.svg",
                        file3: "Resources/Images/img7.svg",
                        file4: "Resources/Images/img8.svg",

                    },
                    cat3: {
                        file1: "Resources/Images/img9.svg",
                        file2: "Resources/Images/img10.svg",
                        file3: "Resources/Images/img11.svg",
                        file4: "Resources/Images/img12.svg",

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
        // console.log(this.state)
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
        // console.log(e)
        this.setState({
            // The [currentCat] forces the key to be treated as a variable when being changed instead of the name currentCat itself
            [currentCat]: e[1]
        }) // You can't use .then() after setState, but can add a callback after setState is done like this
    }

    onChangeFile(e) {
        //console.log(e)
        let currentFile = e[0] + "CurrentFile"
        this.setState({
            [currentFile]: e[1]
        })
    }

    render() {
        let that = this
        console.log(this.state)
        return (<div className="App grid-container">

            <div className="flex-container grid-item">
                    <h1> This is a fancy title! </h1>
            </div>

            <div className="category grid-item">
                { Object.keys(this.state.files)
                .map(category => <Categories category={ category } categories={ this.state.files } onChangeCategory={this.onChangeCategory}/>) }
            </div>

            <div className="media">
                <Media categories={this.state.files} textCurrentCat={this.state.textCurrentCat} textCurrentFile={this.state.textCurrentFile} soundCurrentCat={this.state.soundCurrentCat} soundCurrentFile={this.state.soundCurrentFile} imageCurrentCat={this.state.imageCurrentCat} imageCurrentFile={this.state.imageCurrentFile}/>
                {/* <Categories/> */}
            </div>

            <div className="files">
                { Object.keys(this.state.files).map(
                    // Curse this function. Requires the use of that = this
                    function(type){
                        return Object.keys(that.state.files[type])
                        .filter(cat => cat == that.state[type + "CurrentCat"])
                        .map(cat => <Files category={cat} type={type} categories={that.state.files} onChangeFile={that.onChangeFile} />)
                    })
                }
            </div>

        </div>);
    }
}

export default App;
