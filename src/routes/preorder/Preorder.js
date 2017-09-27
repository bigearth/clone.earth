
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Preorder.css';
import { Grid, Row, Col, Button, Image } from 'react-bootstrap';

class Preorder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      shapeshift: ''
    };
    let that = this;
    fetch('https://blockchain.info/ticker').then(function(response) {
    	return response.json();
    }).then(function(j) {
      let last = j.USD.last;
      fetch('https://shapeshift.io/rate/bch_btc').then(function(response) {
      	return response.json();
      }).then(function(j) {
        let price = (900 / (last * j.rate)).toFixed(8);
        that.setState({
          price: price,
          shapeshift: `https://shapeshift.io/shifty.html?destination=13RrATERfYvKfMTCGA6bfv5cBSzttts6gj&output=BCH&amount=${price}`});
      });
    });
  }

  render() {
    return (
      <div>
        <Grid fluid className={s.titlecontainer}>
          <Row className={s.title}>
            <Col xs={12}>
              <h2>Preorder a Clone</h2>
            </Col>
          </Row>
        </Grid>
        <Grid fluid className={s.detailscontainer}>
          <Row className={s.details}>
            <Col xs={12} sm={6} className={s.alignRight}>
              <p>We&rsquo;re launching Clone and are making preorders available. This is for people who believe in EARTH&rsquo;s vision of a Clone for everyone on EARTH.</p>
              <p>We accept all major crypto currencies via shapeshift but we prefer Bitcoin Cash* because we believe in Satoshi&rsquo;s vision of a currency for the world&rsquo;s unbanked.</p>
              <p>To order a clone send <strong><span>{this.state.price}</span></strong> Bitcoin Cash to <strong>13RrATERfYvKfMTCGA6bfv5cBSzttts6gj</strong>. Then send the transaction id to <strong>buy@clone.earth</strong>. You&rsquo;ll get back a confirmation email shortly and your Clone will begin getting made.</p>
              <p>There is currently a 3 month lead time before the machines ship. Thank you for sharing our vision and taking the first step w/ us in making it a reality.</p>
            </Col>
            <Col xs={12} sm={6} className={s.alignLeft}>
              <Image src="https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/home.jpg" thumbnail />
            </Col>
          </Row>
        </Grid>
        <Grid fluid>
          <Row className={s.detailsqr}>
            <Col xs={12}>
              <p>13RrATERfYvKfMTCGA6bfv5cBSzttts6gj</p>
              <p>
                <Image src="purchase-qr.jpg" thumbnail />
              </p>
              <a href={this.state.shapeshift}>
                <img src="https://shapeshift.io/images/shifty/small_light_altcoins.png" className="ss-button" />
              </a>
            </Col>
          </Row>
        </Grid>
        <Grid fluid className={s.detailscontainer}>
          <Row className={s.details}>
            <Col xs={12}>
              <p>* This is a Bitcoin Cash address and not Bitcoin. There is a difference. If you have Bitcoin please use <a href='https://shapeshift.io'>ShapeShift</a> to shift your Bitcoin to Bitcoin Cash before purchasing. Thanks!</p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default withStyles(s)(Preorder);
