import React from 'react';

export default class Demo extends React.Component {
  render() {
    return (
      <button className="btn btn-default" onClick={this.easterEgg}>
        click me
        <i className="fa fa-bars"></i>
      </button>
    );
  }
  easterEgg() {
    alert('easter egg');
  }
}
