(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{101:function(e,t){},107:function(e,t,n){},108:function(e,t,n){},214:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),r=n(24),a=n.n(r),s=(n(107),n(108),n(109),n(220)),j=n(219),o=n(221),l=n(216),d=n(46),b=n(47),u=n(33),O=n(53),h=n(52),x=n(218),p=n(217),m=function(e){var t={};return e.firstName||(t.firstName="Required"),e.lastName||(t.lastName="Required"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.sex||(t.sex="Required"),e.favoriteColor||(t.favoriteColor="Required"),t},v=n(29),f=n(2),g=function(e){var t=e.input,n=e.label,i=e.type,c=e.meta,r=c.touched,a=c.error;return Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{children:n}),Object(f.jsxs)("div",{children:[Object(f.jsx)("input",Object(v.a)(Object(v.a)({},t),{},{placeholder:n,type:i})),r&&a&&Object(f.jsx)("span",{children:a})]})]})},y=Object(p.a)({form:"wizard",destroyOnUnmount:!1,forceUnregisterOnUnmount:!0,validate:m})((function(e){var t=e.handleSubmit;return Object(f.jsxs)("form",{onSubmit:t,children:[Object(f.jsx)(x.a,{name:"firstName",type:"text",component:g,label:"First Name"}),Object(f.jsx)(x.a,{name:"lastName",type:"text",component:g,label:"Last Name"}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{type:"submit",className:"next",children:"Next"})})]})})),P=n(101),N=n.n(P),S=["Red","Orange","Yellow","Green","Blue","Indigo","Violet"],A=function(e){var t=e.input,n=e.meta,i=n.touched,c=n.error;return Object(f.jsxs)("div",{children:[Object(f.jsxs)("select",Object(v.a)(Object(v.a)({},t),{},{children:[Object(f.jsx)("option",{value:"",children:"Select a color..."}),S.map((function(e){return Object(f.jsx)("option",{value:e,children:e},e)}))]})),i&&c&&Object(f.jsx)("span",{children:c})]})},C=Object(p.a)({form:"wizard",destroyOnUnmount:!1,forceUnregisterOnUnmount:!0,validate:m})((function(e){var t=e.handleSubmit,n=e.pristine,i=e.previousPage,c=e.submitting;return Object(f.jsxs)("form",{onSubmit:t,children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{children:"Favorite Color"}),Object(f.jsx)(x.a,{name:"favoriteColor",component:A})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{htmlFor:"employed",children:"Employed"}),Object(f.jsx)("div",{children:Object(f.jsx)(x.a,{name:"employed",id:"employed",component:"input",type:"checkbox"})})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{children:"Notes"}),Object(f.jsx)("div",{children:Object(f.jsx)(x.a,{name:"notes",component:"textarea",placeholder:"Notes"})})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("button",{type:"button",className:"previous",onClick:i,children:"Previous"}),Object(f.jsx)("button",{type:"submit",disabled:n||c,children:"Submit"})]})]})})),k=function(e){Object(O.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).nextPage=i.nextPage.bind(Object(u.a)(i)),i.previousPage=i.previousPage.bind(Object(u.a)(i)),i.state={page:1},i}return Object(b.a)(n,[{key:"nextPage",value:function(){this.setState({page:this.state.page+1})}},{key:"previousPage",value:function(){this.setState({page:this.state.page-1})}},{key:"render",value:function(){var e=this.props.onSubmit,t=this.state.page;return Object(f.jsxs)("div",{children:[1===t&&Object(f.jsx)(y,{onSubmit:this.nextPage}),2===t&&Object(f.jsx)(N.a,{previousPage:this.previousPage,onSubmit:this.nextPage}),3===t&&Object(f.jsx)(C,{previousPage:this.previousPage,onSubmit:e})]})}}]),n}(i.Component),F=function(e){Object(O.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{children:Object(f.jsx)("div",{children:Object(f.jsxs)("main",{children:[Object(f.jsx)("div",{}),Object(f.jsx)("h1",{children:"Home"}),Object(f.jsx)(k,{})]})})})}}]),n}(i.Component);var w=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)("header",{className:"App-header",children:[Object(f.jsx)(F,{}),Object(f.jsxs)(s.a,{children:[Object(f.jsx)(j.a,{caret:!0,children:"Dropdown"}),Object(f.jsxs)(o.a,{children:[Object(f.jsx)(l.a,{header:!0,children:"Header"}),Object(f.jsx)(l.a,{disabled:!0,children:"Action"}),Object(f.jsx)(l.a,{children:"Another Action"}),Object(f.jsx)(l.a,{divider:!0}),Object(f.jsx)(l.a,{children:"Another Action"})]})]})]})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,222)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),i(e),c(e),r(e),a(e)}))};a.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(w,{})}),document.getElementById("root")),R()}},[[214,1,2]]]);
//# sourceMappingURL=main.0de23e1f.chunk.js.map