
import React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import { HashRouter as Router } from 'react-router-dom';

import { JcdApp } from './app/app';

import './main.scss';

const Index = () => {
  return (
    <Router>
      <JcdApp/>
    </Router>
  );
};

ReactDOM.render(<Index />, document.getElementById('app-root'));
