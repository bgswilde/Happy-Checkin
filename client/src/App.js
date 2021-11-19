// import './App.css';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';

function App() {
  return (
    <div className="app">
      <div className="content-wrap">
        {/* {(loggedIn && user.role === 0) ? 
          <CustomerDashboard /> :
        (loggedIn && user.role === 1) ? 
          <CheckerDashboard /> :
          <LoginForm />
        } */}
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={LoginForm} />
            <Route exact path="/signup" component={SignupForm} />
            <Route exact path="/about" component={About} />
          </Switch>
        </Router>
      </div>
      <Footer />
      </div> 
  )
}

export default App;
