import React, { useState } from 'react'

export default function Textform(props) {
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }
    const handleSentenceClick = () => {
        let newText = text[0].toUpperCase() + text.slice(1, text.length);
        setText(newText);
        props.showAlert("Converted to sentencecase", "success");
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared", "success");
    }
    const handleExtraSpacesClick = () => {
        let newText = text.split(/[ ]+ /);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }
    const [text, setText] = useState('Enter text here')
    return (
        <>
            <div className='mt-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }} id="myBox" rows="5"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleSentenceClick}>Convert to Sentencecase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>clear</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpacesClick}>Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h4>Your Text Sumarry</h4>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p> {.008 * text.split(" ").length} minutes required to read the above text</p>
                <h4>Preview</h4>
                <p>{text}</p>
            </div>
        </>
    )
}
