
import React from 'react';
import Layout from '../../components/Layout';
import XAxisAssembly from './XAxisAssembly';

const title = 'X Axis Assembly';

export default {

  path: '/x-axis-assembly',

  action() {
    return {
      title,
      component: <Layout><XAxisAssembly title={title} /></Layout>,
    };
  },

};
