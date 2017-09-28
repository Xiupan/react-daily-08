import React, { Component } from 'react';
import '../styles/App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import BaseLayout from './BaseLayout'
import Home from './Home'
import Portfolio from './Portfolio'
import About from './About'
import Contact from './Contact'
import References from './References'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <BaseLayout>
            <Route path="/" exact component={Home}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/references" component={References}/>
          </BaseLayout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
