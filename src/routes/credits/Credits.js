
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Credits.css';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import Link from '../../components/Link';
import DocsTOC from '../../components/DocsTOC';

class Credits extends React.Component {
  render() {
    return (
      <Grid fluid>
        <Row className={s.root}>
          <Col xs={12} sm={12} md={2} lg={2} >
            <DocsTOC selected="/credits" />
          </Col>
          <Col xs={12} sm={12} md={10} lg={10}>
            <Row>
              <Col xs={12} md={6}>
                <h2>Credits</h2>
                <h3>Prusa</h3>
                <p>Clone is a fork of the Prusa MK2. We&rsquo;re incredibly grateful for all the amazing work
                that Prusa and team have contributed over the years. We support them 100% and suggest you do as well.</p>
                <p><a href='http://www.prusa3d.com/'>More info</a></p>
              </Col>
            </Row>
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <h3>Toms3D</h3>
                <p>Toms3D has been an endless source of help and we leveraged his altered MK2 parts on Clone.</p>
                <p><a href='https://toms3d.org'>More info</a></p>
              </Col>
            </Row>
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <h3>FrostWire</h3>
                <p>Their landing page inspired ours.</p>
                <p><a href='http://www.frostwire.com/home'>More info</a></p>
              </Col>
            </Row>
            <Row className={s.root}>
              <Col xs={12} md={6}>
                <h3>Prints</h3>
                <p><a href='https://www.thingiverse.com/thing:470700'>Spiral Chess Set</a></p>
                <p><a href='https://www.thingiverse.com/thing:1755400'>Miniature Chessboard</a></p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default withStyles(s)(Credits);
