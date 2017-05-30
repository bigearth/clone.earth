
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './HeatbedAssembly.css';
import { Jumbotron, Grid, Row, Col, Button } from 'react-bootstrap';
import Link from '../../components/Link';

class HeatbedAssembly extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <div>
              <h2>Heatbed Assembly</h2>
              <p>Coming Soon</p>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default withStyles(s)(HeatbedAssembly);
