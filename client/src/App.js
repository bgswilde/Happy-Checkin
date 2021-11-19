import './App.css';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
    </div>
  )
}

export default App;
