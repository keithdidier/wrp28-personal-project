import React, {Component} from 'react';
import banner from '../../assets/samantha-lorette-335011.jpg';
// import findYourThingSVG from '../../assets/hero-find-your-thing-white-2eb1e66a0e92709466788de7729ba12d95d607a65bf9d00d906d6ac1243bb5b2.svg'
import './Landing.css';
import Shop from '../../components/Shop/Products';
import axios from 'axios';


export default class Landing extends Component {
    constructor() {
        super();

        this.state = {
            myProducts: ""
        }
    }

    componentDidMount() {
        axios.get('/api/products').then(res => {
            console.log(res);

            this.setState({
                myProducts: [res.data]
            })
        })
    }

    render() {
        return(
            <div>
                <section className="header">
                    <img className="hero-banner" src={banner} alt="" />
                    {/* <img className="quote-over-banner" src={findYourThingSVG} /> */}
                </section>
                <section className="list-of-products">
                    <h1>Feed</h1>
                    <Shop />
                </section>
            </div>
        )
    }
}