
import React from 'react';
import Layout from '../../components/Layout';
import ElectronicsAssembly from './ElectronicsAssembly';

const title = 'Electronics Assembly';

export default {

  path: '/electronics-assembly',

  action() {
    return {
      title,
      component: <Layout><ElectronicsAssembly title={title} /></Layout>,
    };
  },

};
