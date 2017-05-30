
import React from 'react';
import Layout from '../../components/Layout';
import YAxisAssembly from './YAxisAssembly';

const title = 'Y Axis Assembly';

export default {

  path: '/y-axis-assembly',

  action() {
    return {
      title,
      component: <Layout><YAxisAssembly title={title} /></Layout>,
    };
  },

};
