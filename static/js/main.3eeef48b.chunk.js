(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,n,a){e.exports=a(71)},48:function(e,n,a){},50:function(e,n,a){},71:function(e,n,a){"use strict";a.r(n);var t=a(2),r=a.n(t),c=a(25),s=a.n(c),o=(a(48),a(26)),l=a(27),i=a(38),u=a(28),m=a(39),d=a(29),p=a(14),h=a(30),E=a.n(h),f=(a(50),function(){return r.a.createElement("header",{className:"l-app-header"},r.a.createElement("h3",null," Github Issues - JavaScript Frameworks"))}),b=a(31),v=function(e){var n=e.data,a=Object(b.get)(n,"repository.issues.edges"),t=a&&a.map(function(e,n){return r.a.createElement("li",{key:n},function(e){var n="OPEN"===e?"f-issue-status-open":"f-issue-status-closed";return r.a.createElement("i",{className:n})}(e.node.state),r.a.createElement("span",{className:"l-issue-title"},e.node.title),r.a.createElement("span",{className:"l-issue-url"},"URL:",r.a.createElement("a",{href:e.node.url},e.node.url)))});return r.a.createElement("div",{className:"l-issue-list-container"},r.a.createElement("div",{className:"l-issue-list-header"},r.a.createElement("h5",null,"Repo: Facebook - React")),r.a.createElement("ul",null,t))};function w(){var e=Object(d.a)(['\n  {\n    repository(owner:"facebook", name:"react") {\n      issues(last:20, states:[OPEN]) { \n        edges { \n          node {\n            title\n            url\n            state\n            labels(first:5) {\n              edges {\n                node {\n                  name\n                  description\n                }\n              }\n            }\n          }\n        }\n      }\n    }    \n  }\n']);return w=function(){return e},e}var g=E()(w()),O=function(e){function n(){return Object(o.a)(this,n),Object(i.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"l-app-container"},r.a.createElement(f,null),r.a.createElement("section",{className:"l-issues-wrapper"},r.a.createElement(p.Query,{query:g},function(e){var n=e.loading,a=e.error,t=e.data;return n?r.a.createElement("div",null,"Fetching..."):a?r.a.createElement("div",{className:"l-error"},"Error"):r.a.createElement(v,{data:t})})))}}]),n}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=a(40),j=a(24),k=a(41),y=a(77),B=a(37),F=Object(k.a)({uri:"https://api.github.com/graphql"}),J=Object(B.a)(function(e,n){var a=n.headers,t="44a05b4361cce0059b93efa286e35d61f359cc3b";return{headers:Object(N.a)({},a,{authorization:"Bearer ".concat(t)})}}),P=new j.a({link:J.concat(F),cache:new y.a});s.a.render(r.a.createElement(p.ApolloProvider,{client:P},r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,2,1]]]);
//# sourceMappingURL=main.3eeef48b.chunk.js.map