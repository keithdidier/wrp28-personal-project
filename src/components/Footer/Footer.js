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
                    <ul className="footer-links">
                        <li className="footer-links-links">About us</li>
                        <li className="footer-links-links">Delivery</li>
                        <li className="footer-links-links">Jobs</li>
                        <li className="footer-links-links">Contact us</li>
                        <li className="footer-links-links">Blog</li>
                        <li className="footer-links-links">Investor centre</li>
                        <li className="footer-links-links">Returns</li>
                        <li className="footer-links-links">Help</li>
                    </ul>
                </footer>
            </div>
        )
    }
}