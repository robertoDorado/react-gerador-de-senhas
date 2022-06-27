import React, { Component } from 'react'

export default class SaveHash extends Component {

    render() {
        return(
            <div className='wrap-save-btn'>
                <button onClick={this.props.onCutHash} className='save-btn'>Save hash</button>
            </div>
        )
    }
}