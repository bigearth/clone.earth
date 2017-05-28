
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo-small.png';
import logoUrl2x from './logo-small@2x.png';
import { Grid, Row, Col } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <Grid fluid={true} >
        <Row>
          <Col xs={12}>
            <Navigation />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default withStyles(s)(Header);
