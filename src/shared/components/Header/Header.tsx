import React, { FC, useState } from 'react';
import { Row, Container, Visible, Col } from 'react-grid-system';
// imports
import './header.scss';
import logo from '../../../utils/images/logo.svg';
import { menu } from '../../../utils/helpers/menu'
export interface HeaderProps { }

const Header: FC<HeaderProps> = () => {
  const [meunuToggle, setMenuToggle] = useState(false);

  return (
    <header>
      <Container>
        <Row>
          <Col>
            <h1>
              <img src={logo} alt="logo" />
            </h1>

            <Visible sm xs>
              <span onClick={() => setMenuToggle(!meunuToggle)}>menu icon</span>
            </Visible>

            <ul
              className={`menu ${meunuToggle ? 'show' : 'hide'}`}
              onClick={() => setMenuToggle(!meunuToggle)}>
              {
                menu.map(item => (
                  <li key={item.item}>
                    <a
                      className={`${item.active}`}
                      href={`#${item.link}`}>{item.item}</a>
                  </li>
                ))
              }
            </ul>
            <div
              className={`${meunuToggle && 'overlay'}`}
              onClick={() => setMenuToggle(!meunuToggle)}></div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;