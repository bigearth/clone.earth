
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ZAxisAssembly.css';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import DocsTOC from '../../components/DocsTOC';

class ZAxisAssembly extends React.Component {
  render() {
    return (
      <Grid fluid>
        <Row className={s.root}>
          <Col xs={12} sm={12} md={2} lg={2} >
            <DocsTOC selected="/z-axis-assembly" />
          </Col>
          <Col xs={12} sm={12} md={10} lg={10}>
            <Row>
              <Col xs={12} md={6}>
                <h2>Z Axis Assembly</h2>
                <h3 id='step1'>Step 1 Gather materials</h3>
                <h4>Tools</h4>
                <ul>
                  <li>Adjustable wrench x2</li>
                  <li>Needle-nose pliers x1</li>
                  <li>2 mm Hex key</li>
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
                      <li>M3x12 screw x14</li>
                      <li>M3 washer x8</li>
                      <li>M3 locknut x10</li>
                      <li>M3 nut x4</li>
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
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/z-axis/step-1.jpg'>
                  <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/z-axis/step-1.jpg' />
                </a>
              </Col>
            </Row>
            <hr />
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <h3 id='step2'>Step 2 Attach Z axis tops and bottoms</h3>
                <h4>Hardware</h4>
                <ul>
                  <li>M3x12 screw x10</li>
                  <li>M3 locknut x10</li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/z-axis/step-2-a.jpg'>
                  <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/z-axis/step-2-a.jpg' />
                </a>
              </Col>
            </Row>
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <ol>
                  <li>Place parts on the frame</li>
                  <li>Use 2.5 mm Hex key to tighten the parts to the frame.</li>
                  <li>Tighten them gently.</li>
                </ol>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/z-axis/step-2-b.jpg'>
                  <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/z-axis/step-2-b.jpg' />
                </a>
              </Col>
            </Row>
            <hr />
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <h3 id='step3'>Step 3 Attach the Z axis motors</h3>
                <h4>Hardware</h4>
                <ul>
                  <li>Stepper motor x2</li>
                  <li>M3x10 screw x8</li>
                  <li>M3 washer x8</li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/z-axis/step-3-a.jpg'>
                  <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/z-axis/step-3-a.jpg' />
                </a>
              </Col>
            </Row>
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <ol>
                  <li>Place the Z motors on the frame.</li>
                  <li>Place washers and screws in place.</li>
                  <li>Use 2.5mm Hex key to tighten the motor to the printed part.</li>
                </ol>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/z-axis/step-3-b.jpg'>
                  <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/z-axis/step-3-b.jpg' />
                </a>
              </Col>
            </Row>
            <hr />
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <h3 id='step4'>Step 4 Attach the Lead Screws</h3>
                <h4>Hardware</h4>
                <ul>
                  <li>8M Lead screw 30 cm x2</li>
                  <li>Lead screw bushing x2</li>
                  <li>5M to 8M flex coupler x2</li>
                  <li>M3x12 screw x4</li>
                  <li>M3 nut x4</li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/z-axis/step-4-a.jpg'>
                  <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/z-axis/step-4-a.jpg' />
                </a>
              </Col>
            </Row>
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <ol>
                  <li>Screw the bushings on the lead screws</li>
                  <li>Place the screws in the bushings and attach the nuts</li>
                  <li>Place the lead screw in the 8M side of the flex coupler and tighten.</li>
                  <li>Place the motor shaft in the 5M side of the flex coupler and tighten.</li>
                </ol>
              </Col>
              <Col xs={12} md={6}>
                <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/z-axis/step-4-b.jpg' />
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/y-axis/step-3-a.jpg'>
                </a>
              </Col>
            </Row>
            <hr />
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <h3 id='step5'>Step 5 Attach the X Axis</h3>
                <h4>Hardware</h4>
                <ul>
                  <li>Assembled X Axis</li>
                  <li>Chrome rod x2</li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/z-axis/step-5-a.jpg'>
                  <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/z-axis/step-5-a.jpg' />
                </a>
              </Col>
            </Row>
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <ol>
                  <li>Remove Z Axis tops from frame.</li>
                  <li>Remove lead screw bushings.</li>
                  <li>Insert chrome rods and lead screws in to x axis.</li>
                  <li>Screw lead screw bushings in to printed parts.</li>
                  <li>Insert chrome rods in to z bottoms.</li>
                  <li>Reattach z axis tops to frame.</li>
                </ol>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/z-axis/step-5-b.jpg'>
                  <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/z-axis/step-5-b.jpg' />
                </a>
              </Col>
            </Row>
            <hr />
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <h3 id='allDone'>All Done!</h3>
                <ul>
                  <li>Congratulations! Now on to the next step.</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default withStyles(s)(ZAxisAssembly);
