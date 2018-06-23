import React, { Component } from 'react';
import './index.css';

class MarkdownPreview extends Component {
    render = () => {
        return(
            <div className="column">
                <div className="Markdown-preview content">
                    {this.props.markup}
                </div>
            </div>
        )
    }
}

export default MarkdownPreview;
