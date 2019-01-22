import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/AuthActions';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import '../../styles/NavBar.css';

class NavBar extends React.Component {
  state = {isOpen: false};

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
        <Navbar fixed="top" dark expand="md" className="navBar">
          <NavbarBrand className="NavbarBrand" href="#">
            ListenByLyrics
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse className="capse" isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="NavLink" href="#">
                <Link className="NavLink" to="/search">Search</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="NavLink" href="#">My Library</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="NavLink" href={this.props.spotify_url}>Spotify</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="NavLink" href="#" onClick={this.props.logoutUser}>Sign Out</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    spotify_url: state.auth.user.url
  }
}

const mapDispatchToProps = {
  logoutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
