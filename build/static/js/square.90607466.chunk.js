"use strict";(self.webpackChunkmingleai_ces=self.webpackChunkmingleai_ces||[]).push([[235],{19:(e,c,s)=>{s.d(c,{Z:()=>n});s(313);var t=s(417);const n=()=>(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{children:"Sorry, This URL is not allowed to be accessed via mobile device."}),(0,t.jsx)("h1",{children:"Please retry with desktop device"})]})},17:(e,c,s)=>{s.r(c),s.d(c,{default:()=>b});var t=s(313),n=s(19),r=s(862),o=s(157);const a=(0,s(351).Ue)((e=>({characters:[],setCharacters:c=>e({characters:c})})));var i=s(417);const l=(0,o.io)("http://localhost:3001"),h=()=>{const e=a((e=>e.setCharacters));return(0,t.useEffect)((()=>{function c(){console.log("connected")}function s(){console.log("disconnected")}function t(c){e(c),console.log(c)}return l.on("connect",c),l.on("disconnect",s),l.on("characters",t),()=>{l.off("connect",c),l.off("disconnect",s),l.off("characters",t)}}),[]),(0,i.jsx)(i.Fragment,{})};var d=s(819),j=s(990),u=s(906),f=s(525),x=s(179),g=s(915);const p=e=>{const c=(0,t.useRef)(null),s=(0,g.L)(e.characterURI).scene.clone();return(0,t.createElement)("mesh",{...e,ref:c,key:e.id,position:e.position},(0,i.jsx)("primitive",{object:s}))};var v=s(825);const m=()=>{const e=(0,t.useRef)(null),c=a((e=>e.characters));return(0,t.useEffect)((()=>{console.log(c)}),[c]),(0,i.jsxs)(d.Xz,{children:[(0,i.jsx)(j.B,{ref:e}),(0,i.jsx)("color",{attach:"background",args:["#cccccc"]}),(0,i.jsx)(u.qA,{preset:"sunset"}),(0,i.jsx)("ambientLight",{intensity:.3}),(0,i.jsx)(f.j,{blur:2}),(0,i.jsx)(x.z,{}),c.map(((e,c)=>(0,i.jsx)(p,{characterID:e.characterID,characterURI:e.characterURI,position:new v.Vector3(c,c,c)},e.id)))]})},b=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.I3,{children:[(0,i.jsx)(h,{}),(0,i.jsx)("div",{style:{position:"relative",width:800,height:600},children:(0,i.jsx)(m,{})})]}),(0,i.jsx)(r.A_,{children:(0,i.jsx)(n.Z,{})})]})}}]);