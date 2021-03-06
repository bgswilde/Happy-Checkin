import React from 'react';
import './App.css'
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import Header from './components/Header';
import Home from './pages/Home';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import CustomerDashboard from './pages/CustomerDashboard';
import CheckerDashboard from './pages/CheckerDashboard';
import AddReservation from './pages/AddReservation';

import Footer from './components/Footer';
import About from './pages/About';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
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

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="app">
        <Router>
          <Header />
            <div className="content-wrap">  
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={LoginForm} />
                <Route exact path="/signup" component={SignupForm} />
                <Route exact path="/:id/customer" component={CustomerDashboard} />
                <Route exact path="/:id/checker" component={CheckerDashboard} />
                <Route exact path="/reservation" component={AddReservation} />
                <Route exact path="/about" component={About} />
              </Switch>
            </div>
          <Footer />
        </Router>
      </div>
    </ApolloProvider>
  )
}

export default App;
