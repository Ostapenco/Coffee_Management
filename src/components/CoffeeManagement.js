import React, { Component } from 'react';
import { addCoffee } from '../actions/coffeeActions';
import { connect } from 'react-redux';

class CoffeeManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newCoffee: 0
    };
  }

  handleClick() {
    const { onAddCoffee, name } = this.props;
    const { newCoffee } = this.state;
    onAddCoffee(name, newCoffee);
  }

  render() {
    return (
      <div>
        <form>
          <h2>
            <br />
            {this.props.name} - {this.props.coffee} <br />
            <input
              className='coffee'
              type='number'
              name='value'
              placeholder='coffee...'
              value={this.state.newCoffee}
              onChange={e =>
                this.setState({
                  newCoffee: parseInt(e.target.value)
                })
              }
            />
            <button
              className='btn btn-danger m-2'
              type='button'
              onClick={() => this.handleClick()}
            >
              Add coffee
            </button>
          </h2>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onAddCoffee: (name, count) => dispatch(addCoffee(name, count))
});

export default connect(null, mapDispatchToProps)(CoffeeManagement);
