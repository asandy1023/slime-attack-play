(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Pm="modulepreload",Lm=function(n,e){return new URL(n,e).href},hd={},_h=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){let c=function(u){return Promise.all(u.map(d=>Promise.resolve(d).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");r=c(t.map(u=>{if(u=Lm(u,i),u in hd)return;hd[u]=!0;const d=u.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(i)for(let g=a.length-1;g>=0;g--){const v=a[g];if(v.href===u&&(!d||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${f}`))return;const h=document.createElement("link");if(h.rel=d?"stylesheet":Pm,d||(h.as="script"),h.crossOrigin="",h.href=u,l&&h.setAttribute("nonce",l),document.head.appendChild(h),d)return new Promise((g,v)=>{h.addEventListener("load",g),h.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})};const lu="180",Dm=0,pd=1,Im=2,cu=1,Um=2,Pi=3,tr=0,En=1,Zt=2,Zi=0,Ur=1,Br=2,md=3,gd=4,Nm=5,wr=100,Fm=101,Om=102,Bm=103,km=104,zm=200,Gm=201,Hm=202,Vm=203,nc=204,ic=205,Wm=206,Xm=207,qm=208,$m=209,Ym=210,jm=211,Km=212,Zm=213,Jm=214,rc=0,sc=1,ac=2,Cs=3,oc=4,lc=5,cc=6,uc=7,vh=0,Qm=1,e0=2,Ji=0,t0=1,n0=2,i0=3,r0=4,s0=5,a0=6,o0=7,xh=300,Ps=301,Ls=302,dc=303,fc=304,jo=306,hc=1e3,Pr=1001,pc=1002,zn=1003,l0=1004,Ga=1005,di=1006,gl=1007,Lr=1008,_i=1009,Mh=1010,yh=1011,pa=1012,uu=1013,kr=1014,fi=1015,La=1016,du=1017,fu=1018,ma=1020,Sh=35902,bh=35899,wh=1021,Eh=1022,ri=1023,ga=1026,_a=1027,hu=1028,pu=1029,Th=1030,mu=1031,gu=1033,Ao=33776,Ro=33777,Co=33778,Po=33779,mc=35840,gc=35841,_c=35842,vc=35843,xc=36196,Mc=37492,yc=37496,Sc=37808,bc=37809,wc=37810,Ec=37811,Tc=37812,Ac=37813,Rc=37814,Cc=37815,Pc=37816,Lc=37817,Dc=37818,Ic=37819,Uc=37820,Nc=37821,Fc=36492,Oc=36494,Bc=36495,kc=36283,zc=36284,Gc=36285,Hc=36286,c0=3200,u0=3201,Ah=0,d0=1,$i="",$n="srgb",Ds="srgb-linear",Bo="linear",vt="srgb",Jr=7680,_d=519,f0=512,h0=513,p0=514,Rh=515,m0=516,g0=517,_0=518,v0=519,Vc=35044,vd="300 es",hi=2e3,ko=2001;class Os{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xd=1234567;const oa=Math.PI/180,va=180/Math.PI;function Ui(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]).toLowerCase()}function et(n,e,t){return Math.max(e,Math.min(t,n))}function _u(n,e){return(n%e+e)%e}function x0(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function M0(n,e,t){return n!==e?(t-n)/(e-n):0}function la(n,e,t){return(1-t)*n+t*e}function y0(n,e,t,i){return la(n,e,1-Math.exp(-t*i))}function S0(n,e=1){return e-Math.abs(_u(n,e*2)-e)}function b0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function w0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function E0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function T0(n,e){return n+Math.random()*(e-n)}function A0(n){return n*(.5-Math.random())}function R0(n){n!==void 0&&(xd=n);let e=xd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function C0(n){return n*oa}function P0(n){return n*va}function L0(n){return(n&n-1)===0&&n!==0}function D0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function I0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function U0(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),d=s((e-i)/2),f=a((e-i)/2),h=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*d,l*f,o*c);break;case"YZY":n.set(l*f,o*u,l*d,o*c);break;case"ZXZ":n.set(l*d,l*f,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*h,o*c);break;case"YXY":n.set(l*h,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*h,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ei(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function mt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Wc={DEG2RAD:oa,RAD2DEG:va,generateUUID:Ui,clamp:et,euclideanModulo:_u,mapLinear:x0,inverseLerp:M0,lerp:la,damp:y0,pingpong:S0,smoothstep:b0,smootherstep:w0,randInt:E0,randFloat:T0,randFloatSpread:A0,seededRandom:R0,degToRad:C0,radToDeg:P0,isPowerOfTwo:L0,ceilPowerOfTwo:D0,floorPowerOfTwo:I0,setQuaternionFromProperEuler:U0,normalize:mt,denormalize:ei};class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ki{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[a+0],h=s[a+1],g=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=h,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==f||c!==h||u!==g){let m=1-o;const p=l*f+c*h+u*g+d*v,T=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const C=Math.sqrt(b),A=Math.atan2(C,p*T);m=Math.sin(m*A)/C,o=Math.sin(o*A)/C}const M=o*T;if(l=l*m+f*M,c=c*m+h*M,u=u*m+g*M,d=d*m+v*M,m===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],f=s[a+1],h=s[a+2],g=s[a+3];return e[t]=o*g+u*d+l*h-c*f,e[t+1]=l*g+u*f+c*d-o*h,e[t+2]=c*g+u*h+o*f-l*d,e[t+3]=u*g-o*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),f=l(i/2),h=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"YZX":this._x=f*u*d+c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d-f*h*g;break;case"XZY":this._x=f*u*d-c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+o+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-r)*h}else if(i>o&&i>d){const h=2*Math.sqrt(1+i-o-d);this._w=(u-l)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+c)/h}else if(o>d){const h=2*Math.sqrt(1+o-i-d);this._w=(s-c)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-i-o);this._w=(a-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const h=1-t;return this._w=h*a+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Md.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Md.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+l*c+a*d-o*u,this.y=i+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _l.copy(this).projectOnVector(e),this.sub(_l)}reflect(e){return this.sub(_l.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _l=new N,Md=new ki;class qe{constructor(e,t,i,r,s,a,o,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],v=r[0],m=r[3],p=r[6],T=r[1],b=r[4],M=r[7],C=r[2],A=r[5],L=r[8];return s[0]=a*v+o*T+l*C,s[3]=a*m+o*b+l*A,s[6]=a*p+o*M+l*L,s[1]=c*v+u*T+d*C,s[4]=c*m+u*b+d*A,s[7]=c*p+u*M+d*L,s[2]=f*v+h*T+g*C,s[5]=f*m+h*b+g*A,s[8]=f*p+h*M+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*s,h=c*s-a*l,g=t*d+i*f+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(r*c-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=f*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=h*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(vl.makeScale(e,t)),this}rotate(e){return this.premultiply(vl.makeRotation(-e)),this}translate(e,t){return this.premultiply(vl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vl=new qe;function Ch(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function zo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function N0(){const n=zo("canvas");return n.style.display="block",n}const yd={};function xa(n){n in yd||(yd[n]=!0,console.warn(n))}function F0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Sd=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bd=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function O0(){const n={enabled:!0,workingColorSpace:Ds,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===vt&&(r.r=Ni(r.r),r.g=Ni(r.g),r.b=Ni(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===vt&&(r.r=ws(r.r),r.g=ws(r.g),r.b=ws(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===$i?Bo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return xa("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return xa("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ds]:{primaries:e,whitePoint:i,transfer:Bo,toXYZ:Sd,fromXYZ:bd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:$n},outputColorSpaceConfig:{drawingBufferColorSpace:$n}},[$n]:{primaries:e,whitePoint:i,transfer:vt,toXYZ:Sd,fromXYZ:bd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:$n}}}),n}const dt=O0();function Ni(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ws(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Qr;class B0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Qr===void 0&&(Qr=zo("canvas")),Qr.width=e.width,Qr.height=e.height;const r=Qr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Qr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ni(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ni(t[i]/255)*255):t[i]=Ni(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let k0=0;class vu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=Ui(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(xl(r[a].image)):s.push(xl(r[a]))}else s=xl(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function xl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?B0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let z0=0;const Ml=new N;class gn extends Os{constructor(e=gn.DEFAULT_IMAGE,t=gn.DEFAULT_MAPPING,i=Pr,r=Pr,s=di,a=Lr,o=ri,l=_i,c=gn.DEFAULT_ANISOTROPY,u=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=Ui(),this.name="",this.source=new vu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ml).x}get height(){return this.source.getSize(Ml).y}get depth(){return this.source.getSize(Ml).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hc:e.x=e.x-Math.floor(e.x);break;case Pr:e.x=e.x<0?0:1;break;case pc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hc:e.y=e.y-Math.floor(e.y);break;case Pr:e.y=e.y<0?0:1;break;case pc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=xh;gn.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,t=0,i=0,r=1){Ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,M=(h+1)/2,C=(p+1)/2,A=(u+f)/4,L=(d+v)/4,D=(g+m)/4;return b>M&&b>C?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=A/i,s=L/i):M>C?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=A/r,s=D/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=L/s,r=D/s),this.set(i,r,s,t),this}let T=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(d-v)/T,this.z=(f-u)/T,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class G0 extends Os{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new gn(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:di,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new vu(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zr extends G0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ph extends gn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zn,this.minFilter=zn,this.wrapR=Pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class H0 extends gn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zn,this.minFilter=zn,this.wrapR=Pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qr{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Zn):Zn.fromBufferAttribute(s,a),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ha.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ha.copy(i.boundingBox)),Ha.applyMatrix4(e.matrixWorld),this.union(Ha)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xs),Va.subVectors(this.max,Xs),es.subVectors(e.a,Xs),ts.subVectors(e.b,Xs),ns.subVectors(e.c,Xs),zi.subVectors(ts,es),Gi.subVectors(ns,ts),hr.subVectors(es,ns);let t=[0,-zi.z,zi.y,0,-Gi.z,Gi.y,0,-hr.z,hr.y,zi.z,0,-zi.x,Gi.z,0,-Gi.x,hr.z,0,-hr.x,-zi.y,zi.x,0,-Gi.y,Gi.x,0,-hr.y,hr.x,0];return!yl(t,es,ts,ns,Va)||(t=[1,0,0,0,1,0,0,0,1],!yl(t,es,ts,ns,Va))?!1:(Wa.crossVectors(zi,Gi),t=[Wa.x,Wa.y,Wa.z],yl(t,es,ts,ns,Va))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wi=[new N,new N,new N,new N,new N,new N,new N,new N],Zn=new N,Ha=new qr,es=new N,ts=new N,ns=new N,zi=new N,Gi=new N,hr=new N,Xs=new N,Va=new N,Wa=new N,pr=new N;function yl(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){pr.fromArray(n,s);const o=r.x*Math.abs(pr.x)+r.y*Math.abs(pr.y)+r.z*Math.abs(pr.z),l=e.dot(pr),c=t.dot(pr),u=i.dot(pr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const V0=new qr,qs=new N,Sl=new N;class $r{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):V0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qs.subVectors(e,this.center);const t=qs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(qs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qs.copy(e.center).add(Sl)),this.expandByPoint(qs.copy(e.center).sub(Sl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ei=new N,bl=new N,Xa=new N,Hi=new N,wl=new N,qa=new N,El=new N;class xu{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,t),Ei.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){bl.copy(e).add(t).multiplyScalar(.5),Xa.copy(t).sub(e).normalize(),Hi.copy(this.origin).sub(bl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Xa),o=Hi.dot(this.direction),l=-Hi.dot(Xa),c=Hi.lengthSq(),u=Math.abs(1-a*a);let d,f,h,g;if(u>0)if(d=a*l-o,f=a*o-l,g=s*u,d>=0)if(f>=-g)if(f<=g){const v=1/u;d*=v,f*=v,h=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(bl).addScaledVector(Xa,f),h}intersectSphere(e,t){Ei.subVectors(e.center,this.origin);const i=Ei.dot(this.direction),r=Ei.dot(Ei)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,t,i,r,s){wl.subVectors(t,e),qa.subVectors(i,e),El.crossVectors(wl,qa);let a=this.direction.dot(El),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hi.subVectors(this.origin,e);const l=o*this.direction.dot(qa.crossVectors(Hi,qa));if(l<0)return null;const c=o*this.direction.dot(wl.cross(Hi));if(c<0||l+c>a)return null;const u=-o*Hi.dot(El);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,i,r,s,a,o,l,c,u,d,f,h,g,v,m){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,d,f,h,g,v,m)}set(e,t,i,r,s,a,o,l,c,u,d,f,h,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/is.setFromMatrixColumn(e,0).length(),s=1/is.setFromMatrixColumn(e,1).length(),a=1/is.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*u,h=a*d,g=o*u,v=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+g*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=g+h*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,g=c*u,v=c*d;t[0]=f+v*o,t[4]=g*o-h,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=h*o-g,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,g=c*u,v=c*d;t[0]=f-v*o,t[4]=-a*d,t[8]=g+h*o,t[1]=h+g*o,t[5]=a*u,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,h=a*d,g=o*u,v=o*d;t[0]=l*u,t[4]=g*c-h,t[8]=f*c+v,t[1]=l*d,t[5]=v*c+f,t[9]=h*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,h=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-f*d,t[8]=g*d+h,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*d+g,t[10]=f-v*d}else if(e.order==="XZY"){const f=a*l,h=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+v,t[5]=a*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=o*u,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(W0,e,X0)}lookAt(e,t,i){const r=this.elements;return Nn.subVectors(e,t),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),Vi.crossVectors(i,Nn),Vi.lengthSq()===0&&(Math.abs(i.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),Vi.crossVectors(i,Nn)),Vi.normalize(),$a.crossVectors(Nn,Vi),r[0]=Vi.x,r[4]=$a.x,r[8]=Nn.x,r[1]=Vi.y,r[5]=$a.y,r[9]=Nn.y,r[2]=Vi.z,r[6]=$a.z,r[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],v=i[6],m=i[10],p=i[14],T=i[3],b=i[7],M=i[11],C=i[15],A=r[0],L=r[4],D=r[8],w=r[12],S=r[1],I=r[5],B=r[9],H=r[13],X=r[2],Y=r[6],q=r[10],se=r[14],V=r[3],ce=r[7],me=r[11],Le=r[15];return s[0]=a*A+o*S+l*X+c*V,s[4]=a*L+o*I+l*Y+c*ce,s[8]=a*D+o*B+l*q+c*me,s[12]=a*w+o*H+l*se+c*Le,s[1]=u*A+d*S+f*X+h*V,s[5]=u*L+d*I+f*Y+h*ce,s[9]=u*D+d*B+f*q+h*me,s[13]=u*w+d*H+f*se+h*Le,s[2]=g*A+v*S+m*X+p*V,s[6]=g*L+v*I+m*Y+p*ce,s[10]=g*D+v*B+m*q+p*me,s[14]=g*w+v*H+m*se+p*Le,s[3]=T*A+b*S+M*X+C*V,s[7]=T*L+b*I+M*Y+C*ce,s[11]=T*D+b*B+M*q+C*me,s[15]=T*w+b*H+M*se+C*Le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*l*d-r*c*d-s*o*f+i*c*f+r*o*h-i*l*h)+v*(+t*l*h-t*c*f+s*a*f-r*a*h+r*c*u-s*l*u)+m*(+t*c*d-t*o*h-s*a*d+i*a*h+s*o*u-i*c*u)+p*(-r*o*u-t*l*d+t*o*f+r*a*d-i*a*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],v=e[13],m=e[14],p=e[15],T=d*m*c-v*f*c+v*l*h-o*m*h-d*l*p+o*f*p,b=g*f*c-u*m*c-g*l*h+a*m*h+u*l*p-a*f*p,M=u*v*c-g*d*c+g*o*h-a*v*h-u*o*p+a*d*p,C=g*d*l-u*v*l-g*o*f+a*v*f+u*o*m-a*d*m,A=t*T+i*b+r*M+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/A;return e[0]=T*L,e[1]=(v*f*s-d*m*s-v*r*h+i*m*h+d*r*p-i*f*p)*L,e[2]=(o*m*s-v*l*s+v*r*c-i*m*c-o*r*p+i*l*p)*L,e[3]=(d*l*s-o*f*s-d*r*c+i*f*c+o*r*h-i*l*h)*L,e[4]=b*L,e[5]=(u*m*s-g*f*s+g*r*h-t*m*h-u*r*p+t*f*p)*L,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*p-t*l*p)*L,e[7]=(a*f*s-u*l*s+u*r*c-t*f*c-a*r*h+t*l*h)*L,e[8]=M*L,e[9]=(g*d*s-u*v*s-g*i*h+t*v*h+u*i*p-t*d*p)*L,e[10]=(a*v*s-g*o*s+g*i*c-t*v*c-a*i*p+t*o*p)*L,e[11]=(u*o*s-a*d*s-u*i*c+t*d*c+a*i*h-t*o*h)*L,e[12]=C*L,e[13]=(u*v*r-g*d*r+g*i*f-t*v*f-u*i*m+t*d*m)*L,e[14]=(g*o*r-a*v*r-g*i*l+t*v*l+a*i*m-t*o*m)*L,e[15]=(a*d*r-u*o*r+u*i*l-t*d*l-a*i*f+t*o*f)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,f=s*c,h=s*u,g=s*d,v=a*u,m=a*d,p=o*d,T=l*c,b=l*u,M=l*d,C=i.x,A=i.y,L=i.z;return r[0]=(1-(v+p))*C,r[1]=(h+M)*C,r[2]=(g-b)*C,r[3]=0,r[4]=(h-M)*A,r[5]=(1-(f+p))*A,r[6]=(m+T)*A,r[7]=0,r[8]=(g+b)*L,r[9]=(m-T)*L,r[10]=(1-(f+v))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=is.set(r[0],r[1],r[2]).length();const a=is.set(r[4],r[5],r[6]).length(),o=is.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Jn.copy(this);const c=1/s,u=1/a,d=1/o;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=u,Jn.elements[5]*=u,Jn.elements[6]*=u,Jn.elements[8]*=d,Jn.elements[9]*=d,Jn.elements[10]*=d,t.setFromRotationMatrix(Jn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=hi,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let g,v;if(l)g=s/(a-s),v=a*s/(a-s);else if(o===hi)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===ko)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=hi,l=!1){const c=this.elements,u=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),h=-(i+r)/(i-r);let g,v;if(l)g=1/(a-s),v=a/(a-s);else if(o===hi)g=-2/(a-s),v=-(a+s)/(a-s);else if(o===ko)g=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const is=new N,Jn=new ot,W0=new N(0,0,0),X0=new N(1,1,1),Vi=new N,$a=new N,Nn=new N,wd=new ot,Ed=new ki;class vi{constructor(e=0,t=0,i=0,r=vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return wd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ed.setFromEuler(this),this.setFromQuaternion(Ed,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vi.DEFAULT_ORDER="XYZ";class Mu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let q0=0;const Td=new N,rs=new ki,Ti=new ot,Ya=new N,$s=new N,$0=new N,Y0=new ki,Ad=new N(1,0,0),Rd=new N(0,1,0),Cd=new N(0,0,1),Pd={type:"added"},j0={type:"removed"},ss={type:"childadded",child:null},Tl={type:"childremoved",child:null};class Bt extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new N,t=new vi,i=new ki,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new qe}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.multiply(rs),this}rotateOnWorldAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.premultiply(rs),this}rotateX(e){return this.rotateOnAxis(Ad,e)}rotateY(e){return this.rotateOnAxis(Rd,e)}rotateZ(e){return this.rotateOnAxis(Cd,e)}translateOnAxis(e,t){return Td.copy(e).applyQuaternion(this.quaternion),this.position.add(Td.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ad,e)}translateY(e){return this.translateOnAxis(Rd,e)}translateZ(e){return this.translateOnAxis(Cd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ya.copy(e):Ya.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt($s,Ya,this.up):Ti.lookAt(Ya,$s,this.up),this.quaternion.setFromRotationMatrix(Ti),r&&(Ti.extractRotation(r.matrixWorld),rs.setFromRotationMatrix(Ti),this.quaternion.premultiply(rs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pd),ss.child=e,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(j0),Tl.child=e,this.dispatchEvent(Tl),Tl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pd),ss.child=e,this.dispatchEvent(ss),ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,$0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,Y0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Bt.DEFAULT_UP=new N(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qn=new N,Ai=new N,Al=new N,Ri=new N,as=new N,os=new N,Ld=new N,Rl=new N,Cl=new N,Pl=new N,Ll=new Ot,Dl=new Ot,Il=new Ot;class jn{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Qn.subVectors(e,t),r.cross(Qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Qn.subVectors(r,t),Ai.subVectors(i,t),Al.subVectors(e,t);const a=Qn.dot(Qn),o=Qn.dot(Ai),l=Qn.dot(Al),c=Ai.dot(Ai),u=Ai.dot(Al),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,h=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-h-g,g,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ri.x),l.addScaledVector(a,Ri.y),l.addScaledVector(o,Ri.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Ll.setScalar(0),Dl.setScalar(0),Il.setScalar(0),Ll.fromBufferAttribute(e,t),Dl.fromBufferAttribute(e,i),Il.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ll,s.x),a.addScaledVector(Dl,s.y),a.addScaledVector(Il,s.z),a}static isFrontFacing(e,t,i,r){return Qn.subVectors(i,t),Ai.subVectors(e,t),Qn.cross(Ai).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),Qn.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return jn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;as.subVectors(r,i),os.subVectors(s,i),Rl.subVectors(e,i);const l=as.dot(Rl),c=os.dot(Rl);if(l<=0&&c<=0)return t.copy(i);Cl.subVectors(e,r);const u=as.dot(Cl),d=os.dot(Cl);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(as,a);Pl.subVectors(e,s);const h=as.dot(Pl),g=os.dot(Pl);if(g>=0&&h<=g)return t.copy(s);const v=h*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(os,o);const m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return Ld.subVectors(s,r),o=(d-u)/(d-u+(h-g)),t.copy(r).addScaledVector(Ld,o);const p=1/(m+v+f);return a=v*p,o=f*p,t.copy(i).addScaledVector(as,a).addScaledVector(os,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Lh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},ja={h:0,s:0,l:0};function Ul(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class we{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,dt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=dt.workingColorSpace){if(e=_u(e,1),t=et(t,0,1),i=et(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Ul(a,s,e+1/3),this.g=Ul(a,s,e),this.b=Ul(a,s,e-1/3)}return dt.colorSpaceToWorking(this,r),this}setStyle(e,t=$n){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$n){const i=Lh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return dt.workingToColorSpace(fn.copy(this),e),Math.round(et(fn.r*255,0,255))*65536+Math.round(et(fn.g*255,0,255))*256+Math.round(et(fn.b*255,0,255))}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(fn.copy(this),t);const i=fn.r,r=fn.g,s=fn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=$n){dt.workingToColorSpace(fn.copy(this),e);const t=fn.r,i=fn.g,r=fn.b;return e!==$n?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+t,Wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wi),e.getHSL(ja);const i=la(Wi.h,ja.h,t),r=la(Wi.s,ja.s,t),s=la(Wi.l,ja.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new we;we.NAMES=Lh;let K0=0;class Yr extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=Ur,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nc,this.blendDst=ic,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_d,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ur&&(i.blending=this.blending),this.side!==tr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==nc&&(i.blendSrc=this.blendSrc),this.blendDst!==ic&&(i.blendDst=this.blendDst),this.blendEquation!==wr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_d&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Jr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Jr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class gt extends Yr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new N,Ka=new Oe;let Z0=0;class Ln{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Z0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Vc,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ka.fromBufferAttribute(this,t),Ka.applyMatrix3(e),this.setXY(t,Ka.x,Ka.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ei(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=mt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array),r=mt(r,this.array),s=mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vc&&(e.usage=this.usage),e}}class Dh extends Ln{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ih extends Ln{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Je extends Ln{constructor(e,t,i){super(new Float32Array(e),t,i)}}let J0=0;const Xn=new ot,Nl=new Bt,ls=new N,Fn=new qr,Ys=new qr,rn=new N;class Vt extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ch(e)?Ih:Dh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,t,i){return Xn.makeTranslation(e,t,i),this.applyMatrix4(Xn),this}scale(e,t,i){return Xn.makeScale(e,t,i),this.applyMatrix4(Xn),this}lookAt(e){return Nl.lookAt(e),Nl.updateMatrix(),this.applyMatrix4(Nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Je(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Fn.setFromBufferAttribute(s),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $r);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ys.setFromBufferAttribute(o),this.morphTargetsRelative?(rn.addVectors(Fn.min,Ys.min),Fn.expandByPoint(rn),rn.addVectors(Fn.max,Ys.max),Fn.expandByPoint(rn)):(Fn.expandByPoint(Ys.min),Fn.expandByPoint(Ys.max))}Fn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)rn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(rn));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)rn.fromBufferAttribute(o,c),l&&(ls.fromBufferAttribute(e,c),rn.add(ls)),r=Math.max(r,i.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ln(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new N,l[D]=new N;const c=new N,u=new N,d=new N,f=new Oe,h=new Oe,g=new Oe,v=new N,m=new N;function p(D,w,S){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,S),f.fromBufferAttribute(s,D),h.fromBufferAttribute(s,w),g.fromBufferAttribute(s,S),u.sub(c),d.sub(c),h.sub(f),g.sub(f);const I=1/(h.x*g.y-g.x*h.y);isFinite(I)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(I),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(I),o[D].add(v),o[w].add(v),o[S].add(v),l[D].add(m),l[w].add(m),l[S].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let D=0,w=T.length;D<w;++D){const S=T[D],I=S.start,B=S.count;for(let H=I,X=I+B;H<X;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const b=new N,M=new N,C=new N,A=new N;function L(D){C.fromBufferAttribute(r,D),A.copy(C);const w=o[D];b.copy(w),b.sub(C.multiplyScalar(C.dot(w))).normalize(),M.crossVectors(A,w);const I=M.dot(l[D])<0?-1:1;a.setXYZW(D,b.x,b.y,b.z,I)}for(let D=0,w=T.length;D<w;++D){const S=T[D],I=S.start,B=S.count;for(let H=I,X=I+B;H<X;H+=3)L(e.getX(H+0)),L(e.getX(H+1)),L(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ln(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const r=new N,s=new N,a=new N,o=new N,l=new N,c=new N,u=new N,d=new N;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let h=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?h=l[v]*o.data.stride+o.offset:h=l[v]*u;for(let p=0;p<u;p++)f[g++]=c[h++]}return new Ln(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,i);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dd=new ot,mr=new xu,Za=new $r,Id=new N,Ja=new N,Qa=new N,eo=new N,Fl=new N,to=new N,Ud=new N,no=new N;class Z extends Bt{constructor(e=new Vt,t=new gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){to.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(Fl.fromBufferAttribute(d,e),a?to.addScaledVector(Fl,u):to.addScaledVector(Fl.sub(t),u))}t.add(to)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Za.copy(i.boundingSphere),Za.applyMatrix4(s),mr.copy(e.ray).recast(e.near),!(Za.containsPoint(mr.origin)===!1&&(mr.intersectSphere(Za,Id)===null||mr.origin.distanceToSquared(Id)>(e.far-e.near)**2))&&(Dd.copy(s).invert(),mr.copy(e.ray).applyMatrix4(Dd),!(i.boundingBox!==null&&mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,mr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],T=Math.max(m.start,h.start),b=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let M=T,C=b;M<C;M+=3){const A=o.getX(M),L=o.getX(M+1),D=o.getX(M+2);r=io(this,p,e,i,c,u,d,A,L,D),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),v=Math.min(o.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){const T=o.getX(m),b=o.getX(m+1),M=o.getX(m+2);r=io(this,a,e,i,c,u,d,T,b,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],T=Math.max(m.start,h.start),b=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let M=T,C=b;M<C;M+=3){const A=M,L=M+1,D=M+2;r=io(this,p,e,i,c,u,d,A,L,D),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){const T=m,b=m+1,M=m+2;r=io(this,a,e,i,c,u,d,T,b,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Q0(n,e,t,i,r,s,a,o){let l;if(e.side===En?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===tr,o),l===null)return null;no.copy(o),no.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(no);return c<t.near||c>t.far?null:{distance:c,point:no.clone(),object:n}}function io(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Ja),n.getVertexPosition(l,Qa),n.getVertexPosition(c,eo);const u=Q0(n,e,t,i,Ja,Qa,eo,Ud);if(u){const d=new N;jn.getBarycoord(Ud,Ja,Qa,eo,d),r&&(u.uv=jn.getInterpolatedAttribute(r,o,l,c,d,new Oe)),s&&(u.uv1=jn.getInterpolatedAttribute(s,o,l,c,d,new Oe)),a&&(u.normal=jn.getInterpolatedAttribute(a,o,l,c,d,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new N,materialIndex:0};jn.getNormal(Ja,Qa,eo,f.normal),u.face=f,u.barycoord=d}return u}class nr extends Vt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,h=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(u,3)),this.setAttribute("uv",new Je(d,2));function g(v,m,p,T,b,M,C,A,L,D,w){const S=M/L,I=C/D,B=M/2,H=C/2,X=A/2,Y=L+1,q=D+1;let se=0,V=0;const ce=new N;for(let me=0;me<q;me++){const Le=me*I-H;for(let Qe=0;Qe<Y;Qe++){const bt=Qe*S-B;ce[v]=bt*T,ce[m]=Le*b,ce[p]=X,c.push(ce.x,ce.y,ce.z),ce[v]=0,ce[m]=0,ce[p]=A>0?1:-1,u.push(ce.x,ce.y,ce.z),d.push(Qe/L),d.push(1-me/D),se+=1}}for(let me=0;me<D;me++)for(let Le=0;Le<L;Le++){const Qe=f+Le+Y*me,bt=f+Le+Y*(me+1),Rt=f+(Le+1)+Y*(me+1),ft=f+(Le+1)+Y*me;l.push(Qe,bt,ft),l.push(bt,Rt,ft),V+=6}o.addGroup(h,V,w),h+=V,f+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Is(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Sn(n){const e={};for(let t=0;t<n.length;t++){const i=Is(n[t]);for(const r in i)e[r]=i[r]}return e}function eg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Uh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const tg={clone:Is,merge:Sn};var ng=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ig=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends Yr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ng,this.fragmentShader=ig,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=eg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Nh extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xi=new N,Nd=new Oe,Fd=new Oe;class Yn extends Nh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=va*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return va*2*Math.atan(Math.tan(oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z)}getViewSize(e,t){return this.getViewBounds(e,Nd,Fd),t.subVectors(Fd,Nd)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(oa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const cs=-90,us=1;class rg extends Bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Yn(cs,us,e,t);r.layers=this.layers,this.add(r);const s=new Yn(cs,us,e,t);s.layers=this.layers,this.add(s);const a=new Yn(cs,us,e,t);a.layers=this.layers,this.add(a);const o=new Yn(cs,us,e,t);o.layers=this.layers,this.add(o);const l=new Yn(cs,us,e,t);l.layers=this.layers,this.add(l);const c=new Yn(cs,us,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ko)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Fh extends gn{constructor(e=[],t=Ps,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sg extends zr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Fh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new nr(5,5,5),s=new xi({name:"CubemapFromEquirect",uniforms:Is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:Zi});s.uniforms.tEquirect.value=t;const a=new Z(r,s),o=t.minFilter;return t.minFilter===Lr&&(t.minFilter=di),new rg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class Ke extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ag={type:"move"};class Ol{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;c.inputState.pinching&&f>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ag)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ke;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class yu{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new we(e),this.near=t,this.far=i}clone(){return new yu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class og extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class lg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Vc,this.updateRanges=[],this.version=0,this.uuid=Ui()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Mn=new N;class Go{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix4(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.applyNormalMatrix(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.transformDirection(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ei(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=mt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ei(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ei(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ei(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ei(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array),r=mt(r,this.array),s=mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ln(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Go(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Oh extends Yr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ds;const js=new N,fs=new N,hs=new N,ps=new Oe,Ks=new Oe,Bh=new ot,ro=new N,Zs=new N,so=new N,Od=new Oe,Bl=new Oe,Bd=new Oe;class cg extends Bt{constructor(e=new Oh){if(super(),this.isSprite=!0,this.type="Sprite",ds===void 0){ds=new Vt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new lg(t,5);ds.setIndex([0,1,2,0,2,3]),ds.setAttribute("position",new Go(i,3,0,!1)),ds.setAttribute("uv",new Go(i,2,3,!1))}this.geometry=ds,this.material=e,this.center=new Oe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fs.setFromMatrixScale(this.matrixWorld),Bh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),hs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fs.multiplyScalar(-hs.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;ao(ro.set(-.5,-.5,0),hs,a,fs,r,s),ao(Zs.set(.5,-.5,0),hs,a,fs,r,s),ao(so.set(.5,.5,0),hs,a,fs,r,s),Od.set(0,0),Bl.set(1,0),Bd.set(1,1);let o=e.ray.intersectTriangle(ro,Zs,so,!1,js);if(o===null&&(ao(Zs.set(-.5,.5,0),hs,a,fs,r,s),Bl.set(0,1),o=e.ray.intersectTriangle(ro,so,Zs,!1,js),o===null))return;const l=e.ray.origin.distanceTo(js);l<e.near||l>e.far||t.push({distance:l,point:js.clone(),uv:jn.getInterpolation(js,ro,Zs,so,Od,Bl,Bd,new Oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ao(n,e,t,i,r,s){ps.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Ks.x=s*ps.x-r*ps.y,Ks.y=r*ps.x+s*ps.y):Ks.copy(ps),n.copy(e),n.x+=Ks.x,n.y+=Ks.y,n.applyMatrix4(Bh)}class ug extends gn{constructor(e=null,t=1,i=1,r,s,a,o,l,c=zn,u=zn,d,f){super(null,a,o,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kd extends Ln{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ms=new ot,zd=new ot,oo=[],Gd=new qr,dg=new ot,Js=new Z,Qs=new $r;class Bs extends Z{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new kd(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,dg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ms),Gd.copy(e.boundingBox).applyMatrix4(ms),this.boundingBox.union(Gd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new $r),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ms),Qs.copy(e.boundingSphere).applyMatrix4(ms),this.boundingSphere.union(Qs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Js.geometry=this.geometry,Js.material=this.material,Js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qs.copy(this.boundingSphere),Qs.applyMatrix4(i),e.ray.intersectsSphere(Qs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ms),zd.multiplyMatrices(i,ms),Js.matrixWorld=zd,Js.raycast(e,oo);for(let a=0,o=oo.length;a<o;a++){const l=oo[a];l.instanceId=s,l.object=this,t.push(l)}oo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new kd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new ug(new Float32Array(r*this.count),r,this.count,hu,fi));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const kl=new N,fg=new N,hg=new qe;class Sr{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=kl.subVectors(i,t).cross(fg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(kl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||hg.getNormalMatrix(e),r=this.coplanarPoint(kl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gr=new $r,pg=new Oe(.5,.5),lo=new N;class Su{constructor(e=new Sr,t=new Sr,i=new Sr,r=new Sr,s=new Sr,a=new Sr){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=hi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],h=s[7],g=s[8],v=s[9],m=s[10],p=s[11],T=s[12],b=s[13],M=s[14],C=s[15];if(r[0].setComponents(c-a,h-u,p-g,C-T).normalize(),r[1].setComponents(c+a,h+u,p+g,C+T).normalize(),r[2].setComponents(c+o,h+d,p+v,C+b).normalize(),r[3].setComponents(c-o,h-d,p-v,C-b).normalize(),i)r[4].setComponents(l,f,m,M).normalize(),r[5].setComponents(c-l,h-f,p-m,C-M).normalize();else if(r[4].setComponents(c-l,h-f,p-m,C-M).normalize(),t===hi)r[5].setComponents(c+l,h+f,p+m,C+M).normalize();else if(t===ko)r[5].setComponents(l,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){gr.center.set(0,0,0);const t=pg.distanceTo(e.center);return gr.radius=.7071067811865476+t,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(lo.x=r.normal.x>0?e.max.x:e.min.x,lo.y=r.normal.y>0?e.max.y:e.min.y,lo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(lo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class kh extends Yr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Hd=new ot,Xc=new xu,co=new $r,uo=new N;class mg extends Bt{constructor(e=new Vt,t=new kh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),co.copy(i.boundingSphere),co.applyMatrix4(r),co.radius+=s,e.ray.intersectsSphere(co)===!1)return;Hd.copy(r).invert(),Xc.copy(e.ray).applyMatrix4(Hd);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),h=Math.min(c.count,a.start+a.count);for(let g=f,v=h;g<v;g++){const m=c.getX(g);uo.fromBufferAttribute(d,m),Vd(uo,m,l,r,e,t,this)}}else{const f=Math.max(0,a.start),h=Math.min(d.count,a.start+a.count);for(let g=f,v=h;g<v;g++)uo.fromBufferAttribute(d,g),Vd(uo,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Vd(n,e,t,i,r,s,a){const o=Xc.distanceSqToPoint(n);if(o<t){const l=new N;Xc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class gg extends gn{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class zh extends gn{constructor(e,t,i=kr,r,s,a,o=zn,l=zn,c,u=ga,d=1){if(u!==ga&&u!==_a)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Gh extends gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class bu extends Vt{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new N,u=new Oe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){const h=i+d/t*r;c.x=e*Math.cos(h),c.y=e*Math.sin(h),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Je(a,3)),this.setAttribute("normal",new Je(o,3)),this.setAttribute("uv",new Je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bu(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class pn extends Vt{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],f=[],h=[];let g=0;const v=[],m=i/2;let p=0;T(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Je(d,3)),this.setAttribute("normal",new Je(f,3)),this.setAttribute("uv",new Je(h,2));function T(){const M=new N,C=new N;let A=0;const L=(t-e)/i;for(let D=0;D<=s;D++){const w=[],S=D/s,I=S*(t-e)+e;for(let B=0;B<=r;B++){const H=B/r,X=H*l+o,Y=Math.sin(X),q=Math.cos(X);C.x=I*Y,C.y=-S*i+m,C.z=I*q,d.push(C.x,C.y,C.z),M.set(Y,L,q).normalize(),f.push(M.x,M.y,M.z),h.push(H,1-S),w.push(g++)}v.push(w)}for(let D=0;D<r;D++)for(let w=0;w<s;w++){const S=v[w][D],I=v[w+1][D],B=v[w+1][D+1],H=v[w][D+1];(e>0||w!==0)&&(u.push(S,I,H),A+=3),(t>0||w!==s-1)&&(u.push(I,B,H),A+=3)}c.addGroup(p,A,0),p+=A}function b(M){const C=g,A=new Oe,L=new N;let D=0;const w=M===!0?e:t,S=M===!0?1:-1;for(let B=1;B<=r;B++)d.push(0,m*S,0),f.push(0,S,0),h.push(.5,.5),g++;const I=g;for(let B=0;B<=r;B++){const X=B/r*l+o,Y=Math.cos(X),q=Math.sin(X);L.x=w*q,L.y=m*S,L.z=w*Y,d.push(L.x,L.y,L.z),f.push(0,S,0),A.x=Y*.5+.5,A.y=q*.5*S+.5,h.push(A.x,A.y),g++}for(let B=0;B<r;B++){const H=C+B,X=I+B;M===!0?u.push(X,X+1,H):u.push(X+1,X,H),D+=3}c.addGroup(p,D,M===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Jt extends pn{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Jt(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ks extends Vt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];o(r),c(i),u(),this.setAttribute("position",new Je(s,3)),this.setAttribute("normal",new Je(s.slice(),3)),this.setAttribute("uv",new Je(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(T){const b=new N,M=new N,C=new N;for(let A=0;A<t.length;A+=3)h(t[A+0],b),h(t[A+1],M),h(t[A+2],C),l(b,M,C,T)}function l(T,b,M,C){const A=C+1,L=[];for(let D=0;D<=A;D++){L[D]=[];const w=T.clone().lerp(M,D/A),S=b.clone().lerp(M,D/A),I=A-D;for(let B=0;B<=I;B++)B===0&&D===A?L[D][B]=w:L[D][B]=w.clone().lerp(S,B/I)}for(let D=0;D<A;D++)for(let w=0;w<2*(A-D)-1;w++){const S=Math.floor(w/2);w%2===0?(f(L[D][S+1]),f(L[D+1][S]),f(L[D][S])):(f(L[D][S+1]),f(L[D+1][S+1]),f(L[D+1][S]))}}function c(T){const b=new N;for(let M=0;M<s.length;M+=3)b.x=s[M+0],b.y=s[M+1],b.z=s[M+2],b.normalize().multiplyScalar(T),s[M+0]=b.x,s[M+1]=b.y,s[M+2]=b.z}function u(){const T=new N;for(let b=0;b<s.length;b+=3){T.x=s[b+0],T.y=s[b+1],T.z=s[b+2];const M=m(T)/2/Math.PI+.5,C=p(T)/Math.PI+.5;a.push(M,1-C)}g(),d()}function d(){for(let T=0;T<a.length;T+=6){const b=a[T+0],M=a[T+2],C=a[T+4],A=Math.max(b,M,C),L=Math.min(b,M,C);A>.9&&L<.1&&(b<.2&&(a[T+0]+=1),M<.2&&(a[T+2]+=1),C<.2&&(a[T+4]+=1))}}function f(T){s.push(T.x,T.y,T.z)}function h(T,b){const M=T*3;b.x=e[M+0],b.y=e[M+1],b.z=e[M+2]}function g(){const T=new N,b=new N,M=new N,C=new N,A=new Oe,L=new Oe,D=new Oe;for(let w=0,S=0;w<s.length;w+=9,S+=6){T.set(s[w+0],s[w+1],s[w+2]),b.set(s[w+3],s[w+4],s[w+5]),M.set(s[w+6],s[w+7],s[w+8]),A.set(a[S+0],a[S+1]),L.set(a[S+2],a[S+3]),D.set(a[S+4],a[S+5]),C.copy(T).add(b).add(M).divideScalar(3);const I=m(C);v(A,S+0,T,I),v(L,S+2,b,I),v(D,S+4,M,I)}}function v(T,b,M,C){C<0&&T.x===1&&(a[b]=T.x-1),M.x===0&&M.z===0&&(a[b]=C/2/Math.PI+.5)}function m(T){return Math.atan2(T.z,-T.x)}function p(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ks(e.vertices,e.indices,e.radius,e.details)}}class Da extends ks{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Da(e.radius,e.detail)}}class Dt extends ks{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Dt(e.radius,e.detail)}}class wu extends Vt{constructor(e=[new Oe(0,-.5),new Oe(.5,0),new Oe(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=et(r,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],u=1/t,d=new N,f=new Oe,h=new N,g=new N,v=new N;let m=0,p=0;for(let T=0;T<=e.length-1;T++)switch(T){case 0:m=e[T+1].x-e[T].x,p=e[T+1].y-e[T].y,h.x=p*1,h.y=-m,h.z=p*0,v.copy(h),h.normalize(),l.push(h.x,h.y,h.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[T+1].x-e[T].x,p=e[T+1].y-e[T].y,h.x=p*1,h.y=-m,h.z=p*0,g.copy(h),h.x+=v.x,h.y+=v.y,h.z+=v.z,h.normalize(),l.push(h.x,h.y,h.z),v.copy(g)}for(let T=0;T<=t;T++){const b=i+T*u*r,M=Math.sin(b),C=Math.cos(b);for(let A=0;A<=e.length-1;A++){d.x=e[A].x*M,d.y=e[A].y,d.z=e[A].x*C,a.push(d.x,d.y,d.z),f.x=T/t,f.y=A/(e.length-1),o.push(f.x,f.y);const L=l[3*A+0]*M,D=l[3*A+1],w=l[3*A+0]*C;c.push(L,D,w)}}for(let T=0;T<t;T++)for(let b=0;b<e.length-1;b++){const M=b+T*e.length,C=M,A=M+e.length,L=M+e.length+1,D=M+1;s.push(C,A,D),s.push(L,D,A)}this.setIndex(s),this.setAttribute("position",new Je(a,3)),this.setAttribute("uv",new Je(o,2)),this.setAttribute("normal",new Je(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wu(e.points,e.segments,e.phiStart,e.phiLength)}}class Mi extends ks{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Mi(e.radius,e.detail)}}class zs extends Vt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,f=t/l,h=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const T=p*f-a;for(let b=0;b<c;b++){const M=b*d-s;g.push(M,-T,0),v.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<o;T++){const b=T+c*p,M=T+c*(p+1),C=T+1+c*(p+1),A=T+1+c*p;h.push(b,M,A),h.push(M,C,A)}this.setIndex(h),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(v,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.width,e.height,e.widthSegments,e.heightSegments)}}class ar extends Vt{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],u=[];let d=e;const f=(t-e)/r,h=new N,g=new Oe;for(let v=0;v<=r;v++){for(let m=0;m<=i;m++){const p=s+m/i*a;h.x=d*Math.cos(p),h.y=d*Math.sin(p),l.push(h.x,h.y,h.z),c.push(0,0,1),g.x=(h.x/t+1)/2,g.y=(h.y/t+1)/2,u.push(g.x,g.y)}d+=f}for(let v=0;v<r;v++){const m=v*(i+1);for(let p=0;p<i;p++){const T=p+m,b=T,M=T+i+1,C=T+i+2,A=T+1;o.push(b,M,A),o.push(M,C,A)}}this.setIndex(o),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(c,3)),this.setAttribute("uv",new Je(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ar(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class pt extends Vt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new N,f=new N,h=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const T=[],b=p/i;let M=0;p===0&&a===0?M=.5/t:p===i&&l===Math.PI&&(M=-.5/t);for(let C=0;C<=t;C++){const A=C/t;d.x=-e*Math.cos(r+A*s)*Math.sin(a+b*o),d.y=e*Math.cos(a+b*o),d.z=e*Math.sin(r+A*s)*Math.sin(a+b*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),m.push(A+M,1-b),T.push(c++)}u.push(T)}for(let p=0;p<i;p++)for(let T=0;T<t;T++){const b=u[p][T+1],M=u[p][T],C=u[p+1][T],A=u[p+1][T+1];(p!==0||a>0)&&h.push(b,M,A),(p!==i-1||l<Math.PI)&&h.push(M,C,A)}this.setIndex(h),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(v,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Eu extends ks{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Eu(e.radius,e.detail)}}class Fi extends Vt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],c=[],u=new N,d=new N,f=new N;for(let h=0;h<=i;h++)for(let g=0;g<=r;g++){const v=g/r*s,m=h/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(v),d.y=(e+t*Math.cos(m))*Math.sin(v),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/r),c.push(h/i)}for(let h=1;h<=i;h++)for(let g=1;g<=r;g++){const v=(r+1)*h+g-1,m=(r+1)*(h-1)+g-1,p=(r+1)*(h-1)+g,T=(r+1)*h+g;a.push(v,m,T),a.push(m,p,T)}this.setIndex(a),this.setAttribute("position",new Je(o,3)),this.setAttribute("normal",new Je(l,3)),this.setAttribute("uv",new Je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ln extends Yr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ah,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _g extends Yr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=c0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vg extends Yr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Hh extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class xg extends Hh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const zl=new ot,Wd=new N,Xd=new N;class Mg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=_i,this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Su,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Wd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wd),Xd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xd),t.updateMatrixWorld(),zl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(zl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Vh extends Nh{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class yg extends Mg{constructor(){super(new Vh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sg extends Hh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new yg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class bg extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const qd=new ot;class wg{constructor(e,t,i=0,r=1/0){this.ray=new xu(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Mu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return qd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qd),this}intersectObject(e,t=!0,i=[]){return qc(e,this,i,t),i.sort($d),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)qc(e[r],this,i,t);return i.sort($d),i}}function $d(n,e){return n.distance-e.distance}function qc(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)qc(s[a],e,t,!0)}}function Yd(n,e,t,i){const r=Eg(i);switch(t){case wh:return n*e;case hu:return n*e/r.components*r.byteLength;case pu:return n*e/r.components*r.byteLength;case Th:return n*e*2/r.components*r.byteLength;case mu:return n*e*2/r.components*r.byteLength;case Eh:return n*e*3/r.components*r.byteLength;case ri:return n*e*4/r.components*r.byteLength;case gu:return n*e*4/r.components*r.byteLength;case Ao:case Ro:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Co:case Po:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case gc:case vc:return Math.max(n,16)*Math.max(e,8)/4;case mc:case _c:return Math.max(n,8)*Math.max(e,8)/2;case xc:case Mc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case yc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case wc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ac:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Pc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Lc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Dc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ic:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Uc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Nc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Fc:case Oc:case Bc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case kc:case zc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Gc:case Hc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Eg(n){switch(n){case _i:case Mh:return{byteLength:1,components:1};case pa:case yh:case La:return{byteLength:2,components:1};case du:case fu:return{byteLength:2,components:4};case kr:case uu:case fi:return{byteLength:4,components:1};case Sh:case bh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lu);function Wh(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Tg(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){const g=d[f],v=d[h];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,d[f]=v)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){const v=d[h];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Ag=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Cg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ig=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ug=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ng=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Fg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Og=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Vg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$g=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Kg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,e_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,t_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,n_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,i_="gl_FragColor = linearToOutputTexel( gl_FragColor );",r_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,s_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,a_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,o_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,l_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,c_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,u_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,d_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,f_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,h_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,p_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,m_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,g_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,__=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,v_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,x_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,M_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,y_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,S_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,b_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,w_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,E_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,T_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,A_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,R_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,C_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,P_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,I_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,U_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,N_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,F_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,B_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,k_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,z_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,G_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,V_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,X_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,q_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,j_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,K_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Z_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,J_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Q_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ev=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,av=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ov=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,cv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_v=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ev=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Av=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Iv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Uv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Nv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ov=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Gv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Xv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$v=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ex=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ix=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:Ag,alphahash_pars_fragment:Rg,alphamap_fragment:Cg,alphamap_pars_fragment:Pg,alphatest_fragment:Lg,alphatest_pars_fragment:Dg,aomap_fragment:Ig,aomap_pars_fragment:Ug,batching_pars_vertex:Ng,batching_vertex:Fg,begin_vertex:Og,beginnormal_vertex:Bg,bsdfs:kg,iridescence_fragment:zg,bumpmap_pars_fragment:Gg,clipping_planes_fragment:Hg,clipping_planes_pars_fragment:Vg,clipping_planes_pars_vertex:Wg,clipping_planes_vertex:Xg,color_fragment:qg,color_pars_fragment:$g,color_pars_vertex:Yg,color_vertex:jg,common:Kg,cube_uv_reflection_fragment:Zg,defaultnormal_vertex:Jg,displacementmap_pars_vertex:Qg,displacementmap_vertex:e_,emissivemap_fragment:t_,emissivemap_pars_fragment:n_,colorspace_fragment:i_,colorspace_pars_fragment:r_,envmap_fragment:s_,envmap_common_pars_fragment:a_,envmap_pars_fragment:o_,envmap_pars_vertex:l_,envmap_physical_pars_fragment:x_,envmap_vertex:c_,fog_vertex:u_,fog_pars_vertex:d_,fog_fragment:f_,fog_pars_fragment:h_,gradientmap_pars_fragment:p_,lightmap_pars_fragment:m_,lights_lambert_fragment:g_,lights_lambert_pars_fragment:__,lights_pars_begin:v_,lights_toon_fragment:M_,lights_toon_pars_fragment:y_,lights_phong_fragment:S_,lights_phong_pars_fragment:b_,lights_physical_fragment:w_,lights_physical_pars_fragment:E_,lights_fragment_begin:T_,lights_fragment_maps:A_,lights_fragment_end:R_,logdepthbuf_fragment:C_,logdepthbuf_pars_fragment:P_,logdepthbuf_pars_vertex:L_,logdepthbuf_vertex:D_,map_fragment:I_,map_pars_fragment:U_,map_particle_fragment:N_,map_particle_pars_fragment:F_,metalnessmap_fragment:O_,metalnessmap_pars_fragment:B_,morphinstance_vertex:k_,morphcolor_vertex:z_,morphnormal_vertex:G_,morphtarget_pars_vertex:H_,morphtarget_vertex:V_,normal_fragment_begin:W_,normal_fragment_maps:X_,normal_pars_fragment:q_,normal_pars_vertex:$_,normal_vertex:Y_,normalmap_pars_fragment:j_,clearcoat_normal_fragment_begin:K_,clearcoat_normal_fragment_maps:Z_,clearcoat_pars_fragment:J_,iridescence_pars_fragment:Q_,opaque_fragment:ev,packing:tv,premultiplied_alpha_fragment:nv,project_vertex:iv,dithering_fragment:rv,dithering_pars_fragment:sv,roughnessmap_fragment:av,roughnessmap_pars_fragment:ov,shadowmap_pars_fragment:lv,shadowmap_pars_vertex:cv,shadowmap_vertex:uv,shadowmask_pars_fragment:dv,skinbase_vertex:fv,skinning_pars_vertex:hv,skinning_vertex:pv,skinnormal_vertex:mv,specularmap_fragment:gv,specularmap_pars_fragment:_v,tonemapping_fragment:vv,tonemapping_pars_fragment:xv,transmission_fragment:Mv,transmission_pars_fragment:yv,uv_pars_fragment:Sv,uv_pars_vertex:bv,uv_vertex:wv,worldpos_vertex:Ev,background_vert:Tv,background_frag:Av,backgroundCube_vert:Rv,backgroundCube_frag:Cv,cube_vert:Pv,cube_frag:Lv,depth_vert:Dv,depth_frag:Iv,distanceRGBA_vert:Uv,distanceRGBA_frag:Nv,equirect_vert:Fv,equirect_frag:Ov,linedashed_vert:Bv,linedashed_frag:kv,meshbasic_vert:zv,meshbasic_frag:Gv,meshlambert_vert:Hv,meshlambert_frag:Vv,meshmatcap_vert:Wv,meshmatcap_frag:Xv,meshnormal_vert:qv,meshnormal_frag:$v,meshphong_vert:Yv,meshphong_frag:jv,meshphysical_vert:Kv,meshphysical_frag:Zv,meshtoon_vert:Jv,meshtoon_frag:Qv,points_vert:ex,points_frag:tx,shadow_vert:nx,shadow_frag:ix,sprite_vert:rx,sprite_frag:sx},le={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},ui={basic:{uniforms:Sn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Sn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new we(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Sn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Sn([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Sn([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new we(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Sn([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Sn([le.points,le.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Sn([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Sn([le.common,le.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Sn([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Sn([le.sprite,le.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Sn([le.common,le.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Sn([le.lights,le.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};ui.physical={uniforms:Sn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const fo={r:0,b:0,g:0},_r=new vi,ax=new ot;function ox(n,e,t,i,r,s,a){const o=new we(0);let l=s===!0?0:1,c,u,d=null,f=0,h=null;function g(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function v(b){let M=!1;const C=g(b);C===null?p(o,l):C&&C.isColor&&(p(C,1),M=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,M){const C=g(M);C&&(C.isCubeTexture||C.mapping===jo)?(u===void 0&&(u=new Z(new nr(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:Is(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,L,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),_r.copy(M.backgroundRotation),_r.x*=-1,_r.y*=-1,_r.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ax.makeRotationFromEuler(_r)),u.material.toneMapped=dt.getTransfer(C.colorSpace)!==vt,(d!==C||f!==C.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=C,f=C.version,h=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Z(new zs(2,2),new xi({name:"BackgroundMaterial",uniforms:Is(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=dt.getTransfer(C.colorSpace)!==vt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||f!==C.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=C,f=C.version,h=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,M){b.getRGB(fo,Uh(n)),i.buffers.color.setClear(fo.r,fo.g,fo.b,M,a)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,M=1){o.set(b),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:v,addToRenderList:m,dispose:T}}function lx(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(S,I,B,H,X){let Y=!1;const q=d(H,B,I);s!==q&&(s=q,c(s.object)),Y=h(S,H,B,X),Y&&g(S,H,B,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,M(S,I,B,H),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function d(S,I,B){const H=B.wireframe===!0;let X=i[S.id];X===void 0&&(X={},i[S.id]=X);let Y=X[I.id];Y===void 0&&(Y={},X[I.id]=Y);let q=Y[H];return q===void 0&&(q=f(l()),Y[H]=q),q}function f(S){const I=[],B=[],H=[];for(let X=0;X<t;X++)I[X]=0,B[X]=0,H[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:H,object:S,attributes:{},index:null}}function h(S,I,B,H){const X=s.attributes,Y=I.attributes;let q=0;const se=B.getAttributes();for(const V in se)if(se[V].location>=0){const me=X[V];let Le=Y[V];if(Le===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(Le=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(Le=S.instanceColor)),me===void 0||me.attribute!==Le||Le&&me.data!==Le.data)return!0;q++}return s.attributesNum!==q||s.index!==H}function g(S,I,B,H){const X={},Y=I.attributes;let q=0;const se=B.getAttributes();for(const V in se)if(se[V].location>=0){let me=Y[V];me===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(me=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(me=S.instanceColor));const Le={};Le.attribute=me,me&&me.data&&(Le.data=me.data),X[V]=Le,q++}s.attributes=X,s.attributesNum=q,s.index=H}function v(){const S=s.newAttributes;for(let I=0,B=S.length;I<B;I++)S[I]=0}function m(S){p(S,0)}function p(S,I){const B=s.newAttributes,H=s.enabledAttributes,X=s.attributeDivisors;B[S]=1,H[S]===0&&(n.enableVertexAttribArray(S),H[S]=1),X[S]!==I&&(n.vertexAttribDivisor(S,I),X[S]=I)}function T(){const S=s.newAttributes,I=s.enabledAttributes;for(let B=0,H=I.length;B<H;B++)I[B]!==S[B]&&(n.disableVertexAttribArray(B),I[B]=0)}function b(S,I,B,H,X,Y,q){q===!0?n.vertexAttribIPointer(S,I,B,X,Y):n.vertexAttribPointer(S,I,B,H,X,Y)}function M(S,I,B,H){v();const X=H.attributes,Y=B.getAttributes(),q=I.defaultAttributeValues;for(const se in Y){const V=Y[se];if(V.location>=0){let ce=X[se];if(ce===void 0&&(se==="instanceMatrix"&&S.instanceMatrix&&(ce=S.instanceMatrix),se==="instanceColor"&&S.instanceColor&&(ce=S.instanceColor)),ce!==void 0){const me=ce.normalized,Le=ce.itemSize,Qe=e.get(ce);if(Qe===void 0)continue;const bt=Qe.buffer,Rt=Qe.type,ft=Qe.bytesPerElement,j=Rt===n.INT||Rt===n.UNSIGNED_INT||ce.gpuType===uu;if(ce.isInterleavedBufferAttribute){const Q=ce.data,xe=Q.stride,Ge=ce.offset;if(Q.isInstancedInterleavedBuffer){for(let Pe=0;Pe<V.locationSize;Pe++)p(V.location+Pe,Q.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Pe=0;Pe<V.locationSize;Pe++)m(V.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,bt);for(let Pe=0;Pe<V.locationSize;Pe++)b(V.location+Pe,Le/V.locationSize,Rt,me,xe*ft,(Ge+Le/V.locationSize*Pe)*ft,j)}else{if(ce.isInstancedBufferAttribute){for(let Q=0;Q<V.locationSize;Q++)p(V.location+Q,ce.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Q=0;Q<V.locationSize;Q++)m(V.location+Q);n.bindBuffer(n.ARRAY_BUFFER,bt);for(let Q=0;Q<V.locationSize;Q++)b(V.location+Q,Le/V.locationSize,Rt,me,Le*ft,Le/V.locationSize*Q*ft,j)}}else if(q!==void 0){const me=q[se];if(me!==void 0)switch(me.length){case 2:n.vertexAttrib2fv(V.location,me);break;case 3:n.vertexAttrib3fv(V.location,me);break;case 4:n.vertexAttrib4fv(V.location,me);break;default:n.vertexAttrib1fv(V.location,me)}}}}T()}function C(){D();for(const S in i){const I=i[S];for(const B in I){const H=I[B];for(const X in H)u(H[X].object),delete H[X];delete I[B]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const I=i[S.id];for(const B in I){const H=I[B];for(const X in H)u(H[X].object),delete H[X];delete I[B]}delete i[S.id]}function L(S){for(const I in i){const B=i[I];if(B[S.id]===void 0)continue;const H=B[S.id];for(const X in H)u(H[X].object),delete H[X];delete B[S.id]}}function D(){w(),a=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:D,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function cx(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];t.update(h,i,1)}function l(c,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v]*f[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ux(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(L){return!(L!==ri&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const D=L===La&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==_i&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==fi&&!D)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:C,maxSamples:A}}function dx(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Sr,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const T=s?0:i,b=T*4;let M=p.clippingState||null;l.value=M,M=u(g,f,b,h);for(let C=0;C!==b;++C)M[C]=t[C];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=h+v*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,M=h;b!==v;++b,M+=4)a.copy(d[b]).applyMatrix4(T,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function fx(n){let e=new WeakMap;function t(a,o){return o===dc?a.mapping=Ps:o===fc&&(a.mapping=Ls),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===dc||o===fc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new sg(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Ms=4,jd=[.125,.215,.35,.446,.526,.582],Er=20,Gl=new Vh,Kd=new we;let Hl=null,Vl=0,Wl=0,Xl=!1;const br=(1+Math.sqrt(5))/2,gs=1/br,Zd=[new N(-br,gs,0),new N(br,gs,0),new N(-gs,0,br),new N(gs,0,br),new N(0,br,-gs),new N(0,br,gs),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],hx=new N;class Jd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=hx}=s;Hl=this._renderer.getRenderTarget(),Vl=this._renderer.getActiveCubeFace(),Wl=this._renderer.getActiveMipmapLevel(),Xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ef(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hl,Vl,Wl),this._renderer.xr.enabled=Xl,e.scissorTest=!1,ho(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ps||e.mapping===Ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hl=this._renderer.getRenderTarget(),Vl=this._renderer.getActiveCubeFace(),Wl=this._renderer.getActiveMipmapLevel(),Xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:di,minFilter:di,generateMipmaps:!1,type:La,format:ri,colorSpace:Ds,depthBuffer:!1},r=Qd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qd(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=px(s)),this._blurMaterial=mx(s,e,t)}return r}_compileMaterial(e){const t=new Z(this._lodPlanes[0],e);this._renderer.compile(t,Gl)}_sceneToCubeUV(e,t,i,r,s){const l=new Yn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Kd),d.toneMapping=Ji,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const v=new gt({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),m=new Z(new nr,v);let p=!1;const T=e.background;T?T.isColor&&(v.color.copy(T),e.background=null,p=!0):(v.color.copy(Kd),p=!0);for(let b=0;b<6;b++){const M=b%3;M===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[b],s.y,s.z)):M===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[b]));const C=this._cubeSize;ho(r,M*C,b>2?C:0,C,C),d.setRenderTarget(r),p&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=T}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ps||e.mapping===Ls;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=tf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ef());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Z(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ho(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Gl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Zd[(r-s-1)%Zd.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Z(this._lodPlanes[r],c),f=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Er-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):Er;m>Er&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Er}`);const p=[];let T=0;for(let L=0;L<Er;++L){const D=L/v,w=Math.exp(-D*D/2);p.push(w),L===0?T+=w:L<m&&(T+=2*w)}for(let L=0;L<p.length;L++)p[L]=p[L]/T;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-i;const M=this._sizeLods[r],C=3*M*(r>b-Ms?r-b+Ms:0),A=4*(this._cubeSize-M);ho(t,C,A,3*M,2*M),l.setRenderTarget(t),l.render(d,Gl)}}function px(n){const e=[],t=[],i=[];let r=n;const s=n-Ms+1+jd.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Ms?l=jd[a-n+Ms-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,v=3,m=2,p=1,T=new Float32Array(v*g*h),b=new Float32Array(m*g*h),M=new Float32Array(p*g*h);for(let A=0;A<h;A++){const L=A%3*2/3-1,D=A>2?0:-1,w=[L,D,0,L+2/3,D,0,L+2/3,D+1,0,L,D,0,L+2/3,D+1,0,L,D+1,0];T.set(w,v*g*A),b.set(f,m*g*A);const S=[A,A,A,A,A,A];M.set(S,p*g*A)}const C=new Vt;C.setAttribute("position",new Ln(T,v)),C.setAttribute("uv",new Ln(b,m)),C.setAttribute("faceIndex",new Ln(M,p)),e.push(C),r>Ms&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Qd(n,e,t){const i=new zr(n,e,t);return i.texture.mapping=jo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ho(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function mx(n,e,t){const i=new Float32Array(Er),r=new N(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:Er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function ef(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function tf(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Tu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gx(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===dc||l===fc,u=l===Ps||l===Ls;if(c||u){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Jd(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const h=o.image;return c&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new Jd(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function _x(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&xa("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function vx(n,e,t,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];const h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],n.ARRAY_BUFFER)}function c(d){const f=[],h=d.index,g=d.attributes.position;let v=0;if(h!==null){const T=h.array;v=h.version;for(let b=0,M=T.length;b<M;b+=3){const C=T[b+0],A=T[b+1],L=T[b+2];f.push(C,A,A,L,L,C)}}else if(g!==void 0){const T=g.array;v=g.version;for(let b=0,M=T.length/3-1;b<M;b+=3){const C=b+0,A=b+1,L=b+2;f.push(C,A,A,L,L,C)}}else return;const m=new(Ch(f)?Ih:Dh)(f,1);m.version=v;const p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){const f=s.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function xx(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,h){n.drawElements(i,h,s,f*a),t.update(h,i,1)}function c(f,h,g){g!==0&&(n.drawElementsInstanced(i,h,s,f*a,g),t.update(h,i,g))}function u(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,i,1)}function d(f,h,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,h[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,f,0,v,0,g);let p=0;for(let T=0;T<g;T++)p+=h[T]*v[T];t.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Mx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function yx(n,e,t){const i=new WeakMap,r=new Ot;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let w=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();const h=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let b=0;h===!0&&(b=1),g===!0&&(b=2),v===!0&&(b=3);let M=o.attributes.position.count*b,C=1;M>e.maxTextureSize&&(C=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const A=new Float32Array(M*C*4*d),L=new Ph(A,M,C,d);L.type=fi,L.needsUpdate=!0;const D=b*4;for(let S=0;S<d;S++){const I=m[S],B=p[S],H=T[S],X=M*C*4*S;for(let Y=0;Y<I.count;Y++){const q=Y*D;h===!0&&(r.fromBufferAttribute(I,Y),A[X+q+0]=r.x,A[X+q+1]=r.y,A[X+q+2]=r.z,A[X+q+3]=0),g===!0&&(r.fromBufferAttribute(B,Y),A[X+q+4]=r.x,A[X+q+5]=r.y,A[X+q+6]=r.z,A[X+q+7]=0),v===!0&&(r.fromBufferAttribute(H,Y),A[X+q+8]=r.x,A[X+q+9]=r.y,A[X+q+10]=r.z,A[X+q+11]=H.itemSize===4?r.w:1)}}f={count:d,texture:L,size:new Oe(M,C)},i.set(o,f),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let h=0;for(let v=0;v<c.length;v++)h+=c[v];const g=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function Sx(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Xh=new gn,nf=new zh(1,1),qh=new Ph,$h=new H0,Yh=new Fh,rf=[],sf=[],af=new Float32Array(16),of=new Float32Array(9),lf=new Float32Array(4);function Gs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=rf[r];if(s===void 0&&(s=new Float32Array(r),rf[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Qt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function en(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ko(n,e){let t=sf[e];t===void 0&&(t=new Int32Array(e),sf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function bx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function wx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2fv(this.addr,e),en(t,e)}}function Ex(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;n.uniform3fv(this.addr,e),en(t,e)}}function Tx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4fv(this.addr,e),en(t,e)}}function Ax(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;lf.set(i),n.uniformMatrix2fv(this.addr,!1,lf),en(t,i)}}function Rx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;of.set(i),n.uniformMatrix3fv(this.addr,!1,of),en(t,i)}}function Cx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;af.set(i),n.uniformMatrix4fv(this.addr,!1,af),en(t,i)}}function Px(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Lx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2iv(this.addr,e),en(t,e)}}function Dx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;n.uniform3iv(this.addr,e),en(t,e)}}function Ix(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4iv(this.addr,e),en(t,e)}}function Ux(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Nx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2uiv(this.addr,e),en(t,e)}}function Fx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;n.uniform3uiv(this.addr,e),en(t,e)}}function Ox(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4uiv(this.addr,e),en(t,e)}}function Bx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(nf.compareFunction=Rh,s=nf):s=Xh,t.setTexture2D(e||s,r)}function kx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||$h,r)}function zx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Yh,r)}function Gx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||qh,r)}function Hx(n){switch(n){case 5126:return bx;case 35664:return wx;case 35665:return Ex;case 35666:return Tx;case 35674:return Ax;case 35675:return Rx;case 35676:return Cx;case 5124:case 35670:return Px;case 35667:case 35671:return Lx;case 35668:case 35672:return Dx;case 35669:case 35673:return Ix;case 5125:return Ux;case 36294:return Nx;case 36295:return Fx;case 36296:return Ox;case 35678:case 36198:case 36298:case 36306:case 35682:return Bx;case 35679:case 36299:case 36307:return kx;case 35680:case 36300:case 36308:case 36293:return zx;case 36289:case 36303:case 36311:case 36292:return Gx}}function Vx(n,e){n.uniform1fv(this.addr,e)}function Wx(n,e){const t=Gs(e,this.size,2);n.uniform2fv(this.addr,t)}function Xx(n,e){const t=Gs(e,this.size,3);n.uniform3fv(this.addr,t)}function qx(n,e){const t=Gs(e,this.size,4);n.uniform4fv(this.addr,t)}function $x(n,e){const t=Gs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Yx(n,e){const t=Gs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function jx(n,e){const t=Gs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Kx(n,e){n.uniform1iv(this.addr,e)}function Zx(n,e){n.uniform2iv(this.addr,e)}function Jx(n,e){n.uniform3iv(this.addr,e)}function Qx(n,e){n.uniform4iv(this.addr,e)}function eM(n,e){n.uniform1uiv(this.addr,e)}function tM(n,e){n.uniform2uiv(this.addr,e)}function nM(n,e){n.uniform3uiv(this.addr,e)}function iM(n,e){n.uniform4uiv(this.addr,e)}function rM(n,e,t){const i=this.cache,r=e.length,s=Ko(t,r);Qt(i,s)||(n.uniform1iv(this.addr,s),en(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Xh,s[a])}function sM(n,e,t){const i=this.cache,r=e.length,s=Ko(t,r);Qt(i,s)||(n.uniform1iv(this.addr,s),en(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||$h,s[a])}function aM(n,e,t){const i=this.cache,r=e.length,s=Ko(t,r);Qt(i,s)||(n.uniform1iv(this.addr,s),en(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Yh,s[a])}function oM(n,e,t){const i=this.cache,r=e.length,s=Ko(t,r);Qt(i,s)||(n.uniform1iv(this.addr,s),en(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||qh,s[a])}function lM(n){switch(n){case 5126:return Vx;case 35664:return Wx;case 35665:return Xx;case 35666:return qx;case 35674:return $x;case 35675:return Yx;case 35676:return jx;case 5124:case 35670:return Kx;case 35667:case 35671:return Zx;case 35668:case 35672:return Jx;case 35669:case 35673:return Qx;case 5125:return eM;case 36294:return tM;case 36295:return nM;case 36296:return iM;case 35678:case 36198:case 36298:case 36306:case 35682:return rM;case 35679:case 36299:case 36307:return sM;case 35680:case 36300:case 36308:case 36293:return aM;case 36289:case 36303:case 36311:case 36292:return oM}}class cM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Hx(t.type)}}class uM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lM(t.type)}}class dM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const ql=/(\w+)(\])?(\[|\.)?/g;function cf(n,e){n.seq.push(e),n.map[e.id]=e}function fM(n,e,t){const i=n.name,r=i.length;for(ql.lastIndex=0;;){const s=ql.exec(i),a=ql.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){cf(t,c===void 0?new cM(o,n,e):new uM(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new dM(o),cf(t,d)),t=d}}}class Lo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);fM(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function uf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const hM=37297;let pM=0;function mM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const df=new qe;function gM(n){dt._getMatrix(df,dt.workingColorSpace,n);const e=`mat3( ${df.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(n)){case Bo:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ff(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+mM(n.getShaderSource(e),o)}else return s}function _M(n,e){const t=gM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function vM(n,e){let t;switch(e){case t0:t="Linear";break;case n0:t="Reinhard";break;case i0:t="Cineon";break;case r0:t="ACESFilmic";break;case a0:t="AgX";break;case o0:t="Neutral";break;case s0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const po=new N;function xM(){dt.getLuminanceCoefficients(po);const n=po.x.toFixed(4),e=po.y.toFixed(4),t=po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function MM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ta).join(`
`)}function yM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function SM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ta(n){return n!==""}function hf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bM=/^[ \t]*#include +<([\w\d./]+)>/gm;function $c(n){return n.replace(bM,EM)}const wM=new Map;function EM(n,e){let t=Ye[e];if(t===void 0){const i=wM.get(e);if(i!==void 0)t=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return $c(t)}const TM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mf(n){return n.replace(TM,AM)}function AM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function gf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function RM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===cu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Um?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Pi&&(e="SHADOWMAP_TYPE_VSM"),e}function CM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ps:case Ls:e="ENVMAP_TYPE_CUBE";break;case jo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function PM(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Ls&&(e="ENVMAP_MODE_REFRACTION"),e}function LM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case vh:e="ENVMAP_BLENDING_MULTIPLY";break;case Qm:e="ENVMAP_BLENDING_MIX";break;case e0:e="ENVMAP_BLENDING_ADD";break}return e}function DM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function IM(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=RM(t),c=CM(t),u=PM(t),d=LM(t),f=DM(t),h=MM(t),g=yM(s),v=r.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ta).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ta).join(`
`),p.length>0&&(p+=`
`)):(m=[gf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),p=[gf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Ji?vM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,_M("linearToOutputTexel",t.outputColorSpace),xM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ta).join(`
`)),a=$c(a),a=hf(a,t),a=pf(a,t),o=$c(o),o=hf(o,t),o=pf(o,t),a=mf(a),o=mf(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===vd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=T+m+a,M=T+p+o,C=uf(r,r.VERTEX_SHADER,b),A=uf(r,r.FRAGMENT_SHADER,M);r.attachShader(v,C),r.attachShader(v,A),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function L(I){if(n.debug.checkShaderErrors){const B=r.getProgramInfoLog(v)||"",H=r.getShaderInfoLog(C)||"",X=r.getShaderInfoLog(A)||"",Y=B.trim(),q=H.trim(),se=X.trim();let V=!0,ce=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,C,A);else{const me=ff(r,C,"vertex"),Le=ff(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+Y+`
`+me+`
`+Le)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(q===""||se==="")&&(ce=!1);ce&&(I.diagnostics={runnable:V,programLog:Y,vertexShader:{log:q,prefix:m},fragmentShader:{log:se,prefix:p}})}r.deleteShader(C),r.deleteShader(A),D=new Lo(r,v),w=SM(r,v)}let D;this.getUniforms=function(){return D===void 0&&L(this),D};let w;this.getAttributes=function(){return w===void 0&&L(this),w};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(v,hM)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=pM++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=A,this}let UM=0;class NM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new FM(e),t.set(e,i)),i}}class FM{constructor(e){this.id=UM++,this.code=e,this.usedTimes=0}}function OM(n,e,t,i,r,s,a){const o=new Mu,l=new NM,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let h=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,S,I,B,H){const X=B.fog,Y=H.geometry,q=w.isMeshStandardMaterial?B.environment:null,se=(w.isMeshStandardMaterial?t:e).get(w.envMap||q),V=se&&se.mapping===jo?se.image.height:null,ce=g[w.type];w.precision!==null&&(h=r.getMaxPrecision(w.precision),h!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",h,"instead."));const me=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Le=me!==void 0?me.length:0;let Qe=0;Y.morphAttributes.position!==void 0&&(Qe=1),Y.morphAttributes.normal!==void 0&&(Qe=2),Y.morphAttributes.color!==void 0&&(Qe=3);let bt,Rt,ft,j;if(ce){const ht=ui[ce];bt=ht.vertexShader,Rt=ht.fragmentShader}else bt=w.vertexShader,Rt=w.fragmentShader,l.update(w),ft=l.getVertexShaderID(w),j=l.getFragmentShaderID(w);const Q=n.getRenderTarget(),xe=n.state.buffers.depth.getReversed(),Ge=H.isInstancedMesh===!0,Pe=H.isBatchedMesh===!0,st=!!w.map,un=!!w.matcap,P=!!se,Ct=!!w.aoMap,Ve=!!w.lightMap,ke=!!w.bumpMap,Se=!!w.normalMap,Pt=!!w.displacementMap,be=!!w.emissiveMap,$e=!!w.metalnessMap,nn=!!w.roughnessMap,kt=w.anisotropy>0,R=w.clearcoat>0,x=w.dispersion>0,k=w.iridescence>0,$=w.sheen>0,J=w.transmission>0,W=kt&&!!w.anisotropyMap,Ce=R&&!!w.clearcoatMap,ae=R&&!!w.clearcoatNormalMap,Ee=R&&!!w.clearcoatRoughnessMap,Te=k&&!!w.iridescenceMap,ie=k&&!!w.iridescenceThicknessMap,he=$&&!!w.sheenColorMap,Be=$&&!!w.sheenRoughnessMap,Ae=!!w.specularMap,ue=!!w.specularColorMap,Xe=!!w.specularIntensityMap,U=J&&!!w.transmissionMap,re=J&&!!w.thicknessMap,oe=!!w.gradientMap,ve=!!w.alphaMap,te=w.alphaTest>0,K=!!w.alphaHash,ye=!!w.extensions;let He=Ji;w.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(He=n.toneMapping);const wt={shaderID:ce,shaderType:w.type,shaderName:w.name,vertexShader:bt,fragmentShader:Rt,defines:w.defines,customVertexShaderID:ft,customFragmentShaderID:j,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:h,batching:Pe,batchingColor:Pe&&H._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&H.instanceColor!==null,instancingMorph:Ge&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Q===null?n.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Ds,alphaToCoverage:!!w.alphaToCoverage,map:st,matcap:un,envMap:P,envMapMode:P&&se.mapping,envMapCubeUVHeight:V,aoMap:Ct,lightMap:Ve,bumpMap:ke,normalMap:Se,displacementMap:f&&Pt,emissiveMap:be,normalMapObjectSpace:Se&&w.normalMapType===d0,normalMapTangentSpace:Se&&w.normalMapType===Ah,metalnessMap:$e,roughnessMap:nn,anisotropy:kt,anisotropyMap:W,clearcoat:R,clearcoatMap:Ce,clearcoatNormalMap:ae,clearcoatRoughnessMap:Ee,dispersion:x,iridescence:k,iridescenceMap:Te,iridescenceThicknessMap:ie,sheen:$,sheenColorMap:he,sheenRoughnessMap:Be,specularMap:Ae,specularColorMap:ue,specularIntensityMap:Xe,transmission:J,transmissionMap:U,thicknessMap:re,gradientMap:oe,opaque:w.transparent===!1&&w.blending===Ur&&w.alphaToCoverage===!1,alphaMap:ve,alphaTest:te,alphaHash:K,combine:w.combine,mapUv:st&&v(w.map.channel),aoMapUv:Ct&&v(w.aoMap.channel),lightMapUv:Ve&&v(w.lightMap.channel),bumpMapUv:ke&&v(w.bumpMap.channel),normalMapUv:Se&&v(w.normalMap.channel),displacementMapUv:Pt&&v(w.displacementMap.channel),emissiveMapUv:be&&v(w.emissiveMap.channel),metalnessMapUv:$e&&v(w.metalnessMap.channel),roughnessMapUv:nn&&v(w.roughnessMap.channel),anisotropyMapUv:W&&v(w.anisotropyMap.channel),clearcoatMapUv:Ce&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:ae&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:he&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Be&&v(w.sheenRoughnessMap.channel),specularMapUv:Ae&&v(w.specularMap.channel),specularColorMapUv:ue&&v(w.specularColorMap.channel),specularIntensityMapUv:Xe&&v(w.specularIntensityMap.channel),transmissionMapUv:U&&v(w.transmissionMap.channel),thicknessMapUv:re&&v(w.thicknessMap.channel),alphaMapUv:ve&&v(w.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Se||kt),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Y.attributes.uv&&(st||ve),fog:!!X,useFog:w.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xe,skinning:H.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:Qe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:He,decodeVideoTexture:st&&w.map.isVideoTexture===!0&&dt.getTransfer(w.map.colorSpace)===vt,decodeVideoTextureEmissive:be&&w.emissiveMap.isVideoTexture===!0&&dt.getTransfer(w.emissiveMap.colorSpace)===vt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Zt,flipSided:w.side===En,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ye&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&w.extensions.multiDraw===!0||Pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return wt.vertexUv1s=c.has(1),wt.vertexUv2s=c.has(2),wt.vertexUv3s=c.has(3),c.clear(),wt}function p(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const I in w.defines)S.push(I),S.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(T(S,w),b(S,w),S.push(n.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function T(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function b(w,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),w.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),w.push(o.mask)}function M(w){const S=g[w.type];let I;if(S){const B=ui[S];I=tg.clone(B.uniforms)}else I=w.uniforms;return I}function C(w,S){let I;for(let B=0,H=u.length;B<H;B++){const X=u[B];if(X.cacheKey===S){I=X,++I.usedTimes;break}}return I===void 0&&(I=new IM(n,S,w,s),u.push(I)),I}function A(w){if(--w.usedTimes===0){const S=u.indexOf(w);u[S]=u[u.length-1],u.pop(),w.destroy()}}function L(w){l.remove(w)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:C,releaseProgram:A,releaseShaderCache:L,programs:u,dispose:D}}function BM(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function kM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function _f(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function vf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,f,h,g,v,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),e++,p}function o(d,f,h,g,v,m){const p=a(d,f,h,g,v,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):t.push(p)}function l(d,f,h,g,v,m){const p=a(d,f,h,g,v,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function c(d,f){t.length>1&&t.sort(d||kM),i.length>1&&i.sort(f||_f),r.length>1&&r.sort(f||_f)}function u(){for(let d=e,f=n.length;d<f;d++){const h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function zM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new vf,n.set(i,[a])):r>=s.length?(a=new vf,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function GM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new we};break;case"SpotLight":t={position:new N,direction:new N,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function HM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let VM=0;function WM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function XM(n){const e=new GM,t=HM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const r=new N,s=new ot,a=new ot;function o(c){let u=0,d=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let h=0,g=0,v=0,m=0,p=0,T=0,b=0,M=0,C=0,A=0,L=0;c.sort(WM);for(let w=0,S=c.length;w<S;w++){const I=c[w],B=I.color,H=I.intensity,X=I.distance,Y=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=B.r*H,d+=B.g*H,f+=B.b*H;else if(I.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(I.sh.coefficients[q],H);L++}else if(I.isDirectionalLight){const q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const se=I.shadow,V=t.get(I);V.shadowIntensity=se.intensity,V.shadowBias=se.bias,V.shadowNormalBias=se.normalBias,V.shadowRadius=se.radius,V.shadowMapSize=se.mapSize,i.directionalShadow[h]=V,i.directionalShadowMap[h]=Y,i.directionalShadowMatrix[h]=I.shadow.matrix,T++}i.directional[h]=q,h++}else if(I.isSpotLight){const q=e.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(B).multiplyScalar(H),q.distance=X,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,i.spot[v]=q;const se=I.shadow;if(I.map&&(i.spotLightMap[C]=I.map,C++,se.updateMatrices(I),I.castShadow&&A++),i.spotLightMatrix[v]=se.matrix,I.castShadow){const V=t.get(I);V.shadowIntensity=se.intensity,V.shadowBias=se.bias,V.shadowNormalBias=se.normalBias,V.shadowRadius=se.radius,V.shadowMapSize=se.mapSize,i.spotShadow[v]=V,i.spotShadowMap[v]=Y,M++}v++}else if(I.isRectAreaLight){const q=e.get(I);q.color.copy(B).multiplyScalar(H),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=q,m++}else if(I.isPointLight){const q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){const se=I.shadow,V=t.get(I);V.shadowIntensity=se.intensity,V.shadowBias=se.bias,V.shadowNormalBias=se.normalBias,V.shadowRadius=se.radius,V.shadowMapSize=se.mapSize,V.shadowCameraNear=se.camera.near,V.shadowCameraFar=se.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=I.shadow.matrix,b++}i.point[g]=q,g++}else if(I.isHemisphereLight){const q=e.get(I);q.skyColor.copy(I.color).multiplyScalar(H),q.groundColor.copy(I.groundColor).multiplyScalar(H),i.hemi[p]=q,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const D=i.hash;(D.directionalLength!==h||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==T||D.numPointShadows!==b||D.numSpotShadows!==M||D.numSpotMaps!==C||D.numLightProbes!==L)&&(i.directional.length=h,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=M+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=L,D.directionalLength=h,D.pointLength=g,D.spotLength=v,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=T,D.numPointShadows=b,D.numSpotShadows=M,D.numSpotMaps=C,D.numLightProbes=L,i.version=VM++)}function l(c,u){let d=0,f=0,h=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const b=c[p];if(b.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(b.isSpotLight){const M=i.spot[h];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),h++}else if(b.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(b.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function xf(n){const e=new XM(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function qM(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new xf(n),e.set(r,[o])):s>=a.length?(o=new xf(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const $M=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jM(n,e,t){let i=new Su;const r=new Oe,s=new Oe,a=new Ot,o=new _g({depthPacking:u0}),l=new vg,c={},u=t.maxTextureSize,d={[tr]:En,[En]:tr,[Zt]:Zt},f=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:$M,fragmentShader:YM}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new Vt;g.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Z(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cu;let p=this.type;this.render=function(A,L,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const w=n.getRenderTarget(),S=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Zi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const H=p!==Pi&&this.type===Pi,X=p===Pi&&this.type!==Pi;for(let Y=0,q=A.length;Y<q;Y++){const se=A[Y],V=se.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const ce=V.getFrameExtents();if(r.multiply(ce),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ce.x),r.x=s.x*ce.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ce.y),r.y=s.y*ce.y,V.mapSize.y=s.y)),V.map===null||H===!0||X===!0){const Le=this.type!==Pi?{minFilter:zn,magFilter:zn}:{};V.map!==null&&V.map.dispose(),V.map=new zr(r.x,r.y,Le),V.map.texture.name=se.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const me=V.getViewportCount();for(let Le=0;Le<me;Le++){const Qe=V.getViewport(Le);a.set(s.x*Qe.x,s.y*Qe.y,s.x*Qe.z,s.y*Qe.w),B.viewport(a),V.updateMatrices(se,Le),i=V.getFrustum(),M(L,D,V.camera,se,this.type)}V.isPointLightShadow!==!0&&this.type===Pi&&T(V,D),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,S,I)};function T(A,L){const D=e.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new zr(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(L,null,D,f,v,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(L,null,D,h,v,null)}function b(A,L,D,w){let S=null;const I=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)S=I;else if(S=D.isPointLight===!0?l:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const B=S.uuid,H=L.uuid;let X=c[B];X===void 0&&(X={},c[B]=X);let Y=X[H];Y===void 0&&(Y=S.clone(),X[H]=Y,L.addEventListener("dispose",C)),S=Y}if(S.visible=L.visible,S.wireframe=L.wireframe,w===Pi?S.side=L.shadowSide!==null?L.shadowSide:L.side:S.side=L.shadowSide!==null?L.shadowSide:d[L.side],S.alphaMap=L.alphaMap,S.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,S.map=L.map,S.clipShadows=L.clipShadows,S.clippingPlanes=L.clippingPlanes,S.clipIntersection=L.clipIntersection,S.displacementMap=L.displacementMap,S.displacementScale=L.displacementScale,S.displacementBias=L.displacementBias,S.wireframeLinewidth=L.wireframeLinewidth,S.linewidth=L.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=n.properties.get(S);B.light=D}return S}function M(A,L,D,w,S){if(A.visible===!1)return;if(A.layers.test(L.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Pi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const H=e.update(A),X=A.material;if(Array.isArray(X)){const Y=H.groups;for(let q=0,se=Y.length;q<se;q++){const V=Y[q],ce=X[V.materialIndex];if(ce&&ce.visible){const me=b(A,ce,w,S);A.onBeforeShadow(n,A,L,D,H,me,V),n.renderBufferDirect(D,null,H,me,A,V),A.onAfterShadow(n,A,L,D,H,me,V)}}}else if(X.visible){const Y=b(A,X,w,S);A.onBeforeShadow(n,A,L,D,H,Y,null),n.renderBufferDirect(D,null,H,Y,A,null),A.onAfterShadow(n,A,L,D,H,Y,null)}}const B=A.children;for(let H=0,X=B.length;H<X;H++)M(B[H],L,D,w,S)}function C(A){A.target.removeEventListener("dispose",C);for(const D in c){const w=c[D],S=A.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}const KM={[rc]:sc,[ac]:cc,[oc]:uc,[Cs]:lc,[sc]:rc,[cc]:ac,[uc]:oc,[lc]:Cs};function ZM(n,e){function t(){let U=!1;const re=new Ot;let oe=null;const ve=new Ot(0,0,0,0);return{setMask:function(te){oe!==te&&!U&&(n.colorMask(te,te,te,te),oe=te)},setLocked:function(te){U=te},setClear:function(te,K,ye,He,wt){wt===!0&&(te*=He,K*=He,ye*=He),re.set(te,K,ye,He),ve.equals(re)===!1&&(n.clearColor(te,K,ye,He),ve.copy(re))},reset:function(){U=!1,oe=null,ve.set(-1,0,0,0)}}}function i(){let U=!1,re=!1,oe=null,ve=null,te=null;return{setReversed:function(K){if(re!==K){const ye=e.get("EXT_clip_control");K?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),re=K;const He=te;te=null,this.setClear(He)}},getReversed:function(){return re},setTest:function(K){K?Q(n.DEPTH_TEST):xe(n.DEPTH_TEST)},setMask:function(K){oe!==K&&!U&&(n.depthMask(K),oe=K)},setFunc:function(K){if(re&&(K=KM[K]),ve!==K){switch(K){case rc:n.depthFunc(n.NEVER);break;case sc:n.depthFunc(n.ALWAYS);break;case ac:n.depthFunc(n.LESS);break;case Cs:n.depthFunc(n.LEQUAL);break;case oc:n.depthFunc(n.EQUAL);break;case lc:n.depthFunc(n.GEQUAL);break;case cc:n.depthFunc(n.GREATER);break;case uc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ve=K}},setLocked:function(K){U=K},setClear:function(K){te!==K&&(re&&(K=1-K),n.clearDepth(K),te=K)},reset:function(){U=!1,oe=null,ve=null,te=null,re=!1}}}function r(){let U=!1,re=null,oe=null,ve=null,te=null,K=null,ye=null,He=null,wt=null;return{setTest:function(ht){U||(ht?Q(n.STENCIL_TEST):xe(n.STENCIL_TEST))},setMask:function(ht){re!==ht&&!U&&(n.stencilMask(ht),re=ht)},setFunc:function(ht,bi,li){(oe!==ht||ve!==bi||te!==li)&&(n.stencilFunc(ht,bi,li),oe=ht,ve=bi,te=li)},setOp:function(ht,bi,li){(K!==ht||ye!==bi||He!==li)&&(n.stencilOp(ht,bi,li),K=ht,ye=bi,He=li)},setLocked:function(ht){U=ht},setClear:function(ht){wt!==ht&&(n.clearStencil(ht),wt=ht)},reset:function(){U=!1,re=null,oe=null,ve=null,te=null,K=null,ye=null,He=null,wt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,h=[],g=null,v=!1,m=null,p=null,T=null,b=null,M=null,C=null,A=null,L=new we(0,0,0),D=0,w=!1,S=null,I=null,B=null,H=null,X=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,se=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(V)[1]),q=se>=1):V.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),q=se>=2);let ce=null,me={};const Le=n.getParameter(n.SCISSOR_BOX),Qe=n.getParameter(n.VIEWPORT),bt=new Ot().fromArray(Le),Rt=new Ot().fromArray(Qe);function ft(U,re,oe,ve){const te=new Uint8Array(4),K=n.createTexture();n.bindTexture(U,K),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ye=0;ye<oe;ye++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(re,0,n.RGBA,1,1,ve,0,n.RGBA,n.UNSIGNED_BYTE,te):n.texImage2D(re+ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,te);return K}const j={};j[n.TEXTURE_2D]=ft(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=ft(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=ft(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=ft(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(n.DEPTH_TEST),a.setFunc(Cs),ke(!1),Se(pd),Q(n.CULL_FACE),Ct(Zi);function Q(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function xe(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function Ge(U,re){return d[U]!==re?(n.bindFramebuffer(U,re),d[U]=re,U===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=re),U===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=re),!0):!1}function Pe(U,re){let oe=h,ve=!1;if(U){oe=f.get(re),oe===void 0&&(oe=[],f.set(re,oe));const te=U.textures;if(oe.length!==te.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let K=0,ye=te.length;K<ye;K++)oe[K]=n.COLOR_ATTACHMENT0+K;oe.length=te.length,ve=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,ve=!0);ve&&n.drawBuffers(oe)}function st(U){return g!==U?(n.useProgram(U),g=U,!0):!1}const un={[wr]:n.FUNC_ADD,[Fm]:n.FUNC_SUBTRACT,[Om]:n.FUNC_REVERSE_SUBTRACT};un[Bm]=n.MIN,un[km]=n.MAX;const P={[zm]:n.ZERO,[Gm]:n.ONE,[Hm]:n.SRC_COLOR,[nc]:n.SRC_ALPHA,[Ym]:n.SRC_ALPHA_SATURATE,[qm]:n.DST_COLOR,[Wm]:n.DST_ALPHA,[Vm]:n.ONE_MINUS_SRC_COLOR,[ic]:n.ONE_MINUS_SRC_ALPHA,[$m]:n.ONE_MINUS_DST_COLOR,[Xm]:n.ONE_MINUS_DST_ALPHA,[jm]:n.CONSTANT_COLOR,[Km]:n.ONE_MINUS_CONSTANT_COLOR,[Zm]:n.CONSTANT_ALPHA,[Jm]:n.ONE_MINUS_CONSTANT_ALPHA};function Ct(U,re,oe,ve,te,K,ye,He,wt,ht){if(U===Zi){v===!0&&(xe(n.BLEND),v=!1);return}if(v===!1&&(Q(n.BLEND),v=!0),U!==Nm){if(U!==m||ht!==w){if((p!==wr||M!==wr)&&(n.blendEquation(n.FUNC_ADD),p=wr,M=wr),ht)switch(U){case Ur:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Br:n.blendFunc(n.ONE,n.ONE);break;case md:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gd:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ur:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Br:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case md:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gd:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}T=null,b=null,C=null,A=null,L.set(0,0,0),D=0,m=U,w=ht}return}te=te||re,K=K||oe,ye=ye||ve,(re!==p||te!==M)&&(n.blendEquationSeparate(un[re],un[te]),p=re,M=te),(oe!==T||ve!==b||K!==C||ye!==A)&&(n.blendFuncSeparate(P[oe],P[ve],P[K],P[ye]),T=oe,b=ve,C=K,A=ye),(He.equals(L)===!1||wt!==D)&&(n.blendColor(He.r,He.g,He.b,wt),L.copy(He),D=wt),m=U,w=!1}function Ve(U,re){U.side===Zt?xe(n.CULL_FACE):Q(n.CULL_FACE);let oe=U.side===En;re&&(oe=!oe),ke(oe),U.blending===Ur&&U.transparent===!1?Ct(Zi):Ct(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const ve=U.stencilWrite;o.setTest(ve),ve&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),be(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Q(n.SAMPLE_ALPHA_TO_COVERAGE):xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function ke(U){S!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),S=U)}function Se(U){U!==Dm?(Q(n.CULL_FACE),U!==I&&(U===pd?n.cullFace(n.BACK):U===Im?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xe(n.CULL_FACE),I=U}function Pt(U){U!==B&&(q&&n.lineWidth(U),B=U)}function be(U,re,oe){U?(Q(n.POLYGON_OFFSET_FILL),(H!==re||X!==oe)&&(n.polygonOffset(re,oe),H=re,X=oe)):xe(n.POLYGON_OFFSET_FILL)}function $e(U){U?Q(n.SCISSOR_TEST):xe(n.SCISSOR_TEST)}function nn(U){U===void 0&&(U=n.TEXTURE0+Y-1),ce!==U&&(n.activeTexture(U),ce=U)}function kt(U,re,oe){oe===void 0&&(ce===null?oe=n.TEXTURE0+Y-1:oe=ce);let ve=me[oe];ve===void 0&&(ve={type:void 0,texture:void 0},me[oe]=ve),(ve.type!==U||ve.texture!==re)&&(ce!==oe&&(n.activeTexture(oe),ce=oe),n.bindTexture(U,re||j[U]),ve.type=U,ve.texture=re)}function R(){const U=me[ce];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function k(){try{n.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{n.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{n.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{n.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{n.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{n.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{n.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{n.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(U){bt.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),bt.copy(U))}function Be(U){Rt.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Rt.copy(U))}function Ae(U,re){let oe=c.get(re);oe===void 0&&(oe=new WeakMap,c.set(re,oe));let ve=oe.get(U);ve===void 0&&(ve=n.getUniformBlockIndex(re,U.name),oe.set(U,ve))}function ue(U,re){const ve=c.get(re).get(U);l.get(re)!==ve&&(n.uniformBlockBinding(re,ve,U.__bindingPointIndex),l.set(re,ve))}function Xe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ce=null,me={},d={},f=new WeakMap,h=[],g=null,v=!1,m=null,p=null,T=null,b=null,M=null,C=null,A=null,L=new we(0,0,0),D=0,w=!1,S=null,I=null,B=null,H=null,X=null,bt.set(0,0,n.canvas.width,n.canvas.height),Rt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Q,disable:xe,bindFramebuffer:Ge,drawBuffers:Pe,useProgram:st,setBlending:Ct,setMaterial:Ve,setFlipSided:ke,setCullFace:Se,setLineWidth:Pt,setPolygonOffset:be,setScissorTest:$e,activeTexture:nn,bindTexture:kt,unbindTexture:R,compressedTexImage2D:x,compressedTexImage3D:k,texImage2D:Te,texImage3D:ie,updateUBOMapping:Ae,uniformBlockBinding:ue,texStorage2D:ae,texStorage3D:Ee,texSubImage2D:$,texSubImage3D:J,compressedTexSubImage2D:W,compressedTexSubImage3D:Ce,scissor:he,viewport:Be,reset:Xe}}function JM(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Oe,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,x){return h?new OffscreenCanvas(R,x):zo("canvas")}function v(R,x,k){let $=1;const J=kt(R);if((J.width>k||J.height>k)&&($=k/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const W=Math.floor($*J.width),Ce=Math.floor($*J.height);d===void 0&&(d=g(W,Ce));const ae=x?g(W,Ce):d;return ae.width=W,ae.height=Ce,ae.getContext("2d").drawImage(R,0,0,W,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+W+"x"+Ce+")."),ae}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){n.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(R,x,k,$,J=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let W=x;if(x===n.RED&&(k===n.FLOAT&&(W=n.R32F),k===n.HALF_FLOAT&&(W=n.R16F),k===n.UNSIGNED_BYTE&&(W=n.R8)),x===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(W=n.R8UI),k===n.UNSIGNED_SHORT&&(W=n.R16UI),k===n.UNSIGNED_INT&&(W=n.R32UI),k===n.BYTE&&(W=n.R8I),k===n.SHORT&&(W=n.R16I),k===n.INT&&(W=n.R32I)),x===n.RG&&(k===n.FLOAT&&(W=n.RG32F),k===n.HALF_FLOAT&&(W=n.RG16F),k===n.UNSIGNED_BYTE&&(W=n.RG8)),x===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(W=n.RG8UI),k===n.UNSIGNED_SHORT&&(W=n.RG16UI),k===n.UNSIGNED_INT&&(W=n.RG32UI),k===n.BYTE&&(W=n.RG8I),k===n.SHORT&&(W=n.RG16I),k===n.INT&&(W=n.RG32I)),x===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(W=n.RGB8UI),k===n.UNSIGNED_SHORT&&(W=n.RGB16UI),k===n.UNSIGNED_INT&&(W=n.RGB32UI),k===n.BYTE&&(W=n.RGB8I),k===n.SHORT&&(W=n.RGB16I),k===n.INT&&(W=n.RGB32I)),x===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),k===n.UNSIGNED_INT&&(W=n.RGBA32UI),k===n.BYTE&&(W=n.RGBA8I),k===n.SHORT&&(W=n.RGBA16I),k===n.INT&&(W=n.RGBA32I)),x===n.RGB&&(k===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(W=n.R11F_G11F_B10F)),x===n.RGBA){const Ce=J?Bo:dt.getTransfer($);k===n.FLOAT&&(W=n.RGBA32F),k===n.HALF_FLOAT&&(W=n.RGBA16F),k===n.UNSIGNED_BYTE&&(W=Ce===vt?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function M(R,x){let k;return R?x===null||x===kr||x===ma?k=n.DEPTH24_STENCIL8:x===fi?k=n.DEPTH32F_STENCIL8:x===pa&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===kr||x===ma?k=n.DEPTH_COMPONENT24:x===fi?k=n.DEPTH_COMPONENT32F:x===pa&&(k=n.DEPTH_COMPONENT16),k}function C(R,x){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==zn&&R.minFilter!==di?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function A(R){const x=R.target;x.removeEventListener("dispose",A),D(x),x.isVideoTexture&&u.delete(x)}function L(R){const x=R.target;x.removeEventListener("dispose",L),S(x)}function D(R){const x=i.get(R);if(x.__webglInit===void 0)return;const k=R.source,$=f.get(k);if($){const J=$[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&w(R),Object.keys($).length===0&&f.delete(k)}i.remove(R)}function w(R){const x=i.get(R);n.deleteTexture(x.__webglTexture);const k=R.source,$=f.get(k);delete $[x.__cacheKey],a.memory.textures--}function S(R){const x=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let J=0;J<x.__webglFramebuffer[$].length;J++)n.deleteFramebuffer(x.__webglFramebuffer[$][J]);else n.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)n.deleteFramebuffer(x.__webglFramebuffer[$]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const k=R.textures;for(let $=0,J=k.length;$<J;$++){const W=i.get(k[$]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),a.memory.textures--),i.remove(k[$])}i.remove(R)}let I=0;function B(){I=0}function H(){const R=I;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),I+=1,R}function X(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function Y(R,x){const k=i.get(R);if(R.isVideoTexture&&$e(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){const $=R.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(k,R,x);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+x)}function q(R,x){const k=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){j(k,R,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+x)}function se(R,x){const k=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){j(k,R,x);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+x)}function V(R,x){const k=i.get(R);if(R.version>0&&k.__version!==R.version){Q(k,R,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+x)}const ce={[hc]:n.REPEAT,[Pr]:n.CLAMP_TO_EDGE,[pc]:n.MIRRORED_REPEAT},me={[zn]:n.NEAREST,[l0]:n.NEAREST_MIPMAP_NEAREST,[Ga]:n.NEAREST_MIPMAP_LINEAR,[di]:n.LINEAR,[gl]:n.LINEAR_MIPMAP_NEAREST,[Lr]:n.LINEAR_MIPMAP_LINEAR},Le={[f0]:n.NEVER,[v0]:n.ALWAYS,[h0]:n.LESS,[Rh]:n.LEQUAL,[p0]:n.EQUAL,[_0]:n.GEQUAL,[m0]:n.GREATER,[g0]:n.NOTEQUAL};function Qe(R,x){if(x.type===fi&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===di||x.magFilter===gl||x.magFilter===Ga||x.magFilter===Lr||x.minFilter===di||x.minFilter===gl||x.minFilter===Ga||x.minFilter===Lr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,ce[x.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,ce[x.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,ce[x.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,me[x.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,me[x.minFilter]),x.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Le[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===zn||x.minFilter!==Ga&&x.minFilter!==Lr||x.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function bt(R,x){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",A));const $=x.source;let J=f.get($);J===void 0&&(J={},f.set($,J));const W=X(x);if(W!==R.__cacheKey){J[W]===void 0&&(J[W]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),J[W].usedTimes++;const Ce=J[R.__cacheKey];Ce!==void 0&&(J[R.__cacheKey].usedTimes--,Ce.usedTimes===0&&w(x)),R.__cacheKey=W,R.__webglTexture=J[W].texture}return k}function Rt(R,x,k){return Math.floor(Math.floor(R/k)/x)}function ft(R,x,k,$){const W=R.updateRanges;if(W.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,k,$,x.data);else{W.sort((ie,he)=>ie.start-he.start);let Ce=0;for(let ie=1;ie<W.length;ie++){const he=W[Ce],Be=W[ie],Ae=he.start+he.count,ue=Rt(Be.start,x.width,4),Xe=Rt(he.start,x.width,4);Be.start<=Ae+1&&ue===Xe&&Rt(Be.start+Be.count-1,x.width,4)===ue?he.count=Math.max(he.count,Be.start+Be.count-he.start):(++Ce,W[Ce]=Be)}W.length=Ce+1;const ae=n.getParameter(n.UNPACK_ROW_LENGTH),Ee=n.getParameter(n.UNPACK_SKIP_PIXELS),Te=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let ie=0,he=W.length;ie<he;ie++){const Be=W[ie],Ae=Math.floor(Be.start/4),ue=Math.ceil(Be.count/4),Xe=Ae%x.width,U=Math.floor(Ae/x.width),re=ue,oe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Xe),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,Xe,U,re,oe,k,$,x.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ae),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ee),n.pixelStorei(n.UNPACK_SKIP_ROWS,Te)}}function j(R,x,k){let $=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=n.TEXTURE_3D);const J=bt(R,x),W=x.source;t.bindTexture($,R.__webglTexture,n.TEXTURE0+k);const Ce=i.get(W);if(W.version!==Ce.__version||J===!0){t.activeTexture(n.TEXTURE0+k);const ae=dt.getPrimaries(dt.workingColorSpace),Ee=x.colorSpace===$i?null:dt.getPrimaries(x.colorSpace),Te=x.colorSpace===$i||ae===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let ie=v(x.image,!1,r.maxTextureSize);ie=nn(x,ie);const he=s.convert(x.format,x.colorSpace),Be=s.convert(x.type);let Ae=b(x.internalFormat,he,Be,x.colorSpace,x.isVideoTexture);Qe($,x);let ue;const Xe=x.mipmaps,U=x.isVideoTexture!==!0,re=Ce.__version===void 0||J===!0,oe=W.dataReady,ve=C(x,ie);if(x.isDepthTexture)Ae=M(x.format===_a,x.type),re&&(U?t.texStorage2D(n.TEXTURE_2D,1,Ae,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,Ae,ie.width,ie.height,0,he,Be,null));else if(x.isDataTexture)if(Xe.length>0){U&&re&&t.texStorage2D(n.TEXTURE_2D,ve,Ae,Xe[0].width,Xe[0].height);for(let te=0,K=Xe.length;te<K;te++)ue=Xe[te],U?oe&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,ue.width,ue.height,he,Be,ue.data):t.texImage2D(n.TEXTURE_2D,te,Ae,ue.width,ue.height,0,he,Be,ue.data);x.generateMipmaps=!1}else U?(re&&t.texStorage2D(n.TEXTURE_2D,ve,Ae,ie.width,ie.height),oe&&ft(x,ie,he,Be)):t.texImage2D(n.TEXTURE_2D,0,Ae,ie.width,ie.height,0,he,Be,ie.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){U&&re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,Ae,Xe[0].width,Xe[0].height,ie.depth);for(let te=0,K=Xe.length;te<K;te++)if(ue=Xe[te],x.format!==ri)if(he!==null)if(U){if(oe)if(x.layerUpdates.size>0){const ye=Yd(ue.width,ue.height,x.format,x.type);for(const He of x.layerUpdates){const wt=ue.data.subarray(He*ye/ue.data.BYTES_PER_ELEMENT,(He+1)*ye/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,He,ue.width,ue.height,1,he,wt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,ie.depth,he,ue.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,Ae,ue.width,ue.height,ie.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?oe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,ie.depth,he,Be,ue.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,Ae,ue.width,ue.height,ie.depth,0,he,Be,ue.data)}else{U&&re&&t.texStorage2D(n.TEXTURE_2D,ve,Ae,Xe[0].width,Xe[0].height);for(let te=0,K=Xe.length;te<K;te++)ue=Xe[te],x.format!==ri?he!==null?U?oe&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,ue.width,ue.height,he,ue.data):t.compressedTexImage2D(n.TEXTURE_2D,te,Ae,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?oe&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,ue.width,ue.height,he,Be,ue.data):t.texImage2D(n.TEXTURE_2D,te,Ae,ue.width,ue.height,0,he,Be,ue.data)}else if(x.isDataArrayTexture)if(U){if(re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,Ae,ie.width,ie.height,ie.depth),oe)if(x.layerUpdates.size>0){const te=Yd(ie.width,ie.height,x.format,x.type);for(const K of x.layerUpdates){const ye=ie.data.subarray(K*te/ie.data.BYTES_PER_ELEMENT,(K+1)*te/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,ie.width,ie.height,1,he,Be,ye)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,he,Be,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,ie.width,ie.height,ie.depth,0,he,Be,ie.data);else if(x.isData3DTexture)U?(re&&t.texStorage3D(n.TEXTURE_3D,ve,Ae,ie.width,ie.height,ie.depth),oe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,he,Be,ie.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,ie.width,ie.height,ie.depth,0,he,Be,ie.data);else if(x.isFramebufferTexture){if(re)if(U)t.texStorage2D(n.TEXTURE_2D,ve,Ae,ie.width,ie.height);else{let te=ie.width,K=ie.height;for(let ye=0;ye<ve;ye++)t.texImage2D(n.TEXTURE_2D,ye,Ae,te,K,0,he,Be,null),te>>=1,K>>=1}}else if(Xe.length>0){if(U&&re){const te=kt(Xe[0]);t.texStorage2D(n.TEXTURE_2D,ve,Ae,te.width,te.height)}for(let te=0,K=Xe.length;te<K;te++)ue=Xe[te],U?oe&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,he,Be,ue):t.texImage2D(n.TEXTURE_2D,te,Ae,he,Be,ue);x.generateMipmaps=!1}else if(U){if(re){const te=kt(ie);t.texStorage2D(n.TEXTURE_2D,ve,Ae,te.width,te.height)}oe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he,Be,ie)}else t.texImage2D(n.TEXTURE_2D,0,Ae,he,Be,ie);m(x)&&p($),Ce.__version=W.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Q(R,x,k){if(x.image.length!==6)return;const $=bt(R,x),J=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+k);const W=i.get(J);if(J.version!==W.__version||$===!0){t.activeTexture(n.TEXTURE0+k);const Ce=dt.getPrimaries(dt.workingColorSpace),ae=x.colorSpace===$i?null:dt.getPrimaries(x.colorSpace),Ee=x.colorSpace===$i||Ce===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Te=x.isCompressedTexture||x.image[0].isCompressedTexture,ie=x.image[0]&&x.image[0].isDataTexture,he=[];for(let K=0;K<6;K++)!Te&&!ie?he[K]=v(x.image[K],!0,r.maxCubemapSize):he[K]=ie?x.image[K].image:x.image[K],he[K]=nn(x,he[K]);const Be=he[0],Ae=s.convert(x.format,x.colorSpace),ue=s.convert(x.type),Xe=b(x.internalFormat,Ae,ue,x.colorSpace),U=x.isVideoTexture!==!0,re=W.__version===void 0||$===!0,oe=J.dataReady;let ve=C(x,Be);Qe(n.TEXTURE_CUBE_MAP,x);let te;if(Te){U&&re&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,Xe,Be.width,Be.height);for(let K=0;K<6;K++){te=he[K].mipmaps;for(let ye=0;ye<te.length;ye++){const He=te[ye];x.format!==ri?Ae!==null?U?oe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye,0,0,He.width,He.height,Ae,He.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye,Xe,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye,0,0,He.width,He.height,Ae,ue,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye,Xe,He.width,He.height,0,Ae,ue,He.data)}}}else{if(te=x.mipmaps,U&&re){te.length>0&&ve++;const K=kt(he[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,Xe,K.width,K.height)}for(let K=0;K<6;K++)if(ie){U?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,he[K].width,he[K].height,Ae,ue,he[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Xe,he[K].width,he[K].height,0,Ae,ue,he[K].data);for(let ye=0;ye<te.length;ye++){const wt=te[ye].image[K].image;U?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye+1,0,0,wt.width,wt.height,Ae,ue,wt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye+1,Xe,wt.width,wt.height,0,Ae,ue,wt.data)}}else{U?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ae,ue,he[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Xe,Ae,ue,he[K]);for(let ye=0;ye<te.length;ye++){const He=te[ye];U?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye+1,0,0,Ae,ue,He.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye+1,Xe,Ae,ue,He.image[K])}}}m(x)&&p(n.TEXTURE_CUBE_MAP),W.__version=J.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function xe(R,x,k,$,J,W){const Ce=s.convert(k.format,k.colorSpace),ae=s.convert(k.type),Ee=b(k.internalFormat,Ce,ae,k.colorSpace),Te=i.get(x),ie=i.get(k);if(ie.__renderTarget=x,!Te.__hasExternalTextures){const he=Math.max(1,x.width>>W),Be=Math.max(1,x.height>>W);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,W,Ee,he,Be,x.depth,0,Ce,ae,null):t.texImage2D(J,W,Ee,he,Be,0,Ce,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),be(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,J,ie.__webglTexture,0,Pt(x)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,J,ie.__webglTexture,W),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ge(R,x,k){if(n.bindRenderbuffer(n.RENDERBUFFER,R),x.depthBuffer){const $=x.depthTexture,J=$&&$.isDepthTexture?$.type:null,W=M(x.stencilBuffer,J),Ce=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=Pt(x);be(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,W,x.width,x.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,W,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,W,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,R)}else{const $=x.textures;for(let J=0;J<$.length;J++){const W=$[J],Ce=s.convert(W.format,W.colorSpace),ae=s.convert(W.type),Ee=b(W.internalFormat,Ce,ae,W.colorSpace),Te=Pt(x);k&&be(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,Ee,x.width,x.height):be(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te,Ee,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pe(R,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(x.depthTexture);$.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y(x.depthTexture,0);const J=$.__webglTexture,W=Pt(x);if(x.depthTexture.format===ga)be(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(x.depthTexture.format===_a)be(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function st(R){const x=i.get(R),k=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){const $=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),$){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=$}if(R.depthTexture&&!x.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const $=R.texture.mipmaps;$&&$.length>0?Pe(x.__webglFramebuffer[0],R):Pe(x.__webglFramebuffer,R)}else if(k){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]===void 0)x.__webglDepthbuffer[$]=n.createRenderbuffer(),Ge(x.__webglDepthbuffer[$],R,!1);else{const J=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,W)}}else{const $=R.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Ge(x.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,W)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function un(R,x,k){const $=i.get(R);x!==void 0&&xe($.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&st(R)}function P(R){const x=R.texture,k=i.get(R),$=i.get(x);R.addEventListener("dispose",L);const J=R.textures,W=R.isWebGLCubeRenderTarget===!0,Ce=J.length>1;if(Ce||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=x.version,a.memory.textures++),W){k.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[ae]=[];for(let Ee=0;Ee<x.mipmaps.length;Ee++)k.__webglFramebuffer[ae][Ee]=n.createFramebuffer()}else k.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let ae=0;ae<x.mipmaps.length;ae++)k.__webglFramebuffer[ae]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let ae=0,Ee=J.length;ae<Ee;ae++){const Te=i.get(J[ae]);Te.__webglTexture===void 0&&(Te.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&be(R)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ae=0;ae<J.length;ae++){const Ee=J[ae];k.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[ae]);const Te=s.convert(Ee.format,Ee.colorSpace),ie=s.convert(Ee.type),he=b(Ee.internalFormat,Te,ie,Ee.colorSpace,R.isXRRenderTarget===!0),Be=Pt(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,he,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,k.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),Ge(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),Qe(n.TEXTURE_CUBE_MAP,x);for(let ae=0;ae<6;ae++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ee=0;Ee<x.mipmaps.length;Ee++)xe(k.__webglFramebuffer[ae][Ee],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee);else xe(k.__webglFramebuffer[ae],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(x)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let ae=0,Ee=J.length;ae<Ee;ae++){const Te=J[ae],ie=i.get(Te);let he=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(he=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,ie.__webglTexture),Qe(he,Te),xe(k.__webglFramebuffer,R,Te,n.COLOR_ATTACHMENT0+ae,he,0),m(Te)&&p(he)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,$.__webglTexture),Qe(ae,x),x.mipmaps&&x.mipmaps.length>0)for(let Ee=0;Ee<x.mipmaps.length;Ee++)xe(k.__webglFramebuffer[Ee],R,x,n.COLOR_ATTACHMENT0,ae,Ee);else xe(k.__webglFramebuffer,R,x,n.COLOR_ATTACHMENT0,ae,0);m(x)&&p(ae),t.unbindTexture()}R.depthBuffer&&st(R)}function Ct(R){const x=R.textures;for(let k=0,$=x.length;k<$;k++){const J=x[k];if(m(J)){const W=T(R),Ce=i.get(J).__webglTexture;t.bindTexture(W,Ce),p(W),t.unbindTexture()}}}const Ve=[],ke=[];function Se(R){if(R.samples>0){if(be(R)===!1){const x=R.textures,k=R.width,$=R.height;let J=n.COLOR_BUFFER_BIT;const W=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(R),ae=x.length>1;if(ae)for(let Te=0;Te<x.length;Te++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const Ee=R.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Te=0;Te<x.length;Te++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Te]);const ie=i.get(x[Te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ie,0)}n.blitFramebuffer(0,0,k,$,0,0,k,$,J,n.NEAREST),l===!0&&(Ve.length=0,ke.length=0,Ve.push(n.COLOR_ATTACHMENT0+Te),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ve.push(W),ke.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ke)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ve))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let Te=0;Te<x.length;Te++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Te]);const ie=i.get(x[Te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const x=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Pt(R){return Math.min(r.maxSamples,R.samples)}function be(R){const x=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function $e(R){const x=a.render.frame;u.get(R)!==x&&(u.set(R,x),R.update())}function nn(R,x){const k=R.colorSpace,$=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==Ds&&k!==$i&&(dt.getTransfer(k)===vt?($!==ri||J!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),x}function kt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=B,this.setTexture2D=Y,this.setTexture2DArray=q,this.setTexture3D=se,this.setTextureCube=V,this.rebindTextures=un,this.setupRenderTarget=P,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=be}function QM(n,e){function t(i,r=$i){let s;const a=dt.getTransfer(r);if(i===_i)return n.UNSIGNED_BYTE;if(i===du)return n.UNSIGNED_SHORT_4_4_4_4;if(i===fu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Sh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===bh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Mh)return n.BYTE;if(i===yh)return n.SHORT;if(i===pa)return n.UNSIGNED_SHORT;if(i===uu)return n.INT;if(i===kr)return n.UNSIGNED_INT;if(i===fi)return n.FLOAT;if(i===La)return n.HALF_FLOAT;if(i===wh)return n.ALPHA;if(i===Eh)return n.RGB;if(i===ri)return n.RGBA;if(i===ga)return n.DEPTH_COMPONENT;if(i===_a)return n.DEPTH_STENCIL;if(i===hu)return n.RED;if(i===pu)return n.RED_INTEGER;if(i===Th)return n.RG;if(i===mu)return n.RG_INTEGER;if(i===gu)return n.RGBA_INTEGER;if(i===Ao||i===Ro||i===Co||i===Po)if(a===vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ao)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Po)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ao)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ro)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Co)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Po)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===mc||i===gc||i===_c||i===vc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===mc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_c)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xc||i===Mc||i===yc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===xc||i===Mc)return a===vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===yc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Sc||i===bc||i===wc||i===Ec||i===Tc||i===Ac||i===Rc||i===Cc||i===Pc||i===Lc||i===Dc||i===Ic||i===Uc||i===Nc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Sc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ec)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Tc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ac)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Rc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Cc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Lc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Dc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ic)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Uc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Nc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fc||i===Oc||i===Bc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Fc)return a===vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Oc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===kc||i===zc||i===Gc||i===Hc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===kc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===zc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Gc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ma?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const ey=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ty=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ny{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Gh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new xi({vertexShader:ey,fragmentShader:ty,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Z(new zs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iy extends Os{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,g=null;const v=typeof XRWebGLBinding<"u",m=new ny,p={},T=t.getContextAttributes();let b=null,M=null;const C=[],A=[],L=new Oe;let D=null;const w=new Yn;w.viewport=new Ot;const S=new Yn;S.viewport=new Ot;const I=[w,S],B=new bg;let H=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Q=C[j];return Q===void 0&&(Q=new Ol,C[j]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(j){let Q=C[j];return Q===void 0&&(Q=new Ol,C[j]=Q),Q.getGripSpace()},this.getHand=function(j){let Q=C[j];return Q===void 0&&(Q=new Ol,C[j]=Q),Q.getHandSpace()};function Y(j){const Q=A.indexOf(j.inputSource);if(Q===-1)return;const xe=C[Q];xe!==void 0&&(xe.update(j.inputSource,j.frame,c||a),xe.dispatchEvent({type:j.type,data:j.inputSource}))}function q(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",se);for(let j=0;j<C.length;j++){const Q=A[j];Q!==null&&(A[j]=null,C[j].disconnect(Q))}H=null,X=null,m.reset();for(const j in p)delete p[j];e.setRenderTarget(b),h=null,f=null,d=null,r=null,M=null,ft.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",q),r.addEventListener("inputsourceschange",se),T.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(L),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Ge=null,Pe=null;T.depth&&(Pe=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=T.stencil?_a:ga,Ge=T.stencil?ma:kr);const st={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(st),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new zr(f.textureWidth,f.textureHeight,{format:ri,type:_i,depthTexture:new zh(f.textureWidth,f.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const xe={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,xe),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new zr(h.framebufferWidth,h.framebufferHeight,{format:ri,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ft.setContext(r),ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function se(j){for(let Q=0;Q<j.removed.length;Q++){const xe=j.removed[Q],Ge=A.indexOf(xe);Ge>=0&&(A[Ge]=null,C[Ge].disconnect(xe))}for(let Q=0;Q<j.added.length;Q++){const xe=j.added[Q];let Ge=A.indexOf(xe);if(Ge===-1){for(let st=0;st<C.length;st++)if(st>=A.length){A.push(xe),Ge=st;break}else if(A[st]===null){A[st]=xe,Ge=st;break}if(Ge===-1)break}const Pe=C[Ge];Pe&&Pe.connect(xe)}}const V=new N,ce=new N;function me(j,Q,xe){V.setFromMatrixPosition(Q.matrixWorld),ce.setFromMatrixPosition(xe.matrixWorld);const Ge=V.distanceTo(ce),Pe=Q.projectionMatrix.elements,st=xe.projectionMatrix.elements,un=Pe[14]/(Pe[10]-1),P=Pe[14]/(Pe[10]+1),Ct=(Pe[9]+1)/Pe[5],Ve=(Pe[9]-1)/Pe[5],ke=(Pe[8]-1)/Pe[0],Se=(st[8]+1)/st[0],Pt=un*ke,be=un*Se,$e=Ge/(-ke+Se),nn=$e*-ke;if(Q.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(nn),j.translateZ($e),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Pe[10]===-1)j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const kt=un+$e,R=P+$e,x=Pt-nn,k=be+(Ge-nn),$=Ct*P/R*kt,J=Ve*P/R*kt;j.projectionMatrix.makePerspective(x,k,$,J,kt,R),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Le(j,Q){Q===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Q.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let Q=j.near,xe=j.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),B.near=S.near=w.near=Q,B.far=S.far=w.far=xe,(H!==B.near||X!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),H=B.near,X=B.far),B.layers.mask=j.layers.mask|6,w.layers.mask=B.layers.mask&3,S.layers.mask=B.layers.mask&5;const Ge=j.parent,Pe=B.cameras;Le(B,Ge);for(let st=0;st<Pe.length;st++)Le(Pe[st],Ge);Pe.length===2?me(B,w,S):B.projectionMatrix.copy(w.projectionMatrix),Qe(j,B,Ge)};function Qe(j,Q,xe){xe===null?j.matrix.copy(Q.matrixWorld):(j.matrix.copy(xe.matrixWorld),j.matrix.invert(),j.matrix.multiply(Q.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=va*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(j){return p[j]};let bt=null;function Rt(j,Q){if(u=Q.getViewerPose(c||a),g=Q,u!==null){const xe=u.views;h!==null&&(e.setRenderTargetFramebuffer(M,h.framebuffer),e.setRenderTarget(M));let Ge=!1;xe.length!==B.cameras.length&&(B.cameras.length=0,Ge=!0);for(let P=0;P<xe.length;P++){const Ct=xe[P];let Ve=null;if(h!==null)Ve=h.getViewport(Ct);else{const Se=d.getViewSubImage(f,Ct);Ve=Se.viewport,P===0&&(e.setRenderTargetTextures(M,Se.colorTexture,Se.depthStencilTexture),e.setRenderTarget(M))}let ke=I[P];ke===void 0&&(ke=new Yn,ke.layers.enable(P),ke.viewport=new Ot,I[P]=ke),ke.matrix.fromArray(Ct.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Ct.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),P===0&&(B.matrix.copy(ke.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ge===!0&&B.cameras.push(ke)}const Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const P=d.getDepthInformation(xe[0]);P&&P.isValid&&P.texture&&m.init(P,r.renderState)}if(Pe&&Pe.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let P=0;P<xe.length;P++){const Ct=xe[P].camera;if(Ct){let Ve=p[Ct];Ve||(Ve=new Gh,p[Ct]=Ve);const ke=d.getCameraImage(Ct);Ve.sourceTexture=ke}}}}for(let xe=0;xe<C.length;xe++){const Ge=A[xe],Pe=C[xe];Ge!==null&&Pe!==void 0&&Pe.update(Ge,Q,c||a)}bt&&bt(j,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}const ft=new Wh;ft.setAnimationLoop(Rt),this.setAnimationLoop=function(j){bt=j},this.dispose=function(){}}}const vr=new vi,ry=new ot;function sy(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Uh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,T,b,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,T,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===En&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===En&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),b=T.envMap,M=T.envMapRotation;b&&(m.envMap.value=b,vr.copy(M),vr.x*=-1,vr.y*=-1,vr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),m.envMapRotation.value.setFromMatrix4(ry.makeRotationFromEuler(vr)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===En&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ay(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,b){const M=b.program;i.uniformBlockBinding(T,M)}function c(T,b){let M=r[T.id];M===void 0&&(g(T),M=u(T),r[T.id]=M,T.addEventListener("dispose",m));const C=b.program;i.updateUBOMapping(T,C);const A=e.render.frame;s[T.id]!==A&&(f(T),s[T.id]=A)}function u(T){const b=d();T.__bindingPointIndex=b;const M=n.createBuffer(),C=T.__size,A=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,C,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,M),M}function d(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const b=r[T.id],M=T.uniforms,C=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let A=0,L=M.length;A<L;A++){const D=Array.isArray(M[A])?M[A]:[M[A]];for(let w=0,S=D.length;w<S;w++){const I=D[w];if(h(I,A,w,C)===!0){const B=I.__offset,H=Array.isArray(I.value)?I.value:[I.value];let X=0;for(let Y=0;Y<H.length;Y++){const q=H[Y],se=v(q);typeof q=="number"||typeof q=="boolean"?(I.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,B+X,I.__data)):q.isMatrix3?(I.__data[0]=q.elements[0],I.__data[1]=q.elements[1],I.__data[2]=q.elements[2],I.__data[3]=0,I.__data[4]=q.elements[3],I.__data[5]=q.elements[4],I.__data[6]=q.elements[5],I.__data[7]=0,I.__data[8]=q.elements[6],I.__data[9]=q.elements[7],I.__data[10]=q.elements[8],I.__data[11]=0):(q.toArray(I.__data,X),X+=se.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(T,b,M,C){const A=T.value,L=b+"_"+M;if(C[L]===void 0)return typeof A=="number"||typeof A=="boolean"?C[L]=A:C[L]=A.clone(),!0;{const D=C[L];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return C[L]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(T){const b=T.uniforms;let M=0;const C=16;for(let L=0,D=b.length;L<D;L++){const w=Array.isArray(b[L])?b[L]:[b[L]];for(let S=0,I=w.length;S<I;S++){const B=w[S],H=Array.isArray(B.value)?B.value:[B.value];for(let X=0,Y=H.length;X<Y;X++){const q=H[X],se=v(q),V=M%C,ce=V%se.boundary,me=V+ce;M+=ce,me!==0&&C-me<se.storage&&(M+=C-me),B.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=se.storage}}}const A=M%C;return A>0&&(M+=C-A),T.__size=M,T.__cache={},this}function v(T){const b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),b}function m(T){const b=T.target;b.removeEventListener("dispose",m);const M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function p(){for(const T in r)n.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class oy{constructor(e={}){const{canvas:t=N0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const T=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let C=!1;this._outputColorSpace=$n;let A=0,L=0,D=null,w=-1,S=null;const I=new Ot,B=new Ot;let H=null;const X=new we(0);let Y=0,q=t.width,se=t.height,V=1,ce=null,me=null;const Le=new Ot(0,0,q,se),Qe=new Ot(0,0,q,se);let bt=!1;const Rt=new Su;let ft=!1,j=!1;const Q=new ot,xe=new N,Ge=new Ot,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function un(){return D===null?V:1}let P=i;function Ct(y,F){return t.getContext(y,F)}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lu}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",te,!1),P===null){const F="webgl2";if(P=Ct(F,y),P===null)throw Ct(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ve,ke,Se,Pt,be,$e,nn,kt,R,x,k,$,J,W,Ce,ae,Ee,Te,ie,he,Be,Ae,ue,Xe;function U(){Ve=new _x(P),Ve.init(),Ae=new QM(P,Ve),ke=new ux(P,Ve,e,Ae),Se=new ZM(P,Ve),ke.reversedDepthBuffer&&f&&Se.buffers.depth.setReversed(!0),Pt=new Mx(P),be=new BM,$e=new JM(P,Ve,Se,be,ke,Ae,Pt),nn=new fx(M),kt=new gx(M),R=new Tg(P),ue=new lx(P,R),x=new vx(P,R,Pt,ue),k=new Sx(P,x,R,Pt),ie=new yx(P,ke,$e),ae=new dx(be),$=new OM(M,nn,kt,Ve,ke,ue,ae),J=new sy(M,be),W=new zM,Ce=new qM(Ve),Te=new ox(M,nn,kt,Se,k,h,l),Ee=new jM(M,k,ke),Xe=new ay(P,Pt,ke,Se),he=new cx(P,Ve,Pt),Be=new xx(P,Ve,Pt),Pt.programs=$.programs,M.capabilities=ke,M.extensions=Ve,M.properties=be,M.renderLists=W,M.shadowMap=Ee,M.state=Se,M.info=Pt}U();const re=new iy(M,P);this.xr=re,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const y=Ve.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ve.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(y){y!==void 0&&(V=y,this.setSize(q,se,!1))},this.getSize=function(y){return y.set(q,se)},this.setSize=function(y,F,z=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=y,se=F,t.width=Math.floor(y*V),t.height=Math.floor(F*V),z===!0&&(t.style.width=y+"px",t.style.height=F+"px"),this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(q*V,se*V).floor()},this.setDrawingBufferSize=function(y,F,z){q=y,se=F,V=z,t.width=Math.floor(y*z),t.height=Math.floor(F*z),this.setViewport(0,0,y,F)},this.getCurrentViewport=function(y){return y.copy(I)},this.getViewport=function(y){return y.copy(Le)},this.setViewport=function(y,F,z,G){y.isVector4?Le.set(y.x,y.y,y.z,y.w):Le.set(y,F,z,G),Se.viewport(I.copy(Le).multiplyScalar(V).round())},this.getScissor=function(y){return y.copy(Qe)},this.setScissor=function(y,F,z,G){y.isVector4?Qe.set(y.x,y.y,y.z,y.w):Qe.set(y,F,z,G),Se.scissor(B.copy(Qe).multiplyScalar(V).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(y){Se.setScissorTest(bt=y)},this.setOpaqueSort=function(y){ce=y},this.setTransparentSort=function(y){me=y},this.getClearColor=function(y){return y.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(y=!0,F=!0,z=!0){let G=0;if(y){let O=!1;if(D!==null){const ne=D.texture.format;O=ne===gu||ne===mu||ne===pu}if(O){const ne=D.texture.type,fe=ne===_i||ne===kr||ne===pa||ne===ma||ne===du||ne===fu,Me=Te.getClearColor(),ge=Te.getClearAlpha(),Ne=Me.r,ze=Me.g,De=Me.b;fe?(g[0]=Ne,g[1]=ze,g[2]=De,g[3]=ge,P.clearBufferuiv(P.COLOR,0,g)):(v[0]=Ne,v[1]=ze,v[2]=De,v[3]=ge,P.clearBufferiv(P.COLOR,0,v))}else G|=P.COLOR_BUFFER_BIT}F&&(G|=P.DEPTH_BUFFER_BIT),z&&(G|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",te,!1),Te.dispose(),W.dispose(),Ce.dispose(),be.dispose(),nn.dispose(),kt.dispose(),k.dispose(),ue.dispose(),Xe.dispose(),$.dispose(),re.dispose(),re.removeEventListener("sessionstart",li),re.removeEventListener("sessionend",od),dr.stop()};function oe(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const y=Pt.autoReset,F=Ee.enabled,z=Ee.autoUpdate,G=Ee.needsUpdate,O=Ee.type;U(),Pt.autoReset=y,Ee.enabled=F,Ee.autoUpdate=z,Ee.needsUpdate=G,Ee.type=O}function te(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function K(y){const F=y.target;F.removeEventListener("dispose",K),ye(F)}function ye(y){He(y),be.remove(y)}function He(y){const F=be.get(y).programs;F!==void 0&&(F.forEach(function(z){$.releaseProgram(z)}),y.isShaderMaterial&&$.releaseShaderCache(y))}this.renderBufferDirect=function(y,F,z,G,O,ne){F===null&&(F=Pe);const fe=O.isMesh&&O.matrixWorld.determinant()<0,Me=wm(y,F,z,G,O);Se.setMaterial(G,fe);let ge=z.index,Ne=1;if(G.wireframe===!0){if(ge=x.getWireframeAttribute(z),ge===void 0)return;Ne=2}const ze=z.drawRange,De=z.attributes.position;let tt=ze.start*Ne,_t=(ze.start+ze.count)*Ne;ne!==null&&(tt=Math.max(tt,ne.start*Ne),_t=Math.min(_t,(ne.start+ne.count)*Ne)),ge!==null?(tt=Math.max(tt,0),_t=Math.min(_t,ge.count)):De!=null&&(tt=Math.max(tt,0),_t=Math.min(_t,De.count));const Ft=_t-tt;if(Ft<0||Ft===1/0)return;ue.setup(O,G,Me,z,ge);let Et,yt=he;if(ge!==null&&(Et=R.get(ge),yt=Be,yt.setIndex(Et)),O.isMesh)G.wireframe===!0?(Se.setLineWidth(G.wireframeLinewidth*un()),yt.setMode(P.LINES)):yt.setMode(P.TRIANGLES);else if(O.isLine){let Ie=G.linewidth;Ie===void 0&&(Ie=1),Se.setLineWidth(Ie*un()),O.isLineSegments?yt.setMode(P.LINES):O.isLineLoop?yt.setMode(P.LINE_LOOP):yt.setMode(P.LINE_STRIP)}else O.isPoints?yt.setMode(P.POINTS):O.isSprite&&yt.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)xa("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))yt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ie=O._multiDrawStarts,Ut=O._multiDrawCounts,ut=O._multiDrawCount,In=ge?R.get(ge).bytesPerElement:1,Zr=be.get(G).currentProgram.getUniforms();for(let Un=0;Un<ut;Un++)Zr.setValue(P,"_gl_DrawID",Un),yt.render(Ie[Un]/In,Ut[Un])}else if(O.isInstancedMesh)yt.renderInstances(tt,Ft,O.count);else if(z.isInstancedBufferGeometry){const Ie=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Ut=Math.min(z.instanceCount,Ie);yt.renderInstances(tt,Ft,Ut)}else yt.render(tt,Ft)};function wt(y,F,z){y.transparent===!0&&y.side===Zt&&y.forceSinglePass===!1?(y.side=En,y.needsUpdate=!0,za(y,F,z),y.side=tr,y.needsUpdate=!0,za(y,F,z),y.side=Zt):za(y,F,z)}this.compile=function(y,F,z=null){z===null&&(z=y),p=Ce.get(z),p.init(F),b.push(p),z.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),y!==z&&y.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const G=new Set;return y.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ne=O.material;if(ne)if(Array.isArray(ne))for(let fe=0;fe<ne.length;fe++){const Me=ne[fe];wt(Me,z,O),G.add(Me)}else wt(ne,z,O),G.add(ne)}),p=b.pop(),G},this.compileAsync=function(y,F,z=null){const G=this.compile(y,F,z);return new Promise(O=>{function ne(){if(G.forEach(function(fe){be.get(fe).currentProgram.isReady()&&G.delete(fe)}),G.size===0){O(y);return}setTimeout(ne,10)}Ve.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let ht=null;function bi(y){ht&&ht(y)}function li(){dr.stop()}function od(){dr.start()}const dr=new Wh;dr.setAnimationLoop(bi),typeof self<"u"&&dr.setContext(self),this.setAnimationLoop=function(y){ht=y,re.setAnimationLoop(y),y===null?dr.stop():dr.start()},re.addEventListener("sessionstart",li),re.addEventListener("sessionend",od),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(F),F=re.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,F,D),p=Ce.get(y,b.length),p.init(F),b.push(p),Q.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Rt.setFromProjectionMatrix(Q,hi,F.reversedDepth),j=this.localClippingEnabled,ft=ae.init(this.clippingPlanes,j),m=W.get(y,T.length),m.init(),T.push(m),re.enabled===!0&&re.isPresenting===!0){const ne=M.xr.getDepthSensingMesh();ne!==null&&pl(ne,F,-1/0,M.sortObjects)}pl(y,F,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(ce,me),st=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,st&&Te.addToRenderList(m,y),this.info.render.frame++,ft===!0&&ae.beginShadows();const z=p.state.shadowsArray;Ee.render(z,y,F),ft===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,O=m.transmissive;if(p.setupLights(),F.isArrayCamera){const ne=F.cameras;if(O.length>0)for(let fe=0,Me=ne.length;fe<Me;fe++){const ge=ne[fe];cd(G,O,y,ge)}st&&Te.render(y);for(let fe=0,Me=ne.length;fe<Me;fe++){const ge=ne[fe];ld(m,y,ge,ge.viewport)}}else O.length>0&&cd(G,O,y,F),st&&Te.render(y),ld(m,y,F);D!==null&&L===0&&($e.updateMultisampleRenderTarget(D),$e.updateRenderTargetMipmap(D)),y.isScene===!0&&y.onAfterRender(M,y,F),ue.resetDefaultState(),w=-1,S=null,b.pop(),b.length>0?(p=b[b.length-1],ft===!0&&ae.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function pl(y,F,z,G){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(F);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Rt.intersectsSprite(y)){G&&Ge.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Q);const fe=k.update(y),Me=y.material;Me.visible&&m.push(y,fe,Me,z,Ge.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Rt.intersectsObject(y))){const fe=k.update(y),Me=y.material;if(G&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ge.copy(y.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Ge.copy(fe.boundingSphere.center)),Ge.applyMatrix4(y.matrixWorld).applyMatrix4(Q)),Array.isArray(Me)){const ge=fe.groups;for(let Ne=0,ze=ge.length;Ne<ze;Ne++){const De=ge[Ne],tt=Me[De.materialIndex];tt&&tt.visible&&m.push(y,fe,tt,z,Ge.z,De)}}else Me.visible&&m.push(y,fe,Me,z,Ge.z,null)}}const ne=y.children;for(let fe=0,Me=ne.length;fe<Me;fe++)pl(ne[fe],F,z,G)}function ld(y,F,z,G){const O=y.opaque,ne=y.transmissive,fe=y.transparent;p.setupLightsView(z),ft===!0&&ae.setGlobalState(M.clippingPlanes,z),G&&Se.viewport(I.copy(G)),O.length>0&&ka(O,F,z),ne.length>0&&ka(ne,F,z),fe.length>0&&ka(fe,F,z),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function cd(y,F,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new zr(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?La:_i,minFilter:Lr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));const ne=p.state.transmissionRenderTarget[G.id],fe=G.viewport||I;ne.setSize(fe.z*M.transmissionResolutionScale,fe.w*M.transmissionResolutionScale);const Me=M.getRenderTarget(),ge=M.getActiveCubeFace(),Ne=M.getActiveMipmapLevel();M.setRenderTarget(ne),M.getClearColor(X),Y=M.getClearAlpha(),Y<1&&M.setClearColor(16777215,.5),M.clear(),st&&Te.render(z);const ze=M.toneMapping;M.toneMapping=Ji;const De=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),ft===!0&&ae.setGlobalState(M.clippingPlanes,G),ka(y,z,G),$e.updateMultisampleRenderTarget(ne),$e.updateRenderTargetMipmap(ne),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let _t=0,Ft=F.length;_t<Ft;_t++){const Et=F[_t],yt=Et.object,Ie=Et.geometry,Ut=Et.material,ut=Et.group;if(Ut.side===Zt&&yt.layers.test(G.layers)){const In=Ut.side;Ut.side=En,Ut.needsUpdate=!0,ud(yt,z,G,Ie,Ut,ut),Ut.side=In,Ut.needsUpdate=!0,tt=!0}}tt===!0&&($e.updateMultisampleRenderTarget(ne),$e.updateRenderTargetMipmap(ne))}M.setRenderTarget(Me,ge,Ne),M.setClearColor(X,Y),De!==void 0&&(G.viewport=De),M.toneMapping=ze}function ka(y,F,z){const G=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ne=y.length;O<ne;O++){const fe=y[O],Me=fe.object,ge=fe.geometry,Ne=fe.group;let ze=fe.material;ze.allowOverride===!0&&G!==null&&(ze=G),Me.layers.test(z.layers)&&ud(Me,F,z,ge,ze,Ne)}}function ud(y,F,z,G,O,ne){y.onBeforeRender(M,F,z,G,O,ne),y.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),O.onBeforeRender(M,F,z,G,y,ne),O.transparent===!0&&O.side===Zt&&O.forceSinglePass===!1?(O.side=En,O.needsUpdate=!0,M.renderBufferDirect(z,F,G,O,y,ne),O.side=tr,O.needsUpdate=!0,M.renderBufferDirect(z,F,G,O,y,ne),O.side=Zt):M.renderBufferDirect(z,F,G,O,y,ne),y.onAfterRender(M,F,z,G,O,ne)}function za(y,F,z){F.isScene!==!0&&(F=Pe);const G=be.get(y),O=p.state.lights,ne=p.state.shadowsArray,fe=O.state.version,Me=$.getParameters(y,O.state,ne,F,z),ge=$.getProgramCacheKey(Me);let Ne=G.programs;G.environment=y.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(y.isMeshStandardMaterial?kt:nn).get(y.envMap||G.environment),G.envMapRotation=G.environment!==null&&y.envMap===null?F.environmentRotation:y.envMapRotation,Ne===void 0&&(y.addEventListener("dispose",K),Ne=new Map,G.programs=Ne);let ze=Ne.get(ge);if(ze!==void 0){if(G.currentProgram===ze&&G.lightsStateVersion===fe)return fd(y,Me),ze}else Me.uniforms=$.getUniforms(y),y.onBeforeCompile(Me,M),ze=$.acquireProgram(Me,ge),Ne.set(ge,ze),G.uniforms=Me.uniforms;const De=G.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(De.clippingPlanes=ae.uniform),fd(y,Me),G.needsLights=Tm(y),G.lightsStateVersion=fe,G.needsLights&&(De.ambientLightColor.value=O.state.ambient,De.lightProbe.value=O.state.probe,De.directionalLights.value=O.state.directional,De.directionalLightShadows.value=O.state.directionalShadow,De.spotLights.value=O.state.spot,De.spotLightShadows.value=O.state.spotShadow,De.rectAreaLights.value=O.state.rectArea,De.ltc_1.value=O.state.rectAreaLTC1,De.ltc_2.value=O.state.rectAreaLTC2,De.pointLights.value=O.state.point,De.pointLightShadows.value=O.state.pointShadow,De.hemisphereLights.value=O.state.hemi,De.directionalShadowMap.value=O.state.directionalShadowMap,De.directionalShadowMatrix.value=O.state.directionalShadowMatrix,De.spotShadowMap.value=O.state.spotShadowMap,De.spotLightMatrix.value=O.state.spotLightMatrix,De.spotLightMap.value=O.state.spotLightMap,De.pointShadowMap.value=O.state.pointShadowMap,De.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=ze,G.uniformsList=null,ze}function dd(y){if(y.uniformsList===null){const F=y.currentProgram.getUniforms();y.uniformsList=Lo.seqWithValue(F.seq,y.uniforms)}return y.uniformsList}function fd(y,F){const z=be.get(y);z.outputColorSpace=F.outputColorSpace,z.batching=F.batching,z.batchingColor=F.batchingColor,z.instancing=F.instancing,z.instancingColor=F.instancingColor,z.instancingMorph=F.instancingMorph,z.skinning=F.skinning,z.morphTargets=F.morphTargets,z.morphNormals=F.morphNormals,z.morphColors=F.morphColors,z.morphTargetsCount=F.morphTargetsCount,z.numClippingPlanes=F.numClippingPlanes,z.numIntersection=F.numClipIntersection,z.vertexAlphas=F.vertexAlphas,z.vertexTangents=F.vertexTangents,z.toneMapping=F.toneMapping}function wm(y,F,z,G,O){F.isScene!==!0&&(F=Pe),$e.resetTextureUnits();const ne=F.fog,fe=G.isMeshStandardMaterial?F.environment:null,Me=D===null?M.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ds,ge=(G.isMeshStandardMaterial?kt:nn).get(G.envMap||fe),Ne=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,ze=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),De=!!z.morphAttributes.position,tt=!!z.morphAttributes.normal,_t=!!z.morphAttributes.color;let Ft=Ji;G.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ft=M.toneMapping);const Et=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,yt=Et!==void 0?Et.length:0,Ie=be.get(G),Ut=p.state.lights;if(ft===!0&&(j===!0||y!==S)){const xn=y===S&&G.id===w;ae.setState(G,y,xn)}let ut=!1;G.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Ut.state.version||Ie.outputColorSpace!==Me||O.isBatchedMesh&&Ie.batching===!1||!O.isBatchedMesh&&Ie.batching===!0||O.isBatchedMesh&&Ie.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ie.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ie.instancing===!1||!O.isInstancedMesh&&Ie.instancing===!0||O.isSkinnedMesh&&Ie.skinning===!1||!O.isSkinnedMesh&&Ie.skinning===!0||O.isInstancedMesh&&Ie.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ie.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ie.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ie.instancingMorph===!1&&O.morphTexture!==null||Ie.envMap!==ge||G.fog===!0&&Ie.fog!==ne||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==ae.numPlanes||Ie.numIntersection!==ae.numIntersection)||Ie.vertexAlphas!==Ne||Ie.vertexTangents!==ze||Ie.morphTargets!==De||Ie.morphNormals!==tt||Ie.morphColors!==_t||Ie.toneMapping!==Ft||Ie.morphTargetsCount!==yt)&&(ut=!0):(ut=!0,Ie.__version=G.version);let In=Ie.currentProgram;ut===!0&&(In=za(G,F,O));let Zr=!1,Un=!1,Ws=!1;const Nt=In.getUniforms(),Vn=Ie.uniforms;if(Se.useProgram(In.program)&&(Zr=!0,Un=!0,Ws=!0),G.id!==w&&(w=G.id,Un=!0),Zr||S!==y){Se.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Nt.setValue(P,"projectionMatrix",y.projectionMatrix),Nt.setValue(P,"viewMatrix",y.matrixWorldInverse);const Tn=Nt.map.cameraPosition;Tn!==void 0&&Tn.setValue(P,xe.setFromMatrixPosition(y.matrixWorld)),ke.logarithmicDepthBuffer&&Nt.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Nt.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,Un=!0,Ws=!0)}if(O.isSkinnedMesh){Nt.setOptional(P,O,"bindMatrix"),Nt.setOptional(P,O,"bindMatrixInverse");const xn=O.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),Nt.setValue(P,"boneTexture",xn.boneTexture,$e))}O.isBatchedMesh&&(Nt.setOptional(P,O,"batchingTexture"),Nt.setValue(P,"batchingTexture",O._matricesTexture,$e),Nt.setOptional(P,O,"batchingIdTexture"),Nt.setValue(P,"batchingIdTexture",O._indirectTexture,$e),Nt.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&Nt.setValue(P,"batchingColorTexture",O._colorsTexture,$e));const Wn=z.morphAttributes;if((Wn.position!==void 0||Wn.normal!==void 0||Wn.color!==void 0)&&ie.update(O,z,In),(Un||Ie.receiveShadow!==O.receiveShadow)&&(Ie.receiveShadow=O.receiveShadow,Nt.setValue(P,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Vn.envMap.value=ge,Vn.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&F.environment!==null&&(Vn.envMapIntensity.value=F.environmentIntensity),Un&&(Nt.setValue(P,"toneMappingExposure",M.toneMappingExposure),Ie.needsLights&&Em(Vn,Ws),ne&&G.fog===!0&&J.refreshFogUniforms(Vn,ne),J.refreshMaterialUniforms(Vn,G,V,se,p.state.transmissionRenderTarget[y.id]),Lo.upload(P,dd(Ie),Vn,$e)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Lo.upload(P,dd(Ie),Vn,$e),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Nt.setValue(P,"center",O.center),Nt.setValue(P,"modelViewMatrix",O.modelViewMatrix),Nt.setValue(P,"normalMatrix",O.normalMatrix),Nt.setValue(P,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const xn=G.uniformsGroups;for(let Tn=0,ml=xn.length;Tn<ml;Tn++){const fr=xn[Tn];Xe.update(fr,In),Xe.bind(fr,In)}}return In}function Em(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function Tm(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(y,F,z){const G=be.get(y);G.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),be.get(y.texture).__webglTexture=F,be.get(y.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:z,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,F){const z=be.get(y);z.__webglFramebuffer=F,z.__useDefaultFramebuffer=F===void 0};const Am=P.createFramebuffer();this.setRenderTarget=function(y,F=0,z=0){D=y,A=F,L=z;let G=!0,O=null,ne=!1,fe=!1;if(y){const ge=be.get(y);if(ge.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(P.FRAMEBUFFER,null),G=!1;else if(ge.__webglFramebuffer===void 0)$e.setupRenderTarget(y);else if(ge.__hasExternalTextures)$e.rebindTextures(y,be.get(y.texture).__webglTexture,be.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const De=y.depthTexture;if(ge.__boundDepthTexture!==De){if(De!==null&&be.has(De)&&(y.width!==De.image.width||y.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");$e.setupDepthRenderbuffer(y)}}const Ne=y.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(fe=!0);const ze=be.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(ze[F])?O=ze[F][z]:O=ze[F],ne=!0):y.samples>0&&$e.useMultisampledRTT(y)===!1?O=be.get(y).__webglMultisampledFramebuffer:Array.isArray(ze)?O=ze[z]:O=ze,I.copy(y.viewport),B.copy(y.scissor),H=y.scissorTest}else I.copy(Le).multiplyScalar(V).floor(),B.copy(Qe).multiplyScalar(V).floor(),H=bt;if(z!==0&&(O=Am),Se.bindFramebuffer(P.FRAMEBUFFER,O)&&G&&Se.drawBuffers(y,O),Se.viewport(I),Se.scissor(B),Se.setScissorTest(H),ne){const ge=be.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,ge.__webglTexture,z)}else if(fe){const ge=F;for(let Ne=0;Ne<y.textures.length;Ne++){const ze=be.get(y.textures[Ne]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ne,ze.__webglTexture,z,ge)}}else if(y!==null&&z!==0){const ge=be.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ge.__webglTexture,z)}w=-1},this.readRenderTargetPixels=function(y,F,z,G,O,ne,fe,Me=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=be.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&fe!==void 0&&(ge=ge[fe]),ge){Se.bindFramebuffer(P.FRAMEBUFFER,ge);try{const Ne=y.textures[Me],ze=Ne.format,De=Ne.type;if(!ke.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ke.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=y.width-G&&z>=0&&z<=y.height-O&&(y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Me),P.readPixels(F,z,G,O,Ae.convert(ze),Ae.convert(De),ne))}finally{const Ne=D!==null?be.get(D).__webglFramebuffer:null;Se.bindFramebuffer(P.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(y,F,z,G,O,ne,fe,Me=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=be.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&fe!==void 0&&(ge=ge[fe]),ge)if(F>=0&&F<=y.width-G&&z>=0&&z<=y.height-O){Se.bindFramebuffer(P.FRAMEBUFFER,ge);const Ne=y.textures[Me],ze=Ne.format,De=Ne.type;if(!ke.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ke.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,tt),P.bufferData(P.PIXEL_PACK_BUFFER,ne.byteLength,P.STREAM_READ),y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Me),P.readPixels(F,z,G,O,Ae.convert(ze),Ae.convert(De),0);const _t=D!==null?be.get(D).__webglFramebuffer:null;Se.bindFramebuffer(P.FRAMEBUFFER,_t);const Ft=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await F0(P,Ft,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,tt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ne),P.deleteBuffer(tt),P.deleteSync(Ft),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,F=null,z=0){const G=Math.pow(2,-z),O=Math.floor(y.image.width*G),ne=Math.floor(y.image.height*G),fe=F!==null?F.x:0,Me=F!==null?F.y:0;$e.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,z,0,0,fe,Me,O,ne),Se.unbindTexture()};const Rm=P.createFramebuffer(),Cm=P.createFramebuffer();this.copyTextureToTexture=function(y,F,z=null,G=null,O=0,ne=null){ne===null&&(O!==0?(xa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=O,O=0):ne=0);let fe,Me,ge,Ne,ze,De,tt,_t,Ft;const Et=y.isCompressedTexture?y.mipmaps[ne]:y.image;if(z!==null)fe=z.max.x-z.min.x,Me=z.max.y-z.min.y,ge=z.isBox3?z.max.z-z.min.z:1,Ne=z.min.x,ze=z.min.y,De=z.isBox3?z.min.z:0;else{const Wn=Math.pow(2,-O);fe=Math.floor(Et.width*Wn),Me=Math.floor(Et.height*Wn),y.isDataArrayTexture?ge=Et.depth:y.isData3DTexture?ge=Math.floor(Et.depth*Wn):ge=1,Ne=0,ze=0,De=0}G!==null?(tt=G.x,_t=G.y,Ft=G.z):(tt=0,_t=0,Ft=0);const yt=Ae.convert(F.format),Ie=Ae.convert(F.type);let Ut;F.isData3DTexture?($e.setTexture3D(F,0),Ut=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?($e.setTexture2DArray(F,0),Ut=P.TEXTURE_2D_ARRAY):($e.setTexture2D(F,0),Ut=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);const ut=P.getParameter(P.UNPACK_ROW_LENGTH),In=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Zr=P.getParameter(P.UNPACK_SKIP_PIXELS),Un=P.getParameter(P.UNPACK_SKIP_ROWS),Ws=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Et.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Et.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ne),P.pixelStorei(P.UNPACK_SKIP_ROWS,ze),P.pixelStorei(P.UNPACK_SKIP_IMAGES,De);const Nt=y.isDataArrayTexture||y.isData3DTexture,Vn=F.isDataArrayTexture||F.isData3DTexture;if(y.isDepthTexture){const Wn=be.get(y),xn=be.get(F),Tn=be.get(Wn.__renderTarget),ml=be.get(xn.__renderTarget);Se.bindFramebuffer(P.READ_FRAMEBUFFER,Tn.__webglFramebuffer),Se.bindFramebuffer(P.DRAW_FRAMEBUFFER,ml.__webglFramebuffer);for(let fr=0;fr<ge;fr++)Nt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,be.get(y).__webglTexture,O,De+fr),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,be.get(F).__webglTexture,ne,Ft+fr)),P.blitFramebuffer(Ne,ze,fe,Me,tt,_t,fe,Me,P.DEPTH_BUFFER_BIT,P.NEAREST);Se.bindFramebuffer(P.READ_FRAMEBUFFER,null),Se.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(O!==0||y.isRenderTargetTexture||be.has(y)){const Wn=be.get(y),xn=be.get(F);Se.bindFramebuffer(P.READ_FRAMEBUFFER,Rm),Se.bindFramebuffer(P.DRAW_FRAMEBUFFER,Cm);for(let Tn=0;Tn<ge;Tn++)Nt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Wn.__webglTexture,O,De+Tn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Wn.__webglTexture,O),Vn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,xn.__webglTexture,ne,Ft+Tn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,xn.__webglTexture,ne),O!==0?P.blitFramebuffer(Ne,ze,fe,Me,tt,_t,fe,Me,P.COLOR_BUFFER_BIT,P.NEAREST):Vn?P.copyTexSubImage3D(Ut,ne,tt,_t,Ft+Tn,Ne,ze,fe,Me):P.copyTexSubImage2D(Ut,ne,tt,_t,Ne,ze,fe,Me);Se.bindFramebuffer(P.READ_FRAMEBUFFER,null),Se.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Vn?y.isDataTexture||y.isData3DTexture?P.texSubImage3D(Ut,ne,tt,_t,Ft,fe,Me,ge,yt,Ie,Et.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(Ut,ne,tt,_t,Ft,fe,Me,ge,yt,Et.data):P.texSubImage3D(Ut,ne,tt,_t,Ft,fe,Me,ge,yt,Ie,Et):y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ne,tt,_t,fe,Me,yt,Ie,Et.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ne,tt,_t,Et.width,Et.height,yt,Et.data):P.texSubImage2D(P.TEXTURE_2D,ne,tt,_t,fe,Me,yt,Ie,Et);P.pixelStorei(P.UNPACK_ROW_LENGTH,ut),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,In),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Zr),P.pixelStorei(P.UNPACK_SKIP_ROWS,Un),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ws),ne===0&&F.generateMipmaps&&P.generateMipmap(Ut),Se.unbindTexture()},this.initRenderTarget=function(y){be.get(y).__webglFramebuffer===void 0&&$e.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?$e.setTextureCube(y,0):y.isData3DTexture?$e.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?$e.setTexture2DArray(y,0):$e.setTexture2D(y,0),Se.unbindTexture()},this.resetState=function(){A=0,L=0,D=null,Se.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}}const ly={R:9},We={maxHp:5,moveSpeed:4.2,waterSlow:.45,dashDist:3.4,dashTime:.2,iframe:.15,tapDashMin:2,tapDashMax:5.5,lockRange:7,stamMax:3,stamRegen:.8,guardHold:.21,parryTime:.45,perfectEarly:.25,perfectLate:.15,parryArc:.36,jumpTime:.6,hurtInvuln:1.2,knockback:1.2},At={ink:21,min:50,step:.3,baseV:18,gUp:80,gDown:160,vMin:4,vMax:48,charge:.8,start:10,lakeCost:.35,dmg:4,hitR:.8,blastR:3.2,blastDmg:6},pi={hit:2,kill:0,parry:10,perfect:30,evade:20,jumpRing:8,crystal:12,crystalPay:5},Mf={every:2,amount:1},_n={grunt:{hp:3,r:.45,speed:1.6,pref:2.1,range:3.1,pts:100,kb:5,whirlTime:2.2,whirlSpeed:1.7,whirlR:.95,whirlDizzy:1},brute:{hp:9,r:.85,speed:.85,pref:1.9,range:3.6,pts:400,kb:1.6,swingR:2.9,swingArc:.6},boulder:{hp:6,r:.6,speed:1.15,pref:3.6,range:5,pts:300,kb:2.2,rollSpeed:12,rollLen:3.4,rolls:3,followWarn:[.5,.38],armor:.34,dizzy:1.8},jelly:{hp:4,r:.55,speed:.7,pref:4,range:7.5,pts:250,kb:1,aquatic:!0,diveRange:9,pulseRange:3},archer:{hp:2.5,r:.42,speed:1.5,pref:6,range:8.5,pts:200,kb:5,shotSpeed:11,shotLen:11,flee:3},shell:{hp:6,r:.6,speed:1,pref:1.8,range:2.9,pts:350,kb:1.4,turn:1.5,front:.35,lineLen:2.6,lineW:.85},hopper:{hp:3.5,r:.48,speed:1.2,pref:4,range:6.5,pts:250,kb:3,hops:2,hopR:1.25},shroom:{hp:4,r:.55,speed:.25,pref:5.5,range:9,pts:300,kb:2,spores:3,heal:1.5,healR:3.5},bee:{hp:1,r:.3,speed:2.6,pref:1.5,range:3,pts:60,kb:6,lineLen:2.6,lineW:.4,fly:!0},splitter:{hp:5,r:.55,speed:1.1,pref:2.4,range:4.2,pts:300,kb:2.5,hops:1,hopR:1.1,split:"blobling"},boss:{hp:48,r:1.35,speed:.75,pref:2.6,range:5.2,pts:3e3,kb:.5,rollSpeed:11}},On=(n,e)=>({..._n[n],base:n,...e});Object.assign(_n,{frostGrunt:On("grunt",{hp:3.5,chill:!0,pal:[7325934,1063514,2973568]}),frostBrute:On("brute",{hp:10,doubleRing:!0,pal:[8238824,1324384,13625855]}),frostArcher:On("archer",{hp:3,volley:3,pal:[10474734,2973568]}),sandGrunt:On("grunt",{hp:3,burrow:!0,pal:[14262860,4860422,8016420]}),sandBoulder:On("boulder",{hp:5,r:.52,rolls:4,rollSpeed:14,followWarn:[.5,.42,.36],pal:[13015648,2759176]}),lavaGrunt:On("grunt",{hp:3,blast:!0,pal:[16738858,8001536,3807760]}),lavaBrute:On("brute",{hp:11,burnSlam:!0,pal:[4864578,8003584,16751164]}),magmaJelly:On("jelly",{hp:6,r:.65,pal:[16742960,16726544]}),blobling:On("splitter",{hp:1.5,r:.32,speed:1.9,pref:1.4,range:2.6,pts:80,kb:5,split:null,model:"blobling",lineLen:2.2,lineW:.4}),rockKing:On("boss",{hp:72,model:"rock"}),frostQueen:On("boss",{hp:105,r:1.15,model:"queen",pref:3.4,range:7}),sandWyrm:On("boss",{hp:125,r:1.2,model:"wyrm",speed:.9,range:8}),lavaTitan:On("boss",{hp:155,r:1.6,model:"titan",speed:.6,range:8})});const cy={grunt:"長矛兵",brute:"巨魔",boulder:"滾石",jelly:"水母",archer:"弓手",shell:"盾甲蟲",hopper:"跳跳蛙",shroom:"蘑菇法師",bee:"蜂群",splitter:"分裂泥球"},Dr={minTier:3,base:.03,perTier:.02,maxChance:.22,perWave:[1,2],twoFrom:7,skip:["bee","splitter"]},Ii={iceGrip:1.7,spikeGrip:8,burnDelay:.3,stormCalm:13,stormWarn:2.5,stormLen:8},Rn={warnBase:1.2,warnMin:.7,warnStep:.06,cdMin:2.2,cdRand:1.8,stunPerfect:2.6,stunNormal:0,hitstop:.05,killHitstop:.06,grace:2.2,comboTime:3},_e=N,ir=ki,rr=new _e(0,1,0),Fe=ly.R,ee=n=>document.getElementById(n),Yt=(n,e,t)=>Math.max(e,Math.min(t,n));function jh(n){return()=>(n=n*16807%2147483647)/2147483647}const Ht=(n=Math.random)=>{const e=n()*2-1,t=n()*Math.PI*2,i=Math.sqrt(1-e*e);return new _e(i*Math.cos(t),e,i*Math.sin(t))},at=(n,e)=>e.clone().addScaledVector(n,-e.dot(n)),nt=(n,e,t)=>n.clone().multiplyScalar(Fe).addScaledVector(e,t).normalize(),$t=(n,e)=>at(n,new _e().subVectors(e,n)).normalize();function Ia(n){const e=at(n,Math.abs(n.y)<.9?rr:new _e(1,0,0)).normalize();return[e,new _e().crossVectors(n,e)]}const Kh={grass:{id:"grass",seed:20261016,mountains:7,lakes:4,mtn:"peak",liquid:"water",tree:"pine",trees:110,rocks:42,flowers:150,ground:{bed:"#c2a46d",shore:"#ecd69c",low:"#7bd16a",mid:"#5bb85e",rock:"#8b8f9f",cap:"#f4f7ff"},liquidColor:3844336,leaf:3115598,trunk:8016434,rock:10132651,flower:[[1,1,1],[1,.8,.25]],sky:725040,atmo:6273279,hemi:[14085119,3812437,2.3],sun:[16773852,3.2]},ice:{id:"ice",seed:77123,mountains:7,lakes:5,lakeW:.1,lanes:5,mtn:"peak",liquid:"ice",tree:"snowPine",trees:90,rocks:50,flowers:120,ground:{bed:"#8fb8d8",shore:"#dbeaf6",low:"#eef5fb",mid:"#d6e6f4",rock:"#8798b4",cap:"#ffffff"},liquidColor:11134207,leaf:13099756,trunk:6123136,rock:10471142,flower:[[.6,.9,1],[1,1,1]],sky:661560,atmo:10477823,hemi:[15004927,4280956,2.5],sun:[15135487,3]},desert:{id:"desert",seed:40917,mountains:6,lakes:3,lakeW:-.1,mtn:"mesa",dunes:.16,liquid:"water",tree:"cactus",trees:70,rocks:60,flowers:60,storm:!0,ground:{bed:"#b78e55",shore:"#f2dca2",low:"#eac67c",mid:"#deb066",rock:"#b9734a",cap:"#d68f58"},liquidColor:3655360,leaf:5216858,trunk:4160070,rock:12618332,flower:[[.95,.4,.55],[1,.85,.3]],sky:1970736,atmo:16761466,hemi:[16773074,6963496,2.4],sun:[16770744,3.4]},volcano:{id:"volcano",seed:6155,mountains:6,lakes:3,lakeW:-.04,mtn:"crater",rivers:2,liquid:"lava",tree:"charred",trees:80,rocks:70,flowers:110,ground:{bed:"#2a1a18",shore:"#3a2b2d",low:"#4e4145",mid:"#3d3238",rock:"#2d262c",cap:"#ff7a30"},liquidColor:16734750,leaf:2761254,trunk:1840664,rock:3813944,flower:[[1,.45,.12],[1,.85,.3]],sky:1706e3,atmo:16738874,hemi:[16763048,4855840,2.1],sun:[16758928,2.9]}};let It=Kh.grass,Xt=jh(It.seed);const mi=[];function yf(n,e,t){for(let i=0;i<e;i++){let r,s=0;do r=Ht(Xt),s++;while(s<60&&mi.some(o=>Ma(o,r)<o.w+.45));const a=Object.assign({type:n,c:r},t());n==="m"&&It.lanes&&mi.some(o=>o.type==="lane"&&Ma(o,r)<o.w+a.w+.1)||mi.push(a)}}function Zh(n,e=0){const t=Kh[n];It=e?{...t,variant:e,seed:t.seed+e*7919,lakes:Math.max(2,t.lakes+e%3-1),mountains:Math.max(4,t.mountains+(e+1)%3-1)}:t,Xt=jh(It.seed),mi.length=0;for(let i=0;i<(It.lanes||0);i++)uy();yf("m",It.mountains,()=>({h:1.6+Xt()*1.2,w:.27+Xt()*.12})),yf("l",It.lakes,()=>({h:-1.2,w:.3+(It.lakeW||0)+Xt()*.14}));for(let i=0;i<(It.rivers||0);i++){const r=Ht(Xt),[s,a]=Ia(r);mi.push({type:"r",c:r,e1:s,e2:a,w:.085,h:1.3,ph:Xt()*6.28,gaps:3})}}function uy(){for(let n=0;n<80;n++){const e=Ht(Xt),t=at(e,Ht(Xt)).normalize(),i=e.clone().cross(t),r={type:"lane",c:e,t,n:i,L:.5+Xt()*.3,w:.13+Xt()*.05,h:-1.1,bend:.04+Xt()*.06,ph:Xt()*6.28};let s=!0;for(let a=-4;a<=4&&s;a++){const o=dy(r,r.L*a/4);s=mi.every(l=>l.type==="r"||Ma(l,o)>l.w+r.w+.12)}if(s){mi.push(r);return}}}const Jh=(n,e)=>n.bend*Math.sin(e*4+n.ph);function dy(n,e){const t=Jh(n,e);return n.c.clone().multiplyScalar(Math.cos(e)*Math.cos(t)).addScaledVector(n.t,Math.sin(e)*Math.cos(t)).addScaledVector(n.n,Math.sin(t)).normalize()}function Ma(n,e){if(n.type!=="lane")return Math.acos(Yt(e.dot(n.c),-1,1));const t=Math.atan2(e.dot(n.t),e.dot(n.c)),i=Math.asin(Yt(e.dot(n.n),-1,1))-Jh(n,Yt(t,-n.L,n.L)),r=Math.max(0,Math.abs(t)-n.L);return Math.abs(t)>Math.PI/2?Math.PI:Math.hypot(i,r)}Zh("grass");function fy(n,e){return It.mtn==="mesa"?n.h*.62*Math.min(1,(1-e)*2.4):It.mtn==="crater"?n.h*(1-e)**1.3-(e<.24?n.h*.55*(1-e/.24)**2:0):n.h*(1-e)**1.7}function hy(n,e){const t=n.dot(e.e1),i=n.dot(e.e2),r=Math.atan2(i,t),s=n.dot(e.c)+.09*Math.sin(r*5+e.ph);return Math.abs(s)>=e.w?0:-e.h*(1-(s/e.w)**2)*Yt(Math.sin(r*e.gaps+e.ph)*3+2.1,0,1)}function cn(n){let e=.3+.24*Math.sin(n.x*3.1+1.3)*Math.sin(n.y*2.7+.4)*Math.cos(n.z*3.4+.9);It.dunes&&(e+=It.dunes*Math.sin(n.x*8+n.z*5+1)*Math.sin(n.y*7-n.z*3));for(const t of mi){if(t.type==="r"){e+=hy(n,t);continue}const i=Ma(t,n);if(i>=t.w)continue;const r=i/t.w;e+=t.type==="m"?fy(t,r):t.type==="lane"?t.h*(1-r*r)**.6:t.h*(1-r*r)}return e}const an=n=>Math.max(0,cn(n)),vn=n=>n.clone().multiplyScalar(Fe+an(n)),Qh=n=>cn(n)<0,bn=n=>cn(n)<0&&It.liquid!=="ice",Yc=n=>cn(n)<0?It.liquid:"ground";function ep(n,e,t,i){const[r,s]=Ia(n);for(let a=e;a<=t;a+=.05)for(let o=0;o<24;o++){const l=o/24*Math.PI*2,c=n.clone().multiplyScalar(Math.cos(a)).addScaledVector(r,Math.sin(a)*Math.cos(l)).addScaledVector(s,Math.sin(a)*Math.sin(l));if(i(cn(c)))return c}return null}const tp=(n,e=.3,t=Math.PI)=>ep(n,e,t,i=>i<-.08),py=(n,e=.05,t=Math.PI)=>ep(n,e,t,i=>i>.08),jc=(n,e)=>(an(nt(n,e,.3))-an(n))/.3,Do=matchMedia("(pointer: coarse)").matches,An={level:Do?1:2,pixelRatio:Math.min(devicePixelRatio,Do?1.75:2),fx:Do?.7:1},Si=new oy({antialias:!0,powerPreference:"high-performance"});Si.setPixelRatio(An.pixelRatio);Si.shadowMap.enabled=!0;Si.shadowMap.type=cu;document.body.prepend(Si.domElement);const Dn=new og;Dn.background=new we(725040);const xt=new Yn(40,1,.1,600),ca=new _e(0,.08,1).normalize(),Ze=new Ke;Dn.add(Ze);const Io=new xg(14085119,3812437,2.3);Dn.add(Io);const Cn=new Sg(16773852,3.2);Cn.position.set(-9,-5,24);Cn.castShadow=!0;Cn.shadow.mapSize.setScalar(Do?1024:2048);Object.assign(Cn.shadow.camera,{left:-14,right:14,top:14,bottom:-14,near:1,far:70});Cn.shadow.bias=-6e-4;Cn.shadow.normalBias=.04;Dn.add(Cn);const ya=new Ke;Dn.add(ya);{const n=new Vt,e=[],t=[],i=new we,r=new _e(.3,1,-.2).normalize();for(let s=0;s<2200;s++){let a=Ht();s<900&&a.addScaledVector(r,-a.dot(r)*.85).normalize(),a.multiplyScalar(260+Math.random()*120),e.push(a.x,a.y,a.z),i.setHSL(.6+Math.random()*.15,.5,.65+Math.random()*.3),t.push(i.r,i.g,i.b)}n.setAttribute("position",new Je(e,3)),n.setAttribute("color",new Je(t,3)),ya.add(new mg(n,new kh({size:1.3,vertexColors:!0,transparent:!0,opacity:.85,sizeAttenuation:!0,depthWrite:!1,fog:!1})))}const Es=new Ke;Dn.add(Es);const Kc=[];{const n=(u,d=0)=>new ln({color:u,emissive:d,flatShading:!0,roughness:.9,fog:!1}),e=(u,d,f)=>{const h=new Dt(u,3),g=h.attributes.position,v=[],m=new we;for(let p=0;p<g.count;p++){const T=g.getY(p)/u;m.set(d[Math.floor((T+1)*3.5+Math.sin(g.getX(p)*.8)*.3)%d.length]),v.push(m.r,m.g,m.b)}return h.setAttribute("color",new Je(v,3)),new Z(h,new ln({vertexColors:!0,emissive:f,flatShading:!0,roughness:.9,fog:!1}))},t=(u,d,f,h=.55)=>new Z(new ar(u,d,48),new gt({color:f,transparent:!0,opacity:h,side:Zt,fog:!1,depthWrite:!1})),i=(u,d,f)=>(f.userData.uv=[u,d],f.userData.spin=new _e(0,.04+Math.random()*.05,0),Es.add(f),Kc.push(f),f);i(.08,.55,new Z(new Dt(4.2,1),n(7307192,1055296)));const r=new Ke;r.add(new Z(new Dt(2.6,1),n(5222026,731688)));const s=t(3.6,4.8,14207487);s.rotation.set(1.2,.3,0),r.add(s),i(.34,.62,r),i(.62,.78,e(7,[14263915,11893322,15782048,11037244,15253642],2758152)),i(.5,.35,new Z(new Dt(1.8,1),n(14178106,3804166)));const a=new Ke;a.add(new Z(new Dt(3,1),n(10476799,1192008)));const o=t(3.9,4.3,16777215,.4),l=t(4.7,5.2,10476799,.3);o.rotation.set(.4,.9,0),l.rotation.set(.4,.9,0),a.add(o,l),i(.84,.5,a),i(.22,.15,e(5,[8022744,10128112,5917368,12628223],1313840)),i(.72,.1,new Z(new Dt(2.2,1),n(15257712,3813384))),i(.95,.85,new Z(new Dt(1.4,1),n(11580616,1316382)));const c=new Ke;c.add(new Z(new Dt(1.2,1),new gt({color:16773824,fog:!1}))),c.add(new Z(new Dt(2.8,1),new gt({color:16760944,transparent:!0,opacity:.18,blending:Br,depthWrite:!1,fog:!1}))),i(.4,.9,c);for(let u=0;u<40;u++){const d=new Z(new Da(.6+Math.random()*1.4,0),n(8224658));d.position.copy(Ht()).multiplyScalar(120+Math.random()*40),d.userData.spin=new _e(Math.random(),Math.random(),Math.random()).multiplyScalar(.3),ya.add(d)}}const np=new Z(new pt(Fe+3.2,48,32),new gt({color:6273279,transparent:!0,opacity:.12,side:En,blending:Br,depthWrite:!1,fog:!1}));Dn.add(np);Dn.fog=new yu(14200944,400,600);const Zc=new we,my=new we(13212252);let Jc=14;function gy(n){Zc.set(n.sky),Dn.background.copy(Zc),np.material.color.set(n.atmo),Io.color.set(n.hemi[0]),Io.groundColor.set(n.hemi[1]),Io.intensity=n.hemi[2],Cn.color.set(n.sun[0]),Cn.intensity=n.sun[1]}function ip(n){Dn.fog.near=n>0?Jc+12*(1-n)-3.5:400,Dn.fog.far=n>0?Jc+40*(1-n)+2.5:600,Dn.background.copy(Zc).lerp(my,n)}const Sf=new ir,_y=new _e(.2,1,.1).normalize(),bf=new ir,wf=new ir,$l=new _e,mo=new _e,ea={x:0,y:0};let Ef=0;const Tf=(n,e)=>(n%e+e)%e;function vy(n){for(const r of[...ya.children,...Kc])r.userData.spin&&(r.rotation.x+=r.userData.spin.x*n,r.rotation.y+=r.userData.spin.y*n);xt.getWorldDirection($l),wf.copy(Ze.quaternion).multiply(bf.invert()),bf.copy(Ze.quaternion),mo.copy($l).applyQuaternion(wf).sub($l).applyQuaternion(xt.quaternion.clone().invert()),mo.lengthSq()<.04&&(ea.x+=mo.x*100,ea.y+=mo.y*100),ea.x+=n*.5,Ef+=n*.006,Sf.setFromAxisAngle(_y,Ef),ya.quaternion.copy(Ze.quaternion).multiply(Sf);const e=2*da.x+60,t=2*da.y+34,i=da.y*.45;for(const r of Kc)r.position.set(Tf(r.userData.uv[0]*e+ea.x,e)-e/2,Tf(r.userData.uv[1]*t+ea.y,t)-t/2+i,-100)}const ua=new _e,da={x:50,y:36},ti={kick:new _e,punch:0};function Au(n,e){const t=n.clone().applyQuaternion(Ze.quaternion),i=new _e(1,0,0).applyQuaternion(xt.quaternion),r=new _e(0,1,0).applyQuaternion(xt.quaternion);ti.kick.x=Wc.clamp(ti.kick.x+t.dot(i)*e,-.5,.5),ti.kick.y=Wc.clamp(ti.kick.y+t.dot(r)*e,-.5,.5)}const rp=n=>{ti.punch=Math.max(ti.punch,n)};function Ru(){const n=innerWidth,e=innerHeight;Si.setSize(n,e),xt.aspect=n/e;const t=xt.aspect<1?1.25/Math.sqrt(xt.aspect):1,i=ca.clone().multiplyScalar(Fe+.3),r=at(ca,new _e(0,-1,0)).normalize();ua.copy(i).addScaledVector(ca,10.5*t).addScaledVector(r,7*t),xt.position.copy(ua),xt.lookAt(i.clone().addScaledVector(r,-2)),xt.updateProjectionMatrix(),Jc=ua.distanceTo(i),Es.position.copy(xt.position),Es.quaternion.copy(xt.quaternion);const s=100*Math.tan(Wc.degToRad(xt.fov/2)),a=s*xt.aspect;da.x=a,da.y=s;for(const o of Es.children)o.userData.at&&o.position.set(o.userData.at[0]*a,o.userData.at[1]*s,-100)}addEventListener("resize",Ru);Ru();const Af=new ir,Rf=new ir;function Cf(n,e,t){const i=n.clone().applyQuaternion(Ze.quaternion).normalize();Af.setFromUnitVectors(i,ca),Rf.identity().slerp(Af,1-Math.exp(-e*t)),Ze.quaternion.premultiply(Rf)}const Cu=n=>n.applyQuaternion(Ze.quaternion.clone().invert());let go=0,Yl=0;function xy(n){if(go+=n,Yl++,go<4)return;const e=Yl/go;go=0,Yl=0,e<48&&An.pixelRatio>1?(An.pixelRatio=Math.max(1,An.pixelRatio-.5),Si.setPixelRatio(An.pixelRatio),Ru()):e<45&&An.fx>.35?An.fx=Math.max(.35,An.fx-.3):e<40&&Cn.shadow.mapSize.x>512&&(Cn.shadow.mapSize.setScalar(Cn.shadow.mapSize.x/2),Cn.shadow.map?.dispose(),Cn.shadow.map=null)}function Nr(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},a={},o=n[0].morphTargetsRelative,l=new Vt;let c=0;for(let u=0;u<n.length;++u){const d=n[u];let f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const h in d.attributes){if(!i.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;s[h]===void 0&&(s[h]=[]),s[h].push(d.attributes[h]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const h in d.morphAttributes){if(!r.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[h]===void 0&&(a[h]=[]),a[h].push(d.morphAttributes[h])}if(e){let h;if(t)h=d.index.count;else if(d.attributes.position!==void 0)h=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,h,u),c+=h}}if(t){let u=0;const d=[];for(let f=0;f<n.length;++f){const h=n[f].index;for(let g=0;g<h.count;++g)d.push(h.getX(g)+u);u+=n[f].attributes.position.count}l.setIndex(d)}for(const u in s){const d=Pf(s[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(const u in a){const d=a[u][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<d;++f){const h=[];for(let v=0;v<a[u].length;++v)h.push(a[u][v][f]);const g=Pf(h);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Pf(n){let e,t,i,r=-1,s=0;for(let c=0;c<n.length;++c){const u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const a=new e(s),o=new Ln(a,t,i);let l=0;for(let c=0;c<n.length;++c){const u=n[c];if(u.isInterleavedBufferAttribute){const d=l/t;for(let f=0,h=u.count;f<h;f++)for(let g=0;g<t;g++){const v=u.getComponent(f,g);o.setComponent(f+d,g,v)}}else a.set(u.array,l);l+=u.count*t}return r!==void 0&&(o.gpuType=r),o}const Gr=new Ke;Ze.add(Gr);const Pu=[],Lu=[],My=(n,e)=>{for(const t of Lu)t.setMatrixAt(n,e),t.instanceMatrix.needsUpdate=!0};let Ho=null;function yy(n){const e=new Dt(1,An.level>1?38:30),t=e.attributes.position,i=[],r=new we,s=[],a=n.ground;for(let d=0;d<t.count;d++){const f=new _e().fromBufferAttribute(t,d).normalize(),h=cn(f);s.push(h);const g=Fe+(h<0?h-.2:h);t.setXYZ(d,f.x*g,f.y*g,f.z*g)}for(let d=0;d<t.count;d+=3){const f=(s[d]+s[d+1]+s[d+2])/3,h=Math.sin(d*12.9898)*43758.5%1*.06;f<0?r.set(a.bed).offsetHSL(0,0,-.12+f*.1):f<.12?r.set(a.shore):f<1.05?r.set(f<.5?a.low:a.mid):f<1.85?r.set(a.rock):r.set(a.cap),r.offsetHSL(0,0,h-.03);for(let g=0;g<3;g++)i.push(r.r,r.g,r.b)}e.setAttribute("color",new Je(i,3)),e.computeVertexNormals();const o=new Z(e,new ln({vertexColors:!0,flatShading:!0,roughness:.92}));o.castShadow=o.receiveShadow=!0,Gr.add(o);const l=n.liquid==="lava",c=n.liquid==="ice";Ho=new ln({color:n.liquidColor,transparent:!l,opacity:c?.95:.82,roughness:c?.3:.15,metalness:.1,flatShading:!0,emissive:l?16726536:0,emissiveIntensity:l?1.2:0});const u=new Z(new Dt(Fe,An.level>1?22:16),Ho);u.receiveShadow=!0,Gr.add(u)}function na(n,e,t,i,r,s){const a=new Bs(n,e,t),o=new ot,l=new ir,c=new ir;let u=0;for(let d=0;d<t*40&&u<t;d++){const f=Ht(Xt),h=cn(f);if(!i(h))continue;const g=r();l.setFromUnitVectors(rr,f).multiply(c.setFromAxisAngle(rr,Xt()*6.28));const v=f.clone().multiplyScalar(Fe+Math.max(h,0)-.05);o.compose(v,l,new _e(g,g,g)),a.setMatrixAt(u,o),s?.(f,v,g,u,l.clone()),u++}return a.count=u,a.castShadow=!0,a.receiveShadow=!0,Gr.add(a),a}const sp={pine(){const n=new Jt(.3,.5,6);n.translate(0,.45,0);const e=new Jt(.22,.42,6);e.translate(0,.74,0);const t=new pn(.05,.08,.26,5);return t.translate(0,.13,0),{leaf:Nr([n,e]),trunk:t}},snowPine(){return sp.pine()},cactus(){const n=new pn(.09,.11,.8,6);n.translate(0,.4,0);const e=(i,r,s)=>{const a=new pn(.05,.055,.3,5);return a.translate(0,.15,0),a.rotateZ(s),a.translate(i,r,0),a},t=new pn(.11,.12,.06,6);return t.translate(0,.03,0),{leaf:Nr([n,e(.08,.38,-1.1),e(-.08,.5,1),e(.32,.5,0),e(-.31,.6,0)]),trunk:t}},charred(){const n=(t,i,r)=>{const s=new Jt(.03,r,4);return s.translate(0,r/2,0),s.rotateZ(i),s.translate(0,t,0),s},e=new pn(.03,.09,.75,5);return e.translate(0,.37,0),{leaf:Nr([n(.4,-.8,.4),n(.5,.9,.34),n(.6,-.5,.28),n(.25,1.1,.3)]),trunk:e}}};function Sy(n){const{leaf:e,trunk:t}=sp[n.tree](),i=na(e,new ln({color:n.leaf,flatShading:!0,roughness:.8}),n.trees,a=>a>=.15&&a<=1,()=>.75+Xt()*.7,(a,o,l,c,u)=>Pu.push({d:a.clone(),p:o,s:l,i:c,q:u,tilt:0,tv:0,axis:new _e(1,0,0)})),r=new Bs(t,new ln({color:n.trunk,flatShading:!0}),n.trees),s=new ot;for(let a=0;a<i.count;a++)i.getMatrixAt(a,s),r.setMatrixAt(a,s);r.count=i.count,r.castShadow=!0,Gr.add(r),Lu.push(i,r)}function by(n,e="day"){const t=n.id==="ice"?new Jt(.14,.55,5):new Da(.22,0);n.id==="ice"&&t.translate(0,.22,0),na(t,new ln({color:n.rock,flatShading:!0,roughness:n.id==="ice"?.25:.95}),n.rocks,u=>u>.02&&u<1.4,()=>.6+Xt()*1.3);const i=new Mi(.06,0);i.scale(1,.4,1),i.translate(0,.06,0);const r=new Mi(.03,0);r.translate(0,.09,0);const s=i.attributes.position.count,a=r.attributes.position.count,[o,l]=n.flower;i.setAttribute("color",new Je(new Array(s).fill(0).flatMap(()=>o),3)),r.setAttribute("color",new Je(new Array(a).fill(0).flatMap(()=>l),3));const c=na(Nr([i,r]),new ln({vertexColors:!0,flatShading:!0,emissive:n.liquid==="lava"?16730640:0,emissiveIntensity:.8}),n.flowers,u=>u>.14&&u<.9,()=>.8+Xt()*.6);if(c.castShadow=!1,n.id==="desert"&&e==="night"&&(c.material.emissive.set(16734880),c.material.emissiveIntensity=.9),n.id==="grass"&&e==="night"){const u=new pt(.09,7,4,0,Math.PI*2,0,Math.PI*.5);u.translate(0,.1,0);const d=new pn(.025,.035,.11,5);d.translate(0,.05,0);const f=Nr([u,d]);na(f,new ln({color:8057087,emissive:2808063,emissiveIntensity:1.6,flatShading:!0}),60,h=>h>.12&&h<.8,()=>.8+Xt()*.9).castShadow=!1}if(n.id==="desert"){const u=new pn(.035,.035,.5,5);u.rotateZ(Math.PI/2),u.translate(0,.04,0);const d=new pt(.06,5,4);d.translate(.25,.04,0);const f=d.clone();f.translate(-.5,0,0);const h=new Dt(.14,0);h.scale(1,.8,1.2),h.translate(.5,.08,.2),na(Nr([u,d,f,h].map(g=>g.index?g.toNonIndexed():g)),new ln({color:15919312,flatShading:!0,roughness:.9}),16,g=>g>.08&&g<.9,()=>.7+Xt()*.6)}}const wy={day:n=>n,dusk:n=>({...n,sky:Ci(n.sky,3807288,.6),atmo:Ci(n.atmo,16747098,.5),hemi:[Ci(n.hemi[0],16758928,.45),n.hemi[1],n.hemi[2]*.9],sun:[Ci(n.sun[0],16751194,.55),n.sun[1]*.9]}),night:n=>({...n,sky:Ci(n.sky,132110,.6),atmo:Ci(n.atmo,4872959,.45),hemi:[Ci(n.hemi[0],9085183,.5),Ci(n.hemi[1],1052720,.5),n.hemi[2]*.6],sun:[Ci(n.sun[0],11057407,.6),n.sun[1]*.5]})},Lf=["day","dusk","day","night","day","dusk","night","dusk"];function Ci(n,e,t){return new we(n).lerp(new we(e),t).getHex()}const Ey=n=>Lf[n%Lf.length];let Gt={id:null,variant:0};function ap(n,e=0,t="day"){Gt={id:n,variant:e,light:t},Gr.traverse(r=>{r.isMesh&&(r.geometry.dispose(),r.material.dispose(),r.dispose?.())}),Gr.clear(),Pu.length=0,Lu.length=0,Zh(n,e);const i=It;gy(wy[t](i)),yy(i),Sy(i),by(i,t)}function Ty(n){It.liquid==="lava"&&Ho&&(Ho.emissiveIntensity=(1.15+Math.sin(n*2.2)*.3)*(Gt.light==="night"?1.45:1))}ap("grass");const _={state:"title",mode:"play",wave:0,score:0,graceT:0,waveClearing:!1,endless:!1,ts:1,hitstop:0,shake:0,slowT:0,combo:0,comboT:0,bestCombo:0,ult:0,stamina:0,enemies:[],warnings:[],crystals:[],crystalT:6,shots:[],hazards:[],level:null,waves:[],tier:1,hpMul:1,storm:0,runCrystals:0,passives:new Set,ultKind:"line",undyingUsed:!1,tut:null,runTime:0,hurtCount:0,boss:null,runId:0,move:{sx:0,sy:0,m:0}};let fa=[];const Hr=(n,e)=>{fa.push({t:n,fn:e})};function Ay(n){if(!fa.length)return;const e=[];fa=fa.filter(t=>(t.t-=n)>0||(e.push(t),!1)),e.forEach(t=>t.fn())}const op=()=>{fa=[]},ia=new Map,qt=(n,e)=>(ia.has(n)||ia.set(n,new Set),ia.get(n).add(e),()=>ia.get(n).delete(e)),tn=(n,e)=>ia.get(n)?.forEach(t=>t(e)),Uo=ee("combo"),_o=ee("tag"),vo=ee("banner"),Df=ee("flash"),Ry=ee("jumpBtn"),If=ee("ultBtn");let lp=[];const xo=ee("dots"),Uf=ee("lives"),Cy='<svg viewBox="0 0 24 22"><path d="M12 21 2.6 11.7A5.6 5.6 0 0 1 12 4.1a5.6 5.6 0 0 1 9.4 7.6z"/></svg>';function Py(n){ee("stam").innerHTML="<i><b></b></i>".repeat(n),lp=[...document.querySelectorAll("#stam b")]}function or(n){ee("score").textContent=_.score.toLocaleString(),ee("runGems").textContent=_.runCrystals?`◆ ${_.runCrystals}`:"";const e=Math.max(0,n.hp);if(Uf.innerHTML=Array.from({length:We.maxHp},(r,s)=>`<i class="${s<e?"":"off"}">${Cy}</i>`).join(""),Uf.setAttribute("aria-label",`生命 ${e} / ${We.maxHp}`),_.tut){xo.innerHTML='<span class="lbl">教學</span>';return}if(_.endless){xo.innerHTML=`<span class="lbl">無盡</span><b>${_.wave}</b>`;return}const t=_.waves.length,i=_.level?.boss;xo.innerHTML=Array.from({length:t},(r,s)=>`<i class="${s+1<_.wave?"done":s+1===_.wave?"now":""}${i&&s===t-1?" boss":""}"></i>`).join(""),xo.setAttribute("aria-label",`第 ${_.wave} / ${t} 波`)}function Nf(){_.combo<2||(Uo.innerHTML=`${_.combo}<small>COMBO</small>`,Uo.style.opacity=1,Uo.animate([{transform:"scale(1.3)"},{transform:"scale(1)"}],{duration:140}))}let Ff=0;function ct(n,e){_o.textContent=n,_o.style.color=e||"var(--ink)",_o.style.opacity=1,clearTimeout(Ff),Ff=setTimeout(()=>_o.style.opacity=0,800)}function lr(n,e=""){vo.innerHTML=n+(e?`<small>${e}</small>`:""),vo.classList.remove("show"),vo.offsetWidth,vo.classList.add("show")}function Us(n,e){Df.style.background=e,Df.animate([{opacity:n},{opacity:0}],{duration:380})}const _s=ee("coach");function Du(n,e,t,i){if(!t){_s.hidden=!0;return}_s.hidden=!1,_s.querySelector(".n").textContent=`${n} / ${e}`,_s.querySelector("b").textContent=t,_s.querySelector("p").innerHTML=i,_s.animate([{transform:"translateX(-50%) scale(.92)",opacity:.3},{transform:"translateX(-50%) scale(1)",opacity:1}],{duration:220,easing:"ease-out"})}const Vo=ee("boss"),Ly=Vo.querySelector("i"),Dy=Vo.querySelector("span");let Of="";function Iy(n){const e=_.state==="play"&&n?"alert":"";e!==Of&&(Ry.classList.toggle("alert",!!e),Of=e),lp.forEach((i,r)=>i.style.transform=`scaleX(${Yt(_.stamina-r,0,1)})`),If.style.setProperty("--p",_.ult),If.classList.toggle("ready",_.ult>=At.min&&_.mode==="play"),ee("vignette").style.opacity=_.mode==="ultDraw"||_.slowT>0?1:0,_.comboT<=0&&_.combo&&(_.combo=0,Uo.style.opacity=0);const t=_.boss&&!_.boss.dead?_.boss:null;Vo.hidden=!t,t&&(Ly.style.transform=`scaleX(${Yt(t.hp/t.maxHp,0,1)})`,Dy.textContent=t.script.name,Vo.classList.toggle("armored",!!t.armored))}const Bf=ee("nums"),Mo=[];let Uy=0;function Ny(n,e,t=""){if(!Bf)return;const i=n.clone().applyQuaternion(Ze.quaternion).project(xt);if(i.z>1)return;if(Mo.length<12){const s=document.createElement("i");Bf.appendChild(s),Mo.push(s)}const r=Mo[Uy++%Mo.length];r.textContent=e,r.className=t,r.style.left=(i.x+1)/2*innerWidth+(Math.random()-.5)*24+"px",r.style.top=(1-i.y)/2*innerHeight+"px",r.getAnimations().forEach(s=>s.cancel()),r.animate([{transform:"translate(-50%,-50%) scale(.6)",opacity:1},{transform:"translate(-50%,-110%) scale(1.15)",opacity:1,offset:.25},{transform:"translate(-50%,-220%) scale(1)",opacity:0}],{duration:t==="big"?750:600,easing:"cubic-bezier(.2,.8,.3,1)",fill:"forwards"})}let Kt=null,Fr=null;const zt={volume:0,lastVol:.6};try{const n=localStorage.getItem("slasharena-vol");n!==null&&(zt.volume=Yt(+n||0,0,1))}catch{}function Hn(){if(!(zt.volume<=0))try{Kt||(Kt=new(window.AudioContext||window.webkitAudioContext),Fr=Kt.createGain(),Fr.connect(Kt.destination)),Fr.gain.value=zt.volume,Kt.state==="suspended"&&Kt.resume()}catch{Kt=null}}function Fy(n){Fr&&(Fr.gain.value=n)}function St(n,e,t="triangle",i=.15,r=1){if(!Kt||zt.volume<=0)return;const s=Kt.currentTime,a=Kt.createOscillator(),o=Kt.createGain();a.type=t,a.frequency.setValueAtTime(n,s),r!==1&&a.frequency.exponentialRampToValueAtTime(n*r,s+e),o.gain.setValueAtTime(i,s),o.gain.exponentialRampToValueAtTime(.001,s+e),a.connect(o).connect(Fr),a.start(s),a.stop(s+e+.02)}let yo=null;function yn(n,e,t,i){if(!Kt||zt.volume<=0)return;const r=Kt.currentTime;if(!yo){yo=Kt.createBuffer(1,Kt.sampleRate,Kt.sampleRate);const l=yo.getChannelData(0);for(let c=0;c<l.length;c++)l[c]=Math.random()*2-1}const s=Kt.createBufferSource(),a=Kt.createBiquadFilter(),o=Kt.createGain();s.buffer=yo,a.type="bandpass",a.Q.value=1.2,a.frequency.setValueAtTime(t,r),a.frequency.exponentialRampToValueAtTime(i,r+n),o.gain.setValueAtTime(e,r),o.gain.exponentialRampToValueAtTime(.001,r+n),s.connect(a).connect(o).connect(Fr),s.start(r),s.stop(r+n)}const Sa={on:!0};try{Sa.on=localStorage.getItem("slasharena-vib")!=="0"}catch{}const xr=n=>{try{Sa.on&&navigator.vibrate&&(!navigator.userActivation||navigator.userActivation.hasBeenActive)&&navigator.vibrate(n)}catch{}},Oy=[0,2,4,7,9],qn=(n=.08)=>1+(Math.random()-.5)*n,Ue={hit(n,e){const t=Oy[n%5]+12*Math.floor(n/5),i=392*2**(Math.min(t,36)/12)*qn(.03);St(i,.14,"square",.06),yn(.07,.16,5e3*qn(),1200),St(e?70:95,e?.18:.1,"sine",e?.3:.18,.5),xr(e?30:15)},kill(n){St(140*qn()*(n?.6:1),n?.4:.18,"sine",n?.35:.25,.4),yn(n?.35:.12,n?.25:.12,2500*qn(),n?150:400),n&&xr([30,20,60])},dash(){yn(.16,.14,1500*qn(.2),6e3)},clang(){St(520*qn(),.2,"square",.07,.7),yn(.1,.2,3e3,2e3),xr(30)},thud(){St(160*qn(),.12,"square",.06,.6),yn(.08,.15,1200,500),xr(20)},ding(){St(1568,.5,"sine",.14),St(2349,.4,"sine",.07),yn(.06,.2,8e3,4e3),xr([20,30,40])},jump(){St(440,.16,"triangle",.07,1.8)},land(){yn(.08,.08,800*qn(.2),300)},warn(){St(880,.06,"sine",.04)},roll(){yn(.3,.12,300,120)},slam(){yn(.4,.3,900*qn(.2),80),St(70*qn(),.3,"sawtooth",.12,.4)},hurt(){St(220*qn(),.3,"sawtooth",.12,.5),yn(.2,.2,1800,300),xr(80)},pickup(){[0,4,7].forEach((n,e)=>setTimeout(()=>St(880*2**(n/12),.15,"triangle",.07),e*50))},ult(){yn(.6,.2,200,2e3),St(110,.6,"sawtooth",.08,2)},draw(n){St(n==="down"?1046:n==="up"?440:784,.05,"sine",.03)},clear(){[0,7,12,16].forEach((n,e)=>setTimeout(()=>St(392*2**(n/12),.3,"square",.05),e*90))},win(){[0,4,7,12,16,19,24].forEach((n,e)=>setTimeout(()=>St(392*2**(n/12),.35,"triangle",.07),e*110))},charge(){St(110,.55,"sawtooth",.06,1.9),yn(.5,.06,300,1400)},swing(){yn(.28,.3,600,3500),St(90,.22,"sawtooth",.12,.5),xr(40)},whirl(){yn(.18,.14,900*qn(.2),3200)},empty(){St(180,.1,"square",.04)},ui(){St(660,.05,"sine",.04)},step(){St(1320,.12,"sine",.05),St(1760,.12,"sine",.03)}},cp=ee("sand");let qi="calm",Tr=0;function up(){qi="calm",Tr=Ii.stormCalm*.6,_.storm=0,ip(0),cp.style.opacity=0}function By(n){qi="storm",Tr=n,ct("沙暴來襲！","var(--warn)")}function ky(n){It.storm&&_.state==="play"&&!_.tut&&(Tr-=n,Tr<=0&&(qi==="calm"?(qi="warn",Tr=Ii.stormWarn,ct("沙暴要來了，靠近一點看清楚預警","var(--warn)"),Ue.warn()):qi==="warn"?(qi="storm",Tr=Ii.stormLen):(qi="calm",Tr=Ii.stormCalm)));const e=qi==="storm"&&It.storm?1:0;Math.abs(_.storm-e)<.002&&_.storm===e||(_.storm+=(e-_.storm)*(1-Math.exp(-n*2.5)),Math.abs(_.storm-e)<.003&&(_.storm=e),ip(_.storm),cp.style.opacity=_.storm)}const Ua=900,Zo=[],yi=new Bs(new nr(.15,.15,.15),new gt({color:16777215}),Ua),Li=new Bt,Iu=new we;for(let n=0;n<Ua;n++)Zo.push({p:new _e,v:new _e,life:0,max:1,shown:!1,g:0,s:1}),Li.scale.setScalar(0),Li.updateMatrix(),yi.setMatrixAt(n,Li.matrix),yi.setColorAt(n,Iu.set(16777215));yi.frustumCulled=!1;Ze.add(yi);let ji=0;function lt(n,e,t,i=6,r=.6){for(let s=0;s<t;s++){const a=Zo[ji];yi.setColorAt(ji,Iu.set(e)),ji=(ji+1)%Ua,a.p.copy(n),a.v.copy(Ht()).multiplyScalar(i*(.3+Math.random())),a.max=a.life=r*(.5+Math.random()*.7),a.shown=!0,a.g=0,a.s=1}yi.instanceColor.needsUpdate=!0}const Ar=new _e;function jt(n,e,t,i,r=4,s=.6,a=14,o=.6,l=1,c=null){for(let u=0;u<i;u++){const d=Zo[ji];yi.setColorAt(ji,Iu.set(t)),ji=(ji+1)%Ua,Ar.copy(Ht()),Ar.addScaledVector(e,-Ar.dot(e)).normalize(),c&&Ar.lerp(c,.7).normalize(),d.p.copy(n),d.v.copy(e).multiplyScalar(r*(.6+Math.random()*.6)).addScaledVector(Ar,r*o*Math.random()),d.max=d.life=s*(.6+Math.random()*.6),d.shown=!0,d.g=a,d.s=l*(.7+Math.random()*.6)}yi.instanceColor.needsUpdate=!0}function zy(n){let e=!1;for(let t=0;t<Ua;t++){const i=Zo[t];if(i.life>0)i.life-=n,i.p.addScaledVector(i.v,n),i.g?(Ar.copy(i.p).normalize(),i.v.addScaledVector(Ar,-i.g*n),i.v.multiplyScalar(Math.exp(-n*1.2))):i.v.multiplyScalar(Math.exp(-n*3)),Li.position.copy(i.p),Li.rotation.set(i.life*9,i.life*7,0),Li.scale.setScalar(Math.max(0,i.life/i.max)*i.s);else if(i.shown)i.shown=!1,Li.scale.setScalar(0);else continue;Li.updateMatrix(),yi.setMatrixAt(t,Li.matrix),e=!0}e&&(yi.instanceMatrix.needsUpdate=!0)}function Gy(n,e,t){const i=new _e;for(let r=0;r<=8;r++)i.lerpVectors(n,e,r/8).add(Ht().multiplyScalar(.12)),lt(i,t,1,.6,.3)}const ra=[];function Vr(n,e,t,i=1,r=.32,s=5){const a=new Z(new ar(.22*i,.36*i,32),new gt({color:t,transparent:!0,opacity:1,side:Zt,depthWrite:!1,blending:Br}));a.position.copy(n),a.quaternion.setFromUnitVectors(new _e(0,0,1),e),a.renderOrder=4,Ze.add(a),ra.push({m:a,t:0,dur:r,grow:s})}function Hy(n){for(const e of ra){e.t+=n;const t=e.t/e.dur;e.m.scale.setScalar(1+t*e.grow),e.m.material.opacity=Math.max(0,1-t),t>=1&&(Ze.remove(e.m),e.m.geometry.dispose(),e.m.material.dispose(),e.dead=!0)}for(let e=ra.length-1;e>=0;e--)ra[e].dead&&ra.splice(e,1)}const ba=220,dp=n=>{const e=new Bs(new Mi(.06,0),new gt({color:16777215,transparent:n,blending:n?Br:Ur,depthWrite:!n,fog:!1}),ba),t=new ot().makeScale(0,0,0);for(let i=0;i<ba;i++)e.setMatrixAt(i,t);return e.frustumCulled=!1,e.count=0,Ze.add(e),e},ni=dp(!1),Qi=dp(!0),Ts=new Bs(new Dt(.26,0),new ln({color:10122308,flatShading:!0,roughness:1,wireframe:!0}),4);Ts.frustumCulled=!1;Ts.count=0;Ze.add(Ts);const Na=new Z(new zs(140,34,1,1),new xi({transparent:!0,depthWrite:!1,blending:Br,fog:!1,uniforms:{t:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:`varying vec2 vUv; uniform float t;
    void main(){
      float x = vUv.x, wave = sin(x * 9. + t * .6 + sin(x * 3. - t * .4) * 2.) * .12;
      float y = vUv.y - .5 - wave, band = exp(-y * y * 30.) * (.55 + .45 * sin(x * 40. + t * 1.3));
      float edge = smoothstep(0., .15, x) * smoothstep(1., .85, x);
      vec3 c = mix(vec3(.2, 1., .6), vec3(.5, .4, 1.), smoothstep(-.1, .25, y));
      gl_FragColor = vec4(c * band * edge * .55, 1.);
    }`}));Na.userData.at=[0,.62];Na.visible=!1;Es.add(Na);typeof window<"u"&&window.dispatchEvent(new Event("resize"));const Uu={butterfly:{layer:ni,alt:[.35,1.4],speed:1.1,colors:[16751317,16773242,16777215,10149887],size:1.6},seed:{layer:ni,alt:[.5,3],speed:.5,colors:[16777215],size:.7},firefly:{layer:Qi,alt:[.3,1.6],speed:.45,colors:[14221162,16773258],size:1.1},warm:{layer:Qi,alt:[.4,2.4],speed:.3,colors:[16756848,16767136],size:.7},snow:{layer:ni,alt:[1,8],speed:1.3,fall:!0,colors:[16777215,15267071],size:.8},dust:{layer:ni,alt:[.1,1.2],speed:1.8,colors:[15255696,14200944],size:.7},ember:{layer:Qi,alt:[0,.4],speed:1,rise:!0,colors:[16742954,16756800,16730640],size:.8},ash:{layer:ni,alt:[1,7],speed:.6,fall:!0,colors:[6972006,9077382],size:.8}},Vy={grass:{day:{butterfly:12,seed:26},dusk:{butterfly:6,seed:16,warm:18},night:{firefly:46,seed:8}},ice:{day:{snow:110},dusk:{snow:120,warm:10},night:{snow:170}},desert:{day:{dust:40},dusk:{dust:30,warm:16},night:{dust:20,firefly:12}},volcano:{day:{ember:60,ash:50},dusk:{ember:80,ash:50},night:{ember:110,ash:40}}},ci=[],Bn=new Bt,Wy=new we,No=new _e;let fp="",Mr=0,wn=new _e(0,0,1),kf=18,zf=0,Fo=[];function hp(n,e){const t=Uu[n.kind],i=nt(wn,at(wn,Ht()).normalize(),Math.random()*9);if(n.alt=t.alt[0]+Math.random()*(t.alt[1]-t.alt[0]),!e&&t.fall&&(n.alt=t.alt[1]),t.rise){for(let r=0;r<6;r++){const s=nt(wn,at(wn,Ht()).normalize(),Math.random()*9);if(cn(s)<.05){i.copy(s);break}}n.life=2+Math.random()*2.5}n.d=i,n.v=at(i,Ht()).normalize().multiplyScalar(t.speed*(.4+Math.random()*.6)),n.ph=Math.random()*6.28}function Xy(){fp=`${Gt.id}/${Gt.variant}/${Gt.light}`,ci.length=0;const n=Vy[Gt.id]?.[Gt.light]||{};for(const[r,s]of Object.entries(n))for(let a=0;a<s;a++){const o=Uu[r],l={kind:r,layer:o.layer,color:o.colors[a%o.colors.length],size:o.size*(.7+Math.random()*.6),idx:0};hp(l,!0),ci.push(l)}let e=0,t=0;const i=new ot().makeScale(0,0,0);for(let r=0;r<ba;r++)ni.setMatrixAt(r,i),Qi.setMatrixAt(r,i);for(const r of ci)r.idx=r.layer===ni?e++:t++,r.layer.setColorAt(r.idx,Wy.set(r.color));for(const r of[ni,Qi])r.instanceColor&&(r.instanceColor.needsUpdate=!0);Fo=Gt.id==="desert"?Array.from({length:3},()=>({d:nt(wn,at(wn,Ht()).normalize(),Math.random()*8),dir:at(wn,Ht()).normalize(),roll:0,q:new ki})):[],Na.visible=Gt.id==="ice"&&Gt.light==="night",No.copy(at(wn,Ht())).normalize()}function qy(n){`${Gt.id}/${Gt.variant}/${Gt.light}`!==fp&&Xy(),Mr+=n,Na.material.uniforms.t.value=Mr,wn.copy(Cu(ca.clone())).normalize();const e=Math.floor(ci.length*An.fx);for(let t=0;t<ci.length;t++){const i=ci[t],r=Uu[i.kind];if(t>=e)continue;(i.kind==="butterfly"||i.kind==="firefly")&&Math.random()<n*1.2&&i.v.copy(at(i.d,i.v.clone().add(Ht().multiplyScalar(r.speed)))).setLength(r.speed),(i.kind==="dust"||i.kind==="seed")&&i.v.lerp(at(i.d,No).setLength(r.speed),n*.5),i.d=nt(i.d,i.v,n),i.v.copy(at(i.d,i.v)),r.fall&&(i.alt-=n*r.speed*(i.kind==="snow"?.9:.5)),r.rise&&(i.alt+=n*r.speed,i.life-=n),i.kind==="seed"&&(i.alt+=Math.sin(Mr*.8+i.ph)*n*.2);const s=an(i.d);(i.alt<0||r.rise&&i.life<=0||i.d.angleTo(wn)*Fe>11)&&hp(i,!1);let a=i.size;i.kind==="butterfly"&&(a*=.5+Math.abs(Math.sin(Mr*16+i.ph))*.7),i.kind==="firefly"&&(a*=Math.max(0,Math.sin(Mr*2.2+i.ph))**2*1.4),i.kind==="ember"&&(a*=Math.min(1,i.life)),Bn.position.copy(i.d).multiplyScalar(Fe+Math.max(s,0)+i.alt),Bn.rotation.set(Mr*2+i.ph,Mr*3,0),Bn.scale.set(a*(i.kind==="butterfly"?1.6:1),a*(i.kind==="butterfly"?.3:1),a),Bn.updateMatrix(),i.layer.setMatrixAt(i.idx,Bn.matrix)}for(let t=e;t<ci.length;t++){const i=ci[t];Bn.scale.setScalar(0),Bn.updateMatrix(),i.layer.setMatrixAt(i.idx,Bn.matrix)}if(ni.count=ci.some(t=>t.layer===ni)?ba:0,Qi.count=ci.some(t=>t.layer===Qi)?ba:0,ni.instanceMatrix.needsUpdate=Qi.instanceMatrix.needsUpdate=!0,Ts.count=Fo.length,Fo.forEach((t,i)=>{t.d=nt(t.d,t.dir,n*2.4),t.dir=at(t.d,t.dir).normalize(),t.roll+=n*9,(t.d.angleTo(wn)*Fe>11||cn(t.d)<0)&&(t.d=nt(wn,at(wn,No.clone().negate()).normalize(),9),t.dir=at(t.d,No).normalize());const r=an(t.d),s=Math.abs(Math.sin(t.roll*.5))*.25;Bn.position.copy(t.d).multiplyScalar(Fe+r+.26+s),Bn.quaternion.setFromAxisAngle(new _e().crossVectors(t.d,t.dir).normalize(),t.roll),Bn.scale.setScalar(1),Bn.updateMatrix(),Ts.setMatrixAt(i,Bn.matrix)}),Fo.length&&(Ts.instanceMatrix.needsUpdate=!0),Gt.id==="volcano"){const t=mi.filter(i=>i.type==="m");if((zf-=n)<=0){zf=.18/Math.max(An.fx,.35);for(const i of t)i.c.angleTo(wn)<1.3&&jt(i.c.clone().multiplyScalar(Fe+cn(i.c)*.8+.2),i.c,Math.random()<.2?16738858:4867144,1,.9,2.6,-.6,.4,2.4)}if((kf-=n)<=0){kf=22+Math.random()*14;const i=t.filter(r=>r.c.angleTo(wn)<1.4).sort(()=>Math.random()-.5)[0];if(i){const r=i.c.clone().multiplyScalar(Fe+cn(i.c)*.8+.2);jt(r,i.c,16734736,30,7,1.6,7,.5,2),jt(r,i.c,3813942,24,3,2.6,-.8,.7,3),_.state==="play"&&(_.shake=Math.max(_.shake,.3),Ue.slam())}}}}const ys=new Ke,Ss=new Ke,Nu=new Ke,Wo=new ln({color:5030655,emissive:671626,emissiveIntensity:.45,roughness:.1,metalness:0}),pp=[];for(let n=0;n<=40;n++){const e=Math.PI*(1-n/40);pp.push(new Oe(Math.max(.001,Math.sin(e)*Math.sin(e/2)**1.1*.62),(Math.cos(e)+1)*.5*1.02))}const Gn=new Z(new wu(pp,40),Wo);Gn.castShadow=!0;const xs=new gt({color:1316922}),Rr=(n,e,t,i)=>(n.position.set(e,t,i),n.lookAt(e*3,t,i*3+.01),Gn.add(n),n),mp=[],gp=[],_p=[],vp=[],xp=[];for(const n of[-1,1]){const e=new Z(new pt(.085,14,12),xs);e.position.set(n*.14,.5,.39),e.scale.set(1,1.3,.6);const t=new Z(new pt(.034,8,6),new gt({color:16777215}));t.position.set(.028,.04,.06),e.add(t);const i=new Z(new pt(.014,6,5),new gt({color:16777215}));i.position.set(-.03,-.035,.06),e.add(i),Gn.add(e),mp.push(e);const r=Rr(new Z(new nr(.24,.1,.05),Wo),n*.14,.585,.385);r.rotateZ(n*.42),gp.push(r);const s=new Ke;for(const l of[-1,1]){const c=new Z(new nr(.11,.026,.02),xs);c.position.set(0,l*.028,0),c.rotation.z=-n*l*.5,s.add(c)}_p.push(Rr(s,n*.14,.5,.405)),vp.push(Rr(new Z(new Fi(.06,.015,6,14,Math.PI),xs),n*.14,.48,.41));const a=new Ke;a.add(new Z(new Fi(.065,.011,6,18),xs),new Z(new Fi(.028,.011,6,12),xs)),xp.push(Rr(a,n*.14,.5,.405)),Rr(new Z(new bu(.065,16),new gt({color:16743080,transparent:!0,opacity:.9})),n*.27,.37,.37).scale.set(1.3,.75,1)}const Mp=Rr(new Z(new Fi(.035,.011,6,14,Math.PI),xs),0,.4,.445);Mp.rotateZ(Math.PI);const Qc=Rr(new Z(new pt(.05,12,8),new gt({color:10101574})),0,.39,.44);Qc.scale.set(1.1,.8,.35);const Jo=new Z(new pt(.1,12,8),new gt({color:16777215,transparent:!0,opacity:.85}));Jo.position.set(-.16,.6,.24);Jo.scale.set(.55,1,.4);Jo.rotation.z=.5;Gn.add(Jo);Nu.add(Gn);const kn=new Z(new ar(.72,1.02,24,1,-Math.PI/2-Math.PI/3,Math.PI*2/3),new gt({color:5999871,transparent:!0,opacity:.85,side:Zt,depthWrite:!1}));kn.rotation.x=-Math.PI/2;kn.position.y=.3;kn.visible=!1;Ss.add(Nu,kn);const Fu=new Z(new ar(.5,.58,32),new gt({color:4843263,transparent:!0,opacity:.55,side:Zt}));Fu.rotation.x=-Math.PI/2;Fu.position.y=.05;ys.add(Ss,Fu);Ze.add(ys);let yp="idle",Oo=0,So=2;function ai(n,e=0){yp=n,Oo=e}function $y(n,e){Oo>0&&(Oo-=n);const t=Oo>0?yp:e;So-=n;const i=So<.12&&(t==="idle"||t==="determined");So<0&&(So=2+Math.random()*3);const r=t==="idle"||t==="determined";mp.forEach(s=>{s.visible=r,s.scale.y=i?.15:1.3}),gp.forEach(s=>s.visible=t==="determined"),_p.forEach(s=>s.visible=t==="hurt"),vp.forEach(s=>s.visible=t==="happy"),xp.forEach(s=>{s.visible=t==="dizzy",s.rotation.z+=n*8}),Mp.visible=t==="idle"||t==="determined",Qc.visible=t==="hurt"||t==="happy"||t==="dizzy",Qc.scale.y=t==="hurt"?.9:t==="dizzy"?.5:.7}const jl=Gn.geometry.attributes.position.array.slice(),Yy=1.02;Sp(Gn.geometry);const on={gx:0,gz:0,vx:0,vz:0,touching:new Set,t:0},Kl=new Set,Zl=new _e,Jl=new _e,Gf=new ot,Hf=new ir,jy=new _e,Vf=(n,e)=>Gn.worldToLocal(Ze.localToWorld(e.copy(n)));function Ky(n,e){Ze.updateMatrixWorld(!0),on.t+=n;const t=e.d,i=an(t),[r,s]=Ia(t),a=(an(nt(t,r,.3))-i)/.3,o=(an(nt(t,s,.3))-i)/.3,l=r.multiplyScalar(-a).addScaledVector(s,-o);Vf(e.p,Zl),Vf(e.p.clone().add(l),Jl);let c=Jl.x-Zl.x,u=Jl.z-Zl.z;const d=Math.hypot(c,u),f=e.air>0?.25:1;d>f&&(c*=f/d,u*=f/d),on.vx+=(c-on.gx)*90*n,on.vz+=(u-on.gz)*90*n,on.vx*=Math.exp(-n*6),on.vz*=Math.exp(-n*6),on.gx+=on.vx*n,on.gz+=on.vz*n;for(const b of Pu){const M=b.d.angleTo(t)*Fe;if(M<.62?on.touching.has(b)||(on.touching.add(b),yn(.18,.05,2600,700)):on.touching.delete(b),M<1.1){const A=at(b.d,new _e().subVectors(b.d,t));A.lengthSq()>1e-8&&b.axis.crossVectors(b.d,A.normalize()),Kl.add(b)}if(!Kl.has(b))continue;const C=M<1.1?.55*(1-M/1.1):0;b.tv+=(C-b.tilt)*140*n,b.tv*=Math.exp(-n*5),b.tilt+=b.tv*n,Hf.setFromAxisAngle(b.axis,b.tilt).multiply(b.q),Gf.compose(b.p,Hf,jy.setScalar(b.s)),My(b.i,Gf),M>=1.1&&Math.abs(b.tilt)<.002&&Math.abs(b.tv)<.002&&Kl.delete(b)}const h=on.gx,g=on.gz,v=Math.hypot(h,g),m=(e.moving||0)*.035+(e.state==="dash"?.03:0),p=Gn.geometry.attributes.position,T=p.array;for(let b=0;b<T.length;b+=3){let M=jl[b],C=jl[b+1],A=jl[b+2];const L=Math.max(0,1-C/(Yy*.58)),D=L*L,w=Math.hypot(M,A);if(w>1e-4){const S=1+.6*((M*h+A*g)/w)*D+m*(.4+.6*D)*Math.sin(on.t*14+C*9);M*=S,A*=S}M+=h*.24*D,A+=g*.24*D,C*=1-.1*v*(1-D),T[b]=M,T[b+1]=C,T[b+2]=A}p.needsUpdate=!0,Gn.geometry.computeVertexNormals(),Sp(Gn.geometry)}function Sp(n){const e=n.attributes.normal.array,t=41,i=40,r=new _e;for(let s=0;s<t;s++){const a=s*3,o=(i*t+s)*3;r.set(e[a]+e[o],e[a+1]+e[o+1],e[a+2]+e[o+2]).normalize(),e[a]=e[o]=r.x,e[a+1]=e[o+1]=r.y,e[a+2]=e[o+2]=r.z}for(const s of[0,t-1]){r.set(0,0,0);for(let a=0;a<=i;a++){const o=(a*t+s)*3;r.x+=e[o],r.y+=e[o+1],r.z+=e[o+2]}r.normalize();for(let a=0;a<=i;a++){const o=(a*t+s)*3;e[o]=r.x,e[o+1]=r.y,e[o+2]=r.z}}n.attributes.normal.needsUpdate=!0}function Zy(n,e,t,i,r){if(n.kind==="line"){const o=n.L*e/i,l=-n.w+2*n.w*t/r;return{d:n.c.clone().multiplyScalar(Fe).addScaledVector(n.dir,o).addScaledVector(n.s,l).normalize(),u:o/n.L}}n.e1||([n.e1,n.e2]=Ia(n.c));const s=t/r*Math.PI*2,a=n.kind==="circle"?n.r*e/i:n.r1+(n.r2-n.r1)*e/i;return{d:n.c.clone().multiplyScalar(Fe).addScaledVector(n.e1,Math.cos(s)*a).addScaledVector(n.e2,Math.sin(s)*a).normalize(),u:n.kind==="circle"?a/n.r:(a-n.r1)/(n.r2-n.r1)}}function wa(n,e,t=.3){if(n.kind==="line"){const r=e.clone().sub(n.c).multiplyScalar(Fe),s=r.dot(n.dir),a=r.dot(n.s);return s>=-t&&s<=n.L+t&&Math.abs(a)<=n.w+t}const i=n.c.angleTo(e)*Fe;return n.kind==="circle"?i<=n.r+t:i>=n.r1-t&&i<=n.r2+t}function yr(n,e,t,i){return{kind:"line",c:n.clone(),dir:e.clone(),s:new _e().crossVectors(n,e),L:t,w:i}}const Jy="attribute float u; varying float vU; void main(){ vU=u; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",Qy="uniform float prog; uniform float flash; varying float vU; void main(){ vec3 c=mix(vec3(1.,.82,.23),vec3(1.,.22,.18),flash); float a = vU<=prog ? .62 : .2; if (vU>.97) a=.85; gl_FragColor=vec4(c,a); }";function bp(n){const e=n.kind==="line"?14:10,t=n.kind==="line"?4:32,i=[],r=[],s=[];for(let o=0;o<=e;o++)for(let l=0;l<=t;l++){const{d:c,u}=Zy(n,o,l,e,t),d=c.clone().multiplyScalar(Fe+an(c)+.09);i.push(d.x,d.y,d.z),r.push(o===e?1:u*.96)}for(let o=0;o<e;o++)for(let l=0;l<t;l++){const c=o*(t+1)+l,u=c+t+1;s.push(c,u,c+1,u,u+1,c+1)}const a=new Vt;return a.setAttribute("position",new Je(i,3)),a.setAttribute("u",new Je(r,1)),a.setIndex(s),a}function Ou(n,e,t,i=!1){const r=bp(n);return n.mat=new xi({vertexShader:Jy,fragmentShader:Qy,uniforms:{prog:{value:0},flash:{value:0}},transparent:!0,depthWrite:!1,side:Zt}),n.mesh=new Z(r,n.mat),n.mesh.renderOrder=1,Ze.add(n.mesh),Object.assign(n,{enemy:e,t:0,dur:t,free:i}),i||(e.warn=n),_.warnings.push(n),n}function Wf(n,e){return n.t+=e,n.mat.uniforms.prog.value=n.t/n.dur,n.mat.uniforms.flash.value=n.dur-n.t<.15?Math.floor(n.t*24)%2?1:.55:0,n.t>=n.dur}function Qo(n){Ze.remove(n.mesh),n.mesh.geometry.dispose(),n.mat.dispose(),_.warnings=_.warnings.filter(e=>e!==n),n.enemy.warn===n&&(n.enemy.warn=null)}const wp=new Jt(.07,.62,5);wp.rotateX(Math.PI/2);const e1=new gt({color:16769696}),t1=new gt({color:16763981}),n1=.62,i1=.55;function r1(n,e){const t=_n[n.type],i=new Z(wp,e1);Ze.add(i),_.shots.push({d:n.d.clone(),dir:e.clone(),left:t.shotLen,v:t.shotSpeed,owner:n,mesh:i,back:!1,spent:!1})}function sa(n){Ze.remove(n.mesh),n.dead=!0}function s1(n){for(const e of _.shots){const t=e.v*n;if(e.d=nt(e.d,e.dir,t),e.dir=at(e.d,e.dir).normalize(),e.left-=t,e.left<=0){sa(e);continue}if(an(e.d)>1.15&&!Qh(e.d)){lt(e.d.clone().multiplyScalar(Fe+an(e.d)),13152400,5,3,.3),sa(e);continue}e.mesh.position.copy(e.d).multiplyScalar(Fe+an(e.d)+i1),e.mesh.quaternion.setFromUnitVectors(rr,e.d);const i=e.dir.clone().applyQuaternion(e.mesh.quaternion.clone().invert());if(e.mesh.rotateY(Math.atan2(i.x,i.z)),e.back){for(const r of _.enemies)if(!(r.dead||r.spawn<1||e.d.angleTo(r.d)*Fe>r.r+.4)){jr(r,3,e.dir,{pierce:!0}),lt(e.mesh.position,16763981,14,6,.4),sa(e);break}}else if(!e.spent&&e.d.angleTo(E.d)*Fe<n1){e.spent=!0;const r=Ns(e.owner,"shot",e.d);r==="parry"?(e.back=!0,e.spent=!1,e.mesh.material=t1,e.v*=1.4,e.left=12,e.dir=e.owner.dead?e.dir.clone().negate():$t(e.d,e.owner.d)):r==="hit"&&sa(e)}}_.shots.some(e=>e.dead)&&(_.shots=_.shots.filter(e=>!e.dead))}function a1(){_.shots.forEach(sa),_.shots=[]}function o1(n,e,t){const i={kind:"circle",c:n.clone(),r:e},r=new gt({color:16738848,transparent:!0,opacity:.65,depthWrite:!1,side:Zt}),s=new Z(bp(i),r);s.renderOrder=1,Ze.add(s),_.hazards.push({z:i,mesh:s,t,dur:t})}function l1(n){for(const e of _.hazards)e.t-=n,e.mesh.material.opacity=Math.min(.65,e.t*1.2)*(.8+Math.sin(e.t*12)*.2),E.air<=0&&E.invuln<=0&&E.state!=="dash"&&E.state!=="ult"&&E.guardInv<=0&&wa(e.z,E.d,.1)&&Wu(e.z.c),e.t<=0&&(Ze.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose(),e.dead=!0);_.hazards.some(e=>e.dead)&&(_.hazards=_.hazards.filter(e=>!e.dead))}function c1(){for(const n of _.hazards)Ze.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose();_.hazards=[]}const Xf=2.8,u1=1.15,d1=.8,f1=30,h1=new Mi(.42),Ql=[];function p1(n){if(!Ql[n]){const t=document.createElement("canvas");t.width=t.height=64;const i=t.getContext("2d");i.font="900 52px sans-serif",i.textAlign="center",i.textBaseline="middle",i.lineWidth=8,i.strokeStyle="#0b1030",i.strokeText(n,32,34),i.fillStyle="#fff",i.fillText(n,32,34),Ql[n]=new gg(t)}const e=new cg(new Oh({map:Ql[n],depthTest:!1,transparent:!0}));return e.scale.setScalar(.8),e.position.y=.85,e.renderOrder=6,e}const qf=(n,e)=>new ln({color:n,emissive:e,emissiveIntensity:1.6,flatShading:!0}),je={boss:null,nodes:[],cfg:null,next:0,bad:!1,t:0},$f=ee("sealHint"),Yf={ordered:"照編號順序劃過",moving:"光點會移動",forbid:"只劃金色，避開紅色"},el=()=>{$f.hidden=!je.boss,je.boss&&($f.textContent=`封印 ${je.nodes.filter(n=>n.hit).length} / ${je.nodes.filter(n=>!n.bad).length}　${Yf[Object.keys(Yf).find(n=>je.cfg[n])]||"大招一筆劃過光點"}`)};function Ep(n){const[e,t]=Ia(je.boss.d),i=n.a+(je.cfg.moving?je.t*.35:0);(je.cfg.moving||!n.d)&&(n.d=je.boss.d.clone().multiplyScalar(Fe).addScaledVector(e,Math.cos(i)*n.r).addScaledVector(t,Math.sin(i)*n.r).normalize())}function Tp(n){n.mesh.position.copy(n.d).multiplyScalar(Fe+an(n.d)+.75+Math.sin(je.t*3+n.a)*.1),n.mesh.quaternion.setFromUnitVectors(rr,n.d),n.mesh.rotateY(je.t*2)}function m1(n,e){tl(),Object.assign(je,{boss:n,cfg:e,next:0,bad:!1,t:0}),n.armored=!0;const t=e.count+(e.forbid||0),i=Math.random()*6.28;for(let r=0;r<t;r++){const s=r>=e.count,a={i:r,bad:s,a:s?i+(r-e.count+.5)*Math.PI*2/(e.forbid||1):i+r/e.count*Math.PI*2,r:s?Xf*.34:Xf,hit:!1};a.mesh=new Z(h1,s?qf(16730714,16715808):qf(16763981,13144064)),a.mesh.castShadow=!0,Ze.add(a.mesh),e.ordered&&a.mesh.add(p1(r+1)),Ep(a),Tp(a),je.nodes.push(a),Vr(a.mesh.position,a.d,16763981,1.5,.6,3)}_.ult=100,lr("護甲展開","用大招一筆劃過光點"),Ue.warn(),_.shake=Math.max(_.shake,.7),el()}function g1(){je.next=0,je.bad=!1;for(const n of je.nodes)n.hit=!1,n.mesh.material.color.set(n.bad?16730714:16763981),n.mesh.material.emissive.set(n.bad?16715808:13144064);el()}function _1(n){if(je.boss){for(const e of je.nodes)if(!(e.hit||e.mesh.position.distanceTo(n)>(e.bad?d1:u1))){if(e.bad){je.bad=!0,e.hit=!0,ct("碰到紅色光點！","var(--hurt)"),Ue.empty();continue}je.cfg.ordered&&e.i!==je.next||(e.hit=!0,je.next++,e.mesh.material.color.set(16777215),e.mesh.material.emissive.set(4843263),lt(e.mesh.position,4843263,16,7,.5),Ue.step(),el())}}}function v1(){if(!je.boss)return;const n=je.boss;!je.bad&&je.nodes.every(t=>t.bad||t.hit)?(n.armored=!1,n.stun=4.5,n.phase++,n.warn=null,Us(.4,"#ffcc4d"),lr("封印破除","趁它暈眩全力輸出"),Ue.win(),_.shake=1.2,Vr(je.boss.mesh.position,n.d,16763981,4,.8,4),lt(n.mesh.position,16763981,40,12,.9),tl()):(ct("封印沒破，再劃一次","var(--gold)"),g1())}function x1(n,e){if(je.boss){if(je.boss.dead){tl();return}_.mode!=="ultDash"&&(je.t+=n);for(const t of je.nodes)Ep(t),Tp(t);_.mode==="play"&&(_.ult=Math.min(100,_.ult+e*f1))}}function tl(){for(const n of je.nodes)Ze.remove(n.mesh),n.mesh.material.dispose();je.nodes=[],je.boss=null,el()}const eu={rockKing:{name:"岩王",at:[.5],seal:{count:3},phases:[["circle","swing","ring","triple","summon:boulder"],["meteor","swing","ring","swing","triple","summon:boulder"]]},frostQueen:{name:"冰晶女王",at:[.66,.33],seal:{count:4,ordered:!0},phases:[["fan","chillField","ring"],["fan","meteor","chillField","nova"],["fan","nova","triple","summon:frostGrunt"]]},sandWyrm:{name:"沙海王蟲",at:[.66,.33],seal:{count:4,moving:!0},phases:[["burrow","charge","summon:sandGrunt"],["burrow","charge","storm","fan"],["burrow","charge","charge","meteor","summon:sandBoulder"]]},lavaTitan:{name:"熔岩泰坦",at:[.66,.33],seal:{count:4,forbid:2},phases:[["meteor","ring","triple"],["meteor","swing","nova","summon:lavaGrunt","triple"],["meteor","swing","fan","nova","swing","summon:lavaBrute","triple"]]}},rt=(n,e=0,t=0)=>new ln({color:n,emissive:e,emissiveIntensity:t,roughness:.6,flatShading:!0}),si=(n,e,t=1)=>{const i=n.attributes.position,r=new Map;for(let s=0;s<i.count;s++){const a=`${i.getX(s).toFixed(3)},${i.getY(s).toFixed(3)},${i.getZ(s).toFixed(3)}`;if(!r.has(a)){const l=Math.sin((s+1)*12.9898*t)*43758.5453;r.set(a,1+(l-Math.floor(l)-.5)*e)}const o=r.get(a);i.setXYZ(s,i.getX(s)*o,i.getY(s)*o,i.getZ(s)*o)}return n.computeVertexNormals(),n};function Mt(n,e=[],t=0,i=0){n.updateMatrixWorld(!0);const r=n.matrixWorld.clone().invert(),s=[],a=[],o=new Set;e.forEach(u=>u.traverse(d=>o.add(d))),n.traverse(u=>{if(!u.isMesh||o.has(u))return;const d=u.geometry.index?u.geometry.toNonIndexed():u.geometry.clone();for(const v of Object.keys(d.attributes))v!=="position"&&v!=="normal"&&d.deleteAttribute(v);d.applyMatrix4(new ot().multiplyMatrices(r,u.matrixWorld));const f=u.material.color.clone().multiplyScalar(u.material.isMeshBasicMaterial?1.7:1),h=d.attributes.position.count,g=new Float32Array(h*3);for(let v=0;v<h;v++)g.set([f.r,f.g,f.b],v*3);d.setAttribute("color",new Ln(g,3)),s.push(d),a.push(u)}),a.forEach(u=>{u.parent.remove(u),u.geometry.dispose(),u.material.dispose()});const l=new ln({vertexColors:!0,flatShading:!0,roughness:.6,emissive:t,emissiveIntensity:i}),c=new Z(Nr(s),l);return c.castShadow=!0,n.add(c),c}function oi(n,e,t,i,r,s,a){for(const o of[-1,1]){const l=new Z(new pt(r,8,6),rt(s));l.position.set(o*e,t,i),l.scale.set(1.25,.8,.45),l.rotation.z=o*.35,n.add(l);const c=new Z(new pt(r*.48,8,6),new gt({color:a}));c.position.set(o*(e-r*.1),t-r*.08,i+r*.32),c.scale.set(1.2,.8,.5),c.rotation.z=o*.35,n.add(c)}}function Kn(n){const e=new Ke;for(let t=0;t<3;t++){const i=new Z(new Mi(.1),new gt({color:16763981}));i.position.set(Math.cos(t*2.09)*.4,0,Math.sin(t*2.09)*.4),e.add(i)}return e.position.y=n,e.visible=!1,e}function M1([n,e,t]=[15222332,5898264,8004632]){const i=new Ke,r=rt(n,e,.35),s=rt(t),a=si(new Dt(.42,1),.12,3);a.scale(1,.95,1);const o=new Z(a,r);o.castShadow=!0,i.add(o);for(let m=0;m<3;m++){const p=new Z(new Jt(.08,.26,4),r);p.position.set((m-1)*.1,.42,-.04-Math.abs(m-1)*.04),p.rotation.set(-.3,0,(1-m)*.45),i.add(p)}oi(i,.15,.05,.33,.09,2755084,16773296);for(const m of[-1,1]){const p=new Z(new pt(.1,6,5),s);p.position.set(m*.17,-.38,.05),p.scale.set(1,.6,1.3),i.add(p)}const l=new Ke;l.position.set(.36,-.05,.1),i.add(l);const c=new Z(new pt(.09,6,5),s);l.add(c);const u=new Ke;l.add(u);const d=new Z(new pn(.025,.025,1.25,5),rt(8014374));d.position.y=.25,u.add(d);const f=new Z(new Jt(.07,.24,4),rt(13225174,2236979,.3));f.position.y=.98,u.add(f);const h=new Z(new pn(.04,.04,.07,6),rt(14267498));h.position.y=.82,u.add(h);const g=Kn(.75);i.add(g),Mt(l),Mt(g);const v=Mt(i,[l,g],e,.35);return{group:i,body:v,tint:[v.material],stars:g,rig:{arm:l,spear:u}}}function Bu([n,e,t]=[9329622,2363471,7037296],i=1){const r=new Ke,s=new Ke;s.scale.setScalar(i),r.add(s);const a=rt(n,e,.35),o=rt(new we(n).lerp(new we(16777215),.3).getHex(),e,.25),l=rt(15326400),c=rt(t,t===7037296?0:t,t===7037296?0:.5),u=rt(new we(n).multiplyScalar(.45).getHex()),d=si(new Dt(.72,1),.1,7);d.scale(1.15,1,.95);const f=new Z(d,a);f.castShadow=!0,s.add(f);const h=new Z(si(new Dt(.38,1),.08,5),a);h.position.set(0,.48,.32),s.add(h);const g=new Z(new Dt(.2,0),o);g.position.set(0,.36,.62),g.scale.set(1.4,.8,.8),s.add(g);for(const T of[-1,1]){const b=new Z(new Jt(.045,.16,4),l);b.position.set(T*.14,.42,.72),s.add(b);const M=new Z(new Jt(.13,.62,5),l);M.position.set(T*.42,.82,.2),M.rotation.set(-.2,0,-T*.75),s.add(M);for(let A=0;A<2;A++){const L=new Z(new Jt(.07,.2,4),u);L.position.set(T*(.35+A*.25),.45-A*.2,-.38),L.rotation.set(-.8,0,-T*.6),s.add(L)}const C=new Z(new pn(.16,.2,.3,6),a);C.position.set(T*.32,-.7,0),s.add(C)}oi(s,.14,.58,.62,.075,1838896,16769126);const v=[];for(const T of[-1,1]){const b=new Z(si(new Da(.34,0),.15,2+T),c.clone());b.castShadow=!0,b.position.set(T*.98,-.2,.25),s.add(b),v.push(b)}const m=Kn(1.25*i);r.add(m),Mt(m);const p=Mt(s,v,e,.35);return{group:r,body:p,tint:[p.material],stars:m,rig:{fists:v,core:s}}}function y1([n,e]=[9408666,1052696]){const t=new Ke,i=new Ke;t.add(i);const r=rt(n,e,.2),s=rt(1710626),a=new Z(si(new Dt(.58,1),.16,11),r);a.castShadow=!0,i.add(a);const o=new Z(new pt(.3,10,6),s);o.position.set(0,.02,.42),o.scale.set(1.35,.3,.55),i.add(o);const l=new Z(new pt(.09,10,8),new ln({color:16726564,emissive:16719888,emissiveIntensity:2.2}));l.position.set(0,.02,.54),l.scale.set(1,.75,.5),i.add(l);for(let f=0;f<4;f++){const h=new Z(new Eu(.07+f*.01),r);h.position.set(Math.cos(f*1.6)*.75,-.3+f%2*.5,Math.sin(f*1.6)*.75),h.visible=!1,t.add(h)}const c=Kn(.9);t.add(c);const u=t.children.filter(f=>f.geometry?.type==="TetrahedronGeometry");Mt(c);const d=Mt(i,[l],e,.2);return{group:t,body:d,tint:[d.material],stars:c,rig:{roll:i,eye:l,pebbles:u}}}function S1([n,e]=[8376575,1732800]){const t=new Ke,i=rt(n,e,.9),r=rt(new we(n).multiplyScalar(.8).getHex(),e,.6),s=new Z(new pt(.5,10,7,0,Math.PI*2,0,Math.PI*.6),i);s.position.y=.05,s.castShadow=!0,t.add(s);const a=new Ke;t.add(a);for(let c=0;c<5;c++){const u=new Z(new Jt(.07,.6,4),r);u.rotation.x=Math.PI,u.position.set(Math.cos(c*1.26)*.26,-.3,Math.sin(c*1.26)*.26),a.add(u)}oi(t,.14,.22,.44,.07,795712,16777215);const o=Kn(.75);t.add(o),Mt(o),Mt(a);const l=Mt(t,[a,o],e,.9);return{group:t,body:l,tint:[l.material],stars:o,rig:{tentacles:a}}}function b1([n,e]=[11104570,5913112]){const t=new Ke,i=rt(n,3151876,.3),r=rt(e);for(let c=0;c<4;c++){const u=new Z(new Jt(.38-c*.07,.3,7),c%2?i:r);u.position.y=-.26+c*.2,u.rotation.y=c*.4,c||(u.castShadow=!0),t.add(u)}oi(t,.12,.02,.27,.07,1707524,16773296);for(const c of[-1,1]){const u=new Z(new pt(.08,6,5),r);u.position.set(c*.15,-.4,.03),t.add(u)}const s=new Ke;s.position.set(.34,0,.2),t.add(s);const a=new Z(new Fi(.3,.022,4,10,Math.PI),rt(5913112));a.rotation.z=-Math.PI/2,s.add(a);const o=Kn(.7);t.add(o),Mt(s),Mt(o);const l=Mt(t,[s,o],3151876,.3);return{group:t,body:l,tint:[l.material],stars:o,rig:{bow:s}}}function w1(){const n=new Ke,e=new Ke;n.add(e);const t=rt(10476799,1727130,.7),i=rt(5218528,1325690,.6),r=new Z(new Mi(.8,1),t);r.scale.set(.85,1.7,.85),r.position.y=.25,r.castShadow=!0,e.add(r);for(let l=0;l<5;l++){const c=new Z(new Jt(.13,.62,4),i),u=(l-2)*.42;c.position.set(Math.sin(u)*.42,1.5-Math.abs(l-2)*.12,Math.cos(u)*.1),c.rotation.z=-u*.8,e.add(c)}oi(e,.2,.62,.62,.1,663616,16777215);const s=[];for(const l of[-1,1]){const c=new Z(new Mi(.34,0),t.clone());c.castShadow=!0,c.scale.y=1.6,c.position.set(l*.98,-.2,.25),e.add(c),s.push(c)}const a=Kn(2);n.add(a),Mt(a);const o=Mt(e,s,1727130,.7);return{group:n,body:o,tint:[o.material],stars:a,rig:{fists:s,core:e}}}function E1(){const n=new Ke,e=new Ke;n.add(e);const t=rt(13208132,4857864,.35),i=rt(15714698,4857864,.25),r=rt(5911572),s=new Z(si(new Dt(.95,1),.12,9),t);s.scale.set(1.05,.85,1.25),s.position.set(0,.15,.25),s.castShadow=!0,e.add(s);for(let c=0;c<3;c++){const u=new Z(si(new Dt(.72-c*.14,1),.1,4+c),c%2?i:t);u.position.set(0,-.25-c*.1,-.9-c*.85),u.castShadow=!0,e.add(u)}for(let c=0;c<4;c++){const u=new Z(new Jt(.12,.42,4),r);u.position.set(0,.85-c*.22,-.1-c*.55),u.rotation.x=-.5,e.add(u)}oi(e,.36,.42,1.06,.12,2100228,16734752);const a=[];for(const c of[-1,1]){const u=new Z(new Jt(.17,.8,5),r);u.rotation.x=1.3,u.rotation.z=c*.5,u.castShadow=!0,u.position.set(c*.98,-.2,.25),e.add(u),a.push(u)}const o=Kn(1.5);n.add(o),Mt(o);const l=Mt(e,a,4857864,.35);return{group:n,body:l,tint:[l.material],stars:o,rig:{fists:a,core:e}}}const T1=()=>Bu(void 0,1.6),A1=()=>Bu([4141110,10496e3,16742960],1.95);function R1([n,e]=[4165482,14205040]){const t=new Ke,i=rt(n,666138,.3),r=rt(1980970),s=rt(e,3811840,.3),a=new Z(si(new pt(.52,9,6,0,Math.PI*2,0,Math.PI*.55),.08,5),i);a.position.y=-.12,a.castShadow=!0,t.add(a);const o=new Z(new pn(.5,.44,.16,9),r);o.position.y=-.2,t.add(o);for(let h=0;h<3;h++){const g=new Z(new Jt(.07,.2,4),r);g.position.set(0,.3-h*.06,-.12-h*.16),g.rotation.x=-.6,t.add(g)}oi(t,.13,.08,.4,.07,662032,16773296);for(const h of[-1,1])for(const g of[-.2,.15]){const v=new Z(new pt(.08,5,4),r);v.position.set(h*.38,-.36,g),t.add(v)}const l=new Ke;l.position.set(0,-.02,.62),t.add(l);const c=new Z(new pn(.42,.42,.08,10),s);c.rotation.x=Math.PI/2,l.add(c);const u=new Z(new pt(.12,6,5),r);u.position.z=.05,l.add(u);const d=Kn(.75);t.add(d),Mt(d),Mt(l);const f=Mt(t,[l,d],666138,.3);return{group:t,body:f,tint:[f.material],stars:d,rig:{shield:l}}}function C1([n,e]=[7327818,15788192]){const t=new Ke,i=rt(n,1720328,.3),r=rt(e),s=rt(2775576),a=new Z(si(new Dt(.45,1),.1,7),i);a.scale.set(1.15,.75,1),a.castShadow=!0,t.add(a);const o=new Z(new pt(.34,8,6),r);o.scale.set(1,.6,.7),o.position.set(0,-.12,.16),t.add(o);for(const u of[-1,1]){const d=new Z(new pt(.15,7,5),i);d.position.set(u*.2,.3,.14),t.add(d);const f=new Z(new pt(.16,6,5),s);f.scale.set(1,.55,1.6),f.position.set(u*.4,-.28,-.1),t.add(f)}oi(t,.2,.32,.27,.08,663556,16773296);const l=Kn(.7);t.add(l),Mt(l);const c=Mt(t,[l],1720328,.3);return{group:t,body:c,tint:[c.material],stars:l,rig:{}}}function P1([n,e]=[13650570,16050896]){const t=new Ke,i=rt(n,4196904,.45),r=rt(e),s=rt(16777215),a=new Z(new pn(.22,.3,.55,8),r);a.position.y=-.2,a.castShadow=!0,t.add(a);const o=new Z(si(new pt(.55,10,6,0,Math.PI*2,0,Math.PI*.5),.06,3),i);o.position.y=.02,o.scale.y=.8,o.castShadow=!0,t.add(o);for(let u=0;u<6;u++){const d=new Z(new pt(.08,5,4),s),f=u*1.05;d.position.set(Math.cos(f)*.34,.28+u%2*.06,Math.sin(f)*.34),d.scale.y=.5,t.add(d)}oi(t,.1,-.12,.25,.065,2756640,10485663);const l=Kn(.8);t.add(l),Mt(l);const c=Mt(t,[l],4196904,.45);return{group:t,body:c,tint:[c.material],stars:l,rig:{}}}function L1([n,e]=[16762938,2759176]){const t=new Ke,i=rt(n,5913088,.4),r=rt(e),s=new Z(new pt(.26,8,6),i);s.scale.set(.9,.85,1.15),s.castShadow=!0,t.add(s);for(const u of[-.08,.08]){const d=new Z(new Fi(.24,.035,4,10),r);d.position.z=u-.04,t.add(d)}const a=new Z(new Jt(.06,.16,4),r);a.rotation.x=-Math.PI/2,a.position.z=-.32,t.add(a),oi(t,.09,.05,.22,.055,1706496,16777215);const o=new Ke;o.position.y=.2,t.add(o);for(const u of[-1,1]){const d=new Z(new pt(.16,6,4),new gt({color:14677247,transparent:!0,opacity:.55}));d.scale.set(1.2,.15,.7),d.position.x=u*.18,o.add(d)}const l=Kn(.5);t.add(l),Mt(l);const c=Mt(t,[o,l],5913088,.4);return{group:t,body:c,tint:[c.material],stars:l,rig:{wings:o}}}function Ap([n,e]=[10115800,3149898],t=1){const i=new Ke,r=rt(n,e,.5),s=new Z(si(new Dt(.48*t,1),.14,13),r);s.scale.set(1.1,.85,1.1),s.castShadow=!0,i.add(s);for(let l=0;l<3;l++){const c=new Z(new pt(.12*t,6,4),r),u=l*2.1+.4;c.position.set(Math.cos(u)*.36*t,.22*t,Math.sin(u)*.36*t-.1),i.add(c)}oi(i,.15*t,.08*t,.38*t,.08*t,1706024,16777215);const a=Kn(.75*t);i.add(a),Mt(a);const o=Mt(i,[a],e,.5);return{group:i,body:o,tint:[o.material],stars:a,rig:{}}}const D1=n=>Ap(n,.6),I1={grunt:M1,brute:Bu,boulder:y1,jelly:S1,archer:b1,rock:T1,queen:w1,wyrm:E1,titan:A1,shell:R1,hopper:C1,shroom:P1,bee:L1,splitter:Ap,blobling:D1},U1={grunt:15222332,brute:9329622,boulder:9408666,boss:9329622,jelly:8376575,archer:11104570,shell:4165482,hopper:7327818,shroom:13650570,bee:16762938,splitter:10115800},mn=n=>n.d.clone().multiplyScalar(Fe+an(n.d)+n.r);function Di(n,e,t={}){const i=_n[n],r=i.base||n,s=I1[i.model||r](i.pal),a=r==="boss"?i.hp:i.hp*_.hpMul,o={type:n,base:r,d:e.clone(),hp:a,maxHp:a,r:i.r,model:s,mesh:s.group,spawn:0,atkCd:1+Math.random()*2,stun:0,flash:0,strafe:Math.random()<.5?-1:1,kb:new _e,lunge:null,warn:null,rolling:null,chain:null,bob:Math.random()*6,slamT:0,summonT:0,pattern:0,phase:0,stuck:0,diveCd:3,...t};return t.hp&&(o.maxHp=t.hp),r==="boss"&&(o.script=eu[n],o.sealAt=[...o.script.at]),s.group.visible=!1,Ze.add(s.group),_.enemies.push(o),Vr(vn(e).addScaledVector(e,.1),e,r==="boss"?12610559:10185727,r==="boss"?2.5:1.4,.6,3),o}function ku(n){n.warn&&Qo(n.warn),Ze.remove(n.mesh),n.mesh.traverse(e=>{e.isMesh&&(e.geometry.dispose(),e.material.dispose())}),n.dead=!0}function jr(n,e,t,{pierce:i=!1}={}){const r=_n[n.type];if(n.armored){n.flash=.08,Ue.thud(),ct("護甲！用大招劃過光點","var(--gold)"),_.hitstop=Rn.hitstop;return}if(n.guardHp>0&&!i){n.guardHp--,n.flash=.08,Ue.thud(),_.hitstop=Rn.hitstop,n.kb.copy(t).multiplyScalar(1.5),n.guardHp<=0&&n.bubble?(n.mesh.remove(n.bubble),n.bubble.geometry.dispose(),n.bubble.material.dispose(),n.bubble=null,lt(mn(n),5999871,22,8,.5),ct("護盾破了！","var(--guard)")):ct(`護盾 ×${n.guardHp}`,"var(--guard)");return}if(r.front&&!(n.stun>0)&&!i&&n.face&&t.dot(n.face)<-r.front){n.flash=.06,Ue.clang(),_.hitstop=Rn.hitstop,lt(mn(n).addScaledVector(n.face,n.r),14205040,12,6,.3),ct("盾擋住了！繞到背後或格擋","var(--mist)"),tn("blocked",n),E.state==="dash"&&(E.state="free",Ki(nt(E.d,n.face,.9)),E.anim.imp=.8);return}const s=n.base==="boulder"&&!(n.stun>0)&&!i;s&&(e*=r.armor,Ue.thud(),ct("好硬！等它暈了再打","var(--mist)")),n.hp-=e,n.flash=.12,_.combo++,_.bestCombo=Math.max(_.bestCombo,_.combo),_.comboT=Rn.comboTime,Wr(pi.hit),n.kb.copy(t).multiplyScalar(s?.6:r.kb),n.whirl&&n.whirl.t<n.whirl.wind&&(n.whirl=null,n.atkCd=1.5,ct("打斷","var(--dash)")),(n.base==="grunt"||n.base==="archer"||n.base==="bee"||n.base==="shroom")&&n.warn&&(Qo(n.warn),n.chain=null,n.atkCd=1.5,ct("打斷","var(--dash)"));const a=e>=1.4||n.stun>0;if(_.hitstop=Math.max(_.hitstop,Rn.hitstop*Yt(.8+e*.25,.8,2)),_.shake=Math.max(_.shake,a?.5:.35),n.squash=a?1.3:1,Au(t,a?.22:.12),s||Ue.hit(_.combo,a),Ny(mn(n).addScaledVector(n.d,n.r+.3),Math.max(1,Math.round(e*10)),a?"big":s?"weak":""),lt(mn(n),e>=1.4?16763981:16777215,8+Math.round(e*3),7,.35),tn("hit",n),n.sealAt?.length&&n.hp/n.maxHp<=n.sealAt[0]){n.hp=n.maxHp*n.sealAt.shift(),Nf(),m1(n,n.script.seal);return}n.hp<=1e-6&&Rp(n),Nf()}function Rp(n,e=!1){if(n.dead)return;const t=_n[n.type],i=mn(n);if(lt(i,t.pal?.[0]??U1[n.base],24,9,.7),lt(i,16763981,8,6,.5),n.base==="boss"&&(lt(i,12610559,60,14,1.2),Vr(i,n.d,16763981,4,.8,4),_.shake=1.4),_.score+=Math.round(t.pts*(1+Math.min(_.combo,30)*.05)),Wr(pi.kill),!e&&(t.split||n.affix==="split")&&V1(n),t.blast&&!e){const s={kind:"circle",c:n.d.clone(),r:1.35,attack:"circle"};Ou(s,n,1,!0)}const r=n.r>=.8;if(Ue.kill(r),ku(n),or(E),_.hitstop=Math.max(_.hitstop,Rn.killHitstop*(r?1.8:1)),r&&(rp(.6),_.shake=Math.max(_.shake,.7)),_.combo>=5&&_.combo%5===0&&ai("happy",.6),tn("kill",n),n.base==="boss")for(const s of _.enemies)!s.dead&&s!==n&&Rp(s,!0)}const N1=()=>_.tut?1.6:Math.max(Rn.warnMin,Rn.warnBase-Rn.warnStep*(_.tier-1)),F1=()=>_.tut||_.tier<=1?1:_.tier>=8?3:2,O1=n=>n.warn||n.rolling||n.chain||n.lunge||n.swing||n.whirl||n.summonT>0,B1=()=>_.enemies.filter(n=>!n.dead&&n.base!=="boss"&&O1(n)).length;function k1(n){if(n.only)return n.only[Math.floor(Math.random()*n.only.length)];const e=_n[n.type];if(n.base==="grunt"){if(e.burrow&&!n.burrowed&&Math.random()<.6)return"burrow";n.burrowed=!1;const i=Math.random();return _.tier>=2&&i<.22?"whirl":(_.tier>=5&&i<.45&&(n.chain={kind:"line",left:1,idx:0,gap:0}),"line")}if(n.base==="grunt"||n.base==="bee")return"line";if(n.base==="boulder")return"roll";if(n.base==="archer")return n.volleyNow=!e.volley&&_.tier>=5&&Math.random()<.25,"shoot";if(n.base==="shell")return"line";if(n.base==="hopper")return"hop";if(n.base==="shroom")return"spores";if(n.base==="splitter")return e.split?"hop":"line";if(n.base==="jelly")return n.d.angleTo(E.d)*Fe<e.pulseRange&&Math.random()<.6?"ring":"mortar";if(n.base==="brute"){const i=Math.random();return _.tier>=2&&i<.28?"swing":_.tier>=6&&i<.45?"triple":_.tier>=3&&i<.7?"ring":"circle"}const t=n.script.phases[Math.min(n.phase,n.script.phases.length-1)];for(let i=0;i<t.length;i++){const r=t[n.pattern++%t.length];if(!r.startsWith("summon")||_.enemies.filter(s=>!s.dead&&s!==n).length<3)return r}return"circle"}const bo=(n,e,t)=>Ou(n,e,t,!0);function zu(n,e=k1(n),t=1){const i=N1()*(n.warnMul||1)*t,r=n.base==="boss",s=_n[n.type],a=$t(n.d,E.d);if(e.startsWith("summon")){n.summonT=1.1,n.summonType=e.split(":")[1],Ue.warn(),ct(`${n.script.name}在召喚援軍！`,"var(--hurt)");return}if(e==="storm"){By(7),n.atkCd=1;return}if(e==="whirl"){n.whirl={t:0,wind:i*1.1,dir:a.clone(),spin:0,hitCd:0,sfxT:0},Ue.charge();return}if(e==="swing"){const c=_n.brute;n.swing={t:0,dur:i*1.15,side:Math.random()<.5?0:1,dir:a.clone(),r:r?c.swingR*1.5:c.swingR,arc:c.swingArc,after:0},Ue.charge();return}if(e==="burrow"){lt(vn(n.d).addScaledVector(n.d,.3),14200944,18,5,.6);for(let c=0;c<8;c++){const u=nt(E.d,at(E.d,new _e().randomDirection()).normalize(),r?3.8:2.8);if(!bn(u)){n.d.copy(u);break}}n.spawn=r?-1:-.7,n.burrowed=!0,n.atkCd=r?.4:.3;return}e==="triple"&&(n.chain={kind:"circle",left:2,idx:0,gap:0},e="circle"),(e==="nova"||e==="ring"&&s.doubleRing&&!n.chain)&&(n.chain={kind:"ring",left:1,idx:0,gap:0},e="ring"),e==="roll"&&(n.chain=n.chain||{kind:"roll",left:s.rolls-1,idx:0,gap:0}),e==="hop"&&!n.chain&&(s.hops||1)>1&&(n.chain={kind:"hop",left:s.hops-1,idx:0,gap:0});let o,l=i;if(e==="line")o=yr(n.d,a,s.lineLen||3.6,s.lineW||.55);else if(e==="hop")o={kind:"circle",c:E.d.clone(),r:s.hopR||1.25,attack:"hop"},l=i*1.05;else if(e==="spores"){o={kind:"circle",c:E.d.clone(),r:1.1,attack:"circle"},l=i*1.5;for(let c=1;c<s.spores;c++){const u={kind:"circle",c:nt(E.d,at(E.d,new _e().randomDirection()).normalize(),1.4+Math.random()*1.6),r:1.1,attack:"circle"};bo(u,n,l+c*.3)}H1(n,s)}else if(e==="roll")o=yr(n.d,a,s.rollLen+n.r,.62);else if(e==="charge")o=yr(n.d,a,9,.95),o.attack="roll",l=i*1.25;else if(e==="shoot"){if(o=yr(n.d,a,s.shotLen*.75,.22),l=i*.9,s.volley||n.volleyNow)for(const c of[-1,1]){const u=a.clone().applyAxisAngle(n.d,c*.36),d=yr(n.d,u,s.shotLen*.75,.22);d.attack="shoot",bo(d,n,l)}}else if(e==="fan"){o=yr(n.d,a,9,.6),o.attack="line",o.noLunge=!0,l=i*1.2;for(const c of[-1,1]){const u=yr(n.d,a.clone().applyAxisAngle(n.d,c*.5),9,.6);u.attack="line",bo(u,n,l)}}else if(e==="meteor"){o={kind:"circle",c:E.d.clone(),r:1.5,attack:"circle"},l=i*1.1;for(let c=0;c<4;c++){const u={kind:"circle",c:nt(E.d,at(E.d,new _e().randomDirection()).normalize(),1.8+Math.random()*2.6),r:1.3,attack:"circle"};bo(u,n,l+(c+1)*.22)}}else e==="chillField"?(o={kind:"circle",c:E.d.clone(),r:2.8,attack:"circle",chill:!0},l=i*1.25):e==="mortar"?(o={kind:"circle",c:E.d.clone(),r:1.3,attack:"circle"},l=i*1.1):e==="ring"?(o={kind:"ring",c:n.d.clone(),r1:r?1.6:n.base==="jelly"?.7:1.2,r2:r?5.4:n.base==="jelly"?3:4.2},l=i*1.25):(o={kind:"circle",c:E.d.clone(),r:r?2.2:1.7},l=i*1.15);o.attack=o.attack||e,Ou(o,n,l),Ue.warn()}function z1(n){const e=n.chain;e.idx++,e.left--;const t=_n[n.type].followWarn,i=t?t[Math.min(e.idx-1,t.length-1)]:e.idx===1?.6:.5;zu(n,e.kind,i)}function Ns(n,e,t){if(E.state==="ult"||E.guardInv>0)return"none";if((e==="ring"||e==="roll"||e==="shot"||e==="swing"||e==="whirl")&&E.air>0)return Wr(pi.jumpRing),ct("躍過","var(--ink)"),tn("jump",e),"jump";if(E.state==="dash"&&E.t<=We.iframe)return Wr(pi.evade),_.slowT=.5,ct("閃避斬","var(--dash)"),lt(E.p,9430015,16,6,.5),tn("evade",e),"evade";if(E.state==="parry"){const i=$t(E.d,t);if(i.angleTo(E.parryDir)<Math.PI*We.parryArc)return G1(e==="shot"?null:n,i,E.t<=Gu()),"parry"}return E.invuln>0?"none":(Wu(t),"hit")}function G1(n,e,t){const i=E.p.clone().addScaledVector(E.d,.45).addScaledVector(e,.55),r=Cu(xt.position.clone()).sub(i).normalize();if(lt(i,16777215,16,16,.22),lt(i,t?16763981:10470655,t?36:24,13,.35),lt(i,16751164,12,9,.45),Vr(i,r,t?16763981:10470655,t?1.3:1),Vr(i,E.d,16777215,.8),n){n.lunge=null,n.rolling=null,n.chain=null,n.swing=null,n.whirl=null,n.kb.copy($t(n.d,E.d)).multiplyScalar(t?-5:-2.5),n.base==="boss"&&n.kb.multiplyScalar(.2);const s=t?n.base==="boss"?1.6:Rn.stunPerfect:n.base==="boulder"?1.4:Rn.stunNormal;s>0&&(n.stun=s)}rp(t?1.1:.5),Au(e.clone().negate(),t?.25:.15),t?(Ue.ding(),Us(.3,"#ffcc4d"),ct("完美格擋！","var(--gold)"),Wr(pi.perfect+(_.passives.has("focus")?15:0)),ai("happy",.5)):(Ue.clang(),Us(.18,"#9fc4ff"),ct("格擋成功","var(--guard)"),Wr(pi.parry)),_.slowT=t?.6:.4,_.hitstop=.08,_.shake=Math.max(_.shake,t?.6:.4),E.guardInv=_.slowT+.25,_.stamina=Math.min(We.stamMax,_.stamina+1),E.state="free",E.parried=!0,E.anim.imp=.35,E.idleT=0,tn("parry",{e:n,perfect:t})}function H1(n,e){let t=0;for(const i of _.enemies)i.dead||i===n||i.base==="boss"||i.hp>=i.maxHp||i.d.angleTo(n.d)*Fe>e.healR||(i.hp=Math.min(i.maxHp,i.hp+e.heal),t++,lt(mn(i),8257418,12,4,.5));t&&(lt(mn(n),8257418,16,5,.6),ct("蘑菇法師在補血！先打它","var(--hurt)"))}function V1(n){const e=new _e().crossVectors(n.d,$t(n.d,E.d));for(const t of[-1,1]){const i=nt(n.d,e.clone().multiplyScalar(t),.8);if(bn(i))continue;const r=Di("blobling",i);r.spawn=.4,r.atkCd=1.2+Math.random()*.8}ct("分裂了！","var(--dash)")}const Cp={rage:{name:"狂暴",color:16730682,apply:n=>Object.assign(n,{spdMul:1.35,warnMul:.85,cdMul:.75})},guard:{name:"護盾",color:5999871,apply:n=>{n.guardHp=3,n.bubble=new Z(new pt(n.r*1.5,14,10),new gt({color:8366335,transparent:!0,opacity:.22,depthWrite:!1})),n.mesh.add(n.bubble)}},giant:{name:"巨大",color:16763981,apply:n=>{n.hp=n.maxHp=n.maxHp*1.8,n.r*=1.3,n.scale=1.3}},split:{name:"分裂",color:11561983,apply:()=>{}}};function W1(n){return n<Dr.minTier?0:Math.min(Dr.maxChance,Dr.base+Dr.perTier*n)}function X1(n,e){const t=Cp[e];n.affix=e,t.apply(n);const i=new Z(new Fi(n.r/(n.scale||1)*1.1,.05,4,20),new gt({color:t.color}));i.rotation.x=Math.PI/2,i.position.y=-n.r/(n.scale||1)+.04,n.mesh.add(i),ct(`精英出現：${t.name}${cy[n.base]||""}`,"var(--hurt)")}function q1(n,e){if(e<=0||Dr.skip.includes(n.base)||n.base==="boss"||Math.random()>=W1(_.tier))return!1;const t=Object.keys(Cp).filter(i=>!(i==="split"&&n.base==="jelly"));return X1(n,t[Math.floor(Math.random()*t.length)]),!0}function $1(n,e){const t=n.whirl,i=_n[n.type];if(t.t+=e,t.t<t.wind)return;const r=t.t-t.wind;t.spin+=e*16,t.hitCd-=e,(t.sfxT-=e)<=0&&(t.sfxT=.22,Ue.whirl());const s=nt(n.d,t.dir,i.whirlSpeed*e);bn(s)?t.t=t.wind+i.whirlTime:(n.d.copy(s),t.dir=at(n.d,t.dir).normalize()),Math.random()<.6&&lt(mn(n).addScaledVector(n.d,-.2),16765498,1,3,.3),!(t.hitCd<=0&&E.p.distanceTo(mn(n))<i.whirlR+.5&&(t.hitCd=.6,Ns(n,"whirl",n.d),!n.whirl))&&r>=i.whirlTime&&(n.whirl=null,n.stun=i.whirlDizzy,n.atkCd=er(n),ct("轉暈了！快打","var(--gold)"))}function Y1(n,e){const t=n.swing;if(t.t+=e,!(t.t<t.dur)){if(!t.done){t.done=!0,Ue.swing(),_.shake=Math.max(_.shake,.45);const i=new _e().crossVectors(n.d,t.dir).normalize();for(let a=0;a<=6;a++){const o=(a/6-.5)*Math.PI*2*t.arc,l=t.dir.clone().multiplyScalar(Math.cos(o)).addScaledVector(i,Math.sin(o));lt(vn(nt(n.d,l,t.r*.8)).addScaledVector(n.d,.5),16742954,4,4,.35)}const r=n.d.angleTo(E.d)*Fe,s=$t(n.d,E.d).angleTo(t.dir);r<t.r+.3&&s<Math.PI*t.arc&&Ns(n,"swing",n.d)}t.after+=e,t.after>=.3&&(n.swing=null,n.atkCd=er(n))}}function jf(n,e){Fp(n,e.base==="boss"?2.6:e.r>.8?1.7:1.1),Ue.slam(),_.shake=Math.max(_.shake,e.base==="boss"?.8:.5),lt(vn(n).addScaledVector(n,.3),16765498,26,8,.6)}function Kf(n){const e=n.enemy,t=n.attack,i=_n[e.type];if(Qo(n),t==="shoot"){e.dead||(r1(e,n.dir),Ue.dash()),!n.free&&!e.chain&&(e.atkCd=er(e));return}if(n.free){t==="circle"&&jf(n.c,e),wa(n,E.d)&&Ns(e,t,e.d);return}if(t==="roll"){e.rolling={dir:n.dir.clone(),left:n.L-e.r,hit:new Set,touched:!1},Ue.roll();return}if(t==="hop"&&!bn(n.c)&&e.d.copy(n.c),e.leapFrom=null,e.leapK=0,t==="line")n.noLunge||(e.lunge={dir:n.dir.clone(),left:n.L*.8});else{const r=t==="circle"?n.c:e.d;jf(r,e),e.slamT=.35,i.burnSlam&&t==="circle"&&o1(r,1.8,4)}e.chain||(e.atkCd=er(e)),wa(n,E.d)&&Ns(e,t,e.d)==="hit"&&(n.chill||i.chill)&&aS(2.2),e.chain&&!e.dead&&(e.chain.left>0?e.chain.gap=.18:(e.chain=null,e.atkCd=er(e)))}const er=n=>(Rn.cdMin+Math.random()*Rn.cdRand)*(n.cdMul||1)*(_.tier===1||_.tut?1.5:1)*(n.base==="boss"&&n.phase>0?.7:1);function j1(n,e){const t=n.rolling,i=_n[n.type],r=Math.min(t.left,i.rollSpeed*e),s=nt(n.d,t.dir,r);bn(s)?(t.left=0,lt(vn(n.d).addScaledVector(n.d,.2),9430015,14,5,.5)):(n.d.copy(s),t.dir=at(n.d,t.dir).normalize(),t.left-=r),n.model.rig.roll&&(n.model.rig.roll.rotation.x+=r/n.r),Math.random()<.5&&lt(vn(n.d).addScaledVector(n.d,.1),12101768,1,2,.4);const a=mn(n);if(!(!t.touched&&E.p.distanceTo(a)<n.r+.5+(E.air>0,0)&&(t.touched=!0,Ns(n,"roll",n.d),!n.rolling))){for(const o of _.enemies)o===n||o.dead||o.spawn<1||t.hit.has(o)||mn(o).distanceTo(a)>o.r+n.r||(t.hit.add(o),jr(o,2,t.dir,{pierce:!0}),_.combo=Math.max(0,_.combo-1));t.left<=0&&(n.rolling=null,_.shake=Math.max(_.shake,.25),n.chain&&n.chain.left>0?n.chain.gap=.12:n.base==="boss"?n.atkCd=er(n):(n.chain=null,n.stun=i.dizzy,n.atkCd=er(n),ct("滾石暈了！快打","var(--gold)"),tn("dizzy",n)))}}function K1(n,e){if(e<_n[n.type].diveRange||n.diveCd>0)return;n.diveCd=5;const t=tp(E.d,.3);!t||t.angleTo(E.d)*Fe>e-1||(lt(vn(n.d).addScaledVector(n.d,.2),9430015,16,5,.6),n.d.copy(t),n.spawn=-1.1,n.atkCd=Math.max(n.atkCd,1.2))}function Z1(n,e){for(const i of[..._.warnings])i.free&&Wf(i,n)&&Kf(i);for(const i of _.enemies){if(i.dead)continue;if(i.spawn<1){i.spawn+=e*2;const d=Yt(i.spawn,0,1);i.mesh.scale.setScalar((d<1?d*1.15:1)*(i.scale||1)),i.mesh.visible=i.spawn>0;continue}if(i.mesh.scale.setScalar(i.scale||1),i.bob+=n*5,i.slamT=Math.max(0,i.slamT-n),i.kb.lengthSq()>.01){const d=nt(i.d,i.kb,n);bn(d)||i.d.copy(d),i.kb.copy(at(i.d,i.kb)).multiplyScalar(Math.exp(-6*n))}if(i.stun>0){i.stun-=n;continue}if(i.rolling){j1(i,n);continue}if(i.summonT>0){if(i.summonT-=n,i.summonT<=0){for(const d of[-1,1]){const f=nt(i.d,new _e().crossVectors(i.d,$t(i.d,E.d)).multiplyScalar(d),2.6);if(!bn(f)){const h=Di(i.summonType,f);h.atkCd=1.2+Math.random()}}Ue.slam(),_.shake=.7,i.atkCd=er(i)}continue}if(i.swing){Y1(i,n);continue}if(i.whirl){$1(i,n);continue}if(i.lunge){const d=Math.min(i.lunge.left,18*n),f=nt(i.d,i.lunge.dir,d);bn(f)||i.d.copy(f),i.lunge.dir=at(i.d,i.lunge.dir).normalize(),i.lunge.left-=d,i.lunge.left<=0&&(i.lunge=null);continue}if(i.warn){const d=i.warn;if(d.attack==="hop"&&d.dur-d.t<.32){i.leapFrom||(i.leapFrom=i.d.clone()),i.leapK=Yt(1-(d.dur-d.t)/.32,0,1);const f=new _e().lerpVectors(i.leapFrom,d.c,i.leapK).normalize();bn(f)||i.d.copy(f)}Wf(d,n)&&Kf(d);continue}if(i.chain){i.chain.gap-=n,i.chain.gap<=0&&z1(i);continue}const r=_n[i.type],s=i.d.angleTo(E.d)*Fe,a=$t(i.d,E.d);if(r.turn){i.face=i.face?at(i.d,i.face).normalize():a.clone();const d=i.face.angleTo(a);d>.001&&i.face.lerp(a,Math.min(1,r.turn*n/d)).normalize()}const o=i.base==="boss"||B1()<F1(),l=!i.dummy&&_.graceT<=0&&i.atkCd<=0&&o&&E.state!=="ult"&&_.mode==="play",c=l||i.atkCd<1?r.pref:r.pref+1.4,u=new _e().crossVectors(i.d,a).multiplyScalar(i.strafe*.45);if(!i.dummy){const d=i.base==="archer"&&s<r.flee?1.6:1,f=a.clone().multiplyScalar(s>c+.3?1:s<c-.5?-.7*d:0).add(u),h=nt(i.d,f,r.speed*(i.spdMul||1)*n*Yt(1-jc(i.d,a)*.8,.4,1.4));if(r.aquatic)i.diveCd-=n,Qh(h)?i.d.copy(h):i.strafe*=-1,K1(i,s);else if(!bn(h))i.d.copy(h),i.stuck=Math.max(0,i.stuck-n);else if(i.strafe*=-1,i.stuck+=n*2,i.stuck>5&&s>r.range){i.stuck=0,lt(vn(i.d).addScaledVector(i.d,.3),10185727,12,4,.5);const g=nt(E.d,$t(E.d,i.d),r.pref+1);bn(g)||(i.d.copy(g),i.spawn=-.5)}Math.random()<n*.25&&(i.strafe*=-1)}i.atkCd-=n,l&&s<r.range&&zu(i)}const t=_.enemies;for(let i=0;i<t.length;i++)for(let r=i+1;r<t.length;r++){const s=t[i],a=t[r];if(s.dead||a.dead||s.rolling||a.rolling)continue;const o=s.d.angleTo(a.d)*Fe,l=s.r+a.r+.2;if(o<l&&o>1e-4){const c=$t(s.d,a.d).multiplyScalar((l-o)/2),u=nt(s.d,c,-1),d=nt(a.d,c,1);!bn(u)&&!s.dummy&&s.d.copy(u),!bn(d)&&!a.dummy&&a.d.copy(d)}}for(const i of t)i.dead||Q1(i,e)}const J1=new ki;function Q1(n,e){const t=n.model,i=t.rig,r=(n.base==="grunt"?Math.sin(n.bob)*.06:n.base==="jelly"?Math.sin(n.bob*.7)*.12:n.base==="bee"?.55+Math.sin(n.bob*1.4)*.12:0)+Math.sin(Math.PI*(n.leapK||0))*1.3;if(n.mesh.position.copy(n.d).multiplyScalar(Fe+an(n.d)+n.r+r),n.mesh.quaternion.setFromUnitVectors(rr,n.d),n.squash>.01&&!(n.spawn<1)){const l=n.squash*.2,c=n.scale||1;n.mesh.scale.set(c*(1+l),c*(1-l),c*(1+l)),n.squash*=Math.exp(-e*14)}const a=(n.swing?n.swing.dir:n.rolling?n.rolling.dir:n.lunge?n.lunge.dir:n.warn&&n.warn.kind==="line"?n.warn.dir:n.face||$t(n.d,E.d)).clone().applyQuaternion(J1.copy(n.mesh.quaternion).invert());n.mesh.rotateY(Math.atan2(a.x,a.z));const o=n.warn?n.warn.t/n.warn.dur:0;t.body.scale.setScalar(1+o*(n.base==="boulder"?.08:.2)+(n.warn?Math.sin(n.bob*6)*.04:0));for(const l of t.tint)l.emissive.set(n.flash>0?16777215:n.armored?16756736:l.userData.em??(l.userData.em=l.emissive.getHex())),l.emissiveIntensity=n.flash>0?1:n.armored?1+Math.sin(n.bob*2)*.4:.35+o*1.4;if(n.flash>0&&(n.flash-=e),t.stars.visible=n.stun>0,t.stars.rotation.y+=e*6,n.whirl){const l=n.whirl,c=Math.min(1,l.t/l.wind),u=t.tint[0];if(l.t<l.wind)u.emissive.copy(Zf).lerp(Jf,c),u.emissiveIntensity=.6+c*1.6+(l.wind-l.t<.15?Math.floor(l.t*30)%2*1.2:0),t.body.position.x=Math.sin(n.bob*20)*.03*c;else{const d=l.t-l.wind;u.emissive.copy(Jf).lerp(Zf,Math.min(1,d/.25)),u.emissiveIntensity=Math.max(.18+Math.sin(d*14)*.08,1.4*(1-d/.25)),n.mesh.rotateY(l.spin),t.body.position.x=0}}if(n.base==="grunt"){const l=n.lunge||n.whirl&&n.whirl.t>=n.whirl.wind?1:n.whirl?Math.min(1,n.whirl.t/n.whirl.wind)*.6:o;i.arm.rotation.x=l*Math.PI/2,i.arm.position.z=.1+(n.lunge?.25:-o*.15)}else if(n.base==="jelly")i.tentacles.scale.y=1+Math.sin(n.bob)*.18+o*.4;else if(n.base==="bee")i.wings.scale.y=.4+Math.abs(Math.sin(n.bob*9));else if(n.base==="archer")i.bow.rotation.y=-o*.5,i.bow.position.z=.2+o*.12;else if(n.base==="brute"||n.base==="boss"){const l=n.warn?Math.min(1,o*1.4):0,c=n.slamT/.35,u=n.summonT>0?Math.sin(n.bob*4)*.5+.5:0;i.fists.forEach((d,f)=>{const h=f?1:-1;d.position.set(h*(.98-l*.45),-.2+l*1.15-c*.3+u*.6,.25+l*.1)}),tS(n,i.fists),i.core.position.y=-c*.08,n.base==="brute"&&t.tint[0].color.set(n.hp>5?16777215:n.hp>2.5?16766708:16755421)}else if(n.base==="boulder"){if(!n.rolling){const l=i.roll.rotation.x,c=Math.round(l/(Math.PI*2))*Math.PI*2;i.roll.rotation.x=l+(c-l)*(1-Math.exp(-e*8))+(n.warn?Math.sin(n.bob*14)*.05*o:0)}i.eye.material.emissiveIntensity=n.stun>0?.3:2.2+o*3,i.pebbles.forEach((l,c)=>{l.visible=!!n.rolling,l.position.set(Math.cos(n.bob*2+c*1.6)*.75,-.3+c%2*.4,Math.sin(n.bob*2+c*1.6)*.75)})}}const Zf=new we(16734746),Jf=new we(16769088),eS=new we(16747034),Qf=new we(16718346);function tS(n,e){e.forEach((t,i)=>{const r=t.material,s=n.swing,a=s&&s.side===i;if(r.userData.c0===void 0&&(r.userData.c0=r.emissive.getHex(),r.userData.i0=r.emissiveIntensity),!a){r.emissive.setHex(r.userData.c0),r.emissiveIntensity=r.userData.i0;return}const o=i?1:-1,l=Math.min(1,s.t/s.dur);if(!s.done)t.position.set(o*(1.05+l*.2),-.2+l*.95,.25-l*.6),r.emissive.copy(eS).lerp(Qf,l),r.emissiveIntensity=.5+l*2.2+(s.dur-s.t<.15?Math.floor(s.t*30)%2*1.5:0);else{const c=Math.min(1,s.after/.12),u=o*((1-c)*1.9-c*.9);t.position.set(Math.sin(u)*1.2,.3,Math.cos(u)*1.2),r.emissive.copy(Qf),r.emissiveIntensity=2.5*(1-s.after/.3)}})}function nS(){_.enemies.forEach(n=>!n.dead&&ku(n)),_.enemies=[],_.warnings.forEach(Qo),_.warnings=[]}const E={d:new _e(0,0,1),p:new _e,face:new _e(1,0,0),state:"free",t:0,air:0,invuln:0,guardInv:0,hp:We.maxHp,moving:0,idleT:0,vel:new _e,chillT:0,burnT:0,anim:{sy:1,vy:0,sz:1,vz:0,hop:0,imp:0,lean:0,vl:0}};function Ki(n){E.d.copy(n).normalize(),E.p.copy(vn(E.d))}const Gu=()=>_.tier<=2||_.tut?We.perfectEarly:We.perfectLate,Wr=n=>{_.ult=Math.min(100,_.ult+n)};function Or(n,e){const t=Ze.quaternion.clone().invert(),i=new _e(1,0,0).applyQuaternion(xt.quaternion).applyQuaternion(t),r=new _e(0,1,0).applyQuaternion(xt.quaternion).applyQuaternion(t),s=at(E.d,i.multiplyScalar(n).addScaledVector(r,-e));return s.lengthSq()>1e-8?s.normalize():E.face.clone()}const iS=.14,Hu=(n,e)=>E.state==="dash"||E.state==="parry"?(E.buf={k:n,dir:e,t:iS},!0):!1;function rS(n){const e=E.buf;if(e){if((e.t-=n)<=0){E.buf=null;return}E.state!=="free"||_.mode!=="play"||(E.buf=null,e.k==="dash"?nl(e.dir):e.k==="tap"?il():Ea(e.dir))}}function nl(n){return E.state!=="free"?(Hu("dash",n),!1):_.stamina<1?(ct("體力不足","var(--dash)"),Ue.empty(),!1):(_.stamina-=1,E.state="dash",E.t=0,E.dashDir=n,E.face=n.clone(),E.dashHit=new Set,Ue.dash(),E.dashLen=We.dashDist,tn("dash"),!0)}function Ea(n){if(E.state!=="free"){Hu("parry",n);return}E.state="parry",E.t=0,E.parried=!1,E.parryDir=n,E.face=n.clone(),E.anim.imp=.2,St(300,.08,"square",.04),kn.visible=!0,tn("guard")}function Pp(n=We.lockRange){let e=null,t=n;for(const i of _.enemies){if(i.dead||i.spawn<1)continue;const r=i.d.angleTo(E.d)*Fe-i.r;r<t&&(t=r,e=i)}return e?{e,dist:t+e.r}:null}function il(){if(Hu("tap"))return;const n=Pp(),e=n?$t(E.d,n.e.d):E.face.clone();nl(e)&&n&&(E.dashLen=Yt(n.dist+.6,We.tapDashMin,We.tapDashMax),lt(mn(n.e).addScaledVector(n.e.d,.4),16751164,10,3,.4))}function Vu(){_.state!=="play"||_.mode!=="play"||E.air<=0&&(E.state==="free"||E.state==="dash")&&(E.air=We.jumpTime,Ue.jump(),tn("jumpPress"))}function sS(){const n=Pp(12);return n?$t(E.d,n.e.d):E.face.clone()}function Wu(n){if(_.tut?.noDamage){E.invuln=1,E.anim.imp=1,_.shake=Math.max(_.shake,.8),Ue.hurt(),Us(.3,"#ff4a5a"),ai("hurt",.6),tn("hurt");return}E.hp--,_.hurtCount++,E.hp<=0&&_.passives.has("undying")&&!_.undyingUsed&&(_.undyingUsed=!0,E.hp=1,ct("不屈！","var(--gold)")),E.invuln=We.hurtInvuln,_.combo=0,E.anim.imp=1,_.shake=Math.max(_.shake,1.1),Ue.hurt(),Us(.45,"#ff4a5a"),or(E),ai("hurt",.7);const e=$t(E.d,n).negate();isNaN(e.x)||(Ki(nt(E.d,e,We.knockback)),Au(e,.35)),E.state==="parry"&&(E.state="free",kn.visible=!1),tn("hurt")}function aS(n){E.chillT=n,ct("凍傷！行動變慢","var(--ink)"),lt(E.p,12577535,18,5,.6)}function oS(n){const e=Yc(E.d)==="lava"&&E.air<=0&&E.state!=="dash"&&E.state!=="ult";E.burnT=e?E.burnT+n:0,!(E.burnT<Ii.burnDelay+(_.passives.has("spikes")?.4:0))&&(E.burnT=0,lt(E.p,16738848,26,7,.6),ct("燙！","var(--hurt)"),tn("burn"),E.invuln<=0&&!(E.guardInv>0)&&Wu(E.d),Lp())}function Lp(){const n=py(E.d);n&&(E.hop={from:E.d.clone(),to:n,t:0,dur:Math.max(.18,Math.min(.4,n.angleTo(E.d)*Fe/12))},E.air=Math.max(E.air,E.hop.dur))}function lS(n){if(E.invuln-=n,E.guardInv=Math.max(0,E.guardInv-n),E.chillT=Math.max(0,E.chillT-n),E.air>0&&(E.air-=n,E.air<=0&&(Ue.land(),E.anim.imp=1)),E.moving=0,E.idleT+=n,E.hop){const a=E.hop;a.t+=n;const o=Yt(a.t/a.dur,0,1);Ki(new _e().lerpVectors(a.from,a.to,o).normalize()),E.burnT=0,E.vel.set(0,0,0),o>=1&&(E.hop=null),_.stamina=Math.min(We.stamMax,_.stamina+n/We.stamRegen);return}const e=_.move,t=Yc(E.d)==="ice",i=E.chillT>0?.6:1;if(E.state==="free"&&e.m>0){const a=Or(e.sx,e.sy),o=Yt(1-jc(E.d,a)*.8,.5,1.4)*(bn(E.d)?We.waterSlow:1)*i,l=We.moveSpeed*e.m*o;t?E.vel.lerp(a.clone().multiplyScalar(l),1-Math.exp(-n*(_.passives.has("spikes")?Ii.spikeGrip:Ii.iceGrip))):E.vel.copy(a).multiplyScalar(l),Ki(nt(E.d,E.vel,n)),E.vel.copy(at(E.d,E.vel)),E.face=a,E.moving=e.m,E.idleT=0}else if(t&&E.state!=="dash"&&E.vel.lengthSq()>.02)Ki(nt(E.d,E.vel,n)),E.vel.copy(at(E.d,E.vel)).multiplyScalar(Math.exp(-n*(_.passives.has("spikes")?Ii.spikeGrip:Ii.iceGrip*.55)));else if(E.state==="dash"){E.t+=n;const a=E.dashDir,o=Yt(1-jc(E.d,a)*.9,.55,1.5);Ki(nt(E.d,a,We.dashDist/We.dashTime*o*n)),E.dashDir=at(E.d,a).normalize(),E.face=E.dashDir,Math.random()<.8&&lt(E.p.clone().addScaledVector(E.d,.4),9430015,1,1.5,.3);for(const l of _.enemies)l.dead||l.spawn<1||E.dashHit.has(l)||E.p.distanceTo(mn(l))>l.r+.65||(E.dashHit.add(l),jr(l,o*(l.stun>0?1.5:1)*(_.passives.has("ram")?1.4:1)*(_.ramMul||1),E.dashDir));E.t>=We.dashTime*E.dashLen/We.dashDist&&(E.state="free",E.anim.imp=.7,E.vel.copy(E.dashDir).multiplyScalar(t?We.moveSpeed*1.4:0),Yc(E.d)==="lava"&&Lp())}else if(E.state==="parry"){E.t+=n,E.t>=We.parryTime&&(E.state="free",kn.visible=!1,St(240,.06,"sine",.05));const a=E.t<=Gu(),o=1-E.t/We.parryTime;E.parried||kn.material.color.set(a?16763981:5999871),kn.material.opacity=o<.25?Math.floor(E.t*24)%2?.85:.25:.5+.45*o}else kn.visible&&(kn.material.opacity=Math.min(.85,E.guardInv*2),E.guardInv<=0&&(kn.visible=!1));if(E.state!=="free")E.idleT=0;else if(E.idleT>.8){const a=Or(0,1);E.face=at(E.d,E.face.clone().lerp(a,1-Math.exp(-n*4))).normalize()}oS(n),rS(n),_.stamina=Math.min(We.stamMax,_.stamina+n/We.stamRegen);const r=_.passives.has("magnet"),s=_.crystals.find(a=>a.d.angleTo(E.d)*Fe<(r?2.75:1.1));if(s){const a=pi.crystalPay+(r?5:0)+(_.gemPickup||0);lt(s.mesh.position,4843263,20,6,.6),Ze.remove(s.mesh),_.crystals=_.crystals.filter(o=>o!==s),Wr(pi.crystal),_.runCrystals+=a,Ue.pickup(),tn("crystal"),or(E),ct(`星晶 +${a}　大招 +${pi.crystal}`,"var(--ink)")}}function cS(n,e){ys.position.copy(E.p),ys.quaternion.setFromUnitVectors(rr,E.d);const t=at(E.d,E.face).applyQuaternion(ys.quaternion.clone().invert());t.lengthSq()>1e-6&&(Ss.rotation.y=Math.atan2(t.x,t.z));const i=E.anim,r=E.state==="dash"||E.state==="ult";let s=1+Math.sin(e*3)*.05,a=1,o=0;if(E.moving>0&&E.state==="free"&&E.air<=0){i.hop+=n*(8+E.moving*6);const f=Math.abs(Math.sin(i.hop));o=f*.3*E.moving,s=.8+f*.38}if(r?(s=.6,a=1.8):E.state==="parry"&&(s=.9),E.air>0){const f=1-E.air/We.jumpTime;o=Math.sin(Math.PI*f)*1.1,s=f<.5?1.3:1.05}_.state==="over"&&(s=.55,o=0),s*=1-i.imp*.42,i.imp*=Math.exp(-n*7),i.vy+=(s-i.sy)*280*n,i.vy*=Math.exp(-n*13),i.sy+=i.vy*n,i.vz+=(a-i.sz)*280*n,i.vz*=Math.exp(-n*13),i.sz+=i.vz*n;const l=1/Math.sqrt(Math.max(.25,i.sy*i.sz));Nu.scale.set(l,i.sy,i.sz*l),Ss.position.y=o;const c=r?.35:E.moving>0?-.18*E.moving:0;i.vl+=(c-i.lean)*160*n,i.vl*=Math.exp(-n*7),i.lean+=i.vl*n,Gn.rotation.x=i.lean,(_.state==="play"||_.state==="over"||_.state==="win")&&Ky(n,E),$y(n,_.state==="over"?"dizzy":r||E.state==="parry"||_.mode==="ultDraw"?"determined":"idle");const u=E.state==="parry"&&E.t<=Gu();Wo.emissive.set(E.state==="ult"||u||E.guardInv>0?13144064:E.state==="parry"?2052048:E.state==="dash"?2783952:E.chillT>0?8376575:671626),Wo.emissiveIntensity=E.state==="free"&&!(E.guardInv>0)?.6:.9;let d=0;if(E.state==="parry"){const f=Yt(E.t/We.parryTime,0,1),h=(f-.18)/.82;d=f<.18?1-(1-f/.18)**3:1-h*h*(3-2*h)}Ss.position.x=0,Ss.position.z=d*.38,Gn.rotation.x+=d*.3,ys.visible=E.invuln>0&&E.state!=="ult"&&_.state==="play"?Math.floor(e*16)%2===0:!0}function uS(n){Object.assign(E,{buf:null,hp:We.maxHp,invuln:0,guardInv:0,state:"free",air:0,t:0,chillT:0,burnT:0,hop:null}),E.vel.set(0,0,0),kn.visible=!1,Ki(n),ai("idle")}const Dp=20,rl=[],dS=new ar(.33,.37,28);for(let n=0;n<Dp;n++){const e=new Z(dS,new gt({color:16777215,transparent:!0,opacity:0,side:Zt,depthWrite:!1}));e.visible=!1,e.renderOrder=3,Ze.add(e),rl.push({m:e,t:0,dur:1,grow:3})}let fS=0;const hS=new _e(0,0,1);function As(n,e=1,t=.9,i=16777215,r=.55){const s=rl[fS++%Dp];s.t=0,s.dur=t,s.grow=2.6*e,s.op=r,s.m.position.copy(n).multiplyScalar(Fe+.03),s.m.quaternion.setFromUnitVectors(hS,n),s.m.scale.setScalar(e),s.m.material.color.set(i),s.m.visible=!0}const sl=64,pS=new zs(1,1),Bi=new Bs(pS,new gt({color:16777215,transparent:!0,opacity:.55,depthWrite:!1,side:Zt}),sl);Bi.frustumCulled=!1;Bi.renderOrder=2;Ze.add(Bi);const al=[],Yi=new Bt,Ip=new we;for(let n=0;n<sl;n++)al.push({life:0,max:1,p:new _e,q:new ki,w:1,l:1}),Yi.scale.setScalar(0),Yi.updateMatrix(),Bi.setMatrixAt(n,Yi.matrix),Bi.setColorAt(n,Ip.set(16777215));let mS=0;const eh=new _e,ec=new _e,th=new ot;function tu(n,e,t,i,r,s=2){const a=mS++%sl,o=al[a];o.life=o.max=s,o.w=t,o.l=i,o.p.copy(vn(n)).addScaledVector(n,.025),ec.copy(e).addScaledVector(n,-e.dot(n)).normalize(),eh.crossVectors(ec,n).normalize(),th.makeBasis(eh,ec,n),o.q.setFromRotationMatrix(th),Bi.setColorAt(a,Ip.set(r)),Bi.instanceColor.needsUpdate=!0}function Up(n){let e=!1;for(let t=0;t<sl;t++){const i=al[t];if(i.life<=0&&!i.shown)continue;i.life-=n;const r=Math.max(0,i.life/i.max);i.shown=i.life>0,Yi.position.copy(i.p),Yi.quaternion.copy(i.q),Yi.scale.set(i.w*Math.min(1,r*2),i.l*Math.min(1,r*2),1),Yi.updateMatrix(),Bi.setMatrixAt(t,Yi.matrix),e=!0}e&&(Bi.instanceMatrix.needsUpdate=!0)}const gS={grass:"grass",ice:"snow",desert:"sand",volcano:"ash"};function Np(n){return cn(n)<0?It.liquid:gS[It.id]}const _S=n=>It.liquid==="lava"&&cn(n)<.12,hn={water:14677759,ice:15399167,lava:16742954,grass:9429114,snow:16777215,sand:15254138,ash:6969950},nh={snow:12111072,sand:10121272,ash:2760740},sn=new _e,nu=new _e;function Fp(n,e=1){const t=Np(n),i=vn(n);if(sn.copy(n),t==="water")jt(i,sn,hn.water,Math.round(14*e),4+e,.7,14,.7),As(n,e*.9,1.1),As(n,e*.5,.7);else if(t==="ice"){jt(i,sn,hn.ice,Math.round(10*e),3,.5,12,1.2,.7);for(let r=0;r<3;r++)nu.copy(new _e().randomDirection()),tu(n,nu,.05,.5*e+Math.random()*.4,16777215,1.6)}else t==="lava"?(jt(i,sn,14540253,Math.round(8*e),1.4,1.1,-2,.5,1.6),jt(i,sn,hn.lava,Math.round(6*e),4,.6,12,.6)):t==="grass"?jt(i,sn,Math.random()<.5?hn.grass:16777215,Math.round(6*e),2.5,.6,8,1.3,.7):(jt(i,sn,hn[t],Math.round(10*e),1.8,.8,3,1.6,1.3),As(n,e*.7,.5,hn[t],.35))}const ih=new WeakMap;function rh(n,e,t){let i=ih.get(n);if(!i){ih.set(n,i={d:e.clone(),t:Math.random()*.2,air:0});return}const r=i.d.angleTo(e)*Fe;i.d.copy(e),i.t-=t.dt;const s=r/Math.max(t.dt,1e-4);if(s<.4||t.air)return;const a=Np(e),o=s>7,l=An.fx;if(i.t>0)return;const c=vn(e),u=nu.copy(e).cross(t.face||sn.set(0,0,1)).normalize();sn.copy(e),a==="water"?o?(i.t=.045,jt(c,sn,hn.water,5,4,.55,16,.5,1.5,u),jt(c,sn,hn.water,5,4,.55,16,.5,1.5,u.clone().negate()),Math.random()<.6&&As(e,.8,.8)):(i.t=t.big?.35:.24,As(e,t.big?1.2:.7,1),Math.random()<l*.6&&jt(c,sn,hn.water,2,1.6,.4,14,.5,.7)):a==="ice"?o?(i.t=.05,tu(e,t.face||u,.07,.45,16777215,1.4),jt(c,sn,hn.ice,2,2,.35,10,1,.6)):(i.t=.3,Math.random()<l&&jt(c,sn,hn.ice,2,1.2,.5,6,1,.5)):a==="lava"?(i.t=o?.04:.2,jt(c,sn,hn.lava,o?3:1,2.5,.5,-1,.6,.8)):(_S(e)&&Math.random()<l*.5&&jt(c,sn,hn.lava,1,1.5,.8,-1.5,.4,.6),o?(i.t=.06,jt(c,sn,a==="grass"?Math.random()<.3?16773792:hn.grass:hn[a],2,2.2,.5,6,1,.8)):(i.t=t.big?.4:.32,nh[a]&&t.prints&&tu(e,t.face||u,.12,.17,nh[a],2.6),a!=="grass"&&Math.random()<l*.8&&jt(c,sn,hn[a],t.big?4:2,1,.6,2,1.4,t.big?1.3:.9)))}let sh=0;function vS(n){for(const e of rl){if(!e.m.visible)continue;e.t+=n;const t=e.t/e.dur;e.m.scale.setScalar(e.m.scale.x+e.grow*n/e.dur),e.m.material.opacity=Math.max(0,1-t)*e.op,t>=1&&(e.m.visible=!1)}if(Up(n),!(_.state!=="play"||_.mode==="ultDraw")){rh(E,E.d,{dt:n,air:E.air>0&&!E.hop,face:E.face,prints:!0}),sh>0&&E.air<=0&&Fp(E.d,.8),sh=E.air;for(const e of _.enemies)e.dead||e.spawn<1||(rh(e,e.d,{dt:n,air:e.base==="bee"||(e.leapK||0)>0,big:e.r>.8,face:null,prints:e.r>.8}),e.base==="jelly"&&It.liquid!=="ice"&&Math.random()<n*.8&&As(e.d,1,1.4,It.liquid==="lava"?16756848:16777215,.3))}}qt("burn",()=>{const n=vn(E.d);jt(n,E.d.clone(),15658734,12,1.6,1.1,-2.5,.6,1.8)});function xS(){for(const n of rl)n.m.visible=!1;for(const n of al)n.life=0;Up(0)}const MS=ee("ptrs"),Op=[];for(let n=0;n<3;n++){const e=document.createElement("i");e.hidden=!0,MS.append(e),Op.push(e)}const yS=6.5;function SS(n){let e=[];_.state==="play"&&_.mode==="play"&&_.storm<.5&&(e=_.enemies.filter(s=>!s.dead&&s.spawn>=0&&s.d.angleTo(E.d)*Fe>yS).sort((s,a)=>s.d.angleTo(E.d)-a.d.angleTo(E.d)).slice(0,3));const t=n(E.d),i=innerWidth/2-34,r=innerHeight/2-90;Op.forEach((s,a)=>{const o=e[a];if(s.hidden=!o,!o)return;const l=n(nt(E.d,$t(E.d,o.d),2.5)),c=Math.atan2(l.y-t.y,l.x-t.x);s.style.transform=`translate(${innerWidth/2+Math.cos(c)*i}px,${innerHeight/2+Math.sin(c)*r}px) rotate(${c}rad)`,s.className=o.base==="boss"?"boss":""})}const Lt={circle:"實心圓：走出去或衝出去",ring:"圓環震波：按跳躍鈕躍過，或格擋",boulder:"滾石會連滾三次，一次比一次快！滾完會暈",jelly:"水母住在湖裡：衝進水中或用大招掠過湖面打牠",archer:"箭可以格擋反彈，也能跳過",ice:"冰面會滑：提早放開方向，用慣性走位",frostGrunt:"霜矛兵刺中會凍傷，讓你變慢",frostBrute:"冰巨魔的震波有兩圈",frostArcher:"霜弓手一次放三支箭",storm:"沙暴來襲時看不見敵人，只看得見黃色預警！",sandGrunt:"沙矛兵會鑽地，從身邊冒出來",sandBoulder:"沙滾石會連滾四次",whirl:"長矛兵全身發黃光＝要旋轉突進了！往側邊閃開或跳過，轉完會暈",swing:"巨魔的拳頭發紅＝要橫掃了！跳起來、衝撞穿過，或朝它格擋",bee:"蜂群很脆但很快：點一下自動衝撞，或用大招一筆掃掉",hopper:"跳跳蛙會跳到黃圈落地，還會連跳兩次：看準落點再閃",shell:"盾甲蟲正面擋得住衝撞：繞到牠背後或側面，或格擋牠的盾擊",splitter:"分裂泥球打死會分成兩隻小的",shroom:"蘑菇法師會種毒菇、幫隊友補血：優先打倒它",elite:"有光圈的是精英：狂暴、護盾、巨大或分裂",lava:"岩漿河會燙傷：用跳躍或衝撞越過，或走沒有岩漿的淺灘",lavaGrunt:"熔矛兵死掉時會爆炸，打完快走開",lavaBrute:"熔岩巨魔砸過的地面會燃燒一陣子",magmaJelly:"岩漿水母的體型更大，也住在岩漿裡"},Tt=[{id:"grass",name:"草原星",blurb:"溫和的起點。湖面會擋住敵人，大招掠過湖面耗墨很少。",hpMul:1,reward:50,roster:["grunt","brute","boulder","jelly","archer"],extra:["bee","hopper","shell","splitter","shroom"],levels:[{name:"初次降落",tier:1,waves:["grunt*2","grunt*3",["grunt*2 bee*3",Lt.bee],"grunt*3 bee*3","grunt*3 brute"]},{name:"巨魔現身",tier:2,waves:[["grunt*3",Lt.whirl],["grunt*2 brute",Lt.circle],["grunt*2 hopper",Lt.hopper],["grunt*3 brute",Lt.swing],"grunt*2 hopper*2 / bee*3 @1"]},{name:"震波平原",tier:3,waves:["grunt*2 brute",["grunt*3 brute",Lt.ring],["shell grunt*2",Lt.shell],["shell brute / grunt*3 @1",Lt.elite],"shell*2 grunt*2 brute / hopper*2 @1"]},{name:"落石山道",tier:3,waves:[["grunt*2 boulder",Lt.boulder],"hopper*2 boulder","grunt*3 brute boulder","shell boulder*2 / bee*4 @1","grunt*3 brute boulder / hopper*2 @1"]},{name:"水母之湖",tier:4,waves:[["jelly grunt*2",Lt.jelly],"jelly*2 hopper*2",["jelly splitter*2",Lt.splitter],"jelly*2 boulder shell","jelly*2 splitter*2 brute","jelly*3 boulder / bee*4 @1"]},{name:"松果森林",tier:4,waves:[["archer grunt*2",Lt.archer],"archer*2 shell",["archer shroom grunt*2",Lt.shroom],"archer*2 jelly hopper*2","archer*2 shroom boulder brute","archer*3 jelly splitter*2","archer*3 boulder brute / shroom bee*4 @2"]},{name:"總攻擊",tier:5,waves:["grunt*4 brute / shell boulder hopper @1","archer*2 jelly boulder / grunt*3 shroom @2","shell*2 brute*2 boulder / archer*2 splitter*2 @2","archer*3 jelly hopper*2 / grunt*3 brute shroom @2","grunt*4 brute*2 shell / archer*2 jelly bee*5 @2"]},{name:"岩王",tier:6,boss:!0,waves:[["rockKing grunt*2 / grunt*3 @1","岩王：完美格擋可以讓它暈眩"]]}]},{id:"ice",name:"冰雪星",blurb:"結冰的湖面會滑，放開方向後還會繼續滑一段。",hpMul:1.15,reward:80,gate:10,roster:["frostGrunt","frostBrute","boulder","jelly","frostArcher"],extra:["hopper","shell","bee","shroom","splitter"],levels:[{name:"滑行訓練",tier:3,hpMul:1,waves:[["grunt*3",Lt.ice],"grunt*3 archer","grunt*2 hopper*2","grunt*4 archer","grunt*3 brute bee*3"]},{name:"霜矛小隊",tier:4,hpMul:1.05,waves:[["frostGrunt*3",Lt.frostGrunt],"frostGrunt*3 archer","frostGrunt*4 brute","frostGrunt*4 archer","frostGrunt*5 brute"]},{name:"冰原震動",tier:5,waves:["frostGrunt*2 brute",["frostGrunt*2 frostBrute",Lt.frostBrute],"frostGrunt*3 frostBrute boulder","frostBrute*2 boulder","frostGrunt*4 frostBrute boulder","frostBrute*3 boulder"]},{name:"冰下來客",tier:5,waves:["jelly*2 frostGrunt*2","jelly*2 frostBrute","jelly*3 archer*2","jelly*2 frostGrunt*3 / boulder*2 @1","jelly*4 archer*2","jelly*3 frostGrunt*3 / boulder*2 @1"]},{name:"三連箭",tier:6,waves:[["frostArcher frostGrunt*2",Lt.frostArcher],"frostArcher*2 frostGrunt*2","frostArcher*2 frostBrute","frostArcher*2 boulder*2 / frostGrunt*3 @1","frostArcher*3 frostBrute","frostArcher*3 boulder*2 / frostGrunt*3 @1"]},{name:"白色迷宮",tier:6,waves:["frostGrunt*4 boulder / frostBrute @1","frostArcher*2 jelly*2 / frostGrunt*3 @1","frostBrute*2 boulder*2 / frostArcher*2 shell @1","frostGrunt*4 frostArcher*2 / frostBrute*2 hopper*2 @2","frostBrute*3 boulder*2 / frostArcher*2 @1","frostGrunt*5 frostArcher*2 / frostBrute*2 @2"]},{name:"永凍要塞",tier:7,waves:["frostGrunt*4 frostBrute boulder / frostArcher*2 jelly @2","frostBrute*2 frostArcher*2 shroom / boulder*2 frostGrunt*3 @2","frostGrunt*5 frostBrute*2 / frostArcher*3 jelly*2 @3","frostBrute*3 frostArcher*2 shell*2 / boulder*2 frostGrunt*3 shroom @2","frostGrunt*6 frostBrute*2 / frostArcher*3 jelly*2 @3"]},{name:"冰晶女王",tier:7,boss:!0,waves:[["frostQueen frostGrunt*2 / frostGrunt*3 @1","冰晶女王：護甲展開時，照編號順序劃過光點"]]}]},{id:"desert",name:"沙漠星",blurb:"沙暴定期掃過，看不見敵人，只看得見地上的預警。",hpMul:1.3,reward:110,gate:22,roster:["sandGrunt","brute","sandBoulder","jelly","archer"],extra:["bee","splitter","hopper","shell","shroom"],levels:[{name:"沙丘邊境",tier:4,hpMul:1.05,waves:[["grunt*4",Lt.storm],"grunt*3 archer*2","grunt*2 bee*4","grunt*3 splitter*2","grunt*4 brute boulder"]},{name:"地底伏兵",tier:5,hpMul:1.1,waves:[["sandGrunt*3",Lt.sandGrunt],"sandGrunt*4 archer","sandGrunt*3 brute","sandGrunt*4 boulder","sandGrunt*4 brute","sandGrunt*5 boulder"]},{name:"風化巨岩",tier:7,waves:[["sandBoulder grunt*2",Lt.sandBoulder],"sandBoulder*2 sandGrunt*2","sandBoulder*2 hopper*2","sandBoulder*2 archer*2 / sandGrunt*3 @1","sandBoulder*3 brute shell","sandBoulder*3 archer*2 / sandGrunt*3 @1"]},{name:"綠洲之戰",tier:7,waves:["jelly*2 sandGrunt*3","jelly*2 archer*2 splitter*2","jelly*3 sandBoulder sandGrunt*2","jelly*2 brute*2 / sandGrunt*4 @1","jelly*4 sandBoulder sandGrunt*2","jelly*3 brute*2 / sandGrunt*4 @1"]},{name:"沙中箭雨",tier:8,waves:["archer*3 sandGrunt*2","archer*3 shroom boulder","archer*4 sandBoulder / sandGrunt*4 bee*4 @1","archer*3 jelly*2 / brute*2 sandGrunt*2 @2","archer*5 sandBoulder / sandGrunt*4 @1","archer*4 jelly*2 / brute*2 sandGrunt*2 @2"]},{name:"風暴之眼",tier:8,waves:["sandGrunt*5 brute / archer*3 @2","sandBoulder*3 archer*2 / brute*2 shell @1","sandGrunt*4 brute*2 shroom / sandBoulder*2 jelly*2 @2","archer*4 brute*2 / sandGrunt*5 @2","sandGrunt*5 brute*2 / sandBoulder*2 jelly*2 @2","archer*5 brute*2 / sandGrunt*5 @2"]},{name:"王蟲巢穴",tier:9,waves:["sandGrunt*6 brute*2 / sandBoulder*2 archer*3 @3","brute*3 archer*3 / sandGrunt*5 sandBoulder @3","sandBoulder*3 brute*2 jelly*2 / sandGrunt*6 archer*2 @3","brute*4 archer*3 / sandGrunt*5 sandBoulder @3","sandBoulder*4 brute*2 jelly*2 / sandGrunt*6 archer*2 @3"]},{name:"沙海王蟲",tier:9,boss:!0,waves:[["sandWyrm sandGrunt*2 / sandGrunt*3 @1","沙海王蟲：光點是牠的身體，會移動，一筆全部切過"]]}]},{id:"volcano",name:"火山星",blurb:"岩漿河會燙傷你，跳躍和衝撞可以安全越過。",hpMul:1.4,reward:140,gate:36,roster:["lavaGrunt","lavaBrute","boulder","magmaJelly","archer"],extra:["shell","shroom","hopper","splitter","bee"],levels:[{name:"灰燼平原",tier:5,hpMul:1.1,waves:[["grunt*4 archer",Lt.lava],"grunt*3 hopper*2","grunt*3 brute boulder archer","grunt*3 shell bee*3","grunt*4 brute boulder archer"]},{name:"自爆小隊",tier:6,hpMul:1.15,waves:[["lavaGrunt*3",Lt.lavaGrunt],"lavaGrunt*4 archer","lavaGrunt*4 boulder","lavaGrunt*5 brute","lavaGrunt*5 boulder","lavaGrunt*6 brute"]},{name:"焦土行軍",tier:9,waves:[["lavaBrute grunt*3",Lt.lavaBrute],"lavaBrute lavaGrunt*3","lavaBrute*2 archer*2 shroom","lavaBrute*2 boulder*2 / lavaGrunt*3 @1","lavaBrute*3 archer*2 shell","lavaBrute*3 boulder*2 / lavaGrunt*3 @1"]},{name:"岩漿之主",tier:9,waves:[["magmaJelly lavaGrunt*3",Lt.magmaJelly],"magmaJelly*2 archer*2","magmaJelly*2 lavaBrute","magmaJelly*3 boulder*2 / lavaGrunt*4 @1","magmaJelly*3 lavaBrute","magmaJelly*4 boulder*2 / lavaGrunt*4 @1"]},{name:"火雨",tier:10,waves:["archer*4 lavaGrunt*2","archer*3 lavaBrute*2 shroom","archer*4 magmaJelly*2 / lavaGrunt*4 hopper*2 @2","archer*3 boulder*3 / lavaBrute*2 lavaGrunt*2 @2","archer*5 magmaJelly*2 / lavaGrunt*4 @2","archer*4 boulder*3 / lavaBrute*2 lavaGrunt*2 @2"]},{name:"裂谷死鬥",tier:10,waves:["lavaGrunt*6 lavaBrute / archer*3 @2","boulder*3 magmaJelly*2 / lavaBrute*2 shell*2 @1","lavaBrute*2 archer*3 shroom / lavaGrunt*6 @3","lavaBrute*3 boulder*2 / magmaJelly*2 archer*3 @3","lavaBrute*3 archer*3 / lavaGrunt*6 @3","lavaBrute*4 boulder*2 / magmaJelly*2 archer*3 @3"]},{name:"火山口",tier:11,waves:["lavaGrunt*6 lavaBrute*2 / boulder*3 archer*3 @3","lavaBrute*3 archer*4 / lavaGrunt*6 magmaJelly @3","lavaBrute*3 boulder*3 magmaJelly*2 / lavaGrunt*7 archer*3 @4","lavaBrute*4 archer*4 / lavaGrunt*6 magmaJelly @3","lavaBrute*4 boulder*3 magmaJelly*2 / lavaGrunt*7 archer*3 @4"]},{name:"熔岩泰坦",tier:11,boss:!0,waves:[["lavaTitan lavaGrunt*2 / lavaGrunt*3 @1","熔岩泰坦：只劃金色光點，碰到紅色光點就失敗"]]}]}],Bp=2,Pn=(n,e)=>`${Tt[n].id}-${e+1}`;function Kr(n){const[e,t]=n.split("-"),i=Tt.findIndex(s=>s.id===e),r=t-1;return i<0||!Tt[i].levels[r]?null:{id:n,planet:Tt[i],p:i,i:r,...Tt[i].levels[r]}}const bS=()=>Tt.flatMap((n,e)=>n.levels.map((t,i)=>Kr(Pn(e,i))));function wS(n){const[e,t]=Array.isArray(n)?n:[n],i=e.split("/").map(r=>{const s={};for(const a of r.trim().split(/\s+/)){if(a[0]==="@"){s.at=+a.slice(1);continue}const[o,l]=a.split("*");s[o]=(s[o]||0)+(+l||1)}return s});return t?{groups:i,tip:t}:{groups:i}}const ES=n=>Object.entries(n).filter(([e])=>e!=="at").flatMap(([e,t])=>Array(t).fill(e));function TS(n,e){const[t,i,r,s,a]=e.roster,o={[t]:Math.min(3+n,8),[i]:Math.min(1+(n>>1),3),[r]:Math.min(1+(n>>1),3)},l={[t]:Math.min(2+n,6),[s]:Math.min(1+(n>>2),2),[a]:Math.min(1+(n>>1),3),at:2},c=e.extra?.[n%e.extra.length];return c&&(l[c]=(l[c]||0)+Math.min(1+(n>>2),3)),{groups:[o,l]}}const Xo=[{id:"bronze",name:"銅",pts:1},{id:"silver",name:"銀",pts:2},{id:"gold",name:"金",pts:3},{id:"diamond",name:"鑽石",pts:5}],Fs={low:{name:"低階",cost:80,cards:2,odds:[65,28,6,1]},mid:{name:"中階",cost:200,cards:3,odds:[40,40,16,4]},high:{name:"高階",cost:400,cards:3,odds:[15,45,30,10],minRarity:1}},kp=10,gi={hp:{name:"生命上限",cap:10,w:10,desc:"每 2 點 +1 格生命"},stamina:{name:"體力",cap:9,w:9,desc:"每 3 點 +1 格體力，每點回復快 2%"},charge:{name:"大招充能",cap:10,w:9,desc:"每點自動充能 +0.1/秒、開局 +1"},ink:{name:"墨水長度",cap:10,w:8,desc:"每點大招可劃長度 +4%"},ram:{name:"衝撞強化",cap:10,w:8,desc:"每點衝撞傷害 +5%"},parry:{name:"格擋專精",cap:8,w:7,desc:"每點完美格擋時間 +0.012 秒"},gems:{name:"星晶獲得",cap:8,w:6,desc:"每點撿星晶 +1、通關獎勵 +3%"}},ah=[.4,.6,.8,1],zp=(n,e)=>Math.ceil(gi[n].cap*ah[Math.min(e,ah.length-1)]),qo={line:{name:"劃線斬",desc:"基本大招"},chain:{name:"連鎖線",desc:"斬中敵人時，閃電跳向附近 2 隻敵人，造成一半傷害"},blast:{name:"爆炸終點",desc:"路線終點引爆，範圍傷害隨當下速度變強"}},$o={steady:{name:"穩固格擋",desc:"完美格擋時間 +0.06 秒"},regen:{name:"再生黏液",desc:"每清完一波多回 1 格生命"},magnet:{name:"星晶磁鐵",desc:"撿取範圍 2.5 倍，星晶掉落 +5"},ram:{name:"重擊衝撞",desc:"衝撞傷害 ×1.4"},spikes:{name:"防滑釘",desc:"冰面幾乎不滑，岩漿灼傷延後 0.4 秒"},focus:{name:"專注",desc:"完美格擋額外充能 15"},undying:{name:"不屈",desc:"每關一次，致命傷害時留下 1 格生命"}},Gp=3;function Ta(n={},e=0,t={maxHp:5,stamMax:3,stamRegen:.8,charge:.8,start:10}){const i=r=>n[r]||0;return{maxHp:t.maxHp+Math.floor(i("hp")/2),stamMax:t.stamMax+Math.floor(i("stamina")/3),stamRegen:t.stamRegen*(1-.02*i("stamina")),charge:t.charge+.1*i("charge"),start:t.start+i("charge"),slots:2+e,inkMul:1+.04*i("ink"),ramMul:1+.05*i("ram"),perfectBonus:.012*i("parry"),gemPickup:i("gems"),gemMul:1+.03*i("gems")}}function AS(n,e,t=Math.random){const i=Fs[n],r=n==="high"&&(e.pity||0)>=kp-1,s=()=>{let c=t()*100;for(let u=0;u<4;u++)if((c-=i.odds[u])<0)return Math.max(u,i.minRarity||0);return 3},a=Array.from({length:i.cards},s);r&&!a.includes(3)&&(a[0]=3);const o=[],l=new Set;for(const c of a){const u=RS(c,e,l,t);u&&(o.push(u),l.add(u.key))}return{cards:o,diamond:a.includes(3)}}function RS(n,e,t,i){const r=[];for(const[a,o]of Object.entries(gi)){const l=e.pts[a]||0,c=zp(a,e.bosses)-l;c<=0||t.has(a)||r.push({w:o.w*(1-l/o.cap)**2,card:{kind:"stat",key:a,rarity:n,pts:Math.min(Xo[n].pts,c)}})}if(n>=2)for(const a of Object.keys($o))!e.ownedPassives.includes(a)&&!t.has("p:"+a)&&r.push({w:2.2,card:{kind:"passive",key:"p:"+a,id:a,rarity:n}});if(n>=3){for(const a of Object.keys(qo))!e.ownedUlts.includes(a)&&!t.has("u:"+a)&&r.push({w:6,card:{kind:"ult",key:"u:"+a,id:a,rarity:n}});(e.slot||0)<Gp-2&&!t.has("slot")&&r.push({w:6,card:{kind:"slot",key:"slot",rarity:n}})}if(!r.length)return t.has("refund")?null:{kind:"refund",key:"refund",rarity:n,gems:30*Xo[n].pts};let s=i()*r.reduce((a,o)=>a+o.w,0);for(const a of r)if((s-=a.w)<=0)return a.card;return r[r.length-1].card}function CS(n,e,t,i,r=0){const s=n*(e?3:1);return Math.round(i?s:s*.25)+Math.max(0,t-r)*Math.round(n*.4)}function PS(n={}){const e={};return n.hp&&(e.hp=Math.min(gi.hp.cap,n.hp*2)),n.stamina&&(e.stamina=Math.min(gi.stamina.cap,n.stamina*3)),n.charge&&(e.charge=Math.min(gi.charge.cap,n.charge*2)),{pts:e,slot:Math.min(Gp-2,n.slot||0)}}const Hp="slasharena-save",LS=2,Vp=()=>({v:LS,crystals:0,stats:{},slot:0,pity:0,draws:0,pending:null,owned:{ult:["line"],passive:[]},equip:{ult:"line",passives:[]},levels:{},endless:{}});function DS(n){const e=Vp();if(!n||typeof n!="object")return e;if(e.crystals=Number.isFinite(n.crystals)?Math.max(0,n.crystals):0,n.stats&&typeof n.stats=="object"){for(const t of Object.keys(gi))Number.isFinite(n.stats[t])&&(e.stats[t]=Math.max(0,Math.min(gi[t].cap,n.stats[t])));e.slot=Number.isFinite(n.slot)?n.slot:0}else n.upgrades&&typeof n.upgrades=="object"&&Object.assign(e,(({pts:t,slot:i})=>({stats:t,slot:i}))(PS(n.upgrades)));return Number.isFinite(n.pity)&&(e.pity=n.pity),Number.isFinite(n.draws)&&(e.draws=n.draws),Array.isArray(n.pending?.cards)&&n.pending.cards.length&&(e.pending=n.pending),Array.isArray(n.owned?.ult)&&(e.owned.ult=[...new Set(["line",...n.owned.ult])]),Array.isArray(n.owned?.passive)&&(e.owned.passive=[...n.owned.passive]),e.owned.ult.includes(n.equip?.ult)&&(e.equip.ult=n.equip.ult),Array.isArray(n.equip?.passives)&&(e.equip.passives=n.equip.passives.filter(t=>e.owned.passive.includes(t))),n.levels&&typeof n.levels=="object"&&(e.levels={...n.levels}),n.endless&&typeof n.endless=="object"&&(e.endless={...n.endless}),e}function IS(){try{return DS(JSON.parse(localStorage.getItem(Hp)))}catch{return Vp()}}const de=IS();function cr(){try{localStorage.setItem(Hp,JSON.stringify(de))}catch{}}const iu=typeof location>"u"?new URLSearchParams:new URLSearchParams(location.search),Xu=iu.has("unlock");iu.has("crystals")&&(de.crystals=+iu.get("crystals")||0,cr());const ol=n=>!!de.levels[n]?.stars,Wp=n=>Pn(n,Tt[n].levels.length-1),Xp=n=>Xu||n===0||ol(Wp(n-1)),US=n=>n>0&&(de.levels[Wp(n-1)]?.stars||0)>=3,qp=n=>Xu||US(n)?0:Math.max(0,(Tt[n].gate||0)-Yo());function Aa(n){return Xp(n)&&!qp(n)}const $p=(n,e)=>n>0&&e<Bp;function ru(n,e){return Xu?!0:(e===0||ol(Pn(n,e-1)))&&(Aa(n)||$p(n,e))}const Yp=n=>ol(Pn(n,Tt[n].levels.length-1)),Yo=()=>Object.values(de.levels).reduce((n,e)=>n+(e.stars||0),0),jp=()=>Tt.reduce((n,e)=>n+e.levels.length*3,0);function Kp(n){const e=Kr(n);return e?e.i+1<e.planet.levels.length?ru(e.p,e.i+1)?Pn(e.p,e.i+1):null:e.p+1<Tt.length&&ru(e.p+1,0)?Pn(e.p+1,0):null:null}function NS(){for(let n=Tt.length-1;n>=0;n--)if(Aa(n)){for(let e=0;e<Tt[n].levels.length;e++)if(!ol(Pn(n,e)))return Pn(n,e);return Pn(n,0)}return Pn(0,0)}const FS={S:3,A:2,B:1,C:1};function OS(n,e,t,i){const r=Kr(n),s=de.levels[n]||{stars:0,best:0},a=FS[e]||1,o=!s.stars,l=Math.round(CS(r.planet.reward,!!r.boss,a,o,s.stars)*ll().gemMul)+i;return de.levels[n]={stars:Math.max(s.stars,a),best:Math.max(s.best,t)},de.crystals+=l,cr(),{earned:l,stars:a,first:o,newStars:Math.max(0,a-s.stars)}}function Zp(n,e,t){const i=n+e*Math.round(t*.15);return de.crystals+=i,cr(),i}function BS(n,e,t,i){const r=de.endless[n]||{waves:0,best:0};de.endless[n]={waves:Math.max(r.waves,e),best:Math.max(r.best,t)};const s=i+e*12;return de.crystals+=s,cr(),s}const Jp=()=>Tt.filter((n,e)=>Yp(e)).length,ll=()=>Ta(de.stats,de.slot);function kS(n){return n===void 0||de.crystals<n?!1:(de.crystals-=n,!0)}function Qp(n){if(de.pending||!kS(Fs[n].cost))return null;const e=AS(n,{pts:de.stats,bosses:Jp(),ownedPassives:de.owned.passive,ownedUlts:de.owned.ult,slot:de.slot,pity:de.pity});return n==="high"&&(de.pity=e.diamond?0:de.pity+1),de.draws++,de.pending={pack:n,cards:e.cards},cr(),de.pending}function em(n){const e=de.pending?.cards[n];return e?(e.kind==="stat"?de.stats[e.key]=(de.stats[e.key]||0)+e.pts:e.kind==="passive"?(de.owned.passive.push(e.id),de.equip.passives.length<ll().slots&&de.equip.passives.push(e.id)):e.kind==="ult"?(de.owned.ult.push(e.id),de.equip.ult=e.id):e.kind==="slot"?de.slot++:e.kind==="refund"&&(de.crystals+=e.gems),de.pending=null,cr(),e):null}function zS(n){de.owned.ult.includes(n)&&(de.equip.ult=n,cr())}function GS(n){const e=de.equip.passives,t=e.indexOf(n);if(t>=0)e.splice(t,1);else if(de.owned.passive.includes(n)&&e.length<ll().slots)e.push(n);else return!1;return cr(),!0}const wo={maxHp:We.maxHp,stamMax:We.stamMax,stamRegen:We.stamRegen,charge:At.charge,start:At.start,ink:At.ink,perfectEarly:We.perfectEarly,perfectLate:We.perfectLate};function HS(){const n=Ta(de.stats,de.slot,wo);_.passives=new Set(de.equip.passives),_.ultKind=de.equip.ult,_.ramMul=n.ramMul,_.gemPickup=n.gemPickup;const e=(_.passives.has("steady")?.06:0)+n.perfectBonus;Object.assign(We,{maxHp:n.maxHp,stamMax:n.stamMax,stamRegen:n.stamRegen,perfectEarly:wo.perfectEarly+e,perfectLate:wo.perfectLate+e}),Object.assign(At,{charge:n.charge,start:n.start,ink:wo.ink*n.inkMul})}function VS(){if(de.pending)return"有卡片待選";const n=["high","mid","low"].find(e=>Fs[e].cost<=de.crystals);return n?`可抽${Fs[n].name}`:""}const tm='<svg viewBox="0 0 20 20"><path d="M10 1.8l2.5 5.3 5.8.8-4.2 4 1 5.8-5.1-2.8-5.1 2.8 1-5.8-4.2-4 5.8-.8z"/></svg>',oh='<svg viewBox="0 0 20 20" fill="currentColor"><path d="M6 9V6.5a4 4 0 0 1 8 0V9h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1zm2 0h4V6.5a2 2 0 0 0-4 0z"/></svg>',WS='<svg class="gem" viewBox="0 0 20 20"><path d="M10 1l6.5 6.5L10 19 3.5 7.5z"/></svg>',nm=n=>[1,2,3].map(e=>`<i class="${e<=n?"on":""}">${tm}</i>`).join(""),Xr=n=>`${WS}${n.toLocaleString()}`;let Cr=null,su=0,aa="draw",Ir=-1;function XS(n){Cr=n,ee("mapBack").onclick=Cr.title,ee("shopBtn").onclick=()=>{Ue.ui(),Ra(),Cr.shop()},ee("shopBack").onclick=()=>{Ue.ui(),qu(),Cr.map()},ee("endlessBtn").onclick=()=>Cr.endless(su);for(const e of document.querySelectorAll("#shopTabs button"))e.onclick=()=>{aa=e.dataset.tab,Ue.ui(),Ra()}}function qu(n=su){su=n,Cr.select(Tt[n].id),ee("mapStars").innerHTML=`${tm}${Yo()} / ${jp()}`,ee("mapGems").innerHTML=Xr(de.crystals),ee("planets").innerHTML=Tt.map((i,r)=>`<button type="button" class="orb ${i.id} ${r===n?"sel":""}" data-i="${r}" aria-label="${i.name}">${Aa(r)?"":oh}</button>`).join("");for(const i of ee("planets").children)i.onclick=()=>{Ue.ui(),qu(+i.dataset.i)};ee("pName").textContent=Tt[n].name,ee("pBlurb").textContent=qS(n),ee("levels").innerHTML=Tt[n].levels.map((i,r)=>{const s=Pn(n,r),a=ru(n,r),o=de.levels[s];return`<button type="button" class="node ${i.boss?"boss":""}" data-id="${s}" ${a?"":"disabled"}><b>${a?r+1:oh}</b><span>${a?i.name:"未解鎖"}</span><em>${a?nm(o?.stars||0):""}</em>${$p(n,r)&&!Aa(n)?'<i class="trial">嘗鮮</i>':""}</button>`}).join("");for(const i of ee("levels").children)i.onclick=()=>Cr.play(i.dataset.id);const e=ee("endlessBtn"),t=de.endless[Tt[n].id];e.hidden=!Yp(n),e.textContent=t?.waves?`無盡模式（最遠 ${t.waves} 波）`:"無盡模式"}function qS(n){if(Aa(n))return Tt[n].blurb;const e=Tt[n-1].levels.at(-1).name,t=Xp(n)?`再拿 ${qp(n)} 顆星（需要 ★${Tt[n].gate}），或${e}拿三星`:`打倒${e}，並集滿 ★${Tt[n].gate}（${e}拿三星可免）`;return`${Tt[n].blurb}　前 ${Bp} 關可以先嘗鮮；${t}就能開放全部關卡。`}const lh=(n,e,t)=>`<div class="shop-row"><div><b>${n}</b><span>${e}</span></div>${t}</div>`,ch=(n,e,t)=>`<button type="button" class="buy" ${n} ${t?'aria-pressed="true"':""}>${e}</button>`;function $S(n,e,t){const i={hp:r=>`生命 ${r.maxHp} 格`,stamina:r=>`體力 ${r.stamMax} 格・回復 ${Math.round((1-r.stamRegen/.8)*100)}%`,charge:r=>`充能 ${r.charge.toFixed(1)}/秒・開局 ${r.start}`,ink:r=>`墨水 ${Math.round(r.inkMul*100)}%`,ram:r=>`衝撞 ${Math.round(r.ramMul*100)}%`,parry:r=>`完美格擋 +${r.perfectBonus.toFixed(3)} 秒`,gems:r=>`星晶 +${r.gemPickup}・獎勵 ${Math.round(r.gemMul*100)}%`}[n];return i(e)===i(t)?`${i(t)}（累積中）`:`${i(e)} → ${i(t)}`}function YS(n,e){const t=Xo[n.rarity];let i,r;if(n.kind==="stat"){const s=de.stats[n.key]||0,a={...de.stats,[n.key]:s+n.pts};i=`${gi[n.key].name} +${n.pts}`,r=`${$S(n.key,Ta(de.stats,de.slot),Ta(a,de.slot))}<small>${s+n.pts} / ${gi[n.key].cap}</small>`}else n.kind==="passive"?(i=`被動・${$o[n.id].name}`,r=$o[n.id].desc):n.kind==="ult"?(i=`大招・${qo[n.id].name}`,r=qo[n.id].desc):n.kind==="slot"?(i="被動欄位 +1",r="多裝備 1 個被動技能"):(i=`星晶 +${n.gems}`,r="本章屬性都已達上限，換成星晶");return`<button type="button" class="card ${t.id} ${e===Ir?"sel":""}" data-card="${e}" style="--d:${e*.12}s"><em>${t.name}</em><b>${i}</b><span>${r}</span></button>`}function jS(){const n=Jp(),e=Ta(de.stats,de.slot);if(de.pending)return`<p class="pick-hint">選一張卡加強史萊姆</p><div class="cards n${de.pending.cards.length}">${de.pending.cards.map(YS).join("")}</div><button type="button" id="pickOk" class="pick-ok" ${Ir<0?"disabled":""}>${Ir<0?"點一張卡":"確定選這張"}</button>`;const t=Object.entries(Fs).map(([r,s])=>`<button type="button" class="pack ${r}" data-pack="${r}" ${de.crystals<s.cost?"disabled":""}><b>${s.name}</b><span>${s.cards} 張選 1</span><small>${Xo.map((a,o)=>`${a.name}${s.odds[o]}%`).join(" ")}</small>${r==="high"?`<small>保底 ${de.pity}/${kp} 必出鑽石</small>`:""}<i>${Xr(s.cost)}</i></button>`).join(""),i=Object.entries(gi).map(([r,s])=>{const a=de.stats[r]||0,o=zp(r,n);return`<div class="sbar"><span>${s.name}</span><div><i style="width:${a/s.cap*100}%"></i><u style="left:${o/s.cap*100}%"></u></div><b>${a}/${o}</b></div>`}).join("");return`<div class="packs">${t}</div><div class="sbars"><p class="muted">目前屬性（白線＝本章上限，打倒首領後提高）</p>${i}<p class="muted">生命 ${e.maxHp}・體力 ${e.stamMax}・被動欄 ${e.slots}</p></div>`}function Ra(){ee("shopGems").innerHTML=Xr(de.crystals);for(const t of document.querySelectorAll("#shopTabs button"))t.classList.toggle("sel",t.dataset.tab===aa);let n="";if(aa==="draw"&&(n=jS()),aa==="ult"&&(n=Object.entries(qo).map(([t,i])=>{const r=de.owned.ult.includes(t),s=de.equip.ult===t;return lh(i.name,i.desc,r?ch(`data-ult="${t}"`,s?"使用中":"裝備",s):'<span class="max">鑽石卡取得</span>')}).join("")),aa==="passive"){const t=de.equip.passives,i=ll().slots;n=`<p class="muted">已裝備 ${t.length} / ${i}</p>`+Object.entries($o).map(([r,s])=>{const a=de.owned.passive.includes(r),o=t.includes(r);return lh(s.name,s.desc,a?ch(`data-pas="${r}"`,o?"卸下":"裝備",o):'<span class="max">金卡以上取得</span>')}).join("")}const e=ee("shopList");e.innerHTML=n;for(const t of e.querySelectorAll("button"))t.onclick=()=>{const i=t.dataset;let r=!0;if(i.pack){if(r=!!Qp(i.pack),Ir=-1,r){Ue.ding(),Ra();return}}else if(i.card!==void 0){Ir=+i.card,Ue.ui(),e.querySelector(".cards").classList.add("shown");for(const a of e.querySelectorAll(".card"))a.classList.toggle("sel",a===t);const s=ee("pickOk");s.disabled=!1,s.textContent="確定選這張";return}else t.id==="pickOk"?(r=!!em(Ir),Ir=-1):i.ult?zS(i.ult):i.pas&&(r=GS(i.pas));r?Ue.pickup():Ue.empty(),Ra()}}function $u(n){const{baseV:e,gUp:t,gDown:i,vMin:r,vMax:s}=At;let a=e*e;const o=[e];for(let l=1;l<n.length;l++){const c=n[l-1],u=n[l],d=u.h-c.h,f=c.p.distanceTo(u.p);if(c.water&&u.water||(a-=2*(d<0?i:t)*d),a>e*e&&(a=Math.max(e*e,a-16*f)),a=Math.min(a,s*s),a<r*r)return o.push(r),{vs:o,stall:l};o.push(Math.sqrt(a))}return{vs:o,stall:-1}}function KS(n,e,t){const i=n.p.distanceTo(e.p);return e.water&&n.water?i*At.lakeCost:i*Math.min(2.5,Math.max(.45,1+t*2.2))}const uh={down:new we(16763981),flat:new we(4843263),up:new we(16730714),lake:new we(9430015),dead:new we(3817301)},Yu=new gt({vertexColors:!0,transparent:!0,opacity:1,side:Zt,depthWrite:!1}),Ca=new Z(new Vt,Yu);Ca.frustumCulled=!1;Ca.renderOrder=2;Ze.add(Ca);const pe={path:[],ink:0,budget:0,sim:{vs:[At.baseV],stall:-1},fade:0,drawing:!1,run:null},ju=n=>{const e=an(n);return{d:n.clone(),h:e,p:n.clone().multiplyScalar(Fe+e),water:cn(n)<0,kind:"flat"}};function sr(n=-1){const e=[],t=[],r=pe.path;let s=0;for(let o=0;o<r.length-1;o++){const l=r[o].p,c=r[o+1].p,u=l.distanceTo(c);if(u<1e-4)continue;const d=l.clone().normalize(),f=new _e().crossVectors(d,new _e().subVectors(c,l)).normalize().multiplyScalar(.17),h=d.clone().multiplyScalar(.14),v=(pe.sim.stall>=0&&o+1>pe.sim.stall?uh.dead:uh[r[o+1].kind]).clone().multiplyScalar(n>=0&&s+u<=n?.35:1);s+=u;const m=new _e().subVectors(c,l).normalize().multiplyScalar(.17*.6),p=l.clone().sub(m).add(f).add(h),T=l.clone().sub(m).sub(f).add(h),b=c.clone().add(m).add(f).add(h),M=c.clone().add(m).sub(f).add(h);for(const C of[p,T,b,T,M,b])e.push(C.x,C.y,C.z),t.push(v.r,v.g,v.b)}const a=new Vt;a.setAttribute("position",new Je(e,3)),a.setAttribute("color",new Je(t,3)),Ca.geometry.dispose(),Ca.geometry=a}const dh=new wg,ZS=new $r(new _e,Fe+.5);function JS(n,e){const t=Si.domElement.getBoundingClientRect();dh.setFromCamera({x:(n-t.left)/t.width*2-1,y:-(e-t.top)/t.height*2+1},xt);const i=dh.ray.intersectSphere(ZS,new _e);return i?Cu(i).normalize():null}function cl(){return _.state!=="play"||_.mode!=="play"||_.ult<At.min||E.state!=="free"?(_.state==="play"&&_.ult<At.min&&(Ue.empty(),ct("大招需累積過半","var(--mist)")),!1):(_.mode="ultDraw",pe.drawing=!1,pe.path=[ju(E.d)],pe.ink=0,pe.sim=$u(pe.path),Yu.opacity=1,pe.fade=0,sr(),pe.budget=At.ink*_.ult/100*(je.boss?1.5:1),Ue.ult(),lr("劃線斬"),tn("ultBegin"),!0)}function im(n,e){pe.drawing=!0,Ku(n,e)}let fh=0;function Ku(n,e){if(!pe.drawing)return;const t=JS(n,e);if(!t)return;let i=!1;for(let r=0;r<400;r++){const s=pe.path[pe.path.length-1];if(s.d.angleTo(t)*Fe<At.step||!rm(nt(s.d,$t(s.d,t),At.step)))break;i=!0}i&&(pe.sim=$u(pe.path),sr())}function rm(n){if(pe.ink>=pe.budget-.001)return!1;const e=pe.path[pe.path.length-1],t=ju(n),i=(t.h-e.h)/Math.max(e.d.angleTo(t.d)*Fe,.001);t.kind=t.water?"lake":i<-.06?"down":i>.06?"up":"flat";const r=KS(e,t,i);if(pe.ink+r>pe.budget)return pe.ink=pe.budget,!1;pe.ink+=r,t.ink=pe.ink,pe.path.push(t);const s=performance.now();return s-fh>80&&(Ue.draw(t.kind),fh=s),!0}function QS(n){if(!cl())return!1;pe.drawing=!0;for(const e of n)for(let t=0;t<200;t++){const i=pe.path[pe.path.length-1];if(i.d.angleTo(e)*Fe<At.step||!rm(nt(i.d,$t(i.d,e),At.step)))break}return pe.sim=$u(pe.path),sr(),Zu(),_.mode==="ultDraw"&&(_.mode="play"),!0}function Zu(){if(!pe.drawing)return;pe.drawing=!1;const n=pe.sim.stall>=0?pe.path.slice(0,pe.sim.stall+1):pe.path,e=[0];for(let t=1;t<n.length;t++)e.push(e[t-1]+n[t].p.distanceTo(n[t-1].p));if(e[e.length-1]<1){pe.path=[ju(E.d)],sr();return}pe.run={pts:n,cum:e,total:e[e.length-1],vs:pe.sim.vs,dist:0,i:0,mult:1,v:At.baseV,kills:0,hit:new Map,seal:!!je.boss},_.mode="ultDash",E.state="ult",Ue.dash(),ai("determined"),_.ult=Math.max(0,_.ult-(n[n.length-1].ink||0)/At.ink*100)}function eb(n,e){const t=_.enemies.filter(r=>!r.dead&&r!==n&&r.spawn>=1&&!pe.run.hit.has(r)&&r.d.angleTo(n.d)*Fe<5).sort((r,s)=>r.d.angleTo(n.d)-s.d.angleTo(n.d)).slice(0,2),i=mn(n);for(const r of t)pe.run.hit.set(r,pe.run.dist),Gy(i,mn(r),9430015),jr(r,e,$t(n.d,r.d),{pierce:!0}),r.dead&&pe.run.kills++}function tb(n){const e=At.blastR;Vr(E.p.clone().addScaledVector(E.d,.3),E.d,16751164,3,.5,5),lt(E.p,16763981,40,12,.7),Ue.slam(),_.shake=Math.max(_.shake,1);for(const t of _.enemies)t.dead||t.spawn<1||t.d.angleTo(E.d)*Fe>e+t.r||(jr(t,At.blastDmg*n,$t(E.d,t.d),{pierce:!0}),t.dead&&pe.run.kills++)}function nb(n){let e=n;const t=pe.run;for(;e>0&&pe.run;){const i=Math.min(.25,t.v*e);for(e-=i/t.v,t.dist=Math.min(t.total,t.dist+i);t.i<t.pts.length-2&&t.dist>=t.cum[t.i+1];)t.i++;const r=t.i,s=t.cum[r+1]-t.cum[r],a=s>0?Yt((t.dist-t.cum[r])/s,0,1):1;Ki(new _e().lerpVectors(t.pts[r].d,t.pts[r+1].d,a).normalize()),t.v=t.vs[r]+(t.vs[r+1]-t.vs[r])*a,t.mult=Yt((t.v/At.baseV)**1.5,.5,3),E.face=$t(t.pts[r].d,t.pts[r+1].d),lt(E.p.clone().addScaledVector(E.d,.4),t.mult>=2?16763981:4843263,1,1.5,.35);for(const o of _.enemies){if(o.dead||o.spawn<1||E.p.distanceTo(mn(o))>o.r+At.hitR)continue;const l=t.hit.get(o);if(l!==void 0&&t.dist-l<2)continue;t.hit.set(o,t.dist);const c=At.dmg*t.mult*(o.stun>0?2:1);jr(o,c,E.face,{pierce:!0}),o.dead&&t.kills++,_.ultKind==="chain"&&eb(o,c*.5)}if(t.seal&&_1(E.p),t.dist>=t.total&&(_.ultKind==="blast"&&tb(Math.max(1,t.mult)),t.seal&&v1(),pe.sim.stall>=0&&ct("力竭…","var(--hurt)"),t.kills>=4&&(lr("一筆入魂"),Us(.3,"#ffcc4d"),ai("happy",1)),tn("ultEnd",t.kills),pe.run=null,_.mode="play",E.state="free",E.invuln=.6,pe.fade=.6,sr()),_.hitstop>0)break}}function ib(n){pe.fade>0?(pe.fade-=n,Yu.opacity=Math.max(0,pe.fade/.6),pe.fade<=0&&(pe.path=[],sr())):_.mode==="ultDash"&&pe.run&&sr(pe.run.dist)}function rb(){pe.run=null,pe.path=[],pe.drawing=!1,pe.fade=0,sr()}const tc=Si.domElement,ii=ee("joy"),Rs=ee("knob"),Re={id:null,ox:0,oy:0,x:0,y:0,t0:0,st:"pending",samples:[],tMove:0,cMove:0},Ju=14,sb=20,sm=60,ab=22,ob=.5,lb=380,am=n=>Yt((n-Re.t0-60)/((We.guardHold-.06)*1e3),0,1),om=()=>{ii.hidden=Rs.hidden=!0};function Fa(){Re.id=null,Re.st="pending",om(),Oa.clear()}tc.addEventListener("pointerdown",n=>{if(Hn(),_.state==="play"){if(_.mode==="ultDraw"){try{tc.setPointerCapture(n.pointerId)}catch{}im(n.clientX,n.clientY);return}if(Re.id===null){Object.assign(Re,{id:n.pointerId,ox:n.clientX,oy:n.clientY,x:n.clientX,y:n.clientY,t0:performance.now(),st:"pending",tMove:0,cMove:0,samples:[{t:performance.now(),x:n.clientX,y:n.clientY}]}),ii.hidden=Rs.hidden=!1,ii.className="",ii.style.setProperty("--c",0),ii.style.left=Rs.style.left=n.clientX+"px",ii.style.top=Rs.style.top=n.clientY+"px";try{tc.setPointerCapture(n.pointerId)}catch{}}}});addEventListener("pointermove",n=>{if(_.mode==="ultDraw"){Ku(n.clientX,n.clientY);return}if(n.pointerId!==Re.id)return;const e=performance.now();for(Re.x=n.clientX,Re.y=n.clientY,Re.samples.push({t:e,x:Re.x,y:Re.y});Re.samples.length>2&&e-Re.samples[0].t>100;)Re.samples.shift();const t=Math.hypot(Re.x-Re.ox,Re.y-Re.oy);if(Re.st==="pending"){const r=am(e);r>=1?lm():t>(r>0?sb:Ju)&&(Re.st="move",Re.tMove=e,Re.cMove=r,ii.style.setProperty("--c",0))}const i=Math.min(1,sm/Math.max(t,1));Rs.style.left=Re.ox+(Re.x-Re.ox)*i+"px",Rs.style.top=Re.oy+(Re.y-Re.oy)*i+"px"});function lm(){Re.st="guard",ii.className="guard",St(660,.05,"sine",.04)}function cb(){const n=Re.samples,e=n[0],t=n[n.length-1],i=Math.max(t.t-e.t,16),r=t.x-e.x,s=t.y-e.y;return{dx:r,dy:s,dist:Math.hypot(r,s),speed:Math.hypot(r,s)/i}}function cm(n){if(_.mode==="ultDraw"){Zu();return}if(n.pointerId!==Re.id)return;const e=performance.now()-Re.t0,t=Math.hypot(Re.x-Re.ox,Re.y-Re.oy),i=cb(),r=Re.x-Re.ox,s=Re.y-Re.oy,a=Re.st==="move"&&Re.cMove>=ob&&performance.now()-Re.tMove<lb&&i.speed>.45;Re.st==="guard"||a?t>ab?Ea(Or(r,s)):i.speed>.45&&i.dist>18?Ea(Or(i.dx,i.dy)):(ii.className="cancel",St(200,.05,"sine",.04)):i.speed>.8&&i.dist>25?(ii.className="dash",nl(Or(i.dx,i.dy))):Re.st==="pending"&&e<190&&t<=Ju&&il(),Re.id=null,Re.st="pending",setTimeout(()=>{Re.id===null&&om()},90)}addEventListener("pointerup",cm);addEventListener("pointercancel",cm);const Oa=new Set,au={KeyW:[0,-1],ArrowUp:[0,-1],KeyS:[0,1],ArrowDown:[0,1],KeyA:[-1,0],ArrowLeft:[-1,0],KeyD:[1,0],ArrowRight:[1,0]};addEventListener("keydown",n=>{if(!(n.repeat||_.state!=="play"))if(au[n.code])Oa.add(n.code),n.preventDefault();else if(n.code==="Space")n.preventDefault(),Vu();else if(n.code==="KeyJ"||n.code==="ShiftLeft"||n.code==="ShiftRight"){const e=um();e?nl(Or(e[0],e[1])):il()}else n.code==="KeyK"?Ea(sS()):n.code==="KeyL"&&cl()});addEventListener("keyup",n=>Oa.delete(n.code));addEventListener("blur",()=>Oa.clear());function um(){let n=0,e=0;for(const t of Oa)n+=au[t][0],e+=au[t][1];return n||e?[n,e]:null}function ub(){if(Re.id!==null&&Re.st==="pending"){const t=am(performance.now());ii.style.setProperty("--c",t*100),t>=1&&lm()}const n=_.move;if(n.m=0,Re.id!==null&&Re.st==="move"){const t=Re.x-Re.ox,i=Re.y-Re.oy,r=Math.hypot(t,i);r>Ju&&(n.sx=t,n.sy=i,n.m=Math.min(1,r/sm))}const e=um();e&&!n.m&&(n.sx=e[0],n.sy=e[1],n.m=1)}ee("ultBtn").addEventListener("pointerdown",n=>{n.stopPropagation(),Hn(),cl()&&Fa()});ee("jumpBtn").addEventListener("pointerdown",n=>{n.stopPropagation(),n.preventDefault(),Hn(),Vu()});function db(n,e,t=E.d){for(let i=0;i<400;i++){const r=Ht(),s=r.angleTo(t),a=cn(r);if(s>=n&&s<=e&&a>.05&&a<1.5)return r}return nt(t,at(t,Ht()).normalize(),5)}let bs=[];const fb=()=>_.tut?0:Dr.perWave[_.tier>=Dr.twoFrom?1:0];function dm(n){ES(n).forEach((e,t)=>{const i=_n[e],r=i.base==="boss",s=Di(e,i.aquatic&&tp(E.d,.35)||db(r?.55:.45,r?.7:.85));s.spawn=-t*.12,s.atkCd=(r?2.5:1)+t*.6+Math.random(),r?_.boss=s:q1(s,fb()-_.elites)&&_.elites++})}const hb=n=>_.endless?TS(n,_.level.planet):wS(_.waves[n-1]);function Ba(n){_.wave=n,_.elites=0,_.waveClearing=!1,_.graceT=Rn.grace,_.boss=null,_.endless&&(_.tier=Math.min(12,_.level.tier+(n>>1)));const e=hb(n),t=Object.keys(e.groups[0]).find(i=>eu[i]);tn("wave",n),lr(t?"首領戰":_.endless?`無盡 ${n}`:`WAVE ${n}`,t?`${eu[t].name} 降臨`:n===1&&!_.endless?_.level.name:""),or(E),bs=e.groups.slice(1),dm(e.groups[0]),e.tip&&Hr(1.2,()=>ct(e.tip,"var(--warn)"))}function pb(){if(_.state!=="play"||_.waveClearing||_.mode!=="play"||_.tut)return;const n=_.enemies.filter(i=>!i.dead).length;if(bs.length&&n<=(bs[0].at??0)){dm(bs.shift()),ct("增援！","var(--hurt)"),Ue.warn();return}if(n||bs.length)return;_.waveClearing=!0,Ue.clear(),_.score+=500*_.tier;const e=(_.wave%Mf.every===0?Mf.amount:0)+(_.passives.has("regen")?1:0),t=E.hp;if(E.hp=Math.min(We.maxHp,E.hp+e),E.hp>t&&Hr(.8,()=>ct(`回復 +${E.hp-t}`,"var(--ink)")),or(E),ai("happy",1.2),!_.endless&&_.wave>=_.waves.length){tn("victory");return}lr("CLEAR"),Hr(2,()=>{_.enemies=[],Ba(_.wave+1)})}function mb(){bs=[]}const Oi=new Z(new ar(.55,.8,40),new gt({color:4843263,transparent:!0,opacity:.9,side:Zt,depthWrite:!1}));Oi.renderOrder=3;Oi.visible=!1;Ze.add(Oi);const Eo=[{title:"移動",body:'按住螢幕任意處拖曳，走到<span class="c-ink">發光圈</span>裡。上坡慢、下坡快。'},{title:"衝撞",body:'<span class="c-dash">快速滑動</span>朝那個方向衝撞，或<span class="c-dash">點一下</span>自動衝向最近的敵人。打倒稻草兵！'},{title:"格擋",body:'敵人腳下出現<span class="c-warn">黃線</span>時：按住不動到外圈變<span class="c-guard">藍</span>，再<b>朝敵人方向滑出</b>放開（慢慢滑也行，不會變衝撞；滑回中心放開＝取消）。黃線<span class="c-warn">閃紅</span>前出手＝完美格擋。'},{title:"反擊",body:'格擋成功會進入慢動作並回 1 格體力。趁現在<span class="c-dash">衝撞</span>打倒它！'},{title:"跳躍",body:'巨魔會放<span class="c-warn">圓環震波</span>。圓環罩到腳下時，按左下的<b>跳躍鈕</b>躍過去。'},{title:"滾石",body:'滾石會<b>連滾三次</b>，第二、三次的預警更短。躲開它，等它<span class="c-gold">暈眩</span>再打，平常它硬得打不動。'},{title:"大招",body:'大招集滿了！點右下的<span class="c-gold">斬</span>，時間暫停後<b>直接在星球上劃一條線</b>穿過敵人，放開就發動。下坡越劃越快。'}];function gb(n){const e={step:-1,noDamage:!0,foe:null,onDone:n,offs:[],doneT:0};_.tut=e,_.graceT=0,_.stamina=3,_.ult=0,or(E);const t=()=>{e.step++,_b(e)};return e.next=t,e.offs.push(qt("kill",i=>{e.step===1&&i===e.foe||e.step===3&&i===e.foe?t():e.step===2&&i===e.foe?(e.step=3,t()):(e.step===5&&i===e.foe||e.step===6&&_.enemies.every(r=>r.dead))&&t()}),qt("parry",({e:i})=>{e.step===2&&i===e.foe?(i.only=["line"],t()):e.step===4&&i===e.foe&&hh(e)}),qt("jump",i=>{e.step===4&&i==="ring"&&hh(e)}),qt("hurt",()=>{e.step>=2&&e.step<=5&&ct("沒關係，再試一次","var(--mist)")}),qt("ultEnd",()=>{e.step===6&&_.enemies.some(i=>!i.dead)&&(_.ult=100,ct("還有敵人，再劃一次","var(--gold)"))})),t(),e}function hh(n){n.foe&&!n.foe.dead&&(lt(vn(n.foe.d),10185727,30,8,.7),ku(n.foe)),n.next()}const vs=(n,e=0)=>{const t=Or(0,-1),i=new _e().crossVectors(E.d,t).normalize();let r=nt(nt(E.d,t,n),at(E.d,i),e);for(let s=0;s<12&&bn(r);s++)r=nt(r,t,-.6);return r};function _b(n){const e=n.step;if(tn("tutStep",e),e>=Eo.length)return vb(n);if(Du(e+1,Eo.length,Eo[e].title,Eo[e].body),Ue.step(),e>0&&ai("happy",.6),e===0&&(n.target=vs(4.5,1.5),Oi.visible=!0),e===1&&(Oi.visible=!1,n.foe=Di("grunt",vs(3.5),{dummy:!0})),e===2&&(n.foe=Di("grunt",vs(3),{only:["line"],warnMul:1.15}),n.foe.atkCd=1.2),e===4&&(n.foe=Di("brute",vs(2.6),{only:["ring"],warnMul:1.2,hp:99}),n.foe.hp=99,n.foe.atkCd=1.5),e===5&&(n.foe=Di("boulder",vs(5)),n.foe.atkCd=1.5),e===6){_.ult=100;for(const[t,i]of[[3,-1.6],[4.2,0],[3,1.6]])Di("grunt",vs(t,i),{dummy:!0})}}function vb(n){Du(),lr("教學完成","開始第一波"),Ue.clear(),ai("happy",1.5);try{localStorage.setItem("slasharena-tut","1")}catch{}fm(),_.waveClearing=!0,Hr(1.8,()=>n.onDone())}function fm(){const n=_.tut;n&&(n.offs.forEach(e=>e()),Oi.visible=!1,Du(),_.tut=null)}function xb(n,e){const t=_.tut;t&&(t.step===0&&t.target&&(Oi.position.copy(vn(t.target)).addScaledVector(t.target,.12),Oi.quaternion.setFromUnitVectors(new _e(0,0,1),t.target),Oi.scale.setScalar(1+Math.sin(e*5)*.08),E.d.angleTo(t.target)*Fe<.9&&(lt(vn(t.target).addScaledVector(t.target,.3),4843263,20,5,.5),t.next())),t.step>=1&&(_.stamina=Math.max(_.stamina,1)))}const hm=()=>{try{return localStorage.getItem("slasharena-tut")==="1"}catch{return!1}},Qu="slasharena-runs";let it=null;const Pa=()=>_.runTime,Mb=n=>({kind:n,started:new Date().toISOString(),device:`${innerWidth}x${innerHeight} ${matchMedia("(pointer: coarse)").matches?"touch":"mouse"}`,level:null,tutorial:[],waves:[],dash:0,guard:0,parry:0,perfect:0,evade:0,jumpPress:0,jumpOver:0,ultUses:0,ultKills:0,crystals:0,hurt:0,burn:0});function ed(n,e=null){ul("abandoned"),it=Mb(n),it.level=e}function ul(n){if(!it)return;Object.assign(it,{result:n,endWave:_.wave,tier:_.tier,picked:_.runCrystals,score:_.score,time:Math.round(Pa()),bestCombo:_.bestCombo,hpLeft:E.hp}),pm();const e=dl();for(e.push(it);e.length>30;)e.shift();try{localStorage.setItem(Qu,JSON.stringify(e))}catch{}it=null}const dl=()=>{try{return JSON.parse(localStorage.getItem(Qu))||[]}catch{return[]}},yb=()=>{try{localStorage.removeItem(Qu)}catch{}};function pm(){const n=it?.waves.at(-1);n&&n.time==null&&(n.time=Math.round(Pa()-n.t0))}qt("wave",n=>{it&&(pm(),it.waves.push({n,t0:Pa(),hurt:0}))});qt("tutStep",n=>{if(!it)return;const e=it.tutorial.at(-1);e&&e.time==null&&(e.time=+(Pa()-e.t0).toFixed(1)),it.tutorial.push({step:n,t0:Pa(),hurt:0})});qt("hurt",()=>{if(!it)return;it.hurt++;const n=_.tut?it.tutorial.at(-1):it.waves.at(-1);n&&n.hurt++});qt("dash",()=>it&&it.dash++);qt("guard",()=>it&&it.guard++);qt("parry",({perfect:n})=>{it&&(it.parry++,n&&it.perfect++)});qt("evade",()=>it&&it.evade++);qt("jumpPress",()=>it&&it.jumpPress++);qt("jump",()=>it&&it.jumpOver++);qt("ultEnd",n=>{it&&(it.ultUses++,it.ultKills+=n)});qt("crystal",()=>it&&it.crystals++);qt("burn",()=>it&&it.burn++);const Sb={game:"正式",tutorial:"教學起",endless:"無盡"},bb={win:"通關",dead:"戰敗",quit:"中途離開",abandoned:"重開"};function mm(n=dl()){const e=["移動","衝撞","格擋","反擊","跳躍","滾石","大招"];return n.map((t,i)=>{const r=t.tutorial.filter(a=>a.time!=null&&e[a.step]).map(a=>`${e[a.step]}${a.time}s${a.hurt?`/挨${a.hurt}`:""}`).join(" "),s=t.guard?Math.round(t.parry/t.guard*100):0;return`#${i+1} ${Sb[t.kind]||t.kind} ${t.level||""} ${bb[t.result]||t.result} 到第${t.endWave}波 ${t.time}s 分數${t.score} 受傷${t.hurt}
   格擋 ${t.parry}/${t.guard} (${s}%) 完美${t.perfect} 閃避斬${t.evade} 跳躍${t.jumpPress}(躍過${t.jumpOver}) 大招${t.ultUses}次殺${t.ultKills} 星晶${t.crystals} 燙傷${t.burn||0}`+(r?`
   教學 ${r}`:"")}).join(`
`)}const wb=new Mi(.32);function Eb(){for(let n=0;n<200;n++){const e=Ht(),t=e.angleTo(E.d);if(t<.25||t>.8||cn(e)<.05)continue;const i=new Z(wb,new ln({color:10482687,emissive:2799832,emissiveIntensity:1.4,roughness:.3,flatShading:!0}));i.castShadow=!0,Ze.add(i),_.crystals.push({d:e,mesh:i,t:Math.random()*6});return}}function Tb(){_.crystals.forEach(n=>{Ze.remove(n.mesh),n.mesh.material.dispose()}),_.crystals=[]}const Ab=["title","mapOv","shopOv","over","win","pauseOv","logOv"],Hs=n=>Ab.forEach(e=>ee(e).hidden=e!==n);function Rb(){for(let n=0;n<500;n++){const e=Ht(),t=cn(e);if(t>.2&&t<.6&&mi.every(i=>i.type==="r"||Ma(i,e)>i.w+.1))return e}return new N(0,0,1)}function fl(n,e=null){const t=e??(Gt.id===n?Gt.variant:0),i=e===null?Gt.id===n?Gt.light:"day":Ey(e);(Gt.id!==n||Gt.variant!==t||Gt.light!==i)&&ap(n,t,i)}function gm(){xS(),nS(),Tb(),a1(),c1(),tl(),mb(),rb()}function td(){_.runId++,op(),gm(),Fa(),fm(),HS(),Py(We.stamMax),up(),Object.assign(_,{score:0,ult:At.start,stamina:We.stamMax,combo:0,bestCombo:0,mode:"play",runTime:0,hurtCount:0,endless:!1,boss:null,slowT:0,hitstop:0,waveClearing:!1,crystalT:6,runCrystals:0,undyingUsed:!1}),uS(Rb()),ee("combo").style.opacity=0,_.state="play",Hs(null),ee("pauseBtn").hidden=!1,ee("skipTut").hidden=!0}function nd(n){Object.assign(_,{level:n,waves:n.waves,tier:n.tier,hpMul:n.hpMul??n.planet.hpMul,wave:1})}function ur(n){const e=Kr(n);fl(e.planet.id,e.i),td(),nd(e),ed("game",n),or(E),Ba(1)}function hl(n){const e=Tt[n],t=Kr(Pn(n,e.levels.length-1));fl(e.id),td(),nd(t),_.endless=!0,ed("endless",e.id),or(E),Ba(1)}function Cb(){ur(NS())}function id(){const n=Kr(Pn(0,0));fl(n.planet.id),td(),nd(n),ed("tutorial",n.id),ee("skipTut").hidden=!1,gb(()=>{_.state==="play"&&(ee("skipTut").hidden=!0,_.ult=At.start,Ba(1))})}function Pb(){if(_.state!=="play")return;_.state="over",_.mode="play",pe.run=null,Fa(),ee("pauseBtn").hidden=!0,ai("dizzy",99),ul("dead");const n=_.endless?BS(_.level.planet.id,_.wave-1,_.score,_.runCrystals):Zp(_.runCrystals,_.wave-1,_.level.planet.reward);ee("final").textContent=_.score.toLocaleString(),ee("best").innerHTML=`${_.endless?`無盡第 ${_.wave} 波`:`${_.level.name} · WAVE ${_.wave}`}<br>獲得 ${Xr(n)}　持有 ${Xr(de.crystals)}`,vm(),Hr(.9,()=>Hs("over"))}function Lb(){const n=(_.hurtCount===0?3:_.hurtCount<=2?2:_.hurtCount<=5?1:0)+(_.bestCombo>=15?2:_.bestCombo>=8?1:0);return n>=5?"S":n>=3?"A":n>=2?"B":"C"}qt("victory",()=>{Ue.win(),lr(_.level.boss?"星球解放！":"關卡完成！"),Hr(2.2,()=>{if(_.state!=="play")return;_.state="win",Fa(),ee("pauseBtn").hidden=!0,ul("win");const n=Lb(),e=OS(_.level.id,n,_.score,_.runCrystals),t=Kp(_.level.id),i=Math.floor(_.runTime/60),r=Math.floor(_.runTime%60);ee("winLabel").textContent=_.level.boss?"PLANET CLEARED":`LEVEL ${_.level.i+1}`,ee("winName").textContent=_.level.boss?"星球解放":_.level.name,ee("rank").textContent=n,ee("winStars").innerHTML=nm(e.stars),ee("winScore").textContent=_.score.toLocaleString(),ee("winGems").innerHTML=`獲得 ${Xr(e.earned)}${e.first?"　首次通關":""}<br>持有 ${Xr(de.crystals)}`,vm(),ee("winStats").innerHTML=`<span>時間<b>${i}:${String(r).padStart(2,"0")}</b></span><span>受傷<b>${_.hurtCount}</b></span><span>最高連擊<b>${_.bestCombo}</b></span>`,ee("nextLevel").hidden=!t,ee("nextLevel").textContent=t&&Kr(t).p!==_.level.p?"前往下一顆星球":"下一關",Hs("win")})});qt("hurt",()=>{E.hp<=0&&Hr(.5,Pb)});function ha(n){op(),gm(),_.mode="play",_.boss=null,_.storm=0,up(),ee("pauseBtn").hidden=!0,ee("skipTut").hidden=!0,_.state=n==="title"?"title":n==="shopOv"?"shop":"map",Hs(n),n==="title"&&rd()}function _m(){Hn(),qu(),ha("mapOv")}function Db(){_.state==="play"&&(ul("quit"),Zp(_.runCrystals,0,0))}XS({title:()=>ha("title"),map:()=>ha("mapOv"),shop:()=>ha("shopOv"),select:fl,play:n=>{Hn(),ur(n)},endless:n=>{Hn(),hl(n)}});ee("start").onclick=()=>{hm()?_m():(Hn(),id())};ee("tutBtn").onclick=()=>{Hn(),id()};ee("again").onclick=()=>{Hn(),_.endless?hl(_.level.p):ur(_.level.id)};ee("winAgain").onclick=()=>{Hn(),ur(_.level.id)};ee("nextLevel").onclick=()=>{Hn(),ur(Kp(_.level.id))};ee("skipTut").onclick=n=>{n.stopPropagation();try{localStorage.setItem("slasharena-tut","1")}catch{}ur(Pn(0,0))};ee("skipTut").addEventListener("pointerdown",n=>n.stopPropagation());for(const n of["winShop","overShop"])ee(n).onclick=()=>{Hn(),Ue.ui(),Ra(),ha("shopOv")};function vm(){const n=VS();for(const e of document.querySelectorAll(".cta-hint"))e.textContent=n?`　${n}`:"";for(const e of["winShop","overShop"])ee(e).classList.toggle("ready",!!n)}for(const n of["toTitle","overTitle","winTitle"])ee(n).onclick=()=>{Db(),_m()};function rd(){ee("titleBest").textContent=Yo()?`★ ${Yo()} / ${jp()}　◆ ${de.crystals.toLocaleString()}`:"",ee("tutBtn").hidden=!hm(),ee("logBtn").hidden=!dl().length}ee("logBtn").onclick=()=>{ee("logText").textContent=mm()||"（還沒有紀錄）",Hs("logOv")};ee("logCopy").onclick=async()=>{const n=mm()+`

`+JSON.stringify(dl());try{await navigator.clipboard.writeText(n),ee("logCopy").textContent="已複製"}catch{ee("logCopy").textContent="無法複製，請長按文字選取"}setTimeout(()=>ee("logCopy").textContent="複製全部（傳給開發者）",1600)};ee("logClear").onclick=()=>{yb(),ee("logText").textContent="（已清除）"};ee("logClose").onclick=()=>{Hs("title"),rd()};rd();let sd=!1;const Ib='<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h3l4-3.5v11L6 12H3z" fill="currentColor"/><path d="M13 7.5a3.5 3.5 0 0 1 0 5M15.2 5.2a6.5 6.5 0 0 1 0 9.6"/></svg>',Ub='<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h3l4-3.5v11L6 12H3z" fill="currentColor"/><path d="M13 8l4 4M17 8l-4 4"/></svg>';function ad(n){zt.volume=Yt(n,0,1),zt.volume>0&&(zt.lastVol=zt.volume);try{localStorage.setItem("slasharena-vol",zt.volume)}catch{}zt.volume>0?Hn():Fy(0);const e=ee("soundBtn");e.innerHTML=zt.volume>0?Ib:Ub,e.classList.toggle("off",zt.volume<=0),e.setAttribute("aria-label",zt.volume>0?"關閉聲音":"開啟聲音"),ee("vol").value=Math.round(zt.volume*100),ee("volN").textContent=zt.volume>0?Math.round(zt.volume*100)+"%":"關"}function Vs(n){n&&_.state!=="play"||(sd=n,ee("pauseOv").hidden=!n,n&&(Fa(),pe.drawing=!1),ou=performance.now())}ee("soundBtn").addEventListener("pointerdown",n=>n.stopPropagation());ee("soundBtn").onclick=()=>{ad(zt.volume>0?0:zt.lastVol),zt.volume>0&&St(660,.08,"sine",.08)};ee("pauseBtn").addEventListener("pointerdown",n=>n.stopPropagation());ee("pauseBtn").onclick=()=>Vs(!0);ee("resume").onclick=()=>Vs(!1);ee("restart").onclick=()=>{Vs(!1),_.endless?hl(_.level.p):ur(_.level.id)};ee("toTitle").addEventListener("click",()=>Vs(!1));ee("vol").addEventListener("input",n=>ad(n.target.value/100));ee("vib").checked=Sa.on;ee("vib").addEventListener("change",n=>{Sa.on=n.target.checked;try{localStorage.setItem("slasharena-vib",Sa.on?"1":"0")}catch{}});addEventListener("keydown",n=>{(n.key==="Escape"||n.key==="p"||n.key==="P")&&Vs(!sd)});document.addEventListener("visibilitychange",()=>{document.hidden&&_.state==="play"&&!window.__game?.noAutoPause&&Vs(!0)});ad(zt.volume);const Nb=ee("ink"),Fb=ee("ultTip");let ou=performance.now(),To=0,xm=!1,Mm=!1;const ph=new N,mh=new N,gh=new N;function ym(n){requestAnimationFrame(ym);const e=Math.min((n-ou)/1e3,.05);ou=n,!xm&&!sd&&Sm(e)}function Sm(n){To+=n,xy(n),Ay(n),document.body.dataset.state!==_.state&&(document.body.dataset.state=_.state);const e=_.mode==="ultDraw"?.03:_.mode==="ultDash"?.25:_.slowT>0?.2:1;_.ts+=(e-_.ts)*(1-Math.exp(-n*14)),_.state==="play"?(_.slowT-=n,_.comboT-=n,_.graceT-=n,_.runTime+=n,ub(),_.hitstop>0?_.hitstop-=n:(_.mode==="ultDash"?nb(n):_.mode==="play"&&lS(n),Z1(n*_.ts,n),s1(n*_.ts),_.mode==="play"&&l1(n),x1(n*_.ts,n),_.mode==="play"&&!_.tut&&(_.ult=Math.min(100,_.ult+n*At.charge)),!_.tut&&(_.crystalT-=n)<=0&&(_.crystalT=11,_.crystals.length<2&&Eb())),pb(),xb(n,To),_.mode!=="ultDraw"?Cf(E.d,_.mode==="ultDash"?7:5,n):je.boss&&Cf(je.boss.d,6,n)):(_.state==="title"||_.state==="map"||_.state==="shop")&&Ze.rotateY(n*.12);for(const i of _.crystals)i.t+=n,i.mesh.position.copy(i.d).multiplyScalar(Fe+an(i.d)+.7+Math.sin(i.t*3)*.12),i.mesh.quaternion.setFromUnitVectors(rr,i.d),i.mesh.rotateY(i.t*2);ky(n),Ty(To),ib(n),vS(n*_.ts),qy(n),zy(n),Hy(n),vy(n),cS(n,To);const t=_.mode==="ultDraw";Fb.hidden=!t,t&&(Nb.style.transform=`scaleX(${(pe.budget-pe.ink)/pe.budget})`),Iy(_.warnings.some(i=>i.kind==="ring"&&wa(i,E.d,.6))),SS(bm),_.shake*=Math.exp(-n*9),ti.kick.multiplyScalar(Math.exp(-n*14)),ti.punch*=Math.exp(-n*8),!Mm&&(ph.set(1,0,0).applyQuaternion(xt.quaternion),mh.set(0,1,0).applyQuaternion(xt.quaternion),gh.set(0,0,-1).applyQuaternion(xt.quaternion),xt.position.copy(ua).add(new N(Math.random()-.5,Math.random()-.5,0).multiplyScalar(_.shake)).addScaledVector(ph,ti.kick.x).addScaledVector(mh,ti.kick.y).addScaledVector(gh,ti.punch),Si.render(Dn,xt),xt.position.copy(ua),xt.updateMatrixWorld())}requestAnimationFrame(ym);new URLSearchParams(location.search).has("tune")&&_h(()=>import("./tune-BwU4c4Qc.js"),[],import.meta.url);new URLSearchParams(location.search).has("perf")&&_h(()=>import("./perf-DnOdO3i0.js"),[],import.meta.url);const bm=n=>{const e=n.clone().multiplyScalar(Fe+an(n)).applyQuaternion(Ze.quaternion).project(xt);return{x:(e.x+1)/2*innerWidth,y:(1-e.y)/2*innerHeight}};window.__game={get state(){return{state:_.state,mode:_.mode,level:_.level?.id,tier:_.tier,wave:_.wave,score:_.score,hp:E.hp,heroState:E.state,air:+E.air.toFixed(2),stamina:+_.stamina.toFixed(2),ult:+_.ult.toFixed(1),combo:_.combo,enemies:_.enemies.filter(n=>!n.dead).map(n=>n.type+(n.rolling?":roll":n.warn?":warn":n.stun>0?":stun":"")),warnings:_.warnings.map(n=>n.attack+":"+n.t.toFixed(2)+"/"+n.dur.toFixed(2)),tut:_.tut?.step??null,joy:Re.st,quality:An}},G:_,hero:E,seal:je,save:de,allLevels:bS,shop:{PACKS:Fs,draw:Qp,pick:em},newGame:Cb,newTutorial:id,startLevel:ur,startEndless:hl,freeze(n){xm=n},headless(n){Mm=n},step(n=1){for(let e=0;e<n;e++)Sm(1/60)},spawn:(n,e,t)=>Di(n,e,t),hit:jr,attack:(n,e)=>zu(n,e),startWave:Ba,heal(){E.hp=We.maxHp,E.invuln=0},toScreen:bm,GAIN:pi,zoneHas:wa,renderer:Si,scene:Dn,camera:xt,act:{startParry:Ea,doTap:il,doJump:Vu,ultBegin:cl,ultDown:im,ultMove:Ku,ultUp:Zu,ultPath:QS}};"serviceWorker"in navigator&&addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));export{Rn as C,_n as E,We as H,At as U,An as q,Si as r,Cn as s};
