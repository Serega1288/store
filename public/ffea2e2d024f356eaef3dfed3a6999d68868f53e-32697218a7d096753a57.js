(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[1],{3724:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(7294),o=n(5444),c=function(e){var t,n=e.id,c=e.htmlStyle,a=r.useState("undefined"!=typeof window&&"true"===localStorage.getItem("active-save["+n+"]")),i=a[0],u=a[1];r.useEffect((function(){"undefined"!=typeof window&&localStorage.setItem("active-save["+n+"]",i),!1===i&&"undefined"!=typeof window&&localStorage.removeItem("active-save["+n+"]");var e,t=Object.keys("undefined"!=typeof window&&localStorage),r=[];t.forEach((function(t){"active-save"==t[0]+t[1]+t[2]+t[3]+t[4]+t[5]+t[6]+t[7]+t[8]+t[9]+t[10]&&(e=t.replace("active-save[","").replace("]",""),console.log(e),r.push(e))})),"undefined"!=typeof window&&localStorage.setItem("array-active-save",JSON.stringify(r)),console.log(r,r.length),0==r.length?document.querySelector(".body .page-save span").classList.remove("active"):document.querySelector(".body .page-save span").classList.add("active")}),[i]);var s=function(){u(!i)};return r.createElement(r.Fragment,null,"remove"===c?r.createElement(o.Link,((t={to:"/save",id:"product-"+n,className:"save "+(i?"active":""),onClick:s}).className="btn style-2 w100 mt-auto",t),"удалить"):r.createElement("span",{id:"product-"+n,className:"save "+(i?"active":""),onClick:s},i?r.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIxOSIgdmlld0JveD0iMCAwIDIwIDE5Ij48Zz48Zz48cGF0aCBmaWxsPSIjZjUzMDMwIiBkPSJNMTAgMTguMzVsLTEuNDUtMS4zMkMzLjQgMTIuMzYgMCA5LjI4IDAgNS41IDAgMi40MiAyLjQyIDAgNS41IDAgNy4yNCAwIDguOTEuODEgMTAgMi4wOSAxMS4wOS44MSAxMi43NiAwIDE0LjUgMCAxNy41OCAwIDIwIDIuNDIgMjAgNS41YzAgMy43OC0zLjQgNi44Ni04LjU1IDExLjU0eiIvPjwvZz48L2c+PC9zdmc+",alt:""}):r.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIxOSIgdmlld0JveD0iMCAwIDIwIDE5Ij48Zz48Zz48cGF0aCBmaWxsPSIjMWExYTFhIiBkPSJNMjAgNS41YzAgMy43OC0zLjQgNi44Ni04LjU1IDExLjUzTDEwIDE4LjM1bC0xLjQ1LTEuMzFDMy40IDEyLjM2IDAgOS4yOCAwIDUuNSAwIDIuNDIgMi40MiAwIDUuNSAwIDcuMjQgMCA4LjkxLjgxIDEwIDIuMDkgMTEuMDkuODEgMTIuNzYgMCAxNC41IDAgMTcuNTggMCAyMCAyLjQyIDIwIDUuNXptLTkuOSAxMC4wNUMxNC44NiAxMS4yNCAxOCA4LjM5IDE4IDUuNWMwLTItMS41LTMuNS0zLjUtMy41LTEuNTQgMC0zLjA0Ljk5LTMuNTYgMi4zNkg5LjA3QzguNTQgMi45OSA3LjA0IDIgNS41IDIgMy41IDIgMiAzLjUgMiA1LjVjMCAyLjg5IDMuMTQgNS43NCA3LjkgMTAuMDVsLjEuMXoiLz48L2c+PC9nPjwvc3ZnPg==",alt:""})))}},7209:function(e,t,n){"use strict";n(7294);t.Z=function(e,t){var n,r;for(n=0;n<e.mediaDetails.sizes.length;++n)e.mediaDetails.sizes[n].name===t&&(r=e.mediaDetails.sizes[n].sourceUrl);return r||e.mediaItemUrl}},503:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.id,n=e.dataClass,o=e.nameProduct;return r.createElement("div",{onClick:function(){document.querySelector(".PopBox.BuyOneClick").classList.add("active"),document.querySelector(".PopBox.BuyOneClick .nameProduct").innerHTML=o},id:t,className:n},"Купить в 1 клик")}},9438:function(e,t,n){"use strict";var r=n(7294),o=n(5444),c=n(7209),a=n(3724),i=n(503);t.Z=function(e){var t=e.article;e.col;return r.createElement("div",{className:"productItem col-xl-3 col-lg-3 col-md-4",key:t.id},r.createElement("div",{className:"box-img"},r.createElement(o.Link,{to:"/shop/"+t.productCategories.slug+"/"+t.slug},r.createElement("img",{src:(0,c.Z)(t.image,"catalog-product"),alt:""})),r.createElement(a.Z,{id:t.id})),r.createElement(o.Link,{to:"/shop/"+t.productCategories.slug+"/"+t.slug},r.createElement("h3",{className:"product-title"},t.name)),r.createElement("div",null,r.createElement("div",null,"Цена:"),r.createElement("div",{className:"box-price",dangerouslySetInnerHTML:{__html:t.price}})),r.createElement(i.Z,{nameProduct:t.name,id:t.id,dataClass:"buy-one-click btn style-1 w100"}))}},7071:function(e,t,n){var r=n(852)(n(5639),"Map");e.exports=r},2705:function(e,t,n){var r=n(5639).Symbol;e.exports=r},577:function(e,t,n){var r=n(852)(n(5639),"WeakMap");e.exports=r},4239:function(e,t,n){var r=n(2705),o=n(9607),c=n(2333),a=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?o(e):c(e)}},9454:function(e,t,n){var r=n(4239),o=n(7005);e.exports=function(e){return o(e)&&"[object Arguments]"==r(e)}},8458:function(e,t,n){var r=n(3560),o=n(5346),c=n(3218),a=n(346),i=/^\[object .+?Constructor\]$/,u=Function.prototype,s=Object.prototype,l=u.toString,p=s.hasOwnProperty,f=RegExp("^"+l.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!c(e)||o(e))&&(r(e)?f:i).test(a(e))}},8749:function(e,t,n){var r=n(4239),o=n(1780),c=n(7005),a={};a["[object Float32Array]"]=a["[object Float64Array]"]=a["[object Int8Array]"]=a["[object Int16Array]"]=a["[object Int32Array]"]=a["[object Uint8Array]"]=a["[object Uint8ClampedArray]"]=a["[object Uint16Array]"]=a["[object Uint32Array]"]=!0,a["[object Arguments]"]=a["[object Array]"]=a["[object ArrayBuffer]"]=a["[object Boolean]"]=a["[object DataView]"]=a["[object Date]"]=a["[object Error]"]=a["[object Function]"]=a["[object Map]"]=a["[object Number]"]=a["[object Object]"]=a["[object RegExp]"]=a["[object Set]"]=a["[object String]"]=a["[object WeakMap]"]=!1,e.exports=function(e){return c(e)&&o(e.length)&&!!a[r(e)]}},280:function(e,t,n){var r=n(5726),o=n(6916),c=Object.prototype.hasOwnProperty;e.exports=function(e){if(!r(e))return o(e);var t=[];for(var n in Object(e))c.call(e,n)&&"constructor"!=n&&t.push(n);return t}},7518:function(e){e.exports=function(e){return function(t){return e(t)}}},4429:function(e,t,n){var r=n(5639)["__core-js_shared__"];e.exports=r},1957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},852:function(e,t,n){var r=n(8458),o=n(7801);e.exports=function(e,t){var n=o(e,t);return r(n)?n:void 0}},9607:function(e,t,n){var r=n(2705),o=Object.prototype,c=o.hasOwnProperty,a=o.toString,i=r?r.toStringTag:void 0;e.exports=function(e){var t=c.call(e,i),n=e[i];try{e[i]=void 0;var r=!0}catch(u){}var o=a.call(e);return r&&(t?e[i]=n:delete e[i]),o}},7801:function(e){e.exports=function(e,t){return null==e?void 0:e[t]}},5346:function(e,t,n){var r,o=n(4429),c=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";e.exports=function(e){return!!c&&c in e}},5726:function(e){var t=Object.prototype;e.exports=function(e){var n=e&&e.constructor;return e===("function"==typeof n&&n.prototype||t)}},6916:function(e,t,n){var r=n(5569)(Object.keys,Object);e.exports=r},1167:function(e,t,n){e=n.nmd(e);var r=n(1957),o=t&&!t.nodeType&&t,c=o&&e&&!e.nodeType&&e,a=c&&c.exports===o&&r.process,i=function(){try{var e=c&&c.require&&c.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(t){}}();e.exports=i},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5569:function(e){e.exports=function(e,t){return function(n){return e(t(n))}}},5639:function(e,t,n){var r=n(1957),o="object"==typeof self&&self&&self.Object===Object&&self,c=r||o||Function("return this")();e.exports=c},346:function(e){var t=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return t.call(e)}catch(n){}try{return e+""}catch(n){}}return""}},5694:function(e,t,n){var r=n(9454),o=n(7005),c=Object.prototype,a=c.hasOwnProperty,i=c.propertyIsEnumerable,u=r(function(){return arguments}())?r:function(e){return o(e)&&a.call(e,"callee")&&!i.call(e,"callee")};e.exports=u},1469:function(e){var t=Array.isArray;e.exports=t},8612:function(e,t,n){var r=n(3560),o=n(1780);e.exports=function(e){return null!=e&&o(e.length)&&!r(e)}},4144:function(e,t,n){e=n.nmd(e);var r=n(5639),o=n(5062),c=t&&!t.nodeType&&t,a=c&&e&&!e.nodeType&&e,i=a&&a.exports===c?r.Buffer:void 0,u=(i?i.isBuffer:void 0)||o;e.exports=u},3560:function(e,t,n){var r=n(4239),o=n(3218);e.exports=function(e){if(!o(e))return!1;var t=r(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},1780:function(e){e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},3218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},6719:function(e,t,n){var r=n(8749),o=n(7518),c=n(1167),a=c&&c.isTypedArray,i=a?o(a):r;e.exports=i},5062:function(e){e.exports=function(){return!1}}}]);
//# sourceMappingURL=ffea2e2d024f356eaef3dfed3a6999d68868f53e-32697218a7d096753a57.js.map