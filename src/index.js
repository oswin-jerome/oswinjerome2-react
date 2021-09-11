import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache()
});

ReactDOM.render(
  // <React.StrictMode>
  <ApolloProvider client={client}>
    
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
serviceWorker.unregister();