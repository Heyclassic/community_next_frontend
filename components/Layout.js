import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/StickyFooter';
import '../assets/scss/app.scss';

const Layout = props => (
  <div>
    <NavBar />
      {props.children}
    <Footer />
  </div>
);

export default Layout;