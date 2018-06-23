import React, { Component } from 'react';
import MarkdownEditor from '../markdown-editor/';
import './index.css';

class MarkdownPan extends Component {
    render() {
        return(
            <div className="Markdown-pan column">
                <MarkdownEditor onChange={this.props.onChange} placeHolder={this.props.placeHolder}/>
            </div>
        )
    }
}

export default MarkdownPan;
