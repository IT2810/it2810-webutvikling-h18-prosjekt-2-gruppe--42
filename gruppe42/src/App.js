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
                        0: "Resources/Sound/buzz.mp3",
                        1: "Resources/Sound/cyberrace.mp3",
                        2: "Resources/Sound/desertshimmer.mp3",
                        3: "Resources/Sound/funmusic.mp3",
                        files:["Buzz", "Cyberrace", "Desert", "Fun"]
                    },
                    cat2: {
                        0: "Resources/Sound/goofymusic.mp3",
                        1: "Resources/Sound/melodyloopmix.mp3",
                        2: "Resources/Sound/musicbox.mp3",
                        3: "Resources/Sound/musicboxmelody1.mp3",
                        files:["Goofy", "Mix", "Box", "Melody"]
                    },
                    cat3: {
                        0: "Resources/Sound/mysticalmusic.mp3",
                        1: "Resources/Sound/narimasumusicfestival.mp3",
                        2: "Resources/Sound/obonfestivalmusic.mp3",
                        3: "Resources/Sound/playfulmusic.mp3",
                        files:["Mystical", "Narimasu", "Obon", "Playful"]
                    }
                },
                text: {
                    cat1: {
                        0: "Resources/Text/fifty-five.json",
                        1: "Resources/Text/fifty-four.json",
                        2: "Resources/Text/fifty-four2.json",
                        3: "Resources/Text/fifty.json",
                        files:["Grounded", "Redecorate", "Favors", "Waters"]
                    },
                    cat2: {
                        0: "Resources/Text/forty-five.json",
                        1: "Resources/Text/forty-five2.json",
                        2: "Resources/Text/forty-seven.json",
                        3: "Resources/Text/thirty-eight.json",
                        files:["Pleasure", "Music", "Desert", "Beauty"]
                    },
                    cat3: {
                        0: "Resources/Text/thirty-five.json",
                        1: "Resources/Text/thirty-four.json",
                        2:"Resources/Text/thirty-nine.json",
                        3: "Resources/Text/thirty-one.json",
                        files:["Joy", "Moonlight", "Lovely", "Singing"]
                    }
                },
                image: {
                    cat1: {
                        0: "Resources/Images/img1.svg",
                        1: "Resources/Images/img2.svg",
                        2: "Resources/Images/img3.svg",
                        3: "Resources/Images/img4.svg",
                        files:["Flower", "London2012", "Circle Tree", "Elephant"]

                    },
                    cat2: {
                        0: "Resources/Images/img5.svg",
                        1: "Resources/Images/img6.svg",
                        2: "Resources/Images/img7.svg",
                        3: "Resources/Images/img8.svg",
                        files:["Fancy Gear", "Tentacles", "Dragon", "Flower"]

                    },
                    cat3: {
                        0: "Resources/Images/img9.svg",
                        1: "Resources/Images/img10.svg",
                        2: "Resources/Images/img11.svg",
                        3: "Resources/Images/img12.svg",
                        files:["Butterfly", "5 Cogs", "Carpet", "Magic"]

                    },
                }
            },
            soundCurrentCat: "cat1",
            imageCurrentCat: "cat1",
            textCurrentCat: "cat1",

            soundCurrentFile: "0",
            imageCurrentFile: "0",
            textCurrentFile: "0",
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
        console.log(e,' cat')
        this.setState({
            // The [currentCat] forces the key to be treated as a variable when being changed instead of the name currentCat itself
            [currentCat]: e[1]
        }) // You can't use .then() after setState, but can add a callback after setState is done like this
    }

    onChangeFile(e) {
        this.setState({
            "textCurrentFile": e[1],
            "soundCurrentFile": e[1],
            "imageCurrentFile": e[1]
        })
    }

    render() {
        let that = this
        console.log(this.state)
        return (<div className="App grid-container">
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
                                onChangeCategory={this.onChangeCategory}/>) }
            </div>

            <div className="media">
                <Media 
                categories={this.state.files} 
                textCurrentCat={this.state.textCurrentCat} 
                textCurrentFile={this.state.textCurrentFile} 
                soundCurrentCat={this.state.soundCurrentCat} 
                soundCurrentFile={this.state.soundCurrentFile} 
                imageCurrentCat={this.state.imageCurrentCat} 
                imageCurrentFile={this.state.imageCurrentFile}/>
                {/* <Categories/> */}
            </div>

            <div className="files">
                {/* { Object.keys(this.state.files).map(
                    // Curse this function. Requires the use of that = this
                    function(type){
                        return Object.keys(that.state.files[type]).filter(cat => cat == that.state[type 
                            + "CurrentCat"]).map(cat => <Files 
                            category={cat} type={type} 
                            categories={that.state.files} 
                            onChangeFile={that.onChangeFile} />)
                    })
                } */}
                <Files 
                    sound={this.state.files['sound'][this.state.soundCurrentCat]} 
                    image={this.state.files['image'][this.state.imageCurrentCat]} 
                    text={this.state.files['text'][this.state.textCurrentCat]}
                    onChangeFile={that.onChangeFile} />
            </div>

        </div>);
    }
}

export default App;
