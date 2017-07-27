import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';

import { renderRoutes } from '../imports/router.js';

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('app'));
});