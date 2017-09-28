
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Donate.css';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import Link from '../../components/Link';

class Donate extends React.Component {
  constructor(props) {
    super(props);
  }
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
            <Col xs={12} md={4}>
              <h3>Donate w/ Bitcoin Cash*</h3>
              <p>
                <Image className={s.donate} src="donate-qr.jpg" thumbnail />
              </p>
              <p className={s.overflow}>14xYtMKXSdJ5TKwTcdXkbPAwsnuEkhGJ6b</p>
            </Col>
            <Col xs={12} md={4}>
              <h3>Donate Via Shapeshift</h3>
              <a href={this.props.shapeshift}>
                <Image className={s.donate} src="shapeshift.png" thumbnail />
              </a>
            </Col>
            <Col xs={12} md={4}>
              <h3>Donate Via Paypal</h3>
              <a href={this.props.paypal}>
                <Image className={s.donate} src="paypal.png" thumbnail />
              </a>
            </Col>
          </Row>
        </Grid>
        <Grid fluid className={s.detailscontainer}>
          <Row className={s.details}>
            <Col xs={12}>
              <p>* This is a <a href='https://www.bitcoincash.org/'>Bitcoin Cash</a> address and not Bitcoin. There is a difference. If you have Bitcoin please use <a href={this.props.shapeshift}>ShapeShift</a> to donate. Thanks!</p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default withStyles(s)(Donate);
