import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import '/node_modules/@blueprintjs/core/dist/blueprint.css';
import '/node_modules/react-mosaic-component/react-mosaic-component.css';
import app from './app.jsx';

Meteor.startup(() => {
  render(<app />, document.getElementById('app'));
});

