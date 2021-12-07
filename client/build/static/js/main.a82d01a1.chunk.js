(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{75:function(e,t,c){},81:function(e,t,c){"use strict";c.r(t);var s,a=c(0),l=c.n(a),n=c(22),r=c.n(n),i=c(94),j=c(96),o=c(92),b=(c(75),c(76),c(35)),m=c(2),d=function(){return Object(m.jsx)("section",{className:"vh-100 gradient-custom",children:Object(m.jsx)("div",{className:"container py-5 h-100",children:Object(m.jsx)("div",{className:"row d-flex justify-content-center align-items-center h-100",children:Object(m.jsx)("div",{className:"col-12 col-md-8 col-lg-6 col-xl-5",children:Object(m.jsx)("div",{className:"card bg-dark text-white",style:{borderRadius:"1rem"},children:Object(m.jsxs)("div",{className:"card-body p-5 text-center",children:[Object(m.jsxs)("div",{className:"mb-md-5 mt-md-4 pb-5",children:[Object(m.jsx)("h2",{className:"fw-bold mb-2 text-uppercase",children:"Login"}),Object(m.jsx)("p",{className:"text-white-50 mb-5",children:"Please enter your email and password!"}),Object(m.jsxs)("div",{className:"form-outline form-white mb-4",children:[Object(m.jsx)("input",{type:"email",id:"typeEmailX",className:"form-control form-control-lg"}),Object(m.jsx)("label",{className:"form-label",children:"Email"})]}),Object(m.jsxs)("div",{className:"form-outline form-white mb-4",children:[Object(m.jsx)("input",{type:"password",id:"typePasswordX",className:"form-control form-control-lg"}),Object(m.jsx)("label",{className:"form-label",children:"Password"})]}),Object(m.jsx)("p",{className:"small mb-5 pb-lg-2",children:Object(m.jsx)("a",{className:"text-white-50",href:"#!",children:"Forgot password?"})}),Object(m.jsx)("button",{className:"btn btn-outline-light btn-lg px-5",type:"submit",children:"Login"}),Object(m.jsxs)("div",{className:"d-flex justify-content-center text-center mt-4 pt-1",children:[Object(m.jsx)("a",{href:"#!",className:"text-white",children:Object(m.jsx)("i",{className:"fab fa-facebook-f fa-lg"})}),Object(m.jsx)("a",{href:"#!",className:"text-white",children:Object(m.jsx)("i",{className:"fab fa-twitter fa-lg mx-4 px-2"})}),Object(m.jsx)("a",{href:"#!",className:"text-white",children:Object(m.jsx)("i",{className:"fab fa-google fa-lg"})})]})]}),Object(m.jsx)("div",{children:Object(m.jsxs)("p",{className:"mb-0",children:["Don't have an account?",Object(m.jsx)(b.b,{to:"/signup",className:"text-white-50 fw-bold",children:"Sign Up"})]})})]})})})})})})},x=c(6),h=c(60),O=c(95),u=Object(O.a)(s||(s=Object(h.a)(["\n  mutation createUser($name: String!, $email: String!, $password: String!) {\n    createUser(name: $name, email: $email, password: $password) {\n      success\n    }\n  }\n"]))),f=c(97),p=c(67),g=function(e){return!(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)||"string"!==typeof e)},N=function(e){return"string"===typeof e&&!1===e.includes("<script>")},v=function(e){return!!("string"===typeof e&&e.length>8&&/[^A-Za-z0-9]+/.test(e))},w=function(e,t){return e.length===t.length},y=c(93),S=c(99),k=c(7);var A=function(e){var t=e.model,c=e.setModel,s=Object(k.h)();return Object(m.jsx)("div",{children:Object(m.jsxs)(y.a,{show:t,children:[Object(m.jsx)(y.a.Header,{closeButton:!0,children:Object(m.jsx)(y.a.Title,{children:"Your account is created "})}),Object(m.jsx)(y.a.Body,{children:"Now Sign in to your Account"}),Object(m.jsxs)(y.a.Footer,{children:[Object(m.jsx)(S.a,{variant:"secondary",children:"Cancel"}),Object(m.jsx)(S.a,{variant:"primary",onClick:function(){s("/"),c(!1)},children:"Sign In"})]})]})})},C=function(){var e=Object(a.useState)(""),t=Object(x.a)(e,2),c=t[0],s=t[1],l=Object(a.useState)(""),n=Object(x.a)(l,2),r=n[0],i=n[1],j=Object(a.useState)(""),o=Object(x.a)(j,2),b=o[0],d=o[1],h=Object(a.useState)(""),O=Object(x.a)(h,2),y=O[0],S=O[1],k=Object(a.useState)(!1),C=Object(x.a)(k,2),E=C[0],F=C[1],$=Object(a.useState)(!1),P=Object(x.a)($,2),L=P[0],B=P[1],I=Object(a.useState)(!1),T=Object(x.a)(I,2),Z=T[0],M=T[1],U=Object(a.useState)(!1),Y=Object(x.a)(U,2),D=Y[0],J=Y[1],R=Object(a.useState)(!1),X=Object(x.a)(R,2),q=X[0],z=X[1],H=Object(a.useState)(!1),_=Object(x.a)(H,2),G=_[0],K=_[1],Q=Object(f.a)(u),V=Object(x.a)(Q,2),W=V[0],ee=V[1],te=ee.data,ce=ee.loading,se=ee.error;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(A,{model:q,setModel:z}),Object(m.jsx)("section",{className:"vh-100",style:{backgroundColor:"#6a11cb"},children:Object(m.jsx)("div",{className:"container h-100 ",children:Object(m.jsx)("div",{className:"row d-flex justify-content-center align-items-center h-100 ",children:Object(m.jsx)("div",{className:"col-lg-12 col-xl-11 ",children:Object(m.jsx)("div",{className:"card text-black bg-dark",children:Object(m.jsx)("div",{className:"card-body p-md-5 text-white-50",children:Object(m.jsx)("div",{className:"row justify-content-center",children:Object(m.jsxs)("div",{className:"col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1",children:[Object(m.jsx)("p",{className:"text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 mb-2 text-white text-uppercase",children:"Sign up"}),Object(m.jsxs)("div",{className:"mx-1 mx-md-4",children:[E&&Object(m.jsx)("p",{className:"text-danger form-label",children:"invalid input !"}),Object(m.jsx)("div",{className:"d-flex flex-row align-items-center mb-4",children:Object(m.jsxs)("div",{className:"form-outline flex-fill mb-0",children:[Object(m.jsx)("input",{type:"text",id:"form3Example1c",className:"form-control",onChange:function(e){return s(e.target.value)}}),Object(m.jsx)("label",{className:"form-label",children:"Your Name"})]})}),L&&Object(m.jsx)("p",{className:"text-danger form-label",children:"invalid email !"}),Object(m.jsx)("div",{className:"d-flex flex-row align-items-center mb-4",children:Object(m.jsxs)("div",{className:"form-outline flex-fill mb-0",children:[Object(m.jsx)("input",{type:"email",id:"form3Example3c",className:"form-control",onChange:function(e){return i(e.target.value)}}),Object(m.jsx)("label",{className:"form-label",children:"Your Email"})]})}),Z&&Object(m.jsx)("p",{className:"text-danger form-label",children:"password must be at least 8 caracteres and includes caracteres and symbols and numbers !"}),Object(m.jsx)("div",{className:"d-flex flex-row align-items-center mb-4",children:Object(m.jsxs)("div",{className:"form-outline flex-fill mb-0",children:[Object(m.jsx)("input",{type:"password",id:"form3Example4c",className:"form-control",onChange:function(e){return d(e.target.value)}}),Object(m.jsx)("label",{className:"form-label",children:"Password"})]})}),D&&Object(m.jsx)("p",{className:"text-danger form-label",children:"password not match !"}),Object(m.jsx)("div",{className:"d-flex flex-row align-items-center mb-4",children:Object(m.jsxs)("div",{className:"form-outline flex-fill mb-0",children:[Object(m.jsx)("input",{type:"password",id:"form3Example4cd",className:"form-control",onChange:function(e){return S(e.target.value)}}),Object(m.jsx)("label",{className:"form-label",children:"Repeat your password"})]})}),Object(m.jsxs)("div",{className:"form-check d-flex justify-content-center mb-5",children:[Object(m.jsx)("input",{className:"form-check-input me-2",type:"checkbox",value:"",id:"form2Example3c"}),Object(m.jsxs)("label",{className:"form-check-label",children:["I agree all statements in"," ",Object(m.jsx)("a",{href:"#!",className:"text-white-50 fw-bold",children:"Terms of service"})]})]}),Object(m.jsx)("div",{className:"d-flex justify-content-center mx-4 mb-3 mb-lg-4",children:Object(m.jsx)("button",{className:"btn btn-outline-light btn-lg px-5 ml-10",onClick:function(e){g(r)||B(!0),v(b)||M(!0),N(c)||F(!0),w(b,y)||J(!0),g(r)&&v(b)&&N(c)&&w(b,y)&&W({variables:{name:c,email:r,password:b}}),ce?K(!0):te?(console.log(te),K(!1),z(!0)):se&&(K(!1),z(!1))},children:G?Object(m.jsx)(p.a,{animation:"border",variant:"light"}):"Login"})})]})]})})})})})})})})]})},E=function(e){return e.isAuth.isAuth?Object(m.jsx)(k.b,{}):Object(m.jsx)(k.a,{to:"/"})};var F=function(){return Object(m.jsx)("div",{children:"this is home page"})};function $(){return Object(m.jsx)("div",{children:"hello this is profile"})}var P=function(){return Object(m.jsx)("div",{children:"this is the error page"})};var L=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(b.a,{children:Object(m.jsx)(a.Fragment,{children:Object(m.jsxs)(k.e,{children:[Object(m.jsx)(k.c,{path:"/",element:Object(m.jsx)(d,{})}),Object(m.jsx)(k.c,{path:"/signup",element:Object(m.jsx)(C,{})}),Object(m.jsx)(k.c,{path:"/",element:Object(m.jsx)(E,{isAuth:{isAuth:!0}}),children:Object(m.jsx)(k.c,{path:"/profil",element:Object(m.jsx)($,{})})}),Object(m.jsx)(k.c,{path:"/",element:Object(m.jsx)(E,{isAuth:{isAuth:!0}}),children:Object(m.jsx)(k.c,{path:"/home",element:Object(m.jsx)(F,{})})}),Object(m.jsx)(k.c,{path:"*",element:Object(m.jsx)(P,{})})]})})})})},B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,100)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,l=t.getLCP,n=t.getTTFB;c(e),s(e),a(e),l(e),n(e)}))},I=new i.a({uri:"https://account-mangement.herokuapp.com/graphql",cache:new j.a});r.a.render(Object(m.jsx)(l.a.StrictMode,{children:Object(m.jsx)(o.a,{client:I,children:Object(m.jsx)(L,{})})}),document.getElementById("root")),B()}},[[81,1,2]]]);
//# sourceMappingURL=main.a82d01a1.chunk.js.map