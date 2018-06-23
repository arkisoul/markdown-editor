import React, { Component } from 'react';
import MarkdownPan from '../markdown-pan/';
import MarkdownPreview from '../markdown-preview/';
import './index.css';

class Body extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { value: 'Hello, **world**!' };
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    getRawMarkup() {
        const Converter = require('react-showdown').Converter;
        const converter = new Converter();
        converter._converter.setFlavor('github');
        return converter.convert(this.state.value);
    }

    render = () => {
        return(
            <div className="hero-body is-paddingless">
                <div className="container is-fluid is-marginless">
                    <div className="columns">
                        <MarkdownPan onChange={this.handleChange} placeHolder={this.state.value}/>
                        <MarkdownPreview markup={this.getRawMarkup()} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Body;
