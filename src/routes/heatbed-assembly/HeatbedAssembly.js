
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './HeatbedAssembly.css';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import DocsTOC from '../../components/DocsTOC';

class HeatbedAssembly extends React.Component {
  render() {
    return (
      <Grid fluid>
        <Row className={s.root}>
          <Col xs={12} sm={12} md={2} lg={2} >
            <DocsTOC selected="/heatbed-assembly" />
          </Col>
          <Col xs={12} sm={12} md={10} lg={10}>
            <Row>
              <Col xs={12} md={6}>
                <h2>Heatbed Assembly</h2>
                <h3>Step 1 Gather materials</h3>
                <h4>Tools</h4>
                <ul>
                  <li>2 mm Hex key</li>
                  <li>Needle-nose pliers</li>
                </ul>
                <h4>Hardware</h4>
                <ul>
                  <li>
                    Nuts &amp; Bolts
                    <ul>
                      <li>M3x25 flat-top screw x4</li>
                      <li>M3 washer x4</li>
                      <li>M3 lock nut x4</li>
                      <li>M3 10 mm aluminum spacer x4</li>
                    </ul>
                  </li>
                  <li>
                    Miscellaneous
                    <ul>
                      <li>Zip tie 10 cm x2</li>
                      <li>Wire Wrap x1</li>
                    </ul>
                  </li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/heatbed/step-1.jpg'>
                  <Image className={s.rotate} src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/heatbed/step-1.jpg' />
                </a>
              </Col>
            </Row>
            <hr />
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <h3>Step 2 Preparing screws and spacers</h3>
                <h4>Hardware</h4>
                <ul>
                  <li>M3x25 flat-top screw x4</li>
                  <li>M3 washer x4</li>
                  <li>M3 10 mm aluminum spacer x4</li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/heatbed/step-2-a.jpg'>
                  <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/heatbed/step-2-a.jpg' />
                </a>
              </Col>
            </Row>
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <ol>
                  <li>Place the washer on the screw and feed that through the headbed from the top.</li>
                  <li>Screw the spacer on to the screw on the back side of the headbed.</li>
                </ol>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/heatbed/step-2-b.jpg'>
                  <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/heatbed/step-2-b.jpg' />
                </a>
              </Col>
            </Row>
            <hr />
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <h3>Step 3 Attaching heatbed to carriage</h3>
                <h4>Hardware</h4>
                <ul>
                  <li>M3 lock nut x4</li>
                  <li>Assembled heatbed</li>
                </ul>
              </Col>
            </Row>
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <ol>
                  <li>Sit the headbed on the carriage and insert all 4 screws.</li>
                  <li>Attach w/ lock nuts on the bottom of the carriage.</li>
                </ol>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/heatbed/step-3.jpg'>
                  <Image className={s.rotate} src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/heatbed/step-3.jpg' />
                </a>
              </Col>
            </Row>
            <hr />
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <h3>Step 4 Wire management</h3>
                <h4>Hardware</h4>
                <ul>
                  <li>Zip tie 10 cm x2</li>
                  <li>Wire Wrap x1</li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/heatbed/step-4-a.jpg'>
                  <Image className={s.rotate} src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/heatbed/step-4-a.jpg' />
                </a>
              </Col>
            </Row>
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <ol>
                  <li>Place the washer on the screw and feed that through the headbed from the top.</li>
                  <li>Screw the spacer on to the screw on the back side of the headbed.</li>
                </ol>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/heatbed/step-4-b.jpg'>
                  <Image className={s.rotate} src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/heatbed/step-4-b.jpg' />
                </a>
              </Col>
            </Row>
            <hr />
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <h3>All Done!</h3>
                <p>Congratulations! Now on to the next step.</p>
              </Col>
              <Col xs={12} md={6}>
                <a href='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/heatbed/step-5.jpg'>
                  <Image className={s.rotate} src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/heatbed/step-5.jpg' />
                </a>
              </Col>
            </Row>

          </Col>
        </Row>

      </Grid>
    );
  }
}

export default withStyles(s)(HeatbedAssembly);
