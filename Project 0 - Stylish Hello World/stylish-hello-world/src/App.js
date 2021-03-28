import React, { Component } from 'react';
import './index.js';
import './App.scss';

class App extends Component 
{
  render() 
  {
    return(
    <div className="App">
          <StylishHelloWorld/>
          <Navigation/>
    </div>);
  }

}

function StylishHelloWorld()
{return( 
    <div className="stylish-hello-world">
        <h2> Stylish </h2>
        <h1> Hello World </h1>
    </div>        
);
}

function Navigation()
{return( 
    <div className="navigation">
        <a  target="_blank" rel="noopener noreferrer" href="https://github.com/YunaAnn"><i className="fab fa-github"></i></a>
        <a  target="_blank" rel="noopener noreferrer" href="https://github.com/YunaAnn/FrontEndProjectsReactSass"><i className="fas fa-code"></i></a>
    </div>        
);
}

export default App;
