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

// const client = new ApolloClient({
//   uri: 'http://localhost:3001/graphql'
// });

import { Provider } from 'react-redux';
import store from './utils/store';

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <div className="min-vh-100 page-container">
            <Provider store={store}>
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
            </Provider>
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
