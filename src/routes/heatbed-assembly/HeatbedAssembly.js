
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './HeatbedAssembly.css';
import { Jumbotron, Grid, Row, Col, Button } from 'react-bootstrap';
import Link from '../../components/Link';

class HeatbedAssembly extends React.Component {
  render() {
    return (
      <Grid fluid>
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <h2>Heatbed Assembly</h2>
            <h3>Step 1 Gather materials</h3>
            <h4>Tools</h4>
            <ul>
              <li>2 mm Hex key</li>
              <li>Needle-nose pliers</li>
            </ul>
            <h4>Hardware</h4>
            <ul>
              <li>
                Nuts &amp; Bolts
                <ul>
                  <li>M3x25 screw x4</li>
                  <li>M3 washer x4</li>
                  <li>M3 lock nut x4</li>
                </ul>
              </li>
              <li>
                Miscellaneous
                <ul>
                  <li>Zip tie 10 cm x2</li>
                  <li>Wire Wrap x1</li>
                </ul>
              </li>
            </ul>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default withStyles(s)(HeatbedAssembly);
