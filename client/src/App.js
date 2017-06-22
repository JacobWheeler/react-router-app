import React, { Component } from 'react';
import logo from './logo.svg';
import Home from './components/Home';

const App = () => (
  <Route exact path="/" component={Home} />
);

export default App;
