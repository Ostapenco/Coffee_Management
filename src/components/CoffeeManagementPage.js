import React, { Component } from 'react';
import CoffeeManagement from './CoffeeManagement';
import { connect } from 'react-redux';

class CoffeeManagementPage extends Component {
  render() {
    return (
      <div>
        <h2>How many cups of coffee do we drink per week?</h2>
        {this.props.colleagues.map(colleague => (
          <CoffeeManagement
            key={colleague.id}
            name={colleague.name}
            coffee={colleague.coffee}
          />
        ))}
        <br />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  colleagues: state.coffees.colleagues
});

export default connect(mapStateToProps, null)(CoffeeManagementPage);
