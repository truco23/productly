import React, { FC, useState } from 'react';
import { Row, Container, Visible, Col } from 'react-grid-system';
// imports
import logo from '../../../utils/images/logo.svg';
import { menu } from '../../../utils/helpers/menu';
import styles from './header.module.scss';

export interface HeaderProps {}

const HeaderLogoInternal: FC = () => {
  return (
    <h1>
      <img src={logo} alt="logo" />
    </h1>
  );
};

const HeaderMenuSmallInternal: FC = () => {
  // state
  const [meunuToggle, setMenuToggle] = useState(false);

  return (
    <>
      <Visible xs sm md>
        <div
          className={styles.header_menu_open}
          onClick={() => setMenuToggle(!meunuToggle)}
        >
          <span className={styles.header_icon_burguer}></span>
          <span className={styles.header_icon_burguer}></span>
          <span className={styles.header_icon_burguer}></span>
        </div>
      </Visible>

      <ul
        className={`${styles.header_menu} ${styles.header_menu_small} ${
          meunuToggle ? styles.show : styles.hide
        }`}
        onClick={() => setMenuToggle(!meunuToggle)}
      >
        <li className={styles.header_menu_close}>X</li>
        {menu.map(item => (
          <li key={item.item}>
            <a
              className={`${styles.header_menu_link} ${item.active}`}
              href={`#${item.link}`}
            >
              {item.item}
            </a>
          </li>
        ))}
      </ul>
      <div
        className={`${meunuToggle && styles.overlay}`}
        onClick={() => setMenuToggle(!meunuToggle)}
      ></div>
    </>
  );
};

const HeaderMenuDefaultInternal: FC = () => {
  return (
    <Visible lg xl>
      <ul className={`${styles.header_menu} ${styles.header_menu_default}`}>
        {menu.map(item => (
          <li key={item.item}>
            <a
              className={`${styles.header_menu_link} ${item.active}`}
              href={`#${item.link}`}
            >
              {item.item}
            </a>
          </li>
        ))}
      </ul>
    </Visible>
  );
};

const HeaderMenuInternal: FC = () => {
  return (
    <>
      <HeaderMenuSmallInternal />
      <HeaderMenuDefaultInternal />
    </>
  );
};

const HeaderAuthenticateInternal: FC = () => {
  return (
    <div className={styles.header_wrapper_authenticate}>
      <button className={`${styles.header_btn} ${styles.header_btn_signin}`}>
        Sign In
      </button>
      <button className={`${styles.header_btn} ${styles.header_btn_signup}`}>
        Sign Up
      </button>
    </div>
  );
};

const HeaderNavInternal: FC = () => {
  return <HeaderMenuInternal />;
};

const Header: FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <Container>
        <Row>
          <Col md={3}>
            <HeaderLogoInternal />
          </Col>

          <Col md={9}>
            <nav className={`${styles.header_nav}`}>
              <HeaderNavInternal />
              <HeaderAuthenticateInternal />
            </nav>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
