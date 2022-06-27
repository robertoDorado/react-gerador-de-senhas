import React, { Component } from 'react'

export default class Controls extends Component {

    render() {
        return(
            <React.Fragment>
                <div className="container-limit-characters">
                    <span className="characters-name">Caracteres</span>
                    <div className="controls-limit">
                        <input min="0" max="25" onChange={this.props.onSetCharacter} value={this.props.characterValue} type="range" name="limit-characters" id="limit-characters" />
                    </div>
                </div>
                <br />
                <div className="container-limit-numbers">
                    <span className="numbers-name">Números</span>
                    <div className="controls-limit">
                        <input onChange={this.props.onSetNumber} value={this.props.numberValue} min="0" max="25" type="range" name="limit-numbers" id="limit-numbers" />
                    </div>
                </div>
                <br />
                <div className="container-limit-letters">
                    <span className="letters-name">Letras</span>
                    <div className="controls-limit">
                        <input onChange={this.props.onSetLetter} value={this.props.letterValue} min="0" max="25" type="range" name="limit-letters" id="limit-letters" />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}