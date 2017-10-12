import React, { Component } from 'react';
import router from './router';
import './App.css';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        
        {router}

        <Footer />
      </div>
    );
  }
}

export default App;
