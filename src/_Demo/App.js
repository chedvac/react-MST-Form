import React, { Component } from 'react';
import './App.css';
import rootStore from './rootStore';
import ComponentsDemo from './ComponentsDemo';
import {observer, Provider} from 'mobx-react';
window.rootStore=rootStore;

@observer

class App extends Component {
  render() {
    return (
      <Provider rootStore={rootStore}>
        <div className="App">
          <header >
          </header>
          <ComponentsDemo />
        </div>
      </Provider>
    );
  }
}

export default App;
