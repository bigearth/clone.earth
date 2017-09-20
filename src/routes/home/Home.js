
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import Link from '../../components/Link';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';

class Home extends React.Component {
  render() {
    return (
      <Jumbotron className={s.root}>
        <Grid fluid>
          <Row>
            <Col xs={12} md={6} className={s.firstCol}>
              <h1>Clone</h1>
              <p>Make your world</p>
              <Button bsSize="large"><Link to="/preorder">Preorder</Link></Button>

            </Col>
            <Col xs={12} md={6}>
              <Image src="https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/home.jpg" circle />
            </Col>
           </Row>
        </Grid>
      </Jumbotron>
    );
  }
}

export default withStyles(s)(Home);
