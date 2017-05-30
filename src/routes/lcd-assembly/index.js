
import React from 'react';
import Layout from '../../components/Layout';
import LCDAssembly from './LCDAssembly';

const title = 'LCD Assembly';

export default {

  path: '/lcd-assembly',

  action() {
    return {
      title,
      component: <Layout><LCDAssembly title={title} /></Layout>,
    };
  },

};
