import React, { Component } from 'react';
import './App.css';
import RefsDemo from './components/RefsDemo';
import CallBackRef from './components/CallBackRef';


class App extends Component {
  render() {
    return (
      <div className="App">
        <RefsDemo />
        <CallBackRef />
        {/* <FocusInput /> */}
      </div>
    );
  }
}

export default App;
