
import React from 'react';
import Layout from '../../components/Layout';
import Hardware from './Hardware';

const title = 'Hardware';

export default {

  path: '/hardware',

  action() {
    return {
      title,
      component: <Layout><Hardware title={title} /></Layout>,
    };
  },

};
