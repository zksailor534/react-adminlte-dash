import React from 'react';
import Markdown from 'react-remarkable';

import './Documentation.css';

const readme = require('../README.md');

const Documentation = () => (
  <div>
    <section>
      <h1>Documentation</h1>
    </section>
    <section>
      <Markdown source={readme} />
    </section>
  </div>
);

export default Documentation;
