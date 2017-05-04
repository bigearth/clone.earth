
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo-small.png';
import logoUrl2x from './logo-small@2x.png';

class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Navigation />
          <Link className={s.brand} to="/">
            <span className={s.brandTxt}>&#9679; EARTH</span>
          </Link>
          <div className={s.banner}>
            <h1 className={s.bannerTitle}>Clone</h1>
            <p className={s.bannerDesc}>Create your world</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
