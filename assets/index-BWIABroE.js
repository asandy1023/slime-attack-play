(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const O0="modulepreload",k0=function(n,e){return new URL(n,e).href},Kd={},dp=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){let c=function(u){return Promise.all(u.map(d=>Promise.resolve(d).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");r=c(t.map(u=>{if(u=k0(u,i),u in Kd)return;Kd[u]=!0;const d=u.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(i)for(let _=a.length-1;_>=0;_--){const x=a[_];if(x.href===u&&(!d||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${f}`))return;const h=document.createElement("link");if(h.rel=d?"stylesheet":O0,d||(h.as="script"),h.crossOrigin="",h.href=u,l&&h.setAttribute("nonce",l),document.head.appendChild(h),d)return new Promise((_,x)=>{h.addEventListener("load",_),h.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})};const Wu="180",B0=0,Zd=1,z0=2,Xu=1,G0=2,Ni=3,ur=0,Cn=1,sn=2,ar=0,Hr=1,dr=2,Jd=3,Qd=4,H0=5,Lr=100,V0=101,W0=102,X0=103,q0=104,$0=200,Y0=201,j0=202,K0=203,Fc=204,Oc=205,Z0=206,J0=207,Q0=208,eg=209,tg=210,ng=211,ig=212,rg=213,sg=214,kc=0,Bc=1,zc=2,Vs=3,Gc=4,Hc=5,Vc=6,Wc=7,fp=0,ag=1,og=2,or=0,lg=1,cg=2,ug=3,dg=4,fg=5,hg=6,pg=7,hp=300,Ws=301,Xs=302,Xc=303,qc=304,gl=306,$c=1e3,kr=1001,Yc=1002,Hn=1003,mg=1004,io=1005,mi=1006,Xl=1007,Br=1008,Mi=1009,pp=1010,mp=1011,Ua=1012,qu=1013,Xr=1014,gi=1015,ja=1016,$u=1017,Yu=1018,Na=1020,gp=35902,_p=35899,xp=1021,vp=1022,ai=1023,Fa=1026,Oa=1027,ju=1028,Ku=1029,Mp=1030,Zu=1031,Ju=1033,Ho=33776,Vo=33777,Wo=33778,Xo=33779,jc=35840,Kc=35841,Zc=35842,Jc=35843,Qc=36196,eu=37492,tu=37496,nu=37808,iu=37809,ru=37810,su=37811,au=37812,ou=37813,lu=37814,cu=37815,uu=37816,du=37817,fu=37818,hu=37819,pu=37820,mu=37821,gu=36492,_u=36494,xu=36495,vu=36283,Mu=36284,yu=36285,Su=36286,gg=3200,_g=3201,yp=0,xg=1,ir="",jn="srgb",qs="srgb-linear",Qo="linear",bt="srgb",os=7680,ef=519,vg=512,Mg=513,yg=514,Sp=515,Sg=516,bg=517,wg=518,Eg=519,bu=35044,Tg=35048,tf="300 es",_i=2e3,el=2001;class ea{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nf=1234567;const Ca=Math.PI/180,ka=180/Math.PI;function Gi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]).toLowerCase()}function rt(n,e,t){return Math.max(e,Math.min(t,n))}function Qu(n,e){return(n%e+e)%e}function Ag(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Rg(n,e,t){return n!==e?(t-n)/(e-n):0}function Pa(n,e,t){return(1-t)*n+t*e}function Cg(n,e,t,i){return Pa(n,e,1-Math.exp(-t*i))}function Pg(n,e=1){return e-Math.abs(Qu(n,e*2)-e)}function Dg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Lg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Ig(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Ug(n,e){return n+Math.random()*(e-n)}function Ng(n){return n*(.5-Math.random())}function Fg(n){n!==void 0&&(nf=n);let e=nf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Og(n){return n*Ca}function kg(n){return n*ka}function Bg(n){return(n&n-1)===0&&n!==0}function zg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Gg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Hg(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),d=s((e-i)/2),f=a((e-i)/2),h=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*d,l*f,o*c);break;case"YZY":n.set(l*f,o*u,l*d,o*c);break;case"ZXZ":n.set(l*d,l*f,o*u,o*c);break;case"XZX":n.set(o*u,l*_,l*h,o*c);break;case"YXY":n.set(l*h,o*u,l*_,o*c);break;case"ZYZ":n.set(l*_,l*h,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ii(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Mt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const tl={DEG2RAD:Ca,RAD2DEG:ka,generateUUID:Gi,clamp:rt,euclideanModulo:Qu,mapLinear:Ag,inverseLerp:Rg,lerp:Pa,damp:Cg,pingpong:Pg,smoothstep:Dg,smootherstep:Lg,randInt:Ig,randFloat:Ug,randFloatSpread:Ng,seededRandom:Fg,degToRad:Og,radToDeg:kg,isPowerOfTwo:Bg,ceilPowerOfTwo:zg,floorPowerOfTwo:Gg,setQuaternionFromProperEuler:Hg,normalize:Mt,denormalize:ii};class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ei{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[a+0],h=s[a+1],_=s[a+2],x=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=h,e[t+2]=_,e[t+3]=x;return}if(d!==x||l!==f||c!==h||u!==_){let g=1-o;const p=l*f+c*h+u*_+d*x,T=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const C=Math.sqrt(E),A=Math.atan2(C,p*T);g=Math.sin(g*A)/C,o=Math.sin(o*A)/C}const y=o*T;if(l=l*g+f*y,c=c*g+h*y,u=u*g+_*y,d=d*g+x*y,g===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],f=s[a+1],h=s[a+2],_=s[a+3];return e[t]=o*_+u*d+l*h-c*f,e[t+1]=l*_+u*f+c*d-o*h,e[t+2]=c*_+u*h+o*f-l*d,e[t+3]=u*_-o*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),f=l(i/2),h=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=f*u*d+c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d-f*h*_;break;case"YXZ":this._x=f*u*d+c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d+f*h*_;break;case"ZXY":this._x=f*u*d-c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d-f*h*_;break;case"ZYX":this._x=f*u*d-c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d+f*h*_;break;case"YZX":this._x=f*u*d+c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d-f*h*_;break;case"XZY":this._x=f*u*d-c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d+f*h*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+o+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-r)*h}else if(i>o&&i>d){const h=2*Math.sqrt(1+i-o-d);this._w=(u-l)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+c)/h}else if(o>d){const h=2*Math.sqrt(1+o-i-d);this._w=(s-c)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-i-o);this._w=(a-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const h=1-t;return this._w=h*a+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+l*c+a*d-o*u,this.y=i+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ql.copy(this).projectOnVector(e),this.sub(ql)}reflect(e){return this.sub(ql.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ql=new N,rf=new Ei;class Ze{constructor(e,t,i,r,s,a,o,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],_=i[8],x=r[0],g=r[3],p=r[6],T=r[1],E=r[4],y=r[7],C=r[2],A=r[5],D=r[8];return s[0]=a*x+o*T+l*C,s[3]=a*g+o*E+l*A,s[6]=a*p+o*y+l*D,s[1]=c*x+u*T+d*C,s[4]=c*g+u*E+d*A,s[7]=c*p+u*y+d*D,s[2]=f*x+h*T+_*C,s[5]=f*g+h*E+_*A,s[8]=f*p+h*y+_*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*s,h=c*s-a*l,_=t*d+i*f+r*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=d*x,e[1]=(r*c-u*i)*x,e[2]=(o*i-r*a)*x,e[3]=f*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-o*t)*x,e[6]=h*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply($l.makeScale(e,t)),this}rotate(e){return this.premultiply($l.makeRotation(-e)),this}translate(e,t){return this.premultiply($l.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $l=new Ze;function bp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function nl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Vg(){const n=nl("canvas");return n.style.display="block",n}const sf={};function Ba(n){n in sf||(sf[n]=!0,console.warn(n))}function Wg(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const af=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),of=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xg(){const n={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===bt&&(r.r=Hi(r.r),r.g=Hi(r.g),r.b=Hi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===bt&&(r.r=Fs(r.r),r.g=Fs(r.g),r.b=Fs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ir?Qo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ba("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ba("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[qs]:{primaries:e,whitePoint:i,transfer:Qo,toXYZ:af,fromXYZ:of,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jn},outputColorSpaceConfig:{drawingBufferColorSpace:jn}},[jn]:{primaries:e,whitePoint:i,transfer:bt,toXYZ:af,fromXYZ:of,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jn}}}),n}const ht=Xg();function Hi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Fs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ls;class qg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ls===void 0&&(ls=nl("canvas")),ls.width=e.width,ls.height=e.height;const r=ls.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ls}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=nl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Hi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Hi(t[i]/255)*255):t[i]=Hi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $g=0;class ed{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=Gi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Yl(r[a].image)):s.push(Yl(r[a]))}else s=Yl(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Yl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?qg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yg=0;const jl=new N;class bn extends ea{constructor(e=bn.DEFAULT_IMAGE,t=bn.DEFAULT_MAPPING,i=kr,r=kr,s=mi,a=Br,o=ai,l=Mi,c=bn.DEFAULT_ANISOTROPY,u=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=Gi(),this.name="",this.source=new ed(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(jl).x}get height(){return this.source.getSize(jl).y}get depth(){return this.source.getSize(jl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $c:e.x=e.x-Math.floor(e.x);break;case kr:e.x=e.x<0?0:1;break;case Yc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $c:e.y=e.y-Math.floor(e.y);break;case kr:e.y=e.y<0?0:1;break;case Yc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=hp;bn.DEFAULT_ANISOTROPY=1;class kt{constructor(e=0,t=0,i=0,r=1){kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],_=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(_+g)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,y=(h+1)/2,C=(p+1)/2,A=(u+f)/4,D=(d+x)/4,L=(_+g)/4;return E>y&&E>C?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=A/i,s=D/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=A/r,s=L/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=D/s,r=L/s),this.set(i,r,s,t),this}let T=Math.sqrt((g-_)*(g-_)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(g-_)/T,this.y=(d-x)/T,this.z=(f-u)/T,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jg extends ea{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new bn(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:mi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new ed(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qr extends jg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class wp extends bn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kg extends bn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qr{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ei):ei.fromBufferAttribute(s,a),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ro.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ro.copy(i.boundingBox)),ro.applyMatrix4(e.matrixWorld),this.union(ro)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ca),so.subVectors(this.max,ca),cs.subVectors(e.a,ca),us.subVectors(e.b,ca),ds.subVectors(e.c,ca),Yi.subVectors(us,cs),ji.subVectors(ds,us),Sr.subVectors(cs,ds);let t=[0,-Yi.z,Yi.y,0,-ji.z,ji.y,0,-Sr.z,Sr.y,Yi.z,0,-Yi.x,ji.z,0,-ji.x,Sr.z,0,-Sr.x,-Yi.y,Yi.x,0,-ji.y,ji.x,0,-Sr.y,Sr.x,0];return!Kl(t,cs,us,ds,so)||(t=[1,0,0,0,1,0,0,0,1],!Kl(t,cs,us,ds,so))?!1:(ao.crossVectors(Yi,ji),t=[ao.x,ao.y,ao.z],Kl(t,cs,us,ds,so))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ri=[new N,new N,new N,new N,new N,new N,new N,new N],ei=new N,ro=new Qr,cs=new N,us=new N,ds=new N,Yi=new N,ji=new N,Sr=new N,ca=new N,so=new N,ao=new N,br=new N;function Kl(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){br.fromArray(n,s);const o=r.x*Math.abs(br.x)+r.y*Math.abs(br.y)+r.z*Math.abs(br.z),l=e.dot(br),c=t.dot(br),u=i.dot(br);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Zg=new Qr,ua=new N,Zl=new N;class ta{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Zg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ua.subVectors(e,this.center);const t=ua.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ua,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ua.copy(e.center).add(Zl)),this.expandByPoint(ua.copy(e.center).sub(Zl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ci=new N,Jl=new N,oo=new N,Ki=new N,Ql=new N,lo=new N,ec=new N;class td{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Jl.copy(e).add(t).multiplyScalar(.5),oo.copy(t).sub(e).normalize(),Ki.copy(this.origin).sub(Jl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(oo),o=Ki.dot(this.direction),l=-Ki.dot(oo),c=Ki.lengthSq(),u=Math.abs(1-a*a);let d,f,h,_;if(u>0)if(d=a*l-o,f=a*o-l,_=s*u,d>=0)if(f>=-_)if(f<=_){const x=1/u;d*=x,f*=x,h=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Jl).addScaledVector(oo,f),h}intersectSphere(e,t){Ci.subVectors(e.center,this.origin);const i=Ci.dot(this.direction),r=Ci.dot(Ci)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,i,r,s){Ql.subVectors(t,e),lo.subVectors(i,e),ec.crossVectors(Ql,lo);let a=this.direction.dot(ec),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ki.subVectors(this.origin,e);const l=o*this.direction.dot(lo.crossVectors(Ki,lo));if(l<0)return null;const c=o*this.direction.dot(Ql.cross(Ki));if(c<0||l+c>a)return null;const u=-o*Ki.dot(ec);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,t,i,r,s,a,o,l,c,u,d,f,h,_,x,g){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,d,f,h,_,x,g)}set(e,t,i,r,s,a,o,l,c,u,d,f,h,_,x,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=_,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/fs.setFromMatrixColumn(e,0).length(),s=1/fs.setFromMatrixColumn(e,1).length(),a=1/fs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*u,h=a*d,_=o*u,x=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+_*c,t[5]=f-x*c,t[9]=-o*l,t[2]=x-f*c,t[6]=_+h*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,_=c*u,x=c*d;t[0]=f+x*o,t[4]=_*o-h,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=h*o-_,t[6]=x+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,_=c*u,x=c*d;t[0]=f-x*o,t[4]=-a*d,t[8]=_+h*o,t[1]=h+_*o,t[5]=a*u,t[9]=x-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,h=a*d,_=o*u,x=o*d;t[0]=l*u,t[4]=_*c-h,t[8]=f*c+x,t[1]=l*d,t[5]=x*c+f,t[9]=h*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,h=a*c,_=o*l,x=o*c;t[0]=l*u,t[4]=x-f*d,t[8]=_*d+h,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*d+_,t[10]=f-x*d}else if(e.order==="XZY"){const f=a*l,h=a*c,_=o*l,x=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+x,t[5]=a*u,t[9]=h*d-_,t[2]=_*d-h,t[6]=o*u,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jg,e,Qg)}lookAt(e,t,i){const r=this.elements;return kn.subVectors(e,t),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),Zi.crossVectors(i,kn),Zi.lengthSq()===0&&(Math.abs(i.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),Zi.crossVectors(i,kn)),Zi.normalize(),co.crossVectors(kn,Zi),r[0]=Zi.x,r[4]=co.x,r[8]=kn.x,r[1]=Zi.y,r[5]=co.y,r[9]=kn.y,r[2]=Zi.z,r[6]=co.z,r[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],_=i[2],x=i[6],g=i[10],p=i[14],T=i[3],E=i[7],y=i[11],C=i[15],A=r[0],D=r[4],L=r[8],b=r[12],w=r[1],I=r[5],k=r[9],H=r[13],X=r[2],Y=r[6],q=r[10],se=r[14],V=r[3],ue=r[7],_e=r[11],Ue=r[15];return s[0]=a*A+o*w+l*X+c*V,s[4]=a*D+o*I+l*Y+c*ue,s[8]=a*L+o*k+l*q+c*_e,s[12]=a*b+o*H+l*se+c*Ue,s[1]=u*A+d*w+f*X+h*V,s[5]=u*D+d*I+f*Y+h*ue,s[9]=u*L+d*k+f*q+h*_e,s[13]=u*b+d*H+f*se+h*Ue,s[2]=_*A+x*w+g*X+p*V,s[6]=_*D+x*I+g*Y+p*ue,s[10]=_*L+x*k+g*q+p*_e,s[14]=_*b+x*H+g*se+p*Ue,s[3]=T*A+E*w+y*X+C*V,s[7]=T*D+E*I+y*Y+C*ue,s[11]=T*L+E*k+y*q+C*_e,s[15]=T*b+E*H+y*se+C*Ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],_=e[3],x=e[7],g=e[11],p=e[15];return _*(+s*l*d-r*c*d-s*o*f+i*c*f+r*o*h-i*l*h)+x*(+t*l*h-t*c*f+s*a*f-r*a*h+r*c*u-s*l*u)+g*(+t*c*d-t*o*h-s*a*d+i*a*h+s*o*u-i*c*u)+p*(-r*o*u-t*l*d+t*o*f+r*a*d-i*a*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],_=e[12],x=e[13],g=e[14],p=e[15],T=d*g*c-x*f*c+x*l*h-o*g*h-d*l*p+o*f*p,E=_*f*c-u*g*c-_*l*h+a*g*h+u*l*p-a*f*p,y=u*x*c-_*d*c+_*o*h-a*x*h-u*o*p+a*d*p,C=_*d*l-u*x*l-_*o*f+a*x*f+u*o*g-a*d*g,A=t*T+i*E+r*y+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/A;return e[0]=T*D,e[1]=(x*f*s-d*g*s-x*r*h+i*g*h+d*r*p-i*f*p)*D,e[2]=(o*g*s-x*l*s+x*r*c-i*g*c-o*r*p+i*l*p)*D,e[3]=(d*l*s-o*f*s-d*r*c+i*f*c+o*r*h-i*l*h)*D,e[4]=E*D,e[5]=(u*g*s-_*f*s+_*r*h-t*g*h-u*r*p+t*f*p)*D,e[6]=(_*l*s-a*g*s-_*r*c+t*g*c+a*r*p-t*l*p)*D,e[7]=(a*f*s-u*l*s+u*r*c-t*f*c-a*r*h+t*l*h)*D,e[8]=y*D,e[9]=(_*d*s-u*x*s-_*i*h+t*x*h+u*i*p-t*d*p)*D,e[10]=(a*x*s-_*o*s+_*i*c-t*x*c-a*i*p+t*o*p)*D,e[11]=(u*o*s-a*d*s-u*i*c+t*d*c+a*i*h-t*o*h)*D,e[12]=C*D,e[13]=(u*x*r-_*d*r+_*i*f-t*x*f-u*i*g+t*d*g)*D,e[14]=(_*o*r-a*x*r-_*i*l+t*x*l+a*i*g-t*o*g)*D,e[15]=(a*d*r-u*o*r+u*i*l-t*d*l-a*i*f+t*o*f)*D,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,f=s*c,h=s*u,_=s*d,x=a*u,g=a*d,p=o*d,T=l*c,E=l*u,y=l*d,C=i.x,A=i.y,D=i.z;return r[0]=(1-(x+p))*C,r[1]=(h+y)*C,r[2]=(_-E)*C,r[3]=0,r[4]=(h-y)*A,r[5]=(1-(f+p))*A,r[6]=(g+T)*A,r[7]=0,r[8]=(_+E)*D,r[9]=(g-T)*D,r[10]=(1-(f+x))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=fs.set(r[0],r[1],r[2]).length();const a=fs.set(r[4],r[5],r[6]).length(),o=fs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ti.copy(this);const c=1/s,u=1/a,d=1/o;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=u,ti.elements[5]*=u,ti.elements[6]*=u,ti.elements[8]*=d,ti.elements[9]*=d,ti.elements[10]*=d,t.setFromRotationMatrix(ti),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=_i,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let _,x;if(l)_=s/(a-s),x=a*s/(a-s);else if(o===_i)_=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===el)_=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=_i,l=!1){const c=this.elements,u=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),h=-(i+r)/(i-r);let _,x;if(l)_=1/(a-s),x=a/(a-s);else if(o===_i)_=-2/(a-s),x=-(a+s)/(a-s);else if(o===el)_=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const fs=new N,ti=new dt,Jg=new N(0,0,0),Qg=new N(1,1,1),Zi=new N,co=new N,kn=new N,lf=new dt,cf=new Ei;class yi{constructor(e=0,t=0,i=0,r=yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return lf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cf.setFromEuler(this),this.setFromQuaternion(cf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yi.DEFAULT_ORDER="XYZ";class nd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let e_=0;const uf=new N,hs=new Ei,Pi=new dt,uo=new N,da=new N,t_=new N,n_=new Ei,df=new N(1,0,0),ff=new N(0,1,0),hf=new N(0,0,1),pf={type:"added"},i_={type:"removed"},ps={type:"childadded",child:null},tc={type:"childremoved",child:null};class zt extends ea{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:e_++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new N,t=new yi,i=new Ei,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new dt},normalMatrix:{value:new Ze}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(df,e)}rotateY(e){return this.rotateOnAxis(ff,e)}rotateZ(e){return this.rotateOnAxis(hf,e)}translateOnAxis(e,t){return uf.copy(e).applyQuaternion(this.quaternion),this.position.add(uf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(df,e)}translateY(e){return this.translateOnAxis(ff,e)}translateZ(e){return this.translateOnAxis(hf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?uo.copy(e):uo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(da,uo,this.up):Pi.lookAt(uo,da,this.up),this.quaternion.setFromRotationMatrix(Pi),r&&(Pi.extractRotation(r.matrixWorld),hs.setFromRotationMatrix(Pi),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pf),ps.child=e,this.dispatchEvent(ps),ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(i_),tc.child=e,this.dispatchEvent(tc),tc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pf),ps.child=e,this.dispatchEvent(ps),ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,e,t_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,n_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),h=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}zt.DEFAULT_UP=new N(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new N,Di=new N,nc=new N,Li=new N,ms=new N,gs=new N,mf=new N,ic=new N,rc=new N,sc=new N,ac=new kt,oc=new kt,lc=new kt;class Jn{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ni.subVectors(e,t),r.cross(ni);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ni.subVectors(r,t),Di.subVectors(i,t),nc.subVectors(e,t);const a=ni.dot(ni),o=ni.dot(Di),l=ni.dot(nc),c=Di.dot(Di),u=Di.dot(nc),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,h=(c*l-o*u)*f,_=(a*u-o*l)*f;return s.set(1-h-_,_,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Li.x),l.addScaledVector(a,Li.y),l.addScaledVector(o,Li.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return ac.setScalar(0),oc.setScalar(0),lc.setScalar(0),ac.fromBufferAttribute(e,t),oc.fromBufferAttribute(e,i),lc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ac,s.x),a.addScaledVector(oc,s.y),a.addScaledVector(lc,s.z),a}static isFrontFacing(e,t,i,r){return ni.subVectors(i,t),Di.subVectors(e,t),ni.cross(Di).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),ni.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Jn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;ms.subVectors(r,i),gs.subVectors(s,i),ic.subVectors(e,i);const l=ms.dot(ic),c=gs.dot(ic);if(l<=0&&c<=0)return t.copy(i);rc.subVectors(e,r);const u=ms.dot(rc),d=gs.dot(rc);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(ms,a);sc.subVectors(e,s);const h=ms.dot(sc),_=gs.dot(sc);if(_>=0&&h<=_)return t.copy(s);const x=h*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(gs,o);const g=u*_-h*d;if(g<=0&&d-u>=0&&h-_>=0)return mf.subVectors(s,r),o=(d-u)/(d-u+(h-_)),t.copy(r).addScaledVector(mf,o);const p=1/(g+x+f);return a=x*p,o=f*p,t.copy(i).addScaledVector(ms,a).addScaledVector(gs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ep={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},fo={h:0,s:0,l:0};function cc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Se{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=ht.workingColorSpace){return this.r=e,this.g=t,this.b=i,ht.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=ht.workingColorSpace){if(e=Qu(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=cc(a,s,e+1/3),this.g=cc(a,s,e),this.b=cc(a,s,e-1/3)}return ht.colorSpaceToWorking(this,r),this}setStyle(e,t=jn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jn){const i=Ep[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return ht.workingToColorSpace(vn.copy(this),e),Math.round(rt(vn.r*255,0,255))*65536+Math.round(rt(vn.g*255,0,255))*256+Math.round(rt(vn.b*255,0,255))}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(vn.copy(this),t);const i=vn.r,r=vn.g,s=vn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=jn){ht.workingToColorSpace(vn.copy(this),e);const t=vn.r,i=vn.g,r=vn.b;return e!==jn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ji),this.setHSL(Ji.h+e,Ji.s+t,Ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ji),e.getHSL(fo);const i=Pa(Ji.h,fo.h,t),r=Pa(Ji.s,fo.s,t),s=Pa(Ji.l,fo.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new Se;Se.NAMES=Ep;let r_=0;class es extends ea{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:r_++}),this.uuid=Gi(),this.name="",this.type="Material",this.blending=Hr,this.side=ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fc,this.blendDst=Oc,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ef,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(i.blending=this.blending),this.side!==ur&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fc&&(i.blendSrc=this.blendSrc),this.blendDst!==Oc&&(i.blendDst=this.blendDst),this.blendEquation!==Lr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ef&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(i.stencilFail=this.stencilFail),this.stencilZFail!==os&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xt extends es{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=fp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new N,ho=new ke;let s_=0;class Pn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:s_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=bu,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ho.fromBufferAttribute(this,t),ho.applyMatrix3(e),this.setXY(t,ho.x,ho.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ii(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Mt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),r=Mt(r,this.array),s=Mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bu&&(e.usage=this.usage),e}}class Tp extends Pn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ap extends Pn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class nt extends Pn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let a_=0;const $n=new dt,uc=new zt,_s=new N,Bn=new Qr,fa=new Qr,fn=new N;class Kt extends ea{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bp(e)?Ap:Tp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,t,i){return $n.makeTranslation(e,t,i),this.applyMatrix4($n),this}scale(e,t,i){return $n.makeScale(e,t,i),this.applyMatrix4($n),this}lookAt(e){return uc.lookAt(e),uc.updateMatrix(),this.applyMatrix4(uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new nt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Bn.setFromBufferAttribute(s),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ta);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];fa.setFromBufferAttribute(o),this.morphTargetsRelative?(fn.addVectors(Bn.min,fa.min),Bn.expandByPoint(fn),fn.addVectors(Bn.max,fa.max),Bn.expandByPoint(fn)):(Bn.expandByPoint(fa.min),Bn.expandByPoint(fa.max))}Bn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)fn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(fn));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)fn.fromBufferAttribute(o,c),l&&(_s.fromBufferAttribute(e,c),fn.add(_s)),r=Math.max(r,i.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new N,l[L]=new N;const c=new N,u=new N,d=new N,f=new ke,h=new ke,_=new ke,x=new N,g=new N;function p(L,b,w){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,b),d.fromBufferAttribute(i,w),f.fromBufferAttribute(s,L),h.fromBufferAttribute(s,b),_.fromBufferAttribute(s,w),u.sub(c),d.sub(c),h.sub(f),_.sub(f);const I=1/(h.x*_.y-_.x*h.y);isFinite(I)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(d,-h.y).multiplyScalar(I),g.copy(d).multiplyScalar(h.x).addScaledVector(u,-_.x).multiplyScalar(I),o[L].add(x),o[b].add(x),o[w].add(x),l[L].add(g),l[b].add(g),l[w].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let L=0,b=T.length;L<b;++L){const w=T[L],I=w.start,k=w.count;for(let H=I,X=I+k;H<X;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const E=new N,y=new N,C=new N,A=new N;function D(L){C.fromBufferAttribute(r,L),A.copy(C);const b=o[L];E.copy(b),E.sub(C.multiplyScalar(C.dot(b))).normalize(),y.crossVectors(A,b);const I=y.dot(l[L])<0?-1:1;a.setXYZW(L,E.x,E.y,E.z,I)}for(let L=0,b=T.length;L<b;++L){const w=T[L],I=w.start,k=w.count;for(let H=I,X=I+k;H<X;H+=3)D(e.getX(H+0)),D(e.getX(H+1)),D(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const r=new N,s=new N,a=new N,o=new N,l=new N,c=new N,u=new N,d=new N;if(e)for(let f=0,h=e.count;f<h;f+=3){const _=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let h=0,_=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?h=l[x]*o.data.stride+o.offset:h=l[x]*u;for(let p=0;p<u;p++)f[_++]=c[h++]}return new Pn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Kt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,i);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gf=new dt,wr=new td,po=new ta,_f=new N,mo=new N,go=new N,_o=new N,dc=new N,xo=new N,xf=new N,vo=new N;class K extends zt{constructor(e=new Kt,t=new xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){xo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(dc.fromBufferAttribute(d,e),a?xo.addScaledVector(dc,u):xo.addScaledVector(dc.sub(t),u))}t.add(xo)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),po.copy(i.boundingSphere),po.applyMatrix4(s),wr.copy(e.ray).recast(e.near),!(po.containsPoint(wr.origin)===!1&&(wr.intersectSphere(po,_f)===null||wr.origin.distanceToSquared(_f)>(e.far-e.near)**2))&&(gf.copy(s).invert(),wr.copy(e.ray).applyMatrix4(gf),!(i.boundingBox!==null&&wr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,wr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=f.length;_<x;_++){const g=f[_],p=a[g.materialIndex],T=Math.max(g.start,h.start),E=Math.min(o.count,Math.min(g.start+g.count,h.start+h.count));for(let y=T,C=E;y<C;y+=3){const A=o.getX(y),D=o.getX(y+1),L=o.getX(y+2);r=Mo(this,p,e,i,c,u,d,A,D,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),x=Math.min(o.count,h.start+h.count);for(let g=_,p=x;g<p;g+=3){const T=o.getX(g),E=o.getX(g+1),y=o.getX(g+2);r=Mo(this,a,e,i,c,u,d,T,E,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=f.length;_<x;_++){const g=f[_],p=a[g.materialIndex],T=Math.max(g.start,h.start),E=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let y=T,C=E;y<C;y+=3){const A=y,D=y+1,L=y+2;r=Mo(this,p,e,i,c,u,d,A,D,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let g=_,p=x;g<p;g+=3){const T=g,E=g+1,y=g+2;r=Mo(this,a,e,i,c,u,d,T,E,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function o_(n,e,t,i,r,s,a,o){let l;if(e.side===Cn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ur,o),l===null)return null;vo.copy(o),vo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(vo);return c<t.near||c>t.far?null:{distance:c,point:vo.clone(),object:n}}function Mo(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,mo),n.getVertexPosition(l,go),n.getVertexPosition(c,_o);const u=o_(n,e,t,i,mo,go,_o,xf);if(u){const d=new N;Jn.getBarycoord(xf,mo,go,_o,d),r&&(u.uv=Jn.getInterpolatedAttribute(r,o,l,c,d,new ke)),s&&(u.uv1=Jn.getInterpolatedAttribute(s,o,l,c,d,new ke)),a&&(u.normal=Jn.getInterpolatedAttribute(a,o,l,c,d,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new N,materialIndex:0};Jn.getNormal(mo,go,_o,f.normal),u.face=f,u.barycoord=d}return u}class fr extends Kt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,h=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(d,2));function _(x,g,p,T,E,y,C,A,D,L,b){const w=y/D,I=C/L,k=y/2,H=C/2,X=A/2,Y=D+1,q=L+1;let se=0,V=0;const ue=new N;for(let _e=0;_e<q;_e++){const Ue=_e*I-H;for(let it=0;it<Y;it++){const Et=it*w-k;ue[x]=Et*T,ue[g]=Ue*E,ue[p]=X,c.push(ue.x,ue.y,ue.z),ue[x]=0,ue[g]=0,ue[p]=A>0?1:-1,u.push(ue.x,ue.y,ue.z),d.push(it/D),d.push(1-_e/L),se+=1}}for(let _e=0;_e<L;_e++)for(let Ue=0;Ue<D;Ue++){const it=f+Ue+Y*_e,Et=f+Ue+Y*(_e+1),Lt=f+(Ue+1)+Y*(_e+1),mt=f+(Ue+1)+Y*_e;l.push(it,Et,mt),l.push(Et,Lt,mt),V+=6}o.addGroup(h,V,b),h+=V,f+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $s(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Tn(n){const e={};for(let t=0;t<n.length;t++){const i=$s(n[t]);for(const r in i)e[r]=i[r]}return e}function l_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Rp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const c_={clone:$s,merge:Tn};var u_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,d_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Si extends es{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u_,this.fragmentShader=d_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=l_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Cp extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=_i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qi=new N,vf=new ke,Mf=new ke;class Kn extends Cp{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ka*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ca*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ka*2*Math.atan(Math.tan(Ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,t){return this.getViewBounds(e,vf,Mf),t.subVectors(Mf,vf)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ca*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xs=-90,vs=1;class f_ extends zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Kn(xs,vs,e,t);r.layers=this.layers,this.add(r);const s=new Kn(xs,vs,e,t);s.layers=this.layers,this.add(s);const a=new Kn(xs,vs,e,t);a.layers=this.layers,this.add(a);const o=new Kn(xs,vs,e,t);o.layers=this.layers,this.add(o);const l=new Kn(xs,vs,e,t);l.layers=this.layers,this.add(l);const c=new Kn(xs,vs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===_i)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===el)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Pp extends bn{constructor(e=[],t=Ws,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class h_ extends qr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Pp(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new fr(5,5,5),s=new Si({name:"CubemapFromEquirect",uniforms:$s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Cn,blending:ar});s.uniforms.tEquirect.value=t;const a=new K(r,s),o=t.minFilter;return t.minFilter===Br&&(t.minFilter=mi),new f_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class Ye extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const p_={type:"move"};class fc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const g=t.getJointPose(x,i),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,_=.005;c.inputState.pinching&&f>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(p_)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ye;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class id{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Se(e),this.near=t,this.far=i}clone(){return new id(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class m_ extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class g_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=bu,this.updateRanges=[],this.version=0,this.uuid=Gi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const En=new N;class il{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ii(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Mt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ii(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),r=Mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),r=Mt(r,this.array),s=Mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Pn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new il(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Dp extends es{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ms;const ha=new N,ys=new N,Ss=new N,bs=new ke,pa=new ke,Lp=new dt,yo=new N,ma=new N,So=new N,yf=new ke,hc=new ke,Sf=new ke;class __ extends zt{constructor(e=new Dp){if(super(),this.isSprite=!0,this.type="Sprite",Ms===void 0){Ms=new Kt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new g_(t,5);Ms.setIndex([0,1,2,0,2,3]),Ms.setAttribute("position",new il(i,3,0,!1)),Ms.setAttribute("uv",new il(i,2,3,!1))}this.geometry=Ms,this.material=e,this.center=new ke(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ys.setFromMatrixScale(this.matrixWorld),Lp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ss.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ys.multiplyScalar(-Ss.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;bo(yo.set(-.5,-.5,0),Ss,a,ys,r,s),bo(ma.set(.5,-.5,0),Ss,a,ys,r,s),bo(So.set(.5,.5,0),Ss,a,ys,r,s),yf.set(0,0),hc.set(1,0),Sf.set(1,1);let o=e.ray.intersectTriangle(yo,ma,So,!1,ha);if(o===null&&(bo(ma.set(-.5,.5,0),Ss,a,ys,r,s),hc.set(0,1),o=e.ray.intersectTriangle(yo,So,ma,!1,ha),o===null))return;const l=e.ray.origin.distanceTo(ha);l<e.near||l>e.far||t.push({distance:l,point:ha.clone(),uv:Jn.getInterpolation(ha,yo,ma,So,yf,hc,Sf,new ke),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function bo(n,e,t,i,r,s){bs.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(pa.x=s*bs.x-r*bs.y,pa.y=r*bs.x+s*bs.y):pa.copy(bs),n.copy(e),n.x+=pa.x,n.y+=pa.y,n.applyMatrix4(Lp)}class x_ extends bn{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Hn,u=Hn,d,f){super(null,a,o,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bf extends Pn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ws=new dt,wf=new dt,wo=[],Ef=new Qr,v_=new dt,ga=new K,_a=new ta;class na extends K{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bf(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,v_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ws),Ef.copy(e.boundingBox).applyMatrix4(ws),this.boundingBox.union(Ef)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ta),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ws),_a.copy(e.boundingSphere).applyMatrix4(ws),this.boundingSphere.union(_a)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(ga.geometry=this.geometry,ga.material=this.material,ga.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_a.copy(this.boundingSphere),_a.applyMatrix4(i),e.ray.intersectsSphere(_a)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ws),wf.multiplyMatrices(i,ws),ga.matrixWorld=wf,ga.raycast(e,wo);for(let a=0,o=wo.length;a<o;a++){const l=wo[a];l.instanceId=s,l.object=this,t.push(l)}wo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new bf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new x_(new Float32Array(r*this.count),r,this.count,ju,gi));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const pc=new N,M_=new N,y_=new Ze;class Pr{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=pc.subVectors(i,t).cross(M_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(pc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||y_.getNormalMatrix(e),r=this.coplanarPoint(pc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Er=new ta,S_=new ke(.5,.5),Eo=new N;class rd{constructor(e=new Pr,t=new Pr,i=new Pr,r=new Pr,s=new Pr,a=new Pr){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=_i,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],h=s[7],_=s[8],x=s[9],g=s[10],p=s[11],T=s[12],E=s[13],y=s[14],C=s[15];if(r[0].setComponents(c-a,h-u,p-_,C-T).normalize(),r[1].setComponents(c+a,h+u,p+_,C+T).normalize(),r[2].setComponents(c+o,h+d,p+x,C+E).normalize(),r[3].setComponents(c-o,h-d,p-x,C-E).normalize(),i)r[4].setComponents(l,f,g,y).normalize(),r[5].setComponents(c-l,h-f,p-g,C-y).normalize();else if(r[4].setComponents(c-l,h-f,p-g,C-y).normalize(),t===_i)r[5].setComponents(c+l,h+f,p+g,C+y).normalize();else if(t===el)r[5].setComponents(l,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Er.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){Er.center.set(0,0,0);const t=S_.distanceTo(e.center);return Er.radius=.7071067811865476+t,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Eo.x=r.normal.x>0?e.max.x:e.min.x,Eo.y=r.normal.y>0?e.max.y:e.min.y,Eo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Eo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ip extends es{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Tf=new dt,wu=new td,To=new ta,Ao=new N;class b_ extends zt{constructor(e=new Kt,t=new Ip){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),To.copy(i.boundingSphere),To.applyMatrix4(r),To.radius+=s,e.ray.intersectsSphere(To)===!1)return;Tf.copy(r).invert(),wu.copy(e.ray).applyMatrix4(Tf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),h=Math.min(c.count,a.start+a.count);for(let _=f,x=h;_<x;_++){const g=c.getX(_);Ao.fromBufferAttribute(d,g),Af(Ao,g,l,r,e,t,this)}}else{const f=Math.max(0,a.start),h=Math.min(d.count,a.start+a.count);for(let _=f,x=h;_<x;_++)Ao.fromBufferAttribute(d,_),Af(Ao,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Af(n,e,t,i,r,s,a){const o=wu.distanceSqToPoint(n);if(o<t){const l=new N;wu.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class w_ extends bn{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Up extends bn{constructor(e,t,i=Xr,r,s,a,o=Hn,l=Hn,c,u=Fa,d=1){if(u!==Fa&&u!==Oa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ed(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Np extends bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class sd extends Kt{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new N,u=new ke;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){const h=i+d/t*r;c.x=e*Math.cos(h),c.y=e*Math.sin(h),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new nt(a,3)),this.setAttribute("normal",new nt(o,3)),this.setAttribute("uv",new nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sd(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Xt extends Kt{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],f=[],h=[];let _=0;const x=[],g=i/2;let p=0;T(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new nt(d,3)),this.setAttribute("normal",new nt(f,3)),this.setAttribute("uv",new nt(h,2));function T(){const y=new N,C=new N;let A=0;const D=(t-e)/i;for(let L=0;L<=s;L++){const b=[],w=L/s,I=w*(t-e)+e;for(let k=0;k<=r;k++){const H=k/r,X=H*l+o,Y=Math.sin(X),q=Math.cos(X);C.x=I*Y,C.y=-w*i+g,C.z=I*q,d.push(C.x,C.y,C.z),y.set(Y,D,q).normalize(),f.push(y.x,y.y,y.z),h.push(H,1-w),b.push(_++)}x.push(b)}for(let L=0;L<r;L++)for(let b=0;b<s;b++){const w=x[b][L],I=x[b+1][L],k=x[b+1][L+1],H=x[b][L+1];(e>0||b!==0)&&(u.push(w,I,H),A+=3),(t>0||b!==s-1)&&(u.push(I,k,H),A+=3)}c.addGroup(p,A,0),p+=A}function E(y){const C=_,A=new ke,D=new N;let L=0;const b=y===!0?e:t,w=y===!0?1:-1;for(let k=1;k<=r;k++)d.push(0,g*w,0),f.push(0,w,0),h.push(.5,.5),_++;const I=_;for(let k=0;k<=r;k++){const X=k/r*l+o,Y=Math.cos(X),q=Math.sin(X);D.x=b*q,D.y=g*w,D.z=b*Y,d.push(D.x,D.y,D.z),f.push(0,w,0),A.x=Y*.5+.5,A.y=q*.5*w+.5,h.push(A.x,A.y),_++}for(let k=0;k<r;k++){const H=C+k,X=I+k;y===!0?u.push(X,X+1,H):u.push(X+1,X,H),L+=3}c.addGroup(p,L,y===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class an extends Xt{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new an(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ia extends Kt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];o(r),c(i),u(),this.setAttribute("position",new nt(s,3)),this.setAttribute("normal",new nt(s.slice(),3)),this.setAttribute("uv",new nt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(T){const E=new N,y=new N,C=new N;for(let A=0;A<t.length;A+=3)h(t[A+0],E),h(t[A+1],y),h(t[A+2],C),l(E,y,C,T)}function l(T,E,y,C){const A=C+1,D=[];for(let L=0;L<=A;L++){D[L]=[];const b=T.clone().lerp(y,L/A),w=E.clone().lerp(y,L/A),I=A-L;for(let k=0;k<=I;k++)k===0&&L===A?D[L][k]=b:D[L][k]=b.clone().lerp(w,k/I)}for(let L=0;L<A;L++)for(let b=0;b<2*(A-L)-1;b++){const w=Math.floor(b/2);b%2===0?(f(D[L][w+1]),f(D[L+1][w]),f(D[L][w])):(f(D[L][w+1]),f(D[L+1][w+1]),f(D[L+1][w]))}}function c(T){const E=new N;for(let y=0;y<s.length;y+=3)E.x=s[y+0],E.y=s[y+1],E.z=s[y+2],E.normalize().multiplyScalar(T),s[y+0]=E.x,s[y+1]=E.y,s[y+2]=E.z}function u(){const T=new N;for(let E=0;E<s.length;E+=3){T.x=s[E+0],T.y=s[E+1],T.z=s[E+2];const y=g(T)/2/Math.PI+.5,C=p(T)/Math.PI+.5;a.push(y,1-C)}_(),d()}function d(){for(let T=0;T<a.length;T+=6){const E=a[T+0],y=a[T+2],C=a[T+4],A=Math.max(E,y,C),D=Math.min(E,y,C);A>.9&&D<.1&&(E<.2&&(a[T+0]+=1),y<.2&&(a[T+2]+=1),C<.2&&(a[T+4]+=1))}}function f(T){s.push(T.x,T.y,T.z)}function h(T,E){const y=T*3;E.x=e[y+0],E.y=e[y+1],E.z=e[y+2]}function _(){const T=new N,E=new N,y=new N,C=new N,A=new ke,D=new ke,L=new ke;for(let b=0,w=0;b<s.length;b+=9,w+=6){T.set(s[b+0],s[b+1],s[b+2]),E.set(s[b+3],s[b+4],s[b+5]),y.set(s[b+6],s[b+7],s[b+8]),A.set(a[w+0],a[w+1]),D.set(a[w+2],a[w+3]),L.set(a[w+4],a[w+5]),C.copy(T).add(E).add(y).divideScalar(3);const I=g(C);x(A,w+0,T,I),x(D,w+2,E,I),x(L,w+4,y,I)}}function x(T,E,y,C){C<0&&T.x===1&&(a[E]=T.x-1),y.x===0&&y.z===0&&(a[E]=C/2/Math.PI+.5)}function g(T){return Math.atan2(T.z,-T.x)}function p(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ia(e.vertices,e.indices,e.radius,e.details)}}class $r extends ia{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new $r(e.radius,e.detail)}}class At extends ia{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new At(e.radius,e.detail)}}class ad extends Kt{constructor(e=[new ke(0,-.5),new ke(.5,0),new ke(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=rt(r,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],u=1/t,d=new N,f=new ke,h=new N,_=new N,x=new N;let g=0,p=0;for(let T=0;T<=e.length-1;T++)switch(T){case 0:g=e[T+1].x-e[T].x,p=e[T+1].y-e[T].y,h.x=p*1,h.y=-g,h.z=p*0,x.copy(h),h.normalize(),l.push(h.x,h.y,h.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[T+1].x-e[T].x,p=e[T+1].y-e[T].y,h.x=p*1,h.y=-g,h.z=p*0,_.copy(h),h.x+=x.x,h.y+=x.y,h.z+=x.z,h.normalize(),l.push(h.x,h.y,h.z),x.copy(_)}for(let T=0;T<=t;T++){const E=i+T*u*r,y=Math.sin(E),C=Math.cos(E);for(let A=0;A<=e.length-1;A++){d.x=e[A].x*y,d.y=e[A].y,d.z=e[A].x*C,a.push(d.x,d.y,d.z),f.x=T/t,f.y=A/(e.length-1),o.push(f.x,f.y);const D=l[3*A+0]*y,L=l[3*A+1],b=l[3*A+0]*C;c.push(D,L,b)}}for(let T=0;T<t;T++)for(let E=0;E<e.length-1;E++){const y=E+T*e.length,C=y,A=y+e.length,D=y+e.length+1,L=y+1;s.push(C,A,L),s.push(D,L,A)}this.setIndex(s),this.setAttribute("position",new nt(a,3)),this.setAttribute("uv",new nt(o,2)),this.setAttribute("normal",new nt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ad(e.points,e.segments,e.phiStart,e.phiLength)}}class tn extends ia{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new tn(e.radius,e.detail)}}class ra extends Kt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,f=t/l,h=[],_=[],x=[],g=[];for(let p=0;p<u;p++){const T=p*f-a;for(let E=0;E<c;E++){const y=E*d-s;_.push(y,-T,0),x.push(0,0,1),g.push(E/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<o;T++){const E=T+c*p,y=T+c*(p+1),C=T+1+c*(p+1),A=T+1+c*p;h.push(E,y,A),h.push(y,C,A)}this.setIndex(h),this.setAttribute("position",new nt(_,3)),this.setAttribute("normal",new nt(x,3)),this.setAttribute("uv",new nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.width,e.height,e.widthSegments,e.heightSegments)}}class pr extends Kt{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],u=[];let d=e;const f=(t-e)/r,h=new N,_=new ke;for(let x=0;x<=r;x++){for(let g=0;g<=i;g++){const p=s+g/i*a;h.x=d*Math.cos(p),h.y=d*Math.sin(p),l.push(h.x,h.y,h.z),c.push(0,0,1),_.x=(h.x/t+1)/2,_.y=(h.y/t+1)/2,u.push(_.x,_.y)}d+=f}for(let x=0;x<r;x++){const g=x*(i+1);for(let p=0;p<i;p++){const T=p+g,E=T,y=T+i+1,C=T+i+2,A=T+1;o.push(E,y,A),o.push(y,C,A)}}this.setIndex(o),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(c,3)),this.setAttribute("uv",new nt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class pt extends Kt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new N,f=new N,h=[],_=[],x=[],g=[];for(let p=0;p<=i;p++){const T=[],E=p/i;let y=0;p===0&&a===0?y=.5/t:p===i&&l===Math.PI&&(y=-.5/t);for(let C=0;C<=t;C++){const A=C/t;d.x=-e*Math.cos(r+A*s)*Math.sin(a+E*o),d.y=e*Math.cos(a+E*o),d.z=e*Math.sin(r+A*s)*Math.sin(a+E*o),_.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),g.push(A+y,1-E),T.push(c++)}u.push(T)}for(let p=0;p<i;p++)for(let T=0;T<t;T++){const E=u[p][T+1],y=u[p][T],C=u[p+1][T],A=u[p+1][T+1];(p!==0||a>0)&&h.push(E,y,A),(p!==i-1||l<Math.PI)&&h.push(y,C,A)}this.setIndex(h),this.setAttribute("position",new nt(_,3)),this.setAttribute("normal",new nt(x,3)),this.setAttribute("uv",new nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class od extends ia{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new od(e.radius,e.detail)}}class Vi extends Kt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],c=[],u=new N,d=new N,f=new N;for(let h=0;h<=i;h++)for(let _=0;_<=r;_++){const x=_/r*s,g=h/i*Math.PI*2;d.x=(e+t*Math.cos(g))*Math.cos(x),d.y=(e+t*Math.cos(g))*Math.sin(x),d.z=t*Math.sin(g),o.push(d.x,d.y,d.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(_/r),c.push(h/i)}for(let h=1;h<=i;h++)for(let _=1;_<=r;_++){const x=(r+1)*h+_-1,g=(r+1)*(h-1)+_-1,p=(r+1)*(h-1)+_,T=(r+1)*h+_;a.push(x,g,T),a.push(g,p,T)}this.setIndex(a),this.setAttribute("position",new nt(o,3)),this.setAttribute("normal",new nt(l,3)),this.setAttribute("uv",new nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class pn extends es{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yp,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class E_ extends es{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class T_ extends es{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Fp extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class A_ extends Fp{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const mc=new dt,Rf=new N,Cf=new N;class R_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.mapType=Mi,this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rd,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Rf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rf),Cf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cf),t.updateMatrixWorld(),mc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(mc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Op extends Cp{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class C_ extends R_{constructor(){super(new Op(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class P_ extends Fp{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new C_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class D_ extends Kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Pf=new dt;class L_{constructor(e,t,i=0,r=1/0){this.ray=new td(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new nd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Pf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pf),this}intersectObject(e,t=!0,i=[]){return Eu(e,this,i,t),i.sort(Df),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Eu(e[r],this,i,t);return i.sort(Df),i}}function Df(n,e){return n.distance-e.distance}function Eu(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)Eu(s[a],e,t,!0)}}function Lf(n,e,t,i){const r=I_(i);switch(t){case xp:return n*e;case ju:return n*e/r.components*r.byteLength;case Ku:return n*e/r.components*r.byteLength;case Mp:return n*e*2/r.components*r.byteLength;case Zu:return n*e*2/r.components*r.byteLength;case vp:return n*e*3/r.components*r.byteLength;case ai:return n*e*4/r.components*r.byteLength;case Ju:return n*e*4/r.components*r.byteLength;case Ho:case Vo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Wo:case Xo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Kc:case Jc:return Math.max(n,16)*Math.max(e,8)/4;case jc:case Zc:return Math.max(n,8)*Math.max(e,8)/2;case Qc:case eu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case tu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case iu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ru:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case su:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case au:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ou:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case lu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case cu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case uu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case du:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case fu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case hu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case pu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case mu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case gu:case _u:case xu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case vu:case Mu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case yu:case Su:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function I_(n){switch(n){case Mi:case pp:return{byteLength:1,components:1};case Ua:case mp:case ja:return{byteLength:2,components:1};case $u:case Yu:return{byteLength:2,components:4};case Xr:case qu:case gi:return{byteLength:4,components:1};case gp:case _p:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wu);function kp(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function U_(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((h,_)=>h.start-_.start);let f=0;for(let h=1;h<d.length;h++){const _=d[f],x=d[h];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++f,d[f]=x)}d.length=f+1;for(let h=0,_=d.length;h<_;h++){const x=d[h];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var N_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,F_=`#ifdef USE_ALPHAHASH
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
#endif`,O_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,k_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,z_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,G_=`#ifdef USE_AOMAP
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
#endif`,H_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,V_=`#ifdef USE_BATCHING
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
#endif`,W_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,X_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,q_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Y_=`#ifdef USE_IRIDESCENCE
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
#endif`,j_=`#ifdef USE_BUMPMAP
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
#endif`,K_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Z_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,J_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Q_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ex=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ix=`#if defined( USE_COLOR_ALPHA )
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
#endif`,rx=`#define PI 3.141592653589793
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
} // validated`,sx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ax=`vec3 transformedNormal = objectNormal;
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
#endif`,ox=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ux=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dx="gl_FragColor = linearToOutputTexel( gl_FragColor );",fx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hx=`#ifdef USE_ENVMAP
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
#endif`,px=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mx=`#ifdef USE_ENVMAP
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
#endif`,gx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_x=`#ifdef USE_ENVMAP
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
#endif`,xx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sx=`#ifdef USE_GRADIENTMAP
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
}`,bx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tx=`uniform bool receiveShadow;
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
#endif`,Ax=`#ifdef USE_ENVMAP
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
#endif`,Rx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Px=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lx=`PhysicalMaterial material;
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
#endif`,Ix=`struct PhysicalMaterial {
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
}`,Ux=`
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
#endif`,Nx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ox=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wx=`#if defined( USE_POINTS_UV )
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
#endif`,Xx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$x=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kx=`#ifdef USE_MORPHTARGETS
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
#endif`,Zx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ev=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iv=`#ifdef USE_NORMALMAP
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
#endif`,rv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,av=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ov=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_v=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vv=`float getShadowMask() {
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
}`,Mv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yv=`#ifdef USE_SKINNING
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
#endif`,Sv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bv=`#ifdef USE_SKINNING
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
#endif`,wv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ev=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Av=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rv=`#ifdef USE_TRANSMISSION
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
#endif`,Cv=`#ifdef USE_TRANSMISSION
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
#endif`,Pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Iv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Uv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nv=`uniform sampler2D t2D;
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
}`,Fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ov=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zv=`#include <common>
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
}`,Gv=`#if DEPTH_PACKING == 3200
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
}`,Hv=`#define DISTANCE
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
}`,Vv=`#define DISTANCE
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
}`,Wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qv=`uniform float scale;
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
}`,$v=`uniform vec3 diffuse;
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
}`,Yv=`#include <common>
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
}`,jv=`uniform vec3 diffuse;
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
}`,Kv=`#define LAMBERT
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
}`,Zv=`#define LAMBERT
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
}`,Jv=`#define MATCAP
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
}`,Qv=`#define MATCAP
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
}`,eM=`#define NORMAL
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
}`,tM=`#define NORMAL
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
}`,nM=`#define PHONG
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
}`,iM=`#define PHONG
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
}`,rM=`#define STANDARD
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
}`,sM=`#define STANDARD
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
}`,aM=`#define TOON
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
}`,oM=`#define TOON
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
}`,lM=`uniform float size;
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
}`,cM=`uniform vec3 diffuse;
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
}`,uM=`#include <common>
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
}`,dM=`uniform vec3 color;
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
}`,fM=`uniform float rotation;
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
}`,hM=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:N_,alphahash_pars_fragment:F_,alphamap_fragment:O_,alphamap_pars_fragment:k_,alphatest_fragment:B_,alphatest_pars_fragment:z_,aomap_fragment:G_,aomap_pars_fragment:H_,batching_pars_vertex:V_,batching_vertex:W_,begin_vertex:X_,beginnormal_vertex:q_,bsdfs:$_,iridescence_fragment:Y_,bumpmap_pars_fragment:j_,clipping_planes_fragment:K_,clipping_planes_pars_fragment:Z_,clipping_planes_pars_vertex:J_,clipping_planes_vertex:Q_,color_fragment:ex,color_pars_fragment:tx,color_pars_vertex:nx,color_vertex:ix,common:rx,cube_uv_reflection_fragment:sx,defaultnormal_vertex:ax,displacementmap_pars_vertex:ox,displacementmap_vertex:lx,emissivemap_fragment:cx,emissivemap_pars_fragment:ux,colorspace_fragment:dx,colorspace_pars_fragment:fx,envmap_fragment:hx,envmap_common_pars_fragment:px,envmap_pars_fragment:mx,envmap_pars_vertex:gx,envmap_physical_pars_fragment:Ax,envmap_vertex:_x,fog_vertex:xx,fog_pars_vertex:vx,fog_fragment:Mx,fog_pars_fragment:yx,gradientmap_pars_fragment:Sx,lightmap_pars_fragment:bx,lights_lambert_fragment:wx,lights_lambert_pars_fragment:Ex,lights_pars_begin:Tx,lights_toon_fragment:Rx,lights_toon_pars_fragment:Cx,lights_phong_fragment:Px,lights_phong_pars_fragment:Dx,lights_physical_fragment:Lx,lights_physical_pars_fragment:Ix,lights_fragment_begin:Ux,lights_fragment_maps:Nx,lights_fragment_end:Fx,logdepthbuf_fragment:Ox,logdepthbuf_pars_fragment:kx,logdepthbuf_pars_vertex:Bx,logdepthbuf_vertex:zx,map_fragment:Gx,map_pars_fragment:Hx,map_particle_fragment:Vx,map_particle_pars_fragment:Wx,metalnessmap_fragment:Xx,metalnessmap_pars_fragment:qx,morphinstance_vertex:$x,morphcolor_vertex:Yx,morphnormal_vertex:jx,morphtarget_pars_vertex:Kx,morphtarget_vertex:Zx,normal_fragment_begin:Jx,normal_fragment_maps:Qx,normal_pars_fragment:ev,normal_pars_vertex:tv,normal_vertex:nv,normalmap_pars_fragment:iv,clearcoat_normal_fragment_begin:rv,clearcoat_normal_fragment_maps:sv,clearcoat_pars_fragment:av,iridescence_pars_fragment:ov,opaque_fragment:lv,packing:cv,premultiplied_alpha_fragment:uv,project_vertex:dv,dithering_fragment:fv,dithering_pars_fragment:hv,roughnessmap_fragment:pv,roughnessmap_pars_fragment:mv,shadowmap_pars_fragment:gv,shadowmap_pars_vertex:_v,shadowmap_vertex:xv,shadowmask_pars_fragment:vv,skinbase_vertex:Mv,skinning_pars_vertex:yv,skinning_vertex:Sv,skinnormal_vertex:bv,specularmap_fragment:wv,specularmap_pars_fragment:Ev,tonemapping_fragment:Tv,tonemapping_pars_fragment:Av,transmission_fragment:Rv,transmission_pars_fragment:Cv,uv_pars_fragment:Pv,uv_pars_vertex:Dv,uv_vertex:Lv,worldpos_vertex:Iv,background_vert:Uv,background_frag:Nv,backgroundCube_vert:Fv,backgroundCube_frag:Ov,cube_vert:kv,cube_frag:Bv,depth_vert:zv,depth_frag:Gv,distanceRGBA_vert:Hv,distanceRGBA_frag:Vv,equirect_vert:Wv,equirect_frag:Xv,linedashed_vert:qv,linedashed_frag:$v,meshbasic_vert:Yv,meshbasic_frag:jv,meshlambert_vert:Kv,meshlambert_frag:Zv,meshmatcap_vert:Jv,meshmatcap_frag:Qv,meshnormal_vert:eM,meshnormal_frag:tM,meshphong_vert:nM,meshphong_frag:iM,meshphysical_vert:rM,meshphysical_frag:sM,meshtoon_vert:aM,meshtoon_frag:oM,points_vert:lM,points_frag:cM,shadow_vert:uM,shadow_frag:dM,sprite_vert:fM,sprite_frag:hM},le={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},hi={basic:{uniforms:Tn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Tn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Se(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Tn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Tn([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Tn([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Se(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Tn([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Tn([le.points,le.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Tn([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Tn([le.common,le.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Tn([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Tn([le.sprite,le.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:Tn([le.common,le.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:Tn([le.lights,le.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};hi.physical={uniforms:Tn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Ro={r:0,b:0,g:0},Tr=new yi,pM=new dt;function mM(n,e,t,i,r,s,a){const o=new Se(0);let l=s===!0?0:1,c,u,d=null,f=0,h=null;function _(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?t:e).get(y)),y}function x(E){let y=!1;const C=_(E);C===null?p(o,l):C&&C.isColor&&(p(C,1),y=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(E,y){const C=_(y);C&&(C.isCubeTexture||C.mapping===gl)?(u===void 0&&(u=new K(new fr(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:$s(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,D,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Tr.copy(y.backgroundRotation),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(pM.makeRotationFromEuler(Tr)),u.material.toneMapped=ht.getTransfer(C.colorSpace)!==bt,(d!==C||f!==C.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=C,f=C.version,h=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new K(new ra(2,2),new Si({name:"BackgroundMaterial",uniforms:$s(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ht.getTransfer(C.colorSpace)!==bt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||f!==C.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=C,f=C.version,h=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,y){E.getRGB(Ro,Rp(n)),i.buffers.color.setClear(Ro.r,Ro.g,Ro.b,y,a)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,y=1){o.set(E),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(o,l)},render:x,addToRenderList:g,dispose:T}}function gM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(w,I,k,H,X){let Y=!1;const q=d(H,k,I);s!==q&&(s=q,c(s.object)),Y=h(w,H,k,X),Y&&_(w,H,k,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,y(w,I,k,H),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(w){return n.bindVertexArray(w)}function u(w){return n.deleteVertexArray(w)}function d(w,I,k){const H=k.wireframe===!0;let X=i[w.id];X===void 0&&(X={},i[w.id]=X);let Y=X[I.id];Y===void 0&&(Y={},X[I.id]=Y);let q=Y[H];return q===void 0&&(q=f(l()),Y[H]=q),q}function f(w){const I=[],k=[],H=[];for(let X=0;X<t;X++)I[X]=0,k[X]=0,H[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:k,attributeDivisors:H,object:w,attributes:{},index:null}}function h(w,I,k,H){const X=s.attributes,Y=I.attributes;let q=0;const se=k.getAttributes();for(const V in se)if(se[V].location>=0){const _e=X[V];let Ue=Y[V];if(Ue===void 0&&(V==="instanceMatrix"&&w.instanceMatrix&&(Ue=w.instanceMatrix),V==="instanceColor"&&w.instanceColor&&(Ue=w.instanceColor)),_e===void 0||_e.attribute!==Ue||Ue&&_e.data!==Ue.data)return!0;q++}return s.attributesNum!==q||s.index!==H}function _(w,I,k,H){const X={},Y=I.attributes;let q=0;const se=k.getAttributes();for(const V in se)if(se[V].location>=0){let _e=Y[V];_e===void 0&&(V==="instanceMatrix"&&w.instanceMatrix&&(_e=w.instanceMatrix),V==="instanceColor"&&w.instanceColor&&(_e=w.instanceColor));const Ue={};Ue.attribute=_e,_e&&_e.data&&(Ue.data=_e.data),X[V]=Ue,q++}s.attributes=X,s.attributesNum=q,s.index=H}function x(){const w=s.newAttributes;for(let I=0,k=w.length;I<k;I++)w[I]=0}function g(w){p(w,0)}function p(w,I){const k=s.newAttributes,H=s.enabledAttributes,X=s.attributeDivisors;k[w]=1,H[w]===0&&(n.enableVertexAttribArray(w),H[w]=1),X[w]!==I&&(n.vertexAttribDivisor(w,I),X[w]=I)}function T(){const w=s.newAttributes,I=s.enabledAttributes;for(let k=0,H=I.length;k<H;k++)I[k]!==w[k]&&(n.disableVertexAttribArray(k),I[k]=0)}function E(w,I,k,H,X,Y,q){q===!0?n.vertexAttribIPointer(w,I,k,X,Y):n.vertexAttribPointer(w,I,k,H,X,Y)}function y(w,I,k,H){x();const X=H.attributes,Y=k.getAttributes(),q=I.defaultAttributeValues;for(const se in Y){const V=Y[se];if(V.location>=0){let ue=X[se];if(ue===void 0&&(se==="instanceMatrix"&&w.instanceMatrix&&(ue=w.instanceMatrix),se==="instanceColor"&&w.instanceColor&&(ue=w.instanceColor)),ue!==void 0){const _e=ue.normalized,Ue=ue.itemSize,it=e.get(ue);if(it===void 0)continue;const Et=it.buffer,Lt=it.type,mt=it.bytesPerElement,j=Lt===n.INT||Lt===n.UNSIGNED_INT||ue.gpuType===qu;if(ue.isInterleavedBufferAttribute){const Q=ue.data,Me=Q.stride,We=ue.offset;if(Q.isInstancedInterleavedBuffer){for(let Ie=0;Ie<V.locationSize;Ie++)p(V.location+Ie,Q.meshPerAttribute);w.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ie=0;Ie<V.locationSize;Ie++)g(V.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,Et);for(let Ie=0;Ie<V.locationSize;Ie++)E(V.location+Ie,Ue/V.locationSize,Lt,_e,Me*mt,(We+Ue/V.locationSize*Ie)*mt,j)}else{if(ue.isInstancedBufferAttribute){for(let Q=0;Q<V.locationSize;Q++)p(V.location+Q,ue.meshPerAttribute);w.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Q=0;Q<V.locationSize;Q++)g(V.location+Q);n.bindBuffer(n.ARRAY_BUFFER,Et);for(let Q=0;Q<V.locationSize;Q++)E(V.location+Q,Ue/V.locationSize,Lt,_e,Ue*mt,Ue/V.locationSize*Q*mt,j)}}else if(q!==void 0){const _e=q[se];if(_e!==void 0)switch(_e.length){case 2:n.vertexAttrib2fv(V.location,_e);break;case 3:n.vertexAttrib3fv(V.location,_e);break;case 4:n.vertexAttrib4fv(V.location,_e);break;default:n.vertexAttrib1fv(V.location,_e)}}}}T()}function C(){L();for(const w in i){const I=i[w];for(const k in I){const H=I[k];for(const X in H)u(H[X].object),delete H[X];delete I[k]}delete i[w]}}function A(w){if(i[w.id]===void 0)return;const I=i[w.id];for(const k in I){const H=I[k];for(const X in H)u(H[X].object),delete H[X];delete I[k]}delete i[w.id]}function D(w){for(const I in i){const k=i[I];if(k[w.id]===void 0)continue;const H=k[w.id];for(const X in H)u(H[X].object),delete H[X];delete k[w.id]}}function L(){b(),a=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:g,disableUnusedAttributes:T}}function _M(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let _=0;_<d;_++)h+=u[_];t.update(h,i,1)}function l(c,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let _=0;_<c.length;_++)a(c[_],u[_],f[_]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let _=0;for(let x=0;x<d;x++)_+=u[x]*f[x];t.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function xM(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(D){return!(D!==ai&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){const L=D===ja&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Mi&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==gi&&!L)}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:C,maxSamples:A}}function vM(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Pr,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const _=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,p=n.get(d);if(!r||_===null||_.length===0||s&&!g)s?u(null):c();else{const T=s?0:i,E=T*4;let y=p.clippingState||null;l.value=y,y=u(_,f,E,h);for(let C=0;C!==E;++C)y[C]=t[C];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,_){const x=d!==null?d.length:0;let g=null;if(x!==0){if(g=l.value,_!==!0||g===null){const p=h+x*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(g===null||g.length<p)&&(g=new Float32Array(p));for(let E=0,y=h;E!==x;++E,y+=4)a.copy(d[E]).applyMatrix4(T,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function MM(n){let e=new WeakMap;function t(a,o){return o===Xc?a.mapping=Ws:o===qc&&(a.mapping=Xs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Xc||o===qc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new h_(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Ds=4,If=[.125,.215,.35,.446,.526,.582],Ir=20,gc=new Op,Uf=new Se;let _c=null,xc=0,vc=0,Mc=!1;const Dr=(1+Math.sqrt(5))/2,Es=1/Dr,Nf=[new N(-Dr,Es,0),new N(Dr,Es,0),new N(-Es,0,Dr),new N(Es,0,Dr),new N(0,Dr,-Es),new N(0,Dr,Es),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],yM=new N;class Ff{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=yM}=s;_c=this._renderer.getRenderTarget(),xc=this._renderer.getActiveCubeFace(),vc=this._renderer.getActiveMipmapLevel(),Mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_c,xc,vc),this._renderer.xr.enabled=Mc,e.scissorTest=!1,Co(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ws||e.mapping===Xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_c=this._renderer.getRenderTarget(),xc=this._renderer.getActiveCubeFace(),vc=this._renderer.getActiveMipmapLevel(),Mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:mi,minFilter:mi,generateMipmaps:!1,type:ja,format:ai,colorSpace:qs,depthBuffer:!1},r=Of(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Of(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=SM(s)),this._blurMaterial=bM(s,e,t)}return r}_compileMaterial(e){const t=new K(this._lodPlanes[0],e);this._renderer.compile(t,gc)}_sceneToCubeUV(e,t,i,r,s){const l=new Kn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Uf),d.toneMapping=or,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const x=new xt({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),g=new K(new fr,x);let p=!1;const T=e.background;T?T.isColor&&(x.color.copy(T),e.background=null,p=!0):(x.color.copy(Uf),p=!0);for(let E=0;E<6;E++){const y=E%3;y===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[E],s.y,s.z)):y===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[E]));const C=this._cubeSize;Co(r,y*C,E>2?C:0,C,C),d.setRenderTarget(r),p&&d.render(g,l),d.render(e,l)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=T}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ws||e.mapping===Xs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kf());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new K(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Co(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,gc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Nf[(r-s-1)%Nf.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new K(this._lodPlanes[r],c),f=c.uniforms,h=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Ir-1),x=s/_,g=isFinite(s)?1+Math.floor(u*x):Ir;g>Ir&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ir}`);const p=[];let T=0;for(let D=0;D<Ir;++D){const L=D/x,b=Math.exp(-L*L/2);p.push(b),D===0?T+=b:D<g&&(T+=2*b)}for(let D=0;D<p.length;D++)p[D]=p[D]/T;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:E}=this;f.dTheta.value=_,f.mipInt.value=E-i;const y=this._sizeLods[r],C=3*y*(r>E-Ds?r-E+Ds:0),A=4*(this._cubeSize-y);Co(t,C,A,3*y,2*y),l.setRenderTarget(t),l.render(d,gc)}}function SM(n){const e=[],t=[],i=[];let r=n;const s=n-Ds+1+If.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Ds?l=If[a-n+Ds-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,_=6,x=3,g=2,p=1,T=new Float32Array(x*_*h),E=new Float32Array(g*_*h),y=new Float32Array(p*_*h);for(let A=0;A<h;A++){const D=A%3*2/3-1,L=A>2?0:-1,b=[D,L,0,D+2/3,L,0,D+2/3,L+1,0,D,L,0,D+2/3,L+1,0,D,L+1,0];T.set(b,x*_*A),E.set(f,g*_*A);const w=[A,A,A,A,A,A];y.set(w,p*_*A)}const C=new Kt;C.setAttribute("position",new Pn(T,x)),C.setAttribute("uv",new Pn(E,g)),C.setAttribute("faceIndex",new Pn(y,p)),e.push(C),r>Ds&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Of(n,e,t){const i=new qr(n,e,t);return i.texture.mapping=gl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Co(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function bM(n,e,t){const i=new Float32Array(Ir),r=new N(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:Ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ld(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function kf(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ld(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Bf(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function ld(){return`

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
	`}function wM(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Xc||l===qc,u=l===Ws||l===Xs;if(c||u){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Ff(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const h=o.image;return c&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new Ff(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function EM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ba("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function TM(n,e,t,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete r[f.id];const h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],n.ARRAY_BUFFER)}function c(d){const f=[],h=d.index,_=d.attributes.position;let x=0;if(h!==null){const T=h.array;x=h.version;for(let E=0,y=T.length;E<y;E+=3){const C=T[E+0],A=T[E+1],D=T[E+2];f.push(C,A,A,D,D,C)}}else if(_!==void 0){const T=_.array;x=_.version;for(let E=0,y=T.length/3-1;E<y;E+=3){const C=E+0,A=E+1,D=E+2;f.push(C,A,A,D,D,C)}}else return;const g=new(bp(f)?Ap:Tp)(f,1);g.version=x;const p=s.get(d);p&&e.remove(p),s.set(d,g)}function u(d){const f=s.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function AM(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,h){n.drawElements(i,h,s,f*a),t.update(h,i,1)}function c(f,h,_){_!==0&&(n.drawElementsInstanced(i,h,s,f*a,_),t.update(h,i,_))}function u(f,h,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,_);let g=0;for(let p=0;p<_;p++)g+=h[p];t.update(g,i,1)}function d(f,h,_,x){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/a,h[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(i,h,0,s,f,0,x,0,_);let p=0;for(let T=0;T<_;T++)p+=h[T]*x[T];t.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function RM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function CM(n,e,t){const i=new WeakMap,r=new kt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let b=function(){D.dispose(),i.delete(o),o.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();const h=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let E=0;h===!0&&(E=1),_===!0&&(E=2),x===!0&&(E=3);let y=o.attributes.position.count*E,C=1;y>e.maxTextureSize&&(C=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const A=new Float32Array(y*C*4*d),D=new wp(A,y,C,d);D.type=gi,D.needsUpdate=!0;const L=E*4;for(let w=0;w<d;w++){const I=g[w],k=p[w],H=T[w],X=y*C*4*w;for(let Y=0;Y<I.count;Y++){const q=Y*L;h===!0&&(r.fromBufferAttribute(I,Y),A[X+q+0]=r.x,A[X+q+1]=r.y,A[X+q+2]=r.z,A[X+q+3]=0),_===!0&&(r.fromBufferAttribute(k,Y),A[X+q+4]=r.x,A[X+q+5]=r.y,A[X+q+6]=r.z,A[X+q+7]=0),x===!0&&(r.fromBufferAttribute(H,Y),A[X+q+8]=r.x,A[X+q+9]=r.y,A[X+q+10]=r.z,A[X+q+11]=H.itemSize===4?r.w:1)}}f={count:d,texture:D,size:new ke(y,C)},i.set(o,f),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let h=0;for(let x=0;x<c.length;x++)h+=c[x];const _=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function PM(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Bp=new bn,zf=new Up(1,1),zp=new wp,Gp=new Kg,Hp=new Pp,Gf=[],Hf=[],Vf=new Float32Array(16),Wf=new Float32Array(9),Xf=new Float32Array(4);function sa(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Gf[r];if(s===void 0&&(s=new Float32Array(r),Gf[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function cn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function un(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function _l(n,e){let t=Hf[e];t===void 0&&(t=new Int32Array(e),Hf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function DM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function LM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;n.uniform2fv(this.addr,e),un(t,e)}}function IM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;n.uniform3fv(this.addr,e),un(t,e)}}function UM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;n.uniform4fv(this.addr,e),un(t,e)}}function NM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(cn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(cn(t,i))return;Xf.set(i),n.uniformMatrix2fv(this.addr,!1,Xf),un(t,i)}}function FM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(cn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(cn(t,i))return;Wf.set(i),n.uniformMatrix3fv(this.addr,!1,Wf),un(t,i)}}function OM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(cn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(cn(t,i))return;Vf.set(i),n.uniformMatrix4fv(this.addr,!1,Vf),un(t,i)}}function kM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function BM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;n.uniform2iv(this.addr,e),un(t,e)}}function zM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;n.uniform3iv(this.addr,e),un(t,e)}}function GM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;n.uniform4iv(this.addr,e),un(t,e)}}function HM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function VM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;n.uniform2uiv(this.addr,e),un(t,e)}}function WM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;n.uniform3uiv(this.addr,e),un(t,e)}}function XM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;n.uniform4uiv(this.addr,e),un(t,e)}}function qM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(zf.compareFunction=Sp,s=zf):s=Bp,t.setTexture2D(e||s,r)}function $M(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Gp,r)}function YM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Hp,r)}function jM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||zp,r)}function KM(n){switch(n){case 5126:return DM;case 35664:return LM;case 35665:return IM;case 35666:return UM;case 35674:return NM;case 35675:return FM;case 35676:return OM;case 5124:case 35670:return kM;case 35667:case 35671:return BM;case 35668:case 35672:return zM;case 35669:case 35673:return GM;case 5125:return HM;case 36294:return VM;case 36295:return WM;case 36296:return XM;case 35678:case 36198:case 36298:case 36306:case 35682:return qM;case 35679:case 36299:case 36307:return $M;case 35680:case 36300:case 36308:case 36293:return YM;case 36289:case 36303:case 36311:case 36292:return jM}}function ZM(n,e){n.uniform1fv(this.addr,e)}function JM(n,e){const t=sa(e,this.size,2);n.uniform2fv(this.addr,t)}function QM(n,e){const t=sa(e,this.size,3);n.uniform3fv(this.addr,t)}function ey(n,e){const t=sa(e,this.size,4);n.uniform4fv(this.addr,t)}function ty(n,e){const t=sa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ny(n,e){const t=sa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function iy(n,e){const t=sa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ry(n,e){n.uniform1iv(this.addr,e)}function sy(n,e){n.uniform2iv(this.addr,e)}function ay(n,e){n.uniform3iv(this.addr,e)}function oy(n,e){n.uniform4iv(this.addr,e)}function ly(n,e){n.uniform1uiv(this.addr,e)}function cy(n,e){n.uniform2uiv(this.addr,e)}function uy(n,e){n.uniform3uiv(this.addr,e)}function dy(n,e){n.uniform4uiv(this.addr,e)}function fy(n,e,t){const i=this.cache,r=e.length,s=_l(t,r);cn(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Bp,s[a])}function hy(n,e,t){const i=this.cache,r=e.length,s=_l(t,r);cn(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Gp,s[a])}function py(n,e,t){const i=this.cache,r=e.length,s=_l(t,r);cn(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Hp,s[a])}function my(n,e,t){const i=this.cache,r=e.length,s=_l(t,r);cn(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||zp,s[a])}function gy(n){switch(n){case 5126:return ZM;case 35664:return JM;case 35665:return QM;case 35666:return ey;case 35674:return ty;case 35675:return ny;case 35676:return iy;case 5124:case 35670:return ry;case 35667:case 35671:return sy;case 35668:case 35672:return ay;case 35669:case 35673:return oy;case 5125:return ly;case 36294:return cy;case 36295:return uy;case 36296:return dy;case 35678:case 36198:case 36298:case 36306:case 35682:return fy;case 35679:case 36299:case 36307:return hy;case 35680:case 36300:case 36308:case 36293:return py;case 36289:case 36303:case 36311:case 36292:return my}}class _y{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=KM(t.type)}}class xy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gy(t.type)}}class vy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const yc=/(\w+)(\])?(\[|\.)?/g;function qf(n,e){n.seq.push(e),n.map[e.id]=e}function My(n,e,t){const i=n.name,r=i.length;for(yc.lastIndex=0;;){const s=yc.exec(i),a=yc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){qf(t,c===void 0?new _y(o,n,e):new xy(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new vy(o),qf(t,d)),t=d}}}class qo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);My(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function $f(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const yy=37297;let Sy=0;function by(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Yf=new Ze;function wy(n){ht._getMatrix(Yf,ht.workingColorSpace,n);const e=`mat3( ${Yf.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(n)){case Qo:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function jf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+by(n.getShaderSource(e),o)}else return s}function Ey(n,e){const t=wy(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ty(n,e){let t;switch(e){case lg:t="Linear";break;case cg:t="Reinhard";break;case ug:t="Cineon";break;case dg:t="ACESFilmic";break;case hg:t="AgX";break;case pg:t="Neutral";break;case fg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Po=new N;function Ay(){ht.getLuminanceCoefficients(Po);const n=Po.x.toFixed(4),e=Po.y.toFixed(4),t=Po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ry(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ma).join(`
`)}function Cy(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Py(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ma(n){return n!==""}function Kf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Dy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tu(n){return n.replace(Dy,Iy)}const Ly=new Map;function Iy(n,e){let t=et[e];if(t===void 0){const i=Ly.get(e);if(i!==void 0)t=et[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Tu(t)}const Uy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jf(n){return n.replace(Uy,Ny)}function Ny(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Qf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Fy(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Xu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===G0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ni&&(e="SHADOWMAP_TYPE_VSM"),e}function Oy(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ws:case Xs:e="ENVMAP_TYPE_CUBE";break;case gl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ky(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Xs&&(e="ENVMAP_MODE_REFRACTION"),e}function By(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case fp:e="ENVMAP_BLENDING_MULTIPLY";break;case ag:e="ENVMAP_BLENDING_MIX";break;case og:e="ENVMAP_BLENDING_ADD";break}return e}function zy(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Gy(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Fy(t),c=Oy(t),u=ky(t),d=By(t),f=zy(t),h=Ry(t),_=Cy(s),x=r.createProgram();let g,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ma).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ma).join(`
`),p.length>0&&(p+=`
`)):(g=[Qf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ma).join(`
`),p=[Qf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==or?"#define TONE_MAPPING":"",t.toneMapping!==or?et.tonemapping_pars_fragment:"",t.toneMapping!==or?Ty("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,Ey("linearToOutputTexel",t.outputColorSpace),Ay(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ma).join(`
`)),a=Tu(a),a=Kf(a,t),a=Zf(a,t),o=Tu(o),o=Kf(o,t),o=Zf(o,t),a=Jf(a),o=Jf(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===tf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=T+g+a,y=T+p+o,C=$f(r,r.VERTEX_SHADER,E),A=$f(r,r.FRAGMENT_SHADER,y);r.attachShader(x,C),r.attachShader(x,A),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function D(I){if(n.debug.checkShaderErrors){const k=r.getProgramInfoLog(x)||"",H=r.getShaderInfoLog(C)||"",X=r.getShaderInfoLog(A)||"",Y=k.trim(),q=H.trim(),se=X.trim();let V=!0,ue=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,C,A);else{const _e=jf(r,C,"vertex"),Ue=jf(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+Y+`
`+_e+`
`+Ue)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(q===""||se==="")&&(ue=!1);ue&&(I.diagnostics={runnable:V,programLog:Y,vertexShader:{log:q,prefix:g},fragmentShader:{log:se,prefix:p}})}r.deleteShader(C),r.deleteShader(A),L=new qo(r,x),b=Py(r,x)}let L;this.getUniforms=function(){return L===void 0&&D(this),L};let b;this.getAttributes=function(){return b===void 0&&D(this),b};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(x,yy)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Sy++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=A,this}let Hy=0;class Vy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Wy(e),t.set(e,i)),i}}class Wy{constructor(e){this.id=Hy++,this.code=e,this.usedTimes=0}}function Xy(n,e,t,i,r,s,a){const o=new nd,l=new Vy,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let h=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,w,I,k,H){const X=k.fog,Y=H.geometry,q=b.isMeshStandardMaterial?k.environment:null,se=(b.isMeshStandardMaterial?t:e).get(b.envMap||q),V=se&&se.mapping===gl?se.image.height:null,ue=_[b.type];b.precision!==null&&(h=r.getMaxPrecision(b.precision),h!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",h,"instead."));const _e=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ue=_e!==void 0?_e.length:0;let it=0;Y.morphAttributes.position!==void 0&&(it=1),Y.morphAttributes.normal!==void 0&&(it=2),Y.morphAttributes.color!==void 0&&(it=3);let Et,Lt,mt,j;if(ue){const gt=hi[ue];Et=gt.vertexShader,Lt=gt.fragmentShader}else Et=b.vertexShader,Lt=b.fragmentShader,l.update(b),mt=l.getVertexShaderID(b),j=l.getFragmentShaderID(b);const Q=n.getRenderTarget(),Me=n.state.buffers.depth.getReversed(),We=H.isInstancedMesh===!0,Ie=H.isBatchedMesh===!0,ut=!!b.map,_n=!!b.matcap,P=!!se,It=!!b.aoMap,$e=!!b.lightMap,ze=!!b.bumpMap,we=!!b.normalMap,Ut=!!b.displacementMap,Ee=!!b.emissiveMap,Qe=!!b.metalnessMap,dn=!!b.roughnessMap,Ht=b.anisotropy>0,R=b.clearcoat>0,v=b.dispersion>0,B=b.iridescence>0,$=b.sheen>0,J=b.transmission>0,W=Ht&&!!b.anisotropyMap,Le=R&&!!b.clearcoatMap,ae=R&&!!b.clearcoatNormalMap,Te=R&&!!b.clearcoatRoughnessMap,Ce=B&&!!b.iridescenceMap,ie=B&&!!b.iridescenceThicknessMap,pe=$&&!!b.sheenColorMap,Be=$&&!!b.sheenRoughnessMap,Pe=!!b.specularMap,de=!!b.specularColorMap,Ke=!!b.specularIntensityMap,U=J&&!!b.transmissionMap,re=J&&!!b.thicknessMap,oe=!!b.gradientMap,ve=!!b.alphaMap,te=b.alphaTest>0,Z=!!b.alphaHash,be=!!b.extensions;let Xe=or;b.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Xe=n.toneMapping);const Tt={shaderID:ue,shaderType:b.type,shaderName:b.name,vertexShader:Et,fragmentShader:Lt,defines:b.defines,customVertexShaderID:mt,customFragmentShaderID:j,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:h,batching:Ie,batchingColor:Ie&&H._colorsTexture!==null,instancing:We,instancingColor:We&&H.instanceColor!==null,instancingMorph:We&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Q===null?n.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:qs,alphaToCoverage:!!b.alphaToCoverage,map:ut,matcap:_n,envMap:P,envMapMode:P&&se.mapping,envMapCubeUVHeight:V,aoMap:It,lightMap:$e,bumpMap:ze,normalMap:we,displacementMap:f&&Ut,emissiveMap:Ee,normalMapObjectSpace:we&&b.normalMapType===xg,normalMapTangentSpace:we&&b.normalMapType===yp,metalnessMap:Qe,roughnessMap:dn,anisotropy:Ht,anisotropyMap:W,clearcoat:R,clearcoatMap:Le,clearcoatNormalMap:ae,clearcoatRoughnessMap:Te,dispersion:v,iridescence:B,iridescenceMap:Ce,iridescenceThicknessMap:ie,sheen:$,sheenColorMap:pe,sheenRoughnessMap:Be,specularMap:Pe,specularColorMap:de,specularIntensityMap:Ke,transmission:J,transmissionMap:U,thicknessMap:re,gradientMap:oe,opaque:b.transparent===!1&&b.blending===Hr&&b.alphaToCoverage===!1,alphaMap:ve,alphaTest:te,alphaHash:Z,combine:b.combine,mapUv:ut&&x(b.map.channel),aoMapUv:It&&x(b.aoMap.channel),lightMapUv:$e&&x(b.lightMap.channel),bumpMapUv:ze&&x(b.bumpMap.channel),normalMapUv:we&&x(b.normalMap.channel),displacementMapUv:Ut&&x(b.displacementMap.channel),emissiveMapUv:Ee&&x(b.emissiveMap.channel),metalnessMapUv:Qe&&x(b.metalnessMap.channel),roughnessMapUv:dn&&x(b.roughnessMap.channel),anisotropyMapUv:W&&x(b.anisotropyMap.channel),clearcoatMapUv:Le&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:ae&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Be&&x(b.sheenRoughnessMap.channel),specularMapUv:Pe&&x(b.specularMap.channel),specularColorMapUv:de&&x(b.specularColorMap.channel),specularIntensityMapUv:Ke&&x(b.specularIntensityMap.channel),transmissionMapUv:U&&x(b.transmissionMap.channel),thicknessMapUv:re&&x(b.thicknessMap.channel),alphaMapUv:ve&&x(b.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(we||Ht),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Y.attributes.uv&&(ut||ve),fog:!!X,useFog:b.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Me,skinning:H.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Ue,morphTextureStride:it,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Xe,decodeVideoTexture:ut&&b.map.isVideoTexture===!0&&ht.getTransfer(b.map.colorSpace)===bt,decodeVideoTextureEmissive:Ee&&b.emissiveMap.isVideoTexture===!0&&ht.getTransfer(b.emissiveMap.colorSpace)===bt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===sn,flipSided:b.side===Cn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:be&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&b.extensions.multiDraw===!0||Ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Tt.vertexUv1s=c.has(1),Tt.vertexUv2s=c.has(2),Tt.vertexUv3s=c.has(3),c.clear(),Tt}function p(b){const w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)w.push(I),w.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(T(w,b),E(w,b),w.push(n.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function T(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function E(b,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),w.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),b.push(o.mask)}function y(b){const w=_[b.type];let I;if(w){const k=hi[w];I=c_.clone(k.uniforms)}else I=b.uniforms;return I}function C(b,w){let I;for(let k=0,H=u.length;k<H;k++){const X=u[k];if(X.cacheKey===w){I=X,++I.usedTimes;break}}return I===void 0&&(I=new Gy(n,w,b,s),u.push(I)),I}function A(b){if(--b.usedTimes===0){const w=u.indexOf(b);u[w]=u[u.length-1],u.pop(),b.destroy()}}function D(b){l.remove(b)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:C,releaseProgram:A,releaseShaderCache:D,programs:u,dispose:L}}function qy(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function $y(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function eh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function th(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,f,h,_,x,g){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:_,renderOrder:d.renderOrder,z:x,group:g},n[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=_,p.renderOrder=d.renderOrder,p.z=x,p.group=g),e++,p}function o(d,f,h,_,x,g){const p=a(d,f,h,_,x,g);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):t.push(p)}function l(d,f,h,_,x,g){const p=a(d,f,h,_,x,g);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function c(d,f){t.length>1&&t.sort(d||$y),i.length>1&&i.sort(f||eh),r.length>1&&r.sort(f||eh)}function u(){for(let d=e,f=n.length;d<f;d++){const h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Yy(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new th,n.set(i,[a])):r>=s.length?(a=new th,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function jy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Se};break;case"SpotLight":t={position:new N,direction:new N,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function Ky(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Zy=0;function Jy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Qy(n){const e=new jy,t=Ky(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const r=new N,s=new dt,a=new dt;function o(c){let u=0,d=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let h=0,_=0,x=0,g=0,p=0,T=0,E=0,y=0,C=0,A=0,D=0;c.sort(Jy);for(let b=0,w=c.length;b<w;b++){const I=c[b],k=I.color,H=I.intensity,X=I.distance,Y=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=k.r*H,d+=k.g*H,f+=k.b*H;else if(I.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(I.sh.coefficients[q],H);D++}else if(I.isDirectionalLight){const q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const se=I.shadow,V=t.get(I);V.shadowIntensity=se.intensity,V.shadowBias=se.bias,V.shadowNormalBias=se.normalBias,V.shadowRadius=se.radius,V.shadowMapSize=se.mapSize,i.directionalShadow[h]=V,i.directionalShadowMap[h]=Y,i.directionalShadowMatrix[h]=I.shadow.matrix,T++}i.directional[h]=q,h++}else if(I.isSpotLight){const q=e.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(k).multiplyScalar(H),q.distance=X,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,i.spot[x]=q;const se=I.shadow;if(I.map&&(i.spotLightMap[C]=I.map,C++,se.updateMatrices(I),I.castShadow&&A++),i.spotLightMatrix[x]=se.matrix,I.castShadow){const V=t.get(I);V.shadowIntensity=se.intensity,V.shadowBias=se.bias,V.shadowNormalBias=se.normalBias,V.shadowRadius=se.radius,V.shadowMapSize=se.mapSize,i.spotShadow[x]=V,i.spotShadowMap[x]=Y,y++}x++}else if(I.isRectAreaLight){const q=e.get(I);q.color.copy(k).multiplyScalar(H),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),i.rectArea[g]=q,g++}else if(I.isPointLight){const q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){const se=I.shadow,V=t.get(I);V.shadowIntensity=se.intensity,V.shadowBias=se.bias,V.shadowNormalBias=se.normalBias,V.shadowRadius=se.radius,V.shadowMapSize=se.mapSize,V.shadowCameraNear=se.camera.near,V.shadowCameraFar=se.camera.far,i.pointShadow[_]=V,i.pointShadowMap[_]=Y,i.pointShadowMatrix[_]=I.shadow.matrix,E++}i.point[_]=q,_++}else if(I.isHemisphereLight){const q=e.get(I);q.skyColor.copy(I.color).multiplyScalar(H),q.groundColor.copy(I.groundColor).multiplyScalar(H),i.hemi[p]=q,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const L=i.hash;(L.directionalLength!==h||L.pointLength!==_||L.spotLength!==x||L.rectAreaLength!==g||L.hemiLength!==p||L.numDirectionalShadows!==T||L.numPointShadows!==E||L.numSpotShadows!==y||L.numSpotMaps!==C||L.numLightProbes!==D)&&(i.directional.length=h,i.spot.length=x,i.rectArea.length=g,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=y+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=D,L.directionalLength=h,L.pointLength=_,L.spotLength=x,L.rectAreaLength=g,L.hemiLength=p,L.numDirectionalShadows=T,L.numPointShadows=E,L.numSpotShadows=y,L.numSpotMaps=C,L.numLightProbes=D,i.version=Zy++)}function l(c,u){let d=0,f=0,h=0,_=0,x=0;const g=u.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const E=c[p];if(E.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),d++}else if(E.isSpotLight){const y=i.spot[h];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),h++}else if(E.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),a.identity(),s.copy(E.matrixWorld),s.premultiply(g),a.extractRotation(s),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),f++}else if(E.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:i}}function nh(n){const e=new Qy(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function e1(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new nh(n),e.set(r,[o])):s>=a.length?(o=new nh(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const t1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n1=`uniform sampler2D shadow_pass;
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
}`;function i1(n,e,t){let i=new rd;const r=new ke,s=new ke,a=new kt,o=new E_({depthPacking:_g}),l=new T_,c={},u=t.maxTextureSize,d={[ur]:Cn,[Cn]:ur,[sn]:sn},f=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:t1,fragmentShader:n1}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const _=new Kt;_.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new K(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xu;let p=this.type;this.render=function(A,D,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const b=n.getRenderTarget(),w=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),k=n.state;k.setBlending(ar),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const H=p!==Ni&&this.type===Ni,X=p===Ni&&this.type!==Ni;for(let Y=0,q=A.length;Y<q;Y++){const se=A[Y],V=se.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const ue=V.getFrameExtents();if(r.multiply(ue),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ue.x),r.x=s.x*ue.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ue.y),r.y=s.y*ue.y,V.mapSize.y=s.y)),V.map===null||H===!0||X===!0){const Ue=this.type!==Ni?{minFilter:Hn,magFilter:Hn}:{};V.map!==null&&V.map.dispose(),V.map=new qr(r.x,r.y,Ue),V.map.texture.name=se.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const _e=V.getViewportCount();for(let Ue=0;Ue<_e;Ue++){const it=V.getViewport(Ue);a.set(s.x*it.x,s.y*it.y,s.x*it.z,s.y*it.w),k.viewport(a),V.updateMatrices(se,Ue),i=V.getFrustum(),y(D,L,V.camera,se,this.type)}V.isPointLightShadow!==!0&&this.type===Ni&&T(V,L),V.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(b,w,I)};function T(A,D){const L=e.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new qr(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(D,null,L,f,x,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(D,null,L,h,x,null)}function E(A,D,L,b){let w=null;const I=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)w=I;else if(w=L.isPointLight===!0?l:o,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const k=w.uuid,H=D.uuid;let X=c[k];X===void 0&&(X={},c[k]=X);let Y=X[H];Y===void 0&&(Y=w.clone(),X[H]=Y,D.addEventListener("dispose",C)),w=Y}if(w.visible=D.visible,w.wireframe=D.wireframe,b===Ni?w.side=D.shadowSide!==null?D.shadowSide:D.side:w.side=D.shadowSide!==null?D.shadowSide:d[D.side],w.alphaMap=D.alphaMap,w.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,w.map=D.map,w.clipShadows=D.clipShadows,w.clippingPlanes=D.clippingPlanes,w.clipIntersection=D.clipIntersection,w.displacementMap=D.displacementMap,w.displacementScale=D.displacementScale,w.displacementBias=D.displacementBias,w.wireframeLinewidth=D.wireframeLinewidth,w.linewidth=D.linewidth,L.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const k=n.properties.get(w);k.light=L}return w}function y(A,D,L,b,w){if(A.visible===!1)return;if(A.layers.test(D.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===Ni)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const H=e.update(A),X=A.material;if(Array.isArray(X)){const Y=H.groups;for(let q=0,se=Y.length;q<se;q++){const V=Y[q],ue=X[V.materialIndex];if(ue&&ue.visible){const _e=E(A,ue,b,w);A.onBeforeShadow(n,A,D,L,H,_e,V),n.renderBufferDirect(L,null,H,_e,A,V),A.onAfterShadow(n,A,D,L,H,_e,V)}}}else if(X.visible){const Y=E(A,X,b,w);A.onBeforeShadow(n,A,D,L,H,Y,null),n.renderBufferDirect(L,null,H,Y,A,null),A.onAfterShadow(n,A,D,L,H,Y,null)}}const k=A.children;for(let H=0,X=k.length;H<X;H++)y(k[H],D,L,b,w)}function C(A){A.target.removeEventListener("dispose",C);for(const L in c){const b=c[L],w=A.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}const r1={[kc]:Bc,[zc]:Vc,[Gc]:Wc,[Vs]:Hc,[Bc]:kc,[Vc]:zc,[Wc]:Gc,[Hc]:Vs};function s1(n,e){function t(){let U=!1;const re=new kt;let oe=null;const ve=new kt(0,0,0,0);return{setMask:function(te){oe!==te&&!U&&(n.colorMask(te,te,te,te),oe=te)},setLocked:function(te){U=te},setClear:function(te,Z,be,Xe,Tt){Tt===!0&&(te*=Xe,Z*=Xe,be*=Xe),re.set(te,Z,be,Xe),ve.equals(re)===!1&&(n.clearColor(te,Z,be,Xe),ve.copy(re))},reset:function(){U=!1,oe=null,ve.set(-1,0,0,0)}}}function i(){let U=!1,re=!1,oe=null,ve=null,te=null;return{setReversed:function(Z){if(re!==Z){const be=e.get("EXT_clip_control");Z?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),re=Z;const Xe=te;te=null,this.setClear(Xe)}},getReversed:function(){return re},setTest:function(Z){Z?Q(n.DEPTH_TEST):Me(n.DEPTH_TEST)},setMask:function(Z){oe!==Z&&!U&&(n.depthMask(Z),oe=Z)},setFunc:function(Z){if(re&&(Z=r1[Z]),ve!==Z){switch(Z){case kc:n.depthFunc(n.NEVER);break;case Bc:n.depthFunc(n.ALWAYS);break;case zc:n.depthFunc(n.LESS);break;case Vs:n.depthFunc(n.LEQUAL);break;case Gc:n.depthFunc(n.EQUAL);break;case Hc:n.depthFunc(n.GEQUAL);break;case Vc:n.depthFunc(n.GREATER);break;case Wc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ve=Z}},setLocked:function(Z){U=Z},setClear:function(Z){te!==Z&&(re&&(Z=1-Z),n.clearDepth(Z),te=Z)},reset:function(){U=!1,oe=null,ve=null,te=null,re=!1}}}function r(){let U=!1,re=null,oe=null,ve=null,te=null,Z=null,be=null,Xe=null,Tt=null;return{setTest:function(gt){U||(gt?Q(n.STENCIL_TEST):Me(n.STENCIL_TEST))},setMask:function(gt){re!==gt&&!U&&(n.stencilMask(gt),re=gt)},setFunc:function(gt,Ai,di){(oe!==gt||ve!==Ai||te!==di)&&(n.stencilFunc(gt,Ai,di),oe=gt,ve=Ai,te=di)},setOp:function(gt,Ai,di){(Z!==gt||be!==Ai||Xe!==di)&&(n.stencilOp(gt,Ai,di),Z=gt,be=Ai,Xe=di)},setLocked:function(gt){U=gt},setClear:function(gt){Tt!==gt&&(n.clearStencil(gt),Tt=gt)},reset:function(){U=!1,re=null,oe=null,ve=null,te=null,Z=null,be=null,Xe=null,Tt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,h=[],_=null,x=!1,g=null,p=null,T=null,E=null,y=null,C=null,A=null,D=new Se(0,0,0),L=0,b=!1,w=null,I=null,k=null,H=null,X=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,se=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(V)[1]),q=se>=1):V.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),q=se>=2);let ue=null,_e={};const Ue=n.getParameter(n.SCISSOR_BOX),it=n.getParameter(n.VIEWPORT),Et=new kt().fromArray(Ue),Lt=new kt().fromArray(it);function mt(U,re,oe,ve){const te=new Uint8Array(4),Z=n.createTexture();n.bindTexture(U,Z),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let be=0;be<oe;be++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(re,0,n.RGBA,1,1,ve,0,n.RGBA,n.UNSIGNED_BYTE,te):n.texImage2D(re+be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,te);return Z}const j={};j[n.TEXTURE_2D]=mt(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=mt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=mt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=mt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(n.DEPTH_TEST),a.setFunc(Vs),ze(!1),we(Zd),Q(n.CULL_FACE),It(ar);function Q(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function Me(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function We(U,re){return d[U]!==re?(n.bindFramebuffer(U,re),d[U]=re,U===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=re),U===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=re),!0):!1}function Ie(U,re){let oe=h,ve=!1;if(U){oe=f.get(re),oe===void 0&&(oe=[],f.set(re,oe));const te=U.textures;if(oe.length!==te.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let Z=0,be=te.length;Z<be;Z++)oe[Z]=n.COLOR_ATTACHMENT0+Z;oe.length=te.length,ve=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,ve=!0);ve&&n.drawBuffers(oe)}function ut(U){return _!==U?(n.useProgram(U),_=U,!0):!1}const _n={[Lr]:n.FUNC_ADD,[V0]:n.FUNC_SUBTRACT,[W0]:n.FUNC_REVERSE_SUBTRACT};_n[X0]=n.MIN,_n[q0]=n.MAX;const P={[$0]:n.ZERO,[Y0]:n.ONE,[j0]:n.SRC_COLOR,[Fc]:n.SRC_ALPHA,[tg]:n.SRC_ALPHA_SATURATE,[Q0]:n.DST_COLOR,[Z0]:n.DST_ALPHA,[K0]:n.ONE_MINUS_SRC_COLOR,[Oc]:n.ONE_MINUS_SRC_ALPHA,[eg]:n.ONE_MINUS_DST_COLOR,[J0]:n.ONE_MINUS_DST_ALPHA,[ng]:n.CONSTANT_COLOR,[ig]:n.ONE_MINUS_CONSTANT_COLOR,[rg]:n.CONSTANT_ALPHA,[sg]:n.ONE_MINUS_CONSTANT_ALPHA};function It(U,re,oe,ve,te,Z,be,Xe,Tt,gt){if(U===ar){x===!0&&(Me(n.BLEND),x=!1);return}if(x===!1&&(Q(n.BLEND),x=!0),U!==H0){if(U!==g||gt!==b){if((p!==Lr||y!==Lr)&&(n.blendEquation(n.FUNC_ADD),p=Lr,y=Lr),gt)switch(U){case Hr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case dr:n.blendFunc(n.ONE,n.ONE);break;case Jd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qd:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Hr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case dr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Jd:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qd:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}T=null,E=null,C=null,A=null,D.set(0,0,0),L=0,g=U,b=gt}return}te=te||re,Z=Z||oe,be=be||ve,(re!==p||te!==y)&&(n.blendEquationSeparate(_n[re],_n[te]),p=re,y=te),(oe!==T||ve!==E||Z!==C||be!==A)&&(n.blendFuncSeparate(P[oe],P[ve],P[Z],P[be]),T=oe,E=ve,C=Z,A=be),(Xe.equals(D)===!1||Tt!==L)&&(n.blendColor(Xe.r,Xe.g,Xe.b,Tt),D.copy(Xe),L=Tt),g=U,b=!1}function $e(U,re){U.side===sn?Me(n.CULL_FACE):Q(n.CULL_FACE);let oe=U.side===Cn;re&&(oe=!oe),ze(oe),U.blending===Hr&&U.transparent===!1?It(ar):It(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const ve=U.stencilWrite;o.setTest(ve),ve&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ee(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Q(n.SAMPLE_ALPHA_TO_COVERAGE):Me(n.SAMPLE_ALPHA_TO_COVERAGE)}function ze(U){w!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),w=U)}function we(U){U!==B0?(Q(n.CULL_FACE),U!==I&&(U===Zd?n.cullFace(n.BACK):U===z0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Me(n.CULL_FACE),I=U}function Ut(U){U!==k&&(q&&n.lineWidth(U),k=U)}function Ee(U,re,oe){U?(Q(n.POLYGON_OFFSET_FILL),(H!==re||X!==oe)&&(n.polygonOffset(re,oe),H=re,X=oe)):Me(n.POLYGON_OFFSET_FILL)}function Qe(U){U?Q(n.SCISSOR_TEST):Me(n.SCISSOR_TEST)}function dn(U){U===void 0&&(U=n.TEXTURE0+Y-1),ue!==U&&(n.activeTexture(U),ue=U)}function Ht(U,re,oe){oe===void 0&&(ue===null?oe=n.TEXTURE0+Y-1:oe=ue);let ve=_e[oe];ve===void 0&&(ve={type:void 0,texture:void 0},_e[oe]=ve),(ve.type!==U||ve.texture!==re)&&(ue!==oe&&(n.activeTexture(oe),ue=oe),n.bindTexture(U,re||j[U]),ve.type=U,ve.texture=re)}function R(){const U=_e[ue];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function B(){try{n.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{n.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{n.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(){try{n.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{n.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{n.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{n.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{n.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(U){Et.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Et.copy(U))}function Be(U){Lt.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Lt.copy(U))}function Pe(U,re){let oe=c.get(re);oe===void 0&&(oe=new WeakMap,c.set(re,oe));let ve=oe.get(U);ve===void 0&&(ve=n.getUniformBlockIndex(re,U.name),oe.set(U,ve))}function de(U,re){const ve=c.get(re).get(U);l.get(re)!==ve&&(n.uniformBlockBinding(re,ve,U.__bindingPointIndex),l.set(re,ve))}function Ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ue=null,_e={},d={},f=new WeakMap,h=[],_=null,x=!1,g=null,p=null,T=null,E=null,y=null,C=null,A=null,D=new Se(0,0,0),L=0,b=!1,w=null,I=null,k=null,H=null,X=null,Et.set(0,0,n.canvas.width,n.canvas.height),Lt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Q,disable:Me,bindFramebuffer:We,drawBuffers:Ie,useProgram:ut,setBlending:It,setMaterial:$e,setFlipSided:ze,setCullFace:we,setLineWidth:Ut,setPolygonOffset:Ee,setScissorTest:Qe,activeTexture:dn,bindTexture:Ht,unbindTexture:R,compressedTexImage2D:v,compressedTexImage3D:B,texImage2D:Ce,texImage3D:ie,updateUBOMapping:Pe,uniformBlockBinding:de,texStorage2D:ae,texStorage3D:Te,texSubImage2D:$,texSubImage3D:J,compressedTexSubImage2D:W,compressedTexSubImage3D:Le,scissor:pe,viewport:Be,reset:Ke}}function a1(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,v){return h?new OffscreenCanvas(R,v):nl("canvas")}function x(R,v,B){let $=1;const J=Ht(R);if((J.width>B||J.height>B)&&($=B/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const W=Math.floor($*J.width),Le=Math.floor($*J.height);d===void 0&&(d=_(W,Le));const ae=v?_(W,Le):d;return ae.width=W,ae.height=Le,ae.getContext("2d").drawImage(R,0,0,W,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+W+"x"+Le+")."),ae}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function g(R){return R.generateMipmaps}function p(R){n.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(R,v,B,$,J=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let W=v;if(v===n.RED&&(B===n.FLOAT&&(W=n.R32F),B===n.HALF_FLOAT&&(W=n.R16F),B===n.UNSIGNED_BYTE&&(W=n.R8)),v===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(W=n.R8UI),B===n.UNSIGNED_SHORT&&(W=n.R16UI),B===n.UNSIGNED_INT&&(W=n.R32UI),B===n.BYTE&&(W=n.R8I),B===n.SHORT&&(W=n.R16I),B===n.INT&&(W=n.R32I)),v===n.RG&&(B===n.FLOAT&&(W=n.RG32F),B===n.HALF_FLOAT&&(W=n.RG16F),B===n.UNSIGNED_BYTE&&(W=n.RG8)),v===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(W=n.RG8UI),B===n.UNSIGNED_SHORT&&(W=n.RG16UI),B===n.UNSIGNED_INT&&(W=n.RG32UI),B===n.BYTE&&(W=n.RG8I),B===n.SHORT&&(W=n.RG16I),B===n.INT&&(W=n.RG32I)),v===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(W=n.RGB8UI),B===n.UNSIGNED_SHORT&&(W=n.RGB16UI),B===n.UNSIGNED_INT&&(W=n.RGB32UI),B===n.BYTE&&(W=n.RGB8I),B===n.SHORT&&(W=n.RGB16I),B===n.INT&&(W=n.RGB32I)),v===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),B===n.UNSIGNED_INT&&(W=n.RGBA32UI),B===n.BYTE&&(W=n.RGBA8I),B===n.SHORT&&(W=n.RGBA16I),B===n.INT&&(W=n.RGBA32I)),v===n.RGB&&(B===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(W=n.R11F_G11F_B10F)),v===n.RGBA){const Le=J?Qo:ht.getTransfer($);B===n.FLOAT&&(W=n.RGBA32F),B===n.HALF_FLOAT&&(W=n.RGBA16F),B===n.UNSIGNED_BYTE&&(W=Le===bt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function y(R,v){let B;return R?v===null||v===Xr||v===Na?B=n.DEPTH24_STENCIL8:v===gi?B=n.DEPTH32F_STENCIL8:v===Ua&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Xr||v===Na?B=n.DEPTH_COMPONENT24:v===gi?B=n.DEPTH_COMPONENT32F:v===Ua&&(B=n.DEPTH_COMPONENT16),B}function C(R,v){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==Hn&&R.minFilter!==mi?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function A(R){const v=R.target;v.removeEventListener("dispose",A),L(v),v.isVideoTexture&&u.delete(v)}function D(R){const v=R.target;v.removeEventListener("dispose",D),w(v)}function L(R){const v=i.get(R);if(v.__webglInit===void 0)return;const B=R.source,$=f.get(B);if($){const J=$[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(R),Object.keys($).length===0&&f.delete(B)}i.remove(R)}function b(R){const v=i.get(R);n.deleteTexture(v.__webglTexture);const B=R.source,$=f.get(B);delete $[v.__cacheKey],a.memory.textures--}function w(R){const v=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let J=0;J<v.__webglFramebuffer[$].length;J++)n.deleteFramebuffer(v.__webglFramebuffer[$][J]);else n.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)n.deleteFramebuffer(v.__webglFramebuffer[$]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const B=R.textures;for(let $=0,J=B.length;$<J;$++){const W=i.get(B[$]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),a.memory.textures--),i.remove(B[$])}i.remove(R)}let I=0;function k(){I=0}function H(){const R=I;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),I+=1,R}function X(R){const v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function Y(R,v){const B=i.get(R);if(R.isVideoTexture&&Qe(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){const $=R.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(B,R,v);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+v)}function q(R,v){const B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){j(B,R,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+v)}function se(R,v){const B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){j(B,R,v);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+v)}function V(R,v){const B=i.get(R);if(R.version>0&&B.__version!==R.version){Q(B,R,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+v)}const ue={[$c]:n.REPEAT,[kr]:n.CLAMP_TO_EDGE,[Yc]:n.MIRRORED_REPEAT},_e={[Hn]:n.NEAREST,[mg]:n.NEAREST_MIPMAP_NEAREST,[io]:n.NEAREST_MIPMAP_LINEAR,[mi]:n.LINEAR,[Xl]:n.LINEAR_MIPMAP_NEAREST,[Br]:n.LINEAR_MIPMAP_LINEAR},Ue={[vg]:n.NEVER,[Eg]:n.ALWAYS,[Mg]:n.LESS,[Sp]:n.LEQUAL,[yg]:n.EQUAL,[wg]:n.GEQUAL,[Sg]:n.GREATER,[bg]:n.NOTEQUAL};function it(R,v){if(v.type===gi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===mi||v.magFilter===Xl||v.magFilter===io||v.magFilter===Br||v.minFilter===mi||v.minFilter===Xl||v.minFilter===io||v.minFilter===Br)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,ue[v.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,ue[v.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,ue[v.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,_e[v.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,_e[v.minFilter]),v.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Ue[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Hn||v.minFilter!==io&&v.minFilter!==Br||v.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Et(R,v){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",A));const $=v.source;let J=f.get($);J===void 0&&(J={},f.set($,J));const W=X(v);if(W!==R.__cacheKey){J[W]===void 0&&(J[W]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),J[W].usedTimes++;const Le=J[R.__cacheKey];Le!==void 0&&(J[R.__cacheKey].usedTimes--,Le.usedTimes===0&&b(v)),R.__cacheKey=W,R.__webglTexture=J[W].texture}return B}function Lt(R,v,B){return Math.floor(Math.floor(R/B)/v)}function mt(R,v,B,$){const W=R.updateRanges;if(W.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,B,$,v.data);else{W.sort((ie,pe)=>ie.start-pe.start);let Le=0;for(let ie=1;ie<W.length;ie++){const pe=W[Le],Be=W[ie],Pe=pe.start+pe.count,de=Lt(Be.start,v.width,4),Ke=Lt(pe.start,v.width,4);Be.start<=Pe+1&&de===Ke&&Lt(Be.start+Be.count-1,v.width,4)===de?pe.count=Math.max(pe.count,Be.start+Be.count-pe.start):(++Le,W[Le]=Be)}W.length=Le+1;const ae=n.getParameter(n.UNPACK_ROW_LENGTH),Te=n.getParameter(n.UNPACK_SKIP_PIXELS),Ce=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let ie=0,pe=W.length;ie<pe;ie++){const Be=W[ie],Pe=Math.floor(Be.start/4),de=Math.ceil(Be.count/4),Ke=Pe%v.width,U=Math.floor(Pe/v.width),re=de,oe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,Ke,U,re,oe,B,$,v.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ae),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Te),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ce)}}function j(R,v,B){let $=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=n.TEXTURE_3D);const J=Et(R,v),W=v.source;t.bindTexture($,R.__webglTexture,n.TEXTURE0+B);const Le=i.get(W);if(W.version!==Le.__version||J===!0){t.activeTexture(n.TEXTURE0+B);const ae=ht.getPrimaries(ht.workingColorSpace),Te=v.colorSpace===ir?null:ht.getPrimaries(v.colorSpace),Ce=v.colorSpace===ir||ae===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let ie=x(v.image,!1,r.maxTextureSize);ie=dn(v,ie);const pe=s.convert(v.format,v.colorSpace),Be=s.convert(v.type);let Pe=E(v.internalFormat,pe,Be,v.colorSpace,v.isVideoTexture);it($,v);let de;const Ke=v.mipmaps,U=v.isVideoTexture!==!0,re=Le.__version===void 0||J===!0,oe=W.dataReady,ve=C(v,ie);if(v.isDepthTexture)Pe=y(v.format===Oa,v.type),re&&(U?t.texStorage2D(n.TEXTURE_2D,1,Pe,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,Pe,ie.width,ie.height,0,pe,Be,null));else if(v.isDataTexture)if(Ke.length>0){U&&re&&t.texStorage2D(n.TEXTURE_2D,ve,Pe,Ke[0].width,Ke[0].height);for(let te=0,Z=Ke.length;te<Z;te++)de=Ke[te],U?oe&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,de.width,de.height,pe,Be,de.data):t.texImage2D(n.TEXTURE_2D,te,Pe,de.width,de.height,0,pe,Be,de.data);v.generateMipmaps=!1}else U?(re&&t.texStorage2D(n.TEXTURE_2D,ve,Pe,ie.width,ie.height),oe&&mt(v,ie,pe,Be)):t.texImage2D(n.TEXTURE_2D,0,Pe,ie.width,ie.height,0,pe,Be,ie.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){U&&re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,Pe,Ke[0].width,Ke[0].height,ie.depth);for(let te=0,Z=Ke.length;te<Z;te++)if(de=Ke[te],v.format!==ai)if(pe!==null)if(U){if(oe)if(v.layerUpdates.size>0){const be=Lf(de.width,de.height,v.format,v.type);for(const Xe of v.layerUpdates){const Tt=de.data.subarray(Xe*be/de.data.BYTES_PER_ELEMENT,(Xe+1)*be/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,Xe,de.width,de.height,1,pe,Tt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,de.width,de.height,ie.depth,pe,de.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,Pe,de.width,de.height,ie.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?oe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,de.width,de.height,ie.depth,pe,Be,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,Pe,de.width,de.height,ie.depth,0,pe,Be,de.data)}else{U&&re&&t.texStorage2D(n.TEXTURE_2D,ve,Pe,Ke[0].width,Ke[0].height);for(let te=0,Z=Ke.length;te<Z;te++)de=Ke[te],v.format!==ai?pe!==null?U?oe&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,de.width,de.height,pe,de.data):t.compressedTexImage2D(n.TEXTURE_2D,te,Pe,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?oe&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,de.width,de.height,pe,Be,de.data):t.texImage2D(n.TEXTURE_2D,te,Pe,de.width,de.height,0,pe,Be,de.data)}else if(v.isDataArrayTexture)if(U){if(re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,Pe,ie.width,ie.height,ie.depth),oe)if(v.layerUpdates.size>0){const te=Lf(ie.width,ie.height,v.format,v.type);for(const Z of v.layerUpdates){const be=ie.data.subarray(Z*te/ie.data.BYTES_PER_ELEMENT,(Z+1)*te/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,ie.width,ie.height,1,pe,Be,be)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,pe,Be,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,ie.width,ie.height,ie.depth,0,pe,Be,ie.data);else if(v.isData3DTexture)U?(re&&t.texStorage3D(n.TEXTURE_3D,ve,Pe,ie.width,ie.height,ie.depth),oe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,pe,Be,ie.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,ie.width,ie.height,ie.depth,0,pe,Be,ie.data);else if(v.isFramebufferTexture){if(re)if(U)t.texStorage2D(n.TEXTURE_2D,ve,Pe,ie.width,ie.height);else{let te=ie.width,Z=ie.height;for(let be=0;be<ve;be++)t.texImage2D(n.TEXTURE_2D,be,Pe,te,Z,0,pe,Be,null),te>>=1,Z>>=1}}else if(Ke.length>0){if(U&&re){const te=Ht(Ke[0]);t.texStorage2D(n.TEXTURE_2D,ve,Pe,te.width,te.height)}for(let te=0,Z=Ke.length;te<Z;te++)de=Ke[te],U?oe&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,pe,Be,de):t.texImage2D(n.TEXTURE_2D,te,Pe,pe,Be,de);v.generateMipmaps=!1}else if(U){if(re){const te=Ht(ie);t.texStorage2D(n.TEXTURE_2D,ve,Pe,te.width,te.height)}oe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,Be,ie)}else t.texImage2D(n.TEXTURE_2D,0,Pe,pe,Be,ie);g(v)&&p($),Le.__version=W.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Q(R,v,B){if(v.image.length!==6)return;const $=Et(R,v),J=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+B);const W=i.get(J);if(J.version!==W.__version||$===!0){t.activeTexture(n.TEXTURE0+B);const Le=ht.getPrimaries(ht.workingColorSpace),ae=v.colorSpace===ir?null:ht.getPrimaries(v.colorSpace),Te=v.colorSpace===ir||Le===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Ce=v.isCompressedTexture||v.image[0].isCompressedTexture,ie=v.image[0]&&v.image[0].isDataTexture,pe=[];for(let Z=0;Z<6;Z++)!Ce&&!ie?pe[Z]=x(v.image[Z],!0,r.maxCubemapSize):pe[Z]=ie?v.image[Z].image:v.image[Z],pe[Z]=dn(v,pe[Z]);const Be=pe[0],Pe=s.convert(v.format,v.colorSpace),de=s.convert(v.type),Ke=E(v.internalFormat,Pe,de,v.colorSpace),U=v.isVideoTexture!==!0,re=W.__version===void 0||$===!0,oe=J.dataReady;let ve=C(v,Be);it(n.TEXTURE_CUBE_MAP,v);let te;if(Ce){U&&re&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,Ke,Be.width,Be.height);for(let Z=0;Z<6;Z++){te=pe[Z].mipmaps;for(let be=0;be<te.length;be++){const Xe=te[be];v.format!==ai?Pe!==null?U?oe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be,0,0,Xe.width,Xe.height,Pe,Xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be,Ke,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be,0,0,Xe.width,Xe.height,Pe,de,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be,Ke,Xe.width,Xe.height,0,Pe,de,Xe.data)}}}else{if(te=v.mipmaps,U&&re){te.length>0&&ve++;const Z=Ht(pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,Ke,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ie){U?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,pe[Z].width,pe[Z].height,Pe,de,pe[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ke,pe[Z].width,pe[Z].height,0,Pe,de,pe[Z].data);for(let be=0;be<te.length;be++){const Tt=te[be].image[Z].image;U?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be+1,0,0,Tt.width,Tt.height,Pe,de,Tt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be+1,Ke,Tt.width,Tt.height,0,Pe,de,Tt.data)}}else{U?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Pe,de,pe[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ke,Pe,de,pe[Z]);for(let be=0;be<te.length;be++){const Xe=te[be];U?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be+1,0,0,Pe,de,Xe.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be+1,Ke,Pe,de,Xe.image[Z])}}}g(v)&&p(n.TEXTURE_CUBE_MAP),W.__version=J.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Me(R,v,B,$,J,W){const Le=s.convert(B.format,B.colorSpace),ae=s.convert(B.type),Te=E(B.internalFormat,Le,ae,B.colorSpace),Ce=i.get(v),ie=i.get(B);if(ie.__renderTarget=v,!Ce.__hasExternalTextures){const pe=Math.max(1,v.width>>W),Be=Math.max(1,v.height>>W);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,W,Te,pe,Be,v.depth,0,Le,ae,null):t.texImage2D(J,W,Te,pe,Be,0,Le,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),Ee(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,J,ie.__webglTexture,0,Ut(v)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,J,ie.__webglTexture,W),t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(R,v,B){if(n.bindRenderbuffer(n.RENDERBUFFER,R),v.depthBuffer){const $=v.depthTexture,J=$&&$.isDepthTexture?$.type:null,W=y(v.stencilBuffer,J),Le=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=Ut(v);Ee(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,W,v.width,v.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,W,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,W,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Le,n.RENDERBUFFER,R)}else{const $=v.textures;for(let J=0;J<$.length;J++){const W=$[J],Le=s.convert(W.format,W.colorSpace),ae=s.convert(W.type),Te=E(W.internalFormat,Le,ae,W.colorSpace),Ce=Ut(v);B&&Ee(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,Te,v.width,v.height):Ee(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ce,Te,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Te,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ie(R,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(v.depthTexture);$.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y(v.depthTexture,0);const J=$.__webglTexture,W=Ut(v);if(v.depthTexture.format===Fa)Ee(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(v.depthTexture.format===Oa)Ee(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function ut(R){const v=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){const $=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){const J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=$}if(R.depthTexture&&!v.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const $=R.texture.mipmaps;$&&$.length>0?Ie(v.__webglFramebuffer[0],R):Ie(v.__webglFramebuffer,R)}else if(B){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=n.createRenderbuffer(),We(v.__webglDepthbuffer[$],R,!1);else{const J=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,W)}}else{const $=R.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),We(v.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,W)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function _n(R,v,B){const $=i.get(R);v!==void 0&&Me($.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&ut(R)}function P(R){const v=R.texture,B=i.get(R),$=i.get(v);R.addEventListener("dispose",D);const J=R.textures,W=R.isWebGLCubeRenderTarget===!0,Le=J.length>1;if(Le||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=v.version,a.memory.textures++),W){B.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[ae]=[];for(let Te=0;Te<v.mipmaps.length;Te++)B.__webglFramebuffer[ae][Te]=n.createFramebuffer()}else B.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let ae=0;ae<v.mipmaps.length;ae++)B.__webglFramebuffer[ae]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Le)for(let ae=0,Te=J.length;ae<Te;ae++){const Ce=i.get(J[ae]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&Ee(R)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ae=0;ae<J.length;ae++){const Te=J[ae];B.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[ae]);const Ce=s.convert(Te.format,Te.colorSpace),ie=s.convert(Te.type),pe=E(Te.internalFormat,Ce,ie,Te.colorSpace,R.isXRRenderTarget===!0),Be=Ut(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,pe,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,B.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),We(B.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),it(n.TEXTURE_CUBE_MAP,v);for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0)for(let Te=0;Te<v.mipmaps.length;Te++)Me(B.__webglFramebuffer[ae][Te],R,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Te);else Me(B.__webglFramebuffer[ae],R,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);g(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let ae=0,Te=J.length;ae<Te;ae++){const Ce=J[ae],ie=i.get(Ce);let pe=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pe=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,ie.__webglTexture),it(pe,Ce),Me(B.__webglFramebuffer,R,Ce,n.COLOR_ATTACHMENT0+ae,pe,0),g(Ce)&&p(pe)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,$.__webglTexture),it(ae,v),v.mipmaps&&v.mipmaps.length>0)for(let Te=0;Te<v.mipmaps.length;Te++)Me(B.__webglFramebuffer[Te],R,v,n.COLOR_ATTACHMENT0,ae,Te);else Me(B.__webglFramebuffer,R,v,n.COLOR_ATTACHMENT0,ae,0);g(v)&&p(ae),t.unbindTexture()}R.depthBuffer&&ut(R)}function It(R){const v=R.textures;for(let B=0,$=v.length;B<$;B++){const J=v[B];if(g(J)){const W=T(R),Le=i.get(J).__webglTexture;t.bindTexture(W,Le),p(W),t.unbindTexture()}}}const $e=[],ze=[];function we(R){if(R.samples>0){if(Ee(R)===!1){const v=R.textures,B=R.width,$=R.height;let J=n.COLOR_BUFFER_BIT;const W=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Le=i.get(R),ae=v.length>1;if(ae)for(let Ce=0;Ce<v.length;Ce++)t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const Te=R.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ce=0;Ce<v.length;Ce++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Le.__webglColorRenderbuffer[Ce]);const ie=i.get(v[Ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ie,0)}n.blitFramebuffer(0,0,B,$,0,0,B,$,J,n.NEAREST),l===!0&&($e.length=0,ze.length=0,$e.push(n.COLOR_ATTACHMENT0+Ce),R.depthBuffer&&R.resolveDepthBuffer===!1&&($e.push(W),ze.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ze)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,$e))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let Ce=0;Ce<v.length;Ce++){t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,Le.__webglColorRenderbuffer[Ce]);const ie=i.get(v[Ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const v=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Ut(R){return Math.min(r.maxSamples,R.samples)}function Ee(R){const v=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Qe(R){const v=a.render.frame;u.get(R)!==v&&(u.set(R,v),R.update())}function dn(R,v){const B=R.colorSpace,$=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==qs&&B!==ir&&(ht.getTransfer(B)===bt?($!==ai||J!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),v}function Ht(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=k,this.setTexture2D=Y,this.setTexture2DArray=q,this.setTexture3D=se,this.setTextureCube=V,this.rebindTextures=_n,this.setupRenderTarget=P,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Ee}function o1(n,e){function t(i,r=ir){let s;const a=ht.getTransfer(r);if(i===Mi)return n.UNSIGNED_BYTE;if(i===$u)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Yu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===gp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===_p)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===pp)return n.BYTE;if(i===mp)return n.SHORT;if(i===Ua)return n.UNSIGNED_SHORT;if(i===qu)return n.INT;if(i===Xr)return n.UNSIGNED_INT;if(i===gi)return n.FLOAT;if(i===ja)return n.HALF_FLOAT;if(i===xp)return n.ALPHA;if(i===vp)return n.RGB;if(i===ai)return n.RGBA;if(i===Fa)return n.DEPTH_COMPONENT;if(i===Oa)return n.DEPTH_STENCIL;if(i===ju)return n.RED;if(i===Ku)return n.RED_INTEGER;if(i===Mp)return n.RG;if(i===Zu)return n.RG_INTEGER;if(i===Ju)return n.RGBA_INTEGER;if(i===Ho||i===Vo||i===Wo||i===Xo)if(a===bt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ho)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ho)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Vo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jc||i===Kc||i===Zc||i===Jc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===jc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Kc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Zc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Jc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Qc||i===eu||i===tu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Qc||i===eu)return a===bt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===tu)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===nu||i===iu||i===ru||i===su||i===au||i===ou||i===lu||i===cu||i===uu||i===du||i===fu||i===hu||i===pu||i===mu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===nu)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===iu)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ru)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===su)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===au)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ou)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===lu)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===cu)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===uu)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===du)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fu)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===hu)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===pu)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===mu)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===gu||i===_u||i===xu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===gu)return a===bt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_u)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vu||i===Mu||i===yu||i===Su)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===vu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Mu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Su)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Na?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const l1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,c1=`
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

}`;class u1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Np(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Si({vertexShader:l1,fragmentShader:c1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new K(new ra(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class d1 extends ea{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,_=null;const x=typeof XRWebGLBinding<"u",g=new u1,p={},T=t.getContextAttributes();let E=null,y=null;const C=[],A=[],D=new ke;let L=null;const b=new Kn;b.viewport=new kt;const w=new Kn;w.viewport=new kt;const I=[b,w],k=new D_;let H=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Q=C[j];return Q===void 0&&(Q=new fc,C[j]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(j){let Q=C[j];return Q===void 0&&(Q=new fc,C[j]=Q),Q.getGripSpace()},this.getHand=function(j){let Q=C[j];return Q===void 0&&(Q=new fc,C[j]=Q),Q.getHandSpace()};function Y(j){const Q=A.indexOf(j.inputSource);if(Q===-1)return;const Me=C[Q];Me!==void 0&&(Me.update(j.inputSource,j.frame,c||a),Me.dispatchEvent({type:j.type,data:j.inputSource}))}function q(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",se);for(let j=0;j<C.length;j++){const Q=A[j];Q!==null&&(A[j]=null,C[j].disconnect(Q))}H=null,X=null,g.reset();for(const j in p)delete p[j];e.setRenderTarget(E),h=null,f=null,d=null,r=null,y=null,mt.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",q),r.addEventListener("inputsourceschange",se),T.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(D),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,We=null,Ie=null;T.depth&&(Ie=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=T.stencil?Oa:Fa,We=T.stencil?Na:Xr);const ut={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(ut),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new qr(f.textureWidth,f.textureHeight,{format:ai,type:Mi,depthTexture:new Up(f.textureWidth,f.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Me={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,Me),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new qr(h.framebufferWidth,h.framebufferHeight,{format:ai,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),mt.setContext(r),mt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function se(j){for(let Q=0;Q<j.removed.length;Q++){const Me=j.removed[Q],We=A.indexOf(Me);We>=0&&(A[We]=null,C[We].disconnect(Me))}for(let Q=0;Q<j.added.length;Q++){const Me=j.added[Q];let We=A.indexOf(Me);if(We===-1){for(let ut=0;ut<C.length;ut++)if(ut>=A.length){A.push(Me),We=ut;break}else if(A[ut]===null){A[ut]=Me,We=ut;break}if(We===-1)break}const Ie=C[We];Ie&&Ie.connect(Me)}}const V=new N,ue=new N;function _e(j,Q,Me){V.setFromMatrixPosition(Q.matrixWorld),ue.setFromMatrixPosition(Me.matrixWorld);const We=V.distanceTo(ue),Ie=Q.projectionMatrix.elements,ut=Me.projectionMatrix.elements,_n=Ie[14]/(Ie[10]-1),P=Ie[14]/(Ie[10]+1),It=(Ie[9]+1)/Ie[5],$e=(Ie[9]-1)/Ie[5],ze=(Ie[8]-1)/Ie[0],we=(ut[8]+1)/ut[0],Ut=_n*ze,Ee=_n*we,Qe=We/(-ze+we),dn=Qe*-ze;if(Q.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(dn),j.translateZ(Qe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ie[10]===-1)j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Ht=_n+Qe,R=P+Qe,v=Ut-dn,B=Ee+(We-dn),$=It*P/R*Ht,J=$e*P/R*Ht;j.projectionMatrix.makePerspective(v,B,$,J,Ht,R),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Ue(j,Q){Q===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Q.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let Q=j.near,Me=j.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(Me=g.depthFar)),k.near=w.near=b.near=Q,k.far=w.far=b.far=Me,(H!==k.near||X!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),H=k.near,X=k.far),k.layers.mask=j.layers.mask|6,b.layers.mask=k.layers.mask&3,w.layers.mask=k.layers.mask&5;const We=j.parent,Ie=k.cameras;Ue(k,We);for(let ut=0;ut<Ie.length;ut++)Ue(Ie[ut],We);Ie.length===2?_e(k,b,w):k.projectionMatrix.copy(b.projectionMatrix),it(j,k,We)};function it(j,Q,Me){Me===null?j.matrix.copy(Q.matrixWorld):(j.matrix.copy(Me.matrixWorld),j.matrix.invert(),j.matrix.multiply(Q.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ka*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(j){return p[j]};let Et=null;function Lt(j,Q){if(u=Q.getViewerPose(c||a),_=Q,u!==null){const Me=u.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let We=!1;Me.length!==k.cameras.length&&(k.cameras.length=0,We=!0);for(let P=0;P<Me.length;P++){const It=Me[P];let $e=null;if(h!==null)$e=h.getViewport(It);else{const we=d.getViewSubImage(f,It);$e=we.viewport,P===0&&(e.setRenderTargetTextures(y,we.colorTexture,we.depthStencilTexture),e.setRenderTarget(y))}let ze=I[P];ze===void 0&&(ze=new Kn,ze.layers.enable(P),ze.viewport=new kt,I[P]=ze),ze.matrix.fromArray(It.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(It.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set($e.x,$e.y,$e.width,$e.height),P===0&&(k.matrix.copy(ze.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),We===!0&&k.cameras.push(ze)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){d=i.getBinding();const P=d.getDepthInformation(Me[0]);P&&P.isValid&&P.texture&&g.init(P,r.renderState)}if(Ie&&Ie.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let P=0;P<Me.length;P++){const It=Me[P].camera;if(It){let $e=p[It];$e||($e=new Np,p[It]=$e);const ze=d.getCameraImage(It);$e.sourceTexture=ze}}}}for(let Me=0;Me<C.length;Me++){const We=A[Me],Ie=C[Me];We!==null&&Ie!==void 0&&Ie.update(We,Q,c||a)}Et&&Et(j,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),_=null}const mt=new kp;mt.setAnimationLoop(Lt),this.setAnimationLoop=function(j){Et=j},this.dispose=function(){}}}const Ar=new yi,f1=new dt;function h1(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Rp(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,T,E,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),d(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),f(g,p),p.isMeshPhysicalMaterial&&h(g,p,y)):p.isMeshMatcapMaterial?(s(g,p),_(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),x(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,T,E):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Cn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Cn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const T=e.get(p),E=T.envMap,y=T.envMapRotation;E&&(g.envMap.value=E,Ar.copy(y),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),g.envMapRotation.value.setFromMatrix4(f1.makeRotationFromEuler(Ar)),g.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,T,E){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*T,g.scale.value=E*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function h(g,p,T){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Cn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const T=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function p1(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,E){const y=E.program;i.uniformBlockBinding(T,y)}function c(T,E){let y=r[T.id];y===void 0&&(_(T),y=u(T),r[T.id]=y,T.addEventListener("dispose",g));const C=E.program;i.updateUBOMapping(T,C);const A=e.render.frame;s[T.id]!==A&&(f(T),s[T.id]=A)}function u(T){const E=d();T.__bindingPointIndex=E;const y=n.createBuffer(),C=T.__size,A=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,C,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,y),y}function d(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const E=r[T.id],y=T.uniforms,C=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let A=0,D=y.length;A<D;A++){const L=Array.isArray(y[A])?y[A]:[y[A]];for(let b=0,w=L.length;b<w;b++){const I=L[b];if(h(I,A,b,C)===!0){const k=I.__offset,H=Array.isArray(I.value)?I.value:[I.value];let X=0;for(let Y=0;Y<H.length;Y++){const q=H[Y],se=x(q);typeof q=="number"||typeof q=="boolean"?(I.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,k+X,I.__data)):q.isMatrix3?(I.__data[0]=q.elements[0],I.__data[1]=q.elements[1],I.__data[2]=q.elements[2],I.__data[3]=0,I.__data[4]=q.elements[3],I.__data[5]=q.elements[4],I.__data[6]=q.elements[5],I.__data[7]=0,I.__data[8]=q.elements[6],I.__data[9]=q.elements[7],I.__data[10]=q.elements[8],I.__data[11]=0):(q.toArray(I.__data,X),X+=se.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(T,E,y,C){const A=T.value,D=E+"_"+y;if(C[D]===void 0)return typeof A=="number"||typeof A=="boolean"?C[D]=A:C[D]=A.clone(),!0;{const L=C[D];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return C[D]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function _(T){const E=T.uniforms;let y=0;const C=16;for(let D=0,L=E.length;D<L;D++){const b=Array.isArray(E[D])?E[D]:[E[D]];for(let w=0,I=b.length;w<I;w++){const k=b[w],H=Array.isArray(k.value)?k.value:[k.value];for(let X=0,Y=H.length;X<Y;X++){const q=H[X],se=x(q),V=y%C,ue=V%se.boundary,_e=V+ue;y+=ue,_e!==0&&C-_e<se.storage&&(y+=C-_e),k.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=se.storage}}}const A=y%C;return A>0&&(y+=C-A),T.__size=y,T.__cache={},this}function x(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function g(T){const E=T.target;E.removeEventListener("dispose",g);const y=a.indexOf(E.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function p(){for(const T in r)n.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class m1{constructor(e={}){const{canvas:t=Vg(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=a;const _=new Uint32Array(4),x=new Int32Array(4);let g=null,p=null;const T=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=or,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let C=!1;this._outputColorSpace=jn;let A=0,D=0,L=null,b=-1,w=null;const I=new kt,k=new kt;let H=null;const X=new Se(0);let Y=0,q=t.width,se=t.height,V=1,ue=null,_e=null;const Ue=new kt(0,0,q,se),it=new kt(0,0,q,se);let Et=!1;const Lt=new rd;let mt=!1,j=!1;const Q=new dt,Me=new N,We=new kt,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function _n(){return L===null?V:1}let P=i;function It(S,F){return t.getContext(S,F)}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wu}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",te,!1),P===null){const F="webgl2";if(P=It(F,S),P===null)throw It(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let $e,ze,we,Ut,Ee,Qe,dn,Ht,R,v,B,$,J,W,Le,ae,Te,Ce,ie,pe,Be,Pe,de,Ke;function U(){$e=new EM(P),$e.init(),Pe=new o1(P,$e),ze=new xM(P,$e,e,Pe),we=new s1(P,$e),ze.reversedDepthBuffer&&f&&we.buffers.depth.setReversed(!0),Ut=new RM(P),Ee=new qy,Qe=new a1(P,$e,we,Ee,ze,Pe,Ut),dn=new MM(y),Ht=new wM(y),R=new U_(P),de=new gM(P,R),v=new TM(P,R,Ut,de),B=new PM(P,v,R,Ut),ie=new CM(P,ze,Qe),ae=new vM(Ee),$=new Xy(y,dn,Ht,$e,ze,de,ae),J=new h1(y,Ee),W=new Yy,Le=new e1($e),Ce=new mM(y,dn,Ht,we,B,h,l),Te=new i1(y,B,ze),Ke=new p1(P,Ut,ze,we),pe=new _M(P,$e,Ut),Be=new AM(P,$e,Ut),Ut.programs=$.programs,y.capabilities=ze,y.extensions=$e,y.properties=Ee,y.renderLists=W,y.shadowMap=Te,y.state=we,y.info=Ut}U();const re=new d1(y,P);this.xr=re,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const S=$e.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=$e.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(S){S!==void 0&&(V=S,this.setSize(q,se,!1))},this.getSize=function(S){return S.set(q,se)},this.setSize=function(S,F,z=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=S,se=F,t.width=Math.floor(S*V),t.height=Math.floor(F*V),z===!0&&(t.style.width=S+"px",t.style.height=F+"px"),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(q*V,se*V).floor()},this.setDrawingBufferSize=function(S,F,z){q=S,se=F,V=z,t.width=Math.floor(S*z),t.height=Math.floor(F*z),this.setViewport(0,0,S,F)},this.getCurrentViewport=function(S){return S.copy(I)},this.getViewport=function(S){return S.copy(Ue)},this.setViewport=function(S,F,z,G){S.isVector4?Ue.set(S.x,S.y,S.z,S.w):Ue.set(S,F,z,G),we.viewport(I.copy(Ue).multiplyScalar(V).round())},this.getScissor=function(S){return S.copy(it)},this.setScissor=function(S,F,z,G){S.isVector4?it.set(S.x,S.y,S.z,S.w):it.set(S,F,z,G),we.scissor(k.copy(it).multiplyScalar(V).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(S){we.setScissorTest(Et=S)},this.setOpaqueSort=function(S){ue=S},this.setTransparentSort=function(S){_e=S},this.getClearColor=function(S){return S.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(S=!0,F=!0,z=!0){let G=0;if(S){let O=!1;if(L!==null){const ne=L.texture.format;O=ne===Ju||ne===Zu||ne===Ku}if(O){const ne=L.texture.type,he=ne===Mi||ne===Xr||ne===Ua||ne===Na||ne===$u||ne===Yu,ye=Ce.getClearColor(),xe=Ce.getClearAlpha(),Oe=ye.r,Ge=ye.g,Ne=ye.b;he?(_[0]=Oe,_[1]=Ge,_[2]=Ne,_[3]=xe,P.clearBufferuiv(P.COLOR,0,_)):(x[0]=Oe,x[1]=Ge,x[2]=Ne,x[3]=xe,P.clearBufferiv(P.COLOR,0,x))}else G|=P.COLOR_BUFFER_BIT}F&&(G|=P.DEPTH_BUFFER_BIT),z&&(G|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",te,!1),Ce.dispose(),W.dispose(),Le.dispose(),Ee.dispose(),dn.dispose(),Ht.dispose(),B.dispose(),de.dispose(),Ke.dispose(),$.dispose(),re.dispose(),re.removeEventListener("sessionstart",di),re.removeEventListener("sessionend",Wd),Mr.stop()};function oe(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const S=Ut.autoReset,F=Te.enabled,z=Te.autoUpdate,G=Te.needsUpdate,O=Te.type;U(),Ut.autoReset=S,Te.enabled=F,Te.autoUpdate=z,Te.needsUpdate=G,Te.type=O}function te(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Z(S){const F=S.target;F.removeEventListener("dispose",Z),be(F)}function be(S){Xe(S),Ee.remove(S)}function Xe(S){const F=Ee.get(S).programs;F!==void 0&&(F.forEach(function(z){$.releaseProgram(z)}),S.isShaderMaterial&&$.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,z,G,O,ne){F===null&&(F=Ie);const he=O.isMesh&&O.matrixWorld.determinant()<0,ye=D0(S,F,z,G,O);we.setMaterial(G,he);let xe=z.index,Oe=1;if(G.wireframe===!0){if(xe=v.getWireframeAttribute(z),xe===void 0)return;Oe=2}const Ge=z.drawRange,Ne=z.attributes.position;let at=Ge.start*Oe,St=(Ge.start+Ge.count)*Oe;ne!==null&&(at=Math.max(at,ne.start*Oe),St=Math.min(St,(ne.start+ne.count)*Oe)),xe!==null?(at=Math.max(at,0),St=Math.min(St,xe.count)):Ne!=null&&(at=Math.max(at,0),St=Math.min(St,Ne.count));const Ot=St-at;if(Ot<0||Ot===1/0)return;de.setup(O,G,ye,z,xe);let Pt,wt=pe;if(xe!==null&&(Pt=R.get(xe),wt=Be,wt.setIndex(Pt)),O.isMesh)G.wireframe===!0?(we.setLineWidth(G.wireframeLinewidth*_n()),wt.setMode(P.LINES)):wt.setMode(P.TRIANGLES);else if(O.isLine){let Fe=G.linewidth;Fe===void 0&&(Fe=1),we.setLineWidth(Fe*_n()),O.isLineSegments?wt.setMode(P.LINES):O.isLineLoop?wt.setMode(P.LINE_LOOP):wt.setMode(P.LINE_STRIP)}else O.isPoints?wt.setMode(P.POINTS):O.isSprite&&wt.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Ba("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),wt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))wt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Fe=O._multiDrawStarts,Nt=O._multiDrawCounts,ft=O._multiDrawCount,Fn=xe?R.get(xe).bytesPerElement:1,as=Ee.get(G).currentProgram.getUniforms();for(let On=0;On<ft;On++)as.setValue(P,"_gl_DrawID",On),wt.render(Fe[On]/Fn,Nt[On])}else if(O.isInstancedMesh)wt.renderInstances(at,Ot,O.count);else if(z.isInstancedBufferGeometry){const Fe=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Nt=Math.min(z.instanceCount,Fe);wt.renderInstances(at,Ot,Nt)}else wt.render(at,Ot)};function Tt(S,F,z){S.transparent===!0&&S.side===sn&&S.forceSinglePass===!1?(S.side=Cn,S.needsUpdate=!0,no(S,F,z),S.side=ur,S.needsUpdate=!0,no(S,F,z),S.side=sn):no(S,F,z)}this.compile=function(S,F,z=null){z===null&&(z=S),p=Le.get(z),p.init(F),E.push(p),z.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),S!==z&&S.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const G=new Set;return S.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ne=O.material;if(ne)if(Array.isArray(ne))for(let he=0;he<ne.length;he++){const ye=ne[he];Tt(ye,z,O),G.add(ye)}else Tt(ne,z,O),G.add(ne)}),p=E.pop(),G},this.compileAsync=function(S,F,z=null){const G=this.compile(S,F,z);return new Promise(O=>{function ne(){if(G.forEach(function(he){Ee.get(he).currentProgram.isReady()&&G.delete(he)}),G.size===0){O(S);return}setTimeout(ne,10)}$e.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let gt=null;function Ai(S){gt&&gt(S)}function di(){Mr.stop()}function Wd(){Mr.start()}const Mr=new kp;Mr.setAnimationLoop(Ai),typeof self<"u"&&Mr.setContext(self),this.setAnimationLoop=function(S){gt=S,re.setAnimationLoop(S),S===null?Mr.stop():Mr.start()},re.addEventListener("sessionstart",di),re.addEventListener("sessionend",Wd),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(F),F=re.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,F,L),p=Le.get(S,E.length),p.init(F),E.push(p),Q.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Lt.setFromProjectionMatrix(Q,_i,F.reversedDepth),j=this.localClippingEnabled,mt=ae.init(this.clippingPlanes,j),g=W.get(S,T.length),g.init(),T.push(g),re.enabled===!0&&re.isPresenting===!0){const ne=y.xr.getDepthSensingMesh();ne!==null&&Vl(ne,F,-1/0,y.sortObjects)}Vl(S,F,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(ue,_e),ut=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,ut&&Ce.addToRenderList(g,S),this.info.render.frame++,mt===!0&&ae.beginShadows();const z=p.state.shadowsArray;Te.render(z,S,F),mt===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=g.opaque,O=g.transmissive;if(p.setupLights(),F.isArrayCamera){const ne=F.cameras;if(O.length>0)for(let he=0,ye=ne.length;he<ye;he++){const xe=ne[he];qd(G,O,S,xe)}ut&&Ce.render(S);for(let he=0,ye=ne.length;he<ye;he++){const xe=ne[he];Xd(g,S,xe,xe.viewport)}}else O.length>0&&qd(G,O,S,F),ut&&Ce.render(S),Xd(g,S,F);L!==null&&D===0&&(Qe.updateMultisampleRenderTarget(L),Qe.updateRenderTargetMipmap(L)),S.isScene===!0&&S.onAfterRender(y,S,F),de.resetDefaultState(),b=-1,w=null,E.pop(),E.length>0?(p=E[E.length-1],mt===!0&&ae.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?g=T[T.length-1]:g=null};function Vl(S,F,z,G){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Lt.intersectsSprite(S)){G&&We.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Q);const he=B.update(S),ye=S.material;ye.visible&&g.push(S,he,ye,z,We.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Lt.intersectsObject(S))){const he=B.update(S),ye=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),We.copy(S.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),We.copy(he.boundingSphere.center)),We.applyMatrix4(S.matrixWorld).applyMatrix4(Q)),Array.isArray(ye)){const xe=he.groups;for(let Oe=0,Ge=xe.length;Oe<Ge;Oe++){const Ne=xe[Oe],at=ye[Ne.materialIndex];at&&at.visible&&g.push(S,he,at,z,We.z,Ne)}}else ye.visible&&g.push(S,he,ye,z,We.z,null)}}const ne=S.children;for(let he=0,ye=ne.length;he<ye;he++)Vl(ne[he],F,z,G)}function Xd(S,F,z,G){const O=S.opaque,ne=S.transmissive,he=S.transparent;p.setupLightsView(z),mt===!0&&ae.setGlobalState(y.clippingPlanes,z),G&&we.viewport(I.copy(G)),O.length>0&&to(O,F,z),ne.length>0&&to(ne,F,z),he.length>0&&to(he,F,z),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function qd(S,F,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new qr(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float")?ja:Mi,minFilter:Br,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));const ne=p.state.transmissionRenderTarget[G.id],he=G.viewport||I;ne.setSize(he.z*y.transmissionResolutionScale,he.w*y.transmissionResolutionScale);const ye=y.getRenderTarget(),xe=y.getActiveCubeFace(),Oe=y.getActiveMipmapLevel();y.setRenderTarget(ne),y.getClearColor(X),Y=y.getClearAlpha(),Y<1&&y.setClearColor(16777215,.5),y.clear(),ut&&Ce.render(z);const Ge=y.toneMapping;y.toneMapping=or;const Ne=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),mt===!0&&ae.setGlobalState(y.clippingPlanes,G),to(S,z,G),Qe.updateMultisampleRenderTarget(ne),Qe.updateRenderTargetMipmap(ne),$e.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let St=0,Ot=F.length;St<Ot;St++){const Pt=F[St],wt=Pt.object,Fe=Pt.geometry,Nt=Pt.material,ft=Pt.group;if(Nt.side===sn&&wt.layers.test(G.layers)){const Fn=Nt.side;Nt.side=Cn,Nt.needsUpdate=!0,$d(wt,z,G,Fe,Nt,ft),Nt.side=Fn,Nt.needsUpdate=!0,at=!0}}at===!0&&(Qe.updateMultisampleRenderTarget(ne),Qe.updateRenderTargetMipmap(ne))}y.setRenderTarget(ye,xe,Oe),y.setClearColor(X,Y),Ne!==void 0&&(G.viewport=Ne),y.toneMapping=Ge}function to(S,F,z){const G=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ne=S.length;O<ne;O++){const he=S[O],ye=he.object,xe=he.geometry,Oe=he.group;let Ge=he.material;Ge.allowOverride===!0&&G!==null&&(Ge=G),ye.layers.test(z.layers)&&$d(ye,F,z,xe,Ge,Oe)}}function $d(S,F,z,G,O,ne){S.onBeforeRender(y,F,z,G,O,ne),S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),O.onBeforeRender(y,F,z,G,S,ne),O.transparent===!0&&O.side===sn&&O.forceSinglePass===!1?(O.side=Cn,O.needsUpdate=!0,y.renderBufferDirect(z,F,G,O,S,ne),O.side=ur,O.needsUpdate=!0,y.renderBufferDirect(z,F,G,O,S,ne),O.side=sn):y.renderBufferDirect(z,F,G,O,S,ne),S.onAfterRender(y,F,z,G,O,ne)}function no(S,F,z){F.isScene!==!0&&(F=Ie);const G=Ee.get(S),O=p.state.lights,ne=p.state.shadowsArray,he=O.state.version,ye=$.getParameters(S,O.state,ne,F,z),xe=$.getProgramCacheKey(ye);let Oe=G.programs;G.environment=S.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(S.isMeshStandardMaterial?Ht:dn).get(S.envMap||G.environment),G.envMapRotation=G.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,Oe===void 0&&(S.addEventListener("dispose",Z),Oe=new Map,G.programs=Oe);let Ge=Oe.get(xe);if(Ge!==void 0){if(G.currentProgram===Ge&&G.lightsStateVersion===he)return jd(S,ye),Ge}else ye.uniforms=$.getUniforms(S),S.onBeforeCompile(ye,y),Ge=$.acquireProgram(ye,xe),Oe.set(xe,Ge),G.uniforms=ye.uniforms;const Ne=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ne.clippingPlanes=ae.uniform),jd(S,ye),G.needsLights=I0(S),G.lightsStateVersion=he,G.needsLights&&(Ne.ambientLightColor.value=O.state.ambient,Ne.lightProbe.value=O.state.probe,Ne.directionalLights.value=O.state.directional,Ne.directionalLightShadows.value=O.state.directionalShadow,Ne.spotLights.value=O.state.spot,Ne.spotLightShadows.value=O.state.spotShadow,Ne.rectAreaLights.value=O.state.rectArea,Ne.ltc_1.value=O.state.rectAreaLTC1,Ne.ltc_2.value=O.state.rectAreaLTC2,Ne.pointLights.value=O.state.point,Ne.pointLightShadows.value=O.state.pointShadow,Ne.hemisphereLights.value=O.state.hemi,Ne.directionalShadowMap.value=O.state.directionalShadowMap,Ne.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ne.spotShadowMap.value=O.state.spotShadowMap,Ne.spotLightMatrix.value=O.state.spotLightMatrix,Ne.spotLightMap.value=O.state.spotLightMap,Ne.pointShadowMap.value=O.state.pointShadowMap,Ne.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=Ge,G.uniformsList=null,Ge}function Yd(S){if(S.uniformsList===null){const F=S.currentProgram.getUniforms();S.uniformsList=qo.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function jd(S,F){const z=Ee.get(S);z.outputColorSpace=F.outputColorSpace,z.batching=F.batching,z.batchingColor=F.batchingColor,z.instancing=F.instancing,z.instancingColor=F.instancingColor,z.instancingMorph=F.instancingMorph,z.skinning=F.skinning,z.morphTargets=F.morphTargets,z.morphNormals=F.morphNormals,z.morphColors=F.morphColors,z.morphTargetsCount=F.morphTargetsCount,z.numClippingPlanes=F.numClippingPlanes,z.numIntersection=F.numClipIntersection,z.vertexAlphas=F.vertexAlphas,z.vertexTangents=F.vertexTangents,z.toneMapping=F.toneMapping}function D0(S,F,z,G,O){F.isScene!==!0&&(F=Ie),Qe.resetTextureUnits();const ne=F.fog,he=G.isMeshStandardMaterial?F.environment:null,ye=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:qs,xe=(G.isMeshStandardMaterial?Ht:dn).get(G.envMap||he),Oe=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ge=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ne=!!z.morphAttributes.position,at=!!z.morphAttributes.normal,St=!!z.morphAttributes.color;let Ot=or;G.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ot=y.toneMapping);const Pt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,wt=Pt!==void 0?Pt.length:0,Fe=Ee.get(G),Nt=p.state.lights;if(mt===!0&&(j===!0||S!==w)){const wn=S===w&&G.id===b;ae.setState(G,S,wn)}let ft=!1;G.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Nt.state.version||Fe.outputColorSpace!==ye||O.isBatchedMesh&&Fe.batching===!1||!O.isBatchedMesh&&Fe.batching===!0||O.isBatchedMesh&&Fe.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Fe.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Fe.instancing===!1||!O.isInstancedMesh&&Fe.instancing===!0||O.isSkinnedMesh&&Fe.skinning===!1||!O.isSkinnedMesh&&Fe.skinning===!0||O.isInstancedMesh&&Fe.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Fe.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Fe.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Fe.instancingMorph===!1&&O.morphTexture!==null||Fe.envMap!==xe||G.fog===!0&&Fe.fog!==ne||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==ae.numPlanes||Fe.numIntersection!==ae.numIntersection)||Fe.vertexAlphas!==Oe||Fe.vertexTangents!==Ge||Fe.morphTargets!==Ne||Fe.morphNormals!==at||Fe.morphColors!==St||Fe.toneMapping!==Ot||Fe.morphTargetsCount!==wt)&&(ft=!0):(ft=!0,Fe.__version=G.version);let Fn=Fe.currentProgram;ft===!0&&(Fn=no(G,F,O));let as=!1,On=!1,la=!1;const Ft=Fn.getUniforms(),Xn=Fe.uniforms;if(we.useProgram(Fn.program)&&(as=!0,On=!0,la=!0),G.id!==b&&(b=G.id,On=!0),as||w!==S){we.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Ft.setValue(P,"projectionMatrix",S.projectionMatrix),Ft.setValue(P,"viewMatrix",S.matrixWorldInverse);const Dn=Ft.map.cameraPosition;Dn!==void 0&&Dn.setValue(P,Me.setFromMatrixPosition(S.matrixWorld)),ze.logarithmicDepthBuffer&&Ft.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ft.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),w!==S&&(w=S,On=!0,la=!0)}if(O.isSkinnedMesh){Ft.setOptional(P,O,"bindMatrix"),Ft.setOptional(P,O,"bindMatrixInverse");const wn=O.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),Ft.setValue(P,"boneTexture",wn.boneTexture,Qe))}O.isBatchedMesh&&(Ft.setOptional(P,O,"batchingTexture"),Ft.setValue(P,"batchingTexture",O._matricesTexture,Qe),Ft.setOptional(P,O,"batchingIdTexture"),Ft.setValue(P,"batchingIdTexture",O._indirectTexture,Qe),Ft.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&Ft.setValue(P,"batchingColorTexture",O._colorsTexture,Qe));const qn=z.morphAttributes;if((qn.position!==void 0||qn.normal!==void 0||qn.color!==void 0)&&ie.update(O,z,Fn),(On||Fe.receiveShadow!==O.receiveShadow)&&(Fe.receiveShadow=O.receiveShadow,Ft.setValue(P,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Xn.envMap.value=xe,Xn.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&F.environment!==null&&(Xn.envMapIntensity.value=F.environmentIntensity),On&&(Ft.setValue(P,"toneMappingExposure",y.toneMappingExposure),Fe.needsLights&&L0(Xn,la),ne&&G.fog===!0&&J.refreshFogUniforms(Xn,ne),J.refreshMaterialUniforms(Xn,G,V,se,p.state.transmissionRenderTarget[S.id]),qo.upload(P,Yd(Fe),Xn,Qe)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(qo.upload(P,Yd(Fe),Xn,Qe),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ft.setValue(P,"center",O.center),Ft.setValue(P,"modelViewMatrix",O.modelViewMatrix),Ft.setValue(P,"normalMatrix",O.normalMatrix),Ft.setValue(P,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const wn=G.uniformsGroups;for(let Dn=0,Wl=wn.length;Dn<Wl;Dn++){const yr=wn[Dn];Ke.update(yr,Fn),Ke.bind(yr,Fn)}}return Fn}function L0(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function I0(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(S,F,z){const G=Ee.get(S);G.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Ee.get(S.texture).__webglTexture=F,Ee.get(S.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:z,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,F){const z=Ee.get(S);z.__webglFramebuffer=F,z.__useDefaultFramebuffer=F===void 0};const U0=P.createFramebuffer();this.setRenderTarget=function(S,F=0,z=0){L=S,A=F,D=z;let G=!0,O=null,ne=!1,he=!1;if(S){const xe=Ee.get(S);if(xe.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(P.FRAMEBUFFER,null),G=!1;else if(xe.__webglFramebuffer===void 0)Qe.setupRenderTarget(S);else if(xe.__hasExternalTextures)Qe.rebindTextures(S,Ee.get(S.texture).__webglTexture,Ee.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ne=S.depthTexture;if(xe.__boundDepthTexture!==Ne){if(Ne!==null&&Ee.has(Ne)&&(S.width!==Ne.image.width||S.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Qe.setupDepthRenderbuffer(S)}}const Oe=S.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(he=!0);const Ge=Ee.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ge[F])?O=Ge[F][z]:O=Ge[F],ne=!0):S.samples>0&&Qe.useMultisampledRTT(S)===!1?O=Ee.get(S).__webglMultisampledFramebuffer:Array.isArray(Ge)?O=Ge[z]:O=Ge,I.copy(S.viewport),k.copy(S.scissor),H=S.scissorTest}else I.copy(Ue).multiplyScalar(V).floor(),k.copy(it).multiplyScalar(V).floor(),H=Et;if(z!==0&&(O=U0),we.bindFramebuffer(P.FRAMEBUFFER,O)&&G&&we.drawBuffers(S,O),we.viewport(I),we.scissor(k),we.setScissorTest(H),ne){const xe=Ee.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,xe.__webglTexture,z)}else if(he){const xe=F;for(let Oe=0;Oe<S.textures.length;Oe++){const Ge=Ee.get(S.textures[Oe]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Oe,Ge.__webglTexture,z,xe)}}else if(S!==null&&z!==0){const xe=Ee.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,xe.__webglTexture,z)}b=-1},this.readRenderTargetPixels=function(S,F,z,G,O,ne,he,ye=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Ee.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&he!==void 0&&(xe=xe[he]),xe){we.bindFramebuffer(P.FRAMEBUFFER,xe);try{const Oe=S.textures[ye],Ge=Oe.format,Ne=Oe.type;if(!ze.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-G&&z>=0&&z<=S.height-O&&(S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ye),P.readPixels(F,z,G,O,Pe.convert(Ge),Pe.convert(Ne),ne))}finally{const Oe=L!==null?Ee.get(L).__webglFramebuffer:null;we.bindFramebuffer(P.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(S,F,z,G,O,ne,he,ye=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Ee.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&he!==void 0&&(xe=xe[he]),xe)if(F>=0&&F<=S.width-G&&z>=0&&z<=S.height-O){we.bindFramebuffer(P.FRAMEBUFFER,xe);const Oe=S.textures[ye],Ge=Oe.format,Ne=Oe.type;if(!ze.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,at),P.bufferData(P.PIXEL_PACK_BUFFER,ne.byteLength,P.STREAM_READ),S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ye),P.readPixels(F,z,G,O,Pe.convert(Ge),Pe.convert(Ne),0);const St=L!==null?Ee.get(L).__webglFramebuffer:null;we.bindFramebuffer(P.FRAMEBUFFER,St);const Ot=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Wg(P,Ot,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,at),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ne),P.deleteBuffer(at),P.deleteSync(Ot),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,F=null,z=0){const G=Math.pow(2,-z),O=Math.floor(S.image.width*G),ne=Math.floor(S.image.height*G),he=F!==null?F.x:0,ye=F!==null?F.y:0;Qe.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,z,0,0,he,ye,O,ne),we.unbindTexture()};const N0=P.createFramebuffer(),F0=P.createFramebuffer();this.copyTextureToTexture=function(S,F,z=null,G=null,O=0,ne=null){ne===null&&(O!==0?(Ba("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=O,O=0):ne=0);let he,ye,xe,Oe,Ge,Ne,at,St,Ot;const Pt=S.isCompressedTexture?S.mipmaps[ne]:S.image;if(z!==null)he=z.max.x-z.min.x,ye=z.max.y-z.min.y,xe=z.isBox3?z.max.z-z.min.z:1,Oe=z.min.x,Ge=z.min.y,Ne=z.isBox3?z.min.z:0;else{const qn=Math.pow(2,-O);he=Math.floor(Pt.width*qn),ye=Math.floor(Pt.height*qn),S.isDataArrayTexture?xe=Pt.depth:S.isData3DTexture?xe=Math.floor(Pt.depth*qn):xe=1,Oe=0,Ge=0,Ne=0}G!==null?(at=G.x,St=G.y,Ot=G.z):(at=0,St=0,Ot=0);const wt=Pe.convert(F.format),Fe=Pe.convert(F.type);let Nt;F.isData3DTexture?(Qe.setTexture3D(F,0),Nt=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Qe.setTexture2DArray(F,0),Nt=P.TEXTURE_2D_ARRAY):(Qe.setTexture2D(F,0),Nt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);const ft=P.getParameter(P.UNPACK_ROW_LENGTH),Fn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),as=P.getParameter(P.UNPACK_SKIP_PIXELS),On=P.getParameter(P.UNPACK_SKIP_ROWS),la=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Pt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Pt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Oe),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ge),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ne);const Ft=S.isDataArrayTexture||S.isData3DTexture,Xn=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){const qn=Ee.get(S),wn=Ee.get(F),Dn=Ee.get(qn.__renderTarget),Wl=Ee.get(wn.__renderTarget);we.bindFramebuffer(P.READ_FRAMEBUFFER,Dn.__webglFramebuffer),we.bindFramebuffer(P.DRAW_FRAMEBUFFER,Wl.__webglFramebuffer);for(let yr=0;yr<xe;yr++)Ft&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ee.get(S).__webglTexture,O,Ne+yr),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ee.get(F).__webglTexture,ne,Ot+yr)),P.blitFramebuffer(Oe,Ge,he,ye,at,St,he,ye,P.DEPTH_BUFFER_BIT,P.NEAREST);we.bindFramebuffer(P.READ_FRAMEBUFFER,null),we.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(O!==0||S.isRenderTargetTexture||Ee.has(S)){const qn=Ee.get(S),wn=Ee.get(F);we.bindFramebuffer(P.READ_FRAMEBUFFER,N0),we.bindFramebuffer(P.DRAW_FRAMEBUFFER,F0);for(let Dn=0;Dn<xe;Dn++)Ft?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,qn.__webglTexture,O,Ne+Dn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,qn.__webglTexture,O),Xn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,wn.__webglTexture,ne,Ot+Dn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,wn.__webglTexture,ne),O!==0?P.blitFramebuffer(Oe,Ge,he,ye,at,St,he,ye,P.COLOR_BUFFER_BIT,P.NEAREST):Xn?P.copyTexSubImage3D(Nt,ne,at,St,Ot+Dn,Oe,Ge,he,ye):P.copyTexSubImage2D(Nt,ne,at,St,Oe,Ge,he,ye);we.bindFramebuffer(P.READ_FRAMEBUFFER,null),we.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Xn?S.isDataTexture||S.isData3DTexture?P.texSubImage3D(Nt,ne,at,St,Ot,he,ye,xe,wt,Fe,Pt.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(Nt,ne,at,St,Ot,he,ye,xe,wt,Pt.data):P.texSubImage3D(Nt,ne,at,St,Ot,he,ye,xe,wt,Fe,Pt):S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ne,at,St,he,ye,wt,Fe,Pt.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ne,at,St,Pt.width,Pt.height,wt,Pt.data):P.texSubImage2D(P.TEXTURE_2D,ne,at,St,he,ye,wt,Fe,Pt);P.pixelStorei(P.UNPACK_ROW_LENGTH,ft),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Fn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,as),P.pixelStorei(P.UNPACK_SKIP_ROWS,On),P.pixelStorei(P.UNPACK_SKIP_IMAGES,la),ne===0&&F.generateMipmaps&&P.generateMipmap(Nt),we.unbindTexture()},this.initRenderTarget=function(S){Ee.get(S).__webglFramebuffer===void 0&&Qe.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Qe.setTextureCube(S,0):S.isData3DTexture?Qe.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Qe.setTexture2DArray(S,0):Qe.setTexture2D(S,0),we.unbindTexture()},this.resetState=function(){A=0,D=0,L=null,we.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}}const xl={R:9},He={maxHp:5,moveSpeed:4.2,waterSlow:.45,dashDist:3.4,dashTime:.2,iframe:.15,tapDashMin:2,tapDashMax:5.5,lockRange:7,lockStunBonus:1.4,lockStunStick:.45,lockStick:.2,stamMax:3,stamRegen:.8,guardHold:.21,parryTime:.45,perfectEarly:.25,perfectLate:.15,parryArc:.36,jumpTime:.6,hurtInvuln:1.2,knockback:1.2},Ct={ink:10.5,min:50,step:.3,baseV:18,gUp:80,gDown:160,vMin:4,vMax:48,charge:.4,start:10,lakeCost:.35,dmg:4,hitR:.8,blastR:3.2,blastDmg:6},bi={hit:1,kill:0,parry:10,perfect:30,evade:20,jumpRing:8,crystal:6,crystalPay:5,ore:3},Ae={counts:{ore:2,bomb:2},max:6,oreHp:3,oreR:.6,bombR:.5,heroR:.45,dashPad:.65,shotPad:.12,oreDrops:2,oreCrystalCap:6,dropMin:1.8,dropMax:2.2,dropTime:.35,dropHeight:1,pickupDelay:.35,oreGlow:1.1,oreTwinkleGap:2.2,sparkSize:.12,dangerPulseHz:.7,dangerPulseSize:.3,spawnMin:3.5,spawnMax:8,spawnFallbackMin:2.8,spawnFallbackMax:11,spacing:.7,groundMin:.08,groundMax:.85,mountainGap:.15,placeTries:1600,fuse:1,blastR:2,blastDmg:4,chill:2.2,stun:2,burnR:1.6,burnTime:3,flashTime:.14,squash:.18,recover:14,fuseHz:24,fuseFxGap:.1,blastShake:.85,hintTime:3,hintDelay:1.2,hintAfterWave:3.5,hintGap:.4},ih={every:2,amount:1},gn={grunt:{hp:3,r:.45,speed:1.6,pref:2.1,range:3.1,pts:100,kb:5,whirlTime:2.2,whirlSpeed:1.7,whirlR:.95,whirlDizzy:1},brute:{hp:9,r:.85,speed:.85,pref:1.9,range:3.6,pts:400,kb:1.6,swingR:2.9,swingArc:.6},boulder:{hp:6,r:.6,speed:1.15,pref:3.6,range:5,pts:300,kb:2.2,rollSpeed:12,rollLen:3.4,rolls:3,followWarn:[.5,.38],armor:.34,dizzy:1.8},jelly:{hp:4,r:.55,speed:.7,pref:4,range:7.5,pts:250,kb:1,aquatic:!0,diveRange:9,pulseRange:3,mortarGap:.3},archer:{hp:2.5,r:.42,speed:1.5,pref:6,range:8.5,pts:200,kb:5,shotSpeed:11,shotLen:11,flee:3},shell:{hp:6,r:.6,speed:1,pref:1.8,range:2.9,pts:350,kb:1.4,turn:1.5,front:.35,lineLen:2.6,lineW:.85},hopper:{hp:3.5,r:.48,speed:1.2,pref:4,range:6.5,pts:250,kb:3,hops:2,hopR:1.25},shroom:{hp:4,r:.55,speed:.25,pref:5.5,range:9,pts:300,kb:2,spores:3,heal:1.5,healR:3.5},bee:{hp:1,r:.3,speed:2.6,pref:1.5,range:3,pts:60,kb:6,lineLen:2.6,lineW:.4,fly:!0},splitter:{hp:5,r:.55,speed:1.1,pref:2.4,range:4.2,pts:300,kb:2.5,hops:1,hopR:1.1,split:"blobling"},boss:{hp:48,r:1.35,speed:.75,pref:2.6,range:5.2,pts:3e3,kb:.5,rollSpeed:11}},zn=(n,e)=>({...gn[n],base:n,...e});Object.assign(gn,{frostGrunt:zn("grunt",{hp:3.5,chill:!0,pal:[7325934,1063514,2973568]}),frostBrute:zn("brute",{hp:10,doubleRing:!0,pal:[8238824,1324384,13625855]}),frostArcher:zn("archer",{hp:3,volley:3,pal:[10474734,2973568]}),sandGrunt:zn("grunt",{hp:3,burrow:!0,pal:[14262860,4860422,8016420]}),sandBoulder:zn("boulder",{hp:5,r:.52,rolls:4,rollSpeed:14,followWarn:[.5,.42,.36],pal:[13015648,2759176]}),lavaGrunt:zn("grunt",{hp:3,blast:!0,pal:[16738858,8001536,3807760]}),lavaBrute:zn("brute",{hp:11,burnSlam:!0,pal:[4864578,8003584,16751164]}),magmaJelly:zn("jelly",{hp:6,r:.65,pal:[16742960,16726544]}),blobling:zn("splitter",{hp:1.5,r:.32,speed:1.9,pref:1.4,range:2.6,pts:80,kb:5,split:null,model:"blobling",lineLen:2.2,lineW:.4}),rockKing:zn("boss",{hp:72,model:"rock"}),frostQueen:zn("boss",{hp:105,r:1.15,model:"queen",pref:3.4,range:7}),sandWyrm:zn("boss",{hp:125,r:1.2,model:"wyrm",speed:.9,range:8}),lavaTitan:zn("boss",{hp:155,r:1.6,model:"titan",speed:.6,range:8})});const g1={grunt:"長矛兵",brute:"巨魔",boulder:"滾石",jelly:"水母",archer:"弓手",shell:"盾甲蟲",hopper:"跳跳蛙",shroom:"蘑菇法師",bee:"蜂群",splitter:"分裂泥球"},zr={minTier:3,base:.03,perTier:.02,maxChance:.22,perWave:[1,2],twoFrom:7,skip:["bee","splitter"]},Bi={iceGrip:1.7,spikeGrip:8,burnDelay:.3,stormCalm:13,stormWarn:2.5,stormLen:8},Qt={warnBase:1.2,warnMin:.7,warnStep:.06,cdMin:1.2,cdRand:.8,heavyCdMin:1.8,heavyCdRand:1,attackStartGap:.45,impactGap:.5,counterNormal:.4,counterPerfect:.8,stunPerfect:2.6,stunNormal:0,hitstop:.05,killHitstop:.06,grace:2.2,comboTime:3},me=N,Nn=Ei,qi=new me(0,1,0),ge=xl.R,ee=n=>document.getElementById(n),$t=(n,e,t)=>Math.max(e,Math.min(t,n));function cd(n){return()=>(n=n*16807%2147483647)/2147483647}const Gt=(n=Math.random)=>{const e=n()*2-1,t=n()*Math.PI*2,i=Math.sqrt(1-e*e);return new me(i*Math.cos(t),e,i*Math.sin(t))},ct=(n,e)=>e.clone().addScaledVector(n,-e.dot(n)),Je=(n,e,t)=>n.clone().multiplyScalar(ge).addScaledVector(e,t).normalize(),qt=(n,e)=>ct(n,new me().subVectors(e,n)).normalize();function ts(n){const e=ct(n,Math.abs(n.y)<.9?qi:new me(1,0,0)).normalize();return[e,new me().crossVectors(n,e)]}const Vp={grass:{id:"grass",seed:20261016,mountains:7,lakes:4,mtn:"peak",liquid:"water",tree:"pine",trees:110,rocks:42,flowers:150,ground:{bed:"#c2a46d",shore:"#ecd69c",low:"#7bd16a",mid:"#5bb85e",rock:"#8b8f9f",cap:"#f4f7ff"},liquidColor:3844336,leaf:3115598,trunk:8016434,rock:10132651,flower:[[1,1,1],[1,.8,.25]],sky:725040,atmo:6273279,hemi:[14085119,3812437,2.3],sun:[16773852,3.2]},ice:{id:"ice",seed:77123,mountains:7,lakes:5,lakeW:.1,lanes:5,mtn:"peak",liquid:"ice",tree:"snowPine",trees:90,rocks:50,flowers:120,ground:{bed:"#8fb8d8",shore:"#dbeaf6",low:"#eef5fb",mid:"#d6e6f4",rock:"#8798b4",cap:"#ffffff"},liquidColor:11134207,leaf:13099756,trunk:6123136,rock:10471142,flower:[[.6,.9,1],[1,1,1]],sky:661560,atmo:10477823,hemi:[15004927,4280956,2.5],sun:[15135487,3]},desert:{id:"desert",seed:40917,mountains:6,lakes:3,lakeW:-.1,mtn:"mesa",dunes:.16,liquid:"water",tree:"cactus",trees:70,rocks:60,flowers:60,storm:!0,ground:{bed:"#b78e55",shore:"#f2dca2",low:"#eac67c",mid:"#deb066",rock:"#b9734a",cap:"#d68f58"},liquidColor:3655360,leaf:5216858,trunk:4160070,rock:12618332,flower:[[.95,.4,.55],[1,.85,.3]],sky:1970736,atmo:16761466,hemi:[16773074,6963496,2.4],sun:[16770744,3.4]},volcano:{id:"volcano",seed:6155,mountains:6,lakes:3,lakeW:-.04,mtn:"crater",rivers:2,liquid:"lava",tree:"charred",trees:80,rocks:70,flowers:110,ground:{bed:"#2a1a18",shore:"#3a2b2d",low:"#4e4145",mid:"#3d3238",rock:"#2d262c",cap:"#ff7a30"},liquidColor:16734750,leaf:2761254,trunk:1840664,rock:3813944,flower:[[1,.45,.12],[1,.85,.3]],sky:1706e3,atmo:16738874,hemi:[16763048,4855840,2.1],sun:[16758928,2.9]}};let Rt=Vp.grass,Jt=cd(Rt.seed);const oi=[];function rh(n,e,t){for(let i=0;i<e;i++){let r,s=0;do r=Gt(Jt),s++;while(s<60&&oi.some(o=>Ys(o,r)<o.w+.45));const a=Object.assign({type:n,c:r},t());n==="m"&&Rt.lanes&&oi.some(o=>o.type==="lane"&&Ys(o,r)<o.w+a.w+.1)||oi.push(a)}}function Wp(n,e=0){const t=Vp[n];Rt=e?{...t,variant:e,seed:t.seed+e*7919,lakes:Math.max(2,t.lakes+e%3-1),mountains:Math.max(4,t.mountains+(e+1)%3-1)}:t,Jt=cd(Rt.seed),oi.length=0;for(let i=0;i<(Rt.lanes||0);i++)_1();rh("m",Rt.mountains,()=>({h:1.6+Jt()*1.2,w:.27+Jt()*.12})),rh("l",Rt.lakes,()=>({h:-1.2,w:.3+(Rt.lakeW||0)+Jt()*.14}));for(let i=0;i<(Rt.rivers||0);i++){const r=Gt(Jt),[s,a]=ts(r);oi.push({type:"r",c:r,e1:s,e2:a,w:.085,h:1.3,ph:Jt()*6.28,gaps:3})}}function _1(){for(let n=0;n<80;n++){const e=Gt(Jt),t=ct(e,Gt(Jt)).normalize(),i=e.clone().cross(t),r={type:"lane",c:e,t,n:i,L:.5+Jt()*.3,w:.13+Jt()*.05,h:-1.1,bend:.04+Jt()*.06,ph:Jt()*6.28};let s=!0;for(let a=-4;a<=4&&s;a++){const o=x1(r,r.L*a/4);s=oi.every(l=>l.type==="r"||Ys(l,o)>l.w+r.w+.12)}if(s){oi.push(r);return}}}const Xp=(n,e)=>n.bend*Math.sin(e*4+n.ph);function x1(n,e){const t=Xp(n,e);return n.c.clone().multiplyScalar(Math.cos(e)*Math.cos(t)).addScaledVector(n.t,Math.sin(e)*Math.cos(t)).addScaledVector(n.n,Math.sin(t)).normalize()}function Ys(n,e){if(n.type!=="lane")return Math.acos($t(e.dot(n.c),-1,1));const t=Math.atan2(e.dot(n.t),e.dot(n.c)),i=Math.asin($t(e.dot(n.n),-1,1))-Xp(n,$t(t,-n.L,n.L)),r=Math.max(0,Math.abs(t)-n.L);return Math.abs(t)>Math.PI/2?Math.PI:Math.hypot(i,r)}Wp("grass");function v1(n,e){return Rt.mtn==="mesa"?n.h*.62*Math.min(1,(1-e)*2.4):Rt.mtn==="crater"?n.h*(1-e)**1.3-(e<.24?n.h*.55*(1-e/.24)**2:0):n.h*(1-e)**1.7}function M1(n,e){const t=n.dot(e.e1),i=n.dot(e.e2),r=Math.atan2(i,t),s=n.dot(e.c)+.09*Math.sin(r*5+e.ph);return Math.abs(s)>=e.w?0:-e.h*(1-(s/e.w)**2)*$t(Math.sin(r*e.gaps+e.ph)*3+2.1,0,1)}function on(n){let e=.3+.24*Math.sin(n.x*3.1+1.3)*Math.sin(n.y*2.7+.4)*Math.cos(n.z*3.4+.9);Rt.dunes&&(e+=Rt.dunes*Math.sin(n.x*8+n.z*5+1)*Math.sin(n.y*7-n.z*3));for(const t of oi){if(t.type==="r"){e+=M1(n,t);continue}const i=Ys(t,n);if(i>=t.w)continue;const r=i/t.w;e+=t.type==="m"?v1(t,r):t.type==="lane"?t.h*(1-r*r)**.6:t.h*(1-r*r)}return e}const ln=n=>Math.max(0,on(n)),Yt=n=>n.clone().multiplyScalar(ge+ln(n)),qp=n=>on(n)<0,An=n=>on(n)<0&&Rt.liquid!=="ice",Au=n=>on(n)<0?Rt.liquid:"ground";function $p(n,e,t,i){const[r,s]=ts(n);for(let a=e;a<=t;a+=.05)for(let o=0;o<24;o++){const l=o/24*Math.PI*2,c=n.clone().multiplyScalar(Math.cos(a)).addScaledVector(r,Math.sin(a)*Math.cos(l)).addScaledVector(s,Math.sin(a)*Math.sin(l));if(i(on(c)))return c}return null}const Yp=(n,e=.3,t=Math.PI)=>$p(n,e,t,i=>i<-.08),y1=(n,e=.05,t=Math.PI)=>$p(n,e,t,i=>i>.08),Ru=(n,e)=>(ln(Je(n,e,.3))-ln(n))/.3;class S1{constructor(){this.fromPosition=new N,this.fromRotation=new Ei,this.elapsed=0,this.duration=0}begin(e,t,i){this.fromPosition.copy(e),this.fromRotation.copy(t),this.elapsed=0,this.duration=i}get ready(){return this.elapsed>=this.duration}step(e,t,i,r,s){this.elapsed=Math.min(this.duration,this.elapsed+Math.max(0,e));const a=this.duration>0?this.elapsed/this.duration:1,o=a*a*(3-2*a);return t.lerpVectors(this.fromPosition,r,o),i.slerpQuaternions(this.fromRotation,s,o),o}}const $o=matchMedia("(pointer: coarse)").matches,rn={level:$o?1:2,pixelRatio:Math.min(devicePixelRatio,$o?1.75:2),fx:$o?.7:1},Ti=new m1({antialias:!0,powerPreference:"high-performance"});Ti.setPixelRatio(rn.pixelRatio);Ti.shadowMap.enabled=!0;Ti.shadowMap.type=Xu;document.body.prepend(Ti.domElement);const Un=new m_;Un.background=new Se(725040);const qe=new Kn(40,1,.1,600),lr=new me(0,.08,1).normalize(),Ve=new Ye;Un.add(Ve);const Yo=new A_(14085119,3812437,2.3);Un.add(Yo);const Ln=new P_(16773852,3.2);Ln.position.set(-9,-5,24);Ln.castShadow=!0;Ln.shadow.mapSize.setScalar($o?1024:2048);Object.assign(Ln.shadow.camera,{left:-14,right:14,top:14,bottom:-14,near:1,far:70});Ln.shadow.bias=-6e-4;Ln.shadow.normalBias=.04;Un.add(Ln);const za=new Ye;Un.add(za);{const n=new Kt,e=[],t=[],i=new Se,r=new me(.3,1,-.2).normalize();for(let s=0;s<2200;s++){let a=Gt();s<900&&a.addScaledVector(r,-a.dot(r)*.85).normalize(),a.multiplyScalar(260+Math.random()*120),e.push(a.x,a.y,a.z),i.setHSL(.6+Math.random()*.15,.5,.65+Math.random()*.3),t.push(i.r,i.g,i.b)}n.setAttribute("position",new nt(e,3)),n.setAttribute("color",new nt(t,3)),za.add(new b_(n,new Ip({size:1.3,vertexColors:!0,transparent:!0,opacity:.85,sizeAttenuation:!0,depthWrite:!1,fog:!1})))}const Os=new Ye;Un.add(Os);const Cu=[];{const n=(u,d=0)=>new pn({color:u,emissive:d,flatShading:!0,roughness:.9,fog:!1}),e=(u,d,f)=>{const h=new At(u,3),_=h.attributes.position,x=[],g=new Se;for(let p=0;p<_.count;p++){const T=_.getY(p)/u;g.set(d[Math.floor((T+1)*3.5+Math.sin(_.getX(p)*.8)*.3)%d.length]),x.push(g.r,g.g,g.b)}return h.setAttribute("color",new nt(x,3)),new K(h,new pn({vertexColors:!0,emissive:f,flatShading:!0,roughness:.9,fog:!1}))},t=(u,d,f,h=.55)=>new K(new pr(u,d,48),new xt({color:f,transparent:!0,opacity:h,side:sn,fog:!1,depthWrite:!1})),i=(u,d,f)=>(f.userData.uv=[u,d],f.userData.spin=new me(0,.04+Math.random()*.05,0),Os.add(f),Cu.push(f),f);i(.08,.55,new K(new At(4.2,1),n(7307192,1055296)));const r=new Ye;r.add(new K(new At(2.6,1),n(5222026,731688)));const s=t(3.6,4.8,14207487);s.rotation.set(1.2,.3,0),r.add(s),i(.34,.62,r),i(.62,.78,e(7,[14263915,11893322,15782048,11037244,15253642],2758152)),i(.5,.35,new K(new At(1.8,1),n(14178106,3804166)));const a=new Ye;a.add(new K(new At(3,1),n(10476799,1192008)));const o=t(3.9,4.3,16777215,.4),l=t(4.7,5.2,10476799,.3);o.rotation.set(.4,.9,0),l.rotation.set(.4,.9,0),a.add(o,l),i(.84,.5,a),i(.22,.15,e(5,[8022744,10128112,5917368,12628223],1313840)),i(.72,.1,new K(new At(2.2,1),n(15257712,3813384))),i(.95,.85,new K(new At(1.4,1),n(11580616,1316382)));const c=new Ye;c.add(new K(new At(1.2,1),new xt({color:16773824,fog:!1}))),c.add(new K(new At(2.8,1),new xt({color:16760944,transparent:!0,opacity:.18,blending:dr,depthWrite:!1,fog:!1}))),i(.4,.9,c);for(let u=0;u<40;u++){const d=new K(new $r(.6+Math.random()*1.4,0),n(8224658));d.position.copy(Gt()).multiplyScalar(120+Math.random()*40),d.userData.spin=new me(Math.random(),Math.random(),Math.random()).multiplyScalar(.3),za.add(d)}}const jp=new K(new pt(ge+3.2,48,32),new xt({color:6273279,transparent:!0,opacity:.12,side:Cn,blending:dr,depthWrite:!1,fog:!1}));Un.add(jp);Un.fog=new id(14200944,400,600);const Pu=new Se,b1=new Se(13212252);let Du=14;function w1(n){Pu.set(n.sky),Un.background.copy(Pu),jp.material.color.set(n.atmo),Yo.color.set(n.hemi[0]),Yo.groundColor.set(n.hemi[1]),Yo.intensity=n.hemi[2],Ln.color.set(n.sun[0]),Ln.intensity=n.sun[1]}function Kp(n){Un.fog.near=n>0?Du+12*(1-n)-3.5:400,Un.fog.far=n>0?Du+40*(1-n)+2.5:600,Un.background.copy(Pu).lerp(b1,n)}const Sc=.2,sh=new Nn,E1=new me(.2,1,.1).normalize(),ah=new Nn,bc=new Nn,oh=new Nn,lh=new Nn,wc=new me,Do=new me,xa={x:0,y:0};let ch=0;const uh=(n,e)=>(n%e+e)%e;function T1(n){for(const r of[...za.children,...Cu])r.userData.spin&&(r.rotation.x+=r.userData.spin.x*n,r.rotation.y+=r.userData.spin.y*n);qe.getWorldDirection(wc),bc.copy(Ve.quaternion).multiply(ah.invert()),ah.copy(Ve.quaternion),Do.copy(wc).applyQuaternion(bc).sub(wc).applyQuaternion(qe.quaternion.clone().invert()),Do.lengthSq()<.04&&(xa.x+=Do.x*100*Sc,xa.y+=Do.y*100*Sc,oh.identity().slerp(bc,Sc),lh.premultiply(oh).normalize()),xa.x+=n*.1,ch+=n*.0012,sh.setFromAxisAngle(E1,ch),za.quaternion.copy(lh).multiply(sh);const e=2*Da.x+60,t=2*Da.y+34,i=Da.y*.45;for(const r of Cu)r.position.set(uh(r.userData.uv[0]*e+xa.x,e)-e/2,uh(r.userData.uv[1]*t+xa.y,t)-t/2+i,-100)}const Zn=new me,Zp=new me,Jp=new Nn;let js=!1;const Ga=new S1,Ec=new me,dh=new Nn,rl=new Nn,Lu=new Nn,ud=()=>js&&Ga.ready;function A1(n){rl.copy(Ve.quaternion);const e=n.clone().applyQuaternion(Ve.quaternion).normalize();Lu.setFromUnitVectors(e,lr).multiply(rl),js=!0,Ga.begin(Zn,qe.quaternion,matchMedia("(prefers-reduced-motion: reduce)").matches?0:.38)}function Qp(n,e=0){n!==js&&(n&&(rl.copy(Ve.quaternion),Lu.copy(Ve.quaternion)),js=n,Ga.begin(Zn,qe.quaternion,matchMedia("(prefers-reduced-motion: reduce)").matches?0:n?.38:.32));const t=qe.aspect<1?1.25/Math.sqrt(qe.aspect):1;Ec.copy(lr).multiplyScalar(ge+.3+18*t);const i=qe.quaternion.clone();qe.position.copy(Ec),qe.lookAt(lr.clone().multiplyScalar(ge+.3)),dh.copy(qe.quaternion),qe.quaternion.copy(i);const r=Ga.step(e,Zn,qe.quaternion,n?Ec:Zp,n?dh:Jp);n&&Ve.quaternion.slerpQuaternions(rl,Lu,r),qe.position.copy(Zn),qe.updateMatrixWorld()}const Da={x:50,y:36},ri={kick:new me,punch:0};function dd(n,e){const t=n.clone().applyQuaternion(Ve.quaternion),i=new me(1,0,0).applyQuaternion(qe.quaternion),r=new me(0,1,0).applyQuaternion(qe.quaternion);ri.kick.x=tl.clamp(ri.kick.x+t.dot(i)*e,-.5,.5),ri.kick.y=tl.clamp(ri.kick.y+t.dot(r)*e,-.5,.5)}const em=n=>{ri.punch=Math.max(ri.punch,n)};function fd(){const n=Zn.clone(),e=qe.quaternion.clone(),t=innerWidth,i=innerHeight;Ti.setSize(t,i),qe.aspect=t/i;const r=qe.aspect<1?1.25/Math.sqrt(qe.aspect):1,s=lr.clone().multiplyScalar(ge+.3),a=ct(lr,new me(0,-1,0)).normalize();Zn.copy(s).addScaledVector(lr,10.5*r).addScaledVector(a,7*r),qe.position.copy(Zn),qe.lookAt(s.clone().addScaledVector(a,-2)),qe.updateProjectionMatrix(),Du=Zn.distanceTo(s),Zp.copy(Zn),Jp.copy(qe.quaternion),(js||!Ga.ready)&&(Zn.copy(n),qe.quaternion.copy(e),Qp(js)),Os.position.copy(qe.position),Os.quaternion.copy(qe.quaternion);const o=100*Math.tan(tl.degToRad(qe.fov/2)),l=o*qe.aspect;Da.x=l,Da.y=o;for(const c of Os.children)c.userData.at&&c.position.set(c.userData.at[0]*l,c.userData.at[1]*o,-100)}addEventListener("resize",fd);fd();const fh=new Nn,hh=new Nn;function R1(n,e,t){const i=n.clone().applyQuaternion(Ve.quaternion).normalize();fh.setFromUnitVectors(i,lr),hh.identity().slerp(fh,1-Math.exp(-e*t)),Ve.quaternion.premultiply(hh)}const hd=n=>n.applyQuaternion(Ve.quaternion.clone().invert());let Lo=0,Tc=0;function C1(n){if(Lo+=n,Tc++,Lo<4)return;const e=Tc/Lo;Lo=0,Tc=0,e<48&&rn.pixelRatio>1?(rn.pixelRatio=Math.max(1,rn.pixelRatio-.5),Ti.setPixelRatio(rn.pixelRatio),fd()):e<45&&rn.fx>.35?rn.fx=Math.max(.35,rn.fx-.3):e<40&&Ln.shadow.mapSize.x>512&&(Ln.shadow.mapSize.setScalar(Ln.shadow.mapSize.x/2),Ln.shadow.map?.dispose(),Ln.shadow.map=null)}function Wi(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},a={},o=n[0].morphTargetsRelative,l=new Kt;let c=0;for(let u=0;u<n.length;++u){const d=n[u];let f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const h in d.attributes){if(!i.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;s[h]===void 0&&(s[h]=[]),s[h].push(d.attributes[h]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const h in d.morphAttributes){if(!r.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[h]===void 0&&(a[h]=[]),a[h].push(d.morphAttributes[h])}if(e){let h;if(t)h=d.index.count;else if(d.attributes.position!==void 0)h=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,h,u),c+=h}}if(t){let u=0;const d=[];for(let f=0;f<n.length;++f){const h=n[f].index;for(let _=0;_<h.count;++_)d.push(h.getX(_)+u);u+=n[f].attributes.position.count}l.setIndex(d)}for(const u in s){const d=ph(s[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(const u in a){const d=a[u][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<d;++f){const h=[];for(let x=0;x<a[u].length;++x)h.push(a[u][x][f]);const _=ph(h);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(_)}}return l}function ph(n){let e,t,i,r=-1,s=0;for(let c=0;c<n.length;++c){const u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const a=new e(s),o=new Pn(a,t,i);let l=0;for(let c=0;c<n.length;++c){const u=n[c];if(u.isInterleavedBufferAttribute){const d=l/t;for(let f=0,h=u.count;f<h;f++)for(let _=0;_<t;_++){const x=u.getComponent(f,_);o.setComponent(f+d,_,x)}}else a.set(u.array,l);l+=u.count*t}return r!==void 0&&(o.gpuType=r),o}const Yr=new Ye;Ve.add(Yr);const pd=[],sl=[],md=[],P1=(n,e)=>{for(const t of md)t.setMatrixAt(n,e),t.instanceMatrix.needsUpdate=!0};let al=null;function D1(n){const e=new At(1,rn.level>1?38:30),t=e.attributes.position,i=[],r=new Se,s=[],a=n.ground;for(let d=0;d<t.count;d++){const f=new me().fromBufferAttribute(t,d).normalize(),h=on(f);s.push(h);const _=ge+(h<0?h-.2:h);t.setXYZ(d,f.x*_,f.y*_,f.z*_)}for(let d=0;d<t.count;d+=3){const f=(s[d]+s[d+1]+s[d+2])/3,h=Math.sin(d*12.9898)*43758.5%1*.06;f<0?r.set(a.bed).offsetHSL(0,0,-.12+f*.1):f<.12?r.set(a.shore):f<1.05?r.set(f<.5?a.low:a.mid):f<1.85?r.set(a.rock):r.set(a.cap),r.offsetHSL(0,0,h-.03);for(let _=0;_<3;_++)i.push(r.r,r.g,r.b)}e.setAttribute("color",new nt(i,3)),e.computeVertexNormals();const o=new K(e,new pn({vertexColors:!0,flatShading:!0,roughness:.92}));o.castShadow=o.receiveShadow=!0,Yr.add(o),sl.push(o);const l=n.liquid==="lava",c=n.liquid==="ice";al=new pn({color:n.liquidColor,transparent:!l,opacity:c?.95:.82,roughness:c?.3:.15,metalness:.1,flatShading:!0,emissive:l?16726536:0,emissiveIntensity:l?1.2:0});const u=new K(new At(ge,rn.level>1?22:16),al);u.receiveShadow=!0,Yr.add(u),sl.push(u)}function ya(n,e,t,i,r,s){const a=new na(n,e,t),o=new dt,l=new Nn,c=new Nn;let u=0;for(let d=0;d<t*40&&u<t;d++){const f=Gt(Jt),h=on(f);if(!i(h))continue;const _=r();l.setFromUnitVectors(qi,f).multiply(c.setFromAxisAngle(qi,Jt()*6.28));const x=f.clone().multiplyScalar(ge+Math.max(h,0)-.05);o.compose(x,l,new me(_,_,_)),a.setMatrixAt(u,o),s?.(f,x,_,u,l.clone()),u++}return a.count=u,a.castShadow=!0,a.receiveShadow=!0,Yr.add(a),a}const tm={pine(){const n=new an(.3,.5,6);n.translate(0,.45,0);const e=new an(.22,.42,6);e.translate(0,.74,0);const t=new Xt(.05,.08,.26,5);return t.translate(0,.13,0),{leaf:Wi([n,e]),trunk:t}},snowPine(){return tm.pine()},cactus(){const n=new Xt(.09,.11,.8,6);n.translate(0,.4,0);const e=(i,r,s)=>{const a=new Xt(.05,.055,.3,5);return a.translate(0,.15,0),a.rotateZ(s),a.translate(i,r,0),a},t=new Xt(.11,.12,.06,6);return t.translate(0,.03,0),{leaf:Wi([n,e(.08,.38,-1.1),e(-.08,.5,1),e(.32,.5,0),e(-.31,.6,0)]),trunk:t}},charred(){const n=(t,i,r)=>{const s=new an(.03,r,4);return s.translate(0,r/2,0),s.rotateZ(i),s.translate(0,t,0),s},e=new Xt(.03,.09,.75,5);return e.translate(0,.37,0),{leaf:Wi([n(.4,-.8,.4),n(.5,.9,.34),n(.6,-.5,.28),n(.25,1.1,.3)]),trunk:e}}};function L1(n){const{leaf:e,trunk:t}=tm[n.tree](),i=ya(e,new pn({color:n.leaf,flatShading:!0,roughness:.8}),n.trees,a=>a>=.15&&a<=1,()=>.75+Jt()*.7,(a,o,l,c,u)=>pd.push({d:a.clone(),p:o,s:l,i:c,q:u,tilt:0,tv:0,axis:new me(1,0,0)})),r=new na(t,new pn({color:n.trunk,flatShading:!0}),n.trees),s=new dt;for(let a=0;a<i.count;a++)i.getMatrixAt(a,s),r.setMatrixAt(a,s);r.count=i.count,r.castShadow=!0,Yr.add(r),md.push(i,r)}function I1(n,e="day"){const t=n.id==="ice"?new an(.14,.55,5):new $r(.22,0);n.id==="ice"&&t.translate(0,.22,0),ya(t,new pn({color:n.rock,flatShading:!0,roughness:n.id==="ice"?.25:.95}),n.rocks,u=>u>.02&&u<1.4,()=>.6+Jt()*1.3);const i=new tn(.06,0);i.scale(1,.4,1),i.translate(0,.06,0);const r=new tn(.03,0);r.translate(0,.09,0);const s=i.attributes.position.count,a=r.attributes.position.count,[o,l]=n.flower;i.setAttribute("color",new nt(new Array(s).fill(0).flatMap(()=>o),3)),r.setAttribute("color",new nt(new Array(a).fill(0).flatMap(()=>l),3));const c=ya(Wi([i,r]),new pn({vertexColors:!0,flatShading:!0,emissive:n.liquid==="lava"?16730640:0,emissiveIntensity:.8}),n.flowers,u=>u>.14&&u<.9,()=>.8+Jt()*.6);if(c.castShadow=!1,n.id==="desert"&&e==="night"&&(c.material.emissive.set(16734880),c.material.emissiveIntensity=.9),n.id==="grass"&&e==="night"){const u=new pt(.09,7,4,0,Math.PI*2,0,Math.PI*.5);u.translate(0,.1,0);const d=new Xt(.025,.035,.11,5);d.translate(0,.05,0);const f=Wi([u,d]);ya(f,new pn({color:8057087,emissive:2808063,emissiveIntensity:1.6,flatShading:!0}),60,h=>h>.12&&h<.8,()=>.8+Jt()*.9).castShadow=!1}if(n.id==="desert"){const u=new Xt(.035,.035,.5,5);u.rotateZ(Math.PI/2),u.translate(0,.04,0);const d=new pt(.06,5,4);d.translate(.25,.04,0);const f=d.clone();f.translate(-.5,0,0);const h=new At(.14,0);h.scale(1,.8,1.2),h.translate(.5,.08,.2),ya(Wi([u,d,f,h].map(_=>_.index?_.toNonIndexed():_)),new pn({color:15919312,flatShading:!0,roughness:.9}),16,_=>_>.08&&_<.9,()=>.7+Jt()*.6)}}const U1={day:n=>n,dusk:n=>({...n,sky:Ii(n.sky,3807288,.6),atmo:Ii(n.atmo,16747098,.5),hemi:[Ii(n.hemi[0],16758928,.45),n.hemi[1],n.hemi[2]*.9],sun:[Ii(n.sun[0],16751194,.55),n.sun[1]*.9]}),night:n=>({...n,sky:Ii(n.sky,132110,.6),atmo:Ii(n.atmo,4872959,.45),hemi:[Ii(n.hemi[0],9085183,.5),Ii(n.hemi[1],1052720,.5),n.hemi[2]*.6],sun:[Ii(n.sun[0],11057407,.6),n.sun[1]*.5]})},mh=["day","dusk","day","night","day","dusk","night","dusk"];function Ii(n,e,t){return new Se(n).lerp(new Se(e),t).getHex()}const N1=n=>mh[n%mh.length];let Wt={id:null,variant:0};function nm(n,e=0,t="day"){Wt={id:n,variant:e,light:t},Yr.traverse(r=>{r.isMesh&&(r.geometry.dispose(),r.material.dispose(),r.dispose?.())}),Yr.clear(),sl.length=0,pd.length=0,md.length=0,Wp(n,e);const i=Rt;w1(U1[t](i)),D1(i),L1(i),I1(i,t)}function F1(n){Rt.liquid==="lava"&&al&&(al.emissiveIntensity=(1.15+Math.sin(n*2.2)*.3)*(Wt.light==="night"?1.45:1))}nm("grass");const m={state:"title",mode:"play",wave:0,score:0,graceT:0,waveClearing:!1,endless:!1,ts:1,hitstop:0,shake:0,slowT:0,combo:0,comboT:0,bestCombo:0,ult:0,stamina:0,enemies:[],warnings:[],crystals:[],crystalT:6,shots:[],hazards:[],props:[],oreCrystals:0,propOrigin:null,level:null,waves:[],tier:1,hpMul:1,storm:0,runCrystals:0,passives:new Set,ultKind:"line",undyingUsed:!1,attackStartT:0,counterT:0,attackFocus:null,tut:null,runTime:0,hurtCount:0,boss:null,runId:0,move:{sx:0,sy:0,m:0}};let La=[];const ns=(n,e)=>{La.push({t:n,fn:e})};function O1(n){if(!La.length)return;const e=[];La=La.filter(t=>(t.t-=n)>0||(e.push(t),!1)),e.forEach(t=>t.fn())}const im=()=>{La=[]},Sa=new Map,Bt=(n,e)=>(Sa.has(n)||Sa.set(n,new Set),Sa.get(n).add(e),()=>Sa.get(n).delete(e)),jt=(n,e)=>Sa.get(n)?.forEach(t=>t(e)),rm={ult:{id:"ultBtn",label:"大招",icon:"✦",color:"#ffcc4d"},health:{id:"lives",label:"生命",icon:"♥",color:"#ff8898"},stamina:{id:"stam",label:"體力",icon:"◆",color:"#49e6ff"}},Ha=new Map,ba=new Map,Ks=new Set;let ol=-1,Fi;const k1=n=>n<.01?"<0.01":Number(n.toFixed(2)).toString();function sm(){Ha.clear(),ba.clear();for(const n of Ks)n.getAnimations().forEach(e=>e.cancel()),n.remove();Ks.clear()}Bt("resourceGain",n=>{if(!rm[n.kind]||m.state!=="play")return;ol!==n.runId&&(sm(),ol=n.runId);const e=Ha.get(n.kind);Ha.set(n.kind,e?{...n,amount:e.amount+n.amount,age:e.age}:{...n,age:0})});function Iu(n,e,t,i){const r=n.animate(e,t);r.onfinish=()=>{i?.(),n.remove(),Ks.delete(n)}}function gh(n,e,t){const i=n.getBoundingClientRect(),r=document.createElement("i");r.className="resource-ring",r.style.cssText=`left:${i.left-5}px;top:${i.top-5}px;width:${i.width+10}px;height:${i.height+10}px;color:${e}`,n.id==="ultBtn"&&(r.style.borderRadius="50%"),Fi.append(r),Ks.add(r),Iu(r,[{opacity:.9,transform:"scale(1)"},{opacity:0,transform:t?"scale(1)":"scale(1.25)"}],{duration:450})}function B1(n){const e=rm[n.kind],t=document.getElementById(e.id),i=t?.getBoundingClientRect();if(!i||!i.width||getComputedStyle(t).visibility==="hidden")return;const r=matchMedia("(prefers-reduced-motion: reduce)").matches;Fi||=document.getElementById("resourceFx"),Fi||(Fi=document.createElement("div"),Fi.id="resourceFx",Fi.setAttribute("aria-hidden","true"),document.body.append(Fi));const s=Math.max(65,Math.min(innerWidth-65,i.left+i.width/2)),a=n.kind!=="health",o=n.kind==="stamina"?document.getElementById("jumpBtn").getBoundingClientRect().top:i.top,l=a?Math.max(30,o-28):Math.min(innerHeight-30,i.bottom+64),c=document.createElement("span");c.className="resource-gain",c.textContent=`+${k1(n.amount)} ${e.label}`,c.style.cssText=`left:${s}px;top:${l}px;color:${e.color}`,Fi.append(c),Ks.add(c),Iu(c,[{opacity:0,transform:"translate(-50%,-50%) scale(.9)"},{opacity:1,transform:"translate(-50%,-50%) scale(1)",offset:.15},{opacity:1,offset:.7},{opacity:0,transform:`translate(-50%,${r?"-50%":"-90%"})`}],{duration:r?900:1150});const u=n.kind==="health"?[...t.children].slice(Math.floor(n.before),Math.ceil(n.after)):n.kind==="stamina"?[...t.children].slice(Math.floor(n.before),Math.ceil(n.after)):[t];if(r){u.forEach(g=>gh(g,e.color,!0));return}const d=document.createElement("b");d.className="resource-orb",d.textContent=e.icon;const f=l+(a?18:-18),h=u[0]?.getBoundingClientRect()||i,_=h.left+h.width/2-s,x=h.top+h.height/2-f;d.style.cssText=`left:${s}px;top:${f}px;color:${e.color}`,Fi.append(d),Ks.add(d),Iu(d,[{opacity:0,transform:"translate(-50%,-50%) scale(.5)"},{opacity:1,transform:"translate(-50%,-50%) scale(1.2)",offset:.2},{opacity:1,transform:`translate(calc(-50% + ${_*.3}px),calc(-50% + ${x*.15}px)) scale(1)`,offset:.5},{opacity:0,transform:`translate(calc(-50% + ${_}px),calc(-50% + ${x}px)) scale(.35)`}],{duration:650,easing:"ease-in",delay:180},()=>u.forEach(g=>{g.isConnected&&gh(g,e.color,!1)}))}function z1(n=1/60){if(m.runId!==ol||m.state!=="play"){sm(),ol=m.runId;return}for(const[e,t]of ba)ba.set(e,Math.max(0,t-n));for(const[e,t]of Ha)t.age+=n,t.age>=.12&&!(ba.get(e)>0)&&(Ha.delete(e),B1(t),ba.set(e,1.15))}const jo=ee("combo"),Io=ee("tag"),Uo=ee("banner"),_h=ee("flash"),G1=ee("jumpBtn"),xh=ee("ultBtn");let am=[],vh="";const No=ee("dots"),Mh=ee("lives"),H1='<svg viewBox="0 0 24 22"><path d="M12 21 2.6 11.7A5.6 5.6 0 0 1 12 4.1a5.6 5.6 0 0 1 9.4 7.6z"/></svg>';function V1(n){ee("stam").innerHTML="<i><b></b></i>".repeat(n),am=[...document.querySelectorAll("#stam b")]}function mr(n){ee("score").textContent=m.score.toLocaleString(),ee("runGems").textContent=m.runCrystals?`◆ ${m.runCrystals}`:"";const e=Math.max(0,n.hp),t=`${e}/${He.maxHp}`;if(t!==vh&&(Mh.innerHTML=Array.from({length:He.maxHp},(s,a)=>`<i class="${a<e?"":"off"}">${H1}</i>`).join("")),vh=t,Mh.setAttribute("aria-label",`生命 ${e} / ${He.maxHp}`),m.tut){No.innerHTML='<span class="lbl">教學</span>';return}if(m.endless){No.innerHTML=`<span class="lbl">無盡</span><b>${m.wave}</b>`;return}const i=m.waves.length,r=m.level?.boss;No.innerHTML=Array.from({length:i},(s,a)=>`<i class="${a+1<m.wave?"done":a+1===m.wave?"now":""}${r&&a===i-1?" boss":""}"></i>`).join(""),No.setAttribute("aria-label",`第 ${m.wave} / ${i} 波`)}function yh(){m.combo<2||(jo.innerHTML=`${m.combo}<small>COMBO</small>`,jo.style.opacity=1,jo.animate([{transform:"scale(1.3)"},{transform:"scale(1)"}],{duration:140}))}let Sh=0;function ot(n,e,t=.8){Io.textContent=n,Io.style.color=e||"var(--ink)",Io.style.opacity=1,clearTimeout(Sh),Sh=setTimeout(()=>Io.style.opacity=0,t*1e3)}function gr(n,e=""){Uo.innerHTML=n+(e?`<small>${e}</small>`:""),Uo.classList.remove("show"),Uo.offsetWidth,Uo.classList.add("show")}function Zs(n,e){_h.style.background=e,_h.animate([{opacity:n},{opacity:0}],{duration:380})}const Ts=ee("coach");function vl(n,e,t,i){if(!t){Ts.hidden=!0;return}Ts.hidden=!1,Ts.querySelector(".n").textContent=`${n} / ${e}`,Ts.querySelector("b").textContent=t,Ts.querySelector("p").innerHTML=i,Ts.animate([{transform:"translateX(-50%) scale(.92)",opacity:.3},{transform:"translateX(-50%) scale(1)",opacity:1}],{duration:220,easing:"ease-out"})}const ll=ee("boss"),W1=ll.querySelector("i"),X1=ll.querySelector("span");let bh="";function q1(n,e){z1(e);const t=m.state==="play"&&n?"alert":"";t!==bh&&(G1.classList.toggle("alert",!!t),bh=t),am.forEach((r,s)=>r.style.transform=`scaleX(${$t(m.stamina-s,0,1)})`),xh.style.setProperty("--p",m.ult),xh.classList.toggle("ready",m.ult>=Ct.min&&m.mode==="play"),ee("vignette").style.opacity=m.mode==="ultDraw"||m.slowT>0?1:0,m.comboT<=0&&m.combo&&(m.combo=0,jo.style.opacity=0);const i=m.boss&&!m.boss.dead?m.boss:null;ll.hidden=!i,i&&(W1.style.transform=`scaleX(${$t(i.hp/i.maxHp,0,1)})`,X1.textContent=i.script.name,ll.classList.toggle("armored",!!i.armored))}const wh=ee("nums"),Fo=[];let $1=0;function Y1(n,e,t=""){if(!wh)return;const i=n.clone().applyQuaternion(Ve.quaternion).project(qe);if(i.z>1)return;if(Fo.length<12){const s=document.createElement("i");wh.appendChild(s),Fo.push(s)}const r=Fo[$1++%Fo.length];r.textContent=e,r.className=t,r.style.left=(i.x+1)/2*innerWidth+(Math.random()-.5)*24+"px",r.style.top=(1-i.y)/2*innerHeight+"px",r.getAnimations().forEach(s=>s.cancel()),r.animate([{transform:"translate(-50%,-50%) scale(.6)",opacity:1},{transform:"translate(-50%,-110%) scale(1.15)",opacity:1,offset:.25},{transform:"translate(-50%,-220%) scale(1)",opacity:0}],{duration:t==="big"?750:600,easing:"cubic-bezier(.2,.8,.3,1)",fill:"forwards"})}let nn=null,Vr=null;const Vt={volume:0,lastVol:.6};try{const n=localStorage.getItem("slasharena-vol");n!==null&&(Vt.volume=$t(+n||0,0,1))}catch{}function Wn(){if(!(Vt.volume<=0))try{nn||(nn=new(window.AudioContext||window.webkitAudioContext),Vr=nn.createGain(),Vr.connect(nn.destination)),Vr.gain.value=Vt.volume,nn.state==="suspended"&&nn.resume()}catch{nn=null}}function j1(n){Vr&&(Vr.gain.value=n)}function _t(n,e,t="triangle",i=.15,r=1){if(!nn||Vt.volume<=0)return;const s=nn.currentTime,a=nn.createOscillator(),o=nn.createGain();a.type=t,a.frequency.setValueAtTime(n,s),r!==1&&a.frequency.exponentialRampToValueAtTime(n*r,s+e),o.gain.setValueAtTime(i,s),o.gain.exponentialRampToValueAtTime(.001,s+e),a.connect(o).connect(Vr),a.start(s),a.stop(s+e+.02)}let Oo=null;function Mn(n,e,t,i){if(!nn||Vt.volume<=0)return;const r=nn.currentTime;if(!Oo){Oo=nn.createBuffer(1,nn.sampleRate,nn.sampleRate);const l=Oo.getChannelData(0);for(let c=0;c<l.length;c++)l[c]=Math.random()*2-1}const s=nn.createBufferSource(),a=nn.createBiquadFilter(),o=nn.createGain();s.buffer=Oo,a.type="bandpass",a.Q.value=1.2,a.frequency.setValueAtTime(t,r),a.frequency.exponentialRampToValueAtTime(i,r+n),o.gain.setValueAtTime(e,r),o.gain.exponentialRampToValueAtTime(.001,r+n),s.connect(a).connect(o).connect(Vr),s.start(r),s.stop(r+n)}const Va={on:!0};try{Va.on=localStorage.getItem("slasharena-vib")!=="0"}catch{}const er=n=>{try{Va.on&&navigator.vibrate&&(!navigator.userActivation||navigator.userActivation.hasBeenActive)&&navigator.vibrate(n)}catch{}},K1=[0,2,4,7,9],Yn=(n=.08)=>1+(Math.random()-.5)*n,Re={hit(n,e){const t=K1[n%5]+12*Math.floor(n/5),i=392*2**(Math.min(t,36)/12)*Yn(.03);_t(i,.14,"square",.06),Mn(.07,.16,5e3*Yn(),1200),_t(e?70:95,e?.18:.1,"sine",e?.3:.18,.5),er(e?30:15)},kill(n){_t(140*Yn()*(n?.6:1),n?.4:.18,"sine",n?.35:.25,.4),Mn(n?.35:.12,n?.25:.12,2500*Yn(),n?150:400),n&&er([30,20,60])},dash(){Mn(.16,.14,1500*Yn(.2),6e3)},clang(){_t(520*Yn(),.2,"square",.07,.7),Mn(.1,.2,3e3,2e3),er(30)},perfectParry(){_t(110,.16,"sine",.23,.5),_t(1568,.32,"triangle",.15),_t(2349,.24,"sine",.1),Mn(.05,.2,8500,3500),er([15,25,45])},thud(){_t(160*Yn(),.12,"square",.06,.6),Mn(.08,.15,1200,500),er(20)},ding(){_t(1568,.5,"sine",.14),_t(2349,.4,"sine",.07),Mn(.06,.2,8e3,4e3),er([20,30,40])},jump(){_t(440,.16,"triangle",.07,1.8)},land(){Mn(.08,.08,800*Yn(.2),300)},warn(){_t(880,.06,"sine",.04)},roll(){Mn(.3,.12,300,120)},slam(){Mn(.4,.3,900*Yn(.2),80),_t(70*Yn(),.3,"sawtooth",.12,.4)},hurt(){_t(220*Yn(),.3,"sawtooth",.12,.5),Mn(.2,.2,1800,300),er(80)},pickup(){[0,4,7].forEach((n,e)=>setTimeout(()=>_t(880*2**(n/12),.15,"triangle",.07),e*50))},ult(){Mn(.6,.2,200,2e3),_t(110,.6,"sawtooth",.08,2)},draw(n){_t(n==="down"?1046:n==="up"?440:784,.05,"sine",.03)},clear(){[0,7,12,16].forEach((n,e)=>setTimeout(()=>_t(392*2**(n/12),.3,"square",.05),e*90))},win(){[0,4,7,12,16,19,24].forEach((n,e)=>setTimeout(()=>_t(392*2**(n/12),.35,"triangle",.07),e*110))},charge(){_t(110,.55,"sawtooth",.06,1.9),Mn(.5,.06,300,1400)},swing(){Mn(.28,.3,600,3500),_t(90,.22,"sawtooth",.12,.5),er(40)},whirl(){Mn(.18,.14,900*Yn(.2),3200)},empty(){_t(180,.1,"square",.04)},ui(){_t(660,.05,"sine",.04)},step(){_t(1320,.12,"sine",.05),_t(1760,.12,"sine",.03)}},om=ee("sand");let nr="calm",Ur=0;function lm(){nr="calm",Ur=Bi.stormCalm*.6,m.storm=0,Kp(0),om.style.opacity=0}function Z1(n){nr="storm",Ur=n,ot("沙暴來襲！","var(--warn)")}function J1(n){Rt.storm&&m.state==="play"&&!m.tut&&(Ur-=n,Ur<=0&&(nr==="calm"?(nr="warn",Ur=Bi.stormWarn,ot("沙暴要來了，靠近一點看清楚預警","var(--warn)"),Re.warn()):nr==="warn"?(nr="storm",Ur=Bi.stormLen):(nr="calm",Ur=Bi.stormCalm)));const e=nr==="storm"&&Rt.storm?1:0;Math.abs(m.storm-e)<.002&&m.storm===e||(m.storm+=(e-m.storm)*(1-Math.exp(-n*2.5)),Math.abs(m.storm-e)<.003&&(m.storm=e),Kp(m.storm),om.style.opacity=m.storm)}const Ka=900,Ml=[],wi=new na(new fr(.15,.15,.15),new xt({color:16777215}),Ka),Oi=new zt,gd=new Se;for(let n=0;n<Ka;n++)Ml.push({p:new me,v:new me,life:0,max:1,shown:!1,g:0,s:1}),Oi.scale.setScalar(0),Oi.updateMatrix(),wi.setMatrixAt(n,Oi.matrix),wi.setColorAt(n,gd.set(16777215));wi.frustumCulled=!1;Ve.add(wi);let sr=0;function je(n,e,t,i=6,r=.6){for(let s=0;s<t;s++){const a=Ml[sr];wi.setColorAt(sr,gd.set(e)),sr=(sr+1)%Ka,a.p.copy(n),a.v.copy(Gt()).multiplyScalar(i*(.3+Math.random())),a.max=a.life=r*(.5+Math.random()*.7),a.shown=!0,a.g=0,a.s=1}wi.instanceColor.needsUpdate=!0}const Nr=new me;function en(n,e,t,i,r=4,s=.6,a=14,o=.6,l=1,c=null){for(let u=0;u<i;u++){const d=Ml[sr];wi.setColorAt(sr,gd.set(t)),sr=(sr+1)%Ka,Nr.copy(Gt()),Nr.addScaledVector(e,-Nr.dot(e)).normalize(),c&&Nr.lerp(c,.7).normalize(),d.p.copy(n),d.v.copy(e).multiplyScalar(r*(.6+Math.random()*.6)).addScaledVector(Nr,r*o*Math.random()),d.max=d.life=s*(.6+Math.random()*.6),d.shown=!0,d.g=a,d.s=l*(.7+Math.random()*.6)}wi.instanceColor.needsUpdate=!0}function Q1(n){let e=!1;for(let t=0;t<Ka;t++){const i=Ml[t];if(i.life>0)i.life-=n,i.p.addScaledVector(i.v,n),i.g?(Nr.copy(i.p).normalize(),i.v.addScaledVector(Nr,-i.g*n),i.v.multiplyScalar(Math.exp(-n*1.2))):i.v.multiplyScalar(Math.exp(-n*3)),Oi.position.copy(i.p),Oi.rotation.set(i.life*9,i.life*7,0),Oi.scale.setScalar(Math.max(0,i.life/i.max)*i.s);else if(i.shown)i.shown=!1,Oi.scale.setScalar(0);else continue;Oi.updateMatrix(),wi.setMatrixAt(t,Oi.matrix),e=!0}e&&(wi.instanceMatrix.needsUpdate=!0)}function eS(n,e,t){const i=new me;for(let r=0;r<=8;r++)i.lerpVectors(n,e,r/8).add(Gt().multiplyScalar(.12)),je(i,t,1,.6,.3)}const wa=[];function cr(n,e,t,i=1,r=.32,s=5){const a=new K(new pr(.22*i,.36*i,32),new xt({color:t,transparent:!0,opacity:1,side:sn,depthWrite:!1,blending:dr}));a.position.copy(n),a.quaternion.setFromUnitVectors(new me(0,0,1),e),a.renderOrder=4,Ve.add(a),wa.push({m:a,t:0,dur:r,grow:s})}function tS(n){for(const e of wa){e.t+=n;const t=e.t/e.dur;e.m.scale.setScalar(1+t*e.grow),e.m.material.opacity=Math.max(0,1-t),t>=1&&(Ve.remove(e.m),e.m.geometry.dispose(),e.m.material.dispose(),e.dead=!0)}for(let e=wa.length-1;e>=0;e--)wa[e].dead&&wa.splice(e,1)}const Uu=220,cm=n=>{const e=new na(new tn(.06,0),new xt({color:16777215,transparent:n,blending:n?dr:Hr,depthWrite:!n,fog:!1}),Uu),t=new dt().makeScale(0,0,0);for(let i=0;i<Uu;i++)e.setMatrixAt(i,t);return e.frustumCulled=!1,e.count=0,Ve.add(e),e},pi=cm(!1),ks=cm(!0),Bs=new na(new At(.26,0),new pn({color:10122308,flatShading:!0,roughness:1,wireframe:!0}),4);Bs.frustumCulled=!1;Bs.count=0;Ve.add(Bs);const Za=new K(new ra(140,34,1,1),new Si({transparent:!0,depthWrite:!1,blending:dr,fog:!1,uniforms:{t:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:`varying vec2 vUv; uniform float t;
    void main(){
      float x = vUv.x, wave = sin(x * 9. + t * .6 + sin(x * 3. - t * .4) * 2.) * .12;
      float y = vUv.y - .5 - wave, band = exp(-y * y * 30.) * (.55 + .45 * sin(x * 40. + t * 1.3));
      float edge = smoothstep(0., .15, x) * smoothstep(1., .85, x);
      vec3 c = mix(vec3(.2, 1., .6), vec3(.5, .4, 1.), smoothstep(-.1, .25, y));
      gl_FragColor = vec4(c * band * edge * .55, 1.);
    }`}));Za.userData.at=[0,.62];Za.visible=!1;Os.add(Za);typeof window<"u"&&window.dispatchEvent(new Event("resize"));const _d={butterfly:{layer:pi,alt:[.35,1.4],speed:1.1,colors:[16751317,16773242,16777215,10149887],size:1.6},seed:{layer:pi,alt:[.5,3],speed:.5,colors:[16777215],size:.7},firefly:{layer:ks,alt:[.3,1.6],speed:.45,colors:[14221162,16773258],size:1.1},warm:{layer:ks,alt:[.4,2.4],speed:.3,colors:[16756848,16767136],size:.7},snow:{layer:pi,alt:[1,8],speed:1.3,fall:!0,colors:[16777215,15267071],size:.8},dust:{layer:pi,alt:[.1,1.2],speed:1.8,colors:[15255696,14200944],size:.7},ember:{layer:ks,alt:[0,.4],speed:1,rise:!0,colors:[16742954,16756800,16730640],size:.8},ash:{layer:pi,alt:[1,7],speed:.6,fall:!0,colors:[6972006,9077382],size:.8}},nS={grass:{day:{butterfly:12,seed:26},dusk:{butterfly:6,seed:16,warm:18},night:{firefly:46,seed:8}},ice:{day:{snow:110},dusk:{snow:120,warm:10},night:{snow:170}},desert:{day:{dust:40},dusk:{dust:30,warm:16},night:{dust:20,firefly:12}},volcano:{day:{ember:60,ash:50},dusk:{ember:80,ash:50},night:{ember:110,ash:40}}},zs=[],fi=new zt,iS=new Se,Ea=new me,rS=new me,Ac=new me;let um="",Rr=0,Rn=new me(0,0,1),Eh=18,Th=0,Ko=[];function dm(n,e){const t=_d[n.kind],i=Je(Rn,ct(Rn,Gt()).normalize(),Math.random()*9);if(n.alt=t.alt[0]+Math.random()*(t.alt[1]-t.alt[0]),!e&&t.fall&&(n.alt=t.alt[1]),t.rise){for(let r=0;r<6;r++){const s=Je(Rn,ct(Rn,Gt()).normalize(),Math.random()*9);if(on(s)<.05){i.copy(s);break}}n.life=2+Math.random()*2.5}n.d=i,n.v=ct(i,Gt()).normalize().multiplyScalar(t.speed*(.4+Math.random()*.6)),n.ph=Math.random()*6.28}function sS(){um=`${Wt.id}/${Wt.variant}/${Wt.light}`,zs.length=0;const n=nS[Wt.id]?.[Wt.light]||{};for(const[r,s]of Object.entries(n))for(let a=0;a<s;a++){const o=_d[r],l={kind:r,layer:o.layer,color:o.colors[a%o.colors.length],size:o.size*(.7+Math.random()*.6),idx:0};dm(l,!0),zs.push(l)}let e=0,t=0;const i=new dt().makeScale(0,0,0);for(let r=0;r<Uu;r++)pi.setMatrixAt(r,i),ks.setMatrixAt(r,i);for(const r of zs)r.idx=r.layer===pi?e++:t++,r.layer.setColorAt(r.idx,iS.set(r.color));for(const r of[pi,ks])r.instanceColor&&(r.instanceColor.needsUpdate=!0);Ko=Wt.id==="desert"?Array.from({length:3},()=>({d:Je(Rn,ct(Rn,Gt()).normalize(),Math.random()*8),dir:ct(Rn,Gt()).normalize(),roll:0,q:new Ei})):[],Za.visible=Wt.id==="ice"&&Wt.light==="night",Ea.copy(ct(Rn,Gt())).normalize()}function aS(n){`${Wt.id}/${Wt.variant}/${Wt.light}`!==um&&sS(),Rr+=n,Za.material.uniforms.t.value=Rr,Rn.copy(hd(lr.clone())).normalize();const e=Math.floor(zs.length*rn.fx);let t=0,i=0;for(let r=0;r<zs.length;r++){const s=zs[r],a=_d[s.kind];if(r>=e)continue;(s.kind==="butterfly"||s.kind==="firefly")&&Math.random()<n*1.2&&(Ac.copy(s.v).add(Gt().multiplyScalar(a.speed)),s.v.copy(Ac).addScaledVector(s.d,-Ac.dot(s.d)).setLength(a.speed)),(s.kind==="dust"||s.kind==="seed")&&s.v.lerp(rS.copy(Ea).addScaledVector(s.d,-Ea.dot(s.d)).setLength(a.speed),n*.5),s.d.multiplyScalar(ge).addScaledVector(s.v,n).normalize(),s.v.addScaledVector(s.d,-s.v.dot(s.d)),a.fall&&(s.alt-=n*a.speed*(s.kind==="snow"?.9:.5)),a.rise&&(s.alt+=n*a.speed,s.life-=n),s.kind==="seed"&&(s.alt+=Math.sin(Rr*.8+s.ph)*n*.2);const o=ln(s.d);(s.alt<0||a.rise&&s.life<=0||s.d.angleTo(Rn)*ge>11)&&dm(s,!1);let l=s.size;s.kind==="butterfly"&&(l*=.5+Math.abs(Math.sin(Rr*16+s.ph))*.7),s.kind==="firefly"&&(l*=Math.max(0,Math.sin(Rr*2.2+s.ph))**2*1.4),s.kind==="ember"&&(l*=Math.min(1,s.life)),fi.position.copy(s.d).multiplyScalar(ge+Math.max(o,0)+s.alt),fi.rotation.set(Rr*2+s.ph,Rr*3,0),fi.scale.set(l*(s.kind==="butterfly"?1.6:1),l*(s.kind==="butterfly"?.3:1),l),fi.updateMatrix(),s.layer.setMatrixAt(s.idx,fi.matrix),s.layer===pi?t++:i++}for(const[r,s]of[[pi,t],[ks,i]])r.count=s,r.instanceMatrix.clearUpdateRanges(),s&&(r.instanceMatrix.addUpdateRange(0,s*16),r.instanceMatrix.needsUpdate=!0);if(Bs.count=Ko.length,Ko.forEach((r,s)=>{r.d=Je(r.d,r.dir,n*2.4),r.dir=ct(r.d,r.dir).normalize(),r.roll+=n*9,(r.d.angleTo(Rn)*ge>11||on(r.d)<0)&&(r.d=Je(Rn,ct(Rn,Ea.clone().negate()).normalize(),9),r.dir=ct(r.d,Ea).normalize());const a=ln(r.d),o=Math.abs(Math.sin(r.roll*.5))*.25;fi.position.copy(r.d).multiplyScalar(ge+a+.26+o),fi.quaternion.setFromAxisAngle(new me().crossVectors(r.d,r.dir).normalize(),r.roll),fi.scale.setScalar(1),fi.updateMatrix(),Bs.setMatrixAt(s,fi.matrix)}),Ko.length&&(Bs.instanceMatrix.needsUpdate=!0),Wt.id==="volcano"){const r=oi.filter(s=>s.type==="m");if((Th-=n)<=0){Th=.18/Math.max(rn.fx,.35);for(const s of r)s.c.angleTo(Rn)<1.3&&en(s.c.clone().multiplyScalar(ge+on(s.c)*.8+.2),s.c,Math.random()<.2?16738858:4867144,1,.9,2.6,-.6,.4,2.4)}if((Eh-=n)<=0){Eh=22+Math.random()*14;const s=r.filter(a=>a.c.angleTo(Rn)<1.4).sort(()=>Math.random()-.5)[0];if(s){const a=s.c.clone().multiplyScalar(ge+on(s.c)*.8+.2);en(a,s.c,16734736,30,7,1.6,7,.5,2),en(a,s.c,3813942,24,3,2.6,-.8,.7,3),m.state==="play"&&(m.shake=Math.max(m.shake,.3),Re.slam())}}}}function oS(n,e,t=null,i=He.lockRange){let r=null;for(const s of e){if(s.dead||s.spawn<1)continue;const a=s.d.angleTo(n)*xl.R,o=Math.max(0,a-s.r);if(o>=i)continue;const l=s.stun>0,c=s===t?l?He.lockStunStick:He.lockStick:0,u=o-(l?He.lockStunBonus:0)-c;(!r||u<r.score-1e-6||Math.abs(u-r.score)<=1e-6&&(l&&!r.stunned||l===r.stunned&&a<r.dist))&&(r={e:s,dist:a,score:u,stunned:l})}return r}function xd(n,e,t,i,r){const s=n[e];n[e]=Math.min(i,s+Math.max(0,t));const a=Math.max(0,n[e]-s);return a>1e-6&&jt("resourceGain",{kind:r,amount:a,before:s,after:n[e],runId:m.runId}),a}const yl=n=>xd(m,"ult",n,100,"ult"),lS=n=>xd(m,"stamina",n,He.stamMax,"stamina"),cS=(n,e)=>xd(n,"hp",e,He.maxHp,"health"),Ls=new Ye,Is=new Ye,vd=new Ye,cl=new pn({color:5030655,emissive:671626,emissiveIntensity:.45,roughness:.1,metalness:0}),fm=[];for(let n=0;n<=40;n++){const e=Math.PI*(1-n/40);fm.push(new ke(Math.max(.001,Math.sin(e)*Math.sin(e/2)**1.1*.62),(Math.cos(e)+1)*.5*1.02))}const Vn=new K(new ad(fm,40),cl);Vn.castShadow=!0;const Rs=new xt({color:1316922}),Fr=(n,e,t,i)=>(n.position.set(e,t,i),n.lookAt(e*3,t,i*3+.01),Vn.add(n),n),hm=[],pm=[],mm=[],gm=[],_m=[];for(const n of[-1,1]){const e=new K(new pt(.085,14,12),Rs);e.position.set(n*.14,.5,.39),e.scale.set(1,1.3,.6);const t=new K(new pt(.034,8,6),new xt({color:16777215}));t.position.set(.028,.04,.06),e.add(t);const i=new K(new pt(.014,6,5),new xt({color:16777215}));i.position.set(-.03,-.035,.06),e.add(i),Vn.add(e),hm.push(e);const r=Fr(new K(new fr(.24,.1,.05),cl),n*.14,.585,.385);r.rotateZ(n*.42),pm.push(r);const s=new Ye;for(const l of[-1,1]){const c=new K(new fr(.11,.026,.02),Rs);c.position.set(0,l*.028,0),c.rotation.z=-n*l*.5,s.add(c)}mm.push(Fr(s,n*.14,.5,.405)),gm.push(Fr(new K(new Vi(.06,.015,6,14,Math.PI),Rs),n*.14,.48,.41));const a=new Ye;a.add(new K(new Vi(.065,.011,6,18),Rs),new K(new Vi(.028,.011,6,12),Rs)),_m.push(Fr(a,n*.14,.5,.405)),Fr(new K(new sd(.065,16),new xt({color:16743080,transparent:!0,opacity:.9})),n*.27,.37,.37).scale.set(1.3,.75,1)}const xm=Fr(new K(new Vi(.035,.011,6,14,Math.PI),Rs),0,.4,.445);xm.rotateZ(Math.PI);const Nu=Fr(new K(new pt(.05,12,8),new xt({color:10101574})),0,.39,.44);Nu.scale.set(1.1,.8,.35);const Sl=new K(new pt(.1,12,8),new xt({color:16777215,transparent:!0,opacity:.85}));Sl.position.set(-.16,.6,.24);Sl.scale.set(.55,1,.4);Sl.rotation.z=.5;Vn.add(Sl);vd.add(Vn);const Gn=new K(new pr(.72,1.02,24,1,-Math.PI/2-Math.PI/3,Math.PI*2/3),new xt({color:5999871,transparent:!0,opacity:.85,side:sn,depthWrite:!1}));Gn.rotation.x=-Math.PI/2;Gn.position.y=.3;Gn.visible=!1;Is.add(vd,Gn);const Md=new K(new pr(.5,.58,32),new xt({color:4843263,transparent:!0,opacity:.55,side:sn}));Md.rotation.x=-Math.PI/2;Md.position.y=.05;Ls.add(Is,Md);Ve.add(Ls);let vm="idle",Zo=0,ko=2;function ci(n,e=0){vm=n,Zo=e}function uS(n,e){Zo>0&&(Zo-=n);const t=Zo>0?vm:e;ko-=n;const i=ko<.12&&(t==="idle"||t==="determined");ko<0&&(ko=2+Math.random()*3);const r=t==="idle"||t==="determined";hm.forEach(s=>{s.visible=r,s.scale.y=i?.15:1.3}),pm.forEach(s=>s.visible=t==="determined"),mm.forEach(s=>s.visible=t==="hurt"),gm.forEach(s=>s.visible=t==="happy"),_m.forEach(s=>{s.visible=t==="dizzy",s.rotation.z+=n*8}),xm.visible=t==="idle"||t==="determined",Nu.visible=t==="hurt"||t==="happy"||t==="dizzy",Nu.scale.y=t==="hurt"?.9:t==="dizzy"?.5:.7}const Rc=Vn.geometry.attributes.position.array.slice(),dS=1.02;Mm(Vn.geometry);const mn={gx:0,gz:0,vx:0,vz:0,touching:new Set,t:0},Cc=new Set,Pc=new me,Dc=new me,Ah=new dt,Rh=new Nn,fS=new me,Ch=(n,e)=>Vn.worldToLocal(Ve.localToWorld(e.copy(n)));function hS(n,e){Ve.updateMatrixWorld(!0),mn.t+=n;const t=e.d,i=ln(t),[r,s]=ts(t),a=(ln(Je(t,r,.3))-i)/.3,o=(ln(Je(t,s,.3))-i)/.3,l=r.multiplyScalar(-a).addScaledVector(s,-o);Ch(e.p,Pc),Ch(e.p.clone().add(l),Dc);let c=Dc.x-Pc.x,u=Dc.z-Pc.z;const d=Math.hypot(c,u),f=e.air>0?.25:1;d>f&&(c*=f/d,u*=f/d),mn.vx+=(c-mn.gx)*90*n,mn.vz+=(u-mn.gz)*90*n,mn.vx*=Math.exp(-n*6),mn.vz*=Math.exp(-n*6),mn.gx+=mn.vx*n,mn.gz+=mn.vz*n;for(const E of pd){const y=E.d.angleTo(t)*ge;if(y<.62?mn.touching.has(E)||(mn.touching.add(E),Mn(.18,.05,2600,700)):mn.touching.delete(E),y<1.1){const A=ct(E.d,new me().subVectors(E.d,t));A.lengthSq()>1e-8&&E.axis.crossVectors(E.d,A.normalize()),Cc.add(E)}if(!Cc.has(E))continue;const C=y<1.1?.55*(1-y/1.1):0;E.tv+=(C-E.tilt)*140*n,E.tv*=Math.exp(-n*5),E.tilt+=E.tv*n,Rh.setFromAxisAngle(E.axis,E.tilt).multiply(E.q),Ah.compose(E.p,Rh,fS.setScalar(E.s)),P1(E.i,Ah),y>=1.1&&Math.abs(E.tilt)<.002&&Math.abs(E.tv)<.002&&Cc.delete(E)}const h=mn.gx,_=mn.gz,x=Math.hypot(h,_),g=(e.moving||0)*.035+(e.state==="dash"?.03:0),p=Vn.geometry.attributes.position,T=p.array;for(let E=0;E<T.length;E+=3){let y=Rc[E],C=Rc[E+1],A=Rc[E+2];const D=Math.max(0,1-C/(dS*.58)),L=D*D,b=Math.hypot(y,A);if(b>1e-4){const w=1+.6*((y*h+A*_)/b)*L+g*(.4+.6*L)*Math.sin(mn.t*14+C*9);y*=w,A*=w}y+=h*.24*L,A+=_*.24*L,C*=1-.1*x*(1-L),T[E]=y,T[E+1]=C,T[E+2]=A}p.needsUpdate=!0,Vn.geometry.computeVertexNormals(),Mm(Vn.geometry)}function Mm(n){const e=n.attributes.normal.array,t=41,i=40,r=new me;for(let s=0;s<t;s++){const a=s*3,o=(i*t+s)*3;r.set(e[a]+e[o],e[a+1]+e[o+1],e[a+2]+e[o+2]).normalize(),e[a]=e[o]=r.x,e[a+1]=e[o+1]=r.y,e[a+2]=e[o+2]=r.z}for(const s of[0,t-1]){r.set(0,0,0);for(let a=0;a<=i;a++){const o=(a*t+s)*3;r.x+=e[o],r.y+=e[o+1],r.z+=e[o+2]}r.normalize();for(let a=0;a<=i;a++){const o=(a*t+s)*3;e[o]=r.x,e[o+1]=r.y,e[o+2]=r.z}}n.attributes.normal.needsUpdate=!0}const ym=n=>Math.max(0,Math.min(1,n)),Ph=n=>(n=ym(n),n*n*(3-2*n)),pS=new Se(16766554);function mS(n){const e=new Ye;for(const t of[...n.group.children])t!==n.stars&&e.add(t);n.group.add(e),n.attackPivot=e,n.attackMaterials=n.tint.map(t=>({m:t,em:t.emissive.clone(),intensity:t.emissiveIntensity})),n.attackRest=[],e.traverse(t=>n.attackRest.push({o:t,p:t.position.clone(),q:t.quaternion.clone(),s:t.scale.clone()}))}function gS(n){for(const{m:e,em:t,intensity:i}of n.attackMaterials)e.emissive.copy(t),e.emissiveIntensity=i;for(const{o:e,p:t,q:i,s:r}of n.attackRest)e.position.copy(t),e.quaternion.copy(i),e.scale.copy(r)}function _S(n){if(n.stun>0)return{wind:0,release:0,cue:0};const e=n.warn?{t:n.warn.t,dur:n.warn.dur}:n.swing&&!n.swing.done?n.swing:n.whirl&&n.whirl.t<n.whirl.wind?{t:n.whirl.t,dur:n.whirl.wind}:n.cast||(n.summonT>0?{t:1.1-n.summonT,dur:1.1}:null),t=e?Ph(e.t/e.dur):0,i=e?Math.max(0,e.dur-e.t):1/0,r=e?ym(1-i/.15):0,s=!e&&n.attackRelease?1-Ph(n.attackRelease.t/n.attackRelease.dur):0;return{wind:t,release:s,cue:r}}function ul(n,e){n.attackRelease={kind:e,t:0,dur:.32}}function xS(n,e){n.attackRelease&&(n.attackRelease.t+=e,n.attackRelease.t>=n.attackRelease.dur&&(n.attackRelease=null))}function vS(n){const e=n.model,t=e.rig,i=e.attackPivot,{wind:r,release:s,cue:a}=_S(n),l=!!(n.lunge||n.rolling||n.whirl&&n.whirl.t>=n.whirl.wind)?1:s;switch(n.base){case"grunt":i.rotation.x=-.26*r+.22*l,i.position.z=-.2*r+.18*l,t.arm.rotation.x=(r||l)*Math.PI/2,t.arm.position.z=.1-.28*r+.38*l;break;case"brute":case"boss":{const c=n.poseKind||n.attackRelease?.kind,u=["meteor","chillField","nova","cross","fan","storm"].includes(c)||c?.startsWith("summon"),d=c==="charge"||c==="burrow";i.position.y=-.18*r-.08*l,i.position.z=-.14*r+.22*l,i.rotation.x=(d?.32:-.18)*r+.16*l,n.swing||t.fists.forEach((f,h)=>{const _=h?1:-1;f.position.set(_*(.98+(u?.35:-.3)*r),-.2+(u?.8:1.35)*r-.3*l,.25-.3*r+.48*l),f.rotation.z=_*(u?-.4:.25)*r}),c==="cleave"&&(i.rotation.y=-.55*r+.4*l,t.fists[0].position.set(-1.15,.25+.3*r,.25-.6*r+.8*l),t.fists[1].position.set(.9,-.2,.4)),(c==="ring"||c==="nova")&&(i.scale.x=1+.12*r,t.fists.forEach((f,h)=>{f.position.x=(h?1:-1)*(1+.45*r)})),n.type==="frostQueen"&&(i.rotation.y=.35*r-.18*s,i.position.y=.22*r),n.type==="sandWyrm"&&(i.scale.y=1-.2*r+.12*l,i.rotation.x=.26*r-.2*l);break}case"boulder":i.scale.set(1+.12*r,1-.18*r,1+.12*r),i.position.y=-.1*r,i.position.z=-.24*r+.15*s,i.scale.z+=.12*s,n.rolling||(i.rotation.x=-.38*r);break;case"archer":i.rotation.y=-.28*r+.12*s,i.rotation.x=-.12*r+.16*s,t.bow.position.z=.2+.05*r-.1*s,t.bow.rotation.y=-.45*r,t.bow.scale.x=1-.22*r,t.string&&(t.string.scale.z=1+2*r,t.string.position.copy(t.bow.position)),t.drawHand&&(t.drawHand.position.z=t.bow.position.z-.12*(1+2*r));break;case"jelly":i.scale.set(1-.2*r+.18*s,1+.22*r-.2*s,1-.2*r+.18*s),t.tentacles.scale.y=1-.3*r+.4*s;break;case"shell":i.position.y=-.13*r,i.rotation.x=-.2*r+.3*l,t.shield.position.z=.62+.22*r+.28*l,t.shield.rotation.x=-.25*r;break;case"hopper":case"splitter":case"blobling":i.scale.set(1+.25*r+.15*s,1-.4*r-.22*s,1+.2*r+.15*s),i.position.y=-.16*r,i.rotation.x=-.15*r,n.leapK>0&&(i.scale.set(.88,1.25,.88),i.rotation.x=.2);break;case"shroom":i.scale.set(1+.18*r-.12*s,1-.14*r+.25*s,1+.18*r-.12*s),i.rotation.x=-.18*r+.22*s,t.cap&&(t.cap.scale.set(1+.18*r,1+.3*r-.2*s,1+.18*r),t.cap.position.y=.08*r+.1*s);break;case"bee":i.rotation.x=-.65*r+.45*l,i.rotation.y=Math.PI*Math.max(r,l),i.position.z=-.26*r+.22*l,t.wings.scale.y*=1+.5*r;break}if(a&&!n.flash&&!n.armored)for(const c of e.tint)c.emissive.lerp(pS,a*.65),c.emissiveIntensity+=a*1.2;return{wind:r,release:s,cue:a}}const Sm=n=>!!(n.cast||n.warn||n.rolling||n.chain||n.lunge||n.swing||n.whirl||n.summonT>0),MS=()=>m.tut||m.tier<=2?1:2;function yS(n,e=Math.random()){const t=["brute","boulder","boss","shroom"].includes(n.base);return((t?Qt.heavyCdMin:Qt.cdMin)+e*(t?Qt.heavyCdRand:Qt.cdRand))*(n.cdMul||1)*(m.tut?1.35:1)*(n.base==="boss"&&n.phase>0?.7:1)}function SS(n,e,t=Qt.impactGap){for(const i of[...e].filter(Number.isFinite).sort((r,s)=>r-s))Math.abs(n-i)<t&&(n=i+t);return n}const Dh=(n,e=n.d)=>{const t=gn[n.type]?.shotSpeed;return t&&m.attackFocus?e.angleTo(m.attackFocus)*xl.R/t:0};function Ta(n,e,t){const i=[];for(const s of m.warnings)s.enemy!==n&&!s.resolve&&i.push(Math.max(0,s.dur-s.t)+(s.attack==="shoot"?Dh(s.enemy):0));for(const s of m.enemies)!s.dead&&s!==n&&(s.cast&&i.push(Math.max(0,s.cast.dur-s.cast.t)),s.swing&&!s.swing.done&&i.push(Math.max(0,s.swing.dur-s.swing.t)),s.whirl&&i.push(Math.max(0,s.whirl.wind-s.whirl.t)));for(const s of m.shots)!s.dead&&!s.back&&!s.spent&&s.owner!==n&&m.attackFocus&&i.push(s.d.angleTo(m.attackFocus)*xl.R/s.v);const r=t==="shoot"?Dh(n):0;return SS(e+r,i)-r}function bS(n){if(m.attackStartT>0||m.counterT>0)return!1;const e=m.enemies.filter(i=>!i.dead&&i!==n);if(e.some(i=>i.chain||i.rolling||i.whirl))return!1;const t=new Set(e.filter(Sm));for(const i of m.warnings)!i.resolve&&i.enemy!==n&&t.add(i.enemy);for(const i of m.shots)!i.dead&&!i.back&&!i.spent&&i.owner!==n&&t.add(i.owner);return t.size<MS()}const bm=20,bl=[],wS=new pr(.33,.37,28);for(let n=0;n<bm;n++){const e=new K(wS,new xt({color:16777215,transparent:!0,opacity:0,side:sn,depthWrite:!1}));e.visible=!1,e.renderOrder=3,Ve.add(e),bl.push({m:e,t:0,dur:1,grow:3})}let ES=0;const TS=new me(0,0,1);function Gs(n,e=1,t=.9,i=16777215,r=.55){const s=bl[ES++%bm];s.t=0,s.dur=t,s.grow=2.6*e,s.op=r,s.m.position.copy(n).multiplyScalar(ge+.03),s.m.quaternion.setFromUnitVectors(TS,n),s.m.scale.setScalar(e),s.m.material.color.set(i),s.m.visible=!0}const wl=64,AS=new ra(1,1),$i=new na(AS,new xt({color:16777215,transparent:!0,opacity:.55,depthWrite:!1,side:sn}),wl);$i.frustumCulled=!1;$i.renderOrder=2;Ve.add($i);const El=[],rr=new zt,wm=new Se;for(let n=0;n<wl;n++)El.push({life:0,max:1,p:new me,q:new Ei,w:1,l:1}),rr.scale.setScalar(0),rr.updateMatrix(),$i.setMatrixAt(n,rr.matrix),$i.setColorAt(n,wm.set(16777215));let RS=0;const Lh=new me,Lc=new me,Ih=new dt;function Fu(n,e,t,i,r,s=2){const a=RS++%wl,o=El[a];o.life=o.max=s,o.w=t,o.l=i,o.p.copy(Yt(n)).addScaledVector(n,.025),Lc.copy(e).addScaledVector(n,-e.dot(n)).normalize(),Lh.crossVectors(Lc,n).normalize(),Ih.makeBasis(Lh,Lc,n),o.q.setFromRotationMatrix(Ih),$i.setColorAt(a,wm.set(r)),$i.instanceColor.needsUpdate=!0}function Em(n){let e=!1;for(let t=0;t<wl;t++){const i=El[t];if(i.life<=0&&!i.shown)continue;i.life-=n;const r=Math.max(0,i.life/i.max);i.shown=i.life>0,rr.position.copy(i.p),rr.quaternion.copy(i.q),rr.scale.set(i.w*Math.min(1,r*2),i.l*Math.min(1,r*2),1),rr.updateMatrix(),$i.setMatrixAt(t,rr.matrix),e=!0}e&&($i.instanceMatrix.needsUpdate=!0)}const CS={grass:"grass",ice:"snow",desert:"sand",volcano:"ash"};function Tm(n){return on(n)<0?Rt.liquid:CS[Rt.id]}const PS=n=>Rt.liquid==="lava"&&on(n)<.12,yn={water:14677759,ice:15399167,lava:16742954,grass:9429114,snow:16777215,sand:15254138,ash:6969950},Uh={snow:12111072,sand:10121272,ash:2760740},hn=new me,Ou=new me;function Tl(n,e=1){const t=Tm(n),i=Yt(n);if(hn.copy(n),t==="water")en(i,hn,yn.water,Math.round(14*e),4+e,.7,14,.7),Gs(n,e*.9,1.1),Gs(n,e*.5,.7);else if(t==="ice"){en(i,hn,yn.ice,Math.round(10*e),3,.5,12,1.2,.7);for(let r=0;r<3;r++)Ou.copy(new me().randomDirection()),Fu(n,Ou,.05,.5*e+Math.random()*.4,16777215,1.6)}else t==="lava"?(en(i,hn,14540253,Math.round(8*e),1.4,1.1,-2,.5,1.6),en(i,hn,yn.lava,Math.round(6*e),4,.6,12,.6)):t==="grass"?en(i,hn,Math.random()<.5?yn.grass:16777215,Math.round(6*e),2.5,.6,8,1.3,.7):(en(i,hn,yn[t],Math.round(10*e),1.8,.8,3,1.6,1.3),Gs(n,e*.7,.5,yn[t],.35))}const Nh=new WeakMap;function Fh(n,e,t){let i=Nh.get(n);if(!i){Nh.set(n,i={d:e.clone(),t:Math.random()*.2,air:0});return}const r=i.d.angleTo(e)*ge;i.d.copy(e),i.t-=t.dt;const s=r/Math.max(t.dt,1e-4);if(s<.4||t.air)return;const a=Tm(e),o=s>7,l=rn.fx;if(i.t>0)return;const c=Yt(e),u=Ou.copy(e).cross(t.face||hn.set(0,0,1)).normalize();hn.copy(e),a==="water"?o?(i.t=.045,en(c,hn,yn.water,5,4,.55,16,.5,1.5,u),en(c,hn,yn.water,5,4,.55,16,.5,1.5,u.clone().negate()),Math.random()<.6&&Gs(e,.8,.8)):(i.t=t.big?.35:.24,Gs(e,t.big?1.2:.7,1),Math.random()<l*.6&&en(c,hn,yn.water,2,1.6,.4,14,.5,.7)):a==="ice"?o?(i.t=.05,Fu(e,t.face||u,.07,.45,16777215,1.4),en(c,hn,yn.ice,2,2,.35,10,1,.6)):(i.t=.3,Math.random()<l&&en(c,hn,yn.ice,2,1.2,.5,6,1,.5)):a==="lava"?(i.t=o?.04:.2,en(c,hn,yn.lava,o?3:1,2.5,.5,-1,.6,.8)):(PS(e)&&Math.random()<l*.5&&en(c,hn,yn.lava,1,1.5,.8,-1.5,.4,.6),o?(i.t=.06,en(c,hn,a==="grass"?Math.random()<.3?16773792:yn.grass:yn[a],2,2.2,.5,6,1,.8)):(i.t=t.big?.4:.32,Uh[a]&&t.prints&&Fu(e,t.face||u,.12,.17,Uh[a],2.6),a!=="grass"&&Math.random()<l*.8&&en(c,hn,yn[a],t.big?4:2,1,.6,2,1.4,t.big?1.3:.9)))}let Oh=0;function DS(n){for(const e of bl){if(!e.m.visible)continue;e.t+=n;const t=e.t/e.dur;e.m.scale.setScalar(e.m.scale.x+e.grow*n/e.dur),e.m.material.opacity=Math.max(0,1-t)*e.op,t>=1&&(e.m.visible=!1)}if(Em(n),!(m.state!=="play"||m.mode==="ultDraw")){Fh(M,M.d,{dt:n,air:M.air>0&&!M.hop,face:M.face,prints:!0}),Oh>0&&M.air<=0&&Tl(M.d,.8),Oh=M.air;for(const e of m.enemies)e.dead||e.spawn<1||(Fh(e,e.d,{dt:n,air:e.base==="bee"||(e.leapK||0)>0,big:e.r>.8,face:null,prints:e.r>.8}),e.base==="jelly"&&Rt.liquid!=="ice"&&Math.random()<n*.8&&Gs(e.d,1,1.4,Rt.liquid==="lava"?16756848:16777215,.3))}}Bt("burn",()=>{const n=Yt(M.d);en(n,M.d.clone(),15658734,12,1.6,1.1,-2.5,.6,1.8)});function LS(){for(const n of bl)n.m.visible=!1;for(const n of El)n.life=0;Em(0)}function IS(n,e,t,i,r){if(n.kind==="line"){const o=n.L*e/i,l=-n.w+2*n.w*t/r;return{d:n.c.clone().multiplyScalar(ge).addScaledVector(n.dir,o).addScaledVector(n.s,l).normalize(),u:o/n.L}}if(n.kind==="sector"){const o=n.r0+(n.r-n.r0)*e/i,l=-n.arc+2*n.arc*t/r;return{d:n.c.clone().multiplyScalar(ge).addScaledVector(n.dir,Math.cos(l)*o).addScaledVector(n.s,Math.sin(l)*o).normalize(),u:(o-n.r0)/(n.r-n.r0)}}n.e1||([n.e1,n.e2]=ts(n.c));const s=t/r*Math.PI*2,a=n.kind==="circle"?n.r*e/i:n.r1+(n.r2-n.r1)*e/i;return{d:n.c.clone().multiplyScalar(ge).addScaledVector(n.e1,Math.cos(s)*a).addScaledVector(n.e2,Math.sin(s)*a).normalize(),u:n.kind==="circle"?a/n.r:(a-n.r1)/(n.r2-n.r1)}}function jr(n,e,t=.3){if(n.kind==="line"){const r=e.clone().sub(n.c).multiplyScalar(ge),s=r.dot(n.dir),a=r.dot(n.s);return s>=-t&&s<=n.L+t&&Math.abs(a)<=n.w+t}const i=n.c.angleTo(e)*ge;if(n.kind==="sector"){if(i<n.r0-t||i>n.r+t)return!1;if(i<t&&n.r0<=0)return!0;const r=e.clone().sub(n.c);return Math.abs(Math.atan2(r.dot(n.s),r.dot(n.dir)))<=n.arc+t/Math.max(i,.5)}return n.kind==="circle"?i<=n.r+t:i>=n.r1-t&&i<=n.r2+t}function Ui(n,e,t,i){return{kind:"line",c:n.clone(),dir:e.clone(),s:new me().crossVectors(n,e),L:t,w:i}}function Jo(n,e,t,i,r=0){return{kind:"sector",c:n.clone(),dir:e.clone(),s:new me().crossVectors(n,e),r0:r,r:t,arc:i}}const US="attribute float u; varying float vU; void main(){ vU=u; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",NS="uniform float prog; uniform float flash; varying float vU; void main(){ vec3 c=mix(vec3(1.,.82,.23),vec3(1.,.22,.18),flash); float a = vU<=prog ? .62 : .2; if (vU>.97) a=.85; gl_FragColor=vec4(c,a); }";function Am(n){const e=n.kind==="line"?14:10,t=n.kind==="line"?4:n.kind==="sector"?Math.max(8,Math.round(n.arc*16)):32,i=[],r=[],s=[];for(let o=0;o<=e;o++)for(let l=0;l<=t;l++){const{d:c,u}=IS(n,o,l,e,t),d=c.clone().multiplyScalar(ge+ln(c)+.09);i.push(d.x,d.y,d.z),r.push(o===e?1:u*.96)}for(let o=0;o<e;o++)for(let l=0;l<t;l++){const c=o*(t+1)+l,u=c+t+1;s.push(c,u,c+1,u,u+1,c+1)}const a=new Kt;return a.setAttribute("position",new nt(i,3)),a.setAttribute("u",new nt(r,1)),a.setIndex(s),a}function Al(n,e,t,i=!1){n.resolve||(t=Ta(e,t,n.attack));const r=Am(n);return n.mat=new Si({vertexShader:US,fragmentShader:NS,uniforms:{prog:{value:0},flash:{value:0}},transparent:!0,depthWrite:!1,side:sn}),n.mesh=new K(r,n.mat),n.mesh.renderOrder=1,Ve.add(n.mesh),Object.assign(n,{enemy:e,t:0,dur:t,free:i}),i||(e.warn=n),m.warnings.push(n),n}function kh(n,e){return n.t+=e,n.mat.uniforms.prog.value=n.t/n.dur,n.mat.uniforms.flash.value=n.dur-n.t<.15?Math.floor(n.t*24)%2?1:.55:0,n.t>=n.dur}function is(n){Ve.remove(n.mesh),n.mesh.geometry.dispose(),n.mat.dispose(),m.warnings=m.warnings.filter(e=>e!==n),n.enemy.warn===n&&(n.enemy.warn=null)}const Rm=new an(.07,.62,5);Rm.rotateX(Math.PI/2);const FS=new xt({color:16769696}),OS=new xt({color:16763981}),kS=.62,BS=.55;function zS(n,e){const t=gn[n.type],i=new K(Rm,FS);Ve.add(i),m.shots.push({d:n.d.clone(),dir:e.clone(),left:t.shotLen,v:t.shotSpeed,owner:n,mesh:i,back:!1,spent:!1})}function Cs(n){Ve.remove(n.mesh),n.dead=!0}function GS(n){for(const e of m.shots){if(!e.back&&m.counterT>0)continue;const t=e.v*n;if(e.d=Je(e.d,e.dir,t),e.dir=ct(e.d,e.dir).normalize(),e.left-=t,e.left<=0){Cs(e);continue}if(ln(e.d)>1.15&&!qp(e.d)){je(e.d.clone().multiplyScalar(ge+ln(e.d)),13152400,5,3,.3),Cs(e);continue}e.mesh.position.copy(e.d).multiplyScalar(ge+ln(e.d)+BS),e.mesh.quaternion.setFromUnitVectors(qi,e.d);const i=e.dir.clone().applyQuaternion(e.mesh.quaternion.clone().invert());e.mesh.rotateY(Math.atan2(i.x,i.z));for(const r of m.props)if(!r.dead&&e.d.angleTo(r.d)*ge<=r.r+Ae.shotPad){Il(r,"enemy"),je(e.mesh.position,16763981,5,3,.3),Cs(e);break}if(!e.dead){if(e.back){for(const r of m.enemies)if(!(r.dead||r.spawn<1||e.d.angleTo(r.d)*ge>r.r+.4)){_r(r,3,e.dir,{pierce:!0}),je(e.mesh.position,16763981,14,6,.4),Cs(e);break}}else if(!e.spent&&e.d.angleTo(M.d)*ge<kS){e.spent=!0;const r=Kr(e.owner,"shot",e.d);r==="parry"?(e.back=!0,e.spent=!1,e.mesh.material=OS,e.v*=1.4,e.left=12,e.dir=e.owner.dead?e.dir.clone().negate():qt(e.d,e.owner.d)):r==="hit"&&Cs(e)}}}m.shots.some(e=>e.dead)&&(m.shots=m.shots.filter(e=>!e.dead))}function HS(){m.shots.forEach(Cs),m.shots=[]}function Cm(n,e,t){const i={kind:"circle",c:n.clone(),r:e},r=new xt({color:16738848,transparent:!0,opacity:.65,depthWrite:!1,side:sn}),s=new K(Am(i),r);s.renderOrder=1,Ve.add(s),m.hazards.push({z:i,mesh:s,t,dur:t})}function VS(n){for(const e of m.hazards)e.t-=n,e.mesh.material.opacity=Math.min(.65,e.t*1.2)*(.8+Math.sin(e.t*12)*.2),M.air<=0&&M.invuln<=0&&M.state!=="dash"&&M.state!=="ult"&&M.guardInv<=0&&jr(e.z,M.d,.1)&&Ad(e.z.c),e.t<=0&&(Ve.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose(),e.dead=!0);m.hazards.some(e=>e.dead)&&(m.hazards=m.hazards.filter(e=>!e.dead))}function WS(){for(const n of m.hazards)Ve.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose();m.hazards=[]}const Bh=2.8,XS=1.15,qS=.8,$S=30,YS=new tn(.42),Ic=[];function jS(n){if(!Ic[n]){const t=document.createElement("canvas");t.width=t.height=64;const i=t.getContext("2d");i.font="900 52px sans-serif",i.textAlign="center",i.textBaseline="middle",i.lineWidth=8,i.strokeStyle="#0b1030",i.strokeText(n,32,34),i.fillStyle="#fff",i.fillText(n,32,34),Ic[n]=new w_(t)}const e=new __(new Dp({map:Ic[n],depthTest:!1,transparent:!0}));return e.scale.setScalar(.8),e.position.y=.85,e.renderOrder=6,e}const zh=(n,e)=>new pn({color:n,emissive:e,emissiveIntensity:1.6,flatShading:!0}),tt={boss:null,nodes:[],cfg:null,next:0,bad:!1,t:0},Gh=ee("sealHint"),Hh={ordered:"照編號順序劃過",moving:"光點會移動",forbid:"只劃金色，避開紅色"},Rl=()=>{Gh.hidden=!tt.boss,tt.boss&&(Gh.textContent=`封印 ${tt.nodes.filter(n=>n.hit).length} / ${tt.nodes.filter(n=>!n.bad).length}　${Hh[Object.keys(Hh).find(n=>tt.cfg[n])]||"大招一筆劃過光點"}`)};function Pm(n){const[e,t]=ts(tt.boss.d),i=n.a+(tt.cfg.moving?tt.t*.35:0);(tt.cfg.moving||!n.d)&&(n.d=tt.boss.d.clone().multiplyScalar(ge).addScaledVector(e,Math.cos(i)*n.r).addScaledVector(t,Math.sin(i)*n.r).normalize())}function Dm(n){n.mesh.position.copy(n.d).multiplyScalar(ge+ln(n.d)+.75+Math.sin(tt.t*3+n.a)*.1),n.mesh.quaternion.setFromUnitVectors(qi,n.d),n.mesh.rotateY(tt.t*2)}function KS(n,e){Cl(),Object.assign(tt,{boss:n,cfg:e,next:0,bad:!1,t:0}),n.armored=!0;const t=e.count+(e.forbid||0),i=Math.random()*6.28;for(let r=0;r<t;r++){const s=r>=e.count,a={i:r,bad:s,a:s?i+(r-e.count+.5)*Math.PI*2/(e.forbid||1):i+r/e.count*Math.PI*2,r:s?Bh*.34:Bh,hit:!1};a.mesh=new K(YS,s?zh(16730714,16715808):zh(16763981,13144064)),a.mesh.castShadow=!0,Ve.add(a.mesh),e.ordered&&a.mesh.add(jS(r+1)),Pm(a),Dm(a),tt.nodes.push(a),cr(a.mesh.position,a.d,16763981,1.5,.6,3)}yl(100),gr("護甲展開","用大招一筆劃過光點"),Re.warn(),m.shake=Math.max(m.shake,.7),Rl()}function ZS(){tt.next=0,tt.bad=!1;for(const n of tt.nodes)n.hit=!1,n.mesh.material.color.set(n.bad?16730714:16763981),n.mesh.material.emissive.set(n.bad?16715808:13144064);Rl()}function JS(n){if(tt.boss){for(const e of tt.nodes)if(!(e.hit||e.mesh.position.distanceTo(n)>(e.bad?qS:XS))){if(e.bad){tt.bad=!0,e.hit=!0,ot("碰到紅色光點！","var(--hurt)"),Re.empty();continue}tt.cfg.ordered&&e.i!==tt.next||(e.hit=!0,tt.next++,e.mesh.material.color.set(16777215),e.mesh.material.emissive.set(4843263),je(e.mesh.position,4843263,16,7,.5),Re.step(),Rl())}}}function QS(){if(!tt.boss)return;const n=tt.boss;!tt.bad&&tt.nodes.every(t=>t.bad||t.hit)?(n.armored=!1,n.stun=4.5,n.phase++,n.warn=null,Zs(.4,"#ffcc4d"),gr("封印破除","趁它暈眩全力輸出"),Re.win(),m.shake=1.2,cr(tt.boss.mesh.position,n.d,16763981,4,.8,4),je(n.mesh.position,16763981,40,12,.9),Cl()):(ot("封印沒破，再劃一次","var(--gold)"),ZS())}function eb(n,e){if(tt.boss){if(tt.boss.dead){Cl();return}m.mode!=="ultDash"&&(tt.t+=n);for(const t of tt.nodes)Pm(t),Dm(t);m.mode==="play"&&(m.ult=Math.min(100,m.ult+e*$S))}}function Cl(){for(const n of tt.nodes)Ve.remove(n.mesh),n.mesh.material.dispose();tt.nodes=[],tt.boss=null,Rl()}const ku={rockKing:{name:"岩王",at:[.5],seal:{count:3},phases:[["cleave","swing","ring","triple","summon:boulder"],["meteor","quake","swing","ring","cleave","triple","summon:boulder"]]},frostQueen:{name:"冰晶女王",at:[.66,.33],seal:{count:4,ordered:!0},phases:[["fan","chillField","ring"],["fan","cross","chillField","nova"],["fan","nova","cross","meteor","summon:frostGrunt"]]},sandWyrm:{name:"沙海王蟲",at:[.66,.33],seal:{count:4,moving:!0},phases:[["burrow","charge","summon:sandGrunt"],["burrow","charge","storm","cross"],["burrow","charge","charge","meteor","summon:sandBoulder"]]},lavaTitan:{name:"熔岩泰坦",at:[.66,.33],seal:{count:4,forbid:2},phases:[["meteor","cleave","ring","triple"],["meteor","swing","quake","nova","summon:lavaGrunt","triple"],["meteor","quake","fan","nova","swing","summon:lavaBrute","cleave"]]}},st=(n,e=0,t=0)=>new pn({color:n,emissive:e,emissiveIntensity:t,roughness:.6,flatShading:!0}),li=(n,e,t=1)=>{const i=n.attributes.position,r=new Map;for(let s=0;s<i.count;s++){const a=`${i.getX(s).toFixed(3)},${i.getY(s).toFixed(3)},${i.getZ(s).toFixed(3)}`;if(!r.has(a)){const l=Math.sin((s+1)*12.9898*t)*43758.5453;r.set(a,1+(l-Math.floor(l)-.5)*e)}const o=r.get(a);i.setXYZ(s,i.getX(s)*o,i.getY(s)*o,i.getZ(s)*o)}return n.computeVertexNormals(),n};function yt(n,e=[],t=0,i=0){n.updateMatrixWorld(!0);const r=n.matrixWorld.clone().invert(),s=[],a=[],o=new Set;e.forEach(u=>u.traverse(d=>o.add(d))),n.traverse(u=>{if(!u.isMesh||o.has(u))return;const d=u.geometry.index?u.geometry.toNonIndexed():u.geometry.clone();for(const x of Object.keys(d.attributes))x!=="position"&&x!=="normal"&&d.deleteAttribute(x);d.applyMatrix4(new dt().multiplyMatrices(r,u.matrixWorld));const f=u.material.color.clone().multiplyScalar(u.material.isMeshBasicMaterial?1.7:1),h=d.attributes.position.count,_=new Float32Array(h*3);for(let x=0;x<h;x++)_.set([f.r,f.g,f.b],x*3);d.setAttribute("color",new Pn(_,3)),s.push(d),a.push(u)}),a.forEach(u=>{u.parent.remove(u),u.geometry.dispose(),u.material.dispose()});const l=new pn({vertexColors:!0,flatShading:!0,roughness:.6,emissive:t,emissiveIntensity:i}),c=new K(Wi(s),l);return c.castShadow=!0,n.add(c),c}function ui(n,e,t,i,r,s,a){for(const o of[-1,1]){const l=new K(new pt(r,8,6),st(s));l.position.set(o*e,t,i),l.scale.set(1.25,.8,.45),l.rotation.z=o*.35,n.add(l);const c=new K(new pt(r*.48,8,6),new xt({color:a}));c.position.set(o*(e-r*.1),t-r*.08,i+r*.32),c.scale.set(1.2,.8,.5),c.rotation.z=o*.35,n.add(c)}}function Qn(n){const e=new Ye;for(let t=0;t<3;t++){const i=new K(new tn(.1),new xt({color:16763981}));i.position.set(Math.cos(t*2.09)*.4,0,Math.sin(t*2.09)*.4),e.add(i)}return e.position.y=n,e.visible=!1,e}function tb([n,e,t]=[15222332,5898264,8004632]){const i=new Ye,r=st(n,e,.35),s=st(t),a=li(new At(.42,1),.12,3);a.scale(1,.95,1);const o=new K(a,r);o.castShadow=!0,i.add(o);for(let g=0;g<3;g++){const p=new K(new an(.08,.26,4),r);p.position.set((g-1)*.1,.42,-.04-Math.abs(g-1)*.04),p.rotation.set(-.3,0,(1-g)*.45),i.add(p)}ui(i,.15,.05,.33,.09,2755084,16773296);for(const g of[-1,1]){const p=new K(new pt(.1,6,5),s);p.position.set(g*.17,-.38,.05),p.scale.set(1,.6,1.3),i.add(p)}const l=new Ye;l.position.set(.36,-.05,.1),i.add(l);const c=new K(new pt(.09,6,5),s);l.add(c);const u=new Ye;l.add(u);const d=new K(new Xt(.025,.025,1.25,5),st(8014374));d.position.y=.25,u.add(d);const f=new K(new an(.07,.24,4),st(13225174,2236979,.3));f.position.y=.98,u.add(f);const h=new K(new Xt(.04,.04,.07,6),st(14267498));h.position.y=.82,u.add(h);const _=Qn(.75);i.add(_),yt(l),yt(_);const x=yt(i,[l,_],e,.35);return{group:i,body:x,tint:[x.material],stars:_,rig:{arm:l,spear:u}}}function yd([n,e,t]=[9329622,2363471,7037296],i=1){const r=new Ye,s=new Ye;s.scale.setScalar(i),r.add(s);const a=st(n,e,.35),o=st(new Se(n).lerp(new Se(16777215),.3).getHex(),e,.25),l=st(15326400),c=st(t,t===7037296?0:t,t===7037296?0:.5),u=st(new Se(n).multiplyScalar(.45).getHex()),d=li(new At(.72,1),.1,7);d.scale(1.15,1,.95);const f=new K(d,a);f.castShadow=!0,s.add(f);const h=new K(li(new At(.38,1),.08,5),a);h.position.set(0,.48,.32),s.add(h);const _=new K(new At(.2,0),o);_.position.set(0,.36,.62),_.scale.set(1.4,.8,.8),s.add(_);for(const T of[-1,1]){const E=new K(new an(.045,.16,4),l);E.position.set(T*.14,.42,.72),s.add(E);const y=new K(new an(.13,.62,5),l);y.position.set(T*.42,.82,.2),y.rotation.set(-.2,0,-T*.75),s.add(y);for(let A=0;A<2;A++){const D=new K(new an(.07,.2,4),u);D.position.set(T*(.35+A*.25),.45-A*.2,-.38),D.rotation.set(-.8,0,-T*.6),s.add(D)}const C=new K(new Xt(.16,.2,.3,6),a);C.position.set(T*.32,-.7,0),s.add(C)}ui(s,.14,.58,.62,.075,1838896,16769126);const x=[];for(const T of[-1,1]){const E=new K(li(new $r(.34,0),.15,2+T),c.clone());E.castShadow=!0,E.position.set(T*.98,-.2,.25),s.add(E),x.push(E)}const g=Qn(1.25*i);r.add(g),yt(g);const p=yt(s,x,e,.35);return{group:r,body:p,tint:[p.material],stars:g,rig:{fists:x,core:s}}}function nb([n,e]=[9408666,1052696]){const t=new Ye,i=new Ye;t.add(i);const r=st(n,e,.2),s=st(1710626),a=new K(li(new At(.58,1),.16,11),r);a.castShadow=!0,i.add(a);const o=new K(new pt(.3,10,6),s);o.position.set(0,.02,.42),o.scale.set(1.35,.3,.55),i.add(o);const l=new K(new pt(.09,10,8),new pn({color:16726564,emissive:16719888,emissiveIntensity:2.2}));l.position.set(0,.02,.54),l.scale.set(1,.75,.5),i.add(l);for(let f=0;f<4;f++){const h=new K(new od(.07+f*.01),r);h.position.set(Math.cos(f*1.6)*.75,-.3+f%2*.5,Math.sin(f*1.6)*.75),h.visible=!1,t.add(h)}const c=Qn(.9);t.add(c);const u=t.children.filter(f=>f.geometry?.type==="TetrahedronGeometry");yt(c);const d=yt(i,[l],e,.2);return{group:t,body:d,tint:[d.material],stars:c,rig:{roll:i,eye:l,pebbles:u}}}function ib([n,e]=[8376575,1732800]){const t=new Ye,i=st(n,e,.9),r=st(new Se(n).multiplyScalar(.8).getHex(),e,.6),s=new K(new pt(.5,10,7,0,Math.PI*2,0,Math.PI*.6),i);s.position.y=.05,s.castShadow=!0,t.add(s);const a=new Ye;t.add(a);for(let c=0;c<5;c++){const u=new K(new an(.07,.6,4),r);u.rotation.x=Math.PI,u.position.set(Math.cos(c*1.26)*.26,-.3,Math.sin(c*1.26)*.26),a.add(u)}ui(t,.14,.22,.44,.07,795712,16777215);const o=Qn(.75);t.add(o),yt(o),yt(a);const l=yt(t,[a,o],e,.9);return{group:t,body:l,tint:[l.material],stars:o,rig:{tentacles:a}}}function rb([n,e]=[11104570,5913112]){const t=new Ye,i=st(n,3151876,.3),r=st(e);for(let d=0;d<4;d++){const f=new K(new an(.38-d*.07,.3,7),d%2?i:r);f.position.y=-.26+d*.2,f.rotation.y=d*.4,d||(f.castShadow=!0),t.add(f)}ui(t,.12,.02,.27,.07,1707524,16773296);for(const d of[-1,1]){const f=new K(new pt(.08,6,5),r);f.position.set(d*.15,-.4,.03),t.add(f)}const s=new Ye;s.position.set(.34,0,.2),t.add(s);const a=new K(new Vi(.3,.022,4,10,Math.PI),st(5913112));a.rotation.z=-Math.PI/2,s.add(a);const o=new Ye;o.position.copy(s.position),t.add(o);for(const d of[-1,1]){const f=new K(new Xt(.009,.009,.323,4),st(16770480));f.position.set(0,d*.15,-.06),f.rotation.x=-d*Math.atan(.12/.3),o.add(f)}const l=new K(new pt(.065,6,4),st(e));l.position.set(.34,0,.08),t.add(l);const c=Qn(.7);t.add(c),yt(s),yt(c);const u=yt(t,[s,c,o,l],3151876,.3);return{group:t,body:u,tint:[u.material],stars:c,rig:{bow:s,string:o,drawHand:l}}}function sb(){const n=new Ye,e=new Ye;n.add(e);const t=st(10476799,1727130,.7),i=st(5218528,1325690,.6),r=new K(new tn(.8,1),t);r.scale.set(.85,1.7,.85),r.position.y=.25,r.castShadow=!0,e.add(r);for(let l=0;l<5;l++){const c=new K(new an(.13,.62,4),i),u=(l-2)*.42;c.position.set(Math.sin(u)*.42,1.5-Math.abs(l-2)*.12,Math.cos(u)*.1),c.rotation.z=-u*.8,e.add(c)}ui(e,.2,.62,.62,.1,663616,16777215);const s=[];for(const l of[-1,1]){const c=new K(new tn(.34,0),t.clone());c.castShadow=!0,c.scale.y=1.6,c.position.set(l*.98,-.2,.25),e.add(c),s.push(c)}const a=Qn(2);n.add(a),yt(a);const o=yt(e,s,1727130,.7);return{group:n,body:o,tint:[o.material],stars:a,rig:{fists:s,core:e}}}function ab(){const n=new Ye,e=new Ye;n.add(e);const t=st(13208132,4857864,.35),i=st(15714698,4857864,.25),r=st(5911572),s=new K(li(new At(.95,1),.12,9),t);s.scale.set(1.05,.85,1.25),s.position.set(0,.15,.25),s.castShadow=!0,e.add(s);for(let c=0;c<3;c++){const u=new K(li(new At(.72-c*.14,1),.1,4+c),c%2?i:t);u.position.set(0,-.25-c*.1,-.9-c*.85),u.castShadow=!0,e.add(u)}for(let c=0;c<4;c++){const u=new K(new an(.12,.42,4),r);u.position.set(0,.85-c*.22,-.1-c*.55),u.rotation.x=-.5,e.add(u)}ui(e,.36,.42,1.06,.12,2100228,16734752);const a=[];for(const c of[-1,1]){const u=new K(new an(.17,.8,5),r);u.rotation.x=1.3,u.rotation.z=c*.5,u.castShadow=!0,u.position.set(c*.98,-.2,.25),e.add(u),a.push(u)}const o=Qn(1.5);n.add(o),yt(o);const l=yt(e,a,4857864,.35);return{group:n,body:l,tint:[l.material],stars:o,rig:{fists:a,core:e}}}const ob=()=>yd(void 0,1.6),lb=()=>yd([4141110,10496e3,16742960],1.95);function cb([n,e]=[4165482,14205040]){const t=new Ye,i=st(n,666138,.3),r=st(1980970),s=st(e,3811840,.3),a=new K(li(new pt(.52,9,6,0,Math.PI*2,0,Math.PI*.55),.08,5),i);a.position.y=-.12,a.castShadow=!0,t.add(a);const o=new K(new Xt(.5,.44,.16,9),r);o.position.y=-.2,t.add(o);for(let h=0;h<3;h++){const _=new K(new an(.07,.2,4),r);_.position.set(0,.3-h*.06,-.12-h*.16),_.rotation.x=-.6,t.add(_)}ui(t,.13,.08,.4,.07,662032,16773296);for(const h of[-1,1])for(const _ of[-.2,.15]){const x=new K(new pt(.08,5,4),r);x.position.set(h*.38,-.36,_),t.add(x)}const l=new Ye;l.position.set(0,-.02,.62),t.add(l);const c=new K(new Xt(.42,.42,.08,10),s);c.rotation.x=Math.PI/2,l.add(c);const u=new K(new pt(.12,6,5),r);u.position.z=.05,l.add(u);const d=Qn(.75);t.add(d),yt(d),yt(l);const f=yt(t,[l,d],666138,.3);return{group:t,body:f,tint:[f.material],stars:d,rig:{shield:l}}}function ub([n,e]=[7327818,15788192]){const t=new Ye,i=st(n,1720328,.3),r=st(e),s=st(2775576),a=new K(li(new At(.45,1),.1,7),i);a.scale.set(1.15,.75,1),a.castShadow=!0,t.add(a);const o=new K(new pt(.34,8,6),r);o.scale.set(1,.6,.7),o.position.set(0,-.12,.16),t.add(o);for(const u of[-1,1]){const d=new K(new pt(.15,7,5),i);d.position.set(u*.2,.3,.14),t.add(d);const f=new K(new pt(.16,6,5),s);f.scale.set(1,.55,1.6),f.position.set(u*.4,-.28,-.1),t.add(f)}ui(t,.2,.32,.27,.08,663556,16773296);const l=Qn(.7);t.add(l),yt(l);const c=yt(t,[l],1720328,.3);return{group:t,body:c,tint:[c.material],stars:l,rig:{}}}function db([n,e]=[13650570,16050896]){const t=new Ye,i=st(n,4196904,.45),r=st(e),s=st(16777215),a=new K(new Xt(.22,.3,.55,8),r);a.position.y=-.2,a.castShadow=!0,t.add(a);const o=new Ye;t.add(o);const l=new K(li(new pt(.55,10,6,0,Math.PI*2,0,Math.PI*.5),.06,3),i);l.position.y=.02,l.scale.y=.8,l.castShadow=!0,o.add(l);for(let d=0;d<6;d++){const f=new K(new pt(.08,5,4),s),h=d*1.05;f.position.set(Math.cos(h)*.34,.28+d%2*.06,Math.sin(h)*.34),f.scale.y=.5,o.add(f)}ui(t,.1,-.12,.25,.065,2756640,10485663);const c=Qn(.8);t.add(c),yt(c),yt(o);const u=yt(t,[c,o],4196904,.45);return{group:t,body:u,tint:[u.material,o.children[0].material],stars:c,rig:{cap:o}}}function fb([n,e]=[16762938,2759176]){const t=new Ye,i=st(n,5913088,.4),r=st(e),s=new K(new pt(.26,8,6),i);s.scale.set(.9,.85,1.15),s.castShadow=!0,t.add(s);for(const u of[-.08,.08]){const d=new K(new Vi(.24,.035,4,10),r);d.position.z=u-.04,t.add(d)}const a=new K(new an(.06,.16,4),r);a.rotation.x=-Math.PI/2,a.position.z=-.32,t.add(a),ui(t,.09,.05,.22,.055,1706496,16777215);const o=new Ye;o.position.y=.2,t.add(o);for(const u of[-1,1]){const d=new K(new pt(.16,6,4),new xt({color:14677247,transparent:!0,opacity:.55}));d.scale.set(1.2,.15,.7),d.position.x=u*.18,o.add(d)}const l=Qn(.5);t.add(l),yt(l);const c=yt(t,[o,l],5913088,.4);return{group:t,body:c,tint:[c.material],stars:l,rig:{wings:o}}}function Lm([n,e]=[10115800,3149898],t=1){const i=new Ye,r=st(n,e,.5),s=new K(li(new At(.48*t,1),.14,13),r);s.scale.set(1.1,.85,1.1),s.castShadow=!0,i.add(s);for(let l=0;l<3;l++){const c=new K(new pt(.12*t,6,4),r),u=l*2.1+.4;c.position.set(Math.cos(u)*.36*t,.22*t,Math.sin(u)*.36*t-.1),i.add(c)}ui(i,.15*t,.08*t,.38*t,.08*t,1706024,16777215);const a=Qn(.75*t);i.add(a),yt(a);const o=yt(i,[a],e,.5);return{group:i,body:o,tint:[o.material],stars:a,rig:{}}}const hb=n=>Lm(n,.6),pb={grunt:tb,brute:yd,boulder:nb,jelly:ib,archer:rb,rock:ob,queen:sb,wyrm:ab,titan:lb,shell:cb,hopper:ub,shroom:db,bee:fb,splitter:Lm,blobling:hb},mb={grunt:15222332,brute:9329622,boulder:9408666,boss:9329622,jelly:8376575,archer:11104570,shell:4165482,hopper:7327818,shroom:13650570,bee:16762938,splitter:10115800},Sn=n=>n.d.clone().multiplyScalar(ge+ln(n.d)+n.r);function zi(n,e,t={}){const i=gn[n],r=i.base||n,s=pb[i.model||r](i.pal),a=r==="boss"?i.hp:i.hp*m.hpMul;mS(s);const o={type:n,base:r,d:e.clone(),hp:a,maxHp:a,r:i.r,model:s,mesh:s.group,spawn:0,atkCd:1+Math.random()*2,stun:0,flash:0,strafe:Math.random()<.5?-1:1,kb:new me,lunge:null,warn:null,rolling:null,chain:null,bob:Math.random()*6,slamT:0,summonT:0,pattern:0,phase:0,stuck:0,diveCd:3,...t};return t.hp&&(o.maxHp=t.hp),r==="boss"&&(o.script=ku[n],o.sealAt=[...o.script.at]),s.group.visible=!1,Ve.add(s.group),m.enemies.push(o),cr(Yt(e).addScaledVector(e,.1),e,r==="boss"?12610559:10185727,r==="boss"?2.5:1.4,.6,3),o}function Sd(n){n.warn&&is(n.warn),Ve.remove(n.mesh),n.mesh.traverse(e=>{e.isMesh&&(e.geometry.dispose(),e.material.dispose())}),n.dead=!0}function _r(n,e,t,{pierce:i=!1}={}){const r=gn[n.type];if(n.armored){n.flash=.08,Re.thud(),ot("護甲！用大招劃過光點","var(--gold)"),m.hitstop=Qt.hitstop;return}if(n.guardHp>0&&!i){n.guardHp--,n.flash=.08,Re.thud(),m.hitstop=Qt.hitstop,n.kb.copy(t).multiplyScalar(1.5),n.guardHp<=0&&n.bubble?(n.mesh.remove(n.bubble),n.bubble.geometry.dispose(),n.bubble.material.dispose(),n.bubble=null,je(Sn(n),5999871,22,8,.5),ot("護盾破了！","var(--guard)")):ot(`護盾 ×${n.guardHp}`,"var(--guard)");return}if(r.front&&!(n.stun>0)&&!i&&n.face&&t.dot(n.face)<-r.front){n.flash=.06,Re.clang(),m.hitstop=Qt.hitstop,je(Sn(n).addScaledVector(n.face,n.r),14205040,12,6,.3),ot("盾擋住了！繞到背後或格擋","var(--mist)"),jt("blocked",n),M.state==="dash"&&(M.state="free",ki(Je(M.d,n.face,.9)),M.anim.imp=.8);return}const s=n.base==="boulder"&&!(n.stun>0)&&!i;s&&(e*=r.armor,Re.thud(),ot("好硬！等它暈了再打","var(--mist)")),n.hp-=e,n.flash=.12,m.combo++,m.bestCombo=Math.max(m.bestCombo,m.combo),m.comboT=Qt.comboTime,hr(bi.hit),n.kb.copy(t).multiplyScalar(s?.6:r.kb),n.cast&&n.base==="grunt"&&(n.cast=null,n.attackRelease=null,n.atkCd=1.5,ot("打斷","var(--dash)")),n.whirl&&n.whirl.t<n.whirl.wind&&(n.whirl=null,n.atkCd=1.5,ot("打斷","var(--dash)")),(n.base==="grunt"||n.base==="archer"||n.base==="bee"||n.base==="shroom")&&n.warn&&(is(n.warn),n.chain=null,n.atkCd=1.5,ot("打斷","var(--dash)"));const a=e>=1.4||n.stun>0;if(m.hitstop=Math.max(m.hitstop,Qt.hitstop*$t(.8+e*.25,.8,2)),m.shake=Math.max(m.shake,a?.5:.35),n.squash=a?1.3:1,dd(t,a?.22:.12),s||Re.hit(m.combo,a),Y1(Sn(n).addScaledVector(n.d,n.r+.3),Math.max(1,Math.round(e*10)),a?"big":s?"weak":""),je(Sn(n),e>=1.4?16763981:16777215,8+Math.round(e*3),7,.35),jt("hit",n),n.sealAt?.length&&n.hp/n.maxHp<=n.sealAt[0]){n.hp=n.maxHp*n.sealAt.shift(),yh(),KS(n,n.script.seal);return}n.hp<=1e-6&&Im(n),yh()}function Im(n,e=!1){if(n.dead)return;const t=gn[n.type],i=Sn(n);if(je(i,t.pal?.[0]??mb[n.base],24,9,.7),je(i,16763981,8,6,.5),n.base==="boss"&&(je(i,12610559,60,14,1.2),cr(i,n.d,16763981,4,.8,4),m.shake=1.4),m.score+=Math.round(t.pts*(1+Math.min(m.combo,30)*.05)),hr(bi.kill),!e&&(t.split||n.affix==="split")&&yb(n),t.blast&&!e){const s={kind:"circle",c:n.d.clone(),r:1.35,attack:"circle"};Al(s,n,1,!0)}const r=n.r>=.8;if(Re.kill(r),Sd(n),mr(M),m.hitstop=Math.max(m.hitstop,Qt.killHitstop*(r?1.8:1)),r&&(em(.6),m.shake=Math.max(m.shake,.7)),m.combo>=5&&m.combo%5===0&&ci("happy",.6),jt("kill",n),n.base==="boss")for(const s of m.enemies)!s.dead&&s!==n&&Im(s,!0)}const gb=()=>m.tut?1.6:Math.max(Qt.warnMin,Qt.warnBase-Qt.warnStep*(m.tier-1)),Vh=Sm;function _b(n){if(n.only)return n.only[Math.floor(Math.random()*n.only.length)];const e=gn[n.type];if(n.base==="grunt"){if(e.burrow&&!n.burrowed&&Math.random()<.6)return"burrow";n.burrowed=!1;const i=Math.random();return m.tier>=2&&i<.22?"whirl":(m.tier>=5&&i<.45&&(n.chain={kind:"line",left:1,idx:0,gap:0}),"line")}if(n.base==="grunt"||n.base==="bee")return"line";if(n.base==="boulder")return"roll";if(n.base==="archer")return n.volleyNow=!e.volley&&m.tier>=5&&Math.random()<.25,"shoot";if(n.base==="shell")return"line";if(n.base==="hopper")return"hop";if(n.base==="shroom")return"spores";if(n.base==="splitter")return e.split?"hop":"line";if(n.base==="jelly")return n.d.angleTo(M.d)*ge<e.pulseRange&&Math.random()<.6?"ring":"mortar";if(n.base==="brute"){const i=Math.random();return m.tier>=2&&i<.24?"swing":m.tier>=4&&i<.38?"quake":m.tier>=6&&i<.48?"triple":m.tier>=3&&i<.64?"ring":Math.random()<.55?"cleave":"circle"}const t=n.script.phases[Math.min(n.phase,n.script.phases.length-1)];for(let i=0;i<t.length;i++){const r=t[n.pattern++%t.length];if(!r.startsWith("summon")||m.enemies.filter(s=>!s.dead&&s!==n).length<3)return r}return"circle"}const Cr=(n,e,t)=>Al(n,e,t,!0);function bd(n,e=_b(n),t=1){n.poseKind=e,n.attackRelease=null,m.attackFocus=M.d,m.attackStartT=Math.max(m.attackStartT,Qt.attackStartGap);const i=gb()*(n.warnMul||1)*t,r=n.base==="boss",s=gn[n.type],a=qt(n.d,M.d);if(e.startsWith("summon")){n.summonT=1.1,n.summonType=e.split(":")[1],Re.warn(),ot(`${n.script.name}在召喚援軍！`,"var(--hurt)");return}if(e==="storm"){n.cast={kind:e,t:0,dur:Ta(n,i,e)},Re.charge();return}if(e==="whirl"){n.whirl={t:0,wind:Ta(n,i*1.1,"whirl"),dir:a.clone(),spin:0,hitCd:0,sfxT:0,propHit:new Set},Re.charge();return}if(e==="swing"){const c=gn.brute;n.swing={t:0,dur:Ta(n,i*1.15,"swing"),side:Math.random()<.5?0:1,dir:a.clone(),r:r?c.swingR*1.5:c.swingR,arc:c.swingArc,after:0},Re.charge();return}if(e==="burrow"){n.cast={kind:e,t:0,dur:Ta(n,i*.75,e)},Re.charge();return}e==="triple"&&(n.chain={kind:"circle",left:2,idx:0,gap:0},e="circle"),(e==="nova"||e==="ring"&&s.doubleRing&&!n.chain)&&(n.chain={kind:"ring",left:1,idx:0,gap:0},e="ring"),e==="roll"&&(n.chain=n.chain||{kind:"roll",left:s.rolls-1,idx:0,gap:0}),e==="hop"&&!n.chain&&(s.hops||1)>1&&(n.chain={kind:"hop",left:s.hops-1,idx:0,gap:0});let o,l=i;if(e==="line")o=Ui(n.d,a,s.lineLen||3.6,s.lineW||.55);else if(e==="hop")o={kind:"circle",c:M.d.clone(),r:s.hopR||1.25,attack:"hop"},l=i*1.05;else if(e==="spores"){o={kind:"circle",c:M.d.clone(),r:1.1,attack:"circle"},l=i*1.5;for(let c=1;c<s.spores;c++){const u={kind:"circle",c:Je(M.d,ct(M.d,new me().randomDirection()).normalize(),1.4+Math.random()*1.6),r:1.1,attack:"circle"};Cr(u,n,l+c*.3)}Mb(n,s)}else if(e==="roll")o=Ui(n.d,a,s.rollLen+n.r,.62);else if(e==="charge")o=Ui(n.d,a,9,.95),o.attack="roll",l=i*1.25;else if(e==="shoot"){if(o=Ui(n.d,a,s.shotLen*.75,.22),l=i*.9,s.volley||n.volleyNow)for(const c of[-1,1]){const u=a.clone().applyAxisAngle(n.d,c*.36),d=Ui(n.d,u,s.shotLen*.75,.22);d.attack="shoot",Cr(d,n,l)}}else if(e==="fan"){o=Ui(n.d,a,9,.6),o.attack="line",o.noLunge=!0,l=i*1.2;for(const c of[-1,1]){const u=Ui(n.d,a.clone().applyAxisAngle(n.d,c*.5),9,.6);u.attack="line",Cr(u,n,l)}}else if(e==="meteor"){o={kind:"circle",c:M.d.clone(),r:1.5,attack:"circle"},l=i*1.1;for(let c=0;c<4;c++){const u={kind:"circle",c:Je(M.d,ct(M.d,new me().randomDirection()).normalize(),1.8+Math.random()*2.6),r:1.3,attack:"circle"};Cr(u,n,l+(c+1)*.22)}}else if(e==="chillField")o={kind:"circle",c:M.d.clone(),r:2.8,attack:"circle",chill:!0},l=i*1.25;else if(e==="mortar"){o={kind:"circle",c:M.d.clone(),r:1.2,attack:"circle"},l=i*1.1;const c=M.vel.lengthSq()>.1?ct(M.d,M.vel).normalize():ct(M.d,new me().randomDirection()).normalize();[c.clone().applyAxisAngle(M.d,(Math.random()-.5)*.8),c.clone().applyAxisAngle(M.d,Math.PI*(.5+Math.random()))].forEach((u,d)=>{Cr({kind:"circle",c:Je(M.d,u,1.7+Math.random()*.6),r:1.2,attack:"circle"},n,l+(d+1)*(s.mortarGap||.3))})}else if(e==="cleave"){const c=tl.clamp(n.d.angleTo(M.d)*ge+1,r?4.5:3.2,r?6.5:4.6);o=Jo(n.d,a,c,r?.95:.78),l=i*1.1}else if(e==="quake"){const c=r?2.2:1.7,u=r?.7:.55;o=Jo(n.d,a,c,u,0),o.attack="quake",l=i*1.05;for(let d=1;d<3;d++){const f=Jo(n.d,a,c*(d+1),u,c*d);f.attack="quake",Cr(f,n,l+d*.3)}}else if(e==="cross"){const c=a.clone().applyAxisAngle(M.d,Math.PI/4),u=a.clone().applyAxisAngle(M.d,-Math.PI/4),d=r?9:7;o=Ui(Je(M.d,c.clone().negate(),d/2),ct(Je(M.d,c.clone().negate(),d/2),c).normalize(),d,.5),o.attack="line",o.noLunge=!0,l=i*1.15;const f=Je(M.d,u.clone().negate(),d/2),h=Ui(f,ct(f,u).normalize(),d,.5);h.attack="line",h.noLunge=!0,Cr(h,n,l+.3)}else e==="ring"?(o={kind:"ring",c:n.d.clone(),r1:r?1.6:n.base==="jelly"?.7:1.2,r2:r?5.4:n.base==="jelly"?3:4.2},l=i*1.25):(o={kind:"circle",c:M.d.clone(),r:r?2.2:1.7},l=i*1.15);o.attack=o.attack||e,Al(o,n,l),Re.warn()}function xb(n){const e=n.chain;e.idx++,e.left--;const t=gn[n.type].followWarn,i=t?t[Math.min(e.idx-1,t.length-1)]:e.idx===1?.6:.5;bd(n,e.kind,i)}function Kr(n,e,t){if(M.state==="ult"||M.guardInv>0)return"none";if((e==="ring"||e==="roll"||e==="shot"||e==="swing"||e==="whirl"||e==="quake")&&M.air>0)return hr(bi.jumpRing),ot("躍過","var(--ink)"),jt("jump",e),"jump";if(M.state==="dash"&&M.t<=He.iframe)return hr(bi.evade),m.slowT=.5,ot("閃避斬","var(--dash)"),je(M.p,9430015,16,6,.5),jt("evade",e),"evade";if(M.state==="parry"){const i=qt(M.d,t);if(i.angleTo(M.parryDir)<Math.PI*He.parryArc)return vb(e==="shot"?null:n,i,M.t<=wd()),"parry"}return M.invuln>0?"none":(Ad(t),"hit")}function vb(n,e,t){const i=M.p.clone().addScaledVector(M.d,.45).addScaledVector(e,.55),r=hd(qe.position.clone()).sub(i).normalize();if(je(i,16777215,16,16,.22),je(i,t?16763981:10470655,t?36:24,13,.35),t&&(je(i,16763981,18,9,.45),cr(i,M.d,16763981,1.7)),cr(i,r,t?16763981:10470655,t?1.3:1),cr(i,M.d,16777215,.8),n){n.lunge=null,n.rolling=null,n.chain=null,n.swing=null,n.whirl=null,n.cast=null,n.attackRelease=null,n.kb.copy(qt(n.d,M.d)).multiplyScalar(t?-5:-2.5),n.base==="boss"&&n.kb.multiplyScalar(.2);const s=t?n.base==="boss"?1.6:Qt.stunPerfect:n.base==="boulder"?1.4:Qt.stunNormal;s>0&&(n.stun=s,M.attackTarget=n)}em(t?1.1:.5),dd(e.clone().negate(),t?.25:.15),t?(Re.perfectParry(),Zs(.3,"#ffcc4d"),ot("完美格擋・反擊！","var(--gold)",1.3),hr(bi.perfect+(m.passives.has("focus")?15:0)),ci("happy",.5)):(Re.clang(),Zs(.18,"#9fc4ff"),ot("格擋成功","var(--guard)"),hr(bi.parry)),m.counterT=Math.max(m.counterT,t?Qt.counterPerfect:Qt.counterNormal),m.slowT=t?.6:.4,m.hitstop=t?.12:.05,m.shake=Math.max(m.shake,t?.6:.25),M.guardInv=m.slowT+.25,lS(1),M.state="free",M.parried=!0,M.anim.imp=.35,M.idleT=0,jt("parry",{e:n,perfect:t})}function Mb(n,e){let t=0;for(const i of m.enemies)i.dead||i===n||i.base==="boss"||i.hp>=i.maxHp||i.d.angleTo(n.d)*ge>e.healR||(i.hp=Math.min(i.maxHp,i.hp+e.heal),t++,je(Sn(i),8257418,12,4,.5));t&&(je(Sn(n),8257418,16,5,.6),ot("蘑菇法師在補血！先打它","var(--hurt)"))}function yb(n){const e=new me().crossVectors(n.d,qt(n.d,M.d));for(const t of[-1,1]){const i=Je(n.d,e.clone().multiplyScalar(t),.8);if(An(i))continue;const r=zi("blobling",i);r.spawn=.4,r.atkCd=1.2+Math.random()*.8}ot("分裂了！","var(--dash)")}const Um={rage:{name:"狂暴",color:16730682,apply:n=>Object.assign(n,{spdMul:1.35,warnMul:.85,cdMul:.75})},guard:{name:"護盾",color:5999871,apply:n=>{n.guardHp=3,n.bubble=new K(new pt(n.r*1.5,14,10),new xt({color:8366335,transparent:!0,opacity:.22,depthWrite:!1})),n.mesh.add(n.bubble)}},giant:{name:"巨大",color:16763981,apply:n=>{n.hp=n.maxHp=n.maxHp*1.8,n.r*=1.3,n.scale=1.3}},split:{name:"分裂",color:11561983,apply:()=>{}}};function Sb(n){return n<zr.minTier?0:Math.min(zr.maxChance,zr.base+zr.perTier*n)}function bb(n,e){const t=Um[e];n.affix=e,t.apply(n);const i=new K(new Vi(n.r/(n.scale||1)*1.1,.05,4,20),new xt({color:t.color}));i.rotation.x=Math.PI/2,i.position.y=-n.r/(n.scale||1)+.04,n.mesh.add(i),ot(`精英出現：${t.name}${g1[n.base]||""}`,"var(--hurt)")}function wb(n,e){if(e<=0||zr.skip.includes(n.base)||n.base==="boss"||Math.random()>=Sb(m.tier))return!1;const t=Object.keys(Um).filter(i=>!(i==="split"&&n.base==="jelly"));return bb(n,t[Math.floor(Math.random()*t.length)]),!0}function Eb(n,e){const t=n.whirl,i=gn[n.type];if(t.t+=e,t.t<t.wind)return;const r=t.t-t.wind;t.spin+=e*16,t.hitCd-=e,(t.sfxT-=e)<=0&&(t.sfxT=.22,Re.whirl());const s=Je(n.d,t.dir,i.whirlSpeed*e);An(s)?t.t=t.wind+i.whirlTime:(n.d.copy(s),t.dir=ct(n.d,t.dir).normalize()),Math.random()<.6&&je(Sn(n).addScaledVector(n.d,-.2),16765498,1,3,.3),Ul(n.d,i.whirlR,t.propHit,"enemy"),!(t.hitCd<=0&&M.p.distanceTo(Sn(n))<i.whirlR+.5&&(t.hitCd=.6,Kr(n,"whirl",n.d),!n.whirl))&&r>=i.whirlTime&&(n.whirl=null,n.stun=i.whirlDizzy,n.atkCd=xi(n),ot("轉暈了！快打","var(--gold)"))}function Tb(n,e){const t=n.swing;if(t.t+=e,!(t.t<t.dur)){if(!t.done){t.done=!0,ul(n,"swing"),Re.swing(),m.shake=Math.max(m.shake,.45);const i=new me().crossVectors(n.d,t.dir).normalize();for(let a=0;a<=6;a++){const o=(a/6-.5)*Math.PI*2*t.arc,l=t.dir.clone().multiplyScalar(Math.cos(o)).addScaledVector(i,Math.sin(o));je(Yt(Je(n.d,l,t.r*.8)).addScaledVector(n.d,.5),16742954,4,4,.35)}const r=n.d.angleTo(M.d)*ge,s=qt(n.d,M.d).angleTo(t.dir);Rd(Jo(n.d,t.dir,t.r,Math.PI*t.arc)),r<t.r+.3&&s<Math.PI*t.arc&&Kr(n,"swing",n.d)}t.after+=e,t.after>=.3&&(n.swing=null,n.atkCd=xi(n))}}function Wh(n,e){Tl(n,e.base==="boss"?2.6:e.r>.8?1.7:1.1),Re.slam(),m.shake=Math.max(m.shake,e.base==="boss"?.8:.5),je(Yt(n).addScaledVector(n,.3),16765498,26,8,.6)}function Xh(n,e){const t=(n.r0+n.r)/2;for(const i of[-.7,0,.7]){const r=n.dir.clone().multiplyScalar(Math.cos(n.arc*i)).addScaledVector(n.s,Math.sin(n.arc*i)),s=Je(n.c,r,t);Tl(s,e.base==="boss"?1.6:1.1),je(Yt(s).addScaledVector(s,.3),16765498,10,6,.45)}Re.slam(),m.shake=Math.max(m.shake,e.base==="boss"?.7:.45)}function qh(n){for(let e=1;e<=3;e++){const t=n.c.clone().multiplyScalar(ge).addScaledVector(n.dir,n.L*e/4).normalize();je(Yt(t).addScaledVector(t,.25),16765498,8,5,.4)}Re.slam()}function $h(n){if(is(n),n.resolve){n.resolve();return}const e=n.enemy,t=n.attack,i=gn[e.type];if(n.free||ul(e,e.poseKind||t),t==="shoot"){e.dead||(zS(e,n.dir),Re.dash()),!n.free&&!e.chain&&(e.atkCd=xi(e));return}if(t!=="roll"&&Rd(n),n.free){t==="circle"?Wh(n.c,e):n.kind==="sector"?Xh(n,e):n.kind==="line"&&qh(n),jr(n,M.d)&&Kr(e,t,e.d);return}if(t==="roll"){e.rolling={dir:n.dir.clone(),left:n.L-e.r,hit:new Set,touched:!1},Re.roll();return}if(t==="hop"&&!An(n.c)&&e.d.copy(n.c),e.leapFrom=null,e.leapK=0,t==="line")n.noLunge?qh(n):e.lunge={dir:n.dir.clone(),left:n.L*.8};else if(n.kind==="sector")Xh(n,e),e.slamT=.35;else{const r=t==="circle"?n.c:e.d;Wh(r,e),e.slamT=.35,i.burnSlam&&t==="circle"&&Cm(r,1.8,4)}e.chain||(e.atkCd=xi(e)),jr(n,M.d)&&Kr(e,t,e.d)==="hit"&&(n.chill||i.chill)&&Nm(2.2),e.chain&&!e.dead&&(e.chain.left>0?e.chain.gap=.18:(e.chain=null,e.atkCd=xi(e)))}const xi=yS;function Ab(n,e){const t=n.rolling,i=gn[n.type],r=Math.min(t.left,i.rollSpeed*e),s=Je(n.d,t.dir,r);An(s)?(t.left=0,je(Yt(n.d).addScaledVector(n.d,.2),9430015,14,5,.5)):(n.d.copy(s),t.dir=ct(n.d,t.dir).normalize(),t.left-=r),n.model.rig.roll&&(n.model.rig.roll.rotation.x+=r/n.r),Math.random()<.5&&je(Yt(n.d).addScaledVector(n.d,.1),12101768,1,2,.4);const a=Sn(n);if(!(!t.touched&&M.p.distanceTo(a)<n.r+.5+(M.air>0,0)&&(t.touched=!0,Kr(n,"roll",n.d),!n.rolling))){for(const o of m.enemies)o===n||o.dead||o.spawn<1||t.hit.has(o)||Sn(o).distanceTo(a)>o.r+n.r||(t.hit.add(o),_r(o,2,t.dir,{pierce:!0}),m.combo=Math.max(0,m.combo-1));Ul(n.d,n.r,t.hit,"enemy"),t.left<=0&&(n.rolling=null,m.shake=Math.max(m.shake,.25),n.chain&&n.chain.left>0?n.chain.gap=.12:n.base==="boss"?n.atkCd=xi(n):(n.chain=null,n.stun=i.dizzy,n.atkCd=xi(n),ot("滾石暈了！快打","var(--gold)"),jt("dizzy",n)))}}function Rb(n,e){if(e<gn[n.type].diveRange||n.diveCd>0)return;n.diveCd=5;const t=Yp(M.d,.3);!t||t.angleTo(M.d)*ge>e-1||(je(Yt(n.d).addScaledVector(n.d,.2),9430015,16,5,.6),n.d.copy(t),n.spawn=-1.1,n.atkCd=Math.max(n.atkCd,1.2))}function Cb(n,e){m.attackFocus=M.d,m.attackStartT=Math.max(0,m.attackStartT-n),m.counterT=Math.max(0,m.counterT-e);for(const i of[...m.warnings])i.free&&(i.resolve||m.counterT<=0)&&kh(i,n)&&$h(i);for(const i of[...m.enemies].sort((r,s)=>r.atkCd-s.atkCd)){if(i.dead)continue;if(i.spawn<1){i.spawn+=e*2;const d=$t(i.spawn,0,1);i.mesh.scale.setScalar((d<1?d*1.15:1)*(i.scale||1)),i.mesh.visible=i.spawn>0;continue}if(i.mesh.scale.setScalar(i.scale||1),i.bob+=n*5,i.slamT=Math.max(0,i.slamT-n),i.kb.lengthSq()>.01){const d=Je(i.d,i.kb,n);An(d)||i.d.copy(d),i.kb.copy(ct(i.d,i.kb)).multiplyScalar(Math.exp(-6*n))}if(i.stun>0){Vh(i)&&(i.warn&&is(i.warn),i.cast=i.chain=i.swing=i.whirl=i.rolling=i.lunge=null,i.summonT=0,i.leapK=0,i.leapFrom=null,i.atkCd=xi(i)),i.stun-=n,i.attackRelease=null;continue}if(m.counterT<=0&&xS(i,n),m.counterT>0&&Vh(i))continue;if(i.cast){if(i.cast.t+=n,i.cast.t>=i.cast.dur){const d=i.cast.kind;if(i.cast=null,ul(i,d),d==="storm")Z1(7),i.atkCd=xi(i);else{const f=i.base==="boss";je(Yt(i.d).addScaledVector(i.d,.3),14200944,18,5,.6);for(let h=0;h<8;h++){const _=Je(M.d,ct(M.d,new me().randomDirection()).normalize(),f?3.8:2.8);if(!An(_)){i.d.copy(_);break}}i.spawn=f?-1:-.7,i.burrowed=!0,i.atkCd=f?.4:.3}}continue}if(i.rolling){Ab(i,n);continue}if(i.summonT>0){if(i.summonT-=n,i.summonT<=0){for(const d of[-1,1]){const f=Je(i.d,new me().crossVectors(i.d,qt(i.d,M.d)).multiplyScalar(d),2.6);if(!An(f)){const h=zi(i.summonType,f);h.atkCd=1.2+Math.random()}}ul(i,"summon"),Re.slam(),m.shake=.7,i.atkCd=xi(i)}continue}if(i.swing){Tb(i,n);continue}if(i.whirl){Eb(i,n);continue}if(i.lunge){const d=Math.min(i.lunge.left,18*n),f=Je(i.d,i.lunge.dir,d);An(f)||i.d.copy(f),i.lunge.dir=ct(i.d,i.lunge.dir).normalize(),i.lunge.left-=d,i.lunge.left<=0&&(i.lunge=null);continue}if(i.warn){const d=i.warn;if(d.attack==="hop"&&d.dur-d.t<.32){i.leapFrom||(i.leapFrom=i.d.clone()),i.leapK=$t(1-(d.dur-d.t)/.32,0,1);const f=new me().lerpVectors(i.leapFrom,d.c,i.leapK).normalize();An(f)||i.d.copy(f)}kh(d,n)&&$h(d);continue}if(i.chain){i.chain.gap-=n,i.chain.gap<=0&&xb(i);continue}const r=gn[i.type],s=i.d.angleTo(M.d)*ge,a=qt(i.d,M.d);if(r.turn){i.face=i.face?ct(i.d,i.face).normalize():a.clone();const d=i.face.angleTo(a);d>.001&&i.face.lerp(a,Math.min(1,r.turn*n/d)).normalize()}const l=!i.dummy&&m.graceT<=0&&i.atkCd<=0&&M.state!=="ult"&&m.mode==="play"&&bS(i),c=l||i.atkCd<1?r.pref:r.pref+1.4,u=new me().crossVectors(i.d,a).multiplyScalar(i.strafe*.45);if(!i.dummy){const d=i.base==="archer"&&s<r.flee?1.6:1,f=a.clone().multiplyScalar(s>c+.3?1:s<c-.5?-.7*d:0).add(u),h=Je(i.d,f,r.speed*(i.spdMul||1)*n*$t(1-Ru(i.d,a)*.8,.4,1.4));if(r.aquatic)i.diveCd-=n,qp(h)?i.d.copy(h):i.strafe*=-1,Rb(i,s);else if(!An(h))i.d.copy(h),i.stuck=Math.max(0,i.stuck-n);else if(i.strafe*=-1,i.stuck+=n*2,i.stuck>5&&s>r.range){i.stuck=0,je(Yt(i.d).addScaledVector(i.d,.3),10185727,12,4,.5);const _=Je(M.d,qt(M.d,i.d),r.pref+1);An(_)||(i.d.copy(_),i.spawn=-.5)}Math.random()<n*.25&&(i.strafe*=-1)}i.atkCd-=n,l&&s<r.range&&bd(i)}const t=m.enemies;for(let i=0;i<t.length;i++)for(let r=i+1;r<t.length;r++){const s=t[i],a=t[r];if(s.dead||a.dead||s.rolling||a.rolling)continue;const o=s.d.angleTo(a.d)*ge,l=s.r+a.r+.2;if(o<l&&o>1e-4){const c=qt(s.d,a.d).multiplyScalar((l-o)/2),u=Je(s.d,c,-1),d=Je(a.d,c,1);!An(u)&&!s.dummy&&s.d.copy(u),!An(d)&&!a.dummy&&a.d.copy(d)}}for(const i of t)i.dead||(zm(i.d,i.r),Db(i,e))}const Pb=new Ei;function Db(n,e){const t=n.model,i=t.rig,r=i.roll?.rotation.x;gS(t),i.roll&&(i.roll.rotation.x=r);const s=(n.base==="grunt"?Math.sin(n.bob)*.06:n.base==="jelly"?Math.sin(n.bob*.7)*.12:n.base==="bee"?.55+Math.sin(n.bob*1.4)*.12:0)+Math.sin(Math.PI*(n.leapK||0))*1.3;if(n.mesh.position.copy(n.d).multiplyScalar(ge+ln(n.d)+n.r+s),n.mesh.quaternion.setFromUnitVectors(qi,n.d),n.squash>.01&&!(n.spawn<1)){const c=n.squash*.2,u=n.scale||1;n.mesh.scale.set(u*(1+c),u*(1-c),u*(1+c)),n.squash*=Math.exp(-e*14)}const o=(n.swing?n.swing.dir:n.rolling?n.rolling.dir:n.lunge?n.lunge.dir:n.warn&&n.warn.kind==="line"?n.warn.dir:n.face||qt(n.d,M.d)).clone().applyQuaternion(Pb.copy(n.mesh.quaternion).invert());n.mesh.rotateY(Math.atan2(o.x,o.z));const l=n.warn?n.warn.t/n.warn.dur:0;t.body.scale.setScalar(1+l*(n.base==="boulder"?.08:.2)+(n.warn?Math.sin(n.bob*6)*.04:0));for(const c of t.tint)c.emissive.set(n.flash>0?16777215:n.armored?16756736:c.userData.em??(c.userData.em=c.emissive.getHex())),c.emissiveIntensity=n.flash>0?1:n.armored?1+Math.sin(n.bob*2)*.4:.35+l*1.4;if(n.flash>0&&(n.flash-=e),t.stars.visible=n.stun>0,t.stars.rotation.y+=e*6,n.whirl){const c=n.whirl,u=Math.min(1,c.t/c.wind),d=t.tint[0];if(c.t<c.wind)d.emissive.copy(Yh).lerp(jh,u),d.emissiveIntensity=.6+u*1.6+(c.wind-c.t<.15?Math.floor(c.t*30)%2*1.2:0),t.body.position.x=Math.sin(n.bob*20)*.03*u;else{const f=c.t-c.wind;d.emissive.copy(jh).lerp(Yh,Math.min(1,f/.25)),d.emissiveIntensity=Math.max(.18+Math.sin(f*14)*.08,1.4*(1-f/.25)),n.mesh.rotateY(c.spin),t.body.position.x=0}}if(n.base==="grunt"){const c=n.lunge||n.whirl&&n.whirl.t>=n.whirl.wind?1:n.whirl?Math.min(1,n.whirl.t/n.whirl.wind)*.6:l;i.arm.rotation.x=c*Math.PI/2,i.arm.position.z=.1+(n.lunge?.25:-l*.15)}else if(n.base==="jelly")i.tentacles.scale.y=1+Math.sin(n.bob)*.18+l*.4;else if(n.base==="bee")i.wings.scale.y=.4+Math.abs(Math.sin(n.bob*9));else if(n.base==="archer")i.bow.rotation.y=-l*.5,i.bow.position.z=.2+l*.12;else if(n.base==="brute"||n.base==="boss"){const c=n.warn?Math.min(1,l*1.4):0,u=n.slamT/.35,d=n.summonT>0?Math.sin(n.bob*4)*.5+.5:0;i.fists.forEach((f,h)=>{const _=h?1:-1;f.position.set(_*(.98-c*.45),-.2+c*1.15-u*.3+d*.6,.25+c*.1)}),Ib(n,i.fists),i.core.position.y=-u*.08,n.base==="brute"&&t.tint[0].color.set(n.hp>5?16777215:n.hp>2.5?16766708:16755421)}else if(n.base==="boulder"){if(!n.rolling){const c=i.roll.rotation.x,u=Math.round(c/(Math.PI*2))*Math.PI*2;i.roll.rotation.x=c+(u-c)*(1-Math.exp(-e*8))+(n.warn?Math.sin(n.bob*14)*.05*l:0)}i.eye.material.emissiveIntensity=n.stun>0?.3:2.2+l*3,i.pebbles.forEach((c,u)=>{c.visible=!!n.rolling,c.position.set(Math.cos(n.bob*2+u*1.6)*.75,-.3+u%2*.4,Math.sin(n.bob*2+u*1.6)*.75)})}vS(n)}const Yh=new Se(16734746),jh=new Se(16769088),Lb=new Se(16747034),Kh=new Se(16718346);function Ib(n,e){e.forEach((t,i)=>{const r=t.material,s=n.swing,a=s&&s.side===i;if(r.userData.c0===void 0&&(r.userData.c0=r.emissive.getHex(),r.userData.i0=r.emissiveIntensity),!a){r.emissive.setHex(r.userData.c0),r.emissiveIntensity=r.userData.i0;return}const o=i?1:-1,l=Math.min(1,s.t/s.dur);if(!s.done)t.position.set(o*(1.05+l*.2),-.2+l*.95,.25-l*.6),r.emissive.copy(Lb).lerp(Kh,l),r.emissiveIntensity=.5+l*2.2+(s.dur-s.t<.15?Math.floor(s.t*30)%2*1.5:0);else{const c=Math.min(1,s.after/.12),u=o*((1-c)*1.9-c*.9);t.position.set(Math.sin(u)*1.2,.3,Math.cos(u)*1.2),r.emissive.copy(Kh),r.emissiveIntensity=2.5*(1-s.after/.3)}})}function Ub(){m.attackStartT=0,m.counterT=0,m.attackFocus=null,m.enemies.forEach(n=>!n.dead&&Sd(n)),m.enemies=[],m.warnings.forEach(is),m.warnings=[]}const Nb=(n,e=Ae.oreDrops,t=Ae.oreCrystalCap)=>Math.max(0,Math.min(e,t-n)),Zh=(n,e,t=0)=>n.angleTo(e)*ge<=Ae.blastR+t,Fb=n=>!n.flight&&!(n.pickupT>0);function Ob(n,e,t,i){const r=$t(t,0,1);return i.lerpVectors(n,e,r).normalize(),Math.sin(r*Math.PI)*Ae.dropHeight}function kb(n,e,t=Math.random){const[i,r]=ts(n),s=[],a=t()*Math.PI*2;for(let o=0;o<e;o++){let l;for(let c=0;c<16;c++){const u=a+o*Math.PI*2/e+c*.4,d=Ae.dropMin+t()*(Ae.dropMax-Ae.dropMin),f=i.clone().multiplyScalar(Math.cos(u)).addScaledVector(r,Math.sin(u));if(l=n.clone().multiplyScalar(Math.cos(d/ge)).addScaledVector(f,Math.sin(d/ge)).normalize(),on(l)>=Ae.groundMin&&s.every(h=>h.angleTo(l)*ge>Ae.spacing))break}s.push(l)}return s}function Bb(n,e){if(oi.some(s=>s.type==="m"&&Ys(s,n)<s.w+(e+Ae.mountainGap)/ge))return!1;const t=s=>{const a=on(s);return a>=Ae.groundMin&&a<=Ae.groundMax};if(!t(n))return!1;const[i,r]=ts(n);for(let s=0;s<8;s++){const a=s*Math.PI/4,o=i.clone().multiplyScalar(Math.cos(a)).addScaledVector(r,Math.sin(a));if(!t(Je(n,o,e)))return!1}return!0}function zb(n,e,t,i,r=t,s=!1){const a=t.angleTo(n)*ge,o=s?Ae.spawnFallbackMin:Ae.spawnMin,l=s?Ae.spawnFallbackMax:Ae.spawnMax;return a>=o&&a<=l&&r.angleTo(n)*ge>=o&&i.every(c=>c.d.angleTo(n)*ge>=c.r+e+Ae.spacing)&&Bb(n,e)}function Gb(n={}){const e={...Ae.counts,...n},t=[];for(const i of["ore","bomb"])for(let r=0;r<Math.min(Ae.max,Math.max(0,e[i]|0));r++)t.push(i);return t.slice(0,Ae.max)}function Hb(n,e,t,i=n,r=[]){const s=cd(t),a=[...r],o=[];for(const l of e){const c=l==="ore"?Ae.oreR:Ae.bombR;let u=null;for(let d=0;d<2&&!u;d++)for(let f=0;f<Ae.placeTries;f++){const h=Gt(s);if(zb(h,c,n,a,i,d===1)){u={type:l,d:h,r:c},a.push(u),o.push(u);break}}}return o}const As=new me;function Vb(n,e,t){const i=t.d.angleTo(n)*ge,r=e+t.r;return i>=r?!1:(As.copy(n).addScaledVector(t.d,-n.dot(t.d)),As.lengthSq()<1e-10&&As.set(Math.abs(t.d.y)<.9?0:1,Math.abs(t.d.y)<.9?1:0,0).addScaledVector(t.d,-As.dot(t.d)),As.normalize(),n.copy(t.d).multiplyScalar(Math.cos(r/ge)).addScaledVector(As,Math.sin(r/ge)).normalize(),!0)}const M={d:new me(0,0,1),p:new me,face:new me(1,0,0),state:"free",t:0,air:0,invuln:0,guardInv:0,hp:He.maxHp,moving:0,idleT:0,vel:new me,chillT:0,burnT:0,anim:{sy:1,vy:0,sz:1,vz:0,hop:0,imp:0,lean:0,vl:0}};function ki(n){M.d.copy(n).normalize(),M.p.copy(Yt(M.d))}const wd=()=>m.tier<=2||m.tut?He.perfectEarly:He.perfectLate,hr=yl;function Wr(n,e){const t=Ve.quaternion.clone().invert(),i=new me(1,0,0).applyQuaternion(qe.quaternion).applyQuaternion(t),r=new me(0,1,0).applyQuaternion(qe.quaternion).applyQuaternion(t),s=ct(M.d,i.multiplyScalar(n).addScaledVector(r,-e));return s.lengthSq()>1e-8?s.normalize():M.face.clone()}const Wb=.14,Ed=(n,e)=>M.state==="dash"||M.state==="parry"?(M.buf={k:n,dir:e,t:Wb},!0):!1;function Xb(n){const e=M.buf;if(e){if((e.t-=n)<=0){M.buf=null;return}M.state!=="free"||m.mode!=="play"||(M.buf=null,e.k==="dash"?Pl(e.dir):e.k==="tap"?Dl():Wa(e.dir))}}function Pl(n){return M.state!=="free"?(Ed("dash",n),!1):m.stamina<1?(ot("體力不足","var(--dash)"),Re.empty(),!1):(M.attackTarget=null,m.stamina-=1,M.state="dash",M.t=0,M.dashDir=n,M.face=n.clone(),M.dashHit=new Set,Re.dash(),M.dashLen=He.dashDist,jt("dash"),!0)}function Wa(n){if(M.state!=="free"){Ed("parry",n);return}M.state="parry",M.t=0,M.parried=!1,M.parryDir=n,M.face=n.clone(),M.anim.imp=.2,_t(300,.08,"square",.04),Gn.visible=!0,jt("guard")}function qb(n=He.lockRange){let e=null,t=n;for(const i of m.enemies){if(i.dead||i.spawn<1)continue;const r=i.d.angleTo(M.d)*ge-i.r;r<t&&(t=r,e=i)}return e?{e,dist:t+e.r}:null}function Dl(){if(Ed("tap"))return;const n=oS(M.d,m.enemies,M.attackTarget),e=n?qt(M.d,n.e.d):M.face.clone();Pl(e)&&(M.attackTarget=n?.e||null,n&&(M.dashLen=$t(n.dist+.6,He.tapDashMin,He.tapDashMax),je(Sn(n.e).addScaledVector(n.e.d,.4),16751164,10,3,.4)))}function Td(){m.state!=="play"||m.mode!=="play"||M.air<=0&&(M.state==="free"||M.state==="dash")&&(M.air=He.jumpTime,Re.jump(),jt("jumpPress"))}function $b(){const n=qb(12);return n?qt(M.d,n.e.d):M.face.clone()}function Ad(n){if(m.tut?.noDamage){M.invuln=1,M.anim.imp=1,m.shake=Math.max(m.shake,.8),Re.hurt(),Zs(.3,"#ff4a5a"),ci("hurt",.6),jt("hurt");return}M.hp--,m.hurtCount++,M.hp<=0&&m.passives.has("undying")&&!m.undyingUsed&&(m.undyingUsed=!0,M.hp=1,ot("不屈！","var(--gold)")),M.invuln=He.hurtInvuln,m.combo=0,M.anim.imp=1,m.shake=Math.max(m.shake,1.1),Re.hurt(),Zs(.45,"#ff4a5a"),mr(M),ci("hurt",.7);const e=qt(M.d,n).negate();isNaN(e.x)||(ki(Je(M.d,e,He.knockback)),dd(e,.35)),M.state==="parry"&&(M.state="free",Gn.visible=!1),jt("hurt")}function Nm(n){M.chillT=n,ot("凍傷！行動變慢","var(--ink)"),je(M.p,12577535,18,5,.6)}function Yb(n){const e=Au(M.d)==="lava"&&M.air<=0&&M.state!=="dash"&&M.state!=="ult";M.burnT=e?M.burnT+n:0,!(M.burnT<Bi.burnDelay+(m.passives.has("spikes")?.4:0))&&(M.burnT=0,je(M.p,16738848,26,7,.6),ot("燙！","var(--hurt)"),jt("burn"),M.invuln<=0&&!(M.guardInv>0)&&Ad(M.d),Fm())}function Fm(){const n=y1(M.d);n&&(M.hop={from:M.d.clone(),to:n,t:0,dur:Math.max(.18,Math.min(.4,n.angleTo(M.d)*ge/12))},M.air=Math.max(M.air,M.hop.dur))}function jb(n){if(M.invuln-=n,M.guardInv=Math.max(0,M.guardInv-n),M.chillT=Math.max(0,M.chillT-n),M.air>0&&(M.air-=n,M.air<=0&&(Re.land(),M.anim.imp=1)),M.moving=0,M.idleT+=n,M.hop){const a=M.hop;a.t+=n;const o=$t(a.t/a.dur,0,1);ki(new me().lerpVectors(a.from,a.to,o).normalize()),M.burnT=0,M.vel.set(0,0,0),o>=1&&(M.hop=null),m.stamina=Math.min(He.stamMax,m.stamina+n/He.stamRegen);return}const e=m.move,t=Au(M.d)==="ice",i=M.chillT>0?.6:1;if(M.state==="free"&&e.m>0){const a=Wr(e.sx,e.sy),o=$t(1-Ru(M.d,a)*.8,.5,1.4)*(An(M.d)?He.waterSlow:1)*i,l=He.moveSpeed*e.m*o;t?M.vel.lerp(a.clone().multiplyScalar(l),1-Math.exp(-n*(m.passives.has("spikes")?Bi.spikeGrip:Bi.iceGrip))):M.vel.copy(a).multiplyScalar(l),ki(Je(M.d,M.vel,n)),M.vel.copy(ct(M.d,M.vel)),M.face=a,M.moving=e.m,M.idleT=0}else if(t&&M.state!=="dash"&&M.vel.lengthSq()>.02)ki(Je(M.d,M.vel,n)),M.vel.copy(ct(M.d,M.vel)).multiplyScalar(Math.exp(-n*(m.passives.has("spikes")?Bi.spikeGrip:Bi.iceGrip*.55)));else if(M.state==="dash"){M.t+=n;const a=M.dashDir,o=$t(1-Ru(M.d,a)*.9,.55,1.5);ki(Je(M.d,a,He.dashDist/He.dashTime*o*n)),M.dashDir=ct(M.d,a).normalize(),M.face=M.dashDir,Math.random()<.8&&je(M.p.clone().addScaledVector(M.d,.4),9430015,1,1.5,.3);for(const l of m.enemies)l.dead||l.spawn<1||M.dashHit.has(l)||M.p.distanceTo(Sn(l))>l.r+.65||(M.dashHit.add(l),_r(l,o*(l.stun>0?1.5:1)*(m.passives.has("ram")?1.4:1)*(m.ramMul||1),M.dashDir));Ul(M.d,Ae.dashPad,M.dashHit),M.t>=He.dashTime*M.dashLen/He.dashDist&&(M.state="free",M.anim.imp=.7,M.vel.copy(M.dashDir).multiplyScalar(t?He.moveSpeed*1.4:0),Au(M.d)==="lava"&&Fm())}else if(M.state==="parry"){M.t+=n,M.t>=He.parryTime&&(M.state="free",Gn.visible=!1,_t(240,.06,"sine",.05));const a=M.t<=wd(),o=1-M.t/He.parryTime;M.parried||Gn.material.color.set(a?16763981:5999871),Gn.material.opacity=o<.25?Math.floor(M.t*24)%2?.85:.25:.5+.45*o}else Gn.visible&&(Gn.material.opacity=Math.min(.85,M.guardInv*2),M.guardInv<=0&&(Gn.visible=!1));if(M.state!=="free")M.idleT=0;else if(M.idleT>.8){const a=Wr(0,1);M.face=ct(M.d,M.face.clone().lerp(a,1-Math.exp(-n*4))).normalize()}M.air<=0&&zm(M.d,Ae.heroR)&&ki(M.d),Yb(n),Xb(n),m.stamina=Math.min(He.stamMax,m.stamina+n/He.stamRegen);const r=m.passives.has("magnet"),s=m.crystals.find(a=>Fb(a)&&a.d.angleTo(M.d)*ge<(r?2.75:1.1));if(s){const a=bi.crystalPay+(r?5:0)+(m.gemPickup||0);je(s.mesh.position,4843263,20,6,.6),Ve.remove(s.mesh),m.crystals=m.crystals.filter(o=>o!==s),hr(bi.crystal),m.runCrystals+=a,Re.pickup(),jt("crystal"),mr(M),ot(`星晶 +${a}`,"var(--ink)")}}function Kb(n,e){Ls.position.copy(M.p),Ls.quaternion.setFromUnitVectors(qi,M.d);const t=ct(M.d,M.face).applyQuaternion(Ls.quaternion.clone().invert());t.lengthSq()>1e-6&&(Is.rotation.y=Math.atan2(t.x,t.z));const i=M.anim,r=M.state==="dash"||M.state==="ult";let s=1+Math.sin(e*3)*.05,a=1,o=0;if(M.moving>0&&M.state==="free"&&M.air<=0){i.hop+=n*(8+M.moving*6);const f=Math.abs(Math.sin(i.hop));o=f*.3*M.moving,s=.8+f*.38}if(r?(s=.6,a=1.8):M.state==="parry"&&(s=.9),M.air>0){const f=1-M.air/He.jumpTime;o=Math.sin(Math.PI*f)*1.1,s=f<.5?1.3:1.05}m.state==="over"&&(s=.55,o=0),s*=1-i.imp*.42,i.imp*=Math.exp(-n*7),i.vy+=(s-i.sy)*280*n,i.vy*=Math.exp(-n*13),i.sy+=i.vy*n,i.vz+=(a-i.sz)*280*n,i.vz*=Math.exp(-n*13),i.sz+=i.vz*n;const l=1/Math.sqrt(Math.max(.25,i.sy*i.sz));vd.scale.set(l,i.sy,i.sz*l),Is.position.y=o;const c=r?.35:M.moving>0?-.18*M.moving:0;i.vl+=(c-i.lean)*160*n,i.vl*=Math.exp(-n*7),i.lean+=i.vl*n,Vn.rotation.x=i.lean,(m.state==="play"||m.state==="over"||m.state==="win")&&hS(n,M),uS(n,m.state==="over"?"dizzy":r||M.state==="parry"||m.mode==="ultDraw"?"determined":"idle");const u=M.state==="parry"&&M.t<=wd();cl.emissive.set(M.state==="ult"||u||M.guardInv>0?13144064:M.state==="parry"?2052048:M.state==="dash"?2783952:M.chillT>0?8376575:671626),cl.emissiveIntensity=M.state==="free"&&!(M.guardInv>0)?.6:.9;let d=0;if(M.state==="parry"){const f=$t(M.t/He.parryTime,0,1),h=(f-.18)/.82;d=f<.18?1-(1-f/.18)**3:1-h*h*(3-2*h)}Is.position.x=0,Is.position.z=d*.38,Vn.rotation.x+=d*.3,Ls.visible=M.invuln>0&&M.state!=="ult"&&m.state==="play"?Math.floor(e*16)%2===0:!0}function Zb(n){Object.assign(M,{buf:null,attackTarget:null,hp:He.maxHp,invuln:0,guardInv:0,state:"free",air:0,t:0,chillT:0,burnT:0,hop:null}),M.vel.set(0,0,0),Gn.visible=!1,ki(n),ci("idle")}const Ll={grass:{ore:9598207,glow:4558847,bomb:1059102,dark:4944952},ice:{ore:8187135,glow:3522024,bomb:6667007,dark:2379383},desert:{ore:4584668,glow:1425380,bomb:10183734,dark:3681064},volcano:{ore:16741698,glow:16726550,bomb:4799560,dark:16737060}},Uc=new Map,Jb=new tn(Ae.sparkSize),Qb=new xt({color:16766042,transparent:!0,opacity:.9,blending:dr,depthWrite:!1,toneMapped:!1});function ew(n,e){const t=`${e}:${n}`;if(Uc.has(t))return Uc.get(t);const i=Ll[e],r=[],s=[],a=(f,h,_,x,g,p=1,T=1,E=1,y=0,C=!1)=>{const A=f.index?f.toNonIndexed():f.clone();f.dispose();for(const b of Object.keys(A.attributes))b!=="position"&&b!=="normal"&&A.deleteAttribute(b);A.scale(p,T,E),A.rotateZ(y),A.translate(_,x,g);const D=new Se(h),L=new Float32Array(A.attributes.position.count*3);for(let b=0;b<L.length;b+=3)L[b]=D.r,L[b+1]=D.g,L[b+2]=D.b;A.setAttribute("color",new Pn(L,3)),(C?s:r).push(A)};if(n==="ore")a(new $r(.5),i.dark,0,.15,0,1.2,.5,1),a(new tn(.42),i.ore,0,.6,0,.85,1.65,.85,-.1,!0),a(new tn(.29),i.glow,-.32,.35,.08,.8,1.5,.8,.5,!0),a(new tn(.27),i.ore,.3,.32,-.05,.8,1.4,.8,-.5,!0),a(new tn(.17),i.ore,.1,.24,.28,.8,1.4,.8,-.25,!0);else if(e==="desert"){a(new Xt(.37,.4,.8,8),i.bomb,0,.4,0);for(const f of[.18,.65])a(new Xt(.415,.415,.08,8),i.dark,0,f,0);a(new Xt(.045,.045,.28,5),15252843,0,.91,0,1,1,1,-.3)}else if(e==="ice"){a(new tn(.52),i.bomb,0,.56,0,.85,1.2,.85);for(const f of[-1,1])a(new tn(.25),i.ore,f*.3,.3,.1,.7,1.4,.7,-f*.45)}else e==="volcano"?(a(new At(.49),i.dark,0,.4,0,1.05,.9,1),a(new $r(.5),i.bomb,0,.44,0,1,.8,.94),a(new tn(.15),i.dark,.12,.82,0,1,.8,1)):(a(new At(.48,1),i.bomb,0,.43,0,1,.9,1),a(new Xt(.045,.07,.24,5),12753483,0,.93,0,1,1,1,-.3),a(new tn(.27),8437061,.23,.83,0,1.2,.2,.65,.3));const o=Wi(r),l=s.length?Wi(s):null;for(const f of[...r,...s])f.dispose();const c=(f,h)=>new pn({vertexColors:!0,flatShading:!0,roughness:.6,emissive:f,emissiveIntensity:h}),u=e==="ice"?[0,1.22,0]:e==="volcano"?[.12,.99,0]:[.04,1.06,0],d={geometry:o,crystalGeo:l,crystalMat:l?c(i.glow,Ae.oreGlow):null,sparkAt:u,normal:c(n==="ore"||e==="grass"?0:i.dark,.2),flash:c(16777215,.9),fuse:c(e==="ice"?10480383:16747043,1.5)};return Uc.set(t,d),d}function Om(n,e){if(n!=="ore"&&n!=="bomb")throw new Error(`Unknown prop: ${n}`);const t=Rt.id,i=ew(n,t),r=new K(i.geometry,i.normal),s=e.clone().normalize();let a=null,o=null;i.crystalGeo&&(a=new K(i.crystalGeo,i.crystalMat),a.castShadow=!0,r.add(a)),n==="bomb"&&(o=new K(Jb,Qb),o.position.fromArray(i.sparkAt),r.add(o)),r.castShadow=!0,r.position.copy(Yt(s)),r.quaternion.setFromUnitVectors(qi,s),r.rotateY(Math.random()*Math.PI*2),Ve.add(r);const l={type:n,skin:t,d:s,hp:n==="ore"?Ae.oreHp:1,r:n==="ore"?Ae.oreR:Ae.bombR,mesh:r,model:i,crystals:a,spark:o,idleT:Math.random()*6,twinkleT:Math.random()*Ae.oreTwinkleGap,flash:0,squash:0,fxT:0,warn:null,dead:!1};return m.props.push(l),l}function tw(){for(const n of m.props)n.warn&&is(n.warn),Ve.remove(n.mesh),n.dead=!0;m.props=[]}function km(n=m.level){m.props=m.props.filter(i=>!i.dead);const e=Gb(n?.props);for(const i of m.props){const r=e.indexOf(i.type);r>=0&&e.splice(r,1)}const t=Hb(M.d,e,Rt.seed+m.wave*173,m.propOrigin||M.d,m.props);for(const i of t)Om(i.type,i.d);return m.props}function Bm(n){n.dead=!0,n.hp=0,Ve.remove(n.mesh),n.warn&&is(n.warn)}function Il(n,e="dash"){if(n.dead)return;if(n.flash=Ae.flashTime,n.squash=Ae.squash,n.type==="bomb"){if(e==="ult")Jh(n,!0);else if(!n.warn){const s={kind:"circle",c:n.d.clone(),r:Ae.blastR,attack:"bomb",resolve:()=>Jh(n)};n.warn=Al(s,n,Ae.fuse,!0),Re.warn()}return}n.hp-=e==="ult"?Ae.oreHp:1;const t=Yt(n.d).addScaledVector(n.d,.55),i=Ll[n.skin];if(je(t,i.ore,Math.round(8*rn.fx),3,.4),Re.thud(),n.hp>0)return;Bm(n),je(t,i.ore,Math.round(24*rn.fx),6,.65),hr(bi.ore);const r=Nb(m.oreCrystals);m.oreCrystals+=r;for(const s of kb(n.d,r))jt("oreDrop",{d:s,from:n.d.clone()})}function Rd(n,e="enemy"){for(const t of m.props)!t.dead&&jr(n,t.d,t.r)&&Il(t,e)}function Ul(n,e,t,i="dash"){for(const r of m.props)r.dead||t.has(r)||r.d.angleTo(n)*ge>r.r+e||(t instanceof Map?t.set(r,0):t.add(r),Il(r,i))}function Jh(n,e=!1){if(n.dead)return;Bm(n);const t=Ll[n.skin],i={kind:"circle",c:n.d,r:Ae.blastR};Tl(n.d,Ae.blastR),je(Yt(n.d).addScaledVector(n.d,.4),n.skin==="ice"?t.ore:16757820,Math.round(40*rn.fx),9,.7),Re.slam(),m.shake=Math.max(m.shake,Ae.blastShake),jr(i,M.d)&&Kr(null,"quake",n.d)==="hit"&&n.skin==="ice"&&Nm(Ae.chill);for(const r of m.enemies)r.dead||r.spawn<1||!Zh(n.d,r.d,r.r)||(_r(r,Ae.blastDmg,qt(n.d,r.d),{pierce:!0}),!r.dead&&n.skin==="ice"&&(r.stun=Math.max(r.stun,Ae.stun)));n.skin==="volcano"&&Cm(n.d,Ae.burnR,Ae.burnTime);for(const r of m.props)!r.dead&&Zh(n.d,r.d,r.r)&&Il(r,e&&r.type==="bomb"?"ult":"blast")}function zm(n,e){let t=!1;for(const i of m.props)!i.dead&&Vb(n,e,i)&&(t=!0);return t}const Bo=new me;function nw(n){for(const e of m.props){if(e.dead)continue;e.idleT+=n,e.flash=Math.max(0,e.flash-n),e.squash*=Math.exp(-n*Ae.recover),e.mesh.scale.set(1+e.squash,1-e.squash,1+e.squash);const t=e.warn&&Math.floor(e.warn.t*Ae.fuseHz)%2;e.mesh.material=e.flash>0?e.model.flash:t?e.model.fuse:e.model.normal,e.crystals&&(e.crystals.material=e.flash>0?e.model.flash:e.model.crystalMat),e.spark&&e.spark.scale.setScalar(1+Math.sin(e.idleT*Math.PI*2*Ae.dangerPulseHz)*Ae.dangerPulseSize),e.type==="ore"&&(e.twinkleT-=n)<=0&&(e.twinkleT=Ae.oreTwinkleGap*(.7+Math.random()*.6),Math.random()<rn.fx&&(Bo.copy(e.mesh.position).addScaledVector(e.d,1),je(Bo,Ll[e.skin].ore,1,.5,.45))),e.warn&&(e.fxT-=n)<=0&&(e.fxT=Ae.fuseFxGap,Bo.copy(e.mesh.position).addScaledVector(e.d,1),je(Bo,e.skin==="ice"?12577535:16763981,Math.max(1,Math.round(2*rn.fx)),1.5,.2))}}const iw=ee("ptrs"),Gm=[];for(let n=0;n<3;n++){const e=document.createElement("i");e.hidden=!0,iw.append(e),Gm.push(e)}const rw=6.5;function sw(n){let e=[];m.state==="play"&&m.mode==="play"&&m.storm<.5&&(e=m.enemies.filter(s=>!s.dead&&s.spawn>=0&&s.d.angleTo(M.d)*ge>rw).sort((s,a)=>s.d.angleTo(M.d)-a.d.angleTo(M.d)).slice(0,3));const t=n(M.d),i=innerWidth/2-34,r=innerHeight/2-90;Gm.forEach((s,a)=>{const o=e[a];if(s.hidden=!o,!o)return;const l=n(Je(M.d,qt(M.d,o.d),2.5)),c=Math.atan2(l.y-t.y,l.x-t.x);s.style.transform=`translate(${innerWidth/2+Math.cos(c)*i}px,${innerHeight/2+Math.sin(c)*r}px) rotate(${c}rad)`,s.className=o.base==="boss"?"boss":""})}const vt={ore:"晶礦：衝撞三次或大招一擊打碎，掉落星晶並補充大招",bomb:"炸彈果：擊中後一秒爆炸！可跳躍、閃避或格擋，大招立即連鎖引爆",bombDesert:"火藥桶：擊中後一秒爆炸！可跳躍、閃避或格擋，大招立即連鎖引爆",bombIce:"冰爆晶：擊中後一秒爆炸，凍傷你、暈眩敵人；大招立即引爆",bombVolcano:"熔岩石：擊中後一秒爆炸並留下火圈，跳躍或衝撞離開；大招立即引爆",circle:"實心圓：走出去或衝出去",ring:"圓環震波：按跳躍鈕躍過，或格擋",boulder:"滾石會連滾三次，一次比一次快！滾完會暈",jelly:"水母住在湖裡：衝進水中或用大招掠過湖面打牠",archer:"箭可以格擋反彈，也能跳過",ice:"冰面會滑：提早放開方向，用慣性走位",frostGrunt:"霜矛兵刺中會凍傷，讓你變慢",frostBrute:"冰巨魔的震波有兩圈",frostArcher:"霜弓手一次放三支箭",storm:"沙暴來襲時看不見敵人，只看得見黃色預警！",sandGrunt:"沙矛兵會鑽地，從身邊冒出來",sandBoulder:"沙滾石會連滾四次",whirl:"長矛兵全身發黃光＝要旋轉突進了！往側邊閃開或跳過，轉完會暈",swing:"巨魔的拳頭發紅＝要橫掃了！跳起來、衝撞穿過，或朝它格擋",bee:"蜂群很脆但很快：點一下自動衝撞，或用大招一筆掃掉",hopper:"跳跳蛙會跳到黃圈落地，還會連跳兩次：看準落點再閃",shell:"盾甲蟲正面擋得住衝撞：繞到牠背後或側面，或格擋牠的盾擊",splitter:"分裂泥球打死會分成兩隻小的",shroom:"蘑菇法師會種毒菇、幫隊友補血：優先打倒它",elite:"有光圈的是精英：狂暴、護盾、巨大或分裂",lava:"岩漿河會燙傷：用跳躍或衝撞越過，或走沒有岩漿的淺灘",lavaGrunt:"熔矛兵死掉時會爆炸，打完快走開",lavaBrute:"熔岩巨魔砸過的地面會燃燒一陣子",magmaJelly:"岩漿水母的體型更大，也住在岩漿裡"},Dt=[{id:"grass",name:"草原星",blurb:"溫和的起點。湖面會擋住敵人，大招掠過湖面耗墨很少。",hpMul:1,reward:50,roster:["grunt","brute","boulder","jelly","archer"],extra:["bee","hopper","shell","splitter","shroom"],levels:[{name:"初次降落",props:{ore:2,bomb:1},tier:1,waves:["grunt*2","grunt*3",["grunt*2 bee*3",vt.bee],"grunt*3 bee*3","grunt*3 brute"]},{name:"巨魔現身",props:{ore:2,bomb:2},tier:2,waves:[["grunt*3",vt.whirl],["grunt*2 brute",vt.circle],["grunt*2 hopper",vt.hopper],["grunt*3 brute",vt.swing],"grunt*2 hopper*2 / bee*3 @1"]},{name:"震波平原",tier:3,waves:["grunt*2 brute",["grunt*3 brute",vt.ring],["shell grunt*2",vt.shell],["shell brute / grunt*3 @1",vt.elite],"shell*2 grunt*2 brute / hopper*2 @1"]},{name:"落石山道",tier:3,waves:[["grunt*2 boulder",vt.boulder],"hopper*2 boulder","grunt*3 brute boulder","shell boulder*2 / bee*4 @1","grunt*3 brute boulder / hopper*2 @1"]},{name:"水母之湖",tier:4,waves:[["jelly grunt*2",vt.jelly],"jelly*2 hopper*2",["jelly splitter*2",vt.splitter],"jelly*2 boulder shell","jelly*2 splitter*2 brute","jelly*3 boulder / bee*4 @1"]},{name:"松果森林",tier:4,waves:[["archer grunt*2",vt.archer],"archer*2 shell",["archer shroom grunt*2",vt.shroom],"archer*2 jelly hopper*2","archer*2 shroom boulder brute","archer*3 jelly splitter*2","archer*3 boulder brute / shroom bee*4 @2"]},{name:"總攻擊",tier:5,waves:["grunt*4 brute / shell boulder hopper @1","archer*2 jelly boulder / grunt*3 shroom @2","shell*2 brute*2 boulder / archer*2 splitter*2 @2","archer*3 jelly hopper*2 / grunt*3 brute shroom @2","grunt*4 brute*2 shell / archer*2 jelly bee*5 @2"]},{name:"岩王",tier:6,boss:!0,waves:[["rockKing grunt*2 / grunt*3 @1","岩王：完美格擋可以讓它暈眩"]]}]},{id:"ice",name:"冰雪星",blurb:"結冰的湖面會滑，放開方向後還會繼續滑一段。",hpMul:1.15,reward:80,gate:10,roster:["frostGrunt","frostBrute","boulder","jelly","frostArcher"],extra:["hopper","shell","bee","shroom","splitter"],levels:[{name:"滑行訓練",props:{ore:2,bomb:1},tier:3,hpMul:1,waves:[["grunt*3",vt.ice],"grunt*3 archer","grunt*2 hopper*2","grunt*4 archer","grunt*3 brute bee*3"]},{name:"霜矛小隊",props:{ore:2,bomb:2},tier:4,hpMul:1.05,waves:[["frostGrunt*3",vt.frostGrunt],"frostGrunt*3 archer","frostGrunt*4 brute","frostGrunt*4 archer","frostGrunt*5 brute"]},{name:"冰原震動",tier:5,waves:["frostGrunt*2 brute",["frostGrunt*2 frostBrute",vt.frostBrute],"frostGrunt*3 frostBrute boulder","frostBrute*2 boulder","frostGrunt*4 frostBrute boulder","frostBrute*3 boulder"]},{name:"冰下來客",tier:5,waves:["jelly*2 frostGrunt*2","jelly*2 frostBrute","jelly*3 archer*2","jelly*2 frostGrunt*3 / boulder*2 @1","jelly*4 archer*2","jelly*3 frostGrunt*3 / boulder*2 @1"]},{name:"三連箭",tier:6,waves:[["frostArcher frostGrunt*2",vt.frostArcher],"frostArcher*2 frostGrunt*2","frostArcher*2 frostBrute","frostArcher*2 boulder*2 / frostGrunt*3 @1","frostArcher*3 frostBrute","frostArcher*3 boulder*2 / frostGrunt*3 @1"]},{name:"白色迷宮",tier:6,waves:["frostGrunt*4 boulder / frostBrute @1","frostArcher*2 jelly*2 / frostGrunt*3 @1","frostBrute*2 boulder*2 / frostArcher*2 shell @1","frostGrunt*4 frostArcher*2 / frostBrute*2 hopper*2 @2","frostBrute*3 boulder*2 / frostArcher*2 @1","frostGrunt*5 frostArcher*2 / frostBrute*2 @2"]},{name:"永凍要塞",tier:7,waves:["frostGrunt*4 frostBrute boulder / frostArcher*2 jelly @2","frostBrute*2 frostArcher*2 shroom / boulder*2 frostGrunt*3 @2","frostGrunt*5 frostBrute*2 / frostArcher*3 jelly*2 @3","frostBrute*3 frostArcher*2 shell*2 / boulder*2 frostGrunt*3 shroom @2","frostGrunt*6 frostBrute*2 / frostArcher*3 jelly*2 @3"]},{name:"冰晶女王",tier:7,boss:!0,waves:[["frostQueen frostGrunt*2 / frostGrunt*3 @1","冰晶女王：護甲展開時，照編號順序劃過光點"]]}]},{id:"desert",name:"沙漠星",blurb:"沙暴定期掃過，看不見敵人，只看得見地上的預警。",hpMul:1.3,reward:110,gate:22,roster:["sandGrunt","brute","sandBoulder","jelly","archer"],extra:["bee","splitter","hopper","shell","shroom"],levels:[{name:"沙丘邊境",props:{ore:2,bomb:1},tier:4,hpMul:1.05,waves:[["grunt*4",vt.storm],"grunt*3 archer*2","grunt*2 bee*4","grunt*3 splitter*2","grunt*4 brute boulder"]},{name:"地底伏兵",props:{ore:2,bomb:2},tier:5,hpMul:1.1,waves:[["sandGrunt*3",vt.sandGrunt],"sandGrunt*4 archer","sandGrunt*3 brute","sandGrunt*4 boulder","sandGrunt*4 brute","sandGrunt*5 boulder"]},{name:"風化巨岩",tier:7,waves:[["sandBoulder grunt*2",vt.sandBoulder],"sandBoulder*2 sandGrunt*2","sandBoulder*2 hopper*2","sandBoulder*2 archer*2 / sandGrunt*3 @1","sandBoulder*3 brute shell","sandBoulder*3 archer*2 / sandGrunt*3 @1"]},{name:"綠洲之戰",tier:7,waves:["jelly*2 sandGrunt*3","jelly*2 archer*2 splitter*2","jelly*3 sandBoulder sandGrunt*2","jelly*2 brute*2 / sandGrunt*4 @1","jelly*4 sandBoulder sandGrunt*2","jelly*3 brute*2 / sandGrunt*4 @1"]},{name:"沙中箭雨",tier:8,waves:["archer*3 sandGrunt*2","archer*3 shroom boulder","archer*4 sandBoulder / sandGrunt*4 bee*4 @1","archer*3 jelly*2 / brute*2 sandGrunt*2 @2","archer*5 sandBoulder / sandGrunt*4 @1","archer*4 jelly*2 / brute*2 sandGrunt*2 @2"]},{name:"風暴之眼",tier:8,waves:["sandGrunt*5 brute / archer*3 @2","sandBoulder*3 archer*2 / brute*2 shell @1","sandGrunt*4 brute*2 shroom / sandBoulder*2 jelly*2 @2","archer*4 brute*2 / sandGrunt*5 @2","sandGrunt*5 brute*2 / sandBoulder*2 jelly*2 @2","archer*5 brute*2 / sandGrunt*5 @2"]},{name:"王蟲巢穴",tier:9,waves:["sandGrunt*6 brute*2 / sandBoulder*2 archer*3 @3","brute*3 archer*3 / sandGrunt*5 sandBoulder @3","sandBoulder*3 brute*2 jelly*2 / sandGrunt*6 archer*2 @3","brute*4 archer*3 / sandGrunt*5 sandBoulder @3","sandBoulder*4 brute*2 jelly*2 / sandGrunt*6 archer*2 @3"]},{name:"沙海王蟲",tier:9,boss:!0,waves:[["sandWyrm sandGrunt*2 / sandGrunt*3 @1","沙海王蟲：光點是牠的身體，會移動，一筆全部切過"]]}]},{id:"volcano",name:"火山星",blurb:"岩漿河會燙傷你，跳躍和衝撞可以安全越過。",hpMul:1.4,reward:140,gate:36,roster:["lavaGrunt","lavaBrute","boulder","magmaJelly","archer"],extra:["shell","shroom","hopper","splitter","bee"],levels:[{name:"灰燼平原",props:{ore:2,bomb:1},tier:5,hpMul:1.1,waves:[["grunt*4 archer",vt.lava],"grunt*3 hopper*2","grunt*3 brute boulder archer","grunt*3 shell bee*3","grunt*4 brute boulder archer"]},{name:"自爆小隊",props:{ore:2,bomb:2},tier:6,hpMul:1.15,waves:[["lavaGrunt*3",vt.lavaGrunt],"lavaGrunt*4 archer","lavaGrunt*4 boulder","lavaGrunt*5 brute","lavaGrunt*5 boulder","lavaGrunt*6 brute"]},{name:"焦土行軍",tier:9,waves:[["lavaBrute grunt*3",vt.lavaBrute],"lavaBrute lavaGrunt*3","lavaBrute*2 archer*2 shroom","lavaBrute*2 boulder*2 / lavaGrunt*3 @1","lavaBrute*3 archer*2 shell","lavaBrute*3 boulder*2 / lavaGrunt*3 @1"]},{name:"岩漿之主",tier:9,waves:[["magmaJelly lavaGrunt*3",vt.magmaJelly],"magmaJelly*2 archer*2","magmaJelly*2 lavaBrute","magmaJelly*3 boulder*2 / lavaGrunt*4 @1","magmaJelly*3 lavaBrute","magmaJelly*4 boulder*2 / lavaGrunt*4 @1"]},{name:"火雨",tier:10,waves:["archer*4 lavaGrunt*2","archer*3 lavaBrute*2 shroom","archer*4 magmaJelly*2 / lavaGrunt*4 hopper*2 @2","archer*3 boulder*3 / lavaBrute*2 lavaGrunt*2 @2","archer*5 magmaJelly*2 / lavaGrunt*4 @2","archer*4 boulder*3 / lavaBrute*2 lavaGrunt*2 @2"]},{name:"裂谷死鬥",tier:10,waves:["lavaGrunt*6 lavaBrute / archer*3 @2","boulder*3 magmaJelly*2 / lavaBrute*2 shell*2 @1","lavaBrute*2 archer*3 shroom / lavaGrunt*6 @3","lavaBrute*3 boulder*2 / magmaJelly*2 archer*3 @3","lavaBrute*3 archer*3 / lavaGrunt*6 @3","lavaBrute*4 boulder*2 / magmaJelly*2 archer*3 @3"]},{name:"火山口",tier:11,waves:["lavaGrunt*6 lavaBrute*2 / boulder*3 archer*3 @3","lavaBrute*3 archer*4 / lavaGrunt*6 magmaJelly @3","lavaBrute*3 boulder*3 magmaJelly*2 / lavaGrunt*7 archer*3 @4","lavaBrute*4 archer*4 / lavaGrunt*6 magmaJelly @3","lavaBrute*4 boulder*3 magmaJelly*2 / lavaGrunt*7 archer*3 @4"]},{name:"熔岩泰坦",tier:11,boss:!0,waves:[["lavaTitan lavaGrunt*2 / lavaGrunt*3 @1","熔岩泰坦：只劃金色光點，碰到紅色光點就失敗"]]}]}],Hm=2,In=(n,e)=>`${Dt[n].id}-${e+1}`;function rs(n){const[e,t]=n.split("-"),i=Dt.findIndex(s=>s.id===e),r=t-1;return i<0||!Dt[i].levels[r]?null:{id:n,planet:Dt[i],p:i,i:r,...Dt[i].levels[r]}}const aw=()=>Dt.flatMap((n,e)=>n.levels.map((t,i)=>rs(In(e,i))));function ow(n){const[e,t]=Array.isArray(n)?n:[n],i=e.split("/").map(r=>{const s={};for(const a of r.trim().split(/\s+/)){if(a[0]==="@"){s.at=+a.slice(1);continue}const[o,l]=a.split("*");s[o]=(s[o]||0)+(+l||1)}return s});return t?{groups:i,tip:t}:{groups:i}}const lw=n=>Object.entries(n).filter(([e])=>e!=="at").flatMap(([e,t])=>Array(t).fill(e));function cw(n,e){const[t,i,r,s,a]=e.roster,o={[t]:Math.min(3+n,8),[i]:Math.min(1+(n>>1),3),[r]:Math.min(1+(n>>1),3)},l={[t]:Math.min(2+n,6),[s]:Math.min(1+(n>>2),2),[a]:Math.min(1+(n>>1),3),at:2},c=e.extra?.[n%e.extra.length];return c&&(l[c]=(l[c]||0)+Math.min(1+(n>>2),3)),{groups:[o,l]}}const dl=[{id:"bronze",name:"銅",pts:1},{id:"silver",name:"銀",pts:2},{id:"gold",name:"金",pts:3},{id:"diamond",name:"鑽石",pts:5}],Zr={low:{name:"低階",cost:80,cards:2,odds:[65,28,6,1]},mid:{name:"中階",cost:200,cards:3,odds:[40,40,16,4]},high:{name:"高階",cost:400,cards:3,odds:[15,45,30,10],minRarity:1}},Vm=10,vi={hp:{name:"生命上限",cap:10,w:10,desc:"每 2 點 +1 格生命"},stamina:{name:"體力",cap:9,w:9,desc:"每 3 點 +1 格體力，每點回復快 2%"},charge:{name:"大招充能",cap:10,w:9,desc:"每點自動充能 +0.05/秒、開局 +1"},ink:{name:"墨水長度",cap:10,w:8,desc:"每點大招可劃長度 +4%"},ram:{name:"衝撞強化",cap:10,w:8,desc:"每點衝撞傷害 +5%"},parry:{name:"格擋專精",cap:8,w:7,desc:"每點完美格擋時間 +0.012 秒"},gems:{name:"星晶獲得",cap:8,w:6,desc:"每點撿星晶 +1、通關獎勵 +3%"}},Qh=[.4,.6,.8,1],Wm=(n,e)=>Math.ceil(vi[n].cap*Qh[Math.min(e,Qh.length-1)]),fl={line:{name:"劃線斬",desc:"基本大招"},chain:{name:"連鎖線",desc:"斬中敵人時，閃電跳向附近 2 隻敵人，造成一半傷害"},blast:{name:"爆炸終點",desc:"路線終點引爆，範圍傷害隨當下速度變強"}},hl={steady:{name:"穩固格擋",desc:"完美格擋時間 +0.06 秒"},regen:{name:"再生黏液",desc:"每清完一波多回 1 格生命"},magnet:{name:"星晶磁鐵",desc:"撿取範圍 2.5 倍，星晶掉落 +5"},ram:{name:"重擊衝撞",desc:"衝撞傷害 ×1.4"},spikes:{name:"防滑釘",desc:"冰面幾乎不滑，岩漿灼傷延後 0.4 秒"},focus:{name:"專注",desc:"完美格擋額外充能 15"},undying:{name:"不屈",desc:"每關一次，致命傷害時留下 1 格生命"}},Xm=3;function Xa(n={},e=0,t={maxHp:5,stamMax:3,stamRegen:.8,charge:.4,start:10}){const i=r=>n[r]||0;return{maxHp:t.maxHp+Math.floor(i("hp")/2),stamMax:t.stamMax+Math.floor(i("stamina")/3),stamRegen:t.stamRegen*(1-.02*i("stamina")),charge:t.charge+.05*i("charge"),start:t.start+i("charge"),slots:2+e,inkMul:1+.04*i("ink"),ramMul:1+.05*i("ram"),perfectBonus:.012*i("parry"),gemPickup:i("gems"),gemMul:1+.03*i("gems")}}function uw(n,e,t=Math.random){const i=Zr[n],r=n==="high"&&(e.pity||0)>=Vm-1,s=()=>{let c=t()*100;for(let u=0;u<4;u++)if((c-=i.odds[u])<0)return Math.max(u,i.minRarity||0);return 3},a=Array.from({length:i.cards},s);r&&!a.includes(3)&&(a[0]=3);const o=[],l=new Set;for(const c of a){const u=dw(c,e,l,t);u&&(o.push(u),l.add(u.key))}return{cards:o,diamond:a.includes(3)}}function dw(n,e,t,i){const r=[];for(const[a,o]of Object.entries(vi)){const l=e.pts[a]||0,c=Wm(a,e.bosses)-l;c<=0||t.has(a)||r.push({w:o.w*(1-l/o.cap)**2,card:{kind:"stat",key:a,rarity:n,pts:Math.min(dl[n].pts,c)}})}if(n>=2)for(const a of Object.keys(hl))!e.ownedPassives.includes(a)&&!t.has("p:"+a)&&r.push({w:2.2,card:{kind:"passive",key:"p:"+a,id:a,rarity:n}});if(n>=3){for(const a of Object.keys(fl))!e.ownedUlts.includes(a)&&!t.has("u:"+a)&&r.push({w:6,card:{kind:"ult",key:"u:"+a,id:a,rarity:n}});(e.slot||0)<Xm-2&&!t.has("slot")&&r.push({w:6,card:{kind:"slot",key:"slot",rarity:n}})}if(!r.length)return t.has("refund")?null:{kind:"refund",key:"refund",rarity:n,gems:30*dl[n].pts};let s=i()*r.reduce((a,o)=>a+o.w,0);for(const a of r)if((s-=a.w)<=0)return a.card;return r[r.length-1].card}function fw(n,e,t,i,r=0){const s=n*(e?3:1);return Math.round(i?s:s*.25)+Math.max(0,t-r)*Math.round(n*.4)}function hw(n={}){const e={};return n.hp&&(e.hp=Math.min(vi.hp.cap,n.hp*2)),n.stamina&&(e.stamina=Math.min(vi.stamina.cap,n.stamina*3)),n.charge&&(e.charge=Math.min(vi.charge.cap,n.charge*2)),{pts:e,slot:Math.min(Xm-2,n.slot||0)}}const qm="slasharena-save",pw=2,$m=()=>({v:pw,crystals:0,stats:{},slot:0,pity:0,draws:0,pending:null,owned:{ult:["line"],passive:[]},equip:{ult:"line",passives:[]},levels:{},endless:{}});function mw(n){const e=$m();if(!n||typeof n!="object")return e;if(e.crystals=Number.isFinite(n.crystals)?Math.max(0,n.crystals):0,n.stats&&typeof n.stats=="object"){for(const t of Object.keys(vi))Number.isFinite(n.stats[t])&&(e.stats[t]=Math.max(0,Math.min(vi[t].cap,n.stats[t])));e.slot=Number.isFinite(n.slot)?n.slot:0}else n.upgrades&&typeof n.upgrades=="object"&&Object.assign(e,(({pts:t,slot:i})=>({stats:t,slot:i}))(hw(n.upgrades)));return Number.isFinite(n.pity)&&(e.pity=n.pity),Number.isFinite(n.draws)&&(e.draws=n.draws),Array.isArray(n.pending?.cards)&&n.pending.cards.length&&(e.pending=n.pending),Array.isArray(n.owned?.ult)&&(e.owned.ult=[...new Set(["line",...n.owned.ult])]),Array.isArray(n.owned?.passive)&&(e.owned.passive=[...n.owned.passive]),e.owned.ult.includes(n.equip?.ult)&&(e.equip.ult=n.equip.ult),Array.isArray(n.equip?.passives)&&(e.equip.passives=n.equip.passives.filter(t=>e.owned.passive.includes(t))),n.levels&&typeof n.levels=="object"&&(e.levels={...n.levels}),n.endless&&typeof n.endless=="object"&&(e.endless={...n.endless}),e}function gw(){try{return mw(JSON.parse(localStorage.getItem(qm)))}catch{return $m()}}const fe=gw();function xr(){try{localStorage.setItem(qm,JSON.stringify(fe))}catch{}}const Bu=typeof location>"u"?new URLSearchParams:new URLSearchParams(location.search),Cd=Bu.has("unlock");Bu.has("crystals")&&(fe.crystals=+Bu.get("crystals")||0,xr());const Nl=n=>!!fe.levels[n]?.stars,Ym=n=>In(n,Dt[n].levels.length-1),jm=n=>Cd||n===0||Nl(Ym(n-1)),_w=n=>n>0&&(fe.levels[Ym(n-1)]?.stars||0)>=3,Km=n=>Cd||_w(n)?0:Math.max(0,(Dt[n].gate||0)-pl());function qa(n){return jm(n)&&!Km(n)}const Zm=(n,e)=>n>0&&e<Hm;function zu(n,e){return Cd?!0:(e===0||Nl(In(n,e-1)))&&(qa(n)||Zm(n,e))}const Jm=n=>Nl(In(n,Dt[n].levels.length-1)),pl=()=>Object.values(fe.levels).reduce((n,e)=>n+(e.stars||0),0),Qm=()=>Dt.reduce((n,e)=>n+e.levels.length*3,0);function e0(n){const e=rs(n);return e?e.i+1<e.planet.levels.length?zu(e.p,e.i+1)?In(e.p,e.i+1):null:e.p+1<Dt.length&&zu(e.p+1,0)?In(e.p+1,0):null:null}function xw(){for(let n=Dt.length-1;n>=0;n--)if(qa(n)){for(let e=0;e<Dt[n].levels.length;e++)if(!Nl(In(n,e)))return In(n,e);return In(n,0)}return In(0,0)}const vw={S:3,A:2,B:1,C:1};function Mw(n,e,t,i){const r=rs(n),s=fe.levels[n]||{stars:0,best:0},a=vw[e]||1,o=!s.stars,l=Math.round(fw(r.planet.reward,!!r.boss,a,o,s.stars)*Fl().gemMul)+i;return fe.levels[n]={stars:Math.max(s.stars,a),best:Math.max(s.best,t)},fe.crystals+=l,xr(),{earned:l,stars:a,first:o,newStars:Math.max(0,a-s.stars)}}function t0(n,e,t){const i=n+e*Math.round(t*.15);return fe.crystals+=i,xr(),i}function yw(n,e,t,i){const r=fe.endless[n]||{waves:0,best:0};fe.endless[n]={waves:Math.max(r.waves,e),best:Math.max(r.best,t)};const s=i+e*12;return fe.crystals+=s,xr(),s}const n0=()=>Dt.filter((n,e)=>Jm(e)).length,Fl=()=>Xa(fe.stats,fe.slot);function Sw(n){return n===void 0||fe.crystals<n?!1:(fe.crystals-=n,!0)}function i0(n){if(fe.pending||!Sw(Zr[n].cost))return null;const e=uw(n,{pts:fe.stats,bosses:n0(),ownedPassives:fe.owned.passive,ownedUlts:fe.owned.ult,slot:fe.slot,pity:fe.pity});return n==="high"&&(fe.pity=e.diamond?0:fe.pity+1),fe.draws++,fe.pending={pack:n,cards:e.cards},xr(),fe.pending}function r0(n){const e=fe.pending?.cards[n];return e?(e.kind==="stat"?fe.stats[e.key]=(fe.stats[e.key]||0)+e.pts:e.kind==="passive"?(fe.owned.passive.push(e.id),fe.equip.passives.length<Fl().slots&&fe.equip.passives.push(e.id)):e.kind==="ult"?(fe.owned.ult.push(e.id),fe.equip.ult=e.id):e.kind==="slot"?fe.slot++:e.kind==="refund"&&(fe.crystals+=e.gems),fe.pending=null,xr(),e):null}function bw(n){fe.owned.ult.includes(n)&&(fe.equip.ult=n,xr())}function ww(n){const e=fe.equip.passives,t=e.indexOf(n);if(t>=0)e.splice(t,1);else if(fe.owned.passive.includes(n)&&e.length<Fl().slots)e.push(n);else return!1;return xr(),!0}const zo={maxHp:He.maxHp,stamMax:He.stamMax,stamRegen:He.stamRegen,charge:Ct.charge,start:Ct.start,ink:Ct.ink,perfectEarly:He.perfectEarly,perfectLate:He.perfectLate};function Ew(){const n=Xa(fe.stats,fe.slot,zo);m.passives=new Set(fe.equip.passives),m.ultKind=fe.equip.ult,m.ramMul=n.ramMul,m.gemPickup=n.gemPickup;const e=(m.passives.has("steady")?.06:0)+n.perfectBonus;Object.assign(He,{maxHp:n.maxHp,stamMax:n.stamMax,stamRegen:n.stamRegen,perfectEarly:zo.perfectEarly+e,perfectLate:zo.perfectLate+e}),Object.assign(Ct,{charge:n.charge,start:n.start,ink:zo.ink*n.inkMul})}function Tw(){if(fe.pending)return"有卡片待選";const n=["high","mid","low"].find(e=>Zr[e].cost<=fe.crystals);return n?`可抽${Zr[n].name}`:""}const s0='<svg viewBox="0 0 20 20"><path d="M10 1.8l2.5 5.3 5.8.8-4.2 4 1 5.8-5.1-2.8-5.1 2.8 1-5.8-4.2-4 5.8-.8z"/></svg>',ep='<svg viewBox="0 0 20 20" fill="currentColor"><path d="M6 9V6.5a4 4 0 0 1 8 0V9h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1zm2 0h4V6.5a2 2 0 0 0-4 0z"/></svg>',Aw='<svg class="gem" viewBox="0 0 20 20"><path d="M10 1l6.5 6.5L10 19 3.5 7.5z"/></svg>',a0=n=>[1,2,3].map(e=>`<i class="${e<=n?"on":""}">${s0}</i>`).join(""),Jr=n=>`${Aw}${n.toLocaleString()}`;let Or=null,Gu=0,Aa="draw",Gr=-1;function Rw(n){Or=n,ee("mapBack").onclick=Or.title,ee("shopBtn").onclick=()=>{Re.ui(),$a(),Or.shop()},ee("shopBack").onclick=()=>{Re.ui(),Pd(),Or.map()},ee("endlessBtn").onclick=()=>Or.endless(Gu);for(const e of document.querySelectorAll("#shopTabs button"))e.onclick=()=>{Aa=e.dataset.tab,Re.ui(),$a()}}function Pd(n=Gu){Gu=n,Or.select(Dt[n].id),ee("mapStars").innerHTML=`${s0}${pl()} / ${Qm()}`,ee("mapGems").innerHTML=Jr(fe.crystals),ee("planets").innerHTML=Dt.map((i,r)=>`<button type="button" class="orb ${i.id} ${r===n?"sel":""}" data-i="${r}" aria-label="${i.name}">${qa(r)?"":ep}</button>`).join("");for(const i of ee("planets").children)i.onclick=()=>{Re.ui(),Pd(+i.dataset.i)};ee("pName").textContent=Dt[n].name,ee("pBlurb").textContent=Cw(n),ee("levels").innerHTML=Dt[n].levels.map((i,r)=>{const s=In(n,r),a=zu(n,r),o=fe.levels[s];return`<button type="button" class="node ${i.boss?"boss":""}" data-id="${s}" ${a?"":"disabled"}><b>${a?r+1:ep}</b><span>${a?i.name:"未解鎖"}</span><em>${a?a0(o?.stars||0):""}</em>${Zm(n,r)&&!qa(n)?'<i class="trial">嘗鮮</i>':""}</button>`}).join("");for(const i of ee("levels").children)i.onclick=()=>Or.play(i.dataset.id);const e=ee("endlessBtn"),t=fe.endless[Dt[n].id];e.hidden=!Jm(n),e.textContent=t?.waves?`無盡模式（最遠 ${t.waves} 波）`:"無盡模式"}function Cw(n){if(qa(n))return Dt[n].blurb;const e=Dt[n-1].levels.at(-1).name,t=jm(n)?`再拿 ${Km(n)} 顆星（需要 ★${Dt[n].gate}），或${e}拿三星`:`打倒${e}，並集滿 ★${Dt[n].gate}（${e}拿三星可免）`;return`${Dt[n].blurb}　前 ${Hm} 關可以先嘗鮮；${t}就能開放全部關卡。`}const tp=(n,e,t)=>`<div class="shop-row"><div><b>${n}</b><span>${e}</span></div>${t}</div>`,np=(n,e,t)=>`<button type="button" class="buy" ${n} ${t?'aria-pressed="true"':""}>${e}</button>`;function Pw(n,e,t){const i={hp:r=>`生命 ${r.maxHp} 格`,stamina:r=>`體力 ${r.stamMax} 格・回復 ${Math.round((1-r.stamRegen/.8)*100)}%`,charge:r=>`充能 ${r.charge.toFixed(2)}/秒・開局 ${r.start}`,ink:r=>`墨水 ${Math.round(r.inkMul*100)}%`,ram:r=>`衝撞 ${Math.round(r.ramMul*100)}%`,parry:r=>`完美格擋 +${r.perfectBonus.toFixed(3)} 秒`,gems:r=>`星晶 +${r.gemPickup}・獎勵 ${Math.round(r.gemMul*100)}%`}[n];return i(e)===i(t)?`${i(t)}（累積中）`:`${i(e)} → ${i(t)}`}function Dw(n,e){const t=dl[n.rarity];let i,r;if(n.kind==="stat"){const s=fe.stats[n.key]||0,a={...fe.stats,[n.key]:s+n.pts};i=`${vi[n.key].name} +${n.pts}`,r=`${Pw(n.key,Xa(fe.stats,fe.slot),Xa(a,fe.slot))}<small>${s+n.pts} / ${vi[n.key].cap}</small>`}else n.kind==="passive"?(i=`被動・${hl[n.id].name}`,r=hl[n.id].desc):n.kind==="ult"?(i=`大招・${fl[n.id].name}`,r=fl[n.id].desc):n.kind==="slot"?(i="被動欄位 +1",r="多裝備 1 個被動技能"):(i=`星晶 +${n.gems}`,r="本章屬性都已達上限，換成星晶");return`<button type="button" class="card ${t.id} ${e===Gr?"sel":""}" data-card="${e}" style="--d:${e*.12}s"><em>${t.name}</em><b>${i}</b><span>${r}</span></button>`}function Lw(){const n=n0(),e=Xa(fe.stats,fe.slot);if(fe.pending)return`<p class="pick-hint">選一張卡加強史萊姆</p><div class="cards n${fe.pending.cards.length}">${fe.pending.cards.map(Dw).join("")}</div><button type="button" id="pickOk" class="pick-ok" ${Gr<0?"disabled":""}>${Gr<0?"點一張卡":"確定選這張"}</button>`;const t=Object.entries(Zr).map(([r,s])=>`<button type="button" class="pack ${r}" data-pack="${r}" ${fe.crystals<s.cost?"disabled":""}><b>${s.name}</b><span>${s.cards} 張選 1</span><small>${dl.map((a,o)=>`${a.name}${s.odds[o]}%`).join(" ")}</small>${r==="high"?`<small>保底 ${fe.pity}/${Vm} 必出鑽石</small>`:""}<i>${Jr(s.cost)}</i></button>`).join(""),i=Object.entries(vi).map(([r,s])=>{const a=fe.stats[r]||0,o=Wm(r,n);return`<div class="sbar"><span>${s.name}</span><div><i style="width:${a/s.cap*100}%"></i><u style="left:${o/s.cap*100}%"></u></div><b>${a}/${o}</b></div>`}).join("");return`<div class="packs">${t}</div><div class="sbars"><p class="muted">目前屬性（白線＝本章上限，打倒首領後提高）</p>${i}<p class="muted">生命 ${e.maxHp}・體力 ${e.stamMax}・被動欄 ${e.slots}</p></div>`}function $a(){ee("shopGems").innerHTML=Jr(fe.crystals);for(const t of document.querySelectorAll("#shopTabs button"))t.classList.toggle("sel",t.dataset.tab===Aa);let n="";if(Aa==="draw"&&(n=Lw()),Aa==="ult"&&(n=Object.entries(fl).map(([t,i])=>{const r=fe.owned.ult.includes(t),s=fe.equip.ult===t;return tp(i.name,i.desc,r?np(`data-ult="${t}"`,s?"使用中":"裝備",s):'<span class="max">鑽石卡取得</span>')}).join("")),Aa==="passive"){const t=fe.equip.passives,i=Fl().slots;n=`<p class="muted">已裝備 ${t.length} / ${i}</p>`+Object.entries(hl).map(([r,s])=>{const a=fe.owned.passive.includes(r),o=t.includes(r);return tp(s.name,s.desc,a?np(`data-pas="${r}"`,o?"卸下":"裝備",o):'<span class="max">金卡以上取得</span>')}).join("")}const e=ee("shopList");e.innerHTML=n;for(const t of e.querySelectorAll("button"))t.onclick=()=>{const i=t.dataset;let r=!0;if(i.pack){if(t.getAttribute("aria-pressed")!=="true"){for(const s of e.querySelectorAll("[data-pack]")){const a=s===t;s.setAttribute("aria-pressed",String(a)),s.querySelector("span").textContent=a?"確定購買？再點一次":`${Zr[s.dataset.pack].cards} 張選 1`,s.classList.toggle("confirm",a)}Re.ui();return}if(r=!!i0(i.pack),Gr=-1,r){Re.ding(),$a();return}}else if(i.card!==void 0){Gr=+i.card,Re.ui(),e.querySelector(".cards").classList.add("shown");for(const a of e.querySelectorAll(".card"))a.classList.toggle("sel",a===t);const s=ee("pickOk");s.disabled=!1,s.textContent="確定選這張";return}else t.id==="pickOk"?(r=!!r0(Gr),Gr=-1):i.ult?bw(i.ult):i.pas&&(r=ww(i.pas));r?Re.pickup():Re.empty(),$a()}}function Dd(n){const{baseV:e,gUp:t,gDown:i,vMin:r,vMax:s}=Ct;let a=e*e;const o=[e];for(let l=1;l<n.length;l++){const c=n[l-1],u=n[l],d=u.h-c.h,f=c.p.distanceTo(u.p);if(c.water&&u.water||(a-=2*(d<0?i:t)*d),a>e*e&&(a=Math.max(e*e,a-16*f)),a=Math.min(a,s*s),a<r*r)return o.push(r),{vs:o,stall:l};o.push(Math.sqrt(a))}return{vs:o,stall:-1}}function Iw(n,e,t){const i=n.p.distanceTo(e.p);return e.water&&n.water?i*Ct.lakeCost:i*Math.min(2.5,Math.max(.45,1+t*2.2))}const ip={down:new Se(16763981),flat:new Se(4843263),up:new Se(16730714),lake:new Se(9430015),dead:new Se(3817301)},Ld=new xt({vertexColors:!0,transparent:!0,opacity:1,side:sn,depthWrite:!1,depthTest:!1}),Js=new K(new Kt,Ld);Js.frustumCulled=!1;Js.renderOrder=2;Ve.add(Js);const ce={path:[],ink:0,budget:0,sim:{vs:[Ct.baseV],stall:-1},fade:0,drawing:!1,pointer:null,run:null},Id=n=>{const e=ln(n);return{d:n.clone(),h:e,p:n.clone().multiplyScalar(ge+e),water:on(n)<0,kind:"flat"}},ml=[];let tr=0;function ss(){ml.length=0,tr=0;const n=[],e=[],t=.17,i=ce.path;let r=0;for(let a=0;a<i.length-1;a++){const o=i[a].p,l=i[a+1].p,c=o.distanceTo(l);if(c<1e-4)continue;const u=o.clone().normalize(),d=new me().crossVectors(u,new me().subVectors(l,o)).normalize().multiplyScalar(t),f=u.clone().multiplyScalar(.14),_=ce.sim.stall>=0&&a+1>ce.sim.stall?ip.dead:ip[i[a+1].kind];r+=c,ml.push(r);const x=new me().subVectors(l,o).normalize().multiplyScalar(t*.6),g=o.clone().sub(x).add(d).add(f),p=o.clone().sub(x).sub(d).add(f),T=l.clone().add(x).add(d).add(f),E=l.clone().add(x).sub(d).add(f);for(const y of[g,p,T,p,E,T])n.push(y.x,y.y,y.z),e.push(_.r,_.g,_.b)}const s=new Kt;s.setAttribute("position",new nt(n,3)),s.setAttribute("color",new nt(e,3).setUsage(Tg)),Js.geometry.dispose(),Js.geometry=s}const rp=new L_;function Uw(n,e){const t=Ti.domElement.getBoundingClientRect();rp.setFromCamera({x:(n-t.left)/t.width*2-1,y:-(e-t.top)/t.height*2+1},qe),Ve.updateMatrixWorld(!0);const i=rp.intersectObjects(sl,!1)[0];return i?hd(i.point).normalize():null}function Ol(){return m.state!=="play"||m.mode!=="play"||m.ult<Ct.min||M.state!=="free"?(m.state==="play"&&m.ult<Ct.min&&(Re.empty(),ot("大招需累積過半","var(--mist)")),!1):(A1(tt.boss?M.d.clone().add(tt.boss.d).normalize():M.d),m.mode="ultDraw",ce.drawing=!1,ce.pointer=null,ce.path=[Id(M.d)],ce.ink=0,ce.sim=Dd(ce.path),Ld.opacity=1,ce.fade=0,ss(),ce.budget=Ct.ink*m.ult/100*(tt.boss?1.5:1),Re.ult(),gr("劃線斬"),jt("ultBegin"),!0)}function o0(n,e){ce.drawing=!0,kl(n,e)}let sp=0;function kl(n,e){if(!ce.drawing||(ce.pointer={x:n,y:e},!ud()))return;const t=Uw(n,e);if(!t)return;let i=!1;for(let r=0;r<400;r++){const s=ce.path[ce.path.length-1];if(s.d.angleTo(t)*ge<Ct.step||!l0(Je(s.d,qt(s.d,t),Ct.step)))break;i=!0}i&&(ce.sim=Dd(ce.path),ss())}function l0(n){if(ce.ink>=ce.budget-.001)return!1;const e=ce.path[ce.path.length-1],t=Id(n),i=(t.h-e.h)/Math.max(e.d.angleTo(t.d)*ge,.001);t.kind=t.water?"lake":i<-.06?"down":i>.06?"up":"flat";const r=Iw(e,t,i);if(ce.ink+r>ce.budget)return ce.ink=ce.budget,!1;ce.ink+=r,t.ink=ce.ink,ce.path.push(t);const s=performance.now();return s-sp>80&&(Re.draw(t.kind),sp=s),!0}function Nw(n){if(!Ol())return!1;ce.drawing=!0;for(const e of n)for(let t=0;t<200;t++){const i=ce.path[ce.path.length-1];if(i.d.angleTo(e)*ge<Ct.step||!l0(Je(i.d,qt(i.d,e),Ct.step)))break}return ce.sim=Dd(ce.path),ss(),Ud(),m.mode==="ultDraw"&&(m.mode="play"),!0}function c0(){ce.drawing&&ce.pointer&&ud()&&kl(ce.pointer.x,ce.pointer.y)}function Ud(){if(ce.pointer=null,!ce.drawing)return;ce.drawing=!1;const n=ce.sim.stall>=0?ce.path.slice(0,ce.sim.stall+1):ce.path,e=[0];for(let t=1;t<n.length;t++)e.push(e[t-1]+n[t].p.distanceTo(n[t-1].p));if(e[e.length-1]<1){ce.path=[Id(M.d)],ss();return}ce.run={pts:n,cum:e,total:e[e.length-1],vs:ce.sim.vs,dist:0,i:0,mult:1,v:Ct.baseV,kills:0,hit:new Map,seal:!!tt.boss},m.mode="ultDash",M.state="ult",Re.dash(),ci("determined"),m.ult=Math.max(0,m.ult-(n[n.length-1].ink||0)/Ct.ink*100)}function Fw(n,e){const t=m.enemies.filter(r=>!r.dead&&r!==n&&r.spawn>=1&&!ce.run.hit.has(r)&&r.d.angleTo(n.d)*ge<5).sort((r,s)=>r.d.angleTo(n.d)-s.d.angleTo(n.d)).slice(0,2),i=Sn(n);for(const r of t)ce.run.hit.set(r,ce.run.dist),eS(i,Sn(r),9430015),_r(r,e,qt(n.d,r.d),{pierce:!0}),r.dead&&ce.run.kills++}function Ow(n){const e=Ct.blastR;cr(M.p.clone().addScaledVector(M.d,.3),M.d,16751164,3,.5,5),je(M.p,16763981,40,12,.7),Re.slam(),m.shake=Math.max(m.shake,1),Rd({kind:"circle",c:M.d,r:e},"ult");for(const t of m.enemies)t.dead||t.spawn<1||t.d.angleTo(M.d)*ge>e+t.r||(_r(t,Ct.blastDmg*n,qt(M.d,t.d),{pierce:!0}),t.dead&&ce.run.kills++)}function kw(n){let e=n;const t=ce.run;for(;e>0&&ce.run;){const i=Math.min(.25,t.v*e);for(e-=i/t.v,t.dist=Math.min(t.total,t.dist+i);t.i<t.pts.length-2&&t.dist>=t.cum[t.i+1];)t.i++;const r=t.i,s=t.cum[r+1]-t.cum[r],a=s>0?$t((t.dist-t.cum[r])/s,0,1):1;ki(new me().lerpVectors(t.pts[r].d,t.pts[r+1].d,a).normalize()),t.v=t.vs[r]+(t.vs[r+1]-t.vs[r])*a,t.mult=$t((t.v/Ct.baseV)**1.5,.5,3),M.face=qt(t.pts[r].d,t.pts[r+1].d),je(M.p.clone().addScaledVector(M.d,.4),t.mult>=2?16763981:4843263,1,1.5,.35);for(const o of m.enemies){if(o.dead||o.spawn<1||M.p.distanceTo(Sn(o))>o.r+Ct.hitR)continue;const l=t.hit.get(o);if(l!==void 0&&t.dist-l<2)continue;t.hit.set(o,t.dist);const c=Ct.dmg*t.mult*(o.stun>0?2:1);_r(o,c,M.face,{pierce:!0}),o.dead&&t.kills++,m.ultKind==="chain"&&Fw(o,c*.5)}if(Ul(M.d,Ct.hitR,t.hit,"ult"),t.seal&&JS(M.p),t.dist>=t.total&&(m.ultKind==="blast"&&Ow(Math.max(1,t.mult)),t.seal&&QS(),ce.sim.stall>=0&&ot("力竭…","var(--hurt)"),t.kills>=4&&(gr("一筆入魂"),Zs(.3,"#ffcc4d"),ci("happy",1)),jt("ultEnd",t.kills),ce.run=null,m.mode="play",M.state="free",M.invuln=.6,ce.fade=.6,ss()),m.hitstop>0)break}}function Bw(n){if(ce.fade>0)ce.fade-=n,Ld.opacity=Math.max(0,ce.fade/.6),ce.fade<=0&&(ce.path=[],ss());else if(m.mode==="ultDash"&&ce.run){const e=Js.geometry.getAttribute("color"),t=tr;for(;tr<ml.length&&ml[tr]<=ce.run.dist;){const i=tr*18;for(let r=i;r<i+18;r++)e.array[r]*=.35;tr++}tr>t&&(e.addUpdateRange(t*18,(tr-t)*18),e.needsUpdate=!0)}}function zw(){ce.run=null,ce.path=[],ce.drawing=!1,ce.pointer=null,ce.fade=0,ss()}const Nc=Ti.domElement,si=ee("joy"),Hs=ee("knob"),De={id:null,ox:0,oy:0,x:0,y:0,t0:0,st:"pending",samples:[],tMove:0,cMove:0},Nd=14,Gw=20,u0=60,Hw=22,Vw=.5,Ww=380,d0=n=>$t((n-De.t0-60)/((He.guardHold-.06)*1e3),0,1),f0=()=>{si.hidden=Hs.hidden=!0};function Ja(){De.id=null,De.st="pending",f0(),Qa.clear()}Nc.addEventListener("pointerdown",n=>{if(Wn(),m.state==="play"){if(m.mode==="ultDraw"){try{Nc.setPointerCapture(n.pointerId)}catch{}o0(n.clientX,n.clientY);return}if(De.id===null){Object.assign(De,{id:n.pointerId,ox:n.clientX,oy:n.clientY,x:n.clientX,y:n.clientY,t0:performance.now(),st:"pending",tMove:0,cMove:0,samples:[{t:performance.now(),x:n.clientX,y:n.clientY}]}),si.hidden=Hs.hidden=!1,si.className="",si.style.setProperty("--c",0),si.style.left=Hs.style.left=n.clientX+"px",si.style.top=Hs.style.top=n.clientY+"px";try{Nc.setPointerCapture(n.pointerId)}catch{}}}});addEventListener("pointermove",n=>{if(m.mode==="ultDraw"){kl(n.clientX,n.clientY);return}if(n.pointerId!==De.id)return;const e=performance.now();for(De.x=n.clientX,De.y=n.clientY,De.samples.push({t:e,x:De.x,y:De.y});De.samples.length>2&&e-De.samples[0].t>100;)De.samples.shift();const t=Math.hypot(De.x-De.ox,De.y-De.oy);if(De.st==="pending"){const r=d0(e);r>=1?h0():t>(r>0?Gw:Nd)&&(De.st="move",De.tMove=e,De.cMove=r,si.style.setProperty("--c",0))}const i=Math.min(1,u0/Math.max(t,1));Hs.style.left=De.ox+(De.x-De.ox)*i+"px",Hs.style.top=De.oy+(De.y-De.oy)*i+"px"});function h0(){De.st="guard",si.className="guard",_t(660,.05,"sine",.04)}function Xw(){const n=De.samples,e=n[0],t=n[n.length-1],i=Math.max(t.t-e.t,16),r=t.x-e.x,s=t.y-e.y;return{dx:r,dy:s,dist:Math.hypot(r,s),speed:Math.hypot(r,s)/i}}function p0(n){if(m.mode==="ultDraw"){Ud();return}if(n.pointerId!==De.id)return;const e=performance.now()-De.t0,t=Math.hypot(De.x-De.ox,De.y-De.oy),i=Xw(),r=De.x-De.ox,s=De.y-De.oy,a=De.st==="move"&&De.cMove>=Vw&&performance.now()-De.tMove<Ww&&i.speed>.45;De.st==="guard"||a?t>Hw?Wa(Wr(r,s)):i.speed>.45&&i.dist>18?Wa(Wr(i.dx,i.dy)):(si.className="cancel",_t(200,.05,"sine",.04)):i.speed>.8&&i.dist>25?(si.className="dash",Pl(Wr(i.dx,i.dy))):De.st==="pending"&&e<190&&t<=Nd&&Dl(),De.id=null,De.st="pending",setTimeout(()=>{De.id===null&&f0()},90)}addEventListener("pointerup",p0);addEventListener("pointercancel",p0);const Qa=new Set,Hu={KeyW:[0,-1],ArrowUp:[0,-1],KeyS:[0,1],ArrowDown:[0,1],KeyA:[-1,0],ArrowLeft:[-1,0],KeyD:[1,0],ArrowRight:[1,0]};addEventListener("keydown",n=>{if(!(n.repeat||m.state!=="play"))if(Hu[n.code])Qa.add(n.code),n.preventDefault();else if(n.code==="Space")n.preventDefault(),Td();else if(n.code==="KeyJ"||n.code==="ShiftLeft"||n.code==="ShiftRight"){const e=m0();e?Pl(Wr(e[0],e[1])):Dl()}else n.code==="KeyK"?Wa($b()):n.code==="KeyL"&&Ol()});addEventListener("keyup",n=>Qa.delete(n.code));addEventListener("blur",()=>Qa.clear());function m0(){let n=0,e=0;for(const t of Qa)n+=Hu[t][0],e+=Hu[t][1];return n||e?[n,e]:null}function qw(){if(De.id!==null&&De.st==="pending"){const t=d0(performance.now());si.style.setProperty("--c",t*100),t>=1&&h0()}const n=m.move;if(n.m=0,De.id!==null&&De.st==="move"){const t=De.x-De.ox,i=De.y-De.oy,r=Math.hypot(t,i);r>Nd&&(n.sx=t,n.sy=i,n.m=Math.min(1,r/u0))}const e=m0();e&&!n.m&&(n.sx=e[0],n.sy=e[1],n.m=1)}ee("ultBtn").addEventListener("pointerdown",n=>{n.stopPropagation(),Wn(),Ol()&&Ja()});ee("jumpBtn").addEventListener("pointerdown",n=>{n.stopPropagation(),n.preventDefault(),Wn(),Td()});let Us;try{Us=new Set(JSON.parse(localStorage.getItem("slasharena-prop-tips"))||[])}catch{Us=new Set}function $w(n){for(const e of["ore","bomb"]){if(!m.props.some(s=>s.type===e))continue;const t=e==="bomb"?`bomb:${m.level.planet.id}`:e;if(Us.has(t))continue;const i=m.level.planet.id,r=e==="ore"?vt.ore:{ice:vt.bombIce,volcano:vt.bombVolcano,desert:vt.bombDesert}[i]||vt.bomb;ns(n,()=>{if(!(m.state!=="play"||Us.has(t))){ot(r,"var(--ink)",Ae.hintTime),Us.add(t);try{localStorage.setItem("slasharena-prop-tips",JSON.stringify([...Us]))}catch{}}}),n+=Ae.hintTime+Ae.hintGap}}function Yw(n,e,t=M.d){for(let i=0;i<400;i++){const r=Gt(),s=r.angleTo(t),a=on(r);if(s>=n&&s<=e&&a>.05&&a<1.5)return r}return Je(t,ct(t,Gt()).normalize(),5)}let Ns=[];const jw=()=>m.tut?0:zr.perWave[m.tier>=zr.twoFrom?1:0];function g0(n){lw(n).forEach((e,t)=>{const i=gn[e],r=i.base==="boss",s=zi(e,i.aquatic&&Yp(M.d,.35)||Yw(r?.55:.45,r?.7:.85));s.spawn=-t*.12,s.atkCd=(r?2.5:1)+t*.6+Math.random(),r?m.boss=s:wb(s,jw()-m.elites)&&m.elites++})}const Kw=n=>m.endless?cw(n,m.level.planet):ow(m.waves[n-1]);function eo(n){m.wave=n,m.elites=0,m.waveClearing=!1,m.graceT=Qt.grace,m.boss=null,m.endless&&(m.tier=Math.min(12,m.level.tier+(n>>1)));const e=Kw(n),t=Object.keys(e.groups[0]).find(i=>ku[i]);jt("wave",n),km(m.level),gr(t?"首領戰":m.endless?`無盡 ${n}`:`WAVE ${n}`,t?`${ku[t].name} 降臨`:n===1&&!m.endless?m.level.name:""),mr(M),Ns=e.groups.slice(1),g0(e.groups[0]),e.tip&&ns(1.2,()=>ot(e.tip,"var(--warn)")),$w(e.tip?Ae.hintAfterWave:Ae.hintDelay)}function Zw(){if(m.state!=="play"||m.waveClearing||m.mode!=="play"||m.tut)return;const n=m.enemies.filter(t=>!t.dead).length;if(Ns.length&&n<=(Ns[0].at??0)){g0(Ns.shift()),ot("增援！","var(--hurt)"),Re.warn();return}if(n||Ns.length)return;m.waveClearing=!0,Re.clear(),m.score+=500*m.tier;const e=(m.wave%ih.every===0?ih.amount:0)+(m.passives.has("regen")?1:0);if(cS(M,e),mr(M),ci("happy",1.2),!m.endless&&m.wave>=m.waves.length){jt("victory");return}gr("CLEAR"),ns(2,()=>{m.enemies=[],eo(m.wave+1)})}function Jw(){Ns=[]}const Xi=new K(new pr(.55,.8,40),new xt({color:4843263,transparent:!0,opacity:.9,side:sn,depthWrite:!1}));Xi.renderOrder=3;Xi.visible=!1;Ve.add(Xi);const Ra=[{title:"移動",body:'按住螢幕任意處拖曳，走到<span class="c-ink">發光圈</span>裡。上坡慢、下坡快。'},{title:"衝撞",body:'<span class="c-dash">快速滑動</span>朝那個方向衝撞，或<span class="c-dash">點一下</span>自動衝向最近的敵人。打倒稻草兵！'},{title:"格擋",body:'敵人腳下出現<span class="c-warn">黃線</span>時：按住不動到外圈變<span class="c-guard">藍</span>，再<b>朝敵人方向滑出</b>放開（慢慢滑也行，不會變衝撞；滑回中心放開＝取消）。先練習擋住一次，不用急著追求完美。'},{title:"反擊",body:'<span class="c-gold">完美格擋</span>會讓敵人暈眩，並獲得 <b>3 倍大招充能</b>；一般格擋也會回 1 格體力。趁破綻<span class="c-dash">點一下衝撞</span>打倒它！'},{title:"跳躍",body:'巨魔會放<span class="c-warn">圓環震波</span>。圓環罩到腳下時，按左下的<b>跳躍鈕</b>躍過去。'},{title:"滾石",body:'滾石會<b>連滾三次</b>，第二、三次的預警更短。躲開它，等它<span class="c-gold">暈眩</span>再打，平常它硬得打不動。'},{title:"大招",body:'大招集滿了！點右下的<span class="c-gold">斬</span>，時間暫停後<b>直接在星球上劃一條線</b>穿過敵人，放開就發動。下坡越劃越快。'}];function Qw(n){const e={step:-1,noDamage:!0,foe:null,onDone:n,offs:[],doneT:0};m.tut=e,m.graceT=0,m.stamina=3,m.ult=0,mr(M);const t=()=>{e.step++,eE(e)};return e.next=t,e.offs.push(Bt("kill",i=>{e.step===1&&i===e.foe||e.step===3&&i===e.foe?t():e.step===2&&i===e.foe?(_0(e),ot("再練一次格擋","var(--guard)")):(e.step===5&&i===e.foe||e.step===6&&m.enemies.every(r=>r.dead))&&t()}),Bt("parry",({e:i,perfect:r})=>{e.step===2&&i===e.foe?e.practicePerfect?r?(Qs.hidden=!0,t()):ot("擋住了！下次再晚一點放開","var(--guard)",1.8):(e.practicePerfect=!0,vl(3,Ra.length,"完美格擋練習","先按住到外圈變藍，等黃線快填滿、開始閃紅，<b>攻擊快碰到你時才朝敵人滑出放開</b>。太早放開仍可一般格擋。試著抓準一次！"),Qs.hidden=!1):e.step===4&&i===e.foe&&ap(e)}),Bt("jump",i=>{e.step===4&&i==="ring"&&ap(e)}),Bt("hurt",()=>{e.step>=2&&e.step<=5&&ot("沒關係，再試一次","var(--mist)")}),Bt("ultEnd",()=>{e.step===6&&m.enemies.some(i=>!i.dead)&&(yl(100),ot("還有敵人，再劃一次","var(--gold)"))})),t(),e}function ap(n){n.foe&&!n.foe.dead&&(je(Yt(n.foe.d),10185727,30,8,.7),Sd(n.foe)),n.next()}const Ps=(n,e=0)=>{const t=Wr(0,-1),i=new me().crossVectors(M.d,t).normalize();let r=Je(Je(M.d,t,n),ct(M.d,i),e);for(let s=0;s<12&&An(r);s++)r=Je(r,t,-.6);return r};function eE(n){const e=n.step;if(jt("tutStep",e),e>=Ra.length)return tE(n);if(vl(e+1,Ra.length,Ra[e].title,Ra[e].body),Re.step(),e>0&&ci("happy",.6),e===0&&(n.target=Ps(4.5,1.5),Xi.visible=!0),e===1&&(Xi.visible=!1,n.foe=zi("grunt",Ps(3.5),{dummy:!0})),e===2&&(n.practicePerfect=!1,_0(n)),e===4&&(n.foe=zi("brute",Ps(2.6),{only:["ring"],warnMul:1.2,hp:99}),n.foe.hp=99,n.foe.atkCd=1.5),e===5&&(n.foe=zi("boulder",Ps(5)),n.foe.atkCd=1.5),e===6){yl(100);for(const[t,i]of[[3,-1.6],[4.2,0],[3,1.6]])zi("grunt",Ps(t,i),{dummy:!0})}}function _0(n){n.foe=zi("grunt",Ps(3),{only:["line"],warnMul:1.15}),n.foe.atkCd=1.2}const Qs=document.getElementById("skipPerfect");Qs.addEventListener("pointerdown",n=>n.stopPropagation());Qs.onclick=n=>{n.stopPropagation(),m.tut?.step===2&&m.tut.practicePerfect&&(Qs.hidden=!0,m.tut.next())};function tE(n){vl(),gr("教學完成","開始第一波"),Re.clear(),ci("happy",1.5);try{localStorage.setItem("slasharena-tut","1")}catch{}x0(),m.waveClearing=!0,ns(1.8,()=>n.onDone())}function x0(){const n=m.tut;n&&(Qs.hidden=!0,n.offs.forEach(e=>e()),Xi.visible=!1,vl(),m.tut=null)}function nE(n,e){const t=m.tut;t&&(t.step===0&&t.target&&(Xi.position.copy(Yt(t.target)).addScaledVector(t.target,.12),Xi.quaternion.setFromUnitVectors(new me(0,0,1),t.target),Xi.scale.setScalar(1+Math.sin(e*5)*.08),M.d.angleTo(t.target)*ge<.9&&(je(Yt(t.target).addScaledVector(t.target,.3),4843263,20,5,.5),t.next())),t.step>=1&&(m.stamina=Math.max(m.stamina,1)))}const v0=()=>{try{return localStorage.getItem("slasharena-tut")==="1"}catch{return!1}},Fd="slasharena-runs";let lt=null;const Ya=()=>m.runTime,iE=n=>({kind:n,started:new Date().toISOString(),device:`${innerWidth}x${innerHeight} ${matchMedia("(pointer: coarse)").matches?"touch":"mouse"}`,level:null,tutorial:[],waves:[],dash:0,guard:0,parry:0,perfect:0,evade:0,jumpPress:0,jumpOver:0,ultUses:0,ultKills:0,crystals:0,hurt:0,burn:0});function Od(n,e=null){Bl("abandoned"),lt=iE(n),lt.level=e}function Bl(n){if(!lt)return;Object.assign(lt,{result:n,endWave:m.wave,tier:m.tier,picked:m.runCrystals,score:m.score,time:Math.round(Ya()),bestCombo:m.bestCombo,hpLeft:M.hp}),M0();const e=zl();for(e.push(lt);e.length>30;)e.shift();try{localStorage.setItem(Fd,JSON.stringify(e))}catch{}lt=null}const zl=()=>{try{return JSON.parse(localStorage.getItem(Fd))||[]}catch{return[]}},rE=()=>{try{localStorage.removeItem(Fd)}catch{}};function M0(){const n=lt?.waves.at(-1);n&&n.time==null&&(n.time=Math.round(Ya()-n.t0))}Bt("wave",n=>{lt&&(M0(),lt.waves.push({n,t0:Ya(),hurt:0}))});Bt("tutStep",n=>{if(!lt)return;const e=lt.tutorial.at(-1);e&&e.time==null&&(e.time=+(Ya()-e.t0).toFixed(1)),lt.tutorial.push({step:n,t0:Ya(),hurt:0})});Bt("hurt",()=>{if(!lt)return;lt.hurt++;const n=m.tut?lt.tutorial.at(-1):lt.waves.at(-1);n&&n.hurt++});Bt("dash",()=>lt&&lt.dash++);Bt("guard",()=>lt&&lt.guard++);Bt("parry",({perfect:n})=>{lt&&(lt.parry++,n&&lt.perfect++)});Bt("evade",()=>lt&&lt.evade++);Bt("jumpPress",()=>lt&&lt.jumpPress++);Bt("jump",()=>lt&&lt.jumpOver++);Bt("ultEnd",n=>{lt&&(lt.ultUses++,lt.ultKills+=n)});Bt("crystal",()=>lt&&lt.crystals++);Bt("burn",()=>lt&&lt.burn++);const sE={game:"正式",tutorial:"教學起",endless:"無盡"},aE={win:"通關",dead:"戰敗",quit:"中途離開",abandoned:"重開"};function y0(n=zl()){const e=["移動","衝撞","格擋","反擊","跳躍","滾石","大招"];return n.map((t,i)=>{const r=t.tutorial.filter(a=>a.time!=null&&e[a.step]).map(a=>`${e[a.step]}${a.time}s${a.hurt?`/挨${a.hurt}`:""}`).join(" "),s=t.guard?Math.round(t.parry/t.guard*100):0;return`#${i+1} ${sE[t.kind]||t.kind} ${t.level||""} ${aE[t.result]||t.result} 到第${t.endWave}波 ${t.time}s 分數${t.score} 受傷${t.hurt}
   格擋 ${t.parry}/${t.guard} (${s}%) 完美${t.perfect} 閃避斬${t.evade} 跳躍${t.jumpPress}(躍過${t.jumpOver}) 大招${t.ultUses}次殺${t.ultKills} 星晶${t.crystals} 燙傷${t.burn||0}`+(r?`
   教學 ${r}`:"")}).join(`
`)}const oE=new tn(.32),lE=new pn({color:10482687,emissive:2799832,emissiveIntensity:1.4,roughness:.3,flatShading:!0}),va=new N;function S0(n=null,e=null){for(let t=0;t<200;t++){const i=n?n.clone():Gt(),r=i.angleTo(M.d);if(!n&&(r<.25||r>.8||on(i)<.05))continue;const s=new K(oE,lE);s.castShadow=!0;const a=e||i;s.position.copy(a).multiplyScalar(ge+ln(a)+.7),Ve.add(s),m.crystals.push({d:i,mesh:s,t:Math.random()*6,pickupT:e?Ae.pickupDelay:0,flight:e?{from:e.clone(),t:0}:null});return}}function cE(){m.crystals.forEach(n=>Ve.remove(n.mesh)),m.crystals=[]}Bt("oreDrop",n=>S0(n.d,n.from));const uE=["title","mapOv","shopOv","over","win","pauseOv","logOv"],aa=n=>uE.forEach(e=>ee(e).hidden=e!==n);function dE(){for(let n=0;n<500;n++){const e=Gt(),t=on(e);if(t>.2&&t<.6&&oi.every(i=>i.type==="r"||Ys(i,e)>i.w+.1))return e}return new N(0,0,1)}function Gl(n,e=null){const t=e??(Wt.id===n?Wt.variant:0),i=e===null?Wt.id===n?Wt.light:"day":N1(e);(Wt.id!==n||Wt.variant!==t||Wt.light!==i)&&nm(n,t,i)}function b0(){LS(),tw(),Ub(),cE(),HS(),WS(),Cl(),Jw(),zw()}function kd(){m.runId++,im(),b0(),Ja(),x0(),Ew(),V1(He.stamMax),lm(),Object.assign(m,{score:0,ult:Ct.start,stamina:He.stamMax,combo:0,bestCombo:0,mode:"play",runTime:0,hurtCount:0,endless:!1,boss:null,slowT:0,hitstop:0,waveClearing:!1,crystalT:6,runCrystals:0,undyingUsed:!1}),Zb(dE()),m.propOrigin=M.d.clone(),m.oreCrystals=0,ee("combo").style.opacity=0,m.state="play",aa(null),ee("pauseBtn").hidden=!1,ee("skipTut").hidden=!0}function Bd(n){Object.assign(m,{level:n,waves:n.waves,tier:n.tier,hpMul:n.hpMul??n.planet.hpMul,wave:1})}function vr(n){const e=rs(n);Gl(e.planet.id,e.i),kd(),Bd(e),Od("game",n),mr(M),eo(1)}function Hl(n){const e=Dt[n],t=rs(In(n,e.levels.length-1));Gl(e.id),kd(),Bd(t),m.endless=!0,Od("endless",e.id),mr(M),eo(1)}function fE(){vr(xw())}function zd(){const n=rs(In(0,0));Gl(n.planet.id),kd(),Bd(n),Od("tutorial",n.id),ee("skipTut").hidden=!1,Qw(()=>{m.state==="play"&&(ee("skipTut").hidden=!0,m.ult=Ct.start,eo(1))})}function hE(){if(m.state!=="play")return;m.state="over",m.mode="play",ce.run=null,Ja(),ee("pauseBtn").hidden=!0,ci("dizzy",99),Bl("dead");const n=m.endless?yw(m.level.planet.id,m.wave-1,m.score,m.runCrystals):t0(m.runCrystals,m.wave-1,m.level.planet.reward);ee("final").textContent=m.score.toLocaleString(),ee("best").innerHTML=`${m.endless?`無盡第 ${m.wave} 波`:`${m.level.name} · WAVE ${m.wave}`}<br>獲得 ${Jr(n)}　持有 ${Jr(fe.crystals)}`,E0(),ns(.9,()=>aa("over"))}function pE(){const n=(m.hurtCount===0?3:m.hurtCount<=2?2:m.hurtCount<=5?1:0)+(m.bestCombo>=15?2:m.bestCombo>=8?1:0);return n>=5?"S":n>=3?"A":n>=2?"B":"C"}Bt("victory",()=>{Re.win(),gr(m.level.boss?"星球解放！":"關卡完成！"),ns(2.2,()=>{if(m.state!=="play")return;m.state="win",Ja(),ee("pauseBtn").hidden=!0,Bl("win");const n=pE(),e=Mw(m.level.id,n,m.score,m.runCrystals),t=e0(m.level.id),i=Math.floor(m.runTime/60),r=Math.floor(m.runTime%60);ee("winLabel").textContent=m.level.boss?"PLANET CLEARED":`LEVEL ${m.level.i+1}`,ee("winName").textContent=m.level.boss?"星球解放":m.level.name,ee("rank").textContent=n,ee("winStars").innerHTML=a0(e.stars),ee("winScore").textContent=m.score.toLocaleString(),ee("winGems").innerHTML=`獲得 ${Jr(e.earned)}${e.first?"　首次通關":""}<br>持有 ${Jr(fe.crystals)}`,E0(),ee("winStats").innerHTML=`<span>時間<b>${i}:${String(r).padStart(2,"0")}</b></span><span>受傷<b>${m.hurtCount}</b></span><span>最高連擊<b>${m.bestCombo}</b></span>`,ee("nextLevel").hidden=!t,ee("nextLevel").textContent=t&&rs(t).p!==m.level.p?"前往下一顆星球":"下一關",aa("win")})});Bt("hurt",()=>{M.hp<=0&&ns(.5,hE)});function Ia(n){im(),b0(),m.mode="play",m.boss=null,m.storm=0,lm(),ee("pauseBtn").hidden=!0,ee("skipTut").hidden=!0,m.state=n==="title"?"title":n==="shopOv"?"shop":"map",aa(n),n==="title"&&Gd()}function w0(){Wn(),Pd(),Ia("mapOv")}function mE(){m.state==="play"&&(Bl("quit"),t0(m.runCrystals,0,0))}Rw({title:()=>Ia("title"),map:()=>Ia("mapOv"),shop:()=>Ia("shopOv"),select:Gl,play:n=>{Wn(),vr(n)},endless:n=>{Wn(),Hl(n)}});ee("start").onclick=()=>{v0()?w0():(Wn(),zd())};ee("tutBtn").onclick=()=>{Wn(),zd()};ee("again").onclick=()=>{Wn(),m.endless?Hl(m.level.p):vr(m.level.id)};ee("winAgain").onclick=()=>{Wn(),vr(m.level.id)};ee("nextLevel").onclick=()=>{Wn(),vr(e0(m.level.id))};ee("skipTut").onclick=n=>{n.stopPropagation();try{localStorage.setItem("slasharena-tut","1")}catch{}vr(In(0,0))};ee("skipTut").addEventListener("pointerdown",n=>n.stopPropagation());for(const n of["winShop","overShop"])ee(n).onclick=()=>{Wn(),Re.ui(),$a(),Ia("shopOv")};function E0(){const n=Tw();for(const e of document.querySelectorAll(".cta-hint"))e.textContent=n?`　${n}`:"";for(const e of["winShop","overShop"])ee(e).classList.toggle("ready",!!n)}for(const n of["toTitle","overTitle","winTitle"])ee(n).onclick=()=>{mE(),w0()};function Gd(){ee("titleBest").textContent=pl()?`★ ${pl()} / ${Qm()}　◆ ${fe.crystals.toLocaleString()}`:"",ee("tutBtn").hidden=!v0(),ee("logBtn").hidden=!zl().length}ee("logBtn").onclick=()=>{ee("logText").textContent=y0()||"（還沒有紀錄）",aa("logOv")};ee("logCopy").onclick=async()=>{const n=y0()+`

`+JSON.stringify(zl());try{await navigator.clipboard.writeText(n),ee("logCopy").textContent="已複製"}catch{ee("logCopy").textContent="無法複製，請長按文字選取"}setTimeout(()=>ee("logCopy").textContent="複製全部（傳給開發者）",1600)};ee("logClear").onclick=()=>{rE(),ee("logText").textContent="（已清除）"};ee("logClose").onclick=()=>{aa("title"),Gd()};Gd();let Hd=!1;const gE='<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h3l4-3.5v11L6 12H3z" fill="currentColor"/><path d="M13 7.5a3.5 3.5 0 0 1 0 5M15.2 5.2a6.5 6.5 0 0 1 0 9.6"/></svg>',_E='<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h3l4-3.5v11L6 12H3z" fill="currentColor"/><path d="M13 8l4 4M17 8l-4 4"/></svg>';function Vd(n){Vt.volume=$t(n,0,1),Vt.volume>0&&(Vt.lastVol=Vt.volume);try{localStorage.setItem("slasharena-vol",Vt.volume)}catch{}Vt.volume>0?Wn():j1(0);const e=ee("soundBtn");e.innerHTML=Vt.volume>0?gE:_E,e.classList.toggle("off",Vt.volume<=0),e.setAttribute("aria-label",Vt.volume>0?"關閉聲音":"開啟聲音"),ee("vol").value=Math.round(Vt.volume*100),ee("volN").textContent=Vt.volume>0?Math.round(Vt.volume*100)+"%":"關"}function oa(n){n&&m.state!=="play"||(Hd=n,ee("pauseOv").hidden=!n,n&&(Ja(),ce.drawing=!1),Vu=performance.now())}ee("soundBtn").addEventListener("pointerdown",n=>n.stopPropagation());ee("soundBtn").onclick=()=>{Vd(Vt.volume>0?0:Vt.lastVol),Vt.volume>0&&_t(660,.08,"sine",.08)};ee("pauseBtn").addEventListener("pointerdown",n=>n.stopPropagation());ee("pauseBtn").onclick=()=>oa(!0);ee("resume").onclick=()=>oa(!1);ee("restart").onclick=()=>{oa(!1),m.endless?Hl(m.level.p):vr(m.level.id)};ee("toTitle").addEventListener("click",()=>oa(!1));ee("vol").addEventListener("input",n=>Vd(n.target.value/100));ee("vib").checked=Va.on;ee("vib").addEventListener("change",n=>{Va.on=n.target.checked;try{localStorage.setItem("slasharena-vib",Va.on?"1":"0")}catch{}});addEventListener("keydown",n=>{(n.key==="Escape"||n.key==="p"||n.key==="P")&&oa(!Hd)});document.addEventListener("visibilitychange",()=>{document.hidden&&m.state==="play"&&!window.__game?.noAutoPause&&oa(!0)});Vd(Vt.volume);const xE=ee("ink"),op=ee("ultTip");let Vu=performance.now(),Go=0,T0=!1,A0=!1;const lp=new N,cp=new N,up=new N;function R0(n){requestAnimationFrame(R0);const e=Math.min((n-Vu)/1e3,.05);Vu=n,!T0&&!Hd&&C0(e)}function C0(n){Go+=n,C1(n),O1(n),document.body.dataset.state!==m.state&&(document.body.dataset.state=m.state);const e=m.mode==="ultDraw"?.03:m.mode==="ultDash"?.25:m.slowT>0?.2:1;m.ts+=(e-m.ts)*(1-Math.exp(-n*14)),m.state==="play"?(m.slowT-=n,m.comboT-=n,m.graceT-=n,m.runTime+=n,qw(),m.hitstop>0?m.hitstop-=n:(m.mode==="ultDash"?kw(n):m.mode==="play"&&jb(n),Cb(n*m.ts,n),GS(n*m.ts),m.mode==="play"&&VS(n),eb(n*m.ts,n),nw(n*m.ts),m.mode==="play"&&!m.tut&&(m.ult=Math.min(100,m.ult+n*Ct.charge)),!m.tut&&(m.crystalT-=n)<=0&&(m.crystalT=11,m.crystals.length<2&&S0())),Zw(),nE(n,Go),m.mode!=="ultDraw"&&R1(M.d,m.mode==="ultDash"?7:5,n)):(m.state==="title"||m.state==="map"||m.state==="shop")&&Ve.rotateY(n*.12);for(const i of m.crystals){i.t+=n,i.pickupT=Math.max(0,i.pickupT-n);let r=0;if(i.flight){i.flight.t+=n;const s=Math.min(1,i.flight.t/Ae.dropTime);r=Ob(i.flight.from,i.d,s,va),s>=1&&(i.flight=null)}else va.copy(i.d);i.mesh.position.copy(va).multiplyScalar(ge+ln(va)+.7+Math.sin(i.t*3)*.12+r),i.mesh.quaternion.setFromUnitVectors(qi,va),i.mesh.rotateY(i.t*2)}Qp(m.state==="play"&&m.mode==="ultDraw",n),m.state==="play"&&m.mode==="ultDraw"&&c0(),J1(n),F1(Go),Bw(n),DS(n*m.ts),aS(n),Q1(n),tS(n),T1(n),Kb(n,Go);const t=m.mode==="ultDraw";op.hidden=!t,t&&(op.querySelector("p").textContent=ud()?"俯視劃線：從史萊姆連向目標，放開發動":"視角切換中…",xE.style.transform=`scaleX(${(ce.budget-ce.ink)/ce.budget})`),q1(m.warnings.some(i=>i.kind==="ring"&&jr(i,M.d,.6)),n),sw(P0),m.shake*=Math.exp(-n*9),ri.kick.multiplyScalar(Math.exp(-n*14)),ri.punch*=Math.exp(-n*8),!A0&&(lp.set(1,0,0).applyQuaternion(qe.quaternion),cp.set(0,1,0).applyQuaternion(qe.quaternion),up.set(0,0,-1).applyQuaternion(qe.quaternion),qe.position.copy(Zn).add(new N(Math.random()-.5,Math.random()-.5,0).multiplyScalar(t?0:m.shake)).addScaledVector(lp,t?0:ri.kick.x).addScaledVector(cp,t?0:ri.kick.y).addScaledVector(up,t?0:ri.punch),Ti.render(Un,qe),qe.position.copy(Zn),qe.updateMatrixWorld())}requestAnimationFrame(R0);new URLSearchParams(location.search).has("tune")&&dp(()=>import("./tune-Dg4e8YvI.js"),[],import.meta.url);new URLSearchParams(location.search).has("perf")&&dp(()=>import("./perf-EhJ2Tx5b.js"),[],import.meta.url);const P0=n=>{const e=n.clone().multiplyScalar(ge+ln(n)).applyQuaternion(Ve.quaternion).project(qe);return{x:(e.x+1)/2*innerWidth,y:(1-e.y)/2*innerHeight}};window.__game={get state(){return{state:m.state,mode:m.mode,level:m.level?.id,tier:m.tier,wave:m.wave,score:m.score,hp:M.hp,heroState:M.state,air:+M.air.toFixed(2),stamina:+m.stamina.toFixed(2),ult:+m.ult.toFixed(1),combo:m.combo,enemies:m.enemies.filter(n=>!n.dead).map(n=>n.type+(n.rolling?":roll":n.warn?":warn":n.stun>0?":stun":"")),warnings:m.warnings.map(n=>n.attack+":"+n.t.toFixed(2)+"/"+n.dur.toFixed(2)),tut:m.tut?.step??null,joy:De.st,quality:rn}},G:m,hero:M,seal:tt,save:fe,allLevels:aw,shop:{PACKS:Zr,draw:i0,pick:r0},newGame:fE,newTutorial:zd,startLevel:vr,startEndless:Hl,freeze(n){T0=n},headless(n){A0=n},step(n=1){for(let e=0;e<n;e++)C0(1/60)},spawn:(n,e,t)=>zi(n,e,t),hit:_r,attack:(n,e)=>bd(n,e),startWave:eo,heal(){M.hp=He.maxHp,M.invuln=0},props:{list:()=>m.props,place:km,spawn:Om},toScreen:P0,GAIN:bi,zoneHas:jr,renderer:Ti,scene:Un,camera:qe,act:{startParry:Wa,doTap:Dl,doJump:Td,ultBegin:Ol,ultDown:o0,ultMove:kl,ultUp:Ud,ultPath:Nw,updateUltPointer:c0}};"serviceWorker"in navigator&&addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));export{Qt as C,gn as E,He as H,Ct as U,rn as q,Ti as r,Ln as s};
