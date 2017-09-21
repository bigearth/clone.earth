
import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button, Image, Glyphicon } from 'react-bootstrap';

class Navigation extends React.Component {
  render() {
    return (
      <Navbar className={s.root} fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link className={s.white} to="/">
              <Image src="EARTH-logo.png" />
              EARTH</Link>
          </Navbar.Brand>
          <Link to="/preorder"><Button bsSize="large"><Glyphicon glyph="bitcoin" /> Preorder</Button></Link>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight className={s.white}>
            <NavDropdown title="Docs" id="docs-dropdown">
              <MenuItem href="/hardware">Hardware</MenuItem>
              <MenuItem href="/docs">Contribute</MenuItem>
            </NavDropdown>
            <NavItem href="/about">About</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withStyles(s)(Navigation);
