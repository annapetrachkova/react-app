(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{14:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),o=n(5),s=n.n(o),r=(n(14),n(4)),a=n(2),l=n.n(a),d=i.a.createContext(),u=n(0),j={li:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:".5rem 1rem",border:"1px solid #ccc",borderRadius:"4px",marginBottom:".5rem"},input:{marginRight:"1rem"}};var b=function(e){var t=e.todo,n=e.index,i=e.onChange,o=Object(c.useContext)(d).removeTodo,s=[];return t.completed&&s.push("done"),Object(u.jsxs)("li",{style:j.li,children:[Object(u.jsxs)("span",{className:s.join(" "),children:[Object(u.jsx)("input",{type:"checkbox",checked:t.completed,style:j.input,onChange:function(){return i(t.id)}}),Object(u.jsx)("strong",{children:n+1}),"\xa0",t.title]}),Object(u.jsx)("button",{className:"rm",onClick:o.bind(null,t.id),children:"\xd7"})]})},h={ul:{listStyle:"none",margin:0,padding:0}};function p(e){return Object(u.jsx)("ul",{style:h.ul,children:e.todos.map((function(t,n){return Object(u.jsx)(b,{todo:t,index:n,onChange:e.onToggle},t.id)}))})}p.propType={todos:l.a.arrayOf(l.a.object).isRequired,onToggle:l.a.func.isRequired};var x=p,O=function(){return Object(u.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:".5rem"},children:Object(u.jsx)("div",{className:"lds-dual-ring"})})},m=n(6),f=n(7),g=n(9),v=n(8),y=(n(18),function(e){Object(g.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(m.a)(this,n);for(var c=arguments.length,i=new Array(c),o=0;o<c;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={isOpen:!1},e}return Object(f.a)(n,[{key:"render",value:function(){var e=this;return Object(u.jsxs)(i.a.Fragment,{children:[Object(u.jsx)("button",{onClick:function(){return e.setState({isOpen:!0})},children:"Click here!"}),this.state.isOpen&&Object(u.jsx)("div",{className:"modal",children:Object(u.jsxs)("div",{className:"modal-body",children:[Object(u.jsx)("h1",{children:"Nice to see you!"}),Object(u.jsx)("span",{className:"text",children:" I "}),Object(u.jsx)("svg",{className:"heart",viewBox:"0 0 32 29.6",children:Object(u.jsx)("path",{d:"M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2\r c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"})}),Object(u.jsx)("span",{className:"text",children:"You"}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{style:{marginTop:"40px"},onClick:function(){return e.setState({isOpen:!1})},children:"Bye-Bye!"})})]})})]})}}]),n}(i.a.Component)),C=i.a.lazy((function(){return new Promise((function(e){setTimeout((function(){e(n.e(3).then(n.bind(null,21)))}),1e3)}))}));var T=function(){var e=i.a.useState([]),t=Object(r.a)(e,2),n=t[0],o=t[1],s=i.a.useState(!0),a=Object(r.a)(s,2),l=a[0],j=a[1];return Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/todos?_limit=5").then((function(e){return e.json()})).then((function(e){setTimeout((function(){o(e),j(!1)}),1e3)}))}),[]),Object(u.jsx)(d.Provider,{value:{removeTodo:function(e){o(n.filter((function(t){return t.id!==e})))}},children:Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsx)("h1",{children:"ToDo"}),Object(u.jsx)(y,{}),Object(u.jsx)(i.a.Suspense,{fallback:Object(u.jsx)("p",{children:"Loading..."}),children:Object(u.jsx)(C,{onCreate:function(e){o(n.concat([{title:e,id:Date.now(),completed:!1}]))}})}),l&&Object(u.jsx)(O,{}),n.length?Object(u.jsx)(x,{todos:n,onToggle:function(e){o(n.map((function(t){return t.id===e&&(t.completed=!t.completed),t})))}}):l?null:Object(u.jsx)("p",{children:"No todos!"})]})})},N=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),o(e),s(e)}))};s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(T,{})}),document.getElementById("root")),N()}},[[19,1,2]]]);
//# sourceMappingURL=main.df517012.chunk.js.map