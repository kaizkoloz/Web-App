import React, { Component } from 'react';

export class Box extends Component
{
    state = {
        inputText: '',
    }

    SelectBox = (e) =>
    {
        this.setState({inputText: e.target.value});
    }

    render() {
        var list = [];
        for (var i = 1; i <= this.state.inputText; i++) {
            list.push(<Box key={i} text={i}/>);
        }
        return (
            <div className="notification .is-white">
                <div className="select">
                    <select id="listitems" onChange={this.SelectBox} value={this.state.inputText}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                    </select>
                </div>
                <div className="column">
                    <div className="column notification is-success has-text-centered">
                    {this.props.text}
                    </div>
                </div>
                <div className="column App-body">{list}</div>
            </div>
        );
    }
}
