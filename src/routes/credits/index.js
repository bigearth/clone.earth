
import React from 'react';
import Layout from '../../components/Layout';
import Credits from './Credits';

const title = 'Credits';

export default {

  path: '/credits',

  action() {
    return {
      title,
      component: <Layout><Credits title={title} /></Layout>,
    };
  },

};
