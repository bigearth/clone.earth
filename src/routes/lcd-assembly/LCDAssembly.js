
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './LCDAssembly.css';
import { Grid, Row, Col, Image } from 'react-bootstrap';

class LCDAssembly extends React.Component {
  render() {
    return (
      <Grid fluid>
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <h2>LCD Assembly</h2>
            <h3>Step 1 Gather materials</h3>
            <h4>Tools</h4>
            <ul>
              <li>Needle-nose pliers</li>
            </ul>
            <h4>3D printed parts</h4>
            <ul>
              <li>Cover x1</li>
              <li>Support left x1</li>
              <li>Support right x1</li>
            </ul>
            <h4>Hardware</h4>
            <ul>
              <li>
                Electronics
                <ul>
                  <li>LCD Screen x1</li>
                </ul>
              </li>
              <li>
                Miscellaneous
                <ul>
                  <li>Zip tie 10 cm x5</li>
                </ul>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={6}>
            <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/lcd/step-1.jpg' />
          </Col>
        </Row>
        <hr />
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <h3>Step 2 Preparing the LCD support for assembly</h3>
            <h4>Hardware</h4>
            <ul>
              <li>LCD Screen x1</li>
              <li>Support left x1</li>
              <li>Support right x1</li>
            </ul>
          </Col>
          <Col xs={12} md={6}>
            <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/lcd/step-2-a.jpg' />
          </Col>
        </Row>
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <ol>
              <li>Ensure the correct orientation of parts and the LCD controller.</li>
              <li>Slide the LCD-support parts on the LCD-controller.</li>
              <li>The exact position will be adjusted in the next step, no need to worry at this moment.</li>
            </ol>
          </Col>
          <Col xs={12} md={6}>
            <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/lcd/step-2-b.jpg' />
          </Col>
        </Row>
        <hr />
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <h3>Step 3 Adjusting the LCD-support</h3>
            <ol>
              <li>Adjust the LCD-support parts as shown in the picture.</li>
              <li>LCD-support parts must face directly into the cutouts in the LCD-cover.</li>
            </ol>
          </Col>
          <Col xs={12} md={6}>
            <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/lcd/step-3.jpg' />
          </Col>
        </Row>
        <hr />
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <h3>Step 4 Assembling the cover</h3>
            <ol>
              <li>Press the LCD controller w/ the support into the cover.</li>
            </ol>
          </Col>
          <Col xs={12} md={6}>
            <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/lcd/step-4.jpg' />
          </Col>
        </Row>
        <hr />
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <h3>Step 5 Secure the display onto the printer</h3>
            <ol>
              <li>Press the LCD assembly onto the front side of the Y-axis.</li>
              <li>Best way is to press the LCD assembly on the top threaded rod first and then on the bottom.</li>
              <li>Guide the LCD cables in between threaded rods</li>
            </ol>
          </Col>
          <Col xs={12} md={6}>
            <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/lcd/step-5.jpg' />
          </Col>
        </Row>
        <hr />
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <h3>Step 6 Secure the LCD assembly</h3>
            <ol>
              <li>Use the zipties to anchor the LCD assembly to the threaded rods.</li>
            </ol>
          </Col>
          <Col xs={12} md={6}>
            <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/lcd/step-6.jpg' />
          </Col>
        </Row>
        <hr />
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <h3>Step 7 Guiding the cables</h3>
            <h4>Hardware</h4>
            <ul>
              <li>Zip Tie 10 cm x3</li>
            </ul>
          </Col>
          <Col xs={12} md={6}>
            <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/lcd/step-7-a.jpg' />
          </Col>
        </Row>
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <ol>
              <li>Attach cables to M10 threaded rod w/ zip ties.</li>
              <li>Don&rsquo;t tighten the zip ties too tight or you could damage the cables.</li>
            </ol>
          </Col>
          <Col xs={12} md={6}>
            <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/lcd/step-7-b.jpg' />
          </Col>
        </Row>
        <hr />
        <Row className={s.root}>
          <Col xs={12} md={6}>
            <h3>All Done!</h3>
            <p>Congratulations! Now on to the next step.</p>
          </Col>
          <Col xs={12} md={6}>
            <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/lcd/step-8.jpg' />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default withStyles(s)(LCDAssembly);
