import React from 'react'
//tutorial apollo

//import ReactDOM from 'react-dom/client';
import * as ReactDOM from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import App from './App'

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css'
import Header from './components/header/Header';
// import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
  uri: 'http://127.0.0.1:8000/graphql/',
  cache: new InMemoryCache(),
})

// Supported in React 18+
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
