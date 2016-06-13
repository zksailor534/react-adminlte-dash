import React from 'react';
import ReactDOM from 'react-dom';
import { AdminLTE } from '.';

// Create target element
const target = document.createElement('div');
target.id = 'render-target';
document.body.appendChild(target);

// Render React components in element
ReactDOM.render(
  <AdminLTE />,
  document.getElementById('render-target')
);
