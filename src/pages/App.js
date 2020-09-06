import withRoot from '../modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import AppFooter from '../modules/views/AppFooter';
import ProductHero from '../modules/views/ProductHero';
import ProductValues from '../modules/views/ProductValues';
import AppAppBar from '../modules/views/AppAppBar';

function App() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <AppFooter />
    </React.Fragment>
  );
}
export default withRoot(App);
