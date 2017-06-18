
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
            <Image src='https://i.imgur.com/GnFlR5p.jpg' />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default withStyles(s)(LCDAssembly);
