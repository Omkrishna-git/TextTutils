import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("UpperCase was Clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case ", "success");
  };

  const handleLoClick = () => {
    console.log("LowerCase was Clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case ", "success");
  };

  const handleClearClick = () => {
    console.log("ClearAll was Clicked " + text);
    setText("");
    props.showAlert("Empty ", "success");
  };

  const handleOnChange = (event) => {
    console.log("OnChange !");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text Here");

  return (
    <>
      <div className="container">
        <div className="mb-3 my-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <h2>Enter Text to analyze</h2>
          </label>

          <textarea
            value={text}
            onChange={handleOnChange}
            className="my-4 form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            style={{
              backgroundColor: props.mode === "#051921" ? "#579591" : "white",
              color: props.mode === "#051921" ? "white" : "#051921",
            }}
          ></textarea>

          <button
            className="my-4 btn btn-primary"
            onClick={handleUpClick}
            aria-label="Convert to UpperCase"
          >
            Convert to UpperCase
          </button>

          <button
            className="my-4 mx-4 btn btn-primary"
            onClick={handleLoClick}
            aria-label="Convert to LowerCase"
          >
            Convert to LowerCase
          </button>

          <button
            className="my-4 mx-2 btn btn-primary"
            onClick={handleClearClick}
            aria-label="Clear All"
          >
            Clear All
          </button>
        </div>
      </div>

      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words, {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read your data</p>
        <h2>Preview </h2>
        <p>{text}</p>
      </div>
    </>
  );
}
