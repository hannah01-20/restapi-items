import{j as e,g as i}from"./index-Du2GCtWo.js";import{L as n,C as o,a as l,d as c,b as d,e as m}from"./authApi-C_CyFGys.js";import{N as x}from"./Navbar-DufL2stO.js";function h(){return e.jsx(n,{to:"/create-item",title:"Create Iteam",children:e.jsx("div",{className:"fixed bottom-4 sm:bottom-16 right-4 sm:right-16 w-16 h-16 bg-accent-foreground text-white flex justify-center items-center text-5xl rounded-full pb-2 transition-all animate-bounce hover:animate-none hover:bg-card hover:text-black active:animate-in",children:"+"})})}function u({id:a,name:s,price:r}){let t=a.toString();return e.jsx(n,{to:"/items/$id",params:{id:t},children:e.jsxs(o,{className:"h-64 hover:-translate-y-2 hover:bg-secondary-foreground hover:text-white active:bg-card-foreground transition-all",children:[e.jsx(l,{children:e.jsx(c,{className:"text-center text-lg font-semibold",children:"Item"})}),e.jsxs(d,{className:"flex flex-col items-center justify-center h-full gap-8",children:[e.jsx(m,{className:"text-2xl",children:s}),e.jsxs("p",{className:"font-semibold",children:["₱",r]})]})]})})}function g(){const a=i("/"),{user:s,items:r}=a.useLoaderData();return e.jsxs("main",{className:"w-full min-h-dvh bg-accent",children:[e.jsx(x,{}),e.jsxs("div",{className:"p-2 sm:p-8",children:[e.jsxs("h1",{className:"text-xl font-semibold",children:["Hello, ",s.username,"!"]}),e.jsx("p",{className:"text-muted-foreground",children:s.email}),e.jsx("div",{className:"grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10 sm:p-16",children:r.length?r.map(t=>e.jsx(u,{id:t.id,name:t.name,price:t.price},t.id)):e.jsx("h1",{children:"No Data"})})]}),e.jsx(h,{})]})}const b=g;export{b as component};
