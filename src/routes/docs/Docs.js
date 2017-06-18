
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Docs.css';
import { Grid, Row, Col, Image } from 'react-bootstrap';

class Docs extends React.Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12} md={6}>
            <h2>Contribute</h2>
            <p>Clone is 100% open source! Add to and/or extend it in any way you see possible.</p>
            <h3>Clone Marlin</h3>
            <p>Clone uses <a href='http://marlinfw.org/'>Marlin</a> to control the 3d printer&rsquo;s movements.</p>
            <p>Check out our custom <a href='https://github.com/bigearth/clone-marlin'>Marlin build</a> which has been tweaked for Clone&rsquo;s hardware.</p>
            <h3>CloneOS</h3>
            <p><a href='https://github.com/bigearth/cloneos'>Github Repo</a>.</p>
            <p>The brains of Clone. The operating system and all related software that runs on Clone&rsquo;s Raspberry Pi.</p>
            <p>Written w/ the <a href='http://nerves-project.org'>nerves project</a> and <a href='http://elixir-lang.org/'>Elixir</a></p>
            <h3>clone.earth</h3>
            <p><a href='https://github.com/bigearth/clone.earth'>Github Repo</a>.</p>
            <p>Help us improve this page!</p>
            <p>Written w/ <a href='https://facebook.github.io/react/'>React</a> and <a href='https://react-bootstrap.github.io/'>React Bootstrap</a></p>
            <h3>rest.clone.earth</h3>
            <p><a href='https://github.com/bigearth/rest-cloud'>Github Repo</a>.</p>
            <p>Clone&rsquo;s cloud REST endpoints</p>
            <p>Written w/ <a href='https://expressjs.com/'>ExpressJS</a>.</p>
          </Col>
          <Col xs={12} md={6}>
            <Image src='https://s3-us-west-1.amazonaws.com/www-clone-earth-assets/z-axis/step-1.jpg' />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default withStyles(s)(Docs);
