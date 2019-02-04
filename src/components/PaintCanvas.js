import React, { Component } from 'react'
import Square from './Square'
import ColorPicker from './ColorPicker'

class PaintCanvas extends Component{
    constructor(){
        super()

        this.state = {
            selectedColor: `blue`,
            drawing: false
        }
        // this.handleColorChange = this.handleColorChange.bind(this)
        // using the arrow function binds 'this' for us
    }

    toggleDrawing = () => {
        this.setState({
            drawing: !this.state.drawing
        })
    }

    handleColorChange = (color) => {
        this.setState({
            selectedColor: color
        })
    }

    draw(){
        let squares = [];
        for(let i=0; i < 5000; i++){
            squares.push(<Square selectedColor={this.state.selectedColor} drawing={this.state.drawing}/>)
        }
        return squares;
    }
    
    render(){
        return(
            <div onMouseDown={ () => this.toggleDrawing()} onMouseUp={() => this.toggleDrawing()}>
                <ColorPicker handleColorChange={this.handleColorChange} />
                <div style={{ display: 'flex', flexWrap: 'wrap'}}>{this.draw()}</div>
            </div>
        )
    }
}

export default PaintCanvas;