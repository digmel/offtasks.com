(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{6429:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n(1332)}])},1332:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(7568),s=n(655),a=n(5893),c=n(7294),o=n(9764),i=n(1163),u=n(1791);var l={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let d;const m=new Uint8Array(16);function f(){if(!d&&(d="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!d))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return d(m)}const h=[];for(let b=0;b<256;++b)h.push((b+256).toString(16).slice(1));function p(e,t=0){return(h[e[t+0]]+h[e[t+1]]+h[e[t+2]]+h[e[t+3]]+"-"+h[e[t+4]]+h[e[t+5]]+"-"+h[e[t+6]]+h[e[t+7]]+"-"+h[e[t+8]]+h[e[t+9]]+"-"+h[e[t+10]]+h[e[t+11]]+h[e[t+12]]+h[e[t+13]]+h[e[t+14]]+h[e[t+15]]).toLowerCase()}var x=function(e,t,n){if(l.randomUUID&&!t&&!e)return l.randomUUID();const r=(e=e||{}).random||(e.rng||f)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=r[e];return t}return p(r)},g=function(){var e=(0,c.useState)(""),t=e[0],n=e[1],l=(0,c.useState)(""),d=l[0],m=l[1],f=(0,c.useState)(!1),h=f[0],p=f[1],g=(0,c.useState)(null),b=(g[0],g[1]),w=(0,i.useRouter)(),y=function(){var e=(0,r.Z)((function(e){var n,r;return(0,s.__generator)(this,(function(s){switch(s.label){case 0:e.preventDefault(),p(!0),b(null),s.label=1;case 1:return s.trys.push([1,3,4,5]),[4,o._m.auth.signIn({email:t,password:d})];case 2:return(n=s.sent().error)&&b(n.message),[3,5];case 3:return r=s.sent(),b(r.message),[3,5];case 4:return p(!1),[7];case 5:return[2]}}))}));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=(0,r.Z)((function(){var e,t,n;return(0,s.__generator)(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,3,4]),e=x(),[4,o._m.auth.signUp({email:"".concat(e,"}@example.com"),password:e})];case 1:return(t=r.sent().error)&&(b(t.message),console.log(t)),[3,4];case 2:return n=r.sent(),b(n.message),[3,4];case 3:return p(!1),[7];case 4:return[2]}}))}));return function(){return e.apply(this,arguments)}}();return(0,a.jsx)("div",{className:" bg-zinc-900 flex flex-1 h-screen items-center",children:(0,a.jsxs)("div",{className:"bg-zinc-800 h-3/4 md:w-3/5 w-full container rounded-lg",children:[(0,a.jsx)("div",{className:"flex justify-end text-cyan-500 cursor-pointer",children:(0,a.jsx)("button",{className:" md:py-8 md:px-12 py-6 px-6",onClick:j,children:(0,a.jsx)("h1",{className:"font-medium",children:"I'm a Guest"})})}),(0,a.jsx)("div",{className:"container flex justify-center items-center md:mt-0 mt-6",children:(0,a.jsx)(u.rq,{})}),(0,a.jsxs)("div",{className:"container flex flex-col justify-center items-center mt-12 md:w-2/6 w-3/4",children:[(0,a.jsx)("h1",{className:"text-zinc-50 text-xl font-bold",children:"Log in"}),(0,a.jsx)("h1",{className:"text-zinc-50 mt-4 self-start mb-2 font-medium text-sm",children:"Email"}),(0,a.jsx)("input",{type:"email",className:"border-zinc-100 border bg-transparent rounded-md h-12 w-full px-4 text-zinc-50",onChange:function(e){n(e.target.value)},required:"",disabled:h}),(0,a.jsx)("h1",{className:"text-zinc-50 mt-4 self-start mb-2 font-medium text-sm",children:"Password"}),(0,a.jsx)("input",{onChange:function(e){m(e.target.value)},className:"border-zinc-100 border bg-transparent rounded-md h-12 w-full px-4 text-zinc-50",type:"password",required:"",disabled:h}),(0,a.jsx)("h1",{className:"text-zinc-50 mt-4 self-end mb-2 font-light text-sm cursor-pointer",children:"Forgot Password?"}),(0,a.jsx)("button",{className:" bg-cyan-600 mt-8 w-full h-12 rounded-lg",onClick:y,children:(0,a.jsx)("h1",{className:"text-zinc-50 text-sm font-light",children:"Log in"})}),(0,a.jsxs)("div",{className:"mt-6 flex flex-row w-full text-zinc-50 justify-center cursor-pointer",onClick:function(){w.push("/signup")},children:[(0,a.jsx)("h1",{className:"font-light text-sm text-center",children:"Don not have an account?"}),(0,a.jsx)("h1",{className:"font-bold text-sm ml-2",children:"Sign Up"})]})]})]})})}}},function(e){e.O(0,[791,774,888,179],(function(){return t=6429,e(e.s=t);var t}));var t=e.O();_N_E=t}]);