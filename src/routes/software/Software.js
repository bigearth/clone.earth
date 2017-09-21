
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Software.css';
import { Grid, Row, Col } from 'react-bootstrap';

class Software extends React.Component {
  render() {
    return (
      <Grid fluid>
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <h2>Software</h2>
            <h3>High Level Overview</h3>
            <img src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/software/software.gif' />
          </Col>
          <Col xs={12} md={6}>
            <h3>User</h3>
            <ul>
              <li>my.clone.earth
                <ul>
                  <li><a href='https://cli.angular.io/'>ng2</a></li>
                </ul>
              </li>
              <li><a href='https://facebook.github.io/react-native/'>React Native</a>
                <ul>
                  <li>iOS</li>
                  <li>Android</li>
                </ul>
              </li>
            </ul>
            <h3>Clone Cloud Services</h3>
            <ul>
              <li>api.clone.earth
                <ul>
                  <li><a href='https://expressjs.com/'>Express</a>
                  </li>
                </ul>
              </li>
              <li>mqtt.clone.earth
                <ul>
                  <li><a href='https://github.com/mqttjs'>mqttjs</a></li>
                </ul>
              </li>
            </ul>
            <h3>Clone Device</h3>
            <h4>CloneOS</h4>
            <ul>
              <li><a href="https://github.com/bigearth/cloneos">CloneOS</a></li>
              <li><a href="http://nerves-project.org/">Nerves</a></li>
              <li><a href="https://elixir-lang.org/">Elixir</a></li>
              <li><a href="https://www.raspberrypi.org/products/raspberry-pi-3-model-b/">Raspberry Pi</a></li>
            </ul>
            <h4>Marlin Firmware</h4>
            <ul>
              <li><a href="http://marlinfw.org/">Marlin</a></li>
              <li><a href="http://www.arduino.org/">Arduino</a></li>
            </ul>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default withStyles(s)(Software);
