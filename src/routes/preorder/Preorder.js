
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Preorder.css';
import { Grid, Row, Col, Button, Image } from 'react-bootstrap';

class Preorder extends React.Component {
  render() {
    return (
      <Grid fluid className={s.root}>
        <Row>
          <Col xs={12}>
            <h2>Coming Soon</h2>
            <p>Thanks for being so enthusiastic! We appreciate it. Check back soon.</p>
            <Image src="https://s-media-cache-ak0.pinimg.com/originals/ce/3d/15/ce3d157d84562d1fcc45ac2e46cd363f.jpg" />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default withStyles(s)(Preorder);
