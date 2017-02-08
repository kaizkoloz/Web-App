import React, { Component } from 'react';
import logo from './kmutt.png';
import './App.css';
import './bulma.css';
import {Box} from './Box.js'

class App extends Component {
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
            <section className="hero is-info is-large">
                {/* Hero header: will stick at the top */}
                <div className="hero-head">
                    <header className="nav">
                        <div className="container">
                            <div className="nav-left">
                                <a className="nav-item">
                                    <img src={logo} alt="Logo"/>
                                </a>
                            </div>
                            <span className="nav-toggle">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                            <div className="nav-right nav-menu">
                                <a className="nav-item is-active">Home</a>
                                <a className="nav-item">Examples</a>
                                <a className="nav-item">Documentation</a>
                                <span className="nav-item">
                                    <a className="button is-info is-inverted">
                                        <span className="icon">
                                            <i className="fa fa-github"></i>
                                        </span>
                                        <a className="nav-item">Download</a>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </header>
                </div>

                <div className="hero-body">
                    <p className="control">
                        <span className="select">
                            <select id="listitems" onChange={this.SelectBox} value={this.state.inputText}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                            </select>
                        </span>
                    </p>
                    <div className="column App-body"> {list} </div>
                </div>
                

                {/* Hero footer: will stick at the bottom */}
                <div className="hero-foot">
                    <nav className="tabs is-boxed is-fullwidth">
                        <div className="container">
                            <ul>
                                <li className="is-active"><a>Overview</a></li>
                                <li><a>Modifiers</a></li>
                                <li><a>Grid</a></li>
                                <li><a>Elements</a></li>
                                <li><a>Components</a></li>
                                <li><a>Layout</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </section>
        );
    }
}
export default App;
