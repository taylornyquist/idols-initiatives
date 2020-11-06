import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Hub from './components/Hub'
import Signup from './components/Signup'
import Login from './components/Login'
import AddIdol from './components/AddIdol'
import About from './components/About'
import NoMatch from './components/NoMatch'
import Footer from './components/Footer'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql'
});


function App() {
  return (
    <>
     <ApolloProvider client = {client}>
      <Router>
        <div className="min-vh-100 page-container">
          <Navbar />
          <div className="content-wrap">
            <Switch>
              <Route exact path="/" component={Cards} />
              <Route exact path="/hub" component={Hub} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/add-idol" component={AddIdol} />
              <Route exact path="/about" component={About} />
              <Route component={NoMatch} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
     </ApolloProvider>
    </>
  );
}

export default App;
