
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import { Jumbotron } from 'react-bootstrap';

class Home extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <Jumbotron>
          <div>
            <h1>Clone</h1>
            <h2>Coming Soon</h2>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default withStyles(s)(Home);
