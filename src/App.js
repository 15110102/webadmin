import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import FromCreate from '../src/views/Users/CreateUserForm';
// import { renderRoutes } from 'react-router-config';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/Pages/Login'));
const Register = React.lazy(() => import('./views/Pages/Register'));
function App() {
  return (
    <HashRouter>
        <React.Suspense fallback={loading()}>
          <Switch>
            <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
            <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
            <Route exact path="/createUser" name="Create User" render={props => <FromCreate {...props}/>} />
            <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
          </Switch>
        </React.Suspense>
    </HashRouter>
  );
}

export default App;
