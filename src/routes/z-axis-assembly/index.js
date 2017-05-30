
import React from 'react';
import Layout from '../../components/Layout';
import ZAxisAssembly from './ZAxisAssembly';

const title = 'Z Axis Assembly';

export default {

  path: '/z-axis-assembly',

  action() {
    return {
      title,
      component: <Layout><ZAxisAssembly title={title} /></Layout>,
    };
  },

};
