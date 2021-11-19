// import './App.css';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
<<<<<<< HEAD
import Header from './components/Header';
import Footer from './components/Footer';

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
            <Route exact path="/signup" element={SignupForm} />
          </Switch>
        </Router>
      </div>
      <Footer />
=======
import About from './pages/About';

function App() {
  return (
    <div className="App">
      {/* {(loggedIn && user.role === 0) ? 
        <CustomerDashboard /> :
      (loggedIn && user.role === 1) ? 
        <CheckerDashboard /> :
        <LoginForm />
      } */}
      <Router>
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/signup" component={SignupForm} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
>>>>>>> feature/react-building
    </div>
  )
}

export default App;
