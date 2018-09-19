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
                    Space: {
                        0: "Resources/Sound/buzz.mp3",
                        1: "Resources/Sound/cyberrace.mp3",
                        2: "Resources/Sound/desertshimmer.mp3",
                        3: "Resources/Sound/funmusic.mp3",
                        files:["Buzz", "Cyberrace", "Desert", "Fun"]
                    },
                    Circus: {
                        0: "Resources/Sound/goofymusic.mp3",
                        1: "Resources/Sound/melodyloopmix.mp3",
                        2: "Resources/Sound/musicbox.mp3",
                        3: "Resources/Sound/musicboxmelody1.mp3",
                        files:["Goofy", "Mix", "Box", "Melody"]
                    },
                    Mystical: {
                        0: "Resources/Sound/mysticalmusic.mp3",
                        1: "Resources/Sound/narimasumusicfestival.mp3",
                        2: "Resources/Sound/obonfestivalmusic.mp3",
                        3: "Resources/Sound/playfulmusic.mp3",
                        files:["Mystical", "Narimasu", "Obon", "Playful"]
                    }
                },
                text: {
                    Fifty: {
                        0: "Resources/Text/fifty-five.json",
                        1: "Resources/Text/fifty-four.json",
                        2: "Resources/Text/fifty-four2.json",
                        3: "Resources/Text/fifty.json",
                        files:["Grounded", "Redecorate", "Favors", "Waters"]
                    },
                    Forty: {
                        0: "Resources/Text/forty-five.json",
                        1: "Resources/Text/forty-five2.json",
                        2: "Resources/Text/forty-seven.json",
                        3: "Resources/Text/thirty-eight.json",
                        files:["Pleasure", "Music", "Desert", "Beauty"]
                    },
                    Thirty: {
                        0: "Resources/Text/thirty-five.json",
                        1: "Resources/Text/thirty-four.json",
                        2:"Resources/Text/thirty-nine.json",
                        3: "Resources/Text/thirty-one.json",
                        files:["Joy", "Moonlight", "Lovely", "Singing"]
                    }
                },
                image: {
                    Savannah: {
                        0: "Resources/Images/img1.svg",
                        1: "Resources/Images/img2.svg",
                        2: "Resources/Images/img3.svg",
                        3: "Resources/Images/img4.svg",
                        files:["Flower", "London2012", "Circle Tree", "Elephant"]

                    },
                    Fractals: {
                        0: "Resources/Images/img5.svg",
                        1: "Resources/Images/img6.svg",
                        2: "Resources/Images/img7.svg",
                        3: "Resources/Images/img8.svg",
                        files:["Fancy Gear", "Tentacles", "Dragon", "Flower"]

                    },
                    Radix: {
                        0: "Resources/Images/img9.svg",
                        1: "Resources/Images/img10.svg",
                        2: "Resources/Images/img11.svg",
                        3: "Resources/Images/img12.svg",
                        files:["Butterfly", "5 Cogs", "Carpet", "Magic"]

                    },
                }
            },
            soundCurrentCat: "Space",
            imageCurrentCat: "Savannah",
            textCurrentCat: "Fifty",

            soundCurrentFile: "0",
            imageCurrentFile: "0",
            textCurrentFile: "0",
        }
        this.onChangeCategory = this.onChangeCategory.bind(this)
        this.onChangeFile = this.onChangeFile.bind(this)
    }

	onChangeCategory(e) {
        // As we want to have three different categories we either need three different functions which are identical except 
        // the file type changed, or make a variable like this. The variable is equal "text"/"sound"/"image" + "CurrentCat"
        let currentCat = e[0] + "CurrentCat"
        console.log(e,' cat')
        this.setState({
            // The [currentCat] forces the key to be treated as a variable when being changed instead of the name currentCat itself
            [currentCat]: e[1]
        }) // You can't use .then() after setState, but can add a callback after setState is done like this
    }

    onChangeFile(e) {
        // Changed the current file to the composition number. E.g. 0 for comp 0, 1 for comp 1 etc. This makes it easy
        // to expand the code in the future
        this.setState({
            "textCurrentFile": e[1],
            "soundCurrentFile": e[1],
            "imageCurrentFile": e[1]
        })
    }

    render() {
        return (<div className="App">
            <div className="grid-container">
            <div className="flex-container grid-item">
                    <h1>
                        {this.state.files.sound[this.state.soundCurrentCat].files[this.state.soundCurrentFile]}
                        {this.state.files.image[this.state.imageCurrentCat].files[this.state.imageCurrentFile]}
                        {this.state.files.text[this.state.textCurrentCat].files[this.state.textCurrentFile]}!
                    </h1>
            </div>

            <div className="category grid-item">
                { Object.keys(this.state.files).map(category =>
                    <Categories category={ category }
                                categories= { this.state.files }
                                onChangeCategory={this.onChangeCategory}/>)
                }
            </div>
                <Media
                categories={this.state.files}
                textCurrentCat={this.state.textCurrentCat}
                textCurrentFile={this.state.textCurrentFile}
                soundCurrentCat={this.state.soundCurrentCat}
                soundCurrentFile={this.state.soundCurrentFile}
                imageCurrentCat={this.state.imageCurrentCat}
                imageCurrentFile={this.state.imageCurrentFile}/>
            <div className="files grid-item">
                <Files
                    sound={this.state.files['sound'][this.state.soundCurrentCat]}
                    image={this.state.files['image'][this.state.imageCurrentCat]}
                    text={this.state.files['text'][this.state.textCurrentCat]}
                    onChangeFile={this.onChangeFile} />
            </div>
            </div>
        </div>);
    }
}

export default App;
