(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Zh="modulepreload",Jh=function(n,e){return new URL(n,e).href},Su={},ef=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){let c=function(u){return Promise.all(u.map(d=>Promise.resolve(d).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");r=c(t.map(u=>{if(u=Jh(u,i),u in Su)return;Su[u]=!0;const d=u.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(i)for(let g=a.length-1;g>=0;g--){const x=a[g];if(x.href===u&&(!d||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${f}`))return;const p=document.createElement("link");if(p.rel=d?"stylesheet":Zh,d||(p.as="script"),p.crossOrigin="",p.href=u,l&&p.setAttribute("nonce",l),document.head.appendChild(p),d)return new Promise((g,x)=>{p.addEventListener("load",g),p.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})};const hc="180",Qh=0,bu=1,ep=2,pc=1,tp=2,ci=3,Di=0,cn=1,$t=2,Ci=0,$r=1,Ya=2,Eu=3,Tu=4,np=5,Zi=100,ip=101,rp=102,sp=103,ap=104,op=200,lp=201,cp=202,up=203,ll=204,cl=205,dp=206,fp=207,hp=208,pp=209,mp=210,gp=211,_p=212,vp=213,xp=214,ul=0,dl=1,fl=2,Jr=3,hl=4,pl=5,ml=6,gl=7,tf=0,Mp=1,yp=2,Pi=0,Sp=1,bp=2,Ep=3,Tp=4,wp=5,Ap=6,Rp=7,nf=300,Qr=301,es=302,_l=303,vl=304,io=306,xl=1e3,nr=1001,Ml=1002,Sn=1003,Cp=1004,ta=1005,jn=1006,yo=1007,ir=1008,Qn=1009,rf=1010,sf=1011,Ns=1012,mc=1013,lr=1014,Kn=1015,qs=1016,gc=1017,_c=1018,Fs=1020,af=35902,of=35899,lf=1021,cf=1022,Vn=1023,Os=1026,Bs=1027,vc=1028,xc=1029,uf=1030,Mc=1031,yc=1033,Oa=33776,Ba=33777,za=33778,ka=33779,yl=35840,Sl=35841,bl=35842,El=35843,Tl=36196,wl=37492,Al=37496,Rl=37808,Cl=37809,Pl=37810,Ll=37811,Dl=37812,Il=37813,Ul=37814,Nl=37815,Fl=37816,Ol=37817,Bl=37818,zl=37819,kl=37820,Gl=37821,Hl=36492,Vl=36494,Wl=36495,Xl=36283,ql=36284,Yl=36285,$l=36286,Pp=3200,Lp=3201,df=0,Dp=1,wi="",Pn="srgb",ts="srgb-linear",$a="linear",dt="srgb",Sr=7680,wu=519,Ip=512,Up=513,Np=514,ff=515,Fp=516,Op=517,Bp=518,zp=519,jl=35044,Au="300 es",Zn=2e3,ja=2001;class as{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ru=1234567;const Ps=Math.PI/180,zs=180/Math.PI;function fi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function Ze(n,e,t){return Math.max(e,Math.min(t,n))}function Sc(n,e){return(n%e+e)%e}function kp(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Gp(n,e,t){return n!==e?(t-n)/(e-n):0}function Ls(n,e,t){return(1-t)*n+t*e}function Hp(n,e,t,i){return Ls(n,e,1-Math.exp(-t*i))}function Vp(n,e=1){return e-Math.abs(Sc(n,e*2)-e)}function Wp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Xp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function qp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Yp(n,e){return n+Math.random()*(e-n)}function $p(n){return n*(.5-Math.random())}function jp(n){n!==void 0&&(Ru=n);let e=Ru+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Kp(n){return n*Ps}function Zp(n){return n*zs}function Jp(n){return(n&n-1)===0&&n!==0}function Qp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function em(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function tm(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),d=s((e-i)/2),f=a((e-i)/2),p=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*d,l*f,o*c);break;case"YZY":n.set(l*f,o*u,l*d,o*c);break;case"ZXZ":n.set(l*d,l*f,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*p,o*c);break;case"YXY":n.set(l*p,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Gn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function lt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const nm={DEG2RAD:Ps,RAD2DEG:zs,generateUUID:fi,clamp:Ze,euclideanModulo:Sc,mapLinear:kp,inverseLerp:Gp,lerp:Ls,damp:Hp,pingpong:Vp,smoothstep:Wp,smootherstep:Xp,randInt:qp,randFloat:Yp,randFloatSpread:$p,seededRandom:jp,degToRad:Kp,radToDeg:Zp,isPowerOfTwo:Jp,ceilPowerOfTwo:Qp,floorPowerOfTwo:em,setQuaternionFromProperEuler:tm,normalize:lt,denormalize:Gn};class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class hr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[a+0],p=s[a+1],g=s[a+2],x=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(d!==x||l!==f||c!==p||u!==g){let m=1-o;const h=l*f+c*p+u*g+d*x,T=h>=0?1:-1,b=1-h*h;if(b>Number.EPSILON){const C=Math.sqrt(b),A=Math.atan2(C,h*T);m=Math.sin(m*A)/C,o=Math.sin(o*A)/C}const M=o*T;if(l=l*m+f*M,c=c*m+p*M,u=u*m+g*M,d=d*m+x*M,m===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],f=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*d+l*p-c*f,e[t+1]=l*g+u*f+c*d-o*p,e[t+2]=c*g+u*p+o*f-l*d,e[t+3]=u*g-o*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"YXZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"ZXY":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"ZYX":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"YZX":this._x=f*u*d+c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d-f*p*g;break;case"XZY":this._x=f*u*d-c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+o+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+l*c+a*d-o*u,this.y=i+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return So.copy(this).projectOnVector(e),this.sub(So)}reflect(e){return this.sub(So.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const So=new N,Cu=new hr;class Ve{constructor(e,t,i,r,s,a,o,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],g=i[8],x=r[0],m=r[3],h=r[6],T=r[1],b=r[4],M=r[7],C=r[2],A=r[5],L=r[8];return s[0]=a*x+o*T+l*C,s[3]=a*m+o*b+l*A,s[6]=a*h+o*M+l*L,s[1]=c*x+u*T+d*C,s[4]=c*m+u*b+d*A,s[7]=c*h+u*M+d*L,s[2]=f*x+p*T+g*C,s[5]=f*m+p*b+g*A,s[8]=f*h+p*M+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*s,p=c*s-a*l,g=t*d+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(r*c-u*i)*x,e[2]=(o*i-r*a)*x,e[3]=f*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-o*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(bo.makeScale(e,t)),this}rotate(e){return this.premultiply(bo.makeRotation(-e)),this}translate(e,t){return this.premultiply(bo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bo=new Ve;function hf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ka(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function im(){const n=Ka("canvas");return n.style.display="block",n}const Pu={};function ks(n){n in Pu||(Pu[n]=!0,console.warn(n))}function rm(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Lu=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Du=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sm(){const n={enabled:!0,workingColorSpace:ts,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===dt&&(r.r=hi(r.r),r.g=hi(r.g),r.b=hi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(r.r=jr(r.r),r.g=jr(r.g),r.b=jr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===wi?$a:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ks("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ks("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ts]:{primaries:e,whitePoint:i,transfer:$a,toXYZ:Lu,fromXYZ:Du,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pn},outputColorSpaceConfig:{drawingBufferColorSpace:Pn}},[Pn]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:Lu,fromXYZ:Du,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pn}}}),n}const it=sm();function hi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function jr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let br;class am{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{br===void 0&&(br=Ka("canvas")),br.width=e.width,br.height=e.height;const r=br.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=br}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ka("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=hi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(hi(t[i]/255)*255):t[i]=hi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let om=0;class bc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=fi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Eo(r[a].image)):s.push(Eo(r[a]))}else s=Eo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Eo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?am.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lm=0;const To=new N;class tn extends as{constructor(e=tn.DEFAULT_IMAGE,t=tn.DEFAULT_MAPPING,i=nr,r=nr,s=jn,a=ir,o=Vn,l=Qn,c=tn.DEFAULT_ANISOTROPY,u=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=fi(),this.name="",this.source=new bc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(To).x}get height(){return this.source.getSize(To).y}get depth(){return this.source.getSize(To).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xl:e.x=e.x-Math.floor(e.x);break;case nr:e.x=e.x<0?0:1;break;case Ml:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xl:e.y=e.y-Math.floor(e.y);break;case nr:e.y=e.y<0?0:1;break;case Ml:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=nf;tn.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,t=0,i=0,r=1){Rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],g=l[9],x=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,M=(p+1)/2,C=(h+1)/2,A=(u+f)/4,L=(d+x)/4,D=(g+m)/4;return b>M&&b>C?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=A/i,s=L/i):M>C?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=A/r,s=D/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=L/s,r=D/s),this.set(i,r,s,t),this}let T=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(d-x)/T,this.z=(f-u)/T,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cm extends as{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new tn(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:jn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new bc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cr extends cm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class pf extends tn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class um extends tn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pr{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Fn):Fn.fromBufferAttribute(s,a),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),na.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),na.copy(i.boundingBox)),na.applyMatrix4(e.matrixWorld),this.union(na)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ps),ia.subVectors(this.max,ps),Er.subVectors(e.a,ps),Tr.subVectors(e.b,ps),wr.subVectors(e.c,ps),xi.subVectors(Tr,Er),Mi.subVectors(wr,Tr),Hi.subVectors(Er,wr);let t=[0,-xi.z,xi.y,0,-Mi.z,Mi.y,0,-Hi.z,Hi.y,xi.z,0,-xi.x,Mi.z,0,-Mi.x,Hi.z,0,-Hi.x,-xi.y,xi.x,0,-Mi.y,Mi.x,0,-Hi.y,Hi.x,0];return!wo(t,Er,Tr,wr,ia)||(t=[1,0,0,0,1,0,0,0,1],!wo(t,Er,Tr,wr,ia))?!1:(ra.crossVectors(xi,Mi),t=[ra.x,ra.y,ra.z],wo(t,Er,Tr,wr,ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ri=[new N,new N,new N,new N,new N,new N,new N,new N],Fn=new N,na=new pr,Er=new N,Tr=new N,wr=new N,xi=new N,Mi=new N,Hi=new N,ps=new N,ia=new N,ra=new N,Vi=new N;function wo(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Vi.fromArray(n,s);const o=r.x*Math.abs(Vi.x)+r.y*Math.abs(Vi.y)+r.z*Math.abs(Vi.z),l=e.dot(Vi),c=t.dot(Vi),u=i.dot(Vi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const dm=new pr,ms=new N,Ao=new N;class mr{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):dm.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ms.subVectors(e,this.center);const t=ms.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ms,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ao.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ms.copy(e.center).add(Ao)),this.expandByPoint(ms.copy(e.center).sub(Ao))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const si=new N,Ro=new N,sa=new N,yi=new N,Co=new N,aa=new N,Po=new N;class Ec{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,t),si.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ro.copy(e).add(t).multiplyScalar(.5),sa.copy(t).sub(e).normalize(),yi.copy(this.origin).sub(Ro);const s=e.distanceTo(t)*.5,a=-this.direction.dot(sa),o=yi.dot(this.direction),l=-yi.dot(sa),c=yi.lengthSq(),u=Math.abs(1-a*a);let d,f,p,g;if(u>0)if(d=a*l-o,f=a*o-l,g=s*u,d>=0)if(f>=-g)if(f<=g){const x=1/u;d*=x,f*=x,p=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Ro).addScaledVector(sa,f),p}intersectSphere(e,t){si.subVectors(e.center,this.origin);const i=si.dot(this.direction),r=si.dot(si)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,i,r,s){Co.subVectors(t,e),aa.subVectors(i,e),Po.crossVectors(Co,aa);let a=this.direction.dot(Po),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;yi.subVectors(this.origin,e);const l=o*this.direction.dot(aa.crossVectors(yi,aa));if(l<0)return null;const c=o*this.direction.dot(Co.cross(yi));if(c<0||l+c>a)return null;const u=-o*yi.dot(Po);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,i,r,s,a,o,l,c,u,d,f,p,g,x,m){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,d,f,p,g,x,m)}set(e,t,i,r,s,a,o,l,c,u,d,f,p,g,x,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=g,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ar.setFromMatrixColumn(e,0).length(),s=1/Ar.setFromMatrixColumn(e,1).length(),a=1/Ar.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*u,p=a*d,g=o*u,x=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=f-x*c,t[9]=-o*l,t[2]=x-f*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,g=c*u,x=c*d;t[0]=f+x*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=x+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,g=c*u,x=c*d;t[0]=f-x*o,t[4]=-a*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=x-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,p=a*d,g=o*u,x=o*d;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+x,t[1]=l*d,t[5]=x*c+f,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,g=o*l,x=o*c;t[0]=l*u,t[4]=x-f*d,t[8]=g*d+p,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*d+g,t[10]=f-x*d}else if(e.order==="XZY"){const f=a*l,p=a*c,g=o*l,x=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+x,t[5]=a*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*u,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fm,e,hm)}lookAt(e,t,i){const r=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Si.crossVectors(i,xn),Si.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Si.crossVectors(i,xn)),Si.normalize(),oa.crossVectors(xn,Si),r[0]=Si.x,r[4]=oa.x,r[8]=xn.x,r[1]=Si.y,r[5]=oa.y,r[9]=xn.y,r[2]=Si.z,r[6]=oa.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],g=i[2],x=i[6],m=i[10],h=i[14],T=i[3],b=i[7],M=i[11],C=i[15],A=r[0],L=r[4],D=r[8],E=r[12],S=r[1],I=r[5],B=r[9],H=r[13],X=r[2],$=r[6],q=r[10],re=r[14],V=r[3],ce=r[7],pe=r[11],Ae=r[15];return s[0]=a*A+o*S+l*X+c*V,s[4]=a*L+o*I+l*$+c*ce,s[8]=a*D+o*B+l*q+c*pe,s[12]=a*E+o*H+l*re+c*Ae,s[1]=u*A+d*S+f*X+p*V,s[5]=u*L+d*I+f*$+p*ce,s[9]=u*D+d*B+f*q+p*pe,s[13]=u*E+d*H+f*re+p*Ae,s[2]=g*A+x*S+m*X+h*V,s[6]=g*L+x*I+m*$+h*ce,s[10]=g*D+x*B+m*q+h*pe,s[14]=g*E+x*H+m*re+h*Ae,s[3]=T*A+b*S+M*X+C*V,s[7]=T*L+b*I+M*$+C*ce,s[11]=T*D+b*B+M*q+C*pe,s[15]=T*E+b*H+M*re+C*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],g=e[3],x=e[7],m=e[11],h=e[15];return g*(+s*l*d-r*c*d-s*o*f+i*c*f+r*o*p-i*l*p)+x*(+t*l*p-t*c*f+s*a*f-r*a*p+r*c*u-s*l*u)+m*(+t*c*d-t*o*p-s*a*d+i*a*p+s*o*u-i*c*u)+h*(-r*o*u-t*l*d+t*o*f+r*a*d-i*a*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],g=e[12],x=e[13],m=e[14],h=e[15],T=d*m*c-x*f*c+x*l*p-o*m*p-d*l*h+o*f*h,b=g*f*c-u*m*c-g*l*p+a*m*p+u*l*h-a*f*h,M=u*x*c-g*d*c+g*o*p-a*x*p-u*o*h+a*d*h,C=g*d*l-u*x*l-g*o*f+a*x*f+u*o*m-a*d*m,A=t*T+i*b+r*M+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/A;return e[0]=T*L,e[1]=(x*f*s-d*m*s-x*r*p+i*m*p+d*r*h-i*f*h)*L,e[2]=(o*m*s-x*l*s+x*r*c-i*m*c-o*r*h+i*l*h)*L,e[3]=(d*l*s-o*f*s-d*r*c+i*f*c+o*r*p-i*l*p)*L,e[4]=b*L,e[5]=(u*m*s-g*f*s+g*r*p-t*m*p-u*r*h+t*f*h)*L,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*h-t*l*h)*L,e[7]=(a*f*s-u*l*s+u*r*c-t*f*c-a*r*p+t*l*p)*L,e[8]=M*L,e[9]=(g*d*s-u*x*s-g*i*p+t*x*p+u*i*h-t*d*h)*L,e[10]=(a*x*s-g*o*s+g*i*c-t*x*c-a*i*h+t*o*h)*L,e[11]=(u*o*s-a*d*s-u*i*c+t*d*c+a*i*p-t*o*p)*L,e[12]=C*L,e[13]=(u*x*r-g*d*r+g*i*f-t*x*f-u*i*m+t*d*m)*L,e[14]=(g*o*r-a*x*r-g*i*l+t*x*l+a*i*m-t*o*m)*L,e[15]=(a*d*r-u*o*r+u*i*l-t*d*l-a*i*f+t*o*f)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,f=s*c,p=s*u,g=s*d,x=a*u,m=a*d,h=o*d,T=l*c,b=l*u,M=l*d,C=i.x,A=i.y,L=i.z;return r[0]=(1-(x+h))*C,r[1]=(p+M)*C,r[2]=(g-b)*C,r[3]=0,r[4]=(p-M)*A,r[5]=(1-(f+h))*A,r[6]=(m+T)*A,r[7]=0,r[8]=(g+b)*L,r[9]=(m-T)*L,r[10]=(1-(f+x))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ar.set(r[0],r[1],r[2]).length();const a=Ar.set(r[4],r[5],r[6]).length(),o=Ar.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],On.copy(this);const c=1/s,u=1/a,d=1/o;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=u,On.elements[5]*=u,On.elements[6]*=u,On.elements[8]*=d,On.elements[9]*=d,On.elements[10]*=d,t.setFromRotationMatrix(On),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Zn,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),p=(i+r)/(i-r);let g,x;if(l)g=s/(a-s),x=a*s/(a-s);else if(o===Zn)g=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===ja)g=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Zn,l=!1){const c=this.elements,u=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),p=-(i+r)/(i-r);let g,x;if(l)g=1/(a-s),x=a/(a-s);else if(o===Zn)g=-2/(a-s),x=-(a+s)/(a-s);else if(o===ja)g=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ar=new N,On=new rt,fm=new N(0,0,0),hm=new N(1,1,1),Si=new N,oa=new N,xn=new N,Iu=new rt,Uu=new hr;class ei{constructor(e=0,t=0,i=0,r=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Iu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Iu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Uu.setFromEuler(this),this.setFromQuaternion(Uu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class Tc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pm=0;const Nu=new N,Rr=new hr,ai=new rt,la=new N,gs=new N,mm=new N,gm=new hr,Fu=new N(1,0,0),Ou=new N(0,1,0),Bu=new N(0,0,1),zu={type:"added"},_m={type:"removed"},Cr={type:"childadded",child:null},Lo={type:"childremoved",child:null};class Ft extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new N,t=new ei,i=new hr,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rt},normalMatrix:{value:new Ve}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.premultiply(Rr),this}rotateX(e){return this.rotateOnAxis(Fu,e)}rotateY(e){return this.rotateOnAxis(Ou,e)}rotateZ(e){return this.rotateOnAxis(Bu,e)}translateOnAxis(e,t){return Nu.copy(e).applyQuaternion(this.quaternion),this.position.add(Nu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fu,e)}translateY(e){return this.translateOnAxis(Ou,e)}translateZ(e){return this.translateOnAxis(Bu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?la.copy(e):la.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(gs,la,this.up):ai.lookAt(la,gs,this.up),this.quaternion.setFromRotationMatrix(ai),r&&(ai.extractRotation(r.matrixWorld),Rr.setFromRotationMatrix(ai),this.quaternion.premultiply(Rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zu),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_m),Lo.child=e,this.dispatchEvent(Lo),Lo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zu),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,e,mm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,gm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ft.DEFAULT_UP=new N(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new N,oi=new N,Do=new N,li=new N,Pr=new N,Lr=new N,ku=new N,Io=new N,Uo=new N,No=new N,Fo=new Rt,Oo=new Rt,Bo=new Rt;class In{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Bn.subVectors(e,t),r.cross(Bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Bn.subVectors(r,t),oi.subVectors(i,t),Do.subVectors(e,t);const a=Bn.dot(Bn),o=Bn.dot(oi),l=Bn.dot(Do),c=oi.dot(oi),u=oi.dot(Do),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,li.x),l.addScaledVector(a,li.y),l.addScaledVector(o,li.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Fo.setScalar(0),Oo.setScalar(0),Bo.setScalar(0),Fo.fromBufferAttribute(e,t),Oo.fromBufferAttribute(e,i),Bo.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Fo,s.x),a.addScaledVector(Oo,s.y),a.addScaledVector(Bo,s.z),a}static isFrontFacing(e,t,i,r){return Bn.subVectors(i,t),oi.subVectors(e,t),Bn.cross(oi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Bn.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return In.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return In.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Pr.subVectors(r,i),Lr.subVectors(s,i),Io.subVectors(e,i);const l=Pr.dot(Io),c=Lr.dot(Io);if(l<=0&&c<=0)return t.copy(i);Uo.subVectors(e,r);const u=Pr.dot(Uo),d=Lr.dot(Uo);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Pr,a);No.subVectors(e,s);const p=Pr.dot(No),g=Lr.dot(No);if(g>=0&&p<=g)return t.copy(s);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Lr,o);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return ku.subVectors(s,r),o=(d-u)/(d-u+(p-g)),t.copy(r).addScaledVector(ku,o);const h=1/(m+x+f);return a=x*h,o=f*h,t.copy(i).addScaledVector(Pr,a).addScaledVector(Lr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},ca={h:0,s:0,l:0};function zo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Le{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=it.workingColorSpace){if(e=Sc(e,1),t=Ze(t,0,1),i=Ze(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=zo(a,s,e+1/3),this.g=zo(a,s,e),this.b=zo(a,s,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,t=Pn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pn){const i=mf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=jr(e.r),this.g=jr(e.g),this.b=jr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pn){return it.workingToColorSpace(Qt.copy(this),e),Math.round(Ze(Qt.r*255,0,255))*65536+Math.round(Ze(Qt.g*255,0,255))*256+Math.round(Ze(Qt.b*255,0,255))}getHexString(e=Pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Qt.copy(this),t);const i=Qt.r,r=Qt.g,s=Qt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=Pn){it.workingToColorSpace(Qt.copy(this),e);const t=Qt.r,i=Qt.g,r=Qt.b;return e!==Pn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+t,bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(bi),e.getHSL(ca);const i=Ls(bi.h,ca.h,t),r=Ls(bi.s,ca.s,t),s=Ls(bi.l,ca.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new Le;Le.NAMES=mf;let vm=0;class gr extends as{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=$r,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ll,this.blendDst=cl,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$r&&(i.blending=this.blending),this.side!==Di&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ll&&(i.blendSrc=this.blendSrc),this.blendDst!==cl&&(i.blendDst=this.blendDst),this.blendEquation!==Zi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Jr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Sr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Sr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Sr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Dt extends gr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=tf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ut=new N,ua=new Ie;let xm=0;class pn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=jl,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ua.fromBufferAttribute(this,t),ua.applyMatrix3(e),this.setXY(t,ua.x,ua.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Gn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=lt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),r=lt(r,this.array),s=lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jl&&(e.usage=this.usage),e}}class gf extends pn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class _f extends pn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Je extends pn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Mm=0;const Rn=new rt,ko=new Ft,Dr=new N,Mn=new pr,_s=new pr,Ht=new N;class It extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hf(e)?_f:gf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,i){return Rn.makeTranslation(e,t,i),this.applyMatrix4(Rn),this}scale(e,t,i){return Rn.makeScale(e,t,i),this.applyMatrix4(Rn),this}lookAt(e){return ko.lookAt(e),ko.updateMatrix(),this.applyMatrix4(ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Je(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];_s.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(Mn.min,_s.min),Mn.expandByPoint(Ht),Ht.addVectors(Mn.max,_s.max),Mn.expandByPoint(Ht)):(Mn.expandByPoint(_s.min),Mn.expandByPoint(_s.max))}Mn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ht));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ht.fromBufferAttribute(o,c),l&&(Dr.fromBufferAttribute(e,c),Ht.add(Dr)),r=Math.max(r,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new N,l[D]=new N;const c=new N,u=new N,d=new N,f=new Ie,p=new Ie,g=new Ie,x=new N,m=new N;function h(D,E,S){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,S),f.fromBufferAttribute(s,D),p.fromBufferAttribute(s,E),g.fromBufferAttribute(s,S),u.sub(c),d.sub(c),p.sub(f),g.sub(f);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(I),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(I),o[D].add(x),o[E].add(x),o[S].add(x),l[D].add(m),l[E].add(m),l[S].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let D=0,E=T.length;D<E;++D){const S=T[D],I=S.start,B=S.count;for(let H=I,X=I+B;H<X;H+=3)h(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const b=new N,M=new N,C=new N,A=new N;function L(D){C.fromBufferAttribute(r,D),A.copy(C);const E=o[D];b.copy(E),b.sub(C.multiplyScalar(C.dot(E))).normalize(),M.crossVectors(A,E);const I=M.dot(l[D])<0?-1:1;a.setXYZW(D,b.x,b.y,b.z,I)}for(let D=0,E=T.length;D<E;++D){const S=T[D],I=S.start,B=S.count;for(let H=I,X=I+B;H<X;H+=3)L(e.getX(H+0)),L(e.getX(H+1)),L(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new N,s=new N,a=new N,o=new N,l=new N,c=new N,u=new N,d=new N;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*u;for(let h=0;h<u;h++)f[g++]=c[p++]}return new pn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new It,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gu=new rt,Wi=new Ec,da=new mr,Hu=new N,fa=new N,ha=new N,pa=new N,Go=new N,ma=new N,Vu=new N,ga=new N;class oe extends Ft{constructor(e=new It,t=new Dt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ma.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(Go.fromBufferAttribute(d,e),a?ma.addScaledVector(Go,u):ma.addScaledVector(Go.sub(t),u))}t.add(ma)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),da.copy(i.boundingSphere),da.applyMatrix4(s),Wi.copy(e.ray).recast(e.near),!(da.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(da,Hu)===null||Wi.origin.distanceToSquared(Hu)>(e.far-e.near)**2))&&(Gu.copy(s).invert(),Wi.copy(e.ray).applyMatrix4(Gu),!(i.boundingBox!==null&&Wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Wi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const m=f[g],h=a[m.materialIndex],T=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=T,C=b;M<C;M+=3){const A=o.getX(M),L=o.getX(M+1),D=o.getX(M+2);r=_a(this,h,e,i,c,u,d,A,L,D),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,h=x;m<h;m+=3){const T=o.getX(m),b=o.getX(m+1),M=o.getX(m+2);r=_a(this,a,e,i,c,u,d,T,b,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const m=f[g],h=a[m.materialIndex],T=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=T,C=b;M<C;M+=3){const A=M,L=M+1,D=M+2;r=_a(this,h,e,i,c,u,d,A,L,D),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,h=x;m<h;m+=3){const T=m,b=m+1,M=m+2;r=_a(this,a,e,i,c,u,d,T,b,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function ym(n,e,t,i,r,s,a,o){let l;if(e.side===cn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Di,o),l===null)return null;ga.copy(o),ga.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ga);return c<t.near||c>t.far?null:{distance:c,point:ga.clone(),object:n}}function _a(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,fa),n.getVertexPosition(l,ha),n.getVertexPosition(c,pa);const u=ym(n,e,t,i,fa,ha,pa,Vu);if(u){const d=new N;In.getBarycoord(Vu,fa,ha,pa,d),r&&(u.uv=In.getInterpolatedAttribute(r,o,l,c,d,new Ie)),s&&(u.uv1=In.getInterpolatedAttribute(s,o,l,c,d,new Ie)),a&&(u.normal=In.getInterpolatedAttribute(a,o,l,c,d,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new N,materialIndex:0};In.getNormal(fa,ha,pa,f.normal),u.face=f,u.barycoord=d}return u}class Ii extends It{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(u,3)),this.setAttribute("uv",new Je(d,2));function g(x,m,h,T,b,M,C,A,L,D,E){const S=M/L,I=C/D,B=M/2,H=C/2,X=A/2,$=L+1,q=D+1;let re=0,V=0;const ce=new N;for(let pe=0;pe<q;pe++){const Ae=pe*I-H;for(let Ke=0;Ke<$;Ke++){const pt=Ke*S-B;ce[x]=pt*T,ce[m]=Ae*b,ce[h]=X,c.push(ce.x,ce.y,ce.z),ce[x]=0,ce[m]=0,ce[h]=A>0?1:-1,u.push(ce.x,ce.y,ce.z),d.push(Ke/L),d.push(1-pe/D),re+=1}}for(let pe=0;pe<D;pe++)for(let Ae=0;Ae<L;Ae++){const Ke=f+Ae+$*pe,pt=f+Ae+$*(pe+1),vt=f+(Ae+1)+$*(pe+1),st=f+(Ae+1)+$*pe;l.push(Ke,pt,st),l.push(pt,vt,st),V+=6}o.addGroup(p,V,E),p+=V,f+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ii(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ns(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function ln(n){const e={};for(let t=0;t<n.length;t++){const i=ns(n[t]);for(const r in i)e[r]=i[r]}return e}function Sm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function vf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const bm={clone:ns,merge:ln};var Em=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mi extends gr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Em,this.fragmentShader=Tm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ns(e.uniforms),this.uniformsGroups=Sm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class xf extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=Zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new N,Wu=new Ie,Xu=new Ie;class Ln extends xf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zs*2*Math.atan(Math.tan(Ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z)}getViewSize(e,t){return this.getViewBounds(e,Wu,Xu),t.subVectors(Xu,Wu)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ps*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ir=-90,Ur=1;class wm extends Ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ln(Ir,Ur,e,t);r.layers=this.layers,this.add(r);const s=new Ln(Ir,Ur,e,t);s.layers=this.layers,this.add(s);const a=new Ln(Ir,Ur,e,t);a.layers=this.layers,this.add(a);const o=new Ln(Ir,Ur,e,t);o.layers=this.layers,this.add(o);const l=new Ln(Ir,Ur,e,t);l.layers=this.layers,this.add(l);const c=new Ln(Ir,Ur,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Zn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ja)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Mf extends tn{constructor(e=[],t=Qr,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Am extends cr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Mf(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ii(5,5,5),s=new mi({name:"CubemapFromEquirect",uniforms:ns(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:Ci});s.uniforms.tEquirect.value=t;const a=new oe(r,s),o=t.minFilter;return t.minFilter===ir&&(t.minFilter=jn),new wm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class ct extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rm={type:"move"};class Ho{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),h=this._getHandJoint(c,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rm)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ct;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class wc{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Le(e),this.near=t,this.far=i}clone(){return new wc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Cm extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Pm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=jl,this.updateRanges=[],this.version=0,this.uuid=fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const on=new N;class Za{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Gn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=lt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Gn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),r=lt(r,this.array),s=lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new pn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Za(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class yf extends gr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Nr;const vs=new N,Fr=new N,Or=new N,Br=new Ie,xs=new Ie,Sf=new rt,va=new N,Ms=new N,xa=new N,qu=new Ie,Vo=new Ie,Yu=new Ie;class Lm extends Ft{constructor(e=new yf){if(super(),this.isSprite=!0,this.type="Sprite",Nr===void 0){Nr=new It;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Pm(t,5);Nr.setIndex([0,1,2,0,2,3]),Nr.setAttribute("position",new Za(i,3,0,!1)),Nr.setAttribute("uv",new Za(i,2,3,!1))}this.geometry=Nr,this.material=e,this.center=new Ie(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fr.setFromMatrixScale(this.matrixWorld),Sf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Or.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fr.multiplyScalar(-Or.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;Ma(va.set(-.5,-.5,0),Or,a,Fr,r,s),Ma(Ms.set(.5,-.5,0),Or,a,Fr,r,s),Ma(xa.set(.5,.5,0),Or,a,Fr,r,s),qu.set(0,0),Vo.set(1,0),Yu.set(1,1);let o=e.ray.intersectTriangle(va,Ms,xa,!1,vs);if(o===null&&(Ma(Ms.set(-.5,.5,0),Or,a,Fr,r,s),Vo.set(0,1),o=e.ray.intersectTriangle(va,xa,Ms,!1,vs),o===null))return;const l=e.ray.origin.distanceTo(vs);l<e.near||l>e.far||t.push({distance:l,point:vs.clone(),uv:In.getInterpolation(vs,va,Ms,xa,qu,Vo,Yu,new Ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ma(n,e,t,i,r,s){Br.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(xs.x=s*Br.x-r*Br.y,xs.y=r*Br.x+s*Br.y):xs.copy(Br),n.copy(e),n.x+=xs.x,n.y+=xs.y,n.applyMatrix4(Sf)}class Dm extends tn{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Sn,u=Sn,d,f){super(null,a,o,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $u extends pn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const zr=new rt,ju=new rt,ya=[],Ku=new pr,Im=new rt,ys=new oe,Ss=new mr;class Ac extends oe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $u(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Im)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,zr),Ku.copy(e.boundingBox).applyMatrix4(zr),this.boundingBox.union(Ku)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,zr),Ss.copy(e.boundingSphere).applyMatrix4(zr),this.boundingSphere.union(Ss)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(ys.geometry=this.geometry,ys.material=this.material,ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ss.copy(this.boundingSphere),Ss.applyMatrix4(i),e.ray.intersectsSphere(Ss)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,zr),ju.multiplyMatrices(i,zr),ys.matrixWorld=ju,ys.raycast(e,ya);for(let a=0,o=ya.length;a<o;a++){const l=ya[a];l.instanceId=s,l.object=this,t.push(l)}ya.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new $u(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Dm(new Float32Array(r*this.count),r,this.count,vc,Kn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Wo=new N,Um=new N,Nm=new Ve;class ji{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Wo.subVectors(i,t).cross(Um.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Wo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Nm.getNormalMatrix(e),r=this.coplanarPoint(Wo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xi=new mr,Fm=new Ie(.5,.5),Sa=new N;class Rc{constructor(e=new ji,t=new ji,i=new ji,r=new ji,s=new ji,a=new ji){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Zn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],p=s[7],g=s[8],x=s[9],m=s[10],h=s[11],T=s[12],b=s[13],M=s[14],C=s[15];if(r[0].setComponents(c-a,p-u,h-g,C-T).normalize(),r[1].setComponents(c+a,p+u,h+g,C+T).normalize(),r[2].setComponents(c+o,p+d,h+x,C+b).normalize(),r[3].setComponents(c-o,p-d,h-x,C-b).normalize(),i)r[4].setComponents(l,f,m,M).normalize(),r[5].setComponents(c-l,p-f,h-m,C-M).normalize();else if(r[4].setComponents(c-l,p-f,h-m,C-M).normalize(),t===Zn)r[5].setComponents(c+l,p+f,h+m,C+M).normalize();else if(t===ja)r[5].setComponents(l,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(e){Xi.center.set(0,0,0);const t=Fm.distanceTo(e.center);return Xi.radius=.7071067811865476+t,Xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Sa.x=r.normal.x>0?e.max.x:e.min.x,Sa.y=r.normal.y>0?e.max.y:e.min.y,Sa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Sa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bf extends gr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Zu=new rt,Kl=new Ec,ba=new mr,Ea=new N;class Om extends Ft{constructor(e=new It,t=new bf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ba.copy(i.boundingSphere),ba.applyMatrix4(r),ba.radius+=s,e.ray.intersectsSphere(ba)===!1)return;Zu.copy(r).invert(),Kl.copy(e.ray).applyMatrix4(Zu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,x=p;g<x;g++){const m=c.getX(g);Ea.fromBufferAttribute(d,m),Ju(Ea,m,l,r,e,t,this)}}else{const f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let g=f,x=p;g<x;g++)Ea.fromBufferAttribute(d,g),Ju(Ea,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ju(n,e,t,i,r,s,a){const o=Kl.distanceSqToPoint(n);if(o<t){const l=new N;Kl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Bm extends tn{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ef extends tn{constructor(e,t,i=lr,r,s,a,o=Sn,l=Sn,c,u=Os,d=1){if(u!==Os&&u!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Tf extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Cc extends It{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new N,u=new Ie;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){const p=i+d/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Je(a,3)),this.setAttribute("normal",new Je(o,3)),this.setAttribute("uv",new Je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Hn extends It{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],f=[],p=[];let g=0;const x=[],m=i/2;let h=0;T(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Je(d,3)),this.setAttribute("normal",new Je(f,3)),this.setAttribute("uv",new Je(p,2));function T(){const M=new N,C=new N;let A=0;const L=(t-e)/i;for(let D=0;D<=s;D++){const E=[],S=D/s,I=S*(t-e)+e;for(let B=0;B<=r;B++){const H=B/r,X=H*l+o,$=Math.sin(X),q=Math.cos(X);C.x=I*$,C.y=-S*i+m,C.z=I*q,d.push(C.x,C.y,C.z),M.set($,L,q).normalize(),f.push(M.x,M.y,M.z),p.push(H,1-S),E.push(g++)}x.push(E)}for(let D=0;D<r;D++)for(let E=0;E<s;E++){const S=x[E][D],I=x[E+1][D],B=x[E+1][D+1],H=x[E][D+1];(e>0||E!==0)&&(u.push(S,I,H),A+=3),(t>0||E!==s-1)&&(u.push(I,B,H),A+=3)}c.addGroup(h,A,0),h+=A}function b(M){const C=g,A=new Ie,L=new N;let D=0;const E=M===!0?e:t,S=M===!0?1:-1;for(let B=1;B<=r;B++)d.push(0,m*S,0),f.push(0,S,0),p.push(.5,.5),g++;const I=g;for(let B=0;B<=r;B++){const X=B/r*l+o,$=Math.cos(X),q=Math.sin(X);L.x=E*q,L.y=m*S,L.z=E*$,d.push(L.x,L.y,L.z),f.push(0,S,0),A.x=$*.5+.5,A.y=q*.5*S+.5,p.push(A.x,A.y),g++}for(let B=0;B<r;B++){const H=C+B,X=I+B;M===!0?u.push(X,X+1,H):u.push(X+1,X,H),D+=3}c.addGroup(h,D,M===!0?1:2),h+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class jt extends Hn{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new jt(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class os extends It{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];o(r),c(i),u(),this.setAttribute("position",new Je(s,3)),this.setAttribute("normal",new Je(s.slice(),3)),this.setAttribute("uv",new Je(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(T){const b=new N,M=new N,C=new N;for(let A=0;A<t.length;A+=3)p(t[A+0],b),p(t[A+1],M),p(t[A+2],C),l(b,M,C,T)}function l(T,b,M,C){const A=C+1,L=[];for(let D=0;D<=A;D++){L[D]=[];const E=T.clone().lerp(M,D/A),S=b.clone().lerp(M,D/A),I=A-D;for(let B=0;B<=I;B++)B===0&&D===A?L[D][B]=E:L[D][B]=E.clone().lerp(S,B/I)}for(let D=0;D<A;D++)for(let E=0;E<2*(A-D)-1;E++){const S=Math.floor(E/2);E%2===0?(f(L[D][S+1]),f(L[D+1][S]),f(L[D][S])):(f(L[D][S+1]),f(L[D+1][S+1]),f(L[D+1][S]))}}function c(T){const b=new N;for(let M=0;M<s.length;M+=3)b.x=s[M+0],b.y=s[M+1],b.z=s[M+2],b.normalize().multiplyScalar(T),s[M+0]=b.x,s[M+1]=b.y,s[M+2]=b.z}function u(){const T=new N;for(let b=0;b<s.length;b+=3){T.x=s[b+0],T.y=s[b+1],T.z=s[b+2];const M=m(T)/2/Math.PI+.5,C=h(T)/Math.PI+.5;a.push(M,1-C)}g(),d()}function d(){for(let T=0;T<a.length;T+=6){const b=a[T+0],M=a[T+2],C=a[T+4],A=Math.max(b,M,C),L=Math.min(b,M,C);A>.9&&L<.1&&(b<.2&&(a[T+0]+=1),M<.2&&(a[T+2]+=1),C<.2&&(a[T+4]+=1))}}function f(T){s.push(T.x,T.y,T.z)}function p(T,b){const M=T*3;b.x=e[M+0],b.y=e[M+1],b.z=e[M+2]}function g(){const T=new N,b=new N,M=new N,C=new N,A=new Ie,L=new Ie,D=new Ie;for(let E=0,S=0;E<s.length;E+=9,S+=6){T.set(s[E+0],s[E+1],s[E+2]),b.set(s[E+3],s[E+4],s[E+5]),M.set(s[E+6],s[E+7],s[E+8]),A.set(a[S+0],a[S+1]),L.set(a[S+2],a[S+3]),D.set(a[S+4],a[S+5]),C.copy(T).add(b).add(M).divideScalar(3);const I=m(C);x(A,S+0,T,I),x(L,S+2,b,I),x(D,S+4,M,I)}}function x(T,b,M,C){C<0&&T.x===1&&(a[b]=T.x-1),M.x===0&&M.z===0&&(a[b]=C/2/Math.PI+.5)}function m(T){return Math.atan2(T.z,-T.x)}function h(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.vertices,e.indices,e.radius,e.details)}}class Ys extends os{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ys(e.radius,e.detail)}}class bn extends os{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new bn(e.radius,e.detail)}}class Pc extends It{constructor(e=[new Ie(0,-.5),new Ie(.5,0),new Ie(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=Ze(r,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],u=1/t,d=new N,f=new Ie,p=new N,g=new N,x=new N;let m=0,h=0;for(let T=0;T<=e.length-1;T++)switch(T){case 0:m=e[T+1].x-e[T].x,h=e[T+1].y-e[T].y,p.x=h*1,p.y=-m,p.z=h*0,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[T+1].x-e[T].x,h=e[T+1].y-e[T].y,p.x=h*1,p.y=-m,p.z=h*0,g.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(g)}for(let T=0;T<=t;T++){const b=i+T*u*r,M=Math.sin(b),C=Math.cos(b);for(let A=0;A<=e.length-1;A++){d.x=e[A].x*M,d.y=e[A].y,d.z=e[A].x*C,a.push(d.x,d.y,d.z),f.x=T/t,f.y=A/(e.length-1),o.push(f.x,f.y);const L=l[3*A+0]*M,D=l[3*A+1],E=l[3*A+0]*C;c.push(L,D,E)}}for(let T=0;T<t;T++)for(let b=0;b<e.length-1;b++){const M=b+T*e.length,C=M,A=M+e.length,L=M+e.length+1,D=M+1;s.push(C,A,D),s.push(L,D,A)}this.setIndex(s),this.setAttribute("position",new Je(a,3)),this.setAttribute("uv",new Je(o,2)),this.setAttribute("normal",new Je(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pc(e.points,e.segments,e.phiStart,e.phiLength)}}class gi extends os{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new gi(e.radius,e.detail)}}class ro extends It{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,f=t/l,p=[],g=[],x=[],m=[];for(let h=0;h<u;h++){const T=h*f-a;for(let b=0;b<c;b++){const M=b*d-s;g.push(M,-T,0),x.push(0,0,1),m.push(b/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let T=0;T<o;T++){const b=T+c*h,M=T+c*(h+1),C=T+1+c*(h+1),A=T+1+c*h;p.push(b,M,A),p.push(M,C,A)}this.setIndex(p),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ro(e.width,e.height,e.widthSegments,e.heightSegments)}}class _r extends It{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],u=[];let d=e;const f=(t-e)/r,p=new N,g=new Ie;for(let x=0;x<=r;x++){for(let m=0;m<=i;m++){const h=s+m/i*a;p.x=d*Math.cos(h),p.y=d*Math.sin(h),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}d+=f}for(let x=0;x<r;x++){const m=x*(i+1);for(let h=0;h<i;h++){const T=h+m,b=T,M=T+i+1,C=T+i+2,A=T+1;o.push(b,M,A),o.push(M,C,A)}}this.setIndex(o),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(c,3)),this.setAttribute("uv",new Je(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class nn extends It{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new N,f=new N,p=[],g=[],x=[],m=[];for(let h=0;h<=i;h++){const T=[],b=h/i;let M=0;h===0&&a===0?M=.5/t:h===i&&l===Math.PI&&(M=-.5/t);for(let C=0;C<=t;C++){const A=C/t;d.x=-e*Math.cos(r+A*s)*Math.sin(a+b*o),d.y=e*Math.cos(a+b*o),d.z=e*Math.sin(r+A*s)*Math.sin(a+b*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(A+M,1-b),T.push(c++)}u.push(T)}for(let h=0;h<i;h++)for(let T=0;T<t;T++){const b=u[h][T+1],M=u[h][T],C=u[h+1][T],A=u[h+1][T+1];(h!==0||a>0)&&p.push(b,M,A),(h!==i-1||l<Math.PI)&&p.push(M,C,A)}this.setIndex(p),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Lc extends os{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Lc(e.radius,e.detail)}}class sr extends It{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],c=[],u=new N,d=new N,f=new N;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const x=g/r*s,m=p/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(x),d.y=(e+t*Math.cos(m))*Math.sin(x),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const x=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,h=(r+1)*(p-1)+g,T=(r+1)*p+g;a.push(x,m,T),a.push(m,h,T)}this.setIndex(a),this.setAttribute("position",new Je(o,3)),this.setAttribute("normal",new Je(l,3)),this.setAttribute("uv",new Je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Tn extends gr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=df,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zm extends gr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class km extends gr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class wf extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Gm extends wf{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Xo=new rt,Qu=new N,ed=new N;class Hm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.mapType=Qn,this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rc,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Qu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qu),ed.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ed),t.updateMatrixWorld(),Xo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Xo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Af extends xf{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Vm extends Hm{constructor(){super(new Af(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wm extends wf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Vm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Xm extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const td=new rt;class qm{constructor(e,t,i=0,r=1/0){this.ray=new Ec(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Tc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return td.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(td),this}intersectObject(e,t=!0,i=[]){return Zl(e,this,i,t),i.sort(nd),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Zl(e[r],this,i,t);return i.sort(nd),i}}function nd(n,e){return n.distance-e.distance}function Zl(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)Zl(s[a],e,t,!0)}}function id(n,e,t,i){const r=Ym(i);switch(t){case lf:return n*e;case vc:return n*e/r.components*r.byteLength;case xc:return n*e/r.components*r.byteLength;case uf:return n*e*2/r.components*r.byteLength;case Mc:return n*e*2/r.components*r.byteLength;case cf:return n*e*3/r.components*r.byteLength;case Vn:return n*e*4/r.components*r.byteLength;case yc:return n*e*4/r.components*r.byteLength;case Oa:case Ba:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case za:case ka:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sl:case El:return Math.max(n,16)*Math.max(e,8)/4;case yl:case bl:return Math.max(n,8)*Math.max(e,8)/2;case Tl:case wl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Al:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ll:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Il:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Nl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Fl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Bl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case zl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case kl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Gl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Hl:case Vl:case Wl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Xl:case ql:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Yl:case $l:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ym(n){switch(n){case Qn:case rf:return{byteLength:1,components:1};case Ns:case sf:case qs:return{byteLength:2,components:1};case gc:case _c:return{byteLength:2,components:4};case lr:case mc:case Kn:return{byteLength:4,components:1};case af:case of:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hc);function Rf(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function $m(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){const g=d[f],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,d[f]=x)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){const x=d[p];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var jm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Km=`#ifdef USE_ALPHAHASH
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
#endif`,Zm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tg=`#ifdef USE_AOMAP
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
#endif`,ng=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ig=`#ifdef USE_BATCHING
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
#endif`,rg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ag=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,og=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lg=`#ifdef USE_IRIDESCENCE
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
#endif`,cg=`#ifdef USE_BUMPMAP
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
#endif`,ug=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_g=`#if defined( USE_COLOR_ALPHA )
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
#endif`,vg=`#define PI 3.141592653589793
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
} // validated`,xg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mg=`vec3 transformedNormal = objectNormal;
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
#endif`,yg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Eg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tg="gl_FragColor = linearToOutputTexel( gl_FragColor );",wg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ag=`#ifdef USE_ENVMAP
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
#endif`,Rg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cg=`#ifdef USE_ENVMAP
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
#endif`,Pg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lg=`#ifdef USE_ENVMAP
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
#endif`,Dg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ig=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ug=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ng=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fg=`#ifdef USE_GRADIENTMAP
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
}`,Og=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kg=`uniform bool receiveShadow;
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
#endif`,Gg=`#ifdef USE_ENVMAP
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
#endif`,Hg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qg=`PhysicalMaterial material;
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
#endif`,Yg=`struct PhysicalMaterial {
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
}`,$g=`
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
#endif`,jg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,t0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,n0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,r0=`#if defined( USE_POINTS_UV )
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
#endif`,s0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,a0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,o0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,l0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,c0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u0=`#ifdef USE_MORPHTARGETS
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
#endif`,d0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,h0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,p0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_0=`#ifdef USE_NORMALMAP
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
#endif`,v0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,x0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,M0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,y0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,S0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,b0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,E0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,T0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,w0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,A0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,R0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,C0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,P0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,L0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,D0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,I0=`float getShadowMask() {
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
}`,U0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,N0=`#ifdef USE_SKINNING
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
#endif`,F0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,O0=`#ifdef USE_SKINNING
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
#endif`,B0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,z0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,k0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,H0=`#ifdef USE_TRANSMISSION
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
#endif`,V0=`#ifdef USE_TRANSMISSION
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
#endif`,W0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,j0=`uniform sampler2D t2D;
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
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,J0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e_=`#include <common>
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
}`,t_=`#if DEPTH_PACKING == 3200
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
}`,n_=`#define DISTANCE
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
}`,i_=`#define DISTANCE
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
}`,r_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a_=`uniform float scale;
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
}`,o_=`uniform vec3 diffuse;
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
}`,l_=`#include <common>
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
}`,c_=`uniform vec3 diffuse;
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
}`,u_=`#define LAMBERT
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
}`,d_=`#define LAMBERT
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
}`,f_=`#define MATCAP
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
}`,h_=`#define MATCAP
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
}`,p_=`#define NORMAL
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
}`,m_=`#define NORMAL
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
}`,g_=`#define PHONG
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
}`,__=`#define PHONG
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
}`,v_=`#define STANDARD
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
}`,x_=`#define STANDARD
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
}`,M_=`#define TOON
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
}`,y_=`#define TOON
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
}`,S_=`uniform float size;
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
}`,b_=`uniform vec3 diffuse;
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
}`,E_=`#include <common>
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
}`,T_=`uniform vec3 color;
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
}`,w_=`uniform float rotation;
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
}`,A_=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:jm,alphahash_pars_fragment:Km,alphamap_fragment:Zm,alphamap_pars_fragment:Jm,alphatest_fragment:Qm,alphatest_pars_fragment:eg,aomap_fragment:tg,aomap_pars_fragment:ng,batching_pars_vertex:ig,batching_vertex:rg,begin_vertex:sg,beginnormal_vertex:ag,bsdfs:og,iridescence_fragment:lg,bumpmap_pars_fragment:cg,clipping_planes_fragment:ug,clipping_planes_pars_fragment:dg,clipping_planes_pars_vertex:fg,clipping_planes_vertex:hg,color_fragment:pg,color_pars_fragment:mg,color_pars_vertex:gg,color_vertex:_g,common:vg,cube_uv_reflection_fragment:xg,defaultnormal_vertex:Mg,displacementmap_pars_vertex:yg,displacementmap_vertex:Sg,emissivemap_fragment:bg,emissivemap_pars_fragment:Eg,colorspace_fragment:Tg,colorspace_pars_fragment:wg,envmap_fragment:Ag,envmap_common_pars_fragment:Rg,envmap_pars_fragment:Cg,envmap_pars_vertex:Pg,envmap_physical_pars_fragment:Gg,envmap_vertex:Lg,fog_vertex:Dg,fog_pars_vertex:Ig,fog_fragment:Ug,fog_pars_fragment:Ng,gradientmap_pars_fragment:Fg,lightmap_pars_fragment:Og,lights_lambert_fragment:Bg,lights_lambert_pars_fragment:zg,lights_pars_begin:kg,lights_toon_fragment:Hg,lights_toon_pars_fragment:Vg,lights_phong_fragment:Wg,lights_phong_pars_fragment:Xg,lights_physical_fragment:qg,lights_physical_pars_fragment:Yg,lights_fragment_begin:$g,lights_fragment_maps:jg,lights_fragment_end:Kg,logdepthbuf_fragment:Zg,logdepthbuf_pars_fragment:Jg,logdepthbuf_pars_vertex:Qg,logdepthbuf_vertex:e0,map_fragment:t0,map_pars_fragment:n0,map_particle_fragment:i0,map_particle_pars_fragment:r0,metalnessmap_fragment:s0,metalnessmap_pars_fragment:a0,morphinstance_vertex:o0,morphcolor_vertex:l0,morphnormal_vertex:c0,morphtarget_pars_vertex:u0,morphtarget_vertex:d0,normal_fragment_begin:f0,normal_fragment_maps:h0,normal_pars_fragment:p0,normal_pars_vertex:m0,normal_vertex:g0,normalmap_pars_fragment:_0,clearcoat_normal_fragment_begin:v0,clearcoat_normal_fragment_maps:x0,clearcoat_pars_fragment:M0,iridescence_pars_fragment:y0,opaque_fragment:S0,packing:b0,premultiplied_alpha_fragment:E0,project_vertex:T0,dithering_fragment:w0,dithering_pars_fragment:A0,roughnessmap_fragment:R0,roughnessmap_pars_fragment:C0,shadowmap_pars_fragment:P0,shadowmap_pars_vertex:L0,shadowmap_vertex:D0,shadowmask_pars_fragment:I0,skinbase_vertex:U0,skinning_pars_vertex:N0,skinning_vertex:F0,skinnormal_vertex:O0,specularmap_fragment:B0,specularmap_pars_fragment:z0,tonemapping_fragment:k0,tonemapping_pars_fragment:G0,transmission_fragment:H0,transmission_pars_fragment:V0,uv_pars_fragment:W0,uv_pars_vertex:X0,uv_vertex:q0,worldpos_vertex:Y0,background_vert:$0,background_frag:j0,backgroundCube_vert:K0,backgroundCube_frag:Z0,cube_vert:J0,cube_frag:Q0,depth_vert:e_,depth_frag:t_,distanceRGBA_vert:n_,distanceRGBA_frag:i_,equirect_vert:r_,equirect_frag:s_,linedashed_vert:a_,linedashed_frag:o_,meshbasic_vert:l_,meshbasic_frag:c_,meshlambert_vert:u_,meshlambert_frag:d_,meshmatcap_vert:f_,meshmatcap_frag:h_,meshnormal_vert:p_,meshnormal_frag:m_,meshphong_vert:g_,meshphong_frag:__,meshphysical_vert:v_,meshphysical_frag:x_,meshtoon_vert:M_,meshtoon_frag:y_,points_vert:S_,points_frag:b_,shadow_vert:E_,shadow_frag:T_,sprite_vert:w_,sprite_frag:A_},le={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},$n={basic:{uniforms:ln([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:ln([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Le(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:ln([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:ln([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:ln([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Le(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:ln([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:ln([le.points,le.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:ln([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:ln([le.common,le.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:ln([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:ln([le.sprite,le.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:ln([le.common,le.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:ln([le.lights,le.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};$n.physical={uniforms:ln([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Ta={r:0,b:0,g:0},qi=new ei,R_=new rt;function C_(n,e,t,i,r,s,a){const o=new Le(0);let l=s===!0?0:1,c,u,d=null,f=0,p=null;function g(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function x(b){let M=!1;const C=g(b);C===null?h(o,l):C&&C.isColor&&(h(C,1),M=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,M){const C=g(M);C&&(C.isCubeTexture||C.mapping===io)?(u===void 0&&(u=new oe(new Ii(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:ns($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,L,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),qi.copy(M.backgroundRotation),qi.x*=-1,qi.y*=-1,qi.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(R_.makeRotationFromEuler(qi)),u.material.toneMapped=it.getTransfer(C.colorSpace)!==dt,(d!==C||f!==C.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=C,f=C.version,p=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new oe(new ro(2,2),new mi({name:"BackgroundMaterial",uniforms:ns($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=it.getTransfer(C.colorSpace)!==dt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||f!==C.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=C,f=C.version,p=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function h(b,M){b.getRGB(Ta,vf(n)),i.buffers.color.setClear(Ta.r,Ta.g,Ta.b,M,a)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,M=1){o.set(b),l=M,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,h(o,l)},render:x,addToRenderList:m,dispose:T}}function P_(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(S,I,B,H,X){let $=!1;const q=d(H,B,I);s!==q&&(s=q,c(s.object)),$=p(S,H,B,X),$&&g(S,H,B,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,M(S,I,B,H),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function d(S,I,B){const H=B.wireframe===!0;let X=i[S.id];X===void 0&&(X={},i[S.id]=X);let $=X[I.id];$===void 0&&($={},X[I.id]=$);let q=$[H];return q===void 0&&(q=f(l()),$[H]=q),q}function f(S){const I=[],B=[],H=[];for(let X=0;X<t;X++)I[X]=0,B[X]=0,H[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:H,object:S,attributes:{},index:null}}function p(S,I,B,H){const X=s.attributes,$=I.attributes;let q=0;const re=B.getAttributes();for(const V in re)if(re[V].location>=0){const pe=X[V];let Ae=$[V];if(Ae===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(Ae=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(Ae=S.instanceColor)),pe===void 0||pe.attribute!==Ae||Ae&&pe.data!==Ae.data)return!0;q++}return s.attributesNum!==q||s.index!==H}function g(S,I,B,H){const X={},$=I.attributes;let q=0;const re=B.getAttributes();for(const V in re)if(re[V].location>=0){let pe=$[V];pe===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(pe=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(pe=S.instanceColor));const Ae={};Ae.attribute=pe,pe&&pe.data&&(Ae.data=pe.data),X[V]=Ae,q++}s.attributes=X,s.attributesNum=q,s.index=H}function x(){const S=s.newAttributes;for(let I=0,B=S.length;I<B;I++)S[I]=0}function m(S){h(S,0)}function h(S,I){const B=s.newAttributes,H=s.enabledAttributes,X=s.attributeDivisors;B[S]=1,H[S]===0&&(n.enableVertexAttribArray(S),H[S]=1),X[S]!==I&&(n.vertexAttribDivisor(S,I),X[S]=I)}function T(){const S=s.newAttributes,I=s.enabledAttributes;for(let B=0,H=I.length;B<H;B++)I[B]!==S[B]&&(n.disableVertexAttribArray(B),I[B]=0)}function b(S,I,B,H,X,$,q){q===!0?n.vertexAttribIPointer(S,I,B,X,$):n.vertexAttribPointer(S,I,B,H,X,$)}function M(S,I,B,H){x();const X=H.attributes,$=B.getAttributes(),q=I.defaultAttributeValues;for(const re in $){const V=$[re];if(V.location>=0){let ce=X[re];if(ce===void 0&&(re==="instanceMatrix"&&S.instanceMatrix&&(ce=S.instanceMatrix),re==="instanceColor"&&S.instanceColor&&(ce=S.instanceColor)),ce!==void 0){const pe=ce.normalized,Ae=ce.itemSize,Ke=e.get(ce);if(Ke===void 0)continue;const pt=Ke.buffer,vt=Ke.type,st=Ke.bytesPerElement,j=vt===n.INT||vt===n.UNSIGNED_INT||ce.gpuType===mc;if(ce.isInterleavedBufferAttribute){const J=ce.data,_e=J.stride,Oe=ce.offset;if(J.isInstancedInterleavedBuffer){for(let we=0;we<V.locationSize;we++)h(V.location+we,J.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let we=0;we<V.locationSize;we++)m(V.location+we);n.bindBuffer(n.ARRAY_BUFFER,pt);for(let we=0;we<V.locationSize;we++)b(V.location+we,Ae/V.locationSize,vt,pe,_e*st,(Oe+Ae/V.locationSize*we)*st,j)}else{if(ce.isInstancedBufferAttribute){for(let J=0;J<V.locationSize;J++)h(V.location+J,ce.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let J=0;J<V.locationSize;J++)m(V.location+J);n.bindBuffer(n.ARRAY_BUFFER,pt);for(let J=0;J<V.locationSize;J++)b(V.location+J,Ae/V.locationSize,vt,pe,Ae*st,Ae/V.locationSize*J*st,j)}}else if(q!==void 0){const pe=q[re];if(pe!==void 0)switch(pe.length){case 2:n.vertexAttrib2fv(V.location,pe);break;case 3:n.vertexAttrib3fv(V.location,pe);break;case 4:n.vertexAttrib4fv(V.location,pe);break;default:n.vertexAttrib1fv(V.location,pe)}}}}T()}function C(){D();for(const S in i){const I=i[S];for(const B in I){const H=I[B];for(const X in H)u(H[X].object),delete H[X];delete I[B]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const I=i[S.id];for(const B in I){const H=I[B];for(const X in H)u(H[X].object),delete H[X];delete I[B]}delete i[S.id]}function L(S){for(const I in i){const B=i[I];if(B[S.id]===void 0)continue;const H=B[S.id];for(const X in H)u(H[X].object),delete H[X];delete B[S.id]}}function D(){E(),a=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:D,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:m,disableUnusedAttributes:T}}function L_(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];t.update(p,i,1)}function l(c,u,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x]*f[x];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function D_(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(L){return!(L!==Vn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const D=L===qs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Qn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Kn&&!D)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:T,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:C,maxSamples:A}}function I_(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new ji,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,h=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const T=s?0:i,b=T*4;let M=h.clippingState||null;l.value=M,M=u(g,f,b,p);for(let C=0;C!==b;++C)M[C]=t[C];h.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const h=p+x*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<h)&&(m=new Float32Array(h));for(let b=0,M=p;b!==x;++b,M+=4)a.copy(d[b]).applyMatrix4(T,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function U_(n){let e=new WeakMap;function t(a,o){return o===_l?a.mapping=Qr:o===vl&&(a.mapping=es),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===_l||o===vl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Am(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Wr=4,rd=[.125,.215,.35,.446,.526,.582],Ji=20,qo=new Af,sd=new Le;let Yo=null,$o=0,jo=0,Ko=!1;const Ki=(1+Math.sqrt(5))/2,kr=1/Ki,ad=[new N(-Ki,kr,0),new N(Ki,kr,0),new N(-kr,0,Ki),new N(kr,0,Ki),new N(0,Ki,-kr),new N(0,Ki,kr),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],N_=new N;class od{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=N_}=s;Yo=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),jo=this._renderer.getActiveMipmapLevel(),Ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ud(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yo,$o,jo),this._renderer.xr.enabled=Ko,e.scissorTest=!1,wa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qr||e.mapping===es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yo=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),jo=this._renderer.getActiveMipmapLevel(),Ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:qs,format:Vn,colorSpace:ts,depthBuffer:!1},r=ld(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ld(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=F_(s)),this._blurMaterial=O_(s,e,t)}return r}_compileMaterial(e){const t=new oe(this._lodPlanes[0],e);this._renderer.compile(t,qo)}_sceneToCubeUV(e,t,i,r,s){const l=new Ln(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(sd),d.toneMapping=Pi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const x=new Dt({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),m=new oe(new Ii,x);let h=!1;const T=e.background;T?T.isColor&&(x.color.copy(T),e.background=null,h=!0):(x.color.copy(sd),h=!0);for(let b=0;b<6;b++){const M=b%3;M===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[b],s.y,s.z)):M===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[b]));const C=this._cubeSize;wa(r,M*C,b>2?C:0,C,C),d.setRenderTarget(r),h&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=T}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Qr||e.mapping===es;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ud()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cd());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new oe(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;wa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,qo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ad[(r-s-1)%ad.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new oe(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ji-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):Ji;m>Ji&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ji}`);const h=[];let T=0;for(let L=0;L<Ji;++L){const D=L/x,E=Math.exp(-D*D/2);h.push(E),L===0?T+=E:L<m&&(T+=2*E)}for(let L=0;L<h.length;L++)h[L]=h[L]/T;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-i;const M=this._sizeLods[r],C=3*M*(r>b-Wr?r-b+Wr:0),A=4*(this._cubeSize-M);wa(t,C,A,3*M,2*M),l.setRenderTarget(t),l.render(d,qo)}}function F_(n){const e=[],t=[],i=[];let r=n;const s=n-Wr+1+rd.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Wr?l=rd[a-n+Wr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,x=3,m=2,h=1,T=new Float32Array(x*g*p),b=new Float32Array(m*g*p),M=new Float32Array(h*g*p);for(let A=0;A<p;A++){const L=A%3*2/3-1,D=A>2?0:-1,E=[L,D,0,L+2/3,D,0,L+2/3,D+1,0,L,D,0,L+2/3,D+1,0,L,D+1,0];T.set(E,x*g*A),b.set(f,m*g*A);const S=[A,A,A,A,A,A];M.set(S,h*g*A)}const C=new It;C.setAttribute("position",new pn(T,x)),C.setAttribute("uv",new pn(b,m)),C.setAttribute("faceIndex",new pn(M,h)),e.push(C),r>Wr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ld(n,e,t){const i=new cr(n,e,t);return i.texture.mapping=io,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function O_(n,e,t){const i=new Float32Array(Ji),r=new N(0,1,0);return new mi({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Dc(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function cd(){return new mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dc(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function ud(){return new mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Dc(){return`

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
	`}function B_(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===_l||l===vl,u=l===Qr||l===es;if(c||u){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new od(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new od(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function z_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ks("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function k_(n,e,t,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,g=d.attributes.position;let x=0;if(p!==null){const T=p.array;x=p.version;for(let b=0,M=T.length;b<M;b+=3){const C=T[b+0],A=T[b+1],L=T[b+2];f.push(C,A,A,L,L,C)}}else if(g!==void 0){const T=g.array;x=g.version;for(let b=0,M=T.length/3-1;b<M;b+=3){const C=b+0,A=b+1,L=b+2;f.push(C,A,A,L,L,C)}}else return;const m=new(hf(f)?_f:gf)(f,1);m.version=x;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function G_(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,p){n.drawElements(i,p,s,f*a),t.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,f*a,g),t.update(p,i,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];t.update(m,i,1)}function d(f,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)c(f[h]/a,p[h],x[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,x,0,g);let h=0;for(let T=0;T<g;T++)h+=p[T]*x[T];t.update(h,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function H_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function V_(n,e,t){const i=new WeakMap,r=new Rt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let E=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let b=0;p===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let M=o.attributes.position.count*b,C=1;M>e.maxTextureSize&&(C=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const A=new Float32Array(M*C*4*d),L=new pf(A,M,C,d);L.type=Kn,L.needsUpdate=!0;const D=b*4;for(let S=0;S<d;S++){const I=m[S],B=h[S],H=T[S],X=M*C*4*S;for(let $=0;$<I.count;$++){const q=$*D;p===!0&&(r.fromBufferAttribute(I,$),A[X+q+0]=r.x,A[X+q+1]=r.y,A[X+q+2]=r.z,A[X+q+3]=0),g===!0&&(r.fromBufferAttribute(B,$),A[X+q+4]=r.x,A[X+q+5]=r.y,A[X+q+6]=r.z,A[X+q+7]=0),x===!0&&(r.fromBufferAttribute(H,$),A[X+q+8]=r.x,A[X+q+9]=r.y,A[X+q+10]=r.z,A[X+q+11]=H.itemSize===4?r.w:1)}}f={count:d,texture:L,size:new Ie(M,C)},i.set(o,f),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function W_(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Cf=new tn,dd=new Ef(1,1),Pf=new pf,Lf=new um,Df=new Mf,fd=[],hd=[],pd=new Float32Array(16),md=new Float32Array(9),gd=new Float32Array(4);function ls(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=fd[r];if(s===void 0&&(s=new Float32Array(r),fd[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function so(n,e){let t=hd[e];t===void 0&&(t=new Int32Array(e),hd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function X_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function q_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2fv(this.addr,e),kt(t,e)}}function Y_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;n.uniform3fv(this.addr,e),kt(t,e)}}function $_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4fv(this.addr,e),kt(t,e)}}function j_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,i))return;gd.set(i),n.uniformMatrix2fv(this.addr,!1,gd),kt(t,i)}}function K_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,i))return;md.set(i),n.uniformMatrix3fv(this.addr,!1,md),kt(t,i)}}function Z_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,i))return;pd.set(i),n.uniformMatrix4fv(this.addr,!1,pd),kt(t,i)}}function J_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Q_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2iv(this.addr,e),kt(t,e)}}function ev(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3iv(this.addr,e),kt(t,e)}}function tv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4iv(this.addr,e),kt(t,e)}}function nv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function iv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2uiv(this.addr,e),kt(t,e)}}function rv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3uiv(this.addr,e),kt(t,e)}}function sv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4uiv(this.addr,e),kt(t,e)}}function av(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(dd.compareFunction=ff,s=dd):s=Cf,t.setTexture2D(e||s,r)}function ov(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Lf,r)}function lv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Df,r)}function cv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Pf,r)}function uv(n){switch(n){case 5126:return X_;case 35664:return q_;case 35665:return Y_;case 35666:return $_;case 35674:return j_;case 35675:return K_;case 35676:return Z_;case 5124:case 35670:return J_;case 35667:case 35671:return Q_;case 35668:case 35672:return ev;case 35669:case 35673:return tv;case 5125:return nv;case 36294:return iv;case 36295:return rv;case 36296:return sv;case 35678:case 36198:case 36298:case 36306:case 35682:return av;case 35679:case 36299:case 36307:return ov;case 35680:case 36300:case 36308:case 36293:return lv;case 36289:case 36303:case 36311:case 36292:return cv}}function dv(n,e){n.uniform1fv(this.addr,e)}function fv(n,e){const t=ls(e,this.size,2);n.uniform2fv(this.addr,t)}function hv(n,e){const t=ls(e,this.size,3);n.uniform3fv(this.addr,t)}function pv(n,e){const t=ls(e,this.size,4);n.uniform4fv(this.addr,t)}function mv(n,e){const t=ls(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function gv(n,e){const t=ls(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function _v(n,e){const t=ls(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function vv(n,e){n.uniform1iv(this.addr,e)}function xv(n,e){n.uniform2iv(this.addr,e)}function Mv(n,e){n.uniform3iv(this.addr,e)}function yv(n,e){n.uniform4iv(this.addr,e)}function Sv(n,e){n.uniform1uiv(this.addr,e)}function bv(n,e){n.uniform2uiv(this.addr,e)}function Ev(n,e){n.uniform3uiv(this.addr,e)}function Tv(n,e){n.uniform4uiv(this.addr,e)}function wv(n,e,t){const i=this.cache,r=e.length,s=so(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Cf,s[a])}function Av(n,e,t){const i=this.cache,r=e.length,s=so(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Lf,s[a])}function Rv(n,e,t){const i=this.cache,r=e.length,s=so(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Df,s[a])}function Cv(n,e,t){const i=this.cache,r=e.length,s=so(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Pf,s[a])}function Pv(n){switch(n){case 5126:return dv;case 35664:return fv;case 35665:return hv;case 35666:return pv;case 35674:return mv;case 35675:return gv;case 35676:return _v;case 5124:case 35670:return vv;case 35667:case 35671:return xv;case 35668:case 35672:return Mv;case 35669:case 35673:return yv;case 5125:return Sv;case 36294:return bv;case 36295:return Ev;case 36296:return Tv;case 35678:case 36198:case 36298:case 36306:case 35682:return wv;case 35679:case 36299:case 36307:return Av;case 35680:case 36300:case 36308:case 36293:return Rv;case 36289:case 36303:case 36311:case 36292:return Cv}}class Lv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=uv(t.type)}}class Dv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Pv(t.type)}}class Iv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Zo=/(\w+)(\])?(\[|\.)?/g;function _d(n,e){n.seq.push(e),n.map[e.id]=e}function Uv(n,e,t){const i=n.name,r=i.length;for(Zo.lastIndex=0;;){const s=Zo.exec(i),a=Zo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){_d(t,c===void 0?new Lv(o,n,e):new Dv(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new Iv(o),_d(t,d)),t=d}}}class Ga{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Uv(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function vd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Nv=37297;let Fv=0;function Ov(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const xd=new Ve;function Bv(n){it._getMatrix(xd,it.workingColorSpace,n);const e=`mat3( ${xd.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(n)){case $a:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Md(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Ov(n.getShaderSource(e),o)}else return s}function zv(n,e){const t=Bv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function kv(n,e){let t;switch(e){case Sp:t="Linear";break;case bp:t="Reinhard";break;case Ep:t="Cineon";break;case Tp:t="ACESFilmic";break;case Ap:t="AgX";break;case Rp:t="Neutral";break;case wp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Aa=new N;function Gv(){it.getLuminanceCoefficients(Aa);const n=Aa.x.toFixed(4),e=Aa.y.toFixed(4),t=Aa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function Vv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Wv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ts(n){return n!==""}function yd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Xv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jl(n){return n.replace(Xv,Yv)}const qv=new Map;function Yv(n,e){let t=Xe[e];if(t===void 0){const i=qv.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Jl(t)}const $v=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bd(n){return n.replace($v,jv)}function jv(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ed(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Kv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===pc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===tp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ci&&(e="SHADOWMAP_TYPE_VSM"),e}function Zv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Qr:case es:e="ENVMAP_TYPE_CUBE";break;case io:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Jv(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===es&&(e="ENVMAP_MODE_REFRACTION"),e}function Qv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case tf:e="ENVMAP_BLENDING_MULTIPLY";break;case Mp:e="ENVMAP_BLENDING_MIX";break;case yp:e="ENVMAP_BLENDING_ADD";break}return e}function ex(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function tx(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Kv(t),c=Zv(t),u=Jv(t),d=Qv(t),f=ex(t),p=Hv(t),g=Vv(s),x=r.createProgram();let m,h,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ts).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ts).join(`
`),h.length>0&&(h+=`
`)):(m=[Ed(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),h=[Ed(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pi?"#define TONE_MAPPING":"",t.toneMapping!==Pi?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Pi?kv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,zv("linearToOutputTexel",t.outputColorSpace),Gv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ts).join(`
`)),a=Jl(a),a=yd(a,t),a=Sd(a,t),o=Jl(o),o=yd(o,t),o=Sd(o,t),a=bd(a),o=bd(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Au?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const b=T+m+a,M=T+h+o,C=vd(r,r.VERTEX_SHADER,b),A=vd(r,r.FRAGMENT_SHADER,M);r.attachShader(x,C),r.attachShader(x,A),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function L(I){if(n.debug.checkShaderErrors){const B=r.getProgramInfoLog(x)||"",H=r.getShaderInfoLog(C)||"",X=r.getShaderInfoLog(A)||"",$=B.trim(),q=H.trim(),re=X.trim();let V=!0,ce=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,C,A);else{const pe=Md(r,C,"vertex"),Ae=Md(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+$+`
`+pe+`
`+Ae)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(q===""||re==="")&&(ce=!1);ce&&(I.diagnostics={runnable:V,programLog:$,vertexShader:{log:q,prefix:m},fragmentShader:{log:re,prefix:h}})}r.deleteShader(C),r.deleteShader(A),D=new Ga(r,x),E=Wv(r,x)}let D;this.getUniforms=function(){return D===void 0&&L(this),D};let E;this.getAttributes=function(){return E===void 0&&L(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,Nv)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Fv++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=A,this}let nx=0;class ix{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new rx(e),t.set(e,i)),i}}class rx{constructor(e){this.id=nx++,this.code=e,this.usedTimes=0}}function sx(n,e,t,i,r,s,a){const o=new Tc,l=new ix,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,S,I,B,H){const X=B.fog,$=H.geometry,q=E.isMeshStandardMaterial?B.environment:null,re=(E.isMeshStandardMaterial?t:e).get(E.envMap||q),V=re&&re.mapping===io?re.image.height:null,ce=g[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const pe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ae=pe!==void 0?pe.length:0;let Ke=0;$.morphAttributes.position!==void 0&&(Ke=1),$.morphAttributes.normal!==void 0&&(Ke=2),$.morphAttributes.color!==void 0&&(Ke=3);let pt,vt,st,j;if(ce){const at=$n[ce];pt=at.vertexShader,vt=at.fragmentShader}else pt=E.vertexShader,vt=E.fragmentShader,l.update(E),st=l.getVertexShaderID(E),j=l.getFragmentShaderID(E);const J=n.getRenderTarget(),_e=n.state.buffers.depth.getReversed(),Oe=H.isInstancedMesh===!0,we=H.isBatchedMesh===!0,tt=!!E.map,Zt=!!E.matcap,P=!!re,xt=!!E.aoMap,ke=!!E.lightMap,Ne=!!E.bumpMap,Me=!!E.normalMap,Mt=!!E.displacementMap,ye=!!E.emissiveMap,We=!!E.metalnessMap,Gt=!!E.roughnessMap,Ct=E.anisotropy>0,R=E.clearcoat>0,v=E.dispersion>0,z=E.iridescence>0,Y=E.sheen>0,Z=E.transmission>0,W=Ct&&!!E.anisotropyMap,Te=R&&!!E.clearcoatMap,se=R&&!!E.clearcoatNormalMap,Se=R&&!!E.clearcoatRoughnessMap,be=z&&!!E.iridescenceMap,ne=z&&!!E.iridescenceThicknessMap,fe=Y&&!!E.sheenColorMap,Ue=Y&&!!E.sheenRoughnessMap,Ee=!!E.specularMap,ue=!!E.specularColorMap,He=!!E.specularIntensityMap,U=Z&&!!E.transmissionMap,ie=Z&&!!E.thicknessMap,ae=!!E.gradientMap,ge=!!E.alphaMap,ee=E.alphaTest>0,K=!!E.alphaHash,xe=!!E.extensions;let Be=Pi;E.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Be=n.toneMapping);const mt={shaderID:ce,shaderType:E.type,shaderName:E.name,vertexShader:pt,fragmentShader:vt,defines:E.defines,customVertexShaderID:st,customFragmentShaderID:j,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:we,batchingColor:we&&H._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&H.instanceColor!==null,instancingMorph:Oe&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:J===null?n.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ts,alphaToCoverage:!!E.alphaToCoverage,map:tt,matcap:Zt,envMap:P,envMapMode:P&&re.mapping,envMapCubeUVHeight:V,aoMap:xt,lightMap:ke,bumpMap:Ne,normalMap:Me,displacementMap:f&&Mt,emissiveMap:ye,normalMapObjectSpace:Me&&E.normalMapType===Dp,normalMapTangentSpace:Me&&E.normalMapType===df,metalnessMap:We,roughnessMap:Gt,anisotropy:Ct,anisotropyMap:W,clearcoat:R,clearcoatMap:Te,clearcoatNormalMap:se,clearcoatRoughnessMap:Se,dispersion:v,iridescence:z,iridescenceMap:be,iridescenceThicknessMap:ne,sheen:Y,sheenColorMap:fe,sheenRoughnessMap:Ue,specularMap:Ee,specularColorMap:ue,specularIntensityMap:He,transmission:Z,transmissionMap:U,thicknessMap:ie,gradientMap:ae,opaque:E.transparent===!1&&E.blending===$r&&E.alphaToCoverage===!1,alphaMap:ge,alphaTest:ee,alphaHash:K,combine:E.combine,mapUv:tt&&x(E.map.channel),aoMapUv:xt&&x(E.aoMap.channel),lightMapUv:ke&&x(E.lightMap.channel),bumpMapUv:Ne&&x(E.bumpMap.channel),normalMapUv:Me&&x(E.normalMap.channel),displacementMapUv:Mt&&x(E.displacementMap.channel),emissiveMapUv:ye&&x(E.emissiveMap.channel),metalnessMapUv:We&&x(E.metalnessMap.channel),roughnessMapUv:Gt&&x(E.roughnessMap.channel),anisotropyMapUv:W&&x(E.anisotropyMap.channel),clearcoatMapUv:Te&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:se&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&x(E.sheenRoughnessMap.channel),specularMapUv:Ee&&x(E.specularMap.channel),specularColorMapUv:ue&&x(E.specularColorMap.channel),specularIntensityMapUv:He&&x(E.specularIntensityMap.channel),transmissionMapUv:U&&x(E.transmissionMap.channel),thicknessMapUv:ie&&x(E.thicknessMap.channel),alphaMapUv:ge&&x(E.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Me||Ct),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!$.attributes.uv&&(tt||ge),fog:!!X,useFog:E.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_e,skinning:H.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Ke,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Be,decodeVideoTexture:tt&&E.map.isVideoTexture===!0&&it.getTransfer(E.map.colorSpace)===dt,decodeVideoTextureEmissive:ye&&E.emissiveMap.isVideoTexture===!0&&it.getTransfer(E.emissiveMap.colorSpace)===dt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===$t,flipSided:E.side===cn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:xe&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&E.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return mt.vertexUv1s=c.has(1),mt.vertexUv2s=c.has(2),mt.vertexUv3s=c.has(3),c.clear(),mt}function h(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const I in E.defines)S.push(I),S.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(T(S,E),b(S,E),S.push(n.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function T(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function b(E,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),E.push(o.mask)}function M(E){const S=g[E.type];let I;if(S){const B=$n[S];I=bm.clone(B.uniforms)}else I=E.uniforms;return I}function C(E,S){let I;for(let B=0,H=u.length;B<H;B++){const X=u[B];if(X.cacheKey===S){I=X,++I.usedTimes;break}}return I===void 0&&(I=new tx(n,S,E,s),u.push(I)),I}function A(E){if(--E.usedTimes===0){const S=u.indexOf(E);u[S]=u[u.length-1],u.pop(),E.destroy()}}function L(E){l.remove(E)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:M,acquireProgram:C,releaseProgram:A,releaseShaderCache:L,programs:u,dispose:D}}function ax(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function ox(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Td(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function wd(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,f,p,g,x,m){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=x,h.group=m),e++,h}function o(d,f,p,g,x,m){const h=a(d,f,p,g,x,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(d,f,p,g,x,m){const h=a(d,f,p,g,x,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function c(d,f){t.length>1&&t.sort(d||ox),i.length>1&&i.sort(f||Td),r.length>1&&r.sort(f||Td)}function u(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function lx(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new wd,n.set(i,[a])):r>=s.length?(a=new wd,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function cx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Le};break;case"SpotLight":t={position:new N,direction:new N,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function ux(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let dx=0;function fx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function hx(n){const e=new cx,t=ux(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const r=new N,s=new rt,a=new rt;function o(c){let u=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,g=0,x=0,m=0,h=0,T=0,b=0,M=0,C=0,A=0,L=0;c.sort(fx);for(let E=0,S=c.length;E<S;E++){const I=c[E],B=I.color,H=I.intensity,X=I.distance,$=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=B.r*H,d+=B.g*H,f+=B.b*H;else if(I.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(I.sh.coefficients[q],H);L++}else if(I.isDirectionalLight){const q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const re=I.shadow,V=t.get(I);V.shadowIntensity=re.intensity,V.shadowBias=re.bias,V.shadowNormalBias=re.normalBias,V.shadowRadius=re.radius,V.shadowMapSize=re.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=I.shadow.matrix,T++}i.directional[p]=q,p++}else if(I.isSpotLight){const q=e.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(B).multiplyScalar(H),q.distance=X,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,i.spot[x]=q;const re=I.shadow;if(I.map&&(i.spotLightMap[C]=I.map,C++,re.updateMatrices(I),I.castShadow&&A++),i.spotLightMatrix[x]=re.matrix,I.castShadow){const V=t.get(I);V.shadowIntensity=re.intensity,V.shadowBias=re.bias,V.shadowNormalBias=re.normalBias,V.shadowRadius=re.radius,V.shadowMapSize=re.mapSize,i.spotShadow[x]=V,i.spotShadowMap[x]=$,M++}x++}else if(I.isRectAreaLight){const q=e.get(I);q.color.copy(B).multiplyScalar(H),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=q,m++}else if(I.isPointLight){const q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){const re=I.shadow,V=t.get(I);V.shadowIntensity=re.intensity,V.shadowBias=re.bias,V.shadowNormalBias=re.normalBias,V.shadowRadius=re.radius,V.shadowMapSize=re.mapSize,V.shadowCameraNear=re.camera.near,V.shadowCameraFar=re.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=I.shadow.matrix,b++}i.point[g]=q,g++}else if(I.isHemisphereLight){const q=e.get(I);q.skyColor.copy(I.color).multiplyScalar(H),q.groundColor.copy(I.groundColor).multiplyScalar(H),i.hemi[h]=q,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const D=i.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==h||D.numDirectionalShadows!==T||D.numPointShadows!==b||D.numSpotShadows!==M||D.numSpotMaps!==C||D.numLightProbes!==L)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=M+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=L,D.directionalLength=p,D.pointLength=g,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=h,D.numDirectionalShadows=T,D.numPointShadows=b,D.numSpotShadows=M,D.numSpotMaps=C,D.numLightProbes=L,i.version=dx++)}function l(c,u){let d=0,f=0,p=0,g=0,x=0;const m=u.matrixWorldInverse;for(let h=0,T=c.length;h<T;h++){const b=c[h];if(b.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(b.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(b.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function Ad(n){const e=new hx(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function px(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Ad(n),e.set(r,[o])):s>=a.length?(o=new Ad(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const mx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gx=`uniform sampler2D shadow_pass;
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
}`;function _x(n,e,t){let i=new Rc;const r=new Ie,s=new Ie,a=new Rt,o=new zm({depthPacking:Lp}),l=new km,c={},u=t.maxTextureSize,d={[Di]:cn,[cn]:Di,[$t]:$t},f=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:mx,fragmentShader:gx}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new It;g.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new oe(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pc;let h=this.type;this.render=function(A,L,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=n.getRenderTarget(),S=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Ci),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const H=h!==ci&&this.type===ci,X=h===ci&&this.type!==ci;for(let $=0,q=A.length;$<q;$++){const re=A[$],V=re.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const ce=V.getFrameExtents();if(r.multiply(ce),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ce.x),r.x=s.x*ce.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ce.y),r.y=s.y*ce.y,V.mapSize.y=s.y)),V.map===null||H===!0||X===!0){const Ae=this.type!==ci?{minFilter:Sn,magFilter:Sn}:{};V.map!==null&&V.map.dispose(),V.map=new cr(r.x,r.y,Ae),V.map.texture.name=re.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const pe=V.getViewportCount();for(let Ae=0;Ae<pe;Ae++){const Ke=V.getViewport(Ae);a.set(s.x*Ke.x,s.y*Ke.y,s.x*Ke.z,s.y*Ke.w),B.viewport(a),V.updateMatrices(re,Ae),i=V.getFrustum(),M(L,D,V.camera,re,this.type)}V.isPointLightShadow!==!0&&this.type===ci&&T(V,D),V.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(E,S,I)};function T(A,L){const D=e.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new cr(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(L,null,D,f,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(L,null,D,p,x,null)}function b(A,L,D,E){let S=null;const I=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)S=I;else if(S=D.isPointLight===!0?l:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const B=S.uuid,H=L.uuid;let X=c[B];X===void 0&&(X={},c[B]=X);let $=X[H];$===void 0&&($=S.clone(),X[H]=$,L.addEventListener("dispose",C)),S=$}if(S.visible=L.visible,S.wireframe=L.wireframe,E===ci?S.side=L.shadowSide!==null?L.shadowSide:L.side:S.side=L.shadowSide!==null?L.shadowSide:d[L.side],S.alphaMap=L.alphaMap,S.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,S.map=L.map,S.clipShadows=L.clipShadows,S.clippingPlanes=L.clippingPlanes,S.clipIntersection=L.clipIntersection,S.displacementMap=L.displacementMap,S.displacementScale=L.displacementScale,S.displacementBias=L.displacementBias,S.wireframeLinewidth=L.wireframeLinewidth,S.linewidth=L.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=n.properties.get(S);B.light=D}return S}function M(A,L,D,E,S){if(A.visible===!1)return;if(A.layers.test(L.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===ci)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const H=e.update(A),X=A.material;if(Array.isArray(X)){const $=H.groups;for(let q=0,re=$.length;q<re;q++){const V=$[q],ce=X[V.materialIndex];if(ce&&ce.visible){const pe=b(A,ce,E,S);A.onBeforeShadow(n,A,L,D,H,pe,V),n.renderBufferDirect(D,null,H,pe,A,V),A.onAfterShadow(n,A,L,D,H,pe,V)}}}else if(X.visible){const $=b(A,X,E,S);A.onBeforeShadow(n,A,L,D,H,$,null),n.renderBufferDirect(D,null,H,$,A,null),A.onAfterShadow(n,A,L,D,H,$,null)}}const B=A.children;for(let H=0,X=B.length;H<X;H++)M(B[H],L,D,E,S)}function C(A){A.target.removeEventListener("dispose",C);for(const D in c){const E=c[D],S=A.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const vx={[ul]:dl,[fl]:ml,[hl]:gl,[Jr]:pl,[dl]:ul,[ml]:fl,[gl]:hl,[pl]:Jr};function xx(n,e){function t(){let U=!1;const ie=new Rt;let ae=null;const ge=new Rt(0,0,0,0);return{setMask:function(ee){ae!==ee&&!U&&(n.colorMask(ee,ee,ee,ee),ae=ee)},setLocked:function(ee){U=ee},setClear:function(ee,K,xe,Be,mt){mt===!0&&(ee*=Be,K*=Be,xe*=Be),ie.set(ee,K,xe,Be),ge.equals(ie)===!1&&(n.clearColor(ee,K,xe,Be),ge.copy(ie))},reset:function(){U=!1,ae=null,ge.set(-1,0,0,0)}}}function i(){let U=!1,ie=!1,ae=null,ge=null,ee=null;return{setReversed:function(K){if(ie!==K){const xe=e.get("EXT_clip_control");K?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),ie=K;const Be=ee;ee=null,this.setClear(Be)}},getReversed:function(){return ie},setTest:function(K){K?J(n.DEPTH_TEST):_e(n.DEPTH_TEST)},setMask:function(K){ae!==K&&!U&&(n.depthMask(K),ae=K)},setFunc:function(K){if(ie&&(K=vx[K]),ge!==K){switch(K){case ul:n.depthFunc(n.NEVER);break;case dl:n.depthFunc(n.ALWAYS);break;case fl:n.depthFunc(n.LESS);break;case Jr:n.depthFunc(n.LEQUAL);break;case hl:n.depthFunc(n.EQUAL);break;case pl:n.depthFunc(n.GEQUAL);break;case ml:n.depthFunc(n.GREATER);break;case gl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ge=K}},setLocked:function(K){U=K},setClear:function(K){ee!==K&&(ie&&(K=1-K),n.clearDepth(K),ee=K)},reset:function(){U=!1,ae=null,ge=null,ee=null,ie=!1}}}function r(){let U=!1,ie=null,ae=null,ge=null,ee=null,K=null,xe=null,Be=null,mt=null;return{setTest:function(at){U||(at?J(n.STENCIL_TEST):_e(n.STENCIL_TEST))},setMask:function(at){ie!==at&&!U&&(n.stencilMask(at),ie=at)},setFunc:function(at,ii,Yn){(ae!==at||ge!==ii||ee!==Yn)&&(n.stencilFunc(at,ii,Yn),ae=at,ge=ii,ee=Yn)},setOp:function(at,ii,Yn){(K!==at||xe!==ii||Be!==Yn)&&(n.stencilOp(at,ii,Yn),K=at,xe=ii,Be=Yn)},setLocked:function(at){U=at},setClear:function(at){mt!==at&&(n.clearStencil(at),mt=at)},reset:function(){U=!1,ie=null,ae=null,ge=null,ee=null,K=null,xe=null,Be=null,mt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,p=[],g=null,x=!1,m=null,h=null,T=null,b=null,M=null,C=null,A=null,L=new Le(0,0,0),D=0,E=!1,S=null,I=null,B=null,H=null,X=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,re=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(V)[1]),q=re>=1):V.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),q=re>=2);let ce=null,pe={};const Ae=n.getParameter(n.SCISSOR_BOX),Ke=n.getParameter(n.VIEWPORT),pt=new Rt().fromArray(Ae),vt=new Rt().fromArray(Ke);function st(U,ie,ae,ge){const ee=new Uint8Array(4),K=n.createTexture();n.bindTexture(U,K),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let xe=0;xe<ae;xe++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ie,0,n.RGBA,1,1,ge,0,n.RGBA,n.UNSIGNED_BYTE,ee):n.texImage2D(ie+xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ee);return K}const j={};j[n.TEXTURE_2D]=st(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=st(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=st(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=st(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(n.DEPTH_TEST),a.setFunc(Jr),Ne(!1),Me(bu),J(n.CULL_FACE),xt(Ci);function J(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function _e(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function Oe(U,ie){return d[U]!==ie?(n.bindFramebuffer(U,ie),d[U]=ie,U===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ie),U===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ie),!0):!1}function we(U,ie){let ae=p,ge=!1;if(U){ae=f.get(ie),ae===void 0&&(ae=[],f.set(ie,ae));const ee=U.textures;if(ae.length!==ee.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let K=0,xe=ee.length;K<xe;K++)ae[K]=n.COLOR_ATTACHMENT0+K;ae.length=ee.length,ge=!0}}else ae[0]!==n.BACK&&(ae[0]=n.BACK,ge=!0);ge&&n.drawBuffers(ae)}function tt(U){return g!==U?(n.useProgram(U),g=U,!0):!1}const Zt={[Zi]:n.FUNC_ADD,[ip]:n.FUNC_SUBTRACT,[rp]:n.FUNC_REVERSE_SUBTRACT};Zt[sp]=n.MIN,Zt[ap]=n.MAX;const P={[op]:n.ZERO,[lp]:n.ONE,[cp]:n.SRC_COLOR,[ll]:n.SRC_ALPHA,[mp]:n.SRC_ALPHA_SATURATE,[hp]:n.DST_COLOR,[dp]:n.DST_ALPHA,[up]:n.ONE_MINUS_SRC_COLOR,[cl]:n.ONE_MINUS_SRC_ALPHA,[pp]:n.ONE_MINUS_DST_COLOR,[fp]:n.ONE_MINUS_DST_ALPHA,[gp]:n.CONSTANT_COLOR,[_p]:n.ONE_MINUS_CONSTANT_COLOR,[vp]:n.CONSTANT_ALPHA,[xp]:n.ONE_MINUS_CONSTANT_ALPHA};function xt(U,ie,ae,ge,ee,K,xe,Be,mt,at){if(U===Ci){x===!0&&(_e(n.BLEND),x=!1);return}if(x===!1&&(J(n.BLEND),x=!0),U!==np){if(U!==m||at!==E){if((h!==Zi||M!==Zi)&&(n.blendEquation(n.FUNC_ADD),h=Zi,M=Zi),at)switch(U){case $r:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ya:n.blendFunc(n.ONE,n.ONE);break;case Eu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Tu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case $r:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ya:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Eu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}T=null,b=null,C=null,A=null,L.set(0,0,0),D=0,m=U,E=at}return}ee=ee||ie,K=K||ae,xe=xe||ge,(ie!==h||ee!==M)&&(n.blendEquationSeparate(Zt[ie],Zt[ee]),h=ie,M=ee),(ae!==T||ge!==b||K!==C||xe!==A)&&(n.blendFuncSeparate(P[ae],P[ge],P[K],P[xe]),T=ae,b=ge,C=K,A=xe),(Be.equals(L)===!1||mt!==D)&&(n.blendColor(Be.r,Be.g,Be.b,mt),L.copy(Be),D=mt),m=U,E=!1}function ke(U,ie){U.side===$t?_e(n.CULL_FACE):J(n.CULL_FACE);let ae=U.side===cn;ie&&(ae=!ae),Ne(ae),U.blending===$r&&U.transparent===!1?xt(Ci):xt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const ge=U.stencilWrite;o.setTest(ge),ge&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ye(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?J(n.SAMPLE_ALPHA_TO_COVERAGE):_e(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(U){S!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),S=U)}function Me(U){U!==Qh?(J(n.CULL_FACE),U!==I&&(U===bu?n.cullFace(n.BACK):U===ep?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_e(n.CULL_FACE),I=U}function Mt(U){U!==B&&(q&&n.lineWidth(U),B=U)}function ye(U,ie,ae){U?(J(n.POLYGON_OFFSET_FILL),(H!==ie||X!==ae)&&(n.polygonOffset(ie,ae),H=ie,X=ae)):_e(n.POLYGON_OFFSET_FILL)}function We(U){U?J(n.SCISSOR_TEST):_e(n.SCISSOR_TEST)}function Gt(U){U===void 0&&(U=n.TEXTURE0+$-1),ce!==U&&(n.activeTexture(U),ce=U)}function Ct(U,ie,ae){ae===void 0&&(ce===null?ae=n.TEXTURE0+$-1:ae=ce);let ge=pe[ae];ge===void 0&&(ge={type:void 0,texture:void 0},pe[ae]=ge),(ge.type!==U||ge.texture!==ie)&&(ce!==ae&&(n.activeTexture(ae),ce=ae),n.bindTexture(U,ie||j[U]),ge.type=U,ge.texture=ie)}function R(){const U=pe[ce];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function z(){try{n.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{n.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{n.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{n.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{n.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{n.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{n.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{n.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(U){pt.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),pt.copy(U))}function Ue(U){vt.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),vt.copy(U))}function Ee(U,ie){let ae=c.get(ie);ae===void 0&&(ae=new WeakMap,c.set(ie,ae));let ge=ae.get(U);ge===void 0&&(ge=n.getUniformBlockIndex(ie,U.name),ae.set(U,ge))}function ue(U,ie){const ge=c.get(ie).get(U);l.get(ie)!==ge&&(n.uniformBlockBinding(ie,ge,U.__bindingPointIndex),l.set(ie,ge))}function He(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ce=null,pe={},d={},f=new WeakMap,p=[],g=null,x=!1,m=null,h=null,T=null,b=null,M=null,C=null,A=null,L=new Le(0,0,0),D=0,E=!1,S=null,I=null,B=null,H=null,X=null,pt.set(0,0,n.canvas.width,n.canvas.height),vt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:J,disable:_e,bindFramebuffer:Oe,drawBuffers:we,useProgram:tt,setBlending:xt,setMaterial:ke,setFlipSided:Ne,setCullFace:Me,setLineWidth:Mt,setPolygonOffset:ye,setScissorTest:We,activeTexture:Gt,bindTexture:Ct,unbindTexture:R,compressedTexImage2D:v,compressedTexImage3D:z,texImage2D:be,texImage3D:ne,updateUBOMapping:Ee,uniformBlockBinding:ue,texStorage2D:se,texStorage3D:Se,texSubImage2D:Y,texSubImage3D:Z,compressedTexSubImage2D:W,compressedTexSubImage3D:Te,scissor:fe,viewport:Ue,reset:He}}function Mx(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ie,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,v){return p?new OffscreenCanvas(R,v):Ka("canvas")}function x(R,v,z){let Y=1;const Z=Ct(R);if((Z.width>z||Z.height>z)&&(Y=z/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const W=Math.floor(Y*Z.width),Te=Math.floor(Y*Z.height);d===void 0&&(d=g(W,Te));const se=v?g(W,Te):d;return se.width=W,se.height=Te,se.getContext("2d").drawImage(R,0,0,W,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+W+"x"+Te+")."),se}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function m(R){return R.generateMipmaps}function h(R){n.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(R,v,z,Y,Z=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let W=v;if(v===n.RED&&(z===n.FLOAT&&(W=n.R32F),z===n.HALF_FLOAT&&(W=n.R16F),z===n.UNSIGNED_BYTE&&(W=n.R8)),v===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(W=n.R8UI),z===n.UNSIGNED_SHORT&&(W=n.R16UI),z===n.UNSIGNED_INT&&(W=n.R32UI),z===n.BYTE&&(W=n.R8I),z===n.SHORT&&(W=n.R16I),z===n.INT&&(W=n.R32I)),v===n.RG&&(z===n.FLOAT&&(W=n.RG32F),z===n.HALF_FLOAT&&(W=n.RG16F),z===n.UNSIGNED_BYTE&&(W=n.RG8)),v===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(W=n.RG8UI),z===n.UNSIGNED_SHORT&&(W=n.RG16UI),z===n.UNSIGNED_INT&&(W=n.RG32UI),z===n.BYTE&&(W=n.RG8I),z===n.SHORT&&(W=n.RG16I),z===n.INT&&(W=n.RG32I)),v===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(W=n.RGB8UI),z===n.UNSIGNED_SHORT&&(W=n.RGB16UI),z===n.UNSIGNED_INT&&(W=n.RGB32UI),z===n.BYTE&&(W=n.RGB8I),z===n.SHORT&&(W=n.RGB16I),z===n.INT&&(W=n.RGB32I)),v===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),z===n.UNSIGNED_INT&&(W=n.RGBA32UI),z===n.BYTE&&(W=n.RGBA8I),z===n.SHORT&&(W=n.RGBA16I),z===n.INT&&(W=n.RGBA32I)),v===n.RGB&&(z===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(W=n.R11F_G11F_B10F)),v===n.RGBA){const Te=Z?$a:it.getTransfer(Y);z===n.FLOAT&&(W=n.RGBA32F),z===n.HALF_FLOAT&&(W=n.RGBA16F),z===n.UNSIGNED_BYTE&&(W=Te===dt?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function M(R,v){let z;return R?v===null||v===lr||v===Fs?z=n.DEPTH24_STENCIL8:v===Kn?z=n.DEPTH32F_STENCIL8:v===Ns&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===lr||v===Fs?z=n.DEPTH_COMPONENT24:v===Kn?z=n.DEPTH_COMPONENT32F:v===Ns&&(z=n.DEPTH_COMPONENT16),z}function C(R,v){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Sn&&R.minFilter!==jn?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function A(R){const v=R.target;v.removeEventListener("dispose",A),D(v),v.isVideoTexture&&u.delete(v)}function L(R){const v=R.target;v.removeEventListener("dispose",L),S(v)}function D(R){const v=i.get(R);if(v.__webglInit===void 0)return;const z=R.source,Y=f.get(z);if(Y){const Z=Y[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&E(R),Object.keys(Y).length===0&&f.delete(z)}i.remove(R)}function E(R){const v=i.get(R);n.deleteTexture(v.__webglTexture);const z=R.source,Y=f.get(z);delete Y[v.__cacheKey],a.memory.textures--}function S(R){const v=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let Z=0;Z<v.__webglFramebuffer[Y].length;Z++)n.deleteFramebuffer(v.__webglFramebuffer[Y][Z]);else n.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)n.deleteFramebuffer(v.__webglFramebuffer[Y]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const z=R.textures;for(let Y=0,Z=z.length;Y<Z;Y++){const W=i.get(z[Y]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),a.memory.textures--),i.remove(z[Y])}i.remove(R)}let I=0;function B(){I=0}function H(){const R=I;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),I+=1,R}function X(R){const v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function $(R,v){const z=i.get(R);if(R.isVideoTexture&&We(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){const Y=R.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(z,R,v);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+v)}function q(R,v){const z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){j(z,R,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+v)}function re(R,v){const z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){j(z,R,v);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+v)}function V(R,v){const z=i.get(R);if(R.version>0&&z.__version!==R.version){J(z,R,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+v)}const ce={[xl]:n.REPEAT,[nr]:n.CLAMP_TO_EDGE,[Ml]:n.MIRRORED_REPEAT},pe={[Sn]:n.NEAREST,[Cp]:n.NEAREST_MIPMAP_NEAREST,[ta]:n.NEAREST_MIPMAP_LINEAR,[jn]:n.LINEAR,[yo]:n.LINEAR_MIPMAP_NEAREST,[ir]:n.LINEAR_MIPMAP_LINEAR},Ae={[Ip]:n.NEVER,[zp]:n.ALWAYS,[Up]:n.LESS,[ff]:n.LEQUAL,[Np]:n.EQUAL,[Bp]:n.GEQUAL,[Fp]:n.GREATER,[Op]:n.NOTEQUAL};function Ke(R,v){if(v.type===Kn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===jn||v.magFilter===yo||v.magFilter===ta||v.magFilter===ir||v.minFilter===jn||v.minFilter===yo||v.minFilter===ta||v.minFilter===ir)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,ce[v.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,ce[v.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,ce[v.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,pe[v.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,pe[v.minFilter]),v.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Ae[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Sn||v.minFilter!==ta&&v.minFilter!==ir||v.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function pt(R,v){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",A));const Y=v.source;let Z=f.get(Y);Z===void 0&&(Z={},f.set(Y,Z));const W=X(v);if(W!==R.__cacheKey){Z[W]===void 0&&(Z[W]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Z[W].usedTimes++;const Te=Z[R.__cacheKey];Te!==void 0&&(Z[R.__cacheKey].usedTimes--,Te.usedTimes===0&&E(v)),R.__cacheKey=W,R.__webglTexture=Z[W].texture}return z}function vt(R,v,z){return Math.floor(Math.floor(R/z)/v)}function st(R,v,z,Y){const W=R.updateRanges;if(W.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,z,Y,v.data);else{W.sort((ne,fe)=>ne.start-fe.start);let Te=0;for(let ne=1;ne<W.length;ne++){const fe=W[Te],Ue=W[ne],Ee=fe.start+fe.count,ue=vt(Ue.start,v.width,4),He=vt(fe.start,v.width,4);Ue.start<=Ee+1&&ue===He&&vt(Ue.start+Ue.count-1,v.width,4)===ue?fe.count=Math.max(fe.count,Ue.start+Ue.count-fe.start):(++Te,W[Te]=Ue)}W.length=Te+1;const se=n.getParameter(n.UNPACK_ROW_LENGTH),Se=n.getParameter(n.UNPACK_SKIP_PIXELS),be=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let ne=0,fe=W.length;ne<fe;ne++){const Ue=W[ne],Ee=Math.floor(Ue.start/4),ue=Math.ceil(Ue.count/4),He=Ee%v.width,U=Math.floor(Ee/v.width),ie=ue,ae=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,He),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,He,U,ie,ae,z,Y,v.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,se),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Se),n.pixelStorei(n.UNPACK_SKIP_ROWS,be)}}function j(R,v,z){let Y=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=n.TEXTURE_3D);const Z=pt(R,v),W=v.source;t.bindTexture(Y,R.__webglTexture,n.TEXTURE0+z);const Te=i.get(W);if(W.version!==Te.__version||Z===!0){t.activeTexture(n.TEXTURE0+z);const se=it.getPrimaries(it.workingColorSpace),Se=v.colorSpace===wi?null:it.getPrimaries(v.colorSpace),be=v.colorSpace===wi||se===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let ne=x(v.image,!1,r.maxTextureSize);ne=Gt(v,ne);const fe=s.convert(v.format,v.colorSpace),Ue=s.convert(v.type);let Ee=b(v.internalFormat,fe,Ue,v.colorSpace,v.isVideoTexture);Ke(Y,v);let ue;const He=v.mipmaps,U=v.isVideoTexture!==!0,ie=Te.__version===void 0||Z===!0,ae=W.dataReady,ge=C(v,ne);if(v.isDepthTexture)Ee=M(v.format===Bs,v.type),ie&&(U?t.texStorage2D(n.TEXTURE_2D,1,Ee,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,Ee,ne.width,ne.height,0,fe,Ue,null));else if(v.isDataTexture)if(He.length>0){U&&ie&&t.texStorage2D(n.TEXTURE_2D,ge,Ee,He[0].width,He[0].height);for(let ee=0,K=He.length;ee<K;ee++)ue=He[ee],U?ae&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ue.width,ue.height,fe,Ue,ue.data):t.texImage2D(n.TEXTURE_2D,ee,Ee,ue.width,ue.height,0,fe,Ue,ue.data);v.generateMipmaps=!1}else U?(ie&&t.texStorage2D(n.TEXTURE_2D,ge,Ee,ne.width,ne.height),ae&&st(v,ne,fe,Ue)):t.texImage2D(n.TEXTURE_2D,0,Ee,ne.width,ne.height,0,fe,Ue,ne.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){U&&ie&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,Ee,He[0].width,He[0].height,ne.depth);for(let ee=0,K=He.length;ee<K;ee++)if(ue=He[ee],v.format!==Vn)if(fe!==null)if(U){if(ae)if(v.layerUpdates.size>0){const xe=id(ue.width,ue.height,v.format,v.type);for(const Be of v.layerUpdates){const mt=ue.data.subarray(Be*xe/ue.data.BYTES_PER_ELEMENT,(Be+1)*xe/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,Be,ue.width,ue.height,1,fe,mt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,ue.width,ue.height,ne.depth,fe,ue.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,Ee,ue.width,ue.height,ne.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ae&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,ue.width,ue.height,ne.depth,fe,Ue,ue.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,Ee,ue.width,ue.height,ne.depth,0,fe,Ue,ue.data)}else{U&&ie&&t.texStorage2D(n.TEXTURE_2D,ge,Ee,He[0].width,He[0].height);for(let ee=0,K=He.length;ee<K;ee++)ue=He[ee],v.format!==Vn?fe!==null?U?ae&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,ue.width,ue.height,fe,ue.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,Ee,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ae&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ue.width,ue.height,fe,Ue,ue.data):t.texImage2D(n.TEXTURE_2D,ee,Ee,ue.width,ue.height,0,fe,Ue,ue.data)}else if(v.isDataArrayTexture)if(U){if(ie&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,Ee,ne.width,ne.height,ne.depth),ae)if(v.layerUpdates.size>0){const ee=id(ne.width,ne.height,v.format,v.type);for(const K of v.layerUpdates){const xe=ne.data.subarray(K*ee/ne.data.BYTES_PER_ELEMENT,(K+1)*ee/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,ne.width,ne.height,1,fe,Ue,xe)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,fe,Ue,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,ne.width,ne.height,ne.depth,0,fe,Ue,ne.data);else if(v.isData3DTexture)U?(ie&&t.texStorage3D(n.TEXTURE_3D,ge,Ee,ne.width,ne.height,ne.depth),ae&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,fe,Ue,ne.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,ne.width,ne.height,ne.depth,0,fe,Ue,ne.data);else if(v.isFramebufferTexture){if(ie)if(U)t.texStorage2D(n.TEXTURE_2D,ge,Ee,ne.width,ne.height);else{let ee=ne.width,K=ne.height;for(let xe=0;xe<ge;xe++)t.texImage2D(n.TEXTURE_2D,xe,Ee,ee,K,0,fe,Ue,null),ee>>=1,K>>=1}}else if(He.length>0){if(U&&ie){const ee=Ct(He[0]);t.texStorage2D(n.TEXTURE_2D,ge,Ee,ee.width,ee.height)}for(let ee=0,K=He.length;ee<K;ee++)ue=He[ee],U?ae&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,fe,Ue,ue):t.texImage2D(n.TEXTURE_2D,ee,Ee,fe,Ue,ue);v.generateMipmaps=!1}else if(U){if(ie){const ee=Ct(ne);t.texStorage2D(n.TEXTURE_2D,ge,Ee,ee.width,ee.height)}ae&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe,Ue,ne)}else t.texImage2D(n.TEXTURE_2D,0,Ee,fe,Ue,ne);m(v)&&h(Y),Te.__version=W.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function J(R,v,z){if(v.image.length!==6)return;const Y=pt(R,v),Z=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+z);const W=i.get(Z);if(Z.version!==W.__version||Y===!0){t.activeTexture(n.TEXTURE0+z);const Te=it.getPrimaries(it.workingColorSpace),se=v.colorSpace===wi?null:it.getPrimaries(v.colorSpace),Se=v.colorSpace===wi||Te===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const be=v.isCompressedTexture||v.image[0].isCompressedTexture,ne=v.image[0]&&v.image[0].isDataTexture,fe=[];for(let K=0;K<6;K++)!be&&!ne?fe[K]=x(v.image[K],!0,r.maxCubemapSize):fe[K]=ne?v.image[K].image:v.image[K],fe[K]=Gt(v,fe[K]);const Ue=fe[0],Ee=s.convert(v.format,v.colorSpace),ue=s.convert(v.type),He=b(v.internalFormat,Ee,ue,v.colorSpace),U=v.isVideoTexture!==!0,ie=W.__version===void 0||Y===!0,ae=Z.dataReady;let ge=C(v,Ue);Ke(n.TEXTURE_CUBE_MAP,v);let ee;if(be){U&&ie&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,He,Ue.width,Ue.height);for(let K=0;K<6;K++){ee=fe[K].mipmaps;for(let xe=0;xe<ee.length;xe++){const Be=ee[xe];v.format!==Vn?Ee!==null?U?ae&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,xe,0,0,Be.width,Be.height,Ee,Be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,xe,He,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,xe,0,0,Be.width,Be.height,Ee,ue,Be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,xe,He,Be.width,Be.height,0,Ee,ue,Be.data)}}}else{if(ee=v.mipmaps,U&&ie){ee.length>0&&ge++;const K=Ct(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,He,K.width,K.height)}for(let K=0;K<6;K++)if(ne){U?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,fe[K].width,fe[K].height,Ee,ue,fe[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,He,fe[K].width,fe[K].height,0,Ee,ue,fe[K].data);for(let xe=0;xe<ee.length;xe++){const mt=ee[xe].image[K].image;U?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,xe+1,0,0,mt.width,mt.height,Ee,ue,mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,xe+1,He,mt.width,mt.height,0,Ee,ue,mt.data)}}else{U?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ee,ue,fe[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,He,Ee,ue,fe[K]);for(let xe=0;xe<ee.length;xe++){const Be=ee[xe];U?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,xe+1,0,0,Ee,ue,Be.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,xe+1,He,Ee,ue,Be.image[K])}}}m(v)&&h(n.TEXTURE_CUBE_MAP),W.__version=Z.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function _e(R,v,z,Y,Z,W){const Te=s.convert(z.format,z.colorSpace),se=s.convert(z.type),Se=b(z.internalFormat,Te,se,z.colorSpace),be=i.get(v),ne=i.get(z);if(ne.__renderTarget=v,!be.__hasExternalTextures){const fe=Math.max(1,v.width>>W),Ue=Math.max(1,v.height>>W);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,W,Se,fe,Ue,v.depth,0,Te,se,null):t.texImage2D(Z,W,Se,fe,Ue,0,Te,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),ye(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,Z,ne.__webglTexture,0,Mt(v)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,Z,ne.__webglTexture,W),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(R,v,z){if(n.bindRenderbuffer(n.RENDERBUFFER,R),v.depthBuffer){const Y=v.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,W=M(v.stencilBuffer,Z),Te=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=Mt(v);ye(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,W,v.width,v.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,se,W,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,W,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,R)}else{const Y=v.textures;for(let Z=0;Z<Y.length;Z++){const W=Y[Z],Te=s.convert(W.format,W.colorSpace),se=s.convert(W.type),Se=b(W.internalFormat,Te,se,W.colorSpace),be=Mt(v);z&&ye(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,be,Se,v.width,v.height):ye(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be,Se,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Se,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function we(R,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(v.depthTexture);Y.__renderTarget=v,(!Y.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),$(v.depthTexture,0);const Z=Y.__webglTexture,W=Mt(v);if(v.depthTexture.format===Os)ye(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(v.depthTexture.format===Bs)ye(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function tt(R){const v=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){const Y=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){const Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=Y}if(R.depthTexture&&!v.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const Y=R.texture.mipmaps;Y&&Y.length>0?we(v.__webglFramebuffer[0],R):we(v.__webglFramebuffer,R)}else if(z){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=n.createRenderbuffer(),Oe(v.__webglDepthbuffer[Y],R,!1);else{const Z=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,W)}}else{const Y=R.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Oe(v.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,W)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Zt(R,v,z){const Y=i.get(R);v!==void 0&&_e(Y.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&tt(R)}function P(R){const v=R.texture,z=i.get(R),Y=i.get(v);R.addEventListener("dispose",L);const Z=R.textures,W=R.isWebGLCubeRenderTarget===!0,Te=Z.length>1;if(Te||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=v.version,a.memory.textures++),W){z.__webglFramebuffer=[];for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer[se]=[];for(let Se=0;Se<v.mipmaps.length;Se++)z.__webglFramebuffer[se][Se]=n.createFramebuffer()}else z.__webglFramebuffer[se]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer=[];for(let se=0;se<v.mipmaps.length;se++)z.__webglFramebuffer[se]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(Te)for(let se=0,Se=Z.length;se<Se;se++){const be=i.get(Z[se]);be.__webglTexture===void 0&&(be.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&ye(R)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let se=0;se<Z.length;se++){const Se=Z[se];z.__webglColorRenderbuffer[se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[se]);const be=s.convert(Se.format,Se.colorSpace),ne=s.convert(Se.type),fe=b(Se.internalFormat,be,ne,Se.colorSpace,R.isXRRenderTarget===!0),Ue=Mt(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,fe,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,z.__webglColorRenderbuffer[se])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Oe(z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Ke(n.TEXTURE_CUBE_MAP,v);for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0)for(let Se=0;Se<v.mipmaps.length;Se++)_e(z.__webglFramebuffer[se][Se],R,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se);else _e(z.__webglFramebuffer[se],R,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(v)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let se=0,Se=Z.length;se<Se;se++){const be=Z[se],ne=i.get(be);let fe=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,ne.__webglTexture),Ke(fe,be),_e(z.__webglFramebuffer,R,be,n.COLOR_ATTACHMENT0+se,fe,0),m(be)&&h(fe)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(se=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,Y.__webglTexture),Ke(se,v),v.mipmaps&&v.mipmaps.length>0)for(let Se=0;Se<v.mipmaps.length;Se++)_e(z.__webglFramebuffer[Se],R,v,n.COLOR_ATTACHMENT0,se,Se);else _e(z.__webglFramebuffer,R,v,n.COLOR_ATTACHMENT0,se,0);m(v)&&h(se),t.unbindTexture()}R.depthBuffer&&tt(R)}function xt(R){const v=R.textures;for(let z=0,Y=v.length;z<Y;z++){const Z=v[z];if(m(Z)){const W=T(R),Te=i.get(Z).__webglTexture;t.bindTexture(W,Te),h(W),t.unbindTexture()}}}const ke=[],Ne=[];function Me(R){if(R.samples>0){if(ye(R)===!1){const v=R.textures,z=R.width,Y=R.height;let Z=n.COLOR_BUFFER_BIT;const W=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(R),se=v.length>1;if(se)for(let be=0;be<v.length;be++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const Se=R.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let be=0;be<v.length;be++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),se){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[be]);const ne=i.get(v[be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ne,0)}n.blitFramebuffer(0,0,z,Y,0,0,z,Y,Z,n.NEAREST),l===!0&&(ke.length=0,Ne.length=0,ke.push(n.COLOR_ATTACHMENT0+be),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ke.push(W),Ne.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ne)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ke))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),se)for(let be=0;be<v.length;be++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,Te.__webglColorRenderbuffer[be]);const ne=i.get(v[be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const v=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Mt(R){return Math.min(r.maxSamples,R.samples)}function ye(R){const v=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function We(R){const v=a.render.frame;u.get(R)!==v&&(u.set(R,v),R.update())}function Gt(R,v){const z=R.colorSpace,Y=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==ts&&z!==wi&&(it.getTransfer(z)===dt?(Y!==Vn||Z!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),v}function Ct(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=B,this.setTexture2D=$,this.setTexture2DArray=q,this.setTexture3D=re,this.setTextureCube=V,this.rebindTextures=Zt,this.setupRenderTarget=P,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=ye}function yx(n,e){function t(i,r=wi){let s;const a=it.getTransfer(r);if(i===Qn)return n.UNSIGNED_BYTE;if(i===gc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===_c)return n.UNSIGNED_SHORT_5_5_5_1;if(i===af)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===of)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===rf)return n.BYTE;if(i===sf)return n.SHORT;if(i===Ns)return n.UNSIGNED_SHORT;if(i===mc)return n.INT;if(i===lr)return n.UNSIGNED_INT;if(i===Kn)return n.FLOAT;if(i===qs)return n.HALF_FLOAT;if(i===lf)return n.ALPHA;if(i===cf)return n.RGB;if(i===Vn)return n.RGBA;if(i===Os)return n.DEPTH_COMPONENT;if(i===Bs)return n.DEPTH_STENCIL;if(i===vc)return n.RED;if(i===xc)return n.RED_INTEGER;if(i===uf)return n.RG;if(i===Mc)return n.RG_INTEGER;if(i===yc)return n.RGBA_INTEGER;if(i===Oa||i===Ba||i===za||i===ka)if(a===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Oa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Oa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ba)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===za)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ka)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yl||i===Sl||i===bl||i===El)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===yl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===El)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Tl||i===wl||i===Al)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Tl||i===wl)return a===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Al)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Rl||i===Cl||i===Pl||i===Ll||i===Dl||i===Il||i===Ul||i===Nl||i===Fl||i===Ol||i===Bl||i===zl||i===kl||i===Gl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Rl)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Cl)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Pl)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ll)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dl)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Il)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ul)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Nl)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fl)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ol)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Bl)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zl)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kl)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Gl)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Hl||i===Vl||i===Wl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Hl)return a===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xl||i===ql||i===Yl||i===$l)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Xl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ql)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Yl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$l)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Sx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bx=`
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

}`;class Ex{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Tf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new mi({vertexShader:Sx,fragmentShader:bx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new oe(new ro(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Tx extends as{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,g=null;const x=typeof XRWebGLBinding<"u",m=new Ex,h={},T=t.getContextAttributes();let b=null,M=null;const C=[],A=[],L=new Ie;let D=null;const E=new Ln;E.viewport=new Rt;const S=new Ln;S.viewport=new Rt;const I=[E,S],B=new Xm;let H=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let J=C[j];return J===void 0&&(J=new Ho,C[j]=J),J.getTargetRaySpace()},this.getControllerGrip=function(j){let J=C[j];return J===void 0&&(J=new Ho,C[j]=J),J.getGripSpace()},this.getHand=function(j){let J=C[j];return J===void 0&&(J=new Ho,C[j]=J),J.getHandSpace()};function $(j){const J=A.indexOf(j.inputSource);if(J===-1)return;const _e=C[J];_e!==void 0&&(_e.update(j.inputSource,j.frame,c||a),_e.dispatchEvent({type:j.type,data:j.inputSource}))}function q(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",re);for(let j=0;j<C.length;j++){const J=A[j];J!==null&&(A[j]=null,C[j].disconnect(J))}H=null,X=null,m.reset();for(const j in h)delete h[j];e.setRenderTarget(b),p=null,f=null,d=null,r=null,M=null,st.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",q),r.addEventListener("inputsourceschange",re),T.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(L),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Oe=null,we=null;T.depth&&(we=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=T.stencil?Bs:Os,Oe=T.stencil?Fs:lr);const tt={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(tt),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new cr(f.textureWidth,f.textureHeight,{format:Vn,type:Qn,depthTexture:new Ef(f.textureWidth,f.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const _e={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,_e),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new cr(p.framebufferWidth,p.framebufferHeight,{format:Vn,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),st.setContext(r),st.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function re(j){for(let J=0;J<j.removed.length;J++){const _e=j.removed[J],Oe=A.indexOf(_e);Oe>=0&&(A[Oe]=null,C[Oe].disconnect(_e))}for(let J=0;J<j.added.length;J++){const _e=j.added[J];let Oe=A.indexOf(_e);if(Oe===-1){for(let tt=0;tt<C.length;tt++)if(tt>=A.length){A.push(_e),Oe=tt;break}else if(A[tt]===null){A[tt]=_e,Oe=tt;break}if(Oe===-1)break}const we=C[Oe];we&&we.connect(_e)}}const V=new N,ce=new N;function pe(j,J,_e){V.setFromMatrixPosition(J.matrixWorld),ce.setFromMatrixPosition(_e.matrixWorld);const Oe=V.distanceTo(ce),we=J.projectionMatrix.elements,tt=_e.projectionMatrix.elements,Zt=we[14]/(we[10]-1),P=we[14]/(we[10]+1),xt=(we[9]+1)/we[5],ke=(we[9]-1)/we[5],Ne=(we[8]-1)/we[0],Me=(tt[8]+1)/tt[0],Mt=Zt*Ne,ye=Zt*Me,We=Oe/(-Ne+Me),Gt=We*-Ne;if(J.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Gt),j.translateZ(We),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),we[10]===-1)j.projectionMatrix.copy(J.projectionMatrix),j.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Ct=Zt+We,R=P+We,v=Mt-Gt,z=ye+(Oe-Gt),Y=xt*P/R*Ct,Z=ke*P/R*Ct;j.projectionMatrix.makePerspective(v,z,Y,Z,Ct,R),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Ae(j,J){J===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(J.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let J=j.near,_e=j.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(_e=m.depthFar)),B.near=S.near=E.near=J,B.far=S.far=E.far=_e,(H!==B.near||X!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),H=B.near,X=B.far),B.layers.mask=j.layers.mask|6,E.layers.mask=B.layers.mask&3,S.layers.mask=B.layers.mask&5;const Oe=j.parent,we=B.cameras;Ae(B,Oe);for(let tt=0;tt<we.length;tt++)Ae(we[tt],Oe);we.length===2?pe(B,E,S):B.projectionMatrix.copy(E.projectionMatrix),Ke(j,B,Oe)};function Ke(j,J,_e){_e===null?j.matrix.copy(J.matrixWorld):(j.matrix.copy(_e.matrixWorld),j.matrix.invert(),j.matrix.multiply(J.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(J.projectionMatrix),j.projectionMatrixInverse.copy(J.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=zs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(j){return h[j]};let pt=null;function vt(j,J){if(u=J.getViewerPose(c||a),g=J,u!==null){const _e=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Oe=!1;_e.length!==B.cameras.length&&(B.cameras.length=0,Oe=!0);for(let P=0;P<_e.length;P++){const xt=_e[P];let ke=null;if(p!==null)ke=p.getViewport(xt);else{const Me=d.getViewSubImage(f,xt);ke=Me.viewport,P===0&&(e.setRenderTargetTextures(M,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(M))}let Ne=I[P];Ne===void 0&&(Ne=new Ln,Ne.layers.enable(P),Ne.viewport=new Rt,I[P]=Ne),Ne.matrix.fromArray(xt.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(xt.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(ke.x,ke.y,ke.width,ke.height),P===0&&(B.matrix.copy(Ne.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Oe===!0&&B.cameras.push(Ne)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){d=i.getBinding();const P=d.getDepthInformation(_e[0]);P&&P.isValid&&P.texture&&m.init(P,r.renderState)}if(we&&we.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let P=0;P<_e.length;P++){const xt=_e[P].camera;if(xt){let ke=h[xt];ke||(ke=new Tf,h[xt]=ke);const Ne=d.getCameraImage(xt);ke.sourceTexture=Ne}}}}for(let _e=0;_e<C.length;_e++){const Oe=A[_e],we=C[_e];Oe!==null&&we!==void 0&&we.update(Oe,J,c||a)}pt&&pt(j,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}const st=new Rf;st.setAnimationLoop(vt),this.setAnimationLoop=function(j){pt=j},this.dispose=function(){}}}const Yi=new ei,wx=new rt;function Ax(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,vf(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,T,b,M){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,M)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),x(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,T,b):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===cn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===cn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const T=e.get(h),b=T.envMap,M=T.envMapRotation;b&&(m.envMap.value=b,Yi.copy(M),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),m.envMapRotation.value.setFromMatrix4(wx.makeRotationFromEuler(Yi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,T,b){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*T,m.scale.value=b*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,T){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===cn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const T=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Rx(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,b){const M=b.program;i.uniformBlockBinding(T,M)}function c(T,b){let M=r[T.id];M===void 0&&(g(T),M=u(T),r[T.id]=M,T.addEventListener("dispose",m));const C=b.program;i.updateUBOMapping(T,C);const A=e.render.frame;s[T.id]!==A&&(f(T),s[T.id]=A)}function u(T){const b=d();T.__bindingPointIndex=b;const M=n.createBuffer(),C=T.__size,A=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,C,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,M),M}function d(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const b=r[T.id],M=T.uniforms,C=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let A=0,L=M.length;A<L;A++){const D=Array.isArray(M[A])?M[A]:[M[A]];for(let E=0,S=D.length;E<S;E++){const I=D[E];if(p(I,A,E,C)===!0){const B=I.__offset,H=Array.isArray(I.value)?I.value:[I.value];let X=0;for(let $=0;$<H.length;$++){const q=H[$],re=x(q);typeof q=="number"||typeof q=="boolean"?(I.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,B+X,I.__data)):q.isMatrix3?(I.__data[0]=q.elements[0],I.__data[1]=q.elements[1],I.__data[2]=q.elements[2],I.__data[3]=0,I.__data[4]=q.elements[3],I.__data[5]=q.elements[4],I.__data[6]=q.elements[5],I.__data[7]=0,I.__data[8]=q.elements[6],I.__data[9]=q.elements[7],I.__data[10]=q.elements[8],I.__data[11]=0):(q.toArray(I.__data,X),X+=re.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(T,b,M,C){const A=T.value,L=b+"_"+M;if(C[L]===void 0)return typeof A=="number"||typeof A=="boolean"?C[L]=A:C[L]=A.clone(),!0;{const D=C[L];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return C[L]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(T){const b=T.uniforms;let M=0;const C=16;for(let L=0,D=b.length;L<D;L++){const E=Array.isArray(b[L])?b[L]:[b[L]];for(let S=0,I=E.length;S<I;S++){const B=E[S],H=Array.isArray(B.value)?B.value:[B.value];for(let X=0,$=H.length;X<$;X++){const q=H[X],re=x(q),V=M%C,ce=V%re.boundary,pe=V+ce;M+=ce,pe!==0&&C-pe<re.storage&&(M+=C-pe),B.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=re.storage}}}const A=M%C;return A>0&&(M+=C-A),T.__size=M,T.__cache={},this}function x(T){const b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),b}function m(T){const b=T.target;b.removeEventListener("dispose",m);const M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function h(){for(const T in r)n.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}class Cx{constructor(e={}){const{canvas:t=im(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,h=null;const T=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let C=!1;this._outputColorSpace=Pn;let A=0,L=0,D=null,E=-1,S=null;const I=new Rt,B=new Rt;let H=null;const X=new Le(0);let $=0,q=t.width,re=t.height,V=1,ce=null,pe=null;const Ae=new Rt(0,0,q,re),Ke=new Rt(0,0,q,re);let pt=!1;const vt=new Rc;let st=!1,j=!1;const J=new rt,_e=new N,Oe=new Rt,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function Zt(){return D===null?V:1}let P=i;function xt(y,F){return t.getContext(y,F)}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hc}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",ee,!1),P===null){const F="webgl2";if(P=xt(F,y),P===null)throw xt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let ke,Ne,Me,Mt,ye,We,Gt,Ct,R,v,z,Y,Z,W,Te,se,Se,be,ne,fe,Ue,Ee,ue,He;function U(){ke=new z_(P),ke.init(),Ee=new yx(P,ke),Ne=new D_(P,ke,e,Ee),Me=new xx(P,ke),Ne.reversedDepthBuffer&&f&&Me.buffers.depth.setReversed(!0),Mt=new H_(P),ye=new ax,We=new Mx(P,ke,Me,ye,Ne,Ee,Mt),Gt=new U_(M),Ct=new B_(M),R=new $m(P),ue=new P_(P,R),v=new k_(P,R,Mt,ue),z=new W_(P,v,R,Mt),ne=new V_(P,Ne,We),se=new I_(ye),Y=new sx(M,Gt,Ct,ke,Ne,ue,se),Z=new Ax(M,ye),W=new lx,Te=new px(ke),be=new C_(M,Gt,Ct,Me,z,p,l),Se=new _x(M,z,Ne),He=new Rx(P,Mt,Ne,Me),fe=new L_(P,ke,Mt),Ue=new G_(P,ke,Mt),Mt.programs=Y.programs,M.capabilities=Ne,M.extensions=ke,M.properties=ye,M.renderLists=W,M.shadowMap=Se,M.state=Me,M.info=Mt}U();const ie=new Tx(M,P);this.xr=ie,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const y=ke.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=ke.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(y){y!==void 0&&(V=y,this.setSize(q,re,!1))},this.getSize=function(y){return y.set(q,re)},this.setSize=function(y,F,k=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=y,re=F,t.width=Math.floor(y*V),t.height=Math.floor(F*V),k===!0&&(t.style.width=y+"px",t.style.height=F+"px"),this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(q*V,re*V).floor()},this.setDrawingBufferSize=function(y,F,k){q=y,re=F,V=k,t.width=Math.floor(y*k),t.height=Math.floor(F*k),this.setViewport(0,0,y,F)},this.getCurrentViewport=function(y){return y.copy(I)},this.getViewport=function(y){return y.copy(Ae)},this.setViewport=function(y,F,k,G){y.isVector4?Ae.set(y.x,y.y,y.z,y.w):Ae.set(y,F,k,G),Me.viewport(I.copy(Ae).multiplyScalar(V).round())},this.getScissor=function(y){return y.copy(Ke)},this.setScissor=function(y,F,k,G){y.isVector4?Ke.set(y.x,y.y,y.z,y.w):Ke.set(y,F,k,G),Me.scissor(B.copy(Ke).multiplyScalar(V).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(y){Me.setScissorTest(pt=y)},this.setOpaqueSort=function(y){ce=y},this.setTransparentSort=function(y){pe=y},this.getClearColor=function(y){return y.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(y=!0,F=!0,k=!0){let G=0;if(y){let O=!1;if(D!==null){const te=D.texture.format;O=te===yc||te===Mc||te===xc}if(O){const te=D.texture.type,de=te===Qn||te===lr||te===Ns||te===Fs||te===gc||te===_c,ve=be.getClearColor(),me=be.getClearAlpha(),De=ve.r,Fe=ve.g,Re=ve.b;de?(g[0]=De,g[1]=Fe,g[2]=Re,g[3]=me,P.clearBufferuiv(P.COLOR,0,g)):(x[0]=De,x[1]=Fe,x[2]=Re,x[3]=me,P.clearBufferiv(P.COLOR,0,x))}else G|=P.COLOR_BUFFER_BIT}F&&(G|=P.DEPTH_BUFFER_BIT),k&&(G|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),be.dispose(),W.dispose(),Te.dispose(),ye.dispose(),Gt.dispose(),Ct.dispose(),z.dispose(),ue.dispose(),He.dispose(),Y.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Yn),ie.removeEventListener("sessionend",gu),ki.stop()};function ae(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const y=Mt.autoReset,F=Se.enabled,k=Se.autoUpdate,G=Se.needsUpdate,O=Se.type;U(),Mt.autoReset=y,Se.enabled=F,Se.autoUpdate=k,Se.needsUpdate=G,Se.type=O}function ee(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function K(y){const F=y.target;F.removeEventListener("dispose",K),xe(F)}function xe(y){Be(y),ye.remove(y)}function Be(y){const F=ye.get(y).programs;F!==void 0&&(F.forEach(function(k){Y.releaseProgram(k)}),y.isShaderMaterial&&Y.releaseShaderCache(y))}this.renderBufferDirect=function(y,F,k,G,O,te){F===null&&(F=we);const de=O.isMesh&&O.matrixWorld.determinant()<0,ve=Xh(y,F,k,G,O);Me.setMaterial(G,de);let me=k.index,De=1;if(G.wireframe===!0){if(me=v.getWireframeAttribute(k),me===void 0)return;De=2}const Fe=k.drawRange,Re=k.attributes.position;let Qe=Fe.start*De,ut=(Fe.start+Fe.count)*De;te!==null&&(Qe=Math.max(Qe,te.start*De),ut=Math.min(ut,(te.start+te.count)*De)),me!==null?(Qe=Math.max(Qe,0),ut=Math.min(ut,me.count)):Re!=null&&(Qe=Math.max(Qe,0),ut=Math.min(ut,Re.count));const At=ut-Qe;if(At<0||At===1/0)return;ue.setup(O,G,ve,k,me);let gt,ht=fe;if(me!==null&&(gt=R.get(me),ht=Ue,ht.setIndex(gt)),O.isMesh)G.wireframe===!0?(Me.setLineWidth(G.wireframeLinewidth*Zt()),ht.setMode(P.LINES)):ht.setMode(P.TRIANGLES);else if(O.isLine){let Ce=G.linewidth;Ce===void 0&&(Ce=1),Me.setLineWidth(Ce*Zt()),O.isLineSegments?ht.setMode(P.LINES):O.isLineLoop?ht.setMode(P.LINE_LOOP):ht.setMode(P.LINE_STRIP)}else O.isPoints?ht.setMode(P.POINTS):O.isSprite&&ht.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ks("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))ht.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ce=O._multiDrawStarts,bt=O._multiDrawCounts,nt=O._multiDrawCount,_n=me?R.get(me).bytesPerElement:1,yr=ye.get(G).currentProgram.getUniforms();for(let vn=0;vn<nt;vn++)yr.setValue(P,"_gl_DrawID",vn),ht.render(Ce[vn]/_n,bt[vn])}else if(O.isInstancedMesh)ht.renderInstances(Qe,At,O.count);else if(k.isInstancedBufferGeometry){const Ce=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,bt=Math.min(k.instanceCount,Ce);ht.renderInstances(Qe,At,bt)}else ht.render(Qe,At)};function mt(y,F,k){y.transparent===!0&&y.side===$t&&y.forceSinglePass===!1?(y.side=cn,y.needsUpdate=!0,ea(y,F,k),y.side=Di,y.needsUpdate=!0,ea(y,F,k),y.side=$t):ea(y,F,k)}this.compile=function(y,F,k=null){k===null&&(k=y),h=Te.get(k),h.init(F),b.push(h),k.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),y!==k&&y.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),h.setupLights();const G=new Set;return y.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const te=O.material;if(te)if(Array.isArray(te))for(let de=0;de<te.length;de++){const ve=te[de];mt(ve,k,O),G.add(ve)}else mt(te,k,O),G.add(te)}),h=b.pop(),G},this.compileAsync=function(y,F,k=null){const G=this.compile(y,F,k);return new Promise(O=>{function te(){if(G.forEach(function(de){ye.get(de).currentProgram.isReady()&&G.delete(de)}),G.size===0){O(y);return}setTimeout(te,10)}ke.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let at=null;function ii(y){at&&at(y)}function Yn(){ki.stop()}function gu(){ki.start()}const ki=new Rf;ki.setAnimationLoop(ii),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(y){at=y,ie.setAnimationLoop(y),y===null?ki.stop():ki.start()},ie.addEventListener("sessionstart",Yn),ie.addEventListener("sessionend",gu),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(F),F=ie.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,F,D),h=Te.get(y,b.length),h.init(F),b.push(h),J.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),vt.setFromProjectionMatrix(J,Zn,F.reversedDepth),j=this.localClippingEnabled,st=se.init(this.clippingPlanes,j),m=W.get(y,T.length),m.init(),T.push(m),ie.enabled===!0&&ie.isPresenting===!0){const te=M.xr.getDepthSensingMesh();te!==null&&xo(te,F,-1/0,M.sortObjects)}xo(y,F,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(ce,pe),tt=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,tt&&be.addToRenderList(m,y),this.info.render.frame++,st===!0&&se.beginShadows();const k=h.state.shadowsArray;Se.render(k,y,F),st===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,O=m.transmissive;if(h.setupLights(),F.isArrayCamera){const te=F.cameras;if(O.length>0)for(let de=0,ve=te.length;de<ve;de++){const me=te[de];vu(G,O,y,me)}tt&&be.render(y);for(let de=0,ve=te.length;de<ve;de++){const me=te[de];_u(m,y,me,me.viewport)}}else O.length>0&&vu(G,O,y,F),tt&&be.render(y),_u(m,y,F);D!==null&&L===0&&(We.updateMultisampleRenderTarget(D),We.updateRenderTargetMipmap(D)),y.isScene===!0&&y.onAfterRender(M,y,F),ue.resetDefaultState(),E=-1,S=null,b.pop(),b.length>0?(h=b[b.length-1],st===!0&&se.setGlobalState(M.clippingPlanes,h.state.camera)):h=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function xo(y,F,k,G){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)k=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(F);else if(y.isLight)h.pushLight(y),y.castShadow&&h.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||vt.intersectsSprite(y)){G&&Oe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(J);const de=z.update(y),ve=y.material;ve.visible&&m.push(y,de,ve,k,Oe.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||vt.intersectsObject(y))){const de=z.update(y),ve=y.material;if(G&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Oe.copy(y.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Oe.copy(de.boundingSphere.center)),Oe.applyMatrix4(y.matrixWorld).applyMatrix4(J)),Array.isArray(ve)){const me=de.groups;for(let De=0,Fe=me.length;De<Fe;De++){const Re=me[De],Qe=ve[Re.materialIndex];Qe&&Qe.visible&&m.push(y,de,Qe,k,Oe.z,Re)}}else ve.visible&&m.push(y,de,ve,k,Oe.z,null)}}const te=y.children;for(let de=0,ve=te.length;de<ve;de++)xo(te[de],F,k,G)}function _u(y,F,k,G){const O=y.opaque,te=y.transmissive,de=y.transparent;h.setupLightsView(k),st===!0&&se.setGlobalState(M.clippingPlanes,k),G&&Me.viewport(I.copy(G)),O.length>0&&Qs(O,F,k),te.length>0&&Qs(te,F,k),de.length>0&&Qs(de,F,k),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function vu(y,F,k,G){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[G.id]===void 0&&(h.state.transmissionRenderTarget[G.id]=new cr(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?qs:Qn,minFilter:ir,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const te=h.state.transmissionRenderTarget[G.id],de=G.viewport||I;te.setSize(de.z*M.transmissionResolutionScale,de.w*M.transmissionResolutionScale);const ve=M.getRenderTarget(),me=M.getActiveCubeFace(),De=M.getActiveMipmapLevel();M.setRenderTarget(te),M.getClearColor(X),$=M.getClearAlpha(),$<1&&M.setClearColor(16777215,.5),M.clear(),tt&&be.render(k);const Fe=M.toneMapping;M.toneMapping=Pi;const Re=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),h.setupLightsView(G),st===!0&&se.setGlobalState(M.clippingPlanes,G),Qs(y,k,G),We.updateMultisampleRenderTarget(te),We.updateRenderTargetMipmap(te),ke.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let ut=0,At=F.length;ut<At;ut++){const gt=F[ut],ht=gt.object,Ce=gt.geometry,bt=gt.material,nt=gt.group;if(bt.side===$t&&ht.layers.test(G.layers)){const _n=bt.side;bt.side=cn,bt.needsUpdate=!0,xu(ht,k,G,Ce,bt,nt),bt.side=_n,bt.needsUpdate=!0,Qe=!0}}Qe===!0&&(We.updateMultisampleRenderTarget(te),We.updateRenderTargetMipmap(te))}M.setRenderTarget(ve,me,De),M.setClearColor(X,$),Re!==void 0&&(G.viewport=Re),M.toneMapping=Fe}function Qs(y,F,k){const G=F.isScene===!0?F.overrideMaterial:null;for(let O=0,te=y.length;O<te;O++){const de=y[O],ve=de.object,me=de.geometry,De=de.group;let Fe=de.material;Fe.allowOverride===!0&&G!==null&&(Fe=G),ve.layers.test(k.layers)&&xu(ve,F,k,me,Fe,De)}}function xu(y,F,k,G,O,te){y.onBeforeRender(M,F,k,G,O,te),y.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),O.onBeforeRender(M,F,k,G,y,te),O.transparent===!0&&O.side===$t&&O.forceSinglePass===!1?(O.side=cn,O.needsUpdate=!0,M.renderBufferDirect(k,F,G,O,y,te),O.side=Di,O.needsUpdate=!0,M.renderBufferDirect(k,F,G,O,y,te),O.side=$t):M.renderBufferDirect(k,F,G,O,y,te),y.onAfterRender(M,F,k,G,O,te)}function ea(y,F,k){F.isScene!==!0&&(F=we);const G=ye.get(y),O=h.state.lights,te=h.state.shadowsArray,de=O.state.version,ve=Y.getParameters(y,O.state,te,F,k),me=Y.getProgramCacheKey(ve);let De=G.programs;G.environment=y.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(y.isMeshStandardMaterial?Ct:Gt).get(y.envMap||G.environment),G.envMapRotation=G.environment!==null&&y.envMap===null?F.environmentRotation:y.envMapRotation,De===void 0&&(y.addEventListener("dispose",K),De=new Map,G.programs=De);let Fe=De.get(me);if(Fe!==void 0){if(G.currentProgram===Fe&&G.lightsStateVersion===de)return yu(y,ve),Fe}else ve.uniforms=Y.getUniforms(y),y.onBeforeCompile(ve,M),Fe=Y.acquireProgram(ve,me),De.set(me,Fe),G.uniforms=ve.uniforms;const Re=G.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Re.clippingPlanes=se.uniform),yu(y,ve),G.needsLights=Yh(y),G.lightsStateVersion=de,G.needsLights&&(Re.ambientLightColor.value=O.state.ambient,Re.lightProbe.value=O.state.probe,Re.directionalLights.value=O.state.directional,Re.directionalLightShadows.value=O.state.directionalShadow,Re.spotLights.value=O.state.spot,Re.spotLightShadows.value=O.state.spotShadow,Re.rectAreaLights.value=O.state.rectArea,Re.ltc_1.value=O.state.rectAreaLTC1,Re.ltc_2.value=O.state.rectAreaLTC2,Re.pointLights.value=O.state.point,Re.pointLightShadows.value=O.state.pointShadow,Re.hemisphereLights.value=O.state.hemi,Re.directionalShadowMap.value=O.state.directionalShadowMap,Re.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Re.spotShadowMap.value=O.state.spotShadowMap,Re.spotLightMatrix.value=O.state.spotLightMatrix,Re.spotLightMap.value=O.state.spotLightMap,Re.pointShadowMap.value=O.state.pointShadowMap,Re.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=Fe,G.uniformsList=null,Fe}function Mu(y){if(y.uniformsList===null){const F=y.currentProgram.getUniforms();y.uniformsList=Ga.seqWithValue(F.seq,y.uniforms)}return y.uniformsList}function yu(y,F){const k=ye.get(y);k.outputColorSpace=F.outputColorSpace,k.batching=F.batching,k.batchingColor=F.batchingColor,k.instancing=F.instancing,k.instancingColor=F.instancingColor,k.instancingMorph=F.instancingMorph,k.skinning=F.skinning,k.morphTargets=F.morphTargets,k.morphNormals=F.morphNormals,k.morphColors=F.morphColors,k.morphTargetsCount=F.morphTargetsCount,k.numClippingPlanes=F.numClippingPlanes,k.numIntersection=F.numClipIntersection,k.vertexAlphas=F.vertexAlphas,k.vertexTangents=F.vertexTangents,k.toneMapping=F.toneMapping}function Xh(y,F,k,G,O){F.isScene!==!0&&(F=we),We.resetTextureUnits();const te=F.fog,de=G.isMeshStandardMaterial?F.environment:null,ve=D===null?M.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ts,me=(G.isMeshStandardMaterial?Ct:Gt).get(G.envMap||de),De=G.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Fe=!!k.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Re=!!k.morphAttributes.position,Qe=!!k.morphAttributes.normal,ut=!!k.morphAttributes.color;let At=Pi;G.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(At=M.toneMapping);const gt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ht=gt!==void 0?gt.length:0,Ce=ye.get(G),bt=h.state.lights;if(st===!0&&(j===!0||y!==S)){const an=y===S&&G.id===E;se.setState(G,y,an)}let nt=!1;G.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==bt.state.version||Ce.outputColorSpace!==ve||O.isBatchedMesh&&Ce.batching===!1||!O.isBatchedMesh&&Ce.batching===!0||O.isBatchedMesh&&Ce.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ce.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ce.instancing===!1||!O.isInstancedMesh&&Ce.instancing===!0||O.isSkinnedMesh&&Ce.skinning===!1||!O.isSkinnedMesh&&Ce.skinning===!0||O.isInstancedMesh&&Ce.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ce.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ce.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ce.instancingMorph===!1&&O.morphTexture!==null||Ce.envMap!==me||G.fog===!0&&Ce.fog!==te||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==se.numPlanes||Ce.numIntersection!==se.numIntersection)||Ce.vertexAlphas!==De||Ce.vertexTangents!==Fe||Ce.morphTargets!==Re||Ce.morphNormals!==Qe||Ce.morphColors!==ut||Ce.toneMapping!==At||Ce.morphTargetsCount!==ht)&&(nt=!0):(nt=!0,Ce.__version=G.version);let _n=Ce.currentProgram;nt===!0&&(_n=ea(G,F,O));let yr=!1,vn=!1,hs=!1;const Et=_n.getUniforms(),wn=Ce.uniforms;if(Me.useProgram(_n.program)&&(yr=!0,vn=!0,hs=!0),G.id!==E&&(E=G.id,vn=!0),yr||S!==y){Me.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Et.setValue(P,"projectionMatrix",y.projectionMatrix),Et.setValue(P,"viewMatrix",y.matrixWorldInverse);const un=Et.map.cameraPosition;un!==void 0&&un.setValue(P,_e.setFromMatrixPosition(y.matrixWorld)),Ne.logarithmicDepthBuffer&&Et.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Et.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,vn=!0,hs=!0)}if(O.isSkinnedMesh){Et.setOptional(P,O,"bindMatrix"),Et.setOptional(P,O,"bindMatrixInverse");const an=O.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Et.setValue(P,"boneTexture",an.boneTexture,We))}O.isBatchedMesh&&(Et.setOptional(P,O,"batchingTexture"),Et.setValue(P,"batchingTexture",O._matricesTexture,We),Et.setOptional(P,O,"batchingIdTexture"),Et.setValue(P,"batchingIdTexture",O._indirectTexture,We),Et.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&Et.setValue(P,"batchingColorTexture",O._colorsTexture,We));const An=k.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&ne.update(O,k,_n),(vn||Ce.receiveShadow!==O.receiveShadow)&&(Ce.receiveShadow=O.receiveShadow,Et.setValue(P,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(wn.envMap.value=me,wn.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&F.environment!==null&&(wn.envMapIntensity.value=F.environmentIntensity),vn&&(Et.setValue(P,"toneMappingExposure",M.toneMappingExposure),Ce.needsLights&&qh(wn,hs),te&&G.fog===!0&&Z.refreshFogUniforms(wn,te),Z.refreshMaterialUniforms(wn,G,V,re,h.state.transmissionRenderTarget[y.id]),Ga.upload(P,Mu(Ce),wn,We)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ga.upload(P,Mu(Ce),wn,We),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Et.setValue(P,"center",O.center),Et.setValue(P,"modelViewMatrix",O.modelViewMatrix),Et.setValue(P,"normalMatrix",O.normalMatrix),Et.setValue(P,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const an=G.uniformsGroups;for(let un=0,Mo=an.length;un<Mo;un++){const Gi=an[un];He.update(Gi,_n),He.bind(Gi,_n)}}return _n}function qh(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function Yh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(y,F,k){const G=ye.get(y);G.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),ye.get(y.texture).__webglTexture=F,ye.get(y.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:k,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,F){const k=ye.get(y);k.__webglFramebuffer=F,k.__useDefaultFramebuffer=F===void 0};const $h=P.createFramebuffer();this.setRenderTarget=function(y,F=0,k=0){D=y,A=F,L=k;let G=!0,O=null,te=!1,de=!1;if(y){const me=ye.get(y);if(me.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(P.FRAMEBUFFER,null),G=!1;else if(me.__webglFramebuffer===void 0)We.setupRenderTarget(y);else if(me.__hasExternalTextures)We.rebindTextures(y,ye.get(y.texture).__webglTexture,ye.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Re=y.depthTexture;if(me.__boundDepthTexture!==Re){if(Re!==null&&ye.has(Re)&&(y.width!==Re.image.width||y.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");We.setupDepthRenderbuffer(y)}}const De=y.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(de=!0);const Fe=ye.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Fe[F])?O=Fe[F][k]:O=Fe[F],te=!0):y.samples>0&&We.useMultisampledRTT(y)===!1?O=ye.get(y).__webglMultisampledFramebuffer:Array.isArray(Fe)?O=Fe[k]:O=Fe,I.copy(y.viewport),B.copy(y.scissor),H=y.scissorTest}else I.copy(Ae).multiplyScalar(V).floor(),B.copy(Ke).multiplyScalar(V).floor(),H=pt;if(k!==0&&(O=$h),Me.bindFramebuffer(P.FRAMEBUFFER,O)&&G&&Me.drawBuffers(y,O),Me.viewport(I),Me.scissor(B),Me.setScissorTest(H),te){const me=ye.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,me.__webglTexture,k)}else if(de){const me=F;for(let De=0;De<y.textures.length;De++){const Fe=ye.get(y.textures[De]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+De,Fe.__webglTexture,k,me)}}else if(y!==null&&k!==0){const me=ye.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,me.__webglTexture,k)}E=-1},this.readRenderTargetPixels=function(y,F,k,G,O,te,de,ve=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=ye.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&de!==void 0&&(me=me[de]),me){Me.bindFramebuffer(P.FRAMEBUFFER,me);try{const De=y.textures[ve],Fe=De.format,Re=De.type;if(!Ne.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=y.width-G&&k>=0&&k<=y.height-O&&(y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ve),P.readPixels(F,k,G,O,Ee.convert(Fe),Ee.convert(Re),te))}finally{const De=D!==null?ye.get(D).__webglFramebuffer:null;Me.bindFramebuffer(P.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(y,F,k,G,O,te,de,ve=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=ye.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&de!==void 0&&(me=me[de]),me)if(F>=0&&F<=y.width-G&&k>=0&&k<=y.height-O){Me.bindFramebuffer(P.FRAMEBUFFER,me);const De=y.textures[ve],Fe=De.format,Re=De.type;if(!Ne.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Qe),P.bufferData(P.PIXEL_PACK_BUFFER,te.byteLength,P.STREAM_READ),y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ve),P.readPixels(F,k,G,O,Ee.convert(Fe),Ee.convert(Re),0);const ut=D!==null?ye.get(D).__webglFramebuffer:null;Me.bindFramebuffer(P.FRAMEBUFFER,ut);const At=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await rm(P,At,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Qe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,te),P.deleteBuffer(Qe),P.deleteSync(At),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,F=null,k=0){const G=Math.pow(2,-k),O=Math.floor(y.image.width*G),te=Math.floor(y.image.height*G),de=F!==null?F.x:0,ve=F!==null?F.y:0;We.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,k,0,0,de,ve,O,te),Me.unbindTexture()};const jh=P.createFramebuffer(),Kh=P.createFramebuffer();this.copyTextureToTexture=function(y,F,k=null,G=null,O=0,te=null){te===null&&(O!==0?(ks("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=O,O=0):te=0);let de,ve,me,De,Fe,Re,Qe,ut,At;const gt=y.isCompressedTexture?y.mipmaps[te]:y.image;if(k!==null)de=k.max.x-k.min.x,ve=k.max.y-k.min.y,me=k.isBox3?k.max.z-k.min.z:1,De=k.min.x,Fe=k.min.y,Re=k.isBox3?k.min.z:0;else{const An=Math.pow(2,-O);de=Math.floor(gt.width*An),ve=Math.floor(gt.height*An),y.isDataArrayTexture?me=gt.depth:y.isData3DTexture?me=Math.floor(gt.depth*An):me=1,De=0,Fe=0,Re=0}G!==null?(Qe=G.x,ut=G.y,At=G.z):(Qe=0,ut=0,At=0);const ht=Ee.convert(F.format),Ce=Ee.convert(F.type);let bt;F.isData3DTexture?(We.setTexture3D(F,0),bt=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(We.setTexture2DArray(F,0),bt=P.TEXTURE_2D_ARRAY):(We.setTexture2D(F,0),bt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);const nt=P.getParameter(P.UNPACK_ROW_LENGTH),_n=P.getParameter(P.UNPACK_IMAGE_HEIGHT),yr=P.getParameter(P.UNPACK_SKIP_PIXELS),vn=P.getParameter(P.UNPACK_SKIP_ROWS),hs=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,gt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,gt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,De),P.pixelStorei(P.UNPACK_SKIP_ROWS,Fe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Re);const Et=y.isDataArrayTexture||y.isData3DTexture,wn=F.isDataArrayTexture||F.isData3DTexture;if(y.isDepthTexture){const An=ye.get(y),an=ye.get(F),un=ye.get(An.__renderTarget),Mo=ye.get(an.__renderTarget);Me.bindFramebuffer(P.READ_FRAMEBUFFER,un.__webglFramebuffer),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,Mo.__webglFramebuffer);for(let Gi=0;Gi<me;Gi++)Et&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ye.get(y).__webglTexture,O,Re+Gi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ye.get(F).__webglTexture,te,At+Gi)),P.blitFramebuffer(De,Fe,de,ve,Qe,ut,de,ve,P.DEPTH_BUFFER_BIT,P.NEAREST);Me.bindFramebuffer(P.READ_FRAMEBUFFER,null),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(O!==0||y.isRenderTargetTexture||ye.has(y)){const An=ye.get(y),an=ye.get(F);Me.bindFramebuffer(P.READ_FRAMEBUFFER,jh),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,Kh);for(let un=0;un<me;un++)Et?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,An.__webglTexture,O,Re+un):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,An.__webglTexture,O),wn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,an.__webglTexture,te,At+un):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,an.__webglTexture,te),O!==0?P.blitFramebuffer(De,Fe,de,ve,Qe,ut,de,ve,P.COLOR_BUFFER_BIT,P.NEAREST):wn?P.copyTexSubImage3D(bt,te,Qe,ut,At+un,De,Fe,de,ve):P.copyTexSubImage2D(bt,te,Qe,ut,De,Fe,de,ve);Me.bindFramebuffer(P.READ_FRAMEBUFFER,null),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else wn?y.isDataTexture||y.isData3DTexture?P.texSubImage3D(bt,te,Qe,ut,At,de,ve,me,ht,Ce,gt.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(bt,te,Qe,ut,At,de,ve,me,ht,gt.data):P.texSubImage3D(bt,te,Qe,ut,At,de,ve,me,ht,Ce,gt):y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,te,Qe,ut,de,ve,ht,Ce,gt.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,te,Qe,ut,gt.width,gt.height,ht,gt.data):P.texSubImage2D(P.TEXTURE_2D,te,Qe,ut,de,ve,ht,Ce,gt);P.pixelStorei(P.UNPACK_ROW_LENGTH,nt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,_n),P.pixelStorei(P.UNPACK_SKIP_PIXELS,yr),P.pixelStorei(P.UNPACK_SKIP_ROWS,vn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,hs),te===0&&F.generateMipmaps&&P.generateMipmap(bt),Me.unbindTexture()},this.initRenderTarget=function(y){ye.get(y).__webglFramebuffer===void 0&&We.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?We.setTextureCube(y,0):y.isData3DTexture?We.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?We.setTexture2DArray(y,0):We.setTexture2D(y,0),Me.unbindTexture()},this.resetState=function(){A=0,L=0,D=null,Me.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}const Px={R:9},Ge={maxHp:5,moveSpeed:4.2,waterSlow:.45,dashDist:3.4,dashTime:.2,iframe:.15,tapDashMin:2,tapDashMax:5.5,lockRange:7,stamMax:3,stamRegen:.8,guardHold:.21,parryTime:.45,perfectEarly:.25,perfectLate:.15,parryArc:.36,jumpTime:.6,hurtInvuln:1.2,knockback:1.2},wt={ink:30,min:50,step:.3,baseV:18,gUp:80,gDown:160,vMin:4,vMax:48,charge:2.5,start:30,dmg:4,hitR:.8,blastR:3.2,blastDmg:6},Jn={hit:4,kill:0,parry:12,perfect:30,evade:20,jumpRing:10,crystal:25,crystalPay:5},gn={grunt:{hp:3,r:.45,speed:1.6,pref:2.1,range:3.1,pts:100,kb:5},brute:{hp:9,r:.85,speed:.85,pref:1.9,range:3.6,pts:400,kb:1.6},boulder:{hp:6,r:.6,speed:1.15,pref:3.6,range:5,pts:300,kb:2.2,rollSpeed:12,rollLen:3.4,rolls:3,followWarn:[.5,.38],armor:.34,dizzy:1.8},jelly:{hp:4,r:.55,speed:.7,pref:4,range:7.5,pts:250,kb:1,aquatic:!0,diveRange:9,pulseRange:3},archer:{hp:2.5,r:.42,speed:1.5,pref:6,range:8.5,pts:200,kb:5,shotSpeed:11,shotLen:11,flee:3},boss:{hp:48,r:1.35,speed:.75,pref:2.6,range:5.2,pts:3e3,kb:.5,rollSpeed:11}},Cn=(n,e)=>({...gn[n],base:n,...e});Object.assign(gn,{frostGrunt:Cn("grunt",{hp:3.5,chill:!0,pal:[7325934,1063514,2973568]}),frostBrute:Cn("brute",{hp:10,doubleRing:!0,pal:[8238824,1324384,13625855]}),frostArcher:Cn("archer",{hp:3,volley:3,pal:[10474734,2973568]}),sandGrunt:Cn("grunt",{hp:3,burrow:!0,pal:[14262860,4860422,8016420]}),sandBoulder:Cn("boulder",{hp:5,r:.52,rolls:4,rollSpeed:14,followWarn:[.5,.42,.36],pal:[13015648,2759176]}),lavaGrunt:Cn("grunt",{hp:3,blast:!0,pal:[16738858,8001536,3807760]}),lavaBrute:Cn("brute",{hp:11,burnSlam:!0,pal:[4864578,8003584,16751164]}),magmaJelly:Cn("jelly",{hp:6,r:.65,pal:[16742960,16726544]}),rockKing:Cn("boss",{hp:72,model:"rock"}),frostQueen:Cn("boss",{hp:105,r:1.15,model:"queen",pref:3.4,range:7}),sandWyrm:Cn("boss",{hp:125,r:1.2,model:"wyrm",speed:.9,range:8}),lavaTitan:Cn("boss",{hp:155,r:1.6,model:"titan",speed:.6,range:8})});const di={iceGrip:1.7,spikeGrip:8,burnDelay:.3,stormCalm:13,stormWarn:2.5,stormLen:8},Un={warnBase:1.2,warnMin:.7,warnStep:.06,cdMin:2.2,cdRand:1.8,stunPerfect:2.6,stunNormal:0,hitstop:.05,killHitstop:.06,grace:2.2,comboTime:3},ze=N,Gs=hr,Ui=new ze(0,1,0),je=Px.R,Q=n=>document.getElementById(n),rn=(n,e,t)=>Math.max(e,Math.min(t,n));function If(n){return()=>(n=n*16807%2147483647)/2147483647}const ti=(n=Math.random)=>{const e=n()*2-1,t=n()*Math.PI*2,i=Math.sqrt(1-e*e);return new ze(i*Math.cos(t),e,i*Math.sin(t))},Wt=(n,e)=>e.clone().addScaledVector(n,-e.dot(n)),_t=(n,e,t)=>n.clone().multiplyScalar(je).addScaledVector(e,t).normalize(),Xt=(n,e)=>Wt(n,new ze().subVectors(e,n)).normalize();function $s(n){const e=Wt(n,Math.abs(n.y)<.9?Ui:new ze(1,0,0)).normalize();return[e,new ze().crossVectors(n,e)]}const Uf={grass:{id:"grass",seed:20261016,mountains:7,lakes:4,mtn:"peak",liquid:"water",tree:"pine",trees:110,rocks:42,flowers:150,ground:{bed:"#c2a46d",shore:"#ecd69c",low:"#7bd16a",mid:"#5bb85e",rock:"#8b8f9f",cap:"#f4f7ff"},liquidColor:3844336,leaf:3115598,trunk:8016434,rock:10132651,flower:[[1,1,1],[1,.8,.25]],sky:725040,atmo:6273279,hemi:[14085119,3812437,2.3],sun:[16773852,3.2]},ice:{id:"ice",seed:77123,mountains:8,lakes:7,lakeW:.1,mtn:"peak",liquid:"ice",tree:"snowPine",trees:90,rocks:50,flowers:120,ground:{bed:"#8fb8d8",shore:"#dbeaf6",low:"#eef5fb",mid:"#d6e6f4",rock:"#8798b4",cap:"#ffffff"},liquidColor:11134207,leaf:13099756,trunk:6123136,rock:10471142,flower:[[.6,.9,1],[1,1,1]],sky:661560,atmo:10477823,hemi:[15004927,4280956,2.5],sun:[15135487,3]},desert:{id:"desert",seed:40917,mountains:6,lakes:3,lakeW:-.1,mtn:"mesa",dunes:.16,liquid:"water",tree:"cactus",trees:70,rocks:60,flowers:60,storm:!0,ground:{bed:"#b78e55",shore:"#f2dca2",low:"#eac67c",mid:"#deb066",rock:"#b9734a",cap:"#d68f58"},liquidColor:3655360,leaf:5216858,trunk:4160070,rock:12618332,flower:[[.95,.4,.55],[1,.85,.3]],sky:1970736,atmo:16761466,hemi:[16773074,6963496,2.4],sun:[16770744,3.4]},volcano:{id:"volcano",seed:6155,mountains:6,lakes:3,lakeW:-.04,mtn:"crater",rivers:2,liquid:"lava",tree:"charred",trees:80,rocks:70,flowers:110,ground:{bed:"#2a1a18",shore:"#3a2b2d",low:"#4e4145",mid:"#3d3238",rock:"#2d262c",cap:"#ff7a30"},liquidColor:16734750,leaf:2761254,trunk:1840664,rock:3813944,flower:[[1,.45,.12],[1,.85,.3]],sky:1706e3,atmo:16738874,hemi:[16763048,4855840,2.1],sun:[16758928,2.9]}};let Vt=Uf.grass,Dn=If(Vt.seed);const is=[];function Rd(n,e,t){for(let i=0;i<e;i++){let r,s=0;do r=ti(Dn),s++;while(s<60&&is.some(a=>a.c.angleTo(r)<a.w+.45));is.push(Object.assign({type:n,c:r},t()))}}function Nf(n){Vt=Uf[n],Dn=If(Vt.seed),is.length=0,Rd("m",Vt.mountains,()=>({h:1.6+Dn()*1.2,w:.27+Dn()*.12})),Rd("l",Vt.lakes,()=>({h:-1.2,w:.3+(Vt.lakeW||0)+Dn()*.14}));for(let e=0;e<(Vt.rivers||0);e++){const t=ti(Dn),[i,r]=$s(t);is.push({type:"r",c:t,e1:i,e2:r,w:.085,h:1.3,ph:Dn()*6.28,gaps:3})}}Nf("grass");function Lx(n,e){return Vt.mtn==="mesa"?n.h*.62*Math.min(1,(1-e)*2.4):Vt.mtn==="crater"?n.h*(1-e)**1.3-(e<.24?n.h*.55*(1-e/.24)**2:0):n.h*(1-e)**1.7}function Dx(n,e){const t=n.dot(e.e1),i=n.dot(e.e2),r=Math.atan2(i,t),s=n.dot(e.c)+.09*Math.sin(r*5+e.ph);return Math.abs(s)>=e.w?0:-e.h*(1-(s/e.w)**2)*rn(Math.sin(r*e.gaps+e.ph)*3+2.1,0,1)}function qn(n){let e=.3+.24*Math.sin(n.x*3.1+1.3)*Math.sin(n.y*2.7+.4)*Math.cos(n.z*3.4+.9);Vt.dunes&&(e+=Vt.dunes*Math.sin(n.x*8+n.z*5+1)*Math.sin(n.y*7-n.z*3));for(const t of is){if(t.type==="r"){e+=Dx(n,t);continue}const i=Math.acos(rn(n.dot(t.c),-1,1));if(i>=t.w)continue;const r=i/t.w;e+=t.type==="m"?Lx(t,r):t.h*(1-r*r)}return e}const sn=n=>Math.max(0,qn(n)),Wn=n=>n.clone().multiplyScalar(je+sn(n)),Ff=n=>qn(n)<0,kn=n=>qn(n)<0&&Vt.liquid!=="ice",Ql=n=>qn(n)<0?Vt.liquid:"ground";function Of(n,e,t,i){const[r,s]=$s(n);for(let a=e;a<=t;a+=.05)for(let o=0;o<24;o++){const l=o/24*Math.PI*2,c=n.clone().multiplyScalar(Math.cos(a)).addScaledVector(r,Math.sin(a)*Math.cos(l)).addScaledVector(s,Math.sin(a)*Math.sin(l));if(i(qn(c)))return c}return null}const Bf=(n,e=.3,t=Math.PI)=>Of(n,e,t,i=>i<-.08),Ix=(n,e=.05,t=Math.PI)=>Of(n,e,t,i=>i>.08),ec=(n,e)=>(sn(_t(n,e,.3))-sn(n))/.3,tc=matchMedia("(pointer: coarse)").matches,Ri={level:tc?1:2,pixelRatio:Math.min(devicePixelRatio,tc?1.75:2)},ni=new Cx({antialias:!0,powerPreference:"high-performance"});ni.setPixelRatio(Ri.pixelRatio);ni.shadowMap.enabled=!0;ni.shadowMap.type=pc;document.body.prepend(ni.domElement);const mn=new Cm;mn.background=new Le(725040);const Nt=new Ln(40,1,.1,600),Ha=new ze(0,.08,1).normalize(),ot=new ct;mn.add(ot);const Va=new Gm(14085119,3812437,2.3);mn.add(Va);const dn=new Wm(16773852,3.2);dn.position.set(-9,-5,24);dn.castShadow=!0;dn.shadow.mapSize.setScalar(tc?1024:2048);Object.assign(dn.shadow.camera,{left:-14,right:14,top:14,bottom:-14,near:1,far:70});dn.shadow.bias=-6e-4;dn.shadow.normalBias=.04;mn.add(dn);{const n=new It,e=[],t=[],i=new Le,r=new ze(.3,1,-.2).normalize();for(let s=0;s<1400;s++){let a=ti();s<600&&a.addScaledVector(r,-a.dot(r)*.85).normalize(),a.multiplyScalar(140+Math.random()*110),e.push(a.x,a.y,a.z),i.setHSL(.6+Math.random()*.15,.5,.65+Math.random()*.3),t.push(i.r,i.g,i.b)}n.setAttribute("position",new Je(e,3)),n.setAttribute("color",new Je(t,3)),mn.add(new Om(n,new bf({size:.8,vertexColors:!0,transparent:!0,opacity:.85,sizeAttenuation:!0,depthWrite:!1})))}const Li=new ct;mn.add(Li);{const n=(r,s=0)=>new Tn({color:r,emissive:s,flatShading:!0,roughness:.9}),e=new oe(new bn(4.2,1),n(7307192,1055296));e.userData.at=[-.64,.46],Li.add(e);const t=new ct;t.userData.at=[.66,.38],Li.add(t),t.add(new oe(new bn(2.6,1),n(5222026,731688)));const i=new oe(new _r(3.6,4.8,40),new Dt({color:14207487,transparent:!0,opacity:.55,side:$t}));i.rotation.set(1.2,.3,0),t.add(i);for(let r=0;r<9;r++){const s=new oe(new Ys(.3+Math.random()*.7,0),n(8224658));s.position.set((Math.random()-.5)*60,14+Math.random()*22,-90-Math.random()*30),s.userData.spin=new ze(Math.random(),Math.random(),Math.random()).multiplyScalar(.3),Li.add(s)}}const zf=new oe(new nn(je+3.2,48,32),new Dt({color:6273279,transparent:!0,opacity:.12,side:cn,blending:Ya,depthWrite:!1,fog:!1}));mn.add(zf);mn.fog=new wc(14200944,400,600);const nc=new Le,Ux=new Le(13212252);let ic=14;function Nx(n){nc.set(n.sky),mn.background.copy(nc),zf.material.color.set(n.atmo),Va.color.set(n.hemi[0]),Va.groundColor.set(n.hemi[1]),Va.intensity=n.hemi[2],dn.color.set(n.sun[0]),dn.intensity=n.sun[1]}function kf(n){mn.fog.near=n>0?ic+12*(1-n)-3.5:400,mn.fog.far=n>0?ic+40*(1-n)+2.5:600,mn.background.copy(nc).lerp(Ux,n)}function Fx(n){for(const e of Li.children)e.userData.spin&&(e.rotation.x+=e.userData.spin.x*n,e.rotation.y+=e.userData.spin.y*n)}const Ds=new ze;function Ic(){const n=innerWidth,e=innerHeight;ni.setSize(n,e),Nt.aspect=n/e;const t=Nt.aspect<1?1.25/Math.sqrt(Nt.aspect):1,i=Ha.clone().multiplyScalar(je+.3),r=Wt(Ha,new ze(0,-1,0)).normalize();Ds.copy(i).addScaledVector(Ha,10.5*t).addScaledVector(r,7*t),Nt.position.copy(Ds),Nt.lookAt(i.clone().addScaledVector(r,-2)),Nt.updateProjectionMatrix(),ic=Ds.distanceTo(i),Li.position.copy(Nt.position),Li.quaternion.copy(Nt.quaternion);const s=100*Math.tan(nm.degToRad(Nt.fov/2)),a=s*Nt.aspect;for(const o of Li.children)o.userData.at&&o.position.set(o.userData.at[0]*a,o.userData.at[1]*s,-100)}addEventListener("resize",Ic);Ic();const Cd=new Gs,Pd=new Gs;function Ld(n,e,t){const i=n.clone().applyQuaternion(ot.quaternion).normalize();Cd.setFromUnitVectors(i,Ha),Pd.identity().slerp(Cd,1-Math.exp(-e*t)),ot.quaternion.premultiply(Pd)}const Gf=n=>n.applyQuaternion(ot.quaternion.clone().invert());let Ra=0,Jo=0;function Ox(n){if(Ra+=n,Jo++,Ra<4)return;const e=Jo/Ra;Ra=0,Jo=0,e<48&&Ri.pixelRatio>1?(Ri.pixelRatio=Math.max(1,Ri.pixelRatio-.5),ni.setPixelRatio(Ri.pixelRatio),Ic()):e<40&&dn.shadow.mapSize.x>512&&(dn.shadow.mapSize.setScalar(dn.shadow.mapSize.x/2),dn.shadow.map?.dispose(),dn.shadow.map=null)}function Is(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},a={},o=n[0].morphTargetsRelative,l=new It;let c=0;for(let u=0;u<n.length;++u){const d=n[u];let f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(d.attributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(d.morphAttributes[p])}if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0;const d=[];for(let f=0;f<n.length;++f){const p=n[f].index;for(let g=0;g<p.count;++g)d.push(p.getX(g)+u);u+=n[f].attributes.position.count}l.setIndex(d)}for(const u in s){const d=Dd(s[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(const u in a){const d=a[u][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<d;++f){const p=[];for(let x=0;x<a[u].length;++x)p.push(a[u][x][f]);const g=Dd(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Dd(n){let e,t,i,r=-1,s=0;for(let c=0;c<n.length;++c){const u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const a=new e(s),o=new pn(a,t,i);let l=0;for(let c=0;c<n.length;++c){const u=n[c];if(u.isInterleavedBufferAttribute){const d=l/t;for(let f=0,p=u.count;f<p;f++)for(let g=0;g<t;g++){const x=u.getComponent(f,g);o.setComponent(f+d,g,x)}}else a.set(u.array,l);l+=u.count*t}return r!==void 0&&(o.gpuType=r),o}const ur=new ct;ot.add(ur);const Uc=[],Nc=[],Bx=(n,e)=>{for(const t of Nc)t.setMatrixAt(n,e),t.instanceMatrix.needsUpdate=!0};let Ja=null;function zx(n){const e=new bn(1,Ri.level>1?38:30),t=e.attributes.position,i=[],r=new Le,s=[],a=n.ground;for(let d=0;d<t.count;d++){const f=new ze().fromBufferAttribute(t,d).normalize(),p=qn(f);s.push(p);const g=je+(p<0?p-.2:p);t.setXYZ(d,f.x*g,f.y*g,f.z*g)}for(let d=0;d<t.count;d+=3){const f=(s[d]+s[d+1]+s[d+2])/3,p=Math.sin(d*12.9898)*43758.5%1*.06;f<0?r.set(a.bed).offsetHSL(0,0,-.12+f*.1):f<.12?r.set(a.shore):f<1.05?r.set(f<.5?a.low:a.mid):f<1.85?r.set(a.rock):r.set(a.cap),r.offsetHSL(0,0,p-.03);for(let g=0;g<3;g++)i.push(r.r,r.g,r.b)}e.setAttribute("color",new Je(i,3)),e.computeVertexNormals();const o=new oe(e,new Tn({vertexColors:!0,flatShading:!0,roughness:.92}));o.castShadow=o.receiveShadow=!0,ur.add(o);const l=n.liquid==="lava",c=n.liquid==="ice";Ja=new Tn({color:n.liquidColor,transparent:!l,opacity:c?.95:.82,roughness:c?.3:.15,metalness:.1,flatShading:!0,emissive:l?16726536:0,emissiveIntensity:l?1.2:0});const u=new oe(new bn(je,Ri.level>1?22:16),Ja);u.receiveShadow=!0,ur.add(u)}function rc(n,e,t,i,r,s){const a=new Ac(n,e,t),o=new rt,l=new Gs,c=new Gs;let u=0;for(let d=0;d<t*40&&u<t;d++){const f=ti(Dn),p=qn(f);if(!i(p))continue;const g=r();l.setFromUnitVectors(Ui,f).multiply(c.setFromAxisAngle(Ui,Dn()*6.28));const x=f.clone().multiplyScalar(je+Math.max(p,0)-.05);o.compose(x,l,new ze(g,g,g)),a.setMatrixAt(u,o),s?.(f,x,g,u,l.clone()),u++}return a.count=u,a.castShadow=!0,a.receiveShadow=!0,ur.add(a),a}const Hf={pine(){const n=new jt(.3,.5,6);n.translate(0,.45,0);const e=new jt(.22,.42,6);e.translate(0,.74,0);const t=new Hn(.05,.08,.26,5);return t.translate(0,.13,0),{leaf:Is([n,e]),trunk:t}},snowPine(){return Hf.pine()},cactus(){const n=new Hn(.09,.11,.8,6);n.translate(0,.4,0);const e=(i,r,s)=>{const a=new Hn(.05,.055,.3,5);return a.translate(0,.15,0),a.rotateZ(s),a.translate(i,r,0),a},t=new Hn(.11,.12,.06,6);return t.translate(0,.03,0),{leaf:Is([n,e(.08,.38,-1.1),e(-.08,.5,1),e(.32,.5,0),e(-.31,.6,0)]),trunk:t}},charred(){const n=(t,i,r)=>{const s=new jt(.03,r,4);return s.translate(0,r/2,0),s.rotateZ(i),s.translate(0,t,0),s},e=new Hn(.03,.09,.75,5);return e.translate(0,.37,0),{leaf:Is([n(.4,-.8,.4),n(.5,.9,.34),n(.6,-.5,.28),n(.25,1.1,.3)]),trunk:e}}};function kx(n){const{leaf:e,trunk:t}=Hf[n.tree](),i=rc(e,new Tn({color:n.leaf,flatShading:!0,roughness:.8}),n.trees,a=>a>=.15&&a<=1,()=>.75+Dn()*.7,(a,o,l,c,u)=>Uc.push({d:a.clone(),p:o,s:l,i:c,q:u,tilt:0,tv:0,axis:new ze(1,0,0)})),r=new Ac(t,new Tn({color:n.trunk,flatShading:!0}),n.trees),s=new rt;for(let a=0;a<i.count;a++)i.getMatrixAt(a,s),r.setMatrixAt(a,s);r.count=i.count,r.castShadow=!0,ur.add(r),Nc.push(i,r)}function Gx(n){const e=n.id==="ice"?new jt(.14,.55,5):new Ys(.22,0);n.id==="ice"&&e.translate(0,.22,0),rc(e,new Tn({color:n.rock,flatShading:!0,roughness:n.id==="ice"?.25:.95}),n.rocks,c=>c>.02&&c<1.4,()=>.6+Dn()*1.3);const t=new gi(.06,0);t.scale(1,.4,1),t.translate(0,.06,0);const i=new gi(.03,0);i.translate(0,.09,0);const r=t.attributes.position.count,s=i.attributes.position.count,[a,o]=n.flower;t.setAttribute("color",new Je(new Array(r).fill(0).flatMap(()=>a),3)),i.setAttribute("color",new Je(new Array(s).fill(0).flatMap(()=>o),3));const l=rc(Is([t,i]),new Tn({vertexColors:!0,flatShading:!0,emissive:n.liquid==="lava"?16730640:0,emissiveIntensity:.8}),n.flowers,c=>c>.14&&c<.9,()=>.8+Dn()*.6);l.castShadow=!1}function Vf(n){ur.traverse(t=>{t.isMesh&&(t.geometry.dispose(),t.material.dispose(),t.dispose?.())}),ur.clear(),Uc.length=0,Nc.length=0,Nf(n);const e=Vt;Nx(e),zx(e),kx(e),Gx(e)}function Hx(n){Vt.liquid==="lava"&&Ja&&(Ja.emissiveIntensity=1.15+Math.sin(n*2.2)*.3)}Vf("grass");const _={state:"title",mode:"play",wave:0,score:0,graceT:0,waveClearing:!1,endless:!1,ts:1,hitstop:0,shake:0,slowT:0,combo:0,comboT:0,bestCombo:0,ult:0,stamina:0,enemies:[],warnings:[],crystals:[],crystalT:6,shots:[],hazards:[],level:null,waves:[],tier:1,hpMul:1,storm:0,runCrystals:0,passives:new Set,ultKind:"line",undyingUsed:!1,tut:null,runTime:0,hurtCount:0,boss:null,runId:0,move:{sx:0,sy:0,m:0}};let Us=[];const cs=(n,e)=>{Us.push({t:n,fn:e})};function Vx(n){if(!Us.length)return;const e=[];Us=Us.filter(t=>(t.t-=n)>0||(e.push(t),!1)),e.forEach(t=>t.fn())}const Wf=()=>{Us=[]},ws=new Map,Bt=(n,e)=>(ws.has(n)||ws.set(n,new Set),ws.get(n).add(e),()=>ws.get(n).delete(e)),qt=(n,e)=>ws.get(n)?.forEach(t=>t(e)),Wa=Q("combo"),Ca=Q("tag"),Pa=Q("banner"),Id=Q("flash"),Wx=Q("jumpBtn"),Ud=Q("ultBtn");let Xf=[];const La=Q("dots"),Nd=Q("lives"),Xx='<svg viewBox="0 0 24 22"><path d="M12 21 2.6 11.7A5.6 5.6 0 0 1 12 4.1a5.6 5.6 0 0 1 9.4 7.6z"/></svg>';function qx(n){Q("stam").innerHTML="<i><b></b></i>".repeat(n),Xf=[...document.querySelectorAll("#stam b")]}function Oi(n){Q("score").textContent=_.score.toLocaleString(),Q("runGems").textContent=_.runCrystals?`◆ ${_.runCrystals}`:"";const e=Math.max(0,n.hp);if(Nd.innerHTML=Array.from({length:Ge.maxHp},(r,s)=>`<i class="${s<e?"":"off"}">${Xx}</i>`).join(""),Nd.setAttribute("aria-label",`生命 ${e} / ${Ge.maxHp}`),_.tut){La.innerHTML='<span class="lbl">教學</span>';return}if(_.endless){La.innerHTML=`<span class="lbl">無盡</span><b>${_.wave}</b>`;return}const t=_.waves.length,i=_.level?.boss;La.innerHTML=Array.from({length:t},(r,s)=>`<i class="${s+1<_.wave?"done":s+1===_.wave?"now":""}${i&&s===t-1?" boss":""}"></i>`).join(""),La.setAttribute("aria-label",`第 ${_.wave} / ${t} 波`)}function Fd(){_.combo<2||(Wa.innerHTML=`${_.combo}<small>COMBO</small>`,Wa.style.opacity=1,Wa.animate([{transform:"scale(1.3)"},{transform:"scale(1)"}],{duration:140}))}let Od=0;function St(n,e){Ca.textContent=n,Ca.style.color=e||"var(--ink)",Ca.style.opacity=1,clearTimeout(Od),Od=setTimeout(()=>Ca.style.opacity=0,800)}function Bi(n,e=""){Pa.innerHTML=n+(e?`<small>${e}</small>`:""),Pa.classList.remove("show"),Pa.offsetWidth,Pa.classList.add("show")}function rs(n,e){Id.style.background=e,Id.animate([{opacity:n},{opacity:0}],{duration:380})}const Gr=Q("coach");function Fc(n,e,t,i){if(!t){Gr.hidden=!0;return}Gr.hidden=!1,Gr.querySelector(".n").textContent=`${n} / ${e}`,Gr.querySelector("b").textContent=t,Gr.querySelector("p").innerHTML=i,Gr.animate([{transform:"translateX(-50%) scale(.92)",opacity:.3},{transform:"translateX(-50%) scale(1)",opacity:1}],{duration:220,easing:"ease-out"})}const Qa=Q("boss"),Yx=Qa.querySelector("i"),$x=Qa.querySelector("span");let Bd="";function jx(n){const e=_.state==="play"&&n?"alert":"";e!==Bd&&(Wx.classList.toggle("alert",!!e),Bd=e),Xf.forEach((i,r)=>i.style.transform=`scaleX(${rn(_.stamina-r,0,1)})`),Ud.style.setProperty("--p",_.ult),Ud.classList.toggle("ready",_.ult>=wt.min&&_.mode==="play"),Q("vignette").style.opacity=_.mode==="ultDraw"||_.slowT>0?1:0,_.comboT<=0&&_.combo&&(_.combo=0,Wa.style.opacity=0);const t=_.boss&&!_.boss.dead?_.boss:null;Qa.hidden=!t,t&&(Yx.style.transform=`scaleX(${rn(t.hp/t.maxHp,0,1)})`,$x.textContent=t.script.name,Qa.classList.toggle("armored",!!t.armored))}let Ot=null,ar=null;const Pt={volume:0,lastVol:.6};try{const n=localStorage.getItem("slasharena-vol");n!==null&&(Pt.volume=rn(+n||0,0,1))}catch{}function Nn(){if(!(Pt.volume<=0))try{Ot||(Ot=new(window.AudioContext||window.webkitAudioContext),ar=Ot.createGain(),ar.connect(Ot.destination)),ar.gain.value=Pt.volume,Ot.state==="suspended"&&Ot.resume()}catch{Ot=null}}function Kx(n){ar&&(ar.gain.value=n)}function yt(n,e,t="triangle",i=.15,r=1){if(!Ot||Pt.volume<=0)return;const s=Ot.currentTime,a=Ot.createOscillator(),o=Ot.createGain();a.type=t,a.frequency.setValueAtTime(n,s),r!==1&&a.frequency.exponentialRampToValueAtTime(n*r,s+e),o.gain.setValueAtTime(i,s),o.gain.exponentialRampToValueAtTime(.001,s+e),a.connect(o).connect(ar),a.start(s),a.stop(s+e+.02)}let Da=null;function zn(n,e,t,i){if(!Ot||Pt.volume<=0)return;const r=Ot.currentTime;if(!Da){Da=Ot.createBuffer(1,Ot.sampleRate,Ot.sampleRate);const l=Da.getChannelData(0);for(let c=0;c<l.length;c++)l[c]=Math.random()*2-1}const s=Ot.createBufferSource(),a=Ot.createBiquadFilter(),o=Ot.createGain();s.buffer=Da,a.type="bandpass",a.Q.value=1.2,a.frequency.setValueAtTime(t,r),a.frequency.exponentialRampToValueAtTime(i,r+n),o.gain.setValueAtTime(e,r),o.gain.exponentialRampToValueAtTime(.001,r+n),s.connect(a).connect(o).connect(ar),s.start(r),s.stop(r+n)}const Hs={on:!0};try{Hs.on=localStorage.getItem("slasharena-vib")!=="0"}catch{}const bs=n=>{try{Hs.on&&navigator.vibrate&&(!navigator.userActivation||navigator.userActivation.hasBeenActive)&&navigator.vibrate(n)}catch{}},Zx=[0,2,4,7,9],Ye={hit(n){const e=Zx[n%5]+12*Math.floor(n/5),t=392*2**(Math.min(e,36)/12);yt(t,.14,"square",.06),zn(.07,.16,5e3,1200),bs(15)},kill(){yt(140,.18,"sine",.25,.4),zn(.12,.12,2500,400)},dash(){zn(.16,.14,1500,6e3)},clang(){yt(520,.2,"square",.07,.7),zn(.1,.2,3e3,2e3),bs(30)},thud(){yt(160,.12,"square",.06,.6),zn(.08,.15,1200,500),bs(20)},ding(){yt(1568,.5,"sine",.14),yt(2349,.4,"sine",.07),zn(.06,.2,8e3,4e3),bs([20,30,40])},jump(){yt(440,.16,"triangle",.07,1.8)},land(){zn(.08,.08,800,300)},warn(){yt(880,.06,"sine",.04)},roll(){zn(.3,.12,300,120)},slam(){zn(.4,.3,900,80),yt(70,.3,"sawtooth",.12,.4)},hurt(){yt(220,.3,"sawtooth",.12,.5),bs(80)},pickup(){[0,4,7].forEach((n,e)=>setTimeout(()=>yt(880*2**(n/12),.15,"triangle",.07),e*50))},ult(){zn(.6,.2,200,2e3),yt(110,.6,"sawtooth",.08,2)},draw(n){yt(n==="down"?1046:n==="up"?440:784,.05,"sine",.03)},clear(){[0,7,12,16].forEach((n,e)=>setTimeout(()=>yt(392*2**(n/12),.3,"square",.05),e*90))},win(){[0,4,7,12,16,19,24].forEach((n,e)=>setTimeout(()=>yt(392*2**(n/12),.35,"triangle",.07),e*110))},empty(){yt(180,.1,"square",.04)},ui(){yt(660,.05,"sine",.04)},step(){yt(1320,.12,"sine",.05),yt(1760,.12,"sine",.03)}},qf=Q("sand");let Ti="calm",Qi=0;function Yf(){Ti="calm",Qi=di.stormCalm*.6,_.storm=0,kf(0),qf.style.opacity=0}function Jx(n){Ti="storm",Qi=n,St("沙暴來襲！","var(--warn)")}function Qx(n){Vt.storm&&_.state==="play"&&!_.tut&&(Qi-=n,Qi<=0&&(Ti==="calm"?(Ti="warn",Qi=di.stormWarn,St("沙暴要來了，靠近一點看清楚預警","var(--warn)"),Ye.warn()):Ti==="warn"?(Ti="storm",Qi=di.stormLen):(Ti="calm",Qi=di.stormCalm)));const e=Ti==="storm"&&Vt.storm?1:0;Math.abs(_.storm-e)<.002&&_.storm===e||(_.storm+=(e-_.storm)*(1-Math.exp(-n*2.5)),Math.abs(_.storm-e)<.003&&(_.storm=e),kf(_.storm),qf.style.opacity=_.storm)}const ao=900,Oc=[],Ni=new Ac(new Ii(.15,.15,.15),new Dt({color:16777215}),ao),ui=new Ft,$f=new Le;for(let n=0;n<ao;n++)Oc.push({p:new ze,v:new ze,life:0,max:1,shown:!1}),ui.scale.setScalar(0),ui.updateMatrix(),Ni.setMatrixAt(n,ui.matrix),Ni.setColorAt(n,$f.set(16777215));Ni.frustumCulled=!1;ot.add(Ni);let Ia=0;function ft(n,e,t,i=6,r=.6){for(let s=0;s<t;s++){const a=Oc[Ia];Ni.setColorAt(Ia,$f.set(e)),Ia=(Ia+1)%ao,a.p.copy(n),a.v.copy(ti()).multiplyScalar(i*(.3+Math.random())),a.max=a.life=r*(.5+Math.random()*.7),a.shown=!0}Ni.instanceColor.needsUpdate=!0}function eM(n){let e=!1;for(let t=0;t<ao;t++){const i=Oc[t];if(i.life>0)i.life-=n,i.p.addScaledVector(i.v,n),i.v.multiplyScalar(Math.exp(-n*3)),ui.position.copy(i.p),ui.rotation.set(i.life*9,i.life*7,0),ui.scale.setScalar(Math.max(0,i.life/i.max));else if(i.shown)i.shown=!1,ui.scale.setScalar(0);else continue;ui.updateMatrix(),Ni.setMatrixAt(t,ui.matrix),e=!0}e&&(Ni.instanceMatrix.needsUpdate=!0)}function tM(n,e,t){const i=new ze;for(let r=0;r<=8;r++)i.lerpVectors(n,e,r/8).add(ti().multiplyScalar(.12)),ft(i,t,1,.6,.3)}const As=[];function dr(n,e,t,i=1,r=.32,s=5){const a=new oe(new _r(.22*i,.36*i,32),new Dt({color:t,transparent:!0,opacity:1,side:$t,depthWrite:!1,blending:Ya}));a.position.copy(n),a.quaternion.setFromUnitVectors(new ze(0,0,1),e),a.renderOrder=4,ot.add(a),As.push({m:a,t:0,dur:r,grow:s})}function nM(n){for(const e of As){e.t+=n;const t=e.t/e.dur;e.m.scale.setScalar(1+t*e.grow),e.m.material.opacity=Math.max(0,1-t),t>=1&&(ot.remove(e.m),e.m.geometry.dispose(),e.m.material.dispose(),e.dead=!0)}for(let e=As.length-1;e>=0;e--)As[e].dead&&As.splice(e,1)}const Xr=new ct,qr=new ct,Bc=new ct,eo=new Tn({color:5030655,emissive:671626,emissiveIntensity:.45,roughness:.1,metalness:0}),jf=[];for(let n=0;n<=40;n++){const e=Math.PI*(1-n/40);jf.push(new Ie(Math.max(.001,Math.sin(e)*Math.sin(e/2)**1.1*.62),(Math.cos(e)+1)*.5*1.02))}const En=new oe(new Pc(jf,40),eo);En.castShadow=!0;const Vr=new Dt({color:1316922}),er=(n,e,t,i)=>(n.position.set(e,t,i),n.lookAt(e*3,t,i*3+.01),En.add(n),n),Kf=[],Zf=[],Jf=[],Qf=[],eh=[];for(const n of[-1,1]){const e=new oe(new nn(.085,14,12),Vr);e.position.set(n*.14,.5,.39),e.scale.set(1,1.3,.6);const t=new oe(new nn(.034,8,6),new Dt({color:16777215}));t.position.set(.028,.04,.06),e.add(t);const i=new oe(new nn(.014,6,5),new Dt({color:16777215}));i.position.set(-.03,-.035,.06),e.add(i),En.add(e),Kf.push(e);const r=er(new oe(new Ii(.24,.1,.05),eo),n*.14,.585,.385);r.rotateZ(n*.42),Zf.push(r);const s=new ct;for(const l of[-1,1]){const c=new oe(new Ii(.11,.026,.02),Vr);c.position.set(0,l*.028,0),c.rotation.z=-n*l*.5,s.add(c)}Jf.push(er(s,n*.14,.5,.405)),Qf.push(er(new oe(new sr(.06,.015,6,14,Math.PI),Vr),n*.14,.48,.41));const a=new ct;a.add(new oe(new sr(.065,.011,6,18),Vr),new oe(new sr(.028,.011,6,12),Vr)),eh.push(er(a,n*.14,.5,.405)),er(new oe(new Cc(.065,16),new Dt({color:16743080,transparent:!0,opacity:.9})),n*.27,.37,.37).scale.set(1.3,.75,1)}const th=er(new oe(new sr(.035,.011,6,14,Math.PI),Vr),0,.4,.445);th.rotateZ(Math.PI);const sc=er(new oe(new nn(.05,12,8),new Dt({color:10101574})),0,.39,.44);sc.scale.set(1.1,.8,.35);const oo=new oe(new nn(.1,12,8),new Dt({color:16777215,transparent:!0,opacity:.85}));oo.position.set(-.16,.6,.24);oo.scale.set(.55,1,.4);oo.rotation.z=.5;En.add(oo);Bc.add(En);const yn=new oe(new _r(.72,1.02,24,1,-Math.PI/2-Math.PI/3,Math.PI*2/3),new Dt({color:5999871,transparent:!0,opacity:.85,side:$t,depthWrite:!1}));yn.rotation.x=-Math.PI/2;yn.position.y=.3;yn.visible=!1;qr.add(Bc,yn);const zc=new oe(new _r(.5,.58,32),new Dt({color:4843263,transparent:!0,opacity:.55,side:$t}));zc.rotation.x=-Math.PI/2;zc.position.y=.05;Xr.add(qr,zc);ot.add(Xr);let nh="idle",Xa=0,Ua=2;function Xn(n,e=0){nh=n,Xa=e}function iM(n,e){Xa>0&&(Xa-=n);const t=Xa>0?nh:e;Ua-=n;const i=Ua<.12&&(t==="idle"||t==="determined");Ua<0&&(Ua=2+Math.random()*3);const r=t==="idle"||t==="determined";Kf.forEach(s=>{s.visible=r,s.scale.y=i?.15:1.3}),Zf.forEach(s=>s.visible=t==="determined"),Jf.forEach(s=>s.visible=t==="hurt"),Qf.forEach(s=>s.visible=t==="happy"),eh.forEach(s=>{s.visible=t==="dizzy",s.rotation.z+=n*8}),th.visible=t==="idle"||t==="determined",sc.visible=t==="hurt"||t==="happy"||t==="dizzy",sc.scale.y=t==="hurt"?.9:t==="dizzy"?.5:.7}const Qo=En.geometry.attributes.position.array.slice(),rM=1.02;ih(En.geometry);const Yt={gx:0,gz:0,vx:0,vz:0,touching:new Set,t:0},el=new Set,tl=new ze,nl=new ze,zd=new rt,kd=new Gs,sM=new ze,Gd=(n,e)=>En.worldToLocal(ot.localToWorld(e.copy(n)));function aM(n,e){ot.updateMatrixWorld(!0),Yt.t+=n;const t=e.d,i=sn(t),[r,s]=$s(t),a=(sn(_t(t,r,.3))-i)/.3,o=(sn(_t(t,s,.3))-i)/.3,l=r.multiplyScalar(-a).addScaledVector(s,-o);Gd(e.p,tl),Gd(e.p.clone().add(l),nl);let c=nl.x-tl.x,u=nl.z-tl.z;const d=Math.hypot(c,u),f=e.air>0?.25:1;d>f&&(c*=f/d,u*=f/d),Yt.vx+=(c-Yt.gx)*90*n,Yt.vz+=(u-Yt.gz)*90*n,Yt.vx*=Math.exp(-n*6),Yt.vz*=Math.exp(-n*6),Yt.gx+=Yt.vx*n,Yt.gz+=Yt.vz*n;for(const b of Uc){const M=b.d.angleTo(t)*je;if(M<.62?Yt.touching.has(b)||(Yt.touching.add(b),zn(.18,.05,2600,700)):Yt.touching.delete(b),M<1.1){const A=Wt(b.d,new ze().subVectors(b.d,t));A.lengthSq()>1e-8&&b.axis.crossVectors(b.d,A.normalize()),el.add(b)}if(!el.has(b))continue;const C=M<1.1?.55*(1-M/1.1):0;b.tv+=(C-b.tilt)*140*n,b.tv*=Math.exp(-n*5),b.tilt+=b.tv*n,kd.setFromAxisAngle(b.axis,b.tilt).multiply(b.q),zd.compose(b.p,kd,sM.setScalar(b.s)),Bx(b.i,zd),M>=1.1&&Math.abs(b.tilt)<.002&&Math.abs(b.tv)<.002&&el.delete(b)}const p=Yt.gx,g=Yt.gz,x=Math.hypot(p,g),m=(e.moving||0)*.035+(e.state==="dash"?.03:0),h=En.geometry.attributes.position,T=h.array;for(let b=0;b<T.length;b+=3){let M=Qo[b],C=Qo[b+1],A=Qo[b+2];const L=Math.max(0,1-C/(rM*.58)),D=L*L,E=Math.hypot(M,A);if(E>1e-4){const S=1+.6*((M*p+A*g)/E)*D+m*(.4+.6*D)*Math.sin(Yt.t*14+C*9);M*=S,A*=S}M+=p*.24*D,A+=g*.24*D,C*=1-.1*x*(1-D),T[b]=M,T[b+1]=C,T[b+2]=A}h.needsUpdate=!0,En.geometry.computeVertexNormals(),ih(En.geometry)}function ih(n){const e=n.attributes.normal.array,t=41,i=40,r=new ze;for(let s=0;s<t;s++){const a=s*3,o=(i*t+s)*3;r.set(e[a]+e[o],e[a+1]+e[o+1],e[a+2]+e[o+2]).normalize(),e[a]=e[o]=r.x,e[a+1]=e[o+1]=r.y,e[a+2]=e[o+2]=r.z}for(const s of[0,t-1]){r.set(0,0,0);for(let a=0;a<=i;a++){const o=(a*t+s)*3;r.x+=e[o],r.y+=e[o+1],r.z+=e[o+2]}r.normalize();for(let a=0;a<=i;a++){const o=(a*t+s)*3;e[o]=r.x,e[o+1]=r.y,e[o+2]=r.z}}n.attributes.normal.needsUpdate=!0}function oM(n,e,t,i,r){if(n.kind==="line"){const o=n.L*e/i,l=-n.w+2*n.w*t/r;return{d:n.c.clone().multiplyScalar(je).addScaledVector(n.dir,o).addScaledVector(n.s,l).normalize(),u:o/n.L}}n.e1||([n.e1,n.e2]=$s(n.c));const s=t/r*Math.PI*2,a=n.kind==="circle"?n.r*e/i:n.r1+(n.r2-n.r1)*e/i;return{d:n.c.clone().multiplyScalar(je).addScaledVector(n.e1,Math.cos(s)*a).addScaledVector(n.e2,Math.sin(s)*a).normalize(),u:n.kind==="circle"?a/n.r:(a-n.r1)/(n.r2-n.r1)}}function Vs(n,e,t=.3){if(n.kind==="line"){const r=e.clone().sub(n.c).multiplyScalar(je),s=r.dot(n.dir),a=r.dot(n.s);return s>=-t&&s<=n.L+t&&Math.abs(a)<=n.w+t}const i=n.c.angleTo(e)*je;return n.kind==="circle"?i<=n.r+t:i>=n.r1-t&&i<=n.r2+t}function $i(n,e,t,i){return{kind:"line",c:n.clone(),dir:e.clone(),s:new ze().crossVectors(n,e),L:t,w:i}}const lM="attribute float u; varying float vU; void main(){ vU=u; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",cM="uniform float prog; uniform float flash; varying float vU; void main(){ vec3 c=mix(vec3(1.,.82,.23),vec3(1.,.22,.18),flash); float a = vU<=prog ? .62 : .2; if (vU>.97) a=.85; gl_FragColor=vec4(c,a); }";function rh(n){const e=n.kind==="line"?14:10,t=n.kind==="line"?4:32,i=[],r=[],s=[];for(let o=0;o<=e;o++)for(let l=0;l<=t;l++){const{d:c,u}=oM(n,o,l,e,t),d=c.clone().multiplyScalar(je+sn(c)+.09);i.push(d.x,d.y,d.z),r.push(o===e?1:u*.96)}for(let o=0;o<e;o++)for(let l=0;l<t;l++){const c=o*(t+1)+l,u=c+t+1;s.push(c,u,c+1,u,u+1,c+1)}const a=new It;return a.setAttribute("position",new Je(i,3)),a.setAttribute("u",new Je(r,1)),a.setIndex(s),a}function kc(n,e,t,i=!1){const r=rh(n);return n.mat=new mi({vertexShader:lM,fragmentShader:cM,uniforms:{prog:{value:0},flash:{value:0}},transparent:!0,depthWrite:!1,side:$t}),n.mesh=new oe(r,n.mat),n.mesh.renderOrder=1,ot.add(n.mesh),Object.assign(n,{enemy:e,t:0,dur:t,free:i}),i||(e.warn=n),_.warnings.push(n),n}function Hd(n,e){return n.t+=e,n.mat.uniforms.prog.value=n.t/n.dur,n.mat.uniforms.flash.value=n.dur-n.t<.15?Math.floor(n.t*24)%2?1:.55:0,n.t>=n.dur}function lo(n){ot.remove(n.mesh),n.mesh.geometry.dispose(),n.mat.dispose(),_.warnings=_.warnings.filter(e=>e!==n),n.enemy.warn===n&&(n.enemy.warn=null)}const sh=new jt(.07,.62,5);sh.rotateX(Math.PI/2);const uM=new Dt({color:16769696}),dM=new Dt({color:16763981}),fM=.62,hM=.55;function pM(n,e){const t=gn[n.type],i=new oe(sh,uM);ot.add(i),_.shots.push({d:n.d.clone(),dir:e.clone(),left:t.shotLen,v:t.shotSpeed,owner:n,mesh:i,back:!1,spent:!1})}function Rs(n){ot.remove(n.mesh),n.dead=!0}function mM(n){for(const e of _.shots){const t=e.v*n;if(e.d=_t(e.d,e.dir,t),e.dir=Wt(e.d,e.dir).normalize(),e.left-=t,e.left<=0){Rs(e);continue}if(sn(e.d)>1.15&&!Ff(e.d)){ft(e.d.clone().multiplyScalar(je+sn(e.d)),13152400,5,3,.3),Rs(e);continue}e.mesh.position.copy(e.d).multiplyScalar(je+sn(e.d)+hM),e.mesh.quaternion.setFromUnitVectors(Ui,e.d);const i=e.dir.clone().applyQuaternion(e.mesh.quaternion.clone().invert());if(e.mesh.rotateY(Math.atan2(i.x,i.z)),e.back){for(const r of _.enemies)if(!(r.dead||r.spawn<1||e.d.angleTo(r.d)*je>r.r+.4)){xr(r,3,e.dir,{pierce:!0}),ft(e.mesh.position,16763981,14,6,.4),Rs(e);break}}else if(!e.spent&&e.d.angleTo(w.d)*je<fM){e.spent=!0;const r=to(e.owner,"shot",e.d);r==="parry"?(e.back=!0,e.spent=!1,e.mesh.material=dM,e.v*=1.4,e.left=12,e.dir=e.owner.dead?e.dir.clone().negate():Xt(e.d,e.owner.d)):r==="hit"&&Rs(e)}}_.shots.some(e=>e.dead)&&(_.shots=_.shots.filter(e=>!e.dead))}function gM(){_.shots.forEach(Rs),_.shots=[]}function _M(n,e,t){const i={kind:"circle",c:n.clone(),r:e},r=new Dt({color:16738848,transparent:!0,opacity:.65,depthWrite:!1,side:$t}),s=new oe(rh(i),r);s.renderOrder=1,ot.add(s),_.hazards.push({z:i,mesh:s,t,dur:t})}function vM(n){for(const e of _.hazards)e.t-=n,e.mesh.material.opacity=Math.min(.65,e.t*1.2)*(.8+Math.sin(e.t*12)*.2),w.air<=0&&w.invuln<=0&&w.state!=="dash"&&w.state!=="ult"&&w.guardInv<=0&&Vs(e.z,w.d,.1)&&jc(e.z.c),e.t<=0&&(ot.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose(),e.dead=!0);_.hazards.some(e=>e.dead)&&(_.hazards=_.hazards.filter(e=>!e.dead))}function xM(){for(const n of _.hazards)ot.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose();_.hazards=[]}const Vd=2.8,MM=1.15,yM=.8,SM=30,bM=new gi(.42),il=[];function EM(n){if(!il[n]){const t=document.createElement("canvas");t.width=t.height=64;const i=t.getContext("2d");i.font="900 52px sans-serif",i.textAlign="center",i.textBaseline="middle",i.lineWidth=8,i.strokeStyle="#0b1030",i.strokeText(n,32,34),i.fillStyle="#fff",i.fillText(n,32,34),il[n]=new Bm(t)}const e=new Lm(new yf({map:il[n],depthTest:!1,transparent:!0}));return e.scale.setScalar(.8),e.position.y=.85,e.renderOrder=6,e}const Wd=(n,e)=>new Tn({color:n,emissive:e,emissiveIntensity:1.6,flatShading:!0}),qe={boss:null,nodes:[],cfg:null,next:0,bad:!1,t:0},Xd=Q("sealHint"),qd={ordered:"照編號順序劃過",moving:"光點會移動",forbid:"只劃金色，避開紅色"},co=()=>{Xd.hidden=!qe.boss,qe.boss&&(Xd.textContent=`封印 ${qe.nodes.filter(n=>n.hit).length} / ${qe.nodes.filter(n=>!n.bad).length}　${qd[Object.keys(qd).find(n=>qe.cfg[n])]||"大招一筆劃過光點"}`)};function ah(n){const[e,t]=$s(qe.boss.d),i=n.a+(qe.cfg.moving?qe.t*.35:0);(qe.cfg.moving||!n.d)&&(n.d=qe.boss.d.clone().multiplyScalar(je).addScaledVector(e,Math.cos(i)*n.r).addScaledVector(t,Math.sin(i)*n.r).normalize())}function oh(n){n.mesh.position.copy(n.d).multiplyScalar(je+sn(n.d)+.75+Math.sin(qe.t*3+n.a)*.1),n.mesh.quaternion.setFromUnitVectors(Ui,n.d),n.mesh.rotateY(qe.t*2)}function TM(n,e){uo(),Object.assign(qe,{boss:n,cfg:e,next:0,bad:!1,t:0}),n.armored=!0;const t=e.count+(e.forbid||0),i=Math.random()*6.28;for(let r=0;r<t;r++){const s=r>=e.count,a={i:r,bad:s,a:s?i+(r-e.count+.5)*Math.PI*2/(e.forbid||1):i+r/e.count*Math.PI*2,r:s?Vd*.34:Vd,hit:!1};a.mesh=new oe(bM,s?Wd(16730714,16715808):Wd(16763981,13144064)),a.mesh.castShadow=!0,ot.add(a.mesh),e.ordered&&a.mesh.add(EM(r+1)),ah(a),oh(a),qe.nodes.push(a),dr(a.mesh.position,a.d,16763981,1.5,.6,3)}_.ult=100,Bi("護甲展開","用大招一筆劃過光點"),Ye.warn(),_.shake=Math.max(_.shake,.7),co()}function wM(){qe.next=0,qe.bad=!1;for(const n of qe.nodes)n.hit=!1,n.mesh.material.color.set(n.bad?16730714:16763981),n.mesh.material.emissive.set(n.bad?16715808:13144064);co()}function AM(n){if(qe.boss){for(const e of qe.nodes)if(!(e.hit||e.mesh.position.distanceTo(n)>(e.bad?yM:MM))){if(e.bad){qe.bad=!0,e.hit=!0,St("碰到紅色光點！","var(--hurt)"),Ye.empty();continue}qe.cfg.ordered&&e.i!==qe.next||(e.hit=!0,qe.next++,e.mesh.material.color.set(16777215),e.mesh.material.emissive.set(4843263),ft(e.mesh.position,4843263,16,7,.5),Ye.step(),co())}}}function RM(){if(!qe.boss)return;const n=qe.boss;!qe.bad&&qe.nodes.every(t=>t.bad||t.hit)?(n.armored=!1,n.stun=4.5,n.phase++,n.warn=null,rs(.4,"#ffcc4d"),Bi("封印破除","趁它暈眩全力輸出"),Ye.win(),_.shake=1.2,dr(qe.boss.mesh.position,n.d,16763981,4,.8,4),ft(n.mesh.position,16763981,40,12,.9),uo()):(St("封印沒破，再劃一次","var(--gold)"),wM())}function CM(n,e){if(qe.boss){if(qe.boss.dead){uo();return}_.mode!=="ultDash"&&(qe.t+=n);for(const t of qe.nodes)ah(t),oh(t);_.mode==="play"&&(_.ult=Math.min(100,_.ult+e*SM))}}function uo(){for(const n of qe.nodes)ot.remove(n.mesh),n.mesh.material.dispose();qe.nodes=[],qe.boss=null,co()}const ac={rockKing:{name:"岩王",at:[.5],seal:{count:3},phases:[["circle","ring","triple","summon:boulder"],["meteor","ring","triple","summon:boulder"]]},frostQueen:{name:"冰晶女王",at:[.66,.33],seal:{count:4,ordered:!0},phases:[["fan","chillField","ring"],["fan","meteor","chillField","nova"],["fan","nova","triple","summon:frostGrunt"]]},sandWyrm:{name:"沙海王蟲",at:[.66,.33],seal:{count:4,moving:!0},phases:[["burrow","charge","summon:sandGrunt"],["burrow","charge","storm","fan"],["burrow","charge","charge","meteor","summon:sandBoulder"]]},lavaTitan:{name:"熔岩泰坦",at:[.66,.33],seal:{count:4,forbid:2},phases:[["meteor","ring","triple"],["meteor","nova","summon:lavaGrunt","triple"],["meteor","fan","nova","summon:lavaBrute","triple"]]}},Tt=(n,e=0,t=0)=>new Tn({color:n,emissive:e,emissiveIntensity:t,roughness:.6,flatShading:!0}),or=(n,e,t=1)=>{const i=n.attributes.position,r=new Map;for(let s=0;s<i.count;s++){const a=`${i.getX(s).toFixed(3)},${i.getY(s).toFixed(3)},${i.getZ(s).toFixed(3)}`;if(!r.has(a)){const l=Math.sin((s+1)*12.9898*t)*43758.5453;r.set(a,1+(l-Math.floor(l)-.5)*e)}const o=r.get(a);i.setXYZ(s,i.getX(s)*o,i.getY(s)*o,i.getZ(s)*o)}return n.computeVertexNormals(),n};function Kt(n,e=[],t=0,i=0){n.updateMatrixWorld(!0);const r=n.matrixWorld.clone().invert(),s=[],a=[],o=new Set;e.forEach(u=>u.traverse(d=>o.add(d))),n.traverse(u=>{if(!u.isMesh||o.has(u))return;const d=u.geometry.index?u.geometry.toNonIndexed():u.geometry.clone();for(const x of Object.keys(d.attributes))x!=="position"&&x!=="normal"&&d.deleteAttribute(x);d.applyMatrix4(new rt().multiplyMatrices(r,u.matrixWorld));const f=u.material.color.clone().multiplyScalar(u.material.isMeshBasicMaterial?1.7:1),p=d.attributes.position.count,g=new Float32Array(p*3);for(let x=0;x<p;x++)g.set([f.r,f.g,f.b],x*3);d.setAttribute("color",new pn(g,3)),s.push(d),a.push(u)}),a.forEach(u=>{u.parent.remove(u),u.geometry.dispose(),u.material.dispose()});const l=new Tn({vertexColors:!0,flatShading:!0,roughness:.6,emissive:t,emissiveIntensity:i}),c=new oe(Is(s),l);return c.castShadow=!0,n.add(c),c}function us(n,e,t,i,r,s,a){for(const o of[-1,1]){const l=new oe(new nn(r,8,6),Tt(s));l.position.set(o*e,t,i),l.scale.set(1.25,.8,.45),l.rotation.z=o*.35,n.add(l);const c=new oe(new nn(r*.48,8,6),new Dt({color:a}));c.position.set(o*(e-r*.1),t-r*.08,i+r*.32),c.scale.set(1.2,.8,.5),c.rotation.z=o*.35,n.add(c)}}function vr(n){const e=new ct;for(let t=0;t<3;t++){const i=new oe(new gi(.1),new Dt({color:16763981}));i.position.set(Math.cos(t*2.09)*.4,0,Math.sin(t*2.09)*.4),e.add(i)}return e.position.y=n,e.visible=!1,e}function PM([n,e,t]=[15222332,5898264,8004632]){const i=new ct,r=Tt(n,e,.35),s=Tt(t),a=or(new bn(.42,1),.12,3);a.scale(1,.95,1);const o=new oe(a,r);o.castShadow=!0,i.add(o);for(let m=0;m<3;m++){const h=new oe(new jt(.08,.26,4),r);h.position.set((m-1)*.1,.42,-.04-Math.abs(m-1)*.04),h.rotation.set(-.3,0,(1-m)*.45),i.add(h)}us(i,.15,.05,.33,.09,2755084,16773296);for(const m of[-1,1]){const h=new oe(new nn(.1,6,5),s);h.position.set(m*.17,-.38,.05),h.scale.set(1,.6,1.3),i.add(h)}const l=new ct;l.position.set(.36,-.05,.1),i.add(l);const c=new oe(new nn(.09,6,5),s);l.add(c);const u=new ct;l.add(u);const d=new oe(new Hn(.025,.025,1.25,5),Tt(8014374));d.position.y=.25,u.add(d);const f=new oe(new jt(.07,.24,4),Tt(13225174,2236979,.3));f.position.y=.98,u.add(f);const p=new oe(new Hn(.04,.04,.07,6),Tt(14267498));p.position.y=.82,u.add(p);const g=vr(.75);i.add(g),Kt(l),Kt(g);const x=Kt(i,[l,g],e,.35);return{group:i,body:x,tint:[x.material],stars:g,rig:{arm:l,spear:u}}}function Gc([n,e,t]=[9329622,2363471,7037296],i=1){const r=new ct,s=new ct;s.scale.setScalar(i),r.add(s);const a=Tt(n,e,.35),o=Tt(new Le(n).lerp(new Le(16777215),.3).getHex(),e,.25),l=Tt(15326400),c=Tt(t,t===7037296?0:t,t===7037296?0:.5),u=Tt(new Le(n).multiplyScalar(.45).getHex()),d=or(new bn(.72,1),.1,7);d.scale(1.15,1,.95);const f=new oe(d,a);f.castShadow=!0,s.add(f);const p=new oe(or(new bn(.38,1),.08,5),a);p.position.set(0,.48,.32),s.add(p);const g=new oe(new bn(.2,0),o);g.position.set(0,.36,.62),g.scale.set(1.4,.8,.8),s.add(g);for(const T of[-1,1]){const b=new oe(new jt(.045,.16,4),l);b.position.set(T*.14,.42,.72),s.add(b);const M=new oe(new jt(.13,.62,5),l);M.position.set(T*.42,.82,.2),M.rotation.set(-.2,0,-T*.75),s.add(M);for(let A=0;A<2;A++){const L=new oe(new jt(.07,.2,4),u);L.position.set(T*(.35+A*.25),.45-A*.2,-.38),L.rotation.set(-.8,0,-T*.6),s.add(L)}const C=new oe(new Hn(.16,.2,.3,6),a);C.position.set(T*.32,-.7,0),s.add(C)}us(s,.14,.58,.62,.075,1838896,16769126);const x=[];for(const T of[-1,1]){const b=new oe(or(new Ys(.34,0),.15,2+T),c);b.castShadow=!0,b.position.set(T*.98,-.2,.25),s.add(b),x.push(b)}const m=vr(1.25*i);r.add(m),Kt(m);const h=Kt(s,x,e,.35);return{group:r,body:h,tint:[h.material],stars:m,rig:{fists:x,core:s}}}function LM([n,e]=[9408666,1052696]){const t=new ct,i=new ct;t.add(i);const r=Tt(n,e,.2),s=Tt(1710626),a=new oe(or(new bn(.58,1),.16,11),r);a.castShadow=!0,i.add(a);const o=new oe(new nn(.3,10,6),s);o.position.set(0,.02,.42),o.scale.set(1.35,.3,.55),i.add(o);const l=new oe(new nn(.09,10,8),new Tn({color:16726564,emissive:16719888,emissiveIntensity:2.2}));l.position.set(0,.02,.54),l.scale.set(1,.75,.5),i.add(l);for(let f=0;f<4;f++){const p=new oe(new Lc(.07+f*.01),r);p.position.set(Math.cos(f*1.6)*.75,-.3+f%2*.5,Math.sin(f*1.6)*.75),p.visible=!1,t.add(p)}const c=vr(.9);t.add(c);const u=t.children.filter(f=>f.geometry?.type==="TetrahedronGeometry");Kt(c);const d=Kt(i,[l],e,.2);return{group:t,body:d,tint:[d.material],stars:c,rig:{roll:i,eye:l,pebbles:u}}}function DM([n,e]=[8376575,1732800]){const t=new ct,i=Tt(n,e,.9),r=Tt(new Le(n).multiplyScalar(.8).getHex(),e,.6),s=new oe(new nn(.5,10,7,0,Math.PI*2,0,Math.PI*.6),i);s.position.y=.05,s.castShadow=!0,t.add(s);const a=new ct;t.add(a);for(let c=0;c<5;c++){const u=new oe(new jt(.07,.6,4),r);u.rotation.x=Math.PI,u.position.set(Math.cos(c*1.26)*.26,-.3,Math.sin(c*1.26)*.26),a.add(u)}us(t,.14,.22,.44,.07,795712,16777215);const o=vr(.75);t.add(o),Kt(o),Kt(a);const l=Kt(t,[a,o],e,.9);return{group:t,body:l,tint:[l.material],stars:o,rig:{tentacles:a}}}function IM([n,e]=[11104570,5913112]){const t=new ct,i=Tt(n,3151876,.3),r=Tt(e);for(let c=0;c<4;c++){const u=new oe(new jt(.38-c*.07,.3,7),c%2?i:r);u.position.y=-.26+c*.2,u.rotation.y=c*.4,c||(u.castShadow=!0),t.add(u)}us(t,.12,.02,.27,.07,1707524,16773296);for(const c of[-1,1]){const u=new oe(new nn(.08,6,5),r);u.position.set(c*.15,-.4,.03),t.add(u)}const s=new ct;s.position.set(.34,0,.2),t.add(s);const a=new oe(new sr(.3,.022,4,10,Math.PI),Tt(5913112));a.rotation.z=-Math.PI/2,s.add(a);const o=vr(.7);t.add(o),Kt(s),Kt(o);const l=Kt(t,[s,o],3151876,.3);return{group:t,body:l,tint:[l.material],stars:o,rig:{bow:s}}}function UM(){const n=new ct,e=new ct;n.add(e);const t=Tt(10476799,1727130,.7),i=Tt(5218528,1325690,.6),r=new oe(new gi(.8,1),t);r.scale.set(.85,1.7,.85),r.position.y=.25,r.castShadow=!0,e.add(r);for(let l=0;l<5;l++){const c=new oe(new jt(.13,.62,4),i),u=(l-2)*.42;c.position.set(Math.sin(u)*.42,1.5-Math.abs(l-2)*.12,Math.cos(u)*.1),c.rotation.z=-u*.8,e.add(c)}us(e,.2,.62,.62,.1,663616,16777215);const s=[];for(const l of[-1,1]){const c=new oe(new gi(.34,0),t.clone());c.castShadow=!0,c.scale.y=1.6,c.position.set(l*.98,-.2,.25),e.add(c),s.push(c)}const a=vr(2);n.add(a),Kt(a);const o=Kt(e,s,1727130,.7);return{group:n,body:o,tint:[o.material],stars:a,rig:{fists:s,core:e}}}function NM(){const n=new ct,e=new ct;n.add(e);const t=Tt(13208132,4857864,.35),i=Tt(15714698,4857864,.25),r=Tt(5911572),s=new oe(or(new bn(.95,1),.12,9),t);s.scale.set(1.05,.85,1.25),s.position.set(0,.15,.25),s.castShadow=!0,e.add(s);for(let c=0;c<3;c++){const u=new oe(or(new bn(.72-c*.14,1),.1,4+c),c%2?i:t);u.position.set(0,-.25-c*.1,-.9-c*.85),u.castShadow=!0,e.add(u)}for(let c=0;c<4;c++){const u=new oe(new jt(.12,.42,4),r);u.position.set(0,.85-c*.22,-.1-c*.55),u.rotation.x=-.5,e.add(u)}us(e,.36,.42,1.06,.12,2100228,16734752);const a=[];for(const c of[-1,1]){const u=new oe(new jt(.17,.8,5),r);u.rotation.x=1.3,u.rotation.z=c*.5,u.castShadow=!0,u.position.set(c*.98,-.2,.25),e.add(u),a.push(u)}const o=vr(1.5);n.add(o),Kt(o);const l=Kt(e,a,4857864,.35);return{group:n,body:l,tint:[l.material],stars:o,rig:{fists:a,core:e}}}const FM=()=>Gc(void 0,1.6),OM=()=>Gc([4141110,10496e3,16742960],1.95),BM={grunt:PM,brute:Gc,boulder:LM,jelly:DM,archer:IM,rock:FM,queen:UM,wyrm:NM,titan:OM},zM={grunt:15222332,brute:9329622,boulder:9408666,boss:9329622,jelly:8376575,archer:11104570},_i=n=>n.d.clone().multiplyScalar(je+sn(n.d)+n.r);function Ai(n,e,t={}){const i=gn[n],r=i.base||n,s=BM[i.model||r](i.pal),a=r==="boss"?i.hp:i.hp*_.hpMul,o={type:n,base:r,d:e.clone(),hp:a,maxHp:a,r:i.r,model:s,mesh:s.group,spawn:0,atkCd:1+Math.random()*2,stun:0,flash:0,strafe:Math.random()<.5?-1:1,kb:new ze,lunge:null,warn:null,rolling:null,chain:null,bob:Math.random()*6,slamT:0,summonT:0,pattern:0,phase:0,stuck:0,diveCd:3,...t};return t.hp&&(o.maxHp=t.hp),r==="boss"&&(o.script=ac[n],o.sealAt=[...o.script.at]),s.group.visible=!1,ot.add(s.group),_.enemies.push(o),dr(Wn(e).addScaledVector(e,.1),e,r==="boss"?12610559:10185727,r==="boss"?2.5:1.4,.6,3),o}function Hc(n){n.warn&&lo(n.warn),ot.remove(n.mesh),n.mesh.traverse(e=>{e.isMesh&&(e.geometry.dispose(),e.material.dispose())}),n.dead=!0}function xr(n,e,t,{pierce:i=!1}={}){const r=gn[n.type];if(n.armored){n.flash=.08,Ye.thud(),St("護甲！用大招劃過光點","var(--gold)"),_.hitstop=Un.hitstop;return}const s=n.base==="boulder"&&!(n.stun>0)&&!i;if(s&&(e*=r.armor,Ye.thud(),St("好硬！等它暈了再打","var(--mist)")),n.hp-=e,n.flash=.12,_.combo++,_.bestCombo=Math.max(_.bestCombo,_.combo),_.comboT=Un.comboTime,fr(Jn.hit),n.kb.copy(t).multiplyScalar(s?.6:r.kb),(n.base==="grunt"||n.base==="archer")&&n.warn&&(lo(n.warn),n.chain=null,n.atkCd=1.5,St("打斷","var(--dash)")),_.hitstop=Un.hitstop,_.shake=Math.max(_.shake,.35),s||Ye.hit(_.combo),ft(_i(n),e>=1.4?16763981:16777215,8+Math.round(e*3),7,.35),qt("hit",n),n.sealAt?.length&&n.hp/n.maxHp<=n.sealAt[0]){n.hp=n.maxHp*n.sealAt.shift(),Fd(),TM(n,n.script.seal);return}n.hp<=1e-6&&lh(n),Fd()}function lh(n){if(n.dead)return;const e=gn[n.type],t=_i(n);if(ft(t,e.pal?.[0]??zM[n.base],24,9,.7),ft(t,16763981,8,6,.5),n.base==="boss"&&(ft(t,12610559,60,14,1.2),dr(t,n.d,16763981,4,.8,4),_.shake=1.4),_.score+=Math.round(e.pts*(1+Math.min(_.combo,30)*.05)),fr(Jn.kill),e.blast){const i={kind:"circle",c:n.d.clone(),r:1.35,attack:"circle"};kc(i,n,1,!0)}if(Ye.kill(),Hc(n),Oi(w),_.hitstop=Math.max(_.hitstop,Un.killHitstop),_.combo>=5&&_.combo%5===0&&Xn("happy",.6),qt("kill",n),n.base==="boss")for(const i of _.enemies)!i.dead&&i!==n&&lh(i)}const kM=()=>_.tut?1.6:Math.max(Un.warnMin,Un.warnBase-Un.warnStep*(_.tier-1)),GM=()=>_.tut||_.tier<=1?1:_.tier>=8?3:2,HM=n=>n.warn||n.rolling||n.chain||n.lunge||n.summonT>0,VM=()=>_.enemies.filter(n=>!n.dead&&n.base!=="boss"&&HM(n)).length;function WM(n){if(n.only)return n.only[Math.floor(Math.random()*n.only.length)];const e=gn[n.type];if(n.base==="grunt")return e.burrow&&!n.burrowed&&Math.random()<.6?"burrow":(n.burrowed=!1,"line");if(n.base==="boulder")return"roll";if(n.base==="archer")return"shoot";if(n.base==="jelly")return n.d.angleTo(w.d)*je<e.pulseRange&&Math.random()<.6?"ring":"mortar";if(n.base==="brute")return _.tier>=3&&Math.random()<.45?"ring":"circle";const t=n.script.phases[Math.min(n.phase,n.script.phases.length-1)];for(let i=0;i<t.length;i++){const r=t[n.pattern++%t.length];if(!r.startsWith("summon")||_.enemies.filter(s=>!s.dead&&s!==n).length<3)return r}return"circle"}const rl=(n,e,t)=>kc(n,e,t,!0);function Vc(n,e=WM(n),t=1){const i=kM()*(n.warnMul||1)*t,r=n.base==="boss",s=gn[n.type],a=Xt(n.d,w.d);if(e.startsWith("summon")){n.summonT=1.1,n.summonType=e.split(":")[1],Ye.warn(),St(`${n.script.name}在召喚援軍！`,"var(--hurt)");return}if(e==="storm"){Jx(7),n.atkCd=1;return}if(e==="burrow"){ft(Wn(n.d).addScaledVector(n.d,.3),14200944,18,5,.6);for(let c=0;c<8;c++){const u=_t(w.d,Wt(w.d,new ze().randomDirection()).normalize(),r?3.8:2.8);if(!kn(u)){n.d.copy(u);break}}n.spawn=r?-1:-.7,n.burrowed=!0,n.atkCd=r?.4:.3;return}e==="triple"&&(n.chain={kind:"circle",left:2,idx:0,gap:0},e="circle"),(e==="nova"||e==="ring"&&s.doubleRing&&!n.chain)&&(n.chain={kind:"ring",left:1,idx:0,gap:0},e="ring"),e==="roll"&&(n.chain=n.chain||{kind:"roll",left:s.rolls-1,idx:0,gap:0});let o,l=i;if(e==="line")o=$i(n.d,a,3.6,.55);else if(e==="roll")o=$i(n.d,a,s.rollLen+n.r,.62);else if(e==="charge")o=$i(n.d,a,9,.95),o.attack="roll",l=i*1.25;else if(e==="shoot"){if(o=$i(n.d,a,s.shotLen*.75,.22),l=i*.9,s.volley)for(const c of[-1,1]){const u=a.clone().applyAxisAngle(n.d,c*.36),d=$i(n.d,u,s.shotLen*.75,.22);d.attack="shoot",rl(d,n,l)}}else if(e==="fan"){o=$i(n.d,a,9,.6),o.attack="line",o.noLunge=!0,l=i*1.2;for(const c of[-1,1]){const u=$i(n.d,a.clone().applyAxisAngle(n.d,c*.5),9,.6);u.attack="line",rl(u,n,l)}}else if(e==="meteor"){o={kind:"circle",c:w.d.clone(),r:1.5,attack:"circle"},l=i*1.1;for(let c=0;c<4;c++){const u={kind:"circle",c:_t(w.d,Wt(w.d,new ze().randomDirection()).normalize(),1.8+Math.random()*2.6),r:1.3,attack:"circle"};rl(u,n,l+(c+1)*.22)}}else e==="chillField"?(o={kind:"circle",c:w.d.clone(),r:2.8,attack:"circle",chill:!0},l=i*1.25):e==="mortar"?(o={kind:"circle",c:w.d.clone(),r:1.3,attack:"circle"},l=i*1.1):e==="ring"?(o={kind:"ring",c:n.d.clone(),r1:r?1.6:n.base==="jelly"?.7:1.2,r2:r?5.4:n.base==="jelly"?3:4.2},l=i*1.25):(o={kind:"circle",c:w.d.clone(),r:r?2.2:1.7},l=i*1.15);o.attack=o.attack||e,kc(o,n,l),Ye.warn()}function XM(n){const e=n.chain;e.idx++,e.left--;const t=gn[n.type].followWarn,i=t?t[Math.min(e.idx-1,t.length-1)]:e.idx===1?.6:.5;Vc(n,e.kind,i)}function to(n,e,t){if(w.state==="ult"||w.guardInv>0)return"none";if((e==="ring"||e==="roll"||e==="shot")&&w.air>0)return fr(Jn.jumpRing),St("躍過","var(--ink)"),qt("jump",e),"jump";if(w.state==="dash"&&w.t<=Ge.iframe)return fr(Jn.evade),_.slowT=.5,St("閃避斬","var(--dash)"),ft(w.p,9430015,16,6,.5),qt("evade",e),"evade";if(w.state==="parry"){const i=Xt(w.d,t);if(i.angleTo(w.parryDir)<Math.PI*Ge.parryArc)return qM(e==="shot"?null:n,i,w.t<=Wc()),"parry"}return w.invuln>0?"none":(jc(t),"hit")}function qM(n,e,t){const i=w.p.clone().addScaledVector(w.d,.45).addScaledVector(e,.55),r=Gf(Nt.position.clone()).sub(i).normalize();if(ft(i,16777215,16,16,.22),ft(i,t?16763981:10470655,t?36:24,13,.35),ft(i,16751164,12,9,.45),dr(i,r,t?16763981:10470655,t?1.3:1),dr(i,w.d,16777215,.8),n){n.lunge=null,n.rolling=null,n.chain=null,n.kb.copy(Xt(n.d,w.d)).multiplyScalar(t?-5:-2.5),n.base==="boss"&&n.kb.multiplyScalar(.2);const s=t?n.base==="boss"?1.6:Un.stunPerfect:n.base==="boulder"?1.4:Un.stunNormal;s>0&&(n.stun=s)}t?(Ye.ding(),rs(.3,"#ffcc4d"),St("完美格擋！","var(--gold)"),fr(Jn.perfect+(_.passives.has("focus")?15:0)),Xn("happy",.5)):(Ye.clang(),rs(.18,"#9fc4ff"),St("格擋成功","var(--guard)"),fr(Jn.parry)),_.slowT=t?.6:.4,_.hitstop=.08,_.shake=Math.max(_.shake,t?.6:.4),w.guardInv=_.slowT+.25,_.stamina=Math.min(Ge.stamMax,_.stamina+1),w.state="free",w.parried=!0,w.anim.imp=.35,w.idleT=0,qt("parry",{e:n,perfect:t})}function Yd(n,e){Ye.slam(),_.shake=Math.max(_.shake,e.base==="boss"?.8:.5),ft(Wn(n).addScaledVector(n,.3),16765498,26,8,.6)}function $d(n){const e=n.enemy,t=n.attack,i=gn[e.type];if(lo(n),t==="shoot"){e.dead||(pM(e,n.dir),Ye.dash()),!n.free&&!e.chain&&(e.atkCd=Kr(e));return}if(n.free){t==="circle"&&Yd(n.c,e),Vs(n,w.d)&&to(e,t,e.d);return}if(t==="roll"){e.rolling={dir:n.dir.clone(),left:n.L-e.r,hit:new Set,touched:!1},Ye.roll();return}if(t==="line")n.noLunge||(e.lunge={dir:n.dir.clone(),left:n.L*.8});else{const r=t==="circle"?n.c:e.d;Yd(r,e),e.slamT=.35,i.burnSlam&&t==="circle"&&_M(r,1.8,4)}e.chain||(e.atkCd=Kr(e)),Vs(n,w.d)&&to(e,t,e.d)==="hit"&&(n.chill||i.chill)&&ey(2.2),e.chain&&!e.dead&&(e.chain.left>0?e.chain.gap=.18:(e.chain=null,e.atkCd=Kr(e)))}const Kr=n=>(Un.cdMin+Math.random()*Un.cdRand)*(_.tier===1||_.tut?1.5:1)*(n.base==="boss"&&n.phase>0?.7:1);function YM(n,e){const t=n.rolling,i=gn[n.type],r=Math.min(t.left,i.rollSpeed*e),s=_t(n.d,t.dir,r);kn(s)?(t.left=0,ft(Wn(n.d).addScaledVector(n.d,.2),9430015,14,5,.5)):(n.d.copy(s),t.dir=Wt(n.d,t.dir).normalize(),t.left-=r),n.model.rig.roll&&(n.model.rig.roll.rotation.x+=r/n.r),Math.random()<.5&&ft(Wn(n.d).addScaledVector(n.d,.1),12101768,1,2,.4);const a=_i(n);if(!(!t.touched&&w.p.distanceTo(a)<n.r+.5+(w.air>0,0)&&(t.touched=!0,to(n,"roll",n.d),!n.rolling))){for(const o of _.enemies)o===n||o.dead||o.spawn<1||t.hit.has(o)||_i(o).distanceTo(a)>o.r+n.r||(t.hit.add(o),xr(o,2,t.dir,{pierce:!0}),_.combo=Math.max(0,_.combo-1));t.left<=0&&(n.rolling=null,_.shake=Math.max(_.shake,.25),n.chain&&n.chain.left>0?n.chain.gap=.12:n.base==="boss"?n.atkCd=Kr(n):(n.chain=null,n.stun=i.dizzy,n.atkCd=Kr(n),St("滾石暈了！快打","var(--gold)"),qt("dizzy",n)))}}function $M(n,e){if(e<gn[n.type].diveRange||n.diveCd>0)return;n.diveCd=5;const t=Bf(w.d,.3);!t||t.angleTo(w.d)*je>e-1||(ft(Wn(n.d).addScaledVector(n.d,.2),9430015,16,5,.6),n.d.copy(t),n.spawn=-1.1,n.atkCd=Math.max(n.atkCd,1.2))}function jM(n,e){for(const i of[..._.warnings])i.free&&Hd(i,n)&&$d(i);for(const i of _.enemies){if(i.dead)continue;if(i.spawn<1){i.spawn+=e*2;const d=rn(i.spawn,0,1);i.mesh.scale.setScalar(d<1?d*1.15:1),i.mesh.visible=i.spawn>0;continue}if(i.mesh.scale.setScalar(1),i.bob+=n*5,i.slamT=Math.max(0,i.slamT-n),i.kb.lengthSq()>.01){const d=_t(i.d,i.kb,n);kn(d)||i.d.copy(d),i.kb.copy(Wt(i.d,i.kb)).multiplyScalar(Math.exp(-6*n))}if(i.stun>0){i.stun-=n;continue}if(i.rolling){YM(i,n);continue}if(i.summonT>0){if(i.summonT-=n,i.summonT<=0){for(const d of[-1,1]){const f=_t(i.d,new ze().crossVectors(i.d,Xt(i.d,w.d)).multiplyScalar(d),2.6);if(!kn(f)){const p=Ai(i.summonType,f);p.atkCd=1.2+Math.random()}}Ye.slam(),_.shake=.7,i.atkCd=Kr(i)}continue}if(i.lunge){const d=Math.min(i.lunge.left,18*n),f=_t(i.d,i.lunge.dir,d);kn(f)||i.d.copy(f),i.lunge.dir=Wt(i.d,i.lunge.dir).normalize(),i.lunge.left-=d,i.lunge.left<=0&&(i.lunge=null);continue}if(i.warn){Hd(i.warn,n)&&$d(i.warn);continue}if(i.chain){i.chain.gap-=n,i.chain.gap<=0&&XM(i);continue}const r=gn[i.type],s=i.d.angleTo(w.d)*je,a=Xt(i.d,w.d),o=i.base==="boss"||VM()<GM(),l=!i.dummy&&_.graceT<=0&&i.atkCd<=0&&o&&w.state!=="ult"&&_.mode==="play",c=l||i.atkCd<1?r.pref:r.pref+1.4,u=new ze().crossVectors(i.d,a).multiplyScalar(i.strafe*.45);if(!i.dummy){const d=i.base==="archer"&&s<r.flee?1.6:1,f=a.clone().multiplyScalar(s>c+.3?1:s<c-.5?-.7*d:0).add(u),p=_t(i.d,f,r.speed*n*rn(1-ec(i.d,a)*.8,.4,1.4));if(r.aquatic)i.diveCd-=n,Ff(p)?i.d.copy(p):i.strafe*=-1,$M(i,s);else if(!kn(p))i.d.copy(p),i.stuck=Math.max(0,i.stuck-n);else if(i.strafe*=-1,i.stuck+=n*2,i.stuck>5&&s>r.range){i.stuck=0,ft(Wn(i.d).addScaledVector(i.d,.3),10185727,12,4,.5);const g=_t(w.d,Xt(w.d,i.d),r.pref+1);kn(g)||(i.d.copy(g),i.spawn=-.5)}Math.random()<n*.25&&(i.strafe*=-1)}i.atkCd-=n,l&&s<r.range&&Vc(i)}const t=_.enemies;for(let i=0;i<t.length;i++)for(let r=i+1;r<t.length;r++){const s=t[i],a=t[r];if(s.dead||a.dead||s.rolling||a.rolling)continue;const o=s.d.angleTo(a.d)*je,l=s.r+a.r+.2;if(o<l&&o>1e-4){const c=Xt(s.d,a.d).multiplyScalar((l-o)/2),u=_t(s.d,c,-1),d=_t(a.d,c,1);!kn(u)&&!s.dummy&&s.d.copy(u),!kn(d)&&!a.dummy&&a.d.copy(d)}}for(const i of t)i.dead||ZM(i,e)}const KM=new hr;function ZM(n,e){const t=n.model,i=t.rig;n.mesh.position.copy(n.d).multiplyScalar(je+sn(n.d)+n.r+(n.base==="grunt"?Math.sin(n.bob)*.06:n.base==="jelly"?Math.sin(n.bob*.7)*.12:0)),n.mesh.quaternion.setFromUnitVectors(Ui,n.d);const s=(n.rolling?n.rolling.dir:n.lunge?n.lunge.dir:n.warn&&n.warn.kind==="line"?n.warn.dir:Xt(n.d,w.d)).clone().applyQuaternion(KM.copy(n.mesh.quaternion).invert());n.mesh.rotateY(Math.atan2(s.x,s.z));const a=n.warn?n.warn.t/n.warn.dur:0;t.body.scale.setScalar(1+a*(n.base==="boulder"?.08:.2)+(n.warn?Math.sin(n.bob*6)*.04:0));for(const o of t.tint)o.emissive.set(n.flash>0?16777215:n.armored?16756736:o.userData.em??(o.userData.em=o.emissive.getHex())),o.emissiveIntensity=n.flash>0?1:n.armored?1+Math.sin(n.bob*2)*.4:.35+a*1.4;if(n.flash>0&&(n.flash-=e),t.stars.visible=n.stun>0,t.stars.rotation.y+=e*6,n.base==="grunt"){const o=n.lunge?1:a;i.arm.rotation.x=o*Math.PI/2,i.arm.position.z=.1+(n.lunge?.25:-a*.15)}else if(n.base==="jelly")i.tentacles.scale.y=1+Math.sin(n.bob)*.18+a*.4;else if(n.base==="archer")i.bow.rotation.y=-a*.5,i.bow.position.z=.2+a*.12;else if(n.base==="brute"||n.base==="boss"){const o=n.warn?Math.min(1,a*1.4):0,l=n.slamT/.35,c=n.summonT>0?Math.sin(n.bob*4)*.5+.5:0;i.fists.forEach((u,d)=>{const f=d?1:-1;u.position.set(f*(.98-o*.45),-.2+o*1.15-l*.3+c*.6,.25+o*.1)}),i.core.position.y=-l*.08,n.base==="brute"&&t.tint[0].color.set(n.hp>5?16777215:n.hp>2.5?16766708:16755421)}else if(n.base==="boulder"){if(!n.rolling){const o=i.roll.rotation.x,l=Math.round(o/(Math.PI*2))*Math.PI*2;i.roll.rotation.x=o+(l-o)*(1-Math.exp(-e*8))+(n.warn?Math.sin(n.bob*14)*.05*a:0)}i.eye.material.emissiveIntensity=n.stun>0?.3:2.2+a*3,i.pebbles.forEach((o,l)=>{o.visible=!!n.rolling,o.position.set(Math.cos(n.bob*2+l*1.6)*.75,-.3+l%2*.4,Math.sin(n.bob*2+l*1.6)*.75)})}}function JM(){_.enemies.forEach(n=>!n.dead&&Hc(n)),_.enemies=[],_.warnings.forEach(lo),_.warnings=[]}const w={d:new ze(0,0,1),p:new ze,face:new ze(1,0,0),state:"free",t:0,air:0,invuln:0,guardInv:0,hp:Ge.maxHp,moving:0,idleT:0,vel:new ze,chillT:0,burnT:0,anim:{sy:1,vy:0,sz:1,vz:0,hop:0,imp:0,lean:0,vl:0}};function rr(n){w.d.copy(n).normalize(),w.p.copy(Wn(w.d))}const Wc=()=>_.tier<=2||_.tut?Ge.perfectEarly:Ge.perfectLate,fr=n=>{_.ult=Math.min(100,_.ult+n)};function ss(n,e){const t=ot.quaternion.clone().invert(),i=new ze(1,0,0).applyQuaternion(Nt.quaternion).applyQuaternion(t),r=new ze(0,1,0).applyQuaternion(Nt.quaternion).applyQuaternion(t),s=Wt(w.d,i.multiplyScalar(n).addScaledVector(r,-e));return s.lengthSq()>1e-8?s.normalize():w.face.clone()}function Xc(n){return w.state!=="free"?!1:_.stamina<1?(St("體力不足","var(--dash)"),Ye.empty(),!1):(_.stamina-=1,w.state="dash",w.t=0,w.dashDir=n,w.face=n.clone(),w.dashHit=new Set,Ye.dash(),w.dashLen=Ge.dashDist,qt("dash"),!0)}function qc(n){w.state==="free"&&(w.state="parry",w.t=0,w.parried=!1,w.parryDir=n,w.face=n.clone(),w.anim.imp=.2,yt(300,.08,"square",.04),yn.visible=!0,qt("guard"))}function ch(n=Ge.lockRange){let e=null,t=n;for(const i of _.enemies){if(i.dead||i.spawn<1)continue;const r=i.d.angleTo(w.d)*je-i.r;r<t&&(t=r,e=i)}return e?{e,dist:t+e.r}:null}function Yc(){const n=ch(),e=n?Xt(w.d,n.e.d):w.face.clone();Xc(e)&&n&&(w.dashLen=rn(n.dist+.6,Ge.tapDashMin,Ge.tapDashMax),ft(_i(n.e).addScaledVector(n.e.d,.4),16751164,10,3,.4))}function $c(){_.state!=="play"||_.mode!=="play"||w.air<=0&&(w.state==="free"||w.state==="dash")&&(w.air=Ge.jumpTime,Ye.jump(),qt("jumpPress"))}function QM(){const n=ch(12);return n?Xt(w.d,n.e.d):w.face.clone()}function jc(n){if(_.tut?.noDamage){w.invuln=1,w.anim.imp=1,_.shake=Math.max(_.shake,.8),Ye.hurt(),rs(.3,"#ff4a5a"),Xn("hurt",.6),qt("hurt");return}w.hp--,_.hurtCount++,w.hp<=0&&_.passives.has("undying")&&!_.undyingUsed&&(_.undyingUsed=!0,w.hp=1,St("不屈！","var(--gold)")),w.invuln=Ge.hurtInvuln,_.combo=0,w.anim.imp=1,_.shake=Math.max(_.shake,1.1),Ye.hurt(),rs(.45,"#ff4a5a"),Oi(w),Xn("hurt",.7);const e=Xt(w.d,n).negate();isNaN(e.x)||rr(_t(w.d,e,Ge.knockback)),w.state==="parry"&&(w.state="free",yn.visible=!1),qt("hurt")}function ey(n){w.chillT=n,St("凍傷！行動變慢","var(--ink)"),ft(w.p,12577535,18,5,.6)}function ty(n){const e=Ql(w.d)==="lava"&&w.air<=0&&w.state!=="dash"&&w.state!=="ult";w.burnT=e?w.burnT+n:0,!(w.burnT<di.burnDelay+(_.passives.has("spikes")?.4:0))&&(w.burnT=0,ft(w.p,16738848,26,7,.6),St("燙！","var(--hurt)"),qt("burn"),w.invuln<=0&&!(w.guardInv>0)&&jc(w.d),uh())}function uh(){const n=Ix(w.d);n&&(w.hop={from:w.d.clone(),to:n,t:0,dur:Math.max(.18,Math.min(.4,n.angleTo(w.d)*je/12))},w.air=Math.max(w.air,w.hop.dur))}function ny(n){if(w.invuln-=n,w.guardInv=Math.max(0,w.guardInv-n),w.chillT=Math.max(0,w.chillT-n),w.air>0&&(w.air-=n,w.air<=0&&(Ye.land(),w.anim.imp=1)),w.moving=0,w.idleT+=n,w.hop){const a=w.hop;a.t+=n;const o=rn(a.t/a.dur,0,1);rr(new ze().lerpVectors(a.from,a.to,o).normalize()),w.burnT=0,w.vel.set(0,0,0),o>=1&&(w.hop=null),_.stamina=Math.min(Ge.stamMax,_.stamina+n/Ge.stamRegen);return}const e=_.move,t=Ql(w.d)==="ice",i=w.chillT>0?.6:1;if(w.state==="free"&&e.m>0){const a=ss(e.sx,e.sy),o=rn(1-ec(w.d,a)*.8,.5,1.4)*(kn(w.d)?Ge.waterSlow:1)*i,l=Ge.moveSpeed*e.m*o;t?w.vel.lerp(a.clone().multiplyScalar(l),1-Math.exp(-n*(_.passives.has("spikes")?di.spikeGrip:di.iceGrip))):w.vel.copy(a).multiplyScalar(l),rr(_t(w.d,w.vel,n)),w.vel.copy(Wt(w.d,w.vel)),w.face=a,w.moving=e.m,w.idleT=0}else if(t&&w.state!=="dash"&&w.vel.lengthSq()>.02)rr(_t(w.d,w.vel,n)),w.vel.copy(Wt(w.d,w.vel)).multiplyScalar(Math.exp(-n*(_.passives.has("spikes")?di.spikeGrip:di.iceGrip*.55)));else if(w.state==="dash"){w.t+=n;const a=w.dashDir,o=rn(1-ec(w.d,a)*.9,.55,1.5);rr(_t(w.d,a,Ge.dashDist/Ge.dashTime*o*n)),w.dashDir=Wt(w.d,a).normalize(),w.face=w.dashDir,Math.random()<.8&&ft(w.p.clone().addScaledVector(w.d,.4),9430015,1,1.5,.3);for(const l of _.enemies)l.dead||l.spawn<1||w.dashHit.has(l)||w.p.distanceTo(_i(l))>l.r+.65||(w.dashHit.add(l),xr(l,o*(l.stun>0?1.5:1)*(_.passives.has("ram")?1.4:1),w.dashDir));w.t>=Ge.dashTime*w.dashLen/Ge.dashDist&&(w.state="free",w.anim.imp=.7,w.vel.copy(w.dashDir).multiplyScalar(t?Ge.moveSpeed*1.4:0),Ql(w.d)==="lava"&&uh())}else if(w.state==="parry"){w.t+=n,w.t>=Ge.parryTime&&(w.state="free",yn.visible=!1,yt(240,.06,"sine",.05));const a=w.t<=Wc(),o=1-w.t/Ge.parryTime;w.parried||yn.material.color.set(a?16763981:5999871),yn.material.opacity=o<.25?Math.floor(w.t*24)%2?.85:.25:.5+.45*o}else yn.visible&&(yn.material.opacity=Math.min(.85,w.guardInv*2),w.guardInv<=0&&(yn.visible=!1));if(w.state!=="free")w.idleT=0;else if(w.idleT>.8){const a=ss(0,1);w.face=Wt(w.d,w.face.clone().lerp(a,1-Math.exp(-n*4))).normalize()}ty(n),_.stamina=Math.min(Ge.stamMax,_.stamina+n/Ge.stamRegen);const r=_.passives.has("magnet"),s=_.crystals.find(a=>a.d.angleTo(w.d)*je<(r?2.75:1.1));if(s){const a=Jn.crystalPay+(r?5:0);ft(s.mesh.position,4843263,20,6,.6),ot.remove(s.mesh),_.crystals=_.crystals.filter(o=>o!==s),fr(Jn.crystal),_.runCrystals+=a,Ye.pickup(),qt("crystal"),Oi(w),St(`星晶 +${a}　大招 +${Jn.crystal}`,"var(--ink)")}}function iy(n,e){Xr.position.copy(w.p),Xr.quaternion.setFromUnitVectors(Ui,w.d);const t=Wt(w.d,w.face).applyQuaternion(Xr.quaternion.clone().invert());t.lengthSq()>1e-6&&(qr.rotation.y=Math.atan2(t.x,t.z));const i=w.anim,r=w.state==="dash"||w.state==="ult";let s=1+Math.sin(e*3)*.05,a=1,o=0;if(w.moving>0&&w.state==="free"&&w.air<=0){i.hop+=n*(8+w.moving*6);const f=Math.abs(Math.sin(i.hop));o=f*.3*w.moving,s=.8+f*.38}if(r?(s=.6,a=1.8):w.state==="parry"&&(s=.9),w.air>0){const f=1-w.air/Ge.jumpTime;o=Math.sin(Math.PI*f)*1.1,s=f<.5?1.3:1.05}_.state==="over"&&(s=.55,o=0),s*=1-i.imp*.42,i.imp*=Math.exp(-n*7),i.vy+=(s-i.sy)*280*n,i.vy*=Math.exp(-n*13),i.sy+=i.vy*n,i.vz+=(a-i.sz)*280*n,i.vz*=Math.exp(-n*13),i.sz+=i.vz*n;const l=1/Math.sqrt(Math.max(.25,i.sy*i.sz));Bc.scale.set(l,i.sy,i.sz*l),qr.position.y=o;const c=r?.35:w.moving>0?-.18*w.moving:0;i.vl+=(c-i.lean)*160*n,i.vl*=Math.exp(-n*7),i.lean+=i.vl*n,En.rotation.x=i.lean,(_.state==="play"||_.state==="over"||_.state==="win")&&aM(n,w),iM(n,_.state==="over"?"dizzy":r||w.state==="parry"||_.mode==="ultDraw"?"determined":"idle");const u=w.state==="parry"&&w.t<=Wc();eo.emissive.set(w.state==="ult"||u||w.guardInv>0?13144064:w.state==="parry"?2052048:w.state==="dash"?2783952:w.chillT>0?8376575:671626),eo.emissiveIntensity=w.state==="free"&&!(w.guardInv>0)?.6:.9;let d=0;if(w.state==="parry"){const f=rn(w.t/Ge.parryTime,0,1),p=(f-.18)/.82;d=f<.18?1-(1-f/.18)**3:1-p*p*(3-2*p)}qr.position.x=0,qr.position.z=d*.38,En.rotation.x+=d*.3,Xr.visible=w.invuln>0&&w.state!=="ult"&&_.state==="play"?Math.floor(e*16)%2===0:!0}function ry(n){Object.assign(w,{hp:Ge.maxHp,invuln:0,guardInv:0,state:"free",air:0,t:0,chillT:0,burnT:0,hop:null}),w.vel.set(0,0,0),yn.visible=!1,rr(n),Xn("idle")}const sy=Q("ptrs"),dh=[];for(let n=0;n<3;n++){const e=document.createElement("i");e.hidden=!0,sy.append(e),dh.push(e)}const ay=6.5;function oy(n){let e=[];_.state==="play"&&_.mode==="play"&&_.storm<.5&&(e=_.enemies.filter(s=>!s.dead&&s.spawn>=0&&s.d.angleTo(w.d)*je>ay).sort((s,a)=>s.d.angleTo(w.d)-a.d.angleTo(w.d)).slice(0,3));const t=n(w.d),i=innerWidth/2-34,r=innerHeight/2-90;dh.forEach((s,a)=>{const o=e[a];if(s.hidden=!o,!o)return;const l=n(_t(w.d,Xt(w.d,o.d),2.5)),c=Math.atan2(l.y-t.y,l.x-t.x);s.style.transform=`translate(${innerWidth/2+Math.cos(c)*i}px,${innerHeight/2+Math.sin(c)*r}px) rotate(${c}rad)`,s.className=o.base==="boss"?"boss":""})}const en={circle:"實心圓：走出去或衝出去",ring:"圓環震波：按跳躍鈕躍過，或格擋",boulder:"滾石會連滾三次，一次比一次快！滾完會暈",jelly:"水母住在湖裡：衝進水中或用大招掠過湖面打牠",archer:"箭可以格擋反彈，也能跳過",ice:"冰面會滑：提早放開方向，用慣性走位",frostGrunt:"霜矛兵刺中會凍傷，讓你變慢",frostBrute:"冰巨魔的震波有兩圈",frostArcher:"霜弓手一次放三支箭",storm:"沙暴來襲時看不見敵人，只看得見黃色預警！",sandGrunt:"沙矛兵會鑽地，從身邊冒出來",sandBoulder:"沙滾石會連滾四次",lava:"岩漿河會燙傷：用跳躍或衝撞越過，或走沒有岩漿的淺灘",lavaGrunt:"熔矛兵死掉時會爆炸，打完快走開",lavaBrute:"熔岩巨魔砸過的地面會燃燒一陣子",magmaJelly:"岩漿水母的體型更大，也住在岩漿裡"},Lt=[{id:"grass",name:"草原星",blurb:"溫和的起點。湖面會擋住敵人，大招掠過湖面不耗墨。",hpMul:1,reward:50,roster:["grunt","brute","boulder","jelly","archer"],levels:[{name:"初次降落",tier:1,waves:["grunt*2","grunt*3","grunt*3","grunt*4","grunt*4"]},{name:"巨魔現身",tier:2,waves:["grunt*3",["grunt*2 brute",en.circle],"grunt*3 brute","grunt*4","grunt*4 brute"]},{name:"震波平原",tier:3,waves:["grunt*2 brute",["grunt*4 brute",en.ring],"grunt*3 brute / grunt*2 @1","grunt*3 brute","grunt*4 brute / grunt*2 @1"]},{name:"落石山道",tier:3,waves:[["grunt*2 boulder",en.boulder],"grunt*2 boulder*2","grunt*3 brute boulder","grunt*3 boulder*2","grunt*4 brute boulder"]},{name:"水母之湖",tier:4,waves:[["jelly grunt*2",en.jelly],"jelly*2 grunt*2","jelly grunt*3 brute","jelly*2 boulder","jelly*2 grunt*3 brute","jelly*3 boulder"]},{name:"松果森林",tier:4,waves:[["archer grunt*2",en.archer],"archer*2 grunt*2","archer*2 brute","archer*2 jelly grunt*2","archer*2 boulder brute","archer*3 jelly grunt*2","archer*3 boulder brute"]},{name:"總攻擊",tier:5,waves:["grunt*4 brute / grunt*2 boulder @1","archer*2 jelly boulder / grunt*3 brute @2","grunt*3 brute*2 boulder / archer*2 jelly @2","archer*3 jelly boulder / grunt*3 brute @2","grunt*4 brute*2 boulder / archer*2 jelly @2"]},{name:"岩王",tier:6,boss:!0,waves:[["rockKing grunt*2 / grunt*3 @1","岩王：完美格擋可以讓它暈眩"]]}]},{id:"ice",name:"冰雪星",blurb:"結冰的湖面會滑，放開方向後還會繼續滑一段。",hpMul:1.15,reward:80,gate:14,roster:["frostGrunt","frostBrute","boulder","jelly","frostArcher"],levels:[{name:"滑行訓練",tier:4,waves:[["grunt*3",en.ice],"grunt*3 archer","grunt*3 brute","grunt*4 archer","grunt*4 brute"]},{name:"霜矛小隊",tier:4,waves:[["frostGrunt*3",en.frostGrunt],"frostGrunt*3 archer","frostGrunt*4 brute","frostGrunt*4 archer","frostGrunt*5 brute"]},{name:"冰原震動",tier:5,waves:["frostGrunt*2 brute",["frostGrunt*2 frostBrute",en.frostBrute],"frostGrunt*3 frostBrute boulder","frostBrute*2 boulder","frostGrunt*4 frostBrute boulder","frostBrute*3 boulder"]},{name:"冰下來客",tier:5,waves:["jelly*2 frostGrunt*2","jelly*2 frostBrute","jelly*3 archer*2","jelly*2 frostGrunt*3 / boulder*2 @1","jelly*4 archer*2","jelly*3 frostGrunt*3 / boulder*2 @1"]},{name:"三連箭",tier:6,waves:[["frostArcher frostGrunt*2",en.frostArcher],"frostArcher*2 frostGrunt*2","frostArcher*2 frostBrute","frostArcher*2 boulder*2 / frostGrunt*3 @1","frostArcher*3 frostBrute","frostArcher*3 boulder*2 / frostGrunt*3 @1"]},{name:"白色迷宮",tier:6,waves:["frostGrunt*4 boulder / frostBrute @1","frostArcher*2 jelly*2 / frostGrunt*3 @1","frostBrute*2 boulder*2 / frostArcher*2 @1","frostGrunt*4 frostArcher*2 / frostBrute*2 @2","frostBrute*3 boulder*2 / frostArcher*2 @1","frostGrunt*5 frostArcher*2 / frostBrute*2 @2"]},{name:"永凍要塞",tier:7,waves:["frostGrunt*4 frostBrute boulder / frostArcher*2 jelly @2","frostBrute*2 frostArcher*2 / boulder*2 frostGrunt*3 @2","frostGrunt*5 frostBrute*2 / frostArcher*3 jelly*2 @3","frostBrute*3 frostArcher*2 / boulder*2 frostGrunt*3 @2","frostGrunt*6 frostBrute*2 / frostArcher*3 jelly*2 @3"]},{name:"冰晶女王",tier:7,boss:!0,waves:[["frostQueen frostGrunt*2 / frostGrunt*3 @1","冰晶女王：護甲展開時，照編號順序劃過光點"]]}]},{id:"desert",name:"沙漠星",blurb:"沙暴定期掃過，看不見敵人，只看得見地上的預警。",hpMul:1.3,reward:110,gate:30,roster:["sandGrunt","brute","sandBoulder","jelly","archer"],levels:[{name:"沙丘邊境",tier:6,waves:[["grunt*4",en.storm],"grunt*3 archer*2","grunt*3 brute boulder","grunt*4 archer*2","grunt*4 brute boulder"]},{name:"地底伏兵",tier:6,waves:[["sandGrunt*3",en.sandGrunt],"sandGrunt*4 archer","sandGrunt*3 brute","sandGrunt*4 boulder","sandGrunt*4 brute","sandGrunt*5 boulder"]},{name:"風化巨岩",tier:7,waves:[["sandBoulder grunt*2",en.sandBoulder],"sandBoulder*2 sandGrunt*2","sandBoulder*2 brute","sandBoulder*2 archer*2 / sandGrunt*3 @1","sandBoulder*3 brute","sandBoulder*3 archer*2 / sandGrunt*3 @1"]},{name:"綠洲之戰",tier:7,waves:["jelly*2 sandGrunt*3","jelly*2 archer*2 brute","jelly*3 sandBoulder sandGrunt*2","jelly*2 brute*2 / sandGrunt*4 @1","jelly*4 sandBoulder sandGrunt*2","jelly*3 brute*2 / sandGrunt*4 @1"]},{name:"沙中箭雨",tier:8,waves:["archer*3 sandGrunt*2","archer*3 brute boulder","archer*4 sandBoulder / sandGrunt*4 @1","archer*3 jelly*2 / brute*2 sandGrunt*2 @2","archer*5 sandBoulder / sandGrunt*4 @1","archer*4 jelly*2 / brute*2 sandGrunt*2 @2"]},{name:"風暴之眼",tier:8,waves:["sandGrunt*5 brute / archer*3 @2","sandBoulder*3 archer*2 / brute*2 @1","sandGrunt*4 brute*2 / sandBoulder*2 jelly*2 @2","archer*4 brute*2 / sandGrunt*5 @2","sandGrunt*5 brute*2 / sandBoulder*2 jelly*2 @2","archer*5 brute*2 / sandGrunt*5 @2"]},{name:"王蟲巢穴",tier:9,waves:["sandGrunt*6 brute*2 / sandBoulder*2 archer*3 @3","brute*3 archer*3 / sandGrunt*5 sandBoulder @3","sandBoulder*3 brute*2 jelly*2 / sandGrunt*6 archer*2 @3","brute*4 archer*3 / sandGrunt*5 sandBoulder @3","sandBoulder*4 brute*2 jelly*2 / sandGrunt*6 archer*2 @3"]},{name:"沙海王蟲",tier:9,boss:!0,waves:[["sandWyrm sandGrunt*2 / sandGrunt*3 @1","沙海王蟲：光點是牠的身體，會移動，一筆全部切過"]]}]},{id:"volcano",name:"火山星",blurb:"岩漿河會燙傷你，跳躍和衝撞可以安全越過。",hpMul:1.4,reward:140,gate:46,roster:["lavaGrunt","lavaBrute","boulder","magmaJelly","archer"],levels:[{name:"灰燼平原",tier:8,waves:[["grunt*4 archer",en.lava],"grunt*4 brute","grunt*3 brute boulder archer","grunt*5 brute","grunt*4 brute boulder archer"]},{name:"自爆小隊",tier:8,waves:[["lavaGrunt*3",en.lavaGrunt],"lavaGrunt*4 archer","lavaGrunt*4 boulder","lavaGrunt*5 brute","lavaGrunt*5 boulder","lavaGrunt*6 brute"]},{name:"焦土行軍",tier:9,waves:[["lavaBrute grunt*3",en.lavaBrute],"lavaBrute lavaGrunt*3","lavaBrute*2 archer*2","lavaBrute*2 boulder*2 / lavaGrunt*3 @1","lavaBrute*3 archer*2","lavaBrute*3 boulder*2 / lavaGrunt*3 @1"]},{name:"岩漿之主",tier:9,waves:[["magmaJelly lavaGrunt*3",en.magmaJelly],"magmaJelly*2 archer*2","magmaJelly*2 lavaBrute","magmaJelly*3 boulder*2 / lavaGrunt*4 @1","magmaJelly*3 lavaBrute","magmaJelly*4 boulder*2 / lavaGrunt*4 @1"]},{name:"火雨",tier:10,waves:["archer*4 lavaGrunt*2","archer*3 lavaBrute*2","archer*4 magmaJelly*2 / lavaGrunt*4 @2","archer*3 boulder*3 / lavaBrute*2 lavaGrunt*2 @2","archer*5 magmaJelly*2 / lavaGrunt*4 @2","archer*4 boulder*3 / lavaBrute*2 lavaGrunt*2 @2"]},{name:"裂谷死鬥",tier:10,waves:["lavaGrunt*6 lavaBrute / archer*3 @2","boulder*3 magmaJelly*2 / lavaBrute*2 @1","lavaBrute*2 archer*3 / lavaGrunt*6 @3","lavaBrute*3 boulder*2 / magmaJelly*2 archer*3 @3","lavaBrute*3 archer*3 / lavaGrunt*6 @3","lavaBrute*4 boulder*2 / magmaJelly*2 archer*3 @3"]},{name:"火山口",tier:11,waves:["lavaGrunt*6 lavaBrute*2 / boulder*3 archer*3 @3","lavaBrute*3 archer*4 / lavaGrunt*6 magmaJelly @3","lavaBrute*3 boulder*3 magmaJelly*2 / lavaGrunt*7 archer*3 @4","lavaBrute*4 archer*4 / lavaGrunt*6 magmaJelly @3","lavaBrute*4 boulder*3 magmaJelly*2 / lavaGrunt*7 archer*3 @4"]},{name:"熔岩泰坦",tier:11,boss:!0,waves:[["lavaTitan lavaGrunt*2 / lavaGrunt*3 @1","熔岩泰坦：只劃金色光點，碰到紅色光點就失敗"]]}]}],hn=(n,e)=>`${Lt[n].id}-${e+1}`;function Mr(n){const[e,t]=n.split("-"),i=Lt.findIndex(s=>s.id===e),r=t-1;return i<0||!Lt[i].levels[r]?null:{id:n,planet:Lt[i],p:i,i:r,...Lt[i].levels[r]}}const ly=()=>Lt.flatMap((n,e)=>n.levels.map((t,i)=>Mr(hn(e,i))));function cy(n){const[e,t]=Array.isArray(n)?n:[n],i=e.split("/").map(r=>{const s={};for(const a of r.trim().split(/\s+/)){if(a[0]==="@"){s.at=+a.slice(1);continue}const[o,l]=a.split("*");s[o]=(s[o]||0)+(+l||1)}return s});return t?{groups:i,tip:t}:{groups:i}}const uy=n=>Object.entries(n).filter(([e])=>e!=="at").flatMap(([e,t])=>Array(t).fill(e));function dy(n,e){const[t,i,r,s,a]=e.roster,o={[t]:Math.min(3+n,8),[i]:Math.min(1+(n>>1),3),[r]:Math.min(1+(n>>1),3)},l={[t]:Math.min(2+n,6),[s]:Math.min(1+(n>>2),2),[a]:Math.min(1+(n>>1),3),at:2};return{groups:[o,l]}}const Kc={hp:{name:"生命上限",desc:"每級 +1 格生命",costs:[80,160,280,440,660]},stamina:{name:"體力",desc:"每級 +1 格體力，回復快 6%",costs:[100,240,440]},charge:{name:"大招充能",desc:"每級自動充能 +0.5/秒，開局 +5",costs:[80,190,350,540]},slot:{name:"被動欄位",desc:"多裝備 1 個被動技能",costs:[320]}},fh={line:{name:"劃線斬",desc:"基本大招",cost:0},chain:{name:"連鎖線",desc:"斬中敵人時，閃電跳向附近 2 隻敵人，造成一半傷害",cost:300},blast:{name:"爆炸終點",desc:"路線終點引爆，範圍傷害隨當下速度變強",cost:300}},hh={steady:{name:"穩固格擋",desc:"完美格擋時間 +0.06 秒",cost:150},regen:{name:"再生黏液",desc:"每清完一波多回 1 格生命",cost:200},magnet:{name:"星晶磁鐵",desc:"撿取範圍 2.5 倍，星晶掉落 +5",cost:120},ram:{name:"重擊衝撞",desc:"衝撞傷害 ×1.4",cost:180},spikes:{name:"防滑釘",desc:"冰面幾乎不滑，岩漿灼傷延後 0.4 秒",cost:120},focus:{name:"專注",desc:"完美格擋額外充能 15",cost:160},undying:{name:"不屈",desc:"每關一次，致命傷害時留下 1 格生命",cost:300}};function ph(n,e={maxHp:5,stamMax:3,stamRegen:.8,charge:2.5,start:30}){return{maxHp:e.maxHp+(n.hp||0),stamMax:e.stamMax+(n.stamina||0),stamRegen:e.stamRegen*(1-.06*(n.stamina||0)),charge:e.charge+.5*(n.charge||0),start:e.start+5*(n.charge||0),slots:2+(n.slot||0)}}function fy(n,e,t,i,r=0){const s=n*(e?3:1);return Math.round(i?s:s*.25)+Math.max(0,t-r)*Math.round(n*.4)}const mh="slasharena-save",hy=1,gh=()=>({v:hy,crystals:0,upgrades:{},owned:{ult:["line"],passive:[]},equip:{ult:"line",passives:[]},levels:{},endless:{}});function py(n){const e=gh();return!n||typeof n!="object"||(e.crystals=Number.isFinite(n.crystals)?Math.max(0,n.crystals):0,n.upgrades&&typeof n.upgrades=="object"&&(e.upgrades={...n.upgrades}),Array.isArray(n.owned?.ult)&&(e.owned.ult=[...new Set(["line",...n.owned.ult])]),Array.isArray(n.owned?.passive)&&(e.owned.passive=[...n.owned.passive]),e.owned.ult.includes(n.equip?.ult)&&(e.equip.ult=n.equip.ult),Array.isArray(n.equip?.passives)&&(e.equip.passives=n.equip.passives.filter(t=>e.owned.passive.includes(t))),n.levels&&typeof n.levels=="object"&&(e.levels={...n.levels}),n.endless&&typeof n.endless=="object"&&(e.endless={...n.endless})),e}function my(){try{return py(JSON.parse(localStorage.getItem(mh)))}catch{return gh()}}const $e=my();function vi(){try{localStorage.setItem(mh,JSON.stringify($e))}catch{}}const oc=typeof location>"u"?new URLSearchParams:new URLSearchParams(location.search),Zc=oc.has("unlock");oc.has("crystals")&&($e.crystals=+oc.get("crystals")||0,vi());const fo=n=>!!$e.levels[n]?.stars,_h=n=>Zc||n===0||fo(hn(n-1,Lt[n-1].levels.length-1)),lc=n=>Zc?0:Math.max(0,(Lt[n].gate||0)-no());function ho(n){return _h(n)&&!lc(n)}function gy(n,e){return ho(n)&&(Zc||e===0||fo(hn(n,e-1)))}const _y=n=>fo(hn(n,Lt[n].levels.length-1)),no=()=>Object.values($e.levels).reduce((n,e)=>n+(e.stars||0),0),vh=()=>Lt.reduce((n,e)=>n+e.levels.length*3,0);function xh(n){const e=Mr(n);return e?e.i+1<e.planet.levels.length?hn(e.p,e.i+1):e.p+1<Lt.length&&ho(e.p+1)?hn(e.p+1,0):null:null}function vy(){for(let n=Lt.length-1;n>=0;n--)if(ho(n)){for(let e=0;e<Lt[n].levels.length;e++)if(!fo(hn(n,e)))return hn(n,e);return hn(n,0)}return hn(0,0)}const xy={S:3,A:2,B:1,C:1};function My(n,e,t,i){const r=Mr(n),s=$e.levels[n]||{stars:0,best:0},a=xy[e]||1,o=!s.stars,l=fy(r.planet.reward,!!r.boss,a,o,s.stars)+i;return $e.levels[n]={stars:Math.max(s.stars,a),best:Math.max(s.best,t)},$e.crystals+=l,vi(),{earned:l,stars:a,first:o,newStars:Math.max(0,a-s.stars)}}function Mh(n,e,t){const i=n+e*Math.round(t*.15);return $e.crystals+=i,vi(),i}function yy(n,e,t,i){const r=$e.endless[n]||{waves:0,best:0};$e.endless[n]={waves:Math.max(r.waves,e),best:Math.max(r.best,t)};const s=i+e*12;return $e.crystals+=s,vi(),s}const Jc=n=>$e.upgrades[n]||0,Qc=n=>Kc[n].costs[Jc(n)],yh=()=>ph($e.upgrades);function eu(n){return n===void 0||$e.crystals<n?!1:($e.crystals-=n,!0)}function Sh(n){return eu(Qc(n))?($e.upgrades[n]=Jc(n)+1,vi(),!0):!1}function Sy(n){return $e.owned.ult.includes(n)||!eu(fh[n].cost)?!1:($e.owned.ult.push(n),$e.equip.ult=n,vi(),!0)}function by(n){return $e.owned.passive.includes(n)||!eu(hh[n].cost)?!1:($e.owned.passive.push(n),bh(n),vi(),!0)}function Ey(n){$e.owned.ult.includes(n)&&($e.equip.ult=n,vi())}function bh(n){const e=$e.equip.passives,t=e.indexOf(n);if(t>=0)e.splice(t,1);else if($e.owned.passive.includes(n)&&e.length<yh().slots)e.push(n);else return!1;return vi(),!0}const sl={maxHp:Ge.maxHp,stamMax:Ge.stamMax,stamRegen:Ge.stamRegen,charge:wt.charge,start:wt.start,perfectEarly:Ge.perfectEarly,perfectLate:Ge.perfectLate};function Ty(){const n=ph($e.upgrades,sl);_.passives=new Set($e.equip.passives),_.ultKind=$e.equip.ult;const e=_.passives.has("steady")?.06:0;Object.assign(Ge,{maxHp:n.maxHp,stamMax:n.stamMax,stamRegen:n.stamRegen,perfectEarly:sl.perfectEarly+e,perfectLate:sl.perfectLate+e}),Object.assign(wt,{charge:n.charge,start:n.start})}const Eh='<svg viewBox="0 0 20 20"><path d="M10 1.8l2.5 5.3 5.8.8-4.2 4 1 5.8-5.1-2.8-5.1 2.8 1-5.8-4.2-4 5.8-.8z"/></svg>',jd='<svg viewBox="0 0 20 20" fill="currentColor"><path d="M6 9V6.5a4 4 0 0 1 8 0V9h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1zm2 0h4V6.5a2 2 0 0 0-4 0z"/></svg>',wy='<svg class="gem" viewBox="0 0 20 20"><path d="M10 1l6.5 6.5L10 19 3.5 7.5z"/></svg>',Th=n=>[1,2,3].map(e=>`<i class="${e<=n?"on":""}">${Eh}</i>`).join(""),js=n=>`${wy}${n.toLocaleString()}`;let tr=null,cc=0,Cs="stat";function Ay(n){tr=n,Q("mapBack").onclick=tr.title,Q("shopBtn").onclick=()=>{Ye.ui(),uc(),tr.shop()},Q("shopBack").onclick=()=>{Ye.ui(),tu(),tr.map()},Q("endlessBtn").onclick=()=>tr.endless(cc);for(const e of document.querySelectorAll("#shopTabs button"))e.onclick=()=>{Cs=e.dataset.tab,Ye.ui(),uc()}}function tu(n=cc){cc=n,tr.select(Lt[n].id),Q("mapStars").innerHTML=`${Eh}${no()} / ${vh()}`,Q("mapGems").innerHTML=js($e.crystals),Q("planets").innerHTML=Lt.map((i,r)=>`<button type="button" class="orb ${i.id} ${r===n?"sel":""}" data-i="${r}" ${_h(r)?"":"disabled"} aria-label="${i.name}">${ho(r)?"":jd}</button>`).join("");for(const i of Q("planets").children)i.onclick=()=>{Ye.ui(),tu(+i.dataset.i)};Q("pName").textContent=Lt[n].name,Q("pBlurb").textContent=lc(n)?`再拿 ${lc(n)} 顆星才能降落（需要 ★${Lt[n].gate}）。回前面的關卡拿更高評價吧。`:Lt[n].blurb,Q("levels").innerHTML=Lt[n].levels.map((i,r)=>{const s=hn(n,r),a=gy(n,r),o=$e.levels[s];return`<button type="button" class="node ${i.boss?"boss":""}" data-id="${s}" ${a?"":"disabled"}><b>${a?r+1:jd}</b><span>${a?i.name:"未解鎖"}</span><em>${a?Th(o?.stars||0):""}</em></button>`}).join("");for(const i of Q("levels").children)i.onclick=()=>tr.play(i.dataset.id);const e=Q("endlessBtn"),t=$e.endless[Lt[n].id];e.hidden=!_y(n),e.textContent=t?.waves?`無盡模式（最遠 ${t.waves} 波）`:"無盡模式"}const al=(n,e,t)=>`<div class="shop-row"><div><b>${n}</b><span>${e}</span></div>${t}</div>`,Es=(n,e,t)=>`<button type="button" class="buy" ${n} ${e!==null&&$e.crystals<e?"disabled":""}>${t??js(e)}</button>`;function uc(){Q("shopGems").innerHTML=js($e.crystals);for(const t of document.querySelectorAll("#shopTabs button"))t.classList.toggle("sel",t.dataset.tab===Cs);let n="";if(Cs==="stat"&&(n=Object.entries(Kc).map(([t,i])=>{const r=Jc(t),s=Qc(t),a=i.costs.map((o,l)=>`<i class="${l<r?"on":""}"></i>`).join("");return al(i.name,`${i.desc}<small class="pips">${a}</small>`,s===void 0?'<span class="max">已滿</span>':Es(`data-up="${t}"`,s))}).join("")),Cs==="ult"&&(n=Object.entries(fh).map(([t,i])=>{const r=$e.owned.ult.includes(t),s=$e.equip.ult===t;return al(i.name,i.desc,r?Es(`data-ult="${t}" ${s?'aria-pressed="true"':""}`,null,s?"使用中":"裝備"):Es(`data-ultbuy="${t}"`,i.cost))}).join("")),Cs==="passive"){const t=$e.equip.passives,i=yh().slots;n=`<p class="muted">已裝備 ${t.length} / ${i}</p>`+Object.entries(hh).map(([r,s])=>{const a=$e.owned.passive.includes(r),o=t.includes(r);return al(s.name,s.desc,a?Es(`data-pas="${r}" ${o?'aria-pressed="true"':""}`,null,o?"卸下":"裝備"):Es(`data-pasbuy="${r}"`,s.cost))}).join("")}const e=Q("shopList");e.innerHTML=n;for(const t of e.querySelectorAll("button"))t.onclick=()=>{const i=t.dataset;let r=!0;i.up?r=Sh(i.up):i.ult?Ey(i.ult):i.ultbuy?r=Sy(i.ultbuy):i.pas?r=bh(i.pas):i.pasbuy&&(r=by(i.pasbuy)),r?Ye.pickup():Ye.empty(),uc()}}function nu(n){const{baseV:e,gUp:t,gDown:i,vMin:r,vMax:s}=wt;let a=e*e;const o=[e];for(let l=1;l<n.length;l++){const c=n[l-1],u=n[l],d=u.h-c.h,f=c.p.distanceTo(u.p);if(c.water&&u.water||(a-=2*(d<0?i:t)*d),a>e*e&&(a=Math.max(e*e,a-16*f)),a=Math.min(a,s*s),a<r*r)return o.push(r),{vs:o,stall:l};o.push(Math.sqrt(a))}return{vs:o,stall:-1}}function Ry(n,e,t){return e.water&&n.water?0:n.p.distanceTo(e.p)*Math.min(2.5,Math.max(.45,1+t*2.2))}const Kd={down:new Le(16763981),flat:new Le(4843263),up:new Le(16730714),lake:new Le(9430015),dead:new Le(3817301)},iu=new Dt({vertexColors:!0,transparent:!0,opacity:1,side:$t,depthWrite:!1}),Ws=new oe(new It,iu);Ws.frustumCulled=!1;Ws.renderOrder=2;ot.add(Ws);const he={path:[],ink:0,budget:0,sim:{vs:[wt.baseV],stall:-1},fade:0,drawing:!1,run:null},ru=n=>{const e=sn(n);return{d:n.clone(),h:e,p:n.clone().multiplyScalar(je+e),water:qn(n)<0,kind:"flat"}};function Fi(n=-1){const e=[],t=[],r=he.path;let s=0;for(let o=0;o<r.length-1;o++){const l=r[o].p,c=r[o+1].p,u=l.distanceTo(c);if(u<1e-4)continue;const d=l.clone().normalize(),f=new ze().crossVectors(d,new ze().subVectors(c,l)).normalize().multiplyScalar(.17),p=d.clone().multiplyScalar(.14),x=(he.sim.stall>=0&&o+1>he.sim.stall?Kd.dead:Kd[r[o+1].kind]).clone().multiplyScalar(n>=0&&s+u<=n?.35:1);s+=u;const m=new ze().subVectors(c,l).normalize().multiplyScalar(.17*.6),h=l.clone().sub(m).add(f).add(p),T=l.clone().sub(m).sub(f).add(p),b=c.clone().add(m).add(f).add(p),M=c.clone().add(m).sub(f).add(p);for(const C of[h,T,b,T,M,b])e.push(C.x,C.y,C.z),t.push(x.r,x.g,x.b)}const a=new It;a.setAttribute("position",new Je(e,3)),a.setAttribute("color",new Je(t,3)),Ws.geometry.dispose(),Ws.geometry=a}const Zd=new qm,Cy=new mr(new ze,je+.5);function Py(n,e){const t=ni.domElement.getBoundingClientRect();Zd.setFromCamera({x:(n-t.left)/t.width*2-1,y:-(e-t.top)/t.height*2+1},Nt);const i=Zd.ray.intersectSphere(Cy,new ze);return i?Gf(i).normalize():null}function po(){return _.state!=="play"||_.mode!=="play"||_.ult<wt.min||w.state!=="free"?(_.state==="play"&&_.ult<wt.min&&(Ye.empty(),St("大招需累積過半","var(--mist)")),!1):(_.mode="ultDraw",he.drawing=!1,he.path=[ru(w.d)],he.ink=0,he.sim=nu(he.path),iu.opacity=1,he.fade=0,Fi(),he.budget=wt.ink*_.ult/100*(qe.boss?1.5:1),Ye.ult(),Bi("劃線斬"),qt("ultBegin"),!0)}function wh(n,e){he.drawing=!0,su(n,e)}let Jd=0;function su(n,e){if(!he.drawing)return;const t=Py(n,e);if(!t)return;let i=!1;for(let r=0;r<400;r++){const s=he.path[he.path.length-1];if(s.d.angleTo(t)*je<wt.step||!Ah(_t(s.d,Xt(s.d,t),wt.step)))break;i=!0}i&&(he.sim=nu(he.path),Fi())}function Ah(n){if(he.ink>=he.budget-.001)return!1;const e=he.path[he.path.length-1],t=ru(n),i=(t.h-e.h)/Math.max(e.d.angleTo(t.d)*je,.001);t.kind=t.water?"lake":i<-.06?"down":i>.06?"up":"flat";const r=Ry(e,t,i);if(he.ink+r>he.budget)return he.ink=he.budget,!1;he.ink+=r,t.ink=he.ink,he.path.push(t);const s=performance.now();return s-Jd>80&&(Ye.draw(t.kind),Jd=s),!0}function Ly(n){if(!po())return!1;he.drawing=!0;for(const e of n)for(let t=0;t<200;t++){const i=he.path[he.path.length-1];if(i.d.angleTo(e)*je<wt.step||!Ah(_t(i.d,Xt(i.d,e),wt.step)))break}return he.sim=nu(he.path),Fi(),au(),_.mode==="ultDraw"&&(_.mode="play"),!0}function au(){if(!he.drawing)return;he.drawing=!1;const n=he.sim.stall>=0?he.path.slice(0,he.sim.stall+1):he.path,e=[0];for(let t=1;t<n.length;t++)e.push(e[t-1]+n[t].p.distanceTo(n[t-1].p));if(e[e.length-1]<1){he.path=[ru(w.d)],Fi();return}he.run={pts:n,cum:e,total:e[e.length-1],vs:he.sim.vs,dist:0,i:0,mult:1,v:wt.baseV,kills:0,hit:new Map,seal:!!qe.boss},_.mode="ultDash",w.state="ult",Ye.dash(),Xn("determined"),_.ult=Math.max(0,_.ult-(n[n.length-1].ink||0)/wt.ink*100)}function Dy(n,e){const t=_.enemies.filter(r=>!r.dead&&r!==n&&r.spawn>=1&&!he.run.hit.has(r)&&r.d.angleTo(n.d)*je<5).sort((r,s)=>r.d.angleTo(n.d)-s.d.angleTo(n.d)).slice(0,2),i=_i(n);for(const r of t)he.run.hit.set(r,he.run.dist),tM(i,_i(r),9430015),xr(r,e,Xt(n.d,r.d),{pierce:!0}),r.dead&&he.run.kills++}function Iy(n){const e=wt.blastR;dr(w.p.clone().addScaledVector(w.d,.3),w.d,16751164,3,.5,5),ft(w.p,16763981,40,12,.7),Ye.slam(),_.shake=Math.max(_.shake,1);for(const t of _.enemies)t.dead||t.spawn<1||t.d.angleTo(w.d)*je>e+t.r||(xr(t,wt.blastDmg*n,Xt(w.d,t.d),{pierce:!0}),t.dead&&he.run.kills++)}function Uy(n){let e=n;const t=he.run;for(;e>0&&he.run;){const i=Math.min(.25,t.v*e);for(e-=i/t.v,t.dist=Math.min(t.total,t.dist+i);t.i<t.pts.length-2&&t.dist>=t.cum[t.i+1];)t.i++;const r=t.i,s=t.cum[r+1]-t.cum[r],a=s>0?rn((t.dist-t.cum[r])/s,0,1):1;rr(new ze().lerpVectors(t.pts[r].d,t.pts[r+1].d,a).normalize()),t.v=t.vs[r]+(t.vs[r+1]-t.vs[r])*a,t.mult=rn((t.v/wt.baseV)**1.5,.5,3),w.face=Xt(t.pts[r].d,t.pts[r+1].d),ft(w.p.clone().addScaledVector(w.d,.4),t.mult>=2?16763981:4843263,1,1.5,.35);for(const o of _.enemies){if(o.dead||o.spawn<1||w.p.distanceTo(_i(o))>o.r+wt.hitR)continue;const l=t.hit.get(o);if(l!==void 0&&t.dist-l<2)continue;t.hit.set(o,t.dist);const c=wt.dmg*t.mult*(o.stun>0?2:1);xr(o,c,w.face,{pierce:!0}),o.dead&&t.kills++,_.ultKind==="chain"&&Dy(o,c*.5)}if(t.seal&&AM(w.p),t.dist>=t.total&&(_.ultKind==="blast"&&Iy(Math.max(1,t.mult)),t.seal&&RM(),he.sim.stall>=0&&St("力竭…","var(--hurt)"),t.kills>=4&&(Bi("一筆入魂"),rs(.3,"#ffcc4d"),Xn("happy",1)),qt("ultEnd",t.kills),he.run=null,_.mode="play",w.state="free",w.invuln=.6,he.fade=.6,Fi()),_.hitstop>0)break}}function Ny(n){he.fade>0?(he.fade-=n,iu.opacity=Math.max(0,he.fade/.6),he.fade<=0&&(he.path=[],Fi())):_.mode==="ultDash"&&he.run&&Fi(he.run.dist)}function Fy(){he.run=null,he.path=[],he.drawing=!1,he.fade=0,Fi()}const ol=ni.domElement,fn=Q("joy"),Zr=Q("knob"),Pe={id:null,ox:0,oy:0,x:0,y:0,t0:0,st:"pending",samples:[]},ou=14,Rh=60,Ch=()=>{fn.hidden=Zr.hidden=!0};function Ks(){Pe.id=null,Pe.st="pending",Ch(),Zs.clear()}ol.addEventListener("pointerdown",n=>{if(Nn(),_.state==="play"){if(_.mode==="ultDraw"){try{ol.setPointerCapture(n.pointerId)}catch{}wh(n.clientX,n.clientY);return}if(Pe.id===null){Object.assign(Pe,{id:n.pointerId,ox:n.clientX,oy:n.clientY,x:n.clientX,y:n.clientY,t0:performance.now(),st:"pending",samples:[{t:performance.now(),x:n.clientX,y:n.clientY}]}),fn.hidden=Zr.hidden=!1,fn.className="",fn.style.setProperty("--c",0),fn.style.left=Zr.style.left=n.clientX+"px",fn.style.top=Zr.style.top=n.clientY+"px";try{ol.setPointerCapture(n.pointerId)}catch{}}}});addEventListener("pointermove",n=>{if(_.mode==="ultDraw"){su(n.clientX,n.clientY);return}if(n.pointerId!==Pe.id)return;const e=performance.now();for(Pe.x=n.clientX,Pe.y=n.clientY,Pe.samples.push({t:e,x:Pe.x,y:Pe.y});Pe.samples.length>2&&e-Pe.samples[0].t>100;)Pe.samples.shift();const t=Math.hypot(Pe.x-Pe.ox,Pe.y-Pe.oy);Pe.st==="pending"&&t>ou&&(Pe.st="move",fn.style.setProperty("--c",0)),Pe.st==="guard"&&t>30&&Ph().speed<.5&&(Pe.st="move",fn.className="cancel",fn.style.setProperty("--c",0),yt(200,.05,"sine",.04),setTimeout(()=>{fn.className==="cancel"&&(fn.className="")},260));const i=Math.min(1,Rh/Math.max(t,1));Zr.style.left=Pe.ox+(Pe.x-Pe.ox)*i+"px",Zr.style.top=Pe.oy+(Pe.y-Pe.oy)*i+"px"});function Ph(){const n=Pe.samples,e=n[0],t=n[n.length-1],i=Math.max(t.t-e.t,16),r=t.x-e.x,s=t.y-e.y;return{dx:r,dy:s,dist:Math.hypot(r,s),speed:Math.hypot(r,s)/i}}function Lh(n){if(_.mode==="ultDraw"){au();return}if(n.pointerId!==Pe.id)return;const e=performance.now()-Pe.t0,t=Math.hypot(Pe.x-Pe.ox,Pe.y-Pe.oy),i=Ph();Pe.st==="guard"?i.speed>.45&&i.dist>18&&qc(ss(i.dx,i.dy)):i.speed>.8&&i.dist>25?(fn.className="dash",Xc(ss(i.dx,i.dy))):Pe.st==="pending"&&e<190&&t<=ou&&Yc(),Pe.id=null,Pe.st="pending",setTimeout(()=>{Pe.id===null&&Ch()},90)}addEventListener("pointerup",Lh);addEventListener("pointercancel",Lh);const Zs=new Set,dc={KeyW:[0,-1],ArrowUp:[0,-1],KeyS:[0,1],ArrowDown:[0,1],KeyA:[-1,0],ArrowLeft:[-1,0],KeyD:[1,0],ArrowRight:[1,0]};addEventListener("keydown",n=>{if(!(n.repeat||_.state!=="play"))if(dc[n.code])Zs.add(n.code),n.preventDefault();else if(n.code==="Space")n.preventDefault(),$c();else if(n.code==="KeyJ"||n.code==="ShiftLeft"||n.code==="ShiftRight"){const e=Dh();e?Xc(ss(e[0],e[1])):Yc()}else n.code==="KeyK"?qc(QM()):n.code==="KeyL"&&po()});addEventListener("keyup",n=>Zs.delete(n.code));addEventListener("blur",()=>Zs.clear());function Dh(){let n=0,e=0;for(const t of Zs)n+=dc[t][0],e+=dc[t][1];return n||e?[n,e]:null}function Oy(){if(Pe.id!==null&&Pe.st==="pending"){const t=rn((performance.now()-Pe.t0-60)/((Ge.guardHold-.06)*1e3),0,1);fn.style.setProperty("--c",t*100),t>=1&&(Pe.st="guard",fn.className="guard",yt(660,.05,"sine",.04))}const n=_.move;if(n.m=0,Pe.id!==null&&Pe.st==="move"){const t=Pe.x-Pe.ox,i=Pe.y-Pe.oy,r=Math.hypot(t,i);r>ou&&(n.sx=t,n.sy=i,n.m=Math.min(1,r/Rh))}const e=Dh();e&&!n.m&&(n.sx=e[0],n.sy=e[1],n.m=1)}Q("ultBtn").addEventListener("pointerdown",n=>{n.stopPropagation(),Nn(),po()&&Ks()});Q("jumpBtn").addEventListener("pointerdown",n=>{n.stopPropagation(),n.preventDefault(),Nn(),$c()});function By(n,e,t=w.d){for(let i=0;i<400;i++){const r=ti(),s=r.angleTo(t),a=qn(r);if(s>=n&&s<=e&&a>.05&&a<1.5)return r}return _t(t,Wt(t,ti()).normalize(),5)}let Yr=[];function Ih(n){uy(n).forEach((e,t)=>{const i=gn[e],r=i.base==="boss",s=Ai(e,i.aquatic&&Bf(w.d,.35)||By(r?.55:.45,r?.7:.85));s.spawn=-t*.12,s.atkCd=(r?2.5:1)+t*.6+Math.random(),r&&(_.boss=s)})}const zy=n=>_.endless?dy(n,_.level.planet):cy(_.waves[n-1]);function Js(n){_.wave=n,_.waveClearing=!1,_.graceT=Un.grace,_.boss=null,_.endless&&(_.tier=Math.min(12,_.level.tier+(n>>1)));const e=zy(n),t=Object.keys(e.groups[0]).find(i=>ac[i]);qt("wave",n),Bi(t?"首領戰":_.endless?`無盡 ${n}`:`WAVE ${n}`,t?`${ac[t].name} 降臨`:n===1&&!_.endless?_.level.name:""),Oi(w),Yr=e.groups.slice(1),Ih(e.groups[0]),e.tip&&cs(1.2,()=>St(e.tip,"var(--warn)"))}function ky(){if(_.state!=="play"||_.waveClearing||_.mode!=="play"||_.tut)return;const n=_.enemies.filter(e=>!e.dead).length;if(Yr.length&&n<=(Yr[0].at??0)){Ih(Yr.shift()),St("增援！","var(--hurt)"),Ye.warn();return}if(!(n||Yr.length)){if(_.waveClearing=!0,Ye.clear(),_.score+=500*_.tier,w.hp=Math.min(Ge.maxHp,w.hp+(_.passives.has("regen")?2:1)),Oi(w),Xn("happy",1.2),!_.endless&&_.wave>=_.waves.length){qt("victory");return}Bi("CLEAR"),cs(2,()=>{_.enemies=[],Js(_.wave+1)})}}function Gy(){Yr=[]}const pi=new oe(new _r(.55,.8,40),new Dt({color:4843263,transparent:!0,opacity:.9,side:$t,depthWrite:!1}));pi.renderOrder=3;pi.visible=!1;ot.add(pi);const Na=[{title:"移動",body:'按住螢幕任意處拖曳，走到<span class="c-ink">發光圈</span>裡。上坡慢、下坡快。'},{title:"衝撞",body:'<span class="c-dash">快速滑動</span>朝那個方向衝撞，或<span class="c-dash">點一下</span>自動衝向最近的敵人。打倒稻草兵！'},{title:"格擋",body:'敵人腳下出現<span class="c-warn">黃線</span>時：按住不動到外圈變<span class="c-guard">藍</span>，再<b>朝敵人甩出</b>放開。黃線<span class="c-warn">閃紅</span>前出手＝完美格擋。'},{title:"反擊",body:'格擋成功會進入慢動作並回 1 格體力。趁現在<span class="c-dash">衝撞</span>打倒它！'},{title:"跳躍",body:'巨魔會放<span class="c-warn">圓環震波</span>。圓環罩到腳下時，按左下的<b>跳躍鈕</b>躍過去。'},{title:"滾石",body:'滾石會<b>連滾三次</b>，第二、三次的預警更短。躲開它，等它<span class="c-gold">暈眩</span>再打，平常它硬得打不動。'},{title:"大招",body:'大招集滿了！點右下的<span class="c-gold">斬</span>，時間暫停後<b>直接在星球上劃一條線</b>穿過敵人，放開就發動。下坡越劃越快。'}];function Hy(n){const e={step:-1,noDamage:!0,foe:null,onDone:n,offs:[],doneT:0};_.tut=e,_.graceT=0,_.stamina=3,_.ult=0,Oi(w);const t=()=>{e.step++,Vy(e)};return e.next=t,e.offs.push(Bt("kill",i=>{e.step===1&&i===e.foe||e.step===3&&i===e.foe?t():e.step===2&&i===e.foe?(e.step=3,t()):(e.step===5&&i===e.foe||e.step===6&&_.enemies.every(r=>r.dead))&&t()}),Bt("parry",({e:i})=>{e.step===2&&i===e.foe?(i.only=["line"],t()):e.step===4&&i===e.foe&&Qd(e)}),Bt("jump",i=>{e.step===4&&i==="ring"&&Qd(e)}),Bt("hurt",()=>{e.step>=2&&e.step<=5&&St("沒關係，再試一次","var(--mist)")}),Bt("ultEnd",()=>{e.step===6&&_.enemies.some(i=>!i.dead)&&(_.ult=100,St("還有敵人，再劃一次","var(--gold)"))})),t(),e}function Qd(n){n.foe&&!n.foe.dead&&(ft(Wn(n.foe.d),10185727,30,8,.7),Hc(n.foe)),n.next()}const Hr=(n,e=0)=>{const t=ss(0,-1),i=new ze().crossVectors(w.d,t).normalize();let r=_t(_t(w.d,t,n),Wt(w.d,i),e);for(let s=0;s<12&&kn(r);s++)r=_t(r,t,-.6);return r};function Vy(n){const e=n.step;if(qt("tutStep",e),e>=Na.length)return Wy(n);if(Fc(e+1,Na.length,Na[e].title,Na[e].body),Ye.step(),e>0&&Xn("happy",.6),e===0&&(n.target=Hr(4.5,1.5),pi.visible=!0),e===1&&(pi.visible=!1,n.foe=Ai("grunt",Hr(3.5),{dummy:!0})),e===2&&(n.foe=Ai("grunt",Hr(3),{only:["line"],warnMul:1.15}),n.foe.atkCd=1.2),e===4&&(n.foe=Ai("brute",Hr(2.6),{only:["ring"],warnMul:1.2,hp:99}),n.foe.hp=99,n.foe.atkCd=1.5),e===5&&(n.foe=Ai("boulder",Hr(5)),n.foe.atkCd=1.5),e===6){_.ult=100;for(const[t,i]of[[3,-1.6],[4.2,0],[3,1.6]])Ai("grunt",Hr(t,i),{dummy:!0})}}function Wy(n){Fc(),Bi("教學完成","開始第一波"),Ye.clear(),Xn("happy",1.5);try{localStorage.setItem("slasharena-tut","1")}catch{}Uh(),_.waveClearing=!0,cs(1.8,()=>n.onDone())}function Uh(){const n=_.tut;n&&(n.offs.forEach(e=>e()),pi.visible=!1,Fc(),_.tut=null)}function Xy(n,e){const t=_.tut;t&&(t.step===0&&t.target&&(pi.position.copy(Wn(t.target)).addScaledVector(t.target,.12),pi.quaternion.setFromUnitVectors(new ze(0,0,1),t.target),pi.scale.setScalar(1+Math.sin(e*5)*.08),w.d.angleTo(t.target)*je<.9&&(ft(Wn(t.target).addScaledVector(t.target,.3),4843263,20,5,.5),t.next())),t.step>=1&&(_.stamina=Math.max(_.stamina,1)))}const Nh=()=>{try{return localStorage.getItem("slasharena-tut")==="1"}catch{return!1}},lu="slasharena-runs";let et=null;const Xs=()=>_.runTime,qy=n=>({kind:n,started:new Date().toISOString(),device:`${innerWidth}x${innerHeight} ${matchMedia("(pointer: coarse)").matches?"touch":"mouse"}`,level:null,tutorial:[],waves:[],dash:0,guard:0,parry:0,perfect:0,evade:0,jumpPress:0,jumpOver:0,ultUses:0,ultKills:0,crystals:0,hurt:0,burn:0});function cu(n,e=null){mo("abandoned"),et=qy(n),et.level=e}function mo(n){if(!et)return;Object.assign(et,{result:n,endWave:_.wave,tier:_.tier,picked:_.runCrystals,score:_.score,time:Math.round(Xs()),bestCombo:_.bestCombo,hpLeft:w.hp}),Fh();const e=go();for(e.push(et);e.length>30;)e.shift();try{localStorage.setItem(lu,JSON.stringify(e))}catch{}et=null}const go=()=>{try{return JSON.parse(localStorage.getItem(lu))||[]}catch{return[]}},Yy=()=>{try{localStorage.removeItem(lu)}catch{}};function Fh(){const n=et?.waves.at(-1);n&&n.time==null&&(n.time=Math.round(Xs()-n.t0))}Bt("wave",n=>{et&&(Fh(),et.waves.push({n,t0:Xs(),hurt:0}))});Bt("tutStep",n=>{if(!et)return;const e=et.tutorial.at(-1);e&&e.time==null&&(e.time=+(Xs()-e.t0).toFixed(1)),et.tutorial.push({step:n,t0:Xs(),hurt:0})});Bt("hurt",()=>{if(!et)return;et.hurt++;const n=_.tut?et.tutorial.at(-1):et.waves.at(-1);n&&n.hurt++});Bt("dash",()=>et&&et.dash++);Bt("guard",()=>et&&et.guard++);Bt("parry",({perfect:n})=>{et&&(et.parry++,n&&et.perfect++)});Bt("evade",()=>et&&et.evade++);Bt("jumpPress",()=>et&&et.jumpPress++);Bt("jump",()=>et&&et.jumpOver++);Bt("ultEnd",n=>{et&&(et.ultUses++,et.ultKills+=n)});Bt("crystal",()=>et&&et.crystals++);Bt("burn",()=>et&&et.burn++);const $y={game:"正式",tutorial:"教學起",endless:"無盡"},jy={win:"通關",dead:"戰敗",quit:"中途離開",abandoned:"重開"};function Oh(n=go()){const e=["移動","衝撞","格擋","反擊","跳躍","滾石","大招"];return n.map((t,i)=>{const r=t.tutorial.filter(a=>a.time!=null&&e[a.step]).map(a=>`${e[a.step]}${a.time}s${a.hurt?`/挨${a.hurt}`:""}`).join(" "),s=t.guard?Math.round(t.parry/t.guard*100):0;return`#${i+1} ${$y[t.kind]||t.kind} ${t.level||""} ${jy[t.result]||t.result} 到第${t.endWave}波 ${t.time}s 分數${t.score} 受傷${t.hurt}
   格擋 ${t.parry}/${t.guard} (${s}%) 完美${t.perfect} 閃避斬${t.evade} 跳躍${t.jumpPress}(躍過${t.jumpOver}) 大招${t.ultUses}次殺${t.ultKills} 星晶${t.crystals} 燙傷${t.burn||0}`+(r?`
   教學 ${r}`:"")}).join(`
`)}const Ky=new gi(.32);function Zy(){for(let n=0;n<200;n++){const e=ti(),t=e.angleTo(w.d);if(t<.25||t>.8||qn(e)<.05)continue;const i=new oe(Ky,new Tn({color:10482687,emissive:2799832,emissiveIntensity:1.4,roughness:.3,flatShading:!0}));i.castShadow=!0,ot.add(i),_.crystals.push({d:e,mesh:i,t:Math.random()*6});return}}function Jy(){_.crystals.forEach(n=>{ot.remove(n.mesh),n.mesh.material.dispose()}),_.crystals=[]}const Qy=["title","mapOv","shopOv","over","win","pauseOv","logOv"],ds=n=>Qy.forEach(e=>Q(e).hidden=e!==n);function eS(){for(let n=0;n<500;n++){const e=ti(),t=qn(e);if(t>.2&&t<.6&&is.every(i=>i.type==="r"||i.c.angleTo(e)>i.w+.1))return e}return new N(0,0,1)}function _o(n){Vt.id!==n&&Vf(n)}function Bh(){JM(),Jy(),gM(),xM(),uo(),Gy(),Fy()}function uu(){_.runId++,Wf(),Bh(),Ks(),Uh(),Ty(),qx(Ge.stamMax),Yf(),Object.assign(_,{score:0,ult:wt.start,stamina:Ge.stamMax,combo:0,bestCombo:0,mode:"play",runTime:0,hurtCount:0,endless:!1,boss:null,slowT:0,hitstop:0,waveClearing:!1,crystalT:6,runCrystals:0,undyingUsed:!1}),ry(eS()),Q("combo").style.opacity=0,_.state="play",ds(null),Q("pauseBtn").hidden=!1,Q("skipTut").hidden=!0}function du(n){Object.assign(_,{level:n,waves:n.waves,tier:n.tier,hpMul:n.planet.hpMul,wave:1})}function zi(n){const e=Mr(n);_o(e.planet.id),uu(),du(e),cu("game",n),Oi(w),Js(1)}function vo(n){const e=Lt[n],t=Mr(hn(n,e.levels.length-1));_o(e.id),uu(),du(t),_.endless=!0,cu("endless",e.id),Oi(w),Js(1)}function tS(){zi(vy())}function fu(){const n=Mr(hn(0,0));_o(n.planet.id),uu(),du(n),cu("tutorial",n.id),Q("skipTut").hidden=!1,Hy(()=>{_.state==="play"&&(Q("skipTut").hidden=!0,_.ult=wt.start,Js(1))})}function nS(){if(_.state!=="play")return;_.state="over",_.mode="play",he.run=null,Ks(),Q("pauseBtn").hidden=!0,Xn("dizzy",99),mo("dead");const n=_.endless?yy(_.level.planet.id,_.wave-1,_.score,_.runCrystals):Mh(_.runCrystals,_.wave-1,_.level.planet.reward);Q("final").textContent=_.score.toLocaleString(),Q("best").innerHTML=`${_.endless?`無盡第 ${_.wave} 波`:`${_.level.name} · WAVE ${_.wave}`}<br>獲得 ${js(n)}`,cs(.9,()=>ds("over"))}function iS(){const n=(_.hurtCount===0?3:_.hurtCount<=2?2:_.hurtCount<=5?1:0)+(_.bestCombo>=15?2:_.bestCombo>=8?1:0);return n>=5?"S":n>=3?"A":n>=2?"B":"C"}Bt("victory",()=>{Ye.win(),Bi(_.level.boss?"星球解放！":"關卡完成！"),cs(2.2,()=>{if(_.state!=="play")return;_.state="win",Ks(),Q("pauseBtn").hidden=!0,mo("win");const n=iS(),e=My(_.level.id,n,_.score,_.runCrystals),t=xh(_.level.id),i=Math.floor(_.runTime/60),r=Math.floor(_.runTime%60);Q("winLabel").textContent=_.level.boss?"PLANET CLEARED":`LEVEL ${_.level.i+1}`,Q("winName").textContent=_.level.boss?"星球解放":_.level.name,Q("rank").textContent=n,Q("winStars").innerHTML=Th(e.stars),Q("winScore").textContent=_.score.toLocaleString(),Q("winGems").innerHTML=`獲得 ${js(e.earned)}${e.first?"　首次通關":""}`,Q("winStats").innerHTML=`<span>時間<b>${i}:${String(r).padStart(2,"0")}</b></span><span>受傷<b>${_.hurtCount}</b></span><span>最高連擊<b>${_.bestCombo}</b></span>`,Q("nextLevel").hidden=!t,Q("nextLevel").textContent=t&&Mr(t).p!==_.level.p?"前往下一顆星球":"下一關",ds("win")})});Bt("hurt",()=>{w.hp<=0&&cs(.5,nS)});function qa(n){Wf(),Bh(),_.mode="play",_.boss=null,_.storm=0,Yf(),Q("pauseBtn").hidden=!0,Q("skipTut").hidden=!0,_.state=n==="title"?"title":n==="shopOv"?"shop":"map",ds(n),n==="title"&&hu()}function zh(){Nn(),tu(),qa("mapOv")}function rS(){_.state==="play"&&(mo("quit"),Mh(_.runCrystals,0,0))}Ay({title:()=>qa("title"),map:()=>qa("mapOv"),shop:()=>qa("shopOv"),select:_o,play:n=>{Nn(),zi(n)},endless:n=>{Nn(),vo(n)}});Q("start").onclick=()=>{Nh()?zh():(Nn(),fu())};Q("tutBtn").onclick=()=>{Nn(),fu()};Q("again").onclick=()=>{Nn(),_.endless?vo(_.level.p):zi(_.level.id)};Q("winAgain").onclick=()=>{Nn(),zi(_.level.id)};Q("nextLevel").onclick=()=>{Nn(),zi(xh(_.level.id))};Q("skipTut").onclick=n=>{n.stopPropagation();try{localStorage.setItem("slasharena-tut","1")}catch{}zi(hn(0,0))};Q("skipTut").addEventListener("pointerdown",n=>n.stopPropagation());for(const n of["toTitle","overTitle","winTitle"])Q(n).onclick=()=>{rS(),zh()};function hu(){Q("titleBest").textContent=no()?`★ ${no()} / ${vh()}　◆ ${$e.crystals.toLocaleString()}`:"",Q("tutBtn").hidden=!Nh(),Q("logBtn").hidden=!go().length}Q("logBtn").onclick=()=>{Q("logText").textContent=Oh()||"（還沒有紀錄）",ds("logOv")};Q("logCopy").onclick=async()=>{const n=Oh()+`

`+JSON.stringify(go());try{await navigator.clipboard.writeText(n),Q("logCopy").textContent="已複製"}catch{Q("logCopy").textContent="無法複製，請長按文字選取"}setTimeout(()=>Q("logCopy").textContent="複製全部（傳給開發者）",1600)};Q("logClear").onclick=()=>{Yy(),Q("logText").textContent="（已清除）"};Q("logClose").onclick=()=>{ds("title"),hu()};hu();let pu=!1;const sS='<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h3l4-3.5v11L6 12H3z" fill="currentColor"/><path d="M13 7.5a3.5 3.5 0 0 1 0 5M15.2 5.2a6.5 6.5 0 0 1 0 9.6"/></svg>',aS='<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h3l4-3.5v11L6 12H3z" fill="currentColor"/><path d="M13 8l4 4M17 8l-4 4"/></svg>';function mu(n){Pt.volume=rn(n,0,1),Pt.volume>0&&(Pt.lastVol=Pt.volume);try{localStorage.setItem("slasharena-vol",Pt.volume)}catch{}Pt.volume>0?Nn():Kx(0);const e=Q("soundBtn");e.innerHTML=Pt.volume>0?sS:aS,e.classList.toggle("off",Pt.volume<=0),e.setAttribute("aria-label",Pt.volume>0?"關閉聲音":"開啟聲音"),Q("vol").value=Math.round(Pt.volume*100),Q("volN").textContent=Pt.volume>0?Math.round(Pt.volume*100)+"%":"關"}function fs(n){n&&_.state!=="play"||(pu=n,Q("pauseOv").hidden=!n,n&&(Ks(),he.drawing=!1),fc=performance.now())}Q("soundBtn").addEventListener("pointerdown",n=>n.stopPropagation());Q("soundBtn").onclick=()=>{mu(Pt.volume>0?0:Pt.lastVol),Pt.volume>0&&yt(660,.08,"sine",.08)};Q("pauseBtn").addEventListener("pointerdown",n=>n.stopPropagation());Q("pauseBtn").onclick=()=>fs(!0);Q("resume").onclick=()=>fs(!1);Q("restart").onclick=()=>{fs(!1),_.endless?vo(_.level.p):zi(_.level.id)};Q("toTitle").addEventListener("click",()=>fs(!1));Q("vol").addEventListener("input",n=>mu(n.target.value/100));Q("vib").checked=Hs.on;Q("vib").addEventListener("change",n=>{Hs.on=n.target.checked;try{localStorage.setItem("slasharena-vib",Hs.on?"1":"0")}catch{}});addEventListener("keydown",n=>{(n.key==="Escape"||n.key==="p"||n.key==="P")&&fs(!pu)});document.addEventListener("visibilitychange",()=>{document.hidden&&_.state==="play"&&!window.__game?.noAutoPause&&fs(!0)});mu(Pt.volume);const oS=Q("ink"),lS=Q("ultTip");let fc=performance.now(),Fa=0,kh=!1,Gh=!1;function Hh(n){requestAnimationFrame(Hh);const e=Math.min((n-fc)/1e3,.05);fc=n,!kh&&!pu&&Vh(e)}function Vh(n){Fa+=n,Ox(n),Vx(n),document.body.dataset.state!==_.state&&(document.body.dataset.state=_.state);const e=_.mode==="ultDraw"?.03:_.mode==="ultDash"?.25:_.slowT>0?.2:1;_.ts+=(e-_.ts)*(1-Math.exp(-n*14)),_.state==="play"?(_.slowT-=n,_.comboT-=n,_.graceT-=n,_.runTime+=n,Oy(),_.hitstop>0?_.hitstop-=n:(_.mode==="ultDash"?Uy(n):_.mode==="play"&&ny(n),jM(n*_.ts,n),mM(n*_.ts),_.mode==="play"&&vM(n),CM(n*_.ts,n),_.mode==="play"&&!_.tut&&(_.ult=Math.min(100,_.ult+n*wt.charge)),!_.tut&&(_.crystalT-=n)<=0&&(_.crystalT=11,_.crystals.length<2&&Zy())),ky(),Xy(n,Fa),_.mode!=="ultDraw"?Ld(w.d,_.mode==="ultDash"?7:5,n):qe.boss&&Ld(qe.boss.d,6,n)):(_.state==="title"||_.state==="map"||_.state==="shop")&&ot.rotateY(n*.12);for(const i of _.crystals)i.t+=n,i.mesh.position.copy(i.d).multiplyScalar(je+sn(i.d)+.7+Math.sin(i.t*3)*.12),i.mesh.quaternion.setFromUnitVectors(Ui,i.d),i.mesh.rotateY(i.t*2);Qx(n),Hx(Fa),Ny(n),eM(n),nM(n),Fx(n),iy(n,Fa);const t=_.mode==="ultDraw";lS.hidden=!t,t&&(oS.style.transform=`scaleX(${(he.budget-he.ink)/he.budget})`),jx(_.warnings.some(i=>i.kind==="ring"&&Vs(i,w.d,.6))),oy(Wh),_.shake*=Math.exp(-n*9),!Gh&&(Nt.position.copy(Ds).add(new N(Math.random()-.5,Math.random()-.5,0).multiplyScalar(_.shake)),ni.render(mn,Nt),Nt.position.copy(Ds),Nt.updateMatrixWorld())}requestAnimationFrame(Hh);new URLSearchParams(location.search).has("tune")&&ef(()=>import("./tune-CqrLXlqP.js"),[],import.meta.url);new URLSearchParams(location.search).has("perf")&&ef(()=>import("./perf-7h9au73o.js"),[],import.meta.url);const Wh=n=>{const e=n.clone().multiplyScalar(je+sn(n)).applyQuaternion(ot.quaternion).project(Nt);return{x:(e.x+1)/2*innerWidth,y:(1-e.y)/2*innerHeight}};window.__game={get state(){return{state:_.state,mode:_.mode,level:_.level?.id,tier:_.tier,wave:_.wave,score:_.score,hp:w.hp,heroState:w.state,air:+w.air.toFixed(2),stamina:+_.stamina.toFixed(2),ult:+_.ult.toFixed(1),combo:_.combo,enemies:_.enemies.filter(n=>!n.dead).map(n=>n.type+(n.rolling?":roll":n.warn?":warn":n.stun>0?":stun":"")),warnings:_.warnings.map(n=>n.attack+":"+n.t.toFixed(2)+"/"+n.dur.toFixed(2)),tut:_.tut?.step??null,joy:Pe.st,quality:Ri}},G:_,hero:w,seal:qe,save:$e,allLevels:ly,shop:{UPGRADES:Kc,costOf:Qc,buy:Sh},newGame:tS,newTutorial:fu,startLevel:zi,startEndless:vo,freeze(n){kh=n},headless(n){Gh=n},step(n=1){for(let e=0;e<n;e++)Vh(1/60)},spawn:(n,e,t)=>Ai(n,e,t),hit:xr,attack:(n,e)=>Vc(n,e),startWave:Js,heal(){w.hp=Ge.maxHp,w.invuln=0},toScreen:Wh,GAIN:Jn,zoneHas:Vs,renderer:ni,scene:mn,camera:Nt,act:{startParry:qc,doTap:Yc,doJump:$c,ultBegin:po,ultDown:wh,ultMove:su,ultUp:au,ultPath:Ly}};"serviceWorker"in navigator&&addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));export{Un as C,gn as E,Ge as H,wt as U,Ri as q,ni as r,dn as s};
