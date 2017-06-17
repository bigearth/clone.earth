
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import { Jumbotron, Grid, Row, Col, Button, Image } from 'react-bootstrap';

class Home extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <Image src="https://i.imgur.com/BOmItZ3.jpg" thumbnail />
      </div>
    );
  }
}

export default withStyles(s)(Home);
