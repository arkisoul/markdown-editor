import React, { Component } from 'react';
import './index.css';

class MarkdownEditor extends Component {
    render = () => {
        return (
            <textarea defaultValue={this.props.placeHolder} className="Pan textarea" onChange={this.props.onChange}></textarea>
        )
    }
}

export default MarkdownEditor;
