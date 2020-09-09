import withRoot from '../modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import ProductHero from '../modules/views/ProductHero';
import AppAppBar from '../modules/views/AppAppBar';

function App() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
    </React.Fragment>
  );
}
export default withRoot(App);
