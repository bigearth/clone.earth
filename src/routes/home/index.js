
import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';

export default {

  path: '/',

  async action({ fetch }) {
    return {
      title: 'Clone 3D Printer by EARTH',
      component: <Layout><Home /></Layout>,
    };
  },

};
