"use strict";(self.webpackChunkbeepberry=self.webpackChunkbeepberry||[]).push([[142],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>b});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var o=a.createContext({}),d=function(t){var e=a.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=d(t.components);return a.createElement(o.Provider,{value:e},t.children)},m="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),m=d(r),s=n,b=m["".concat(o,".").concat(s)]||m[s]||k[s]||l;return r?a.createElement(b,i(i({ref:e},u),{},{components:r})):a.createElement(b,i({ref:e},u))}));function b(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=s;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[m]="string"==typeof t?t:n,i[1]=p;for(var d=2;d<l;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},331:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=r(7462),n=(r(7294),r(3905));const l={sidebar_position:2},i="Pinouts",p={unversionedId:"hardware/pinouts",id:"hardware/pinouts",title:"Pinouts",description:"Raspberry Pi Header Breakout",source:"@site/docs/hardware/pinouts.md",sourceDirName:"hardware",slug:"/hardware/pinouts",permalink:"/docs/hardware/pinouts",draft:!1,editUrl:"https://github.com/sqfmi/beepberry-docs/blob/main/docs/hardware/pinouts.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Tech Specs",permalink:"/docs/hardware/specs"},next:{title:"Schematic",permalink:"/docs/hardware/schematic"}},o={},d=[{value:"Raspberry Pi Header Breakout",id:"raspberry-pi-header-breakout",level:2},{value:"RGB LED",id:"rgb-led",level:2},{value:"Programmable Button",id:"programmable-button",level:2},{value:"Display",id:"display",level:2},{value:"Keyboard",id:"keyboard",level:2},{value:"SWD Header",id:"swd-header",level:2},{value:"Power Management",id:"power-management",level:2}],u={toc:d},m="wrapper";function k(t){let{components:e,...r}=t;return(0,n.kt)(m,(0,a.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"pinouts"},"Pinouts"),(0,n.kt)("h2",{id:"raspberry-pi-header-breakout"},"Raspberry Pi Header Breakout"),(0,n.kt)("img",{src:"/img/beeper-header-breakout.svg",width:"100%"}),(0,n.kt)("h2",{id:"rgb-led"},"RGB LED"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"RGB LED"),(0,n.kt)("th",{parentName:"tr",align:null},"RP2040 Pins"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Red"),(0,n.kt)("td",{parentName:"tr",align:null},"GPIO 20")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Green"),(0,n.kt)("td",{parentName:"tr",align:null},"GPIO 19")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Blue"),(0,n.kt)("td",{parentName:"tr",align:null},"GPIO 17")))),(0,n.kt)("h2",{id:"programmable-button"},"Programmable Button"),(0,n.kt)("p",null,"Pi GPIO 17"),(0,n.kt)("h2",{id:"display"},"Display"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Display"),(0,n.kt)("th",{parentName:"tr",align:null},"Pi Pins"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SCK"),(0,n.kt)("td",{parentName:"tr",align:null},"GPIO 11")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SDI"),(0,n.kt)("td",{parentName:"tr",align:null},"GPIO 10")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CS"),(0,n.kt)("td",{parentName:"tr",align:null},"GPIO  8")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"EXTIN"),(0,n.kt)("td",{parentName:"tr",align:null},"GPIO 23")))),(0,n.kt)("h2",{id:"keyboard"},"Keyboard"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Keyboard"),(0,n.kt)("th",{parentName:"tr",align:null},"Pi Pins"),(0,n.kt)("th",{parentName:"tr",align:null},"RP2040 Pins"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SDA"),(0,n.kt)("td",{parentName:"tr",align:null},"GPIO 2"),(0,n.kt)("td",{parentName:"tr",align:null},"GPIO 28")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SCL"),(0,n.kt)("td",{parentName:"tr",align:null},"GPIO 3"),(0,n.kt)("td",{parentName:"tr",align:null},"GPIO 29")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"INT"),(0,n.kt)("td",{parentName:"tr",align:null},"GPIO 4"),(0,n.kt)("td",{parentName:"tr",align:null},"GPIO  0")))),(0,n.kt)("h2",{id:"swd-header"},"SWD Header"),(0,n.kt)("h2",{id:"power-management"},"Power Management"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Power Management"),(0,n.kt)("th",{parentName:"tr",align:null},"Pi Pins"),(0,n.kt)("th",{parentName:"tr",align:null},"RP2040 Pins"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Pi Power Switch"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"GPIO 15")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Pi Shutdown Signal"),(0,n.kt)("td",{parentName:"tr",align:null},"GPIO 26"),(0,n.kt)("td",{parentName:"tr",align:null},"GPIO 21")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Battery ADC"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"GPIO 26")))))}k.isMDXComponent=!0}}]);