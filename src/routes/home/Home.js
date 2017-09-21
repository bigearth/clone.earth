
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
          <Row className={s.summary}>
            <Col xs={12} md={6} lg={3}>
              <h3><Link to="#hardware"><Glyphicon glyph="wrench" /> Quality Hardware</Link></h3>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <h3><Link to="#software"><Glyphicon glyph="floppy-disk" /> Quality Software</Link></h3>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <h3><Link to="#anything"><Glyphicon glyph="star" /> Print Anything</Link></h3>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <h3><Link to="#opensource"><Glyphicon glyph="folder-open" /> Open Source</Link></h3>
            </Col>
          </Row>
        </Grid>
        <Grid fluid>
          <Row className={s.pitch}>
            <Col xs={12}>
              <p>DESIGN AND CREATE NEW THINGS. UPGRADE AND FIX OLD THINGS.</p>
            </Col>
            <Col xs={12}>
              <p>CLONE IS THE INDUSTRIAL REVOLUTION ON YOUR DESKTOP</p>
            </Col>
          </Row>
        </Grid>
        <Grid fluid>
          <Row className={s.details} id='hardware'>
            <Col xs={12} md={6} className={s.alignRight}>
              <h2>Quality Hardware</h2>
              <p>Clone is a desktop 3D printer for professionals. Built w/ the <Link to='/hardware'>highest quality materials</Link> Clone will print all day every day.</p>
            </Col>
            <Col xs={12} md={6} className={s.alignLeft}>
              <Link to='/hardware'>
                <Image src="https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/z-axis/step-1.jpg" thumbnail />
              </Link>
            </Col>
           </Row>
          <Row className={s.details} id='software'>
            <Col xs={12} md={6} className={s.alignRight}>
              <a href='https://github.com/bigearth/Marlin'>
                <Image src="marlin-logo.jpg" thumbnail />
              </a>
            </Col>
            <Col xs={12} md={6} className={s.alignLeft}>
              <h2>Quality Software</h2>
              <p>Clone runs <a href='https://github.com/bigearth/Marlin'>Marlin</a> on a Rambo Mini. This ensures that the objects you want are the objects you get.</p>
            </Col>
           </Row>
          <Row className={s.details} id='anything'>
            <Col xs={12} md={6} className={s.alignRight}>
              <h2>Print Anything</h2>
              <p>Clone prints 3 types of plastic and wood or metal composites. It can print any design you need from <Link to='/examples'>tools to toys</Link>.</p>
            </Col>
            <Col xs={12} md={6} className={s.alignLeft}>
              <Link to='/examples'>
                <Image src="board.jpg" thumbnail />
              </Link>
            </Col>
           </Row>
          <Row className={s.details} id='opensource'>
            <Col xs={12} md={6} className={s.alignRight}>
              <Link to='/docs'>
                <Image src="oshw-logo.png" thumbnail />
               </Link>
            </Col>
            <Col xs={12} md={6} className={s.alignLeft}>
              <h2>Open Source</h2>
              <p>Clone is a member of the RepRap family. As such Clone&rsquo;s hardware and software are <Link to='/docs'>100% open source</Link> enabling makers around the world.</p>
            </Col>
           </Row>
        </Grid>
        <Grid fluid>
          <Row className={s.social}>
            <Col xs={4}>
              <a href="https://www.facebook.com/cloneearth/">
                <Button>
                  <i className="fa fa-facebook"></i>
                </Button>
              </a>
            </Col>
            <Col xs={4}>
              <a href="https://twitter.com/clone_earth/">
                <Button>
                  <i className="fa fa-twitter"></i>
                </Button>
              </a>
            </Col>
            <Col xs={4}>
              <Link to="/preorder">
                <Button>
                  <i className="fa fa-youtube"></i>
                </Button>
              </Link>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default withStyles(s)(Home);
