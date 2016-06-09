import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from '.';

// Import jquery scripts
import 'admin-lte/dist/js/app.min.js';

// Import styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/adminlte.scss';

// add classes to body <<TO BE REMOVED>>
document.body.className = 'hold-transition skin-blue sidebar-mini';

// Create target element
const target = document.createElement('div');
target.id = 'render-target';
target.className = 'wrapper';
document.body.appendChild(target);

// Render React components in element
ReactDOM.render(
  <Navbar />,
  document.getElementById('render-target')
);
