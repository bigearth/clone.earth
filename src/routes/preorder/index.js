
import React from 'react';
import Layout from '../../components/Layout';
import Preorder from './Preorder';

const title = 'Preorder';

export default {

  path: '/preorder',

  action() {
    return {
      title,
      component: <Layout><Preorder paypal='https://www.paypal.me/CloneEARTH' title={title} /></Layout>,
    };
  },

};
