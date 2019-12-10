import React from 'react';
import './previewer.styles.css';
import '../../converter';

const Previewer = (props) => {
    console.log(props.text)
  return (
    <div>
        <h1>PREVIEWER</h1>
        <div id="preview" dangerouslySetInnerHTML={props.text}></div>
    </div>
  );
}


export default Previewer;