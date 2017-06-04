
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Hardware.css';
import { Jumbotron, Grid, Row, Col, Button } from 'react-bootstrap';
import Link from '../../components/Link';

class Hardware extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <div>
              <h2>Hardware Assembly</h2>
              <ul>
                <li>
                  <a href="https://github.com/bigearth/clone-stls">.stl files for 3D printed parts</a>
                </li>
                <li>
                  <Link to="/y-axis-assembly">Y axis assembly</Link>
                </li>
                <li>
                  <Link to="/x-axis-assembly">X axis assembly</Link>
                </li>
                <li>
                  <Link to="/z-axis-assembly">Z axis assembly</Link>
                </li>
                <li>
                  <Link to="/extruder-assembly">Extruder assembly</Link>
                </li>
                <li>
                  <Link to="/lcd-assembly">LCD assembly</Link>
                </li>
                <li>
                  <Link to="/psu-assembly">PSU assembly</Link>
                </li>
                <li>
                  <Link to="/heatbed-assembly">Heatbed assembly</Link>
                </li>
                <li>
                  <Link to="/electronics-assembly">Electronics assembly</Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default withStyles(s)(Hardware);
