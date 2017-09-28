
import React from 'react';
import Layout from '../../components/Layout';
import Donate from './Donate';

const title = 'Donate Clone';

export default {

  path: '/donate',

  action() {
    return {
      title,
      component: <Layout><Donate paypal='https://www.paypal.me/CloneEARTH' shapeshift='https://shapeshift.io/shifty.html?destination=14xYtMKXSdJ5TKwTcdXkbPAwsnuEkhGJ6b&output=BCH' /></Layout>,
    };
  },

};
