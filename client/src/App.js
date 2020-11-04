// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Jumbo from './components/Jumbotron'
import Cards from './components/Cards'

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { ApolloProvider } from '@apollo/react-hooks';
// import ApolloClient from 'apollo-boost';

function App() {
  return (
    <>
      <Navbar />
      <Jumbo />
      <Cards />
    </>
  );
}

export default App;
