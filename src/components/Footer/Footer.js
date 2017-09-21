
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.css';
import Link from '../Link';
import { Button, Glyphicon } from 'react-bootstrap';

class Footer extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Link className={s.link} to="/">© EARTH</Link>
          <Link to="/donate"><Button><Glyphicon glyph="bitcoin" /> Donate</Button></Link>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
