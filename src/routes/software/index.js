
import React from 'react';
import Layout from '../../components/Layout';
import Software from './Software';

const title = 'Software';

export default {

  path: '/software',

  action() {
    return {
      title,
      component: <Layout><Software title={title} /></Layout>,
    };
  },

};
