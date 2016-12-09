import React from 'react';
import Markdown from 'react-remarkable';

import './Documentation.css';

const readme = require('../README.md');

const Documentation = () => (
  <div className="content-wrapper">
    <section className="content-header">
      <h1>Documentation</h1>
    </section>
    <section className="content">
      <Markdown source={readme} />
    </section>
  </div>
);

export default Documentation;
