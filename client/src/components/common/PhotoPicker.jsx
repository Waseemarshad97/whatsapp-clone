import React from "react";
import ReactDOM from "react-dom";

function PhotoPicker({ onchange }) {
  const Component = (
    <input type="file" hidden id="photo-picker" onChange={onchange} />
  );

  return ReactDOM.createPortal(
    Component,
    document.getElementById("photo-picker-element")
  );
}

export default PhotoPicker;
