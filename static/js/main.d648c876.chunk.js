(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[0],{22:function(e,t,a){e.exports=a(32)},32:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(19),r=a.n(c),o=a(13),i=a(10),u=Object(n.createContext)(),m=function(e){var t=JSON.parse(localStorage.getItem("works"))||[],a=Object(n.useState)(t),c=Object(i.a)(a,2),r=c[0],m=c[1],s=Object(n.useState)(null),E=Object(i.a)(s,2),b=E[0],p=E[1];Object(n.useEffect)((function(){localStorage.setItem("works",JSON.stringify(r))}),[r]);return l.a.createElement(u.Provider,{value:{item:b,table:r,AddWork:function(e){var t=[].concat(Object(o.a)(r),[e]);m(t)},EditWork:function(e){var t=Object(o.a)(r);m(t.map((function(t){return t.Topic===b.Topic&&t.Details===b.Details?e:t}))),p(null)},Modify:function(e){p(e)},Delete:function(e){var t=Object(o.a)(r);m(t.filter((function(t){return!(t.Topic===e.Topic&&t.Details===e.Details)})))}}},e.children)},s=a(7),E=a(1),b=a(11),p=function(){var e=Object(n.useContext)(u),t=e.item,a=e.AddWork,c=e.EditWork,r=Object(n.useState)({Topic:"",Details:""}),o=Object(i.a)(r,2),m=o[0],s=o[1];Object(n.useEffect)((function(){t&&s(t)}),[t]);return l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),s({Topic:e.target.Topic.value,Details:e.target.Details.value}),t?c(m):a(m),s({Topic:"",Details:""})},className:"form"},l.a.createElement("h2",null,"Add Topics"),l.a.createElement("input",{onChange:function(e){s(Object(b.a)(Object(b.a)({},m),{},{Topic:e.target.value}))},value:m.Topic,type:"text",name:"Topic",placeholder:"Topic"}),l.a.createElement("input",{onChange:function(e){s(Object(b.a)(Object(b.a)({},m),{},{Details:e.target.value}))},value:m.Details,type:"text",name:"Details",placeholder:"Details"}),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},t?"Edit":"Add"))},d=a(33),f=function(e){var t=e.work,a=Object(n.useContext)(u),c=a.Modify,r=a.Delete;return console.log(t),l.a.createElement("div",null,l.a.createElement("tr",null,l.a.createElement("td",null,t.Topic),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){return c(t)},className:"btn btn-default"},"Edit")),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){return r(t)},className:"btn btn-default"},"Delete"))))},v=function(){var e=Object(n.useContext)(u).table;return l.a.createElement("div",{className:"container",style:{backgroundColor:"#F0E68C"}},e.length?l.a.createElement("table",{className:"list"},l.a.createElement("tbody",null,e.map((function(e){return l.a.createElement(f,{work:e,key:Object(d.a)()})})))):l.a.createElement("h3",null,"NoTopic"))},O=function(){return l.a.createElement("div",{className:"container"},l.a.createElement(p,null),l.a.createElement(v,null))},h=function(){var e=Object(n.useContext)(u).table;return l.a.createElement("div",{className:"container"},e.length?l.a.createElement("div",null,l.a.createElement("h4",null,"Number of Topics : ",e.length),l.a.createElement("table",{className:"list"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Topic"),l.a.createElement("th",null,"Details"))),l.a.createElement("tbody",null,e.map((function(e){return l.a.createElement("tr",{key:Object(d.a)()},l.a.createElement("td",null,e.Topic),l.a.createElement("td",null,e.Details))}))))):l.a.createElement("h3",null,"NoTopic"))},j=function(){return l.a.createElement("div",null,l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-wrapper"},l.a.createElement(s.b,{to:"#",class:"brand-logo"},"GL"),l.a.createElement("ul",{id:"nav-mobile",class:"right hide-on-med-and-down"},l.a.createElement("li",null,l.a.createElement(s.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/Topics"},"Topics"))))))};var T=function(){return l.a.createElement(s.a,null,l.a.createElement(m,null,l.a.createElement(j,null),l.a.createElement(E.c,null,l.a.createElement(E.a,{path:"/",exact:!0,component:O}),l.a.createElement(E.a,{path:"/Topics",component:h}))))};r.a.render(l.a.createElement(T,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.d648c876.chunk.js.map