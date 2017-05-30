
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './XAxisAssembly.css';
import { Jumbotron, Grid, Row, Col, Button } from 'react-bootstrap';
import Link from '../../components/Link';

class XAxisAssembly extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <div>
              <h2>X Axis Assembly</h2>
              <h3>Step 1 Gather materials</h3>
              <h4>Tools</h4>
              <ul>
                <li></li>
              </ul>
              <h4>3D printed parts</h4>
              <ul>
                <li>X-carriage</li>
                <li>X-end-motor</li>
                <li>X-end-idler</li>
              </ul>
              <h4>Hardware</h4>
              <ul>
                <li>2.5mm Allen key</li>
                <li>Needle-nose pliers</li>
              </ul>
              <img src='https://i.imgur.com/kNhiBiU.jpg' />
              <hr />
              <h3>Step 2 Assemble the Y-axis rods</h3>
              <h4>Hardware</h4>
              <ul>
                <li></li>
              </ul>
              <ol>
                <li></li>
              </ol>
              <img src='https://i.imgur.com/jdpvRQy.jpg' />
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default withStyles(s)(XAxisAssembly);
