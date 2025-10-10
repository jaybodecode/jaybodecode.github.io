const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BXWs4A9y.js","./BHaDRoue.js","./CyberFooter.DP99KvIU.css","./DZTWU3L8.js","./DTA01M-O.js","./DwVv3k0D.js","./DQiyZLBp.js","./BCnVN3n5.js","./Djkqdkvw.js","./DmZQ71QT.js","./CTEISAWL.js","./D61rUm4b.js","./index.CcLwB9bT.css","./BLZ09Ejm.js","./index.mw3ZSIbW.css","./C7xzBJMo.js","./CDYup3xq.js","./_articleId_.CSOo8Zkn.css","./BS0au8Zq.js","./_publicationId_.CTc1EPI0.css","./DkFrJp-C.js","./cyber.tn0RQdqM.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function zd(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const je={},Ai=[],Qn=()=>{},$w=()=>!1,Wa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Kd=t=>t.startsWith("onUpdate:"),Et=Object.assign,Gd=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},HA=Object.prototype.hasOwnProperty,Oe=(t,e)=>HA.call(t,e),ce=Array.isArray,Ri=t=>za(t)==="[object Map]",jw=t=>za(t)==="[object Set]",qA=t=>za(t)==="[object RegExp]",ue=t=>typeof t=="function",Xe=t=>typeof t=="string",Ps=t=>typeof t=="symbol",Be=t=>t!==null&&typeof t=="object",Bw=t=>(Be(t)||ue(t))&&ue(t.then)&&ue(t.catch),Hw=Object.prototype.toString,za=t=>Hw.call(t),WA=t=>za(t).slice(8,-1),qw=t=>za(t)==="[object Object]",Qd=t=>Xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Pi=zd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ou=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},zA=/-\w/g,Tn=ou(t=>t.replace(zA,e=>e.slice(1).toUpperCase())),KA=/\B([A-Z])/g,si=ou(t=>t.replace(KA,"-$1").toLowerCase()),au=ou(t=>t.charAt(0).toUpperCase()+t.slice(1)),dh=ou(t=>t?`on${au(t)}`:""),er=(t,e)=>!Object.is(t,e),ki=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ww=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},hf=t=>{const e=parseFloat(t);return isNaN(e)?t:e},zw=t=>{const e=Xe(t)?Number(t):NaN;return isNaN(e)?t:e};let Fm;const cu=()=>Fm||(Fm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function lu(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Xe(s)?XA(s):lu(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(Xe(t)||Be(t))return t}const GA=/;(?![^(]*\))/g,QA=/:([^]+)/,YA=/\/\*[^]*?\*\//g;function XA(t){const e={};return t.replace(YA,"").split(GA).forEach(n=>{if(n){const s=n.split(QA);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function uu(t){let e="";if(Xe(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const s=uu(t[n]);s&&(e+=s+" ")}else if(Be(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function aB(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Xe(e)&&(t.class=uu(e)),n&&(t.style=lu(n)),t}const JA="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ZA=zd(JA);function Kw(t){return!!t||t===""}const Gw=t=>!!(t&&t.__v_isRef===!0),Yo=t=>Xe(t)?t:t==null?"":ce(t)||Be(t)&&(t.toString===Hw||!ue(t.toString))?Gw(t)?Yo(t.value):JSON.stringify(t,Qw,2):String(t),Qw=(t,e)=>Gw(e)?Qw(t,e.value):Ri(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[ph(s,i)+" =>"]=r,n),{})}:jw(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ph(n))}:Ps(e)?ph(e):Be(e)&&!ce(e)&&!qw(e)?String(e):e,ph=(t,e="")=>{var n;return Ps(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Lt;class Yw{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Lt,!e&&Lt&&(this.index=(Lt.scopes||(Lt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Lt;try{return Lt=this,e()}finally{Lt=n}}}on(){++this._on===1&&(this.prevScope=Lt,Lt=this)}off(){this._on>0&&--this._on===0&&(Lt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Xw(t){return new Yw(t)}function Yd(){return Lt}function eR(t,e=!1){Lt&&Lt.cleanups.push(t)}let He;const gh=new WeakSet;class Jw{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Lt&&Lt.active&&Lt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,gh.has(this)&&(gh.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||eE(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Um(this),tE(this);const e=He,n=Pn;He=this,Pn=!0;try{return this.fn()}finally{nE(this),He=e,Pn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Zd(e);this.deps=this.depsTail=void 0,Um(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?gh.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ff(this)&&this.run()}get dirty(){return ff(this)}}let Zw=0,ra,ia;function eE(t,e=!1){if(t.flags|=8,e){t.next=ia,ia=t;return}t.next=ra,ra=t}function Xd(){Zw++}function Jd(){if(--Zw>0)return;if(ia){let e=ia;for(ia=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ra;){let e=ra;for(ra=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function tE(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function nE(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Zd(s),tR(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function ff(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(sE(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function sE(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ia)||(t.globalVersion=Ia,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!ff(t))))return;t.flags|=2;const e=t.dep,n=He,s=Pn;He=t,Pn=!0;try{tE(t);const r=t.fn(t._value);(e.version===0||er(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{He=n,Pn=s,nE(t),t.flags&=-3}}function Zd(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Zd(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function tR(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Pn=!0;const rE=[];function ws(){rE.push(Pn),Pn=!1}function Es(){const t=rE.pop();Pn=t===void 0?!0:t}function Um(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=He;He=void 0;try{e()}finally{He=n}}}let Ia=0;class nR{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ep{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!He||!Pn||He===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==He)n=this.activeLink=new nR(He,this),He.deps?(n.prevDep=He.depsTail,He.depsTail.nextDep=n,He.depsTail=n):He.deps=He.depsTail=n,iE(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=He.depsTail,n.nextDep=void 0,He.depsTail.nextDep=n,He.depsTail=n,He.deps===n&&(He.deps=s)}return n}trigger(e){this.version++,Ia++,this.notify(e)}notify(e){Xd();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Jd()}}}function iE(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)iE(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ll=new WeakMap,Lr=Symbol(""),df=Symbol(""),ba=Symbol("");function Ft(t,e,n){if(Pn&&He){let s=ll.get(t);s||ll.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new ep),r.map=s,r.key=n),r.track()}}function ds(t,e,n,s,r,i){const o=ll.get(t);if(!o){Ia++;return}const a=c=>{c&&c.trigger()};if(Xd(),e==="clear")o.forEach(a);else{const c=ce(t),u=c&&Qd(n);if(c&&n==="length"){const h=Number(s);o.forEach((f,d)=>{(d==="length"||d===ba||!Ps(d)&&d>=h)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(ba)),e){case"add":c?u&&a(o.get("length")):(a(o.get(Lr)),Ri(t)&&a(o.get(df)));break;case"delete":c||(a(o.get(Lr)),Ri(t)&&a(o.get(df)));break;case"set":Ri(t)&&a(o.get(Lr));break}}Jd()}function sR(t,e){const n=ll.get(t);return n&&n.get(e)}function di(t){const e=Ce(t);return e===t?e:(Ft(e,"iterate",ba),wn(t)?e:e.map(At))}function hu(t){return Ft(t=Ce(t),"iterate",ba),t}const rR={__proto__:null,[Symbol.iterator](){return mh(this,Symbol.iterator,At)},concat(...t){return di(this).concat(...t.map(e=>ce(e)?di(e):e))},entries(){return mh(this,"entries",t=>(t[1]=At(t[1]),t))},every(t,e){return os(this,"every",t,e,void 0,arguments)},filter(t,e){return os(this,"filter",t,e,n=>n.map(At),arguments)},find(t,e){return os(this,"find",t,e,At,arguments)},findIndex(t,e){return os(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return os(this,"findLast",t,e,At,arguments)},findLastIndex(t,e){return os(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return os(this,"forEach",t,e,void 0,arguments)},includes(...t){return _h(this,"includes",t)},indexOf(...t){return _h(this,"indexOf",t)},join(t){return di(this).join(t)},lastIndexOf(...t){return _h(this,"lastIndexOf",t)},map(t,e){return os(this,"map",t,e,void 0,arguments)},pop(){return Fo(this,"pop")},push(...t){return Fo(this,"push",t)},reduce(t,...e){return $m(this,"reduce",t,e)},reduceRight(t,...e){return $m(this,"reduceRight",t,e)},shift(){return Fo(this,"shift")},some(t,e){return os(this,"some",t,e,void 0,arguments)},splice(...t){return Fo(this,"splice",t)},toReversed(){return di(this).toReversed()},toSorted(t){return di(this).toSorted(t)},toSpliced(...t){return di(this).toSpliced(...t)},unshift(...t){return Fo(this,"unshift",t)},values(){return mh(this,"values",At)}};function mh(t,e,n){const s=hu(t),r=s[e]();return s!==t&&!wn(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.done||(i.value=n(i.value)),i}),r}const iR=Array.prototype;function os(t,e,n,s,r,i){const o=hu(t),a=o!==t&&!wn(t),c=o[e];if(c!==iR[e]){const f=c.apply(t,i);return a?At(f):f}let u=n;o!==t&&(a?u=function(f,d){return n.call(this,At(f),d,t)}:n.length>2&&(u=function(f,d){return n.call(this,f,d,t)}));const h=c.call(o,u,s);return a&&r?r(h):h}function $m(t,e,n,s){const r=hu(t);let i=n;return r!==t&&(wn(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,At(a),c,t)}),r[e](i,...s)}function _h(t,e,n){const s=Ce(t);Ft(s,"iterate",ba);const r=s[e](...n);return(r===-1||r===!1)&&sp(n[0])?(n[0]=Ce(n[0]),s[e](...n)):r}function Fo(t,e,n=[]){ws(),Xd();const s=Ce(t)[e].apply(t,n);return Jd(),Es(),s}const oR=zd("__proto__,__v_isRef,__isVue"),oE=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ps));function aR(t){Ps(t)||(t=String(t));const e=Ce(this);return Ft(e,"has",t),e.hasOwnProperty(t)}class aE{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?_R:hE:i?uE:lE).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=ce(e);if(!r){let c;if(o&&(c=rR[n]))return c;if(n==="hasOwnProperty")return aR}const a=Reflect.get(e,n,rt(e)?e:s);if((Ps(n)?oE.has(n):oR(n))||(r||Ft(e,"get",n),i))return a;if(rt(a)){const c=o&&Qd(n)?a:a.value;return r&&Be(c)?gf(c):c}return Be(a)?r?gf(a):Vn(a):a}}class cE extends aE{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const c=Ts(i);if(!wn(s)&&!Ts(s)&&(i=Ce(i),s=Ce(s)),!ce(e)&&rt(i)&&!rt(s))return c||(i.value=s),!0}const o=ce(e)&&Qd(n)?Number(n)<e.length:Oe(e,n),a=Reflect.set(e,n,s,rt(e)?e:r);return e===Ce(r)&&(o?er(s,i)&&ds(e,"set",n,s):ds(e,"add",n,s)),a}deleteProperty(e,n){const s=Oe(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&ds(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!Ps(n)||!oE.has(n))&&Ft(e,"has",n),s}ownKeys(e){return Ft(e,"iterate",ce(e)?"length":Lr),Reflect.ownKeys(e)}}class cR extends aE{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const lR=new cE,uR=new cR,hR=new cE(!0);const pf=t=>t,Tc=t=>Reflect.getPrototypeOf(t);function fR(t,e,n){return function(...s){const r=this.__v_raw,i=Ce(r),o=Ri(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),h=n?pf:e?ul:At;return!e&&Ft(i,"iterate",c?df:Lr),{next(){const{value:f,done:d}=u.next();return d?{value:f,done:d}:{value:a?[h(f[0]),h(f[1])]:h(f),done:d}},[Symbol.iterator](){return this}}}}function Ic(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function dR(t,e){const n={get(r){const i=this.__v_raw,o=Ce(i),a=Ce(r);t||(er(r,a)&&Ft(o,"get",r),Ft(o,"get",a));const{has:c}=Tc(o),u=e?pf:t?ul:At;if(c.call(o,r))return u(i.get(r));if(c.call(o,a))return u(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&Ft(Ce(r),"iterate",Lr),r.size},has(r){const i=this.__v_raw,o=Ce(i),a=Ce(r);return t||(er(r,a)&&Ft(o,"has",r),Ft(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,c=Ce(a),u=e?pf:t?ul:At;return!t&&Ft(c,"iterate",Lr),a.forEach((h,f)=>r.call(i,u(h),u(f),o))}};return Et(n,t?{add:Ic("add"),set:Ic("set"),delete:Ic("delete"),clear:Ic("clear")}:{add(r){!e&&!wn(r)&&!Ts(r)&&(r=Ce(r));const i=Ce(this);return Tc(i).has.call(i,r)||(i.add(r),ds(i,"add",r,r)),this},set(r,i){!e&&!wn(i)&&!Ts(i)&&(i=Ce(i));const o=Ce(this),{has:a,get:c}=Tc(o);let u=a.call(o,r);u||(r=Ce(r),u=a.call(o,r));const h=c.call(o,r);return o.set(r,i),u?er(i,h)&&ds(o,"set",r,i):ds(o,"add",r,i),this},delete(r){const i=Ce(this),{has:o,get:a}=Tc(i);let c=o.call(i,r);c||(r=Ce(r),c=o.call(i,r)),a&&a.call(i,r);const u=i.delete(r);return c&&ds(i,"delete",r,void 0),u},clear(){const r=Ce(this),i=r.size!==0,o=r.clear();return i&&ds(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=fR(r,t,e)}),n}function tp(t,e){const n=dR(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Oe(n,r)&&r in s?n:s,r,i)}const pR={get:tp(!1,!1)},gR={get:tp(!1,!0)},mR={get:tp(!0,!1)};const lE=new WeakMap,uE=new WeakMap,hE=new WeakMap,_R=new WeakMap;function yR(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vR(t){return t.__v_skip||!Object.isExtensible(t)?0:yR(WA(t))}function Vn(t){return Ts(t)?t:np(t,!1,lR,pR,lE)}function zn(t){return np(t,!1,hR,gR,uE)}function gf(t){return np(t,!0,uR,mR,hE)}function np(t,e,n,s,r){if(!Be(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=vR(t);if(i===0)return t;const o=r.get(t);if(o)return o;const a=new Proxy(t,i===2?s:n);return r.set(t,a),a}function Vr(t){return Ts(t)?Vr(t.__v_raw):!!(t&&t.__v_isReactive)}function Ts(t){return!!(t&&t.__v_isReadonly)}function wn(t){return!!(t&&t.__v_isShallow)}function sp(t){return t?!!t.__v_raw:!1}function Ce(t){const e=t&&t.__v_raw;return e?Ce(e):t}function mf(t){return!Oe(t,"__v_skip")&&Object.isExtensible(t)&&Ww(t,"__v_skip",!0),t}const At=t=>Be(t)?Vn(t):t,ul=t=>Be(t)?gf(t):t;function rt(t){return t?t.__v_isRef===!0:!1}function pt(t){return fE(t,!1)}function Is(t){return fE(t,!0)}function fE(t,e){return rt(t)?t:new wR(t,e)}class wR{constructor(e,n){this.dep=new ep,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ce(e),this._value=n?e:At(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||wn(e)||Ts(e);e=s?e:Ce(e),er(e,n)&&(this._rawValue=e,this._value=s?e:At(e),this.dep.trigger())}}function Ge(t){return rt(t)?t.value:t}function cn(t){return ue(t)?t():Ge(t)}const ER={get:(t,e,n)=>e==="__v_raw"?t:Ge(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return rt(r)&&!rt(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function dE(t){return Vr(t)?t:new Proxy(t,ER)}class TR{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return sR(Ce(this._object),this._key)}}class IR{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function pE(t,e,n){return rt(t)?t:ue(t)?new IR(t):Be(t)&&arguments.length>1?bR(t,e,n):pt(t)}function bR(t,e,n){const s=t[e];return rt(s)?s:new TR(t,e,n)}class SR{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ep(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ia-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&He!==this)return eE(this,!0),!0}get value(){const e=this.dep.track();return sE(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function CR(t,e,n=!1){let s,r;return ue(t)?s=t:(s=t.get,r=t.set),new SR(s,r,n)}const bc={},hl=new WeakMap;let kr;function AR(t,e=!1,n=kr){if(n){let s=hl.get(n);s||hl.set(n,s=[]),s.push(t)}}function RR(t,e,n=je){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:c}=n,u=S=>r?S:wn(S)||r===!1||r===0?ps(S,1):ps(S);let h,f,d,g,_=!1,v=!1;if(rt(t)?(f=()=>t.value,_=wn(t)):Vr(t)?(f=()=>u(t),_=!0):ce(t)?(v=!0,_=t.some(S=>Vr(S)||wn(S)),f=()=>t.map(S=>{if(rt(S))return S.value;if(Vr(S))return u(S);if(ue(S))return c?c(S,2):S()})):ue(t)?e?f=c?()=>c(t,2):t:f=()=>{if(d){ws();try{d()}finally{Es()}}const S=kr;kr=h;try{return c?c(t,3,[g]):t(g)}finally{kr=S}}:f=Qn,e&&r){const S=f,x=r===!0?1/0:r;f=()=>ps(S(),x)}const I=Yd(),D=()=>{h.stop(),I&&I.active&&Gd(I.effects,h)};if(i&&e){const S=e;e=(...x)=>{S(...x),D()}}let O=v?new Array(t.length).fill(bc):bc;const y=S=>{if(!(!(h.flags&1)||!h.dirty&&!S))if(e){const x=h.run();if(r||_||(v?x.some((L,b)=>er(L,O[b])):er(x,O))){d&&d();const L=kr;kr=h;try{const b=[x,O===bc?void 0:v&&O[0]===bc?[]:O,g];O=x,c?c(e,3,b):e(...b)}finally{kr=L}}}else h.run()};return a&&a(y),h=new Jw(f),h.scheduler=o?()=>o(y,!1):y,g=S=>AR(S,!1,h),d=h.onStop=()=>{const S=hl.get(h);if(S){if(c)c(S,4);else for(const x of S)x();hl.delete(h)}},e?s?y(!0):O=h.run():o?o(y.bind(null,!0),!0):h.run(),D.pause=h.pause.bind(h),D.resume=h.resume.bind(h),D.stop=D,D}function ps(t,e=1/0,n){if(e<=0||!Be(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,rt(t))ps(t.value,e,n);else if(ce(t))for(let s=0;s<t.length;s++)ps(t[s],e,n);else if(jw(t)||Ri(t))t.forEach(s=>{ps(s,e,n)});else if(qw(t)){for(const s in t)ps(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&ps(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ka(t,e,n,s){try{return s?t(...s):t()}catch(r){ro(r,e,n)}}function On(t,e,n,s){if(ue(t)){const r=Ka(t,e,n,s);return r&&Bw(r)&&r.catch(i=>{ro(i,e,n)}),r}if(ce(t)){const r=[];for(let i=0;i<t.length;i++)r.push(On(t[i],e,n,s));return r}}function ro(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||je;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const h=a.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](t,c,u)===!1)return}a=a.parent}if(i){ws(),Ka(i,null,10,[t,c,u]),Es();return}}PR(t,n,r,s,o)}function PR(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const Yt=[];let Bn=-1;const Ni=[];let Hs=null,mi=0;const gE=Promise.resolve();let fl=null;function zr(t){const e=fl||gE;return t?e.then(this?t.bind(this):t):e}function kR(t){let e=Bn+1,n=Yt.length;for(;e<n;){const s=e+n>>>1,r=Yt[s],i=Sa(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function rp(t){if(!(t.flags&1)){const e=Sa(t),n=Yt[Yt.length-1];!n||!(t.flags&2)&&e>=Sa(n)?Yt.push(t):Yt.splice(kR(e),0,t),t.flags|=1,mE()}}function mE(){fl||(fl=gE.then(_E))}function _f(t){ce(t)?Ni.push(...t):Hs&&t.id===-1?Hs.splice(mi+1,0,t):t.flags&1||(Ni.push(t),t.flags|=1),mE()}function jm(t,e,n=Bn+1){for(;n<Yt.length;n++){const s=Yt[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Yt.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function dl(t){if(Ni.length){const e=[...new Set(Ni)].sort((n,s)=>Sa(n)-Sa(s));if(Ni.length=0,Hs){Hs.push(...e);return}for(Hs=e,mi=0;mi<Hs.length;mi++){const n=Hs[mi];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Hs=null,mi=0}}const Sa=t=>t.id==null?t.flags&2?-1:1/0:t.id;function _E(t){try{for(Bn=0;Bn<Yt.length;Bn++){const e=Yt[Bn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ka(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Bn<Yt.length;Bn++){const e=Yt[Bn];e&&(e.flags&=-2)}Bn=-1,Yt.length=0,dl(),fl=null,(Yt.length||Ni.length)&&_E()}}let kt=null,yE=null;function pl(t){const e=kt;return kt=t,yE=t&&t.type.__scopeId||null,e}function fu(t,e=kt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&vl(-1);const i=pl(e);let o;try{o=t(...r)}finally{pl(i),s._d&&vl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function cB(t,e){if(kt===null)return t;const n=_u(kt),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,a,c=je]=e[r];i&&(ue(i)&&(i={mounted:i,updated:i}),i.deep&&ps(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Hn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(ws(),On(c,n,8,[t.el,a,t,e]),Es())}}const NR=Symbol("_vte"),vE=t=>t.__isTeleport,fs=Symbol("_leaveCb"),Sc=Symbol("_enterCb");function OR(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Qa(()=>{t.isMounted=!0}),io(()=>{t.isUnmounting=!0}),t}const pn=[Function,Array],wE={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:pn,onEnter:pn,onAfterEnter:pn,onEnterCancelled:pn,onBeforeLeave:pn,onLeave:pn,onAfterLeave:pn,onLeaveCancelled:pn,onBeforeAppear:pn,onAppear:pn,onAfterAppear:pn,onAppearCancelled:pn},EE=t=>{const e=t.subTree;return e.component?EE(e.component):e},xR={name:"BaseTransition",props:wE,setup(t,{slots:e}){const n=Ns(),s=OR();return()=>{const r=e.default&&bE(e.default(),!0);if(!r||!r.length)return;const i=TE(r),o=Ce(t),{mode:a}=o;if(s.isLeaving)return yh(i);const c=Bm(i);if(!c)return yh(i);let u=yf(c,o,s,n,f=>u=f);c.type!==at&&Bi(c,u);let h=n.subTree&&Bm(n.subTree);if(h&&h.type!==at&&!Sn(h,c)&&EE(n).type!==at){let f=yf(h,o,s,n);if(Bi(h,f),a==="out-in"&&c.type!==at)return s.isLeaving=!0,f.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,h=void 0},yh(i);a==="in-out"&&c.type!==at?f.delayLeave=(d,g,_)=>{const v=IE(s,h);v[String(h.key)]=h,d[fs]=()=>{g(),d[fs]=void 0,delete u.delayedLeave,h=void 0},u.delayedLeave=()=>{_(),delete u.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return i}}};function TE(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==at){e=n;break}}return e}const DR=xR;function IE(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function yf(t,e,n,s,r){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:h,onEnterCancelled:f,onBeforeLeave:d,onLeave:g,onAfterLeave:_,onLeaveCancelled:v,onBeforeAppear:I,onAppear:D,onAfterAppear:O,onAppearCancelled:y}=e,S=String(t.key),x=IE(n,t),L=(E,A)=>{E&&On(E,s,9,A)},b=(E,A)=>{const k=A[1];L(E,A),ce(E)?E.every(P=>P.length<=1)&&k():E.length<=1&&k()},T={mode:o,persisted:a,beforeEnter(E){let A=c;if(!n.isMounted)if(i)A=I||c;else return;E[fs]&&E[fs](!0);const k=x[S];k&&Sn(t,k)&&k.el[fs]&&k.el[fs](),L(A,[E])},enter(E){let A=u,k=h,P=f;if(!n.isMounted)if(i)A=D||u,k=O||h,P=y||f;else return;let C=!1;const le=E[Sc]=_e=>{C||(C=!0,_e?L(P,[E]):L(k,[E]),T.delayedLeave&&T.delayedLeave(),E[Sc]=void 0)};A?b(A,[E,le]):le()},leave(E,A){const k=String(t.key);if(E[Sc]&&E[Sc](!0),n.isUnmounting)return A();L(d,[E]);let P=!1;const C=E[fs]=le=>{P||(P=!0,A(),le?L(v,[E]):L(_,[E]),E[fs]=void 0,x[k]===t&&delete x[k])};x[k]=t,g?b(g,[E,C]):C()},clone(E){const A=yf(E,e,n,s,r);return r&&r(A),A}};return T}function yh(t){if(Ga(t))return t=bs(t),t.children=null,t}function Bm(t){if(!Ga(t))return vE(t.type)&&t.children?TE(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ue(n.default))return n.default()}}function Bi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Bi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function bE(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ut?(o.patchFlag&128&&r++,s=s.concat(bE(o.children,e,a))):(e||o.type!==at)&&s.push(a!=null?bs(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function sn(t,e){return ue(t)?Et({name:t.name},e,{setup:t}):t}function ip(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const gl=new WeakMap;function Oi(t,e,n,s,r=!1){if(ce(t)){t.forEach((_,v)=>Oi(_,e&&(ce(e)?e[v]:e),n,s,r));return}if(tr(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Oi(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?_u(s.component):s.el,o=r?null:i,{i:a,r:c}=t,u=e&&e.r,h=a.refs===je?a.refs={}:a.refs,f=a.setupState,d=Ce(f),g=f===je?$w:_=>Oe(d,_);if(u!=null&&u!==c){if(Hm(e),Xe(u))h[u]=null,g(u)&&(f[u]=null);else if(rt(u)){u.value=null;const _=e;_.k&&(h[_.k]=null)}}if(ue(c))Ka(c,a,12,[o,h]);else{const _=Xe(c),v=rt(c);if(_||v){const I=()=>{if(t.f){const D=_?g(c)?f[c]:h[c]:c.value;if(r)ce(D)&&Gd(D,i);else if(ce(D))D.includes(i)||D.push(i);else if(_)h[c]=[i],g(c)&&(f[c]=h[c]);else{const O=[i];c.value=O,t.k&&(h[t.k]=O)}}else _?(h[c]=o,g(c)&&(f[c]=o)):v&&(c.value=o,t.k&&(h[t.k]=o))};if(o){const D=()=>{I(),gl.delete(t)};D.id=-1,gl.set(t,D),Ct(D,n)}else Hm(t),I()}}}function Hm(t){const e=gl.get(t);e&&(e.flags|=8,gl.delete(t))}let qm=!1;const pi=()=>{qm||(console.error("Hydration completed but contains mismatches."),qm=!0)},MR=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",LR=t=>t.namespaceURI.includes("MathML"),Cc=t=>{if(t.nodeType===1){if(MR(t))return"svg";if(LR(t))return"mathml"}},Ii=t=>t.nodeType===8;function VR(t){const{mt:e,p:n,o:{patchProp:s,createText:r,nextSibling:i,parentNode:o,remove:a,insert:c,createComment:u}}=t,h=(y,S)=>{if(!S.hasChildNodes()){n(null,y,S),dl(),S._vnode=y;return}f(S.firstChild,y,null,null,null),dl(),S._vnode=y},f=(y,S,x,L,b,T=!1)=>{T=T||!!S.dynamicChildren;const E=Ii(y)&&y.data==="[",A=()=>v(y,S,x,L,b,E),{type:k,ref:P,shapeFlag:C,patchFlag:le}=S;let _e=y.nodeType;S.el=y,le===-2&&(T=!1,S.dynamicChildren=null);let se=null;switch(k){case Ur:_e!==3?S.children===""?(c(S.el=r(""),o(y),y),se=y):se=A():(y.data!==S.children&&(pi(),y.data=S.children),se=i(y));break;case at:O(y)?(se=i(y),D(S.el=y.content.firstChild,y,x)):_e!==8||E?se=A():se=i(y);break;case aa:if(E&&(y=i(y),_e=y.nodeType),_e===1||_e===3){se=y;const fe=!S.children.length;for(let ne=0;ne<S.staticCount;ne++)fe&&(S.children+=se.nodeType===1?se.outerHTML:se.data),ne===S.staticCount-1&&(S.anchor=se),se=i(se);return E?i(se):se}else A();break;case Ut:E?se=_(y,S,x,L,b,T):se=A();break;default:if(C&1)(_e!==1||S.type.toLowerCase()!==y.tagName.toLowerCase())&&!O(y)?se=A():se=d(y,S,x,L,b,T);else if(C&6){S.slotScopeIds=b;const fe=o(y);if(E?se=I(y):Ii(y)&&y.data==="teleport start"?se=I(y,y.data,"teleport end"):se=i(y),e(S,fe,null,x,L,Cc(fe),T),tr(S)&&!S.type.__asyncResolved){let ne;E?(ne=Me(Ut),ne.anchor=se?se.previousSibling:fe.lastChild):ne=y.nodeType===3?la(""):Me("div"),ne.el=y,S.component.subTree=ne}}else C&64?_e!==8?se=A():se=S.type.hydrate(y,S,x,L,b,T,t,g):C&128&&(se=S.type.hydrate(y,S,x,L,Cc(o(y)),b,T,t,f))}return P!=null&&Oi(P,null,L,S),se},d=(y,S,x,L,b,T)=>{T=T||!!S.dynamicChildren;const{type:E,props:A,patchFlag:k,shapeFlag:P,dirs:C,transition:le}=S,_e=E==="input"||E==="option";if(_e||k!==-1){C&&Hn(S,null,x,"created");let se=!1;if(O(y)){se=KE(null,le)&&x&&x.vnode.props&&x.vnode.props.appear;const ne=y.content.firstChild;if(se){const Fe=ne.getAttribute("class");Fe&&(ne.$cls=Fe),le.beforeEnter(ne)}D(ne,y,x),S.el=y=ne}if(P&16&&!(A&&(A.innerHTML||A.textContent))){let ne=g(y.firstChild,S,y,x,L,b,T);for(;ne;){Ac(y,1)||pi();const Fe=ne;ne=ne.nextSibling,a(Fe)}}else if(P&8){let ne=S.children;ne[0]===`
`&&(y.tagName==="PRE"||y.tagName==="TEXTAREA")&&(ne=ne.slice(1)),y.textContent!==ne&&(Ac(y,0)||pi(),y.textContent=S.children)}if(A){if(_e||!T||k&48){const ne=y.tagName.includes("-");for(const Fe in A)(_e&&(Fe.endsWith("value")||Fe==="indeterminate")||Wa(Fe)&&!Pi(Fe)||Fe[0]==="."||ne)&&s(y,Fe,null,A[Fe],void 0,x)}else if(A.onClick)s(y,"onClick",null,A.onClick,void 0,x);else if(k&4&&Vr(A.style))for(const ne in A.style)A.style[ne]}let fe;(fe=A&&A.onVnodeBeforeMount)&&Zt(fe,x,S),C&&Hn(S,null,x,"beforeMount"),((fe=A&&A.onVnodeMounted)||C||se)&&eT(()=>{fe&&Zt(fe,x,S),se&&le.enter(y),C&&Hn(S,null,x,"mounted")},L)}return y.nextSibling},g=(y,S,x,L,b,T,E)=>{E=E||!!S.dynamicChildren;const A=S.children,k=A.length;for(let P=0;P<k;P++){const C=E?A[P]:A[P]=un(A[P]),le=C.type===Ur;y?(le&&!E&&P+1<k&&un(A[P+1]).type===Ur&&(c(r(y.data.slice(C.children.length)),x,i(y)),y.data=C.children),y=f(y,C,L,b,T,E)):le&&!C.children?c(C.el=r(""),x):(Ac(x,1)||pi(),n(null,C,x,null,L,b,Cc(x),T))}return y},_=(y,S,x,L,b,T)=>{const{slotScopeIds:E}=S;E&&(b=b?b.concat(E):E);const A=o(y),k=g(i(y),S,A,x,L,b,T);return k&&Ii(k)&&k.data==="]"?i(S.anchor=k):(pi(),c(S.anchor=u("]"),A,k),k)},v=(y,S,x,L,b,T)=>{if(Ac(y.parentElement,1)||pi(),S.el=null,T){const k=I(y);for(;;){const P=i(y);if(P&&P!==k)a(P);else break}}const E=i(y),A=o(y);return a(y),n(null,S,A,E,x,L,Cc(A),b),x&&(x.vnode.el=S.el,mu(x,S.el)),E},I=(y,S="[",x="]")=>{let L=0;for(;y;)if(y=i(y),y&&Ii(y)&&(y.data===S&&L++,y.data===x)){if(L===0)return i(y);L--}return y},D=(y,S,x)=>{const L=S.parentNode;L&&L.replaceChild(y,S);let b=x;for(;b;)b.vnode.el===S&&(b.vnode.el=b.subTree.el=y),b=b.parent},O=y=>y.nodeType===1&&y.tagName==="TEMPLATE";return[h,f]}const Wm="data-allow-mismatch",FR={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function Ac(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(Wm);)t=t.parentElement;const n=t&&t.getAttribute(Wm);if(n==null)return!1;if(n==="")return!0;{const s=n.split(",");return e===0&&s.includes("children")?!0:s.includes(FR[e])}}cu().requestIdleCallback;cu().cancelIdleCallback;function UR(t,e){if(Ii(t)&&t.data==="["){let n=1,s=t.nextSibling;for(;s;){if(s.nodeType===1){if(e(s)===!1)break}else if(Ii(s))if(s.data==="]"){if(--n===0)break}else s.data==="["&&n++;s=s.nextSibling}}else e(t)}const tr=t=>!!t.type.__asyncLoader;function vf(t){ue(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:s,delay:r=200,hydrate:i,timeout:o,suspensible:a=!0,onError:c}=t;let u=null,h,f=0;const d=()=>(f++,u=null,g()),g=()=>{let _;return u||(_=u=e().catch(v=>{if(v=v instanceof Error?v:new Error(String(v)),c)return new Promise((I,D)=>{c(v,()=>I(d()),()=>D(v),f+1)});throw v}).then(v=>_!==u&&u?u:(v&&(v.__esModule||v[Symbol.toStringTag]==="Module")&&(v=v.default),h=v,v)))};return sn({name:"AsyncComponentWrapper",__asyncLoader:g,__asyncHydrate(_,v,I){let D=!1;(v.bu||(v.bu=[])).push(()=>D=!0);const O=()=>{D||I()},y=i?()=>{const S=i(O,x=>UR(_,x));S&&(v.bum||(v.bum=[])).push(S)}:O;h?y():g().then(()=>!v.isUnmounted&&y())},get __asyncResolved(){return h},setup(){const _=Rt;if(ip(_),h)return()=>vh(h,_);const v=y=>{u=null,ro(y,_,13,!s)};if(a&&_.suspense||qi)return g().then(y=>()=>vh(y,_)).catch(y=>(v(y),()=>s?Me(s,{error:y}):null));const I=pt(!1),D=pt(),O=pt(!!r);return r&&setTimeout(()=>{O.value=!1},r),o!=null&&setTimeout(()=>{if(!I.value&&!D.value){const y=new Error(`Async component timed out after ${o}ms.`);v(y),D.value=y}},o),g().then(()=>{I.value=!0,_.parent&&Ga(_.parent.vnode)&&_.parent.update()}).catch(y=>{v(y),D.value=y}),()=>{if(I.value&&h)return vh(h,_);if(D.value&&s)return Me(s,{error:D.value});if(n&&!O.value)return Me(n)}}})}function vh(t,e){const{ref:n,props:s,children:r,ce:i}=e.vnode,o=Me(t,s,r);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const Ga=t=>t.type.__isKeepAlive,$R={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Ns(),s=n.ctx;if(!s.renderer)return()=>{const O=e.default&&e.default();return O&&O.length===1?O[0]:O};const r=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:c,m:u,um:h,o:{createElement:f}}}=s,d=f("div");s.activate=(O,y,S,x,L)=>{const b=O.component;u(O,y,S,0,a),c(b.vnode,O,y,S,b,a,x,O.slotScopeIds,L),Ct(()=>{b.isDeactivated=!1,b.a&&ki(b.a);const T=O.props&&O.props.onVnodeMounted;T&&Zt(T,b.parent,O)},a)},s.deactivate=O=>{const y=O.component;_l(y.m),_l(y.a),u(O,d,null,1,a),Ct(()=>{y.da&&ki(y.da);const S=O.props&&O.props.onVnodeUnmounted;S&&Zt(S,y.parent,O),y.isDeactivated=!0},a)};function g(O){wh(O),h(O,n,a,!0)}function _(O){r.forEach((y,S)=>{const x=Af(y.type);x&&!O(x)&&v(S)})}function v(O){const y=r.get(O);y&&(!o||!Sn(y,o))?g(y):o&&wh(o),r.delete(O),i.delete(O)}kn(()=>[t.include,t.exclude],([O,y])=>{O&&_(S=>Xo(O,S)),y&&_(S=>!Xo(y,S))},{flush:"post",deep:!0});let I=null;const D=()=>{I!=null&&(yl(n.subTree.type)?Ct(()=>{r.set(I,Rc(n.subTree))},n.subTree.suspense):r.set(I,Rc(n.subTree)))};return Qa(D),RE(D),io(()=>{r.forEach(O=>{const{subTree:y,suspense:S}=n,x=Rc(y);if(O.type===x.type&&O.key===x.key){wh(x);const L=x.component.da;L&&Ct(L,S);return}g(O)})}),()=>{if(I=null,!e.default)return o=null;const O=e.default(),y=O[0];if(O.length>1)return o=null,O;if(!Kr(y)||!(y.shapeFlag&4)&&!(y.shapeFlag&128))return o=null,y;let S=Rc(y);if(S.type===at)return o=null,S;const x=S.type,L=Af(tr(S)?S.type.__asyncResolved||{}:x),{include:b,exclude:T,max:E}=t;if(b&&(!L||!Xo(b,L))||T&&L&&Xo(T,L))return S.shapeFlag&=-257,o=S,y;const A=S.key==null?x:S.key,k=r.get(A);return S.el&&(S=bs(S),y.shapeFlag&128&&(y.ssContent=S)),I=A,k?(S.el=k.el,S.component=k.component,S.transition&&Bi(S,S.transition),S.shapeFlag|=512,i.delete(A),i.add(A)):(i.add(A),E&&i.size>parseInt(E,10)&&v(i.values().next().value)),S.shapeFlag|=256,o=S,yl(y.type)?y:S}}},jR=$R;function Xo(t,e){return ce(t)?t.some(n=>Xo(n,e)):Xe(t)?t.split(",").includes(e):qA(t)?(t.lastIndex=0,t.test(e)):!1}function SE(t,e){AE(t,"a",e)}function CE(t,e){AE(t,"da",e)}function AE(t,e,n=Rt){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(du(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Ga(r.parent.vnode)&&BR(s,e,n,r),r=r.parent}}function BR(t,e,n,s){const r=du(e,t,s,!0);op(()=>{Gd(s[e],r)},n)}function wh(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Rc(t){return t.shapeFlag&128?t.ssContent:t}function du(t,e,n=Rt,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{ws();const a=Ya(n),c=On(e,n,t,o);return a(),Es(),c});return s?r.unshift(i):r.push(i),i}}const ks=t=>(e,n=Rt)=>{(!qi||t==="sp")&&du(t,(...s)=>e(...s),n)},HR=ks("bm"),Qa=ks("m"),qR=ks("bu"),RE=ks("u"),io=ks("bum"),op=ks("um"),PE=ks("sp"),WR=ks("rtg"),zR=ks("rtc");function kE(t,e=Rt){du("ec",t,e)}const NE="components";function zm(t,e){return xE(NE,t,!0,e)||t}const OE=Symbol.for("v-ndc");function KR(t){return Xe(t)?xE(NE,t,!1)||t:t||OE}function xE(t,e,n=!0,s=!1){const r=kt||Rt;if(r){const i=r.type;{const a=Af(i,!1);if(a&&(a===e||a===Tn(e)||a===au(Tn(e))))return i}const o=Km(r[t]||i[t],e)||Km(r.appContext[t],e);return!o&&s?i:o}}function Km(t,e){return t&&(t[e]||t[Tn(e)]||t[au(Tn(e))])}function lB(t,e,n,s){let r;const i=n,o=ce(t);if(o||Xe(t)){const a=o&&Vr(t);let c=!1,u=!1;a&&(c=!wn(t),u=Ts(t),t=hu(t)),r=new Array(t.length);for(let h=0,f=t.length;h<f;h++)r[h]=e(c?u?ul(At(t[h])):At(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,i)}else if(Be(t))if(t[Symbol.iterator])r=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);r=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const h=a[c];r[c]=e(t[h],h,c,i)}}else r=[];return r}function uB(t,e,n={},s,r){if(kt.ce||kt.parent&&tr(kt.parent)&&kt.parent.ce){const u=Object.keys(n).length>0;return ln(),zs(Ut,null,[Me("slot",n,s&&s())],u?-2:64)}let i=t[e];i&&i._c&&(i._d=!1),ln();const o=i&&DE(i(n)),a=n.key||o&&o.key,c=zs(Ut,{key:(a&&!Ps(a)?a:`_${e}`)+(!o&&s?"_fb":"")},o||(s?s():[]),o&&t._===1?64:-2);return!r&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function DE(t){return t.some(e=>Kr(e)?!(e.type===at||e.type===Ut&&!DE(e.children)):!0)?t:null}const wf=t=>t?iT(t)?_u(t):wf(t.parent):null,oa=Et(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>wf(t.parent),$root:t=>wf(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>LE(t),$forceUpdate:t=>t.f||(t.f=()=>{rp(t.update)}),$nextTick:t=>t.n||(t.n=zr.bind(t.proxy)),$watch:t=>p0.bind(t)}),Eh=(t,e)=>t!==je&&!t.__isScriptSetup&&Oe(t,e),GR={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Eh(s,e))return o[e]=1,s[e];if(r!==je&&Oe(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&Oe(u,e))return o[e]=3,i[e];if(n!==je&&Oe(n,e))return o[e]=4,n[e];Ef&&(o[e]=0)}}const h=oa[e];let f,d;if(h)return e==="$attrs"&&Ft(t.attrs,"get",""),h(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==je&&Oe(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,Oe(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Eh(r,e)?(r[e]=n,!0):s!==je&&Oe(s,e)?(s[e]=n,!0):Oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i,type:o}},a){let c,u;return!!(n[a]||t!==je&&a[0]!=="$"&&Oe(t,a)||Eh(e,a)||(c=i[0])&&Oe(c,a)||Oe(s,a)||Oe(oa,a)||Oe(r.config.globalProperties,a)||(u=o.__cssModules)&&u[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function hB(){return QR().attrs}function QR(t){const e=Ns();return e.setupContext||(e.setupContext=aT(e))}function Gm(t){return ce(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ef=!0;function YR(t){const e=LE(t),n=t.proxy,s=t.ctx;Ef=!1,e.beforeCreate&&Qm(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:h,beforeMount:f,mounted:d,beforeUpdate:g,updated:_,activated:v,deactivated:I,beforeDestroy:D,beforeUnmount:O,destroyed:y,unmounted:S,render:x,renderTracked:L,renderTriggered:b,errorCaptured:T,serverPrefetch:E,expose:A,inheritAttrs:k,components:P,directives:C,filters:le}=e;if(u&&XR(u,s,null),o)for(const fe in o){const ne=o[fe];ue(ne)&&(s[fe]=ne.bind(n))}if(r){const fe=r.call(n,n);Be(fe)&&(t.data=Vn(fe))}if(Ef=!0,i)for(const fe in i){const ne=i[fe],Fe=ue(ne)?ne.bind(n,n):ue(ne.get)?ne.get.bind(n,n):Qn,Un=!ue(ne)&&ue(ne.set)?ne.set.bind(n):Qn,rn=Le({get:Fe,set:Un});Object.defineProperty(s,fe,{enumerable:!0,configurable:!0,get:()=>rn.value,set:St=>rn.value=St})}if(a)for(const fe in a)ME(a[fe],s,n,fe);if(c){const fe=ue(c)?c.call(n):c;Reflect.ownKeys(fe).forEach(ne=>{nr(ne,fe[ne])})}h&&Qm(h,t,"c");function se(fe,ne){ce(ne)?ne.forEach(Fe=>fe(Fe.bind(n))):ne&&fe(ne.bind(n))}if(se(HR,f),se(Qa,d),se(qR,g),se(RE,_),se(SE,v),se(CE,I),se(kE,T),se(zR,L),se(WR,b),se(io,O),se(op,S),se(PE,E),ce(A))if(A.length){const fe=t.exposed||(t.exposed={});A.forEach(ne=>{Object.defineProperty(fe,ne,{get:()=>n[ne],set:Fe=>n[ne]=Fe,enumerable:!0})})}else t.exposed||(t.exposed={});x&&t.render===Qn&&(t.render=x),k!=null&&(t.inheritAttrs=k),P&&(t.components=P),C&&(t.directives=C),E&&ip(t)}function XR(t,e,n=Qn){ce(t)&&(t=Tf(t));for(const s in t){const r=t[s];let i;Be(r)?"default"in r?i=it(r.from||s,r.default,!0):i=it(r.from||s):i=it(r),rt(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Qm(t,e,n){On(ce(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function ME(t,e,n,s){let r=s.includes(".")?XE(n,s):()=>n[s];if(Xe(t)){const i=e[t];ue(i)&&kn(r,i)}else if(ue(t))kn(r,t.bind(n));else if(Be(t))if(ce(t))t.forEach(i=>ME(i,e,n,s));else{const i=ue(t.handler)?t.handler.bind(n):e[t.handler];ue(i)&&kn(r,i,t)}}function LE(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>ml(c,u,o,!0)),ml(c,e,o)),Be(e)&&i.set(e,c),c}function ml(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&ml(t,i,n,!0),r&&r.forEach(o=>ml(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=JR[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const JR={data:Ym,props:Xm,emits:Xm,methods:Jo,computed:Jo,beforeCreate:Qt,created:Qt,beforeMount:Qt,mounted:Qt,beforeUpdate:Qt,updated:Qt,beforeDestroy:Qt,beforeUnmount:Qt,destroyed:Qt,unmounted:Qt,activated:Qt,deactivated:Qt,errorCaptured:Qt,serverPrefetch:Qt,components:Jo,directives:Jo,watch:e0,provide:Ym,inject:ZR};function Ym(t,e){return e?t?function(){return Et(ue(t)?t.call(this,this):t,ue(e)?e.call(this,this):e)}:e:t}function ZR(t,e){return Jo(Tf(t),Tf(e))}function Tf(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Qt(t,e){return t?[...new Set([].concat(t,e))]:e}function Jo(t,e){return t?Et(Object.create(null),t,e):e}function Xm(t,e){return t?ce(t)&&ce(e)?[...new Set([...t,...e])]:Et(Object.create(null),Gm(t),Gm(e??{})):e}function e0(t,e){if(!t)return e;if(!e)return t;const n=Et(Object.create(null),t);for(const s in e)n[s]=Qt(t[s],e[s]);return n}function VE(){return{app:null,config:{isNativeTag:$w,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let t0=0;function n0(t,e){return function(s,r=null){ue(s)||(s=Et({},s)),r!=null&&!Be(r)&&(r=null);const i=VE(),o=new WeakSet,a=[];let c=!1;const u=i.app={_uid:t0++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:F0,get config(){return i.config},set config(h){},use(h,...f){return o.has(h)||(h&&ue(h.install)?(o.add(h),h.install(u,...f)):ue(h)&&(o.add(h),h(u,...f))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,f){return f?(i.components[h]=f,u):i.components[h]},directive(h,f){return f?(i.directives[h]=f,u):i.directives[h]},mount(h,f,d){if(!c){const g=u._ceVNode||Me(s,r);return g.appContext=i,d===!0?d="svg":d===!1&&(d=void 0),f&&e?e(g,h):t(g,h,d),c=!0,u._container=h,h.__vue_app__=u,_u(g.component)}},onUnmount(h){a.push(h)},unmount(){c&&(On(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,f){return i.provides[h]=f,u},runWithContext(h){const f=Fr;Fr=u;try{return h()}finally{Fr=f}}};return u}}let Fr=null;function nr(t,e){if(Rt){let n=Rt.provides;const s=Rt.parent&&Rt.parent.provides;s===n&&(n=Rt.provides=Object.create(s)),n[t]=e}}function it(t,e,n=!1){const s=Ns();if(s||Fr){let r=Fr?Fr._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ue(e)?e.call(s&&s.proxy):e}}function pu(){return!!(Ns()||Fr)}const FE={},UE=()=>Object.create(FE),$E=t=>Object.getPrototypeOf(t)===FE;function s0(t,e,n,s=!1){const r={},i=UE();t.propsDefaults=Object.create(null),jE(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:zn(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function r0(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=Ce(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let f=0;f<h.length;f++){let d=h[f];if(gu(t.emitsOptions,d))continue;const g=e[d];if(c)if(Oe(i,d))g!==i[d]&&(i[d]=g,u=!0);else{const _=Tn(d);r[_]=If(c,a,_,g,t,!1)}else g!==i[d]&&(i[d]=g,u=!0)}}}else{jE(t,e,r,i)&&(u=!0);let h;for(const f in a)(!e||!Oe(e,f)&&((h=si(f))===f||!Oe(e,h)))&&(c?n&&(n[f]!==void 0||n[h]!==void 0)&&(r[f]=If(c,a,f,void 0,t,!0)):delete r[f]);if(i!==a)for(const f in i)(!e||!Oe(e,f))&&(delete i[f],u=!0)}u&&ds(t.attrs,"set","")}function jE(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Pi(c))continue;const u=e[c];let h;r&&Oe(r,h=Tn(c))?!i||!i.includes(h)?n[h]=u:(a||(a={}))[h]=u:gu(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=Ce(n),u=a||je;for(let h=0;h<i.length;h++){const f=i[h];n[f]=If(r,c,f,u[f],t,!Oe(u,f))}}return o}function If(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=Oe(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ue(c)){const{propsDefaults:u}=r;if(n in u)s=u[n];else{const h=Ya(r);s=u[n]=c.call(null,e),h()}}else s=c;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===si(n))&&(s=!0))}return s}const i0=new WeakMap;function BE(t,e,n=!1){const s=n?i0:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!ue(t)){const h=f=>{c=!0;const[d,g]=BE(f,e,!0);Et(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!c)return Be(t)&&s.set(t,Ai),Ai;if(ce(i))for(let h=0;h<i.length;h++){const f=Tn(i[h]);Jm(f)&&(o[f]=je)}else if(i)for(const h in i){const f=Tn(h);if(Jm(f)){const d=i[h],g=o[f]=ce(d)||ue(d)?{type:d}:Et({},d),_=g.type;let v=!1,I=!0;if(ce(_))for(let D=0;D<_.length;++D){const O=_[D],y=ue(O)&&O.name;if(y==="Boolean"){v=!0;break}else y==="String"&&(I=!1)}else v=ue(_)&&_.name==="Boolean";g[0]=v,g[1]=I,(v||Oe(g,"default"))&&a.push(f)}}const u=[o,a];return Be(t)&&s.set(t,u),u}function Jm(t){return t[0]!=="$"&&!Pi(t)}const ap=t=>t==="_"||t==="_ctx"||t==="$stable",cp=t=>ce(t)?t.map(un):[un(t)],o0=(t,e,n)=>{if(e._n)return e;const s=fu((...r)=>cp(e(...r)),n);return s._c=!1,s},HE=(t,e,n)=>{const s=t._ctx;for(const r in t){if(ap(r))continue;const i=t[r];if(ue(i))e[r]=o0(r,i,s);else if(i!=null){const o=cp(i);e[r]=()=>o}}},qE=(t,e)=>{const n=cp(e);t.slots.default=()=>n},WE=(t,e,n)=>{for(const s in e)(n||!ap(s))&&(t[s]=e[s])},a0=(t,e,n)=>{const s=t.slots=UE();if(t.vnode.shapeFlag&32){const r=e._;r?(WE(s,e,n),n&&Ww(s,"_",r,!0)):HE(e,s)}else e&&qE(t,e)},c0=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=je;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:WE(r,e,n):(i=!e.$stable,HE(e,r)),o=e}else e&&(qE(t,e),o={default:1});if(i)for(const a in r)!ap(a)&&o[a]==null&&delete r[a]},Ct=eT;function l0(t){return zE(t)}function u0(t){return zE(t,VR)}function zE(t,e){const n=cu();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:h,parentNode:f,nextSibling:d,setScopeId:g=Qn,insertStaticContent:_}=t,v=(R,N,V,B=null,U=null,H=null,K=void 0,W=null,G=!!N.dynamicChildren)=>{if(R===N)return;R&&!Sn(R,N)&&(B=$(R),St(R,U,H,!0),R=null),N.patchFlag===-2&&(G=!1,N.dynamicChildren=null);const{type:z,ref:ae,shapeFlag:J}=N;switch(z){case Ur:I(R,N,V,B);break;case at:D(R,N,V,B);break;case aa:R==null&&O(N,V,B,K);break;case Ut:P(R,N,V,B,U,H,K,W,G);break;default:J&1?x(R,N,V,B,U,H,K,W,G):J&6?C(R,N,V,B,U,H,K,W,G):(J&64||J&128)&&z.process(R,N,V,B,U,H,K,W,G,ie)}ae!=null&&U?Oi(ae,R&&R.ref,H,N||R,!N):ae==null&&R&&R.ref!=null&&Oi(R.ref,null,H,R,!0)},I=(R,N,V,B)=>{if(R==null)s(N.el=a(N.children),V,B);else{const U=N.el=R.el;N.children!==R.children&&u(U,N.children)}},D=(R,N,V,B)=>{R==null?s(N.el=c(N.children||""),V,B):N.el=R.el},O=(R,N,V,B)=>{[R.el,R.anchor]=_(R.children,N,V,B,R.el,R.anchor)},y=({el:R,anchor:N},V,B)=>{let U;for(;R&&R!==N;)U=d(R),s(R,V,B),R=U;s(N,V,B)},S=({el:R,anchor:N})=>{let V;for(;R&&R!==N;)V=d(R),r(R),R=V;r(N)},x=(R,N,V,B,U,H,K,W,G)=>{N.type==="svg"?K="svg":N.type==="math"&&(K="mathml"),R==null?L(N,V,B,U,H,K,W,G):E(R,N,U,H,K,W,G)},L=(R,N,V,B,U,H,K,W)=>{let G,z;const{props:ae,shapeFlag:J,transition:re,dirs:he}=R;if(G=R.el=o(R.type,H,ae&&ae.is,ae),J&8?h(G,R.children):J&16&&T(R.children,G,null,B,U,Th(R,H),K,W),he&&Hn(R,null,B,"created"),b(G,R,R.scopeId,K,B),ae){for(const ke in ae)ke!=="value"&&!Pi(ke)&&i(G,ke,null,ae[ke],H,B);"value"in ae&&i(G,"value",null,ae.value,H),(z=ae.onVnodeBeforeMount)&&Zt(z,B,R)}he&&Hn(R,null,B,"beforeMount");const ye=KE(U,re);ye&&re.beforeEnter(G),s(G,N,V),((z=ae&&ae.onVnodeMounted)||ye||he)&&Ct(()=>{z&&Zt(z,B,R),ye&&re.enter(G),he&&Hn(R,null,B,"mounted")},U)},b=(R,N,V,B,U)=>{if(V&&g(R,V),B)for(let H=0;H<B.length;H++)g(R,B[H]);if(U){let H=U.subTree;if(N===H||yl(H.type)&&(H.ssContent===N||H.ssFallback===N)){const K=U.vnode;b(R,K,K.scopeId,K.slotScopeIds,U.parent)}}},T=(R,N,V,B,U,H,K,W,G=0)=>{for(let z=G;z<R.length;z++){const ae=R[z]=W?qs(R[z]):un(R[z]);v(null,ae,N,V,B,U,H,K,W)}},E=(R,N,V,B,U,H,K)=>{const W=N.el=R.el;let{patchFlag:G,dynamicChildren:z,dirs:ae}=N;G|=R.patchFlag&16;const J=R.props||je,re=N.props||je;let he;if(V&&Cr(V,!1),(he=re.onVnodeBeforeUpdate)&&Zt(he,V,N,R),ae&&Hn(N,R,V,"beforeUpdate"),V&&Cr(V,!0),(J.innerHTML&&re.innerHTML==null||J.textContent&&re.textContent==null)&&h(W,""),z?A(R.dynamicChildren,z,W,V,B,Th(N,U),H):K||ne(R,N,W,null,V,B,Th(N,U),H,!1),G>0){if(G&16)k(W,J,re,V,U);else if(G&2&&J.class!==re.class&&i(W,"class",null,re.class,U),G&4&&i(W,"style",J.style,re.style,U),G&8){const ye=N.dynamicProps;for(let ke=0;ke<ye.length;ke++){const Pe=ye[ke],xt=J[Pe],ht=re[Pe];(ht!==xt||Pe==="value")&&i(W,Pe,xt,ht,U,V)}}G&1&&R.children!==N.children&&h(W,N.children)}else!K&&z==null&&k(W,J,re,V,U);((he=re.onVnodeUpdated)||ae)&&Ct(()=>{he&&Zt(he,V,N,R),ae&&Hn(N,R,V,"updated")},B)},A=(R,N,V,B,U,H,K)=>{for(let W=0;W<N.length;W++){const G=R[W],z=N[W],ae=G.el&&(G.type===Ut||!Sn(G,z)||G.shapeFlag&198)?f(G.el):V;v(G,z,ae,null,B,U,H,K,!0)}},k=(R,N,V,B,U)=>{if(N!==V){if(N!==je)for(const H in N)!Pi(H)&&!(H in V)&&i(R,H,N[H],null,U,B);for(const H in V){if(Pi(H))continue;const K=V[H],W=N[H];K!==W&&H!=="value"&&i(R,H,W,K,U,B)}"value"in V&&i(R,"value",N.value,V.value,U)}},P=(R,N,V,B,U,H,K,W,G)=>{const z=N.el=R?R.el:a(""),ae=N.anchor=R?R.anchor:a("");let{patchFlag:J,dynamicChildren:re,slotScopeIds:he}=N;he&&(W=W?W.concat(he):he),R==null?(s(z,V,B),s(ae,V,B),T(N.children||[],V,ae,U,H,K,W,G)):J>0&&J&64&&re&&R.dynamicChildren?(A(R.dynamicChildren,re,V,U,H,K,W),(N.key!=null||U&&N===U.subTree)&&GE(R,N,!0)):ne(R,N,V,ae,U,H,K,W,G)},C=(R,N,V,B,U,H,K,W,G)=>{N.slotScopeIds=W,R==null?N.shapeFlag&512?U.ctx.activate(N,V,B,K,G):le(N,V,B,U,H,K,G):_e(R,N,G)},le=(R,N,V,B,U,H,K)=>{const W=R.component=x0(R,B,U);if(Ga(R)&&(W.ctx.renderer=ie),D0(W,!1,K),W.asyncDep){if(U&&U.registerDep(W,se,K),!R.el){const G=W.subTree=Me(at);D(null,G,N,V),R.placeholder=G.el}}else se(W,R,N,V,U,H,K)},_e=(R,N,V)=>{const B=N.component=R.component;if(E0(R,N,V))if(B.asyncDep&&!B.asyncResolved){fe(B,N,V);return}else B.next=N,B.update();else N.el=R.el,B.vnode=N},se=(R,N,V,B,U,H,K)=>{const W=()=>{if(R.isMounted){let{next:J,bu:re,u:he,parent:ye,vnode:ke}=R;{const ft=QE(R);if(ft){J&&(J.el=ke.el,fe(R,J,K)),ft.asyncDep.then(()=>{R.isUnmounted||W()});return}}let Pe=J,xt;Cr(R,!1),J?(J.el=ke.el,fe(R,J,K)):J=ke,re&&ki(re),(xt=J.props&&J.props.onVnodeBeforeUpdate)&&Zt(xt,ye,J,ke),Cr(R,!0);const ht=Ih(R),Jt=R.subTree;R.subTree=ht,v(Jt,ht,f(Jt.el),$(Jt),R,U,H),J.el=ht.el,Pe===null&&mu(R,ht.el),he&&Ct(he,U),(xt=J.props&&J.props.onVnodeUpdated)&&Ct(()=>Zt(xt,ye,J,ke),U)}else{let J;const{el:re,props:he}=N,{bm:ye,m:ke,parent:Pe,root:xt,type:ht}=R,Jt=tr(N);if(Cr(R,!1),ye&&ki(ye),!Jt&&(J=he&&he.onVnodeBeforeMount)&&Zt(J,Pe,N),Cr(R,!0),re&&Ue){const ft=()=>{R.subTree=Ih(R),Ue(re,R.subTree,R,U,null)};Jt&&ht.__asyncHydrate?ht.__asyncHydrate(re,R,ft):ft()}else{xt.ce&&xt.ce._def.shadowRoot!==!1&&xt.ce._injectChildStyle(ht);const ft=R.subTree=Ih(R);v(null,ft,V,B,R,U,H),N.el=ft.el}if(ke&&Ct(ke,U),!Jt&&(J=he&&he.onVnodeMounted)){const ft=N;Ct(()=>Zt(J,Pe,ft),U)}(N.shapeFlag&256||Pe&&tr(Pe.vnode)&&Pe.vnode.shapeFlag&256)&&R.a&&Ct(R.a,U),R.isMounted=!0,N=V=B=null}};R.scope.on();const G=R.effect=new Jw(W);R.scope.off();const z=R.update=G.run.bind(G),ae=R.job=G.runIfDirty.bind(G);ae.i=R,ae.id=R.uid,G.scheduler=()=>rp(ae),Cr(R,!0),z()},fe=(R,N,V)=>{N.component=R;const B=R.vnode.props;R.vnode=N,R.next=null,r0(R,N.props,B,V),c0(R,N.children,V),ws(),jm(R),Es()},ne=(R,N,V,B,U,H,K,W,G=!1)=>{const z=R&&R.children,ae=R?R.shapeFlag:0,J=N.children,{patchFlag:re,shapeFlag:he}=N;if(re>0){if(re&128){Un(z,J,V,B,U,H,K,W,G);return}else if(re&256){Fe(z,J,V,B,U,H,K,W,G);return}}he&8?(ae&16&&Ot(z,U,H),J!==z&&h(V,J)):ae&16?he&16?Un(z,J,V,B,U,H,K,W,G):Ot(z,U,H,!0):(ae&8&&h(V,""),he&16&&T(J,V,B,U,H,K,W,G))},Fe=(R,N,V,B,U,H,K,W,G)=>{R=R||Ai,N=N||Ai;const z=R.length,ae=N.length,J=Math.min(z,ae);let re;for(re=0;re<J;re++){const he=N[re]=G?qs(N[re]):un(N[re]);v(R[re],he,V,null,U,H,K,W,G)}z>ae?Ot(R,U,H,!0,!1,J):T(N,V,B,U,H,K,W,G,J)},Un=(R,N,V,B,U,H,K,W,G)=>{let z=0;const ae=N.length;let J=R.length-1,re=ae-1;for(;z<=J&&z<=re;){const he=R[z],ye=N[z]=G?qs(N[z]):un(N[z]);if(Sn(he,ye))v(he,ye,V,null,U,H,K,W,G);else break;z++}for(;z<=J&&z<=re;){const he=R[J],ye=N[re]=G?qs(N[re]):un(N[re]);if(Sn(he,ye))v(he,ye,V,null,U,H,K,W,G);else break;J--,re--}if(z>J){if(z<=re){const he=re+1,ye=he<ae?N[he].el:B;for(;z<=re;)v(null,N[z]=G?qs(N[z]):un(N[z]),V,ye,U,H,K,W,G),z++}}else if(z>re)for(;z<=J;)St(R[z],U,H,!0),z++;else{const he=z,ye=z,ke=new Map;for(z=ye;z<=re;z++){const nt=N[z]=G?qs(N[z]):un(N[z]);nt.key!=null&&ke.set(nt.key,z)}let Pe,xt=0;const ht=re-ye+1;let Jt=!1,ft=0;const is=new Array(ht);for(z=0;z<ht;z++)is[z]=0;for(z=he;z<=J;z++){const nt=R[z];if(xt>=ht){St(nt,U,H,!0);continue}let on;if(nt.key!=null)on=ke.get(nt.key);else for(Pe=ye;Pe<=re;Pe++)if(is[Pe-ye]===0&&Sn(nt,N[Pe])){on=Pe;break}on===void 0?St(nt,U,H,!0):(is[on-ye]=z+1,on>=ft?ft=on:Jt=!0,v(nt,N[on],V,null,U,H,K,W,G),xt++)}const li=Jt?h0(is):Ai;for(Pe=li.length-1,z=ht-1;z>=0;z--){const nt=ye+z,on=N[nt],Er=N[nt+1],Io=nt+1<ae?Er.el||Er.placeholder:B;is[z]===0?v(null,on,V,Io,U,H,K,W,G):Jt&&(Pe<0||z!==li[Pe]?rn(on,V,Io,2):Pe--)}}},rn=(R,N,V,B,U=null)=>{const{el:H,type:K,transition:W,children:G,shapeFlag:z}=R;if(z&6){rn(R.component.subTree,N,V,B);return}if(z&128){R.suspense.move(N,V,B);return}if(z&64){K.move(R,N,V,ie);return}if(K===Ut){s(H,N,V);for(let J=0;J<G.length;J++)rn(G[J],N,V,B);s(R.anchor,N,V);return}if(K===aa){y(R,N,V);return}if(B!==2&&z&1&&W)if(B===0)W.beforeEnter(H),s(H,N,V),Ct(()=>W.enter(H),U);else{const{leave:J,delayLeave:re,afterLeave:he}=W,ye=()=>{R.ctx.isUnmounted?r(H):s(H,N,V)},ke=()=>{H._isLeaving&&H[fs](!0),J(H,()=>{ye(),he&&he()})};re?re(H,ye,ke):ke()}else s(H,N,V)},St=(R,N,V,B=!1,U=!1)=>{const{type:H,props:K,ref:W,children:G,dynamicChildren:z,shapeFlag:ae,patchFlag:J,dirs:re,cacheIndex:he}=R;if(J===-2&&(U=!1),W!=null&&(ws(),Oi(W,null,V,R,!0),Es()),he!=null&&(N.renderCache[he]=void 0),ae&256){N.ctx.deactivate(R);return}const ye=ae&1&&re,ke=!tr(R);let Pe;if(ke&&(Pe=K&&K.onVnodeBeforeUnmount)&&Zt(Pe,N,R),ae&6)xs(R.component,V,B);else{if(ae&128){R.suspense.unmount(V,B);return}ye&&Hn(R,null,N,"beforeUnmount"),ae&64?R.type.remove(R,N,V,ie,B):z&&!z.hasOnce&&(H!==Ut||J>0&&J&64)?Ot(z,N,V,!1,!0):(H===Ut&&J&384||!U&&ae&16)&&Ot(G,N,V),B&&rs(R)}(ke&&(Pe=K&&K.onVnodeUnmounted)||ye)&&Ct(()=>{Pe&&Zt(Pe,N,R),ye&&Hn(R,null,N,"unmounted")},V)},rs=R=>{const{type:N,el:V,anchor:B,transition:U}=R;if(N===Ut){bn(V,B);return}if(N===aa){S(R);return}const H=()=>{r(V),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(R.shapeFlag&1&&U&&!U.persisted){const{leave:K,delayLeave:W}=U,G=()=>K(V,H);W?W(R.el,H,G):G()}else H()},bn=(R,N)=>{let V;for(;R!==N;)V=d(R),r(R),R=V;r(N)},xs=(R,N,V)=>{const{bum:B,scope:U,job:H,subTree:K,um:W,m:G,a:z}=R;_l(G),_l(z),B&&ki(B),U.stop(),H&&(H.flags|=8,St(K,R,N,V)),W&&Ct(W,N),Ct(()=>{R.isUnmounted=!0},N)},Ot=(R,N,V,B=!1,U=!1,H=0)=>{for(let K=H;K<R.length;K++)St(R[K],N,V,B,U)},$=R=>{if(R.shapeFlag&6)return $(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const N=d(R.anchor||R.el),V=N&&N[NR];return V?d(V):N};let ee=!1;const Y=(R,N,V)=>{R==null?N._vnode&&St(N._vnode,null,null,!0):v(N._vnode||null,R,N,null,null,null,V),N._vnode=R,ee||(ee=!0,jm(),dl(),ee=!1)},ie={p:v,um:St,m:rn,r:rs,mt:le,mc:T,pc:ne,pbc:A,n:$,o:t};let Re,Ue;return e&&([Re,Ue]=e(ie)),{render:Y,hydrate:Re,createApp:n0(Y,Re)}}function Th({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Cr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function KE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function GE(t,e,n=!1){const s=t.children,r=e.children;if(ce(s)&&ce(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=qs(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&GE(o,a)),a.type===Ur&&a.patchFlag!==-1&&(a.el=o.el),a.type===at&&!a.el&&(a.el=o.el)}}function h0(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function QE(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:QE(e)}function _l(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const f0=Symbol.for("v-scx"),d0=()=>it(f0);function YE(t,e){return lp(t,null,e)}function kn(t,e,n){return lp(t,e,n)}function lp(t,e,n=je){const{immediate:s,deep:r,flush:i,once:o}=n,a=Et({},n),c=e&&s||!e&&i!=="post";let u;if(qi){if(i==="sync"){const g=d0();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=Qn,g.resume=Qn,g.pause=Qn,g}}const h=Rt;a.call=(g,_,v)=>On(g,h,_,v);let f=!1;i==="post"?a.scheduler=g=>{Ct(g,h&&h.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(g,_)=>{_?g():rp(g)}),a.augmentJob=g=>{e&&(g.flags|=4),f&&(g.flags|=2,h&&(g.id=h.uid,g.i=h))};const d=RR(t,e,a);return qi&&(u?u.push(d):c&&d()),d}function p0(t,e,n){const s=this.proxy,r=Xe(t)?t.includes(".")?XE(s,t):()=>s[t]:t.bind(s,s);let i;ue(e)?i=e:(i=e.handler,n=e);const o=Ya(this),a=lp(r,i.bind(s),n);return o(),a}function XE(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const g0=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Tn(e)}Modifiers`]||t[`${si(e)}Modifiers`];function m0(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||je;let r=n;const i=e.startsWith("update:"),o=i&&g0(s,e.slice(7));o&&(o.trim&&(r=n.map(h=>Xe(h)?h.trim():h)),o.number&&(r=n.map(hf)));let a,c=s[a=dh(e)]||s[a=dh(Tn(e))];!c&&i&&(c=s[a=dh(si(e))]),c&&On(c,t,6,r);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,On(u,t,6,r)}}const _0=new WeakMap;function JE(t,e,n=!1){const s=n?_0:e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!ue(t)){const c=u=>{const h=JE(u,e,!0);h&&(a=!0,Et(o,h))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Be(t)&&s.set(t,null),null):(ce(i)?i.forEach(c=>o[c]=null):Et(o,i),Be(t)&&s.set(t,o),o)}function gu(t,e){return!t||!Wa(e)?!1:(e=e.slice(2).replace(/Once$/,""),Oe(t,e[0].toLowerCase()+e.slice(1))||Oe(t,si(e))||Oe(t,e))}function Ih(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:c,render:u,renderCache:h,props:f,data:d,setupState:g,ctx:_,inheritAttrs:v}=t,I=pl(t);let D,O;try{if(n.shapeFlag&4){const S=r||s,x=S;D=un(u.call(x,S,h,f,g,d,_)),O=a}else{const S=e;D=un(S.length>1?S(f,{attrs:a,slots:o,emit:c}):S(f,null)),O=e.props?a:v0(a)}}catch(S){ca.length=0,ro(S,t,1),D=Me(at)}let y=D;if(O&&v!==!1){const S=Object.keys(O),{shapeFlag:x}=y;S.length&&x&7&&(i&&S.some(Kd)&&(O=w0(O,i)),y=bs(y,O,!1,!0))}return n.dirs&&(y=bs(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&Bi(y,n.transition),D=y,pl(I),D}function y0(t,e=!0){let n;for(let s=0;s<t.length;s++){const r=t[s];if(Kr(r)){if(r.type!==at||r.children==="v-if"){if(n)return;n=r}}else return}return n}const v0=t=>{let e;for(const n in t)(n==="class"||n==="style"||Wa(n))&&((e||(e={}))[n]=t[n]);return e},w0=(t,e)=>{const n={};for(const s in t)(!Kd(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function E0(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Zm(s,o,u):!!o;if(c&8){const h=e.dynamicProps;for(let f=0;f<h.length;f++){const d=h[f];if(o[d]!==s[d]&&!gu(u,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Zm(s,o,u):!0:!!o;return!1}function Zm(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!gu(n,i))return!0}return!1}function mu({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const yl=t=>t.__isSuspense;let bf=0;const T0={name:"Suspense",__isSuspense:!0,process(t,e,n,s,r,i,o,a,c,u){if(t==null)I0(e,n,s,r,i,o,a,c,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}b0(t,e,n,s,r,o,a,c,u)}},hydrate:S0,normalize:C0},up=T0;function Ca(t,e){const n=t.props&&t.props[e];ue(n)&&n()}function I0(t,e,n,s,r,i,o,a,c){const{p:u,o:{createElement:h}}=c,f=h("div"),d=t.suspense=ZE(t,r,s,e,f,n,i,o,a,c);u(null,d.pendingBranch=t.ssContent,f,null,s,d,i,o),d.deps>0?(Ca(t,"onPending"),Ca(t,"onFallback"),u(null,t.ssFallback,e,n,s,null,i,o),xi(d,t.ssFallback)):d.resolve(!1,!0)}function b0(t,e,n,s,r,i,o,a,{p:c,um:u,o:{createElement:h}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const d=e.ssContent,g=e.ssFallback,{activeBranch:_,pendingBranch:v,isInFallback:I,isHydrating:D}=f;if(v)f.pendingBranch=d,Sn(v,d)?(c(v,d,f.hiddenContainer,null,r,f,i,o,a),f.deps<=0?f.resolve():I&&(D||(c(_,g,n,s,r,null,i,o,a),xi(f,g)))):(f.pendingId=bf++,D?(f.isHydrating=!1,f.activeBranch=v):u(v,r,f),f.deps=0,f.effects.length=0,f.hiddenContainer=h("div"),I?(c(null,d,f.hiddenContainer,null,r,f,i,o,a),f.deps<=0?f.resolve():(c(_,g,n,s,r,null,i,o,a),xi(f,g))):_&&Sn(_,d)?(c(_,d,n,s,r,f,i,o,a),f.resolve(!0)):(c(null,d,f.hiddenContainer,null,r,f,i,o,a),f.deps<=0&&f.resolve()));else if(_&&Sn(_,d))c(_,d,n,s,r,f,i,o,a),xi(f,d);else if(Ca(e,"onPending"),f.pendingBranch=d,d.shapeFlag&512?f.pendingId=d.component.suspenseId:f.pendingId=bf++,c(null,d,f.hiddenContainer,null,r,f,i,o,a),f.deps<=0)f.resolve();else{const{timeout:O,pendingId:y}=f;O>0?setTimeout(()=>{f.pendingId===y&&f.fallback(g)},O):O===0&&f.fallback(g)}}function ZE(t,e,n,s,r,i,o,a,c,u,h=!1){const{p:f,m:d,um:g,n:_,o:{parentNode:v,remove:I}}=u;let D;const O=A0(t);O&&e&&e.pendingBranch&&(D=e.pendingId,e.deps++);const y=t.props?zw(t.props.timeout):void 0,S=i,x={vnode:t,parent:e,parentComponent:n,namespace:o,container:s,hiddenContainer:r,deps:0,pendingId:bf++,timeout:typeof y=="number"?y:-1,activeBranch:null,pendingBranch:null,isInFallback:!h,isHydrating:h,isUnmounted:!1,effects:[],resolve(L=!1,b=!1){const{vnode:T,activeBranch:E,pendingBranch:A,pendingId:k,effects:P,parentComponent:C,container:le}=x;let _e=!1;x.isHydrating?x.isHydrating=!1:L||(_e=E&&A.transition&&A.transition.mode==="out-in",_e&&(E.transition.afterLeave=()=>{k===x.pendingId&&(d(A,le,i===S?_(E):i,0),_f(P))}),E&&(v(E.el)===le&&(i=_(E)),g(E,C,x,!0)),_e||d(A,le,i,0)),xi(x,A),x.pendingBranch=null,x.isInFallback=!1;let se=x.parent,fe=!1;for(;se;){if(se.pendingBranch){se.effects.push(...P),fe=!0;break}se=se.parent}!fe&&!_e&&_f(P),x.effects=[],O&&e&&e.pendingBranch&&D===e.pendingId&&(e.deps--,e.deps===0&&!b&&e.resolve()),Ca(T,"onResolve")},fallback(L){if(!x.pendingBranch)return;const{vnode:b,activeBranch:T,parentComponent:E,container:A,namespace:k}=x;Ca(b,"onFallback");const P=_(T),C=()=>{x.isInFallback&&(f(null,L,A,P,E,null,k,a,c),xi(x,L))},le=L.transition&&L.transition.mode==="out-in";le&&(T.transition.afterLeave=C),x.isInFallback=!0,g(T,E,null,!0),le||C()},move(L,b,T){x.activeBranch&&d(x.activeBranch,L,b,T),x.container=L},next(){return x.activeBranch&&_(x.activeBranch)},registerDep(L,b,T){const E=!!x.pendingBranch;E&&x.deps++;const A=L.vnode.el;L.asyncDep.catch(k=>{ro(k,L,0)}).then(k=>{if(L.isUnmounted||x.isUnmounted||x.pendingId!==L.suspenseId)return;L.asyncResolved=!0;const{vnode:P}=L;Cf(L,k),A&&(P.el=A);const C=!A&&L.subTree.el;b(L,P,v(A||L.subTree.el),A?null:_(L.subTree),x,o,T),C&&I(C),mu(L,P.el),E&&--x.deps===0&&x.resolve()})},unmount(L,b){x.isUnmounted=!0,x.activeBranch&&g(x.activeBranch,n,L,b),x.pendingBranch&&g(x.pendingBranch,n,L,b)}};return x}function S0(t,e,n,s,r,i,o,a,c){const u=e.suspense=ZE(e,s,n,t.parentNode,document.createElement("div"),null,r,i,o,a,!0),h=c(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),h}function C0(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=e_(s?n.default:n),t.ssFallback=s?e_(n.fallback):Me(at)}function e_(t){let e;if(ue(t)){const n=Hi&&t._c;n&&(t._d=!1,ln()),t=t(),n&&(t._d=!0,e=tn,tT())}return ce(t)&&(t=y0(t)),t=un(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function eT(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):_f(t)}function xi(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t;let r=e.el;for(;!r&&e.component;)e=e.component.subTree,r=e.el;n.el=r,s&&s.subTree===n&&(s.vnode.el=r,mu(s,r))}function A0(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const Ut=Symbol.for("v-fgt"),Ur=Symbol.for("v-txt"),at=Symbol.for("v-cmt"),aa=Symbol.for("v-stc"),ca=[];let tn=null;function ln(t=!1){ca.push(tn=t?null:[])}function tT(){ca.pop(),tn=ca[ca.length-1]||null}let Hi=1;function vl(t,e=!1){Hi+=t,t<0&&tn&&e&&(tn.hasOnce=!0)}function nT(t){return t.dynamicChildren=Hi>0?tn||Ai:null,tT(),Hi>0&&tn&&tn.push(t),t}function wl(t,e,n,s,r,i){return nT(gn(t,e,n,s,r,i,!0))}function zs(t,e,n,s,r){return nT(Me(t,e,n,s,r,!0))}function Kr(t){return t?t.__v_isVNode===!0:!1}function Sn(t,e){return t.type===e.type&&t.key===e.key}const sT=({key:t})=>t??null,zc=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Xe(t)||rt(t)||ue(t)?{i:kt,r:t,k:e,f:!!n}:t:null);function gn(t,e=null,n=null,s=0,r=null,i=t===Ut?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&sT(e),ref:e&&zc(e),scopeId:yE,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:kt};return a?(hp(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Xe(n)?8:16),Hi>0&&!o&&tn&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&tn.push(c),c}const Me=R0;function R0(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===OE)&&(t=at),Kr(t)){const a=bs(t,e,!0);return n&&hp(a,n),Hi>0&&!i&&tn&&(a.shapeFlag&6?tn[tn.indexOf(t)]=a:tn.push(a)),a.patchFlag=-2,a}if(V0(t)&&(t=t.__vccOpts),e){e=P0(e);let{class:a,style:c}=e;a&&!Xe(a)&&(e.class=uu(a)),Be(c)&&(sp(c)&&!ce(c)&&(c=Et({},c)),e.style=lu(c))}const o=Xe(t)?1:yl(t)?128:vE(t)?64:Be(t)?4:ue(t)?2:0;return gn(t,e,n,s,r,o,i,!0)}function P0(t){return t?sp(t)||$E(t)?Et({},t):t:null}function bs(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:c}=t,u=e?rT(r||{},e):r,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&sT(u),ref:e&&e.ref?n&&i?ce(i)?i.concat(zc(e)):[i,zc(e)]:zc(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ut?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&bs(t.ssContent),ssFallback:t.ssFallback&&bs(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&Bi(h,c.clone(h)),h}function la(t=" ",e=0){return Me(Ur,null,t,e)}function fB(t,e){const n=Me(aa,null,t);return n.staticCount=e,n}function k0(t="",e=!1){return e?(ln(),zs(at,null,t)):Me(at,null,t)}function un(t){return t==null||typeof t=="boolean"?Me(at):ce(t)?Me(Ut,null,t.slice()):Kr(t)?qs(t):Me(Ur,null,String(t))}function qs(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:bs(t)}function hp(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),hp(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!$E(e)?e._ctx=kt:r===3&&kt&&(kt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ue(e)?(e={default:e,_ctx:kt},n=32):(e=String(e),s&64?(n=16,e=[la(e)]):n=8);t.children=e,t.shapeFlag|=n}function rT(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=uu([e.class,s.class]));else if(r==="style")e.style=lu([e.style,s.style]);else if(Wa(r)){const i=e[r],o=s[r];o&&i!==o&&!(ce(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Zt(t,e,n,s=null){On(t,e,7,[n,s])}const N0=VE();let O0=0;function x0(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||N0,i={uid:O0++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Yw(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:BE(s,r),emitsOptions:JE(s,r),emit:null,emitted:null,propsDefaults:je,inheritAttrs:s.inheritAttrs,ctx:je,data:je,props:je,attrs:je,slots:je,refs:je,setupState:je,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=m0.bind(null,i),t.ce&&t.ce(i),i}let Rt=null;const Ns=()=>Rt||kt;let El,Sf;{const t=cu(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};El=e("__VUE_INSTANCE_SETTERS__",n=>Rt=n),Sf=e("__VUE_SSR_SETTERS__",n=>qi=n)}const Ya=t=>{const e=Rt;return El(t),t.scope.on(),()=>{t.scope.off(),El(e)}},t_=()=>{Rt&&Rt.scope.off(),El(null)};function iT(t){return t.vnode.shapeFlag&4}let qi=!1;function D0(t,e=!1,n=!1){e&&Sf(e);const{props:s,children:r}=t.vnode,i=iT(t);s0(t,s,i,e),a0(t,r,n||e);const o=i?M0(t,e):void 0;return e&&Sf(!1),o}function M0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,GR);const{setup:s}=n;if(s){ws();const r=t.setupContext=s.length>1?aT(t):null,i=Ya(t),o=Ka(s,t,0,[t.props,r]),a=Bw(o);if(Es(),i(),(a||t.sp)&&!tr(t)&&ip(t),a){if(o.then(t_,t_),e)return o.then(c=>{Cf(t,c)}).catch(c=>{ro(c,t,0)});t.asyncDep=o}else Cf(t,o)}else oT(t)}function Cf(t,e,n){ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Be(e)&&(t.setupState=dE(e)),oT(t)}function oT(t,e,n){const s=t.type;t.render||(t.render=s.render||Qn);{const r=Ya(t);ws();try{YR(t)}finally{Es(),r()}}}const L0={get(t,e){return Ft(t,"get",""),t[e]}};function aT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,L0),slots:t.slots,emit:t.emit,expose:e}}function _u(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(dE(mf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in oa)return oa[n](t)},has(e,n){return n in e||n in oa}})):t.proxy}function Af(t,e=!0){return ue(t)?t.displayName||t.name:t.name||e&&t.__name}function V0(t){return ue(t)&&"__vccOpts"in t}const Le=(t,e)=>CR(t,e,qi);function Je(t,e,n){try{vl(-1);const s=arguments.length;return s===2?Be(e)&&!ce(e)?Kr(e)?Me(t,null,[e]):Me(t,e):Me(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Kr(n)&&(n=[n]),Me(t,e,n))}finally{vl(1)}}const F0="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rf;const n_=typeof window<"u"&&window.trustedTypes;if(n_)try{Rf=n_.createPolicy("vue",{createHTML:t=>t})}catch{}const cT=Rf?t=>Rf.createHTML(t):t=>t,U0="http://www.w3.org/2000/svg",$0="http://www.w3.org/1998/Math/MathML",hs=typeof document<"u"?document:null,s_=hs&&hs.createElement("template"),j0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?hs.createElementNS(U0,t):e==="mathml"?hs.createElementNS($0,t):n?hs.createElement(t,{is:n}):hs.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>hs.createTextNode(t),createComment:t=>hs.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>hs.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{s_.innerHTML=cT(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=s_.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},$s="transition",Uo="animation",Aa=Symbol("_vtc"),lT={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},B0=Et({},wE,lT),H0=t=>(t.displayName="Transition",t.props=B0,t),q0=H0((t,{slots:e})=>Je(DR,W0(t),e)),Ar=(t,e=[])=>{ce(t)?t.forEach(n=>n(...e)):t&&t(...e)},r_=t=>t?ce(t)?t.some(e=>e.length>1):t.length>1:!1;function W0(t){const e={};for(const P in t)P in lT||(e[P]=t[P]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:h=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,_=z0(r),v=_&&_[0],I=_&&_[1],{onBeforeEnter:D,onEnter:O,onEnterCancelled:y,onLeave:S,onLeaveCancelled:x,onBeforeAppear:L=D,onAppear:b=O,onAppearCancelled:T=y}=e,E=(P,C,le,_e)=>{P._enterCancelled=_e,Rr(P,C?h:a),Rr(P,C?u:o),le&&le()},A=(P,C)=>{P._isLeaving=!1,Rr(P,f),Rr(P,g),Rr(P,d),C&&C()},k=P=>(C,le)=>{const _e=P?b:O,se=()=>E(C,P,le);Ar(_e,[C,se]),i_(()=>{Rr(C,P?c:i),as(C,P?h:a),r_(_e)||o_(C,s,v,se)})};return Et(e,{onBeforeEnter(P){Ar(D,[P]),as(P,i),as(P,o)},onBeforeAppear(P){Ar(L,[P]),as(P,c),as(P,u)},onEnter:k(!1),onAppear:k(!0),onLeave(P,C){P._isLeaving=!0;const le=()=>A(P,C);as(P,f),P._enterCancelled?(as(P,d),l_(P)):(l_(P),as(P,d)),i_(()=>{P._isLeaving&&(Rr(P,f),as(P,g),r_(S)||o_(P,s,I,le))}),Ar(S,[P,le])},onEnterCancelled(P){E(P,!1,void 0,!0),Ar(y,[P])},onAppearCancelled(P){E(P,!0,void 0,!0),Ar(T,[P])},onLeaveCancelled(P){A(P),Ar(x,[P])}})}function z0(t){if(t==null)return null;if(Be(t))return[bh(t.enter),bh(t.leave)];{const e=bh(t);return[e,e]}}function bh(t){return zw(t)}function as(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Aa]||(t[Aa]=new Set)).add(e)}function Rr(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[Aa];n&&(n.delete(e),n.size||(t[Aa]=void 0))}function i_(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let K0=0;function o_(t,e,n,s){const r=t._endId=++K0,i=()=>{r===t._endId&&s()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=G0(t,e);if(!o)return s();const u=o+"end";let h=0;const f=()=>{t.removeEventListener(u,d),i()},d=g=>{g.target===t&&++h>=c&&f()};setTimeout(()=>{h<c&&f()},a+1),t.addEventListener(u,d)}function G0(t,e){const n=window.getComputedStyle(t),s=_=>(n[_]||"").split(", "),r=s(`${$s}Delay`),i=s(`${$s}Duration`),o=a_(r,i),a=s(`${Uo}Delay`),c=s(`${Uo}Duration`),u=a_(a,c);let h=null,f=0,d=0;e===$s?o>0&&(h=$s,f=o,d=i.length):e===Uo?u>0&&(h=Uo,f=u,d=c.length):(f=Math.max(o,u),h=f>0?o>u?$s:Uo:null,d=h?h===$s?i.length:c.length:0);const g=h===$s&&/\b(?:transform|all)(?:,|$)/.test(s(`${$s}Property`).toString());return{type:h,timeout:f,propCount:d,hasTransform:g}}function a_(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>c_(n)+c_(t[s])))}function c_(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function l_(t){return(t?t.ownerDocument:document).body.offsetHeight}function Q0(t,e,n){const s=t[Aa];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const u_=Symbol("_vod"),Y0=Symbol("_vsh"),X0=Symbol(""),J0=/(?:^|;)\s*display\s*:/;function Z0(t,e,n){const s=t.style,r=Xe(n);let i=!1;if(n&&!r){if(e)if(Xe(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Kc(s,a,"")}else for(const o in e)n[o]==null&&Kc(s,o,"");for(const o in n)o==="display"&&(i=!0),Kc(s,o,n[o])}else if(r){if(e!==n){const o=s[X0];o&&(n+=";"+o),s.cssText=n,i=J0.test(n)}}else e&&t.removeAttribute("style");u_ in t&&(t[u_]=i?s.display:"",t[Y0]&&(s.display="none"))}const h_=/\s*!important$/;function Kc(t,e,n){if(ce(n))n.forEach(s=>Kc(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=eP(t,e);h_.test(n)?t.setProperty(si(s),n.replace(h_,""),"important"):t[s]=n}}const f_=["Webkit","Moz","ms"],Sh={};function eP(t,e){const n=Sh[e];if(n)return n;let s=Tn(e);if(s!=="filter"&&s in t)return Sh[e]=s;s=au(s);for(let r=0;r<f_.length;r++){const i=f_[r]+s;if(i in t)return Sh[e]=i}return e}const d_="http://www.w3.org/1999/xlink";function p_(t,e,n,s,r,i=ZA(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(d_,e.slice(6,e.length)):t.setAttributeNS(d_,e,n):n==null||i&&!Kw(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Ps(n)?String(n):n)}function g_(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?cT(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Kw(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function _i(t,e,n,s){t.addEventListener(e,n,s)}function tP(t,e,n,s){t.removeEventListener(e,n,s)}const m_=Symbol("_vei");function nP(t,e,n,s,r=null){const i=t[m_]||(t[m_]={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=sP(e);if(s){const u=i[e]=oP(s,r);_i(t,a,u,c)}else o&&(tP(t,a,o,c),i[e]=void 0)}}const __=/(?:Once|Passive|Capture)$/;function sP(t){let e;if(__.test(t)){e={};let s;for(;s=t.match(__);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):si(t.slice(2)),e]}let Ch=0;const rP=Promise.resolve(),iP=()=>Ch||(rP.then(()=>Ch=0),Ch=Date.now());function oP(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;On(aP(s,n.value),e,5,[s])};return n.value=t,n.attached=iP(),n}function aP(t,e){if(ce(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const y_=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,cP=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?Q0(t,s,o):e==="style"?Z0(t,n,s):Wa(e)?Kd(e)||nP(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):lP(t,e,s,o))?(g_(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&p_(t,e,s,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Xe(s))?g_(t,Tn(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),p_(t,e,s,o))};function lP(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&y_(e)&&ue(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return y_(e)&&Xe(n)?!1:e in t}const v_=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ce(e)?n=>ki(e,n):e};function uP(t){t.target.composing=!0}function w_(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ah=Symbol("_assign"),dB={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[Ah]=v_(r);const i=s||r.props&&r.props.type==="number";_i(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=hf(a)),t[Ah](a)}),n&&_i(t,"change",()=>{t.value=t.value.trim()}),e||(_i(t,"compositionstart",uP),_i(t,"compositionend",w_),_i(t,"change",w_))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(t[Ah]=v_(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?hf(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===c)||(t.value=c))}},hP=["ctrl","shift","alt","meta"],fP={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>hP.some(n=>t[`${n}Key`]&&!e.includes(n))},pB=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=((r,...i)=>{for(let o=0;o<e.length;o++){const a=fP[e[o]];if(a&&a(r,e))return}return t(r,...i)}))},uT=Et({patchProp:cP},j0);let ua,E_=!1;function dP(){return ua||(ua=l0(uT))}function pP(){return ua=E_?ua:u0(uT),E_=!0,ua}const gP=((...t)=>{const e=dP().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=fT(s);if(!r)return;const i=e._component;!ue(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,hT(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e}),mP=((...t)=>{const e=pP().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=fT(s);if(r)return n(r,!0,hT(r))},e});function hT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function fT(t){return Xe(t)?document.querySelector(t):t}const _P=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,yP=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,vP=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function wP(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){EP(t);return}return e}function EP(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function Tl(t,e={}){if(typeof t!="string")return t;if(t[0]==='"'&&t[t.length-1]==='"'&&t.indexOf("\\")===-1)return t.slice(1,-1);const n=t.trim();if(n.length<=9)switch(n.toLowerCase()){case"true":return!0;case"false":return!1;case"undefined":return;case"null":return null;case"nan":return Number.NaN;case"infinity":return Number.POSITIVE_INFINITY;case"-infinity":return Number.NEGATIVE_INFINITY}if(!vP.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(_P.test(t)||yP.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,wP)}return JSON.parse(t)}catch(s){if(e.strict)throw s;return t}}const dT=/#/g,pT=/&/g,gT=/\//g,TP=/=/g,IP=/\?/g,yu=/\+/g,bP=/%5e/gi,SP=/%60/gi,CP=/%7c/gi,AP=/%20/gi,RP=/%252f/gi;function mT(t){return encodeURI(""+t).replace(CP,"|")}function Pf(t){return mT(typeof t=="string"?t:JSON.stringify(t)).replace(yu,"%2B").replace(AP,"+").replace(dT,"%23").replace(pT,"%26").replace(SP,"`").replace(bP,"^").replace(gT,"%2F")}function Rh(t){return Pf(t).replace(TP,"%3D")}function PP(t){return mT(t).replace(dT,"%23").replace(IP,"%3F").replace(RP,"%2F").replace(pT,"%26").replace(yu,"%2B")}function gB(t){return PP(t).replace(gT,"%2F")}function Il(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function kP(t){return Il(t.replace(yu," "))}function NP(t){return Il(t.replace(yu," "))}function fp(t=""){const e=Object.create(null);t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const s=n.match(/([^=]+)=?(.*)/)||[];if(s.length<2)continue;const r=kP(s[1]);if(r==="__proto__"||r==="constructor")continue;const i=NP(s[2]||"");e[r]===void 0?e[r]=i:Array.isArray(e[r])?e[r].push(i):e[r]=[e[r],i]}return e}function OP(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${Rh(t)}=${Pf(n)}`).join("&"):`${Rh(t)}=${Pf(e)}`:Rh(t)}function _T(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>OP(e,t[e])).filter(Boolean).join("&")}const xP=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,yT=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,DP=/^([/\\]\s*){2,}[^/\\]/,MP=/^[\s\0]*(blob|data|javascript|vbscript):$/i,LP=/\/$|\/\?|\/#/,VP=/^\.?\//;function Fn(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?xP.test(t):yT.test(t)||(e.acceptRelative?DP.test(t):!1)}function FP(t){return!!t&&MP.test(t)}function kf(t="",e){return e?LP.test(t):t.endsWith("/")}function hr(t="",e){if(!e)return(kf(t)?t.slice(0,-1):t)||"/";if(!kf(t,!0))return t||"/";let n=t,s="";const r=t.indexOf("#");r!==-1&&(n=t.slice(0,r),s=t.slice(r));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+s}function vu(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(kf(t,!0))return t||"/";let n=t,s="";const r=t.indexOf("#");if(r!==-1&&(n=t.slice(0,r),s=t.slice(r),!n))return s;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+s}function UP(t=""){return t.startsWith("/")}function $P(t=""){return UP(t)?t:"/"+t}function Nf(t,e){if(vT(e)||Fn(t))return t;const n=hr(e);return t.startsWith(n)?t:wu(n,t)}function T_(t,e){if(vT(e))return t;const n=hr(e);if(!t.startsWith(n))return t;const s=t.slice(n.length);return s[0]==="/"?s:"/"+s}function bl(t,e){const n=Eu(t),s={...fp(n.search),...e};return n.search=_T(s),WP(n)}function vT(t){return!t||t==="/"}function jP(t){return t&&t!=="/"}function wu(t,...e){let n=t||"";for(const s of e.filter(r=>jP(r)))if(n){const r=s.replace(VP,"");n=vu(n)+r}else n=s;return n}function wT(...t){const e=/\/(?!\/)/,n=t.filter(Boolean),s=[];let r=0;for(const o of n)if(!(!o||o==="/")){for(const[a,c]of o.split(e).entries())if(!(!c||c===".")){if(c===".."){if(s.length===1&&Fn(s[0]))continue;s.pop(),r--;continue}if(a===1&&s[s.length-1]?.endsWith(":/")){s[s.length-1]+="/"+c;continue}s.push(c),r++}}let i=s.join("/");return r>=0?n[0]?.startsWith("/")&&!i.startsWith("/")?i="/"+i:n[0]?.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*r)+i,n[n.length-1]?.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function BP(t){return HP(t,"https://")}function HP(t,e){let n=t.match(yT);return n||(n=t.match(/^\/{2,}/)),n?e+t.slice(n[0].length):e+t}function qP(t,e){return Il(hr(t))===Il(hr(e))}const ET=Symbol.for("ufo:protocolRelative");function Eu(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,f,d=""]=n;return{protocol:f.toLowerCase(),pathname:d,href:f+d,auth:"",host:"",search:"",hash:""}}if(!Fn(t,{acceptRelative:!0}))return I_(t);const[,s="",r,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[];s==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:c,search:u,hash:h}=I_(a);return{protocol:s.toLowerCase(),auth:r?r.slice(0,Math.max(0,r.length-1)):"",host:o,pathname:c,search:u,hash:h,[ET]:!s}}function I_(t=""){const[e="",n="",s=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:s}}function WP(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",s=t.hash||"",r=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol||t[ET]?(t.protocol||"")+"//":"")+r+i+e+n+s}class zP extends Error{constructor(e,n){super(e,n),this.name="FetchError",n?.cause&&!this.cause&&(this.cause=n.cause)}}function KP(t){const e=t.error?.message||t.error?.toString()||"",n=t.request?.method||t.options?.method||"GET",s=t.request?.url||String(t.request)||"/",r=`[${n}] ${JSON.stringify(s)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${r}: ${i}${e?` ${e}`:""}`,a=new zP(o,t.error?{cause:t.error}:void 0);for(const c of["request","options","response"])Object.defineProperty(a,c,{get(){return t[c]}});for(const[c,u]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,c,{get(){return t.response&&t.response[u]}});return a}const GP=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function b_(t="GET"){return GP.has(t.toUpperCase())}function QP(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const YP=new Set(["image/svg","application/xml","application/xhtml","application/html"]),XP=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function JP(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return XP.test(e)?"json":YP.has(e)||e.startsWith("text/")?"text":"blob"}function ZP(t,e,n,s){const r=ek(e?.headers??t?.headers,n?.headers,s);let i;return(n?.query||n?.params||e?.params||e?.query)&&(i={...n?.params,...n?.query,...e?.params,...e?.query}),{...n,...e,query:i,params:i,headers:r}}function ek(t,e,n){if(!e)return new n(t);const s=new n(e);if(t)for(const[r,i]of Symbol.iterator in t||Array.isArray(t)?t:new n(t))s.set(r,i);return s}async function Pc(t,e){if(e)if(Array.isArray(e))for(const n of e)await n(t);else await e(t)}const tk=new Set([408,409,425,429,500,502,503,504]),nk=new Set([101,204,205,304]);function TT(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:s=globalThis.AbortController}=t;async function r(a){const c=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!c){let h;typeof a.options.retry=="number"?h=a.options.retry:h=b_(a.options.method)?0:1;const f=a.response&&a.response.status||500;if(h>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(f):tk.has(f))){const d=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return d>0&&await new Promise(g=>setTimeout(g,d)),i(a.request,{...a.options,retry:h-1})}}const u=KP(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,i),u}const i=async function(c,u={}){const h={request:c,options:ZP(c,u,t.defaults,n),response:void 0,error:void 0};h.options.method&&(h.options.method=h.options.method.toUpperCase()),h.options.onRequest&&await Pc(h,h.options.onRequest),typeof h.request=="string"&&(h.options.baseURL&&(h.request=Nf(h.request,h.options.baseURL)),h.options.query&&(h.request=bl(h.request,h.options.query),delete h.options.query),"query"in h.options&&delete h.options.query,"params"in h.options&&delete h.options.params),h.options.body&&b_(h.options.method)&&(QP(h.options.body)?(h.options.body=typeof h.options.body=="string"?h.options.body:JSON.stringify(h.options.body),h.options.headers=new n(h.options.headers||{}),h.options.headers.has("content-type")||h.options.headers.set("content-type","application/json"),h.options.headers.has("accept")||h.options.headers.set("accept","application/json")):("pipeTo"in h.options.body&&typeof h.options.body.pipeTo=="function"||typeof h.options.body.pipe=="function")&&("duplex"in h.options||(h.options.duplex="half")));let f;if(!h.options.signal&&h.options.timeout){const g=new s;f=setTimeout(()=>{const _=new Error("[TimeoutError]: The operation was aborted due to timeout");_.name="TimeoutError",_.code=23,g.abort(_)},h.options.timeout),h.options.signal=g.signal}try{h.response=await e(h.request,h.options)}catch(g){return h.error=g,h.options.onRequestError&&await Pc(h,h.options.onRequestError),await r(h)}finally{f&&clearTimeout(f)}if((h.response.body||h.response._bodyInit)&&!nk.has(h.response.status)&&h.options.method!=="HEAD"){const g=(h.options.parseResponse?"json":h.options.responseType)||JP(h.response.headers.get("content-type")||"");switch(g){case"json":{const _=await h.response.text(),v=h.options.parseResponse||Tl;h.response._data=v(_);break}case"stream":{h.response._data=h.response.body||h.response._bodyInit;break}default:h.response._data=await h.response[g]()}}return h.options.onResponse&&await Pc(h,h.options.onResponse),!h.options.ignoreResponseError&&h.response.status>=400&&h.response.status<600?(h.options.onResponseError&&await Pc(h,h.options.onResponseError),await r(h)):h.response},o=async function(c,u){return(await i(c,u))._data};return o.raw=i,o.native=(...a)=>e(...a),o.create=(a={},c={})=>TT({...t,...c,defaults:{...t.defaults,...c.defaults,...a}}),o}const Sl=(function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")})(),sk=Sl.fetch?(...t)=>Sl.fetch(...t):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),rk=Sl.Headers,ik=Sl.AbortController,ok=TT({fetch:sk,Headers:rk,AbortController:ik}),ak=ok,ck=()=>window?.__NUXT__?.config||window?.useNuxtApp?.().payload?.config,dp=()=>ck().app,lk=()=>dp().baseURL,uk=()=>dp().buildAssetsDir,pp=(...t)=>wT(IT(),uk(),...t),IT=(...t)=>{const e=dp(),n=e.cdnURL||e.baseURL;return t.length?wT(n,...t):n};globalThis.__buildAssetsURL=pp,globalThis.__publicAssetsURL=IT;globalThis.$fetch||(globalThis.$fetch=ak.create({baseURL:lk()}));"global"in globalThis||(globalThis.global=globalThis);function Of(t,e={},n){for(const s in t){const r=t[s],i=n?`${n}:${s}`:s;typeof r=="object"&&r!==null?Of(r,e,i):typeof r=="function"&&(e[i]=r)}return e}const hk={run:t=>t()},fk=()=>hk,bT=typeof console.createTask<"u"?console.createTask:fk;function dk(t,e){const n=e.shift(),s=bT(n);return t.reduce((r,i)=>r.then(()=>s.run(()=>i(...e))),Promise.resolve())}function pk(t,e){const n=e.shift(),s=bT(n);return Promise.all(t.map(r=>s.run(()=>r(...e))))}function Ph(t,e){for(const n of[...t])n(e)}class gk{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,s={}){if(!e||typeof n!="function")return()=>{};const r=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!s.allowDeprecated){let o=i.message;o||(o=`${r} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let s,r=(...i)=>(typeof s=="function"&&s(),s=void 0,r=void 0,n(...i));return s=this.hook(e,r),s}removeHook(e,n){if(this._hooks[e]){const s=this._hooks[e].indexOf(n);s!==-1&&this._hooks[e].splice(s,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const s=this._hooks[e]||[];delete this._hooks[e];for(const r of s)this.hook(e,r)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=Of(e),s=Object.keys(n).map(r=>this.hook(r,n[r]));return()=>{for(const r of s.splice(0,s.length))r()}}removeHooks(e){const n=Of(e);for(const s in n)this.removeHook(s,n[s])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(dk,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(pk,e,...n)}callHookWith(e,n,...s){const r=this._before||this._after?{name:n,args:s,context:{}}:void 0;this._before&&Ph(this._before,r);const i=e(n in this._hooks?[...this._hooks[n]]:[],s);return i instanceof Promise?i.finally(()=>{this._after&&r&&Ph(this._after,r)}):(this._after&&r&&Ph(this._after,r),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function ST(){return new gk}function mk(t={}){let e,n=!1;const s=o=>{if(e&&e!==o)throw new Error("Context conflict")};let r;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?r=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(r){const o=r.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||s(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{s(o),e=o;try{return r?r.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const c=()=>{e=o},u=()=>e===o?c:void 0;xf.add(u);try{const h=r?r.run(o,a):a();return n||(e=void 0),await h}finally{xf.delete(u)}}}}function _k(t={}){const e={};return{get(n,s={}){return e[n]||(e[n]=mk({...t,...s})),e[n]}}}const Cl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},S_="__unctx__",yk=Cl[S_]||(Cl[S_]=_k()),vk=(t,e={})=>yk.get(t,e),C_="__unctx_async_handlers__",xf=Cl[C_]||(Cl[C_]=new Set);function Di(t){const e=[];for(const r of xf){const i=r();i&&e.push(i)}const n=()=>{for(const r of e)r()};let s=t();return s&&typeof s=="object"&&"catch"in s&&(s=s.catch(r=>{throw n(),r})),[s,n]}const wk=!1,A_=!1,Ek=!1,R_={id:"__nuxt-loader"},Tk={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},Ik="#__nuxt",CT="nuxt-app",P_=36e5,bk="vite:preloadError";function AT(t=CT){return vk(t,{asyncContext:!1})}const Sk="__nuxt_plugin";function Ck(t){let e=0;const n={_id:t.id||CT||"nuxt-app",_scope:Xw(),provide:void 0,versions:{get nuxt(){return"4.1.3"},get vue(){return n.vueApp.version}},payload:zn({...t.ssrContext?.payload||{},data:zn({}),state:Vn({}),once:new Set,_errors:zn({})}),static:{data:{}},runWithContext(r){return n._scope.active&&!Yd()?n._scope.run(()=>k_(n,r)):k_(n,r)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let r=!1;return()=>{if(!r&&(r=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:zn({}),_payloadRevivers:{},...t};{const r=window.__NUXT__;if(r)for(const i in r)switch(i){case"data":case"state":case"_errors":Object.assign(n.payload[i],r[i]);break;default:n.payload[i]=r[i]}}n.hooks=ST(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(r,i)=>{const o="$"+r;kc(n,o,i),kc(n.vueApp.config.globalProperties,o,i)},kc(n.vueApp,"$nuxt",n),kc(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(bk,i=>{n.callHook("app:chunkError",{error:i.payload}),i.payload.message.includes("Unable to preload CSS")&&i.preventDefault()}),window.useNuxtApp||=De;const r=n.hook("app:error",(...i)=>{console.error("[nuxt] error caught during app initialization",...i)});n.hook("app:mounted",r)}const s=n.payload.config;return n.provide("config",s),n}function Ak(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function Rk(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const s in n)t.provide(s,n[s])}}async function Pk(t,e){const n=new Set,s=[],r=[];let i,o=0;async function a(c){const u=c.dependsOn?.filter(h=>e.some(f=>f._name===h)&&!n.has(h))??[];if(u.length>0)s.push([new Set(u),c]);else{const h=Rk(t,c).then(async()=>{c._name&&(n.add(c._name),await Promise.all(s.map(async([f,d])=>{f.has(c._name)&&(f.delete(c._name),f.size===0&&(o++,await a(d)))})))}).catch(f=>{if(!c.parallel&&!t.payload.error)throw f;i||=f});c.parallel?r.push(h):await h}}for(const c of e)Ak(t,c);for(const c of e)await a(c);if(await Promise.all(r),o)for(let c=0;c<o;c++)await Promise.all(r);if(i)throw t.payload.error||i}function tt(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[Sk]:!0,_name:e})}const kk=tt;function k_(t,e,n){const s=()=>e();return AT(t._id).set(t),t.vueApp.runWithContext(s)}function Nk(t){let e;return pu()&&(e=Ns()?.appContext.app.$nuxt),e||=AT(t).tryUse(),e||null}function De(t){const e=Nk(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function ns(t){return De().$config}function kc(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function Ok(t,e){return{ctx:{table:t},matchAll:n=>PT(n,t)}}function RT(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([s,r])=>[s,RT(r)])):new Map(Object.entries(t[n]));return e}function xk(t){return Ok(RT(t))}function PT(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const s=[];for(const[i,o]of N_(e.wildcard))(t===i||t.startsWith(i+"/"))&&s.push(o);for(const[i,o]of N_(e.dynamic))if(t.startsWith(i+"/")){const a="/"+t.slice(i.length).split("/").splice(2).join("/");s.push(...PT(a,o))}const r=e.static.get(t);return r&&s.push(r),s.filter(Boolean)}function N_(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function kh(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function Df(t,e,n=".",s){if(!kh(e))return Df(t,{},n,s);const r=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(s&&s(r,i,o,n)||(Array.isArray(o)&&Array.isArray(r[i])?r[i]=[...o,...r[i]]:kh(o)&&kh(r[i])?r[i]=Df(o,r[i],(n?`${n}.`:"")+i.toString(),s):r[i]=o))}return r}function kT(t){return(...e)=>e.reduce((n,s)=>Df(n,s,"",t),{})}const gp=kT(),Dk=kT((t,e,n)=>{if(t[e]!==void 0&&typeof n=="function")return t[e]=n(t[e]),!0});function Mk(t,e){try{return e in t}catch{return!1}}class O_ extends Error{static __h3_error__=!0;statusCode=500;fatal=!1;unhandled=!1;statusMessage;data;cause;constructor(e,n={}){super(e,n),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const e={message:this.message,statusCode:Mf(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=NT(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}function Lk(t){if(typeof t=="string")return new O_(t);if(Vk(t))return t;const e=new O_(t.message??t.statusMessage??"",{cause:t.cause||t});if(Mk(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=Mf(t.statusCode,e.statusCode):t.status&&(e.statusCode=Mf(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;NT(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function Vk(t){return t?.constructor?.__h3_error__===!0}const Fk=/[^\u0009\u0020-\u007E]/g;function NT(t=""){return t.replace(Fk,"")}function Mf(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const OT=Symbol("layout-meta"),Gr=Symbol("route");import.meta.url.replace(/\/app\/.*$/,"/");const Wt=()=>De()?.$router,oo=()=>pu()?it(Gr,De()._route):De()._route;const Uk=()=>{try{if(De()._processingMiddleware)return!0}catch{return!1}return!1},Lf=(t,e)=>{t||="/";const n=typeof t=="string"?t:"path"in t?Vf(t):Wt().resolve(t).href;if(e?.open){const{target:c="_blank",windowFeatures:u={}}=e.open,h=[];for(const[f,d]of Object.entries(u))d!==void 0&&h.push(`${f.toLowerCase()}=${d}`);return open(n,c,h.join(", ")),Promise.resolve()}const s=Fn(n,{acceptRelative:!0}),r=e?.external||s;if(r){if(!e?.external)throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:c}=new URL(n,window.location.href);if(c&&FP(c))throw new Error(`Cannot navigate to a URL with '${c}' protocol.`)}const i=Uk();if(!r&&i){if(e?.replace){if(typeof t=="string"){const{pathname:c,search:u,hash:h}=Eu(t);return{path:c,...u&&{query:fp(u)},...h&&{hash:h},replace:!0}}return{...t,replace:!0}}return t}const o=Wt(),a=De();return r?(a._scope.stop(),e?.replace?location.replace(n):location.href=n,i?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e?.replace?o.replace(t):o.push(t)};function Vf(t){return bl(t.path||"",t.query||{})+(t.hash||"")}const xT="__nuxt_error",ao=()=>pE(De().payload,"error"),Nr=t=>{const e=$r(t);try{const n=ao();De().hooks.callHook("app:error",e),n.value||=e}catch{throw e}return e},DT=async(t={})=>{const e=De(),n=ao();e.callHook("app:error:cleared",t),t.redirect&&await Wt().replace(t.redirect),n.value=void 0},MT=t=>!!t&&typeof t=="object"&&xT in t,$r=t=>{const e=Lk(t);return Object.defineProperty(e,xT,{value:!0,configurable:!1,writable:!1}),e},$k=()=>{};var x_={};/**
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
 */const LT={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const X=function(t,e){if(!t)throw co(e)},co=function(t){return new Error("Firebase Database ("+LT.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const VT=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},jk=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Tu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,h=i>>2,f=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(d=64)),s.push(n[h],n[f],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(VT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||f==null)throw new Bk;const d=i<<2|a>>4;if(s.push(d),u!==64){const g=a<<4&240|u>>2;if(s.push(g),f!==64){const _=u<<6&192|f;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Bk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const FT=function(t){const e=VT(t);return Tu.encodeByteArray(e,!0)},Al=function(t){return FT(t).replace(/\./g,"")},Rl=function(t){try{return Tu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Hk(t){return UT(void 0,t)}function UT(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!qk(n)||(t[n]=UT(t[n],e[n]));return t}function qk(t){return t!=="__proto__"}/**
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
 */function Wk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const zk=()=>Wk().__FIREBASE_DEFAULTS__,Kk=()=>{if(typeof process>"u"||typeof x_>"u")return;const t=x_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Gk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Rl(t[1]);return e&&JSON.parse(e)},Iu=()=>{try{return $k()||zk()||Kk()||Gk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Qk=t=>Iu()?.emulatorHosts?.[t],$T=t=>{const e=Qk(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},jT=()=>Iu()?.config,Yk=t=>Iu()?.[`_${t}`];/**
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
 */class Ra{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function BT(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function HT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Al(JSON.stringify(n)),Al(JSON.stringify(o)),""].join(".")}const ha={};function Xk(){const t={prod:[],emulator:[]};for(const e of Object.keys(ha))ha[e]?t.emulator.push(e):t.prod.push(e);return t}function Jk(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let D_=!1;function qT(t,e){if(typeof window>"u"||typeof document>"u"||!ri(window.location.host)||ha[t]===e||ha[t]||D_)return;ha[t]=e;function n(d){return`__firebase__banner__${d}`}const s="__firebase__banner",i=Xk().prod.length>0;function o(){const d=document.getElementById(s);d&&d.remove()}function a(d){d.style.display="flex",d.style.background="#7faaf0",d.style.position="fixed",d.style.bottom="5px",d.style.left="5px",d.style.padding=".5em",d.style.borderRadius="5px",d.style.alignItems="center"}function c(d,g){d.setAttribute("width","24"),d.setAttribute("id",g),d.setAttribute("height","24"),d.setAttribute("viewBox","0 0 24 24"),d.setAttribute("fill","none"),d.style.marginLeft="-6px"}function u(){const d=document.createElement("span");return d.style.cursor="pointer",d.style.marginLeft="16px",d.style.fontSize="24px",d.innerHTML=" &times;",d.onclick=()=>{D_=!0,o()},d}function h(d,g){d.setAttribute("id",g),d.innerText="Learn more",d.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",d.setAttribute("target","__blank"),d.style.paddingLeft="5px",d.style.textDecoration="underline"}function f(){const d=Jk(s),g=n("text"),_=document.getElementById(g)||document.createElement("span"),v=n("learnmore"),I=document.getElementById(v)||document.createElement("a"),D=n("preprendIcon"),O=document.getElementById(D)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(d.created){const y=d.element;a(y),h(I,v);const S=u();c(O,D),y.append(O,_,I,S),document.body.appendChild(y)}i?(_.innerText="Preview backend disconnected.",O.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(O.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,_.innerText="Preview backend running in this workspace."),_.setAttribute("id",g)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
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
 */function zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())}function Zk(){const t=Iu()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function e1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function t1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function WT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function n1(){const t=zt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function s1(){return LT.NODE_ADMIN===!0}function r1(){return!Zk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zT(){try{return typeof indexedDB=="object"}catch{return!1}}function i1(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{e(r.error?.message||"")}}catch(n){e(n)}})}/**
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
 */const o1="FirebaseError";class ss extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=o1,Object.setPrototypeOf(this,ss.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lo.prototype.create)}}class lo{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?a1(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ss(r,a,s)}}function a1(t,e){return t.replace(c1,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const c1=/\{\$([^}]+)}/g;/**
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
 */function Pa(t){return JSON.parse(t)}function Pt(t){return JSON.stringify(t)}/**
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
 */const KT=function(t){let e={},n={},s={},r="";try{const i=t.split(".");e=Pa(Rl(i[0])||""),n=Pa(Rl(i[1])||""),r=i[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:r}},l1=function(t){const e=KT(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},u1=function(t){const e=KT(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Os(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Wi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ff(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Pl(t,e,n){const s={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=e.call(n,t[r],r,t));return s}function ka(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(M_(i)&&M_(o)){if(!ka(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function M_(t){return t!==null&&typeof t=="object"}/**
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
 */function uo(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class h1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)s[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)s[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const d=s[f-3]^s[f-8]^s[f-14]^s[f-16];s[f]=(d<<1|d>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],u,h;for(let f=0;f<80;f++){f<40?f<20?(u=a^i&(o^a),h=1518500249):(u=i^o^a,h=1859775393):f<60?(u=i&o|a&(i|o),h=2400959708):(u=i^o^a,h=3395469782);const d=(r<<5|r>>>27)+u+c+h+s[f]&4294967295;c=a,a=o,o=(i<<30|i>>>2)&4294967295,i=r,r=d}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=s;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<n;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[s]=this.chain_[r]>>i&255,++s;return e}}function f1(t,e){const n=new d1(t,e);return n.subscribe.bind(n)}class d1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");p1(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Nh),r.error===void 0&&(r.error=Nh),r.complete===void 0&&(r.complete=Nh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function p1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Nh(){}function g1(t,e){return`${t} failed: ${e} argument `}/**
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
 */const m1=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);if(r>=55296&&r<=56319){const i=r-55296;s++,X(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;r=65536+(i<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},bu=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Xt(t){return t&&t._delegate?t._delegate:t}class xn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Or="[DEFAULT]";/**
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
 */class _1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ra;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(v1(e))try{this.getOrInitializeService({instanceIdentifier:Or})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Or){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Or){return this.instances.has(e)}getOptions(e=Or){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:y1(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Or){return this.component?this.component.multipleInstances?e:Or:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function y1(t){return t===Or?void 0:t}function v1(t){return t.instantiationMode==="EAGER"}/**
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
 */class w1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const E1={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},T1=ve.INFO,I1={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},b1=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=I1[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xa{constructor(e){this.name=e,this._logLevel=T1,this._logHandler=b1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?E1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const S1=(t,e)=>e.some(n=>t instanceof n);let L_,V_;function C1(){return L_||(L_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function A1(){return V_||(V_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const GT=new WeakMap,Uf=new WeakMap,QT=new WeakMap,Oh=new WeakMap,_p=new WeakMap;function R1(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(sr(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&GT.set(n,t)}).catch(()=>{}),_p.set(e,t),e}function P1(t){if(Uf.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Uf.set(t,e)}let $f={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Uf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||QT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function k1(t){$f=t($f)}function N1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(xh(this),e,...n);return QT.set(s,e.sort?e.sort():[e]),sr(s)}:A1().includes(t)?function(...e){return t.apply(xh(this),e),sr(GT.get(this))}:function(...e){return sr(t.apply(xh(this),e))}}function O1(t){return typeof t=="function"?N1(t):(t instanceof IDBTransaction&&P1(t),S1(t,C1())?new Proxy(t,$f):t)}function sr(t){if(t instanceof IDBRequest)return R1(t);if(Oh.has(t))return Oh.get(t);const e=O1(t);return e!==t&&(Oh.set(t,e),_p.set(e,t)),e}const xh=t=>_p.get(t);function x1(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=sr(o);return s&&o.addEventListener("upgradeneeded",c=>{s(sr(o.result),c.oldVersion,c.newVersion,sr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const D1=["get","getKey","getAll","getAllKeys","count"],M1=["put","add","delete","clear"],Dh=new Map;function F_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Dh.get(e))return Dh.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=M1.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||D1.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return Dh.set(e,i),i}k1(t=>({...t,get:(e,n,s)=>F_(e,n)||t.get(e,n,s),has:(e,n)=>!!F_(e,n)||t.has(e,n)}));/**
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
 */class L1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(V1(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function V1(t){return t.getComponent()?.type==="VERSION"}const jf="@firebase/app",U_="0.14.3";/**
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
 */const Ss=new Xa("@firebase/app"),F1="@firebase/app-compat",U1="@firebase/analytics-compat",$1="@firebase/analytics",j1="@firebase/app-check-compat",B1="@firebase/app-check",H1="@firebase/auth",q1="@firebase/auth-compat",W1="@firebase/database",z1="@firebase/data-connect",K1="@firebase/database-compat",G1="@firebase/functions",Q1="@firebase/functions-compat",Y1="@firebase/installations",X1="@firebase/installations-compat",J1="@firebase/messaging",Z1="@firebase/messaging-compat",eN="@firebase/performance",tN="@firebase/performance-compat",nN="@firebase/remote-config",sN="@firebase/remote-config-compat",rN="@firebase/storage",iN="@firebase/storage-compat",oN="@firebase/firestore",aN="@firebase/ai",cN="@firebase/firestore-compat",lN="firebase",uN="12.3.0";/**
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
 */const Bf="[DEFAULT]",hN={[jf]:"fire-core",[F1]:"fire-core-compat",[$1]:"fire-analytics",[U1]:"fire-analytics-compat",[B1]:"fire-app-check",[j1]:"fire-app-check-compat",[H1]:"fire-auth",[q1]:"fire-auth-compat",[W1]:"fire-rtdb",[z1]:"fire-data-connect",[K1]:"fire-rtdb-compat",[G1]:"fire-fn",[Q1]:"fire-fn-compat",[Y1]:"fire-iid",[X1]:"fire-iid-compat",[J1]:"fire-fcm",[Z1]:"fire-fcm-compat",[eN]:"fire-perf",[tN]:"fire-perf-compat",[nN]:"fire-rc",[sN]:"fire-rc-compat",[rN]:"fire-gcs",[iN]:"fire-gcs-compat",[oN]:"fire-fst",[cN]:"fire-fst-compat",[aN]:"fire-vertex","fire-js":"fire-js",[lN]:"fire-js-all"};/**
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
 */const kl=new Map,fN=new Map,Hf=new Map;function $_(t,e){try{t.container.addComponent(e)}catch(n){Ss.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function es(t){const e=t.name;if(Hf.has(e))return Ss.debug(`There were multiple attempts to register component ${e}.`),!1;Hf.set(e,t);for(const n of kl.values())$_(n,t);for(const n of fN.values())$_(n,t);return!0}function yp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function _n(t){return t==null?!1:t.settings!==void 0}/**
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
 */const dN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},rr=new lo("app","Firebase",dN);/**
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
 */class pN{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new xn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rr.create("app-deleted",{appName:this._name})}}/**
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
 */const vr=uN;function YT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:Bf,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw rr.create("bad-app-name",{appName:String(r)});if(n||(n=jT()),!n)throw rr.create("no-options");const i=kl.get(r);if(i){if(ka(n,i.options)&&ka(s,i.config))return i;throw rr.create("duplicate-app",{appName:r})}const o=new w1(r);for(const c of Hf.values())o.addComponent(c);const a=new pN(n,s,o);return kl.set(r,a),a}function vp(t=Bf){const e=kl.get(t);if(!e&&t===Bf&&jT())return YT();if(!e)throw rr.create("no-app",{appName:t});return e}function fn(t,e,n){let s=hN[t]??t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const o=[`Unable to register library "${s}" with version "${e}":`];r&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ss.warn(o.join(" "));return}es(new xn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const gN="firebase-heartbeat-database",mN=1,Na="firebase-heartbeat-store";let Mh=null;function XT(){return Mh||(Mh=x1(gN,mN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Na)}catch(n){console.warn(n)}}}}).catch(t=>{throw rr.create("idb-open",{originalErrorMessage:t.message})})),Mh}async function _N(t){try{const n=(await XT()).transaction(Na),s=await n.objectStore(Na).get(JT(t));return await n.done,s}catch(e){if(e instanceof ss)Ss.warn(e.message);else{const n=rr.create("idb-get",{originalErrorMessage:e?.message});Ss.warn(n.message)}}}async function j_(t,e){try{const s=(await XT()).transaction(Na,"readwrite");await s.objectStore(Na).put(e,JT(t)),await s.done}catch(n){if(n instanceof ss)Ss.warn(n.message);else{const s=rr.create("idb-set",{originalErrorMessage:n?.message});Ss.warn(s.message)}}}function JT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const yN=1024,vN=30;class wN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new TN(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=B_();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>vN){const r=IN(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Ss.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=B_(),{heartbeatsToSend:n,unsentEntries:s}=EN(this._heartbeatsCache.heartbeats),r=Al(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return Ss.warn(e),""}}}function B_(){return new Date().toISOString().substring(0,10)}function EN(t,e=yN){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),H_(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),H_(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class TN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zT()?i1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await _N(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return j_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return j_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function H_(t){return Al(JSON.stringify({version:2,heartbeats:t})).length}function IN(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function bN(t){es(new xn("platform-logger",e=>new L1(e),"PRIVATE")),es(new xn("heartbeat",e=>new wN(e),"PRIVATE")),fn(jf,U_,t),fn(jf,U_,"esm2020"),fn("fire-js","")}bN("");var q_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ir,ZT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,T){function E(){}E.prototype=T.prototype,b.F=T.prototype,b.prototype=new E,b.prototype.constructor=b,b.D=function(A,k,P){for(var C=Array(arguments.length-2),le=2;le<arguments.length;le++)C[le-2]=arguments[le];return T.prototype[k].apply(A,C)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,n),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(b,T,E){E||(E=0);const A=Array(16);if(typeof T=="string")for(var k=0;k<16;++k)A[k]=T.charCodeAt(E++)|T.charCodeAt(E++)<<8|T.charCodeAt(E++)<<16|T.charCodeAt(E++)<<24;else for(k=0;k<16;++k)A[k]=T[E++]|T[E++]<<8|T[E++]<<16|T[E++]<<24;T=b.g[0],E=b.g[1],k=b.g[2];let P=b.g[3],C;C=T+(P^E&(k^P))+A[0]+3614090360&4294967295,T=E+(C<<7&4294967295|C>>>25),C=P+(k^T&(E^k))+A[1]+3905402710&4294967295,P=T+(C<<12&4294967295|C>>>20),C=k+(E^P&(T^E))+A[2]+606105819&4294967295,k=P+(C<<17&4294967295|C>>>15),C=E+(T^k&(P^T))+A[3]+3250441966&4294967295,E=k+(C<<22&4294967295|C>>>10),C=T+(P^E&(k^P))+A[4]+4118548399&4294967295,T=E+(C<<7&4294967295|C>>>25),C=P+(k^T&(E^k))+A[5]+1200080426&4294967295,P=T+(C<<12&4294967295|C>>>20),C=k+(E^P&(T^E))+A[6]+2821735955&4294967295,k=P+(C<<17&4294967295|C>>>15),C=E+(T^k&(P^T))+A[7]+4249261313&4294967295,E=k+(C<<22&4294967295|C>>>10),C=T+(P^E&(k^P))+A[8]+1770035416&4294967295,T=E+(C<<7&4294967295|C>>>25),C=P+(k^T&(E^k))+A[9]+2336552879&4294967295,P=T+(C<<12&4294967295|C>>>20),C=k+(E^P&(T^E))+A[10]+4294925233&4294967295,k=P+(C<<17&4294967295|C>>>15),C=E+(T^k&(P^T))+A[11]+2304563134&4294967295,E=k+(C<<22&4294967295|C>>>10),C=T+(P^E&(k^P))+A[12]+1804603682&4294967295,T=E+(C<<7&4294967295|C>>>25),C=P+(k^T&(E^k))+A[13]+4254626195&4294967295,P=T+(C<<12&4294967295|C>>>20),C=k+(E^P&(T^E))+A[14]+2792965006&4294967295,k=P+(C<<17&4294967295|C>>>15),C=E+(T^k&(P^T))+A[15]+1236535329&4294967295,E=k+(C<<22&4294967295|C>>>10),C=T+(k^P&(E^k))+A[1]+4129170786&4294967295,T=E+(C<<5&4294967295|C>>>27),C=P+(E^k&(T^E))+A[6]+3225465664&4294967295,P=T+(C<<9&4294967295|C>>>23),C=k+(T^E&(P^T))+A[11]+643717713&4294967295,k=P+(C<<14&4294967295|C>>>18),C=E+(P^T&(k^P))+A[0]+3921069994&4294967295,E=k+(C<<20&4294967295|C>>>12),C=T+(k^P&(E^k))+A[5]+3593408605&4294967295,T=E+(C<<5&4294967295|C>>>27),C=P+(E^k&(T^E))+A[10]+38016083&4294967295,P=T+(C<<9&4294967295|C>>>23),C=k+(T^E&(P^T))+A[15]+3634488961&4294967295,k=P+(C<<14&4294967295|C>>>18),C=E+(P^T&(k^P))+A[4]+3889429448&4294967295,E=k+(C<<20&4294967295|C>>>12),C=T+(k^P&(E^k))+A[9]+568446438&4294967295,T=E+(C<<5&4294967295|C>>>27),C=P+(E^k&(T^E))+A[14]+3275163606&4294967295,P=T+(C<<9&4294967295|C>>>23),C=k+(T^E&(P^T))+A[3]+4107603335&4294967295,k=P+(C<<14&4294967295|C>>>18),C=E+(P^T&(k^P))+A[8]+1163531501&4294967295,E=k+(C<<20&4294967295|C>>>12),C=T+(k^P&(E^k))+A[13]+2850285829&4294967295,T=E+(C<<5&4294967295|C>>>27),C=P+(E^k&(T^E))+A[2]+4243563512&4294967295,P=T+(C<<9&4294967295|C>>>23),C=k+(T^E&(P^T))+A[7]+1735328473&4294967295,k=P+(C<<14&4294967295|C>>>18),C=E+(P^T&(k^P))+A[12]+2368359562&4294967295,E=k+(C<<20&4294967295|C>>>12),C=T+(E^k^P)+A[5]+4294588738&4294967295,T=E+(C<<4&4294967295|C>>>28),C=P+(T^E^k)+A[8]+2272392833&4294967295,P=T+(C<<11&4294967295|C>>>21),C=k+(P^T^E)+A[11]+1839030562&4294967295,k=P+(C<<16&4294967295|C>>>16),C=E+(k^P^T)+A[14]+4259657740&4294967295,E=k+(C<<23&4294967295|C>>>9),C=T+(E^k^P)+A[1]+2763975236&4294967295,T=E+(C<<4&4294967295|C>>>28),C=P+(T^E^k)+A[4]+1272893353&4294967295,P=T+(C<<11&4294967295|C>>>21),C=k+(P^T^E)+A[7]+4139469664&4294967295,k=P+(C<<16&4294967295|C>>>16),C=E+(k^P^T)+A[10]+3200236656&4294967295,E=k+(C<<23&4294967295|C>>>9),C=T+(E^k^P)+A[13]+681279174&4294967295,T=E+(C<<4&4294967295|C>>>28),C=P+(T^E^k)+A[0]+3936430074&4294967295,P=T+(C<<11&4294967295|C>>>21),C=k+(P^T^E)+A[3]+3572445317&4294967295,k=P+(C<<16&4294967295|C>>>16),C=E+(k^P^T)+A[6]+76029189&4294967295,E=k+(C<<23&4294967295|C>>>9),C=T+(E^k^P)+A[9]+3654602809&4294967295,T=E+(C<<4&4294967295|C>>>28),C=P+(T^E^k)+A[12]+3873151461&4294967295,P=T+(C<<11&4294967295|C>>>21),C=k+(P^T^E)+A[15]+530742520&4294967295,k=P+(C<<16&4294967295|C>>>16),C=E+(k^P^T)+A[2]+3299628645&4294967295,E=k+(C<<23&4294967295|C>>>9),C=T+(k^(E|~P))+A[0]+4096336452&4294967295,T=E+(C<<6&4294967295|C>>>26),C=P+(E^(T|~k))+A[7]+1126891415&4294967295,P=T+(C<<10&4294967295|C>>>22),C=k+(T^(P|~E))+A[14]+2878612391&4294967295,k=P+(C<<15&4294967295|C>>>17),C=E+(P^(k|~T))+A[5]+4237533241&4294967295,E=k+(C<<21&4294967295|C>>>11),C=T+(k^(E|~P))+A[12]+1700485571&4294967295,T=E+(C<<6&4294967295|C>>>26),C=P+(E^(T|~k))+A[3]+2399980690&4294967295,P=T+(C<<10&4294967295|C>>>22),C=k+(T^(P|~E))+A[10]+4293915773&4294967295,k=P+(C<<15&4294967295|C>>>17),C=E+(P^(k|~T))+A[1]+2240044497&4294967295,E=k+(C<<21&4294967295|C>>>11),C=T+(k^(E|~P))+A[8]+1873313359&4294967295,T=E+(C<<6&4294967295|C>>>26),C=P+(E^(T|~k))+A[15]+4264355552&4294967295,P=T+(C<<10&4294967295|C>>>22),C=k+(T^(P|~E))+A[6]+2734768916&4294967295,k=P+(C<<15&4294967295|C>>>17),C=E+(P^(k|~T))+A[13]+1309151649&4294967295,E=k+(C<<21&4294967295|C>>>11),C=T+(k^(E|~P))+A[4]+4149444226&4294967295,T=E+(C<<6&4294967295|C>>>26),C=P+(E^(T|~k))+A[11]+3174756917&4294967295,P=T+(C<<10&4294967295|C>>>22),C=k+(T^(P|~E))+A[2]+718787259&4294967295,k=P+(C<<15&4294967295|C>>>17),C=E+(P^(k|~T))+A[9]+3951481745&4294967295,b.g[0]=b.g[0]+T&4294967295,b.g[1]=b.g[1]+(k+(C<<21&4294967295|C>>>11))&4294967295,b.g[2]=b.g[2]+k&4294967295,b.g[3]=b.g[3]+P&4294967295}s.prototype.v=function(b,T){T===void 0&&(T=b.length);const E=T-this.blockSize,A=this.C;let k=this.h,P=0;for(;P<T;){if(k==0)for(;P<=E;)r(this,b,P),P+=this.blockSize;if(typeof b=="string"){for(;P<T;)if(A[k++]=b.charCodeAt(P++),k==this.blockSize){r(this,A),k=0;break}}else for(;P<T;)if(A[k++]=b[P++],k==this.blockSize){r(this,A),k=0;break}}this.h=k,this.o+=T},s.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var T=1;T<b.length-8;++T)b[T]=0;T=this.o*8;for(var E=b.length-8;E<b.length;++E)b[E]=T&255,T/=256;for(this.v(b),b=Array(16),T=0,E=0;E<4;++E)for(let A=0;A<32;A+=8)b[T++]=this.g[E]>>>A&255;return b};function i(b,T){var E=a;return Object.prototype.hasOwnProperty.call(E,b)?E[b]:E[b]=T(b)}function o(b,T){this.h=T;const E=[];let A=!0;for(let k=b.length-1;k>=0;k--){const P=b[k]|0;A&&P==T||(E[k]=P,A=!1)}this.g=E}var a={};function c(b){return-128<=b&&b<128?i(b,function(T){return new o([T|0],T<0?-1:0)}):new o([b|0],b<0?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return f;if(b<0)return I(u(-b));const T=[];let E=1;for(let A=0;b>=E;A++)T[A]=b/E|0,E*=4294967296;return new o(T,0)}function h(b,T){if(b.length==0)throw Error("number format error: empty string");if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(b.charAt(0)=="-")return I(h(b.substring(1),T));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=u(Math.pow(T,8));let A=f;for(let P=0;P<b.length;P+=8){var k=Math.min(8,b.length-P);const C=parseInt(b.substring(P,P+k),T);k<8?(k=u(Math.pow(T,k)),A=A.j(k).add(u(C))):(A=A.j(E),A=A.add(u(C)))}return A}var f=c(0),d=c(1),g=c(16777216);t=o.prototype,t.m=function(){if(v(this))return-I(this).m();let b=0,T=1;for(let E=0;E<this.g.length;E++){const A=this.i(E);b+=(A>=0?A:4294967296+A)*T,T*=4294967296}return b},t.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(_(this))return"0";if(v(this))return"-"+I(this).toString(b);const T=u(Math.pow(b,6));var E=this;let A="";for(;;){const k=S(E,T).g;E=D(E,k.j(T));let P=((E.g.length>0?E.g[0]:E.h)>>>0).toString(b);if(E=k,_(E))return P+A;for(;P.length<6;)P="0"+P;A=P+A}},t.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function _(b){if(b.h!=0)return!1;for(let T=0;T<b.g.length;T++)if(b.g[T]!=0)return!1;return!0}function v(b){return b.h==-1}t.l=function(b){return b=D(this,b),v(b)?-1:_(b)?0:1};function I(b){const T=b.g.length,E=[];for(let A=0;A<T;A++)E[A]=~b.g[A];return new o(E,~b.h).add(d)}t.abs=function(){return v(this)?I(this):this},t.add=function(b){const T=Math.max(this.g.length,b.g.length),E=[];let A=0;for(let k=0;k<=T;k++){let P=A+(this.i(k)&65535)+(b.i(k)&65535),C=(P>>>16)+(this.i(k)>>>16)+(b.i(k)>>>16);A=C>>>16,P&=65535,C&=65535,E[k]=C<<16|P}return new o(E,E[E.length-1]&-2147483648?-1:0)};function D(b,T){return b.add(I(T))}t.j=function(b){if(_(this)||_(b))return f;if(v(this))return v(b)?I(this).j(I(b)):I(I(this).j(b));if(v(b))return I(this.j(I(b)));if(this.l(g)<0&&b.l(g)<0)return u(this.m()*b.m());const T=this.g.length+b.g.length,E=[];for(var A=0;A<2*T;A++)E[A]=0;for(A=0;A<this.g.length;A++)for(let k=0;k<b.g.length;k++){const P=this.i(A)>>>16,C=this.i(A)&65535,le=b.i(k)>>>16,_e=b.i(k)&65535;E[2*A+2*k]+=C*_e,O(E,2*A+2*k),E[2*A+2*k+1]+=P*_e,O(E,2*A+2*k+1),E[2*A+2*k+1]+=C*le,O(E,2*A+2*k+1),E[2*A+2*k+2]+=P*le,O(E,2*A+2*k+2)}for(b=0;b<T;b++)E[b]=E[2*b+1]<<16|E[2*b];for(b=T;b<2*T;b++)E[b]=0;return new o(E,0)};function O(b,T){for(;(b[T]&65535)!=b[T];)b[T+1]+=b[T]>>>16,b[T]&=65535,T++}function y(b,T){this.g=b,this.h=T}function S(b,T){if(_(T))throw Error("division by zero");if(_(b))return new y(f,f);if(v(b))return T=S(I(b),T),new y(I(T.g),I(T.h));if(v(T))return T=S(b,I(T)),new y(I(T.g),T.h);if(b.g.length>30){if(v(b)||v(T))throw Error("slowDivide_ only works with positive integers.");for(var E=d,A=T;A.l(b)<=0;)E=x(E),A=x(A);var k=L(E,1),P=L(A,1);for(A=L(A,2),E=L(E,2);!_(A);){var C=P.add(A);C.l(b)<=0&&(k=k.add(E),P=C),A=L(A,1),E=L(E,1)}return T=D(b,k.j(T)),new y(k,T)}for(k=f;b.l(T)>=0;){for(E=Math.max(1,Math.floor(b.m()/T.m())),A=Math.ceil(Math.log(E)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),P=u(E),C=P.j(T);v(C)||C.l(b)>0;)E-=A,P=u(E),C=P.j(T);_(P)&&(P=d),k=k.add(P),b=D(b,C)}return new y(k,b)}t.B=function(b){return S(this,b).h},t.and=function(b){const T=Math.max(this.g.length,b.g.length),E=[];for(let A=0;A<T;A++)E[A]=this.i(A)&b.i(A);return new o(E,this.h&b.h)},t.or=function(b){const T=Math.max(this.g.length,b.g.length),E=[];for(let A=0;A<T;A++)E[A]=this.i(A)|b.i(A);return new o(E,this.h|b.h)},t.xor=function(b){const T=Math.max(this.g.length,b.g.length),E=[];for(let A=0;A<T;A++)E[A]=this.i(A)^b.i(A);return new o(E,this.h^b.h)};function x(b){const T=b.g.length+1,E=[];for(let A=0;A<T;A++)E[A]=b.i(A)<<1|b.i(A-1)>>>31;return new o(E,b.h)}function L(b,T){const E=T>>5;T%=32;const A=b.g.length-E,k=[];for(let P=0;P<A;P++)k[P]=T>0?b.i(P+E)>>>T|b.i(P+E+1)<<32-T:b.i(P+E);return new o(k,b.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,ZT=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,ir=o}).apply(typeof q_<"u"?q_:typeof self<"u"?self:typeof window<"u"?window:{});var Nc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var eI,Zo,tI,Gc,qf,nI,sI,rI;(function(){var t,e=Object.defineProperty;function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Nc=="object"&&Nc];for(var p=0;p<l.length;++p){var m=l[p];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var s=n(this);function r(l,p){if(p)e:{var m=s;l=l.split(".");for(var w=0;w<l.length-1;w++){var M=l[w];if(!(M in m))break e;m=m[M]}l=l[l.length-1],w=m[l],p=p(w),p!=w&&p!=null&&e(m,l,{configurable:!0,writable:!0,value:p})}}r("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(l){return l||function(p){var m=[],w;for(w in p)Object.prototype.hasOwnProperty.call(p,w)&&m.push([w,p[w]]);return m}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function a(l){var p=typeof l;return p=="object"&&l!=null||p=="function"}function c(l,p,m){return l.call.apply(l.bind,arguments)}function u(l,p,m){return u=c,u.apply(null,arguments)}function h(l,p){var m=Array.prototype.slice.call(arguments,1);return function(){var w=m.slice();return w.push.apply(w,arguments),l.apply(this,w)}}function f(l,p){function m(){}m.prototype=p.prototype,l.Z=p.prototype,l.prototype=new m,l.prototype.constructor=l,l.Ob=function(w,M,F){for(var Q=Array(arguments.length-2),me=2;me<arguments.length;me++)Q[me-2]=arguments[me];return p.prototype[M].apply(w,Q)}}var d=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function g(l){const p=l.length;if(p>0){const m=Array(p);for(let w=0;w<p;w++)m[w]=l[w];return m}return[]}function _(l,p){for(let w=1;w<arguments.length;w++){const M=arguments[w];var m=typeof M;if(m=m!="object"?m:M?Array.isArray(M)?"array":m:"null",m=="array"||m=="object"&&typeof M.length=="number"){m=l.length||0;const F=M.length||0;l.length=m+F;for(let Q=0;Q<F;Q++)l[m+Q]=M[Q]}else l.push(M)}}class v{constructor(p,m){this.i=p,this.j=m,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function I(l){o.setTimeout(()=>{throw l},0)}function D(){var l=b;let p=null;return l.g&&(p=l.g,l.g=l.g.next,l.g||(l.h=null),p.next=null),p}class O{constructor(){this.h=this.g=null}add(p,m){const w=y.get();w.set(p,m),this.h?this.h.next=w:this.g=w,this.h=w}}var y=new v(()=>new S,l=>l.reset());class S{constructor(){this.next=this.g=this.h=null}set(p,m){this.h=p,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let x,L=!1,b=new O,T=()=>{const l=Promise.resolve(void 0);x=()=>{l.then(E)}};function E(){for(var l;l=D();){try{l.h.call(l.g)}catch(m){I(m)}var p=y;p.j(l),p.h<100&&(p.h++,l.next=p.g,p.g=l)}L=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function k(l,p){this.type=l,this.g=this.target=p,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var P=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var l=!1,p=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};o.addEventListener("test",m,p),o.removeEventListener("test",m,p)}catch{}return l})();function C(l){return/^[\s\xa0]*$/.test(l)}function le(l,p){k.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,p)}f(le,k),le.prototype.init=function(l,p){const m=this.type=l.type,w=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=p,p=l.relatedTarget,p||(m=="mouseover"?p=l.fromElement:m=="mouseout"&&(p=l.toElement)),this.relatedTarget=p,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&le.Z.h.call(this)},le.prototype.h=function(){le.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var _e="closure_listenable_"+(Math.random()*1e6|0),se=0;function fe(l,p,m,w,M){this.listener=l,this.proxy=null,this.src=p,this.type=m,this.capture=!!w,this.ha=M,this.key=++se,this.da=this.fa=!1}function ne(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Fe(l,p,m){for(const w in l)p.call(m,l[w],w,l)}function Un(l,p){for(const m in l)p.call(void 0,l[m],m,l)}function rn(l){const p={};for(const m in l)p[m]=l[m];return p}const St="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function rs(l,p){let m,w;for(let M=1;M<arguments.length;M++){w=arguments[M];for(m in w)l[m]=w[m];for(let F=0;F<St.length;F++)m=St[F],Object.prototype.hasOwnProperty.call(w,m)&&(l[m]=w[m])}}function bn(l){this.src=l,this.g={},this.h=0}bn.prototype.add=function(l,p,m,w,M){const F=l.toString();l=this.g[F],l||(l=this.g[F]=[],this.h++);const Q=Ot(l,p,w,M);return Q>-1?(p=l[Q],m||(p.fa=!1)):(p=new fe(p,this.src,F,!!w,M),p.fa=m,l.push(p)),p};function xs(l,p){const m=p.type;if(m in l.g){var w=l.g[m],M=Array.prototype.indexOf.call(w,p,void 0),F;(F=M>=0)&&Array.prototype.splice.call(w,M,1),F&&(ne(p),l.g[m].length==0&&(delete l.g[m],l.h--))}}function Ot(l,p,m,w){for(let M=0;M<l.length;++M){const F=l[M];if(!F.da&&F.listener==p&&F.capture==!!m&&F.ha==w)return M}return-1}var $="closure_lm_"+(Math.random()*1e6|0),ee={};function Y(l,p,m,w,M){if(Array.isArray(p)){for(let F=0;F<p.length;F++)Y(l,p[F],m,w,M);return null}return m=H(m),l&&l[_e]?l.J(p,m,a(w)?!!w.capture:!1,M):ie(l,p,m,!1,w,M)}function ie(l,p,m,w,M,F){if(!p)throw Error("Invalid event type");const Q=a(M)?!!M.capture:!!M;let me=B(l);if(me||(l[$]=me=new bn(l)),m=me.add(p,m,w,Q,F),m.proxy)return m;if(w=Re(),m.proxy=w,w.src=l,w.listener=m,l.addEventListener)P||(M=Q),M===void 0&&(M=!1),l.addEventListener(p.toString(),w,M);else if(l.attachEvent)l.attachEvent(N(p.toString()),w);else if(l.addListener&&l.removeListener)l.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return m}function Re(){function l(m){return p.call(l.src,l.listener,m)}const p=V;return l}function Ue(l,p,m,w,M){if(Array.isArray(p))for(var F=0;F<p.length;F++)Ue(l,p[F],m,w,M);else w=a(w)?!!w.capture:!!w,m=H(m),l&&l[_e]?(l=l.i,F=String(p).toString(),F in l.g&&(p=l.g[F],m=Ot(p,m,w,M),m>-1&&(ne(p[m]),Array.prototype.splice.call(p,m,1),p.length==0&&(delete l.g[F],l.h--)))):l&&(l=B(l))&&(p=l.g[p.toString()],l=-1,p&&(l=Ot(p,m,w,M)),(m=l>-1?p[l]:null)&&R(m))}function R(l){if(typeof l!="number"&&l&&!l.da){var p=l.src;if(p&&p[_e])xs(p.i,l);else{var m=l.type,w=l.proxy;p.removeEventListener?p.removeEventListener(m,w,l.capture):p.detachEvent?p.detachEvent(N(m),w):p.addListener&&p.removeListener&&p.removeListener(w),(m=B(p))?(xs(m,l),m.h==0&&(m.src=null,p[$]=null)):ne(l)}}}function N(l){return l in ee?ee[l]:ee[l]="on"+l}function V(l,p){if(l.da)l=!0;else{p=new le(p,this);const m=l.listener,w=l.ha||l.src;l.fa&&R(l),l=m.call(w,p)}return l}function B(l){return l=l[$],l instanceof bn?l:null}var U="__closure_events_fn_"+(Math.random()*1e9>>>0);function H(l){return typeof l=="function"?l:(l[U]||(l[U]=function(p){return l.handleEvent(p)}),l[U])}function K(){A.call(this),this.i=new bn(this),this.M=this,this.G=null}f(K,A),K.prototype[_e]=!0,K.prototype.removeEventListener=function(l,p,m,w){Ue(this,l,p,m,w)};function W(l,p){var m,w=l.G;if(w)for(m=[];w;w=w.G)m.push(w);if(l=l.M,w=p.type||p,typeof p=="string")p=new k(p,l);else if(p instanceof k)p.target=p.target||l;else{var M=p;p=new k(w,l),rs(p,M)}M=!0;let F,Q;if(m)for(Q=m.length-1;Q>=0;Q--)F=p.g=m[Q],M=G(F,w,!0,p)&&M;if(F=p.g=l,M=G(F,w,!0,p)&&M,M=G(F,w,!1,p)&&M,m)for(Q=0;Q<m.length;Q++)F=p.g=m[Q],M=G(F,w,!1,p)&&M}K.prototype.N=function(){if(K.Z.N.call(this),this.i){var l=this.i;for(const p in l.g){const m=l.g[p];for(let w=0;w<m.length;w++)ne(m[w]);delete l.g[p],l.h--}}this.G=null},K.prototype.J=function(l,p,m,w){return this.i.add(String(l),p,!1,m,w)},K.prototype.K=function(l,p,m,w){return this.i.add(String(l),p,!0,m,w)};function G(l,p,m,w){if(p=l.i.g[String(p)],!p)return!0;p=p.concat();let M=!0;for(let F=0;F<p.length;++F){const Q=p[F];if(Q&&!Q.da&&Q.capture==m){const me=Q.listener,dt=Q.ha||Q.src;Q.fa&&xs(l.i,Q),M=me.call(dt,w)!==!1&&M}}return M&&!w.defaultPrevented}function z(l,p){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=u(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:o.setTimeout(l,p||0)}function ae(l){l.g=z(()=>{l.g=null,l.i&&(l.i=!1,ae(l))},l.l);const p=l.h;l.h=null,l.m.apply(null,p)}class J extends A{constructor(p,m){super(),this.m=p,this.l=m,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:ae(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function re(l){A.call(this),this.h=l,this.g={}}f(re,A);var he=[];function ye(l){Fe(l.g,function(p,m){this.g.hasOwnProperty(m)&&R(p)},l),l.g={}}re.prototype.N=function(){re.Z.N.call(this),ye(this)},re.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ke=o.JSON.stringify,Pe=o.JSON.parse,xt=class{stringify(l){return o.JSON.stringify(l,void 0)}parse(l){return o.JSON.parse(l,void 0)}};function ht(){}function Jt(){}var ft={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function is(){k.call(this,"d")}f(is,k);function li(){k.call(this,"c")}f(li,k);var nt={},on=null;function Er(){return on=on||new K}nt.Ia="serverreachability";function Io(l){k.call(this,nt.Ia,l)}f(Io,k);function bo(l){const p=Er();W(p,new Io(p))}nt.STAT_EVENT="statevent";function Xg(l,p){k.call(this,nt.STAT_EVENT,l),this.stat=p}f(Xg,k);function Kt(l){const p=Er();W(p,new Xg(p,l))}nt.Ja="timingevent";function Jg(l,p){k.call(this,nt.Ja,l),this.size=p}f(Jg,k);function So(l,p){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){l()},p)}function Co(){this.g=!0}Co.prototype.ua=function(){this.g=!1};function EA(l,p,m,w,M,F){l.info(function(){if(l.g)if(F){var Q="",me=F.split("&");for(let $e=0;$e<me.length;$e++){var dt=me[$e].split("=");if(dt.length>1){const mt=dt[0];dt=dt[1];const jn=mt.split("_");Q=jn.length>=2&&jn[1]=="type"?Q+(mt+"="+dt+"&"):Q+(mt+"=redacted&")}}}else Q=null;else Q=F;return"XMLHTTP REQ ("+w+") [attempt "+M+"]: "+p+`
`+m+`
`+Q})}function TA(l,p,m,w,M,F,Q){l.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+M+"]: "+p+`
`+m+`
`+F+" "+Q})}function ui(l,p,m,w){l.info(function(){return"XMLHTTP TEXT ("+p+"): "+bA(l,m)+(w?" "+w:"")})}function IA(l,p){l.info(function(){return"TIMEOUT: "+p})}Co.prototype.info=function(){};function bA(l,p){if(!l.g)return p;if(!p)return null;try{const F=JSON.parse(p);if(F){for(l=0;l<F.length;l++)if(Array.isArray(F[l])){var m=F[l];if(!(m.length<2)){var w=m[1];if(Array.isArray(w)&&!(w.length<1)){var M=w[0];if(M!="noop"&&M!="stop"&&M!="close")for(let Q=1;Q<w.length;Q++)w[Q]=""}}}}return ke(F)}catch{return p}}var fc={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Zg={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},em;function Zu(){}f(Zu,ht),Zu.prototype.g=function(){return new XMLHttpRequest},em=new Zu;function Ao(l){return encodeURIComponent(String(l))}function SA(l){var p=1;l=l.split(":");const m=[];for(;p>0&&l.length;)m.push(l.shift()),p--;return l.length&&m.push(l.join(":")),m}function Ds(l,p,m,w){this.j=l,this.i=p,this.l=m,this.S=w||1,this.V=new re(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new tm}function tm(){this.i=null,this.g="",this.h=!1}var nm={},eh={};function th(l,p,m){l.M=1,l.A=pc($n(p)),l.u=m,l.R=!0,sm(l,null)}function sm(l,p){l.F=Date.now(),dc(l),l.B=$n(l.A);var m=l.B,w=l.S;Array.isArray(w)||(w=[String(w)]),mm(m.i,"t",w),l.C=0,m=l.j.L,l.h=new tm,l.g=Dm(l.j,m?p:null,!l.u),l.P>0&&(l.O=new J(u(l.Y,l,l.g),l.P)),p=l.V,m=l.g,w=l.ba;var M="readystatechange";Array.isArray(M)||(M&&(he[0]=M.toString()),M=he);for(let F=0;F<M.length;F++){const Q=Y(m,M[F],w||p.handleEvent,!1,p.h||p);if(!Q)break;p.g[Q.key]=Q}p=l.J?rn(l.J):{},l.u?(l.v||(l.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,p)):(l.v="GET",l.g.ea(l.B,l.v,null,p)),bo(),EA(l.i,l.v,l.B,l.l,l.S,l.u)}Ds.prototype.ba=function(l){l=l.target;const p=this.O;p&&Vs(l)==3?p.j():this.Y(l)},Ds.prototype.Y=function(l){try{if(l==this.g)e:{const me=Vs(this.g),dt=this.g.ya(),$e=this.g.ca();if(!(me<3)&&(me!=3||this.g&&(this.h.h||this.g.la()||Im(this.g)))){this.K||me!=4||dt==7||(dt==8||$e<=0?bo(3):bo(2)),nh(this);var p=this.g.ca();this.X=p;var m=CA(this);if(this.o=p==200,TA(this.i,this.v,this.B,this.l,this.S,me,p),this.o){if(this.U&&!this.L){t:{if(this.g){var w,M=this.g;if((w=M.g?M.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(w)){var F=w;break t}}F=null}if(l=F)ui(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,sh(this,l);else{this.o=!1,this.m=3,Kt(12),Tr(this),Ro(this);break e}}if(this.R){l=!0;let mt;for(;!this.K&&this.C<m.length;)if(mt=AA(this,m),mt==eh){me==4&&(this.m=4,Kt(14),l=!1),ui(this.i,this.l,null,"[Incomplete Response]");break}else if(mt==nm){this.m=4,Kt(15),ui(this.i,this.l,m,"[Invalid Chunk]"),l=!1;break}else ui(this.i,this.l,mt,null),sh(this,mt);if(rm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),me!=4||m.length!=0||this.h.h||(this.m=1,Kt(16),l=!1),this.o=this.o&&l,!l)ui(this.i,this.l,m,"[Invalid Chunked Response]"),Tr(this),Ro(this);else if(m.length>0&&!this.W){this.W=!0;var Q=this.j;Q.g==this&&Q.aa&&!Q.P&&(Q.j.info("Great, no buffering proxy detected. Bytes received: "+m.length),hh(Q),Q.P=!0,Kt(11))}}else ui(this.i,this.l,m,null),sh(this,m);me==4&&Tr(this),this.o&&!this.K&&(me==4?km(this.j,this):(this.o=!1,dc(this)))}else jA(this.g),p==400&&m.indexOf("Unknown SID")>0?(this.m=3,Kt(12)):(this.m=0,Kt(13)),Tr(this),Ro(this)}}}catch{}finally{}};function CA(l){if(!rm(l))return l.g.la();const p=Im(l.g);if(p==="")return"";let m="";const w=p.length,M=Vs(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return Tr(l),Ro(l),"";l.h.i=new o.TextDecoder}for(let F=0;F<w;F++)l.h.h=!0,m+=l.h.i.decode(p[F],{stream:!(M&&F==w-1)});return p.length=0,l.h.g+=m,l.C=0,l.h.g}function rm(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function AA(l,p){var m=l.C,w=p.indexOf(`
`,m);return w==-1?eh:(m=Number(p.substring(m,w)),isNaN(m)?nm:(w+=1,w+m>p.length?eh:(p=p.slice(w,w+m),l.C=w+m,p)))}Ds.prototype.cancel=function(){this.K=!0,Tr(this)};function dc(l){l.T=Date.now()+l.H,im(l,l.H)}function im(l,p){if(l.D!=null)throw Error("WatchDog timer not null");l.D=So(u(l.aa,l),p)}function nh(l){l.D&&(o.clearTimeout(l.D),l.D=null)}Ds.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(IA(this.i,this.B),this.M!=2&&(bo(),Kt(17)),Tr(this),this.m=2,Ro(this)):im(this,this.T-l)};function Ro(l){l.j.I==0||l.K||km(l.j,l)}function Tr(l){nh(l);var p=l.O;p&&typeof p.dispose=="function"&&p.dispose(),l.O=null,ye(l.V),l.g&&(p=l.g,l.g=null,p.abort(),p.dispose())}function sh(l,p){try{var m=l.j;if(m.I!=0&&(m.g==l||rh(m.h,l))){if(!l.L&&rh(m.h,l)&&m.I==3){try{var w=m.Ba.g.parse(p)}catch{w=null}if(Array.isArray(w)&&w.length==3){var M=w;if(M[0]==0){e:if(!m.v){if(m.g)if(m.g.F+3e3<l.F)vc(m),_c(m);else break e;uh(m),Kt(18)}}else m.xa=M[1],0<m.xa-m.K&&M[2]<37500&&m.F&&m.A==0&&!m.C&&(m.C=So(u(m.Va,m),6e3));cm(m.h)<=1&&m.ta&&(m.ta=void 0)}else br(m,11)}else if((l.L||m.g==l)&&vc(m),!C(p))for(M=m.Ba.g.parse(p),p=0;p<M.length;p++){let $e=M[p];const mt=$e[0];if(!(mt<=m.K))if(m.K=mt,$e=$e[1],m.I==2)if($e[0]=="c"){m.M=$e[1],m.ba=$e[2];const jn=$e[3];jn!=null&&(m.ka=jn,m.j.info("VER="+m.ka));const Sr=$e[4];Sr!=null&&(m.za=Sr,m.j.info("SVER="+m.za));const Fs=$e[5];Fs!=null&&typeof Fs=="number"&&Fs>0&&(w=1.5*Fs,m.O=w,m.j.info("backChannelRequestTimeoutMs_="+w)),w=m;const Us=l.g;if(Us){const Ec=Us.g?Us.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ec){var F=w.h;F.g||Ec.indexOf("spdy")==-1&&Ec.indexOf("quic")==-1&&Ec.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(ih(F,F.h),F.h=null))}if(w.G){const fh=Us.g?Us.g.getResponseHeader("X-HTTP-Session-Id"):null;fh&&(w.wa=fh,ze(w.J,w.G,fh))}}m.I=3,m.l&&m.l.ra(),m.aa&&(m.T=Date.now()-l.F,m.j.info("Handshake RTT: "+m.T+"ms")),w=m;var Q=l;if(w.na=xm(w,w.L?w.ba:null,w.W),Q.L){lm(w.h,Q);var me=Q,dt=w.O;dt&&(me.H=dt),me.D&&(nh(me),dc(me)),w.g=Q}else Rm(w);m.i.length>0&&yc(m)}else $e[0]!="stop"&&$e[0]!="close"||br(m,7);else m.I==3&&($e[0]=="stop"||$e[0]=="close"?$e[0]=="stop"?br(m,7):lh(m):$e[0]!="noop"&&m.l&&m.l.qa($e),m.A=0)}}bo(4)}catch{}}var RA=class{constructor(l,p){this.g=l,this.map=p}};function om(l){this.l=l||10,o.PerformanceNavigationTiming?(l=o.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function am(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function cm(l){return l.h?1:l.g?l.g.size:0}function rh(l,p){return l.h?l.h==p:l.g?l.g.has(p):!1}function ih(l,p){l.g?l.g.add(p):l.h=p}function lm(l,p){l.h&&l.h==p?l.h=null:l.g&&l.g.has(p)&&l.g.delete(p)}om.prototype.cancel=function(){if(this.i=um(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function um(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let p=l.i;for(const m of l.g.values())p=p.concat(m.G);return p}return g(l.i)}var hm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function PA(l,p){if(l){l=l.split("&");for(let m=0;m<l.length;m++){const w=l[m].indexOf("=");let M,F=null;w>=0?(M=l[m].substring(0,w),F=l[m].substring(w+1)):M=l[m],p(M,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function Ms(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;l instanceof Ms?(this.l=l.l,Po(this,l.j),this.o=l.o,this.g=l.g,ko(this,l.u),this.h=l.h,oh(this,_m(l.i)),this.m=l.m):l&&(p=String(l).match(hm))?(this.l=!1,Po(this,p[1]||"",!0),this.o=No(p[2]||""),this.g=No(p[3]||"",!0),ko(this,p[4]),this.h=No(p[5]||"",!0),oh(this,p[6]||"",!0),this.m=No(p[7]||"")):(this.l=!1,this.i=new xo(null,this.l))}Ms.prototype.toString=function(){const l=[];var p=this.j;p&&l.push(Oo(p,fm,!0),":");var m=this.g;return(m||p=="file")&&(l.push("//"),(p=this.o)&&l.push(Oo(p,fm,!0),"@"),l.push(Ao(m).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.u,m!=null&&l.push(":",String(m))),(m=this.h)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(Oo(m,m.charAt(0)=="/"?OA:NA,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",Oo(m,DA)),l.join("")},Ms.prototype.resolve=function(l){const p=$n(this);let m=!!l.j;m?Po(p,l.j):m=!!l.o,m?p.o=l.o:m=!!l.g,m?p.g=l.g:m=l.u!=null;var w=l.h;if(m)ko(p,l.u);else if(m=!!l.h){if(w.charAt(0)!="/")if(this.g&&!this.h)w="/"+w;else{var M=p.h.lastIndexOf("/");M!=-1&&(w=p.h.slice(0,M+1)+w)}if(M=w,M==".."||M==".")w="";else if(M.indexOf("./")!=-1||M.indexOf("/.")!=-1){w=M.lastIndexOf("/",0)==0,M=M.split("/");const F=[];for(let Q=0;Q<M.length;){const me=M[Q++];me=="."?w&&Q==M.length&&F.push(""):me==".."?((F.length>1||F.length==1&&F[0]!="")&&F.pop(),w&&Q==M.length&&F.push("")):(F.push(me),w=!0)}w=F.join("/")}else w=M}return m?p.h=w:m=l.i.toString()!=="",m?oh(p,_m(l.i)):m=!!l.m,m&&(p.m=l.m),p};function $n(l){return new Ms(l)}function Po(l,p,m){l.j=m?No(p,!0):p,l.j&&(l.j=l.j.replace(/:$/,""))}function ko(l,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);l.u=p}else l.u=null}function oh(l,p,m){p instanceof xo?(l.i=p,MA(l.i,l.l)):(m||(p=Oo(p,xA)),l.i=new xo(p,l.l))}function ze(l,p,m){l.i.set(p,m)}function pc(l){return ze(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function No(l,p){return l?p?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Oo(l,p,m){return typeof l=="string"?(l=encodeURI(l).replace(p,kA),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function kA(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var fm=/[#\/\?@]/g,NA=/[#\?:]/g,OA=/[#\?]/g,xA=/[#\?@]/g,DA=/#/g;function xo(l,p){this.h=this.g=null,this.i=l||null,this.j=!!p}function Ir(l){l.g||(l.g=new Map,l.h=0,l.i&&PA(l.i,function(p,m){l.add(decodeURIComponent(p.replace(/\+/g," ")),m)}))}t=xo.prototype,t.add=function(l,p){Ir(this),this.i=null,l=hi(this,l);let m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(p),this.h+=1,this};function dm(l,p){Ir(l),p=hi(l,p),l.g.has(p)&&(l.i=null,l.h-=l.g.get(p).length,l.g.delete(p))}function pm(l,p){return Ir(l),p=hi(l,p),l.g.has(p)}t.forEach=function(l,p){Ir(this),this.g.forEach(function(m,w){m.forEach(function(M){l.call(p,M,w,this)},this)},this)};function gm(l,p){Ir(l);let m=[];if(typeof p=="string")pm(l,p)&&(m=m.concat(l.g.get(hi(l,p))));else for(l=Array.from(l.g.values()),p=0;p<l.length;p++)m=m.concat(l[p]);return m}t.set=function(l,p){return Ir(this),this.i=null,l=hi(this,l),pm(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[p]),this.h+=1,this},t.get=function(l,p){return l?(l=gm(this,l),l.length>0?String(l[0]):p):p};function mm(l,p,m){dm(l,p),m.length>0&&(l.i=null,l.g.set(hi(l,p),g(m)),l.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],p=Array.from(this.g.keys());for(let w=0;w<p.length;w++){var m=p[w];const M=Ao(m);m=gm(this,m);for(let F=0;F<m.length;F++){let Q=M;m[F]!==""&&(Q+="="+Ao(m[F])),l.push(Q)}}return this.i=l.join("&")};function _m(l){const p=new xo;return p.i=l.i,l.g&&(p.g=new Map(l.g),p.h=l.h),p}function hi(l,p){return p=String(p),l.j&&(p=p.toLowerCase()),p}function MA(l,p){p&&!l.j&&(Ir(l),l.i=null,l.g.forEach(function(m,w){const M=w.toLowerCase();w!=M&&(dm(this,w),mm(this,M,m))},l)),l.j=p}function LA(l,p){const m=new Co;if(o.Image){const w=new Image;w.onload=h(Ls,m,"TestLoadImage: loaded",!0,p,w),w.onerror=h(Ls,m,"TestLoadImage: error",!1,p,w),w.onabort=h(Ls,m,"TestLoadImage: abort",!1,p,w),w.ontimeout=h(Ls,m,"TestLoadImage: timeout",!1,p,w),o.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=l}else p(!1)}function VA(l,p){const m=new Co,w=new AbortController,M=setTimeout(()=>{w.abort(),Ls(m,"TestPingServer: timeout",!1,p)},1e4);fetch(l,{signal:w.signal}).then(F=>{clearTimeout(M),F.ok?Ls(m,"TestPingServer: ok",!0,p):Ls(m,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(M),Ls(m,"TestPingServer: error",!1,p)})}function Ls(l,p,m,w,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),w(m)}catch{}}function FA(){this.g=new xt}function ah(l){this.i=l.Sb||null,this.h=l.ab||!1}f(ah,ht),ah.prototype.g=function(){return new gc(this.i,this.h)};function gc(l,p){K.call(this),this.H=l,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(gc,K),t=gc.prototype,t.open=function(l,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=p,this.readyState=1,Mo(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(p.body=l),(this.H||o).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Do(this)),this.readyState=0},t.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Mo(this)),this.g&&(this.readyState=3,Mo(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;ym(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function ym(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}t.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var p=l.value?l.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!l.done}))&&(this.response=this.responseText+=p)}l.done?Do(this):Mo(this),this.readyState==3&&ym(this)}},t.Oa=function(l){this.g&&(this.response=this.responseText=l,Do(this))},t.Na=function(l){this.g&&(this.response=l,Do(this))},t.ga=function(){this.g&&Do(this)};function Do(l){l.readyState=4,l.l=null,l.j=null,l.B=null,Mo(l)}t.setRequestHeader=function(l,p){this.A.append(l,p)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],p=this.h.entries();for(var m=p.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=p.next();return l.join(`\r
`)};function Mo(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(gc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function vm(l){let p="";return Fe(l,function(m,w){p+=w,p+=":",p+=m,p+=`\r
`}),p}function ch(l,p,m){e:{for(w in m){var w=!1;break e}w=!0}w||(m=vm(m),typeof l=="string"?m!=null&&Ao(m):ze(l,p,m))}function et(l){K.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(et,K);var UA=/^https?$/i,$A=["POST","PUT"];t=et.prototype,t.Fa=function(l){this.H=l},t.ea=function(l,p,m,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);p=p?p.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():em.g(),this.g.onreadystatechange=d(u(this.Ca,this));try{this.B=!0,this.g.open(p,String(l),!0),this.B=!1}catch(F){wm(this,F);return}if(l=m||"",m=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var M in w)m.set(M,w[M]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const F of w.keys())m.set(F,w.get(F));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(m.keys()).find(F=>F.toLowerCase()=="content-type"),M=o.FormData&&l instanceof o.FormData,!(Array.prototype.indexOf.call($A,p,void 0)>=0)||w||M||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,Q]of m)this.g.setRequestHeader(F,Q);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(F){wm(this,F)}};function wm(l,p){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=p,l.o=5,Em(l),mc(l)}function Em(l){l.A||(l.A=!0,W(l,"complete"),W(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,W(this,"complete"),W(this,"abort"),mc(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),mc(this,!0)),et.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Tm(this):this.Xa())},t.Xa=function(){Tm(this)};function Tm(l){if(l.h&&typeof i<"u"){if(l.v&&Vs(l)==4)setTimeout(l.Ca.bind(l),0);else if(W(l,"readystatechange"),Vs(l)==4){l.h=!1;try{const F=l.ca();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var m;if(!(m=p)){var w;if(w=F===0){let Q=String(l.D).match(hm)[1]||null;!Q&&o.self&&o.self.location&&(Q=o.self.location.protocol.slice(0,-1)),w=!UA.test(Q?Q.toLowerCase():"")}m=w}if(m)W(l,"complete"),W(l,"success");else{l.o=6;try{var M=Vs(l)>2?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.ca()+"]",Em(l)}}finally{mc(l)}}}}function mc(l,p){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const m=l.g;l.g=null,p||W(l,"ready");try{m.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Vs(l){return l.g?l.g.readyState:0}t.ca=function(){try{return Vs(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(l){if(this.g){var p=this.g.responseText;return l&&p.indexOf(l)==0&&(p=p.substring(l.length)),Pe(p)}};function Im(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function jA(l){const p={};l=(l.g&&Vs(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<l.length;w++){if(C(l[w]))continue;var m=SA(l[w]);const M=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const F=p[M]||[];p[M]=F,F.push(m)}Un(p,function(w){return w.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Lo(l,p,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||p}function bm(l){this.za=0,this.i=[],this.j=new Co,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Lo("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Lo("baseRetryDelayMs",5e3,l),this.Za=Lo("retryDelaySeedMs",1e4,l),this.Ta=Lo("forwardChannelMaxRetries",2,l),this.va=Lo("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new om(l&&l.concurrentRequestLimit),this.Ba=new FA,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=bm.prototype,t.ka=8,t.I=1,t.connect=function(l,p,m,w){Kt(0),this.W=l,this.H=p||{},m&&w!==void 0&&(this.H.OSID=m,this.H.OAID=w),this.F=this.X,this.J=xm(this,null,this.W),yc(this)};function lh(l){if(Sm(l),l.I==3){var p=l.V++,m=$n(l.J);if(ze(m,"SID",l.M),ze(m,"RID",p),ze(m,"TYPE","terminate"),Vo(l,m),p=new Ds(l,l.j,p),p.M=2,p.A=pc($n(m)),m=!1,o.navigator&&o.navigator.sendBeacon)try{m=o.navigator.sendBeacon(p.A.toString(),"")}catch{}!m&&o.Image&&(new Image().src=p.A,m=!0),m||(p.g=Dm(p.j,null),p.g.ea(p.A)),p.F=Date.now(),dc(p)}Om(l)}function _c(l){l.g&&(hh(l),l.g.cancel(),l.g=null)}function Sm(l){_c(l),l.v&&(o.clearTimeout(l.v),l.v=null),vc(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&o.clearTimeout(l.m),l.m=null)}function yc(l){if(!am(l.h)&&!l.m){l.m=!0;var p=l.Ea;x||T(),L||(x(),L=!0),b.add(p,l),l.D=0}}function BA(l,p){return cm(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=p.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=So(u(l.Ea,l,p),Nm(l,l.D)),l.D++,!0)}t.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const M=new Ds(this,this.j,l);let F=this.o;if(this.U&&(F?(F=rn(F),rs(F,this.U)):F=this.U),this.u!==null||this.R||(M.J=F,F=null),this.S)e:{for(var p=0,m=0;m<this.i.length;m++){t:{var w=this.i[m];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(p+=w,p>4096){p=m;break e}if(p===4096||m===this.i.length-1){p=m+1;break e}}p=1e3}else p=1e3;p=Am(this,M,p),m=$n(this.J),ze(m,"RID",l),ze(m,"CVER",22),this.G&&ze(m,"X-HTTP-Session-Id",this.G),Vo(this,m),F&&(this.R?p="headers="+Ao(vm(F))+"&"+p:this.u&&ch(m,this.u,F)),ih(this.h,M),this.Ra&&ze(m,"TYPE","init"),this.S?(ze(m,"$req",p),ze(m,"SID","null"),M.U=!0,th(M,m,null)):th(M,m,p),this.I=2}}else this.I==3&&(l?Cm(this,l):this.i.length==0||am(this.h)||Cm(this))};function Cm(l,p){var m;p?m=p.l:m=l.V++;const w=$n(l.J);ze(w,"SID",l.M),ze(w,"RID",m),ze(w,"AID",l.K),Vo(l,w),l.u&&l.o&&ch(w,l.u,l.o),m=new Ds(l,l.j,m,l.D+1),l.u===null&&(m.J=l.o),p&&(l.i=p.G.concat(l.i)),p=Am(l,m,1e3),m.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),ih(l.h,m),th(m,w,p)}function Vo(l,p){l.H&&Fe(l.H,function(m,w){ze(p,w,m)}),l.l&&Fe({},function(m,w){ze(p,w,m)})}function Am(l,p,m){m=Math.min(l.i.length,m);const w=l.l?u(l.l.Ka,l.l,l):null;e:{var M=l.i;let me=-1;for(;;){const dt=["count="+m];me==-1?m>0?(me=M[0].g,dt.push("ofs="+me)):me=0:dt.push("ofs="+me);let $e=!0;for(let mt=0;mt<m;mt++){var F=M[mt].g;const jn=M[mt].map;if(F-=me,F<0)me=Math.max(0,M[mt].g-100),$e=!1;else try{F="req"+F+"_"||"";try{var Q=jn instanceof Map?jn:Object.entries(jn);for(const[Sr,Fs]of Q){let Us=Fs;a(Fs)&&(Us=ke(Fs)),dt.push(F+Sr+"="+encodeURIComponent(Us))}}catch(Sr){throw dt.push(F+"type="+encodeURIComponent("_badmap")),Sr}}catch{w&&w(jn)}}if($e){Q=dt.join("&");break e}}Q=void 0}return l=l.i.splice(0,m),p.G=l,Q}function Rm(l){if(!l.g&&!l.v){l.Y=1;var p=l.Da;x||T(),L||(x(),L=!0),b.add(p,l),l.A=0}}function uh(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=So(u(l.Da,l),Nm(l,l.A)),l.A++,!0)}t.Da=function(){if(this.v=null,Pm(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=So(u(this.Wa,this),l)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Kt(10),_c(this),Pm(this))};function hh(l){l.B!=null&&(o.clearTimeout(l.B),l.B=null)}function Pm(l){l.g=new Ds(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var p=$n(l.na);ze(p,"RID","rpc"),ze(p,"SID",l.M),ze(p,"AID",l.K),ze(p,"CI",l.F?"0":"1"),!l.F&&l.ia&&ze(p,"TO",l.ia),ze(p,"TYPE","xmlhttp"),Vo(l,p),l.u&&l.o&&ch(p,l.u,l.o),l.O&&(l.g.H=l.O);var m=l.g;l=l.ba,m.M=1,m.A=pc($n(p)),m.u=null,m.R=!0,sm(m,l)}t.Va=function(){this.C!=null&&(this.C=null,_c(this),uh(this),Kt(19))};function vc(l){l.C!=null&&(o.clearTimeout(l.C),l.C=null)}function km(l,p){var m=null;if(l.g==p){vc(l),hh(l),l.g=null;var w=2}else if(rh(l.h,p))m=p.G,lm(l.h,p),w=1;else return;if(l.I!=0){if(p.o)if(w==1){m=p.u?p.u.length:0,p=Date.now()-p.F;var M=l.D;w=Er(),W(w,new Jg(w,m)),yc(l)}else Rm(l);else if(M=p.m,M==3||M==0&&p.X>0||!(w==1&&BA(l,p)||w==2&&uh(l)))switch(m&&m.length>0&&(p=l.h,p.i=p.i.concat(m)),M){case 1:br(l,5);break;case 4:br(l,10);break;case 3:br(l,6);break;default:br(l,2)}}}function Nm(l,p){let m=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(m*=2),m*p}function br(l,p){if(l.j.info("Error code "+p),p==2){var m=u(l.bb,l),w=l.Ua;const M=!w;w=new Ms(w||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Po(w,"https"),pc(w),M?LA(w.toString(),m):VA(w.toString(),m)}else Kt(2);l.I=0,l.l&&l.l.pa(p),Om(l),Sm(l)}t.bb=function(l){l?(this.j.info("Successfully pinged google.com"),Kt(2)):(this.j.info("Failed to ping google.com"),Kt(1))};function Om(l){if(l.I=0,l.ja=[],l.l){const p=um(l.h);(p.length!=0||l.i.length!=0)&&(_(l.ja,p),_(l.ja,l.i),l.h.i.length=0,g(l.i),l.i.length=0),l.l.oa()}}function xm(l,p,m){var w=m instanceof Ms?$n(m):new Ms(m);if(w.g!="")p&&(w.g=p+"."+w.g),ko(w,w.u);else{var M=o.location;w=M.protocol,p=p?p+"."+M.hostname:M.hostname,M=+M.port;const F=new Ms(null);w&&Po(F,w),p&&(F.g=p),M&&ko(F,M),m&&(F.h=m),w=F}return m=l.G,p=l.wa,m&&p&&ze(w,m,p),ze(w,"VER",l.ka),Vo(l,w),w}function Dm(l,p,m){if(p&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=l.Aa&&!l.ma?new et(new ah({ab:m})):new et(l.ma),p.Fa(l.L),p}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Mm(){}t=Mm.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function wc(){}wc.prototype.g=function(l,p){return new an(l,p)};function an(l,p){K.call(this),this.g=new bm(p),this.l=l,this.h=p&&p.messageUrlParams||null,l=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(l?l["X-WebChannel-Content-Type"]=p.messageContentType:l={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(l?l["X-WebChannel-Client-Profile"]=p.sa:l={"X-WebChannel-Client-Profile":p.sa}),this.g.U=l,(l=p&&p.Qb)&&!C(l)&&(this.g.u=l),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!C(p)&&(this.g.G=p,l=this.h,l!==null&&p in l&&(l=this.h,p in l&&delete l[p])),this.j=new fi(this)}f(an,K),an.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},an.prototype.close=function(){lh(this.g)},an.prototype.o=function(l){var p=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.v&&(m={},m.__data__=ke(l),l=m);p.i.push(new RA(p.Ya++,l)),p.I==3&&yc(p)},an.prototype.N=function(){this.g.l=null,delete this.j,lh(this.g),delete this.g,an.Z.N.call(this)};function Lm(l){is.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var p=l.__sm__;if(p){e:{for(const m in p){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,p=p!==null&&l in p?p[l]:void 0),this.data=p}else this.data=l}f(Lm,is);function Vm(){li.call(this),this.status=1}f(Vm,li);function fi(l){this.g=l}f(fi,Mm),fi.prototype.ra=function(){W(this.g,"a")},fi.prototype.qa=function(l){W(this.g,new Lm(l))},fi.prototype.pa=function(l){W(this.g,new Vm)},fi.prototype.oa=function(){W(this.g,"b")},wc.prototype.createWebChannel=wc.prototype.g,an.prototype.send=an.prototype.o,an.prototype.open=an.prototype.m,an.prototype.close=an.prototype.close,rI=function(){return new wc},sI=function(){return Er()},nI=nt,qf={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},fc.NO_ERROR=0,fc.TIMEOUT=8,fc.HTTP_ERROR=6,Gc=fc,Zg.COMPLETE="complete",tI=Zg,Jt.EventType=ft,ft.OPEN="a",ft.CLOSE="b",ft.ERROR="c",ft.MESSAGE="d",K.prototype.listen=K.prototype.J,Zo=Jt,et.prototype.listenOnce=et.prototype.K,et.prototype.getLastError=et.prototype.Ha,et.prototype.getLastErrorCode=et.prototype.ya,et.prototype.getStatus=et.prototype.ca,et.prototype.getResponseJson=et.prototype.La,et.prototype.getResponseText=et.prototype.la,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Fa,eI=et}).apply(typeof Nc<"u"?Nc:typeof self<"u"?self:typeof window<"u"?window:{});const W_="@firebase/firestore",z_="4.9.2";/**
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
 */class Vt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Vt.UNAUTHENTICATED=new Vt(null),Vt.GOOGLE_CREDENTIALS=new Vt("google-credentials-uid"),Vt.FIRST_PARTY=new Vt("first-party-uid"),Vt.MOCK_USER=new Vt("mock-user");/**
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
 */let ho="12.3.0";/**
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
 */const Qr=new Xa("@firebase/firestore");function yi(){return Qr.logLevel}function te(t,...e){if(Qr.logLevel<=ve.DEBUG){const n=e.map(wp);Qr.debug(`Firestore (${ho}): ${t}`,...n)}}function Cs(t,...e){if(Qr.logLevel<=ve.ERROR){const n=e.map(wp);Qr.error(`Firestore (${ho}): ${t}`,...n)}}function zi(t,...e){if(Qr.logLevel<=ve.WARN){const n=e.map(wp);Qr.warn(`Firestore (${ho}): ${t}`,...n)}}function wp(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
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
 */function ge(t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,iI(t,s,n)}function iI(t,e,n){let s=`FIRESTORE (${ho}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw Cs(s),new Error(s)}function Ze(t,e,n,s){let r="Unexpected state";typeof n=="string"?r=n:s=n,t||iI(e,r,s)}function Se(t,e){return t}/**
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
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends ss{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class or{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
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
 */class oI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class SN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Vt.UNAUTHENTICATED)))}shutdown(){}}class CN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class AN{constructor(e){this.t=e,this.currentUser=Vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ze(this.o===void 0,42304);let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new or;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new or,e.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await r(this.currentUser)}))},a=c=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>a(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new or)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ze(typeof s.accessToken=="string",31837,{l:s}),new oI(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ze(e===null||typeof e=="string",2055,{h:e}),new Vt(e)}}class RN{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=Vt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class PN{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new RN(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(Vt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class K_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kN{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,_n(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ze(this.o===void 0,3512);const s=i=>{i.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>s(i)))};const r=i=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>r(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new K_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Ze(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new K_(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Ep{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=NN(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%62))}return s}}function we(t,e){return t<e?-1:t>e?1:0}function Wf(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const r=t.charAt(s),i=e.charAt(s);if(r!==i)return Lh(r)===Lh(i)?we(r,i):Lh(r)?1:-1}return we(t.length,e.length)}const ON=55296,xN=57343;function Lh(t){const e=t.charCodeAt(0);return e>=ON&&e<=xN}function Ki(t,e,n){return t.length===e.length&&t.every(((s,r)=>n(s,e[r])))}/**
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
 */const G_="__name__";class qn{constructor(e,n,s){n===void 0?n=0:n>e.length&&ge(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&ge(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return qn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof qn?e.forEach((s=>{n.push(s)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=qn.compareSegments(e.get(r),n.get(r));if(i!==0)return i}return we(e.length,n.length)}static compareSegments(e,n){const s=qn.isNumericId(e),r=qn.isNumericId(n);return s&&!r?-1:!s&&r?1:s&&r?qn.extractNumericId(e).compare(qn.extractNumericId(n)):Wf(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ir.fromString(e.substring(4,e.length-2))}}class qe extends qn{construct(e,n,s){return new qe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new Z(q.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((r=>r.length>0)))}return new qe(n)}static emptyPath(){return new qe([])}}const DN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ht extends qn{construct(e,n,s){return new Ht(e,n,s)}static isValidIdentifier(e){return DN.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ht.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===G_}static keyField(){return new Ht([G_])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new Z(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new Z(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Z(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new Z(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ht(n)}static emptyPath(){return new Ht([])}}/**
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
 */class oe{constructor(e){this.path=e}static fromPath(e){return new oe(qe.fromString(e))}static fromName(e){return new oe(qe.fromString(e).popFirst(5))}static empty(){return new oe(qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return qe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oe(new qe(e.slice()))}}/**
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
 */function aI(t,e,n){if(!n)throw new Z(q.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function MN(t,e,n,s){if(e===!0&&s===!0)throw new Z(q.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Q_(t){if(!oe.isDocumentKey(t))throw new Z(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Y_(t){if(oe.isDocumentKey(t))throw new Z(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function cI(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Su(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ge(12329,{type:typeof t})}function ar(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Z(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Su(t);throw new Z(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ja(t,e){if(!cI(t))throw new Z(q.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in t)){n=`JSON missing required field: '${s}'`;break}const o=t[s];if(r&&typeof o!==r){n=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${s}' field to equal '${i.value}'`;break}}if(n)throw new Z(q.INVALID_ARGUMENT,n);return!0}/**
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
 */const X_=-62135596800,J_=1e6;class We{static now(){return We.fromMillis(Date.now())}static fromDate(e){return We.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*J_);return new We(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Z(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Z(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<X_)throw new Z(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/J_}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:We._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ja(e,We._jsonSchema))return new We(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-X_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}We._jsonSchemaVersion="firestore/timestamp/1.0",We._jsonSchema={type:lt("string",We._jsonSchemaVersion),seconds:lt("number"),nanoseconds:lt("number")};/**
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
 */class de{static fromTimestamp(e){return new de(e)}static min(){return new de(new We(0,0))}static max(){return new de(new We(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Oa=-1;function LN(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=de.fromTimestamp(s===1e9?new We(n+1,0):new We(n,s));return new fr(r,oe.empty(),e)}function VN(t){return new fr(t.readTime,t.key,Oa)}class fr{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new fr(de.min(),oe.empty(),Oa)}static max(){return new fr(de.max(),oe.empty(),Oa)}}function FN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=oe.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $N{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Cu(t){if(t.code!==q.FAILED_PRECONDITION||t.message!==UN)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ge(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j(((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):j.reject(n)}static resolve(e){return new j(((n,s)=>{n(e)}))}static reject(e){return new j(((n,s)=>{s(e)}))}static waitFor(e){return new j(((n,s)=>{let r=0,i=0,o=!1;e.forEach((a=>{++r,a.next((()=>{++i,o&&i===r&&n()}),(c=>s(c)))})),o=!0,i===r&&n()}))}static or(e){let n=j.resolve(!1);for(const s of e)n=n.next((r=>r?j.resolve(r):s()));return n}static forEach(e,n){const s=[];return e.forEach(((r,i)=>{s.push(n.call(this,r,i))})),this.waitFor(s)}static mapArray(e,n){return new j(((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next((h=>{o[u]=h,++a,a===i&&s(o)}),(h=>r(h)))}}))}static doWhile(e,n){return new j(((s,r)=>{const i=()=>{e()===!0?n().next((()=>{i()}),r):s()};i()}))}}function jN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function fo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Au{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Au.ce=-1;/**
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
 */const BN=-1;function Ru(t){return t==null}function Nl(t){return t===0&&1/t==-1/0}function HN(t){return typeof t=="number"&&Number.isInteger(t)&&!Nl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const lI="";function qN(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Z_(e)),e=WN(t.get(n),e);return Z_(e)}function WN(t,e){let n=e;const s=t.length;for(let r=0;r<s;r++){const i=t.charAt(r);switch(i){case"\0":n+="";break;case lI:n+="";break;default:n+=i}}return n}function Z_(t){return t+lI+""}/**
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
 */function ey(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function po(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function uI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */let Tt=class zf{constructor(e,n){this.comparator=e,this.root=n||cr.EMPTY}insert(e,n){return new zf(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,cr.BLACK,null,null))}remove(e){return new zf(this.comparator,this.root.remove(e,this.comparator).copy(null,null,cr.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,s)=>(e(n,s),!1)))}toString(){const e=[];return this.inorderTraversal(((n,s)=>(e.push(`${n}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Oc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Oc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Oc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Oc(this.root,e,this.comparator,!0)}},Oc=class{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},cr=class us{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??us.RED,this.left=r??us.EMPTY,this.right=i??us.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new us(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return us.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return us.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,us.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,us.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ge(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ge(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ge(27949);return e+(this.isRed()?0:1)}};cr.EMPTY=null,cr.RED=!0,cr.BLACK=!1;cr.EMPTY=new class{constructor(){this.size=0}get key(){throw ge(57766)}get value(){throw ge(16141)}get color(){throw ge(16727)}get left(){throw ge(29726)}get right(){throw ge(36894)}copy(e,n,s,r,i){return this}insert(e,n,s){return new cr(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class gt{constructor(e){this.comparator=e,this.data=new Tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,s)=>(e(n),!1)))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ty(this.data.getIterator())}getIteratorFrom(e){return new ty(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((s=>{n=n.add(s)})),n}isEqual(e){if(!(e instanceof gt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new gt(this.comparator);return n.data=e,n}}class ty{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e){this.fields=e,e.sort(Ht.comparator)}static empty(){return new Xs([])}unionWith(e){let n=new gt(Ht.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Xs(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ki(this.fields,e.fields,((n,s)=>n.isEqual(s)))}}/**
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
 */class hI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new hI("Invalid base64 string: "+i):i}})(e);return new Nt(n)}static fromUint8Array(e){const n=(function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i})(e);return new Nt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Nt.EMPTY_BYTE_STRING=new Nt("");const zN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function dr(t){if(Ze(!!t,39018),typeof t=="string"){let e=0;const n=zN.exec(t);if(Ze(!!n,46558,{timestamp:t}),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:st(t.seconds),nanos:st(t.nanos)}}function st(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function pr(t){return typeof t=="string"?Nt.fromBase64String(t):Nt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI="server_timestamp",dI="__type__",pI="__previous_value__",gI="__local_write_time__";function Tp(t){return(t?.mapValue?.fields||{})[dI]?.stringValue===fI}function Pu(t){const e=t.mapValue.fields[pI];return Tp(e)?Pu(e):e}function xa(t){const e=dr(t.mapValue.fields[gI].timestampValue);return new We(e.seconds,e.nanos)}/**
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
 */class KN{constructor(e,n,s,r,i,o,a,c,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=h}}const Ol="(default)";class Da{constructor(e,n){this.projectId=e,this.database=n||Ol}static empty(){return new Da("","")}get isDefaultDatabase(){return this.database===Ol}isEqual(e){return e instanceof Da&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI="__type__",GN="__max__",xc={mapValue:{}},_I="__vector__",xl="value";function gr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Tp(t)?4:YN(t)?9007199254740991:QN(t)?10:11:ge(28295,{value:t})}function ts(t,e){if(t===e)return!0;const n=gr(t);if(n!==gr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return xa(t).isEqual(xa(e));case 3:return(function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=dr(r.timestampValue),a=dr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(r,i){return pr(r.bytesValue).isEqual(pr(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(r,i){return st(r.geoPointValue.latitude)===st(i.geoPointValue.latitude)&&st(r.geoPointValue.longitude)===st(i.geoPointValue.longitude)})(t,e);case 2:return(function(r,i){if("integerValue"in r&&"integerValue"in i)return st(r.integerValue)===st(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=st(r.doubleValue),a=st(i.doubleValue);return o===a?Nl(o)===Nl(a):isNaN(o)&&isNaN(a)}return!1})(t,e);case 9:return Ki(t.arrayValue.values||[],e.arrayValue.values||[],ts);case 10:case 11:return(function(r,i){const o=r.mapValue.fields||{},a=i.mapValue.fields||{};if(ey(o)!==ey(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!ts(o[c],a[c])))return!1;return!0})(t,e);default:return ge(52216,{left:t})}}function Ma(t,e){return(t.values||[]).find((n=>ts(n,e)))!==void 0}function Gi(t,e){if(t===e)return 0;const n=gr(t),s=gr(e);if(n!==s)return we(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const a=st(i.integerValue||i.doubleValue),c=st(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1})(t,e);case 3:return ny(t.timestampValue,e.timestampValue);case 4:return ny(xa(t),xa(e));case 5:return Wf(t.stringValue,e.stringValue);case 6:return(function(i,o){const a=pr(i),c=pr(o);return a.compareTo(c)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const a=i.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const h=we(a[u],c[u]);if(h!==0)return h}return we(a.length,c.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const a=we(st(i.latitude),st(o.latitude));return a!==0?a:we(st(i.longitude),st(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return sy(t.arrayValue,e.arrayValue);case 10:return(function(i,o){const a=i.fields||{},c=o.fields||{},u=a[xl]?.arrayValue,h=c[xl]?.arrayValue,f=we(u?.values?.length||0,h?.values?.length||0);return f!==0?f:sy(u,h)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===xc.mapValue&&o===xc.mapValue)return 0;if(i===xc.mapValue)return 1;if(o===xc.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let f=0;f<c.length&&f<h.length;++f){const d=Wf(c[f],h[f]);if(d!==0)return d;const g=Gi(a[c[f]],u[h[f]]);if(g!==0)return g}return we(c.length,h.length)})(t.mapValue,e.mapValue);default:throw ge(23264,{he:n})}}function ny(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=dr(t),s=dr(e),r=we(n.seconds,s.seconds);return r!==0?r:we(n.nanos,s.nanos)}function sy(t,e){const n=t.values||[],s=e.values||[];for(let r=0;r<n.length&&r<s.length;++r){const i=Gi(n[r],s[r]);if(i)return i}return we(n.length,s.length)}function Qi(t){return Kf(t)}function Kf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const s=dr(n);return`time(${s.seconds},${s.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return pr(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return oe.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let s="[",r=!0;for(const i of n.values||[])r?r=!1:s+=",",s+=Kf(i);return s+"]"})(t.arrayValue):"mapValue"in t?(function(n){const s=Object.keys(n.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${Kf(n.fields[o])}`;return r+"}"})(t.mapValue):ge(61005,{value:t})}function Qc(t){switch(gr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Pu(t);return e?16+Qc(e):16;case 5:return 2*t.stringValue.length;case 6:return pr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((r,i)=>r+Qc(i)),0)})(t.arrayValue);case 10:case 11:return(function(s){let r=0;return po(s.fields,((i,o)=>{r+=i.length+Qc(o)})),r})(t.mapValue);default:throw ge(13486,{value:t})}}function ry(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Gf(t){return!!t&&"integerValue"in t}function Ip(t){return!!t&&"arrayValue"in t}function iy(t){return!!t&&"nullValue"in t}function oy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Vh(t){return!!t&&"mapValue"in t}function QN(t){return(t?.mapValue?.fields||{})[mI]?.stringValue===_I}function fa(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return po(t.mapValue.fields,((n,s)=>e.mapValue.fields[n]=fa(s))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=fa(t.arrayValue.values[n]);return e}return{...t}}function YN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===GN}/**
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
 */class Wn{constructor(e){this.value=e}static empty(){return new Wn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Vh(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=fa(n)}setAll(e){let n=Ht.emptyPath(),s={},r=[];e.forEach(((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=fa(o):r.push(a.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Vh(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ts(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Vh(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){po(n,((r,i)=>e[r]=i));for(const r of s)delete e[r]}clone(){return new Wn(fa(this.value))}}/**
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
 */class $t{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new $t(e,0,de.min(),de.min(),de.min(),Wn.empty(),0)}static newFoundDocument(e,n,s,r){return new $t(e,1,n,de.min(),s,r,0)}static newNoDocument(e,n){return new $t(e,2,n,de.min(),de.min(),Wn.empty(),0)}static newUnknownDocument(e,n){return new $t(e,3,n,de.min(),de.min(),Wn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Wn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Wn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Dl{constructor(e,n){this.position=e,this.inclusive=n}}function ay(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=oe.comparator(oe.fromName(o.referenceValue),n.key):s=Gi(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function cy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ts(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class La{constructor(e,n="asc"){this.field=e,this.dir=n}}function XN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class yI{}class ct extends yI{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new ZN(e,n,s):n==="array-contains"?new nO(e,s):n==="in"?new sO(e,s):n==="not-in"?new rO(e,s):n==="array-contains-any"?new iO(e,s):new ct(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new eO(e,s):new tO(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Gi(n,this.value)):n!==null&&gr(this.value)===gr(n)&&this.matchesComparison(Gi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ge(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dn extends yI{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Dn(e,n)}matches(e){return vI(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function vI(t){return t.op==="and"}function wI(t){return JN(t)&&vI(t)}function JN(t){for(const e of t.filters)if(e instanceof Dn)return!1;return!0}function Qf(t){if(t instanceof ct)return t.field.canonicalString()+t.op.toString()+Qi(t.value);if(wI(t))return t.filters.map((e=>Qf(e))).join(",");{const e=t.filters.map((n=>Qf(n))).join(",");return`${t.op}(${e})`}}function EI(t,e){return t instanceof ct?(function(s,r){return r instanceof ct&&s.op===r.op&&s.field.isEqual(r.field)&&ts(s.value,r.value)})(t,e):t instanceof Dn?(function(s,r){return r instanceof Dn&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce(((i,o,a)=>i&&EI(o,r.filters[a])),!0):!1})(t,e):void ge(19439)}function TI(t){return t instanceof ct?(function(n){return`${n.field.canonicalString()} ${n.op} ${Qi(n.value)}`})(t):t instanceof Dn?(function(n){return n.op.toString()+" {"+n.getFilters().map(TI).join(" ,")+"}"})(t):"Filter"}class ZN extends ct{constructor(e,n,s){super(e,n,s),this.key=oe.fromName(s.referenceValue)}matches(e){const n=oe.comparator(e.key,this.key);return this.matchesComparison(n)}}class eO extends ct{constructor(e,n){super(e,"in",n),this.keys=II("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class tO extends ct{constructor(e,n){super(e,"not-in",n),this.keys=II("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function II(t,e){return(e.arrayValue?.values||[]).map((n=>oe.fromName(n.referenceValue)))}class nO extends ct{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ip(n)&&Ma(n.arrayValue,this.value)}}class sO extends ct{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ma(this.value.arrayValue,n)}}class rO extends ct{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ma(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ma(this.value.arrayValue,n)}}class iO extends ct{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ip(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>Ma(this.value.arrayValue,s)))}}/**
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
 */class oO{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.Te=null}}function ly(t,e=null,n=[],s=[],r=null,i=null,o=null){return new oO(t,e,n,s,r,i,o)}function bp(t){const e=Se(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((s=>Qf(s))).join(","),n+="|ob:",n+=e.orderBy.map((s=>(function(i){return i.field.canonicalString()+i.dir})(s))).join(","),Ru(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>Qi(s))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>Qi(s))).join(",")),e.Te=n}return e.Te}function Sp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!XN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!EI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!cy(t.startAt,e.startAt)&&cy(t.endAt,e.endAt)}function Yf(t){return oe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class go{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function aO(t,e,n,s,r,i,o,a){return new go(t,e,n,s,r,i,o,a)}function ku(t){return new go(t)}function uy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function bI(t){return t.collectionGroup!==null}function da(t){const e=Se(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new gt(Ht.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((u=>{u.isInequality()&&(a=a.add(u.field))}))})),a})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new La(i,s))})),n.has(Ht.keyField().canonicalString())||e.Ie.push(new La(Ht.keyField(),s))}return e.Ie}function Yn(t){const e=Se(t);return e.Ee||(e.Ee=cO(e,da(t))),e.Ee}function cO(t,e){if(t.limitType==="F")return ly(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((r=>{const i=r.dir==="desc"?"asc":"desc";return new La(r.field,i)}));const n=t.endAt?new Dl(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Dl(t.startAt.position,t.startAt.inclusive):null;return ly(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function Xf(t,e){const n=t.filters.concat([e]);return new go(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Jf(t,e,n){return new go(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Nu(t,e){return Sp(Yn(t),Yn(e))&&t.limitType===e.limitType}function SI(t){return`${bp(Yn(t))}|lt:${t.limitType}`}function vi(t){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((r=>TI(r))).join(", ")}]`),Ru(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((r=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(r))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((r=>Qi(r))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((r=>Qi(r))).join(",")),`Target(${s})`})(Yn(t))}; limitType=${t.limitType})`}function Ou(t,e){return e.isFoundDocument()&&(function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):oe.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)})(t,e)&&(function(s,r){for(const i of da(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0})(t,e)&&(function(s,r){return!(s.startAt&&!(function(o,a,c){const u=ay(o,a,c);return o.inclusive?u<=0:u<0})(s.startAt,da(s),r)||s.endAt&&!(function(o,a,c){const u=ay(o,a,c);return o.inclusive?u>=0:u>0})(s.endAt,da(s),r))})(t,e)}function lO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function CI(t){return(e,n)=>{let s=!1;for(const r of da(t)){const i=uO(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function uO(t,e,n){const s=t.field.isKeyField()?oe.comparator(e.key,n.key):(function(i,o,a){const c=o.data.field(i),u=a.data.field(i);return c!==null&&u!==null?Gi(c,u):ge(42886)})(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ge(19790,{direction:t.dir})}}/**
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
 */class ii{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){po(this.inner,((n,s)=>{for(const[r,i]of s)e(r,i)}))}isEmpty(){return uI(this.inner)}size(){return this.innerSize}}/**
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
 */const hO=new Tt(oe.comparator);function mr(){return hO}const AI=new Tt(oe.comparator);function ea(...t){let e=AI;for(const n of t)e=e.insert(n.key,n);return e}function fO(t){let e=AI;return t.forEach(((n,s)=>e=e.insert(n,s.overlayedDocument))),e}function Dr(){return pa()}function RI(){return pa()}function pa(){return new ii((t=>t.toString()),((t,e)=>t.isEqual(e)))}const dO=new gt(oe.comparator);function Ae(...t){let e=dO;for(const n of t)e=e.add(n);return e}const pO=new gt(we);function gO(){return pO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Nl(e)?"-0":e}}function PI(t){return{integerValue:""+t}}function mO(t,e){return HN(e)?PI(e):Cp(t,e)}/**
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
 */class xu{constructor(){this._=void 0}}function _O(t,e,n){return t instanceof Zf?(function(r,i){const o={fields:{[dI]:{stringValue:fI},[gI]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Tp(i)&&(i=Pu(i)),i&&(o.fields[pI]=i),{mapValue:o}})(n,e):t instanceof Ml?kI(t,e):t instanceof Ll?NI(t,e):(function(r,i){const o=vO(r,i),a=hy(o)+hy(r.Ae);return Gf(o)&&Gf(r.Ae)?PI(a):Cp(r.serializer,a)})(t,e)}function yO(t,e,n){return t instanceof Ml?kI(t,e):t instanceof Ll?NI(t,e):n}function vO(t,e){return t instanceof ed?(function(s){return Gf(s)||(function(i){return!!i&&"doubleValue"in i})(s)})(e)?e:{integerValue:0}:null}class Zf extends xu{}class Ml extends xu{constructor(e){super(),this.elements=e}}function kI(t,e){const n=OI(e);for(const s of t.elements)n.some((r=>ts(r,s)))||n.push(s);return{arrayValue:{values:n}}}class Ll extends xu{constructor(e){super(),this.elements=e}}function NI(t,e){let n=OI(e);for(const s of t.elements)n=n.filter((r=>!ts(r,s)));return{arrayValue:{values:n}}}class ed extends xu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function hy(t){return st(t.integerValue||t.doubleValue)}function OI(t){return Ip(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function wO(t,e){return t.field.isEqual(e.field)&&(function(s,r){return s instanceof Ml&&r instanceof Ml||s instanceof Ll&&r instanceof Ll?Ki(s.elements,r.elements,ts):s instanceof ed&&r instanceof ed?ts(s.Ae,r.Ae):s instanceof Zf&&r instanceof Zf})(t.transform,e.transform)}class jr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new jr}static exists(e){return new jr(void 0,e)}static updateTime(e){return new jr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Yc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ap{}function xI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new TO(t.key,jr.none()):new Rp(t.key,t.data,jr.none());{const n=t.data,s=Wn.empty();let r=new gt(Ht.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Du(t.key,s,new Xs(r.toArray()),jr.none())}}function EO(t,e,n){t instanceof Rp?(function(r,i,o){const a=r.value.clone(),c=dy(r.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()})(t,e,n):t instanceof Du?(function(r,i,o){if(!Yc(r.precondition,i))return void i.convertToUnknownDocument(o.version);const a=dy(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(DI(r)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):(function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function ga(t,e,n,s){return t instanceof Rp?(function(i,o,a,c){if(!Yc(i.precondition,o))return a;const u=i.value.clone(),h=py(i.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,s):t instanceof Du?(function(i,o,a,c){if(!Yc(i.precondition,o))return a;const u=py(i.fieldTransforms,c,o),h=o.data;return h.setAll(DI(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((f=>f.field)))})(t,e,n,s):(function(i,o,a){return Yc(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a})(t,e,n)}function fy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Ki(s,r,((i,o)=>wO(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Rp extends Ap{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Du extends Ap{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function DI(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function dy(t,e,n){const s=new Map;Ze(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,yO(o,a,n[r]))}return s}function py(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,_O(i,o,e))}return s}class TO extends Ap{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class IO{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&EO(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=ga(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=ga(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=RI();return this.mutations.forEach((r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=xI(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(de.min())})),s}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Ae())}isEqual(e){return this.batchId===e.batchId&&Ki(this.mutations,e.mutations,((n,s)=>fy(n,s)))&&Ki(this.baseMutations,e.baseMutations,((n,s)=>fy(n,s)))}}/**
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
 */class bO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class SO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ot,Te;function MI(t){if(t===void 0)return Cs("GRPC error has no .code"),q.UNKNOWN;switch(t){case ot.OK:return q.OK;case ot.CANCELLED:return q.CANCELLED;case ot.UNKNOWN:return q.UNKNOWN;case ot.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case ot.INTERNAL:return q.INTERNAL;case ot.UNAVAILABLE:return q.UNAVAILABLE;case ot.UNAUTHENTICATED:return q.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case ot.NOT_FOUND:return q.NOT_FOUND;case ot.ALREADY_EXISTS:return q.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return q.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case ot.ABORTED:return q.ABORTED;case ot.OUT_OF_RANGE:return q.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return q.UNIMPLEMENTED;case ot.DATA_LOSS:return q.DATA_LOSS;default:return ge(39323,{code:t})}}(Te=ot||(ot={}))[Te.OK=0]="OK",Te[Te.CANCELLED=1]="CANCELLED",Te[Te.UNKNOWN=2]="UNKNOWN",Te[Te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Te[Te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Te[Te.NOT_FOUND=5]="NOT_FOUND",Te[Te.ALREADY_EXISTS=6]="ALREADY_EXISTS",Te[Te.PERMISSION_DENIED=7]="PERMISSION_DENIED",Te[Te.UNAUTHENTICATED=16]="UNAUTHENTICATED",Te[Te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Te[Te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Te[Te.ABORTED=10]="ABORTED",Te[Te.OUT_OF_RANGE=11]="OUT_OF_RANGE",Te[Te.UNIMPLEMENTED=12]="UNIMPLEMENTED",Te[Te.INTERNAL=13]="INTERNAL",Te[Te.UNAVAILABLE=14]="UNAVAILABLE",Te[Te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function CO(){return new TextEncoder}/**
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
 */const AO=new ir([4294967295,4294967295],0);function gy(t){const e=CO().encode(t),n=new ZT;return n.update(e),new Uint8Array(n.digest())}function my(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ir([n,s],0),new ir([r,i],0)]}class Pp{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new ta(`Invalid padding: ${n}`);if(s<0)throw new ta(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new ta(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new ta(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=ir.fromNumber(this.ge)}ye(e,n,s){let r=e.add(n.multiply(ir.fromNumber(s)));return r.compare(AO)===1&&(r=new ir([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=gy(e),[s,r]=my(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(s,r,i);if(!this.we(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Pp(i,r,n);return s.forEach((a=>o.insert(a))),o}insert(e){if(this.ge===0)return;const n=gy(e),[s,r]=my(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(s,r,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class ta extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Mu{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Za.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Mu(de.min(),r,new Tt(we),mr(),Ae())}}class Za{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Za(s,n,Ae(),Ae(),Ae())}}/**
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
 */class Xc{constructor(e,n,s,r){this.be=e,this.removedTargetIds=n,this.key=s,this.De=r}}class LI{constructor(e,n){this.targetId=e,this.Ce=n}}class VI{constructor(e,n,s=Nt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class _y{constructor(){this.ve=0,this.Fe=yy(),this.Me=Nt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ae(),n=Ae(),s=Ae();return this.Fe.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:ge(38017,{changeType:i})}})),new Za(this.Me,this.xe,e,n,s)}qe(){this.Oe=!1,this.Fe=yy()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ze(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class RO{constructor(e){this.Ge=e,this.ze=new Map,this.je=mr(),this.Je=Dc(),this.He=Dc(),this.Ye=new Tt(we)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const s=this.nt(n);switch(e.state){case 0:this.rt(n)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(e.resumeToken));break;default:ge(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((s,r)=>{this.rt(r)&&n(r)}))}st(e){const n=e.targetId,s=e.Ce.count,r=this.ot(n);if(r){const i=r.target;if(Yf(i))if(s===0){const o=new oe(i.path);this.et(n,o,$t.newNoDocument(o,de.min()))}else Ze(s===1,20013,{expectedCount:s});else{const o=this._t(n);if(o!==s){const a=this.ut(e),c=a?this.ct(a,e,o):1;if(c!==0){this.it(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=n;let o,a;try{o=pr(s).toUint8Array()}catch(c){if(c instanceof hI)return zi("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Pp(o,r,i)}catch(c){return zi(c instanceof ta?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.ge===0?null:a}ct(e,n,s){return n.Ce.count===s-this.Pt(e,n.targetId)?0:2}Pt(e,n){const s=this.Ge.getRemoteKeysForTarget(n);let r=0;return s.forEach((i=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.et(n,i,null),r++)})),r}Tt(e){const n=new Map;this.ze.forEach(((i,o)=>{const a=this.ot(o);if(a){if(i.current&&Yf(a.target)){const c=new oe(a.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,$t.newNoDocument(c,e))}i.Be&&(n.set(o,i.ke()),i.qe())}}));let s=Ae();this.He.forEach(((i,o)=>{let a=!0;o.forEachWhile((c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)})),a&&(s=s.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const r=new Mu(e,n,this.Ye,this.je,s);return this.je=mr(),this.Je=Dc(),this.He=Dc(),this.Ye=new Tt(we),r}Xe(e,n){if(!this.rt(e))return;const s=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,s){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,n)?r.Qe(n,1):r.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),s&&(this.je=this.je.insert(n,s))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new _y,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new gt(we),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new gt(we),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new _y),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Dc(){return new Tt(oe.comparator)}function yy(){return new Tt(oe.comparator)}const PO={asc:"ASCENDING",desc:"DESCENDING"},kO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},NO={and:"AND",or:"OR"};class OO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function td(t,e){return t.useProto3Json||Ru(e)?e:{value:e}}function nd(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function FI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Mi(t){return Ze(!!t,49232),de.fromTimestamp((function(n){const s=dr(n);return new We(s.seconds,s.nanos)})(t))}function UI(t,e){return sd(t,e).canonicalString()}function sd(t,e){const n=(function(r){return new qe(["projects",r.projectId,"databases",r.database])})(t).child("documents");return e===void 0?n:n.child(e)}function $I(t){const e=qe.fromString(t);return Ze(WI(e),10190,{key:e.toString()}),e}function Fh(t,e){const n=$I(e);if(n.get(1)!==t.databaseId.projectId)throw new Z(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Z(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new oe(BI(n))}function jI(t,e){return UI(t.databaseId,e)}function xO(t){const e=$I(t);return e.length===4?qe.emptyPath():BI(e)}function vy(t){return new qe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function BI(t){return Ze(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function DO(t,e){let n;if("targetChange"in e){e.targetChange;const s=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ge(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=(function(u,h){return u.useProto3Json?(Ze(h===void 0||typeof h=="string",58123),Nt.fromBase64String(h||"")):(Ze(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),Nt.fromUint8Array(h||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&(function(u){const h=u.code===void 0?q.UNKNOWN:MI(u.code);return new Z(h,u.message||"")})(o);n=new VI(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Fh(t,s.document.name),i=Mi(s.document.updateTime),o=s.document.createTime?Mi(s.document.createTime):de.min(),a=new Wn({mapValue:{fields:s.document.fields}}),c=$t.newFoundDocument(r,i,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];n=new Xc(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Fh(t,s.document),i=s.readTime?Mi(s.readTime):de.min(),o=$t.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Xc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Fh(t,s.document),i=s.removedTargetIds||[];n=new Xc([],i,r,null)}else{if(!("filter"in e))return ge(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new SO(r,i),a=s.targetId;n=new LI(a,o)}}return n}function MO(t,e){return{documents:[jI(t,e.path)]}}function LO(t,e){const n={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=jI(t,r);const i=(function(u){if(u.length!==0)return qI(Dn.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((h=>(function(d){return{field:wi(d.field),direction:UO(d.dir)}})(h)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=td(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:n,parent:r}}function VO(t){let e=xO(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Ze(s===1,65062);const h=n.from[0];h.allDescendants?r=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=(function(f){const d=HI(f);return d instanceof Dn&&wI(d)?d.getFilters():[d]})(n.where));let o=[];n.orderBy&&(o=(function(f){return f.map((d=>(function(_){return new La(Ei(_.field),(function(I){switch(I){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(_.direction))})(d)))})(n.orderBy));let a=null;n.limit&&(a=(function(f){let d;return d=typeof f=="object"?f.value:f,Ru(d)?null:d})(n.limit));let c=null;n.startAt&&(c=(function(f){const d=!!f.before,g=f.values||[];return new Dl(g,d)})(n.startAt));let u=null;return n.endAt&&(u=(function(f){const d=!f.before,g=f.values||[];return new Dl(g,d)})(n.endAt)),aO(e,r,o,i,a,"F",c,u)}function FO(t,e){const n=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ge(28987,{purpose:r})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function HI(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Ei(n.unaryFilter.field);return ct.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Ei(n.unaryFilter.field);return ct.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ei(n.unaryFilter.field);return ct.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ei(n.unaryFilter.field);return ct.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ge(61313);default:return ge(60726)}})(t):t.fieldFilter!==void 0?(function(n){return ct.create(Ei(n.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ge(58110);default:return ge(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return Dn.create(n.compositeFilter.filters.map((s=>HI(s))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return ge(1026)}})(n.compositeFilter.op))})(t):ge(30097,{filter:t})}function UO(t){return PO[t]}function $O(t){return kO[t]}function jO(t){return NO[t]}function wi(t){return{fieldPath:t.canonicalString()}}function Ei(t){return Ht.fromServerFormat(t.fieldPath)}function qI(t){return t instanceof ct?(function(n){if(n.op==="=="){if(oy(n.value))return{unaryFilter:{field:wi(n.field),op:"IS_NAN"}};if(iy(n.value))return{unaryFilter:{field:wi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(oy(n.value))return{unaryFilter:{field:wi(n.field),op:"IS_NOT_NAN"}};if(iy(n.value))return{unaryFilter:{field:wi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wi(n.field),op:$O(n.op),value:n.value}}})(t):t instanceof Dn?(function(n){const s=n.getFilters().map((r=>qI(r)));return s.length===1?s[0]:{compositeFilter:{op:jO(n.op),filters:s}}})(t):ge(54877,{filter:t})}function WI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Js{constructor(e,n,s,r,i=de.min(),o=de.min(),a=Nt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Js(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Js(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Js(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Js(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class BO{constructor(e){this.yt=e}}function HO(t){const e=VO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Jf(e,e.limit,"L"):e}/**
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
 */class qO{constructor(){this.Cn=new WO}addToCollectionParentIndex(e,n){return this.Cn.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(fr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(fr.min())}updateCollectionGroup(e,n,s){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class WO{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new gt(qe.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new gt(qe.comparator)).toArray()}}/**
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
 */const wy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},zI=41943040;class en{static withCacheSize(e){return new en(e,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */en.DEFAULT_COLLECTION_PERCENTILE=10,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,en.DEFAULT=new en(zI,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),en.DISABLED=new en(-1,0,0);/**
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
 */class Yi{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Yi(0)}static cr(){return new Yi(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey="LruGarbageCollector",zO=1048576;function Ty([t,e],[n,s]){const r=we(t,n);return r===0?we(e,s):r}class KO{constructor(e){this.Ir=e,this.buffer=new gt(Ty),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();Ty(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class GO{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){te(Ey,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){fo(n)?te(Ey,"Ignoring IndexedDB error during garbage collection: ",n):await Cu(n)}await this.Vr(3e5)}))}}class QO{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((s=>Math.floor(n/100*s)))}nthSequenceNumber(e,n){if(n===0)return j.resolve(Au.ce);const s=new KO(n);return this.mr.forEachTarget(e,(r=>s.Ar(r.sequenceNumber))).next((()=>this.mr.pr(e,(r=>s.Ar(r))))).next((()=>s.maxValue))}removeTargets(e,n,s){return this.mr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(wy)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),wy):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let s,r,i,o,a,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((f=>(f>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),r=this.params.maximumSequenceNumbersToCollect):r=f,o=Date.now(),this.nthSequenceNumber(e,r)))).next((f=>(s=f,a=Date.now(),this.removeTargets(e,s,n)))).next((f=>(i=f,c=Date.now(),this.removeOrphanedDocuments(e,s)))).next((f=>(u=Date.now(),yi()<=ve.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${r} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${f} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:f}))))}}function YO(t,e){return new QO(t,e)}/**
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
 */class XO{constructor(){this.changes=new ii((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,$t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?j.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class JO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class ZO{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next((r=>(s=r,this.remoteDocumentCache.getEntry(e,n)))).next((r=>(s!==null&&ga(s.mutation,r,Xs.empty(),We.now()),r)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.getLocalViewOfDocuments(e,s,Ae()).next((()=>s))))}getLocalViewOfDocuments(e,n,s=Ae()){const r=Dr();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,s).next((i=>{let o=ea();return i.forEach(((a,c)=>{o=o.insert(a,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const s=Dr();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,Ae())))}populateOverlays(e,n,s){const r=[];return s.forEach((i=>{n.has(i)||r.push(i)})),this.documentOverlayCache.getOverlays(e,r).next((i=>{i.forEach(((o,a)=>{n.set(o,a)}))}))}computeViews(e,n,s,r){let i=mr();const o=pa(),a=(function(){return pa()})();return n.forEach(((c,u)=>{const h=s.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof Du)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),ga(h.mutation,u,h.mutation.getFieldMask(),We.now())):o.set(u.key,Xs.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((u,h)=>o.set(u,h))),n.forEach(((u,h)=>a.set(u,new JO(h,o.get(u)??null)))),a)))}recalculateAndSaveOverlays(e,n){const s=pa();let r=new Tt(((o,a)=>o-a)),i=Ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const a of o)a.keys().forEach((c=>{const u=n.get(c);if(u===null)return;let h=s.get(c)||Xs.empty();h=a.applyToLocalView(u,h),s.set(c,h);const f=(r.get(a.batchId)||Ae()).add(c);r=r.insert(a.batchId,f)}))})).next((()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,f=RI();h.forEach((d=>{if(!i.has(d)){const g=xI(n.get(d),s.get(d));g!==null&&f.set(d,g),i=i.add(d)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return j.waitFor(o)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,n,s,r){return(function(o){return oe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):bI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,r):this.getDocumentsMatchingCollectionQuery(e,n,s,r)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next((i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):j.resolve(Dr());let a=Oa,c=i;return o.next((u=>j.forEach(u,((h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(h)?j.resolve():this.remoteDocumentCache.getEntry(e,h).next((d=>{c=c.insert(h,d)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,c,u,Ae()))).next((h=>({batchId:a,changes:fO(h)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new oe(n)).next((s=>{let r=ea();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r}))}getDocumentsMatchingCollectionGroupQuery(e,n,s,r){const i=n.collectionGroup;let o=ea();return this.indexManager.getCollectionParents(e,i).next((a=>j.forEach(a,(c=>{const u=(function(f,d){return new go(d,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)})(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,s,r).next((h=>{h.forEach(((f,d)=>{o=o.insert(f,d)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i,r)))).next((o=>{i.forEach(((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,$t.newInvalidDocument(h)))}));let a=ea();return o.forEach(((c,u)=>{const h=i.get(c);h!==void 0&&ga(h.mutation,u,Xs.empty(),We.now()),Ou(n,u)&&(a=a.insert(c,u))})),a}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return j.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(r){return{id:r.id,version:r.version,createTime:Mi(r.createTime)}})(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(r){return{name:r.name,query:HO(r.bundledQuery),readTime:Mi(r.readTime)}})(n)),j.resolve()}}/**
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
 */class tx{constructor(){this.overlays=new Tt(oe.comparator),this.qr=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Dr();return j.forEach(n,(r=>this.getOverlay(e,r).next((i=>{i!==null&&s.set(r,i)})))).next((()=>s))}saveOverlays(e,n,s){return s.forEach(((r,i)=>{this.St(e,n,i)})),j.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.qr.get(s);return r!==void 0&&(r.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(s)),j.resolve()}getOverlaysForCollection(e,n,s){const r=Dr(),i=n.length+1,o=new oe(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return j.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Tt(((u,h)=>u-h));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let h=i.get(u.largestBatchId);h===null&&(h=Dr(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Dr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((u,h)=>a.set(u,h))),!(a.size()>=r)););return j.resolve(a)}St(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.qr.get(r.largestBatchId).delete(s.key);this.qr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new bO(n,s));let i=this.qr.get(n);i===void 0&&(i=Ae(),this.qr.set(n,i)),this.qr.set(n,i.add(s.key))}}/**
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
 */class nx{constructor(){this.sessionToken=Nt.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
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
 */class kp{constructor(){this.Qr=new gt(yt.$r),this.Ur=new gt(yt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const s=new yt(e,n);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,n){e.forEach((s=>this.addReference(s,n)))}removeReference(e,n){this.Gr(new yt(e,n))}zr(e,n){e.forEach((s=>this.removeReference(s,n)))}jr(e){const n=new oe(new qe([])),s=new yt(n,e),r=new yt(n,e+1),i=[];return this.Ur.forEachInRange([s,r],(o=>{this.Gr(o),i.push(o.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new oe(new qe([])),s=new yt(n,e),r=new yt(n,e+1);let i=Ae();return this.Ur.forEachInRange([s,r],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new yt(e,0),s=this.Qr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class yt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return oe.comparator(e.key,n.key)||we(e.Yr,n.Yr)}static Kr(e,n){return we(e.Yr,n.Yr)||oe.comparator(e.key,n.key)}}/**
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
 */class sx{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new gt(yt.$r)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new IO(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.Zr=this.Zr.add(new yt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ei(s),i=r<0?0:r;return j.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?BN:this.tr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new yt(n,0),r=new yt(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([s,r],(o=>{const a=this.Xr(o.Yr);i.push(a)})),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new gt(we);return n.forEach((r=>{const i=new yt(r,0),o=new yt(r,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],(a=>{s=s.add(a.Yr)}))})),j.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;oe.isDocumentKey(i)||(i=i.child(""));const o=new yt(new oe(i),0);let a=new gt(we);return this.Zr.forEachWhile((c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.Yr)),!0)}),o),j.resolve(this.ti(a))}ti(e){const n=[];return e.forEach((s=>{const r=this.Xr(s);r!==null&&n.push(r)})),n}removeMutationBatch(e,n){Ze(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return j.forEach(n.mutations,(r=>{const i=new yt(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,n){const s=new yt(n,0),r=this.Zr.firstAfterOrEqual(s);return j.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class rx{constructor(e){this.ri=e,this.docs=(function(){return new Tt(oe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.ri(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return j.resolve(s?s.document.mutableCopy():$t.newInvalidDocument(n))}getEntries(e,n){let s=mr();return n.forEach((r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():$t.newInvalidDocument(r))})),j.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=mr();const o=n.path,a=new oe(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||FN(VN(h),s)<=0||(r.has(h.key)||Ou(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,n,s,r){ge(9500)}ii(e,n){return j.forEach(this.docs,(s=>n(s)))}newChangeBuffer(e){return new ix(this)}getSize(e){return j.resolve(this.size)}}class ix extends XO{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((s,r)=>{r.isValidDocument()?n.push(this.Nr.addEntry(e,r)):this.Nr.removeEntry(s)})),j.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class ox{constructor(e){this.persistence=e,this.si=new ii((n=>bp(n)),Sp),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.oi=0,this._i=new kp,this.targetCount=0,this.ai=Yi.ur()}forEachTarget(e,n){return this.si.forEach(((s,r)=>n(r))),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.oi&&(this.oi=n),j.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Yi(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Pr(n),j.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.si.forEach(((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)})),j.waitFor(i).next((()=>r))}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const s=this.si.get(n)||null;return j.resolve(s)}addMatchingKeys(e,n,s){return this._i.Wr(n,s),j.resolve()}removeMatchingKeys(e,n,s){this._i.zr(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach((o=>{i.push(r.markPotentiallyOrphaned(e,o))})),j.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const s=this._i.Hr(n);return j.resolve(s)}containsKey(e,n){return j.resolve(this._i.containsKey(n))}}/**
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
 */class KI{constructor(e,n){this.ui={},this.overlays={},this.ci=new Au(0),this.li=!1,this.li=!0,this.hi=new nx,this.referenceDelegate=e(this),this.Pi=new ox(this),this.indexManager=new qO,this.remoteDocumentCache=(function(r){return new rx(r)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new BO(n),this.Ii=new ex(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new tx,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.ui[e.toKey()];return s||(s=new sx(n,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,s){te("MemoryPersistence","Starting transaction:",e);const r=new ax(this.ci.next());return this.referenceDelegate.Ei(),s(r).next((i=>this.referenceDelegate.di(r).next((()=>i)))).toPromise().then((i=>(r.raiseOnCommittedEvent(),i)))}Ai(e,n){return j.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,n))))}}class ax extends $N{constructor(e){super(),this.currentSequenceNumber=e}}class Np{constructor(e){this.persistence=e,this.Ri=new kp,this.Vi=null}static mi(e){return new Np(e)}get fi(){if(this.Vi)return this.Vi;throw ge(60996)}addReference(e,n,s){return this.Ri.addReference(s,n),this.fi.delete(s.toString()),j.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.fi.add(s.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),j.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((r=>this.fi.add(r.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next((r=>{r.forEach((i=>this.fi.add(i.toString())))})).next((()=>s.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.fi,(s=>{const r=oe.fromPath(s);return this.gi(e,r).next((i=>{i||n.removeEntry(r,de.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((s=>{s?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return j.or([()=>j.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Vl{constructor(e,n){this.persistence=e,this.pi=new ii((s=>qN(s.path)),((s,r)=>s.isEqual(r))),this.garbageCollector=YO(this,n)}static mi(e,n){return new Vl(e,n)}Ei(){}di(e){return j.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>n.next((r=>s+r))))}wr(e){let n=0;return this.pr(e,(s=>{n++})).next((()=>n))}pr(e,n){return j.forEach(this.pi,((s,r)=>this.br(e,s,r).next((i=>i?j.resolve():n(r)))))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ii(e,(o=>this.br(e,o,n).next((a=>{a||(s++,i.removeEntry(o,de.min()))})))).next((()=>i.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),j.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),j.resolve()}removeReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),j.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Qc(e.data.value)),n}br(e,n,s){return j.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const r=this.pi.get(n);return j.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Op{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Es=s,this.ds=r}static As(e,n){let s=Ae(),r=Ae();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Op(e,n.fromCache,s,r)}}/**
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
 */class cx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class lx{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return r1()?8:jN(zt())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,s,r){const i={result:null};return this.ys(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ws(e,n,r,s).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new cx;return this.Ss(e,n,o).next((a=>{if(i.result=a,this.Vs)return this.bs(e,n,o,a.size)}))})).next((()=>i.result))}bs(e,n,s,r){return s.documentReadCount<this.fs?(yi()<=ve.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",vi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),j.resolve()):(yi()<=ve.DEBUG&&te("QueryEngine","Query:",vi(n),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.gs*r?(yi()<=ve.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",vi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yn(n))):j.resolve())}ys(e,n){if(uy(n))return j.resolve(null);let s=Yn(n);return this.indexManager.getIndexType(e,s).next((r=>r===0?null:(n.limit!==null&&r===1&&(n=Jf(n,null,"F"),s=Yn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next((i=>{const o=Ae(...i);return this.ps.getDocuments(e,o).next((a=>this.indexManager.getMinOffset(e,s).next((c=>{const u=this.Ds(n,a);return this.Cs(n,u,o,c.readTime)?this.ys(e,Jf(n,null,"F")):this.vs(e,u,n,c)}))))})))))}ws(e,n,s,r){return uy(n)||r.isEqual(de.min())?j.resolve(null):this.ps.getDocuments(e,s).next((i=>{const o=this.Ds(n,i);return this.Cs(n,o,s,r)?j.resolve(null):(yi()<=ve.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),vi(n)),this.vs(e,o,n,LN(r,Oa)).next((a=>a)))}))}Ds(e,n){let s=new gt(CI(e));return n.forEach(((r,i)=>{Ou(e,i)&&(s=s.add(i))})),s}Cs(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ss(e,n,s){return yi()<=ve.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",vi(n)),this.ps.getDocumentsMatchingQuery(e,n,fr.min(),s)}vs(e,n,s,r){return this.ps.getDocumentsMatchingQuery(e,s,r).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp="LocalStore",ux=3e8;class hx{constructor(e,n,s,r){this.persistence=e,this.Fs=n,this.serializer=r,this.Ms=new Tt(we),this.xs=new ii((i=>bp(i)),Sp),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ZO(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function fx(t,e,n,s){return new hx(t,e,n,s)}async function GI(t,e){const n=Se(t);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next((i=>(r=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(s)))).next((i=>{const o=[],a=[];let c=Ae();for(const u of r){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(s,c).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:a})))}))}))}function QI(t){const e=Se(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function dx(t,e){const n=Se(t),s=e.snapshotVersion;let r=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});r=n.Ms;const a=[];e.targetChanges.forEach(((h,f)=>{const d=r.get(f);if(!d)return;a.push(n.Pi.removeMatchingKeys(i,h.removedDocuments,f).next((()=>n.Pi.addMatchingKeys(i,h.addedDocuments,f))));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(Nt.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,s)),r=r.insert(f,g),(function(v,I,D){return v.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=ux?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0})(d,g,h)&&a.push(n.Pi.updateTargetData(i,g))}));let c=mr(),u=Ae();if(e.documentUpdates.forEach((h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))})),a.push(px(i,o,e.documentUpdates).next((h=>{c=h.ks,u=h.qs}))),!s.isEqual(de.min())){const h=n.Pi.getLastRemoteSnapshotVersion(i).next((f=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,s)));a.push(h)}return j.waitFor(a).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,c,u))).next((()=>c))})).then((i=>(n.Ms=r,i)))}function px(t,e,n){let s=Ae(),r=Ae();return n.forEach((i=>s=s.add(i))),e.getEntries(t,s).next((i=>{let o=mr();return n.forEach(((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(de.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):te(xp,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)})),{ks:o,qs:r}}))}function gx(t,e){const n=Se(t);return n.persistence.runTransaction("Allocate target","readwrite",(s=>{let r;return n.Pi.getTargetData(s,e).next((i=>i?(r=i,j.resolve(r)):n.Pi.allocateTargetId(s).next((o=>(r=new Js(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Pi.addTargetData(s,r).next((()=>r)))))))})).then((s=>{const r=n.Ms.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.xs.set(e,s.targetId)),s}))}async function rd(t,e,n){const s=Se(t),r=s.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,(o=>s.persistence.referenceDelegate.removeTarget(o,r)))}catch(o){if(!fo(o))throw o;te(xp,`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ms=s.Ms.remove(e),s.xs.delete(r.target)}function Iy(t,e,n){const s=Se(t);let r=de.min(),i=Ae();return s.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,u,h){const f=Se(c),d=f.xs.get(h);return d!==void 0?j.resolve(f.Ms.get(d)):f.Pi.getTargetData(u,h)})(s,o,Yn(e)).next((a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(o,a.targetId).next((c=>{i=c}))})).next((()=>s.Fs.getDocumentsMatchingQuery(o,e,n?r:de.min(),n?i:Ae()))).next((a=>(mx(s,lO(e),a),{documents:a,Qs:i})))))}function mx(t,e,n){let s=t.Os.get(e)||de.min();n.forEach(((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)})),t.Os.set(e,s)}class by{constructor(){this.activeTargetIds=gO()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _x{constructor(){this.Mo=new by,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,s){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new by,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class yx{Oo(e){}shutdown(){}}/**
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
 */const Sy="ConnectivityMonitor";class Cy{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){te(Sy,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){te(Sy,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Mc=null;function id(){return Mc===null?Mc=(function(){return 268435456+Math.round(2147483648*Math.random())})():Mc++,"0x"+Mc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh="RestConnection",vx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class wx{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${s}/databases/${r}`,this.Wo=this.databaseId.database===Ol?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Go(e,n,s,r,i){const o=id(),a=this.zo(e,n.toUriEncodedString());te(Uh,`Sending RPC '${e}' ${o}:`,a,s);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,r,i);const{host:u}=new URL(a),h=ri(u);return this.Jo(e,a,c,s,h).then((f=>(te(Uh,`Received RPC '${e}' ${o}: `,f),f)),(f=>{throw zi(Uh,`RPC '${e}' ${o} failed with error: `,f,"url: ",a,"request:",s),f}))}Ho(e,n,s,r,i,o){return this.Go(e,n,s,r,i)}jo(e,n,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ho})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((r,i)=>e[i]=r)),s&&s.headers.forEach(((r,i)=>e[i]=r))}zo(e,n){const s=vx[e];return`${this.Uo}/v1/${n}:${s}`}terminate(){}}/**
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
 */class Ex{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Dt="WebChannelConnection";class Tx extends wx{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,s,r,i){const o=id();return new Promise(((a,c)=>{const u=new eI;u.setWithCredentials(!0),u.listenOnce(tI.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Gc.NO_ERROR:const f=u.getResponseJson();te(Dt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),a(f);break;case Gc.TIMEOUT:te(Dt,`RPC '${e}' ${o} timed out`),c(new Z(q.DEADLINE_EXCEEDED,"Request time out"));break;case Gc.HTTP_ERROR:const d=u.getStatus();if(te(Dt,`RPC '${e}' ${o} failed with status:`,d,"response text:",u.getResponseText()),d>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const _=g?.error;if(_&&_.status&&_.message){const v=(function(D){const O=D.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(O)>=0?O:q.UNKNOWN})(_.status);c(new Z(v,_.message))}else c(new Z(q.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new Z(q.UNAVAILABLE,"Connection failed."));break;default:ge(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{te(Dt,`RPC '${e}' ${o} completed.`)}}));const h=JSON.stringify(r);te(Dt,`RPC '${e}' ${o} sending request:`,r),u.send(n,"POST",h,s,15)}))}T_(e,n,s){const r=id(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=rI(),a=sI(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const h=i.join("");te(Dt,`Creating RPC '${e}' stream ${r}: ${h}`,c);const f=o.createWebChannel(h,c);this.I_(f);let d=!1,g=!1;const _=new Ex({Yo:I=>{g?te(Dt,`Not sending because RPC '${e}' stream ${r} is closed:`,I):(d||(te(Dt,`Opening RPC '${e}' stream ${r} transport.`),f.open(),d=!0),te(Dt,`RPC '${e}' stream ${r} sending:`,I),f.send(I))},Zo:()=>f.close()}),v=(I,D,O)=>{I.listen(D,(y=>{try{O(y)}catch(S){setTimeout((()=>{throw S}),0)}}))};return v(f,Zo.EventType.OPEN,(()=>{g||(te(Dt,`RPC '${e}' stream ${r} transport opened.`),_.o_())})),v(f,Zo.EventType.CLOSE,(()=>{g||(g=!0,te(Dt,`RPC '${e}' stream ${r} transport closed`),_.a_(),this.E_(f))})),v(f,Zo.EventType.ERROR,(I=>{g||(g=!0,zi(Dt,`RPC '${e}' stream ${r} transport errored. Name:`,I.name,"Message:",I.message),_.a_(new Z(q.UNAVAILABLE,"The operation could not be completed")))})),v(f,Zo.EventType.MESSAGE,(I=>{if(!g){const D=I.data[0];Ze(!!D,16349);const O=D,y=O?.error||O[0]?.error;if(y){te(Dt,`RPC '${e}' stream ${r} received error:`,y);const S=y.status;let x=(function(T){const E=ot[T];if(E!==void 0)return MI(E)})(S),L=y.message;x===void 0&&(x=q.INTERNAL,L="Unknown error status: "+S+" with message "+y.message),g=!0,_.a_(new Z(x,L)),f.close()}else te(Dt,`RPC '${e}' stream ${r} received:`,D),_.u_(D)}})),v(a,nI.STAT_EVENT,(I=>{I.stat===qf.PROXY?te(Dt,`RPC '${e}' stream ${r} detected buffering proxy`):I.stat===qf.NOPROXY&&te(Dt,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{_.__()}),0),_}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function $h(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(t){return new OO(t,!0)}/**
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
 */class YI{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=s,this.A_=r,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,n-s);r>0&&te("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Ay="PersistentStream";class Ix{constructor(e,n,s,r,i,o,a,c){this.Mi=e,this.S_=s,this.b_=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new YI(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===q.RESOURCE_EXHAUSTED?(Cs(n.toString()),Cs("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,r])=>{this.D_===n&&this.G_(s,r)}),(s=>{e((()=>{const r=new Z(q.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)}))}))}G_(e,n){const s=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((r=>{s((()=>this.z_(r)))})),this.stream.onMessage((r=>{s((()=>++this.F_==1?this.J_(r):this.onNext(r)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return te(Ay,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(te(Ay,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class bx extends Ix{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=DO(this.serializer,e),s=(function(i){if(!("targetChange"in i))return de.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?de.min():o.readTime?Mi(o.readTime):de.min()})(e);return this.listener.H_(n,s)}Y_(e){const n={};n.database=vy(this.serializer),n.addTarget=(function(i,o){let a;const c=o.target;if(a=Yf(c)?{documents:MO(i,c)}:{query:LO(i,c).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=FI(i,o.resumeToken);const u=td(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(de.min())>0){a.readTime=nd(i,o.snapshotVersion.toTimestamp());const u=td(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a})(this.serializer,e);const s=FO(this.serializer,e);s&&(n.labels=s),this.q_(n)}Z_(e){const n={};n.database=vy(this.serializer),n.removeTarget=e,this.q_(n)}}/**
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
 */class Sx{}class Cx extends Sx{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new Z(q.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Go(e,sd(n,s),r,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Z(q.UNKNOWN,i.toString())}))}Ho(e,n,s,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Ho(e,sd(n,s),r,o,a,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Z(q.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class Ax{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Cs(n),this.aa=!1):te("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Xi="RemoteStore";class Rx{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((o=>{s.enqueueAndForget((async()=>{tc(this)&&(te(Xi,"Restarting streams for network reachability change."),await(async function(c){const u=Se(c);u.Ea.add(4),await ec(u),u.Ra.set("Unknown"),u.Ea.delete(4),await Vu(u)})(this))}))})),this.Ra=new Ax(s,r)}}async function Vu(t){if(tc(t))for(const e of t.da)await e(!0)}async function ec(t){for(const e of t.da)await e(!1)}function XI(t,e){const n=Se(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Vp(n)?Lp(n):mo(n).O_()&&Mp(n,e))}function Dp(t,e){const n=Se(t),s=mo(n);n.Ia.delete(e),s.O_()&&JI(n,e),n.Ia.size===0&&(s.O_()?s.L_():tc(n)&&n.Ra.set("Unknown"))}function Mp(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}mo(t).Y_(e)}function JI(t,e){t.Va.Ue(e),mo(t).Z_(e)}function Lp(t){t.Va=new RO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),mo(t).start(),t.Ra.ua()}function Vp(t){return tc(t)&&!mo(t).x_()&&t.Ia.size>0}function tc(t){return Se(t).Ea.size===0}function ZI(t){t.Va=void 0}async function Px(t){t.Ra.set("Online")}async function kx(t){t.Ia.forEach(((e,n)=>{Mp(t,e)}))}async function Nx(t,e){ZI(t),Vp(t)?(t.Ra.ha(e),Lp(t)):t.Ra.set("Unknown")}async function Ox(t,e,n){if(t.Ra.set("Online"),e instanceof VI&&e.state===2&&e.cause)try{await(async function(r,i){const o=i.cause;for(const a of i.targetIds)r.Ia.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.Ia.delete(a),r.Va.removeTarget(a))})(t,e)}catch(s){te(Xi,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ry(t,s)}else if(e instanceof Xc?t.Va.Ze(e):e instanceof LI?t.Va.st(e):t.Va.tt(e),!n.isEqual(de.min()))try{const s=await QI(t.localStore);n.compareTo(s)>=0&&await(function(i,o){const a=i.Va.Tt(o);return a.targetChanges.forEach(((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=i.Ia.get(u);h&&i.Ia.set(u,h.withResumeToken(c.resumeToken,o))}})),a.targetMismatches.forEach(((c,u)=>{const h=i.Ia.get(c);if(!h)return;i.Ia.set(c,h.withResumeToken(Nt.EMPTY_BYTE_STRING,h.snapshotVersion)),JI(i,c);const f=new Js(h.target,c,u,h.sequenceNumber);Mp(i,f)})),i.remoteSyncer.applyRemoteEvent(a)})(t,n)}catch(s){te(Xi,"Failed to raise snapshot:",s),await Ry(t,s)}}async function Ry(t,e,n){if(!fo(e))throw e;t.Ea.add(1),await ec(t),t.Ra.set("Offline"),n||(n=()=>QI(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{te(Xi,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Vu(t)}))}async function Py(t,e){const n=Se(t);n.asyncQueue.verifyOperationInProgress(),te(Xi,"RemoteStore received new credentials");const s=tc(n);n.Ea.add(3),await ec(n),s&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Vu(n)}async function xx(t,e){const n=Se(t);e?(n.Ea.delete(2),await Vu(n)):e||(n.Ea.add(2),await ec(n),n.Ra.set("Unknown"))}function mo(t){return t.ma||(t.ma=(function(n,s,r){const i=Se(n);return i.sa(),new bx(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(t.datastore,t.asyncQueue,{Xo:Px.bind(null,t),t_:kx.bind(null,t),r_:Nx.bind(null,t),H_:Ox.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),Vp(t)?Lp(t):t.Ra.set("Unknown")):(await t.ma.stop(),ZI(t))}))),t.ma}/**
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
 */class Fp{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new or,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Fp(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function eb(t,e){if(Cs("AsyncQueue",`${e}: ${t}`),fo(t))return new Z(q.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Li{static emptySet(e){return new Li(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||oe.comparator(n.key,s.key):(n,s)=>oe.comparator(n.key,s.key),this.keyedMap=ea(),this.sortedSet=new Tt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,s)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Li)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Li;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class ky{constructor(){this.ga=new Tt(oe.comparator)}track(e){const n=e.doc.key,s=this.ga.get(n);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(n,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(n):e.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ge(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,s)=>{e.push(s)})),e}}class Ji{constructor(e,n,s,r,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach((a=>{o.push({type:0,doc:a})})),new Ji(e,n,Li.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Nu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class Dx{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class Mx{constructor(){this.queries=Ny(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const r=Se(n),i=r.queries;r.queries=Ny(),i.forEach(((o,a)=>{for(const c of a.Sa)c.onError(s)}))})(this,new Z(q.ABORTED,"Firestore shutting down"))}}function Ny(){return new ii((t=>SI(t)),Nu)}async function Up(t,e){const n=Se(t);let s=3;const r=e.query;let i=n.queries.get(r);i?!i.ba()&&e.Da()&&(s=2):(i=new Dx,s=e.Da()?0:1);try{switch(s){case 0:i.wa=await n.onListen(r,!0);break;case 1:i.wa=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(o){const a=eb(o,`Initialization of query '${vi(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&jp(n)}async function $p(t,e){const n=Se(t),s=e.query;let r=3;const i=n.queries.get(s);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?r=e.Da()?0:1:!i.ba()&&e.Da()&&(r=2))}switch(r){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function Lx(t,e){const n=Se(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.Sa)a.Fa(r)&&(s=!0);o.wa=r}}s&&jp(n)}function Vx(t,e,n){const s=Se(t),r=s.queries.get(e);if(r)for(const i of r.Sa)i.onError(n);s.queries.delete(e)}function jp(t){t.Ca.forEach((e=>{e.next()}))}var od,Oy;(Oy=od||(od={})).Ma="default",Oy.Cache="cache";class Bp{constructor(e,n,s){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Ji(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Ji.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==od.Cache}}/**
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
 */class tb{constructor(e){this.key=e}}class nb{constructor(e){this.key=e}}class Fx{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ae(),this.mutatedKeys=Ae(),this.eu=CI(e),this.tu=new Li(this.eu)}get nu(){return this.Ya}ru(e,n){const s=n?n.iu:new ky,r=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((h,f)=>{const d=r.get(h),g=Ou(this.query,f)?f:null,_=!!d&&this.mutatedKeys.has(d.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let I=!1;d&&g?d.data.isEqual(g.data)?_!==v&&(s.track({type:3,doc:g}),I=!0):this.su(d,g)||(s.track({type:2,doc:g}),I=!0,(c&&this.eu(g,c)>0||u&&this.eu(g,u)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),I=!0):d&&!g&&(s.track({type:1,doc:d}),I=!0,(c||u)&&(a=!0)),I&&(g?(o=o.add(g),i=v?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),s.track({type:1,doc:h})}return{tu:o,iu:s,Cs:a,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,r){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((h,f)=>(function(g,_){const v=I=>{switch(I){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ge(20277,{Rt:I})}};return v(g)-v(_)})(h.type,f.type)||this.eu(h.doc,f.doc))),this.ou(s),r=r??!1;const a=n&&!r?this._u():[],c=this.Xa.size===0&&this.current&&!r?1:0,u=c!==this.Za;return this.Za=c,o.length!==0||u?{snapshot:new Ji(this.query,e.tu,i,o,e.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ky,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ae(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const n=[];return e.forEach((s=>{this.Xa.has(s)||n.push(new nb(s))})),this.Xa.forEach((s=>{e.has(s)||n.push(new tb(s))})),n}cu(e){this.Ya=e.Qs,this.Xa=Ae();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Ji.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Hp="SyncEngine";class Ux{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class $x{constructor(e){this.key=e,this.hu=!1}}class jx{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ii((a=>SI(a)),Nu),this.Iu=new Map,this.Eu=new Set,this.du=new Tt(oe.comparator),this.Au=new Map,this.Ru=new kp,this.Vu={},this.mu=new Map,this.fu=Yi.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Bx(t,e,n=!0){const s=ab(t);let r;const i=s.Tu.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.lu()):r=await sb(s,e,n,!0),r}async function Hx(t,e){const n=ab(t);await sb(n,e,!0,!1)}async function sb(t,e,n,s){const r=await gx(t.localStore,Yn(e)),i=r.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return s&&(a=await qx(t,e,i,o==="current",r.resumeToken)),t.isPrimaryClient&&n&&XI(t.remoteStore,r),a}async function qx(t,e,n,s,r){t.pu=(f,d,g)=>(async function(v,I,D,O){let y=I.view.ru(D);y.Cs&&(y=await Iy(v.localStore,I.query,!1).then((({documents:b})=>I.view.ru(b,y))));const S=O&&O.targetChanges.get(I.targetId),x=O&&O.targetMismatches.get(I.targetId)!=null,L=I.view.applyChanges(y,v.isPrimaryClient,S,x);return Dy(v,I.targetId,L.au),L.snapshot})(t,f,d,g);const i=await Iy(t.localStore,e,!0),o=new Fx(e,i.Qs),a=o.ru(i.documents),c=Za.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,c);Dy(t,n,u.au);const h=new Ux(e,n,o);return t.Tu.set(e,h),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function Wx(t,e,n){const s=Se(t),r=s.Tu.get(e),i=s.Iu.get(r.targetId);if(i.length>1)return s.Iu.set(r.targetId,i.filter((o=>!Nu(o,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await rd(s.localStore,r.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(r.targetId),n&&Dp(s.remoteStore,r.targetId),ad(s,r.targetId)})).catch(Cu)):(ad(s,r.targetId),await rd(s.localStore,r.targetId,!0))}async function zx(t,e){const n=Se(t),s=n.Tu.get(e),r=n.Iu.get(s.targetId);n.isPrimaryClient&&r.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Dp(n.remoteStore,s.targetId))}async function rb(t,e){const n=Se(t);try{const s=await dx(n.localStore,e);e.targetChanges.forEach(((r,i)=>{const o=n.Au.get(i);o&&(Ze(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?o.hu=!0:r.modifiedDocuments.size>0?Ze(o.hu,14607):r.removedDocuments.size>0&&(Ze(o.hu,42227),o.hu=!1))})),await ob(n,s,e)}catch(s){await Cu(s)}}function xy(t,e,n){const s=Se(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.Tu.forEach(((i,o)=>{const a=o.view.va(e);a.snapshot&&r.push(a.snapshot)})),(function(o,a){const c=Se(o);c.onlineState=a;let u=!1;c.queries.forEach(((h,f)=>{for(const d of f.Sa)d.va(a)&&(u=!0)})),u&&jp(c)})(s.eventManager,e),r.length&&s.Pu.H_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Kx(t,e,n){const s=Se(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.Au.get(e),i=r&&r.key;if(i){let o=new Tt(oe.comparator);o=o.insert(i,$t.newNoDocument(i,de.min()));const a=Ae().add(i),c=new Mu(de.min(),new Map,new Tt(we),o,a);await rb(s,c),s.du=s.du.remove(i),s.Au.delete(e),qp(s)}else await rd(s.localStore,e,!1).then((()=>ad(s,e,n))).catch(Cu)}function ad(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Iu.get(e))t.Tu.delete(s),n&&t.Pu.yu(s,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((s=>{t.Ru.containsKey(s)||ib(t,s)}))}function ib(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Dp(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),qp(t))}function Dy(t,e,n){for(const s of n)s instanceof tb?(t.Ru.addReference(s.key,e),Gx(t,s)):s instanceof nb?(te(Hp,"Document no longer in limbo: "+s.key),t.Ru.removeReference(s.key,e),t.Ru.containsKey(s.key)||ib(t,s.key)):ge(19791,{wu:s})}function Gx(t,e){const n=e.key,s=n.path.canonicalString();t.du.get(n)||t.Eu.has(s)||(te(Hp,"New document in limbo: "+n),t.Eu.add(s),qp(t))}function qp(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new oe(qe.fromString(e)),s=t.fu.next();t.Au.set(s,new $x(n)),t.du=t.du.insert(n,s),XI(t.remoteStore,new Js(Yn(ku(n.path)),s,"TargetPurposeLimboResolution",Au.ce))}}async function ob(t,e,n){const s=Se(t),r=[],i=[],o=[];s.Tu.isEmpty()||(s.Tu.forEach(((a,c)=>{o.push(s.pu(c,e,n).then((u=>{if((u||n)&&s.isPrimaryClient){const h=u?!u.fromCache:n?.targetChanges.get(c.targetId)?.current;s.sharedClientState.updateQueryState(c.targetId,h?"current":"not-current")}if(u){r.push(u);const h=Op.As(c.targetId,u);i.push(h)}})))})),await Promise.all(o),s.Pu.H_(r),await(async function(c,u){const h=Se(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",(f=>j.forEach(u,(d=>j.forEach(d.Es,(g=>h.persistence.referenceDelegate.addReference(f,d.targetId,g))).next((()=>j.forEach(d.ds,(g=>h.persistence.referenceDelegate.removeReference(f,d.targetId,g)))))))))}catch(f){if(!fo(f))throw f;te(xp,"Failed to update sequence numbers: "+f)}for(const f of u){const d=f.targetId;if(!f.fromCache){const g=h.Ms.get(d),_=g.snapshotVersion,v=g.withLastLimboFreeSnapshotVersion(_);h.Ms=h.Ms.insert(d,v)}}})(s.localStore,i))}async function Qx(t,e){const n=Se(t);if(!n.currentUser.isEqual(e)){te(Hp,"User change. New user:",e.toKey());const s=await GI(n.localStore,e);n.currentUser=e,(function(i,o){i.mu.forEach((a=>{a.forEach((c=>{c.reject(new Z(q.CANCELLED,o))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ob(n,s.Ls)}}function Yx(t,e){const n=Se(t),s=n.Au.get(e);if(s&&s.hu)return Ae().add(s.key);{let r=Ae();const i=n.Iu.get(e);if(!i)return r;for(const o of i){const a=n.Tu.get(o);r=r.unionWith(a.view.nu)}return r}}function ab(t){const e=Se(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=rb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Yx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Kx.bind(null,e),e.Pu.H_=Lx.bind(null,e.eventManager),e.Pu.yu=Vx.bind(null,e.eventManager),e}class Fl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Lu(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return fx(this.persistence,new lx,e.initialUser,this.serializer)}Cu(e){return new KI(Np.mi,this.serializer)}Du(e){return new _x}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Fl.provider={build:()=>new Fl};class Xx extends Fl{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Ze(this.persistence.referenceDelegate instanceof Vl,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new GO(s,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?en.withCacheSize(this.cacheSizeBytes):en.DEFAULT;return new KI((s=>Vl.mi(s,n)),this.serializer)}}class cd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>xy(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Qx.bind(null,this.syncEngine),await xx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Mx})()}createDatastore(e){const n=Lu(e.databaseInfo.databaseId),s=(function(i){return new Tx(i)})(e.databaseInfo);return(function(i,o,a,c){return new Cx(i,o,a,c)})(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return(function(s,r,i,o,a){return new Rx(s,r,i,o,a)})(this.localStore,this.datastore,e.asyncQueue,(n=>xy(this.syncEngine,n,0)),(function(){return Cy.v()?new Cy:new yx})())}createSyncEngine(e,n){return(function(r,i,o,a,c,u,h){const f=new jx(r,i,o,a,c,u);return h&&(f.gu=!0),f})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const s=Se(n);te(Xi,"RemoteStore shutting down."),s.Ea.add(5),await ec(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}cd.provider={build:()=>new cd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Wp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Cs("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
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
 */const _r="FirestoreClient";class Jx{constructor(e,n,s,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Vt.UNAUTHENTICATED,this.clientId=Ep.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,(async o=>{te(_r,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(s,(o=>(te(_r,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new or;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=eb(n,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function jh(t,e){t.asyncQueue.verifyOperationInProgress(),te(_r,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async r=>{s.isEqual(r)||(await GI(e.localStore,r),s=r)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function My(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Zx(t);te(_r,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((s=>Py(e.remoteStore,s))),t.setAppCheckTokenChangeListener(((s,r)=>Py(e.remoteStore,r))),t._onlineComponents=e}async function Zx(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te(_r,"Using user provided OfflineComponentProvider");try{await jh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(r){return r.name==="FirebaseError"?r.code===q.FAILED_PRECONDITION||r.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(n))throw n;zi("Error using user provided cache. Falling back to memory cache: "+n),await jh(t,new Fl)}}else te(_r,"Using default OfflineComponentProvider"),await jh(t,new Xx(void 0));return t._offlineComponents}async function eD(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te(_r,"Using user provided OnlineComponentProvider"),await My(t,t._uninitializedComponentsProvider._online)):(te(_r,"Using default OnlineComponentProvider"),await My(t,new cd))),t._onlineComponents}async function Ul(t){const e=await eD(t),n=e.eventManager;return n.onListen=Bx.bind(null,e.syncEngine),n.onUnlisten=Wx.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Hx.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=zx.bind(null,e.syncEngine),n}function tD(t,e,n={}){const s=new or;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,a,c,u){const h=new Wp({next:d=>{h.Nu(),o.enqueueAndForget((()=>$p(i,f)));const g=d.docs.has(a);!g&&d.fromCache?u.reject(new Z(q.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&d.fromCache&&c&&c.source==="server"?u.reject(new Z(q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),f=new Bp(ku(a.path),h,{includeMetadataChanges:!0,qa:!0});return Up(i,f)})(await Ul(t),t.asyncQueue,e,n,s))),s.promise}function nD(t,e,n={}){const s=new or;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,a,c,u){const h=new Wp({next:d=>{h.Nu(),o.enqueueAndForget((()=>$p(i,f))),d.fromCache&&c.source==="server"?u.reject(new Z(q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),f=new Bp(a,h,{includeMetadataChanges:!0,qa:!0});return Up(i,f)})(await Ul(t),t.asyncQueue,e,n,s))),s.promise}/**
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
 */function cb(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb="firestore.googleapis.com",Vy=!0;class Fy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Z(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=lb,this.ssl=Vy}else this.host=e.host,this.ssl=e.ssl??Vy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=zI;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<zO)throw new Z(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}MN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cb(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Z(q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Z(q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Z(q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,r){return s.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fu{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Z(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new SN;switch(s.type){case"firstParty":return new PN(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new Z(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=Ly.get(n);s&&(te("ComponentProvider","Removing Datastore"),Ly.delete(n),s.terminate())})(this),Promise.resolve()}}function sD(t,e,n,s={}){t=ar(t,Fu);const r=ri(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;r&&(BT(`https://${a}`),qT("Firestore",!0)),i.host!==lb&&i.host!==a&&zi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:a,ssl:r,emulatorOptions:s};if(!ka(c,o)&&(t._setSettings(c),s.mockUserToken)){let u,h;if(typeof s.mockUserToken=="string")u=s.mockUserToken,h=Vt.MOCK_USER;else{u=HT(s.mockUserToken,t._app?.options.projectId);const f=s.mockUserToken.sub||s.mockUserToken.user_id;if(!f)throw new Z(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Vt(f)}t._authCredentials=new CN(new oI(u,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new wr(this.firestore,e,this._query)}}class ut{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new lr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ut(this.firestore,e,this._key)}toJSON(){return{type:ut._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(Ja(n,ut._jsonSchema))return new ut(e,s||null,new oe(qe.fromString(n.referencePath)))}}ut._jsonSchemaVersion="firestore/documentReference/1.0",ut._jsonSchema={type:lt("string",ut._jsonSchemaVersion),referencePath:lt("string")};class lr extends wr{constructor(e,n,s){super(e,n,ku(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ut(this.firestore,null,new oe(e))}withConverter(e){return new lr(this.firestore,e,this._path)}}function yB(t,e,...n){if(t=Xt(t),aI("collection","path",e),t instanceof Fu){const s=qe.fromString(e,...n);return Y_(s),new lr(t,null,s)}{if(!(t instanceof ut||t instanceof lr))throw new Z(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(qe.fromString(e,...n));return Y_(s),new lr(t.firestore,null,s)}}function vB(t,e,...n){if(t=Xt(t),arguments.length===1&&(e=Ep.newId()),aI("doc","path",e),t instanceof Fu){const s=qe.fromString(e,...n);return Q_(s),new ut(t,null,new oe(s))}{if(!(t instanceof ut||t instanceof lr))throw new Z(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(qe.fromString(e,...n));return Q_(s),new ut(t.firestore,t instanceof lr?t.converter:null,new oe(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy="AsyncQueue";class $y{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new YI(this,"async_queue_retry"),this._c=()=>{const s=$h();s&&te(Uy,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=$h();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=$h();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new or;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!fo(e))throw e;te(Uy,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Cs("INTERNAL UNHANDLED ERROR: ",jy(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const r=Fp.createAndSchedule(this,e,n,s,(i=>this.hc(i)));return this.tc.push(r),r}uc(){this.nc&&ge(47125,{Pc:jy(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function jy(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
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
 */function By(t){return(function(n,s){if(typeof n!="object"||n===null)return!1;const r=n;for(const i of s)if(i in r&&typeof r[i]=="function")return!0;return!1})(t,["next","error","complete"])}class Va extends Fu{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new $y,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new $y(e),this._firestoreClient=void 0,await e}}}function rD(t,e){const n=typeof t=="object"?t:vp(),s=typeof t=="string"?t:Ol,r=yp(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=$T("firestore");i&&sD(r,...i)}return r}function zp(t){if(t._terminated)throw new Z(q.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||iD(t),t._firestoreClient}function iD(t){const e=t._freezeSettings(),n=(function(r,i,o,a){return new KN(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,cb(a.experimentalLongPollingOptions),a.useFetchStreams,a.isUsingEmulator)})(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new Jx(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(r){const i=r?._online.build();return{_offline:r?._offline.build(i),_online:i}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new yn(Nt.fromBase64String(e))}catch(n){throw new Z(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new yn(Nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:yn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ja(e,yn._jsonSchema))return yn.fromBase64String(e.bytes)}}yn._jsonSchemaVersion="firestore/bytes/1.0",yn._jsonSchema={type:lt("string",yn._jsonSchemaVersion),bytes:lt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Z(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e){this._methodName=e}}/**
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
 */class En{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Z(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Z(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:En._jsonSchemaVersion}}static fromJSON(e){if(Ja(e,En._jsonSchema))return new En(e.latitude,e.longitude)}}En._jsonSchemaVersion="firestore/geoPoint/1.0",En._jsonSchema={type:lt("string",En._jsonSchemaVersion),latitude:lt("number"),longitude:lt("number")};/**
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
 */class Xn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Xn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ja(e,Xn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Xn(e.vectorValues);throw new Z(q.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Xn._jsonSchemaVersion="firestore/vectorValue/1.0",Xn._jsonSchema={type:lt("string",Xn._jsonSchemaVersion),vectorValues:lt("object")};/**
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
 */const oD=/^__.*__$/;function fb(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ge(40011,{Ac:t})}}class Kp{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Kp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.gc(e),s}yc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return ld(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(fb(this.Ac)&&oD.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class aD{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Lu(e)}Cc(e,n,s,r=!1){return new Kp({Ac:e,methodName:n,Dc:s,path:Ht.emptyPath(),fc:!1,bc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cD(t){const e=t._freezeSettings(),n=Lu(t._databaseId);return new aD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function lD(t,e,n,s=!1){return Gp(n,t.Cc(s?4:3,e))}function Gp(t,e){if(db(t=Xt(t)))return hD("Unsupported field value:",e,t),uD(t,e);if(t instanceof hb)return(function(s,r){if(!fb(r.Ac))throw r.Sc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Sc(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,r){const i=[];let o=0;for(const a of s){let c=Gp(a,r.wc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}})(t,e)}return(function(s,r){if((s=Xt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return mO(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=We.fromDate(s);return{timestampValue:nd(r.serializer,i)}}if(s instanceof We){const i=new We(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:nd(r.serializer,i)}}if(s instanceof En)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof yn)return{bytesValue:FI(r.serializer,s._byteString)};if(s instanceof ut){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:UI(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof Xn)return(function(o,a){return{mapValue:{fields:{[mI]:{stringValue:_I},[xl]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw a.Sc("VectorValues must only contain numeric values.");return Cp(a.serializer,u)}))}}}}}})(s,r);throw r.Sc(`Unsupported field value: ${Su(s)}`)})(t,e)}function uD(t,e){const n={};return uI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):po(t,((s,r)=>{const i=Gp(r,e.mc(s));i!=null&&(n[s]=i)})),{mapValue:{fields:n}}}function db(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof We||t instanceof En||t instanceof yn||t instanceof ut||t instanceof hb||t instanceof Xn)}function hD(t,e,n){if(!db(n)||!cI(n)){const s=Su(n);throw s==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+s)}}const fD=new RegExp("[~\\*/\\[\\]]");function dD(t,e,n){if(e.search(fD)>=0)throw ld(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ub(...e.split("."))._internalPath}catch{throw ld(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ld(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new Z(q.INVALID_ARGUMENT,a+t+c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new pD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Qp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class pD extends pb{data(){return super.data()}}function Qp(t,e){return typeof e=="string"?dD(t,e):e instanceof ub?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Z(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Yp{}class mb extends Yp{}function wB(t,e,...n){let s=[];e instanceof Yp&&s.push(e),s=s.concat(n),(function(i){const o=i.filter((c=>c instanceof Jp)).length,a=i.filter((c=>c instanceof Xp)).length;if(o>1||o>0&&a>0)throw new Z(q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const r of s)t=r._apply(t);return t}class Xp extends mb{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Xp(e,n,s)}_apply(e){const n=this._parse(e);return _b(e._query,n),new wr(e.firestore,e.converter,Xf(e._query,n))}_parse(e){const n=cD(e.firestore);return(function(i,o,a,c,u,h,f){let d;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new Z(q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){qy(f,h);const _=[];for(const v of f)_.push(Hy(c,i,v));d={arrayValue:{values:_}}}else d=Hy(c,i,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||qy(f,h),d=lD(a,o,f,h==="in"||h==="not-in");return ct.create(u,h,d)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Jp extends Yp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Jp(e,n)}_parse(e){const n=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return n.length===1?n[0]:Dn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(r,i){let o=r;const a=i.getFlattenedFilters();for(const c of a)_b(o,c),o=Xf(o,c)})(e._query,n),new wr(e.firestore,e.converter,Xf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Zp extends mb{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Zp(e,n)}_apply(e){const n=(function(r,i,o){if(r.startAt!==null)throw new Z(q.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new Z(q.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new La(i,o)})(e._query,this._field,this._direction);return new wr(e.firestore,e.converter,(function(r,i){const o=r.explicitOrderBy.concat([i]);return new go(r.path,r.collectionGroup,o,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)})(e._query,n))}}function EB(t,e="asc"){const n=e,s=Qp("orderBy",t);return Zp._create(s,n)}function Hy(t,e,n){if(typeof(n=Xt(n))=="string"){if(n==="")throw new Z(q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bI(e)&&n.indexOf("/")!==-1)throw new Z(q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(qe.fromString(n));if(!oe.isDocumentKey(s))throw new Z(q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return ry(t,new oe(s))}if(n instanceof ut)return ry(t,n._key);throw new Z(q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Su(n)}.`)}function qy(t,e){if(!Array.isArray(t)||t.length===0)throw new Z(q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function _b(t,e){const n=(function(r,i){for(const o of r)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null})(t.filters,(function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new Z(q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Z(q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class gD{convertValue(e,n="none"){switch(gr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(pr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ge(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return po(e,((r,i)=>{s[r]=this.convertValue(i,n)})),s}convertVectorValue(e){const n=e.fields?.[xl].arrayValue?.values?.map((s=>st(s.doubleValue)));return new Xn(n)}convertGeoPoint(e){return new En(st(e.latitude),st(e.longitude))}convertArray(e,n){return(e.values||[]).map((s=>this.convertValue(s,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Pu(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(xa(e));default:return null}}convertTimestamp(e){const n=dr(e);return new We(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=qe.fromString(e);Ze(WI(s),9688,{name:e});const r=new Da(s.get(1),s.get(3)),i=new oe(s.popFirst(5));return r.isEqual(n)||Cs(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}class na{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Br extends pb{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Jc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Qp("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Z(q.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Br._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Br._jsonSchemaVersion="firestore/documentSnapshot/1.0",Br._jsonSchema={type:lt("string",Br._jsonSchemaVersion),bundleSource:lt("string","DocumentSnapshot"),bundleName:lt("string"),bundle:lt("string")};class Jc extends Br{data(e={}){return super.data(e)}}class Hr{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new na(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((s=>{e.call(n,new Jc(this._firestore,this._userDataWriter,s.key,s,new na(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Z(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map((a=>{const c=new Jc(r._firestore,r._userDataWriter,a.doc.key,a.doc,new na(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((a=>i||a.type!==3)).map((a=>{const c=new Jc(r._firestore,r._userDataWriter,a.doc.key,a.doc,new na(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:mD(a.type),doc:c,oldIndex:u,newIndex:h}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Z(q.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Hr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ep.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],r=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function mD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ge(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yb(t){t=ar(t,ut);const e=ar(t.firestore,Va);return tD(zp(e),t._key).then((n=>vb(e,t,n)))}Hr._jsonSchemaVersion="firestore/querySnapshot/1.0",Hr._jsonSchema={type:lt("string",Hr._jsonSchemaVersion),bundleSource:lt("string","QuerySnapshot"),bundleName:lt("string"),bundle:lt("string")};class eg extends gD{constructor(e){super(),this.firestore=e}convertBytes(e){return new yn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ut(this.firestore,null,n)}}function _D(t){t=ar(t,wr);const e=ar(t.firestore,Va),n=zp(e),s=new eg(e);return gb(t._query),nD(n,t._query).then((r=>new Hr(e,s,t,r)))}function tg(t,...e){t=Xt(t);let n={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||By(e[s])||(n=e[s++]);const r={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(By(e[s])){const c=e[s];e[s]=c.next?.bind(c),e[s+1]=c.error?.bind(c),e[s+2]=c.complete?.bind(c)}let i,o,a;if(t instanceof ut)o=ar(t.firestore,Va),a=ku(t._key.path),i={next:c=>{e[s]&&e[s](vb(o,t,c))},error:e[s+1],complete:e[s+2]};else{const c=ar(t,wr);o=ar(c.firestore,Va),a=c._query;const u=new eg(o);i={next:h=>{e[s]&&e[s](new Hr(o,u,c,h))},error:e[s+1],complete:e[s+2]},gb(t._query)}return(function(u,h,f,d){const g=new Wp(d),_=new Bp(h,g,f);return u.asyncQueue.enqueueAndForget((async()=>Up(await Ul(u),_))),()=>{g.Nu(),u.asyncQueue.enqueueAndForget((async()=>$p(await Ul(u),_)))}})(zp(o),a,r,i)}function vb(t,e,n){const s=n.docs.get(e._key),r=new eg(t);return new Br(t,r,e._key,s,new na(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(r){ho=r})(vr),es(new xn("firestore",((s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),a=new Va(new AN(s.getProvider("auth-internal")),new kN(o,s.getProvider("app-check-internal")),(function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Z(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Da(u.options.projectId,h)})(o,r),o);return i={useFetchStreams:n,...i},a._setSettings(i),a}),"PUBLIC").setMultipleInstances(!0)),fn(W_,z_,e),fn(W_,z_,"esm2020")})();function yD(t){const e=wD(t),n=new ArrayBuffer(e.length),s=new DataView(n);for(let r=0;r<n.byteLength;r++)s.setUint8(r,e.charCodeAt(r));return n}const vD="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function wD(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,s=0;for(let r=0;r<t.length;r++)n<<=6,n|=vD.indexOf(t[r]),s+=6,s===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=s=0);return s===12?(n>>=4,e+=String.fromCharCode(n)):s===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const ED=-1,TD=-2,ID=-3,bD=-4,SD=-5,CD=-6;function AD(t,e){return RD(JSON.parse(t),e)}function RD(t,e){if(typeof t=="number")return r(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,s=Array(n.length);function r(i,o=!1){if(i===ED)return;if(i===ID)return NaN;if(i===bD)return 1/0;if(i===SD)return-1/0;if(i===CD)return-0;if(o||typeof i!="number")throw new Error("Invalid input");if(i in s)return s[i];const a=n[i];if(!a||typeof a!="object")s[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const c=a[0],u=e?.[c];if(u)return s[i]=u(r(a[1]));switch(c){case"Date":s[i]=new Date(a[1]);break;case"Set":const h=new Set;s[i]=h;for(let g=1;g<a.length;g+=1)h.add(r(a[g]));break;case"Map":const f=new Map;s[i]=f;for(let g=1;g<a.length;g+=2)f.set(r(a[g]),r(a[g+1]));break;case"RegExp":s[i]=new RegExp(a[1],a[2]);break;case"Object":s[i]=Object(a[1]);break;case"BigInt":s[i]=BigInt(a[1]);break;case"null":const d=Object.create(null);s[i]=d;for(let g=1;g<a.length;g+=2)d[a[g]]=r(a[g+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const g=globalThis[c],_=new g(r(a[1]));s[i]=a[2]!==void 0?_.subarray(a[2],a[3]):_;break}case"ArrayBuffer":{const g=a[1],_=yD(g);s[i]=_;break}case"Temporal.Duration":case"Temporal.Instant":case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.PlainMonthDay":case"Temporal.PlainYearMonth":case"Temporal.ZonedDateTime":{const g=c.slice(9);s[i]=Temporal[g].from(a[1]);break}case"URL":{const g=new URL(a[1]);s[i]=g;break}case"URLSearchParams":{const g=new URLSearchParams(a[1]);s[i]=g;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(a.length);s[i]=c;for(let u=0;u<a.length;u+=1){const h=a[u];h!==TD&&(c[u]=r(h))}}else{const c={};s[i]=c;for(const u in a){if(u==="__proto__")throw new Error("Cannot parse an object with a `__proto__` property");const h=a[u];c[u]=r(h)}}return s[i]}return r(0)}const PD=new Set(["link","style","script","noscript"]),kD=new Set(["title","titleTemplate","script","style","noscript"]),Wy=new Set(["base","meta","link","style","script","noscript"]),ND=new Set(["title","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),OD=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),xD=new Set(["key","tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent","processTemplateParams"]),DD=new Set(["templateParams","htmlAttrs","bodyAttrs"]),ng=new Set(["theme-color","google-site-verification","og","article","book","profile","twitter","author"]),Fa={META:new Set(["twitter"]),OG:new Set(["og","book","article","profile","fb"]),MEDIA:new Set(["ogImage","ogVideo","ogAudio","twitterImage"]),HTTP_EQUIV:new Set(["contentType","defaultStyle","xUaCompatible"])},MD={articleExpirationTime:"article:expiration_time",articleModifiedTime:"article:modified_time",articlePublishedTime:"article:published_time",bookReleaseDate:"book:release_date",fbAppId:"fb:app_id",ogAudioSecureUrl:"og:audio:secure_url",ogAudioUrl:"og:audio",ogImageSecureUrl:"og:image:secure_url",ogImageUrl:"og:image",ogSiteName:"og:site_name",ogVideoSecureUrl:"og:video:secure_url",ogVideoUrl:"og:video",profileFirstName:"profile:first_name",profileLastName:"profile:last_name",profileUsername:"profile:username",msapplicationConfig:"msapplication-Config",msapplicationTileColor:"msapplication-TileColor",msapplicationTileImage:"msapplication-TileImage"},wb={appleItunesApp:{unpack:{entrySeparator:", ",resolve:({key:t,value:e})=>`${gs(t)}=${e}`}},refresh:{metaKey:"http-equiv",unpack:{entrySeparator:";",resolve:({key:t,value:e})=>t==="seconds"?`${e}`:void 0}},robots:{unpack:{entrySeparator:", ",resolve:({key:t,value:e})=>typeof e=="boolean"?gs(t):`${gs(t)}:${e}`}},contentSecurityPolicy:{metaKey:"http-equiv",unpack:{entrySeparator:"; ",resolve:({key:t,value:e})=>`${gs(t)} ${e}`}},charset:{}};function gs(t){const e=t.replace(/([A-Z])/g,"-$1").toLowerCase(),n=e.indexOf("-");return n===-1?e:Fa.META.has(e.slice(0,n))||Fa.OG.has(e.slice(0,n))?t.replace(/([A-Z])/g,":$1").toLowerCase():e}function Eb(t){return Object.fromEntries(Object.entries(t).filter(([e,n])=>String(n)!=="false"&&e))}function ud(t){return Array.isArray(t)?t.map(ud):!t||typeof t!="object"?t:Object.fromEntries(Object.entries(t).map(([e,n])=>[gs(e),ud(n)]))}function Tb(t,e={}){const{entrySeparator:n="",keyValueSeparator:s="",wrapValue:r,resolve:i}=e;return Object.entries(t).map(([o,a])=>{if(i){const u=i({key:o,value:a});if(u!==void 0)return u}const c=typeof a=="object"?Tb(a,e):typeof a=="number"?a.toString():typeof a=="string"&&r?`${r}${a.replace(new RegExp(r,"g"),`\\${r}`)}${r}`:a;return`${o}${s}${c}`}).join(n)}function zy(t,e){const n=Eb(e),s=gs(t),r=Ib(s);if(!ng.has(s))return[{[r]:s,...n}];const i=Object.fromEntries(Object.entries(n).map(([o,a])=>[`${t}${o==="url"?"":`${o[0].toUpperCase()}${o.slice(1)}`}`,a]));return $l(i||{}).sort((o,a)=>(o[r]?.length||0)-(a[r]?.length||0))}function Ib(t){if(wb[t]?.metaKey==="http-equiv"||Fa.HTTP_EQUIV.has(t))return"http-equiv";const e=gs(t),n=e.indexOf(":");return n===-1?"name":Fa.OG.has(e.slice(0,n))?"property":"name"}function LD(t){return MD[t]||gs(t)}function VD(t,e){return e==="refresh"?`${t.seconds};url=${t.url}`:Tb(ud(t),{keyValueSeparator:"=",entrySeparator:", ",resolve:({value:n,key:s})=>n===null?"":typeof n=="boolean"?s:void 0,...wb[e]?.unpack})}function $l(t){const e=[],n={};for(const[r,i]of Object.entries(t)){if(Array.isArray(i)){if(r==="themeColor"){i.forEach(o=>{typeof o=="object"&&o!==null&&e.push({name:"theme-color",...o})});continue}for(const o of i)if(typeof o=="object"&&o!==null){const a=[],c=[];for(const[u,h]of Object.entries(o)){const f=`${r}${u==="url"?"":`:${u}`}`,d=$l({[f]:h});(u==="url"?a:c).push(...d)}e.push(...a,...c)}else e.push(...typeof o=="string"?$l({[r]:o}):zy(r,o));continue}if(typeof i=="object"&&i)if(Fa.MEDIA.has(r)){const o=r.startsWith("twitter")?"twitter":"og",a=r.replace(/^(og|twitter)/,"").toLowerCase(),c=o==="twitter"?"name":"property";i.url&&e.push({[c]:`${o}:${a}`,content:i.url}),i.secureUrl&&e.push({[c]:`${o}:${a}:secure_url`,content:i.secureUrl});for(const[u,h]of Object.entries(i))u!=="url"&&u!=="secureUrl"&&e.push({[c]:`${o}:${a}:${u}`,content:h})}else ng.has(gs(r))?e.push(...zy(r,i)):n[r]=Eb(i);else n[r]=i}const s=Object.entries(n).map(([r,i])=>{if(r==="charset")return{charset:i===null?"_null":i};const o=Ib(r),a=LD(r),c=i===null?"_null":typeof i=="object"?VD(i,r):typeof i=="number"?i.toString():i;return o==="http-equiv"?{"http-equiv":a,content:c}:{[o]:a,content:c}});return[...e,...s].map(r=>"content"in r&&r.content==="_null"?{...r,content:null}:r)}const FD={key:"flatMeta",hooks:{"entries:normalize":t=>{const e=[];t.tags=t.tags.map(n=>n.tag!=="_flatMeta"?n:(e.push($l(n.props).map(s=>({...n,tag:"meta",props:s}))),!1)).filter(Boolean).concat(...e)}}},UD=["name","property","http-equiv"],$D=new Set(["viewport","description","keywords","robots"]);function bb(t){const e=t.split(":");return e.length?ng.has(e[1]):!1}function hd(t){const{props:e,tag:n}=t;if(OD.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(t.tag==="meta"){for(const s of UD)if(e[s]!==void 0){const r=e[s],i=r.includes(":"),o=$D.has(r),c=!(i||o)&&t.key?`:key:${t.key}`:"";return`${n}:${r}${c}`}}if(t.key)return`${n}:key:${t.key}`;if(e.id)return`${n}:id:${e.id}`;if(kD.has(n)){const s=t.textContent||t.innerHTML;if(s)return`${n}:content:${s}`}}function Ky(t){const e=t._h||t._d;if(e)return e;const n=t.textContent||t.innerHTML;return n||`${t.tag}:${Object.entries(t.props).map(([s,r])=>`${s}:${String(r)}`).join(",")}`}function jl(t,e,n){typeof t==="function"&&(!n||n!=="titleTemplate"&&!(n[0]==="o"&&n[1]==="n"))&&(t=t());let r;if(e&&(r=e(n,t)),Array.isArray(r))return r.map(i=>jl(i,e));if(r?.constructor===Object){const i={};for(const o of Object.keys(r))i[o]=jl(r[o],e,o);return i}return r}function jD(t,e){const n=t==="style"?new Map:new Set;function s(r){const i=r.trim();if(i)if(t==="style"){const[o,...a]=i.split(":").map(c=>c.trim());o&&a.length&&n.set(o,a.join(":"))}else i.split(" ").filter(Boolean).forEach(o=>n.add(o))}return typeof e=="string"?t==="style"?e.split(";").forEach(s):s(e):Array.isArray(e)?e.forEach(r=>s(r)):e&&typeof e=="object"&&Object.entries(e).forEach(([r,i])=>{i&&i!=="false"&&(t==="style"?n.set(r.trim(),i):s(r))}),n}function Sb(t,e){return t.props=t.props||{},e?t.tag==="templateParams"?(t.props=e,t):(Object.entries(e).forEach(([n,s])=>{if(s===null){t.props[n]=null;return}if(n==="class"||n==="style"){t.props[n]=jD(n,s);return}if(xD.has(n)){if(["textContent","innerHTML"].includes(n)&&typeof s=="object"){let o=e.type;if(e.type||(o="application/json"),!o?.endsWith("json")&&o!=="speculationrules")return;e.type=o,t.props.type=o,t[n]=JSON.stringify(s)}else t[n]=s;return}const r=String(s),i=n.startsWith("data-");r==="true"||r===""?t.props[n]=i?r:!0:!s&&i&&r==="false"?t.props[n]="false":s!==void 0&&(t.props[n]=s)}),t):t}function BD(t,e){const n=typeof e=="object"&&typeof e!="function"?e:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},s=Sb({tag:t,props:{}},n);return s.key&&PD.has(s.tag)&&(s.props["data-hid"]=s._h=s.key),s.tag==="script"&&typeof s.innerHTML=="object"&&(s.innerHTML=JSON.stringify(s.innerHTML),s.props.type=s.props.type||"application/json"),Array.isArray(s.props.content)?s.props.content.map(r=>({...s,props:{...s.props,content:r}})):s}function HD(t,e){if(!t)return[];typeof t=="function"&&(t=t());const n=(r,i)=>{for(let o=0;o<e.length;o++)i=e[o](r,i);return i};t=n(void 0,t);const s=[];return t=jl(t,n),Object.entries(t||{}).forEach(([r,i])=>{if(i!==void 0)for(const o of Array.isArray(i)?i:[i])s.push(BD(r,o))}),s.flat()}const Gy=(t,e)=>t._w===e._w?t._p-e._p:t._w-e._w,Qy={base:-10,title:10},qD={critical:-8,high:-1,low:2},Yy={meta:{"content-security-policy":-30,charset:-20,viewport:-15},link:{preconnect:20,stylesheet:60,preload:70,modulepreload:70,prefetch:90,"dns-prefetch":90,prerender:90},script:{async:30,defer:80,sync:50},style:{imported:40,sync:60}},WD=/@import/,$o=t=>t===""||t===!0;function zD(t,e){if(typeof e.tagPriority=="number")return e.tagPriority;let n=100;const s=qD[e.tagPriority]||0,r=t.resolvedOptions.disableCapoSorting?{link:{},script:{},style:{}}:Yy;if(e.tag in Qy)n=Qy[e.tag];else if(e.tag==="meta"){const i=e.props["http-equiv"]==="content-security-policy"?"content-security-policy":e.props.charset?"charset":e.props.name==="viewport"?"viewport":null;i&&(n=Yy.meta[i])}else e.tag==="link"&&e.props.rel?n=r.link[e.props.rel]:e.tag==="script"?$o(e.props.async)?n=r.script.async:e.props.src&&!$o(e.props.defer)&&!$o(e.props.async)&&e.props.type!=="module"&&!e.props.type?.endsWith("json")?n=r.script.sync:$o(e.props.defer)&&e.props.src&&!$o(e.props.async)&&(n=r.script.defer):e.tag==="style"&&(n=e.innerHTML&&WD.test(e.innerHTML)?r.style.imported:r.style.sync);return(n||100)+s}function Xy(t,e){const n=typeof e=="function"?e(t):e,s=n.key||String(t.plugins.size+1);t.plugins.get(s)||(t.plugins.set(s,n),t.hooks.addHooks(n.hooks||{}))}function KD(t={}){const e=ST();e.addHooks(t.hooks||{});const n=!t.document,s=new Map,r=new Map,i=new Set,o={_entryCount:1,plugins:r,dirty:!1,resolvedOptions:t,hooks:e,ssr:n,entries:s,headEntries(){return[...s.values()]},use:a=>Xy(o,a),push(a,c){const u={...c||{}};delete u.head;const h=u._index??o._entryCount++,f={_i:h,input:a,options:u},d={_poll(g=!1){o.dirty=!0,!g&&i.add(h),e.callHook("entries:updated",o)},dispose(){s.delete(h)&&o.invalidate()},patch(g){(!u.mode||u.mode==="server"&&n||u.mode==="client"&&!n)&&(f.input=g,s.set(h,f),d._poll())}};return d.patch(a),d},async resolveTags(){const a={tagMap:new Map,tags:[],entries:[...o.entries.values()]};for(await e.callHook("entries:resolve",a);i.size;){const d=i.values().next().value;i.delete(d);const g=s.get(d);if(g){const _={tags:HD(g.input,t.propResolvers||[]).map(v=>Object.assign(v,g.options)),entry:g};await e.callHook("entries:normalize",_),g._tags=_.tags.map((v,I)=>(v._w=zD(o,v),v._p=(g._i<<10)+I,v._d=hd(v),v))}}let c=!1;a.entries.flatMap(d=>(d._tags||[]).map(g=>({...g,props:{...g.props}}))).sort(Gy).reduce((d,g)=>{const _=String(g._d||g._p);if(!d.has(_))return d.set(_,g);const v=d.get(_);if((g?.tagDuplicateStrategy||(DD.has(g.tag)?"merge":null)||(g.key&&g.key===v.key?"merge":null))==="merge"){const D={...v.props};Object.entries(g.props).forEach(([O,y])=>D[O]=O==="style"?new Map([...v.props.style||new Map,...y]):O==="class"?new Set([...v.props.class||new Set,...y]):y),d.set(_,{...g,props:D})}else g._p>>10===v._p>>10&&g.tag==="meta"&&bb(_)?(d.set(_,Object.assign([...Array.isArray(v)?v:[v],g],g)),c=!0):(g._w===v._w?g._p>v._p:g?._w<v?._w)&&d.set(_,g);return d},a.tagMap);const u=a.tagMap.get("title"),h=a.tagMap.get("titleTemplate");if(o._title=u?.textContent,h){const d=h?.textContent;if(o._titleTemplate=d,d){let g=typeof d=="function"?d(u?.textContent):d;typeof g=="string"&&!o.plugins.has("template-params")&&(g=g.replace("%s",u?.textContent||"")),u?g===null?a.tagMap.delete("title"):a.tagMap.set("title",{...u,textContent:g}):(h.tag="title",h.textContent=g)}}a.tags=Array.from(a.tagMap.values()),c&&(a.tags=a.tags.flat().sort(Gy)),await e.callHook("tags:beforeResolve",a),await e.callHook("tags:resolve",a),await e.callHook("tags:afterResolve",a);const f=[];for(const d of a.tags){const{innerHTML:g,tag:_,props:v}=d;if(ND.has(_)&&!(Object.keys(v).length===0&&!d.innerHTML&&!d.textContent)&&!(_==="meta"&&!v.content&&!v["http-equiv"]&&!v.charset)){if(_==="script"&&g){if(v.type?.endsWith("json")){const I=typeof g=="string"?g:JSON.stringify(g);d.innerHTML=I.replace(/</g,"\\u003C")}else typeof g=="string"&&(d.innerHTML=g.replace(new RegExp(`</${_}`,"g"),`<\\/${_}`));d._d=hd(d)}f.push(d)}}return f},invalidate(){for(const a of s.values())i.add(a._i);o.dirty=!0,e.callHook("entries:updated",o)}};return(t?.plugins||[]).forEach(a=>Xy(o,a)),o.hooks.callHook("init",o),t.init?.forEach(a=>a&&o.push(a)),o}const Bh="%separator";function GD(t,e,n=!1){let s;if(e==="s"||e==="pageTitle")s=t.pageTitle;else if(e.includes(".")){const r=e.indexOf(".");s=t[e.substring(0,r)]?.[e.substring(r+1)]}else s=t[e];if(s!==void 0)return n?(s||"").replace(/\\/g,"\\\\").replace(/</g,"\\u003C").replace(/"/g,'\\"'):s||""}function Lc(t,e,n,s=!1){if(typeof t!="string"||!t.includes("%"))return t;let r=t;try{r=decodeURI(t)}catch{}const i=r.match(/%\w+(?:\.\w+)?/g);if(!i)return t;const o=t.includes(Bh);return t=t.replace(/%\w+(?:\.\w+)?/g,a=>{if(a===Bh||!i.includes(a))return a;const c=GD(e,a.slice(1),s);return c!==void 0?c:a}).trim(),o&&(t=t.split(Bh).map(a=>a.trim()).filter(a=>a!=="").join(n?` ${n} `:" ")),t}const QD={meta:"content",link:"href",htmlAttrs:"lang"},YD=["innerHTML","textContent"],Cb=t=>({key:"template-params",hooks:{"entries:normalize":e=>{const n=e.tags.filter(s=>s.tag==="templateParams"&&s.mode==="server")?.[0]?.props||{};Object.keys(n).length&&(t._ssrPayload={templateParams:{...t._ssrPayload?.templateParams||{},...n}})},"tags:resolve":({tagMap:e,tags:n})=>{const s=e.get("templateParams")?.props||{},r=s.separator||"|";delete s.separator,s.pageTitle=Lc(s.pageTitle||t._title||"",s,r);for(const i of n){if(i.processTemplateParams===!1)continue;const o=QD[i.tag];if(o&&typeof i.props[o]=="string")i.props[o]=Lc(i.props[o],s,r);else if(i.processTemplateParams||i.tag==="titleTemplate"||i.tag==="title")for(const a of YD)typeof i[a]=="string"&&(i[a]=Lc(i[a],s,r,i.tag==="script"&&i.props.type.endsWith("json")))}t._templateParams=s,t._separator=r},"tags:afterResolve":({tagMap:e})=>{const n=e.get("title");n?.textContent&&n.processTemplateParams!==!1&&(n.textContent=Lc(n.textContent,t._templateParams,t._separator))}}});function XD(t={}){return e=>(e.push({meta:[{name:"twitter:card",content:t.twitterCard||"summary_large_image",tagPriority:"low"},{property:"og:title",tagPriority:"low","data-infer":""},{property:"og:description",tagPriority:"low","data-infer":""}]}),{key:"infer-seo-meta",hooks:{"tags:beforeResolve":({tagMap:n})=>{let s=e._titleTemplate||e._title;const r=n.get("meta:og:title");typeof r?.props["data-infer"]<"u"&&(typeof s=="function"&&(s=s(e._title)),r.props.content=t.ogTitle?t.ogTitle(s):s||"",r.processTemplateParams=!0);const i=n.get("meta:description")?.props?.content,o=n.get("meta:og:description");typeof o?.props["data-infer"]<"u"&&(o.props.content=t.ogDescription?t.ogDescription(i):i||"",o.processTemplateParams=!0)}}})}const JD=(t,e)=>rt(e)?cn(e):e,sg="usehead";function ZD(t){return{install(n){n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(sg,t)}}.install}function Ab(){if(pu()){const t=it(sg);if(!t)throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");return t}throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")}function Rb(t,e={}){const n=e.head||Ab();return n.ssr?n.push(t||{},e):eM(n,t,e)}function eM(t,e,n={}){const s=pt(!1);let r;return YE(()=>{const o=s.value?{}:jl(e,JD);r?r.patch(o):r=t.push(o,n)}),Ns()&&(io(()=>{r.dispose()}),CE(()=>{s.value=!0}),SE(()=>{s.value=!1})),r}function tM(t={},e={}){(e.head||Ab()).use(FD);const{title:s,titleTemplate:r,...i}=t;return Rb({title:s,titleTemplate:r,_flatMeta:i},e)}function _o(t){const e=t||De();return e.ssrContext?.head||e.runWithContext(()=>{if(pu()){const n=it(sg);if(!n)throw new Error("[nuxt] [unhead] Missing Unhead instance.");return n}})}function Uu(t,e={}){const n=e.head||_o(e.nuxt);return Rb(t,{head:n,...e})}function Pb(t,e={}){const n=e.head||_o(e.nuxt);return tM(t,{head:n,...e})}const nM="modulepreload",sM=function(t,e){return new URL(t,e).href},Jy={},Mt=function(e,n,s){let r=Promise.resolve();if(n&&n.length>0){let u=function(h){return Promise.all(h.map(f=>Promise.resolve(f).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");r=u(n.map(h=>{if(h=sM(h,s),h in Jy)return;Jy[h]=!0;const f=h.endsWith(".css"),d=f?'[rel="stylesheet"]':"";if(s)for(let _=o.length-1;_>=0;_--){const v=o[_];if(v.href===h&&(!f||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${d}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":nM,f||(g.as="script"),g.crossOrigin="",g.href=h,c&&g.setAttribute("nonce",c),document.head.appendChild(g),f)return new Promise((_,v)=>{g.addEventListener("load",_),g.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${h}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};let Zc,el;function rM(){return Zc=$fetch(pp(`builds/meta/${ns().app.buildId}.json`),{responseType:"json"}),Zc.then(t=>{el=xk(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),Zc}function $u(){return Zc||rM()}async function rg(t){const e=typeof t=="string"?t:t.path;if(await $u(),!el)return console.error("[nuxt] Error creating app manifest matcher.",el),{};try{return gp({},...el.matchAll(e).reverse())}catch(n){return console.error("[nuxt] Error matching route rules.",n),{}}}async function Zy(t,e={}){if(!await Nb(t))return null;const s=await oM(t,e);return await kb(s)||null}const iM="_payload.json";async function oM(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||Fn(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const s=ns(),r=e.hash||(e.fresh?Date.now():s.app.buildId),i=s.app.cdnURL,o=i&&await Nb(t)?i:s.app.baseURL;return wu(o,n.pathname,iM+(r?`?${r}`:""))}async function kb(t){const e=fetch(t,{cache:"force-cache"}).then(n=>n.text().then(Ob));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function Nb(t=oo().path){const e=De();return t=t.replace(/\/$/,""),(await $u()).prerendered.includes(t)?!0:e.runWithContext(async()=>{const s=await rg({path:t});return!!s.prerender&&!s.redirect})}let Pr=null;async function aM(){if(Pr)return Pr;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await Ob(t.textContent||""),n=t.dataset.src?await kb(t.dataset.src):void 0;return Pr={...e,...n,...window.__NUXT__},Pr.config?.public&&(Pr.config.public=Vn(Pr.config.public)),Pr}async function Ob(t){return await AD(t,De()._payloadRevivers)}function tl(t,e){De()._payloadRevivers[t]=e}const cM=kk(()=>{tl("FirebaseTimestamp",t=>mf(new We(t.seconds,t.nanoseconds))),tl("FirebaseGeoPoint",t=>mf(new En(t.latitude,t.longitude))),tl("DocumentData",t=>{const e=typeof t=="string"?JSON.parse(t):t,n=e.id;return delete e.id,Object.defineProperty(e,"id",{value:n})})}),xb=[["NuxtError",t=>$r(t)],["EmptyShallowRef",t=>Is(t==="_"?void 0:t==="0n"?BigInt(0):Tl(t))],["EmptyRef",t=>pt(t==="_"?void 0:t==="0n"?BigInt(0):Tl(t))],["ShallowRef",t=>Is(t)],["ShallowReactive",t=>zn(t)],["Ref",t=>pt(t)],["Reactive",t=>Vn(t)]];xb.push(["Island",({key:t,params:e,result:n})=>{const s=De();return s.isHydrating||(s.payload.data[t]||=$fetch(`/__nuxt_island/${t}.json`,{responseType:"json",...e?{params:e}:{}}).then(r=>(s.payload.data[t]=r,r))),{html:"",...n}}]);const lM=tt({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const[s,r]of xb)tl(s,r);Object.assign(t.payload,([e,n]=Di(()=>t.runWithContext(aM)),e=await e,n(),e)),delete window.__NUXT__}});/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Ti=typeof document<"u";function Db(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function uM(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Db(t.default)}const Ne=Object.assign;function Hh(t,e){const n={};for(const s in e){const r=e[s];n[s]=Mn(r)?r.map(t):t(r)}return n}const ma=()=>{},Mn=Array.isArray,Mb=/#/g,hM=/&/g,fM=/\//g,dM=/=/g,pM=/\?/g,Lb=/\+/g,gM=/%5B/g,mM=/%5D/g,Vb=/%5E/g,_M=/%60/g,Fb=/%7B/g,yM=/%7C/g,Ub=/%7D/g,vM=/%20/g;function ig(t){return encodeURI(""+t).replace(yM,"|").replace(gM,"[").replace(mM,"]")}function wM(t){return ig(t).replace(Fb,"{").replace(Ub,"}").replace(Vb,"^")}function fd(t){return ig(t).replace(Lb,"%2B").replace(vM,"+").replace(Mb,"%23").replace(hM,"%26").replace(_M,"`").replace(Fb,"{").replace(Ub,"}").replace(Vb,"^")}function EM(t){return fd(t).replace(dM,"%3D")}function TM(t){return ig(t).replace(Mb,"%23").replace(pM,"%3F")}function IM(t){return t==null?"":TM(t).replace(fM,"%2F")}function Ua(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const bM=/\/$/,SM=t=>t.replace(bM,"");function qh(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=PM(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:Ua(o)}}function CM(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ev(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function AM(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Zi(e.matched[s],n.matched[r])&&$b(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Zi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function $b(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!RM(t[n],e[n]))return!1;return!0}function RM(t,e){return Mn(t)?tv(t,e):Mn(e)?tv(e,t):t===e}function tv(t,e){return Mn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function PM(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const mn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var $a;(function(t){t.pop="pop",t.push="push"})($a||($a={}));var _a;(function(t){t.back="back",t.forward="forward",t.unknown=""})(_a||(_a={}));function kM(t){if(!t)if(Ti){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),SM(t)}const NM=/^[^#]+#/;function OM(t,e){return t.replace(NM,"#")+e}function xM(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const ju=()=>({left:window.scrollX,top:window.scrollY});function DM(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=xM(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function nv(t,e){return(history.state?history.state.position-e:-1)+t}const dd=new Map;function MM(t,e){dd.set(t,e)}function LM(t){const e=dd.get(t);return dd.delete(t),e}let VM=()=>location.protocol+"//"+location.host;function jb(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),ev(c,"")}return ev(n,t)+s+r}function FM(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const g=jb(t,location),_=n.value,v=e.value;let I=0;if(d){if(n.value=g,e.value=d,o&&o===_){o=null;return}I=v?d.position-v.position:0}else s(g);r.forEach(D=>{D(n.value,_,{delta:I,type:$a.pop,direction:I?I>0?_a.forward:_a.back:_a.unknown})})};function c(){o=n.value}function u(d){r.push(d);const g=()=>{const _=r.indexOf(d);_>-1&&r.splice(_,1)};return i.push(g),g}function h(){const{history:d}=window;d.state&&d.replaceState(Ne({},d.state,{scroll:ju()}),"")}function f(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:u,destroy:f}}function sv(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?ju():null}}function UM(t){const{history:e,location:n}=window,s={value:jb(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,h){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:VM()+t+c;try{e[h?"replaceState":"pushState"](u,"",d),r.value=u}catch(g){console.error(g),n[h?"replace":"assign"](d)}}function o(c,u){const h=Ne({},e.state,sv(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,h,!0),s.value=c}function a(c,u){const h=Ne({},r.value,e.state,{forward:c,scroll:ju()});i(h.current,h,!0);const f=Ne({},sv(s.value,c,null),{position:h.position+1},u);i(c,f,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function $M(t){t=kM(t);const e=UM(t),n=FM(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=Ne({location:"",base:t,go:s,createHref:OM.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function jM(t){return typeof t=="string"||t&&typeof t=="object"}function Bb(t){return typeof t=="string"||typeof t=="symbol"}const Hb=Symbol("");var rv;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(rv||(rv={}));function eo(t,e){return Ne(new Error,{type:t,[Hb]:!0},e)}function cs(t,e){return t instanceof Error&&Hb in t&&(e==null||!!(t.type&e))}const iv="[^/]+?",BM={sensitive:!1,strict:!1,start:!0,end:!0},HM=/[.+*?^${}()[\]/\\]/g;function qM(t,e){const n=Ne({},BM,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let f=0;f<u.length;f++){const d=u[f];let g=40+(n.sensitive?.25:0);if(d.type===0)f||(r+="/"),r+=d.value.replace(HM,"\\$&"),g+=40;else if(d.type===1){const{value:_,repeatable:v,optional:I,regexp:D}=d;i.push({name:_,repeatable:v,optional:I});const O=D||iv;if(O!==iv){g+=10;try{new RegExp(`(${O})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${_}" (${O}): `+S.message)}}let y=v?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;f||(y=I&&u.length<2?`(?:/${y})`:"/"+y),I&&(y+="?"),r+=y,g+=20,I&&(g+=-8),v&&(g+=-20),O===".*"&&(g+=-50)}h.push(g)}s.push(h)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const h=u.match(o),f={};if(!h)return null;for(let d=1;d<h.length;d++){const g=h[d]||"",_=i[d-1];f[_.name]=g&&_.repeatable?g.split("/"):g}return f}function c(u){let h="",f=!1;for(const d of t){(!f||!h.endsWith("/"))&&(h+="/"),f=!1;for(const g of d)if(g.type===0)h+=g.value;else if(g.type===1){const{value:_,repeatable:v,optional:I}=g,D=_ in u?u[_]:"";if(Mn(D)&&!v)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const O=Mn(D)?D.join("/"):D;if(!O)if(I)d.length<2&&(h.endsWith("/")?h=h.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);h+=O}}return h||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function WM(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function qb(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=WM(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(ov(s))return 1;if(ov(r))return-1}return r.length-s.length}function ov(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const zM={type:0,value:""},KM=/[a-zA-Z0-9_]/;function GM(t){if(!t)return[[]];if(t==="/")return[[zM]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,u="",h="";function f(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),o()):c===":"?(f(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:KM.test(c)?d():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:n=3:h+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),r}function QM(t,e,n){const s=qM(GM(t.path),n),r=Ne(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function YM(t,e){const n=[],s=new Map;e=uv({strict:!1,end:!0,sensitive:!1},e);function r(f){return s.get(f)}function i(f,d,g){const _=!g,v=cv(f);v.aliasOf=g&&g.record;const I=uv(e,f),D=[v];if("alias"in f){const S=typeof f.alias=="string"?[f.alias]:f.alias;for(const x of S)D.push(cv(Ne({},v,{components:g?g.record.components:v.components,path:x,aliasOf:g?g.record:v})))}let O,y;for(const S of D){const{path:x}=S;if(d&&x[0]!=="/"){const L=d.record.path,b=L[L.length-1]==="/"?"":"/";S.path=d.record.path+(x&&b+x)}if(O=QM(S,d,I),g?g.alias.push(O):(y=y||O,y!==O&&y.alias.push(O),_&&f.name&&!lv(O)&&o(f.name)),Wb(O)&&c(O),v.children){const L=v.children;for(let b=0;b<L.length;b++)i(L[b],O,g&&g.children[b])}g=g||O}return y?()=>{o(y)}:ma}function o(f){if(Bb(f)){const d=s.get(f);d&&(s.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&s.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const d=ZM(f,n);n.splice(d,0,f),f.record.name&&!lv(f)&&s.set(f.record.name,f)}function u(f,d){let g,_={},v,I;if("name"in f&&f.name){if(g=s.get(f.name),!g)throw eo(1,{location:f});I=g.record.name,_=Ne(av(d.params,g.keys.filter(y=>!y.optional).concat(g.parent?g.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),f.params&&av(f.params,g.keys.map(y=>y.name))),v=g.stringify(_)}else if(f.path!=null)v=f.path,g=n.find(y=>y.re.test(v)),g&&(_=g.parse(v),I=g.record.name);else{if(g=d.name?s.get(d.name):n.find(y=>y.re.test(d.path)),!g)throw eo(1,{location:f,currentLocation:d});I=g.record.name,_=Ne({},d.params,f.params),v=g.stringify(_)}const D=[];let O=g;for(;O;)D.unshift(O.record),O=O.parent;return{name:I,path:v,params:_,matched:D,meta:JM(D)}}t.forEach(f=>i(f));function h(){n.length=0,s.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:r}}function av(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function cv(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:XM(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function XM(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function lv(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function JM(t){return t.reduce((e,n)=>Ne(e,n.meta),{})}function uv(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function ZM(t,e){let n=0,s=e.length;for(;n!==s;){const i=n+s>>1;qb(t,e[i])<0?s=i:n=i+1}const r=eL(t);return r&&(s=e.lastIndexOf(r,s-1)),s}function eL(t){let e=t;for(;e=e.parent;)if(Wb(e)&&qb(t,e)===0)return e}function Wb({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function tL(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Lb," "),o=i.indexOf("="),a=Ua(o<0?i:i.slice(0,o)),c=o<0?null:Ua(i.slice(o+1));if(a in e){let u=e[a];Mn(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function hv(t){let e="";for(let n in t){const s=t[n];if(n=EM(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Mn(s)?s.map(i=>i&&fd(i)):[s&&fd(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function nL(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Mn(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const sL=Symbol(""),fv=Symbol(""),og=Symbol(""),ag=Symbol(""),pd=Symbol("");function jo(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ws(t,e,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((a,c)=>{const u=d=>{d===!1?c(eo(4,{from:n,to:e})):d instanceof Error?c(d):jM(d)?c(eo(2,{from:e,to:d})):(o&&s.enterCallbacks[r]===o&&typeof d=="function"&&o.push(d),a())},h=i(()=>t.call(s&&s.instances[r],e,n,u));let f=Promise.resolve(h);t.length<3&&(f=f.then(u)),f.catch(d=>c(d))})}function Wh(t,e,n,s,r=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Db(c)){const h=(c.__vccOpts||c)[e];h&&i.push(Ws(h,n,s,o,a,r))}else{let u=c();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=uM(h)?h.default:h;o.mods[a]=h,o.components[a]=f;const g=(f.__vccOpts||f)[e];return g&&Ws(g,n,s,o,a,r)()}))}}return i}function dv(t){const e=it(og),n=it(ag),s=Le(()=>{const c=Ge(t.to);return e.resolve(c)}),r=Le(()=>{const{matched:c}=s.value,{length:u}=c,h=c[u-1],f=n.matched;if(!h||!f.length)return-1;const d=f.findIndex(Zi.bind(null,h));if(d>-1)return d;const g=pv(c[u-2]);return u>1&&pv(h)===g&&f[f.length-1].path!==g?f.findIndex(Zi.bind(null,c[u-2])):d}),i=Le(()=>r.value>-1&&cL(n.params,s.value.params)),o=Le(()=>r.value>-1&&r.value===n.matched.length-1&&$b(n.params,s.value.params));function a(c={}){if(aL(c)){const u=e[Ge(t.replace)?"replace":"push"](Ge(t.to)).catch(ma);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:Le(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}function rL(t){return t.length===1?t[0]:t}const iL=sn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:dv,setup(t,{slots:e}){const n=Vn(dv(t)),{options:s}=it(og),r=Le(()=>({[gv(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[gv(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&rL(e.default(n));return t.custom?i:Je("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),oL=iL;function aL(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function cL(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Mn(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function pv(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const gv=(t,e,n)=>t??e??n,lL=sn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=it(pd),r=Le(()=>t.route||s.value),i=it(fv,0),o=Le(()=>{let u=Ge(i);const{matched:h}=r.value;let f;for(;(f=h[u])&&!f.components;)u++;return u}),a=Le(()=>r.value.matched[o.value]);nr(fv,Le(()=>o.value+1)),nr(sL,a),nr(pd,r);const c=pt();return kn(()=>[c.value,a.value,t.name],([u,h,f],[d,g,_])=>{h&&(h.instances[f]=u,g&&g!==h&&u&&u===d&&(h.leaveGuards.size||(h.leaveGuards=g.leaveGuards),h.updateGuards.size||(h.updateGuards=g.updateGuards))),u&&h&&(!g||!Zi(h,g)||!d)&&(h.enterCallbacks[f]||[]).forEach(v=>v(u))},{flush:"post"}),()=>{const u=r.value,h=t.name,f=a.value,d=f&&f.components[h];if(!d)return mv(n.default,{Component:d,route:u});const g=f.props[h],_=g?g===!0?u.params:typeof g=="function"?g(u):g:null,I=Je(d,Ne({},_,e,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(f.instances[h]=null)},ref:c}));return mv(n.default,{Component:I,route:u})||I}}});function mv(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const zb=lL;function uL(t){const e=YM(t.routes,t),n=t.parseQuery||tL,s=t.stringifyQuery||hv,r=t.history,i=jo(),o=jo(),a=jo(),c=Is(mn);let u=mn;Ti&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Hh.bind(null,$=>""+$),f=Hh.bind(null,IM),d=Hh.bind(null,Ua);function g($,ee){let Y,ie;return Bb($)?(Y=e.getRecordMatcher($),ie=ee):ie=$,e.addRoute(ie,Y)}function _($){const ee=e.getRecordMatcher($);ee&&e.removeRoute(ee)}function v(){return e.getRoutes().map($=>$.record)}function I($){return!!e.getRecordMatcher($)}function D($,ee){if(ee=Ne({},ee||c.value),typeof $=="string"){const N=qh(n,$,ee.path),V=e.resolve({path:N.path},ee),B=r.createHref(N.fullPath);return Ne(N,V,{params:d(V.params),hash:Ua(N.hash),redirectedFrom:void 0,href:B})}let Y;if($.path!=null)Y=Ne({},$,{path:qh(n,$.path,ee.path).path});else{const N=Ne({},$.params);for(const V in N)N[V]==null&&delete N[V];Y=Ne({},$,{params:f(N)}),ee.params=f(ee.params)}const ie=e.resolve(Y,ee),Re=$.hash||"";ie.params=h(d(ie.params));const Ue=CM(s,Ne({},$,{hash:wM(Re),path:ie.path})),R=r.createHref(Ue);return Ne({fullPath:Ue,hash:Re,query:s===hv?nL($.query):$.query||{}},ie,{redirectedFrom:void 0,href:R})}function O($){return typeof $=="string"?qh(n,$,c.value.path):Ne({},$)}function y($,ee){if(u!==$)return eo(8,{from:ee,to:$})}function S($){return b($)}function x($){return S(Ne(O($),{replace:!0}))}function L($){const ee=$.matched[$.matched.length-1];if(ee&&ee.redirect){const{redirect:Y}=ee;let ie=typeof Y=="function"?Y($):Y;return typeof ie=="string"&&(ie=ie.includes("?")||ie.includes("#")?ie=O(ie):{path:ie},ie.params={}),Ne({query:$.query,hash:$.hash,params:ie.path!=null?{}:$.params},ie)}}function b($,ee){const Y=u=D($),ie=c.value,Re=$.state,Ue=$.force,R=$.replace===!0,N=L(Y);if(N)return b(Ne(O(N),{state:typeof N=="object"?Ne({},Re,N.state):Re,force:Ue,replace:R}),ee||Y);const V=Y;V.redirectedFrom=ee;let B;return!Ue&&AM(s,ie,Y)&&(B=eo(16,{to:V,from:ie}),rn(ie,ie,!0,!1)),(B?Promise.resolve(B):A(V,ie)).catch(U=>cs(U)?cs(U,2)?U:Un(U):ne(U,V,ie)).then(U=>{if(U){if(cs(U,2))return b(Ne({replace:R},O(U.to),{state:typeof U.to=="object"?Ne({},Re,U.to.state):Re,force:Ue}),ee||V)}else U=P(V,ie,!0,R,Re);return k(V,ie,U),U})}function T($,ee){const Y=y($,ee);return Y?Promise.reject(Y):Promise.resolve()}function E($){const ee=bn.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext($):$()}function A($,ee){let Y;const[ie,Re,Ue]=hL($,ee);Y=Wh(ie.reverse(),"beforeRouteLeave",$,ee);for(const N of ie)N.leaveGuards.forEach(V=>{Y.push(Ws(V,$,ee))});const R=T.bind(null,$,ee);return Y.push(R),Ot(Y).then(()=>{Y=[];for(const N of i.list())Y.push(Ws(N,$,ee));return Y.push(R),Ot(Y)}).then(()=>{Y=Wh(Re,"beforeRouteUpdate",$,ee);for(const N of Re)N.updateGuards.forEach(V=>{Y.push(Ws(V,$,ee))});return Y.push(R),Ot(Y)}).then(()=>{Y=[];for(const N of Ue)if(N.beforeEnter)if(Mn(N.beforeEnter))for(const V of N.beforeEnter)Y.push(Ws(V,$,ee));else Y.push(Ws(N.beforeEnter,$,ee));return Y.push(R),Ot(Y)}).then(()=>($.matched.forEach(N=>N.enterCallbacks={}),Y=Wh(Ue,"beforeRouteEnter",$,ee,E),Y.push(R),Ot(Y))).then(()=>{Y=[];for(const N of o.list())Y.push(Ws(N,$,ee));return Y.push(R),Ot(Y)}).catch(N=>cs(N,8)?N:Promise.reject(N))}function k($,ee,Y){a.list().forEach(ie=>E(()=>ie($,ee,Y)))}function P($,ee,Y,ie,Re){const Ue=y($,ee);if(Ue)return Ue;const R=ee===mn,N=Ti?history.state:{};Y&&(ie||R?r.replace($.fullPath,Ne({scroll:R&&N&&N.scroll},Re)):r.push($.fullPath,Re)),c.value=$,rn($,ee,Y,R),Un()}let C;function le(){C||(C=r.listen(($,ee,Y)=>{if(!xs.listening)return;const ie=D($),Re=L(ie);if(Re){b(Ne(Re,{replace:!0,force:!0}),ie).catch(ma);return}u=ie;const Ue=c.value;Ti&&MM(nv(Ue.fullPath,Y.delta),ju()),A(ie,Ue).catch(R=>cs(R,12)?R:cs(R,2)?(b(Ne(O(R.to),{force:!0}),ie).then(N=>{cs(N,20)&&!Y.delta&&Y.type===$a.pop&&r.go(-1,!1)}).catch(ma),Promise.reject()):(Y.delta&&r.go(-Y.delta,!1),ne(R,ie,Ue))).then(R=>{R=R||P(ie,Ue,!1),R&&(Y.delta&&!cs(R,8)?r.go(-Y.delta,!1):Y.type===$a.pop&&cs(R,20)&&r.go(-1,!1)),k(ie,Ue,R)}).catch(ma)}))}let _e=jo(),se=jo(),fe;function ne($,ee,Y){Un($);const ie=se.list();return ie.length?ie.forEach(Re=>Re($,ee,Y)):console.error($),Promise.reject($)}function Fe(){return fe&&c.value!==mn?Promise.resolve():new Promise(($,ee)=>{_e.add([$,ee])})}function Un($){return fe||(fe=!$,le(),_e.list().forEach(([ee,Y])=>$?Y($):ee()),_e.reset()),$}function rn($,ee,Y,ie){const{scrollBehavior:Re}=t;if(!Ti||!Re)return Promise.resolve();const Ue=!Y&&LM(nv($.fullPath,0))||(ie||!Y)&&history.state&&history.state.scroll||null;return zr().then(()=>Re($,ee,Ue)).then(R=>R&&DM(R)).catch(R=>ne(R,$,ee))}const St=$=>r.go($);let rs;const bn=new Set,xs={currentRoute:c,listening:!0,addRoute:g,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:I,getRoutes:v,resolve:D,options:t,push:S,replace:x,go:St,back:()=>St(-1),forward:()=>St(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:se.add,isReady:Fe,install($){const ee=this;$.component("RouterLink",oL),$.component("RouterView",zb),$.config.globalProperties.$router=ee,Object.defineProperty($.config.globalProperties,"$route",{enumerable:!0,get:()=>Ge(c)}),Ti&&!rs&&c.value===mn&&(rs=!0,S(r.location).catch(Re=>{}));const Y={};for(const Re in mn)Object.defineProperty(Y,Re,{get:()=>c.value[Re],enumerable:!0});$.provide(og,ee),$.provide(ag,zn(Y)),$.provide(pd,c);const ie=$.unmount;bn.add($),$.unmount=function(){bn.delete($),bn.size<1&&(u=mn,C&&C(),C=null,c.value=mn,rs=!1,fe=!1),ie()}}};function Ot($){return $.reduce((ee,Y)=>ee.then(()=>E(Y)),Promise.resolve())}return xs}function hL(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>Zi(u,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Zi(u,c))||r.push(c))}return[n,s,r]}function Kb(t){return it(ag)}const Gb=(t,e)=>({default:()=>t?Je(q0,t===!0?{}:t,e):e.default?.()}),fL=/(:\w+)\([^)]+\)/g,dL=/(:\w+)[?+*]/g,pL=/:\w+/g;function _v(t){const e=t?.meta.key??t.path.replace(fL,"$1").replace(dL,"$1").replace(pL,n=>t.params[n.slice(1)]?.toString()||"");return typeof e=="function"?e(t):e}function gL(t,e){return t===e||e===mn?!1:_v(t)!==_v(e)?!0:!t.matched.every((s,r)=>s.components&&s.components.default===e.matched[r]?.components?.default)}const gd=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),mL=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),Bu=t=>{const e=De();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{gd(()=>t())}):gd(()=>t())},_L="$s";function cg(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,s]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(s!==void 0&&typeof s!="function")throw new Error("[nuxt] [useState] init must be a function: "+s);const r=_L+n,i=De(),o=pE(i.payload.state,r);if(o.value===void 0&&s){const a=s();if(rt(a))return i.payload.state[r]=a,a;o.value=a}return o}function yL(t){if(t?.__asyncLoader&&!t.__asyncResolved)return t.__asyncLoader()}async function Qb(t,e=Wt()){const{path:n,matched:s}=e.resolve(t);if(!s.length||(e._routePreloaded||=new Set,e._routePreloaded.has(n)))return;const r=e._preloadPromises||=[];if(r.length>4)return Promise.all(r).then(()=>Qb(t,e));e._routePreloaded.add(n);for(const i of s){const o=i.components?.default;if(typeof o!="function")continue;const a=Promise.resolve(o()).catch(()=>{}).finally(()=>r.splice(r.indexOf(a)));r.push(a)}await Promise.all(r)}function vL(t={}){const e=t.path||window.location.pathname;let n={};try{n=Tl(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||n?.path!==e||n?.expires<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:De().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const wL={scrollBehavior(t,e,n){const s=De(),r=Wt().options?.scrollBehaviorType??"auto";if(t.path.replace(/\/$/,"")===e.path.replace(/\/$/,""))return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:Yb(t.hash),behavior:r}:!1;if((typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop)===!1)return!1;const o=s._runningTransition?"page:transition:finish":"page:loading:end";return new Promise(a=>{if(e===mn){a(yv(t,e,n,r));return}s.hooks.hookOnce(o,()=>{requestAnimationFrame(()=>a(yv(t,e,n,r)))})})}};function Yb(t){try{const e=document.querySelector(t);if(e)return(Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}function yv(t,e,n,s){if(n)return n;const r=gL(t,e);return t.hash?{el:t.hash,top:Yb(t.hash),behavior:r?s:"instant"}:{left:0,top:0}}const EL={hashMode:!1,scrollBehaviorType:"auto"},js={...EL,...wL},TL=(...t)=>t.find(e=>e!==void 0);function IL(t){const e=t.componentName||"NuxtLink";function n(i){return typeof i=="string"&&i.startsWith("#")}function s(i,o,a){const c=a??t.trailingSlash;if(!i||c!=="append"&&c!=="remove")return i;if(typeof i=="string")return Vc(i,c);const u="path"in i&&i.path!==void 0?i.path:o(i).path;return{...i,name:void 0,path:Vc(u,c)}}function r(i){const o=Wt(),a=ns(),c=Le(()=>!!i.target&&i.target!=="_self"),u=Le(()=>{const I=i.to||i.href||"";return typeof I=="string"&&Fn(I,{acceptRelative:!0})}),h=zm("RouterLink"),f=typeof h!="string"?h.useLink:void 0,d=Le(()=>{if(i.external)return!0;const I=i.to||i.href||"";return typeof I=="object"?!1:I===""||u.value}),g=Le(()=>{const I=i.to||i.href||"";return d.value?I:s(I,o.resolve,i.trailingSlash)}),_=d.value?void 0:f?.({...i,to:g}),v=Le(()=>{const I=i.trailingSlash??t.trailingSlash;if(!g.value||u.value||n(g.value))return g.value;if(d.value){const D=typeof g.value=="object"&&"path"in g.value?Vf(g.value):g.value,O=typeof D=="object"?o.resolve(D).href:D;return Vc(O,I)}return typeof g.value=="object"?o.resolve(g.value)?.href??null:Vc(wu(a.app.baseURL,g.value),I)});return{to:g,hasTarget:c,isAbsoluteUrl:u,isExternal:d,href:v,isActive:_?.isActive??Le(()=>g.value===o.currentRoute.value.path),isExactActive:_?.isExactActive??Le(()=>g.value===o.currentRoute.value.path),route:_?.route??Le(()=>o.resolve(g.value)),async navigate(I){await Lf(v.value,{replace:i.replace,external:d.value||c.value})}}}return sn({name:e,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},prefetchOn:{type:[String,Object],default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1},trailingSlash:{type:String,default:void 0,required:!1}},useLink:r,setup(i,{slots:o}){const a=Wt(),{to:c,href:u,navigate:h,isExternal:f,hasTarget:d,isAbsoluteUrl:g}=r(i),_=Is(!1),v=pt(null),I=y=>{v.value=i.custom?y?.$el?.nextElementSibling:y?.$el};function D(y){return!_.value&&(typeof i.prefetchOn=="string"?i.prefetchOn===y:i.prefetchOn?.[y]??t.prefetchOn?.[y])&&(i.prefetch??t.prefetch)!==!1&&i.noPrefetch!==!0&&i.target!=="_blank"&&!AL()}async function O(y=De()){if(_.value)return;_.value=!0;const S=typeof c.value=="string"?c.value:f.value?Vf(c.value):a.resolve(c.value).fullPath,x=f.value?new URL(S,window.location.href).href:S;await Promise.all([y.hooks.callHook("link:prefetch",x).catch(()=>{}),!f.value&&!d.value&&Qb(c.value,a).catch(()=>{})])}if(D("visibility")){const y=De();let S,x=null;Qa(()=>{const L=SL();Bu(()=>{S=gd(()=>{v?.value?.tagName&&(x=L.observe(v.value,async()=>{x?.(),x=null,await O(y)}))})})}),io(()=>{S&&mL(S),x?.(),x=null})}return()=>{if(!f.value&&!d.value&&!n(c.value)){const x={ref:I,to:c.value,activeClass:i.activeClass||t.activeClass,exactActiveClass:i.exactActiveClass||t.exactActiveClass,replace:i.replace,ariaCurrentValue:i.ariaCurrentValue,custom:i.custom};return i.custom||(D("interaction")&&(x.onPointerenter=O.bind(null,void 0),x.onFocus=O.bind(null,void 0)),_.value&&(x.class=i.prefetchedClass||t.prefetchedClass),x.rel=i.rel||void 0),Je(zm("RouterLink"),x,o.default)}const y=i.target||null,S=TL(i.noRel?"":i.rel,t.externalRelAttribute,g.value||d.value?"noopener noreferrer":"")||null;return i.custom?o.default?o.default({href:u.value,navigate:h,prefetch:O,get route(){if(!u.value)return;const x=new URL(u.value,window.location.href);return{path:x.pathname,fullPath:x.pathname,get query(){return fp(x.search)},hash:x.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:u.value}},rel:S,target:y,isExternal:f.value||d.value,isActive:!1,isExactActive:!1}):null:Je("a",{ref:v,href:u.value||null,rel:S,target:y,onClick:x=>{if(!(f.value||d.value))return x.preventDefault(),i.replace?a.replace(u.value):a.push(u.value)}},o.default?.())}}})}const bL=IL(Tk);function Vc(t,e){const n=e==="append"?vu:hr;return Fn(t)&&!t.startsWith("http")?t:n(t,!0)}function SL(){const t=De();if(t._observer)return t._observer;let e=null;const n=new Map,s=(i,o)=>(e||=new IntersectionObserver(a=>{for(const c of a){const u=n.get(c.target);(c.isIntersecting||c.intersectionRatio>0)&&u&&u()}}),n.set(i,o),e.observe(i),()=>{n.delete(i),e?.unobserve(i),n.size===0&&(e?.disconnect(),e=null)});return t._observer={observe:s}}const CL=/2g/;function AL(){const t=navigator.connection;return!!(t&&(t.saveData||CL.test(t.effectiveType)))}const RL={nuxt:{},icon:{provider:"iconify",class:"",aliases:{},iconifyApiEndpoint:"https://api.iconify.design",localApiEndpoint:"/api/_nuxt_icon",fallbackToApi:!0,cssSelectorPrefix:"i-",cssWherePseudo:!0,mode:"css",attrs:{"aria-hidden":!0},collections:["academicons","akar-icons","ant-design","arcticons","basil","bi","bitcoin-icons","bpmn","brandico","bx","bxl","bxs","bytesize","carbon","catppuccin","cbi","charm","ci","cib","cif","cil","circle-flags","circum","clarity","codicon","covid","cryptocurrency","cryptocurrency-color","dashicons","devicon","devicon-plain","ei","el","emojione","emojione-monotone","emojione-v1","entypo","entypo-social","eos-icons","ep","et","eva","f7","fa","fa-brands","fa-regular","fa-solid","fa6-brands","fa6-regular","fa6-solid","fad","fe","feather","file-icons","flag","flagpack","flat-color-icons","flat-ui","flowbite","fluent","fluent-emoji","fluent-emoji-flat","fluent-emoji-high-contrast","fluent-mdl2","fontelico","fontisto","formkit","foundation","fxemoji","gala","game-icons","geo","gg","gis","gravity-ui","gridicons","grommet-icons","guidance","healthicons","heroicons","heroicons-outline","heroicons-solid","hugeicons","humbleicons","ic","icomoon-free","icon-park","icon-park-outline","icon-park-solid","icon-park-twotone","iconamoon","iconoir","icons8","il","ion","iwwa","jam","la","lets-icons","line-md","logos","ls","lucide","lucide-lab","mage","majesticons","maki","map","marketeq","material-symbols","material-symbols-light","mdi","mdi-light","medical-icon","memory","meteocons","mi","mingcute","mono-icons","mynaui","nimbus","nonicons","noto","noto-v1","octicon","oi","ooui","openmoji","oui","pajamas","pepicons","pepicons-pencil","pepicons-pop","pepicons-print","ph","pixelarticons","prime","ps","quill","radix-icons","raphael","ri","rivet-icons","si-glyph","simple-icons","simple-line-icons","skill-icons","solar","streamline","streamline-emojis","subway","svg-spinners","system-uicons","tabler","tdesign","teenyicons","token","token-branded","topcoat","twemoji","typcn","uil","uim","uis","uit","uiw","unjs","vaadin","vs","vscode-icons","websymbol","weui","whh","wi","wpf","zmdi","zondicons"],fetchTimeout:1500}},PL=Dk(RL);function nc(){const t=De();return t._appConfig||=Vn(PL),t._appConfig}function kL(t){typeof t.indexable<"u"&&(t.indexable=String(t.indexable)!=="false"),typeof t.trailingSlash<"u"&&!t.trailingSlash&&(t.trailingSlash=String(t.trailingSlash)!=="false"),t.url&&!Fn(String(t.url),{acceptRelative:!0,strict:!1})&&(t.url=BP(String(t.url)));const e=Object.keys(t).sort((s,r)=>s.localeCompare(r)),n={};for(const s of e)n[s]=t[s];return n}function NL(t){const n=[];function s(i){if(!i||typeof i!="object"||Object.keys(i).length===0)return()=>{};i._context;const o={};for(const c in i){const u=i[c];typeof u<"u"&&u!==""&&(o[c]=u)}let a;return Object.keys(o).filter(c=>!c.startsWith("_")).length>0&&(a=n.push(o)),()=>{typeof a<"u"&&n.splice(a-1,1)}}function r(i){const o={};i?.debug&&(o._context={}),o._priority={};for(const a in n.sort((c,u)=>(c._priority||0)-(u._priority||0)))for(const c in n[a]){const u=c,h=i?.resolveRefs?cn(n[a][c]):n[a][c];!c.startsWith("_")&&typeof h<"u"&&h!==""&&(o[c]=h,typeof n[a]._priority<"u"&&n[a]._priority!==-1&&(o._priority[u]=n[a]._priority),i?.debug&&(o._context[u]=n[a]._context?.[u]||n[a]._context||"anonymous"))}return i?.skipNormalize?o:kL(o)}return{stack:n,push:s,get:r}}const OL=tt({name:"nuxt-site-config:init",enforce:"pre",async setup(t){const e=NL(),n=cg("site-config");{const s=n.value||window.__NUXT_SITE_CONFIG__||{};for(const r in s)r[0]!=="_"&&e.push({[r]:s[r],_priority:s._priority?.[r]||-1})}return{provide:{nuxtSiteConfig:e}}}});async function lg(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const s={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",s),!!s.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async r=>{const i=new Map,o=new Promise(g=>{t.resolveTags().then(_=>{g(_.map(v=>{const I=i.get(v._d)||0,D={tag:v,id:(I?`${v._d}:${I}`:v._d)||Ky(v),shouldRender:!0};return v._d&&bb(v._d)&&i.set(v._d,I+1),D}))})});let a=t._dom;if(!a){a={title:n.title,elMap:new Map().set("htmlAttrs",n.documentElement).set("bodyAttrs",n.body)};for(const g of["body","head"]){const _=n[g]?.children;for(const v of _){const I=v.tagName.toLowerCase();if(!Wy.has(I))continue;const D=Sb({tag:I,props:{}},{innerHTML:v.innerHTML,...v.getAttributeNames().reduce((O,y)=>(O[y]=v.getAttribute(y),O),{})||{}});if(D.key=v.getAttribute("data-hid")||void 0,D._d=hd(D)||Ky(D),a.elMap.has(D._d)){let O=1,y=D._d;for(;a.elMap.has(y);)y=`${D._d}:${O++}`;a.elMap.set(y,v)}else a.elMap.set(D._d,v)}}}a.pendingSideEffects={...a.sideEffects},a.sideEffects={};function c(g,_,v){const I=`${g}:${_}`;a.sideEffects[I]=v,delete a.pendingSideEffects[I]}function u({id:g,$el:_,tag:v}){const I=v.tag.endsWith("Attrs");a.elMap.set(g,_),I||(v.textContent&&v.textContent!==_.textContent&&(_.textContent=v.textContent),v.innerHTML&&v.innerHTML!==_.innerHTML&&(_.innerHTML=v.innerHTML),c(g,"el",()=>{_?.remove(),a.elMap.delete(g)}));for(const D in v.props){if(!Object.prototype.hasOwnProperty.call(v.props,D))continue;const O=v.props[D];if(D.startsWith("on")&&typeof O=="function"){const S=_?.dataset;if(S&&S[`${D}fired`]){const x=D.slice(0,-5);O.call(_,new Event(x.substring(2)))}_.getAttribute(`data-${D}`)!==""&&((v.tag==="bodyAttrs"?n.defaultView:_).addEventListener(D.substring(2),O.bind(_)),_.setAttribute(`data-${D}`,""));continue}const y=`attr:${D}`;if(D==="class"){if(!O)continue;for(const S of O)I&&c(g,`${y}:${S}`,()=>_.classList.remove(S)),!_.classList.contains(S)&&_.classList.add(S)}else if(D==="style"){if(!O)continue;for(const[S,x]of O)c(g,`${y}:${S}`,()=>{_.style.removeProperty(S)}),_.style.setProperty(S,x)}else O!==!1&&O!==null&&(_.getAttribute(D)!==O&&_.setAttribute(D,O===!0?"":String(O)),I&&c(g,y,()=>_.removeAttribute(D)))}}const h=[],f={bodyClose:void 0,bodyOpen:void 0,head:void 0},d=await o;for(const g of d){const{tag:_,shouldRender:v,id:I}=g;if(v){if(_.tag==="title"){n.title=_.textContent,c("title","",()=>n.title=a.title);continue}g.$el=g.$el||a.elMap.get(I),g.$el?u(g):Wy.has(_.tag)&&h.push(g)}}for(const g of h){const _=g.tag.tagPosition||"head";g.$el=n.createElement(g.tag.tag),u(g),f[_]=f[_]||n.createDocumentFragment(),f[_].appendChild(g.$el)}for(const g of d)await t.hooks.callHook("dom:renderTag",g,n,c);f.head&&n.head.appendChild(f.head),f.bodyOpen&&n.body.insertBefore(f.bodyOpen,n.body.firstChild),f.bodyClose&&n.body.appendChild(f.bodyClose);for(const g in a.pendingSideEffects)a.pendingSideEffects[g]();t._dom=a,await t.hooks.callHook("dom:rendered",{renders:d}),r()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function xL(t={}){const e=t.domOptions?.render||lg;t.document=t.document||(typeof window<"u"?document:void 0);const n=t.document?.head.querySelector('script[id="unhead:payload"]')?.innerHTML||!1;return KD({...t,plugins:[...t.plugins||[],{key:"client",hooks:{"entries:updated":e}}],init:[n?JSON.parse(n):!1,...t.init||[]]})}function DL(t,e){let n=0;return()=>{const s=++n;e(()=>{n===s&&t()})}}function ML(t={}){const e=xL({domOptions:{render:DL(()=>lg(e),n=>setTimeout(n,0))},...t});return e.install=ZD(e),e}const LL={disableDefaults:!0},VL=tt({name:"nuxt:head",enforce:"pre",setup(t){const e=ML(LL);t.vueApp.use(e);{let n=!0;const s=async()=>{n=!1,await lg(e)};e.hooks.hook("dom:beforeRender",r=>{r.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||s()}),t.hooks.hook("app:error",s),t.hooks.hook("app:suspense:resolve",s)}}}),FL=/(:\w+)\([^)]+\)/g,UL=/(:\w+)[?+*]/g,$L=/:\w+/g,jL=(t,e)=>e.path.replace(FL,"$1").replace(UL,"$1").replace($L,n=>t.params[n.slice(1)]?.toString()||""),md=(t,e)=>{const n=t.route.matched.find(r=>r.components?.default===t.Component.type),s=e??n?.meta.key??(n&&jL(t.route,n));return typeof s=="function"?s(t.route):s},BL=(t,e)=>({default:()=>t?Je(jR,t===!0?{}:t,e):e});function ug(t){return Array.isArray(t)?t:[t]}const HL={layout:"cyber"},qL={layout:"cyber",ssr:!1},zh=[{name:"index",path:"/",meta:HL||{},component:()=>Mt(()=>import("./BXWs4A9y.js"),__vite__mapDeps([0,1,2]),import.meta.url)},{name:"login",path:"/login",component:()=>Mt(()=>import("./BdhpqQT5.js"),[],import.meta.url)},{name:"admin",path:"/admin",component:()=>Mt(()=>import("./EqW6HAzG.js"),[],import.meta.url)},{name:"admin-sites",path:"/admin/sites",component:()=>Mt(()=>import("./CkqVzrLm.js"),[],import.meta.url)},{name:"site-siteId-about",path:"/site/:siteId()/about",component:()=>Mt(()=>import("./D1W-mH0H.js"),[],import.meta.url)},{name:"site-siteId",path:"/site/:siteId()",component:()=>Mt(()=>import("./DZTWU3L8.js"),__vite__mapDeps([3,4,5,6,7,1,2]),import.meta.url)},{name:"site-siteId-contact",path:"/site/:siteId()/contact",component:()=>Mt(()=>import("./BBQTAIHI.js"),[],import.meta.url)},{name:"site-siteId-blog",path:"/site/:siteId()/blog",component:()=>Mt(()=>import("./BWo5Ux8C.js"),[],import.meta.url)},{name:"site-siteId-blog-slug",path:"/site/:siteId()/blog/:slug()",component:()=>Mt(()=>import("./BRlFWlyX.js"),[],import.meta.url)},{name:"site-siteId-articles",path:"/site/:siteId()/articles",meta:qL||{},component:()=>Mt(()=>import("./Djkqdkvw.js"),__vite__mapDeps([8,4,5,9,7,1,2,10,11,12]),import.meta.url)},{name:"site-siteId-publications",path:"/site/:siteId()/publications",component:()=>Mt(()=>import("./BLZ09Ejm.js"),__vite__mapDeps([13,4,5,6,9,7,1,2,14]),import.meta.url)},{name:"site-siteId-articles-articleId",path:"/site/:siteId()/articles/:articleId()",component:()=>Mt(()=>import("./C7xzBJMo.js"),__vite__mapDeps([15,6,5,9,7,1,2,10,16,11,17]),import.meta.url)},{name:"site-siteId-publications-publicationId",path:"/site/:siteId()/publications/:publicationId()",component:()=>Mt(()=>import("./BS0au8Zq.js"),__vite__mapDeps([18,9,7,6,1,2,10,16,19]),import.meta.url)}],WL=async(t,e)=>{let n,s;if(!t.meta?.validate)return;const r=([n,s]=Di(()=>Promise.resolve(t.meta.validate(t))),n=await n,s(),n);if(r===!0)return;const i=$r({fatal:!0,statusCode:r&&r.statusCode||404,statusMessage:r&&r.statusMessage||`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}});return typeof window<"u"&&window.history.pushState({},"",e.fullPath),i};function Xb(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Jb=Xb,Zb=new lo("auth","Firebase",Xb());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl=new Xa("@firebase/auth");function zL(t,...e){Bl.logLevel<=ve.WARN&&Bl.warn(`Auth (${vr}): ${t}`,...e)}function nl(t,...e){Bl.logLevel<=ve.ERROR&&Bl.error(`Auth (${vr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(t,...e){throw hg(t,...e)}function Jn(t,...e){return hg(t,...e)}function eS(t,e,n){const s={...Jb(),[e]:n};return new lo("auth","Firebase",s).create(e,{appName:t.name})}function qr(t){return eS(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hg(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Zb.create(t,...e)}function pe(t,e,...n){if(!t)throw hg(e,...n)}function ms(t){const e="INTERNAL ASSERTION FAILED: "+t;throw nl(e),new Error(e)}function Rs(t,e){t||ms(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(){return typeof self<"u"&&self.location?.href||""}function KL(){return vv()==="http:"||vv()==="https:"}function vv(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GL(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(KL()||t1()||"connection"in navigator)?navigator.onLine:!0}function QL(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,n){this.shortDelay=e,this.longDelay=n,Rs(n>e,"Short delay should be less than long delay!"),this.isMobile=mp()||WT()}get(){return GL()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(t,e){Rs(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ms("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ms("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ms("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YL={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XL=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],JL=new sc(3e4,6e4);function dg(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function yo(t,e,n,s,r={}){return nS(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=uo({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...i};return e1()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&ri(t.emulatorConfig.host)&&(u.credentials="include"),tS.fetch()(await sS(t,t.config.apiHost,n,a),u)})}async function nS(t,e,n){t._canInitEmulator=!1;const s={...YL,...e};try{const r=new eV(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Fc(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fc(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Fc(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Fc(t,"user-disabled",o);const h=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw eS(t,h,u);As(t,h)}}catch(r){if(r instanceof ss)throw r;As(t,"network-request-failed",{message:String(r)})}}async function ZL(t,e,n,s,r={}){const i=await yo(t,e,n,s,r);return"mfaPendingCredential"in i&&As(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function sS(t,e,n,s){const r=`${e}${n}?${s}`,i=t,o=i.config.emulator?fg(t.config,r):`${t.config.apiScheme}://${r}`;return XL.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class eV{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Jn(this.auth,"network-request-failed")),JL.get())})}}function Fc(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Jn(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tV(t,e){return yo(t,"POST","/v1/accounts:delete",e)}async function Hl(t,e){return yo(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nV(t,e=!1){const n=Xt(t),s=await n.getIdToken(e),r=pg(s);pe(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i?.sign_in_provider;return{claims:r,token:s,authTime:ya(Kh(r.auth_time)),issuedAtTime:ya(Kh(r.iat)),expirationTime:ya(Kh(r.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Kh(t){return Number(t)*1e3}function pg(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return nl("JWT malformed, contained fewer than 3 sections"),null;try{const r=Rl(n);return r?JSON.parse(r):(nl("Failed to decode base64 JWT payload"),null)}catch(r){return nl("Caught error parsing JWT payload as JSON",r?.toString()),null}}function wv(t){const e=pg(t);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ja(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof ss&&sV(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function sV({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rV{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ya(this.lastLoginAt),this.creationTime=ya(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ql(t){const e=t.auth,n=await t.getIdToken(),s=await ja(t,Hl(e,{idToken:n}));pe(s?.users.length,e,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const i=r.providerUserInfo?.length?rS(r.providerUserInfo):[],o=oV(t.providerData,i),a=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!o?.length,u=a?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new yd(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function iV(t){const e=Xt(t);await ql(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oV(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function rS(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aV(t,e){const n=await nS(t,{},async()=>{const s=uo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=await sS(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:s};return t.emulatorConfig&&ri(t.emulatorConfig.host)&&(c.credentials="include"),tS.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function cV(t,e){return yo(t,"POST","/v2/accounts:revokeToken",dg(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){pe(e.length!==0,"internal-error");const n=wv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await aV(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Vi;return s&&(pe(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(pe(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(pe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vi,this.toJSON())}_performRefresh(){return ms("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(t,e){pe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class An{constructor({uid:e,auth:n,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new rV(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new yd(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await ja(this,this.stsTokenManager.getToken(this.auth,e));return pe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return nV(this,e)}reload(){return iV(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new An({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ql(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_n(this.auth.app))return Promise.reject(qr(this.auth));const e=await this.getIdToken();return await ja(this,tV(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,r=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,h=n.lastLoginAt??void 0,{uid:f,emailVerified:d,isAnonymous:g,providerData:_,stsTokenManager:v}=n;pe(f&&v,e,"internal-error");const I=Vi.fromJSON(this.name,v);pe(typeof f=="string",e,"internal-error"),Bs(s,e.name),Bs(r,e.name),pe(typeof d=="boolean",e,"internal-error"),pe(typeof g=="boolean",e,"internal-error"),Bs(i,e.name),Bs(o,e.name),Bs(a,e.name),Bs(c,e.name),Bs(u,e.name),Bs(h,e.name);const D=new An({uid:f,auth:e,email:r,emailVerified:d,displayName:s,isAnonymous:g,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:I,createdAt:u,lastLoginAt:h});return _&&Array.isArray(_)&&(D.providerData=_.map(O=>({...O}))),c&&(D._redirectEventId=c),D}static async _fromIdTokenResponse(e,n,s=!1){const r=new Vi;r.updateFromServerResponse(n);const i=new An({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await ql(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];pe(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?rS(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!i?.length,a=new Vi;a.updateFromIdToken(s);const c=new An({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new yd(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!i?.length};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev=new Map;function _s(t){Rs(t instanceof Function,"Expected a class definition");let e=Ev.get(t);return e?(Rs(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ev.set(t,e),e)}/**
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
 */class iS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}iS.type="NONE";const Tv=iS;/**
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
 */function sl(t,e,n){return`firebase:${t}:${e}:${n}`}class Fi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=sl(this.userKey,r.apiKey,i),this.fullPersistenceKey=sl("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Hl(this.auth,{idToken:e}).catch(()=>{});return n?An._fromGetAccountInfoResponse(this.auth,n,e):null}return An._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Fi(_s(Tv),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||_s(Tv);const o=sl(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){let f;if(typeof h=="string"){const d=await Hl(e,{idToken:h}).catch(()=>{});if(!d)break;f=await An._fromGetAccountInfoResponse(e,d,h)}else f=An._fromJSON(e,h);u!==i&&(a=f),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Fi(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Fi(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(oS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hS(e))return"Blackberry";if(fS(e))return"Webos";if(aS(e))return"Safari";if((e.includes("chrome/")||cS(e))&&!e.includes("edge/"))return"Chrome";if(uS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if(s?.length===2)return s[1]}return"Other"}function oS(t=zt()){return/firefox\//i.test(t)}function aS(t=zt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cS(t=zt()){return/crios\//i.test(t)}function lS(t=zt()){return/iemobile/i.test(t)}function uS(t=zt()){return/android/i.test(t)}function hS(t=zt()){return/blackberry/i.test(t)}function fS(t=zt()){return/webos/i.test(t)}function gg(t=zt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function lV(t=zt()){return gg(t)&&!!window.navigator?.standalone}function uV(){return n1()&&document.documentMode===10}function dS(t=zt()){return gg(t)||uS(t)||fS(t)||hS(t)||/windows phone/i.test(t)||lS(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(t,e=[]){let n;switch(t){case"Browser":n=Iv(zt());break;case"Worker":n=`${Iv(zt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${vr}/${s}`}/**
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
 */class hV{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function fV(t,e={}){return yo(t,"GET","/v2/passwordPolicy",dg(t,e))}/**
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
 */const dV=6;class pV{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??dV,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gV{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bv(this),this.idTokenSubscription=new bv(this),this.beforeStateQueue=new hV(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_s(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Fi.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Hl(this,{idToken:e}),s=await An._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(_n(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=s?._redirectEventId,a=await this.tryRedirectSignIn(e);(!i||i===o)&&a?.user&&(s=a.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(i){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ql(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=QL()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_n(this.app))return Promise.reject(qr(this));const n=e?Xt(e):null;return n&&pe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _n(this.app)?Promise.reject(qr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _n(this.app)?Promise.reject(qr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_s(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await fV(this),n=new pV(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new lo("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await cV(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_s(e)||this._popupRedirectResolver;pe(n,this,"argument-error"),this.redirectPersistenceManager=await Fi.create(this,[_s(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(pe(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(_n(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&zL(`Error while retrieving App Check token: ${e.error}`),e?.token}}function gS(t){return Xt(t)}class bv{constructor(e){this.auth=e,this.observer=null,this.addObserver=f1(n=>this.observer=n)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mg={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mV(t){mg=t}function _V(t){return mg.loadJS(t)}function yV(){return mg.gapiScript}function vV(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wV(t,e){const n=yp(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(ka(i,e??{}))return r;As(r,"already-initialized")}return n.initialize({options:e})}function EV(t,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(_s);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e?.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ms("not implemented")}_getIdTokenResponse(e){return ms("not implemented")}_linkToIdToken(e,n){return ms("not implemented")}_getReauthenticationResolver(e){return ms("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ui(t,e){return ZL(t,"POST","/v1/accounts:signInWithIdp",dg(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TV="http://localhost";class Yr extends mS{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):As("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=n;if(!s||!r)return null;const o=new Yr(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ui(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ui(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ui(e,n)}buildRequest(){const e={requestUri:TV,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=uo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class rc extends _S{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks extends rc{constructor(){super("facebook.com")}static credential(e){return Yr._fromParams({providerId:Ks.PROVIDER_ID,signInMethod:Ks.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ks.credentialFromTaggedObject(e)}static credentialFromError(e){return Ks.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ks.credential(e.oauthAccessToken)}catch{return null}}}Ks.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ks.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs extends rc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yr._fromParams({providerId:Gs.PROVIDER_ID,signInMethod:Gs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Gs.credentialFromTaggedObject(e)}static credentialFromError(e){return Gs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Gs.credential(n,s)}catch{return null}}}Gs.GOOGLE_SIGN_IN_METHOD="google.com";Gs.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs extends rc{constructor(){super("github.com")}static credential(e){return Yr._fromParams({providerId:Qs.PROVIDER_ID,signInMethod:Qs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qs.credentialFromTaggedObject(e)}static credentialFromError(e){return Qs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qs.credential(e.oauthAccessToken)}catch{return null}}}Qs.GITHUB_SIGN_IN_METHOD="github.com";Qs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys extends rc{constructor(){super("twitter.com")}static credential(e,n){return Yr._fromParams({providerId:Ys.PROVIDER_ID,signInMethod:Ys.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ys.credentialFromTaggedObject(e)}static credentialFromError(e){return Ys.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Ys.credential(n,s)}catch{return null}}}Ys.TWITTER_SIGN_IN_METHOD="twitter.com";Ys.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await An._fromIdTokenResponse(e,s,r),o=Sv(s);return new to({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Sv(s);return new to({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Sv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl extends ss{constructor(e,n,s,r){super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Wl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Wl(e,n,s,r)}}function yS(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Wl._fromErrorAndOperation(t,i,e,s):i})}async function IV(t,e,n=!1){const s=await ja(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return to._forOperation(t,"link",s)}/**
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
 */async function bV(t,e,n=!1){const{auth:s}=t;if(_n(s.app))return Promise.reject(qr(s));const r="reauthenticate";try{const i=await ja(t,yS(s,r,e,t),n);pe(i.idToken,s,"internal-error");const o=pg(i.idToken);pe(o,s,"internal-error");const{sub:a}=o;return pe(t.uid===a,s,"user-mismatch"),to._forOperation(t,r,i)}catch(i){throw i?.code==="auth/user-not-found"&&As(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SV(t,e,n=!1){if(_n(t.app))return Promise.reject(qr(t));const s="signIn",r=await yS(t,s,e),i=await to._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function CV(t,e,n,s){return Xt(t).onIdTokenChanged(e,n,s)}const zl="__sak";/**
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
 */class vS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(zl,"1"),this.storage.removeItem(zl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AV=1e3,RV=10;class wS extends vS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=dS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);uV()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,RV):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},AV)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}wS.type="LOCAL";const PV=wS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES extends vS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ES.type="SESSION";const kV=ES;/**
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
 */function NV(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Hu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Hu(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await NV(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _g(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class OV{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=_g("",20);r.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(f){const d=f;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(){return window}function xV(t){Zn().location.href=t}/**
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
 */function TS(){return typeof Zn().WorkerGlobalScope<"u"&&typeof Zn().importScripts=="function"}async function DV(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function MV(){return navigator?.serviceWorker?.controller||null}function LV(){return TS()?self:null}/**
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
 */const IS="firebaseLocalStorageDb",VV=1,Kl="firebaseLocalStorage",bS="fbase_key";class ic{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function qu(t,e){return t.transaction([Kl],e?"readwrite":"readonly").objectStore(Kl)}function FV(){const t=indexedDB.deleteDatabase(IS);return new ic(t).toPromise()}function vd(){const t=indexedDB.open(IS,VV);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Kl,{keyPath:bS})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Kl)?e(s):(s.close(),await FV(),e(await vd()))})})}async function Cv(t,e,n){const s=qu(t,!0).put({[bS]:e,value:n});return new ic(s).toPromise()}async function UV(t,e){const n=qu(t,!1).get(e),s=await new ic(n).toPromise();return s===void 0?null:s.value}function Av(t,e){const n=qu(t,!0).delete(e);return new ic(n).toPromise()}const $V=800,jV=3;class SS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>jV)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return TS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hu._getInstance(LV()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await DV(),!this.activeServiceWorker)return;this.sender=new OV(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||MV()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vd();return await Cv(e,zl,"1"),await Av(e,zl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Cv(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>UV(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Av(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=qu(r,!1).getAll();return new ic(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$V)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}SS.type="LOCAL";const BV=SS;new sc(3e4,6e4);/**
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
 */function HV(t,e){return e?_s(e):(pe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class yg extends mS{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ui(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ui(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ui(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function qV(t){return SV(t.auth,new yg(t),t.bypassAuthState)}function WV(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),bV(n,new yg(t),t.bypassAuthState)}async function zV(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),IV(n,new yg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qV;case"linkViaPopup":case"linkViaRedirect":return zV;case"reauthViaPopup":case"reauthViaRedirect":return WV;default:As(this.auth,"internal-error")}}resolve(e){Rs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KV=new sc(2e3,1e4);class bi extends CS{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,bi.currentPopupAction&&bi.currentPopupAction.cancel(),bi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){Rs(this.filter.length===1,"Popup operations only handle one event");const e=_g();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Jn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Jn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bi.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,KV.get())};e()}}bi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GV="pendingRedirect",rl=new Map;class QV extends CS{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=rl.get(this.auth._key());if(!e){try{const s=await YV(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}rl.set(this.auth._key(),e)}return this.bypassAuthState||rl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function YV(t,e){const n=ZV(e),s=JV(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function XV(t,e){rl.set(t._key(),e)}function JV(t){return _s(t._redirectPersistence)}function ZV(t){return sl(GV,t.config.apiKey,t.name)}async function eF(t,e,n=!1){if(_n(t.app))return Promise.reject(qr(t));const s=gS(t),r=HV(s,e),o=await new QV(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tF=600*1e3;class nF{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sF(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!AS(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";n.onError(Jn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tF&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rv(e))}saveEventToCache(e){this.cachedEventUids.add(Rv(e)),this.lastProcessedEventTime=Date.now()}}function Rv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function AS({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function sF(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return AS(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rF(t,e={}){return yo(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iF=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oF=/^https?/;async function aF(t){if(t.config.emulator)return;const{authorizedDomains:e}=await rF(t);for(const n of e)try{if(cF(n))return}catch{}As(t,"unauthorized-domain")}function cF(t){const e=_d(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!oF.test(n))return!1;if(iF.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const lF=new sc(3e4,6e4);function Pv(){const t=Zn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function uF(t){return new Promise((e,n)=>{function s(){Pv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pv(),n(Jn(t,"network-request-failed"))},timeout:lF.get()})}if(Zn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Zn().gapi?.load)s();else{const r=vV("iframefcb");return Zn()[r]=()=>{gapi.load?s():n(Jn(t,"network-request-failed"))},_V(`${yV()}?onload=${r}`).catch(i=>n(i))}}).catch(e=>{throw il=null,e})}let il=null;function hF(t){return il=il||uF(t),il}/**
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
 */const fF=new sc(5e3,15e3),dF="__/auth/iframe",pF="emulator/auth/iframe",gF={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mF=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _F(t){const e=t.config;pe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?fg(e,pF):`https://${t.config.authDomain}/${dF}`,s={apiKey:e.apiKey,appName:t.name,v:vr},r=mF.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${uo(s).slice(1)}`}async function yF(t){const e=await hF(t),n=Zn().gapi;return pe(n,t,"internal-error"),e.open({where:document.body,url:_F(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gF,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Jn(t,"network-request-failed"),a=Zn().setTimeout(()=>{i(o)},fF.get());function c(){Zn().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const vF={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wF=500,EF=600,TF="_blank",IF="http://localhost";class kv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bF(t,e,n,s=wF,r=EF){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c={...vF,width:s.toString(),height:r.toString(),top:i,left:o},u=zt().toLowerCase();n&&(a=cS(u)?TF:n),oS(u)&&(e=e||IF,c.scrollbars="yes");const h=Object.entries(c).reduce((d,[g,_])=>`${d}${g}=${_},`,"");if(lV(u)&&a!=="_self")return SF(e||"",a),new kv(null);const f=window.open(e||"",a,h);pe(f,t,"popup-blocked");try{f.focus()}catch{}return new kv(f)}function SF(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const CF="__/auth/handler",AF="emulator/auth/handler",RF=encodeURIComponent("fac");async function Nv(t,e,n,s,r,i){pe(t.config.authDomain,t,"auth-domain-config-required"),pe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:vr,eventId:r};if(e instanceof _S){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ff(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof rc){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await t._getAppCheckToken(),u=c?`#${RF}=${encodeURIComponent(c)}`:"";return`${PF(t)}?${uo(a).slice(1)}${u}`}function PF({config:t}){return t.emulator?fg(t,AF):`https://${t.authDomain}/${CF}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh="webStorageSupport";class kF{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kV,this._completeRedirectFn=eF,this._overrideRedirectResult=XV}async _openPopup(e,n,s,r){Rs(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Nv(e,n,s,_d(),r);return bF(e,i,_g())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Nv(e,n,s,_d(),r);return xV(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Rs(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await yF(e),s=new nF(e);return n.register("authEvent",r=>(pe(r?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Gh,{type:Gh},r=>{const i=r?.[0]?.[Gh];i!==void 0&&n(!!i),As(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=aF(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return dS()||aS()||gg()}}const NF=kF;var Ov="@firebase/auth",xv="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OF{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xF(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function DF(t){es(new xn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;pe(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pS(t)},u=new gV(s,r,i,c);return EV(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),es(new xn("auth-internal",e=>{const n=gS(e.getProvider("auth").getImmediate());return(s=>new OF(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fn(Ov,xv,xF(t)),fn(Ov,xv,"esm2020")}/**
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
 */const MF=300;Yk("authIdTokenMaxAge");function LF(){return document.getElementsByTagName("head")?.[0]??document}mV({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Jn("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",LF().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});DF("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VF=new Map,FF={activated:!1,tokenObservers:[]};function Ln(t){return VF.get(t)||{...FF}}const Dv={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:960*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UF{constructor(e,n,s,r,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=r,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=r,r>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Ra,this.pending.promise.catch(n=>{}),await $F(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Ra,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function $F(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jF={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},Gl=new lo("appCheck","AppCheck",jF);function RS(t){if(!Ln(t).activated)throw Gl.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BF="firebase-app-check-database",HF=1,wd="firebase-app-check-store";let Uc=null;function qF(){return Uc||(Uc=new Promise((t,e)=>{try{const n=indexedDB.open(BF,HF);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{e(Gl.create("storage-open",{originalErrorMessage:s.target.error?.message}))},n.onupgradeneeded=s=>{const r=s.target.result;switch(s.oldVersion){case 0:r.createObjectStore(wd,{keyPath:"compositeKey"})}}}catch(n){e(Gl.create("storage-open",{originalErrorMessage:n?.message}))}}),Uc)}function WF(t,e){return zF(KF(t),e)}async function zF(t,e){const s=(await qF()).transaction(wd,"readwrite"),i=s.objectStore(wd).put({compositeKey:t,value:e});return new Promise((o,a)=>{i.onsuccess=c=>{o()},s.onerror=c=>{a(Gl.create("storage-set",{originalErrorMessage:c.target.error?.message}))}})}function KF(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed=new Xa("@firebase/app-check");function Mv(t,e){return zT()?WF(t,e).catch(n=>{Ed.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GF={error:"UNKNOWN_ERROR"};function QF(t){return Tu.encodeString(JSON.stringify(t),!1)}async function Td(t,e=!1,n=!1){const s=t.app;RS(s);const r=Ln(s);let i=r.token,o;if(i&&!sa(i)&&(r.token=void 0,i=void 0),!i){const u=await r.cachedTokenPromise;u&&(sa(u)?i=u:await Mv(s,void 0))}if(!e&&i&&sa(i))return{token:i.token};let a=!1;try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),a=!0),i=await Ln(s).exchangeTokenPromise}catch(u){u.code==="appCheck/throttled"||u.code==="appCheck/initial-throttle"?Ed.warn(u.message):n&&Ed.error(u),o=u}let c;return i?o?sa(i)?c={token:i.token,internalError:o}:c=Vv(o):(c={token:i.token},r.token=i,await Mv(s,i)):c=Vv(o),a&&ZF(s,c),c}async function YF(t){const e=t.app;RS(e);const{provider:n}=Ln(e);{const{token:s}=await n.getToken();return{token:s}}}function XF(t,e,n,s){const{app:r}=t,i=Ln(r),o={next:n,error:s,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&sa(i.token)){const a=i.token;Promise.resolve().then(()=>{n({token:a.token}),Lv(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>Lv(t))}function PS(t,e){const n=Ln(t),s=n.tokenObservers.filter(r=>r.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function Lv(t){const{app:e}=t,n=Ln(e);let s=n.tokenRefresher;s||(s=JF(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function JF(t){const{app:e}=t;return new UF(async()=>{const n=Ln(e);let s;if(n.token?s=await Td(t,!0):s=await Td(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=Ln(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const r=n.token.expireTimeMillis-300*1e3;return s=Math.min(s,r),Math.max(0,s-Date.now())}else return 0},Dv.RETRIAL_MIN_WAIT,Dv.RETRIAL_MAX_WAIT)}function ZF(t,e){const n=Ln(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function sa(t){return t.expireTimeMillis-Date.now()>0}function Vv(t){return{token:QF(GF),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Ln(this.app);for(const n of e)PS(this.app,n.next);return Promise.resolve()}}function t2(t,e){return new e2(t,e)}function n2(t){return{getToken:e=>Td(t,e),getLimitedUseToken:()=>YF(t),addTokenListener:e=>XF(t,"INTERNAL",e),removeTokenListener:e=>PS(t.app,e)}}const s2="@firebase/app-check",r2="0.11.0",i2="app-check",Fv="app-check-internal";function o2(){es(new xn(i2,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return t2(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Fv).initialize()})),es(new xn(Fv,t=>{const e=t.getProvider("app-check").getImmediate();return n2(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),fn(s2,r2)}o2();var a2="firebase",c2="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fn(a2,c2,"app");const kS=Symbol("firebaseApp");function Wu(t){return Ns()&&it(kS,null)||vp(t)}const Kn=()=>{},l2=typeof window<"u";function vg(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function u2(t,e,n){const s=(""+e).split("."),r=s.pop(),i=s.reduce((o,a)=>o&&o[a],t);if(i!=null)return Array.isArray(i)?i.splice(Number(r),1,n):i[r]=n}function oi(t){return!!t&&typeof t=="object"}const h2=Object.prototype;function f2(t){return oi(t)&&Object.getPrototypeOf(t)===h2}function wg(t){return oi(t)&&t.type==="document"}function d2(t){return oi(t)&&t.type==="collection"}function p2(t){return wg(t)||d2(t)}function g2(t){return oi(t)&&t.type==="query"}function m2(t){return oi(t)&&"ref"in t}function _2(t){return oi(t)&&typeof t.bucket=="string"}function y2(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const v2=Symbol.for("v-scx");function w2(){return!!it(v2,0)}const $c=new WeakMap;function E2(t,e){if(!$c.has(t)){const n=Xw(!0);$c.set(t,n);const{unmount:s}=e;e.unmount=()=>{s.call(e),n.stop(),$c.delete(t)}}return $c.get(t)}const T2=new WeakMap,jc=new WeakMap;function I2(t){const e=Wu(t);if(!jc.has(e)){let n;const r=[new Promise(i=>{n=i}),i=>{jc.set(e,i),n(i.value)}];jc.set(e,r)}return jc.get(e)}function b2(t,e){CV(e,n=>{const s=I2();t.value=n,Array.isArray(s)&&s[1](t)})}var Uv={};const $v="@firebase/database",jv="1.1.0";/**
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
 */let NS="";function S2(t){NS=t}/**
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
 */class C2{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Pt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Pa(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class A2{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Os(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const OS=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new C2(e)}}catch{}return new A2},Mr=OS("localStorage"),R2=OS("sessionStorage");/**
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
 */const $i=new Xa("@firebase/database"),P2=(function(){let t=1;return function(){return t++}})(),xS=function(t){const e=m1(t),n=new h1;n.update(e);const s=n.digest();return Tu.encodeByteArray(s)},oc=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=oc.apply(null,s):typeof s=="object"?e+=Pt(s):e+=s,e+=" "}return e};let va=null,Bv=!0;const k2=function(t,e){X(!0,"Can't turn on custom loggers persistently."),$i.logLevel=ve.VERBOSE,va=$i.log.bind($i)},jt=function(...t){if(Bv===!0&&(Bv=!1,va===null&&R2.get("logging_enabled")===!0&&k2()),va){const e=oc.apply(null,t);va(e)}},ac=function(t){return function(...e){jt(t,...e)}},Id=function(...t){const e="FIREBASE INTERNAL ERROR: "+oc(...t);$i.error(e)},Xr=function(...t){const e=`FIREBASE FATAL ERROR: ${oc(...t)}`;throw $i.error(e),new Error(e)},dn=function(...t){const e="FIREBASE WARNING: "+oc(...t);$i.warn(e)},N2=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&dn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},DS=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},O2=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},no="[MIN_NAME]",Jr="[MAX_NAME]",vo=function(t,e){if(t===e)return 0;if(t===no||e===Jr)return-1;if(e===no||t===Jr)return 1;{const n=Hv(t),s=Hv(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},x2=function(t,e){return t===e?0:t<e?-1:1},Bo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Pt(e))},Eg=function(t){if(typeof t!="object"||t===null)return Pt(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Pt(e[s]),n+=":",n+=Eg(t[e[s]]);return n+="}",n},MS=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let r=0;r<n;r+=e)r+e>n?s.push(t.substring(r,n)):s.push(t.substring(r,r+e));return s};function In(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const LS=function(t){X(!DS(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let r,i,o,a,c;t===0?(i=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),i=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-s-n))));const u=[];for(c=n;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(r?1:0),u.reverse();const h=u.join("");let f="";for(c=0;c<64;c+=8){let d=parseInt(h.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),f=f+d}return f.toLowerCase()},D2=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},M2=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},L2=new RegExp("^-?(0*)\\d{1,10}$"),V2=-2147483648,F2=2147483647,Hv=function(t){if(L2.test(t)){const e=Number(t);if(e>=V2&&e<=F2)return e}return null},cc=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw dn("Exception was thrown by user callback.",n),e},Math.floor(0))}},U2=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},wa=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class $2{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,_n(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(n=>n.addTokenListener(e))}notifyForInvalidToken(){dn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class j2{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(jt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',dn(e)}}/**
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
 */const Tg="5",VS="v",FS="s",US="r",$S="f",jS=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,BS="ls",HS="p",bd="ac",qS="websocket",WS="long_polling";/**
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
 */class B2{constructor(e,n,s,r,i=!1,o="",a=!1,c=!1,u=null){this.secure=n,this.namespace=s,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Mr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Mr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function H2(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function zS(t,e,n){X(typeof e=="string","typeof type must == string"),X(typeof n=="object","typeof params must == object");let s;if(e===qS)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===WS)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);H2(t)&&(n.ns=t.namespace);const r=[];return In(n,(i,o)=>{r.push(i+"="+o)}),s+r.join("&")}/**
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
 */class q2{constructor(){this.counters_={}}incrementCounter(e,n=1){Os(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Hk(this.counters_)}}/**
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
 */const Qh={},Yh={};function Ig(t){const e=t.toString();return Qh[e]||(Qh[e]=new q2),Qh[e]}function W2(t,e){const n=t.toString();return Yh[n]||(Yh[n]=e()),Yh[n]}/**
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
 */class z2{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<s.length;++r)s[r]&&cc(()=>{this.onMessage_(s[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const qv="start",K2="close",G2="pLPCommand",Q2="pRTLPCB",KS="id",GS="pw",QS="ser",Y2="cb",X2="seg",J2="ts",Z2="d",eU="dframe",YS=1870,XS=30,tU=YS-XS,nU=25e3,sU=3e4;class Si{constructor(e,n,s,r,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ac(e),this.stats_=Ig(n),this.urlFn=c=>(this.appCheckToken&&(c[bd]=this.appCheckToken),zS(n,WS,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new z2(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(sU)),O2(()=>{if(this.isClosed_)return;this.scriptTagHolder=new bg((...i)=>{const[o,a,c,u,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===qv)this.id=a,this.password=c;else if(o===K2)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[qv]="t",s[QS]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Y2]=this.scriptTagHolder.uniqueCallbackIdentifier),s[VS]=Tg,this.transportSessionId&&(s[FS]=this.transportSessionId),this.lastSessionId&&(s[BS]=this.lastSessionId),this.applicationId&&(s[HS]=this.applicationId),this.appCheckToken&&(s[bd]=this.appCheckToken),typeof location<"u"&&location.hostname&&jS.test(location.hostname)&&(s[US]=$S);const r=this.urlFn(s);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Si.forceAllow_=!0}static forceDisallow(){Si.forceDisallow_=!0}static isAvailable(){return Si.forceAllow_?!0:!Si.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!D2()&&!M2()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Pt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=FT(n),r=MS(s,tU);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[eU]="t",s[KS]=e,s[GS]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Pt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class bg{constructor(e,n,s,r){this.onDisconnect=s,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=P2(),window[G2+this.uniqueCallbackIdentifier]=e,window[Q2+this.uniqueCallbackIdentifier]=n,this.myIFrame=bg.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){jt("frame writing exception"),a.stack&&jt(a.stack),jt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||jt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[KS]=this.myID,e[GS]=this.myPW,e[QS]=this.currentSerial;let n=this.urlFn(e),s="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+XS+s.length<=YS;){const o=this.pendingSegs.shift();s=s+"&"+X2+r+"="+o.seg+"&"+J2+r+"="+o.ts+"&"+Z2+r+"="+o.d,r++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(s,Math.floor(nU)),i=()=>{clearTimeout(r),s()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const r=s.readyState;(!r||r==="loaded"||r==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{jt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const rU=16384,iU=45e3;let Ql=null;typeof MozWebSocket<"u"?Ql=MozWebSocket:typeof WebSocket<"u"&&(Ql=WebSocket);class Cn{constructor(e,n,s,r,i,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ac(this.connId),this.stats_=Ig(n),this.connURL=Cn.connectionURL_(n,o,a,r,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,r,i){const o={};return o[VS]=Tg,typeof location<"u"&&location.hostname&&jS.test(location.hostname)&&(o[US]=$S),n&&(o[FS]=n),s&&(o[BS]=s),r&&(o[bd]=r),i&&(o[HS]=i),zS(e,qS,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Mr.set("previous_websocket_failure",!0);try{let s;s1(),this.mySock=new Ql(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){Cn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ql!==null&&!Cn.forceDisallow_}static previouslyFailed(){return Mr.isInMemoryStorage||Mr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Mr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Pa(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(X(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Pt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=MS(n,rU);s.length>1&&this.sendString_(String(s.length));for(let r=0;r<s.length;r++)this.sendString_(s[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(iU))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Cn.responsesRequiredToBeHealthy=2;Cn.healthyTimeout=3e4;/**
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
 */class Ba{static get ALL_TRANSPORTS(){return[Si,Cn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Cn&&Cn.isAvailable();let s=n&&!Cn.previouslyFailed();if(e.webSocketOnly&&(n||dn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Cn];else{const r=this.transports_=[];for(const i of Ba.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);Ba.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ba.globalTransportInitialized_=!1;/**
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
 */const oU=6e4,aU=5e3,cU=10*1024,lU=100*1024,Xh="t",Wv="d",uU="s",zv="r",hU="e",Kv="o",Gv="a",Qv="n",Yv="p",fU="h";class dU{constructor(e,n,s,r,i,o,a,c,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ac("c:"+this.id+":"),this.transportManager_=new Ba(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=wa(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>lU?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>cU?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Xh in e){const n=e[Xh];n===Gv?this.upgradeIfSecondaryHealthy_():n===zv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Kv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Bo("t",e),s=Bo("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Yv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Gv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Qv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Bo("t",e),s=Bo("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Bo(Xh,e);if(Wv in e){const s=e[Wv];if(n===fU){const r={...s};this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===Qv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===uU?this.onConnectionShutdown_(s):n===zv?this.onReset_(s):n===hU?Id("Server Error: "+s):n===Kv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Id("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Tg!==s&&dn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),wa(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(oU))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):wa(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(aU))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Yv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Mr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class JS{put(e,n,s,r){}merge(e,n,s,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class ZS{constructor(e){this.allowedEvents_=e,this.listeners_={},X(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let r=0;r<s.length;r++)s[r].callback.apply(s[r].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const r=this.getInitialEvent(e);r&&n.apply(s,r)}off(e,n,s){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===n&&(!s||s===r[i].context)){r.splice(i,1);return}}validateEventType_(e){X(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Yl extends ZS{static getInstance(){return new Yl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!mp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return X(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Xv=32,Jv=768;class Ye{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[s]=this.pieces_[r],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ve(){return new Ye("")}function Ie(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function yr(t){return t.pieces_.length-t.pieceNum_}function Qe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ye(t.pieces_,e)}function eC(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function pU(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function tC(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function nC(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ye(e,0)}function wt(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Ye)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let r=0;r<s.length;r++)s[r].length>0&&n.push(s[r])}return new Ye(n,0)}function Ee(t){return t.pieceNum_>=t.pieces_.length}function vn(t,e){const n=Ie(t),s=Ie(e);if(n===null)return e;if(n===s)return vn(Qe(t),Qe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function sC(t,e){if(yr(t)!==yr(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Rn(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(yr(t)>yr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class gU{constructor(e,n){this.errorPrefix_=n,this.parts_=tC(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=bu(this.parts_[s]);rC(this)}}function mU(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=bu(e),rC(t)}function _U(t){const e=t.parts_.pop();t.byteLength_-=bu(e),t.parts_.length>0&&(t.byteLength_-=1)}function rC(t){if(t.byteLength_>Jv)throw new Error(t.errorPrefix_+"has a key path longer than "+Jv+" bytes ("+t.byteLength_+").");if(t.parts_.length>Xv)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Xv+") or object contains a cycle "+xr(t))}function xr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Sg extends ZS{static getInstance(){return new Sg}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return X(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ho=1e3,yU=300*1e3,Zv=30*1e3,vU=1.3,wU=3e4,EU="server_kill",ew=3;class vs extends JS{constructor(e,n,s,r,i,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=vs.nextPersistentConnectionId_++,this.log_=ac("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ho,this.maxReconnectDelay_=yU,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Sg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Yl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const r=++this.requestNumber_,i={r,a:e,b:n};this.log_(Pt(i)),X(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),s&&(this.requestCBHash_[r]=s)}get(e){this.initConnection_();const n=new Ra,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,s,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),X(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),X(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:s};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+s+" for "+r);const i={p:s},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const c=a.d,u=a.s;vs.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(r))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(s,r),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Os(e,"w")){const s=Wi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();dn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||u1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Zv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=l1(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+r),X(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,r)&&this.connected_&&this.sendUnlisten_(s,r,e._queryObject,n)}sendUnlisten_(e,n,s,r){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";r&&(i.q=s,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,r){const i={p:n,d:s};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,s,r){this.putInternal("p",e,n,s,r)}merge(e,n,s,r){this.putInternal("m",e,n,s,r)}putInternal(e,n,s,r,i){this.initConnection_();const o={p:n,d:s};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const i=s.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Pt(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Id("Unrecognized action received from server: "+Pt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){X(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ho,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ho,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>wU&&(this.reconnectDelay_=Ho),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*vU)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+vs.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},u=function(f){X(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:c,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?jt("getToken() completed but was canceled"):(jt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=d&&d.token,a=new dU(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{dn(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(EU)},i))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&dn(f),c())}}}interrupt(e){jt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){jt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ff(this.interruptReasons_)&&(this.reconnectDelay_=Ho,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(i=>Eg(i)).join("$"):s="default";const r=this.removeListen_(e,s);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const s=new Ye(e).toString();let r;if(this.listens.has(s)){const i=this.listens.get(s);r=i.get(n),i.delete(n),i.size===0&&this.listens.delete(s)}else r=void 0;return r}onAuthRevoked_(e,n){jt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ew&&(this.reconnectDelay_=Zv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){jt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ew&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+NS.replace(/\./g,"-")]=1,mp()?e["framework.cordova"]=1:WT()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Yl.getInstance().currentlyOnline();return Ff(this.interruptReasons_)&&e}}vs.nextPersistentConnectionId_=0;vs.nextConnectionId_=0;/**
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
 */class be{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new be(e,n)}}/**
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
 */class zu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new be(no,e),r=new be(no,n);return this.compare(s,r)!==0}minPost(){return be.MIN}}/**
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
 */let Bc;class iC extends zu{static get __EMPTY_NODE(){return Bc}static set __EMPTY_NODE(e){Bc=e}compare(e,n){return vo(e.name,n.name)}isDefinedOn(e){throw co("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return be.MIN}maxPost(){return new be(Jr,Bc)}makePost(e,n){return X(typeof e=="string","KeyIndex indexValue must always be a string."),new be(e,Bc)}toString(){return".key"}}const ji=new iC;/**
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
 */class Hc{constructor(e,n,s,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class vt{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??vt.RED,this.left=r??nn.EMPTY_NODE,this.right=i??nn.EMPTY_NODE}copy(e,n,s,r,i){return new vt(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return nn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,r;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return nn.EMPTY_NODE;r=s.right.min_(),s=s.copy(r.key,r.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}vt.RED=!0;vt.BLACK=!1;class TU{copy(e,n,s,r,i){return this}insert(e,n,s){return new vt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class nn{constructor(e,n=nn.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new nn(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,vt.BLACK,null,null))}remove(e){return new nn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,vt.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,r=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return r?r.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(r=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Hc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Hc(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Hc(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Hc(this.root_,null,this.comparator_,!0,e)}}nn.EMPTY_NODE=new TU;/**
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
 */function IU(t,e){return vo(t.name,e.name)}function Cg(t,e){return vo(t,e)}/**
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
 */let Sd;function bU(t){Sd=t}const oC=function(t){return typeof t=="number"?"number:"+LS(t):"string:"+t},aC=function(t){if(t.isLeafNode()){const e=t.val();X(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Os(e,".sv"),"Priority must be a string or number.")}else X(t===Sd||t.isEmpty(),"priority of unexpected type.");X(t===Sd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let tw;class _t{static set __childrenNodeConstructor(e){tw=e}static get __childrenNodeConstructor(){return tw}constructor(e,n=_t.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,X(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),aC(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new _t(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:_t.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ee(e)?this:Ie(e)===".priority"?this.priorityNode_:_t.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:_t.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=Ie(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(X(s!==".priority"||yr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,_t.__childrenNodeConstructor.EMPTY_NODE.updateChild(Qe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+oC(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=LS(this.value_):e+=this.value_,this.lazyHash_=xS(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===_t.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof _t.__childrenNodeConstructor?-1:(X(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,r=_t.VALUE_TYPE_ORDER.indexOf(n),i=_t.VALUE_TYPE_ORDER.indexOf(s);return X(r>=0,"Unknown leaf type: "+n),X(i>=0,"Unknown leaf type: "+s),r===i?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}_t.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let cC,lC;function SU(t){cC=t}function CU(t){lC=t}class AU extends zu{compare(e,n){const s=e.node.getPriority(),r=n.node.getPriority(),i=s.compareTo(r);return i===0?vo(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return be.MIN}maxPost(){return new be(Jr,new _t("[PRIORITY-POST]",lC))}makePost(e,n){const s=cC(e);return new be(n,new _t("[PRIORITY-POST]",s))}toString(){return".priority"}}const qt=new AU;/**
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
 */const RU=Math.log(2);class PU{constructor(e){const n=i=>parseInt(Math.log(i)/RU,10),s=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=s(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Xl=function(t,e,n,s){t.sort(e);const r=function(c,u){const h=u-c;let f,d;if(h===0)return null;if(h===1)return f=t[c],d=n?n(f):f,new vt(d,f.node,vt.BLACK,null,null);{const g=parseInt(h/2,10)+c,_=r(c,g),v=r(g+1,u);return f=t[g],d=n?n(f):f,new vt(d,f.node,vt.BLACK,_,v)}},i=function(c){let u=null,h=null,f=t.length;const d=function(_,v){const I=f-_,D=f;f-=_;const O=r(I+1,D),y=t[I],S=n?n(y):y;g(new vt(S,y.node,v,null,O))},g=function(_){u?(u.left=_,u=_):(h=_,u=_)};for(let _=0;_<c.count;++_){const v=c.nextBitIsOne(),I=Math.pow(2,c.count-(_+1));v?d(I,vt.BLACK):(d(I,vt.BLACK),d(I,vt.RED))}return h},o=new PU(t.length),a=i(o);return new nn(s||e,a)};/**
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
 */let Jh;const gi={};class ys{static get Default(){return X(gi&&qt,"ChildrenNode.ts has not been loaded"),Jh=Jh||new ys({".priority":gi},{".priority":qt}),Jh}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Wi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof nn?n:null}hasIndex(e){return Os(this.indexSet_,e.toString())}addIndex(e,n){X(e!==ji,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let r=!1;const i=n.getIterator(be.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),s.push(o),o=i.getNext();let a;r?a=Xl(s,e.getCompare()):a=gi;const c=e.toString(),u={...this.indexSet_};u[c]=e;const h={...this.indexes_};return h[c]=a,new ys(h,u)}addToIndexes(e,n){const s=Pl(this.indexes_,(r,i)=>{const o=Wi(this.indexSet_,i);if(X(o,"Missing index implementation for "+i),r===gi)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(be.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&a.push(u),u=c.getNext();return a.push(e),Xl(a,o.getCompare())}else return gi;else{const a=n.get(e.name);let c=r;return a&&(c=c.remove(new be(e.name,a))),c.insert(e,e.node)}});return new ys(s,this.indexSet_)}removeFromIndexes(e,n){const s=Pl(this.indexes_,r=>{if(r===gi)return r;{const i=n.get(e.name);return i?r.remove(new be(e.name,i)):r}});return new ys(s,this.indexSet_)}}/**
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
 */let qo;class xe{static get EMPTY_NODE(){return qo||(qo=new xe(new nn(Cg),null,ys.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&aC(this.priorityNode_),this.children_.isEmpty()&&X(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||qo}updatePriority(e){return this.children_.isEmpty()?this:new xe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?qo:n}}getChild(e){const n=Ie(e);return n===null?this:this.getImmediateChild(n).getChild(Qe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(X(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new be(e,n);let r,i;n.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(s,this.children_)):(r=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(s,this.children_));const o=r.isEmpty()?qo:this.priorityNode_;return new xe(r,o,i)}}updateChild(e,n){const s=Ie(e);if(s===null)return n;{X(Ie(e)!==".priority"||yr(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(s).updateChild(Qe(e),n);return this.updateImmediateChild(s,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,r=0,i=!0;if(this.forEachChild(qt,(o,a)=>{n[o]=a.val(e),s++,i&&xe.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+oC(this.getPriority().val())+":"),this.forEachChild(qt,(n,s)=>{const r=s.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":xS(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const r=this.resolveIndex_(s);if(r){const i=r.getPredecessorKey(new be(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new be(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new be(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,be.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,be.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===lc?-1:0}withIndex(e){if(e===ji||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new xe(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ji||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(qt),r=n.getIterator(qt);let i=s.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=s.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ji?null:this.indexMap_.get(e.toString())}}xe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class kU extends xe{constructor(){super(new nn(Cg),xe.EMPTY_NODE,ys.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return xe.EMPTY_NODE}isEmpty(){return!1}}const lc=new kU;Object.defineProperties(be,{MIN:{value:new be(no,xe.EMPTY_NODE)},MAX:{value:new be(Jr,lc)}});iC.__EMPTY_NODE=xe.EMPTY_NODE;_t.__childrenNodeConstructor=xe;bU(lc);CU(lc);/**
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
 */const NU=!0;function Bt(t,e=null){if(t===null)return xe.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),X(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new _t(n,Bt(e))}if(!(t instanceof Array)&&NU){const n=[];let s=!1;if(In(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=Bt(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new be(o,c)))}}),n.length===0)return xe.EMPTY_NODE;const i=Xl(n,IU,o=>o.name,Cg);if(s){const o=Xl(n,qt.getCompare());return new xe(i,Bt(e),new ys({".priority":o},{".priority":qt}))}else return new xe(i,Bt(e),ys.Default)}else{let n=xe.EMPTY_NODE;return In(t,(s,r)=>{if(Os(t,s)&&s.substring(0,1)!=="."){const i=Bt(r);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(s,i))}}),n.updatePriority(Bt(e))}}SU(Bt);/**
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
 */class OU extends zu{constructor(e){super(),this.indexPath_=e,X(!Ee(e)&&Ie(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),r=this.extractChild(n.node),i=s.compareTo(r);return i===0?vo(e.name,n.name):i}makePost(e,n){const s=Bt(e),r=xe.EMPTY_NODE.updateChild(this.indexPath_,s);return new be(n,r)}maxPost(){const e=xe.EMPTY_NODE.updateChild(this.indexPath_,lc);return new be(Jr,e)}toString(){return tC(this.indexPath_,0).join("/")}}/**
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
 */class xU extends zu{compare(e,n){const s=e.node.compareTo(n.node);return s===0?vo(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return be.MIN}maxPost(){return be.MAX}makePost(e,n){const s=Bt(e);return new be(n,s)}toString(){return".value"}}const DU=new xU;/**
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
 */function MU(t){return{type:"value",snapshotNode:t}}function LU(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function VU(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function nw(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function FU(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Ag{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=qt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return X(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return X(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:no}hasEnd(){return this.endSet_}getIndexEndValue(){return X(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return X(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Jr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return X(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===qt}copy(){const e=new Ag;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function sw(t){const e={};if(t.isDefault())return e;let n;if(t.index_===qt?n="$priority":t.index_===DU?n="$value":t.index_===ji?n="$key":(X(t.index_ instanceof OU,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Pt(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Pt(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Pt(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Pt(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Pt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function rw(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==qt&&(e.i=t.index_.toString()),e}/**
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
 */class Jl extends JS{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(X(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=r,this.log_=ac("p:rest:"),this.listens_={}}listen(e,n,s,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Jl.getListenId_(e,s),a={};this.listens_[o]=a;const c=sw(e._queryParams);this.restRequest_(i+".json",c,(u,h)=>{let f=h;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(i,f,!1,s),Wi(this.listens_,o)===a){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",r(d,null)}})}unlisten(e,n){const s=Jl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=sw(e._queryParams),s=e._path.toString(),r=new Ra;return this.restRequest_(s+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(s,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(n.auth=r.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+uo(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Pa(a.responseText)}catch{dn("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&dn("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class UU{constructor(){this.rootNode_=xe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Zl(){return{value:null,children:new Map}}function uC(t,e,n){if(Ee(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=Ie(e);t.children.has(s)||t.children.set(s,Zl());const r=t.children.get(s);e=Qe(e),uC(r,e,n)}}function Cd(t,e,n){t.value!==null?n(e,t.value):$U(t,(s,r)=>{const i=new Ye(e.toString()+"/"+s);Cd(r,i,n)})}function $U(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class jU{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&In(this.last_,(s,r)=>{n[s]=n[s]-r}),this.last_=e,n}}/**
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
 */const iw=10*1e3,BU=30*1e3,HU=300*1e3;class qU{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new jU(e);const s=iw+(BU-iw)*Math.random();wa(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;In(e,(r,i)=>{i>0&&Os(this.statsToReport_,r)&&(n[r]=i,s=!0)}),s&&this.server_.reportStats(n),wa(this.reportStats_.bind(this),Math.floor(Math.random()*2*HU))}}/**
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
 */var Gn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Gn||(Gn={}));function hC(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function fC(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function dC(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class eu{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Gn.ACK_USER_WRITE,this.source=hC()}operationForChild(e){if(Ee(this.path)){if(this.affectedTree.value!=null)return X(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ye(e));return new eu(Ve(),n,this.revert)}}else return X(Ie(this.path)===e,"operationForChild called for unrelated child."),new eu(Qe(this.path),this.affectedTree,this.revert)}}/**
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
 */class Zr{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Gn.OVERWRITE}operationForChild(e){return Ee(this.path)?new Zr(this.source,Ve(),this.snap.getImmediateChild(e)):new Zr(this.source,Qe(this.path),this.snap)}}/**
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
 */class Ha{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Gn.MERGE}operationForChild(e){if(Ee(this.path)){const n=this.children.subtree(new Ye(e));return n.isEmpty()?null:n.value?new Zr(this.source,Ve(),n.value):new Ha(this.source,Ve(),n)}else return X(Ie(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ha(this.source,Qe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Rg{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ee(e))return this.isFullyInitialized()&&!this.filtered_;const n=Ie(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function WU(t,e,n,s){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(FU(o.childName,o.snapshotNode))}),Wo(t,r,"child_removed",e,s,n),Wo(t,r,"child_added",e,s,n),Wo(t,r,"child_moved",i,s,n),Wo(t,r,"child_changed",e,s,n),Wo(t,r,"value",e,s,n),r}function Wo(t,e,n,s,r,i){const o=s.filter(a=>a.type===n);o.sort((a,c)=>KU(t,a,c)),o.forEach(a=>{const c=zU(t,a,i);r.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(c,t.query_))})})}function zU(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function KU(t,e,n){if(e.childName==null||n.childName==null)throw co("Should only compare child_ events.");const s=new be(e.childName,e.snapshotNode),r=new be(n.childName,n.snapshotNode);return t.index_.compare(s,r)}/**
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
 */function pC(t,e){return{eventCache:t,serverCache:e}}function Ea(t,e,n,s){return pC(new Rg(e,n,s),t.serverCache)}function gC(t,e,n,s){return pC(t.eventCache,new Rg(e,n,s))}function Ad(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ei(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Zh;const GU=()=>(Zh||(Zh=new nn(x2)),Zh);class Ke{static fromObject(e){let n=new Ke(null);return In(e,(s,r)=>{n=n.set(new Ye(s),r)}),n}constructor(e,n=GU()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ve(),value:this.value};if(Ee(e))return null;{const s=Ie(e),r=this.children.get(s);if(r!==null){const i=r.findRootMostMatchingPathAndValue(Qe(e),n);return i!=null?{path:wt(new Ye(s),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ee(e))return this;{const n=Ie(e),s=this.children.get(n);return s!==null?s.subtree(Qe(e)):new Ke(null)}}set(e,n){if(Ee(e))return new Ke(n,this.children);{const s=Ie(e),i=(this.children.get(s)||new Ke(null)).set(Qe(e),n),o=this.children.insert(s,i);return new Ke(this.value,o)}}remove(e){if(Ee(e))return this.children.isEmpty()?new Ke(null):new Ke(null,this.children);{const n=Ie(e),s=this.children.get(n);if(s){const r=s.remove(Qe(e));let i;return r.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,r),this.value===null&&i.isEmpty()?new Ke(null):new Ke(this.value,i)}else return this}}get(e){if(Ee(e))return this.value;{const n=Ie(e),s=this.children.get(n);return s?s.get(Qe(e)):null}}setTree(e,n){if(Ee(e))return n;{const s=Ie(e),i=(this.children.get(s)||new Ke(null)).setTree(Qe(e),n);let o;return i.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,i),new Ke(this.value,o)}}fold(e){return this.fold_(Ve(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((r,i)=>{s[r]=i.fold_(wt(e,r),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Ve(),n)}findOnPath_(e,n,s){const r=this.value?s(n,this.value):!1;if(r)return r;if(Ee(e))return null;{const i=Ie(e),o=this.children.get(i);return o?o.findOnPath_(Qe(e),wt(n,i),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ve(),n)}foreachOnPath_(e,n,s){if(Ee(e))return this;{this.value&&s(n,this.value);const r=Ie(e),i=this.children.get(r);return i?i.foreachOnPath_(Qe(e),wt(n,r),s):new Ke(null)}}foreach(e){this.foreach_(Ve(),e)}foreach_(e,n){this.children.inorderTraversal((s,r)=>{r.foreach_(wt(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Nn{constructor(e){this.writeTree_=e}static empty(){return new Nn(new Ke(null))}}function Ta(t,e,n){if(Ee(e))return new Nn(new Ke(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const r=s.path;let i=s.value;const o=vn(r,e);return i=i.updateChild(o,n),new Nn(t.writeTree_.set(r,i))}else{const r=new Ke(n),i=t.writeTree_.setTree(e,r);return new Nn(i)}}}function ow(t,e,n){let s=t;return In(n,(r,i)=>{s=Ta(s,wt(e,r),i)}),s}function aw(t,e){if(Ee(e))return Nn.empty();{const n=t.writeTree_.setTree(e,new Ke(null));return new Nn(n)}}function Rd(t,e){return ai(t,e)!=null}function ai(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(vn(n.path,e)):null}function cw(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(qt,(s,r)=>{e.push(new be(s,r))}):t.writeTree_.children.inorderTraversal((s,r)=>{r.value!=null&&e.push(new be(s,r.value))}),e}function ur(t,e){if(Ee(e))return t;{const n=ai(t,e);return n!=null?new Nn(new Ke(n)):new Nn(t.writeTree_.subtree(e))}}function Pd(t){return t.writeTree_.isEmpty()}function so(t,e){return mC(Ve(),t.writeTree_,e)}function mC(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(X(i.value!==null,"Priority writes must always be leaf nodes"),s=i.value):n=mC(wt(t,r),i,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(wt(t,".priority"),s)),n}}/**
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
 */function _C(t,e){return TC(e,t)}function QU(t,e,n,s,r){X(s>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:r}),r&&(t.visibleWrites=Ta(t.visibleWrites,e,n)),t.lastWriteId=s}function YU(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function XU(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);X(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let r=s.visible,i=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&JU(a,s.path)?r=!1:Rn(s.path,a.path)&&(i=!0)),o--}if(r){if(i)return ZU(t),!0;if(s.snap)t.visibleWrites=aw(t.visibleWrites,s.path);else{const a=s.children;In(a,c=>{t.visibleWrites=aw(t.visibleWrites,wt(s.path,c))})}return!0}else return!1}function JU(t,e){if(t.snap)return Rn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Rn(wt(t.path,n),e))return!0;return!1}function ZU(t){t.visibleWrites=yC(t.allWrites,e4,Ve()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function e4(t){return t.visible}function yC(t,e,n){let s=Nn.empty();for(let r=0;r<t.length;++r){const i=t[r];if(e(i)){const o=i.path;let a;if(i.snap)Rn(n,o)?(a=vn(n,o),s=Ta(s,a,i.snap)):Rn(o,n)&&(a=vn(o,n),s=Ta(s,Ve(),i.snap.getChild(a)));else if(i.children){if(Rn(n,o))a=vn(n,o),s=ow(s,a,i.children);else if(Rn(o,n))if(a=vn(o,n),Ee(a))s=ow(s,Ve(),i.children);else{const c=Wi(i.children,Ie(a));if(c){const u=c.getChild(Qe(a));s=Ta(s,Ve(),u)}}}else throw co("WriteRecord should have .snap or .children")}}return s}function vC(t,e,n,s,r){if(!s&&!r){const i=ai(t.visibleWrites,e);if(i!=null)return i;{const o=ur(t.visibleWrites,e);if(Pd(o))return n;if(n==null&&!Rd(o,Ve()))return null;{const a=n||xe.EMPTY_NODE;return so(o,a)}}}else{const i=ur(t.visibleWrites,e);if(!r&&Pd(i))return n;if(!r&&n==null&&!Rd(i,Ve()))return null;{const o=function(u){return(u.visible||r)&&(!s||!~s.indexOf(u.writeId))&&(Rn(u.path,e)||Rn(e,u.path))},a=yC(t.allWrites,o,e),c=n||xe.EMPTY_NODE;return so(a,c)}}}function t4(t,e,n){let s=xe.EMPTY_NODE;const r=ai(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(qt,(i,o)=>{s=s.updateImmediateChild(i,o)}),s;if(n){const i=ur(t.visibleWrites,e);return n.forEachChild(qt,(o,a)=>{const c=so(ur(i,new Ye(o)),a);s=s.updateImmediateChild(o,c)}),cw(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const i=ur(t.visibleWrites,e);return cw(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function n4(t,e,n,s,r){X(s||r,"Either existingEventSnap or existingServerSnap must exist");const i=wt(e,n);if(Rd(t.visibleWrites,i))return null;{const o=ur(t.visibleWrites,i);return Pd(o)?r.getChild(n):so(o,r.getChild(n))}}function s4(t,e,n,s){const r=wt(e,n),i=ai(t.visibleWrites,r);if(i!=null)return i;if(s.isCompleteForChild(n)){const o=ur(t.visibleWrites,r);return so(o,s.getNode().getImmediateChild(n))}else return null}function r4(t,e){return ai(t.visibleWrites,e)}function i4(t,e,n,s,r,i,o){let a;const c=ur(t.visibleWrites,e),u=ai(c,Ve());if(u!=null)a=u;else if(n!=null)a=so(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),d=i?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let g=d.getNext();for(;g&&h.length<r;)f(g,s)!==0&&h.push(g),g=d.getNext();return h}else return[]}function o4(){return{visibleWrites:Nn.empty(),allWrites:[],lastWriteId:-1}}function kd(t,e,n,s){return vC(t.writeTree,t.treePath,e,n,s)}function wC(t,e){return t4(t.writeTree,t.treePath,e)}function lw(t,e,n,s){return n4(t.writeTree,t.treePath,e,n,s)}function tu(t,e){return r4(t.writeTree,wt(t.treePath,e))}function a4(t,e,n,s,r,i){return i4(t.writeTree,t.treePath,e,n,s,r,i)}function Pg(t,e,n){return s4(t.writeTree,t.treePath,e,n)}function EC(t,e){return TC(wt(t.treePath,e),t.writeTree)}function TC(t,e){return{treePath:t,writeTree:e}}/**
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
 */class c4{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;X(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),X(s!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(s);if(r){const i=r.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(s,nw(s,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(s,VU(s,r.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(s,LU(s,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(s,nw(s,e.snapshotNode,r.oldSnap));else throw co("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class l4{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const IC=new l4;class kg{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Rg(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Pg(this.writes_,e,s)}}getChildAfterChild(e,n,s){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ei(this.viewCache_),i=a4(this.writes_,r,n,1,s,e);return i.length===0?null:i[0]}}function u4(t,e){X(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),X(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function h4(t,e,n,s,r){const i=new c4;let o,a;if(n.type===Gn.OVERWRITE){const u=n;u.source.fromUser?o=Nd(t,e,u.path,u.snap,s,r,i):(X(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!Ee(u.path),o=nu(t,e,u.path,u.snap,s,r,a,i))}else if(n.type===Gn.MERGE){const u=n;u.source.fromUser?o=d4(t,e,u.path,u.children,s,r,i):(X(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Od(t,e,u.path,u.children,s,r,a,i))}else if(n.type===Gn.ACK_USER_WRITE){const u=n;u.revert?o=m4(t,e,u.path,s,r,i):o=p4(t,e,u.path,u.affectedTree,s,r,i)}else if(n.type===Gn.LISTEN_COMPLETE)o=g4(t,e,n.path,s,i);else throw co("Unknown operation type: "+n.type);const c=i.getChanges();return f4(e,o,c),{viewCache:o,changes:c}}function f4(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const r=s.getNode().isLeafNode()||s.getNode().isEmpty(),i=Ad(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!s.getNode().equals(i)||!s.getNode().getPriority().equals(i.getPriority()))&&n.push(MU(Ad(e)))}}function bC(t,e,n,s,r,i){const o=e.eventCache;if(tu(s,n)!=null)return e;{let a,c;if(Ee(n))if(X(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=ei(e),h=u instanceof xe?u:xe.EMPTY_NODE,f=wC(s,h);a=t.filter.updateFullNode(e.eventCache.getNode(),f,i)}else{const u=kd(s,ei(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=Ie(n);if(u===".priority"){X(yr(n)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const f=lw(s,n,h,c);f!=null?a=t.filter.updatePriority(h,f):a=o.getNode()}else{const h=Qe(n);let f;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const d=lw(s,n,o.getNode(),c);d!=null?f=o.getNode().getImmediateChild(u).updateChild(h,d):f=o.getNode().getImmediateChild(u)}else f=Pg(s,u,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),u,f,h,r,i):a=o.getNode()}}return Ea(e,a,o.isFullyInitialized()||Ee(n),t.filter.filtersNodes())}}function nu(t,e,n,s,r,i,o,a){const c=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(Ee(n))u=h.updateFullNode(c.getNode(),s,null);else if(h.filtersNodes()&&!c.isFiltered()){const g=c.getNode().updateChild(n,s);u=h.updateFullNode(c.getNode(),g,null)}else{const g=Ie(n);if(!c.isCompleteForPath(n)&&yr(n)>1)return e;const _=Qe(n),I=c.getNode().getImmediateChild(g).updateChild(_,s);g===".priority"?u=h.updatePriority(c.getNode(),I):u=h.updateChild(c.getNode(),g,I,_,IC,null)}const f=gC(e,u,c.isFullyInitialized()||Ee(n),h.filtersNodes()),d=new kg(r,f,i);return bC(t,f,n,r,d,a)}function Nd(t,e,n,s,r,i,o){const a=e.eventCache;let c,u;const h=new kg(r,e,i);if(Ee(n))u=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Ea(e,u,!0,t.filter.filtersNodes());else{const f=Ie(n);if(f===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),s),c=Ea(e,u,a.isFullyInitialized(),a.isFiltered());else{const d=Qe(n),g=a.getNode().getImmediateChild(f);let _;if(Ee(d))_=s;else{const v=h.getCompleteChild(f);v!=null?eC(d)===".priority"&&v.getChild(nC(d)).isEmpty()?_=v:_=v.updateChild(d,s):_=xe.EMPTY_NODE}if(g.equals(_))c=e;else{const v=t.filter.updateChild(a.getNode(),f,_,d,h,o);c=Ea(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function uw(t,e){return t.eventCache.isCompleteForChild(e)}function d4(t,e,n,s,r,i,o){let a=e;return s.foreach((c,u)=>{const h=wt(n,c);uw(e,Ie(h))&&(a=Nd(t,a,h,u,r,i,o))}),s.foreach((c,u)=>{const h=wt(n,c);uw(e,Ie(h))||(a=Nd(t,a,h,u,r,i,o))}),a}function hw(t,e,n){return n.foreach((s,r)=>{e=e.updateChild(s,r)}),e}function Od(t,e,n,s,r,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;Ee(n)?u=s:u=new Ke(null).setTree(n,s);const h=e.serverCache.getNode();return u.children.inorderTraversal((f,d)=>{if(h.hasChild(f)){const g=e.serverCache.getNode().getImmediateChild(f),_=hw(t,g,d);c=nu(t,c,new Ye(f),_,r,i,o,a)}}),u.children.inorderTraversal((f,d)=>{const g=!e.serverCache.isCompleteForChild(f)&&d.value===null;if(!h.hasChild(f)&&!g){const _=e.serverCache.getNode().getImmediateChild(f),v=hw(t,_,d);c=nu(t,c,new Ye(f),v,r,i,o,a)}}),c}function p4(t,e,n,s,r,i,o){if(tu(r,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(Ee(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return nu(t,e,n,c.getNode().getChild(n),r,i,a,o);if(Ee(n)){let u=new Ke(null);return c.getNode().forEachChild(ji,(h,f)=>{u=u.set(new Ye(h),f)}),Od(t,e,n,u,r,i,a,o)}else return e}else{let u=new Ke(null);return s.foreach((h,f)=>{const d=wt(n,h);c.isCompleteForPath(d)&&(u=u.set(h,c.getNode().getChild(d)))}),Od(t,e,n,u,r,i,a,o)}}function g4(t,e,n,s,r){const i=e.serverCache,o=gC(e,i.getNode(),i.isFullyInitialized()||Ee(n),i.isFiltered());return bC(t,o,n,s,IC,r)}function m4(t,e,n,s,r,i){let o;if(tu(s,n)!=null)return e;{const a=new kg(s,e,r),c=e.eventCache.getNode();let u;if(Ee(n)||Ie(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=kd(s,ei(e));else{const f=e.serverCache.getNode();X(f instanceof xe,"serverChildren would be complete if leaf node"),h=wC(s,f)}h=h,u=t.filter.updateFullNode(c,h,i)}else{const h=Ie(n);let f=Pg(s,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=c.getImmediateChild(h)),f!=null?u=t.filter.updateChild(c,h,f,Qe(n),a,i):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(c,h,xe.EMPTY_NODE,Qe(n),a,i):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=kd(s,ei(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||tu(s,Ve())!=null,Ea(e,u,o,t.filter.filtersNodes())}}function _4(t,e){const n=ei(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Ee(e)&&!n.getImmediateChild(Ie(e)).isEmpty())?n.getChild(e):null}function fw(t,e,n,s){e.type===Gn.MERGE&&e.source.queryId!==null&&(X(ei(t.viewCache_),"We should always have a full cache before handling merges"),X(Ad(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,i=h4(t.processor_,r,e,n,s);return u4(t.processor_,i.viewCache),X(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,y4(t,i.changes,i.viewCache.eventCache.getNode())}function y4(t,e,n,s){const r=t.eventRegistrations_;return WU(t.eventGenerator_,e,n,r)}/**
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
 */let dw;function v4(t){X(!dw,"__referenceConstructor has already been defined"),dw=t}function Ng(t,e,n,s){const r=e.source.queryId;if(r!==null){const i=t.views.get(r);return X(i!=null,"SyncTree gave us an op for an invalid query."),fw(i,e,n,s)}else{let i=[];for(const o of t.views.values())i=i.concat(fw(o,e,n,s));return i}}function Og(t,e){let n=null;for(const s of t.views.values())n=n||_4(s,e);return n}/**
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
 */let pw;function w4(t){X(!pw,"__referenceConstructor has already been defined"),pw=t}class gw{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ke(null),this.pendingWriteTree_=o4(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function E4(t,e,n,s,r){return QU(t.pendingWriteTree_,e,n,s,r),r?Gu(t,new Zr(hC(),e,n)):[]}function Ci(t,e,n=!1){const s=YU(t.pendingWriteTree_,e);if(XU(t.pendingWriteTree_,e)){let i=new Ke(null);return s.snap!=null?i=i.set(Ve(),!0):In(s.children,o=>{i=i.set(new Ye(o),!0)}),Gu(t,new eu(s.path,i,n))}else return[]}function Ku(t,e,n){return Gu(t,new Zr(fC(),e,n))}function T4(t,e,n){const s=Ke.fromObject(n);return Gu(t,new Ha(fC(),e,s))}function I4(t,e,n,s){const r=RC(t,s);if(r!=null){const i=PC(r),o=i.path,a=i.queryId,c=vn(o,e),u=new Zr(dC(a),c,n);return kC(t,o,u)}else return[]}function b4(t,e,n,s){const r=RC(t,s);if(r){const i=PC(r),o=i.path,a=i.queryId,c=vn(o,e),u=Ke.fromObject(n),h=new Ha(dC(a),c,u);return kC(t,o,h)}else return[]}function SC(t,e,n){const r=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=vn(o,e),u=Og(a,c);if(u)return u});return vC(r,e,i,n,!0)}function Gu(t,e){return CC(e,t.syncPointTree_,null,_C(t.pendingWriteTree_,Ve()))}function CC(t,e,n,s){if(Ee(t.path))return AC(t,e,n,s);{const r=e.get(Ve());n==null&&r!=null&&(n=Og(r,Ve()));let i=[];const o=Ie(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const u=n?n.getImmediateChild(o):null,h=EC(s,o);i=i.concat(CC(a,c,u,h))}return r&&(i=i.concat(Ng(r,t,s,n))),i}}function AC(t,e,n,s){const r=e.get(Ve());n==null&&r!=null&&(n=Og(r,Ve()));let i=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,u=EC(s,o),h=t.operationForChild(o);h&&(i=i.concat(AC(h,a,c,u)))}),r&&(i=i.concat(Ng(r,t,s,n))),i}function RC(t,e){return t.tagToQueryMap.get(e)}function PC(t){const e=t.indexOf("$");return X(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ye(t.substr(0,e))}}function kC(t,e,n){const s=t.syncPointTree_.get(e);X(s,"Missing sync point for query tag that we're tracking");const r=_C(t.pendingWriteTree_,e);return Ng(s,n,r,null)}/**
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
 */class xg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new xg(n)}node(){return this.node_}}class Dg{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=wt(this.path_,e);return new Dg(this.syncTree_,n)}node(){return SC(this.syncTree_,this.path_)}}const S4=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},mw=function(t,e,n){if(!t||typeof t!="object")return t;if(X(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return C4(t[".sv"],e,n);if(typeof t[".sv"]=="object")return A4(t[".sv"],e);X(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},C4=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:X(!1,"Unexpected server value: "+t)}},A4=function(t,e,n){t.hasOwnProperty("increment")||X(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&X(!1,"Unexpected increment value: "+s);const r=e.node();if(X(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const o=r.getValue();return typeof o!="number"?s:o+s},R4=function(t,e,n,s){return Mg(e,new Dg(n,t),s)},P4=function(t,e,n){return Mg(t,new xg(e),n)};function Mg(t,e,n){const s=t.getPriority().val(),r=mw(s,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=mw(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new _t(a,Bt(r)):t}else{const o=t;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new _t(r))),o.forEachChild(qt,(a,c)=>{const u=Mg(c,e.getImmediateChild(a),n);u!==c&&(i=i.updateImmediateChild(a,u))}),i}}/**
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
 */class Lg{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Vg(t,e){let n=e instanceof Ye?e:new Ye(e),s=t,r=Ie(n);for(;r!==null;){const i=Wi(s.node.children,r)||{children:{},childCount:0};s=new Lg(r,s,i),n=Qe(n),r=Ie(n)}return s}function wo(t){return t.node.value}function NC(t,e){t.node.value=e,xd(t)}function OC(t){return t.node.childCount>0}function k4(t){return wo(t)===void 0&&!OC(t)}function Qu(t,e){In(t.node.children,(n,s)=>{e(new Lg(n,t,s))})}function xC(t,e,n,s){n&&e(t),Qu(t,r=>{xC(r,e,!0)})}function N4(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function uc(t){return new Ye(t.parent===null?t.name:uc(t.parent)+"/"+t.name)}function xd(t){t.parent!==null&&O4(t.parent,t.name,t)}function O4(t,e,n){const s=k4(n),r=Os(t.node.children,e);s&&r?(delete t.node.children[e],t.node.childCount--,xd(t)):!s&&!r&&(t.node.children[e]=n.node,t.node.childCount++,xd(t))}/**
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
 */const x4=/[\[\].#$\/\u0000-\u001F\u007F]/,D4=/[\[\].#$\u0000-\u001F\u007F]/,ef=10*1024*1024,DC=function(t){return typeof t=="string"&&t.length!==0&&!x4.test(t)},M4=function(t){return typeof t=="string"&&t.length!==0&&!D4.test(t)},L4=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),M4(t)},MC=function(t,e,n){const s=n instanceof Ye?new gU(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+xr(s));if(typeof e=="function")throw new Error(t+"contains a function "+xr(s)+" with contents = "+e.toString());if(DS(e))throw new Error(t+"contains "+e.toString()+" "+xr(s));if(typeof e=="string"&&e.length>ef/3&&bu(e)>ef)throw new Error(t+"contains a string greater than "+ef+" utf8 bytes "+xr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(In(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!DC(o)))throw new Error(t+" contains an invalid key ("+o+") "+xr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);mU(s,o),MC(t,a,s),_U(s)}),r&&i)throw new Error(t+' contains ".value" child '+xr(s)+" in addition to actual children.")}},V4=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!DC(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!L4(n))throw new Error(g1(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class F4{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function U4(t,e){let n=null;for(let s=0;s<e.length;s++){const r=e[s],i=r.getPath();n!==null&&!sC(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(r)}n&&t.eventLists_.push(n)}function ci(t,e,n){U4(t,n),$4(t,s=>Rn(s,e)||Rn(e,s))}function $4(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const r=t.eventLists_[s];if(r){const i=r.path;e(i)?(j4(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function j4(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();va&&jt("event: "+n.toString()),cc(s)}}}/**
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
 */const B4="repo_interrupt",H4=25;class q4{constructor(e,n,s,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new F4,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Zl(),this.transactionQueueTree_=new Lg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function W4(t,e,n){if(t.stats_=Ig(t.repoInfo_),t.forceRestClient_||U2())t.server_=new Jl(t.repoInfo_,(s,r,i,o)=>{_w(t,s,r,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>yw(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Pt(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new vs(t.repoInfo_,e,(s,r,i,o)=>{_w(t,s,r,i,o)},s=>{yw(t,s)},s=>{K4(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=W2(t.repoInfo_,()=>new qU(t.stats_,t.server_)),t.infoData_=new UU,t.infoSyncTree_=new gw({startListening:(s,r,i,o)=>{let a=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(a=Ku(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Fg(t,"connected",!1),t.serverSyncTree_=new gw({startListening:(s,r,i,o)=>(t.server_.listen(s,i,r,(a,c)=>{const u=o(a,c);ci(t.eventQueue_,s._path,u)}),[]),stopListening:(s,r)=>{t.server_.unlisten(s,r)}})}function z4(t){const n=t.infoData_.getNode(new Ye(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function LC(t){return S4({timestamp:z4(t)})}function _w(t,e,n,s,r){t.dataUpdateCount++;const i=new Ye(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(s){const c=Pl(n,u=>Bt(u));o=b4(t.serverSyncTree_,i,c,r)}else{const c=Bt(n);o=I4(t.serverSyncTree_,i,c,r)}else if(s){const c=Pl(n,u=>Bt(u));o=T4(t.serverSyncTree_,i,c)}else{const c=Bt(n);o=Ku(t.serverSyncTree_,i,c)}let a=i;o.length>0&&(a=$g(t,i)),ci(t.eventQueue_,a,o)}function yw(t,e){Fg(t,"connected",e),e===!1&&Q4(t)}function K4(t,e){In(e,(n,s)=>{Fg(t,n,s)})}function Fg(t,e,n){const s=new Ye("/.info/"+e),r=Bt(n);t.infoData_.updateSnapshot(s,r);const i=Ku(t.infoSyncTree_,s,r);ci(t.eventQueue_,s,i)}function G4(t){return t.nextWriteId_++}function Q4(t){VC(t,"onDisconnectEvents");const e=LC(t),n=Zl();Cd(t.onDisconnect_,Ve(),(r,i)=>{const o=R4(r,i,t.serverSyncTree_,e);uC(n,r,o)});let s=[];Cd(n,Ve(),(r,i)=>{s=s.concat(Ku(t.serverSyncTree_,r,i));const o=Z4(t,r);$g(t,o)}),t.onDisconnect_=Zl(),ci(t.eventQueue_,Ve(),s)}function Y4(t){t.persistentConnection_&&t.persistentConnection_.interrupt(B4)}function VC(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),jt(n,...e)}function FC(t,e,n){return SC(t.serverSyncTree_,e,n)||xe.EMPTY_NODE}function Ug(t,e=t.transactionQueueTree_){if(e||Yu(t,e),wo(e)){const n=$C(t,e);X(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&X4(t,uc(e),n)}else OC(e)&&Qu(e,n=>{Ug(t,n)})}function X4(t,e,n){const s=n.map(u=>u.currentWriteId),r=FC(t,e,s);let i=r;const o=r.hash();for(let u=0;u<n.length;u++){const h=n[u];X(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=vn(e,h.path);i=i.updateChild(f,h.currentOutputSnapshotRaw)}const a=i.val(!0),c=e;t.server_.put(c.toString(),a,u=>{VC(t,"transaction put response",{path:c.toString(),status:u});let h=[];if(u==="ok"){const f=[];for(let d=0;d<n.length;d++)n[d].status=2,h=h.concat(Ci(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&f.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Yu(t,Vg(t.transactionQueueTree_,e)),Ug(t,t.transactionQueueTree_),ci(t.eventQueue_,e,h);for(let d=0;d<f.length;d++)cc(f[d])}else{if(u==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{dn("transaction at "+c.toString()+" failed: "+u);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=u}$g(t,e)}},o)}function $g(t,e){const n=UC(t,e),s=uc(n),r=$C(t,n);return J4(t,r,s),s}function J4(t,e,n){if(e.length===0)return;const s=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],u=vn(n,c.path);let h=!1,f;if(X(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,f=c.abortReason,r=r.concat(Ci(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=H4)h=!0,f="maxretry",r=r.concat(Ci(t.serverSyncTree_,c.currentWriteId,!0));else{const d=FC(t,c.path,o);c.currentInputSnapshot=d;const g=e[a].update(d.val());if(g!==void 0){MC("transaction failed: Data returned ",g,c.path);let _=Bt(g);typeof g=="object"&&g!=null&&Os(g,".priority")||(_=_.updatePriority(d.getPriority()));const I=c.currentWriteId,D=LC(t),O=P4(_,d,D);c.currentOutputSnapshotRaw=_,c.currentOutputSnapshotResolved=O,c.currentWriteId=G4(t),o.splice(o.indexOf(I),1),r=r.concat(E4(t.serverSyncTree_,c.path,O,c.currentWriteId,c.applyLocally)),r=r.concat(Ci(t.serverSyncTree_,I,!0))}else h=!0,f="nodata",r=r.concat(Ci(t.serverSyncTree_,c.currentWriteId,!0))}ci(t.eventQueue_,n,r),r=[],h&&(e[a].status=2,(function(d){setTimeout(d,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(f),!1,null))))}Yu(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)cc(s[a]);Ug(t,t.transactionQueueTree_)}function UC(t,e){let n,s=t.transactionQueueTree_;for(n=Ie(e);n!==null&&wo(s)===void 0;)s=Vg(s,n),e=Qe(e),n=Ie(e);return s}function $C(t,e){const n=[];return jC(t,e,n),n.sort((s,r)=>s.order-r.order),n}function jC(t,e,n){const s=wo(e);if(s)for(let r=0;r<s.length;r++)n.push(s[r]);Qu(e,r=>{jC(t,r,n)})}function Yu(t,e){const n=wo(e);if(n){let s=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[s]=n[r],s++);n.length=s,NC(e,n.length>0?n:void 0)}Qu(e,s=>{Yu(t,s)})}function Z4(t,e){const n=uc(UC(t,e)),s=Vg(t.transactionQueueTree_,e);return N4(s,r=>{tf(t,r)}),tf(t,s),xC(s,r=>{tf(t,r)}),n}function tf(t,e){const n=wo(e);if(n){const s=[];let r=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(X(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(X(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(Ci(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?NC(e,void 0):n.length=i+1,ci(t.eventQueue_,uc(e),r);for(let o=0;o<s.length;o++)cc(s[o])}}/**
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
 */function e$(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let r=n[s];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function t$(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):dn(`Invalid query segment '${n}' in query '${t}'`)}return e}const vw=function(t,e){const n=n$(t),s=n.namespace;n.domain==="firebase.com"&&Xr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Xr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||N2();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new B2(n.host,n.secure,s,r,e,"",s!==n.subdomain),path:new Ye(n.pathString)}},n$=function(t){let e="",n="",s="",r="",i="",o=!0,a="https",c=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(h,f)),h<f&&(r=e$(t.substring(h,f)));const d=t$(t.substring(Math.min(t.length,f)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),n=e.substring(_+1),i=s}"ns"in d&&(i=d.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:a,pathString:r,namespace:i}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e,n,s,r){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=r}get key(){return Ee(this._path)?null:eC(this._path)}get ref(){return new Eo(this._repo,this._path)}get _queryIdentifier(){const e=rw(this._queryParams),n=Eg(e);return n==="{}"?"default":n}get _queryObject(){return rw(this._queryParams)}isEqual(e){if(e=Xt(e),!(e instanceof jg))return!1;const n=this._repo===e._repo,s=sC(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&s&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+pU(this._path)}}class Eo extends jg{constructor(e,n){super(e,n,new Ag,!1)}get parent(){const e=nC(this._path);return e===null?null:new Eo(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}v4(Eo);w4(Eo);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s$="FIREBASE_DATABASE_EMULATOR_HOST",Dd={};let r$=!1;function i$(t,e,n,s,r){let i=s||t.options.databaseURL;i===void 0&&(t.options.projectId||Xr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),jt("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=vw(i,r),a=o.repoInfo,c;typeof process<"u"&&Uv&&(c=Uv[s$]),c?(i=`http://${c}?ns=${a.namespace}`,o=vw(i,r),a=o.repoInfo):o.repoInfo.secure;const u=new j2(t.name,t.options,e);V4("Invalid Firebase Database URL",o),Ee(o.path)||Xr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=a$(a,t,u,new $2(t,n));return new c$(h,t)}function o$(t,e){const n=Dd[e];(!n||n[t.key]!==t)&&Xr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Y4(t),delete n[t.key]}function a$(t,e,n,s){let r=Dd[e.name];r||(r={},Dd[e.name]=r);let i=r[t.toURLString()];return i&&Xr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new q4(t,r$,n,s),r[t.toURLString()]=i,i}class c${constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(W4(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Eo(this._repo,Ve())),this._rootInternal}_delete(){return this._rootInternal!==null&&(o$(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Xr("Cannot call "+e+" on a deleted database.")}}/**
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
 */function l$(t){S2(vr),es(new xn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return i$(s,r,i,n)},"PUBLIC").setMultipleInstances(!0)),fn($v,jv,t),fn($v,jv,"esm2020")}vs.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};vs.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};l$();/**
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
 */const BC="firebasestorage.googleapis.com",HC="storageBucket",u$=120*1e3,h$=600*1e3;/**
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
 */class bt extends ss{constructor(e,n,s=0){super(nf(e),`Firebase Storage: ${n} (${nf(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,bt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return nf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var It;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(It||(It={}));function nf(t){return"storage/"+t}function qC(){const t="An unknown error occurred, please check the error payload for server response.";return new bt(It.UNKNOWN,t)}function f$(t){return new bt(It.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function d$(t){return new bt(It.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function p$(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new bt(It.UNAUTHENTICATED,t)}function g$(){return new bt(It.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function m$(t){return new bt(It.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function _$(){return new bt(It.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function y$(){return new bt(It.CANCELED,"User canceled the upload/download.")}function v$(t){return new bt(It.INVALID_URL,"Invalid URL '"+t+"'.")}function w$(t){return new bt(It.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function E$(){return new bt(It.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+HC+"' property when initializing the app?")}function T$(){return new bt(It.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Md(t){return new bt(It.INVALID_ARGUMENT,t)}function WC(){return new bt(It.APP_DELETED,"The Firebase app was deleted.")}function I$(t){return new bt(It.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function zo(t){throw new bt(It.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class hn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=hn.makeFromUrl(e,n)}catch{return new hn(e,"")}if(s.path==="")return s;throw w$(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(S){S.path.charAt(S.path.length-1)==="/"&&(S.path_=S.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(S){S.path_=decodeURIComponent(S.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${h}/b/${r}/o${d}`,"i"),_={bucket:1,path:3},v=n===BC?"(?:storage.googleapis.com|storage.cloud.google.com)":n,I="([^?#]*)",D=new RegExp(`^https?://${v}/${r}/${I}`,"i"),y=[{regex:a,indices:c,postModify:i},{regex:g,indices:_,postModify:u},{regex:D,indices:{bucket:1,path:2},postModify:u}];for(let S=0;S<y.length;S++){const x=y[S],L=x.regex.exec(e);if(L){const b=L[x.indices.bucket];let T=L[x.indices.path];T||(T=""),s=new hn(b,T),x.postModify(s);break}}if(s==null)throw v$(e);return s}}class b${constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function S$(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function h(...I){u||(u=!0,e.apply(null,I))}function f(I){r=setTimeout(()=>{r=null,t(g,c())},I)}function d(){i&&clearTimeout(i)}function g(I,...D){if(u){d();return}if(I){d(),h.call(null,I,...D);return}if(c()||o){d(),h.call(null,I,...D);return}s<64&&(s*=2);let y;a===1?(a=2,y=0):y=(s+Math.random())*1e3,f(y)}let _=!1;function v(I){_||(_=!0,d(),!u&&(r!==null?(I||(a=2),clearTimeout(r),f(0)):I||(a=1)))}return f(0),i=setTimeout(()=>{o=!0,v(!0)},n),v}function C$(t){t(!1)}/**
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
 */function A$(t){return t!==void 0}function R$(t){return typeof t=="object"&&!Array.isArray(t)}function zC(t){return typeof t=="string"||t instanceof String}function ww(t,e,n,s){if(s<e)throw Md(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Md(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function KC(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function GC(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}var Wr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Wr||(Wr={}));/**
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
 */function P$(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
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
 */class k${constructor(e,n,s,r,i,o,a,c,u,h,f,d=!0,g=!1){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=f,this.retry=d,this.isUsingEmulator=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,v)=>{this.resolve_=_,this.reject_=v,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new qc(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Wr.NO_ERROR,c=i.getStatus();if(!a||P$(c,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===Wr.ABORT;s(!1,new qc(!1,null,h));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new qc(u,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());A$(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=qC();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?WC():y$();o(c)}else{const c=_$();o(c)}};this.canceled_?n(!1,new qc(!1,null,!0)):this.backoffId_=S$(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&C$(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class qc{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function N$(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function O$(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function x$(t,e){e&&(t["X-Firebase-GMPID"]=e)}function D$(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function M$(t,e,n,s,r,i,o=!0,a=!1){const c=GC(t.urlParams),u=t.url+c,h=Object.assign({},t.headers);return x$(h,e),N$(h,n),O$(h,i),D$(h,s),new k$(u,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o,a)}/**
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
 */function QC(t){let e;try{e=JSON.parse(t)}catch{return null}return R$(e)?e:null}/**
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
 */function L$(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function V$(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function YC(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function F$(t,e){return e}class Gt{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||F$}}let Wc=null;function U$(t){return!zC(t)||t.length<2?t:YC(t)}function $$(){if(Wc)return Wc;const t=[];t.push(new Gt("bucket")),t.push(new Gt("generation")),t.push(new Gt("metageneration")),t.push(new Gt("name","fullPath",!0));function e(i,o){return U$(o)}const n=new Gt("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new Gt("size");return r.xform=s,t.push(r),t.push(new Gt("timeCreated")),t.push(new Gt("updated")),t.push(new Gt("md5Hash",null,!0)),t.push(new Gt("cacheControl",null,!0)),t.push(new Gt("contentDisposition",null,!0)),t.push(new Gt("contentEncoding",null,!0)),t.push(new Gt("contentLanguage",null,!0)),t.push(new Gt("contentType",null,!0)),t.push(new Gt("metadata","customMetadata",!0)),Wc=t,Wc}function j$(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new hn(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function B$(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return j$(s,t),s}function H$(t,e,n){const s=QC(e);return s===null?null:B$(t,s,n)}function q$(t,e,n,s){const r=QC(e);if(r===null||!zC(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const h=t.bucket,f=t.fullPath,d="/b/"+o(h)+"/o/"+o(f),g=KC(d,n,s),_=GC({alt:"media",token:u});return g+_})[0]}class W${constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function z$(t){if(!t)throw qC()}function K$(t,e){function n(s,r){const i=H$(t,r,e);return z$(i!==null),q$(i,r,t.host,t._protocol)}return n}function G$(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=g$():r=p$():n.getStatus()===402?r=d$(t.bucket):n.getStatus()===403?r=m$(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function Q$(t){const e=G$(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=f$(t.path)),i.serverResponse=r.serverResponse,i}return n}function Y$(t,e,n){const s=e.fullServerUrl(),r=KC(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new W$(r,i,K$(t,n),o);return a.errorHandler=Q$(e),a}class X${constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Wr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Wr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Wr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r,i){if(this.sent_)throw zo("cannot .send() more than once");if(ri(e)&&s&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw zo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw zo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw zo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw zo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class J$ extends X${initXhr(){this.xhr_.responseType="text"}}function Z$(){return new J$}/**
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
 */class ti{constructor(e,n){this._service=e,n instanceof hn?this._location=n:this._location=hn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ti(e,n)}get root(){const e=new hn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return YC(this._location.path)}get storage(){return this._service}get parent(){const e=L$(this._location.path);if(e===null)return null;const n=new hn(this._location.bucket,e);return new ti(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw I$(e)}}function ej(t){t._throwIfRoot("getDownloadURL");const e=Y$(t.storage,t._location,$$());return t.storage.makeRequestWithTokens(e,Z$).then(n=>{if(n===null)throw T$();return n})}function tj(t,e){const n=V$(t._location.path,e),s=new hn(t._location.bucket,n);return new ti(t.storage,s)}/**
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
 */function nj(t){return/^[A-Za-z]+:\/\//.test(t)}function sj(t,e){return new ti(t,e)}function XC(t,e){if(t instanceof Bg){const n=t;if(n._bucket==null)throw E$();const s=new ti(n,n._bucket);return e!=null?XC(s,e):s}else return e!==void 0?tj(t,e):t}function rj(t,e){if(e&&nj(e)){if(t instanceof Bg)return sj(t,e);throw Md("To use ref(service, url), the first argument must be a Storage instance.")}else return XC(t,e)}function Ew(t,e){const n=e?.[HC];return n==null?null:hn.makeFromBucketSpec(n,t)}function ij(t,e,n,s={}){t.host=`${e}:${n}`;const r=ri(e);r&&(BT(`https://${t.host}/b`),qT("Storage",!0)),t._isUsingEmulator=!0,t._protocol=r?"https":"http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:HT(i,t.app.options.projectId))}class Bg{constructor(e,n,s,r,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=BC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=u$,this._maxUploadRetryTime=h$,this._requests=new Set,r!=null?this._bucket=hn.makeFromBucketSpec(r,this._host):this._bucket=Ew(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=hn.makeFromBucketSpec(this._url,e):this._bucket=Ew(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ww("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ww("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(_n(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ti(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new b$(WC());{const o=M$(e,this._appId,s,r,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const Tw="@firebase/storage",Iw="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC="storage";function TB(t){return t=Xt(t),ej(t)}function IB(t,e){return t=Xt(t),rj(t,e)}function bB(t=vp(),e){t=Xt(t);const s=yp(t,JC).getImmediate({identifier:e}),r=$T("storage");return r&&oj(s,...r),s}function oj(t,e,n,s={}){ij(t,e,n,s)}function aj(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Bg(n,s,r,e,vr)}function cj(){es(new xn(JC,aj,"PUBLIC").setMultipleInstances(!0)),fn(Tw,Iw,""),fn(Tw,Iw,"esm2020")}cj();const sf=new WeakMap;function Hg(t,e){return sf.has(e)||sf.set(e,t||{f:{},r:{},s:{},u:{}}),sf.get(e)}function lj(t,e,n,s){if(!t)return n;const[r,i]=ZC(t);if(!r)return n;const o=Hg(void 0,s)[r]||{},a=e||i;return a&&a in o?o[a]:n}function uj(t,e,n,s){if(!t)return;const[r,i]=ZC(t);if(!r)return;const o=Hg(void 0,s)[r],a=e||i;if(a)return n.then(c=>{o[a]=c}).catch(Kn),a}function ZC(t){return p2(t)||g2(t)?["f",t.path]:m2(t)?["r",t.toString()]:_2(t)?["s",t.toString()]:[]}const rf=new WeakMap;function hj(t,e,n){const s=Wu();rf.has(s)||rf.set(s,new Map);const r=rf.get(s),i=uj(e,n,t,s);return i&&r.set(i,t),i?()=>r.delete(i):Kn}const fj={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function Ld(t,e,n,s){if(!f2(t))return[t,{}];const r=[{},{}],i=Object.keys(n).reduce((a,c)=>{const u=n[c];return a[u.path]=u.data(),a},{});function o(a,c,u,h){c=c||{};const[f,d]=h;Object.getOwnPropertyNames(a).forEach(g=>{const _=Object.getOwnPropertyDescriptor(a,g);_&&!_.enumerable&&Object.defineProperty(f,g,_)});for(const g in a){const _=a[g];if(_==null||_ instanceof Date||_ instanceof We||_ instanceof En)f[g]=_;else if(wg(_)){const v=u+g;f[g]=v in n?c[g]:_.path,d[v]=_.converter?_:_.withConverter(s.converter)}else if(Array.isArray(_)){f[g]=Array(_.length);for(let v=0;v<_.length;v++){const I=_[v];I&&I.path in i&&(f[g][v]=i[I.path])}o(_,c[g]||f[g],u+g+".",[f[g],d])}else oi(_)?(f[g]={},o(_,c[g],u+g+".",[f[g],d])):f[g]=_}}return o(t,e,"",r),r}const qg={reset:!1,wait:!0,maxRefDepth:2,converter:fj,snapshotOptions:{serverTimestamps:"estimate"}};function su(t){for(const e in t)t[e].unsub()}function Vd(t,e,n,s,r,i,o,a,c){const[u,h]=Ld(s.data(t.snapshotOptions),vg(e,n),r,t);i.set(e,n,u),Fd(t,e,n,r,h,i,o,a,c)}function dj({ref:t,target:e,path:n,depth:s,resolve:r,reject:i,ops:o},a){const c=Object.create(null);let u=Kn;return a.once?yb(t).then(h=>{h.exists()?Vd(a,e,n,h,c,o,s,r,i):(o.set(e,n,null),r())}).catch(i):u=tg(t,h=>{h.exists()?Vd(a,e,n,h,c,o,s,r,i):(o.set(e,n,null),r())},i),()=>{u(),su(c)}}function Fd(t,e,n,s,r,i,o,a,c){const u=Object.keys(r);if(Object.keys(s).filter(v=>u.indexOf(v)<0).forEach(v=>{s[v].unsub(),delete s[v]}),!u.length||++o>t.maxRefDepth)return a(n);let f=0;const d=u.length,g=Object.create(null);function _(v){v in g&&++f>=d&&a(n)}u.forEach(v=>{const I=s[v],D=r[v],O=`${n}.${v}`;if(g[O]=!0,I)if(I.path!==D.path)I.unsub();else return;s[v]={data:()=>vg(e,O),unsub:dj({ref:D,target:e,path:O,depth:o,ops:i,resolve:_.bind(null,O),reject:c},t),path:D.path}})}function pj(t,e,n,s,r,i){const o=Object.assign({},qg,i),{snapshotListenOptions:a,snapshotOptions:c,wait:u,once:h}=o,f="value";let d=pt(u?[]:t.value);u||n.set(t,f,[]);const g=s;let _,v=Kn;const I=[],D={added:({newIndex:y,doc:S})=>{I.splice(y,0,Object.create(null));const x=I[y],[L,b]=Ld(S.data(c),void 0,x,o);n.add(cn(d),y,L),Fd(o,d,`${f}.${y}`,x,b,n,0,s.bind(null,S),r)},modified:({oldIndex:y,newIndex:S,doc:x})=>{const L=cn(d),b=I[y],T=L[y],[E,A]=Ld(x.data(c),T,b,o);I.splice(S,0,b),n.remove(L,y),n.add(L,S,E),Fd(o,d,`${f}.${S}`,b,A,n,0,s,r)},removed:({oldIndex:y})=>{const S=cn(d);n.remove(S,y),su(I.splice(y,1)[0])}};function O(y){const S=y.docChanges(a);if(!_&&S.length){_=!0;let x=0;const L=S.length,b=Object.create(null);for(let T=0;T<L;T++)b[S[T].doc.id]=!0;s=T=>{T&&T.id in b&&++x>=L&&(u&&(n.set(t,f,cn(d)),d=t),g(cn(d)),s=Kn)}}S.forEach(x=>{D[x.type](x)}),S.length||(u&&(n.set(t,f,cn(d)),d=t),s(cn(d)))}return h?_D(e).then(O).catch(r):v=tg(e,O,r),y=>{if(v(),y){const S=typeof y=="function"?y():[];n.set(t,f,S)}I.forEach(su)}}function gj(t,e,n,s,r,i){const o=Object.assign({},qg,i),a="value",c=Object.create(null);s=y2(s,()=>vg(t,a));let u=Kn;function h(f){f.exists()?Vd(o,t,a,f,c,n,0,s,r):(n.set(t,a,null),s(null))}return o.once?yb(e).then(h).catch(r):u=tg(e,h,r),f=>{if(u(),f){const d=typeof f=="function"?f():null;n.set(t,a,d)}su(c)}}const bw=Symbol();function eA(t,e){let n=Kn;const s=Object.assign({},qg,e),r=cn(t),i=s.target||pt();w2()&&(s.once=!0);const o=lj(r,s.ssrKey,bw,Wu()),a=o!==bw;a&&(i.value=o);let c=!a;const u=pt(!1),h=pt(),f=Is(),d=Yd();let g=Kn;function _(){let D=cn(t);const O=new Promise((y,S)=>{if(n(s.reset),!D)return n=Kn,y(null);u.value=c,c=!0,D.converter||(D=D.withConverter(s.converter)),n=(wg(D)?gj:pj)(i,D,mj,y,S,s)}).catch(y=>(f.value===O&&(h.value=y),Promise.reject(y))).finally(()=>{f.value===O&&(u.value=!1)});f.value=O}let v=Kn;(rt(t)||typeof t=="function")&&(v=kn(t,_)),_(),r&&(g=hj(f.value,r,s.ssrKey)),Ns()&&PE(()=>f.value),d&&eR(I);function I(D=s.reset){v(),g(),n(D)}return Object.defineProperties(i,{error:{get:()=>h},data:{get:()=>i},pending:{get:()=>u},promise:{get:()=>f},stop:{get:()=>I}})}const mj={set:(t,e,n)=>u2(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function SB(t,e){return eA(t,{target:pt([]),...e})}function CB(t,e){return eA(t,e)}function AB(t){return rD(Wu(t))}const Wg=Symbol("VueFireAuth");function _j({dependencies:t,initialUser:e}){return(n,s)=>{const[r,i]=yj(n,s,e,t);b2(r,i)}}function yj(t,e,n,s,r=wV(t,s)){const i=E2(t,e).run(()=>pt(n));return T2.set(t,i),e.provide(Wg,r),[i,r]}function vj(t){return l2?it(Wg):null}function wj(t,{firebaseApp:e,modules:n=[]}){t.provide(kS,e);for(const s of n)s(e,t)}const Ej=t=>{if(!t.path.startsWith("/admin"))return;const{currentUser:e}=vj();if(!e.value&&t.path!=="/login")return Lf("/login");if(e.value&&t.path==="/login")return Lf("/admin")},Tj=async t=>{let e,n;const s=([e,n]=Di(()=>rg({path:t.path})),e=await e,n(),e);if(s.redirect)return Fn(s.redirect,{acceptRelative:!0})?(window.location.href=s.redirect,!1):s.redirect},Ij=[WL,Ej,Tj],Ud={};function bj(t,e,n){const{pathname:s,search:r,hash:i}=e,o=t.indexOf("#");if(o>-1){const u=i.includes(t.slice(o))?t.slice(o).length:1;let h=i.slice(u);return h[0]!=="/"&&(h="/"+h),T_(h,"")}const a=T_(s,t),c=!n||qP(a,n)?a:n;return c+(c.includes("?")?"":r)+i}const Sj=tt({name:"nuxt:router",enforce:"pre",async setup(t){let e,n,s=ns().app.baseURL;const r=js.history?.(s)??$M(s),i=js.routes?([e,n]=Di(()=>js.routes(zh)),e=await e,n(),e??zh):zh;let o;const a=uL({...js,scrollBehavior:(I,D,O)=>{if(D===mn){o=O;return}if(js.scrollBehavior){if(a.options.scrollBehavior=js.scrollBehavior,"scrollRestoration"in window.history){const y=a.beforeEach(()=>{y(),window.history.scrollRestoration="manual"})}return js.scrollBehavior(I,mn,o||O)}},history:r,routes:i});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(a);const c=Is(a.currentRoute.value);a.afterEach((I,D)=>{c.value=D}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>c.value});const u=bj(s,window.location,t.payload.path),h=Is(a.currentRoute.value),f=()=>{h.value=a.currentRoute.value};t.hook("page:finish",f),a.afterEach((I,D)=>{I.matched[I.matched.length-1]?.components?.default===D.matched[D.matched.length-1]?.components?.default&&f()});const d={};for(const I in h.value)Object.defineProperty(d,I,{get:()=>h.value[I],enumerable:!0});t._route=zn(d),t._middleware||={global:[],named:{}};const g=ao();a.afterEach(async(I,D,O)=>{delete t._processingMiddleware,!t.isHydrating&&g.value&&await t.runWithContext(DT),O&&await t.callHook("page:loading:end")});try{[e,n]=Di(()=>a.isReady()),await e,n()}catch(I){[e,n]=Di(()=>t.runWithContext(()=>Nr(I))),await e,n()}const _=u!==a.currentRoute.value.fullPath?a.resolve(u):a.currentRoute.value;f();const v=t.payload.state._layout;return a.beforeEach(async(I,D)=>{await t.callHook("page:loading:start"),I.meta=Vn(I.meta),t.isHydrating&&v&&!Ts(I.meta.layout)&&(I.meta.layout=v),t._processingMiddleware=!0;{const O=new Set([...Ij,...t._middleware.global]);for(const y of I.matched){const S=y.meta.middleware;if(S)for(const x of ug(S))O.add(x)}{const y=await t.runWithContext(()=>rg({path:I.path}));if(y.appMiddleware)for(const S in y.appMiddleware)y.appMiddleware[S]?O.add(S):O.delete(S)}for(const y of O){const S=typeof y=="string"?t._middleware.named[y]||await Ud[y]?.().then(x=>x.default||x):y;if(!S)throw new Error(`Unknown route middleware: '${y}'.`);try{const x=await t.runWithContext(()=>S(I,D));if(!t.payload.serverRendered&&t.isHydrating&&(x===!1||x instanceof Error)){const L=x||$r({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await t.runWithContext(()=>Nr(L)),!1}if(x===!0)continue;if(x===!1)return x;if(x)return MT(x)&&x.fatal&&await t.runWithContext(()=>Nr(x)),x}catch(x){const L=$r(x);return L.fatal&&await t.runWithContext(()=>Nr(L)),L}}}}),a.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),a.afterEach(I=>{if(I.matched.length===0)return t.runWithContext(()=>Nr($r({statusCode:404,fatal:!1,statusMessage:`Page not found: ${I.fullPath}`,data:{path:I.fullPath}})))}),t.hooks.hookOnce("app:created",async()=>{try{"name"in _&&(_.name=void 0),await a.replace({..._,force:!0}),a.options.scrollBehavior=js.scrollBehavior}catch(I){await t.runWithContext(()=>Nr(I))}}),{provide:{router:a}}}}),Cj=tt({name:"nuxt:payload",setup(t){const e=new Set;Wt().beforeResolve(async(n,s)=>{if(n.path===s.path)return;const r=await Zy(n.path);if(r){for(const i of e)delete t.static.data[i];for(const i in r.data)i in t.static.data||e.add(i),t.static.data[i]=r.data[i]}}),Bu(()=>{t.hooks.hook("link:prefetch",async n=>{const{hostname:s}=new URL(n,window.location.href);s===window.location.hostname&&await Zy(n).catch(()=>{console.warn("[nuxt] Error preloading payload for",n)})}),navigator.connection?.effectiveType!=="slow-2g"&&setTimeout($u,1e3)})}}),Aj=tt(()=>{const t=Wt();Bu(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),Rj=tt(t=>{let e;async function n(){let s;try{s=await $u()}catch(r){const i=r;if(!("status"in i&&(i.status===404||i.status===403)))throw i}e&&clearTimeout(e),e=setTimeout(n,P_);try{const r=await $fetch(pp("builds/latest.json")+`?${Date.now()}`);r.id!==s?.id&&(t.hooks.callHook("app:manifest:update",r),e&&clearTimeout(e))}catch{}}Bu(()=>{e=setTimeout(n,P_)})}),Pj=tt({name:"nuxt:chunk-reload",setup(t){const e=Wt(),n=ns(),s=new Set;e.beforeEach(()=>{s.clear()}),t.hook("app:chunkError",({error:i})=>{s.add(i)});function r(i){const o=wu(n.app.baseURL,i.fullPath);vL({path:o,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(r)}),e.onError((i,o)=>{s.has(i)&&r(o)})}});function zg(t){const e=Vn({});return YE(()=>{const n=De().$nuxtSiteConfig.get(gp({resolveRefs:!0},t));e&&n&&Object.assign(e,n)}),delete e._priority,e}const kj=tt(()=>{const t=_o();if(!t)return;const e=zg(),n={meta:[],templateParams:{site:e,siteUrl:e.url,siteName:e.name}};e.separator&&(n.templateParams.separator=e.separator),e.titleSeparator&&(n.templateParams.titleSeparator=e.titleSeparator),e.description&&(n.templateParams.siteDescription=e.description,n.meta.push({name:"description",content:"%site.description",tagPriority:"low"})),t.push(n)}),Nj=tt(()=>{const t=_o();t&&(t.use(Cb),t.use(XD()))}),Oj=/\d/,xj=["-","_","/","."];function Dj(t=""){if(!Oj.test(t))return t!==t.toLowerCase()}function Mj(t,e){const n=xj,s=[];if(!t||typeof t!="string")return s;let r="",i,o;for(const a of t){const c=n.includes(a);if(c===!0){s.push(r),r="",i=void 0;continue}const u=Dj(a);if(o===!1){if(i===!1&&u===!0){s.push(r),r=a,i=u;continue}if(i===!0&&u===!1&&r.length>1){const h=r.at(-1);s.push(r.slice(0,Math.max(0,r.length-1))),r=h+a,i=u;continue}}r+=a,i=u,o=c}return s.push(r),s}function Lj(t){return t?t[0].toUpperCase()+t.slice(1):""}const Vj=/^(a|an|and|as|at|but|by|for|if|in|is|nor|of|on|or|the|to|with)$/i;function Fj(t,e){return(Array.isArray(t)?t:Mj(t)).filter(Boolean).map(n=>Vj.test(n)?n.toLowerCase():Lj(n)).join(" ")}const Uj=tt({name:"nuxt-seo:fallback-titles",env:{islands:!1},setup(){const t=oo(),e=ao(),n=Le(()=>{if(e.value&&[404,500].includes(e.value?.statusCode))return`${e.value.statusCode} - ${e.value.message}`;if(typeof t.meta?.title=="string")return t.meta?.title;const i=hr(t.path||"/").split("/").pop();return i?Fj(i):null});Uu({title:()=>n.value},{tagPriority:101})}}),$j=vf(()=>Mt(()=>Promise.resolve().then(()=>K9),void 0,import.meta.url).then(t=>t.default||t.default||t)),jj=[["Icon",$j]],Bj=tt({name:"nuxt:global-components",setup(t){for(const[e,n]of jj)t.vueApp.component(e,n),t.vueApp.component("Lazy"+e,n)}}),Zs={cyber:vf(()=>Mt(()=>import("./DkFrJp-C.js"),__vite__mapDeps([20,21]),import.meta.url).then(t=>t.default||t)),default:vf(()=>Mt(()=>import("./Dht1TmZ1.js"),[],import.meta.url).then(t=>t.default||t))},Hj=tt({name:"nuxt:prefetch",setup(t){const e=Wt();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{const s=n?.meta?.layout;s&&typeof Zs[s]=="function"&&await Zs[s]()})}),t.hooks.hook("link:prefetch",n=>{if(Fn(n))return;const s=e.resolve(n);if(!s)return;const r=s.meta.layout;let i=ug(s.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof Ud[o]=="function"&&Ud[o]();typeof r=="string"&&r in Zs&&yL(Zs[r])})}});function of(...t){window.dataLayer?.push(arguments)}function qj({tags:t}){window.dataLayer=window.dataLayer||[];for(const e of t)for(const n of e.initCommands??[])of(...n);of("js",new Date);for(const e of t)of("config",e.id,e.config??{})}function Wj(t){const e=Ce(t),n=e.tags.filter(Boolean).map(s=>typeof s=="string"?{id:s}:s);if(e.id){const{id:s,config:r,initCommands:i}=e;n.unshift({id:s,config:r,initCommands:i})}return n}const zj=tt({parallel:!0,setup(){const t=ns().public.gtag,e=Wj(t);if(!e.length||(qj({tags:e}),t.initMode==="manual"))return;const n=t.loadingStrategy==="async"?"async":"defer";Uu({link:[{rel:"preload",as:"script",href:bl(t.url,{id:e[0]?.id})}],script:[{src:bl(t.url,{id:e[0]?.id}),[n]:!0,"data-gtag":""}]})}}),Kj="__NUXT_COLOR_MODE__",af="nuxt-color-mode",Gj="localStorage",ls=window[Kj]||{},Qj=tt(t=>{const e=cg("color-mode",()=>Vn({preference:ls.preference,value:ls.value,unknown:!1,forced:!1})).value;Wt().afterEach(i=>{const o=i.meta.colorMode;o&&o!=="system"?(e.value=o,e.forced=!0):(o==="system"&&console.warn("You cannot force the colorMode to system at the page level."),e.forced=!1,e.value=e.preference==="system"?ls.getColorScheme():e.preference)});let n;function s(){n||!window.matchMedia||(n=window.matchMedia("(prefers-color-scheme: dark)"),n.addEventListener("change",()=>{!e.forced&&e.preference==="system"&&(e.value=ls.getColorScheme())}))}function r(i,o){switch(i){case"cookie":window.document.cookie=af+"="+o;break;case"sessionStorage":window.sessionStorage?.setItem(af,o);break;case"localStorage":default:window.localStorage?.setItem(af,o)}}kn(()=>e.preference,i=>{e.forced||(i==="system"?(e.value=ls.getColorScheme(),s()):e.value=i,r(Gj,i))},{immediate:!0}),kn(()=>e.value,(i,o)=>{ls.removeColorScheme(o),ls.addColorScheme(i)}),e.preference==="system"&&s(),t.hook("app:mounted",()=>{e.unknown&&(e.preference=ls.preference,e.value=ls.value,e.unknown=!1)}),t.provide("colorMode",e)}),tA=/^[a-z0-9]+(-[a-z0-9]+)*$/,hc=(t,e,n,s="")=>{const r=t.split(":");if(t.slice(0,1)==="@"){if(r.length<2||r.length>3)return null;s=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const a=r.pop(),c=r.pop(),u={provider:r.length>0?r[0]:s,prefix:c,name:a};return e&&!ol(u)?null:u}const i=r[0],o=i.split("-");if(o.length>1){const a={provider:s,prefix:o.shift(),name:o.join("-")};return e&&!ol(a)?null:a}if(n&&s===""){const a={provider:s,prefix:"",name:i};return e&&!ol(a,n)?null:a}return null},ol=(t,e)=>t?!!((e&&t.prefix===""||t.prefix)&&t.name):!1,nA=Object.freeze({left:0,top:0,width:16,height:16}),ru=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),To=Object.freeze({...nA,...ru}),$d=Object.freeze({...To,body:"",hidden:!1});function Yj(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const s=((t.rotate||0)+(e.rotate||0))%4;return s&&(n.rotate=s),n}function Sw(t,e){const n=Yj(t,e);for(const s in $d)s in ru?s in t&&!(s in n)&&(n[s]=ru[s]):s in e?n[s]=e[s]:s in t&&(n[s]=t[s]);return n}function Xj(t,e){const n=t.icons,s=t.aliases||Object.create(null),r=Object.create(null);function i(o){if(n[o])return r[o]=[];if(!(o in r)){r[o]=null;const a=s[o]&&s[o].parent,c=a&&i(a);c&&(r[o]=[a].concat(c))}return r[o]}return Object.keys(n).concat(Object.keys(s)).forEach(i),r}function Jj(t,e,n){const s=t.icons,r=t.aliases||Object.create(null);let i={};function o(a){i=Sw(s[a]||r[a],i)}return o(e),n.forEach(o),Sw(t,i)}function sA(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(r=>{e(r,null),n.push(r)});const s=Xj(t);for(const r in s){const i=s[r];i&&(e(r,Jj(t,r,i)),n.push(r))}return n}const Zj={provider:"",aliases:{},not_found:{},...nA};function cf(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function rA(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!cf(t,Zj))return null;const n=e.icons;for(const r in n){const i=n[r];if(!r||typeof i.body!="string"||!cf(i,$d))return null}const s=e.aliases||Object.create(null);for(const r in s){const i=s[r],o=i.parent;if(!r||typeof o!="string"||!n[o]&&!s[o]||!cf(i,$d))return null}return e}const Cw=Object.create(null);function e6(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function ni(t,e){const n=Cw[t]||(Cw[t]=Object.create(null));return n[e]||(n[e]=e6(t,e))}function iA(t,e){return rA(e)?sA(e,(n,s)=>{s?t.icons[n]=s:t.missing.add(n)}):[]}function t6(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let qa=!1;function oA(t){return typeof t=="boolean"&&(qa=t),qa}function Kg(t){const e=typeof t=="string"?hc(t,!0,qa):t;if(e){const n=ni(e.provider,e.prefix),s=e.name;return n.icons[s]||(n.missing.has(s)?null:void 0)}}function Gg(t,e){const n=hc(t,!0,qa);if(!n)return!1;const s=ni(n.provider,n.prefix);return e?t6(s,n.name,e):(s.missing.add(n.name),!0)}function n6(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),qa&&!e&&!t.prefix){let r=!1;return rA(t)&&(t.prefix="",sA(t,(i,o)=>{Gg(i,o)&&(r=!0)})),r}const n=t.prefix;if(!ol({prefix:n,name:"a"}))return!1;const s=ni(e,n);return!!iA(s,t)}function jd(t){const e=Kg(t);return e&&{...To,...e}}const aA=Object.freeze({width:null,height:null}),cA=Object.freeze({...aA,...ru}),s6=/(-?[0-9.]*[0-9]+[0-9.]*)/g,r6=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Aw(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const s=t.split(s6);if(s===null||!s.length)return t;const r=[];let i=s.shift(),o=r6.test(i);for(;;){if(o){const a=parseFloat(i);isNaN(a)?r.push(i):r.push(Math.ceil(a*e*n)/n)}else r.push(i);if(i=s.shift(),i===void 0)return r.join("");o=!o}}function i6(t,e="defs"){let n="";const s=t.indexOf("<"+e);for(;s>=0;){const r=t.indexOf(">",s),i=t.indexOf("</"+e);if(r===-1||i===-1)break;const o=t.indexOf(">",i);if(o===-1)break;n+=t.slice(r+1,i).trim(),t=t.slice(0,s).trim()+t.slice(o+1)}return{defs:n,content:t}}function o6(t,e){return t?"<defs>"+t+"</defs>"+e:e}function a6(t,e,n){const s=i6(t);return o6(s.defs,e+s.content+n)}const c6=t=>t==="unset"||t==="undefined"||t==="none";function l6(t,e){const n={...To,...t},s={...cA,...e},r={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,s].forEach(v=>{const I=[],D=v.hFlip,O=v.vFlip;let y=v.rotate;D?O?y+=2:(I.push("translate("+(r.width+r.left).toString()+" "+(0-r.top).toString()+")"),I.push("scale(-1 1)"),r.top=r.left=0):O&&(I.push("translate("+(0-r.left).toString()+" "+(r.height+r.top).toString()+")"),I.push("scale(1 -1)"),r.top=r.left=0);let S;switch(y<0&&(y-=Math.floor(y/4)*4),y=y%4,y){case 1:S=r.height/2+r.top,I.unshift("rotate(90 "+S.toString()+" "+S.toString()+")");break;case 2:I.unshift("rotate(180 "+(r.width/2+r.left).toString()+" "+(r.height/2+r.top).toString()+")");break;case 3:S=r.width/2+r.left,I.unshift("rotate(-90 "+S.toString()+" "+S.toString()+")");break}y%2===1&&(r.left!==r.top&&(S=r.left,r.left=r.top,r.top=S),r.width!==r.height&&(S=r.width,r.width=r.height,r.height=S)),I.length&&(i=a6(i,'<g transform="'+I.join(" ")+'">',"</g>"))});const o=s.width,a=s.height,c=r.width,u=r.height;let h,f;o===null?(f=a===null?"1em":a==="auto"?u:a,h=Aw(f,c/u)):(h=o==="auto"?c:o,f=a===null?Aw(h,u/c):a==="auto"?u:a);const d={},g=(v,I)=>{c6(I)||(d[v]=I.toString())};g("width",h),g("height",f);const _=[r.left,r.top,c,u];return d.viewBox=_.join(" "),{attributes:d,viewBox:_,body:i}}const u6=/\sid="(\S+)"/g,h6="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let f6=0;function d6(t,e=h6){const n=[];let s;for(;s=u6.exec(t);)n.push(s[1]);if(!n.length)return t;const r="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(i=>{const o=typeof e=="function"?e(i):e+(f6++).toString(),a=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+a+')([")]|\\.[a-z])',"g"),"$1"+o+r+"$3")}),t=t.replace(new RegExp(r,"g"),""),t}const Bd=Object.create(null);function lA(t,e){Bd[t]=e}function Hd(t){return Bd[t]||Bd[""]}function Qg(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const Xu=Object.create(null),Ko=["https://api.simplesvg.com","https://api.unisvg.com"],al=[];for(;Ko.length>0;)Ko.length===1||Math.random()>.5?al.push(Ko.shift()):al.push(Ko.pop());Xu[""]=Qg({resources:["https://api.iconify.design"].concat(al)});function uA(t,e){const n=Qg(e);return n===null?!1:(Xu[t]=n,!0)}function Ju(t){return Xu[t]}function p6(){return Object.keys(Xu)}const g6=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let iu=g6();function m6(t){iu=t}function _6(){return iu}function y6(t,e){const n=Ju(t);if(!n)return 0;let s;if(!n.maxURL)s=0;else{let r=0;n.resources.forEach(o=>{r=Math.max(r,o.length)});const i=e+".json?icons=";s=n.maxURL-r-n.path.length-i.length}return s}function v6(t){return t===404}const w6=(t,e,n)=>{const s=[],r=y6(t,e),i="icons";let o={type:i,provider:t,prefix:e,icons:[]},a=0;return n.forEach((c,u)=>{a+=c.length+1,a>=r&&u>0&&(s.push(o),o={type:i,provider:t,prefix:e,icons:[]},a=c.length),o.icons.push(c)}),s.push(o),s};function E6(t){if(typeof t=="string"){const e=Ju(t);if(e)return e.path}return"/"}const T6=(t,e,n)=>{if(!iu){n("abort",424);return}let s=E6(e.provider);switch(e.type){case"icons":{const i=e.prefix,a=e.icons.join(","),c=new URLSearchParams({icons:a});s+=i+".json?"+c.toString();break}case"custom":{const i=e.uri;s+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let r=503;iu(t+s).then(i=>{const o=i.status;if(o!==200){setTimeout(()=>{n(v6(o)?"abort":"next",o)});return}return r=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",r)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",r)})},I6={prepare:w6,send:T6};function b6(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((r,i)=>r.provider!==i.provider?r.provider.localeCompare(i.provider):r.prefix!==i.prefix?r.prefix.localeCompare(i.prefix):r.name.localeCompare(i.name));let s={provider:"",prefix:"",name:""};return t.forEach(r=>{if(s.name===r.name&&s.prefix===r.prefix&&s.provider===r.provider)return;s=r;const i=r.provider,o=r.prefix,a=r.name,c=n[i]||(n[i]=Object.create(null)),u=c[o]||(c[o]=ni(i,o));let h;a in u.icons?h=e.loaded:o===""||u.missing.has(a)?h=e.missing:h=e.pending;const f={provider:i,prefix:o,name:a};h.push(f)}),e}function hA(t,e){t.forEach(n=>{const s=n.loaderCallbacks;s&&(n.loaderCallbacks=s.filter(r=>r.id!==e))})}function S6(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const s=t.provider,r=t.prefix;e.forEach(i=>{const o=i.icons,a=o.pending.length;o.pending=o.pending.filter(c=>{if(c.prefix!==r)return!0;const u=c.name;if(t.icons[u])o.loaded.push({provider:s,prefix:r,name:u});else if(t.missing.has(u))o.missing.push({provider:s,prefix:r,name:u});else return n=!0,!0;return!1}),o.pending.length!==a&&(n||hA([t],i.id),i.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),i.abort))})}))}let C6=0;function A6(t,e,n){const s=C6++,r=hA.bind(null,n,s);if(!e.pending.length)return r;const i={id:s,icons:e,callback:t,abort:r};return n.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(i)}),r}function R6(t,e=!0,n=!1){const s=[];return t.forEach(r=>{const i=typeof r=="string"?hc(r,e,n):r;i&&s.push(i)}),s}var P6={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function k6(t,e,n,s){const r=t.resources.length,i=t.random?Math.floor(Math.random()*r):t.index;let o;if(t.random){let L=t.resources.slice(0);for(o=[];L.length>1;){const b=Math.floor(Math.random()*L.length);o.push(L[b]),L=L.slice(0,b).concat(L.slice(b+1))}o=o.concat(L)}else o=t.resources.slice(i).concat(t.resources.slice(0,i));const a=Date.now();let c="pending",u=0,h,f=null,d=[],g=[];typeof s=="function"&&g.push(s);function _(){f&&(clearTimeout(f),f=null)}function v(){c==="pending"&&(c="aborted"),_(),d.forEach(L=>{L.status==="pending"&&(L.status="aborted")}),d=[]}function I(L,b){b&&(g=[]),typeof L=="function"&&g.push(L)}function D(){return{startTime:a,payload:e,status:c,queriesSent:u,queriesPending:d.length,subscribe:I,abort:v}}function O(){c="failed",g.forEach(L=>{L(void 0,h)})}function y(){d.forEach(L=>{L.status==="pending"&&(L.status="aborted")}),d=[]}function S(L,b,T){const E=b!=="success";switch(d=d.filter(A=>A!==L),c){case"pending":break;case"failed":if(E||!t.dataAfterTimeout)return;break;default:return}if(b==="abort"){h=T,O();return}if(E){h=T,d.length||(o.length?x():O());return}if(_(),y(),!t.random){const A=t.resources.indexOf(L.resource);A!==-1&&A!==t.index&&(t.index=A)}c="completed",g.forEach(A=>{A(T)})}function x(){if(c!=="pending")return;_();const L=o.shift();if(L===void 0){if(d.length){f=setTimeout(()=>{_(),c==="pending"&&(y(),O())},t.timeout);return}O();return}const b={status:"pending",resource:L,callback:(T,E)=>{S(b,T,E)}};d.push(b),u++,f=setTimeout(x,t.rotate),n(L,e,b.callback)}return setTimeout(x),D}function fA(t){const e={...P6,...t};let n=[];function s(){n=n.filter(a=>a().status==="pending")}function r(a,c,u){const h=k6(e,a,c,(f,d)=>{s(),u&&u(f,d)});return n.push(h),h}function i(a){return n.find(c=>a(c))||null}return{query:r,find:i,setIndex:a=>{e.index=a},getIndex:()=>e.index,cleanup:s}}function Rw(){}const lf=Object.create(null);function N6(t){if(!lf[t]){const e=Ju(t);if(!e)return;const n=fA(e),s={config:e,redundancy:n};lf[t]=s}return lf[t]}function dA(t,e,n){let s,r;if(typeof t=="string"){const i=Hd(t);if(!i)return n(void 0,424),Rw;r=i.send;const o=N6(t);o&&(s=o.redundancy)}else{const i=Qg(t);if(i){s=fA(i);const o=t.resources?t.resources[0]:"",a=Hd(o);a&&(r=a.send)}}return!s||!r?(n(void 0,424),Rw):s.query(e,r,n)().abort}function Pw(){}function O6(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,S6(t)}))}function x6(t){const e=[],n=[];return t.forEach(s=>{(s.match(tA)?e:n).push(s)}),{valid:e,invalid:n}}function Go(t,e,n){function s(){const r=t.pendingIcons;e.forEach(i=>{r&&r.delete(i),t.icons[i]||t.missing.add(i)})}if(n&&typeof n=="object")try{if(!iA(t,n).length){s();return}}catch(r){console.error(r)}s(),O6(t)}function kw(t,e){t instanceof Promise?t.then(n=>{e(n)}).catch(()=>{e(null)}):e(t)}function D6(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:s}=t,r=t.iconsToLoad;if(delete t.iconsToLoad,!r||!r.length)return;const i=t.loadIcon;if(t.loadIcons&&(r.length>1||!i)){kw(t.loadIcons(r,s,n),h=>{Go(t,r,h)});return}if(i){r.forEach(h=>{const f=i(h,s,n);kw(f,d=>{const g=d?{prefix:s,icons:{[h]:d}}:null;Go(t,[h],g)})});return}const{valid:o,invalid:a}=x6(r);if(a.length&&Go(t,a,null),!o.length)return;const c=s.match(tA)?Hd(n):null;if(!c){Go(t,o,null);return}c.prepare(n,s,o).forEach(h=>{dA(n,h,f=>{Go(t,h.icons,f)})})}))}const pA=(t,e)=>{const n=R6(t,!0,oA()),s=b6(n);if(!s.pending.length){let c=!0;return e&&setTimeout(()=>{c&&e(s.loaded,s.missing,s.pending,Pw)}),()=>{c=!1}}const r=Object.create(null),i=[];let o,a;return s.pending.forEach(c=>{const{provider:u,prefix:h}=c;if(h===a&&u===o)return;o=u,a=h,i.push(ni(u,h));const f=r[u]||(r[u]=Object.create(null));f[h]||(f[h]=[])}),s.pending.forEach(c=>{const{provider:u,prefix:h,name:f}=c,d=ni(u,h),g=d.pendingIcons||(d.pendingIcons=new Set);g.has(f)||(g.add(f),r[u][h].push(f))}),i.forEach(c=>{const u=r[c.provider][c.prefix];u.length&&D6(c,u)}),e?A6(e,s,i):Pw},M6=t=>new Promise((e,n)=>{const s=typeof t=="string"?hc(t,!0):t;if(!s){n(t);return}pA([s||t],r=>{if(r.length&&s){const i=Kg(s);if(i){e({...To,...i});return}}n(t)})});function L6(t,e,n){ni("",e).loadIcons=t}function V6(t,e){const n={...t};for(const s in e){const r=e[s],i=typeof r;s in aA?(r===null||r&&(i==="string"||i==="number"))&&(n[s]=r):i===typeof n[s]&&(n[s]=s==="rotate"?r%4:r)}return n}const F6=/[\s,]+/;function U6(t,e){e.split(F6).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function $6(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function s(r){for(;r<0;)r+=4;return r%4}if(n===""){const r=parseInt(t);return isNaN(r)?0:s(r)}else if(n!==t){let r=0;switch(n){case"%":r=25;break;case"deg":r=90}if(r){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i=i/r,i%1===0?s(i):0)}}return e}function j6(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const s in e)n+=" "+s+'="'+e[s]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function B6(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function H6(t){return"data:image/svg+xml,"+B6(t)}function q6(t){return'url("'+H6(t)+'")'}const Nw={...cA,inline:!1},W6={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},z6={display:"inline-block"},qd={backgroundColor:"currentColor"},gA={backgroundColor:"transparent"},Ow={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},xw={webkitMask:qd,mask:qd,background:gA};for(const t in xw){const e=xw[t];for(const n in Ow)e[t+n]=Ow[n]}const cl={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";cl[t+"-flip"]=e,cl[t.slice(0,1)+"-flip"]=e,cl[t+"Flip"]=e});function Dw(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const Mw=(t,e)=>{const n=V6(Nw,e),s={...W6},r=e.mode||"svg",i={},o=e.style,a=typeof o=="object"&&!(o instanceof Array)?o:{};for(let v in e){const I=e[v];if(I!==void 0)switch(v){case"icon":case"style":case"onLoad":case"mode":case"ssr":break;case"inline":case"hFlip":case"vFlip":n[v]=I===!0||I==="true"||I===1;break;case"flip":typeof I=="string"&&U6(n,I);break;case"color":i.color=I;break;case"rotate":typeof I=="string"?n[v]=$6(I):typeof I=="number"&&(n[v]=I);break;case"ariaHidden":case"aria-hidden":I!==!0&&I!=="true"&&delete s["aria-hidden"];break;default:{const D=cl[v];D?(I===!0||I==="true"||I===1)&&(n[D]=!0):Nw[v]===void 0&&(s[v]=I)}}}const c=l6(t,n),u=c.attributes;if(n.inline&&(i.verticalAlign="-0.125em"),r==="svg"){s.style={...i,...a},Object.assign(s,u);let v=0,I=e.id;return typeof I=="string"&&(I=I.replace(/-/g,"_")),s.innerHTML=d6(c.body,I?()=>I+"ID"+v++:"iconifyVue"),Je("svg",s)}const{body:h,width:f,height:d}=t,g=r==="mask"||(r==="bg"?!1:h.indexOf("currentColor")!==-1),_=j6(h,{...u,width:f+"",height:d+""});return s.style={...i,"--svg":q6(_),width:Dw(u.width),height:Dw(u.height),...z6,...g?qd:gA,...a},Je("span",s)};oA(!0);lA("",I6);if(typeof document<"u"&&typeof window<"u"){const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(s=>{try{(typeof s!="object"||s===null||s instanceof Array||typeof s.icons!="object"||typeof s.prefix!="string"||!n6(s))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const s="IconifyProviders["+n+"] is invalid.";try{const r=e[n];if(typeof r!="object"||!r||r.resources===void 0)continue;uA(n,r)||console.error(s)}catch{console.error(s)}}}}const K6={...To,body:""},G6=sn((t,{emit:e})=>{const n=pt(null);function s(){n.value&&(n.value.abort?.(),n.value=null)}const r=pt(!!t.ssr),i=pt(""),o=Is(null);function a(){const u=t.icon;if(typeof u=="object"&&u!==null&&typeof u.body=="string")return i.value="",{data:u};let h;if(typeof u!="string"||(h=hc(u,!1,!0))===null)return null;let f=Kg(h);if(!f){const _=n.value;return(!_||_.name!==u)&&(f===null?n.value={name:u}:n.value={name:u,abort:pA([h],c)}),null}s(),i.value!==u&&(i.value=u,zr(()=>{e("load",u)}));const d=t.customise;if(d){f=Object.assign({},f);const _=d(f.body,h.name,h.prefix,h.provider);typeof _=="string"&&(f.body=_)}const g=["iconify"];return h.prefix!==""&&g.push("iconify--"+h.prefix),h.provider!==""&&g.push("iconify--"+h.provider),{data:f,classes:g}}function c(){const u=a();u?u.data!==o.value?.data&&(o.value=u):o.value=null}return r.value?c():Qa(()=>{r.value=!0,c()}),kn(()=>t.icon,c),op(s),()=>{const u=o.value;if(!u)return Mw(K6,t);let h=t;return u.classes&&(h={...t,class:u.classes.join(" ")}),Mw({...To,...u.data},h)}},{props:["icon","mode","ssr","width","height","style","color","inline","rotate","hFlip","horizontalFlip","vFlip","verticalFlip","flip","id","ariaHidden","customise","title"],emits:["load"]}),Lw={getAPIConfig:Ju,setAPIModule:lA,sendAPIQuery:dA,setFetch:m6,getFetch:_6,listAPIProviders:p6},Q6=tt({name:"@nuxt/icon",setup(){const t=ns(),e=nc().icon;Lw.setFetch($fetch.native);const n=[];if(e.provider==="server"){const r=t.app?.baseURL?.replace(/\/$/,"")??"";n.push(r+(e.localApiEndpoint||"/api/_nuxt_icon")),(e.fallbackToApi===!0||e.fallbackToApi==="client-only")&&n.push(e.iconifyApiEndpoint)}else e.provider==="none"?Lw.setFetch(()=>Promise.resolve(new Response)):n.push(e.iconifyApiEndpoint);async function s(r,i){try{const o=await $fetch(n[0]+"/"+i+".json",{query:{icons:r.join(",")}});if(!o||o.prefix!==i||!o.icons)throw new Error("Invalid data"+JSON.stringify(o));return o}catch(o){return console.error("Failed to load custom icons",o),null}}uA("",{resources:n});for(const r of e.customCollections||[])r&&L6(s,r)}}),Y6=tt(()=>({provide:{firebaseApp:YT(ns().public.vuefire.config)}})),X6=tt(t=>{const e=t.$firebaseApp;return _j({initialUser:t.payload.vuefireUser,dependencies:{errorMap:Jb,persistence:[BV,PV],popupRedirectResolver:NF}})(e,t.vueApp),{provide:{firebaseAuth:t.vueApp.runWithContext(()=>it(Wg))}}}),J6=tt(t=>{const e=t.$firebaseApp;t.vueApp.use(wj,{firebaseApp:e}),t.payload?.vuefire&&Hg(t.payload.vuefire,e)}),Z6=tt({enforce:"post",async setup(){const t=_o(),e=cg("nuxt-seo-utils:routeRules",()=>null);if(e.value){const{head:n,seoMeta:s}=e.value;n&&t.push(n),s&&Pb(s)}}});function e9(t,e){let n=t;Fn(t,{strict:!1,acceptRelative:!0})&&(n=Eu(t).pathname);const s=$P(e.base||"/");s!=="/"&&n.startsWith(s)&&(n=n.slice(s.length));let r=hr(e.absolute?e.siteUrl:"");s!=="/"&&r.endsWith(s)&&(r=r.slice(0,r.indexOf(s)));const i=e.withBase?Nf(s,r||"/"):r,o=Nf(n,i);return n==="/"&&!e.withBase?vu(o):s9(e.trailingSlash,o)}const t9=["jpg","jpeg","png","gif","bmp","webp","svg","ico","pdf","doc","docx","xls","xlsx","ppt","pptx","txt","md","markdown","zip","rar","7z","tar","gz","mp3","wav","flac","ogg","opus","m4a","aac","midi","mid","mp4","avi","mkv","mov","wmv","flv","webm","html","css","js","json","xml","tsx","jsx","ts","vue","svelte","xsl","rss","atom","php","py","rb","java","c","cpp","h","go","csv","tsv","sql","yaml","yml","woff","woff2","ttf","otf","eot","exe","msi","apk","ipa","dmg","iso","bin","bat","cmd","sh","env","htaccess","conf","toml","ini","deb","rpm","jar","war","epub","mobi","log","tmp","bak","old","sav"];function n9(t){const n=(t.split("/").pop()||t).match(/\.[0-9a-z]+$/i)?.[0];return n&&t9.includes(n.replace(".",""))}function s9(t,e){const n=Eu(e);if(n9(n.pathname))return e;const s=t?vu(n.pathname):hr(n.pathname);return`${n.protocol?`${n.protocol}//`:""}${n.host||""}${s}${n.search||""}${n.hash||""}`}function r9(t){return window.location.origin}function i9(t={}){const e=zg(),n=r9(),s=ns().app.baseURL||"/";return r=>Le(()=>e9(Ge(r),{absolute:Ge(t.absolute),withBase:Ge(t.withBase),siteUrl:Ge(t.canonical)!==!1?e.url:n,trailingSlash:e.trailingSlash,base:s}))}function o9(){const t=zg({resolveRefs:!1}),e=()=>cn(t.currentLocale)||cn(t.defaultLocale)||"en";_o().use(Cb);const{canonicalQueryWhitelist:s,canonicalLowercase:r}=ns().public["seo-utils"],i=oo(),o=i9({withBase:!0,absolute:!0}),a=ao(),c=Le(()=>{if(a.value)return!1;const{query:f}=i;let d=o(i.path||"/").value||i.path;if(r)try{d=d.toLocaleLowerCase(e())}catch{d=d.toLowerCase()}const g=Object.fromEntries(Object.entries(f).filter(([v])=>s.includes(v)).sort(([v],[I])=>v.localeCompare(I)));return{rel:"canonical",href:Object.keys(g).length?`${d}?${_T(g)}`:d}}),u={tagPriority:"low"};Uu({htmlAttrs:{lang:e},templateParams:{site:()=>t,siteName:()=>t.name},titleTemplate:"%s %separator %siteName",link:[()=>c.value]},u);const h={ogType:"website",ogUrl:()=>{const f=c.value;return f?f.href:!1},ogLocale:()=>{const f=e();{const d=f.replace("-","_");if(d.includes("_"))return d}return!1},ogSiteName:t.name};if(t.description&&(h.description=t.description),t.twitter){const f=t.twitter.startsWith("@")?t.twitter:`@${t.twitter}`;h.twitterCreator=f,h.twitterSite=f}Pb(h,u)}const a9=tt({name:"nuxt-seo:defaults",order:999,env:{islands:!1},setup(){o9()}}),c9=[cM,lM,OL,VL,Sj,Cj,Aj,Rj,Pj,kj,Nj,Uj,Bj,Hj,zj,Qj,Q6,Y6,X6,J6,Z6,a9],mA=(t="RouteProvider")=>sn({name:t,props:{route:{type:Object,required:!0},vnode:Object,vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(e){const n=e.renderKey,s=e.route,r={};for(const i in e.route)Object.defineProperty(r,i,{get:()=>n===e.renderKey?e.route[i]:s[i],enumerable:!0});return nr(Gr,zn(r)),()=>e.vnode?Je(e.vnode,{ref:e.vnodeRef}):e.vnode}}),l9=mA(),Vw=new WeakMap,u9=sn({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:s}){const r=De(),i=pt(),o=it(Gr,null);let a;s({pageRef:i});const c=it(OT,null);let u;const h=r.deferHydration();if(r.isHydrating){const d=r.hooks.hookOnce("app:error",h);Wt().beforeEach(d)}t.pageKey&&kn(()=>t.pageKey,(d,g)=>{d!==g&&r.callHook("page:loading:start")});let f=!1;{const d=Wt().beforeResolve(()=>{f=!1});io(()=>{d()})}return()=>Je(zb,{name:t.name,route:t.route,...e},{default:d=>{const g=f9(o,d.route,d.Component),_=o&&o.matched.length===d.route.matched.length;if(!d.Component){if(u&&!_)return u;h();return}if(u&&c&&!c.isCurrent(d.route))return u;if(g&&o&&(!c||c?.isCurrent(o)))return _?u:null;const v=md(d,t.pageKey),I=d9(o,d.route,d.Component);!r.isHydrating&&a===v&&!I&&zr(()=>{f=!0,r.callHook("page:loading:end")}),a=v;const D=!!(t.transition??d.route.meta.pageTransition??A_),O=D&&h9([t.transition,d.route.meta.pageTransition,A_,{onAfterLeave(){delete r._runningTransition,r.callHook("page:transition:finish",d.Component)}}]),y=t.keepalive??d.route.meta.keepalive??Ek;return u=Gb(D&&O,BL(y,Je(up,{suspensible:!0,onPending:()=>{D&&(r._runningTransition=!0),r.callHook("page:start",d.Component)},onResolve:()=>{zr(()=>r.callHook("page:finish",d.Component).then(()=>{if(delete r._runningTransition,!f&&!I)return f=!0,r.callHook("page:loading:end")}).finally(h))}},{default:()=>{const S={key:v||void 0,vnode:n.default?p9(n.default,d):d.Component,route:d.route,renderKey:v||void 0,trackRootNodes:D,vnodeRef:i};if(!y)return Je(l9,S);const x=d.Component.type,L=x;let b=Vw.get(L);return b||(b=mA(x.name||x.__name),Vw.set(L,b)),Je(b,S)}}))).default(),u}})}});function h9(t){const e=[];for(const n of t)n&&e.push({...n,onAfterLeave:n.onAfterLeave?ug(n.onAfterLeave):void 0});return gp(...e)}function f9(t,e,n){if(!t)return!1;const s=e.matched.findIndex(r=>r.components?.default===n?.type);return!s||s===-1?!1:e.matched.slice(0,s).some((r,i)=>r.components?.default!==t.matched[i]?.components?.default)||n&&md({route:e,Component:n})!==md({route:t,Component:n})}function d9(t,e,n){return t?e.matched.findIndex(r=>r.components?.default===n?.type)<e.matched.length-1:!1}function p9(t,e){const n=t(e);return n.length===1?Je(n[0]):Je(Ut,void 0,n)}const g9=sn({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},setup(t,e){return()=>Je(Zs[t.name],t.layoutProps,e.slots)}}),m9={name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},_9=sn({name:"NuxtLayout",inheritAttrs:!1,props:m9,setup(t,e){const n=De(),s=it(Gr),i=!s||s===oo()?Kb():s,o=Le(()=>{let h=Ge(t.name)??i?.meta.layout??"default";return h&&!(h in Zs)&&t.fallback&&(h=Ge(t.fallback)),h}),a=Is();e.expose({layoutRef:a});const c=n.deferHydration();if(n.isHydrating){const h=n.hooks.hookOnce("app:error",c);Wt().beforeEach(h)}let u;return()=>{const h=o.value&&o.value in Zs,f=i?.meta.layoutTransition??wk,d=u;return u=o.value,Gb(h&&f,{default:()=>Je(up,{suspensible:!0,onResolve:()=>{zr(c)}},{default:()=>Je(y9,{layoutProps:rT(e.attrs,{ref:a}),key:o.value||void 0,name:o.value,shouldProvide:!t.name,isRenderingNewLayout:g=>g!==d&&g===o.value,hasTransition:!!f},e.slots)})}).default()}}}),y9=sn({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean},isRenderingNewLayout:{type:Function,required:!0}},setup(t,e){const n=t.name;t.shouldProvide&&nr(OT,{isCurrent:i=>n===(i.meta.layout??"default")});const s=it(Gr);if(s&&s===oo()){const i=Kb(),o={};for(const a in i){const c=a;Object.defineProperty(o,c,{enumerable:!0,get:()=>t.isRenderingNewLayout(t.name)?i[c]:s[c]})}nr(Gr,zn(o))}return()=>!n||typeof n=="string"&&!(n in Zs)?e.slots.default?.():Je(g9,{key:n,layoutProps:t.layoutProps,name:n},e.slots)}}),v9=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},w9={};function E9(t,e){const n=u9,s=_9;return ln(),wl("div",null,[Me(s,null,{default:fu(()=>[Me(n)]),_:1})])}const T9=v9(w9,[["render",E9]]),I9=Object.freeze({left:0,top:0,width:16,height:16}),_A=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Yg=Object.freeze({...I9,..._A});Object.freeze({...Yg,body:"",hidden:!1});function b9(t){const[e,n,s,r]=t;if(s!==r){const i=Math.max(s,r);return[e-(i-s)/2,n-(i-r)/2,i,i]}return t}const S9=/(-?[0-9.]*[0-9]+[0-9.]*)/g,C9=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Wd(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const s=t.split(S9);if(s===null||!s.length)return t;const r=[];let i=s.shift(),o=C9.test(i);for(;;){if(o){const a=parseFloat(i);isNaN(a)?r.push(i):r.push(Math.ceil(a*e*n)/n)}else r.push(i);if(i=s.shift(),i===void 0)return r.join("");o=!o}}const A9=Object.freeze({width:null,height:null}),R9=Object.freeze({...A9,..._A});function P9(t,e="defs"){let n="";const s=t.indexOf("<"+e);for(;s>=0;){const r=t.indexOf(">",s),i=t.indexOf("</"+e);if(r===-1||i===-1)break;const o=t.indexOf(">",i);if(o===-1)break;n+=t.slice(r+1,i).trim(),t=t.slice(0,s).trim()+t.slice(o+1)}return{defs:n,content:t}}function k9(t,e){return t?"<defs>"+t+"</defs>"+e:e}function N9(t,e,n){const s=P9(t);return k9(s.defs,e+s.content+n)}const O9=t=>t==="unset"||t==="undefined"||t==="none";function x9(t,e){const n={...Yg,...t},s={...R9,...e},r={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,s].forEach(v=>{const I=[],D=v.hFlip,O=v.vFlip;let y=v.rotate;D?O?y+=2:(I.push("translate("+(r.width+r.left).toString()+" "+(0-r.top).toString()+")"),I.push("scale(-1 1)"),r.top=r.left=0):O&&(I.push("translate("+(0-r.left).toString()+" "+(r.height+r.top).toString()+")"),I.push("scale(1 -1)"),r.top=r.left=0);let S;switch(y<0&&(y-=Math.floor(y/4)*4),y=y%4,y){case 1:S=r.height/2+r.top,I.unshift("rotate(90 "+S.toString()+" "+S.toString()+")");break;case 2:I.unshift("rotate(180 "+(r.width/2+r.left).toString()+" "+(r.height/2+r.top).toString()+")");break;case 3:S=r.width/2+r.left,I.unshift("rotate(-90 "+S.toString()+" "+S.toString()+")");break}y%2===1&&(r.left!==r.top&&(S=r.left,r.left=r.top,r.top=S),r.width!==r.height&&(S=r.width,r.width=r.height,r.height=S)),I.length&&(i=N9(i,'<g transform="'+I.join(" ")+'">',"</g>"))});const o=s.width,a=s.height,c=r.width,u=r.height;let h,f;o===null?(f=a===null?"1em":a==="auto"?u:a,h=Wd(f,c/u)):(h=o==="auto"?c:o,f=a===null?Wd(h,u/c):a==="auto"?u:a);const d={},g=(v,I)=>{O9(I)||(d[v]=I.toString())};g("width",h),g("height",f);const _=[r.left,r.top,c,u];return d.viewBox=_.join(" "),{attributes:d,viewBox:_,body:i}}function D9(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function M9(t){return"data:image/svg+xml,"+D9(t)}function L9(t){return'url("'+M9(t)+'")'}function V9(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const s in e)n+=" "+s+'="'+e[s]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function F9(t){const e={display:"inline-block",width:"1em",height:"1em"},n=t.varName;switch(t.pseudoSelector&&(e.content="''"),t.mode){case"background":n&&(e["background-image"]="var(--"+n+")"),e["background-repeat"]="no-repeat",e["background-size"]="100% 100%";break;case"mask":e["background-color"]="currentColor",n&&(e["mask-image"]=e["-webkit-mask-image"]="var(--"+n+")"),e["mask-repeat"]=e["-webkit-mask-repeat"]="no-repeat",e["mask-size"]=e["-webkit-mask-size"]="100% 100%";break}return e}function U9(t,e){const n={},s=e.varName,r=x9(t);let i=r.viewBox;i[2]!==i[3]&&(e.forceSquare?i=b9(i):n.width=Wd("1em",i[2]/i[3]));const o=V9(r.body.replace(/currentColor/g,e.color||"black"),{viewBox:`${i[0]} ${i[1]} ${i[2]} ${i[3]}`,width:`${i[2]}`,height:`${i[3]}`}),a=L9(o);if(s)n["--"+s]=a;else switch(e.mode){case"background":n["background-image"]=a;break;case"mask":n["mask-image"]=n["-webkit-mask-image"]=a;break}return n}const uf={selectorStart:{compressed:"{",compact:" {",expanded:" {"},selectorEnd:{compressed:"}",compact:`; }
`,expanded:`;
}
`},rule:{compressed:"{key}:",compact:" {key}: ",expanded:`
  {key}: `}};function $9(t,e="expanded"){const n=[];for(let s=0;s<t.length;s++){const{selector:r,rules:i}=t[s];let a=(r instanceof Array?r.join(e==="compressed"?",":", "):r)+uf.selectorStart[e],c=!0;for(const u in i)c||(a+=";"),a+=uf.rule[e].replace("{key}",u)+i[u],c=!1;a+=uf.selectorEnd[e],n.push(a)}return n.join(e==="compressed"?"":`
`)}function j9(t,e={}){const n=e.customise?e.customise(t.body):t.body,s=e.mode||(e.color||!n.includes("currentColor")?"background":"mask");let r=e.varName;r===void 0&&s==="mask"&&(r="svg");const i={...e,mode:s,varName:r};s==="background"&&delete i.varName;const o={...e.rules,...F9(i),...U9({...Yg,...t,body:n},i)},a=e.iconSelector||".icon";return $9([{selector:a,rules:o}],i.format)}async function B9(t,e){if(!t)return null;const n=jd(t);return n||(await M6(t).catch(()=>(console.warn(`[Icon] failed to load icon \`${t}\``),null)),jd(t))}function yA(t){const e=nc().icon,n=(e.collections||[]).sort((s,r)=>r.length-s.length);return Le(()=>{const s=t(),r=s.startsWith(e.cssSelectorPrefix)?s.slice(e.cssSelectorPrefix.length):s,i=e.aliases?.[r]||r;if(!i.includes(":")){const o=n.find(a=>i.startsWith(a+"-"));return o?o+":"+i.slice(o.length+1):i}return i})}function vA(t,e){if(t!==!1)return t===!0||t===null?e:t}let Qo;function H9(t){return t.replace(/([^\w-])/g,"\\$1")}function q9(){if(Qo)return Qo;Qo=new Set;const t=n=>{if(n=n.replace(/^:where\((.*)\)$/,"$1").trim(),n.startsWith("."))return n},e=n=>{if(n?.length)for(const s of n){s?.cssRules&&e(s.cssRules);const r=s?.selectorText;if(typeof r=="string"){const i=t(r);i&&Qo.add(i)}}};if(typeof document<"u")for(const n of document.styleSheets)try{const s=n.cssRules||n.rules;e(s)}catch{}return Qo}const W9=sn({name:"NuxtIconCss",props:{name:{type:String,required:!0},customize:{type:[Function,Boolean,null],default:null,required:!1}},setup(t){const e=De(),n=nc().icon,s=Le(()=>t.name?n.cssSelectorPrefix+t.name:"");function r(a){if(!a)return;const c=jd(a);if(c)return c;const u=e.payload?.data?.[a];if(u)return Gg(a,u),u}const i=Le(()=>"."+H9(s.value));function o(a,c=!0){let u=i.value;n.cssWherePseudo&&(u=`:where(${u})`);const h=j9(a,{iconSelector:u,format:"compressed",customise:vA(t.customize,n.customize)});return n.cssLayer&&c?`@layer ${n.cssLayer} { ${h} }`:h}{const a=q9();async function c(u){if(a.has(i.value)||typeof document>"u")return;const h=document.createElement("style");h.textContent=o(u);const f=document.head.querySelector('style, link[rel="stylesheet"]');f?document.head.insertBefore(h,f):document.head.appendChild(h),a.add(i.value)}kn(()=>t.name,()=>{if(a.has(i.value))return;const u=r(t.name);u?c(u):B9(t.name).then(h=>{h&&c(h)}).catch(()=>null)},{immediate:!0})}return()=>Je("span",{class:["iconify",s.value]})}}),z9=sn({name:"NuxtIconSvg",props:{name:{type:String,required:!0},customize:{type:[Function,Boolean,null],default:null,required:!1}},setup(t,{slots:e}){const n=De(),s=nc().icon,r=yA(()=>t.name),i="i-"+r.value;if(r.value){const o=n.payload.data[i];o&&Gg(r.value,o)}return()=>Je(G6,{icon:r.value,ssr:!0,customise:vA(t.customize,s.customize)},e)}}),wA=sn({name:"NuxtIcon",props:{name:{type:String,required:!0},mode:{type:String,required:!1,default:null},size:{type:[Number,String],required:!1,default:null},customize:{type:[Function,Boolean,null],default:null,required:!1}},setup(t,{slots:e}){const n=De(),s=nc().icon,r=yA(()=>t.name),i=Le(()=>n.vueApp?.component(r.value)||((t.mode||s.mode)==="svg"?z9:W9)),o=Le(()=>{const a=t.size||s.size;return a?{fontSize:Number.isNaN(+a)?a:a+"px"}:null});return()=>Je(i.value,{...s.attrs,name:r.value,class:s.class,style:o.value,customize:t.customize},e)}}),K9=Object.freeze(Object.defineProperty({__proto__:null,default:wA},Symbol.toStringTag,{value:"Module"})),G9={class:"min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4"},Q9={class:"max-w-2xl mx-auto text-center"},Y9={class:"mb-8"},X9={class:"inline-flex items-center justify-center w-24 h-24 bg-red-100 dark:bg-red-900/30 rounded-full"},J9={class:"text-6xl font-bold text-gray-900 dark:text-white mb-4"},Z9={class:"text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4"},eB={class:"text-lg text-gray-600 dark:text-gray-400 mb-8"},tB={class:"flex flex-wrap justify-center gap-4"},nB={key:0,class:"mt-12 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg text-left"},sB={class:"text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2"},rB={class:"text-sm text-gray-700 dark:text-gray-300 overflow-x-auto whitespace-pre-wrap"},iB=sn({__name:"error",props:{error:Object},setup(t){const e=t,n=!1,s=i=>{switch(i){case 404:return"Page Not Found";case 403:return"Access Forbidden";case 500:return"Internal Server Error";case 503:return"Service Unavailable";default:return"Oops! Something Went Wrong"}},r=()=>DT({redirect:"/"});return Uu({title:`Error ${e.error?.statusCode||500}`,meta:[{name:"description",content:e.error?.message||"An error occurred"}]}),(i,o)=>{const a=wA,c=bL;return ln(),wl("div",G9,[gn("div",Q9,[gn("div",Y9,[gn("div",X9,[Me(a,{name:"heroicons:exclamation-triangle-20-solid",class:"w-12 h-12 text-red-600 dark:text-red-400"})])]),gn("h1",J9,Yo(t.error?.statusCode||"500"),1),gn("h2",Z9,Yo(s(t.error?.statusCode)),1),gn("p",eB,Yo(t.error?.message||"An unexpected error occurred. Please try again later."),1),gn("div",tB,[gn("button",{onClick:r,class:"px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md flex items-center gap-2"},[Me(a,{name:"heroicons:arrow-path-20-solid",class:"w-5 h-5"}),o[0]||(o[0]=la(" Try Again ",-1))]),Me(c,{to:"/",class:"px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center gap-2"},{default:fu(()=>[Me(a,{name:"heroicons:home-20-solid",class:"w-5 h-5"}),o[1]||(o[1]=la(" Go Home ",-1))]),_:1})]),t.error?.stack&&Ge(n)?(ln(),wl("div",nB,[gn("h3",sB,[Me(a,{name:"heroicons:bug-ant-20-solid",class:"w-5 h-5"}),o[2]||(o[2]=la(" Error Details (Development) ",-1))]),gn("pre",rB,Yo(t.error.stack),1)])):k0("",!0)])])}}}),oB={key:0},Fw={__name:"nuxt-root",setup(t){const e=()=>null,n=De(),s=n.deferHydration();if(n.isHydrating){const u=n.hooks.hookOnce("app:error",s);Wt().beforeEach(u)}const r=!1;nr(Gr,oo()),n.hooks.callHookWith(u=>u.map(h=>h()),"vue:setup");const i=ao(),o=!1,a=/bot\b|chrome-lighthouse|facebookexternalhit|google\b/i;kE((u,h,f)=>{if(n.hooks.callHook("vue:error",u,h,f).catch(d=>console.error("[nuxt] Error in `vue:error` hook",d)),a.test(navigator.userAgent))return n.hooks.callHook("app:error",u),console.error(`[nuxt] Not rendering error page for bot with user agent \`${navigator.userAgent}\`:`,u),!1;if(MT(u)&&(u.fatal||u.unhandled))return n.runWithContext(()=>Nr(u)),!1});const c=!1;return(u,h)=>(ln(),zs(up,{onResolve:Ge(s)},{default:fu(()=>[Ge(o)?(ln(),wl("div",oB)):Ge(i)?(ln(),zs(Ge(iB),{key:1,error:Ge(i)},null,8,["error"])):Ge(c)?(ln(),zs(Ge(e),{key:2,context:Ge(c)},null,8,["context"])):Ge(r)?(ln(),zs(KR(Ge(r)),{key:3})):(ln(),zs(Ge(T9),{key:4}))]),_:1},8,["onResolve"]))}};let Uw;{let t;Uw=async function(){if(t)return t;const n=!!(window.__NUXT__?.serverRendered??document.getElementById("__NUXT_DATA__")?.dataset.ssr==="true"),s=n?mP(Fw):gP(Fw),r=Ck({vueApp:s});async function i(o){await r.callHook("app:error",o),r.payload.error||=$r(o)}s.config.errorHandler=i,r.hook("app:suspense:resolve",()=>{s.config.errorHandler===i&&(s.config.errorHandler=void 0)}),!n&&R_.id&&r.hook("app:suspense:resolve",()=>{document.getElementById(R_.id)?.remove()});try{await Pk(r,c9)}catch(o){i(o)}try{await r.hooks.callHook("app:created",s),await r.hooks.callHook("app:beforeMount",s),s.mount(Ik),await r.hooks.callHook("app:mounted",s),await zr()}catch(o){i(o)}return s},t=Uw().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{aB as $,AB as A,wB as B,yB as C,EB as D,SB as E,Ut as F,kn as G,zs as H,v9 as I,uB as J,vB as K,CB as L,ns as M,bB as N,IB as O,TB as P,gp as Q,$P as R,Fn as S,wu as T,Eu as U,gB as V,PP as W,De as X,hB as Y,rT as Z,bL as _,gn as a,Is as a0,bs as a1,Je as a2,Ns as a3,nr as a4,Me as b,wl as c,la as d,wA as e,sn as f,pB as g,k0 as h,cB as i,Ge as j,rt as k,fB as l,Qa as m,Lf as n,ln as o,lB as p,Uu as q,pt as r,oo as s,Yo as t,vj as u,dB as v,fu as w,Le as x,uu as y,Wt as z};
