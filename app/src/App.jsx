import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';

// Routes
import HomePage from './pages/home';
import ProductsPage from './pages/products';
import AboutPage from './pages/about';

// Components
import Header from './components/header';
import Footer from './components/footer';
import ScrollUp from './components/scrollUp';

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/products" exact component={ProductsPage} />
          <Route path="/about" exact component={AboutPage} />
          <Redirect to="/" />
        </Switch>
        <Footer />
        <ScrollUp />
      </Provider>
    </Router>
  );
};

export default App;
