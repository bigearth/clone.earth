
import React from 'react';
import Layout from '../../components/Layout';
import PSUAssembly from './PSUAssembly';

const title = 'PSU Assembly';

export default {

  path: '/psu-assembly',

  action() {
    return {
      title,
      component: <Layout><PSUAssembly title={title} /></Layout>,
    };
  },

};
