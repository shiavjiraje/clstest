(this["webpackJsonphooks-app"]=this["webpackJsonphooks-app"]||[]).push([[0],{15:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var c=t(0),s=t(1),a=t(9),i=t.n(a),o=(t(15),function(){return Object(c.jsx)("div",{className:"header",children:Object(c.jsx)("h1",{children:"Budget App"})})}),r=t(5),u=t(8),j=t(2),x=function(e,n){switch(n.type){case"ADD_INCOME":return Object(j.a)(Object(j.a)({},e),{},{incomeTransactions:[n.payload].concat(Object(u.a)(e.incomeTransactions))});case"ADD_EXPENSE":return Object(j.a)(Object(j.a)({},e),{},{expenseTransactions:[n.payload].concat(Object(u.a)(e.expenseTransactions))});case"DELETE_TRANSACTION":return Object(j.a)(Object(j.a)({},e),{},{incomeTransactions:e.incomeTransactions.filter((function(e){return e.id!==n.payload})),expenseTransactions:e.expenseTransactions.filter((function(e){return e.id!==n.payload}))});default:return e}},l={incomeTransactions:[{id:1,incomeText:"Car Sold",incomeAmount:15e3},{id:2,incomeText:"Salary",incomeAmount:11e3},{id:3,incomeText:"Bonus",incomeAmount:19e3}],expenseTransactions:[{id:4,expenseText:"Rent",expenseAmount:9e3},{id:5,expenseText:"Bank",expenseAmount:11e3},{id:6,expenseText:"Clothes",expenseAmount:89e3}]},m=Object(s.createContext)(l),d=function(e){var n=e.children,t=Object(s.useReducer)(x,l),a=Object(r.a)(t,2),i=a[0],o=a[1];return Object(c.jsx)(m.Provider,{value:{incomeTransactions:i.incomeTransactions,expenseTransactions:i.expenseTransactions,addIncome:function(e){o({type:"ADD_INCOME",payload:e})},addExpense:function(e){o({type:"ADD_EXPENSE",payload:e})},deleteTransaction:function(e){o({type:"DELETE_TRANSACTION",payload:e})}},children:n})},p=function(){var e=Object(s.useContext)(m),n=e.incomeTransactions,t=e.expenseTransactions,a=n.map((function(e){return e.incomeAmount})),i=t.map((function(e){return e.expenseAmount})),o=a.reduce((function(e,n){return e+n}),0).toFixed(2),r=i.reduce((function(e,n){return e+n}),0).toFixed(2);return Object(c.jsxs)("div",{className:"balance",children:[Object(c.jsx)("h1",{children:"Your Balance"}),Object(c.jsxs)("h3",{children:["$",o-r]}),Object(c.jsxs)("div",{className:"income-expense",children:[Object(c.jsxs)("div",{className:"plus",children:[Object(c.jsx)("h3",{children:"Income"}),Object(c.jsxs)("p",{children:["+$",o]})]}),Object(c.jsxs)("div",{className:"minus",children:[Object(c.jsx)("h3",{children:"Expenses"}),Object(c.jsxs)("p",{children:["-$",r]})]})]})]})},b=t(4),O=t(18),h=function(){var e=Object(s.useContext)(m),n=e.addIncome,t=e.addExpense,a=Object(s.useState)({incomeText:"",incomeAmount:0}),i=Object(r.a)(a,2),o=i[0],u=i[1],x=o.incomeText,l=o.incomeAmount,d=function(e){u(Object(j.a)(Object(j.a)({},o),{},Object(b.a)({},e.target.name,e.target.value)))},p=Object(s.useState)({expenseText:"",expenseAmount:0}),h=Object(r.a)(p,2),T=h[0],f=h[1],v=T.expenseText,A=T.expenseAmount,N=function(e){f(Object(j.a)(Object(j.a)({},T),{},Object(b.a)({},e.target.name,e.target.value)))};return Object(c.jsxs)("div",{className:"form-wrapper",children:[Object(c.jsx)("form",{onSubmit:function(e){e.preventDefault();var t={id:Object(O.a)(),incomeText:x,incomeAmount:1*l};n(t),u({incomeText:"",incomeAmount:0})},children:Object(c.jsxs)("div",{className:"input-group income",children:[Object(c.jsx)("input",{type:"text",value:x,placeholder:"Add Income ...",name:"incomeText",autoComplete:"off",onChange:d}),Object(c.jsx)("input",{type:"number",value:l,placeholder:"Amount",name:"incomeAmount",autoComplete:"off",onChange:d}),Object(c.jsx)("input",{type:"submit",value:"Submit"})]})}),Object(c.jsx)("form",{onSubmit:function(e){e.preventDefault();var n={id:Object(O.a)(),expenseText:v,expenseAmount:1*A};t(n),f({expenseText:"",expenseAmount:0})},children:Object(c.jsxs)("div",{className:"input-group expense",children:[Object(c.jsx)("input",{type:"text",value:v,placeholder:"Add Expense ...",name:"expenseText",autoComplete:"off",onChange:N}),Object(c.jsx)("input",{type:"number",value:A,placeholder:"Expense Amount",name:"expenseAmount",autoComplete:"off",onChange:N}),Object(c.jsx)("input",{type:"submit",value:"Submit"})]})})]})},T=function(e){var n=e.incomeTransaction,t=Object(s.useContext)(m).deleteTransaction;return Object(c.jsxs)("li",{className:"transaction",children:[Object(c.jsx)("span",{className:"transaction-text",children:n.incomeText}),Object(c.jsx)("span",{className:"transaction-amount",children:n.incomeAmount}),Object(c.jsx)("button",{className:"delete-btn",onClick:function(){return t(n.id)},children:Object(c.jsx)("i",{className:"fas fa-trash"})})]})},f=function(){var e=Object(s.useContext)(m).incomeTransactions;return Object(c.jsxs)("div",{className:"transactions transactions-income",children:[Object(c.jsx)("h2",{children:"Transaction History"}),Object(c.jsx)("ul",{className:"transaction-list",children:e.map((function(e){return Object(c.jsx)(T,{incomeTransaction:e},e.id)}))})]})},v=function(e){var n=e.expenseTransaction,t=Object(s.useContext)(m).deleteTransaction;return Object(c.jsxs)("li",{className:"transaction",children:[Object(c.jsx)("span",{className:"transaction-text",children:n.expenseText}),Object(c.jsx)("span",{className:"transaction-amount",children:n.expenseAmount}),Object(c.jsx)("button",{className:"delete-btn",onClick:function(){return t(n.id)},children:Object(c.jsx)("i",{className:"fas fa-trash"})})]})},A=function(){var e=Object(s.useContext)(m).expenseTransactions;return console.log(e),Object(c.jsxs)("div",{className:"transactions transactions-expense",children:[Object(c.jsx)("h2",{children:"Transaction History"}),Object(c.jsx)("ul",{className:"transaction-list",children:e.map((function(e){return Object(c.jsx)(v,{expenseTransaction:e},e.id)}))})]})},N=function(){return Object(c.jsx)(d,{children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"app-wrapper",children:[Object(c.jsx)(o,{}),Object(c.jsx)(p,{}),Object(c.jsx)(h,{}),Object(c.jsx)(f,{}),Object(c.jsx)(A,{})]})})})};i.a.render(Object(c.jsx)(N,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.67621946.chunk.js.map