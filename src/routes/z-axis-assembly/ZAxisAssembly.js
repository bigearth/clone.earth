
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ZAxisAssembly.css';
import { Grid, Row, Col } from 'react-bootstrap';
import Link from '../../components/Link';

class ZAxisAssembly extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={6} className={s.root}>
            <h2>Z Axis Assembly</h2>
            <h3>Step 1 Gather materials</h3>
            <h4>Tools</h4>
            <ul>
              <li>Adjustable wrench</li>
              <li>3.6mm flathead screwdriver</li>
              <li>Needle-nose pliers</li>
              <li>1.5mm Hex key</li>
            </ul>
            <h4>3D printed parts</h4>
            <ul>
              <li>Top left x1</li>
              <li>Top right x1</li>
              <li>Bottom left x1</li>
              <li>Bottom right x1</li>
            </ul>
            <h4>Hardware</h4>
            <ul>
              <li>
                Rods
                <ul>
                  <li>M8 Chrome 32 cm rod x2</li>
                  <li>8M Lead screw 30 cm x2</li>
                </ul>
              </li>
              <li>
                Nuts &amp; Bolts
                <ul>
                  <li>M3x10 screw x8</li>
                  <li>M3 washer x8</li>
                  <li>M3x18 screw x10</li>
                  <li>M3 locknut x10</li>
                  <li>Lead screw bushing x2</li>
                  <li>5M to 8M flex coupler x2</li>
                </ul>
              </li>
              <li>
                Electronics
                <ul>
                  <li>Nema 17 stepper motor x2</li>
                </ul>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={6} className={s.root}>
            <img src='https://i.imgur.com/Fh8g5xM.jpg' />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs={12} md={6} className={s.root}>
            <h3>Step 2 Attach Z axis tops and bottoms</h3>
            <h4>Hardware</h4>
            <ul>
              <li>M3x18 screw x10</li>
              <li>M3 locknut x10</li>
            </ul>
          </Col>
          <Col xs={12} md={6} className={s.root}>
            <img src='https://i.imgur.com/6RwYwlD.jpg' />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs={12} md={6} className={s.root}>
            <ol>
              <li>Place parts on the frame</li>
              <li>Use 2.5mm Hex key to tighten the parts to the frame.</li>
              <li>Tighten them gently.</li>
            </ol>
          </Col>
          <Col xs={12} md={6} className={s.root}>
            <img src='https://i.imgur.com/UJp7kiF.jpg' />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs={12} md={6} className={s.root}>
            <h3>Step 3 Attach the Z axis motors</h3>
            <h4>Hardware</h4>
            <ul>
              <li>Stepper motor x2</li>
              <li>M3x10 screw x8</li>
              <li>M3 washer x8</li>
            </ul>
          </Col>
          <Col xs={12} md={6} className={s.root}>
            <img src='https://i.imgur.com/BBEQ2L9.jpg' />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className={s.root}>
            <ol>
              <li>Place the Z motors on the frame.</li>
              <li>Place washers and screws in place.</li>
              <li>Use 2.5mm Hex key to tighten the motor to the printed part.</li>
            </ol>
          </Col>
          <Col xs={12} md={6} className={s.root}>
            <img src='https://i.imgur.com/GrNVl4v.jpg' />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs={12} md={6} className={s.root}>
            <h3>Step 4</h3>
            <h4>Hardware</h4>
            <ul>
              <li>8M Lead screw 30 cm x2</li>
              <li>Lead screw bushing x2</li>
              <li>5M to 8M flex coupler x2</li>
              <li>M3x10 screw x2</li>
            </ul>
          </Col>
          <Col xs={12} md={6} className={s.root}>
            <img src='https://i.imgur.com/jHVyOU9.jpg' />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className={s.root}>
            <ol>
              <li>Screw the bushings on the lead screws</li>
              <li>Place the screws in the bushings</li>
              <li>Place the lead screw in the 8M side of the flex coupler and tighten.</li>
              <li>Place the motor shaft in the 5M side of the flex coupler and tighten.</li>
            </ol>
          </Col>
          <Col xs={12} md={6} className={s.root}>
            <img src='https://i.imgur.com/IrU3Rs9.jpg' />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs={12} md={6} className={s.root}>
            <h3>Step 4 Attach the X Axis</h3>
            <h4>Hardware</h4>
            <ul>
              <li>Assembled X Axis</li>
              <li>Chrome rod x2</li>
            </ul>
          </Col>
          <Col xs={12} md={6} className={s.root}>
            <img src='https://i.imgur.com/SSyZTMq.jpg' />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className={s.root}>
            <ol>
              <li>Remove Z Axis tops from frame.</li>
              <li>Remove lead screw bushings.</li>
              <li>Insert chrome rods and lead screws in to x axis.</li>
              <li>Screw lead screw bushings in to printed parts.</li>
              <li>Insert chrome rods in to z bottoms.</li>
              <li>Reattach z axis tops to frame.</li>
            </ol>
          </Col>
          <Col xs={12} md={6} className={s.root}>
            <img src='https://i.imgur.com/LLkxEh2.jpg' />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs={12} md={6} className={s.root}>
            <h3>All Done!</h3>
            <ul>
              <li>Congratulations! Now on to the next step.</li>
            </ul>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default withStyles(s)(ZAxisAssembly);
