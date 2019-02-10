import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import './App.css';
import AppHeader from './AppHeader.js';
import IssueList from './IssueList.js';

const FEED_QUERY = gql`
  {
    repository(owner:"facebook", name:"react") {
      issues(last:20) { 
        edges { 
          node {
            title
            url
            state
            labels(first:5) {
              edges {
                node {
                  name
                  description
                }
              }
            }
          }
        }
      }
    }    
  }
`
class App extends Component {
  render() {
    return (
      <div className="l-app-container">
        <AppHeader />
        <section className="l-issues-wrapper">
          <Query query={FEED_QUERY}>
            {({loading, error, data}) => {
              if (loading) return <div>Fetching</div>
              if (error) return <div>Error</div>
              return <IssueList data={data} />
            }}
          </Query>          
        </section>
        
      </div>
    );
  }
}

export default App;