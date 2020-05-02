import React, { FC, useState, useEffect } from 'react';
import { Row, Container, Visible, Col } from 'react-grid-system';
// imports
import './header.scss';
import logo from '../../../utils/images/logo.svg';
import { menu } from '../../../utils/helpers/menu'
export interface HeaderProps { }

const Logo = () => {
  return (
    <h1>
      <img src={logo} alt="logo" />
    </h1>
  )
}

const MenuSmall = () => {
  // state
  const [meunuToggle, setMenuToggle] = useState(false);

  return (
    <>
      <Visible xs sm md>
        <span className="header-menu-open" onClick={() => setMenuToggle(!meunuToggle)}>open</span>
      </Visible>

      <ul
        className={`header-menu header-menu-small ${meunuToggle ? 'show' : 'hide'}`}
        onClick={() => setMenuToggle(!meunuToggle)}>
        <li className="header-menu-close">close</li>
        {
          menu.map(item => (
            <li key={item.item}>
              <a
                className={`header-menu-link ${item.active}`}
                href={`#${item.link}`}>{item.item}</a>
            </li>
          ))
        }
      </ul>
      <div
        className={`${meunuToggle && 'overlay'}`}
        onClick={() => setMenuToggle(!meunuToggle)}></div>
    </>
  )
}

const MenuDefault = () => {
  return (
    <>
      <ul
        className={`header-menu header-menu-default`}>
        {
          menu.map(item => (
            <li key={item.item}>
              <a
                className={`header-menu-link ${item.active}`}
                href={`#${item.link}`}>{item.item}</a>
            </li>
          ))
        }
      </ul>
    </>
  )
}

const Menu = () => {

  return (
    <>
      <Visible xs sm md>
        <MenuSmall />
      </Visible>

      <Visible lg xl>
        <MenuDefault />
      </Visible>
    </>
  )
}

const Authenticate = () => {
  return (
    <div className="header-wrapper-authenticate">
      <button className="header-btn header-btn-signin">Sign In</button>
      <button className="header-btn header-btn-signup">Sign Up</button>
    </div>
  )
}

const Nav = () => {
  return (
    <nav className="header-nav flex">
      <Menu />
      <Authenticate />
    </nav>
  )
}

const Header: FC<HeaderProps> = () => {

  return (
    <header className="header">
      <Container>
        <Row>
          <Col md={3}>
            <Logo />
          </Col>

          <Col md={9}>
            <Nav />
          </Col>
        </Row>
      </Container>
    </header >
  );
};

export default Header;