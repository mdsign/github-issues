import React from 'react';
//import renderer from 'react-test-renderer';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';

import IssueList from './IssueList.js';

chai.use(chaiEnzyme());
Enzyme.configure({ adapter: new Adapter() });

const data = {
  "repository": {
    "issues": {
      "edges": [
        {
          "node": {
            "title": "Warning when a memoized component uses both hooks and suspense",
            "url": "https://github.com/facebook/react/issues/14790",
            "state": "OPEN",
            "labels": {
              "edges": [
                {
                  "node": {
                    "name": "Component: Hooks",
                    "description": "",
                    "__typename": "Label"
                  },
                  "__typename": "LabelEdge"
                },
                {
                  "node": {
                    "name": "Type: Bug",
                    "description": null,
                    "__typename": "Label"
                  },
                  "__typename": "LabelEdge"
                }
              ],
              "__typename": "LabelConnection"
            },
            "__typename": "Issue"
          },
          "__typename": "IssueEdge"
        },
        {
          "node": {
            "title": "Question: ReactDOM render call in useEffect delayed until first update",
            "url": "https://github.com/facebook/react/issues/14792",
            "state": "OPEN",
            "labels": {
              "edges": [
                {
                  "node": {
                    "name": "Component: Hooks",
                    "description": "",
                    "__typename": "Label"
                  },
                  "__typename": "LabelEdge"
                },
                {
                  "node": {
                    "name": "Type: Bug",
                    "description": null,
                    "__typename": "Label"
                  },
                  "__typename": "LabelEdge"
                }
              ],
              "__typename": "LabelConnection"
            },
            "__typename": "Issue"
          },
          "__typename": "IssueEdge"
        },
        {
          "node": {
            "title": "contextType apparently not working in dev mode server side rendering",
            "url": "https://github.com/facebook/react/issues/14793",
            "state": "OPEN",
            "labels": {
              "edges": [
                {
                  "node": {
                    "name": "Component: Component API",
                    "description": null,
                    "__typename": "Label"
                  },
                  "__typename": "LabelEdge"
                }
              ],
              "__typename": "LabelConnection"
            },
            "__typename": "Issue"
          },
          "__typename": "IssueEdge"
        },
        {
          "node": {
            "title": "useState doesn't update component",
            "url": "https://github.com/facebook/react/issues/14794",
            "state": "OPEN",
            "labels": {
              "edges": [
                {
                  "node": {
                    "name": "Resolution: Needs More Information",
                    "description": null,
                    "__typename": "Label"
                  },
                  "__typename": "LabelEdge"
                }
              ],
              "__typename": "LabelConnection"
            },
            "__typename": "Issue"
          },
          "__typename": "IssueEdge"
        },
        {
          "node": {
            "title": "Module mock yields unexpected act() error",
            "url": "https://github.com/facebook/react/issues/14797",
            "state": "OPEN",
            "labels": {
              "edges": [
                {
                  "node": {
                    "name": "Type: Question",
                    "description": null,
                    "__typename": "Label"
                  },
                  "__typename": "LabelEdge"
                }
              ],
              "__typename": "LabelConnection"
            },
            "__typename": "Issue"
          },
          "__typename": "IssueEdge"
        },
        {
          "node": {
            "title": "Missing assets for releases 16.7, 16.8, 16.8.1",
            "url": "https://github.com/facebook/react/issues/14806",
            "state": "OPEN",
            "labels": {
              "edges": [
                {
                  "node": {
                    "name": "Component: Build Infrastructure",
                    "description": null,
                    "__typename": "Label"
                  },
                  "__typename": "LabelEdge"
                }
              ],
              "__typename": "LabelConnection"
            },
            "__typename": "Issue"
          },
          "__typename": "IssueEdge"
        },
        {
          "node": {
            "title": "Shallow renderer does not support React.memo",
            "url": "https://github.com/facebook/react/issues/14807",
            "state": "OPEN",
            "labels": {
              "edges": [
                {
                  "node": {
                    "name": "Component: Shallow Renderer",
                    "description": null,
                    "__typename": "Label"
                  },
                  "__typename": "LabelEdge"
                },
                {
                  "node": {
                    "name": "Type: Feature Request",
                    "description": null,
                    "__typename": "Label"
                  },
                  "__typename": "LabelEdge"
                }
              ],
              "__typename": "LabelConnection"
            },
            "__typename": "Issue"
          },
          "__typename": "IssueEdge"
        },
        {
          "node": {
            "title": "An update to the state from `useState` is not registered in event handler `onTransitionEnd`",
            "url": "https://github.com/facebook/react/issues/14812",
            "state": "OPEN",
            "labels": {
              "edges": [
                {
                  "node": {
                    "name": "Resolution: Needs More Information",
                    "description": null,
                    "__typename": "Label"
                  },
                  "__typename": "LabelEdge"
                }
              ],
              "__typename": "LabelConnection"
            },
            "__typename": "Issue"
          },
          "__typename": "IssueEdge"
        },
        {
          "node": {
            "title": "How to tell if getDerivedStateFromProps is triggered by state change or props change?",
            "url": "https://github.com/facebook/react/issues/14817",
            "state": "OPEN",
            "labels": {
              "edges": [

              ],
              "__typename": "LabelConnection"
            },
            "__typename": "Issue"
          },
          "__typename": "IssueEdge"
        },
        {
          "node": {
            "title": "Losing state and dispatch when passed to provider, with Typescript",
            "url": "https://github.com/facebook/react/issues/14818",
            "state": "OPEN",
            "labels": {
              "edges": [

              ],
              "__typename": "LabelConnection"
            },
            "__typename": "Issue"
          },
          "__typename": "IssueEdge"
        },
        {
          "node": {
            "title": "XSS is doubly escaping when using SSR and `ReactDOM.hydrate`",
            "url": "https://github.com/facebook/react/issues/14822",
            "state": "OPEN",
            "labels": {
              "edges": [

              ],
              "__typename": "LabelConnection"
            },
            "__typename": "Issue"
          },
          "__typename": "IssueEdge"
        },
        {
          "node": {
            "title": "Hook Error:  Hooks can only be called inside the body of a function component",
            "url": "https://github.com/facebook/react/issues/14823",
            "state": "OPEN",
            "labels": {
              "edges": [
                {
                  "node": {
                    "name": "Resolution: Needs More Information",
                    "description": null,
                    "__typename": "Label"
                  },
                  "__typename": "LabelEdge"
                }
              ],
              "__typename": "LabelConnection"
            },
            "__typename": "Issue"
          },
          "__typename": "IssueEdge"
        },
        {
          "node": {
            "title": "`eslint-plugin-react-hooks` Appears to allow for usage of hooks outside of components",
            "url": "https://github.com/facebook/react/issues/14824",
            "state": "OPEN",
            "labels": {
              "edges": [

              ],
              "__typename": "LabelConnection"
            },
            "__typename": "Issue"
          },
          "__typename": "IssueEdge"
        },
        {
          "node": {
            "title": "Reconciliation not occurring between two separate re-renders",
            "url": "https://github.com/facebook/react/issues/14825",
            "state": "OPEN",
            "labels": {
              "edges": [
                {
                  "node": {
                    "name": "Resolution: Needs More Information",
                    "description": null,
                    "__typename": "Label"
                  },
                  "__typename": "LabelEdge"
                }
              ],
              "__typename": "LabelConnection"
            },
            "__typename": "Issue"
          },
          "__typename": "IssueEdge"
        },
        {
          "node": {
            "title": "Prop reassignment in components",
            "url": "https://github.com/facebook/react/issues/14827",
            "state": "OPEN",
            "labels": {
              "edges": [

              ],
              "__typename": "LabelConnection"
            },
            "__typename": "Issue"
          },
          "__typename": "IssueEdge"
        },
        {
          "node": {
            "title": "Hooks FAQ: possibly broken optimization",
            "url": "https://github.com/facebook/react/issues/14828",
            "state": "OPEN",
            "labels": {
              "edges": [

              ],
              "__typename": "LabelConnection"
            },
            "__typename": "Issue"
          },
          "__typename": "IssueEdge"
        },
        {
          "node": {
            "title": "crossOrigin attribute should be lowercased in rendered",
            "url": "https://github.com/facebook/react/issues/14829",
            "state": "OPEN",
            "labels": {
              "edges": [
                {
                  "node": {
                    "name": "Component: DOM",
                    "description": null,
                    "__typename": "Label"
                  },
                  "__typename": "LabelEdge"
                }
              ],
              "__typename": "LabelConnection"
            },
            "__typename": "Issue"
          },
          "__typename": "IssueEdge"
        },
        {
          "node": {
            "title": "React Hooks",
            "url": "https://github.com/facebook/react/issues/14833",
            "state": "OPEN",
            "labels": {
              "edges": [

              ],
              "__typename": "LabelConnection"
            },
            "__typename": "Issue"
          },
          "__typename": "IssueEdge"
        },
        {
          "node": {
            "title": "Allow using more or less hooks between re-renders",
            "url": "https://github.com/facebook/react/issues/14834",
            "state": "OPEN",
            "labels": {
              "edges": [

              ],
              "__typename": "LabelConnection"
            },
            "__typename": "Issue"
          },
          "__typename": "IssueEdge"
        },
        {
          "node": {
            "title": "Pass dependencies to `useMemo` callback as arguments",
            "url": "https://github.com/facebook/react/issues/14835",
            "state": "OPEN",
            "labels": {
              "edges": [

              ],
              "__typename": "LabelConnection"
            },
            "__typename": "Issue"
          },
          "__typename": "IssueEdge"
        }
      ],
      "__typename": "IssueConnection"
    },
    "__typename": "Repository"
  }
}

describe('<IssueList /> component should', () => {
  const issueList = mount(<IssueList data={data} />);

  it('exist and be a component', () => {
    expect(IssueList).to.be.a('function');
  });

  it('have right number of issues to be passed', () => {
    expect(issueList.props().data.repository.issues.edges).to.have.lengthOf(20);
  });

  it('have right number of items in the list', () => {
    expect(issueList.find('li')).to.have.lengthOf(20);
  });

  it('have status icon for each open item in the list', () => {
    const issueListStatus = issueList.find('.f-issue-status-open');
    expect(issueListStatus).to.have.lengthOf(20);
  });

  it('have a title for each open item in the list', () => {
    const issueListTitle = issueList.find('.l-issue-title');
    expect(issueListTitle).to.have.lengthOf(20);
  });
});
