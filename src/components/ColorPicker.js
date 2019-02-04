import React from 'react'

export default function ColorPicker(props){
    return(
        <div>
            <button onClick={() => props.handleColorChange(`blue`)}>blue</button>
            <button onClick={() => props.handleColorChange(`yellow`)}>yellow</button>
            <button onClick={() => props.handleColorChange(`green`)}>green</button>
            <button onClick={() => props.handleColorChange(`purple`)}>purple</button>
            <button onClick={() => props.handleColorChange(`red`)}>red</button>
        </div>
    )
}