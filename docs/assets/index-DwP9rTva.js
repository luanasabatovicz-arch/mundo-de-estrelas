(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var Co,ue,If,An,oh,wf,za,kc,Ka,Ga,Es={},Ef=[],$_=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Dc=Array.isArray;function Xt(n,e){for(var t in e)n[t]=e[t];return n}function Tf(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function q_(n,e,t){var r,s,i,o={};for(i in e)i=="key"?r=e[i]:i=="ref"?s=e[i]:o[i]=e[i];if(arguments.length>2&&(o.children=arguments.length>3?Co.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(i in n.defaultProps)o[i]===void 0&&(o[i]=n.defaultProps[i]);return Oi(n,o,r,s,null)}function Oi(n,e,t,r,s){var i={type:n,props:e,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:s??++If,__i:-1,__u:0};return s==null&&ue.vnode!=null&&ue.vnode(i),i}function Re(n){return n.children}function Mi(n,e){this.props=n,this.context=e}function gr(n,e){if(e==null)return n.__?gr(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?gr(n):null}function bf(n){var e,t;if((n=n.__)!=null&&n.__c!=null){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null){n.__e=n.__c.base=t.__e;break}return bf(n)}}function ah(n){(!n.__d&&(n.__d=!0)&&An.push(n)&&!to.__r++||oh!==ue.debounceRendering)&&((oh=ue.debounceRendering)||wf)(to)}function to(){var n,e,t,r,s,i,o,a;for(An.sort(za);n=An.shift();)n.__d&&(e=An.length,r=void 0,i=(s=(t=n).__v).__e,o=[],a=[],t.__P&&((r=Xt({},s)).__v=s.__v+1,ue.vnode&&ue.vnode(r),Vc(t.__P,r,s,t.__n,t.__P.namespaceURI,32&s.__u?[i]:null,o,i??gr(s),!!(32&s.__u),a),r.__v=s.__v,r.__.__k[r.__i]=r,Rf(o,r,a),r.__e!=i&&bf(r)),An.length>e&&An.sort(za));to.__r=0}function Af(n,e,t,r,s,i,o,a,l,h,f){var m,_,y,b,R,k=r&&r.__k||Ef,N=e.length;for(t.__d=l,z_(t,e,k),l=t.__d,m=0;m<N;m++)(y=t.__k[m])!=null&&(_=y.__i===-1?Es:k[y.__i]||Es,y.__i=m,Vc(n,y,_,s,i,o,a,l,h,f),b=y.__e,y.ref&&_.ref!=y.ref&&(_.ref&&Nc(_.ref,null,y),f.push(y.ref,y.__c||b,y)),R==null&&b!=null&&(R=b),65536&y.__u||_.__k===y.__k?l=Sf(y,l,n):typeof y.type=="function"&&y.__d!==void 0?l=y.__d:b&&(l=b.nextSibling),y.__d=void 0,y.__u&=-196609);t.__d=l,t.__e=R}function z_(n,e,t){var r,s,i,o,a,l=e.length,h=t.length,f=h,m=0;for(n.__k=[],r=0;r<l;r++)(s=e[r])!=null&&typeof s!="boolean"&&typeof s!="function"?(o=r+m,(s=n.__k[r]=typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?Oi(null,s,null,null,null):Dc(s)?Oi(Re,{children:s},null,null,null):s.constructor===void 0&&s.__b>0?Oi(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s).__=n,s.__b=n.__b+1,i=null,(a=s.__i=K_(s,t,o,f))!==-1&&(f--,(i=t[a])&&(i.__u|=131072)),i==null||i.__v===null?(a==-1&&m--,typeof s.type!="function"&&(s.__u|=65536)):a!==o&&(a==o-1?m--:a==o+1?m++:(a>o?m--:m++,s.__u|=65536))):s=n.__k[r]=null;if(f)for(r=0;r<h;r++)(i=t[r])!=null&&!(131072&i.__u)&&(i.__e==n.__d&&(n.__d=gr(i)),Pf(i,i))}function Sf(n,e,t){var r,s;if(typeof n.type=="function"){for(r=n.__k,s=0;r&&s<r.length;s++)r[s]&&(r[s].__=n,e=Sf(r[s],e,t));return e}n.__e!=e&&(e&&n.type&&!t.contains(e)&&(e=gr(n)),t.insertBefore(n.__e,e||null),e=n.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function K_(n,e,t,r){var s=n.key,i=n.type,o=t-1,a=t+1,l=e[t];if(l===null||l&&s==l.key&&i===l.type&&!(131072&l.__u))return t;if(r>(l!=null&&!(131072&l.__u)?1:0))for(;o>=0||a<e.length;){if(o>=0){if((l=e[o])&&!(131072&l.__u)&&s==l.key&&i===l.type)return o;o--}if(a<e.length){if((l=e[a])&&!(131072&l.__u)&&s==l.key&&i===l.type)return a;a++}}return-1}function ch(n,e,t){e[0]==="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||$_.test(e)?t:t+"px"}function Ti(n,e,t,r,s){var i;e:if(e==="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof r=="string"&&(n.style.cssText=r=""),r)for(e in r)t&&e in t||ch(n.style,e,"");if(t)for(e in t)r&&t[e]===r[e]||ch(n.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")i=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in n||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),n.l||(n.l={}),n.l[e+i]=t,t?r?t.u=r.u:(t.u=kc,n.addEventListener(e,i?Ga:Ka,i)):n.removeEventListener(e,i?Ga:Ka,i);else{if(s=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!=="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function lh(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e.t==null)e.t=kc++;else if(e.t<t.u)return;return t(ue.event?ue.event(e):e)}}}function Vc(n,e,t,r,s,i,o,a,l,h){var f,m,_,y,b,R,k,N,O,U,M,q,$,T,v,I,E=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(l=!!(32&t.__u),i=[a=e.__e=t.__e]),(f=ue.__b)&&f(e);e:if(typeof E=="function")try{if(N=e.props,O="prototype"in E&&E.prototype.render,U=(f=E.contextType)&&r[f.__c],M=f?U?U.props.value:f.__:r,t.__c?k=(m=e.__c=t.__c).__=m.__E:(O?e.__c=m=new E(N,M):(e.__c=m=new Mi(N,M),m.constructor=E,m.render=W_),U&&U.sub(m),m.props=N,m.state||(m.state={}),m.context=M,m.__n=r,_=m.__d=!0,m.__h=[],m._sb=[]),O&&m.__s==null&&(m.__s=m.state),O&&E.getDerivedStateFromProps!=null&&(m.__s==m.state&&(m.__s=Xt({},m.__s)),Xt(m.__s,E.getDerivedStateFromProps(N,m.__s))),y=m.props,b=m.state,m.__v=e,_)O&&E.getDerivedStateFromProps==null&&m.componentWillMount!=null&&m.componentWillMount(),O&&m.componentDidMount!=null&&m.__h.push(m.componentDidMount);else{if(O&&E.getDerivedStateFromProps==null&&N!==y&&m.componentWillReceiveProps!=null&&m.componentWillReceiveProps(N,M),!m.__e&&(m.shouldComponentUpdate!=null&&m.shouldComponentUpdate(N,m.__s,M)===!1||e.__v===t.__v)){for(e.__v!==t.__v&&(m.props=N,m.state=m.__s,m.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(A){A&&(A.__=e)}),q=0;q<m._sb.length;q++)m.__h.push(m._sb[q]);m._sb=[],m.__h.length&&o.push(m);break e}m.componentWillUpdate!=null&&m.componentWillUpdate(N,m.__s,M),O&&m.componentDidUpdate!=null&&m.__h.push(function(){m.componentDidUpdate(y,b,R)})}if(m.context=M,m.props=N,m.__P=n,m.__e=!1,$=ue.__r,T=0,O){for(m.state=m.__s,m.__d=!1,$&&$(e),f=m.render(m.props,m.state,m.context),v=0;v<m._sb.length;v++)m.__h.push(m._sb[v]);m._sb=[]}else do m.__d=!1,$&&$(e),f=m.render(m.props,m.state,m.context),m.state=m.__s;while(m.__d&&++T<25);m.state=m.__s,m.getChildContext!=null&&(r=Xt(Xt({},r),m.getChildContext())),O&&!_&&m.getSnapshotBeforeUpdate!=null&&(R=m.getSnapshotBeforeUpdate(y,b)),Af(n,Dc(I=f!=null&&f.type===Re&&f.key==null?f.props.children:f)?I:[I],e,t,r,s,i,o,a,l,h),m.base=e.__e,e.__u&=-161,m.__h.length&&o.push(m),k&&(m.__E=m.__=null)}catch(A){if(e.__v=null,l||i!=null){for(e.__u|=l?160:128;a&&a.nodeType===8&&a.nextSibling;)a=a.nextSibling;i[i.indexOf(a)]=null,e.__e=a}else e.__e=t.__e,e.__k=t.__k;ue.__e(A,e,t)}else i==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=G_(t.__e,e,t,r,s,i,o,l,h);(f=ue.diffed)&&f(e)}function Rf(n,e,t){e.__d=void 0;for(var r=0;r<t.length;r++)Nc(t[r],t[++r],t[++r]);ue.__c&&ue.__c(e,n),n.some(function(s){try{n=s.__h,s.__h=[],n.some(function(i){i.call(s)})}catch(i){ue.__e(i,s.__v)}})}function G_(n,e,t,r,s,i,o,a,l){var h,f,m,_,y,b,R,k=t.props,N=e.props,O=e.type;if(O==="svg"?s="http://www.w3.org/2000/svg":O==="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),i!=null){for(h=0;h<i.length;h++)if((y=i[h])&&"setAttribute"in y==!!O&&(O?y.localName===O:y.nodeType===3)){n=y,i[h]=null;break}}if(n==null){if(O===null)return document.createTextNode(N);n=document.createElementNS(s,O,N.is&&N),a&&(ue.__m&&ue.__m(e,i),a=!1),i=null}if(O===null)k===N||a&&n.data===N||(n.data=N);else{if(i=i&&Co.call(n.childNodes),k=t.props||Es,!a&&i!=null)for(k={},h=0;h<n.attributes.length;h++)k[(y=n.attributes[h]).name]=y.value;for(h in k)if(y=k[h],h!="children"){if(h=="dangerouslySetInnerHTML")m=y;else if(!(h in N)){if(h=="value"&&"defaultValue"in N||h=="checked"&&"defaultChecked"in N)continue;Ti(n,h,null,y,s)}}for(h in N)y=N[h],h=="children"?_=y:h=="dangerouslySetInnerHTML"?f=y:h=="value"?b=y:h=="checked"?R=y:a&&typeof y!="function"||k[h]===y||Ti(n,h,y,k[h],s);if(f)a||m&&(f.__html===m.__html||f.__html===n.innerHTML)||(n.innerHTML=f.__html),e.__k=[];else if(m&&(n.innerHTML=""),Af(n,Dc(_)?_:[_],e,t,r,O==="foreignObject"?"http://www.w3.org/1999/xhtml":s,i,o,i?i[0]:t.__k&&gr(t,0),a,l),i!=null)for(h=i.length;h--;)Tf(i[h]);a||(h="value",O==="progress"&&b==null?n.removeAttribute("value"):b!==void 0&&(b!==n[h]||O==="progress"&&!b||O==="option"&&b!==k[h])&&Ti(n,h,b,k[h],s),h="checked",R!==void 0&&R!==n[h]&&Ti(n,h,R,k[h],s))}return n}function Nc(n,e,t){try{if(typeof n=="function"){var r=typeof n.__u=="function";r&&n.__u(),r&&e==null||(n.__u=n(e))}else n.current=e}catch(s){ue.__e(s,t)}}function Pf(n,e,t){var r,s;if(ue.unmount&&ue.unmount(n),(r=n.ref)&&(r.current&&r.current!==n.__e||Nc(r,null,e)),(r=n.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){ue.__e(i,e)}r.base=r.__P=null}if(r=n.__k)for(s=0;s<r.length;s++)r[s]&&Pf(r[s],e,t||typeof n.type!="function");t||Tf(n.__e),n.__c=n.__=n.__e=n.__d=void 0}function W_(n,e,t){return this.constructor(n,t)}function H_(n,e,t){var r,s,i,o;ue.__&&ue.__(n,e),s=(r=!1)?null:e.__k,i=[],o=[],Vc(e,n=e.__k=q_(Re,null,[n]),s||Es,Es,e.namespaceURI,s?null:e.firstChild?Co.call(e.childNodes):null,i,s?s.__e:e.firstChild,r,o),Rf(i,n,o)}Co=Ef.slice,ue={__e:function(n,e,t,r){for(var s,i,o;e=e.__;)if((s=e.__c)&&!s.__)try{if((i=s.constructor)&&i.getDerivedStateFromError!=null&&(s.setState(i.getDerivedStateFromError(n)),o=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(n,r||{}),o=s.__d),o)return s.__E=s}catch(a){n=a}throw n}},If=0,Mi.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Xt({},this.state),typeof n=="function"&&(n=n(Xt({},t),this.props)),n&&Xt(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),ah(this))},Mi.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),ah(this))},Mi.prototype.render=Re,An=[],wf=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,za=function(n,e){return n.__v.__b-e.__v.__b},to.__r=0,kc=0,Ka=lh(!1),Ga=lh(!0);var Q_=0;function u(n,e,t,r,s,i){e||(e={});var o,a,l=e;"ref"in e&&(o=e.ref,delete e.ref);var h={type:n,props:l,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--Q_,__i:-1,__u:0,__source:s,__self:i};if(typeof n=="function"&&(o=n.defaultProps))for(a in o)l[a]===void 0&&(l[a]=o[a]);return ue.vnode&&ue.vnode(h),h}var Ts,Ie,Aa,uh,no=0,Cf=[],Ae=ue,hh=Ae.__b,dh=Ae.__r,fh=Ae.diffed,mh=Ae.__c,ph=Ae.unmount,gh=Ae.__;function xc(n,e){Ae.__h&&Ae.__h(Ie,n,no||e),no=0;var t=Ie.__H||(Ie.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({}),t.__[n]}function j(n){return no=1,J_(Df,n)}function J_(n,e,t){var r=xc(Ts++,2);if(r.t=n,!r.__c&&(r.__=[Df(void 0,e),function(a){var l=r.__N?r.__N[0]:r.__[0],h=r.t(l,a);l!==h&&(r.__N=[h,r.__[1]],r.__c.setState({}))}],r.__c=Ie,!Ie.u)){var s=function(a,l,h){if(!r.__c.__H)return!0;var f=r.__c.__H.__.filter(function(_){return!!_.__c});if(f.every(function(_){return!_.__N}))return!i||i.call(this,a,l,h);var m=!1;return f.forEach(function(_){if(_.__N){var y=_.__[0];_.__=_.__N,_.__N=void 0,y!==_.__[0]&&(m=!0)}}),!(!m&&r.__c.props===a)&&(!i||i.call(this,a,l,h))};Ie.u=!0;var i=Ie.shouldComponentUpdate,o=Ie.componentWillUpdate;Ie.componentWillUpdate=function(a,l,h){if(this.__e){var f=i;i=void 0,s(a,l,h),i=f}o&&o.call(this,a,l,h)},Ie.shouldComponentUpdate=s}return r.__N||r.__}function at(n,e){var t=xc(Ts++,3);!Ae.__s&&kf(t.__H,e)&&(t.__=n,t.i=e,Ie.__H.__h.push(t))}function Wa(n){return no=5,Y_(function(){return{current:n}},[])}function Y_(n,e){var t=xc(Ts++,7);return kf(t.__H,e)&&(t.__=n(),t.__H=e,t.__h=n),t.__}function X_(){for(var n;n=Cf.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(Li),n.__H.__h.forEach(Ha),n.__H.__h=[]}catch(e){n.__H.__h=[],Ae.__e(e,n.__v)}}Ae.__b=function(n){Ie=null,hh&&hh(n)},Ae.__=function(n,e){n&&e.__k&&e.__k.__m&&(n.__m=e.__k.__m),gh&&gh(n,e)},Ae.__r=function(n){dh&&dh(n),Ts=0;var e=(Ie=n.__c).__H;e&&(Aa===Ie?(e.__h=[],Ie.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.i=t.__N=void 0})):(e.__h.forEach(Li),e.__h.forEach(Ha),e.__h=[],Ts=0)),Aa=Ie},Ae.diffed=function(n){fh&&fh(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(Cf.push(e)!==1&&uh===Ae.requestAnimationFrame||((uh=Ae.requestAnimationFrame)||Z_)(X_)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.i=void 0})),Aa=Ie=null},Ae.__c=function(n,e){e.some(function(t){try{t.__h.forEach(Li),t.__h=t.__h.filter(function(r){return!r.__||Ha(r)})}catch(r){e.some(function(s){s.__h&&(s.__h=[])}),e=[],Ae.__e(r,t.__v)}}),mh&&mh(n,e)},Ae.unmount=function(n){ph&&ph(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.forEach(function(r){try{Li(r)}catch(s){e=s}}),t.__H=void 0,e&&Ae.__e(e,t.__v))};var _h=typeof requestAnimationFrame=="function";function Z_(n){var e,t=function(){clearTimeout(r),_h&&cancelAnimationFrame(e),setTimeout(n)},r=setTimeout(t,100);_h&&(e=requestAnimationFrame(t))}function Li(n){var e=Ie,t=n.__c;typeof t=="function"&&(n.__c=void 0,t()),Ie=e}function Ha(n){var e=Ie;n.__c=n.__(),Ie=e}function kf(n,e){return!n||n.length!==e.length||e.some(function(t,r){return t!==n[r]})}function Df(n,e){return typeof e=="function"?e(n):e}var yh={};/**
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
 */const Vf=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ey=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Nf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,h=l?n[s+2]:0,f=i>>2,m=(i&3)<<4|a>>4;let _=(a&15)<<2|h>>6,y=h&63;l||(y=64,o||(_=64)),r.push(t[f],t[m],t[_],t[y])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Vf(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ey(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||a==null||h==null||m==null)throw new ty;const _=i<<2|a>>4;if(r.push(_),h!==64){const y=a<<4&240|h>>2;if(r.push(y),m!==64){const b=h<<6&192|m;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ty extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ny=function(n){const e=Vf(n);return Nf.encodeByteArray(e,!0)},xf=function(n){return ny(n).replace(/\./g,"")},Of=function(n){try{return Nf.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ry(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const sy=()=>ry().__FIREBASE_DEFAULTS__,iy=()=>{if(typeof process>"u"||typeof yh>"u")return;const n=yh.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},oy=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Of(n[1]);return e&&JSON.parse(e)},ko=()=>{try{return sy()||iy()||oy()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ay=n=>{var e,t;return(t=(e=ko())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Mf=()=>{var n;return(n=ko())===null||n===void 0?void 0:n.config},Lf=n=>{var e;return(e=ko())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class cy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ly(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function uy(){var n;const e=(n=ko())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function dy(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function fy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function my(){const n=Pe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ff(){return!uy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Uf(){try{return typeof indexedDB=="object"}catch{return!1}}function py(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const gy="FirebaseError";class xt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=gy,Object.setPrototypeOf(this,xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$s.prototype.create)}}class $s{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?_y(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new xt(s,a,r)}}function _y(n,e){return n.replace(yy,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const yy=/\{\$([^}]+)}/g;function vy(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Nn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(vh(i)&&vh(o)){if(!Nn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function vh(n){return n!==null&&typeof n=="object"}/**
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
 */function qs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function os(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function as(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Iy(n,e){const t=new wy(n,e);return t.subscribe.bind(t)}class wy{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Ey(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Sa),s.error===void 0&&(s.error=Sa),s.complete===void 0&&(s.complete=Sa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ey(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Sa(){}/**
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
 */function Ee(n){return n&&n._delegate?n._delegate:n}class xn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Tn="[DEFAULT]";/**
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
 */class Ty{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new cy;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ay(e))try{this.getOrInitializeService({instanceIdentifier:Tn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Tn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Tn){return this.instances.has(e)}getOptions(e=Tn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:by(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Tn){return this.component?this.component.multipleInstances?e:Tn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function by(n){return n===Tn?void 0:n}function Ay(n){return n.instantiationMode==="EAGER"}/**
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
 */class Sy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ty(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ee||(ee={}));const Ry={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Py=ee.INFO,Cy={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},ky=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Cy[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Oc{constructor(e){this.name=e,this._logLevel=Py,this._logHandler=ky,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ry[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const Dy=(n,e)=>e.some(t=>n instanceof t);let Ih,wh;function Vy(){return Ih||(Ih=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ny(){return wh||(wh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bf=new WeakMap,Qa=new WeakMap,jf=new WeakMap,Ra=new WeakMap,Mc=new WeakMap;function xy(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(en(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Bf.set(t,n)}).catch(()=>{}),Mc.set(e,n),e}function Oy(n){if(Qa.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Qa.set(n,e)}let Ja={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Qa.get(n);if(e==="objectStoreNames")return n.objectStoreNames||jf.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return en(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function My(n){Ja=n(Ja)}function Ly(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Pa(this),e,...t);return jf.set(r,e.sort?e.sort():[e]),en(r)}:Ny().includes(n)?function(...e){return n.apply(Pa(this),e),en(Bf.get(this))}:function(...e){return en(n.apply(Pa(this),e))}}function Fy(n){return typeof n=="function"?Ly(n):(n instanceof IDBTransaction&&Oy(n),Dy(n,Vy())?new Proxy(n,Ja):n)}function en(n){if(n instanceof IDBRequest)return xy(n);if(Ra.has(n))return Ra.get(n);const e=Fy(n);return e!==n&&(Ra.set(n,e),Mc.set(e,n)),e}const Pa=n=>Mc.get(n);function Uy(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),a=en(o);return r&&o.addEventListener("upgradeneeded",l=>{r(en(o.result),l.oldVersion,l.newVersion,en(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}const By=["get","getKey","getAll","getAllKeys","count"],jy=["put","add","delete","clear"],Ca=new Map;function Eh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ca.get(e))return Ca.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=jy.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||By.includes(t)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(a.shift())),(await Promise.all([h[t](...a),s&&l.done]))[0]};return Ca.set(e,i),i}My(n=>({...n,get:(e,t,r)=>Eh(e,t)||n.get(e,t,r),has:(e,t)=>!!Eh(e,t)||n.has(e,t)}));/**
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
 */class $y{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(qy(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function qy(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ya="@firebase/app",Th="0.10.13";/**
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
 */const kt=new Oc("@firebase/app"),zy="@firebase/app-compat",Ky="@firebase/analytics-compat",Gy="@firebase/analytics",Wy="@firebase/app-check-compat",Hy="@firebase/app-check",Qy="@firebase/auth",Jy="@firebase/auth-compat",Yy="@firebase/database",Xy="@firebase/data-connect",Zy="@firebase/database-compat",ev="@firebase/functions",tv="@firebase/functions-compat",nv="@firebase/installations",rv="@firebase/installations-compat",sv="@firebase/messaging",iv="@firebase/messaging-compat",ov="@firebase/performance",av="@firebase/performance-compat",cv="@firebase/remote-config",lv="@firebase/remote-config-compat",uv="@firebase/storage",hv="@firebase/storage-compat",dv="@firebase/firestore",fv="@firebase/vertexai-preview",mv="@firebase/firestore-compat",pv="firebase",gv="10.14.1";/**
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
 */const Xa="[DEFAULT]",_v={[Ya]:"fire-core",[zy]:"fire-core-compat",[Gy]:"fire-analytics",[Ky]:"fire-analytics-compat",[Hy]:"fire-app-check",[Wy]:"fire-app-check-compat",[Qy]:"fire-auth",[Jy]:"fire-auth-compat",[Yy]:"fire-rtdb",[Xy]:"fire-data-connect",[Zy]:"fire-rtdb-compat",[ev]:"fire-fn",[tv]:"fire-fn-compat",[nv]:"fire-iid",[rv]:"fire-iid-compat",[sv]:"fire-fcm",[iv]:"fire-fcm-compat",[ov]:"fire-perf",[av]:"fire-perf-compat",[cv]:"fire-rc",[lv]:"fire-rc-compat",[uv]:"fire-gcs",[hv]:"fire-gcs-compat",[dv]:"fire-fst",[mv]:"fire-fst-compat",[fv]:"fire-vertex","fire-js":"fire-js",[pv]:"fire-js-all"};/**
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
 */const ro=new Map,yv=new Map,Za=new Map;function bh(n,e){try{n.container.addComponent(e)}catch(t){kt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function _r(n){const e=n.name;if(Za.has(e))return kt.debug(`There were multiple attempts to register component ${e}.`),!1;Za.set(e,n);for(const t of ro.values())bh(t,n);for(const t of yv.values())bh(t,n);return!0}function Lc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ht(n){return n.settings!==void 0}/**
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
 */const vv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},tn=new $s("app","Firebase",vv);/**
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
 */class Iv{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tn.create("app-deleted",{appName:this._name})}}/**
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
 */const Nr=gv;function $f(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Xa,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw tn.create("bad-app-name",{appName:String(s)});if(t||(t=Mf()),!t)throw tn.create("no-options");const i=ro.get(s);if(i){if(Nn(t,i.options)&&Nn(r,i.config))return i;throw tn.create("duplicate-app",{appName:s})}const o=new Sy(s);for(const l of Za.values())o.addComponent(l);const a=new Iv(t,r,o);return ro.set(s,a),a}function wv(n=Xa){const e=ro.get(n);if(!e&&n===Xa&&Mf())return $f();if(!e)throw tn.create("no-app",{appName:n});return e}function nn(n,e,t){var r;let s=(r=_v[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kt.warn(a.join(" "));return}_r(new xn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Ev="firebase-heartbeat-database",Tv=1,bs="firebase-heartbeat-store";let ka=null;function qf(){return ka||(ka=Uy(Ev,Tv,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(bs)}catch(t){console.warn(t)}}}}).catch(n=>{throw tn.create("idb-open",{originalErrorMessage:n.message})})),ka}async function bv(n){try{const t=(await qf()).transaction(bs),r=await t.objectStore(bs).get(zf(n));return await t.done,r}catch(e){if(e instanceof xt)kt.warn(e.message);else{const t=tn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kt.warn(t.message)}}}async function Ah(n,e){try{const r=(await qf()).transaction(bs,"readwrite");await r.objectStore(bs).put(e,zf(n)),await r.done}catch(t){if(t instanceof xt)kt.warn(t.message);else{const r=tn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});kt.warn(r.message)}}}function zf(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Av=1024,Sv=30*24*60*60*1e3;class Rv{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Cv(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Sh();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Sv}),this._storage.overwrite(this._heartbeatsCache))}catch(r){kt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Sh(),{heartbeatsToSend:r,unsentEntries:s}=Pv(this._heartbeatsCache.heartbeats),i=xf(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return kt.warn(t),""}}}function Sh(){return new Date().toISOString().substring(0,10)}function Pv(n,e=Av){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Rh(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Rh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Cv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Uf()?py().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await bv(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ah(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ah(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Rh(n){return xf(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function kv(n){_r(new xn("platform-logger",e=>new $y(e),"PRIVATE")),_r(new xn("heartbeat",e=>new Rv(e),"PRIVATE")),nn(Ya,Th,n),nn(Ya,Th,"esm2017"),nn("fire-js","")}kv("");var Dv="firebase",Vv="10.14.1";/**
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
 */nn(Dv,Vv,"app");function Fc(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Kf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Nv=Kf,Gf=new $s("auth","Firebase",Kf());/**
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
 */const so=new Oc("@firebase/auth");function xv(n,...e){so.logLevel<=ee.WARN&&so.warn(`Auth (${Nr}): ${n}`,...e)}function Fi(n,...e){so.logLevel<=ee.ERROR&&so.error(`Auth (${Nr}): ${n}`,...e)}/**
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
 */function ct(n,...e){throw Bc(n,...e)}function dt(n,...e){return Bc(n,...e)}function Uc(n,e,t){const r=Object.assign(Object.assign({},Nv()),{[e]:t});return new $s("auth","Firebase",r).create(e,{appName:n.name})}function Pt(n){return Uc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ov(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&ct(n,"argument-error"),Uc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Bc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Gf.create(n,...e)}function H(n,e,...t){if(!n)throw Bc(e,...t)}function bt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Fi(e),new Error(e)}function Dt(n,e){n||bt(e)}/**
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
 */function ec(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Mv(){return Ph()==="http:"||Ph()==="https:"}function Ph(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Lv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Mv()||dy()||"connection"in navigator)?navigator.onLine:!0}function Fv(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class zs{constructor(e,t){this.shortDelay=e,this.longDelay=t,Dt(t>e,"Short delay should be less than long delay!"),this.isMobile=ly()||fy()}get(){return Lv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function jc(n,e){Dt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Wf{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Uv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Bv=new zs(3e4,6e4);function Ot(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Mt(n,e,t,r,s={}){return Hf(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=qs(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:l},i);return hy()||(h.referrerPolicy="no-referrer"),Wf.fetch()(Qf(n,n.config.apiHost,t,a),h)})}async function Hf(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Uv),e);try{const s=new $v(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw bi(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,h]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw bi(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw bi(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw bi(n,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Uc(n,f,h);ct(n,f)}}catch(s){if(s instanceof xt)throw s;ct(n,"network-request-failed",{message:String(s)})}}async function Ks(n,e,t,r,s={}){const i=await Mt(n,e,t,r,s);return"mfaPendingCredential"in i&&ct(n,"multi-factor-auth-required",{_serverResponse:i}),i}function Qf(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?jc(n.config,s):`${n.config.apiScheme}://${s}`}function jv(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class $v{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(dt(this.auth,"network-request-failed")),Bv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function bi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=dt(n,e,r);return s.customData._tokenResponse=t,s}function Ch(n){return n!==void 0&&n.enterprise!==void 0}class qv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return jv(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function zv(n,e){return Mt(n,"GET","/v2/recaptchaConfig",Ot(n,e))}/**
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
 */async function Kv(n,e){return Mt(n,"POST","/v1/accounts:delete",e)}async function Jf(n,e){return Mt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function fs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Gv(n,e=!1){const t=Ee(n),r=await t.getIdToken(e),s=$c(r);H(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:fs(Da(s.auth_time)),issuedAtTime:fs(Da(s.iat)),expirationTime:fs(Da(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Da(n){return Number(n)*1e3}function $c(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Fi("JWT malformed, contained fewer than 3 sections"),null;try{const s=Of(t);return s?JSON.parse(s):(Fi("Failed to decode base64 JWT payload"),null)}catch(s){return Fi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function kh(n){const e=$c(n);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function As(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof xt&&Wv(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Wv({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Hv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class tc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=fs(this.lastLoginAt),this.creationTime=fs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function io(n){var e;const t=n.auth,r=await n.getIdToken(),s=await As(n,Jf(t,{idToken:r}));H(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Yf(i.providerUserInfo):[],a=Jv(n.providerData,o),l=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),f=l?h:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new tc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,m)}async function Qv(n){const e=Ee(n);await io(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Jv(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Yf(n){return n.map(e=>{var{providerId:t}=e,r=Fc(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Yv(n,e){const t=await Hf(n,{},async()=>{const r=qs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=Qf(n,s,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Wf.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Xv(n,e){return Mt(n,"POST","/v2/accounts:revokeToken",Ot(n,e))}/**
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
 */class dr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){H(e.length!==0,"internal-error");const t=kh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Yv(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new dr;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(H(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new dr,this.toJSON())}_performRefresh(){return bt("not implemented")}}/**
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
 */function Kt(n,e){H(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class At{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Fc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Hv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new tc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await As(this,this.stsTokenManager.getToken(this.auth,e));return H(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Gv(this,e)}reload(){return Qv(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new At(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await io(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ht(this.auth.app))return Promise.reject(Pt(this.auth));const e=await this.getIdToken();return await As(this,Kv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,a,l,h,f;const m=(r=t.displayName)!==null&&r!==void 0?r:void 0,_=(s=t.email)!==null&&s!==void 0?s:void 0,y=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,b=(o=t.photoURL)!==null&&o!==void 0?o:void 0,R=(a=t.tenantId)!==null&&a!==void 0?a:void 0,k=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,N=(h=t.createdAt)!==null&&h!==void 0?h:void 0,O=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:U,emailVerified:M,isAnonymous:q,providerData:$,stsTokenManager:T}=t;H(U&&T,e,"internal-error");const v=dr.fromJSON(this.name,T);H(typeof U=="string",e,"internal-error"),Kt(m,e.name),Kt(_,e.name),H(typeof M=="boolean",e,"internal-error"),H(typeof q=="boolean",e,"internal-error"),Kt(y,e.name),Kt(b,e.name),Kt(R,e.name),Kt(k,e.name),Kt(N,e.name),Kt(O,e.name);const I=new At({uid:U,auth:e,email:_,emailVerified:M,displayName:m,isAnonymous:q,photoURL:b,phoneNumber:y,tenantId:R,stsTokenManager:v,createdAt:N,lastLoginAt:O});return $&&Array.isArray($)&&(I.providerData=$.map(E=>Object.assign({},E))),k&&(I._redirectEventId=k),I}static async _fromIdTokenResponse(e,t,r=!1){const s=new dr;s.updateFromServerResponse(t);const i=new At({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await io(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];H(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Yf(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new dr;a.updateFromIdToken(r);const l=new At({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new tc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
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
 */const Dh=new Map;function St(n){Dt(n instanceof Function,"Expected a class definition");let e=Dh.get(n);return e?(Dt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Dh.set(n,e),e)}/**
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
 */class Xf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Xf.type="NONE";const Vh=Xf;/**
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
 */function Ui(n,e,t){return`firebase:${n}:${e}:${t}`}class fr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ui(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ui("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?At._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new fr(St(Vh),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||St(Vh);const o=Ui(r,e.config.apiKey,e.name);let a=null;for(const h of t)try{const f=await h._get(o);if(f){const m=At._fromJSON(e,f);h!==i&&(a=m),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new fr(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new fr(i,e,r))}}/**
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
 */function Nh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Zf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sm(e))return"Blackberry";if(im(e))return"Webos";if(em(e))return"Safari";if((e.includes("chrome/")||tm(e))&&!e.includes("edge/"))return"Chrome";if(rm(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Zf(n=Pe()){return/firefox\//i.test(n)}function em(n=Pe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tm(n=Pe()){return/crios\//i.test(n)}function nm(n=Pe()){return/iemobile/i.test(n)}function rm(n=Pe()){return/android/i.test(n)}function sm(n=Pe()){return/blackberry/i.test(n)}function im(n=Pe()){return/webos/i.test(n)}function qc(n=Pe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Zv(n=Pe()){var e;return qc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function eI(){return my()&&document.documentMode===10}function om(n=Pe()){return qc(n)||rm(n)||im(n)||sm(n)||/windows phone/i.test(n)||nm(n)}/**
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
 */function am(n,e=[]){let t;switch(n){case"Browser":t=Nh(Pe());break;case"Worker":t=`${Nh(Pe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Nr}/${r}`}/**
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
 */class tI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function nI(n,e={}){return Mt(n,"GET","/v2/passwordPolicy",Ot(n,e))}/**
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
 */const rI=6;class sI{constructor(e){var t,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:rI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class iI{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xh(this),this.idTokenSubscription=new xh(this),this.beforeStateQueue=new tI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=St(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await fr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Jf(this,{idToken:e}),r=await At._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ht(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await io(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Fv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ht(this.app))return Promise.reject(Pt(this));const t=e?Ee(e):null;return t&&H(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ht(this.app)?Promise.reject(Pt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ht(this.app)?Promise.reject(Pt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(St(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await nI(this),t=new sI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $s("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Xv(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&St(e)||this._popupRedirectResolver;H(t,this,"argument-error"),this.redirectPersistenceManager=await fr.create(this,[St(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=am(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&xv(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Lt(n){return Ee(n)}class xh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Iy(t=>this.observer=t)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Do={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function oI(n){Do=n}function cm(n){return Do.loadJS(n)}function aI(){return Do.recaptchaEnterpriseScript}function cI(){return Do.gapiScript}function lI(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const uI="recaptcha-enterprise",hI="NO_RECAPTCHA";class dI{constructor(e){this.type=uI,this.auth=Lt(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{zv(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const h=new qv(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;Ch(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(hI)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!t&&Ch(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=aI();l.length!==0&&(l+=a),cm(l).then(()=>{s(a,i,o)}).catch(h=>{o(h)})}}).catch(a=>{o(a)})})}}async function Oh(n,e,t,r=!1){const s=new dI(n);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function oo(n,e,t,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Oh(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Oh(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(i)})}/**
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
 */function fI(n,e){const t=Lc(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Nn(i,e??{}))return s;ct(s,"already-initialized")}return t.initialize({options:e})}function mI(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(St);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function pI(n,e,t){const r=Lt(n);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=lm(e),{host:o,port:a}=gI(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),_I()}function lm(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function gI(n){const e=lm(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Mh(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Mh(o)}}}function Mh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function _I(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class zc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return bt("not implemented")}_getIdTokenResponse(e){return bt("not implemented")}_linkToIdToken(e,t){return bt("not implemented")}_getReauthenticationResolver(e){return bt("not implemented")}}async function yI(n,e){return Mt(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function vI(n,e){return Ks(n,"POST","/v1/accounts:signInWithPassword",Ot(n,e))}async function um(n,e){return Mt(n,"POST","/v1/accounts:sendOobCode",Ot(n,e))}async function II(n,e){return um(n,e)}async function wI(n,e){return um(n,e)}/**
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
 */async function EI(n,e){return Ks(n,"POST","/v1/accounts:signInWithEmailLink",Ot(n,e))}async function TI(n,e){return Ks(n,"POST","/v1/accounts:signInWithEmailLink",Ot(n,e))}/**
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
 */class Ss extends zc{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Ss(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Ss(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return oo(e,t,"signInWithPassword",vI);case"emailLink":return EI(e,{email:this._email,oobCode:this._password});default:ct(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return oo(e,r,"signUpPassword",yI);case"emailLink":return TI(e,{idToken:t,email:this._email,oobCode:this._password});default:ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function mr(n,e){return Ks(n,"POST","/v1/accounts:signInWithIdp",Ot(n,e))}/**
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
 */const bI="http://localhost";class On extends zc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new On(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ct("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Fc(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new On(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return mr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,mr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,mr(e,t)}buildRequest(){const e={requestUri:bI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=qs(t)}return e}}/**
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
 */function AI(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function SI(n){const e=os(as(n)).link,t=e?os(as(e)).deep_link_id:null,r=os(as(n)).deep_link_id;return(r?os(as(r)).link:null)||r||t||e||n}class Kc{constructor(e){var t,r,s,i,o,a;const l=os(as(e)),h=(t=l.apiKey)!==null&&t!==void 0?t:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,m=AI((s=l.mode)!==null&&s!==void 0?s:null);H(h&&f&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=SI(e);try{return new Kc(t)}catch{return null}}}/**
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
 */class xr{constructor(){this.providerId=xr.PROVIDER_ID}static credential(e,t){return Ss._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Kc.parseLink(t);return H(r,"argument-error"),Ss._fromEmailAndCode(e,r.code,r.tenantId)}}xr.PROVIDER_ID="password";xr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Gc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Gs extends Gc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ht extends Gs{constructor(){super("facebook.com")}static credential(e){return On._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ht.credential(e.oauthAccessToken)}catch{return null}}}Ht.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ht.PROVIDER_ID="facebook.com";/**
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
 */class Tt extends Gs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return On._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Tt.credential(t,r)}catch{return null}}}Tt.GOOGLE_SIGN_IN_METHOD="google.com";Tt.PROVIDER_ID="google.com";/**
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
 */class Qt extends Gs{constructor(){super("github.com")}static credential(e){return On._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.GITHUB_SIGN_IN_METHOD="github.com";Qt.PROVIDER_ID="github.com";/**
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
 */class Jt extends Gs{constructor(){super("twitter.com")}static credential(e,t){return On._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Jt.credential(t,r)}catch{return null}}}Jt.TWITTER_SIGN_IN_METHOD="twitter.com";Jt.PROVIDER_ID="twitter.com";/**
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
 */async function RI(n,e){return Ks(n,"POST","/v1/accounts:signUp",Ot(n,e))}/**
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
 */class Mn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await At._fromIdTokenResponse(e,r,s),o=Lh(r);return new Mn({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Lh(r);return new Mn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Lh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class ao extends xt{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ao.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new ao(e,t,r,s)}}function hm(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ao._fromErrorAndOperation(n,i,e,r):i})}async function PI(n,e,t=!1){const r=await As(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Mn._forOperation(n,"link",r)}/**
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
 */async function CI(n,e,t=!1){const{auth:r}=n;if(ht(r.app))return Promise.reject(Pt(r));const s="reauthenticate";try{const i=await As(n,hm(r,s,e,n),t);H(i.idToken,r,"internal-error");const o=$c(i.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(n.uid===a,r,"user-mismatch"),Mn._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ct(r,"user-mismatch"),i}}/**
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
 */async function dm(n,e,t=!1){if(ht(n.app))return Promise.reject(Pt(n));const r="signIn",s=await hm(n,r,e),i=await Mn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function kI(n,e){return dm(Lt(n),e)}/**
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
 */async function fm(n){const e=Lt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function DI(n,e,t){const r=Lt(n);await oo(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",wI)}async function VI(n,e,t){if(ht(n.app))return Promise.reject(Pt(n));const r=Lt(n),o=await oo(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",RI).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&fm(n),l}),a=await Mn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function NI(n,e,t){return ht(n.app)?Promise.reject(Pt(n)):kI(Ee(n),xr.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&fm(n),r})}async function Fh(n,e){const t=Ee(n),s={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()},{email:i}=await II(t.auth,s);i!==n.email&&await n.reload()}function xI(n,e,t,r){return Ee(n).onIdTokenChanged(e,t,r)}function OI(n,e,t){return Ee(n).beforeAuthStateChanged(e,t)}function MI(n,e,t,r){return Ee(n).onAuthStateChanged(e,t,r)}function LI(n){return Ee(n).signOut()}const co="__sak";/**
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
 */class mm{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(co,"1"),this.storage.removeItem(co),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const FI=1e3,UI=10;class pm extends mm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=om(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);eI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,UI):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},FI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}pm.type="LOCAL";const BI=pm;/**
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
 */class gm extends mm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}gm.type="SESSION";const _m=gm;/**
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
 */function jI(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Vo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Vo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async h=>h(t.origin,i)),l=await jI(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vo.receivers=[];/**
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
 */function Wc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class $I{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const h=Wc("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const _=m;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(_.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function pt(){return window}function qI(n){pt().location.href=n}/**
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
 */function ym(){return typeof pt().WorkerGlobalScope<"u"&&typeof pt().importScripts=="function"}async function zI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function KI(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function GI(){return ym()?self:null}/**
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
 */const vm="firebaseLocalStorageDb",WI=1,lo="firebaseLocalStorage",Im="fbase_key";class Ws{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function No(n,e){return n.transaction([lo],e?"readwrite":"readonly").objectStore(lo)}function HI(){const n=indexedDB.deleteDatabase(vm);return new Ws(n).toPromise()}function nc(){const n=indexedDB.open(vm,WI);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(lo,{keyPath:Im})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(lo)?e(r):(r.close(),await HI(),e(await nc()))})})}async function Uh(n,e,t){const r=No(n,!0).put({[Im]:e,value:t});return new Ws(r).toPromise()}async function QI(n,e){const t=No(n,!1).get(e),r=await new Ws(t).toPromise();return r===void 0?null:r.value}function Bh(n,e){const t=No(n,!0).delete(e);return new Ws(t).toPromise()}const JI=800,YI=3;class wm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>YI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ym()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vo._getInstance(GI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await zI(),!this.activeServiceWorker)return;this.sender=new $I(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||KI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nc();return await Uh(e,co,"1"),await Bh(e,co),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Uh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>QI(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Bh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=No(s,!1).getAll();return new Ws(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),JI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wm.type="LOCAL";const XI=wm;new zs(3e4,6e4);/**
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
 */function Em(n,e){return e?St(e):(H(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Hc extends zc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return mr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return mr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ZI(n){return dm(n.auth,new Hc(n),n.bypassAuthState)}function ew(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),CI(t,new Hc(n),n.bypassAuthState)}async function tw(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),PI(t,new Hc(n),n.bypassAuthState)}/**
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
 */class Tm{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ZI;case"linkViaPopup":case"linkViaRedirect":return tw;case"reauthViaPopup":case"reauthViaRedirect":return ew;default:ct(this.auth,"internal-error")}}resolve(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const nw=new zs(2e3,1e4);async function rw(n,e,t){if(ht(n.app))return Promise.reject(dt(n,"operation-not-supported-in-this-environment"));const r=Lt(n);Ov(n,e,Gc);const s=Em(r,t);return new kn(r,"signInViaPopup",e,s).executeNotNull()}class kn extends Tm{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,kn.currentPopupAction&&kn.currentPopupAction.cancel(),kn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Dt(this.filter.length===1,"Popup operations only handle one event");const e=Wc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,kn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nw.get())};e()}}kn.currentPopupAction=null;/**
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
 */const sw="pendingRedirect",Bi=new Map;class iw extends Tm{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Bi.get(this.auth._key());if(!e){try{const r=await ow(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Bi.set(this.auth._key(),e)}return this.bypassAuthState||Bi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ow(n,e){const t=lw(e),r=cw(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function aw(n,e){Bi.set(n._key(),e)}function cw(n){return St(n._redirectPersistence)}function lw(n){return Ui(sw,n.config.apiKey,n.name)}async function uw(n,e,t=!1){if(ht(n.app))return Promise.reject(Pt(n));const r=Lt(n),s=Em(r,e),o=await new iw(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const hw=10*60*1e3;class dw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!bm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(dt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hw&&this.cachedEventUids.clear(),this.cachedEventUids.has(jh(e))}saveEventToCache(e){this.cachedEventUids.add(jh(e)),this.lastProcessedEventTime=Date.now()}}function jh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function bm({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bm(n);default:return!1}}/**
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
 */async function mw(n,e={}){return Mt(n,"GET","/v1/projects",e)}/**
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
 */const pw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gw=/^https?/;async function _w(n){if(n.config.emulator)return;const{authorizedDomains:e}=await mw(n);for(const t of e)try{if(yw(t))return}catch{}ct(n,"unauthorized-domain")}function yw(n){const e=ec(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!gw.test(t))return!1;if(pw.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const vw=new zs(3e4,6e4);function $h(){const n=pt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Iw(n){return new Promise((e,t)=>{var r,s,i;function o(){$h(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$h(),t(dt(n,"network-request-failed"))},timeout:vw.get()})}if(!((s=(r=pt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=pt().gapi)===null||i===void 0)&&i.load)o();else{const a=lI("iframefcb");return pt()[a]=()=>{gapi.load?o():t(dt(n,"network-request-failed"))},cm(`${cI()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw ji=null,e})}let ji=null;function ww(n){return ji=ji||Iw(n),ji}/**
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
 */const Ew=new zs(5e3,15e3),Tw="__/auth/iframe",bw="emulator/auth/iframe",Aw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Sw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Rw(n){const e=n.config;H(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?jc(e,bw):`https://${n.config.authDomain}/${Tw}`,r={apiKey:e.apiKey,appName:n.name,v:Nr},s=Sw.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${qs(r).slice(1)}`}async function Pw(n){const e=await ww(n),t=pt().gapi;return H(t,n,"internal-error"),e.open({where:document.body,url:Rw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Aw,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=dt(n,"network-request-failed"),a=pt().setTimeout(()=>{i(o)},Ew.get());function l(){pt().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const Cw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kw=500,Dw=600,Vw="_blank",Nw="http://localhost";class qh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xw(n,e,t,r=kw,s=Dw){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Cw),{width:r.toString(),height:s.toString(),top:i,left:o}),h=Pe().toLowerCase();t&&(a=tm(h)?Vw:t),Zf(h)&&(e=e||Nw,l.scrollbars="yes");const f=Object.entries(l).reduce((_,[y,b])=>`${_}${y}=${b},`,"");if(Zv(h)&&a!=="_self")return Ow(e||"",a),new qh(null);const m=window.open(e||"",a,f);H(m,n,"popup-blocked");try{m.focus()}catch{}return new qh(m)}function Ow(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Mw="__/auth/handler",Lw="emulator/auth/handler",Fw=encodeURIComponent("fac");async function zh(n,e,t,r,s,i){H(n.config.authDomain,n,"auth-domain-config-required"),H(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Nr,eventId:s};if(e instanceof Gc){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",vy(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Gs){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await n._getAppCheckToken(),h=l?`#${Fw}=${encodeURIComponent(l)}`:"";return`${Uw(n)}?${qs(a).slice(1)}${h}`}function Uw({config:n}){return n.emulator?jc(n,Lw):`https://${n.authDomain}/${Mw}`}/**
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
 */const Va="webStorageSupport";class Bw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_m,this._completeRedirectFn=uw,this._overrideRedirectResult=aw}async _openPopup(e,t,r,s){var i;Dt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await zh(e,t,r,ec(),s);return xw(e,o,Wc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await zh(e,t,r,ec(),s);return qI(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Dt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Pw(e),r=new dw(e);return t.register("authEvent",s=>(H(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Va,{type:Va},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Va];o!==void 0&&t(!!o),ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=_w(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return om()||em()||qc()}}const jw=Bw;var Kh="@firebase/auth",Gh="1.7.9";/**
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
 */class $w{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function qw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function zw(n){_r(new xn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:am(n)},h=new iI(r,s,i,l);return mI(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),_r(new xn("auth-internal",e=>{const t=Lt(e.getProvider("auth").getImmediate());return(r=>new $w(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),nn(Kh,Gh,qw(n)),nn(Kh,Gh,"esm2017")}/**
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
 */const Kw=5*60,Gw=Lf("authIdTokenMaxAge")||Kw;let Wh=null;const Ww=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Gw)return;const s=t==null?void 0:t.token;Wh!==s&&(Wh=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Hw(n=wv()){const e=Lc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=fI(n,{popupRedirectResolver:jw,persistence:[XI,BI,_m]}),r=Lf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Ww(i.toString());OI(t,o,()=>o(t.currentUser)),xI(t,a=>o(a))}}const s=ay("auth");return s&&pI(t,`http://${s}`),t}function Qw(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}oI({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=dt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Qw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});zw("Browser");var Hh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dn,Am;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,v){function I(){}I.prototype=v.prototype,T.D=v.prototype,T.prototype=new I,T.prototype.constructor=T,T.C=function(E,A,P){for(var w=Array(arguments.length-2),lt=2;lt<arguments.length;lt++)w[lt-2]=arguments[lt];return v.prototype[A].apply(E,w)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,v,I){I||(I=0);var E=Array(16);if(typeof v=="string")for(var A=0;16>A;++A)E[A]=v.charCodeAt(I++)|v.charCodeAt(I++)<<8|v.charCodeAt(I++)<<16|v.charCodeAt(I++)<<24;else for(A=0;16>A;++A)E[A]=v[I++]|v[I++]<<8|v[I++]<<16|v[I++]<<24;v=T.g[0],I=T.g[1],A=T.g[2];var P=T.g[3],w=v+(P^I&(A^P))+E[0]+3614090360&4294967295;v=I+(w<<7&4294967295|w>>>25),w=P+(A^v&(I^A))+E[1]+3905402710&4294967295,P=v+(w<<12&4294967295|w>>>20),w=A+(I^P&(v^I))+E[2]+606105819&4294967295,A=P+(w<<17&4294967295|w>>>15),w=I+(v^A&(P^v))+E[3]+3250441966&4294967295,I=A+(w<<22&4294967295|w>>>10),w=v+(P^I&(A^P))+E[4]+4118548399&4294967295,v=I+(w<<7&4294967295|w>>>25),w=P+(A^v&(I^A))+E[5]+1200080426&4294967295,P=v+(w<<12&4294967295|w>>>20),w=A+(I^P&(v^I))+E[6]+2821735955&4294967295,A=P+(w<<17&4294967295|w>>>15),w=I+(v^A&(P^v))+E[7]+4249261313&4294967295,I=A+(w<<22&4294967295|w>>>10),w=v+(P^I&(A^P))+E[8]+1770035416&4294967295,v=I+(w<<7&4294967295|w>>>25),w=P+(A^v&(I^A))+E[9]+2336552879&4294967295,P=v+(w<<12&4294967295|w>>>20),w=A+(I^P&(v^I))+E[10]+4294925233&4294967295,A=P+(w<<17&4294967295|w>>>15),w=I+(v^A&(P^v))+E[11]+2304563134&4294967295,I=A+(w<<22&4294967295|w>>>10),w=v+(P^I&(A^P))+E[12]+1804603682&4294967295,v=I+(w<<7&4294967295|w>>>25),w=P+(A^v&(I^A))+E[13]+4254626195&4294967295,P=v+(w<<12&4294967295|w>>>20),w=A+(I^P&(v^I))+E[14]+2792965006&4294967295,A=P+(w<<17&4294967295|w>>>15),w=I+(v^A&(P^v))+E[15]+1236535329&4294967295,I=A+(w<<22&4294967295|w>>>10),w=v+(A^P&(I^A))+E[1]+4129170786&4294967295,v=I+(w<<5&4294967295|w>>>27),w=P+(I^A&(v^I))+E[6]+3225465664&4294967295,P=v+(w<<9&4294967295|w>>>23),w=A+(v^I&(P^v))+E[11]+643717713&4294967295,A=P+(w<<14&4294967295|w>>>18),w=I+(P^v&(A^P))+E[0]+3921069994&4294967295,I=A+(w<<20&4294967295|w>>>12),w=v+(A^P&(I^A))+E[5]+3593408605&4294967295,v=I+(w<<5&4294967295|w>>>27),w=P+(I^A&(v^I))+E[10]+38016083&4294967295,P=v+(w<<9&4294967295|w>>>23),w=A+(v^I&(P^v))+E[15]+3634488961&4294967295,A=P+(w<<14&4294967295|w>>>18),w=I+(P^v&(A^P))+E[4]+3889429448&4294967295,I=A+(w<<20&4294967295|w>>>12),w=v+(A^P&(I^A))+E[9]+568446438&4294967295,v=I+(w<<5&4294967295|w>>>27),w=P+(I^A&(v^I))+E[14]+3275163606&4294967295,P=v+(w<<9&4294967295|w>>>23),w=A+(v^I&(P^v))+E[3]+4107603335&4294967295,A=P+(w<<14&4294967295|w>>>18),w=I+(P^v&(A^P))+E[8]+1163531501&4294967295,I=A+(w<<20&4294967295|w>>>12),w=v+(A^P&(I^A))+E[13]+2850285829&4294967295,v=I+(w<<5&4294967295|w>>>27),w=P+(I^A&(v^I))+E[2]+4243563512&4294967295,P=v+(w<<9&4294967295|w>>>23),w=A+(v^I&(P^v))+E[7]+1735328473&4294967295,A=P+(w<<14&4294967295|w>>>18),w=I+(P^v&(A^P))+E[12]+2368359562&4294967295,I=A+(w<<20&4294967295|w>>>12),w=v+(I^A^P)+E[5]+4294588738&4294967295,v=I+(w<<4&4294967295|w>>>28),w=P+(v^I^A)+E[8]+2272392833&4294967295,P=v+(w<<11&4294967295|w>>>21),w=A+(P^v^I)+E[11]+1839030562&4294967295,A=P+(w<<16&4294967295|w>>>16),w=I+(A^P^v)+E[14]+4259657740&4294967295,I=A+(w<<23&4294967295|w>>>9),w=v+(I^A^P)+E[1]+2763975236&4294967295,v=I+(w<<4&4294967295|w>>>28),w=P+(v^I^A)+E[4]+1272893353&4294967295,P=v+(w<<11&4294967295|w>>>21),w=A+(P^v^I)+E[7]+4139469664&4294967295,A=P+(w<<16&4294967295|w>>>16),w=I+(A^P^v)+E[10]+3200236656&4294967295,I=A+(w<<23&4294967295|w>>>9),w=v+(I^A^P)+E[13]+681279174&4294967295,v=I+(w<<4&4294967295|w>>>28),w=P+(v^I^A)+E[0]+3936430074&4294967295,P=v+(w<<11&4294967295|w>>>21),w=A+(P^v^I)+E[3]+3572445317&4294967295,A=P+(w<<16&4294967295|w>>>16),w=I+(A^P^v)+E[6]+76029189&4294967295,I=A+(w<<23&4294967295|w>>>9),w=v+(I^A^P)+E[9]+3654602809&4294967295,v=I+(w<<4&4294967295|w>>>28),w=P+(v^I^A)+E[12]+3873151461&4294967295,P=v+(w<<11&4294967295|w>>>21),w=A+(P^v^I)+E[15]+530742520&4294967295,A=P+(w<<16&4294967295|w>>>16),w=I+(A^P^v)+E[2]+3299628645&4294967295,I=A+(w<<23&4294967295|w>>>9),w=v+(A^(I|~P))+E[0]+4096336452&4294967295,v=I+(w<<6&4294967295|w>>>26),w=P+(I^(v|~A))+E[7]+1126891415&4294967295,P=v+(w<<10&4294967295|w>>>22),w=A+(v^(P|~I))+E[14]+2878612391&4294967295,A=P+(w<<15&4294967295|w>>>17),w=I+(P^(A|~v))+E[5]+4237533241&4294967295,I=A+(w<<21&4294967295|w>>>11),w=v+(A^(I|~P))+E[12]+1700485571&4294967295,v=I+(w<<6&4294967295|w>>>26),w=P+(I^(v|~A))+E[3]+2399980690&4294967295,P=v+(w<<10&4294967295|w>>>22),w=A+(v^(P|~I))+E[10]+4293915773&4294967295,A=P+(w<<15&4294967295|w>>>17),w=I+(P^(A|~v))+E[1]+2240044497&4294967295,I=A+(w<<21&4294967295|w>>>11),w=v+(A^(I|~P))+E[8]+1873313359&4294967295,v=I+(w<<6&4294967295|w>>>26),w=P+(I^(v|~A))+E[15]+4264355552&4294967295,P=v+(w<<10&4294967295|w>>>22),w=A+(v^(P|~I))+E[6]+2734768916&4294967295,A=P+(w<<15&4294967295|w>>>17),w=I+(P^(A|~v))+E[13]+1309151649&4294967295,I=A+(w<<21&4294967295|w>>>11),w=v+(A^(I|~P))+E[4]+4149444226&4294967295,v=I+(w<<6&4294967295|w>>>26),w=P+(I^(v|~A))+E[11]+3174756917&4294967295,P=v+(w<<10&4294967295|w>>>22),w=A+(v^(P|~I))+E[2]+718787259&4294967295,A=P+(w<<15&4294967295|w>>>17),w=I+(P^(A|~v))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+v&4294967295,T.g[1]=T.g[1]+(A+(w<<21&4294967295|w>>>11))&4294967295,T.g[2]=T.g[2]+A&4294967295,T.g[3]=T.g[3]+P&4294967295}r.prototype.u=function(T,v){v===void 0&&(v=T.length);for(var I=v-this.blockSize,E=this.B,A=this.h,P=0;P<v;){if(A==0)for(;P<=I;)s(this,T,P),P+=this.blockSize;if(typeof T=="string"){for(;P<v;)if(E[A++]=T.charCodeAt(P++),A==this.blockSize){s(this,E),A=0;break}}else for(;P<v;)if(E[A++]=T[P++],A==this.blockSize){s(this,E),A=0;break}}this.h=A,this.o+=v},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var v=1;v<T.length-8;++v)T[v]=0;var I=8*this.o;for(v=T.length-8;v<T.length;++v)T[v]=I&255,I/=256;for(this.u(T),T=Array(16),v=I=0;4>v;++v)for(var E=0;32>E;E+=8)T[I++]=this.g[v]>>>E&255;return T};function i(T,v){var I=a;return Object.prototype.hasOwnProperty.call(I,T)?I[T]:I[T]=v(T)}function o(T,v){this.h=v;for(var I=[],E=!0,A=T.length-1;0<=A;A--){var P=T[A]|0;E&&P==v||(I[A]=P,E=!1)}this.g=I}var a={};function l(T){return-128<=T&&128>T?i(T,function(v){return new o([v|0],0>v?-1:0)}):new o([T|0],0>T?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return m;if(0>T)return k(h(-T));for(var v=[],I=1,E=0;T>=I;E++)v[E]=T/I|0,I*=4294967296;return new o(v,0)}function f(T,v){if(T.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(T.charAt(0)=="-")return k(f(T.substring(1),v));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=h(Math.pow(v,8)),E=m,A=0;A<T.length;A+=8){var P=Math.min(8,T.length-A),w=parseInt(T.substring(A,A+P),v);8>P?(P=h(Math.pow(v,P)),E=E.j(P).add(h(w))):(E=E.j(I),E=E.add(h(w)))}return E}var m=l(0),_=l(1),y=l(16777216);n=o.prototype,n.m=function(){if(R(this))return-k(this).m();for(var T=0,v=1,I=0;I<this.g.length;I++){var E=this.i(I);T+=(0<=E?E:4294967296+E)*v,v*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(b(this))return"0";if(R(this))return"-"+k(this).toString(T);for(var v=h(Math.pow(T,6)),I=this,E="";;){var A=M(I,v).g;I=N(I,A.j(v));var P=((0<I.g.length?I.g[0]:I.h)>>>0).toString(T);if(I=A,b(I))return P+E;for(;6>P.length;)P="0"+P;E=P+E}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function b(T){if(T.h!=0)return!1;for(var v=0;v<T.g.length;v++)if(T.g[v]!=0)return!1;return!0}function R(T){return T.h==-1}n.l=function(T){return T=N(this,T),R(T)?-1:b(T)?0:1};function k(T){for(var v=T.g.length,I=[],E=0;E<v;E++)I[E]=~T.g[E];return new o(I,~T.h).add(_)}n.abs=function(){return R(this)?k(this):this},n.add=function(T){for(var v=Math.max(this.g.length,T.g.length),I=[],E=0,A=0;A<=v;A++){var P=E+(this.i(A)&65535)+(T.i(A)&65535),w=(P>>>16)+(this.i(A)>>>16)+(T.i(A)>>>16);E=w>>>16,P&=65535,w&=65535,I[A]=w<<16|P}return new o(I,I[I.length-1]&-2147483648?-1:0)};function N(T,v){return T.add(k(v))}n.j=function(T){if(b(this)||b(T))return m;if(R(this))return R(T)?k(this).j(k(T)):k(k(this).j(T));if(R(T))return k(this.j(k(T)));if(0>this.l(y)&&0>T.l(y))return h(this.m()*T.m());for(var v=this.g.length+T.g.length,I=[],E=0;E<2*v;E++)I[E]=0;for(E=0;E<this.g.length;E++)for(var A=0;A<T.g.length;A++){var P=this.i(E)>>>16,w=this.i(E)&65535,lt=T.i(A)>>>16,Q=T.i(A)&65535;I[2*E+2*A]+=w*Q,O(I,2*E+2*A),I[2*E+2*A+1]+=P*Q,O(I,2*E+2*A+1),I[2*E+2*A+1]+=w*lt,O(I,2*E+2*A+1),I[2*E+2*A+2]+=P*lt,O(I,2*E+2*A+2)}for(E=0;E<v;E++)I[E]=I[2*E+1]<<16|I[2*E];for(E=v;E<2*v;E++)I[E]=0;return new o(I,0)};function O(T,v){for(;(T[v]&65535)!=T[v];)T[v+1]+=T[v]>>>16,T[v]&=65535,v++}function U(T,v){this.g=T,this.h=v}function M(T,v){if(b(v))throw Error("division by zero");if(b(T))return new U(m,m);if(R(T))return v=M(k(T),v),new U(k(v.g),k(v.h));if(R(v))return v=M(T,k(v)),new U(k(v.g),v.h);if(30<T.g.length){if(R(T)||R(v))throw Error("slowDivide_ only works with positive integers.");for(var I=_,E=v;0>=E.l(T);)I=q(I),E=q(E);var A=$(I,1),P=$(E,1);for(E=$(E,2),I=$(I,2);!b(E);){var w=P.add(E);0>=w.l(T)&&(A=A.add(I),P=w),E=$(E,1),I=$(I,1)}return v=N(T,A.j(v)),new U(A,v)}for(A=m;0<=T.l(v);){for(I=Math.max(1,Math.floor(T.m()/v.m())),E=Math.ceil(Math.log(I)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),P=h(I),w=P.j(v);R(w)||0<w.l(T);)I-=E,P=h(I),w=P.j(v);b(P)&&(P=_),A=A.add(P),T=N(T,w)}return new U(A,T)}n.A=function(T){return M(this,T).h},n.and=function(T){for(var v=Math.max(this.g.length,T.g.length),I=[],E=0;E<v;E++)I[E]=this.i(E)&T.i(E);return new o(I,this.h&T.h)},n.or=function(T){for(var v=Math.max(this.g.length,T.g.length),I=[],E=0;E<v;E++)I[E]=this.i(E)|T.i(E);return new o(I,this.h|T.h)},n.xor=function(T){for(var v=Math.max(this.g.length,T.g.length),I=[],E=0;E<v;E++)I[E]=this.i(E)^T.i(E);return new o(I,this.h^T.h)};function q(T){for(var v=T.g.length+1,I=[],E=0;E<v;E++)I[E]=T.i(E)<<1|T.i(E-1)>>>31;return new o(I,T.h)}function $(T,v){var I=v>>5;v%=32;for(var E=T.g.length-I,A=[],P=0;P<E;P++)A[P]=0<v?T.i(P+I)>>>v|T.i(P+I+1)<<32-v:T.i(P+I);return new o(A,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Am=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Dn=o}).apply(typeof Hh<"u"?Hh:typeof self<"u"?self:typeof window<"u"?window:{});var Ai=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Sm,cs,Rm,$i,rc,Pm,Cm,km;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,d,p){return c==Array.prototype||c==Object.prototype||(c[d]=p.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ai=="object"&&Ai];for(var d=0;d<c.length;++d){var p=c[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=t(this);function s(c,d){if(d)e:{var p=r;c=c.split(".");for(var g=0;g<c.length-1;g++){var S=c[g];if(!(S in p))break e;p=p[S]}c=c[c.length-1],g=p[c],d=d(g),d!=g&&d!=null&&e(p,c,{configurable:!0,writable:!0,value:d})}}function i(c,d){c instanceof String&&(c+="");var p=0,g=!1,S={next:function(){if(!g&&p<c.length){var D=p++;return{value:d(D,c[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(c){return c||function(){return i(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(c){var d=typeof c;return d=d!="object"?d:c?Array.isArray(c)?"array":d:"null",d=="array"||d=="object"&&typeof c.length=="number"}function h(c){var d=typeof c;return d=="object"&&c!=null||d=="function"}function f(c,d,p){return c.call.apply(c.bind,arguments)}function m(c,d,p){if(!c)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,g),c.apply(d,S)}}return function(){return c.apply(d,arguments)}}function _(c,d,p){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,_.apply(null,arguments)}function y(c,d){var p=Array.prototype.slice.call(arguments,1);return function(){var g=p.slice();return g.push.apply(g,arguments),c.apply(this,g)}}function b(c,d){function p(){}p.prototype=d.prototype,c.aa=d.prototype,c.prototype=new p,c.prototype.constructor=c,c.Qb=function(g,S,D){for(var F=Array(arguments.length-2),le=2;le<arguments.length;le++)F[le-2]=arguments[le];return d.prototype[S].apply(g,F)}}function R(c){const d=c.length;if(0<d){const p=Array(d);for(let g=0;g<d;g++)p[g]=c[g];return p}return[]}function k(c,d){for(let p=1;p<arguments.length;p++){const g=arguments[p];if(l(g)){const S=c.length||0,D=g.length||0;c.length=S+D;for(let F=0;F<D;F++)c[S+F]=g[F]}else c.push(g)}}class N{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function O(c){return/^[\s\xa0]*$/.test(c)}function U(){var c=a.navigator;return c&&(c=c.userAgent)?c:""}function M(c){return M[" "](c),c}M[" "]=function(){};var q=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function $(c,d,p){for(const g in c)d.call(p,c[g],g,c)}function T(c,d){for(const p in c)d.call(void 0,c[p],p,c)}function v(c){const d={};for(const p in c)d[p]=c[p];return d}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(c,d){let p,g;for(let S=1;S<arguments.length;S++){g=arguments[S];for(p in g)c[p]=g[p];for(let D=0;D<I.length;D++)p=I[D],Object.prototype.hasOwnProperty.call(g,p)&&(c[p]=g[p])}}function A(c){var d=1;c=c.split(":");const p=[];for(;0<d&&c.length;)p.push(c.shift()),d--;return c.length&&p.push(c.join(":")),p}function P(c){a.setTimeout(()=>{throw c},0)}function w(){var c=ta;let d=null;return c.g&&(d=c.g,c.g=c.g.next,c.g||(c.h=null),d.next=null),d}class lt{constructor(){this.h=this.g=null}add(d,p){const g=Q.get();g.set(d,p),this.h?this.h.next=g:this.g=g,this.h=g}}var Q=new N(()=>new Le,c=>c.reset());class Le{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Bt,It=!1,ta=new lt,ou=()=>{const c=a.Promise.resolve(void 0);Bt=()=>{c.then(c_)}};var c_=()=>{for(var c;c=w();){try{c.h.call(c.g)}catch(p){P(p)}var d=Q;d.j(c),100>d.h&&(d.h++,c.next=d.g,d.g=c)}It=!1};function jt(){this.s=this.s,this.C=this.C}jt.prototype.s=!1,jt.prototype.ma=function(){this.s||(this.s=!0,this.N())},jt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Fe(c,d){this.type=c,this.g=this.target=d,this.defaultPrevented=!1}Fe.prototype.h=function(){this.defaultPrevented=!0};var l_=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,d=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const p=()=>{};a.addEventListener("test",p,d),a.removeEventListener("test",p,d)}catch{}return c}();function Br(c,d){if(Fe.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var p=this.type=c.type,g=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=d,d=c.relatedTarget){if(q){e:{try{M(d.nodeName);var S=!0;break e}catch{}S=!1}S||(d=null)}}else p=="mouseover"?d=c.fromElement:p=="mouseout"&&(d=c.toElement);this.relatedTarget=d,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:u_[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Br.aa.h.call(this)}}b(Br,Fe);var u_={2:"touch",3:"pen",4:"mouse"};Br.prototype.h=function(){Br.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var si="closure_listenable_"+(1e6*Math.random()|0),h_=0;function d_(c,d,p,g,S){this.listener=c,this.proxy=null,this.src=d,this.type=p,this.capture=!!g,this.ha=S,this.key=++h_,this.da=this.fa=!1}function ii(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function oi(c){this.src=c,this.g={},this.h=0}oi.prototype.add=function(c,d,p,g,S){var D=c.toString();c=this.g[D],c||(c=this.g[D]=[],this.h++);var F=ra(c,d,g,S);return-1<F?(d=c[F],p||(d.fa=!1)):(d=new d_(d,this.src,D,!!g,S),d.fa=p,c.push(d)),d};function na(c,d){var p=d.type;if(p in c.g){var g=c.g[p],S=Array.prototype.indexOf.call(g,d,void 0),D;(D=0<=S)&&Array.prototype.splice.call(g,S,1),D&&(ii(d),c.g[p].length==0&&(delete c.g[p],c.h--))}}function ra(c,d,p,g){for(var S=0;S<c.length;++S){var D=c[S];if(!D.da&&D.listener==d&&D.capture==!!p&&D.ha==g)return S}return-1}var sa="closure_lm_"+(1e6*Math.random()|0),ia={};function au(c,d,p,g,S){if(Array.isArray(d)){for(var D=0;D<d.length;D++)au(c,d[D],p,g,S);return null}return p=uu(p),c&&c[si]?c.K(d,p,h(g)?!!g.capture:!1,S):f_(c,d,p,!1,g,S)}function f_(c,d,p,g,S,D){if(!d)throw Error("Invalid event type");var F=h(S)?!!S.capture:!!S,le=aa(c);if(le||(c[sa]=le=new oi(c)),p=le.add(d,p,g,F,D),p.proxy)return p;if(g=m_(),p.proxy=g,g.src=c,g.listener=p,c.addEventListener)l_||(S=F),S===void 0&&(S=!1),c.addEventListener(d.toString(),g,S);else if(c.attachEvent)c.attachEvent(lu(d.toString()),g);else if(c.addListener&&c.removeListener)c.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return p}function m_(){function c(p){return d.call(c.src,c.listener,p)}const d=p_;return c}function cu(c,d,p,g,S){if(Array.isArray(d))for(var D=0;D<d.length;D++)cu(c,d[D],p,g,S);else g=h(g)?!!g.capture:!!g,p=uu(p),c&&c[si]?(c=c.i,d=String(d).toString(),d in c.g&&(D=c.g[d],p=ra(D,p,g,S),-1<p&&(ii(D[p]),Array.prototype.splice.call(D,p,1),D.length==0&&(delete c.g[d],c.h--)))):c&&(c=aa(c))&&(d=c.g[d.toString()],c=-1,d&&(c=ra(d,p,g,S)),(p=-1<c?d[c]:null)&&oa(p))}function oa(c){if(typeof c!="number"&&c&&!c.da){var d=c.src;if(d&&d[si])na(d.i,c);else{var p=c.type,g=c.proxy;d.removeEventListener?d.removeEventListener(p,g,c.capture):d.detachEvent?d.detachEvent(lu(p),g):d.addListener&&d.removeListener&&d.removeListener(g),(p=aa(d))?(na(p,c),p.h==0&&(p.src=null,d[sa]=null)):ii(c)}}}function lu(c){return c in ia?ia[c]:ia[c]="on"+c}function p_(c,d){if(c.da)c=!0;else{d=new Br(d,this);var p=c.listener,g=c.ha||c.src;c.fa&&oa(c),c=p.call(g,d)}return c}function aa(c){return c=c[sa],c instanceof oi?c:null}var ca="__closure_events_fn_"+(1e9*Math.random()>>>0);function uu(c){return typeof c=="function"?c:(c[ca]||(c[ca]=function(d){return c.handleEvent(d)}),c[ca])}function Ue(){jt.call(this),this.i=new oi(this),this.M=this,this.F=null}b(Ue,jt),Ue.prototype[si]=!0,Ue.prototype.removeEventListener=function(c,d,p,g){cu(this,c,d,p,g)};function Ge(c,d){var p,g=c.F;if(g)for(p=[];g;g=g.F)p.push(g);if(c=c.M,g=d.type||d,typeof d=="string")d=new Fe(d,c);else if(d instanceof Fe)d.target=d.target||c;else{var S=d;d=new Fe(g,c),E(d,S)}if(S=!0,p)for(var D=p.length-1;0<=D;D--){var F=d.g=p[D];S=ai(F,g,!0,d)&&S}if(F=d.g=c,S=ai(F,g,!0,d)&&S,S=ai(F,g,!1,d)&&S,p)for(D=0;D<p.length;D++)F=d.g=p[D],S=ai(F,g,!1,d)&&S}Ue.prototype.N=function(){if(Ue.aa.N.call(this),this.i){var c=this.i,d;for(d in c.g){for(var p=c.g[d],g=0;g<p.length;g++)ii(p[g]);delete c.g[d],c.h--}}this.F=null},Ue.prototype.K=function(c,d,p,g){return this.i.add(String(c),d,!1,p,g)},Ue.prototype.L=function(c,d,p,g){return this.i.add(String(c),d,!0,p,g)};function ai(c,d,p,g){if(d=c.i.g[String(d)],!d)return!0;d=d.concat();for(var S=!0,D=0;D<d.length;++D){var F=d[D];if(F&&!F.da&&F.capture==p){var le=F.listener,Ve=F.ha||F.src;F.fa&&na(c.i,F),S=le.call(Ve,g)!==!1&&S}}return S&&!g.defaultPrevented}function hu(c,d,p){if(typeof c=="function")p&&(c=_(c,p));else if(c&&typeof c.handleEvent=="function")c=_(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(c,d||0)}function du(c){c.g=hu(()=>{c.g=null,c.i&&(c.i=!1,du(c))},c.l);const d=c.h;c.h=null,c.m.apply(null,d)}class g_ extends jt{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:du(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function jr(c){jt.call(this),this.h=c,this.g={}}b(jr,jt);var fu=[];function mu(c){$(c.g,function(d,p){this.g.hasOwnProperty(p)&&oa(d)},c),c.g={}}jr.prototype.N=function(){jr.aa.N.call(this),mu(this)},jr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var la=a.JSON.stringify,__=a.JSON.parse,y_=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function ua(){}ua.prototype.h=null;function pu(c){return c.h||(c.h=c.i())}function gu(){}var $r={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ha(){Fe.call(this,"d")}b(ha,Fe);function da(){Fe.call(this,"c")}b(da,Fe);var yn={},_u=null;function ci(){return _u=_u||new Ue}yn.La="serverreachability";function yu(c){Fe.call(this,yn.La,c)}b(yu,Fe);function qr(c){const d=ci();Ge(d,new yu(d))}yn.STAT_EVENT="statevent";function vu(c,d){Fe.call(this,yn.STAT_EVENT,c),this.stat=d}b(vu,Fe);function We(c){const d=ci();Ge(d,new vu(d,c))}yn.Ma="timingevent";function Iu(c,d){Fe.call(this,yn.Ma,c),this.size=d}b(Iu,Fe);function zr(c,d){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},d)}function Kr(){this.g=!0}Kr.prototype.xa=function(){this.g=!1};function v_(c,d,p,g,S,D){c.info(function(){if(c.g)if(D)for(var F="",le=D.split("&"),Ve=0;Ve<le.length;Ve++){var re=le[Ve].split("=");if(1<re.length){var Be=re[0];re=re[1];var je=Be.split("_");F=2<=je.length&&je[1]=="type"?F+(Be+"="+re+"&"):F+(Be+"=redacted&")}}else F=null;else F=D;return"XMLHTTP REQ ("+g+") [attempt "+S+"]: "+d+`
`+p+`
`+F})}function I_(c,d,p,g,S,D,F){c.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+S+"]: "+d+`
`+p+`
`+D+" "+F})}function Xn(c,d,p,g){c.info(function(){return"XMLHTTP TEXT ("+d+"): "+E_(c,p)+(g?" "+g:"")})}function w_(c,d){c.info(function(){return"TIMEOUT: "+d})}Kr.prototype.info=function(){};function E_(c,d){if(!c.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(c=0;c<p.length;c++)if(Array.isArray(p[c])){var g=p[c];if(!(2>g.length)){var S=g[1];if(Array.isArray(S)&&!(1>S.length)){var D=S[0];if(D!="noop"&&D!="stop"&&D!="close")for(var F=1;F<S.length;F++)S[F]=""}}}}return la(p)}catch{return d}}var li={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},wu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},fa;function ui(){}b(ui,ua),ui.prototype.g=function(){return new XMLHttpRequest},ui.prototype.i=function(){return{}},fa=new ui;function $t(c,d,p,g){this.j=c,this.i=d,this.l=p,this.R=g||1,this.U=new jr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Eu}function Eu(){this.i=null,this.g="",this.h=!1}var Tu={},ma={};function pa(c,d,p){c.L=1,c.v=mi(wt(d)),c.m=p,c.P=!0,bu(c,null)}function bu(c,d){c.F=Date.now(),hi(c),c.A=wt(c.v);var p=c.A,g=c.R;Array.isArray(g)||(g=[String(g)]),Fu(p.i,"t",g),c.C=0,p=c.j.J,c.h=new Eu,c.g=nh(c.j,p?d:null,!c.m),0<c.O&&(c.M=new g_(_(c.Y,c,c.g),c.O)),d=c.U,p=c.g,g=c.ca;var S="readystatechange";Array.isArray(S)||(S&&(fu[0]=S.toString()),S=fu);for(var D=0;D<S.length;D++){var F=au(p,S[D],g||d.handleEvent,!1,d.h||d);if(!F)break;d.g[F.key]=F}d=c.H?v(c.H):{},c.m?(c.u||(c.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,d)):(c.u="GET",c.g.ea(c.A,c.u,null,d)),qr(),v_(c.i,c.u,c.A,c.l,c.R,c.m)}$t.prototype.ca=function(c){c=c.target;const d=this.M;d&&Et(c)==3?d.j():this.Y(c)},$t.prototype.Y=function(c){try{if(c==this.g)e:{const je=Et(this.g);var d=this.g.Ba();const tr=this.g.Z();if(!(3>je)&&(je!=3||this.g&&(this.h.h||this.g.oa()||Ku(this.g)))){this.J||je!=4||d==7||(d==8||0>=tr?qr(3):qr(2)),ga(this);var p=this.g.Z();this.X=p;t:if(Au(this)){var g=Ku(this.g);c="";var S=g.length,D=Et(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){vn(this),Gr(this);var F="";break t}this.h.i=new a.TextDecoder}for(d=0;d<S;d++)this.h.h=!0,c+=this.h.i.decode(g[d],{stream:!(D&&d==S-1)});g.length=0,this.h.g+=c,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=p==200,I_(this.i,this.u,this.A,this.l,this.R,je,p),this.o){if(this.T&&!this.K){t:{if(this.g){var le,Ve=this.g;if((le=Ve.g?Ve.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(le)){var re=le;break t}}re=null}if(p=re)Xn(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,_a(this,p);else{this.o=!1,this.s=3,We(12),vn(this),Gr(this);break e}}if(this.P){p=!0;let ut;for(;!this.J&&this.C<F.length;)if(ut=T_(this,F),ut==ma){je==4&&(this.s=4,We(14),p=!1),Xn(this.i,this.l,null,"[Incomplete Response]");break}else if(ut==Tu){this.s=4,We(15),Xn(this.i,this.l,F,"[Invalid Chunk]"),p=!1;break}else Xn(this.i,this.l,ut,null),_a(this,ut);if(Au(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),je!=4||F.length!=0||this.h.h||(this.s=1,We(16),p=!1),this.o=this.o&&p,!p)Xn(this.i,this.l,F,"[Invalid Chunked Response]"),vn(this),Gr(this);else if(0<F.length&&!this.W){this.W=!0;var Be=this.j;Be.g==this&&Be.ba&&!Be.M&&(Be.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),Ta(Be),Be.M=!0,We(11))}}else Xn(this.i,this.l,F,null),_a(this,F);je==4&&vn(this),this.o&&!this.J&&(je==4?Xu(this.j,this):(this.o=!1,hi(this)))}else B_(this.g),p==400&&0<F.indexOf("Unknown SID")?(this.s=3,We(12)):(this.s=0,We(13)),vn(this),Gr(this)}}}catch{}finally{}};function Au(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function T_(c,d){var p=c.C,g=d.indexOf(`
`,p);return g==-1?ma:(p=Number(d.substring(p,g)),isNaN(p)?Tu:(g+=1,g+p>d.length?ma:(d=d.slice(g,g+p),c.C=g+p,d)))}$t.prototype.cancel=function(){this.J=!0,vn(this)};function hi(c){c.S=Date.now()+c.I,Su(c,c.I)}function Su(c,d){if(c.B!=null)throw Error("WatchDog timer not null");c.B=zr(_(c.ba,c),d)}function ga(c){c.B&&(a.clearTimeout(c.B),c.B=null)}$t.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(w_(this.i,this.A),this.L!=2&&(qr(),We(17)),vn(this),this.s=2,Gr(this)):Su(this,this.S-c)};function Gr(c){c.j.G==0||c.J||Xu(c.j,c)}function vn(c){ga(c);var d=c.M;d&&typeof d.ma=="function"&&d.ma(),c.M=null,mu(c.U),c.g&&(d=c.g,c.g=null,d.abort(),d.ma())}function _a(c,d){try{var p=c.j;if(p.G!=0&&(p.g==c||ya(p.h,c))){if(!c.K&&ya(p.h,c)&&p.G==3){try{var g=p.Da.g.parse(d)}catch{g=null}if(Array.isArray(g)&&g.length==3){var S=g;if(S[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<c.F)Ii(p),yi(p);else break e;Ea(p),We(18)}}else p.za=S[1],0<p.za-p.T&&37500>S[2]&&p.F&&p.v==0&&!p.C&&(p.C=zr(_(p.Za,p),6e3));if(1>=Cu(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else wn(p,11)}else if((c.K||p.g==c)&&Ii(p),!O(d))for(S=p.Da.g.parse(d),d=0;d<S.length;d++){let re=S[d];if(p.T=re[0],re=re[1],p.G==2)if(re[0]=="c"){p.K=re[1],p.ia=re[2];const Be=re[3];Be!=null&&(p.la=Be,p.j.info("VER="+p.la));const je=re[4];je!=null&&(p.Aa=je,p.j.info("SVER="+p.Aa));const tr=re[5];tr!=null&&typeof tr=="number"&&0<tr&&(g=1.5*tr,p.L=g,p.j.info("backChannelRequestTimeoutMs_="+g)),g=p;const ut=c.g;if(ut){const Ei=ut.g?ut.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ei){var D=g.h;D.g||Ei.indexOf("spdy")==-1&&Ei.indexOf("quic")==-1&&Ei.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(va(D,D.h),D.h=null))}if(g.D){const ba=ut.g?ut.g.getResponseHeader("X-HTTP-Session-Id"):null;ba&&(g.ya=ba,fe(g.I,g.D,ba))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-c.F,p.j.info("Handshake RTT: "+p.R+"ms")),g=p;var F=c;if(g.qa=th(g,g.J?g.ia:null,g.W),F.K){ku(g.h,F);var le=F,Ve=g.L;Ve&&(le.I=Ve),le.B&&(ga(le),hi(le)),g.g=F}else Ju(g);0<p.i.length&&vi(p)}else re[0]!="stop"&&re[0]!="close"||wn(p,7);else p.G==3&&(re[0]=="stop"||re[0]=="close"?re[0]=="stop"?wn(p,7):wa(p):re[0]!="noop"&&p.l&&p.l.ta(re),p.v=0)}}qr(4)}catch{}}var b_=class{constructor(c,d){this.g=c,this.map=d}};function Ru(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Pu(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Cu(c){return c.h?1:c.g?c.g.size:0}function ya(c,d){return c.h?c.h==d:c.g?c.g.has(d):!1}function va(c,d){c.g?c.g.add(d):c.h=d}function ku(c,d){c.h&&c.h==d?c.h=null:c.g&&c.g.has(d)&&c.g.delete(d)}Ru.prototype.cancel=function(){if(this.i=Du(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Du(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let d=c.i;for(const p of c.g.values())d=d.concat(p.D);return d}return R(c.i)}function A_(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(l(c)){for(var d=[],p=c.length,g=0;g<p;g++)d.push(c[g]);return d}d=[],p=0;for(g in c)d[p++]=c[g];return d}function S_(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(l(c)||typeof c=="string"){var d=[];c=c.length;for(var p=0;p<c;p++)d.push(p);return d}d=[],p=0;for(const g in c)d[p++]=g;return d}}}function Vu(c,d){if(c.forEach&&typeof c.forEach=="function")c.forEach(d,void 0);else if(l(c)||typeof c=="string")Array.prototype.forEach.call(c,d,void 0);else for(var p=S_(c),g=A_(c),S=g.length,D=0;D<S;D++)d.call(void 0,g[D],p&&p[D],c)}var Nu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function R_(c,d){if(c){c=c.split("&");for(var p=0;p<c.length;p++){var g=c[p].indexOf("="),S=null;if(0<=g){var D=c[p].substring(0,g);S=c[p].substring(g+1)}else D=c[p];d(D,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function In(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof In){this.h=c.h,di(this,c.j),this.o=c.o,this.g=c.g,fi(this,c.s),this.l=c.l;var d=c.i,p=new Qr;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),xu(this,p),this.m=c.m}else c&&(d=String(c).match(Nu))?(this.h=!1,di(this,d[1]||"",!0),this.o=Wr(d[2]||""),this.g=Wr(d[3]||"",!0),fi(this,d[4]),this.l=Wr(d[5]||"",!0),xu(this,d[6]||"",!0),this.m=Wr(d[7]||"")):(this.h=!1,this.i=new Qr(null,this.h))}In.prototype.toString=function(){var c=[],d=this.j;d&&c.push(Hr(d,Ou,!0),":");var p=this.g;return(p||d=="file")&&(c.push("//"),(d=this.o)&&c.push(Hr(d,Ou,!0),"@"),c.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&c.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&c.push("/"),c.push(Hr(p,p.charAt(0)=="/"?k_:C_,!0))),(p=this.i.toString())&&c.push("?",p),(p=this.m)&&c.push("#",Hr(p,V_)),c.join("")};function wt(c){return new In(c)}function di(c,d,p){c.j=p?Wr(d,!0):d,c.j&&(c.j=c.j.replace(/:$/,""))}function fi(c,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);c.s=d}else c.s=null}function xu(c,d,p){d instanceof Qr?(c.i=d,N_(c.i,c.h)):(p||(d=Hr(d,D_)),c.i=new Qr(d,c.h))}function fe(c,d,p){c.i.set(d,p)}function mi(c){return fe(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Wr(c,d){return c?d?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Hr(c,d,p){return typeof c=="string"?(c=encodeURI(c).replace(d,P_),p&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function P_(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Ou=/[#\/\?@]/g,C_=/[#\?:]/g,k_=/[#\?]/g,D_=/[#\?@]/g,V_=/#/g;function Qr(c,d){this.h=this.g=null,this.i=c||null,this.j=!!d}function qt(c){c.g||(c.g=new Map,c.h=0,c.i&&R_(c.i,function(d,p){c.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}n=Qr.prototype,n.add=function(c,d){qt(this),this.i=null,c=Zn(this,c);var p=this.g.get(c);return p||this.g.set(c,p=[]),p.push(d),this.h+=1,this};function Mu(c,d){qt(c),d=Zn(c,d),c.g.has(d)&&(c.i=null,c.h-=c.g.get(d).length,c.g.delete(d))}function Lu(c,d){return qt(c),d=Zn(c,d),c.g.has(d)}n.forEach=function(c,d){qt(this),this.g.forEach(function(p,g){p.forEach(function(S){c.call(d,S,g,this)},this)},this)},n.na=function(){qt(this);const c=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let g=0;g<d.length;g++){const S=c[g];for(let D=0;D<S.length;D++)p.push(d[g])}return p},n.V=function(c){qt(this);let d=[];if(typeof c=="string")Lu(this,c)&&(d=d.concat(this.g.get(Zn(this,c))));else{c=Array.from(this.g.values());for(let p=0;p<c.length;p++)d=d.concat(c[p])}return d},n.set=function(c,d){return qt(this),this.i=null,c=Zn(this,c),Lu(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[d]),this.h+=1,this},n.get=function(c,d){return c?(c=this.V(c),0<c.length?String(c[0]):d):d};function Fu(c,d,p){Mu(c,d),0<p.length&&(c.i=null,c.g.set(Zn(c,d),R(p)),c.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var g=d[p];const D=encodeURIComponent(String(g)),F=this.V(g);for(g=0;g<F.length;g++){var S=D;F[g]!==""&&(S+="="+encodeURIComponent(String(F[g]))),c.push(S)}}return this.i=c.join("&")};function Zn(c,d){return d=String(d),c.j&&(d=d.toLowerCase()),d}function N_(c,d){d&&!c.j&&(qt(c),c.i=null,c.g.forEach(function(p,g){var S=g.toLowerCase();g!=S&&(Mu(this,g),Fu(this,S,p))},c)),c.j=d}function x_(c,d){const p=new Kr;if(a.Image){const g=new Image;g.onload=y(zt,p,"TestLoadImage: loaded",!0,d,g),g.onerror=y(zt,p,"TestLoadImage: error",!1,d,g),g.onabort=y(zt,p,"TestLoadImage: abort",!1,d,g),g.ontimeout=y(zt,p,"TestLoadImage: timeout",!1,d,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=c}else d(!1)}function O_(c,d){const p=new Kr,g=new AbortController,S=setTimeout(()=>{g.abort(),zt(p,"TestPingServer: timeout",!1,d)},1e4);fetch(c,{signal:g.signal}).then(D=>{clearTimeout(S),D.ok?zt(p,"TestPingServer: ok",!0,d):zt(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(S),zt(p,"TestPingServer: error",!1,d)})}function zt(c,d,p,g,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),g(p)}catch{}}function M_(){this.g=new y_}function L_(c,d,p){const g=p||"";try{Vu(c,function(S,D){let F=S;h(S)&&(F=la(S)),d.push(g+D+"="+encodeURIComponent(F))})}catch(S){throw d.push(g+"type="+encodeURIComponent("_badmap")),S}}function pi(c){this.l=c.Ub||null,this.j=c.eb||!1}b(pi,ua),pi.prototype.g=function(){return new gi(this.l,this.j)},pi.prototype.i=function(c){return function(){return c}}({});function gi(c,d){Ue.call(this),this.D=c,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(gi,Ue),n=gi.prototype,n.open=function(c,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=d,this.readyState=1,Yr(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(d.body=c),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Jr(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Yr(this)),this.g&&(this.readyState=3,Yr(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Uu(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Uu(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var d=c.value?c.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!c.done}))&&(this.response=this.responseText+=d)}c.done?Jr(this):Yr(this),this.readyState==3&&Uu(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,Jr(this))},n.Qa=function(c){this.g&&(this.response=c,Jr(this))},n.ga=function(){this.g&&Jr(this)};function Jr(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Yr(c)}n.setRequestHeader=function(c,d){this.u.append(c,d)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,c.push(p[0]+": "+p[1]),p=d.next();return c.join(`\r
`)};function Yr(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(gi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Bu(c){let d="";return $(c,function(p,g){d+=g,d+=":",d+=p,d+=`\r
`}),d}function Ia(c,d,p){e:{for(g in p){var g=!1;break e}g=!0}g||(p=Bu(p),typeof c=="string"?p!=null&&encodeURIComponent(String(p)):fe(c,d,p))}function ye(c){Ue.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(ye,Ue);var F_=/^https?$/i,U_=["POST","PUT"];n=ye.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,d,p,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);d=d?d.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():fa.g(),this.v=this.o?pu(this.o):pu(fa),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(d,String(c),!0),this.B=!1}catch(D){ju(this,D);return}if(c=p||"",p=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var S in g)p.set(S,g[S]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())p.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(p.keys()).find(D=>D.toLowerCase()=="content-type"),S=a.FormData&&c instanceof a.FormData,!(0<=Array.prototype.indexOf.call(U_,d,void 0))||g||S||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,F]of p)this.g.setRequestHeader(D,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{zu(this),this.u=!0,this.g.send(c),this.u=!1}catch(D){ju(this,D)}};function ju(c,d){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=d,c.m=5,$u(c),_i(c)}function $u(c){c.A||(c.A=!0,Ge(c,"complete"),Ge(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Ge(this,"complete"),Ge(this,"abort"),_i(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_i(this,!0)),ye.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?qu(this):this.bb())},n.bb=function(){qu(this)};function qu(c){if(c.h&&typeof o<"u"&&(!c.v[1]||Et(c)!=4||c.Z()!=2)){if(c.u&&Et(c)==4)hu(c.Ea,0,c);else if(Ge(c,"readystatechange"),Et(c)==4){c.h=!1;try{const F=c.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var g;if(g=F===0){var S=String(c.D).match(Nu)[1]||null;!S&&a.self&&a.self.location&&(S=a.self.location.protocol.slice(0,-1)),g=!F_.test(S?S.toLowerCase():"")}p=g}if(p)Ge(c,"complete"),Ge(c,"success");else{c.m=6;try{var D=2<Et(c)?c.g.statusText:""}catch{D=""}c.l=D+" ["+c.Z()+"]",$u(c)}}finally{_i(c)}}}}function _i(c,d){if(c.g){zu(c);const p=c.g,g=c.v[0]?()=>{}:null;c.g=null,c.v=null,d||Ge(c,"ready");try{p.onreadystatechange=g}catch{}}}function zu(c){c.I&&(a.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function Et(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<Et(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var d=this.g.responseText;return c&&d.indexOf(c)==0&&(d=d.substring(c.length)),__(d)}};function Ku(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function B_(c){const d={};c=(c.g&&2<=Et(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<c.length;g++){if(O(c[g]))continue;var p=A(c[g]);const S=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const D=d[S]||[];d[S]=D,D.push(p)}T(d,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xr(c,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[c]||d}function Gu(c){this.Aa=0,this.i=[],this.j=new Kr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xr("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xr("baseRetryDelayMs",5e3,c),this.cb=Xr("retryDelaySeedMs",1e4,c),this.Wa=Xr("forwardChannelMaxRetries",2,c),this.wa=Xr("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Ru(c&&c.concurrentRequestLimit),this.Da=new M_,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Gu.prototype,n.la=8,n.G=1,n.connect=function(c,d,p,g){We(0),this.W=c,this.H=d||{},p&&g!==void 0&&(this.H.OSID=p,this.H.OAID=g),this.F=this.X,this.I=th(this,null,this.W),vi(this)};function wa(c){if(Wu(c),c.G==3){var d=c.U++,p=wt(c.I);if(fe(p,"SID",c.K),fe(p,"RID",d),fe(p,"TYPE","terminate"),Zr(c,p),d=new $t(c,c.j,d),d.L=2,d.v=mi(wt(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=d.v,p=!0),p||(d.g=nh(d.j,null),d.g.ea(d.v)),d.F=Date.now(),hi(d)}eh(c)}function yi(c){c.g&&(Ta(c),c.g.cancel(),c.g=null)}function Wu(c){yi(c),c.u&&(a.clearTimeout(c.u),c.u=null),Ii(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&a.clearTimeout(c.s),c.s=null)}function vi(c){if(!Pu(c.h)&&!c.s){c.s=!0;var d=c.Ga;Bt||ou(),It||(Bt(),It=!0),ta.add(d,c),c.B=0}}function j_(c,d){return Cu(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=d.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=zr(_(c.Ga,c,d),Zu(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const S=new $t(this,this.j,c);let D=this.o;if(this.S&&(D?(D=v(D),E(D,this.S)):D=this.S),this.m!==null||this.O||(S.H=D,D=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var g=this.i[p];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(d+=g,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=Qu(this,S,d),p=wt(this.I),fe(p,"RID",c),fe(p,"CVER",22),this.D&&fe(p,"X-HTTP-Session-Id",this.D),Zr(this,p),D&&(this.O?d="headers="+encodeURIComponent(String(Bu(D)))+"&"+d:this.m&&Ia(p,this.m,D)),va(this.h,S),this.Ua&&fe(p,"TYPE","init"),this.P?(fe(p,"$req",d),fe(p,"SID","null"),S.T=!0,pa(S,p,null)):pa(S,p,d),this.G=2}}else this.G==3&&(c?Hu(this,c):this.i.length==0||Pu(this.h)||Hu(this))};function Hu(c,d){var p;d?p=d.l:p=c.U++;const g=wt(c.I);fe(g,"SID",c.K),fe(g,"RID",p),fe(g,"AID",c.T),Zr(c,g),c.m&&c.o&&Ia(g,c.m,c.o),p=new $t(c,c.j,p,c.B+1),c.m===null&&(p.H=c.o),d&&(c.i=d.D.concat(c.i)),d=Qu(c,p,1e3),p.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),va(c.h,p),pa(p,g,d)}function Zr(c,d){c.H&&$(c.H,function(p,g){fe(d,g,p)}),c.l&&Vu({},function(p,g){fe(d,g,p)})}function Qu(c,d,p){p=Math.min(c.i.length,p);var g=c.l?_(c.l.Na,c.l,c):null;e:{var S=c.i;let D=-1;for(;;){const F=["count="+p];D==-1?0<p?(D=S[0].g,F.push("ofs="+D)):D=0:F.push("ofs="+D);let le=!0;for(let Ve=0;Ve<p;Ve++){let re=S[Ve].g;const Be=S[Ve].map;if(re-=D,0>re)D=Math.max(0,S[Ve].g-100),le=!1;else try{L_(Be,F,"req"+re+"_")}catch{g&&g(Be)}}if(le){g=F.join("&");break e}}}return c=c.i.splice(0,p),d.D=c,g}function Ju(c){if(!c.g&&!c.u){c.Y=1;var d=c.Fa;Bt||ou(),It||(Bt(),It=!0),ta.add(d,c),c.v=0}}function Ea(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=zr(_(c.Fa,c),Zu(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,Yu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=zr(_(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,We(10),yi(this),Yu(this))};function Ta(c){c.A!=null&&(a.clearTimeout(c.A),c.A=null)}function Yu(c){c.g=new $t(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var d=wt(c.qa);fe(d,"RID","rpc"),fe(d,"SID",c.K),fe(d,"AID",c.T),fe(d,"CI",c.F?"0":"1"),!c.F&&c.ja&&fe(d,"TO",c.ja),fe(d,"TYPE","xmlhttp"),Zr(c,d),c.m&&c.o&&Ia(d,c.m,c.o),c.L&&(c.g.I=c.L);var p=c.g;c=c.ia,p.L=1,p.v=mi(wt(d)),p.m=null,p.P=!0,bu(p,c)}n.Za=function(){this.C!=null&&(this.C=null,yi(this),Ea(this),We(19))};function Ii(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function Xu(c,d){var p=null;if(c.g==d){Ii(c),Ta(c),c.g=null;var g=2}else if(ya(c.h,d))p=d.D,ku(c.h,d),g=1;else return;if(c.G!=0){if(d.o)if(g==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var S=c.B;g=ci(),Ge(g,new Iu(g,p)),vi(c)}else Ju(c);else if(S=d.s,S==3||S==0&&0<d.X||!(g==1&&j_(c,d)||g==2&&Ea(c)))switch(p&&0<p.length&&(d=c.h,d.i=d.i.concat(p)),S){case 1:wn(c,5);break;case 4:wn(c,10);break;case 3:wn(c,6);break;default:wn(c,2)}}}function Zu(c,d){let p=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(p*=2),p*d}function wn(c,d){if(c.j.info("Error code "+d),d==2){var p=_(c.fb,c),g=c.Xa;const S=!g;g=new In(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||di(g,"https"),mi(g),S?x_(g.toString(),p):O_(g.toString(),p)}else We(2);c.G=0,c.l&&c.l.sa(d),eh(c),Wu(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),We(2)):(this.j.info("Failed to ping google.com"),We(1))};function eh(c){if(c.G=0,c.ka=[],c.l){const d=Du(c.h);(d.length!=0||c.i.length!=0)&&(k(c.ka,d),k(c.ka,c.i),c.h.i.length=0,R(c.i),c.i.length=0),c.l.ra()}}function th(c,d,p){var g=p instanceof In?wt(p):new In(p);if(g.g!="")d&&(g.g=d+"."+g.g),fi(g,g.s);else{var S=a.location;g=S.protocol,d=d?d+"."+S.hostname:S.hostname,S=+S.port;var D=new In(null);g&&di(D,g),d&&(D.g=d),S&&fi(D,S),p&&(D.l=p),g=D}return p=c.D,d=c.ya,p&&d&&fe(g,p,d),fe(g,"VER",c.la),Zr(c,g),g}function nh(c,d,p){if(d&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=c.Ca&&!c.pa?new ye(new pi({eb:p})):new ye(c.pa),d.Ha(c.J),d}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function rh(){}n=rh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function wi(){}wi.prototype.g=function(c,d){return new tt(c,d)};function tt(c,d){Ue.call(this),this.g=new Gu(d),this.l=c,this.h=d&&d.messageUrlParams||null,c=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(c?c["X-WebChannel-Content-Type"]=d.messageContentType:c={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(c?c["X-WebChannel-Client-Profile"]=d.va:c={"X-WebChannel-Client-Profile":d.va}),this.g.S=c,(c=d&&d.Sb)&&!O(c)&&(this.g.m=c),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!O(d)&&(this.g.D=d,c=this.h,c!==null&&d in c&&(c=this.h,d in c&&delete c[d])),this.j=new er(this)}b(tt,Ue),tt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},tt.prototype.close=function(){wa(this.g)},tt.prototype.o=function(c){var d=this.g;if(typeof c=="string"){var p={};p.__data__=c,c=p}else this.u&&(p={},p.__data__=la(c),c=p);d.i.push(new b_(d.Ya++,c)),d.G==3&&vi(d)},tt.prototype.N=function(){this.g.l=null,delete this.j,wa(this.g),delete this.g,tt.aa.N.call(this)};function sh(c){ha.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var d=c.__sm__;if(d){e:{for(const p in d){c=p;break e}c=void 0}(this.i=c)&&(c=this.i,d=d!==null&&c in d?d[c]:void 0),this.data=d}else this.data=c}b(sh,ha);function ih(){da.call(this),this.status=1}b(ih,da);function er(c){this.g=c}b(er,rh),er.prototype.ua=function(){Ge(this.g,"a")},er.prototype.ta=function(c){Ge(this.g,new sh(c))},er.prototype.sa=function(c){Ge(this.g,new ih)},er.prototype.ra=function(){Ge(this.g,"b")},wi.prototype.createWebChannel=wi.prototype.g,tt.prototype.send=tt.prototype.o,tt.prototype.open=tt.prototype.m,tt.prototype.close=tt.prototype.close,km=function(){return new wi},Cm=function(){return ci()},Pm=yn,rc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},li.NO_ERROR=0,li.TIMEOUT=8,li.HTTP_ERROR=6,$i=li,wu.COMPLETE="complete",Rm=wu,gu.EventType=$r,$r.OPEN="a",$r.CLOSE="b",$r.ERROR="c",$r.MESSAGE="d",Ue.prototype.listen=Ue.prototype.K,cs=gu,ye.prototype.listenOnce=ye.prototype.L,ye.prototype.getLastError=ye.prototype.Ka,ye.prototype.getLastErrorCode=ye.prototype.Ba,ye.prototype.getStatus=ye.prototype.Z,ye.prototype.getResponseJson=ye.prototype.Oa,ye.prototype.getResponseText=ye.prototype.oa,ye.prototype.send=ye.prototype.ea,ye.prototype.setWithCredentials=ye.prototype.Ha,Sm=ye}).apply(typeof Ai<"u"?Ai:typeof self<"u"?self:typeof window<"u"?window:{});const Qh="@firebase/firestore";/**
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
 */let Or="10.14.0";/**
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
 */const Ln=new Oc("@firebase/firestore");function or(){return Ln.logLevel}function x(n,...e){if(Ln.logLevel<=ee.DEBUG){const t=e.map(Qc);Ln.debug(`Firestore (${Or}): ${n}`,...t)}}function we(n,...e){if(Ln.logLevel<=ee.ERROR){const t=e.map(Qc);Ln.error(`Firestore (${Or}): ${n}`,...t)}}function Rs(n,...e){if(Ln.logLevel<=ee.WARN){const t=e.map(Qc);Ln.warn(`Firestore (${Or}): ${n}`,...t)}}function Qc(n){if(typeof n=="string")return n;try{/**
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
 */function z(n="Unexpected state"){const e=`FIRESTORE (${Or}) INTERNAL ASSERTION FAILED: `+n;throw we(e),new Error(e)}function G(n,e){n||z()}function K(n,e){return n}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends xt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Jw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Yw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(qe.UNAUTHENTICATED))}shutdown(){}}class Xw{constructor(e){this.t=e,this.currentUser=qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){G(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new gt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new gt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new gt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(G(typeof r.accessToken=="string"),new Jw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return G(e===null||typeof e=="string"),new qe(e)}}class Zw{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=qe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class eE{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Zw(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class tE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nE{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){G(this.o===void 0);const r=i=>{i.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,x("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(G(typeof t.token=="string"),this.R=t.token,new tE(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function rE(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Dm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=rE(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function Y(n,e){return n<e?-1:n>e?1:0}function yr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}function Vm(n){return n+"\0"}/**
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
 */class Ps{constructor(e,t,r){t===void 0?t=0:t>e.length&&z(),r===void 0?r=e.length-t:r>e.length-t&&z(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ps.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ps?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ie extends Ps{construct(e,t,r){return new ie(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ie(t)}static emptyPath(){return new ie([])}}const sE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ge extends Ps{construct(e,t,r){return new ge(e,t,r)}static isValidIdentifier(e){return sE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ge(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new L(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new L(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new L(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new L(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ge(t)}static emptyPath(){return new ge([])}}/**
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
 */class uo{constructor(e,t,r,s){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=s}}function sc(n){return n.fields.find(e=>e.kind===2)}function bn(n){return n.fields.filter(e=>e.kind!==2)}uo.UNKNOWN_ID=-1;class qi{constructor(e,t){this.fieldPath=e,this.kind=t}}class Cs{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Cs(0,it.min())}}function Nm(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=W.fromTimestamp(r===1e9?new _e(t+1,0):new _e(t,r));return new it(s,B.empty(),e)}function xm(n){return new it(n.readTime,n.key,-1)}class it{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new it(W.min(),B.empty(),-1)}static max(){return new it(W.max(),B.empty(),-1)}}function Jc(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=B.comparator(n.documentKey,e.documentKey),t!==0?t:Y(n.largestBatchId,e.largestBatchId))}/**
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
 */const Om="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Mm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function mn(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==Om)throw n;x("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new C((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof C?t:C.resolve(t)}catch(t){return C.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):C.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):C.reject(t)}static resolve(e){return new C((t,r)=>{t(e)})}static reject(e){return new C((t,r)=>{r(e)})}static waitFor(e){return new C((t,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&t()},l=>r(l))}),o=!0,i===s&&t()})}static or(e){let t=C.resolve(!1);for(const r of e)t=t.next(s=>s?C.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new C((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next(f=>{o[h]=f,++a,a===i&&r(o)},f=>s(f))}})}static doWhile(e,t){return new C((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}/**
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
 */class xo{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new gt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new ms(e,t.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=Yc(r.target.error);this.V.reject(new ms(e,s))}}static open(e,t,r,s){try{return new xo(t,e.transaction(s,r))}catch(i){throw new ms(t,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(x("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new oE(t)}}class rn{constructor(e,t,r){this.name=e,this.version=t,this.p=r,rn.S(Pe())===12.2&&we("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return x("SimpleDb","Removing database:",e),Sn(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Uf())return!1;if(rn.v())return!0;const e=Pe(),t=rn.S(e),r=0<t&&t<10,s=Lm(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(x("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{r(new ms(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new L(V.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new L(V.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ms(e,o))},s.onupgradeneeded=i=>{x("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.O(o,s.transaction,i.oldVersion,this.version).next(()=>{x("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=xo.open(this.db,e,i?"readonly":"readwrite",r),l=s(a).next(h=>(a.g(),h)).catch(h=>(a.abort(h),C.reject(h))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,h=l.name!=="FirebaseError"&&o<3;if(x("SimpleDb","Transaction failed with error:",l.message,"Retrying:",h),this.close(),!h)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Lm(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class iE{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Sn(this.B.delete())}}class ms extends L{constructor(e,t){super(V.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function pn(n){return n.name==="IndexedDbTransactionError"}class oE{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(x("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(x("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Sn(r)}add(e){return x("SimpleDb","ADD",this.store.name,e,e),Sn(this.store.add(e))}get(e){return Sn(this.store.get(e)).next(t=>(t===void 0&&(t=null),x("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return x("SimpleDb","DELETE",this.store.name,e),Sn(this.store.delete(e))}count(){return x("SimpleDb","COUNT",this.store.name),Sn(this.store.count())}U(e,t){const r=this.options(e,t),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new C((o,a)=>{i.onerror=l=>{a(l.target.error)},i.onsuccess=l=>{o(l.target.result)}})}{const i=this.cursor(r),o=[];return this.W(i,(a,l)=>{o.push(l)}).next(()=>o)}}G(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new C((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}j(e,t){x("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.H=!1;const s=this.cursor(r);return this.W(s,(i,o,a)=>a.delete())}J(e,t){let r;t?r=e:(r={},t=e);const s=this.cursor(r);return this.W(s,t)}Y(e){const t=this.cursor({});return new C((r,s)=>{t.onerror=i=>{const o=Yc(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,t){const r=[];return new C((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const l=new iE(a),h=t(a.primaryKey,a.value,l);if(h instanceof C){const f=h.catch(m=>(l.done(),C.reject(m)));r.push(f)}l.isDone?s():l.K===null?a.continue():a.continue(l.K)}}).next(()=>C.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Sn(n){return new C((e,t)=>{n.onsuccess=r=>{const s=r.target.result;e(s)},n.onerror=r=>{const s=Yc(r.target.error);t(s)}})}let Jh=!1;function Yc(n){const e=rn.S(Pe());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new L("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Jh||(Jh=!0,setTimeout(()=>{throw r},0)),r}}return n}class aE{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){x("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{x("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){pn(t)?x("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await mn(t)}await this.X(6e4)})}}class cE{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const r=new Set;let s=t,i=!0;return C.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return x("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,s).next(a=>{s-=a,r.add(o)});i=!1})).next(()=>t-s)}ne(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,r).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(s,i)).next(a=>(x("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}re(e,t){let r=e;return t.changes.forEach((s,i)=>{const o=xm(i);Jc(o,r)>0&&(r=o)}),new it(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class Xe{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Xe.oe=-1;function Oo(n){return n==null}function ks(n){return n===0&&1/n==-1/0}function Fm(n){return typeof n=="number"&&Number.isInteger(n)&&!ks(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Qe(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Yh(e)),e=lE(n.get(t),e);return Yh(e)}function lE(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function Yh(n){return n+""}function ft(n){const e=n.length;if(G(e>=2),e===2)return G(n.charAt(0)===""&&n.charAt(1)===""),ie.emptyPath();const t=e-2,r=[];let s="";for(let i=0;i<e;){const o=n.indexOf("",i);switch((o<0||o>t)&&z(),n.charAt(o+1)){case"":const a=n.substring(i,o);let l;s.length===0?l=a:(s+=a,l=s,s=""),r.push(l);break;case"":s+=n.substring(i,o),s+="\0";break;case"":s+=n.substring(i,o+1);break;default:z()}i=o+2}return new ie(r)}/**
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
 */const Xh=["userId","batchId"];/**
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
 */function zi(n,e){return[n,Qe(e)]}function Um(n,e,t){return[n,Qe(e),t]}const uE={},hE=["prefixPath","collectionGroup","readTime","documentId"],dE=["prefixPath","collectionGroup","documentId"],fE=["collectionGroup","readTime","prefixPath","documentId"],mE=["canonicalId","targetId"],pE=["targetId","path"],gE=["path","targetId"],_E=["collectionId","parent"],yE=["indexId","uid"],vE=["uid","sequenceNumber"],IE=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],wE=["indexId","uid","orderedDocumentKey"],EE=["userId","collectionPath","documentId"],TE=["userId","collectionPath","largestBatchId"],bE=["userId","collectionGroup","largestBatchId"],Bm=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],AE=[...Bm,"documentOverlays"],jm=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],$m=jm,Xc=[...$m,"indexConfiguration","indexState","indexEntries"],SE=Xc,RE=[...Xc,"globals"];/**
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
 */class ic extends Mm{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function ke(n,e){const t=K(n);return rn.F(t._e,e)}/**
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
 */function Zh(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Hn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function qm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class de{constructor(e,t){this.comparator=e,this.root=t||Ne.EMPTY}insert(e,t){return new de(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ne.BLACK,null,null))}remove(e){return new de(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ne.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Si(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Si(this.root,e,this.comparator,!1)}getReverseIterator(){return new Si(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Si(this.root,e,this.comparator,!0)}}class Si{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ne{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ne.RED,this.left=s??Ne.EMPTY,this.right=i??Ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Ne(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ne.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ne.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}Ne.EMPTY=null,Ne.RED=!0,Ne.BLACK=!1;Ne.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(e,t,r,s,i){return this}insert(e,t,r){return new Ne(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ce{constructor(e){this.comparator=e,this.data=new de(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ed(this.data.getIterator())}getIteratorFrom(e){return new ed(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ce)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ce(this.comparator);return t.data=e,t}}class ed{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function nr(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class Ze{constructor(e){this.fields=e,e.sort(ge.comparator)}static empty(){return new Ze([])}unionWith(e){let t=new ce(ge.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ze(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return yr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class zm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Te{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new zm("Invalid base64 string: "+i):i}}(e);return new Te(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Te(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Y(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Te.EMPTY_BYTE_STRING=new Te("");const PE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vt(n){if(G(!!n),typeof n=="string"){let e=0;const t=PE.exec(n);if(G(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:me(n.seconds),nanos:me(n.nanos)}}function me(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function an(n){return typeof n=="string"?Te.fromBase64String(n):Te.fromUint8Array(n)}/**
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
 */function Zc(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function el(n){const e=n.mapValue.fields.__previous_value__;return Zc(e)?el(e):e}function Ds(n){const e=Vt(n.mapValue.fields.__local_write_time__.timestampValue);return new _e(e.seconds,e.nanos)}/**
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
 */class CE{constructor(e,t,r,s,i,o,a,l,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=h}}class Fn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Fn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Fn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Zt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Ki={nullValue:"NULL_VALUE"};function Un(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Zc(n)?4:Km(n)?9007199254740991:Mo(n)?10:11:z()}function yt(n,e){if(n===e)return!0;const t=Un(n);if(t!==Un(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ds(n).isEqual(Ds(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Vt(s.timestampValue),a=Vt(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return an(s.bytesValue).isEqual(an(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return me(s.geoPointValue.latitude)===me(i.geoPointValue.latitude)&&me(s.geoPointValue.longitude)===me(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return me(s.integerValue)===me(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=me(s.doubleValue),a=me(i.doubleValue);return o===a?ks(o)===ks(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return yr(n.arrayValue.values||[],e.arrayValue.values||[],yt);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Zh(o)!==Zh(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!yt(o[l],a[l])))return!1;return!0}(n,e);default:return z()}}function Vs(n,e){return(n.values||[]).find(t=>yt(t,e))!==void 0}function cn(n,e){if(n===e)return 0;const t=Un(n),r=Un(e);if(t!==r)return Y(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Y(n.booleanValue,e.booleanValue);case 2:return function(i,o){const a=me(i.integerValue||i.doubleValue),l=me(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(n,e);case 3:return td(n.timestampValue,e.timestampValue);case 4:return td(Ds(n),Ds(e));case 5:return Y(n.stringValue,e.stringValue);case 6:return function(i,o){const a=an(i),l=an(o);return a.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let h=0;h<a.length&&h<l.length;h++){const f=Y(a[h],l[h]);if(f!==0)return f}return Y(a.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const a=Y(me(i.latitude),me(o.latitude));return a!==0?a:Y(me(i.longitude),me(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return nd(n.arrayValue,e.arrayValue);case 10:return function(i,o){var a,l,h,f;const m=i.fields||{},_=o.fields||{},y=(a=m.value)===null||a===void 0?void 0:a.arrayValue,b=(l=_.value)===null||l===void 0?void 0:l.arrayValue,R=Y(((h=y==null?void 0:y.values)===null||h===void 0?void 0:h.length)||0,((f=b==null?void 0:b.values)===null||f===void 0?void 0:f.length)||0);return R!==0?R:nd(y,b)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===Zt.mapValue&&o===Zt.mapValue)return 0;if(i===Zt.mapValue)return 1;if(o===Zt.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let m=0;m<l.length&&m<f.length;++m){const _=Y(l[m],f[m]);if(_!==0)return _;const y=cn(a[l[m]],h[f[m]]);if(y!==0)return y}return Y(l.length,f.length)}(n.mapValue,e.mapValue);default:throw z()}}function td(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Y(n,e);const t=Vt(n),r=Vt(e),s=Y(t.seconds,r.seconds);return s!==0?s:Y(t.nanos,r.nanos)}function nd(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=cn(t[s],r[s]);if(i)return i}return Y(t.length,r.length)}function vr(n){return oc(n)}function oc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Vt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return an(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return B.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=oc(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${oc(t.fields[o])}`;return s+"}"}(n.mapValue):z()}function Ns(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ac(n){return!!n&&"integerValue"in n}function xs(n){return!!n&&"arrayValue"in n}function rd(n){return!!n&&"nullValue"in n}function sd(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Gi(n){return!!n&&"mapValue"in n}function Mo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function ps(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Hn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ps(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ps(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Km(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const Gm={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function kE(n){return"nullValue"in n?Ki:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Ns(Fn.empty(),B.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Mo(n)?Gm:{mapValue:{}}:z()}function DE(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Ns(Fn.empty(),B.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?Gm:"mapValue"in n?Mo(n)?{mapValue:{}}:Zt:z()}function id(n,e){const t=cn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function od(n,e){const t=cn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class ze{constructor(e){this.value=e}static empty(){return new ze({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Gi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ps(t)}setAll(e){let t=ge.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=a.popLast()}o?r[a.lastSegment()]=ps(o):s.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Gi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return yt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Gi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Hn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ze(ps(this.value))}}function Wm(n){const e=[];return Hn(n.fields,(t,r)=>{const s=new ge([t]);if(Gi(r)){const i=Wm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ze(e)}/**
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
 */class Ir{constructor(e,t){this.position=e,this.inclusive=t}}function ad(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=B.comparator(B.fromName(o.referenceValue),t.key):r=cn(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function cd(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!yt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ho{constructor(e,t="asc"){this.field=e,this.dir=t}}function VE(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Hm{}class te extends Hm{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new NE(e,t,r):t==="array-contains"?new ME(e,r):t==="in"?new ep(e,r):t==="not-in"?new LE(e,r):t==="array-contains-any"?new FE(e,r):new te(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new xE(e,r):new OE(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(cn(t,this.value)):t!==null&&Un(this.value)===Un(t)&&this.matchesComparison(cn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ae extends Hm{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new ae(e,t)}matches(e){return wr(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function wr(n){return n.op==="and"}function cc(n){return n.op==="or"}function tl(n){return Qm(n)&&wr(n)}function Qm(n){for(const e of n.filters)if(e instanceof ae)return!1;return!0}function lc(n){if(n instanceof te)return n.field.canonicalString()+n.op.toString()+vr(n.value);if(tl(n))return n.filters.map(e=>lc(e)).join(",");{const e=n.filters.map(t=>lc(t)).join(",");return`${n.op}(${e})`}}function Jm(n,e){return n instanceof te?function(r,s){return s instanceof te&&r.op===s.op&&r.field.isEqual(s.field)&&yt(r.value,s.value)}(n,e):n instanceof ae?function(r,s){return s instanceof ae&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Jm(o,s.filters[a]),!0):!1}(n,e):void z()}function Ym(n,e){const t=n.filters.concat(e);return ae.create(t,n.op)}function Xm(n){return n instanceof te?function(t){return`${t.field.canonicalString()} ${t.op} ${vr(t.value)}`}(n):n instanceof ae?function(t){return t.op.toString()+" {"+t.getFilters().map(Xm).join(" ,")+"}"}(n):"Filter"}class NE extends te{constructor(e,t,r){super(e,t,r),this.key=B.fromName(r.referenceValue)}matches(e){const t=B.comparator(e.key,this.key);return this.matchesComparison(t)}}class xE extends te{constructor(e,t){super(e,"in",t),this.keys=Zm("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class OE extends te{constructor(e,t){super(e,"not-in",t),this.keys=Zm("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Zm(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>B.fromName(r.referenceValue))}class ME extends te{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return xs(t)&&Vs(t.arrayValue,this.value)}}class ep extends te{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Vs(this.value.arrayValue,t)}}class LE extends te{constructor(e,t){super(e,"not-in",t)}matches(e){if(Vs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Vs(this.value.arrayValue,t)}}class FE extends te{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!xs(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Vs(this.value.arrayValue,r))}}/**
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
 */class UE{constructor(e,t=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function uc(n,e=null,t=[],r=[],s=null,i=null,o=null){return new UE(n,e,t,r,s,i,o)}function Bn(n){const e=K(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>lc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Oo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>vr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>vr(r)).join(",")),e.ue=t}return e.ue}function Hs(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!VE(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Jm(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!cd(n.startAt,e.startAt)&&cd(n.endAt,e.endAt)}function fo(n){return B.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function mo(n,e){return n.filters.filter(t=>t instanceof te&&t.field.isEqual(e))}function ld(n,e,t){let r=Ki,s=!0;for(const i of mo(n,e)){let o=Ki,a=!0;switch(i.op){case"<":case"<=":o=kE(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=Ki}id({value:r,inclusive:s},{value:o,inclusive:a})<0&&(r=o,s=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];id({value:r,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}function ud(n,e,t){let r=Zt,s=!0;for(const i of mo(n,e)){let o=Zt,a=!0;switch(i.op){case">=":case">":o=DE(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=Zt}od({value:r,inclusive:s},{value:o,inclusive:a})>0&&(r=o,s=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];od({value:r,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}/**
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
 */class Qs{constructor(e,t=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function tp(n,e,t,r,s,i,o,a){return new Qs(n,e,t,r,s,i,o,a)}function Js(n){return new Qs(n)}function hd(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function np(n){return n.collectionGroup!==null}function gs(n){const e=K(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ce(ge.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(a=a.add(h.field))})}),a})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new ho(i,r))}),t.has(ge.keyField().canonicalString())||e.ce.push(new ho(ge.keyField(),r))}return e.ce}function st(n){const e=K(n);return e.le||(e.le=BE(e,gs(n))),e.le}function BE(n,e){if(n.limitType==="F")return uc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ho(s.field,i)});const t=n.endAt?new Ir(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ir(n.startAt.position,n.startAt.inclusive):null;return uc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function hc(n,e){const t=n.filters.concat([e]);return new Qs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function dc(n,e,t){return new Qs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Lo(n,e){return Hs(st(n),st(e))&&n.limitType===e.limitType}function rp(n){return`${Bn(st(n))}|lt:${n.limitType}`}function ar(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Xm(s)).join(", ")}]`),Oo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>vr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>vr(s)).join(",")),`Target(${r})`}(st(n))}; limitType=${n.limitType})`}function Ys(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):B.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of gs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const h=ad(o,a,l);return o.inclusive?h<=0:h<0}(r.startAt,gs(r),s)||r.endAt&&!function(o,a,l){const h=ad(o,a,l);return o.inclusive?h>=0:h>0}(r.endAt,gs(r),s))}(n,e)}function sp(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ip(n){return(e,t)=>{let r=!1;for(const s of gs(n)){const i=jE(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function jE(n,e,t){const r=n.field.isKeyField()?B.comparator(e.key,t.key):function(i,o,a){const l=o.data.field(i),h=a.data.field(i);return l!==null&&h!==null?cn(l,h):z()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return z()}}/**
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
 */class gn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Hn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return qm(this.inner)}size(){return this.innerSize}}/**
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
 */const $E=new de(B.comparator);function rt(){return $E}const op=new de(B.comparator);function ls(...n){let e=op;for(const t of n)e=e.insert(t.key,t);return e}function ap(n){let e=op;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function mt(){return _s()}function cp(){return _s()}function _s(){return new gn(n=>n.toString(),(n,e)=>n.isEqual(e))}const qE=new de(B.comparator),zE=new ce(B.comparator);function X(...n){let e=zE;for(const t of n)e=e.add(t);return e}const KE=new ce(Y);function nl(){return KE}/**
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
 */function rl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ks(e)?"-0":e}}function lp(n){return{integerValue:""+n}}function up(n,e){return Fm(e)?lp(e):rl(n,e)}/**
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
 */class Fo{constructor(){this._=void 0}}function GE(n,e,t){return n instanceof Os?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Zc(i)&&(i=el(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(t,e):n instanceof jn?dp(n,e):n instanceof $n?fp(n,e):function(s,i){const o=hp(s,i),a=dd(o)+dd(s.Pe);return ac(o)&&ac(s.Pe)?lp(a):rl(s.serializer,a)}(n,e)}function WE(n,e,t){return n instanceof jn?dp(n,e):n instanceof $n?fp(n,e):t}function hp(n,e){return n instanceof Er?function(r){return ac(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Os extends Fo{}class jn extends Fo{constructor(e){super(),this.elements=e}}function dp(n,e){const t=mp(e);for(const r of n.elements)t.some(s=>yt(s,r))||t.push(r);return{arrayValue:{values:t}}}class $n extends Fo{constructor(e){super(),this.elements=e}}function fp(n,e){let t=mp(e);for(const r of n.elements)t=t.filter(s=>!yt(s,r));return{arrayValue:{values:t}}}class Er extends Fo{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function dd(n){return me(n.integerValue||n.doubleValue)}function mp(n){return xs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Uo{constructor(e,t){this.field=e,this.transform=t}}function HE(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof jn&&s instanceof jn||r instanceof $n&&s instanceof $n?yr(r.elements,s.elements,yt):r instanceof Er&&s instanceof Er?yt(r.Pe,s.Pe):r instanceof Os&&s instanceof Os}(n.transform,e.transform)}class QE{constructor(e,t){this.version=e,this.transformResults=t}}class He{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new He}static exists(e){return new He(void 0,e)}static updateTime(e){return new He(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Bo{}function pp(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new jo(n.key,He.none()):new Mr(n.key,n.data,He.none());{const t=n.data,r=ze.empty();let s=new ce(ge.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ft(n.key,r,new Ze(s.toArray()),He.none())}}function JE(n,e,t){n instanceof Mr?function(s,i,o){const a=s.value.clone(),l=md(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof Ft?function(s,i,o){if(!Wi(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=md(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(gp(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function ys(n,e,t,r){return n instanceof Mr?function(i,o,a,l){if(!Wi(i.precondition,o))return a;const h=i.value.clone(),f=pd(i.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof Ft?function(i,o,a,l){if(!Wi(i.precondition,o))return a;const h=pd(i.fieldTransforms,l,o),f=o.data;return f.setAll(gp(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(i,o,a){return Wi(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function YE(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=hp(r.transform,s||null);i!=null&&(t===null&&(t=ze.empty()),t.set(r.field,i))}return t||null}function fd(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&yr(r,s,(i,o)=>HE(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Mr extends Bo{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ft extends Bo{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function gp(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function md(n,e,t){const r=new Map;G(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,WE(o,a,t[s]))}return r}function pd(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,GE(i,o,e))}return r}class jo extends Bo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _p extends Bo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class sl{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&JE(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ys(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ys(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=cp();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(s.key)?null:a;const l=pp(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),X())}isEqual(e){return this.batchId===e.batchId&&yr(this.mutations,e.mutations,(t,r)=>fd(t,r))&&yr(this.baseMutations,e.baseMutations,(t,r)=>fd(t,r))}}class il{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){G(e.mutations.length===r.length);let s=function(){return qE}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new il(e,t,r,s)}}/**
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
 */class ol{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class XE{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var be,ne;function ZE(n){switch(n){default:return z();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function yp(n){if(n===void 0)return we("GRPC error has no .code"),V.UNKNOWN;switch(n){case be.OK:return V.OK;case be.CANCELLED:return V.CANCELLED;case be.UNKNOWN:return V.UNKNOWN;case be.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case be.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case be.INTERNAL:return V.INTERNAL;case be.UNAVAILABLE:return V.UNAVAILABLE;case be.UNAUTHENTICATED:return V.UNAUTHENTICATED;case be.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case be.NOT_FOUND:return V.NOT_FOUND;case be.ALREADY_EXISTS:return V.ALREADY_EXISTS;case be.PERMISSION_DENIED:return V.PERMISSION_DENIED;case be.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case be.ABORTED:return V.ABORTED;case be.OUT_OF_RANGE:return V.OUT_OF_RANGE;case be.UNIMPLEMENTED:return V.UNIMPLEMENTED;case be.DATA_LOSS:return V.DATA_LOSS;default:return z()}}(ne=be||(be={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function eT(){return new TextEncoder}/**
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
 */const tT=new Dn([4294967295,4294967295],0);function gd(n){const e=eT().encode(n),t=new Am;return t.update(e),new Uint8Array(t.digest())}function _d(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Dn([t,r],0),new Dn([s,i],0)]}class al{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new us(`Invalid padding: ${t}`);if(r<0)throw new us(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new us(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new us(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Dn.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(Dn.fromNumber(r)));return s.compare(tT)===1&&(s=new Dn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=gd(e),[r,s]=_d(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new al(i,s,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const t=gd(e),[r,s]=_d(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class us extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Xs{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Zs.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Xs(W.min(),s,new de(Y),rt(),X())}}class Zs{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Zs(r,t,X(),X(),X())}}/**
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
 */class Hi{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class vp{constructor(e,t){this.targetId=e,this.me=t}}class Ip{constructor(e,t,r=Te.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class yd{constructor(){this.fe=0,this.ge=Id(),this.pe=Te.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=X(),t=X(),r=X();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:z()}}),new Zs(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Id()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,G(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class nT{constructor(e){this.Le=e,this.Be=new Map,this.ke=rt(),this.qe=vd(),this.Qe=new de(Y)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:z()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(fo(i))if(r===0){const o=new B(i.path);this.Ue(t,o,ve.newNoDocument(o,W.min()))}else G(r===1);else{const o=this.Ye(t);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,a;try{o=an(r).toUint8Array()}catch(l){if(l instanceof zm)return Rs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new al(o,s,i)}catch(l){return Rs(l instanceof us?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,o)=>{const a=this.Je(o);if(a){if(i.current&&fo(a.target)){const l=new B(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,ve.newNoDocument(l,e))}i.be&&(t.set(o,i.ve()),i.Ce())}});let r=X();this.qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Xs(e,t,this.Qe,this.ke,r);return this.ke=rt(),this.qe=vd(),this.Qe=new de(Y),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new yd,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ce(Y),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||x("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new yd),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function vd(){return new de(B.comparator)}function Id(){return new de(B.comparator)}const rT={asc:"ASCENDING",desc:"DESCENDING"},sT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},iT={and:"AND",or:"OR"};class oT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function fc(n,e){return n.useProto3Json||Oo(e)?e:{value:e}}function Tr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wp(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function aT(n,e){return Tr(n,e.toTimestamp())}function Je(n){return G(!!n),W.fromTimestamp(function(t){const r=Vt(t);return new _e(r.seconds,r.nanos)}(n))}function cl(n,e){return mc(n,e).canonicalString()}function mc(n,e){const t=function(s){return new ie(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Ep(n){const e=ie.fromString(n);return G(Dp(e)),e}function po(n,e){return cl(n.databaseId,e.path)}function Vn(n,e){const t=Ep(e);if(t.get(1)!==n.databaseId.projectId)throw new L(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new L(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new B(Ap(t))}function Tp(n,e){return cl(n.databaseId,e)}function bp(n){const e=Ep(n);return e.length===4?ie.emptyPath():Ap(e)}function pc(n){return new ie(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ap(n){return G(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function wd(n,e,t){return{name:po(n,e),fields:t.value.mapValue.fields}}function cT(n,e,t){const r=Vn(n,e.name),s=Je(e.updateTime),i=e.createTime?Je(e.createTime):W.min(),o=new ze({mapValue:{fields:e.fields}}),a=ve.newFoundDocument(r,s,i,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function lT(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:z()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(G(f===void 0||typeof f=="string"),Te.fromBase64String(f||"")):(G(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Te.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(h){const f=h.code===void 0?V.UNKNOWN:yp(h.code);return new L(f,h.message||"")}(o);t=new Ip(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Vn(n,r.document.name),i=Je(r.document.updateTime),o=r.document.createTime?Je(r.document.createTime):W.min(),a=new ze({mapValue:{fields:r.document.fields}}),l=ve.newFoundDocument(s,i,o,a),h=r.targetIds||[],f=r.removedTargetIds||[];t=new Hi(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Vn(n,r.document),i=r.readTime?Je(r.readTime):W.min(),o=ve.newNoDocument(s,i),a=r.removedTargetIds||[];t=new Hi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Vn(n,r.document),i=r.removedTargetIds||[];t=new Hi([],i,s,null)}else{if(!("filter"in e))return z();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new XE(s,i),a=r.targetId;t=new vp(a,o)}}return t}function go(n,e){let t;if(e instanceof Mr)t={update:wd(n,e.key,e.value)};else if(e instanceof jo)t={delete:po(n,e.key)};else if(e instanceof Ft)t={update:wd(n,e.key,e.data),updateMask:pT(e.fieldMask)};else{if(!(e instanceof _p))return z();t={verify:po(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Os)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof jn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof $n)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Er)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw z()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:aT(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:z()}(n,e.precondition)),t}function gc(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?He.updateTime(Je(i.updateTime)):i.exists!==void 0?He.exists(i.exists):He.none()}(e.currentDocument):He.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(o,a){let l=null;if("setToServerValue"in a)G(a.setToServerValue==="REQUEST_TIME"),l=new Os;else if("appendMissingElements"in a){const f=a.appendMissingElements.values||[];l=new jn(f)}else if("removeAllFromArray"in a){const f=a.removeAllFromArray.values||[];l=new $n(f)}else"increment"in a?l=new Er(o,a.increment):z();const h=ge.fromServerFormat(a.fieldPath);return new Uo(h,l)}(n,s)):[];if(e.update){e.update.name;const s=Vn(n,e.update.name),i=new ze({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const h=l.fieldPaths||[];return new Ze(h.map(f=>ge.fromServerFormat(f)))}(e.updateMask);return new Ft(s,i,o,t,r)}return new Mr(s,i,t,r)}if(e.delete){const s=Vn(n,e.delete);return new jo(s,t)}if(e.verify){const s=Vn(n,e.verify);return new _p(s,t)}return z()}function uT(n,e){return n&&n.length>0?(G(e!==void 0),n.map(t=>function(s,i){let o=s.updateTime?Je(s.updateTime):Je(i);return o.isEqual(W.min())&&(o=Je(i)),new QE(o,s.transformResults||[])}(t,e))):[]}function Sp(n,e){return{documents:[Tp(n,e.path)]}}function Rp(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Tp(n,s);const i=function(h){if(h.length!==0)return kp(ae.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(_){return{field:cr(_.field),direction:dT(_.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=fc(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:s}}function Pp(n){let e=bp(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){G(r===1);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(m){const _=Cp(m);return _ instanceof ae&&tl(_)?_.getFilters():[_]}(t.where));let o=[];t.orderBy&&(o=function(m){return m.map(_=>function(b){return new ho(lr(b.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(_))}(t.orderBy));let a=null;t.limit&&(a=function(m){let _;return _=typeof m=="object"?m.value:m,Oo(_)?null:_}(t.limit));let l=null;t.startAt&&(l=function(m){const _=!!m.before,y=m.values||[];return new Ir(y,_)}(t.startAt));let h=null;return t.endAt&&(h=function(m){const _=!m.before,y=m.values||[];return new Ir(y,_)}(t.endAt)),tp(e,s,o,i,a,"F",l,h)}function hT(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Cp(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=lr(t.unaryFilter.field);return te.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=lr(t.unaryFilter.field);return te.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=lr(t.unaryFilter.field);return te.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=lr(t.unaryFilter.field);return te.create(o,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(n):n.fieldFilter!==void 0?function(t){return te.create(lr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ae.create(t.compositeFilter.filters.map(r=>Cp(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return z()}}(t.compositeFilter.op))}(n):z()}function dT(n){return rT[n]}function fT(n){return sT[n]}function mT(n){return iT[n]}function cr(n){return{fieldPath:n.canonicalString()}}function lr(n){return ge.fromServerFormat(n.fieldPath)}function kp(n){return n instanceof te?function(t){if(t.op==="=="){if(sd(t.value))return{unaryFilter:{field:cr(t.field),op:"IS_NAN"}};if(rd(t.value))return{unaryFilter:{field:cr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(sd(t.value))return{unaryFilter:{field:cr(t.field),op:"IS_NOT_NAN"}};if(rd(t.value))return{unaryFilter:{field:cr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:cr(t.field),op:fT(t.op),value:t.value}}}(n):n instanceof ae?function(t){const r=t.getFilters().map(s=>kp(s));return r.length===1?r[0]:{compositeFilter:{op:mT(t.op),filters:r}}}(n):z()}function pT(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Dp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Vp{constructor(e){this.ct=e}}function gT(n,e){let t;if(e.document)t=cT(n.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=B.fromSegments(e.noDocument.path),s=zn(e.noDocument.readTime);t=ve.newNoDocument(r,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return z();{const r=B.fromSegments(e.unknownDocument.path),s=zn(e.unknownDocument.version);t=ve.newUnknownDocument(r,s)}}return e.readTime&&t.setReadTime(function(s){const i=new _e(s[0],s[1]);return W.fromTimestamp(i)}(e.readTime)),t}function Ed(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:_o(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,o){return{name:po(i,o.key),fields:o.data.value.mapValue.fields,updateTime:Tr(i,o.version.toTimestamp()),createTime:Tr(i,o.createTime.toTimestamp())}}(n.ct,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:qn(e.version)};else{if(!e.isUnknownDocument())return z();r.unknownDocument={path:t.path.toArray(),version:qn(e.version)}}return r}function _o(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function qn(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function zn(n){const e=new _e(n.seconds,n.nanoseconds);return W.fromTimestamp(e)}function Rn(n,e){const t=(e.baseMutations||[]).map(i=>gc(n.ct,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>gc(n.ct,i)),s=_e.fromMillis(e.localWriteTimeMs);return new sl(e.batchId,s,t,r)}function hs(n){const e=zn(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?zn(n.lastLimboFreeSnapshotVersion):W.min();let r;return r=function(i){return i.documents!==void 0}(n.query)?function(i){return G(i.documents.length===1),st(Js(bp(i.documents[0])))}(n.query):function(i){return st(Pp(i))}(n.query),new Rt(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Te.fromBase64String(n.resumeToken))}function Np(n,e){const t=qn(e.snapshotVersion),r=qn(e.lastLimboFreeSnapshotVersion);let s;s=fo(e.target)?Sp(n.ct,e.target):Rp(n.ct,e.target)._t;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Bn(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function xp(n){const e=Pp({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?dc(e,e.limit,"L"):e}function Na(n,e){return new ol(e.largestBatchId,gc(n.ct,e.overlayMutation))}function Td(n,e){const t=e.path.lastSegment();return[n,Qe(e.path.popLast()),t]}function bd(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:qn(r.readTime),documentKey:Qe(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class _T{getBundleMetadata(e,t){return Ad(e).get(t).next(r=>{if(r)return function(i){return{id:i.bundleId,createTime:zn(i.createTime),version:i.version}}(r)})}saveBundleMetadata(e,t){return Ad(e).put(function(s){return{bundleId:s.id,createTime:qn(Je(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return Sd(e).get(t).next(r=>{if(r)return function(i){return{name:i.name,query:xp(i.bundledQuery),readTime:zn(i.readTime)}}(r)})}saveNamedQuery(e,t){return Sd(e).put(function(s){return{name:s.name,readTime:qn(Je(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function Ad(n){return ke(n,"bundles")}function Sd(n){return ke(n,"namedQueries")}/**
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
 */class $o{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const r=t.uid||"";return new $o(e,r)}getOverlay(e,t){return es(e).get(Td(this.userId,t)).next(r=>r?Na(this.serializer,r):null)}getOverlays(e,t){const r=mt();return C.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){const s=[];return r.forEach((i,o)=>{const a=new ol(t,o);s.push(this.ht(e,a))}),C.waitFor(s)}removeOverlaysForBatchId(e,t,r){const s=new Set;t.forEach(o=>s.add(Qe(o.getCollectionPath())));const i=[];return s.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(es(e).j("collectionPathOverlayIndex",a))}),C.waitFor(i)}getOverlaysForCollection(e,t,r){const s=mt(),i=Qe(t),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return es(e).U("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const h=Na(this.serializer,l);s.set(h.getKey(),h)}return s})}getOverlaysForCollectionGroup(e,t,r,s){const i=mt();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return es(e).J({index:"collectionGroupOverlayIndex",range:a},(l,h,f)=>{const m=Na(this.serializer,h);i.size()<s||m.largestBatchId===o?(i.set(m.getKey(),m),o=m.largestBatchId):f.done()}).next(()=>i)}ht(e,t){return es(e).put(function(s,i,o){const[a,l,h]=Td(i,o.mutation.key);return{userId:i,collectionPath:l,documentId:h,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:go(s.ct,o.mutation)}}(this.serializer,this.userId,t))}}function es(n){return ke(n,"documentOverlays")}/**
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
 */class yT{Pt(e){return ke(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?Te.fromUint8Array(r):Te.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class Pn{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(me(e.integerValue));else if("doubleValue"in e){const r=me(e.doubleValue);isNaN(r)?this.dt(t,13):(this.dt(t,15),ks(r)?t.At(0):t.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(t,20),typeof r=="string"&&(r=Vt(r)),t.Rt(`${r.seconds||""}`),t.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(an(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(t,45),t.At(r.latitude||0),t.At(r.longitude||0)}else"mapValue"in e?Km(e)?this.dt(t,Number.MAX_SAFE_INTEGER):Mo(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):z()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const r=e.fields||{};this.dt(t,55);for(const s of Object.keys(r))this.Vt(s,t),this.Tt(r[s],t)}wt(e,t){var r,s;const i=e.fields||{};this.dt(t,53);const o="value",a=((s=(r=i[o].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.length)||0;this.dt(t,15),t.At(me(a)),this.Vt(o,t),this.Tt(i[o],t)}bt(e,t){const r=e.values||[];this.dt(t,50);for(const s of r)this.Tt(s,t)}yt(e,t){this.dt(t,37),B.fromName(e).path.forEach(r=>{this.dt(t,60),this.Dt(r,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}Pn.vt=new Pn;function vT(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Rd(n){const e=64-function(r){let s=0;for(let i=0;i<8;++i){const o=vT(255&r[i]);if(s+=o,o!==8)break}return s}(n);return Math.ceil(e/8)}class IT{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ft(r.value),r=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ot(r.value),r=t.next();this.Nt()}Lt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const s=t.codePointAt(0);this.Ft(240|s>>>18),this.Ft(128|63&s>>>12),this.Ft(128|63&s>>>6),this.Ft(128|63&s)}}this.Mt()}Bt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const s=t.codePointAt(0);this.Ot(240|s>>>18),this.Ot(128|63&s>>>12),this.Ot(128|63&s>>>6),this.Ot(128|63&s)}}this.Nt()}kt(e){const t=this.qt(e),r=Rd(t);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=255&t[s]}Kt(e){const t=this.qt(e),r=Rd(t);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let s=1;s<t.length;++s)t[s]^=r?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class wT{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class ET{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class ts{constructor(){this.jt=new IT,this.Ht=new wT(this.jt),this.Jt=new ET(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class Cn{constructor(e,t,r,s){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=s}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Cn(this.indexId,this.documentKey,this.arrayValue,r)}}function Gt(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Pd(n.arrayValue,e.arrayValue),t!==0?t:(t=Pd(n.directionalValue,e.directionalValue),t!==0?t:B.comparator(n.documentKey,e.documentKey)))}function Pd(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
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
 */class Cd{constructor(e){this.Xt=new ce((t,r)=>ge.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(G(e.collectionGroup===this.collectionId),this.nn)return!1;const t=sc(e);if(t!==void 0&&!this.sn(t))return!1;const r=bn(e);let s=new Set,i=0,o=0;for(;i<r.length&&this.sn(r[i]);++i)s=s.add(r[i].fieldPath.canonicalString());if(i===r.length)return!0;if(this.Xt.size>0){const a=this.Xt.getIterator().getNext();if(!s.has(a.field.canonicalString())){const l=r[i];if(!this.on(a,l)||!this._n(this.en[o++],l))return!1}++i}for(;i<r.length;++i){const a=r[i];if(o>=this.en.length||!this._n(this.en[o++],a))return!1}return!0}an(){if(this.nn)return null;let e=new ce(ge.comparator);const t=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new qi(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new qi(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new qi(r.field,r.dir==="asc"?0:1)));return new uo(uo.UNKNOWN_ID,this.collectionId,t,Cs.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function Op(n){var e,t;if(G(n instanceof te||n instanceof ae),n instanceof te){if(n instanceof ep){const s=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>te.create(n.field,"==",i)))||[];return ae.create(s,"or")}return n}const r=n.filters.map(s=>Op(s));return ae.create(r,n.op)}function TT(n){if(n.getFilters().length===0)return[];const e=vc(Op(n));return G(Mp(e)),_c(e)||yc(e)?[e]:e.getFilters()}function _c(n){return n instanceof te}function yc(n){return n instanceof ae&&tl(n)}function Mp(n){return _c(n)||yc(n)||function(t){if(t instanceof ae&&cc(t)){for(const r of t.getFilters())if(!_c(r)&&!yc(r))return!1;return!0}return!1}(n)}function vc(n){if(G(n instanceof te||n instanceof ae),n instanceof te)return n;if(n.filters.length===1)return vc(n.filters[0]);const e=n.filters.map(r=>vc(r));let t=ae.create(e,n.op);return t=yo(t),Mp(t)?t:(G(t instanceof ae),G(wr(t)),G(t.filters.length>1),t.filters.reduce((r,s)=>ll(r,s)))}function ll(n,e){let t;return G(n instanceof te||n instanceof ae),G(e instanceof te||e instanceof ae),t=n instanceof te?e instanceof te?function(s,i){return ae.create([s,i],"and")}(n,e):kd(n,e):e instanceof te?kd(e,n):function(s,i){if(G(s.filters.length>0&&i.filters.length>0),wr(s)&&wr(i))return Ym(s,i.getFilters());const o=cc(s)?s:i,a=cc(s)?i:s,l=o.filters.map(h=>ll(h,a));return ae.create(l,"or")}(n,e),yo(t)}function kd(n,e){if(wr(e))return Ym(e,n.getFilters());{const t=e.filters.map(r=>ll(n,r));return ae.create(t,"or")}}function yo(n){if(G(n instanceof te||n instanceof ae),n instanceof te)return n;const e=n.getFilters();if(e.length===1)return yo(e[0]);if(Qm(n))return n;const t=e.map(s=>yo(s)),r=[];return t.forEach(s=>{s instanceof te?r.push(s):s instanceof ae&&(s.op===n.op?r.push(...s.filters):r.push(s))}),r.length===1?r[0]:ae.create(r,n.op)}/**
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
 */class bT{constructor(){this.un=new ul}addToCollectionParentIndex(e,t){return this.un.add(t),C.resolve()}getCollectionParents(e,t){return C.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return C.resolve()}deleteFieldIndex(e,t){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,t){return C.resolve()}getDocumentsMatchingTarget(e,t){return C.resolve(null)}getIndexType(e,t){return C.resolve(0)}getFieldIndexes(e,t){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,t){return C.resolve(it.min())}getMinOffsetFromCollectionGroup(e,t){return C.resolve(it.min())}updateCollectionGroup(e,t,r){return C.resolve()}updateIndexEntries(e,t){return C.resolve()}}class ul{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ce(ie.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ce(ie.comparator)).toArray()}}/**
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
 */const Ri=new Uint8Array(0);class AT{constructor(e,t){this.databaseId=t,this.cn=new ul,this.ln=new gn(r=>Bn(r),(r,s)=>Hs(r,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const r=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const i={collectionId:r,parent:Qe(s)};return Dd(e).put(i)}return C.resolve()}getCollectionParents(e,t){const r=[],s=IDBKeyRange.bound([t,""],[Vm(t),""],!1,!0);return Dd(e).U(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;r.push(ft(o.parent))}return r})}addFieldIndex(e,t){const r=ns(e),s=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(t);delete s.indexId;const i=r.add(s);if(t.indexState){const o=sr(e);return i.next(a=>{o.put(bd(a,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const r=ns(e),s=sr(e),i=rr(e);return r.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=ns(e),r=rr(e),s=sr(e);return t.j().next(()=>r.j()).next(()=>s.j())}createTargetIndexes(e,t){return C.forEach(this.hn(t),r=>this.getIndexType(e,r).next(s=>{if(s===0||s===1){const i=new Cd(r).an();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const r=rr(e);let s=!0;const i=new Map;return C.forEach(this.hn(t),o=>this.Pn(e,o).next(a=>{s&&(s=!!a),i.set(o,a)})).next(()=>{if(s){let o=X();const a=[];return C.forEach(i,(l,h)=>{x("IndexedDbIndexManager",`Using index ${function(U){return`id=${U.indexId}|cg=${U.collectionGroup}|f=${U.fields.map(M=>`${M.fieldPath}:${M.kind}`).join(",")}`}(l)} to execute ${Bn(t)}`);const f=function(U,M){const q=sc(M);if(q===void 0)return null;for(const $ of mo(U,q.fieldPath))switch($.op){case"array-contains-any":return $.value.arrayValue.values||[];case"array-contains":return[$.value]}return null}(h,l),m=function(U,M){const q=new Map;for(const $ of bn(M))for(const T of mo(U,$.fieldPath))switch(T.op){case"==":case"in":q.set($.fieldPath.canonicalString(),T.value);break;case"not-in":case"!=":return q.set($.fieldPath.canonicalString(),T.value),Array.from(q.values())}return null}(h,l),_=function(U,M){const q=[];let $=!0;for(const T of bn(M)){const v=T.kind===0?ld(U,T.fieldPath,U.startAt):ud(U,T.fieldPath,U.startAt);q.push(v.value),$&&($=v.inclusive)}return new Ir(q,$)}(h,l),y=function(U,M){const q=[];let $=!0;for(const T of bn(M)){const v=T.kind===0?ud(U,T.fieldPath,U.endAt):ld(U,T.fieldPath,U.endAt);q.push(v.value),$&&($=v.inclusive)}return new Ir(q,$)}(h,l),b=this.In(l,h,_),R=this.In(l,h,y),k=this.Tn(l,h,m),N=this.En(l.indexId,f,b,_.inclusive,R,y.inclusive,k);return C.forEach(N,O=>r.G(O,t.limit).next(U=>{U.forEach(M=>{const q=B.fromSegments(M.documentKey);o.has(q)||(o=o.add(q),a.push(q))})}))}).next(()=>a)}return C.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=TT(ae.create(e.filters,"and")).map(r=>uc(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,r,s,i,o,a){const l=(t!=null?t.length:1)*Math.max(r.length,i.length),h=l/(t!=null?t.length:1),f=[];for(let m=0;m<l;++m){const _=t?this.dn(t[m/h]):Ri,y=this.An(e,_,r[m%h],s),b=this.Rn(e,_,i[m%h],o),R=a.map(k=>this.An(e,_,k,!0));f.push(...this.createRange(y,b,R))}return f}An(e,t,r,s){const i=new Cn(e,B.empty(),t,r);return s?i:i.Zt()}Rn(e,t,r,s){const i=new Cn(e,B.empty(),t,r);return s?i.Zt():i}Pn(e,t){const r=new Cd(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const a of i)r.rn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const s=this.hn(t);return C.forEach(s,i=>this.Pn(e,i).next(o=>{o?r!==0&&o.fields.length<function(l){let h=new ce(ge.comparator),f=!1;for(const m of l.filters)for(const _ of m.getFlattenedFilters())_.field.isKeyField()||(_.op==="array-contains"||_.op==="array-contains-any"?f=!0:h=h.add(_.field));for(const m of l.orderBy)m.field.isKeyField()||(h=h.add(m.field));return h.size+(f?1:0)}(i)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&s.length>1&&r===2?1:r)}Vn(e,t){const r=new ts;for(const s of bn(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=r.Yt(s.kind);Pn.vt.It(i,o)}return r.zt()}dn(e){const t=new ts;return Pn.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const r=new ts;return Pn.vt.It(Ns(this.databaseId,t),r.Yt(function(i){const o=bn(i);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,t,r){if(r===null)return[];let s=[];s.push(new ts);let i=0;for(const o of bn(e)){const a=r[i++];for(const l of s)if(this.fn(t,o.fieldPath)&&xs(a))s=this.gn(s,o,a);else{const h=l.Yt(o.kind);Pn.vt.It(a,h)}}return this.pn(s)}In(e,t,r){return this.Tn(e,t,r.position)}pn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].zt();return t}gn(e,t,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const a of s){const l=new ts;l.seed(a.zt()),Pn.vt.It(o,l.Yt(t.kind)),i.push(l)}return i}fn(e,t){return!!e.filters.find(r=>r instanceof te&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=ns(e),s=sr(e);return(t?r.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.U()).next(i=>{const o=[];return C.forEach(i,a=>s.get([a.indexId,this.uid]).next(l=>{o.push(function(f,m){const _=m?new Cs(m.sequenceNumber,new it(zn(m.readTime),new B(ft(m.documentKey)),m.largestBatchId)):Cs.empty(),y=f.fields.map(([b,R])=>new qi(ge.fromServerFormat(b),R));return new uo(f.indexId,f.collectionGroup,y,_)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:Y(r.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const s=ns(e),i=sr(e);return this.yn(e).next(o=>s.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>C.forEach(a,l=>i.put(bd(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){const r=new Map;return C.forEach(t,(s,i)=>{const o=r.get(s.collectionGroup);return(o?C.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(a=>(r.set(s.collectionGroup,a),C.forEach(a,l=>this.wn(e,s,l).next(h=>{const f=this.Sn(i,l);return h.isEqual(f)?C.resolve():this.bn(e,i,l,h,f)}))))})}Dn(e,t,r,s){return rr(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.mn(r,t.key),documentKey:t.key.path.toArray()})}vn(e,t,r,s){return rr(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.mn(r,t.key),t.key.path.toArray()])}wn(e,t,r){const s=rr(e);let i=new ce(Gt);return s.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,t)])},(o,a)=>{i=i.add(new Cn(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>i)}Sn(e,t){let r=new ce(Gt);const s=this.Vn(t,e);if(s==null)return r;const i=sc(t);if(i!=null){const o=e.data.field(i.fieldPath);if(xs(o))for(const a of o.arrayValue.values||[])r=r.add(new Cn(t.indexId,e.key,this.dn(a),s))}else r=r.add(new Cn(t.indexId,e.key,Ri,s));return r}bn(e,t,r,s,i){x("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(l,h,f,m,_){const y=l.getIterator(),b=h.getIterator();let R=nr(y),k=nr(b);for(;R||k;){let N=!1,O=!1;if(R&&k){const U=f(R,k);U<0?O=!0:U>0&&(N=!0)}else R!=null?O=!0:N=!0;N?(m(k),k=nr(b)):O?(_(R),R=nr(y)):(R=nr(y),k=nr(b))}}(s,i,Gt,a=>{o.push(this.Dn(e,t,r,a))},a=>{o.push(this.vn(e,t,r,a))}),C.waitFor(o)}yn(e){let t=1;return sr(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>Gt(o,a)).filter((o,a,l)=>!a||Gt(o,l[a-1])!==0);const s=[];s.push(e);for(const o of r){const a=Gt(o,e),l=Gt(o,t);if(a===0)s[0]=e.Zt();else if(a>0&&l<0)s.push(o),s.push(o.Zt());else if(l>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Cn(s[o],s[o+1]))return[];const a=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,Ri,[]],l=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,Ri,[]];i.push(IDBKeyRange.bound(a,l))}return i}Cn(e,t){return Gt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Vd)}getMinOffset(e,t){return C.mapArray(this.hn(t),r=>this.Pn(e,r).next(s=>s||z())).next(Vd)}}function Dd(n){return ke(n,"collectionParents")}function rr(n){return ke(n,"indexEntries")}function ns(n){return ke(n,"indexConfiguration")}function sr(n){return ke(n,"indexState")}function Vd(n){G(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const s=n[r].indexState.offset;Jc(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new it(e.readTime,e.documentKey,t)}/**
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
 */const Nd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ye{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Ye(e,Ye.DEFAULT_COLLECTION_PERCENTILE,Ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function Lp(n,e,t){const r=n.store("mutations"),s=n.store("documentMutations"),i=[],o=IDBKeyRange.only(t.batchId);let a=0;const l=r.J({range:o},(f,m,_)=>(a++,_.delete()));i.push(l.next(()=>{G(a===1)}));const h=[];for(const f of t.mutations){const m=Um(e,f.key.path,t.batchId);i.push(s.delete(m)),h.push(f.key)}return C.waitFor(i).next(()=>h)}function vo(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw z();e=n.noDocument}return JSON.stringify(e).length}/**
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
 */Ye.DEFAULT_COLLECTION_PERCENTILE=10,Ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ye.DEFAULT=new Ye(41943040,Ye.DEFAULT_COLLECTION_PERCENTILE,Ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ye.DISABLED=new Ye(-1,0,0);class qo{constructor(e,t,r,s){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=s,this.Fn={}}static lt(e,t,r,s){G(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new qo(i,t,r,s)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Wt(e).J({index:"userMutationsIndex",range:r},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,s){const i=ur(e),o=Wt(e);return o.add({}).next(a=>{G(typeof a=="number");const l=new sl(a,t,r,s),h=function(y,b,R){const k=R.baseMutations.map(O=>go(y.ct,O)),N=R.mutations.map(O=>go(y.ct,O));return{userId:b,batchId:R.batchId,localWriteTimeMs:R.localWriteTime.toMillis(),baseMutations:k,mutations:N}}(this.serializer,this.userId,l),f=[];let m=new ce((_,y)=>Y(_.canonicalString(),y.canonicalString()));for(const _ of s){const y=Um(this.userId,_.key.path,a);m=m.add(_.key.path.popLast()),f.push(o.put(h)),f.push(i.put(y,uE))}return m.forEach(_=>{f.push(this.indexManager.addToCollectionParentIndex(e,_))}),e.addOnCommittedListener(()=>{this.Fn[a]=l.keys()}),C.waitFor(f).next(()=>l)})}lookupMutationBatch(e,t){return Wt(e).get(t).next(r=>r?(G(r.userId===this.userId),Rn(this.serializer,r)):null)}Mn(e,t){return this.Fn[t]?C.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const s=r.keys();return this.Fn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return Wt(e).J({index:"userMutationsIndex",range:s},(o,a,l)=>{a.userId===this.userId&&(G(a.batchId>=r),i=Rn(this.serializer,a)),l.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Wt(e).J({index:"userMutationsIndex",range:t,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Wt(e).U("userMutationsIndex",t).next(r=>r.map(s=>Rn(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=zi(this.userId,t.path),s=IDBKeyRange.lowerBound(r),i=[];return ur(e).J({range:s},(o,a,l)=>{const[h,f,m]=o,_=ft(f);if(h===this.userId&&t.path.isEqual(_))return Wt(e).get(m).next(y=>{if(!y)throw z();G(y.userId===this.userId),i.push(Rn(this.serializer,y))});l.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ce(Y);const s=[];return t.forEach(i=>{const o=zi(this.userId,i.path),a=IDBKeyRange.lowerBound(o),l=ur(e).J({range:a},(h,f,m)=>{const[_,y,b]=h,R=ft(y);_===this.userId&&i.path.isEqual(R)?r=r.add(b):m.done()});s.push(l)}),C.waitFor(s).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1,i=zi(this.userId,r),o=IDBKeyRange.lowerBound(i);let a=new ce(Y);return ur(e).J({range:o},(l,h,f)=>{const[m,_,y]=l,b=ft(_);m===this.userId&&r.isPrefixOf(b)?b.length===s&&(a=a.add(y)):f.done()}).next(()=>this.xn(e,a))}xn(e,t){const r=[],s=[];return t.forEach(i=>{s.push(Wt(e).get(i).next(o=>{if(o===null)throw z();G(o.userId===this.userId),r.push(Rn(this.serializer,o))}))}),C.waitFor(s).next(()=>r)}removeMutationBatch(e,t){return Lp(e._e,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),C.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return C.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return ur(e).J({range:r},(i,o,a)=>{if(i[0]===this.userId){const l=ft(i[1]);s.push(l)}else a.done()}).next(()=>{G(s.length===0)})})}containsKey(e,t){return Fp(e,this.userId,t)}Nn(e){return Up(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Fp(n,e,t){const r=zi(e,t.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return ur(n).J({range:i,H:!0},(a,l,h)=>{const[f,m,_]=a;f===e&&m===s&&(o=!0),h.done()}).next(()=>o)}function Wt(n){return ke(n,"mutations")}function ur(n){return ke(n,"documentMutations")}function Up(n){return ke(n,"mutationQueues")}/**
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
 */class Kn{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Kn(0)}static kn(){return new Kn(-1)}}/**
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
 */class ST{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const r=new Kn(t.highestTargetId);return t.highestTargetId=r.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>W.fromTimestamp(new _e(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.qn(e).next(s=>(s.highestListenSequenceNumber=t,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.Qn(e,s)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(t,r),this.Qn(e,r))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>ir(e).delete(t.targetId)).next(()=>this.qn(e)).next(r=>(G(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,t,r){let s=0;const i=[];return ir(e).J((o,a)=>{const l=hs(a);l.sequenceNumber<=t&&r.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(e,l)))}).next(()=>C.waitFor(i)).next(()=>s)}forEachTarget(e,t){return ir(e).J((r,s)=>{const i=hs(s);t(i)})}qn(e){return xd(e).get("targetGlobalKey").next(t=>(G(t!==null),t))}Qn(e,t){return xd(e).put("targetGlobalKey",t)}Kn(e,t){return ir(e).put(Np(this.serializer,t))}$n(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Bn(t),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return ir(e).J({range:s,index:"queryTargetsIndex"},(o,a,l)=>{const h=hs(a);Hs(t,h.target)&&(i=h,l.done())}).next(()=>i)}addMatchingKeys(e,t,r){const s=[],i=Yt(e);return t.forEach(o=>{const a=Qe(o.path);s.push(i.put({targetId:r,path:a})),s.push(this.referenceDelegate.addReference(e,r,o))}),C.waitFor(s)}removeMatchingKeys(e,t,r){const s=Yt(e);return C.forEach(t,i=>{const o=Qe(i.path);return C.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,t){const r=Yt(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),s=Yt(e);let i=X();return s.J({range:r,H:!0},(o,a,l)=>{const h=ft(o[1]),f=new B(h);i=i.add(f)}).next(()=>i)}containsKey(e,t){const r=Qe(t.path),s=IDBKeyRange.bound([r],[Vm(r)],!1,!0);let i=0;return Yt(e).J({index:"documentTargetsIndex",H:!0,range:s},([o,a],l,h)=>{o!==0&&(i++,h.done())}).next(()=>i>0)}ot(e,t){return ir(e).get(t).next(r=>r?hs(r):null)}}function ir(n){return ke(n,"targets")}function xd(n){return ke(n,"targetGlobal")}function Yt(n){return ke(n,"targetDocuments")}/**
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
 */function Od([n,e],[t,r]){const s=Y(n,t);return s===0?Y(e,r):s}class RT{constructor(e){this.Un=e,this.buffer=new ce(Od),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Od(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class PT{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){x("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){pn(t)?x("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await mn(t)}await this.Hn(3e5)})}}class CT{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return C.resolve(Xe.oe);const r=new RT(t);return this.Jn.forEachTarget(e,s=>r.zn(s.sequenceNumber)).next(()=>this.Jn.Zn(e,s=>r.zn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(x("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(Nd)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(x("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Nd):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let r,s,i,o,a,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(x("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,a=Date.now(),this.removeTargets(e,r,t))).next(m=>(i=m,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),or()<=ee.DEBUG&&x("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(l-a)+`ms
	Removed ${m} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function kT(n,e){return new CT(n,e)}/**
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
 */class DT{constructor(e,t){this.db=e,this.garbageCollector=kT(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}er(e){let t=0;return this.Zn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(r,s)=>t(s))}addReference(e,t,r){return Pi(e,r)}removeReference(e,t,r){return Pi(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Pi(e,t)}nr(e,t){return function(s,i){let o=!1;return Up(s).Y(a=>Fp(s,a,i).next(l=>(l&&(o=!0),C.resolve(!l)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.tr(e,(o,a)=>{if(a<=t){const l=this.nr(e,o).next(h=>{if(!h)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,W.min()),Yt(e).delete(function(m){return[0,Qe(m.path)]}(o))))});s.push(l)}}).next(()=>C.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Pi(e,t)}tr(e,t){const r=Yt(e);let s,i=Xe.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:h})=>{o===0?(i!==Xe.oe&&t(new B(ft(s)),i),i=h,s=l):i=Xe.oe}).next(()=>{i!==Xe.oe&&t(new B(ft(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Pi(n,e){return Yt(n).put(function(r,s){return{targetId:0,path:Qe(r.path),sequenceNumber:s}}(e,n.currentSequenceNumber))}/**
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
 */class Bp{constructor(){this.changes=new gn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ve.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?C.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class VT{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return En(e).put(r)}removeEntry(e,t,r){return En(e).delete(function(i,o){const a=i.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],_o(o),a[a.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.rr(e,r)))}getEntry(e,t){let r=ve.newInvalidDocument(t);return En(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(rs(t))},(s,i)=>{r=this.ir(t,i)}).next(()=>r)}sr(e,t){let r={size:0,document:ve.newInvalidDocument(t)};return En(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(rs(t))},(s,i)=>{r={document:this.ir(t,i),size:vo(i)}}).next(()=>r)}getEntries(e,t){let r=rt();return this._r(e,t,(s,i)=>{const o=this.ir(s,i);r=r.insert(s,o)}).next(()=>r)}ar(e,t){let r=rt(),s=new de(B.comparator);return this._r(e,t,(i,o)=>{const a=this.ir(i,o);r=r.insert(i,a),s=s.insert(i,vo(o))}).next(()=>({documents:r,ur:s}))}_r(e,t,r){if(t.isEmpty())return C.resolve();let s=new ce(Fd);t.forEach(l=>s=s.add(l));const i=IDBKeyRange.bound(rs(s.first()),rs(s.last())),o=s.getIterator();let a=o.getNext();return En(e).J({index:"documentKeyIndex",range:i},(l,h,f)=>{const m=B.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;a&&Fd(a,m)<0;)r(a,null),a=o.getNext();a&&a.isEqual(m)&&(r(a,h),a=o.hasNext()?o.getNext():null),a?f.$(rs(a)):f.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,s,i){const o=t.path,a=[o.popLast().toArray(),o.lastSegment(),_o(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return En(e).U(IDBKeyRange.bound(a,l,!0)).next(h=>{i==null||i.incrementDocumentReadCount(h.length);let f=rt();for(const m of h){const _=this.ir(B.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);_.isFoundDocument()&&(Ys(t,_)||s.has(_.key))&&(f=f.insert(_.key,_))}return f})}getAllFromCollectionGroup(e,t,r,s){let i=rt();const o=Ld(t,r),a=Ld(t,it.max());return En(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,h,f)=>{const m=this.ir(B.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);i=i.insert(m.key,m),i.size===s&&f.done()}).next(()=>i)}newChangeBuffer(e){return new NT(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Md(e).get("remoteDocumentGlobalKey").next(t=>(G(!!t),t))}rr(e,t){return Md(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const r=gT(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(W.min())))return r}return ve.newInvalidDocument(e)}}function jp(n){return new VT(n)}class NT extends Bp{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new gn(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const t=[];let r=0,s=new ce((i,o)=>Y(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.lr.get(i);if(t.push(this.cr.removeEntry(e,i,a.readTime)),o.isValidDocument()){const l=Ed(this.cr.serializer,o);s=s.add(i.path.popLast());const h=vo(l);r+=h-a.size,t.push(this.cr.addEntry(e,i,l))}else if(r-=a.size,this.trackRemovals){const l=Ed(this.cr.serializer,o.convertToNoDocument(W.min()));t.push(this.cr.addEntry(e,i,l))}}),s.forEach(i=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.cr.updateMetadata(e,r)),C.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(r=>(this.lr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:r,ur:s})=>(s.forEach((i,o)=>{this.lr.set(i,{size:o,readTime:r.get(i).readTime})}),r))}}function Md(n){return ke(n,"remoteDocumentGlobal")}function En(n){return ke(n,"remoteDocumentsV14")}function rs(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Ld(n,e){const t=e.documentKey.path.toArray();return[n,_o(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Fd(n,e){const t=n.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<r.length-2;++i)if(s=Y(t[i],r[i]),s)return s;return s=Y(t.length,r.length),s||(s=Y(t[t.length-2],r[r.length-2]),s||Y(t[t.length-1],r[r.length-1]))}/**
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
 */class xT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class $p{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&ys(r.mutation,s,Ze.empty(),_e.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,X()).next(()=>r))}getLocalViewOfDocuments(e,t,r=X()){const s=mt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=ls();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=mt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,X()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,s){let i=rt();const o=_s(),a=function(){return _s()}();return t.forEach((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Ft)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),ys(f.mutation,h,f.mutation.getFieldMask(),_e.now())):o.set(h.key,Ze.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>o.set(h,f)),t.forEach((h,f)=>{var m;return a.set(h,new xT(f,(m=o.get(h))!==null&&m!==void 0?m:null))}),a))}recalculateAndSaveOverlays(e,t){const r=_s();let s=new de((o,a)=>o-a),i=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(l=>{const h=t.get(l);if(h===null)return;let f=r.get(l)||Ze.empty();f=a.applyToLocalView(h,f),r.set(l,f);const m=(s.get(a.batchId)||X()).add(l);s=s.insert(a.batchId,m)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),h=l.key,f=l.value,m=cp();f.forEach(_=>{if(!i.has(_)){const y=pp(t.get(_),r.get(_));y!==null&&m.set(_,y),i=i.add(_)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return C.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(o){return B.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):np(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):C.resolve(mt());let a=-1,l=i;return o.next(h=>C.forEach(h,(f,m)=>(a<m.largestBatchId&&(a=m.largestBatchId),i.get(f)?C.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{l=l.insert(f,_)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,X())).next(f=>({batchId:a,changes:ap(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next(r=>{let s=ls();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=ls();return this.indexManager.getCollectionParents(e,i).next(a=>C.forEach(a,l=>{const h=function(m,_){return new Qs(_,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((m,_)=>{o=o.insert(m,_)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>{i.forEach((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,ve.newInvalidDocument(f)))});let a=ls();return o.forEach((l,h)=>{const f=i.get(l);f!==void 0&&ys(f.mutation,h,Ze.empty(),_e.now()),Ys(t,h)&&(a=a.insert(l,h))}),a})}}/**
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
 */class OT{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return C.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Je(s.createTime)}}(t)),C.resolve()}getNamedQuery(e,t){return C.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:xp(s.bundledQuery),readTime:Je(s.readTime)}}(t)),C.resolve()}}/**
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
 */class MT{constructor(){this.overlays=new de(B.comparator),this.Ir=new Map}getOverlay(e,t){return C.resolve(this.overlays.get(t))}getOverlays(e,t){const r=mt();return C.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),C.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),C.resolve()}getOverlaysForCollection(e,t,r){const s=mt(),i=t.length+1,o=new B(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return C.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new de((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=mt(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const a=mt(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>a.set(h,f)),!(a.size()>=s)););return C.resolve(a)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ol(t,r));let i=this.Ir.get(t);i===void 0&&(i=X(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
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
 */class LT{constructor(){this.sessionToken=Te.EMPTY_BYTE_STRING}getSessionToken(e){return C.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,C.resolve()}}/**
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
 */class hl{constructor(){this.Tr=new ce(De.Er),this.dr=new ce(De.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new De(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new De(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new B(new ie([])),r=new De(t,e),s=new De(t,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new B(new ie([])),r=new De(t,e),s=new De(t,e+1);let i=X();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new De(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class De{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return B.comparator(e.key,t.key)||Y(e.wr,t.wr)}static Ar(e,t){return Y(e.wr,t.wr)||B.comparator(e.key,t.key)}}/**
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
 */class FT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new ce(De.Er)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new sl(i,t,r,s);this.mutationQueue.push(o);for(const a of s)this.br=this.br.add(new De(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,t){return C.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return C.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new De(t,0),s=new De(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const a=this.Dr(o.wr);i.push(a)}),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ce(Y);return t.forEach(s=>{const i=new De(s,0),o=new De(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],a=>{r=r.add(a.wr)})}),C.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;B.isDocumentKey(i)||(i=i.child(""));const o=new De(new B(i),0);let a=new ce(Y);return this.br.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(a=a.add(l.wr)),!0)},o),C.resolve(this.Cr(a))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){G(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return C.forEach(t.mutations,s=>{const i=new De(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new De(t,0),s=this.br.firstAfterOrEqual(r);return C.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class UT{constructor(e){this.Mr=e,this.docs=function(){return new de(B.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return C.resolve(r?r.document.mutableCopy():ve.newInvalidDocument(t))}getEntries(e,t){let r=rt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ve.newInvalidDocument(s))}),C.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=rt();const o=t.path,a=new B(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Jc(xm(f),r)<=0||(s.has(f.key)||Ys(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return C.resolve(i)}getAllFromCollectionGroup(e,t,r,s){z()}Or(e,t){return C.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new BT(this)}getSize(e){return C.resolve(this.size)}}class BT extends Bp{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),C.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class jT{constructor(e){this.persistence=e,this.Nr=new gn(t=>Bn(t),Hs),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.Lr=0,this.Br=new hl,this.targetCount=0,this.kr=Kn.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),C.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Kn(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,C.resolve()}updateTargetData(e,t){return this.Kn(t),C.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),C.waitFor(i).next(()=>s)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return C.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),C.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),C.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),C.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return C.resolve(r)}containsKey(e,t){return C.resolve(this.Br.containsKey(t))}}/**
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
 */class qp{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Xe(0),this.Kr=!1,this.Kr=!0,this.$r=new LT,this.referenceDelegate=e(this),this.Ur=new jT(this),this.indexManager=new bT,this.remoteDocumentCache=function(s){return new UT(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Vp(t),this.Gr=new OT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new MT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new FT(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){x("MemoryPersistence","Starting transaction:",e);const s=new $T(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return C.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class $T extends Mm{constructor(e){super(),this.currentSequenceNumber=e}}class zo{constructor(e){this.persistence=e,this.Jr=new hl,this.Yr=null}static Zr(e){return new zo(e)}get Xr(){if(this.Yr)return this.Yr;throw z()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),C.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),C.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Xr,r=>{const s=B.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,W.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return C.or([()=>C.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class qT{constructor(e){this.serializer=e}O(e,t,r,s){const i=new xo("createOrUpgrade",t);r<1&&s>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Xh,{unique:!0}),l.createObjectStore("documentMutations")}(e),Ud(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=C.resolve();return r<3&&s>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),Ud(e)),o=o.next(()=>function(l){const h=l.store("targetGlobal"),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:W.min().toTimestamp(),targetCount:0};return h.put("targetGlobalKey",f)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(l,h){return h.store("mutations").U().next(f=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Xh,{unique:!0});const m=h.store("mutations"),_=f.map(y=>m.put(y));return C.waitFor(_)})}(e,i))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.ni(i))),r<6&&s>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ri(i)))),r<7&&s>=7&&(o=o.next(()=>this.ii(i))),r<8&&s>=8&&(o=o.next(()=>this.si(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(o=o.next(()=>this.oi(i))),r<11&&s>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(l){const h=l.createObjectStore("documentOverlays",{keyPath:EE});h.createIndex("collectionPathOverlayIndex",TE,{unique:!1}),h.createIndex("collectionGroupOverlayIndex",bE,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>function(l){const h=l.createObjectStore("remoteDocumentsV14",{keyPath:hE});h.createIndex("documentKeyIndex",dE),h.createIndex("collectionGroupIndex",fE)}(e)).next(()=>this._i(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&s>=14&&(o=o.next(()=>this.ai(e,i))),r<15&&s>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:yE}).createIndex("sequenceNumberIndex",vE,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:IE}).createIndex("documentKeyIndex",wE,{unique:!1})}(e))),r<16&&s>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),r<17&&s>=17&&(o=o.next(()=>{(function(l){l.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((r,s)=>{t+=vo(s)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.U().next(s=>C.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>C.forEach(a,l=>{G(l.userId===i.userId);const h=Rn(this.serializer,l);return Lp(e,i.userId,h).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return r.J((o,a)=>{const l=new ie(o),h=function(m){return[0,Qe(m)]}(l);i.push(t.get(h).next(f=>f?C.resolve():(m=>t.put({targetId:0,path:Qe(m),sequenceNumber:s.highestListenSequenceNumber}))(l)))}).next(()=>C.waitFor(i))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:_E});const r=t.store("collectionParents"),s=new ul,i=o=>{if(s.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:Qe(l)})}};return t.store("remoteDocuments").J({H:!0},(o,a)=>{const l=new ie(o);return i(l.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,a,l],h)=>{const f=ft(a);return i(f.popLast())}))}oi(e){const t=e.store("targets");return t.J((r,s)=>{const i=hs(s),o=Np(this.serializer,i);return t.put(o)})}_i(e,t){const r=t.store("remoteDocuments"),s=[];return r.J((i,o)=>{const a=t.store("remoteDocumentsV14"),l=function(m){return m.document?new B(ie.fromString(m.document.name).popFirst(5)):m.noDocument?B.fromSegments(m.noDocument.path):m.unknownDocument?B.fromSegments(m.unknownDocument.path):z()}(o).path.toArray(),h={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(a.put(h))}).next(()=>C.waitFor(s))}ai(e,t){const r=t.store("mutations"),s=jp(this.serializer),i=new qp(zo.Zr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(l=>{var h;let f=(h=a.get(l.userId))!==null&&h!==void 0?h:X();Rn(this.serializer,l).keys().forEach(m=>f=f.add(m)),a.set(l.userId,f)}),C.forEach(a,(l,h)=>{const f=new qe(h),m=$o.lt(this.serializer,f),_=i.getIndexManager(f),y=qo.lt(f,this.serializer,_,i.referenceDelegate);return new $p(s,y,m,_).recalculateAndSaveOverlaysForDocumentKeys(new ic(t,Xe.oe),l).next()})})}}function Ud(n){n.createObjectStore("targetDocuments",{keyPath:pE}).createIndex("documentTargetsIndex",gE,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",mE,{unique:!0}),n.createObjectStore("targetGlobal")}const xa="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class dl{constructor(e,t,r,s,i,o,a,l,h,f,m=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ui=i,this.window=o,this.document=a,this.ci=h,this.li=f,this.hi=m,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=_=>Promise.resolve(),!dl.D())throw new L(V.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new DT(this,s),this.Ai=t+"main",this.serializer=new Vp(l),this.Ri=new rn(this.Ai,this.hi,new qT(this.serializer)),this.$r=new yT,this.Ur=new ST(this.referenceDelegate,this.serializer),this.remoteDocumentCache=jp(this.serializer),this.Gr=new _T,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,f===!1&&we("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new L(V.FAILED_PRECONDITION,xa);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new Xe(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Ci(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(pn(e))return x("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return x("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return ss(e).get("owner").next(t=>C.resolve(this.vi(t)))}Ci(e){return Ci(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=ke(t,"clientMetadata");return r.U().next(s=>{const i=this.xi(s,18e5),o=s.filter(a=>i.indexOf(a)===-1);return C.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?C.resolve(!0):ss(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new L(V.FAILED_PRECONDITION,xa);return!1}}return!(!this.networkEnabled||!this.inForeground)||Ci(e).U().next(r=>this.xi(r,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,a=this.networkEnabled===s.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&x("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new ic(e,Xe.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(r=>this.Mi(r.updateTimeMs,t)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>Ci(e).U().next(t=>this.xi(t,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return qo.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new AT(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return $o.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,r){x("IndexedDbPersistence","Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(l){return l===17?RE:l===16?SE:l===15?Xc:l===14?$m:l===13?jm:l===12?AE:l===11?Bm:void z()}(this.hi);let o;return this.Ri.runTransaction(e,s,i,a=>(o=new ic(a,this.Qr?this.Qr.next():Xe.oe),t==="readwrite-primary"?this.wi(o).next(l=>!!l||this.Si(o)).next(l=>{if(!l)throw we(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new L(V.FAILED_PRECONDITION,Om);return r(o)}).next(l=>this.Di(o).next(()=>l)):this.Ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Ki(e){return ss(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new L(V.FAILED_PRECONDITION,xa)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ss(e).put("owner",t)}static D(){return rn.D()}bi(e){const t=ss(e);return t.get("owner").next(r=>this.vi(r)?(x("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):C.resolve())}Mi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(we(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;Ff()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const r=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return x("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return we("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){we("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ss(n){return ke(n,"owner")}function Ci(n){return ke(n,"clientMetadata")}function zp(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class fl{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=X(),s=X();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new fl(e,t.fromCache,r,s)}}/**
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
 */class zT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Kp{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Ff()?8:Lm(Pe())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new zT;return this.Xi(e,t,o).next(a=>{if(i.result=a,this.zi)return this.es(e,t,o,a.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(or()<=ee.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",ar(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),C.resolve()):(or()<=ee.DEBUG&&x("QueryEngine","Query:",ar(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(or()<=ee.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",ar(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,st(t))):C.resolve())}Yi(e,t){if(hd(t))return C.resolve(null);let r=st(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=dc(t,null,"F"),r=st(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=X(...i);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.ts(t,a);return this.ns(t,h,o,l.readTime)?this.Yi(e,dc(t,null,"F")):this.rs(e,h,t,l)}))})))}Zi(e,t,r,s){return hd(t)||s.isEqual(W.min())?C.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(t,i);return this.ns(t,o,r,s)?C.resolve(null):(or()<=ee.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ar(t)),this.rs(e,o,t,Nm(s,-1)).next(a=>a))})}ts(e,t){let r=new ce(ip(e));return t.forEach((s,i)=>{Ys(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return or()<=ee.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",ar(t)),this.Ji.getDocumentsMatchingQuery(e,t,it.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class KT{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new de(Y),this._s=new gn(i=>Bn(i),Hs),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $p(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function Gp(n,e,t,r){return new KT(n,e,t,r)}async function Wp(n,e){const t=K(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=X();for(const h of s){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){a.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(r,l).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:a}))})})}function GT(n,e){const t=K(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(a,l,h,f){const m=h.batch,_=m.keys();let y=C.resolve();return _.forEach(b=>{y=y.next(()=>f.getEntry(l,b)).next(R=>{const k=h.docVersions.get(b);G(k!==null),R.version.compareTo(k)<0&&(m.applyToRemoteDocument(R,h),R.isValidDocument()&&(R.setReadTime(h.commitVersion),f.addEntry(R)))})}),y.next(()=>a.mutationQueue.removeMutationBatch(l,m))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=X();for(let h=0;h<a.mutationResults.length;++h)a.mutationResults[h].transformResults.length>0&&(l=l.add(a.batch.mutations[h].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Hp(n){const e=K(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function WT(n,e){const t=K(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const a=[];e.targetChanges.forEach((f,m)=>{const _=s.get(m);if(!_)return;a.push(t.Ur.removeMatchingKeys(i,f.removedDocuments,m).next(()=>t.Ur.addMatchingKeys(i,f.addedDocuments,m)));let y=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?y=y.withResumeToken(Te.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):f.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(f.resumeToken,r)),s=s.insert(m,y),function(R,k,N){return R.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(_,y,f)&&a.push(t.Ur.updateTargetData(i,y))});let l=rt(),h=X();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),a.push(HT(i,o,e.documentUpdates).next(f=>{l=f.Ps,h=f.Is})),!r.isEqual(W.min())){const f=t.Ur.getLastRemoteSnapshotVersion(i).next(m=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(f)}return C.waitFor(a).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(t.os=s,i))}function HT(n,e,t){let r=X(),s=X();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=rt();return t.forEach((a,l)=>{const h=i.get(a);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(W.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):x("LocalStore","Ignoring outdated watch update for ",a,". Current version:",h.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function QT(n,e){const t=K(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Io(n,e){const t=K(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,C.resolve(s)):t.Ur.allocateTargetId(r).next(o=>(s=new Rt(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function br(n,e,t){const r=K(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!pn(o))throw o;x("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Ic(n,e,t){const r=K(n);let s=W.min(),i=X();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,f){const m=K(l),_=m._s.get(f);return _!==void 0?C.resolve(m.os.get(_)):m.Ur.getTargetData(h,f)}(r,o,st(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,t?s:W.min(),t?i:X())).next(a=>(Yp(r,sp(e),a),{documents:a,Ts:i})))}function Qp(n,e){const t=K(n),r=K(t.Ur),s=t.os.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",i=>r.ot(i,e).next(o=>o?o.target:null))}function Jp(n,e){const t=K(n),r=t.us.get(e)||W.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.cs.getAllFromCollectionGroup(s,e,Nm(r,-1),Number.MAX_SAFE_INTEGER)).then(s=>(Yp(t,e,s),s))}function Yp(n,e,t){let r=n.us.get(e)||W.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}function Bd(n,e){return`firestore_clients_${n}_${e}`}function jd(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Oa(n,e){return`firestore_targets_${n}_${e}`}class wo{constructor(e,t,r,s){this.user=e,this.batchId=t,this.state=r,this.error=s}static Rs(e,t,r){const s=JSON.parse(r);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new L(s.error.code,s.error.message))),o?new wo(e,t,s.state,i):(we("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class vs{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Rs(e,t){const r=JSON.parse(t);let s,i=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return i&&r.error&&(i=typeof r.error.message=="string"&&typeof r.error.code=="string",i&&(s=new L(r.error.code,r.error.message))),i?new vs(e,r.state,s):(we("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Eo{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Rs(e,t){const r=JSON.parse(t);let s=typeof r=="object"&&r.activeTargetIds instanceof Array,i=nl();for(let o=0;s&&o<r.activeTargetIds.length;++o)s=Fm(r.activeTargetIds[o]),i=i.add(r.activeTargetIds[o]);return s?new Eo(e,i):(we("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class ml{constructor(e,t){this.clientId=e,this.onlineState=t}static Rs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new ml(t.clientId,t.onlineState):(we("SharedClientState",`Failed to parse online state: ${e}`),null)}}class wc{constructor(){this.activeTargetIds=nl()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ma{constructor(e,t,r,s,i){this.window=e,this.ui=t,this.persistenceKey=r,this.ps=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new de(Y),this.started=!1,this.bs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Ds=Bd(this.persistenceKey,this.ps),this.vs=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new wc),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Os=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const r of e){if(r===this.ps)continue;const s=this.getItem(Bd(this.persistenceKey,r));if(s){const i=Eo.Rs(r,s);i&&(this.Ss=this.Ss.insert(i.clientId,i))}}this.Ns();const t=this.storage.getItem(this.xs);if(t){const r=this.Ls(t);r&&this.Bs(r)}for(const r of this.bs)this.ws(r);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let t=!1;return this.Ss.forEach((r,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,t,r){this.qs(e,t,r),this.Qs(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(Oa(this.persistenceKey,e));if(s){const i=vs.Rs(e,s);i&&(r=i.state)}}return t&&this.Ks.fs(e),this.Ns(),r}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Oa(this.persistenceKey,e))}updateQueryState(e,t,r){this.$s(e,t,r)}handleUserChange(e,t,r){t.forEach(s=>{this.Qs(s)}),this.currentUser=e,r.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return x("SharedClientState","READ",e,t),t}setItem(e,t){x("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){x("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const t=e;if(t.storageArea===this.storage){if(x("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ds)return void we("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Cs.test(t.key)){if(t.newValue==null){const r=this.Gs(t.key);return this.zs(r,null)}{const r=this.js(t.key,t.newValue);if(r)return this.zs(r.clientId,r)}}else if(this.Fs.test(t.key)){if(t.newValue!==null){const r=this.Hs(t.key,t.newValue);if(r)return this.Js(r)}}else if(this.Ms.test(t.key)){if(t.newValue!==null){const r=this.Ys(t.key,t.newValue);if(r)return this.Zs(r)}}else if(t.key===this.xs){if(t.newValue!==null){const r=this.Ls(t.newValue);if(r)return this.Bs(r)}}else if(t.key===this.vs){const r=function(i){let o=Xe.oe;if(i!=null)try{const a=JSON.parse(i);G(typeof a=="number"),o=a}catch(a){we("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(t.newValue);r!==Xe.oe&&this.sequenceNumberHandler(r)}else if(t.key===this.Os){const r=this.Xs(t.newValue);await Promise.all(r.map(s=>this.syncEngine.eo(s)))}}}else this.bs.push(t)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,t,r){const s=new wo(this.currentUser,e,t,r),i=jd(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Vs())}Qs(e){const t=jd(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Us(e){const t={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(t))}$s(e,t,r){const s=Oa(this.persistenceKey,e),i=new vs(e,t,r);this.setItem(s,i.Vs())}Ws(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Os,t)}Gs(e){const t=this.Cs.exec(e);return t?t[1]:null}js(e,t){const r=this.Gs(e);return Eo.Rs(r,t)}Hs(e,t){const r=this.Fs.exec(e),s=Number(r[1]),i=r[2]!==void 0?r[2]:null;return wo.Rs(new qe(i),s,t)}Ys(e,t){const r=this.Ms.exec(e),s=Number(r[1]);return vs.Rs(s,t)}Ls(e){return ml.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);x("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,t){const r=t?this.Ss.insert(e,t):this.Ss.remove(e),s=this.ks(this.Ss),i=this.ks(r),o=[],a=[];return i.forEach(l=>{s.has(l)||o.push(l)}),s.forEach(l=>{i.has(l)||a.push(l)}),this.syncEngine.io(o,a).then(()=>{this.Ss=r})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let t=nl();return e.forEach((r,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class Xp{constructor(){this.so=new wc,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new wc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class JT{_o(e){}shutdown(){}}/**
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
 */class $d{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ki=null;function La(){return ki===null?ki=function(){return 268435456+Math.round(2147483648*Math.random())}():ki++,"0x"+ki.toString(16)}/**
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
 */const YT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class XT{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const $e="WebChannelConnection";class ZT extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,o){const a=La(),l=this.xo(t,r.toUriEncodedString());x("RestConnection",`Sending RPC '${t}' ${a}:`,l,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(t,l,h,s).then(f=>(x("RestConnection",`Received RPC '${t}' ${a}: `,f),f),f=>{throw Rs("RestConnection",`RPC '${t}' ${a} failed with error: `,f,"url: ",l,"request:",s),f})}Lo(t,r,s,i,o,a){return this.Mo(t,r,s,i,o)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Or}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>t[o]=i),s&&s.headers.forEach((i,o)=>t[o]=i)}xo(t,r){const s=YT[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=La();return new Promise((o,a)=>{const l=new Sm;l.setWithCredentials(!0),l.listenOnce(Rm.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case $i.NO_ERROR:const f=l.getResponseJson();x($e,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case $i.TIMEOUT:x($e,`RPC '${e}' ${i} timed out`),a(new L(V.DEADLINE_EXCEEDED,"Request time out"));break;case $i.HTTP_ERROR:const m=l.getStatus();if(x($e,`RPC '${e}' ${i} failed with status:`,m,"response text:",l.getResponseText()),m>0){let _=l.getResponseJson();Array.isArray(_)&&(_=_[0]);const y=_==null?void 0:_.error;if(y&&y.status&&y.message){const b=function(k){const N=k.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(N)>=0?N:V.UNKNOWN}(y.status);a(new L(b,y.message))}else a(new L(V.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new L(V.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{x($e,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);x($e,`RPC '${e}' ${i} sending request:`,s),l.send(t,"POST",h,r,15)})}Bo(e,t,r){const s=La(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=km(),a=Cm(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const f=i.join("");x($e,`Creating RPC '${e}' stream ${s}: ${f}`,l);const m=o.createWebChannel(f,l);let _=!1,y=!1;const b=new XT({Io:k=>{y?x($e,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(_||(x($e,`Opening RPC '${e}' stream ${s} transport.`),m.open(),_=!0),x($e,`RPC '${e}' stream ${s} sending:`,k),m.send(k))},To:()=>m.close()}),R=(k,N,O)=>{k.listen(N,U=>{try{O(U)}catch(M){setTimeout(()=>{throw M},0)}})};return R(m,cs.EventType.OPEN,()=>{y||(x($e,`RPC '${e}' stream ${s} transport opened.`),b.yo())}),R(m,cs.EventType.CLOSE,()=>{y||(y=!0,x($e,`RPC '${e}' stream ${s} transport closed`),b.So())}),R(m,cs.EventType.ERROR,k=>{y||(y=!0,Rs($e,`RPC '${e}' stream ${s} transport errored:`,k),b.So(new L(V.UNAVAILABLE,"The operation could not be completed")))}),R(m,cs.EventType.MESSAGE,k=>{var N;if(!y){const O=k.data[0];G(!!O);const U=O,M=U.error||((N=U[0])===null||N===void 0?void 0:N.error);if(M){x($e,`RPC '${e}' stream ${s} received error:`,M);const q=M.status;let $=function(I){const E=be[I];if(E!==void 0)return yp(E)}(q),T=M.message;$===void 0&&($=V.INTERNAL,T="Unknown error status: "+q+" with message "+M.message),y=!0,b.So(new L($,T)),m.close()}else x($e,`RPC '${e}' stream ${s} received:`,O),b.bo(O)}}),R(a,Pm.STAT_EVENT,k=>{k.stat===rc.PROXY?x($e,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===rc.NOPROXY&&x($e,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{b.wo()},0),b}}/**
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
 */function Zp(){return typeof window<"u"?window:null}function Qi(){return typeof document<"u"?document:null}/**
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
 */function Ko(n){return new oT(n,!0)}/**
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
 */class eg{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&x("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class tg{constructor(e,t,r,s,i,o,a,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new eg(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(we(t.toString()),we("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new L(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return x("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class eb extends tg{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=lT(this.serializer,e),r=function(i){if(!("targetChange"in i))return W.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?W.min():o.readTime?Je(o.readTime):W.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=pc(this.serializer),t.addTarget=function(i,o){let a;const l=o.target;if(a=fo(l)?{documents:Sp(i,l)}:{query:Rp(i,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=wp(i,o.resumeToken);const h=fc(i,o.expectedCount);h!==null&&(a.expectedCount=h)}else if(o.snapshotVersion.compareTo(W.min())>0){a.readTime=Tr(i,o.snapshotVersion.toTimestamp());const h=fc(i,o.expectedCount);h!==null&&(a.expectedCount=h)}return a}(this.serializer,e);const r=hT(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=pc(this.serializer),t.removeTarget=e,this.a_(t)}}class tb extends tg{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return G(!!e.streamToken),this.lastStreamToken=e.streamToken,G(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){G(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=uT(e.writeResults,e.commitTime),r=Je(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=pc(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>go(this.serializer,r))};this.a_(t)}}/**
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
 */class nb extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new L(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,mc(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(V.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,mc(t,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new L(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class rb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
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
 */class sb{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Qn(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=K(l);h.L_.add(4),await ei(h),h.q_.set("Unknown"),h.L_.delete(4),await Go(h)}(this))})}),this.q_=new rb(r,s)}}async function Go(n){if(Qn(n))for(const e of n.B_)await e(!0)}async function ei(n){for(const e of n.B_)await e(!1)}function Wo(n,e){const t=K(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),_l(t)?gl(t):Fr(t).r_()&&pl(t,e))}function Ar(n,e){const t=K(n),r=Fr(t);t.N_.delete(e),r.r_()&&ng(t,e),t.N_.size===0&&(r.r_()?r.o_():Qn(t)&&t.q_.set("Unknown"))}function pl(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Fr(n).A_(e)}function ng(n,e){n.Q_.xe(e),Fr(n).R_(e)}function gl(n){n.Q_=new nT({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Fr(n).start(),n.q_.v_()}function _l(n){return Qn(n)&&!Fr(n).n_()&&n.N_.size>0}function Qn(n){return K(n).L_.size===0}function rg(n){n.Q_=void 0}async function ib(n){n.q_.set("Online")}async function ob(n){n.N_.forEach((e,t)=>{pl(n,e)})}async function ab(n,e){rg(n),_l(n)?(n.q_.M_(e),gl(n)):n.q_.set("Unknown")}async function cb(n,e,t){if(n.q_.set("Online"),e instanceof Ip&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.N_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.N_.delete(a),s.Q_.removeTarget(a))}(n,e)}catch(r){x("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await To(n,r)}else if(e instanceof Hi?n.Q_.Ke(e):e instanceof vp?n.Q_.He(e):n.Q_.We(e),!t.isEqual(W.min()))try{const r=await Hp(n.localStore);t.compareTo(r)>=0&&await function(i,o){const a=i.Q_.rt(o);return a.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,h)=>{const f=i.N_.get(l);if(!f)return;i.N_.set(l,f.withResumeToken(Te.EMPTY_BYTE_STRING,f.snapshotVersion)),ng(i,l);const m=new Rt(f.target,l,h,f.sequenceNumber);pl(i,m)}),i.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(r){x("RemoteStore","Failed to raise snapshot:",r),await To(n,r)}}async function To(n,e,t){if(!pn(e))throw e;n.L_.add(1),await ei(n),n.q_.set("Offline"),t||(t=()=>Hp(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Go(n)})}function sg(n,e){return e().catch(t=>To(n,t,e))}async function Lr(n){const e=K(n),t=ln(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;lb(e);)try{const s=await QT(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,ub(e,s)}catch(s){await To(e,s)}ig(e)&&og(e)}function lb(n){return Qn(n)&&n.O_.length<10}function ub(n,e){n.O_.push(e);const t=ln(n);t.r_()&&t.V_&&t.m_(e.mutations)}function ig(n){return Qn(n)&&!ln(n).n_()&&n.O_.length>0}function og(n){ln(n).start()}async function hb(n){ln(n).p_()}async function db(n){const e=ln(n);for(const t of n.O_)e.m_(t.mutations)}async function fb(n,e,t){const r=n.O_.shift(),s=il.from(r,e,t);await sg(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Lr(n)}async function mb(n,e){e&&ln(n).V_&&await async function(r,s){if(function(o){return ZE(o)&&o!==V.ABORTED}(s.code)){const i=r.O_.shift();ln(r).s_(),await sg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Lr(r)}}(n,e),ig(n)&&og(n)}async function qd(n,e){const t=K(n);t.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const r=Qn(t);t.L_.add(3),await ei(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Go(t)}async function Ec(n,e){const t=K(n);e?(t.L_.delete(2),await Go(t)):e||(t.L_.add(2),await ei(t),t.q_.set("Unknown"))}function Fr(n){return n.K_||(n.K_=function(t,r,s){const i=K(t);return i.w_(),new eb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:ib.bind(null,n),Ro:ob.bind(null,n),mo:ab.bind(null,n),d_:cb.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),_l(n)?gl(n):n.q_.set("Unknown")):(await n.K_.stop(),rg(n))})),n.K_}function ln(n){return n.U_||(n.U_=function(t,r,s){const i=K(t);return i.w_(),new tb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:hb.bind(null,n),mo:mb.bind(null,n),f_:db.bind(null,n),g_:fb.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Lr(n)):(await n.U_.stop(),n.O_.length>0&&(x("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class yl{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new gt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,a=new yl(e,t,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vl(n,e){if(we("AsyncQueue",`${e}: ${n}`),pn(n))return new L(V.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class pr{constructor(e){this.comparator=e?(t,r)=>e(t,r)||B.comparator(t.key,r.key):(t,r)=>B.comparator(t.key,r.key),this.keyedMap=ls(),this.sortedSet=new de(this.comparator)}static emptySet(e){return new pr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof pr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new pr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class zd{constructor(){this.W_=new de(B.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):z():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Sr{constructor(e,t,r,s,i,o,a,l,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new Sr(e,t,pr.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Lo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class pb{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class gb{constructor(){this.queries=Kd(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=K(t),i=s.queries;s.queries=Kd(),i.forEach((o,a)=>{for(const l of a.j_)l.onError(r)})})(this,new L(V.ABORTED,"Firestore shutting down"))}}function Kd(){return new gn(n=>rp(n),Lo)}async function Il(n,e){const t=K(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new pb,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const a=vl(o,`Initialization of query '${ar(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&El(t)}async function wl(n,e){const t=K(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function _b(n,e){const t=K(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const a of o.j_)a.X_(s)&&(r=!0);o.z_=s}}r&&El(t)}function yb(n,e,t){const r=K(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function El(n){n.Y_.forEach(e=>{e.next()})}var Tc,Gd;(Gd=Tc||(Tc={})).ea="default",Gd.Cache="cache";class Tl{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Sr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Sr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Tc.Cache}}/**
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
 */class ag{constructor(e){this.key=e}}class cg{constructor(e){this.key=e}}class vb{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=X(),this.mutatedKeys=X(),this.Aa=ip(e),this.Ra=new pr(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new zd,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const _=s.get(f),y=Ys(this.query,m)?m:null,b=!!_&&this.mutatedKeys.has(_.key),R=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let k=!1;_&&y?_.data.isEqual(y.data)?b!==R&&(r.track({type:3,doc:y}),k=!0):this.ga(_,y)||(r.track({type:2,doc:y}),k=!0,(l&&this.Aa(y,l)>0||h&&this.Aa(y,h)<0)&&(a=!0)):!_&&y?(r.track({type:0,doc:y}),k=!0):_&&!y&&(r.track({type:1,doc:_}),k=!0,(l||h)&&(a=!0)),k&&(y?(o=o.add(y),i=R?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:a,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,m)=>function(y,b){const R=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return R(y)-R(b)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),s=s!=null&&s;const a=t&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,h=l!==this.Ea;return this.Ea=l,o.length!==0||h?{snapshot:new Sr(this.query,e.Ra,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new zd,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=X(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new cg(r))}),this.da.forEach(r=>{e.has(r)||t.push(new ag(r))}),t}ba(e){this.Ta=e.Ts,this.da=X();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Sr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Ib{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class wb{constructor(e){this.key=e,this.va=!1}}class Eb{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new gn(a=>rp(a),Lo),this.Ma=new Map,this.xa=new Set,this.Oa=new de(B.comparator),this.Na=new Map,this.La=new hl,this.Ba={},this.ka=new Map,this.qa=Kn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Tb(n,e,t=!0){const r=Ho(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await lg(r,e,t,!0),s}async function bb(n,e){const t=Ho(n);await lg(t,e,!0,!1)}async function lg(n,e,t,r){const s=await Io(n.localStore,st(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let a;return r&&(a=await bl(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&Wo(n.remoteStore,s),a}async function bl(n,e,t,r,s){n.Ka=(m,_,y)=>async function(R,k,N,O){let U=k.view.ma(N);U.ns&&(U=await Ic(R.localStore,k.query,!1).then(({documents:T})=>k.view.ma(T,U)));const M=O&&O.targetChanges.get(k.targetId),q=O&&O.targetMismatches.get(k.targetId)!=null,$=k.view.applyChanges(U,R.isPrimaryClient,M,q);return bc(R,k.targetId,$.wa),$.snapshot}(n,m,_,y);const i=await Ic(n.localStore,e,!0),o=new vb(e,i.Ts),a=o.ma(i.documents),l=Zs.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=o.applyChanges(a,n.isPrimaryClient,l);bc(n,t,h.wa);const f=new Ib(e,t,o);return n.Fa.set(e,f),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),h.snapshot}async function Ab(n,e,t){const r=K(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Lo(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await br(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Ar(r.remoteStore,s.targetId),Rr(r,s.targetId)}).catch(mn)):(Rr(r,s.targetId),await br(r.localStore,s.targetId,!0))}async function Sb(n,e){const t=K(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Ar(t.remoteStore,r.targetId))}async function Rb(n,e,t){const r=Pl(n);try{const s=await function(o,a){const l=K(o),h=_e.now(),f=a.reduce((y,b)=>y.add(b.key),X());let m,_;return l.persistence.runTransaction("Locally write mutations","readwrite",y=>{let b=rt(),R=X();return l.cs.getEntries(y,f).next(k=>{b=k,b.forEach((N,O)=>{O.isValidDocument()||(R=R.add(N))})}).next(()=>l.localDocuments.getOverlayedDocuments(y,b)).next(k=>{m=k;const N=[];for(const O of a){const U=YE(O,m.get(O.key).overlayedDocument);U!=null&&N.push(new Ft(O.key,U,Wm(U.value.mapValue),He.exists(!0)))}return l.mutationQueue.addMutationBatch(y,h,N,a)}).next(k=>{_=k;const N=k.applyToLocalDocumentSet(m,R);return l.documentOverlayCache.saveOverlays(y,k.batchId,N)})}).then(()=>({batchId:_.batchId,changes:ap(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let h=o.Ba[o.currentUser.toKey()];h||(h=new de(Y)),h=h.insert(a,l),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,t),await _n(r,s.changes),await Lr(r.remoteStore)}catch(s){const i=vl(s,"Failed to persist write");t.reject(i)}}async function ug(n,e){const t=K(n);try{const r=await WT(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Na.get(i);o&&(G(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?G(o.va):s.removedDocuments.size>0&&(G(o.va),o.va=!1))}),await _n(t,r,e)}catch(r){await mn(r)}}function Wd(n,e,t){const r=K(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,o)=>{const a=o.view.Z_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=K(o);l.onlineState=a;let h=!1;l.queries.forEach((f,m)=>{for(const _ of m.j_)_.Z_(a)&&(h=!0)}),h&&El(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Pb(n,e,t){const r=K(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new de(B.comparator);o=o.insert(i,ve.newNoDocument(i,W.min()));const a=X().add(i),l=new Xs(W.min(),new Map,new de(Y),o,a);await ug(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),Rl(r)}else await br(r.localStore,e,!1).then(()=>Rr(r,e,t)).catch(mn)}async function Cb(n,e){const t=K(n),r=e.batch.batchId;try{const s=await GT(t.localStore,e);Sl(t,r,null),Al(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await _n(t,s)}catch(s){await mn(s)}}async function kb(n,e,t){const r=K(n);try{const s=await function(o,a){const l=K(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,a).next(m=>(G(m!==null),f=m.keys(),l.mutationQueue.removeMutationBatch(h,m))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(r.localStore,e);Sl(r,e,t),Al(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await _n(r,s)}catch(s){await mn(s)}}function Al(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Sl(n,e,t){const r=K(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Rr(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||hg(n,r)})}function hg(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(Ar(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Rl(n))}function bc(n,e,t){for(const r of t)r instanceof ag?(n.La.addReference(r.key,e),Db(n,r)):r instanceof cg?(x("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||hg(n,r.key)):z()}function Db(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(x("SyncEngine","New document in limbo: "+t),n.xa.add(r),Rl(n))}function Rl(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new B(ie.fromString(e)),r=n.qa.next();n.Na.set(r,new wb(t)),n.Oa=n.Oa.insert(t,r),Wo(n.remoteStore,new Rt(st(Js(t.path)),r,"TargetPurposeLimboResolution",Xe.oe))}}async function _n(n,e,t){const r=K(n),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,l)=>{o.push(r.Ka(l,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,m?"current":"not-current")}if(h){s.push(h);const m=fl.Wi(l.targetId,h);i.push(m)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(l,h){const f=K(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>C.forEach(h,_=>C.forEach(_.$i,y=>f.persistence.referenceDelegate.addReference(m,_.targetId,y)).next(()=>C.forEach(_.Ui,y=>f.persistence.referenceDelegate.removeReference(m,_.targetId,y)))))}catch(m){if(!pn(m))throw m;x("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const _=m.targetId;if(!m.fromCache){const y=f.os.get(_),b=y.snapshotVersion,R=y.withLastLimboFreeSnapshotVersion(b);f.os=f.os.insert(_,R)}}}(r.localStore,i))}async function Vb(n,e){const t=K(n);if(!t.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());const r=await Wp(t.localStore,e);t.currentUser=e,function(i,o){i.ka.forEach(a=>{a.forEach(l=>{l.reject(new L(V.CANCELLED,o))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await _n(t,r.hs)}}function Nb(n,e){const t=K(n),r=t.Na.get(e);if(r&&r.va)return X().add(r.key);{let s=X();const i=t.Ma.get(e);if(!i)return s;for(const o of i){const a=t.Fa.get(o);s=s.unionWith(a.view.Va)}return s}}async function xb(n,e){const t=K(n),r=await Ic(t.localStore,e.query,!0),s=e.view.ba(r);return t.isPrimaryClient&&bc(t,e.targetId,s.wa),s}async function Ob(n,e){const t=K(n);return Jp(t.localStore,e).then(r=>_n(t,r))}async function Mb(n,e,t,r){const s=K(n),i=await function(a,l){const h=K(a),f=K(h.mutationQueue);return h.persistence.runTransaction("Lookup mutation documents","readonly",m=>f.Mn(m,l).next(_=>_?h.localDocuments.getDocuments(m,_):C.resolve(null)))}(s.localStore,e);i!==null?(t==="pending"?await Lr(s.remoteStore):t==="acknowledged"||t==="rejected"?(Sl(s,e,r||null),Al(s,e),function(a,l){K(K(a).mutationQueue).On(l)}(s.localStore,e)):z(),await _n(s,i)):x("SyncEngine","Cannot apply mutation batch with id: "+e)}async function Lb(n,e){const t=K(n);if(Ho(t),Pl(t),e===!0&&t.Qa!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),s=await Hd(t,r.toArray());t.Qa=!0,await Ec(t.remoteStore,!0);for(const i of s)Wo(t.remoteStore,i)}else if(e===!1&&t.Qa!==!1){const r=[];let s=Promise.resolve();t.Ma.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):s=s.then(()=>(Rr(t,o),br(t.localStore,o,!0))),Ar(t.remoteStore,o)}),await s,await Hd(t,r),function(o){const a=K(o);a.Na.forEach((l,h)=>{Ar(a.remoteStore,h)}),a.La.pr(),a.Na=new Map,a.Oa=new de(B.comparator)}(t),t.Qa=!1,await Ec(t.remoteStore,!1)}}async function Hd(n,e,t){const r=K(n),s=[],i=[];for(const o of e){let a;const l=r.Ma.get(o);if(l&&l.length!==0){a=await Io(r.localStore,st(l[0]));for(const h of l){const f=r.Fa.get(h),m=await xb(r,f);m.snapshot&&i.push(m.snapshot)}}else{const h=await Qp(r.localStore,o);a=await Io(r.localStore,h),await bl(r,dg(h),o,!1,a.resumeToken)}s.push(a)}return r.Ca.d_(i),s}function dg(n){return tp(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function Fb(n){return function(t){return K(K(t).persistence).Qi()}(K(n).localStore)}async function Ub(n,e,t,r){const s=K(n);if(s.Qa)return void x("SyncEngine","Ignoring unexpected query state notification.");const i=s.Ma.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await Jp(s.localStore,sp(i[0])),a=Xs.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Te.EMPTY_BYTE_STRING);await _n(s,o,a);break}case"rejected":await br(s.localStore,e,!0),Rr(s,e,r);break;default:z()}}async function Bb(n,e,t){const r=Ho(n);if(r.Qa){for(const s of e){if(r.Ma.has(s)&&r.sharedClientState.isActiveQueryTarget(s)){x("SyncEngine","Adding an already active target "+s);continue}const i=await Qp(r.localStore,s),o=await Io(r.localStore,i);await bl(r,dg(i),o.targetId,!1,o.resumeToken),Wo(r.remoteStore,o)}for(const s of t)r.Ma.has(s)&&await br(r.localStore,s,!1).then(()=>{Ar(r.remoteStore,s),Rr(r,s)}).catch(mn)}}function Ho(n){const e=K(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=ug.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Nb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Pb.bind(null,e),e.Ca.d_=_b.bind(null,e.eventManager),e.Ca.$a=yb.bind(null,e.eventManager),e}function Pl(n){const e=K(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Cb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=kb.bind(null,e),e}class Ms{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ko(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return Gp(this.persistence,new Kp,e.initialUser,this.serializer)}Ga(e){return new qp(zo.Zr,this.serializer)}Wa(e){return new Xp}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ms.provider={build:()=>new Ms};class fg extends Ms{constructor(e,t,r){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await Pl(this.Ja.syncEngine),await Lr(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return Gp(this.persistence,new Kp,e.initialUser,this.serializer)}ja(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new PT(r,e.asyncQueue,t)}Ha(e,t){const r=new cE(t,this.persistence);return new aE(e.asyncQueue,r)}Ga(e){const t=zp(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Ye.withCacheSize(this.cacheSizeBytes):Ye.DEFAULT;return new dl(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,Zp(),Qi(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new Xp}}class jb extends fg{constructor(e,t){super(e,t,!1),this.Ja=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ja.syncEngine;this.sharedClientState instanceof Ma&&(this.sharedClientState.syncEngine={no:Mb.bind(null,t),ro:Ub.bind(null,t),io:Bb.bind(null,t),Qi:Fb.bind(null,t),eo:Ob.bind(null,t)},await this.sharedClientState.start()),await this.persistence.yi(async r=>{await Lb(this.Ja.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Wa(e){const t=Zp();if(!Ma.D(t))throw new L(V.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=zp(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Ma(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Ls{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Wd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Vb.bind(null,this.syncEngine),await Ec(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new gb}()}createDatastore(e){const t=Ko(e.databaseInfo.databaseId),r=function(i){return new ZT(i)}(e.databaseInfo);return function(i,o,a,l){return new nb(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,a){return new sb(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>Wd(this.syncEngine,t,0),function(){return $d.D()?new $d:new JT}())}createSyncEngine(e,t){return function(s,i,o,a,l,h,f){const m=new Eb(s,i,o,a,l,h);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=K(s);x("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await ei(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ls.provider={build:()=>new Ls};/**
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
 */class Cl{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):we("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class $b{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=qe.UNAUTHENTICATED,this.clientId=Dm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{x("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(x("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=vl(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Fa(n,e){n.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Wp(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Qd(n,e){n.asyncQueue.verifyOperationInProgress();const t=await qb(n);x("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>qd(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>qd(e.remoteStore,s)),n._onlineComponents=e}async function qb(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x("FirestoreClient","Using user provided OfflineComponentProvider");try{await Fa(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Rs("Error using user provided cache. Falling back to memory cache: "+t),await Fa(n,new Ms)}}else x("FirestoreClient","Using default OfflineComponentProvider"),await Fa(n,new Ms);return n._offlineComponents}async function mg(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x("FirestoreClient","Using user provided OnlineComponentProvider"),await Qd(n,n._uninitializedComponentsProvider._online)):(x("FirestoreClient","Using default OnlineComponentProvider"),await Qd(n,new Ls))),n._onlineComponents}function zb(n){return mg(n).then(e=>e.syncEngine)}async function bo(n){const e=await mg(n),t=e.eventManager;return t.onListen=Tb.bind(null,e.syncEngine),t.onUnlisten=Ab.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=bb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Sb.bind(null,e.syncEngine),t}function Kb(n,e,t={}){const r=new gt;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,h){const f=new Cl({next:_=>{f.Za(),o.enqueueAndForget(()=>wl(i,m));const y=_.docs.has(a);!y&&_.fromCache?h.reject(new L(V.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&_.fromCache&&l&&l.source==="server"?h.reject(new L(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(_)},error:_=>h.reject(_)}),m=new Tl(Js(a.path),f,{includeMetadataChanges:!0,_a:!0});return Il(i,m)}(await bo(n),n.asyncQueue,e,t,r)),r.promise}function Gb(n,e,t={}){const r=new gt;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,h){const f=new Cl({next:_=>{f.Za(),o.enqueueAndForget(()=>wl(i,m)),_.fromCache&&l.source==="server"?h.reject(new L(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),m=new Tl(a,f,{includeMetadataChanges:!0,_a:!0});return Il(i,m)}(await bo(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function pg(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Jd=new Map;/**
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
 */function gg(n,e,t){if(!t)throw new L(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Wb(n,e,t,r){if(e===!0&&r===!0)throw new L(V.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Yd(n){if(!B.isDocumentKey(n))throw new L(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Xd(n){if(B.isDocumentKey(n))throw new L(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Qo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":z()}function sn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new L(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Qo(n);throw new L(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class Zd{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new L(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Wb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new L(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new L(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new L(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class kl{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zd({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new L(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zd(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Yw;switch(r.type){case"firstParty":return new eE(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Jd.get(t);r&&(x("ComponentProvider","Removing Datastore"),Jd.delete(t),r.terminate())}(this),Promise.resolve()}}/**
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
 */class Jn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Jn(this.firestore,e,this._query)}}class et{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new on(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new et(this.firestore,e,this._key)}}class on extends Jn{constructor(e,t,r){super(e,t,Js(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new et(this.firestore,null,new B(e))}withConverter(e){return new on(this.firestore,e,this._path)}}function ef(n,e,...t){if(n=Ee(n),gg("collection","path",e),n instanceof kl){const r=ie.fromString(e,...t);return Xd(r),new on(n,null,r)}{if(!(n instanceof et||n instanceof on))throw new L(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ie.fromString(e,...t));return Xd(r),new on(n.firestore,null,r)}}function Ua(n,e,...t){if(n=Ee(n),arguments.length===1&&(e=Dm.newId()),gg("doc","path",e),n instanceof kl){const r=ie.fromString(e,...t);return Yd(r),new et(n,null,new B(r))}{if(!(n instanceof et||n instanceof on))throw new L(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ie.fromString(e,...t));return Yd(r),new et(n.firestore,n instanceof on?n.converter:null,new B(r))}}/**
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
 */class tf{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new eg(this,"async_queue_retry"),this.Vu=()=>{const r=Qi();r&&x("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=Qi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Qi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new gt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!pn(e))throw e;x("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw we("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=yl.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&z()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function nf(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class Pr extends kl{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new tf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new tf(e),this._firestoreClient=void 0,await e}}}function rf(n,e,t){t||(t="(default)");const r=Lc(n,"firestore");if(r.isInitialized(t)){const s=r.getImmediate({identifier:t}),i=r.getOptions(t);if(Nn(i,e))return s;throw new L(V.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new L(V.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:t})}function ti(n){if(n._terminated)throw new L(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Hb(n),n._firestoreClient}function Hb(n){var e,t,r;const s=n._freezeSettings(),i=function(a,l,h,f){return new CE(a,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,pg(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new $b(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(n._componentsProvider))}/**
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
 */class Cr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Cr(Te.fromBase64String(e))}catch(t){throw new L(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Cr(Te.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Jo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new L(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ur{constructor(e){this._methodName=e}}/**
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
 */class Dl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Y(this._lat,e._lat)||Y(this._long,e._long)}}/**
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
 */class Vl{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const Qb=/^__.*__$/;class Jb{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ft(e,this.data,this.fieldMask,t,this.fieldTransforms):new Mr(e,this.data,t,this.fieldTransforms)}}class _g{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Ft(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function yg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class Yo{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Yo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ao(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(yg(this.Cu)&&Qb.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Yb{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ko(e)}Qu(e,t,r,s=!1){return new Yo({Cu:e,methodName:t,qu:r,path:ge.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vg(n){const e=n._freezeSettings(),t=Ko(n._databaseId);return new Yb(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Xb(n,e,t,r,s,i={}){const o=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);Ml("Data must be an object, but it was:",o,r);const a=wg(r,o);let l,h;if(i.merge)l=new Ze(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const _=Ac(e,m,t);if(!o.contains(_))throw new L(V.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);Tg(f,_)||f.push(_)}l=new Ze(f),h=o.fieldTransforms.filter(m=>l.covers(m.field))}else l=null,h=o.fieldTransforms;return new Jb(new ze(a),l,h)}class ni extends Ur{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ni}}function Ig(n,e,t){return new Yo({Cu:3,qu:e.settings.qu,methodName:n._methodName,xu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Nl extends Ur{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=Ig(this,e,!0),r=this.Ku.map(i=>Yn(i,t)),s=new jn(r);return new Uo(e.path,s)}isEqual(e){return e instanceof Nl&&Nn(this.Ku,e.Ku)}}class xl extends Ur{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=Ig(this,e,!0),r=this.Ku.map(i=>Yn(i,t)),s=new $n(r);return new Uo(e.path,s)}isEqual(e){return e instanceof xl&&Nn(this.Ku,e.Ku)}}class Ol extends Ur{constructor(e,t){super(e),this.$u=t}_toFieldTransform(e){const t=new Er(e.serializer,up(e.serializer,this.$u));return new Uo(e.path,t)}isEqual(e){return e instanceof Ol&&this.$u===e.$u}}function Zb(n,e,t,r){const s=n.Qu(1,e,t);Ml("Data must be an object, but it was:",s,r);const i=[],o=ze.empty();Hn(r,(l,h)=>{const f=Ll(e,l,t);h=Ee(h);const m=s.Nu(f);if(h instanceof ni)i.push(f);else{const _=Yn(h,m);_!=null&&(i.push(f),o.set(f,_))}});const a=new Ze(i);return new _g(o,a,s.fieldTransforms)}function eA(n,e,t,r,s,i){const o=n.Qu(1,e,t),a=[Ac(e,r,t)],l=[s];if(i.length%2!=0)throw new L(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<i.length;_+=2)a.push(Ac(e,i[_])),l.push(i[_+1]);const h=[],f=ze.empty();for(let _=a.length-1;_>=0;--_)if(!Tg(h,a[_])){const y=a[_];let b=l[_];b=Ee(b);const R=o.Nu(y);if(b instanceof ni)h.push(y);else{const k=Yn(b,R);k!=null&&(h.push(y),f.set(y,k))}}const m=new Ze(h);return new _g(f,m,o.fieldTransforms)}function tA(n,e,t,r=!1){return Yn(t,n.Qu(r?4:3,e))}function Yn(n,e){if(Eg(n=Ee(n)))return Ml("Unsupported field value:",e,n),wg(n,e);if(n instanceof Ur)return function(r,s){if(!yg(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Yn(a,s.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Ee(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return up(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=_e.fromDate(r);return{timestampValue:Tr(s.serializer,i)}}if(r instanceof _e){const i=new _e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Tr(s.serializer,i)}}if(r instanceof Dl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Cr)return{bytesValue:wp(s.serializer,r._byteString)};if(r instanceof et){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:cl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Vl)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.Bu("VectorValues must only contain numeric values.");return rl(a.serializer,l)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Qo(r)}`)}(n,e)}function wg(n,e){const t={};return qm(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Hn(n,(r,s)=>{const i=Yn(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Eg(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof _e||n instanceof Dl||n instanceof Cr||n instanceof et||n instanceof Ur||n instanceof Vl)}function Ml(n,e,t){if(!Eg(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Qo(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function Ac(n,e,t){if((e=Ee(e))instanceof Jo)return e._internalPath;if(typeof e=="string")return Ll(n,e);throw Ao("Field path arguments must be of type string or ",n,!1,void 0,t)}const nA=new RegExp("[~\\*/\\[\\]]");function Ll(n,e,t){if(e.search(nA)>=0)throw Ao(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Jo(...e.split("."))._internalPath}catch{throw Ao(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ao(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new L(V.INVALID_ARGUMENT,a+n+l)}function Tg(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class bg{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Fl("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class rA extends bg{data(){return super.data()}}function Fl(n,e){return typeof e=="string"?Ll(n,e):e instanceof Jo?e._internalPath:e._delegate._internalPath}/**
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
 */function Ag(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new L(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ul{}class sA extends Ul{}function sf(n,e,...t){let r=[];e instanceof Ul&&r.push(e),r=r.concat(t),function(i){const o=i.filter(l=>l instanceof Bl).length,a=i.filter(l=>l instanceof Xo).length;if(o>1||o>0&&a>0)throw new L(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Xo extends sA{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Xo(e,t,r)}_apply(e){const t=this._parse(e);return Sg(e._query,t),new Jn(e.firestore,e.converter,hc(e._query,t))}_parse(e){const t=vg(e.firestore);return function(i,o,a,l,h,f,m){let _;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new L(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){af(m,f);const y=[];for(const b of m)y.push(of(l,i,b));_={arrayValue:{values:y}}}else _=of(l,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||af(m,f),_=tA(a,o,m,f==="in"||f==="not-in");return te.create(h,f,_)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function iA(n,e,t){const r=e,s=Fl("where",n);return Xo._create(s,r,t)}class Bl extends Ul{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Bl(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:ae.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)Sg(o,l),o=hc(o,l)}(e._query,t),new Jn(e.firestore,e.converter,hc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function of(n,e,t){if(typeof(t=Ee(t))=="string"){if(t==="")throw new L(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!np(e)&&t.indexOf("/")!==-1)throw new L(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ie.fromString(t));if(!B.isDocumentKey(r))throw new L(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ns(n,new B(r))}if(t instanceof et)return Ns(n,t._key);throw new L(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qo(t)}.`)}function af(n,e){if(!Array.isArray(n)||n.length===0)throw new L(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Sg(n,e){const t=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new L(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class oA{convertValue(e,t="none"){switch(Un(e)){case 0:return null;case 1:return e.booleanValue;case 2:return me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(an(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw z()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Hn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>me(o.doubleValue));return new Vl(i)}convertGeoPoint(e){return new Dl(me(e.latitude),me(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=el(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ds(e));default:return null}}convertTimestamp(e){const t=Vt(e);return new _e(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ie.fromString(e);G(Dp(r));const s=new Fn(r.get(1),r.get(3)),i=new B(r.popFirst(5));return s.isEqual(t)||we(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function aA(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
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
 */class ds{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Rg extends bg{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ji(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Fl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Ji extends Rg{data(e={}){return super.data(e)}}class Pg{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new ds(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Ji(this._firestore,this._userDataWriter,r.key,r,new ds(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new L(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new Ji(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ds(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new Ji(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ds(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return a.type!==0&&(h=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),f=o.indexOf(a.doc.key)),{type:cA(a.type),doc:l,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function cA(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}/**
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
 */function lA(n){n=sn(n,et);const e=sn(n.firestore,Pr);return Kb(ti(e),n._key).then(t=>Cg(e,n,t))}class jl extends oA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Cr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new et(this.firestore,null,t)}}function uA(n){n=sn(n,Jn);const e=sn(n.firestore,Pr),t=ti(e),r=new jl(e);return Ag(n._query),Gb(t,n._query).then(s=>new Pg(e,r,n,s))}function cf(n,...e){var t,r,s;n=Ee(n);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||nf(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(nf(e[o])){const m=e[o];e[o]=(t=m.next)===null||t===void 0?void 0:t.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(s=m.complete)===null||s===void 0?void 0:s.bind(m)}let l,h,f;if(n instanceof et)h=sn(n.firestore,Pr),f=Js(n._key.path),l={next:m=>{e[o]&&e[o](Cg(h,n,m))},error:e[o+1],complete:e[o+2]};else{const m=sn(n,Jn);h=sn(m.firestore,Pr),f=m._query;const _=new jl(h);l={next:y=>{e[o]&&e[o](new Pg(h,_,m,y))},error:e[o+1],complete:e[o+2]},Ag(n._query)}return function(_,y,b,R){const k=new Cl(R),N=new Tl(y,k,b);return _.asyncQueue.enqueueAndForget(async()=>Il(await bo(_),N)),()=>{k.Za(),_.asyncQueue.enqueueAndForget(async()=>wl(await bo(_),N))}}(ti(h),f,a,l)}function hA(n,e){return function(r,s){const i=new gt;return r.asyncQueue.enqueueAndForget(async()=>Rb(await zb(r),s,i)),i.promise}(ti(n),e)}function Cg(n,e,t){const r=t.docs.get(e._key),s=new jl(n);return new Rg(n,s,e._key,r,new ds(t.hasPendingWrites,t.fromCache),e.converter)}class dA{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=gA(),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function fA(n){return new dA(n)}class mA{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Ls.provider,this._offlineComponentProvider={build:t=>new fg(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class pA{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Ls.provider,this._offlineComponentProvider={build:t=>new jb(t,e==null?void 0:e.cacheSizeBytes)}}}function gA(n){return new mA(void 0)}function _A(){return new pA}/**
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
 */class yA{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=vg(e)}set(e,t,r){this._verifyNotCommitted();const s=Ba(e,this._firestore),i=aA(s.converter,t,r),o=Xb(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,He.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=Ba(e,this._firestore);let o;return o=typeof(t=Ee(t))=="string"||t instanceof Jo?eA(this._dataReader,"WriteBatch.update",i._key,t,r,s):Zb(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,He.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Ba(e,this._firestore);return this._mutations=this._mutations.concat(new jo(t._key,He.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new L(V.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ba(n,e){if((n=Ee(n)).firestore!==e)throw new L(V.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */function vA(){return new ni("deleteField")}function IA(...n){return new Nl("arrayUnion",n)}function wA(...n){return new xl("arrayRemove",n)}function EA(n){return new Ol("increment",n)}/**
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
 */function TA(n){return ti(n=sn(n,Pr)),new yA(n,e=>hA(n,e))}(function(e,t=!0){(function(s){Or=s})(Nr),_r(new xn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Pr(new Xw(r.getProvider("auth-internal")),new nE(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new L(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fn(h.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),nn(Qh,"4.7.3",e),nn(Qh,"4.7.3","esm2017")})();const bA={apiKey:"AIzaSyD7u7pobCPzIXaZZP48wKs8KDtC8awNz6U",authDomain:"quadro-de-estrelas-8c81a.firebaseapp.com",projectId:"quadro-de-estrelas-8c81a",storageBucket:"quadro-de-estrelas-8c81a.firebasestorage.app",messagingSenderId:"974440745469",appId:"1:974440745469:web:96d2299325d9a26b93b194"},AA=["luanasabatovicz@gmail.com"],lf="Mundo de Estrelas",SA="1.0.0",$l="./content/",kg=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,8);function RA(){const n=$f(bA),e=Hw(n);e.languageCode="pt";let t;try{t=rf(n,{localCache:fA({tabManager:_A()})})}catch{t=rf(n,{})}const r=o=>{var a,l;return o?{uid:o.uid,email:(o.email||"").toLowerCase(),name:o.displayName||"",verified:!!o.emailVerified,provider:((l=(a=o.providerData)==null?void 0:a[0])==null?void 0:l.providerId)||"password"}:null},s=o=>({id:o.id,exists:o.exists(),data:o.exists()?o.data():{}}),i=o=>o.map(([a,l,h])=>iA(a,l,h));return{demo:!1,onAuth:o=>MI(e,a=>o(r(a))),signInGoogle:async()=>{await rw(e,new Tt)},signInEmail:async(o,a)=>{await NI(e,o,a)},signUpEmail:async(o,a)=>{const l=await VI(e,o,a);await Fh(l.user)},resendVerification:async()=>{e.currentUser&&await Fh(e.currentUser)},resetPassword:async o=>{await DI(e,o)},reloadUser:async()=>{e.currentUser&&(await e.currentUser.reload(),await e.currentUser.getIdToken(!0))},signOut:async()=>{await LI(e)},get:async o=>s(await lA(Ua(t,o))),watchDoc:(o,a,l)=>cf(Ua(t,o),h=>a(s(h)),h=>l==null?void 0:l(h)),watchCol:(o,a,l,h)=>cf(sf(ef(t,o),...i(a)),f=>l(f.docs.map(s)),f=>h==null?void 0:h(f)),queryOnce:async(o,a)=>(await uA(sf(ef(t,o),...i(a)))).docs.map(s),write:async o=>{for(let a=0;a<o.length;a+=450){const l=TA(t);for(const h of o.slice(a,a+450)){const f=Ua(t,h.path);h.kind==="set"?l.set(f,h.data,{merge:!!h.merge}):h.kind==="update"?l.update(f,h.data):l.delete(f)}await l.commit()}},fv:{inc:o=>EA(o),union:(...o)=>IA(...o),remove:(...o)=>wA(...o),del:()=>vA()},newId:kg}}const Yi="__inc__",Xi="__union__",Zi="__remove__",Dg="__del__",PA=n=>n&&typeof n=="object"&&!Array.isArray(n)&&(Yi in n||Xi in n||Zi in n||Dg in n);function CA(){const n="mde.demo.v1";let e={};try{e=JSON.parse(localStorage.getItem(n)||"{}")}catch{e={}}const t=()=>{try{localStorage.setItem(n,JSON.stringify(e))}catch{}},r=new Map,s=new Set,i={uid:"demo-user",email:"demo@mundodeestrelas.app",name:"Família Demonstração",verified:!0,provider:"demo"},o=b=>b.split("/").pop(),a=b=>b.split("/").slice(0,-1).join("/"),l=b=>({id:o(b),exists:b in e,data:e[b]?JSON.parse(JSON.stringify(e[b])):{}}),h=(b,R)=>R.every(([k,N,O])=>{const U=kA(b,k);return N==="=="?U===O:N===">="?U>=O:N==="<="?U<=O:Array.isArray(U)&&U.includes(O)}),f=(b,R)=>Object.keys(e).filter(k=>a(k)===b&&h(e[k],R)).map(l),m=b=>{queueMicrotask(()=>{b.forEach(R=>{var k;return(k=r.get(R))==null?void 0:k.forEach(N=>N(l(R)))}),s.forEach(R=>{[...b].some(k=>a(k)===R.path)&&R.cb(f(R.path,R.filters))})})},_=(b,R,k)=>{for(const[N,O]of Object.entries(R)){const U=k?N.split("."):[N];let M=b;for(const $ of U.slice(0,-1))(typeof M[$]!="object"||M[$]===null)&&(M[$]={}),M=M[$];const q=U[U.length-1];if(PA(O)){const $=O;if(Yi in $)M[q]=(Number(M[q])||0)+$[Yi];else if(Xi in $){const T=Array.isArray(M[q])?M[q]:[];M[q]=[...T,...$[Xi].filter(v=>!T.includes(v))]}else Zi in $?M[q]=(Array.isArray(M[q])?M[q]:[]).filter(T=>!$[Zi].includes(T)):delete M[q]}else O&&typeof O=="object"&&!Array.isArray(O)&&!k?(M[q]=typeof M[q]=="object"&&M[q]?M[q]:{},_(M[q],O,!1)):M[q]=JSON.parse(JSON.stringify(O))}},y=new Set;return{demo:!0,onAuth:b=>(y.add(b),queueMicrotask(()=>b(i)),()=>y.delete(b)),signInGoogle:async()=>{},signInEmail:async()=>{},signUpEmail:async()=>{},resendVerification:async()=>{},resetPassword:async()=>{},reloadUser:async()=>{},signOut:async()=>{try{localStorage.removeItem(n)}catch{}location.reload()},get:async b=>l(b),watchDoc:(b,R)=>(r.has(b)||r.set(b,new Set),r.get(b).add(R),queueMicrotask(()=>R(l(b))),()=>{var k;return(k=r.get(b))==null?void 0:k.delete(R)}),watchCol:(b,R,k)=>{const N={path:b,filters:R,cb:k};return s.add(N),queueMicrotask(()=>k(f(b,R))),()=>s.delete(N)},queryOnce:async(b,R)=>f(b,R),write:async b=>{const R=new Set;for(const k of b){if(k.kind==="delete")delete e[k.path];else if(k.kind==="set")(!k.merge||!e[k.path])&&(e[k.path]={}),_(e[k.path],k.data,!1);else{if(!e[k.path])throw Object.assign(new Error("not-found"),{code:"not-found"});_(e[k.path],k.data,!0)}R.add(k.path)}t(),m(R)},fv:{inc:b=>({[Yi]:b}),union:(...b)=>({[Xi]:b}),remove:(...b)=>({[Zi]:b}),del:()=>({[Dg]:!0})},newId:kg}}function kA(n,e){return e.split(".").reduce((t,r)=>t==null?void 0:t[r],n)}const uf=n=>String(n).padStart(2,"0");function ql(n=new Date){return`${n.getFullYear()}-${uf(n.getMonth()+1)}-${uf(n.getDate())}`}function Gn(n){const[e,t,r]=n.split("-").map(Number);return new Date(e,t-1,r)}function DA(n,e){const t=Gn(n);return t.setDate(t.getDate()+e),ql(t)}function zl(n,e){return Math.round((Gn(e).getTime()-Gn(n).getTime())/864e5)}let Vg=null;function VA(n){Vg=n&&/^\d{4}-\d{2}-\d{2}$/.test(n)?n:null}const Kl=()=>Vg||ql(),NA=["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],xA=["domingo","segunda","terça","quarta","quinta","sexta","sábado"];function un(n,e=!1){const t=Gn(n);return(e?xA[t.getDay()]+", ":"")+`${t.getDate()} de ${NA[t.getMonth()]}`}function Ng(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function OA(n){let e=n||1;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function kr(n,e,t){if(!n.length)return;const r=n.length,s=Math.floor(Gn(t).getTime()/864e5),i=Math.floor(s/r),o=(s%r+r)%r,a=OA(Ng(e+":"+i)),l=[...Array(r).keys()];for(let h=r-1;h>0;h--){const f=Math.floor(a()*(h+1));[l[h],l[f]]=[l[f],l[h]]}return n[l[o]]}async function Gl(n){const e=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(n));return[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")}const xg=()=>[...crypto.getRandomValues(new Uint8Array(8))].map(n=>n.toString(16).padStart(2,"0")).join("");function Fs(n,e=Kl()){if(!n)return 8;const t=Gn(n),r=Gn(e);let s=r.getFullYear()-t.getFullYear();return(r.getMonth()<t.getMonth()||r.getMonth()===t.getMonth()&&r.getDate()<t.getDate())&&s--,Math.max(0,s)}function Og(n){return n<=4?0:n<=7?1:n<=10?2:n<=13?3:4}function MA(n){return n<=6?"p":n<=11?"m":"g"}function Dr(n,e){return n.replace(/\{([^|{}]*)\|([^|{}]*)\}/g,(t,r,s)=>e==="f"?s:r)}function LA(n){return n.trim().split(/\s+/).slice(0,2).map(e=>{var t;return((t=e[0])==null?void 0:t.toUpperCase())||""}).join("")}function FA(n,e,t="application/json"){const r=document.createElement("a");r.href=URL.createObjectURL(new Blob([e],{type:t})),r.download=n,document.body.appendChild(r),r.click(),setTimeout(()=>{URL.revokeObjectURL(r.href),r.remove()},500)}function UA(n,e=240){return new Promise((t,r)=>{const s=new Image,i=URL.createObjectURL(n);s.onload=()=>{const o=document.createElement("canvas");o.width=o.height=e;const a=o.getContext("2d"),l=Math.min(s.width,s.height);a.drawImage(s,(s.width-l)/2,(s.height-l)/2,l,l,0,0,e,e),URL.revokeObjectURL(i),t(o.toDataURL("image/jpeg",.8))},s.onerror=()=>{URL.revokeObjectURL(i),r(new Error("imagem inválida"))},s.src=i})}const Di=new Map;function Ut(n){return Di.has(n)||Di.set(n,fetch($l+n,{cache:"no-cache"}).then(e=>{if(!e.ok)throw new Error(`${n}: ${e.status}`);return e.json()}).catch(e=>{throw Di.delete(n),e})),Di.get(n)}const So=n=>$l+n,Oe=(n,e)=>`${$l}seasons/${n}/${e}`,Wl=()=>Ut("seasons/index.json"),Zo=n=>Ut(`seasons/${n}/season.json`);async function BA(n){try{return(await J.get(`contentOverrides/${n}`)).data.slots||{}}catch{return{}}}const Mg=()=>Ut("noite/natal.json"),jA=()=>Ut("noite/mensagens.json"),$A=()=>Ut("noite/oracoes.json"),qA=()=>Ut("advento/advento.json"),zA=()=>Ut("desafios/desafios.json"),KA=()=>Ut("calma/calma.json"),GA=()=>Ut("modelos.json");function _t(n,e=[]){const[t,r]=j(null);return at(()=>{let s=!0;return n().then(i=>s&&r(i)).catch(i=>console.error(i)),()=>{s=!1}},e),t}const nt={get(n){try{return localStorage.getItem(n)}catch{return null}},set(n,e){try{e==null?localStorage.removeItem(n):localStorage.setItem(n,e)}catch{}}},Lg=(()=>{const n=new URLSearchParams(location.search);n.get("demo")==="1"&&nt.set("mde.mode","demo"),n.get("demo")==="0"&&nt.set("mde.mode",null);const e=nt.get("mde.mode")==="demo";if(e){const t=n.get("hoje");t!==null&&nt.set("mde.hoje",t||null),VA(nt.get("mde.hoje"))}return e})(),J=Lg?CA():RA();let xe={ready:!1,demo:Lg,user:null,today:Kl(),families:[],invites:[],familiesLoaded:!1,familyId:nt.get("mde.family"),family:null,children:[],items:[],entries:[],requests:[],progress:{},season:null,slots:{},ui:{kidMode:nt.get("mde.kidMode")==="1",kidId:nt.get("mde.kidId"),adminUntil:0,child:nt.get("mde.child"),tab:"hoje",screen:null},toast:null,error:null,offline:!navigator.onLine};const Sc=new Set;let Rc=0;const se=()=>xe;function pe(n){const e=typeof n=="function"?n(xe):n;xe={...xe,...e},Rc++,Sc.forEach(t=>t())}function Se(n){pe(e=>({ui:{...e.ui,...n}})),"kidMode"in n&&nt.set("mde.kidMode",n.kidMode?"1":null),"kidId"in n&&nt.set("mde.kidId",n.kidId||null),"child"in n&&nt.set("mde.child",n.child||null)}function Z(){const[,n]=j(0),e=Rc;return at(()=>{const t=()=>n(r=>r+1);return Sc.add(t),Rc!==e&&t(),()=>{Sc.delete(t)}},[]),xe}let hf;function ot(n,e){clearTimeout(hf),pe({toast:{text:n,kind:e,id:Date.now()}}),hf=setTimeout(()=>pe({toast:null}),e==="error"?6e3:3200)}function Fg(n,e="Não foi possível salvar"){console.error(n);const t=(n==null?void 0:n.code)||"",r=t.includes("permission")?"sem permissão (as regras do banco já foram publicadas?)":t.includes("unavailable")?"sem conexão; tente de novo":(n==null?void 0:n.message)||String(n);ot(`${e}: ${r}`,"error")}let Vi=[],hr=[];function Hl(){hr.forEach(n=>n()),hr=[]}function WA(n){Hl();const e=`families/${n}`,t=r=>{console.error(r),pe({error:(r==null?void 0:r.code)||String(r)})};hr.push(J.watchDoc(e,r=>{var o,a,l;if(!r.exists){pe({family:null});return}const s={id:r.id,...r.data},i=(a=(o=xe.family)==null?void 0:o.season)==null?void 0:a.runId;pe({family:s}),((l=s.season)==null?void 0:l.runId)!==i&&HA(n,s)},t)),hr.push(J.watchCol(`${e}/children`,[],r=>{const s=r.map(o=>({id:o.id,...o.data})).sort((o,a)=>o.order-a.order||o.name.localeCompare(a.name)),i={children:s};!s.find(o=>o.id===xe.ui.child)&&s[0]&&(i.ui={...xe.ui,child:s[0].id}),pe(i)},t)),hr.push(J.watchCol(`${e}/items`,[],r=>pe({items:r.map(s=>({id:s.id,...s.data})).sort((s,i)=>s.order-i.order)}),t)),Ug(n),hr.push(J.watchCol(`${e}/requests`,[["status","==","pending"]],r=>pe({requests:r.map(s=>({id:s.id,...s.data})).sort((s,i)=>s.at-i.at)}),t))}let Ni=null;function Ug(n){Ni==null||Ni();const e=DA(xe.today,-7);Ni=J.watchCol(`families/${n}/entries`,[["day",">=",e]],t=>pe({entries:t.map(r=>({id:r.id,...r.data})).sort((r,s)=>r.at-s.at)}))}let is=null;async function HA(n,e){if(is==null||is(),is=null,!e.season){pe({season:null,progress:{}});return}const t=e.season;is=J.watchCol(`families/${n}/progress`,[["runId","==",t.runId]],r=>{const s={};r.forEach(i=>{const o={id:i.id,...i.data};s[o.child]=o}),pe({progress:s})});try{const[r,s]=await Promise.all([Zo(t.seasonId),BA(t.seasonId)]);pe({season:r,slots:s})}catch(r){console.error(r),pe({error:"Não foi possível carregar a temporada."})}}function Us(n){nt.set("mde.family",n),pe({familyId:n,family:null,children:[],items:[],entries:[],requests:[],progress:{},season:null}),n?WA(n):Hl()}function QA(){J.onAuth(n=>{if(Vi.forEach(t=>t()),Vi=[],!n){Hl(),pe({user:null,ready:!0,families:[],invites:[],familiesLoaded:!1,family:null});return}pe({user:n,ready:!0});let e=!1;Vi.push(J.watchCol("families",[["memberIds","array-contains",n.uid]],t=>{var s,i;const r=t.map(o=>({id:o.id,...o.data}));if(pe({families:r,familiesLoaded:!0}),e)xe.familyId&&!r.find(o=>o.id===xe.familyId)&&Us(((i=r[0])==null?void 0:i.id)||null);else{e=!0;const o=xe.familyId&&r.find(a=>a.id===xe.familyId)?xe.familyId:((s=r[0])==null?void 0:s.id)||null;Us(o)}},t=>{console.error(t),pe({familiesLoaded:!0,error:(t==null?void 0:t.code)||String(t)})})),n.email&&n.verified&&Vi.push(J.watchCol("families",[["invites","array-contains",n.email]],t=>pe({invites:t.map(r=>({id:r.id,...r.data}))}),()=>{}))}),setInterval(()=>{const n=Kl();n!==xe.today&&(pe({today:n}),xe.familyId&&Ug(xe.familyId))},3e4),addEventListener("online",()=>pe({offline:!1})),addEventListener("offline",()=>pe({offline:!0}))}const df={dailyGoalPct:70,perfectBonus:5,kidMarks:"pedido",pinHash:"",pinSalt:"",modules:{christian:!0,english:!0,calm:!0,advent:!0,challenges:!0}},Me=n=>{var e;return{...df,...(n==null?void 0:n.settings)||{},modules:{...df.modules,...((e=n==null?void 0:n.settings)==null?void 0:e.modules)||{}}}},Bs=(n,e,t)=>n.filter(r=>{var s;return r.active!==!1&&r.kind===t&&(!((s=r.kids)!=null&&s.length)||r.kids.includes(e))}),Ql=(n,e,t)=>n.filter(r=>r.child===e&&r.day===t&&!r.undone);function hn(n,e,t,r,s){const i=Bs(e,r,"task"),o=Ql(t,r,s),a=new Set(o.filter(_=>_.kind==="task"&&_.itemId).map(_=>_.itemId)),l=i.reduce((_,y)=>_+y.stars,0),h=i.filter(_=>a.has(_.id)).reduce((_,y)=>_+y.stars,0),f=l?Math.round(h/l*100):0,m=Me(n).dailyGoalPct;return{tasks:i,done:a,earned:h,total:l,pct:f,goalMet:l>0&&f>=m,allDone:i.length>0&&i.every(_=>a.has(_.id)),dayStars:o.reduce((_,y)=>_+y.stars,0)}}const JA=(n,e)=>zl(n.startDay,e)+1,Pc=(n,e)=>e>n.endDay,Cc=n=>n.items.filter(e=>e.kind==="daily"),YA=n=>n.items.filter(e=>e.kind==="milestone").sort((e,t)=>(e.milestone||0)-(t.milestone||0));function ri(n,e,t){const r=Bs(n,e,"task").reduce((i,o)=>i+o.stars,0)||20,s=zl(t.startDay,t.endDay)+1;return Math.max(60,Math.round(r*s*.75/10)*10)}const Bg=(n,e,t,r)=>(n==null?void 0:n.goal)||ri(e,t,r);function Jl(n,e,t,r,s,i,o){var U;const a=new Set(Object.keys((t==null?void 0:t.unlocked)||{})),l=Cc(n),h=(U=Object.entries((t==null?void 0:t.unlocked)||{}).find(([M,q])=>q.day===o&&l.some($=>$.id===M)))==null?void 0:U[0],f=h&&l.find(M=>M.id===h)||null,m=l.find(M=>!a.has(M.id))||null,_=JA(e,o),y=l.filter(M=>a.has(M.id)).length,b=Bg(t,s,i,e),R=(t==null?void 0:t.seasonStars)||0,k=YA(n).map((M,q)=>{const $=Math.round(b*(n.milestoneFractions[q]??1));return{item:M,at:$,reached:R>=$}}),N=k.find(M=>!M.reached);let O="";return _<1?O="A temporada ainda não começou.":Pc(e,o)?O="A temporada terminou.":f?O="A peça de hoje já foi conquistada.":m?y>=_?O="Amanhã chega uma peça nova.":r.goalMet||(O=r.total?"Falta completar a rotina de hoje.":"A rotina ainda não tem tarefas."):O="Todas as peças já foram conquistadas.",{unlocked:a,claimedToday:f,next:m,canClaim:!O,blockedReason:O,seasonStars:R,goal:b,milestones:k,nextMilestone:N?{item:N.item,at:N.at,need:N.at-R}:null,dayN:_,dailyCount:y}}const jg=(n,e)=>n.items.filter(t=>{var r;return t.kind==="daily"?e.unlocked.has(t.id):(r=e.milestones.find(s=>s.item.id===t.id))==null?void 0:r.reached}),XA=(n,e)=>MA(Fs(n.birth,e)),ZA=(n,e)=>Math.max(0,Math.min(4,Og(Fs(n.birth,e))+((n.maturity||2)-2))),Ke=()=>{const n=se().family;if(!n)throw new Error("Nenhuma família selecionada");return n},Ce=n=>`families/${Ke().id}/${n}`,$g=()=>{var n;return se().ui.kidMode?"kid":((n=se().user)==null?void 0:n.uid)||"?"},Yl=()=>{var n;return AA.includes(((n=se().user)==null?void 0:n.email)||"")||se().demo};async function oe(n,e,t){try{return await J.write(n),e&&ot(e),!0}catch(r){return Fg(r,t),!1}}function dn(n,e,t){const r=Ke(),s=[],i={balance:J.fv.inc(e)};e>0&&(i.lifetime=J.fv.inc(e)),s.push({kind:"update",path:Ce(`children/${n}`),data:i});const o=r.season;return t&&e>0&&o&&se().today>=o.startDay&&se().today<=o.endDay&&s.push({kind:"set",merge:!0,path:Ce(`progress/${o.runId}_${n}`),data:{runId:o.runId,child:n,seasonId:o.seasonId,seasonStars:J.fv.inc(e)}}),s}function fn(n){var s;const e=J.newId(),t=Ke(),r={...n,day:n.day||se().today,at:Date.now(),by:$g()};return(s=t.season)!=null&&s.runId&&(r.runId=t.season.runId),{id:e,op:{kind:"set",path:Ce(`entries/${e}`),data:r}}}const ja=new Set;async function js(n,e,t){const r=se();if(e.kind==="task"){const o=`${n}:${e.id}:${r.today}`;if(ja.has(o)||hn(r.family,r.items,r.entries,n,r.today).done.has(e.id))return!0;ja.add(o),setTimeout(()=>ja.delete(o),1500)}const s=e.kind==="bad"?-Math.abs(e.stars):Math.abs(e.stars),i=[fn({child:n,kind:e.kind,itemId:e.id,label:e.label,emoji:e.emoji,stars:s}).op,...dn(n,s,!0)];if(e.kind==="task"){const o=hn(r.family,r.items,r.entries,n,r.today),a=o.tasks.length>0&&o.tasks.every(f=>f.id===e.id||o.done.has(f.id)),l=r.entries.some(f=>f.child===n&&f.day===r.today&&f.kind==="bonus"&&!f.undone),h=Me(r.family).perfectBonus;a&&!l&&h>0&&(i.push(fn({child:n,kind:"bonus",label:"Rotina completa",emoji:"🌟",stars:h}).op,...dn(n,h,!0)),setTimeout(()=>ot(`Rotina completa! +${h} de bônus`),400))}return oe(i)}async function qg(n){const e=se(),t=[{kind:"update",path:Ce(`entries/${n.id}`),data:{undone:!0}},...ff(n)];if(n.kind==="task"){const r=e.entries.find(s=>s.child===n.child&&s.day===n.day&&s.kind==="bonus"&&!s.undone);r&&t.push({kind:"update",path:Ce(`entries/${r.id}`),data:{undone:!0}},...ff(r))}return oe(t,"Desfeito")}function ff(n){var s;const e=Ke(),t=[],r={balance:J.fv.inc(-n.stars)};return n.stars>0&&(r.lifetime=J.fv.inc(-n.stars)),t.push({kind:"update",path:Ce(`children/${n.child}`),data:r}),n.stars>0&&n.runId&&((s=e.season)==null?void 0:s.runId)===n.runId&&t.push({kind:"set",merge:!0,path:Ce(`progress/${n.runId}_${n.child}`),data:{runId:n.runId,child:n.child,seasonId:e.season.seasonId,seasonStars:J.fv.inc(-n.stars)}}),t}async function eS(n,e,t){return oe([fn({child:n,kind:"adjust",label:t||"Ajuste",emoji:e>=0?"➕":"➖",stars:e}).op,...dn(n,e,!1)],"Ajuste registrado")}async function zg(n,e,t,r,s,i){return oe([fn({child:n,kind:e,label:t,emoji:r,stars:s}).op,...dn(n,s,!0)],i)}async function tS(n,e){return(n.balance||0)<e.stars?(ot(`Faltam ${e.stars-(n.balance||0)} estrelas para ${e.label}`),!1):oe([fn({child:n.id,kind:"reward",itemId:e.id,label:e.label,emoji:e.emoji,stars:-e.stars}).op,...dn(n.id,-e.stars,!1)],`${e.label} trocado!`)}async function Xl(n,e,t,r,s,i){const o=se();if(o.requests.some(h=>h.child===n&&h.label===t&&h.day===o.today))return ot("Esse pedido já está esperando um adulto"),!1;const a=J.newId(),l={child:n,kind:e,label:t,emoji:r,stars:s,day:o.today,at:Date.now(),status:"pending"};return i&&(l.itemId=i),oe([{kind:"set",path:Ce(`requests/${a}`),data:l}],"Pedido enviado para um adulto")}async function mf(n,e){var s;const t=se(),r={kind:"update",path:Ce(`requests/${n.id}`),data:{status:e?"ok":"no",resolvedAt:Date.now(),resolvedBy:((s=t.user)==null?void 0:s.uid)||""}};if(!e)return oe([r],"Pedido recusado");if(n.kind==="task"){const i=t.items.find(o=>o.id===n.itemId);return i?(await oe([r]),js(n.child,i)):oe([r])}if(n.kind==="reward"){const i=t.children.find(a=>a.id===n.child),o=t.items.find(a=>a.id===n.itemId);return!i||!o?oe([r]):(i.balance||0)<o.stars?(ot("Saldo insuficiente para esse prêmio"),!1):oe([r,fn({child:n.child,kind:"reward",itemId:o.id,label:o.label,emoji:o.emoji,stars:-o.stars}).op,...dn(n.child,-o.stars,!1)],"Prêmio liberado")}return oe([r,fn({child:n.child,kind:"challenge",label:n.label,emoji:n.emoji,stars:n.stars}).op,...dn(n.child,n.stars,!0)],"Desafio aprovado")}async function nS(n,e){const r=Ke().season;return oe([{kind:"set",merge:!0,path:Ce(`progress/${r.runId}_${n}`),data:{runId:r.runId,child:n,seasonId:r.seasonId,unlocked:{[e]:{at:Date.now(),day:se().today}}}}])}async function pf(n,e){const t=Ke();t.season&&await J.write([{kind:"set",merge:!0,path:Ce(`progress/${t.season.runId}_${n}`),data:{runId:t.season.runId,child:n,seasonId:t.season.seasonId,seenMilestones:e}}]).catch(()=>{})}async function rS(n,e,t,r){const s=se(),i=`${s.today.slice(0,4)}-${String(n).padStart(2,"0")}`,o=[{kind:"set",path:Ce(`advent/${i}`),data:{n,at:Date.now(),by:$g()}}];return s.children.forEach(a=>o.push(fn({child:a.id,kind:"advent",label:`Advento: ${t}`,emoji:r,stars:e}).op,...dn(a.id,e,!0))),oe(o,`Portinha ${n} aberta! +${e} para cada criança`)}async function sS(n){const e=n.id||J.newId(),t={emoji:n.emoji||"⭐",label:n.label||"",stars:Math.max(0,Math.round(n.stars||0)),kind:n.kind,period:n.period||"livre",kids:n.kids||[],order:n.order??Date.now(),active:n.active!==!1};return oe([{kind:"set",path:Ce(`items/${e}`),data:t}],"Salvo")}const iS=n=>oe([{kind:"update",path:Ce(`items/${n}`),data:{active:!1}}],"Removido"),oS=n=>oe(n.map((e,t)=>({kind:"update",path:Ce(`items/${e}`),data:{order:t}})));function aS(n,e,t){const r=[];let s=0;for(const i of e){const o=i.bands?t.filter(l=>i.bands.includes(l.band)).map(l=>l.id):[];if(i.bands&&!o.length)continue;const a=!i.bands||o.length===t.length;r.push({kind:"set",path:`families/${n}/items/${J.newId()}`,data:{kind:i.kind,emoji:i.emoji,label:i.label,stars:i.stars,period:i.period||"livre",kids:a?[]:o,order:s++,active:!0}})}return r}async function cS(n){const e=Ke(),t=!n.id,r=n.id||J.newId(),s={name:n.name.trim(),birth:n.birth||"",gender:n.gender||"x",color:n.color||"#8E2C2C",maturity:n.maturity||2,english:n.english!==!1};n.photo!==void 0&&(s.photo=n.photo||"");const i=[];return t?(Object.assign(s,{balance:0,lifetime:0,order:se().children.length}),i.push({kind:"set",path:Ce(`children/${r}`),data:s})):i.push({kind:"update",path:Ce(`children/${r}`),data:s}),t&&e.season&&i.push(Zl(e.id,e.season,r,ri(se().items,r,e.season))),oe(i,"Salvo")}const lS=n=>oe([{kind:"delete",path:Ce(`children/${n}`)}],"Criança removida"),Zl=(n,e,t,r)=>({kind:"set",merge:!0,path:`families/${n}/progress/${e.runId}_${t}`,data:{runId:e.runId,child:t,seasonId:e.seasonId,goal:r,seasonStars:J.fv.inc(0),unlocked:{},seenMilestones:0}}),uS=(n,e)=>{const t=Ke();return oe([{kind:"set",merge:!0,path:Ce(`progress/${t.season.runId}_${n}`),data:{runId:t.season.runId,child:n,seasonId:t.season.seasonId,goal:e}}],"Meta atualizada")};async function Is(n){const e={};for(const[t,r]of Object.entries(n))e[`settings.${t}`]=r;return oe([{kind:"update",path:`families/${Ke().id}`,data:e}],"Configuração salva")}async function hS(n){const e=xg();return Is({pinSalt:e,pinHash:await Gl(e+n)})}async function Kg(n){const e=Me(Ke());return e.pinHash?await Gl(e.pinSalt+n)===e.pinHash:!0}const dS=n=>oe([{kind:"update",path:`families/${Ke().id}`,data:{name:n.trim()}}],"Nome salvo"),fS=n=>oe([{kind:"update",path:`families/${Ke().id}`,data:{invites:J.fv.union(n.trim().toLowerCase())}}],"Convite criado"),mS=n=>oe([{kind:"update",path:`families/${Ke().id}`,data:{invites:J.fv.remove(n)}}]);async function pS(n){return oe([{kind:"update",path:`families/${Ke().id}`,data:{[`members.${n}`]:J.fv.del(),memberIds:J.fv.remove(n)}}],"Responsável removido")}async function gS(n){const e=se().user;await oe([{kind:"update",path:`families/${n.id}`,data:{[`members.${e.uid}`]:{role:"parent",email:e.email,name:e.name||e.email},memberIds:J.fv.union(e.uid),invites:J.fv.remove(e.email)}}],`Você entrou na família ${n.name}`)&&Us(n.id)}async function Gg(n){const e=se(),t=e.user,r=J.newId(),s=xg(),i=await Zo(n.seasonId),o=Wg(i,e.today,n.startNow),a={...Me(null),pinSalt:n.pin?s:"",pinHash:n.pin?await Gl(s+n.pin):"",modules:n.modules},l=[{kind:"set",path:`families/${r}`,data:{name:n.name.trim(),owner:t.uid,license:n.license||(e.demo?"DEMO":""),createdAt:Date.now(),members:{[t.uid]:{role:"owner",email:t.email,name:t.name||t.email}},memberIds:[t.uid],invites:[],settings:a,season:o}}];e.demo||l.push({kind:"update",path:`licenses/${n.license}`,data:{usedBy:t.uid,family:r,usedAt:Date.now()}});const h=n.kids.map((_,y)=>({..._,id:J.newId(),order:y})),f=await GA(),m=aS(r,f.items,h.map(_=>({id:_.id,band:_.band})));h.forEach(_=>{l.push({kind:"set",path:`families/${r}/children/${_.id}`,data:{name:_.name.trim(),birth:_.birth,gender:_.gender,color:_.color,maturity:2,english:n.modules.english,balance:0,lifetime:0,order:_.order}});const y=m.filter(R=>R.kind==="set"&&R.data.kind==="task"&&(!R.data.kids.length||R.data.kids.includes(_.id))).reduce((R,k)=>R+k.data.stars,0),b=Math.round((new Date(o.endDay).getTime()-new Date(o.startDay).getTime())/864e5)+1;l.push(Zl(r,o,_.id,Math.max(60,Math.round(y*b*.75/10)*10)))});try{return await J.write(l.slice(0,e.demo?l.length:2)),e.demo||await J.write(l.slice(2)),await J.write(m),Us(r),ot("Família criada! Bem-vindos ao Mundo de Estrelas"),!0}catch(_){return Fg(_,"Não foi possível criar a família"),!1}}function Wg(n,e,t){const r=Number(e.slice(0,4)),s=n.dates.end<n.dates.start;let i="",o="";for(const l of[r-1,r,r+1])if(i=`${l}-${n.dates.start}`,o=`${s?l+1:l}-${n.dates.end}`,e<=o)break;const a=t||e>i?e:i;return{runId:`${n.id}-${a.replace(/-/g,"")}-${Math.random().toString(36).slice(2,6)}`,seasonId:n.id,version:n.version,startDay:a,endDay:o,startedAt:Date.now()}}async function gf(n,e){const t=Ke(),r=se(),s=await Zo(n),i=Wg(s,r.today,e),o=[{kind:"update",path:`families/${t.id}`,data:{season:i}}];return r.children.forEach(a=>o.push(Zl(t.id,i,a.id,ri(r.items,a.id,i)))),oe(o,`Temporada ${s.name} começou!`)}async function _S(n){const e=Ke(),t=se(),r=e.season,s=t.season;if(!r||!s)return!1;const i=[];return t.children.forEach(o=>{const a=t.progress[o.id],l=Object.keys((a==null?void 0:a.unlocked)||{}),h=(a==null?void 0:a.goal)||ri(t.items,o.id,r);s.items.filter(f=>f.kind==="milestone").forEach((f,m)=>{((a==null?void 0:a.seasonStars)||0)>=Math.round(h*(s.milestoneFractions[m]??1))&&l.push(f.id)}),i.push({kind:"set",path:`families/${e.id}/album/${r.runId}_${o.id}`,data:{runId:r.runId,seasonId:r.seasonId,seasonName:s.name,child:o.id,childName:o.name,from:r.startDay,to:t.today<r.endDay?t.today:r.endDay,seasonStars:(a==null?void 0:a.seasonStars)||0,items:l,thumb:n[o.id]||"",createdAt:Date.now()}})}),i.push({kind:"update",path:`families/${e.id}`,data:{season:null,lastSeason:r}}),oe(i,"Temporada guardada no álbum de aventuras")}async function Hg(n,e){var i;const t=[],r=[],s="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";for(let o=0;o<n;o++){const a="MDE-"+Array.from(crypto.getRandomValues(new Uint8Array(8)),l=>s[l%s.length]).join("").replace(/(.{4})(.{4})/,"$1-$2");t.push(a),r.push({kind:"set",path:`licenses/${a}`,data:{createdAt:Date.now(),createdBy:((i=se().user)==null?void 0:i.email)||"",note:e,usedBy:null}})}return await oe(r,`${n} código(s) criado(s)`)?t:[]}const yS=(n,e)=>{var t;return oe([{kind:"set",path:`contentOverrides/${n}`,data:{slots:e,updatedAt:Date.now(),by:((t=se().user)==null?void 0:t.email)||""}}],"Posições salvas para todas as famílias")};function vS(){const n=se();return JSON.stringify({exportedAt:new Date().toISOString(),family:n.family,children:n.children.map(e=>({...e,photo:e.photo?"(foto omitida)":""})),items:n.items,progress:n.progress,recentEntries:n.entries},null,2)}function Nt({child:n,size:e=44,ring:t}){return u("span",{class:"avatar"+(t?" ring":""),style:{width:e,height:e,background:n.color,fontSize:e*.4},children:n.photo?u("img",{src:n.photo,alt:""}):LA(n.name)})}function Wn({n,big:e}){return u("span",{class:"starnum"+(e?" big":""),children:[u("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:u("path",{d:"M12 2.6l2.9 6 6.5.8-4.8 4.5 1.2 6.5L12 17.3l-5.8 3.1 1.2-6.5L2.6 9.4l6.5-.8z"})}),n]})}function Ro({value:n,max:e,label:t,tone:r}){const s=e>0?Math.min(100,Math.round(n/e*100)):0;return u("div",{class:"bar "+(r||""),role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100,"aria-label":t,children:u("span",{style:{width:s+"%"}})})}function Ct({src:n,emoji:e,alt:t,class:r}){const[s,i]=j(null);return at(()=>i(null),[n]),u("span",{class:"art "+(r||""),children:[s!==!1&&u("img",{src:n,alt:t,loading:"lazy",onLoad:()=>i(!0),onError:()=>i(!1),style:s?"":"opacity:0"}),s!==!0&&u("span",{class:"art-emoji","aria-hidden":"true",children:e})]})}function vt({title:n,onClose:e,children:t,wide:r}){const s=Wa(null);return at(()=>{var o;const i=a=>{a.key==="Escape"&&e()};return addEventListener("keydown",i),(o=s.current)==null||o.focus(),()=>removeEventListener("keydown",i)},[]),u("div",{class:"sheet-bg",onClick:i=>{i.target===i.currentTarget&&e()},children:u("div",{class:"sheet"+(r?" wide":""),role:"dialog","aria-modal":"true","aria-label":n,tabIndex:-1,ref:s,children:[u("div",{class:"sheet-head",children:[n&&u("h2",{children:n}),u("button",{class:"icon-btn",onClick:e,"aria-label":"Fechar",children:"✕"})]}),u("div",{class:"sheet-body",children:t})]})})}function Vr({title:n,onDone:e,onCancel:t,error:r}){const[s,i]=j("");at(()=>{s.length===4&&(e(s),setTimeout(()=>i(""),250))},[s]);const o=["1","2","3","4","5","6","7","8","9","","0","⌫"];return u("div",{class:"pinpad",children:[u("h2",{children:n}),u("div",{class:"pin-dots"+(r?" shake":""),children:[0,1,2,3].map(a=>u("span",{class:a<s.length?"on":""}))}),r&&u("p",{class:"err",children:r}),u("div",{class:"pin-keys",children:o.map(a=>a===""?u("span",{}):u("button",{onClick:()=>i(l=>a==="⌫"?l.slice(0,-1):(l+a).slice(0,4)),"aria-label":a==="⌫"?"Apagar":a,children:a}))}),t&&u("button",{class:"link",onClick:t,children:"Cancelar"})]})}function eu({text:n,yes:e="Confirmar",onYes:t,onClose:r,danger:s}){return u(vt,{onClose:r,title:"Confirmar",children:[u("p",{children:n}),u("div",{class:"row end gap",children:[u("button",{class:"btn ghost",onClick:r,children:"Cancelar"}),u("button",{class:"btn "+(s?"danger":"primary"),onClick:()=>{t(),r()},children:e})]})]})}function IS({emoji:n,title:e,children:t}){return u("div",{class:"empty",children:[u("div",{class:"empty-emo",children:n}),u("h3",{children:e}),t]})}function he({label:n,children:e,hint:t}){return u("label",{class:"field",children:[u("span",{class:"field-label",children:n}),e,t&&u("span",{class:"hint",children:t})]})}const eo=["#8E2C2C","#2F5D4A","#C9A24A","#1F2E4A","#7A4E8C","#C2603A","#3E7CA6","#B5476B"];function Qg({value:n,onChange:e}){return u("div",{class:"colors",children:eo.map(t=>u("button",{type:"button",class:t===n?"on":"",style:{background:t},onClick:()=>e(t),"aria-label":"Cor "+t}))})}const wS=["⭐","🛏️","🪥","👕","🎒","📚","✏️","🧸","🍽️","🥦","🚿","🧹","🐶","🌱","🙏","📖","🎹","⚽","🧩","💤","🤝","💬","🫶","😊","🗣️","😤","📱","🎮","🍦","🎬","🍕","🛝","🎨","🏊","🎁","🧁","🚲","🏕️","🎟️","🕹️","💰","🌙","☀️","🧺","🍳","🧦","👟","💧"];function ES({value:n,onChange:e}){const[t,r]=j(!1);return u("div",{class:"emoji-pick",children:[u("button",{type:"button",class:"emoji-btn",onClick:()=>r(!t),"aria-label":"Escolher ícone",children:n||"⭐"}),t&&u("div",{class:"emoji-grid",children:[wS.map(s=>u("button",{type:"button",onClick:()=>{e(s),r(!1)},children:s})),u("input",{class:"emoji-own",placeholder:"outro",maxLength:4,onInput:s=>{const i=s.target.value;i&&e(i)}})]})]})}const TS=n=>{const e=(n==null?void 0:n.code)||"";return e.includes("invalid-credential")||e.includes("wrong-password")||e.includes("user-not-found")?"E-mail ou senha incorretos.":e.includes("email-already-in-use")?'Já existe uma conta com esse e-mail. Use "Entrar".':e.includes("weak-password")?"A senha precisa ter pelo menos 6 caracteres.":e.includes("invalid-email")?"E-mail inválido.":e.includes("popup-closed")||e.includes("cancelled-popup")?"":e.includes("too-many-requests")?"Muitas tentativas. Espere alguns minutos.":e.includes("network")?"Sem conexão com a internet.":(n==null?void 0:n.message)||String(n)};function bS(){const[n,e]=j("start"),[t,r]=j(""),[s,i]=j(""),[o,a]=j(""),[l,h]=j(!1),f=_t(Wl),m=f==null?void 0:f.find(R=>R.cover),[_,y]=j(!1),b=async R=>{a(""),h(!0);try{await R()}catch(k){a(TS(k))}h(!1)};return u("div",{class:"login",children:[m&&u("img",{class:"login-cover"+(_?" on":""),src:Oe(m.id,m.cover),alt:`${lf}: pequenas atitudes, grandes conquistas, infinitos mundos.`,onLoad:()=>y(!0),onError:()=>y(!1)}),!_&&u("div",{class:"login-hero",children:[u("div",{class:"brand-mark","aria-hidden":"true",children:"✦"}),u("h1",{children:lf}),u("p",{class:"tagline",children:"Pequenas atitudes, grandes conquistas, infinitos mundos."})]}),u("div",{class:"card login-card",children:[n==="start"&&u(Re,{children:[u("button",{class:"btn primary block",disabled:l,onClick:()=>b(()=>J.signInGoogle()),children:"Entrar com Google"}),u("button",{class:"btn ghost block",onClick:()=>e("in"),children:"Entrar com e-mail"}),u("button",{class:"btn ghost block",onClick:()=>e("up"),children:"Criar conta com e-mail"})]}),n!=="start"&&u("form",{onSubmit:R=>{R.preventDefault(),b(()=>n==="in"?J.signInEmail(t,s):J.signUpEmail(t,s))},children:[u("h2",{children:n==="in"?"Entrar":"Criar conta"}),u("label",{class:"field",children:[u("span",{class:"field-label",children:"E-mail"}),u("input",{type:"email",autocomplete:"email",required:!0,value:t,onInput:R=>r(R.target.value)})]}),u("label",{class:"field",children:[u("span",{class:"field-label",children:"Senha"}),u("input",{type:"password",autocomplete:n==="in"?"current-password":"new-password",minLength:6,required:!0,value:s,onInput:R=>i(R.target.value)})]}),u("button",{class:"btn primary block",disabled:l,children:n==="in"?"Entrar":"Criar conta"}),n==="in"&&u("button",{type:"button",class:"link",onClick:()=>b(async()=>{if(!t)throw new Error("Digite seu e-mail primeiro.");await J.resetPassword(t),ot("Enviamos um link para redefinir a senha")}),children:"Esqueci a senha"}),u("button",{type:"button",class:"link",onClick:()=>{e("start"),a("")},children:"Voltar"})]}),o&&u("p",{class:"err",children:o})]}),u("p",{class:"login-foot",children:u("a",{href:"?demo=1",class:"link",children:"Ver demonstração sem conta"})})]})}function AS(){var r;const n=se(),[e,t]=j(!1);return u("div",{class:"login",children:u("div",{class:"card login-card",children:[u("h2",{children:"Confirme seu e-mail"}),u("p",{children:["Enviamos um link para ",u("b",{children:(r=n.user)==null?void 0:r.email}),". Abra o e-mail, clique no link e volte aqui."]}),u("button",{class:"btn primary block",disabled:e,onClick:async()=>{t(!0),await J.reloadUser(),location.reload()},children:"Já confirmei"}),u("button",{class:"btn ghost block",onClick:async()=>{await J.resendVerification(),ot("E-mail reenviado")},children:"Reenviar e-mail"}),u("button",{class:"link",onClick:()=>J.signOut(),children:"Sair"})]})})}const SS=[["christian","Conteúdo cristão","Histórias bíblicas, orações e mensagens de Jesus na noite."],["advent","Calendário do Advento","24 portinhas em dezembro, com uma atividade em família."],["english","Palavras em inglês","Cada peça da temporada traz uma palavra e uma frase."],["calm","Cantinho da calma","Respiração guiada e ideias para quando a emoção aperta."],["challenges","Desafios do dia","Um desafio por dia, de acordo com a idade."]];function RS(){var r;const n=Z(),[e,t]=j(!1);return e?u(PS,{onCancel:()=>t(!1)}):u("div",{class:"page narrow",children:[u("header",{class:"welcome-head",children:[u("div",{class:"brand-mark",children:"✦"}),u("h1",{children:"Bem-vindos!"}),u("p",{class:"muted",children:(r=n.user)==null?void 0:r.email})]}),n.invites.map(s=>u("div",{class:"card",children:[u("h3",{children:["Convite para a família ",s.name]}),u("p",{class:"muted",children:"Você foi convidado para acompanhar as crianças desta família."}),u("button",{class:"btn primary block",onClick:()=>gS(s),children:"Entrar na família"})]})),u("div",{class:"card",children:[u("h3",{children:"Começar uma família nova"}),u("p",{class:"muted",children:n.demo?"Na demonstração você pode criar uma família de exemplo ou montar a sua.":"Você vai precisar do código de licença recebido na compra."}),u("button",{class:"btn primary block",onClick:()=>t(!0),children:"Criar família"}),n.demo&&u("button",{class:"btn ghost block",onClick:()=>Gg({name:"Família Exemplo",license:"DEMO",pin:"1234",seasonId:"vila-natal",startNow:!0,modules:{christian:!0,english:!0,calm:!0,advent:!0,challenges:!0},kids:[{name:"Lia",birth:`${Number(n.today.slice(0,4))-4}-03-10`,gender:"f",color:"#B5476B",band:0},{name:"Theo",birth:`${Number(n.today.slice(0,4))-10}-07-21`,gender:"m",color:"#2F5D4A",band:2},{name:"Bia",birth:`${Number(n.today.slice(0,4))-14}-01-05`,gender:"f",color:"#3E7CA6",band:4}]}),children:"Família de exemplo pronta (PIN 1234)"})]}),u("button",{class:"link",onClick:()=>J.signOut(),children:n.demo?"Sair da demonstração":"Sair"})]})}function PS({onCancel:n}){const e=se(),t=_t(Wl),[r,s]=j(e.demo?1:0),[i,o]=j(""),[a,l]=j(""),[h,f]=j(""),[m,_]=j([]),[y,b]=j({name:"",birth:"",gender:"f",color:eo[0],band:2}),[R,k]=j({christian:!0,english:!0,calm:!0,advent:!0,challenges:!0}),[N,O]=j(""),[U,M]=j(""),[q,$]=j(!1),[T,v]=j(!1),I=t==null?void 0:t[0],E=I?`${e.today.slice(0,4)}-${I.dates.start}`:"",A=E&&e.today<E,P=async()=>{l("");const Q=i.trim().toUpperCase();try{const Le=await J.get(`licenses/${Q}`);if(!Le.exists)return l("Código não encontrado. Confira as letras e os traços.");if(Le.data.usedBy)return l("Este código já foi usado por outra família.");o(Q),s(1)}catch(Le){l("Não foi possível conferir o código agora: "+((Le==null?void 0:Le.code)||Le))}},w=()=>{if(!y.name.trim()||!y.birth)return;const Q=Fs(y.birth,e.today);_([...m,{...y,band:Og(Q)}]),b({name:"",birth:"",gender:"f",color:eo[(m.length+1)%eo.length],band:2})},lt=async Q=>{v(!0),await Gg({name:h,license:i,kids:m,pin:Q,modules:R,seasonId:(I==null?void 0:I.id)||"vila-natal",startNow:q||!A})||v(!1)};return u("div",{class:"page narrow onboarding",children:[u("div",{class:"steps","aria-label":`Passo ${r+1} de 6`,children:[0,1,2,3,4,5].map(Q=>u("span",{class:Q<=r?"on":""}))}),r===0&&u("div",{class:"card",children:[u("h2",{children:"Código da licença"}),u("p",{class:"muted",children:"Cada família usa um código, recebido na compra."}),u(he,{label:"Código",children:u("input",{value:i,placeholder:"MDE-XXXX-XXXX",autocapitalize:"characters",onInput:Q=>o(Q.target.value)})}),a&&u("p",{class:"err",children:a}),Yl()&&u("button",{class:"btn sm ghost",onClick:async()=>{const Q=await Hg(1,"Família da administradora");Q[0]&&o(Q[0])},children:"Gerar um código para mim (administração)"}),u("div",{class:"row gap end",children:[u("button",{class:"btn ghost",onClick:n,children:"Voltar"}),u("button",{class:"btn primary",disabled:i.trim().length<6,onClick:P,children:"Continuar"})]})]}),r===1&&u("div",{class:"card",children:[u("h2",{children:"Como se chama a família?"}),u(he,{label:"Nome da família",hint:"Aparece no topo do app. Ex.: Família Souza",children:u("input",{value:h,maxLength:40,onInput:Q=>f(Q.target.value)})}),u("div",{class:"row gap end",children:[u("button",{class:"btn ghost",onClick:e.demo?n:()=>s(0),children:"Voltar"}),u("button",{class:"btn primary",disabled:!h.trim(),onClick:()=>s(2),children:"Continuar"})]})]}),r===2&&u("div",{class:"card",children:[u("h2",{children:"Crianças e adolescentes"}),u("p",{class:"muted",children:"A idade define a rotina sugerida, os desafios e o jeito dos textos. Tudo pode ser mudado depois."}),m.map((Q,Le)=>u("div",{class:"kid-row",children:[u("span",{class:"dot",style:{background:Q.color}}),u("b",{children:Q.name}),u("span",{class:"muted",children:[Fs(Q.birth,e.today)," anos"]}),u("button",{class:"icon-btn","aria-label":`Remover ${Q.name}`,onClick:()=>_(m.filter((Bt,It)=>It!==Le)),children:"✕"})]})),u("div",{class:"subcard",children:[u(he,{label:"Nome",children:u("input",{value:y.name,maxLength:24,onInput:Q=>b({...y,name:Q.target.value})})}),u(he,{label:"Data de nascimento",children:u("input",{type:"date",value:y.birth,max:e.today,onInput:Q=>b({...y,birth:Q.target.value})})}),u(he,{label:"Os textos devem tratar como",children:u("div",{class:"seg",children:[["f","menina"],["m","menino"],["x","neutro"]].map(([Q,Le])=>u("button",{type:"button",class:y.gender===Q?"on":"",onClick:()=>b({...y,gender:Q}),children:Le}))})}),u(he,{label:"Cor",children:u(Qg,{value:y.color,onChange:Q=>b({...y,color:Q})})}),u("button",{class:"btn block",disabled:!y.name.trim()||!y.birth,onClick:w,children:"Adicionar"})]}),u("div",{class:"row gap end",children:[u("button",{class:"btn ghost",onClick:()=>s(1),children:"Voltar"}),u("button",{class:"btn primary",disabled:!m.length,onClick:()=>s(3),children:"Continuar"})]})]}),r===3&&u("div",{class:"card",children:[u("h2",{children:"O que vai ter no app"}),SS.map(([Q,Le,Bt])=>u("label",{class:"toggle",children:[u("input",{type:"checkbox",checked:R[Q],onChange:It=>k({...R,[Q]:It.target.checked})}),u("span",{children:[u("b",{children:Le}),u("small",{children:Bt})]})]})),u("div",{class:"row gap end",children:[u("button",{class:"btn ghost",onClick:()=>s(2),children:"Voltar"}),u("button",{class:"btn primary",onClick:()=>s(4),children:"Continuar"})]})]}),r===4&&u("div",{class:"card",children:[u("h2",{children:"Primeira temporada"}),I?u(Re,{children:[u("div",{class:"season-pick",children:[I.cover&&u("img",{class:"season-cover",src:Oe(I.id,I.cover),alt:"",onError:Q=>Q.target.style.display="none"}),u("b",{children:I.name}),u("p",{class:"muted",children:I.tagline})]}),A?u(Re,{children:[u("p",{children:["Começa em ",un(E),". Até lá, a rotina e os prêmios já funcionam."]}),u("label",{class:"toggle",children:[u("input",{type:"checkbox",checked:q,onChange:Q=>$(Q.target.checked)}),u("span",{children:[u("b",{children:"Começar a vila hoje"}),u("small",{children:"As peças começam a ser liberadas já, uma por dia."})]})]})]}):u("p",{children:"Começa hoje, com uma peça nova por dia."})]}):u("p",{class:"muted",children:"Carregando temporadas…"}),u("div",{class:"row gap end",children:[u("button",{class:"btn ghost",onClick:()=>s(3),children:"Voltar"}),u("button",{class:"btn primary",disabled:!I,onClick:()=>s(5),children:"Continuar"})]})]}),r===5&&u("div",{class:"card",children:T?u("p",{class:"center",children:"Preparando o mundo de vocês…"}):N?u(Vr,{title:"Repita o PIN",error:U,onDone:Q=>{Q===N?lt(Q):(M("Os PINs não conferem. Comece de novo."),O(""))},onCancel:()=>O("")}):u(Re,{children:[u(Vr,{title:"Crie um PIN de 4 números",error:U,onDone:Q=>{O(Q),M("")}}),u("p",{class:"muted center",children:"O PIN protege a área dos responsáveis e a saída do modo criança."})]})})]})}function CS(n){const[e,t]=j(null);return at(()=>{if(!n){t(null);return}return J.watchDoc(n,t,()=>t(null))},[n]),e}function tu(n){const[e,t]=j(null);return at(()=>{if(!n){t(null);return}return J.watchCol(n,[],t,()=>t([]))},[n]),e}const ea=n=>{const e=se().family;return e?`families/${e.id}/${n}`:null};function nu(){const n=Z();return n.children.length<2?null:u("div",{class:"child-tabs",role:"tablist",children:n.children.map(e=>u("button",{role:"tab","aria-selected":n.ui.child===e.id,class:n.ui.child===e.id?"on":"",onClick:()=>Se({child:e.id}),style:{"--c":e.color},children:[u(Nt,{child:e,size:30}),u("span",{children:e.name}),u(Wn,{n:e.balance||0})]}))})}function Jg({child:n,kid:e}){var f,m;const t=Z(),r=Me(t.family),s=hn(t.family,t.items,t.entries,n.id,t.today),i=(f=t.family)==null?void 0:f.season,o=t.season,a=i&&o?Jl(o,i,t.progress[n.id],s,t.items,n.id,t.today):null,l=Math.ceil(s.total*r.dailyGoalPct/100),h=()=>Se(e?{screen:"mundo"}:{tab:"mundo",screen:null});return u("div",{class:"card daycard",children:[u("div",{class:"daycard-top",children:[u("div",{children:[u("span",{class:"eyebrow",children:"Hoje"}),u("div",{class:"today-stars",children:[u(Wn,{n:s.dayStars,big:!0}),u("span",{class:"muted",children:["no dia · saldo ",n.balance||0]})]})]}),(a==null?void 0:a.next)&&!a.claimedToday&&u(Ct,{class:"mini",src:Oe(o.id,a.next.img),emoji:a.next.emoji,alt:a.next.name}),(a==null?void 0:a.claimedToday)&&u(Ct,{class:"mini",src:Oe(o.id,a.claimedToday.img),emoji:a.claimedToday.emoji,alt:a.claimedToday.name})]}),a&&o&&u(Re,{children:[u("div",{class:"goal-line",children:u("span",{children:a.claimedToday?u(Re,{children:["Peça do dia conquistada: ",u("b",{children:a.claimedToday.name})]}):a.canClaim?u("b",{children:"Peça do dia liberada!"}):s.goalMet?a.blockedReason:u(Re,{children:["Rotina: ",s.earned," de ",l," estrelas para a ",u("b",{children:"peça do dia"})]})})}),u(Ro,{value:s.earned,max:l||1,label:"Rotina do dia",tone:s.goalMet?"gold":""}),a.canClaim&&u("button",{class:"btn primary block glow",onClick:h,children:["Buscar ",(m=a.next)==null?void 0:m.name]}),a.nextMilestone&&u("div",{class:"next-big",onClick:h,children:[u(Ct,{class:"tiny",src:Oe(o.id,a.nextMilestone.item.img),emoji:a.nextMilestone.item.emoji,alt:""}),u("div",{children:[u("span",{class:"eyebrow",children:"Próxima grande conquista"}),u("b",{children:a.nextMilestone.item.name}),u("span",{class:"muted",children:[" · faltam ",a.nextMilestone.need," estrelas"]}),u(Ro,{value:a.seasonStars,max:a.nextMilestone.at,tone:"gold",label:"Próxima grande conquista"})]})]}),!a.nextMilestone&&u("p",{class:"muted small",children:"Todas as grandes conquistas da temporada foram alcançadas!"})]}),!i&&!e&&u("p",{class:"muted small",children:"Nenhuma temporada ativa. Comece uma em Responsáveis → Temporada."})]})}function kS(){const n=Z();return n.requests.length?u("div",{class:"card requests",children:[u("h3",{children:"Pedidos esperando você"}),n.requests.map(e=>{const t=n.children.find(r=>r.id===e.child);return u("div",{class:"req",children:[t&&u(Nt,{child:t,size:30}),u("span",{class:"req-emo",children:e.emoji}),u("span",{class:"req-text",children:[u("b",{children:t==null?void 0:t.name})," ",e.kind==="reward"?"quer trocar por":e.kind==="challenge"?"fez o desafio":"fez"," ",u("b",{children:e.label})," ",u("span",{class:"muted",children:["(",e.kind==="reward"?"−":"+",e.stars,")"]})]}),u("button",{class:"btn sm ghost",onClick:()=>mf(e,!1),"aria-label":"Recusar",children:"Não"}),u("button",{class:"btn sm primary",onClick:()=>mf(e,!0),children:"Sim"})]})})]}):null}const Yg=n=>{const e=Number(n.slice(5,7)),t=Number(n.slice(8,10));return e===12&&t<=24?t:0};function Xg({kid:n}){const e=Z(),t=Yg(e.today),r=CS(t?ea(`advent/${e.today.slice(0,4)}-${String(t).padStart(2,"0")}`):null);return!Me(e.family).modules.advent||!t?null:u("button",{class:"card advent-card",onClick:()=>Se({screen:"advento"}),children:[u("span",{class:"advent-num",children:t}),u("span",{children:[u("span",{class:"eyebrow",children:"Calendário do Advento"}),u("b",{children:r!=null&&r.exists?"Portinha de hoje aberta":"Portinha de hoje esperando"}),u("span",{class:"muted small",children:r!=null&&r.exists?"Toque para rever a história.":n?"Toque para abrir!":"Abram juntos e ganhem estrelas."})]})]})}function Zg(){const n=Z(),e=_t(qA),t=n.today.slice(0,4),r=Yg(n.today),[s,i]=j(r||null),o=DS(t);if(!e)return u("p",{class:"muted center",children:"Carregando…"});const a=s?e.doors[s-1]:null,l=s?o.has(s):!1;return u("div",{class:"page",children:[u("h2",{class:"page-title",children:"Calendário do Advento"}),!r&&u("p",{class:"muted",children:"As portinhas abrem de 1 a 24 de dezembro, uma por dia."}),u("div",{class:"advent-grid",children:e.doors.map((h,f)=>{const m=f+1,_=r>=m;return u("button",{class:"door"+(o.has(m)?" open":"")+(_?"":" locked"),disabled:!_,onClick:()=>i(m),"aria-label":`Portinha ${m}`,children:o.has(m)?u("span",{children:h.emo}):u("span",{children:m})})})}),a&&s&&u(vt,{title:`Portinha ${s}`,onClose:()=>i(null),children:[u(Ct,{class:"wide-art",src:So(`advento/${String(s).padStart(2,"0")}.jpg`),emoji:a.emo,alt:""}),u("h3",{children:a.t}),u("p",{class:"ref",children:a.ref}),u("p",{class:"story",children:a.s}),u("div",{class:"activity",children:[u("span",{class:"eyebrow",children:"Atividade em família"}),u("p",{children:a.a})]}),l?u("p",{class:"muted center",children:"Portinha aberta. As estrelas já foram entregues."}):u("button",{class:"btn primary block",onClick:async()=>{await rS(s,a.pts,a.t,a.emo)},children:["Abrir a portinha · +",a.pts," para cada criança"]})]})]})}function DS(n){const e=tu(ea("advent"));return new Set((e||[]).filter(t=>t.id.startsWith(n)).map(t=>Number(t.id.slice(5))))}function e_({child:n,kid:e}){const t=Z(),r=_t(zA);if(!Me(t.family).modules.challenges||!r)return null;const s=ZA(n,t.today),i=kr(r.lists[s]||[],n.id+":desafio",t.today);if(!i)return null;const o=t.entries.some(f=>f.child===n.id&&f.day===t.today&&f.kind==="challenge"&&!f.undone),a=t.requests.some(f=>f.child===n.id&&f.kind==="challenge"&&f.day===t.today),l=Dr(i.t,n.gender),h=()=>e&&Me(se().family).kidMarks==="pedido"?Xl(n.id,"challenge",l,i.e,i.s):zg(n.id,"challenge",l,i.e,i.s,`Desafio cumprido! +${i.s}`);return u("div",{class:"card challenge"+(o?" done":""),children:[u("span",{class:"challenge-emo",children:i.e}),u("div",{class:"grow",children:[u("span",{class:"eyebrow",children:["Desafio do dia · ",r.bands[s]]}),u("p",{children:l})]}),o?u("span",{class:"pill gold",children:"Feito!"}):a?u("span",{class:"pill",children:"Esperando"}):u("button",{class:"btn sm primary",onClick:h,children:["+",i.s]})]})}const Po=n=>XA(n,se().today),ru=[["manha","Manhã"],["tarde","Tarde"],["noite","Noite"],["livre","Ao longo do dia"]];function VS(){const n=Z(),e=n.children.find(t=>t.id===n.ui.child)||n.children[0];return e?u("div",{class:"page",children:[u(nu,{}),u(kS,{}),u(Jg,{child:e}),u(Xg,{}),u(t_,{child:e}),u(e_,{child:e}),u(NS,{child:e}),u(xS,{child:e})]}):u("div",{class:"page",children:u("p",{class:"muted",children:"Cadastre uma criança em Responsáveis."})})}function t_({child:n,onTap:e}){const t=Z(),r=hn(t.family,t.items,t.entries,n.id,t.today);if(!r.tasks.length)return u("div",{class:"card",children:[u("h3",{children:"Rotina"}),u("p",{class:"muted",children:["Nenhuma tarefa para ",n.name,". Adicione em Responsáveis → Rotina."]})]});const s=a=>Ql(t.entries,n.id,t.today).find(l=>l.kind==="task"&&l.itemId===a),i=e||((a,l)=>{if(l){const h=s(a.id);h&&qg(h)}else js(n.id,a)}),o=new Set(t.requests.filter(a=>a.child===n.id&&a.kind==="task").map(a=>a.itemId));return u("div",{class:"card routine",children:[u("div",{class:"row between",children:[u("h3",{children:"Rotina"}),u("span",{class:"muted small",children:[r.done.size," de ",r.tasks.length]})]}),ru.map(([a,l])=>{const h=r.tasks.filter(f=>(f.period||"livre")===a);return h.length?u("div",{class:"period",children:[u("span",{class:"eyebrow",children:l}),h.map(f=>{const m=r.done.has(f.id);return u("button",{class:"task"+(m?" done":"")+(o.has(f.id)?" pend":""),onClick:()=>i(f,m),"aria-pressed":m,children:[u("span",{class:"check","aria-hidden":"true",children:m?"✓":""}),u("span",{class:"task-emo",children:f.emoji}),u("span",{class:"task-label",children:Dr(f.label,n.gender)}),o.has(f.id)&&!m?u("span",{class:"pill",children:"pedido"}):u("span",{class:"task-stars",children:["+",f.stars]})]})})]}):null})]})}function NS({child:n}){const e=Z(),t=Bs(e.items,n.id,"good"),r=Bs(e.items,n.id,"bad"),[s,i]=j(!1),[o,a]=j(""),[l,h]=j("");return u("div",{class:"card",children:[u("h3",{children:"Atitudes"}),u("div",{class:"chips",children:t.map(f=>u("button",{class:"chip good",onClick:()=>js(n.id,f),children:[f.emoji," ",Dr(f.label,n.gender)," ",u("b",{children:["+",f.stars]})]}))}),r.length>0&&u(Re,{children:[u("span",{class:"eyebrow",children:"Combinados não cumpridos"}),u("div",{class:"chips",children:r.map(f=>u("button",{class:"chip bad",onClick:()=>js(n.id,f),children:[f.emoji," ",Dr(f.label,n.gender)," ",u("b",{children:["−",f.stars]})]}))})]}),u("div",{class:"row gap wrap",children:[u("button",{class:"btn sm ghost",onClick:()=>i(!0),children:"Ajuste manual"}),Me(e.family).modules.calm&&u("button",{class:"btn sm ghost",onClick:()=>Se({screen:"calma",screenArg:n.id}),children:"Cantinho da calma"})]}),s&&u(vt,{title:`Ajuste para ${n.name}`,onClose:()=>i(!1),children:[u(he,{label:"Estrelas (use − para tirar)",children:u("input",{type:"number",inputMode:"numeric",value:o,onInput:f=>a(f.target.value)})}),u(he,{label:"Motivo",children:u("input",{value:l,maxLength:60,onInput:f=>h(f.target.value)})}),u("button",{class:"btn primary block",disabled:!Number(o),onClick:()=>{eS(n.id,Math.round(Number(o)),l),i(!1),a(""),h("")},children:"Registrar"}),u("p",{class:"muted small",children:"Ajustes mexem no saldo, mas não contam para a vila."})]})]})}function xS({child:n,day:e}){const t=Z(),r=e||t.today,s=t.entries.filter(i=>i.child===n.id&&i.day===r).slice().reverse();return s.length?u("div",{class:"card log",children:[u("h3",{children:"Registro do dia"}),s.map(i=>u("div",{class:"log-row"+(i.undone?" undone":""),children:[u("span",{children:i.emoji}),u("span",{class:"grow",children:i.label}),u("b",{class:i.stars<0?"neg":"pos",children:[i.stars>0?"+":"",i.stars]}),!i.undone&&u("button",{class:"link small",onClick:()=>qg(i),children:"desfazer"})]}))]}):null}const ws=(n,e)=>e[n.id]||n.slot;function OS({season:n,it:e,slot:t,fresh:r,onClick:s,selected:i}){const[o,a]=j("load"),l=n.scene.w/n.scene.h,h={left:`${t.x-t.w/2}%`,width:`${t.w}%`,top:`${t.y-t.w*l}%`,zIndex:Math.round(t.y*10)};return u("button",{type:"button",class:"piece"+(r?" fresh":"")+(i?" sel":"")+(o==="miss"?" miss":""),style:h,onClick:s,"aria-label":e.name,tabIndex:s?0:-1,"data-id":e.id,children:[o!=="miss"&&u("img",{src:Oe(n.id,e.img),alt:"",draggable:!1,onLoad:()=>a("ok"),onError:()=>a("miss")}),o==="miss"&&u("span",{class:"piece-emoji",style:{fontSize:`${t.w*.62}cqw`},children:e.emoji})]})}function su({season:n,items:e,slots:t,fresh:r,onPick:s,selected:i,children:o}){const[a,l]=j(!0);return u("div",{class:"scene",style:{aspectRatio:`${n.scene.w} / ${n.scene.h}`},children:[a?u("img",{class:"scene-bg",src:Oe(n.id,n.images.background),alt:"",onError:()=>l(!1),draggable:!1}):u("div",{class:"scene-bg fallback","aria-hidden":"true",children:[u("span",{class:"moon"}),u("span",{class:"hill h1"}),u("span",{class:"hill h2"}),u("span",{class:"snow"})]}),e.map(h=>u(OS,{season:n,it:h,slot:ws(h,t),fresh:r===h.id,selected:i===h.id,onClick:s?()=>s(h):void 0},h.id)),o]})}const _f=n=>new Promise(e=>{const t=new Image;t.onload=()=>e(t),t.onerror=()=>e(null),t.src=n});async function MS(n,e,t,r=360){const s=r,i=Math.round(r*n.scene.h/n.scene.w),o=document.createElement("canvas");o.width=s,o.height=i;const a=o.getContext("2d"),l=await _f(Oe(n.id,n.images.background));if(l)a.drawImage(l,0,0,s,i);else{const f=a.createLinearGradient(0,0,0,i);f.addColorStop(0,"#1F2E4A"),f.addColorStop(.42,"#3B4E6E"),f.addColorStop(.45,"#E9EEF2"),f.addColorStop(1,"#FBF6EE"),a.fillStyle=f,a.fillRect(0,0,s,i)}const h=[...e].sort((f,m)=>ws(f,t).y-ws(m,t).y);for(const f of h){const m=ws(f,t),_=m.w/100*s,y=m.x/100*s-_/2,b=m.y/100*i-_,R=await _f(Oe(n.id,f.img));R?a.drawImage(R,y,b,_,_):(a.font=`${Math.round(_*.55)}px serif`,a.textAlign="center",a.textBaseline="bottom",a.fillText(f.emoji,m.x/100*s,m.y/100*i))}return o.toDataURL("image/jpeg",.72)}function LS(){const n=Z(),e=n.children.find(t=>t.id===n.ui.child)||n.children[0];return u("div",{class:"page",children:[u(nu,{}),e&&u(n_,{child:e})]})}function n_({child:n,kid:e}){var U;const t=Z(),r=t.season,s=(U=t.family)==null?void 0:U.season,[i,o]=j(null),[a,l]=j(null),[h,f]=j(null),m=t.progress[n.id],_=hn(t.family,t.items,t.entries,n.id,t.today),y=r&&s?Jl(r,s,m,_,t.items,n.id,t.today):null,b=y?y.milestones.filter(M=>M.reached).length:0;if(at(()=>{!y||!m||b<=(m.seenMilestones||0)||f(y.milestones[b-1].item)},[b,m==null?void 0:m.seenMilestones,n.id]),!r||!s||!y)return u("div",{class:"card",children:[u("h3",{children:"Nenhuma temporada ativa"}),u("p",{class:"muted",children:"As vilas das temporadas anteriores estão no álbum."}),u("button",{class:"btn block",onClick:()=>Se({screen:"album",screenArg:n.id}),children:"Abrir o álbum de aventuras"})]});const R=zl(s.startDay,s.endDay)+1,k=async()=>{if(!y.next)return;const M=y.next;await nS(n.id,M.id)&&(l(M.id),setTimeout(()=>o(M),900),setTimeout(()=>l(null),2500))},N=Po(n),O=Me(t.family).modules.english&&n.english!==!1;return u(Re,{children:[u("div",{class:"world-head",children:[u("div",{children:[u("span",{class:"eyebrow",children:y.dayN<1?`Começa em ${-y.dayN+1} dia(s)`:Pc(s,t.today)?"Temporada encerrada":`Dia ${y.dayN} de ${R}`}),u("h2",{children:r.name})]}),u("div",{class:"world-stars",children:[u(Wn,{n:y.seasonStars,big:!0}),u("span",{class:"muted small",children:"na temporada"})]})]}),u(su,{season:r,items:jg(r,y),slots:t.slots,fresh:a,onPick:o}),y.canClaim?u("button",{class:"btn primary block glow claim",onClick:k,children:["Conquistar a peça do dia: ",y.next.name," ",y.next.emoji]}):u("p",{class:"claim-note",children:y.claimedToday?`Peça de hoje: ${y.claimedToday.name}. Amanhã tem mais!`:y.blockedReason==="Falta completar a rotina de hoje."?`Complete ${Me(t.family).dailyGoalPct}% da rotina para ganhar a peça de hoje (agora: ${_.pct}%).`:y.blockedReason}),y.nextMilestone&&u("div",{class:"card next-big-card",children:[u(Ct,{class:"tiny",src:Oe(r.id,y.nextMilestone.item.img),emoji:y.nextMilestone.item.emoji,alt:""}),u("div",{class:"grow",children:[u("span",{class:"eyebrow",children:"Próxima grande conquista"}),u("b",{children:y.nextMilestone.item.name}),u(Ro,{value:y.seasonStars,max:y.nextMilestone.at,tone:"gold"}),u("span",{class:"muted small",children:[y.seasonStars," de ",y.nextMilestone.at," estrelas da temporada"]})]})]}),u("div",{class:"card",children:[u("div",{class:"row between",children:[u("h3",{children:"Coleção"}),u("span",{class:"muted small",children:[y.dailyCount," de ",Cc(r).length," peças"]})]}),u("div",{class:"collection",children:r.items.map(M=>{const q=y.milestones.find(v=>v.item.id===M.id),$=M.kind==="daily"?y.unlocked.has(M.id):!!(q!=null&&q.reached),T=Cc(r).indexOf(M)+1;return u("button",{class:"coll"+($?" has":"")+(M.kind==="milestone"?" big":""),onClick:()=>$&&o(M),disabled:!$,"aria-label":$?M.name:"Peça bloqueada",children:$?u(Ct,{src:Oe(r.id,M.img),emoji:M.emoji,alt:M.name}):u("span",{class:"lock",children:M.kind==="milestone"?`★ ${q==null?void 0:q.at}`:T})})})})]}),u("button",{class:"btn ghost block",onClick:()=>Se({screen:"album",screenArg:n.id}),children:"Álbum de aventuras"}),Pc(s,t.today)&&!e&&u("div",{class:"card notice",children:u("p",{children:"A temporada terminou. Guarde as vilas no álbum em Responsáveis → Temporada."})}),i&&u(FS,{it:i,season:r.id,lvl:N,showEn:O,onClose:()=>o(null)}),h&&u(vt,{title:"Grande conquista!",onClose:()=>{f(null),pf(n.id,b)},children:[u("div",{class:"celebrate",children:[u(Ct,{class:"hero-art",src:Oe(r.id,h.img),emoji:h.emoji,alt:h.name}),u("h3",{children:h.name}),u("p",{children:h.learn[N]})]}),u("button",{class:"btn primary block",onClick:()=>{f(null),pf(n.id,b)},children:"Que lindo!"})]})]})}function FS({it:n,season:e,lvl:t,showEn:r,onClose:s}){const i=(o,a)=>{try{const l=new SpeechSynthesisUtterance(o);l.lang=a,speechSynthesis.cancel(),speechSynthesis.speak(l)}catch{}};return u(vt,{title:n.name,onClose:s,children:u("div",{class:"piece-info",children:[u(Ct,{class:"hero-art",src:Oe(e,n.img),emoji:n.emoji,alt:n.name}),u("p",{class:"learn",children:n.learn[t]}),u("button",{class:"link small",onClick:()=>i(n.learn[t],"pt-BR"),children:"Ouvir"}),r&&n.en&&u("div",{class:"english",children:[u("span",{class:"eyebrow",children:"Em inglês"}),u("button",{class:"en-word",onClick:()=>i(n.en.w,"en-US"),children:[n.en.w," 🔊"]}),u("button",{class:"en-ex",onClick:()=>i(n.en.ex,"en-US"),children:n.en.ex})]})]})})}function US(){const n=Z(),e=n.children.find(t=>t.id===n.ui.child)||n.children[0];return u("div",{class:"page",children:[u(nu,{}),e&&u(Re,{children:[u(r_,{child:e}),u(BS,{child:e})]})]})}function r_({child:n,kid:e}){const t=Z(),[r,s]=j(null),i=Bs(t.items,n.id,"reward").slice().sort((l,h)=>l.stars-h.stars),o=n.balance||0,a=new Set(t.requests.filter(l=>l.child===n.id&&l.kind==="reward").map(l=>l.itemId));return u("div",{class:"card prizes",children:[u("div",{class:"row between",children:[u("h3",{children:"Prêmios"}),u("span",{class:"balance",children:["Saldo ",u(Wn,{n:o})]})]}),!i.length&&u("p",{class:"muted",children:"Nenhum prêmio cadastrado ainda."}),i.map(l=>{const h=o>=l.stars;return u("div",{class:"prize"+(h?" can":""),children:[u("span",{class:"prize-emo",children:l.emoji}),u("div",{class:"grow",children:[u("b",{children:l.label}),!h&&u(Re,{children:[u(Ro,{value:o,max:l.stars}),u("span",{class:"muted small",children:["faltam ",l.stars-o]})]})]}),a.has(l.id)?u("span",{class:"pill",children:"pedido"}):u("button",{class:"btn sm "+(h?"primary":"ghost"),disabled:!h,onClick:()=>s(l),children:u(Wn,{n:l.stars})})]})}),r&&u(eu,{text:e?`Pedir ${r.label} por ${r.stars} estrelas? Um adulto vai confirmar.`:`Trocar ${r.stars} estrelas de ${n.name} por ${r.label}?`,yes:e?"Pedir":"Trocar",onClose:()=>s(null),onYes:()=>e?Xl(n.id,"reward",r.label,r.emoji,r.stars,r.id):tS(n,r)})]})}function BS({child:n}){const t=Z().entries.filter(s=>s.child===n.id&&!s.undone),r=[...new Set(t.map(s=>s.day))].sort().reverse();return r.length?u("div",{class:"card log",children:[u("h3",{children:"Últimos 7 dias"}),r.map(s=>{const i=t.filter(a=>a.day===s),o=i.reduce((a,l)=>a+l.stars,0);return u("details",{children:[u("summary",{children:[u("span",{class:"grow",children:un(s,!0)}),u("b",{class:o<0?"neg":"pos",children:[o>0?"+":"",o]})]}),i.map(a=>u("div",{class:"log-row",children:[u("span",{children:a.emoji}),u("span",{class:"grow",children:a.label}),u("b",{class:a.stars<0?"neg":"pos",children:[a.stars>0?"+":"",a.stars]})]}))]})}),u("p",{class:"muted small",children:["Total da vida de ",n.name,": ",n.lifetime||0," estrelas."]})]}):null}const iu=n=>{try{speechSynthesis.cancel();const e=new SpeechSynthesisUtterance(n);e.lang="pt-BR",e.rate=.95,speechSynthesis.speak(e)}catch{}},jS={p:"Para os pequenos",m:"Para os do meio",g:"Para os maiores"};function $S(n,e){if(!n.length)return null;const t=e.slice(5),r=n.find(o=>o.date===t);if(r)return{story:r,preview:!1};const s=n[0].date,i=n[n.length-1].date;return t>i&&t<s?t<"07-01"?{story:kr(n,"releitura",e),preview:!1}:{story:n[0],preview:!0}:{story:kr(n,"releitura",e),preview:!1}}function s_({only:n}){const e=Z(),t=Me(e.family).modules,r=_t(Mg),s=_t(jA),i=_t($A),o=n?[n]:e.children,a=r?$S(r.stories,e.today):null,l=[...new Set(o.map(Po))],[h,f]=j(0);return u("div",{class:"page night",children:[u("header",{class:"night-head",children:[u("span",{class:"eyebrow",children:"Hora de dormir"}),u("h2",{children:t.christian?"Devocional da noite":"Fechamento do dia"})]}),t.christian&&a&&u("article",{class:"card story",children:[a.preview&&u("p",{class:"pill",children:"Prévia · a série começa em 1º de dezembro"}),u("span",{class:"eyebrow",children:[r.title," · noite ",a.story.n]}),u("h3",{children:a.story.title}),u("p",{class:"ref",children:a.story.ref}),a.story.parts.map((m,_)=>_<=h&&u("section",{class:"story-part",children:[u(Ct,{class:"story-art",src:So(`noite/natal/${String(a.story.n).padStart(2,"0")}-${_+1}.jpg`),emoji:["📖","✨","🌙"][_]||"✨",alt:""}),m.split(`
`).map(y=>u("p",{children:y}))]})),h<a.story.parts.length-1?u("button",{class:"btn primary block",onClick:()=>f(h+1),children:"Continuar a história"}):u(Re,{children:[u("blockquote",{class:"verse",children:[a.story.verse,u("cite",{children:a.story.ref})]}),l.map(m=>u("div",{class:"ask",children:[u("span",{class:"eyebrow",children:l.length>1?jS[m]:"Para conversar"}),u("p",{children:a.story.ask[m]})]})),u("div",{class:"prayer",children:[u("span",{class:"eyebrow",children:"Oração"}),u("p",{children:a.story.prayer})]})]}),u("button",{class:"link small",onClick:()=>iu([a.story.title,...a.story.parts.slice(0,h+1)].join(". ")),children:"Ouvir em voz alta"})]}),s&&o.map(m=>u(qS,{child:m,msgs:s,others:o,christian:t.christian})),t.christian&&i&&!n&&u(zS,{prayers:i.parents,names:e.children.map(m=>m.name),day:e.today}),t.christian&&i&&u(KS,{list:i.kids,day:e.today})]})}function yf(n,e){const t=Ql(n.entries,e.id,n.today),r=hn(n.family,n.items,n.entries,e.id,n.today),s=t.filter(o=>o.kind==="bad").length,i=t.filter(o=>o.kind==="good"||o.kind==="challenge"||o.kind==="calm").length+r.done.size;return s?i>=s*2||r.goalMet?"recomeco":"dificil":r.goalMet?"otimo":"bom"}function qS({child:n,msgs:e,others:t,christian:r}){var m,_;const s=Z(),i=yf(s,n),o=Po(n),a=((m=e[r?i:"neutro_"+i])==null?void 0:m[o])||((_=e[i])==null?void 0:_[o])||[],l=(Ng(s.today+i+o)+t.filter(y=>Po(y)===o&&yf(s,y)===i).findIndex(y=>y.id===n.id))%Math.max(1,a.length),h=a.length?Dr(a[l].replace(/\{nome\}/g,n.name),n.gender):"",f=hn(s.family,s.items,s.entries,n.id,s.today);return u("div",{class:"card child-night",style:{"--c":n.color},children:[u("div",{class:"row gap",children:[u(Nt,{child:n,size:40}),u("div",{children:[u("b",{children:n.name}),u("span",{class:"muted small",children:[" · ",f.dayStars>=0?"+":"",f.dayStars," hoje · rotina ",f.pct,"%"]})]})]}),h&&u("p",{class:"jesus-msg",children:[r&&u("span",{class:"eyebrow",children:"Uma palavra de Jesus para você"}),h]}),h&&u("button",{class:"link small",onClick:()=>iu(h),children:"Ouvir"})]})}function zS({prayers:n,names:e,day:t}){const r=kr(n,"pais",t);if(!r)return null;const s=e.length<=1?e[0]||"nossos filhos":e.slice(0,-1).join(", ")+" e "+e[e.length-1];return u("div",{class:"card parent-prayer",children:[u("span",{class:"eyebrow",children:"Oração dos pais"}),u("p",{children:r[0].replace(/\{filhos\}/g,s)}),u("cite",{children:r[1]})]})}function KS({list:n,day:e}){const t=kr(n,"criancas",e);return t?u("div",{class:"card kid-prayer",children:[u("span",{class:"eyebrow",children:"Oração para repetir juntos"}),u("h4",{children:t.t}),t.l.map(r=>u("p",{children:r})),u("button",{class:"link small",onClick:()=>iu(t.l.join(" ")),children:"Ouvir"})]}):null}const $a=5,qa=3,vf=2;function i_({childId:n}){const e=Z(),t=_t(KA),[r,s]=j(n||(e.ui.kidMode?e.ui.kidId:null)),i=e.children.find(o=>o.id===r);return t?i?u(GS,{child:i,data:t}):u("div",{class:"page calm",children:[u("h2",{class:"page-title",children:"Cantinho da calma"}),u("p",{children:"Quem precisa de um momento de calma?"}),u("div",{class:"kid-pick",children:e.children.map(o=>u("button",{onClick:()=>s(o.id),children:[u(Nt,{child:o,size:64}),u("span",{children:o.name})]}))})]}):u("p",{class:"muted center",children:"Carregando…"})}function GS({child:n,data:e}){const t=Z(),[r,s]=j("feel"),[i,o]=j(null),[a,l]=j(!1),[h,f]=j(0),[m,_]=j("in");at(()=>{if(r!=="breathe")return;const N=setInterval(()=>_(O=>(O==="out"&&f(U=>U+1),O==="in"?"out":"in")),4e3);return()=>clearInterval(N)},[r]),at(()=>{h>=$a&&s("tool")},[h]);const y=t.entries.filter(N=>N.child===n.id&&N.day===t.today&&N.kind==="calm"&&!N.undone).length,b=N=>{s("done"),l(y<vf),y<vf&&zg(n.id,"calm",`Cantinho da calma: ${N}`,"🫧",qa,`+${qa} por cuidar das emoções`)},R=Me(t.family).modules.christian?kr(e.verses,n.id,t.today):null,k=e.feelings.find(N=>N.id===i);return u("div",{class:"page calm",children:[u("h2",{class:"page-title",children:"Cantinho da calma"}),r==="feel"&&u(Re,{children:[u("p",{class:"calm-q",children:["Como você está se sentindo, ",n.name,"?"]}),u("div",{class:"feelings",children:e.feelings.map(N=>u("button",{onClick:()=>{o(N.id),s("breathe")},children:[u("span",{children:N.emo}),n.gender==="f"?N.f:N.m]}))})]}),r==="breathe"&&u("div",{class:"breathe",children:[u("p",{class:"muted",children:["Tudo bem se sentir ",k?(n.gender==="f"?k.f:k.m).toLowerCase():"assim",". Vamos respirar juntos."]}),u("div",{class:"bubble "+m,children:u("span",{children:m==="in"?"Puxa o ar…":"Solta devagar…"})}),u("p",{class:"muted small",children:[Math.min(h+1,$a)," de ",$a]}),u("button",{class:"link",onClick:()=>s("tool"),children:"Pular"})]}),r==="tool"&&u(Re,{children:[u("p",{class:"calm-q",children:"O que pode ajudar agora?"}),u("div",{class:"tools",children:e.tools.map(N=>u("button",{onClick:()=>b(N.t),children:[u("span",{children:N.emo}),N.t]}))})]}),r==="done"&&u("div",{class:"card center",children:[u("div",{class:"big-emo",children:"🫧"}),u("h3",{children:"Você cuidou do seu coração."}),R&&u("p",{class:"verse-small",children:R}),u("p",{class:"muted small",children:a?`+${qa} estrelas`:"As estrelas do cantinho já foram ganhas hoje, mas a calma vale sempre."}),u("button",{class:"btn primary",onClick:()=>Se({screen:null}),children:"Voltar"})]})]})}function o_({childId:n}){var a;const e=Z(),t=tu(ea("album")),[r,s]=j(null),i=(t||[]).map(l=>({id:l.id,...l.data})).filter(l=>!n||l.child===n).sort((l,h)=>h.createdAt-l.createdAt),o=n?(a=e.children.find(l=>l.id===n))==null?void 0:a.name:"";return u("div",{class:"page",children:[u("h2",{class:"page-title",children:["Álbum de aventuras",o?` de ${o}`:""]}),t&&!i.length&&u(IS,{emoji:"📔",title:"O álbum ainda está vazio",children:u("p",{class:"muted",children:"Quando uma temporada termina, a vila de cada criança fica guardada aqui para sempre."})}),u("div",{class:"album-grid",children:i.map(l=>u("button",{class:"album-card",onClick:()=>s(l),children:[l.thumb?u("img",{src:l.thumb,alt:""}):u("span",{class:"album-ph",children:"🏘️"}),u("span",{class:"album-meta",children:[u("b",{children:l.seasonName}),u("span",{class:"muted small",children:[l.childName," · ",un(l.from)," a ",un(l.to)]}),u(Wn,{n:l.seasonStars})]})]}))}),r&&u(WS,{a:r,onClose:()=>s(null)})]})}function WS({a:n,onClose:e}){const t=Z(),r=_t(()=>Zo(n.seasonId),[n.seasonId]);return u(vt,{title:`${n.seasonName} · ${n.childName}`,onClose:e,wide:!0,children:[r?u(su,{season:r,items:r.items.filter(s=>n.items.includes(s.id)),slots:t.slots}):n.thumb?u("img",{class:"album-full",src:n.thumb,alt:""}):null,u("p",{class:"muted center",children:[n.items.length," peças · ",n.seasonStars," estrelas · ",un(n.from)," a ",un(n.to)]})]})}function HS(){const n=Z(),[e,t]=j(!1),[r,s]=j(""),i=n.children.find(h=>h.id===n.ui.kidId),a=e&&u(vt,{title:"Área dos adultos",onClose:()=>{t(!1),s("")},children:u(Vr,{title:"Digite o PIN",error:r,onDone:async h=>{await Kg(h)?(t(!1),s(""),Se({kidMode:!1,kidId:null,screen:null})):s("PIN incorreto")}})});if(!i)return u("div",{class:"kid page",children:[u("h1",{class:"kid-title",children:"Quem está aí?"}),u("div",{class:"kid-pick",children:n.children.map(h=>u("button",{onClick:()=>Se({kidId:h.id,screen:null}),children:[u(Nt,{child:h,size:84}),u("span",{children:h.name})]}))}),u("button",{class:"link",onClick:()=>t(!0),children:"Sou adulto"}),a]});const l=n.ui.screen;return u("div",{class:"kid",style:{"--c":i.color},children:[u("header",{class:"kid-head",children:[l?u("button",{class:"icon-btn",onClick:()=>Se({screen:null}),"aria-label":"Voltar",children:"←"}):u("button",{class:"kid-me",onClick:()=>Se({kidId:null}),"aria-label":"Trocar de criança",children:u(Nt,{child:i,size:40})}),u("div",{class:"kid-hello",children:u("b",{children:l?"":`Oi, ${i.name}!`})}),u(Wn,{n:i.balance||0,big:!0}),u("button",{class:"icon-btn",onClick:()=>t(!0),"aria-label":"Sair do modo criança",children:"🔒"})]}),u("main",{class:"page",children:[!l&&u(QS,{}),l==="mundo"&&u(n_,{child:i,kid:!0}),l==="premios"&&u(r_,{child:i,kid:!0}),l==="noite"&&u(s_,{only:i}),l==="calma"&&u(i_,{childId:i.id}),l==="advento"&&u(Zg,{}),l==="album"&&u(o_,{childId:i.id})]}),a]})}function QS(){const n=Z(),e=n.children.find(i=>i.id===n.ui.kidId),t=Me(n.family),r=(i,o)=>{if(o){ot("Para desfazer, chame um adulto");return}t.kidMarks==="direto"?js(e.id,i):Xl(e.id,"task",Dr(i.label,e.gender),i.emoji,i.stars,i.id)},s=[["mundo","🏘️","Meu mundo",!0],["premios","🎁","Prêmios",!0],["noite","🌙","Hora de dormir",!0],["calma","🫧","Cantinho da calma",t.modules.calm]];return u(Re,{children:[u(Jg,{child:e,kid:!0}),u(Xg,{kid:!0}),u("div",{class:"tiles",children:s.filter(i=>i[3]).map(([i,o,a])=>u("button",{class:"tile",onClick:()=>Se({screen:i}),children:[u("span",{children:o}),a]}))}),u(t_,{child:e,onTap:r}),u(e_,{child:e,kid:!0}),t.kidMarks==="pedido"&&u("p",{class:"muted small center",children:"Quando você marca uma tarefa, um adulto confirma."})]})}const a_=()=>{Se({kidMode:!0,kidId:se().children.length===1?se().children[0].id:null,screen:null})},JS=n=>new Promise(e=>{const t=new Image;t.onload=()=>e(!0),t.onerror=()=>e(!1),t.src=n+"?v="+Date.now()});function YS(){var s;const n=Z(),[e,t]=j([]);at(()=>{(async()=>{const i=n.season,o=[];if(i){const l=`seasons/${i.id}/`;o.push({group:"Vila",name:"Fundo",path:l+i.images.background,url:Oe(i.id,i.images.background),ok:null}),o.push({group:"Vila",name:"Capa",path:l+i.images.cover,url:Oe(i.id,i.images.cover),ok:null}),i.items.forEach(h=>o.push({group:"Vila",name:h.name,path:l+h.img,url:Oe(i.id,h.img),ok:null}))}try{(await Mg()).stories.forEach(h=>[1,2,3].forEach(f=>{const m=`noite/natal/${String(h.n).padStart(2,"0")}-${f}.jpg`;o.push({group:f===1?"Noite (1ª imagem)":"Noite (extras)",name:`${h.n}. ${h.title} (${f})`,path:m,url:So(m),ok:null})}))}catch{}for(let l=1;l<=24;l++){const h=`advento/${String(l).padStart(2,"0")}.jpg`;o.push({group:"Advento",name:`Portinha ${l}`,path:h,url:So(h),ok:null})}t(o);const a=await Promise.all(o.map(l=>JS(l.url)));t(o.map((l,h)=>({...l,ok:a[h]})))})()},[(s=n.season)==null?void 0:s.id]);const r=[...new Set(e.map(i=>i.group))];return u("div",{class:"card",children:[u("h2",{children:"Conferir imagens"}),u("p",{class:"muted small",children:"Pasta no GitHub: docs/content/…"}),r.map(i=>{const o=e.filter(l=>l.group===i),a=o.filter(l=>l.ok).length;return u("details",{open:i==="Vila",children:[u("summary",{children:[u("b",{class:"grow",children:i}),u("span",{children:[a," de ",o.length]})]}),o.map(l=>u("div",{class:"item-row small",children:[u("span",{children:l.ok===null?"…":l.ok?"✅":"⬜"}),u("span",{class:"grow",children:[l.name,u("small",{class:"mono",children:l.path})]})]}))]})})]})}function XS(){var f;const n=Z(),e=n.season,[t,r]=j(()=>{const m={};return e==null||e.items.forEach(_=>{m[_.id]={...ws(_,n.slots)}}),m}),[s,i]=j(((f=e==null?void 0:e.items[0])==null?void 0:f.id)||null),o=Wa(null),a=Wa(!1);if(!e)return u("p",{class:"muted",children:"Nenhuma temporada ativa."});const l=e.items.find(m=>m.id===s),h=m=>{if(!a.current||!s||!o.current)return;const _=o.current.querySelector(".scene").getBoundingClientRect(),y=Math.round((m.clientX-_.left)/_.width*1e3)/10,b=Math.round((m.clientY-_.top)/_.height*1e3)/10;r(R=>({...R,[s]:{...R[s],x:Math.max(0,Math.min(100,y)),y:Math.max(0,Math.min(100,b))}}))};return u("div",{class:"card layout-editor",children:[u("h2",{children:"Posições das peças"}),u("p",{class:"muted small",children:"Escolha uma peça, arraste na cena (o ponto é a base da peça) e ajuste o tamanho. Salvar vale para todas as famílias."}),u("div",{ref:o,class:"editor-scene",onPointerDown:m=>{var _,y;a.current=!0,(y=(_=m.target).setPointerCapture)==null||y.call(_,m.pointerId),h(m)},onPointerMove:h,onPointerUp:()=>{a.current=!1},children:u(su,{season:e,items:e.items,slots:t,selected:s})}),u(he,{label:"Peça",children:u("select",{value:s||"",onChange:m=>i(m.target.value),children:e.items.map(m=>u("option",{value:m.id,children:[m.emoji," ",m.name]}))})}),l&&s&&u(he,{label:`Tamanho: ${t[s].w}% da largura`,children:u("input",{type:"range",min:4,max:60,step:.5,value:t[s].w,onInput:m=>r({...t,[s]:{...t[s],w:Number(m.target.value)}})})}),l&&s&&u("p",{class:"muted small mono",children:["x ",t[s].x," · y ",t[s].y," · w ",t[s].w]}),u("div",{class:"row gap wrap",children:[u("button",{class:"btn primary",onClick:()=>yS(e.id,t),children:"Salvar para todas as famílias"}),u("button",{class:"btn ghost",onClick:()=>{var m;(m=navigator.clipboard)==null||m.writeText(JSON.stringify(t)),ot("Posições copiadas (JSON)")},children:"Copiar JSON"})]})]})}const ZS={task:"Rotina",good:"Atitudes que ganham estrelas",bad:"Combinados não cumpridos",reward:"Prêmios"};function eR(){var i;const n=Z(),[e,t]=j(null),r=u("button",{class:"link back",onClick:()=>t(null),children:"← Responsáveis"});if(e==="kids")return u("div",{class:"page",children:[r,u(nR,{})]});if(e==="task"||e==="good"||e==="bad"||e==="reward")return u("div",{class:"page",children:[r,u(sR,{kind:e})]});if(e==="rules")return u("div",{class:"page",children:[r,u(oR,{})]});if(e==="mods")return u("div",{class:"page",children:[r,u(aR,{})]});if(e==="season")return u("div",{class:"page",children:[r,u(cR,{go:t})]});if(e==="family")return u("div",{class:"page",children:[r,u(lR,{})]});if(e==="pin")return u("div",{class:"page",children:[r,u(uR,{done:()=>t(null)})]});if(e==="licenses")return u("div",{class:"page",children:[r,u(hR,{})]});if(e==="images")return u("div",{class:"page",children:[r,u(YS,{})]});if(e==="layout")return u("div",{class:"page wide",children:[r,u(XS,{})]});const s=(o,a,l,h)=>u("button",{class:"menu-row",onClick:()=>t(o),children:[u("span",{class:"menu-emo",children:a}),u("span",{class:"grow",children:[u("b",{children:l}),u("small",{children:h})]}),u("span",{"aria-hidden":"true",children:"›"})]});return u("div",{class:"page",children:[u("div",{class:"row between",children:[u("h2",{class:"page-title",children:"Responsáveis"}),u("button",{class:"btn sm ghost",onClick:()=>Se({screen:null,adminUntil:0}),children:"Fechar"})]}),u("div",{class:"card menu",children:[s("kids","👧","Crianças",`${n.children.length} cadastrada(s), idade, foto e nível dos desafios`),s("task","✅","Rotina","Tarefas do dia e quanto vale cada uma"),s("good","💛","Atitudes","Comportamentos que ganham estrelas"),s("bad","⚠️","Combinados","O que tira estrelas"),s("reward","🎁","Prêmios","O que as estrelas compram")]}),u("div",{class:"card menu",children:[s("season","🏘️","Temporada",n.season?n.season.name:"Nenhuma ativa"),s("rules","⚖️","Regras do jogo","Meta diária, bônus e pedidos das crianças"),s("mods","🧩","Módulos","Cristão, Advento, inglês, calma, desafios"),s("family","👨‍👩‍👧","Família e responsáveis","Nome, convites para outros adultos"),s("pin","🔑","Trocar PIN","Protege esta área e a saída do modo criança"),Yl()&&s("licenses","🎫","Licenças (administração)","Criar códigos para novas famílias")]}),u("div",{class:"card menu",children:[u("button",{class:"menu-row",onClick:()=>{a_(),Se({adminUntil:0})},children:[u("span",{class:"menu-emo",children:"🧒"}),u("span",{class:"grow",children:[u("b",{children:"Modo criança neste aparelho"}),u("small",{children:"As crianças usam sozinhas; para sair, o PIN"})]})]}),u("button",{class:"menu-row",onClick:()=>FA(`mundo-de-estrelas-${n.today}.json`,vS()),children:[u("span",{class:"menu-emo",children:"💾"}),u("span",{class:"grow",children:[u("b",{children:"Exportar cópia dos dados"}),u("small",{children:"Arquivo para guardar no seu computador"})]})]}),n.families.length>1&&n.families.filter(o=>o.id!==n.familyId).map(o=>u("button",{class:"menu-row",onClick:()=>Us(o.id),children:[u("span",{class:"menu-emo",children:"🔁"}),u("span",{class:"grow",children:u("b",{children:["Ir para ",o.name]})})]})),u("button",{class:"menu-row",onClick:()=>J.signOut(),children:[u("span",{class:"menu-emo",children:"🚪"}),u("span",{class:"grow",children:[u("b",{children:n.demo?"Sair e apagar a demonstração":"Sair da conta"}),u("small",{children:(i=n.user)==null?void 0:i.email})]})]})]}),n.demo&&u(tR,{}),u("p",{class:"muted small center",children:["Mundo de Estrelas ",SA]})]})}function tR(){const n=Z(),[e,t]=j(n.today);return u("div",{class:"card",children:[u("h3",{children:"Demonstração"}),u(he,{label:"Simular a data de hoje",children:u("input",{type:"date",value:e,onInput:r=>t(r.target.value)})}),u("div",{class:"row gap",children:[u("button",{class:"btn sm",onClick:()=>{location.search=`?demo=1&hoje=${e}`},children:"Usar esta data"}),u("button",{class:"btn sm ghost",onClick:()=>{location.search="?demo=1&hoje="},children:"Data real"})]})]})}function nR(){const n=Z(),[e,t]=j(null);return u("div",{class:"card",children:[u("h2",{children:"Crianças"}),n.children.map(r=>u("button",{class:"menu-row",onClick:()=>t(r),children:[u(Nt,{child:r,size:40}),u("span",{class:"grow",children:[u("b",{children:r.name}),u("small",{children:[r.birth?`${Fs(r.birth,n.today)} anos`:"sem data de nascimento"," · saldo ",r.balance||0]})]}),"›"]})),u("button",{class:"btn block",onClick:()=>t({name:"",gender:"f",color:"#2F5D4A",maturity:2,english:!0}),children:"Adicionar criança"}),e&&u(rR,{c:e,onClose:()=>t(null)})]})}function rR({c:n,onClose:e}){var l;const t=se(),[r,s]=j(n),[i,o]=j(!1),a=h=>s({...r,...h});return u(vt,{title:n.id?`Editar ${n.name}`:"Nova criança",onClose:e,children:[u("div",{class:"row gap center-v",children:[u(Nt,{child:{name:r.name||"?",color:r.color||"#888",photo:r.photo},size:64}),u("label",{class:"btn sm ghost",children:["Foto",u("input",{type:"file",accept:"image/*",hidden:!0,onChange:async h=>{var m;const f=(m=h.target.files)==null?void 0:m[0];f&&a({photo:await UA(f)})}})]}),r.photo&&u("button",{class:"link small",onClick:()=>a({photo:""}),children:"remover foto"})]}),u(he,{label:"Nome",children:u("input",{value:r.name,maxLength:24,onInput:h=>a({name:h.target.value})})}),u(he,{label:"Data de nascimento",children:u("input",{type:"date",value:r.birth,max:t.today,onInput:h=>a({birth:h.target.value})})}),u(he,{label:"Os textos tratam como",children:u("div",{class:"seg",children:[["f","menina"],["m","menino"],["x","neutro"]].map(([h,f])=>u("button",{type:"button",class:r.gender===h?"on":"",onClick:()=>a({gender:h}),children:f}))})}),u(he,{label:"Desafios",hint:"Ajusta a faixa dos desafios em relação à idade.",children:u("div",{class:"seg",children:[[1,"mais simples"],[2,"da idade"],[3,"mais difíceis"]].map(([h,f])=>u("button",{type:"button",class:r.maturity===h?"on":"",onClick:()=>a({maturity:h}),children:f}))})}),u("label",{class:"toggle",children:[u("input",{type:"checkbox",checked:r.english!==!1,onChange:h=>a({english:h.target.checked})}),u("span",{children:u("b",{children:"Mostrar palavras em inglês"})})]}),u(he,{label:"Cor",children:u(Qg,{value:r.color||"",onChange:h=>a({color:h})})}),u("button",{class:"btn primary block",disabled:!((l=r.name)!=null&&l.trim()),onClick:async()=>{await cS(r)&&e()},children:"Salvar"}),n.id&&u("button",{class:"btn ghost danger-text block",onClick:()=>o(!0),children:"Remover criança"}),i&&u(eu,{danger:!0,text:`Remover ${n.name}? O histórico fica guardado, mas ela some do app.`,yes:"Remover",onClose:()=>o(!1),onYes:()=>{lS(n.id),e()}})]})}function sR({kind:n}){const e=Z(),[t,r]=j(null),s=e.items.filter(a=>a.kind===n&&a.active!==!1),i=(a,l)=>{const h=s.map(m=>m.id),f=a+l;f<0||f>=h.length||([h[a],h[f]]=[h[f],h[a]],oS(h))},o=a=>{var l;return(l=a.kids)!=null&&l.length?a.kids.map(h=>{var f;return(f=e.children.find(m=>m.id===h))==null?void 0:f.name}).filter(Boolean).join(", "):"todas as crianças"};return u("div",{class:"card",children:[u("h2",{children:ZS[n]}),n==="task"&&u("p",{class:"muted small",children:["Dica: use ","{o|a}",' para o texto mudar com o gênero. Ex.: "Arrumad',"{o|a}",' para a escola".']}),s.map((a,l)=>{var h;return u("div",{class:"item-row",children:[u("span",{class:"item-emo",children:a.emoji}),u("button",{class:"grow item-main",onClick:()=>r(a),children:[u("b",{children:a.label}),u("small",{children:[n==="reward"?`${a.stars} estrelas`:`${n==="bad"?"−":"+"}${a.stars}`," · ",n==="task"?((h=ru.find(f=>f[0]===(a.period||"livre")))==null?void 0:h[1])+" · ":"",o(a)]})]}),u("button",{class:"icon-btn",onClick:()=>i(l,-1),"aria-label":"Subir",children:"↑"}),u("button",{class:"icon-btn",onClick:()=>i(l,1),"aria-label":"Descer",children:"↓"})]})}),u("button",{class:"btn block",onClick:()=>r({kind:n,emoji:"⭐",label:"",stars:n==="reward"?50:2,period:"livre",kids:[],order:s.length}),children:"Adicionar"}),t&&u(iR,{it:t,onClose:()=>r(null)})]})}function iR({it:n,onClose:e}){var a;const t=se(),[r,s]=j(n),i=l=>s({...r,...l}),o=l=>{const h=new Set(r.kids||[]);h.has(l)?h.delete(l):h.add(l),i({kids:[...h]})};return u(vt,{title:n.id?"Editar":"Novo",onClose:e,children:[u("div",{class:"row gap",children:[u(ES,{value:r.emoji||"⭐",onChange:l=>i({emoji:l})}),u(he,{label:"Texto",children:u("input",{value:r.label,maxLength:60,onInput:l=>i({label:l.target.value})})})]}),u(he,{label:r.kind==="reward"?"Custa (estrelas)":"Estrelas",children:u("input",{type:"number",inputMode:"numeric",min:0,value:r.stars,onInput:l=>i({stars:Number(l.target.value)})})}),r.kind==="task"&&u(he,{label:"Quando",children:u("div",{class:"seg",children:ru.map(([l,h])=>u("button",{type:"button",class:(r.period||"livre")===l?"on":"",onClick:()=>i({period:l}),children:h}))})}),t.children.length>1&&u(he,{label:"Para quem",hint:"Nenhuma marcada = todas as crianças.",children:u("div",{class:"seg wrap",children:t.children.map(l=>{var h;return u("button",{type:"button",class:(h=r.kids)!=null&&h.includes(l.id)?"on":"",onClick:()=>o(l.id),children:l.name})})})}),u("button",{class:"btn primary block",disabled:!((a=r.label)!=null&&a.trim()),onClick:async()=>{await sS(r)&&e()},children:"Salvar"}),n.id&&u("button",{class:"btn ghost danger-text block",onClick:()=>{iS(n.id),e()},children:"Remover"})]})}function oR(){const n=Z(),e=Me(n.family),[t,r]=j(e.dailyGoalPct),[s,i]=j(e.perfectBonus);return u("div",{class:"card",children:[u("h2",{children:"Regras do jogo"}),u(he,{label:`Meta diária: ${t}% da rotina`,hint:"Ao alcançar a meta, a criança ganha a peça do dia na temporada.",children:u("input",{type:"range",min:40,max:100,step:5,value:t,onInput:o=>r(Number(o.target.value))})}),u(he,{label:"Bônus por rotina completa (estrelas)",children:u("input",{type:"number",min:0,max:50,value:s,onInput:o=>i(Number(o.target.value))})}),u(he,{label:"No modo criança, ao marcar uma tarefa",children:u("div",{class:"seg",children:[u("button",{type:"button",class:e.kidMarks==="pedido"?"on":"",onClick:()=>Is({kidMarks:"pedido"}),children:"um adulto confirma"}),u("button",{type:"button",class:e.kidMarks==="direto"?"on":"",onClick:()=>Is({kidMarks:"direto"}),children:"vale na hora"})]})}),u("button",{class:"btn primary block",onClick:()=>Is({dailyGoalPct:t,perfectBonus:Math.max(0,Math.round(s))}),children:"Salvar"}),u("div",{class:"rules-text",children:[u("h3",{children:"Como funciona"}),u("p",{children:"Cada tarefa, atitude e desafio dá estrelas. O saldo é usado para trocar por prêmios."}),u("p",{children:"Na temporada, a meta diária libera uma peça nova por dia. As grandes conquistas chegam com as estrelas ganhas na temporada; trocar estrelas por prêmios não tira peças da vila."}),u("p",{children:"Combinados não cumpridos tiram estrelas do saldo, mas não desmontam a vila."})]})]})}function aR(){const n=Z(),e=Me(n.family).modules;return u("div",{class:"card",children:[u("h2",{children:"Módulos"}),[["christian","Conteúdo cristão","Histórias bíblicas, orações e mensagens de Jesus"],["advent","Calendário do Advento","1 a 24 de dezembro"],["english","Palavras em inglês","Nas peças da temporada"],["calm","Cantinho da calma","Respiração guiada"],["challenges","Desafios do dia","Um por dia, por idade"]].map(([r,s,i])=>u("label",{class:"toggle",children:[u("input",{type:"checkbox",checked:e[r],onChange:o=>Is({modules:{...e,[r]:o.target.checked}})}),u("span",{children:[u("b",{children:s}),u("small",{children:i})]})]}))]})}function cR({go:n}){var _;const e=Z(),t=(_=e.family)==null?void 0:_.season,r=e.season,s=_t(Wl),[i,o]=j(!1),[a,l]=j(!1),[h,f]=j({}),m=async()=>{if(!r||!t)return;l(!0);const y={};for(const b of e.children){const R=Jl(r,t,e.progress[b.id],hn(e.family,e.items,e.entries,b.id,e.today),e.items,b.id,e.today);try{y[b.id]=await MS(r,jg(r,R),e.slots)}catch{y[b.id]=""}}await _S(y),l(!1)};return!t||!r?u("div",{class:"card",children:[u("h2",{children:"Temporada"}),u("p",{children:"Nenhuma temporada ativa."}),(s||[]).map(y=>u("div",{class:"subcard",children:[y.cover&&u("img",{class:"season-cover",src:Oe(y.id,y.cover),alt:"",onError:b=>b.target.style.display="none"}),u("b",{children:y.name}),u("p",{class:"muted",children:y.tagline}),u("div",{class:"row gap",children:[u("button",{class:"btn primary sm",onClick:()=>gf(y.id,!1),children:"Começar na data oficial"}),u("button",{class:"btn sm",onClick:()=>gf(y.id,!0),children:"Começar hoje"})]})]}))]}):u("div",{class:"card",children:[u("h2",{children:r.name}),u("p",{class:"muted",children:["De ",un(t.startDay)," a ",un(t.endDay),"."]}),u("h3",{children:"Meta de estrelas da temporada"}),u("p",{class:"muted small",children:"As grandes conquistas chegam em 12%, 30%, 50%, 75% e 100% desta meta. A sugestão é 75% do que a rotina permite."}),e.children.map(y=>{var R;const b=Bg(e.progress[y.id],e.items,y.id,t);return u("div",{class:"item-row",children:[u(Nt,{child:y,size:32}),u("span",{class:"grow",children:[u("b",{children:y.name}),u("small",{children:[((R=e.progress[y.id])==null?void 0:R.seasonStars)||0," de ",b," · sugerido ",ri(e.items,y.id,t)]})]}),u("input",{class:"num",type:"number",min:30,value:h[y.id]??b,onInput:k=>f({...h,[y.id]:k.target.value})}),u("button",{class:"btn sm",disabled:!h[y.id]||Number(h[y.id])===b,onClick:()=>uS(y.id,Math.max(30,Math.round(Number(h[y.id])))),children:"OK"})]})}),u("div",{class:"menu",children:[u("button",{class:"menu-row",onClick:()=>n("images"),children:[u("span",{class:"menu-emo",children:"🖼️"}),u("span",{class:"grow",children:[u("b",{children:"Conferir imagens"}),u("small",{children:"O que já chegou e o que falta"})]}),"›"]}),Yl()&&u("button",{class:"menu-row",onClick:()=>n("layout"),children:[u("span",{class:"menu-emo",children:"📐"}),u("span",{class:"grow",children:[u("b",{children:"Ajustar posições das peças"}),u("small",{children:"Vale para todas as famílias"})]}),"›"]})]}),u("button",{class:"btn ghost danger-text block",disabled:a,onClick:()=>o(!0),children:a?"Guardando…":"Encerrar e guardar no álbum"}),i&&u(eu,{text:"Encerrar a temporada agora? A vila de cada criança vai para o álbum de aventuras e a próxima temporada poderá começar. Saldo e prêmios continuam.",yes:"Encerrar",onClose:()=>o(!1),onYes:m})]})}function lR(){var a;const n=Z(),e=n.family,[t,r]=j(e.name),[s,i]=j(""),o=e.owner===((a=n.user)==null?void 0:a.uid);return u("div",{class:"card",children:[u("h2",{children:"Família"}),u(he,{label:"Nome",children:u("input",{value:t,maxLength:40,onInput:l=>r(l.target.value)})}),u("button",{class:"btn sm",disabled:!t.trim()||t===e.name,onClick:()=>dS(t),children:"Salvar nome"}),u("h3",{children:"Responsáveis"}),Object.entries(e.members||{}).map(([l,h])=>{var f;return u("div",{class:"item-row",children:[u("span",{class:"grow",children:[u("b",{children:h.name||h.email}),u("small",{children:[h.email," · ",h.role==="owner"?"criador(a)":"responsável"]})]}),o&&l!==((f=n.user)==null?void 0:f.uid)&&u("button",{class:"link small danger-text",onClick:()=>pS(l),children:"remover"})]})}),u("h3",{children:"Convidar outro adulto"}),u("p",{class:"muted small",children:"A pessoa entra com esse e-mail (Google ou e-mail confirmado) e aceita o convite."}),(e.invites||[]).map(l=>u("div",{class:"item-row",children:[u("span",{class:"grow",children:[l," ",u("small",{class:"muted",children:"convidado"})]}),u("button",{class:"link small",onClick:()=>mS(l),children:"cancelar"})]})),u("div",{class:"row gap",children:[u("input",{type:"email",placeholder:"email@exemplo.com",value:s,onInput:l=>i(l.target.value)}),u("button",{class:"btn",disabled:!/^\S+@\S+\.\S+$/.test(s),onClick:()=>{fS(s),i("")},children:"Convidar"})]})]})}function uR({done:n}){const[e,t]=j(""),[r,s]=j("");return u("div",{class:"card",children:e?u(Vr,{title:"Repita o novo PIN",onDone:async i=>{i===e?(await hS(i),ot("PIN alterado"),n()):(s("Os PINs não conferem"),t(""))}}):u(Vr,{title:"Novo PIN",error:r,onDone:i=>{t(i),s("")}})})}function hR(){const[n,e]=j(1),[t,r]=j(""),[s,i]=j([]),a=(tu("licenses")||[]).map(l=>({id:l.id,...l.data})).sort((l,h)=>h.createdAt-l.createdAt);return u("div",{class:"card",children:[u("h2",{children:"Licenças"}),u("p",{class:"muted small",children:"Cada código cria uma família. Envie o código para quem comprou."}),u("div",{class:"row gap",children:[u(he,{label:"Quantidade",children:u("input",{type:"number",min:1,max:50,value:n,onInput:l=>e(Number(l.target.value))})}),u(he,{label:"Anotação (ex.: nome da cliente)",children:u("input",{value:t,maxLength:60,onInput:l=>r(l.target.value)})})]}),u("button",{class:"btn primary block",onClick:async()=>i(await Hg(Math.min(50,Math.max(1,n)),t)),children:"Criar códigos"}),s.length>0&&u("div",{class:"codes",children:[u("pre",{children:s.join(`
`)}),u("button",{class:"btn sm",onClick:()=>{var l;(l=navigator.clipboard)==null||l.writeText(s.join(`
`)),ot("Copiado")},children:"Copiar"})]}),u("h3",{children:"Códigos"}),a.map(l=>u("div",{class:"item-row",children:u("span",{class:"grow",children:[u("b",{class:"mono",children:l.id}),u("small",{children:[l.note||"sem anotação"," · ",l.usedBy?"usado":"disponível"]})]})})),ea("")&&null]})}function xi({text:n}){return u("div",{class:"splash",children:[u("div",{class:"brand-mark spin",children:"✦"}),u("p",{class:"muted",children:n||"Carregando…"})]})}function dR(){const n=Z();return n.toast?u("div",{class:"toast "+(n.toast.kind||""),role:"status",children:n.toast.text},n.toast.id):null}function fR(){var e;const n=Z();at(()=>{var s;const t=(s=n.season)==null?void 0:s.palette,r=document.documentElement.style;t&&(r.setProperty("--primary",t.primary),r.setProperty("--secondary",t.secondary),r.setProperty("--accent",t.accent),r.setProperty("--paper",t.paper),r.setProperty("--ink",t.ink),r.setProperty("--sky",t.sky))},[(e=n.season)==null?void 0:e.id])}function mR(){const n=Z();fR();let e;return n.ready?n.user?!n.user.verified&&n.user.provider==="password"?e=u(AS,{}):n.familiesLoaded?n.error&&!n.families.length&&!n.invites.length&&n.error.includes("permission")?e=u(xi,{text:"O banco ainda não aceita o app novo. As regras de segurança precisam ser publicadas no Firebase."}):n.familyId?n.family?n.ui.kidMode?e=u(HS,{}):e=u(pR,{}):e=u(xi,{}):e=u(RS,{}):e=u(xi,{}):e=u(bS,{}):e=u(xi,{}),u(Re,{children:[n.demo&&u("div",{class:"demo-band",children:["Demonstração",n.today!==ql()?` · data simulada ${n.today.split("-").reverse().join("/")}`:""]}),n.offline&&u("div",{class:"offline-band",children:"Sem internet: as mudanças são enviadas quando a conexão voltar."}),e,u(dR,{})]})}function pR(){const n=Z(),[e,t]=j(!1),[r,s]=j(""),i=n.ui.screen==="admin"&&n.ui.adminUntil>Date.now(),o=()=>{!Me(n.family).pinHash||n.ui.adminUntil>Date.now()?Se({screen:"admin",adminUntil:Date.now()+15*6e4}):t(!0)},a=async f=>{await Kg(f)?(t(!1),s(""),Se({screen:"admin",adminUntil:Date.now()+15*6e4})):s("PIN incorreto")},l=n.ui.screen,h=[["hoje","☀️","Hoje"],["mundo","🏘️","Mundo"],["premios","🎁","Prêmios"],["noite","🌙","Noite"]];return u("div",{class:"shell",children:[u("header",{class:"top",children:[l&&l!=="admin"?u("button",{class:"icon-btn",onClick:()=>Se({screen:null}),"aria-label":"Voltar",children:"←"}):u("span",{class:"brand-mark sm",children:"✦"}),u("div",{class:"top-title",children:[u("b",{children:n.family.name}),n.requests.length>0&&u("span",{class:"badge",title:"Pedidos esperando",children:n.requests.length})]}),u("button",{class:"icon-btn",onClick:a_,"aria-label":"Modo criança",title:"Modo criança",children:"🧒"}),u("button",{class:"icon-btn",onClick:o,"aria-label":"Área dos responsáveis",title:"Responsáveis",children:"⚙️"})]}),u("main",{children:i?u(eR,{}):l==="calma"?u(i_,{childId:n.ui.screenArg}):l==="album"?u(o_,{childId:n.ui.screenArg}):l==="advento"?u(Zg,{}):n.ui.tab==="hoje"?u(VS,{}):n.ui.tab==="mundo"?u(LS,{}):n.ui.tab==="premios"?u(US,{}):u(s_,{})}),!i&&u("nav",{class:"tabbar",children:h.map(([f,m,_])=>u("button",{class:n.ui.tab===f&&!l?"on":"",onClick:()=>Se({tab:f,screen:null}),"aria-current":n.ui.tab===f,children:[u("span",{children:m}),_]}))}),e&&u(vt,{title:"Área dos responsáveis",onClose:()=>{t(!1),s("")},children:u(Vr,{title:"Digite o PIN",error:r,onDone:a})})]})}QA();H_(u(mR,{}),document.getElementById("app"));"serviceWorker"in navigator&&location.protocol==="https:"&&addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
