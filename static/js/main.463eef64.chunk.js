(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{13:function(e,t,a){e.exports=a(25)},18:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(9),c=a.n(o),r=(a(18),a(19),a(20),a(1)),i=a(12),m=a(4),s=a(10),u=function(e){var t=e.addNewTodo,a=Object(n.useState)(""),o=Object(m.a)(a,2),c=o[0],r=o[1];return l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a={title:c,id:Object(s.v4)(),isCompleted:!1,isBeingEdited:!1};t(a),r("")}},l.a.createElement("input",{type:"text",value:c,onChange:function(e){e.target.value.trim()&&r(e.target.value)},className:"new-todo",placeholder:"What needs to be done?"}))},d=a(11),p=a.n(d),f=a(2),E=a.n(f),b=(E.a.shape({id:E.a.string.isRequired,title:E.a.string.isRequired,isCompleted:E.a.bool.isRequired,isBeingEdited:E.a.bool.isRequired}),function(e){var t=e.removeItem,a=e.todos,n=e.toggleCompletedStatus;return l.a.createElement("ul",{className:"todo-list"},a.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("div",{className:p()({view:!e.isCompleted,completed:e.isCompleted,editing:e.isBeingEdited})},l.a.createElement("input",{type:"checkbox",className:"toggle",onChange:function(){return n(e.id)}}),l.a.createElement("label",null,e.title),l.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return t(e.id)}})),l.a.createElement("input",{type:"text",className:"edit"}))})))}),g=function(e){var t=e.todos,a=e.clearCompleted,n=t.filter((function(e){return!e.isCompleted}));return l.a.createElement("footer",{className:"footer"},l.a.createElement("span",{className:"todo-count"},n.length," ","items left"),l.a.createElement("ul",{className:"filters"},l.a.createElement("li",null,l.a.createElement("a",{href:"#/",className:"selected"},"All")),l.a.createElement("li",null,l.a.createElement("a",{href:"#/active"},"Active")),l.a.createElement("li",null,l.a.createElement("a",{href:"#/completed"},"Completed"))),l.a.createElement("button",{type:"button",className:"clear-completed",onClick:a},"Clear completed"))};var C=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(!1),s=Object(m.a)(c,2),d=s[0],p=s[1];return l.a.createElement("section",{className:"todoapp"},l.a.createElement("header",{className:"header"},l.a.createElement("h1",null,"todos"),l.a.createElement(u,{addNewTodo:function(e){o([e].concat(Object(i.a)(a)))}})),l.a.createElement("section",{className:"main"},l.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",onChange:function(){o(d?a.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{isCompleted:!1})})):a.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{isCompleted:!0})}))),p(!d)}}),l.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),l.a.createElement(b,{removeItem:function(e){o(a.filter((function(t){return t.id!==e})))},toggleCompletedStatus:function(e){o(a.map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{isCompleted:!t.isCompleted}):t})))},todos:a})),l.a.createElement(g,{clearCompleted:function(){o(a.filter((function(e){return!e.isCompleted})))},todos:a}))};c.a.render(l.a.createElement(C,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.463eef64.chunk.js.map