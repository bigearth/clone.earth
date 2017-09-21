import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './XAxisAssembly.css';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import DocsTOC from '../../components/DocsTOC';

class XAxisAssembly extends React.Component {
  render() {
    return (
      <Grid fluid>
        <Row className={s.root}>
          <Col xs={12} sm={12} md={2} lg={2} >
            <DocsTOC selected="/x-axis-assembly" />
          </Col>
          <Col xs={12} sm={12} md={10} lg={10}>
            <Row>
              <Col xs={12} md={6}>
                <h2>X Axis Assembly</h2>
                <h3 id='step1'>Step 1 Gather materials</h3>
                <h4>Tools</h4>
                <ul>
                  <li>Needle nose pliers x1</li>
                  <li>2 mm Hex key</li>
                  <li>1.5 mm Hex key</li>
                </ul>
                <h4>3D printed parts</h4>
                <ul>
                  <li>Carriage x1</li>
                  <li>Motor x1</li>
                  <li>Idler x1</li>
                </ul>
                <h4>Hardware</h4>
                <ul>
                  <li>
                    Rods
                    <ul>
                      <li>M8 Chrome rod 35 cm x2</li>
                    </ul>
                  </li>
                  <li>
                    Nuts &amp; Bolts
                    <ul>
                      <li>M3x10 screw x2</li>
                      <li>M3x18 screw x4</li>
                      <li>M3x16 screw x2</li>
                      <li>M3 square nut x2</li>
                      <li>M3 locknut x1</li>
                      <li>GT2 pulley x1</li>
                      <li>Idler Bearing x1</li>
                      <li>Linear bearings x7</li>
                    </ul>
                  </li>
                  <li>
                    Electronics
                    <ul>
                      <li>Nema 17 stepper motor x1</li>
                      <li>X axis endstop x1</li>
                    </ul>
                  </li>
                  <li>
                    Miscellaneous
                    <ul>
                      <li>Zip tie 10 cm x6</li>
                      <li>GT2 belt 68 cm x1</li>
                    </ul>
                  </li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/step-1.jpg'>
                  <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/step-1.jpg' />
                </a>
              </Col>
            </Row>
            <hr />
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <h3 id='step2'>Step 2 Assemble the Y-axis rods</h3>
                <h4>Hardware</h4>
                <ul>
                  <li>Linear Bearings x3</li>
                  <li>Chrome rods 35 cm x2</li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/step-2-a.jpg'>
                  <Image className={s.rotate} src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/step-2-a.jpg' />
                </a>
              </Col>
            </Row>
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <ol>
                  <li>Carefully slide linear bearings on rods.</li>
                </ol>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/step-2-b.jpg'>
                  <Image className={s.rotate} src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/step-2-b.jpg' />
                </a>
              </Col>
            </Row>
            <hr />
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <h3 id='step3'>Step 3 Prepare the printed parts</h3>
                <h4>Hardware</h4>
                <ul>
                  <li>Linear Bearing x4</li>
                  <li>X-end-motor</li>
                  <li>X-end-idler</li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/step-3-a.jpg'>
                  <Image className={s.rotate} src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/step-3-a.jpg' />
                </a>
              </Col>
            </Row>
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <ol>
                  <li>Insert linear bearing into the printed parts.</li>
                </ol>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/step-3-b.jpg'>
                  <Image className={s.rotate} src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/step-3-b.jpg' />
                </a>
              </Col>
            </Row>
            <hr />
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <h3 id='step4'>Step 4 Prepare the tension screws</h3>
                <h4>Hardware</h4>
                <ul>
                  <li>M3 squre nut x2</li>
                  <li>M3x10 screw x2</li>
                  <li>X-end-idler</li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/step-4-a.jpg'>
                  <Image className={s.rotate} src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/step-4-a.jpg' />
                </a>
              </Col>
            </Row>
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <ol>
                  <li>Insert M3 square nuts and put in place M3x10 screws.</li>
                  <li>Avoid overtightening of the screws.</li>
                </ol>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/step-4-b.jpg'>
                  <Image className={s.rotate} src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/step-4-b.jpg' />
                </a>
              </Col>
            </Row>
            <hr />
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <h3 id='step5'>Step 5 Assemble the X-axis base</h3>
                <h4>Hardware</h4>
                <ul>
                  <li>Assembled y-axis rods</li>
                  <li>Prepared printed parts</li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/step-5-a.jpg'>
                  <Image className={s.rotate} src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/step-5-a.jpg' />
                </a>
              </Col>
            </Row>
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <ol>
                  <li>Insert the rods with bearings fully into the printed parts.</li>
                  <li>Ensure the correct orientation of the parts and rods (rod with 2 bearings must be on the side with the nut trap).</li>
                </ol>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/step-5-b.jpg'>
                    <Image className={s.rotate} src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/step-5-b.jpg' />
                </a>
              </Col>
            </Row>
            <hr />
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <h3 id='step6'>Step 6 Preparing the X-end idler</h3>
                <h4>Hardware</h4>
                <ul>
                  <li>M3x18 screw x1</li>
                  <li>bearing w/ housing x1</li>
                  <li>M3 locknut x1</li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/step-6-a.jpg'>
                  <Image className={s.rotate} src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/step-6-a.jpg' />
                </a>
              </Col>
            </Row>
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <ol>
                  <li>Insert the bearing into the X-end idler.</li>
                  <li>Secure it in position using M3x18 screw.</li>
                  <li>Tighten it with M3 nylock nut, but the idler (wheel) must rotate freely.</li>
                </ol>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/step-6-b.jpg'>
                  <Image className={s.rotate} src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/step-6-b.jpg' />
                </a>
              </Col>
            </Row>
            <hr />
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <h3 id='step7'>Step 7 Prepare the X carriage</h3>
                <h4>Hardware</h4>
                <ul>
                  <li>X Carriage</li>
                  <li>Zip tie x6</li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/step-7-a.jpg'>
                  <Image className={s.rotate} src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/step-7-a.jpg' />
                </a>
              </Col>
            </Row>
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <ol>
                  <li>Insert zipties into the X-carriage.</li>
                </ol>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/step-7-b.jpg'>
                  <Image className={s.rotate} src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/step-7-b.jpg' />
                </a>
              </Col>
            </Row>
            <hr />
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <h3 id='step8'>Step 8 Placing the X carriage</h3>
                <h4>Hardware</h4>
                <ul>
                  <li>Assembled X axis base</li>
                  <li>Prepared X Carriage</li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/step-8-a.jpg'>
                  <Image className={s.rotate} src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/step-8-a.jpg' />
                </a>
              </Col>
            </Row>
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <ol>
                  <li>Place the X-carriage on the X-axis base.</li>
                  <li>Ensure the correct orientation of X-carriage.</li>
                  <li>Use pliers to tighten the zipties.</li>
                  <li>Use pliers to cut off any excess ziptie.</li>
                </ol>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/step-8-b.jpg'>
                  <Image className={s.rotate} src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/step-8-b.jpg' />
                </a>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/step-8-d.jpg'>
                  <Image className={s.rotate} src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/step-8-d.jpg' />
                </a>
              </Col>
            </Row>
            <hr />
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <h3 id='step9'>Step 9 Assemble the X Motor</h3>
                <h4>Hardware</h4>
                <ul>
                  <li>M3x18 screw x3</li>
                  <li>Stepper motor</li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/step-9-a.jpg'>
                  <Image className={s.rotate} src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/step-9-a.jpg' />
                </a>
              </Col>
            </Row>
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <ol>
                  <li>Tighten the motor to the X-end-motor part.</li>
                  <li>Ensure the correct position of cables (Cables should face down).</li>
                </ol>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/step-9-b.jpg'>
                  <Image className={s.rotate} src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/step-9-b.jpg' />
                </a>
              </Col>
            </Row>
            <hr />
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <h3 id='step10'>Step 10 Assemble the X motor pulley</h3>
                <h4>Hardware</h4>
                <ul>
                  <li>GT2 Pulley</li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/step-10-a.jpg'>
                  <Image className={s.rotate} src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/step-10-a.jpg' />
                </a>
              </Col>
            </Row>
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <ol>
                  <li>Place GT2 pulley on the X motor shaft.</li>
                  <li>Tighten up the pulley.</li>
                </ol>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/step-10-b.jpg'>
                  <Image className={s.rotate} src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/step-10-b.jpg' />
                </a>
              </Col>
            </Row>
            <hr />
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <h3 id='step11'>Step 11 Assemble the X endstop</h3>
                <h4>Hardware</h4>
                <ul>
                  <li>X Endstop</li>
                  <li>M3x16 screw x2</li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/step-11-a.jpg'>
                  <Image className={s.rotate} src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/step-11-a.jpg' />
                </a>
              </Col>
            </Row>
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <ol>
                  <li>Place the endstop on the printed part and insert </li>
                </ol>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/step-11-b.jpg'>
                  <Image className={s.rotate} src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/step-11-b.jpg' />
                </a>
              </Col>
            </Row>
            <hr />
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <h3 id='allDone'>All Done!</h3>
                <p>Congratulations! Now on to the next step.</p>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/done.jpg'>
                  <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/x-axis/done.jpg' />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default withStyles(s)(XAxisAssembly);
