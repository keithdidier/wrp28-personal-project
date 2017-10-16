import React, {Component} from 'react';
import './Footer.css';

export default class Footer extends Component {
    constructor() {
        super();

    }

    render() {
        return(
            <div>
                <footer className="footer">
                    <ul>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Jobs</li>
                        <li>Contact us</li>
                        <li>Blog</li>
                        <li>Investor centre</li>
                        <li>Returns</li>
                        <li>Help</li>
                    </ul>
                </footer>
            </div>
        )
    }
}