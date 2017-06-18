
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import { Image } from 'react-bootstrap';

class Home extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className='headerCopy'>
          <h1>Clone</h1>
          <h2>Make your world</h2>
        </div>
        <Image src="https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/home.jpg" thumbnail />
      </div>
    );
  }
}

export default withStyles(s)(Home);
