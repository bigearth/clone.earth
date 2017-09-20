
import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button, Image } from 'react-bootstrap';

class Navigation extends React.Component {
  render() {
    return (
      <Navbar className={s.root} collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link className={s.white} to="/">
              <Image src="EARTH-logo.png" />
              EARTH</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight className={s.white}>
            <NavDropdown eventKey={3} title="Docs" id="docs-dropdown">
              <MenuItem eventKey={3.1} href="/hardware">Hardware</MenuItem>
              <MenuItem eventKey={3.1} href="/docs">Contribute</MenuItem>
            </NavDropdown>
            <NavItem eventKey={1} href="/about">About</NavItem>
            <NavItem eventKey={2} href="/preorder">Preorder</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withStyles(s)(Navigation);
