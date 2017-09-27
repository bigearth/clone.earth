
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Examples.css';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import Link from '../../components/Link';

class Examples extends React.Component {
  render() {
    return (
      <div>
        <Grid fluid className={s.titlecontainer}>
          <Row className={s.title}>
            <Col xs={12}>
              <h2>Examples</h2>
            </Col>
          </Row>
        </Grid>
        <Grid fluid className={s.detailscontainer}>
          <Row className={s.details}>
            <Col xs={12} sm={6}>
              <Image src="accepted-1.jpg" thumbnail />
              <Image src="accepted-2.jpg" thumbnail />
            </Col>
            <Col xs={12} sm={6}>
              <Image src="accepted-3.jpg" thumbnail />
              <Image src="accepted-4.jpg" thumbnail />
            </Col>
          </Row>
          <Row className={s.details}>
            <Col xs={12} sm={6}>
              <Image src="accepted-5.jpg" thumbnail />
              <Image src="benchy.jpg" thumbnail />
            </Col>
            <Col xs={12} sm={6}>
              <Image src="dinosaur-1.jpg" thumbnail />
              <Image src="dinosaur-2.jpg" thumbnail />
            </Col>
          </Row>
          <Row className={s.details}>
            <Col xs={12} sm={6}>
              <Image src="fractal-1.jpg" thumbnail />
              <Image src="fractal-2.jpg" thumbnail />
            </Col>
            <Col xs={12} sm={6}>
              <Image src="ganesha.jpg" thumbnail />
              <Image src="steal.jpg" thumbnail />
            </Col>
          </Row>
          <Row className={s.details}>
            <Col xs={12} sm={6}>
              <Image src="whistle.jpg" thumbnail />
              <Image src="yoda-1.jpg" thumbnail />
            </Col>
            <Col xs={12} sm={6}>
              <Image src="yoda-2.jpg" thumbnail />
              <Image src="z+axis+stepper+motor-3.jpg" thumbnail />
            </Col>
          </Row>
          <Row className={s.details}>
            <Col xs={12} sm={6}>
              <Image src="chess-1.jpg" thumbnail />
              <Image src="chess-2.jpg" thumbnail />
            </Col>
            <Col xs={12} sm={6}>
              <Image src="chess-3.jpg" thumbnail />
              <Image src="chess-4.jpg" thumbnail />
            </Col>
          </Row>
          <Row className={s.details}>
            <Col xs={12} sm={6}>
              <Image src="batman+1.jpg" thumbnail />
              <Image src="belt-1.jpg" thumbnail />
            </Col>
            <Col xs={12} sm={6}>
              <Image src="belt-2.jpg" thumbnail />
              <Image src="bottom-1.jpg" thumbnail />
            </Col>
          </Row>
          <Row className={s.details}>
            <Col xs={12} sm={6}>
              <Image src="carriage-1.jpg" thumbnail />
              <Image src="carriage-2.jpg" thumbnail />
            </Col>
            <Col xs={12} sm={6}>
              <Image src="earth-cards-multi-color.jpeg" thumbnail />
              <Image src="filament+spool+holder.jpg" thumbnail />
            </Col>
          </Row>
          <Row className={s.details}>
            <Col xs={12} sm={6}>
              <Image src="idler-1.jpg" thumbnail />
              <Image src="idler-2.jpg" thumbnail />
            </Col>
            <Col xs={12} sm={6}>
              <Image src="idler+and+motor.jpg" thumbnail />
              <Image src="lcd+clips.jpg" thumbnail />
            </Col>
          </Row>
          <Row className={s.details}>
            <Col xs={12} sm={6}>
              <Image src="lcd+knob-1.jpg" thumbnail />
              <Image src="lcd+knob-2.jpg" thumbnail />
            </Col>
            <Col xs={12} sm={6}>
              <Image src="lcd+screeen-2.jpg" thumbnail />
              <Image src="lcd+support-1.jpg" thumbnail />
            </Col>
          </Row>
          <Row className={s.details}>
            <Col xs={12} sm={6}>
              <Image src="lcd+support-2.jpg" thumbnail />
              <Image src="lcd+support-3.jpg" thumbnail />
            </Col>
            <Col xs={12} sm={6}>
              <Image src="pcb.jpg" thumbnail />
              <Image src="psu-1.jpg" thumbnail />
            </Col>
          </Row>
          <Row className={s.details}>
            <Col xs={12} sm={6}>
              <Image src="psu-2.jpg" thumbnail />
              <Image src="smaug1.jpg" thumbnail />
            </Col>
            <Col xs={12} sm={6}>
              <Image src="smaug2.jpg" thumbnail />
              <Image src="smaug3.jpg" thumbnail />
            </Col>
          </Row>
          <Row className={s.details}>
            <Col xs={12} sm={6}>
              <Image src="spool+holder.jpg" thumbnail />
              <Image src="steal+your+face.jpg" thumbnail />
            </Col>
            <Col xs={12} sm={6}>
              <Image src="support+1.jpg" thumbnail />
              <Image src="support+2.jpg" thumbnail />
            </Col>
          </Row>
          <Row className={s.details}>
            <Col xs={12} sm={6}>
              <Image src="top-1.jpg" thumbnail />
              <Image src="tree+frog+1.jpg" thumbnail />
            </Col>
            <Col xs={12} sm={6}>
              <Image src="tree+frog+2.jpg" thumbnail />
              <Image src="tree+frog+3.jpg" thumbnail />
            </Col>
          </Row>
          <Row className={s.details}>
            <Col xs={12} sm={6}>
              <Image src="vibration-absorbers-1.jpg" thumbnail />
              <Image src="vibration-absorbers-2.jpg" thumbnail />
            </Col>
            <Col xs={12} sm={6}>
              <Image src="vibration-absorbers-3.jpg" thumbnail />
              <Image src="x+axis+top.jpg" thumbnail />
            </Col>
          </Row>
          <Row className={s.details}>
            <Col xs={12} sm={6}>
              <Image src="y+all.jpg" thumbnail />
              <Image src="y+axis+motor-1.jpg" thumbnail />
            </Col>
            <Col xs={12} sm={6}>
              <Image src="y+axis+motor-2.jpg" thumbnail />
              <Image src="y+axis+motor-3.jpg" thumbnail />
            </Col>
          </Row>
          <Row className={s.details}>
            <Col xs={12} sm={6}>
              <Image src="y+axis+stepper+motors-1.jpg" thumbnail />
              <Image src="y+axis+stepper+motors-2.jpg" thumbnail />
            </Col>
            <Col xs={12} sm={6}>
              <Image src="y+axis+stepper+motors-3.jpg" thumbnail />
              <Image src="y+belt-1.jpg" thumbnail />
            </Col>
          </Row>
          <Row className={s.details}>
            <Col xs={12} sm={6}>
              <Image src="y+belt-2.jpg" thumbnail />
              <Image src="y+belt-3.jpg" thumbnail />
            </Col>
            <Col xs={12} sm={6}>
              <Image src="y+corner-1.jpg" thumbnail />
              <Image src="y+corner-2.jpg" thumbnail />
            </Col>
          </Row>
          <Row className={s.details}>
            <Col xs={12} sm={6}>
              <Image src="y+idler-1.jpg" thumbnail />
              <Image src="y+idler-2.jpg" thumbnail />
            </Col>
            <Col xs={12} sm={6}>
              <Image src="y+idler-3.jpg" thumbnail />
              <Image src="z+axis+bottom.jpg" thumbnail />
            </Col>
          </Row>
          <Row className={s.details}>
            <Col xs={12} sm={6}>
              <Image src="z+axis+stepper+motor-1.jpg" thumbnail />
              <Image src="z+axis+stepper+motor-2.jpg" thumbnail />
            </Col>
            <Col xs={12} sm={6}>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default withStyles(s)(Examples);
