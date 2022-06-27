import React, { Component } from 'react'
import Controls from './controls/Controls'
import SaveHash from './save-hash/SaveHash'
import Password from './password/Password'

export default class App extends Component {

    constructor(props) {
        super(props)

        this.onSetLetter = this.onSetLetter.bind(this)
        this.onSetNumber = this.onSetNumber.bind(this)
        this.onSetCharacter = this.onSetCharacter.bind(this)
        this.onSetPaste = this.onSetPaste.bind(this)
        this.onCutHash = this.onCutHash.bind(this)
    }

    arrayPass = []

    state = {
        letterValue: "0",
        numberValue: "0",
        characterValue: "0",
        letters: 'abcdefghijklmnopqrstuvwxyz',
        numbers: '01234567890123456789012345',
        characters: '!@#$%&*?!@#$%&*?!@#$%&*?!@',
        password: '',
        copyPassword: '',
    }

    onCutHash() {
        navigator.clipboard.writeText(this.state.password)
        alert('Copied!')
    }

    onSetPaste(e) {
        this.setState({
            copyPassword: e.target.innerHTML
        })
    }

    onSetCharacter(e) {

        if(this.arrayPass.length <= 26){
            this.arrayPass.push(this.state.characters[parseInt(e.target.value)])
        }

        this.arrayPass = this.arrayPass.sort(() => Math.random() - .5)
        .slice(0, parseInt(e.target.value))
        
        this.setState({
            characterValue: e.target.value,
            password: this.arrayPass.join('')
        })
    }

    onSetNumber(e) {

        if(this.arrayPass.length <= 26){
            this.arrayPass.push(this.state.numbers[parseInt(e.target.value)].toUpperCase())
        }

        this.arrayPass = this.arrayPass.sort(() => Math.random() - .5)
        .slice(0, parseInt(e.target.value))
        
        this.setState({
            numberValue: e.target.value,
            password: this.arrayPass.join('')
        })
    }

    onSetLetter(e) {

        const compareRandom = Math.floor(Math.random() * parseInt(e.target.value))

        if(this.arrayPass.length <= 26){
            if(Math.floor(Math.random() * parseInt(e.target.value)) < compareRandom) {
                this.arrayPass.push(this.state.letters[parseInt(e.target.value)].toUpperCase())
            }else {
                this.arrayPass.push(this.state.letters[parseInt(e.target.value)])
            }
        }
        this.arrayPass = this.arrayPass.sort(() => Math.random() - .5)
        .slice(0, parseInt(e.target.value))
        
        this.setState({
            letterValue: e.target.value,
            password: this.arrayPass.join('')
        })
    }

    render() {
        
        return (
            <div>
                <h1>Gerador de Senhas</h1>
                    <Controls 
                        password={this.state.password}
                        onSetNumber={this.onSetNumber} 
                        onSetLetter={this.onSetLetter} 
                        onSetCharacter={this.onSetCharacter}
                        onSetPaste={this.onSetPaste}
                        characterValue={this.state.characterValue} 
                        numberValue={this.state.numberValue} 
                        letterValue={this.state.letterValue} 
                    />
                    <span>Length: {this.state.password.length}</span>
                <div className="container-password"
                    style={this.state.password.length > 0 ? 
                    {
                        backgroundColor:"white",
                        padding:'.6rem',
                        borderRadius:'.1rem',
                        boxShadow: '-2px 5px 30px -11px #000000'
                    } : 
                    {
                        backgroundColor:"transparent"
                    }}>
                    <Password password={this.state.password} />
                </div>
                <SaveHash onCutHash={this.onCutHash} />
            </div>
        )
    }
}