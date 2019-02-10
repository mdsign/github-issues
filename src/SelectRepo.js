import React from 'react';

const SelectRepo = ({data}) => {
  const reactIssues = get(data, 'repository.issues.edges');
  console.log(reactIssues);
 
  //const openIssues = issues.filter(issue => issue.status === 'open');
  
  const reactIssueList = reactIssues.map((item, key) => 
    <li key={key}>  {item.node.title}
      <span>{`URL:${item.node.url}`}</span>
    </li>
  );
return (
  <div className="IssueContainer">
    <div className="IssueListHeader">
      <h5>Repo 
        <SelectRepo />
      </h5>
    </div>
    <ul>
      {reactIssueList}
    </ul>
  </div>
  );
}

export default IssueList;