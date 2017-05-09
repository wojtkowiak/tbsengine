import * as React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

Meteor.startup(() => {
  render((<span>lol</span>), document.getElementById('render-target'));
});
