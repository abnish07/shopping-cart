import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Routes from './CommonRoute/Routes';
import {Provider} from 'react-redux';
import store from './Redux/store';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Navbar/>
          <Routes />
          </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
