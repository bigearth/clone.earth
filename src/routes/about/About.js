
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
            <p>We believe in humans and machines working together to bring EARTH in to balance. We believe in biomimicry.</p>
            <p>We believe in open source, open minds and open hearts. We believe the arch of history bends towards justice.</p>
            <p>What do you believe?</p>
            <h4>Contact</h4>
            <a href='mailto:connect@clone.earth'>connect@clone.earth</a>
            <h4>Facebook</h4>
            <a href='https://www.facebook.com/cloneearth/'>CloneEarth</a>
            <h4>Twitter</h4>
            <a href='https://www.twitter.com/clone_earth/'>@Clone_Earth</a>
          </Col>
          <Col xs={12} md={6}>
            <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/home.jpg'>
              <Image src="https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/home.jpg" thumbnail />
            </a>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default withStyles(s)(About);
