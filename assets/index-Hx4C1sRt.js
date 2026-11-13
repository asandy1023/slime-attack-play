(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Cp="modulepreload",Pp=function(n,e){return new URL(n,e).href},Iu={},Sh=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){let c=function(u){return Promise.all(u.map(d=>Promise.resolve(d).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");r=c(t.map(u=>{if(u=Pp(u,i),u in Iu)return;Iu[u]=!0;const d=u.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(i)for(let g=a.length-1;g>=0;g--){const x=a[g];if(x.href===u&&(!d||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${h}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":Cp,d||(f.as="script"),f.crossOrigin="",f.href=u,l&&f.setAttribute("nonce",l),document.head.appendChild(f),d)return new Promise((g,x)=>{f.addEventListener("load",g),f.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})};const Cc="180",Lp=0,Uu=1,Dp=2,Pc=1,Ip=2,_i=3,Gi=0,fn=1,Qt=2,Bi=0,os=1,lo=2,Nu=3,Fu=4,Up=5,cr=100,Np=101,Fp=102,Op=103,Bp=104,kp=200,zp=201,Hp=202,Gp=203,El=204,wl=205,Vp=206,Wp=207,Xp=208,qp=209,$p=210,Yp=211,jp=212,Kp=213,Zp=214,Tl=0,Al=1,Rl=2,us=3,Cl=4,Pl=5,Ll=6,Dl=7,bh=0,Jp=1,Qp=2,ki=0,em=1,tm=2,nm=3,im=4,rm=5,sm=6,am=7,Eh=300,ds=301,hs=302,Il=303,Ul=304,yo=306,Nl=1e3,pr=1001,Fl=1002,Rn=1003,om=1004,pa=1005,ti=1006,zo=1007,mr=1008,ai=1009,wh=1010,Th=1011,Xs=1012,Lc=1013,Mr=1014,ni=1015,aa=1016,Dc=1017,Ic=1018,qs=1020,Ah=35902,Rh=35899,Ch=1021,Ph=1022,Yn=1023,$s=1026,Ys=1027,Uc=1028,Nc=1029,Lh=1030,Fc=1031,Oc=1033,Qa=33776,eo=33777,to=33778,no=33779,Ol=35840,Bl=35841,kl=35842,zl=35843,Hl=36196,Gl=37492,Vl=37496,Wl=37808,Xl=37809,ql=37810,$l=37811,Yl=37812,jl=37813,Kl=37814,Zl=37815,Jl=37816,Ql=37817,ec=37818,tc=37819,nc=37820,ic=37821,rc=36492,sc=36494,ac=36495,oc=36283,lc=36284,cc=36285,uc=36286,lm=3200,cm=3201,Dh=0,um=1,Ni="",Fn="srgb",fs="srgb-linear",co="linear",mt="srgb",Nr=7680,Ou=519,dm=512,hm=513,fm=514,Ih=515,pm=516,mm=517,gm=518,_m=519,dc=35044,Bu="300 es",ii=2e3,uo=2001;class xs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ku=1234567;const ks=Math.PI/180,js=180/Math.PI;function yi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function Ze(n,e,t){return Math.max(e,Math.min(t,n))}function Bc(n,e){return(n%e+e)%e}function vm(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function xm(n,e,t){return n!==e?(t-n)/(e-n):0}function zs(n,e,t){return(1-t)*n+t*e}function Mm(n,e,t,i){return zs(n,e,1-Math.exp(-t*i))}function ym(n,e=1){return e-Math.abs(Bc(n,e*2)-e)}function Sm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function bm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Em(n,e){return n+Math.floor(Math.random()*(e-n+1))}function wm(n,e){return n+Math.random()*(e-n)}function Tm(n){return n*(.5-Math.random())}function Am(n){n!==void 0&&(ku=n);let e=ku+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Rm(n){return n*ks}function Cm(n){return n*js}function Pm(n){return(n&n-1)===0&&n!==0}function Lm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Dm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Im(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),d=s((e-i)/2),h=a((e-i)/2),f=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*d,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*d,o*c);break;case"ZXZ":n.set(l*d,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*f,o*c);break;case"YXY":n.set(l*f,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Xn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ft(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const hc={DEG2RAD:ks,RAD2DEG:js,generateUUID:yi,clamp:Ze,euclideanModulo:Bc,mapLinear:vm,inverseLerp:xm,lerp:zs,damp:Mm,pingpong:ym,smoothstep:Sm,smootherstep:bm,randInt:Em,randFloat:wm,randFloatSpread:Tm,seededRandom:Am,degToRad:Rm,radToDeg:Cm,isPowerOfTwo:Pm,ceilPowerOfTwo:Lm,floorPowerOfTwo:Dm,setQuaternionFromProperEuler:Im,normalize:ft,denormalize:Xn};class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ar{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=s[a+0],f=s[a+1],g=s[a+2],x=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(d!==x||l!==h||c!==f||u!==g){let m=1-o;const p=l*h+c*f+u*g+d*x,w=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const C=Math.sqrt(b),A=Math.atan2(C,p*w);m=Math.sin(m*A)/C,o=Math.sin(o*A)/C}const M=o*w;if(l=l*m+h*M,c=c*m+f*M,u=u*m+g*M,d=d*m+x*M,m===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],h=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-o*f,e[t+2]=c*g+u*f+o*h-l*d,e[t+3]=u*g-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),h=l(i/2),f=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+l*c+a*d-o*u,this.y=i+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ho.copy(this).projectOnVector(e),this.sub(Ho)}reflect(e){return this.sub(Ho.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ho=new N,zu=new Ar;class Xe{constructor(e,t,i,r,s,a,o,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],x=r[0],m=r[3],p=r[6],w=r[1],b=r[4],M=r[7],C=r[2],A=r[5],L=r[8];return s[0]=a*x+o*w+l*C,s[3]=a*m+o*b+l*A,s[6]=a*p+o*M+l*L,s[1]=c*x+u*w+d*C,s[4]=c*m+u*b+d*A,s[7]=c*p+u*M+d*L,s[2]=h*x+f*w+g*C,s[5]=h*m+f*b+g*A,s[8]=h*p+f*M+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,f=c*s-a*l,g=t*d+i*h+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(r*c-u*i)*x,e[2]=(o*i-r*a)*x,e[3]=h*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-o*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Go.makeScale(e,t)),this}rotate(e){return this.premultiply(Go.makeRotation(-e)),this}translate(e,t){return this.premultiply(Go.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Go=new Xe;function Uh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ho(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Um(){const n=ho("canvas");return n.style.display="block",n}const Hu={};function Ks(n){n in Hu||(Hu[n]=!0,console.warn(n))}function Nm(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Gu=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vu=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fm(){const n={enabled:!0,workingColorSpace:fs,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===mt&&(r.r=Si(r.r),r.g=Si(r.g),r.b=Si(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===mt&&(r.r=ls(r.r),r.g=ls(r.g),r.b=ls(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ni?co:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ks("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ks("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[fs]:{primaries:e,whitePoint:i,transfer:co,toXYZ:Gu,fromXYZ:Vu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Fn},outputColorSpaceConfig:{drawingBufferColorSpace:Fn}},[Fn]:{primaries:e,whitePoint:i,transfer:mt,toXYZ:Gu,fromXYZ:Vu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Fn}}}),n}const ot=Fm();function Si(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ls(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Fr;class Om{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Fr===void 0&&(Fr=ho("canvas")),Fr.width=e.width,Fr.height=e.height;const r=Fr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Fr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ho("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Si(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Si(t[i]/255)*255):t[i]=Si(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Bm=0;class kc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=yi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Vo(r[a].image)):s.push(Vo(r[a]))}else s=Vo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Vo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Om.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let km=0;const Wo=new N;class sn extends xs{constructor(e=sn.DEFAULT_IMAGE,t=sn.DEFAULT_MAPPING,i=pr,r=pr,s=ti,a=mr,o=Yn,l=ai,c=sn.DEFAULT_ANISOTROPY,u=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=yi(),this.name="",this.source=new kc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wo).x}get height(){return this.source.getSize(Wo).y}get depth(){return this.source.getSize(Wo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Eh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nl:e.x=e.x-Math.floor(e.x);break;case pr:e.x=e.x<0?0:1;break;case Fl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nl:e.y=e.y-Math.floor(e.y);break;case pr:e.y=e.y<0?0:1;break;case Fl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Eh;sn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,t=0,i=0,r=1){Ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,M=(f+1)/2,C=(p+1)/2,A=(u+h)/4,L=(d+x)/4,D=(g+m)/4;return b>M&&b>C?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=A/i,s=L/i):M>C?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=A/r,s=D/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=L/s,r=D/s),this.set(i,r,s,t),this}let w=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(d-x)/w,this.z=(h-u)/w,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zm extends xs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new sn(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:ti,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new kc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yr extends zm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Nh extends sn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hm extends sn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rr{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Gn):Gn.fromBufferAttribute(s,a),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ma.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ma.copy(i.boundingBox)),ma.applyMatrix4(e.matrixWorld),this.union(ma)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ws),ga.subVectors(this.max,ws),Or.subVectors(e.a,ws),Br.subVectors(e.b,ws),kr.subVectors(e.c,ws),Ai.subVectors(Br,Or),Ri.subVectors(kr,Br),Qi.subVectors(Or,kr);let t=[0,-Ai.z,Ai.y,0,-Ri.z,Ri.y,0,-Qi.z,Qi.y,Ai.z,0,-Ai.x,Ri.z,0,-Ri.x,Qi.z,0,-Qi.x,-Ai.y,Ai.x,0,-Ri.y,Ri.x,0,-Qi.y,Qi.x,0];return!Xo(t,Or,Br,kr,ga)||(t=[1,0,0,0,1,0,0,0,1],!Xo(t,Or,Br,kr,ga))?!1:(_a.crossVectors(Ai,Ri),t=[_a.x,_a.y,_a.z],Xo(t,Or,Br,kr,ga))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const di=[new N,new N,new N,new N,new N,new N,new N,new N],Gn=new N,ma=new Rr,Or=new N,Br=new N,kr=new N,Ai=new N,Ri=new N,Qi=new N,ws=new N,ga=new N,_a=new N,er=new N;function Xo(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){er.fromArray(n,s);const o=r.x*Math.abs(er.x)+r.y*Math.abs(er.y)+r.z*Math.abs(er.z),l=e.dot(er),c=t.dot(er),u=i.dot(er);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Gm=new Rr,Ts=new N,qo=new N;class Cr{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Gm.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ts.subVectors(e,this.center);const t=Ts.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ts,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ts.copy(e.center).add(qo)),this.expandByPoint(Ts.copy(e.center).sub(qo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const hi=new N,$o=new N,va=new N,Ci=new N,Yo=new N,xa=new N,jo=new N;class zc{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,t),hi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){$o.copy(e).add(t).multiplyScalar(.5),va.copy(t).sub(e).normalize(),Ci.copy(this.origin).sub($o);const s=e.distanceTo(t)*.5,a=-this.direction.dot(va),o=Ci.dot(this.direction),l=-Ci.dot(va),c=Ci.lengthSq(),u=Math.abs(1-a*a);let d,h,f,g;if(u>0)if(d=a*l-o,h=a*o-l,g=s*u,d>=0)if(h>=-g)if(h<=g){const x=1/u;d*=x,h*=x,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy($o).addScaledVector(va,h),f}intersectSphere(e,t){hi.subVectors(e.center,this.origin);const i=hi.dot(this.direction),r=hi.dot(hi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,i,r,s){Yo.subVectors(t,e),xa.subVectors(i,e),jo.crossVectors(Yo,xa);let a=this.direction.dot(jo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ci.subVectors(this.origin,e);const l=o*this.direction.dot(xa.crossVectors(Ci,xa));if(l<0)return null;const c=o*this.direction.dot(Yo.cross(Ci));if(c<0||l+c>a)return null;const u=-o*Ci.dot(jo);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,i,r,s,a,o,l,c,u,d,h,f,g,x,m){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,d,h,f,g,x,m)}set(e,t,i,r,s,a,o,l,c,u,d,h,f,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/zr.setFromMatrixColumn(e,0).length(),s=1/zr.setFromMatrixColumn(e,1).length(),a=1/zr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,f=a*d,g=o*u,x=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-x*c,t[9]=-o*l,t[2]=x-h*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,g=c*u,x=c*d;t[0]=h+x*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=x+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,g=c*u,x=c*d;t[0]=h-x*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=x-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,f=a*d,g=o*u,x=o*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+x,t[1]=l*d,t[5]=x*c+h,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*u,t[4]=x-h*d,t[8]=g*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-x*d}else if(e.order==="XZY"){const h=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+x,t[5]=a*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*u,t[10]=x*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vm,e,Wm)}lookAt(e,t,i){const r=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),Pi.crossVectors(i,En),Pi.lengthSq()===0&&(Math.abs(i.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Pi.crossVectors(i,En)),Pi.normalize(),Ma.crossVectors(En,Pi),r[0]=Pi.x,r[4]=Ma.x,r[8]=En.x,r[1]=Pi.y,r[5]=Ma.y,r[9]=En.y,r[2]=Pi.z,r[6]=Ma.z,r[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],x=i[6],m=i[10],p=i[14],w=i[3],b=i[7],M=i[11],C=i[15],A=r[0],L=r[4],D=r[8],E=r[12],S=r[1],I=r[5],B=r[9],G=r[13],X=r[2],Y=r[6],q=r[10],se=r[14],V=r[3],ce=r[7],me=r[11],Pe=r[15];return s[0]=a*A+o*S+l*X+c*V,s[4]=a*L+o*I+l*Y+c*ce,s[8]=a*D+o*B+l*q+c*me,s[12]=a*E+o*G+l*se+c*Pe,s[1]=u*A+d*S+h*X+f*V,s[5]=u*L+d*I+h*Y+f*ce,s[9]=u*D+d*B+h*q+f*me,s[13]=u*E+d*G+h*se+f*Pe,s[2]=g*A+x*S+m*X+p*V,s[6]=g*L+x*I+m*Y+p*ce,s[10]=g*D+x*B+m*q+p*me,s[14]=g*E+x*G+m*se+p*Pe,s[3]=w*A+b*S+M*X+C*V,s[7]=w*L+b*I+M*Y+C*ce,s[11]=w*D+b*B+M*q+C*me,s[15]=w*E+b*G+M*se+C*Pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+s*l*d-r*c*d-s*o*h+i*c*h+r*o*f-i*l*f)+x*(+t*l*f-t*c*h+s*a*h-r*a*f+r*c*u-s*l*u)+m*(+t*c*d-t*o*f-s*a*d+i*a*f+s*o*u-i*c*u)+p*(-r*o*u-t*l*d+t*o*h+r*a*d-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],w=d*m*c-x*h*c+x*l*f-o*m*f-d*l*p+o*h*p,b=g*h*c-u*m*c-g*l*f+a*m*f+u*l*p-a*h*p,M=u*x*c-g*d*c+g*o*f-a*x*f-u*o*p+a*d*p,C=g*d*l-u*x*l-g*o*h+a*x*h+u*o*m-a*d*m,A=t*w+i*b+r*M+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/A;return e[0]=w*L,e[1]=(x*h*s-d*m*s-x*r*f+i*m*f+d*r*p-i*h*p)*L,e[2]=(o*m*s-x*l*s+x*r*c-i*m*c-o*r*p+i*l*p)*L,e[3]=(d*l*s-o*h*s-d*r*c+i*h*c+o*r*f-i*l*f)*L,e[4]=b*L,e[5]=(u*m*s-g*h*s+g*r*f-t*m*f-u*r*p+t*h*p)*L,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*p-t*l*p)*L,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*f+t*l*f)*L,e[8]=M*L,e[9]=(g*d*s-u*x*s-g*i*f+t*x*f+u*i*p-t*d*p)*L,e[10]=(a*x*s-g*o*s+g*i*c-t*x*c-a*i*p+t*o*p)*L,e[11]=(u*o*s-a*d*s-u*i*c+t*d*c+a*i*f-t*o*f)*L,e[12]=C*L,e[13]=(u*x*r-g*d*r+g*i*h-t*x*h-u*i*m+t*d*m)*L,e[14]=(g*o*r-a*x*r-g*i*l+t*x*l+a*i*m-t*o*m)*L,e[15]=(a*d*r-u*o*r+u*i*l-t*d*l-a*i*h+t*o*h)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,h=s*c,f=s*u,g=s*d,x=a*u,m=a*d,p=o*d,w=l*c,b=l*u,M=l*d,C=i.x,A=i.y,L=i.z;return r[0]=(1-(x+p))*C,r[1]=(f+M)*C,r[2]=(g-b)*C,r[3]=0,r[4]=(f-M)*A,r[5]=(1-(h+p))*A,r[6]=(m+w)*A,r[7]=0,r[8]=(g+b)*L,r[9]=(m-w)*L,r[10]=(1-(h+x))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=zr.set(r[0],r[1],r[2]).length();const a=zr.set(r[4],r[5],r[6]).length(),o=zr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Vn.copy(this);const c=1/s,u=1/a,d=1/o;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=u,Vn.elements[5]*=u,Vn.elements[6]*=u,Vn.elements[8]*=d,Vn.elements[9]*=d,Vn.elements[10]*=d,t.setFromRotationMatrix(Vn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=ii,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let g,x;if(l)g=s/(a-s),x=a*s/(a-s);else if(o===ii)g=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===uo)g=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=ii,l=!1){const c=this.elements,u=2/(t-e),d=2/(i-r),h=-(t+e)/(t-e),f=-(i+r)/(i-r);let g,x;if(l)g=1/(a-s),x=a/(a-s);else if(o===ii)g=-2/(a-s),x=-(a+s)/(a-s);else if(o===uo)g=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const zr=new N,Vn=new ct,Vm=new N(0,0,0),Wm=new N(1,1,1),Pi=new N,Ma=new N,En=new N,Wu=new ct,Xu=new Ar;class oi{constructor(e=0,t=0,i=0,r=oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Wu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xu.setFromEuler(this),this.setFromQuaternion(Xu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oi.DEFAULT_ORDER="XYZ";class Hc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xm=0;const qu=new N,Hr=new Ar,fi=new ct,ya=new N,As=new N,qm=new N,$m=new Ar,$u=new N(1,0,0),Yu=new N(0,1,0),ju=new N(0,0,1),Ku={type:"added"},Ym={type:"removed"},Gr={type:"childadded",child:null},Ko={type:"childremoved",child:null};class Ht extends xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new N,t=new oi,i=new Ar,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new Xe}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hr.setFromAxisAngle(e,t),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(e,t){return Hr.setFromAxisAngle(e,t),this.quaternion.premultiply(Hr),this}rotateX(e){return this.rotateOnAxis($u,e)}rotateY(e){return this.rotateOnAxis(Yu,e)}rotateZ(e){return this.rotateOnAxis(ju,e)}translateOnAxis(e,t){return qu.copy(e).applyQuaternion(this.quaternion),this.position.add(qu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($u,e)}translateY(e){return this.translateOnAxis(Yu,e)}translateZ(e){return this.translateOnAxis(ju,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ya.copy(e):ya.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(As,ya,this.up):fi.lookAt(ya,As,this.up),this.quaternion.setFromRotationMatrix(fi),r&&(fi.extractRotation(r.matrixWorld),Hr.setFromRotationMatrix(fi),this.quaternion.premultiply(Hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ku),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ym),Ko.child=e,this.dispatchEvent(Ko),Ko.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ku),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,e,qm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,$m,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ht.DEFAULT_UP=new N(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new N,pi=new N,Zo=new N,mi=new N,Vr=new N,Wr=new N,Zu=new N,Jo=new N,Qo=new N,el=new N,tl=new Ut,nl=new Ut,il=new Ut;class kn{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Wn.subVectors(e,t),r.cross(Wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Wn.subVectors(r,t),pi.subVectors(i,t),Zo.subVectors(e,t);const a=Wn.dot(Wn),o=Wn.dot(pi),l=Wn.dot(Zo),c=pi.dot(pi),u=pi.dot(Zo),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,mi.x),l.addScaledVector(a,mi.y),l.addScaledVector(o,mi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return tl.setScalar(0),nl.setScalar(0),il.setScalar(0),tl.fromBufferAttribute(e,t),nl.fromBufferAttribute(e,i),il.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(tl,s.x),a.addScaledVector(nl,s.y),a.addScaledVector(il,s.z),a}static isFrontFacing(e,t,i,r){return Wn.subVectors(i,t),pi.subVectors(e,t),Wn.cross(pi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),Wn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return kn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Vr.subVectors(r,i),Wr.subVectors(s,i),Jo.subVectors(e,i);const l=Vr.dot(Jo),c=Wr.dot(Jo);if(l<=0&&c<=0)return t.copy(i);Qo.subVectors(e,r);const u=Vr.dot(Qo),d=Wr.dot(Qo);if(u>=0&&d<=u)return t.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Vr,a);el.subVectors(e,s);const f=Vr.dot(el),g=Wr.dot(el);if(g>=0&&f<=g)return t.copy(s);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Wr,o);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return Zu.subVectors(s,r),o=(d-u)/(d-u+(f-g)),t.copy(r).addScaledVector(Zu,o);const p=1/(m+x+h);return a=x*p,o=h*p,t.copy(i).addScaledVector(Vr,a).addScaledVector(Wr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},Sa={h:0,s:0,l:0};function rl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Re{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,ot.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=ot.workingColorSpace){if(e=Bc(e,1),t=Ze(t,0,1),i=Ze(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=rl(a,s,e+1/3),this.g=rl(a,s,e),this.b=rl(a,s,e-1/3)}return ot.colorSpaceToWorking(this,r),this}setStyle(e,t=Fn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Fn){const i=Fh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}copyLinearToSRGB(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return ot.workingToColorSpace(nn.copy(this),e),Math.round(Ze(nn.r*255,0,255))*65536+Math.round(Ze(nn.g*255,0,255))*256+Math.round(Ze(nn.b*255,0,255))}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(nn.copy(this),t);const i=nn.r,r=nn.g,s=nn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Fn){ot.workingToColorSpace(nn.copy(this),e);const t=nn.r,i=nn.g,r=nn.b;return e!==Fn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+t,Li.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Li),e.getHSL(Sa);const i=zs(Li.h,Sa.h,t),r=zs(Li.s,Sa.s,t),s=zs(Li.l,Sa.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new Re;Re.NAMES=Fh;let jm=0;class Pr extends xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=os,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=El,this.blendDst=wl,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ou,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nr,this.stencilZFail=Nr,this.stencilZPass=Nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(i.blending=this.blending),this.side!==Gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==El&&(i.blendSrc=this.blendSrc),this.blendDst!==wl&&(i.blendDst=this.blendDst),this.blendEquation!==cr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==us&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ou&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Nr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Nr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Pt extends Pr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kt=new N,ba=new Fe;let Km=0;class Mn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Km++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=dc,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ba.fromBufferAttribute(this,t),ba.applyMatrix3(e),this.setXY(t,ba.x,ba.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),r=ft(r,this.array),s=ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dc&&(e.usage=this.usage),e}}class Oh extends Mn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Bh extends Mn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Je extends Mn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Zm=0;const Un=new ct,sl=new Ht,Xr=new N,wn=new Rr,Rs=new Rr,jt=new N;class Bt extends xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uh(e)?Bh:Oh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,t,i){return Un.makeTranslation(e,t,i),this.applyMatrix4(Un),this}scale(e,t,i){return Un.makeScale(e,t,i),this.applyMatrix4(Un),this}lookAt(e){return sl.lookAt(e),sl.updateMatrix(),this.applyMatrix4(sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Je(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];wn.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Rs.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(wn.min,Rs.min),wn.expandByPoint(jt),jt.addVectors(wn.max,Rs.max),wn.expandByPoint(jt)):(wn.expandByPoint(Rs.min),wn.expandByPoint(Rs.max))}wn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(jt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)jt.fromBufferAttribute(o,c),l&&(Xr.fromBufferAttribute(e,c),jt.add(Xr)),r=Math.max(r,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new N,l[D]=new N;const c=new N,u=new N,d=new N,h=new Fe,f=new Fe,g=new Fe,x=new N,m=new N;function p(D,E,S){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,S),h.fromBufferAttribute(s,D),f.fromBufferAttribute(s,E),g.fromBufferAttribute(s,S),u.sub(c),d.sub(c),f.sub(h),g.sub(h);const I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(I),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(I),o[D].add(x),o[E].add(x),o[S].add(x),l[D].add(m),l[E].add(m),l[S].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let D=0,E=w.length;D<E;++D){const S=w[D],I=S.start,B=S.count;for(let G=I,X=I+B;G<X;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const b=new N,M=new N,C=new N,A=new N;function L(D){C.fromBufferAttribute(r,D),A.copy(C);const E=o[D];b.copy(E),b.sub(C.multiplyScalar(C.dot(E))).normalize(),M.crossVectors(A,E);const I=M.dot(l[D])<0?-1:1;a.setXYZW(D,b.x,b.y,b.z,I)}for(let D=0,E=w.length;D<E;++D){const S=w[D],I=S.start,B=S.count;for(let G=I,X=I+B;G<X;G+=3)L(e.getX(G+0)),L(e.getX(G+1)),L(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Mn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const r=new N,s=new N,a=new N,o=new N,l=new N,c=new N,u=new N,d=new N;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*u;for(let p=0;p<u;p++)h[g++]=c[f++]}return new Mn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ju=new ct,tr=new zc,Ea=new Cr,Qu=new N,wa=new N,Ta=new N,Aa=new N,al=new N,Ra=new N,ed=new N,Ca=new N;class ee extends Ht{constructor(e=new Bt,t=new Pt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ra.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(al.fromBufferAttribute(d,e),a?Ra.addScaledVector(al,u):Ra.addScaledVector(al.sub(t),u))}t.add(Ra)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ea.copy(i.boundingSphere),Ea.applyMatrix4(s),tr.copy(e.ray).recast(e.near),!(Ea.containsPoint(tr.origin)===!1&&(tr.intersectSphere(Ea,Qu)===null||tr.origin.distanceToSquared(Qu)>(e.far-e.near)**2))&&(Ju.copy(s).invert(),tr.copy(e.ray).applyMatrix4(Ju),!(i.boundingBox!==null&&tr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,tr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){const m=h[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=w,C=b;M<C;M+=3){const A=o.getX(M),L=o.getX(M+1),D=o.getX(M+2);r=Pa(this,p,e,i,c,u,d,A,L,D),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const w=o.getX(m),b=o.getX(m+1),M=o.getX(m+2);r=Pa(this,a,e,i,c,u,d,w,b,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){const m=h[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=w,C=b;M<C;M+=3){const A=M,L=M+1,D=M+2;r=Pa(this,p,e,i,c,u,d,A,L,D),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const w=m,b=m+1,M=m+2;r=Pa(this,a,e,i,c,u,d,w,b,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Jm(n,e,t,i,r,s,a,o){let l;if(e.side===fn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Gi,o),l===null)return null;Ca.copy(o),Ca.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ca);return c<t.near||c>t.far?null:{distance:c,point:Ca.clone(),object:n}}function Pa(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,wa),n.getVertexPosition(l,Ta),n.getVertexPosition(c,Aa);const u=Jm(n,e,t,i,wa,Ta,Aa,ed);if(u){const d=new N;kn.getBarycoord(ed,wa,Ta,Aa,d),r&&(u.uv=kn.getInterpolatedAttribute(r,o,l,c,d,new Fe)),s&&(u.uv1=kn.getInterpolatedAttribute(s,o,l,c,d,new Fe)),a&&(u.normal=kn.getInterpolatedAttribute(a,o,l,c,d,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new N,materialIndex:0};kn.getNormal(wa,Ta,Aa,h.normal),u.face=h,u.barycoord=d}return u}class Vi extends Bt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(u,3)),this.setAttribute("uv",new Je(d,2));function g(x,m,p,w,b,M,C,A,L,D,E){const S=M/L,I=C/D,B=M/2,G=C/2,X=A/2,Y=L+1,q=D+1;let se=0,V=0;const ce=new N;for(let me=0;me<q;me++){const Pe=me*I-G;for(let Ke=0;Ke<Y;Ke++){const Mt=Ke*S-B;ce[x]=Mt*w,ce[m]=Pe*b,ce[p]=X,c.push(ce.x,ce.y,ce.z),ce[x]=0,ce[m]=0,ce[p]=A>0?1:-1,u.push(ce.x,ce.y,ce.z),d.push(Ke/L),d.push(1-me/D),se+=1}}for(let me=0;me<D;me++)for(let Pe=0;Pe<L;Pe++){const Ke=h+Pe+Y*me,Mt=h+Pe+Y*(me+1),Tt=h+(Pe+1)+Y*(me+1),ut=h+(Pe+1)+Y*me;l.push(Ke,Mt,ut),l.push(Mt,Tt,ut),V+=6}o.addGroup(f,V,E),f+=V,h+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ps(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function dn(n){const e={};for(let t=0;t<n.length;t++){const i=ps(n[t]);for(const r in i)e[r]=i[r]}return e}function Qm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function kh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const e0={clone:ps,merge:dn};var t0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,n0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wi extends Pr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=t0,this.fragmentShader=n0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ps(e.uniforms),this.uniformsGroups=Qm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class zh extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Di=new N,td=new Fe,nd=new Fe;class On extends zh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ks*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return js*2*Math.atan(Math.tan(ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Di.x,Di.y).multiplyScalar(-e/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Di.x,Di.y).multiplyScalar(-e/Di.z)}getViewSize(e,t){return this.getViewBounds(e,td,nd),t.subVectors(nd,td)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ks*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qr=-90,$r=1;class i0 extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new On(qr,$r,e,t);r.layers=this.layers,this.add(r);const s=new On(qr,$r,e,t);s.layers=this.layers,this.add(s);const a=new On(qr,$r,e,t);a.layers=this.layers,this.add(a);const o=new On(qr,$r,e,t);o.layers=this.layers,this.add(o);const l=new On(qr,$r,e,t);l.layers=this.layers,this.add(l);const c=new On(qr,$r,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===ii)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===uo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Hh extends sn{constructor(e=[],t=ds,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class r0 extends yr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Hh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Vi(5,5,5),s=new wi({name:"CubemapFromEquirect",uniforms:ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:Bi});s.uniforms.tEquirect.value=t;const a=new ee(r,s),o=t.minFilter;return t.minFilter===mr&&(t.minFilter=ti),new i0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class et extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const s0={type:"move"};class ol{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(s0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new et;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Gc{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Re(e),this.near=t,this.far=i}clone(){return new Gc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class a0 extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class o0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=dc,this.updateRanges=[],this.version=0,this.uuid=yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const cn=new N;class fo{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ft(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Xn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),r=ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),r=ft(r,this.array),s=ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Mn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new fo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Gh extends Pr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Yr;const Cs=new N,jr=new N,Kr=new N,Zr=new Fe,Ps=new Fe,Vh=new ct,La=new N,Ls=new N,Da=new N,id=new Fe,ll=new Fe,rd=new Fe;class l0 extends Ht{constructor(e=new Gh){if(super(),this.isSprite=!0,this.type="Sprite",Yr===void 0){Yr=new Bt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new o0(t,5);Yr.setIndex([0,1,2,0,2,3]),Yr.setAttribute("position",new fo(i,3,0,!1)),Yr.setAttribute("uv",new fo(i,2,3,!1))}this.geometry=Yr,this.material=e,this.center=new Fe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),jr.setFromMatrixScale(this.matrixWorld),Vh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Kr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&jr.multiplyScalar(-Kr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;Ia(La.set(-.5,-.5,0),Kr,a,jr,r,s),Ia(Ls.set(.5,-.5,0),Kr,a,jr,r,s),Ia(Da.set(.5,.5,0),Kr,a,jr,r,s),id.set(0,0),ll.set(1,0),rd.set(1,1);let o=e.ray.intersectTriangle(La,Ls,Da,!1,Cs);if(o===null&&(Ia(Ls.set(-.5,.5,0),Kr,a,jr,r,s),ll.set(0,1),o=e.ray.intersectTriangle(La,Da,Ls,!1,Cs),o===null))return;const l=e.ray.origin.distanceTo(Cs);l<e.near||l>e.far||t.push({distance:l,point:Cs.clone(),uv:kn.getInterpolation(Cs,La,Ls,Da,id,ll,rd,new Fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ia(n,e,t,i,r,s){Zr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Ps.x=s*Zr.x-r*Zr.y,Ps.y=r*Zr.x+s*Zr.y):Ps.copy(Zr),n.copy(e),n.x+=Ps.x,n.y+=Ps.y,n.applyMatrix4(Vh)}class c0 extends sn{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Rn,u=Rn,d,h){super(null,a,o,l,c,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sd extends Mn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Jr=new ct,ad=new ct,Ua=[],od=new Rr,u0=new ct,Ds=new ee,Is=new Cr;class Vc extends ee{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new sd(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,u0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Rr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Jr),od.copy(e.boundingBox).applyMatrix4(Jr),this.boundingBox.union(od)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Jr),Is.copy(e.boundingSphere).applyMatrix4(Jr),this.boundingSphere.union(Is)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Ds.geometry=this.geometry,Ds.material=this.material,Ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Is.copy(this.boundingSphere),Is.applyMatrix4(i),e.ray.intersectsSphere(Is)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Jr),ad.multiplyMatrices(i,Jr),Ds.matrixWorld=ad,Ds.raycast(e,Ua);for(let a=0,o=Ua.length;a<o;a++){const l=Ua[a];l.instanceId=s,l.object=this,t.push(l)}Ua.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new sd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new c0(new Float32Array(r*this.count),r,this.count,Uc,ni));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const cl=new N,d0=new N,h0=new Xe;class or{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=cl.subVectors(i,t).cross(d0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(cl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||h0.getNormalMatrix(e),r=this.coplanarPoint(cl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const nr=new Cr,f0=new Fe(.5,.5),Na=new N;class Wc{constructor(e=new or,t=new or,i=new or,r=new or,s=new or,a=new or){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ii,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],h=s[6],f=s[7],g=s[8],x=s[9],m=s[10],p=s[11],w=s[12],b=s[13],M=s[14],C=s[15];if(r[0].setComponents(c-a,f-u,p-g,C-w).normalize(),r[1].setComponents(c+a,f+u,p+g,C+w).normalize(),r[2].setComponents(c+o,f+d,p+x,C+b).normalize(),r[3].setComponents(c-o,f-d,p-x,C-b).normalize(),i)r[4].setComponents(l,h,m,M).normalize(),r[5].setComponents(c-l,f-h,p-m,C-M).normalize();else if(r[4].setComponents(c-l,f-h,p-m,C-M).normalize(),t===ii)r[5].setComponents(c+l,f+h,p+m,C+M).normalize();else if(t===uo)r[5].setComponents(l,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),nr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(nr)}intersectsSprite(e){nr.center.set(0,0,0);const t=f0.distanceTo(e.center);return nr.radius=.7071067811865476+t,nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(nr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Na.x=r.normal.x>0?e.max.x:e.min.x,Na.y=r.normal.y>0?e.max.y:e.min.y,Na.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Na)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wh extends Pr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ld=new ct,fc=new zc,Fa=new Cr,Oa=new N;class p0 extends Ht{constructor(e=new Bt,t=new Wh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fa.copy(i.boundingSphere),Fa.applyMatrix4(r),Fa.radius+=s,e.ray.intersectsSphere(Fa)===!1)return;ld.copy(r).invert(),fc.copy(e.ray).applyMatrix4(ld);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=h,x=f;g<x;g++){const m=c.getX(g);Oa.fromBufferAttribute(d,m),cd(Oa,m,l,r,e,t,this)}}else{const h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=h,x=f;g<x;g++)Oa.fromBufferAttribute(d,g),cd(Oa,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function cd(n,e,t,i,r,s,a){const o=fc.distanceSqToPoint(n);if(o<t){const l=new N;fc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class m0 extends sn{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xh extends sn{constructor(e,t,i=Mr,r,s,a,o=Rn,l=Rn,c,u=$s,d=1){if(u!==$s&&u!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new kc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class qh extends sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Xc extends Bt{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new N,u=new Fe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const f=i+d/t*r;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Je(a,3)),this.setAttribute("normal",new Je(o,3)),this.setAttribute("uv",new Je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class gn extends Bt{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],h=[],f=[];let g=0;const x=[],m=i/2;let p=0;w(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Je(d,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(f,2));function w(){const M=new N,C=new N;let A=0;const L=(t-e)/i;for(let D=0;D<=s;D++){const E=[],S=D/s,I=S*(t-e)+e;for(let B=0;B<=r;B++){const G=B/r,X=G*l+o,Y=Math.sin(X),q=Math.cos(X);C.x=I*Y,C.y=-S*i+m,C.z=I*q,d.push(C.x,C.y,C.z),M.set(Y,L,q).normalize(),h.push(M.x,M.y,M.z),f.push(G,1-S),E.push(g++)}x.push(E)}for(let D=0;D<r;D++)for(let E=0;E<s;E++){const S=x[E][D],I=x[E+1][D],B=x[E+1][D+1],G=x[E][D+1];(e>0||E!==0)&&(u.push(S,I,G),A+=3),(t>0||E!==s-1)&&(u.push(I,B,G),A+=3)}c.addGroup(p,A,0),p+=A}function b(M){const C=g,A=new Fe,L=new N;let D=0;const E=M===!0?e:t,S=M===!0?1:-1;for(let B=1;B<=r;B++)d.push(0,m*S,0),h.push(0,S,0),f.push(.5,.5),g++;const I=g;for(let B=0;B<=r;B++){const X=B/r*l+o,Y=Math.cos(X),q=Math.sin(X);L.x=E*q,L.y=m*S,L.z=E*Y,d.push(L.x,L.y,L.z),h.push(0,S,0),A.x=Y*.5+.5,A.y=q*.5*S+.5,f.push(A.x,A.y),g++}for(let B=0;B<r;B++){const G=C+B,X=I+B;M===!0?u.push(X,X+1,G):u.push(X+1,X,G),D+=3}c.addGroup(p,D,M===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wt extends gn{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Wt(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ms extends Bt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];o(r),c(i),u(),this.setAttribute("position",new Je(s,3)),this.setAttribute("normal",new Je(s.slice(),3)),this.setAttribute("uv",new Je(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(w){const b=new N,M=new N,C=new N;for(let A=0;A<t.length;A+=3)f(t[A+0],b),f(t[A+1],M),f(t[A+2],C),l(b,M,C,w)}function l(w,b,M,C){const A=C+1,L=[];for(let D=0;D<=A;D++){L[D]=[];const E=w.clone().lerp(M,D/A),S=b.clone().lerp(M,D/A),I=A-D;for(let B=0;B<=I;B++)B===0&&D===A?L[D][B]=E:L[D][B]=E.clone().lerp(S,B/I)}for(let D=0;D<A;D++)for(let E=0;E<2*(A-D)-1;E++){const S=Math.floor(E/2);E%2===0?(h(L[D][S+1]),h(L[D+1][S]),h(L[D][S])):(h(L[D][S+1]),h(L[D+1][S+1]),h(L[D+1][S]))}}function c(w){const b=new N;for(let M=0;M<s.length;M+=3)b.x=s[M+0],b.y=s[M+1],b.z=s[M+2],b.normalize().multiplyScalar(w),s[M+0]=b.x,s[M+1]=b.y,s[M+2]=b.z}function u(){const w=new N;for(let b=0;b<s.length;b+=3){w.x=s[b+0],w.y=s[b+1],w.z=s[b+2];const M=m(w)/2/Math.PI+.5,C=p(w)/Math.PI+.5;a.push(M,1-C)}g(),d()}function d(){for(let w=0;w<a.length;w+=6){const b=a[w+0],M=a[w+2],C=a[w+4],A=Math.max(b,M,C),L=Math.min(b,M,C);A>.9&&L<.1&&(b<.2&&(a[w+0]+=1),M<.2&&(a[w+2]+=1),C<.2&&(a[w+4]+=1))}}function h(w){s.push(w.x,w.y,w.z)}function f(w,b){const M=w*3;b.x=e[M+0],b.y=e[M+1],b.z=e[M+2]}function g(){const w=new N,b=new N,M=new N,C=new N,A=new Fe,L=new Fe,D=new Fe;for(let E=0,S=0;E<s.length;E+=9,S+=6){w.set(s[E+0],s[E+1],s[E+2]),b.set(s[E+3],s[E+4],s[E+5]),M.set(s[E+6],s[E+7],s[E+8]),A.set(a[S+0],a[S+1]),L.set(a[S+2],a[S+3]),D.set(a[S+4],a[S+5]),C.copy(w).add(b).add(M).divideScalar(3);const I=m(C);x(A,S+0,w,I),x(L,S+2,b,I),x(D,S+4,M,I)}}function x(w,b,M,C){C<0&&w.x===1&&(a[b]=w.x-1),M.x===0&&M.z===0&&(a[b]=C/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ms(e.vertices,e.indices,e.radius,e.details)}}class oa extends Ms{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new oa(e.radius,e.detail)}}class pn extends Ms{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new pn(e.radius,e.detail)}}class qc extends Bt{constructor(e=[new Fe(0,-.5),new Fe(.5,0),new Fe(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=Ze(r,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],u=1/t,d=new N,h=new Fe,f=new N,g=new N,x=new N;let m=0,p=0;for(let w=0;w<=e.length-1;w++)switch(w){case 0:m=e[w+1].x-e[w].x,p=e[w+1].y-e[w].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[w+1].x-e[w].x,p=e[w+1].y-e[w].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let w=0;w<=t;w++){const b=i+w*u*r,M=Math.sin(b),C=Math.cos(b);for(let A=0;A<=e.length-1;A++){d.x=e[A].x*M,d.y=e[A].y,d.z=e[A].x*C,a.push(d.x,d.y,d.z),h.x=w/t,h.y=A/(e.length-1),o.push(h.x,h.y);const L=l[3*A+0]*M,D=l[3*A+1],E=l[3*A+0]*C;c.push(L,D,E)}}for(let w=0;w<t;w++)for(let b=0;b<e.length-1;b++){const M=b+w*e.length,C=M,A=M+e.length,L=M+e.length+1,D=M+1;s.push(C,A,D),s.push(L,D,A)}this.setIndex(s),this.setAttribute("position",new Je(a,3)),this.setAttribute("uv",new Je(o,2)),this.setAttribute("normal",new Je(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qc(e.points,e.segments,e.phiStart,e.phiLength)}}class Ti extends Ms{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ti(e.radius,e.detail)}}class So extends Bt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,h=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const w=p*h-a;for(let b=0;b<c;b++){const M=b*d-s;g.push(M,-w,0),x.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){const b=w+c*p,M=w+c*(p+1),C=w+1+c*(p+1),A=w+1+c*p;f.push(b,M,A),f.push(M,C,A)}this.setIndex(f),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new So(e.width,e.height,e.widthSegments,e.heightSegments)}}class Lr extends Bt{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],u=[];let d=e;const h=(t-e)/r,f=new N,g=new Fe;for(let x=0;x<=r;x++){for(let m=0;m<=i;m++){const p=s+m/i*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}d+=h}for(let x=0;x<r;x++){const m=x*(i+1);for(let p=0;p<i;p++){const w=p+m,b=w,M=w+i+1,C=w+i+2,A=w+1;o.push(b,M,A),o.push(M,C,A)}}this.setIndex(o),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(c,3)),this.setAttribute("uv",new Je(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class gt extends Bt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new N,h=new N,f=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){const w=[],b=p/i;let M=0;p===0&&a===0?M=.5/t:p===i&&l===Math.PI&&(M=-.5/t);for(let C=0;C<=t;C++){const A=C/t;d.x=-e*Math.cos(r+A*s)*Math.sin(a+b*o),d.y=e*Math.cos(a+b*o),d.z=e*Math.sin(r+A*s)*Math.sin(a+b*o),g.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),m.push(A+M,1-b),w.push(c++)}u.push(w)}for(let p=0;p<i;p++)for(let w=0;w<t;w++){const b=u[p][w+1],M=u[p][w],C=u[p+1][w],A=u[p+1][w+1];(p!==0||a>0)&&f.push(b,M,A),(p!==i-1||l<Math.PI)&&f.push(M,C,A)}this.setIndex(f),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $c extends Ms{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new $c(e.radius,e.detail)}}class bi extends Bt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],c=[],u=new N,d=new N,h=new N;for(let f=0;f<=i;f++)for(let g=0;g<=r;g++){const x=g/r*s,m=f/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(x),d.y=(e+t*Math.cos(m))*Math.sin(x),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),h.subVectors(d,u).normalize(),l.push(h.x,h.y,h.z),c.push(g/r),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=r;g++){const x=(r+1)*f+g-1,m=(r+1)*(f-1)+g-1,p=(r+1)*(f-1)+g,w=(r+1)*f+g;a.push(x,m,w),a.push(m,p,w)}this.setIndex(a),this.setAttribute("position",new Je(o,3)),this.setAttribute("normal",new Je(l,3)),this.setAttribute("uv",new Je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Pn extends Pr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dh,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class g0 extends Pr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _0 extends Pr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class $h extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class v0 extends $h{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ul=new ct,ud=new N,dd=new N;class x0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wc,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ud.setFromMatrixPosition(e.matrixWorld),t.position.copy(ud),dd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dd),t.updateMatrixWorld(),ul.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ul,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ul)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Yh extends zh{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class M0 extends x0{constructor(){super(new Yh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class y0 extends $h{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new M0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class S0 extends On{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const hd=new ct;class b0{constructor(e,t,i=0,r=1/0){this.ray=new zc(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Hc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return hd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hd),this}intersectObject(e,t=!0,i=[]){return pc(e,this,i,t),i.sort(fd),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)pc(e[r],this,i,t);return i.sort(fd),i}}function fd(n,e){return n.distance-e.distance}function pc(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)pc(s[a],e,t,!0)}}function pd(n,e,t,i){const r=E0(i);switch(t){case Ch:return n*e;case Uc:return n*e/r.components*r.byteLength;case Nc:return n*e/r.components*r.byteLength;case Lh:return n*e*2/r.components*r.byteLength;case Fc:return n*e*2/r.components*r.byteLength;case Ph:return n*e*3/r.components*r.byteLength;case Yn:return n*e*4/r.components*r.byteLength;case Oc:return n*e*4/r.components*r.byteLength;case Qa:case eo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case to:case no:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bl:case zl:return Math.max(n,16)*Math.max(e,8)/4;case Ol:case kl:return Math.max(n,8)*Math.max(e,8)/2;case Hl:case Gl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Vl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ql:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case $l:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case jl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Zl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Jl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ec:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case tc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case nc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ic:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case rc:case sc:case ac:return Math.ceil(n/4)*Math.ceil(e/4)*16;case oc:case lc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case cc:case uc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function E0(n){switch(n){case ai:case wh:return{byteLength:1,components:1};case Xs:case Th:case aa:return{byteLength:2,components:1};case Dc:case Ic:return{byteLength:2,components:4};case Mr:case Lc:case ni:return{byteLength:4,components:1};case Ah:case Rh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cc);function jh(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function w0(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,d[h]=x)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const x=d[f];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var T0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,A0=`#ifdef USE_ALPHAHASH
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
#endif`,R0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,C0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,L0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,D0=`#ifdef USE_AOMAP
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
#endif`,I0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,U0=`#ifdef USE_BATCHING
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
#endif`,N0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,F0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,O0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,B0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,k0=`#ifdef USE_IRIDESCENCE
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
#endif`,z0=`#ifdef USE_BUMPMAP
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
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Y0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,j0=`#define PI 3.141592653589793
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
} // validated`,K0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Z0=`vec3 transformedNormal = objectNormal;
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
#endif`,J0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Q0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ng="gl_FragColor = linearToOutputTexel( gl_FragColor );",ig=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rg=`#ifdef USE_ENVMAP
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
#endif`,sg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ag=`#ifdef USE_ENVMAP
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
#endif`,og=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lg=`#ifdef USE_ENVMAP
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
#endif`,cg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ug=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fg=`#ifdef USE_GRADIENTMAP
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
}`,pg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_g=`uniform bool receiveShadow;
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
#endif`,vg=`#ifdef USE_ENVMAP
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
#endif`,xg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bg=`PhysicalMaterial material;
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
#endif`,Eg=`struct PhysicalMaterial {
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
}`,wg=`
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
#endif`,Tg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ag=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ig=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ug=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ng=`#if defined( USE_POINTS_UV )
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
#endif`,Fg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Og=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hg=`#ifdef USE_MORPHTARGETS
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
#endif`,Gg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$g=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yg=`#ifdef USE_NORMALMAP
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
#endif`,jg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,e_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,t_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,n_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,i_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,r_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,s_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,a_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,o_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,l_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,u_=`float getShadowMask() {
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
}`,d_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,h_=`#ifdef USE_SKINNING
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
#endif`,f_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,p_=`#ifdef USE_SKINNING
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
#endif`,m_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,g_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,__=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,x_=`#ifdef USE_TRANSMISSION
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
#endif`,M_=`#ifdef USE_TRANSMISSION
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
#endif`,y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const w_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,T_=`uniform sampler2D t2D;
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
}`,A_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,C_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L_=`#include <common>
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
}`,D_=`#if DEPTH_PACKING == 3200
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
}`,I_=`#define DISTANCE
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
}`,U_=`#define DISTANCE
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
}`,N_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,F_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O_=`uniform float scale;
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
}`,B_=`uniform vec3 diffuse;
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
}`,k_=`#include <common>
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
}`,z_=`uniform vec3 diffuse;
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
}`,H_=`#define LAMBERT
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
}`,G_=`#define LAMBERT
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
}`,V_=`#define MATCAP
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
}`,W_=`#define MATCAP
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
}`,X_=`#define NORMAL
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
}`,q_=`#define NORMAL
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
}`,$_=`#define PHONG
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
}`,Y_=`#define PHONG
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
}`,j_=`#define STANDARD
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
}`,K_=`#define STANDARD
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
}`,Z_=`#define TOON
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
}`,J_=`#define TOON
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
}`,Q_=`uniform float size;
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
}`,ev=`uniform vec3 diffuse;
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
}`,tv=`#include <common>
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
}`,nv=`uniform vec3 color;
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
}`,iv=`uniform float rotation;
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
}`,rv=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:T0,alphahash_pars_fragment:A0,alphamap_fragment:R0,alphamap_pars_fragment:C0,alphatest_fragment:P0,alphatest_pars_fragment:L0,aomap_fragment:D0,aomap_pars_fragment:I0,batching_pars_vertex:U0,batching_vertex:N0,begin_vertex:F0,beginnormal_vertex:O0,bsdfs:B0,iridescence_fragment:k0,bumpmap_pars_fragment:z0,clipping_planes_fragment:H0,clipping_planes_pars_fragment:G0,clipping_planes_pars_vertex:V0,clipping_planes_vertex:W0,color_fragment:X0,color_pars_fragment:q0,color_pars_vertex:$0,color_vertex:Y0,common:j0,cube_uv_reflection_fragment:K0,defaultnormal_vertex:Z0,displacementmap_pars_vertex:J0,displacementmap_vertex:Q0,emissivemap_fragment:eg,emissivemap_pars_fragment:tg,colorspace_fragment:ng,colorspace_pars_fragment:ig,envmap_fragment:rg,envmap_common_pars_fragment:sg,envmap_pars_fragment:ag,envmap_pars_vertex:og,envmap_physical_pars_fragment:vg,envmap_vertex:lg,fog_vertex:cg,fog_pars_vertex:ug,fog_fragment:dg,fog_pars_fragment:hg,gradientmap_pars_fragment:fg,lightmap_pars_fragment:pg,lights_lambert_fragment:mg,lights_lambert_pars_fragment:gg,lights_pars_begin:_g,lights_toon_fragment:xg,lights_toon_pars_fragment:Mg,lights_phong_fragment:yg,lights_phong_pars_fragment:Sg,lights_physical_fragment:bg,lights_physical_pars_fragment:Eg,lights_fragment_begin:wg,lights_fragment_maps:Tg,lights_fragment_end:Ag,logdepthbuf_fragment:Rg,logdepthbuf_pars_fragment:Cg,logdepthbuf_pars_vertex:Pg,logdepthbuf_vertex:Lg,map_fragment:Dg,map_pars_fragment:Ig,map_particle_fragment:Ug,map_particle_pars_fragment:Ng,metalnessmap_fragment:Fg,metalnessmap_pars_fragment:Og,morphinstance_vertex:Bg,morphcolor_vertex:kg,morphnormal_vertex:zg,morphtarget_pars_vertex:Hg,morphtarget_vertex:Gg,normal_fragment_begin:Vg,normal_fragment_maps:Wg,normal_pars_fragment:Xg,normal_pars_vertex:qg,normal_vertex:$g,normalmap_pars_fragment:Yg,clearcoat_normal_fragment_begin:jg,clearcoat_normal_fragment_maps:Kg,clearcoat_pars_fragment:Zg,iridescence_pars_fragment:Jg,opaque_fragment:Qg,packing:e_,premultiplied_alpha_fragment:t_,project_vertex:n_,dithering_fragment:i_,dithering_pars_fragment:r_,roughnessmap_fragment:s_,roughnessmap_pars_fragment:a_,shadowmap_pars_fragment:o_,shadowmap_pars_vertex:l_,shadowmap_vertex:c_,shadowmask_pars_fragment:u_,skinbase_vertex:d_,skinning_pars_vertex:h_,skinning_vertex:f_,skinnormal_vertex:p_,specularmap_fragment:m_,specularmap_pars_fragment:g_,tonemapping_fragment:__,tonemapping_pars_fragment:v_,transmission_fragment:x_,transmission_pars_fragment:M_,uv_pars_fragment:y_,uv_pars_vertex:S_,uv_vertex:b_,worldpos_vertex:E_,background_vert:w_,background_frag:T_,backgroundCube_vert:A_,backgroundCube_frag:R_,cube_vert:C_,cube_frag:P_,depth_vert:L_,depth_frag:D_,distanceRGBA_vert:I_,distanceRGBA_frag:U_,equirect_vert:N_,equirect_frag:F_,linedashed_vert:O_,linedashed_frag:B_,meshbasic_vert:k_,meshbasic_frag:z_,meshlambert_vert:H_,meshlambert_frag:G_,meshmatcap_vert:V_,meshmatcap_frag:W_,meshnormal_vert:X_,meshnormal_frag:q_,meshphong_vert:$_,meshphong_frag:Y_,meshphysical_vert:j_,meshphysical_frag:K_,meshtoon_vert:Z_,meshtoon_frag:J_,points_vert:Q_,points_frag:ev,shadow_vert:tv,shadow_frag:nv,sprite_vert:iv,sprite_frag:rv},le={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},ei={basic:{uniforms:dn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:dn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Re(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:dn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:dn([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:dn([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Re(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:dn([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:dn([le.points,le.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:dn([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:dn([le.common,le.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:dn([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:dn([le.sprite,le.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:dn([le.common,le.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:dn([le.lights,le.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};ei.physical={uniforms:dn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Ba={r:0,b:0,g:0},ir=new oi,sv=new ct;function av(n,e,t,i,r,s,a){const o=new Re(0);let l=s===!0?0:1,c,u,d=null,h=0,f=null;function g(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function x(b){let M=!1;const C=g(b);C===null?p(o,l):C&&C.isColor&&(p(C,1),M=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,M){const C=g(M);C&&(C.isCubeTexture||C.mapping===yo)?(u===void 0&&(u=new ee(new Vi(1,1,1),new wi({name:"BackgroundCubeMaterial",uniforms:ps(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,L,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ir.copy(M.backgroundRotation),ir.x*=-1,ir.y*=-1,ir.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ir.y*=-1,ir.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(sv.makeRotationFromEuler(ir)),u.material.toneMapped=ot.getTransfer(C.colorSpace)!==mt,(d!==C||h!==C.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,d=C,h=C.version,f=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new ee(new So(2,2),new wi({name:"BackgroundMaterial",uniforms:ps(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ot.getTransfer(C.colorSpace)!==mt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||h!==C.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=C,h=C.version,f=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,M){b.getRGB(Ba,kh(n)),i.buffers.color.setClear(Ba.r,Ba.g,Ba.b,M,a)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,M=1){o.set(b),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:x,addToRenderList:m,dispose:w}}function ov(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(S,I,B,G,X){let Y=!1;const q=d(G,B,I);s!==q&&(s=q,c(s.object)),Y=f(S,G,B,X),Y&&g(S,G,B,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,M(S,I,B,G),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function d(S,I,B){const G=B.wireframe===!0;let X=i[S.id];X===void 0&&(X={},i[S.id]=X);let Y=X[I.id];Y===void 0&&(Y={},X[I.id]=Y);let q=Y[G];return q===void 0&&(q=h(l()),Y[G]=q),q}function h(S){const I=[],B=[],G=[];for(let X=0;X<t;X++)I[X]=0,B[X]=0,G[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:G,object:S,attributes:{},index:null}}function f(S,I,B,G){const X=s.attributes,Y=I.attributes;let q=0;const se=B.getAttributes();for(const V in se)if(se[V].location>=0){const me=X[V];let Pe=Y[V];if(Pe===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(Pe=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(Pe=S.instanceColor)),me===void 0||me.attribute!==Pe||Pe&&me.data!==Pe.data)return!0;q++}return s.attributesNum!==q||s.index!==G}function g(S,I,B,G){const X={},Y=I.attributes;let q=0;const se=B.getAttributes();for(const V in se)if(se[V].location>=0){let me=Y[V];me===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(me=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(me=S.instanceColor));const Pe={};Pe.attribute=me,me&&me.data&&(Pe.data=me.data),X[V]=Pe,q++}s.attributes=X,s.attributesNum=q,s.index=G}function x(){const S=s.newAttributes;for(let I=0,B=S.length;I<B;I++)S[I]=0}function m(S){p(S,0)}function p(S,I){const B=s.newAttributes,G=s.enabledAttributes,X=s.attributeDivisors;B[S]=1,G[S]===0&&(n.enableVertexAttribArray(S),G[S]=1),X[S]!==I&&(n.vertexAttribDivisor(S,I),X[S]=I)}function w(){const S=s.newAttributes,I=s.enabledAttributes;for(let B=0,G=I.length;B<G;B++)I[B]!==S[B]&&(n.disableVertexAttribArray(B),I[B]=0)}function b(S,I,B,G,X,Y,q){q===!0?n.vertexAttribIPointer(S,I,B,X,Y):n.vertexAttribPointer(S,I,B,G,X,Y)}function M(S,I,B,G){x();const X=G.attributes,Y=B.getAttributes(),q=I.defaultAttributeValues;for(const se in Y){const V=Y[se];if(V.location>=0){let ce=X[se];if(ce===void 0&&(se==="instanceMatrix"&&S.instanceMatrix&&(ce=S.instanceMatrix),se==="instanceColor"&&S.instanceColor&&(ce=S.instanceColor)),ce!==void 0){const me=ce.normalized,Pe=ce.itemSize,Ke=e.get(ce);if(Ke===void 0)continue;const Mt=Ke.buffer,Tt=Ke.type,ut=Ke.bytesPerElement,j=Tt===n.INT||Tt===n.UNSIGNED_INT||ce.gpuType===Lc;if(ce.isInterleavedBufferAttribute){const J=ce.data,ve=J.stride,ze=ce.offset;if(J.isInstancedInterleavedBuffer){for(let Ce=0;Ce<V.locationSize;Ce++)p(V.location+Ce,J.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Ce=0;Ce<V.locationSize;Ce++)m(V.location+Ce);n.bindBuffer(n.ARRAY_BUFFER,Mt);for(let Ce=0;Ce<V.locationSize;Ce++)b(V.location+Ce,Pe/V.locationSize,Tt,me,ve*ut,(ze+Pe/V.locationSize*Ce)*ut,j)}else{if(ce.isInstancedBufferAttribute){for(let J=0;J<V.locationSize;J++)p(V.location+J,ce.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let J=0;J<V.locationSize;J++)m(V.location+J);n.bindBuffer(n.ARRAY_BUFFER,Mt);for(let J=0;J<V.locationSize;J++)b(V.location+J,Pe/V.locationSize,Tt,me,Pe*ut,Pe/V.locationSize*J*ut,j)}}else if(q!==void 0){const me=q[se];if(me!==void 0)switch(me.length){case 2:n.vertexAttrib2fv(V.location,me);break;case 3:n.vertexAttrib3fv(V.location,me);break;case 4:n.vertexAttrib4fv(V.location,me);break;default:n.vertexAttrib1fv(V.location,me)}}}}w()}function C(){D();for(const S in i){const I=i[S];for(const B in I){const G=I[B];for(const X in G)u(G[X].object),delete G[X];delete I[B]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const I=i[S.id];for(const B in I){const G=I[B];for(const X in G)u(G[X].object),delete G[X];delete I[B]}delete i[S.id]}function L(S){for(const I in i){const B=i[I];if(B[S.id]===void 0)continue;const G=B[S.id];for(const X in G)u(G[X].object),delete G[X];delete B[S.id]}}function D(){E(),a=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:D,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:m,disableUnusedAttributes:w}}function lv(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];t.update(f,i,1)}function l(c,u,d,h){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x]*h[x];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function cv(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(L){return!(L!==Yn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const D=L===aa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==ai&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==ni&&!D)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:C,maxSamples:A}}function uv(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new or,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||r;return r=h,i=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const w=s?0:i,b=w*4;let M=p.clippingState||null;l.value=M,M=u(g,h,b,f);for(let C=0;C!==b;++C)M[C]=t[C];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=f+x*4,w=h.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,M=f;b!==x;++b,M+=4)a.copy(d[b]).applyMatrix4(w,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function dv(n){let e=new WeakMap;function t(a,o){return o===Il?a.mapping=ds:o===Ul&&(a.mapping=hs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Il||o===Ul)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new r0(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const is=4,md=[.125,.215,.35,.446,.526,.582],ur=20,dl=new Yh,gd=new Re;let hl=null,fl=0,pl=0,ml=!1;const lr=(1+Math.sqrt(5))/2,Qr=1/lr,_d=[new N(-lr,Qr,0),new N(lr,Qr,0),new N(-Qr,0,lr),new N(Qr,0,lr),new N(0,lr,-Qr),new N(0,lr,Qr),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],hv=new N;class vd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=hv}=s;hl=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),pl=this._renderer.getActiveMipmapLevel(),ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Md(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hl,fl,pl),this._renderer.xr.enabled=ml,e.scissorTest=!1,ka(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ds||e.mapping===hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hl=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),pl=this._renderer.getActiveMipmapLevel(),ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:aa,format:Yn,colorSpace:fs,depthBuffer:!1},r=xd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xd(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fv(s)),this._blurMaterial=pv(s,e,t)}return r}_compileMaterial(e){const t=new ee(this._lodPlanes[0],e);this._renderer.compile(t,dl)}_sceneToCubeUV(e,t,i,r,s){const l=new On(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(gd),d.toneMapping=ki,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const x=new Pt({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),m=new ee(new Vi,x);let p=!1;const w=e.background;w?w.isColor&&(x.color.copy(w),e.background=null,p=!0):(x.color.copy(gd),p=!0);for(let b=0;b<6;b++){const M=b%3;M===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[b],s.y,s.z)):M===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[b]));const C=this._cubeSize;ka(r,M*C,b>2?C:0,C,C),d.setRenderTarget(r),p&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=w}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ds||e.mapping===hs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Md());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new ee(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ka(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,dl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=_d[(r-s-1)%_d.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new ee(this._lodPlanes[r],c),h=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*ur-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):ur;m>ur&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ur}`);const p=[];let w=0;for(let L=0;L<ur;++L){const D=L/x,E=Math.exp(-D*D/2);p.push(E),L===0?w+=E:L<m&&(w+=2*E)}for(let L=0;L<p.length;L++)p[L]=p[L]/w;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-i;const M=this._sizeLods[r],C=3*M*(r>b-is?r-b+is:0),A=4*(this._cubeSize-M);ka(t,C,A,3*M,2*M),l.setRenderTarget(t),l.render(d,dl)}}function fv(n){const e=[],t=[],i=[];let r=n;const s=n-is+1+md.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-is?l=md[a-n+is-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,x=3,m=2,p=1,w=new Float32Array(x*g*f),b=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let A=0;A<f;A++){const L=A%3*2/3-1,D=A>2?0:-1,E=[L,D,0,L+2/3,D,0,L+2/3,D+1,0,L,D,0,L+2/3,D+1,0,L,D+1,0];w.set(E,x*g*A),b.set(h,m*g*A);const S=[A,A,A,A,A,A];M.set(S,p*g*A)}const C=new Bt;C.setAttribute("position",new Mn(w,x)),C.setAttribute("uv",new Mn(b,m)),C.setAttribute("faceIndex",new Mn(M,p)),e.push(C),r>is&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function xd(n,e,t){const i=new yr(n,e,t);return i.texture.mapping=yo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ka(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function pv(n,e,t){const i=new Float32Array(ur),r=new N(0,1,0);return new wi({name:"SphericalGaussianBlur",defines:{n:ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Yc(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Md(){return new wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yc(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function yd(){return new wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Yc(){return`

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
	`}function mv(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Il||l===Ul,u=l===ds||l===hs;if(c||u){let d=e.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new vd(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new vd(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function gv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ks("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function _v(n,e,t,i){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)e.update(h[f],n.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,g=d.attributes.position;let x=0;if(f!==null){const w=f.array;x=f.version;for(let b=0,M=w.length;b<M;b+=3){const C=w[b+0],A=w[b+1],L=w[b+2];h.push(C,A,A,L,L,C)}}else if(g!==void 0){const w=g.array;x=g.version;for(let b=0,M=w.length/3-1;b<M;b+=3){const C=b+0,A=b+1,L=b+2;h.push(C,A,A,L,L,C)}}else return;const m=new(Uh(h)?Bh:Oh)(h,1);m.version=x;const p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function vv(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,f){n.drawElements(i,f,s,h*a),t.update(f,i,1)}function c(h,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,h*a,g),t.update(f,i,g))}function u(h,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function d(h,f,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,h,0,x,0,g);let p=0;for(let w=0;w<g;w++)p+=f[w]*x[w];t.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function xv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Mv(n,e,t){const i=new WeakMap,r=new Ut;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let E=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let b=0;f===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let M=o.attributes.position.count*b,C=1;M>e.maxTextureSize&&(C=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const A=new Float32Array(M*C*4*d),L=new Nh(A,M,C,d);L.type=ni,L.needsUpdate=!0;const D=b*4;for(let S=0;S<d;S++){const I=m[S],B=p[S],G=w[S],X=M*C*4*S;for(let Y=0;Y<I.count;Y++){const q=Y*D;f===!0&&(r.fromBufferAttribute(I,Y),A[X+q+0]=r.x,A[X+q+1]=r.y,A[X+q+2]=r.z,A[X+q+3]=0),g===!0&&(r.fromBufferAttribute(B,Y),A[X+q+4]=r.x,A[X+q+5]=r.y,A[X+q+6]=r.z,A[X+q+7]=0),x===!0&&(r.fromBufferAttribute(G,Y),A[X+q+8]=r.x,A[X+q+9]=r.y,A[X+q+10]=r.z,A[X+q+11]=G.itemSize===4?r.w:1)}}h={count:d,texture:L,size:new Fe(M,C)},i.set(o,h),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function yv(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Kh=new sn,Sd=new Xh(1,1),Zh=new Nh,Jh=new Hm,Qh=new Hh,bd=[],Ed=[],wd=new Float32Array(16),Td=new Float32Array(9),Ad=new Float32Array(4);function ys(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=bd[r];if(s===void 0&&(s=new Float32Array(r),bd[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function qt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function bo(n,e){let t=Ed[e];t===void 0&&(t=new Int32Array(e),Ed[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Sv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function bv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2fv(this.addr,e),qt(t,e)}}function Ev(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;n.uniform3fv(this.addr,e),qt(t,e)}}function wv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4fv(this.addr,e),qt(t,e)}}function Tv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;Ad.set(i),n.uniformMatrix2fv(this.addr,!1,Ad),qt(t,i)}}function Av(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;Td.set(i),n.uniformMatrix3fv(this.addr,!1,Td),qt(t,i)}}function Rv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;wd.set(i),n.uniformMatrix4fv(this.addr,!1,wd),qt(t,i)}}function Cv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Pv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2iv(this.addr,e),qt(t,e)}}function Lv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3iv(this.addr,e),qt(t,e)}}function Dv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4iv(this.addr,e),qt(t,e)}}function Iv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Uv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2uiv(this.addr,e),qt(t,e)}}function Nv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3uiv(this.addr,e),qt(t,e)}}function Fv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4uiv(this.addr,e),qt(t,e)}}function Ov(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Sd.compareFunction=Ih,s=Sd):s=Kh,t.setTexture2D(e||s,r)}function Bv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Jh,r)}function kv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Qh,r)}function zv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Zh,r)}function Hv(n){switch(n){case 5126:return Sv;case 35664:return bv;case 35665:return Ev;case 35666:return wv;case 35674:return Tv;case 35675:return Av;case 35676:return Rv;case 5124:case 35670:return Cv;case 35667:case 35671:return Pv;case 35668:case 35672:return Lv;case 35669:case 35673:return Dv;case 5125:return Iv;case 36294:return Uv;case 36295:return Nv;case 36296:return Fv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ov;case 35679:case 36299:case 36307:return Bv;case 35680:case 36300:case 36308:case 36293:return kv;case 36289:case 36303:case 36311:case 36292:return zv}}function Gv(n,e){n.uniform1fv(this.addr,e)}function Vv(n,e){const t=ys(e,this.size,2);n.uniform2fv(this.addr,t)}function Wv(n,e){const t=ys(e,this.size,3);n.uniform3fv(this.addr,t)}function Xv(n,e){const t=ys(e,this.size,4);n.uniform4fv(this.addr,t)}function qv(n,e){const t=ys(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function $v(n,e){const t=ys(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Yv(n,e){const t=ys(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function jv(n,e){n.uniform1iv(this.addr,e)}function Kv(n,e){n.uniform2iv(this.addr,e)}function Zv(n,e){n.uniform3iv(this.addr,e)}function Jv(n,e){n.uniform4iv(this.addr,e)}function Qv(n,e){n.uniform1uiv(this.addr,e)}function ex(n,e){n.uniform2uiv(this.addr,e)}function tx(n,e){n.uniform3uiv(this.addr,e)}function nx(n,e){n.uniform4uiv(this.addr,e)}function ix(n,e,t){const i=this.cache,r=e.length,s=bo(t,r);Xt(i,s)||(n.uniform1iv(this.addr,s),qt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Kh,s[a])}function rx(n,e,t){const i=this.cache,r=e.length,s=bo(t,r);Xt(i,s)||(n.uniform1iv(this.addr,s),qt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Jh,s[a])}function sx(n,e,t){const i=this.cache,r=e.length,s=bo(t,r);Xt(i,s)||(n.uniform1iv(this.addr,s),qt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Qh,s[a])}function ax(n,e,t){const i=this.cache,r=e.length,s=bo(t,r);Xt(i,s)||(n.uniform1iv(this.addr,s),qt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Zh,s[a])}function ox(n){switch(n){case 5126:return Gv;case 35664:return Vv;case 35665:return Wv;case 35666:return Xv;case 35674:return qv;case 35675:return $v;case 35676:return Yv;case 5124:case 35670:return jv;case 35667:case 35671:return Kv;case 35668:case 35672:return Zv;case 35669:case 35673:return Jv;case 5125:return Qv;case 36294:return ex;case 36295:return tx;case 36296:return nx;case 35678:case 36198:case 36298:case 36306:case 35682:return ix;case 35679:case 36299:case 36307:return rx;case 35680:case 36300:case 36308:case 36293:return sx;case 36289:case 36303:case 36311:case 36292:return ax}}class lx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Hv(t.type)}}class cx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ox(t.type)}}class ux{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const gl=/(\w+)(\])?(\[|\.)?/g;function Rd(n,e){n.seq.push(e),n.map[e.id]=e}function dx(n,e,t){const i=n.name,r=i.length;for(gl.lastIndex=0;;){const s=gl.exec(i),a=gl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Rd(t,c===void 0?new lx(o,n,e):new cx(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new ux(o),Rd(t,d)),t=d}}}class io{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);dx(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Cd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const hx=37297;let fx=0;function px(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Pd=new Xe;function mx(n){ot._getMatrix(Pd,ot.workingColorSpace,n);const e=`mat3( ${Pd.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(n)){case co:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ld(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+px(n.getShaderSource(e),o)}else return s}function gx(n,e){const t=mx(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function _x(n,e){let t;switch(e){case em:t="Linear";break;case tm:t="Reinhard";break;case nm:t="Cineon";break;case im:t="ACESFilmic";break;case sm:t="AgX";break;case am:t="Neutral";break;case rm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const za=new N;function vx(){ot.getLuminanceCoefficients(za);const n=za.x.toFixed(4),e=za.y.toFixed(4),t=za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Us).join(`
`)}function Mx(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function yx(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Us(n){return n!==""}function Dd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Id(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Sx=/^[ \t]*#include +<([\w\d./]+)>/gm;function mc(n){return n.replace(Sx,Ex)}const bx=new Map;function Ex(n,e){let t=Ye[e];if(t===void 0){const i=bx.get(e);if(i!==void 0)t=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return mc(t)}const wx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ud(n){return n.replace(wx,Tx)}function Tx(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Nd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Ax(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Pc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ip?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===_i&&(e="SHADOWMAP_TYPE_VSM"),e}function Rx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ds:case hs:e="ENVMAP_TYPE_CUBE";break;case yo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Cx(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===hs&&(e="ENVMAP_MODE_REFRACTION"),e}function Px(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case bh:e="ENVMAP_BLENDING_MULTIPLY";break;case Jp:e="ENVMAP_BLENDING_MIX";break;case Qp:e="ENVMAP_BLENDING_ADD";break}return e}function Lx(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Dx(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Ax(t),c=Rx(t),u=Cx(t),d=Px(t),h=Lx(t),f=xx(t),g=Mx(s),x=r.createProgram();let m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Us).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Us).join(`
`),p.length>0&&(p+=`
`)):(m=[Nd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),p=[Nd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ki?"#define TONE_MAPPING":"",t.toneMapping!==ki?Ye.tonemapping_pars_fragment:"",t.toneMapping!==ki?_x("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,gx("linearToOutputTexel",t.outputColorSpace),vx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Us).join(`
`)),a=mc(a),a=Dd(a,t),a=Id(a,t),o=mc(o),o=Dd(o,t),o=Id(o,t),a=Ud(a),o=Ud(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=w+m+a,M=w+p+o,C=Cd(r,r.VERTEX_SHADER,b),A=Cd(r,r.FRAGMENT_SHADER,M);r.attachShader(x,C),r.attachShader(x,A),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function L(I){if(n.debug.checkShaderErrors){const B=r.getProgramInfoLog(x)||"",G=r.getShaderInfoLog(C)||"",X=r.getShaderInfoLog(A)||"",Y=B.trim(),q=G.trim(),se=X.trim();let V=!0,ce=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,C,A);else{const me=Ld(r,C,"vertex"),Pe=Ld(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+Y+`
`+me+`
`+Pe)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(q===""||se==="")&&(ce=!1);ce&&(I.diagnostics={runnable:V,programLog:Y,vertexShader:{log:q,prefix:m},fragmentShader:{log:se,prefix:p}})}r.deleteShader(C),r.deleteShader(A),D=new io(r,x),E=yx(r,x)}let D;this.getUniforms=function(){return D===void 0&&L(this),D};let E;this.getAttributes=function(){return E===void 0&&L(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,hx)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=A,this}let Ix=0;class Ux{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Nx(e),t.set(e,i)),i}}class Nx{constructor(e){this.id=Ix++,this.code=e,this.usedTimes=0}}function Fx(n,e,t,i,r,s,a){const o=new Hc,l=new Ux,c=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,S,I,B,G){const X=B.fog,Y=G.geometry,q=E.isMeshStandardMaterial?B.environment:null,se=(E.isMeshStandardMaterial?t:e).get(E.envMap||q),V=se&&se.mapping===yo?se.image.height:null,ce=g[E.type];E.precision!==null&&(f=r.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const me=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Pe=me!==void 0?me.length:0;let Ke=0;Y.morphAttributes.position!==void 0&&(Ke=1),Y.morphAttributes.normal!==void 0&&(Ke=2),Y.morphAttributes.color!==void 0&&(Ke=3);let Mt,Tt,ut,j;if(ce){const dt=ei[ce];Mt=dt.vertexShader,Tt=dt.fragmentShader}else Mt=E.vertexShader,Tt=E.fragmentShader,l.update(E),ut=l.getVertexShaderID(E),j=l.getFragmentShaderID(E);const J=n.getRenderTarget(),ve=n.state.buffers.depth.getReversed(),ze=G.isInstancedMesh===!0,Ce=G.isBatchedMesh===!0,it=!!E.map,en=!!E.matcap,P=!!se,At=!!E.aoMap,Ge=!!E.lightMap,Be=!!E.bumpMap,ye=!!E.normalMap,Rt=!!E.displacementMap,Se=!!E.emissiveMap,$e=!!E.metalnessMap,Yt=!!E.roughnessMap,Nt=E.anisotropy>0,R=E.clearcoat>0,v=E.dispersion>0,k=E.iridescence>0,$=E.sheen>0,Z=E.transmission>0,W=Nt&&!!E.anisotropyMap,Ae=R&&!!E.clearcoatMap,ae=R&&!!E.clearcoatNormalMap,be=R&&!!E.clearcoatRoughnessMap,Ee=k&&!!E.iridescenceMap,ie=k&&!!E.iridescenceThicknessMap,fe=$&&!!E.sheenColorMap,Oe=$&&!!E.sheenRoughnessMap,we=!!E.specularMap,ue=!!E.specularColorMap,We=!!E.specularIntensityMap,U=Z&&!!E.transmissionMap,re=Z&&!!E.thicknessMap,oe=!!E.gradientMap,_e=!!E.alphaMap,te=E.alphaTest>0,K=!!E.alphaHash,Me=!!E.extensions;let He=ki;E.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(He=n.toneMapping);const yt={shaderID:ce,shaderType:E.type,shaderName:E.name,vertexShader:Mt,fragmentShader:Tt,defines:E.defines,customVertexShaderID:ut,customFragmentShaderID:j,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Ce,batchingColor:Ce&&G._colorsTexture!==null,instancing:ze,instancingColor:ze&&G.instanceColor!==null,instancingMorph:ze&&G.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:J===null?n.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:fs,alphaToCoverage:!!E.alphaToCoverage,map:it,matcap:en,envMap:P,envMapMode:P&&se.mapping,envMapCubeUVHeight:V,aoMap:At,lightMap:Ge,bumpMap:Be,normalMap:ye,displacementMap:h&&Rt,emissiveMap:Se,normalMapObjectSpace:ye&&E.normalMapType===um,normalMapTangentSpace:ye&&E.normalMapType===Dh,metalnessMap:$e,roughnessMap:Yt,anisotropy:Nt,anisotropyMap:W,clearcoat:R,clearcoatMap:Ae,clearcoatNormalMap:ae,clearcoatRoughnessMap:be,dispersion:v,iridescence:k,iridescenceMap:Ee,iridescenceThicknessMap:ie,sheen:$,sheenColorMap:fe,sheenRoughnessMap:Oe,specularMap:we,specularColorMap:ue,specularIntensityMap:We,transmission:Z,transmissionMap:U,thicknessMap:re,gradientMap:oe,opaque:E.transparent===!1&&E.blending===os&&E.alphaToCoverage===!1,alphaMap:_e,alphaTest:te,alphaHash:K,combine:E.combine,mapUv:it&&x(E.map.channel),aoMapUv:At&&x(E.aoMap.channel),lightMapUv:Ge&&x(E.lightMap.channel),bumpMapUv:Be&&x(E.bumpMap.channel),normalMapUv:ye&&x(E.normalMap.channel),displacementMapUv:Rt&&x(E.displacementMap.channel),emissiveMapUv:Se&&x(E.emissiveMap.channel),metalnessMapUv:$e&&x(E.metalnessMap.channel),roughnessMapUv:Yt&&x(E.roughnessMap.channel),anisotropyMapUv:W&&x(E.anisotropyMap.channel),clearcoatMapUv:Ae&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:ae&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&x(E.sheenRoughnessMap.channel),specularMapUv:we&&x(E.specularMap.channel),specularColorMapUv:ue&&x(E.specularColorMap.channel),specularIntensityMapUv:We&&x(E.specularIntensityMap.channel),transmissionMapUv:U&&x(E.transmissionMap.channel),thicknessMapUv:re&&x(E.thicknessMap.channel),alphaMapUv:_e&&x(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(ye||Nt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!Y.attributes.uv&&(it||_e),fog:!!X,useFog:E.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ve,skinning:G.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:Ke,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:He,decodeVideoTexture:it&&E.map.isVideoTexture===!0&&ot.getTransfer(E.map.colorSpace)===mt,decodeVideoTextureEmissive:Se&&E.emissiveMap.isVideoTexture===!0&&ot.getTransfer(E.emissiveMap.colorSpace)===mt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Qt,flipSided:E.side===fn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Me&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&E.extensions.multiDraw===!0||Ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return yt.vertexUv1s=c.has(1),yt.vertexUv2s=c.has(2),yt.vertexUv3s=c.has(3),c.clear(),yt}function p(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const I in E.defines)S.push(I),S.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(w(S,E),b(S,E),S.push(n.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function w(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function b(E,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),E.push(o.mask)}function M(E){const S=g[E.type];let I;if(S){const B=ei[S];I=e0.clone(B.uniforms)}else I=E.uniforms;return I}function C(E,S){let I;for(let B=0,G=u.length;B<G;B++){const X=u[B];if(X.cacheKey===S){I=X,++I.usedTimes;break}}return I===void 0&&(I=new Dx(n,S,E,s),u.push(I)),I}function A(E){if(--E.usedTimes===0){const S=u.indexOf(E);u[S]=u[u.length-1],u.pop(),E.destroy()}}function L(E){l.remove(E)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:C,releaseProgram:A,releaseShaderCache:L,programs:u,dispose:D}}function Ox(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Bx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Fd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Od(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,h,f,g,x,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=x,p.group=m),e++,p}function o(d,h,f,g,x,m){const p=a(d,h,f,g,x,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function l(d,h,f,g,x,m){const p=a(d,h,f,g,x,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function c(d,h){t.length>1&&t.sort(d||Bx),i.length>1&&i.sort(h||Fd),r.length>1&&r.sort(h||Fd)}function u(){for(let d=e,h=n.length;d<h;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function kx(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Od,n.set(i,[a])):r>=s.length?(a=new Od,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function zx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Re};break;case"SpotLight":t={position:new N,direction:new N,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function Hx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Gx=0;function Vx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Wx(n){const e=new zx,t=Hx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const r=new N,s=new ct,a=new ct;function o(c){let u=0,d=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,w=0,b=0,M=0,C=0,A=0,L=0;c.sort(Vx);for(let E=0,S=c.length;E<S;E++){const I=c[E],B=I.color,G=I.intensity,X=I.distance,Y=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=B.r*G,d+=B.g*G,h+=B.b*G;else if(I.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(I.sh.coefficients[q],G);L++}else if(I.isDirectionalLight){const q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const se=I.shadow,V=t.get(I);V.shadowIntensity=se.intensity,V.shadowBias=se.bias,V.shadowNormalBias=se.normalBias,V.shadowRadius=se.radius,V.shadowMapSize=se.mapSize,i.directionalShadow[f]=V,i.directionalShadowMap[f]=Y,i.directionalShadowMatrix[f]=I.shadow.matrix,w++}i.directional[f]=q,f++}else if(I.isSpotLight){const q=e.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(B).multiplyScalar(G),q.distance=X,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,i.spot[x]=q;const se=I.shadow;if(I.map&&(i.spotLightMap[C]=I.map,C++,se.updateMatrices(I),I.castShadow&&A++),i.spotLightMatrix[x]=se.matrix,I.castShadow){const V=t.get(I);V.shadowIntensity=se.intensity,V.shadowBias=se.bias,V.shadowNormalBias=se.normalBias,V.shadowRadius=se.radius,V.shadowMapSize=se.mapSize,i.spotShadow[x]=V,i.spotShadowMap[x]=Y,M++}x++}else if(I.isRectAreaLight){const q=e.get(I);q.color.copy(B).multiplyScalar(G),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=q,m++}else if(I.isPointLight){const q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){const se=I.shadow,V=t.get(I);V.shadowIntensity=se.intensity,V.shadowBias=se.bias,V.shadowNormalBias=se.normalBias,V.shadowRadius=se.radius,V.shadowMapSize=se.mapSize,V.shadowCameraNear=se.camera.near,V.shadowCameraFar=se.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=I.shadow.matrix,b++}i.point[g]=q,g++}else if(I.isHemisphereLight){const q=e.get(I);q.skyColor.copy(I.color).multiplyScalar(G),q.groundColor.copy(I.groundColor).multiplyScalar(G),i.hemi[p]=q,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const D=i.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==w||D.numPointShadows!==b||D.numSpotShadows!==M||D.numSpotMaps!==C||D.numLightProbes!==L)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=M+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=L,D.directionalLength=f,D.pointLength=g,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=w,D.numPointShadows=b,D.numSpotShadows=M,D.numSpotMaps=C,D.numLightProbes=L,i.version=Gx++)}function l(c,u){let d=0,h=0,f=0,g=0,x=0;const m=u.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){const b=c[p];if(b.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(b.isSpotLight){const M=i.spot[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(b.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),h++}else if(b.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function Bd(n){const e=new Wx(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Xx(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Bd(n),e.set(r,[o])):s>=a.length?(o=new Bd(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const qx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$x=`uniform sampler2D shadow_pass;
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
}`;function Yx(n,e,t){let i=new Wc;const r=new Fe,s=new Fe,a=new Ut,o=new g0({depthPacking:cm}),l=new _0,c={},u=t.maxTextureSize,d={[Gi]:fn,[fn]:Gi,[Qt]:Qt},h=new wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:qx,fragmentShader:$x}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new Bt;g.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ee(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pc;let p=this.type;this.render=function(A,L,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=n.getRenderTarget(),S=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Bi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const G=p!==_i&&this.type===_i,X=p===_i&&this.type!==_i;for(let Y=0,q=A.length;Y<q;Y++){const se=A[Y],V=se.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const ce=V.getFrameExtents();if(r.multiply(ce),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ce.x),r.x=s.x*ce.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ce.y),r.y=s.y*ce.y,V.mapSize.y=s.y)),V.map===null||G===!0||X===!0){const Pe=this.type!==_i?{minFilter:Rn,magFilter:Rn}:{};V.map!==null&&V.map.dispose(),V.map=new yr(r.x,r.y,Pe),V.map.texture.name=se.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const me=V.getViewportCount();for(let Pe=0;Pe<me;Pe++){const Ke=V.getViewport(Pe);a.set(s.x*Ke.x,s.y*Ke.y,s.x*Ke.z,s.y*Ke.w),B.viewport(a),V.updateMatrices(se,Pe),i=V.getFrustum(),M(L,D,V.camera,se,this.type)}V.isPointLightShadow!==!0&&this.type===_i&&w(V,D),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,S,I)};function w(A,L){const D=e.update(x);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new yr(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(L,null,D,h,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(L,null,D,f,x,null)}function b(A,L,D,E){let S=null;const I=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)S=I;else if(S=D.isPointLight===!0?l:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const B=S.uuid,G=L.uuid;let X=c[B];X===void 0&&(X={},c[B]=X);let Y=X[G];Y===void 0&&(Y=S.clone(),X[G]=Y,L.addEventListener("dispose",C)),S=Y}if(S.visible=L.visible,S.wireframe=L.wireframe,E===_i?S.side=L.shadowSide!==null?L.shadowSide:L.side:S.side=L.shadowSide!==null?L.shadowSide:d[L.side],S.alphaMap=L.alphaMap,S.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,S.map=L.map,S.clipShadows=L.clipShadows,S.clippingPlanes=L.clippingPlanes,S.clipIntersection=L.clipIntersection,S.displacementMap=L.displacementMap,S.displacementScale=L.displacementScale,S.displacementBias=L.displacementBias,S.wireframeLinewidth=L.wireframeLinewidth,S.linewidth=L.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=n.properties.get(S);B.light=D}return S}function M(A,L,D,E,S){if(A.visible===!1)return;if(A.layers.test(L.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===_i)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const G=e.update(A),X=A.material;if(Array.isArray(X)){const Y=G.groups;for(let q=0,se=Y.length;q<se;q++){const V=Y[q],ce=X[V.materialIndex];if(ce&&ce.visible){const me=b(A,ce,E,S);A.onBeforeShadow(n,A,L,D,G,me,V),n.renderBufferDirect(D,null,G,me,A,V),A.onAfterShadow(n,A,L,D,G,me,V)}}}else if(X.visible){const Y=b(A,X,E,S);A.onBeforeShadow(n,A,L,D,G,Y,null),n.renderBufferDirect(D,null,G,Y,A,null),A.onAfterShadow(n,A,L,D,G,Y,null)}}const B=A.children;for(let G=0,X=B.length;G<X;G++)M(B[G],L,D,E,S)}function C(A){A.target.removeEventListener("dispose",C);for(const D in c){const E=c[D],S=A.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const jx={[Tl]:Al,[Rl]:Ll,[Cl]:Dl,[us]:Pl,[Al]:Tl,[Ll]:Rl,[Dl]:Cl,[Pl]:us};function Kx(n,e){function t(){let U=!1;const re=new Ut;let oe=null;const _e=new Ut(0,0,0,0);return{setMask:function(te){oe!==te&&!U&&(n.colorMask(te,te,te,te),oe=te)},setLocked:function(te){U=te},setClear:function(te,K,Me,He,yt){yt===!0&&(te*=He,K*=He,Me*=He),re.set(te,K,Me,He),_e.equals(re)===!1&&(n.clearColor(te,K,Me,He),_e.copy(re))},reset:function(){U=!1,oe=null,_e.set(-1,0,0,0)}}}function i(){let U=!1,re=!1,oe=null,_e=null,te=null;return{setReversed:function(K){if(re!==K){const Me=e.get("EXT_clip_control");K?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),re=K;const He=te;te=null,this.setClear(He)}},getReversed:function(){return re},setTest:function(K){K?J(n.DEPTH_TEST):ve(n.DEPTH_TEST)},setMask:function(K){oe!==K&&!U&&(n.depthMask(K),oe=K)},setFunc:function(K){if(re&&(K=jx[K]),_e!==K){switch(K){case Tl:n.depthFunc(n.NEVER);break;case Al:n.depthFunc(n.ALWAYS);break;case Rl:n.depthFunc(n.LESS);break;case us:n.depthFunc(n.LEQUAL);break;case Cl:n.depthFunc(n.EQUAL);break;case Pl:n.depthFunc(n.GEQUAL);break;case Ll:n.depthFunc(n.GREATER);break;case Dl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_e=K}},setLocked:function(K){U=K},setClear:function(K){te!==K&&(re&&(K=1-K),n.clearDepth(K),te=K)},reset:function(){U=!1,oe=null,_e=null,te=null,re=!1}}}function r(){let U=!1,re=null,oe=null,_e=null,te=null,K=null,Me=null,He=null,yt=null;return{setTest:function(dt){U||(dt?J(n.STENCIL_TEST):ve(n.STENCIL_TEST))},setMask:function(dt){re!==dt&&!U&&(n.stencilMask(dt),re=dt)},setFunc:function(dt,ui,Qn){(oe!==dt||_e!==ui||te!==Qn)&&(n.stencilFunc(dt,ui,Qn),oe=dt,_e=ui,te=Qn)},setOp:function(dt,ui,Qn){(K!==dt||Me!==ui||He!==Qn)&&(n.stencilOp(dt,ui,Qn),K=dt,Me=ui,He=Qn)},setLocked:function(dt){U=dt},setClear:function(dt){yt!==dt&&(n.clearStencil(dt),yt=dt)},reset:function(){U=!1,re=null,oe=null,_e=null,te=null,K=null,Me=null,He=null,yt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,f=[],g=null,x=!1,m=null,p=null,w=null,b=null,M=null,C=null,A=null,L=new Re(0,0,0),D=0,E=!1,S=null,I=null,B=null,G=null,X=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,se=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(V)[1]),q=se>=1):V.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),q=se>=2);let ce=null,me={};const Pe=n.getParameter(n.SCISSOR_BOX),Ke=n.getParameter(n.VIEWPORT),Mt=new Ut().fromArray(Pe),Tt=new Ut().fromArray(Ke);function ut(U,re,oe,_e){const te=new Uint8Array(4),K=n.createTexture();n.bindTexture(U,K),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Me=0;Me<oe;Me++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(re,0,n.RGBA,1,1,_e,0,n.RGBA,n.UNSIGNED_BYTE,te):n.texImage2D(re+Me,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,te);return K}const j={};j[n.TEXTURE_2D]=ut(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=ut(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=ut(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=ut(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(n.DEPTH_TEST),a.setFunc(us),Be(!1),ye(Uu),J(n.CULL_FACE),At(Bi);function J(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function ve(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function ze(U,re){return d[U]!==re?(n.bindFramebuffer(U,re),d[U]=re,U===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=re),U===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=re),!0):!1}function Ce(U,re){let oe=f,_e=!1;if(U){oe=h.get(re),oe===void 0&&(oe=[],h.set(re,oe));const te=U.textures;if(oe.length!==te.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let K=0,Me=te.length;K<Me;K++)oe[K]=n.COLOR_ATTACHMENT0+K;oe.length=te.length,_e=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,_e=!0);_e&&n.drawBuffers(oe)}function it(U){return g!==U?(n.useProgram(U),g=U,!0):!1}const en={[cr]:n.FUNC_ADD,[Np]:n.FUNC_SUBTRACT,[Fp]:n.FUNC_REVERSE_SUBTRACT};en[Op]=n.MIN,en[Bp]=n.MAX;const P={[kp]:n.ZERO,[zp]:n.ONE,[Hp]:n.SRC_COLOR,[El]:n.SRC_ALPHA,[$p]:n.SRC_ALPHA_SATURATE,[Xp]:n.DST_COLOR,[Vp]:n.DST_ALPHA,[Gp]:n.ONE_MINUS_SRC_COLOR,[wl]:n.ONE_MINUS_SRC_ALPHA,[qp]:n.ONE_MINUS_DST_COLOR,[Wp]:n.ONE_MINUS_DST_ALPHA,[Yp]:n.CONSTANT_COLOR,[jp]:n.ONE_MINUS_CONSTANT_COLOR,[Kp]:n.CONSTANT_ALPHA,[Zp]:n.ONE_MINUS_CONSTANT_ALPHA};function At(U,re,oe,_e,te,K,Me,He,yt,dt){if(U===Bi){x===!0&&(ve(n.BLEND),x=!1);return}if(x===!1&&(J(n.BLEND),x=!0),U!==Up){if(U!==m||dt!==E){if((p!==cr||M!==cr)&&(n.blendEquation(n.FUNC_ADD),p=cr,M=cr),dt)switch(U){case os:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lo:n.blendFunc(n.ONE,n.ONE);break;case Nu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Fu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case os:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Nu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}w=null,b=null,C=null,A=null,L.set(0,0,0),D=0,m=U,E=dt}return}te=te||re,K=K||oe,Me=Me||_e,(re!==p||te!==M)&&(n.blendEquationSeparate(en[re],en[te]),p=re,M=te),(oe!==w||_e!==b||K!==C||Me!==A)&&(n.blendFuncSeparate(P[oe],P[_e],P[K],P[Me]),w=oe,b=_e,C=K,A=Me),(He.equals(L)===!1||yt!==D)&&(n.blendColor(He.r,He.g,He.b,yt),L.copy(He),D=yt),m=U,E=!1}function Ge(U,re){U.side===Qt?ve(n.CULL_FACE):J(n.CULL_FACE);let oe=U.side===fn;re&&(oe=!oe),Be(oe),U.blending===os&&U.transparent===!1?At(Bi):At(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const _e=U.stencilWrite;o.setTest(_e),_e&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Se(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?J(n.SAMPLE_ALPHA_TO_COVERAGE):ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function Be(U){S!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),S=U)}function ye(U){U!==Lp?(J(n.CULL_FACE),U!==I&&(U===Uu?n.cullFace(n.BACK):U===Dp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ve(n.CULL_FACE),I=U}function Rt(U){U!==B&&(q&&n.lineWidth(U),B=U)}function Se(U,re,oe){U?(J(n.POLYGON_OFFSET_FILL),(G!==re||X!==oe)&&(n.polygonOffset(re,oe),G=re,X=oe)):ve(n.POLYGON_OFFSET_FILL)}function $e(U){U?J(n.SCISSOR_TEST):ve(n.SCISSOR_TEST)}function Yt(U){U===void 0&&(U=n.TEXTURE0+Y-1),ce!==U&&(n.activeTexture(U),ce=U)}function Nt(U,re,oe){oe===void 0&&(ce===null?oe=n.TEXTURE0+Y-1:oe=ce);let _e=me[oe];_e===void 0&&(_e={type:void 0,texture:void 0},me[oe]=_e),(_e.type!==U||_e.texture!==re)&&(ce!==oe&&(n.activeTexture(oe),ce=oe),n.bindTexture(U,re||j[U]),_e.type=U,_e.texture=re)}function R(){const U=me[ce];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function k(){try{n.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{n.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{n.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{n.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{n.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{n.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{n.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{n.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(U){Mt.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Mt.copy(U))}function Oe(U){Tt.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Tt.copy(U))}function we(U,re){let oe=c.get(re);oe===void 0&&(oe=new WeakMap,c.set(re,oe));let _e=oe.get(U);_e===void 0&&(_e=n.getUniformBlockIndex(re,U.name),oe.set(U,_e))}function ue(U,re){const _e=c.get(re).get(U);l.get(re)!==_e&&(n.uniformBlockBinding(re,_e,U.__bindingPointIndex),l.set(re,_e))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ce=null,me={},d={},h=new WeakMap,f=[],g=null,x=!1,m=null,p=null,w=null,b=null,M=null,C=null,A=null,L=new Re(0,0,0),D=0,E=!1,S=null,I=null,B=null,G=null,X=null,Mt.set(0,0,n.canvas.width,n.canvas.height),Tt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:J,disable:ve,bindFramebuffer:ze,drawBuffers:Ce,useProgram:it,setBlending:At,setMaterial:Ge,setFlipSided:Be,setCullFace:ye,setLineWidth:Rt,setPolygonOffset:Se,setScissorTest:$e,activeTexture:Yt,bindTexture:Nt,unbindTexture:R,compressedTexImage2D:v,compressedTexImage3D:k,texImage2D:Ee,texImage3D:ie,updateUBOMapping:we,uniformBlockBinding:ue,texStorage2D:ae,texStorage3D:be,texSubImage2D:$,texSubImage3D:Z,compressedTexSubImage2D:W,compressedTexSubImage3D:Ae,scissor:fe,viewport:Oe,reset:We}}function Zx(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Fe,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,v){return f?new OffscreenCanvas(R,v):ho("canvas")}function x(R,v,k){let $=1;const Z=Nt(R);if((Z.width>k||Z.height>k)&&($=k/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const W=Math.floor($*Z.width),Ae=Math.floor($*Z.height);d===void 0&&(d=g(W,Ae));const ae=v?g(W,Ae):d;return ae.width=W,ae.height=Ae,ae.getContext("2d").drawImage(R,0,0,W,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+W+"x"+Ae+")."),ae}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){n.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(R,v,k,$,Z=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let W=v;if(v===n.RED&&(k===n.FLOAT&&(W=n.R32F),k===n.HALF_FLOAT&&(W=n.R16F),k===n.UNSIGNED_BYTE&&(W=n.R8)),v===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(W=n.R8UI),k===n.UNSIGNED_SHORT&&(W=n.R16UI),k===n.UNSIGNED_INT&&(W=n.R32UI),k===n.BYTE&&(W=n.R8I),k===n.SHORT&&(W=n.R16I),k===n.INT&&(W=n.R32I)),v===n.RG&&(k===n.FLOAT&&(W=n.RG32F),k===n.HALF_FLOAT&&(W=n.RG16F),k===n.UNSIGNED_BYTE&&(W=n.RG8)),v===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(W=n.RG8UI),k===n.UNSIGNED_SHORT&&(W=n.RG16UI),k===n.UNSIGNED_INT&&(W=n.RG32UI),k===n.BYTE&&(W=n.RG8I),k===n.SHORT&&(W=n.RG16I),k===n.INT&&(W=n.RG32I)),v===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(W=n.RGB8UI),k===n.UNSIGNED_SHORT&&(W=n.RGB16UI),k===n.UNSIGNED_INT&&(W=n.RGB32UI),k===n.BYTE&&(W=n.RGB8I),k===n.SHORT&&(W=n.RGB16I),k===n.INT&&(W=n.RGB32I)),v===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),k===n.UNSIGNED_INT&&(W=n.RGBA32UI),k===n.BYTE&&(W=n.RGBA8I),k===n.SHORT&&(W=n.RGBA16I),k===n.INT&&(W=n.RGBA32I)),v===n.RGB&&(k===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(W=n.R11F_G11F_B10F)),v===n.RGBA){const Ae=Z?co:ot.getTransfer($);k===n.FLOAT&&(W=n.RGBA32F),k===n.HALF_FLOAT&&(W=n.RGBA16F),k===n.UNSIGNED_BYTE&&(W=Ae===mt?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function M(R,v){let k;return R?v===null||v===Mr||v===qs?k=n.DEPTH24_STENCIL8:v===ni?k=n.DEPTH32F_STENCIL8:v===Xs&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Mr||v===qs?k=n.DEPTH_COMPONENT24:v===ni?k=n.DEPTH_COMPONENT32F:v===Xs&&(k=n.DEPTH_COMPONENT16),k}function C(R,v){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Rn&&R.minFilter!==ti?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function A(R){const v=R.target;v.removeEventListener("dispose",A),D(v),v.isVideoTexture&&u.delete(v)}function L(R){const v=R.target;v.removeEventListener("dispose",L),S(v)}function D(R){const v=i.get(R);if(v.__webglInit===void 0)return;const k=R.source,$=h.get(k);if($){const Z=$[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&E(R),Object.keys($).length===0&&h.delete(k)}i.remove(R)}function E(R){const v=i.get(R);n.deleteTexture(v.__webglTexture);const k=R.source,$=h.get(k);delete $[v.__cacheKey],a.memory.textures--}function S(R){const v=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let Z=0;Z<v.__webglFramebuffer[$].length;Z++)n.deleteFramebuffer(v.__webglFramebuffer[$][Z]);else n.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)n.deleteFramebuffer(v.__webglFramebuffer[$]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const k=R.textures;for(let $=0,Z=k.length;$<Z;$++){const W=i.get(k[$]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),a.memory.textures--),i.remove(k[$])}i.remove(R)}let I=0;function B(){I=0}function G(){const R=I;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),I+=1,R}function X(R){const v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function Y(R,v){const k=i.get(R);if(R.isVideoTexture&&$e(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){const $=R.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(k,R,v);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+v)}function q(R,v){const k=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){j(k,R,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+v)}function se(R,v){const k=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){j(k,R,v);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+v)}function V(R,v){const k=i.get(R);if(R.version>0&&k.__version!==R.version){J(k,R,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+v)}const ce={[Nl]:n.REPEAT,[pr]:n.CLAMP_TO_EDGE,[Fl]:n.MIRRORED_REPEAT},me={[Rn]:n.NEAREST,[om]:n.NEAREST_MIPMAP_NEAREST,[pa]:n.NEAREST_MIPMAP_LINEAR,[ti]:n.LINEAR,[zo]:n.LINEAR_MIPMAP_NEAREST,[mr]:n.LINEAR_MIPMAP_LINEAR},Pe={[dm]:n.NEVER,[_m]:n.ALWAYS,[hm]:n.LESS,[Ih]:n.LEQUAL,[fm]:n.EQUAL,[gm]:n.GEQUAL,[pm]:n.GREATER,[mm]:n.NOTEQUAL};function Ke(R,v){if(v.type===ni&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===ti||v.magFilter===zo||v.magFilter===pa||v.magFilter===mr||v.minFilter===ti||v.minFilter===zo||v.minFilter===pa||v.minFilter===mr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,ce[v.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,ce[v.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,ce[v.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,me[v.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,me[v.minFilter]),v.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Pe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Rn||v.minFilter!==pa&&v.minFilter!==mr||v.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Mt(R,v){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",A));const $=v.source;let Z=h.get($);Z===void 0&&(Z={},h.set($,Z));const W=X(v);if(W!==R.__cacheKey){Z[W]===void 0&&(Z[W]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Z[W].usedTimes++;const Ae=Z[R.__cacheKey];Ae!==void 0&&(Z[R.__cacheKey].usedTimes--,Ae.usedTimes===0&&E(v)),R.__cacheKey=W,R.__webglTexture=Z[W].texture}return k}function Tt(R,v,k){return Math.floor(Math.floor(R/k)/v)}function ut(R,v,k,$){const W=R.updateRanges;if(W.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,k,$,v.data);else{W.sort((ie,fe)=>ie.start-fe.start);let Ae=0;for(let ie=1;ie<W.length;ie++){const fe=W[Ae],Oe=W[ie],we=fe.start+fe.count,ue=Tt(Oe.start,v.width,4),We=Tt(fe.start,v.width,4);Oe.start<=we+1&&ue===We&&Tt(Oe.start+Oe.count-1,v.width,4)===ue?fe.count=Math.max(fe.count,Oe.start+Oe.count-fe.start):(++Ae,W[Ae]=Oe)}W.length=Ae+1;const ae=n.getParameter(n.UNPACK_ROW_LENGTH),be=n.getParameter(n.UNPACK_SKIP_PIXELS),Ee=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let ie=0,fe=W.length;ie<fe;ie++){const Oe=W[ie],we=Math.floor(Oe.start/4),ue=Math.ceil(Oe.count/4),We=we%v.width,U=Math.floor(we/v.width),re=ue,oe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,We),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,We,U,re,oe,k,$,v.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ae),n.pixelStorei(n.UNPACK_SKIP_PIXELS,be),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ee)}}function j(R,v,k){let $=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=n.TEXTURE_3D);const Z=Mt(R,v),W=v.source;t.bindTexture($,R.__webglTexture,n.TEXTURE0+k);const Ae=i.get(W);if(W.version!==Ae.__version||Z===!0){t.activeTexture(n.TEXTURE0+k);const ae=ot.getPrimaries(ot.workingColorSpace),be=v.colorSpace===Ni?null:ot.getPrimaries(v.colorSpace),Ee=v.colorSpace===Ni||ae===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let ie=x(v.image,!1,r.maxTextureSize);ie=Yt(v,ie);const fe=s.convert(v.format,v.colorSpace),Oe=s.convert(v.type);let we=b(v.internalFormat,fe,Oe,v.colorSpace,v.isVideoTexture);Ke($,v);let ue;const We=v.mipmaps,U=v.isVideoTexture!==!0,re=Ae.__version===void 0||Z===!0,oe=W.dataReady,_e=C(v,ie);if(v.isDepthTexture)we=M(v.format===Ys,v.type),re&&(U?t.texStorage2D(n.TEXTURE_2D,1,we,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,we,ie.width,ie.height,0,fe,Oe,null));else if(v.isDataTexture)if(We.length>0){U&&re&&t.texStorage2D(n.TEXTURE_2D,_e,we,We[0].width,We[0].height);for(let te=0,K=We.length;te<K;te++)ue=We[te],U?oe&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,ue.width,ue.height,fe,Oe,ue.data):t.texImage2D(n.TEXTURE_2D,te,we,ue.width,ue.height,0,fe,Oe,ue.data);v.generateMipmaps=!1}else U?(re&&t.texStorage2D(n.TEXTURE_2D,_e,we,ie.width,ie.height),oe&&ut(v,ie,fe,Oe)):t.texImage2D(n.TEXTURE_2D,0,we,ie.width,ie.height,0,fe,Oe,ie.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){U&&re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,we,We[0].width,We[0].height,ie.depth);for(let te=0,K=We.length;te<K;te++)if(ue=We[te],v.format!==Yn)if(fe!==null)if(U){if(oe)if(v.layerUpdates.size>0){const Me=pd(ue.width,ue.height,v.format,v.type);for(const He of v.layerUpdates){const yt=ue.data.subarray(He*Me/ue.data.BYTES_PER_ELEMENT,(He+1)*Me/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,He,ue.width,ue.height,1,fe,yt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,ie.depth,fe,ue.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,we,ue.width,ue.height,ie.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?oe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,ie.depth,fe,Oe,ue.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,we,ue.width,ue.height,ie.depth,0,fe,Oe,ue.data)}else{U&&re&&t.texStorage2D(n.TEXTURE_2D,_e,we,We[0].width,We[0].height);for(let te=0,K=We.length;te<K;te++)ue=We[te],v.format!==Yn?fe!==null?U?oe&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,ue.width,ue.height,fe,ue.data):t.compressedTexImage2D(n.TEXTURE_2D,te,we,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?oe&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,ue.width,ue.height,fe,Oe,ue.data):t.texImage2D(n.TEXTURE_2D,te,we,ue.width,ue.height,0,fe,Oe,ue.data)}else if(v.isDataArrayTexture)if(U){if(re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,we,ie.width,ie.height,ie.depth),oe)if(v.layerUpdates.size>0){const te=pd(ie.width,ie.height,v.format,v.type);for(const K of v.layerUpdates){const Me=ie.data.subarray(K*te/ie.data.BYTES_PER_ELEMENT,(K+1)*te/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,ie.width,ie.height,1,fe,Oe,Me)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,fe,Oe,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,we,ie.width,ie.height,ie.depth,0,fe,Oe,ie.data);else if(v.isData3DTexture)U?(re&&t.texStorage3D(n.TEXTURE_3D,_e,we,ie.width,ie.height,ie.depth),oe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,fe,Oe,ie.data)):t.texImage3D(n.TEXTURE_3D,0,we,ie.width,ie.height,ie.depth,0,fe,Oe,ie.data);else if(v.isFramebufferTexture){if(re)if(U)t.texStorage2D(n.TEXTURE_2D,_e,we,ie.width,ie.height);else{let te=ie.width,K=ie.height;for(let Me=0;Me<_e;Me++)t.texImage2D(n.TEXTURE_2D,Me,we,te,K,0,fe,Oe,null),te>>=1,K>>=1}}else if(We.length>0){if(U&&re){const te=Nt(We[0]);t.texStorage2D(n.TEXTURE_2D,_e,we,te.width,te.height)}for(let te=0,K=We.length;te<K;te++)ue=We[te],U?oe&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,fe,Oe,ue):t.texImage2D(n.TEXTURE_2D,te,we,fe,Oe,ue);v.generateMipmaps=!1}else if(U){if(re){const te=Nt(ie);t.texStorage2D(n.TEXTURE_2D,_e,we,te.width,te.height)}oe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe,Oe,ie)}else t.texImage2D(n.TEXTURE_2D,0,we,fe,Oe,ie);m(v)&&p($),Ae.__version=W.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function J(R,v,k){if(v.image.length!==6)return;const $=Mt(R,v),Z=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+k);const W=i.get(Z);if(Z.version!==W.__version||$===!0){t.activeTexture(n.TEXTURE0+k);const Ae=ot.getPrimaries(ot.workingColorSpace),ae=v.colorSpace===Ni?null:ot.getPrimaries(v.colorSpace),be=v.colorSpace===Ni||Ae===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Ee=v.isCompressedTexture||v.image[0].isCompressedTexture,ie=v.image[0]&&v.image[0].isDataTexture,fe=[];for(let K=0;K<6;K++)!Ee&&!ie?fe[K]=x(v.image[K],!0,r.maxCubemapSize):fe[K]=ie?v.image[K].image:v.image[K],fe[K]=Yt(v,fe[K]);const Oe=fe[0],we=s.convert(v.format,v.colorSpace),ue=s.convert(v.type),We=b(v.internalFormat,we,ue,v.colorSpace),U=v.isVideoTexture!==!0,re=W.__version===void 0||$===!0,oe=Z.dataReady;let _e=C(v,Oe);Ke(n.TEXTURE_CUBE_MAP,v);let te;if(Ee){U&&re&&t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,We,Oe.width,Oe.height);for(let K=0;K<6;K++){te=fe[K].mipmaps;for(let Me=0;Me<te.length;Me++){const He=te[Me];v.format!==Yn?we!==null?U?oe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me,0,0,He.width,He.height,we,He.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me,We,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me,0,0,He.width,He.height,we,ue,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me,We,He.width,He.height,0,we,ue,He.data)}}}else{if(te=v.mipmaps,U&&re){te.length>0&&_e++;const K=Nt(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,We,K.width,K.height)}for(let K=0;K<6;K++)if(ie){U?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,fe[K].width,fe[K].height,we,ue,fe[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,We,fe[K].width,fe[K].height,0,we,ue,fe[K].data);for(let Me=0;Me<te.length;Me++){const yt=te[Me].image[K].image;U?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me+1,0,0,yt.width,yt.height,we,ue,yt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me+1,We,yt.width,yt.height,0,we,ue,yt.data)}}else{U?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,we,ue,fe[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,We,we,ue,fe[K]);for(let Me=0;Me<te.length;Me++){const He=te[Me];U?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me+1,0,0,we,ue,He.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me+1,We,we,ue,He.image[K])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),W.__version=Z.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function ve(R,v,k,$,Z,W){const Ae=s.convert(k.format,k.colorSpace),ae=s.convert(k.type),be=b(k.internalFormat,Ae,ae,k.colorSpace),Ee=i.get(v),ie=i.get(k);if(ie.__renderTarget=v,!Ee.__hasExternalTextures){const fe=Math.max(1,v.width>>W),Oe=Math.max(1,v.height>>W);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,W,be,fe,Oe,v.depth,0,Ae,ae,null):t.texImage2D(Z,W,be,fe,Oe,0,Ae,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),Se(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,Z,ie.__webglTexture,0,Rt(v)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,Z,ie.__webglTexture,W),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ze(R,v,k){if(n.bindRenderbuffer(n.RENDERBUFFER,R),v.depthBuffer){const $=v.depthTexture,Z=$&&$.isDepthTexture?$.type:null,W=M(v.stencilBuffer,Z),Ae=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=Rt(v);Se(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,W,v.width,v.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,W,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,W,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ae,n.RENDERBUFFER,R)}else{const $=v.textures;for(let Z=0;Z<$.length;Z++){const W=$[Z],Ae=s.convert(W.format,W.colorSpace),ae=s.convert(W.type),be=b(W.internalFormat,Ae,ae,W.colorSpace),Ee=Rt(v);k&&Se(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,be,v.width,v.height):Se(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,be,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,be,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ce(R,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(v.depthTexture);$.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y(v.depthTexture,0);const Z=$.__webglTexture,W=Rt(v);if(v.depthTexture.format===$s)Se(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(v.depthTexture.format===Ys)Se(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function it(R){const v=i.get(R),k=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){const $=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){const Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",Z)};$.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=$}if(R.depthTexture&&!v.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const $=R.texture.mipmaps;$&&$.length>0?Ce(v.__webglFramebuffer[0],R):Ce(v.__webglFramebuffer,R)}else if(k){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=n.createRenderbuffer(),ze(v.__webglDepthbuffer[$],R,!1);else{const Z=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,W)}}else{const $=R.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),ze(v.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,W)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function en(R,v,k){const $=i.get(R);v!==void 0&&ve($.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&it(R)}function P(R){const v=R.texture,k=i.get(R),$=i.get(v);R.addEventListener("dispose",L);const Z=R.textures,W=R.isWebGLCubeRenderTarget===!0,Ae=Z.length>1;if(Ae||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=v.version,a.memory.textures++),W){k.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[ae]=[];for(let be=0;be<v.mipmaps.length;be++)k.__webglFramebuffer[ae][be]=n.createFramebuffer()}else k.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let ae=0;ae<v.mipmaps.length;ae++)k.__webglFramebuffer[ae]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(Ae)for(let ae=0,be=Z.length;ae<be;ae++){const Ee=i.get(Z[ae]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&Se(R)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ae=0;ae<Z.length;ae++){const be=Z[ae];k.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[ae]);const Ee=s.convert(be.format,be.colorSpace),ie=s.convert(be.type),fe=b(be.internalFormat,Ee,ie,be.colorSpace,R.isXRRenderTarget===!0),Oe=Rt(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,fe,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,k.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),ze(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),Ke(n.TEXTURE_CUBE_MAP,v);for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0)for(let be=0;be<v.mipmaps.length;be++)ve(k.__webglFramebuffer[ae][be],R,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,be);else ve(k.__webglFramebuffer[ae],R,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let ae=0,be=Z.length;ae<be;ae++){const Ee=Z[ae],ie=i.get(Ee);let fe=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,ie.__webglTexture),Ke(fe,Ee),ve(k.__webglFramebuffer,R,Ee,n.COLOR_ATTACHMENT0+ae,fe,0),m(Ee)&&p(fe)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,$.__webglTexture),Ke(ae,v),v.mipmaps&&v.mipmaps.length>0)for(let be=0;be<v.mipmaps.length;be++)ve(k.__webglFramebuffer[be],R,v,n.COLOR_ATTACHMENT0,ae,be);else ve(k.__webglFramebuffer,R,v,n.COLOR_ATTACHMENT0,ae,0);m(v)&&p(ae),t.unbindTexture()}R.depthBuffer&&it(R)}function At(R){const v=R.textures;for(let k=0,$=v.length;k<$;k++){const Z=v[k];if(m(Z)){const W=w(R),Ae=i.get(Z).__webglTexture;t.bindTexture(W,Ae),p(W),t.unbindTexture()}}}const Ge=[],Be=[];function ye(R){if(R.samples>0){if(Se(R)===!1){const v=R.textures,k=R.width,$=R.height;let Z=n.COLOR_BUFFER_BIT;const W=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=i.get(R),ae=v.length>1;if(ae)for(let Ee=0;Ee<v.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);const be=R.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Ee=0;Ee<v.length;Ee++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ee]);const ie=i.get(v[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ie,0)}n.blitFramebuffer(0,0,k,$,0,0,k,$,Z,n.NEAREST),l===!0&&(Ge.length=0,Be.length=0,Ge.push(n.COLOR_ATTACHMENT0+Ee),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ge.push(W),Be.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Be)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ge))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let Ee=0;Ee<v.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ee]);const ie=i.get(v[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const v=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Rt(R){return Math.min(r.maxSamples,R.samples)}function Se(R){const v=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function $e(R){const v=a.render.frame;u.get(R)!==v&&(u.set(R,v),R.update())}function Yt(R,v){const k=R.colorSpace,$=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==fs&&k!==Ni&&(ot.getTransfer(k)===mt?($!==Yn||Z!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),v}function Nt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=B,this.setTexture2D=Y,this.setTexture2DArray=q,this.setTexture3D=se,this.setTextureCube=V,this.rebindTextures=en,this.setupRenderTarget=P,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Se}function Jx(n,e){function t(i,r=Ni){let s;const a=ot.getTransfer(r);if(i===ai)return n.UNSIGNED_BYTE;if(i===Dc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ic)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ah)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Rh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===wh)return n.BYTE;if(i===Th)return n.SHORT;if(i===Xs)return n.UNSIGNED_SHORT;if(i===Lc)return n.INT;if(i===Mr)return n.UNSIGNED_INT;if(i===ni)return n.FLOAT;if(i===aa)return n.HALF_FLOAT;if(i===Ch)return n.ALPHA;if(i===Ph)return n.RGB;if(i===Yn)return n.RGBA;if(i===$s)return n.DEPTH_COMPONENT;if(i===Ys)return n.DEPTH_STENCIL;if(i===Uc)return n.RED;if(i===Nc)return n.RED_INTEGER;if(i===Lh)return n.RG;if(i===Fc)return n.RG_INTEGER;if(i===Oc)return n.RGBA_INTEGER;if(i===Qa||i===eo||i===to||i===no)if(a===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Qa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===to)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===no)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Qa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===eo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===to)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===no)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ol||i===Bl||i===kl||i===zl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ol)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===kl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===zl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hl||i===Gl||i===Vl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Hl||i===Gl)return a===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Vl)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Wl||i===Xl||i===ql||i===$l||i===Yl||i===jl||i===Kl||i===Zl||i===Jl||i===Ql||i===ec||i===tc||i===nc||i===ic)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Wl)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xl)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ql)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$l)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Yl)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jl)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kl)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Zl)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Jl)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ql)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ec)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===tc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===nc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ic)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===rc||i===sc||i===ac)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===rc)return a===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===sc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ac)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===oc||i===lc||i===cc||i===uc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===oc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===lc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===cc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===uc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Qx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eM=`
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

}`;class tM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new qh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new wi({vertexShader:Qx,fragmentShader:eM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ee(new So(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nM extends xs{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null;const x=typeof XRWebGLBinding<"u",m=new tM,p={},w=t.getContextAttributes();let b=null,M=null;const C=[],A=[],L=new Fe;let D=null;const E=new On;E.viewport=new Ut;const S=new On;S.viewport=new Ut;const I=[E,S],B=new S0;let G=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let J=C[j];return J===void 0&&(J=new ol,C[j]=J),J.getTargetRaySpace()},this.getControllerGrip=function(j){let J=C[j];return J===void 0&&(J=new ol,C[j]=J),J.getGripSpace()},this.getHand=function(j){let J=C[j];return J===void 0&&(J=new ol,C[j]=J),J.getHandSpace()};function Y(j){const J=A.indexOf(j.inputSource);if(J===-1)return;const ve=C[J];ve!==void 0&&(ve.update(j.inputSource,j.frame,c||a),ve.dispatchEvent({type:j.type,data:j.inputSource}))}function q(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",se);for(let j=0;j<C.length;j++){const J=A[j];J!==null&&(A[j]=null,C[j].disconnect(J))}G=null,X=null,m.reset();for(const j in p)delete p[j];e.setRenderTarget(b),f=null,h=null,d=null,r=null,M=null,ut.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",q),r.addEventListener("inputsourceschange",se),w.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(L),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,ze=null,Ce=null;w.depth&&(Ce=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=w.stencil?Ys:$s,ze=w.stencil?qs:Mr);const it={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(it),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new yr(h.textureWidth,h.textureHeight,{format:Yn,type:ai,depthTexture:new Xh(h.textureWidth,h.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ve={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,ve),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new yr(f.framebufferWidth,f.framebufferHeight,{format:Yn,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ut.setContext(r),ut.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function se(j){for(let J=0;J<j.removed.length;J++){const ve=j.removed[J],ze=A.indexOf(ve);ze>=0&&(A[ze]=null,C[ze].disconnect(ve))}for(let J=0;J<j.added.length;J++){const ve=j.added[J];let ze=A.indexOf(ve);if(ze===-1){for(let it=0;it<C.length;it++)if(it>=A.length){A.push(ve),ze=it;break}else if(A[it]===null){A[it]=ve,ze=it;break}if(ze===-1)break}const Ce=C[ze];Ce&&Ce.connect(ve)}}const V=new N,ce=new N;function me(j,J,ve){V.setFromMatrixPosition(J.matrixWorld),ce.setFromMatrixPosition(ve.matrixWorld);const ze=V.distanceTo(ce),Ce=J.projectionMatrix.elements,it=ve.projectionMatrix.elements,en=Ce[14]/(Ce[10]-1),P=Ce[14]/(Ce[10]+1),At=(Ce[9]+1)/Ce[5],Ge=(Ce[9]-1)/Ce[5],Be=(Ce[8]-1)/Ce[0],ye=(it[8]+1)/it[0],Rt=en*Be,Se=en*ye,$e=ze/(-Be+ye),Yt=$e*-Be;if(J.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Yt),j.translateZ($e),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ce[10]===-1)j.projectionMatrix.copy(J.projectionMatrix),j.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Nt=en+$e,R=P+$e,v=Rt-Yt,k=Se+(ze-Yt),$=At*P/R*Nt,Z=Ge*P/R*Nt;j.projectionMatrix.makePerspective(v,k,$,Z,Nt,R),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Pe(j,J){J===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(J.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let J=j.near,ve=j.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),B.near=S.near=E.near=J,B.far=S.far=E.far=ve,(G!==B.near||X!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),G=B.near,X=B.far),B.layers.mask=j.layers.mask|6,E.layers.mask=B.layers.mask&3,S.layers.mask=B.layers.mask&5;const ze=j.parent,Ce=B.cameras;Pe(B,ze);for(let it=0;it<Ce.length;it++)Pe(Ce[it],ze);Ce.length===2?me(B,E,S):B.projectionMatrix.copy(E.projectionMatrix),Ke(j,B,ze)};function Ke(j,J,ve){ve===null?j.matrix.copy(J.matrixWorld):(j.matrix.copy(ve.matrixWorld),j.matrix.invert(),j.matrix.multiply(J.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(J.projectionMatrix),j.projectionMatrixInverse.copy(J.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=js*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(j){return p[j]};let Mt=null;function Tt(j,J){if(u=J.getViewerPose(c||a),g=J,u!==null){const ve=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let ze=!1;ve.length!==B.cameras.length&&(B.cameras.length=0,ze=!0);for(let P=0;P<ve.length;P++){const At=ve[P];let Ge=null;if(f!==null)Ge=f.getViewport(At);else{const ye=d.getViewSubImage(h,At);Ge=ye.viewport,P===0&&(e.setRenderTargetTextures(M,ye.colorTexture,ye.depthStencilTexture),e.setRenderTarget(M))}let Be=I[P];Be===void 0&&(Be=new On,Be.layers.enable(P),Be.viewport=new Ut,I[P]=Be),Be.matrix.fromArray(At.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(At.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),P===0&&(B.matrix.copy(Be.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),ze===!0&&B.cameras.push(Be)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){d=i.getBinding();const P=d.getDepthInformation(ve[0]);P&&P.isValid&&P.texture&&m.init(P,r.renderState)}if(Ce&&Ce.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let P=0;P<ve.length;P++){const At=ve[P].camera;if(At){let Ge=p[At];Ge||(Ge=new qh,p[At]=Ge);const Be=d.getCameraImage(At);Ge.sourceTexture=Be}}}}for(let ve=0;ve<C.length;ve++){const ze=A[ve],Ce=C[ve];ze!==null&&Ce!==void 0&&Ce.update(ze,J,c||a)}Mt&&Mt(j,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}const ut=new jh;ut.setAnimationLoop(Tt),this.setAnimationLoop=function(j){Mt=j},this.dispose=function(){}}}const rr=new oi,iM=new ct;function rM(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,kh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,w,b,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,w,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===fn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===fn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),b=w.envMap,M=w.envMapRotation;b&&(m.envMap.value=b,rr.copy(M),rr.x*=-1,rr.y*=-1,rr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(rr.y*=-1,rr.z*=-1),m.envMapRotation.value.setFromMatrix4(iM.makeRotationFromEuler(rr)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===fn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function sM(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,b){const M=b.program;i.uniformBlockBinding(w,M)}function c(w,b){let M=r[w.id];M===void 0&&(g(w),M=u(w),r[w.id]=M,w.addEventListener("dispose",m));const C=b.program;i.updateUBOMapping(w,C);const A=e.render.frame;s[w.id]!==A&&(h(w),s[w.id]=A)}function u(w){const b=d();w.__bindingPointIndex=b;const M=n.createBuffer(),C=w.__size,A=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,C,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,M),M}function d(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const b=r[w.id],M=w.uniforms,C=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let A=0,L=M.length;A<L;A++){const D=Array.isArray(M[A])?M[A]:[M[A]];for(let E=0,S=D.length;E<S;E++){const I=D[E];if(f(I,A,E,C)===!0){const B=I.__offset,G=Array.isArray(I.value)?I.value:[I.value];let X=0;for(let Y=0;Y<G.length;Y++){const q=G[Y],se=x(q);typeof q=="number"||typeof q=="boolean"?(I.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,B+X,I.__data)):q.isMatrix3?(I.__data[0]=q.elements[0],I.__data[1]=q.elements[1],I.__data[2]=q.elements[2],I.__data[3]=0,I.__data[4]=q.elements[3],I.__data[5]=q.elements[4],I.__data[6]=q.elements[5],I.__data[7]=0,I.__data[8]=q.elements[6],I.__data[9]=q.elements[7],I.__data[10]=q.elements[8],I.__data[11]=0):(q.toArray(I.__data,X),X+=se.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(w,b,M,C){const A=w.value,L=b+"_"+M;if(C[L]===void 0)return typeof A=="number"||typeof A=="boolean"?C[L]=A:C[L]=A.clone(),!0;{const D=C[L];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return C[L]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(w){const b=w.uniforms;let M=0;const C=16;for(let L=0,D=b.length;L<D;L++){const E=Array.isArray(b[L])?b[L]:[b[L]];for(let S=0,I=E.length;S<I;S++){const B=E[S],G=Array.isArray(B.value)?B.value:[B.value];for(let X=0,Y=G.length;X<Y;X++){const q=G[X],se=x(q),V=M%C,ce=V%se.boundary,me=V+ce;M+=ce,me!==0&&C-me<se.storage&&(M+=C-me),B.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=se.storage}}}const A=M%C;return A>0&&(M+=C-A),w.__size=M,w.__cache={},this}function x(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function m(w){const b=w.target;b.removeEventListener("dispose",m);const M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function p(){for(const w in r)n.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class aM{constructor(e={}){const{canvas:t=Um(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const w=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let C=!1;this._outputColorSpace=Fn;let A=0,L=0,D=null,E=-1,S=null;const I=new Ut,B=new Ut;let G=null;const X=new Re(0);let Y=0,q=t.width,se=t.height,V=1,ce=null,me=null;const Pe=new Ut(0,0,q,se),Ke=new Ut(0,0,q,se);let Mt=!1;const Tt=new Wc;let ut=!1,j=!1;const J=new ct,ve=new N,ze=new Ut,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function en(){return D===null?V:1}let P=i;function At(y,F){return t.getContext(y,F)}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Cc}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",te,!1),P===null){const F="webgl2";if(P=At(F,y),P===null)throw At(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ge,Be,ye,Rt,Se,$e,Yt,Nt,R,v,k,$,Z,W,Ae,ae,be,Ee,ie,fe,Oe,we,ue,We;function U(){Ge=new gv(P),Ge.init(),we=new Jx(P,Ge),Be=new cv(P,Ge,e,we),ye=new Kx(P,Ge),Be.reversedDepthBuffer&&h&&ye.buffers.depth.setReversed(!0),Rt=new xv(P),Se=new Ox,$e=new Zx(P,Ge,ye,Se,Be,we,Rt),Yt=new dv(M),Nt=new mv(M),R=new w0(P),ue=new ov(P,R),v=new _v(P,R,Rt,ue),k=new yv(P,v,R,Rt),ie=new Mv(P,Be,$e),ae=new uv(Se),$=new Fx(M,Yt,Nt,Ge,Be,ue,ae),Z=new rM(M,Se),W=new kx,Ae=new Xx(Ge),Ee=new av(M,Yt,Nt,ye,k,f,l),be=new Yx(M,k,Be),We=new sM(P,Rt,Be,ye),fe=new lv(P,Ge,Rt),Oe=new vv(P,Ge,Rt),Rt.programs=$.programs,M.capabilities=Be,M.extensions=Ge,M.properties=Se,M.renderLists=W,M.shadowMap=be,M.state=ye,M.info=Rt}U();const re=new nM(M,P);this.xr=re,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const y=Ge.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ge.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(y){y!==void 0&&(V=y,this.setSize(q,se,!1))},this.getSize=function(y){return y.set(q,se)},this.setSize=function(y,F,z=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=y,se=F,t.width=Math.floor(y*V),t.height=Math.floor(F*V),z===!0&&(t.style.width=y+"px",t.style.height=F+"px"),this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(q*V,se*V).floor()},this.setDrawingBufferSize=function(y,F,z){q=y,se=F,V=z,t.width=Math.floor(y*z),t.height=Math.floor(F*z),this.setViewport(0,0,y,F)},this.getCurrentViewport=function(y){return y.copy(I)},this.getViewport=function(y){return y.copy(Pe)},this.setViewport=function(y,F,z,H){y.isVector4?Pe.set(y.x,y.y,y.z,y.w):Pe.set(y,F,z,H),ye.viewport(I.copy(Pe).multiplyScalar(V).round())},this.getScissor=function(y){return y.copy(Ke)},this.setScissor=function(y,F,z,H){y.isVector4?Ke.set(y.x,y.y,y.z,y.w):Ke.set(y,F,z,H),ye.scissor(B.copy(Ke).multiplyScalar(V).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(y){ye.setScissorTest(Mt=y)},this.setOpaqueSort=function(y){ce=y},this.setTransparentSort=function(y){me=y},this.getClearColor=function(y){return y.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(y=!0,F=!0,z=!0){let H=0;if(y){let O=!1;if(D!==null){const ne=D.texture.format;O=ne===Oc||ne===Fc||ne===Nc}if(O){const ne=D.texture.type,he=ne===ai||ne===Mr||ne===Xs||ne===qs||ne===Dc||ne===Ic,xe=Ee.getClearColor(),ge=Ee.getClearAlpha(),Ue=xe.r,ke=xe.g,Le=xe.b;he?(g[0]=Ue,g[1]=ke,g[2]=Le,g[3]=ge,P.clearBufferuiv(P.COLOR,0,g)):(x[0]=Ue,x[1]=ke,x[2]=Le,x[3]=ge,P.clearBufferiv(P.COLOR,0,x))}else H|=P.COLOR_BUFFER_BIT}F&&(H|=P.DEPTH_BUFFER_BIT),z&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",te,!1),Ee.dispose(),W.dispose(),Ae.dispose(),Se.dispose(),Yt.dispose(),Nt.dispose(),k.dispose(),ue.dispose(),We.dispose(),$.dispose(),re.dispose(),re.removeEventListener("sessionstart",Qn),re.removeEventListener("sessionend",Au),Zi.stop()};function oe(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const y=Rt.autoReset,F=be.enabled,z=be.autoUpdate,H=be.needsUpdate,O=be.type;U(),Rt.autoReset=y,be.enabled=F,be.autoUpdate=z,be.needsUpdate=H,be.type=O}function te(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function K(y){const F=y.target;F.removeEventListener("dispose",K),Me(F)}function Me(y){He(y),Se.remove(y)}function He(y){const F=Se.get(y).programs;F!==void 0&&(F.forEach(function(z){$.releaseProgram(z)}),y.isShaderMaterial&&$.releaseShaderCache(y))}this.renderBufferDirect=function(y,F,z,H,O,ne){F===null&&(F=Ce);const he=O.isMesh&&O.matrixWorld.determinant()<0,xe=bp(y,F,z,H,O);ye.setMaterial(H,he);let ge=z.index,Ue=1;if(H.wireframe===!0){if(ge=v.getWireframeAttribute(z),ge===void 0)return;Ue=2}const ke=z.drawRange,Le=z.attributes.position;let Qe=ke.start*Ue,pt=(ke.start+ke.count)*Ue;ne!==null&&(Qe=Math.max(Qe,ne.start*Ue),pt=Math.min(pt,(ne.start+ne.count)*Ue)),ge!==null?(Qe=Math.max(Qe,0),pt=Math.min(pt,ge.count)):Le!=null&&(Qe=Math.max(Qe,0),pt=Math.min(pt,Le.count));const It=pt-Qe;if(It<0||It===1/0)return;ue.setup(O,H,xe,z,ge);let bt,vt=fe;if(ge!==null&&(bt=R.get(ge),vt=Oe,vt.setIndex(bt)),O.isMesh)H.wireframe===!0?(ye.setLineWidth(H.wireframeLinewidth*en()),vt.setMode(P.LINES)):vt.setMode(P.TRIANGLES);else if(O.isLine){let De=H.linewidth;De===void 0&&(De=1),ye.setLineWidth(De*en()),O.isLineSegments?vt.setMode(P.LINES):O.isLineLoop?vt.setMode(P.LINE_LOOP):vt.setMode(P.LINE_STRIP)}else O.isPoints?vt.setMode(P.POINTS):O.isSprite&&vt.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Ks("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),vt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))vt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const De=O._multiDrawStarts,Lt=O._multiDrawCounts,at=O._multiDrawCount,Sn=ge?R.get(ge).bytesPerElement:1,Ur=Se.get(H).currentProgram.getUniforms();for(let bn=0;bn<at;bn++)Ur.setValue(P,"_gl_DrawID",bn),vt.render(De[bn]/Sn,Lt[bn])}else if(O.isInstancedMesh)vt.renderInstances(Qe,It,O.count);else if(z.isInstancedBufferGeometry){const De=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Lt=Math.min(z.instanceCount,De);vt.renderInstances(Qe,It,Lt)}else vt.render(Qe,It)};function yt(y,F,z){y.transparent===!0&&y.side===Qt&&y.forceSinglePass===!1?(y.side=fn,y.needsUpdate=!0,fa(y,F,z),y.side=Gi,y.needsUpdate=!0,fa(y,F,z),y.side=Qt):fa(y,F,z)}this.compile=function(y,F,z=null){z===null&&(z=y),p=Ae.get(z),p.init(F),b.push(p),z.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),y!==z&&y.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const H=new Set;return y.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ne=O.material;if(ne)if(Array.isArray(ne))for(let he=0;he<ne.length;he++){const xe=ne[he];yt(xe,z,O),H.add(xe)}else yt(ne,z,O),H.add(ne)}),p=b.pop(),H},this.compileAsync=function(y,F,z=null){const H=this.compile(y,F,z);return new Promise(O=>{function ne(){if(H.forEach(function(he){Se.get(he).currentProgram.isReady()&&H.delete(he)}),H.size===0){O(y);return}setTimeout(ne,10)}Ge.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let dt=null;function ui(y){dt&&dt(y)}function Qn(){Zi.stop()}function Au(){Zi.start()}const Zi=new jh;Zi.setAnimationLoop(ui),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(y){dt=y,re.setAnimationLoop(y),y===null?Zi.stop():Zi.start()},re.addEventListener("sessionstart",Qn),re.addEventListener("sessionend",Au),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(F),F=re.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,F,D),p=Ae.get(y,b.length),p.init(F),b.push(p),J.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Tt.setFromProjectionMatrix(J,ii,F.reversedDepth),j=this.localClippingEnabled,ut=ae.init(this.clippingPlanes,j),m=W.get(y,w.length),m.init(),w.push(m),re.enabled===!0&&re.isPresenting===!0){const ne=M.xr.getDepthSensingMesh();ne!==null&&Bo(ne,F,-1/0,M.sortObjects)}Bo(y,F,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(ce,me),it=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,it&&Ee.addToRenderList(m,y),this.info.render.frame++,ut===!0&&ae.beginShadows();const z=p.state.shadowsArray;be.render(z,y,F),ut===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,O=m.transmissive;if(p.setupLights(),F.isArrayCamera){const ne=F.cameras;if(O.length>0)for(let he=0,xe=ne.length;he<xe;he++){const ge=ne[he];Cu(H,O,y,ge)}it&&Ee.render(y);for(let he=0,xe=ne.length;he<xe;he++){const ge=ne[he];Ru(m,y,ge,ge.viewport)}}else O.length>0&&Cu(H,O,y,F),it&&Ee.render(y),Ru(m,y,F);D!==null&&L===0&&($e.updateMultisampleRenderTarget(D),$e.updateRenderTargetMipmap(D)),y.isScene===!0&&y.onAfterRender(M,y,F),ue.resetDefaultState(),E=-1,S=null,b.pop(),b.length>0?(p=b[b.length-1],ut===!0&&ae.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Bo(y,F,z,H){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(F);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Tt.intersectsSprite(y)){H&&ze.setFromMatrixPosition(y.matrixWorld).applyMatrix4(J);const he=k.update(y),xe=y.material;xe.visible&&m.push(y,he,xe,z,ze.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Tt.intersectsObject(y))){const he=k.update(y),xe=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),ze.copy(y.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),ze.copy(he.boundingSphere.center)),ze.applyMatrix4(y.matrixWorld).applyMatrix4(J)),Array.isArray(xe)){const ge=he.groups;for(let Ue=0,ke=ge.length;Ue<ke;Ue++){const Le=ge[Ue],Qe=xe[Le.materialIndex];Qe&&Qe.visible&&m.push(y,he,Qe,z,ze.z,Le)}}else xe.visible&&m.push(y,he,xe,z,ze.z,null)}}const ne=y.children;for(let he=0,xe=ne.length;he<xe;he++)Bo(ne[he],F,z,H)}function Ru(y,F,z,H){const O=y.opaque,ne=y.transmissive,he=y.transparent;p.setupLightsView(z),ut===!0&&ae.setGlobalState(M.clippingPlanes,z),H&&ye.viewport(I.copy(H)),O.length>0&&ha(O,F,z),ne.length>0&&ha(ne,F,z),he.length>0&&ha(he,F,z),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Cu(y,F,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new yr(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?aa:ai,minFilter:mr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const ne=p.state.transmissionRenderTarget[H.id],he=H.viewport||I;ne.setSize(he.z*M.transmissionResolutionScale,he.w*M.transmissionResolutionScale);const xe=M.getRenderTarget(),ge=M.getActiveCubeFace(),Ue=M.getActiveMipmapLevel();M.setRenderTarget(ne),M.getClearColor(X),Y=M.getClearAlpha(),Y<1&&M.setClearColor(16777215,.5),M.clear(),it&&Ee.render(z);const ke=M.toneMapping;M.toneMapping=ki;const Le=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),ut===!0&&ae.setGlobalState(M.clippingPlanes,H),ha(y,z,H),$e.updateMultisampleRenderTarget(ne),$e.updateRenderTargetMipmap(ne),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let pt=0,It=F.length;pt<It;pt++){const bt=F[pt],vt=bt.object,De=bt.geometry,Lt=bt.material,at=bt.group;if(Lt.side===Qt&&vt.layers.test(H.layers)){const Sn=Lt.side;Lt.side=fn,Lt.needsUpdate=!0,Pu(vt,z,H,De,Lt,at),Lt.side=Sn,Lt.needsUpdate=!0,Qe=!0}}Qe===!0&&($e.updateMultisampleRenderTarget(ne),$e.updateRenderTargetMipmap(ne))}M.setRenderTarget(xe,ge,Ue),M.setClearColor(X,Y),Le!==void 0&&(H.viewport=Le),M.toneMapping=ke}function ha(y,F,z){const H=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ne=y.length;O<ne;O++){const he=y[O],xe=he.object,ge=he.geometry,Ue=he.group;let ke=he.material;ke.allowOverride===!0&&H!==null&&(ke=H),xe.layers.test(z.layers)&&Pu(xe,F,z,ge,ke,Ue)}}function Pu(y,F,z,H,O,ne){y.onBeforeRender(M,F,z,H,O,ne),y.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),O.onBeforeRender(M,F,z,H,y,ne),O.transparent===!0&&O.side===Qt&&O.forceSinglePass===!1?(O.side=fn,O.needsUpdate=!0,M.renderBufferDirect(z,F,H,O,y,ne),O.side=Gi,O.needsUpdate=!0,M.renderBufferDirect(z,F,H,O,y,ne),O.side=Qt):M.renderBufferDirect(z,F,H,O,y,ne),y.onAfterRender(M,F,z,H,O,ne)}function fa(y,F,z){F.isScene!==!0&&(F=Ce);const H=Se.get(y),O=p.state.lights,ne=p.state.shadowsArray,he=O.state.version,xe=$.getParameters(y,O.state,ne,F,z),ge=$.getProgramCacheKey(xe);let Ue=H.programs;H.environment=y.isMeshStandardMaterial?F.environment:null,H.fog=F.fog,H.envMap=(y.isMeshStandardMaterial?Nt:Yt).get(y.envMap||H.environment),H.envMapRotation=H.environment!==null&&y.envMap===null?F.environmentRotation:y.envMapRotation,Ue===void 0&&(y.addEventListener("dispose",K),Ue=new Map,H.programs=Ue);let ke=Ue.get(ge);if(ke!==void 0){if(H.currentProgram===ke&&H.lightsStateVersion===he)return Du(y,xe),ke}else xe.uniforms=$.getUniforms(y),y.onBeforeCompile(xe,M),ke=$.acquireProgram(xe,ge),Ue.set(ge,ke),H.uniforms=xe.uniforms;const Le=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Le.clippingPlanes=ae.uniform),Du(y,xe),H.needsLights=wp(y),H.lightsStateVersion=he,H.needsLights&&(Le.ambientLightColor.value=O.state.ambient,Le.lightProbe.value=O.state.probe,Le.directionalLights.value=O.state.directional,Le.directionalLightShadows.value=O.state.directionalShadow,Le.spotLights.value=O.state.spot,Le.spotLightShadows.value=O.state.spotShadow,Le.rectAreaLights.value=O.state.rectArea,Le.ltc_1.value=O.state.rectAreaLTC1,Le.ltc_2.value=O.state.rectAreaLTC2,Le.pointLights.value=O.state.point,Le.pointLightShadows.value=O.state.pointShadow,Le.hemisphereLights.value=O.state.hemi,Le.directionalShadowMap.value=O.state.directionalShadowMap,Le.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Le.spotShadowMap.value=O.state.spotShadowMap,Le.spotLightMatrix.value=O.state.spotLightMatrix,Le.spotLightMap.value=O.state.spotLightMap,Le.pointShadowMap.value=O.state.pointShadowMap,Le.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=ke,H.uniformsList=null,ke}function Lu(y){if(y.uniformsList===null){const F=y.currentProgram.getUniforms();y.uniformsList=io.seqWithValue(F.seq,y.uniforms)}return y.uniformsList}function Du(y,F){const z=Se.get(y);z.outputColorSpace=F.outputColorSpace,z.batching=F.batching,z.batchingColor=F.batchingColor,z.instancing=F.instancing,z.instancingColor=F.instancingColor,z.instancingMorph=F.instancingMorph,z.skinning=F.skinning,z.morphTargets=F.morphTargets,z.morphNormals=F.morphNormals,z.morphColors=F.morphColors,z.morphTargetsCount=F.morphTargetsCount,z.numClippingPlanes=F.numClippingPlanes,z.numIntersection=F.numClipIntersection,z.vertexAlphas=F.vertexAlphas,z.vertexTangents=F.vertexTangents,z.toneMapping=F.toneMapping}function bp(y,F,z,H,O){F.isScene!==!0&&(F=Ce),$e.resetTextureUnits();const ne=F.fog,he=H.isMeshStandardMaterial?F.environment:null,xe=D===null?M.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:fs,ge=(H.isMeshStandardMaterial?Nt:Yt).get(H.envMap||he),Ue=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,ke=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Le=!!z.morphAttributes.position,Qe=!!z.morphAttributes.normal,pt=!!z.morphAttributes.color;let It=ki;H.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(It=M.toneMapping);const bt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,vt=bt!==void 0?bt.length:0,De=Se.get(H),Lt=p.state.lights;if(ut===!0&&(j===!0||y!==S)){const ln=y===S&&H.id===E;ae.setState(H,y,ln)}let at=!1;H.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Lt.state.version||De.outputColorSpace!==xe||O.isBatchedMesh&&De.batching===!1||!O.isBatchedMesh&&De.batching===!0||O.isBatchedMesh&&De.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&De.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&De.instancing===!1||!O.isInstancedMesh&&De.instancing===!0||O.isSkinnedMesh&&De.skinning===!1||!O.isSkinnedMesh&&De.skinning===!0||O.isInstancedMesh&&De.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&De.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&De.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&De.instancingMorph===!1&&O.morphTexture!==null||De.envMap!==ge||H.fog===!0&&De.fog!==ne||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ae.numPlanes||De.numIntersection!==ae.numIntersection)||De.vertexAlphas!==Ue||De.vertexTangents!==ke||De.morphTargets!==Le||De.morphNormals!==Qe||De.morphColors!==pt||De.toneMapping!==It||De.morphTargetsCount!==vt)&&(at=!0):(at=!0,De.__version=H.version);let Sn=De.currentProgram;at===!0&&(Sn=fa(H,F,O));let Ur=!1,bn=!1,Es=!1;const Dt=Sn.getUniforms(),Dn=De.uniforms;if(ye.useProgram(Sn.program)&&(Ur=!0,bn=!0,Es=!0),H.id!==E&&(E=H.id,bn=!0),Ur||S!==y){ye.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Dt.setValue(P,"projectionMatrix",y.projectionMatrix),Dt.setValue(P,"viewMatrix",y.matrixWorldInverse);const mn=Dt.map.cameraPosition;mn!==void 0&&mn.setValue(P,ve.setFromMatrixPosition(y.matrixWorld)),Be.logarithmicDepthBuffer&&Dt.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Dt.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,bn=!0,Es=!0)}if(O.isSkinnedMesh){Dt.setOptional(P,O,"bindMatrix"),Dt.setOptional(P,O,"bindMatrixInverse");const ln=O.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Dt.setValue(P,"boneTexture",ln.boneTexture,$e))}O.isBatchedMesh&&(Dt.setOptional(P,O,"batchingTexture"),Dt.setValue(P,"batchingTexture",O._matricesTexture,$e),Dt.setOptional(P,O,"batchingIdTexture"),Dt.setValue(P,"batchingIdTexture",O._indirectTexture,$e),Dt.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&Dt.setValue(P,"batchingColorTexture",O._colorsTexture,$e));const In=z.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&ie.update(O,z,Sn),(bn||De.receiveShadow!==O.receiveShadow)&&(De.receiveShadow=O.receiveShadow,Dt.setValue(P,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Dn.envMap.value=ge,Dn.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&F.environment!==null&&(Dn.envMapIntensity.value=F.environmentIntensity),bn&&(Dt.setValue(P,"toneMappingExposure",M.toneMappingExposure),De.needsLights&&Ep(Dn,Es),ne&&H.fog===!0&&Z.refreshFogUniforms(Dn,ne),Z.refreshMaterialUniforms(Dn,H,V,se,p.state.transmissionRenderTarget[y.id]),io.upload(P,Lu(De),Dn,$e)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(io.upload(P,Lu(De),Dn,$e),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Dt.setValue(P,"center",O.center),Dt.setValue(P,"modelViewMatrix",O.modelViewMatrix),Dt.setValue(P,"normalMatrix",O.normalMatrix),Dt.setValue(P,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const ln=H.uniformsGroups;for(let mn=0,ko=ln.length;mn<ko;mn++){const Ji=ln[mn];We.update(Ji,Sn),We.bind(Ji,Sn)}}return Sn}function Ep(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function wp(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(y,F,z){const H=Se.get(y);H.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Se.get(y.texture).__webglTexture=F,Se.get(y.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:z,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,F){const z=Se.get(y);z.__webglFramebuffer=F,z.__useDefaultFramebuffer=F===void 0};const Tp=P.createFramebuffer();this.setRenderTarget=function(y,F=0,z=0){D=y,A=F,L=z;let H=!0,O=null,ne=!1,he=!1;if(y){const ge=Se.get(y);if(ge.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(P.FRAMEBUFFER,null),H=!1;else if(ge.__webglFramebuffer===void 0)$e.setupRenderTarget(y);else if(ge.__hasExternalTextures)$e.rebindTextures(y,Se.get(y.texture).__webglTexture,Se.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Le=y.depthTexture;if(ge.__boundDepthTexture!==Le){if(Le!==null&&Se.has(Le)&&(y.width!==Le.image.width||y.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");$e.setupDepthRenderbuffer(y)}}const Ue=y.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(he=!0);const ke=Se.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(ke[F])?O=ke[F][z]:O=ke[F],ne=!0):y.samples>0&&$e.useMultisampledRTT(y)===!1?O=Se.get(y).__webglMultisampledFramebuffer:Array.isArray(ke)?O=ke[z]:O=ke,I.copy(y.viewport),B.copy(y.scissor),G=y.scissorTest}else I.copy(Pe).multiplyScalar(V).floor(),B.copy(Ke).multiplyScalar(V).floor(),G=Mt;if(z!==0&&(O=Tp),ye.bindFramebuffer(P.FRAMEBUFFER,O)&&H&&ye.drawBuffers(y,O),ye.viewport(I),ye.scissor(B),ye.setScissorTest(G),ne){const ge=Se.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,ge.__webglTexture,z)}else if(he){const ge=F;for(let Ue=0;Ue<y.textures.length;Ue++){const ke=Se.get(y.textures[Ue]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ue,ke.__webglTexture,z,ge)}}else if(y!==null&&z!==0){const ge=Se.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ge.__webglTexture,z)}E=-1},this.readRenderTargetPixels=function(y,F,z,H,O,ne,he,xe=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Se.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&he!==void 0&&(ge=ge[he]),ge){ye.bindFramebuffer(P.FRAMEBUFFER,ge);try{const Ue=y.textures[xe],ke=Ue.format,Le=Ue.type;if(!Be.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=y.width-H&&z>=0&&z<=y.height-O&&(y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+xe),P.readPixels(F,z,H,O,we.convert(ke),we.convert(Le),ne))}finally{const Ue=D!==null?Se.get(D).__webglFramebuffer:null;ye.bindFramebuffer(P.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(y,F,z,H,O,ne,he,xe=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Se.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&he!==void 0&&(ge=ge[he]),ge)if(F>=0&&F<=y.width-H&&z>=0&&z<=y.height-O){ye.bindFramebuffer(P.FRAMEBUFFER,ge);const Ue=y.textures[xe],ke=Ue.format,Le=Ue.type;if(!Be.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Qe),P.bufferData(P.PIXEL_PACK_BUFFER,ne.byteLength,P.STREAM_READ),y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+xe),P.readPixels(F,z,H,O,we.convert(ke),we.convert(Le),0);const pt=D!==null?Se.get(D).__webglFramebuffer:null;ye.bindFramebuffer(P.FRAMEBUFFER,pt);const It=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Nm(P,It,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Qe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ne),P.deleteBuffer(Qe),P.deleteSync(It),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,F=null,z=0){const H=Math.pow(2,-z),O=Math.floor(y.image.width*H),ne=Math.floor(y.image.height*H),he=F!==null?F.x:0,xe=F!==null?F.y:0;$e.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,z,0,0,he,xe,O,ne),ye.unbindTexture()};const Ap=P.createFramebuffer(),Rp=P.createFramebuffer();this.copyTextureToTexture=function(y,F,z=null,H=null,O=0,ne=null){ne===null&&(O!==0?(Ks("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=O,O=0):ne=0);let he,xe,ge,Ue,ke,Le,Qe,pt,It;const bt=y.isCompressedTexture?y.mipmaps[ne]:y.image;if(z!==null)he=z.max.x-z.min.x,xe=z.max.y-z.min.y,ge=z.isBox3?z.max.z-z.min.z:1,Ue=z.min.x,ke=z.min.y,Le=z.isBox3?z.min.z:0;else{const In=Math.pow(2,-O);he=Math.floor(bt.width*In),xe=Math.floor(bt.height*In),y.isDataArrayTexture?ge=bt.depth:y.isData3DTexture?ge=Math.floor(bt.depth*In):ge=1,Ue=0,ke=0,Le=0}H!==null?(Qe=H.x,pt=H.y,It=H.z):(Qe=0,pt=0,It=0);const vt=we.convert(F.format),De=we.convert(F.type);let Lt;F.isData3DTexture?($e.setTexture3D(F,0),Lt=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?($e.setTexture2DArray(F,0),Lt=P.TEXTURE_2D_ARRAY):($e.setTexture2D(F,0),Lt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);const at=P.getParameter(P.UNPACK_ROW_LENGTH),Sn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ur=P.getParameter(P.UNPACK_SKIP_PIXELS),bn=P.getParameter(P.UNPACK_SKIP_ROWS),Es=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,bt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,bt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ue),P.pixelStorei(P.UNPACK_SKIP_ROWS,ke),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Le);const Dt=y.isDataArrayTexture||y.isData3DTexture,Dn=F.isDataArrayTexture||F.isData3DTexture;if(y.isDepthTexture){const In=Se.get(y),ln=Se.get(F),mn=Se.get(In.__renderTarget),ko=Se.get(ln.__renderTarget);ye.bindFramebuffer(P.READ_FRAMEBUFFER,mn.__webglFramebuffer),ye.bindFramebuffer(P.DRAW_FRAMEBUFFER,ko.__webglFramebuffer);for(let Ji=0;Ji<ge;Ji++)Dt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Se.get(y).__webglTexture,O,Le+Ji),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Se.get(F).__webglTexture,ne,It+Ji)),P.blitFramebuffer(Ue,ke,he,xe,Qe,pt,he,xe,P.DEPTH_BUFFER_BIT,P.NEAREST);ye.bindFramebuffer(P.READ_FRAMEBUFFER,null),ye.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(O!==0||y.isRenderTargetTexture||Se.has(y)){const In=Se.get(y),ln=Se.get(F);ye.bindFramebuffer(P.READ_FRAMEBUFFER,Ap),ye.bindFramebuffer(P.DRAW_FRAMEBUFFER,Rp);for(let mn=0;mn<ge;mn++)Dt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,In.__webglTexture,O,Le+mn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,In.__webglTexture,O),Dn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ln.__webglTexture,ne,It+mn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ln.__webglTexture,ne),O!==0?P.blitFramebuffer(Ue,ke,he,xe,Qe,pt,he,xe,P.COLOR_BUFFER_BIT,P.NEAREST):Dn?P.copyTexSubImage3D(Lt,ne,Qe,pt,It+mn,Ue,ke,he,xe):P.copyTexSubImage2D(Lt,ne,Qe,pt,Ue,ke,he,xe);ye.bindFramebuffer(P.READ_FRAMEBUFFER,null),ye.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Dn?y.isDataTexture||y.isData3DTexture?P.texSubImage3D(Lt,ne,Qe,pt,It,he,xe,ge,vt,De,bt.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(Lt,ne,Qe,pt,It,he,xe,ge,vt,bt.data):P.texSubImage3D(Lt,ne,Qe,pt,It,he,xe,ge,vt,De,bt):y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ne,Qe,pt,he,xe,vt,De,bt.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ne,Qe,pt,bt.width,bt.height,vt,bt.data):P.texSubImage2D(P.TEXTURE_2D,ne,Qe,pt,he,xe,vt,De,bt);P.pixelStorei(P.UNPACK_ROW_LENGTH,at),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Sn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ur),P.pixelStorei(P.UNPACK_SKIP_ROWS,bn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Es),ne===0&&F.generateMipmaps&&P.generateMipmap(Lt),ye.unbindTexture()},this.initRenderTarget=function(y){Se.get(y).__webglFramebuffer===void 0&&$e.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?$e.setTextureCube(y,0):y.isData3DTexture?$e.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?$e.setTexture2DArray(y,0):$e.setTexture2D(y,0),ye.unbindTexture()},this.resetState=function(){A=0,L=0,D=null,ye.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}}const oM={R:9},Ve={maxHp:5,moveSpeed:4.2,waterSlow:.45,dashDist:3.4,dashTime:.2,iframe:.15,tapDashMin:2,tapDashMax:5.5,lockRange:7,stamMax:3,stamRegen:.8,guardHold:.21,parryTime:.45,perfectEarly:.25,perfectLate:.15,parryArc:.36,jumpTime:.6,hurtInvuln:1.2,knockback:1.2},wt={ink:21,min:50,step:.3,baseV:18,gUp:80,gDown:160,vMin:4,vMax:48,charge:.8,start:10,lakeCost:.35,dmg:4,hitR:.8,blastR:3.2,blastDmg:6},ri={hit:2,kill:0,parry:10,perfect:30,evade:20,jumpRing:8,crystal:12,crystalPay:5},kd={every:2,amount:1},on={grunt:{hp:3,r:.45,speed:1.6,pref:2.1,range:3.1,pts:100,kb:5,whirlTime:2.2,whirlSpeed:1.7,whirlR:.95,whirlDizzy:1},brute:{hp:9,r:.85,speed:.85,pref:1.9,range:3.6,pts:400,kb:1.6,swingR:2.9,swingArc:.6},boulder:{hp:6,r:.6,speed:1.15,pref:3.6,range:5,pts:300,kb:2.2,rollSpeed:12,rollLen:3.4,rolls:3,followWarn:[.5,.38],armor:.34,dizzy:1.8},jelly:{hp:4,r:.55,speed:.7,pref:4,range:7.5,pts:250,kb:1,aquatic:!0,diveRange:9,pulseRange:3},archer:{hp:2.5,r:.42,speed:1.5,pref:6,range:8.5,pts:200,kb:5,shotSpeed:11,shotLen:11,flee:3},shell:{hp:6,r:.6,speed:1,pref:1.8,range:2.9,pts:350,kb:1.4,turn:1.5,front:.35,lineLen:2.6,lineW:.85},hopper:{hp:3.5,r:.48,speed:1.2,pref:4,range:6.5,pts:250,kb:3,hops:2,hopR:1.25},shroom:{hp:4,r:.55,speed:.25,pref:5.5,range:9,pts:300,kb:2,spores:3,heal:1.5,healR:3.5},bee:{hp:1,r:.3,speed:2.6,pref:1.5,range:3,pts:60,kb:6,lineLen:2.6,lineW:.4,fly:!0},splitter:{hp:5,r:.55,speed:1.1,pref:2.4,range:4.2,pts:300,kb:2.5,hops:1,hopR:1.1,split:"blobling"},boss:{hp:48,r:1.35,speed:.75,pref:2.6,range:5.2,pts:3e3,kb:.5,rollSpeed:11}},Tn=(n,e)=>({...on[n],base:n,...e});Object.assign(on,{frostGrunt:Tn("grunt",{hp:3.5,chill:!0,pal:[7325934,1063514,2973568]}),frostBrute:Tn("brute",{hp:10,doubleRing:!0,pal:[8238824,1324384,13625855]}),frostArcher:Tn("archer",{hp:3,volley:3,pal:[10474734,2973568]}),sandGrunt:Tn("grunt",{hp:3,burrow:!0,pal:[14262860,4860422,8016420]}),sandBoulder:Tn("boulder",{hp:5,r:.52,rolls:4,rollSpeed:14,followWarn:[.5,.42,.36],pal:[13015648,2759176]}),lavaGrunt:Tn("grunt",{hp:3,blast:!0,pal:[16738858,8001536,3807760]}),lavaBrute:Tn("brute",{hp:11,burnSlam:!0,pal:[4864578,8003584,16751164]}),magmaJelly:Tn("jelly",{hp:6,r:.65,pal:[16742960,16726544]}),blobling:Tn("splitter",{hp:1.5,r:.32,speed:1.9,pref:1.4,range:2.6,pts:80,kb:5,split:null,model:"blobling",lineLen:2.2,lineW:.4}),rockKing:Tn("boss",{hp:72,model:"rock"}),frostQueen:Tn("boss",{hp:105,r:1.15,model:"queen",pref:3.4,range:7}),sandWyrm:Tn("boss",{hp:125,r:1.2,model:"wyrm",speed:.9,range:8}),lavaTitan:Tn("boss",{hp:155,r:1.6,model:"titan",speed:.6,range:8})});const lM={grunt:"長矛兵",brute:"巨魔",boulder:"滾石",jelly:"水母",archer:"弓手",shell:"盾甲蟲",hopper:"跳跳蛙",shroom:"蘑菇法師",bee:"蜂群",splitter:"分裂泥球"},gr={minTier:3,base:.03,perTier:.02,maxChance:.22,perWave:[1,2],twoFrom:7,skip:["bee","splitter"]},Mi={iceGrip:1.7,spikeGrip:8,burnDelay:.3,stormCalm:13,stormWarn:2.5,stormLen:8},_n={warnBase:1.2,warnMin:.7,warnStep:.06,cdMin:2.2,cdRand:1.8,stunPerfect:2.6,stunNormal:0,hitstop:.05,killHitstop:.06,grace:2.2,comboTime:3},Ie=N,Zs=Ar,Wi=new Ie(0,1,0),qe=oM.R,Q=n=>document.getElementById(n),Kt=(n,e,t)=>Math.max(e,Math.min(t,n));function ef(n){return()=>(n=n*16807%2147483647)/2147483647}const li=(n=Math.random)=>{const e=n()*2-1,t=n()*Math.PI*2,i=Math.sqrt(1-e*e);return new Ie(i*Math.cos(t),e,i*Math.sin(t))},Ot=(n,e)=>e.clone().addScaledVector(n,-e.dot(n)),ht=(n,e,t)=>n.clone().multiplyScalar(qe).addScaledVector(e,t).normalize(),zt=(n,e)=>Ot(n,new Ie().subVectors(e,n)).normalize();function la(n){const e=Ot(n,Math.abs(n.y)<.9?Wi:new Ie(1,0,0)).normalize();return[e,new Ie().crossVectors(n,e)]}const tf={grass:{id:"grass",seed:20261016,mountains:7,lakes:4,mtn:"peak",liquid:"water",tree:"pine",trees:110,rocks:42,flowers:150,ground:{bed:"#c2a46d",shore:"#ecd69c",low:"#7bd16a",mid:"#5bb85e",rock:"#8b8f9f",cap:"#f4f7ff"},liquidColor:3844336,leaf:3115598,trunk:8016434,rock:10132651,flower:[[1,1,1],[1,.8,.25]],sky:725040,atmo:6273279,hemi:[14085119,3812437,2.3],sun:[16773852,3.2]},ice:{id:"ice",seed:77123,mountains:8,lakes:7,lakeW:.1,mtn:"peak",liquid:"ice",tree:"snowPine",trees:90,rocks:50,flowers:120,ground:{bed:"#8fb8d8",shore:"#dbeaf6",low:"#eef5fb",mid:"#d6e6f4",rock:"#8798b4",cap:"#ffffff"},liquidColor:11134207,leaf:13099756,trunk:6123136,rock:10471142,flower:[[.6,.9,1],[1,1,1]],sky:661560,atmo:10477823,hemi:[15004927,4280956,2.5],sun:[15135487,3]},desert:{id:"desert",seed:40917,mountains:6,lakes:3,lakeW:-.1,mtn:"mesa",dunes:.16,liquid:"water",tree:"cactus",trees:70,rocks:60,flowers:60,storm:!0,ground:{bed:"#b78e55",shore:"#f2dca2",low:"#eac67c",mid:"#deb066",rock:"#b9734a",cap:"#d68f58"},liquidColor:3655360,leaf:5216858,trunk:4160070,rock:12618332,flower:[[.95,.4,.55],[1,.85,.3]],sky:1970736,atmo:16761466,hemi:[16773074,6963496,2.4],sun:[16770744,3.4]},volcano:{id:"volcano",seed:6155,mountains:6,lakes:3,lakeW:-.04,mtn:"crater",rivers:2,liquid:"lava",tree:"charred",trees:80,rocks:70,flowers:110,ground:{bed:"#2a1a18",shore:"#3a2b2d",low:"#4e4145",mid:"#3d3238",rock:"#2d262c",cap:"#ff7a30"},liquidColor:16734750,leaf:2761254,trunk:1840664,rock:3813944,flower:[[1,.45,.12],[1,.85,.3]],sky:1706e3,atmo:16738874,hemi:[16763048,4855840,2.1],sun:[16758928,2.9]}};let Jt=tf.grass,Bn=ef(Jt.seed);const ms=[];function zd(n,e,t){for(let i=0;i<e;i++){let r,s=0;do r=li(Bn),s++;while(s<60&&ms.some(a=>a.c.angleTo(r)<a.w+.45));ms.push(Object.assign({type:n,c:r},t()))}}function nf(n,e=0){const t=tf[n];Jt=e?{...t,variant:e,seed:t.seed+e*7919,lakes:Math.max(2,t.lakes+e%3-1),mountains:Math.max(4,t.mountains+(e+1)%3-1)}:t,Bn=ef(Jt.seed),ms.length=0,zd("m",Jt.mountains,()=>({h:1.6+Bn()*1.2,w:.27+Bn()*.12})),zd("l",Jt.lakes,()=>({h:-1.2,w:.3+(Jt.lakeW||0)+Bn()*.14}));for(let i=0;i<(Jt.rivers||0);i++){const r=li(Bn),[s,a]=la(r);ms.push({type:"r",c:r,e1:s,e2:a,w:.085,h:1.3,ph:Bn()*6.28,gaps:3})}}nf("grass");function cM(n,e){return Jt.mtn==="mesa"?n.h*.62*Math.min(1,(1-e)*2.4):Jt.mtn==="crater"?n.h*(1-e)**1.3-(e<.24?n.h*.55*(1-e/.24)**2:0):n.h*(1-e)**1.7}function uM(n,e){const t=n.dot(e.e1),i=n.dot(e.e2),r=Math.atan2(i,t),s=n.dot(e.c)+.09*Math.sin(r*5+e.ph);return Math.abs(s)>=e.w?0:-e.h*(1-(s/e.w)**2)*Kt(Math.sin(r*e.gaps+e.ph)*3+2.1,0,1)}function Zn(n){let e=.3+.24*Math.sin(n.x*3.1+1.3)*Math.sin(n.y*2.7+.4)*Math.cos(n.z*3.4+.9);Jt.dunes&&(e+=Jt.dunes*Math.sin(n.x*8+n.z*5+1)*Math.sin(n.y*7-n.z*3));for(const t of ms){if(t.type==="r"){e+=uM(n,t);continue}const i=Math.acos(Kt(n.dot(t.c),-1,1));if(i>=t.w)continue;const r=i/t.w;e+=t.type==="m"?cM(t,r):t.h*(1-r*r)}return e}const an=n=>Math.max(0,Zn(n)),zn=n=>n.clone().multiplyScalar(qe+an(n)),rf=n=>Zn(n)<0,hn=n=>Zn(n)<0&&Jt.liquid!=="ice",gc=n=>Zn(n)<0?Jt.liquid:"ground";function sf(n,e,t,i){const[r,s]=la(n);for(let a=e;a<=t;a+=.05)for(let o=0;o<24;o++){const l=o/24*Math.PI*2,c=n.clone().multiplyScalar(Math.cos(a)).addScaledVector(r,Math.sin(a)*Math.cos(l)).addScaledVector(s,Math.sin(a)*Math.sin(l));if(i(Zn(c)))return c}return null}const af=(n,e=.3,t=Math.PI)=>sf(n,e,t,i=>i<-.08),dM=(n,e=.05,t=Math.PI)=>sf(n,e,t,i=>i>.08),_c=(n,e)=>(an(ht(n,e,.3))-an(n))/.3,vc=matchMedia("(pointer: coarse)").matches,Fi={level:vc?1:2,pixelRatio:Math.min(devicePixelRatio,vc?1.75:2)},ci=new aM({antialias:!0,powerPreference:"high-performance"});ci.setPixelRatio(Fi.pixelRatio);ci.shadowMap.enabled=!0;ci.shadowMap.type=Pc;document.body.prepend(ci.domElement);const yn=new a0;yn.background=new Re(725040);const St=new On(40,1,.1,600),ro=new Ie(0,.08,1).normalize(),lt=new et;yn.add(lt);const so=new v0(14085119,3812437,2.3);yn.add(so);const vn=new y0(16773852,3.2);vn.position.set(-9,-5,24);vn.castShadow=!0;vn.shadow.mapSize.setScalar(vc?1024:2048);Object.assign(vn.shadow.camera,{left:-14,right:14,top:14,bottom:-14,near:1,far:70});vn.shadow.bias=-6e-4;vn.shadow.normalBias=.04;yn.add(vn);{const n=new Bt,e=[],t=[],i=new Re,r=new Ie(.3,1,-.2).normalize();for(let s=0;s<1400;s++){let a=li();s<600&&a.addScaledVector(r,-a.dot(r)*.85).normalize(),a.multiplyScalar(140+Math.random()*110),e.push(a.x,a.y,a.z),i.setHSL(.6+Math.random()*.15,.5,.65+Math.random()*.3),t.push(i.r,i.g,i.b)}n.setAttribute("position",new Je(e,3)),n.setAttribute("color",new Je(t,3)),yn.add(new p0(n,new Wh({size:.8,vertexColors:!0,transparent:!0,opacity:.85,sizeAttenuation:!0,depthWrite:!1})))}const zi=new et;yn.add(zi);{const n=(r,s=0)=>new Pn({color:r,emissive:s,flatShading:!0,roughness:.9}),e=new ee(new pn(4.2,1),n(7307192,1055296));e.userData.at=[-.64,.46],zi.add(e);const t=new et;t.userData.at=[.66,.38],zi.add(t),t.add(new ee(new pn(2.6,1),n(5222026,731688)));const i=new ee(new Lr(3.6,4.8,40),new Pt({color:14207487,transparent:!0,opacity:.55,side:Qt}));i.rotation.set(1.2,.3,0),t.add(i);for(let r=0;r<9;r++){const s=new ee(new oa(.3+Math.random()*.7,0),n(8224658));s.position.set((Math.random()-.5)*60,14+Math.random()*22,-90-Math.random()*30),s.userData.spin=new Ie(Math.random(),Math.random(),Math.random()).multiplyScalar(.3),zi.add(s)}}const of=new ee(new gt(qe+3.2,48,32),new Pt({color:6273279,transparent:!0,opacity:.12,side:fn,blending:lo,depthWrite:!1,fog:!1}));yn.add(of);yn.fog=new Gc(14200944,400,600);const xc=new Re,hM=new Re(13212252);let Mc=14;function fM(n){xc.set(n.sky),yn.background.copy(xc),of.material.color.set(n.atmo),so.color.set(n.hemi[0]),so.groundColor.set(n.hemi[1]),so.intensity=n.hemi[2],vn.color.set(n.sun[0]),vn.intensity=n.sun[1]}function lf(n){yn.fog.near=n>0?Mc+12*(1-n)-3.5:400,yn.fog.far=n>0?Mc+40*(1-n)+2.5:600,yn.background.copy(xc).lerp(hM,n)}function pM(n){for(const e of zi.children)e.userData.spin&&(e.rotation.x+=e.userData.spin.x*n,e.rotation.y+=e.userData.spin.y*n)}const Hs=new Ie,qn={kick:new Ie,punch:0};function jc(n,e){const t=n.clone().applyQuaternion(lt.quaternion),i=new Ie(1,0,0).applyQuaternion(St.quaternion),r=new Ie(0,1,0).applyQuaternion(St.quaternion);qn.kick.x=hc.clamp(qn.kick.x+t.dot(i)*e,-.5,.5),qn.kick.y=hc.clamp(qn.kick.y+t.dot(r)*e,-.5,.5)}const cf=n=>{qn.punch=Math.max(qn.punch,n)};function Kc(){const n=innerWidth,e=innerHeight;ci.setSize(n,e),St.aspect=n/e;const t=St.aspect<1?1.25/Math.sqrt(St.aspect):1,i=ro.clone().multiplyScalar(qe+.3),r=Ot(ro,new Ie(0,-1,0)).normalize();Hs.copy(i).addScaledVector(ro,10.5*t).addScaledVector(r,7*t),St.position.copy(Hs),St.lookAt(i.clone().addScaledVector(r,-2)),St.updateProjectionMatrix(),Mc=Hs.distanceTo(i),zi.position.copy(St.position),zi.quaternion.copy(St.quaternion);const s=100*Math.tan(hc.degToRad(St.fov/2)),a=s*St.aspect;for(const o of zi.children)o.userData.at&&o.position.set(o.userData.at[0]*a,o.userData.at[1]*s,-100)}addEventListener("resize",Kc);Kc();const Hd=new Zs,Gd=new Zs;function Vd(n,e,t){const i=n.clone().applyQuaternion(lt.quaternion).normalize();Hd.setFromUnitVectors(i,ro),Gd.identity().slerp(Hd,1-Math.exp(-e*t)),lt.quaternion.premultiply(Gd)}const uf=n=>n.applyQuaternion(lt.quaternion.clone().invert());let Ha=0,_l=0;function mM(n){if(Ha+=n,_l++,Ha<4)return;const e=_l/Ha;Ha=0,_l=0,e<48&&Fi.pixelRatio>1?(Fi.pixelRatio=Math.max(1,Fi.pixelRatio-.5),ci.setPixelRatio(Fi.pixelRatio),Kc()):e<40&&vn.shadow.mapSize.x>512&&(vn.shadow.mapSize.setScalar(vn.shadow.mapSize.x/2),vn.shadow.map?.dispose(),vn.shadow.map=null)}function Gs(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},a={},o=n[0].morphTargetsRelative,l=new Bt;let c=0;for(let u=0;u<n.length;++u){const d=n[u];let h=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(d.attributes[f]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0;const d=[];for(let h=0;h<n.length;++h){const f=n[h].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+u);u+=n[h].attributes.position.count}l.setIndex(d)}for(const u in s){const d=Wd(s[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(const u in a){const d=a[u][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){const f=[];for(let x=0;x<a[u].length;++x)f.push(a[u][x][h]);const g=Wd(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Wd(n){let e,t,i,r=-1,s=0;for(let c=0;c<n.length;++c){const u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const a=new e(s),o=new Mn(a,t,i);let l=0;for(let c=0;c<n.length;++c){const u=n[c];if(u.isInterleavedBufferAttribute){const d=l/t;for(let h=0,f=u.count;h<f;h++)for(let g=0;g<t;g++){const x=u.getComponent(h,g);o.setComponent(h+d,g,x)}}else a.set(u.array,l);l+=u.count*t}return r!==void 0&&(o.gpuType=r),o}const Sr=new et;lt.add(Sr);const Zc=[],Jc=[],gM=(n,e)=>{for(const t of Jc)t.setMatrixAt(n,e),t.instanceMatrix.needsUpdate=!0};let po=null;function _M(n){const e=new pn(1,Fi.level>1?38:30),t=e.attributes.position,i=[],r=new Re,s=[],a=n.ground;for(let d=0;d<t.count;d++){const h=new Ie().fromBufferAttribute(t,d).normalize(),f=Zn(h);s.push(f);const g=qe+(f<0?f-.2:f);t.setXYZ(d,h.x*g,h.y*g,h.z*g)}for(let d=0;d<t.count;d+=3){const h=(s[d]+s[d+1]+s[d+2])/3,f=Math.sin(d*12.9898)*43758.5%1*.06;h<0?r.set(a.bed).offsetHSL(0,0,-.12+h*.1):h<.12?r.set(a.shore):h<1.05?r.set(h<.5?a.low:a.mid):h<1.85?r.set(a.rock):r.set(a.cap),r.offsetHSL(0,0,f-.03);for(let g=0;g<3;g++)i.push(r.r,r.g,r.b)}e.setAttribute("color",new Je(i,3)),e.computeVertexNormals();const o=new ee(e,new Pn({vertexColors:!0,flatShading:!0,roughness:.92}));o.castShadow=o.receiveShadow=!0,Sr.add(o);const l=n.liquid==="lava",c=n.liquid==="ice";po=new Pn({color:n.liquidColor,transparent:!l,opacity:c?.95:.82,roughness:c?.3:.15,metalness:.1,flatShading:!0,emissive:l?16726536:0,emissiveIntensity:l?1.2:0});const u=new ee(new pn(qe,Fi.level>1?22:16),po);u.receiveShadow=!0,Sr.add(u)}function yc(n,e,t,i,r,s){const a=new Vc(n,e,t),o=new ct,l=new Zs,c=new Zs;let u=0;for(let d=0;d<t*40&&u<t;d++){const h=li(Bn),f=Zn(h);if(!i(f))continue;const g=r();l.setFromUnitVectors(Wi,h).multiply(c.setFromAxisAngle(Wi,Bn()*6.28));const x=h.clone().multiplyScalar(qe+Math.max(f,0)-.05);o.compose(x,l,new Ie(g,g,g)),a.setMatrixAt(u,o),s?.(h,x,g,u,l.clone()),u++}return a.count=u,a.castShadow=!0,a.receiveShadow=!0,Sr.add(a),a}const df={pine(){const n=new Wt(.3,.5,6);n.translate(0,.45,0);const e=new Wt(.22,.42,6);e.translate(0,.74,0);const t=new gn(.05,.08,.26,5);return t.translate(0,.13,0),{leaf:Gs([n,e]),trunk:t}},snowPine(){return df.pine()},cactus(){const n=new gn(.09,.11,.8,6);n.translate(0,.4,0);const e=(i,r,s)=>{const a=new gn(.05,.055,.3,5);return a.translate(0,.15,0),a.rotateZ(s),a.translate(i,r,0),a},t=new gn(.11,.12,.06,6);return t.translate(0,.03,0),{leaf:Gs([n,e(.08,.38,-1.1),e(-.08,.5,1),e(.32,.5,0),e(-.31,.6,0)]),trunk:t}},charred(){const n=(t,i,r)=>{const s=new Wt(.03,r,4);return s.translate(0,r/2,0),s.rotateZ(i),s.translate(0,t,0),s},e=new gn(.03,.09,.75,5);return e.translate(0,.37,0),{leaf:Gs([n(.4,-.8,.4),n(.5,.9,.34),n(.6,-.5,.28),n(.25,1.1,.3)]),trunk:e}}};function vM(n){const{leaf:e,trunk:t}=df[n.tree](),i=yc(e,new Pn({color:n.leaf,flatShading:!0,roughness:.8}),n.trees,a=>a>=.15&&a<=1,()=>.75+Bn()*.7,(a,o,l,c,u)=>Zc.push({d:a.clone(),p:o,s:l,i:c,q:u,tilt:0,tv:0,axis:new Ie(1,0,0)})),r=new Vc(t,new Pn({color:n.trunk,flatShading:!0}),n.trees),s=new ct;for(let a=0;a<i.count;a++)i.getMatrixAt(a,s),r.setMatrixAt(a,s);r.count=i.count,r.castShadow=!0,Sr.add(r),Jc.push(i,r)}function xM(n){const e=n.id==="ice"?new Wt(.14,.55,5):new oa(.22,0);n.id==="ice"&&e.translate(0,.22,0),yc(e,new Pn({color:n.rock,flatShading:!0,roughness:n.id==="ice"?.25:.95}),n.rocks,c=>c>.02&&c<1.4,()=>.6+Bn()*1.3);const t=new Ti(.06,0);t.scale(1,.4,1),t.translate(0,.06,0);const i=new Ti(.03,0);i.translate(0,.09,0);const r=t.attributes.position.count,s=i.attributes.position.count,[a,o]=n.flower;t.setAttribute("color",new Je(new Array(r).fill(0).flatMap(()=>a),3)),i.setAttribute("color",new Je(new Array(s).fill(0).flatMap(()=>o),3));const l=yc(Gs([t,i]),new Pn({vertexColors:!0,flatShading:!0,emissive:n.liquid==="lava"?16730640:0,emissiveIntensity:.8}),n.flowers,c=>c>.14&&c<.9,()=>.8+Bn()*.6);l.castShadow=!1}const MM={day:n=>n,dusk:n=>({...n,sky:gi(n.sky,3807288,.6),atmo:gi(n.atmo,16747098,.5),hemi:[gi(n.hemi[0],16758928,.45),n.hemi[1],n.hemi[2]*.9],sun:[gi(n.sun[0],16751194,.55),n.sun[1]*.9]}),night:n=>({...n,sky:gi(n.sky,132110,.6),atmo:gi(n.atmo,4872959,.45),hemi:[gi(n.hemi[0],9085183,.5),gi(n.hemi[1],1052720,.5),n.hemi[2]*.72],sun:[gi(n.sun[0],11057407,.6),n.sun[1]*.62]})},Xd=["day","dusk","day","night","day","dusk","night","dusk"];function gi(n,e,t){return new Re(n).lerp(new Re(e),t).getHex()}const yM=n=>Xd[n%Xd.length];let Ii={id:null,variant:0};function hf(n,e=0,t="day"){Ii={id:n,variant:e,light:t},Sr.traverse(r=>{r.isMesh&&(r.geometry.dispose(),r.material.dispose(),r.dispose?.())}),Sr.clear(),Zc.length=0,Jc.length=0,nf(n,e);const i=Jt;fM(MM[t](i)),_M(i),vM(i),xM(i)}function SM(n){Jt.liquid==="lava"&&po&&(po.emissiveIntensity=1.15+Math.sin(n*2.2)*.3)}hf("grass");const _={state:"title",mode:"play",wave:0,score:0,graceT:0,waveClearing:!1,endless:!1,ts:1,hitstop:0,shake:0,slowT:0,combo:0,comboT:0,bestCombo:0,ult:0,stamina:0,enemies:[],warnings:[],crystals:[],crystalT:6,shots:[],hazards:[],level:null,waves:[],tier:1,hpMul:1,storm:0,runCrystals:0,passives:new Set,ultKind:"line",undyingUsed:!1,tut:null,runTime:0,hurtCount:0,boss:null,runId:0,move:{sx:0,sy:0,m:0}};let Vs=[];const br=(n,e)=>{Vs.push({t:n,fn:e})};function bM(n){if(!Vs.length)return;const e=[];Vs=Vs.filter(t=>(t.t-=n)>0||(e.push(t),!1)),e.forEach(t=>t.fn())}const ff=()=>{Vs=[]},Ns=new Map,Vt=(n,e)=>(Ns.has(n)||Ns.set(n,new Set),Ns.get(n).add(e),()=>Ns.get(n).delete(e)),$t=(n,e)=>Ns.get(n)?.forEach(t=>t(e)),ao=Q("combo"),Ga=Q("tag"),Va=Q("banner"),qd=Q("flash"),EM=Q("jumpBtn"),$d=Q("ultBtn");let pf=[];const Wa=Q("dots"),Yd=Q("lives"),wM='<svg viewBox="0 0 24 22"><path d="M12 21 2.6 11.7A5.6 5.6 0 0 1 12 4.1a5.6 5.6 0 0 1 9.4 7.6z"/></svg>';function TM(n){Q("stam").innerHTML="<i><b></b></i>".repeat(n),pf=[...document.querySelectorAll("#stam b")]}function $i(n){Q("score").textContent=_.score.toLocaleString(),Q("runGems").textContent=_.runCrystals?`◆ ${_.runCrystals}`:"";const e=Math.max(0,n.hp);if(Yd.innerHTML=Array.from({length:Ve.maxHp},(r,s)=>`<i class="${s<e?"":"off"}">${wM}</i>`).join(""),Yd.setAttribute("aria-label",`生命 ${e} / ${Ve.maxHp}`),_.tut){Wa.innerHTML='<span class="lbl">教學</span>';return}if(_.endless){Wa.innerHTML=`<span class="lbl">無盡</span><b>${_.wave}</b>`;return}const t=_.waves.length,i=_.level?.boss;Wa.innerHTML=Array.from({length:t},(r,s)=>`<i class="${s+1<_.wave?"done":s+1===_.wave?"now":""}${i&&s===t-1?" boss":""}"></i>`).join(""),Wa.setAttribute("aria-label",`第 ${_.wave} / ${t} 波`)}function jd(){_.combo<2||(ao.innerHTML=`${_.combo}<small>COMBO</small>`,ao.style.opacity=1,ao.animate([{transform:"scale(1.3)"},{transform:"scale(1)"}],{duration:140}))}let Kd=0;function st(n,e){Ga.textContent=n,Ga.style.color=e||"var(--ink)",Ga.style.opacity=1,clearTimeout(Kd),Kd=setTimeout(()=>Ga.style.opacity=0,800)}function Yi(n,e=""){Va.innerHTML=n+(e?`<small>${e}</small>`:""),Va.classList.remove("show"),Va.offsetWidth,Va.classList.add("show")}function gs(n,e){qd.style.background=e,qd.animate([{opacity:n},{opacity:0}],{duration:380})}const es=Q("coach");function Qc(n,e,t,i){if(!t){es.hidden=!0;return}es.hidden=!1,es.querySelector(".n").textContent=`${n} / ${e}`,es.querySelector("b").textContent=t,es.querySelector("p").innerHTML=i,es.animate([{transform:"translateX(-50%) scale(.92)",opacity:.3},{transform:"translateX(-50%) scale(1)",opacity:1}],{duration:220,easing:"ease-out"})}const mo=Q("boss"),AM=mo.querySelector("i"),RM=mo.querySelector("span");let Zd="";function CM(n){const e=_.state==="play"&&n?"alert":"";e!==Zd&&(EM.classList.toggle("alert",!!e),Zd=e),pf.forEach((i,r)=>i.style.transform=`scaleX(${Kt(_.stamina-r,0,1)})`),$d.style.setProperty("--p",_.ult),$d.classList.toggle("ready",_.ult>=wt.min&&_.mode==="play"),Q("vignette").style.opacity=_.mode==="ultDraw"||_.slowT>0?1:0,_.comboT<=0&&_.combo&&(_.combo=0,ao.style.opacity=0);const t=_.boss&&!_.boss.dead?_.boss:null;mo.hidden=!t,t&&(AM.style.transform=`scaleX(${Kt(t.hp/t.maxHp,0,1)})`,RM.textContent=t.script.name,mo.classList.toggle("armored",!!t.armored))}const Jd=Q("nums"),Xa=[];let PM=0;function LM(n,e,t=""){if(!Jd)return;const i=n.clone().applyQuaternion(lt.quaternion).project(St);if(i.z>1)return;if(Xa.length<12){const s=document.createElement("i");Jd.appendChild(s),Xa.push(s)}const r=Xa[PM++%Xa.length];r.textContent=e,r.className=t,r.style.left=(i.x+1)/2*innerWidth+(Math.random()-.5)*24+"px",r.style.top=(1-i.y)/2*innerHeight+"px",r.getAnimations().forEach(s=>s.cancel()),r.animate([{transform:"translate(-50%,-50%) scale(.6)",opacity:1},{transform:"translate(-50%,-110%) scale(1.15)",opacity:1,offset:.25},{transform:"translate(-50%,-220%) scale(1)",opacity:0}],{duration:t==="big"?750:600,easing:"cubic-bezier(.2,.8,.3,1)",fill:"forwards"})}let Gt=null,vr=null;const Ft={volume:0,lastVol:.6};try{const n=localStorage.getItem("slasharena-vol");n!==null&&(Ft.volume=Kt(+n||0,0,1))}catch{}function Ln(){if(!(Ft.volume<=0))try{Gt||(Gt=new(window.AudioContext||window.webkitAudioContext),vr=Gt.createGain(),vr.connect(Gt.destination)),vr.gain.value=Ft.volume,Gt.state==="suspended"&&Gt.resume()}catch{Gt=null}}function DM(n){vr&&(vr.gain.value=n)}function xt(n,e,t="triangle",i=.15,r=1){if(!Gt||Ft.volume<=0)return;const s=Gt.currentTime,a=Gt.createOscillator(),o=Gt.createGain();a.type=t,a.frequency.setValueAtTime(n,s),r!==1&&a.frequency.exponentialRampToValueAtTime(n*r,s+e),o.gain.setValueAtTime(i,s),o.gain.exponentialRampToValueAtTime(.001,s+e),a.connect(o).connect(vr),a.start(s),a.stop(s+e+.02)}let qa=null;function un(n,e,t,i){if(!Gt||Ft.volume<=0)return;const r=Gt.currentTime;if(!qa){qa=Gt.createBuffer(1,Gt.sampleRate,Gt.sampleRate);const l=qa.getChannelData(0);for(let c=0;c<l.length;c++)l[c]=Math.random()*2-1}const s=Gt.createBufferSource(),a=Gt.createBiquadFilter(),o=Gt.createGain();s.buffer=qa,a.type="bandpass",a.Q.value=1.2,a.frequency.setValueAtTime(t,r),a.frequency.exponentialRampToValueAtTime(i,r+n),o.gain.setValueAtTime(e,r),o.gain.exponentialRampToValueAtTime(.001,r+n),s.connect(a).connect(o).connect(vr),s.start(r),s.stop(r+n)}const Js={on:!0};try{Js.on=localStorage.getItem("slasharena-vib")!=="0"}catch{}const sr=n=>{try{Js.on&&navigator.vibrate&&(!navigator.userActivation||navigator.userActivation.hasBeenActive)&&navigator.vibrate(n)}catch{}},IM=[0,2,4,7,9],Nn=(n=.08)=>1+(Math.random()-.5)*n,Ne={hit(n,e){const t=IM[n%5]+12*Math.floor(n/5),i=392*2**(Math.min(t,36)/12)*Nn(.03);xt(i,.14,"square",.06),un(.07,.16,5e3*Nn(),1200),xt(e?70:95,e?.18:.1,"sine",e?.3:.18,.5),sr(e?30:15)},kill(n){xt(140*Nn()*(n?.6:1),n?.4:.18,"sine",n?.35:.25,.4),un(n?.35:.12,n?.25:.12,2500*Nn(),n?150:400),n&&sr([30,20,60])},dash(){un(.16,.14,1500*Nn(.2),6e3)},clang(){xt(520*Nn(),.2,"square",.07,.7),un(.1,.2,3e3,2e3),sr(30)},thud(){xt(160*Nn(),.12,"square",.06,.6),un(.08,.15,1200,500),sr(20)},ding(){xt(1568,.5,"sine",.14),xt(2349,.4,"sine",.07),un(.06,.2,8e3,4e3),sr([20,30,40])},jump(){xt(440,.16,"triangle",.07,1.8)},land(){un(.08,.08,800*Nn(.2),300)},warn(){xt(880,.06,"sine",.04)},roll(){un(.3,.12,300,120)},slam(){un(.4,.3,900*Nn(.2),80),xt(70*Nn(),.3,"sawtooth",.12,.4)},hurt(){xt(220*Nn(),.3,"sawtooth",.12,.5),un(.2,.2,1800,300),sr(80)},pickup(){[0,4,7].forEach((n,e)=>setTimeout(()=>xt(880*2**(n/12),.15,"triangle",.07),e*50))},ult(){un(.6,.2,200,2e3),xt(110,.6,"sawtooth",.08,2)},draw(n){xt(n==="down"?1046:n==="up"?440:784,.05,"sine",.03)},clear(){[0,7,12,16].forEach((n,e)=>setTimeout(()=>xt(392*2**(n/12),.3,"square",.05),e*90))},win(){[0,4,7,12,16,19,24].forEach((n,e)=>setTimeout(()=>xt(392*2**(n/12),.35,"triangle",.07),e*110))},charge(){xt(110,.55,"sawtooth",.06,1.9),un(.5,.06,300,1400)},swing(){un(.28,.3,600,3500),xt(90,.22,"sawtooth",.12,.5),sr(40)},whirl(){un(.18,.14,900*Nn(.2),3200)},empty(){xt(180,.1,"square",.04)},ui(){xt(660,.05,"sine",.04)},step(){xt(1320,.12,"sine",.05),xt(1760,.12,"sine",.03)}},mf=Q("sand");let Ui="calm",dr=0;function gf(){Ui="calm",dr=Mi.stormCalm*.6,_.storm=0,lf(0),mf.style.opacity=0}function UM(n){Ui="storm",dr=n,st("沙暴來襲！","var(--warn)")}function NM(n){Jt.storm&&_.state==="play"&&!_.tut&&(dr-=n,dr<=0&&(Ui==="calm"?(Ui="warn",dr=Mi.stormWarn,st("沙暴要來了，靠近一點看清楚預警","var(--warn)"),Ne.warn()):Ui==="warn"?(Ui="storm",dr=Mi.stormLen):(Ui="calm",dr=Mi.stormCalm)));const e=Ui==="storm"&&Jt.storm?1:0;Math.abs(_.storm-e)<.002&&_.storm===e||(_.storm+=(e-_.storm)*(1-Math.exp(-n*2.5)),Math.abs(_.storm-e)<.003&&(_.storm=e),lf(_.storm),mf.style.opacity=_.storm)}const Eo=900,eu=[],Xi=new Vc(new Vi(.15,.15,.15),new Pt({color:16777215}),Eo),vi=new Ht,_f=new Re;for(let n=0;n<Eo;n++)eu.push({p:new Ie,v:new Ie,life:0,max:1,shown:!1}),vi.scale.setScalar(0),vi.updateMatrix(),Xi.setMatrixAt(n,vi.matrix),Xi.setColorAt(n,_f.set(16777215));Xi.frustumCulled=!1;lt.add(Xi);let $a=0;function rt(n,e,t,i=6,r=.6){for(let s=0;s<t;s++){const a=eu[$a];Xi.setColorAt($a,_f.set(e)),$a=($a+1)%Eo,a.p.copy(n),a.v.copy(li()).multiplyScalar(i*(.3+Math.random())),a.max=a.life=r*(.5+Math.random()*.7),a.shown=!0}Xi.instanceColor.needsUpdate=!0}function FM(n){let e=!1;for(let t=0;t<Eo;t++){const i=eu[t];if(i.life>0)i.life-=n,i.p.addScaledVector(i.v,n),i.v.multiplyScalar(Math.exp(-n*3)),vi.position.copy(i.p),vi.rotation.set(i.life*9,i.life*7,0),vi.scale.setScalar(Math.max(0,i.life/i.max));else if(i.shown)i.shown=!1,vi.scale.setScalar(0);else continue;vi.updateMatrix(),Xi.setMatrixAt(t,vi.matrix),e=!0}e&&(Xi.instanceMatrix.needsUpdate=!0)}function OM(n,e,t){const i=new Ie;for(let r=0;r<=8;r++)i.lerpVectors(n,e,r/8).add(li().multiplyScalar(.12)),rt(i,t,1,.6,.3)}const Fs=[];function Er(n,e,t,i=1,r=.32,s=5){const a=new ee(new Lr(.22*i,.36*i,32),new Pt({color:t,transparent:!0,opacity:1,side:Qt,depthWrite:!1,blending:lo}));a.position.copy(n),a.quaternion.setFromUnitVectors(new Ie(0,0,1),e),a.renderOrder=4,lt.add(a),Fs.push({m:a,t:0,dur:r,grow:s})}function BM(n){for(const e of Fs){e.t+=n;const t=e.t/e.dur;e.m.scale.setScalar(1+t*e.grow),e.m.material.opacity=Math.max(0,1-t),t>=1&&(lt.remove(e.m),e.m.geometry.dispose(),e.m.material.dispose(),e.dead=!0)}for(let e=Fs.length-1;e>=0;e--)Fs[e].dead&&Fs.splice(e,1)}const rs=new et,ss=new et,tu=new et,go=new Pn({color:5030655,emissive:671626,emissiveIntensity:.45,roughness:.1,metalness:0}),vf=[];for(let n=0;n<=40;n++){const e=Math.PI*(1-n/40);vf.push(new Fe(Math.max(.001,Math.sin(e)*Math.sin(e/2)**1.1*.62),(Math.cos(e)+1)*.5*1.02))}const Cn=new ee(new qc(vf,40),go);Cn.castShadow=!0;const ns=new Pt({color:1316922}),hr=(n,e,t,i)=>(n.position.set(e,t,i),n.lookAt(e*3,t,i*3+.01),Cn.add(n),n),xf=[],Mf=[],yf=[],Sf=[],bf=[];for(const n of[-1,1]){const e=new ee(new gt(.085,14,12),ns);e.position.set(n*.14,.5,.39),e.scale.set(1,1.3,.6);const t=new ee(new gt(.034,8,6),new Pt({color:16777215}));t.position.set(.028,.04,.06),e.add(t);const i=new ee(new gt(.014,6,5),new Pt({color:16777215}));i.position.set(-.03,-.035,.06),e.add(i),Cn.add(e),xf.push(e);const r=hr(new ee(new Vi(.24,.1,.05),go),n*.14,.585,.385);r.rotateZ(n*.42),Mf.push(r);const s=new et;for(const l of[-1,1]){const c=new ee(new Vi(.11,.026,.02),ns);c.position.set(0,l*.028,0),c.rotation.z=-n*l*.5,s.add(c)}yf.push(hr(s,n*.14,.5,.405)),Sf.push(hr(new ee(new bi(.06,.015,6,14,Math.PI),ns),n*.14,.48,.41));const a=new et;a.add(new ee(new bi(.065,.011,6,18),ns),new ee(new bi(.028,.011,6,12),ns)),bf.push(hr(a,n*.14,.5,.405)),hr(new ee(new Xc(.065,16),new Pt({color:16743080,transparent:!0,opacity:.9})),n*.27,.37,.37).scale.set(1.3,.75,1)}const Ef=hr(new ee(new bi(.035,.011,6,14,Math.PI),ns),0,.4,.445);Ef.rotateZ(Math.PI);const Sc=hr(new ee(new gt(.05,12,8),new Pt({color:10101574})),0,.39,.44);Sc.scale.set(1.1,.8,.35);const wo=new ee(new gt(.1,12,8),new Pt({color:16777215,transparent:!0,opacity:.85}));wo.position.set(-.16,.6,.24);wo.scale.set(.55,1,.4);wo.rotation.z=.5;Cn.add(wo);tu.add(Cn);const An=new ee(new Lr(.72,1.02,24,1,-Math.PI/2-Math.PI/3,Math.PI*2/3),new Pt({color:5999871,transparent:!0,opacity:.85,side:Qt,depthWrite:!1}));An.rotation.x=-Math.PI/2;An.position.y=.3;An.visible=!1;ss.add(tu,An);const nu=new ee(new Lr(.5,.58,32),new Pt({color:4843263,transparent:!0,opacity:.55,side:Qt}));nu.rotation.x=-Math.PI/2;nu.position.y=.05;rs.add(ss,nu);lt.add(rs);let wf="idle",oo=0,Ya=2;function Kn(n,e=0){wf=n,oo=e}function kM(n,e){oo>0&&(oo-=n);const t=oo>0?wf:e;Ya-=n;const i=Ya<.12&&(t==="idle"||t==="determined");Ya<0&&(Ya=2+Math.random()*3);const r=t==="idle"||t==="determined";xf.forEach(s=>{s.visible=r,s.scale.y=i?.15:1.3}),Mf.forEach(s=>s.visible=t==="determined"),yf.forEach(s=>s.visible=t==="hurt"),Sf.forEach(s=>s.visible=t==="happy"),bf.forEach(s=>{s.visible=t==="dizzy",s.rotation.z+=n*8}),Ef.visible=t==="idle"||t==="determined",Sc.visible=t==="hurt"||t==="happy"||t==="dizzy",Sc.scale.y=t==="hurt"?.9:t==="dizzy"?.5:.7}const vl=Cn.geometry.attributes.position.array.slice(),zM=1.02;Tf(Cn.geometry);const Zt={gx:0,gz:0,vx:0,vz:0,touching:new Set,t:0},xl=new Set,Ml=new Ie,yl=new Ie,Qd=new ct,eh=new Zs,HM=new Ie,th=(n,e)=>Cn.worldToLocal(lt.localToWorld(e.copy(n)));function GM(n,e){lt.updateMatrixWorld(!0),Zt.t+=n;const t=e.d,i=an(t),[r,s]=la(t),a=(an(ht(t,r,.3))-i)/.3,o=(an(ht(t,s,.3))-i)/.3,l=r.multiplyScalar(-a).addScaledVector(s,-o);th(e.p,Ml),th(e.p.clone().add(l),yl);let c=yl.x-Ml.x,u=yl.z-Ml.z;const d=Math.hypot(c,u),h=e.air>0?.25:1;d>h&&(c*=h/d,u*=h/d),Zt.vx+=(c-Zt.gx)*90*n,Zt.vz+=(u-Zt.gz)*90*n,Zt.vx*=Math.exp(-n*6),Zt.vz*=Math.exp(-n*6),Zt.gx+=Zt.vx*n,Zt.gz+=Zt.vz*n;for(const b of Zc){const M=b.d.angleTo(t)*qe;if(M<.62?Zt.touching.has(b)||(Zt.touching.add(b),un(.18,.05,2600,700)):Zt.touching.delete(b),M<1.1){const A=Ot(b.d,new Ie().subVectors(b.d,t));A.lengthSq()>1e-8&&b.axis.crossVectors(b.d,A.normalize()),xl.add(b)}if(!xl.has(b))continue;const C=M<1.1?.55*(1-M/1.1):0;b.tv+=(C-b.tilt)*140*n,b.tv*=Math.exp(-n*5),b.tilt+=b.tv*n,eh.setFromAxisAngle(b.axis,b.tilt).multiply(b.q),Qd.compose(b.p,eh,HM.setScalar(b.s)),gM(b.i,Qd),M>=1.1&&Math.abs(b.tilt)<.002&&Math.abs(b.tv)<.002&&xl.delete(b)}const f=Zt.gx,g=Zt.gz,x=Math.hypot(f,g),m=(e.moving||0)*.035+(e.state==="dash"?.03:0),p=Cn.geometry.attributes.position,w=p.array;for(let b=0;b<w.length;b+=3){let M=vl[b],C=vl[b+1],A=vl[b+2];const L=Math.max(0,1-C/(zM*.58)),D=L*L,E=Math.hypot(M,A);if(E>1e-4){const S=1+.6*((M*f+A*g)/E)*D+m*(.4+.6*D)*Math.sin(Zt.t*14+C*9);M*=S,A*=S}M+=f*.24*D,A+=g*.24*D,C*=1-.1*x*(1-D),w[b]=M,w[b+1]=C,w[b+2]=A}p.needsUpdate=!0,Cn.geometry.computeVertexNormals(),Tf(Cn.geometry)}function Tf(n){const e=n.attributes.normal.array,t=41,i=40,r=new Ie;for(let s=0;s<t;s++){const a=s*3,o=(i*t+s)*3;r.set(e[a]+e[o],e[a+1]+e[o+1],e[a+2]+e[o+2]).normalize(),e[a]=e[o]=r.x,e[a+1]=e[o+1]=r.y,e[a+2]=e[o+2]=r.z}for(const s of[0,t-1]){r.set(0,0,0);for(let a=0;a<=i;a++){const o=(a*t+s)*3;r.x+=e[o],r.y+=e[o+1],r.z+=e[o+2]}r.normalize();for(let a=0;a<=i;a++){const o=(a*t+s)*3;e[o]=r.x,e[o+1]=r.y,e[o+2]=r.z}}n.attributes.normal.needsUpdate=!0}function VM(n,e,t,i,r){if(n.kind==="line"){const o=n.L*e/i,l=-n.w+2*n.w*t/r;return{d:n.c.clone().multiplyScalar(qe).addScaledVector(n.dir,o).addScaledVector(n.s,l).normalize(),u:o/n.L}}n.e1||([n.e1,n.e2]=la(n.c));const s=t/r*Math.PI*2,a=n.kind==="circle"?n.r*e/i:n.r1+(n.r2-n.r1)*e/i;return{d:n.c.clone().multiplyScalar(qe).addScaledVector(n.e1,Math.cos(s)*a).addScaledVector(n.e2,Math.sin(s)*a).normalize(),u:n.kind==="circle"?a/n.r:(a-n.r1)/(n.r2-n.r1)}}function Qs(n,e,t=.3){if(n.kind==="line"){const r=e.clone().sub(n.c).multiplyScalar(qe),s=r.dot(n.dir),a=r.dot(n.s);return s>=-t&&s<=n.L+t&&Math.abs(a)<=n.w+t}const i=n.c.angleTo(e)*qe;return n.kind==="circle"?i<=n.r+t:i>=n.r1-t&&i<=n.r2+t}function ar(n,e,t,i){return{kind:"line",c:n.clone(),dir:e.clone(),s:new Ie().crossVectors(n,e),L:t,w:i}}const WM="attribute float u; varying float vU; void main(){ vU=u; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",XM="uniform float prog; uniform float flash; varying float vU; void main(){ vec3 c=mix(vec3(1.,.82,.23),vec3(1.,.22,.18),flash); float a = vU<=prog ? .62 : .2; if (vU>.97) a=.85; gl_FragColor=vec4(c,a); }";function Af(n){const e=n.kind==="line"?14:10,t=n.kind==="line"?4:32,i=[],r=[],s=[];for(let o=0;o<=e;o++)for(let l=0;l<=t;l++){const{d:c,u}=VM(n,o,l,e,t),d=c.clone().multiplyScalar(qe+an(c)+.09);i.push(d.x,d.y,d.z),r.push(o===e?1:u*.96)}for(let o=0;o<e;o++)for(let l=0;l<t;l++){const c=o*(t+1)+l,u=c+t+1;s.push(c,u,c+1,u,u+1,c+1)}const a=new Bt;return a.setAttribute("position",new Je(i,3)),a.setAttribute("u",new Je(r,1)),a.setIndex(s),a}function iu(n,e,t,i=!1){const r=Af(n);return n.mat=new wi({vertexShader:WM,fragmentShader:XM,uniforms:{prog:{value:0},flash:{value:0}},transparent:!0,depthWrite:!1,side:Qt}),n.mesh=new ee(r,n.mat),n.mesh.renderOrder=1,lt.add(n.mesh),Object.assign(n,{enemy:e,t:0,dur:t,free:i}),i||(e.warn=n),_.warnings.push(n),n}function nh(n,e){return n.t+=e,n.mat.uniforms.prog.value=n.t/n.dur,n.mat.uniforms.flash.value=n.dur-n.t<.15?Math.floor(n.t*24)%2?1:.55:0,n.t>=n.dur}function To(n){lt.remove(n.mesh),n.mesh.geometry.dispose(),n.mat.dispose(),_.warnings=_.warnings.filter(e=>e!==n),n.enemy.warn===n&&(n.enemy.warn=null)}const Rf=new Wt(.07,.62,5);Rf.rotateX(Math.PI/2);const qM=new Pt({color:16769696}),$M=new Pt({color:16763981}),YM=.62,jM=.55;function KM(n,e){const t=on[n.type],i=new ee(Rf,qM);lt.add(i),_.shots.push({d:n.d.clone(),dir:e.clone(),left:t.shotLen,v:t.shotSpeed,owner:n,mesh:i,back:!1,spent:!1})}function Os(n){lt.remove(n.mesh),n.dead=!0}function ZM(n){for(const e of _.shots){const t=e.v*n;if(e.d=ht(e.d,e.dir,t),e.dir=Ot(e.d,e.dir).normalize(),e.left-=t,e.left<=0){Os(e);continue}if(an(e.d)>1.15&&!rf(e.d)){rt(e.d.clone().multiplyScalar(qe+an(e.d)),13152400,5,3,.3),Os(e);continue}e.mesh.position.copy(e.d).multiplyScalar(qe+an(e.d)+jM),e.mesh.quaternion.setFromUnitVectors(Wi,e.d);const i=e.dir.clone().applyQuaternion(e.mesh.quaternion.clone().invert());if(e.mesh.rotateY(Math.atan2(i.x,i.z)),e.back){for(const r of _.enemies)if(!(r.dead||r.spawn<1||e.d.angleTo(r.d)*qe>r.r+.4)){Dr(r,3,e.dir,{pierce:!0}),rt(e.mesh.position,16763981,14,6,.4),Os(e);break}}else if(!e.spent&&e.d.angleTo(T.d)*qe<YM){e.spent=!0;const r=_s(e.owner,"shot",e.d);r==="parry"?(e.back=!0,e.spent=!1,e.mesh.material=$M,e.v*=1.4,e.left=12,e.dir=e.owner.dead?e.dir.clone().negate():zt(e.d,e.owner.d)):r==="hit"&&Os(e)}}_.shots.some(e=>e.dead)&&(_.shots=_.shots.filter(e=>!e.dead))}function JM(){_.shots.forEach(Os),_.shots=[]}function QM(n,e,t){const i={kind:"circle",c:n.clone(),r:e},r=new Pt({color:16738848,transparent:!0,opacity:.65,depthWrite:!1,side:Qt}),s=new ee(Af(i),r);s.renderOrder=1,lt.add(s),_.hazards.push({z:i,mesh:s,t,dur:t})}function ey(n){for(const e of _.hazards)e.t-=n,e.mesh.material.opacity=Math.min(.65,e.t*1.2)*(.8+Math.sin(e.t*12)*.2),T.air<=0&&T.invuln<=0&&T.state!=="dash"&&T.state!=="ult"&&T.guardInv<=0&&Qs(e.z,T.d,.1)&&uu(e.z.c),e.t<=0&&(lt.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose(),e.dead=!0);_.hazards.some(e=>e.dead)&&(_.hazards=_.hazards.filter(e=>!e.dead))}function ty(){for(const n of _.hazards)lt.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose();_.hazards=[]}const ih=2.8,ny=1.15,iy=.8,ry=30,sy=new Ti(.42),Sl=[];function ay(n){if(!Sl[n]){const t=document.createElement("canvas");t.width=t.height=64;const i=t.getContext("2d");i.font="900 52px sans-serif",i.textAlign="center",i.textBaseline="middle",i.lineWidth=8,i.strokeStyle="#0b1030",i.strokeText(n,32,34),i.fillStyle="#fff",i.fillText(n,32,34),Sl[n]=new m0(t)}const e=new l0(new Gh({map:Sl[n],depthTest:!1,transparent:!0}));return e.scale.setScalar(.8),e.position.y=.85,e.renderOrder=6,e}const rh=(n,e)=>new Pn({color:n,emissive:e,emissiveIntensity:1.6,flatShading:!0}),je={boss:null,nodes:[],cfg:null,next:0,bad:!1,t:0},sh=Q("sealHint"),ah={ordered:"照編號順序劃過",moving:"光點會移動",forbid:"只劃金色，避開紅色"},Ao=()=>{sh.hidden=!je.boss,je.boss&&(sh.textContent=`封印 ${je.nodes.filter(n=>n.hit).length} / ${je.nodes.filter(n=>!n.bad).length}　${ah[Object.keys(ah).find(n=>je.cfg[n])]||"大招一筆劃過光點"}`)};function Cf(n){const[e,t]=la(je.boss.d),i=n.a+(je.cfg.moving?je.t*.35:0);(je.cfg.moving||!n.d)&&(n.d=je.boss.d.clone().multiplyScalar(qe).addScaledVector(e,Math.cos(i)*n.r).addScaledVector(t,Math.sin(i)*n.r).normalize())}function Pf(n){n.mesh.position.copy(n.d).multiplyScalar(qe+an(n.d)+.75+Math.sin(je.t*3+n.a)*.1),n.mesh.quaternion.setFromUnitVectors(Wi,n.d),n.mesh.rotateY(je.t*2)}function oy(n,e){Ro(),Object.assign(je,{boss:n,cfg:e,next:0,bad:!1,t:0}),n.armored=!0;const t=e.count+(e.forbid||0),i=Math.random()*6.28;for(let r=0;r<t;r++){const s=r>=e.count,a={i:r,bad:s,a:s?i+(r-e.count+.5)*Math.PI*2/(e.forbid||1):i+r/e.count*Math.PI*2,r:s?ih*.34:ih,hit:!1};a.mesh=new ee(sy,s?rh(16730714,16715808):rh(16763981,13144064)),a.mesh.castShadow=!0,lt.add(a.mesh),e.ordered&&a.mesh.add(ay(r+1)),Cf(a),Pf(a),je.nodes.push(a),Er(a.mesh.position,a.d,16763981,1.5,.6,3)}_.ult=100,Yi("護甲展開","用大招一筆劃過光點"),Ne.warn(),_.shake=Math.max(_.shake,.7),Ao()}function ly(){je.next=0,je.bad=!1;for(const n of je.nodes)n.hit=!1,n.mesh.material.color.set(n.bad?16730714:16763981),n.mesh.material.emissive.set(n.bad?16715808:13144064);Ao()}function cy(n){if(je.boss){for(const e of je.nodes)if(!(e.hit||e.mesh.position.distanceTo(n)>(e.bad?iy:ny))){if(e.bad){je.bad=!0,e.hit=!0,st("碰到紅色光點！","var(--hurt)"),Ne.empty();continue}je.cfg.ordered&&e.i!==je.next||(e.hit=!0,je.next++,e.mesh.material.color.set(16777215),e.mesh.material.emissive.set(4843263),rt(e.mesh.position,4843263,16,7,.5),Ne.step(),Ao())}}}function uy(){if(!je.boss)return;const n=je.boss;!je.bad&&je.nodes.every(t=>t.bad||t.hit)?(n.armored=!1,n.stun=4.5,n.phase++,n.warn=null,gs(.4,"#ffcc4d"),Yi("封印破除","趁它暈眩全力輸出"),Ne.win(),_.shake=1.2,Er(je.boss.mesh.position,n.d,16763981,4,.8,4),rt(n.mesh.position,16763981,40,12,.9),Ro()):(st("封印沒破，再劃一次","var(--gold)"),ly())}function dy(n,e){if(je.boss){if(je.boss.dead){Ro();return}_.mode!=="ultDash"&&(je.t+=n);for(const t of je.nodes)Cf(t),Pf(t);_.mode==="play"&&(_.ult=Math.min(100,_.ult+e*ry))}}function Ro(){for(const n of je.nodes)lt.remove(n.mesh),n.mesh.material.dispose();je.nodes=[],je.boss=null,Ao()}const bc={rockKing:{name:"岩王",at:[.5],seal:{count:3},phases:[["circle","swing","ring","triple","summon:boulder"],["meteor","swing","ring","swing","triple","summon:boulder"]]},frostQueen:{name:"冰晶女王",at:[.66,.33],seal:{count:4,ordered:!0},phases:[["fan","chillField","ring"],["fan","meteor","chillField","nova"],["fan","nova","triple","summon:frostGrunt"]]},sandWyrm:{name:"沙海王蟲",at:[.66,.33],seal:{count:4,moving:!0},phases:[["burrow","charge","summon:sandGrunt"],["burrow","charge","storm","fan"],["burrow","charge","charge","meteor","summon:sandBoulder"]]},lavaTitan:{name:"熔岩泰坦",at:[.66,.33],seal:{count:4,forbid:2},phases:[["meteor","ring","triple"],["meteor","swing","nova","summon:lavaGrunt","triple"],["meteor","swing","fan","nova","swing","summon:lavaBrute","triple"]]}},nt=(n,e=0,t=0)=>new Pn({color:n,emissive:e,emissiveIntensity:t,roughness:.6,flatShading:!0}),jn=(n,e,t=1)=>{const i=n.attributes.position,r=new Map;for(let s=0;s<i.count;s++){const a=`${i.getX(s).toFixed(3)},${i.getY(s).toFixed(3)},${i.getZ(s).toFixed(3)}`;if(!r.has(a)){const l=Math.sin((s+1)*12.9898*t)*43758.5453;r.set(a,1+(l-Math.floor(l)-.5)*e)}const o=r.get(a);i.setXYZ(s,i.getX(s)*o,i.getY(s)*o,i.getZ(s)*o)}return n.computeVertexNormals(),n};function _t(n,e=[],t=0,i=0){n.updateMatrixWorld(!0);const r=n.matrixWorld.clone().invert(),s=[],a=[],o=new Set;e.forEach(u=>u.traverse(d=>o.add(d))),n.traverse(u=>{if(!u.isMesh||o.has(u))return;const d=u.geometry.index?u.geometry.toNonIndexed():u.geometry.clone();for(const x of Object.keys(d.attributes))x!=="position"&&x!=="normal"&&d.deleteAttribute(x);d.applyMatrix4(new ct().multiplyMatrices(r,u.matrixWorld));const h=u.material.color.clone().multiplyScalar(u.material.isMeshBasicMaterial?1.7:1),f=d.attributes.position.count,g=new Float32Array(f*3);for(let x=0;x<f;x++)g.set([h.r,h.g,h.b],x*3);d.setAttribute("color",new Mn(g,3)),s.push(d),a.push(u)}),a.forEach(u=>{u.parent.remove(u),u.geometry.dispose(),u.material.dispose()});const l=new Pn({vertexColors:!0,flatShading:!0,roughness:.6,emissive:t,emissiveIntensity:i}),c=new ee(Gs(s),l);return c.castShadow=!0,n.add(c),c}function Jn(n,e,t,i,r,s,a){for(const o of[-1,1]){const l=new ee(new gt(r,8,6),nt(s));l.position.set(o*e,t,i),l.scale.set(1.25,.8,.45),l.rotation.z=o*.35,n.add(l);const c=new ee(new gt(r*.48,8,6),new Pt({color:a}));c.position.set(o*(e-r*.1),t-r*.08,i+r*.32),c.scale.set(1.2,.8,.5),c.rotation.z=o*.35,n.add(c)}}function Hn(n){const e=new et;for(let t=0;t<3;t++){const i=new ee(new Ti(.1),new Pt({color:16763981}));i.position.set(Math.cos(t*2.09)*.4,0,Math.sin(t*2.09)*.4),e.add(i)}return e.position.y=n,e.visible=!1,e}function hy([n,e,t]=[15222332,5898264,8004632]){const i=new et,r=nt(n,e,.35),s=nt(t),a=jn(new pn(.42,1),.12,3);a.scale(1,.95,1);const o=new ee(a,r);o.castShadow=!0,i.add(o);for(let m=0;m<3;m++){const p=new ee(new Wt(.08,.26,4),r);p.position.set((m-1)*.1,.42,-.04-Math.abs(m-1)*.04),p.rotation.set(-.3,0,(1-m)*.45),i.add(p)}Jn(i,.15,.05,.33,.09,2755084,16773296);for(const m of[-1,1]){const p=new ee(new gt(.1,6,5),s);p.position.set(m*.17,-.38,.05),p.scale.set(1,.6,1.3),i.add(p)}const l=new et;l.position.set(.36,-.05,.1),i.add(l);const c=new ee(new gt(.09,6,5),s);l.add(c);const u=new et;l.add(u);const d=new ee(new gn(.025,.025,1.25,5),nt(8014374));d.position.y=.25,u.add(d);const h=new ee(new Wt(.07,.24,4),nt(13225174,2236979,.3));h.position.y=.98,u.add(h);const f=new ee(new gn(.04,.04,.07,6),nt(14267498));f.position.y=.82,u.add(f);const g=Hn(.75);i.add(g),_t(l),_t(g);const x=_t(i,[l,g],e,.35);return{group:i,body:x,tint:[x.material],stars:g,rig:{arm:l,spear:u}}}function ru([n,e,t]=[9329622,2363471,7037296],i=1){const r=new et,s=new et;s.scale.setScalar(i),r.add(s);const a=nt(n,e,.35),o=nt(new Re(n).lerp(new Re(16777215),.3).getHex(),e,.25),l=nt(15326400),c=nt(t,t===7037296?0:t,t===7037296?0:.5),u=nt(new Re(n).multiplyScalar(.45).getHex()),d=jn(new pn(.72,1),.1,7);d.scale(1.15,1,.95);const h=new ee(d,a);h.castShadow=!0,s.add(h);const f=new ee(jn(new pn(.38,1),.08,5),a);f.position.set(0,.48,.32),s.add(f);const g=new ee(new pn(.2,0),o);g.position.set(0,.36,.62),g.scale.set(1.4,.8,.8),s.add(g);for(const w of[-1,1]){const b=new ee(new Wt(.045,.16,4),l);b.position.set(w*.14,.42,.72),s.add(b);const M=new ee(new Wt(.13,.62,5),l);M.position.set(w*.42,.82,.2),M.rotation.set(-.2,0,-w*.75),s.add(M);for(let A=0;A<2;A++){const L=new ee(new Wt(.07,.2,4),u);L.position.set(w*(.35+A*.25),.45-A*.2,-.38),L.rotation.set(-.8,0,-w*.6),s.add(L)}const C=new ee(new gn(.16,.2,.3,6),a);C.position.set(w*.32,-.7,0),s.add(C)}Jn(s,.14,.58,.62,.075,1838896,16769126);const x=[];for(const w of[-1,1]){const b=new ee(jn(new oa(.34,0),.15,2+w),c.clone());b.castShadow=!0,b.position.set(w*.98,-.2,.25),s.add(b),x.push(b)}const m=Hn(1.25*i);r.add(m),_t(m);const p=_t(s,x,e,.35);return{group:r,body:p,tint:[p.material],stars:m,rig:{fists:x,core:s}}}function fy([n,e]=[9408666,1052696]){const t=new et,i=new et;t.add(i);const r=nt(n,e,.2),s=nt(1710626),a=new ee(jn(new pn(.58,1),.16,11),r);a.castShadow=!0,i.add(a);const o=new ee(new gt(.3,10,6),s);o.position.set(0,.02,.42),o.scale.set(1.35,.3,.55),i.add(o);const l=new ee(new gt(.09,10,8),new Pn({color:16726564,emissive:16719888,emissiveIntensity:2.2}));l.position.set(0,.02,.54),l.scale.set(1,.75,.5),i.add(l);for(let h=0;h<4;h++){const f=new ee(new $c(.07+h*.01),r);f.position.set(Math.cos(h*1.6)*.75,-.3+h%2*.5,Math.sin(h*1.6)*.75),f.visible=!1,t.add(f)}const c=Hn(.9);t.add(c);const u=t.children.filter(h=>h.geometry?.type==="TetrahedronGeometry");_t(c);const d=_t(i,[l],e,.2);return{group:t,body:d,tint:[d.material],stars:c,rig:{roll:i,eye:l,pebbles:u}}}function py([n,e]=[8376575,1732800]){const t=new et,i=nt(n,e,.9),r=nt(new Re(n).multiplyScalar(.8).getHex(),e,.6),s=new ee(new gt(.5,10,7,0,Math.PI*2,0,Math.PI*.6),i);s.position.y=.05,s.castShadow=!0,t.add(s);const a=new et;t.add(a);for(let c=0;c<5;c++){const u=new ee(new Wt(.07,.6,4),r);u.rotation.x=Math.PI,u.position.set(Math.cos(c*1.26)*.26,-.3,Math.sin(c*1.26)*.26),a.add(u)}Jn(t,.14,.22,.44,.07,795712,16777215);const o=Hn(.75);t.add(o),_t(o),_t(a);const l=_t(t,[a,o],e,.9);return{group:t,body:l,tint:[l.material],stars:o,rig:{tentacles:a}}}function my([n,e]=[11104570,5913112]){const t=new et,i=nt(n,3151876,.3),r=nt(e);for(let c=0;c<4;c++){const u=new ee(new Wt(.38-c*.07,.3,7),c%2?i:r);u.position.y=-.26+c*.2,u.rotation.y=c*.4,c||(u.castShadow=!0),t.add(u)}Jn(t,.12,.02,.27,.07,1707524,16773296);for(const c of[-1,1]){const u=new ee(new gt(.08,6,5),r);u.position.set(c*.15,-.4,.03),t.add(u)}const s=new et;s.position.set(.34,0,.2),t.add(s);const a=new ee(new bi(.3,.022,4,10,Math.PI),nt(5913112));a.rotation.z=-Math.PI/2,s.add(a);const o=Hn(.7);t.add(o),_t(s),_t(o);const l=_t(t,[s,o],3151876,.3);return{group:t,body:l,tint:[l.material],stars:o,rig:{bow:s}}}function gy(){const n=new et,e=new et;n.add(e);const t=nt(10476799,1727130,.7),i=nt(5218528,1325690,.6),r=new ee(new Ti(.8,1),t);r.scale.set(.85,1.7,.85),r.position.y=.25,r.castShadow=!0,e.add(r);for(let l=0;l<5;l++){const c=new ee(new Wt(.13,.62,4),i),u=(l-2)*.42;c.position.set(Math.sin(u)*.42,1.5-Math.abs(l-2)*.12,Math.cos(u)*.1),c.rotation.z=-u*.8,e.add(c)}Jn(e,.2,.62,.62,.1,663616,16777215);const s=[];for(const l of[-1,1]){const c=new ee(new Ti(.34,0),t.clone());c.castShadow=!0,c.scale.y=1.6,c.position.set(l*.98,-.2,.25),e.add(c),s.push(c)}const a=Hn(2);n.add(a),_t(a);const o=_t(e,s,1727130,.7);return{group:n,body:o,tint:[o.material],stars:a,rig:{fists:s,core:e}}}function _y(){const n=new et,e=new et;n.add(e);const t=nt(13208132,4857864,.35),i=nt(15714698,4857864,.25),r=nt(5911572),s=new ee(jn(new pn(.95,1),.12,9),t);s.scale.set(1.05,.85,1.25),s.position.set(0,.15,.25),s.castShadow=!0,e.add(s);for(let c=0;c<3;c++){const u=new ee(jn(new pn(.72-c*.14,1),.1,4+c),c%2?i:t);u.position.set(0,-.25-c*.1,-.9-c*.85),u.castShadow=!0,e.add(u)}for(let c=0;c<4;c++){const u=new ee(new Wt(.12,.42,4),r);u.position.set(0,.85-c*.22,-.1-c*.55),u.rotation.x=-.5,e.add(u)}Jn(e,.36,.42,1.06,.12,2100228,16734752);const a=[];for(const c of[-1,1]){const u=new ee(new Wt(.17,.8,5),r);u.rotation.x=1.3,u.rotation.z=c*.5,u.castShadow=!0,u.position.set(c*.98,-.2,.25),e.add(u),a.push(u)}const o=Hn(1.5);n.add(o),_t(o);const l=_t(e,a,4857864,.35);return{group:n,body:l,tint:[l.material],stars:o,rig:{fists:a,core:e}}}const vy=()=>ru(void 0,1.6),xy=()=>ru([4141110,10496e3,16742960],1.95);function My([n,e]=[4165482,14205040]){const t=new et,i=nt(n,666138,.3),r=nt(1980970),s=nt(e,3811840,.3),a=new ee(jn(new gt(.52,9,6,0,Math.PI*2,0,Math.PI*.55),.08,5),i);a.position.y=-.12,a.castShadow=!0,t.add(a);const o=new ee(new gn(.5,.44,.16,9),r);o.position.y=-.2,t.add(o);for(let f=0;f<3;f++){const g=new ee(new Wt(.07,.2,4),r);g.position.set(0,.3-f*.06,-.12-f*.16),g.rotation.x=-.6,t.add(g)}Jn(t,.13,.08,.4,.07,662032,16773296);for(const f of[-1,1])for(const g of[-.2,.15]){const x=new ee(new gt(.08,5,4),r);x.position.set(f*.38,-.36,g),t.add(x)}const l=new et;l.position.set(0,-.02,.62),t.add(l);const c=new ee(new gn(.42,.42,.08,10),s);c.rotation.x=Math.PI/2,l.add(c);const u=new ee(new gt(.12,6,5),r);u.position.z=.05,l.add(u);const d=Hn(.75);t.add(d),_t(d),_t(l);const h=_t(t,[l,d],666138,.3);return{group:t,body:h,tint:[h.material],stars:d,rig:{shield:l}}}function yy([n,e]=[7327818,15788192]){const t=new et,i=nt(n,1720328,.3),r=nt(e),s=nt(2775576),a=new ee(jn(new pn(.45,1),.1,7),i);a.scale.set(1.15,.75,1),a.castShadow=!0,t.add(a);const o=new ee(new gt(.34,8,6),r);o.scale.set(1,.6,.7),o.position.set(0,-.12,.16),t.add(o);for(const u of[-1,1]){const d=new ee(new gt(.15,7,5),i);d.position.set(u*.2,.3,.14),t.add(d);const h=new ee(new gt(.16,6,5),s);h.scale.set(1,.55,1.6),h.position.set(u*.4,-.28,-.1),t.add(h)}Jn(t,.2,.32,.27,.08,663556,16773296);const l=Hn(.7);t.add(l),_t(l);const c=_t(t,[l],1720328,.3);return{group:t,body:c,tint:[c.material],stars:l,rig:{}}}function Sy([n,e]=[13650570,16050896]){const t=new et,i=nt(n,4196904,.45),r=nt(e),s=nt(16777215),a=new ee(new gn(.22,.3,.55,8),r);a.position.y=-.2,a.castShadow=!0,t.add(a);const o=new ee(jn(new gt(.55,10,6,0,Math.PI*2,0,Math.PI*.5),.06,3),i);o.position.y=.02,o.scale.y=.8,o.castShadow=!0,t.add(o);for(let u=0;u<6;u++){const d=new ee(new gt(.08,5,4),s),h=u*1.05;d.position.set(Math.cos(h)*.34,.28+u%2*.06,Math.sin(h)*.34),d.scale.y=.5,t.add(d)}Jn(t,.1,-.12,.25,.065,2756640,10485663);const l=Hn(.8);t.add(l),_t(l);const c=_t(t,[l],4196904,.45);return{group:t,body:c,tint:[c.material],stars:l,rig:{}}}function by([n,e]=[16762938,2759176]){const t=new et,i=nt(n,5913088,.4),r=nt(e),s=new ee(new gt(.26,8,6),i);s.scale.set(.9,.85,1.15),s.castShadow=!0,t.add(s);for(const u of[-.08,.08]){const d=new ee(new bi(.24,.035,4,10),r);d.position.z=u-.04,t.add(d)}const a=new ee(new Wt(.06,.16,4),r);a.rotation.x=-Math.PI/2,a.position.z=-.32,t.add(a),Jn(t,.09,.05,.22,.055,1706496,16777215);const o=new et;o.position.y=.2,t.add(o);for(const u of[-1,1]){const d=new ee(new gt(.16,6,4),new Pt({color:14677247,transparent:!0,opacity:.55}));d.scale.set(1.2,.15,.7),d.position.x=u*.18,o.add(d)}const l=Hn(.5);t.add(l),_t(l);const c=_t(t,[o,l],5913088,.4);return{group:t,body:c,tint:[c.material],stars:l,rig:{wings:o}}}function Lf([n,e]=[10115800,3149898],t=1){const i=new et,r=nt(n,e,.5),s=new ee(jn(new pn(.48*t,1),.14,13),r);s.scale.set(1.1,.85,1.1),s.castShadow=!0,i.add(s);for(let l=0;l<3;l++){const c=new ee(new gt(.12*t,6,4),r),u=l*2.1+.4;c.position.set(Math.cos(u)*.36*t,.22*t,Math.sin(u)*.36*t-.1),i.add(c)}Jn(i,.15*t,.08*t,.38*t,.08*t,1706024,16777215);const a=Hn(.75*t);i.add(a),_t(a);const o=_t(i,[a],e,.5);return{group:i,body:o,tint:[o.material],stars:a,rig:{}}}const Ey=n=>Lf(n,.6),wy={grunt:hy,brute:ru,boulder:fy,jelly:py,archer:my,rock:vy,queen:gy,wyrm:_y,titan:xy,shell:My,hopper:yy,shroom:Sy,bee:by,splitter:Lf,blobling:Ey},Ty={grunt:15222332,brute:9329622,boulder:9408666,boss:9329622,jelly:8376575,archer:11104570,shell:4165482,hopper:7327818,shroom:13650570,bee:16762938,splitter:10115800},rn=n=>n.d.clone().multiplyScalar(qe+an(n.d)+n.r);function xi(n,e,t={}){const i=on[n],r=i.base||n,s=wy[i.model||r](i.pal),a=r==="boss"?i.hp:i.hp*_.hpMul,o={type:n,base:r,d:e.clone(),hp:a,maxHp:a,r:i.r,model:s,mesh:s.group,spawn:0,atkCd:1+Math.random()*2,stun:0,flash:0,strafe:Math.random()<.5?-1:1,kb:new Ie,lunge:null,warn:null,rolling:null,chain:null,bob:Math.random()*6,slamT:0,summonT:0,pattern:0,phase:0,stuck:0,diveCd:3,...t};return t.hp&&(o.maxHp=t.hp),r==="boss"&&(o.script=bc[n],o.sealAt=[...o.script.at]),s.group.visible=!1,lt.add(s.group),_.enemies.push(o),Er(zn(e).addScaledVector(e,.1),e,r==="boss"?12610559:10185727,r==="boss"?2.5:1.4,.6,3),o}function su(n){n.warn&&To(n.warn),lt.remove(n.mesh),n.mesh.traverse(e=>{e.isMesh&&(e.geometry.dispose(),e.material.dispose())}),n.dead=!0}function Dr(n,e,t,{pierce:i=!1}={}){const r=on[n.type];if(n.armored){n.flash=.08,Ne.thud(),st("護甲！用大招劃過光點","var(--gold)"),_.hitstop=_n.hitstop;return}if(n.guardHp>0&&!i){n.guardHp--,n.flash=.08,Ne.thud(),_.hitstop=_n.hitstop,n.kb.copy(t).multiplyScalar(1.5),n.guardHp<=0&&n.bubble?(n.mesh.remove(n.bubble),n.bubble.geometry.dispose(),n.bubble.material.dispose(),n.bubble=null,rt(rn(n),5999871,22,8,.5),st("護盾破了！","var(--guard)")):st(`護盾 ×${n.guardHp}`,"var(--guard)");return}if(r.front&&!(n.stun>0)&&!i&&n.face&&t.dot(n.face)<-r.front){n.flash=.06,Ne.clang(),_.hitstop=_n.hitstop,rt(rn(n).addScaledVector(n.face,n.r),14205040,12,6,.3),st("盾擋住了！繞到背後或格擋","var(--mist)"),$t("blocked",n),T.state==="dash"&&(T.state="free",Oi(ht(T.d,n.face,.9)),T.anim.imp=.8);return}const s=n.base==="boulder"&&!(n.stun>0)&&!i;s&&(e*=r.armor,Ne.thud(),st("好硬！等它暈了再打","var(--mist)")),n.hp-=e,n.flash=.12,_.combo++,_.bestCombo=Math.max(_.bestCombo,_.combo),_.comboT=_n.comboTime,wr(ri.hit),n.kb.copy(t).multiplyScalar(s?.6:r.kb),n.whirl&&n.whirl.t<n.whirl.wind&&(n.whirl=null,n.atkCd=1.5,st("打斷","var(--dash)")),(n.base==="grunt"||n.base==="archer"||n.base==="bee"||n.base==="shroom")&&n.warn&&(To(n.warn),n.chain=null,n.atkCd=1.5,st("打斷","var(--dash)"));const a=e>=1.4||n.stun>0;if(_.hitstop=Math.max(_.hitstop,_n.hitstop*Kt(.8+e*.25,.8,2)),_.shake=Math.max(_.shake,a?.5:.35),n.squash=a?1.3:1,jc(t,a?.22:.12),s||Ne.hit(_.combo,a),LM(rn(n).addScaledVector(n.d,n.r+.3),Math.max(1,Math.round(e*10)),a?"big":s?"weak":""),rt(rn(n),e>=1.4?16763981:16777215,8+Math.round(e*3),7,.35),$t("hit",n),n.sealAt?.length&&n.hp/n.maxHp<=n.sealAt[0]){n.hp=n.maxHp*n.sealAt.shift(),jd(),oy(n,n.script.seal);return}n.hp<=1e-6&&Df(n),jd()}function Df(n,e=!1){if(n.dead)return;const t=on[n.type],i=rn(n);if(rt(i,t.pal?.[0]??Ty[n.base],24,9,.7),rt(i,16763981,8,6,.5),n.base==="boss"&&(rt(i,12610559,60,14,1.2),Er(i,n.d,16763981,4,.8,4),_.shake=1.4),_.score+=Math.round(t.pts*(1+Math.min(_.combo,30)*.05)),wr(ri.kill),!e&&(t.split||n.affix==="split")&&Ny(n),t.blast&&!e){const s={kind:"circle",c:n.d.clone(),r:1.35,attack:"circle"};iu(s,n,1,!0)}const r=n.r>=.8;if(Ne.kill(r),su(n),$i(T),_.hitstop=Math.max(_.hitstop,_n.killHitstop*(r?1.8:1)),r&&(cf(.6),_.shake=Math.max(_.shake,.7)),_.combo>=5&&_.combo%5===0&&Kn("happy",.6),$t("kill",n),n.base==="boss")for(const s of _.enemies)!s.dead&&s!==n&&Df(s,!0)}const Ay=()=>_.tut?1.6:Math.max(_n.warnMin,_n.warnBase-_n.warnStep*(_.tier-1)),Ry=()=>_.tut||_.tier<=1?1:_.tier>=8?3:2,Cy=n=>n.warn||n.rolling||n.chain||n.lunge||n.swing||n.whirl||n.summonT>0,Py=()=>_.enemies.filter(n=>!n.dead&&n.base!=="boss"&&Cy(n)).length;function Ly(n){if(n.only)return n.only[Math.floor(Math.random()*n.only.length)];const e=on[n.type];if(n.base==="grunt"){if(e.burrow&&!n.burrowed&&Math.random()<.6)return"burrow";n.burrowed=!1;const i=Math.random();return _.tier>=2&&i<.22?"whirl":(_.tier>=5&&i<.45&&(n.chain={kind:"line",left:1,idx:0,gap:0}),"line")}if(n.base==="grunt"||n.base==="bee")return"line";if(n.base==="boulder")return"roll";if(n.base==="archer")return n.volleyNow=!e.volley&&_.tier>=5&&Math.random()<.25,"shoot";if(n.base==="shell")return"line";if(n.base==="hopper")return"hop";if(n.base==="shroom")return"spores";if(n.base==="splitter")return e.split?"hop":"line";if(n.base==="jelly")return n.d.angleTo(T.d)*qe<e.pulseRange&&Math.random()<.6?"ring":"mortar";if(n.base==="brute"){const i=Math.random();return _.tier>=2&&i<.28?"swing":_.tier>=6&&i<.45?"triple":_.tier>=3&&i<.7?"ring":"circle"}const t=n.script.phases[Math.min(n.phase,n.script.phases.length-1)];for(let i=0;i<t.length;i++){const r=t[n.pattern++%t.length];if(!r.startsWith("summon")||_.enemies.filter(s=>!s.dead&&s!==n).length<3)return r}return"circle"}const ja=(n,e,t)=>iu(n,e,t,!0);function au(n,e=Ly(n),t=1){const i=Ay()*(n.warnMul||1)*t,r=n.base==="boss",s=on[n.type],a=zt(n.d,T.d);if(e.startsWith("summon")){n.summonT=1.1,n.summonType=e.split(":")[1],Ne.warn(),st(`${n.script.name}在召喚援軍！`,"var(--hurt)");return}if(e==="storm"){UM(7),n.atkCd=1;return}if(e==="whirl"){n.whirl={t:0,wind:i*1.1,dir:a.clone(),spin:0,hitCd:0,sfxT:0},Ne.charge();return}if(e==="swing"){const c=on.brute;n.swing={t:0,dur:i*1.15,side:Math.random()<.5?0:1,dir:a.clone(),r:r?c.swingR*1.5:c.swingR,arc:c.swingArc,after:0},Ne.charge();return}if(e==="burrow"){rt(zn(n.d).addScaledVector(n.d,.3),14200944,18,5,.6);for(let c=0;c<8;c++){const u=ht(T.d,Ot(T.d,new Ie().randomDirection()).normalize(),r?3.8:2.8);if(!hn(u)){n.d.copy(u);break}}n.spawn=r?-1:-.7,n.burrowed=!0,n.atkCd=r?.4:.3;return}e==="triple"&&(n.chain={kind:"circle",left:2,idx:0,gap:0},e="circle"),(e==="nova"||e==="ring"&&s.doubleRing&&!n.chain)&&(n.chain={kind:"ring",left:1,idx:0,gap:0},e="ring"),e==="roll"&&(n.chain=n.chain||{kind:"roll",left:s.rolls-1,idx:0,gap:0}),e==="hop"&&!n.chain&&(s.hops||1)>1&&(n.chain={kind:"hop",left:s.hops-1,idx:0,gap:0});let o,l=i;if(e==="line")o=ar(n.d,a,s.lineLen||3.6,s.lineW||.55);else if(e==="hop")o={kind:"circle",c:T.d.clone(),r:s.hopR||1.25,attack:"hop"},l=i*1.05;else if(e==="spores"){o={kind:"circle",c:T.d.clone(),r:1.1,attack:"circle"},l=i*1.5;for(let c=1;c<s.spores;c++){const u={kind:"circle",c:ht(T.d,Ot(T.d,new Ie().randomDirection()).normalize(),1.4+Math.random()*1.6),r:1.1,attack:"circle"};ja(u,n,l+c*.3)}Uy(n,s)}else if(e==="roll")o=ar(n.d,a,s.rollLen+n.r,.62);else if(e==="charge")o=ar(n.d,a,9,.95),o.attack="roll",l=i*1.25;else if(e==="shoot"){if(o=ar(n.d,a,s.shotLen*.75,.22),l=i*.9,s.volley||n.volleyNow)for(const c of[-1,1]){const u=a.clone().applyAxisAngle(n.d,c*.36),d=ar(n.d,u,s.shotLen*.75,.22);d.attack="shoot",ja(d,n,l)}}else if(e==="fan"){o=ar(n.d,a,9,.6),o.attack="line",o.noLunge=!0,l=i*1.2;for(const c of[-1,1]){const u=ar(n.d,a.clone().applyAxisAngle(n.d,c*.5),9,.6);u.attack="line",ja(u,n,l)}}else if(e==="meteor"){o={kind:"circle",c:T.d.clone(),r:1.5,attack:"circle"},l=i*1.1;for(let c=0;c<4;c++){const u={kind:"circle",c:ht(T.d,Ot(T.d,new Ie().randomDirection()).normalize(),1.8+Math.random()*2.6),r:1.3,attack:"circle"};ja(u,n,l+(c+1)*.22)}}else e==="chillField"?(o={kind:"circle",c:T.d.clone(),r:2.8,attack:"circle",chill:!0},l=i*1.25):e==="mortar"?(o={kind:"circle",c:T.d.clone(),r:1.3,attack:"circle"},l=i*1.1):e==="ring"?(o={kind:"ring",c:n.d.clone(),r1:r?1.6:n.base==="jelly"?.7:1.2,r2:r?5.4:n.base==="jelly"?3:4.2},l=i*1.25):(o={kind:"circle",c:T.d.clone(),r:r?2.2:1.7},l=i*1.15);o.attack=o.attack||e,iu(o,n,l),Ne.warn()}function Dy(n){const e=n.chain;e.idx++,e.left--;const t=on[n.type].followWarn,i=t?t[Math.min(e.idx-1,t.length-1)]:e.idx===1?.6:.5;au(n,e.kind,i)}function _s(n,e,t){if(T.state==="ult"||T.guardInv>0)return"none";if((e==="ring"||e==="roll"||e==="shot"||e==="swing"||e==="whirl")&&T.air>0)return wr(ri.jumpRing),st("躍過","var(--ink)"),$t("jump",e),"jump";if(T.state==="dash"&&T.t<=Ve.iframe)return wr(ri.evade),_.slowT=.5,st("閃避斬","var(--dash)"),rt(T.p,9430015,16,6,.5),$t("evade",e),"evade";if(T.state==="parry"){const i=zt(T.d,t);if(i.angleTo(T.parryDir)<Math.PI*Ve.parryArc)return Iy(e==="shot"?null:n,i,T.t<=ou()),"parry"}return T.invuln>0?"none":(uu(t),"hit")}function Iy(n,e,t){const i=T.p.clone().addScaledVector(T.d,.45).addScaledVector(e,.55),r=uf(St.position.clone()).sub(i).normalize();if(rt(i,16777215,16,16,.22),rt(i,t?16763981:10470655,t?36:24,13,.35),rt(i,16751164,12,9,.45),Er(i,r,t?16763981:10470655,t?1.3:1),Er(i,T.d,16777215,.8),n){n.lunge=null,n.rolling=null,n.chain=null,n.swing=null,n.whirl=null,n.kb.copy(zt(n.d,T.d)).multiplyScalar(t?-5:-2.5),n.base==="boss"&&n.kb.multiplyScalar(.2);const s=t?n.base==="boss"?1.6:_n.stunPerfect:n.base==="boulder"?1.4:_n.stunNormal;s>0&&(n.stun=s)}cf(t?1.1:.5),jc(e.clone().negate(),t?.25:.15),t?(Ne.ding(),gs(.3,"#ffcc4d"),st("完美格擋！","var(--gold)"),wr(ri.perfect+(_.passives.has("focus")?15:0)),Kn("happy",.5)):(Ne.clang(),gs(.18,"#9fc4ff"),st("格擋成功","var(--guard)"),wr(ri.parry)),_.slowT=t?.6:.4,_.hitstop=.08,_.shake=Math.max(_.shake,t?.6:.4),T.guardInv=_.slowT+.25,_.stamina=Math.min(Ve.stamMax,_.stamina+1),T.state="free",T.parried=!0,T.anim.imp=.35,T.idleT=0,$t("parry",{e:n,perfect:t})}function Uy(n,e){let t=0;for(const i of _.enemies)i.dead||i===n||i.base==="boss"||i.hp>=i.maxHp||i.d.angleTo(n.d)*qe>e.healR||(i.hp=Math.min(i.maxHp,i.hp+e.heal),t++,rt(rn(i),8257418,12,4,.5));t&&(rt(rn(n),8257418,16,5,.6),st("蘑菇法師在補血！先打它","var(--hurt)"))}function Ny(n){const e=new Ie().crossVectors(n.d,zt(n.d,T.d));for(const t of[-1,1]){const i=ht(n.d,e.clone().multiplyScalar(t),.8);if(hn(i))continue;const r=xi("blobling",i);r.spawn=.4,r.atkCd=1.2+Math.random()*.8}st("分裂了！","var(--dash)")}const If={rage:{name:"狂暴",color:16730682,apply:n=>Object.assign(n,{spdMul:1.35,warnMul:.85,cdMul:.75})},guard:{name:"護盾",color:5999871,apply:n=>{n.guardHp=3,n.bubble=new ee(new gt(n.r*1.5,14,10),new Pt({color:8366335,transparent:!0,opacity:.22,depthWrite:!1})),n.mesh.add(n.bubble)}},giant:{name:"巨大",color:16763981,apply:n=>{n.hp=n.maxHp=n.maxHp*1.8,n.r*=1.3,n.scale=1.3}},split:{name:"分裂",color:11561983,apply:()=>{}}};function Fy(n){return n<gr.minTier?0:Math.min(gr.maxChance,gr.base+gr.perTier*n)}function Oy(n,e){const t=If[e];n.affix=e,t.apply(n);const i=new ee(new bi(n.r/(n.scale||1)*1.1,.05,4,20),new Pt({color:t.color}));i.rotation.x=Math.PI/2,i.position.y=-n.r/(n.scale||1)+.04,n.mesh.add(i),st(`精英出現：${t.name}${lM[n.base]||""}`,"var(--hurt)")}function By(n,e){if(e<=0||gr.skip.includes(n.base)||n.base==="boss"||Math.random()>=Fy(_.tier))return!1;const t=Object.keys(If).filter(i=>!(i==="split"&&n.base==="jelly"));return Oy(n,t[Math.floor(Math.random()*t.length)]),!0}function ky(n,e){const t=n.whirl,i=on[n.type];if(t.t+=e,t.t<t.wind)return;const r=t.t-t.wind;t.spin+=e*16,t.hitCd-=e,(t.sfxT-=e)<=0&&(t.sfxT=.22,Ne.whirl());const s=ht(n.d,t.dir,i.whirlSpeed*e);hn(s)?t.t=t.wind+i.whirlTime:(n.d.copy(s),t.dir=Ot(n.d,t.dir).normalize()),Math.random()<.6&&rt(rn(n).addScaledVector(n.d,-.2),16765498,1,3,.3),!(t.hitCd<=0&&T.p.distanceTo(rn(n))<i.whirlR+.5&&(t.hitCd=.6,_s(n,"whirl",n.d),!n.whirl))&&r>=i.whirlTime&&(n.whirl=null,n.stun=i.whirlDizzy,n.atkCd=Hi(n),st("轉暈了！快打","var(--gold)"))}function zy(n,e){const t=n.swing;if(t.t+=e,!(t.t<t.dur)){if(!t.done){t.done=!0,Ne.swing(),_.shake=Math.max(_.shake,.45);const i=new Ie().crossVectors(n.d,t.dir).normalize();for(let a=0;a<=6;a++){const o=(a/6-.5)*Math.PI*2*t.arc,l=t.dir.clone().multiplyScalar(Math.cos(o)).addScaledVector(i,Math.sin(o));rt(zn(ht(n.d,l,t.r*.8)).addScaledVector(n.d,.5),16742954,4,4,.35)}const r=n.d.angleTo(T.d)*qe,s=zt(n.d,T.d).angleTo(t.dir);r<t.r+.3&&s<Math.PI*t.arc&&_s(n,"swing",n.d)}t.after+=e,t.after>=.3&&(n.swing=null,n.atkCd=Hi(n))}}function oh(n,e){Ne.slam(),_.shake=Math.max(_.shake,e.base==="boss"?.8:.5),rt(zn(n).addScaledVector(n,.3),16765498,26,8,.6)}function lh(n){const e=n.enemy,t=n.attack,i=on[e.type];if(To(n),t==="shoot"){e.dead||(KM(e,n.dir),Ne.dash()),!n.free&&!e.chain&&(e.atkCd=Hi(e));return}if(n.free){t==="circle"&&oh(n.c,e),Qs(n,T.d)&&_s(e,t,e.d);return}if(t==="roll"){e.rolling={dir:n.dir.clone(),left:n.L-e.r,hit:new Set,touched:!1},Ne.roll();return}if(t==="hop"&&!hn(n.c)&&e.d.copy(n.c),e.leapFrom=null,e.leapK=0,t==="line")n.noLunge||(e.lunge={dir:n.dir.clone(),left:n.L*.8});else{const r=t==="circle"?n.c:e.d;oh(r,e),e.slamT=.35,i.burnSlam&&t==="circle"&&QM(r,1.8,4)}e.chain||(e.atkCd=Hi(e)),Qs(n,T.d)&&_s(e,t,e.d)==="hit"&&(n.chill||i.chill)&&Qy(2.2),e.chain&&!e.dead&&(e.chain.left>0?e.chain.gap=.18:(e.chain=null,e.atkCd=Hi(e)))}const Hi=n=>(_n.cdMin+Math.random()*_n.cdRand)*(n.cdMul||1)*(_.tier===1||_.tut?1.5:1)*(n.base==="boss"&&n.phase>0?.7:1);function Hy(n,e){const t=n.rolling,i=on[n.type],r=Math.min(t.left,i.rollSpeed*e),s=ht(n.d,t.dir,r);hn(s)?(t.left=0,rt(zn(n.d).addScaledVector(n.d,.2),9430015,14,5,.5)):(n.d.copy(s),t.dir=Ot(n.d,t.dir).normalize(),t.left-=r),n.model.rig.roll&&(n.model.rig.roll.rotation.x+=r/n.r),Math.random()<.5&&rt(zn(n.d).addScaledVector(n.d,.1),12101768,1,2,.4);const a=rn(n);if(!(!t.touched&&T.p.distanceTo(a)<n.r+.5+(T.air>0,0)&&(t.touched=!0,_s(n,"roll",n.d),!n.rolling))){for(const o of _.enemies)o===n||o.dead||o.spawn<1||t.hit.has(o)||rn(o).distanceTo(a)>o.r+n.r||(t.hit.add(o),Dr(o,2,t.dir,{pierce:!0}),_.combo=Math.max(0,_.combo-1));t.left<=0&&(n.rolling=null,_.shake=Math.max(_.shake,.25),n.chain&&n.chain.left>0?n.chain.gap=.12:n.base==="boss"?n.atkCd=Hi(n):(n.chain=null,n.stun=i.dizzy,n.atkCd=Hi(n),st("滾石暈了！快打","var(--gold)"),$t("dizzy",n)))}}function Gy(n,e){if(e<on[n.type].diveRange||n.diveCd>0)return;n.diveCd=5;const t=af(T.d,.3);!t||t.angleTo(T.d)*qe>e-1||(rt(zn(n.d).addScaledVector(n.d,.2),9430015,16,5,.6),n.d.copy(t),n.spawn=-1.1,n.atkCd=Math.max(n.atkCd,1.2))}function Vy(n,e){for(const i of[..._.warnings])i.free&&nh(i,n)&&lh(i);for(const i of _.enemies){if(i.dead)continue;if(i.spawn<1){i.spawn+=e*2;const d=Kt(i.spawn,0,1);i.mesh.scale.setScalar((d<1?d*1.15:1)*(i.scale||1)),i.mesh.visible=i.spawn>0;continue}if(i.mesh.scale.setScalar(i.scale||1),i.bob+=n*5,i.slamT=Math.max(0,i.slamT-n),i.kb.lengthSq()>.01){const d=ht(i.d,i.kb,n);hn(d)||i.d.copy(d),i.kb.copy(Ot(i.d,i.kb)).multiplyScalar(Math.exp(-6*n))}if(i.stun>0){i.stun-=n;continue}if(i.rolling){Hy(i,n);continue}if(i.summonT>0){if(i.summonT-=n,i.summonT<=0){for(const d of[-1,1]){const h=ht(i.d,new Ie().crossVectors(i.d,zt(i.d,T.d)).multiplyScalar(d),2.6);if(!hn(h)){const f=xi(i.summonType,h);f.atkCd=1.2+Math.random()}}Ne.slam(),_.shake=.7,i.atkCd=Hi(i)}continue}if(i.swing){zy(i,n);continue}if(i.whirl){ky(i,n);continue}if(i.lunge){const d=Math.min(i.lunge.left,18*n),h=ht(i.d,i.lunge.dir,d);hn(h)||i.d.copy(h),i.lunge.dir=Ot(i.d,i.lunge.dir).normalize(),i.lunge.left-=d,i.lunge.left<=0&&(i.lunge=null);continue}if(i.warn){const d=i.warn;if(d.attack==="hop"&&d.dur-d.t<.32){i.leapFrom||(i.leapFrom=i.d.clone()),i.leapK=Kt(1-(d.dur-d.t)/.32,0,1);const h=new Ie().lerpVectors(i.leapFrom,d.c,i.leapK).normalize();hn(h)||i.d.copy(h)}nh(d,n)&&lh(d);continue}if(i.chain){i.chain.gap-=n,i.chain.gap<=0&&Dy(i);continue}const r=on[i.type],s=i.d.angleTo(T.d)*qe,a=zt(i.d,T.d);if(r.turn){i.face=i.face?Ot(i.d,i.face).normalize():a.clone();const d=i.face.angleTo(a);d>.001&&i.face.lerp(a,Math.min(1,r.turn*n/d)).normalize()}const o=i.base==="boss"||Py()<Ry(),l=!i.dummy&&_.graceT<=0&&i.atkCd<=0&&o&&T.state!=="ult"&&_.mode==="play",c=l||i.atkCd<1?r.pref:r.pref+1.4,u=new Ie().crossVectors(i.d,a).multiplyScalar(i.strafe*.45);if(!i.dummy){const d=i.base==="archer"&&s<r.flee?1.6:1,h=a.clone().multiplyScalar(s>c+.3?1:s<c-.5?-.7*d:0).add(u),f=ht(i.d,h,r.speed*(i.spdMul||1)*n*Kt(1-_c(i.d,a)*.8,.4,1.4));if(r.aquatic)i.diveCd-=n,rf(f)?i.d.copy(f):i.strafe*=-1,Gy(i,s);else if(!hn(f))i.d.copy(f),i.stuck=Math.max(0,i.stuck-n);else if(i.strafe*=-1,i.stuck+=n*2,i.stuck>5&&s>r.range){i.stuck=0,rt(zn(i.d).addScaledVector(i.d,.3),10185727,12,4,.5);const g=ht(T.d,zt(T.d,i.d),r.pref+1);hn(g)||(i.d.copy(g),i.spawn=-.5)}Math.random()<n*.25&&(i.strafe*=-1)}i.atkCd-=n,l&&s<r.range&&au(i)}const t=_.enemies;for(let i=0;i<t.length;i++)for(let r=i+1;r<t.length;r++){const s=t[i],a=t[r];if(s.dead||a.dead||s.rolling||a.rolling)continue;const o=s.d.angleTo(a.d)*qe,l=s.r+a.r+.2;if(o<l&&o>1e-4){const c=zt(s.d,a.d).multiplyScalar((l-o)/2),u=ht(s.d,c,-1),d=ht(a.d,c,1);!hn(u)&&!s.dummy&&s.d.copy(u),!hn(d)&&!a.dummy&&a.d.copy(d)}}for(const i of t)i.dead||Xy(i,e)}const Wy=new Ar;function Xy(n,e){const t=n.model,i=t.rig,r=(n.base==="grunt"?Math.sin(n.bob)*.06:n.base==="jelly"?Math.sin(n.bob*.7)*.12:n.base==="bee"?.55+Math.sin(n.bob*1.4)*.12:0)+Math.sin(Math.PI*(n.leapK||0))*1.3;if(n.mesh.position.copy(n.d).multiplyScalar(qe+an(n.d)+n.r+r),n.mesh.quaternion.setFromUnitVectors(Wi,n.d),n.squash>.01&&!(n.spawn<1)){const l=n.squash*.2,c=n.scale||1;n.mesh.scale.set(c*(1+l),c*(1-l),c*(1+l)),n.squash*=Math.exp(-e*14)}const a=(n.swing?n.swing.dir:n.rolling?n.rolling.dir:n.lunge?n.lunge.dir:n.warn&&n.warn.kind==="line"?n.warn.dir:n.face||zt(n.d,T.d)).clone().applyQuaternion(Wy.copy(n.mesh.quaternion).invert());n.mesh.rotateY(Math.atan2(a.x,a.z));const o=n.warn?n.warn.t/n.warn.dur:0;t.body.scale.setScalar(1+o*(n.base==="boulder"?.08:.2)+(n.warn?Math.sin(n.bob*6)*.04:0));for(const l of t.tint)l.emissive.set(n.flash>0?16777215:n.armored?16756736:l.userData.em??(l.userData.em=l.emissive.getHex())),l.emissiveIntensity=n.flash>0?1:n.armored?1+Math.sin(n.bob*2)*.4:.35+o*1.4;if(n.flash>0&&(n.flash-=e),t.stars.visible=n.stun>0,t.stars.rotation.y+=e*6,n.whirl){const l=n.whirl,c=Math.min(1,l.t/l.wind),u=t.tint[0];l.t<l.wind?(u.emissive.copy(qy).lerp(ch,c),u.emissiveIntensity=.6+c*1.6+(l.wind-l.t<.15?Math.floor(l.t*30)%2*1.2:0),t.body.position.x=Math.sin(n.bob*20)*.03*c):(u.emissive.copy(ch),u.emissiveIntensity=1.4,n.mesh.rotateY(l.spin),t.body.position.x=0)}if(n.base==="grunt"){const l=n.lunge||n.whirl&&n.whirl.t>=n.whirl.wind?1:n.whirl?Math.min(1,n.whirl.t/n.whirl.wind)*.6:o;i.arm.rotation.x=l*Math.PI/2,i.arm.position.z=.1+(n.lunge?.25:-o*.15)}else if(n.base==="jelly")i.tentacles.scale.y=1+Math.sin(n.bob)*.18+o*.4;else if(n.base==="bee")i.wings.scale.y=.4+Math.abs(Math.sin(n.bob*9));else if(n.base==="archer")i.bow.rotation.y=-o*.5,i.bow.position.z=.2+o*.12;else if(n.base==="brute"||n.base==="boss"){const l=n.warn?Math.min(1,o*1.4):0,c=n.slamT/.35,u=n.summonT>0?Math.sin(n.bob*4)*.5+.5:0;i.fists.forEach((d,h)=>{const f=h?1:-1;d.position.set(f*(.98-l*.45),-.2+l*1.15-c*.3+u*.6,.25+l*.1)}),Yy(n,i.fists),i.core.position.y=-c*.08,n.base==="brute"&&t.tint[0].color.set(n.hp>5?16777215:n.hp>2.5?16766708:16755421)}else if(n.base==="boulder"){if(!n.rolling){const l=i.roll.rotation.x,c=Math.round(l/(Math.PI*2))*Math.PI*2;i.roll.rotation.x=l+(c-l)*(1-Math.exp(-e*8))+(n.warn?Math.sin(n.bob*14)*.05*o:0)}i.eye.material.emissiveIntensity=n.stun>0?.3:2.2+o*3,i.pebbles.forEach((l,c)=>{l.visible=!!n.rolling,l.position.set(Math.cos(n.bob*2+c*1.6)*.75,-.3+c%2*.4,Math.sin(n.bob*2+c*1.6)*.75)})}}const qy=new Re(16734746),ch=new Re(16769088),$y=new Re(16747034),uh=new Re(16718346);function Yy(n,e){e.forEach((t,i)=>{const r=t.material,s=n.swing,a=s&&s.side===i;if(r.userData.c0===void 0&&(r.userData.c0=r.emissive.getHex(),r.userData.i0=r.emissiveIntensity),!a){r.emissive.setHex(r.userData.c0),r.emissiveIntensity=r.userData.i0;return}const o=i?1:-1,l=Math.min(1,s.t/s.dur);if(!s.done)t.position.set(o*(1.05+l*.2),-.2+l*.95,.25-l*.6),r.emissive.copy($y).lerp(uh,l),r.emissiveIntensity=.5+l*2.2+(s.dur-s.t<.15?Math.floor(s.t*30)%2*1.5:0);else{const c=Math.min(1,s.after/.12),u=o*((1-c)*1.9-c*.9);t.position.set(Math.sin(u)*1.2,.3,Math.cos(u)*1.2),r.emissive.copy(uh),r.emissiveIntensity=2.5*(1-s.after/.3)}})}function jy(){_.enemies.forEach(n=>!n.dead&&su(n)),_.enemies=[],_.warnings.forEach(To),_.warnings=[]}const T={d:new Ie(0,0,1),p:new Ie,face:new Ie(1,0,0),state:"free",t:0,air:0,invuln:0,guardInv:0,hp:Ve.maxHp,moving:0,idleT:0,vel:new Ie,chillT:0,burnT:0,anim:{sy:1,vy:0,sz:1,vz:0,hop:0,imp:0,lean:0,vl:0}};function Oi(n){T.d.copy(n).normalize(),T.p.copy(zn(T.d))}const ou=()=>_.tier<=2||_.tut?Ve.perfectEarly:Ve.perfectLate,wr=n=>{_.ult=Math.min(100,_.ult+n)};function xr(n,e){const t=lt.quaternion.clone().invert(),i=new Ie(1,0,0).applyQuaternion(St.quaternion).applyQuaternion(t),r=new Ie(0,1,0).applyQuaternion(St.quaternion).applyQuaternion(t),s=Ot(T.d,i.multiplyScalar(n).addScaledVector(r,-e));return s.lengthSq()>1e-8?s.normalize():T.face.clone()}const Ky=.14,lu=(n,e)=>T.state==="dash"||T.state==="parry"?(T.buf={k:n,dir:e,t:Ky},!0):!1;function Zy(n){const e=T.buf;if(e){if((e.t-=n)<=0){T.buf=null;return}T.state!=="free"||_.mode!=="play"||(T.buf=null,e.k==="dash"?Co(e.dir):e.k==="tap"?Po():ea(e.dir))}}function Co(n){return T.state!=="free"?(lu("dash",n),!1):_.stamina<1?(st("體力不足","var(--dash)"),Ne.empty(),!1):(_.stamina-=1,T.state="dash",T.t=0,T.dashDir=n,T.face=n.clone(),T.dashHit=new Set,Ne.dash(),T.dashLen=Ve.dashDist,$t("dash"),!0)}function ea(n){if(T.state!=="free"){lu("parry",n);return}T.state="parry",T.t=0,T.parried=!1,T.parryDir=n,T.face=n.clone(),T.anim.imp=.2,xt(300,.08,"square",.04),An.visible=!0,$t("guard")}function Uf(n=Ve.lockRange){let e=null,t=n;for(const i of _.enemies){if(i.dead||i.spawn<1)continue;const r=i.d.angleTo(T.d)*qe-i.r;r<t&&(t=r,e=i)}return e?{e,dist:t+e.r}:null}function Po(){if(lu("tap"))return;const n=Uf(),e=n?zt(T.d,n.e.d):T.face.clone();Co(e)&&n&&(T.dashLen=Kt(n.dist+.6,Ve.tapDashMin,Ve.tapDashMax),rt(rn(n.e).addScaledVector(n.e.d,.4),16751164,10,3,.4))}function cu(){_.state!=="play"||_.mode!=="play"||T.air<=0&&(T.state==="free"||T.state==="dash")&&(T.air=Ve.jumpTime,Ne.jump(),$t("jumpPress"))}function Jy(){const n=Uf(12);return n?zt(T.d,n.e.d):T.face.clone()}function uu(n){if(_.tut?.noDamage){T.invuln=1,T.anim.imp=1,_.shake=Math.max(_.shake,.8),Ne.hurt(),gs(.3,"#ff4a5a"),Kn("hurt",.6),$t("hurt");return}T.hp--,_.hurtCount++,T.hp<=0&&_.passives.has("undying")&&!_.undyingUsed&&(_.undyingUsed=!0,T.hp=1,st("不屈！","var(--gold)")),T.invuln=Ve.hurtInvuln,_.combo=0,T.anim.imp=1,_.shake=Math.max(_.shake,1.1),Ne.hurt(),gs(.45,"#ff4a5a"),$i(T),Kn("hurt",.7);const e=zt(T.d,n).negate();isNaN(e.x)||(Oi(ht(T.d,e,Ve.knockback)),jc(e,.35)),T.state==="parry"&&(T.state="free",An.visible=!1),$t("hurt")}function Qy(n){T.chillT=n,st("凍傷！行動變慢","var(--ink)"),rt(T.p,12577535,18,5,.6)}function eS(n){const e=gc(T.d)==="lava"&&T.air<=0&&T.state!=="dash"&&T.state!=="ult";T.burnT=e?T.burnT+n:0,!(T.burnT<Mi.burnDelay+(_.passives.has("spikes")?.4:0))&&(T.burnT=0,rt(T.p,16738848,26,7,.6),st("燙！","var(--hurt)"),$t("burn"),T.invuln<=0&&!(T.guardInv>0)&&uu(T.d),Nf())}function Nf(){const n=dM(T.d);n&&(T.hop={from:T.d.clone(),to:n,t:0,dur:Math.max(.18,Math.min(.4,n.angleTo(T.d)*qe/12))},T.air=Math.max(T.air,T.hop.dur))}function tS(n){if(T.invuln-=n,T.guardInv=Math.max(0,T.guardInv-n),T.chillT=Math.max(0,T.chillT-n),T.air>0&&(T.air-=n,T.air<=0&&(Ne.land(),T.anim.imp=1)),T.moving=0,T.idleT+=n,T.hop){const a=T.hop;a.t+=n;const o=Kt(a.t/a.dur,0,1);Oi(new Ie().lerpVectors(a.from,a.to,o).normalize()),T.burnT=0,T.vel.set(0,0,0),o>=1&&(T.hop=null),_.stamina=Math.min(Ve.stamMax,_.stamina+n/Ve.stamRegen);return}const e=_.move,t=gc(T.d)==="ice",i=T.chillT>0?.6:1;if(T.state==="free"&&e.m>0){const a=xr(e.sx,e.sy),o=Kt(1-_c(T.d,a)*.8,.5,1.4)*(hn(T.d)?Ve.waterSlow:1)*i,l=Ve.moveSpeed*e.m*o;t?T.vel.lerp(a.clone().multiplyScalar(l),1-Math.exp(-n*(_.passives.has("spikes")?Mi.spikeGrip:Mi.iceGrip))):T.vel.copy(a).multiplyScalar(l),Oi(ht(T.d,T.vel,n)),T.vel.copy(Ot(T.d,T.vel)),T.face=a,T.moving=e.m,T.idleT=0}else if(t&&T.state!=="dash"&&T.vel.lengthSq()>.02)Oi(ht(T.d,T.vel,n)),T.vel.copy(Ot(T.d,T.vel)).multiplyScalar(Math.exp(-n*(_.passives.has("spikes")?Mi.spikeGrip:Mi.iceGrip*.55)));else if(T.state==="dash"){T.t+=n;const a=T.dashDir,o=Kt(1-_c(T.d,a)*.9,.55,1.5);Oi(ht(T.d,a,Ve.dashDist/Ve.dashTime*o*n)),T.dashDir=Ot(T.d,a).normalize(),T.face=T.dashDir,Math.random()<.8&&rt(T.p.clone().addScaledVector(T.d,.4),9430015,1,1.5,.3);for(const l of _.enemies)l.dead||l.spawn<1||T.dashHit.has(l)||T.p.distanceTo(rn(l))>l.r+.65||(T.dashHit.add(l),Dr(l,o*(l.stun>0?1.5:1)*(_.passives.has("ram")?1.4:1)*(_.ramMul||1),T.dashDir));T.t>=Ve.dashTime*T.dashLen/Ve.dashDist&&(T.state="free",T.anim.imp=.7,T.vel.copy(T.dashDir).multiplyScalar(t?Ve.moveSpeed*1.4:0),gc(T.d)==="lava"&&Nf())}else if(T.state==="parry"){T.t+=n,T.t>=Ve.parryTime&&(T.state="free",An.visible=!1,xt(240,.06,"sine",.05));const a=T.t<=ou(),o=1-T.t/Ve.parryTime;T.parried||An.material.color.set(a?16763981:5999871),An.material.opacity=o<.25?Math.floor(T.t*24)%2?.85:.25:.5+.45*o}else An.visible&&(An.material.opacity=Math.min(.85,T.guardInv*2),T.guardInv<=0&&(An.visible=!1));if(T.state!=="free")T.idleT=0;else if(T.idleT>.8){const a=xr(0,1);T.face=Ot(T.d,T.face.clone().lerp(a,1-Math.exp(-n*4))).normalize()}eS(n),Zy(n),_.stamina=Math.min(Ve.stamMax,_.stamina+n/Ve.stamRegen);const r=_.passives.has("magnet"),s=_.crystals.find(a=>a.d.angleTo(T.d)*qe<(r?2.75:1.1));if(s){const a=ri.crystalPay+(r?5:0)+(_.gemPickup||0);rt(s.mesh.position,4843263,20,6,.6),lt.remove(s.mesh),_.crystals=_.crystals.filter(o=>o!==s),wr(ri.crystal),_.runCrystals+=a,Ne.pickup(),$t("crystal"),$i(T),st(`星晶 +${a}　大招 +${ri.crystal}`,"var(--ink)")}}function nS(n,e){rs.position.copy(T.p),rs.quaternion.setFromUnitVectors(Wi,T.d);const t=Ot(T.d,T.face).applyQuaternion(rs.quaternion.clone().invert());t.lengthSq()>1e-6&&(ss.rotation.y=Math.atan2(t.x,t.z));const i=T.anim,r=T.state==="dash"||T.state==="ult";let s=1+Math.sin(e*3)*.05,a=1,o=0;if(T.moving>0&&T.state==="free"&&T.air<=0){i.hop+=n*(8+T.moving*6);const h=Math.abs(Math.sin(i.hop));o=h*.3*T.moving,s=.8+h*.38}if(r?(s=.6,a=1.8):T.state==="parry"&&(s=.9),T.air>0){const h=1-T.air/Ve.jumpTime;o=Math.sin(Math.PI*h)*1.1,s=h<.5?1.3:1.05}_.state==="over"&&(s=.55,o=0),s*=1-i.imp*.42,i.imp*=Math.exp(-n*7),i.vy+=(s-i.sy)*280*n,i.vy*=Math.exp(-n*13),i.sy+=i.vy*n,i.vz+=(a-i.sz)*280*n,i.vz*=Math.exp(-n*13),i.sz+=i.vz*n;const l=1/Math.sqrt(Math.max(.25,i.sy*i.sz));tu.scale.set(l,i.sy,i.sz*l),ss.position.y=o;const c=r?.35:T.moving>0?-.18*T.moving:0;i.vl+=(c-i.lean)*160*n,i.vl*=Math.exp(-n*7),i.lean+=i.vl*n,Cn.rotation.x=i.lean,(_.state==="play"||_.state==="over"||_.state==="win")&&GM(n,T),kM(n,_.state==="over"?"dizzy":r||T.state==="parry"||_.mode==="ultDraw"?"determined":"idle");const u=T.state==="parry"&&T.t<=ou();go.emissive.set(T.state==="ult"||u||T.guardInv>0?13144064:T.state==="parry"?2052048:T.state==="dash"?2783952:T.chillT>0?8376575:671626),go.emissiveIntensity=T.state==="free"&&!(T.guardInv>0)?.6:.9;let d=0;if(T.state==="parry"){const h=Kt(T.t/Ve.parryTime,0,1),f=(h-.18)/.82;d=h<.18?1-(1-h/.18)**3:1-f*f*(3-2*f)}ss.position.x=0,ss.position.z=d*.38,Cn.rotation.x+=d*.3,rs.visible=T.invuln>0&&T.state!=="ult"&&_.state==="play"?Math.floor(e*16)%2===0:!0}function iS(n){Object.assign(T,{buf:null,hp:Ve.maxHp,invuln:0,guardInv:0,state:"free",air:0,t:0,chillT:0,burnT:0,hop:null}),T.vel.set(0,0,0),An.visible=!1,Oi(n),Kn("idle")}const rS=Q("ptrs"),Ff=[];for(let n=0;n<3;n++){const e=document.createElement("i");e.hidden=!0,rS.append(e),Ff.push(e)}const sS=6.5;function aS(n){let e=[];_.state==="play"&&_.mode==="play"&&_.storm<.5&&(e=_.enemies.filter(s=>!s.dead&&s.spawn>=0&&s.d.angleTo(T.d)*qe>sS).sort((s,a)=>s.d.angleTo(T.d)-a.d.angleTo(T.d)).slice(0,3));const t=n(T.d),i=innerWidth/2-34,r=innerHeight/2-90;Ff.forEach((s,a)=>{const o=e[a];if(s.hidden=!o,!o)return;const l=n(ht(T.d,zt(T.d,o.d),2.5)),c=Math.atan2(l.y-t.y,l.x-t.x);s.style.transform=`translate(${innerWidth/2+Math.cos(c)*i}px,${innerHeight/2+Math.sin(c)*r}px) rotate(${c}rad)`,s.className=o.base==="boss"?"boss":""})}const Ct={circle:"實心圓：走出去或衝出去",ring:"圓環震波：按跳躍鈕躍過，或格擋",boulder:"滾石會連滾三次，一次比一次快！滾完會暈",jelly:"水母住在湖裡：衝進水中或用大招掠過湖面打牠",archer:"箭可以格擋反彈，也能跳過",ice:"冰面會滑：提早放開方向，用慣性走位",frostGrunt:"霜矛兵刺中會凍傷，讓你變慢",frostBrute:"冰巨魔的震波有兩圈",frostArcher:"霜弓手一次放三支箭",storm:"沙暴來襲時看不見敵人，只看得見黃色預警！",sandGrunt:"沙矛兵會鑽地，從身邊冒出來",sandBoulder:"沙滾石會連滾四次",whirl:"長矛兵全身發黃光＝要旋轉突進了！往側邊閃開或跳過，轉完會暈",swing:"巨魔的拳頭發紅＝要橫掃了！跳起來、衝撞穿過，或朝它格擋",bee:"蜂群很脆但很快：點一下自動衝撞，或用大招一筆掃掉",hopper:"跳跳蛙會跳到黃圈落地，還會連跳兩次：看準落點再閃",shell:"盾甲蟲正面擋得住衝撞：繞到牠背後或側面，或格擋牠的盾擊",splitter:"分裂泥球打死會分成兩隻小的",shroom:"蘑菇法師會種毒菇、幫隊友補血：優先打倒它",elite:"有光圈的是精英：狂暴、護盾、巨大或分裂",lava:"岩漿河會燙傷：用跳躍或衝撞越過，或走沒有岩漿的淺灘",lavaGrunt:"熔矛兵死掉時會爆炸，打完快走開",lavaBrute:"熔岩巨魔砸過的地面會燃燒一陣子",magmaJelly:"岩漿水母的體型更大，也住在岩漿裡"},Et=[{id:"grass",name:"草原星",blurb:"溫和的起點。湖面會擋住敵人，大招掠過湖面耗墨很少。",hpMul:1,reward:50,roster:["grunt","brute","boulder","jelly","archer"],extra:["bee","hopper","shell","splitter","shroom"],levels:[{name:"初次降落",tier:1,waves:["grunt*2","grunt*3",["grunt*2 bee*3",Ct.bee],"grunt*3 bee*3","grunt*3 brute"]},{name:"巨魔現身",tier:2,waves:[["grunt*3",Ct.whirl],["grunt*2 brute",Ct.circle],["grunt*2 hopper",Ct.hopper],["grunt*3 brute",Ct.swing],"grunt*2 hopper*2 / bee*3 @1"]},{name:"震波平原",tier:3,waves:["grunt*2 brute",["grunt*3 brute",Ct.ring],["shell grunt*2",Ct.shell],["shell brute / grunt*3 @1",Ct.elite],"shell*2 grunt*2 brute / hopper*2 @1"]},{name:"落石山道",tier:3,waves:[["grunt*2 boulder",Ct.boulder],"hopper*2 boulder","grunt*3 brute boulder","shell boulder*2 / bee*4 @1","grunt*3 brute boulder / hopper*2 @1"]},{name:"水母之湖",tier:4,waves:[["jelly grunt*2",Ct.jelly],"jelly*2 hopper*2",["jelly splitter*2",Ct.splitter],"jelly*2 boulder shell","jelly*2 splitter*2 brute","jelly*3 boulder / bee*4 @1"]},{name:"松果森林",tier:4,waves:[["archer grunt*2",Ct.archer],"archer*2 shell",["archer shroom grunt*2",Ct.shroom],"archer*2 jelly hopper*2","archer*2 shroom boulder brute","archer*3 jelly splitter*2","archer*3 boulder brute / shroom bee*4 @2"]},{name:"總攻擊",tier:5,waves:["grunt*4 brute / shell boulder hopper @1","archer*2 jelly boulder / grunt*3 shroom @2","shell*2 brute*2 boulder / archer*2 splitter*2 @2","archer*3 jelly hopper*2 / grunt*3 brute shroom @2","grunt*4 brute*2 shell / archer*2 jelly bee*5 @2"]},{name:"岩王",tier:6,boss:!0,waves:[["rockKing grunt*2 / grunt*3 @1","岩王：完美格擋可以讓它暈眩"]]}]},{id:"ice",name:"冰雪星",blurb:"結冰的湖面會滑，放開方向後還會繼續滑一段。",hpMul:1.15,reward:80,gate:10,roster:["frostGrunt","frostBrute","boulder","jelly","frostArcher"],extra:["hopper","shell","bee","shroom","splitter"],levels:[{name:"滑行訓練",tier:3,hpMul:1,waves:[["grunt*3",Ct.ice],"grunt*3 archer","grunt*2 hopper*2","grunt*4 archer","grunt*3 brute bee*3"]},{name:"霜矛小隊",tier:4,hpMul:1.05,waves:[["frostGrunt*3",Ct.frostGrunt],"frostGrunt*3 archer","frostGrunt*4 brute","frostGrunt*4 archer","frostGrunt*5 brute"]},{name:"冰原震動",tier:5,waves:["frostGrunt*2 brute",["frostGrunt*2 frostBrute",Ct.frostBrute],"frostGrunt*3 frostBrute boulder","frostBrute*2 boulder","frostGrunt*4 frostBrute boulder","frostBrute*3 boulder"]},{name:"冰下來客",tier:5,waves:["jelly*2 frostGrunt*2","jelly*2 frostBrute","jelly*3 archer*2","jelly*2 frostGrunt*3 / boulder*2 @1","jelly*4 archer*2","jelly*3 frostGrunt*3 / boulder*2 @1"]},{name:"三連箭",tier:6,waves:[["frostArcher frostGrunt*2",Ct.frostArcher],"frostArcher*2 frostGrunt*2","frostArcher*2 frostBrute","frostArcher*2 boulder*2 / frostGrunt*3 @1","frostArcher*3 frostBrute","frostArcher*3 boulder*2 / frostGrunt*3 @1"]},{name:"白色迷宮",tier:6,waves:["frostGrunt*4 boulder / frostBrute @1","frostArcher*2 jelly*2 / frostGrunt*3 @1","frostBrute*2 boulder*2 / frostArcher*2 shell @1","frostGrunt*4 frostArcher*2 / frostBrute*2 hopper*2 @2","frostBrute*3 boulder*2 / frostArcher*2 @1","frostGrunt*5 frostArcher*2 / frostBrute*2 @2"]},{name:"永凍要塞",tier:7,waves:["frostGrunt*4 frostBrute boulder / frostArcher*2 jelly @2","frostBrute*2 frostArcher*2 shroom / boulder*2 frostGrunt*3 @2","frostGrunt*5 frostBrute*2 / frostArcher*3 jelly*2 @3","frostBrute*3 frostArcher*2 shell*2 / boulder*2 frostGrunt*3 shroom @2","frostGrunt*6 frostBrute*2 / frostArcher*3 jelly*2 @3"]},{name:"冰晶女王",tier:7,boss:!0,waves:[["frostQueen frostGrunt*2 / frostGrunt*3 @1","冰晶女王：護甲展開時，照編號順序劃過光點"]]}]},{id:"desert",name:"沙漠星",blurb:"沙暴定期掃過，看不見敵人，只看得見地上的預警。",hpMul:1.3,reward:110,gate:22,roster:["sandGrunt","brute","sandBoulder","jelly","archer"],extra:["bee","splitter","hopper","shell","shroom"],levels:[{name:"沙丘邊境",tier:4,hpMul:1.05,waves:[["grunt*4",Ct.storm],"grunt*3 archer*2","grunt*2 bee*4","grunt*3 splitter*2","grunt*4 brute boulder"]},{name:"地底伏兵",tier:5,hpMul:1.1,waves:[["sandGrunt*3",Ct.sandGrunt],"sandGrunt*4 archer","sandGrunt*3 brute","sandGrunt*4 boulder","sandGrunt*4 brute","sandGrunt*5 boulder"]},{name:"風化巨岩",tier:7,waves:[["sandBoulder grunt*2",Ct.sandBoulder],"sandBoulder*2 sandGrunt*2","sandBoulder*2 hopper*2","sandBoulder*2 archer*2 / sandGrunt*3 @1","sandBoulder*3 brute shell","sandBoulder*3 archer*2 / sandGrunt*3 @1"]},{name:"綠洲之戰",tier:7,waves:["jelly*2 sandGrunt*3","jelly*2 archer*2 splitter*2","jelly*3 sandBoulder sandGrunt*2","jelly*2 brute*2 / sandGrunt*4 @1","jelly*4 sandBoulder sandGrunt*2","jelly*3 brute*2 / sandGrunt*4 @1"]},{name:"沙中箭雨",tier:8,waves:["archer*3 sandGrunt*2","archer*3 shroom boulder","archer*4 sandBoulder / sandGrunt*4 bee*4 @1","archer*3 jelly*2 / brute*2 sandGrunt*2 @2","archer*5 sandBoulder / sandGrunt*4 @1","archer*4 jelly*2 / brute*2 sandGrunt*2 @2"]},{name:"風暴之眼",tier:8,waves:["sandGrunt*5 brute / archer*3 @2","sandBoulder*3 archer*2 / brute*2 shell @1","sandGrunt*4 brute*2 shroom / sandBoulder*2 jelly*2 @2","archer*4 brute*2 / sandGrunt*5 @2","sandGrunt*5 brute*2 / sandBoulder*2 jelly*2 @2","archer*5 brute*2 / sandGrunt*5 @2"]},{name:"王蟲巢穴",tier:9,waves:["sandGrunt*6 brute*2 / sandBoulder*2 archer*3 @3","brute*3 archer*3 / sandGrunt*5 sandBoulder @3","sandBoulder*3 brute*2 jelly*2 / sandGrunt*6 archer*2 @3","brute*4 archer*3 / sandGrunt*5 sandBoulder @3","sandBoulder*4 brute*2 jelly*2 / sandGrunt*6 archer*2 @3"]},{name:"沙海王蟲",tier:9,boss:!0,waves:[["sandWyrm sandGrunt*2 / sandGrunt*3 @1","沙海王蟲：光點是牠的身體，會移動，一筆全部切過"]]}]},{id:"volcano",name:"火山星",blurb:"岩漿河會燙傷你，跳躍和衝撞可以安全越過。",hpMul:1.4,reward:140,gate:36,roster:["lavaGrunt","lavaBrute","boulder","magmaJelly","archer"],extra:["shell","shroom","hopper","splitter","bee"],levels:[{name:"灰燼平原",tier:5,hpMul:1.1,waves:[["grunt*4 archer",Ct.lava],"grunt*3 hopper*2","grunt*3 brute boulder archer","grunt*3 shell bee*3","grunt*4 brute boulder archer"]},{name:"自爆小隊",tier:6,hpMul:1.15,waves:[["lavaGrunt*3",Ct.lavaGrunt],"lavaGrunt*4 archer","lavaGrunt*4 boulder","lavaGrunt*5 brute","lavaGrunt*5 boulder","lavaGrunt*6 brute"]},{name:"焦土行軍",tier:9,waves:[["lavaBrute grunt*3",Ct.lavaBrute],"lavaBrute lavaGrunt*3","lavaBrute*2 archer*2 shroom","lavaBrute*2 boulder*2 / lavaGrunt*3 @1","lavaBrute*3 archer*2 shell","lavaBrute*3 boulder*2 / lavaGrunt*3 @1"]},{name:"岩漿之主",tier:9,waves:[["magmaJelly lavaGrunt*3",Ct.magmaJelly],"magmaJelly*2 archer*2","magmaJelly*2 lavaBrute","magmaJelly*3 boulder*2 / lavaGrunt*4 @1","magmaJelly*3 lavaBrute","magmaJelly*4 boulder*2 / lavaGrunt*4 @1"]},{name:"火雨",tier:10,waves:["archer*4 lavaGrunt*2","archer*3 lavaBrute*2 shroom","archer*4 magmaJelly*2 / lavaGrunt*4 hopper*2 @2","archer*3 boulder*3 / lavaBrute*2 lavaGrunt*2 @2","archer*5 magmaJelly*2 / lavaGrunt*4 @2","archer*4 boulder*3 / lavaBrute*2 lavaGrunt*2 @2"]},{name:"裂谷死鬥",tier:10,waves:["lavaGrunt*6 lavaBrute / archer*3 @2","boulder*3 magmaJelly*2 / lavaBrute*2 shell*2 @1","lavaBrute*2 archer*3 shroom / lavaGrunt*6 @3","lavaBrute*3 boulder*2 / magmaJelly*2 archer*3 @3","lavaBrute*3 archer*3 / lavaGrunt*6 @3","lavaBrute*4 boulder*2 / magmaJelly*2 archer*3 @3"]},{name:"火山口",tier:11,waves:["lavaGrunt*6 lavaBrute*2 / boulder*3 archer*3 @3","lavaBrute*3 archer*4 / lavaGrunt*6 magmaJelly @3","lavaBrute*3 boulder*3 magmaJelly*2 / lavaGrunt*7 archer*3 @4","lavaBrute*4 archer*4 / lavaGrunt*6 magmaJelly @3","lavaBrute*4 boulder*3 magmaJelly*2 / lavaGrunt*7 archer*3 @4"]},{name:"熔岩泰坦",tier:11,boss:!0,waves:[["lavaTitan lavaGrunt*2 / lavaGrunt*3 @1","熔岩泰坦：只劃金色光點，碰到紅色光點就失敗"]]}]}],Of=2,xn=(n,e)=>`${Et[n].id}-${e+1}`;function Ir(n){const[e,t]=n.split("-"),i=Et.findIndex(s=>s.id===e),r=t-1;return i<0||!Et[i].levels[r]?null:{id:n,planet:Et[i],p:i,i:r,...Et[i].levels[r]}}const oS=()=>Et.flatMap((n,e)=>n.levels.map((t,i)=>Ir(xn(e,i))));function lS(n){const[e,t]=Array.isArray(n)?n:[n],i=e.split("/").map(r=>{const s={};for(const a of r.trim().split(/\s+/)){if(a[0]==="@"){s.at=+a.slice(1);continue}const[o,l]=a.split("*");s[o]=(s[o]||0)+(+l||1)}return s});return t?{groups:i,tip:t}:{groups:i}}const cS=n=>Object.entries(n).filter(([e])=>e!=="at").flatMap(([e,t])=>Array(t).fill(e));function uS(n,e){const[t,i,r,s,a]=e.roster,o={[t]:Math.min(3+n,8),[i]:Math.min(1+(n>>1),3),[r]:Math.min(1+(n>>1),3)},l={[t]:Math.min(2+n,6),[s]:Math.min(1+(n>>2),2),[a]:Math.min(1+(n>>1),3),at:2},c=e.extra?.[n%e.extra.length];return c&&(l[c]=(l[c]||0)+Math.min(1+(n>>2),3)),{groups:[o,l]}}const _o=[{id:"bronze",name:"銅",pts:1},{id:"silver",name:"銀",pts:2},{id:"gold",name:"金",pts:3},{id:"diamond",name:"鑽石",pts:5}],vs={low:{name:"低階",cost:80,cards:2,odds:[65,28,6,1]},mid:{name:"中階",cost:200,cards:3,odds:[40,40,16,4]},high:{name:"高階",cost:400,cards:3,odds:[15,45,30,10],minRarity:1}},Bf=10,si={hp:{name:"生命上限",cap:10,w:10,desc:"每 2 點 +1 格生命"},stamina:{name:"體力",cap:9,w:9,desc:"每 3 點 +1 格體力，每點回復快 2%"},charge:{name:"大招充能",cap:10,w:9,desc:"每點自動充能 +0.1/秒、開局 +1"},ink:{name:"墨水長度",cap:10,w:8,desc:"每點大招可劃長度 +4%"},ram:{name:"衝撞強化",cap:10,w:8,desc:"每點衝撞傷害 +5%"},parry:{name:"格擋專精",cap:8,w:7,desc:"每點完美格擋時間 +0.012 秒"},gems:{name:"星晶獲得",cap:8,w:6,desc:"每點撿星晶 +1、通關獎勵 +3%"}},dh=[.4,.6,.8,1],kf=(n,e)=>Math.ceil(si[n].cap*dh[Math.min(e,dh.length-1)]),vo={line:{name:"劃線斬",desc:"基本大招"},chain:{name:"連鎖線",desc:"斬中敵人時，閃電跳向附近 2 隻敵人，造成一半傷害"},blast:{name:"爆炸終點",desc:"路線終點引爆，範圍傷害隨當下速度變強"}},xo={steady:{name:"穩固格擋",desc:"完美格擋時間 +0.06 秒"},regen:{name:"再生黏液",desc:"每清完一波多回 1 格生命"},magnet:{name:"星晶磁鐵",desc:"撿取範圍 2.5 倍，星晶掉落 +5"},ram:{name:"重擊衝撞",desc:"衝撞傷害 ×1.4"},spikes:{name:"防滑釘",desc:"冰面幾乎不滑，岩漿灼傷延後 0.4 秒"},focus:{name:"專注",desc:"完美格擋額外充能 15"},undying:{name:"不屈",desc:"每關一次，致命傷害時留下 1 格生命"}},zf=3;function ta(n={},e=0,t={maxHp:5,stamMax:3,stamRegen:.8,charge:.8,start:10}){const i=r=>n[r]||0;return{maxHp:t.maxHp+Math.floor(i("hp")/2),stamMax:t.stamMax+Math.floor(i("stamina")/3),stamRegen:t.stamRegen*(1-.02*i("stamina")),charge:t.charge+.1*i("charge"),start:t.start+i("charge"),slots:2+e,inkMul:1+.04*i("ink"),ramMul:1+.05*i("ram"),perfectBonus:.012*i("parry"),gemPickup:i("gems"),gemMul:1+.03*i("gems")}}function dS(n,e,t=Math.random){const i=vs[n],r=n==="high"&&(e.pity||0)>=Bf-1,s=()=>{let c=t()*100;for(let u=0;u<4;u++)if((c-=i.odds[u])<0)return Math.max(u,i.minRarity||0);return 3},a=Array.from({length:i.cards},s);r&&!a.includes(3)&&(a[0]=3);const o=[],l=new Set;for(const c of a){const u=hS(c,e,l,t);u&&(o.push(u),l.add(u.key))}return{cards:o,diamond:a.includes(3)}}function hS(n,e,t,i){const r=[];for(const[a,o]of Object.entries(si)){const l=e.pts[a]||0,c=kf(a,e.bosses)-l;c<=0||t.has(a)||r.push({w:o.w*(1-l/o.cap)**2,card:{kind:"stat",key:a,rarity:n,pts:Math.min(_o[n].pts,c)}})}if(n>=2)for(const a of Object.keys(xo))!e.ownedPassives.includes(a)&&!t.has("p:"+a)&&r.push({w:2.2,card:{kind:"passive",key:"p:"+a,id:a,rarity:n}});if(n>=3){for(const a of Object.keys(vo))!e.ownedUlts.includes(a)&&!t.has("u:"+a)&&r.push({w:6,card:{kind:"ult",key:"u:"+a,id:a,rarity:n}});(e.slot||0)<zf-2&&!t.has("slot")&&r.push({w:6,card:{kind:"slot",key:"slot",rarity:n}})}if(!r.length)return t.has("refund")?null:{kind:"refund",key:"refund",rarity:n,gems:30*_o[n].pts};let s=i()*r.reduce((a,o)=>a+o.w,0);for(const a of r)if((s-=a.w)<=0)return a.card;return r[r.length-1].card}function fS(n,e,t,i,r=0){const s=n*(e?3:1);return Math.round(i?s:s*.25)+Math.max(0,t-r)*Math.round(n*.4)}function pS(n={}){const e={};return n.hp&&(e.hp=Math.min(si.hp.cap,n.hp*2)),n.stamina&&(e.stamina=Math.min(si.stamina.cap,n.stamina*3)),n.charge&&(e.charge=Math.min(si.charge.cap,n.charge*2)),{pts:e,slot:Math.min(zf-2,n.slot||0)}}const Hf="slasharena-save",mS=2,Gf=()=>({v:mS,crystals:0,stats:{},slot:0,pity:0,draws:0,pending:null,owned:{ult:["line"],passive:[]},equip:{ult:"line",passives:[]},levels:{},endless:{}});function gS(n){const e=Gf();if(!n||typeof n!="object")return e;if(e.crystals=Number.isFinite(n.crystals)?Math.max(0,n.crystals):0,n.stats&&typeof n.stats=="object"){for(const t of Object.keys(si))Number.isFinite(n.stats[t])&&(e.stats[t]=Math.max(0,Math.min(si[t].cap,n.stats[t])));e.slot=Number.isFinite(n.slot)?n.slot:0}else n.upgrades&&typeof n.upgrades=="object"&&Object.assign(e,(({pts:t,slot:i})=>({stats:t,slot:i}))(pS(n.upgrades)));return Number.isFinite(n.pity)&&(e.pity=n.pity),Number.isFinite(n.draws)&&(e.draws=n.draws),Array.isArray(n.pending?.cards)&&n.pending.cards.length&&(e.pending=n.pending),Array.isArray(n.owned?.ult)&&(e.owned.ult=[...new Set(["line",...n.owned.ult])]),Array.isArray(n.owned?.passive)&&(e.owned.passive=[...n.owned.passive]),e.owned.ult.includes(n.equip?.ult)&&(e.equip.ult=n.equip.ult),Array.isArray(n.equip?.passives)&&(e.equip.passives=n.equip.passives.filter(t=>e.owned.passive.includes(t))),n.levels&&typeof n.levels=="object"&&(e.levels={...n.levels}),n.endless&&typeof n.endless=="object"&&(e.endless={...n.endless}),e}function _S(){try{return gS(JSON.parse(localStorage.getItem(Hf)))}catch{return Gf()}}const de=_S();function ji(){try{localStorage.setItem(Hf,JSON.stringify(de))}catch{}}const Ec=typeof location>"u"?new URLSearchParams:new URLSearchParams(location.search),du=Ec.has("unlock");Ec.has("crystals")&&(de.crystals=+Ec.get("crystals")||0,ji());const Lo=n=>!!de.levels[n]?.stars,Vf=n=>xn(n,Et[n].levels.length-1),Wf=n=>du||n===0||Lo(Vf(n-1)),vS=n=>n>0&&(de.levels[Vf(n-1)]?.stars||0)>=3,Xf=n=>du||vS(n)?0:Math.max(0,(Et[n].gate||0)-Mo());function na(n){return Wf(n)&&!Xf(n)}const qf=(n,e)=>n>0&&e<Of;function wc(n,e){return du?!0:(e===0||Lo(xn(n,e-1)))&&(na(n)||qf(n,e))}const $f=n=>Lo(xn(n,Et[n].levels.length-1)),Mo=()=>Object.values(de.levels).reduce((n,e)=>n+(e.stars||0),0),Yf=()=>Et.reduce((n,e)=>n+e.levels.length*3,0);function jf(n){const e=Ir(n);return e?e.i+1<e.planet.levels.length?wc(e.p,e.i+1)?xn(e.p,e.i+1):null:e.p+1<Et.length&&wc(e.p+1,0)?xn(e.p+1,0):null:null}function xS(){for(let n=Et.length-1;n>=0;n--)if(na(n)){for(let e=0;e<Et[n].levels.length;e++)if(!Lo(xn(n,e)))return xn(n,e);return xn(n,0)}return xn(0,0)}const MS={S:3,A:2,B:1,C:1};function yS(n,e,t,i){const r=Ir(n),s=de.levels[n]||{stars:0,best:0},a=MS[e]||1,o=!s.stars,l=Math.round(fS(r.planet.reward,!!r.boss,a,o,s.stars)*Do().gemMul)+i;return de.levels[n]={stars:Math.max(s.stars,a),best:Math.max(s.best,t)},de.crystals+=l,ji(),{earned:l,stars:a,first:o,newStars:Math.max(0,a-s.stars)}}function Kf(n,e,t){const i=n+e*Math.round(t*.15);return de.crystals+=i,ji(),i}function SS(n,e,t,i){const r=de.endless[n]||{waves:0,best:0};de.endless[n]={waves:Math.max(r.waves,e),best:Math.max(r.best,t)};const s=i+e*12;return de.crystals+=s,ji(),s}const Zf=()=>Et.filter((n,e)=>$f(e)).length,Do=()=>ta(de.stats,de.slot);function bS(n){return n===void 0||de.crystals<n?!1:(de.crystals-=n,!0)}function Jf(n){if(de.pending||!bS(vs[n].cost))return null;const e=dS(n,{pts:de.stats,bosses:Zf(),ownedPassives:de.owned.passive,ownedUlts:de.owned.ult,slot:de.slot,pity:de.pity});return n==="high"&&(de.pity=e.diamond?0:de.pity+1),de.draws++,de.pending={pack:n,cards:e.cards},ji(),de.pending}function Qf(n){const e=de.pending?.cards[n];return e?(e.kind==="stat"?de.stats[e.key]=(de.stats[e.key]||0)+e.pts:e.kind==="passive"?(de.owned.passive.push(e.id),de.equip.passives.length<Do().slots&&de.equip.passives.push(e.id)):e.kind==="ult"?(de.owned.ult.push(e.id),de.equip.ult=e.id):e.kind==="slot"?de.slot++:e.kind==="refund"&&(de.crystals+=e.gems),de.pending=null,ji(),e):null}function ES(n){de.owned.ult.includes(n)&&(de.equip.ult=n,ji())}function wS(n){const e=de.equip.passives,t=e.indexOf(n);if(t>=0)e.splice(t,1);else if(de.owned.passive.includes(n)&&e.length<Do().slots)e.push(n);else return!1;return ji(),!0}const Ka={maxHp:Ve.maxHp,stamMax:Ve.stamMax,stamRegen:Ve.stamRegen,charge:wt.charge,start:wt.start,ink:wt.ink,perfectEarly:Ve.perfectEarly,perfectLate:Ve.perfectLate};function TS(){const n=ta(de.stats,de.slot,Ka);_.passives=new Set(de.equip.passives),_.ultKind=de.equip.ult,_.ramMul=n.ramMul,_.gemPickup=n.gemPickup;const e=(_.passives.has("steady")?.06:0)+n.perfectBonus;Object.assign(Ve,{maxHp:n.maxHp,stamMax:n.stamMax,stamRegen:n.stamRegen,perfectEarly:Ka.perfectEarly+e,perfectLate:Ka.perfectLate+e}),Object.assign(wt,{charge:n.charge,start:n.start,ink:Ka.ink*n.inkMul})}function AS(){if(de.pending)return"有卡片待選";const n=["high","mid","low"].find(e=>vs[e].cost<=de.crystals);return n?`可抽${vs[n].name}`:""}const ep='<svg viewBox="0 0 20 20"><path d="M10 1.8l2.5 5.3 5.8.8-4.2 4 1 5.8-5.1-2.8-5.1 2.8 1-5.8-4.2-4 5.8-.8z"/></svg>',hh='<svg viewBox="0 0 20 20" fill="currentColor"><path d="M6 9V6.5a4 4 0 0 1 8 0V9h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1zm2 0h4V6.5a2 2 0 0 0-4 0z"/></svg>',RS='<svg class="gem" viewBox="0 0 20 20"><path d="M10 1l6.5 6.5L10 19 3.5 7.5z"/></svg>',tp=n=>[1,2,3].map(e=>`<i class="${e<=n?"on":""}">${ep}</i>`).join(""),Tr=n=>`${RS}${n.toLocaleString()}`;let fr=null,Tc=0,Bs="draw",_r=-1;function CS(n){fr=n,Q("mapBack").onclick=fr.title,Q("shopBtn").onclick=()=>{Ne.ui(),ia(),fr.shop()},Q("shopBack").onclick=()=>{Ne.ui(),hu(),fr.map()},Q("endlessBtn").onclick=()=>fr.endless(Tc);for(const e of document.querySelectorAll("#shopTabs button"))e.onclick=()=>{Bs=e.dataset.tab,Ne.ui(),ia()}}function hu(n=Tc){Tc=n,fr.select(Et[n].id),Q("mapStars").innerHTML=`${ep}${Mo()} / ${Yf()}`,Q("mapGems").innerHTML=Tr(de.crystals),Q("planets").innerHTML=Et.map((i,r)=>`<button type="button" class="orb ${i.id} ${r===n?"sel":""}" data-i="${r}" aria-label="${i.name}">${na(r)?"":hh}</button>`).join("");for(const i of Q("planets").children)i.onclick=()=>{Ne.ui(),hu(+i.dataset.i)};Q("pName").textContent=Et[n].name,Q("pBlurb").textContent=PS(n),Q("levels").innerHTML=Et[n].levels.map((i,r)=>{const s=xn(n,r),a=wc(n,r),o=de.levels[s];return`<button type="button" class="node ${i.boss?"boss":""}" data-id="${s}" ${a?"":"disabled"}><b>${a?r+1:hh}</b><span>${a?i.name:"未解鎖"}</span><em>${a?tp(o?.stars||0):""}</em>${qf(n,r)&&!na(n)?'<i class="trial">嘗鮮</i>':""}</button>`}).join("");for(const i of Q("levels").children)i.onclick=()=>fr.play(i.dataset.id);const e=Q("endlessBtn"),t=de.endless[Et[n].id];e.hidden=!$f(n),e.textContent=t?.waves?`無盡模式（最遠 ${t.waves} 波）`:"無盡模式"}function PS(n){if(na(n))return Et[n].blurb;const e=Et[n-1].levels.at(-1).name,t=Wf(n)?`再拿 ${Xf(n)} 顆星（需要 ★${Et[n].gate}），或${e}拿三星`:`打倒${e}，並集滿 ★${Et[n].gate}（${e}拿三星可免）`;return`${Et[n].blurb}　前 ${Of} 關可以先嘗鮮；${t}就能開放全部關卡。`}const fh=(n,e,t)=>`<div class="shop-row"><div><b>${n}</b><span>${e}</span></div>${t}</div>`,ph=(n,e,t)=>`<button type="button" class="buy" ${n} ${t?'aria-pressed="true"':""}>${e}</button>`;function LS(n,e,t){const i={hp:r=>`生命 ${r.maxHp} 格`,stamina:r=>`體力 ${r.stamMax} 格・回復 ${Math.round((1-r.stamRegen/.8)*100)}%`,charge:r=>`充能 ${r.charge.toFixed(1)}/秒・開局 ${r.start}`,ink:r=>`墨水 ${Math.round(r.inkMul*100)}%`,ram:r=>`衝撞 ${Math.round(r.ramMul*100)}%`,parry:r=>`完美格擋 +${r.perfectBonus.toFixed(3)} 秒`,gems:r=>`星晶 +${r.gemPickup}・獎勵 ${Math.round(r.gemMul*100)}%`}[n];return i(e)===i(t)?`${i(t)}（累積中）`:`${i(e)} → ${i(t)}`}function DS(n,e){const t=_o[n.rarity];let i,r;if(n.kind==="stat"){const s=de.stats[n.key]||0,a={...de.stats,[n.key]:s+n.pts};i=`${si[n.key].name} +${n.pts}`,r=`${LS(n.key,ta(de.stats,de.slot),ta(a,de.slot))}<small>${s+n.pts} / ${si[n.key].cap}</small>`}else n.kind==="passive"?(i=`被動・${xo[n.id].name}`,r=xo[n.id].desc):n.kind==="ult"?(i=`大招・${vo[n.id].name}`,r=vo[n.id].desc):n.kind==="slot"?(i="被動欄位 +1",r="多裝備 1 個被動技能"):(i=`星晶 +${n.gems}`,r="本章屬性都已達上限，換成星晶");return`<button type="button" class="card ${t.id} ${e===_r?"sel":""}" data-card="${e}" style="--d:${e*.12}s"><em>${t.name}</em><b>${i}</b><span>${r}</span></button>`}function IS(){const n=Zf(),e=ta(de.stats,de.slot);if(de.pending)return`<p class="pick-hint">選一張卡加強史萊姆</p><div class="cards n${de.pending.cards.length}">${de.pending.cards.map(DS).join("")}</div><button type="button" id="pickOk" class="pick-ok" ${_r<0?"disabled":""}>${_r<0?"點一張卡":"確定選這張"}</button>`;const t=Object.entries(vs).map(([r,s])=>`<button type="button" class="pack ${r}" data-pack="${r}" ${de.crystals<s.cost?"disabled":""}><b>${s.name}</b><span>${s.cards} 張選 1</span><small>${_o.map((a,o)=>`${a.name}${s.odds[o]}%`).join(" ")}</small>${r==="high"?`<small>保底 ${de.pity}/${Bf} 必出鑽石</small>`:""}<i>${Tr(s.cost)}</i></button>`).join(""),i=Object.entries(si).map(([r,s])=>{const a=de.stats[r]||0,o=kf(r,n);return`<div class="sbar"><span>${s.name}</span><div><i style="width:${a/s.cap*100}%"></i><u style="left:${o/s.cap*100}%"></u></div><b>${a}/${o}</b></div>`}).join("");return`<div class="packs">${t}</div><div class="sbars"><p class="muted">目前屬性（白線＝本章上限，打倒首領後提高）</p>${i}<p class="muted">生命 ${e.maxHp}・體力 ${e.stamMax}・被動欄 ${e.slots}</p></div>`}function ia(){Q("shopGems").innerHTML=Tr(de.crystals);for(const t of document.querySelectorAll("#shopTabs button"))t.classList.toggle("sel",t.dataset.tab===Bs);let n="";if(Bs==="draw"&&(n=IS()),Bs==="ult"&&(n=Object.entries(vo).map(([t,i])=>{const r=de.owned.ult.includes(t),s=de.equip.ult===t;return fh(i.name,i.desc,r?ph(`data-ult="${t}"`,s?"使用中":"裝備",s):'<span class="max">鑽石卡取得</span>')}).join("")),Bs==="passive"){const t=de.equip.passives,i=Do().slots;n=`<p class="muted">已裝備 ${t.length} / ${i}</p>`+Object.entries(xo).map(([r,s])=>{const a=de.owned.passive.includes(r),o=t.includes(r);return fh(s.name,s.desc,a?ph(`data-pas="${r}"`,o?"卸下":"裝備",o):'<span class="max">金卡以上取得</span>')}).join("")}const e=Q("shopList");e.innerHTML=n;for(const t of e.querySelectorAll("button"))t.onclick=()=>{const i=t.dataset;let r=!0;if(i.pack){if(r=!!Jf(i.pack),_r=-1,r){Ne.ding(),ia();return}}else if(i.card!==void 0){_r=+i.card,Ne.ui(),e.querySelector(".cards").classList.add("shown");for(const a of e.querySelectorAll(".card"))a.classList.toggle("sel",a===t);const s=Q("pickOk");s.disabled=!1,s.textContent="確定選這張";return}else t.id==="pickOk"?(r=!!Qf(_r),_r=-1):i.ult?ES(i.ult):i.pas&&(r=wS(i.pas));r?Ne.pickup():Ne.empty(),ia()}}function fu(n){const{baseV:e,gUp:t,gDown:i,vMin:r,vMax:s}=wt;let a=e*e;const o=[e];for(let l=1;l<n.length;l++){const c=n[l-1],u=n[l],d=u.h-c.h,h=c.p.distanceTo(u.p);if(c.water&&u.water||(a-=2*(d<0?i:t)*d),a>e*e&&(a=Math.max(e*e,a-16*h)),a=Math.min(a,s*s),a<r*r)return o.push(r),{vs:o,stall:l};o.push(Math.sqrt(a))}return{vs:o,stall:-1}}function US(n,e,t){const i=n.p.distanceTo(e.p);return e.water&&n.water?i*wt.lakeCost:i*Math.min(2.5,Math.max(.45,1+t*2.2))}const mh={down:new Re(16763981),flat:new Re(4843263),up:new Re(16730714),lake:new Re(9430015),dead:new Re(3817301)},pu=new Pt({vertexColors:!0,transparent:!0,opacity:1,side:Qt,depthWrite:!1}),ra=new ee(new Bt,pu);ra.frustumCulled=!1;ra.renderOrder=2;lt.add(ra);const pe={path:[],ink:0,budget:0,sim:{vs:[wt.baseV],stall:-1},fade:0,drawing:!1,run:null},mu=n=>{const e=an(n);return{d:n.clone(),h:e,p:n.clone().multiplyScalar(qe+e),water:Zn(n)<0,kind:"flat"}};function qi(n=-1){const e=[],t=[],r=pe.path;let s=0;for(let o=0;o<r.length-1;o++){const l=r[o].p,c=r[o+1].p,u=l.distanceTo(c);if(u<1e-4)continue;const d=l.clone().normalize(),h=new Ie().crossVectors(d,new Ie().subVectors(c,l)).normalize().multiplyScalar(.17),f=d.clone().multiplyScalar(.14),x=(pe.sim.stall>=0&&o+1>pe.sim.stall?mh.dead:mh[r[o+1].kind]).clone().multiplyScalar(n>=0&&s+u<=n?.35:1);s+=u;const m=new Ie().subVectors(c,l).normalize().multiplyScalar(.17*.6),p=l.clone().sub(m).add(h).add(f),w=l.clone().sub(m).sub(h).add(f),b=c.clone().add(m).add(h).add(f),M=c.clone().add(m).sub(h).add(f);for(const C of[p,w,b,w,M,b])e.push(C.x,C.y,C.z),t.push(x.r,x.g,x.b)}const a=new Bt;a.setAttribute("position",new Je(e,3)),a.setAttribute("color",new Je(t,3)),ra.geometry.dispose(),ra.geometry=a}const gh=new b0,NS=new Cr(new Ie,qe+.5);function FS(n,e){const t=ci.domElement.getBoundingClientRect();gh.setFromCamera({x:(n-t.left)/t.width*2-1,y:-(e-t.top)/t.height*2+1},St);const i=gh.ray.intersectSphere(NS,new Ie);return i?uf(i).normalize():null}function Io(){return _.state!=="play"||_.mode!=="play"||_.ult<wt.min||T.state!=="free"?(_.state==="play"&&_.ult<wt.min&&(Ne.empty(),st("大招需累積過半","var(--mist)")),!1):(_.mode="ultDraw",pe.drawing=!1,pe.path=[mu(T.d)],pe.ink=0,pe.sim=fu(pe.path),pu.opacity=1,pe.fade=0,qi(),pe.budget=wt.ink*_.ult/100*(je.boss?1.5:1),Ne.ult(),Yi("劃線斬"),$t("ultBegin"),!0)}function np(n,e){pe.drawing=!0,gu(n,e)}let _h=0;function gu(n,e){if(!pe.drawing)return;const t=FS(n,e);if(!t)return;let i=!1;for(let r=0;r<400;r++){const s=pe.path[pe.path.length-1];if(s.d.angleTo(t)*qe<wt.step||!ip(ht(s.d,zt(s.d,t),wt.step)))break;i=!0}i&&(pe.sim=fu(pe.path),qi())}function ip(n){if(pe.ink>=pe.budget-.001)return!1;const e=pe.path[pe.path.length-1],t=mu(n),i=(t.h-e.h)/Math.max(e.d.angleTo(t.d)*qe,.001);t.kind=t.water?"lake":i<-.06?"down":i>.06?"up":"flat";const r=US(e,t,i);if(pe.ink+r>pe.budget)return pe.ink=pe.budget,!1;pe.ink+=r,t.ink=pe.ink,pe.path.push(t);const s=performance.now();return s-_h>80&&(Ne.draw(t.kind),_h=s),!0}function OS(n){if(!Io())return!1;pe.drawing=!0;for(const e of n)for(let t=0;t<200;t++){const i=pe.path[pe.path.length-1];if(i.d.angleTo(e)*qe<wt.step||!ip(ht(i.d,zt(i.d,e),wt.step)))break}return pe.sim=fu(pe.path),qi(),_u(),_.mode==="ultDraw"&&(_.mode="play"),!0}function _u(){if(!pe.drawing)return;pe.drawing=!1;const n=pe.sim.stall>=0?pe.path.slice(0,pe.sim.stall+1):pe.path,e=[0];for(let t=1;t<n.length;t++)e.push(e[t-1]+n[t].p.distanceTo(n[t-1].p));if(e[e.length-1]<1){pe.path=[mu(T.d)],qi();return}pe.run={pts:n,cum:e,total:e[e.length-1],vs:pe.sim.vs,dist:0,i:0,mult:1,v:wt.baseV,kills:0,hit:new Map,seal:!!je.boss},_.mode="ultDash",T.state="ult",Ne.dash(),Kn("determined"),_.ult=Math.max(0,_.ult-(n[n.length-1].ink||0)/wt.ink*100)}function BS(n,e){const t=_.enemies.filter(r=>!r.dead&&r!==n&&r.spawn>=1&&!pe.run.hit.has(r)&&r.d.angleTo(n.d)*qe<5).sort((r,s)=>r.d.angleTo(n.d)-s.d.angleTo(n.d)).slice(0,2),i=rn(n);for(const r of t)pe.run.hit.set(r,pe.run.dist),OM(i,rn(r),9430015),Dr(r,e,zt(n.d,r.d),{pierce:!0}),r.dead&&pe.run.kills++}function kS(n){const e=wt.blastR;Er(T.p.clone().addScaledVector(T.d,.3),T.d,16751164,3,.5,5),rt(T.p,16763981,40,12,.7),Ne.slam(),_.shake=Math.max(_.shake,1);for(const t of _.enemies)t.dead||t.spawn<1||t.d.angleTo(T.d)*qe>e+t.r||(Dr(t,wt.blastDmg*n,zt(T.d,t.d),{pierce:!0}),t.dead&&pe.run.kills++)}function zS(n){let e=n;const t=pe.run;for(;e>0&&pe.run;){const i=Math.min(.25,t.v*e);for(e-=i/t.v,t.dist=Math.min(t.total,t.dist+i);t.i<t.pts.length-2&&t.dist>=t.cum[t.i+1];)t.i++;const r=t.i,s=t.cum[r+1]-t.cum[r],a=s>0?Kt((t.dist-t.cum[r])/s,0,1):1;Oi(new Ie().lerpVectors(t.pts[r].d,t.pts[r+1].d,a).normalize()),t.v=t.vs[r]+(t.vs[r+1]-t.vs[r])*a,t.mult=Kt((t.v/wt.baseV)**1.5,.5,3),T.face=zt(t.pts[r].d,t.pts[r+1].d),rt(T.p.clone().addScaledVector(T.d,.4),t.mult>=2?16763981:4843263,1,1.5,.35);for(const o of _.enemies){if(o.dead||o.spawn<1||T.p.distanceTo(rn(o))>o.r+wt.hitR)continue;const l=t.hit.get(o);if(l!==void 0&&t.dist-l<2)continue;t.hit.set(o,t.dist);const c=wt.dmg*t.mult*(o.stun>0?2:1);Dr(o,c,T.face,{pierce:!0}),o.dead&&t.kills++,_.ultKind==="chain"&&BS(o,c*.5)}if(t.seal&&cy(T.p),t.dist>=t.total&&(_.ultKind==="blast"&&kS(Math.max(1,t.mult)),t.seal&&uy(),pe.sim.stall>=0&&st("力竭…","var(--hurt)"),t.kills>=4&&(Yi("一筆入魂"),gs(.3,"#ffcc4d"),Kn("happy",1)),$t("ultEnd",t.kills),pe.run=null,_.mode="play",T.state="free",T.invuln=.6,pe.fade=.6,qi()),_.hitstop>0)break}}function HS(n){pe.fade>0?(pe.fade-=n,pu.opacity=Math.max(0,pe.fade/.6),pe.fade<=0&&(pe.path=[],qi())):_.mode==="ultDash"&&pe.run&&qi(pe.run.dist)}function GS(){pe.run=null,pe.path=[],pe.drawing=!1,pe.fade=0,qi()}const bl=ci.domElement,$n=Q("joy"),cs=Q("knob"),Te={id:null,ox:0,oy:0,x:0,y:0,t0:0,st:"pending",samples:[],tMove:0,cMove:0},vu=14,VS=20,rp=60,WS=22,XS=.5,qS=380,sp=n=>Kt((n-Te.t0-60)/((Ve.guardHold-.06)*1e3),0,1),ap=()=>{$n.hidden=cs.hidden=!0};function ca(){Te.id=null,Te.st="pending",ap(),ua.clear()}bl.addEventListener("pointerdown",n=>{if(Ln(),_.state==="play"){if(_.mode==="ultDraw"){try{bl.setPointerCapture(n.pointerId)}catch{}np(n.clientX,n.clientY);return}if(Te.id===null){Object.assign(Te,{id:n.pointerId,ox:n.clientX,oy:n.clientY,x:n.clientX,y:n.clientY,t0:performance.now(),st:"pending",tMove:0,cMove:0,samples:[{t:performance.now(),x:n.clientX,y:n.clientY}]}),$n.hidden=cs.hidden=!1,$n.className="",$n.style.setProperty("--c",0),$n.style.left=cs.style.left=n.clientX+"px",$n.style.top=cs.style.top=n.clientY+"px";try{bl.setPointerCapture(n.pointerId)}catch{}}}});addEventListener("pointermove",n=>{if(_.mode==="ultDraw"){gu(n.clientX,n.clientY);return}if(n.pointerId!==Te.id)return;const e=performance.now();for(Te.x=n.clientX,Te.y=n.clientY,Te.samples.push({t:e,x:Te.x,y:Te.y});Te.samples.length>2&&e-Te.samples[0].t>100;)Te.samples.shift();const t=Math.hypot(Te.x-Te.ox,Te.y-Te.oy);if(Te.st==="pending"){const r=sp(e);r>=1?op():t>(r>0?VS:vu)&&(Te.st="move",Te.tMove=e,Te.cMove=r,$n.style.setProperty("--c",0))}const i=Math.min(1,rp/Math.max(t,1));cs.style.left=Te.ox+(Te.x-Te.ox)*i+"px",cs.style.top=Te.oy+(Te.y-Te.oy)*i+"px"});function op(){Te.st="guard",$n.className="guard",xt(660,.05,"sine",.04)}function $S(){const n=Te.samples,e=n[0],t=n[n.length-1],i=Math.max(t.t-e.t,16),r=t.x-e.x,s=t.y-e.y;return{dx:r,dy:s,dist:Math.hypot(r,s),speed:Math.hypot(r,s)/i}}function lp(n){if(_.mode==="ultDraw"){_u();return}if(n.pointerId!==Te.id)return;const e=performance.now()-Te.t0,t=Math.hypot(Te.x-Te.ox,Te.y-Te.oy),i=$S(),r=Te.x-Te.ox,s=Te.y-Te.oy,a=Te.st==="move"&&Te.cMove>=XS&&performance.now()-Te.tMove<qS&&i.speed>.45;Te.st==="guard"||a?t>WS?ea(xr(r,s)):i.speed>.45&&i.dist>18?ea(xr(i.dx,i.dy)):($n.className="cancel",xt(200,.05,"sine",.04)):i.speed>.8&&i.dist>25?($n.className="dash",Co(xr(i.dx,i.dy))):Te.st==="pending"&&e<190&&t<=vu&&Po(),Te.id=null,Te.st="pending",setTimeout(()=>{Te.id===null&&ap()},90)}addEventListener("pointerup",lp);addEventListener("pointercancel",lp);const ua=new Set,Ac={KeyW:[0,-1],ArrowUp:[0,-1],KeyS:[0,1],ArrowDown:[0,1],KeyA:[-1,0],ArrowLeft:[-1,0],KeyD:[1,0],ArrowRight:[1,0]};addEventListener("keydown",n=>{if(!(n.repeat||_.state!=="play"))if(Ac[n.code])ua.add(n.code),n.preventDefault();else if(n.code==="Space")n.preventDefault(),cu();else if(n.code==="KeyJ"||n.code==="ShiftLeft"||n.code==="ShiftRight"){const e=cp();e?Co(xr(e[0],e[1])):Po()}else n.code==="KeyK"?ea(Jy()):n.code==="KeyL"&&Io()});addEventListener("keyup",n=>ua.delete(n.code));addEventListener("blur",()=>ua.clear());function cp(){let n=0,e=0;for(const t of ua)n+=Ac[t][0],e+=Ac[t][1];return n||e?[n,e]:null}function YS(){if(Te.id!==null&&Te.st==="pending"){const t=sp(performance.now());$n.style.setProperty("--c",t*100),t>=1&&op()}const n=_.move;if(n.m=0,Te.id!==null&&Te.st==="move"){const t=Te.x-Te.ox,i=Te.y-Te.oy,r=Math.hypot(t,i);r>vu&&(n.sx=t,n.sy=i,n.m=Math.min(1,r/rp))}const e=cp();e&&!n.m&&(n.sx=e[0],n.sy=e[1],n.m=1)}Q("ultBtn").addEventListener("pointerdown",n=>{n.stopPropagation(),Ln(),Io()&&ca()});Q("jumpBtn").addEventListener("pointerdown",n=>{n.stopPropagation(),n.preventDefault(),Ln(),cu()});function jS(n,e,t=T.d){for(let i=0;i<400;i++){const r=li(),s=r.angleTo(t),a=Zn(r);if(s>=n&&s<=e&&a>.05&&a<1.5)return r}return ht(t,Ot(t,li()).normalize(),5)}let as=[];const KS=()=>_.tut?0:gr.perWave[_.tier>=gr.twoFrom?1:0];function up(n){cS(n).forEach((e,t)=>{const i=on[e],r=i.base==="boss",s=xi(e,i.aquatic&&af(T.d,.35)||jS(r?.55:.45,r?.7:.85));s.spawn=-t*.12,s.atkCd=(r?2.5:1)+t*.6+Math.random(),r?_.boss=s:By(s,KS()-_.elites)&&_.elites++})}const ZS=n=>_.endless?uS(n,_.level.planet):lS(_.waves[n-1]);function da(n){_.wave=n,_.elites=0,_.waveClearing=!1,_.graceT=_n.grace,_.boss=null,_.endless&&(_.tier=Math.min(12,_.level.tier+(n>>1)));const e=ZS(n),t=Object.keys(e.groups[0]).find(i=>bc[i]);$t("wave",n),Yi(t?"首領戰":_.endless?`無盡 ${n}`:`WAVE ${n}`,t?`${bc[t].name} 降臨`:n===1&&!_.endless?_.level.name:""),$i(T),as=e.groups.slice(1),up(e.groups[0]),e.tip&&br(1.2,()=>st(e.tip,"var(--warn)"))}function JS(){if(_.state!=="play"||_.waveClearing||_.mode!=="play"||_.tut)return;const n=_.enemies.filter(i=>!i.dead).length;if(as.length&&n<=(as[0].at??0)){up(as.shift()),st("增援！","var(--hurt)"),Ne.warn();return}if(n||as.length)return;_.waveClearing=!0,Ne.clear(),_.score+=500*_.tier;const e=(_.wave%kd.every===0?kd.amount:0)+(_.passives.has("regen")?1:0),t=T.hp;if(T.hp=Math.min(Ve.maxHp,T.hp+e),T.hp>t&&br(.8,()=>st(`回復 +${T.hp-t}`,"var(--ink)")),$i(T),Kn("happy",1.2),!_.endless&&_.wave>=_.waves.length){$t("victory");return}Yi("CLEAR"),br(2,()=>{_.enemies=[],da(_.wave+1)})}function QS(){as=[]}const Ei=new ee(new Lr(.55,.8,40),new Pt({color:4843263,transparent:!0,opacity:.9,side:Qt,depthWrite:!1}));Ei.renderOrder=3;Ei.visible=!1;lt.add(Ei);const Za=[{title:"移動",body:'按住螢幕任意處拖曳，走到<span class="c-ink">發光圈</span>裡。上坡慢、下坡快。'},{title:"衝撞",body:'<span class="c-dash">快速滑動</span>朝那個方向衝撞，或<span class="c-dash">點一下</span>自動衝向最近的敵人。打倒稻草兵！'},{title:"格擋",body:'敵人腳下出現<span class="c-warn">黃線</span>時：按住不動到外圈變<span class="c-guard">藍</span>，再<b>朝敵人方向滑出</b>放開（慢慢滑也行，不會變衝撞；滑回中心放開＝取消）。黃線<span class="c-warn">閃紅</span>前出手＝完美格擋。'},{title:"反擊",body:'格擋成功會進入慢動作並回 1 格體力。趁現在<span class="c-dash">衝撞</span>打倒它！'},{title:"跳躍",body:'巨魔會放<span class="c-warn">圓環震波</span>。圓環罩到腳下時，按左下的<b>跳躍鈕</b>躍過去。'},{title:"滾石",body:'滾石會<b>連滾三次</b>，第二、三次的預警更短。躲開它，等它<span class="c-gold">暈眩</span>再打，平常它硬得打不動。'},{title:"大招",body:'大招集滿了！點右下的<span class="c-gold">斬</span>，時間暫停後<b>直接在星球上劃一條線</b>穿過敵人，放開就發動。下坡越劃越快。'}];function e1(n){const e={step:-1,noDamage:!0,foe:null,onDone:n,offs:[],doneT:0};_.tut=e,_.graceT=0,_.stamina=3,_.ult=0,$i(T);const t=()=>{e.step++,t1(e)};return e.next=t,e.offs.push(Vt("kill",i=>{e.step===1&&i===e.foe||e.step===3&&i===e.foe?t():e.step===2&&i===e.foe?(e.step=3,t()):(e.step===5&&i===e.foe||e.step===6&&_.enemies.every(r=>r.dead))&&t()}),Vt("parry",({e:i})=>{e.step===2&&i===e.foe?(i.only=["line"],t()):e.step===4&&i===e.foe&&vh(e)}),Vt("jump",i=>{e.step===4&&i==="ring"&&vh(e)}),Vt("hurt",()=>{e.step>=2&&e.step<=5&&st("沒關係，再試一次","var(--mist)")}),Vt("ultEnd",()=>{e.step===6&&_.enemies.some(i=>!i.dead)&&(_.ult=100,st("還有敵人，再劃一次","var(--gold)"))})),t(),e}function vh(n){n.foe&&!n.foe.dead&&(rt(zn(n.foe.d),10185727,30,8,.7),su(n.foe)),n.next()}const ts=(n,e=0)=>{const t=xr(0,-1),i=new Ie().crossVectors(T.d,t).normalize();let r=ht(ht(T.d,t,n),Ot(T.d,i),e);for(let s=0;s<12&&hn(r);s++)r=ht(r,t,-.6);return r};function t1(n){const e=n.step;if($t("tutStep",e),e>=Za.length)return n1(n);if(Qc(e+1,Za.length,Za[e].title,Za[e].body),Ne.step(),e>0&&Kn("happy",.6),e===0&&(n.target=ts(4.5,1.5),Ei.visible=!0),e===1&&(Ei.visible=!1,n.foe=xi("grunt",ts(3.5),{dummy:!0})),e===2&&(n.foe=xi("grunt",ts(3),{only:["line"],warnMul:1.15}),n.foe.atkCd=1.2),e===4&&(n.foe=xi("brute",ts(2.6),{only:["ring"],warnMul:1.2,hp:99}),n.foe.hp=99,n.foe.atkCd=1.5),e===5&&(n.foe=xi("boulder",ts(5)),n.foe.atkCd=1.5),e===6){_.ult=100;for(const[t,i]of[[3,-1.6],[4.2,0],[3,1.6]])xi("grunt",ts(t,i),{dummy:!0})}}function n1(n){Qc(),Yi("教學完成","開始第一波"),Ne.clear(),Kn("happy",1.5);try{localStorage.setItem("slasharena-tut","1")}catch{}dp(),_.waveClearing=!0,br(1.8,()=>n.onDone())}function dp(){const n=_.tut;n&&(n.offs.forEach(e=>e()),Ei.visible=!1,Qc(),_.tut=null)}function i1(n,e){const t=_.tut;t&&(t.step===0&&t.target&&(Ei.position.copy(zn(t.target)).addScaledVector(t.target,.12),Ei.quaternion.setFromUnitVectors(new Ie(0,0,1),t.target),Ei.scale.setScalar(1+Math.sin(e*5)*.08),T.d.angleTo(t.target)*qe<.9&&(rt(zn(t.target).addScaledVector(t.target,.3),4843263,20,5,.5),t.next())),t.step>=1&&(_.stamina=Math.max(_.stamina,1)))}const hp=()=>{try{return localStorage.getItem("slasharena-tut")==="1"}catch{return!1}},xu="slasharena-runs";let tt=null;const sa=()=>_.runTime,r1=n=>({kind:n,started:new Date().toISOString(),device:`${innerWidth}x${innerHeight} ${matchMedia("(pointer: coarse)").matches?"touch":"mouse"}`,level:null,tutorial:[],waves:[],dash:0,guard:0,parry:0,perfect:0,evade:0,jumpPress:0,jumpOver:0,ultUses:0,ultKills:0,crystals:0,hurt:0,burn:0});function Mu(n,e=null){Uo("abandoned"),tt=r1(n),tt.level=e}function Uo(n){if(!tt)return;Object.assign(tt,{result:n,endWave:_.wave,tier:_.tier,picked:_.runCrystals,score:_.score,time:Math.round(sa()),bestCombo:_.bestCombo,hpLeft:T.hp}),fp();const e=No();for(e.push(tt);e.length>30;)e.shift();try{localStorage.setItem(xu,JSON.stringify(e))}catch{}tt=null}const No=()=>{try{return JSON.parse(localStorage.getItem(xu))||[]}catch{return[]}},s1=()=>{try{localStorage.removeItem(xu)}catch{}};function fp(){const n=tt?.waves.at(-1);n&&n.time==null&&(n.time=Math.round(sa()-n.t0))}Vt("wave",n=>{tt&&(fp(),tt.waves.push({n,t0:sa(),hurt:0}))});Vt("tutStep",n=>{if(!tt)return;const e=tt.tutorial.at(-1);e&&e.time==null&&(e.time=+(sa()-e.t0).toFixed(1)),tt.tutorial.push({step:n,t0:sa(),hurt:0})});Vt("hurt",()=>{if(!tt)return;tt.hurt++;const n=_.tut?tt.tutorial.at(-1):tt.waves.at(-1);n&&n.hurt++});Vt("dash",()=>tt&&tt.dash++);Vt("guard",()=>tt&&tt.guard++);Vt("parry",({perfect:n})=>{tt&&(tt.parry++,n&&tt.perfect++)});Vt("evade",()=>tt&&tt.evade++);Vt("jumpPress",()=>tt&&tt.jumpPress++);Vt("jump",()=>tt&&tt.jumpOver++);Vt("ultEnd",n=>{tt&&(tt.ultUses++,tt.ultKills+=n)});Vt("crystal",()=>tt&&tt.crystals++);Vt("burn",()=>tt&&tt.burn++);const a1={game:"正式",tutorial:"教學起",endless:"無盡"},o1={win:"通關",dead:"戰敗",quit:"中途離開",abandoned:"重開"};function pp(n=No()){const e=["移動","衝撞","格擋","反擊","跳躍","滾石","大招"];return n.map((t,i)=>{const r=t.tutorial.filter(a=>a.time!=null&&e[a.step]).map(a=>`${e[a.step]}${a.time}s${a.hurt?`/挨${a.hurt}`:""}`).join(" "),s=t.guard?Math.round(t.parry/t.guard*100):0;return`#${i+1} ${a1[t.kind]||t.kind} ${t.level||""} ${o1[t.result]||t.result} 到第${t.endWave}波 ${t.time}s 分數${t.score} 受傷${t.hurt}
   格擋 ${t.parry}/${t.guard} (${s}%) 完美${t.perfect} 閃避斬${t.evade} 跳躍${t.jumpPress}(躍過${t.jumpOver}) 大招${t.ultUses}次殺${t.ultKills} 星晶${t.crystals} 燙傷${t.burn||0}`+(r?`
   教學 ${r}`:"")}).join(`
`)}const l1=new Ti(.32);function c1(){for(let n=0;n<200;n++){const e=li(),t=e.angleTo(T.d);if(t<.25||t>.8||Zn(e)<.05)continue;const i=new ee(l1,new Pn({color:10482687,emissive:2799832,emissiveIntensity:1.4,roughness:.3,flatShading:!0}));i.castShadow=!0,lt.add(i),_.crystals.push({d:e,mesh:i,t:Math.random()*6});return}}function u1(){_.crystals.forEach(n=>{lt.remove(n.mesh),n.mesh.material.dispose()}),_.crystals=[]}const d1=["title","mapOv","shopOv","over","win","pauseOv","logOv"],Ss=n=>d1.forEach(e=>Q(e).hidden=e!==n);function h1(){for(let n=0;n<500;n++){const e=li(),t=Zn(e);if(t>.2&&t<.6&&ms.every(i=>i.type==="r"||i.c.angleTo(e)>i.w+.1))return e}return new N(0,0,1)}function Fo(n,e=null){const t=e??(Ii.id===n?Ii.variant:0),i=e===null?Ii.id===n?Ii.light:"day":yM(e);(Ii.id!==n||Ii.variant!==t||Ii.light!==i)&&hf(n,t,i)}function mp(){jy(),u1(),JM(),ty(),Ro(),QS(),GS()}function yu(){_.runId++,ff(),mp(),ca(),dp(),TS(),TM(Ve.stamMax),gf(),Object.assign(_,{score:0,ult:wt.start,stamina:Ve.stamMax,combo:0,bestCombo:0,mode:"play",runTime:0,hurtCount:0,endless:!1,boss:null,slowT:0,hitstop:0,waveClearing:!1,crystalT:6,runCrystals:0,undyingUsed:!1}),iS(h1()),Q("combo").style.opacity=0,_.state="play",Ss(null),Q("pauseBtn").hidden=!1,Q("skipTut").hidden=!0}function Su(n){Object.assign(_,{level:n,waves:n.waves,tier:n.tier,hpMul:n.hpMul??n.planet.hpMul,wave:1})}function Ki(n){const e=Ir(n);Fo(e.planet.id,e.i),yu(),Su(e),Mu("game",n),$i(T),da(1)}function Oo(n){const e=Et[n],t=Ir(xn(n,e.levels.length-1));Fo(e.id),yu(),Su(t),_.endless=!0,Mu("endless",e.id),$i(T),da(1)}function f1(){Ki(xS())}function bu(){const n=Ir(xn(0,0));Fo(n.planet.id),yu(),Su(n),Mu("tutorial",n.id),Q("skipTut").hidden=!1,e1(()=>{_.state==="play"&&(Q("skipTut").hidden=!0,_.ult=wt.start,da(1))})}function p1(){if(_.state!=="play")return;_.state="over",_.mode="play",pe.run=null,ca(),Q("pauseBtn").hidden=!0,Kn("dizzy",99),Uo("dead");const n=_.endless?SS(_.level.planet.id,_.wave-1,_.score,_.runCrystals):Kf(_.runCrystals,_.wave-1,_.level.planet.reward);Q("final").textContent=_.score.toLocaleString(),Q("best").innerHTML=`${_.endless?`無盡第 ${_.wave} 波`:`${_.level.name} · WAVE ${_.wave}`}<br>獲得 ${Tr(n)}　持有 ${Tr(de.crystals)}`,_p(),br(.9,()=>Ss("over"))}function m1(){const n=(_.hurtCount===0?3:_.hurtCount<=2?2:_.hurtCount<=5?1:0)+(_.bestCombo>=15?2:_.bestCombo>=8?1:0);return n>=5?"S":n>=3?"A":n>=2?"B":"C"}Vt("victory",()=>{Ne.win(),Yi(_.level.boss?"星球解放！":"關卡完成！"),br(2.2,()=>{if(_.state!=="play")return;_.state="win",ca(),Q("pauseBtn").hidden=!0,Uo("win");const n=m1(),e=yS(_.level.id,n,_.score,_.runCrystals),t=jf(_.level.id),i=Math.floor(_.runTime/60),r=Math.floor(_.runTime%60);Q("winLabel").textContent=_.level.boss?"PLANET CLEARED":`LEVEL ${_.level.i+1}`,Q("winName").textContent=_.level.boss?"星球解放":_.level.name,Q("rank").textContent=n,Q("winStars").innerHTML=tp(e.stars),Q("winScore").textContent=_.score.toLocaleString(),Q("winGems").innerHTML=`獲得 ${Tr(e.earned)}${e.first?"　首次通關":""}<br>持有 ${Tr(de.crystals)}`,_p(),Q("winStats").innerHTML=`<span>時間<b>${i}:${String(r).padStart(2,"0")}</b></span><span>受傷<b>${_.hurtCount}</b></span><span>最高連擊<b>${_.bestCombo}</b></span>`,Q("nextLevel").hidden=!t,Q("nextLevel").textContent=t&&Ir(t).p!==_.level.p?"前往下一顆星球":"下一關",Ss("win")})});Vt("hurt",()=>{T.hp<=0&&br(.5,p1)});function Ws(n){ff(),mp(),_.mode="play",_.boss=null,_.storm=0,gf(),Q("pauseBtn").hidden=!0,Q("skipTut").hidden=!0,_.state=n==="title"?"title":n==="shopOv"?"shop":"map",Ss(n),n==="title"&&Eu()}function gp(){Ln(),hu(),Ws("mapOv")}function g1(){_.state==="play"&&(Uo("quit"),Kf(_.runCrystals,0,0))}CS({title:()=>Ws("title"),map:()=>Ws("mapOv"),shop:()=>Ws("shopOv"),select:Fo,play:n=>{Ln(),Ki(n)},endless:n=>{Ln(),Oo(n)}});Q("start").onclick=()=>{hp()?gp():(Ln(),bu())};Q("tutBtn").onclick=()=>{Ln(),bu()};Q("again").onclick=()=>{Ln(),_.endless?Oo(_.level.p):Ki(_.level.id)};Q("winAgain").onclick=()=>{Ln(),Ki(_.level.id)};Q("nextLevel").onclick=()=>{Ln(),Ki(jf(_.level.id))};Q("skipTut").onclick=n=>{n.stopPropagation();try{localStorage.setItem("slasharena-tut","1")}catch{}Ki(xn(0,0))};Q("skipTut").addEventListener("pointerdown",n=>n.stopPropagation());for(const n of["winShop","overShop"])Q(n).onclick=()=>{Ln(),Ne.ui(),ia(),Ws("shopOv")};function _p(){const n=AS();for(const e of document.querySelectorAll(".cta-hint"))e.textContent=n?`　${n}`:"";for(const e of["winShop","overShop"])Q(e).classList.toggle("ready",!!n)}for(const n of["toTitle","overTitle","winTitle"])Q(n).onclick=()=>{g1(),gp()};function Eu(){Q("titleBest").textContent=Mo()?`★ ${Mo()} / ${Yf()}　◆ ${de.crystals.toLocaleString()}`:"",Q("tutBtn").hidden=!hp(),Q("logBtn").hidden=!No().length}Q("logBtn").onclick=()=>{Q("logText").textContent=pp()||"（還沒有紀錄）",Ss("logOv")};Q("logCopy").onclick=async()=>{const n=pp()+`

`+JSON.stringify(No());try{await navigator.clipboard.writeText(n),Q("logCopy").textContent="已複製"}catch{Q("logCopy").textContent="無法複製，請長按文字選取"}setTimeout(()=>Q("logCopy").textContent="複製全部（傳給開發者）",1600)};Q("logClear").onclick=()=>{s1(),Q("logText").textContent="（已清除）"};Q("logClose").onclick=()=>{Ss("title"),Eu()};Eu();let wu=!1;const _1='<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h3l4-3.5v11L6 12H3z" fill="currentColor"/><path d="M13 7.5a3.5 3.5 0 0 1 0 5M15.2 5.2a6.5 6.5 0 0 1 0 9.6"/></svg>',v1='<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h3l4-3.5v11L6 12H3z" fill="currentColor"/><path d="M13 8l4 4M17 8l-4 4"/></svg>';function Tu(n){Ft.volume=Kt(n,0,1),Ft.volume>0&&(Ft.lastVol=Ft.volume);try{localStorage.setItem("slasharena-vol",Ft.volume)}catch{}Ft.volume>0?Ln():DM(0);const e=Q("soundBtn");e.innerHTML=Ft.volume>0?_1:v1,e.classList.toggle("off",Ft.volume<=0),e.setAttribute("aria-label",Ft.volume>0?"關閉聲音":"開啟聲音"),Q("vol").value=Math.round(Ft.volume*100),Q("volN").textContent=Ft.volume>0?Math.round(Ft.volume*100)+"%":"關"}function bs(n){n&&_.state!=="play"||(wu=n,Q("pauseOv").hidden=!n,n&&(ca(),pe.drawing=!1),Rc=performance.now())}Q("soundBtn").addEventListener("pointerdown",n=>n.stopPropagation());Q("soundBtn").onclick=()=>{Tu(Ft.volume>0?0:Ft.lastVol),Ft.volume>0&&xt(660,.08,"sine",.08)};Q("pauseBtn").addEventListener("pointerdown",n=>n.stopPropagation());Q("pauseBtn").onclick=()=>bs(!0);Q("resume").onclick=()=>bs(!1);Q("restart").onclick=()=>{bs(!1),_.endless?Oo(_.level.p):Ki(_.level.id)};Q("toTitle").addEventListener("click",()=>bs(!1));Q("vol").addEventListener("input",n=>Tu(n.target.value/100));Q("vib").checked=Js.on;Q("vib").addEventListener("change",n=>{Js.on=n.target.checked;try{localStorage.setItem("slasharena-vib",Js.on?"1":"0")}catch{}});addEventListener("keydown",n=>{(n.key==="Escape"||n.key==="p"||n.key==="P")&&bs(!wu)});document.addEventListener("visibilitychange",()=>{document.hidden&&_.state==="play"&&!window.__game?.noAutoPause&&bs(!0)});Tu(Ft.volume);const x1=Q("ink"),M1=Q("ultTip");let Rc=performance.now(),Ja=0,vp=!1,xp=!1;const xh=new N,Mh=new N,yh=new N;function Mp(n){requestAnimationFrame(Mp);const e=Math.min((n-Rc)/1e3,.05);Rc=n,!vp&&!wu&&yp(e)}function yp(n){Ja+=n,mM(n),bM(n),document.body.dataset.state!==_.state&&(document.body.dataset.state=_.state);const e=_.mode==="ultDraw"?.03:_.mode==="ultDash"?.25:_.slowT>0?.2:1;_.ts+=(e-_.ts)*(1-Math.exp(-n*14)),_.state==="play"?(_.slowT-=n,_.comboT-=n,_.graceT-=n,_.runTime+=n,YS(),_.hitstop>0?_.hitstop-=n:(_.mode==="ultDash"?zS(n):_.mode==="play"&&tS(n),Vy(n*_.ts,n),ZM(n*_.ts),_.mode==="play"&&ey(n),dy(n*_.ts,n),_.mode==="play"&&!_.tut&&(_.ult=Math.min(100,_.ult+n*wt.charge)),!_.tut&&(_.crystalT-=n)<=0&&(_.crystalT=11,_.crystals.length<2&&c1())),JS(),i1(n,Ja),_.mode!=="ultDraw"?Vd(T.d,_.mode==="ultDash"?7:5,n):je.boss&&Vd(je.boss.d,6,n)):(_.state==="title"||_.state==="map"||_.state==="shop")&&lt.rotateY(n*.12);for(const i of _.crystals)i.t+=n,i.mesh.position.copy(i.d).multiplyScalar(qe+an(i.d)+.7+Math.sin(i.t*3)*.12),i.mesh.quaternion.setFromUnitVectors(Wi,i.d),i.mesh.rotateY(i.t*2);NM(n),SM(Ja),HS(n),FM(n),BM(n),pM(n),nS(n,Ja);const t=_.mode==="ultDraw";M1.hidden=!t,t&&(x1.style.transform=`scaleX(${(pe.budget-pe.ink)/pe.budget})`),CM(_.warnings.some(i=>i.kind==="ring"&&Qs(i,T.d,.6))),aS(Sp),_.shake*=Math.exp(-n*9),qn.kick.multiplyScalar(Math.exp(-n*14)),qn.punch*=Math.exp(-n*8),!xp&&(xh.set(1,0,0).applyQuaternion(St.quaternion),Mh.set(0,1,0).applyQuaternion(St.quaternion),yh.set(0,0,-1).applyQuaternion(St.quaternion),St.position.copy(Hs).add(new N(Math.random()-.5,Math.random()-.5,0).multiplyScalar(_.shake)).addScaledVector(xh,qn.kick.x).addScaledVector(Mh,qn.kick.y).addScaledVector(yh,qn.punch),ci.render(yn,St),St.position.copy(Hs),St.updateMatrixWorld())}requestAnimationFrame(Mp);new URLSearchParams(location.search).has("tune")&&Sh(()=>import("./tune-BJZ_3XEy.js"),[],import.meta.url);new URLSearchParams(location.search).has("perf")&&Sh(()=>import("./perf-o0Hmg9rM.js"),[],import.meta.url);const Sp=n=>{const e=n.clone().multiplyScalar(qe+an(n)).applyQuaternion(lt.quaternion).project(St);return{x:(e.x+1)/2*innerWidth,y:(1-e.y)/2*innerHeight}};window.__game={get state(){return{state:_.state,mode:_.mode,level:_.level?.id,tier:_.tier,wave:_.wave,score:_.score,hp:T.hp,heroState:T.state,air:+T.air.toFixed(2),stamina:+_.stamina.toFixed(2),ult:+_.ult.toFixed(1),combo:_.combo,enemies:_.enemies.filter(n=>!n.dead).map(n=>n.type+(n.rolling?":roll":n.warn?":warn":n.stun>0?":stun":"")),warnings:_.warnings.map(n=>n.attack+":"+n.t.toFixed(2)+"/"+n.dur.toFixed(2)),tut:_.tut?.step??null,joy:Te.st,quality:Fi}},G:_,hero:T,seal:je,save:de,allLevels:oS,shop:{PACKS:vs,draw:Jf,pick:Qf},newGame:f1,newTutorial:bu,startLevel:Ki,startEndless:Oo,freeze(n){vp=n},headless(n){xp=n},step(n=1){for(let e=0;e<n;e++)yp(1/60)},spawn:(n,e,t)=>xi(n,e,t),hit:Dr,attack:(n,e)=>au(n,e),startWave:da,heal(){T.hp=Ve.maxHp,T.invuln=0},toScreen:Sp,GAIN:ri,zoneHas:Qs,renderer:ci,scene:yn,camera:St,act:{startParry:ea,doTap:Po,doJump:cu,ultBegin:Io,ultDown:np,ultMove:gu,ultUp:_u,ultPath:OS}};"serviceWorker"in navigator&&addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));export{_n as C,on as E,Ve as H,wt as U,Fi as q,ci as r,vn as s};
