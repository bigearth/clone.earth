
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Hardware.css';
import { Jumbotron, Grid, Row, Col, Button } from 'react-bootstrap';

class Hardware extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <div>
              <h2>Hardware</h2>
              <p>Hardware overview coming soon.</p>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default withStyles(s)(Hardware);
