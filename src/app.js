import React from 'react';
import ReactDOM from 'react-dom';
import { Logo,
  NavBar } from '.';

// Create target element
const target = document.createElement('div');
target.id = 'render-target';
document.body.appendChild(target);

class Demo extends React.Component {
  /* eslint no-alert: 0 */
  render() {
    return (
      <header>
        <Logo />
        <NavBar />
      </header>
    );
  }
}

// Render React components in element
ReactDOM.render(
  <Demo />,
  document.getElementById('render-target')
);
