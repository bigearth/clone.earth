
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Software.css';
import { Jumbotron, Grid, Row, Col, Button } from 'react-bootstrap';

class Software extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <div>
              <h2>Software</h2>
              <h3>High Level Overview</h3>
              <img src='https://i.imgur.com/PBwvDJc.gif' />
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default withStyles(s)(Software);
