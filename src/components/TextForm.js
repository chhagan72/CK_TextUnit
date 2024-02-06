import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLClick = ()=>{
        // console.log("Uppercase was clicked"+text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleCLearClick = ()=>{
        // console.log("Uppercase was clicked"+text);
        let newText = "";
        setText(newText)
    }
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }
const [text, setText] = useState("");
  return (
    <>
    <div className='container'>

        <h1>{props.heading}</h1>
        <div className="mb-3 ">
        {/* <label for="MyBox" class="form-label">Example textarea</label> */}
        <textarea className="form-control" id="MyBox" value={text} onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-danger mx-3" onClick={handleLClick}>Convert to Lowercase</button>
        <button className="btn btn-success mx-3" onClick={handleCLearClick}>Clear text</button>
    </div>
    <div className="container">
        <h1>Your text summry</h1>
        <p>{text.split(" ").length} words And {text.length}</p>
    </div>
    </>
  )
}
