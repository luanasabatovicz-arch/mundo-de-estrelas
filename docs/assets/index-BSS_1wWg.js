(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var Oo,he,kf,Rn,fh,Df,Ya,Uc,Xa,Za,bs={},Vf=[],sy=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Bc=Array.isArray;function rn(n,e){for(var t in e)n[t]=e[t];return n}function xf(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function iy(n,e,t){var r,s,i,o={};for(i in e)i=="key"?r=e[i]:i=="ref"?s=e[i]:o[i]=e[i];if(arguments.length>2&&(o.children=arguments.length>3?Oo.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(i in n.defaultProps)o[i]===void 0&&(o[i]=n.defaultProps[i]);return Bi(n,o,r,s,null)}function Bi(n,e,t,r,s){var i={type:n,props:e,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:s??++kf,__i:-1,__u:0};return s==null&&he.vnode!=null&&he.vnode(i),i}function be(n){return n.children}function ji(n,e){this.props=n,this.context=e}function yr(n,e){if(e==null)return n.__?yr(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?yr(n):null}function Nf(n){var e,t;if((n=n.__)!=null&&n.__c!=null){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null){n.__e=n.__c.base=t.__e;break}return Nf(n)}}function mh(n){(!n.__d&&(n.__d=!0)&&Rn.push(n)&&!oo.__r++||fh!==he.debounceRendering)&&((fh=he.debounceRendering)||Df)(oo)}function oo(){var n,e,t,r,s,i,o,a;for(Rn.sort(Ya);n=Rn.shift();)n.__d&&(e=Rn.length,r=void 0,i=(s=(t=n).__v).__e,o=[],a=[],t.__P&&((r=rn({},s)).__v=s.__v+1,he.vnode&&he.vnode(r),jc(t.__P,r,s,t.__n,t.__P.namespaceURI,32&s.__u?[i]:null,o,i??yr(s),!!(32&s.__u),a),r.__v=s.__v,r.__.__k[r.__i]=r,Lf(o,r,a),r.__e!=i&&Nf(r)),Rn.length>e&&Rn.sort(Ya));oo.__r=0}function Of(n,e,t,r,s,i,o,a,l,h,f){var m,_,g,w,R,A=r&&r.__k||Vf,V=e.length;for(t.__d=l,oy(t,e,A),l=t.__d,m=0;m<V;m++)(g=t.__k[m])!=null&&(_=g.__i===-1?bs:A[g.__i]||bs,g.__i=m,jc(n,g,_,s,i,o,a,l,h,f),w=g.__e,g.ref&&_.ref!=g.ref&&(_.ref&&$c(_.ref,null,g),f.push(g.ref,g.__c||w,g)),R==null&&w!=null&&(R=w),65536&g.__u||_.__k===g.__k?l=Mf(g,l,n):typeof g.type=="function"&&g.__d!==void 0?l=g.__d:w&&(l=w.nextSibling),g.__d=void 0,g.__u&=-196609);t.__d=l,t.__e=R}function oy(n,e,t){var r,s,i,o,a,l=e.length,h=t.length,f=h,m=0;for(n.__k=[],r=0;r<l;r++)(s=e[r])!=null&&typeof s!="boolean"&&typeof s!="function"?(o=r+m,(s=n.__k[r]=typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?Bi(null,s,null,null,null):Bc(s)?Bi(be,{children:s},null,null,null):s.constructor===void 0&&s.__b>0?Bi(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s).__=n,s.__b=n.__b+1,i=null,(a=s.__i=ay(s,t,o,f))!==-1&&(f--,(i=t[a])&&(i.__u|=131072)),i==null||i.__v===null?(a==-1&&m--,typeof s.type!="function"&&(s.__u|=65536)):a!==o&&(a==o-1?m--:a==o+1?m++:(a>o?m--:m++,s.__u|=65536))):s=n.__k[r]=null;if(f)for(r=0;r<h;r++)(i=t[r])!=null&&!(131072&i.__u)&&(i.__e==n.__d&&(n.__d=yr(i)),Ff(i,i))}function Mf(n,e,t){var r,s;if(typeof n.type=="function"){for(r=n.__k,s=0;r&&s<r.length;s++)r[s]&&(r[s].__=n,e=Mf(r[s],e,t));return e}n.__e!=e&&(e&&n.type&&!t.contains(e)&&(e=yr(n)),t.insertBefore(n.__e,e||null),e=n.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function ay(n,e,t,r){var s=n.key,i=n.type,o=t-1,a=t+1,l=e[t];if(l===null||l&&s==l.key&&i===l.type&&!(131072&l.__u))return t;if(r>(l!=null&&!(131072&l.__u)?1:0))for(;o>=0||a<e.length;){if(o>=0){if((l=e[o])&&!(131072&l.__u)&&s==l.key&&i===l.type)return o;o--}if(a<e.length){if((l=e[a])&&!(131072&l.__u)&&s==l.key&&i===l.type)return a;a++}}return-1}function ph(n,e,t){e[0]==="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||sy.test(e)?t:t+"px"}function Pi(n,e,t,r,s){var i;e:if(e==="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof r=="string"&&(n.style.cssText=r=""),r)for(e in r)t&&e in t||ph(n.style,e,"");if(t)for(e in t)r&&t[e]===r[e]||ph(n.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")i=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in n||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),n.l||(n.l={}),n.l[e+i]=t,t?r?t.u=r.u:(t.u=Uc,n.addEventListener(e,i?Za:Xa,i)):n.removeEventListener(e,i?Za:Xa,i);else{if(s=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!=="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function gh(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e.t==null)e.t=Uc++;else if(e.t<t.u)return;return t(he.event?he.event(e):e)}}}function jc(n,e,t,r,s,i,o,a,l,h){var f,m,_,g,w,R,A,V,N,L,M,q,$,b,v,I,T=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(l=!!(32&t.__u),i=[a=e.__e=t.__e]),(f=he.__b)&&f(e);e:if(typeof T=="function")try{if(V=e.props,N="prototype"in T&&T.prototype.render,L=(f=T.contextType)&&r[f.__c],M=f?L?L.props.value:f.__:r,t.__c?A=(m=e.__c=t.__c).__=m.__E:(N?e.__c=m=new T(V,M):(e.__c=m=new ji(V,M),m.constructor=T,m.render=ly),L&&L.sub(m),m.props=V,m.state||(m.state={}),m.context=M,m.__n=r,_=m.__d=!0,m.__h=[],m._sb=[]),N&&m.__s==null&&(m.__s=m.state),N&&T.getDerivedStateFromProps!=null&&(m.__s==m.state&&(m.__s=rn({},m.__s)),rn(m.__s,T.getDerivedStateFromProps(V,m.__s))),g=m.props,w=m.state,m.__v=e,_)N&&T.getDerivedStateFromProps==null&&m.componentWillMount!=null&&m.componentWillMount(),N&&m.componentDidMount!=null&&m.__h.push(m.componentDidMount);else{if(N&&T.getDerivedStateFromProps==null&&V!==g&&m.componentWillReceiveProps!=null&&m.componentWillReceiveProps(V,M),!m.__e&&(m.shouldComponentUpdate!=null&&m.shouldComponentUpdate(V,m.__s,M)===!1||e.__v===t.__v)){for(e.__v!==t.__v&&(m.props=V,m.state=m.__s,m.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(S){S&&(S.__=e)}),q=0;q<m._sb.length;q++)m.__h.push(m._sb[q]);m._sb=[],m.__h.length&&o.push(m);break e}m.componentWillUpdate!=null&&m.componentWillUpdate(V,m.__s,M),N&&m.componentDidUpdate!=null&&m.__h.push(function(){m.componentDidUpdate(g,w,R)})}if(m.context=M,m.props=V,m.__P=n,m.__e=!1,$=he.__r,b=0,N){for(m.state=m.__s,m.__d=!1,$&&$(e),f=m.render(m.props,m.state,m.context),v=0;v<m._sb.length;v++)m.__h.push(m._sb[v]);m._sb=[]}else do m.__d=!1,$&&$(e),f=m.render(m.props,m.state,m.context),m.state=m.__s;while(m.__d&&++b<25);m.state=m.__s,m.getChildContext!=null&&(r=rn(rn({},r),m.getChildContext())),N&&!_&&m.getSnapshotBeforeUpdate!=null&&(R=m.getSnapshotBeforeUpdate(g,w)),Of(n,Bc(I=f!=null&&f.type===be&&f.key==null?f.props.children:f)?I:[I],e,t,r,s,i,o,a,l,h),m.base=e.__e,e.__u&=-161,m.__h.length&&o.push(m),A&&(m.__E=m.__=null)}catch(S){if(e.__v=null,l||i!=null){for(e.__u|=l?160:128;a&&a.nodeType===8&&a.nextSibling;)a=a.nextSibling;i[i.indexOf(a)]=null,e.__e=a}else e.__e=t.__e,e.__k=t.__k;he.__e(S,e,t)}else i==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=cy(t.__e,e,t,r,s,i,o,l,h);(f=he.diffed)&&f(e)}function Lf(n,e,t){e.__d=void 0;for(var r=0;r<t.length;r++)$c(t[r],t[++r],t[++r]);he.__c&&he.__c(e,n),n.some(function(s){try{n=s.__h,s.__h=[],n.some(function(i){i.call(s)})}catch(i){he.__e(i,s.__v)}})}function cy(n,e,t,r,s,i,o,a,l){var h,f,m,_,g,w,R,A=t.props,V=e.props,N=e.type;if(N==="svg"?s="http://www.w3.org/2000/svg":N==="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),i!=null){for(h=0;h<i.length;h++)if((g=i[h])&&"setAttribute"in g==!!N&&(N?g.localName===N:g.nodeType===3)){n=g,i[h]=null;break}}if(n==null){if(N===null)return document.createTextNode(V);n=document.createElementNS(s,N,V.is&&V),a&&(he.__m&&he.__m(e,i),a=!1),i=null}if(N===null)A===V||a&&n.data===V||(n.data=V);else{if(i=i&&Oo.call(n.childNodes),A=t.props||bs,!a&&i!=null)for(A={},h=0;h<n.attributes.length;h++)A[(g=n.attributes[h]).name]=g.value;for(h in A)if(g=A[h],h!="children"){if(h=="dangerouslySetInnerHTML")m=g;else if(!(h in V)){if(h=="value"&&"defaultValue"in V||h=="checked"&&"defaultChecked"in V)continue;Pi(n,h,null,g,s)}}for(h in V)g=V[h],h=="children"?_=g:h=="dangerouslySetInnerHTML"?f=g:h=="value"?w=g:h=="checked"?R=g:a&&typeof g!="function"||A[h]===g||Pi(n,h,g,A[h],s);if(f)a||m&&(f.__html===m.__html||f.__html===n.innerHTML)||(n.innerHTML=f.__html),e.__k=[];else if(m&&(n.innerHTML=""),Of(n,Bc(_)?_:[_],e,t,r,N==="foreignObject"?"http://www.w3.org/1999/xhtml":s,i,o,i?i[0]:t.__k&&yr(t,0),a,l),i!=null)for(h=i.length;h--;)xf(i[h]);a||(h="value",N==="progress"&&w==null?n.removeAttribute("value"):w!==void 0&&(w!==n[h]||N==="progress"&&!w||N==="option"&&w!==A[h])&&Pi(n,h,w,A[h],s),h="checked",R!==void 0&&R!==n[h]&&Pi(n,h,R,A[h],s))}return n}function $c(n,e,t){try{if(typeof n=="function"){var r=typeof n.__u=="function";r&&n.__u(),r&&e==null||(n.__u=n(e))}else n.current=e}catch(s){he.__e(s,t)}}function Ff(n,e,t){var r,s;if(he.unmount&&he.unmount(n),(r=n.ref)&&(r.current&&r.current!==n.__e||$c(r,null,e)),(r=n.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){he.__e(i,e)}r.base=r.__P=null}if(r=n.__k)for(s=0;s<r.length;s++)r[s]&&Ff(r[s],e,t||typeof n.type!="function");t||xf(n.__e),n.__c=n.__=n.__e=n.__d=void 0}function ly(n,e,t){return this.constructor(n,t)}function uy(n,e,t){var r,s,i,o;he.__&&he.__(n,e),s=(r=!1)?null:e.__k,i=[],o=[],jc(e,n=e.__k=iy(be,null,[n]),s||bs,bs,e.namespaceURI,s?null:e.firstChild?Oo.call(e.childNodes):null,i,s?s.__e:e.firstChild,r,o),Lf(i,n,o)}Oo=Vf.slice,he={__e:function(n,e,t,r){for(var s,i,o;e=e.__;)if((s=e.__c)&&!s.__)try{if((i=s.constructor)&&i.getDerivedStateFromError!=null&&(s.setState(i.getDerivedStateFromError(n)),o=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(n,r||{}),o=s.__d),o)return s.__E=s}catch(a){n=a}throw n}},kf=0,ji.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=rn({},this.state),typeof n=="function"&&(n=n(rn({},t),this.props)),n&&rn(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),mh(this))},ji.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),mh(this))},ji.prototype.render=be,Rn=[],Df=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ya=function(n,e){return n.__v.__b-e.__v.__b},oo.__r=0,Uc=0,Xa=gh(!1),Za=gh(!0);var hy=0;function u(n,e,t,r,s,i){e||(e={});var o,a,l=e;"ref"in e&&(o=e.ref,delete e.ref);var h={type:n,props:l,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--hy,__i:-1,__u:0,__source:s,__self:i};if(typeof n=="function"&&(o=n.defaultProps))for(a in o)l[a]===void 0&&(l[a]=o[a]);return he.vnode&&he.vnode(h),h}var As,we,Va,_h,ao=0,Uf=[],Pe=he,yh=Pe.__b,vh=Pe.__r,Ih=Pe.diffed,wh=Pe.__c,Eh=Pe.unmount,Th=Pe.__;function qc(n,e){Pe.__h&&Pe.__h(we,n,ao||e),ao=0;var t=we.__H||(we.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({}),t.__[n]}function B(n){return ao=1,dy(jf,n)}function dy(n,e,t){var r=qc(As++,2);if(r.t=n,!r.__c&&(r.__=[jf(void 0,e),function(a){var l=r.__N?r.__N[0]:r.__[0],h=r.t(l,a);l!==h&&(r.__N=[h,r.__[1]],r.__c.setState({}))}],r.__c=we,!we.u)){var s=function(a,l,h){if(!r.__c.__H)return!0;var f=r.__c.__H.__.filter(function(_){return!!_.__c});if(f.every(function(_){return!_.__N}))return!i||i.call(this,a,l,h);var m=!1;return f.forEach(function(_){if(_.__N){var g=_.__[0];_.__=_.__N,_.__N=void 0,g!==_.__[0]&&(m=!0)}}),!(!m&&r.__c.props===a)&&(!i||i.call(this,a,l,h))};we.u=!0;var i=we.shouldComponentUpdate,o=we.componentWillUpdate;we.componentWillUpdate=function(a,l,h){if(this.__e){var f=i;i=void 0,s(a,l,h),i=f}o&&o.call(this,a,l,h)},we.shouldComponentUpdate=s}return r.__N||r.__}function ot(n,e){var t=qc(As++,3);!Pe.__s&&Bf(t.__H,e)&&(t.__=n,t.i=e,we.__H.__h.push(t))}function ec(n){return ao=5,fy(function(){return{current:n}},[])}function fy(n,e){var t=qc(As++,7);return Bf(t.__H,e)&&(t.__=n(),t.__H=e,t.__h=n),t.__}function my(){for(var n;n=Uf.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach($i),n.__H.__h.forEach(tc),n.__H.__h=[]}catch(e){n.__H.__h=[],Pe.__e(e,n.__v)}}Pe.__b=function(n){we=null,yh&&yh(n)},Pe.__=function(n,e){n&&e.__k&&e.__k.__m&&(n.__m=e.__k.__m),Th&&Th(n,e)},Pe.__r=function(n){vh&&vh(n),As=0;var e=(we=n.__c).__H;e&&(Va===we?(e.__h=[],we.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.i=t.__N=void 0})):(e.__h.forEach($i),e.__h.forEach(tc),e.__h=[],As=0)),Va=we},Pe.diffed=function(n){Ih&&Ih(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(Uf.push(e)!==1&&_h===Pe.requestAnimationFrame||((_h=Pe.requestAnimationFrame)||py)(my)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.i=void 0})),Va=we=null},Pe.__c=function(n,e){e.some(function(t){try{t.__h.forEach($i),t.__h=t.__h.filter(function(r){return!r.__||tc(r)})}catch(r){e.some(function(s){s.__h&&(s.__h=[])}),e=[],Pe.__e(r,t.__v)}}),wh&&wh(n,e)},Pe.unmount=function(n){Eh&&Eh(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.forEach(function(r){try{$i(r)}catch(s){e=s}}),t.__H=void 0,e&&Pe.__e(e,t.__v))};var bh=typeof requestAnimationFrame=="function";function py(n){var e,t=function(){clearTimeout(r),bh&&cancelAnimationFrame(e),setTimeout(n)},r=setTimeout(t,100);bh&&(e=requestAnimationFrame(t))}function $i(n){var e=we,t=n.__c;typeof t=="function"&&(n.__c=void 0,t()),we=e}function tc(n){var e=we;n.__c=n.__(),we=e}function Bf(n,e){return!n||n.length!==e.length||e.some(function(t,r){return t!==n[r]})}function jf(n,e){return typeof e=="function"?e(n):e}var Ah={};/**
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
 */const $f=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},gy=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},qf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,h=l?n[s+2]:0,f=i>>2,m=(i&3)<<4|a>>4;let _=(a&15)<<2|h>>6,g=h&63;l||(g=64,o||(_=64)),r.push(t[f],t[m],t[_],t[g])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray($f(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):gy(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||a==null||h==null||m==null)throw new _y;const _=i<<2|a>>4;if(r.push(_),h!==64){const g=a<<4&240|h>>2;if(r.push(g),m!==64){const w=h<<6&192|m;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class _y extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yy=function(n){const e=$f(n);return qf.encodeByteArray(e,!0)},zf=function(n){return yy(n).replace(/\./g,"")},Kf=function(n){try{return qf.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function vy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Iy=()=>vy().__FIREBASE_DEFAULTS__,wy=()=>{if(typeof process>"u"||typeof Ah>"u")return;const n=Ah.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ey=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Kf(n[1]);return e&&JSON.parse(e)},Mo=()=>{try{return Iy()||wy()||Ey()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ty=n=>{var e,t;return(t=(e=Mo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Gf=()=>{var n;return(n=Mo())===null||n===void 0?void 0:n.config},Wf=n=>{var e;return(e=Mo())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class by{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ay(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function Sy(){var n;const e=(n=Mo())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ry(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Py(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Cy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ky(){const n=Ce();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Hf(){return!Sy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Qf(){try{return typeof indexedDB=="object"}catch{return!1}}function Dy(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Vy="FirebaseError";class Bt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Vy,Object.setPrototypeOf(this,Bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ks.prototype.create)}}class Ks{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?xy(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Bt(s,a,r)}}function xy(n,e){return n.replace(Ny,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Ny=/\{\$([^}]+)}/g;function Oy(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Mn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(Sh(i)&&Sh(o)){if(!Mn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Sh(n){return n!==null&&typeof n=="object"}/**
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
 */function Gs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ls(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function us(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function My(n,e){const t=new Ly(n,e);return t.subscribe.bind(t)}class Ly{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Fy(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=xa),s.error===void 0&&(s.error=xa),s.complete===void 0&&(s.complete=xa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Fy(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function xa(){}/**
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
 */function Ae(n){return n&&n._delegate?n._delegate:n}class Ln{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const An="[DEFAULT]";/**
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
 */class Uy{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new by;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jy(e))try{this.getOrInitializeService({instanceIdentifier:An})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=An){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=An){return this.instances.has(e)}getOptions(e=An){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:By(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=An){return this.component?this.component.multipleInstances?e:An:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function By(n){return n===An?void 0:n}function jy(n){return n.instantiationMode==="EAGER"}/**
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
 */class $y{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Uy(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ee||(ee={}));const qy={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},zy=ee.INFO,Ky={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Gy=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Ky[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zc{constructor(e){this.name=e,this._logLevel=zy,this._logHandler=Gy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const Wy=(n,e)=>e.some(t=>n instanceof t);let Rh,Ph;function Hy(){return Rh||(Rh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qy(){return Ph||(Ph=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jf=new WeakMap,nc=new WeakMap,Yf=new WeakMap,Na=new WeakMap,Kc=new WeakMap;function Jy(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(on(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Jf.set(t,n)}).catch(()=>{}),Kc.set(e,n),e}function Yy(n){if(nc.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});nc.set(n,e)}let rc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return nc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Yf.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return on(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Xy(n){rc=n(rc)}function Zy(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Oa(this),e,...t);return Yf.set(r,e.sort?e.sort():[e]),on(r)}:Qy().includes(n)?function(...e){return n.apply(Oa(this),e),on(Jf.get(this))}:function(...e){return on(n.apply(Oa(this),e))}}function ev(n){return typeof n=="function"?Zy(n):(n instanceof IDBTransaction&&Yy(n),Wy(n,Hy())?new Proxy(n,rc):n)}function on(n){if(n instanceof IDBRequest)return Jy(n);if(Na.has(n))return Na.get(n);const e=ev(n);return e!==n&&(Na.set(n,e),Kc.set(e,n)),e}const Oa=n=>Kc.get(n);function tv(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),a=on(o);return r&&o.addEventListener("upgradeneeded",l=>{r(on(o.result),l.oldVersion,l.newVersion,on(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}const nv=["get","getKey","getAll","getAllKeys","count"],rv=["put","add","delete","clear"],Ma=new Map;function Ch(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ma.get(e))return Ma.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=rv.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||nv.includes(t)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(a.shift())),(await Promise.all([h[t](...a),s&&l.done]))[0]};return Ma.set(e,i),i}Xy(n=>({...n,get:(e,t,r)=>Ch(e,t)||n.get(e,t,r),has:(e,t)=>!!Ch(e,t)||n.has(e,t)}));/**
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
 */class sv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(iv(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function iv(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sc="@firebase/app",kh="0.10.13";/**
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
 */const xt=new zc("@firebase/app"),ov="@firebase/app-compat",av="@firebase/analytics-compat",cv="@firebase/analytics",lv="@firebase/app-check-compat",uv="@firebase/app-check",hv="@firebase/auth",dv="@firebase/auth-compat",fv="@firebase/database",mv="@firebase/data-connect",pv="@firebase/database-compat",gv="@firebase/functions",_v="@firebase/functions-compat",yv="@firebase/installations",vv="@firebase/installations-compat",Iv="@firebase/messaging",wv="@firebase/messaging-compat",Ev="@firebase/performance",Tv="@firebase/performance-compat",bv="@firebase/remote-config",Av="@firebase/remote-config-compat",Sv="@firebase/storage",Rv="@firebase/storage-compat",Pv="@firebase/firestore",Cv="@firebase/vertexai-preview",kv="@firebase/firestore-compat",Dv="firebase",Vv="10.14.1";/**
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
 */const ic="[DEFAULT]",xv={[sc]:"fire-core",[ov]:"fire-core-compat",[cv]:"fire-analytics",[av]:"fire-analytics-compat",[uv]:"fire-app-check",[lv]:"fire-app-check-compat",[hv]:"fire-auth",[dv]:"fire-auth-compat",[fv]:"fire-rtdb",[mv]:"fire-data-connect",[pv]:"fire-rtdb-compat",[gv]:"fire-fn",[_v]:"fire-fn-compat",[yv]:"fire-iid",[vv]:"fire-iid-compat",[Iv]:"fire-fcm",[wv]:"fire-fcm-compat",[Ev]:"fire-perf",[Tv]:"fire-perf-compat",[bv]:"fire-rc",[Av]:"fire-rc-compat",[Sv]:"fire-gcs",[Rv]:"fire-gcs-compat",[Pv]:"fire-fst",[kv]:"fire-fst-compat",[Cv]:"fire-vertex","fire-js":"fire-js",[Dv]:"fire-js-all"};/**
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
 */const co=new Map,Nv=new Map,oc=new Map;function Dh(n,e){try{n.container.addComponent(e)}catch(t){xt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function vr(n){const e=n.name;if(oc.has(e))return xt.debug(`There were multiple attempts to register component ${e}.`),!1;oc.set(e,n);for(const t of co.values())Dh(t,n);for(const t of Nv.values())Dh(t,n);return!0}function Gc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ht(n){return n.settings!==void 0}/**
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
 */const Ov={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},an=new Ks("app","Firebase",Ov);/**
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
 */class Mv{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw an.create("app-deleted",{appName:this._name})}}/**
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
 */const Or=Vv;function Xf(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ic,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw an.create("bad-app-name",{appName:String(s)});if(t||(t=Gf()),!t)throw an.create("no-options");const i=co.get(s);if(i){if(Mn(t,i.options)&&Mn(r,i.config))return i;throw an.create("duplicate-app",{appName:s})}const o=new $y(s);for(const l of oc.values())o.addComponent(l);const a=new Mv(t,r,o);return co.set(s,a),a}function Lv(n=ic){const e=co.get(n);if(!e&&n===ic&&Gf())return Xf();if(!e)throw an.create("no-app",{appName:n});return e}function cn(n,e,t){var r;let s=(r=xv[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xt.warn(a.join(" "));return}vr(new Ln(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Fv="firebase-heartbeat-database",Uv=1,Ss="firebase-heartbeat-store";let La=null;function Zf(){return La||(La=tv(Fv,Uv,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ss)}catch(t){console.warn(t)}}}}).catch(n=>{throw an.create("idb-open",{originalErrorMessage:n.message})})),La}async function Bv(n){try{const t=(await Zf()).transaction(Ss),r=await t.objectStore(Ss).get(em(n));return await t.done,r}catch(e){if(e instanceof Bt)xt.warn(e.message);else{const t=an.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xt.warn(t.message)}}}async function Vh(n,e){try{const r=(await Zf()).transaction(Ss,"readwrite");await r.objectStore(Ss).put(e,em(n)),await r.done}catch(t){if(t instanceof Bt)xt.warn(t.message);else{const r=an.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});xt.warn(r.message)}}}function em(n){return`${n.name}!${n.options.appId}`}/**
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
 */const jv=1024,$v=30*24*60*60*1e3;class qv{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Kv(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=xh();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=$v}),this._storage.overwrite(this._heartbeatsCache))}catch(r){xt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=xh(),{heartbeatsToSend:r,unsentEntries:s}=zv(this._heartbeatsCache.heartbeats),i=zf(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return xt.warn(t),""}}}function xh(){return new Date().toISOString().substring(0,10)}function zv(n,e=jv){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Nh(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Nh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Kv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Qf()?Dy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Bv(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Vh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Vh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Nh(n){return zf(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Gv(n){vr(new Ln("platform-logger",e=>new sv(e),"PRIVATE")),vr(new Ln("heartbeat",e=>new qv(e),"PRIVATE")),cn(sc,kh,n),cn(sc,kh,"esm2017"),cn("fire-js","")}Gv("");var Wv="firebase",Hv="10.14.1";/**
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
 */cn(Wv,Hv,"app");function Wc(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function tm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Qv=tm,nm=new Ks("auth","Firebase",tm());/**
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
 */const lo=new zc("@firebase/auth");function Jv(n,...e){lo.logLevel<=ee.WARN&&lo.warn(`Auth (${Or}): ${n}`,...e)}function qi(n,...e){lo.logLevel<=ee.ERROR&&lo.error(`Auth (${Or}): ${n}`,...e)}/**
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
 */function ct(n,...e){throw Qc(n,...e)}function dt(n,...e){return Qc(n,...e)}function Hc(n,e,t){const r=Object.assign(Object.assign({},Qv()),{[e]:t});return new Ks("auth","Firebase",r).create(e,{appName:n.name})}function Dt(n){return Hc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Yv(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&ct(n,"argument-error"),Hc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Qc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return nm.create(n,...e)}function Q(n,e,...t){if(!n)throw Qc(e,...t)}function Rt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw qi(e),new Error(e)}function Nt(n,e){n||Rt(e)}/**
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
 */function ac(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Xv(){return Oh()==="http:"||Oh()==="https:"}function Oh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Zv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Xv()||Py()||"connection"in navigator)?navigator.onLine:!0}function eI(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Ws{constructor(e,t){this.shortDelay=e,this.longDelay=t,Nt(t>e,"Short delay should be less than long delay!"),this.isMobile=Ay()||Cy()}get(){return Zv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Jc(n,e){Nt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class rm{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const tI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const nI=new Ws(3e4,6e4);function jt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function $t(n,e,t,r,s={}){return sm(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Gs(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:l},i);return Ry()||(h.referrerPolicy="no-referrer"),rm.fetch()(im(n,n.config.apiHost,t,a),h)})}async function sm(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},tI),e);try{const s=new sI(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ci(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,h]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ci(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ci(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ci(n,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Hc(n,f,h);ct(n,f)}}catch(s){if(s instanceof Bt)throw s;ct(n,"network-request-failed",{message:String(s)})}}async function Hs(n,e,t,r,s={}){const i=await $t(n,e,t,r,s);return"mfaPendingCredential"in i&&ct(n,"multi-factor-auth-required",{_serverResponse:i}),i}function im(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?Jc(n.config,s):`${n.config.apiScheme}://${s}`}function rI(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class sI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(dt(this.auth,"network-request-failed")),nI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ci(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=dt(n,e,r);return s.customData._tokenResponse=t,s}function Mh(n){return n!==void 0&&n.enterprise!==void 0}class iI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return rI(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function oI(n,e){return $t(n,"GET","/v2/recaptchaConfig",jt(n,e))}/**
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
 */async function aI(n,e){return $t(n,"POST","/v1/accounts:delete",e)}async function om(n,e){return $t(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function gs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cI(n,e=!1){const t=Ae(n),r=await t.getIdToken(e),s=Yc(r);Q(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:gs(Fa(s.auth_time)),issuedAtTime:gs(Fa(s.iat)),expirationTime:gs(Fa(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Fa(n){return Number(n)*1e3}function Yc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return qi("JWT malformed, contained fewer than 3 sections"),null;try{const s=Kf(t);return s?JSON.parse(s):(qi("Failed to decode base64 JWT payload"),null)}catch(s){return qi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Lh(n){const e=Yc(n);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Rs(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Bt&&lI(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function lI({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class uI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class cc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=gs(this.lastLoginAt),this.creationTime=gs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function uo(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Rs(n,om(t,{idToken:r}));Q(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?am(i.providerUserInfo):[],a=dI(n.providerData,o),l=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),f=l?h:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new cc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,m)}async function hI(n){const e=Ae(n);await uo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dI(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function am(n){return n.map(e=>{var{providerId:t}=e,r=Wc(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function fI(n,e){const t=await sm(n,{},async()=>{const r=Gs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=im(n,s,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",rm.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function mI(n,e){return $t(n,"POST","/v2/accounts:revokeToken",jt(n,e))}/**
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
 */class mr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Lh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const t=Lh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await fI(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new mr;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Q(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mr,this.toJSON())}_performRefresh(){return Rt("not implemented")}}/**
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
 */function Jt(n,e){Q(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Pt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Wc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new uI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new cc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Rs(this,this.stsTokenManager.getToken(this.auth,e));return Q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return cI(this,e)}reload(){return hI(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Pt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await uo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ht(this.auth.app))return Promise.reject(Dt(this.auth));const e=await this.getIdToken();return await Rs(this,aI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,a,l,h,f;const m=(r=t.displayName)!==null&&r!==void 0?r:void 0,_=(s=t.email)!==null&&s!==void 0?s:void 0,g=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,w=(o=t.photoURL)!==null&&o!==void 0?o:void 0,R=(a=t.tenantId)!==null&&a!==void 0?a:void 0,A=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,V=(h=t.createdAt)!==null&&h!==void 0?h:void 0,N=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:L,emailVerified:M,isAnonymous:q,providerData:$,stsTokenManager:b}=t;Q(L&&b,e,"internal-error");const v=mr.fromJSON(this.name,b);Q(typeof L=="string",e,"internal-error"),Jt(m,e.name),Jt(_,e.name),Q(typeof M=="boolean",e,"internal-error"),Q(typeof q=="boolean",e,"internal-error"),Jt(g,e.name),Jt(w,e.name),Jt(R,e.name),Jt(A,e.name),Jt(V,e.name),Jt(N,e.name);const I=new Pt({uid:L,auth:e,email:_,emailVerified:M,displayName:m,isAnonymous:q,photoURL:w,phoneNumber:g,tenantId:R,stsTokenManager:v,createdAt:V,lastLoginAt:N});return $&&Array.isArray($)&&(I.providerData=$.map(T=>Object.assign({},T))),A&&(I._redirectEventId=A),I}static async _fromIdTokenResponse(e,t,r=!1){const s=new mr;s.updateFromServerResponse(t);const i=new Pt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await uo(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];Q(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?am(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new mr;a.updateFromIdToken(r);const l=new Pt({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new cc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
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
 */const Fh=new Map;function Ct(n){Nt(n instanceof Function,"Expected a class definition");let e=Fh.get(n);return e?(Nt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Fh.set(n,e),e)}/**
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
 */class cm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}cm.type="NONE";const Uh=cm;/**
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
 */function zi(n,e,t){return`firebase:${n}:${e}:${t}`}class pr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=zi(this.userKey,s.apiKey,i),this.fullPersistenceKey=zi("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new pr(Ct(Uh),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Ct(Uh);const o=zi(r,e.config.apiKey,e.name);let a=null;for(const h of t)try{const f=await h._get(o);if(f){const m=Pt._fromJSON(e,f);h!==i&&(a=m),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new pr(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new pr(i,e,r))}}/**
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
 */function Bh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(lm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mm(e))return"Blackberry";if(pm(e))return"Webos";if(um(e))return"Safari";if((e.includes("chrome/")||hm(e))&&!e.includes("edge/"))return"Chrome";if(fm(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function lm(n=Ce()){return/firefox\//i.test(n)}function um(n=Ce()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function hm(n=Ce()){return/crios\//i.test(n)}function dm(n=Ce()){return/iemobile/i.test(n)}function fm(n=Ce()){return/android/i.test(n)}function mm(n=Ce()){return/blackberry/i.test(n)}function pm(n=Ce()){return/webos/i.test(n)}function Xc(n=Ce()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function pI(n=Ce()){var e;return Xc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function gI(){return ky()&&document.documentMode===10}function gm(n=Ce()){return Xc(n)||fm(n)||pm(n)||mm(n)||/windows phone/i.test(n)||dm(n)}/**
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
 */function _m(n,e=[]){let t;switch(n){case"Browser":t=Bh(Ce());break;case"Worker":t=`${Bh(Ce())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Or}/${r}`}/**
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
 */class _I{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function yI(n,e={}){return $t(n,"GET","/v2/passwordPolicy",jt(n,e))}/**
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
 */const vI=6;class II{constructor(e){var t,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:vI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class wI{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jh(this),this.idTokenSubscription=new jh(this),this.beforeStateQueue=new _I(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ct(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await pr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await om(this,{idToken:e}),r=await Pt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ht(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await uo(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=eI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ht(this.app))return Promise.reject(Dt(this));const t=e?Ae(e):null;return t&&Q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ht(this.app)?Promise.reject(Dt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ht(this.app)?Promise.reject(Dt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ct(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await yI(this),t=new II(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ks("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await mI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ct(e)||this._popupRedirectResolver;Q(t,this,"argument-error"),this.redirectPersistenceManager=await pr.create(this,[Ct(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_m(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Jv(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function qt(n){return Ae(n)}class jh{constructor(e){this.auth=e,this.observer=null,this.addObserver=My(t=>this.observer=t)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Lo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function EI(n){Lo=n}function ym(n){return Lo.loadJS(n)}function TI(){return Lo.recaptchaEnterpriseScript}function bI(){return Lo.gapiScript}function AI(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const SI="recaptcha-enterprise",RI="NO_RECAPTCHA";class PI{constructor(e){this.type=SI,this.auth=qt(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{oI(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const h=new iI(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;Mh(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(RI)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!t&&Mh(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=TI();l.length!==0&&(l+=a),ym(l).then(()=>{s(a,i,o)}).catch(h=>{o(h)})}}).catch(a=>{o(a)})})}}async function $h(n,e,t,r=!1){const s=new PI(n);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ho(n,e,t,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await $h(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await $h(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(i)})}/**
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
 */function CI(n,e){const t=Gc(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Mn(i,e??{}))return s;ct(s,"already-initialized")}return t.initialize({options:e})}function kI(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ct);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function DI(n,e,t){const r=qt(n);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=vm(e),{host:o,port:a}=VI(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),xI()}function vm(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function VI(n){const e=vm(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:qh(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:qh(o)}}}function qh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function xI(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Zc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Rt("not implemented")}_getIdTokenResponse(e){return Rt("not implemented")}_linkToIdToken(e,t){return Rt("not implemented")}_getReauthenticationResolver(e){return Rt("not implemented")}}async function NI(n,e){return $t(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function OI(n,e){return Hs(n,"POST","/v1/accounts:signInWithPassword",jt(n,e))}async function Im(n,e){return $t(n,"POST","/v1/accounts:sendOobCode",jt(n,e))}async function MI(n,e){return Im(n,e)}async function LI(n,e){return Im(n,e)}/**
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
 */async function FI(n,e){return Hs(n,"POST","/v1/accounts:signInWithEmailLink",jt(n,e))}async function UI(n,e){return Hs(n,"POST","/v1/accounts:signInWithEmailLink",jt(n,e))}/**
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
 */class Ps extends Zc{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Ps(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Ps(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ho(e,t,"signInWithPassword",OI);case"emailLink":return FI(e,{email:this._email,oobCode:this._password});default:ct(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ho(e,r,"signUpPassword",NI);case"emailLink":return UI(e,{idToken:t,email:this._email,oobCode:this._password});default:ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function gr(n,e){return Hs(n,"POST","/v1/accounts:signInWithIdp",jt(n,e))}/**
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
 */const BI="http://localhost";class Fn extends Zc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Fn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ct("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Wc(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Fn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return gr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,gr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,gr(e,t)}buildRequest(){const e={requestUri:BI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Gs(t)}return e}}/**
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
 */function jI(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $I(n){const e=ls(us(n)).link,t=e?ls(us(e)).deep_link_id:null,r=ls(us(n)).deep_link_id;return(r?ls(us(r)).link:null)||r||t||e||n}class el{constructor(e){var t,r,s,i,o,a;const l=ls(us(e)),h=(t=l.apiKey)!==null&&t!==void 0?t:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,m=jI((s=l.mode)!==null&&s!==void 0?s:null);Q(h&&f&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=$I(e);try{return new el(t)}catch{return null}}}/**
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
 */class Mr{constructor(){this.providerId=Mr.PROVIDER_ID}static credential(e,t){return Ps._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=el.parseLink(t);return Q(r,"argument-error"),Ps._fromEmailAndCode(e,r.code,r.tenantId)}}Mr.PROVIDER_ID="password";Mr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Mr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class tl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Qs extends tl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Zt extends Qs{constructor(){super("facebook.com")}static credential(e){return Fn._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zt.credential(e.oauthAccessToken)}catch{return null}}}Zt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zt.PROVIDER_ID="facebook.com";/**
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
 */class St extends Qs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Fn._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return St.credential(t,r)}catch{return null}}}St.GOOGLE_SIGN_IN_METHOD="google.com";St.PROVIDER_ID="google.com";/**
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
 */class en extends Qs{constructor(){super("github.com")}static credential(e){return Fn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.GITHUB_SIGN_IN_METHOD="github.com";en.PROVIDER_ID="github.com";/**
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
 */class tn extends Qs{constructor(){super("twitter.com")}static credential(e,t){return Fn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return tn.credential(t,r)}catch{return null}}}tn.TWITTER_SIGN_IN_METHOD="twitter.com";tn.PROVIDER_ID="twitter.com";/**
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
 */async function qI(n,e){return Hs(n,"POST","/v1/accounts:signUp",jt(n,e))}/**
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
 */class Un{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Pt._fromIdTokenResponse(e,r,s),o=zh(r);return new Un({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=zh(r);return new Un({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function zh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class fo extends Bt{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,fo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new fo(e,t,r,s)}}function wm(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?fo._fromErrorAndOperation(n,i,e,r):i})}async function zI(n,e,t=!1){const r=await Rs(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Un._forOperation(n,"link",r)}/**
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
 */async function KI(n,e,t=!1){const{auth:r}=n;if(ht(r.app))return Promise.reject(Dt(r));const s="reauthenticate";try{const i=await Rs(n,wm(r,s,e,n),t);Q(i.idToken,r,"internal-error");const o=Yc(i.idToken);Q(o,r,"internal-error");const{sub:a}=o;return Q(n.uid===a,r,"user-mismatch"),Un._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ct(r,"user-mismatch"),i}}/**
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
 */async function Em(n,e,t=!1){if(ht(n.app))return Promise.reject(Dt(n));const r="signIn",s=await wm(n,r,e),i=await Un._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function GI(n,e){return Em(qt(n),e)}/**
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
 */async function Tm(n){const e=qt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function WI(n,e,t){const r=qt(n);await ho(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",LI)}async function HI(n,e,t){if(ht(n.app))return Promise.reject(Dt(n));const r=qt(n),o=await ho(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",qI).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Tm(n),l}),a=await Un._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function QI(n,e,t){return ht(n.app)?Promise.reject(Dt(n)):GI(Ae(n),Mr.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Tm(n),r})}async function Kh(n,e){const t=Ae(n),s={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()},{email:i}=await MI(t.auth,s);i!==n.email&&await n.reload()}function JI(n,e,t,r){return Ae(n).onIdTokenChanged(e,t,r)}function YI(n,e,t){return Ae(n).beforeAuthStateChanged(e,t)}function XI(n,e,t,r){return Ae(n).onAuthStateChanged(e,t,r)}function ZI(n){return Ae(n).signOut()}const mo="__sak";/**
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
 */class bm{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(mo,"1"),this.storage.removeItem(mo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const ew=1e3,tw=10;class Am extends bm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=gm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);gI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,tw):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},ew)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Am.type="LOCAL";const nw=Am;/**
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
 */class Sm extends bm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Sm.type="SESSION";const Rm=Sm;/**
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
 */function rw(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Fo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Fo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async h=>h(t.origin,i)),l=await rw(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fo.receivers=[];/**
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
 */function nl(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class sw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const h=nl("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const _=m;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(_.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function yt(){return window}function iw(n){yt().location.href=n}/**
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
 */function Pm(){return typeof yt().WorkerGlobalScope<"u"&&typeof yt().importScripts=="function"}async function ow(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function aw(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function cw(){return Pm()?self:null}/**
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
 */const Cm="firebaseLocalStorageDb",lw=1,po="firebaseLocalStorage",km="fbase_key";class Js{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Uo(n,e){return n.transaction([po],e?"readwrite":"readonly").objectStore(po)}function uw(){const n=indexedDB.deleteDatabase(Cm);return new Js(n).toPromise()}function lc(){const n=indexedDB.open(Cm,lw);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(po,{keyPath:km})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(po)?e(r):(r.close(),await uw(),e(await lc()))})})}async function Gh(n,e,t){const r=Uo(n,!0).put({[km]:e,value:t});return new Js(r).toPromise()}async function hw(n,e){const t=Uo(n,!1).get(e),r=await new Js(t).toPromise();return r===void 0?null:r.value}function Wh(n,e){const t=Uo(n,!0).delete(e);return new Js(t).toPromise()}const dw=800,fw=3;class Dm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await lc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>fw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fo._getInstance(cw()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await ow(),!this.activeServiceWorker)return;this.sender=new sw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||aw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await lc();return await Gh(e,mo,"1"),await Wh(e,mo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>hw(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Wh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Uo(s,!1).getAll();return new Js(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Dm.type="LOCAL";const mw=Dm;new Ws(3e4,6e4);/**
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
 */function Vm(n,e){return e?Ct(e):(Q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class rl extends Zc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return gr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return gr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function pw(n){return Em(n.auth,new rl(n),n.bypassAuthState)}function gw(n){const{auth:e,user:t}=n;return Q(t,e,"internal-error"),KI(t,new rl(n),n.bypassAuthState)}async function _w(n){const{auth:e,user:t}=n;return Q(t,e,"internal-error"),zI(t,new rl(n),n.bypassAuthState)}/**
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
 */class xm{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pw;case"linkViaPopup":case"linkViaRedirect":return _w;case"reauthViaPopup":case"reauthViaRedirect":return gw;default:ct(this.auth,"internal-error")}}resolve(e){Nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const yw=new Ws(2e3,1e4);async function vw(n,e,t){if(ht(n.app))return Promise.reject(dt(n,"operation-not-supported-in-this-environment"));const r=qt(n);Yv(n,e,tl);const s=Vm(r,t);return new Vn(r,"signInViaPopup",e,s).executeNotNull()}class Vn extends xm{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Vn.currentPopupAction&&Vn.currentPopupAction.cancel(),Vn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){Nt(this.filter.length===1,"Popup operations only handle one event");const e=nl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,yw.get())};e()}}Vn.currentPopupAction=null;/**
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
 */const Iw="pendingRedirect",Ki=new Map;class ww extends xm{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ki.get(this.auth._key());if(!e){try{const r=await Ew(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ki.set(this.auth._key(),e)}return this.bypassAuthState||Ki.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ew(n,e){const t=Aw(e),r=bw(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Tw(n,e){Ki.set(n._key(),e)}function bw(n){return Ct(n._redirectPersistence)}function Aw(n){return zi(Iw,n.config.apiKey,n.name)}async function Sw(n,e,t=!1){if(ht(n.app))return Promise.reject(Dt(n));const r=qt(n),s=Vm(r,e),o=await new ww(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Rw=10*60*1e3;class Pw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Cw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Nm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(dt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Rw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hh(e))}saveEventToCache(e){this.cachedEventUids.add(Hh(e)),this.lastProcessedEventTime=Date.now()}}function Hh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Nm({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Cw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Nm(n);default:return!1}}/**
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
 */async function kw(n,e={}){return $t(n,"GET","/v1/projects",e)}/**
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
 */const Dw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Vw=/^https?/;async function xw(n){if(n.config.emulator)return;const{authorizedDomains:e}=await kw(n);for(const t of e)try{if(Nw(t))return}catch{}ct(n,"unauthorized-domain")}function Nw(n){const e=ac(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!Vw.test(t))return!1;if(Dw.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Ow=new Ws(3e4,6e4);function Qh(){const n=yt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Mw(n){return new Promise((e,t)=>{var r,s,i;function o(){Qh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qh(),t(dt(n,"network-request-failed"))},timeout:Ow.get()})}if(!((s=(r=yt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=yt().gapi)===null||i===void 0)&&i.load)o();else{const a=AI("iframefcb");return yt()[a]=()=>{gapi.load?o():t(dt(n,"network-request-failed"))},ym(`${bI()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Gi=null,e})}let Gi=null;function Lw(n){return Gi=Gi||Mw(n),Gi}/**
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
 */const Fw=new Ws(5e3,15e3),Uw="__/auth/iframe",Bw="emulator/auth/iframe",jw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$w=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qw(n){const e=n.config;Q(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Jc(e,Bw):`https://${n.config.authDomain}/${Uw}`,r={apiKey:e.apiKey,appName:n.name,v:Or},s=$w.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Gs(r).slice(1)}`}async function zw(n){const e=await Lw(n),t=yt().gapi;return Q(t,n,"internal-error"),e.open({where:document.body,url:qw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jw,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=dt(n,"network-request-failed"),a=yt().setTimeout(()=>{i(o)},Fw.get());function l(){yt().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const Kw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Gw=500,Ww=600,Hw="_blank",Qw="http://localhost";class Jh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Jw(n,e,t,r=Gw,s=Ww){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Kw),{width:r.toString(),height:s.toString(),top:i,left:o}),h=Ce().toLowerCase();t&&(a=hm(h)?Hw:t),lm(h)&&(e=e||Qw,l.scrollbars="yes");const f=Object.entries(l).reduce((_,[g,w])=>`${_}${g}=${w},`,"");if(pI(h)&&a!=="_self")return Yw(e||"",a),new Jh(null);const m=window.open(e||"",a,f);Q(m,n,"popup-blocked");try{m.focus()}catch{}return new Jh(m)}function Yw(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Xw="__/auth/handler",Zw="emulator/auth/handler",eE=encodeURIComponent("fac");async function Yh(n,e,t,r,s,i){Q(n.config.authDomain,n,"auth-domain-config-required"),Q(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Or,eventId:s};if(e instanceof tl){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Oy(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Qs){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await n._getAppCheckToken(),h=l?`#${eE}=${encodeURIComponent(l)}`:"";return`${tE(n)}?${Gs(a).slice(1)}${h}`}function tE({config:n}){return n.emulator?Jc(n,Zw):`https://${n.authDomain}/${Xw}`}/**
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
 */const Ua="webStorageSupport";class nE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Rm,this._completeRedirectFn=Sw,this._overrideRedirectResult=Tw}async _openPopup(e,t,r,s){var i;Nt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Yh(e,t,r,ac(),s);return Jw(e,o,nl())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Yh(e,t,r,ac(),s);return iw(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Nt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await zw(e),r=new Pw(e);return t.register("authEvent",s=>(Q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ua,{type:Ua},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ua];o!==void 0&&t(!!o),ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=xw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return gm()||um()||Xc()}}const rE=nE;var Xh="@firebase/auth",Zh="1.7.9";/**
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
 */class sE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function iE(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function oE(n){vr(new Ln("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_m(n)},h=new wI(r,s,i,l);return kI(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),vr(new Ln("auth-internal",e=>{const t=qt(e.getProvider("auth").getImmediate());return(r=>new sE(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),cn(Xh,Zh,iE(n)),cn(Xh,Zh,"esm2017")}/**
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
 */const aE=5*60,cE=Wf("authIdTokenMaxAge")||aE;let ed=null;const lE=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>cE)return;const s=t==null?void 0:t.token;ed!==s&&(ed=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function uE(n=Lv()){const e=Gc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=CI(n,{popupRedirectResolver:rE,persistence:[mw,nw,Rm]}),r=Wf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=lE(i.toString());YI(t,o,()=>o(t.currentUser)),JI(t,a=>o(a))}}const s=Ty("auth");return s&&DI(t,`http://${s}`),t}function hE(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}EI({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=dt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",hE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});oE("Browser");var td=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xn,Om;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,v){function I(){}I.prototype=v.prototype,b.D=v.prototype,b.prototype=new I,b.prototype.constructor=b,b.C=function(T,S,C){for(var E=Array(arguments.length-2),lt=2;lt<arguments.length;lt++)E[lt-2]=arguments[lt];return v.prototype[S].apply(T,E)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,v,I){I||(I=0);var T=Array(16);if(typeof v=="string")for(var S=0;16>S;++S)T[S]=v.charCodeAt(I++)|v.charCodeAt(I++)<<8|v.charCodeAt(I++)<<16|v.charCodeAt(I++)<<24;else for(S=0;16>S;++S)T[S]=v[I++]|v[I++]<<8|v[I++]<<16|v[I++]<<24;v=b.g[0],I=b.g[1],S=b.g[2];var C=b.g[3],E=v+(C^I&(S^C))+T[0]+3614090360&4294967295;v=I+(E<<7&4294967295|E>>>25),E=C+(S^v&(I^S))+T[1]+3905402710&4294967295,C=v+(E<<12&4294967295|E>>>20),E=S+(I^C&(v^I))+T[2]+606105819&4294967295,S=C+(E<<17&4294967295|E>>>15),E=I+(v^S&(C^v))+T[3]+3250441966&4294967295,I=S+(E<<22&4294967295|E>>>10),E=v+(C^I&(S^C))+T[4]+4118548399&4294967295,v=I+(E<<7&4294967295|E>>>25),E=C+(S^v&(I^S))+T[5]+1200080426&4294967295,C=v+(E<<12&4294967295|E>>>20),E=S+(I^C&(v^I))+T[6]+2821735955&4294967295,S=C+(E<<17&4294967295|E>>>15),E=I+(v^S&(C^v))+T[7]+4249261313&4294967295,I=S+(E<<22&4294967295|E>>>10),E=v+(C^I&(S^C))+T[8]+1770035416&4294967295,v=I+(E<<7&4294967295|E>>>25),E=C+(S^v&(I^S))+T[9]+2336552879&4294967295,C=v+(E<<12&4294967295|E>>>20),E=S+(I^C&(v^I))+T[10]+4294925233&4294967295,S=C+(E<<17&4294967295|E>>>15),E=I+(v^S&(C^v))+T[11]+2304563134&4294967295,I=S+(E<<22&4294967295|E>>>10),E=v+(C^I&(S^C))+T[12]+1804603682&4294967295,v=I+(E<<7&4294967295|E>>>25),E=C+(S^v&(I^S))+T[13]+4254626195&4294967295,C=v+(E<<12&4294967295|E>>>20),E=S+(I^C&(v^I))+T[14]+2792965006&4294967295,S=C+(E<<17&4294967295|E>>>15),E=I+(v^S&(C^v))+T[15]+1236535329&4294967295,I=S+(E<<22&4294967295|E>>>10),E=v+(S^C&(I^S))+T[1]+4129170786&4294967295,v=I+(E<<5&4294967295|E>>>27),E=C+(I^S&(v^I))+T[6]+3225465664&4294967295,C=v+(E<<9&4294967295|E>>>23),E=S+(v^I&(C^v))+T[11]+643717713&4294967295,S=C+(E<<14&4294967295|E>>>18),E=I+(C^v&(S^C))+T[0]+3921069994&4294967295,I=S+(E<<20&4294967295|E>>>12),E=v+(S^C&(I^S))+T[5]+3593408605&4294967295,v=I+(E<<5&4294967295|E>>>27),E=C+(I^S&(v^I))+T[10]+38016083&4294967295,C=v+(E<<9&4294967295|E>>>23),E=S+(v^I&(C^v))+T[15]+3634488961&4294967295,S=C+(E<<14&4294967295|E>>>18),E=I+(C^v&(S^C))+T[4]+3889429448&4294967295,I=S+(E<<20&4294967295|E>>>12),E=v+(S^C&(I^S))+T[9]+568446438&4294967295,v=I+(E<<5&4294967295|E>>>27),E=C+(I^S&(v^I))+T[14]+3275163606&4294967295,C=v+(E<<9&4294967295|E>>>23),E=S+(v^I&(C^v))+T[3]+4107603335&4294967295,S=C+(E<<14&4294967295|E>>>18),E=I+(C^v&(S^C))+T[8]+1163531501&4294967295,I=S+(E<<20&4294967295|E>>>12),E=v+(S^C&(I^S))+T[13]+2850285829&4294967295,v=I+(E<<5&4294967295|E>>>27),E=C+(I^S&(v^I))+T[2]+4243563512&4294967295,C=v+(E<<9&4294967295|E>>>23),E=S+(v^I&(C^v))+T[7]+1735328473&4294967295,S=C+(E<<14&4294967295|E>>>18),E=I+(C^v&(S^C))+T[12]+2368359562&4294967295,I=S+(E<<20&4294967295|E>>>12),E=v+(I^S^C)+T[5]+4294588738&4294967295,v=I+(E<<4&4294967295|E>>>28),E=C+(v^I^S)+T[8]+2272392833&4294967295,C=v+(E<<11&4294967295|E>>>21),E=S+(C^v^I)+T[11]+1839030562&4294967295,S=C+(E<<16&4294967295|E>>>16),E=I+(S^C^v)+T[14]+4259657740&4294967295,I=S+(E<<23&4294967295|E>>>9),E=v+(I^S^C)+T[1]+2763975236&4294967295,v=I+(E<<4&4294967295|E>>>28),E=C+(v^I^S)+T[4]+1272893353&4294967295,C=v+(E<<11&4294967295|E>>>21),E=S+(C^v^I)+T[7]+4139469664&4294967295,S=C+(E<<16&4294967295|E>>>16),E=I+(S^C^v)+T[10]+3200236656&4294967295,I=S+(E<<23&4294967295|E>>>9),E=v+(I^S^C)+T[13]+681279174&4294967295,v=I+(E<<4&4294967295|E>>>28),E=C+(v^I^S)+T[0]+3936430074&4294967295,C=v+(E<<11&4294967295|E>>>21),E=S+(C^v^I)+T[3]+3572445317&4294967295,S=C+(E<<16&4294967295|E>>>16),E=I+(S^C^v)+T[6]+76029189&4294967295,I=S+(E<<23&4294967295|E>>>9),E=v+(I^S^C)+T[9]+3654602809&4294967295,v=I+(E<<4&4294967295|E>>>28),E=C+(v^I^S)+T[12]+3873151461&4294967295,C=v+(E<<11&4294967295|E>>>21),E=S+(C^v^I)+T[15]+530742520&4294967295,S=C+(E<<16&4294967295|E>>>16),E=I+(S^C^v)+T[2]+3299628645&4294967295,I=S+(E<<23&4294967295|E>>>9),E=v+(S^(I|~C))+T[0]+4096336452&4294967295,v=I+(E<<6&4294967295|E>>>26),E=C+(I^(v|~S))+T[7]+1126891415&4294967295,C=v+(E<<10&4294967295|E>>>22),E=S+(v^(C|~I))+T[14]+2878612391&4294967295,S=C+(E<<15&4294967295|E>>>17),E=I+(C^(S|~v))+T[5]+4237533241&4294967295,I=S+(E<<21&4294967295|E>>>11),E=v+(S^(I|~C))+T[12]+1700485571&4294967295,v=I+(E<<6&4294967295|E>>>26),E=C+(I^(v|~S))+T[3]+2399980690&4294967295,C=v+(E<<10&4294967295|E>>>22),E=S+(v^(C|~I))+T[10]+4293915773&4294967295,S=C+(E<<15&4294967295|E>>>17),E=I+(C^(S|~v))+T[1]+2240044497&4294967295,I=S+(E<<21&4294967295|E>>>11),E=v+(S^(I|~C))+T[8]+1873313359&4294967295,v=I+(E<<6&4294967295|E>>>26),E=C+(I^(v|~S))+T[15]+4264355552&4294967295,C=v+(E<<10&4294967295|E>>>22),E=S+(v^(C|~I))+T[6]+2734768916&4294967295,S=C+(E<<15&4294967295|E>>>17),E=I+(C^(S|~v))+T[13]+1309151649&4294967295,I=S+(E<<21&4294967295|E>>>11),E=v+(S^(I|~C))+T[4]+4149444226&4294967295,v=I+(E<<6&4294967295|E>>>26),E=C+(I^(v|~S))+T[11]+3174756917&4294967295,C=v+(E<<10&4294967295|E>>>22),E=S+(v^(C|~I))+T[2]+718787259&4294967295,S=C+(E<<15&4294967295|E>>>17),E=I+(C^(S|~v))+T[9]+3951481745&4294967295,b.g[0]=b.g[0]+v&4294967295,b.g[1]=b.g[1]+(S+(E<<21&4294967295|E>>>11))&4294967295,b.g[2]=b.g[2]+S&4294967295,b.g[3]=b.g[3]+C&4294967295}r.prototype.u=function(b,v){v===void 0&&(v=b.length);for(var I=v-this.blockSize,T=this.B,S=this.h,C=0;C<v;){if(S==0)for(;C<=I;)s(this,b,C),C+=this.blockSize;if(typeof b=="string"){for(;C<v;)if(T[S++]=b.charCodeAt(C++),S==this.blockSize){s(this,T),S=0;break}}else for(;C<v;)if(T[S++]=b[C++],S==this.blockSize){s(this,T),S=0;break}}this.h=S,this.o+=v},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var v=1;v<b.length-8;++v)b[v]=0;var I=8*this.o;for(v=b.length-8;v<b.length;++v)b[v]=I&255,I/=256;for(this.u(b),b=Array(16),v=I=0;4>v;++v)for(var T=0;32>T;T+=8)b[I++]=this.g[v]>>>T&255;return b};function i(b,v){var I=a;return Object.prototype.hasOwnProperty.call(I,b)?I[b]:I[b]=v(b)}function o(b,v){this.h=v;for(var I=[],T=!0,S=b.length-1;0<=S;S--){var C=b[S]|0;T&&C==v||(I[S]=C,T=!1)}this.g=I}var a={};function l(b){return-128<=b&&128>b?i(b,function(v){return new o([v|0],0>v?-1:0)}):new o([b|0],0>b?-1:0)}function h(b){if(isNaN(b)||!isFinite(b))return m;if(0>b)return A(h(-b));for(var v=[],I=1,T=0;b>=I;T++)v[T]=b/I|0,I*=4294967296;return new o(v,0)}function f(b,v){if(b.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(b.charAt(0)=="-")return A(f(b.substring(1),v));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=h(Math.pow(v,8)),T=m,S=0;S<b.length;S+=8){var C=Math.min(8,b.length-S),E=parseInt(b.substring(S,S+C),v);8>C?(C=h(Math.pow(v,C)),T=T.j(C).add(h(E))):(T=T.j(I),T=T.add(h(E)))}return T}var m=l(0),_=l(1),g=l(16777216);n=o.prototype,n.m=function(){if(R(this))return-A(this).m();for(var b=0,v=1,I=0;I<this.g.length;I++){var T=this.i(I);b+=(0<=T?T:4294967296+T)*v,v*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(w(this))return"0";if(R(this))return"-"+A(this).toString(b);for(var v=h(Math.pow(b,6)),I=this,T="";;){var S=M(I,v).g;I=V(I,S.j(v));var C=((0<I.g.length?I.g[0]:I.h)>>>0).toString(b);if(I=S,w(I))return C+T;for(;6>C.length;)C="0"+C;T=C+T}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function w(b){if(b.h!=0)return!1;for(var v=0;v<b.g.length;v++)if(b.g[v]!=0)return!1;return!0}function R(b){return b.h==-1}n.l=function(b){return b=V(this,b),R(b)?-1:w(b)?0:1};function A(b){for(var v=b.g.length,I=[],T=0;T<v;T++)I[T]=~b.g[T];return new o(I,~b.h).add(_)}n.abs=function(){return R(this)?A(this):this},n.add=function(b){for(var v=Math.max(this.g.length,b.g.length),I=[],T=0,S=0;S<=v;S++){var C=T+(this.i(S)&65535)+(b.i(S)&65535),E=(C>>>16)+(this.i(S)>>>16)+(b.i(S)>>>16);T=E>>>16,C&=65535,E&=65535,I[S]=E<<16|C}return new o(I,I[I.length-1]&-2147483648?-1:0)};function V(b,v){return b.add(A(v))}n.j=function(b){if(w(this)||w(b))return m;if(R(this))return R(b)?A(this).j(A(b)):A(A(this).j(b));if(R(b))return A(this.j(A(b)));if(0>this.l(g)&&0>b.l(g))return h(this.m()*b.m());for(var v=this.g.length+b.g.length,I=[],T=0;T<2*v;T++)I[T]=0;for(T=0;T<this.g.length;T++)for(var S=0;S<b.g.length;S++){var C=this.i(T)>>>16,E=this.i(T)&65535,lt=b.i(S)>>>16,J=b.i(S)&65535;I[2*T+2*S]+=E*J,N(I,2*T+2*S),I[2*T+2*S+1]+=C*J,N(I,2*T+2*S+1),I[2*T+2*S+1]+=E*lt,N(I,2*T+2*S+1),I[2*T+2*S+2]+=C*lt,N(I,2*T+2*S+2)}for(T=0;T<v;T++)I[T]=I[2*T+1]<<16|I[2*T];for(T=v;T<2*v;T++)I[T]=0;return new o(I,0)};function N(b,v){for(;(b[v]&65535)!=b[v];)b[v+1]+=b[v]>>>16,b[v]&=65535,v++}function L(b,v){this.g=b,this.h=v}function M(b,v){if(w(v))throw Error("division by zero");if(w(b))return new L(m,m);if(R(b))return v=M(A(b),v),new L(A(v.g),A(v.h));if(R(v))return v=M(b,A(v)),new L(A(v.g),v.h);if(30<b.g.length){if(R(b)||R(v))throw Error("slowDivide_ only works with positive integers.");for(var I=_,T=v;0>=T.l(b);)I=q(I),T=q(T);var S=$(I,1),C=$(T,1);for(T=$(T,2),I=$(I,2);!w(T);){var E=C.add(T);0>=E.l(b)&&(S=S.add(I),C=E),T=$(T,1),I=$(I,1)}return v=V(b,S.j(v)),new L(S,v)}for(S=m;0<=b.l(v);){for(I=Math.max(1,Math.floor(b.m()/v.m())),T=Math.ceil(Math.log(I)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),C=h(I),E=C.j(v);R(E)||0<E.l(b);)I-=T,C=h(I),E=C.j(v);w(C)&&(C=_),S=S.add(C),b=V(b,E)}return new L(S,b)}n.A=function(b){return M(this,b).h},n.and=function(b){for(var v=Math.max(this.g.length,b.g.length),I=[],T=0;T<v;T++)I[T]=this.i(T)&b.i(T);return new o(I,this.h&b.h)},n.or=function(b){for(var v=Math.max(this.g.length,b.g.length),I=[],T=0;T<v;T++)I[T]=this.i(T)|b.i(T);return new o(I,this.h|b.h)},n.xor=function(b){for(var v=Math.max(this.g.length,b.g.length),I=[],T=0;T<v;T++)I[T]=this.i(T)^b.i(T);return new o(I,this.h^b.h)};function q(b){for(var v=b.g.length+1,I=[],T=0;T<v;T++)I[T]=b.i(T)<<1|b.i(T-1)>>>31;return new o(I,b.h)}function $(b,v){var I=v>>5;v%=32;for(var T=b.g.length-I,S=[],C=0;C<T;C++)S[C]=0<v?b.i(C+I)>>>v|b.i(C+I+1)<<32-v:b.i(C+I);return new o(S,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Om=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,xn=o}).apply(typeof td<"u"?td:typeof self<"u"?self:typeof window<"u"?window:{});var ki=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mm,hs,Lm,Wi,uc,Fm,Um,Bm;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,d,p){return c==Array.prototype||c==Object.prototype||(c[d]=p.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof ki=="object"&&ki];for(var d=0;d<c.length;++d){var p=c[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=t(this);function s(c,d){if(d)e:{var p=r;c=c.split(".");for(var y=0;y<c.length-1;y++){var P=c[y];if(!(P in p))break e;p=p[P]}c=c[c.length-1],y=p[c],d=d(y),d!=y&&d!=null&&e(p,c,{configurable:!0,writable:!0,value:d})}}function i(c,d){c instanceof String&&(c+="");var p=0,y=!1,P={next:function(){if(!y&&p<c.length){var D=p++;return{value:d(D,c[D]),done:!1}}return y=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(c){return c||function(){return i(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(c){var d=typeof c;return d=d!="object"?d:c?Array.isArray(c)?"array":d:"null",d=="array"||d=="object"&&typeof c.length=="number"}function h(c){var d=typeof c;return d=="object"&&c!=null||d=="function"}function f(c,d,p){return c.call.apply(c.bind,arguments)}function m(c,d,p){if(!c)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,y),c.apply(d,P)}}return function(){return c.apply(d,arguments)}}function _(c,d,p){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,_.apply(null,arguments)}function g(c,d){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),c.apply(this,y)}}function w(c,d){function p(){}p.prototype=d.prototype,c.aa=d.prototype,c.prototype=new p,c.prototype.constructor=c,c.Qb=function(y,P,D){for(var U=Array(arguments.length-2),le=2;le<arguments.length;le++)U[le-2]=arguments[le];return d.prototype[P].apply(y,U)}}function R(c){const d=c.length;if(0<d){const p=Array(d);for(let y=0;y<d;y++)p[y]=c[y];return p}return[]}function A(c,d){for(let p=1;p<arguments.length;p++){const y=arguments[p];if(l(y)){const P=c.length||0,D=y.length||0;c.length=P+D;for(let U=0;U<D;U++)c[P+U]=y[U]}else c.push(y)}}class V{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function N(c){return/^[\s\xa0]*$/.test(c)}function L(){var c=a.navigator;return c&&(c=c.userAgent)?c:""}function M(c){return M[" "](c),c}M[" "]=function(){};var q=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function $(c,d,p){for(const y in c)d.call(p,c[y],y,c)}function b(c,d){for(const p in c)d.call(void 0,c[p],p,c)}function v(c){const d={};for(const p in c)d[p]=c[p];return d}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(c,d){let p,y;for(let P=1;P<arguments.length;P++){y=arguments[P];for(p in y)c[p]=y[p];for(let D=0;D<I.length;D++)p=I[D],Object.prototype.hasOwnProperty.call(y,p)&&(c[p]=y[p])}}function S(c){var d=1;c=c.split(":");const p=[];for(;0<d&&c.length;)p.push(c.shift()),d--;return c.length&&p.push(c.join(":")),p}function C(c){a.setTimeout(()=>{throw c},0)}function E(){var c=ca;let d=null;return c.g&&(d=c.g,c.g=c.g.next,c.g||(c.h=null),d.next=null),d}class lt{constructor(){this.h=this.g=null}add(d,p){const y=J.get();y.set(d,p),this.h?this.h.next=y:this.g=y,this.h=y}}var J=new V(()=>new Fe,c=>c.reset());class Fe{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Kt,Tt=!1,ca=new lt,fu=()=>{const c=a.Promise.resolve(void 0);Kt=()=>{c.then(b_)}};var b_=()=>{for(var c;c=E();){try{c.h.call(c.g)}catch(p){C(p)}var d=J;d.j(c),100>d.h&&(d.h++,c.next=d.g,d.g=c)}Tt=!1};function Gt(){this.s=this.s,this.C=this.C}Gt.prototype.s=!1,Gt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Gt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ue(c,d){this.type=c,this.g=this.target=d,this.defaultPrevented=!1}Ue.prototype.h=function(){this.defaultPrevented=!0};var A_=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,d=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const p=()=>{};a.addEventListener("test",p,d),a.removeEventListener("test",p,d)}catch{}return c}();function qr(c,d){if(Ue.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var p=this.type=c.type,y=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=d,d=c.relatedTarget){if(q){e:{try{M(d.nodeName);var P=!0;break e}catch{}P=!1}P||(d=null)}}else p=="mouseover"?d=c.fromElement:p=="mouseout"&&(d=c.toElement);this.relatedTarget=d,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:S_[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&qr.aa.h.call(this)}}w(qr,Ue);var S_={2:"touch",3:"pen",4:"mouse"};qr.prototype.h=function(){qr.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var li="closure_listenable_"+(1e6*Math.random()|0),R_=0;function P_(c,d,p,y,P){this.listener=c,this.proxy=null,this.src=d,this.type=p,this.capture=!!y,this.ha=P,this.key=++R_,this.da=this.fa=!1}function ui(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function hi(c){this.src=c,this.g={},this.h=0}hi.prototype.add=function(c,d,p,y,P){var D=c.toString();c=this.g[D],c||(c=this.g[D]=[],this.h++);var U=ua(c,d,y,P);return-1<U?(d=c[U],p||(d.fa=!1)):(d=new P_(d,this.src,D,!!y,P),d.fa=p,c.push(d)),d};function la(c,d){var p=d.type;if(p in c.g){var y=c.g[p],P=Array.prototype.indexOf.call(y,d,void 0),D;(D=0<=P)&&Array.prototype.splice.call(y,P,1),D&&(ui(d),c.g[p].length==0&&(delete c.g[p],c.h--))}}function ua(c,d,p,y){for(var P=0;P<c.length;++P){var D=c[P];if(!D.da&&D.listener==d&&D.capture==!!p&&D.ha==y)return P}return-1}var ha="closure_lm_"+(1e6*Math.random()|0),da={};function mu(c,d,p,y,P){if(Array.isArray(d)){for(var D=0;D<d.length;D++)mu(c,d[D],p,y,P);return null}return p=_u(p),c&&c[li]?c.K(d,p,h(y)?!!y.capture:!1,P):C_(c,d,p,!1,y,P)}function C_(c,d,p,y,P,D){if(!d)throw Error("Invalid event type");var U=h(P)?!!P.capture:!!P,le=ma(c);if(le||(c[ha]=le=new hi(c)),p=le.add(d,p,y,U,D),p.proxy)return p;if(y=k_(),p.proxy=y,y.src=c,y.listener=p,c.addEventListener)A_||(P=U),P===void 0&&(P=!1),c.addEventListener(d.toString(),y,P);else if(c.attachEvent)c.attachEvent(gu(d.toString()),y);else if(c.addListener&&c.removeListener)c.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function k_(){function c(p){return d.call(c.src,c.listener,p)}const d=D_;return c}function pu(c,d,p,y,P){if(Array.isArray(d))for(var D=0;D<d.length;D++)pu(c,d[D],p,y,P);else y=h(y)?!!y.capture:!!y,p=_u(p),c&&c[li]?(c=c.i,d=String(d).toString(),d in c.g&&(D=c.g[d],p=ua(D,p,y,P),-1<p&&(ui(D[p]),Array.prototype.splice.call(D,p,1),D.length==0&&(delete c.g[d],c.h--)))):c&&(c=ma(c))&&(d=c.g[d.toString()],c=-1,d&&(c=ua(d,p,y,P)),(p=-1<c?d[c]:null)&&fa(p))}function fa(c){if(typeof c!="number"&&c&&!c.da){var d=c.src;if(d&&d[li])la(d.i,c);else{var p=c.type,y=c.proxy;d.removeEventListener?d.removeEventListener(p,y,c.capture):d.detachEvent?d.detachEvent(gu(p),y):d.addListener&&d.removeListener&&d.removeListener(y),(p=ma(d))?(la(p,c),p.h==0&&(p.src=null,d[ha]=null)):ui(c)}}}function gu(c){return c in da?da[c]:da[c]="on"+c}function D_(c,d){if(c.da)c=!0;else{d=new qr(d,this);var p=c.listener,y=c.ha||c.src;c.fa&&fa(c),c=p.call(y,d)}return c}function ma(c){return c=c[ha],c instanceof hi?c:null}var pa="__closure_events_fn_"+(1e9*Math.random()>>>0);function _u(c){return typeof c=="function"?c:(c[pa]||(c[pa]=function(d){return c.handleEvent(d)}),c[pa])}function Be(){Gt.call(this),this.i=new hi(this),this.M=this,this.F=null}w(Be,Gt),Be.prototype[li]=!0,Be.prototype.removeEventListener=function(c,d,p,y){pu(this,c,d,p,y)};function Ge(c,d){var p,y=c.F;if(y)for(p=[];y;y=y.F)p.push(y);if(c=c.M,y=d.type||d,typeof d=="string")d=new Ue(d,c);else if(d instanceof Ue)d.target=d.target||c;else{var P=d;d=new Ue(y,c),T(d,P)}if(P=!0,p)for(var D=p.length-1;0<=D;D--){var U=d.g=p[D];P=di(U,y,!0,d)&&P}if(U=d.g=c,P=di(U,y,!0,d)&&P,P=di(U,y,!1,d)&&P,p)for(D=0;D<p.length;D++)U=d.g=p[D],P=di(U,y,!1,d)&&P}Be.prototype.N=function(){if(Be.aa.N.call(this),this.i){var c=this.i,d;for(d in c.g){for(var p=c.g[d],y=0;y<p.length;y++)ui(p[y]);delete c.g[d],c.h--}}this.F=null},Be.prototype.K=function(c,d,p,y){return this.i.add(String(c),d,!1,p,y)},Be.prototype.L=function(c,d,p,y){return this.i.add(String(c),d,!0,p,y)};function di(c,d,p,y){if(d=c.i.g[String(d)],!d)return!0;d=d.concat();for(var P=!0,D=0;D<d.length;++D){var U=d[D];if(U&&!U.da&&U.capture==p){var le=U.listener,xe=U.ha||U.src;U.fa&&la(c.i,U),P=le.call(xe,y)!==!1&&P}}return P&&!y.defaultPrevented}function yu(c,d,p){if(typeof c=="function")p&&(c=_(c,p));else if(c&&typeof c.handleEvent=="function")c=_(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(c,d||0)}function vu(c){c.g=yu(()=>{c.g=null,c.i&&(c.i=!1,vu(c))},c.l);const d=c.h;c.h=null,c.m.apply(null,d)}class V_ extends Gt{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:vu(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zr(c){Gt.call(this),this.h=c,this.g={}}w(zr,Gt);var Iu=[];function wu(c){$(c.g,function(d,p){this.g.hasOwnProperty(p)&&fa(d)},c),c.g={}}zr.prototype.N=function(){zr.aa.N.call(this),wu(this)},zr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ga=a.JSON.stringify,x_=a.JSON.parse,N_=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function _a(){}_a.prototype.h=null;function Eu(c){return c.h||(c.h=c.i())}function Tu(){}var Kr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ya(){Ue.call(this,"d")}w(ya,Ue);function va(){Ue.call(this,"c")}w(va,Ue);var In={},bu=null;function fi(){return bu=bu||new Be}In.La="serverreachability";function Au(c){Ue.call(this,In.La,c)}w(Au,Ue);function Gr(c){const d=fi();Ge(d,new Au(d))}In.STAT_EVENT="statevent";function Su(c,d){Ue.call(this,In.STAT_EVENT,c),this.stat=d}w(Su,Ue);function We(c){const d=fi();Ge(d,new Su(d,c))}In.Ma="timingevent";function Ru(c,d){Ue.call(this,In.Ma,c),this.size=d}w(Ru,Ue);function Wr(c,d){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},d)}function Hr(){this.g=!0}Hr.prototype.xa=function(){this.g=!1};function O_(c,d,p,y,P,D){c.info(function(){if(c.g)if(D)for(var U="",le=D.split("&"),xe=0;xe<le.length;xe++){var se=le[xe].split("=");if(1<se.length){var je=se[0];se=se[1];var $e=je.split("_");U=2<=$e.length&&$e[1]=="type"?U+(je+"="+se+"&"):U+(je+"=redacted&")}}else U=null;else U=D;return"XMLHTTP REQ ("+y+") [attempt "+P+"]: "+d+`
`+p+`
`+U})}function M_(c,d,p,y,P,D,U){c.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+P+"]: "+d+`
`+p+`
`+D+" "+U})}function er(c,d,p,y){c.info(function(){return"XMLHTTP TEXT ("+d+"): "+F_(c,p)+(y?" "+y:"")})}function L_(c,d){c.info(function(){return"TIMEOUT: "+d})}Hr.prototype.info=function(){};function F_(c,d){if(!c.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(c=0;c<p.length;c++)if(Array.isArray(p[c])){var y=p[c];if(!(2>y.length)){var P=y[1];if(Array.isArray(P)&&!(1>P.length)){var D=P[0];if(D!="noop"&&D!="stop"&&D!="close")for(var U=1;U<P.length;U++)P[U]=""}}}}return ga(p)}catch{return d}}var mi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Pu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ia;function pi(){}w(pi,_a),pi.prototype.g=function(){return new XMLHttpRequest},pi.prototype.i=function(){return{}},Ia=new pi;function Wt(c,d,p,y){this.j=c,this.i=d,this.l=p,this.R=y||1,this.U=new zr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Cu}function Cu(){this.i=null,this.g="",this.h=!1}var ku={},wa={};function Ea(c,d,p){c.L=1,c.v=vi(bt(d)),c.m=p,c.P=!0,Du(c,null)}function Du(c,d){c.F=Date.now(),gi(c),c.A=bt(c.v);var p=c.A,y=c.R;Array.isArray(y)||(y=[String(y)]),Ku(p.i,"t",y),c.C=0,p=c.j.J,c.h=new Cu,c.g=lh(c.j,p?d:null,!c.m),0<c.O&&(c.M=new V_(_(c.Y,c,c.g),c.O)),d=c.U,p=c.g,y=c.ca;var P="readystatechange";Array.isArray(P)||(P&&(Iu[0]=P.toString()),P=Iu);for(var D=0;D<P.length;D++){var U=mu(p,P[D],y||d.handleEvent,!1,d.h||d);if(!U)break;d.g[U.key]=U}d=c.H?v(c.H):{},c.m?(c.u||(c.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,d)):(c.u="GET",c.g.ea(c.A,c.u,null,d)),Gr(),O_(c.i,c.u,c.A,c.l,c.R,c.m)}Wt.prototype.ca=function(c){c=c.target;const d=this.M;d&&At(c)==3?d.j():this.Y(c)},Wt.prototype.Y=function(c){try{if(c==this.g)e:{const $e=At(this.g);var d=this.g.Ba();const rr=this.g.Z();if(!(3>$e)&&($e!=3||this.g&&(this.h.h||this.g.oa()||Xu(this.g)))){this.J||$e!=4||d==7||(d==8||0>=rr?Gr(3):Gr(2)),Ta(this);var p=this.g.Z();this.X=p;t:if(Vu(this)){var y=Xu(this.g);c="";var P=y.length,D=At(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){wn(this),Qr(this);var U="";break t}this.h.i=new a.TextDecoder}for(d=0;d<P;d++)this.h.h=!0,c+=this.h.i.decode(y[d],{stream:!(D&&d==P-1)});y.length=0,this.h.g+=c,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=p==200,M_(this.i,this.u,this.A,this.l,this.R,$e,p),this.o){if(this.T&&!this.K){t:{if(this.g){var le,xe=this.g;if((le=xe.g?xe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(le)){var se=le;break t}}se=null}if(p=se)er(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ba(this,p);else{this.o=!1,this.s=3,We(12),wn(this),Qr(this);break e}}if(this.P){p=!0;let ut;for(;!this.J&&this.C<U.length;)if(ut=U_(this,U),ut==wa){$e==4&&(this.s=4,We(14),p=!1),er(this.i,this.l,null,"[Incomplete Response]");break}else if(ut==ku){this.s=4,We(15),er(this.i,this.l,U,"[Invalid Chunk]"),p=!1;break}else er(this.i,this.l,ut,null),ba(this,ut);if(Vu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),$e!=4||U.length!=0||this.h.h||(this.s=1,We(16),p=!1),this.o=this.o&&p,!p)er(this.i,this.l,U,"[Invalid Chunked Response]"),wn(this),Qr(this);else if(0<U.length&&!this.W){this.W=!0;var je=this.j;je.g==this&&je.ba&&!je.M&&(je.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),ka(je),je.M=!0,We(11))}}else er(this.i,this.l,U,null),ba(this,U);$e==4&&wn(this),this.o&&!this.J&&($e==4?ih(this.j,this):(this.o=!1,gi(this)))}else ny(this.g),p==400&&0<U.indexOf("Unknown SID")?(this.s=3,We(12)):(this.s=0,We(13)),wn(this),Qr(this)}}}catch{}finally{}};function Vu(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function U_(c,d){var p=c.C,y=d.indexOf(`
`,p);return y==-1?wa:(p=Number(d.substring(p,y)),isNaN(p)?ku:(y+=1,y+p>d.length?wa:(d=d.slice(y,y+p),c.C=y+p,d)))}Wt.prototype.cancel=function(){this.J=!0,wn(this)};function gi(c){c.S=Date.now()+c.I,xu(c,c.I)}function xu(c,d){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Wr(_(c.ba,c),d)}function Ta(c){c.B&&(a.clearTimeout(c.B),c.B=null)}Wt.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(L_(this.i,this.A),this.L!=2&&(Gr(),We(17)),wn(this),this.s=2,Qr(this)):xu(this,this.S-c)};function Qr(c){c.j.G==0||c.J||ih(c.j,c)}function wn(c){Ta(c);var d=c.M;d&&typeof d.ma=="function"&&d.ma(),c.M=null,wu(c.U),c.g&&(d=c.g,c.g=null,d.abort(),d.ma())}function ba(c,d){try{var p=c.j;if(p.G!=0&&(p.g==c||Aa(p.h,c))){if(!c.K&&Aa(p.h,c)&&p.G==3){try{var y=p.Da.g.parse(d)}catch{y=null}if(Array.isArray(y)&&y.length==3){var P=y;if(P[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<c.F)Ai(p),Ti(p);else break e;Ca(p),We(18)}}else p.za=P[1],0<p.za-p.T&&37500>P[2]&&p.F&&p.v==0&&!p.C&&(p.C=Wr(_(p.Za,p),6e3));if(1>=Mu(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Tn(p,11)}else if((c.K||p.g==c)&&Ai(p),!N(d))for(P=p.Da.g.parse(d),d=0;d<P.length;d++){let se=P[d];if(p.T=se[0],se=se[1],p.G==2)if(se[0]=="c"){p.K=se[1],p.ia=se[2];const je=se[3];je!=null&&(p.la=je,p.j.info("VER="+p.la));const $e=se[4];$e!=null&&(p.Aa=$e,p.j.info("SVER="+p.Aa));const rr=se[5];rr!=null&&typeof rr=="number"&&0<rr&&(y=1.5*rr,p.L=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const ut=c.g;if(ut){const Ri=ut.g?ut.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ri){var D=y.h;D.g||Ri.indexOf("spdy")==-1&&Ri.indexOf("quic")==-1&&Ri.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Sa(D,D.h),D.h=null))}if(y.D){const Da=ut.g?ut.g.getResponseHeader("X-HTTP-Session-Id"):null;Da&&(y.ya=Da,fe(y.I,y.D,Da))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-c.F,p.j.info("Handshake RTT: "+p.R+"ms")),y=p;var U=c;if(y.qa=ch(y,y.J?y.ia:null,y.W),U.K){Lu(y.h,U);var le=U,xe=y.L;xe&&(le.I=xe),le.B&&(Ta(le),gi(le)),y.g=U}else rh(y);0<p.i.length&&bi(p)}else se[0]!="stop"&&se[0]!="close"||Tn(p,7);else p.G==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?Tn(p,7):Pa(p):se[0]!="noop"&&p.l&&p.l.ta(se),p.v=0)}}Gr(4)}catch{}}var B_=class{constructor(c,d){this.g=c,this.map=d}};function Nu(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ou(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Mu(c){return c.h?1:c.g?c.g.size:0}function Aa(c,d){return c.h?c.h==d:c.g?c.g.has(d):!1}function Sa(c,d){c.g?c.g.add(d):c.h=d}function Lu(c,d){c.h&&c.h==d?c.h=null:c.g&&c.g.has(d)&&c.g.delete(d)}Nu.prototype.cancel=function(){if(this.i=Fu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Fu(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let d=c.i;for(const p of c.g.values())d=d.concat(p.D);return d}return R(c.i)}function j_(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(l(c)){for(var d=[],p=c.length,y=0;y<p;y++)d.push(c[y]);return d}d=[],p=0;for(y in c)d[p++]=c[y];return d}function $_(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(l(c)||typeof c=="string"){var d=[];c=c.length;for(var p=0;p<c;p++)d.push(p);return d}d=[],p=0;for(const y in c)d[p++]=y;return d}}}function Uu(c,d){if(c.forEach&&typeof c.forEach=="function")c.forEach(d,void 0);else if(l(c)||typeof c=="string")Array.prototype.forEach.call(c,d,void 0);else for(var p=$_(c),y=j_(c),P=y.length,D=0;D<P;D++)d.call(void 0,y[D],p&&p[D],c)}var Bu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function q_(c,d){if(c){c=c.split("&");for(var p=0;p<c.length;p++){var y=c[p].indexOf("="),P=null;if(0<=y){var D=c[p].substring(0,y);P=c[p].substring(y+1)}else D=c[p];d(D,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function En(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof En){this.h=c.h,_i(this,c.j),this.o=c.o,this.g=c.g,yi(this,c.s),this.l=c.l;var d=c.i,p=new Xr;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),ju(this,p),this.m=c.m}else c&&(d=String(c).match(Bu))?(this.h=!1,_i(this,d[1]||"",!0),this.o=Jr(d[2]||""),this.g=Jr(d[3]||"",!0),yi(this,d[4]),this.l=Jr(d[5]||"",!0),ju(this,d[6]||"",!0),this.m=Jr(d[7]||"")):(this.h=!1,this.i=new Xr(null,this.h))}En.prototype.toString=function(){var c=[],d=this.j;d&&c.push(Yr(d,$u,!0),":");var p=this.g;return(p||d=="file")&&(c.push("//"),(d=this.o)&&c.push(Yr(d,$u,!0),"@"),c.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&c.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&c.push("/"),c.push(Yr(p,p.charAt(0)=="/"?G_:K_,!0))),(p=this.i.toString())&&c.push("?",p),(p=this.m)&&c.push("#",Yr(p,H_)),c.join("")};function bt(c){return new En(c)}function _i(c,d,p){c.j=p?Jr(d,!0):d,c.j&&(c.j=c.j.replace(/:$/,""))}function yi(c,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);c.s=d}else c.s=null}function ju(c,d,p){d instanceof Xr?(c.i=d,Q_(c.i,c.h)):(p||(d=Yr(d,W_)),c.i=new Xr(d,c.h))}function fe(c,d,p){c.i.set(d,p)}function vi(c){return fe(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Jr(c,d){return c?d?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Yr(c,d,p){return typeof c=="string"?(c=encodeURI(c).replace(d,z_),p&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function z_(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var $u=/[#\/\?@]/g,K_=/[#\?:]/g,G_=/[#\?]/g,W_=/[#\?@]/g,H_=/#/g;function Xr(c,d){this.h=this.g=null,this.i=c||null,this.j=!!d}function Ht(c){c.g||(c.g=new Map,c.h=0,c.i&&q_(c.i,function(d,p){c.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}n=Xr.prototype,n.add=function(c,d){Ht(this),this.i=null,c=tr(this,c);var p=this.g.get(c);return p||this.g.set(c,p=[]),p.push(d),this.h+=1,this};function qu(c,d){Ht(c),d=tr(c,d),c.g.has(d)&&(c.i=null,c.h-=c.g.get(d).length,c.g.delete(d))}function zu(c,d){return Ht(c),d=tr(c,d),c.g.has(d)}n.forEach=function(c,d){Ht(this),this.g.forEach(function(p,y){p.forEach(function(P){c.call(d,P,y,this)},this)},this)},n.na=function(){Ht(this);const c=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let y=0;y<d.length;y++){const P=c[y];for(let D=0;D<P.length;D++)p.push(d[y])}return p},n.V=function(c){Ht(this);let d=[];if(typeof c=="string")zu(this,c)&&(d=d.concat(this.g.get(tr(this,c))));else{c=Array.from(this.g.values());for(let p=0;p<c.length;p++)d=d.concat(c[p])}return d},n.set=function(c,d){return Ht(this),this.i=null,c=tr(this,c),zu(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[d]),this.h+=1,this},n.get=function(c,d){return c?(c=this.V(c),0<c.length?String(c[0]):d):d};function Ku(c,d,p){qu(c,d),0<p.length&&(c.i=null,c.g.set(tr(c,d),R(p)),c.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var y=d[p];const D=encodeURIComponent(String(y)),U=this.V(y);for(y=0;y<U.length;y++){var P=D;U[y]!==""&&(P+="="+encodeURIComponent(String(U[y]))),c.push(P)}}return this.i=c.join("&")};function tr(c,d){return d=String(d),c.j&&(d=d.toLowerCase()),d}function Q_(c,d){d&&!c.j&&(Ht(c),c.i=null,c.g.forEach(function(p,y){var P=y.toLowerCase();y!=P&&(qu(this,y),Ku(this,P,p))},c)),c.j=d}function J_(c,d){const p=new Hr;if(a.Image){const y=new Image;y.onload=g(Qt,p,"TestLoadImage: loaded",!0,d,y),y.onerror=g(Qt,p,"TestLoadImage: error",!1,d,y),y.onabort=g(Qt,p,"TestLoadImage: abort",!1,d,y),y.ontimeout=g(Qt,p,"TestLoadImage: timeout",!1,d,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=c}else d(!1)}function Y_(c,d){const p=new Hr,y=new AbortController,P=setTimeout(()=>{y.abort(),Qt(p,"TestPingServer: timeout",!1,d)},1e4);fetch(c,{signal:y.signal}).then(D=>{clearTimeout(P),D.ok?Qt(p,"TestPingServer: ok",!0,d):Qt(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(P),Qt(p,"TestPingServer: error",!1,d)})}function Qt(c,d,p,y,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),y(p)}catch{}}function X_(){this.g=new N_}function Z_(c,d,p){const y=p||"";try{Uu(c,function(P,D){let U=P;h(P)&&(U=ga(P)),d.push(y+D+"="+encodeURIComponent(U))})}catch(P){throw d.push(y+"type="+encodeURIComponent("_badmap")),P}}function Ii(c){this.l=c.Ub||null,this.j=c.eb||!1}w(Ii,_a),Ii.prototype.g=function(){return new wi(this.l,this.j)},Ii.prototype.i=function(c){return function(){return c}}({});function wi(c,d){Be.call(this),this.D=c,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}w(wi,Be),n=wi.prototype,n.open=function(c,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=d,this.readyState=1,es(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(d.body=c),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zr(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,es(this)),this.g&&(this.readyState=3,es(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Gu(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Gu(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var d=c.value?c.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!c.done}))&&(this.response=this.responseText+=d)}c.done?Zr(this):es(this),this.readyState==3&&Gu(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,Zr(this))},n.Qa=function(c){this.g&&(this.response=c,Zr(this))},n.ga=function(){this.g&&Zr(this)};function Zr(c){c.readyState=4,c.l=null,c.j=null,c.v=null,es(c)}n.setRequestHeader=function(c,d){this.u.append(c,d)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,c.push(p[0]+": "+p[1]),p=d.next();return c.join(`\r
`)};function es(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(wi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Wu(c){let d="";return $(c,function(p,y){d+=y,d+=":",d+=p,d+=`\r
`}),d}function Ra(c,d,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=Wu(p),typeof c=="string"?p!=null&&encodeURIComponent(String(p)):fe(c,d,p))}function ve(c){Be.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}w(ve,Be);var ey=/^https?$/i,ty=["POST","PUT"];n=ve.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,d,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);d=d?d.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ia.g(),this.v=this.o?Eu(this.o):Eu(Ia),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(d,String(c),!0),this.B=!1}catch(D){Hu(this,D);return}if(c=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var P in y)p.set(P,y[P]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const D of y.keys())p.set(D,y.get(D));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(D=>D.toLowerCase()=="content-type"),P=a.FormData&&c instanceof a.FormData,!(0<=Array.prototype.indexOf.call(ty,d,void 0))||y||P||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,U]of p)this.g.setRequestHeader(D,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Yu(this),this.u=!0,this.g.send(c),this.u=!1}catch(D){Hu(this,D)}};function Hu(c,d){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=d,c.m=5,Qu(c),Ei(c)}function Qu(c){c.A||(c.A=!0,Ge(c,"complete"),Ge(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Ge(this,"complete"),Ge(this,"abort"),Ei(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ei(this,!0)),ve.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ju(this):this.bb())},n.bb=function(){Ju(this)};function Ju(c){if(c.h&&typeof o<"u"&&(!c.v[1]||At(c)!=4||c.Z()!=2)){if(c.u&&At(c)==4)yu(c.Ea,0,c);else if(Ge(c,"readystatechange"),At(c)==4){c.h=!1;try{const U=c.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var y;if(y=U===0){var P=String(c.D).match(Bu)[1]||null;!P&&a.self&&a.self.location&&(P=a.self.location.protocol.slice(0,-1)),y=!ey.test(P?P.toLowerCase():"")}p=y}if(p)Ge(c,"complete"),Ge(c,"success");else{c.m=6;try{var D=2<At(c)?c.g.statusText:""}catch{D=""}c.l=D+" ["+c.Z()+"]",Qu(c)}}finally{Ei(c)}}}}function Ei(c,d){if(c.g){Yu(c);const p=c.g,y=c.v[0]?()=>{}:null;c.g=null,c.v=null,d||Ge(c,"ready");try{p.onreadystatechange=y}catch{}}}function Yu(c){c.I&&(a.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function At(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<At(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var d=this.g.responseText;return c&&d.indexOf(c)==0&&(d=d.substring(c.length)),x_(d)}};function Xu(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function ny(c){const d={};c=(c.g&&2<=At(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<c.length;y++){if(N(c[y]))continue;var p=S(c[y]);const P=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const D=d[P]||[];d[P]=D,D.push(p)}b(d,function(y){return y.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ts(c,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[c]||d}function Zu(c){this.Aa=0,this.i=[],this.j=new Hr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ts("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ts("baseRetryDelayMs",5e3,c),this.cb=ts("retryDelaySeedMs",1e4,c),this.Wa=ts("forwardChannelMaxRetries",2,c),this.wa=ts("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Nu(c&&c.concurrentRequestLimit),this.Da=new X_,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Zu.prototype,n.la=8,n.G=1,n.connect=function(c,d,p,y){We(0),this.W=c,this.H=d||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.I=ch(this,null,this.W),bi(this)};function Pa(c){if(eh(c),c.G==3){var d=c.U++,p=bt(c.I);if(fe(p,"SID",c.K),fe(p,"RID",d),fe(p,"TYPE","terminate"),ns(c,p),d=new Wt(c,c.j,d),d.L=2,d.v=vi(bt(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=d.v,p=!0),p||(d.g=lh(d.j,null),d.g.ea(d.v)),d.F=Date.now(),gi(d)}ah(c)}function Ti(c){c.g&&(ka(c),c.g.cancel(),c.g=null)}function eh(c){Ti(c),c.u&&(a.clearTimeout(c.u),c.u=null),Ai(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&a.clearTimeout(c.s),c.s=null)}function bi(c){if(!Ou(c.h)&&!c.s){c.s=!0;var d=c.Ga;Kt||fu(),Tt||(Kt(),Tt=!0),ca.add(d,c),c.B=0}}function ry(c,d){return Mu(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=d.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Wr(_(c.Ga,c,d),oh(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const P=new Wt(this,this.j,c);let D=this.o;if(this.S&&(D?(D=v(D),T(D,this.S)):D=this.S),this.m!==null||this.O||(P.H=D,D=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(d+=y,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=nh(this,P,d),p=bt(this.I),fe(p,"RID",c),fe(p,"CVER",22),this.D&&fe(p,"X-HTTP-Session-Id",this.D),ns(this,p),D&&(this.O?d="headers="+encodeURIComponent(String(Wu(D)))+"&"+d:this.m&&Ra(p,this.m,D)),Sa(this.h,P),this.Ua&&fe(p,"TYPE","init"),this.P?(fe(p,"$req",d),fe(p,"SID","null"),P.T=!0,Ea(P,p,null)):Ea(P,p,d),this.G=2}}else this.G==3&&(c?th(this,c):this.i.length==0||Ou(this.h)||th(this))};function th(c,d){var p;d?p=d.l:p=c.U++;const y=bt(c.I);fe(y,"SID",c.K),fe(y,"RID",p),fe(y,"AID",c.T),ns(c,y),c.m&&c.o&&Ra(y,c.m,c.o),p=new Wt(c,c.j,p,c.B+1),c.m===null&&(p.H=c.o),d&&(c.i=d.D.concat(c.i)),d=nh(c,p,1e3),p.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Sa(c.h,p),Ea(p,y,d)}function ns(c,d){c.H&&$(c.H,function(p,y){fe(d,y,p)}),c.l&&Uu({},function(p,y){fe(d,y,p)})}function nh(c,d,p){p=Math.min(c.i.length,p);var y=c.l?_(c.l.Na,c.l,c):null;e:{var P=c.i;let D=-1;for(;;){const U=["count="+p];D==-1?0<p?(D=P[0].g,U.push("ofs="+D)):D=0:U.push("ofs="+D);let le=!0;for(let xe=0;xe<p;xe++){let se=P[xe].g;const je=P[xe].map;if(se-=D,0>se)D=Math.max(0,P[xe].g-100),le=!1;else try{Z_(je,U,"req"+se+"_")}catch{y&&y(je)}}if(le){y=U.join("&");break e}}}return c=c.i.splice(0,p),d.D=c,y}function rh(c){if(!c.g&&!c.u){c.Y=1;var d=c.Fa;Kt||fu(),Tt||(Kt(),Tt=!0),ca.add(d,c),c.v=0}}function Ca(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Wr(_(c.Fa,c),oh(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,sh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Wr(_(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,We(10),Ti(this),sh(this))};function ka(c){c.A!=null&&(a.clearTimeout(c.A),c.A=null)}function sh(c){c.g=new Wt(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var d=bt(c.qa);fe(d,"RID","rpc"),fe(d,"SID",c.K),fe(d,"AID",c.T),fe(d,"CI",c.F?"0":"1"),!c.F&&c.ja&&fe(d,"TO",c.ja),fe(d,"TYPE","xmlhttp"),ns(c,d),c.m&&c.o&&Ra(d,c.m,c.o),c.L&&(c.g.I=c.L);var p=c.g;c=c.ia,p.L=1,p.v=vi(bt(d)),p.m=null,p.P=!0,Du(p,c)}n.Za=function(){this.C!=null&&(this.C=null,Ti(this),Ca(this),We(19))};function Ai(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function ih(c,d){var p=null;if(c.g==d){Ai(c),ka(c),c.g=null;var y=2}else if(Aa(c.h,d))p=d.D,Lu(c.h,d),y=1;else return;if(c.G!=0){if(d.o)if(y==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var P=c.B;y=fi(),Ge(y,new Ru(y,p)),bi(c)}else rh(c);else if(P=d.s,P==3||P==0&&0<d.X||!(y==1&&ry(c,d)||y==2&&Ca(c)))switch(p&&0<p.length&&(d=c.h,d.i=d.i.concat(p)),P){case 1:Tn(c,5);break;case 4:Tn(c,10);break;case 3:Tn(c,6);break;default:Tn(c,2)}}}function oh(c,d){let p=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(p*=2),p*d}function Tn(c,d){if(c.j.info("Error code "+d),d==2){var p=_(c.fb,c),y=c.Xa;const P=!y;y=new En(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||_i(y,"https"),vi(y),P?J_(y.toString(),p):Y_(y.toString(),p)}else We(2);c.G=0,c.l&&c.l.sa(d),ah(c),eh(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),We(2)):(this.j.info("Failed to ping google.com"),We(1))};function ah(c){if(c.G=0,c.ka=[],c.l){const d=Fu(c.h);(d.length!=0||c.i.length!=0)&&(A(c.ka,d),A(c.ka,c.i),c.h.i.length=0,R(c.i),c.i.length=0),c.l.ra()}}function ch(c,d,p){var y=p instanceof En?bt(p):new En(p);if(y.g!="")d&&(y.g=d+"."+y.g),yi(y,y.s);else{var P=a.location;y=P.protocol,d=d?d+"."+P.hostname:P.hostname,P=+P.port;var D=new En(null);y&&_i(D,y),d&&(D.g=d),P&&yi(D,P),p&&(D.l=p),y=D}return p=c.D,d=c.ya,p&&d&&fe(y,p,d),fe(y,"VER",c.la),ns(c,y),y}function lh(c,d,p){if(d&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=c.Ca&&!c.pa?new ve(new Ii({eb:p})):new ve(c.pa),d.Ha(c.J),d}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function uh(){}n=uh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Si(){}Si.prototype.g=function(c,d){return new nt(c,d)};function nt(c,d){Be.call(this),this.g=new Zu(d),this.l=c,this.h=d&&d.messageUrlParams||null,c=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(c?c["X-WebChannel-Content-Type"]=d.messageContentType:c={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(c?c["X-WebChannel-Client-Profile"]=d.va:c={"X-WebChannel-Client-Profile":d.va}),this.g.S=c,(c=d&&d.Sb)&&!N(c)&&(this.g.m=c),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!N(d)&&(this.g.D=d,c=this.h,c!==null&&d in c&&(c=this.h,d in c&&delete c[d])),this.j=new nr(this)}w(nt,Be),nt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},nt.prototype.close=function(){Pa(this.g)},nt.prototype.o=function(c){var d=this.g;if(typeof c=="string"){var p={};p.__data__=c,c=p}else this.u&&(p={},p.__data__=ga(c),c=p);d.i.push(new B_(d.Ya++,c)),d.G==3&&bi(d)},nt.prototype.N=function(){this.g.l=null,delete this.j,Pa(this.g),delete this.g,nt.aa.N.call(this)};function hh(c){ya.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var d=c.__sm__;if(d){e:{for(const p in d){c=p;break e}c=void 0}(this.i=c)&&(c=this.i,d=d!==null&&c in d?d[c]:void 0),this.data=d}else this.data=c}w(hh,ya);function dh(){va.call(this),this.status=1}w(dh,va);function nr(c){this.g=c}w(nr,uh),nr.prototype.ua=function(){Ge(this.g,"a")},nr.prototype.ta=function(c){Ge(this.g,new hh(c))},nr.prototype.sa=function(c){Ge(this.g,new dh)},nr.prototype.ra=function(){Ge(this.g,"b")},Si.prototype.createWebChannel=Si.prototype.g,nt.prototype.send=nt.prototype.o,nt.prototype.open=nt.prototype.m,nt.prototype.close=nt.prototype.close,Bm=function(){return new Si},Um=function(){return fi()},Fm=In,uc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},mi.NO_ERROR=0,mi.TIMEOUT=8,mi.HTTP_ERROR=6,Wi=mi,Pu.COMPLETE="complete",Lm=Pu,Tu.EventType=Kr,Kr.OPEN="a",Kr.CLOSE="b",Kr.ERROR="c",Kr.MESSAGE="d",Be.prototype.listen=Be.prototype.K,hs=Tu,ve.prototype.listenOnce=ve.prototype.L,ve.prototype.getLastError=ve.prototype.Ka,ve.prototype.getLastErrorCode=ve.prototype.Ba,ve.prototype.getStatus=ve.prototype.Z,ve.prototype.getResponseJson=ve.prototype.Oa,ve.prototype.getResponseText=ve.prototype.oa,ve.prototype.send=ve.prototype.ea,ve.prototype.setWithCredentials=ve.prototype.Ha,Mm=ve}).apply(typeof ki<"u"?ki:typeof self<"u"?self:typeof window<"u"?window:{});const nd="@firebase/firestore";/**
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
 */class ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ze.UNAUTHENTICATED=new ze(null),ze.GOOGLE_CREDENTIALS=new ze("google-credentials-uid"),ze.FIRST_PARTY=new ze("first-party-uid"),ze.MOCK_USER=new ze("mock-user");/**
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
 */let Lr="10.14.0";/**
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
 */const Bn=new zc("@firebase/firestore");function cr(){return Bn.logLevel}function O(n,...e){if(Bn.logLevel<=ee.DEBUG){const t=e.map(sl);Bn.debug(`Firestore (${Lr}): ${n}`,...t)}}function Ee(n,...e){if(Bn.logLevel<=ee.ERROR){const t=e.map(sl);Bn.error(`Firestore (${Lr}): ${n}`,...t)}}function Cs(n,...e){if(Bn.logLevel<=ee.WARN){const t=e.map(sl);Bn.warn(`Firestore (${Lr}): ${n}`,...t)}}function sl(n){if(typeof n=="string")return n;try{/**
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
 */function z(n="Unexpected state"){const e=`FIRESTORE (${Lr}) INTERNAL ASSERTION FAILED: `+n;throw Ee(e),new Error(e)}function G(n,e){n||z()}function K(n,e){return n}/**
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
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends Bt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class vt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class dE{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ze.UNAUTHENTICATED))}shutdown(){}}class mE{constructor(e){this.t=e,this.currentUser=ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){G(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new vt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new vt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new vt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(G(typeof r.accessToken=="string"),new dE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return G(e===null||typeof e=="string"),new ze(e)}}class pE{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=ze.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class gE{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new pE(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _E{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yE{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){G(this.o===void 0);const r=i=>{i.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(G(typeof t.token=="string"),this.R=t.token,new _E(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function vE(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class jm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=vE(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function Y(n,e){return n<e?-1:n>e?1:0}function Ir(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}function $m(n){return n+"\0"}/**
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
 */class _e{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new F(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new F(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new F(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return _e.fromMillis(Date.now())}static fromDate(e){return _e.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new _e(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Y(this.nanoseconds,e.nanoseconds):Y(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ks{constructor(e,t,r){t===void 0?t=0:t>e.length&&z(),r===void 0?r=e.length-t:r>e.length-t&&z(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ks.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ks?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class oe extends ks{construct(e,t,r){return new oe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new oe(t)}static emptyPath(){return new oe([])}}const IE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ge extends ks{construct(e,t,r){return new ge(e,t,r)}static isValidIdentifier(e){return IE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ge(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new F(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new F(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new F(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new F(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ge(t)}static emptyPath(){return new ge([])}}/**
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
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(oe.fromString(e))}static fromName(e){return new j(oe.fromString(e).popFirst(5))}static empty(){return new j(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return oe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new oe(e.slice()))}}/**
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
 */class go{constructor(e,t,r,s){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=s}}function hc(n){return n.fields.find(e=>e.kind===2)}function Sn(n){return n.fields.filter(e=>e.kind!==2)}go.UNKNOWN_ID=-1;class Hi{constructor(e,t){this.fieldPath=e,this.kind=t}}class Ds{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Ds(0,at.min())}}function qm(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=W.fromTimestamp(r===1e9?new _e(t+1,0):new _e(t,r));return new at(s,j.empty(),e)}function zm(n){return new at(n.readTime,n.key,-1)}class at{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new at(W.min(),j.empty(),-1)}static max(){return new at(W.max(),j.empty(),-1)}}function il(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=j.comparator(n.documentKey,e.documentKey),t!==0?t:Y(n.largestBatchId,e.largestBatchId))}/**
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
 */const Km="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Gm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function gn(n){if(n.code!==x.FAILED_PRECONDITION||n.message!==Km)throw n;O("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):k.reject(t)}static resolve(e){return new k((t,r)=>{t(e)})}static reject(e){return new k((t,r)=>{r(e)})}static waitFor(e){return new k((t,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&t()},l=>r(l))}),o=!0,i===s&&t()})}static or(e){let t=k.resolve(!1);for(const r of e)t=t.next(s=>s?k.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new k((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next(f=>{o[h]=f,++a,a===i&&r(o)},f=>s(f))}})}static doWhile(e,t){return new k((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}/**
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
 */class Bo{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new vt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new _s(e,t.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=ol(r.target.error);this.V.reject(new _s(e,s))}}static open(e,t,r,s){try{return new Bo(t,e.transaction(s,r))}catch(i){throw new _s(t,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(O("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new EE(t)}}class ln{constructor(e,t,r){this.name=e,this.version=t,this.p=r,ln.S(Ce())===12.2&&Ee("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return O("SimpleDb","Removing database:",e),Pn(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Qf())return!1;if(ln.v())return!0;const e=Ce(),t=ln.S(e),r=0<t&&t<10,s=Wm(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(O("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{r(new _s(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new F(x.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new F(x.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new _s(e,o))},s.onupgradeneeded=i=>{O("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.O(o,s.transaction,i.oldVersion,this.version).next(()=>{O("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=Bo.open(this.db,e,i?"readonly":"readwrite",r),l=s(a).next(h=>(a.g(),h)).catch(h=>(a.abort(h),k.reject(h))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,h=l.name!=="FirebaseError"&&o<3;if(O("SimpleDb","Transaction failed with error:",l.message,"Retrying:",h),this.close(),!h)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Wm(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class wE{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Pn(this.B.delete())}}class _s extends F{constructor(e,t){super(x.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function _n(n){return n.name==="IndexedDbTransactionError"}class EE{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(O("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(O("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Pn(r)}add(e){return O("SimpleDb","ADD",this.store.name,e,e),Pn(this.store.add(e))}get(e){return Pn(this.store.get(e)).next(t=>(t===void 0&&(t=null),O("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return O("SimpleDb","DELETE",this.store.name,e),Pn(this.store.delete(e))}count(){return O("SimpleDb","COUNT",this.store.name),Pn(this.store.count())}U(e,t){const r=this.options(e,t),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new k((o,a)=>{i.onerror=l=>{a(l.target.error)},i.onsuccess=l=>{o(l.target.result)}})}{const i=this.cursor(r),o=[];return this.W(i,(a,l)=>{o.push(l)}).next(()=>o)}}G(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new k((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}j(e,t){O("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.H=!1;const s=this.cursor(r);return this.W(s,(i,o,a)=>a.delete())}J(e,t){let r;t?r=e:(r={},t=e);const s=this.cursor(r);return this.W(s,t)}Y(e){const t=this.cursor({});return new k((r,s)=>{t.onerror=i=>{const o=ol(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,t){const r=[];return new k((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const l=new wE(a),h=t(a.primaryKey,a.value,l);if(h instanceof k){const f=h.catch(m=>(l.done(),k.reject(m)));r.push(f)}l.isDone?s():l.K===null?a.continue():a.continue(l.K)}}).next(()=>k.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Pn(n){return new k((e,t)=>{n.onsuccess=r=>{const s=r.target.result;e(s)},n.onerror=r=>{const s=ol(r.target.error);t(s)}})}let rd=!1;function ol(n){const e=ln.S(Ce());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new F("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return rd||(rd=!0,setTimeout(()=>{throw r},0)),r}}return n}class TE{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){O("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{O("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){_n(t)?O("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await gn(t)}await this.X(6e4)})}}class bE{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const r=new Set;let s=t,i=!0;return k.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return O("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,s).next(a=>{s-=a,r.add(o)});i=!1})).next(()=>t-s)}ne(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,r).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(s,i)).next(a=>(O("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}re(e,t){let r=e;return t.changes.forEach((s,i)=>{const o=zm(i);il(o,r)>0&&(r=o)}),new at(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class Ze{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ze.oe=-1;function jo(n){return n==null}function Vs(n){return n===0&&1/n==-1/0}function Hm(n){return typeof n=="number"&&Number.isInteger(n)&&!Vs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Qe(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=sd(e)),e=AE(n.get(t),e);return sd(e)}function AE(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function sd(n){return n+""}function gt(n){const e=n.length;if(G(e>=2),e===2)return G(n.charAt(0)===""&&n.charAt(1)===""),oe.emptyPath();const t=e-2,r=[];let s="";for(let i=0;i<e;){const o=n.indexOf("",i);switch((o<0||o>t)&&z(),n.charAt(o+1)){case"":const a=n.substring(i,o);let l;s.length===0?l=a:(s+=a,l=s,s=""),r.push(l);break;case"":s+=n.substring(i,o),s+="\0";break;case"":s+=n.substring(i,o+1);break;default:z()}i=o+2}return new oe(r)}/**
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
 */const id=["userId","batchId"];/**
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
 */function Qi(n,e){return[n,Qe(e)]}function Qm(n,e,t){return[n,Qe(e),t]}const SE={},RE=["prefixPath","collectionGroup","readTime","documentId"],PE=["prefixPath","collectionGroup","documentId"],CE=["collectionGroup","readTime","prefixPath","documentId"],kE=["canonicalId","targetId"],DE=["targetId","path"],VE=["path","targetId"],xE=["collectionId","parent"],NE=["indexId","uid"],OE=["uid","sequenceNumber"],ME=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],LE=["indexId","uid","orderedDocumentKey"],FE=["userId","collectionPath","documentId"],UE=["userId","collectionPath","largestBatchId"],BE=["userId","collectionGroup","largestBatchId"],Jm=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],jE=[...Jm,"documentOverlays"],Ym=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Xm=Ym,al=[...Xm,"indexConfiguration","indexState","indexEntries"],$E=al,qE=[...al,"globals"];/**
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
 */class dc extends Gm{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function De(n,e){const t=K(n);return ln.F(t._e,e)}/**
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
 */function od(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Jn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Zm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class de{constructor(e,t){this.comparator=e,this.root=t||Ne.EMPTY}insert(e,t){return new de(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ne.BLACK,null,null))}remove(e){return new de(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ne.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Di(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Di(this.root,e,this.comparator,!1)}getReverseIterator(){return new Di(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Di(this.root,e,this.comparator,!0)}}class Di{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ne{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ne.RED,this.left=s??Ne.EMPTY,this.right=i??Ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Ne(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ne.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ne.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}Ne.EMPTY=null,Ne.RED=!0,Ne.BLACK=!1;Ne.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(e,t,r,s,i){return this}insert(e,t,r){return new Ne(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ce{constructor(e){this.comparator=e,this.data=new de(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ad(this.data.getIterator())}getIteratorFrom(e){return new ad(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ce)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ce(this.comparator);return t.data=e,t}}class ad{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function sr(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class et{constructor(e){this.fields=e,e.sort(ge.comparator)}static empty(){return new et([])}unionWith(e){let t=new ce(ge.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new et(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ir(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class ep extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Se{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ep("Invalid base64 string: "+i):i}}(e);return new Se(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Se(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Y(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Se.EMPTY_BYTE_STRING=new Se("");const zE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ot(n){if(G(!!n),typeof n=="string"){let e=0;const t=zE.exec(n);if(G(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:me(n.seconds),nanos:me(n.nanos)}}function me(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function dn(n){return typeof n=="string"?Se.fromBase64String(n):Se.fromUint8Array(n)}/**
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
 */function cl(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function ll(n){const e=n.mapValue.fields.__previous_value__;return cl(e)?ll(e):e}function xs(n){const e=Ot(n.mapValue.fields.__local_write_time__.timestampValue);return new _e(e.seconds,e.nanos)}/**
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
 */class KE{constructor(e,t,r,s,i,o,a,l,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=h}}class jn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new jn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof jn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const sn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Ji={nullValue:"NULL_VALUE"};function $n(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?cl(n)?4:tp(n)?9007199254740991:$o(n)?10:11:z()}function It(n,e){if(n===e)return!0;const t=$n(n);if(t!==$n(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return xs(n).isEqual(xs(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Ot(s.timestampValue),a=Ot(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return dn(s.bytesValue).isEqual(dn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return me(s.geoPointValue.latitude)===me(i.geoPointValue.latitude)&&me(s.geoPointValue.longitude)===me(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return me(s.integerValue)===me(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=me(s.doubleValue),a=me(i.doubleValue);return o===a?Vs(o)===Vs(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return Ir(n.arrayValue.values||[],e.arrayValue.values||[],It);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(od(o)!==od(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!It(o[l],a[l])))return!1;return!0}(n,e);default:return z()}}function Ns(n,e){return(n.values||[]).find(t=>It(t,e))!==void 0}function fn(n,e){if(n===e)return 0;const t=$n(n),r=$n(e);if(t!==r)return Y(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Y(n.booleanValue,e.booleanValue);case 2:return function(i,o){const a=me(i.integerValue||i.doubleValue),l=me(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(n,e);case 3:return cd(n.timestampValue,e.timestampValue);case 4:return cd(xs(n),xs(e));case 5:return Y(n.stringValue,e.stringValue);case 6:return function(i,o){const a=dn(i),l=dn(o);return a.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let h=0;h<a.length&&h<l.length;h++){const f=Y(a[h],l[h]);if(f!==0)return f}return Y(a.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const a=Y(me(i.latitude),me(o.latitude));return a!==0?a:Y(me(i.longitude),me(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return ld(n.arrayValue,e.arrayValue);case 10:return function(i,o){var a,l,h,f;const m=i.fields||{},_=o.fields||{},g=(a=m.value)===null||a===void 0?void 0:a.arrayValue,w=(l=_.value)===null||l===void 0?void 0:l.arrayValue,R=Y(((h=g==null?void 0:g.values)===null||h===void 0?void 0:h.length)||0,((f=w==null?void 0:w.values)===null||f===void 0?void 0:f.length)||0);return R!==0?R:ld(g,w)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===sn.mapValue&&o===sn.mapValue)return 0;if(i===sn.mapValue)return 1;if(o===sn.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let m=0;m<l.length&&m<f.length;++m){const _=Y(l[m],f[m]);if(_!==0)return _;const g=fn(a[l[m]],h[f[m]]);if(g!==0)return g}return Y(l.length,f.length)}(n.mapValue,e.mapValue);default:throw z()}}function cd(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Y(n,e);const t=Ot(n),r=Ot(e),s=Y(t.seconds,r.seconds);return s!==0?s:Y(t.nanos,r.nanos)}function ld(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=fn(t[s],r[s]);if(i)return i}return Y(t.length,r.length)}function wr(n){return fc(n)}function fc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Ot(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return dn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return j.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=fc(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${fc(t.fields[o])}`;return s+"}"}(n.mapValue):z()}function Os(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function mc(n){return!!n&&"integerValue"in n}function Ms(n){return!!n&&"arrayValue"in n}function ud(n){return!!n&&"nullValue"in n}function hd(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Yi(n){return!!n&&"mapValue"in n}function $o(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function ys(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Jn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ys(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ys(n.arrayValue.values[t]);return e}return Object.assign({},n)}function tp(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const np={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function GE(n){return"nullValue"in n?Ji:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Os(jn.empty(),j.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?$o(n)?np:{mapValue:{}}:z()}function WE(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Os(jn.empty(),j.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?np:"mapValue"in n?$o(n)?{mapValue:{}}:sn:z()}function dd(n,e){const t=fn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function fd(n,e){const t=fn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class Ke{constructor(e){this.value=e}static empty(){return new Ke({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Yi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ys(t)}setAll(e){let t=ge.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=a.popLast()}o?r[a.lastSegment()]=ys(o):s.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Yi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return It(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Yi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Jn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ke(ys(this.value))}}function rp(n){const e=[];return Jn(n.fields,(t,r)=>{const s=new ge([t]);if(Yi(r)){const i=rp(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new et(e)}/**
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
 */class Ie{constructor(e,t,r,s,i,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ie(e,0,W.min(),W.min(),W.min(),Ke.empty(),0)}static newFoundDocument(e,t,r,s){return new Ie(e,1,t,W.min(),r,s,0)}static newNoDocument(e,t){return new Ie(e,2,t,W.min(),W.min(),Ke.empty(),0)}static newUnknownDocument(e,t){return new Ie(e,3,t,W.min(),W.min(),Ke.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ke.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ke.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ie&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ie(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Er{constructor(e,t){this.position=e,this.inclusive=t}}function md(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=j.comparator(j.fromName(o.referenceValue),t.key):r=fn(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function pd(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!It(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class _o{constructor(e,t="asc"){this.field=e,this.dir=t}}function HE(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class sp{}class te extends sp{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new QE(e,t,r):t==="array-contains"?new XE(e,r):t==="in"?new up(e,r):t==="not-in"?new ZE(e,r):t==="array-contains-any"?new eT(e,r):new te(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new JE(e,r):new YE(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(fn(t,this.value)):t!==null&&$n(this.value)===$n(t)&&this.matchesComparison(fn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ae extends sp{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new ae(e,t)}matches(e){return Tr(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Tr(n){return n.op==="and"}function pc(n){return n.op==="or"}function ul(n){return ip(n)&&Tr(n)}function ip(n){for(const e of n.filters)if(e instanceof ae)return!1;return!0}function gc(n){if(n instanceof te)return n.field.canonicalString()+n.op.toString()+wr(n.value);if(ul(n))return n.filters.map(e=>gc(e)).join(",");{const e=n.filters.map(t=>gc(t)).join(",");return`${n.op}(${e})`}}function op(n,e){return n instanceof te?function(r,s){return s instanceof te&&r.op===s.op&&r.field.isEqual(s.field)&&It(r.value,s.value)}(n,e):n instanceof ae?function(r,s){return s instanceof ae&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&op(o,s.filters[a]),!0):!1}(n,e):void z()}function ap(n,e){const t=n.filters.concat(e);return ae.create(t,n.op)}function cp(n){return n instanceof te?function(t){return`${t.field.canonicalString()} ${t.op} ${wr(t.value)}`}(n):n instanceof ae?function(t){return t.op.toString()+" {"+t.getFilters().map(cp).join(" ,")+"}"}(n):"Filter"}class QE extends te{constructor(e,t,r){super(e,t,r),this.key=j.fromName(r.referenceValue)}matches(e){const t=j.comparator(e.key,this.key);return this.matchesComparison(t)}}class JE extends te{constructor(e,t){super(e,"in",t),this.keys=lp("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class YE extends te{constructor(e,t){super(e,"not-in",t),this.keys=lp("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function lp(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>j.fromName(r.referenceValue))}class XE extends te{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ms(t)&&Ns(t.arrayValue,this.value)}}class up extends te{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ns(this.value.arrayValue,t)}}class ZE extends te{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ns(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ns(this.value.arrayValue,t)}}class eT extends te{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ms(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ns(this.value.arrayValue,r))}}/**
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
 */class tT{constructor(e,t=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function _c(n,e=null,t=[],r=[],s=null,i=null,o=null){return new tT(n,e,t,r,s,i,o)}function qn(n){const e=K(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>gc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),jo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>wr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>wr(r)).join(",")),e.ue=t}return e.ue}function Ys(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!HE(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!op(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!pd(n.startAt,e.startAt)&&pd(n.endAt,e.endAt)}function yo(n){return j.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function vo(n,e){return n.filters.filter(t=>t instanceof te&&t.field.isEqual(e))}function gd(n,e,t){let r=Ji,s=!0;for(const i of vo(n,e)){let o=Ji,a=!0;switch(i.op){case"<":case"<=":o=GE(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=Ji}dd({value:r,inclusive:s},{value:o,inclusive:a})<0&&(r=o,s=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];dd({value:r,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}function _d(n,e,t){let r=sn,s=!0;for(const i of vo(n,e)){let o=sn,a=!0;switch(i.op){case">=":case">":o=WE(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=sn}fd({value:r,inclusive:s},{value:o,inclusive:a})>0&&(r=o,s=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];fd({value:r,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}/**
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
 */class Xs{constructor(e,t=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function hp(n,e,t,r,s,i,o,a){return new Xs(n,e,t,r,s,i,o,a)}function Zs(n){return new Xs(n)}function yd(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function dp(n){return n.collectionGroup!==null}function vs(n){const e=K(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ce(ge.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(a=a.add(h.field))})}),a})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new _o(i,r))}),t.has(ge.keyField().canonicalString())||e.ce.push(new _o(ge.keyField(),r))}return e.ce}function it(n){const e=K(n);return e.le||(e.le=nT(e,vs(n))),e.le}function nT(n,e){if(n.limitType==="F")return _c(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new _o(s.field,i)});const t=n.endAt?new Er(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Er(n.startAt.position,n.startAt.inclusive):null;return _c(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function yc(n,e){const t=n.filters.concat([e]);return new Xs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function vc(n,e,t){return new Xs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function qo(n,e){return Ys(it(n),it(e))&&n.limitType===e.limitType}function fp(n){return`${qn(it(n))}|lt:${n.limitType}`}function lr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>cp(s)).join(", ")}]`),jo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>wr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>wr(s)).join(",")),`Target(${r})`}(it(n))}; limitType=${n.limitType})`}function ei(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):j.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of vs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const h=md(o,a,l);return o.inclusive?h<=0:h<0}(r.startAt,vs(r),s)||r.endAt&&!function(o,a,l){const h=md(o,a,l);return o.inclusive?h>=0:h>0}(r.endAt,vs(r),s))}(n,e)}function mp(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function pp(n){return(e,t)=>{let r=!1;for(const s of vs(n)){const i=rT(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function rT(n,e,t){const r=n.field.isKeyField()?j.comparator(e.key,t.key):function(i,o,a){const l=o.data.field(i),h=a.data.field(i);return l!==null&&h!==null?fn(l,h):z()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return z()}}/**
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
 */class yn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Jn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Zm(this.inner)}size(){return this.innerSize}}/**
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
 */const sT=new de(j.comparator);function st(){return sT}const gp=new de(j.comparator);function ds(...n){let e=gp;for(const t of n)e=e.insert(t.key,t);return e}function _p(n){let e=gp;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function _t(){return Is()}function yp(){return Is()}function Is(){return new yn(n=>n.toString(),(n,e)=>n.isEqual(e))}const iT=new de(j.comparator),oT=new ce(j.comparator);function X(...n){let e=oT;for(const t of n)e=e.add(t);return e}const aT=new ce(Y);function hl(){return aT}/**
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
 */function dl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vs(e)?"-0":e}}function vp(n){return{integerValue:""+n}}function Ip(n,e){return Hm(e)?vp(e):dl(n,e)}/**
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
 */class zo{constructor(){this._=void 0}}function cT(n,e,t){return n instanceof Ls?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&cl(i)&&(i=ll(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(t,e):n instanceof zn?Ep(n,e):n instanceof Kn?Tp(n,e):function(s,i){const o=wp(s,i),a=vd(o)+vd(s.Pe);return mc(o)&&mc(s.Pe)?vp(a):dl(s.serializer,a)}(n,e)}function lT(n,e,t){return n instanceof zn?Ep(n,e):n instanceof Kn?Tp(n,e):t}function wp(n,e){return n instanceof br?function(r){return mc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ls extends zo{}class zn extends zo{constructor(e){super(),this.elements=e}}function Ep(n,e){const t=bp(e);for(const r of n.elements)t.some(s=>It(s,r))||t.push(r);return{arrayValue:{values:t}}}class Kn extends zo{constructor(e){super(),this.elements=e}}function Tp(n,e){let t=bp(e);for(const r of n.elements)t=t.filter(s=>!It(s,r));return{arrayValue:{values:t}}}class br extends zo{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function vd(n){return me(n.integerValue||n.doubleValue)}function bp(n){return Ms(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Ko{constructor(e,t){this.field=e,this.transform=t}}function uT(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof zn&&s instanceof zn||r instanceof Kn&&s instanceof Kn?Ir(r.elements,s.elements,It):r instanceof br&&s instanceof br?It(r.Pe,s.Pe):r instanceof Ls&&s instanceof Ls}(n.transform,e.transform)}class hT{constructor(e,t){this.version=e,this.transformResults=t}}class He{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new He}static exists(e){return new He(void 0,e)}static updateTime(e){return new He(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Go{}function Ap(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Wo(n.key,He.none()):new Fr(n.key,n.data,He.none());{const t=n.data,r=Ke.empty();let s=new ce(ge.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new zt(n.key,r,new et(s.toArray()),He.none())}}function dT(n,e,t){n instanceof Fr?function(s,i,o){const a=s.value.clone(),l=wd(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof zt?function(s,i,o){if(!Xi(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=wd(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Sp(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function ws(n,e,t,r){return n instanceof Fr?function(i,o,a,l){if(!Xi(i.precondition,o))return a;const h=i.value.clone(),f=Ed(i.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof zt?function(i,o,a,l){if(!Xi(i.precondition,o))return a;const h=Ed(i.fieldTransforms,l,o),f=o.data;return f.setAll(Sp(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(i,o,a){return Xi(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function fT(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=wp(r.transform,s||null);i!=null&&(t===null&&(t=Ke.empty()),t.set(r.field,i))}return t||null}function Id(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ir(r,s,(i,o)=>uT(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Fr extends Go{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class zt extends Go{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Sp(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function wd(n,e,t){const r=new Map;G(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,lT(o,a,t[s]))}return r}function Ed(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,cT(i,o,e))}return r}class Wo extends Go{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Rp extends Go{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class fl{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&dT(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ws(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ws(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=yp();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(s.key)?null:a;const l=Ap(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),X())}isEqual(e){return this.batchId===e.batchId&&Ir(this.mutations,e.mutations,(t,r)=>Id(t,r))&&Ir(this.baseMutations,e.baseMutations,(t,r)=>Id(t,r))}}class ml{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){G(e.mutations.length===r.length);let s=function(){return iT}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ml(e,t,r,s)}}/**
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
 */class pl{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class mT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Re,re;function pT(n){switch(n){default:return z();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0}}function Pp(n){if(n===void 0)return Ee("GRPC error has no .code"),x.UNKNOWN;switch(n){case Re.OK:return x.OK;case Re.CANCELLED:return x.CANCELLED;case Re.UNKNOWN:return x.UNKNOWN;case Re.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case Re.INTERNAL:return x.INTERNAL;case Re.UNAVAILABLE:return x.UNAVAILABLE;case Re.UNAUTHENTICATED:return x.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case Re.NOT_FOUND:return x.NOT_FOUND;case Re.ALREADY_EXISTS:return x.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return x.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case Re.ABORTED:return x.ABORTED;case Re.OUT_OF_RANGE:return x.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return x.UNIMPLEMENTED;case Re.DATA_LOSS:return x.DATA_LOSS;default:return z()}}(re=Re||(Re={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function gT(){return new TextEncoder}/**
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
 */const _T=new xn([4294967295,4294967295],0);function Td(n){const e=gT().encode(n),t=new Om;return t.update(e),new Uint8Array(t.digest())}function bd(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new xn([t,r],0),new xn([s,i],0)]}class gl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new fs(`Invalid padding: ${t}`);if(r<0)throw new fs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new fs(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new fs(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=xn.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(xn.fromNumber(r)));return s.compare(_T)===1&&(s=new xn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Td(e),[r,s]=bd(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new gl(i,s,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const t=Td(e),[r,s]=bd(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class fs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ti{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,ni.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ti(W.min(),s,new de(Y),st(),X())}}class ni{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ni(r,t,X(),X(),X())}}/**
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
 */class Zi{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class Cp{constructor(e,t){this.targetId=e,this.me=t}}class kp{constructor(e,t,r=Se.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Ad{constructor(){this.fe=0,this.ge=Rd(),this.pe=Se.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=X(),t=X(),r=X();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:z()}}),new ni(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Rd()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,G(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class yT{constructor(e){this.Le=e,this.Be=new Map,this.ke=st(),this.qe=Sd(),this.Qe=new de(Y)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:z()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(yo(i))if(r===0){const o=new j(i.path);this.Ue(t,o,Ie.newNoDocument(o,W.min()))}else G(r===1);else{const o=this.Ye(t);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,a;try{o=dn(r).toUint8Array()}catch(l){if(l instanceof ep)return Cs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new gl(o,s,i)}catch(l){return Cs(l instanceof fs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,o)=>{const a=this.Je(o);if(a){if(i.current&&yo(a.target)){const l=new j(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Ie.newNoDocument(l,e))}i.be&&(t.set(o,i.ve()),i.Ce())}});let r=X();this.qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new ti(e,t,this.Qe,this.ke,r);return this.ke=st(),this.qe=Sd(),this.Qe=new de(Y),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Ad,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ce(Y),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||O("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Ad),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Sd(){return new de(j.comparator)}function Rd(){return new de(j.comparator)}const vT={asc:"ASCENDING",desc:"DESCENDING"},IT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},wT={and:"AND",or:"OR"};class ET{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ic(n,e){return n.useProto3Json||jo(e)?e:{value:e}}function Ar(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Dp(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function TT(n,e){return Ar(n,e.toTimestamp())}function Je(n){return G(!!n),W.fromTimestamp(function(t){const r=Ot(t);return new _e(r.seconds,r.nanos)}(n))}function _l(n,e){return wc(n,e).canonicalString()}function wc(n,e){const t=function(s){return new oe(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Vp(n){const e=oe.fromString(n);return G(jp(e)),e}function Io(n,e){return _l(n.databaseId,e.path)}function Nn(n,e){const t=Vp(e);if(t.get(1)!==n.databaseId.projectId)throw new F(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new F(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new j(Op(t))}function xp(n,e){return _l(n.databaseId,e)}function Np(n){const e=Vp(n);return e.length===4?oe.emptyPath():Op(e)}function Ec(n){return new oe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Op(n){return G(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Pd(n,e,t){return{name:Io(n,e),fields:t.value.mapValue.fields}}function bT(n,e,t){const r=Nn(n,e.name),s=Je(e.updateTime),i=e.createTime?Je(e.createTime):W.min(),o=new Ke({mapValue:{fields:e.fields}}),a=Ie.newFoundDocument(r,s,i,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function AT(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:z()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(G(f===void 0||typeof f=="string"),Se.fromBase64String(f||"")):(G(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Se.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(h){const f=h.code===void 0?x.UNKNOWN:Pp(h.code);return new F(f,h.message||"")}(o);t=new kp(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Nn(n,r.document.name),i=Je(r.document.updateTime),o=r.document.createTime?Je(r.document.createTime):W.min(),a=new Ke({mapValue:{fields:r.document.fields}}),l=Ie.newFoundDocument(s,i,o,a),h=r.targetIds||[],f=r.removedTargetIds||[];t=new Zi(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Nn(n,r.document),i=r.readTime?Je(r.readTime):W.min(),o=Ie.newNoDocument(s,i),a=r.removedTargetIds||[];t=new Zi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Nn(n,r.document),i=r.removedTargetIds||[];t=new Zi([],i,s,null)}else{if(!("filter"in e))return z();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new mT(s,i),a=r.targetId;t=new Cp(a,o)}}return t}function wo(n,e){let t;if(e instanceof Fr)t={update:Pd(n,e.key,e.value)};else if(e instanceof Wo)t={delete:Io(n,e.key)};else if(e instanceof zt)t={update:Pd(n,e.key,e.data),updateMask:DT(e.fieldMask)};else{if(!(e instanceof Rp))return z();t={verify:Io(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Ls)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof zn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Kn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof br)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw z()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:TT(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:z()}(n,e.precondition)),t}function Tc(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?He.updateTime(Je(i.updateTime)):i.exists!==void 0?He.exists(i.exists):He.none()}(e.currentDocument):He.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(o,a){let l=null;if("setToServerValue"in a)G(a.setToServerValue==="REQUEST_TIME"),l=new Ls;else if("appendMissingElements"in a){const f=a.appendMissingElements.values||[];l=new zn(f)}else if("removeAllFromArray"in a){const f=a.removeAllFromArray.values||[];l=new Kn(f)}else"increment"in a?l=new br(o,a.increment):z();const h=ge.fromServerFormat(a.fieldPath);return new Ko(h,l)}(n,s)):[];if(e.update){e.update.name;const s=Nn(n,e.update.name),i=new Ke({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const h=l.fieldPaths||[];return new et(h.map(f=>ge.fromServerFormat(f)))}(e.updateMask);return new zt(s,i,o,t,r)}return new Fr(s,i,t,r)}if(e.delete){const s=Nn(n,e.delete);return new Wo(s,t)}if(e.verify){const s=Nn(n,e.verify);return new Rp(s,t)}return z()}function ST(n,e){return n&&n.length>0?(G(e!==void 0),n.map(t=>function(s,i){let o=s.updateTime?Je(s.updateTime):Je(i);return o.isEqual(W.min())&&(o=Je(i)),new hT(o,s.transformResults||[])}(t,e))):[]}function Mp(n,e){return{documents:[xp(n,e.path)]}}function Lp(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=xp(n,s);const i=function(h){if(h.length!==0)return Bp(ae.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(_){return{field:ur(_.field),direction:PT(_.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=Ic(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:s}}function Fp(n){let e=Np(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){G(r===1);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(m){const _=Up(m);return _ instanceof ae&&ul(_)?_.getFilters():[_]}(t.where));let o=[];t.orderBy&&(o=function(m){return m.map(_=>function(w){return new _o(hr(w.field),function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(_))}(t.orderBy));let a=null;t.limit&&(a=function(m){let _;return _=typeof m=="object"?m.value:m,jo(_)?null:_}(t.limit));let l=null;t.startAt&&(l=function(m){const _=!!m.before,g=m.values||[];return new Er(g,_)}(t.startAt));let h=null;return t.endAt&&(h=function(m){const _=!m.before,g=m.values||[];return new Er(g,_)}(t.endAt)),hp(e,s,o,i,a,"F",l,h)}function RT(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Up(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=hr(t.unaryFilter.field);return te.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=hr(t.unaryFilter.field);return te.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=hr(t.unaryFilter.field);return te.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=hr(t.unaryFilter.field);return te.create(o,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(n):n.fieldFilter!==void 0?function(t){return te.create(hr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ae.create(t.compositeFilter.filters.map(r=>Up(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return z()}}(t.compositeFilter.op))}(n):z()}function PT(n){return vT[n]}function CT(n){return IT[n]}function kT(n){return wT[n]}function ur(n){return{fieldPath:n.canonicalString()}}function hr(n){return ge.fromServerFormat(n.fieldPath)}function Bp(n){return n instanceof te?function(t){if(t.op==="=="){if(hd(t.value))return{unaryFilter:{field:ur(t.field),op:"IS_NAN"}};if(ud(t.value))return{unaryFilter:{field:ur(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(hd(t.value))return{unaryFilter:{field:ur(t.field),op:"IS_NOT_NAN"}};if(ud(t.value))return{unaryFilter:{field:ur(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ur(t.field),op:CT(t.op),value:t.value}}}(n):n instanceof ae?function(t){const r=t.getFilters().map(s=>Bp(s));return r.length===1?r[0]:{compositeFilter:{op:kT(t.op),filters:r}}}(n):z()}function DT(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function jp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class kt{constructor(e,t,r,s,i=W.min(),o=W.min(),a=Se.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new kt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class $p{constructor(e){this.ct=e}}function VT(n,e){let t;if(e.document)t=bT(n.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=j.fromSegments(e.noDocument.path),s=Wn(e.noDocument.readTime);t=Ie.newNoDocument(r,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return z();{const r=j.fromSegments(e.unknownDocument.path),s=Wn(e.unknownDocument.version);t=Ie.newUnknownDocument(r,s)}}return e.readTime&&t.setReadTime(function(s){const i=new _e(s[0],s[1]);return W.fromTimestamp(i)}(e.readTime)),t}function Cd(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Eo(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,o){return{name:Io(i,o.key),fields:o.data.value.mapValue.fields,updateTime:Ar(i,o.version.toTimestamp()),createTime:Ar(i,o.createTime.toTimestamp())}}(n.ct,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Gn(e.version)};else{if(!e.isUnknownDocument())return z();r.unknownDocument={path:t.path.toArray(),version:Gn(e.version)}}return r}function Eo(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Gn(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Wn(n){const e=new _e(n.seconds,n.nanoseconds);return W.fromTimestamp(e)}function Cn(n,e){const t=(e.baseMutations||[]).map(i=>Tc(n.ct,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>Tc(n.ct,i)),s=_e.fromMillis(e.localWriteTimeMs);return new fl(e.batchId,s,t,r)}function ms(n){const e=Wn(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Wn(n.lastLimboFreeSnapshotVersion):W.min();let r;return r=function(i){return i.documents!==void 0}(n.query)?function(i){return G(i.documents.length===1),it(Zs(Np(i.documents[0])))}(n.query):function(i){return it(Fp(i))}(n.query),new kt(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Se.fromBase64String(n.resumeToken))}function qp(n,e){const t=Gn(e.snapshotVersion),r=Gn(e.lastLimboFreeSnapshotVersion);let s;s=yo(e.target)?Mp(n.ct,e.target):Lp(n.ct,e.target)._t;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:qn(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function zp(n){const e=Fp({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?vc(e,e.limit,"L"):e}function Ba(n,e){return new pl(e.largestBatchId,Tc(n.ct,e.overlayMutation))}function kd(n,e){const t=e.path.lastSegment();return[n,Qe(e.path.popLast()),t]}function Dd(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:Gn(r.readTime),documentKey:Qe(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class xT{getBundleMetadata(e,t){return Vd(e).get(t).next(r=>{if(r)return function(i){return{id:i.bundleId,createTime:Wn(i.createTime),version:i.version}}(r)})}saveBundleMetadata(e,t){return Vd(e).put(function(s){return{bundleId:s.id,createTime:Gn(Je(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return xd(e).get(t).next(r=>{if(r)return function(i){return{name:i.name,query:zp(i.bundledQuery),readTime:Wn(i.readTime)}}(r)})}saveNamedQuery(e,t){return xd(e).put(function(s){return{name:s.name,readTime:Gn(Je(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function Vd(n){return De(n,"bundles")}function xd(n){return De(n,"namedQueries")}/**
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
 */class Ho{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const r=t.uid||"";return new Ho(e,r)}getOverlay(e,t){return rs(e).get(kd(this.userId,t)).next(r=>r?Ba(this.serializer,r):null)}getOverlays(e,t){const r=_t();return k.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){const s=[];return r.forEach((i,o)=>{const a=new pl(t,o);s.push(this.ht(e,a))}),k.waitFor(s)}removeOverlaysForBatchId(e,t,r){const s=new Set;t.forEach(o=>s.add(Qe(o.getCollectionPath())));const i=[];return s.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(rs(e).j("collectionPathOverlayIndex",a))}),k.waitFor(i)}getOverlaysForCollection(e,t,r){const s=_t(),i=Qe(t),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return rs(e).U("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const h=Ba(this.serializer,l);s.set(h.getKey(),h)}return s})}getOverlaysForCollectionGroup(e,t,r,s){const i=_t();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return rs(e).J({index:"collectionGroupOverlayIndex",range:a},(l,h,f)=>{const m=Ba(this.serializer,h);i.size()<s||m.largestBatchId===o?(i.set(m.getKey(),m),o=m.largestBatchId):f.done()}).next(()=>i)}ht(e,t){return rs(e).put(function(s,i,o){const[a,l,h]=kd(i,o.mutation.key);return{userId:i,collectionPath:l,documentId:h,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:wo(s.ct,o.mutation)}}(this.serializer,this.userId,t))}}function rs(n){return De(n,"documentOverlays")}/**
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
 */class NT{Pt(e){return De(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?Se.fromUint8Array(r):Se.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class kn{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(me(e.integerValue));else if("doubleValue"in e){const r=me(e.doubleValue);isNaN(r)?this.dt(t,13):(this.dt(t,15),Vs(r)?t.At(0):t.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(t,20),typeof r=="string"&&(r=Ot(r)),t.Rt(`${r.seconds||""}`),t.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(dn(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(t,45),t.At(r.latitude||0),t.At(r.longitude||0)}else"mapValue"in e?tp(e)?this.dt(t,Number.MAX_SAFE_INTEGER):$o(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):z()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const r=e.fields||{};this.dt(t,55);for(const s of Object.keys(r))this.Vt(s,t),this.Tt(r[s],t)}wt(e,t){var r,s;const i=e.fields||{};this.dt(t,53);const o="value",a=((s=(r=i[o].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.length)||0;this.dt(t,15),t.At(me(a)),this.Vt(o,t),this.Tt(i[o],t)}bt(e,t){const r=e.values||[];this.dt(t,50);for(const s of r)this.Tt(s,t)}yt(e,t){this.dt(t,37),j.fromName(e).path.forEach(r=>{this.dt(t,60),this.Dt(r,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}kn.vt=new kn;function OT(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Nd(n){const e=64-function(r){let s=0;for(let i=0;i<8;++i){const o=OT(255&r[i]);if(s+=o,o!==8)break}return s}(n);return Math.ceil(e/8)}class MT{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ft(r.value),r=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ot(r.value),r=t.next();this.Nt()}Lt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const s=t.codePointAt(0);this.Ft(240|s>>>18),this.Ft(128|63&s>>>12),this.Ft(128|63&s>>>6),this.Ft(128|63&s)}}this.Mt()}Bt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const s=t.codePointAt(0);this.Ot(240|s>>>18),this.Ot(128|63&s>>>12),this.Ot(128|63&s>>>6),this.Ot(128|63&s)}}this.Nt()}kt(e){const t=this.qt(e),r=Nd(t);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=255&t[s]}Kt(e){const t=this.qt(e),r=Nd(t);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let s=1;s<t.length;++s)t[s]^=r?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class LT{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class FT{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class ss{constructor(){this.jt=new MT,this.Ht=new LT(this.jt),this.Jt=new FT(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class Dn{constructor(e,t,r,s){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=s}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Dn(this.indexId,this.documentKey,this.arrayValue,r)}}function Yt(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Od(n.arrayValue,e.arrayValue),t!==0?t:(t=Od(n.directionalValue,e.directionalValue),t!==0?t:j.comparator(n.documentKey,e.documentKey)))}function Od(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
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
 */class Md{constructor(e){this.Xt=new ce((t,r)=>ge.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(G(e.collectionGroup===this.collectionId),this.nn)return!1;const t=hc(e);if(t!==void 0&&!this.sn(t))return!1;const r=Sn(e);let s=new Set,i=0,o=0;for(;i<r.length&&this.sn(r[i]);++i)s=s.add(r[i].fieldPath.canonicalString());if(i===r.length)return!0;if(this.Xt.size>0){const a=this.Xt.getIterator().getNext();if(!s.has(a.field.canonicalString())){const l=r[i];if(!this.on(a,l)||!this._n(this.en[o++],l))return!1}++i}for(;i<r.length;++i){const a=r[i];if(o>=this.en.length||!this._n(this.en[o++],a))return!1}return!0}an(){if(this.nn)return null;let e=new ce(ge.comparator);const t=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new Hi(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new Hi(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new Hi(r.field,r.dir==="asc"?0:1)));return new go(go.UNKNOWN_ID,this.collectionId,t,Ds.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function Kp(n){var e,t;if(G(n instanceof te||n instanceof ae),n instanceof te){if(n instanceof up){const s=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>te.create(n.field,"==",i)))||[];return ae.create(s,"or")}return n}const r=n.filters.map(s=>Kp(s));return ae.create(r,n.op)}function UT(n){if(n.getFilters().length===0)return[];const e=Sc(Kp(n));return G(Gp(e)),bc(e)||Ac(e)?[e]:e.getFilters()}function bc(n){return n instanceof te}function Ac(n){return n instanceof ae&&ul(n)}function Gp(n){return bc(n)||Ac(n)||function(t){if(t instanceof ae&&pc(t)){for(const r of t.getFilters())if(!bc(r)&&!Ac(r))return!1;return!0}return!1}(n)}function Sc(n){if(G(n instanceof te||n instanceof ae),n instanceof te)return n;if(n.filters.length===1)return Sc(n.filters[0]);const e=n.filters.map(r=>Sc(r));let t=ae.create(e,n.op);return t=To(t),Gp(t)?t:(G(t instanceof ae),G(Tr(t)),G(t.filters.length>1),t.filters.reduce((r,s)=>yl(r,s)))}function yl(n,e){let t;return G(n instanceof te||n instanceof ae),G(e instanceof te||e instanceof ae),t=n instanceof te?e instanceof te?function(s,i){return ae.create([s,i],"and")}(n,e):Ld(n,e):e instanceof te?Ld(e,n):function(s,i){if(G(s.filters.length>0&&i.filters.length>0),Tr(s)&&Tr(i))return ap(s,i.getFilters());const o=pc(s)?s:i,a=pc(s)?i:s,l=o.filters.map(h=>yl(h,a));return ae.create(l,"or")}(n,e),To(t)}function Ld(n,e){if(Tr(e))return ap(e,n.getFilters());{const t=e.filters.map(r=>yl(n,r));return ae.create(t,"or")}}function To(n){if(G(n instanceof te||n instanceof ae),n instanceof te)return n;const e=n.getFilters();if(e.length===1)return To(e[0]);if(ip(n))return n;const t=e.map(s=>To(s)),r=[];return t.forEach(s=>{s instanceof te?r.push(s):s instanceof ae&&(s.op===n.op?r.push(...s.filters):r.push(s))}),r.length===1?r[0]:ae.create(r,n.op)}/**
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
 */class BT{constructor(){this.un=new vl}addToCollectionParentIndex(e,t){return this.un.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(at.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(at.min())}updateCollectionGroup(e,t,r){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class vl{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ce(oe.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ce(oe.comparator)).toArray()}}/**
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
 */const Vi=new Uint8Array(0);class jT{constructor(e,t){this.databaseId=t,this.cn=new vl,this.ln=new yn(r=>qn(r),(r,s)=>Ys(r,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const r=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const i={collectionId:r,parent:Qe(s)};return Fd(e).put(i)}return k.resolve()}getCollectionParents(e,t){const r=[],s=IDBKeyRange.bound([t,""],[$m(t),""],!1,!0);return Fd(e).U(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;r.push(gt(o.parent))}return r})}addFieldIndex(e,t){const r=is(e),s=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(t);delete s.indexId;const i=r.add(s);if(t.indexState){const o=or(e);return i.next(a=>{o.put(Dd(a,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const r=is(e),s=or(e),i=ir(e);return r.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=is(e),r=ir(e),s=or(e);return t.j().next(()=>r.j()).next(()=>s.j())}createTargetIndexes(e,t){return k.forEach(this.hn(t),r=>this.getIndexType(e,r).next(s=>{if(s===0||s===1){const i=new Md(r).an();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const r=ir(e);let s=!0;const i=new Map;return k.forEach(this.hn(t),o=>this.Pn(e,o).next(a=>{s&&(s=!!a),i.set(o,a)})).next(()=>{if(s){let o=X();const a=[];return k.forEach(i,(l,h)=>{O("IndexedDbIndexManager",`Using index ${function(L){return`id=${L.indexId}|cg=${L.collectionGroup}|f=${L.fields.map(M=>`${M.fieldPath}:${M.kind}`).join(",")}`}(l)} to execute ${qn(t)}`);const f=function(L,M){const q=hc(M);if(q===void 0)return null;for(const $ of vo(L,q.fieldPath))switch($.op){case"array-contains-any":return $.value.arrayValue.values||[];case"array-contains":return[$.value]}return null}(h,l),m=function(L,M){const q=new Map;for(const $ of Sn(M))for(const b of vo(L,$.fieldPath))switch(b.op){case"==":case"in":q.set($.fieldPath.canonicalString(),b.value);break;case"not-in":case"!=":return q.set($.fieldPath.canonicalString(),b.value),Array.from(q.values())}return null}(h,l),_=function(L,M){const q=[];let $=!0;for(const b of Sn(M)){const v=b.kind===0?gd(L,b.fieldPath,L.startAt):_d(L,b.fieldPath,L.startAt);q.push(v.value),$&&($=v.inclusive)}return new Er(q,$)}(h,l),g=function(L,M){const q=[];let $=!0;for(const b of Sn(M)){const v=b.kind===0?_d(L,b.fieldPath,L.endAt):gd(L,b.fieldPath,L.endAt);q.push(v.value),$&&($=v.inclusive)}return new Er(q,$)}(h,l),w=this.In(l,h,_),R=this.In(l,h,g),A=this.Tn(l,h,m),V=this.En(l.indexId,f,w,_.inclusive,R,g.inclusive,A);return k.forEach(V,N=>r.G(N,t.limit).next(L=>{L.forEach(M=>{const q=j.fromSegments(M.documentKey);o.has(q)||(o=o.add(q),a.push(q))})}))}).next(()=>a)}return k.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=UT(ae.create(e.filters,"and")).map(r=>_c(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,r,s,i,o,a){const l=(t!=null?t.length:1)*Math.max(r.length,i.length),h=l/(t!=null?t.length:1),f=[];for(let m=0;m<l;++m){const _=t?this.dn(t[m/h]):Vi,g=this.An(e,_,r[m%h],s),w=this.Rn(e,_,i[m%h],o),R=a.map(A=>this.An(e,_,A,!0));f.push(...this.createRange(g,w,R))}return f}An(e,t,r,s){const i=new Dn(e,j.empty(),t,r);return s?i:i.Zt()}Rn(e,t,r,s){const i=new Dn(e,j.empty(),t,r);return s?i.Zt():i}Pn(e,t){const r=new Md(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const a of i)r.rn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const s=this.hn(t);return k.forEach(s,i=>this.Pn(e,i).next(o=>{o?r!==0&&o.fields.length<function(l){let h=new ce(ge.comparator),f=!1;for(const m of l.filters)for(const _ of m.getFlattenedFilters())_.field.isKeyField()||(_.op==="array-contains"||_.op==="array-contains-any"?f=!0:h=h.add(_.field));for(const m of l.orderBy)m.field.isKeyField()||(h=h.add(m.field));return h.size+(f?1:0)}(i)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&s.length>1&&r===2?1:r)}Vn(e,t){const r=new ss;for(const s of Sn(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=r.Yt(s.kind);kn.vt.It(i,o)}return r.zt()}dn(e){const t=new ss;return kn.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const r=new ss;return kn.vt.It(Os(this.databaseId,t),r.Yt(function(i){const o=Sn(i);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,t,r){if(r===null)return[];let s=[];s.push(new ss);let i=0;for(const o of Sn(e)){const a=r[i++];for(const l of s)if(this.fn(t,o.fieldPath)&&Ms(a))s=this.gn(s,o,a);else{const h=l.Yt(o.kind);kn.vt.It(a,h)}}return this.pn(s)}In(e,t,r){return this.Tn(e,t,r.position)}pn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].zt();return t}gn(e,t,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const a of s){const l=new ss;l.seed(a.zt()),kn.vt.It(o,l.Yt(t.kind)),i.push(l)}return i}fn(e,t){return!!e.filters.find(r=>r instanceof te&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=is(e),s=or(e);return(t?r.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.U()).next(i=>{const o=[];return k.forEach(i,a=>s.get([a.indexId,this.uid]).next(l=>{o.push(function(f,m){const _=m?new Ds(m.sequenceNumber,new at(Wn(m.readTime),new j(gt(m.documentKey)),m.largestBatchId)):Ds.empty(),g=f.fields.map(([w,R])=>new Hi(ge.fromServerFormat(w),R));return new go(f.indexId,f.collectionGroup,g,_)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:Y(r.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const s=is(e),i=or(e);return this.yn(e).next(o=>s.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>k.forEach(a,l=>i.put(Dd(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){const r=new Map;return k.forEach(t,(s,i)=>{const o=r.get(s.collectionGroup);return(o?k.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(a=>(r.set(s.collectionGroup,a),k.forEach(a,l=>this.wn(e,s,l).next(h=>{const f=this.Sn(i,l);return h.isEqual(f)?k.resolve():this.bn(e,i,l,h,f)}))))})}Dn(e,t,r,s){return ir(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.mn(r,t.key),documentKey:t.key.path.toArray()})}vn(e,t,r,s){return ir(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.mn(r,t.key),t.key.path.toArray()])}wn(e,t,r){const s=ir(e);let i=new ce(Yt);return s.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,t)])},(o,a)=>{i=i.add(new Dn(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>i)}Sn(e,t){let r=new ce(Yt);const s=this.Vn(t,e);if(s==null)return r;const i=hc(t);if(i!=null){const o=e.data.field(i.fieldPath);if(Ms(o))for(const a of o.arrayValue.values||[])r=r.add(new Dn(t.indexId,e.key,this.dn(a),s))}else r=r.add(new Dn(t.indexId,e.key,Vi,s));return r}bn(e,t,r,s,i){O("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(l,h,f,m,_){const g=l.getIterator(),w=h.getIterator();let R=sr(g),A=sr(w);for(;R||A;){let V=!1,N=!1;if(R&&A){const L=f(R,A);L<0?N=!0:L>0&&(V=!0)}else R!=null?N=!0:V=!0;V?(m(A),A=sr(w)):N?(_(R),R=sr(g)):(R=sr(g),A=sr(w))}}(s,i,Yt,a=>{o.push(this.Dn(e,t,r,a))},a=>{o.push(this.vn(e,t,r,a))}),k.waitFor(o)}yn(e){let t=1;return or(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>Yt(o,a)).filter((o,a,l)=>!a||Yt(o,l[a-1])!==0);const s=[];s.push(e);for(const o of r){const a=Yt(o,e),l=Yt(o,t);if(a===0)s[0]=e.Zt();else if(a>0&&l<0)s.push(o),s.push(o.Zt());else if(l>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Cn(s[o],s[o+1]))return[];const a=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,Vi,[]],l=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,Vi,[]];i.push(IDBKeyRange.bound(a,l))}return i}Cn(e,t){return Yt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Ud)}getMinOffset(e,t){return k.mapArray(this.hn(t),r=>this.Pn(e,r).next(s=>s||z())).next(Ud)}}function Fd(n){return De(n,"collectionParents")}function ir(n){return De(n,"indexEntries")}function is(n){return De(n,"indexConfiguration")}function or(n){return De(n,"indexState")}function Ud(n){G(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const s=n[r].indexState.offset;il(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new at(e.readTime,e.documentKey,t)}/**
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
 */const Bd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Xe{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Xe(e,Xe.DEFAULT_COLLECTION_PERCENTILE,Xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function Wp(n,e,t){const r=n.store("mutations"),s=n.store("documentMutations"),i=[],o=IDBKeyRange.only(t.batchId);let a=0;const l=r.J({range:o},(f,m,_)=>(a++,_.delete()));i.push(l.next(()=>{G(a===1)}));const h=[];for(const f of t.mutations){const m=Qm(e,f.key.path,t.batchId);i.push(s.delete(m)),h.push(f.key)}return k.waitFor(i).next(()=>h)}function bo(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw z();e=n.noDocument}return JSON.stringify(e).length}/**
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
 */Xe.DEFAULT_COLLECTION_PERCENTILE=10,Xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xe.DEFAULT=new Xe(41943040,Xe.DEFAULT_COLLECTION_PERCENTILE,Xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xe.DISABLED=new Xe(-1,0,0);class Qo{constructor(e,t,r,s){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=s,this.Fn={}}static lt(e,t,r,s){G(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new Qo(i,t,r,s)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Xt(e).J({index:"userMutationsIndex",range:r},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,s){const i=dr(e),o=Xt(e);return o.add({}).next(a=>{G(typeof a=="number");const l=new fl(a,t,r,s),h=function(g,w,R){const A=R.baseMutations.map(N=>wo(g.ct,N)),V=R.mutations.map(N=>wo(g.ct,N));return{userId:w,batchId:R.batchId,localWriteTimeMs:R.localWriteTime.toMillis(),baseMutations:A,mutations:V}}(this.serializer,this.userId,l),f=[];let m=new ce((_,g)=>Y(_.canonicalString(),g.canonicalString()));for(const _ of s){const g=Qm(this.userId,_.key.path,a);m=m.add(_.key.path.popLast()),f.push(o.put(h)),f.push(i.put(g,SE))}return m.forEach(_=>{f.push(this.indexManager.addToCollectionParentIndex(e,_))}),e.addOnCommittedListener(()=>{this.Fn[a]=l.keys()}),k.waitFor(f).next(()=>l)})}lookupMutationBatch(e,t){return Xt(e).get(t).next(r=>r?(G(r.userId===this.userId),Cn(this.serializer,r)):null)}Mn(e,t){return this.Fn[t]?k.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const s=r.keys();return this.Fn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return Xt(e).J({index:"userMutationsIndex",range:s},(o,a,l)=>{a.userId===this.userId&&(G(a.batchId>=r),i=Cn(this.serializer,a)),l.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Xt(e).J({index:"userMutationsIndex",range:t,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Xt(e).U("userMutationsIndex",t).next(r=>r.map(s=>Cn(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Qi(this.userId,t.path),s=IDBKeyRange.lowerBound(r),i=[];return dr(e).J({range:s},(o,a,l)=>{const[h,f,m]=o,_=gt(f);if(h===this.userId&&t.path.isEqual(_))return Xt(e).get(m).next(g=>{if(!g)throw z();G(g.userId===this.userId),i.push(Cn(this.serializer,g))});l.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ce(Y);const s=[];return t.forEach(i=>{const o=Qi(this.userId,i.path),a=IDBKeyRange.lowerBound(o),l=dr(e).J({range:a},(h,f,m)=>{const[_,g,w]=h,R=gt(g);_===this.userId&&i.path.isEqual(R)?r=r.add(w):m.done()});s.push(l)}),k.waitFor(s).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1,i=Qi(this.userId,r),o=IDBKeyRange.lowerBound(i);let a=new ce(Y);return dr(e).J({range:o},(l,h,f)=>{const[m,_,g]=l,w=gt(_);m===this.userId&&r.isPrefixOf(w)?w.length===s&&(a=a.add(g)):f.done()}).next(()=>this.xn(e,a))}xn(e,t){const r=[],s=[];return t.forEach(i=>{s.push(Xt(e).get(i).next(o=>{if(o===null)throw z();G(o.userId===this.userId),r.push(Cn(this.serializer,o))}))}),k.waitFor(s).next(()=>r)}removeMutationBatch(e,t){return Wp(e._e,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),k.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return k.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return dr(e).J({range:r},(i,o,a)=>{if(i[0]===this.userId){const l=gt(i[1]);s.push(l)}else a.done()}).next(()=>{G(s.length===0)})})}containsKey(e,t){return Hp(e,this.userId,t)}Nn(e){return Qp(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Hp(n,e,t){const r=Qi(e,t.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return dr(n).J({range:i,H:!0},(a,l,h)=>{const[f,m,_]=a;f===e&&m===s&&(o=!0),h.done()}).next(()=>o)}function Xt(n){return De(n,"mutations")}function dr(n){return De(n,"documentMutations")}function Qp(n){return De(n,"mutationQueues")}/**
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
 */class Hn{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Hn(0)}static kn(){return new Hn(-1)}}/**
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
 */class $T{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const r=new Hn(t.highestTargetId);return t.highestTargetId=r.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>W.fromTimestamp(new _e(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.qn(e).next(s=>(s.highestListenSequenceNumber=t,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.Qn(e,s)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(t,r),this.Qn(e,r))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>ar(e).delete(t.targetId)).next(()=>this.qn(e)).next(r=>(G(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,t,r){let s=0;const i=[];return ar(e).J((o,a)=>{const l=ms(a);l.sequenceNumber<=t&&r.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(e,l)))}).next(()=>k.waitFor(i)).next(()=>s)}forEachTarget(e,t){return ar(e).J((r,s)=>{const i=ms(s);t(i)})}qn(e){return jd(e).get("targetGlobalKey").next(t=>(G(t!==null),t))}Qn(e,t){return jd(e).put("targetGlobalKey",t)}Kn(e,t){return ar(e).put(qp(this.serializer,t))}$n(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=qn(t),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return ar(e).J({range:s,index:"queryTargetsIndex"},(o,a,l)=>{const h=ms(a);Ys(t,h.target)&&(i=h,l.done())}).next(()=>i)}addMatchingKeys(e,t,r){const s=[],i=nn(e);return t.forEach(o=>{const a=Qe(o.path);s.push(i.put({targetId:r,path:a})),s.push(this.referenceDelegate.addReference(e,r,o))}),k.waitFor(s)}removeMatchingKeys(e,t,r){const s=nn(e);return k.forEach(t,i=>{const o=Qe(i.path);return k.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,t){const r=nn(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),s=nn(e);let i=X();return s.J({range:r,H:!0},(o,a,l)=>{const h=gt(o[1]),f=new j(h);i=i.add(f)}).next(()=>i)}containsKey(e,t){const r=Qe(t.path),s=IDBKeyRange.bound([r],[$m(r)],!1,!0);let i=0;return nn(e).J({index:"documentTargetsIndex",H:!0,range:s},([o,a],l,h)=>{o!==0&&(i++,h.done())}).next(()=>i>0)}ot(e,t){return ar(e).get(t).next(r=>r?ms(r):null)}}function ar(n){return De(n,"targets")}function jd(n){return De(n,"targetGlobal")}function nn(n){return De(n,"targetDocuments")}/**
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
 */function $d([n,e],[t,r]){const s=Y(n,t);return s===0?Y(e,r):s}class qT{constructor(e){this.Un=e,this.buffer=new ce($d),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();$d(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class zT{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){O("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){_n(t)?O("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await gn(t)}await this.Hn(3e5)})}}class KT{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return k.resolve(Ze.oe);const r=new qT(t);return this.Jn.forEachTarget(e,s=>r.zn(s.sequenceNumber)).next(()=>this.Jn.Zn(e,s=>r.zn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(O("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(Bd)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(O("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Bd):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let r,s,i,o,a,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(O("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,a=Date.now(),this.removeTargets(e,r,t))).next(m=>(i=m,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),cr()<=ee.DEBUG&&O("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(l-a)+`ms
	Removed ${m} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function GT(n,e){return new KT(n,e)}/**
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
 */class WT{constructor(e,t){this.db=e,this.garbageCollector=GT(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}er(e){let t=0;return this.Zn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(r,s)=>t(s))}addReference(e,t,r){return xi(e,r)}removeReference(e,t,r){return xi(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return xi(e,t)}nr(e,t){return function(s,i){let o=!1;return Qp(s).Y(a=>Hp(s,a,i).next(l=>(l&&(o=!0),k.resolve(!l)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.tr(e,(o,a)=>{if(a<=t){const l=this.nr(e,o).next(h=>{if(!h)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,W.min()),nn(e).delete(function(m){return[0,Qe(m.path)]}(o))))});s.push(l)}}).next(()=>k.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return xi(e,t)}tr(e,t){const r=nn(e);let s,i=Ze.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:h})=>{o===0?(i!==Ze.oe&&t(new j(gt(s)),i),i=h,s=l):i=Ze.oe}).next(()=>{i!==Ze.oe&&t(new j(gt(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function xi(n,e){return nn(n).put(function(r,s){return{targetId:0,path:Qe(r.path),sequenceNumber:s}}(e,n.currentSequenceNumber))}/**
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
 */class Jp{constructor(){this.changes=new yn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ie.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?k.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class HT{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return bn(e).put(r)}removeEntry(e,t,r){return bn(e).delete(function(i,o){const a=i.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Eo(o),a[a.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.rr(e,r)))}getEntry(e,t){let r=Ie.newInvalidDocument(t);return bn(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(os(t))},(s,i)=>{r=this.ir(t,i)}).next(()=>r)}sr(e,t){let r={size:0,document:Ie.newInvalidDocument(t)};return bn(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(os(t))},(s,i)=>{r={document:this.ir(t,i),size:bo(i)}}).next(()=>r)}getEntries(e,t){let r=st();return this._r(e,t,(s,i)=>{const o=this.ir(s,i);r=r.insert(s,o)}).next(()=>r)}ar(e,t){let r=st(),s=new de(j.comparator);return this._r(e,t,(i,o)=>{const a=this.ir(i,o);r=r.insert(i,a),s=s.insert(i,bo(o))}).next(()=>({documents:r,ur:s}))}_r(e,t,r){if(t.isEmpty())return k.resolve();let s=new ce(Kd);t.forEach(l=>s=s.add(l));const i=IDBKeyRange.bound(os(s.first()),os(s.last())),o=s.getIterator();let a=o.getNext();return bn(e).J({index:"documentKeyIndex",range:i},(l,h,f)=>{const m=j.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;a&&Kd(a,m)<0;)r(a,null),a=o.getNext();a&&a.isEqual(m)&&(r(a,h),a=o.hasNext()?o.getNext():null),a?f.$(os(a)):f.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,s,i){const o=t.path,a=[o.popLast().toArray(),o.lastSegment(),Eo(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return bn(e).U(IDBKeyRange.bound(a,l,!0)).next(h=>{i==null||i.incrementDocumentReadCount(h.length);let f=st();for(const m of h){const _=this.ir(j.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);_.isFoundDocument()&&(ei(t,_)||s.has(_.key))&&(f=f.insert(_.key,_))}return f})}getAllFromCollectionGroup(e,t,r,s){let i=st();const o=zd(t,r),a=zd(t,at.max());return bn(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,h,f)=>{const m=this.ir(j.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);i=i.insert(m.key,m),i.size===s&&f.done()}).next(()=>i)}newChangeBuffer(e){return new QT(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return qd(e).get("remoteDocumentGlobalKey").next(t=>(G(!!t),t))}rr(e,t){return qd(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const r=VT(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(W.min())))return r}return Ie.newInvalidDocument(e)}}function Yp(n){return new HT(n)}class QT extends Jp{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new yn(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const t=[];let r=0,s=new ce((i,o)=>Y(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.lr.get(i);if(t.push(this.cr.removeEntry(e,i,a.readTime)),o.isValidDocument()){const l=Cd(this.cr.serializer,o);s=s.add(i.path.popLast());const h=bo(l);r+=h-a.size,t.push(this.cr.addEntry(e,i,l))}else if(r-=a.size,this.trackRemovals){const l=Cd(this.cr.serializer,o.convertToNoDocument(W.min()));t.push(this.cr.addEntry(e,i,l))}}),s.forEach(i=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.cr.updateMetadata(e,r)),k.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(r=>(this.lr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:r,ur:s})=>(s.forEach((i,o)=>{this.lr.set(i,{size:o,readTime:r.get(i).readTime})}),r))}}function qd(n){return De(n,"remoteDocumentGlobal")}function bn(n){return De(n,"remoteDocumentsV14")}function os(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function zd(n,e){const t=e.documentKey.path.toArray();return[n,Eo(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Kd(n,e){const t=n.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<r.length-2;++i)if(s=Y(t[i],r[i]),s)return s;return s=Y(t.length,r.length),s||(s=Y(t[t.length-2],r[r.length-2]),s||Y(t[t.length-1],r[r.length-1]))}/**
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
 */class JT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Xp{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&ws(r.mutation,s,et.empty(),_e.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,X()).next(()=>r))}getLocalViewOfDocuments(e,t,r=X()){const s=_t();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=ds();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=_t();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,X()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,s){let i=st();const o=Is(),a=function(){return Is()}();return t.forEach((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof zt)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),ws(f.mutation,h,f.mutation.getFieldMask(),_e.now())):o.set(h.key,et.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>o.set(h,f)),t.forEach((h,f)=>{var m;return a.set(h,new JT(f,(m=o.get(h))!==null&&m!==void 0?m:null))}),a))}recalculateAndSaveOverlays(e,t){const r=Is();let s=new de((o,a)=>o-a),i=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(l=>{const h=t.get(l);if(h===null)return;let f=r.get(l)||et.empty();f=a.applyToLocalView(h,f),r.set(l,f);const m=(s.get(a.batchId)||X()).add(l);s=s.insert(a.batchId,m)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),h=l.key,f=l.value,m=yp();f.forEach(_=>{if(!i.has(_)){const g=Ap(t.get(_),r.get(_));g!==null&&m.set(_,g),i=i.add(_)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return k.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(o){return j.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):dp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):k.resolve(_t());let a=-1,l=i;return o.next(h=>k.forEach(h,(f,m)=>(a<m.largestBatchId&&(a=m.largestBatchId),i.get(f)?k.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{l=l.insert(f,_)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,X())).next(f=>({batchId:a,changes:_p(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new j(t)).next(r=>{let s=ds();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=ds();return this.indexManager.getCollectionParents(e,i).next(a=>k.forEach(a,l=>{const h=function(m,_){return new Xs(_,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((m,_)=>{o=o.insert(m,_)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>{i.forEach((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Ie.newInvalidDocument(f)))});let a=ds();return o.forEach((l,h)=>{const f=i.get(l);f!==void 0&&ws(f.mutation,h,et.empty(),_e.now()),ei(t,h)&&(a=a.insert(l,h))}),a})}}/**
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
 */class YT{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return k.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Je(s.createTime)}}(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:zp(s.bundledQuery),readTime:Je(s.readTime)}}(t)),k.resolve()}}/**
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
 */class XT{constructor(){this.overlays=new de(j.comparator),this.Ir=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const r=_t();return k.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),k.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),k.resolve()}getOverlaysForCollection(e,t,r){const s=_t(),i=t.length+1,o=new j(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return k.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new de((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=_t(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const a=_t(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>a.set(h,f)),!(a.size()>=s)););return k.resolve(a)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new pl(t,r));let i=this.Ir.get(t);i===void 0&&(i=X(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
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
 */class ZT{constructor(){this.sessionToken=Se.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,k.resolve()}}/**
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
 */class Il{constructor(){this.Tr=new ce(Ve.Er),this.dr=new ce(Ve.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new Ve(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new Ve(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new j(new oe([])),r=new Ve(t,e),s=new Ve(t,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new j(new oe([])),r=new Ve(t,e),s=new Ve(t,e+1);let i=X();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Ve(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ve{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return j.comparator(e.key,t.key)||Y(e.wr,t.wr)}static Ar(e,t){return Y(e.wr,t.wr)||j.comparator(e.key,t.key)}}/**
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
 */class eb{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new ce(Ve.Er)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new fl(i,t,r,s);this.mutationQueue.push(o);for(const a of s)this.br=this.br.add(new Ve(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,t){return k.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ve(t,0),s=new Ve(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const a=this.Dr(o.wr);i.push(a)}),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ce(Y);return t.forEach(s=>{const i=new Ve(s,0),o=new Ve(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],a=>{r=r.add(a.wr)})}),k.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;j.isDocumentKey(i)||(i=i.child(""));const o=new Ve(new j(i),0);let a=new ce(Y);return this.br.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(a=a.add(l.wr)),!0)},o),k.resolve(this.Cr(a))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){G(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return k.forEach(t.mutations,s=>{const i=new Ve(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new Ve(t,0),s=this.br.firstAfterOrEqual(r);return k.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class tb{constructor(e){this.Mr=e,this.docs=function(){return new de(j.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return k.resolve(r?r.document.mutableCopy():Ie.newInvalidDocument(t))}getEntries(e,t){let r=st();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ie.newInvalidDocument(s))}),k.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=st();const o=t.path,a=new j(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||il(zm(f),r)<=0||(s.has(f.key)||ei(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,t,r,s){z()}Or(e,t){return k.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new nb(this)}getSize(e){return k.resolve(this.size)}}class nb extends Jp{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),k.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class rb{constructor(e){this.persistence=e,this.Nr=new yn(t=>qn(t),Ys),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Il,this.targetCount=0,this.kr=Hn.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),k.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Hn(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.Kn(t),k.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),k.waitFor(i).next(()=>s)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return k.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),k.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),k.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),k.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return k.resolve(r)}containsKey(e,t){return k.resolve(this.Br.containsKey(t))}}/**
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
 */class Zp{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Ze(0),this.Kr=!1,this.Kr=!0,this.$r=new ZT,this.referenceDelegate=e(this),this.Ur=new rb(this),this.indexManager=new BT,this.remoteDocumentCache=function(s){return new tb(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new $p(t),this.Gr=new YT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new XT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new eb(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){O("MemoryPersistence","Starting transaction:",e);const s=new sb(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return k.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class sb extends Gm{constructor(e){super(),this.currentSequenceNumber=e}}class Jo{constructor(e){this.persistence=e,this.Jr=new Il,this.Yr=null}static Zr(e){return new Jo(e)}get Xr(){if(this.Yr)return this.Yr;throw z()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),k.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),k.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Xr,r=>{const s=j.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,W.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return k.or([()=>k.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class ib{constructor(e){this.serializer=e}O(e,t,r,s){const i=new Bo("createOrUpgrade",t);r<1&&s>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",id,{unique:!0}),l.createObjectStore("documentMutations")}(e),Gd(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=k.resolve();return r<3&&s>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),Gd(e)),o=o.next(()=>function(l){const h=l.store("targetGlobal"),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:W.min().toTimestamp(),targetCount:0};return h.put("targetGlobalKey",f)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(l,h){return h.store("mutations").U().next(f=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",id,{unique:!0});const m=h.store("mutations"),_=f.map(g=>m.put(g));return k.waitFor(_)})}(e,i))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.ni(i))),r<6&&s>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ri(i)))),r<7&&s>=7&&(o=o.next(()=>this.ii(i))),r<8&&s>=8&&(o=o.next(()=>this.si(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(o=o.next(()=>this.oi(i))),r<11&&s>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(l){const h=l.createObjectStore("documentOverlays",{keyPath:FE});h.createIndex("collectionPathOverlayIndex",UE,{unique:!1}),h.createIndex("collectionGroupOverlayIndex",BE,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>function(l){const h=l.createObjectStore("remoteDocumentsV14",{keyPath:RE});h.createIndex("documentKeyIndex",PE),h.createIndex("collectionGroupIndex",CE)}(e)).next(()=>this._i(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&s>=14&&(o=o.next(()=>this.ai(e,i))),r<15&&s>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:NE}).createIndex("sequenceNumberIndex",OE,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:ME}).createIndex("documentKeyIndex",LE,{unique:!1})}(e))),r<16&&s>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),r<17&&s>=17&&(o=o.next(()=>{(function(l){l.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((r,s)=>{t+=bo(s)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.U().next(s=>k.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>k.forEach(a,l=>{G(l.userId===i.userId);const h=Cn(this.serializer,l);return Wp(e,i.userId,h).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return r.J((o,a)=>{const l=new oe(o),h=function(m){return[0,Qe(m)]}(l);i.push(t.get(h).next(f=>f?k.resolve():(m=>t.put({targetId:0,path:Qe(m),sequenceNumber:s.highestListenSequenceNumber}))(l)))}).next(()=>k.waitFor(i))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:xE});const r=t.store("collectionParents"),s=new vl,i=o=>{if(s.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:Qe(l)})}};return t.store("remoteDocuments").J({H:!0},(o,a)=>{const l=new oe(o);return i(l.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,a,l],h)=>{const f=gt(a);return i(f.popLast())}))}oi(e){const t=e.store("targets");return t.J((r,s)=>{const i=ms(s),o=qp(this.serializer,i);return t.put(o)})}_i(e,t){const r=t.store("remoteDocuments"),s=[];return r.J((i,o)=>{const a=t.store("remoteDocumentsV14"),l=function(m){return m.document?new j(oe.fromString(m.document.name).popFirst(5)):m.noDocument?j.fromSegments(m.noDocument.path):m.unknownDocument?j.fromSegments(m.unknownDocument.path):z()}(o).path.toArray(),h={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(a.put(h))}).next(()=>k.waitFor(s))}ai(e,t){const r=t.store("mutations"),s=Yp(this.serializer),i=new Zp(Jo.Zr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(l=>{var h;let f=(h=a.get(l.userId))!==null&&h!==void 0?h:X();Cn(this.serializer,l).keys().forEach(m=>f=f.add(m)),a.set(l.userId,f)}),k.forEach(a,(l,h)=>{const f=new ze(h),m=Ho.lt(this.serializer,f),_=i.getIndexManager(f),g=Qo.lt(f,this.serializer,_,i.referenceDelegate);return new Xp(s,g,m,_).recalculateAndSaveOverlaysForDocumentKeys(new dc(t,Ze.oe),l).next()})})}}function Gd(n){n.createObjectStore("targetDocuments",{keyPath:DE}).createIndex("documentTargetsIndex",VE,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",kE,{unique:!0}),n.createObjectStore("targetGlobal")}const ja="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class wl{constructor(e,t,r,s,i,o,a,l,h,f,m=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ui=i,this.window=o,this.document=a,this.ci=h,this.li=f,this.hi=m,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=_=>Promise.resolve(),!wl.D())throw new F(x.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new WT(this,s),this.Ai=t+"main",this.serializer=new $p(l),this.Ri=new ln(this.Ai,this.hi,new ib(this.serializer)),this.$r=new NT,this.Ur=new $T(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Yp(this.serializer),this.Gr=new xT,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,f===!1&&Ee("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new F(x.FAILED_PRECONDITION,ja);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new Ze(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Ni(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(_n(e))return O("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return O("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return as(e).get("owner").next(t=>k.resolve(this.vi(t)))}Ci(e){return Ni(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=De(t,"clientMetadata");return r.U().next(s=>{const i=this.xi(s,18e5),o=s.filter(a=>i.indexOf(a)===-1);return k.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?k.resolve(!0):as(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new F(x.FAILED_PRECONDITION,ja);return!1}}return!(!this.networkEnabled||!this.inForeground)||Ni(e).U().next(r=>this.xi(r,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,a=this.networkEnabled===s.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&O("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new dc(e,Ze.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(r=>this.Mi(r.updateTimeMs,t)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>Ni(e).U().next(t=>this.xi(t,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return Qo.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new jT(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Ho.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,r){O("IndexedDbPersistence","Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(l){return l===17?qE:l===16?$E:l===15?al:l===14?Xm:l===13?Ym:l===12?jE:l===11?Jm:void z()}(this.hi);let o;return this.Ri.runTransaction(e,s,i,a=>(o=new dc(a,this.Qr?this.Qr.next():Ze.oe),t==="readwrite-primary"?this.wi(o).next(l=>!!l||this.Si(o)).next(l=>{if(!l)throw Ee(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new F(x.FAILED_PRECONDITION,Km);return r(o)}).next(l=>this.Di(o).next(()=>l)):this.Ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Ki(e){return as(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new F(x.FAILED_PRECONDITION,ja)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return as(e).put("owner",t)}static D(){return ln.D()}bi(e){const t=as(e);return t.get("owner").next(r=>this.vi(r)?(O("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):k.resolve())}Mi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Ee(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;Hf()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const r=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return O("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Ee("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){Ee("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function as(n){return De(n,"owner")}function Ni(n){return De(n,"clientMetadata")}function eg(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class El{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=X(),s=X();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new El(e,t.fromCache,r,s)}}/**
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
 */class ob{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class tg{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Hf()?8:Wm(Ce())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new ob;return this.Xi(e,t,o).next(a=>{if(i.result=a,this.zi)return this.es(e,t,o,a.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(cr()<=ee.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",lr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),k.resolve()):(cr()<=ee.DEBUG&&O("QueryEngine","Query:",lr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(cr()<=ee.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",lr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,it(t))):k.resolve())}Yi(e,t){if(yd(t))return k.resolve(null);let r=it(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=vc(t,null,"F"),r=it(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=X(...i);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.ts(t,a);return this.ns(t,h,o,l.readTime)?this.Yi(e,vc(t,null,"F")):this.rs(e,h,t,l)}))})))}Zi(e,t,r,s){return yd(t)||s.isEqual(W.min())?k.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(t,i);return this.ns(t,o,r,s)?k.resolve(null):(cr()<=ee.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),lr(t)),this.rs(e,o,t,qm(s,-1)).next(a=>a))})}ts(e,t){let r=new ce(pp(e));return t.forEach((s,i)=>{ei(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return cr()<=ee.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",lr(t)),this.Ji.getDocumentsMatchingQuery(e,t,at.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class ab{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new de(Y),this._s=new yn(i=>qn(i),Ys),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Xp(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function ng(n,e,t,r){return new ab(n,e,t,r)}async function rg(n,e){const t=K(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=X();for(const h of s){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){a.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(r,l).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:a}))})})}function cb(n,e){const t=K(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(a,l,h,f){const m=h.batch,_=m.keys();let g=k.resolve();return _.forEach(w=>{g=g.next(()=>f.getEntry(l,w)).next(R=>{const A=h.docVersions.get(w);G(A!==null),R.version.compareTo(A)<0&&(m.applyToRemoteDocument(R,h),R.isValidDocument()&&(R.setReadTime(h.commitVersion),f.addEntry(R)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,m))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=X();for(let h=0;h<a.mutationResults.length;++h)a.mutationResults[h].transformResults.length>0&&(l=l.add(a.batch.mutations[h].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function sg(n){const e=K(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function lb(n,e){const t=K(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const a=[];e.targetChanges.forEach((f,m)=>{const _=s.get(m);if(!_)return;a.push(t.Ur.removeMatchingKeys(i,f.removedDocuments,m).next(()=>t.Ur.addMatchingKeys(i,f.addedDocuments,m)));let g=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?g=g.withResumeToken(Se.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):f.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(f.resumeToken,r)),s=s.insert(m,g),function(R,A,V){return R.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(_,g,f)&&a.push(t.Ur.updateTargetData(i,g))});let l=st(),h=X();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),a.push(ub(i,o,e.documentUpdates).next(f=>{l=f.Ps,h=f.Is})),!r.isEqual(W.min())){const f=t.Ur.getLastRemoteSnapshotVersion(i).next(m=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(f)}return k.waitFor(a).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(t.os=s,i))}function ub(n,e,t){let r=X(),s=X();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=st();return t.forEach((a,l)=>{const h=i.get(a);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(W.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):O("LocalStore","Ignoring outdated watch update for ",a,". Current version:",h.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function hb(n,e){const t=K(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Ao(n,e){const t=K(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,k.resolve(s)):t.Ur.allocateTargetId(r).next(o=>(s=new kt(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function Sr(n,e,t){const r=K(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!_n(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Rc(n,e,t){const r=K(n);let s=W.min(),i=X();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,f){const m=K(l),_=m._s.get(f);return _!==void 0?k.resolve(m.os.get(_)):m.Ur.getTargetData(h,f)}(r,o,it(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,t?s:W.min(),t?i:X())).next(a=>(ag(r,mp(e),a),{documents:a,Ts:i})))}function ig(n,e){const t=K(n),r=K(t.Ur),s=t.os.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",i=>r.ot(i,e).next(o=>o?o.target:null))}function og(n,e){const t=K(n),r=t.us.get(e)||W.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.cs.getAllFromCollectionGroup(s,e,qm(r,-1),Number.MAX_SAFE_INTEGER)).then(s=>(ag(t,e,s),s))}function ag(n,e,t){let r=n.us.get(e)||W.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}function Wd(n,e){return`firestore_clients_${n}_${e}`}function Hd(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function $a(n,e){return`firestore_targets_${n}_${e}`}class So{constructor(e,t,r,s){this.user=e,this.batchId=t,this.state=r,this.error=s}static Rs(e,t,r){const s=JSON.parse(r);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new F(s.error.code,s.error.message))),o?new So(e,t,s.state,i):(Ee("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Es{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Rs(e,t){const r=JSON.parse(t);let s,i=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return i&&r.error&&(i=typeof r.error.message=="string"&&typeof r.error.code=="string",i&&(s=new F(r.error.code,r.error.message))),i?new Es(e,r.state,s):(Ee("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ro{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Rs(e,t){const r=JSON.parse(t);let s=typeof r=="object"&&r.activeTargetIds instanceof Array,i=hl();for(let o=0;s&&o<r.activeTargetIds.length;++o)s=Hm(r.activeTargetIds[o]),i=i.add(r.activeTargetIds[o]);return s?new Ro(e,i):(Ee("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Tl{constructor(e,t){this.clientId=e,this.onlineState=t}static Rs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Tl(t.clientId,t.onlineState):(Ee("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Pc{constructor(){this.activeTargetIds=hl()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qa{constructor(e,t,r,s,i){this.window=e,this.ui=t,this.persistenceKey=r,this.ps=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new de(Y),this.started=!1,this.bs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Ds=Wd(this.persistenceKey,this.ps),this.vs=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new Pc),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Os=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const r of e){if(r===this.ps)continue;const s=this.getItem(Wd(this.persistenceKey,r));if(s){const i=Ro.Rs(r,s);i&&(this.Ss=this.Ss.insert(i.clientId,i))}}this.Ns();const t=this.storage.getItem(this.xs);if(t){const r=this.Ls(t);r&&this.Bs(r)}for(const r of this.bs)this.ws(r);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let t=!1;return this.Ss.forEach((r,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,t,r){this.qs(e,t,r),this.Qs(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem($a(this.persistenceKey,e));if(s){const i=Es.Rs(e,s);i&&(r=i.state)}}return t&&this.Ks.fs(e),this.Ns(),r}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem($a(this.persistenceKey,e))}updateQueryState(e,t,r){this.$s(e,t,r)}handleUserChange(e,t,r){t.forEach(s=>{this.Qs(s)}),this.currentUser=e,r.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return O("SharedClientState","READ",e,t),t}setItem(e,t){O("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){O("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const t=e;if(t.storageArea===this.storage){if(O("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ds)return void Ee("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Cs.test(t.key)){if(t.newValue==null){const r=this.Gs(t.key);return this.zs(r,null)}{const r=this.js(t.key,t.newValue);if(r)return this.zs(r.clientId,r)}}else if(this.Fs.test(t.key)){if(t.newValue!==null){const r=this.Hs(t.key,t.newValue);if(r)return this.Js(r)}}else if(this.Ms.test(t.key)){if(t.newValue!==null){const r=this.Ys(t.key,t.newValue);if(r)return this.Zs(r)}}else if(t.key===this.xs){if(t.newValue!==null){const r=this.Ls(t.newValue);if(r)return this.Bs(r)}}else if(t.key===this.vs){const r=function(i){let o=Ze.oe;if(i!=null)try{const a=JSON.parse(i);G(typeof a=="number"),o=a}catch(a){Ee("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(t.newValue);r!==Ze.oe&&this.sequenceNumberHandler(r)}else if(t.key===this.Os){const r=this.Xs(t.newValue);await Promise.all(r.map(s=>this.syncEngine.eo(s)))}}}else this.bs.push(t)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,t,r){const s=new So(this.currentUser,e,t,r),i=Hd(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Vs())}Qs(e){const t=Hd(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Us(e){const t={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(t))}$s(e,t,r){const s=$a(this.persistenceKey,e),i=new Es(e,t,r);this.setItem(s,i.Vs())}Ws(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Os,t)}Gs(e){const t=this.Cs.exec(e);return t?t[1]:null}js(e,t){const r=this.Gs(e);return Ro.Rs(r,t)}Hs(e,t){const r=this.Fs.exec(e),s=Number(r[1]),i=r[2]!==void 0?r[2]:null;return So.Rs(new ze(i),s,t)}Ys(e,t){const r=this.Ms.exec(e),s=Number(r[1]);return Es.Rs(s,t)}Ls(e){return Tl.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);O("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,t){const r=t?this.Ss.insert(e,t):this.Ss.remove(e),s=this.ks(this.Ss),i=this.ks(r),o=[],a=[];return i.forEach(l=>{s.has(l)||o.push(l)}),s.forEach(l=>{i.has(l)||a.push(l)}),this.syncEngine.io(o,a).then(()=>{this.Ss=r})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let t=hl();return e.forEach((r,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class cg{constructor(){this.so=new Pc,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Pc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class db{_o(e){}shutdown(){}}/**
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
 */class Qd{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Oi=null;function za(){return Oi===null?Oi=function(){return 268435456+Math.round(2147483648*Math.random())}():Oi++,"0x"+Oi.toString(16)}/**
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
 */const fb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class mb{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const qe="WebChannelConnection";class pb extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,o){const a=za(),l=this.xo(t,r.toUriEncodedString());O("RestConnection",`Sending RPC '${t}' ${a}:`,l,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(t,l,h,s).then(f=>(O("RestConnection",`Received RPC '${t}' ${a}: `,f),f),f=>{throw Cs("RestConnection",`RPC '${t}' ${a} failed with error: `,f,"url: ",l,"request:",s),f})}Lo(t,r,s,i,o,a){return this.Mo(t,r,s,i,o)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Lr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>t[o]=i),s&&s.headers.forEach((i,o)=>t[o]=i)}xo(t,r){const s=fb[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=za();return new Promise((o,a)=>{const l=new Mm;l.setWithCredentials(!0),l.listenOnce(Lm.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Wi.NO_ERROR:const f=l.getResponseJson();O(qe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case Wi.TIMEOUT:O(qe,`RPC '${e}' ${i} timed out`),a(new F(x.DEADLINE_EXCEEDED,"Request time out"));break;case Wi.HTTP_ERROR:const m=l.getStatus();if(O(qe,`RPC '${e}' ${i} failed with status:`,m,"response text:",l.getResponseText()),m>0){let _=l.getResponseJson();Array.isArray(_)&&(_=_[0]);const g=_==null?void 0:_.error;if(g&&g.status&&g.message){const w=function(A){const V=A.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(V)>=0?V:x.UNKNOWN}(g.status);a(new F(w,g.message))}else a(new F(x.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new F(x.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{O(qe,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);O(qe,`RPC '${e}' ${i} sending request:`,s),l.send(t,"POST",h,r,15)})}Bo(e,t,r){const s=za(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Bm(),a=Um(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const f=i.join("");O(qe,`Creating RPC '${e}' stream ${s}: ${f}`,l);const m=o.createWebChannel(f,l);let _=!1,g=!1;const w=new mb({Io:A=>{g?O(qe,`Not sending because RPC '${e}' stream ${s} is closed:`,A):(_||(O(qe,`Opening RPC '${e}' stream ${s} transport.`),m.open(),_=!0),O(qe,`RPC '${e}' stream ${s} sending:`,A),m.send(A))},To:()=>m.close()}),R=(A,V,N)=>{A.listen(V,L=>{try{N(L)}catch(M){setTimeout(()=>{throw M},0)}})};return R(m,hs.EventType.OPEN,()=>{g||(O(qe,`RPC '${e}' stream ${s} transport opened.`),w.yo())}),R(m,hs.EventType.CLOSE,()=>{g||(g=!0,O(qe,`RPC '${e}' stream ${s} transport closed`),w.So())}),R(m,hs.EventType.ERROR,A=>{g||(g=!0,Cs(qe,`RPC '${e}' stream ${s} transport errored:`,A),w.So(new F(x.UNAVAILABLE,"The operation could not be completed")))}),R(m,hs.EventType.MESSAGE,A=>{var V;if(!g){const N=A.data[0];G(!!N);const L=N,M=L.error||((V=L[0])===null||V===void 0?void 0:V.error);if(M){O(qe,`RPC '${e}' stream ${s} received error:`,M);const q=M.status;let $=function(I){const T=Re[I];if(T!==void 0)return Pp(T)}(q),b=M.message;$===void 0&&($=x.INTERNAL,b="Unknown error status: "+q+" with message "+M.message),g=!0,w.So(new F($,b)),m.close()}else O(qe,`RPC '${e}' stream ${s} received:`,N),w.bo(N)}}),R(a,Fm.STAT_EVENT,A=>{A.stat===uc.PROXY?O(qe,`RPC '${e}' stream ${s} detected buffering proxy`):A.stat===uc.NOPROXY&&O(qe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{w.wo()},0),w}}/**
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
 */function lg(){return typeof window<"u"?window:null}function eo(){return typeof document<"u"?document:null}/**
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
 */function Yo(n){return new ET(n,!0)}/**
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
 */class ug{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&O("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class hg{constructor(e,t,r,s,i,o,a,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new ug(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===x.RESOURCE_EXHAUSTED?(Ee(t.toString()),Ee("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new F(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class gb extends hg{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=AT(this.serializer,e),r=function(i){if(!("targetChange"in i))return W.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?W.min():o.readTime?Je(o.readTime):W.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Ec(this.serializer),t.addTarget=function(i,o){let a;const l=o.target;if(a=yo(l)?{documents:Mp(i,l)}:{query:Lp(i,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Dp(i,o.resumeToken);const h=Ic(i,o.expectedCount);h!==null&&(a.expectedCount=h)}else if(o.snapshotVersion.compareTo(W.min())>0){a.readTime=Ar(i,o.snapshotVersion.toTimestamp());const h=Ic(i,o.expectedCount);h!==null&&(a.expectedCount=h)}return a}(this.serializer,e);const r=RT(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Ec(this.serializer),t.removeTarget=e,this.a_(t)}}class _b extends hg{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return G(!!e.streamToken),this.lastStreamToken=e.streamToken,G(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){G(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=ST(e.writeResults,e.commitTime),r=Je(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=Ec(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>wo(this.serializer,r))};this.a_(t)}}/**
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
 */class yb extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new F(x.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,wc(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(x.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,wc(t,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new F(x.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class vb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ee(t),this.D_=!1):O("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class Ib{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Yn(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=K(l);h.L_.add(4),await ri(h),h.q_.set("Unknown"),h.L_.delete(4),await Xo(h)}(this))})}),this.q_=new vb(r,s)}}async function Xo(n){if(Yn(n))for(const e of n.B_)await e(!0)}async function ri(n){for(const e of n.B_)await e(!1)}function Zo(n,e){const t=K(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Sl(t)?Al(t):Br(t).r_()&&bl(t,e))}function Rr(n,e){const t=K(n),r=Br(t);t.N_.delete(e),r.r_()&&dg(t,e),t.N_.size===0&&(r.r_()?r.o_():Yn(t)&&t.q_.set("Unknown"))}function bl(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Br(n).A_(e)}function dg(n,e){n.Q_.xe(e),Br(n).R_(e)}function Al(n){n.Q_=new yT({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Br(n).start(),n.q_.v_()}function Sl(n){return Yn(n)&&!Br(n).n_()&&n.N_.size>0}function Yn(n){return K(n).L_.size===0}function fg(n){n.Q_=void 0}async function wb(n){n.q_.set("Online")}async function Eb(n){n.N_.forEach((e,t)=>{bl(n,e)})}async function Tb(n,e){fg(n),Sl(n)?(n.q_.M_(e),Al(n)):n.q_.set("Unknown")}async function bb(n,e,t){if(n.q_.set("Online"),e instanceof kp&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.N_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.N_.delete(a),s.Q_.removeTarget(a))}(n,e)}catch(r){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Po(n,r)}else if(e instanceof Zi?n.Q_.Ke(e):e instanceof Cp?n.Q_.He(e):n.Q_.We(e),!t.isEqual(W.min()))try{const r=await sg(n.localStore);t.compareTo(r)>=0&&await function(i,o){const a=i.Q_.rt(o);return a.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,h)=>{const f=i.N_.get(l);if(!f)return;i.N_.set(l,f.withResumeToken(Se.EMPTY_BYTE_STRING,f.snapshotVersion)),dg(i,l);const m=new kt(f.target,l,h,f.sequenceNumber);bl(i,m)}),i.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(r){O("RemoteStore","Failed to raise snapshot:",r),await Po(n,r)}}async function Po(n,e,t){if(!_n(e))throw e;n.L_.add(1),await ri(n),n.q_.set("Offline"),t||(t=()=>sg(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Xo(n)})}function mg(n,e){return e().catch(t=>Po(n,t,e))}async function Ur(n){const e=K(n),t=mn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Ab(e);)try{const s=await hb(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,Sb(e,s)}catch(s){await Po(e,s)}pg(e)&&gg(e)}function Ab(n){return Yn(n)&&n.O_.length<10}function Sb(n,e){n.O_.push(e);const t=mn(n);t.r_()&&t.V_&&t.m_(e.mutations)}function pg(n){return Yn(n)&&!mn(n).n_()&&n.O_.length>0}function gg(n){mn(n).start()}async function Rb(n){mn(n).p_()}async function Pb(n){const e=mn(n);for(const t of n.O_)e.m_(t.mutations)}async function Cb(n,e,t){const r=n.O_.shift(),s=ml.from(r,e,t);await mg(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Ur(n)}async function kb(n,e){e&&mn(n).V_&&await async function(r,s){if(function(o){return pT(o)&&o!==x.ABORTED}(s.code)){const i=r.O_.shift();mn(r).s_(),await mg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ur(r)}}(n,e),pg(n)&&gg(n)}async function Jd(n,e){const t=K(n);t.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const r=Yn(t);t.L_.add(3),await ri(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Xo(t)}async function Cc(n,e){const t=K(n);e?(t.L_.delete(2),await Xo(t)):e||(t.L_.add(2),await ri(t),t.q_.set("Unknown"))}function Br(n){return n.K_||(n.K_=function(t,r,s){const i=K(t);return i.w_(),new gb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:wb.bind(null,n),Ro:Eb.bind(null,n),mo:Tb.bind(null,n),d_:bb.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Sl(n)?Al(n):n.q_.set("Unknown")):(await n.K_.stop(),fg(n))})),n.K_}function mn(n){return n.U_||(n.U_=function(t,r,s){const i=K(t);return i.w_(),new _b(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Rb.bind(null,n),mo:kb.bind(null,n),f_:Pb.bind(null,n),g_:Cb.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Ur(n)):(await n.U_.stop(),n.O_.length>0&&(O("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class Rl{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new vt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,a=new Rl(e,t,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Pl(n,e){if(Ee("AsyncQueue",`${e}: ${n}`),_n(n))return new F(x.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class _r{constructor(e){this.comparator=e?(t,r)=>e(t,r)||j.comparator(t.key,r.key):(t,r)=>j.comparator(t.key,r.key),this.keyedMap=ds(),this.sortedSet=new de(this.comparator)}static emptySet(e){return new _r(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof _r)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new _r;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Yd{constructor(){this.W_=new de(j.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):z():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Pr{constructor(e,t,r,s,i,o,a,l,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new Pr(e,t,_r.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Db{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Vb{constructor(){this.queries=Xd(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=K(t),i=s.queries;s.queries=Xd(),i.forEach((o,a)=>{for(const l of a.j_)l.onError(r)})})(this,new F(x.ABORTED,"Firestore shutting down"))}}function Xd(){return new yn(n=>fp(n),qo)}async function Cl(n,e){const t=K(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new Db,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const a=Pl(o,`Initialization of query '${lr(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&Dl(t)}async function kl(n,e){const t=K(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function xb(n,e){const t=K(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const a of o.j_)a.X_(s)&&(r=!0);o.z_=s}}r&&Dl(t)}function Nb(n,e,t){const r=K(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function Dl(n){n.Y_.forEach(e=>{e.next()})}var kc,Zd;(Zd=kc||(kc={})).ea="default",Zd.Cache="cache";class Vl{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Pr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Pr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==kc.Cache}}/**
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
 */class _g{constructor(e){this.key=e}}class yg{constructor(e){this.key=e}}class Ob{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=X(),this.mutatedKeys=X(),this.Aa=pp(e),this.Ra=new _r(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new Yd,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const _=s.get(f),g=ei(this.query,m)?m:null,w=!!_&&this.mutatedKeys.has(_.key),R=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let A=!1;_&&g?_.data.isEqual(g.data)?w!==R&&(r.track({type:3,doc:g}),A=!0):this.ga(_,g)||(r.track({type:2,doc:g}),A=!0,(l&&this.Aa(g,l)>0||h&&this.Aa(g,h)<0)&&(a=!0)):!_&&g?(r.track({type:0,doc:g}),A=!0):_&&!g&&(r.track({type:1,doc:_}),A=!0,(l||h)&&(a=!0)),A&&(g?(o=o.add(g),i=R?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:a,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,m)=>function(g,w){const R=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return R(g)-R(w)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),s=s!=null&&s;const a=t&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,h=l!==this.Ea;return this.Ea=l,o.length!==0||h?{snapshot:new Pr(this.query,e.Ra,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Yd,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=X(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new yg(r))}),this.da.forEach(r=>{e.has(r)||t.push(new _g(r))}),t}ba(e){this.Ta=e.Ts,this.da=X();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Pr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Mb{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Lb{constructor(e){this.key=e,this.va=!1}}class Fb{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new yn(a=>fp(a),qo),this.Ma=new Map,this.xa=new Set,this.Oa=new de(j.comparator),this.Na=new Map,this.La=new Il,this.Ba={},this.ka=new Map,this.qa=Hn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Ub(n,e,t=!0){const r=ea(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await vg(r,e,t,!0),s}async function Bb(n,e){const t=ea(n);await vg(t,e,!0,!1)}async function vg(n,e,t,r){const s=await Ao(n.localStore,it(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let a;return r&&(a=await xl(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&Zo(n.remoteStore,s),a}async function xl(n,e,t,r,s){n.Ka=(m,_,g)=>async function(R,A,V,N){let L=A.view.ma(V);L.ns&&(L=await Rc(R.localStore,A.query,!1).then(({documents:b})=>A.view.ma(b,L)));const M=N&&N.targetChanges.get(A.targetId),q=N&&N.targetMismatches.get(A.targetId)!=null,$=A.view.applyChanges(L,R.isPrimaryClient,M,q);return Dc(R,A.targetId,$.wa),$.snapshot}(n,m,_,g);const i=await Rc(n.localStore,e,!0),o=new Ob(e,i.Ts),a=o.ma(i.documents),l=ni.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=o.applyChanges(a,n.isPrimaryClient,l);Dc(n,t,h.wa);const f=new Mb(e,t,o);return n.Fa.set(e,f),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),h.snapshot}async function jb(n,e,t){const r=K(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!qo(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Sr(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Rr(r.remoteStore,s.targetId),Cr(r,s.targetId)}).catch(gn)):(Cr(r,s.targetId),await Sr(r.localStore,s.targetId,!0))}async function $b(n,e){const t=K(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Rr(t.remoteStore,r.targetId))}async function qb(n,e,t){const r=Ll(n);try{const s=await function(o,a){const l=K(o),h=_e.now(),f=a.reduce((g,w)=>g.add(w.key),X());let m,_;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let w=st(),R=X();return l.cs.getEntries(g,f).next(A=>{w=A,w.forEach((V,N)=>{N.isValidDocument()||(R=R.add(V))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,w)).next(A=>{m=A;const V=[];for(const N of a){const L=fT(N,m.get(N.key).overlayedDocument);L!=null&&V.push(new zt(N.key,L,rp(L.value.mapValue),He.exists(!0)))}return l.mutationQueue.addMutationBatch(g,h,V,a)}).next(A=>{_=A;const V=A.applyToLocalDocumentSet(m,R);return l.documentOverlayCache.saveOverlays(g,A.batchId,V)})}).then(()=>({batchId:_.batchId,changes:_p(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let h=o.Ba[o.currentUser.toKey()];h||(h=new de(Y)),h=h.insert(a,l),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,t),await vn(r,s.changes),await Ur(r.remoteStore)}catch(s){const i=Pl(s,"Failed to persist write");t.reject(i)}}async function Ig(n,e){const t=K(n);try{const r=await lb(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Na.get(i);o&&(G(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?G(o.va):s.removedDocuments.size>0&&(G(o.va),o.va=!1))}),await vn(t,r,e)}catch(r){await gn(r)}}function ef(n,e,t){const r=K(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,o)=>{const a=o.view.Z_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=K(o);l.onlineState=a;let h=!1;l.queries.forEach((f,m)=>{for(const _ of m.j_)_.Z_(a)&&(h=!0)}),h&&Dl(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function zb(n,e,t){const r=K(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new de(j.comparator);o=o.insert(i,Ie.newNoDocument(i,W.min()));const a=X().add(i),l=new ti(W.min(),new Map,new de(Y),o,a);await Ig(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),Ml(r)}else await Sr(r.localStore,e,!1).then(()=>Cr(r,e,t)).catch(gn)}async function Kb(n,e){const t=K(n),r=e.batch.batchId;try{const s=await cb(t.localStore,e);Ol(t,r,null),Nl(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await vn(t,s)}catch(s){await gn(s)}}async function Gb(n,e,t){const r=K(n);try{const s=await function(o,a){const l=K(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,a).next(m=>(G(m!==null),f=m.keys(),l.mutationQueue.removeMutationBatch(h,m))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(r.localStore,e);Ol(r,e,t),Nl(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await vn(r,s)}catch(s){await gn(s)}}function Nl(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Ol(n,e,t){const r=K(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Cr(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||wg(n,r)})}function wg(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(Rr(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Ml(n))}function Dc(n,e,t){for(const r of t)r instanceof _g?(n.La.addReference(r.key,e),Wb(n,r)):r instanceof yg?(O("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||wg(n,r.key)):z()}function Wb(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(O("SyncEngine","New document in limbo: "+t),n.xa.add(r),Ml(n))}function Ml(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new j(oe.fromString(e)),r=n.qa.next();n.Na.set(r,new Lb(t)),n.Oa=n.Oa.insert(t,r),Zo(n.remoteStore,new kt(it(Zs(t.path)),r,"TargetPurposeLimboResolution",Ze.oe))}}async function vn(n,e,t){const r=K(n),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,l)=>{o.push(r.Ka(l,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,m?"current":"not-current")}if(h){s.push(h);const m=El.Wi(l.targetId,h);i.push(m)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(l,h){const f=K(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>k.forEach(h,_=>k.forEach(_.$i,g=>f.persistence.referenceDelegate.addReference(m,_.targetId,g)).next(()=>k.forEach(_.Ui,g=>f.persistence.referenceDelegate.removeReference(m,_.targetId,g)))))}catch(m){if(!_n(m))throw m;O("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const _=m.targetId;if(!m.fromCache){const g=f.os.get(_),w=g.snapshotVersion,R=g.withLastLimboFreeSnapshotVersion(w);f.os=f.os.insert(_,R)}}}(r.localStore,i))}async function Hb(n,e){const t=K(n);if(!t.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const r=await rg(t.localStore,e);t.currentUser=e,function(i,o){i.ka.forEach(a=>{a.forEach(l=>{l.reject(new F(x.CANCELLED,o))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await vn(t,r.hs)}}function Qb(n,e){const t=K(n),r=t.Na.get(e);if(r&&r.va)return X().add(r.key);{let s=X();const i=t.Ma.get(e);if(!i)return s;for(const o of i){const a=t.Fa.get(o);s=s.unionWith(a.view.Va)}return s}}async function Jb(n,e){const t=K(n),r=await Rc(t.localStore,e.query,!0),s=e.view.ba(r);return t.isPrimaryClient&&Dc(t,e.targetId,s.wa),s}async function Yb(n,e){const t=K(n);return og(t.localStore,e).then(r=>vn(t,r))}async function Xb(n,e,t,r){const s=K(n),i=await function(a,l){const h=K(a),f=K(h.mutationQueue);return h.persistence.runTransaction("Lookup mutation documents","readonly",m=>f.Mn(m,l).next(_=>_?h.localDocuments.getDocuments(m,_):k.resolve(null)))}(s.localStore,e);i!==null?(t==="pending"?await Ur(s.remoteStore):t==="acknowledged"||t==="rejected"?(Ol(s,e,r||null),Nl(s,e),function(a,l){K(K(a).mutationQueue).On(l)}(s.localStore,e)):z(),await vn(s,i)):O("SyncEngine","Cannot apply mutation batch with id: "+e)}async function Zb(n,e){const t=K(n);if(ea(t),Ll(t),e===!0&&t.Qa!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),s=await tf(t,r.toArray());t.Qa=!0,await Cc(t.remoteStore,!0);for(const i of s)Zo(t.remoteStore,i)}else if(e===!1&&t.Qa!==!1){const r=[];let s=Promise.resolve();t.Ma.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):s=s.then(()=>(Cr(t,o),Sr(t.localStore,o,!0))),Rr(t.remoteStore,o)}),await s,await tf(t,r),function(o){const a=K(o);a.Na.forEach((l,h)=>{Rr(a.remoteStore,h)}),a.La.pr(),a.Na=new Map,a.Oa=new de(j.comparator)}(t),t.Qa=!1,await Cc(t.remoteStore,!1)}}async function tf(n,e,t){const r=K(n),s=[],i=[];for(const o of e){let a;const l=r.Ma.get(o);if(l&&l.length!==0){a=await Ao(r.localStore,it(l[0]));for(const h of l){const f=r.Fa.get(h),m=await Jb(r,f);m.snapshot&&i.push(m.snapshot)}}else{const h=await ig(r.localStore,o);a=await Ao(r.localStore,h),await xl(r,Eg(h),o,!1,a.resumeToken)}s.push(a)}return r.Ca.d_(i),s}function Eg(n){return hp(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function eA(n){return function(t){return K(K(t).persistence).Qi()}(K(n).localStore)}async function tA(n,e,t,r){const s=K(n);if(s.Qa)return void O("SyncEngine","Ignoring unexpected query state notification.");const i=s.Ma.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await og(s.localStore,mp(i[0])),a=ti.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Se.EMPTY_BYTE_STRING);await vn(s,o,a);break}case"rejected":await Sr(s.localStore,e,!0),Cr(s,e,r);break;default:z()}}async function nA(n,e,t){const r=ea(n);if(r.Qa){for(const s of e){if(r.Ma.has(s)&&r.sharedClientState.isActiveQueryTarget(s)){O("SyncEngine","Adding an already active target "+s);continue}const i=await ig(r.localStore,s),o=await Ao(r.localStore,i);await xl(r,Eg(i),o.targetId,!1,o.resumeToken),Zo(r.remoteStore,o)}for(const s of t)r.Ma.has(s)&&await Sr(r.localStore,s,!1).then(()=>{Rr(r.remoteStore,s),Cr(r,s)}).catch(gn)}}function ea(n){const e=K(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ig.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Qb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zb.bind(null,e),e.Ca.d_=xb.bind(null,e.eventManager),e.Ca.$a=Nb.bind(null,e.eventManager),e}function Ll(n){const e=K(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Kb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Gb.bind(null,e),e}class Fs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Yo(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return ng(this.persistence,new tg,e.initialUser,this.serializer)}Ga(e){return new Zp(Jo.Zr,this.serializer)}Wa(e){return new cg}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Fs.provider={build:()=>new Fs};class Tg extends Fs{constructor(e,t,r){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await Ll(this.Ja.syncEngine),await Ur(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return ng(this.persistence,new tg,e.initialUser,this.serializer)}ja(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new zT(r,e.asyncQueue,t)}Ha(e,t){const r=new bE(t,this.persistence);return new TE(e.asyncQueue,r)}Ga(e){const t=eg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Xe.withCacheSize(this.cacheSizeBytes):Xe.DEFAULT;return new wl(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,lg(),eo(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new cg}}class rA extends Tg{constructor(e,t){super(e,t,!1),this.Ja=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ja.syncEngine;this.sharedClientState instanceof qa&&(this.sharedClientState.syncEngine={no:Xb.bind(null,t),ro:tA.bind(null,t),io:nA.bind(null,t),Qi:eA.bind(null,t),eo:Yb.bind(null,t)},await this.sharedClientState.start()),await this.persistence.yi(async r=>{await Zb(this.Ja.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Wa(e){const t=lg();if(!qa.D(t))throw new F(x.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=eg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new qa(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Us{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ef(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Hb.bind(null,this.syncEngine),await Cc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Vb}()}createDatastore(e){const t=Yo(e.databaseInfo.databaseId),r=function(i){return new pb(i)}(e.databaseInfo);return function(i,o,a,l){return new yb(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,a){return new Ib(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>ef(this.syncEngine,t,0),function(){return Qd.D()?new Qd:new db}())}createSyncEngine(e,t){return function(s,i,o,a,l,h,f){const m=new Fb(s,i,o,a,l,h);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=K(s);O("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await ri(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Us.provider={build:()=>new Us};/**
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
 */class Fl{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Ee("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class sA{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=ze.UNAUTHENTICATED,this.clientId=jm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{O("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(O("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Pl(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ka(n,e){n.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await rg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function nf(n,e){n.asyncQueue.verifyOperationInProgress();const t=await iA(n);O("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Jd(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Jd(e.remoteStore,s)),n._onlineComponents=e}async function iA(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ka(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===x.FAILED_PRECONDITION||s.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Cs("Error using user provided cache. Falling back to memory cache: "+t),await Ka(n,new Fs)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await Ka(n,new Fs);return n._offlineComponents}async function bg(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await nf(n,n._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await nf(n,new Us))),n._onlineComponents}function oA(n){return bg(n).then(e=>e.syncEngine)}async function Co(n){const e=await bg(n),t=e.eventManager;return t.onListen=Ub.bind(null,e.syncEngine),t.onUnlisten=jb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Bb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=$b.bind(null,e.syncEngine),t}function aA(n,e,t={}){const r=new vt;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,h){const f=new Fl({next:_=>{f.Za(),o.enqueueAndForget(()=>kl(i,m));const g=_.docs.has(a);!g&&_.fromCache?h.reject(new F(x.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&_.fromCache&&l&&l.source==="server"?h.reject(new F(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(_)},error:_=>h.reject(_)}),m=new Vl(Zs(a.path),f,{includeMetadataChanges:!0,_a:!0});return Cl(i,m)}(await Co(n),n.asyncQueue,e,t,r)),r.promise}function cA(n,e,t={}){const r=new vt;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,h){const f=new Fl({next:_=>{f.Za(),o.enqueueAndForget(()=>kl(i,m)),_.fromCache&&l.source==="server"?h.reject(new F(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),m=new Vl(a,f,{includeMetadataChanges:!0,_a:!0});return Cl(i,m)}(await Co(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Ag(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const rf=new Map;/**
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
 */function Sg(n,e,t){if(!t)throw new F(x.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function lA(n,e,t,r){if(e===!0&&r===!0)throw new F(x.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function sf(n){if(!j.isDocumentKey(n))throw new F(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function of(n){if(j.isDocumentKey(n))throw new F(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ta(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":z()}function un(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new F(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ta(n);throw new F(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class af{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new F(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}lA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ag((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new F(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new F(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new F(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ul{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new af({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new F(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new af(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new fE;switch(r.type){case"firstParty":return new gE(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=rf.get(t);r&&(O("ComponentProvider","Removing Datastore"),rf.delete(t),r.terminate())}(this),Promise.resolve()}}/**
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
 */class Xn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Xn(this.firestore,e,this._query)}}class tt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new tt(this.firestore,e,this._key)}}class hn extends Xn{constructor(e,t,r){super(e,t,Zs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new tt(this.firestore,null,new j(e))}withConverter(e){return new hn(this.firestore,e,this._path)}}function cf(n,e,...t){if(n=Ae(n),Sg("collection","path",e),n instanceof Ul){const r=oe.fromString(e,...t);return of(r),new hn(n,null,r)}{if(!(n instanceof tt||n instanceof hn))throw new F(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(oe.fromString(e,...t));return of(r),new hn(n.firestore,null,r)}}function Ga(n,e,...t){if(n=Ae(n),arguments.length===1&&(e=jm.newId()),Sg("doc","path",e),n instanceof Ul){const r=oe.fromString(e,...t);return sf(r),new tt(n,null,new j(r))}{if(!(n instanceof tt||n instanceof hn))throw new F(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(oe.fromString(e,...t));return sf(r),new tt(n.firestore,n instanceof hn?n.converter:null,new j(r))}}/**
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
 */class lf{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new ug(this,"async_queue_retry"),this.Vu=()=>{const r=eo();r&&O("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=eo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=eo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new vt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!_n(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Ee("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=Rl.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&z()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function uf(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class kr extends Ul{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new lf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new lf(e),this._firestoreClient=void 0,await e}}}function hf(n,e,t){t||(t="(default)");const r=Gc(n,"firestore");if(r.isInitialized(t)){const s=r.getImmediate({identifier:t}),i=r.getOptions(t);if(Mn(i,e))return s;throw new F(x.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new F(x.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:t})}function si(n){if(n._terminated)throw new F(x.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||uA(n),n._firestoreClient}function uA(n){var e,t,r;const s=n._freezeSettings(),i=function(a,l,h,f){return new KE(a,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Ag(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new sA(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(n._componentsProvider))}/**
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
 */class Dr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Dr(Se.fromBase64String(e))}catch(t){throw new F(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Dr(Se.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class na{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new F(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class jr{constructor(e){this._methodName=e}}/**
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
 */class Bl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new F(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new F(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Y(this._lat,e._lat)||Y(this._long,e._long)}}/**
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
 */class jl{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const hA=/^__.*__$/;class dA{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new zt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Fr(e,this.data,t,this.fieldTransforms)}}class Rg{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new zt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Pg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class ra{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new ra(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return ko(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Pg(this.Cu)&&hA.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class fA{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Yo(e)}Qu(e,t,r,s=!1){return new ra({Cu:e,methodName:t,qu:r,path:ge.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Cg(n){const e=n._freezeSettings(),t=Yo(n._databaseId);return new fA(n._databaseId,!!e.ignoreUndefinedProperties,t)}function mA(n,e,t,r,s,i={}){const o=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);Kl("Data must be an object, but it was:",o,r);const a=Dg(r,o);let l,h;if(i.merge)l=new et(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const _=Vc(e,m,t);if(!o.contains(_))throw new F(x.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);xg(f,_)||f.push(_)}l=new et(f),h=o.fieldTransforms.filter(m=>l.covers(m.field))}else l=null,h=o.fieldTransforms;return new dA(new Ke(a),l,h)}class ii extends jr{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ii}}function kg(n,e,t){return new ra({Cu:3,qu:e.settings.qu,methodName:n._methodName,xu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class $l extends jr{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=kg(this,e,!0),r=this.Ku.map(i=>Zn(i,t)),s=new zn(r);return new Ko(e.path,s)}isEqual(e){return e instanceof $l&&Mn(this.Ku,e.Ku)}}class ql extends jr{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=kg(this,e,!0),r=this.Ku.map(i=>Zn(i,t)),s=new Kn(r);return new Ko(e.path,s)}isEqual(e){return e instanceof ql&&Mn(this.Ku,e.Ku)}}class zl extends jr{constructor(e,t){super(e),this.$u=t}_toFieldTransform(e){const t=new br(e.serializer,Ip(e.serializer,this.$u));return new Ko(e.path,t)}isEqual(e){return e instanceof zl&&this.$u===e.$u}}function pA(n,e,t,r){const s=n.Qu(1,e,t);Kl("Data must be an object, but it was:",s,r);const i=[],o=Ke.empty();Jn(r,(l,h)=>{const f=Gl(e,l,t);h=Ae(h);const m=s.Nu(f);if(h instanceof ii)i.push(f);else{const _=Zn(h,m);_!=null&&(i.push(f),o.set(f,_))}});const a=new et(i);return new Rg(o,a,s.fieldTransforms)}function gA(n,e,t,r,s,i){const o=n.Qu(1,e,t),a=[Vc(e,r,t)],l=[s];if(i.length%2!=0)throw new F(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<i.length;_+=2)a.push(Vc(e,i[_])),l.push(i[_+1]);const h=[],f=Ke.empty();for(let _=a.length-1;_>=0;--_)if(!xg(h,a[_])){const g=a[_];let w=l[_];w=Ae(w);const R=o.Nu(g);if(w instanceof ii)h.push(g);else{const A=Zn(w,R);A!=null&&(h.push(g),f.set(g,A))}}const m=new et(h);return new Rg(f,m,o.fieldTransforms)}function _A(n,e,t,r=!1){return Zn(t,n.Qu(r?4:3,e))}function Zn(n,e){if(Vg(n=Ae(n)))return Kl("Unsupported field value:",e,n),Dg(n,e);if(n instanceof jr)return function(r,s){if(!Pg(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Zn(a,s.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Ae(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ip(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=_e.fromDate(r);return{timestampValue:Ar(s.serializer,i)}}if(r instanceof _e){const i=new _e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ar(s.serializer,i)}}if(r instanceof Bl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Dr)return{bytesValue:Dp(s.serializer,r._byteString)};if(r instanceof tt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:_l(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof jl)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.Bu("VectorValues must only contain numeric values.");return dl(a.serializer,l)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${ta(r)}`)}(n,e)}function Dg(n,e){const t={};return Zm(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Jn(n,(r,s)=>{const i=Zn(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Vg(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof _e||n instanceof Bl||n instanceof Dr||n instanceof tt||n instanceof jr||n instanceof jl)}function Kl(n,e,t){if(!Vg(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=ta(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function Vc(n,e,t){if((e=Ae(e))instanceof na)return e._internalPath;if(typeof e=="string")return Gl(n,e);throw ko("Field path arguments must be of type string or ",n,!1,void 0,t)}const yA=new RegExp("[~\\*/\\[\\]]");function Gl(n,e,t){if(e.search(yA)>=0)throw ko(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new na(...e.split("."))._internalPath}catch{throw ko(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ko(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new F(x.INVALID_ARGUMENT,a+n+l)}function xg(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Ng{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new vA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Wl("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class vA extends Ng{data(){return super.data()}}function Wl(n,e){return typeof e=="string"?Gl(n,e):e instanceof na?e._internalPath:e._delegate._internalPath}/**
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
 */function Og(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new F(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hl{}class IA extends Hl{}function df(n,e,...t){let r=[];e instanceof Hl&&r.push(e),r=r.concat(t),function(i){const o=i.filter(l=>l instanceof Ql).length,a=i.filter(l=>l instanceof sa).length;if(o>1||o>0&&a>0)throw new F(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class sa extends IA{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new sa(e,t,r)}_apply(e){const t=this._parse(e);return Mg(e._query,t),new Xn(e.firestore,e.converter,yc(e._query,t))}_parse(e){const t=Cg(e.firestore);return function(i,o,a,l,h,f,m){let _;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new F(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){mf(m,f);const g=[];for(const w of m)g.push(ff(l,i,w));_={arrayValue:{values:g}}}else _=ff(l,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||mf(m,f),_=_A(a,o,m,f==="in"||f==="not-in");return te.create(h,f,_)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function wA(n,e,t){const r=e,s=Wl("where",n);return sa._create(s,r,t)}class Ql extends Hl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ql(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:ae.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)Mg(o,l),o=yc(o,l)}(e._query,t),new Xn(e.firestore,e.converter,yc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function ff(n,e,t){if(typeof(t=Ae(t))=="string"){if(t==="")throw new F(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!dp(e)&&t.indexOf("/")!==-1)throw new F(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(oe.fromString(t));if(!j.isDocumentKey(r))throw new F(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Os(n,new j(r))}if(t instanceof tt)return Os(n,t._key);throw new F(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ta(t)}.`)}function mf(n,e){if(!Array.isArray(n)||n.length===0)throw new F(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Mg(n,e){const t=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new F(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new F(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class EA{convertValue(e,t="none"){switch($n(e)){case 0:return null;case 1:return e.booleanValue;case 2:return me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(dn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw z()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Jn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>me(o.doubleValue));return new jl(i)}convertGeoPoint(e){return new Bl(me(e.latitude),me(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ll(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(xs(e));default:return null}}convertTimestamp(e){const t=Ot(e);return new _e(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=oe.fromString(e);G(jp(r));const s=new jn(r.get(1),r.get(3)),i=new j(r.popFirst(5));return s.isEqual(t)||Ee(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function TA(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
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
 */class ps{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Lg extends Ng{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new to(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Wl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class to extends Lg{data(e={}){return super.data(e)}}class Fg{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new ps(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new to(this._firestore,this._userDataWriter,r.key,r,new ps(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new F(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new to(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ps(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new to(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ps(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return a.type!==0&&(h=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),f=o.indexOf(a.doc.key)),{type:bA(a.type),doc:l,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function bA(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}/**
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
 */function AA(n){n=un(n,tt);const e=un(n.firestore,kr);return aA(si(e),n._key).then(t=>Ug(e,n,t))}class Jl extends EA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Dr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new tt(this.firestore,null,t)}}function SA(n){n=un(n,Xn);const e=un(n.firestore,kr),t=si(e),r=new Jl(e);return Og(n._query),cA(t,n._query).then(s=>new Fg(e,r,n,s))}function pf(n,...e){var t,r,s;n=Ae(n);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||uf(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(uf(e[o])){const m=e[o];e[o]=(t=m.next)===null||t===void 0?void 0:t.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(s=m.complete)===null||s===void 0?void 0:s.bind(m)}let l,h,f;if(n instanceof tt)h=un(n.firestore,kr),f=Zs(n._key.path),l={next:m=>{e[o]&&e[o](Ug(h,n,m))},error:e[o+1],complete:e[o+2]};else{const m=un(n,Xn);h=un(m.firestore,kr),f=m._query;const _=new Jl(h);l={next:g=>{e[o]&&e[o](new Fg(h,_,m,g))},error:e[o+1],complete:e[o+2]},Og(n._query)}return function(_,g,w,R){const A=new Fl(R),V=new Vl(g,A,w);return _.asyncQueue.enqueueAndForget(async()=>Cl(await Co(_),V)),()=>{A.Za(),_.asyncQueue.enqueueAndForget(async()=>kl(await Co(_),V))}}(si(h),f,a,l)}function RA(n,e){return function(r,s){const i=new vt;return r.asyncQueue.enqueueAndForget(async()=>qb(await oA(r),s,i)),i.promise}(si(n),e)}function Ug(n,e,t){const r=t.docs.get(e._key),s=new Jl(n);return new Lg(n,s,e._key,r,new ps(t.hasPendingWrites,t.fromCache),e.converter)}class PA{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=VA(),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function CA(n){return new PA(n)}class kA{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Us.provider,this._offlineComponentProvider={build:t=>new Tg(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class DA{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Us.provider,this._offlineComponentProvider={build:t=>new rA(t,e==null?void 0:e.cacheSizeBytes)}}}function VA(n){return new kA(void 0)}function xA(){return new DA}/**
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
 */class NA{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Cg(e)}set(e,t,r){this._verifyNotCommitted();const s=Wa(e,this._firestore),i=TA(s.converter,t,r),o=mA(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,He.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=Wa(e,this._firestore);let o;return o=typeof(t=Ae(t))=="string"||t instanceof na?gA(this._dataReader,"WriteBatch.update",i._key,t,r,s):pA(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,He.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Wa(e,this._firestore);return this._mutations=this._mutations.concat(new Wo(t._key,He.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new F(x.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Wa(n,e){if((n=Ae(n)).firestore!==e)throw new F(x.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */function OA(){return new ii("deleteField")}function MA(...n){return new $l("arrayUnion",n)}function LA(...n){return new ql("arrayRemove",n)}function FA(n){return new zl("increment",n)}/**
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
 */function UA(n){return si(n=un(n,kr)),new NA(n,e=>RA(n,e))}(function(e,t=!0){(function(s){Lr=s})(Or),vr(new Ln("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new kr(new mE(r.getProvider("auth-internal")),new yE(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new F(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new jn(h.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),cn(nd,"4.7.3",e),cn(nd,"4.7.3","esm2017")})();const BA={apiKey:"AIzaSyD7u7pobCPzIXaZZP48wKs8KDtC8awNz6U",authDomain:"quadro-de-estrelas-8c81a.firebaseapp.com",projectId:"quadro-de-estrelas-8c81a",storageBucket:"quadro-de-estrelas-8c81a.firebasestorage.app",messagingSenderId:"974440745469",appId:"1:974440745469:web:96d2299325d9a26b93b194"},jA=["luanasabatovicz@gmail.com"],gf="Mundo de Estrelas",$A="1.0.0",Yl="./content/",Bg=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,8);function qA(){const n=Xf(BA),e=uE(n);e.languageCode="pt";let t;try{t=hf(n,{localCache:CA({tabManager:xA()})})}catch{t=hf(n,{})}const r=o=>{var a,l;return o?{uid:o.uid,email:(o.email||"").toLowerCase(),name:o.displayName||"",verified:!!o.emailVerified,provider:((l=(a=o.providerData)==null?void 0:a[0])==null?void 0:l.providerId)||"password"}:null},s=o=>({id:o.id,exists:o.exists(),data:o.exists()?o.data():{}}),i=o=>o.map(([a,l,h])=>wA(a,l,h));return{demo:!1,onAuth:o=>XI(e,a=>o(r(a))),signInGoogle:async()=>{const o=new St;o.setCustomParameters({prompt:"select_account"}),await vw(e,o)},signInEmail:async(o,a)=>{await QI(e,o,a)},signUpEmail:async(o,a)=>{const l=await HI(e,o,a);await Kh(l.user)},resendVerification:async()=>{e.currentUser&&await Kh(e.currentUser)},resetPassword:async o=>{await WI(e,o)},reloadUser:async()=>{e.currentUser&&(await e.currentUser.reload(),await e.currentUser.getIdToken(!0))},signOut:async()=>{await ZI(e)},get:async o=>s(await AA(Ga(t,o))),watchDoc:(o,a,l)=>pf(Ga(t,o),h=>a(s(h)),h=>l==null?void 0:l(h)),watchCol:(o,a,l,h)=>pf(df(cf(t,o),...i(a)),f=>l(f.docs.map(s)),f=>h==null?void 0:h(f)),queryOnce:async(o,a)=>(await SA(df(cf(t,o),...i(a)))).docs.map(s),write:async o=>{for(let a=0;a<o.length;a+=450){const l=UA(t);for(const h of o.slice(a,a+450)){const f=Ga(t,h.path);h.kind==="set"?l.set(f,h.data,{merge:!!h.merge}):h.kind==="update"?l.update(f,h.data):l.delete(f)}await l.commit()}},fv:{inc:o=>FA(o),union:(...o)=>MA(...o),remove:(...o)=>LA(...o),del:()=>OA()},newId:Bg}}const no="__inc__",ro="__union__",so="__remove__",jg="__del__",zA=n=>n&&typeof n=="object"&&!Array.isArray(n)&&(no in n||ro in n||so in n||jg in n);function KA(){const n="mde.demo.v1";let e={};try{e=JSON.parse(localStorage.getItem(n)||"{}")}catch{e={}}const t=()=>{try{localStorage.setItem(n,JSON.stringify(e))}catch{}},r=new Map,s=new Set,i={uid:"demo-user",email:"demo@mundodeestrelas.app",name:"Família Demonstração",verified:!0,provider:"demo"},o=w=>w.split("/").pop(),a=w=>w.split("/").slice(0,-1).join("/"),l=w=>({id:o(w),exists:w in e,data:e[w]?JSON.parse(JSON.stringify(e[w])):{}}),h=(w,R)=>R.every(([A,V,N])=>{const L=GA(w,A);return V==="=="?L===N:V===">="?L>=N:V==="<="?L<=N:Array.isArray(L)&&L.includes(N)}),f=(w,R)=>Object.keys(e).filter(A=>a(A)===w&&h(e[A],R)).map(l),m=w=>{queueMicrotask(()=>{w.forEach(R=>{var A;return(A=r.get(R))==null?void 0:A.forEach(V=>V(l(R)))}),s.forEach(R=>{[...w].some(A=>a(A)===R.path)&&R.cb(f(R.path,R.filters))})})},_=(w,R,A)=>{for(const[V,N]of Object.entries(R)){const L=A?V.split("."):[V];let M=w;for(const $ of L.slice(0,-1))(typeof M[$]!="object"||M[$]===null)&&(M[$]={}),M=M[$];const q=L[L.length-1];if(zA(N)){const $=N;if(no in $)M[q]=(Number(M[q])||0)+$[no];else if(ro in $){const b=Array.isArray(M[q])?M[q]:[];M[q]=[...b,...$[ro].filter(v=>!b.includes(v))]}else so in $?M[q]=(Array.isArray(M[q])?M[q]:[]).filter(b=>!$[so].includes(b)):delete M[q]}else N&&typeof N=="object"&&!Array.isArray(N)&&!A?(M[q]=typeof M[q]=="object"&&M[q]?M[q]:{},_(M[q],N,!1)):M[q]=JSON.parse(JSON.stringify(N))}},g=new Set;return{demo:!0,onAuth:w=>(g.add(w),queueMicrotask(()=>w(i)),()=>g.delete(w)),signInGoogle:async()=>{},signInEmail:async()=>{},signUpEmail:async()=>{},resendVerification:async()=>{},resetPassword:async()=>{},reloadUser:async()=>{},signOut:async()=>{try{localStorage.removeItem(n)}catch{}location.reload()},get:async w=>l(w),watchDoc:(w,R)=>(r.has(w)||r.set(w,new Set),r.get(w).add(R),queueMicrotask(()=>R(l(w))),()=>{var A;return(A=r.get(w))==null?void 0:A.delete(R)}),watchCol:(w,R,A)=>{const V={path:w,filters:R,cb:A};return s.add(V),queueMicrotask(()=>A(f(w,R))),()=>s.delete(V)},queryOnce:async(w,R)=>f(w,R),write:async w=>{const R=new Set;for(const A of w){if(A.kind==="delete")delete e[A.path];else if(A.kind==="set")(!A.merge||!e[A.path])&&(e[A.path]={}),_(e[A.path],A.data,!1);else{if(!e[A.path])throw Object.assign(new Error("not-found"),{code:"not-found"});_(e[A.path],A.data,!0)}R.add(A.path)}t(),m(R)},fv:{inc:w=>({[no]:w}),union:(...w)=>({[ro]:w}),remove:(...w)=>({[so]:w}),del:()=>({[jg]:!0})},newId:Bg}}function GA(n,e){return e.split(".").reduce((t,r)=>t==null?void 0:t[r],n)}const _f=n=>String(n).padStart(2,"0");function Xl(n=new Date){return`${n.getFullYear()}-${_f(n.getMonth()+1)}-${_f(n.getDate())}`}function Qn(n){const[e,t,r]=n.split("-").map(Number);return new Date(e,t-1,r)}function WA(n,e){const t=Qn(n);return t.setDate(t.getDate()+e),Xl(t)}function ia(n,e){return Math.round((Qn(e).getTime()-Qn(n).getTime())/864e5)}let $g=null;function HA(n){$g=n&&/^\d{4}-\d{2}-\d{2}$/.test(n)?n:null}const Zl=()=>$g||Xl(),QA=["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],JA=["domingo","segunda","terça","quarta","quinta","sexta","sábado"];function wt(n,e=!1){const t=Qn(n);return(e?JA[t.getDay()]+", ":"")+`${t.getDate()} de ${QA[t.getMonth()]}`}function qg(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function YA(n){let e=n||1;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Vr(n,e,t){if(!n.length)return;const r=n.length,s=Math.floor(Qn(t).getTime()/864e5),i=Math.floor(s/r),o=(s%r+r)%r,a=YA(qg(e+":"+i)),l=[...Array(r).keys()];for(let h=r-1;h>0;h--){const f=Math.floor(a()*(h+1));[l[h],l[f]]=[l[f],l[h]]}return n[l[o]]}async function eu(n){const e=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(n));return[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")}const zg=()=>[...crypto.getRandomValues(new Uint8Array(8))].map(n=>n.toString(16).padStart(2,"0")).join("");function Bs(n,e=Zl()){if(!n)return 8;const t=Qn(n),r=Qn(e);let s=r.getFullYear()-t.getFullYear();return(r.getMonth()<t.getMonth()||r.getMonth()===t.getMonth()&&r.getDate()<t.getDate())&&s--,Math.max(0,s)}function Kg(n){return n<=4?0:n<=7?1:n<=10?2:n<=13?3:4}function XA(n){return n<=6?"p":n<=11?"m":"g"}function xr(n,e){return n.replace(/\{([^|{}]*)\|([^|{}]*)\}/g,(t,r,s)=>e==="f"?s:r)}function ZA(n){return n.trim().split(/\s+/).slice(0,2).map(e=>{var t;return((t=e[0])==null?void 0:t.toUpperCase())||""}).join("")}function eS(n,e,t="application/json"){const r=document.createElement("a");r.href=URL.createObjectURL(new Blob([e],{type:t})),r.download=n,document.body.appendChild(r),r.click(),setTimeout(()=>{URL.revokeObjectURL(r.href),r.remove()},500)}function tS(n,e=240){return new Promise((t,r)=>{const s=new Image,i=URL.createObjectURL(n);s.onload=()=>{const o=document.createElement("canvas");o.width=o.height=e;const a=o.getContext("2d"),l=Math.min(s.width,s.height);a.drawImage(s,(s.width-l)/2,(s.height-l)/2,l,l,0,0,e,e),URL.revokeObjectURL(i),t(o.toDataURL("image/jpeg",.8))},s.onerror=()=>{URL.revokeObjectURL(i),r(new Error("imagem inválida"))},s.src=i})}const Mi=new Map;function pt(n){return Mi.has(n)||Mi.set(n,fetch(Yl+n,{cache:"no-cache"}).then(e=>{if(!e.ok)throw new Error(`${n}: ${e.status}`);return e.json()}).catch(e=>{throw Mi.delete(n),e})),Mi.get(n)}const mt=n=>Yl+n,Me=(n,e)=>`${Yl}seasons/${n}/${e}`,Gg=()=>pt("seasons/index.json"),oa=n=>pt(`seasons/${n}/season.json`);async function nS(n){try{return(await H.get(`contentOverrides/${n}`)).data.slots||{}}catch{return{}}}const Wg=()=>pt("noite/natal.json"),rS=()=>pt("noite/mensagens.json"),sS=()=>pt("noite/oracoes.json"),iS=()=>pt("advento/advento.json"),oS=()=>pt("desafios/desafios.json"),aS=()=>pt("calma/calma.json"),cS=()=>pt("modelos.json");function ft(n,e=[]){const[t,r]=B(null);return ot(()=>{let s=!0;return n().then(i=>s&&r(i)).catch(i=>console.error(i)),()=>{s=!1}},e),t}const rt={get(n){try{return localStorage.getItem(n)}catch{return null}},set(n,e){try{e==null?localStorage.removeItem(n):localStorage.setItem(n,e)}catch{}}},Hg=(()=>{const n=new URLSearchParams(location.search);n.get("demo")==="1"&&rt.set("mde.mode","demo"),n.get("demo")==="0"&&rt.set("mde.mode",null);const e=rt.get("mde.mode")==="demo";if(e){const t=n.get("hoje");t!==null&&rt.set("mde.hoje",t||null),HA(rt.get("mde.hoje"))}return e})(),H=Hg?KA():qA();let Oe={ready:!1,demo:Hg,user:null,today:Zl(),families:[],invites:[],familiesLoaded:!1,familyId:rt.get("mde.family"),family:null,children:[],items:[],entries:[],requests:[],progress:{},season:null,slots:{},ui:{kidMode:rt.get("mde.kidMode")==="1",kidId:rt.get("mde.kidId"),adminUntil:0,child:rt.get("mde.child"),tab:"hoje",screen:null},toast:null,error:null,offline:!navigator.onLine};const xc=new Set;let Nc=0;const ie=()=>Oe;function pe(n){const e=typeof n=="function"?n(Oe):n;Oe={...Oe,...e},Nc++,xc.forEach(t=>t())}function Te(n){pe(e=>({ui:{...e.ui,...n}})),"kidMode"in n&&rt.set("mde.kidMode",n.kidMode?"1":null),"kidId"in n&&rt.set("mde.kidId",n.kidId||null),"child"in n&&rt.set("mde.child",n.child||null)}function Z(){const[,n]=B(0),e=Nc;return ot(()=>{const t=()=>n(r=>r+1);return xc.add(t),Nc!==e&&t(),()=>{xc.delete(t)}},[]),Oe}let yf;function Ye(n,e){clearTimeout(yf),pe({toast:{text:n,kind:e,id:Date.now()}}),yf=setTimeout(()=>pe({toast:null}),e==="error"?6e3:3200)}function Qg(n,e="Não foi possível salvar"){console.error(n);const t=(n==null?void 0:n.code)||"",r=t.includes("permission")?"sem permissão (as regras do banco já foram publicadas?)":t.includes("unavailable")?"sem conexão; tente de novo":(n==null?void 0:n.message)||String(n);Ye(`${e}: ${r}`,"error")}let Li=[],fr=[];function tu(){fr.forEach(n=>n()),fr=[]}function lS(n){tu();const e=`families/${n}`,t=r=>{console.error(r),pe({error:(r==null?void 0:r.code)||String(r)})};fr.push(H.watchDoc(e,r=>{var o,a,l;if(!r.exists){pe({family:null});return}const s={id:r.id,...r.data},i=(a=(o=Oe.family)==null?void 0:o.season)==null?void 0:a.runId;pe({family:s}),((l=s.season)==null?void 0:l.runId)!==i&&uS(n,s)},t)),fr.push(H.watchCol(`${e}/children`,[],r=>{const s=r.map(o=>({id:o.id,...o.data})).sort((o,a)=>o.order-a.order||o.name.localeCompare(a.name)),i={children:s};!s.find(o=>o.id===Oe.ui.child)&&s[0]&&(i.ui={...Oe.ui,child:s[0].id}),pe(i)},t)),fr.push(H.watchCol(`${e}/items`,[],r=>pe({items:r.map(s=>({id:s.id,...s.data})).sort((s,i)=>s.order-i.order)}),t)),Jg(n),fr.push(H.watchCol(`${e}/requests`,[["status","==","pending"]],r=>pe({requests:r.map(s=>({id:s.id,...s.data})).sort((s,i)=>s.at-i.at)}),t))}let Fi=null;function Jg(n){Fi==null||Fi();const e=WA(Oe.today,-7);Fi=H.watchCol(`families/${n}/entries`,[["day",">=",e]],t=>pe({entries:t.map(r=>({id:r.id,...r.data})).sort((r,s)=>r.at-s.at)}))}let cs=null;async function uS(n,e){if(cs==null||cs(),cs=null,!e.season){pe({season:null,progress:{}});return}const t=e.season;cs=H.watchCol(`families/${n}/progress`,[["runId","==",t.runId]],r=>{const s={};r.forEach(i=>{const o={id:i.id,...i.data};s[o.child]=o}),pe({progress:s})});try{const[r,s]=await Promise.all([oa(t.seasonId),nS(t.seasonId)]);pe({season:r,slots:s})}catch(r){console.error(r),pe({error:"Não foi possível carregar a temporada."})}}function js(n){rt.set("mde.family",n),pe({familyId:n,family:null,children:[],items:[],entries:[],requests:[],progress:{},season:null}),n?lS(n):tu()}function hS(){H.onAuth(n=>{if(Li.forEach(t=>t()),Li=[],!n){tu(),pe({user:null,ready:!0,families:[],invites:[],familiesLoaded:!1,family:null});return}pe({user:n,ready:!0});let e=!1;Li.push(H.watchCol("families",[["memberIds","array-contains",n.uid]],t=>{var s,i;const r=t.map(o=>({id:o.id,...o.data}));if(pe({families:r,familiesLoaded:!0}),e)Oe.familyId&&!r.find(o=>o.id===Oe.familyId)&&js(((i=r[0])==null?void 0:i.id)||null);else{e=!0;const o=Oe.familyId&&r.find(a=>a.id===Oe.familyId)?Oe.familyId:((s=r[0])==null?void 0:s.id)||null;js(o)}},t=>{console.error(t),pe({familiesLoaded:!0,error:(t==null?void 0:t.code)||String(t)})})),n.email&&n.verified&&Li.push(H.watchCol("families",[["invites","array-contains",n.email]],t=>pe({invites:t.map(r=>({id:r.id,...r.data}))}),()=>{}))}),setInterval(()=>{const n=Zl();n!==Oe.today&&(pe({today:n}),Oe.familyId&&Jg(Oe.familyId))},3e4),addEventListener("online",()=>pe({offline:!1})),addEventListener("offline",()=>pe({offline:!0}))}const vf={dailyGoalPct:70,perfectBonus:5,kidMarks:"pedido",pinHash:"",pinSalt:"",modules:{christian:!0,english:!0,calm:!0,advent:!0,challenges:!0}},ke=n=>{var e;return{...vf,...(n==null?void 0:n.settings)||{},modules:{...vf.modules,...((e=n==null?void 0:n.settings)==null?void 0:e.modules)||{}}}},$s=(n,e,t)=>n.filter(r=>{var s;return r.active!==!1&&r.kind===t&&(!((s=r.kids)!=null&&s.length)||r.kids.includes(e))}),nu=(n,e,t)=>n.filter(r=>r.child===e&&r.day===t&&!r.undone);function pn(n,e,t,r,s){const i=$s(e,r,"task"),o=nu(t,r,s),a=new Set(o.filter(_=>_.kind==="task"&&_.itemId).map(_=>_.itemId)),l=i.reduce((_,g)=>_+g.stars,0),h=i.filter(_=>a.has(_.id)).reduce((_,g)=>_+g.stars,0),f=l?Math.round(h/l*100):0,m=ke(n).dailyGoalPct;return{tasks:i,done:a,earned:h,total:l,pct:f,goalMet:l>0&&f>=m,allDone:i.length>0&&i.every(_=>a.has(_.id)),dayStars:o.reduce((_,g)=>_+g.stars,0)}}const dS=(n,e)=>ia(n.startDay,e)+1,Oc=(n,e)=>e>n.endDay,Mc=n=>n.items.filter(e=>e.kind==="daily"),fS=n=>n.items.filter(e=>e.kind==="milestone").sort((e,t)=>(e.milestone||0)-(t.milestone||0));function oi(n,e,t){const r=$s(n,e,"task").reduce((i,o)=>i+o.stars,0)||20,s=ia(t.startDay,t.endDay)+1;return Math.max(60,Math.round(r*s*.75/10)*10)}const Yg=(n,e,t,r)=>(n==null?void 0:n.goal)||oi(e,t,r);function ru(n,e,t,r,s,i,o){var L;const a=new Set(Object.keys((t==null?void 0:t.unlocked)||{})),l=Mc(n),h=(L=Object.entries((t==null?void 0:t.unlocked)||{}).find(([M,q])=>q.day===o&&l.some($=>$.id===M)))==null?void 0:L[0],f=h&&l.find(M=>M.id===h)||null,m=l.find(M=>!a.has(M.id))||null,_=dS(e,o),g=l.filter(M=>a.has(M.id)).length,w=Yg(t,s,i,e),R=(t==null?void 0:t.seasonStars)||0,A=fS(n).map((M,q)=>{const $=Math.round(w*(n.milestoneFractions[q]??1));return{item:M,at:$,reached:R>=$}}),V=A.find(M=>!M.reached);let N="";return _<1?N="A temporada ainda não começou.":Oc(e,o)?N="A temporada terminou.":f?N="A peça de hoje já foi conquistada.":m?g>=_?N="Amanhã chega uma peça nova.":r.goalMet||(N=r.total?"Falta completar a rotina de hoje.":"A rotina ainda não tem tarefas."):N="Todas as peças já foram conquistadas.",{unlocked:a,claimedToday:f,next:m,canClaim:!N,blockedReason:N,seasonStars:R,goal:w,milestones:A,nextMilestone:V?{item:V.item,at:V.at,need:V.at-R}:null,dayN:_,dailyCount:g}}const Xg=(n,e)=>n.items.filter(t=>{var r;return t.kind==="daily"?e.unlocked.has(t.id):(r=e.milestones.find(s=>s.item.id===t.id))==null?void 0:r.reached}),mS=(n,e)=>XA(Bs(n.birth,e)),pS=(n,e)=>Math.max(0,Math.min(4,Kg(Bs(n.birth,e))+((n.maturity||2)-2))),Le=()=>{const n=ie().family;if(!n)throw new Error("Nenhuma família selecionada");return n},ye=n=>`families/${Le().id}/${n}`,Zg=()=>{var n;return ie().ui.kidMode?"kid":((n=ie().user)==null?void 0:n.uid)||"?"},Do=()=>{var n;return jA.includes(((n=ie().user)==null?void 0:n.email)||"")||ie().demo};async function ne(n,e,t){try{return await H.write(n),e&&Ye(e),!0}catch(r){return Qg(r,t),!1}}function Mt(n,e,t){const r=Le(),s=[],i={balance:H.fv.inc(e)};e>0&&(i.lifetime=H.fv.inc(e)),s.push({kind:"update",path:ye(`children/${n}`),data:i});const o=r.season;return t&&e>0&&o&&ie().today>=o.startDay&&ie().today<=o.endDay&&s.push({kind:"set",merge:!0,path:ye(`progress/${o.runId}_${n}`),data:{runId:o.runId,child:n,seasonId:o.seasonId,seasonStars:H.fv.inc(e)}}),s}function Lt(n){var s;const e=H.newId(),t=Le(),r={...n,day:n.day||ie().today,at:Date.now(),by:Zg()};return(s=t.season)!=null&&s.runId&&(r.runId=t.season.runId),{id:e,op:{kind:"set",path:ye(`entries/${e}`),data:r}}}const Ha=new Set;async function qs(n,e,t){const r=ie();if(e.kind==="task"){const o=`${n}:${e.id}:${r.today}`;if(Ha.has(o)||pn(r.family,r.items,r.entries,n,r.today).done.has(e.id))return!0;Ha.add(o),setTimeout(()=>Ha.delete(o),1500)}const s=e.kind==="bad"?-Math.abs(e.stars):Math.abs(e.stars),i=[Lt({child:n,kind:e.kind,itemId:e.id,label:e.label,emoji:e.emoji,stars:s}).op,...Mt(n,s,!0)];if(e.kind==="task"){const o=pn(r.family,r.items,r.entries,n,r.today),a=o.tasks.length>0&&o.tasks.every(f=>f.id===e.id||o.done.has(f.id)),l=r.entries.some(f=>f.child===n&&f.day===r.today&&f.kind==="bonus"&&!f.undone),h=ke(r.family).perfectBonus;a&&!l&&h>0&&(i.push(Lt({child:n,kind:"bonus",label:"Rotina completa",emoji:"🌟",stars:h}).op,...Mt(n,h,!0)),setTimeout(()=>Ye(`Rotina completa! +${h} de bônus`),400))}return ne(i)}async function e_(n){const e=ie(),t=[{kind:"update",path:ye(`entries/${n.id}`),data:{undone:!0}},...If(n)];if(n.kind==="task"){const r=e.entries.find(s=>s.child===n.child&&s.day===n.day&&s.kind==="bonus"&&!s.undone);r&&t.push({kind:"update",path:ye(`entries/${r.id}`),data:{undone:!0}},...If(r))}return ne(t,"Desfeito")}function If(n){var s;const e=Le(),t=[],r={balance:H.fv.inc(-n.stars)};return n.stars>0&&(r.lifetime=H.fv.inc(-n.stars)),t.push({kind:"update",path:ye(`children/${n.child}`),data:r}),n.stars>0&&n.runId&&((s=e.season)==null?void 0:s.runId)===n.runId&&t.push({kind:"set",merge:!0,path:ye(`progress/${n.runId}_${n.child}`),data:{runId:n.runId,child:n.child,seasonId:e.season.seasonId,seasonStars:H.fv.inc(-n.stars)}}),t}async function gS(n,e,t){return ne([Lt({child:n,kind:"adjust",label:t||"Ajuste",emoji:e>=0?"➕":"➖",stars:e}).op,...Mt(n,e,!1)],"Ajuste registrado")}async function t_(n,e,t,r,s,i){return ne([Lt({child:n,kind:e,label:t,emoji:r,stars:s}).op,...Mt(n,s,!0)],i)}async function _S(n,e){return(n.balance||0)<e.stars?(Ye(`Faltam ${e.stars-(n.balance||0)} estrelas para ${e.label}`),!1):ne([Lt({child:n.id,kind:"reward",itemId:e.id,label:e.label,emoji:e.emoji,stars:-e.stars}).op,...Mt(n.id,-e.stars,!1)],`${e.label} trocado!`)}async function su(n,e,t,r,s,i){const o=ie();if(o.requests.some(h=>h.child===n&&h.label===t&&h.day===o.today))return Ye("Esse pedido já está esperando um adulto"),!1;const a=H.newId(),l={child:n,kind:e,label:t,emoji:r,stars:s,day:o.today,at:Date.now(),status:"pending"};return i&&(l.itemId=i),ne([{kind:"set",path:ye(`requests/${a}`),data:l}],"Pedido enviado para um adulto")}async function wf(n,e){var s;const t=ie(),r={kind:"update",path:ye(`requests/${n.id}`),data:{status:e?"ok":"no",resolvedAt:Date.now(),resolvedBy:((s=t.user)==null?void 0:s.uid)||""}};if(!e)return ne([r],"Pedido recusado");if(n.kind==="task"){const i=t.items.find(o=>o.id===n.itemId);return i?(await ne([r]),qs(n.child,i)):ne([r])}if(n.kind==="reward"){const i=t.children.find(a=>a.id===n.child),o=t.items.find(a=>a.id===n.itemId);return!i||!o?ne([r]):(i.balance||0)<o.stars?(Ye("Saldo insuficiente para esse prêmio"),!1):ne([r,Lt({child:n.child,kind:"reward",itemId:o.id,label:o.label,emoji:o.emoji,stars:-o.stars}).op,...Mt(n.child,-o.stars,!1)],"Prêmio liberado")}return ne([r,Lt({child:n.child,kind:"challenge",label:n.label,emoji:n.emoji,stars:n.stars}).op,...Mt(n.child,n.stars,!0)],"Desafio aprovado")}async function yS(n,e){const r=Le().season;return ne([{kind:"set",merge:!0,path:ye(`progress/${r.runId}_${n}`),data:{runId:r.runId,child:n,seasonId:r.seasonId,unlocked:{[e]:{at:Date.now(),day:ie().today}}}}])}async function Ef(n,e){const t=Le();t.season&&await H.write([{kind:"set",merge:!0,path:ye(`progress/${t.season.runId}_${n}`),data:{runId:t.season.runId,child:n,seasonId:t.season.seasonId,seenMilestones:e}}]).catch(()=>{})}async function vS(n,e,t,r){const s=ie(),i=`${s.today.slice(0,4)}-${String(n).padStart(2,"0")}`,o=[{kind:"set",path:ye(`advent/${i}`),data:{n,at:Date.now(),by:Zg()}}];return s.children.forEach(a=>o.push(Lt({child:a.id,kind:"advent",label:`Advento: ${t}`,emoji:r,stars:e}).op,...Mt(a.id,e,!0))),ne(o,`Portinha ${n} aberta! +${e} para cada criança`)}async function IS(n){const e=n.id||H.newId(),t={emoji:n.emoji||"⭐",label:n.label||"",stars:Math.max(0,Math.round(n.stars||0)),kind:n.kind,period:n.period||"livre",kids:n.kids||[],order:n.order??Date.now(),active:n.active!==!1,clip:n.clip||""};return ne([{kind:"set",path:ye(`items/${e}`),data:t}],"Salvo")}const wS=n=>ne([{kind:"update",path:ye(`items/${n}`),data:{active:!1}}],"Removido"),ES=n=>ne(n.map((e,t)=>({kind:"update",path:ye(`items/${e}`),data:{order:t}})));function TS(n,e,t){const r=[];let s=0;for(const i of e){const o=i.bands?t.filter(l=>i.bands.includes(l.band)).map(l=>l.id):[];if(i.bands&&!o.length)continue;const a=!i.bands||o.length===t.length;r.push({kind:"set",path:`families/${n}/items/${H.newId()}`,data:{kind:i.kind,emoji:i.emoji,label:i.label,stars:i.stars,period:i.period||"livre",kids:a?[]:o,order:s++,active:!0}})}return r}async function bS(n){const e=Le(),t=!n.id,r=n.id||H.newId(),s={name:n.name.trim(),birth:n.birth||"",gender:n.gender||"x",color:n.color||"#8E2C2C",maturity:n.maturity||2,english:n.english!==!1};n.photo!==void 0&&(s.photo=n.photo||"");const i=[];return t?(Object.assign(s,{balance:0,lifetime:0,order:ie().children.length}),i.push({kind:"set",path:ye(`children/${r}`),data:s})):i.push({kind:"update",path:ye(`children/${r}`),data:s}),t&&e.season&&i.push(iu(e.id,e.season,r,oi(ie().items,r,e.season))),ne(i,"Salvo")}const AS=n=>ne([{kind:"delete",path:ye(`children/${n}`)}],"Criança removida"),iu=(n,e,t,r)=>({kind:"set",merge:!0,path:`families/${n}/progress/${e.runId}_${t}`,data:{runId:e.runId,child:t,seasonId:e.seasonId,goal:r,seasonStars:H.fv.inc(0),unlocked:{},seenMilestones:0}}),SS=(n,e)=>{const t=Le();return ne([{kind:"set",merge:!0,path:ye(`progress/${t.season.runId}_${n}`),data:{runId:t.season.runId,child:n,seasonId:t.season.seasonId,goal:e}}],"Meta atualizada")};async function On(n){const e={};for(const[t,r]of Object.entries(n))e[`settings.${t}`]=r;return ne([{kind:"update",path:`families/${Le().id}`,data:e}],"Configuração salva")}async function RS(n){const e=zg();return On({pinSalt:e,pinHash:await eu(e+n)})}async function n_(n){const e=ke(Le());return e.pinHash?await eu(e.pinSalt+n)===e.pinHash:!0}const PS=n=>ne([{kind:"update",path:`families/${Le().id}`,data:{name:n.trim()}}],"Nome salvo"),CS=n=>ne([{kind:"update",path:`families/${Le().id}`,data:{invites:H.fv.union(n.trim().toLowerCase())}}],"Convite criado"),kS=n=>ne([{kind:"update",path:`families/${Le().id}`,data:{invites:H.fv.remove(n)}}]);async function DS(n){return ne([{kind:"update",path:`families/${Le().id}`,data:{[`members.${n}`]:H.fv.del(),memberIds:H.fv.remove(n)}}],"Responsável removido")}async function VS(n){const e=ie().user;await ne([{kind:"update",path:`families/${n.id}`,data:{[`members.${e.uid}`]:{role:"parent",email:e.email,name:e.name||e.email},memberIds:H.fv.union(e.uid),invites:H.fv.remove(e.email)}}],`Você entrou na família ${n.name}`)&&js(n.id)}async function r_(n){const e=ie(),t=e.user,r=H.newId();let s=e.demo?{avatar:!0}:void 0;if(!e.demo)try{s=(await H.get(`licenses/${n.license}`)).data.plan}catch{s=void 0}const i=zg(),o=await oa(n.seasonId),a=s_(o,e.today,n.startNow),l={...ke(null),pinSalt:n.pin?i:"",pinHash:n.pin?await eu(i+n.pin):"",modules:n.modules},h=[{kind:"set",path:`families/${r}`,data:{name:n.name.trim(),owner:t.uid,license:n.license||(e.demo?"DEMO":""),createdAt:Date.now(),...s?{plan:s}:{},members:{[t.uid]:{role:"owner",email:t.email,name:t.name||t.email}},memberIds:[t.uid],invites:[],settings:l,season:a}}];e.demo||h.push({kind:"update",path:`licenses/${n.license}`,data:{usedBy:t.uid,family:r,usedAt:Date.now()}});const f=n.kids.map((g,w)=>({...g,id:H.newId(),order:w})),m=await cS(),_=TS(r,m.items,f.map(g=>({id:g.id,band:g.band})));f.forEach(g=>{h.push({kind:"set",path:`families/${r}/children/${g.id}`,data:{name:g.name.trim(),birth:g.birth,gender:g.gender,color:g.color,maturity:2,english:n.modules.english,balance:0,lifetime:0,order:g.order}});const w=_.filter(A=>A.kind==="set"&&A.data.kind==="task"&&(!A.data.kids.length||A.data.kids.includes(g.id))).reduce((A,V)=>A+V.data.stars,0),R=Math.round((new Date(a.endDay).getTime()-new Date(a.startDay).getTime())/864e5)+1;h.push(iu(r,a,g.id,Math.max(60,Math.round(w*R*.75/10)*10)))});try{return await H.write(h.slice(0,e.demo?h.length:2)),e.demo||await H.write(h.slice(2)),await H.write(_),js(r),Ye("Família criada! Bem-vindos ao Mundo de Estrelas"),!0}catch(g){return Qg(g,"Não foi possível criar a família"),!1}}function s_(n,e,t){const r=Number(e.slice(0,4)),s=n.dates.end<n.dates.start;let i="",o="";for(const l of[r-1,r,r+1])if(i=`${l}-${n.dates.start}`,o=`${s?l+1:l}-${n.dates.end}`,e<=o)break;const a=t||e>i?e:i;return{runId:`${n.id}-${a.replace(/-/g,"")}-${Math.random().toString(36).slice(2,6)}`,seasonId:n.id,version:n.version,startDay:a,endDay:o,startedAt:Date.now()}}async function Tf(n,e){const t=Le(),r=ie(),s=await oa(n),i=s_(s,r.today,e),o=[{kind:"update",path:`families/${t.id}`,data:{season:i}}];return r.children.forEach(a=>o.push(iu(t.id,i,a.id,oi(r.items,a.id,i)))),ne(o,`Temporada ${s.name} começou!`)}async function xS(n){const e=Le(),t=ie(),r=e.season,s=t.season;if(!r||!s)return!1;const i=[];return t.children.forEach(o=>{const a=t.progress[o.id],l=Object.keys((a==null?void 0:a.unlocked)||{}),h=(a==null?void 0:a.goal)||oi(t.items,o.id,r);s.items.filter(f=>f.kind==="milestone").forEach((f,m)=>{((a==null?void 0:a.seasonStars)||0)>=Math.round(h*(s.milestoneFractions[m]??1))&&l.push(f.id)}),i.push({kind:"set",path:`families/${e.id}/album/${r.runId}_${o.id}`,data:{runId:r.runId,seasonId:r.seasonId,seasonName:s.name,child:o.id,childName:o.name,from:r.startDay,to:t.today<r.endDay?t.today:r.endDay,seasonStars:(a==null?void 0:a.seasonStars)||0,items:l,thumb:n[o.id]||"",createdAt:Date.now()}})}),i.push({kind:"update",path:`families/${e.id}`,data:{season:null,lastSeason:r}}),ne(i,"Temporada guardada no álbum de aventuras")}async function i_(n,e,t=!1){var o;const r=[],s=[],i="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";for(let a=0;a<n;a++){const l="MDE-"+Array.from(crypto.getRandomValues(new Uint8Array(8)),h=>i[h%i.length]).join("").replace(/(.{4})(.{4})/,"$1-$2");r.push(l),s.push({kind:"set",path:`licenses/${l}`,data:{createdAt:Date.now(),createdBy:((o=ie().user)==null?void 0:o.email)||"",note:e,usedBy:null,plan:{avatar:t}}})}return await ne(s,`${n} código(s) criado(s)`)?r:[]}const NS=(n,e)=>{var t;return ne([{kind:"set",path:`contentOverrides/${n}`,data:{slots:e,updatedAt:Date.now(),by:((t=ie().user)==null?void 0:t.email)||""}}],"Posições salvas para todas as famílias")};function OS(){const n=ie();return JSON.stringify({exportedAt:new Date().toISOString(),family:n.family,children:n.children.map(e=>({...e,photo:e.photo?"(foto omitida)":""})),items:n.items,progress:n.progress,recentEntries:n.entries},null,2)}async function MS(n,e){return(n.balance||0)<e.price?(Ye(`Faltam ${e.price-(n.balance||0)} estrelas`),!1):ne([Lt({child:n.id,kind:"reward",label:`Avatar: ${e.name}`,emoji:"✨",stars:-e.price}).op,...Mt(n.id,-e.price,!1),{kind:"update",path:ye(`children/${n.id}`),data:{"avatar.owned":H.fv.union(e.id)}}],`${e.name} é seu!`)}const LS=(n,e,t)=>ne([{kind:"update",path:ye(`children/${n}`),data:{"avatar.hidden":t?H.fv.union(e):H.fv.remove(e)}}]);async function FS(n,e,t){const r=await new Promise((g,w)=>{const R=new Image,A=URL.createObjectURL(e);R.onload=()=>{URL.revokeObjectURL(A),g(R)},R.onerror=w,R.src=A}),s=document.createElement("canvas");s.width=r.naturalWidth,s.height=r.naturalHeight;const i=s.getContext("2d");i.drawImage(r,0,0);const o=i.getImageData(0,0,s.width,s.height).data;let a=s.width,l=0,h=s.height,f=0;for(let g=0;g<s.height;g++)for(let w=0;w<s.width;w++)o[(g*s.width+w)*4+3]>40&&(w<a&&(a=w),w>l&&(l=w),g<h&&(h=g),g>f&&(f=g));if(l<=a||f<=h)return Ye("A imagem precisa ter fundo transparente","error"),!1;let m=760,_="";for(let g=.86;g>=.5;g-=.12){const w=Math.round((l-a+1)*m/(f-h+1)),R=document.createElement("canvas");if(R.width=w,R.height=m,R.getContext("2d").drawImage(s,a,h,l-a+1,f-h+1,0,0,w,m),_=R.toDataURL("image/webp",g),_.startsWith("data:image/webp")||(_=R.toDataURL("image/png")),_.length<85e4)break;m=Math.round(m*.85)}return ne([{kind:"set",path:ye(`avatars/${n}`),data:{img:_,neck:t,updatedAt:Date.now()}}],"Avatar salvo")}const US=n=>ne([{kind:"delete",path:ye(`avatars/${n}`)}],"Avatar removido"),BS=n=>ne([{kind:"update",path:`families/${Le().id}`,data:{"plan.avatar":n}}],n?"Avatares liberados para esta família":"Avatares desligados");function Ft({child:n,size:e=44,ring:t}){return u("span",{class:"avatar"+(t?" ring":""),style:{width:e,height:e,background:n.color,fontSize:e*.4},children:n.photo?u("img",{src:n.photo,alt:""}):ZA(n.name)})}function Ut({n,big:e}){return u("span",{class:"starnum"+(e?" big":""),children:[u("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:u("path",{d:"M12 2.6l2.9 6 6.5.8-4.8 4.5 1.2 6.5L12 17.3l-5.8 3.1 1.2-6.5L2.6 9.4l6.5-.8z"})}),n]})}function Vo({value:n,max:e,label:t,tone:r}){const s=e>0?Math.min(100,Math.round(n/e*100)):0;return u("div",{class:"bar "+(r||""),role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100,"aria-label":t,children:u("span",{style:{width:s+"%"}})})}function Vt({src:n,emoji:e,alt:t,class:r}){const[s,i]=B(null);return ot(()=>i(null),[n]),u("span",{class:"art "+(r||""),children:[s!==!1&&u("img",{src:n,alt:t,loading:"lazy",onLoad:()=>i(!0),onError:()=>i(!1),style:s?"":"opacity:0"}),s!==!0&&u("span",{class:"art-emoji","aria-hidden":"true",children:e})]})}function Et({title:n,onClose:e,children:t,wide:r}){const s=ec(null);return ot(()=>{var o;const i=a=>{a.key==="Escape"&&e()};return addEventListener("keydown",i),(o=s.current)==null||o.focus(),()=>removeEventListener("keydown",i)},[]),u("div",{class:"sheet-bg",onClick:i=>{i.target===i.currentTarget&&e()},children:u("div",{class:"sheet"+(r?" wide":""),role:"dialog","aria-modal":"true","aria-label":n,tabIndex:-1,ref:s,children:[u("div",{class:"sheet-head",children:[n&&u("h2",{children:n}),u("button",{class:"icon-btn",onClick:e,"aria-label":"Fechar",children:"✕"})]}),u("div",{class:"sheet-body",children:t})]})})}function Nr({title:n,onDone:e,onCancel:t,error:r}){const[s,i]=B("");ot(()=>{s.length===4&&(e(s),setTimeout(()=>i(""),250))},[s]);const o=["1","2","3","4","5","6","7","8","9","","0","⌫"];return u("div",{class:"pinpad",children:[u("h2",{children:n}),u("div",{class:"pin-dots"+(r?" shake":""),children:[0,1,2,3].map(a=>u("span",{class:a<s.length?"on":""}))}),r&&u("p",{class:"err",children:r}),u("div",{class:"pin-keys",children:o.map(a=>a===""?u("span",{}):u("button",{onClick:()=>i(l=>a==="⌫"?l.slice(0,-1):(l+a).slice(0,4)),"aria-label":a==="⌫"?"Apagar":a,children:a}))}),t&&u("button",{class:"link",onClick:t,children:"Cancelar"})]})}function aa({text:n,yes:e="Confirmar",onYes:t,onClose:r,danger:s}){return u(Et,{onClose:r,title:"Confirmar",children:[u("p",{children:n}),u("div",{class:"row end gap",children:[u("button",{class:"btn ghost",onClick:r,children:"Cancelar"}),u("button",{class:"btn "+(s?"danger":"primary"),onClick:()=>{t(),r()},children:e})]})]})}function jS({emoji:n,title:e,children:t}){return u("div",{class:"empty",children:[u("div",{class:"empty-emo",children:n}),u("h3",{children:e}),t]})}function ue({label:n,children:e,hint:t}){return u("label",{class:"field",children:[u("span",{class:"field-label",children:n}),e,t&&u("span",{class:"hint",children:t})]})}const io=["#8E2C2C","#2F5D4A","#C9A24A","#1F2E4A","#7A4E8C","#C2603A","#3E7CA6","#B5476B"];function o_({value:n,onChange:e}){return u("div",{class:"colors",children:io.map(t=>u("button",{type:"button",class:t===n?"on":"",style:{background:t},onClick:()=>e(t),"aria-label":"Cor "+t}))})}const $S=["⭐","🛏️","🪥","👕","🎒","📚","✏️","🧸","🍽️","🥦","🚿","🧹","🐶","🌱","🙏","📖","🎹","⚽","🧩","💤","🤝","💬","🫶","😊","🗣️","😤","📱","🎮","🍦","🎬","🍕","🛝","🎨","🏊","🎁","🧁","🚲","🏕️","🎟️","🕹️","💰","🌙","☀️","🧺","🍳","🧦","👟","💧"];function qS({value:n,onChange:e}){const[t,r]=B(!1);return u("div",{class:"emoji-pick",children:[u("button",{type:"button",class:"emoji-btn",onClick:()=>r(!t),"aria-label":"Escolher ícone",children:n||"⭐"}),t&&u("div",{class:"emoji-grid",children:[$S.map(s=>u("button",{type:"button",onClick:()=>{e(s),r(!1)},children:s})),u("input",{class:"emoji-own",placeholder:"outro",maxLength:4,onInput:s=>{const i=s.target.value;i&&e(i)}})]})]})}const zS=n=>{const e=(n==null?void 0:n.code)||"";return e.includes("invalid-credential")||e.includes("wrong-password")||e.includes("user-not-found")?"E-mail ou senha incorretos.":e.includes("email-already-in-use")?'Já existe uma conta com esse e-mail. Use "Entrar".':e.includes("weak-password")?"A senha precisa ter pelo menos 6 caracteres.":e.includes("invalid-email")?"E-mail inválido.":e.includes("popup-closed")||e.includes("cancelled-popup")?"":e.includes("too-many-requests")?"Muitas tentativas. Espere alguns minutos.":e.includes("network")?"Sem conexão com a internet.":e.includes("unauthorized-domain")?"Este endereço ainda não está autorizado no Firebase para entrar com Google.":e.includes("popup-blocked")?"O navegador bloqueou a janela do Google. Permita janelas para este site e tente de novo.":(n==null?void 0:n.message)||String(n)};function KS(){const[n,e]=B("start"),[t,r]=B(""),[s,i]=B(""),[o,a]=B(""),[l,h]=B(!1),[f,m]=B(!1),_=async g=>{a(""),h(!0);try{await g()}catch(w){a(zS(w))}h(!1)};return u("div",{class:"login",children:[u("img",{class:"login-cover"+(f?" on":""),src:mt("capa-app.jpg"),alt:`${gf}: pequenas atitudes, grandes conquistas, infinitos mundos.`,onLoad:()=>m(!0),onError:()=>m(!1)}),!f&&u("div",{class:"login-hero",children:[u("div",{class:"brand-mark","aria-hidden":"true",children:"✦"}),u("h1",{children:gf}),u("p",{class:"tagline",children:"Pequenas atitudes, grandes conquistas, infinitos mundos."})]}),u("div",{class:"card login-card",children:[n==="start"&&u(be,{children:[u("button",{class:"btn primary block",disabled:l,onClick:()=>_(()=>H.signInGoogle()),children:"Entrar com Google"}),u("button",{class:"btn ghost block",onClick:()=>e("in"),children:"Entrar com e-mail"}),u("button",{class:"btn ghost block",onClick:()=>e("up"),children:"Criar conta com e-mail"})]}),n!=="start"&&u("form",{onSubmit:g=>{g.preventDefault(),_(()=>n==="in"?H.signInEmail(t,s):H.signUpEmail(t,s))},children:[u("h2",{children:n==="in"?"Entrar":"Criar conta"}),u("label",{class:"field",children:[u("span",{class:"field-label",children:"E-mail"}),u("input",{type:"email",autocomplete:"email",required:!0,value:t,onInput:g=>r(g.target.value)})]}),u("label",{class:"field",children:[u("span",{class:"field-label",children:"Senha"}),u("input",{type:"password",autocomplete:n==="in"?"current-password":"new-password",minLength:6,required:!0,value:s,onInput:g=>i(g.target.value)})]}),u("button",{class:"btn primary block",disabled:l,children:n==="in"?"Entrar":"Criar conta"}),n==="in"&&u("button",{type:"button",class:"link",onClick:()=>_(async()=>{if(!t)throw new Error("Digite seu e-mail primeiro.");await H.resetPassword(t),Ye("Enviamos um link para redefinir a senha")}),children:"Esqueci a senha"}),u("button",{type:"button",class:"link",onClick:()=>{e("start"),a("")},children:"Voltar"})]}),o&&u("p",{class:"err",children:o})]}),u("p",{class:"login-foot",children:[u("a",{href:"?demo=1",class:"link",children:"Ver demonstração sem conta"}),u("span",{class:"credit",children:["Algumas ilustrações: ",u("a",{href:"https://www.vecteezy.com",target:"_blank",rel:"noopener",children:"Vecteezy.com"})]})]})]})}function GS(){var r;const n=ie(),[e,t]=B(!1);return u("div",{class:"login",children:u("div",{class:"card login-card",children:[u("h2",{children:"Confirme seu e-mail"}),u("p",{children:["Enviamos um link para ",u("b",{children:(r=n.user)==null?void 0:r.email}),". Abra o e-mail, clique no link e volte aqui."]}),u("button",{class:"btn primary block",disabled:e,onClick:async()=>{t(!0),await H.reloadUser(),location.reload()},children:"Já confirmei"}),u("button",{class:"btn ghost block",onClick:async()=>{await H.resendVerification(),Ye("E-mail reenviado")},children:"Reenviar e-mail"}),u("button",{class:"link",onClick:()=>H.signOut(),children:"Sair"})]})})}let xo=null;const Lc=new Set,WS=()=>pt("clipart/index.json").then(n=>(xo={clips:n.clips.map(e=>({...e,tags:e.tags.map(a_)})),decor:n.decor},Lc.forEach(e=>e()),xo)).catch(()=>null);function ou(){const[,n]=B(0);return ot(()=>{if(xo)return;const e=()=>n(t=>t+1);return Lc.add(e),WS(),()=>{Lc.delete(e)}},[]),xo}const a_=n=>n.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/\{[^}]*\}/g,""),Fc=(n,e)=>(e==="f"?n.f:e==="m"?n.m:void 0)||n.file||n.m||n.f||"";function c_(n,e,t){if(!n||t==="none")return null;if(t)return n.clips.find(s=>s.id===t)||null;const r=" "+a_(e).replace(/[^a-z0-9 -]/g," ");for(const s of n.clips)if(s.tags.some(i=>r.includes(" "+i)))return s;return null}function zs({label:n,emoji:e,clip:t,gender:r,size:s=44}){const i=ou(),[o,a]=B(!1),l=c_(i,n,t);return!l||o?u("span",{class:"task-emo",style:{fontSize:Math.round(s*.55)},children:e}):u("img",{class:"clip",src:mt("clipart/"+Fc(l,r)),alt:"",width:s,height:s,loading:"lazy",onError:()=>a(!0)})}function ai({name:n,class:e,size:t}){const r=ou(),[s,i]=B(!1),o=r==null?void 0:r.decor[n];return!o||s?null:u("img",{class:"decor "+(e||""),src:mt("clipart/"+o),alt:"",style:t?{width:t}:void 0,onError:()=>i(!0)})}function HS({value:n,label:e,gender:t,onChange:r}){const s=ou();if(!s)return null;const i=c_(s,e);return u("div",{class:"clip-pick",children:[u("button",{type:"button",class:n?"":"on",onClick:()=>r(void 0),title:"Automática",children:[i?u("img",{src:mt("clipart/"+Fc(i,t)),alt:""}):u("span",{children:"auto"}),u("small",{children:"auto"})]}),u("button",{type:"button",class:n==="none"?"on":"",onClick:()=>r("none"),children:[u("span",{children:"😀"}),u("small",{children:"emoji"})]}),s.clips.map(o=>u("button",{type:"button",class:n===o.id?"on":"",onClick:()=>r(o.id),title:o.id,children:u("img",{src:mt("clipart/"+Fc(o,t)),alt:o.id,loading:"lazy"})}))]})}const QS=[["christian","Conteúdo cristão","Histórias bíblicas, orações e mensagens de Jesus na noite."],["advent","Calendário do Advento","24 portinhas em dezembro, com uma atividade em família."],["english","Palavras em inglês","Cada peça da temporada traz uma palavra e uma frase."],["calm","Cantinho da calma","Respiração guiada e ideias para quando a emoção aperta."],["challenges","Desafios do dia","Um desafio por dia, de acordo com a idade."]];function JS(){var r;const n=Z(),[e,t]=B(!1);return e?u(YS,{onCancel:()=>t(!1)}):u("div",{class:"page narrow",children:[u("header",{class:"welcome-head",children:[u(ai,{name:"turma",class:"hero-decor"}),u("h1",{children:"Bem-vindos!"}),u("p",{class:"muted",children:(r=n.user)==null?void 0:r.email})]}),n.invites.map(s=>u("div",{class:"card",children:[u("h3",{children:["Convite para a família ",s.name]}),u("p",{class:"muted",children:"Você foi convidado para acompanhar as crianças desta família."}),u("button",{class:"btn primary block",onClick:()=>VS(s),children:"Entrar na família"})]})),u("div",{class:"card",children:[u("h3",{children:"Começar uma família nova"}),u("p",{class:"muted",children:n.demo?"Na demonstração você pode criar uma família de exemplo ou montar a sua.":"Você vai precisar do código de licença recebido na compra."}),u("button",{class:"btn primary block",onClick:()=>t(!0),children:"Criar família"}),n.demo&&u("button",{class:"btn ghost block",onClick:()=>r_({name:"Família Exemplo",license:"DEMO",pin:"1234",seasonId:"vila-natal",startNow:!0,modules:{christian:!0,english:!0,calm:!0,advent:!0,challenges:!0},kids:[{name:"Lia",birth:`${Number(n.today.slice(0,4))-4}-03-10`,gender:"f",color:"#B5476B",band:0},{name:"Theo",birth:`${Number(n.today.slice(0,4))-10}-07-21`,gender:"m",color:"#2F5D4A",band:2},{name:"Bia",birth:`${Number(n.today.slice(0,4))-14}-01-05`,gender:"f",color:"#3E7CA6",band:4}]}),children:"Família de exemplo pronta (PIN 1234)"})]}),u("button",{class:"link",onClick:()=>H.signOut(),children:n.demo?"Sair da demonstração":"Sair"})]})}function YS({onCancel:n}){const e=ie(),t=ft(Gg),[r,s]=B(e.demo?1:0),[i,o]=B(""),[a,l]=B(""),[h,f]=B(""),[m,_]=B([]),[g,w]=B({name:"",birth:"",gender:"f",color:io[0],band:2}),[R,A]=B({christian:!0,english:!0,calm:!0,advent:!0,challenges:!0}),[V,N]=B(""),[L,M]=B(""),[q,$]=B(!1),[b,v]=B(!1),I=t==null?void 0:t[0],T=I?`${e.today.slice(0,4)}-${I.dates.start}`:"",S=T&&e.today<T,C=async()=>{l("");const J=i.trim().toUpperCase();try{const Fe=await H.get(`licenses/${J}`);if(!Fe.exists)return l("Código não encontrado. Confira as letras e os traços.");if(Fe.data.usedBy)return l("Este código já foi usado por outra família.");o(J),s(1)}catch(Fe){l("Não foi possível conferir o código agora: "+((Fe==null?void 0:Fe.code)||Fe))}},E=()=>{if(!g.name.trim()||!g.birth)return;const J=Bs(g.birth,e.today);_([...m,{...g,band:Kg(J)}]),w({name:"",birth:"",gender:"f",color:io[(m.length+1)%io.length],band:2})},lt=async J=>{v(!0),await r_({name:h,license:i,kids:m,pin:J,modules:R,seasonId:(I==null?void 0:I.id)||"vila-natal",startNow:q||!S})||v(!1)};return u("div",{class:"page narrow onboarding",children:[u("div",{class:"steps","aria-label":`Passo ${r+1} de 6`,children:[0,1,2,3,4,5].map(J=>u("span",{class:J<=r?"on":""}))}),r===0&&u("div",{class:"card",children:[u("h2",{children:"Código da licença"}),u("p",{class:"muted",children:"Cada família usa um código, recebido na compra."}),u(ue,{label:"Código",children:u("input",{value:i,placeholder:"MDE-XXXX-XXXX",autocapitalize:"characters",onInput:J=>o(J.target.value)})}),a&&u("p",{class:"err",children:a}),Do()&&u("button",{class:"btn sm ghost",onClick:async()=>{const J=await i_(1,"Família da administradora");J[0]&&o(J[0])},children:"Gerar um código para mim (administração)"}),u("div",{class:"row gap end",children:[u("button",{class:"btn ghost",onClick:n,children:"Voltar"}),u("button",{class:"btn primary",disabled:i.trim().length<6,onClick:C,children:"Continuar"})]})]}),r===1&&u("div",{class:"card",children:[u("h2",{children:"Como se chama a família?"}),u(ue,{label:"Nome da família",hint:"Aparece no topo do app. Ex.: Família Souza",children:u("input",{value:h,maxLength:40,onInput:J=>f(J.target.value)})}),u("div",{class:"row gap end",children:[u("button",{class:"btn ghost",onClick:e.demo?n:()=>s(0),children:"Voltar"}),u("button",{class:"btn primary",disabled:!h.trim(),onClick:()=>s(2),children:"Continuar"})]})]}),r===2&&u("div",{class:"card",children:[u("h2",{children:"Crianças e adolescentes"}),u("p",{class:"muted",children:"A idade define a rotina sugerida, os desafios e o jeito dos textos. Tudo pode ser mudado depois."}),m.map((J,Fe)=>u("div",{class:"kid-row",children:[u("span",{class:"dot",style:{background:J.color}}),u("b",{children:J.name}),u("span",{class:"muted",children:[Bs(J.birth,e.today)," anos"]}),u("button",{class:"icon-btn","aria-label":`Remover ${J.name}`,onClick:()=>_(m.filter((Kt,Tt)=>Tt!==Fe)),children:"✕"})]})),u("div",{class:"subcard",children:[u(ue,{label:"Nome",children:u("input",{value:g.name,maxLength:24,onInput:J=>w({...g,name:J.target.value})})}),u(ue,{label:"Data de nascimento",children:u("input",{type:"date",value:g.birth,max:e.today,onInput:J=>w({...g,birth:J.target.value})})}),u(ue,{label:"Os textos devem tratar como",children:u("div",{class:"seg",children:[["f","menina"],["m","menino"],["x","neutro"]].map(([J,Fe])=>u("button",{type:"button",class:g.gender===J?"on":"",onClick:()=>w({...g,gender:J}),children:Fe}))})}),u(ue,{label:"Cor",children:u(o_,{value:g.color,onChange:J=>w({...g,color:J})})}),u("button",{class:"btn block",disabled:!g.name.trim()||!g.birth,onClick:E,children:"Adicionar"})]}),u("div",{class:"row gap end",children:[u("button",{class:"btn ghost",onClick:()=>s(1),children:"Voltar"}),u("button",{class:"btn primary",disabled:!m.length,onClick:()=>s(3),children:"Continuar"})]})]}),r===3&&u("div",{class:"card",children:[u("h2",{children:"O que vai ter no app"}),QS.map(([J,Fe,Kt])=>u("label",{class:"toggle",children:[u("input",{type:"checkbox",checked:R[J],onChange:Tt=>A({...R,[J]:Tt.target.checked})}),u("span",{children:[u("b",{children:Fe}),u("small",{children:Kt})]})]})),u("div",{class:"row gap end",children:[u("button",{class:"btn ghost",onClick:()=>s(2),children:"Voltar"}),u("button",{class:"btn primary",onClick:()=>s(4),children:"Continuar"})]})]}),r===4&&u("div",{class:"card",children:[u("h2",{children:"Primeira temporada"}),I?u(be,{children:[u("div",{class:"season-pick",children:[I.cover&&u("img",{class:"season-cover",src:Me(I.id,I.cover),alt:"",onError:J=>J.target.style.display="none"}),u("b",{children:I.name}),u("p",{class:"muted",children:I.tagline})]}),S?u(be,{children:[u("p",{children:["Começa em ",wt(T),". Até lá, a rotina e os prêmios já funcionam."]}),u("label",{class:"toggle",children:[u("input",{type:"checkbox",checked:q,onChange:J=>$(J.target.checked)}),u("span",{children:[u("b",{children:"Começar a vila hoje"}),u("small",{children:"As peças começam a ser liberadas já, uma por dia."})]})]})]}):u("p",{children:"Começa hoje, com uma peça nova por dia."})]}):u("p",{class:"muted",children:"Carregando temporadas…"}),u("div",{class:"row gap end",children:[u("button",{class:"btn ghost",onClick:()=>s(3),children:"Voltar"}),u("button",{class:"btn primary",disabled:!I,onClick:()=>s(5),children:"Continuar"})]})]}),r===5&&u("div",{class:"card",children:b?u("p",{class:"center",children:"Preparando o mundo de vocês…"}):V?u(Nr,{title:"Repita o PIN",error:L,onDone:J=>{J===V?lt(J):(M("Os PINs não conferem. Comece de novo."),N(""))},onCancel:()=>N("")}):u(be,{children:[u(Nr,{title:"Crie um PIN de 4 números",error:L,onDone:J=>{N(J),M("")}}),u("p",{class:"muted center",children:"O PIN protege a área dos responsáveis e a saída do modo criança."})]})})]})}function au(n){const[e,t]=B(null);return ot(()=>{if(!n){t(null);return}return H.watchDoc(n,t,()=>t(null))},[n]),e}function cu(n){const[e,t]=B(null);return ot(()=>{if(!n){t(null);return}return H.watchCol(n,[],t,()=>t([]))},[n]),e}const $r=n=>{const e=ie().family;return e?`families/${e.id}/${n}`:null};function lu(){const n=Z();return n.children.length<2?null:u("div",{class:"child-tabs",role:"tablist",children:n.children.map(e=>u("button",{role:"tab","aria-selected":n.ui.child===e.id,class:n.ui.child===e.id?"on":"",onClick:()=>Te({child:e.id}),style:{"--c":e.color},children:[u(Ft,{child:e,size:30}),u("span",{children:e.name}),u(Ut,{n:e.balance||0})]}))})}function l_({child:n,kid:e}){var f,m;const t=Z(),r=ke(t.family),s=pn(t.family,t.items,t.entries,n.id,t.today),i=(f=t.family)==null?void 0:f.season,o=t.season,a=i&&o?ru(o,i,t.progress[n.id],s,t.items,n.id,t.today):null,l=Math.ceil(s.total*r.dailyGoalPct/100),h=()=>Te(e?{screen:"mundo"}:{tab:"mundo",screen:null});return u("div",{class:"card daycard",children:[u("div",{class:"daycard-top",children:[u("div",{children:[u("span",{class:"eyebrow",children:"Hoje"}),u("div",{class:"today-stars",children:[u(Ut,{n:s.dayStars,big:!0}),u("span",{class:"muted",children:["no dia · saldo ",n.balance||0]})]})]}),(a==null?void 0:a.next)&&!a.claimedToday&&u(Vt,{class:"mini",src:Me(o.id,a.next.img),emoji:a.next.emoji,alt:a.next.name}),(a==null?void 0:a.claimedToday)&&u(Vt,{class:"mini",src:Me(o.id,a.claimedToday.img),emoji:a.claimedToday.emoji,alt:a.claimedToday.name})]}),s.allDone&&u(ai,{name:"baloes",class:"daycard-decor"}),a&&o&&u(be,{children:[u("div",{class:"goal-line",children:u("span",{children:a.claimedToday?u(be,{children:["Peça do dia conquistada: ",u("b",{children:a.claimedToday.name})]}):a.canClaim?u("b",{children:"Peça do dia liberada!"}):s.goalMet?a.blockedReason:u(be,{children:["Rotina: ",s.earned," de ",l," estrelas para a ",u("b",{children:"peça do dia"})]})})}),u(Vo,{value:s.earned,max:l||1,label:"Rotina do dia",tone:s.goalMet?"gold":""}),a.canClaim&&u("button",{class:"btn primary block glow",onClick:h,children:["Buscar ",(m=a.next)==null?void 0:m.name]}),a.nextMilestone&&u("div",{class:"next-big",onClick:h,children:[u(Vt,{class:"tiny",src:Me(o.id,a.nextMilestone.item.img),emoji:a.nextMilestone.item.emoji,alt:""}),u("div",{children:[u("span",{class:"eyebrow",children:"Próxima grande conquista"}),u("b",{children:a.nextMilestone.item.name}),u("span",{class:"muted",children:[" · faltam ",a.nextMilestone.need," estrelas"]}),u(Vo,{value:a.seasonStars,max:a.nextMilestone.at,tone:"gold",label:"Próxima grande conquista"})]})]}),!a.nextMilestone&&u("p",{class:"muted small",children:"Todas as grandes conquistas da temporada foram alcançadas!"})]}),!i&&!e&&u("p",{class:"muted small",children:"Nenhuma temporada ativa. Comece uma em Responsáveis → Temporada."})]})}function XS(){const n=Z();return n.requests.length?u("div",{class:"card requests",children:[u("h3",{children:"Pedidos esperando você"}),n.requests.map(e=>{const t=n.children.find(r=>r.id===e.child);return u("div",{class:"req",children:[t&&u(Ft,{child:t,size:30}),u("span",{class:"req-emo",children:e.emoji}),u("span",{class:"req-text",children:[u("b",{children:t==null?void 0:t.name})," ",e.kind==="reward"?"quer trocar por":e.kind==="challenge"?"fez o desafio":"fez"," ",u("b",{children:e.label})," ",u("span",{class:"muted",children:["(",e.kind==="reward"?"−":"+",e.stars,")"]})]}),u("button",{class:"btn sm ghost",onClick:()=>wf(e,!1),"aria-label":"Recusar",children:"Não"}),u("button",{class:"btn sm primary",onClick:()=>wf(e,!0),children:"Sim"})]})})]}):null}const u_=n=>{const e=Number(n.slice(5,7)),t=Number(n.slice(8,10));return e===12&&t<=24?t:0};function h_({kid:n}){const e=Z(),t=u_(e.today),r=au(t?$r(`advent/${e.today.slice(0,4)}-${String(t).padStart(2,"0")}`):null);return!ke(e.family).modules.advent||!t?null:u("button",{class:"card advent-card",onClick:()=>Te({screen:"advento"}),children:[u("span",{class:"advent-num",children:t}),u("span",{children:[u("span",{class:"eyebrow",children:"Calendário do Advento"}),u("b",{children:r!=null&&r.exists?"Portinha de hoje aberta":"Portinha de hoje esperando"}),u("span",{class:"muted small",children:r!=null&&r.exists?"Toque para rever a história.":n?"Toque para abrir!":"Abram juntos e ganhem estrelas."})]})]})}function d_(){const n=Z(),e=ft(iS),t=n.today.slice(0,4),r=u_(n.today),[s,i]=B(r||null),o=ZS(t);if(!e)return u("p",{class:"muted center",children:"Carregando…"});const a=s?e.doors[s-1]:null,l=s?o.has(s):!1;return u("div",{class:"page",children:[u("h2",{class:"page-title",children:"Calendário do Advento"}),!r&&u("p",{class:"muted",children:"As portinhas abrem de 1 a 24 de dezembro, uma por dia."}),u("div",{class:"advent-grid",children:e.doors.map((h,f)=>{const m=f+1,_=r>=m;return u("button",{class:"door"+(o.has(m)?" open":"")+(_?"":" locked"),disabled:!_,onClick:()=>i(m),"aria-label":`Portinha ${m}`,children:o.has(m)?u("span",{children:h.emo}):u("span",{children:m})})})}),a&&s&&u(Et,{title:`Portinha ${s}`,onClose:()=>i(null),children:[u(Vt,{class:"wide-art",src:mt(`advento/${String(s).padStart(2,"0")}.jpg`),emoji:a.emo,alt:""}),u("h3",{children:a.t}),u("p",{class:"ref",children:a.ref}),u("p",{class:"story",children:a.s}),u("div",{class:"activity",children:[u("span",{class:"eyebrow",children:"Atividade em família"}),u("p",{children:a.a})]}),l?u("p",{class:"muted center",children:"Portinha aberta. As estrelas já foram entregues."}):u("button",{class:"btn primary block",onClick:async()=>{await vS(s,a.pts,a.t,a.emo)},children:["Abrir a portinha · +",a.pts," para cada criança"]})]})]})}function ZS(n){const e=cu($r("advent"));return new Set((e||[]).filter(t=>t.id.startsWith(n)).map(t=>Number(t.id.slice(5))))}function f_({child:n,kid:e}){const t=Z(),r=ft(oS);if(!ke(t.family).modules.challenges||!r)return null;const s=pS(n,t.today),i=Vr(r.lists[s]||[],n.id+":desafio",t.today);if(!i)return null;const o=t.entries.some(f=>f.child===n.id&&f.day===t.today&&f.kind==="challenge"&&!f.undone),a=t.requests.some(f=>f.child===n.id&&f.kind==="challenge"&&f.day===t.today),l=xr(i.t,n.gender),h=()=>e&&ke(ie().family).kidMarks==="pedido"?su(n.id,"challenge",l,i.e,i.s):t_(n.id,"challenge",l,i.e,i.s,`Desafio cumprido! +${i.s}`);return u("div",{class:"card challenge"+(o?" done":""),children:[u("span",{class:"challenge-emo",children:u(zs,{label:l,emoji:i.e,gender:n.gender,size:52})}),u("div",{class:"grow",children:[u("span",{class:"eyebrow",children:["Desafio do dia · ",r.bands[s]]}),u("p",{children:l})]}),o?u("span",{class:"pill gold",children:"Feito!"}):a?u("span",{class:"pill",children:"Esperando"}):u("button",{class:"btn sm primary",onClick:h,children:["+",i.s]})]})}const No=n=>mS(n,ie().today),uu=[["manha","Manhã"],["tarde","Tarde"],["noite","Noite"],["livre","Ao longo do dia"]];function e0(){const n=Z(),e=n.children.find(t=>t.id===n.ui.child)||n.children[0];return e?u("div",{class:"page",children:[u(lu,{}),u(XS,{}),u(l_,{child:e}),u(h_,{}),u(m_,{child:e}),u(f_,{child:e}),u(t0,{child:e}),u(n0,{child:e})]}):u("div",{class:"page",children:u("p",{class:"muted",children:"Cadastre uma criança em Responsáveis."})})}function m_({child:n,onTap:e}){const t=Z(),r=pn(t.family,t.items,t.entries,n.id,t.today);if(!r.tasks.length)return u("div",{class:"card",children:[u("h3",{children:"Rotina"}),u(ai,{name:"acenando",class:"empty-decor"}),u("p",{class:"muted",children:["Nenhuma tarefa para ",n.name,". Adicione em Responsáveis → Rotina."]})]});const s=a=>nu(t.entries,n.id,t.today).find(l=>l.kind==="task"&&l.itemId===a),i=e||((a,l)=>{if(l){const h=s(a.id);h&&e_(h)}else qs(n.id,a)}),o=new Set(t.requests.filter(a=>a.child===n.id&&a.kind==="task").map(a=>a.itemId));return u("div",{class:"card routine",children:[u("div",{class:"row between",children:[u("h3",{children:"Rotina"}),u("span",{class:"muted small",children:[r.done.size," de ",r.tasks.length]})]}),uu.map(([a,l])=>{const h=r.tasks.filter(f=>(f.period||"livre")===a);return h.length?u("div",{class:"period",children:[u("span",{class:"eyebrow",children:l}),h.map(f=>{const m=r.done.has(f.id);return u("button",{class:"task"+(m?" done":"")+(o.has(f.id)?" pend":""),onClick:()=>i(f,m),"aria-pressed":m,children:[u("span",{class:"check","aria-hidden":"true",children:m?"✓":""}),u(zs,{label:f.label,emoji:f.emoji,clip:f.clip,gender:n.gender,size:e?56:44}),u("span",{class:"task-label",children:xr(f.label,n.gender)}),o.has(f.id)&&!m?u("span",{class:"pill",children:"pedido"}):u("span",{class:"task-stars",children:["+",f.stars]})]})})]}):null})]})}function t0({child:n}){const e=Z(),t=$s(e.items,n.id,"good"),r=$s(e.items,n.id,"bad"),[s,i]=B(!1),[o,a]=B(""),[l,h]=B("");return u("div",{class:"card",children:[u("h3",{children:"Atitudes"}),u("div",{class:"chips",children:t.map(f=>u("button",{class:"chip good",onClick:()=>qs(n.id,f),children:[u(zs,{label:f.label,emoji:f.emoji,clip:f.clip,gender:n.gender,size:30})," ",xr(f.label,n.gender)," ",u("b",{children:["+",f.stars]})]}))}),r.length>0&&u(be,{children:[u("span",{class:"eyebrow",children:"Combinados não cumpridos"}),u("div",{class:"chips",children:r.map(f=>u("button",{class:"chip bad",onClick:()=>qs(n.id,f),children:[u(zs,{label:f.label,emoji:f.emoji,clip:f.clip,gender:n.gender,size:30})," ",xr(f.label,n.gender)," ",u("b",{children:["−",f.stars]})]}))})]}),u("div",{class:"row gap wrap",children:[u("button",{class:"btn sm ghost",onClick:()=>i(!0),children:"Ajuste manual"}),ke(e.family).modules.calm&&u("button",{class:"btn sm ghost",onClick:()=>Te({screen:"calma",screenArg:n.id}),children:"Cantinho da calma"})]}),s&&u(Et,{title:`Ajuste para ${n.name}`,onClose:()=>i(!1),children:[u(ue,{label:"Estrelas (use − para tirar)",children:u("input",{type:"number",inputMode:"numeric",value:o,onInput:f=>a(f.target.value)})}),u(ue,{label:"Motivo",children:u("input",{value:l,maxLength:60,onInput:f=>h(f.target.value)})}),u("button",{class:"btn primary block",disabled:!Number(o),onClick:()=>{gS(n.id,Math.round(Number(o)),l),i(!1),a(""),h("")},children:"Registrar"}),u("p",{class:"muted small",children:"Ajustes mexem no saldo, mas não contam para a vila."})]})]})}function n0({child:n,day:e}){const t=Z(),r=e||t.today,s=t.entries.filter(i=>i.child===n.id&&i.day===r).slice().reverse();return s.length?u("div",{class:"card log",children:[u("h3",{children:"Registro do dia"}),s.map(i=>u("div",{class:"log-row"+(i.undone?" undone":""),children:[u("span",{children:i.emoji}),u("span",{class:"grow",children:i.label}),u("b",{class:i.stars<0?"neg":"pos",children:[i.stars>0?"+":"",i.stars]}),!i.undone&&u("button",{class:"link small",onClick:()=>e_(i),children:"desfazer"})]}))]}):null}const Ts=(n,e)=>e[n.id]||n.slot;function r0({season:n,it:e,slot:t,fresh:r,onClick:s,selected:i}){const[o,a]=B("load"),l=n.scene.w/n.scene.h,h={left:`${t.x-t.w/2}%`,width:`${t.w}%`,top:`${t.y-t.w*l}%`,zIndex:Math.round(t.y*10)};return u("button",{type:"button",class:"piece"+(r?" fresh":"")+(i?" sel":"")+(o==="miss"?" miss":""),style:h,onClick:s,"aria-label":e.name,tabIndex:s?0:-1,"data-id":e.id,children:[o!=="miss"&&u("img",{src:Me(n.id,e.img),alt:"",draggable:!1,onLoad:()=>a("ok"),onError:()=>a("miss")}),o==="miss"&&u("span",{class:"piece-emoji",style:{fontSize:`${t.w*.62}cqw`},children:e.emoji})]})}function hu({season:n,items:e,slots:t,fresh:r,onPick:s,selected:i,children:o}){const[a,l]=B(!0);return u("div",{class:"scene",style:{aspectRatio:`${n.scene.w} / ${n.scene.h}`},children:[a?u("img",{class:"scene-bg",src:Me(n.id,n.images.background),alt:"",onError:()=>l(!1),draggable:!1}):u("div",{class:"scene-bg fallback","aria-hidden":"true",children:[u("span",{class:"moon"}),u("span",{class:"hill h1"}),u("span",{class:"hill h2"}),u("span",{class:"snow"})]}),e.map(h=>u(r0,{season:n,it:h,slot:Ts(h,t),fresh:r===h.id,selected:i===h.id,onClick:s?()=>s(h):void 0},h.id)),o]})}const bf=n=>new Promise(e=>{const t=new Image;t.onload=()=>e(t),t.onerror=()=>e(null),t.src=n});async function s0(n,e,t,r=360){const s=r,i=Math.round(r*n.scene.h/n.scene.w),o=document.createElement("canvas");o.width=s,o.height=i;const a=o.getContext("2d"),l=await bf(Me(n.id,n.images.background));if(l)a.drawImage(l,0,0,s,i);else{const f=a.createLinearGradient(0,0,0,i);f.addColorStop(0,"#1F2E4A"),f.addColorStop(.42,"#3B4E6E"),f.addColorStop(.45,"#E9EEF2"),f.addColorStop(1,"#FBF6EE"),a.fillStyle=f,a.fillRect(0,0,s,i)}const h=[...e].sort((f,m)=>Ts(f,t).y-Ts(m,t).y);for(const f of h){const m=Ts(f,t),_=m.w/100*s,g=m.x/100*s-_/2,w=m.y/100*i-_,R=await bf(Me(n.id,f.img));R?a.drawImage(R,g,w,_,_):(a.font=`${Math.round(_*.55)}px serif`,a.textAlign="center",a.textBaseline="bottom",a.fillText(f.emoji,m.x/100*s,m.y/100*i))}return o.toDataURL("image/jpeg",.72)}function i0(){const n=Z(),e=n.children.find(t=>t.id===n.ui.child)||n.children[0];return u("div",{class:"page",children:[u(lu,{}),e&&u(p_,{child:e})]})}function p_({child:n,kid:e}){var L;const t=Z(),r=t.season,s=(L=t.family)==null?void 0:L.season,[i,o]=B(null),[a,l]=B(null),[h,f]=B(null),m=t.progress[n.id],_=pn(t.family,t.items,t.entries,n.id,t.today),g=r&&s?ru(r,s,m,_,t.items,n.id,t.today):null,w=g?g.milestones.filter(M=>M.reached).length:0;if(ot(()=>{!g||!m||w<=(m.seenMilestones||0)||f(g.milestones[w-1].item)},[w,m==null?void 0:m.seenMilestones,n.id]),!r||!s||!g)return u("div",{class:"card",children:[u("h3",{children:"Nenhuma temporada ativa"}),u("p",{class:"muted",children:"As vilas das temporadas anteriores estão no álbum."}),u("button",{class:"btn block",onClick:()=>Te({screen:"album",screenArg:n.id}),children:"Abrir o álbum de aventuras"})]});const R=ia(s.startDay,s.endDay)+1,A=async()=>{if(!g.next)return;const M=g.next;await yS(n.id,M.id)&&(l(M.id),setTimeout(()=>o(M),900),setTimeout(()=>l(null),2500))},V=No(n),N=ke(t.family).modules.english&&n.english!==!1;return u(be,{children:[u("div",{class:"world-head",children:[u("div",{children:[u("span",{class:"eyebrow",children:g.dayN<1?`Começa em ${-g.dayN+1} dia(s)`:Oc(s,t.today)?"Temporada encerrada":`Dia ${g.dayN} de ${R}`}),u("h2",{children:r.name})]}),u("div",{class:"world-stars",children:[u(Ut,{n:g.seasonStars,big:!0}),u("span",{class:"muted small",children:"na temporada"})]})]}),u(hu,{season:r,items:Xg(r,g),slots:t.slots,fresh:a,onPick:o}),g.canClaim?u("button",{class:"btn primary block glow claim",onClick:A,children:["Conquistar a peça do dia: ",g.next.name," ",g.next.emoji]}):u("p",{class:"claim-note",children:g.claimedToday?`Peça de hoje: ${g.claimedToday.name}. Amanhã tem mais!`:g.blockedReason==="Falta completar a rotina de hoje."?`Complete ${ke(t.family).dailyGoalPct}% da rotina para ganhar a peça de hoje (agora: ${_.pct}%).`:g.blockedReason}),g.nextMilestone&&u("div",{class:"card next-big-card",children:[u(Vt,{class:"tiny",src:Me(r.id,g.nextMilestone.item.img),emoji:g.nextMilestone.item.emoji,alt:""}),u("div",{class:"grow",children:[u("span",{class:"eyebrow",children:"Próxima grande conquista"}),u("b",{children:g.nextMilestone.item.name}),u(Vo,{value:g.seasonStars,max:g.nextMilestone.at,tone:"gold"}),u("span",{class:"muted small",children:[g.seasonStars," de ",g.nextMilestone.at," estrelas da temporada"]})]})]}),u("div",{class:"card",children:[u("div",{class:"row between",children:[u("h3",{children:"Coleção"}),u("span",{class:"muted small",children:[g.dailyCount," de ",Mc(r).length," peças"]})]}),u("div",{class:"collection",children:r.items.map(M=>{const q=g.milestones.find(v=>v.item.id===M.id),$=M.kind==="daily"?g.unlocked.has(M.id):!!(q!=null&&q.reached),b=Mc(r).indexOf(M)+1;return u("button",{class:"coll"+($?" has":"")+(M.kind==="milestone"?" big":""),onClick:()=>$&&o(M),disabled:!$,"aria-label":$?M.name:"Peça bloqueada",children:$?u(Vt,{src:Me(r.id,M.img),emoji:M.emoji,alt:M.name}):u("span",{class:"lock",children:M.kind==="milestone"?`★ ${q==null?void 0:q.at}`:b})})})})]}),u("button",{class:"btn ghost block",onClick:()=>Te({screen:"album",screenArg:n.id}),children:"Álbum de aventuras"}),Oc(s,t.today)&&!e&&u("div",{class:"card notice",children:u("p",{children:"A temporada terminou. Guarde as vilas no álbum em Responsáveis → Temporada."})}),i&&u(o0,{it:i,season:r.id,lvl:V,showEn:N,onClose:()=>o(null)}),h&&u(Et,{title:"Grande conquista!",onClose:()=>{f(null),Ef(n.id,w)},children:[u("div",{class:"celebrate",children:[u(Vt,{class:"hero-art",src:Me(r.id,h.img),emoji:h.emoji,alt:h.name}),u("h3",{children:h.name}),u("p",{children:h.learn[V]})]}),u("button",{class:"btn primary block",onClick:()=>{f(null),Ef(n.id,w)},children:"Que lindo!"})]})]})}function o0({it:n,season:e,lvl:t,showEn:r,onClose:s}){const i=(o,a)=>{try{const l=new SpeechSynthesisUtterance(o);l.lang=a,speechSynthesis.cancel(),speechSynthesis.speak(l)}catch{}};return u(Et,{title:n.name,onClose:s,children:u("div",{class:"piece-info",children:[u(Vt,{class:"hero-art",src:Me(e,n.img),emoji:n.emoji,alt:n.name}),u("p",{class:"learn",children:n.learn[t]}),u("button",{class:"link small",onClick:()=>i(n.learn[t],"pt-BR"),children:"Ouvir"}),r&&n.en&&u("div",{class:"english",children:[u("span",{class:"eyebrow",children:"Em inglês"}),u("button",{class:"en-word",onClick:()=>i(n.en.w,"en-US"),children:[n.en.w," 🔊"]}),u("button",{class:"en-ex",onClick:()=>i(n.en.ex,"en-US"),children:n.en.ex})]})]})})}const g_=()=>pt("avatar/acessorios.json"),ci=n=>{var e;return!!((e=n==null?void 0:n.plan)!=null&&e.avatar)},Af=1.35,Sf=[[15,98,1],[85,98,1],[9,80,.82],[91,80,.82],[32,99.5,.62],[68,99.5,.62],[20,66,.66],[80,66,.66],[8,99.5,.62],[92,99.5,.62],[27,83,.6],[73,83,.6]],Rf=[[14,34,1],[86,30,1],[72,13,.8]],a0={s:.15,m:.24,l:.3};function __({child:n,toys:e,preview:t,accessories:r}){var m;const s=au($r(`avatars/${n.id}`)),i=(m=s==null?void 0:s.data)==null?void 0:m.img,o=e.map(_=>r.find(g=>g.id===_)).filter(Boolean);t&&!o.includes(t)&&o.push(t);const a={l:0,m:1,s:2},l=o.filter(_=>_.zone==="chao").slice(-Sf.length).map((_,g)=>({a:_,i:g})).sort((_,g)=>a[_.a.size]-a[g.a.size]||_.i-g.i).map(_=>_.a),h=o.filter(_=>_.zone==="ceu").slice(-Rf.length),f=(_,[g,w,R])=>{const A=a0[_.size]*R*100,V=A/Af;return u("div",{class:"toy"+((t==null?void 0:t.id)===_.id?" preview":""),style:{left:`${g-V*.6}%`,top:`${w-A}%`,width:`${V*1.2}%`,height:`${A}%`,zIndex:Math.round(w)},children:u("img",{src:mt("avatar/"+_.img),alt:_.name})})};return u("div",{class:"avatar-stage",style:{aspectRatio:`${Af} / 1`},children:[h.map((_,g)=>f(_,Rf[g])),i?u("img",{class:"av-base",src:i,alt:n.name}):s&&u("div",{class:"av-missing",children:["🧍",u("small",{children:"Sem avatar ainda"})]}),l.map((_,g)=>f(_,Sf[g]))]})}function y_({child:n,kid:e}){var w,R;const t=Z(),r=ft(g_),[s,i]=B(null),[o,a]=B(null);if(!ci(t.family))return u("p",{class:"muted center",children:"Avatares não estão ativos nesta família."});if(!r)return u("p",{class:"muted center",children:"Carregando…"});const l=((w=n.avatar)==null?void 0:w.owned)||[],h=((R=n.avatar)==null?void 0:R.hidden)||[],f=l.filter(A=>!h.includes(A)),m=n.balance||0,_=A=>{if(l.includes(A.id)){LS(n.id,A.id,!h.includes(A.id)),i(null);return}i(A),m>=A.price&&a(A)},g=[...new Set(r.items.map(A=>A.group))];return u("div",{class:"page avatar-page",children:[u("div",{class:"row between",children:[u("h2",{class:"page-title",children:e?"Meu avatar":`Avatar de ${n.name}`}),u("span",{class:"balance",children:u(Ut,{n:m})})]}),u(__,{child:n,toys:f,preview:s,accessories:r.items}),u("p",{class:"muted small center",children:s?`${s.name}: ${m>=s.price?"toque em Comprar":`faltam ${s.price-m} estrelas`}`:"Toque num brinquedo para ver como fica. Os que já são seus, toque para guardar ou mostrar."}),g.map(A=>u(be,{children:[u("h3",{class:"acc-group",children:A}),u("div",{class:"acc-grid",children:r.items.filter(V=>V.group===A).map(V=>{const N=l.includes(V.id),L=N&&!h.includes(V.id);return u("button",{class:"acc"+(N?" has":"")+(L?" on":"")+((s==null?void 0:s.id)===V.id?" pv":""),onClick:()=>_(V),children:[u("img",{src:mt("avatar/"+V.img),alt:"",loading:"lazy"}),u("span",{class:"acc-name",children:V.name}),N?u("span",{class:"pill gold",children:L?"na cena":"guardado"}):u("span",{class:"acc-price"+(m>=V.price?"":" far"),children:u(Ut,{n:V.price})})]})})})]})),o&&u(aa,{text:`Comprar ${o.name} por ${o.price} estrelas?`,yes:"Comprar",onClose:()=>{a(null),i(null)},onYes:async()=>{await MS(n,o),i(null)}})]})}function c0(){const n=Z(),e=n.children.find(t=>t.id===n.ui.child)||n.children[0];return u("div",{class:"page",children:[u(lu,{}),e&&u(be,{children:[ci(n.family)&&u("button",{class:"card avatar-link",onClick:()=>Te({screen:"avatar",screenArg:e.id}),children:[u("span",{children:"✨"}),u("span",{class:"grow",children:[u("b",{children:["Avatar de ",e.name]}),u("small",{class:"muted",children:"Brinquedos para comprar com estrelas"})]}),"›"]}),u(v_,{child:e}),u(l0,{child:e})]})]})}function v_({child:n,kid:e}){const t=Z(),[r,s]=B(null),i=$s(t.items,n.id,"reward").slice().sort((l,h)=>l.stars-h.stars),o=n.balance||0,a=new Set(t.requests.filter(l=>l.child===n.id&&l.kind==="reward").map(l=>l.itemId));return u("div",{class:"card prizes",children:[u("div",{class:"row between",children:[u("h3",{children:"Prêmios"}),u("span",{class:"balance",children:["Saldo ",u(Ut,{n:o})]})]}),!i.length&&u("p",{class:"muted",children:"Nenhum prêmio cadastrado ainda."}),i.map(l=>{const h=o>=l.stars;return u("div",{class:"prize"+(h?" can":""),children:[u("span",{class:"prize-emo",children:u(zs,{label:l.label,emoji:l.emoji,clip:l.clip,gender:n.gender,size:50})}),u("div",{class:"grow",children:[u("b",{children:l.label}),!h&&u(be,{children:[u(Vo,{value:o,max:l.stars}),u("span",{class:"muted small",children:["faltam ",l.stars-o]})]})]}),a.has(l.id)?u("span",{class:"pill",children:"pedido"}):u("button",{class:"btn sm "+(h?"primary":"ghost"),disabled:!h,onClick:()=>s(l),children:u(Ut,{n:l.stars})})]})}),r&&u(aa,{text:e?`Pedir ${r.label} por ${r.stars} estrelas? Um adulto vai confirmar.`:`Trocar ${r.stars} estrelas de ${n.name} por ${r.label}?`,yes:e?"Pedir":"Trocar",onClose:()=>s(null),onYes:()=>e?su(n.id,"reward",r.label,r.emoji,r.stars,r.id):_S(n,r)})]})}function l0({child:n}){const t=Z().entries.filter(s=>s.child===n.id&&!s.undone),r=[...new Set(t.map(s=>s.day))].sort().reverse();return r.length?u("div",{class:"card log",children:[u("h3",{children:"Últimos 7 dias"}),r.map(s=>{const i=t.filter(a=>a.day===s),o=i.reduce((a,l)=>a+l.stars,0);return u("details",{children:[u("summary",{children:[u("span",{class:"grow",children:wt(s,!0)}),u("b",{class:o<0?"neg":"pos",children:[o>0?"+":"",o]})]}),i.map(a=>u("div",{class:"log-row",children:[u("span",{children:a.emoji}),u("span",{class:"grow",children:a.label}),u("b",{class:a.stars<0?"neg":"pos",children:[a.stars>0?"+":"",a.stars]})]}))]})}),u("p",{class:"muted small",children:["Total da vida de ",n.name,": ",n.lifetime||0," estrelas."]})]}):null}const du=n=>{try{speechSynthesis.cancel();const e=new SpeechSynthesisUtterance(n);e.lang="pt-BR",e.rate=.95,speechSynthesis.speak(e)}catch{}},u0={p:"Para os pequenos",m:"Para os do meio",g:"Para os maiores"};function h0(n,e,t){if(!n.length)return null;if(t){const l=ia(t,e);if(l<0)return{story:n[0],preview:!0,idx:0};if(l<n.length)return{story:n[l],preview:!1,idx:l};const h=Vr(n,"releitura",e);return{story:h,preview:!1,idx:n.indexOf(h)}}const r=e.slice(5),s=n.findIndex(l=>l.date===r);if(s>=0)return{story:n[s],preview:!1,idx:s};const i=n[0].date,o=n[n.length-1].date;if(r>o&&r<i&&r>="07-01")return{story:n[0],preview:!0,idx:0};const a=Vr(n,"releitura",e);return{story:a,preview:!1,idx:n.indexOf(a)}}function I_({only:n}){const e=Z(),t=ke(e.family).modules,r=ft(Wg),s=ft(rS),i=ft(sS),o=n?[n]:e.children,a=ke(e.family),l=r?h0(r.stories,e.today,a.nightStart):null,[h,f]=B(null),m=r&&l?h==null||h===l.idx?l:{story:r.stories[h],preview:!1,idx:h}:null,_=[...new Set(o.map(No))],[g,w]=B(0),R=A=>{f(A),w(0)};return u("div",{class:"page night",children:[u("header",{class:"night-head",children:[u("span",{class:"eyebrow",children:"Hora de dormir"}),u("h2",{children:t.christian?"Devocional da noite":"Fechamento do dia"})]}),t.christian&&m&&u("article",{class:"card story",children:[m.preview&&u("p",{class:"pill",children:["Prévia · a série começa em ",a.nightStart?wt(a.nightStart):"1º de dezembro"]}),h!=null&&h!==l.idx&&u("p",{class:"pill",children:["Outra noite · ",u("button",{class:"link small",onClick:()=>R(l.idx),children:"voltar para a de hoje"})]}),u("span",{class:"eyebrow",children:[r.title," · noite ",m.story.n]}),u("h3",{children:m.story.title}),u("p",{class:"ref",children:m.story.ref}),m.story.parts.map((A,V)=>V<=g&&u("section",{class:"story-part",children:[u(Vt,{class:"story-art",src:mt(`noite/natal/${String(m.story.n).padStart(2,"0")}-${V+1}.jpg`),emoji:["📖","✨","🌙"][V]||"✨",alt:""}),A.split(`
`).map(N=>u("p",{children:N}))]})),g<m.story.parts.length-1?u("button",{class:"btn primary block",onClick:()=>w(g+1),children:"Continuar a história"}):u(be,{children:[u("blockquote",{class:"verse",children:[m.story.verse,u("cite",{children:m.story.ref})]}),_.map(A=>u("div",{class:"ask",children:[u("span",{class:"eyebrow",children:_.length>1?u0[A]:"Para conversar"}),u("p",{children:m.story.ask[A]})]})),u("div",{class:"prayer",children:[u("span",{class:"eyebrow",children:"Oração"}),u("p",{children:m.story.prayer})]})]}),u("button",{class:"link small",onClick:()=>du([m.story.title,...m.story.parts.slice(0,g+1)].join(". ")),children:"Ouvir em voz alta"}),u("div",{class:"row between night-nav",children:[u("button",{class:"link small",disabled:m.idx<=0,onClick:()=>R(m.idx-1),children:"‹ Noite anterior"}),u("button",{class:"link small",disabled:m.idx>=r.stories.length-1,onClick:()=>R(m.idx+1),children:"Próxima noite ›"})]})]}),s&&o.map(A=>u(d0,{child:A,msgs:s,others:o,christian:t.christian})),t.christian&&i&&!n&&u(f0,{prayers:i.parents,names:e.children.map(A=>A.name),day:e.today}),t.christian&&i&&u(m0,{list:i.kids,day:e.today})]})}function Pf(n,e){const t=nu(n.entries,e.id,n.today),r=pn(n.family,n.items,n.entries,e.id,n.today),s=t.filter(o=>o.kind==="bad").length,i=t.filter(o=>o.kind==="good"||o.kind==="challenge"||o.kind==="calm").length+r.done.size;return s?i>=s*2||r.goalMet?"recomeco":"dificil":r.goalMet?"otimo":"bom"}function d0({child:n,msgs:e,others:t,christian:r}){var m,_;const s=Z(),i=Pf(s,n),o=No(n),a=((m=e[r?i:"neutro_"+i])==null?void 0:m[o])||((_=e[i])==null?void 0:_[o])||[],l=(qg(s.today+i+o)+t.filter(g=>No(g)===o&&Pf(s,g)===i).findIndex(g=>g.id===n.id))%Math.max(1,a.length),h=a.length?xr(a[l].replace(/\{nome\}/g,n.name),n.gender):"",f=pn(s.family,s.items,s.entries,n.id,s.today);return u("div",{class:"card child-night",style:{"--c":n.color},children:[u("div",{class:"row gap",children:[u(Ft,{child:n,size:40}),u("div",{children:[u("b",{children:n.name}),u("span",{class:"muted small",children:[" · ",f.dayStars>=0?"+":"",f.dayStars," hoje · rotina ",f.pct,"%"]})]})]}),h&&u("p",{class:"jesus-msg",children:[r&&u("span",{class:"eyebrow",children:"Uma palavra de Jesus para você"}),h]}),h&&u("button",{class:"link small",onClick:()=>du(h),children:"Ouvir"})]})}function f0({prayers:n,names:e,day:t}){const r=Vr(n,"pais",t);if(!r)return null;const s=e.length<=1?e[0]||"nossos filhos":e.slice(0,-1).join(", ")+" e "+e[e.length-1];return u("div",{class:"card parent-prayer",children:[u("span",{class:"eyebrow",children:"Oração dos pais"}),u("p",{children:r[0].replace(/\{filhos\}/g,s)}),u("cite",{children:r[1]})]})}function m0({list:n,day:e}){const t=Vr(n,"criancas",e);return t?u("div",{class:"card kid-prayer",children:[u("span",{class:"eyebrow",children:"Oração para repetir juntos"}),u("h4",{children:t.t}),t.l.map(r=>u("p",{children:r})),u("button",{class:"link small",onClick:()=>du(t.l.join(" ")),children:"Ouvir"})]}):null}const Qa=5,Ja=3,Cf=2;function w_({childId:n}){const e=Z(),t=ft(aS),[r,s]=B(n||(e.ui.kidMode?e.ui.kidId:null)),i=e.children.find(o=>o.id===r);return t?i?u(p0,{child:i,data:t}):u("div",{class:"page calm",children:[u("h2",{class:"page-title",children:"Cantinho da calma"}),u("p",{children:"Quem precisa de um momento de calma?"}),u("div",{class:"kid-pick",children:e.children.map(o=>u("button",{onClick:()=>s(o.id),children:[u(Ft,{child:o,size:64}),u("span",{children:o.name})]}))})]}):u("p",{class:"muted center",children:"Carregando…"})}function p0({child:n,data:e}){const t=Z(),[r,s]=B("feel"),[i,o]=B(null),[a,l]=B(!1),[h,f]=B(0),[m,_]=B("in");ot(()=>{if(r!=="breathe")return;const V=setInterval(()=>_(N=>(N==="out"&&f(L=>L+1),N==="in"?"out":"in")),4e3);return()=>clearInterval(V)},[r]),ot(()=>{h>=Qa&&s("tool")},[h]);const g=t.entries.filter(V=>V.child===n.id&&V.day===t.today&&V.kind==="calm"&&!V.undone).length,w=V=>{s("done"),l(g<Cf),g<Cf&&t_(n.id,"calm",`Cantinho da calma: ${V}`,"🫧",Ja,`+${Ja} por cuidar das emoções`)},R=ke(t.family).modules.christian?Vr(e.verses,n.id,t.today):null,A=e.feelings.find(V=>V.id===i);return u("div",{class:"page calm",children:[u("h2",{class:"page-title",children:"Cantinho da calma"}),r==="feel"&&u(be,{children:[u("p",{class:"calm-q",children:["Como você está se sentindo, ",n.name,"?"]}),u("div",{class:"feelings",children:e.feelings.map(V=>u("button",{onClick:()=>{o(V.id),s("breathe")},children:[u("span",{children:V.emo}),n.gender==="f"?V.f:V.m]}))})]}),r==="breathe"&&u("div",{class:"breathe",children:[u("p",{class:"muted",children:["Tudo bem se sentir ",A?(n.gender==="f"?A.f:A.m).toLowerCase():"assim",". Vamos respirar juntos."]}),u("div",{class:"bubble "+m,children:u("span",{children:m==="in"?"Puxa o ar…":"Solta devagar…"})}),u("p",{class:"muted small",children:[Math.min(h+1,Qa)," de ",Qa]}),u("button",{class:"link",onClick:()=>s("tool"),children:"Pular"})]}),r==="tool"&&u(be,{children:[u("p",{class:"calm-q",children:"O que pode ajudar agora?"}),u("div",{class:"tools",children:e.tools.map(V=>u("button",{onClick:()=>w(V.t),children:[u("span",{children:V.emo}),V.t]}))})]}),r==="done"&&u("div",{class:"card center",children:[u("div",{class:"big-emo",children:"🫧"}),u("h3",{children:"Você cuidou do seu coração."}),R&&u("p",{class:"verse-small",children:R}),u("p",{class:"muted small",children:a?`+${Ja} estrelas`:"As estrelas do cantinho já foram ganhas hoje, mas a calma vale sempre."}),u("button",{class:"btn primary",onClick:()=>Te({screen:null}),children:"Voltar"})]})]})}function E_({childId:n}){var a;const e=Z(),t=cu($r("album")),[r,s]=B(null),i=(t||[]).map(l=>({id:l.id,...l.data})).filter(l=>!n||l.child===n).sort((l,h)=>h.createdAt-l.createdAt),o=n?(a=e.children.find(l=>l.id===n))==null?void 0:a.name:"";return u("div",{class:"page",children:[u("h2",{class:"page-title",children:["Álbum de aventuras",o?` de ${o}`:""]}),t&&!i.length&&u(jS,{emoji:"📔",title:"O álbum ainda está vazio",children:u("p",{class:"muted",children:"Quando uma temporada termina, a vila de cada criança fica guardada aqui para sempre."})}),u("div",{class:"album-grid",children:i.map(l=>u("button",{class:"album-card",onClick:()=>s(l),children:[l.thumb?u("img",{src:l.thumb,alt:""}):u("span",{class:"album-ph",children:"🏘️"}),u("span",{class:"album-meta",children:[u("b",{children:l.seasonName}),u("span",{class:"muted small",children:[l.childName," · ",wt(l.from)," a ",wt(l.to)]}),u(Ut,{n:l.seasonStars})]})]}))}),r&&u(g0,{a:r,onClose:()=>s(null)})]})}function g0({a:n,onClose:e}){const t=Z(),r=ft(()=>oa(n.seasonId),[n.seasonId]);return u(Et,{title:`${n.seasonName} · ${n.childName}`,onClose:e,wide:!0,children:[r?u(hu,{season:r,items:r.items.filter(s=>n.items.includes(s.id)),slots:t.slots}):n.thumb?u("img",{class:"album-full",src:n.thumb,alt:""}):null,u("p",{class:"muted center",children:[n.items.length," peças · ",n.seasonStars," estrelas · ",wt(n.from)," a ",wt(n.to)]})]})}function _0(){const n=Z(),[e,t]=B(!1),[r,s]=B(""),i=n.children.find(h=>h.id===n.ui.kidId),a=e&&u(Et,{title:"Área dos adultos",onClose:()=>{t(!1),s("")},children:u(Nr,{title:"Digite o PIN",error:r,onDone:async h=>{await n_(h)?(t(!1),s(""),Te({kidMode:!1,kidId:null,screen:null})):s("PIN incorreto")}})});if(!i)return u("div",{class:"kid page",children:[u(ai,{name:"turma",class:"hero-decor"}),u("h1",{class:"kid-title",children:"Quem está aí?"}),u("div",{class:"kid-pick",children:n.children.map(h=>u("button",{onClick:()=>Te({kidId:h.id,screen:null}),children:[u(Ft,{child:h,size:84}),u("span",{children:h.name})]}))}),u("button",{class:"link",onClick:()=>t(!0),children:"Sou adulto"}),a]});const l=n.ui.screen;return u("div",{class:"kid",style:{"--c":i.color},children:[u("header",{class:"kid-head",children:[l?u("button",{class:"icon-btn",onClick:()=>Te({screen:null}),"aria-label":"Voltar",children:"←"}):u("button",{class:"kid-me",onClick:()=>Te({kidId:null}),"aria-label":"Trocar de criança",children:u(Ft,{child:i,size:40})}),u("div",{class:"kid-hello",children:u("b",{children:l?"":`Oi, ${i.name}!`})}),u(Ut,{n:i.balance||0,big:!0}),u("button",{class:"icon-btn",onClick:()=>t(!0),"aria-label":"Sair do modo criança",children:"🔒"})]}),u("main",{class:"page",children:[!l&&u(y0,{}),l==="mundo"&&u(p_,{child:i,kid:!0}),l==="premios"&&u(v_,{child:i,kid:!0}),l==="noite"&&u(I_,{only:i}),l==="calma"&&u(w_,{childId:i.id}),l==="advento"&&u(d_,{}),l==="album"&&u(E_,{childId:i.id}),l==="avatar"&&u(y_,{child:i,kid:!0})]}),a]})}function y0(){const n=Z(),e=n.children.find(i=>i.id===n.ui.kidId),t=ke(n.family),r=(i,o)=>{if(o){Ye("Para desfazer, chame um adulto");return}t.kidMarks==="direto"?qs(e.id,i):su(e.id,"task",xr(i.label,e.gender),i.emoji,i.stars,i.id)},s=[["mundo","🏘️","Meu mundo",!0,""],["premios","🎁","Prêmios",!0,"presente"],["avatar","✨","Meu avatar",ci(n.family),"heroi"],["noite","🌙","Hora de dormir",!0,"cama"],["calma","🫧","Cantinho da calma",t.modules.calm,"musica"]];return u(be,{children:[u(l_,{child:e,kid:!0}),u(h_,{kid:!0}),u("div",{class:"tiles",children:s.filter(i=>i[3]).map(([i,o,a,,l])=>u("button",{class:"tile",onClick:()=>Te({screen:i}),children:[l?u(ai,{name:l,class:"tile-decor"}):n.season?u("img",{class:"tile-decor",src:Me(n.season.id,"images/pecas/09-casa-vermelha.png"),alt:"",onError:h=>h.target.replaceWith(o)}):u("span",{children:o}),a]}))}),u(m_,{child:e,onTap:r}),u(f_,{child:e,kid:!0}),t.kidMarks==="pedido"&&u("p",{class:"muted small center",children:"Quando você marca uma tarefa, um adulto confirma."})]})}const T_=()=>{Te({kidMode:!0,kidId:ie().children.length===1?ie().children[0].id:null,screen:null})},v0=n=>new Promise(e=>{const t=new Image;t.onload=()=>e(!0),t.onerror=()=>e(!1),t.src=n+"?v="+Date.now()});function I0(){var s;const n=Z(),[e,t]=B([]);ot(()=>{(async()=>{const i=n.season,o=[];if(i){const l=`seasons/${i.id}/`;o.push({group:"Vila",name:"Fundo",path:l+i.images.background,url:Me(i.id,i.images.background),ok:null}),o.push({group:"Vila",name:"Capa",path:l+i.images.cover,url:Me(i.id,i.images.cover),ok:null}),i.items.forEach(h=>o.push({group:"Vila",name:h.name,path:l+h.img,url:Me(i.id,h.img),ok:null}))}try{(await Wg()).stories.forEach(h=>[1,2,3].forEach(f=>{const m=`noite/natal/${String(h.n).padStart(2,"0")}-${f}.jpg`;o.push({group:f===1?"Noite (1ª imagem)":"Noite (extras)",name:`${h.n}. ${h.title} (${f})`,path:m,url:mt(m),ok:null})}))}catch{}for(let l=1;l<=24;l++){const h=`advento/${String(l).padStart(2,"0")}.jpg`;o.push({group:"Advento",name:`Portinha ${l}`,path:h,url:mt(h),ok:null})}t(o);const a=await Promise.all(o.map(l=>v0(l.url)));t(o.map((l,h)=>({...l,ok:a[h]})))})()},[(s=n.season)==null?void 0:s.id]);const r=[...new Set(e.map(i=>i.group))];return u("div",{class:"card",children:[u("h2",{children:"Conferir imagens"}),u("p",{class:"muted small",children:"Pasta no GitHub: docs/content/…"}),r.map(i=>{const o=e.filter(l=>l.group===i),a=o.filter(l=>l.ok).length;return u("details",{open:i==="Vila",children:[u("summary",{children:[u("b",{class:"grow",children:i}),u("span",{children:[a," de ",o.length]})]}),o.map(l=>u("div",{class:"item-row small",children:[u("span",{children:l.ok===null?"…":l.ok?"✅":"⬜"}),u("span",{class:"grow",children:[l.name,u("small",{class:"mono",children:l.path})]})]}))]})})]})}function w0(){var f;const n=Z(),e=n.season,[t,r]=B(()=>{const m={};return e==null||e.items.forEach(_=>{m[_.id]={...Ts(_,n.slots)}}),m}),[s,i]=B(((f=e==null?void 0:e.items[0])==null?void 0:f.id)||null),o=ec(null),a=ec(!1);if(!e)return u("p",{class:"muted",children:"Nenhuma temporada ativa."});const l=e.items.find(m=>m.id===s),h=m=>{if(!a.current||!s||!o.current)return;const _=o.current.querySelector(".scene").getBoundingClientRect(),g=Math.round((m.clientX-_.left)/_.width*1e3)/10,w=Math.round((m.clientY-_.top)/_.height*1e3)/10;r(R=>({...R,[s]:{...R[s],x:Math.max(0,Math.min(100,g)),y:Math.max(0,Math.min(100,w))}}))};return u("div",{class:"card layout-editor",children:[u("h2",{children:"Posições das peças"}),u("p",{class:"muted small",children:"Escolha uma peça, arraste na cena (o ponto é a base da peça) e ajuste o tamanho. Salvar vale para todas as famílias."}),u("div",{ref:o,class:"editor-scene",onPointerDown:m=>{var _,g;a.current=!0,(g=(_=m.target).setPointerCapture)==null||g.call(_,m.pointerId),h(m)},onPointerMove:h,onPointerUp:()=>{a.current=!1},children:u(hu,{season:e,items:e.items,slots:t,selected:s})}),u(ue,{label:"Peça",children:u("select",{value:s||"",onChange:m=>i(m.target.value),children:e.items.map(m=>u("option",{value:m.id,children:[m.emoji," ",m.name]}))})}),l&&s&&u(ue,{label:`Tamanho: ${t[s].w}% da largura`,children:u("input",{type:"range",min:4,max:60,step:.5,value:t[s].w,onInput:m=>r({...t,[s]:{...t[s],w:Number(m.target.value)}})})}),l&&s&&u("p",{class:"muted small mono",children:["x ",t[s].x," · y ",t[s].y," · w ",t[s].w]}),u("div",{class:"row gap wrap",children:[u("button",{class:"btn primary",onClick:()=>NS(e.id,t),children:"Salvar para todas as famílias"}),u("button",{class:"btn ghost",onClick:()=>{var m;(m=navigator.clipboard)==null||m.writeText(JSON.stringify(t)),Ye("Posições copiadas (JSON)")},children:"Copiar JSON"})]})]})}const E0={task:"Rotina",good:"Atitudes que ganham estrelas",bad:"Combinados não cumpridos",reward:"Prêmios"};function T0(){var i;const n=Z(),[e,t]=B(null),r=u("button",{class:"link back",onClick:()=>t(null),children:"← Responsáveis"});if(e==="kids")return u("div",{class:"page",children:[r,u(A0,{})]});if(e==="task"||e==="good"||e==="bad"||e==="reward")return u("div",{class:"page",children:[r,u(R0,{kind:e})]});if(e==="rules")return u("div",{class:"page",children:[r,u(C0,{})]});if(e==="mods")return u("div",{class:"page",children:[r,u(k0,{})]});if(e==="season")return u("div",{class:"page",children:[r,u(D0,{go:t})]});if(e==="family")return u("div",{class:"page",children:[r,u(V0,{})]});if(e==="pin")return u("div",{class:"page",children:[r,u(x0,{done:()=>t(null)})]});if(e==="licenses")return u("div",{class:"page",children:[r,u(O0,{})]});if(e==="images")return u("div",{class:"page",children:[r,u(I0,{})]});if(e==="layout")return u("div",{class:"page wide",children:[r,u(w0,{})]});const s=(o,a,l,h)=>u("button",{class:"menu-row",onClick:()=>t(o),children:[u("span",{class:"menu-emo",children:a}),u("span",{class:"grow",children:[u("b",{children:l}),u("small",{children:h})]}),u("span",{"aria-hidden":"true",children:"›"})]});return u("div",{class:"page",children:[u("div",{class:"row between",children:[u("h2",{class:"page-title",children:"Responsáveis"}),u("button",{class:"btn sm ghost",onClick:()=>Te({screen:null,adminUntil:0}),children:"Fechar"})]}),u("div",{class:"card menu",children:[s("kids","👧","Crianças",`${n.children.length} cadastrada(s), idade, foto e nível dos desafios`),s("task","✅","Rotina","Tarefas do dia e quanto vale cada uma"),s("good","💛","Atitudes","Comportamentos que ganham estrelas"),s("bad","⚠️","Combinados","O que tira estrelas"),s("reward","🎁","Prêmios","O que as estrelas compram")]}),u("div",{class:"card menu",children:[s("season","🏘️","Temporada",n.season?n.season.name:"Nenhuma ativa"),s("rules","⚖️","Regras do jogo","Meta diária, bônus e pedidos das crianças"),s("mods","🧩","Módulos","Cristão, Advento, inglês, calma, desafios"),s("family","👨‍👩‍👧","Família e responsáveis","Nome, convites para outros adultos"),s("pin","🔑","Trocar PIN","Protege esta área e a saída do modo criança"),Do()&&s("licenses","🎫","Licenças (administração)","Criar códigos para novas famílias"),Do()&&!n.demo&&u("label",{class:"menu-row toggle-row",children:[u("span",{class:"menu-emo",children:"✨"}),u("span",{class:"grow",children:[u("b",{children:"Avatares nesta família"}),u("small",{children:"Recurso extra, pago à parte. Só a administração liga."})]}),u("input",{type:"checkbox",checked:ci(n.family),onChange:o=>BS(o.target.checked)})]})]}),u("div",{class:"card menu",children:[u("button",{class:"menu-row",onClick:()=>{T_(),Te({adminUntil:0})},children:[u("span",{class:"menu-emo",children:"🧒"}),u("span",{class:"grow",children:[u("b",{children:"Modo criança neste aparelho"}),u("small",{children:"As crianças usam sozinhas; para sair, o PIN"})]})]}),u("button",{class:"menu-row",onClick:()=>eS(`mundo-de-estrelas-${n.today}.json`,OS()),children:[u("span",{class:"menu-emo",children:"💾"}),u("span",{class:"grow",children:[u("b",{children:"Exportar cópia dos dados"}),u("small",{children:"Arquivo para guardar no seu computador"})]})]}),n.families.length>1&&n.families.filter(o=>o.id!==n.familyId).map(o=>u("button",{class:"menu-row",onClick:()=>js(o.id),children:[u("span",{class:"menu-emo",children:"🔁"}),u("span",{class:"grow",children:u("b",{children:["Ir para ",o.name]})})]})),u("button",{class:"menu-row",onClick:()=>H.signOut(),children:[u("span",{class:"menu-emo",children:"🚪"}),u("span",{class:"grow",children:[u("b",{children:n.demo?"Sair e apagar a demonstração":"Sair da conta"}),u("small",{children:(i=n.user)==null?void 0:i.email})]})]})]}),n.demo&&u(b0,{}),u("p",{class:"muted small center",children:["Mundo de Estrelas ",$A," · Algumas ilustrações: ",u("a",{href:"https://www.vecteezy.com",target:"_blank",rel:"noopener",children:"Vecteezy.com"})]})]})}function b0(){const n=Z(),[e,t]=B(n.today);return u("div",{class:"card",children:[u("h3",{children:"Demonstração"}),u(ue,{label:"Simular a data de hoje",children:u("input",{type:"date",value:e,onInput:r=>t(r.target.value)})}),u("div",{class:"row gap",children:[u("button",{class:"btn sm",onClick:()=>{location.search=`?demo=1&hoje=${e}`},children:"Usar esta data"}),u("button",{class:"btn sm ghost",onClick:()=>{location.search="?demo=1&hoje="},children:"Data real"})]})]})}function A0(){const n=Z(),[e,t]=B(null);return u("div",{class:"card",children:[u("h2",{children:"Crianças"}),n.children.map(r=>u("button",{class:"menu-row",onClick:()=>t(r),children:[u(Ft,{child:r,size:40}),u("span",{class:"grow",children:[u("b",{children:r.name}),u("small",{children:[r.birth?`${Bs(r.birth,n.today)} anos`:"sem data de nascimento"," · saldo ",r.balance||0]})]}),"›"]})),u("button",{class:"btn block",onClick:()=>t({name:"",gender:"f",color:"#2F5D4A",maturity:2,english:!0}),children:"Adicionar criança"}),e&&u(S0,{c:e,onClose:()=>t(null)})]})}function S0({c:n,onClose:e}){var l;const t=ie(),[r,s]=B(n),[i,o]=B(!1),a=h=>s({...r,...h});return u(Et,{title:n.id?`Editar ${n.name}`:"Nova criança",onClose:e,children:[u("div",{class:"row gap center-v",children:[u(Ft,{child:{name:r.name||"?",color:r.color||"#888",photo:r.photo},size:64}),u("label",{class:"btn sm ghost",children:["Foto",u("input",{type:"file",accept:"image/*",hidden:!0,onChange:async h=>{var m;const f=(m=h.target.files)==null?void 0:m[0];f&&a({photo:await tS(f)})}})]}),r.photo&&u("button",{class:"link small",onClick:()=>a({photo:""}),children:"remover foto"})]}),u(ue,{label:"Nome",children:u("input",{value:r.name,maxLength:24,onInput:h=>a({name:h.target.value})})}),u(ue,{label:"Data de nascimento",children:u("input",{type:"date",value:r.birth,max:t.today,onInput:h=>a({birth:h.target.value})})}),u(ue,{label:"Os textos tratam como",children:u("div",{class:"seg",children:[["f","menina"],["m","menino"],["x","neutro"]].map(([h,f])=>u("button",{type:"button",class:r.gender===h?"on":"",onClick:()=>a({gender:h}),children:f}))})}),u(ue,{label:"Desafios",hint:"Ajusta a faixa dos desafios em relação à idade.",children:u("div",{class:"seg",children:[[1,"mais simples"],[2,"da idade"],[3,"mais difíceis"]].map(([h,f])=>u("button",{type:"button",class:r.maturity===h?"on":"",onClick:()=>a({maturity:h}),children:f}))})}),u("label",{class:"toggle",children:[u("input",{type:"checkbox",checked:r.english!==!1,onChange:h=>a({english:h.target.checked})}),u("span",{children:u("b",{children:"Mostrar palavras em inglês"})})]}),u(ue,{label:"Cor",children:u(o_,{value:r.color||"",onChange:h=>a({color:h})})}),n.id&&ci(t.family)&&u(N0,{child:n}),u("button",{class:"btn primary block",disabled:!((l=r.name)!=null&&l.trim()),onClick:async()=>{await bS(r)&&e()},children:"Salvar"}),n.id&&u("button",{class:"btn ghost danger-text block",onClick:()=>o(!0),children:"Remover criança"}),i&&u(aa,{danger:!0,text:`Remover ${n.name}? O histórico fica guardado, mas ela some do app.`,yes:"Remover",onClose:()=>o(!1),onYes:()=>{AS(n.id),e()}})]})}function R0({kind:n}){const e=Z(),[t,r]=B(null),s=e.items.filter(a=>a.kind===n&&a.active!==!1),i=(a,l)=>{const h=s.map(m=>m.id),f=a+l;f<0||f>=h.length||([h[a],h[f]]=[h[f],h[a]],ES(h))},o=a=>{var l;return(l=a.kids)!=null&&l.length?a.kids.map(h=>{var f;return(f=e.children.find(m=>m.id===h))==null?void 0:f.name}).filter(Boolean).join(", "):"todas as crianças"};return u("div",{class:"card",children:[u("h2",{children:E0[n]}),n==="task"&&u("p",{class:"muted small",children:["Dica: use ","{o|a}",' para o texto mudar com o gênero. Ex.: "Arrumad',"{o|a}",' para a escola".']}),s.map((a,l)=>{var h;return u("div",{class:"item-row",children:[u("span",{class:"item-emo",children:a.emoji}),u("button",{class:"grow item-main",onClick:()=>r(a),children:[u("b",{children:a.label}),u("small",{children:[n==="reward"?`${a.stars} estrelas`:`${n==="bad"?"−":"+"}${a.stars}`," · ",n==="task"?((h=uu.find(f=>f[0]===(a.period||"livre")))==null?void 0:h[1])+" · ":"",o(a)]})]}),u("button",{class:"icon-btn",onClick:()=>i(l,-1),"aria-label":"Subir",children:"↑"}),u("button",{class:"icon-btn",onClick:()=>i(l,1),"aria-label":"Descer",children:"↓"})]})}),u("button",{class:"btn block",onClick:()=>r({kind:n,emoji:"⭐",label:"",stars:n==="reward"?50:2,period:"livre",kids:[],order:s.length}),children:"Adicionar"}),t&&u(P0,{it:t,onClose:()=>r(null)})]})}function P0({it:n,onClose:e}){var a;const t=ie(),[r,s]=B(n),i=l=>s({...r,...l}),o=l=>{const h=new Set(r.kids||[]);h.has(l)?h.delete(l):h.add(l),i({kids:[...h]})};return u(Et,{title:n.id?"Editar":"Novo",onClose:e,children:[u("div",{class:"row gap",children:[u(qS,{value:r.emoji||"⭐",onChange:l=>i({emoji:l})}),u(ue,{label:"Texto",children:u("input",{value:r.label,maxLength:60,onInput:l=>i({label:l.target.value})})})]}),u(ue,{label:"Ilustração",hint:"Automática escolhe pelo texto. Também dá para escolher outra ou usar só o emoji.",children:u(HS,{value:r.clip||void 0,label:r.label||"",onChange:l=>i({clip:l||""})})}),u(ue,{label:r.kind==="reward"?"Custa (estrelas)":"Estrelas",children:u("input",{type:"number",inputMode:"numeric",min:0,value:r.stars,onInput:l=>i({stars:Number(l.target.value)})})}),r.kind==="task"&&u(ue,{label:"Quando",children:u("div",{class:"seg",children:uu.map(([l,h])=>u("button",{type:"button",class:(r.period||"livre")===l?"on":"",onClick:()=>i({period:l}),children:h}))})}),t.children.length>1&&u(ue,{label:"Para quem",hint:"Nenhuma marcada = todas as crianças.",children:u("div",{class:"seg wrap",children:t.children.map(l=>{var h;return u("button",{type:"button",class:(h=r.kids)!=null&&h.includes(l.id)?"on":"",onClick:()=>o(l.id),children:l.name})})})}),u("button",{class:"btn primary block",disabled:!((a=r.label)!=null&&a.trim()),onClick:async()=>{await IS(r)&&e()},children:"Salvar"}),n.id&&u("button",{class:"btn ghost danger-text block",onClick:()=>{wS(n.id),e()},children:"Remover"})]})}function C0(){const n=Z(),e=ke(n.family),[t,r]=B(e.dailyGoalPct),[s,i]=B(e.perfectBonus);return u("div",{class:"card",children:[u("h2",{children:"Regras do jogo"}),u(ue,{label:`Meta diária: ${t}% da rotina`,hint:"Ao alcançar a meta, a criança ganha a peça do dia na temporada.",children:u("input",{type:"range",min:40,max:100,step:5,value:t,onInput:o=>r(Number(o.target.value))})}),u(ue,{label:"Bônus por rotina completa (estrelas)",children:u("input",{type:"number",min:0,max:50,value:s,onInput:o=>i(Number(o.target.value))})}),u(ue,{label:"No modo criança, ao marcar uma tarefa",children:u("div",{class:"seg",children:[u("button",{type:"button",class:e.kidMarks==="pedido"?"on":"",onClick:()=>On({kidMarks:"pedido"}),children:"um adulto confirma"}),u("button",{type:"button",class:e.kidMarks==="direto"?"on":"",onClick:()=>On({kidMarks:"direto"}),children:"vale na hora"})]})}),u("button",{class:"btn primary block",onClick:()=>On({dailyGoalPct:t,perfectBonus:Math.max(0,Math.round(s))}),children:"Salvar"}),u("div",{class:"rules-text",children:[u("h3",{children:"Como funciona"}),u("p",{children:"Cada tarefa, atitude e desafio dá estrelas. O saldo é usado para trocar por prêmios."}),u("p",{children:"Na temporada, a meta diária libera uma peça nova por dia. As grandes conquistas chegam com as estrelas ganhas na temporada; trocar estrelas por prêmios não tira peças da vila."}),u("p",{children:"Combinados não cumpridos tiram estrelas do saldo, mas não desmontam a vila."})]})]})}function k0(){const n=Z(),e=ke(n.family).modules,t=[["christian","Conteúdo cristão","Histórias bíblicas, orações e mensagens de Jesus"],["advent","Calendário do Advento","1 a 24 de dezembro"],["english","Palavras em inglês","Nas peças da temporada"],["calm","Cantinho da calma","Respiração guiada"],["challenges","Desafios do dia","Um por dia, por idade"]],r=ke(n.family).nightStart;return u("div",{class:"card",children:[u("h2",{children:"Módulos"}),t.map(([s,i,o])=>u("label",{class:"toggle",children:[u("input",{type:"checkbox",checked:e[s],onChange:a=>On({modules:{...e,[s]:a.target.checked}})}),u("span",{children:[u("b",{children:i}),u("small",{children:o})]})]})),e.christian&&u("div",{class:"night-start",children:[u("h3",{children:"Devocional da noite"}),u("p",{class:"muted small",children:r?`Começou em ${wt(r)}: uma história por noite, na ordem.`:"Segue as datas da série: começa em 1º de dezembro."}),u("div",{class:"row gap",children:[r!==n.today&&u("button",{class:"btn sm",onClick:()=>On({nightStart:n.today}),children:"Começar hoje"}),r&&u("button",{class:"btn sm ghost",onClick:()=>On({nightStart:null}),children:"Voltar para 1º de dezembro"})]})]})]})}function D0({go:n}){var _;const e=Z(),t=(_=e.family)==null?void 0:_.season,r=e.season,s=ft(Gg),[i,o]=B(!1),[a,l]=B(!1),[h,f]=B({}),m=async()=>{if(!r||!t)return;l(!0);const g={};for(const w of e.children){const R=ru(r,t,e.progress[w.id],pn(e.family,e.items,e.entries,w.id,e.today),e.items,w.id,e.today);try{g[w.id]=await s0(r,Xg(r,R),e.slots)}catch{g[w.id]=""}}await xS(g),l(!1)};return!t||!r?u("div",{class:"card",children:[u("h2",{children:"Temporada"}),u("p",{children:"Nenhuma temporada ativa."}),(s||[]).map(g=>u("div",{class:"subcard",children:[g.cover&&u("img",{class:"season-cover",src:Me(g.id,g.cover),alt:"",onError:w=>w.target.style.display="none"}),u("b",{children:g.name}),u("p",{class:"muted",children:g.tagline}),u("div",{class:"row gap",children:[u("button",{class:"btn primary sm",onClick:()=>Tf(g.id,!1),children:"Começar na data oficial"}),u("button",{class:"btn sm",onClick:()=>Tf(g.id,!0),children:"Começar hoje"})]})]}))]}):u("div",{class:"card",children:[u("h2",{children:r.name}),u("p",{class:"muted",children:["De ",wt(t.startDay)," a ",wt(t.endDay),"."]}),u("h3",{children:"Meta de estrelas da temporada"}),u("p",{class:"muted small",children:"As grandes conquistas chegam em 12%, 30%, 50%, 75% e 100% desta meta. A sugestão é 75% do que a rotina permite."}),e.children.map(g=>{var R;const w=Yg(e.progress[g.id],e.items,g.id,t);return u("div",{class:"item-row",children:[u(Ft,{child:g,size:32}),u("span",{class:"grow",children:[u("b",{children:g.name}),u("small",{children:[((R=e.progress[g.id])==null?void 0:R.seasonStars)||0," de ",w," · sugerido ",oi(e.items,g.id,t)]})]}),u("input",{class:"num",type:"number",min:30,value:h[g.id]??w,onInput:A=>f({...h,[g.id]:A.target.value})}),u("button",{class:"btn sm",disabled:!h[g.id]||Number(h[g.id])===w,onClick:()=>SS(g.id,Math.max(30,Math.round(Number(h[g.id])))),children:"OK"})]})}),u("div",{class:"menu",children:[u("button",{class:"menu-row",onClick:()=>n("images"),children:[u("span",{class:"menu-emo",children:"🖼️"}),u("span",{class:"grow",children:[u("b",{children:"Conferir imagens"}),u("small",{children:"O que já chegou e o que falta"})]}),"›"]}),Do()&&u("button",{class:"menu-row",onClick:()=>n("layout"),children:[u("span",{class:"menu-emo",children:"📐"}),u("span",{class:"grow",children:[u("b",{children:"Ajustar posições das peças"}),u("small",{children:"Vale para todas as famílias"})]}),"›"]})]}),u("button",{class:"btn ghost danger-text block",disabled:a,onClick:()=>o(!0),children:a?"Guardando…":"Encerrar e guardar no álbum"}),i&&u(aa,{text:"Encerrar a temporada agora? A vila de cada criança vai para o álbum de aventuras e a próxima temporada poderá começar. Saldo e prêmios continuam.",yes:"Encerrar",onClose:()=>o(!1),onYes:m})]})}function V0(){var a;const n=Z(),e=n.family,[t,r]=B(e.name),[s,i]=B(""),o=e.owner===((a=n.user)==null?void 0:a.uid);return u("div",{class:"card",children:[u("h2",{children:"Família"}),u(ue,{label:"Nome",children:u("input",{value:t,maxLength:40,onInput:l=>r(l.target.value)})}),u("button",{class:"btn sm",disabled:!t.trim()||t===e.name,onClick:()=>PS(t),children:"Salvar nome"}),u("h3",{children:"Responsáveis"}),Object.entries(e.members||{}).map(([l,h])=>{var f;return u("div",{class:"item-row",children:[u("span",{class:"grow",children:[u("b",{children:h.name||h.email}),u("small",{children:[h.email," · ",h.role==="owner"?"criador(a)":"responsável"]})]}),o&&l!==((f=n.user)==null?void 0:f.uid)&&u("button",{class:"link small danger-text",onClick:()=>DS(l),children:"remover"})]})}),u("h3",{children:"Convidar outro adulto"}),u("p",{class:"muted small",children:"A pessoa entra com esse e-mail (Google ou e-mail confirmado) e aceita o convite."}),(e.invites||[]).map(l=>u("div",{class:"item-row",children:[u("span",{class:"grow",children:[l," ",u("small",{class:"muted",children:"convidado"})]}),u("button",{class:"link small",onClick:()=>kS(l),children:"cancelar"})]})),u("div",{class:"row gap",children:[u("input",{type:"email",placeholder:"email@exemplo.com",value:s,onInput:l=>i(l.target.value)}),u("button",{class:"btn",disabled:!/^\S+@\S+\.\S+$/.test(s),onClick:()=>{CS(s),i("")},children:"Convidar"})]})]})}function x0({done:n}){const[e,t]=B(""),[r,s]=B("");return u("div",{class:"card",children:e?u(Nr,{title:"Repita o novo PIN",onDone:async i=>{i===e?(await RS(i),Ye("PIN alterado"),n()):(s("Os PINs não conferem"),t(""))}}):u(Nr,{title:"Novo PIN",error:r,onDone:i=>{t(i),s("")}})})}function N0({child:n}){var i;const e=au($r(`avatars/${n.id}`)),t=ft(g_),[r,s]=B(!1);return u("div",{class:"subcard",children:[u("b",{children:"Avatar"}),u("p",{class:"muted small",children:"Imagem de corpo inteiro, em pé, com fundo transparente (PNG). Fica guardada só para a sua família. Os brinquedos comprados aparecem em volta."}),(e==null?void 0:e.exists)&&t&&u("div",{class:"avatar-admin",children:u(__,{child:n,toys:(((i=n.avatar)==null?void 0:i.owned)||[]).filter(o=>{var a;return!(((a=n.avatar)==null?void 0:a.hidden)||[]).includes(o)}),accessories:t.items})}),u("div",{class:"row gap wrap",children:[u("label",{class:"btn sm",children:[r?"Enviando…":e!=null&&e.exists?"Trocar avatar":"Enviar avatar",u("input",{type:"file",accept:"image/png,image/webp",hidden:!0,onChange:async o=>{var l;const a=(l=o.target.files)==null?void 0:l[0];a&&(s(!0),await FS(n.id,a,.25),s(!1))}})]}),(e==null?void 0:e.exists)&&u("button",{class:"btn sm ghost",onClick:()=>US(n.id),children:"Remover"})]})]})}function O0(){const[n,e]=B(1),[t,r]=B(""),[s,i]=B([]),[o,a]=B(!1),h=(cu("licenses")||[]).map(f=>({id:f.id,...f.data})).sort((f,m)=>m.createdAt-f.createdAt);return u("div",{class:"card",children:[u("h2",{children:"Licenças"}),u("p",{class:"muted small",children:"Cada código cria uma família. Envie o código para quem comprou."}),u("div",{class:"row gap",children:[u(ue,{label:"Quantidade",children:u("input",{type:"number",min:1,max:50,value:n,onInput:f=>e(Number(f.target.value))})}),u(ue,{label:"Anotação (ex.: nome da cliente)",children:u("input",{value:t,maxLength:60,onInput:f=>r(f.target.value)})})]}),u("label",{class:"toggle",children:[u("input",{type:"checkbox",checked:o,onChange:f=>a(f.target.checked)}),u("span",{children:[u("b",{children:"Inclui avatares"}),u("small",{children:"Recurso extra, pago à parte"})]})]}),u("button",{class:"btn primary block",onClick:async()=>i(await i_(Math.min(50,Math.max(1,n)),t,o)),children:"Criar códigos"}),s.length>0&&u("div",{class:"codes",children:[u("pre",{children:s.join(`
`)}),u("button",{class:"btn sm",onClick:()=>{var f;(f=navigator.clipboard)==null||f.writeText(s.join(`
`)),Ye("Copiado")},children:"Copiar"})]}),u("h3",{children:"Códigos"}),h.map(f=>{var m;return u("div",{class:"item-row",children:u("span",{class:"grow",children:[u("b",{class:"mono",children:f.id}),u("small",{children:[f.note||"sem anotação"," · ",f.usedBy?"usado":"disponível",(m=f.plan)!=null&&m.avatar?" · com avatares":""]})]})})}),$r("")&&null]})}function Ui({text:n}){return u("div",{class:"splash",children:[u("div",{class:"brand-mark spin",children:"✦"}),u("p",{class:"muted",children:n||"Carregando…"})]})}function M0(){const n=Z();return n.toast?u("div",{class:"toast "+(n.toast.kind||""),role:"status",children:n.toast.text},n.toast.id):null}function L0(){var e;const n=Z();ot(()=>{var s;const t=(s=n.season)==null?void 0:s.palette,r=document.documentElement.style;t&&(r.setProperty("--primary",t.primary),r.setProperty("--secondary",t.secondary),r.setProperty("--accent",t.accent),r.setProperty("--paper",t.paper),r.setProperty("--ink",t.ink),r.setProperty("--sky",t.sky))},[(e=n.season)==null?void 0:e.id])}function F0(){const n=Z();L0();let e;return n.ready?n.user?!n.user.verified&&n.user.provider==="password"?e=u(GS,{}):n.familiesLoaded?n.error&&!n.families.length&&!n.invites.length&&n.error.includes("permission")?e=u(Ui,{text:"O banco ainda não aceita o app novo. As regras de segurança precisam ser publicadas no Firebase."}):n.familyId?n.family?n.ui.kidMode?e=u(_0,{}):e=u(U0,{}):e=u(Ui,{}):e=u(JS,{}):e=u(Ui,{}):e=u(KS,{}):e=u(Ui,{}),u(be,{children:[n.demo&&u("div",{class:"demo-band",children:["Demonstração",n.today!==Xl()?` · data simulada ${n.today.split("-").reverse().join("/")}`:""]}),n.offline&&u("div",{class:"offline-band",children:"Sem internet: as mudanças são enviadas quando a conexão voltar."}),e,u(M0,{})]})}function U0(){const n=Z(),[e,t]=B(!1),[r,s]=B(""),i=n.ui.screen==="admin"&&n.ui.adminUntil>Date.now(),o=()=>{!ke(n.family).pinHash||n.ui.adminUntil>Date.now()?Te({screen:"admin",adminUntil:Date.now()+15*6e4}):t(!0)},a=async f=>{await n_(f)?(t(!1),s(""),Te({screen:"admin",adminUntil:Date.now()+15*6e4})):s("PIN incorreto")},l=n.ui.screen,h=[["hoje","☀️","Hoje"],["mundo","🏘️","Mundo"],["premios","🎁","Prêmios"],["noite","🌙","Noite"]];return u("div",{class:"shell",children:[u("header",{class:"top",children:[l&&l!=="admin"?u("button",{class:"icon-btn",onClick:()=>Te({screen:null}),"aria-label":"Voltar",children:"←"}):u("span",{class:"brand-mark sm",children:"✦"}),u("div",{class:"top-title",children:[u("b",{children:n.family.name}),n.requests.length>0&&u("span",{class:"badge",title:"Pedidos esperando",children:n.requests.length})]}),u("button",{class:"icon-btn",onClick:T_,"aria-label":"Modo criança",title:"Modo criança",children:"🧒"}),u("button",{class:"icon-btn",onClick:o,"aria-label":"Área dos responsáveis",title:"Responsáveis",children:"⚙️"})]}),u("main",{children:i?u(T0,{}):l==="calma"?u(w_,{childId:n.ui.screenArg}):l==="album"?u(E_,{childId:n.ui.screenArg}):l==="advento"?u(d_,{}):l==="avatar"&&n.children.find(f=>f.id===n.ui.screenArg)?u(y_,{child:n.children.find(f=>f.id===n.ui.screenArg)}):n.ui.tab==="hoje"?u(e0,{}):n.ui.tab==="mundo"?u(i0,{}):n.ui.tab==="premios"?u(c0,{}):u(I_,{})}),!i&&u("nav",{class:"tabbar",children:h.map(([f,m,_])=>u("button",{class:n.ui.tab===f&&!l?"on":"",onClick:()=>Te({tab:f,screen:null}),"aria-current":n.ui.tab===f,children:[u("span",{children:m}),_]}))}),e&&u(Et,{title:"Área dos responsáveis",onClose:()=>{t(!1),s("")},children:u(Nr,{title:"Digite o PIN",error:r,onDone:a})})]})}hS();uy(u(F0,{}),document.getElementById("app"));"serviceWorker"in navigator&&location.protocol==="https:"&&addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
