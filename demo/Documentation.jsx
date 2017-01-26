import React from 'react';
import Markdown from 'react-remarkable';

import './Documentation.css';

const readme = require('../README.md');

const Documentation = () => (
  <div className="skeleton" style={{ paddingTop: '25px' }}>
    <section className="container">
      <h1>Documentation</h1>
    </section>
    <section className="container">
      <Markdown source={readme} />
    </section>
  </div>
);

export default Documentation;
