
import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';

class Navigation extends React.Component {
  render() {
    return (
      <Navbar inverse className={s.root}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">EARTH</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavDropdown eventKey={3} title="Docs" id="docs-dropdown">
            <MenuItem eventKey={3.1} href="/software">Software</MenuItem>
            <MenuItem eventKey={3.1} href="/hardware">Hardware</MenuItem>
            <MenuItem eventKey={3.1} href="/docs">Contribute</MenuItem>
          </NavDropdown>
          <NavItem eventKey={1} href="/about">About</NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={2} href="/preorder">Preorder</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default withStyles(s)(Navigation);
