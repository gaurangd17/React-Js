(this["webpackJsonpburger-app"]=this["webpackJsonpburger-app"]||[]).push([[5],{101:function(e,n,r){e.exports={Order:"_4yi4ZpfqAgHINYViIZYP6"}},104:function(e,n,r){"use strict";r.r(n);var t=r(4),a=r(5),i=r(6),o=r(7),c=r(0),s=r.n(c),u=r(13),p=r(101),d=r.n(p),l=function(e){var n=[];for(var r in e.ingredients)n.push({name:r,amount:e.ingredients[r]});var t=n.map((function(e){return s.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},key:e.name},e.name," (",e.amount,")")}));return s.a.createElement("div",{className:d.a.Order},s.a.createElement("p",null," Ingredients : ",t),s.a.createElement("p",null," Price : ",s.a.createElement("strong",null,"INR ",e.price.toFixed(2))))},m=r(19),f=r(42),h=r(14),g=r(41),b=function(e){Object(o.a)(r,e);var n=Object(i.a)(r);function r(){return Object(t.a)(this,r),n.apply(this,arguments)}return Object(a.a)(r,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token,this.props.userId)}},{key:"render",value:function(){var e=s.a.createElement(g.a,null);return this.props.loading||(e=this.props.orders.map((function(e){return s.a.createElement(l,{key:e.id,ingredients:e.ingredients,price:+e.price})}))),s.a.createElement("div",null,e)}}]),r}(c.Component);n.default=Object(u.b)((function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onFetchOrders:function(n,r){return e(h.d(n,r))}}}))(Object(f.a)(b,m.a))}}]);
//# sourceMappingURL=5.71b640ae.chunk.js.map