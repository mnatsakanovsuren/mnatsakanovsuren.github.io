(this["webpackJsonptest-light-it"]=this["webpackJsonptest-light-it"]||[]).push([[0],{27:function(e,t,r){},28:function(e,t,r){},36:function(e,t,r){"use strict";r.r(t);var c=r(1),n=r.n(c),s=r(20),a=r.n(s),A=(r(27),r(4)),i=r(5),o=r(2),d=(r(28),r(0)),j=function(){return Object(d.jsx)("section",{className:"home",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"home__title-wrap",children:[Object(d.jsx)("h1",{className:"home__title",children:"Welcome"}),Object(d.jsx)("h3",{className:"home__subtitle",children:"to test task for Light IT"})]}),Object(d.jsx)("div",{className:"home__content",children:Object(d.jsxs)("p",{className:"home__text",children:["by ",Object(d.jsx)("a",{href:"https://www.linkedin.com/in/suren-mnatsakanov/",children:"Mnatsakanov Suren"})]})})]})})},u=r(6),l=r.n(u),h=r(10),b=function(e){var t=e.setToken,r=Object(c.useState)(""),n=Object(A.a)(r,2),s=n[0],a=n[1],j=Object(c.useState)(""),u=Object(A.a)(j,2),b=u[0],m=u[1],p=Object(c.useState)(!1),O=Object(A.a)(p,2),f=O[0],g=O[1],x=Object(o.f)(),v=function(){var e=Object(h.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://smktesting.herokuapp.com/api/login/",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(h.a)(l.a.mark((function e(r){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.next=3,v({username:s,password:b});case 3:(c=e.sent).success?(t(c.token),localStorage.setItem("token",c.token),x.push("/home")):g(!0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("section",{className:"login section",children:[Object(d.jsx)("h1",{className:"login__title",children:"Login"}),Object(d.jsxs)("form",{className:"login__form form",children:[Object(d.jsxs)("label",{className:"login__form__item form__item",htmlFor:"username",children:["Username",Object(d.jsx)("input",{className:"form__input",onChange:function(e){a(e.target.value)},value:s,id:"username",type:"text"})]}),Object(d.jsxs)("label",{className:"login__form__item form__item",htmlFor:"password",children:["Password",Object(d.jsx)("input",{className:"form__input",onChange:function(e){m(e.target.value)},value:b,id:"password",type:"password"})]}),Object(d.jsx)("button",{className:"form__button",type:"submit",onClick:w,children:"Login"}),f&&Object(d.jsx)("p",{className:"login__error form__error",children:"wrong login or password, please try again with another data"})]}),Object(d.jsxs)("p",{children:["If you don't have login - click ",Object(d.jsx)(i.b,{to:"/register",children:"registration"})]})]})},m=function(){var e=Object(c.useState)(""),t=Object(A.a)(e,2),r=t[0],n=t[1],s=Object(c.useState)(""),a=Object(A.a)(s,2),i=a[0],j=a[1],u=Object(o.f)(),b=function(){var e=Object(h.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://smktesting.herokuapp.com/api/register/",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(h.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,b({username:r,password:i});case 3:e.sent.ok&&u.push("/login");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("section",{className:"register section",children:[Object(d.jsx)("h1",{className:"register__title",children:"Register"}),Object(d.jsxs)("form",{className:"register__form form",children:[Object(d.jsxs)("label",{className:"register__form__item form__item",htmlFor:"username",children:["Username",Object(d.jsx)("input",{className:"register__form__input form__input",onChange:function(e){n(e.target.value)},value:r,id:"username",type:"text"})]}),Object(d.jsxs)("label",{className:"register__form__item form__item",htmlFor:"password",children:["Password",Object(d.jsx)("input",{className:"register__form__input form__input",onChange:function(e){j(e.target.value)},value:i,id:"password",type:"password"})]}),Object(d.jsx)("button",{className:"form__button",type:"submit",onClick:m,children:"Register"})]})]})},p=function(e){var t=e.products;return Object(d.jsx)("section",{className:"products",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{className:"products__title",children:"Products list"}),Object(d.jsx)("h2",{className:"products__subtitle",children:"Choose product"}),Object(d.jsx)("ul",{className:"products__list",children:t.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"/products/".concat(e.id),children:e.title},e.id)},e.id)}))})]})})},O=r(22),f=r.p+"static/media/star.ad2af858.png",g=function(e){var t=e.id,r=e.classProp,n=Object(c.useState)([]),s=Object(A.a)(n,2),a=s[0],i=s[1];return Object(c.useEffect)((function(){fetch("https://smktesting.herokuapp.com/api/reviews/".concat(t)).then((function(e){return e.json()})).then((function(e){return i(e.reverse())}))}),[t]),Object(d.jsxs)("div",{className:r,children:[Object(d.jsx)("h4",{className:"".concat(r,"__title"),children:"Reviews"}),a&&a.map((function(e){return Object(d.jsxs)("div",{className:"review",children:[Object(d.jsxs)("div",{className:"review__header",children:[Object(d.jsx)("p",{className:"review__author",children:e.created_by.username}),Object(d.jsx)("p",{className:"review__date",children:e.created_at})]}),Object(d.jsxs)("div",{className:"review__content",children:[Object(d.jsx)("div",{className:"review__rate",children:Object(O.a)(Array(+e.rate)).map((function(e){return Object(d.jsx)("img",{src:f,alt:"star"})}))}),Object(d.jsx)("p",{className:"review__text",children:e.text})]})]},e.id)}))]})},x=r.p+"static/media/img1.74b695c9.png",v=function(e){var t=e.id,r=(e.setUpdate,Object(c.useState)("")),n=Object(A.a)(r,2),s=n[0],a=n[1],o=Object(c.useState)(0),j=Object(A.a)(o,2),u=j[0],b=j[1],m=Object(c.useState)(!1),p=Object(A.a)(m,2),O=p[0],f=p[1],g=function(){var e=Object(h.a)(l.a.mark((function e(r){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),c={product:t,rate:+u,text:s,username:"test"},e.prev=2,e.next=5,fetch("https://smktesting.herokuapp.com/api/reviews/".concat(t),{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json",Authorization:"Token "+localStorage.getItem("token")}}).then((function(){b(0),a(""),window.location.reload()}));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),f(!0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{children:Object(d.jsxs)("form",{className:"review-form",onSubmit:g,children:[Object(d.jsx)("h5",{className:"review-form__title",children:"Rate product"}),Object(d.jsxs)("div",{className:"review-form__rate",onChange:function(e){b(e.target.value)},children:[Object(d.jsxs)("label",{htmlFor:"rate1",children:[Object(d.jsx)("input",{type:"radio",id:"rate1",name:"rate",value:1}),"1"]}),Object(d.jsxs)("label",{htmlFor:"rate2",children:[Object(d.jsx)("input",{type:"radio",id:"rate2",name:"rate",value:2}),"2"]}),Object(d.jsxs)("label",{htmlFor:"rate3",children:[Object(d.jsx)("input",{type:"radio",id:"rate3",name:"rate",value:3}),"3"]}),Object(d.jsxs)("label",{htmlFor:"rate4",children:[Object(d.jsx)("input",{type:"radio",id:"rate4",name:"rate",value:4}),"4"]}),Object(d.jsxs)("label",{htmlFor:"rate5",children:[Object(d.jsx)("input",{type:"radio",id:"rate5",name:"rate",value:5}),"5"]})]}),Object(d.jsx)("label",{htmlFor:"review-field",className:"review-form__label",children:Object(d.jsx)("textarea",{name:"review-field",id:"review-field",rows:"4",value:s,className:"review-form__textarea",onChange:function(e){a(e.target.value)},placeholder:"Enter Your Review"})}),localStorage.getItem("token")?Object(d.jsx)("button",{type:"submit",className:"form__button",disabled:0===u||""===s,children:"Send Review"}):Object(d.jsxs)("p",{children:["You need ",Object(d.jsx)(i.b,{to:"/login",className:"review-form__login-link",children:"login"})," for add review"]}),O&&Object(d.jsx)("p",{className:"review-form__error",children:"Something went wrong..."})]})})},w=function(e){var t=e.products,r=e.token,n=Object(c.useState)(!1),s=Object(A.a)(n,2),a=s[0],i=s[1],j=Object(o.g)().productId,u=t.filter((function(e){return+e.id===+j}))[0];return Object(d.jsx)("div",{className:"product section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"product__wrapper",children:[Object(d.jsxs)("div",{className:"product__item",children:[Object(d.jsxs)("div",{className:"product__item__wrapper",children:[Object(d.jsx)("h5",{className:"product__item__title",children:u.title}),Object(d.jsx)("div",{className:"product__item_image",children:Object(d.jsx)("img",{src:1===u.id?x:"data:image/png;base64,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",alt:"product"})}),Object(d.jsx)("p",{className:"product__item__text",children:u.text})]}),Object(d.jsx)(v,{token:r,id:u.id,setUpdate:i})]}),Object(d.jsx)(g,{id:u.id,token:r,update:a,setUpdate:i,classProp:"product__reviews"})]})})})};var Q=function(){var e=Object(c.useState)(),t=Object(A.a)(e,2),r=t[0],n=t[1],s=Object(c.useState)(),a=Object(A.a)(s,2),u=a[0],l=a[1];return Object(c.useEffect)((function(){fetch("https://smktesting.herokuapp.com/api/products/").then((function(e){return e.json()})).then((function(e){return l(e)}))}),[]),Object(d.jsx)(i.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("nav",{children:[Object(d.jsx)(i.b,{to:"/",children:"Home"}),Object(d.jsx)(i.b,{to:"/products",children:"Products"}),Object(d.jsx)(i.b,{to:"/login",className:"login-link",children:"Login"})]})})}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/login",children:Object(d.jsx)(b,{setToken:n})}),Object(d.jsx)(o.a,{path:"/register",children:Object(d.jsx)(m,{})}),u&&Object(d.jsx)(o.a,{path:"/products/:productId",children:Object(d.jsx)(w,{token:r,products:u})}),u&&Object(d.jsx)(o.a,{path:"/products",children:Object(d.jsx)(p,{products:u})}),Object(d.jsx)(o.a,{path:"/",children:Object(d.jsx)(j,{})})]})]})})};a.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(Q,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.24155442.chunk.js.map