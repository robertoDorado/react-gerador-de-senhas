import React, { Component } from 'react'

export default class Password extends Component {

    verifyCharacter(char) {
        if(char.match(/[a-zA-Z]+/)) return 'class-letters'
        if(char.match(/\d+/)) return 'class-numbers'
        return 'class-special-chars'
    }

    render() {

        return(
            <React.Fragment>
                {Array.from(this.props.password).map((char) => {
                    return(
                        <span 
                        key={Math.random()} 
                        className={this.verifyCharacter(char)}
                        >{char}</span>
                    )
                })}
            </React.Fragment>
        )

    }
}