(this.webpackJsonprahulkumarborah=this.webpackJsonprahulkumarborah||[]).push([[0],{48:function(e,t,n){},49:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(15),i=n.n(r),s=(n(48),n(49),n(50),n(28)),o=n.n(s),l=n(32),d=n(29),j=n(91),h=n(87),u=n(92),b=n(59),O=n(82),x="https://api.hashnode.com",p=[{name:"Blog"}],m='query { user(username:"rahulborah") { publication { posts(page:0) { _id title brief slug coverImage dateAdded } } } }',f=n(84),v=n(85),g=n(86),y=n(93),N=n(81),S=n(4),w=Object(N.a)({card:{display:"flex"},cardDetails:{flex:1},cardMedia:{width:250}});function k(e){var t=w(),n=e.post;return Object(S.jsx)(O.a,{item:!0,xs:12,md:12,children:Object(S.jsxs)(f.a,{className:t.card,children:[Object(S.jsx)("div",{className:t.cardDetails,children:Object(S.jsxs)(v.a,{children:[Object(S.jsx)(b.a,{component:"h2",variant:"h5",children:n.title}),Object(S.jsx)(b.a,{variant:"subtitle1",color:"textSecondary",children:n.dateAdded}),Object(S.jsx)(b.a,{variant:"subtitle1",paragraph:!0,children:n.brief}),Object(S.jsx)(b.a,{variant:"subtitle1",color:"primary",component:"a",href:"".concat("https://rahulborah.hashnode.dev/").concat(n.slug),children:"Continue reading..."})]})}),Object(S.jsx)(y.a,{xsDown:!0,children:Object(S.jsx)(g.a,{className:t.cardMedia,image:n.coverImage,title:n.title})})]})})}function C(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),i=Object(d.a)(r,2),s=i[0],p=i[1];function f(){return(f=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(null),e.next=3,fetch(x,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:m})}).then((function(e){return e.json()})).then((function(e){var t,n,a;c(null===e||void 0===e||null===(t=e.data)||void 0===t||null===(n=t.user)||void 0===n||null===(a=n.publication)||void 0===a?void 0:a.posts)})).catch((function(){p(!0)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){f.apply(this,arguments)}()}),[]),s||!n?Object(S.jsxs)(j.a,{severity:"error",children:[Object(S.jsx)(h.a,{children:"Error"}),"Oops \u2014 ",Object(S.jsx)("strong",{children:"Getting recent blogs failed!"})]}):Object(S.jsxs)(u.a,{children:[Object(S.jsx)(b.a,{variant:"h5",children:"Recent Posts"}),Object(S.jsx)("br",{}),n&&n.length>0?Object(S.jsx)(O.a,{container:!0,spacing:3,children:n.map((function(e){return Object(S.jsx)(k,{post:e},e._id)}))}):Object(S.jsx)(S.Fragment,{children:"Loading..."})]})}var F=n(89),B=n(88),D=n(90);function I(e){var t=e.title,n=e.sections,a=void 0===n?[]:n;return Object(S.jsx)("header",{children:Object(S.jsx)(B.a,{children:Object(S.jsx)(F.a,{maxWidth:"lg",children:Object(S.jsxs)(D.a,{className:"Header-items",children:[Object(S.jsx)(b.a,{variant:"h6",children:t}),Object(S.jsx)(u.a,{component:"span",className:"Header-sections",children:a.map((function(e){return Object(S.jsx)(b.a,{variant:"h6",className:"Header-section",children:e.name},e.name)}))})]})})})})}var M=function(){return Object(S.jsxs)("div",{className:"App",children:[Object(S.jsx)(I,{title:"Rahul Kumar Borah",sections:p}),Object(S.jsx)(F.a,{maxWidth:"lg",className:"Main-container",children:Object(S.jsx)(C,{})})]})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,96)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(M,{})}),document.getElementById("root")),P()}},[[57,1,2]]]);
//# sourceMappingURL=main.0a845b27.chunk.js.map