
import React from 'react';
import Layout from '../../components/Layout';
import HeatbedAssembly from './HeatbedAssembly';

const title = 'Heatbed Assembly';

export default {

  path: '/heatbed-assembly',

  action() {
    return {
      title,
      component: <Layout><HeatbedAssembly title={title} /></Layout>,
    };
  },

};
