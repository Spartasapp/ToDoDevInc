(window.webpackJsonptodolist=window.webpackJsonptodolist||[]).push([[0],{20:function(e,t,a){e.exports={mainPageLight:"MainPage_mainPageLight__1o4ky",mainPageDark:"MainPage_mainPageDark__15o-6",todoContainer:"MainPage_todoContainer__3Kl_0",deleteButton:"MainPage_deleteButton__3Pou4",completed:"MainPage_completed__HqrrI",date:"MainPage_date__22o12",toDoDark:"MainPage_toDoDark__1n1D2",toDoLight:"MainPage_toDoLight__1CXF4"}},25:function(e,t,a){e.exports={logo:"Logo_logo__2WSYJ",logoName:"Logo_logoName__OQdcS",outerCircle:"Logo_outerCircle__2DwEX",innerCircle:"Logo_innerCircle__12Qb9"}},27:function(e,t,a){e.exports={navBar:"NavBar_navBar__1ZyWF",activeLink:"NavBar_activeLink__2Dc9U"}},28:function(e,t,a){e.exports={links:"Home_links__19Dq_",linkName:"Home_linkName__3Z93A",home:"Home_home__Gd_B0"}},29:function(e,t,a){e.exports={container:"Settings_container__yKQn6",linkName:"Settings_linkName__2I1qG",links:"Settings_links__1psoi"}},3:function(e,t,a){e.exports={containerLight:"ToDoItem_containerLight__2N_08",containerDark:"ToDoItem_containerDark__d-RXI",todoContainer:"ToDoItem_todoContainer__35kgZ",header:"ToDoItem_header__10hDp",headerChilds:"ToDoItem_headerChilds___EROW",nameToDoItem:"ToDoItem_nameToDoItem__2HYon",content:"ToDoItem_content__1uPU7",description:"ToDoItem_description__2WmiH",trash:"ToDoItem_trash__3FEVG",buttons:"ToDoItem_buttons__2Jq1C",closeButton:"ToDoItem_closeButton__eXvAN",deleteButton:"ToDoItem_deleteButton__1pfyI",completed:"ToDoItem_completed__b3qUE",date:"ToDoItem_date__2JF4Q",headerBox:"ToDoItem_headerBox__30P2M"}},30:function(e,t,a){e.exports={headerLight:"Header_headerLight__2we4A",darkToLigh:"Header_darkToLigh__1u0Xu",addToDoButton:"Header_addToDoButton__3Hevf",headerDark:"Header_headerDark__3EOca",lightToDar:"Header_lightToDar__mKiYc"}},31:function(e,t,a){e.exports={backgroundAppLight:"BackgroundApp_backgroundAppLight__2vTZA",darkToLight:"BackgroundApp_darkToLight__1bUt9",elements:"BackgroundApp_elements__3x7TW",backgroundAppDark:"BackgroundApp_backgroundAppDark__1Bqa4",lightToDark:"BackgroundApp_lightToDark__3SwHR"}},36:function(e,t,a){e.exports={containerLight:"ComlitedItem_containerLight__3rPSa",containerDark:"ComlitedItem_containerDark__1Xhsz",todoContainer:"ComlitedItem_todoContainer__2XfJo",deleteButton:"ComlitedItem_deleteButton__PyrJs",completed:"ComlitedItem_completed__2UJY0",date:"ComlitedItem_date__1MTMg"}},42:function(e,t,a){e.exports=a(57)},47:function(e,t,a){},48:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(13),c=a.n(r),i=(a(47),a(48),a(27)),l=a.n(i),u=a(28),d=a.n(u),s=a(9),m=a(10),_=function(){return o.a.createElement("div",{className:d.a.home},o.a.createElement("div",{className:d.a.linkName},o.a.createElement(s.a,{size:"1x",icon:m.e,className:d.a.links}),"Home"))},p=a(29),D=a.n(p),E=function(){return o.a.createElement("div",{className:D.a.container},o.a.createElement("div",{className:D.a.linkName},o.a.createElement(s.a,{size:"1x",icon:m.c,className:D.a.links}),"Settings"))},g=a(22),f=a(25),h=a.n(f),T=function(){return o.a.createElement("div",{className:h.a.logo},o.a.createElement("div",{className:h.a.outerCircle},o.a.createElement("div",{className:h.a.innerCircle})),o.a.createElement("div",{className:h.a.logoName},"ToDo"))},v=function(){return o.a.createElement("div",{className:l.a.navBar},o.a.createElement(T,null),o.a.createElement(g.b,{activeClassName:l.a.activeLink,to:"/home"},o.a.createElement(_,null)),o.a.createElement(g.b,{activeClassName:l.a.activeLink,to:"/settings"},o.a.createElement(E,null)))},N=a(30),k=a.n(N),C=a(5),O=a(19),b=a(18);function L(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function B(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?L(a,!0).forEach((function(t){Object(b.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):L(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var I={status:!1,toDoCount:null,toDo:[],complited:[],complitedCount:null},y=null,A=function(e){return{type:"DELETE_TODO",id:e}},P=function(e,t){return{type:"CHANGE_TEXT_TODO",id:e,description:t}},j=function(){return{type:"ADD_NEW_TODO"}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DELETE_TODO":var a=e.toDo.filter((function(e){return e.id!==t.id}));return B({},e,{toDo:a,toDoCount:a.length});case"DELETE_COMPLETED_TODO":var n=e.complited.filter((function(e){return e.id!==t.id}));return B({},e,{complited:n,complitedCount:n.length});case"ADD_NEW_TODO":y++;var o=(new Date).toLocaleString(),r={id:y,nameToDo:"...type name Todo",description:"...type description",priority:"low",date:o},c=[].concat(Object(O.a)(e.toDo),[r]);return B({},e,{toDo:c,toDoCount:c.length});case"REDIRECT_TODO_IN_COMPLETED":var i,l=e.toDo.filter((function(e){if(e.id!==t.id)return e;i=e}));return B({},e,{toDo:l,complited:[].concat(Object(O.a)(e.complited),[i]),toDoCount:[e.toDoCount-1],complitedCount:e.complited.length+1});case"CHANGE_TEXT_TODO":var u=e.toDo.map((function(e){return e.id!==t.id?e:B({},e,{description:t.description})}));return B({},e,{toDo:u});case"CHANGE_NAME_TODO":var d=e.toDo.map((function(e){return e.id!==t.id?e:B({},e,{nameToDo:t.nameToDo})}));return B({},e,{toDo:d});case"CHANGE_BACKGROUND_APP":return B({},e,{status:t.status});default:return e}},R=Object(C.b)((function(e){return{status:e.todoReducer.status}}),(function(e){return{addNewToDo:function(){e((function(e,t){e(j());var a=t().todoReducer.toDo,n=JSON.stringify(a);localStorage.setItem("our-state",n)}))}}}))((function(e){var t=!0===e.status?k.a.headerDark:k.a.headerLight;return o.a.createElement("div",{className:t},o.a.createElement("div",{onClick:function(){return e.addNewToDo()},className:k.a.addToDoButton},"New ToDo"))})),x=a(20),H=a.n(x),M=a(3),S=a.n(M),G=a(24),J=Object(C.b)((function(e){return{description:e.todoReducer.toDo.description,status:e.todoReducer.status,nameToDo:e.todoReducer.nameToDo}}),(function(e){return{deleteToDo:function(t){e(A(t))},changeText:function(t,a){e(P(t,a))},changeNameToDo:function(t,a){e(function(e,t){return{type:"CHANGE_NAME_TODO",id:e,nameToDo:t}}(t,a))},addCurrentTodoInCompleted:function(t){e(function(e){return{type:"REDIRECT_TODO_IN_COMPLETED",id:e}}(t))}}}))((function(e){var t=Object(n.useState)(!1),a=Object(G.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(!1),l=Object(G.a)(i,2),u=l[0],d=l[1],_=Object(n.useState)(!0),p=Object(G.a)(_,2),D=p[0],E=p[1],g=1,f="low";return o.a.createElement("div",{className:S.a.todoContainer,key:e.el.id},o.a.createElement("div",{className:S.a.header},o.a.createElement("div",{className:S.a.headerChilds},o.a.createElement("div",{className:S.a.priority,onClick:function(){++g>3&&(g=1),1===g?f="low":2===g?f="Medium":3===g&&(f="High")}},f," priority"),o.a.createElement(s.a,{size:"1x",icon:m.b,className:S.a.date}),o.a.createElement("div",null,e.el.date))),u?o.a.createElement("input",{onChange:function(t){e.changeNameToDo(e.el.id,t.currentTarget.value)},autoFocus:!0,onBlur:function(){return d(!1)},value:e.nameToDo,placeholder:"...change ToDoName"}):o.a.createElement("div",{className:S.a.nameToDoItem,onClick:function(){return d(!0)}},e.el.nameToDo),o.a.createElement("div",{className:S.a.content},r?o.a.createElement("input",{onChange:function(t){e.changeText(e.el.id,t.currentTarget.value)},autoFocus:!0,onBlur:function(){return c(!1)},value:e.description,placeholder:"...change description "}):o.a.createElement("div",{className:S.a.description,onClick:function(){return c(!0)}},e.el.description),o.a.createElement("div",{className:S.a.buttons,onClick:function(){E(!1)}},D?o.a.createElement(s.a,{size:"1x",icon:m.d,className:S.a.deleteButton}):o.a.createElement("button",{className:S.a.comletedButton,onClick:function(){return e.addCurrentTodoInCompleted(e.el.id)}},"Completed")),D?"":o.a.createElement("button",{className:S.a.closeButton,onClick:function(){E(!0)}},"close"),o.a.createElement("div",{className:S.a.trash,onClick:function(){e.deleteToDo(e.el.id)}},o.a.createElement(s.a,{size:"1x",icon:m.f,className:S.a.deleteButton}))))})),W=Object(C.b)((function(e){return{todo:e.todoReducer.toDo,status:e.todoReducer.status}}))((function(e){var t=!0===e.status?S.a.containerDark:S.a.containerLight;return o.a.createElement("div",{className:t},e.todo.map((function(e){return o.a.createElement(J,{el:e})})))})),X=a(36),z=a.n(X),U=Object(C.b)((function(e){return{complited:e.todoReducer.complited}}),(function(e){return{deleteToDo:function(t){e(function(e){return{type:"DELETE_COMPLETED_TODO",id:e}}(t))}}}))((function(e){return o.a.createElement("div",{className:S.a.todoContainer,key:e.el.id},o.a.createElement("div",{className:S.a.header},o.a.createElement("div",{className:S.a.headerChilds},o.a.createElement(s.a,{size:"0.5x",icon:m.a,className:S.a.completed}))),o.a.createElement("div",{className:S.a.nameToDoItem},e.el.nameToDo),o.a.createElement("div",{className:S.a.content},o.a.createElement("div",{className:S.a.description},e.el.description),o.a.createElement("div",{className:S.a.trash,onClick:function(){e.deleteToDo(e.el.id)}},o.a.createElement(s.a,{size:"1x",icon:m.f,className:S.a.deleteButton}))))})),q=Object(C.b)((function(e){return{complited:e.todoReducer.complited,status:e.todoReducer.status}}),(function(e){return{deleteToDo:function(t){e(A(t))},changeText:function(t,a){e(P(t,a))}}}))((function(e){var t=!0===e.status?z.a.containerDark:z.a.containerLight;return o.a.createElement("div",{className:t},e.complited.map((function(e){return o.a.createElement(U,{el:e})})))})),F=Object(C.b)((function(e){return{status:e.todoReducer.status,toDoCount:e.todoReducer.toDoCount,completedCount:e.todoReducer.complitedCount,backGroundApp:e.todoReducer.backGroundApp}}))((function(e){var t=!0===e.status?H.a.mainPageDark:H.a.mainPageLight;return o.a.createElement("div",{className:t},!0===e.status?o.a.createElement("div",{className:H.a.toDoDark},"ToDo(",e.toDoCount,")"):o.a.createElement("div",{className:H.a.toDoLight},"ToDo(",e.toDoCount,")"),o.a.createElement(W,null),!0===e.status?o.a.createElement("div",{className:H.a.toDoDark},"Completed(",e.completedCount,")"):o.a.createElement("div",{className:H.a.toDoLight},"Completed(",e.completedCount,")"),o.a.createElement(q,null),e.backGroundApp)})),K=a(15),Q=a(31),Y=a.n(Q),Z=a(71),V=Object(C.b)((function(e){return{status:e.todoReducer.status}}),(function(e){return{changeBackgroundApp:function(t){e(function(e){return{type:"CHANGE_BACKGROUND_APP",status:e}}(t))}}}))((function(e){var t=Object(n.useState)(!1),a=Object(G.a)(t,2),r=a[0],c=a[1],i=!0===e.status?Y.a.backgroundAppDark:Y.a.backgroundAppLight;return o.a.createElement("div",{className:i},o.a.createElement("div",{className:Y.a.elements},"Change Background App - ",o.a.createElement(Z.a,{onChange:function(){c(!r),e.changeBackgroundApp(r)},checked:e.status,value:r.checked,color:"primary",inputProps:{"aria-label":"primary checkbox"}})))})),$=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(v,null),o.a.createElement(R,null),o.a.createElement(K.a,{path:"/home",render:function(){return o.a.createElement(F,null)}}),o.a.createElement(K.a,{path:"/settings",render:function(){return o.a.createElement(V,null)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ee=a(23),te=a(40),ae=Object(ee.c)({todoReducer:w}),ne=Object(ee.d)(ae,Object(ee.a)(te.a));c.a.render(o.a.createElement(g.a,null,o.a.createElement(C.a,{store:ne},o.a.createElement($,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[42,1,2]]]);
//# sourceMappingURL=main.c060088f.chunk.js.map