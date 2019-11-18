import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import CoffeeManagementPage from './components/CoffeeManagementPage';
import './App.css';

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <header className='App-header'>
            <h3>Coffee This Week</h3>
          </header>
          <CoffeeManagementPage />
          <footer className='App-footer'></footer>
        </div>
      </Provider>
    );
  }
}

export default App;
