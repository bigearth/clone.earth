
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Coming Soon</h1>
          <div>
            <img src='https://i.imgur.com/U9apCaa.jpg' alt='Clone Front' />
          </div>
          <div>
            <img src='https://i.imgur.com/6JVMY1P.jpg' alt='Clone Back' />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
