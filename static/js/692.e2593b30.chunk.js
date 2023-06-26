"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[692],{576:function(n,t,e){e.d(t,{IQ:function(){return p},Jh:function(){return f},V0:function(){return d},YJ:function(){return s},gr:function(){return u}});var r=e(861),a=e(687),o=e.n(a),i=e(243),c="0f1efce4687e0d99ded26e5d35e0a6b0",u=function(){var n=(0,r.Z)(o().mark((function n(){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"https://api.themoviedb.org/3/trending/movie/day",t={api_key:c},n.next=4,i.Z.get("https://api.themoviedb.org/3/trending/movie/day",{params:t});case 4:return e=n.sent,n.abrupt("return",e);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="https://api.themoviedb.org/3/movie/".concat(t),r={api_key:c},n.next=4,i.Z.get(e,{params:r});case 4:return a=n.sent,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="https://api.themoviedb.org/3/movie/".concat(t,"/credits"),r={api_key:c},n.next=4,i.Z.get(e,{params:r});case 4:return a=n.sent,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="https://api.themoviedb.org/3/movie/".concat(t,"/reviews"),r={api_key:c},n.next=4,i.Z.get(e,{params:r});case 4:return a=n.sent,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"https://api.themoviedb.org/3/search/movie",e={api_key:c,query:"".concat(t)},n.next=4,i.Z.get("https://api.themoviedb.org/3/search/movie",{params:e});case 4:return r=n.sent,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},692:function(n,t,e){e.r(t),e.d(t,{default:function(){return Z}});var r,a,o,i,c=e(861),u=e(439),s=e(687),p=e.n(s),f=e(87),d=e(689),x=e(791),m=e(576),h=e(168),v=e(686),l=v.Z.div(r||(r=(0,h.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-right: auto;\n    margin-left: auto;\n    justify-content: center;\n    padding-top: 40px;\n    padding-bottom: 482px;\n"]))),g=v.Z.input(a||(a=(0,h.Z)(["\n    width: 400px;\n    height: 30px;\n    border-radius: 10px;\n    background-color: #975a5e;\n    color: #f3cba5;\n    padding: 10px;\n    font-size: 24px;\n    margin-bottom: 50px;\n    border: solid 3px;\n    box-shadow: -1px 1px 29px -10px rgba(211, 214, 219, 1);\n    -moz-box-shadow: -1px 1px 29px -10px rgba(211, 214, 219, 1);\n"]))),b=v.Z.ul(o||(o=(0,h.Z)(["\n    align-items: center;\n    margin-right: auto;\n    margin-left: auto;\n    justify-content: center;\n"]))),w=v.Z.li(i||(i=(0,h.Z)(["\n    background-color: #975a5e;\n    padding: 10px;\n    margin-bottom: 10px;\n    border-radius: 10px;\n    transition: transform 0.3s ease;\n    \n        &:hover {\n            transform: scale(1.05);\n            box-shadow: -1px 1px 29px -10px rgba(211, 214, 219, 1);\n            -moz-box-shadow: -1px 1px 29px -10px rgba(211, 214, 219, 1);\n        }\n"]))),y=e(184),Z=function(){var n,t=(0,x.useState)([]),e=(0,u.Z)(t,2),r=e[0],a=e[1],o=(0,f.lr)(),i=(0,u.Z)(o,2),s=i[0],h=i[1],v=(0,d.TH)(),Z=null!==(n=s.get("movieId"))&&void 0!==n?n:"";return(0,x.useEffect)((function(){var n=function(){var n=(0,c.Z)(p().mark((function n(){var t,e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,m.V0)(Z);case 3:t=n.sent,e=t.data.results,a(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.error("Error searching movies:",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[Z]),(0,y.jsxs)(l,{children:[(0,y.jsx)(g,{type:"text",onChange:function(n){var t=n.target.value;if(""===t)return h({});h({movieId:t})},placeholder:"enter movie"}),(0,y.jsx)(b,{children:r.map((function(n){return(0,y.jsx)(w,{children:(0,y.jsx)(f.rU,{state:{from:v},to:"/movies/".concat(n.id),style:{color:"#f3cba5",textDecoration:"none",display:"flex",alignItems:"center",justifyContent:"center"},children:n.title})},n.id)}))})]})}}}]);
//# sourceMappingURL=692.e2593b30.chunk.js.map