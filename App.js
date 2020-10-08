import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';
import Navbar1 from './components/navbar'
import { BrowserRouter } from 'react-router-dom';
import navbar1 from './components/navbar';


class App extends Component {


  render() {
    
    return (
      <BrowserRouter>
      <div className="App">
         <Main/>
      </div>
      </BrowserRouter>
    );
  }

}


export default App;