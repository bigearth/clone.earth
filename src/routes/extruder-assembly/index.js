
import React from 'react';
import Layout from '../../components/Layout';
import ExtruderAssembly from './ExtruderAssembly';

const title = 'Extruder Assembly';

export default {

  path: '/extruder-assembly',

  action() {
    return {
      title,
      component: <Layout><ExtruderAssembly title={title} /></Layout>,
    };
  },

};
