import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';

//helper method to define the status with icon
const issueStatus = (status) => {
  const statusClassName = status === 'OPEN' ? 'f-issue-status-open' : 'f-issue-status-closed';
  return (<i className={statusClassName}></i>);
}

const IssueList = ({ data }) => {
  const repoIssues = get(data, 'repository.issues.edges');

  const repoIssueList = repoIssues && repoIssues.map((item, key) =>
    <li key={key}>
      {issueStatus(item.node.state)}
      <span className="l-issue-title">{item.node.title}</span>
      <span className="l-issue-url">URL:<a href={item.node.url}>{item.node.url}</a></span>
    </li>
  );

  return (
    <div className="l-issue-list-container">
      <div className="l-issue-list-header">
        <h5>Repo: Facebook - React</h5>
      </div>
      <ul>
        {repoIssueList}
      </ul>
    </div>
  );
}

IssueList.propTypes = {
  data: PropTypes.object
}

export default IssueList;