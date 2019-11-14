import React, { Component } from 'react';

export class CoffeeManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coffee: 0,
      addCoffee: 0
    };
  }

  handleChange(e) {
    this.setState({
      addCoffee: parseInt(e.target.value)
    });
  }

  handleClick = () => {
    this.setState({
      coffee: this.state.coffee + this.state.addCoffee
    });
  };

  render() {
    return (
      <div>
        <form>
          <h2>
            <br />
            {this.props.name} - {this.state.coffee} <br />
            <input
              className='coffee'
              type='number'
              name='value'
              placeholder='coffee...'
              value={this.state.addCoffee}
              onChange={e => this.handleChange(e)}
            />
            <button onClick={this.handleClick}>Add coffee</button>
          </h2>
        </form>
      </div>
    );
  }
}
