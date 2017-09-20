
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import Link from '../../components/Link';
import { Jumbotron, Grid, Row, Col, Image, Button, Glyphicon } from 'react-bootstrap';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron className={s.jumbotron}>
          <Grid fluid>
            <Row>
              <Col xs={12} md={6} className={s.firstCol}>
                <h1>Clone</h1>
                <p>Make your world</p>
                <Link to="/preorder"><Button bsSize="large"><Glyphicon glyph="bitcoin" /> Preorder</Button></Link>

              </Col>
              <Col xs={12} md={6}>
                <Image src="https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/home.jpg" circle />
              </Col>
            </Row>
          </Grid>
        </Jumbotron>
        <Grid fluid>
          <Row className={s.details}>
            <Col xs={12} md={6} className={s.alignRight}>
              <h2>Quality Hardware</h2>
              <p>Clone is a desktop 3D printer for professionals. Built w/ the highest quality materials Clone will print all day every day.</p>
            </Col>
            <Col xs={12} md={6} className={s.alignLeft}>
              <Image src="https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/z-axis/step-1.jpg" thumbnail />
            </Col>
           </Row>
          <Row className={s.details}>
            <Col xs={12} md={6} className={s.alignRight}>
              <Image src="marlin-logo.jpg" thumbnail />
            </Col>
            <Col xs={12} md={6} className={s.alignLeft}>
              <h2>Quality Software</h2>
              <p>Clone runs Marlin on a Rambo Mini. This ensures that the that the objects your want are the objects you get.</p>
            </Col>
           </Row>
          <Row className={s.details}>
            <Col xs={12} md={6} className={s.alignRight}>
              <h2>Print Anything</h2>
              <p>Clone prints 3 types of plastic and wood or metal composites. It can print any design you need from tools to toys.</p>
            </Col>
            <Col xs={12} md={6} className={s.alignLeft}>
              <Image src="board.jpg" thumbnail />
            </Col>
           </Row>
          <Row className={s.details}>
            <Col xs={12} md={6} className={s.alignRight}>
              <Image src="oshw-logo.png" thumbnail />
            </Col>
            <Col xs={12} md={6} className={s.alignLeft}>
              <h2>Open Source</h2>
              <p>Clone is a member of the RepRap family. As such Clone&rsquo;s hardware and software are 100% open source enabling makers around the world.</p>
            </Col>
           </Row>
        </Grid>
      </div>
    );
  }
}

export default withStyles(s)(Home);
