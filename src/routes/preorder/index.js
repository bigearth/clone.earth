
import React from 'react';
import Layout from '../../components/Layout';
import Preorder from './Preorder';

const title = 'Preorder';

export default {

  path: '/preorder',

  action() {
    return {
      title,
      component: <Layout><Preorder title={title} /></Layout>,
    };
  },

};
