
import React from 'react';
import Layout from '../../components/Layout';
import Docs from './Docs';

const title = 'Documentation for Clone - EARTH';

export default {

  path: '/docs',

  action() {
    return {
      title,
      component: <Layout><Docs title={title} /></Layout>,
    };
  },

};
