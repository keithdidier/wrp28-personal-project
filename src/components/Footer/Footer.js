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
                    <div className="footer-links-links-global">
                        <span className="footer-links-links-copyright">&copy;2017 Keith Didier</span>
                    </div>
                    <div className="brand-icons">
                        <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
                        <i class="fa fa-facebook-official fa-2x" aria-hidden="true"></i>
                        <i class="fa fa-twitter fa-2x" aria-hidden="true"></i>
                        <i class="fa fa-tumblr fa-2x" aria-hidden="true"></i>
                        <i class="fa fa-pinterest-p fa-2x" aria-hidden="true"></i>
                    </div>
                </footer>
            </div>
        )
    }
}