(function(t){function e(e){for(var n,o,u=e[0],c=e[1],s=e[2],d=0,l=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);f&&f(e);while(l.length)l.shift()();return i.push.apply(i,s||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,o=1;o<r.length;o++){var u=r[o];0!==a[u]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},o={app:0},a={app:0},i=[];function u(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"c107f432"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r={about:1};o[t]?e.push(o[t]):0!==o[t]&&r[t]&&e.push(o[t]=new Promise((function(e,r){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"3bd24e4c"}[t]+".css",a=c.p+n,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=i[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===n||d===a))return e()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],d=s.getAttribute("data-href");if(d===n||d===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[t],f.parentNode.removeChild(f),r(i)},f.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){o[t]=0})));var n=a[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=i);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=u(t);var l=new Error;s=function(e){d.onerror=d.onload=null,clearTimeout(f);var r=a[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,r[1](l)}a[t]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var f=d;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"25b0":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"priorities"},[r("md-button",{staticClass:"md-icon-button",on:{click:function(e){return t.updatePriority(0)}}},[r("md-avatar",{staticClass:"priority md-avatar-icon md-small priority-red"})],1),r("md-button",{staticClass:"md-icon-button",on:{click:function(e){return t.updatePriority(1)}}},[r("md-avatar",{staticClass:"priority md-avatar-icon md-small priority-yellow"})],1),r("md-button",{staticClass:"md-icon-button",on:{click:function(e){return t.updatePriority(2)}}},[r("md-avatar",{staticClass:"priority md-avatar-icon md-small priority-green"})],1)],1)},o=[],a={name:"Priorities",methods:{updatePriority:function(t){this.$emit("onHappy",t)}}},i=a,u=(r("3911"),r("2877")),c=Object(u["a"])(i,n,o,!1,null,null,null);e["a"]=c.exports},3911:function(t,e,r){"use strict";r("fd9c")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("md-app",[r("md-app-toolbar",{staticClass:"md-primary header"},[r("router-link",{staticClass:"md-title title",staticStyle:{"text-decoration":"none"},attrs:{to:"/"}},[t._v("TooDoo")]),null!==t.user&&null!==t.user.user?r("router-link",{attrs:{to:"/add"}},[r("md-button",{staticClass:"md-icon-button md-raised md-accent"},[r("md-icon",[t._v("add")])],1)],1):t._e(),null!==t.user&&null!==t.user.user?r("md-button",{staticClass:"md-icon-button",on:{click:function(e){return t.logout()}}},[r("md-avatar",[r("img",{attrs:{src:t.user.photoURL,alt:"Avatar"}})])],1):t._e()],1),r("md-app-content",[r("router-view")],1)],1)],1)},a=[],i=r("5530"),u=r("2f62"),c={computed:Object(i["a"])({},Object(u["b"])(["user"])),methods:{logout:function(){this.$store.dispatch("logout")}}},s=c,d=(r("034f"),r("2877")),l=Object(d["a"])(s,o,a,!1,null,null,null),f=l.exports,m=(r("45fc"),r("d3b7"),r("8c4f")),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"todos"},[t.todos.length?r("md-list",t._l(t.todos,(function(t){return r("div",{key:t.id},[r("Todo",{attrs:{todo:t}})],1)})),0):t._e()],1)},h=[],v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("md-card",{staticClass:"md-primary",style:t.colorStyle(t.todo.priority),attrs:{"md-theme":"purple-card","md-with-hover":""}},[r("md-card-header",[r("div",{staticClass:"md-title"},[t._v(t._s(t.todo.name))])]),r("md-card-actions",[r("Priorities",{on:{onHappy:t.updatePriority}}),r("md-button",{staticClass:"md-icon-button",on:{click:function(e){return t.remove()}}},[r("md-icon",[t._v("delete")])],1)],1)],1)],1)},b=[],g=r("25b0"),y={name:"Todo",props:["todo"],components:{Priorities:g["a"]},methods:{colorStyle:function(t){var e="#fdd9d7";return 1==t?e="#cdeefd":2==t&&(e="#dbefdc"),{backgroundColor:"".concat(e," !important")}},updatePriority:function(t){this.todo.priority=t,this.$store.dispatch("updateTodo",this.todo)},remove:function(){this.$store.dispatch("removeTodo",this.todo)}}},w=y,O=Object(d["a"])(w,v,b,!1,null,null,null),P=O.exports,j={name:"Todos",components:{Todo:P},computed:Object(i["a"])({},Object(u["b"])(["userProfile","todos"]))},C=j,_=Object(d["a"])(C,p,h,!1,null,null,null),k=_.exports,x=r("260b"),T=(r("ea7b"),r("e71f"),{apiKey:"AIzaSyDuZfn5e6Hst028bAMneKqq4Nkrfm96Lno",authDomain:"toodoo-81a6d.firebaseapp.com",databaseURL:"https://toodoo-81a6d.firebaseio.com",projectId:"toodoo-81a6d"});x["a"].initializeApp(T);var S=x["a"].firestore(),R=x["a"].auth(),A=new x["a"].auth.GoogleAuthProvider;A.addScope("profile"),A.addScope("email");var E=S.collection("users"),U=S.collection("todos");n["default"].use(m["a"]);var L=[{path:"/",name:"Todos",component:k,meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:function(){return r.e("about").then(r.bind(null,"a55b"))}},{path:"/add",name:"Add",component:function(){return r.e("about").then(r.bind(null,"6725"))}}],$=new m["a"]({mode:"history",base:"/",routes:L});$.beforeEach((function(t,e,r){var n=t.matched.some((function(t){return t.meta.requiresAuth}));n&&!R.currentUser?r("/login"):r()}));var q=$,D=(r("4160"),r("159b"),r("96cf"),r("1da1"));n["default"].use(u["a"]),R.onAuthStateChanged((function(t){I.commit("setUserProfile",t),t&&U.where("userId","==",t.uid).orderBy("priority").onSnapshot((function(t){var e=[];t.forEach((function(t){var r=t.data();r.id=t.id,e.push(r)})),I.commit("setTodos",e)}))}));var N,I=new u["a"].Store({state:{todos:[],user:R.currentUser},mutations:{setUserProfile:function(t,e){t.user=e,q.push("/")},setPerformingRequest:function(t,e){t.performingRequest=e},setTodos:function(t,e){t.todos=e}},actions:{login:function(){return Object(D["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,R.signInWithRedirect(A);case 2:case"end":return t.stop()}}),t)})))()},logout:function(t){return Object(D["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,R.signOut();case 3:r("setUserProfile",null),q.push("/login");case 5:case"end":return e.stop()}}),e)})))()},fetchUserProfile:function(t,e){return Object(D["a"])(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t.commit,r.next=3,E.doc(e.uid).get();case 3:o=r.sent,n("setUserProfile",o.data()),"/login"===q.currentRoute.path&&q.push("/");case 6:case"end":return r.stop()}}),r)})))()},createTodo:function(t,e){return Object(D["a"])(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t.state,o=t.commit,console.log(n,o),r.next=4,U.add({createdOn:new Date,name:e.todoName,userId:R.currentUser.uid,priority:e.todoPriority});case 4:q.push("/");case 5:case"end":return r.stop()}}),r)})))()},updateTodo:function(t,e){return Object(D["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t.commit,console.log(n),r.next=4,U.doc(e.id).update(e);case 4:case"end":return r.stop()}}),r)})))()},removeTodo:function(t,e){return Object(D["a"])(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n=t.state,o=t.commit,console.log(n,o),U.doc(e.id).delete().then((function(){console.log("Document successfully deleted!")})).catch((function(t){console.error("Error removing document: ",t)}));case 3:case"end":return r.stop()}}),r)})))()}}}),M=I,B=r("43f9"),H=r.n(B);r("51de"),r("e094");n["default"].config.productionTip=!1,n["default"].config.devtools=!0,n["default"].use(H.a),R.onAuthStateChanged((function(){N||(N=new n["default"]({router:q,store:M,render:function(t){return t(f)}}).$mount("#app"))}))},"85ec":function(t,e,r){},fd9c:function(t,e,r){}});
//# sourceMappingURL=app.018631fd.js.map