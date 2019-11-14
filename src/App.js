import React, { Component } from 'react';
import CoffeeManagementPage from './components/CoffeeManagementPage';
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colleagues: [
        {
          id: 1,
          name: 'Mike',
          coffee: 3
        },
        {
          id: 2,
          name: 'Jake',
          coffee: 4
        },
        {
          id: 3,
          name: 'Jenn',
          coffee: 5
        }
      ]
    };
  }
  render() {
    const { colleagues } = this.state;
    return (
      <div className='App'>
        <header className='App-header'>
          <h3>Coffee This Week</h3>
        </header>
        <CoffeeManagementPage colleagues={colleagues} />
        <footer className='App-footer'></footer>
      </div>
    );
  }
}

export default App;
