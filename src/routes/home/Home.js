
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import { Jumbotron, Grid, Row, Col, Button } from 'react-bootstrap';

class Home extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <Jumbotron>
              <div>
                <h1>Clone</h1>
                <h2>Make your world.</h2>
                <a href='/preorder'>
                  <Button bsStyle="primary" bsSize="large">Preorder</Button>
                </a>
              </div>
            </Jumbotron>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default withStyles(s)(Home);
