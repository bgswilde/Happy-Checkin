import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import Header from './components/Header';
import Home from './pages/Home';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import CustomerDashboard from './pages/CustomerDashboard';
import CheckerDashboard from './pages/CheckerDashboard';
import Reservation from './pages/Reservation';
// import About from './components/About';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';


import Footer from './components/Footer';
import About from './pages/About';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const stripePromise = loadStripe(`${process.env.STRIPE_PK}`);
const stripeOptions = {
  // clientSecret: `{{CLIENT_SECRET}}`,
};

function App() {
  return (
    <ApolloProvider client={client}>
      <Elements stripe={stripePromise} options={stripeOptions}>
        <div className="app">
          <Router>
            <Header />
              <div className="content-wrap">  
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/login" component={LoginForm} />
                  <Route exact path="/signup" component={SignupForm} />
                  <Route exact path="/customer/:phoneNumber" component={CustomerDashboard} />
                  <Route exact path="/checker/:phoneNumber" component={CheckerDashboard} />
                  <Route exact path="/reservation" component={Reservation} />
                  <Route exact path="/about" component={About} />
                </Switch>
              </div>
            <Footer />
          </Router>
        </div>
      </Elements>
    </ApolloProvider>
  )
}

export default App;
