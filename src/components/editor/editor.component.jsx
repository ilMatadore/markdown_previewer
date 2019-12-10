import React from 'react';
import './editor.styles.css';


class Editor extends React.Component{
    constructor(props) {
        super(props)
    }

    handleTextChange = (e) => {
        this.props.onTextChange(e.target.value);
    }

render() {
  return (
    <div>
        <h1>EDITOR</h1>
        <textarea id="editor" onChange={this.handleTextChange} placeholder="Enter markdown"value={this.props.value}></textarea>
    </div>
  );
}
}
export default Editor;

