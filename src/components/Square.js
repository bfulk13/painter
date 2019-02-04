import React, { Component } from 'react'

class Square extends Component{
    constructor(){
        super()

        this.state = {
            backgroundColor: `white`
        }
        this.handleBackgroundChange = this.handleBackgroundChange.bind(this)
    }
    
    handleBackgroundChange() {
        if(this.props.drawing){
            this.setState({
                backgroundColor: this.props.selectedColor
            })
        }
    }


    render() {
        return(
            <div style={{
                height: 10,
                width: `10px`,
                border: '1px solid black',
                background: this.state.backgroundColor
            }} onMouseEnter={this.handleBackgroundChange}>
                
            </div>
        )
    }
}

export default Square;