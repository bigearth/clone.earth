
import React from 'react';
import Layout from '../../components/Layout';
import Donate from './Donate';

const title = 'Donate Clone';

export default {

  path: '/donate',

  action() {
    return {
      title,
      component: <Layout><Donate title={title} /></Layout>,
    };
  },

};
