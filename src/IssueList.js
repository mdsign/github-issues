import React from 'react';
import { get } from 'lodash';

//method to define the status with icon
const issueStatus = (status) => {
  const statusClassName = status === 'OPEN' ? 'f-issue-status-open' : 'f-issue-status-closed';
  return (<i className={statusClassName}></i>);
}

const IssueList = ({ data }) => {
  const repoName = get(data, 'repository');
  const repoIssues = get(data, 'repository.issues.edges');

  const repoIssueList = repoIssues.map((item, key) =>
    <li key={key}>
      {issueStatus(item.node.state)}
      <span className="l-issue-title">{item.node.title}</span>
      <span className="l-issue-url">{`URL:${item.node.url}`}</span>
    </li>
  );

  return (
    <div className="l-issue-list-container">
      <div className="l-issue-list-header">
        <h5>{`Repo: ${repoName} - React`}</h5>
      </div>
      <ul>
        {repoIssueList}
      </ul>
    </div>
  );
}

export default IssueList;