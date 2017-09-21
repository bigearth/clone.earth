
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Donate.css';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import Link from '../../components/Link';

class Donate extends React.Component {
  render() {
    return (
      <div>
        <Grid fluid className={s.titlecontainer}>
          <Row className={s.title}>
            <Col xs={12}>
              <h2>Support EARTH</h2>
            </Col>
          </Row>
        </Grid>
        <Grid fluid className={s.detailscontainer}>
          <Row className={s.details}>
            <Col xs={12}>
              <p>Our vision is a Clone for every person on EARTH. We also believe in Bitcoin Cash&mdash;a peer to peer electronic cash for the world&rsquo;s unbanked. If you believe in the same vision as us and want to donate we are hugely grateful.</p>
            </Col>
          </Row>
        </Grid>
        <Grid fluid>
          <Row className={s.detailsqr}>
            <Col xs={12}>
              <p>3J1W2fWTzbiR46Gkn25vZDeBwnCzu6TNha</p>
              <p>
                <Image src="donate-qr.jpg" thumbnail />
              </p>
            </Col>
          </Row>
        </Grid>
        <Grid fluid className={s.detailscontainer}>
          <Row className={s.details}>
            <Col xs={12}>
              <p>* This is a Bitcoin Cash address and not Bitcoin. There is a difference. If you have Bitcoin please use <a href='https://shapeshift.io'>ShapeShift</a> to shift your Bitcoin to Bitcoin Cash before donating. Thanks!</p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default withStyles(s)(Donate);
