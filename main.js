(()=>{"use strict";var e={212:(e,d)=>{Object.defineProperty(d,"__esModule",{value:!0}),d.services=void 0,d.services=[{id:1,head:null,name:"Проф.осмотр",node:0,price:100,sorthead:20},{id:2,head:null,name:"Хирургия",node:1,price:0,sorthead:10},{id:3,head:2,name:"Удаление зубов",node:1,price:0,sorthead:10},{id:4,head:3,name:"Удаление зуба",node:0,price:800,sorthead:10},{id:5,head:3,name:"Удаление 8ого зуба",node:0,price:1e3,sorthead:30},{id:6,head:3,name:"Удаление осколка зуба",node:0,price:2e3,sorthead:20},{id:7,head:2,name:"Хирургические вмешательство",node:0,price:200,sorthead:10},{id:8,head:2,name:"Имплантация зубов",node:1,price:0,sorthead:20},{id:9,head:8,name:"Коронка",node:0,price:3e3,sorthead:10},{id:10,head:8,name:"Слепок челюсти",node:0,price:500,sorthead:20}]}},d={};function n(r){var a=d[r];if(void 0!==a)return a.exports;var t=d[r]={exports:{}};return e[r](t,t.exports,n),t.exports}(()=>{var e=n(212);function d(e,n,r){var a=document.createElement("div");return a.style.marginLeft="".concat(20*r,"px"),e.filter((function(e){return e.head===n})).sort((function(e,d){return e.sorthead-d.sorthead})).forEach((function(n){var t=document.createElement("div");if(t.textContent="".concat(n.name," (").concat(n.price,")"),a.appendChild(t),1===n.node){var o=d(e,n.id,r+1);a.appendChild(o)}})),a}document.addEventListener("DOMContentLoaded",(function(){var n=d(e.services,null,0);document.body.appendChild(n)}))})()})();