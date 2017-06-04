
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
                <li>Linear Bearings x3</li>
                <li>Chrome rods x2</li>
              </ul>
              <ol>
                <li>Carefully slide linear bearings on rods.</li>
              </ol>
              <hr />
              <h3>Step 3 Prepare the printed parts</h3>
              <h4>Hardware</h4>
              <ul>
                <li>Linear Bearing x4</li>
                <li>X-end-motor</li>
                <li>X-end-idler</li>
              </ul>
              <ol>
                <li>Insert linear bearing into the printed parts.</li>
              </ol>
              <hr />
              <h3>Step 4 Prepare the tension screws</h3>
              <h4>Hardware</h4>
              <ul>
                <li>M3 squre nut x2</li>
                <li>M3x10 screw x2</li>
                <li>X-end-idler</li>
              </ul>
              <ol>
                <li>Insert M3 square nuts and put in place M3x10 screws.</li>
                <li>Avoid overtightening of the screws.</li>
              </ol>
              <hr />
              <h3>Step 5 Assemble the X-axis base</h3>
              <h4>Hardware</h4>
              <ul>
                <li>Assembled y-axis rods</li>
                <li>Prepared printed parts</li>
              </ul>
              <ol>
                <li>Insert the rods with bearings fully into the printed parts.</li>
                <li>Ensure the correct orientation of the parts and rods (rod with 2 bearings must be on the side with the nut trap).</li>
              </ol>
              <hr />
              <h3>Step 6 Preparing the X-end idler</h3>
              <h4>Hardware</h4>
              <ul>
                <li>M3x18 screw x1</li>
                <li>bearing w/ housing x1</li>
                <li>M3 locknuet x1</li>
              </ul>
              <ol>
                <li>Insert the bearing into the X-end idler.</li>
                <li>Secure it in position using M3x18 screw.</li>
                <li>Tighten it with M3 nylock nut, but the idler (wheel) must rotate freely.</li>
              </ol>
              <hr />
              <h3>Step 7 Prepare the X carriage</h3>
              <h4>Hardware</h4>
              <ul>
                <li>X Carriage</li>
                <li>Zip tie x6</li>
              </ul>
              <ol>
                <li>Insert zipties into the X-carriage.</li>
              </ol>
              <hr />
              <h3>Step 8 Placing the X carriage</h3>
              <h4>Hardware</h4>
              <ul>
                <li>Assembled X axis base</li>
                <li>Prepared X Carriage</li>
              </ul>
              <ol>
                <li>Place the X-carriage on the X-axis base.</li>
                <li>Ensure the correct orientation of X-carriage.</li>
                <li>Use pliers to tighten the zipties.</li>
                <li>Use pliers to cut off any excess ziptie.</li>
              </ol>
              <hr />
              <h3>Step 9 Assemble the X Motor</h3>
              <h4>Hardware</h4>
              <ul>
                <li>M3x18 screw x3</li>
                <li>Stepper motor</li>
              </ul>
              <ol>
                <li>Tighten the motor to the X-end-motor part.</li>
                <li>Ensure the correct position of cables (Cables should face down).</li>
              </ol>
              <hr />
              <h3>Step 10 Assemble the X motor pulley</h3>
              <h4>Hardware</h4>
              <ul>
                <li>GT2 Pulley</li>
              </ul>
              <ol>
                <li>Place GT2 pulley on the X motor shaft.</li>
                <li>Tighten up the pulley.</li>
              </ol>
              <hr />
              <h3>Step 11 Assemble the X endstop</h3>
              <h4>Hardware</h4>
              <ul>
                <li>X Endstop</li>
                <li>M2x12 screw x2</li>
              </ul>
              <ol>
                <li>Place the endstop on the printed part and insert </li>
              </ol>
              <hr />
              <img src='https://i.imgur.com/jdpvRQy.jpg' />
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default withStyles(s)(XAxisAssembly);