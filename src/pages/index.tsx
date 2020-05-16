import React from 'react';
import Header from '../shared/components/Header/Header';
// imports
import Home from './Home/Home';
function Page() {
  return (
    <section>
      <Header />
      {/* pages */}
       <Home />
    </section>
  );
}

export default Page;
