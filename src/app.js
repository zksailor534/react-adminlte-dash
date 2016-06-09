import React from 'react';
import ReactDOM from 'react-dom';
import { Logo, NavBar } from '.';

const targetId = 'render-target';

// Create target element
const component = function (target) {
  const element = document.createElement('div');
  element.id = target;
  return element;
};

// Add target element to body
document.body.appendChild(component(targetId));

// Render React components in element
ReactDOM.render(
  <header>
    <Logo />
    <NavBar />
  </header>,
  document.getElementById(targetId)
);
