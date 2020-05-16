import React, { FC } from 'react';

// imports
import './home.scss';
import Banner from './components/Banner/Banner';
import { Container } from 'react-grid-system';

export interface HomeProps { }

const Home: FC<HomeProps> = () => {
  return <section>
    <Container>
      <Banner />
    </Container>
  </section>;
};

export default Home;