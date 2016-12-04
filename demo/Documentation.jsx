import React from 'react';
import ReactMarkdown from 'react-markdown';

const readme = require('../README.md');

const Documentation = () => (
  <div className="content-wrapper">
    <section className="content-header">
      <h1>Documentation</h1>
    </section>
    <section className="content">
      <ReactMarkdown source={readme} />
    </section>
  </div>
);

export default Documentation;
