
import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button, Image, Glyphicon } from 'react-bootstrap';
import history from '../../history';

class Navigation extends React.Component {
  handleSelect(selectedKey) {
    if(selectedKey == 'software') {
      window.location.href = 'https://github.com/bigearth/marlin';
    } else {
      history.push(`/${selectedKey}`);
    }
  }
  render() {
    return (
      <Navbar className={s.root} fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link className={s.white} to="/">
              <Image src="EARTH-logo.png" />
              EARTH</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight className={s.white} onSelect={this.handleSelect}>
            <NavItem eventKey={'hardware'} href="/hardware">Hardware</NavItem>
            <NavItem eventKey={'software'} href="https://github.com/bigearth/marlin">Software</NavItem>
            <NavItem eventKey={'examples'} href="/examples">Examples</NavItem>
            <NavItem eventKey={'about'} href="/about">About</NavItem>
            <NavItem eventKey={'preorder'} href="/preorder">Preorder</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withStyles(s)(Navigation);
