
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './About.css';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import Link from '../../components/Link';

class About extends React.Component {
  render() {
    return (
      <Grid fluid className={s.root}>
        <Row>
          <Col xs={12} md={6}>
            <h2>Created By EARTH</h2>
            <h3>Based in San Francisco</h3>
            <h4>Contact</h4>
            <a href='mailto:connect@clone.earth'>connect@clone.earth</a>
            <h4>Facebook</h4>
            <a href='https://www.facebook.com/cloneearth/'>CloneEarth</a>
            <h4>Twitter</h4>
            <a href='https://www.twitter.com/clone_earth/'>@Clone_Earth</a>
          </Col>
          <Col xs={12} md={6}>
            <Image src="https://i.imgur.com/BOmItZ3.jpg" thumbnail />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default withStyles(s)(About);
