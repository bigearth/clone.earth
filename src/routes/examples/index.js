
import React from 'react';
import Layout from '../../components/Layout';
import Examples from './Examples';

const title = 'Examples Clone';

export default {

  path: '/examples',

  action() {
    return {
      title,
      component: <Layout><Examples title={title} /></Layout>,
    };
  },

};
