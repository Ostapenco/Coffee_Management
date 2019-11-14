import React, { Component } from 'react';
import { CoffeeManagement } from './CoffeeManagement';

export default class CoffeeManagementPage extends Component {
  render() {
    return (
      <div>
        <h2>How many cups of coffee do we drink per week?</h2>
        {this.props.colleagues.map(colleague => (
          <CoffeeManagement key={colleague.id} name={colleague.name} />
        ))}
        <br />
      </div>
    );
  }
}
