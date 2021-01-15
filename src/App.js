// import logo from './logo.svg';
import './assets/css/bootstrap.min.css';
import './assets/css/custom.css';
import { Fragment } from 'react';

import HomePage from './pages/HomePage';
import TopNavigation from './components/topNavigation/TopNavigation';
import PageTop from './components/pageTop/PageTop';
import Career from './components/career/Career';
import ServicePage from './pages/ServicePage';
import AboutPage from './pages/AboutPage';
import CareerPage from './pages/CareerPage';
import Footer from './components/footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import AppRoute from './router/AppRoute';

// import Footer from './components/footer/Footer';
function App() {
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  );
}

export default App;
