(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[222],{9197:function(e,t,n){"use strict";n.r(t),n.d(t,{Step:function(){return x},checkoutList:function(){return b},default:function(){return w}});var a=n(7294),r=n(242),l=n(5444);var s,c=n(3026),i=function(){var e=(0,a.useContext)(r.sA);function t(){return e.items?e.items.reduce((function(e,t){return e+t.count*t.price}),0):0}return console.log(e),a.createElement(a.Fragment,null,a.createElement("div",{className:"mb-3"},a.createElement("div",{className:"resultPrice mb-3"},e.items&&e.items.length>0&&a.createElement(a.Fragment,null,a.createElement("div",{className:"pb-3"},a.createElement("strong",null,"ВАШ ЗАКАЗ:")),a.createElement("div",{className:"row  pb-3 d-flex align-items-center"},a.createElement("div",{className:"col"},a.createElement("span",null,"Товаров на сумму:")),a.createElement("div",{className:"col-auto"},a.createElement("div",{className:"box-result"},t()," грн"))),a.createElement("div",{className:"row line-bottom  pb-3 d-flex align-items-center"},a.createElement("div",{className:"col"},a.createElement("span",null,"Ваша скидка:")),a.createElement("div",{className:"col-auto"},a.createElement("div",{className:"box-result"},"0 грн"))),a.createElement("div",{className:"row  pt-3 d-flex align-items-center"},a.createElement("div",{className:"col"},a.createElement("span",null,"Сумма к оплате:")),a.createElement("div",{className:"col-auto"},a.createElement("div",{className:"box-result"},t()," грн")))))))},o=n(3552),m=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={firstName:"",lastName:"",phone:"",city:"",address1:""},t.handleInputChange=function(e){var n,a=e.target,r=a.value,l=a.name;t.setState(((n={})[l]=r,n))},t.handleSubmit=function(e){e.preventDefault(),x(3),"undefined"!=typeof window&&localStorage.setItem("payment",JSON.stringify(t.state)),console.log("payment","undefined"!=typeof window&&JSON.parse(localStorage.getItem("payment")))},t}(0,o.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e="undefined"!=typeof window&&JSON.parse(localStorage.getItem("payment"));e&&this.setState({firstName:e.firstName||"",lastName:e.lastName||"",phone:e.phone||"",city:e.city||"",address1:e.address1||""})},n.render=function(){return a.createElement("form",{onSubmit:this.handleSubmit},a.createElement("div",{className:"box-checkout-title text-center"},a.createElement("strong",null,"получатель")),a.createElement("div",{id:"payment",className:"payment line-bottom pt-3 pb-3"},a.createElement("div",{className:"input-group"},a.createElement("input",{required:!0,type:"text",name:"firstName",placeholder:"Имя",className:0==this.state.firstName.length?"input error":"input valid",value:this.state.firstName,onChange:this.handleInputChange})),a.createElement("div",{className:"input-group"},a.createElement("input",{required:!0,type:"text",name:"lastName",placeholder:"Фамилия",className:"input",value:this.state.lastName,onChange:this.handleInputChange})),a.createElement("div",{className:"input-group"},a.createElement("input",{required:!0,type:"phone",name:"phone",placeholder:"Ваш телефон",className:"input",value:this.state.phone,onChange:this.handleInputChange}))),a.createElement("div",{className:"box-checkout-title text-center pt-3"},a.createElement("strong",null,"адрес получения")),a.createElement("div",{id:"delivery",className:"delivery pt-3 pb-3"},a.createElement("div",{className:"input-group"},a.createElement("input",{required:!0,type:"text",name:"city",placeholder:"Город",className:"input",value:this.state.city,onChange:this.handleInputChange})),a.createElement("div",{className:"input-group"},a.createElement("input",{required:!0,type:"text",name:"address1",placeholder:"Выберите отделение новой почты",className:"input",value:this.state.address1,onChange:this.handleInputChange})),a.createElement("div",{className:"input-group"},a.createElement("button",{className:"btn style-3 w100"},"Продолжить"))))},t}(a.Component),u=n(2137),d=n(5761),p=n(7757),v=n.n(p),f=n(103),h=n(2863),g=(0,f.ZP)(s||(s=(0,d.Z)(["\n    mutation createOrderMutation( $clientMutationId: String!, $firstName: String!,$lastName: String!, $phone: String!, $city: String!, $address1: String!, $lineItems: [LineItemInput] ){\n    createOrder(input: {clientMutationId: $clientMutationId, billing: {firstName: $firstName, lastName: $lastName, phone: $phone, city: $city, address1: $address1}, lineItems: $lineItems }) {\n      clientMutationId\n      order {\n        id\n        billing {\n          firstName\n          lastName\n          phone\n          city\n          address1\n        }\n      }\n      orderId\n    }\n  }\n"]))),N=function(){var e=(0,a.useContext)(r.sA),t=(0,a.useState)(""),n=t[0],s=t[1];return a.createElement(a.Fragment,null,a.createElement("div",{className:"pay pt-3 pb-3"},a.createElement(h.mm,{mutation:g},(function(t,r){var c=r.loading,i=(r.error,r.data);return a.createElement(a.Fragment,null,a.createElement("form",{onSubmit:function(){var n=(0,u.Z)(v().mark((function n(a){var r;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a.preventDefault(),x(3),r="undefined"!=typeof window&&JSON.parse(localStorage.getItem("payment")),console.log("firstName",r,r.firstName),t({variables:{clientMutationId:"Checkout",firstName:r.firstName,lastName:r.lastName,phone:r.phone,city:r.city,address1:r.address1,lineItems:e.items.map((function(e){return{variationId:e.databaseId,quantity:e.count}}))}}),"undefined"!=typeof window&&JSON.parse(localStorage.getItem("payment"));case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},a.createElement("div",{className:"input-group"},a.createElement("select",{required:!0,size:"1",className:"input",name:"payMetod",value:n,onChange:function(e){s(e.target.value)}},a.createElement("option",{value:""},"Выберите способ оплаты"),a.createElement("option",{value:"На банковскую карточку"},"На банковскую карточку"),a.createElement("option",{value:"Наложеным платежом"},"Наложеным платежом"))),a.createElement("div",{className:"text-center"},a.createElement("button",{className:"btn style-3 w100"},c?"Отправка...":"подтвердить заказ"," "))),a.createElement("div",{className:"d-none"},i&&a.createElement(a.Fragment,null,console.log("form send ",i),"data.createOrder.orderId && (","undefined"!=typeof window&&localStorage.setItem("lastOrder",JSON.stringify(i)),"undefined"!=typeof window&&localStorage.setItem("AddCart",""),(0,l.navigate)("/order"),")")))})),a.createElement("div",{className:"text text-center pt-4 pb-1"},"Нажимая кнопку “оформить покупку/оплатить”, я подтверждаю согласие с условиями",a.createElement(l.Link,{className:"btn style-6",to:"/"},"электронного договора купли-продажи товаров  ")),a.createElement("div",{className:"text-center mt-2"},a.createElement("div",{onClick:function(){return x(2)},className:"box-svg"},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"10",viewBox:"0 0 14 10"},a.createElement("g",null,a.createElement("g",null,a.createElement("path",{fill:"#888",d:"M4.997 9.663l.94-.94-3.054-3.06h10.78V4.33H2.883l3.06-3.06-.946-.94L.33 4.997z"})))),a.createElement("span",{className:"btn style-6 ml-1"},"Назад к доставке")))))};function E(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0;return function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function b(e){for(var t,n=E(document.querySelectorAll(".box-checkout-list .list-item"));!(t=n()).done;){t.value.classList.remove("active")}for(var a,r=E(document.querySelectorAll(".box-checkout-result .result"));!(a=r()).done;){a.value.classList.remove("active")}document.getElementById("box-checkout-list-"+e).classList.add("active"),document.getElementById("box-checkout-list-"+e+"-result").classList.add("active")}function x(e){b(e)}var w=function(e){e.pageContext;var t="undefined"!=typeof window&&JSON.parse(localStorage.getItem("AddCart"));return a.createElement(r.ZP,{page:"checkout"},t&&t.length>0?a.createElement("div",{className:"container pt-1"},a.createElement("div",{className:"box-checkout-list row"},a.createElement("div",{id:"box-checkout-list-2",className:"list-item col active"},"Доставка"),a.createElement("div",{id:"box-checkout-list-3",className:"list-item col"},"Оплата")),a.createElement("div",{className:"box-checkout-result"},a.createElement("div",{id:"box-checkout-list-2-result",className:"result active"},a.createElement("div",{className:"col-12"},a.createElement(m,null))),a.createElement("div",{id:"box-checkout-list-3-result",className:"result"},a.createElement("div",{className:"box-checkout-title text-center pt-3"},a.createElement("strong",null,"Оплата")),a.createElement(N,null))),a.createElement(i,null)):a.createElement(c.Z,{info:"save",title:"Корзина пустая",text:"Вы не добавили в корзину ни одного товара",classBox:"h-100 ",homeBtn:!0}))}}}]);
//# sourceMappingURL=component---src-templates-checkout-js-0def5bf7accab0436bfa.js.map