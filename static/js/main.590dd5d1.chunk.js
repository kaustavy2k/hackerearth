(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{29:function(t,e,n){},38:function(t,e,n){},57:function(t,e,n){},63:function(t,e,n){},64:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(0),a=n.n(r),s=n(30),i=n.n(s),o=(n(38),n(8)),l=n(9),j=n(11),u=n(10),h=(n(15),n(13)),b=n(2),d=n(31),m=n.n(d),p=(n(57),function(t){Object(j.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={items:t.props.state,filter:""},t.handleChange=function(e){t.setState({filter:e.target.value})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.items,n=t.filter,r=n.toLowerCase(),s=e.filter((function(t){return Object.keys(t).some((function(e){return t[e].toLowerCase().includes(r)}))}));return Object(c.jsxs)(a.a.Fragment,{children:[Object(c.jsx)("input",{type:"text",id:"myInput",value:n,onChange:this.handleChange,placeholder:"Search for names..",title:"Type in a name"}),Object(c.jsx)("ul",{className:"row userFlex",children:s.map((function(t){return Object(c.jsx)("div",{className:"col-lg-3 col-md-6 col-sm-6 listItems",children:Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("img",{src:t.Image,className:"userImg",alt:"User pic"}),Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsx)("h5",{className:"card-title",children:t.name}),Object(c.jsx)(h.b,{to:"/".concat(t.id),children:Object(c.jsx)("button",{className:"btn btn-primary",children:"Show Details"})})]})]})},t.id)}))})]})}}]),n}(r.Component)),O=(n(29),a.a.createContext({items:[],rej:[],short:[],shortlisted:function(){},rejected:function(){}})),f=function(t){Object(j.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={redirect:!1},t.toggle=function(){t.setState({redirect:!0})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=1*this.props.match.params.id;return this.state.redirect?Object(c.jsx)(b.a,{to:"/"}):Object(c.jsx)(O.Consumer,{children:function(n){return Object(c.jsxs)("div",{className:"cardProfile",children:[Object(c.jsx)("img",{className:"Img",src:n.items[e-1001].Image,alt:"img"}),Object(c.jsx)("h1",{children:n.items[e-1001].name}),Object(c.jsx)("p",{className:"title",children:"Profile Details"}),Object(c.jsx)("button",{className:"buttonProfile btn btn-primary",onClick:t.toggle,children:"Shortlist"}),Object(c.jsx)("button",{className:"buttonProfile btn btn-secondary",onClick:t.toggle,children:"Reject"})]})}})}}]),n}(r.Component),x=function(t){Object(j.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsx)(O.Consumer,{children:function(t){return Object(c.jsx)("ul",{className:"row userFlex",children:t.short.map((function(t){return Object(c.jsx)("li",{children:t})}))})}})}}]),n}(r.Component),g=(n(63),function(t){Object(j.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={loading:!0,items:[],error:null,short:[],rej:[]},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;m.a.get("https://cors-anywhere.herokuapp.com/https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json",{}).then((function(e){t.setState({loading:!1,items:e.data})})).catch((function(e){t.setState({loading:!1,error:e})}))}},{key:"render",value:function(){var t=this,e=this.state,n=e.error,r=e.loading;return n?Object(c.jsxs)("div",{children:["Error: ",n.message]}):r?Object(c.jsx)("div",{children:"Loading..."}):Object(c.jsx)(h.a,{children:Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(O.Provider,{value:this.state,children:[Object(c.jsx)(b.b,{exact:!0,path:"/",component:function(){return Object(c.jsx)(p,{state:t.state.items})}}),Object(c.jsx)(b.b,{path:"/:id",component:f}),Object(c.jsx)(b.b,{exact:!0,path:"/shortlisted",component:x}),Object(c.jsx)(b.b,{exact:!0,path:"/rejected",component:f})]})})})}}]),n}(r.Component)),v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),r(t),a(t),s(t)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root")),v()}},[[64,1,2]]]);
//# sourceMappingURL=main.590dd5d1.chunk.js.map