(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[11],{7109:function(e,t,a){"use strict";var l=a(5444),c=a(7294);t.Z=function(){return c.createElement("div",{className:"box-menu-2"},c.createElement("div",{className:"container"},c.createElement("div",{className:"row text-center"},c.createElement("div",{className:"col"},c.createElement(l.Link,{className:"icon",to:"/cart"},c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"},c.createElement("g",null,c.createElement("g",null,c.createElement("path",{fill:"#888888",d:"M7.1 11L6 13h12v2H6c-1.52 0-2.48-1.63-1.75-2.97L5.6 9.59 2 2H0V0h3.27l.94 2h14.8c.76 0 1.24.82.87 1.48L16.3 9.97c-.34.62-1 1.03-1.75 1.03zm.43-2h7.02l2.76-5H5.16zM8 18c0 1.1-.9 2-2 2s-1.99-.9-1.99-2S4.9 16 6 16s2 .9 2 2zm10 0c0 1.1-.9 2-2 2s-1.99-.9-1.99-2 .89-2 1.99-2 2 .9 2 2z"})))),c.createElement("span",null,"Корзина"))),c.createElement("div",{className:"col"},c.createElement(l.Link,{className:"icon",to:"/save"},c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"19",viewBox:"0 0 20 19"},c.createElement("g",null,c.createElement("g",null,c.createElement("path",{fill:"#888888",d:"M20 5.5c0 3.78-3.4 6.86-8.55 11.53L10 18.35l-1.45-1.31C3.4 12.36 0 9.28 0 5.5 0 2.42 2.42 0 5.5 0 7.24 0 8.91.81 10 2.09 11.09.81 12.76 0 14.5 0 17.58 0 20 2.42 20 5.5zm-9.9 10.05C14.86 11.24 18 8.39 18 5.5c0-2-1.5-3.5-3.5-3.5-1.54 0-3.04.99-3.56 2.36H9.07C8.54 2.99 7.04 2 5.5 2 3.5 2 2 3.5 2 5.5c0 2.89 3.14 5.74 7.9 10.05l.1.1z"})))),c.createElement("span",null,"Избранное"))))))}},3724:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});var l=a(7294),c=a(5444),n=function(e){var t,a=e.id,n=e.htmlStyle,r=l.useState("undefined"!=typeof window&&"true"===localStorage.getItem("active-save["+a+"]")),i=r[0],s=r[1];l.useEffect((function(){"undefined"!=typeof window&&localStorage.setItem("active-save["+a+"]",i),!1===i&&"undefined"!=typeof window&&localStorage.removeItem("active-save["+a+"]");var e,t=Object.keys("undefined"!=typeof window&&localStorage),l=[];t.forEach((function(t){"active-save"==t[0]+t[1]+t[2]+t[3]+t[4]+t[5]+t[6]+t[7]+t[8]+t[9]+t[10]&&(e=t.replace("active-save[","").replace("]",""),console.log(e),l.push(e))})),"undefined"!=typeof window&&localStorage.setItem("array-active-save",JSON.stringify(l)),console.log(l,l.length),0==l.length?document.querySelector(".body .page-save span").classList.remove("active"):document.querySelector(".body .page-save span").classList.add("active")}),[i]);var o=function(){s(!i)};return l.createElement(l.Fragment,null,"remove"===n?l.createElement(c.Link,((t={to:"/save",id:"product-"+a,className:"save "+(i?"active":""),onClick:o}).className="btn style-2 w100 mt-auto",t),"удалить"):l.createElement("span",{id:"product-"+a,className:"save "+(i?"active":""),onClick:o},i?l.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIxOSIgdmlld0JveD0iMCAwIDIwIDE5Ij48Zz48Zz48cGF0aCBmaWxsPSIjZjUzMDMwIiBkPSJNMTAgMTguMzVsLTEuNDUtMS4zMkMzLjQgMTIuMzYgMCA5LjI4IDAgNS41IDAgMi40MiAyLjQyIDAgNS41IDAgNy4yNCAwIDguOTEuODEgMTAgMi4wOSAxMS4wOS44MSAxMi43NiAwIDE0LjUgMCAxNy41OCAwIDIwIDIuNDIgMjAgNS41YzAgMy43OC0zLjQgNi44Ni04LjU1IDExLjU0eiIvPjwvZz48L2c+PC9zdmc+",alt:""}):l.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIxOSIgdmlld0JveD0iMCAwIDIwIDE5Ij48Zz48Zz48cGF0aCBmaWxsPSIjMWExYTFhIiBkPSJNMjAgNS41YzAgMy43OC0zLjQgNi44Ni04LjU1IDExLjUzTDEwIDE4LjM1bC0xLjQ1LTEuMzFDMy40IDEyLjM2IDAgOS4yOCAwIDUuNSAwIDIuNDIgMi40MiAwIDUuNSAwIDcuMjQgMCA4LjkxLjgxIDEwIDIuMDkgMTEuMDkuODEgMTIuNzYgMCAxNC41IDAgMTcuNTggMCAyMCAyLjQyIDIwIDUuNXptLTkuOSAxMC4wNUMxNC44NiAxMS4yNCAxOCA4LjM5IDE4IDUuNWMwLTItMS41LTMuNS0zLjUtMy41LTEuNTQgMC0zLjA0Ljk5LTMuNTYgMi4zNkg5LjA3QzguNTQgMi45OSA3LjA0IDIgNS41IDIgMy41IDIgMiAzLjUgMiA1LjVjMCAyLjg5IDMuMTQgNS43NCA3LjkgMTAuMDVsLjEuMXoiLz48L2c+PC9nPjwvc3ZnPg==",alt:""})))}},7209:function(e,t,a){"use strict";a(7294);t.Z=function(e,t){var a,l;for(a=0;a<e.mediaDetails.sizes.length;++a)e.mediaDetails.sizes[a].name===t&&(l=e.mediaDetails.sizes[a].sourceUrl);return l||e.mediaItemUrl}},1561:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return g}});var l=a(7294),c=a(2382),n=a(7209),r=a(5444),i=a(3724),s=function(e){var t=e.article;e.ids;return l.createElement("div",{className:"col-12 col-lg-6 col-xl-6 pt-3 pb-3 line-bottom"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-6"},l.createElement("div",{className:"box-img"},l.createElement(r.Link,{to:"/shop/"+t.productCategories.slug+"/"+t.slug},l.createElement("img",{src:(0,n.Z)(t.image,"catalog-product"),alt:""})))),l.createElement("div",{className:"col-6 d-flex d-flex align-items flex-column"},l.createElement("h3",{className:"product-title"},t.name),l.createElement("div",{className:"sku"},t.slug),l.createElement("div",{className:"box-price",dangerouslySetInnerHTML:{__html:t.price}}),l.createElement(i.Z,{id:t.id,htmlStyle:"remove"}))))},o=a(7109),m=function(e){var t=e.info,a=e.title,c=e.text;return l.createElement(l.Fragment,null,l.createElement("div",{page:t,className:"boxpage h-100 d-flex flex-column justify-content-center align-items-center"},l.createElement("div",null,l.createElement("img",{src:"data:image/png;base64,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",alt:""})),l.createElement("div",{className:"title"},a),l.createElement("div",{className:"text"},c),l.createElement("div",{className:"box-btn"},l.createElement(r.Link,{to:"/",className:"btn style-3 w100"},"вернуться на главную"))))},g=function(e){e.pageContext;var t,a=(0,r.useStaticQuery)("1433374690"),n=Object.keys("undefined"!=typeof window&&localStorage),i=[];return n.forEach((function(e){"active-save"==e[0]+e[1]+e[2]+e[3]+e[4]+e[5]+e[6]+e[7]+e[8]+e[9]+e[10]&&(t=e.replace("active-save[","").replace("]",""),console.log(t),i.push(t))})),"undefined"!=typeof window&&localStorage.setItem("array-active-save",JSON.stringify(i)),console.log(i),l.createElement(c.Z,null,l.createElement(o.Z,null),l.createElement("div",{className:"container pt-1"},l.createElement("div",{className:"row"},"undefined"!=typeof window&&2!==localStorage.getItem("array-active-save").length?a.allWpProduct.edges.map((function(e,t){return l.createElement(l.Fragment,null," ",1==(a=localStorage.getItem("array-active-save"),2!=a.length?JSON.parse(a):a).includes(e.node.id)&&l.createElement(s,{article:e.node})," ");var a})):l.createElement("div",{className:"col-12"},l.createElement(m,{info:"save",title:"Страница пустая",text:"Пока нет сохраненых товаров"})))))}}}]);
//# sourceMappingURL=component---src-templates-save-js-86a74a654110017d6d56.js.map