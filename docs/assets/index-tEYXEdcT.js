(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var Vo,he,Af,Sn,hh,Sf,Wa,Oc,Ha,Qa,Ts={},Rf=[],J_=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Mc=Array.isArray;function Zt(n,e){for(var t in e)n[t]=e[t];return n}function Pf(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function Y_(n,e,t){var r,s,i,o={};for(i in e)i=="key"?r=e[i]:i=="ref"?s=e[i]:o[i]=e[i];if(arguments.length>2&&(o.children=arguments.length>3?Vo.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(i in n.defaultProps)o[i]===void 0&&(o[i]=n.defaultProps[i]);return Li(n,o,r,s,null)}function Li(n,e,t,r,s){var i={type:n,props:e,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:s??++Af,__i:-1,__u:0};return s==null&&he.vnode!=null&&he.vnode(i),i}function Re(n){return n.children}function Fi(n,e){this.props=n,this.context=e}function _r(n,e){if(e==null)return n.__?_r(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?_r(n):null}function Cf(n){var e,t;if((n=n.__)!=null&&n.__c!=null){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null){n.__e=n.__c.base=t.__e;break}return Cf(n)}}function dh(n){(!n.__d&&(n.__d=!0)&&Sn.push(n)&&!ro.__r++||hh!==he.debounceRendering)&&((hh=he.debounceRendering)||Sf)(ro)}function ro(){var n,e,t,r,s,i,o,a;for(Sn.sort(Wa);n=Sn.shift();)n.__d&&(e=Sn.length,r=void 0,i=(s=(t=n).__v).__e,o=[],a=[],t.__P&&((r=Zt({},s)).__v=s.__v+1,he.vnode&&he.vnode(r),Lc(t.__P,r,s,t.__n,t.__P.namespaceURI,32&s.__u?[i]:null,o,i??_r(s),!!(32&s.__u),a),r.__v=s.__v,r.__.__k[r.__i]=r,Vf(o,r,a),r.__e!=i&&Cf(r)),Sn.length>e&&Sn.sort(Wa));ro.__r=0}function kf(n,e,t,r,s,i,o,a,l,h,f){var m,_,y,b,k,C=r&&r.__k||Rf,N=e.length;for(t.__d=l,X_(t,e,C),l=t.__d,m=0;m<N;m++)(y=t.__k[m])!=null&&(_=y.__i===-1?Ts:C[y.__i]||Ts,y.__i=m,Lc(n,y,_,s,i,o,a,l,h,f),b=y.__e,y.ref&&_.ref!=y.ref&&(_.ref&&Fc(_.ref,null,y),f.push(y.ref,y.__c||b,y)),k==null&&b!=null&&(k=b),65536&y.__u||_.__k===y.__k?l=Df(y,l,n):typeof y.type=="function"&&y.__d!==void 0?l=y.__d:b&&(l=b.nextSibling),y.__d=void 0,y.__u&=-196609);t.__d=l,t.__e=k}function X_(n,e,t){var r,s,i,o,a,l=e.length,h=t.length,f=h,m=0;for(n.__k=[],r=0;r<l;r++)(s=e[r])!=null&&typeof s!="boolean"&&typeof s!="function"?(o=r+m,(s=n.__k[r]=typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?Li(null,s,null,null,null):Mc(s)?Li(Re,{children:s},null,null,null):s.constructor===void 0&&s.__b>0?Li(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s).__=n,s.__b=n.__b+1,i=null,(a=s.__i=Z_(s,t,o,f))!==-1&&(f--,(i=t[a])&&(i.__u|=131072)),i==null||i.__v===null?(a==-1&&m--,typeof s.type!="function"&&(s.__u|=65536)):a!==o&&(a==o-1?m--:a==o+1?m++:(a>o?m--:m++,s.__u|=65536))):s=n.__k[r]=null;if(f)for(r=0;r<h;r++)(i=t[r])!=null&&!(131072&i.__u)&&(i.__e==n.__d&&(n.__d=_r(i)),Nf(i,i))}function Df(n,e,t){var r,s;if(typeof n.type=="function"){for(r=n.__k,s=0;r&&s<r.length;s++)r[s]&&(r[s].__=n,e=Df(r[s],e,t));return e}n.__e!=e&&(e&&n.type&&!t.contains(e)&&(e=_r(n)),t.insertBefore(n.__e,e||null),e=n.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function Z_(n,e,t,r){var s=n.key,i=n.type,o=t-1,a=t+1,l=e[t];if(l===null||l&&s==l.key&&i===l.type&&!(131072&l.__u))return t;if(r>(l!=null&&!(131072&l.__u)?1:0))for(;o>=0||a<e.length;){if(o>=0){if((l=e[o])&&!(131072&l.__u)&&s==l.key&&i===l.type)return o;o--}if(a<e.length){if((l=e[a])&&!(131072&l.__u)&&s==l.key&&i===l.type)return a;a++}}return-1}function fh(n,e,t){e[0]==="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||J_.test(e)?t:t+"px"}function Ai(n,e,t,r,s){var i;e:if(e==="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof r=="string"&&(n.style.cssText=r=""),r)for(e in r)t&&e in t||fh(n.style,e,"");if(t)for(e in t)r&&t[e]===r[e]||fh(n.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")i=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in n||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),n.l||(n.l={}),n.l[e+i]=t,t?r?t.u=r.u:(t.u=Oc,n.addEventListener(e,i?Qa:Ha,i)):n.removeEventListener(e,i?Qa:Ha,i);else{if(s=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!=="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function mh(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e.t==null)e.t=Oc++;else if(e.t<t.u)return;return t(he.event?he.event(e):e)}}}function Lc(n,e,t,r,s,i,o,a,l,h){var f,m,_,y,b,k,C,N,O,U,M,q,$,T,v,I,E=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(l=!!(32&t.__u),i=[a=e.__e=t.__e]),(f=he.__b)&&f(e);e:if(typeof E=="function")try{if(N=e.props,O="prototype"in E&&E.prototype.render,U=(f=E.contextType)&&r[f.__c],M=f?U?U.props.value:f.__:r,t.__c?C=(m=e.__c=t.__c).__=m.__E:(O?e.__c=m=new E(N,M):(e.__c=m=new Fi(N,M),m.constructor=E,m.render=ty),U&&U.sub(m),m.props=N,m.state||(m.state={}),m.context=M,m.__n=r,_=m.__d=!0,m.__h=[],m._sb=[]),O&&m.__s==null&&(m.__s=m.state),O&&E.getDerivedStateFromProps!=null&&(m.__s==m.state&&(m.__s=Zt({},m.__s)),Zt(m.__s,E.getDerivedStateFromProps(N,m.__s))),y=m.props,b=m.state,m.__v=e,_)O&&E.getDerivedStateFromProps==null&&m.componentWillMount!=null&&m.componentWillMount(),O&&m.componentDidMount!=null&&m.__h.push(m.componentDidMount);else{if(O&&E.getDerivedStateFromProps==null&&N!==y&&m.componentWillReceiveProps!=null&&m.componentWillReceiveProps(N,M),!m.__e&&(m.shouldComponentUpdate!=null&&m.shouldComponentUpdate(N,m.__s,M)===!1||e.__v===t.__v)){for(e.__v!==t.__v&&(m.props=N,m.state=m.__s,m.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(A){A&&(A.__=e)}),q=0;q<m._sb.length;q++)m.__h.push(m._sb[q]);m._sb=[],m.__h.length&&o.push(m);break e}m.componentWillUpdate!=null&&m.componentWillUpdate(N,m.__s,M),O&&m.componentDidUpdate!=null&&m.__h.push(function(){m.componentDidUpdate(y,b,k)})}if(m.context=M,m.props=N,m.__P=n,m.__e=!1,$=he.__r,T=0,O){for(m.state=m.__s,m.__d=!1,$&&$(e),f=m.render(m.props,m.state,m.context),v=0;v<m._sb.length;v++)m.__h.push(m._sb[v]);m._sb=[]}else do m.__d=!1,$&&$(e),f=m.render(m.props,m.state,m.context),m.state=m.__s;while(m.__d&&++T<25);m.state=m.__s,m.getChildContext!=null&&(r=Zt(Zt({},r),m.getChildContext())),O&&!_&&m.getSnapshotBeforeUpdate!=null&&(k=m.getSnapshotBeforeUpdate(y,b)),kf(n,Mc(I=f!=null&&f.type===Re&&f.key==null?f.props.children:f)?I:[I],e,t,r,s,i,o,a,l,h),m.base=e.__e,e.__u&=-161,m.__h.length&&o.push(m),C&&(m.__E=m.__=null)}catch(A){if(e.__v=null,l||i!=null){for(e.__u|=l?160:128;a&&a.nodeType===8&&a.nextSibling;)a=a.nextSibling;i[i.indexOf(a)]=null,e.__e=a}else e.__e=t.__e,e.__k=t.__k;he.__e(A,e,t)}else i==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=ey(t.__e,e,t,r,s,i,o,l,h);(f=he.diffed)&&f(e)}function Vf(n,e,t){e.__d=void 0;for(var r=0;r<t.length;r++)Fc(t[r],t[++r],t[++r]);he.__c&&he.__c(e,n),n.some(function(s){try{n=s.__h,s.__h=[],n.some(function(i){i.call(s)})}catch(i){he.__e(i,s.__v)}})}function ey(n,e,t,r,s,i,o,a,l){var h,f,m,_,y,b,k,C=t.props,N=e.props,O=e.type;if(O==="svg"?s="http://www.w3.org/2000/svg":O==="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),i!=null){for(h=0;h<i.length;h++)if((y=i[h])&&"setAttribute"in y==!!O&&(O?y.localName===O:y.nodeType===3)){n=y,i[h]=null;break}}if(n==null){if(O===null)return document.createTextNode(N);n=document.createElementNS(s,O,N.is&&N),a&&(he.__m&&he.__m(e,i),a=!1),i=null}if(O===null)C===N||a&&n.data===N||(n.data=N);else{if(i=i&&Vo.call(n.childNodes),C=t.props||Ts,!a&&i!=null)for(C={},h=0;h<n.attributes.length;h++)C[(y=n.attributes[h]).name]=y.value;for(h in C)if(y=C[h],h!="children"){if(h=="dangerouslySetInnerHTML")m=y;else if(!(h in N)){if(h=="value"&&"defaultValue"in N||h=="checked"&&"defaultChecked"in N)continue;Ai(n,h,null,y,s)}}for(h in N)y=N[h],h=="children"?_=y:h=="dangerouslySetInnerHTML"?f=y:h=="value"?b=y:h=="checked"?k=y:a&&typeof y!="function"||C[h]===y||Ai(n,h,y,C[h],s);if(f)a||m&&(f.__html===m.__html||f.__html===n.innerHTML)||(n.innerHTML=f.__html),e.__k=[];else if(m&&(n.innerHTML=""),kf(n,Mc(_)?_:[_],e,t,r,O==="foreignObject"?"http://www.w3.org/1999/xhtml":s,i,o,i?i[0]:t.__k&&_r(t,0),a,l),i!=null)for(h=i.length;h--;)Pf(i[h]);a||(h="value",O==="progress"&&b==null?n.removeAttribute("value"):b!==void 0&&(b!==n[h]||O==="progress"&&!b||O==="option"&&b!==C[h])&&Ai(n,h,b,C[h],s),h="checked",k!==void 0&&k!==n[h]&&Ai(n,h,k,C[h],s))}return n}function Fc(n,e,t){try{if(typeof n=="function"){var r=typeof n.__u=="function";r&&n.__u(),r&&e==null||(n.__u=n(e))}else n.current=e}catch(s){he.__e(s,t)}}function Nf(n,e,t){var r,s;if(he.unmount&&he.unmount(n),(r=n.ref)&&(r.current&&r.current!==n.__e||Fc(r,null,e)),(r=n.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){he.__e(i,e)}r.base=r.__P=null}if(r=n.__k)for(s=0;s<r.length;s++)r[s]&&Nf(r[s],e,t||typeof n.type!="function");t||Pf(n.__e),n.__c=n.__=n.__e=n.__d=void 0}function ty(n,e,t){return this.constructor(n,t)}function ny(n,e,t){var r,s,i,o;he.__&&he.__(n,e),s=(r=!1)?null:e.__k,i=[],o=[],Lc(e,n=e.__k=Y_(Re,null,[n]),s||Ts,Ts,e.namespaceURI,s?null:e.firstChild?Vo.call(e.childNodes):null,i,s?s.__e:e.firstChild,r,o),Vf(i,n,o)}Vo=Rf.slice,he={__e:function(n,e,t,r){for(var s,i,o;e=e.__;)if((s=e.__c)&&!s.__)try{if((i=s.constructor)&&i.getDerivedStateFromError!=null&&(s.setState(i.getDerivedStateFromError(n)),o=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(n,r||{}),o=s.__d),o)return s.__E=s}catch(a){n=a}throw n}},Af=0,Fi.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Zt({},this.state),typeof n=="function"&&(n=n(Zt({},t),this.props)),n&&Zt(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),dh(this))},Fi.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),dh(this))},Fi.prototype.render=Re,Sn=[],Sf=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Wa=function(n,e){return n.__v.__b-e.__v.__b},ro.__r=0,Oc=0,Ha=mh(!1),Qa=mh(!0);var ry=0;function u(n,e,t,r,s,i){e||(e={});var o,a,l=e;"ref"in e&&(o=e.ref,delete e.ref);var h={type:n,props:l,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--ry,__i:-1,__u:0,__source:s,__self:i};if(typeof n=="function"&&(o=n.defaultProps))for(a in o)l[a]===void 0&&(l[a]=o[a]);return he.vnode&&he.vnode(h),h}var bs,Ie,Pa,ph,so=0,xf=[],Ae=he,gh=Ae.__b,_h=Ae.__r,yh=Ae.diffed,vh=Ae.__c,Ih=Ae.unmount,wh=Ae.__;function Uc(n,e){Ae.__h&&Ae.__h(Ie,n,so||e),so=0;var t=Ie.__H||(Ie.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({}),t.__[n]}function j(n){return so=1,sy(Mf,n)}function sy(n,e,t){var r=Uc(bs++,2);if(r.t=n,!r.__c&&(r.__=[Mf(void 0,e),function(a){var l=r.__N?r.__N[0]:r.__[0],h=r.t(l,a);l!==h&&(r.__N=[h,r.__[1]],r.__c.setState({}))}],r.__c=Ie,!Ie.u)){var s=function(a,l,h){if(!r.__c.__H)return!0;var f=r.__c.__H.__.filter(function(_){return!!_.__c});if(f.every(function(_){return!_.__N}))return!i||i.call(this,a,l,h);var m=!1;return f.forEach(function(_){if(_.__N){var y=_.__[0];_.__=_.__N,_.__N=void 0,y!==_.__[0]&&(m=!0)}}),!(!m&&r.__c.props===a)&&(!i||i.call(this,a,l,h))};Ie.u=!0;var i=Ie.shouldComponentUpdate,o=Ie.componentWillUpdate;Ie.componentWillUpdate=function(a,l,h){if(this.__e){var f=i;i=void 0,s(a,l,h),i=f}o&&o.call(this,a,l,h)},Ie.shouldComponentUpdate=s}return r.__N||r.__}function it(n,e){var t=Uc(bs++,3);!Ae.__s&&Of(t.__H,e)&&(t.__=n,t.i=e,Ie.__H.__h.push(t))}function Ja(n){return so=5,iy(function(){return{current:n}},[])}function iy(n,e){var t=Uc(bs++,7);return Of(t.__H,e)&&(t.__=n(),t.__H=e,t.__h=n),t.__}function oy(){for(var n;n=xf.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(Ui),n.__H.__h.forEach(Ya),n.__H.__h=[]}catch(e){n.__H.__h=[],Ae.__e(e,n.__v)}}Ae.__b=function(n){Ie=null,gh&&gh(n)},Ae.__=function(n,e){n&&e.__k&&e.__k.__m&&(n.__m=e.__k.__m),wh&&wh(n,e)},Ae.__r=function(n){_h&&_h(n),bs=0;var e=(Ie=n.__c).__H;e&&(Pa===Ie?(e.__h=[],Ie.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.i=t.__N=void 0})):(e.__h.forEach(Ui),e.__h.forEach(Ya),e.__h=[],bs=0)),Pa=Ie},Ae.diffed=function(n){yh&&yh(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(xf.push(e)!==1&&ph===Ae.requestAnimationFrame||((ph=Ae.requestAnimationFrame)||ay)(oy)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.i=void 0})),Pa=Ie=null},Ae.__c=function(n,e){e.some(function(t){try{t.__h.forEach(Ui),t.__h=t.__h.filter(function(r){return!r.__||Ya(r)})}catch(r){e.some(function(s){s.__h&&(s.__h=[])}),e=[],Ae.__e(r,t.__v)}}),vh&&vh(n,e)},Ae.unmount=function(n){Ih&&Ih(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.forEach(function(r){try{Ui(r)}catch(s){e=s}}),t.__H=void 0,e&&Ae.__e(e,t.__v))};var Eh=typeof requestAnimationFrame=="function";function ay(n){var e,t=function(){clearTimeout(r),Eh&&cancelAnimationFrame(e),setTimeout(n)},r=setTimeout(t,100);Eh&&(e=requestAnimationFrame(t))}function Ui(n){var e=Ie,t=n.__c;typeof t=="function"&&(n.__c=void 0,t()),Ie=e}function Ya(n){var e=Ie;n.__c=n.__(),Ie=e}function Of(n,e){return!n||n.length!==e.length||e.some(function(t,r){return t!==n[r]})}function Mf(n,e){return typeof e=="function"?e(n):e}var Th={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},cy=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ff={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,h=l?n[s+2]:0,f=i>>2,m=(i&3)<<4|a>>4;let _=(a&15)<<2|h>>6,y=h&63;l||(y=64,o||(_=64)),r.push(t[f],t[m],t[_],t[y])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Lf(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):cy(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||a==null||h==null||m==null)throw new ly;const _=i<<2|a>>4;if(r.push(_),h!==64){const y=a<<4&240|h>>2;if(r.push(y),m!==64){const b=h<<6&192|m;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ly extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uy=function(n){const e=Lf(n);return Ff.encodeByteArray(e,!0)},Uf=function(n){return uy(n).replace(/\./g,"")},Bf=function(n){try{return Ff.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy=()=>hy().__FIREBASE_DEFAULTS__,fy=()=>{if(typeof process>"u"||typeof Th>"u")return;const n=Th.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},my=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Bf(n[1]);return e&&JSON.parse(e)},No=()=>{try{return dy()||fy()||my()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},py=n=>{var e,t;return(t=(e=No())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},jf=()=>{var n;return(n=No())===null||n===void 0?void 0:n.config},$f=n=>{var e;return(e=No())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _y(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function yy(){var n;const e=(n=No())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function vy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Iy(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function wy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ey(){const n=Pe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function qf(){return!yy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zf(){try{return typeof indexedDB=="object"}catch{return!1}}function Ty(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by="FirebaseError";class Mt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=by,Object.setPrototypeOf(this,Mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qs.prototype.create)}}class qs{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Ay(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Mt(s,a,r)}}function Ay(n,e){return n.replace(Sy,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Sy=/\{\$([^}]+)}/g;function Ry(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function xn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(bh(i)&&bh(o)){if(!xn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function bh(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function as(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function cs(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Py(n,e){const t=new Cy(n,e);return t.subscribe.bind(t)}class Cy{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");ky(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Ca),s.error===void 0&&(s.error=Ca),s.complete===void 0&&(s.complete=Ca);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ky(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ca(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(n){return n&&n._delegate?n._delegate:n}class On{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new gy;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ny(e))try{this.getOrInitializeService({instanceIdentifier:bn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=bn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=bn){return this.instances.has(e)}getOptions(e=bn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Vy(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=bn){return this.component?this.component.multipleInstances?e:bn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vy(n){return n===bn?void 0:n}function Ny(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Dy(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ee||(ee={}));const Oy={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},My=ee.INFO,Ly={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Fy=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Ly[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bc{constructor(e){this.name=e,this._logLevel=My,this._logHandler=Fy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Oy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const Uy=(n,e)=>e.some(t=>n instanceof t);let Ah,Sh;function By(){return Ah||(Ah=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jy(){return Sh||(Sh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Kf=new WeakMap,Xa=new WeakMap,Gf=new WeakMap,ka=new WeakMap,jc=new WeakMap;function $y(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(tn(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Kf.set(t,n)}).catch(()=>{}),jc.set(e,n),e}function qy(n){if(Xa.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Xa.set(n,e)}let Za={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Xa.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Gf.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return tn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function zy(n){Za=n(Za)}function Ky(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Da(this),e,...t);return Gf.set(r,e.sort?e.sort():[e]),tn(r)}:jy().includes(n)?function(...e){return n.apply(Da(this),e),tn(Kf.get(this))}:function(...e){return tn(n.apply(Da(this),e))}}function Gy(n){return typeof n=="function"?Ky(n):(n instanceof IDBTransaction&&qy(n),Uy(n,By())?new Proxy(n,Za):n)}function tn(n){if(n instanceof IDBRequest)return $y(n);if(ka.has(n))return ka.get(n);const e=Gy(n);return e!==n&&(ka.set(n,e),jc.set(e,n)),e}const Da=n=>jc.get(n);function Wy(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),a=tn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(tn(o.result),l.oldVersion,l.newVersion,tn(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}const Hy=["get","getKey","getAll","getAllKeys","count"],Qy=["put","add","delete","clear"],Va=new Map;function Rh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Va.get(e))return Va.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Qy.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Hy.includes(t)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(a.shift())),(await Promise.all([h[t](...a),s&&l.done]))[0]};return Va.set(e,i),i}zy(n=>({...n,get:(e,t,r)=>Rh(e,t)||n.get(e,t,r),has:(e,t)=>!!Rh(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Yy(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Yy(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ec="@firebase/app",Ph="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=new Bc("@firebase/app"),Xy="@firebase/app-compat",Zy="@firebase/analytics-compat",ev="@firebase/analytics",tv="@firebase/app-check-compat",nv="@firebase/app-check",rv="@firebase/auth",sv="@firebase/auth-compat",iv="@firebase/database",ov="@firebase/data-connect",av="@firebase/database-compat",cv="@firebase/functions",lv="@firebase/functions-compat",uv="@firebase/installations",hv="@firebase/installations-compat",dv="@firebase/messaging",fv="@firebase/messaging-compat",mv="@firebase/performance",pv="@firebase/performance-compat",gv="@firebase/remote-config",_v="@firebase/remote-config-compat",yv="@firebase/storage",vv="@firebase/storage-compat",Iv="@firebase/firestore",wv="@firebase/vertexai-preview",Ev="@firebase/firestore-compat",Tv="firebase",bv="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc="[DEFAULT]",Av={[ec]:"fire-core",[Xy]:"fire-core-compat",[ev]:"fire-analytics",[Zy]:"fire-analytics-compat",[nv]:"fire-app-check",[tv]:"fire-app-check-compat",[rv]:"fire-auth",[sv]:"fire-auth-compat",[iv]:"fire-rtdb",[ov]:"fire-data-connect",[av]:"fire-rtdb-compat",[cv]:"fire-fn",[lv]:"fire-fn-compat",[uv]:"fire-iid",[hv]:"fire-iid-compat",[dv]:"fire-fcm",[fv]:"fire-fcm-compat",[mv]:"fire-perf",[pv]:"fire-perf-compat",[gv]:"fire-rc",[_v]:"fire-rc-compat",[yv]:"fire-gcs",[vv]:"fire-gcs-compat",[Iv]:"fire-fst",[Ev]:"fire-fst-compat",[wv]:"fire-vertex","fire-js":"fire-js",[Tv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io=new Map,Sv=new Map,nc=new Map;function Ch(n,e){try{n.container.addComponent(e)}catch(t){Dt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function yr(n){const e=n.name;if(nc.has(e))return Dt.debug(`There were multiple attempts to register component ${e}.`),!1;nc.set(e,n);for(const t of io.values())Ch(t,n);for(const t of Sv.values())Ch(t,n);return!0}function $c(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ht(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},nn=new qs("app","Firebase",Rv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new On("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw nn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=bv;function Wf(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:tc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw nn.create("bad-app-name",{appName:String(s)});if(t||(t=jf()),!t)throw nn.create("no-options");const i=io.get(s);if(i){if(xn(t,i.options)&&xn(r,i.config))return i;throw nn.create("duplicate-app",{appName:s})}const o=new xy(s);for(const l of nc.values())o.addComponent(l);const a=new Pv(t,r,o);return io.set(s,a),a}function Cv(n=tc){const e=io.get(n);if(!e&&n===tc&&jf())return Wf();if(!e)throw nn.create("no-app",{appName:n});return e}function rn(n,e,t){var r;let s=(r=Av[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dt.warn(a.join(" "));return}yr(new On(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv="firebase-heartbeat-database",Dv=1,As="firebase-heartbeat-store";let Na=null;function Hf(){return Na||(Na=Wy(kv,Dv,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(As)}catch(t){console.warn(t)}}}}).catch(n=>{throw nn.create("idb-open",{originalErrorMessage:n.message})})),Na}async function Vv(n){try{const t=(await Hf()).transaction(As),r=await t.objectStore(As).get(Qf(n));return await t.done,r}catch(e){if(e instanceof Mt)Dt.warn(e.message);else{const t=nn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dt.warn(t.message)}}}async function kh(n,e){try{const r=(await Hf()).transaction(As,"readwrite");await r.objectStore(As).put(e,Qf(n)),await r.done}catch(t){if(t instanceof Mt)Dt.warn(t.message);else{const r=nn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Dt.warn(r.message)}}}function Qf(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv=1024,xv=30*24*60*60*1e3;class Ov{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Lv(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Dh();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=xv}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Dt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Dh(),{heartbeatsToSend:r,unsentEntries:s}=Mv(this._heartbeatsCache.heartbeats),i=Uf(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Dt.warn(t),""}}}function Dh(){return new Date().toISOString().substring(0,10)}function Mv(n,e=Nv){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Vh(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Vh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Lv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zf()?Ty().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Vv(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return kh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return kh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Vh(n){return Uf(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(n){yr(new On("platform-logger",e=>new Jy(e),"PRIVATE")),yr(new On("heartbeat",e=>new Ov(e),"PRIVATE")),rn(ec,Ph,n),rn(ec,Ph,"esm2017"),rn("fire-js","")}Fv("");var Uv="firebase",Bv="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rn(Uv,Bv,"app");function qc(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Jf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jv=Jf,Yf=new qs("auth","Firebase",Jf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo=new Bc("@firebase/auth");function $v(n,...e){oo.logLevel<=ee.WARN&&oo.warn(`Auth (${xr}): ${n}`,...e)}function Bi(n,...e){oo.logLevel<=ee.ERROR&&oo.error(`Auth (${xr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(n,...e){throw Kc(n,...e)}function dt(n,...e){return Kc(n,...e)}function zc(n,e,t){const r=Object.assign(Object.assign({},jv()),{[e]:t});return new qs("auth","Firebase",r).create(e,{appName:n.name})}function Pt(n){return zc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qv(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&ct(n,"argument-error"),zc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Kc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Yf.create(n,...e)}function H(n,e,...t){if(!n)throw Kc(e,...t)}function bt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Bi(e),new Error(e)}function Vt(n,e){n||bt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function zv(){return Nh()==="http:"||Nh()==="https:"}function Nh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zv()||Iy()||"connection"in navigator)?navigator.onLine:!0}function Gv(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,t){this.shortDelay=e,this.longDelay=t,Vt(t>e,"Short delay should be less than long delay!"),this.isMobile=_y()||wy()}get(){return Kv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(n,e){Vt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv=new Ks(3e4,6e4);function Lt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ft(n,e,t,r,s={}){return Zf(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=zs(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:l},i);return vy()||(h.referrerPolicy="no-referrer"),Xf.fetch()(em(n,n.config.apiHost,t,a),h)})}async function Zf(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Wv),e);try{const s=new Jv(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Si(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,h]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Si(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Si(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Si(n,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw zc(n,f,h);ct(n,f)}}catch(s){if(s instanceof Mt)throw s;ct(n,"network-request-failed",{message:String(s)})}}async function Gs(n,e,t,r,s={}){const i=await Ft(n,e,t,r,s);return"mfaPendingCredential"in i&&ct(n,"multi-factor-auth-required",{_serverResponse:i}),i}function em(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?Gc(n.config,s):`${n.config.apiScheme}://${s}`}function Qv(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Jv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(dt(this.auth,"network-request-failed")),Hv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Si(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=dt(n,e,r);return s.customData._tokenResponse=t,s}function xh(n){return n!==void 0&&n.enterprise!==void 0}class Yv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Qv(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Xv(n,e){return Ft(n,"GET","/v2/recaptchaConfig",Lt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zv(n,e){return Ft(n,"POST","/v1/accounts:delete",e)}async function tm(n,e){return Ft(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function eI(n,e=!1){const t=Ee(n),r=await t.getIdToken(e),s=Wc(r);H(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ms(xa(s.auth_time)),issuedAtTime:ms(xa(s.iat)),expirationTime:ms(xa(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function xa(n){return Number(n)*1e3}function Wc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Bi("JWT malformed, contained fewer than 3 sections"),null;try{const s=Bf(t);return s?JSON.parse(s):(Bi("Failed to decode base64 JWT payload"),null)}catch(s){return Bi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Oh(n){const e=Wc(n);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ss(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Mt&&tI(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function tI({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ms(this.lastLoginAt),this.creationTime=ms(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ao(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Ss(n,tm(t,{idToken:r}));H(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?nm(i.providerUserInfo):[],a=sI(n.providerData,o),l=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),f=l?h:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new sc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,m)}async function rI(n){const e=Ee(n);await ao(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sI(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function nm(n){return n.map(e=>{var{providerId:t}=e,r=qc(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iI(n,e){const t=await Zf(n,{},async()=>{const r=zs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=em(n,s,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Xf.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function oI(n,e){return Ft(n,"POST","/v2/accounts:revokeToken",Lt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Oh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){H(e.length!==0,"internal-error");const t=Oh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await iI(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new fr;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(H(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fr,this.toJSON())}_performRefresh(){return bt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(n,e){H(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class At{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=qc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new nI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new sc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Ss(this,this.stsTokenManager.getToken(this.auth,e));return H(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return eI(this,e)}reload(){return rI(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new At(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ao(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ht(this.auth.app))return Promise.reject(Pt(this.auth));const e=await this.getIdToken();return await Ss(this,Zv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,a,l,h,f;const m=(r=t.displayName)!==null&&r!==void 0?r:void 0,_=(s=t.email)!==null&&s!==void 0?s:void 0,y=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,b=(o=t.photoURL)!==null&&o!==void 0?o:void 0,k=(a=t.tenantId)!==null&&a!==void 0?a:void 0,C=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,N=(h=t.createdAt)!==null&&h!==void 0?h:void 0,O=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:U,emailVerified:M,isAnonymous:q,providerData:$,stsTokenManager:T}=t;H(U&&T,e,"internal-error");const v=fr.fromJSON(this.name,T);H(typeof U=="string",e,"internal-error"),Gt(m,e.name),Gt(_,e.name),H(typeof M=="boolean",e,"internal-error"),H(typeof q=="boolean",e,"internal-error"),Gt(y,e.name),Gt(b,e.name),Gt(k,e.name),Gt(C,e.name),Gt(N,e.name),Gt(O,e.name);const I=new At({uid:U,auth:e,email:_,emailVerified:M,displayName:m,isAnonymous:q,photoURL:b,phoneNumber:y,tenantId:k,stsTokenManager:v,createdAt:N,lastLoginAt:O});return $&&Array.isArray($)&&(I.providerData=$.map(E=>Object.assign({},E))),C&&(I._redirectEventId=C),I}static async _fromIdTokenResponse(e,t,r=!1){const s=new fr;s.updateFromServerResponse(t);const i=new At({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ao(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];H(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?nm(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new fr;a.updateFromIdToken(r);const l=new At({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new sc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh=new Map;function St(n){Vt(n instanceof Function,"Expected a class definition");let e=Mh.get(n);return e?(Vt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Mh.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}rm.type="NONE";const Lh=rm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(n,e,t){return`firebase:${n}:${e}:${t}`}class mr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ji(this.userKey,s.apiKey,i),this.fullPersistenceKey=ji("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?At._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new mr(St(Lh),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||St(Lh);const o=ji(r,e.config.apiKey,e.name);let a=null;for(const h of t)try{const f=await h._get(o);if(f){const m=At._fromJSON(e,f);h!==i&&(a=m),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new mr(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new mr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(am(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lm(e))return"Blackberry";if(um(e))return"Webos";if(im(e))return"Safari";if((e.includes("chrome/")||om(e))&&!e.includes("edge/"))return"Chrome";if(cm(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function sm(n=Pe()){return/firefox\//i.test(n)}function im(n=Pe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function om(n=Pe()){return/crios\//i.test(n)}function am(n=Pe()){return/iemobile/i.test(n)}function cm(n=Pe()){return/android/i.test(n)}function lm(n=Pe()){return/blackberry/i.test(n)}function um(n=Pe()){return/webos/i.test(n)}function Hc(n=Pe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function aI(n=Pe()){var e;return Hc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function cI(){return Ey()&&document.documentMode===10}function hm(n=Pe()){return Hc(n)||cm(n)||um(n)||lm(n)||/windows phone/i.test(n)||am(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(n,e=[]){let t;switch(n){case"Browser":t=Fh(Pe());break;case"Worker":t=`${Fh(Pe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${xr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uI(n,e={}){return Ft(n,"GET","/v2/passwordPolicy",Lt(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI=6;class dI{constructor(e){var t,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:hI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Uh(this),this.idTokenSubscription=new Uh(this),this.beforeStateQueue=new lI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=St(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await mr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await tm(this,{idToken:e}),r=await At._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ht(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ao(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Gv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ht(this.app))return Promise.reject(Pt(this));const t=e?Ee(e):null;return t&&H(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ht(this.app)?Promise.reject(Pt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ht(this.app)?Promise.reject(Pt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(St(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await uI(this),t=new dI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qs("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await oI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&St(e)||this._popupRedirectResolver;H(t,this,"argument-error"),this.redirectPersistenceManager=await mr.create(this,[St(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&$v(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ut(n){return Ee(n)}class Uh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Py(t=>this.observer=t)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mI(n){xo=n}function fm(n){return xo.loadJS(n)}function pI(){return xo.recaptchaEnterpriseScript}function gI(){return xo.gapiScript}function _I(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const yI="recaptcha-enterprise",vI="NO_RECAPTCHA";class II{constructor(e){this.type=yI,this.auth=Ut(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Xv(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const h=new Yv(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;xh(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(vI)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!t&&xh(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=pI();l.length!==0&&(l+=a),fm(l).then(()=>{s(a,i,o)}).catch(h=>{o(h)})}}).catch(a=>{o(a)})})}}async function Bh(n,e,t,r=!1){const s=new II(n);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function co(n,e,t,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Bh(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Bh(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(n,e){const t=$c(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(xn(i,e??{}))return s;ct(s,"already-initialized")}return t.initialize({options:e})}function EI(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(St);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function TI(n,e,t){const r=Ut(n);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=mm(e),{host:o,port:a}=bI(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),AI()}function mm(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function bI(n){const e=mm(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:jh(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:jh(o)}}}function jh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function AI(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return bt("not implemented")}_getIdTokenResponse(e){return bt("not implemented")}_linkToIdToken(e,t){return bt("not implemented")}_getReauthenticationResolver(e){return bt("not implemented")}}async function SI(n,e){return Ft(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RI(n,e){return Gs(n,"POST","/v1/accounts:signInWithPassword",Lt(n,e))}async function pm(n,e){return Ft(n,"POST","/v1/accounts:sendOobCode",Lt(n,e))}async function PI(n,e){return pm(n,e)}async function CI(n,e){return pm(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kI(n,e){return Gs(n,"POST","/v1/accounts:signInWithEmailLink",Lt(n,e))}async function DI(n,e){return Gs(n,"POST","/v1/accounts:signInWithEmailLink",Lt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs extends Qc{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Rs(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Rs(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return co(e,t,"signInWithPassword",RI);case"emailLink":return kI(e,{email:this._email,oobCode:this._password});default:ct(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return co(e,r,"signUpPassword",SI);case"emailLink":return DI(e,{idToken:t,email:this._email,oobCode:this._password});default:ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pr(n,e){return Gs(n,"POST","/v1/accounts:signInWithIdp",Lt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI="http://localhost";class Mn extends Qc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Mn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ct("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=qc(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Mn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return pr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,pr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,pr(e,t)}buildRequest(){const e={requestUri:VI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=zs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NI(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function xI(n){const e=as(cs(n)).link,t=e?as(cs(e)).deep_link_id:null,r=as(cs(n)).deep_link_id;return(r?as(cs(r)).link:null)||r||t||e||n}class Jc{constructor(e){var t,r,s,i,o,a;const l=as(cs(e)),h=(t=l.apiKey)!==null&&t!==void 0?t:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,m=NI((s=l.mode)!==null&&s!==void 0?s:null);H(h&&f&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=xI(e);try{return new Jc(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(){this.providerId=Or.PROVIDER_ID}static credential(e,t){return Rs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Jc.parseLink(t);return H(r,"argument-error"),Rs._fromEmailAndCode(e,r.code,r.tenantId)}}Or.PROVIDER_ID="password";Or.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Or.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws extends Yc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends Ws{constructor(){super("facebook.com")}static credential(e){return Mn._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends Ws{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Mn._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Tt.credential(t,r)}catch{return null}}}Tt.GOOGLE_SIGN_IN_METHOD="google.com";Tt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends Ws{constructor(){super("github.com")}static credential(e){return Mn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jt.credential(e.oauthAccessToken)}catch{return null}}}Jt.GITHUB_SIGN_IN_METHOD="github.com";Jt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends Ws{constructor(){super("twitter.com")}static credential(e,t){return Mn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Yt.credential(t,r)}catch{return null}}}Yt.TWITTER_SIGN_IN_METHOD="twitter.com";Yt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OI(n,e){return Gs(n,"POST","/v1/accounts:signUp",Lt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await At._fromIdTokenResponse(e,r,s),o=$h(r);return new Ln({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=$h(r);return new Ln({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function $h(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo extends Mt{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,lo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new lo(e,t,r,s)}}function gm(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?lo._fromErrorAndOperation(n,i,e,r):i})}async function MI(n,e,t=!1){const r=await Ss(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ln._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LI(n,e,t=!1){const{auth:r}=n;if(ht(r.app))return Promise.reject(Pt(r));const s="reauthenticate";try{const i=await Ss(n,gm(r,s,e,n),t);H(i.idToken,r,"internal-error");const o=Wc(i.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(n.uid===a,r,"user-mismatch"),Ln._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ct(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _m(n,e,t=!1){if(ht(n.app))return Promise.reject(Pt(n));const r="signIn",s=await gm(n,r,e),i=await Ln._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function FI(n,e){return _m(Ut(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ym(n){const e=Ut(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function UI(n,e,t){const r=Ut(n);await co(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",CI)}async function BI(n,e,t){if(ht(n.app))return Promise.reject(Pt(n));const r=Ut(n),o=await co(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",OI).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&ym(n),l}),a=await Ln._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function jI(n,e,t){return ht(n.app)?Promise.reject(Pt(n)):FI(Ee(n),Or.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ym(n),r})}async function qh(n,e){const t=Ee(n),s={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()},{email:i}=await PI(t.auth,s);i!==n.email&&await n.reload()}function $I(n,e,t,r){return Ee(n).onIdTokenChanged(e,t,r)}function qI(n,e,t){return Ee(n).beforeAuthStateChanged(e,t)}function zI(n,e,t,r){return Ee(n).onAuthStateChanged(e,t,r)}function KI(n){return Ee(n).signOut()}const uo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(uo,"1"),this.storage.removeItem(uo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI=1e3,WI=10;class Im extends vm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=hm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);cI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,WI):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},GI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Im.type="LOCAL";const HI=Im;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm extends vm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}wm.type="SESSION";const Em=wm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QI(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Oo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async h=>h(t.origin,i)),l=await QI(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Oo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const h=Xc("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const _=m;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(_.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){return window}function YI(n){pt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(){return typeof pt().WorkerGlobalScope<"u"&&typeof pt().importScripts=="function"}async function XI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ZI(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function ew(){return Tm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm="firebaseLocalStorageDb",tw=1,ho="firebaseLocalStorage",Am="fbase_key";class Hs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Mo(n,e){return n.transaction([ho],e?"readwrite":"readonly").objectStore(ho)}function nw(){const n=indexedDB.deleteDatabase(bm);return new Hs(n).toPromise()}function ic(){const n=indexedDB.open(bm,tw);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ho,{keyPath:Am})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ho)?e(r):(r.close(),await nw(),e(await ic()))})})}async function zh(n,e,t){const r=Mo(n,!0).put({[Am]:e,value:t});return new Hs(r).toPromise()}async function rw(n,e){const t=Mo(n,!1).get(e),r=await new Hs(t).toPromise();return r===void 0?null:r.value}function Kh(n,e){const t=Mo(n,!0).delete(e);return new Hs(t).toPromise()}const sw=800,iw=3;class Sm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ic(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>iw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Tm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Oo._getInstance(ew()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await XI(),!this.activeServiceWorker)return;this.sender=new JI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ZI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ic();return await zh(e,uo,"1"),await Kh(e,uo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>zh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>rw(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Kh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Mo(s,!1).getAll();return new Hs(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sm.type="LOCAL";const ow=Sm;new Ks(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(n,e){return e?St(e):(H(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc extends Qc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return pr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return pr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function aw(n){return _m(n.auth,new Zc(n),n.bypassAuthState)}function cw(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),LI(t,new Zc(n),n.bypassAuthState)}async function lw(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),MI(t,new Zc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return aw;case"linkViaPopup":case"linkViaRedirect":return lw;case"reauthViaPopup":case"reauthViaRedirect":return cw;default:ct(this.auth,"internal-error")}}resolve(e){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw=new Ks(2e3,1e4);async function hw(n,e,t){if(ht(n.app))return Promise.reject(dt(n,"operation-not-supported-in-this-environment"));const r=Ut(n);qv(n,e,Yc);const s=Rm(r,t);return new Dn(r,"signInViaPopup",e,s).executeNotNull()}class Dn extends Pm{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Dn.currentPopupAction&&Dn.currentPopupAction.cancel(),Dn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Vt(this.filter.length===1,"Popup operations only handle one event");const e=Xc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uw.get())};e()}}Dn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw="pendingRedirect",$i=new Map;class fw extends Pm{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=$i.get(this.auth._key());if(!e){try{const r=await mw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}$i.set(this.auth._key(),e)}return this.bypassAuthState||$i.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mw(n,e){const t=_w(e),r=gw(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function pw(n,e){$i.set(n._key(),e)}function gw(n){return St(n._redirectPersistence)}function _w(n){return ji(dw,n.config.apiKey,n.name)}async function yw(n,e,t=!1){if(ht(n.app))return Promise.reject(Pt(n));const r=Ut(n),s=Rm(r,e),o=await new fw(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw=10*60*1e3;class Iw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ww(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Cm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(dt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gh(e))}saveEventToCache(e){this.cachedEventUids.add(Gh(e)),this.lastProcessedEventTime=Date.now()}}function Gh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Cm({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ww(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cm(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ew(n,e={}){return Ft(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bw=/^https?/;async function Aw(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Ew(n);for(const t of e)try{if(Sw(t))return}catch{}ct(n,"unauthorized-domain")}function Sw(n){const e=rc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!bw.test(t))return!1;if(Tw.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw=new Ks(3e4,6e4);function Wh(){const n=pt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Pw(n){return new Promise((e,t)=>{var r,s,i;function o(){Wh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wh(),t(dt(n,"network-request-failed"))},timeout:Rw.get()})}if(!((s=(r=pt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=pt().gapi)===null||i===void 0)&&i.load)o();else{const a=_I("iframefcb");return pt()[a]=()=>{gapi.load?o():t(dt(n,"network-request-failed"))},fm(`${gI()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw qi=null,e})}let qi=null;function Cw(n){return qi=qi||Pw(n),qi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw=new Ks(5e3,15e3),Dw="__/auth/iframe",Vw="emulator/auth/iframe",Nw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ow(n){const e=n.config;H(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Gc(e,Vw):`https://${n.config.authDomain}/${Dw}`,r={apiKey:e.apiKey,appName:n.name,v:xr},s=xw.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${zs(r).slice(1)}`}async function Mw(n){const e=await Cw(n),t=pt().gapi;return H(t,n,"internal-error"),e.open({where:document.body,url:Ow(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Nw,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=dt(n,"network-request-failed"),a=pt().setTimeout(()=>{i(o)},kw.get());function l(){pt().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Fw=500,Uw=600,Bw="_blank",jw="http://localhost";class Hh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $w(n,e,t,r=Fw,s=Uw){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Lw),{width:r.toString(),height:s.toString(),top:i,left:o}),h=Pe().toLowerCase();t&&(a=om(h)?Bw:t),sm(h)&&(e=e||jw,l.scrollbars="yes");const f=Object.entries(l).reduce((_,[y,b])=>`${_}${y}=${b},`,"");if(aI(h)&&a!=="_self")return qw(e||"",a),new Hh(null);const m=window.open(e||"",a,f);H(m,n,"popup-blocked");try{m.focus()}catch{}return new Hh(m)}function qw(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw="__/auth/handler",Kw="emulator/auth/handler",Gw=encodeURIComponent("fac");async function Qh(n,e,t,r,s,i){H(n.config.authDomain,n,"auth-domain-config-required"),H(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:xr,eventId:s};if(e instanceof Yc){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Ry(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Ws){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await n._getAppCheckToken(),h=l?`#${Gw}=${encodeURIComponent(l)}`:"";return`${Ww(n)}?${zs(a).slice(1)}${h}`}function Ww({config:n}){return n.emulator?Gc(n,Kw):`https://${n.authDomain}/${zw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa="webStorageSupport";class Hw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Em,this._completeRedirectFn=yw,this._overrideRedirectResult=pw}async _openPopup(e,t,r,s){var i;Vt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Qh(e,t,r,rc(),s);return $w(e,o,Xc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Qh(e,t,r,rc(),s);return YI(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Vt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Mw(e),r=new Iw(e);return t.register("authEvent",s=>(H(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Oa,{type:Oa},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Oa];o!==void 0&&t(!!o),ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Aw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return hm()||im()||Hc()}}const Qw=Hw;var Jh="@firebase/auth",Yh="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Xw(n){yr(new On("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dm(n)},h=new fI(r,s,i,l);return EI(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),yr(new On("auth-internal",e=>{const t=Ut(e.getProvider("auth").getImmediate());return(r=>new Jw(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),rn(Jh,Yh,Yw(n)),rn(Jh,Yh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw=5*60,eE=$f("authIdTokenMaxAge")||Zw;let Xh=null;const tE=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>eE)return;const s=t==null?void 0:t.token;Xh!==s&&(Xh=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function nE(n=Cv()){const e=$c(n,"auth");if(e.isInitialized())return e.getImmediate();const t=wI(n,{popupRedirectResolver:Qw,persistence:[ow,HI,Em]}),r=$f("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=tE(i.toString());qI(t,o,()=>o(t.currentUser)),$I(t,a=>o(a))}}const s=py("auth");return s&&TI(t,`http://${s}`),t}function rE(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}mI({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=dt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",rE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Xw("Browser");var Zh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vn,km;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,v){function I(){}I.prototype=v.prototype,T.D=v.prototype,T.prototype=new I,T.prototype.constructor=T,T.C=function(E,A,R){for(var w=Array(arguments.length-2),lt=2;lt<arguments.length;lt++)w[lt-2]=arguments[lt];return v.prototype[A].apply(E,w)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,v,I){I||(I=0);var E=Array(16);if(typeof v=="string")for(var A=0;16>A;++A)E[A]=v.charCodeAt(I++)|v.charCodeAt(I++)<<8|v.charCodeAt(I++)<<16|v.charCodeAt(I++)<<24;else for(A=0;16>A;++A)E[A]=v[I++]|v[I++]<<8|v[I++]<<16|v[I++]<<24;v=T.g[0],I=T.g[1],A=T.g[2];var R=T.g[3],w=v+(R^I&(A^R))+E[0]+3614090360&4294967295;v=I+(w<<7&4294967295|w>>>25),w=R+(A^v&(I^A))+E[1]+3905402710&4294967295,R=v+(w<<12&4294967295|w>>>20),w=A+(I^R&(v^I))+E[2]+606105819&4294967295,A=R+(w<<17&4294967295|w>>>15),w=I+(v^A&(R^v))+E[3]+3250441966&4294967295,I=A+(w<<22&4294967295|w>>>10),w=v+(R^I&(A^R))+E[4]+4118548399&4294967295,v=I+(w<<7&4294967295|w>>>25),w=R+(A^v&(I^A))+E[5]+1200080426&4294967295,R=v+(w<<12&4294967295|w>>>20),w=A+(I^R&(v^I))+E[6]+2821735955&4294967295,A=R+(w<<17&4294967295|w>>>15),w=I+(v^A&(R^v))+E[7]+4249261313&4294967295,I=A+(w<<22&4294967295|w>>>10),w=v+(R^I&(A^R))+E[8]+1770035416&4294967295,v=I+(w<<7&4294967295|w>>>25),w=R+(A^v&(I^A))+E[9]+2336552879&4294967295,R=v+(w<<12&4294967295|w>>>20),w=A+(I^R&(v^I))+E[10]+4294925233&4294967295,A=R+(w<<17&4294967295|w>>>15),w=I+(v^A&(R^v))+E[11]+2304563134&4294967295,I=A+(w<<22&4294967295|w>>>10),w=v+(R^I&(A^R))+E[12]+1804603682&4294967295,v=I+(w<<7&4294967295|w>>>25),w=R+(A^v&(I^A))+E[13]+4254626195&4294967295,R=v+(w<<12&4294967295|w>>>20),w=A+(I^R&(v^I))+E[14]+2792965006&4294967295,A=R+(w<<17&4294967295|w>>>15),w=I+(v^A&(R^v))+E[15]+1236535329&4294967295,I=A+(w<<22&4294967295|w>>>10),w=v+(A^R&(I^A))+E[1]+4129170786&4294967295,v=I+(w<<5&4294967295|w>>>27),w=R+(I^A&(v^I))+E[6]+3225465664&4294967295,R=v+(w<<9&4294967295|w>>>23),w=A+(v^I&(R^v))+E[11]+643717713&4294967295,A=R+(w<<14&4294967295|w>>>18),w=I+(R^v&(A^R))+E[0]+3921069994&4294967295,I=A+(w<<20&4294967295|w>>>12),w=v+(A^R&(I^A))+E[5]+3593408605&4294967295,v=I+(w<<5&4294967295|w>>>27),w=R+(I^A&(v^I))+E[10]+38016083&4294967295,R=v+(w<<9&4294967295|w>>>23),w=A+(v^I&(R^v))+E[15]+3634488961&4294967295,A=R+(w<<14&4294967295|w>>>18),w=I+(R^v&(A^R))+E[4]+3889429448&4294967295,I=A+(w<<20&4294967295|w>>>12),w=v+(A^R&(I^A))+E[9]+568446438&4294967295,v=I+(w<<5&4294967295|w>>>27),w=R+(I^A&(v^I))+E[14]+3275163606&4294967295,R=v+(w<<9&4294967295|w>>>23),w=A+(v^I&(R^v))+E[3]+4107603335&4294967295,A=R+(w<<14&4294967295|w>>>18),w=I+(R^v&(A^R))+E[8]+1163531501&4294967295,I=A+(w<<20&4294967295|w>>>12),w=v+(A^R&(I^A))+E[13]+2850285829&4294967295,v=I+(w<<5&4294967295|w>>>27),w=R+(I^A&(v^I))+E[2]+4243563512&4294967295,R=v+(w<<9&4294967295|w>>>23),w=A+(v^I&(R^v))+E[7]+1735328473&4294967295,A=R+(w<<14&4294967295|w>>>18),w=I+(R^v&(A^R))+E[12]+2368359562&4294967295,I=A+(w<<20&4294967295|w>>>12),w=v+(I^A^R)+E[5]+4294588738&4294967295,v=I+(w<<4&4294967295|w>>>28),w=R+(v^I^A)+E[8]+2272392833&4294967295,R=v+(w<<11&4294967295|w>>>21),w=A+(R^v^I)+E[11]+1839030562&4294967295,A=R+(w<<16&4294967295|w>>>16),w=I+(A^R^v)+E[14]+4259657740&4294967295,I=A+(w<<23&4294967295|w>>>9),w=v+(I^A^R)+E[1]+2763975236&4294967295,v=I+(w<<4&4294967295|w>>>28),w=R+(v^I^A)+E[4]+1272893353&4294967295,R=v+(w<<11&4294967295|w>>>21),w=A+(R^v^I)+E[7]+4139469664&4294967295,A=R+(w<<16&4294967295|w>>>16),w=I+(A^R^v)+E[10]+3200236656&4294967295,I=A+(w<<23&4294967295|w>>>9),w=v+(I^A^R)+E[13]+681279174&4294967295,v=I+(w<<4&4294967295|w>>>28),w=R+(v^I^A)+E[0]+3936430074&4294967295,R=v+(w<<11&4294967295|w>>>21),w=A+(R^v^I)+E[3]+3572445317&4294967295,A=R+(w<<16&4294967295|w>>>16),w=I+(A^R^v)+E[6]+76029189&4294967295,I=A+(w<<23&4294967295|w>>>9),w=v+(I^A^R)+E[9]+3654602809&4294967295,v=I+(w<<4&4294967295|w>>>28),w=R+(v^I^A)+E[12]+3873151461&4294967295,R=v+(w<<11&4294967295|w>>>21),w=A+(R^v^I)+E[15]+530742520&4294967295,A=R+(w<<16&4294967295|w>>>16),w=I+(A^R^v)+E[2]+3299628645&4294967295,I=A+(w<<23&4294967295|w>>>9),w=v+(A^(I|~R))+E[0]+4096336452&4294967295,v=I+(w<<6&4294967295|w>>>26),w=R+(I^(v|~A))+E[7]+1126891415&4294967295,R=v+(w<<10&4294967295|w>>>22),w=A+(v^(R|~I))+E[14]+2878612391&4294967295,A=R+(w<<15&4294967295|w>>>17),w=I+(R^(A|~v))+E[5]+4237533241&4294967295,I=A+(w<<21&4294967295|w>>>11),w=v+(A^(I|~R))+E[12]+1700485571&4294967295,v=I+(w<<6&4294967295|w>>>26),w=R+(I^(v|~A))+E[3]+2399980690&4294967295,R=v+(w<<10&4294967295|w>>>22),w=A+(v^(R|~I))+E[10]+4293915773&4294967295,A=R+(w<<15&4294967295|w>>>17),w=I+(R^(A|~v))+E[1]+2240044497&4294967295,I=A+(w<<21&4294967295|w>>>11),w=v+(A^(I|~R))+E[8]+1873313359&4294967295,v=I+(w<<6&4294967295|w>>>26),w=R+(I^(v|~A))+E[15]+4264355552&4294967295,R=v+(w<<10&4294967295|w>>>22),w=A+(v^(R|~I))+E[6]+2734768916&4294967295,A=R+(w<<15&4294967295|w>>>17),w=I+(R^(A|~v))+E[13]+1309151649&4294967295,I=A+(w<<21&4294967295|w>>>11),w=v+(A^(I|~R))+E[4]+4149444226&4294967295,v=I+(w<<6&4294967295|w>>>26),w=R+(I^(v|~A))+E[11]+3174756917&4294967295,R=v+(w<<10&4294967295|w>>>22),w=A+(v^(R|~I))+E[2]+718787259&4294967295,A=R+(w<<15&4294967295|w>>>17),w=I+(R^(A|~v))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+v&4294967295,T.g[1]=T.g[1]+(A+(w<<21&4294967295|w>>>11))&4294967295,T.g[2]=T.g[2]+A&4294967295,T.g[3]=T.g[3]+R&4294967295}r.prototype.u=function(T,v){v===void 0&&(v=T.length);for(var I=v-this.blockSize,E=this.B,A=this.h,R=0;R<v;){if(A==0)for(;R<=I;)s(this,T,R),R+=this.blockSize;if(typeof T=="string"){for(;R<v;)if(E[A++]=T.charCodeAt(R++),A==this.blockSize){s(this,E),A=0;break}}else for(;R<v;)if(E[A++]=T[R++],A==this.blockSize){s(this,E),A=0;break}}this.h=A,this.o+=v},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var v=1;v<T.length-8;++v)T[v]=0;var I=8*this.o;for(v=T.length-8;v<T.length;++v)T[v]=I&255,I/=256;for(this.u(T),T=Array(16),v=I=0;4>v;++v)for(var E=0;32>E;E+=8)T[I++]=this.g[v]>>>E&255;return T};function i(T,v){var I=a;return Object.prototype.hasOwnProperty.call(I,T)?I[T]:I[T]=v(T)}function o(T,v){this.h=v;for(var I=[],E=!0,A=T.length-1;0<=A;A--){var R=T[A]|0;E&&R==v||(I[A]=R,E=!1)}this.g=I}var a={};function l(T){return-128<=T&&128>T?i(T,function(v){return new o([v|0],0>v?-1:0)}):new o([T|0],0>T?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return m;if(0>T)return C(h(-T));for(var v=[],I=1,E=0;T>=I;E++)v[E]=T/I|0,I*=4294967296;return new o(v,0)}function f(T,v){if(T.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(T.charAt(0)=="-")return C(f(T.substring(1),v));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=h(Math.pow(v,8)),E=m,A=0;A<T.length;A+=8){var R=Math.min(8,T.length-A),w=parseInt(T.substring(A,A+R),v);8>R?(R=h(Math.pow(v,R)),E=E.j(R).add(h(w))):(E=E.j(I),E=E.add(h(w)))}return E}var m=l(0),_=l(1),y=l(16777216);n=o.prototype,n.m=function(){if(k(this))return-C(this).m();for(var T=0,v=1,I=0;I<this.g.length;I++){var E=this.i(I);T+=(0<=E?E:4294967296+E)*v,v*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(b(this))return"0";if(k(this))return"-"+C(this).toString(T);for(var v=h(Math.pow(T,6)),I=this,E="";;){var A=M(I,v).g;I=N(I,A.j(v));var R=((0<I.g.length?I.g[0]:I.h)>>>0).toString(T);if(I=A,b(I))return R+E;for(;6>R.length;)R="0"+R;E=R+E}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function b(T){if(T.h!=0)return!1;for(var v=0;v<T.g.length;v++)if(T.g[v]!=0)return!1;return!0}function k(T){return T.h==-1}n.l=function(T){return T=N(this,T),k(T)?-1:b(T)?0:1};function C(T){for(var v=T.g.length,I=[],E=0;E<v;E++)I[E]=~T.g[E];return new o(I,~T.h).add(_)}n.abs=function(){return k(this)?C(this):this},n.add=function(T){for(var v=Math.max(this.g.length,T.g.length),I=[],E=0,A=0;A<=v;A++){var R=E+(this.i(A)&65535)+(T.i(A)&65535),w=(R>>>16)+(this.i(A)>>>16)+(T.i(A)>>>16);E=w>>>16,R&=65535,w&=65535,I[A]=w<<16|R}return new o(I,I[I.length-1]&-2147483648?-1:0)};function N(T,v){return T.add(C(v))}n.j=function(T){if(b(this)||b(T))return m;if(k(this))return k(T)?C(this).j(C(T)):C(C(this).j(T));if(k(T))return C(this.j(C(T)));if(0>this.l(y)&&0>T.l(y))return h(this.m()*T.m());for(var v=this.g.length+T.g.length,I=[],E=0;E<2*v;E++)I[E]=0;for(E=0;E<this.g.length;E++)for(var A=0;A<T.g.length;A++){var R=this.i(E)>>>16,w=this.i(E)&65535,lt=T.i(A)>>>16,Q=T.i(A)&65535;I[2*E+2*A]+=w*Q,O(I,2*E+2*A),I[2*E+2*A+1]+=R*Q,O(I,2*E+2*A+1),I[2*E+2*A+1]+=w*lt,O(I,2*E+2*A+1),I[2*E+2*A+2]+=R*lt,O(I,2*E+2*A+2)}for(E=0;E<v;E++)I[E]=I[2*E+1]<<16|I[2*E];for(E=v;E<2*v;E++)I[E]=0;return new o(I,0)};function O(T,v){for(;(T[v]&65535)!=T[v];)T[v+1]+=T[v]>>>16,T[v]&=65535,v++}function U(T,v){this.g=T,this.h=v}function M(T,v){if(b(v))throw Error("division by zero");if(b(T))return new U(m,m);if(k(T))return v=M(C(T),v),new U(C(v.g),C(v.h));if(k(v))return v=M(T,C(v)),new U(C(v.g),v.h);if(30<T.g.length){if(k(T)||k(v))throw Error("slowDivide_ only works with positive integers.");for(var I=_,E=v;0>=E.l(T);)I=q(I),E=q(E);var A=$(I,1),R=$(E,1);for(E=$(E,2),I=$(I,2);!b(E);){var w=R.add(E);0>=w.l(T)&&(A=A.add(I),R=w),E=$(E,1),I=$(I,1)}return v=N(T,A.j(v)),new U(A,v)}for(A=m;0<=T.l(v);){for(I=Math.max(1,Math.floor(T.m()/v.m())),E=Math.ceil(Math.log(I)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),R=h(I),w=R.j(v);k(w)||0<w.l(T);)I-=E,R=h(I),w=R.j(v);b(R)&&(R=_),A=A.add(R),T=N(T,w)}return new U(A,T)}n.A=function(T){return M(this,T).h},n.and=function(T){for(var v=Math.max(this.g.length,T.g.length),I=[],E=0;E<v;E++)I[E]=this.i(E)&T.i(E);return new o(I,this.h&T.h)},n.or=function(T){for(var v=Math.max(this.g.length,T.g.length),I=[],E=0;E<v;E++)I[E]=this.i(E)|T.i(E);return new o(I,this.h|T.h)},n.xor=function(T){for(var v=Math.max(this.g.length,T.g.length),I=[],E=0;E<v;E++)I[E]=this.i(E)^T.i(E);return new o(I,this.h^T.h)};function q(T){for(var v=T.g.length+1,I=[],E=0;E<v;E++)I[E]=T.i(E)<<1|T.i(E-1)>>>31;return new o(I,T.h)}function $(T,v){var I=v>>5;v%=32;for(var E=T.g.length-I,A=[],R=0;R<E;R++)A[R]=0<v?T.i(R+I)>>>v|T.i(R+I+1)<<32-v:T.i(R+I);return new o(A,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,km=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Vn=o}).apply(typeof Zh<"u"?Zh:typeof self<"u"?self:typeof window<"u"?window:{});var Ri=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dm,ls,Vm,zi,oc,Nm,xm,Om;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,d,p){return c==Array.prototype||c==Object.prototype||(c[d]=p.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ri=="object"&&Ri];for(var d=0;d<c.length;++d){var p=c[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=t(this);function s(c,d){if(d)e:{var p=r;c=c.split(".");for(var g=0;g<c.length-1;g++){var S=c[g];if(!(S in p))break e;p=p[S]}c=c[c.length-1],g=p[c],d=d(g),d!=g&&d!=null&&e(p,c,{configurable:!0,writable:!0,value:d})}}function i(c,d){c instanceof String&&(c+="");var p=0,g=!1,S={next:function(){if(!g&&p<c.length){var D=p++;return{value:d(D,c[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(c){return c||function(){return i(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(c){var d=typeof c;return d=d!="object"?d:c?Array.isArray(c)?"array":d:"null",d=="array"||d=="object"&&typeof c.length=="number"}function h(c){var d=typeof c;return d=="object"&&c!=null||d=="function"}function f(c,d,p){return c.call.apply(c.bind,arguments)}function m(c,d,p){if(!c)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,g),c.apply(d,S)}}return function(){return c.apply(d,arguments)}}function _(c,d,p){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,_.apply(null,arguments)}function y(c,d){var p=Array.prototype.slice.call(arguments,1);return function(){var g=p.slice();return g.push.apply(g,arguments),c.apply(this,g)}}function b(c,d){function p(){}p.prototype=d.prototype,c.aa=d.prototype,c.prototype=new p,c.prototype.constructor=c,c.Qb=function(g,S,D){for(var F=Array(arguments.length-2),le=2;le<arguments.length;le++)F[le-2]=arguments[le];return d.prototype[S].apply(g,F)}}function k(c){const d=c.length;if(0<d){const p=Array(d);for(let g=0;g<d;g++)p[g]=c[g];return p}return[]}function C(c,d){for(let p=1;p<arguments.length;p++){const g=arguments[p];if(l(g)){const S=c.length||0,D=g.length||0;c.length=S+D;for(let F=0;F<D;F++)c[S+F]=g[F]}else c.push(g)}}class N{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function O(c){return/^[\s\xa0]*$/.test(c)}function U(){var c=a.navigator;return c&&(c=c.userAgent)?c:""}function M(c){return M[" "](c),c}M[" "]=function(){};var q=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function $(c,d,p){for(const g in c)d.call(p,c[g],g,c)}function T(c,d){for(const p in c)d.call(void 0,c[p],p,c)}function v(c){const d={};for(const p in c)d[p]=c[p];return d}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(c,d){let p,g;for(let S=1;S<arguments.length;S++){g=arguments[S];for(p in g)c[p]=g[p];for(let D=0;D<I.length;D++)p=I[D],Object.prototype.hasOwnProperty.call(g,p)&&(c[p]=g[p])}}function A(c){var d=1;c=c.split(":");const p=[];for(;0<d&&c.length;)p.push(c.shift()),d--;return c.length&&p.push(c.join(":")),p}function R(c){a.setTimeout(()=>{throw c},0)}function w(){var c=sa;let d=null;return c.g&&(d=c.g,c.g=c.g.next,c.g||(c.h=null),d.next=null),d}class lt{constructor(){this.h=this.g=null}add(d,p){const g=Q.get();g.set(d,p),this.h?this.h.next=g:this.g=g,this.h=g}}var Q=new N(()=>new Le,c=>c.reset());class Le{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let jt,It=!1,sa=new lt,hu=()=>{const c=a.Promise.resolve(void 0);jt=()=>{c.then(g_)}};var g_=()=>{for(var c;c=w();){try{c.h.call(c.g)}catch(p){R(p)}var d=Q;d.j(c),100>d.h&&(d.h++,c.next=d.g,d.g=c)}It=!1};function $t(){this.s=this.s,this.C=this.C}$t.prototype.s=!1,$t.prototype.ma=function(){this.s||(this.s=!0,this.N())},$t.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Fe(c,d){this.type=c,this.g=this.target=d,this.defaultPrevented=!1}Fe.prototype.h=function(){this.defaultPrevented=!0};var __=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,d=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const p=()=>{};a.addEventListener("test",p,d),a.removeEventListener("test",p,d)}catch{}return c}();function jr(c,d){if(Fe.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var p=this.type=c.type,g=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=d,d=c.relatedTarget){if(q){e:{try{M(d.nodeName);var S=!0;break e}catch{}S=!1}S||(d=null)}}else p=="mouseover"?d=c.fromElement:p=="mouseout"&&(d=c.toElement);this.relatedTarget=d,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:y_[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&jr.aa.h.call(this)}}b(jr,Fe);var y_={2:"touch",3:"pen",4:"mouse"};jr.prototype.h=function(){jr.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var oi="closure_listenable_"+(1e6*Math.random()|0),v_=0;function I_(c,d,p,g,S){this.listener=c,this.proxy=null,this.src=d,this.type=p,this.capture=!!g,this.ha=S,this.key=++v_,this.da=this.fa=!1}function ai(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function ci(c){this.src=c,this.g={},this.h=0}ci.prototype.add=function(c,d,p,g,S){var D=c.toString();c=this.g[D],c||(c=this.g[D]=[],this.h++);var F=oa(c,d,g,S);return-1<F?(d=c[F],p||(d.fa=!1)):(d=new I_(d,this.src,D,!!g,S),d.fa=p,c.push(d)),d};function ia(c,d){var p=d.type;if(p in c.g){var g=c.g[p],S=Array.prototype.indexOf.call(g,d,void 0),D;(D=0<=S)&&Array.prototype.splice.call(g,S,1),D&&(ai(d),c.g[p].length==0&&(delete c.g[p],c.h--))}}function oa(c,d,p,g){for(var S=0;S<c.length;++S){var D=c[S];if(!D.da&&D.listener==d&&D.capture==!!p&&D.ha==g)return S}return-1}var aa="closure_lm_"+(1e6*Math.random()|0),ca={};function du(c,d,p,g,S){if(Array.isArray(d)){for(var D=0;D<d.length;D++)du(c,d[D],p,g,S);return null}return p=pu(p),c&&c[oi]?c.K(d,p,h(g)?!!g.capture:!1,S):w_(c,d,p,!1,g,S)}function w_(c,d,p,g,S,D){if(!d)throw Error("Invalid event type");var F=h(S)?!!S.capture:!!S,le=ua(c);if(le||(c[aa]=le=new ci(c)),p=le.add(d,p,g,F,D),p.proxy)return p;if(g=E_(),p.proxy=g,g.src=c,g.listener=p,c.addEventListener)__||(S=F),S===void 0&&(S=!1),c.addEventListener(d.toString(),g,S);else if(c.attachEvent)c.attachEvent(mu(d.toString()),g);else if(c.addListener&&c.removeListener)c.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return p}function E_(){function c(p){return d.call(c.src,c.listener,p)}const d=T_;return c}function fu(c,d,p,g,S){if(Array.isArray(d))for(var D=0;D<d.length;D++)fu(c,d[D],p,g,S);else g=h(g)?!!g.capture:!!g,p=pu(p),c&&c[oi]?(c=c.i,d=String(d).toString(),d in c.g&&(D=c.g[d],p=oa(D,p,g,S),-1<p&&(ai(D[p]),Array.prototype.splice.call(D,p,1),D.length==0&&(delete c.g[d],c.h--)))):c&&(c=ua(c))&&(d=c.g[d.toString()],c=-1,d&&(c=oa(d,p,g,S)),(p=-1<c?d[c]:null)&&la(p))}function la(c){if(typeof c!="number"&&c&&!c.da){var d=c.src;if(d&&d[oi])ia(d.i,c);else{var p=c.type,g=c.proxy;d.removeEventListener?d.removeEventListener(p,g,c.capture):d.detachEvent?d.detachEvent(mu(p),g):d.addListener&&d.removeListener&&d.removeListener(g),(p=ua(d))?(ia(p,c),p.h==0&&(p.src=null,d[aa]=null)):ai(c)}}}function mu(c){return c in ca?ca[c]:ca[c]="on"+c}function T_(c,d){if(c.da)c=!0;else{d=new jr(d,this);var p=c.listener,g=c.ha||c.src;c.fa&&la(c),c=p.call(g,d)}return c}function ua(c){return c=c[aa],c instanceof ci?c:null}var ha="__closure_events_fn_"+(1e9*Math.random()>>>0);function pu(c){return typeof c=="function"?c:(c[ha]||(c[ha]=function(d){return c.handleEvent(d)}),c[ha])}function Ue(){$t.call(this),this.i=new ci(this),this.M=this,this.F=null}b(Ue,$t),Ue.prototype[oi]=!0,Ue.prototype.removeEventListener=function(c,d,p,g){fu(this,c,d,p,g)};function Ge(c,d){var p,g=c.F;if(g)for(p=[];g;g=g.F)p.push(g);if(c=c.M,g=d.type||d,typeof d=="string")d=new Fe(d,c);else if(d instanceof Fe)d.target=d.target||c;else{var S=d;d=new Fe(g,c),E(d,S)}if(S=!0,p)for(var D=p.length-1;0<=D;D--){var F=d.g=p[D];S=li(F,g,!0,d)&&S}if(F=d.g=c,S=li(F,g,!0,d)&&S,S=li(F,g,!1,d)&&S,p)for(D=0;D<p.length;D++)F=d.g=p[D],S=li(F,g,!1,d)&&S}Ue.prototype.N=function(){if(Ue.aa.N.call(this),this.i){var c=this.i,d;for(d in c.g){for(var p=c.g[d],g=0;g<p.length;g++)ai(p[g]);delete c.g[d],c.h--}}this.F=null},Ue.prototype.K=function(c,d,p,g){return this.i.add(String(c),d,!1,p,g)},Ue.prototype.L=function(c,d,p,g){return this.i.add(String(c),d,!0,p,g)};function li(c,d,p,g){if(d=c.i.g[String(d)],!d)return!0;d=d.concat();for(var S=!0,D=0;D<d.length;++D){var F=d[D];if(F&&!F.da&&F.capture==p){var le=F.listener,Ve=F.ha||F.src;F.fa&&ia(c.i,F),S=le.call(Ve,g)!==!1&&S}}return S&&!g.defaultPrevented}function gu(c,d,p){if(typeof c=="function")p&&(c=_(c,p));else if(c&&typeof c.handleEvent=="function")c=_(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(c,d||0)}function _u(c){c.g=gu(()=>{c.g=null,c.i&&(c.i=!1,_u(c))},c.l);const d=c.h;c.h=null,c.m.apply(null,d)}class b_ extends $t{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:_u(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $r(c){$t.call(this),this.h=c,this.g={}}b($r,$t);var yu=[];function vu(c){$(c.g,function(d,p){this.g.hasOwnProperty(p)&&la(d)},c),c.g={}}$r.prototype.N=function(){$r.aa.N.call(this),vu(this)},$r.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var da=a.JSON.stringify,A_=a.JSON.parse,S_=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function fa(){}fa.prototype.h=null;function Iu(c){return c.h||(c.h=c.i())}function wu(){}var qr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ma(){Fe.call(this,"d")}b(ma,Fe);function pa(){Fe.call(this,"c")}b(pa,Fe);var vn={},Eu=null;function ui(){return Eu=Eu||new Ue}vn.La="serverreachability";function Tu(c){Fe.call(this,vn.La,c)}b(Tu,Fe);function zr(c){const d=ui();Ge(d,new Tu(d))}vn.STAT_EVENT="statevent";function bu(c,d){Fe.call(this,vn.STAT_EVENT,c),this.stat=d}b(bu,Fe);function We(c){const d=ui();Ge(d,new bu(d,c))}vn.Ma="timingevent";function Au(c,d){Fe.call(this,vn.Ma,c),this.size=d}b(Au,Fe);function Kr(c,d){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},d)}function Gr(){this.g=!0}Gr.prototype.xa=function(){this.g=!1};function R_(c,d,p,g,S,D){c.info(function(){if(c.g)if(D)for(var F="",le=D.split("&"),Ve=0;Ve<le.length;Ve++){var re=le[Ve].split("=");if(1<re.length){var Be=re[0];re=re[1];var je=Be.split("_");F=2<=je.length&&je[1]=="type"?F+(Be+"="+re+"&"):F+(Be+"=redacted&")}}else F=null;else F=D;return"XMLHTTP REQ ("+g+") [attempt "+S+"]: "+d+`
`+p+`
`+F})}function P_(c,d,p,g,S,D,F){c.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+S+"]: "+d+`
`+p+`
`+D+" "+F})}function Zn(c,d,p,g){c.info(function(){return"XMLHTTP TEXT ("+d+"): "+k_(c,p)+(g?" "+g:"")})}function C_(c,d){c.info(function(){return"TIMEOUT: "+d})}Gr.prototype.info=function(){};function k_(c,d){if(!c.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(c=0;c<p.length;c++)if(Array.isArray(p[c])){var g=p[c];if(!(2>g.length)){var S=g[1];if(Array.isArray(S)&&!(1>S.length)){var D=S[0];if(D!="noop"&&D!="stop"&&D!="close")for(var F=1;F<S.length;F++)S[F]=""}}}}return da(p)}catch{return d}}var hi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Su={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ga;function di(){}b(di,fa),di.prototype.g=function(){return new XMLHttpRequest},di.prototype.i=function(){return{}},ga=new di;function qt(c,d,p,g){this.j=c,this.i=d,this.l=p,this.R=g||1,this.U=new $r(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ru}function Ru(){this.i=null,this.g="",this.h=!1}var Pu={},_a={};function ya(c,d,p){c.L=1,c.v=gi(wt(d)),c.m=p,c.P=!0,Cu(c,null)}function Cu(c,d){c.F=Date.now(),fi(c),c.A=wt(c.v);var p=c.A,g=c.R;Array.isArray(g)||(g=[String(g)]),qu(p.i,"t",g),c.C=0,p=c.j.J,c.h=new Ru,c.g=ah(c.j,p?d:null,!c.m),0<c.O&&(c.M=new b_(_(c.Y,c,c.g),c.O)),d=c.U,p=c.g,g=c.ca;var S="readystatechange";Array.isArray(S)||(S&&(yu[0]=S.toString()),S=yu);for(var D=0;D<S.length;D++){var F=du(p,S[D],g||d.handleEvent,!1,d.h||d);if(!F)break;d.g[F.key]=F}d=c.H?v(c.H):{},c.m?(c.u||(c.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,d)):(c.u="GET",c.g.ea(c.A,c.u,null,d)),zr(),R_(c.i,c.u,c.A,c.l,c.R,c.m)}qt.prototype.ca=function(c){c=c.target;const d=this.M;d&&Et(c)==3?d.j():this.Y(c)},qt.prototype.Y=function(c){try{if(c==this.g)e:{const je=Et(this.g);var d=this.g.Ba();const nr=this.g.Z();if(!(3>je)&&(je!=3||this.g&&(this.h.h||this.g.oa()||Ju(this.g)))){this.J||je!=4||d==7||(d==8||0>=nr?zr(3):zr(2)),va(this);var p=this.g.Z();this.X=p;t:if(ku(this)){var g=Ju(this.g);c="";var S=g.length,D=Et(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){In(this),Wr(this);var F="";break t}this.h.i=new a.TextDecoder}for(d=0;d<S;d++)this.h.h=!0,c+=this.h.i.decode(g[d],{stream:!(D&&d==S-1)});g.length=0,this.h.g+=c,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=p==200,P_(this.i,this.u,this.A,this.l,this.R,je,p),this.o){if(this.T&&!this.K){t:{if(this.g){var le,Ve=this.g;if((le=Ve.g?Ve.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(le)){var re=le;break t}}re=null}if(p=re)Zn(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ia(this,p);else{this.o=!1,this.s=3,We(12),In(this),Wr(this);break e}}if(this.P){p=!0;let ut;for(;!this.J&&this.C<F.length;)if(ut=D_(this,F),ut==_a){je==4&&(this.s=4,We(14),p=!1),Zn(this.i,this.l,null,"[Incomplete Response]");break}else if(ut==Pu){this.s=4,We(15),Zn(this.i,this.l,F,"[Invalid Chunk]"),p=!1;break}else Zn(this.i,this.l,ut,null),Ia(this,ut);if(ku(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),je!=4||F.length!=0||this.h.h||(this.s=1,We(16),p=!1),this.o=this.o&&p,!p)Zn(this.i,this.l,F,"[Invalid Chunked Response]"),In(this),Wr(this);else if(0<F.length&&!this.W){this.W=!0;var Be=this.j;Be.g==this&&Be.ba&&!Be.M&&(Be.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),Sa(Be),Be.M=!0,We(11))}}else Zn(this.i,this.l,F,null),Ia(this,F);je==4&&In(this),this.o&&!this.J&&(je==4?rh(this.j,this):(this.o=!1,fi(this)))}else H_(this.g),p==400&&0<F.indexOf("Unknown SID")?(this.s=3,We(12)):(this.s=0,We(13)),In(this),Wr(this)}}}catch{}finally{}};function ku(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function D_(c,d){var p=c.C,g=d.indexOf(`
`,p);return g==-1?_a:(p=Number(d.substring(p,g)),isNaN(p)?Pu:(g+=1,g+p>d.length?_a:(d=d.slice(g,g+p),c.C=g+p,d)))}qt.prototype.cancel=function(){this.J=!0,In(this)};function fi(c){c.S=Date.now()+c.I,Du(c,c.I)}function Du(c,d){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Kr(_(c.ba,c),d)}function va(c){c.B&&(a.clearTimeout(c.B),c.B=null)}qt.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(C_(this.i,this.A),this.L!=2&&(zr(),We(17)),In(this),this.s=2,Wr(this)):Du(this,this.S-c)};function Wr(c){c.j.G==0||c.J||rh(c.j,c)}function In(c){va(c);var d=c.M;d&&typeof d.ma=="function"&&d.ma(),c.M=null,vu(c.U),c.g&&(d=c.g,c.g=null,d.abort(),d.ma())}function Ia(c,d){try{var p=c.j;if(p.G!=0&&(p.g==c||wa(p.h,c))){if(!c.K&&wa(p.h,c)&&p.G==3){try{var g=p.Da.g.parse(d)}catch{g=null}if(Array.isArray(g)&&g.length==3){var S=g;if(S[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<c.F)Ei(p),Ii(p);else break e;Aa(p),We(18)}}else p.za=S[1],0<p.za-p.T&&37500>S[2]&&p.F&&p.v==0&&!p.C&&(p.C=Kr(_(p.Za,p),6e3));if(1>=xu(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else En(p,11)}else if((c.K||p.g==c)&&Ei(p),!O(d))for(S=p.Da.g.parse(d),d=0;d<S.length;d++){let re=S[d];if(p.T=re[0],re=re[1],p.G==2)if(re[0]=="c"){p.K=re[1],p.ia=re[2];const Be=re[3];Be!=null&&(p.la=Be,p.j.info("VER="+p.la));const je=re[4];je!=null&&(p.Aa=je,p.j.info("SVER="+p.Aa));const nr=re[5];nr!=null&&typeof nr=="number"&&0<nr&&(g=1.5*nr,p.L=g,p.j.info("backChannelRequestTimeoutMs_="+g)),g=p;const ut=c.g;if(ut){const bi=ut.g?ut.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(bi){var D=g.h;D.g||bi.indexOf("spdy")==-1&&bi.indexOf("quic")==-1&&bi.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Ea(D,D.h),D.h=null))}if(g.D){const Ra=ut.g?ut.g.getResponseHeader("X-HTTP-Session-Id"):null;Ra&&(g.ya=Ra,fe(g.I,g.D,Ra))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-c.F,p.j.info("Handshake RTT: "+p.R+"ms")),g=p;var F=c;if(g.qa=oh(g,g.J?g.ia:null,g.W),F.K){Ou(g.h,F);var le=F,Ve=g.L;Ve&&(le.I=Ve),le.B&&(va(le),fi(le)),g.g=F}else th(g);0<p.i.length&&wi(p)}else re[0]!="stop"&&re[0]!="close"||En(p,7);else p.G==3&&(re[0]=="stop"||re[0]=="close"?re[0]=="stop"?En(p,7):ba(p):re[0]!="noop"&&p.l&&p.l.ta(re),p.v=0)}}zr(4)}catch{}}var V_=class{constructor(c,d){this.g=c,this.map=d}};function Vu(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Nu(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function xu(c){return c.h?1:c.g?c.g.size:0}function wa(c,d){return c.h?c.h==d:c.g?c.g.has(d):!1}function Ea(c,d){c.g?c.g.add(d):c.h=d}function Ou(c,d){c.h&&c.h==d?c.h=null:c.g&&c.g.has(d)&&c.g.delete(d)}Vu.prototype.cancel=function(){if(this.i=Mu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Mu(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let d=c.i;for(const p of c.g.values())d=d.concat(p.D);return d}return k(c.i)}function N_(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(l(c)){for(var d=[],p=c.length,g=0;g<p;g++)d.push(c[g]);return d}d=[],p=0;for(g in c)d[p++]=c[g];return d}function x_(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(l(c)||typeof c=="string"){var d=[];c=c.length;for(var p=0;p<c;p++)d.push(p);return d}d=[],p=0;for(const g in c)d[p++]=g;return d}}}function Lu(c,d){if(c.forEach&&typeof c.forEach=="function")c.forEach(d,void 0);else if(l(c)||typeof c=="string")Array.prototype.forEach.call(c,d,void 0);else for(var p=x_(c),g=N_(c),S=g.length,D=0;D<S;D++)d.call(void 0,g[D],p&&p[D],c)}var Fu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function O_(c,d){if(c){c=c.split("&");for(var p=0;p<c.length;p++){var g=c[p].indexOf("="),S=null;if(0<=g){var D=c[p].substring(0,g);S=c[p].substring(g+1)}else D=c[p];d(D,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function wn(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof wn){this.h=c.h,mi(this,c.j),this.o=c.o,this.g=c.g,pi(this,c.s),this.l=c.l;var d=c.i,p=new Jr;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),Uu(this,p),this.m=c.m}else c&&(d=String(c).match(Fu))?(this.h=!1,mi(this,d[1]||"",!0),this.o=Hr(d[2]||""),this.g=Hr(d[3]||"",!0),pi(this,d[4]),this.l=Hr(d[5]||"",!0),Uu(this,d[6]||"",!0),this.m=Hr(d[7]||"")):(this.h=!1,this.i=new Jr(null,this.h))}wn.prototype.toString=function(){var c=[],d=this.j;d&&c.push(Qr(d,Bu,!0),":");var p=this.g;return(p||d=="file")&&(c.push("//"),(d=this.o)&&c.push(Qr(d,Bu,!0),"@"),c.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&c.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&c.push("/"),c.push(Qr(p,p.charAt(0)=="/"?F_:L_,!0))),(p=this.i.toString())&&c.push("?",p),(p=this.m)&&c.push("#",Qr(p,B_)),c.join("")};function wt(c){return new wn(c)}function mi(c,d,p){c.j=p?Hr(d,!0):d,c.j&&(c.j=c.j.replace(/:$/,""))}function pi(c,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);c.s=d}else c.s=null}function Uu(c,d,p){d instanceof Jr?(c.i=d,j_(c.i,c.h)):(p||(d=Qr(d,U_)),c.i=new Jr(d,c.h))}function fe(c,d,p){c.i.set(d,p)}function gi(c){return fe(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Hr(c,d){return c?d?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Qr(c,d,p){return typeof c=="string"?(c=encodeURI(c).replace(d,M_),p&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function M_(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Bu=/[#\/\?@]/g,L_=/[#\?:]/g,F_=/[#\?]/g,U_=/[#\?@]/g,B_=/#/g;function Jr(c,d){this.h=this.g=null,this.i=c||null,this.j=!!d}function zt(c){c.g||(c.g=new Map,c.h=0,c.i&&O_(c.i,function(d,p){c.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}n=Jr.prototype,n.add=function(c,d){zt(this),this.i=null,c=er(this,c);var p=this.g.get(c);return p||this.g.set(c,p=[]),p.push(d),this.h+=1,this};function ju(c,d){zt(c),d=er(c,d),c.g.has(d)&&(c.i=null,c.h-=c.g.get(d).length,c.g.delete(d))}function $u(c,d){return zt(c),d=er(c,d),c.g.has(d)}n.forEach=function(c,d){zt(this),this.g.forEach(function(p,g){p.forEach(function(S){c.call(d,S,g,this)},this)},this)},n.na=function(){zt(this);const c=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let g=0;g<d.length;g++){const S=c[g];for(let D=0;D<S.length;D++)p.push(d[g])}return p},n.V=function(c){zt(this);let d=[];if(typeof c=="string")$u(this,c)&&(d=d.concat(this.g.get(er(this,c))));else{c=Array.from(this.g.values());for(let p=0;p<c.length;p++)d=d.concat(c[p])}return d},n.set=function(c,d){return zt(this),this.i=null,c=er(this,c),$u(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[d]),this.h+=1,this},n.get=function(c,d){return c?(c=this.V(c),0<c.length?String(c[0]):d):d};function qu(c,d,p){ju(c,d),0<p.length&&(c.i=null,c.g.set(er(c,d),k(p)),c.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var g=d[p];const D=encodeURIComponent(String(g)),F=this.V(g);for(g=0;g<F.length;g++){var S=D;F[g]!==""&&(S+="="+encodeURIComponent(String(F[g]))),c.push(S)}}return this.i=c.join("&")};function er(c,d){return d=String(d),c.j&&(d=d.toLowerCase()),d}function j_(c,d){d&&!c.j&&(zt(c),c.i=null,c.g.forEach(function(p,g){var S=g.toLowerCase();g!=S&&(ju(this,g),qu(this,S,p))},c)),c.j=d}function $_(c,d){const p=new Gr;if(a.Image){const g=new Image;g.onload=y(Kt,p,"TestLoadImage: loaded",!0,d,g),g.onerror=y(Kt,p,"TestLoadImage: error",!1,d,g),g.onabort=y(Kt,p,"TestLoadImage: abort",!1,d,g),g.ontimeout=y(Kt,p,"TestLoadImage: timeout",!1,d,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=c}else d(!1)}function q_(c,d){const p=new Gr,g=new AbortController,S=setTimeout(()=>{g.abort(),Kt(p,"TestPingServer: timeout",!1,d)},1e4);fetch(c,{signal:g.signal}).then(D=>{clearTimeout(S),D.ok?Kt(p,"TestPingServer: ok",!0,d):Kt(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(S),Kt(p,"TestPingServer: error",!1,d)})}function Kt(c,d,p,g,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),g(p)}catch{}}function z_(){this.g=new S_}function K_(c,d,p){const g=p||"";try{Lu(c,function(S,D){let F=S;h(S)&&(F=da(S)),d.push(g+D+"="+encodeURIComponent(F))})}catch(S){throw d.push(g+"type="+encodeURIComponent("_badmap")),S}}function _i(c){this.l=c.Ub||null,this.j=c.eb||!1}b(_i,fa),_i.prototype.g=function(){return new yi(this.l,this.j)},_i.prototype.i=function(c){return function(){return c}}({});function yi(c,d){Ue.call(this),this.D=c,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(yi,Ue),n=yi.prototype,n.open=function(c,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=d,this.readyState=1,Xr(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(d.body=c),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yr(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Xr(this)),this.g&&(this.readyState=3,Xr(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;zu(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function zu(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var d=c.value?c.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!c.done}))&&(this.response=this.responseText+=d)}c.done?Yr(this):Xr(this),this.readyState==3&&zu(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,Yr(this))},n.Qa=function(c){this.g&&(this.response=c,Yr(this))},n.ga=function(){this.g&&Yr(this)};function Yr(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Xr(c)}n.setRequestHeader=function(c,d){this.u.append(c,d)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,c.push(p[0]+": "+p[1]),p=d.next();return c.join(`\r
`)};function Xr(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(yi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Ku(c){let d="";return $(c,function(p,g){d+=g,d+=":",d+=p,d+=`\r
`}),d}function Ta(c,d,p){e:{for(g in p){var g=!1;break e}g=!0}g||(p=Ku(p),typeof c=="string"?p!=null&&encodeURIComponent(String(p)):fe(c,d,p))}function ye(c){Ue.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(ye,Ue);var G_=/^https?$/i,W_=["POST","PUT"];n=ye.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,d,p,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);d=d?d.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ga.g(),this.v=this.o?Iu(this.o):Iu(ga),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(d,String(c),!0),this.B=!1}catch(D){Gu(this,D);return}if(c=p||"",p=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var S in g)p.set(S,g[S]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())p.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(p.keys()).find(D=>D.toLowerCase()=="content-type"),S=a.FormData&&c instanceof a.FormData,!(0<=Array.prototype.indexOf.call(W_,d,void 0))||g||S||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,F]of p)this.g.setRequestHeader(D,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Qu(this),this.u=!0,this.g.send(c),this.u=!1}catch(D){Gu(this,D)}};function Gu(c,d){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=d,c.m=5,Wu(c),vi(c)}function Wu(c){c.A||(c.A=!0,Ge(c,"complete"),Ge(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Ge(this,"complete"),Ge(this,"abort"),vi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),vi(this,!0)),ye.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Hu(this):this.bb())},n.bb=function(){Hu(this)};function Hu(c){if(c.h&&typeof o<"u"&&(!c.v[1]||Et(c)!=4||c.Z()!=2)){if(c.u&&Et(c)==4)gu(c.Ea,0,c);else if(Ge(c,"readystatechange"),Et(c)==4){c.h=!1;try{const F=c.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var g;if(g=F===0){var S=String(c.D).match(Fu)[1]||null;!S&&a.self&&a.self.location&&(S=a.self.location.protocol.slice(0,-1)),g=!G_.test(S?S.toLowerCase():"")}p=g}if(p)Ge(c,"complete"),Ge(c,"success");else{c.m=6;try{var D=2<Et(c)?c.g.statusText:""}catch{D=""}c.l=D+" ["+c.Z()+"]",Wu(c)}}finally{vi(c)}}}}function vi(c,d){if(c.g){Qu(c);const p=c.g,g=c.v[0]?()=>{}:null;c.g=null,c.v=null,d||Ge(c,"ready");try{p.onreadystatechange=g}catch{}}}function Qu(c){c.I&&(a.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function Et(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<Et(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var d=this.g.responseText;return c&&d.indexOf(c)==0&&(d=d.substring(c.length)),A_(d)}};function Ju(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function H_(c){const d={};c=(c.g&&2<=Et(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<c.length;g++){if(O(c[g]))continue;var p=A(c[g]);const S=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const D=d[S]||[];d[S]=D,D.push(p)}T(d,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zr(c,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[c]||d}function Yu(c){this.Aa=0,this.i=[],this.j=new Gr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Zr("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Zr("baseRetryDelayMs",5e3,c),this.cb=Zr("retryDelaySeedMs",1e4,c),this.Wa=Zr("forwardChannelMaxRetries",2,c),this.wa=Zr("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Vu(c&&c.concurrentRequestLimit),this.Da=new z_,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Yu.prototype,n.la=8,n.G=1,n.connect=function(c,d,p,g){We(0),this.W=c,this.H=d||{},p&&g!==void 0&&(this.H.OSID=p,this.H.OAID=g),this.F=this.X,this.I=oh(this,null,this.W),wi(this)};function ba(c){if(Xu(c),c.G==3){var d=c.U++,p=wt(c.I);if(fe(p,"SID",c.K),fe(p,"RID",d),fe(p,"TYPE","terminate"),es(c,p),d=new qt(c,c.j,d),d.L=2,d.v=gi(wt(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=d.v,p=!0),p||(d.g=ah(d.j,null),d.g.ea(d.v)),d.F=Date.now(),fi(d)}ih(c)}function Ii(c){c.g&&(Sa(c),c.g.cancel(),c.g=null)}function Xu(c){Ii(c),c.u&&(a.clearTimeout(c.u),c.u=null),Ei(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&a.clearTimeout(c.s),c.s=null)}function wi(c){if(!Nu(c.h)&&!c.s){c.s=!0;var d=c.Ga;jt||hu(),It||(jt(),It=!0),sa.add(d,c),c.B=0}}function Q_(c,d){return xu(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=d.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Kr(_(c.Ga,c,d),sh(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const S=new qt(this,this.j,c);let D=this.o;if(this.S&&(D?(D=v(D),E(D,this.S)):D=this.S),this.m!==null||this.O||(S.H=D,D=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var g=this.i[p];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(d+=g,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=eh(this,S,d),p=wt(this.I),fe(p,"RID",c),fe(p,"CVER",22),this.D&&fe(p,"X-HTTP-Session-Id",this.D),es(this,p),D&&(this.O?d="headers="+encodeURIComponent(String(Ku(D)))+"&"+d:this.m&&Ta(p,this.m,D)),Ea(this.h,S),this.Ua&&fe(p,"TYPE","init"),this.P?(fe(p,"$req",d),fe(p,"SID","null"),S.T=!0,ya(S,p,null)):ya(S,p,d),this.G=2}}else this.G==3&&(c?Zu(this,c):this.i.length==0||Nu(this.h)||Zu(this))};function Zu(c,d){var p;d?p=d.l:p=c.U++;const g=wt(c.I);fe(g,"SID",c.K),fe(g,"RID",p),fe(g,"AID",c.T),es(c,g),c.m&&c.o&&Ta(g,c.m,c.o),p=new qt(c,c.j,p,c.B+1),c.m===null&&(p.H=c.o),d&&(c.i=d.D.concat(c.i)),d=eh(c,p,1e3),p.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Ea(c.h,p),ya(p,g,d)}function es(c,d){c.H&&$(c.H,function(p,g){fe(d,g,p)}),c.l&&Lu({},function(p,g){fe(d,g,p)})}function eh(c,d,p){p=Math.min(c.i.length,p);var g=c.l?_(c.l.Na,c.l,c):null;e:{var S=c.i;let D=-1;for(;;){const F=["count="+p];D==-1?0<p?(D=S[0].g,F.push("ofs="+D)):D=0:F.push("ofs="+D);let le=!0;for(let Ve=0;Ve<p;Ve++){let re=S[Ve].g;const Be=S[Ve].map;if(re-=D,0>re)D=Math.max(0,S[Ve].g-100),le=!1;else try{K_(Be,F,"req"+re+"_")}catch{g&&g(Be)}}if(le){g=F.join("&");break e}}}return c=c.i.splice(0,p),d.D=c,g}function th(c){if(!c.g&&!c.u){c.Y=1;var d=c.Fa;jt||hu(),It||(jt(),It=!0),sa.add(d,c),c.v=0}}function Aa(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Kr(_(c.Fa,c),sh(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,nh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Kr(_(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,We(10),Ii(this),nh(this))};function Sa(c){c.A!=null&&(a.clearTimeout(c.A),c.A=null)}function nh(c){c.g=new qt(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var d=wt(c.qa);fe(d,"RID","rpc"),fe(d,"SID",c.K),fe(d,"AID",c.T),fe(d,"CI",c.F?"0":"1"),!c.F&&c.ja&&fe(d,"TO",c.ja),fe(d,"TYPE","xmlhttp"),es(c,d),c.m&&c.o&&Ta(d,c.m,c.o),c.L&&(c.g.I=c.L);var p=c.g;c=c.ia,p.L=1,p.v=gi(wt(d)),p.m=null,p.P=!0,Cu(p,c)}n.Za=function(){this.C!=null&&(this.C=null,Ii(this),Aa(this),We(19))};function Ei(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function rh(c,d){var p=null;if(c.g==d){Ei(c),Sa(c),c.g=null;var g=2}else if(wa(c.h,d))p=d.D,Ou(c.h,d),g=1;else return;if(c.G!=0){if(d.o)if(g==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var S=c.B;g=ui(),Ge(g,new Au(g,p)),wi(c)}else th(c);else if(S=d.s,S==3||S==0&&0<d.X||!(g==1&&Q_(c,d)||g==2&&Aa(c)))switch(p&&0<p.length&&(d=c.h,d.i=d.i.concat(p)),S){case 1:En(c,5);break;case 4:En(c,10);break;case 3:En(c,6);break;default:En(c,2)}}}function sh(c,d){let p=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(p*=2),p*d}function En(c,d){if(c.j.info("Error code "+d),d==2){var p=_(c.fb,c),g=c.Xa;const S=!g;g=new wn(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||mi(g,"https"),gi(g),S?$_(g.toString(),p):q_(g.toString(),p)}else We(2);c.G=0,c.l&&c.l.sa(d),ih(c),Xu(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),We(2)):(this.j.info("Failed to ping google.com"),We(1))};function ih(c){if(c.G=0,c.ka=[],c.l){const d=Mu(c.h);(d.length!=0||c.i.length!=0)&&(C(c.ka,d),C(c.ka,c.i),c.h.i.length=0,k(c.i),c.i.length=0),c.l.ra()}}function oh(c,d,p){var g=p instanceof wn?wt(p):new wn(p);if(g.g!="")d&&(g.g=d+"."+g.g),pi(g,g.s);else{var S=a.location;g=S.protocol,d=d?d+"."+S.hostname:S.hostname,S=+S.port;var D=new wn(null);g&&mi(D,g),d&&(D.g=d),S&&pi(D,S),p&&(D.l=p),g=D}return p=c.D,d=c.ya,p&&d&&fe(g,p,d),fe(g,"VER",c.la),es(c,g),g}function ah(c,d,p){if(d&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=c.Ca&&!c.pa?new ye(new _i({eb:p})):new ye(c.pa),d.Ha(c.J),d}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ch(){}n=ch.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ti(){}Ti.prototype.g=function(c,d){return new tt(c,d)};function tt(c,d){Ue.call(this),this.g=new Yu(d),this.l=c,this.h=d&&d.messageUrlParams||null,c=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(c?c["X-WebChannel-Content-Type"]=d.messageContentType:c={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(c?c["X-WebChannel-Client-Profile"]=d.va:c={"X-WebChannel-Client-Profile":d.va}),this.g.S=c,(c=d&&d.Sb)&&!O(c)&&(this.g.m=c),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!O(d)&&(this.g.D=d,c=this.h,c!==null&&d in c&&(c=this.h,d in c&&delete c[d])),this.j=new tr(this)}b(tt,Ue),tt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},tt.prototype.close=function(){ba(this.g)},tt.prototype.o=function(c){var d=this.g;if(typeof c=="string"){var p={};p.__data__=c,c=p}else this.u&&(p={},p.__data__=da(c),c=p);d.i.push(new V_(d.Ya++,c)),d.G==3&&wi(d)},tt.prototype.N=function(){this.g.l=null,delete this.j,ba(this.g),delete this.g,tt.aa.N.call(this)};function lh(c){ma.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var d=c.__sm__;if(d){e:{for(const p in d){c=p;break e}c=void 0}(this.i=c)&&(c=this.i,d=d!==null&&c in d?d[c]:void 0),this.data=d}else this.data=c}b(lh,ma);function uh(){pa.call(this),this.status=1}b(uh,pa);function tr(c){this.g=c}b(tr,ch),tr.prototype.ua=function(){Ge(this.g,"a")},tr.prototype.ta=function(c){Ge(this.g,new lh(c))},tr.prototype.sa=function(c){Ge(this.g,new uh)},tr.prototype.ra=function(){Ge(this.g,"b")},Ti.prototype.createWebChannel=Ti.prototype.g,tt.prototype.send=tt.prototype.o,tt.prototype.open=tt.prototype.m,tt.prototype.close=tt.prototype.close,Om=function(){return new Ti},xm=function(){return ui()},Nm=vn,oc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},hi.NO_ERROR=0,hi.TIMEOUT=8,hi.HTTP_ERROR=6,zi=hi,Su.COMPLETE="complete",Vm=Su,wu.EventType=qr,qr.OPEN="a",qr.CLOSE="b",qr.ERROR="c",qr.MESSAGE="d",Ue.prototype.listen=Ue.prototype.K,ls=wu,ye.prototype.listenOnce=ye.prototype.L,ye.prototype.getLastError=ye.prototype.Ka,ye.prototype.getLastErrorCode=ye.prototype.Ba,ye.prototype.getStatus=ye.prototype.Z,ye.prototype.getResponseJson=ye.prototype.Oa,ye.prototype.getResponseText=ye.prototype.oa,ye.prototype.send=ye.prototype.ea,ye.prototype.setWithCredentials=ye.prototype.Ha,Dm=ye}).apply(typeof Ri<"u"?Ri:typeof self<"u"?self:typeof window<"u"?window:{});const ed="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}qe.UNAUTHENTICATED=new qe(null),qe.GOOGLE_CREDENTIALS=new qe("google-credentials-uid"),qe.FIRST_PARTY=new qe("first-party-uid"),qe.MOCK_USER=new qe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mr="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=new Bc("@firebase/firestore");function ar(){return Fn.logLevel}function x(n,...e){if(Fn.logLevel<=ee.DEBUG){const t=e.map(el);Fn.debug(`Firestore (${Mr}): ${n}`,...t)}}function we(n,...e){if(Fn.logLevel<=ee.ERROR){const t=e.map(el);Fn.error(`Firestore (${Mr}): ${n}`,...t)}}function Ps(n,...e){if(Fn.logLevel<=ee.WARN){const t=e.map(el);Fn.warn(`Firestore (${Mr}): ${n}`,...t)}}function el(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(n="Unexpected state"){const e=`FIRESTORE (${Mr}) INTERNAL ASSERTION FAILED: `+n;throw we(e),new Error(e)}function G(n,e){n||z()}function K(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends Mt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class iE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(qe.UNAUTHENTICATED))}shutdown(){}}class oE{constructor(e){this.t=e,this.currentUser=qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){G(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new gt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new gt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new gt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(G(typeof r.accessToken=="string"),new sE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return G(e===null||typeof e=="string"),new qe(e)}}class aE{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=qe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class cE{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new aE(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class lE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uE{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){G(this.o===void 0);const r=i=>{i.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,x("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(G(typeof t.token=="string"),this.R=t.token,new lE(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=hE(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function Y(n,e){return n<e?-1:n>e?1:0}function vr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}function Lm(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new L(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return _e.fromMillis(Date.now())}static fromDate(e){return _e.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new _e(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Y(this.nanoseconds,e.nanoseconds):Y(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.timestamp=e}static fromTimestamp(e){return new W(e)}static min(){return new W(new _e(0,0))}static max(){return new W(new _e(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,t,r){t===void 0?t=0:t>e.length&&z(),r===void 0?r=e.length-t:r>e.length-t&&z(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Cs.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Cs?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ie extends Cs{construct(e,t,r){return new ie(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ie(t)}static emptyPath(){return new ie([])}}const dE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ge extends Cs{construct(e,t,r){return new ge(e,t,r)}static isValidIdentifier(e){return dE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ge(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new L(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new L(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new L(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new L(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ge(t)}static emptyPath(){return new ge([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(ie.fromString(e))}static fromName(e){return new B(ie.fromString(e).popFirst(5))}static empty(){return new B(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ie.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new ie(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,t,r,s){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=s}}function ac(n){return n.fields.find(e=>e.kind===2)}function An(n){return n.fields.filter(e=>e.kind!==2)}fo.UNKNOWN_ID=-1;class Ki{constructor(e,t){this.fieldPath=e,this.kind=t}}class ks{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new ks(0,ot.min())}}function Fm(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=W.fromTimestamp(r===1e9?new _e(t+1,0):new _e(t,r));return new ot(s,B.empty(),e)}function Um(n){return new ot(n.readTime,n.key,-1)}class ot{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new ot(W.min(),B.empty(),-1)}static max(){return new ot(W.max(),B.empty(),-1)}}function tl(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=B.comparator(n.documentKey,e.documentKey),t!==0?t:Y(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pn(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==Bm)throw n;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):P.reject(t)}static resolve(e){return new P((t,r)=>{t(e)})}static reject(e){return new P((t,r)=>{r(e)})}static waitFor(e){return new P((t,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&t()},l=>r(l))}),o=!0,i===s&&t()})}static or(e){let t=P.resolve(!1);for(const r of e)t=t.next(s=>s?P.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new P((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next(f=>{o[h]=f,++a,a===i&&r(o)},f=>s(f))}})}static doWhile(e,t){return new P((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new gt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new ps(e,t.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=nl(r.target.error);this.V.reject(new ps(e,s))}}static open(e,t,r,s){try{return new Lo(t,e.transaction(s,r))}catch(i){throw new ps(t,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(x("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new mE(t)}}class sn{constructor(e,t,r){this.name=e,this.version=t,this.p=r,sn.S(Pe())===12.2&&we("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return x("SimpleDb","Removing database:",e),Rn(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!zf())return!1;if(sn.v())return!0;const e=Pe(),t=sn.S(e),r=0<t&&t<10,s=$m(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(x("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{r(new ps(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new L(V.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new L(V.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ps(e,o))},s.onupgradeneeded=i=>{x("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.O(o,s.transaction,i.oldVersion,this.version).next(()=>{x("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=Lo.open(this.db,e,i?"readonly":"readwrite",r),l=s(a).next(h=>(a.g(),h)).catch(h=>(a.abort(h),P.reject(h))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,h=l.name!=="FirebaseError"&&o<3;if(x("SimpleDb","Transaction failed with error:",l.message,"Retrying:",h),this.close(),!h)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function $m(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class fE{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Rn(this.B.delete())}}class ps extends L{constructor(e,t){super(V.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function gn(n){return n.name==="IndexedDbTransactionError"}class mE{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(x("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(x("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Rn(r)}add(e){return x("SimpleDb","ADD",this.store.name,e,e),Rn(this.store.add(e))}get(e){return Rn(this.store.get(e)).next(t=>(t===void 0&&(t=null),x("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return x("SimpleDb","DELETE",this.store.name,e),Rn(this.store.delete(e))}count(){return x("SimpleDb","COUNT",this.store.name),Rn(this.store.count())}U(e,t){const r=this.options(e,t),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new P((o,a)=>{i.onerror=l=>{a(l.target.error)},i.onsuccess=l=>{o(l.target.result)}})}{const i=this.cursor(r),o=[];return this.W(i,(a,l)=>{o.push(l)}).next(()=>o)}}G(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new P((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}j(e,t){x("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.H=!1;const s=this.cursor(r);return this.W(s,(i,o,a)=>a.delete())}J(e,t){let r;t?r=e:(r={},t=e);const s=this.cursor(r);return this.W(s,t)}Y(e){const t=this.cursor({});return new P((r,s)=>{t.onerror=i=>{const o=nl(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,t){const r=[];return new P((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const l=new fE(a),h=t(a.primaryKey,a.value,l);if(h instanceof P){const f=h.catch(m=>(l.done(),P.reject(m)));r.push(f)}l.isDone?s():l.K===null?a.continue():a.continue(l.K)}}).next(()=>P.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Rn(n){return new P((e,t)=>{n.onsuccess=r=>{const s=r.target.result;e(s)},n.onerror=r=>{const s=nl(r.target.error);t(s)}})}let td=!1;function nl(n){const e=sn.S(Pe());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new L("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return td||(td=!0,setTimeout(()=>{throw r},0)),r}}return n}class pE{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){x("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{x("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){gn(t)?x("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await pn(t)}await this.X(6e4)})}}class gE{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const r=new Set;let s=t,i=!0;return P.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return x("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,s).next(a=>{s-=a,r.add(o)});i=!1})).next(()=>t-s)}ne(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,r).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(s,i)).next(a=>(x("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}re(e,t){let r=e;return t.changes.forEach((s,i)=>{const o=Um(i);tl(o,r)>0&&(r=o)}),new ot(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Xe.oe=-1;function Fo(n){return n==null}function Ds(n){return n===0&&1/n==-1/0}function qm(n){return typeof n=="number"&&Number.isInteger(n)&&!Ds(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=nd(e)),e=_E(n.get(t),e);return nd(e)}function _E(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function nd(n){return n+""}function ft(n){const e=n.length;if(G(e>=2),e===2)return G(n.charAt(0)===""&&n.charAt(1)===""),ie.emptyPath();const t=e-2,r=[];let s="";for(let i=0;i<e;){const o=n.indexOf("",i);switch((o<0||o>t)&&z(),n.charAt(o+1)){case"":const a=n.substring(i,o);let l;s.length===0?l=a:(s+=a,l=s,s=""),r.push(l);break;case"":s+=n.substring(i,o),s+="\0";break;case"":s+=n.substring(i,o+1);break;default:z()}i=o+2}return new ie(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(n,e){return[n,Qe(e)]}function zm(n,e,t){return[n,Qe(e),t]}const yE={},vE=["prefixPath","collectionGroup","readTime","documentId"],IE=["prefixPath","collectionGroup","documentId"],wE=["collectionGroup","readTime","prefixPath","documentId"],EE=["canonicalId","targetId"],TE=["targetId","path"],bE=["path","targetId"],AE=["collectionId","parent"],SE=["indexId","uid"],RE=["uid","sequenceNumber"],PE=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],CE=["indexId","uid","orderedDocumentKey"],kE=["userId","collectionPath","documentId"],DE=["userId","collectionPath","largestBatchId"],VE=["userId","collectionGroup","largestBatchId"],Km=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],NE=[...Km,"documentOverlays"],Gm=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Wm=Gm,rl=[...Wm,"indexConfiguration","indexState","indexEntries"],xE=rl,OE=[...rl,"globals"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc extends jm{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function ke(n,e){const t=K(n);return sn.F(t._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Qn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Hm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,t){this.comparator=e,this.root=t||Ne.EMPTY}insert(e,t){return new de(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ne.BLACK,null,null))}remove(e){return new de(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ne.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pi(this.root,e,this.comparator,!0)}}class Pi{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ne{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ne.RED,this.left=s??Ne.EMPTY,this.right=i??Ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Ne(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ne.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ne.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}Ne.EMPTY=null,Ne.RED=!0,Ne.BLACK=!1;Ne.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(e,t,r,s,i){return this}insert(e,t,r){return new Ne(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.comparator=e,this.data=new de(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new id(this.data.getIterator())}getIteratorFrom(e){return new id(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ce)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ce(this.comparator);return t.data=e,t}}class id{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function rr(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.fields=e,e.sort(ge.comparator)}static empty(){return new Ze([])}unionWith(e){let t=new ce(ge.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ze(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return vr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Qm("Invalid base64 string: "+i):i}}(e);return new Te(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Te(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Y(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Te.EMPTY_BYTE_STRING=new Te("");const ME=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nt(n){if(G(!!n),typeof n=="string"){let e=0;const t=ME.exec(n);if(G(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:me(n.seconds),nanos:me(n.nanos)}}function me(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function cn(n){return typeof n=="string"?Te.fromBase64String(n):Te.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function il(n){const e=n.mapValue.fields.__previous_value__;return sl(e)?il(e):e}function Vs(n){const e=Nt(n.mapValue.fields.__local_write_time__.timestampValue);return new _e(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e,t,r,s,i,o,a,l,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=h}}class Un{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Un("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Un&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Wi={nullValue:"NULL_VALUE"};function Bn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?sl(n)?4:Jm(n)?9007199254740991:Uo(n)?10:11:z()}function _t(n,e){if(n===e)return!0;const t=Bn(n);if(t!==Bn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Vs(n).isEqual(Vs(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Nt(s.timestampValue),a=Nt(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return cn(s.bytesValue).isEqual(cn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return me(s.geoPointValue.latitude)===me(i.geoPointValue.latitude)&&me(s.geoPointValue.longitude)===me(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return me(s.integerValue)===me(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=me(s.doubleValue),a=me(i.doubleValue);return o===a?Ds(o)===Ds(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return vr(n.arrayValue.values||[],e.arrayValue.values||[],_t);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(sd(o)!==sd(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!_t(o[l],a[l])))return!1;return!0}(n,e);default:return z()}}function Ns(n,e){return(n.values||[]).find(t=>_t(t,e))!==void 0}function ln(n,e){if(n===e)return 0;const t=Bn(n),r=Bn(e);if(t!==r)return Y(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Y(n.booleanValue,e.booleanValue);case 2:return function(i,o){const a=me(i.integerValue||i.doubleValue),l=me(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(n,e);case 3:return od(n.timestampValue,e.timestampValue);case 4:return od(Vs(n),Vs(e));case 5:return Y(n.stringValue,e.stringValue);case 6:return function(i,o){const a=cn(i),l=cn(o);return a.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let h=0;h<a.length&&h<l.length;h++){const f=Y(a[h],l[h]);if(f!==0)return f}return Y(a.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const a=Y(me(i.latitude),me(o.latitude));return a!==0?a:Y(me(i.longitude),me(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return ad(n.arrayValue,e.arrayValue);case 10:return function(i,o){var a,l,h,f;const m=i.fields||{},_=o.fields||{},y=(a=m.value)===null||a===void 0?void 0:a.arrayValue,b=(l=_.value)===null||l===void 0?void 0:l.arrayValue,k=Y(((h=y==null?void 0:y.values)===null||h===void 0?void 0:h.length)||0,((f=b==null?void 0:b.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:ad(y,b)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===en.mapValue&&o===en.mapValue)return 0;if(i===en.mapValue)return 1;if(o===en.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let m=0;m<l.length&&m<f.length;++m){const _=Y(l[m],f[m]);if(_!==0)return _;const y=ln(a[l[m]],h[f[m]]);if(y!==0)return y}return Y(l.length,f.length)}(n.mapValue,e.mapValue);default:throw z()}}function od(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Y(n,e);const t=Nt(n),r=Nt(e),s=Y(t.seconds,r.seconds);return s!==0?s:Y(t.nanos,r.nanos)}function ad(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=ln(t[s],r[s]);if(i)return i}return Y(t.length,r.length)}function Ir(n){return lc(n)}function lc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Nt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return cn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return B.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=lc(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${lc(t.fields[o])}`;return s+"}"}(n.mapValue):z()}function xs(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function uc(n){return!!n&&"integerValue"in n}function Os(n){return!!n&&"arrayValue"in n}function cd(n){return!!n&&"nullValue"in n}function ld(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Hi(n){return!!n&&"mapValue"in n}function Uo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function gs(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Qn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=gs(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=gs(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Jm(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const Ym={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function FE(n){return"nullValue"in n?Wi:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?xs(Un.empty(),B.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Uo(n)?Ym:{mapValue:{}}:z()}function UE(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?xs(Un.empty(),B.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?Ym:"mapValue"in n?Uo(n)?{mapValue:{}}:en:z()}function ud(n,e){const t=ln(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function hd(n,e){const t=ln(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.value=e}static empty(){return new ze({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Hi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=gs(t)}setAll(e){let t=ge.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=a.popLast()}o?r[a.lastSegment()]=gs(o):s.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Hi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return _t(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Hi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Qn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ze(gs(this.value))}}function Xm(n){const e=[];return Qn(n.fields,(t,r)=>{const s=new ge([t]);if(Hi(r)){const i=Xm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ze(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,t,r,s,i,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ve(e,0,W.min(),W.min(),W.min(),ze.empty(),0)}static newFoundDocument(e,t,r,s){return new ve(e,1,t,W.min(),r,s,0)}static newNoDocument(e,t){return new ve(e,2,t,W.min(),W.min(),ze.empty(),0)}static newUnknownDocument(e,t){return new ve(e,3,t,W.min(),W.min(),ze.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ze.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ze.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ve&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ve(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,t){this.position=e,this.inclusive=t}}function dd(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=B.comparator(B.fromName(o.referenceValue),t.key):r=ln(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function fd(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!_t(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,t="asc"){this.field=e,this.dir=t}}function BE(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{}class te extends Zm{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new jE(e,t,r):t==="array-contains"?new zE(e,r):t==="in"?new ip(e,r):t==="not-in"?new KE(e,r):t==="array-contains-any"?new GE(e,r):new te(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new $E(e,r):new qE(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ln(t,this.value)):t!==null&&Bn(this.value)===Bn(t)&&this.matchesComparison(ln(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ae extends Zm{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new ae(e,t)}matches(e){return Er(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Er(n){return n.op==="and"}function hc(n){return n.op==="or"}function ol(n){return ep(n)&&Er(n)}function ep(n){for(const e of n.filters)if(e instanceof ae)return!1;return!0}function dc(n){if(n instanceof te)return n.field.canonicalString()+n.op.toString()+Ir(n.value);if(ol(n))return n.filters.map(e=>dc(e)).join(",");{const e=n.filters.map(t=>dc(t)).join(",");return`${n.op}(${e})`}}function tp(n,e){return n instanceof te?function(r,s){return s instanceof te&&r.op===s.op&&r.field.isEqual(s.field)&&_t(r.value,s.value)}(n,e):n instanceof ae?function(r,s){return s instanceof ae&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&tp(o,s.filters[a]),!0):!1}(n,e):void z()}function np(n,e){const t=n.filters.concat(e);return ae.create(t,n.op)}function rp(n){return n instanceof te?function(t){return`${t.field.canonicalString()} ${t.op} ${Ir(t.value)}`}(n):n instanceof ae?function(t){return t.op.toString()+" {"+t.getFilters().map(rp).join(" ,")+"}"}(n):"Filter"}class jE extends te{constructor(e,t,r){super(e,t,r),this.key=B.fromName(r.referenceValue)}matches(e){const t=B.comparator(e.key,this.key);return this.matchesComparison(t)}}class $E extends te{constructor(e,t){super(e,"in",t),this.keys=sp("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class qE extends te{constructor(e,t){super(e,"not-in",t),this.keys=sp("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function sp(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>B.fromName(r.referenceValue))}class zE extends te{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Os(t)&&Ns(t.arrayValue,this.value)}}class ip extends te{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ns(this.value.arrayValue,t)}}class KE extends te{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ns(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ns(this.value.arrayValue,t)}}class GE extends te{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Os(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ns(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e,t=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function fc(n,e=null,t=[],r=[],s=null,i=null,o=null){return new WE(n,e,t,r,s,i,o)}function jn(n){const e=K(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>dc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Fo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Ir(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Ir(r)).join(",")),e.ue=t}return e.ue}function Qs(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!BE(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!tp(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!fd(n.startAt,e.startAt)&&fd(n.endAt,e.endAt)}function po(n){return B.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function go(n,e){return n.filters.filter(t=>t instanceof te&&t.field.isEqual(e))}function md(n,e,t){let r=Wi,s=!0;for(const i of go(n,e)){let o=Wi,a=!0;switch(i.op){case"<":case"<=":o=FE(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=Wi}ud({value:r,inclusive:s},{value:o,inclusive:a})<0&&(r=o,s=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];ud({value:r,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}function pd(n,e,t){let r=en,s=!0;for(const i of go(n,e)){let o=en,a=!0;switch(i.op){case">=":case">":o=UE(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=en}hd({value:r,inclusive:s},{value:o,inclusive:a})>0&&(r=o,s=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];hd({value:r,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,t=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function op(n,e,t,r,s,i,o,a){return new Js(n,e,t,r,s,i,o,a)}function Ys(n){return new Js(n)}function gd(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ap(n){return n.collectionGroup!==null}function _s(n){const e=K(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ce(ge.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(a=a.add(h.field))})}),a})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new mo(i,r))}),t.has(ge.keyField().canonicalString())||e.ce.push(new mo(ge.keyField(),r))}return e.ce}function st(n){const e=K(n);return e.le||(e.le=HE(e,_s(n))),e.le}function HE(n,e){if(n.limitType==="F")return fc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new mo(s.field,i)});const t=n.endAt?new wr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new wr(n.startAt.position,n.startAt.inclusive):null;return fc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function mc(n,e){const t=n.filters.concat([e]);return new Js(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function pc(n,e,t){return new Js(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Bo(n,e){return Qs(st(n),st(e))&&n.limitType===e.limitType}function cp(n){return`${jn(st(n))}|lt:${n.limitType}`}function cr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>rp(s)).join(", ")}]`),Fo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Ir(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Ir(s)).join(",")),`Target(${r})`}(st(n))}; limitType=${n.limitType})`}function Xs(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):B.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of _s(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const h=dd(o,a,l);return o.inclusive?h<=0:h<0}(r.startAt,_s(r),s)||r.endAt&&!function(o,a,l){const h=dd(o,a,l);return o.inclusive?h>=0:h>0}(r.endAt,_s(r),s))}(n,e)}function lp(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function up(n){return(e,t)=>{let r=!1;for(const s of _s(n)){const i=QE(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function QE(n,e,t){const r=n.field.isKeyField()?B.comparator(e.key,t.key):function(i,o,a){const l=o.data.field(i),h=a.data.field(i);return l!==null&&h!==null?ln(l,h):z()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Qn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Hm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE=new de(B.comparator);function rt(){return JE}const hp=new de(B.comparator);function us(...n){let e=hp;for(const t of n)e=e.insert(t.key,t);return e}function dp(n){let e=hp;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function mt(){return ys()}function fp(){return ys()}function ys(){return new _n(n=>n.toString(),(n,e)=>n.isEqual(e))}const YE=new de(B.comparator),XE=new ce(B.comparator);function X(...n){let e=XE;for(const t of n)e=e.add(t);return e}const ZE=new ce(Y);function al(){return ZE}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ds(e)?"-0":e}}function mp(n){return{integerValue:""+n}}function pp(n,e){return qm(e)?mp(e):cl(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(){this._=void 0}}function eT(n,e,t){return n instanceof Ms?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&sl(i)&&(i=il(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(t,e):n instanceof $n?_p(n,e):n instanceof qn?yp(n,e):function(s,i){const o=gp(s,i),a=_d(o)+_d(s.Pe);return uc(o)&&uc(s.Pe)?mp(a):cl(s.serializer,a)}(n,e)}function tT(n,e,t){return n instanceof $n?_p(n,e):n instanceof qn?yp(n,e):t}function gp(n,e){return n instanceof Tr?function(r){return uc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ms extends jo{}class $n extends jo{constructor(e){super(),this.elements=e}}function _p(n,e){const t=vp(e);for(const r of n.elements)t.some(s=>_t(s,r))||t.push(r);return{arrayValue:{values:t}}}class qn extends jo{constructor(e){super(),this.elements=e}}function yp(n,e){let t=vp(e);for(const r of n.elements)t=t.filter(s=>!_t(s,r));return{arrayValue:{values:t}}}class Tr extends jo{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function _d(n){return me(n.integerValue||n.doubleValue)}function vp(n){return Os(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,t){this.field=e,this.transform=t}}function nT(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof $n&&s instanceof $n||r instanceof qn&&s instanceof qn?vr(r.elements,s.elements,_t):r instanceof Tr&&s instanceof Tr?_t(r.Pe,s.Pe):r instanceof Ms&&s instanceof Ms}(n.transform,e.transform)}class rT{constructor(e,t){this.version=e,this.transformResults=t}}class He{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new He}static exists(e){return new He(void 0,e)}static updateTime(e){return new He(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Qi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class qo{}function Ip(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new zo(n.key,He.none()):new Lr(n.key,n.data,He.none());{const t=n.data,r=ze.empty();let s=new ce(ge.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Bt(n.key,r,new Ze(s.toArray()),He.none())}}function sT(n,e,t){n instanceof Lr?function(s,i,o){const a=s.value.clone(),l=vd(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof Bt?function(s,i,o){if(!Qi(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=vd(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(wp(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function vs(n,e,t,r){return n instanceof Lr?function(i,o,a,l){if(!Qi(i.precondition,o))return a;const h=i.value.clone(),f=Id(i.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof Bt?function(i,o,a,l){if(!Qi(i.precondition,o))return a;const h=Id(i.fieldTransforms,l,o),f=o.data;return f.setAll(wp(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(i,o,a){return Qi(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function iT(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=gp(r.transform,s||null);i!=null&&(t===null&&(t=ze.empty()),t.set(r.field,i))}return t||null}function yd(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&vr(r,s,(i,o)=>nT(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Lr extends qo{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Bt extends qo{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function wp(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function vd(n,e,t){const r=new Map;G(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,tT(o,a,t[s]))}return r}function Id(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,eT(i,o,e))}return r}class zo extends qo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ep extends qo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&sT(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=vs(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=vs(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=fp();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(s.key)?null:a;const l=Ip(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),X())}isEqual(e){return this.batchId===e.batchId&&vr(this.mutations,e.mutations,(t,r)=>yd(t,r))&&vr(this.baseMutations,e.baseMutations,(t,r)=>yd(t,r))}}class ul{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){G(e.mutations.length===r.length);let s=function(){return YE}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ul(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be,ne;function aT(n){switch(n){default:return z();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function Tp(n){if(n===void 0)return we("GRPC error has no .code"),V.UNKNOWN;switch(n){case be.OK:return V.OK;case be.CANCELLED:return V.CANCELLED;case be.UNKNOWN:return V.UNKNOWN;case be.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case be.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case be.INTERNAL:return V.INTERNAL;case be.UNAVAILABLE:return V.UNAVAILABLE;case be.UNAUTHENTICATED:return V.UNAUTHENTICATED;case be.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case be.NOT_FOUND:return V.NOT_FOUND;case be.ALREADY_EXISTS:return V.ALREADY_EXISTS;case be.PERMISSION_DENIED:return V.PERMISSION_DENIED;case be.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case be.ABORTED:return V.ABORTED;case be.OUT_OF_RANGE:return V.OUT_OF_RANGE;case be.UNIMPLEMENTED:return V.UNIMPLEMENTED;case be.DATA_LOSS:return V.DATA_LOSS;default:return z()}}(ne=be||(be={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cT(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT=new Vn([4294967295,4294967295],0);function wd(n){const e=cT().encode(n),t=new km;return t.update(e),new Uint8Array(t.digest())}function Ed(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Vn([t,r],0),new Vn([s,i],0)]}class dl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new hs(`Invalid padding: ${t}`);if(r<0)throw new hs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new hs(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new hs(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Vn.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(Vn.fromNumber(r)));return s.compare(lT)===1&&(s=new Vn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=wd(e),[r,s]=Ed(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new dl(i,s,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const t=wd(e),[r,s]=Ed(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class hs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,ei.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Zs(W.min(),s,new de(Y),rt(),X())}}class ei{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ei(r,t,X(),X(),X())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class bp{constructor(e,t){this.targetId=e,this.me=t}}class Ap{constructor(e,t,r=Te.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Td{constructor(){this.fe=0,this.ge=Ad(),this.pe=Te.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=X(),t=X(),r=X();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:z()}}),new ei(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Ad()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,G(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class uT{constructor(e){this.Le=e,this.Be=new Map,this.ke=rt(),this.qe=bd(),this.Qe=new de(Y)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:z()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(po(i))if(r===0){const o=new B(i.path);this.Ue(t,o,ve.newNoDocument(o,W.min()))}else G(r===1);else{const o=this.Ye(t);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,a;try{o=cn(r).toUint8Array()}catch(l){if(l instanceof Qm)return Ps("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new dl(o,s,i)}catch(l){return Ps(l instanceof hs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,o)=>{const a=this.Je(o);if(a){if(i.current&&po(a.target)){const l=new B(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,ve.newNoDocument(l,e))}i.be&&(t.set(o,i.ve()),i.Ce())}});let r=X();this.qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Zs(e,t,this.Qe,this.ke,r);return this.ke=rt(),this.qe=bd(),this.Qe=new de(Y),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Td,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ce(Y),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||x("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Td),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function bd(){return new de(B.comparator)}function Ad(){return new de(B.comparator)}const hT={asc:"ASCENDING",desc:"DESCENDING"},dT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},fT={and:"AND",or:"OR"};class mT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function gc(n,e){return n.useProto3Json||Fo(e)?e:{value:e}}function br(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Sp(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function pT(n,e){return br(n,e.toTimestamp())}function Je(n){return G(!!n),W.fromTimestamp(function(t){const r=Nt(t);return new _e(r.seconds,r.nanos)}(n))}function fl(n,e){return _c(n,e).canonicalString()}function _c(n,e){const t=function(s){return new ie(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Rp(n){const e=ie.fromString(n);return G(Mp(e)),e}function _o(n,e){return fl(n.databaseId,e.path)}function Nn(n,e){const t=Rp(e);if(t.get(1)!==n.databaseId.projectId)throw new L(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new L(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new B(kp(t))}function Pp(n,e){return fl(n.databaseId,e)}function Cp(n){const e=Rp(n);return e.length===4?ie.emptyPath():kp(e)}function yc(n){return new ie(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function kp(n){return G(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Sd(n,e,t){return{name:_o(n,e),fields:t.value.mapValue.fields}}function gT(n,e,t){const r=Nn(n,e.name),s=Je(e.updateTime),i=e.createTime?Je(e.createTime):W.min(),o=new ze({mapValue:{fields:e.fields}}),a=ve.newFoundDocument(r,s,i,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function _T(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:z()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(G(f===void 0||typeof f=="string"),Te.fromBase64String(f||"")):(G(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Te.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(h){const f=h.code===void 0?V.UNKNOWN:Tp(h.code);return new L(f,h.message||"")}(o);t=new Ap(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Nn(n,r.document.name),i=Je(r.document.updateTime),o=r.document.createTime?Je(r.document.createTime):W.min(),a=new ze({mapValue:{fields:r.document.fields}}),l=ve.newFoundDocument(s,i,o,a),h=r.targetIds||[],f=r.removedTargetIds||[];t=new Ji(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Nn(n,r.document),i=r.readTime?Je(r.readTime):W.min(),o=ve.newNoDocument(s,i),a=r.removedTargetIds||[];t=new Ji([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Nn(n,r.document),i=r.removedTargetIds||[];t=new Ji([],i,s,null)}else{if(!("filter"in e))return z();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new oT(s,i),a=r.targetId;t=new bp(a,o)}}return t}function yo(n,e){let t;if(e instanceof Lr)t={update:Sd(n,e.key,e.value)};else if(e instanceof zo)t={delete:_o(n,e.key)};else if(e instanceof Bt)t={update:Sd(n,e.key,e.data),updateMask:TT(e.fieldMask)};else{if(!(e instanceof Ep))return z();t={verify:_o(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Ms)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof $n)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof qn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Tr)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw z()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:pT(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:z()}(n,e.precondition)),t}function vc(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?He.updateTime(Je(i.updateTime)):i.exists!==void 0?He.exists(i.exists):He.none()}(e.currentDocument):He.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(o,a){let l=null;if("setToServerValue"in a)G(a.setToServerValue==="REQUEST_TIME"),l=new Ms;else if("appendMissingElements"in a){const f=a.appendMissingElements.values||[];l=new $n(f)}else if("removeAllFromArray"in a){const f=a.removeAllFromArray.values||[];l=new qn(f)}else"increment"in a?l=new Tr(o,a.increment):z();const h=ge.fromServerFormat(a.fieldPath);return new $o(h,l)}(n,s)):[];if(e.update){e.update.name;const s=Nn(n,e.update.name),i=new ze({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const h=l.fieldPaths||[];return new Ze(h.map(f=>ge.fromServerFormat(f)))}(e.updateMask);return new Bt(s,i,o,t,r)}return new Lr(s,i,t,r)}if(e.delete){const s=Nn(n,e.delete);return new zo(s,t)}if(e.verify){const s=Nn(n,e.verify);return new Ep(s,t)}return z()}function yT(n,e){return n&&n.length>0?(G(e!==void 0),n.map(t=>function(s,i){let o=s.updateTime?Je(s.updateTime):Je(i);return o.isEqual(W.min())&&(o=Je(i)),new rT(o,s.transformResults||[])}(t,e))):[]}function Dp(n,e){return{documents:[Pp(n,e.path)]}}function Vp(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Pp(n,s);const i=function(h){if(h.length!==0)return Op(ae.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(_){return{field:lr(_.field),direction:IT(_.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=gc(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:s}}function Np(n){let e=Cp(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){G(r===1);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(m){const _=xp(m);return _ instanceof ae&&ol(_)?_.getFilters():[_]}(t.where));let o=[];t.orderBy&&(o=function(m){return m.map(_=>function(b){return new mo(ur(b.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(_))}(t.orderBy));let a=null;t.limit&&(a=function(m){let _;return _=typeof m=="object"?m.value:m,Fo(_)?null:_}(t.limit));let l=null;t.startAt&&(l=function(m){const _=!!m.before,y=m.values||[];return new wr(y,_)}(t.startAt));let h=null;return t.endAt&&(h=function(m){const _=!m.before,y=m.values||[];return new wr(y,_)}(t.endAt)),op(e,s,o,i,a,"F",l,h)}function vT(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function xp(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=ur(t.unaryFilter.field);return te.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ur(t.unaryFilter.field);return te.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ur(t.unaryFilter.field);return te.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ur(t.unaryFilter.field);return te.create(o,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(n):n.fieldFilter!==void 0?function(t){return te.create(ur(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ae.create(t.compositeFilter.filters.map(r=>xp(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return z()}}(t.compositeFilter.op))}(n):z()}function IT(n){return hT[n]}function wT(n){return dT[n]}function ET(n){return fT[n]}function lr(n){return{fieldPath:n.canonicalString()}}function ur(n){return ge.fromServerFormat(n.fieldPath)}function Op(n){return n instanceof te?function(t){if(t.op==="=="){if(ld(t.value))return{unaryFilter:{field:lr(t.field),op:"IS_NAN"}};if(cd(t.value))return{unaryFilter:{field:lr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ld(t.value))return{unaryFilter:{field:lr(t.field),op:"IS_NOT_NAN"}};if(cd(t.value))return{unaryFilter:{field:lr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:lr(t.field),op:wT(t.op),value:t.value}}}(n):n instanceof ae?function(t){const r=t.getFilters().map(s=>Op(s));return r.length===1?r[0]:{compositeFilter:{op:ET(t.op),filters:r}}}(n):z()}function TT(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Mp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,t,r,s,i=W.min(),o=W.min(),a=Te.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Rt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Rt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Rt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Rt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e){this.ct=e}}function bT(n,e){let t;if(e.document)t=gT(n.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=B.fromSegments(e.noDocument.path),s=Kn(e.noDocument.readTime);t=ve.newNoDocument(r,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return z();{const r=B.fromSegments(e.unknownDocument.path),s=Kn(e.unknownDocument.version);t=ve.newUnknownDocument(r,s)}}return e.readTime&&t.setReadTime(function(s){const i=new _e(s[0],s[1]);return W.fromTimestamp(i)}(e.readTime)),t}function Rd(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:vo(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,o){return{name:_o(i,o.key),fields:o.data.value.mapValue.fields,updateTime:br(i,o.version.toTimestamp()),createTime:br(i,o.createTime.toTimestamp())}}(n.ct,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:zn(e.version)};else{if(!e.isUnknownDocument())return z();r.unknownDocument={path:t.path.toArray(),version:zn(e.version)}}return r}function vo(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function zn(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Kn(n){const e=new _e(n.seconds,n.nanoseconds);return W.fromTimestamp(e)}function Pn(n,e){const t=(e.baseMutations||[]).map(i=>vc(n.ct,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>vc(n.ct,i)),s=_e.fromMillis(e.localWriteTimeMs);return new ll(e.batchId,s,t,r)}function ds(n){const e=Kn(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Kn(n.lastLimboFreeSnapshotVersion):W.min();let r;return r=function(i){return i.documents!==void 0}(n.query)?function(i){return G(i.documents.length===1),st(Ys(Cp(i.documents[0])))}(n.query):function(i){return st(Np(i))}(n.query),new Rt(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Te.fromBase64String(n.resumeToken))}function Fp(n,e){const t=zn(e.snapshotVersion),r=zn(e.lastLimboFreeSnapshotVersion);let s;s=po(e.target)?Dp(n.ct,e.target):Vp(n.ct,e.target)._t;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:jn(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function Up(n){const e=Np({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?pc(e,e.limit,"L"):e}function Ma(n,e){return new hl(e.largestBatchId,vc(n.ct,e.overlayMutation))}function Pd(n,e){const t=e.path.lastSegment();return[n,Qe(e.path.popLast()),t]}function Cd(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:zn(r.readTime),documentKey:Qe(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{getBundleMetadata(e,t){return kd(e).get(t).next(r=>{if(r)return function(i){return{id:i.bundleId,createTime:Kn(i.createTime),version:i.version}}(r)})}saveBundleMetadata(e,t){return kd(e).put(function(s){return{bundleId:s.id,createTime:zn(Je(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return Dd(e).get(t).next(r=>{if(r)return function(i){return{name:i.name,query:Up(i.bundledQuery),readTime:Kn(i.readTime)}}(r)})}saveNamedQuery(e,t){return Dd(e).put(function(s){return{name:s.name,readTime:zn(Je(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function kd(n){return ke(n,"bundles")}function Dd(n){return ke(n,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const r=t.uid||"";return new Ko(e,r)}getOverlay(e,t){return ts(e).get(Pd(this.userId,t)).next(r=>r?Ma(this.serializer,r):null)}getOverlays(e,t){const r=mt();return P.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){const s=[];return r.forEach((i,o)=>{const a=new hl(t,o);s.push(this.ht(e,a))}),P.waitFor(s)}removeOverlaysForBatchId(e,t,r){const s=new Set;t.forEach(o=>s.add(Qe(o.getCollectionPath())));const i=[];return s.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(ts(e).j("collectionPathOverlayIndex",a))}),P.waitFor(i)}getOverlaysForCollection(e,t,r){const s=mt(),i=Qe(t),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return ts(e).U("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const h=Ma(this.serializer,l);s.set(h.getKey(),h)}return s})}getOverlaysForCollectionGroup(e,t,r,s){const i=mt();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return ts(e).J({index:"collectionGroupOverlayIndex",range:a},(l,h,f)=>{const m=Ma(this.serializer,h);i.size()<s||m.largestBatchId===o?(i.set(m.getKey(),m),o=m.largestBatchId):f.done()}).next(()=>i)}ht(e,t){return ts(e).put(function(s,i,o){const[a,l,h]=Pd(i,o.mutation.key);return{userId:i,collectionPath:l,documentId:h,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:yo(s.ct,o.mutation)}}(this.serializer,this.userId,t))}}function ts(n){return ke(n,"documentOverlays")}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{Pt(e){return ke(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?Te.fromUint8Array(r):Te.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(me(e.integerValue));else if("doubleValue"in e){const r=me(e.doubleValue);isNaN(r)?this.dt(t,13):(this.dt(t,15),Ds(r)?t.At(0):t.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(t,20),typeof r=="string"&&(r=Nt(r)),t.Rt(`${r.seconds||""}`),t.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(cn(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(t,45),t.At(r.latitude||0),t.At(r.longitude||0)}else"mapValue"in e?Jm(e)?this.dt(t,Number.MAX_SAFE_INTEGER):Uo(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):z()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const r=e.fields||{};this.dt(t,55);for(const s of Object.keys(r))this.Vt(s,t),this.Tt(r[s],t)}wt(e,t){var r,s;const i=e.fields||{};this.dt(t,53);const o="value",a=((s=(r=i[o].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.length)||0;this.dt(t,15),t.At(me(a)),this.Vt(o,t),this.Tt(i[o],t)}bt(e,t){const r=e.values||[];this.dt(t,50);for(const s of r)this.Tt(s,t)}yt(e,t){this.dt(t,37),B.fromName(e).path.forEach(r=>{this.dt(t,60),this.Dt(r,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}Cn.vt=new Cn;function RT(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Vd(n){const e=64-function(r){let s=0;for(let i=0;i<8;++i){const o=RT(255&r[i]);if(s+=o,o!==8)break}return s}(n);return Math.ceil(e/8)}class PT{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ft(r.value),r=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ot(r.value),r=t.next();this.Nt()}Lt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const s=t.codePointAt(0);this.Ft(240|s>>>18),this.Ft(128|63&s>>>12),this.Ft(128|63&s>>>6),this.Ft(128|63&s)}}this.Mt()}Bt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const s=t.codePointAt(0);this.Ot(240|s>>>18),this.Ot(128|63&s>>>12),this.Ot(128|63&s>>>6),this.Ot(128|63&s)}}this.Nt()}kt(e){const t=this.qt(e),r=Vd(t);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=255&t[s]}Kt(e){const t=this.qt(e),r=Vd(t);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let s=1;s<t.length;++s)t[s]^=r?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class CT{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class kT{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class ns{constructor(){this.jt=new PT,this.Ht=new CT(this.jt),this.Jt=new kT(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,t,r,s){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=s}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new kn(this.indexId,this.documentKey,this.arrayValue,r)}}function Wt(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Nd(n.arrayValue,e.arrayValue),t!==0?t:(t=Nd(n.directionalValue,e.directionalValue),t!==0?t:B.comparator(n.documentKey,e.documentKey)))}function Nd(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e){this.Xt=new ce((t,r)=>ge.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(G(e.collectionGroup===this.collectionId),this.nn)return!1;const t=ac(e);if(t!==void 0&&!this.sn(t))return!1;const r=An(e);let s=new Set,i=0,o=0;for(;i<r.length&&this.sn(r[i]);++i)s=s.add(r[i].fieldPath.canonicalString());if(i===r.length)return!0;if(this.Xt.size>0){const a=this.Xt.getIterator().getNext();if(!s.has(a.field.canonicalString())){const l=r[i];if(!this.on(a,l)||!this._n(this.en[o++],l))return!1}++i}for(;i<r.length;++i){const a=r[i];if(o>=this.en.length||!this._n(this.en[o++],a))return!1}return!0}an(){if(this.nn)return null;let e=new ce(ge.comparator);const t=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new Ki(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new Ki(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new Ki(r.field,r.dir==="asc"?0:1)));return new fo(fo.UNKNOWN_ID,this.collectionId,t,ks.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(n){var e,t;if(G(n instanceof te||n instanceof ae),n instanceof te){if(n instanceof ip){const s=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>te.create(n.field,"==",i)))||[];return ae.create(s,"or")}return n}const r=n.filters.map(s=>Bp(s));return ae.create(r,n.op)}function DT(n){if(n.getFilters().length===0)return[];const e=Ec(Bp(n));return G(jp(e)),Ic(e)||wc(e)?[e]:e.getFilters()}function Ic(n){return n instanceof te}function wc(n){return n instanceof ae&&ol(n)}function jp(n){return Ic(n)||wc(n)||function(t){if(t instanceof ae&&hc(t)){for(const r of t.getFilters())if(!Ic(r)&&!wc(r))return!1;return!0}return!1}(n)}function Ec(n){if(G(n instanceof te||n instanceof ae),n instanceof te)return n;if(n.filters.length===1)return Ec(n.filters[0]);const e=n.filters.map(r=>Ec(r));let t=ae.create(e,n.op);return t=Io(t),jp(t)?t:(G(t instanceof ae),G(Er(t)),G(t.filters.length>1),t.filters.reduce((r,s)=>ml(r,s)))}function ml(n,e){let t;return G(n instanceof te||n instanceof ae),G(e instanceof te||e instanceof ae),t=n instanceof te?e instanceof te?function(s,i){return ae.create([s,i],"and")}(n,e):Od(n,e):e instanceof te?Od(e,n):function(s,i){if(G(s.filters.length>0&&i.filters.length>0),Er(s)&&Er(i))return np(s,i.getFilters());const o=hc(s)?s:i,a=hc(s)?i:s,l=o.filters.map(h=>ml(h,a));return ae.create(l,"or")}(n,e),Io(t)}function Od(n,e){if(Er(e))return np(e,n.getFilters());{const t=e.filters.map(r=>ml(n,r));return ae.create(t,"or")}}function Io(n){if(G(n instanceof te||n instanceof ae),n instanceof te)return n;const e=n.getFilters();if(e.length===1)return Io(e[0]);if(ep(n))return n;const t=e.map(s=>Io(s)),r=[];return t.forEach(s=>{s instanceof te?r.push(s):s instanceof ae&&(s.op===n.op?r.push(...s.filters):r.push(s))}),r.length===1?r[0]:ae.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(){this.un=new pl}addToCollectionParentIndex(e,t){return this.un.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(ot.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(ot.min())}updateCollectionGroup(e,t,r){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class pl{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ce(ie.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ce(ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=new Uint8Array(0);class NT{constructor(e,t){this.databaseId=t,this.cn=new pl,this.ln=new _n(r=>jn(r),(r,s)=>Qs(r,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const r=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const i={collectionId:r,parent:Qe(s)};return Md(e).put(i)}return P.resolve()}getCollectionParents(e,t){const r=[],s=IDBKeyRange.bound([t,""],[Lm(t),""],!1,!0);return Md(e).U(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;r.push(ft(o.parent))}return r})}addFieldIndex(e,t){const r=rs(e),s=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(t);delete s.indexId;const i=r.add(s);if(t.indexState){const o=ir(e);return i.next(a=>{o.put(Cd(a,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const r=rs(e),s=ir(e),i=sr(e);return r.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=rs(e),r=sr(e),s=ir(e);return t.j().next(()=>r.j()).next(()=>s.j())}createTargetIndexes(e,t){return P.forEach(this.hn(t),r=>this.getIndexType(e,r).next(s=>{if(s===0||s===1){const i=new xd(r).an();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const r=sr(e);let s=!0;const i=new Map;return P.forEach(this.hn(t),o=>this.Pn(e,o).next(a=>{s&&(s=!!a),i.set(o,a)})).next(()=>{if(s){let o=X();const a=[];return P.forEach(i,(l,h)=>{x("IndexedDbIndexManager",`Using index ${function(U){return`id=${U.indexId}|cg=${U.collectionGroup}|f=${U.fields.map(M=>`${M.fieldPath}:${M.kind}`).join(",")}`}(l)} to execute ${jn(t)}`);const f=function(U,M){const q=ac(M);if(q===void 0)return null;for(const $ of go(U,q.fieldPath))switch($.op){case"array-contains-any":return $.value.arrayValue.values||[];case"array-contains":return[$.value]}return null}(h,l),m=function(U,M){const q=new Map;for(const $ of An(M))for(const T of go(U,$.fieldPath))switch(T.op){case"==":case"in":q.set($.fieldPath.canonicalString(),T.value);break;case"not-in":case"!=":return q.set($.fieldPath.canonicalString(),T.value),Array.from(q.values())}return null}(h,l),_=function(U,M){const q=[];let $=!0;for(const T of An(M)){const v=T.kind===0?md(U,T.fieldPath,U.startAt):pd(U,T.fieldPath,U.startAt);q.push(v.value),$&&($=v.inclusive)}return new wr(q,$)}(h,l),y=function(U,M){const q=[];let $=!0;for(const T of An(M)){const v=T.kind===0?pd(U,T.fieldPath,U.endAt):md(U,T.fieldPath,U.endAt);q.push(v.value),$&&($=v.inclusive)}return new wr(q,$)}(h,l),b=this.In(l,h,_),k=this.In(l,h,y),C=this.Tn(l,h,m),N=this.En(l.indexId,f,b,_.inclusive,k,y.inclusive,C);return P.forEach(N,O=>r.G(O,t.limit).next(U=>{U.forEach(M=>{const q=B.fromSegments(M.documentKey);o.has(q)||(o=o.add(q),a.push(q))})}))}).next(()=>a)}return P.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=DT(ae.create(e.filters,"and")).map(r=>fc(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,r,s,i,o,a){const l=(t!=null?t.length:1)*Math.max(r.length,i.length),h=l/(t!=null?t.length:1),f=[];for(let m=0;m<l;++m){const _=t?this.dn(t[m/h]):Ci,y=this.An(e,_,r[m%h],s),b=this.Rn(e,_,i[m%h],o),k=a.map(C=>this.An(e,_,C,!0));f.push(...this.createRange(y,b,k))}return f}An(e,t,r,s){const i=new kn(e,B.empty(),t,r);return s?i:i.Zt()}Rn(e,t,r,s){const i=new kn(e,B.empty(),t,r);return s?i.Zt():i}Pn(e,t){const r=new xd(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const a of i)r.rn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const s=this.hn(t);return P.forEach(s,i=>this.Pn(e,i).next(o=>{o?r!==0&&o.fields.length<function(l){let h=new ce(ge.comparator),f=!1;for(const m of l.filters)for(const _ of m.getFlattenedFilters())_.field.isKeyField()||(_.op==="array-contains"||_.op==="array-contains-any"?f=!0:h=h.add(_.field));for(const m of l.orderBy)m.field.isKeyField()||(h=h.add(m.field));return h.size+(f?1:0)}(i)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&s.length>1&&r===2?1:r)}Vn(e,t){const r=new ns;for(const s of An(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=r.Yt(s.kind);Cn.vt.It(i,o)}return r.zt()}dn(e){const t=new ns;return Cn.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const r=new ns;return Cn.vt.It(xs(this.databaseId,t),r.Yt(function(i){const o=An(i);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,t,r){if(r===null)return[];let s=[];s.push(new ns);let i=0;for(const o of An(e)){const a=r[i++];for(const l of s)if(this.fn(t,o.fieldPath)&&Os(a))s=this.gn(s,o,a);else{const h=l.Yt(o.kind);Cn.vt.It(a,h)}}return this.pn(s)}In(e,t,r){return this.Tn(e,t,r.position)}pn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].zt();return t}gn(e,t,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const a of s){const l=new ns;l.seed(a.zt()),Cn.vt.It(o,l.Yt(t.kind)),i.push(l)}return i}fn(e,t){return!!e.filters.find(r=>r instanceof te&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=rs(e),s=ir(e);return(t?r.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.U()).next(i=>{const o=[];return P.forEach(i,a=>s.get([a.indexId,this.uid]).next(l=>{o.push(function(f,m){const _=m?new ks(m.sequenceNumber,new ot(Kn(m.readTime),new B(ft(m.documentKey)),m.largestBatchId)):ks.empty(),y=f.fields.map(([b,k])=>new Ki(ge.fromServerFormat(b),k));return new fo(f.indexId,f.collectionGroup,y,_)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:Y(r.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const s=rs(e),i=ir(e);return this.yn(e).next(o=>s.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>P.forEach(a,l=>i.put(Cd(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){const r=new Map;return P.forEach(t,(s,i)=>{const o=r.get(s.collectionGroup);return(o?P.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(a=>(r.set(s.collectionGroup,a),P.forEach(a,l=>this.wn(e,s,l).next(h=>{const f=this.Sn(i,l);return h.isEqual(f)?P.resolve():this.bn(e,i,l,h,f)}))))})}Dn(e,t,r,s){return sr(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.mn(r,t.key),documentKey:t.key.path.toArray()})}vn(e,t,r,s){return sr(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.mn(r,t.key),t.key.path.toArray()])}wn(e,t,r){const s=sr(e);let i=new ce(Wt);return s.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,t)])},(o,a)=>{i=i.add(new kn(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>i)}Sn(e,t){let r=new ce(Wt);const s=this.Vn(t,e);if(s==null)return r;const i=ac(t);if(i!=null){const o=e.data.field(i.fieldPath);if(Os(o))for(const a of o.arrayValue.values||[])r=r.add(new kn(t.indexId,e.key,this.dn(a),s))}else r=r.add(new kn(t.indexId,e.key,Ci,s));return r}bn(e,t,r,s,i){x("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(l,h,f,m,_){const y=l.getIterator(),b=h.getIterator();let k=rr(y),C=rr(b);for(;k||C;){let N=!1,O=!1;if(k&&C){const U=f(k,C);U<0?O=!0:U>0&&(N=!0)}else k!=null?O=!0:N=!0;N?(m(C),C=rr(b)):O?(_(k),k=rr(y)):(k=rr(y),C=rr(b))}}(s,i,Wt,a=>{o.push(this.Dn(e,t,r,a))},a=>{o.push(this.vn(e,t,r,a))}),P.waitFor(o)}yn(e){let t=1;return ir(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>Wt(o,a)).filter((o,a,l)=>!a||Wt(o,l[a-1])!==0);const s=[];s.push(e);for(const o of r){const a=Wt(o,e),l=Wt(o,t);if(a===0)s[0]=e.Zt();else if(a>0&&l<0)s.push(o),s.push(o.Zt());else if(l>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Cn(s[o],s[o+1]))return[];const a=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,Ci,[]],l=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,Ci,[]];i.push(IDBKeyRange.bound(a,l))}return i}Cn(e,t){return Wt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Ld)}getMinOffset(e,t){return P.mapArray(this.hn(t),r=>this.Pn(e,r).next(s=>s||z())).next(Ld)}}function Md(n){return ke(n,"collectionParents")}function sr(n){return ke(n,"indexEntries")}function rs(n){return ke(n,"indexConfiguration")}function ir(n){return ke(n,"indexState")}function Ld(n){G(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const s=n[r].indexState.offset;tl(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new ot(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ye{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Ye(e,Ye.DEFAULT_COLLECTION_PERCENTILE,Ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(n,e,t){const r=n.store("mutations"),s=n.store("documentMutations"),i=[],o=IDBKeyRange.only(t.batchId);let a=0;const l=r.J({range:o},(f,m,_)=>(a++,_.delete()));i.push(l.next(()=>{G(a===1)}));const h=[];for(const f of t.mutations){const m=zm(e,f.key.path,t.batchId);i.push(s.delete(m)),h.push(f.key)}return P.waitFor(i).next(()=>h)}function wo(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw z();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ye.DEFAULT_COLLECTION_PERCENTILE=10,Ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ye.DEFAULT=new Ye(41943040,Ye.DEFAULT_COLLECTION_PERCENTILE,Ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ye.DISABLED=new Ye(-1,0,0);class Go{constructor(e,t,r,s){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=s,this.Fn={}}static lt(e,t,r,s){G(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new Go(i,t,r,s)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ht(e).J({index:"userMutationsIndex",range:r},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,s){const i=hr(e),o=Ht(e);return o.add({}).next(a=>{G(typeof a=="number");const l=new ll(a,t,r,s),h=function(y,b,k){const C=k.baseMutations.map(O=>yo(y.ct,O)),N=k.mutations.map(O=>yo(y.ct,O));return{userId:b,batchId:k.batchId,localWriteTimeMs:k.localWriteTime.toMillis(),baseMutations:C,mutations:N}}(this.serializer,this.userId,l),f=[];let m=new ce((_,y)=>Y(_.canonicalString(),y.canonicalString()));for(const _ of s){const y=zm(this.userId,_.key.path,a);m=m.add(_.key.path.popLast()),f.push(o.put(h)),f.push(i.put(y,yE))}return m.forEach(_=>{f.push(this.indexManager.addToCollectionParentIndex(e,_))}),e.addOnCommittedListener(()=>{this.Fn[a]=l.keys()}),P.waitFor(f).next(()=>l)})}lookupMutationBatch(e,t){return Ht(e).get(t).next(r=>r?(G(r.userId===this.userId),Pn(this.serializer,r)):null)}Mn(e,t){return this.Fn[t]?P.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const s=r.keys();return this.Fn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return Ht(e).J({index:"userMutationsIndex",range:s},(o,a,l)=>{a.userId===this.userId&&(G(a.batchId>=r),i=Pn(this.serializer,a)),l.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Ht(e).J({index:"userMutationsIndex",range:t,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Ht(e).U("userMutationsIndex",t).next(r=>r.map(s=>Pn(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Gi(this.userId,t.path),s=IDBKeyRange.lowerBound(r),i=[];return hr(e).J({range:s},(o,a,l)=>{const[h,f,m]=o,_=ft(f);if(h===this.userId&&t.path.isEqual(_))return Ht(e).get(m).next(y=>{if(!y)throw z();G(y.userId===this.userId),i.push(Pn(this.serializer,y))});l.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ce(Y);const s=[];return t.forEach(i=>{const o=Gi(this.userId,i.path),a=IDBKeyRange.lowerBound(o),l=hr(e).J({range:a},(h,f,m)=>{const[_,y,b]=h,k=ft(y);_===this.userId&&i.path.isEqual(k)?r=r.add(b):m.done()});s.push(l)}),P.waitFor(s).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1,i=Gi(this.userId,r),o=IDBKeyRange.lowerBound(i);let a=new ce(Y);return hr(e).J({range:o},(l,h,f)=>{const[m,_,y]=l,b=ft(_);m===this.userId&&r.isPrefixOf(b)?b.length===s&&(a=a.add(y)):f.done()}).next(()=>this.xn(e,a))}xn(e,t){const r=[],s=[];return t.forEach(i=>{s.push(Ht(e).get(i).next(o=>{if(o===null)throw z();G(o.userId===this.userId),r.push(Pn(this.serializer,o))}))}),P.waitFor(s).next(()=>r)}removeMutationBatch(e,t){return $p(e._e,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),P.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return P.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return hr(e).J({range:r},(i,o,a)=>{if(i[0]===this.userId){const l=ft(i[1]);s.push(l)}else a.done()}).next(()=>{G(s.length===0)})})}containsKey(e,t){return qp(e,this.userId,t)}Nn(e){return zp(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function qp(n,e,t){const r=Gi(e,t.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return hr(n).J({range:i,H:!0},(a,l,h)=>{const[f,m,_]=a;f===e&&m===s&&(o=!0),h.done()}).next(()=>o)}function Ht(n){return ke(n,"mutations")}function hr(n){return ke(n,"documentMutations")}function zp(n){return ke(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Gn(0)}static kn(){return new Gn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const r=new Gn(t.highestTargetId);return t.highestTargetId=r.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>W.fromTimestamp(new _e(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.qn(e).next(s=>(s.highestListenSequenceNumber=t,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.Qn(e,s)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(t,r),this.Qn(e,r))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>or(e).delete(t.targetId)).next(()=>this.qn(e)).next(r=>(G(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,t,r){let s=0;const i=[];return or(e).J((o,a)=>{const l=ds(a);l.sequenceNumber<=t&&r.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(e,l)))}).next(()=>P.waitFor(i)).next(()=>s)}forEachTarget(e,t){return or(e).J((r,s)=>{const i=ds(s);t(i)})}qn(e){return Ud(e).get("targetGlobalKey").next(t=>(G(t!==null),t))}Qn(e,t){return Ud(e).put("targetGlobalKey",t)}Kn(e,t){return or(e).put(Fp(this.serializer,t))}$n(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=jn(t),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return or(e).J({range:s,index:"queryTargetsIndex"},(o,a,l)=>{const h=ds(a);Qs(t,h.target)&&(i=h,l.done())}).next(()=>i)}addMatchingKeys(e,t,r){const s=[],i=Xt(e);return t.forEach(o=>{const a=Qe(o.path);s.push(i.put({targetId:r,path:a})),s.push(this.referenceDelegate.addReference(e,r,o))}),P.waitFor(s)}removeMatchingKeys(e,t,r){const s=Xt(e);return P.forEach(t,i=>{const o=Qe(i.path);return P.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,t){const r=Xt(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),s=Xt(e);let i=X();return s.J({range:r,H:!0},(o,a,l)=>{const h=ft(o[1]),f=new B(h);i=i.add(f)}).next(()=>i)}containsKey(e,t){const r=Qe(t.path),s=IDBKeyRange.bound([r],[Lm(r)],!1,!0);let i=0;return Xt(e).J({index:"documentTargetsIndex",H:!0,range:s},([o,a],l,h)=>{o!==0&&(i++,h.done())}).next(()=>i>0)}ot(e,t){return or(e).get(t).next(r=>r?ds(r):null)}}function or(n){return ke(n,"targets")}function Ud(n){return ke(n,"targetGlobal")}function Xt(n){return ke(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd([n,e],[t,r]){const s=Y(n,t);return s===0?Y(e,r):s}class OT{constructor(e){this.Un=e,this.buffer=new ce(Bd),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Bd(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class MT{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){x("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){gn(t)?x("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await pn(t)}await this.Hn(3e5)})}}class LT{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return P.resolve(Xe.oe);const r=new OT(t);return this.Jn.forEachTarget(e,s=>r.zn(s.sequenceNumber)).next(()=>this.Jn.Zn(e,s=>r.zn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(x("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Fd)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(x("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Fd):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let r,s,i,o,a,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(x("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,a=Date.now(),this.removeTargets(e,r,t))).next(m=>(i=m,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),ar()<=ee.DEBUG&&x("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(l-a)+`ms
	Removed ${m} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function FT(n,e){return new LT(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e,t){this.db=e,this.garbageCollector=FT(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}er(e){let t=0;return this.Zn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(r,s)=>t(s))}addReference(e,t,r){return ki(e,r)}removeReference(e,t,r){return ki(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return ki(e,t)}nr(e,t){return function(s,i){let o=!1;return zp(s).Y(a=>qp(s,a,i).next(l=>(l&&(o=!0),P.resolve(!l)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.tr(e,(o,a)=>{if(a<=t){const l=this.nr(e,o).next(h=>{if(!h)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,W.min()),Xt(e).delete(function(m){return[0,Qe(m.path)]}(o))))});s.push(l)}}).next(()=>P.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return ki(e,t)}tr(e,t){const r=Xt(e);let s,i=Xe.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:h})=>{o===0?(i!==Xe.oe&&t(new B(ft(s)),i),i=h,s=l):i=Xe.oe}).next(()=>{i!==Xe.oe&&t(new B(ft(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function ki(n,e){return Xt(n).put(function(r,s){return{targetId:0,path:Qe(r.path),sequenceNumber:s}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(){this.changes=new _n(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ve.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?P.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Tn(e).put(r)}removeEntry(e,t,r){return Tn(e).delete(function(i,o){const a=i.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],vo(o),a[a.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.rr(e,r)))}getEntry(e,t){let r=ve.newInvalidDocument(t);return Tn(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(ss(t))},(s,i)=>{r=this.ir(t,i)}).next(()=>r)}sr(e,t){let r={size:0,document:ve.newInvalidDocument(t)};return Tn(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(ss(t))},(s,i)=>{r={document:this.ir(t,i),size:wo(i)}}).next(()=>r)}getEntries(e,t){let r=rt();return this._r(e,t,(s,i)=>{const o=this.ir(s,i);r=r.insert(s,o)}).next(()=>r)}ar(e,t){let r=rt(),s=new de(B.comparator);return this._r(e,t,(i,o)=>{const a=this.ir(i,o);r=r.insert(i,a),s=s.insert(i,wo(o))}).next(()=>({documents:r,ur:s}))}_r(e,t,r){if(t.isEmpty())return P.resolve();let s=new ce(qd);t.forEach(l=>s=s.add(l));const i=IDBKeyRange.bound(ss(s.first()),ss(s.last())),o=s.getIterator();let a=o.getNext();return Tn(e).J({index:"documentKeyIndex",range:i},(l,h,f)=>{const m=B.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;a&&qd(a,m)<0;)r(a,null),a=o.getNext();a&&a.isEqual(m)&&(r(a,h),a=o.hasNext()?o.getNext():null),a?f.$(ss(a)):f.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,s,i){const o=t.path,a=[o.popLast().toArray(),o.lastSegment(),vo(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Tn(e).U(IDBKeyRange.bound(a,l,!0)).next(h=>{i==null||i.incrementDocumentReadCount(h.length);let f=rt();for(const m of h){const _=this.ir(B.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);_.isFoundDocument()&&(Xs(t,_)||s.has(_.key))&&(f=f.insert(_.key,_))}return f})}getAllFromCollectionGroup(e,t,r,s){let i=rt();const o=$d(t,r),a=$d(t,ot.max());return Tn(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,h,f)=>{const m=this.ir(B.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);i=i.insert(m.key,m),i.size===s&&f.done()}).next(()=>i)}newChangeBuffer(e){return new jT(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return jd(e).get("remoteDocumentGlobalKey").next(t=>(G(!!t),t))}rr(e,t){return jd(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const r=bT(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(W.min())))return r}return ve.newInvalidDocument(e)}}function Gp(n){return new BT(n)}class jT extends Kp{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new _n(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const t=[];let r=0,s=new ce((i,o)=>Y(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.lr.get(i);if(t.push(this.cr.removeEntry(e,i,a.readTime)),o.isValidDocument()){const l=Rd(this.cr.serializer,o);s=s.add(i.path.popLast());const h=wo(l);r+=h-a.size,t.push(this.cr.addEntry(e,i,l))}else if(r-=a.size,this.trackRemovals){const l=Rd(this.cr.serializer,o.convertToNoDocument(W.min()));t.push(this.cr.addEntry(e,i,l))}}),s.forEach(i=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.cr.updateMetadata(e,r)),P.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(r=>(this.lr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:r,ur:s})=>(s.forEach((i,o)=>{this.lr.set(i,{size:o,readTime:r.get(i).readTime})}),r))}}function jd(n){return ke(n,"remoteDocumentGlobal")}function Tn(n){return ke(n,"remoteDocumentsV14")}function ss(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function $d(n,e){const t=e.documentKey.path.toArray();return[n,vo(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function qd(n,e){const t=n.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<r.length-2;++i)if(s=Y(t[i],r[i]),s)return s;return s=Y(t.length,r.length),s||(s=Y(t[t.length-2],r[r.length-2]),s||Y(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&vs(r.mutation,s,Ze.empty(),_e.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,X()).next(()=>r))}getLocalViewOfDocuments(e,t,r=X()){const s=mt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=us();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=mt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,X()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,s){let i=rt();const o=ys(),a=function(){return ys()}();return t.forEach((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Bt)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),vs(f.mutation,h,f.mutation.getFieldMask(),_e.now())):o.set(h.key,Ze.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>o.set(h,f)),t.forEach((h,f)=>{var m;return a.set(h,new $T(f,(m=o.get(h))!==null&&m!==void 0?m:null))}),a))}recalculateAndSaveOverlays(e,t){const r=ys();let s=new de((o,a)=>o-a),i=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(l=>{const h=t.get(l);if(h===null)return;let f=r.get(l)||Ze.empty();f=a.applyToLocalView(h,f),r.set(l,f);const m=(s.get(a.batchId)||X()).add(l);s=s.insert(a.batchId,m)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),h=l.key,f=l.value,m=fp();f.forEach(_=>{if(!i.has(_)){const y=Ip(t.get(_),r.get(_));y!==null&&m.set(_,y),i=i.add(_)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return P.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(o){return B.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ap(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):P.resolve(mt());let a=-1,l=i;return o.next(h=>P.forEach(h,(f,m)=>(a<m.largestBatchId&&(a=m.largestBatchId),i.get(f)?P.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{l=l.insert(f,_)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,X())).next(f=>({batchId:a,changes:dp(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next(r=>{let s=us();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=us();return this.indexManager.getCollectionParents(e,i).next(a=>P.forEach(a,l=>{const h=function(m,_){return new Js(_,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((m,_)=>{o=o.insert(m,_)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>{i.forEach((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,ve.newInvalidDocument(f)))});let a=us();return o.forEach((l,h)=>{const f=i.get(l);f!==void 0&&vs(f.mutation,h,Ze.empty(),_e.now()),Xs(t,h)&&(a=a.insert(l,h))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return P.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Je(s.createTime)}}(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:Up(s.bundledQuery),readTime:Je(s.readTime)}}(t)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(){this.overlays=new de(B.comparator),this.Ir=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const r=mt();return P.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),P.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),P.resolve()}getOverlaysForCollection(e,t,r){const s=mt(),i=t.length+1,o=new B(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return P.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new de((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=mt(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const a=mt(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>a.set(h,f)),!(a.size()>=s)););return P.resolve(a)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new hl(t,r));let i=this.Ir.get(t);i===void 0&&(i=X(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(){this.sessionToken=Te.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(){this.Tr=new ce(De.Er),this.dr=new ce(De.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new De(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new De(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new B(new ie([])),r=new De(t,e),s=new De(t,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new B(new ie([])),r=new De(t,e),s=new De(t,e+1);let i=X();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new De(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class De{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return B.comparator(e.key,t.key)||Y(e.wr,t.wr)}static Ar(e,t){return Y(e.wr,t.wr)||B.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new ce(De.Er)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ll(i,t,r,s);this.mutationQueue.push(o);for(const a of s)this.br=this.br.add(new De(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,t){return P.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new De(t,0),s=new De(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const a=this.Dr(o.wr);i.push(a)}),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ce(Y);return t.forEach(s=>{const i=new De(s,0),o=new De(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],a=>{r=r.add(a.wr)})}),P.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;B.isDocumentKey(i)||(i=i.child(""));const o=new De(new B(i),0);let a=new ce(Y);return this.br.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(a=a.add(l.wr)),!0)},o),P.resolve(this.Cr(a))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){G(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return P.forEach(t.mutations,s=>{const i=new De(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new De(t,0),s=this.br.firstAfterOrEqual(r);return P.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e){this.Mr=e,this.docs=function(){return new de(B.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return P.resolve(r?r.document.mutableCopy():ve.newInvalidDocument(t))}getEntries(e,t){let r=rt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ve.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=rt();const o=t.path,a=new B(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||tl(Um(f),r)<=0||(s.has(f.key)||Xs(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(e,t,r,s){z()}Or(e,t){return P.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new HT(this)}getSize(e){return P.resolve(this.size)}}class HT extends Kp{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),P.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(e){this.persistence=e,this.Nr=new _n(t=>jn(t),Qs),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.Lr=0,this.Br=new gl,this.targetCount=0,this.kr=Gn.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),P.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Gn(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.Kn(t),P.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),P.waitFor(i).next(()=>s)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return P.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),P.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),P.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return P.resolve(r)}containsKey(e,t){return P.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Xe(0),this.Kr=!1,this.Kr=!0,this.$r=new KT,this.referenceDelegate=e(this),this.Ur=new QT(this),this.indexManager=new VT,this.remoteDocumentCache=function(s){return new WT(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Lp(t),this.Gr=new qT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new zT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new GT(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){x("MemoryPersistence","Starting transaction:",e);const s=new JT(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return P.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class JT extends jm{constructor(e){super(),this.currentSequenceNumber=e}}class Wo{constructor(e){this.persistence=e,this.Jr=new gl,this.Yr=null}static Zr(e){return new Wo(e)}get Xr(){if(this.Yr)return this.Yr;throw z()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),P.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),P.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Xr,r=>{const s=B.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,W.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return P.or([()=>P.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e){this.serializer=e}O(e,t,r,s){const i=new Lo("createOrUpgrade",t);r<1&&s>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",rd,{unique:!0}),l.createObjectStore("documentMutations")}(e),zd(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=P.resolve();return r<3&&s>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),zd(e)),o=o.next(()=>function(l){const h=l.store("targetGlobal"),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:W.min().toTimestamp(),targetCount:0};return h.put("targetGlobalKey",f)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(l,h){return h.store("mutations").U().next(f=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",rd,{unique:!0});const m=h.store("mutations"),_=f.map(y=>m.put(y));return P.waitFor(_)})}(e,i))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.ni(i))),r<6&&s>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ri(i)))),r<7&&s>=7&&(o=o.next(()=>this.ii(i))),r<8&&s>=8&&(o=o.next(()=>this.si(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(o=o.next(()=>this.oi(i))),r<11&&s>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(l){const h=l.createObjectStore("documentOverlays",{keyPath:kE});h.createIndex("collectionPathOverlayIndex",DE,{unique:!1}),h.createIndex("collectionGroupOverlayIndex",VE,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>function(l){const h=l.createObjectStore("remoteDocumentsV14",{keyPath:vE});h.createIndex("documentKeyIndex",IE),h.createIndex("collectionGroupIndex",wE)}(e)).next(()=>this._i(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&s>=14&&(o=o.next(()=>this.ai(e,i))),r<15&&s>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:SE}).createIndex("sequenceNumberIndex",RE,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:PE}).createIndex("documentKeyIndex",CE,{unique:!1})}(e))),r<16&&s>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),r<17&&s>=17&&(o=o.next(()=>{(function(l){l.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((r,s)=>{t+=wo(s)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.U().next(s=>P.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>P.forEach(a,l=>{G(l.userId===i.userId);const h=Pn(this.serializer,l);return $p(e,i.userId,h).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return r.J((o,a)=>{const l=new ie(o),h=function(m){return[0,Qe(m)]}(l);i.push(t.get(h).next(f=>f?P.resolve():(m=>t.put({targetId:0,path:Qe(m),sequenceNumber:s.highestListenSequenceNumber}))(l)))}).next(()=>P.waitFor(i))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:AE});const r=t.store("collectionParents"),s=new pl,i=o=>{if(s.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:Qe(l)})}};return t.store("remoteDocuments").J({H:!0},(o,a)=>{const l=new ie(o);return i(l.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,a,l],h)=>{const f=ft(a);return i(f.popLast())}))}oi(e){const t=e.store("targets");return t.J((r,s)=>{const i=ds(s),o=Fp(this.serializer,i);return t.put(o)})}_i(e,t){const r=t.store("remoteDocuments"),s=[];return r.J((i,o)=>{const a=t.store("remoteDocumentsV14"),l=function(m){return m.document?new B(ie.fromString(m.document.name).popFirst(5)):m.noDocument?B.fromSegments(m.noDocument.path):m.unknownDocument?B.fromSegments(m.unknownDocument.path):z()}(o).path.toArray(),h={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(a.put(h))}).next(()=>P.waitFor(s))}ai(e,t){const r=t.store("mutations"),s=Gp(this.serializer),i=new Hp(Wo.Zr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(l=>{var h;let f=(h=a.get(l.userId))!==null&&h!==void 0?h:X();Pn(this.serializer,l).keys().forEach(m=>f=f.add(m)),a.set(l.userId,f)}),P.forEach(a,(l,h)=>{const f=new qe(h),m=Ko.lt(this.serializer,f),_=i.getIndexManager(f),y=Go.lt(f,this.serializer,_,i.referenceDelegate);return new Wp(s,y,m,_).recalculateAndSaveOverlaysForDocumentKeys(new cc(t,Xe.oe),l).next()})})}}function zd(n){n.createObjectStore("targetDocuments",{keyPath:TE}).createIndex("documentTargetsIndex",bE,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",EE,{unique:!0}),n.createObjectStore("targetGlobal")}const La="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class _l{constructor(e,t,r,s,i,o,a,l,h,f,m=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ui=i,this.window=o,this.document=a,this.ci=h,this.li=f,this.hi=m,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=_=>Promise.resolve(),!_l.D())throw new L(V.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new UT(this,s),this.Ai=t+"main",this.serializer=new Lp(l),this.Ri=new sn(this.Ai,this.hi,new YT(this.serializer)),this.$r=new ST,this.Ur=new xT(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Gp(this.serializer),this.Gr=new AT,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,f===!1&&we("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new L(V.FAILED_PRECONDITION,La);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new Xe(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Di(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(gn(e))return x("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return x("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return is(e).get("owner").next(t=>P.resolve(this.vi(t)))}Ci(e){return Di(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=ke(t,"clientMetadata");return r.U().next(s=>{const i=this.xi(s,18e5),o=s.filter(a=>i.indexOf(a)===-1);return P.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?P.resolve(!0):is(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new L(V.FAILED_PRECONDITION,La);return!1}}return!(!this.networkEnabled||!this.inForeground)||Di(e).U().next(r=>this.xi(r,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,a=this.networkEnabled===s.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&x("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new cc(e,Xe.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(r=>this.Mi(r.updateTimeMs,t)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>Di(e).U().next(t=>this.xi(t,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return Go.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new NT(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Ko.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,r){x("IndexedDbPersistence","Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(l){return l===17?OE:l===16?xE:l===15?rl:l===14?Wm:l===13?Gm:l===12?NE:l===11?Km:void z()}(this.hi);let o;return this.Ri.runTransaction(e,s,i,a=>(o=new cc(a,this.Qr?this.Qr.next():Xe.oe),t==="readwrite-primary"?this.wi(o).next(l=>!!l||this.Si(o)).next(l=>{if(!l)throw we(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new L(V.FAILED_PRECONDITION,Bm);return r(o)}).next(l=>this.Di(o).next(()=>l)):this.Ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Ki(e){return is(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new L(V.FAILED_PRECONDITION,La)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return is(e).put("owner",t)}static D(){return sn.D()}bi(e){const t=is(e);return t.get("owner").next(r=>this.vi(r)?(x("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):P.resolve())}Mi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(we(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;qf()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const r=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return x("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return we("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){we("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function is(n){return ke(n,"owner")}function Di(n){return ke(n,"clientMetadata")}function Qp(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=X(),s=X();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new yl(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return qf()?8:$m(Pe())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new XT;return this.Xi(e,t,o).next(a=>{if(i.result=a,this.zi)return this.es(e,t,o,a.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(ar()<=ee.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",cr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),P.resolve()):(ar()<=ee.DEBUG&&x("QueryEngine","Query:",cr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(ar()<=ee.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",cr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,st(t))):P.resolve())}Yi(e,t){if(gd(t))return P.resolve(null);let r=st(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=pc(t,null,"F"),r=st(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=X(...i);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.ts(t,a);return this.ns(t,h,o,l.readTime)?this.Yi(e,pc(t,null,"F")):this.rs(e,h,t,l)}))})))}Zi(e,t,r,s){return gd(t)||s.isEqual(W.min())?P.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(t,i);return this.ns(t,o,r,s)?P.resolve(null):(ar()<=ee.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),cr(t)),this.rs(e,o,t,Fm(s,-1)).next(a=>a))})}ts(e,t){let r=new ce(up(e));return t.forEach((s,i)=>{Xs(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return ar()<=ee.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",cr(t)),this.Ji.getDocumentsMatchingQuery(e,t,ot.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new de(Y),this._s=new _n(i=>jn(i),Qs),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Wp(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function Yp(n,e,t,r){return new ZT(n,e,t,r)}async function Xp(n,e){const t=K(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=X();for(const h of s){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){a.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(r,l).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:a}))})})}function eb(n,e){const t=K(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(a,l,h,f){const m=h.batch,_=m.keys();let y=P.resolve();return _.forEach(b=>{y=y.next(()=>f.getEntry(l,b)).next(k=>{const C=h.docVersions.get(b);G(C!==null),k.version.compareTo(C)<0&&(m.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),f.addEntry(k)))})}),y.next(()=>a.mutationQueue.removeMutationBatch(l,m))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=X();for(let h=0;h<a.mutationResults.length;++h)a.mutationResults[h].transformResults.length>0&&(l=l.add(a.batch.mutations[h].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Zp(n){const e=K(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function tb(n,e){const t=K(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const a=[];e.targetChanges.forEach((f,m)=>{const _=s.get(m);if(!_)return;a.push(t.Ur.removeMatchingKeys(i,f.removedDocuments,m).next(()=>t.Ur.addMatchingKeys(i,f.addedDocuments,m)));let y=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?y=y.withResumeToken(Te.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):f.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(f.resumeToken,r)),s=s.insert(m,y),function(k,C,N){return k.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(_,y,f)&&a.push(t.Ur.updateTargetData(i,y))});let l=rt(),h=X();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),a.push(nb(i,o,e.documentUpdates).next(f=>{l=f.Ps,h=f.Is})),!r.isEqual(W.min())){const f=t.Ur.getLastRemoteSnapshotVersion(i).next(m=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(f)}return P.waitFor(a).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(t.os=s,i))}function nb(n,e,t){let r=X(),s=X();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=rt();return t.forEach((a,l)=>{const h=i.get(a);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(W.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):x("LocalStore","Ignoring outdated watch update for ",a,". Current version:",h.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function rb(n,e){const t=K(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Eo(n,e){const t=K(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,P.resolve(s)):t.Ur.allocateTargetId(r).next(o=>(s=new Rt(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function Ar(n,e,t){const r=K(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!gn(o))throw o;x("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Tc(n,e,t){const r=K(n);let s=W.min(),i=X();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,f){const m=K(l),_=m._s.get(f);return _!==void 0?P.resolve(m.os.get(_)):m.Ur.getTargetData(h,f)}(r,o,st(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,t?s:W.min(),t?i:X())).next(a=>(ng(r,lp(e),a),{documents:a,Ts:i})))}function eg(n,e){const t=K(n),r=K(t.Ur),s=t.os.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",i=>r.ot(i,e).next(o=>o?o.target:null))}function tg(n,e){const t=K(n),r=t.us.get(e)||W.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.cs.getAllFromCollectionGroup(s,e,Fm(r,-1),Number.MAX_SAFE_INTEGER)).then(s=>(ng(t,e,s),s))}function ng(n,e,t){let r=n.us.get(e)||W.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}function Kd(n,e){return`firestore_clients_${n}_${e}`}function Gd(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Fa(n,e){return`firestore_targets_${n}_${e}`}class To{constructor(e,t,r,s){this.user=e,this.batchId=t,this.state=r,this.error=s}static Rs(e,t,r){const s=JSON.parse(r);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new L(s.error.code,s.error.message))),o?new To(e,t,s.state,i):(we("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Is{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Rs(e,t){const r=JSON.parse(t);let s,i=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return i&&r.error&&(i=typeof r.error.message=="string"&&typeof r.error.code=="string",i&&(s=new L(r.error.code,r.error.message))),i?new Is(e,r.state,s):(we("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class bo{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Rs(e,t){const r=JSON.parse(t);let s=typeof r=="object"&&r.activeTargetIds instanceof Array,i=al();for(let o=0;s&&o<r.activeTargetIds.length;++o)s=qm(r.activeTargetIds[o]),i=i.add(r.activeTargetIds[o]);return s?new bo(e,i):(we("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class vl{constructor(e,t){this.clientId=e,this.onlineState=t}static Rs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new vl(t.clientId,t.onlineState):(we("SharedClientState",`Failed to parse online state: ${e}`),null)}}class bc{constructor(){this.activeTargetIds=al()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ua{constructor(e,t,r,s,i){this.window=e,this.ui=t,this.persistenceKey=r,this.ps=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new de(Y),this.started=!1,this.bs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Ds=Kd(this.persistenceKey,this.ps),this.vs=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new bc),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Os=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const r of e){if(r===this.ps)continue;const s=this.getItem(Kd(this.persistenceKey,r));if(s){const i=bo.Rs(r,s);i&&(this.Ss=this.Ss.insert(i.clientId,i))}}this.Ns();const t=this.storage.getItem(this.xs);if(t){const r=this.Ls(t);r&&this.Bs(r)}for(const r of this.bs)this.ws(r);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let t=!1;return this.Ss.forEach((r,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,t,r){this.qs(e,t,r),this.Qs(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(Fa(this.persistenceKey,e));if(s){const i=Is.Rs(e,s);i&&(r=i.state)}}return t&&this.Ks.fs(e),this.Ns(),r}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Fa(this.persistenceKey,e))}updateQueryState(e,t,r){this.$s(e,t,r)}handleUserChange(e,t,r){t.forEach(s=>{this.Qs(s)}),this.currentUser=e,r.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return x("SharedClientState","READ",e,t),t}setItem(e,t){x("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){x("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const t=e;if(t.storageArea===this.storage){if(x("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ds)return void we("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Cs.test(t.key)){if(t.newValue==null){const r=this.Gs(t.key);return this.zs(r,null)}{const r=this.js(t.key,t.newValue);if(r)return this.zs(r.clientId,r)}}else if(this.Fs.test(t.key)){if(t.newValue!==null){const r=this.Hs(t.key,t.newValue);if(r)return this.Js(r)}}else if(this.Ms.test(t.key)){if(t.newValue!==null){const r=this.Ys(t.key,t.newValue);if(r)return this.Zs(r)}}else if(t.key===this.xs){if(t.newValue!==null){const r=this.Ls(t.newValue);if(r)return this.Bs(r)}}else if(t.key===this.vs){const r=function(i){let o=Xe.oe;if(i!=null)try{const a=JSON.parse(i);G(typeof a=="number"),o=a}catch(a){we("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(t.newValue);r!==Xe.oe&&this.sequenceNumberHandler(r)}else if(t.key===this.Os){const r=this.Xs(t.newValue);await Promise.all(r.map(s=>this.syncEngine.eo(s)))}}}else this.bs.push(t)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,t,r){const s=new To(this.currentUser,e,t,r),i=Gd(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Vs())}Qs(e){const t=Gd(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Us(e){const t={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(t))}$s(e,t,r){const s=Fa(this.persistenceKey,e),i=new Is(e,t,r);this.setItem(s,i.Vs())}Ws(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Os,t)}Gs(e){const t=this.Cs.exec(e);return t?t[1]:null}js(e,t){const r=this.Gs(e);return bo.Rs(r,t)}Hs(e,t){const r=this.Fs.exec(e),s=Number(r[1]),i=r[2]!==void 0?r[2]:null;return To.Rs(new qe(i),s,t)}Ys(e,t){const r=this.Ms.exec(e),s=Number(r[1]);return Is.Rs(s,t)}Ls(e){return vl.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);x("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,t){const r=t?this.Ss.insert(e,t):this.Ss.remove(e),s=this.ks(this.Ss),i=this.ks(r),o=[],a=[];return i.forEach(l=>{s.has(l)||o.push(l)}),s.forEach(l=>{i.has(l)||a.push(l)}),this.syncEngine.io(o,a).then(()=>{this.Ss=r})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let t=al();return e.forEach((r,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class rg{constructor(){this.so=new bc,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new bc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vi=null;function Ba(){return Vi===null?Vi=function(){return 268435456+Math.round(2147483648*Math.random())}():Vi++,"0x"+Vi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e="WebChannelConnection";class ab extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,o){const a=Ba(),l=this.xo(t,r.toUriEncodedString());x("RestConnection",`Sending RPC '${t}' ${a}:`,l,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(t,l,h,s).then(f=>(x("RestConnection",`Received RPC '${t}' ${a}: `,f),f),f=>{throw Ps("RestConnection",`RPC '${t}' ${a} failed with error: `,f,"url: ",l,"request:",s),f})}Lo(t,r,s,i,o,a){return this.Mo(t,r,s,i,o)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Mr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>t[o]=i),s&&s.headers.forEach((i,o)=>t[o]=i)}xo(t,r){const s=ib[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=Ba();return new Promise((o,a)=>{const l=new Dm;l.setWithCredentials(!0),l.listenOnce(Vm.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case zi.NO_ERROR:const f=l.getResponseJson();x($e,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case zi.TIMEOUT:x($e,`RPC '${e}' ${i} timed out`),a(new L(V.DEADLINE_EXCEEDED,"Request time out"));break;case zi.HTTP_ERROR:const m=l.getStatus();if(x($e,`RPC '${e}' ${i} failed with status:`,m,"response text:",l.getResponseText()),m>0){let _=l.getResponseJson();Array.isArray(_)&&(_=_[0]);const y=_==null?void 0:_.error;if(y&&y.status&&y.message){const b=function(C){const N=C.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(N)>=0?N:V.UNKNOWN}(y.status);a(new L(b,y.message))}else a(new L(V.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new L(V.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{x($e,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);x($e,`RPC '${e}' ${i} sending request:`,s),l.send(t,"POST",h,r,15)})}Bo(e,t,r){const s=Ba(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Om(),a=xm(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const f=i.join("");x($e,`Creating RPC '${e}' stream ${s}: ${f}`,l);const m=o.createWebChannel(f,l);let _=!1,y=!1;const b=new ob({Io:C=>{y?x($e,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(_||(x($e,`Opening RPC '${e}' stream ${s} transport.`),m.open(),_=!0),x($e,`RPC '${e}' stream ${s} sending:`,C),m.send(C))},To:()=>m.close()}),k=(C,N,O)=>{C.listen(N,U=>{try{O(U)}catch(M){setTimeout(()=>{throw M},0)}})};return k(m,ls.EventType.OPEN,()=>{y||(x($e,`RPC '${e}' stream ${s} transport opened.`),b.yo())}),k(m,ls.EventType.CLOSE,()=>{y||(y=!0,x($e,`RPC '${e}' stream ${s} transport closed`),b.So())}),k(m,ls.EventType.ERROR,C=>{y||(y=!0,Ps($e,`RPC '${e}' stream ${s} transport errored:`,C),b.So(new L(V.UNAVAILABLE,"The operation could not be completed")))}),k(m,ls.EventType.MESSAGE,C=>{var N;if(!y){const O=C.data[0];G(!!O);const U=O,M=U.error||((N=U[0])===null||N===void 0?void 0:N.error);if(M){x($e,`RPC '${e}' stream ${s} received error:`,M);const q=M.status;let $=function(I){const E=be[I];if(E!==void 0)return Tp(E)}(q),T=M.message;$===void 0&&($=V.INTERNAL,T="Unknown error status: "+q+" with message "+M.message),y=!0,b.So(new L($,T)),m.close()}else x($e,`RPC '${e}' stream ${s} received:`,O),b.bo(O)}}),k(a,Nm.STAT_EVENT,C=>{C.stat===oc.PROXY?x($e,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===oc.NOPROXY&&x($e,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{b.wo()},0),b}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(){return typeof window<"u"?window:null}function Yi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(n){return new mT(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&x("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e,t,r,s,i,o,a,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new ig(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(we(t.toString()),we("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new L(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return x("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cb extends og{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=_T(this.serializer,e),r=function(i){if(!("targetChange"in i))return W.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?W.min():o.readTime?Je(o.readTime):W.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=yc(this.serializer),t.addTarget=function(i,o){let a;const l=o.target;if(a=po(l)?{documents:Dp(i,l)}:{query:Vp(i,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Sp(i,o.resumeToken);const h=gc(i,o.expectedCount);h!==null&&(a.expectedCount=h)}else if(o.snapshotVersion.compareTo(W.min())>0){a.readTime=br(i,o.snapshotVersion.toTimestamp());const h=gc(i,o.expectedCount);h!==null&&(a.expectedCount=h)}return a}(this.serializer,e);const r=vT(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=yc(this.serializer),t.removeTarget=e,this.a_(t)}}class lb extends og{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return G(!!e.streamToken),this.lastStreamToken=e.streamToken,G(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){G(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=yT(e.writeResults,e.commitTime),r=Je(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=yc(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>yo(this.serializer,r))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new L(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,_c(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(V.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,_c(t,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new L(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class hb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(we(t),this.D_=!1):x("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Jn(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=K(l);h.L_.add(4),await ti(h),h.q_.set("Unknown"),h.L_.delete(4),await Qo(h)}(this))})}),this.q_=new hb(r,s)}}async function Qo(n){if(Jn(n))for(const e of n.B_)await e(!0)}async function ti(n){for(const e of n.B_)await e(!1)}function Jo(n,e){const t=K(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),El(t)?wl(t):Ur(t).r_()&&Il(t,e))}function Sr(n,e){const t=K(n),r=Ur(t);t.N_.delete(e),r.r_()&&ag(t,e),t.N_.size===0&&(r.r_()?r.o_():Jn(t)&&t.q_.set("Unknown"))}function Il(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ur(n).A_(e)}function ag(n,e){n.Q_.xe(e),Ur(n).R_(e)}function wl(n){n.Q_=new uT({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Ur(n).start(),n.q_.v_()}function El(n){return Jn(n)&&!Ur(n).n_()&&n.N_.size>0}function Jn(n){return K(n).L_.size===0}function cg(n){n.Q_=void 0}async function fb(n){n.q_.set("Online")}async function mb(n){n.N_.forEach((e,t)=>{Il(n,e)})}async function pb(n,e){cg(n),El(n)?(n.q_.M_(e),wl(n)):n.q_.set("Unknown")}async function gb(n,e,t){if(n.q_.set("Online"),e instanceof Ap&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.N_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.N_.delete(a),s.Q_.removeTarget(a))}(n,e)}catch(r){x("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ao(n,r)}else if(e instanceof Ji?n.Q_.Ke(e):e instanceof bp?n.Q_.He(e):n.Q_.We(e),!t.isEqual(W.min()))try{const r=await Zp(n.localStore);t.compareTo(r)>=0&&await function(i,o){const a=i.Q_.rt(o);return a.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,h)=>{const f=i.N_.get(l);if(!f)return;i.N_.set(l,f.withResumeToken(Te.EMPTY_BYTE_STRING,f.snapshotVersion)),ag(i,l);const m=new Rt(f.target,l,h,f.sequenceNumber);Il(i,m)}),i.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(r){x("RemoteStore","Failed to raise snapshot:",r),await Ao(n,r)}}async function Ao(n,e,t){if(!gn(e))throw e;n.L_.add(1),await ti(n),n.q_.set("Offline"),t||(t=()=>Zp(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Qo(n)})}function lg(n,e){return e().catch(t=>Ao(n,t,e))}async function Fr(n){const e=K(n),t=un(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;_b(e);)try{const s=await rb(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,yb(e,s)}catch(s){await Ao(e,s)}ug(e)&&hg(e)}function _b(n){return Jn(n)&&n.O_.length<10}function yb(n,e){n.O_.push(e);const t=un(n);t.r_()&&t.V_&&t.m_(e.mutations)}function ug(n){return Jn(n)&&!un(n).n_()&&n.O_.length>0}function hg(n){un(n).start()}async function vb(n){un(n).p_()}async function Ib(n){const e=un(n);for(const t of n.O_)e.m_(t.mutations)}async function wb(n,e,t){const r=n.O_.shift(),s=ul.from(r,e,t);await lg(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Fr(n)}async function Eb(n,e){e&&un(n).V_&&await async function(r,s){if(function(o){return aT(o)&&o!==V.ABORTED}(s.code)){const i=r.O_.shift();un(r).s_(),await lg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Fr(r)}}(n,e),ug(n)&&hg(n)}async function Hd(n,e){const t=K(n);t.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const r=Jn(t);t.L_.add(3),await ti(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Qo(t)}async function Ac(n,e){const t=K(n);e?(t.L_.delete(2),await Qo(t)):e||(t.L_.add(2),await ti(t),t.q_.set("Unknown"))}function Ur(n){return n.K_||(n.K_=function(t,r,s){const i=K(t);return i.w_(),new cb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:fb.bind(null,n),Ro:mb.bind(null,n),mo:pb.bind(null,n),d_:gb.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),El(n)?wl(n):n.q_.set("Unknown")):(await n.K_.stop(),cg(n))})),n.K_}function un(n){return n.U_||(n.U_=function(t,r,s){const i=K(t);return i.w_(),new lb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:vb.bind(null,n),mo:Eb.bind(null,n),f_:Ib.bind(null,n),g_:wb.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Fr(n)):(await n.U_.stop(),n.O_.length>0&&(x("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new gt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,a=new Tl(e,t,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bl(n,e){if(we("AsyncQueue",`${e}: ${n}`),gn(n))return new L(V.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e){this.comparator=e?(t,r)=>e(t,r)||B.comparator(t.key,r.key):(t,r)=>B.comparator(t.key,r.key),this.keyedMap=us(),this.sortedSet=new de(this.comparator)}static emptySet(e){return new gr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof gr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new gr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(){this.W_=new de(B.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):z():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Rr{constructor(e,t,r,s,i,o,a,l,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new Rr(e,t,gr.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class bb{constructor(){this.queries=Jd(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=K(t),i=s.queries;s.queries=Jd(),i.forEach((o,a)=>{for(const l of a.j_)l.onError(r)})})(this,new L(V.ABORTED,"Firestore shutting down"))}}function Jd(){return new _n(n=>cp(n),Bo)}async function Al(n,e){const t=K(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new Tb,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const a=bl(o,`Initialization of query '${cr(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&Rl(t)}async function Sl(n,e){const t=K(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Ab(n,e){const t=K(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const a of o.j_)a.X_(s)&&(r=!0);o.z_=s}}r&&Rl(t)}function Sb(n,e,t){const r=K(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function Rl(n){n.Y_.forEach(e=>{e.next()})}var Sc,Yd;(Yd=Sc||(Sc={})).ea="default",Yd.Cache="cache";class Pl{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Rr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Rr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Sc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e){this.key=e}}class fg{constructor(e){this.key=e}}class Rb{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=X(),this.mutatedKeys=X(),this.Aa=up(e),this.Ra=new gr(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new Qd,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const _=s.get(f),y=Xs(this.query,m)?m:null,b=!!_&&this.mutatedKeys.has(_.key),k=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let C=!1;_&&y?_.data.isEqual(y.data)?b!==k&&(r.track({type:3,doc:y}),C=!0):this.ga(_,y)||(r.track({type:2,doc:y}),C=!0,(l&&this.Aa(y,l)>0||h&&this.Aa(y,h)<0)&&(a=!0)):!_&&y?(r.track({type:0,doc:y}),C=!0):_&&!y&&(r.track({type:1,doc:_}),C=!0,(l||h)&&(a=!0)),C&&(y?(o=o.add(y),i=k?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:a,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,m)=>function(y,b){const k=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return k(y)-k(b)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),s=s!=null&&s;const a=t&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,h=l!==this.Ea;return this.Ea=l,o.length!==0||h?{snapshot:new Rr(this.query,e.Ra,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Qd,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=X(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new fg(r))}),this.da.forEach(r=>{e.has(r)||t.push(new dg(r))}),t}ba(e){this.Ta=e.Ts,this.da=X();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Rr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Pb{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Cb{constructor(e){this.key=e,this.va=!1}}class kb{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new _n(a=>cp(a),Bo),this.Ma=new Map,this.xa=new Set,this.Oa=new de(B.comparator),this.Na=new Map,this.La=new gl,this.Ba={},this.ka=new Map,this.qa=Gn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Db(n,e,t=!0){const r=Yo(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await mg(r,e,t,!0),s}async function Vb(n,e){const t=Yo(n);await mg(t,e,!0,!1)}async function mg(n,e,t,r){const s=await Eo(n.localStore,st(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let a;return r&&(a=await Cl(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&Jo(n.remoteStore,s),a}async function Cl(n,e,t,r,s){n.Ka=(m,_,y)=>async function(k,C,N,O){let U=C.view.ma(N);U.ns&&(U=await Tc(k.localStore,C.query,!1).then(({documents:T})=>C.view.ma(T,U)));const M=O&&O.targetChanges.get(C.targetId),q=O&&O.targetMismatches.get(C.targetId)!=null,$=C.view.applyChanges(U,k.isPrimaryClient,M,q);return Rc(k,C.targetId,$.wa),$.snapshot}(n,m,_,y);const i=await Tc(n.localStore,e,!0),o=new Rb(e,i.Ts),a=o.ma(i.documents),l=ei.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=o.applyChanges(a,n.isPrimaryClient,l);Rc(n,t,h.wa);const f=new Pb(e,t,o);return n.Fa.set(e,f),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),h.snapshot}async function Nb(n,e,t){const r=K(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Bo(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ar(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Sr(r.remoteStore,s.targetId),Pr(r,s.targetId)}).catch(pn)):(Pr(r,s.targetId),await Ar(r.localStore,s.targetId,!0))}async function xb(n,e){const t=K(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Sr(t.remoteStore,r.targetId))}async function Ob(n,e,t){const r=Nl(n);try{const s=await function(o,a){const l=K(o),h=_e.now(),f=a.reduce((y,b)=>y.add(b.key),X());let m,_;return l.persistence.runTransaction("Locally write mutations","readwrite",y=>{let b=rt(),k=X();return l.cs.getEntries(y,f).next(C=>{b=C,b.forEach((N,O)=>{O.isValidDocument()||(k=k.add(N))})}).next(()=>l.localDocuments.getOverlayedDocuments(y,b)).next(C=>{m=C;const N=[];for(const O of a){const U=iT(O,m.get(O.key).overlayedDocument);U!=null&&N.push(new Bt(O.key,U,Xm(U.value.mapValue),He.exists(!0)))}return l.mutationQueue.addMutationBatch(y,h,N,a)}).next(C=>{_=C;const N=C.applyToLocalDocumentSet(m,k);return l.documentOverlayCache.saveOverlays(y,C.batchId,N)})}).then(()=>({batchId:_.batchId,changes:dp(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let h=o.Ba[o.currentUser.toKey()];h||(h=new de(Y)),h=h.insert(a,l),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,t),await yn(r,s.changes),await Fr(r.remoteStore)}catch(s){const i=bl(s,"Failed to persist write");t.reject(i)}}async function pg(n,e){const t=K(n);try{const r=await tb(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Na.get(i);o&&(G(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?G(o.va):s.removedDocuments.size>0&&(G(o.va),o.va=!1))}),await yn(t,r,e)}catch(r){await pn(r)}}function Xd(n,e,t){const r=K(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,o)=>{const a=o.view.Z_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=K(o);l.onlineState=a;let h=!1;l.queries.forEach((f,m)=>{for(const _ of m.j_)_.Z_(a)&&(h=!0)}),h&&Rl(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Mb(n,e,t){const r=K(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new de(B.comparator);o=o.insert(i,ve.newNoDocument(i,W.min()));const a=X().add(i),l=new Zs(W.min(),new Map,new de(Y),o,a);await pg(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),Vl(r)}else await Ar(r.localStore,e,!1).then(()=>Pr(r,e,t)).catch(pn)}async function Lb(n,e){const t=K(n),r=e.batch.batchId;try{const s=await eb(t.localStore,e);Dl(t,r,null),kl(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await yn(t,s)}catch(s){await pn(s)}}async function Fb(n,e,t){const r=K(n);try{const s=await function(o,a){const l=K(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,a).next(m=>(G(m!==null),f=m.keys(),l.mutationQueue.removeMutationBatch(h,m))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(r.localStore,e);Dl(r,e,t),kl(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await yn(r,s)}catch(s){await pn(s)}}function kl(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Dl(n,e,t){const r=K(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Pr(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||gg(n,r)})}function gg(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(Sr(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Vl(n))}function Rc(n,e,t){for(const r of t)r instanceof dg?(n.La.addReference(r.key,e),Ub(n,r)):r instanceof fg?(x("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||gg(n,r.key)):z()}function Ub(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(x("SyncEngine","New document in limbo: "+t),n.xa.add(r),Vl(n))}function Vl(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new B(ie.fromString(e)),r=n.qa.next();n.Na.set(r,new Cb(t)),n.Oa=n.Oa.insert(t,r),Jo(n.remoteStore,new Rt(st(Ys(t.path)),r,"TargetPurposeLimboResolution",Xe.oe))}}async function yn(n,e,t){const r=K(n),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,l)=>{o.push(r.Ka(l,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,m?"current":"not-current")}if(h){s.push(h);const m=yl.Wi(l.targetId,h);i.push(m)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(l,h){const f=K(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>P.forEach(h,_=>P.forEach(_.$i,y=>f.persistence.referenceDelegate.addReference(m,_.targetId,y)).next(()=>P.forEach(_.Ui,y=>f.persistence.referenceDelegate.removeReference(m,_.targetId,y)))))}catch(m){if(!gn(m))throw m;x("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const _=m.targetId;if(!m.fromCache){const y=f.os.get(_),b=y.snapshotVersion,k=y.withLastLimboFreeSnapshotVersion(b);f.os=f.os.insert(_,k)}}}(r.localStore,i))}async function Bb(n,e){const t=K(n);if(!t.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());const r=await Xp(t.localStore,e);t.currentUser=e,function(i,o){i.ka.forEach(a=>{a.forEach(l=>{l.reject(new L(V.CANCELLED,o))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await yn(t,r.hs)}}function jb(n,e){const t=K(n),r=t.Na.get(e);if(r&&r.va)return X().add(r.key);{let s=X();const i=t.Ma.get(e);if(!i)return s;for(const o of i){const a=t.Fa.get(o);s=s.unionWith(a.view.Va)}return s}}async function $b(n,e){const t=K(n),r=await Tc(t.localStore,e.query,!0),s=e.view.ba(r);return t.isPrimaryClient&&Rc(t,e.targetId,s.wa),s}async function qb(n,e){const t=K(n);return tg(t.localStore,e).then(r=>yn(t,r))}async function zb(n,e,t,r){const s=K(n),i=await function(a,l){const h=K(a),f=K(h.mutationQueue);return h.persistence.runTransaction("Lookup mutation documents","readonly",m=>f.Mn(m,l).next(_=>_?h.localDocuments.getDocuments(m,_):P.resolve(null)))}(s.localStore,e);i!==null?(t==="pending"?await Fr(s.remoteStore):t==="acknowledged"||t==="rejected"?(Dl(s,e,r||null),kl(s,e),function(a,l){K(K(a).mutationQueue).On(l)}(s.localStore,e)):z(),await yn(s,i)):x("SyncEngine","Cannot apply mutation batch with id: "+e)}async function Kb(n,e){const t=K(n);if(Yo(t),Nl(t),e===!0&&t.Qa!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),s=await Zd(t,r.toArray());t.Qa=!0,await Ac(t.remoteStore,!0);for(const i of s)Jo(t.remoteStore,i)}else if(e===!1&&t.Qa!==!1){const r=[];let s=Promise.resolve();t.Ma.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):s=s.then(()=>(Pr(t,o),Ar(t.localStore,o,!0))),Sr(t.remoteStore,o)}),await s,await Zd(t,r),function(o){const a=K(o);a.Na.forEach((l,h)=>{Sr(a.remoteStore,h)}),a.La.pr(),a.Na=new Map,a.Oa=new de(B.comparator)}(t),t.Qa=!1,await Ac(t.remoteStore,!1)}}async function Zd(n,e,t){const r=K(n),s=[],i=[];for(const o of e){let a;const l=r.Ma.get(o);if(l&&l.length!==0){a=await Eo(r.localStore,st(l[0]));for(const h of l){const f=r.Fa.get(h),m=await $b(r,f);m.snapshot&&i.push(m.snapshot)}}else{const h=await eg(r.localStore,o);a=await Eo(r.localStore,h),await Cl(r,_g(h),o,!1,a.resumeToken)}s.push(a)}return r.Ca.d_(i),s}function _g(n){return op(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function Gb(n){return function(t){return K(K(t).persistence).Qi()}(K(n).localStore)}async function Wb(n,e,t,r){const s=K(n);if(s.Qa)return void x("SyncEngine","Ignoring unexpected query state notification.");const i=s.Ma.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await tg(s.localStore,lp(i[0])),a=Zs.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Te.EMPTY_BYTE_STRING);await yn(s,o,a);break}case"rejected":await Ar(s.localStore,e,!0),Pr(s,e,r);break;default:z()}}async function Hb(n,e,t){const r=Yo(n);if(r.Qa){for(const s of e){if(r.Ma.has(s)&&r.sharedClientState.isActiveQueryTarget(s)){x("SyncEngine","Adding an already active target "+s);continue}const i=await eg(r.localStore,s),o=await Eo(r.localStore,i);await Cl(r,_g(i),o.targetId,!1,o.resumeToken),Jo(r.remoteStore,o)}for(const s of t)r.Ma.has(s)&&await Ar(r.localStore,s,!1).then(()=>{Sr(r.remoteStore,s),Pr(r,s)}).catch(pn)}}function Yo(n){const e=K(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=pg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=jb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Mb.bind(null,e),e.Ca.d_=Ab.bind(null,e.eventManager),e.Ca.$a=Sb.bind(null,e.eventManager),e}function Nl(n){const e=K(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Lb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Fb.bind(null,e),e}class Ls{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ho(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return Yp(this.persistence,new Jp,e.initialUser,this.serializer)}Ga(e){return new Hp(Wo.Zr,this.serializer)}Wa(e){return new rg}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ls.provider={build:()=>new Ls};class yg extends Ls{constructor(e,t,r){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await Nl(this.Ja.syncEngine),await Fr(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return Yp(this.persistence,new Jp,e.initialUser,this.serializer)}ja(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new MT(r,e.asyncQueue,t)}Ha(e,t){const r=new gE(t,this.persistence);return new pE(e.asyncQueue,r)}Ga(e){const t=Qp(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Ye.withCacheSize(this.cacheSizeBytes):Ye.DEFAULT;return new _l(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,sg(),Yi(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new rg}}class Qb extends yg{constructor(e,t){super(e,t,!1),this.Ja=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ja.syncEngine;this.sharedClientState instanceof Ua&&(this.sharedClientState.syncEngine={no:zb.bind(null,t),ro:Wb.bind(null,t),io:Hb.bind(null,t),Qi:Gb.bind(null,t),eo:qb.bind(null,t)},await this.sharedClientState.start()),await this.persistence.yi(async r=>{await Kb(this.Ja.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Wa(e){const t=sg();if(!Ua.D(t))throw new L(V.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Qp(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Ua(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Fs{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Bb.bind(null,this.syncEngine),await Ac(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new bb}()}createDatastore(e){const t=Ho(e.databaseInfo.databaseId),r=function(i){return new ab(i)}(e.databaseInfo);return function(i,o,a,l){return new ub(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,a){return new db(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>Xd(this.syncEngine,t,0),function(){return Wd.D()?new Wd:new sb}())}createSyncEngine(e,t){return function(s,i,o,a,l,h,f){const m=new kb(s,i,o,a,l,h);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=K(s);x("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await ti(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Fs.provider={build:()=>new Fs};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):we("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=qe.UNAUTHENTICATED,this.clientId=Mm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{x("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(x("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=bl(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ja(n,e){n.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Xp(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function ef(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Yb(n);x("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Hd(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Hd(e.remoteStore,s)),n._onlineComponents=e}async function Yb(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x("FirestoreClient","Using user provided OfflineComponentProvider");try{await ja(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Ps("Error using user provided cache. Falling back to memory cache: "+t),await ja(n,new Ls)}}else x("FirestoreClient","Using default OfflineComponentProvider"),await ja(n,new Ls);return n._offlineComponents}async function vg(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x("FirestoreClient","Using user provided OnlineComponentProvider"),await ef(n,n._uninitializedComponentsProvider._online)):(x("FirestoreClient","Using default OnlineComponentProvider"),await ef(n,new Fs))),n._onlineComponents}function Xb(n){return vg(n).then(e=>e.syncEngine)}async function So(n){const e=await vg(n),t=e.eventManager;return t.onListen=Db.bind(null,e.syncEngine),t.onUnlisten=Nb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Vb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=xb.bind(null,e.syncEngine),t}function Zb(n,e,t={}){const r=new gt;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,h){const f=new xl({next:_=>{f.Za(),o.enqueueAndForget(()=>Sl(i,m));const y=_.docs.has(a);!y&&_.fromCache?h.reject(new L(V.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&_.fromCache&&l&&l.source==="server"?h.reject(new L(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(_)},error:_=>h.reject(_)}),m=new Pl(Ys(a.path),f,{includeMetadataChanges:!0,_a:!0});return Al(i,m)}(await So(n),n.asyncQueue,e,t,r)),r.promise}function eA(n,e,t={}){const r=new gt;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,h){const f=new xl({next:_=>{f.Za(),o.enqueueAndForget(()=>Sl(i,m)),_.fromCache&&l.source==="server"?h.reject(new L(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),m=new Pl(a,f,{includeMetadataChanges:!0,_a:!0});return Al(i,m)}(await So(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(n,e,t){if(!t)throw new L(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function tA(n,e,t,r){if(e===!0&&r===!0)throw new L(V.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function nf(n){if(!B.isDocumentKey(n))throw new L(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function rf(n){if(B.isDocumentKey(n))throw new L(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Xo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":z()}function on(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new L(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Xo(n);throw new L(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new L(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}tA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ig((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new L(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new L(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new L(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ol{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sf({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new L(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new iE;switch(r.type){case"firstParty":return new cE(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=tf.get(t);r&&(x("ComponentProvider","Removing Datastore"),tf.delete(t),r.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Yn(this.firestore,e,this._query)}}class et{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new an(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new et(this.firestore,e,this._key)}}class an extends Yn{constructor(e,t,r){super(e,t,Ys(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new et(this.firestore,null,new B(e))}withConverter(e){return new an(this.firestore,e,this._path)}}function of(n,e,...t){if(n=Ee(n),wg("collection","path",e),n instanceof Ol){const r=ie.fromString(e,...t);return rf(r),new an(n,null,r)}{if(!(n instanceof et||n instanceof an))throw new L(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ie.fromString(e,...t));return rf(r),new an(n.firestore,null,r)}}function $a(n,e,...t){if(n=Ee(n),arguments.length===1&&(e=Mm.newId()),wg("doc","path",e),n instanceof Ol){const r=ie.fromString(e,...t);return nf(r),new et(n,null,new B(r))}{if(!(n instanceof et||n instanceof an))throw new L(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ie.fromString(e,...t));return nf(r),new et(n.firestore,n instanceof an?n.converter:null,new B(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new ig(this,"async_queue_retry"),this.Vu=()=>{const r=Yi();r&&x("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=Yi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Yi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new gt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!gn(e))throw e;x("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw we("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=Tl.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&z()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function cf(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class Cr extends Ol{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new af,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new af(e),this._firestoreClient=void 0,await e}}}function lf(n,e,t){t||(t="(default)");const r=$c(n,"firestore");if(r.isInitialized(t)){const s=r.getImmediate({identifier:t}),i=r.getOptions(t);if(xn(i,e))return s;throw new L(V.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new L(V.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:t})}function ni(n){if(n._terminated)throw new L(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||nA(n),n._firestoreClient}function nA(n){var e,t,r;const s=n._freezeSettings(),i=function(a,l,h,f){return new LE(a,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Ig(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Jb(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new kr(Te.fromBase64String(e))}catch(t){throw new L(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new kr(Te.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new L(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Y(this._lat,e._lat)||Y(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA=/^__.*__$/;class sA{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Bt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Lr(e,this.data,t,this.fieldTransforms)}}class Eg{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Bt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Tg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class ea{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new ea(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ro(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Tg(this.Cu)&&rA.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class iA{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ho(e)}Qu(e,t,r,s=!1){return new ea({Cu:e,methodName:t,qu:r,path:ge.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function bg(n){const e=n._freezeSettings(),t=Ho(n._databaseId);return new iA(n._databaseId,!!e.ignoreUndefinedProperties,t)}function oA(n,e,t,r,s,i={}){const o=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);jl("Data must be an object, but it was:",o,r);const a=Sg(r,o);let l,h;if(i.merge)l=new Ze(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const _=Pc(e,m,t);if(!o.contains(_))throw new L(V.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);Pg(f,_)||f.push(_)}l=new Ze(f),h=o.fieldTransforms.filter(m=>l.covers(m.field))}else l=null,h=o.fieldTransforms;return new sA(new ze(a),l,h)}class ri extends Br{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ri}}function Ag(n,e,t){return new ea({Cu:3,qu:e.settings.qu,methodName:n._methodName,xu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Fl extends Br{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=Ag(this,e,!0),r=this.Ku.map(i=>Xn(i,t)),s=new $n(r);return new $o(e.path,s)}isEqual(e){return e instanceof Fl&&xn(this.Ku,e.Ku)}}class Ul extends Br{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=Ag(this,e,!0),r=this.Ku.map(i=>Xn(i,t)),s=new qn(r);return new $o(e.path,s)}isEqual(e){return e instanceof Ul&&xn(this.Ku,e.Ku)}}class Bl extends Br{constructor(e,t){super(e),this.$u=t}_toFieldTransform(e){const t=new Tr(e.serializer,pp(e.serializer,this.$u));return new $o(e.path,t)}isEqual(e){return e instanceof Bl&&this.$u===e.$u}}function aA(n,e,t,r){const s=n.Qu(1,e,t);jl("Data must be an object, but it was:",s,r);const i=[],o=ze.empty();Qn(r,(l,h)=>{const f=$l(e,l,t);h=Ee(h);const m=s.Nu(f);if(h instanceof ri)i.push(f);else{const _=Xn(h,m);_!=null&&(i.push(f),o.set(f,_))}});const a=new Ze(i);return new Eg(o,a,s.fieldTransforms)}function cA(n,e,t,r,s,i){const o=n.Qu(1,e,t),a=[Pc(e,r,t)],l=[s];if(i.length%2!=0)throw new L(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<i.length;_+=2)a.push(Pc(e,i[_])),l.push(i[_+1]);const h=[],f=ze.empty();for(let _=a.length-1;_>=0;--_)if(!Pg(h,a[_])){const y=a[_];let b=l[_];b=Ee(b);const k=o.Nu(y);if(b instanceof ri)h.push(y);else{const C=Xn(b,k);C!=null&&(h.push(y),f.set(y,C))}}const m=new Ze(h);return new Eg(f,m,o.fieldTransforms)}function lA(n,e,t,r=!1){return Xn(t,n.Qu(r?4:3,e))}function Xn(n,e){if(Rg(n=Ee(n)))return jl("Unsupported field value:",e,n),Sg(n,e);if(n instanceof Br)return function(r,s){if(!Tg(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Xn(a,s.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Ee(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return pp(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=_e.fromDate(r);return{timestampValue:br(s.serializer,i)}}if(r instanceof _e){const i=new _e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:br(s.serializer,i)}}if(r instanceof Ml)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof kr)return{bytesValue:Sp(s.serializer,r._byteString)};if(r instanceof et){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:fl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ll)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.Bu("VectorValues must only contain numeric values.");return cl(a.serializer,l)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Xo(r)}`)}(n,e)}function Sg(n,e){const t={};return Hm(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qn(n,(r,s)=>{const i=Xn(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Rg(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof _e||n instanceof Ml||n instanceof kr||n instanceof et||n instanceof Br||n instanceof Ll)}function jl(n,e,t){if(!Rg(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Xo(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function Pc(n,e,t){if((e=Ee(e))instanceof Zo)return e._internalPath;if(typeof e=="string")return $l(n,e);throw Ro("Field path arguments must be of type string or ",n,!1,void 0,t)}const uA=new RegExp("[~\\*/\\[\\]]");function $l(n,e,t){if(e.search(uA)>=0)throw Ro(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Zo(...e.split("."))._internalPath}catch{throw Ro(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ro(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new L(V.INVALID_ARGUMENT,a+n+l)}function Pg(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new hA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ql("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class hA extends Cg{data(){return super.data()}}function ql(n,e){return typeof e=="string"?$l(n,e):e instanceof Zo?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new L(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class zl{}class dA extends zl{}function uf(n,e,...t){let r=[];e instanceof zl&&r.push(e),r=r.concat(t),function(i){const o=i.filter(l=>l instanceof Kl).length,a=i.filter(l=>l instanceof ta).length;if(o>1||o>0&&a>0)throw new L(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class ta extends dA{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ta(e,t,r)}_apply(e){const t=this._parse(e);return Dg(e._query,t),new Yn(e.firestore,e.converter,mc(e._query,t))}_parse(e){const t=bg(e.firestore);return function(i,o,a,l,h,f,m){let _;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new L(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){df(m,f);const y=[];for(const b of m)y.push(hf(l,i,b));_={arrayValue:{values:y}}}else _=hf(l,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||df(m,f),_=lA(a,o,m,f==="in"||f==="not-in");return te.create(h,f,_)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function fA(n,e,t){const r=e,s=ql("where",n);return ta._create(s,r,t)}class Kl extends zl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Kl(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:ae.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)Dg(o,l),o=mc(o,l)}(e._query,t),new Yn(e.firestore,e.converter,mc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function hf(n,e,t){if(typeof(t=Ee(t))=="string"){if(t==="")throw new L(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ap(e)&&t.indexOf("/")!==-1)throw new L(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ie.fromString(t));if(!B.isDocumentKey(r))throw new L(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return xs(n,new B(r))}if(t instanceof et)return xs(n,t._key);throw new L(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xo(t)}.`)}function df(n,e){if(!Array.isArray(n)||n.length===0)throw new L(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Dg(n,e){const t=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new L(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class mA{convertValue(e,t="none"){switch(Bn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(cn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw z()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Qn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>me(o.doubleValue));return new Ll(i)}convertGeoPoint(e){return new Ml(me(e.latitude),me(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=il(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Vs(e));default:return null}}convertTimestamp(e){const t=Nt(e);return new _e(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ie.fromString(e);G(Mp(r));const s=new Un(r.get(1),r.get(3)),i=new B(r.popFirst(5));return s.isEqual(t)||we(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Vg extends Cg{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Xi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ql("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Xi extends Vg{data(e={}){return super.data(e)}}class Ng{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new fs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Xi(this._firestore,this._userDataWriter,r.key,r,new fs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new L(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new Xi(s._firestore,s._userDataWriter,a.doc.key,a.doc,new fs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new Xi(s._firestore,s._userDataWriter,a.doc.key,a.doc,new fs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return a.type!==0&&(h=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),f=o.indexOf(a.doc.key)),{type:gA(a.type),doc:l,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function gA(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(n){n=on(n,et);const e=on(n.firestore,Cr);return Zb(ni(e),n._key).then(t=>xg(e,n,t))}class Gl extends mA{constructor(e){super(),this.firestore=e}convertBytes(e){return new kr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new et(this.firestore,null,t)}}function yA(n){n=on(n,Yn);const e=on(n.firestore,Cr),t=ni(e),r=new Gl(e);return kg(n._query),eA(t,n._query).then(s=>new Ng(e,r,n,s))}function ff(n,...e){var t,r,s;n=Ee(n);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||cf(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(cf(e[o])){const m=e[o];e[o]=(t=m.next)===null||t===void 0?void 0:t.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(s=m.complete)===null||s===void 0?void 0:s.bind(m)}let l,h,f;if(n instanceof et)h=on(n.firestore,Cr),f=Ys(n._key.path),l={next:m=>{e[o]&&e[o](xg(h,n,m))},error:e[o+1],complete:e[o+2]};else{const m=on(n,Yn);h=on(m.firestore,Cr),f=m._query;const _=new Gl(h);l={next:y=>{e[o]&&e[o](new Ng(h,_,m,y))},error:e[o+1],complete:e[o+2]},kg(n._query)}return function(_,y,b,k){const C=new xl(k),N=new Pl(y,C,b);return _.asyncQueue.enqueueAndForget(async()=>Al(await So(_),N)),()=>{C.Za(),_.asyncQueue.enqueueAndForget(async()=>Sl(await So(_),N))}}(ni(h),f,a,l)}function vA(n,e){return function(r,s){const i=new gt;return r.asyncQueue.enqueueAndForget(async()=>Ob(await Xb(r),s,i)),i.promise}(ni(n),e)}function xg(n,e,t){const r=t.docs.get(e._key),s=new Gl(n);return new Vg(n,s,e._key,r,new fs(t.hasPendingWrites,t.fromCache),e.converter)}class IA{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=bA(),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function wA(n){return new IA(n)}class EA{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Fs.provider,this._offlineComponentProvider={build:t=>new yg(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class TA{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Fs.provider,this._offlineComponentProvider={build:t=>new Qb(t,e==null?void 0:e.cacheSizeBytes)}}}function bA(n){return new EA(void 0)}function AA(){return new TA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=bg(e)}set(e,t,r){this._verifyNotCommitted();const s=qa(e,this._firestore),i=pA(s.converter,t,r),o=oA(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,He.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=qa(e,this._firestore);let o;return o=typeof(t=Ee(t))=="string"||t instanceof Zo?cA(this._dataReader,"WriteBatch.update",i._key,t,r,s):aA(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,He.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=qa(e,this._firestore);return this._mutations=this._mutations.concat(new zo(t._key,He.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new L(V.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function qa(n,e){if((n=Ee(n)).firestore!==e)throw new L(V.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RA(){return new ri("deleteField")}function PA(...n){return new Fl("arrayUnion",n)}function CA(...n){return new Ul("arrayRemove",n)}function kA(n){return new Bl("increment",n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DA(n){return ni(n=on(n,Cr)),new SA(n,e=>vA(n,e))}(function(e,t=!0){(function(s){Mr=s})(xr),yr(new On("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Cr(new oE(r.getProvider("auth-internal")),new uE(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new L(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Un(h.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),rn(ed,"4.7.3",e),rn(ed,"4.7.3","esm2017")})();const VA={apiKey:"AIzaSyD7u7pobCPzIXaZZP48wKs8KDtC8awNz6U",authDomain:"quadro-de-estrelas-8c81a.firebaseapp.com",projectId:"quadro-de-estrelas-8c81a",storageBucket:"quadro-de-estrelas-8c81a.firebasestorage.app",messagingSenderId:"974440745469",appId:"1:974440745469:web:96d2299325d9a26b93b194"},NA=["luanasabatovicz@gmail.com"],mf="Mundo de Estrelas",xA="1.0.0",Wl="./content/",Og=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,8);function OA(){const n=Wf(VA),e=nE(n);e.languageCode="pt";let t;try{t=lf(n,{localCache:wA({tabManager:AA()})})}catch{t=lf(n,{})}const r=o=>{var a,l;return o?{uid:o.uid,email:(o.email||"").toLowerCase(),name:o.displayName||"",verified:!!o.emailVerified,provider:((l=(a=o.providerData)==null?void 0:a[0])==null?void 0:l.providerId)||"password"}:null},s=o=>({id:o.id,exists:o.exists(),data:o.exists()?o.data():{}}),i=o=>o.map(([a,l,h])=>fA(a,l,h));return{demo:!1,onAuth:o=>zI(e,a=>o(r(a))),signInGoogle:async()=>{const o=new Tt;o.setCustomParameters({prompt:"select_account"}),await hw(e,o)},signInEmail:async(o,a)=>{await jI(e,o,a)},signUpEmail:async(o,a)=>{const l=await BI(e,o,a);await qh(l.user)},resendVerification:async()=>{e.currentUser&&await qh(e.currentUser)},resetPassword:async o=>{await UI(e,o)},reloadUser:async()=>{e.currentUser&&(await e.currentUser.reload(),await e.currentUser.getIdToken(!0))},signOut:async()=>{await KI(e)},get:async o=>s(await _A($a(t,o))),watchDoc:(o,a,l)=>ff($a(t,o),h=>a(s(h)),h=>l==null?void 0:l(h)),watchCol:(o,a,l,h)=>ff(uf(of(t,o),...i(a)),f=>l(f.docs.map(s)),f=>h==null?void 0:h(f)),queryOnce:async(o,a)=>(await yA(uf(of(t,o),...i(a)))).docs.map(s),write:async o=>{for(let a=0;a<o.length;a+=450){const l=DA(t);for(const h of o.slice(a,a+450)){const f=$a(t,h.path);h.kind==="set"?l.set(f,h.data,{merge:!!h.merge}):h.kind==="update"?l.update(f,h.data):l.delete(f)}await l.commit()}},fv:{inc:o=>kA(o),union:(...o)=>PA(...o),remove:(...o)=>CA(...o),del:()=>RA()},newId:Og}}const Zi="__inc__",eo="__union__",to="__remove__",Mg="__del__",MA=n=>n&&typeof n=="object"&&!Array.isArray(n)&&(Zi in n||eo in n||to in n||Mg in n);function LA(){const n="mde.demo.v1";let e={};try{e=JSON.parse(localStorage.getItem(n)||"{}")}catch{e={}}const t=()=>{try{localStorage.setItem(n,JSON.stringify(e))}catch{}},r=new Map,s=new Set,i={uid:"demo-user",email:"demo@mundodeestrelas.app",name:"Família Demonstração",verified:!0,provider:"demo"},o=b=>b.split("/").pop(),a=b=>b.split("/").slice(0,-1).join("/"),l=b=>({id:o(b),exists:b in e,data:e[b]?JSON.parse(JSON.stringify(e[b])):{}}),h=(b,k)=>k.every(([C,N,O])=>{const U=FA(b,C);return N==="=="?U===O:N===">="?U>=O:N==="<="?U<=O:Array.isArray(U)&&U.includes(O)}),f=(b,k)=>Object.keys(e).filter(C=>a(C)===b&&h(e[C],k)).map(l),m=b=>{queueMicrotask(()=>{b.forEach(k=>{var C;return(C=r.get(k))==null?void 0:C.forEach(N=>N(l(k)))}),s.forEach(k=>{[...b].some(C=>a(C)===k.path)&&k.cb(f(k.path,k.filters))})})},_=(b,k,C)=>{for(const[N,O]of Object.entries(k)){const U=C?N.split("."):[N];let M=b;for(const $ of U.slice(0,-1))(typeof M[$]!="object"||M[$]===null)&&(M[$]={}),M=M[$];const q=U[U.length-1];if(MA(O)){const $=O;if(Zi in $)M[q]=(Number(M[q])||0)+$[Zi];else if(eo in $){const T=Array.isArray(M[q])?M[q]:[];M[q]=[...T,...$[eo].filter(v=>!T.includes(v))]}else to in $?M[q]=(Array.isArray(M[q])?M[q]:[]).filter(T=>!$[to].includes(T)):delete M[q]}else O&&typeof O=="object"&&!Array.isArray(O)&&!C?(M[q]=typeof M[q]=="object"&&M[q]?M[q]:{},_(M[q],O,!1)):M[q]=JSON.parse(JSON.stringify(O))}},y=new Set;return{demo:!0,onAuth:b=>(y.add(b),queueMicrotask(()=>b(i)),()=>y.delete(b)),signInGoogle:async()=>{},signInEmail:async()=>{},signUpEmail:async()=>{},resendVerification:async()=>{},resetPassword:async()=>{},reloadUser:async()=>{},signOut:async()=>{try{localStorage.removeItem(n)}catch{}location.reload()},get:async b=>l(b),watchDoc:(b,k)=>(r.has(b)||r.set(b,new Set),r.get(b).add(k),queueMicrotask(()=>k(l(b))),()=>{var C;return(C=r.get(b))==null?void 0:C.delete(k)}),watchCol:(b,k,C)=>{const N={path:b,filters:k,cb:C};return s.add(N),queueMicrotask(()=>C(f(b,k))),()=>s.delete(N)},queryOnce:async(b,k)=>f(b,k),write:async b=>{const k=new Set;for(const C of b){if(C.kind==="delete")delete e[C.path];else if(C.kind==="set")(!C.merge||!e[C.path])&&(e[C.path]={}),_(e[C.path],C.data,!1);else{if(!e[C.path])throw Object.assign(new Error("not-found"),{code:"not-found"});_(e[C.path],C.data,!0)}k.add(C.path)}t(),m(k)},fv:{inc:b=>({[Zi]:b}),union:(...b)=>({[eo]:b}),remove:(...b)=>({[to]:b}),del:()=>({[Mg]:!0})},newId:Og}}function FA(n,e){return e.split(".").reduce((t,r)=>t==null?void 0:t[r],n)}const pf=n=>String(n).padStart(2,"0");function Hl(n=new Date){return`${n.getFullYear()}-${pf(n.getMonth()+1)}-${pf(n.getDate())}`}function Wn(n){const[e,t,r]=n.split("-").map(Number);return new Date(e,t-1,r)}function UA(n,e){const t=Wn(n);return t.setDate(t.getDate()+e),Hl(t)}function Ql(n,e){return Math.round((Wn(e).getTime()-Wn(n).getTime())/864e5)}let Lg=null;function BA(n){Lg=n&&/^\d{4}-\d{2}-\d{2}$/.test(n)?n:null}const Jl=()=>Lg||Hl(),jA=["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],$A=["domingo","segunda","terça","quarta","quinta","sexta","sábado"];function hn(n,e=!1){const t=Wn(n);return(e?$A[t.getDay()]+", ":"")+`${t.getDate()} de ${jA[t.getMonth()]}`}function Fg(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function qA(n){let e=n||1;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Dr(n,e,t){if(!n.length)return;const r=n.length,s=Math.floor(Wn(t).getTime()/864e5),i=Math.floor(s/r),o=(s%r+r)%r,a=qA(Fg(e+":"+i)),l=[...Array(r).keys()];for(let h=r-1;h>0;h--){const f=Math.floor(a()*(h+1));[l[h],l[f]]=[l[f],l[h]]}return n[l[o]]}async function Yl(n){const e=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(n));return[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")}const Ug=()=>[...crypto.getRandomValues(new Uint8Array(8))].map(n=>n.toString(16).padStart(2,"0")).join("");function Us(n,e=Jl()){if(!n)return 8;const t=Wn(n),r=Wn(e);let s=r.getFullYear()-t.getFullYear();return(r.getMonth()<t.getMonth()||r.getMonth()===t.getMonth()&&r.getDate()<t.getDate())&&s--,Math.max(0,s)}function Bg(n){return n<=4?0:n<=7?1:n<=10?2:n<=13?3:4}function zA(n){return n<=6?"p":n<=11?"m":"g"}function Vr(n,e){return n.replace(/\{([^|{}]*)\|([^|{}]*)\}/g,(t,r,s)=>e==="f"?s:r)}function KA(n){return n.trim().split(/\s+/).slice(0,2).map(e=>{var t;return((t=e[0])==null?void 0:t.toUpperCase())||""}).join("")}function GA(n,e,t="application/json"){const r=document.createElement("a");r.href=URL.createObjectURL(new Blob([e],{type:t})),r.download=n,document.body.appendChild(r),r.click(),setTimeout(()=>{URL.revokeObjectURL(r.href),r.remove()},500)}function WA(n,e=240){return new Promise((t,r)=>{const s=new Image,i=URL.createObjectURL(n);s.onload=()=>{const o=document.createElement("canvas");o.width=o.height=e;const a=o.getContext("2d"),l=Math.min(s.width,s.height);a.drawImage(s,(s.width-l)/2,(s.height-l)/2,l,l,0,0,e,e),URL.revokeObjectURL(i),t(o.toDataURL("image/jpeg",.8))},s.onerror=()=>{URL.revokeObjectURL(i),r(new Error("imagem inválida"))},s.src=i})}const Ni=new Map;function yt(n){return Ni.has(n)||Ni.set(n,fetch(Wl+n,{cache:"no-cache"}).then(e=>{if(!e.ok)throw new Error(`${n}: ${e.status}`);return e.json()}).catch(e=>{throw Ni.delete(n),e})),Ni.get(n)}const xt=n=>Wl+n,Oe=(n,e)=>`${Wl}seasons/${n}/${e}`,jg=()=>yt("seasons/index.json"),na=n=>yt(`seasons/${n}/season.json`);async function HA(n){try{return(await J.get(`contentOverrides/${n}`)).data.slots||{}}catch{return{}}}const $g=()=>yt("noite/natal.json"),QA=()=>yt("noite/mensagens.json"),JA=()=>yt("noite/oracoes.json"),YA=()=>yt("advento/advento.json"),XA=()=>yt("desafios/desafios.json"),ZA=()=>yt("calma/calma.json"),eS=()=>yt("modelos.json");function Ct(n,e=[]){const[t,r]=j(null);return it(()=>{let s=!0;return n().then(i=>s&&r(i)).catch(i=>console.error(i)),()=>{s=!1}},e),t}const nt={get(n){try{return localStorage.getItem(n)}catch{return null}},set(n,e){try{e==null?localStorage.removeItem(n):localStorage.setItem(n,e)}catch{}}},qg=(()=>{const n=new URLSearchParams(location.search);n.get("demo")==="1"&&nt.set("mde.mode","demo"),n.get("demo")==="0"&&nt.set("mde.mode",null);const e=nt.get("mde.mode")==="demo";if(e){const t=n.get("hoje");t!==null&&nt.set("mde.hoje",t||null),BA(nt.get("mde.hoje"))}return e})(),J=qg?LA():OA();let xe={ready:!1,demo:qg,user:null,today:Jl(),families:[],invites:[],familiesLoaded:!1,familyId:nt.get("mde.family"),family:null,children:[],items:[],entries:[],requests:[],progress:{},season:null,slots:{},ui:{kidMode:nt.get("mde.kidMode")==="1",kidId:nt.get("mde.kidId"),adminUntil:0,child:nt.get("mde.child"),tab:"hoje",screen:null},toast:null,error:null,offline:!navigator.onLine};const Cc=new Set;let kc=0;const se=()=>xe;function pe(n){const e=typeof n=="function"?n(xe):n;xe={...xe,...e},kc++,Cc.forEach(t=>t())}function Se(n){pe(e=>({ui:{...e.ui,...n}})),"kidMode"in n&&nt.set("mde.kidMode",n.kidMode?"1":null),"kidId"in n&&nt.set("mde.kidId",n.kidId||null),"child"in n&&nt.set("mde.child",n.child||null)}function Z(){const[,n]=j(0),e=kc;return it(()=>{const t=()=>n(r=>r+1);return Cc.add(t),kc!==e&&t(),()=>{Cc.delete(t)}},[]),xe}let gf;function at(n,e){clearTimeout(gf),pe({toast:{text:n,kind:e,id:Date.now()}}),gf=setTimeout(()=>pe({toast:null}),e==="error"?6e3:3200)}function zg(n,e="Não foi possível salvar"){console.error(n);const t=(n==null?void 0:n.code)||"",r=t.includes("permission")?"sem permissão (as regras do banco já foram publicadas?)":t.includes("unavailable")?"sem conexão; tente de novo":(n==null?void 0:n.message)||String(n);at(`${e}: ${r}`,"error")}let xi=[],dr=[];function Xl(){dr.forEach(n=>n()),dr=[]}function tS(n){Xl();const e=`families/${n}`,t=r=>{console.error(r),pe({error:(r==null?void 0:r.code)||String(r)})};dr.push(J.watchDoc(e,r=>{var o,a,l;if(!r.exists){pe({family:null});return}const s={id:r.id,...r.data},i=(a=(o=xe.family)==null?void 0:o.season)==null?void 0:a.runId;pe({family:s}),((l=s.season)==null?void 0:l.runId)!==i&&nS(n,s)},t)),dr.push(J.watchCol(`${e}/children`,[],r=>{const s=r.map(o=>({id:o.id,...o.data})).sort((o,a)=>o.order-a.order||o.name.localeCompare(a.name)),i={children:s};!s.find(o=>o.id===xe.ui.child)&&s[0]&&(i.ui={...xe.ui,child:s[0].id}),pe(i)},t)),dr.push(J.watchCol(`${e}/items`,[],r=>pe({items:r.map(s=>({id:s.id,...s.data})).sort((s,i)=>s.order-i.order)}),t)),Kg(n),dr.push(J.watchCol(`${e}/requests`,[["status","==","pending"]],r=>pe({requests:r.map(s=>({id:s.id,...s.data})).sort((s,i)=>s.at-i.at)}),t))}let Oi=null;function Kg(n){Oi==null||Oi();const e=UA(xe.today,-7);Oi=J.watchCol(`families/${n}/entries`,[["day",">=",e]],t=>pe({entries:t.map(r=>({id:r.id,...r.data})).sort((r,s)=>r.at-s.at)}))}let os=null;async function nS(n,e){if(os==null||os(),os=null,!e.season){pe({season:null,progress:{}});return}const t=e.season;os=J.watchCol(`families/${n}/progress`,[["runId","==",t.runId]],r=>{const s={};r.forEach(i=>{const o={id:i.id,...i.data};s[o.child]=o}),pe({progress:s})});try{const[r,s]=await Promise.all([na(t.seasonId),HA(t.seasonId)]);pe({season:r,slots:s})}catch(r){console.error(r),pe({error:"Não foi possível carregar a temporada."})}}function Bs(n){nt.set("mde.family",n),pe({familyId:n,family:null,children:[],items:[],entries:[],requests:[],progress:{},season:null}),n?tS(n):Xl()}function rS(){J.onAuth(n=>{if(xi.forEach(t=>t()),xi=[],!n){Xl(),pe({user:null,ready:!0,families:[],invites:[],familiesLoaded:!1,family:null});return}pe({user:n,ready:!0});let e=!1;xi.push(J.watchCol("families",[["memberIds","array-contains",n.uid]],t=>{var s,i;const r=t.map(o=>({id:o.id,...o.data}));if(pe({families:r,familiesLoaded:!0}),e)xe.familyId&&!r.find(o=>o.id===xe.familyId)&&Bs(((i=r[0])==null?void 0:i.id)||null);else{e=!0;const o=xe.familyId&&r.find(a=>a.id===xe.familyId)?xe.familyId:((s=r[0])==null?void 0:s.id)||null;Bs(o)}},t=>{console.error(t),pe({familiesLoaded:!0,error:(t==null?void 0:t.code)||String(t)})})),n.email&&n.verified&&xi.push(J.watchCol("families",[["invites","array-contains",n.email]],t=>pe({invites:t.map(r=>({id:r.id,...r.data}))}),()=>{}))}),setInterval(()=>{const n=Jl();n!==xe.today&&(pe({today:n}),xe.familyId&&Kg(xe.familyId))},3e4),addEventListener("online",()=>pe({offline:!1})),addEventListener("offline",()=>pe({offline:!0}))}const _f={dailyGoalPct:70,perfectBonus:5,kidMarks:"pedido",pinHash:"",pinSalt:"",modules:{christian:!0,english:!0,calm:!0,advent:!0,challenges:!0}},Me=n=>{var e;return{..._f,...(n==null?void 0:n.settings)||{},modules:{..._f.modules,...((e=n==null?void 0:n.settings)==null?void 0:e.modules)||{}}}},js=(n,e,t)=>n.filter(r=>{var s;return r.active!==!1&&r.kind===t&&(!((s=r.kids)!=null&&s.length)||r.kids.includes(e))}),Zl=(n,e,t)=>n.filter(r=>r.child===e&&r.day===t&&!r.undone);function dn(n,e,t,r,s){const i=js(e,r,"task"),o=Zl(t,r,s),a=new Set(o.filter(_=>_.kind==="task"&&_.itemId).map(_=>_.itemId)),l=i.reduce((_,y)=>_+y.stars,0),h=i.filter(_=>a.has(_.id)).reduce((_,y)=>_+y.stars,0),f=l?Math.round(h/l*100):0,m=Me(n).dailyGoalPct;return{tasks:i,done:a,earned:h,total:l,pct:f,goalMet:l>0&&f>=m,allDone:i.length>0&&i.every(_=>a.has(_.id)),dayStars:o.reduce((_,y)=>_+y.stars,0)}}const sS=(n,e)=>Ql(n.startDay,e)+1,Dc=(n,e)=>e>n.endDay,Vc=n=>n.items.filter(e=>e.kind==="daily"),iS=n=>n.items.filter(e=>e.kind==="milestone").sort((e,t)=>(e.milestone||0)-(t.milestone||0));function si(n,e,t){const r=js(n,e,"task").reduce((i,o)=>i+o.stars,0)||20,s=Ql(t.startDay,t.endDay)+1;return Math.max(60,Math.round(r*s*.75/10)*10)}const Gg=(n,e,t,r)=>(n==null?void 0:n.goal)||si(e,t,r);function eu(n,e,t,r,s,i,o){var U;const a=new Set(Object.keys((t==null?void 0:t.unlocked)||{})),l=Vc(n),h=(U=Object.entries((t==null?void 0:t.unlocked)||{}).find(([M,q])=>q.day===o&&l.some($=>$.id===M)))==null?void 0:U[0],f=h&&l.find(M=>M.id===h)||null,m=l.find(M=>!a.has(M.id))||null,_=sS(e,o),y=l.filter(M=>a.has(M.id)).length,b=Gg(t,s,i,e),k=(t==null?void 0:t.seasonStars)||0,C=iS(n).map((M,q)=>{const $=Math.round(b*(n.milestoneFractions[q]??1));return{item:M,at:$,reached:k>=$}}),N=C.find(M=>!M.reached);let O="";return _<1?O="A temporada ainda não começou.":Dc(e,o)?O="A temporada terminou.":f?O="A peça de hoje já foi conquistada.":m?y>=_?O="Amanhã chega uma peça nova.":r.goalMet||(O=r.total?"Falta completar a rotina de hoje.":"A rotina ainda não tem tarefas."):O="Todas as peças já foram conquistadas.",{unlocked:a,claimedToday:f,next:m,canClaim:!O,blockedReason:O,seasonStars:k,goal:b,milestones:C,nextMilestone:N?{item:N.item,at:N.at,need:N.at-k}:null,dayN:_,dailyCount:y}}const Wg=(n,e)=>n.items.filter(t=>{var r;return t.kind==="daily"?e.unlocked.has(t.id):(r=e.milestones.find(s=>s.item.id===t.id))==null?void 0:r.reached}),oS=(n,e)=>zA(Us(n.birth,e)),aS=(n,e)=>Math.max(0,Math.min(4,Bg(Us(n.birth,e))+((n.maturity||2)-2))),Ke=()=>{const n=se().family;if(!n)throw new Error("Nenhuma família selecionada");return n},Ce=n=>`families/${Ke().id}/${n}`,Hg=()=>{var n;return se().ui.kidMode?"kid":((n=se().user)==null?void 0:n.uid)||"?"},tu=()=>{var n;return NA.includes(((n=se().user)==null?void 0:n.email)||"")||se().demo};async function oe(n,e,t){try{return await J.write(n),e&&at(e),!0}catch(r){return zg(r,t),!1}}function fn(n,e,t){const r=Ke(),s=[],i={balance:J.fv.inc(e)};e>0&&(i.lifetime=J.fv.inc(e)),s.push({kind:"update",path:Ce(`children/${n}`),data:i});const o=r.season;return t&&e>0&&o&&se().today>=o.startDay&&se().today<=o.endDay&&s.push({kind:"set",merge:!0,path:Ce(`progress/${o.runId}_${n}`),data:{runId:o.runId,child:n,seasonId:o.seasonId,seasonStars:J.fv.inc(e)}}),s}function mn(n){var s;const e=J.newId(),t=Ke(),r={...n,day:n.day||se().today,at:Date.now(),by:Hg()};return(s=t.season)!=null&&s.runId&&(r.runId=t.season.runId),{id:e,op:{kind:"set",path:Ce(`entries/${e}`),data:r}}}const za=new Set;async function $s(n,e,t){const r=se();if(e.kind==="task"){const o=`${n}:${e.id}:${r.today}`;if(za.has(o)||dn(r.family,r.items,r.entries,n,r.today).done.has(e.id))return!0;za.add(o),setTimeout(()=>za.delete(o),1500)}const s=e.kind==="bad"?-Math.abs(e.stars):Math.abs(e.stars),i=[mn({child:n,kind:e.kind,itemId:e.id,label:e.label,emoji:e.emoji,stars:s}).op,...fn(n,s,!0)];if(e.kind==="task"){const o=dn(r.family,r.items,r.entries,n,r.today),a=o.tasks.length>0&&o.tasks.every(f=>f.id===e.id||o.done.has(f.id)),l=r.entries.some(f=>f.child===n&&f.day===r.today&&f.kind==="bonus"&&!f.undone),h=Me(r.family).perfectBonus;a&&!l&&h>0&&(i.push(mn({child:n,kind:"bonus",label:"Rotina completa",emoji:"🌟",stars:h}).op,...fn(n,h,!0)),setTimeout(()=>at(`Rotina completa! +${h} de bônus`),400))}return oe(i)}async function Qg(n){const e=se(),t=[{kind:"update",path:Ce(`entries/${n.id}`),data:{undone:!0}},...yf(n)];if(n.kind==="task"){const r=e.entries.find(s=>s.child===n.child&&s.day===n.day&&s.kind==="bonus"&&!s.undone);r&&t.push({kind:"update",path:Ce(`entries/${r.id}`),data:{undone:!0}},...yf(r))}return oe(t,"Desfeito")}function yf(n){var s;const e=Ke(),t=[],r={balance:J.fv.inc(-n.stars)};return n.stars>0&&(r.lifetime=J.fv.inc(-n.stars)),t.push({kind:"update",path:Ce(`children/${n.child}`),data:r}),n.stars>0&&n.runId&&((s=e.season)==null?void 0:s.runId)===n.runId&&t.push({kind:"set",merge:!0,path:Ce(`progress/${n.runId}_${n.child}`),data:{runId:n.runId,child:n.child,seasonId:e.season.seasonId,seasonStars:J.fv.inc(-n.stars)}}),t}async function cS(n,e,t){return oe([mn({child:n,kind:"adjust",label:t||"Ajuste",emoji:e>=0?"➕":"➖",stars:e}).op,...fn(n,e,!1)],"Ajuste registrado")}async function Jg(n,e,t,r,s,i){return oe([mn({child:n,kind:e,label:t,emoji:r,stars:s}).op,...fn(n,s,!0)],i)}async function lS(n,e){return(n.balance||0)<e.stars?(at(`Faltam ${e.stars-(n.balance||0)} estrelas para ${e.label}`),!1):oe([mn({child:n.id,kind:"reward",itemId:e.id,label:e.label,emoji:e.emoji,stars:-e.stars}).op,...fn(n.id,-e.stars,!1)],`${e.label} trocado!`)}async function nu(n,e,t,r,s,i){const o=se();if(o.requests.some(h=>h.child===n&&h.label===t&&h.day===o.today))return at("Esse pedido já está esperando um adulto"),!1;const a=J.newId(),l={child:n,kind:e,label:t,emoji:r,stars:s,day:o.today,at:Date.now(),status:"pending"};return i&&(l.itemId=i),oe([{kind:"set",path:Ce(`requests/${a}`),data:l}],"Pedido enviado para um adulto")}async function vf(n,e){var s;const t=se(),r={kind:"update",path:Ce(`requests/${n.id}`),data:{status:e?"ok":"no",resolvedAt:Date.now(),resolvedBy:((s=t.user)==null?void 0:s.uid)||""}};if(!e)return oe([r],"Pedido recusado");if(n.kind==="task"){const i=t.items.find(o=>o.id===n.itemId);return i?(await oe([r]),$s(n.child,i)):oe([r])}if(n.kind==="reward"){const i=t.children.find(a=>a.id===n.child),o=t.items.find(a=>a.id===n.itemId);return!i||!o?oe([r]):(i.balance||0)<o.stars?(at("Saldo insuficiente para esse prêmio"),!1):oe([r,mn({child:n.child,kind:"reward",itemId:o.id,label:o.label,emoji:o.emoji,stars:-o.stars}).op,...fn(n.child,-o.stars,!1)],"Prêmio liberado")}return oe([r,mn({child:n.child,kind:"challenge",label:n.label,emoji:n.emoji,stars:n.stars}).op,...fn(n.child,n.stars,!0)],"Desafio aprovado")}async function uS(n,e){const r=Ke().season;return oe([{kind:"set",merge:!0,path:Ce(`progress/${r.runId}_${n}`),data:{runId:r.runId,child:n,seasonId:r.seasonId,unlocked:{[e]:{at:Date.now(),day:se().today}}}}])}async function If(n,e){const t=Ke();t.season&&await J.write([{kind:"set",merge:!0,path:Ce(`progress/${t.season.runId}_${n}`),data:{runId:t.season.runId,child:n,seasonId:t.season.seasonId,seenMilestones:e}}]).catch(()=>{})}async function hS(n,e,t,r){const s=se(),i=`${s.today.slice(0,4)}-${String(n).padStart(2,"0")}`,o=[{kind:"set",path:Ce(`advent/${i}`),data:{n,at:Date.now(),by:Hg()}}];return s.children.forEach(a=>o.push(mn({child:a.id,kind:"advent",label:`Advento: ${t}`,emoji:r,stars:e}).op,...fn(a.id,e,!0))),oe(o,`Portinha ${n} aberta! +${e} para cada criança`)}async function dS(n){const e=n.id||J.newId(),t={emoji:n.emoji||"⭐",label:n.label||"",stars:Math.max(0,Math.round(n.stars||0)),kind:n.kind,period:n.period||"livre",kids:n.kids||[],order:n.order??Date.now(),active:n.active!==!1,clip:n.clip||""};return oe([{kind:"set",path:Ce(`items/${e}`),data:t}],"Salvo")}const fS=n=>oe([{kind:"update",path:Ce(`items/${n}`),data:{active:!1}}],"Removido"),mS=n=>oe(n.map((e,t)=>({kind:"update",path:Ce(`items/${e}`),data:{order:t}})));function pS(n,e,t){const r=[];let s=0;for(const i of e){const o=i.bands?t.filter(l=>i.bands.includes(l.band)).map(l=>l.id):[];if(i.bands&&!o.length)continue;const a=!i.bands||o.length===t.length;r.push({kind:"set",path:`families/${n}/items/${J.newId()}`,data:{kind:i.kind,emoji:i.emoji,label:i.label,stars:i.stars,period:i.period||"livre",kids:a?[]:o,order:s++,active:!0}})}return r}async function gS(n){const e=Ke(),t=!n.id,r=n.id||J.newId(),s={name:n.name.trim(),birth:n.birth||"",gender:n.gender||"x",color:n.color||"#8E2C2C",maturity:n.maturity||2,english:n.english!==!1};n.photo!==void 0&&(s.photo=n.photo||"");const i=[];return t?(Object.assign(s,{balance:0,lifetime:0,order:se().children.length}),i.push({kind:"set",path:Ce(`children/${r}`),data:s})):i.push({kind:"update",path:Ce(`children/${r}`),data:s}),t&&e.season&&i.push(ru(e.id,e.season,r,si(se().items,r,e.season))),oe(i,"Salvo")}const _S=n=>oe([{kind:"delete",path:Ce(`children/${n}`)}],"Criança removida"),ru=(n,e,t,r)=>({kind:"set",merge:!0,path:`families/${n}/progress/${e.runId}_${t}`,data:{runId:e.runId,child:t,seasonId:e.seasonId,goal:r,seasonStars:J.fv.inc(0),unlocked:{},seenMilestones:0}}),yS=(n,e)=>{const t=Ke();return oe([{kind:"set",merge:!0,path:Ce(`progress/${t.season.runId}_${n}`),data:{runId:t.season.runId,child:n,seasonId:t.season.seasonId,goal:e}}],"Meta atualizada")};async function ws(n){const e={};for(const[t,r]of Object.entries(n))e[`settings.${t}`]=r;return oe([{kind:"update",path:`families/${Ke().id}`,data:e}],"Configuração salva")}async function vS(n){const e=Ug();return ws({pinSalt:e,pinHash:await Yl(e+n)})}async function Yg(n){const e=Me(Ke());return e.pinHash?await Yl(e.pinSalt+n)===e.pinHash:!0}const IS=n=>oe([{kind:"update",path:`families/${Ke().id}`,data:{name:n.trim()}}],"Nome salvo"),wS=n=>oe([{kind:"update",path:`families/${Ke().id}`,data:{invites:J.fv.union(n.trim().toLowerCase())}}],"Convite criado"),ES=n=>oe([{kind:"update",path:`families/${Ke().id}`,data:{invites:J.fv.remove(n)}}]);async function TS(n){return oe([{kind:"update",path:`families/${Ke().id}`,data:{[`members.${n}`]:J.fv.del(),memberIds:J.fv.remove(n)}}],"Responsável removido")}async function bS(n){const e=se().user;await oe([{kind:"update",path:`families/${n.id}`,data:{[`members.${e.uid}`]:{role:"parent",email:e.email,name:e.name||e.email},memberIds:J.fv.union(e.uid),invites:J.fv.remove(e.email)}}],`Você entrou na família ${n.name}`)&&Bs(n.id)}async function Xg(n){const e=se(),t=e.user,r=J.newId(),s=Ug(),i=await na(n.seasonId),o=Zg(i,e.today,n.startNow),a={...Me(null),pinSalt:n.pin?s:"",pinHash:n.pin?await Yl(s+n.pin):"",modules:n.modules},l=[{kind:"set",path:`families/${r}`,data:{name:n.name.trim(),owner:t.uid,license:n.license||(e.demo?"DEMO":""),createdAt:Date.now(),members:{[t.uid]:{role:"owner",email:t.email,name:t.name||t.email}},memberIds:[t.uid],invites:[],settings:a,season:o}}];e.demo||l.push({kind:"update",path:`licenses/${n.license}`,data:{usedBy:t.uid,family:r,usedAt:Date.now()}});const h=n.kids.map((_,y)=>({..._,id:J.newId(),order:y})),f=await eS(),m=pS(r,f.items,h.map(_=>({id:_.id,band:_.band})));h.forEach(_=>{l.push({kind:"set",path:`families/${r}/children/${_.id}`,data:{name:_.name.trim(),birth:_.birth,gender:_.gender,color:_.color,maturity:2,english:n.modules.english,balance:0,lifetime:0,order:_.order}});const y=m.filter(k=>k.kind==="set"&&k.data.kind==="task"&&(!k.data.kids.length||k.data.kids.includes(_.id))).reduce((k,C)=>k+C.data.stars,0),b=Math.round((new Date(o.endDay).getTime()-new Date(o.startDay).getTime())/864e5)+1;l.push(ru(r,o,_.id,Math.max(60,Math.round(y*b*.75/10)*10)))});try{return await J.write(l.slice(0,e.demo?l.length:2)),e.demo||await J.write(l.slice(2)),await J.write(m),Bs(r),at("Família criada! Bem-vindos ao Mundo de Estrelas"),!0}catch(_){return zg(_,"Não foi possível criar a família"),!1}}function Zg(n,e,t){const r=Number(e.slice(0,4)),s=n.dates.end<n.dates.start;let i="",o="";for(const l of[r-1,r,r+1])if(i=`${l}-${n.dates.start}`,o=`${s?l+1:l}-${n.dates.end}`,e<=o)break;const a=t||e>i?e:i;return{runId:`${n.id}-${a.replace(/-/g,"")}-${Math.random().toString(36).slice(2,6)}`,seasonId:n.id,version:n.version,startDay:a,endDay:o,startedAt:Date.now()}}async function wf(n,e){const t=Ke(),r=se(),s=await na(n),i=Zg(s,r.today,e),o=[{kind:"update",path:`families/${t.id}`,data:{season:i}}];return r.children.forEach(a=>o.push(ru(t.id,i,a.id,si(r.items,a.id,i)))),oe(o,`Temporada ${s.name} começou!`)}async function AS(n){const e=Ke(),t=se(),r=e.season,s=t.season;if(!r||!s)return!1;const i=[];return t.children.forEach(o=>{const a=t.progress[o.id],l=Object.keys((a==null?void 0:a.unlocked)||{}),h=(a==null?void 0:a.goal)||si(t.items,o.id,r);s.items.filter(f=>f.kind==="milestone").forEach((f,m)=>{((a==null?void 0:a.seasonStars)||0)>=Math.round(h*(s.milestoneFractions[m]??1))&&l.push(f.id)}),i.push({kind:"set",path:`families/${e.id}/album/${r.runId}_${o.id}`,data:{runId:r.runId,seasonId:r.seasonId,seasonName:s.name,child:o.id,childName:o.name,from:r.startDay,to:t.today<r.endDay?t.today:r.endDay,seasonStars:(a==null?void 0:a.seasonStars)||0,items:l,thumb:n[o.id]||"",createdAt:Date.now()}})}),i.push({kind:"update",path:`families/${e.id}`,data:{season:null,lastSeason:r}}),oe(i,"Temporada guardada no álbum de aventuras")}async function e_(n,e){var i;const t=[],r=[],s="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";for(let o=0;o<n;o++){const a="MDE-"+Array.from(crypto.getRandomValues(new Uint8Array(8)),l=>s[l%s.length]).join("").replace(/(.{4})(.{4})/,"$1-$2");t.push(a),r.push({kind:"set",path:`licenses/${a}`,data:{createdAt:Date.now(),createdBy:((i=se().user)==null?void 0:i.email)||"",note:e,usedBy:null}})}return await oe(r,`${n} código(s) criado(s)`)?t:[]}const SS=(n,e)=>{var t;return oe([{kind:"set",path:`contentOverrides/${n}`,data:{slots:e,updatedAt:Date.now(),by:((t=se().user)==null?void 0:t.email)||""}}],"Posições salvas para todas as famílias")};function RS(){const n=se();return JSON.stringify({exportedAt:new Date().toISOString(),family:n.family,children:n.children.map(e=>({...e,photo:e.photo?"(foto omitida)":""})),items:n.items,progress:n.progress,recentEntries:n.entries},null,2)}function Ot({child:n,size:e=44,ring:t}){return u("span",{class:"avatar"+(t?" ring":""),style:{width:e,height:e,background:n.color,fontSize:e*.4},children:n.photo?u("img",{src:n.photo,alt:""}):KA(n.name)})}function Hn({n,big:e}){return u("span",{class:"starnum"+(e?" big":""),children:[u("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:u("path",{d:"M12 2.6l2.9 6 6.5.8-4.8 4.5 1.2 6.5L12 17.3l-5.8 3.1 1.2-6.5L2.6 9.4l6.5-.8z"})}),n]})}function Po({value:n,max:e,label:t,tone:r}){const s=e>0?Math.min(100,Math.round(n/e*100)):0;return u("div",{class:"bar "+(r||""),role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100,"aria-label":t,children:u("span",{style:{width:s+"%"}})})}function kt({src:n,emoji:e,alt:t,class:r}){const[s,i]=j(null);return it(()=>i(null),[n]),u("span",{class:"art "+(r||""),children:[s!==!1&&u("img",{src:n,alt:t,loading:"lazy",onLoad:()=>i(!0),onError:()=>i(!1),style:s?"":"opacity:0"}),s!==!0&&u("span",{class:"art-emoji","aria-hidden":"true",children:e})]})}function vt({title:n,onClose:e,children:t,wide:r}){const s=Ja(null);return it(()=>{var o;const i=a=>{a.key==="Escape"&&e()};return addEventListener("keydown",i),(o=s.current)==null||o.focus(),()=>removeEventListener("keydown",i)},[]),u("div",{class:"sheet-bg",onClick:i=>{i.target===i.currentTarget&&e()},children:u("div",{class:"sheet"+(r?" wide":""),role:"dialog","aria-modal":"true","aria-label":n,tabIndex:-1,ref:s,children:[u("div",{class:"sheet-head",children:[n&&u("h2",{children:n}),u("button",{class:"icon-btn",onClick:e,"aria-label":"Fechar",children:"✕"})]}),u("div",{class:"sheet-body",children:t})]})})}function Nr({title:n,onDone:e,onCancel:t,error:r}){const[s,i]=j("");it(()=>{s.length===4&&(e(s),setTimeout(()=>i(""),250))},[s]);const o=["1","2","3","4","5","6","7","8","9","","0","⌫"];return u("div",{class:"pinpad",children:[u("h2",{children:n}),u("div",{class:"pin-dots"+(r?" shake":""),children:[0,1,2,3].map(a=>u("span",{class:a<s.length?"on":""}))}),r&&u("p",{class:"err",children:r}),u("div",{class:"pin-keys",children:o.map(a=>a===""?u("span",{}):u("button",{onClick:()=>i(l=>a==="⌫"?l.slice(0,-1):(l+a).slice(0,4)),"aria-label":a==="⌫"?"Apagar":a,children:a}))}),t&&u("button",{class:"link",onClick:t,children:"Cancelar"})]})}function su({text:n,yes:e="Confirmar",onYes:t,onClose:r,danger:s}){return u(vt,{onClose:r,title:"Confirmar",children:[u("p",{children:n}),u("div",{class:"row end gap",children:[u("button",{class:"btn ghost",onClick:r,children:"Cancelar"}),u("button",{class:"btn "+(s?"danger":"primary"),onClick:()=>{t(),r()},children:e})]})]})}function PS({emoji:n,title:e,children:t}){return u("div",{class:"empty",children:[u("div",{class:"empty-emo",children:n}),u("h3",{children:e}),t]})}function ue({label:n,children:e,hint:t}){return u("label",{class:"field",children:[u("span",{class:"field-label",children:n}),e,t&&u("span",{class:"hint",children:t})]})}const no=["#8E2C2C","#2F5D4A","#C9A24A","#1F2E4A","#7A4E8C","#C2603A","#3E7CA6","#B5476B"];function t_({value:n,onChange:e}){return u("div",{class:"colors",children:no.map(t=>u("button",{type:"button",class:t===n?"on":"",style:{background:t},onClick:()=>e(t),"aria-label":"Cor "+t}))})}const CS=["⭐","🛏️","🪥","👕","🎒","📚","✏️","🧸","🍽️","🥦","🚿","🧹","🐶","🌱","🙏","📖","🎹","⚽","🧩","💤","🤝","💬","🫶","😊","🗣️","😤","📱","🎮","🍦","🎬","🍕","🛝","🎨","🏊","🎁","🧁","🚲","🏕️","🎟️","🕹️","💰","🌙","☀️","🧺","🍳","🧦","👟","💧"];function kS({value:n,onChange:e}){const[t,r]=j(!1);return u("div",{class:"emoji-pick",children:[u("button",{type:"button",class:"emoji-btn",onClick:()=>r(!t),"aria-label":"Escolher ícone",children:n||"⭐"}),t&&u("div",{class:"emoji-grid",children:[CS.map(s=>u("button",{type:"button",onClick:()=>{e(s),r(!1)},children:s})),u("input",{class:"emoji-own",placeholder:"outro",maxLength:4,onInput:s=>{const i=s.target.value;i&&e(i)}})]})]})}const DS=n=>{const e=(n==null?void 0:n.code)||"";return e.includes("invalid-credential")||e.includes("wrong-password")||e.includes("user-not-found")?"E-mail ou senha incorretos.":e.includes("email-already-in-use")?'Já existe uma conta com esse e-mail. Use "Entrar".':e.includes("weak-password")?"A senha precisa ter pelo menos 6 caracteres.":e.includes("invalid-email")?"E-mail inválido.":e.includes("popup-closed")||e.includes("cancelled-popup")?"":e.includes("too-many-requests")?"Muitas tentativas. Espere alguns minutos.":e.includes("network")?"Sem conexão com a internet.":e.includes("unauthorized-domain")?"Este endereço ainda não está autorizado no Firebase para entrar com Google.":e.includes("popup-blocked")?"O navegador bloqueou a janela do Google. Permita janelas para este site e tente de novo.":(n==null?void 0:n.message)||String(n)};function VS(){const[n,e]=j("start"),[t,r]=j(""),[s,i]=j(""),[o,a]=j(""),[l,h]=j(!1),[f,m]=j(!1),_=async y=>{a(""),h(!0);try{await y()}catch(b){a(DS(b))}h(!1)};return u("div",{class:"login",children:[u("img",{class:"login-cover"+(f?" on":""),src:xt("capa-app.jpg"),alt:`${mf}: pequenas atitudes, grandes conquistas, infinitos mundos.`,onLoad:()=>m(!0),onError:()=>m(!1)}),!f&&u("div",{class:"login-hero",children:[u("div",{class:"brand-mark","aria-hidden":"true",children:"✦"}),u("h1",{children:mf}),u("p",{class:"tagline",children:"Pequenas atitudes, grandes conquistas, infinitos mundos."})]}),u("div",{class:"card login-card",children:[n==="start"&&u(Re,{children:[u("button",{class:"btn primary block",disabled:l,onClick:()=>_(()=>J.signInGoogle()),children:"Entrar com Google"}),u("button",{class:"btn ghost block",onClick:()=>e("in"),children:"Entrar com e-mail"}),u("button",{class:"btn ghost block",onClick:()=>e("up"),children:"Criar conta com e-mail"})]}),n!=="start"&&u("form",{onSubmit:y=>{y.preventDefault(),_(()=>n==="in"?J.signInEmail(t,s):J.signUpEmail(t,s))},children:[u("h2",{children:n==="in"?"Entrar":"Criar conta"}),u("label",{class:"field",children:[u("span",{class:"field-label",children:"E-mail"}),u("input",{type:"email",autocomplete:"email",required:!0,value:t,onInput:y=>r(y.target.value)})]}),u("label",{class:"field",children:[u("span",{class:"field-label",children:"Senha"}),u("input",{type:"password",autocomplete:n==="in"?"current-password":"new-password",minLength:6,required:!0,value:s,onInput:y=>i(y.target.value)})]}),u("button",{class:"btn primary block",disabled:l,children:n==="in"?"Entrar":"Criar conta"}),n==="in"&&u("button",{type:"button",class:"link",onClick:()=>_(async()=>{if(!t)throw new Error("Digite seu e-mail primeiro.");await J.resetPassword(t),at("Enviamos um link para redefinir a senha")}),children:"Esqueci a senha"}),u("button",{type:"button",class:"link",onClick:()=>{e("start"),a("")},children:"Voltar"})]}),o&&u("p",{class:"err",children:o})]}),u("p",{class:"login-foot",children:u("a",{href:"?demo=1",class:"link",children:"Ver demonstração sem conta"})})]})}function NS(){var r;const n=se(),[e,t]=j(!1);return u("div",{class:"login",children:u("div",{class:"card login-card",children:[u("h2",{children:"Confirme seu e-mail"}),u("p",{children:["Enviamos um link para ",u("b",{children:(r=n.user)==null?void 0:r.email}),". Abra o e-mail, clique no link e volte aqui."]}),u("button",{class:"btn primary block",disabled:e,onClick:async()=>{t(!0),await J.reloadUser(),location.reload()},children:"Já confirmei"}),u("button",{class:"btn ghost block",onClick:async()=>{await J.resendVerification(),at("E-mail reenviado")},children:"Reenviar e-mail"}),u("button",{class:"link",onClick:()=>J.signOut(),children:"Sair"})]})})}let Co=null;const Nc=new Set,xS=()=>yt("clipart/index.json").then(n=>(Co={clips:n.clips.map(e=>({...e,tags:e.tags.map(n_)})),decor:n.decor},Nc.forEach(e=>e()),Co)).catch(()=>null);function iu(){const[,n]=j(0);return it(()=>{if(Co)return;const e=()=>n(t=>t+1);return Nc.add(e),xS(),()=>{Nc.delete(e)}},[]),Co}const n_=n=>n.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/\{[^}]*\}/g,""),xc=(n,e)=>(e==="f"?n.f:e==="m"?n.m:void 0)||n.file||n.m||n.f||"";function r_(n,e,t){if(!n||t==="none")return null;if(t)return n.clips.find(s=>s.id===t)||null;const r=" "+n_(e).replace(/[^a-z0-9 -]/g," ");for(const s of n.clips)if(s.tags.some(i=>r.includes(" "+i)))return s;return null}function ko({label:n,emoji:e,clip:t,gender:r,size:s=44}){const i=iu(),[o,a]=j(!1),l=r_(i,n,t);return!l||o?u("span",{class:"task-emo",style:{fontSize:Math.round(s*.55)},children:e}):u("img",{class:"clip",src:xt("clipart/"+xc(l,r)),alt:"",width:s,height:s,loading:"lazy",onError:()=>a(!0)})}function ii({name:n,class:e,size:t}){const r=iu(),[s,i]=j(!1),o=r==null?void 0:r.decor[n];return!o||s?null:u("img",{class:"decor "+(e||""),src:xt("clipart/"+o),alt:"",style:t?{width:t}:void 0,onError:()=>i(!0)})}function OS({value:n,label:e,gender:t,onChange:r}){const s=iu();if(!s)return null;const i=r_(s,e);return u("div",{class:"clip-pick",children:[u("button",{type:"button",class:n?"":"on",onClick:()=>r(void 0),title:"Automática",children:[i?u("img",{src:xt("clipart/"+xc(i,t)),alt:""}):u("span",{children:"auto"}),u("small",{children:"auto"})]}),u("button",{type:"button",class:n==="none"?"on":"",onClick:()=>r("none"),children:[u("span",{children:"😀"}),u("small",{children:"emoji"})]}),s.clips.map(o=>u("button",{type:"button",class:n===o.id?"on":"",onClick:()=>r(o.id),title:o.id,children:u("img",{src:xt("clipart/"+xc(o,t)),alt:o.id,loading:"lazy"})}))]})}const MS=[["christian","Conteúdo cristão","Histórias bíblicas, orações e mensagens de Jesus na noite."],["advent","Calendário do Advento","24 portinhas em dezembro, com uma atividade em família."],["english","Palavras em inglês","Cada peça da temporada traz uma palavra e uma frase."],["calm","Cantinho da calma","Respiração guiada e ideias para quando a emoção aperta."],["challenges","Desafios do dia","Um desafio por dia, de acordo com a idade."]];function LS(){var r;const n=Z(),[e,t]=j(!1);return e?u(FS,{onCancel:()=>t(!1)}):u("div",{class:"page narrow",children:[u("header",{class:"welcome-head",children:[u(ii,{name:"turma",class:"hero-decor"}),u("h1",{children:"Bem-vindos!"}),u("p",{class:"muted",children:(r=n.user)==null?void 0:r.email})]}),n.invites.map(s=>u("div",{class:"card",children:[u("h3",{children:["Convite para a família ",s.name]}),u("p",{class:"muted",children:"Você foi convidado para acompanhar as crianças desta família."}),u("button",{class:"btn primary block",onClick:()=>bS(s),children:"Entrar na família"})]})),u("div",{class:"card",children:[u("h3",{children:"Começar uma família nova"}),u("p",{class:"muted",children:n.demo?"Na demonstração você pode criar uma família de exemplo ou montar a sua.":"Você vai precisar do código de licença recebido na compra."}),u("button",{class:"btn primary block",onClick:()=>t(!0),children:"Criar família"}),n.demo&&u("button",{class:"btn ghost block",onClick:()=>Xg({name:"Família Exemplo",license:"DEMO",pin:"1234",seasonId:"vila-natal",startNow:!0,modules:{christian:!0,english:!0,calm:!0,advent:!0,challenges:!0},kids:[{name:"Lia",birth:`${Number(n.today.slice(0,4))-4}-03-10`,gender:"f",color:"#B5476B",band:0},{name:"Theo",birth:`${Number(n.today.slice(0,4))-10}-07-21`,gender:"m",color:"#2F5D4A",band:2},{name:"Bia",birth:`${Number(n.today.slice(0,4))-14}-01-05`,gender:"f",color:"#3E7CA6",band:4}]}),children:"Família de exemplo pronta (PIN 1234)"})]}),u("button",{class:"link",onClick:()=>J.signOut(),children:n.demo?"Sair da demonstração":"Sair"})]})}function FS({onCancel:n}){const e=se(),t=Ct(jg),[r,s]=j(e.demo?1:0),[i,o]=j(""),[a,l]=j(""),[h,f]=j(""),[m,_]=j([]),[y,b]=j({name:"",birth:"",gender:"f",color:no[0],band:2}),[k,C]=j({christian:!0,english:!0,calm:!0,advent:!0,challenges:!0}),[N,O]=j(""),[U,M]=j(""),[q,$]=j(!1),[T,v]=j(!1),I=t==null?void 0:t[0],E=I?`${e.today.slice(0,4)}-${I.dates.start}`:"",A=E&&e.today<E,R=async()=>{l("");const Q=i.trim().toUpperCase();try{const Le=await J.get(`licenses/${Q}`);if(!Le.exists)return l("Código não encontrado. Confira as letras e os traços.");if(Le.data.usedBy)return l("Este código já foi usado por outra família.");o(Q),s(1)}catch(Le){l("Não foi possível conferir o código agora: "+((Le==null?void 0:Le.code)||Le))}},w=()=>{if(!y.name.trim()||!y.birth)return;const Q=Us(y.birth,e.today);_([...m,{...y,band:Bg(Q)}]),b({name:"",birth:"",gender:"f",color:no[(m.length+1)%no.length],band:2})},lt=async Q=>{v(!0),await Xg({name:h,license:i,kids:m,pin:Q,modules:k,seasonId:(I==null?void 0:I.id)||"vila-natal",startNow:q||!A})||v(!1)};return u("div",{class:"page narrow onboarding",children:[u("div",{class:"steps","aria-label":`Passo ${r+1} de 6`,children:[0,1,2,3,4,5].map(Q=>u("span",{class:Q<=r?"on":""}))}),r===0&&u("div",{class:"card",children:[u("h2",{children:"Código da licença"}),u("p",{class:"muted",children:"Cada família usa um código, recebido na compra."}),u(ue,{label:"Código",children:u("input",{value:i,placeholder:"MDE-XXXX-XXXX",autocapitalize:"characters",onInput:Q=>o(Q.target.value)})}),a&&u("p",{class:"err",children:a}),tu()&&u("button",{class:"btn sm ghost",onClick:async()=>{const Q=await e_(1,"Família da administradora");Q[0]&&o(Q[0])},children:"Gerar um código para mim (administração)"}),u("div",{class:"row gap end",children:[u("button",{class:"btn ghost",onClick:n,children:"Voltar"}),u("button",{class:"btn primary",disabled:i.trim().length<6,onClick:R,children:"Continuar"})]})]}),r===1&&u("div",{class:"card",children:[u("h2",{children:"Como se chama a família?"}),u(ue,{label:"Nome da família",hint:"Aparece no topo do app. Ex.: Família Souza",children:u("input",{value:h,maxLength:40,onInput:Q=>f(Q.target.value)})}),u("div",{class:"row gap end",children:[u("button",{class:"btn ghost",onClick:e.demo?n:()=>s(0),children:"Voltar"}),u("button",{class:"btn primary",disabled:!h.trim(),onClick:()=>s(2),children:"Continuar"})]})]}),r===2&&u("div",{class:"card",children:[u("h2",{children:"Crianças e adolescentes"}),u("p",{class:"muted",children:"A idade define a rotina sugerida, os desafios e o jeito dos textos. Tudo pode ser mudado depois."}),m.map((Q,Le)=>u("div",{class:"kid-row",children:[u("span",{class:"dot",style:{background:Q.color}}),u("b",{children:Q.name}),u("span",{class:"muted",children:[Us(Q.birth,e.today)," anos"]}),u("button",{class:"icon-btn","aria-label":`Remover ${Q.name}`,onClick:()=>_(m.filter((jt,It)=>It!==Le)),children:"✕"})]})),u("div",{class:"subcard",children:[u(ue,{label:"Nome",children:u("input",{value:y.name,maxLength:24,onInput:Q=>b({...y,name:Q.target.value})})}),u(ue,{label:"Data de nascimento",children:u("input",{type:"date",value:y.birth,max:e.today,onInput:Q=>b({...y,birth:Q.target.value})})}),u(ue,{label:"Os textos devem tratar como",children:u("div",{class:"seg",children:[["f","menina"],["m","menino"],["x","neutro"]].map(([Q,Le])=>u("button",{type:"button",class:y.gender===Q?"on":"",onClick:()=>b({...y,gender:Q}),children:Le}))})}),u(ue,{label:"Cor",children:u(t_,{value:y.color,onChange:Q=>b({...y,color:Q})})}),u("button",{class:"btn block",disabled:!y.name.trim()||!y.birth,onClick:w,children:"Adicionar"})]}),u("div",{class:"row gap end",children:[u("button",{class:"btn ghost",onClick:()=>s(1),children:"Voltar"}),u("button",{class:"btn primary",disabled:!m.length,onClick:()=>s(3),children:"Continuar"})]})]}),r===3&&u("div",{class:"card",children:[u("h2",{children:"O que vai ter no app"}),MS.map(([Q,Le,jt])=>u("label",{class:"toggle",children:[u("input",{type:"checkbox",checked:k[Q],onChange:It=>C({...k,[Q]:It.target.checked})}),u("span",{children:[u("b",{children:Le}),u("small",{children:jt})]})]})),u("div",{class:"row gap end",children:[u("button",{class:"btn ghost",onClick:()=>s(2),children:"Voltar"}),u("button",{class:"btn primary",onClick:()=>s(4),children:"Continuar"})]})]}),r===4&&u("div",{class:"card",children:[u("h2",{children:"Primeira temporada"}),I?u(Re,{children:[u("div",{class:"season-pick",children:[I.cover&&u("img",{class:"season-cover",src:Oe(I.id,I.cover),alt:"",onError:Q=>Q.target.style.display="none"}),u("b",{children:I.name}),u("p",{class:"muted",children:I.tagline})]}),A?u(Re,{children:[u("p",{children:["Começa em ",hn(E),". Até lá, a rotina e os prêmios já funcionam."]}),u("label",{class:"toggle",children:[u("input",{type:"checkbox",checked:q,onChange:Q=>$(Q.target.checked)}),u("span",{children:[u("b",{children:"Começar a vila hoje"}),u("small",{children:"As peças começam a ser liberadas já, uma por dia."})]})]})]}):u("p",{children:"Começa hoje, com uma peça nova por dia."})]}):u("p",{class:"muted",children:"Carregando temporadas…"}),u("div",{class:"row gap end",children:[u("button",{class:"btn ghost",onClick:()=>s(3),children:"Voltar"}),u("button",{class:"btn primary",disabled:!I,onClick:()=>s(5),children:"Continuar"})]})]}),r===5&&u("div",{class:"card",children:T?u("p",{class:"center",children:"Preparando o mundo de vocês…"}):N?u(Nr,{title:"Repita o PIN",error:U,onDone:Q=>{Q===N?lt(Q):(M("Os PINs não conferem. Comece de novo."),O(""))},onCancel:()=>O("")}):u(Re,{children:[u(Nr,{title:"Crie um PIN de 4 números",error:U,onDone:Q=>{O(Q),M("")}}),u("p",{class:"muted center",children:"O PIN protege a área dos responsáveis e a saída do modo criança."})]})})]})}function US(n){const[e,t]=j(null);return it(()=>{if(!n){t(null);return}return J.watchDoc(n,t,()=>t(null))},[n]),e}function ou(n){const[e,t]=j(null);return it(()=>{if(!n){t(null);return}return J.watchCol(n,[],t,()=>t([]))},[n]),e}const ra=n=>{const e=se().family;return e?`families/${e.id}/${n}`:null};function au(){const n=Z();return n.children.length<2?null:u("div",{class:"child-tabs",role:"tablist",children:n.children.map(e=>u("button",{role:"tab","aria-selected":n.ui.child===e.id,class:n.ui.child===e.id?"on":"",onClick:()=>Se({child:e.id}),style:{"--c":e.color},children:[u(Ot,{child:e,size:30}),u("span",{children:e.name}),u(Hn,{n:e.balance||0})]}))})}function s_({child:n,kid:e}){var f,m;const t=Z(),r=Me(t.family),s=dn(t.family,t.items,t.entries,n.id,t.today),i=(f=t.family)==null?void 0:f.season,o=t.season,a=i&&o?eu(o,i,t.progress[n.id],s,t.items,n.id,t.today):null,l=Math.ceil(s.total*r.dailyGoalPct/100),h=()=>Se(e?{screen:"mundo"}:{tab:"mundo",screen:null});return u("div",{class:"card daycard",children:[u("div",{class:"daycard-top",children:[u("div",{children:[u("span",{class:"eyebrow",children:"Hoje"}),u("div",{class:"today-stars",children:[u(Hn,{n:s.dayStars,big:!0}),u("span",{class:"muted",children:["no dia · saldo ",n.balance||0]})]})]}),(a==null?void 0:a.next)&&!a.claimedToday&&u(kt,{class:"mini",src:Oe(o.id,a.next.img),emoji:a.next.emoji,alt:a.next.name}),(a==null?void 0:a.claimedToday)&&u(kt,{class:"mini",src:Oe(o.id,a.claimedToday.img),emoji:a.claimedToday.emoji,alt:a.claimedToday.name})]}),s.allDone&&u(ii,{name:"baloes",class:"daycard-decor"}),a&&o&&u(Re,{children:[u("div",{class:"goal-line",children:u("span",{children:a.claimedToday?u(Re,{children:["Peça do dia conquistada: ",u("b",{children:a.claimedToday.name})]}):a.canClaim?u("b",{children:"Peça do dia liberada!"}):s.goalMet?a.blockedReason:u(Re,{children:["Rotina: ",s.earned," de ",l," estrelas para a ",u("b",{children:"peça do dia"})]})})}),u(Po,{value:s.earned,max:l||1,label:"Rotina do dia",tone:s.goalMet?"gold":""}),a.canClaim&&u("button",{class:"btn primary block glow",onClick:h,children:["Buscar ",(m=a.next)==null?void 0:m.name]}),a.nextMilestone&&u("div",{class:"next-big",onClick:h,children:[u(kt,{class:"tiny",src:Oe(o.id,a.nextMilestone.item.img),emoji:a.nextMilestone.item.emoji,alt:""}),u("div",{children:[u("span",{class:"eyebrow",children:"Próxima grande conquista"}),u("b",{children:a.nextMilestone.item.name}),u("span",{class:"muted",children:[" · faltam ",a.nextMilestone.need," estrelas"]}),u(Po,{value:a.seasonStars,max:a.nextMilestone.at,tone:"gold",label:"Próxima grande conquista"})]})]}),!a.nextMilestone&&u("p",{class:"muted small",children:"Todas as grandes conquistas da temporada foram alcançadas!"})]}),!i&&!e&&u("p",{class:"muted small",children:"Nenhuma temporada ativa. Comece uma em Responsáveis → Temporada."})]})}function BS(){const n=Z();return n.requests.length?u("div",{class:"card requests",children:[u("h3",{children:"Pedidos esperando você"}),n.requests.map(e=>{const t=n.children.find(r=>r.id===e.child);return u("div",{class:"req",children:[t&&u(Ot,{child:t,size:30}),u("span",{class:"req-emo",children:e.emoji}),u("span",{class:"req-text",children:[u("b",{children:t==null?void 0:t.name})," ",e.kind==="reward"?"quer trocar por":e.kind==="challenge"?"fez o desafio":"fez"," ",u("b",{children:e.label})," ",u("span",{class:"muted",children:["(",e.kind==="reward"?"−":"+",e.stars,")"]})]}),u("button",{class:"btn sm ghost",onClick:()=>vf(e,!1),"aria-label":"Recusar",children:"Não"}),u("button",{class:"btn sm primary",onClick:()=>vf(e,!0),children:"Sim"})]})})]}):null}const i_=n=>{const e=Number(n.slice(5,7)),t=Number(n.slice(8,10));return e===12&&t<=24?t:0};function o_({kid:n}){const e=Z(),t=i_(e.today),r=US(t?ra(`advent/${e.today.slice(0,4)}-${String(t).padStart(2,"0")}`):null);return!Me(e.family).modules.advent||!t?null:u("button",{class:"card advent-card",onClick:()=>Se({screen:"advento"}),children:[u("span",{class:"advent-num",children:t}),u("span",{children:[u("span",{class:"eyebrow",children:"Calendário do Advento"}),u("b",{children:r!=null&&r.exists?"Portinha de hoje aberta":"Portinha de hoje esperando"}),u("span",{class:"muted small",children:r!=null&&r.exists?"Toque para rever a história.":n?"Toque para abrir!":"Abram juntos e ganhem estrelas."})]})]})}function a_(){const n=Z(),e=Ct(YA),t=n.today.slice(0,4),r=i_(n.today),[s,i]=j(r||null),o=jS(t);if(!e)return u("p",{class:"muted center",children:"Carregando…"});const a=s?e.doors[s-1]:null,l=s?o.has(s):!1;return u("div",{class:"page",children:[u("h2",{class:"page-title",children:"Calendário do Advento"}),!r&&u("p",{class:"muted",children:"As portinhas abrem de 1 a 24 de dezembro, uma por dia."}),u("div",{class:"advent-grid",children:e.doors.map((h,f)=>{const m=f+1,_=r>=m;return u("button",{class:"door"+(o.has(m)?" open":"")+(_?"":" locked"),disabled:!_,onClick:()=>i(m),"aria-label":`Portinha ${m}`,children:o.has(m)?u("span",{children:h.emo}):u("span",{children:m})})})}),a&&s&&u(vt,{title:`Portinha ${s}`,onClose:()=>i(null),children:[u(kt,{class:"wide-art",src:xt(`advento/${String(s).padStart(2,"0")}.jpg`),emoji:a.emo,alt:""}),u("h3",{children:a.t}),u("p",{class:"ref",children:a.ref}),u("p",{class:"story",children:a.s}),u("div",{class:"activity",children:[u("span",{class:"eyebrow",children:"Atividade em família"}),u("p",{children:a.a})]}),l?u("p",{class:"muted center",children:"Portinha aberta. As estrelas já foram entregues."}):u("button",{class:"btn primary block",onClick:async()=>{await hS(s,a.pts,a.t,a.emo)},children:["Abrir a portinha · +",a.pts," para cada criança"]})]})]})}function jS(n){const e=ou(ra("advent"));return new Set((e||[]).filter(t=>t.id.startsWith(n)).map(t=>Number(t.id.slice(5))))}function c_({child:n,kid:e}){const t=Z(),r=Ct(XA);if(!Me(t.family).modules.challenges||!r)return null;const s=aS(n,t.today),i=Dr(r.lists[s]||[],n.id+":desafio",t.today);if(!i)return null;const o=t.entries.some(f=>f.child===n.id&&f.day===t.today&&f.kind==="challenge"&&!f.undone),a=t.requests.some(f=>f.child===n.id&&f.kind==="challenge"&&f.day===t.today),l=Vr(i.t,n.gender),h=()=>e&&Me(se().family).kidMarks==="pedido"?nu(n.id,"challenge",l,i.e,i.s):Jg(n.id,"challenge",l,i.e,i.s,`Desafio cumprido! +${i.s}`);return u("div",{class:"card challenge"+(o?" done":""),children:[u("span",{class:"challenge-emo",children:u(ko,{label:l,emoji:i.e,gender:n.gender,size:52})}),u("div",{class:"grow",children:[u("span",{class:"eyebrow",children:["Desafio do dia · ",r.bands[s]]}),u("p",{children:l})]}),o?u("span",{class:"pill gold",children:"Feito!"}):a?u("span",{class:"pill",children:"Esperando"}):u("button",{class:"btn sm primary",onClick:h,children:["+",i.s]})]})}const Do=n=>oS(n,se().today),cu=[["manha","Manhã"],["tarde","Tarde"],["noite","Noite"],["livre","Ao longo do dia"]];function $S(){const n=Z(),e=n.children.find(t=>t.id===n.ui.child)||n.children[0];return e?u("div",{class:"page",children:[u(au,{}),u(BS,{}),u(s_,{child:e}),u(o_,{}),u(l_,{child:e}),u(c_,{child:e}),u(qS,{child:e}),u(zS,{child:e})]}):u("div",{class:"page",children:u("p",{class:"muted",children:"Cadastre uma criança em Responsáveis."})})}function l_({child:n,onTap:e}){const t=Z(),r=dn(t.family,t.items,t.entries,n.id,t.today);if(!r.tasks.length)return u("div",{class:"card",children:[u("h3",{children:"Rotina"}),u(ii,{name:"acenando",class:"empty-decor"}),u("p",{class:"muted",children:["Nenhuma tarefa para ",n.name,". Adicione em Responsáveis → Rotina."]})]});const s=a=>Zl(t.entries,n.id,t.today).find(l=>l.kind==="task"&&l.itemId===a),i=e||((a,l)=>{if(l){const h=s(a.id);h&&Qg(h)}else $s(n.id,a)}),o=new Set(t.requests.filter(a=>a.child===n.id&&a.kind==="task").map(a=>a.itemId));return u("div",{class:"card routine",children:[u("div",{class:"row between",children:[u("h3",{children:"Rotina"}),u("span",{class:"muted small",children:[r.done.size," de ",r.tasks.length]})]}),cu.map(([a,l])=>{const h=r.tasks.filter(f=>(f.period||"livre")===a);return h.length?u("div",{class:"period",children:[u("span",{class:"eyebrow",children:l}),h.map(f=>{const m=r.done.has(f.id);return u("button",{class:"task"+(m?" done":"")+(o.has(f.id)?" pend":""),onClick:()=>i(f,m),"aria-pressed":m,children:[u("span",{class:"check","aria-hidden":"true",children:m?"✓":""}),u(ko,{label:f.label,emoji:f.emoji,clip:f.clip,gender:n.gender,size:e?56:44}),u("span",{class:"task-label",children:Vr(f.label,n.gender)}),o.has(f.id)&&!m?u("span",{class:"pill",children:"pedido"}):u("span",{class:"task-stars",children:["+",f.stars]})]})})]}):null})]})}function qS({child:n}){const e=Z(),t=js(e.items,n.id,"good"),r=js(e.items,n.id,"bad"),[s,i]=j(!1),[o,a]=j(""),[l,h]=j("");return u("div",{class:"card",children:[u("h3",{children:"Atitudes"}),u("div",{class:"chips",children:t.map(f=>u("button",{class:"chip good",onClick:()=>$s(n.id,f),children:[u(ko,{label:f.label,emoji:f.emoji,clip:f.clip,gender:n.gender,size:30})," ",Vr(f.label,n.gender)," ",u("b",{children:["+",f.stars]})]}))}),r.length>0&&u(Re,{children:[u("span",{class:"eyebrow",children:"Combinados não cumpridos"}),u("div",{class:"chips",children:r.map(f=>u("button",{class:"chip bad",onClick:()=>$s(n.id,f),children:[u(ko,{label:f.label,emoji:f.emoji,clip:f.clip,gender:n.gender,size:30})," ",Vr(f.label,n.gender)," ",u("b",{children:["−",f.stars]})]}))})]}),u("div",{class:"row gap wrap",children:[u("button",{class:"btn sm ghost",onClick:()=>i(!0),children:"Ajuste manual"}),Me(e.family).modules.calm&&u("button",{class:"btn sm ghost",onClick:()=>Se({screen:"calma",screenArg:n.id}),children:"Cantinho da calma"})]}),s&&u(vt,{title:`Ajuste para ${n.name}`,onClose:()=>i(!1),children:[u(ue,{label:"Estrelas (use − para tirar)",children:u("input",{type:"number",inputMode:"numeric",value:o,onInput:f=>a(f.target.value)})}),u(ue,{label:"Motivo",children:u("input",{value:l,maxLength:60,onInput:f=>h(f.target.value)})}),u("button",{class:"btn primary block",disabled:!Number(o),onClick:()=>{cS(n.id,Math.round(Number(o)),l),i(!1),a(""),h("")},children:"Registrar"}),u("p",{class:"muted small",children:"Ajustes mexem no saldo, mas não contam para a vila."})]})]})}function zS({child:n,day:e}){const t=Z(),r=e||t.today,s=t.entries.filter(i=>i.child===n.id&&i.day===r).slice().reverse();return s.length?u("div",{class:"card log",children:[u("h3",{children:"Registro do dia"}),s.map(i=>u("div",{class:"log-row"+(i.undone?" undone":""),children:[u("span",{children:i.emoji}),u("span",{class:"grow",children:i.label}),u("b",{class:i.stars<0?"neg":"pos",children:[i.stars>0?"+":"",i.stars]}),!i.undone&&u("button",{class:"link small",onClick:()=>Qg(i),children:"desfazer"})]}))]}):null}const Es=(n,e)=>e[n.id]||n.slot;function KS({season:n,it:e,slot:t,fresh:r,onClick:s,selected:i}){const[o,a]=j("load"),l=n.scene.w/n.scene.h,h={left:`${t.x-t.w/2}%`,width:`${t.w}%`,top:`${t.y-t.w*l}%`,zIndex:Math.round(t.y*10)};return u("button",{type:"button",class:"piece"+(r?" fresh":"")+(i?" sel":"")+(o==="miss"?" miss":""),style:h,onClick:s,"aria-label":e.name,tabIndex:s?0:-1,"data-id":e.id,children:[o!=="miss"&&u("img",{src:Oe(n.id,e.img),alt:"",draggable:!1,onLoad:()=>a("ok"),onError:()=>a("miss")}),o==="miss"&&u("span",{class:"piece-emoji",style:{fontSize:`${t.w*.62}cqw`},children:e.emoji})]})}function lu({season:n,items:e,slots:t,fresh:r,onPick:s,selected:i,children:o}){const[a,l]=j(!0);return u("div",{class:"scene",style:{aspectRatio:`${n.scene.w} / ${n.scene.h}`},children:[a?u("img",{class:"scene-bg",src:Oe(n.id,n.images.background),alt:"",onError:()=>l(!1),draggable:!1}):u("div",{class:"scene-bg fallback","aria-hidden":"true",children:[u("span",{class:"moon"}),u("span",{class:"hill h1"}),u("span",{class:"hill h2"}),u("span",{class:"snow"})]}),e.map(h=>u(KS,{season:n,it:h,slot:Es(h,t),fresh:r===h.id,selected:i===h.id,onClick:s?()=>s(h):void 0},h.id)),o]})}const Ef=n=>new Promise(e=>{const t=new Image;t.onload=()=>e(t),t.onerror=()=>e(null),t.src=n});async function GS(n,e,t,r=360){const s=r,i=Math.round(r*n.scene.h/n.scene.w),o=document.createElement("canvas");o.width=s,o.height=i;const a=o.getContext("2d"),l=await Ef(Oe(n.id,n.images.background));if(l)a.drawImage(l,0,0,s,i);else{const f=a.createLinearGradient(0,0,0,i);f.addColorStop(0,"#1F2E4A"),f.addColorStop(.42,"#3B4E6E"),f.addColorStop(.45,"#E9EEF2"),f.addColorStop(1,"#FBF6EE"),a.fillStyle=f,a.fillRect(0,0,s,i)}const h=[...e].sort((f,m)=>Es(f,t).y-Es(m,t).y);for(const f of h){const m=Es(f,t),_=m.w/100*s,y=m.x/100*s-_/2,b=m.y/100*i-_,k=await Ef(Oe(n.id,f.img));k?a.drawImage(k,y,b,_,_):(a.font=`${Math.round(_*.55)}px serif`,a.textAlign="center",a.textBaseline="bottom",a.fillText(f.emoji,m.x/100*s,m.y/100*i))}return o.toDataURL("image/jpeg",.72)}function WS(){const n=Z(),e=n.children.find(t=>t.id===n.ui.child)||n.children[0];return u("div",{class:"page",children:[u(au,{}),e&&u(u_,{child:e})]})}function u_({child:n,kid:e}){var U;const t=Z(),r=t.season,s=(U=t.family)==null?void 0:U.season,[i,o]=j(null),[a,l]=j(null),[h,f]=j(null),m=t.progress[n.id],_=dn(t.family,t.items,t.entries,n.id,t.today),y=r&&s?eu(r,s,m,_,t.items,n.id,t.today):null,b=y?y.milestones.filter(M=>M.reached).length:0;if(it(()=>{!y||!m||b<=(m.seenMilestones||0)||f(y.milestones[b-1].item)},[b,m==null?void 0:m.seenMilestones,n.id]),!r||!s||!y)return u("div",{class:"card",children:[u("h3",{children:"Nenhuma temporada ativa"}),u("p",{class:"muted",children:"As vilas das temporadas anteriores estão no álbum."}),u("button",{class:"btn block",onClick:()=>Se({screen:"album",screenArg:n.id}),children:"Abrir o álbum de aventuras"})]});const k=Ql(s.startDay,s.endDay)+1,C=async()=>{if(!y.next)return;const M=y.next;await uS(n.id,M.id)&&(l(M.id),setTimeout(()=>o(M),900),setTimeout(()=>l(null),2500))},N=Do(n),O=Me(t.family).modules.english&&n.english!==!1;return u(Re,{children:[u("div",{class:"world-head",children:[u("div",{children:[u("span",{class:"eyebrow",children:y.dayN<1?`Começa em ${-y.dayN+1} dia(s)`:Dc(s,t.today)?"Temporada encerrada":`Dia ${y.dayN} de ${k}`}),u("h2",{children:r.name})]}),u("div",{class:"world-stars",children:[u(Hn,{n:y.seasonStars,big:!0}),u("span",{class:"muted small",children:"na temporada"})]})]}),u(lu,{season:r,items:Wg(r,y),slots:t.slots,fresh:a,onPick:o}),y.canClaim?u("button",{class:"btn primary block glow claim",onClick:C,children:["Conquistar a peça do dia: ",y.next.name," ",y.next.emoji]}):u("p",{class:"claim-note",children:y.claimedToday?`Peça de hoje: ${y.claimedToday.name}. Amanhã tem mais!`:y.blockedReason==="Falta completar a rotina de hoje."?`Complete ${Me(t.family).dailyGoalPct}% da rotina para ganhar a peça de hoje (agora: ${_.pct}%).`:y.blockedReason}),y.nextMilestone&&u("div",{class:"card next-big-card",children:[u(kt,{class:"tiny",src:Oe(r.id,y.nextMilestone.item.img),emoji:y.nextMilestone.item.emoji,alt:""}),u("div",{class:"grow",children:[u("span",{class:"eyebrow",children:"Próxima grande conquista"}),u("b",{children:y.nextMilestone.item.name}),u(Po,{value:y.seasonStars,max:y.nextMilestone.at,tone:"gold"}),u("span",{class:"muted small",children:[y.seasonStars," de ",y.nextMilestone.at," estrelas da temporada"]})]})]}),u("div",{class:"card",children:[u("div",{class:"row between",children:[u("h3",{children:"Coleção"}),u("span",{class:"muted small",children:[y.dailyCount," de ",Vc(r).length," peças"]})]}),u("div",{class:"collection",children:r.items.map(M=>{const q=y.milestones.find(v=>v.item.id===M.id),$=M.kind==="daily"?y.unlocked.has(M.id):!!(q!=null&&q.reached),T=Vc(r).indexOf(M)+1;return u("button",{class:"coll"+($?" has":"")+(M.kind==="milestone"?" big":""),onClick:()=>$&&o(M),disabled:!$,"aria-label":$?M.name:"Peça bloqueada",children:$?u(kt,{src:Oe(r.id,M.img),emoji:M.emoji,alt:M.name}):u("span",{class:"lock",children:M.kind==="milestone"?`★ ${q==null?void 0:q.at}`:T})})})})]}),u("button",{class:"btn ghost block",onClick:()=>Se({screen:"album",screenArg:n.id}),children:"Álbum de aventuras"}),Dc(s,t.today)&&!e&&u("div",{class:"card notice",children:u("p",{children:"A temporada terminou. Guarde as vilas no álbum em Responsáveis → Temporada."})}),i&&u(HS,{it:i,season:r.id,lvl:N,showEn:O,onClose:()=>o(null)}),h&&u(vt,{title:"Grande conquista!",onClose:()=>{f(null),If(n.id,b)},children:[u("div",{class:"celebrate",children:[u(kt,{class:"hero-art",src:Oe(r.id,h.img),emoji:h.emoji,alt:h.name}),u("h3",{children:h.name}),u("p",{children:h.learn[N]})]}),u("button",{class:"btn primary block",onClick:()=>{f(null),If(n.id,b)},children:"Que lindo!"})]})]})}function HS({it:n,season:e,lvl:t,showEn:r,onClose:s}){const i=(o,a)=>{try{const l=new SpeechSynthesisUtterance(o);l.lang=a,speechSynthesis.cancel(),speechSynthesis.speak(l)}catch{}};return u(vt,{title:n.name,onClose:s,children:u("div",{class:"piece-info",children:[u(kt,{class:"hero-art",src:Oe(e,n.img),emoji:n.emoji,alt:n.name}),u("p",{class:"learn",children:n.learn[t]}),u("button",{class:"link small",onClick:()=>i(n.learn[t],"pt-BR"),children:"Ouvir"}),r&&n.en&&u("div",{class:"english",children:[u("span",{class:"eyebrow",children:"Em inglês"}),u("button",{class:"en-word",onClick:()=>i(n.en.w,"en-US"),children:[n.en.w," 🔊"]}),u("button",{class:"en-ex",onClick:()=>i(n.en.ex,"en-US"),children:n.en.ex})]})]})})}function QS(){const n=Z(),e=n.children.find(t=>t.id===n.ui.child)||n.children[0];return u("div",{class:"page",children:[u(au,{}),e&&u(Re,{children:[u(h_,{child:e}),u(JS,{child:e})]})]})}function h_({child:n,kid:e}){const t=Z(),[r,s]=j(null),i=js(t.items,n.id,"reward").slice().sort((l,h)=>l.stars-h.stars),o=n.balance||0,a=new Set(t.requests.filter(l=>l.child===n.id&&l.kind==="reward").map(l=>l.itemId));return u("div",{class:"card prizes",children:[u("div",{class:"row between",children:[u("h3",{children:"Prêmios"}),u("span",{class:"balance",children:["Saldo ",u(Hn,{n:o})]})]}),!i.length&&u("p",{class:"muted",children:"Nenhum prêmio cadastrado ainda."}),i.map(l=>{const h=o>=l.stars;return u("div",{class:"prize"+(h?" can":""),children:[u("span",{class:"prize-emo",children:l.emoji}),u("div",{class:"grow",children:[u("b",{children:l.label}),!h&&u(Re,{children:[u(Po,{value:o,max:l.stars}),u("span",{class:"muted small",children:["faltam ",l.stars-o]})]})]}),a.has(l.id)?u("span",{class:"pill",children:"pedido"}):u("button",{class:"btn sm "+(h?"primary":"ghost"),disabled:!h,onClick:()=>s(l),children:u(Hn,{n:l.stars})})]})}),r&&u(su,{text:e?`Pedir ${r.label} por ${r.stars} estrelas? Um adulto vai confirmar.`:`Trocar ${r.stars} estrelas de ${n.name} por ${r.label}?`,yes:e?"Pedir":"Trocar",onClose:()=>s(null),onYes:()=>e?nu(n.id,"reward",r.label,r.emoji,r.stars,r.id):lS(n,r)})]})}function JS({child:n}){const t=Z().entries.filter(s=>s.child===n.id&&!s.undone),r=[...new Set(t.map(s=>s.day))].sort().reverse();return r.length?u("div",{class:"card log",children:[u("h3",{children:"Últimos 7 dias"}),r.map(s=>{const i=t.filter(a=>a.day===s),o=i.reduce((a,l)=>a+l.stars,0);return u("details",{children:[u("summary",{children:[u("span",{class:"grow",children:hn(s,!0)}),u("b",{class:o<0?"neg":"pos",children:[o>0?"+":"",o]})]}),i.map(a=>u("div",{class:"log-row",children:[u("span",{children:a.emoji}),u("span",{class:"grow",children:a.label}),u("b",{class:a.stars<0?"neg":"pos",children:[a.stars>0?"+":"",a.stars]})]}))]})}),u("p",{class:"muted small",children:["Total da vida de ",n.name,": ",n.lifetime||0," estrelas."]})]}):null}const uu=n=>{try{speechSynthesis.cancel();const e=new SpeechSynthesisUtterance(n);e.lang="pt-BR",e.rate=.95,speechSynthesis.speak(e)}catch{}},YS={p:"Para os pequenos",m:"Para os do meio",g:"Para os maiores"};function XS(n,e){if(!n.length)return null;const t=e.slice(5),r=n.find(o=>o.date===t);if(r)return{story:r,preview:!1};const s=n[0].date,i=n[n.length-1].date;return t>i&&t<s?t<"07-01"?{story:Dr(n,"releitura",e),preview:!1}:{story:n[0],preview:!0}:{story:Dr(n,"releitura",e),preview:!1}}function d_({only:n}){const e=Z(),t=Me(e.family).modules,r=Ct($g),s=Ct(QA),i=Ct(JA),o=n?[n]:e.children,a=r?XS(r.stories,e.today):null,l=[...new Set(o.map(Do))],[h,f]=j(0);return u("div",{class:"page night",children:[u("header",{class:"night-head",children:[u("span",{class:"eyebrow",children:"Hora de dormir"}),u("h2",{children:t.christian?"Devocional da noite":"Fechamento do dia"})]}),t.christian&&a&&u("article",{class:"card story",children:[a.preview&&u("p",{class:"pill",children:"Prévia · a série começa em 1º de dezembro"}),u("span",{class:"eyebrow",children:[r.title," · noite ",a.story.n]}),u("h3",{children:a.story.title}),u("p",{class:"ref",children:a.story.ref}),a.story.parts.map((m,_)=>_<=h&&u("section",{class:"story-part",children:[u(kt,{class:"story-art",src:xt(`noite/natal/${String(a.story.n).padStart(2,"0")}-${_+1}.jpg`),emoji:["📖","✨","🌙"][_]||"✨",alt:""}),m.split(`
`).map(y=>u("p",{children:y}))]})),h<a.story.parts.length-1?u("button",{class:"btn primary block",onClick:()=>f(h+1),children:"Continuar a história"}):u(Re,{children:[u("blockquote",{class:"verse",children:[a.story.verse,u("cite",{children:a.story.ref})]}),l.map(m=>u("div",{class:"ask",children:[u("span",{class:"eyebrow",children:l.length>1?YS[m]:"Para conversar"}),u("p",{children:a.story.ask[m]})]})),u("div",{class:"prayer",children:[u("span",{class:"eyebrow",children:"Oração"}),u("p",{children:a.story.prayer})]})]}),u("button",{class:"link small",onClick:()=>uu([a.story.title,...a.story.parts.slice(0,h+1)].join(". ")),children:"Ouvir em voz alta"})]}),s&&o.map(m=>u(ZS,{child:m,msgs:s,others:o,christian:t.christian})),t.christian&&i&&!n&&u(e0,{prayers:i.parents,names:e.children.map(m=>m.name),day:e.today}),t.christian&&i&&u(t0,{list:i.kids,day:e.today})]})}function Tf(n,e){const t=Zl(n.entries,e.id,n.today),r=dn(n.family,n.items,n.entries,e.id,n.today),s=t.filter(o=>o.kind==="bad").length,i=t.filter(o=>o.kind==="good"||o.kind==="challenge"||o.kind==="calm").length+r.done.size;return s?i>=s*2||r.goalMet?"recomeco":"dificil":r.goalMet?"otimo":"bom"}function ZS({child:n,msgs:e,others:t,christian:r}){var m,_;const s=Z(),i=Tf(s,n),o=Do(n),a=((m=e[r?i:"neutro_"+i])==null?void 0:m[o])||((_=e[i])==null?void 0:_[o])||[],l=(Fg(s.today+i+o)+t.filter(y=>Do(y)===o&&Tf(s,y)===i).findIndex(y=>y.id===n.id))%Math.max(1,a.length),h=a.length?Vr(a[l].replace(/\{nome\}/g,n.name),n.gender):"",f=dn(s.family,s.items,s.entries,n.id,s.today);return u("div",{class:"card child-night",style:{"--c":n.color},children:[u("div",{class:"row gap",children:[u(Ot,{child:n,size:40}),u("div",{children:[u("b",{children:n.name}),u("span",{class:"muted small",children:[" · ",f.dayStars>=0?"+":"",f.dayStars," hoje · rotina ",f.pct,"%"]})]})]}),h&&u("p",{class:"jesus-msg",children:[r&&u("span",{class:"eyebrow",children:"Uma palavra de Jesus para você"}),h]}),h&&u("button",{class:"link small",onClick:()=>uu(h),children:"Ouvir"})]})}function e0({prayers:n,names:e,day:t}){const r=Dr(n,"pais",t);if(!r)return null;const s=e.length<=1?e[0]||"nossos filhos":e.slice(0,-1).join(", ")+" e "+e[e.length-1];return u("div",{class:"card parent-prayer",children:[u("span",{class:"eyebrow",children:"Oração dos pais"}),u("p",{children:r[0].replace(/\{filhos\}/g,s)}),u("cite",{children:r[1]})]})}function t0({list:n,day:e}){const t=Dr(n,"criancas",e);return t?u("div",{class:"card kid-prayer",children:[u("span",{class:"eyebrow",children:"Oração para repetir juntos"}),u("h4",{children:t.t}),t.l.map(r=>u("p",{children:r})),u("button",{class:"link small",onClick:()=>uu(t.l.join(" ")),children:"Ouvir"})]}):null}const Ka=5,Ga=3,bf=2;function f_({childId:n}){const e=Z(),t=Ct(ZA),[r,s]=j(n||(e.ui.kidMode?e.ui.kidId:null)),i=e.children.find(o=>o.id===r);return t?i?u(n0,{child:i,data:t}):u("div",{class:"page calm",children:[u("h2",{class:"page-title",children:"Cantinho da calma"}),u("p",{children:"Quem precisa de um momento de calma?"}),u("div",{class:"kid-pick",children:e.children.map(o=>u("button",{onClick:()=>s(o.id),children:[u(Ot,{child:o,size:64}),u("span",{children:o.name})]}))})]}):u("p",{class:"muted center",children:"Carregando…"})}function n0({child:n,data:e}){const t=Z(),[r,s]=j("feel"),[i,o]=j(null),[a,l]=j(!1),[h,f]=j(0),[m,_]=j("in");it(()=>{if(r!=="breathe")return;const N=setInterval(()=>_(O=>(O==="out"&&f(U=>U+1),O==="in"?"out":"in")),4e3);return()=>clearInterval(N)},[r]),it(()=>{h>=Ka&&s("tool")},[h]);const y=t.entries.filter(N=>N.child===n.id&&N.day===t.today&&N.kind==="calm"&&!N.undone).length,b=N=>{s("done"),l(y<bf),y<bf&&Jg(n.id,"calm",`Cantinho da calma: ${N}`,"🫧",Ga,`+${Ga} por cuidar das emoções`)},k=Me(t.family).modules.christian?Dr(e.verses,n.id,t.today):null,C=e.feelings.find(N=>N.id===i);return u("div",{class:"page calm",children:[u("h2",{class:"page-title",children:"Cantinho da calma"}),r==="feel"&&u(Re,{children:[u("p",{class:"calm-q",children:["Como você está se sentindo, ",n.name,"?"]}),u("div",{class:"feelings",children:e.feelings.map(N=>u("button",{onClick:()=>{o(N.id),s("breathe")},children:[u("span",{children:N.emo}),n.gender==="f"?N.f:N.m]}))})]}),r==="breathe"&&u("div",{class:"breathe",children:[u("p",{class:"muted",children:["Tudo bem se sentir ",C?(n.gender==="f"?C.f:C.m).toLowerCase():"assim",". Vamos respirar juntos."]}),u("div",{class:"bubble "+m,children:u("span",{children:m==="in"?"Puxa o ar…":"Solta devagar…"})}),u("p",{class:"muted small",children:[Math.min(h+1,Ka)," de ",Ka]}),u("button",{class:"link",onClick:()=>s("tool"),children:"Pular"})]}),r==="tool"&&u(Re,{children:[u("p",{class:"calm-q",children:"O que pode ajudar agora?"}),u("div",{class:"tools",children:e.tools.map(N=>u("button",{onClick:()=>b(N.t),children:[u("span",{children:N.emo}),N.t]}))})]}),r==="done"&&u("div",{class:"card center",children:[u("div",{class:"big-emo",children:"🫧"}),u("h3",{children:"Você cuidou do seu coração."}),k&&u("p",{class:"verse-small",children:k}),u("p",{class:"muted small",children:a?`+${Ga} estrelas`:"As estrelas do cantinho já foram ganhas hoje, mas a calma vale sempre."}),u("button",{class:"btn primary",onClick:()=>Se({screen:null}),children:"Voltar"})]})]})}function m_({childId:n}){var a;const e=Z(),t=ou(ra("album")),[r,s]=j(null),i=(t||[]).map(l=>({id:l.id,...l.data})).filter(l=>!n||l.child===n).sort((l,h)=>h.createdAt-l.createdAt),o=n?(a=e.children.find(l=>l.id===n))==null?void 0:a.name:"";return u("div",{class:"page",children:[u("h2",{class:"page-title",children:["Álbum de aventuras",o?` de ${o}`:""]}),t&&!i.length&&u(PS,{emoji:"📔",title:"O álbum ainda está vazio",children:u("p",{class:"muted",children:"Quando uma temporada termina, a vila de cada criança fica guardada aqui para sempre."})}),u("div",{class:"album-grid",children:i.map(l=>u("button",{class:"album-card",onClick:()=>s(l),children:[l.thumb?u("img",{src:l.thumb,alt:""}):u("span",{class:"album-ph",children:"🏘️"}),u("span",{class:"album-meta",children:[u("b",{children:l.seasonName}),u("span",{class:"muted small",children:[l.childName," · ",hn(l.from)," a ",hn(l.to)]}),u(Hn,{n:l.seasonStars})]})]}))}),r&&u(r0,{a:r,onClose:()=>s(null)})]})}function r0({a:n,onClose:e}){const t=Z(),r=Ct(()=>na(n.seasonId),[n.seasonId]);return u(vt,{title:`${n.seasonName} · ${n.childName}`,onClose:e,wide:!0,children:[r?u(lu,{season:r,items:r.items.filter(s=>n.items.includes(s.id)),slots:t.slots}):n.thumb?u("img",{class:"album-full",src:n.thumb,alt:""}):null,u("p",{class:"muted center",children:[n.items.length," peças · ",n.seasonStars," estrelas · ",hn(n.from)," a ",hn(n.to)]})]})}function s0(){const n=Z(),[e,t]=j(!1),[r,s]=j(""),i=n.children.find(h=>h.id===n.ui.kidId),a=e&&u(vt,{title:"Área dos adultos",onClose:()=>{t(!1),s("")},children:u(Nr,{title:"Digite o PIN",error:r,onDone:async h=>{await Yg(h)?(t(!1),s(""),Se({kidMode:!1,kidId:null,screen:null})):s("PIN incorreto")}})});if(!i)return u("div",{class:"kid page",children:[u(ii,{name:"turma",class:"hero-decor"}),u("h1",{class:"kid-title",children:"Quem está aí?"}),u("div",{class:"kid-pick",children:n.children.map(h=>u("button",{onClick:()=>Se({kidId:h.id,screen:null}),children:[u(Ot,{child:h,size:84}),u("span",{children:h.name})]}))}),u("button",{class:"link",onClick:()=>t(!0),children:"Sou adulto"}),a]});const l=n.ui.screen;return u("div",{class:"kid",style:{"--c":i.color},children:[u("header",{class:"kid-head",children:[l?u("button",{class:"icon-btn",onClick:()=>Se({screen:null}),"aria-label":"Voltar",children:"←"}):u("button",{class:"kid-me",onClick:()=>Se({kidId:null}),"aria-label":"Trocar de criança",children:u(Ot,{child:i,size:40})}),u("div",{class:"kid-hello",children:u("b",{children:l?"":`Oi, ${i.name}!`})}),u(Hn,{n:i.balance||0,big:!0}),u("button",{class:"icon-btn",onClick:()=>t(!0),"aria-label":"Sair do modo criança",children:"🔒"})]}),u("main",{class:"page",children:[!l&&u(i0,{}),l==="mundo"&&u(u_,{child:i,kid:!0}),l==="premios"&&u(h_,{child:i,kid:!0}),l==="noite"&&u(d_,{only:i}),l==="calma"&&u(f_,{childId:i.id}),l==="advento"&&u(a_,{}),l==="album"&&u(m_,{childId:i.id})]}),a]})}function i0(){const n=Z(),e=n.children.find(i=>i.id===n.ui.kidId),t=Me(n.family),r=(i,o)=>{if(o){at("Para desfazer, chame um adulto");return}t.kidMarks==="direto"?$s(e.id,i):nu(e.id,"task",Vr(i.label,e.gender),i.emoji,i.stars,i.id)},s=[["mundo","🏘️","Meu mundo",!0,""],["premios","🎁","Prêmios",!0,"presente"],["noite","🌙","Hora de dormir",!0,"cama"],["calma","🫧","Cantinho da calma",t.modules.calm,"musica"]];return u(Re,{children:[u(s_,{child:e,kid:!0}),u(o_,{kid:!0}),u("div",{class:"tiles",children:s.filter(i=>i[3]).map(([i,o,a,,l])=>u("button",{class:"tile",onClick:()=>Se({screen:i}),children:[l?u(ii,{name:l,class:"tile-decor"}):n.season?u("img",{class:"tile-decor",src:Oe(n.season.id,"images/pecas/09-casa-vermelha.png"),alt:"",onError:h=>h.target.replaceWith(o)}):u("span",{children:o}),a]}))}),u(l_,{child:e,onTap:r}),u(c_,{child:e,kid:!0}),t.kidMarks==="pedido"&&u("p",{class:"muted small center",children:"Quando você marca uma tarefa, um adulto confirma."})]})}const p_=()=>{Se({kidMode:!0,kidId:se().children.length===1?se().children[0].id:null,screen:null})},o0=n=>new Promise(e=>{const t=new Image;t.onload=()=>e(!0),t.onerror=()=>e(!1),t.src=n+"?v="+Date.now()});function a0(){var s;const n=Z(),[e,t]=j([]);it(()=>{(async()=>{const i=n.season,o=[];if(i){const l=`seasons/${i.id}/`;o.push({group:"Vila",name:"Fundo",path:l+i.images.background,url:Oe(i.id,i.images.background),ok:null}),o.push({group:"Vila",name:"Capa",path:l+i.images.cover,url:Oe(i.id,i.images.cover),ok:null}),i.items.forEach(h=>o.push({group:"Vila",name:h.name,path:l+h.img,url:Oe(i.id,h.img),ok:null}))}try{(await $g()).stories.forEach(h=>[1,2,3].forEach(f=>{const m=`noite/natal/${String(h.n).padStart(2,"0")}-${f}.jpg`;o.push({group:f===1?"Noite (1ª imagem)":"Noite (extras)",name:`${h.n}. ${h.title} (${f})`,path:m,url:xt(m),ok:null})}))}catch{}for(let l=1;l<=24;l++){const h=`advento/${String(l).padStart(2,"0")}.jpg`;o.push({group:"Advento",name:`Portinha ${l}`,path:h,url:xt(h),ok:null})}t(o);const a=await Promise.all(o.map(l=>o0(l.url)));t(o.map((l,h)=>({...l,ok:a[h]})))})()},[(s=n.season)==null?void 0:s.id]);const r=[...new Set(e.map(i=>i.group))];return u("div",{class:"card",children:[u("h2",{children:"Conferir imagens"}),u("p",{class:"muted small",children:"Pasta no GitHub: docs/content/…"}),r.map(i=>{const o=e.filter(l=>l.group===i),a=o.filter(l=>l.ok).length;return u("details",{open:i==="Vila",children:[u("summary",{children:[u("b",{class:"grow",children:i}),u("span",{children:[a," de ",o.length]})]}),o.map(l=>u("div",{class:"item-row small",children:[u("span",{children:l.ok===null?"…":l.ok?"✅":"⬜"}),u("span",{class:"grow",children:[l.name,u("small",{class:"mono",children:l.path})]})]}))]})})]})}function c0(){var f;const n=Z(),e=n.season,[t,r]=j(()=>{const m={};return e==null||e.items.forEach(_=>{m[_.id]={...Es(_,n.slots)}}),m}),[s,i]=j(((f=e==null?void 0:e.items[0])==null?void 0:f.id)||null),o=Ja(null),a=Ja(!1);if(!e)return u("p",{class:"muted",children:"Nenhuma temporada ativa."});const l=e.items.find(m=>m.id===s),h=m=>{if(!a.current||!s||!o.current)return;const _=o.current.querySelector(".scene").getBoundingClientRect(),y=Math.round((m.clientX-_.left)/_.width*1e3)/10,b=Math.round((m.clientY-_.top)/_.height*1e3)/10;r(k=>({...k,[s]:{...k[s],x:Math.max(0,Math.min(100,y)),y:Math.max(0,Math.min(100,b))}}))};return u("div",{class:"card layout-editor",children:[u("h2",{children:"Posições das peças"}),u("p",{class:"muted small",children:"Escolha uma peça, arraste na cena (o ponto é a base da peça) e ajuste o tamanho. Salvar vale para todas as famílias."}),u("div",{ref:o,class:"editor-scene",onPointerDown:m=>{var _,y;a.current=!0,(y=(_=m.target).setPointerCapture)==null||y.call(_,m.pointerId),h(m)},onPointerMove:h,onPointerUp:()=>{a.current=!1},children:u(lu,{season:e,items:e.items,slots:t,selected:s})}),u(ue,{label:"Peça",children:u("select",{value:s||"",onChange:m=>i(m.target.value),children:e.items.map(m=>u("option",{value:m.id,children:[m.emoji," ",m.name]}))})}),l&&s&&u(ue,{label:`Tamanho: ${t[s].w}% da largura`,children:u("input",{type:"range",min:4,max:60,step:.5,value:t[s].w,onInput:m=>r({...t,[s]:{...t[s],w:Number(m.target.value)}})})}),l&&s&&u("p",{class:"muted small mono",children:["x ",t[s].x," · y ",t[s].y," · w ",t[s].w]}),u("div",{class:"row gap wrap",children:[u("button",{class:"btn primary",onClick:()=>SS(e.id,t),children:"Salvar para todas as famílias"}),u("button",{class:"btn ghost",onClick:()=>{var m;(m=navigator.clipboard)==null||m.writeText(JSON.stringify(t)),at("Posições copiadas (JSON)")},children:"Copiar JSON"})]})]})}const l0={task:"Rotina",good:"Atitudes que ganham estrelas",bad:"Combinados não cumpridos",reward:"Prêmios"};function u0(){var i;const n=Z(),[e,t]=j(null),r=u("button",{class:"link back",onClick:()=>t(null),children:"← Responsáveis"});if(e==="kids")return u("div",{class:"page",children:[r,u(d0,{})]});if(e==="task"||e==="good"||e==="bad"||e==="reward")return u("div",{class:"page",children:[r,u(m0,{kind:e})]});if(e==="rules")return u("div",{class:"page",children:[r,u(g0,{})]});if(e==="mods")return u("div",{class:"page",children:[r,u(_0,{})]});if(e==="season")return u("div",{class:"page",children:[r,u(y0,{go:t})]});if(e==="family")return u("div",{class:"page",children:[r,u(v0,{})]});if(e==="pin")return u("div",{class:"page",children:[r,u(I0,{done:()=>t(null)})]});if(e==="licenses")return u("div",{class:"page",children:[r,u(w0,{})]});if(e==="images")return u("div",{class:"page",children:[r,u(a0,{})]});if(e==="layout")return u("div",{class:"page wide",children:[r,u(c0,{})]});const s=(o,a,l,h)=>u("button",{class:"menu-row",onClick:()=>t(o),children:[u("span",{class:"menu-emo",children:a}),u("span",{class:"grow",children:[u("b",{children:l}),u("small",{children:h})]}),u("span",{"aria-hidden":"true",children:"›"})]});return u("div",{class:"page",children:[u("div",{class:"row between",children:[u("h2",{class:"page-title",children:"Responsáveis"}),u("button",{class:"btn sm ghost",onClick:()=>Se({screen:null,adminUntil:0}),children:"Fechar"})]}),u("div",{class:"card menu",children:[s("kids","👧","Crianças",`${n.children.length} cadastrada(s), idade, foto e nível dos desafios`),s("task","✅","Rotina","Tarefas do dia e quanto vale cada uma"),s("good","💛","Atitudes","Comportamentos que ganham estrelas"),s("bad","⚠️","Combinados","O que tira estrelas"),s("reward","🎁","Prêmios","O que as estrelas compram")]}),u("div",{class:"card menu",children:[s("season","🏘️","Temporada",n.season?n.season.name:"Nenhuma ativa"),s("rules","⚖️","Regras do jogo","Meta diária, bônus e pedidos das crianças"),s("mods","🧩","Módulos","Cristão, Advento, inglês, calma, desafios"),s("family","👨‍👩‍👧","Família e responsáveis","Nome, convites para outros adultos"),s("pin","🔑","Trocar PIN","Protege esta área e a saída do modo criança"),tu()&&s("licenses","🎫","Licenças (administração)","Criar códigos para novas famílias")]}),u("div",{class:"card menu",children:[u("button",{class:"menu-row",onClick:()=>{p_(),Se({adminUntil:0})},children:[u("span",{class:"menu-emo",children:"🧒"}),u("span",{class:"grow",children:[u("b",{children:"Modo criança neste aparelho"}),u("small",{children:"As crianças usam sozinhas; para sair, o PIN"})]})]}),u("button",{class:"menu-row",onClick:()=>GA(`mundo-de-estrelas-${n.today}.json`,RS()),children:[u("span",{class:"menu-emo",children:"💾"}),u("span",{class:"grow",children:[u("b",{children:"Exportar cópia dos dados"}),u("small",{children:"Arquivo para guardar no seu computador"})]})]}),n.families.length>1&&n.families.filter(o=>o.id!==n.familyId).map(o=>u("button",{class:"menu-row",onClick:()=>Bs(o.id),children:[u("span",{class:"menu-emo",children:"🔁"}),u("span",{class:"grow",children:u("b",{children:["Ir para ",o.name]})})]})),u("button",{class:"menu-row",onClick:()=>J.signOut(),children:[u("span",{class:"menu-emo",children:"🚪"}),u("span",{class:"grow",children:[u("b",{children:n.demo?"Sair e apagar a demonstração":"Sair da conta"}),u("small",{children:(i=n.user)==null?void 0:i.email})]})]})]}),n.demo&&u(h0,{}),u("p",{class:"muted small center",children:["Mundo de Estrelas ",xA]})]})}function h0(){const n=Z(),[e,t]=j(n.today);return u("div",{class:"card",children:[u("h3",{children:"Demonstração"}),u(ue,{label:"Simular a data de hoje",children:u("input",{type:"date",value:e,onInput:r=>t(r.target.value)})}),u("div",{class:"row gap",children:[u("button",{class:"btn sm",onClick:()=>{location.search=`?demo=1&hoje=${e}`},children:"Usar esta data"}),u("button",{class:"btn sm ghost",onClick:()=>{location.search="?demo=1&hoje="},children:"Data real"})]})]})}function d0(){const n=Z(),[e,t]=j(null);return u("div",{class:"card",children:[u("h2",{children:"Crianças"}),n.children.map(r=>u("button",{class:"menu-row",onClick:()=>t(r),children:[u(Ot,{child:r,size:40}),u("span",{class:"grow",children:[u("b",{children:r.name}),u("small",{children:[r.birth?`${Us(r.birth,n.today)} anos`:"sem data de nascimento"," · saldo ",r.balance||0]})]}),"›"]})),u("button",{class:"btn block",onClick:()=>t({name:"",gender:"f",color:"#2F5D4A",maturity:2,english:!0}),children:"Adicionar criança"}),e&&u(f0,{c:e,onClose:()=>t(null)})]})}function f0({c:n,onClose:e}){var l;const t=se(),[r,s]=j(n),[i,o]=j(!1),a=h=>s({...r,...h});return u(vt,{title:n.id?`Editar ${n.name}`:"Nova criança",onClose:e,children:[u("div",{class:"row gap center-v",children:[u(Ot,{child:{name:r.name||"?",color:r.color||"#888",photo:r.photo},size:64}),u("label",{class:"btn sm ghost",children:["Foto",u("input",{type:"file",accept:"image/*",hidden:!0,onChange:async h=>{var m;const f=(m=h.target.files)==null?void 0:m[0];f&&a({photo:await WA(f)})}})]}),r.photo&&u("button",{class:"link small",onClick:()=>a({photo:""}),children:"remover foto"})]}),u(ue,{label:"Nome",children:u("input",{value:r.name,maxLength:24,onInput:h=>a({name:h.target.value})})}),u(ue,{label:"Data de nascimento",children:u("input",{type:"date",value:r.birth,max:t.today,onInput:h=>a({birth:h.target.value})})}),u(ue,{label:"Os textos tratam como",children:u("div",{class:"seg",children:[["f","menina"],["m","menino"],["x","neutro"]].map(([h,f])=>u("button",{type:"button",class:r.gender===h?"on":"",onClick:()=>a({gender:h}),children:f}))})}),u(ue,{label:"Desafios",hint:"Ajusta a faixa dos desafios em relação à idade.",children:u("div",{class:"seg",children:[[1,"mais simples"],[2,"da idade"],[3,"mais difíceis"]].map(([h,f])=>u("button",{type:"button",class:r.maturity===h?"on":"",onClick:()=>a({maturity:h}),children:f}))})}),u("label",{class:"toggle",children:[u("input",{type:"checkbox",checked:r.english!==!1,onChange:h=>a({english:h.target.checked})}),u("span",{children:u("b",{children:"Mostrar palavras em inglês"})})]}),u(ue,{label:"Cor",children:u(t_,{value:r.color||"",onChange:h=>a({color:h})})}),u("button",{class:"btn primary block",disabled:!((l=r.name)!=null&&l.trim()),onClick:async()=>{await gS(r)&&e()},children:"Salvar"}),n.id&&u("button",{class:"btn ghost danger-text block",onClick:()=>o(!0),children:"Remover criança"}),i&&u(su,{danger:!0,text:`Remover ${n.name}? O histórico fica guardado, mas ela some do app.`,yes:"Remover",onClose:()=>o(!1),onYes:()=>{_S(n.id),e()}})]})}function m0({kind:n}){const e=Z(),[t,r]=j(null),s=e.items.filter(a=>a.kind===n&&a.active!==!1),i=(a,l)=>{const h=s.map(m=>m.id),f=a+l;f<0||f>=h.length||([h[a],h[f]]=[h[f],h[a]],mS(h))},o=a=>{var l;return(l=a.kids)!=null&&l.length?a.kids.map(h=>{var f;return(f=e.children.find(m=>m.id===h))==null?void 0:f.name}).filter(Boolean).join(", "):"todas as crianças"};return u("div",{class:"card",children:[u("h2",{children:l0[n]}),n==="task"&&u("p",{class:"muted small",children:["Dica: use ","{o|a}",' para o texto mudar com o gênero. Ex.: "Arrumad',"{o|a}",' para a escola".']}),s.map((a,l)=>{var h;return u("div",{class:"item-row",children:[u("span",{class:"item-emo",children:a.emoji}),u("button",{class:"grow item-main",onClick:()=>r(a),children:[u("b",{children:a.label}),u("small",{children:[n==="reward"?`${a.stars} estrelas`:`${n==="bad"?"−":"+"}${a.stars}`," · ",n==="task"?((h=cu.find(f=>f[0]===(a.period||"livre")))==null?void 0:h[1])+" · ":"",o(a)]})]}),u("button",{class:"icon-btn",onClick:()=>i(l,-1),"aria-label":"Subir",children:"↑"}),u("button",{class:"icon-btn",onClick:()=>i(l,1),"aria-label":"Descer",children:"↓"})]})}),u("button",{class:"btn block",onClick:()=>r({kind:n,emoji:"⭐",label:"",stars:n==="reward"?50:2,period:"livre",kids:[],order:s.length}),children:"Adicionar"}),t&&u(p0,{it:t,onClose:()=>r(null)})]})}function p0({it:n,onClose:e}){var a;const t=se(),[r,s]=j(n),i=l=>s({...r,...l}),o=l=>{const h=new Set(r.kids||[]);h.has(l)?h.delete(l):h.add(l),i({kids:[...h]})};return u(vt,{title:n.id?"Editar":"Novo",onClose:e,children:[u("div",{class:"row gap",children:[u(kS,{value:r.emoji||"⭐",onChange:l=>i({emoji:l})}),u(ue,{label:"Texto",children:u("input",{value:r.label,maxLength:60,onInput:l=>i({label:l.target.value})})})]}),r.kind!=="reward"&&u(ue,{label:"Ilustração",hint:"Automática escolhe pelo texto. Também dá para escolher outra ou usar só o emoji.",children:u(OS,{value:r.clip||void 0,label:r.label||"",onChange:l=>i({clip:l||""})})}),u(ue,{label:r.kind==="reward"?"Custa (estrelas)":"Estrelas",children:u("input",{type:"number",inputMode:"numeric",min:0,value:r.stars,onInput:l=>i({stars:Number(l.target.value)})})}),r.kind==="task"&&u(ue,{label:"Quando",children:u("div",{class:"seg",children:cu.map(([l,h])=>u("button",{type:"button",class:(r.period||"livre")===l?"on":"",onClick:()=>i({period:l}),children:h}))})}),t.children.length>1&&u(ue,{label:"Para quem",hint:"Nenhuma marcada = todas as crianças.",children:u("div",{class:"seg wrap",children:t.children.map(l=>{var h;return u("button",{type:"button",class:(h=r.kids)!=null&&h.includes(l.id)?"on":"",onClick:()=>o(l.id),children:l.name})})})}),u("button",{class:"btn primary block",disabled:!((a=r.label)!=null&&a.trim()),onClick:async()=>{await dS(r)&&e()},children:"Salvar"}),n.id&&u("button",{class:"btn ghost danger-text block",onClick:()=>{fS(n.id),e()},children:"Remover"})]})}function g0(){const n=Z(),e=Me(n.family),[t,r]=j(e.dailyGoalPct),[s,i]=j(e.perfectBonus);return u("div",{class:"card",children:[u("h2",{children:"Regras do jogo"}),u(ue,{label:`Meta diária: ${t}% da rotina`,hint:"Ao alcançar a meta, a criança ganha a peça do dia na temporada.",children:u("input",{type:"range",min:40,max:100,step:5,value:t,onInput:o=>r(Number(o.target.value))})}),u(ue,{label:"Bônus por rotina completa (estrelas)",children:u("input",{type:"number",min:0,max:50,value:s,onInput:o=>i(Number(o.target.value))})}),u(ue,{label:"No modo criança, ao marcar uma tarefa",children:u("div",{class:"seg",children:[u("button",{type:"button",class:e.kidMarks==="pedido"?"on":"",onClick:()=>ws({kidMarks:"pedido"}),children:"um adulto confirma"}),u("button",{type:"button",class:e.kidMarks==="direto"?"on":"",onClick:()=>ws({kidMarks:"direto"}),children:"vale na hora"})]})}),u("button",{class:"btn primary block",onClick:()=>ws({dailyGoalPct:t,perfectBonus:Math.max(0,Math.round(s))}),children:"Salvar"}),u("div",{class:"rules-text",children:[u("h3",{children:"Como funciona"}),u("p",{children:"Cada tarefa, atitude e desafio dá estrelas. O saldo é usado para trocar por prêmios."}),u("p",{children:"Na temporada, a meta diária libera uma peça nova por dia. As grandes conquistas chegam com as estrelas ganhas na temporada; trocar estrelas por prêmios não tira peças da vila."}),u("p",{children:"Combinados não cumpridos tiram estrelas do saldo, mas não desmontam a vila."})]})]})}function _0(){const n=Z(),e=Me(n.family).modules;return u("div",{class:"card",children:[u("h2",{children:"Módulos"}),[["christian","Conteúdo cristão","Histórias bíblicas, orações e mensagens de Jesus"],["advent","Calendário do Advento","1 a 24 de dezembro"],["english","Palavras em inglês","Nas peças da temporada"],["calm","Cantinho da calma","Respiração guiada"],["challenges","Desafios do dia","Um por dia, por idade"]].map(([r,s,i])=>u("label",{class:"toggle",children:[u("input",{type:"checkbox",checked:e[r],onChange:o=>ws({modules:{...e,[r]:o.target.checked}})}),u("span",{children:[u("b",{children:s}),u("small",{children:i})]})]}))]})}function y0({go:n}){var _;const e=Z(),t=(_=e.family)==null?void 0:_.season,r=e.season,s=Ct(jg),[i,o]=j(!1),[a,l]=j(!1),[h,f]=j({}),m=async()=>{if(!r||!t)return;l(!0);const y={};for(const b of e.children){const k=eu(r,t,e.progress[b.id],dn(e.family,e.items,e.entries,b.id,e.today),e.items,b.id,e.today);try{y[b.id]=await GS(r,Wg(r,k),e.slots)}catch{y[b.id]=""}}await AS(y),l(!1)};return!t||!r?u("div",{class:"card",children:[u("h2",{children:"Temporada"}),u("p",{children:"Nenhuma temporada ativa."}),(s||[]).map(y=>u("div",{class:"subcard",children:[y.cover&&u("img",{class:"season-cover",src:Oe(y.id,y.cover),alt:"",onError:b=>b.target.style.display="none"}),u("b",{children:y.name}),u("p",{class:"muted",children:y.tagline}),u("div",{class:"row gap",children:[u("button",{class:"btn primary sm",onClick:()=>wf(y.id,!1),children:"Começar na data oficial"}),u("button",{class:"btn sm",onClick:()=>wf(y.id,!0),children:"Começar hoje"})]})]}))]}):u("div",{class:"card",children:[u("h2",{children:r.name}),u("p",{class:"muted",children:["De ",hn(t.startDay)," a ",hn(t.endDay),"."]}),u("h3",{children:"Meta de estrelas da temporada"}),u("p",{class:"muted small",children:"As grandes conquistas chegam em 12%, 30%, 50%, 75% e 100% desta meta. A sugestão é 75% do que a rotina permite."}),e.children.map(y=>{var k;const b=Gg(e.progress[y.id],e.items,y.id,t);return u("div",{class:"item-row",children:[u(Ot,{child:y,size:32}),u("span",{class:"grow",children:[u("b",{children:y.name}),u("small",{children:[((k=e.progress[y.id])==null?void 0:k.seasonStars)||0," de ",b," · sugerido ",si(e.items,y.id,t)]})]}),u("input",{class:"num",type:"number",min:30,value:h[y.id]??b,onInput:C=>f({...h,[y.id]:C.target.value})}),u("button",{class:"btn sm",disabled:!h[y.id]||Number(h[y.id])===b,onClick:()=>yS(y.id,Math.max(30,Math.round(Number(h[y.id])))),children:"OK"})]})}),u("div",{class:"menu",children:[u("button",{class:"menu-row",onClick:()=>n("images"),children:[u("span",{class:"menu-emo",children:"🖼️"}),u("span",{class:"grow",children:[u("b",{children:"Conferir imagens"}),u("small",{children:"O que já chegou e o que falta"})]}),"›"]}),tu()&&u("button",{class:"menu-row",onClick:()=>n("layout"),children:[u("span",{class:"menu-emo",children:"📐"}),u("span",{class:"grow",children:[u("b",{children:"Ajustar posições das peças"}),u("small",{children:"Vale para todas as famílias"})]}),"›"]})]}),u("button",{class:"btn ghost danger-text block",disabled:a,onClick:()=>o(!0),children:a?"Guardando…":"Encerrar e guardar no álbum"}),i&&u(su,{text:"Encerrar a temporada agora? A vila de cada criança vai para o álbum de aventuras e a próxima temporada poderá começar. Saldo e prêmios continuam.",yes:"Encerrar",onClose:()=>o(!1),onYes:m})]})}function v0(){var a;const n=Z(),e=n.family,[t,r]=j(e.name),[s,i]=j(""),o=e.owner===((a=n.user)==null?void 0:a.uid);return u("div",{class:"card",children:[u("h2",{children:"Família"}),u(ue,{label:"Nome",children:u("input",{value:t,maxLength:40,onInput:l=>r(l.target.value)})}),u("button",{class:"btn sm",disabled:!t.trim()||t===e.name,onClick:()=>IS(t),children:"Salvar nome"}),u("h3",{children:"Responsáveis"}),Object.entries(e.members||{}).map(([l,h])=>{var f;return u("div",{class:"item-row",children:[u("span",{class:"grow",children:[u("b",{children:h.name||h.email}),u("small",{children:[h.email," · ",h.role==="owner"?"criador(a)":"responsável"]})]}),o&&l!==((f=n.user)==null?void 0:f.uid)&&u("button",{class:"link small danger-text",onClick:()=>TS(l),children:"remover"})]})}),u("h3",{children:"Convidar outro adulto"}),u("p",{class:"muted small",children:"A pessoa entra com esse e-mail (Google ou e-mail confirmado) e aceita o convite."}),(e.invites||[]).map(l=>u("div",{class:"item-row",children:[u("span",{class:"grow",children:[l," ",u("small",{class:"muted",children:"convidado"})]}),u("button",{class:"link small",onClick:()=>ES(l),children:"cancelar"})]})),u("div",{class:"row gap",children:[u("input",{type:"email",placeholder:"email@exemplo.com",value:s,onInput:l=>i(l.target.value)}),u("button",{class:"btn",disabled:!/^\S+@\S+\.\S+$/.test(s),onClick:()=>{wS(s),i("")},children:"Convidar"})]})]})}function I0({done:n}){const[e,t]=j(""),[r,s]=j("");return u("div",{class:"card",children:e?u(Nr,{title:"Repita o novo PIN",onDone:async i=>{i===e?(await vS(i),at("PIN alterado"),n()):(s("Os PINs não conferem"),t(""))}}):u(Nr,{title:"Novo PIN",error:r,onDone:i=>{t(i),s("")}})})}function w0(){const[n,e]=j(1),[t,r]=j(""),[s,i]=j([]),a=(ou("licenses")||[]).map(l=>({id:l.id,...l.data})).sort((l,h)=>h.createdAt-l.createdAt);return u("div",{class:"card",children:[u("h2",{children:"Licenças"}),u("p",{class:"muted small",children:"Cada código cria uma família. Envie o código para quem comprou."}),u("div",{class:"row gap",children:[u(ue,{label:"Quantidade",children:u("input",{type:"number",min:1,max:50,value:n,onInput:l=>e(Number(l.target.value))})}),u(ue,{label:"Anotação (ex.: nome da cliente)",children:u("input",{value:t,maxLength:60,onInput:l=>r(l.target.value)})})]}),u("button",{class:"btn primary block",onClick:async()=>i(await e_(Math.min(50,Math.max(1,n)),t)),children:"Criar códigos"}),s.length>0&&u("div",{class:"codes",children:[u("pre",{children:s.join(`
`)}),u("button",{class:"btn sm",onClick:()=>{var l;(l=navigator.clipboard)==null||l.writeText(s.join(`
`)),at("Copiado")},children:"Copiar"})]}),u("h3",{children:"Códigos"}),a.map(l=>u("div",{class:"item-row",children:u("span",{class:"grow",children:[u("b",{class:"mono",children:l.id}),u("small",{children:[l.note||"sem anotação"," · ",l.usedBy?"usado":"disponível"]})]})})),ra("")&&null]})}function Mi({text:n}){return u("div",{class:"splash",children:[u("div",{class:"brand-mark spin",children:"✦"}),u("p",{class:"muted",children:n||"Carregando…"})]})}function E0(){const n=Z();return n.toast?u("div",{class:"toast "+(n.toast.kind||""),role:"status",children:n.toast.text},n.toast.id):null}function T0(){var e;const n=Z();it(()=>{var s;const t=(s=n.season)==null?void 0:s.palette,r=document.documentElement.style;t&&(r.setProperty("--primary",t.primary),r.setProperty("--secondary",t.secondary),r.setProperty("--accent",t.accent),r.setProperty("--paper",t.paper),r.setProperty("--ink",t.ink),r.setProperty("--sky",t.sky))},[(e=n.season)==null?void 0:e.id])}function b0(){const n=Z();T0();let e;return n.ready?n.user?!n.user.verified&&n.user.provider==="password"?e=u(NS,{}):n.familiesLoaded?n.error&&!n.families.length&&!n.invites.length&&n.error.includes("permission")?e=u(Mi,{text:"O banco ainda não aceita o app novo. As regras de segurança precisam ser publicadas no Firebase."}):n.familyId?n.family?n.ui.kidMode?e=u(s0,{}):e=u(A0,{}):e=u(Mi,{}):e=u(LS,{}):e=u(Mi,{}):e=u(VS,{}):e=u(Mi,{}),u(Re,{children:[n.demo&&u("div",{class:"demo-band",children:["Demonstração",n.today!==Hl()?` · data simulada ${n.today.split("-").reverse().join("/")}`:""]}),n.offline&&u("div",{class:"offline-band",children:"Sem internet: as mudanças são enviadas quando a conexão voltar."}),e,u(E0,{})]})}function A0(){const n=Z(),[e,t]=j(!1),[r,s]=j(""),i=n.ui.screen==="admin"&&n.ui.adminUntil>Date.now(),o=()=>{!Me(n.family).pinHash||n.ui.adminUntil>Date.now()?Se({screen:"admin",adminUntil:Date.now()+15*6e4}):t(!0)},a=async f=>{await Yg(f)?(t(!1),s(""),Se({screen:"admin",adminUntil:Date.now()+15*6e4})):s("PIN incorreto")},l=n.ui.screen,h=[["hoje","☀️","Hoje"],["mundo","🏘️","Mundo"],["premios","🎁","Prêmios"],["noite","🌙","Noite"]];return u("div",{class:"shell",children:[u("header",{class:"top",children:[l&&l!=="admin"?u("button",{class:"icon-btn",onClick:()=>Se({screen:null}),"aria-label":"Voltar",children:"←"}):u("span",{class:"brand-mark sm",children:"✦"}),u("div",{class:"top-title",children:[u("b",{children:n.family.name}),n.requests.length>0&&u("span",{class:"badge",title:"Pedidos esperando",children:n.requests.length})]}),u("button",{class:"icon-btn",onClick:p_,"aria-label":"Modo criança",title:"Modo criança",children:"🧒"}),u("button",{class:"icon-btn",onClick:o,"aria-label":"Área dos responsáveis",title:"Responsáveis",children:"⚙️"})]}),u("main",{children:i?u(u0,{}):l==="calma"?u(f_,{childId:n.ui.screenArg}):l==="album"?u(m_,{childId:n.ui.screenArg}):l==="advento"?u(a_,{}):n.ui.tab==="hoje"?u($S,{}):n.ui.tab==="mundo"?u(WS,{}):n.ui.tab==="premios"?u(QS,{}):u(d_,{})}),!i&&u("nav",{class:"tabbar",children:h.map(([f,m,_])=>u("button",{class:n.ui.tab===f&&!l?"on":"",onClick:()=>Se({tab:f,screen:null}),"aria-current":n.ui.tab===f,children:[u("span",{children:m}),_]}))}),e&&u(vt,{title:"Área dos responsáveis",onClose:()=>{t(!1),s("")},children:u(Nr,{title:"Digite o PIN",error:r,onDone:a})})]})}rS();ny(u(b0,{}),document.getElementById("app"));"serviceWorker"in navigator&&location.protocol==="https:"&&addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
