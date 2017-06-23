
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ElectronicsAssembly.css';
import { Jumbotron, Grid, Row, Col, Button } from 'react-bootstrap';
import Link from '../../components/Link';
import DocsTOC from '../../components/DocsTOC';

class ElectronicsAssembly extends React.Component {
  render() {
    return (
      <Grid bsClass={s['container-fluid']}>
        <Row>
          <Col xs={2}>
            <DocsTOC selected="/electronics-assembly" />
          </Col>
          <Col xs={10}>
            <Row>
              <Col xs={12}>
                <div>
                  <h2>Electronics Assembly</h2>
                  <p>Coming Soon</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default withStyles(s)(ElectronicsAssembly);
