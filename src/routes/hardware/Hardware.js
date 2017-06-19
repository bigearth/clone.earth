
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Hardware.css';
import { Grid, Row, Col, Button, Image } from 'react-bootstrap';
import Link from '../../components/Link';

class Hardware extends React.Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12} md={6}>
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
                  <Link to="/heatbed-assembly">Heatbed assembly</Link>
                </li>
                <li>
                  <Link to="/electronics-assembly">Electronics assembly</Link>
                </li>
                <li>
                  <Link to="/credits">Credits</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/hardware/hardware.jpg' />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default withStyles(s)(Hardware);
