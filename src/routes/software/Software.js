
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
              <h3>User</h3>
              <ul>
                <li>my.clone.earth
                  <ul>
                    <li>react-starter-kit</li>
                    <li>need to handle sessions</li>
                  </ul>
                </li>
                <li>react-native app
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
                    <li>Best REST framework?
                      <ul>
                        <li>Rails is my default choice</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>mqtt.clone.earth
                  <ul>
                    <li>framework?</li>
                    <li>lib?</li>
                  </ul>
                </li>
              </ul>
              <h3>Clone Device</h3>
              <h4>CloneOS</h4>
              <ul>
                <li><a href="https://github.com/bigearth/cloneos">https://github.com/bigearth/cloneos</a></li>
                <li><a href="http://nerves-project.org/">http://nerves-project.org/</a></li>
                <li><a href="https://elixir-lang.org/">https://elixir-lang.org/</a></li>
                <li><a href="https://www.raspberrypi.org/products/raspberry-pi-3-model-b/">https://www.raspberrypi.org/products/raspberry-pi-3-model-b/</a></li>
              </ul>
              <h4>Marlin Firmware</h4>
              <ul>
                <li><a href="http://marlinfw.org/">http://marlinfw.org/</a></li>
                <li><a href="http://www.arduino.org/">http://www.arduino.org/</a></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default withStyles(s)(Software);
