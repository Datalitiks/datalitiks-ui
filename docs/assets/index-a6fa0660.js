import{j as r}from"./index-9cde152d.js";import{c as s,s as o,a as l}from"./float-b00c04c2.js";const m=s({base:{display:"grid",gridTemplateAreas:"'leftBar header rightBar' 'leftBar main rightBar' 'footer footer footer'",gridTemplateColumns:"auto 1fr auto",gridTemplateRows:"auto 1fr auto"}}),c=s({base:{gridArea:"rightBar"}}),f=({className:e,children:a,...t})=>r(o.aside,{...t,className:l(c({}),e),children:a}),n=s({base:{gridArea:"main"}}),p=({className:e,children:a,...t})=>r(o.main,{...t,className:l(n({}),e),children:a}),d=s({base:{gridArea:"leftBar"}}),u=({className:e,children:a,...t})=>r(o.nav,{...t,className:l(d({}),e),children:a}),g=s({base:{gridArea:"header"}}),T=({className:e,children:a,...t})=>r(o.header,{...t,className:l(g({}),e),children:a}),B=s({base:{gridArea:"footer"}}),R=({className:e,children:a,...t})=>r(o.footer,{...t,className:l(B({}),e),children:a}),i=({className:e,children:a,...t})=>r(o.section,{...t,className:l(m({}),e),children:a});i.LeftBar=u;i.RightBar=f;i.Header=T;i.Main=p;i.Footer=R;export{i as D};