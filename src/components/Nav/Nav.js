import React, {Component} from 'react';
import brandMark from '../../assets/redbubble.ai';


export default class Nav extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="nav-wrapper">
                <div className="main-nav">
                    <img className="brand-mark" src={brandMark} />
                    <span className="brand-name">redbubble</span>
                    <a href={ process.env.REACT_APP_LOGIN }><button>Log in</button></a>
                    <i>cart</i>
                </div>
                <div>
                    <input type="text" />
                </div>
            </div>
        )
    }
}