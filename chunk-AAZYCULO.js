import{$a as Qe,Ab as ti,Cb as ni,Db as Y,Dc as Mt,Eb as T,Ec as li,Fb as ii,Fc as ui,Gb as ae,H as M,Hb as Ae,Hc as $,I as rn,Ib as _e,Ic as fn,Jb as oi,K as D,Ka as W,L as z,La as Jn,Lb as et,Mb as tt,N as O,O as ye,P as g,Q as Xn,Qa as Xe,Rb as ri,Sa as we,Ta as _,Tb as si,Ub as Z,Va as Lt,Vb as Nt,W as Tt,Wb as xt,Y as qe,Ya as te,Z as H,Za as G,_a as P,a as m,aa as Ft,ab as Ue,b as Re,ba as Qn,bb as K,c as qn,cb as Me,cc as ne,fa as k,fb as ei,fc as cn,h as se,ha as ee,ia as It,ib as ge,ja as A,la as he,pa as je,rb as F,sb as sn,sc as Rt,tb as an,tc as ai,ub as Je,uc as pn,vb as ln,vc as Te,wb as un,xb as dn,yb as Ot,zb as Pt,zc as B}from"./chunk-5PEZAAPF.js";var di=null;function kt(){return di}function cr(e){di??=e}var hn=class{},He=(()=>{class e{historyGo(t){throw new Error("")}static \u0275fac=function(n){return new(n||e)};static \u0275prov=D({token:e,factory:()=>g(ci),providedIn:"platform"})}return e})(),pr=new O(""),ci=(()=>{class e extends He{_location;_history;_doc=g(H);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return kt().getBaseHref(this._doc)}onPopState(t){let n=kt().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",t,!1),()=>n.removeEventListener("popstate",t)}onHashChange(t){let n=kt().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",t,!1),()=>n.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,n,i){this._history.pushState(t,n,i)}replaceState(t,n,i){this._history.replaceState(t,n,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||e)};static \u0275prov=D({token:e,factory:()=>new e,providedIn:"platform"})}return e})();function Bt(e,o){return e?o?e.endsWith("/")?o.startsWith("/")?e+o.slice(1):e+o:o.startsWith("/")?e+o:`${e}/${o}`:e:o}function pi(e){let o=e.search(/#|\?|$/);return e[o-1]==="/"?e.slice(0,o-1)+e.slice(o):e}function le(e){return e&&e[0]!=="?"?`?${e}`:e}var We=(()=>{class e{historyGo(t){throw new Error("")}static \u0275fac=function(n){return new(n||e)};static \u0275prov=D({token:e,factory:()=>g(hi),providedIn:"root"})}return e})(),$t=new O(""),hi=(()=>{class e extends We{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,n){super(),this._platformLocation=t,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??g(H).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return Bt(this._baseHref,t)}path(t=!1){let n=this._platformLocation.pathname+le(this._platformLocation.search),i=this._platformLocation.hash;return i&&t?`${n}${i}`:n}pushState(t,n,i,r){let s=this.prepareExternalUrl(i+le(r));this._platformLocation.pushState(t,n,s)}replaceState(t,n,i,r){let s=this.prepareExternalUrl(i+le(r));this._platformLocation.replaceState(t,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(n){return new(n||e)(ye(He),ye($t,8))};static \u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var gi=(()=>{class e{_subject=new se;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let n=this._locationStrategy.getBaseHref();this._basePath=gr(pi(fi(n))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,n=""){return this.path()==this.normalize(t+le(n))}normalize(t){return e.stripTrailingSlash(hr(this._basePath,fi(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,n="",i=null){this._locationStrategy.pushState(i,"",t,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+le(n)),i)}replaceState(t,n="",i=null){this._locationStrategy.replaceState(i,"",t,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+le(n)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",n){this._urlChangeListeners.forEach(i=>i(t,n))}subscribe(t,n,i){return this._subject.subscribe({next:t,error:n??void 0,complete:i??void 0})}static normalizeQueryParams=le;static joinWithSlash=Bt;static stripTrailingSlash=pi;static \u0275fac=function(n){return new(n||e)(ye(We))};static \u0275prov=D({token:e,factory:()=>fr(),providedIn:"root"})}return e})();function fr(){return new gi(ye(We))}function hr(e,o){if(!e||!o.startsWith(e))return o;let t=o.substring(e.length);return t===""||["/",";","?","#"].includes(t[0])?t:o}function fi(e){return e.replace(/\/index\.html$/,"")}function gr(e){if(new RegExp("^(https?:)?//").test(e)){let[,t]=e.split(/\/\/[^\/]+/);return t}return e}var mr=(()=>{class e extends We{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(t,n){super(),this._platformLocation=t,n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}path(t=!1){let n=this._platformLocation.hash??"#";return n.length>0?n.substring(1):n}prepareExternalUrl(t){let n=Bt(this._baseHref,t);return n.length>0?"#"+n:n}pushState(t,n,i,r){let s=this.prepareExternalUrl(i+le(r))||this._platformLocation.pathname;this._platformLocation.pushState(t,n,s)}replaceState(t,n,i,r){let s=this.prepareExternalUrl(i+le(r))||this._platformLocation.pathname;this._platformLocation.replaceState(t,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(n){return new(n||e)(ye(He),ye($t,8))};static \u0275prov=D({token:e,factory:e.\u0275fac})}return e})(),Si={ADP:[void 0,void 0,0],AFN:[void 0,"\u060B",0],ALL:[void 0,void 0,0],AMD:[void 0,"\u058F",2],AOA:[void 0,"Kz"],ARS:[void 0,"$"],AUD:["A$","$"],AZN:[void 0,"\u20BC"],BAM:[void 0,"KM"],BBD:[void 0,"$"],BDT:[void 0,"\u09F3"],BHD:[void 0,void 0,3],BIF:[void 0,void 0,0],BMD:[void 0,"$"],BND:[void 0,"$"],BOB:[void 0,"Bs"],BRL:["R$"],BSD:[void 0,"$"],BWP:[void 0,"P"],BYN:[void 0,void 0,2],BYR:[void 0,void 0,0],BZD:[void 0,"$"],CAD:["CA$","$",2],CHF:[void 0,void 0,2],CLF:[void 0,void 0,4],CLP:[void 0,"$",0],CNY:["CN\xA5","\xA5"],COP:[void 0,"$",2],CRC:[void 0,"\u20A1",2],CUC:[void 0,"$"],CUP:[void 0,"$"],CZK:[void 0,"K\u010D",2],DJF:[void 0,void 0,0],DKK:[void 0,"kr",2],DOP:[void 0,"$"],EGP:[void 0,"E\xA3"],ESP:[void 0,"\u20A7",0],EUR:["\u20AC"],FJD:[void 0,"$"],FKP:[void 0,"\xA3"],GBP:["\xA3"],GEL:[void 0,"\u20BE"],GHS:[void 0,"GH\u20B5"],GIP:[void 0,"\xA3"],GNF:[void 0,"FG",0],GTQ:[void 0,"Q"],GYD:[void 0,"$",2],HKD:["HK$","$"],HNL:[void 0,"L"],HRK:[void 0,"kn"],HUF:[void 0,"Ft",2],IDR:[void 0,"Rp",2],ILS:["\u20AA"],INR:["\u20B9"],IQD:[void 0,void 0,0],IRR:[void 0,void 0,0],ISK:[void 0,"kr",0],ITL:[void 0,void 0,0],JMD:[void 0,"$"],JOD:[void 0,void 0,3],JPY:["\xA5",void 0,0],KGS:[void 0,"\u20C0"],KHR:[void 0,"\u17DB"],KMF:[void 0,"CF",0],KPW:[void 0,"\u20A9",0],KRW:["\u20A9",void 0,0],KWD:[void 0,void 0,3],KYD:[void 0,"$"],KZT:[void 0,"\u20B8"],LAK:[void 0,"\u20AD",0],LBP:[void 0,"L\xA3",0],LKR:[void 0,"Rs"],LRD:[void 0,"$"],LTL:[void 0,"Lt"],LUF:[void 0,void 0,0],LVL:[void 0,"Ls"],LYD:[void 0,void 0,3],MGA:[void 0,"Ar",0],MGF:[void 0,void 0,0],MMK:[void 0,"K",0],MNT:[void 0,"\u20AE",2],MRO:[void 0,void 0,0],MUR:[void 0,"Rs",2],MXN:["MX$","$"],MYR:[void 0,"RM"],NAD:[void 0,"$"],NGN:[void 0,"\u20A6"],NIO:[void 0,"C$"],NOK:[void 0,"kr",2],NPR:[void 0,"Rs"],NZD:["NZ$","$"],OMR:[void 0,void 0,3],PHP:["\u20B1"],PKR:[void 0,"Rs",2],PLN:[void 0,"z\u0142"],PYG:[void 0,"\u20B2",0],RON:[void 0,"lei"],RSD:[void 0,void 0,0],RUB:[void 0,"\u20BD"],RWF:[void 0,"RF",0],SBD:[void 0,"$"],SEK:[void 0,"kr",2],SGD:[void 0,"$"],SHP:[void 0,"\xA3"],SLE:[void 0,void 0,2],SLL:[void 0,void 0,0],SOS:[void 0,void 0,0],SRD:[void 0,"$"],SSP:[void 0,"\xA3"],STD:[void 0,void 0,0],STN:[void 0,"Db"],SYP:[void 0,"\xA3",0],THB:[void 0,"\u0E3F"],TMM:[void 0,void 0,0],TND:[void 0,void 0,3],TOP:[void 0,"T$"],TRL:[void 0,void 0,0],TRY:[void 0,"\u20BA"],TTD:[void 0,"$"],TWD:["NT$","$",2],TZS:[void 0,void 0,2],UAH:[void 0,"\u20B4"],UGX:[void 0,void 0,0],USD:["$"],UYI:[void 0,void 0,0],UYU:[void 0,"$"],UYW:[void 0,void 0,4],UZS:[void 0,void 0,2],VEF:[void 0,"Bs",2],VND:["\u20AB",void 0,0],VUV:[void 0,void 0,0],XAF:["FCFA",void 0,0],XCD:["EC$","$"],XCG:["Cg."],XOF:["F\u202FCFA",void 0,0],XPF:["CFPF",void 0,0],XXX:["\xA4"],YER:[void 0,void 0,0],ZAR:[void 0,"R"],ZMK:[void 0,void 0,0],ZMW:[void 0,"ZK"],ZWD:[void 0,void 0,0]},Zt=(function(e){return e[e.Decimal=0]="Decimal",e[e.Percent=1]="Percent",e[e.Currency=2]="Currency",e[e.Scientific=3]="Scientific",e})(Zt||{});var j=(function(e){return e[e.Format=0]="Format",e[e.Standalone=1]="Standalone",e})(j||{}),v=(function(e){return e[e.Narrow=0]="Narrow",e[e.Abbreviated=1]="Abbreviated",e[e.Wide=2]="Wide",e[e.Short=3]="Short",e})(v||{}),q=(function(e){return e[e.Short=0]="Short",e[e.Medium=1]="Medium",e[e.Long=2]="Long",e[e.Full=3]="Full",e})(q||{}),N={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function Ei(e){return Y(e)[T.LocaleId]}function wi(e,o,t){let n=Y(e),i=[n[T.DayPeriodsFormat],n[T.DayPeriodsStandalone]],r=ie(i,o);return ie(r,t)}function Ai(e,o,t){let n=Y(e),i=[n[T.DaysFormat],n[T.DaysStandalone]],r=ie(i,o);return ie(r,t)}function _i(e,o,t){let n=Y(e),i=[n[T.MonthsFormat],n[T.MonthsStandalone]],r=ie(i,o);return ie(r,t)}function Ti(e,o){let n=Y(e)[T.Eras];return ie(n,o)}function nt(e,o){let t=Y(e);return ie(t[T.DateFormat],o)}function it(e,o){let t=Y(e);return ie(t[T.TimeFormat],o)}function ot(e,o){let n=Y(e)[T.DateTimeFormat];return ie(n,o)}function de(e,o){let t=Y(e),n=t[T.NumberSymbols][o];if(typeof n>"u"){if(o===N.CurrencyDecimal)return t[T.NumberSymbols][N.Decimal];if(o===N.CurrencyGroup)return t[T.NumberSymbols][N.Group]}return n}function Cn(e,o){return Y(e)[T.NumberFormats][o]}function br(e){return Y(e)[T.Currencies]}function Fi(e){if(!e[T.ExtraData])throw new M(2303,!1)}function Ii(e){let o=Y(e);return Fi(o),(o[T.ExtraData][2]||[]).map(n=>typeof n=="string"?gn(n):[gn(n[0]),gn(n[1])])}function Li(e,o,t){let n=Y(e);Fi(n);let i=[n[T.ExtraData][0],n[T.ExtraData][1]],r=ie(i,o)||[];return ie(r,t)||[]}function ie(e,o){for(let t=o;t>-1;t--)if(typeof e[t]<"u")return e[t];throw new M(2304,!1)}function gn(e){let[o,t]=e.split(":");return{hours:+o,minutes:+t}}function Oi(e,o,t="en"){let n=br(t)[e]||Si[e]||[],i=n[1];return o==="narrow"&&typeof i=="string"?i:n[0]||e}var yr=2;function Pi(e){let o,t=Si[e];return t&&(o=t[2]),typeof o=="number"?o:yr}var Dr=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,jt={},vr=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,Cr=256;function Ni(e,o,t,n){let i=Or(e);Sr(o),o=De(t,o)||o;let s=[],a;for(;o;)if(a=vr.exec(o),a){s=s.concat(a.slice(1));let d=s.pop();if(!d)break;o=d}else{s.push(o);break}let l=i.getTimezoneOffset();n&&(l=Ri(n,l),i=Lr(i,n));let u="";return s.forEach(d=>{let c=Fr(d);u+=c?c(i,t,l):d==="''"?"'":d.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),u}function Sr(e){if(e.length>Cr)throw new M(2300,!1)}function zt(e,o,t){let n=new Date(0);return n.setFullYear(e,o,t),n.setHours(0,0,0),n}function De(e,o){let t=Ei(e);if(jt[t]??={},jt[t][o])return jt[t][o];let n="";switch(o){case"shortDate":n=nt(e,q.Short);break;case"mediumDate":n=nt(e,q.Medium);break;case"longDate":n=nt(e,q.Long);break;case"fullDate":n=nt(e,q.Full);break;case"shortTime":n=it(e,q.Short);break;case"mediumTime":n=it(e,q.Medium);break;case"longTime":n=it(e,q.Long);break;case"fullTime":n=it(e,q.Full);break;case"short":let i=De(e,"shortTime"),r=De(e,"shortDate");n=Ut(ot(e,q.Short),[i,r]);break;case"medium":let s=De(e,"mediumTime"),a=De(e,"mediumDate");n=Ut(ot(e,q.Medium),[s,a]);break;case"long":let l=De(e,"longTime"),u=De(e,"longDate");n=Ut(ot(e,q.Long),[l,u]);break;case"full":let d=De(e,"fullTime"),c=De(e,"fullDate");n=Ut(ot(e,q.Full),[d,c]);break}return n&&(jt[t][o]=n),n}function Ut(e,o){return o&&(e=e.replace(/\{([^}]+)}/g,function(t,n){return o!=null&&n in o?o[n]:t})),e}function ue(e,o,t="-",n,i){let r="";(e<0||i&&e<=0)&&(i?e=-e+1:(e=-e,r=t));let s=String(e);for(;s.length<o;)s="0"+s;return n&&(s=s.slice(s.length-o)),r+s}function Er(e,o){return ue(e,3).substring(0,o)}function I(e,o,t=0,n=!1,i=!1){return function(r,s){let a=wr(e,r);if((t>0||a>-t)&&(a+=t),e===3)a===0&&t===-12&&(a=12);else if(e===6)return Er(a,o);let l=de(s,N.MinusSign);return ue(a,o,l,n,i)}}function wr(e,o){switch(e){case 0:return o.getFullYear();case 1:return o.getMonth();case 2:return o.getDate();case 3:return o.getHours();case 4:return o.getMinutes();case 5:return o.getSeconds();case 6:return o.getMilliseconds();case 7:return o.getDay();default:throw new M(2301,!1)}}function w(e,o,t=j.Format,n=!1){return function(i,r){return Ar(i,r,e,o,t,n)}}function Ar(e,o,t,n,i,r){switch(t){case 2:return _i(o,i,n)[e.getMonth()];case 1:return Ai(o,i,n)[e.getDay()];case 0:let s=e.getHours(),a=e.getMinutes();if(r){let u=Ii(o),d=Li(o,i,n),c=u.findIndex(f=>{if(Array.isArray(f)){let[p,h]=f,b=s>=p.hours&&a>=p.minutes,y=s<h.hours||s===h.hours&&a<h.minutes;if(p.hours<h.hours){if(b&&y)return!0}else if(b||y)return!0}else if(f.hours===s&&f.minutes===a)return!0;return!1});if(c!==-1)return d[c]}return wi(o,i,n)[s<12?0:1];case 3:return Ti(o,n)[e.getFullYear()<=0?0:1];default:let l=t;throw new M(2302,!1)}}function Ht(e){return function(o,t,n){let i=-1*n,r=de(t,N.MinusSign),s=i>0?Math.floor(i/60):Math.ceil(i/60);switch(e){case 0:return(i>=0?"+":"")+ue(s,2,r)+ue(Math.abs(i%60),2,r);case 1:return"GMT"+(i>=0?"+":"")+ue(s,1,r);case 2:return"GMT"+(i>=0?"+":"")+ue(s,2,r)+":"+ue(Math.abs(i%60),2,r);case 3:return n===0?"Z":(i>=0?"+":"")+ue(s,2,r)+":"+ue(Math.abs(i%60),2,r);default:throw new M(2310,!1)}}}var _r=0,Vt=4;function Tr(e){let o=zt(e,_r,1).getDay();return zt(e,0,1+(o<=Vt?Vt:Vt+7)-o)}function xi(e){let o=e.getDay(),t=o===0?-3:Vt-o;return zt(e.getFullYear(),e.getMonth(),e.getDate()+t)}function mn(e,o=!1){return function(t,n){let i;if(o){let r=new Date(t.getFullYear(),t.getMonth(),1).getDay()-1,s=t.getDate();i=1+Math.floor((s+r)/7)}else{let r=xi(t),s=Tr(r.getFullYear()),a=r.getTime()-s.getTime();i=1+Math.round(a/6048e5)}return ue(i,e,de(n,N.MinusSign))}}function Wt(e,o=!1){return function(t,n){let r=xi(t).getFullYear();return ue(r,e,de(n,N.MinusSign),o)}}var bn={};function Fr(e){if(bn[e])return bn[e];let o;switch(e){case"G":case"GG":case"GGG":o=w(3,v.Abbreviated);break;case"GGGG":o=w(3,v.Wide);break;case"GGGGG":o=w(3,v.Narrow);break;case"y":o=I(0,1,0,!1,!0);break;case"yy":o=I(0,2,0,!0,!0);break;case"yyy":o=I(0,3,0,!1,!0);break;case"yyyy":o=I(0,4,0,!1,!0);break;case"Y":o=Wt(1);break;case"YY":o=Wt(2,!0);break;case"YYY":o=Wt(3);break;case"YYYY":o=Wt(4);break;case"M":case"L":o=I(1,1,1);break;case"MM":case"LL":o=I(1,2,1);break;case"MMM":o=w(2,v.Abbreviated);break;case"MMMM":o=w(2,v.Wide);break;case"MMMMM":o=w(2,v.Narrow);break;case"LLL":o=w(2,v.Abbreviated,j.Standalone);break;case"LLLL":o=w(2,v.Wide,j.Standalone);break;case"LLLLL":o=w(2,v.Narrow,j.Standalone);break;case"w":o=mn(1);break;case"ww":o=mn(2);break;case"W":o=mn(1,!0);break;case"d":o=I(2,1);break;case"dd":o=I(2,2);break;case"c":case"cc":o=I(7,1);break;case"ccc":o=w(1,v.Abbreviated,j.Standalone);break;case"cccc":o=w(1,v.Wide,j.Standalone);break;case"ccccc":o=w(1,v.Narrow,j.Standalone);break;case"cccccc":o=w(1,v.Short,j.Standalone);break;case"E":case"EE":case"EEE":o=w(1,v.Abbreviated);break;case"EEEE":o=w(1,v.Wide);break;case"EEEEE":o=w(1,v.Narrow);break;case"EEEEEE":o=w(1,v.Short);break;case"a":case"aa":case"aaa":o=w(0,v.Abbreviated);break;case"aaaa":o=w(0,v.Wide);break;case"aaaaa":o=w(0,v.Narrow);break;case"b":case"bb":case"bbb":o=w(0,v.Abbreviated,j.Standalone,!0);break;case"bbbb":o=w(0,v.Wide,j.Standalone,!0);break;case"bbbbb":o=w(0,v.Narrow,j.Standalone,!0);break;case"B":case"BB":case"BBB":o=w(0,v.Abbreviated,j.Format,!0);break;case"BBBB":o=w(0,v.Wide,j.Format,!0);break;case"BBBBB":o=w(0,v.Narrow,j.Format,!0);break;case"h":o=I(3,1,-12);break;case"hh":o=I(3,2,-12);break;case"H":o=I(3,1);break;case"HH":o=I(3,2);break;case"m":o=I(4,1);break;case"mm":o=I(4,2);break;case"s":o=I(5,1);break;case"ss":o=I(5,2);break;case"S":o=I(6,1);break;case"SS":o=I(6,2);break;case"SSS":o=I(6,3);break;case"Z":case"ZZ":case"ZZZ":o=Ht(0);break;case"ZZZZZ":o=Ht(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":o=Ht(1);break;case"OOOO":case"ZZZZ":case"zzzz":o=Ht(2);break;default:return null}return bn[e]=o,o}function Ri(e,o){e=e.replace(/:/g,"");let t=Date.parse("Jan 01, 1970 00:00:00 "+e)/6e4;return isNaN(t)?o:t}function Ir(e,o){return e=new Date(e.getTime()),e.setMinutes(e.getMinutes()+o),e}function Lr(e,o,t){let i=e.getTimezoneOffset(),r=Ri(o,i);return Ir(e,-1*(r-i))}function Or(e){if(mi(e))return e;if(typeof e=="number"&&!isNaN(e))return new Date(e);if(typeof e=="string"){if(e=e.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(e)){let[i,r=1,s=1]=e.split("-").map(a=>+a);return zt(i,r-1,s)}let t=parseFloat(e);if(!isNaN(e-t))return new Date(t);let n;if(n=e.match(Dr))return Pr(n)}let o=new Date(e);if(!mi(o))throw new M(2311,!1);return o}function Pr(e){let o=new Date(0),t=0,n=0,i=e[8]?o.setUTCFullYear:o.setFullYear,r=e[8]?o.setUTCHours:o.setHours;e[9]&&(t=Number(e[9]+e[10]),n=Number(e[9]+e[11])),i.call(o,Number(e[1]),Number(e[2])-1,Number(e[3]));let s=Number(e[4]||0)-t,a=Number(e[5]||0)-n,l=Number(e[6]||0),u=Math.floor(parseFloat("0."+(e[7]||0))*1e3);return r.call(o,s,a,l,u),o}function mi(e){return e instanceof Date&&!isNaN(e.valueOf())}var Nr=/^(\d+)?\.((\d+)(-(\d+))?)?$/,bi=22,Gt=".",rt="0",xr=";",Rr=",",yn="#",yi="\xA4";function Mi(e,o,t,n,i,r,s=!1){let a="",l=!1;if(!isFinite(e))a=de(t,N.Infinity);else{let u=kr(e);s&&(u=Mr(u));let d=o.minInt,c=o.minFrac,f=o.maxFrac;if(r){let E=r.match(Nr);if(E===null)throw new M(2306,!1);let R=E[1],Se=E[3],xe=E[5];R!=null&&(d=Dn(R)),Se!=null&&(c=Dn(Se)),xe!=null?f=Dn(xe):Se!=null&&c>f&&(f=c);let Ee=100;if(d>Ee||c>Ee||f>Ee)throw new M(2306,!1)}Br(u,c,f);let p=u.digits,h=u.integerLen,b=u.exponent,y=[];for(l=p.every(E=>!E);h<d;h++)p.unshift(0);for(;h<0;h++)p.unshift(0);h>0?y=p.splice(h,p.length):(y=p,p=[0]);let C=[];for(p.length>=o.lgSize&&C.unshift(p.splice(-o.lgSize,p.length).join(""));p.length>o.gSize;)C.unshift(p.splice(-o.gSize,p.length).join(""));p.length&&C.unshift(p.join("")),a=C.join(de(t,n)),y.length&&(a+=de(t,i)+y.join("")),b&&(a+=de(t,N.Exponential)+"+"+b)}return e<0&&!l?a=o.negPre+a+o.negSuf:a=o.posPre+a+o.posSuf,a}function ki(e,o,t,n,i){let r=Cn(o,Zt.Currency),s=$i(r,de(o,N.MinusSign));return s.minFrac=Pi(n),s.maxFrac=s.minFrac,Mi(e,s,o,N.CurrencyGroup,N.CurrencyDecimal,i).replace(yi,t).replace(yi,"").trim()}function Bi(e,o,t){let n=Cn(o,Zt.Decimal),i=$i(n,de(o,N.MinusSign));return Mi(e,i,o,N.Group,N.Decimal,t)}function $i(e,o="-"){let t={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},n=e.split(xr),i=n[0],r=n[1],s=i.indexOf(Gt)!==-1?i.split(Gt):[i.substring(0,i.lastIndexOf(rt)+1),i.substring(i.lastIndexOf(rt)+1)],a=s[0],l=s[1]||"";t.posPre=a.substring(0,a.indexOf(yn));for(let d=0;d<l.length;d++){let c=l.charAt(d);c===rt?t.minFrac=t.maxFrac=d+1:c===yn?t.maxFrac=d+1:t.posSuf+=c}let u=a.split(Rr);if(t.gSize=u[1]?u[1].length:0,t.lgSize=u[2]||u[1]?(u[2]||u[1]).length:0,r){let d=i.length-t.posPre.length-t.posSuf.length,c=r.indexOf(yn);t.negPre=r.substring(0,c).replace(/'/g,""),t.negSuf=r.slice(c+d).replace(/'/g,"")}else t.negPre=o+t.posPre,t.negSuf=t.posSuf;return t}function Mr(e){if(e.digits[0]===0)return e;let o=e.digits.length-e.integerLen;return e.exponent?e.exponent+=2:(o===0?e.digits.push(0,0):o===1&&e.digits.push(0),e.integerLen+=2),e}function kr(e){let o=Math.abs(e)+"",t=0,n,i,r,s,a;for((i=o.indexOf(Gt))>-1&&(o=o.replace(Gt,"")),(r=o.search(/e/i))>0?(i<0&&(i=r),i+=+o.slice(r+1),o=o.substring(0,r)):i<0&&(i=o.length),r=0;o.charAt(r)===rt;r++);if(r===(a=o.length))n=[0],i=1;else{for(a--;o.charAt(a)===rt;)a--;for(i-=r,n=[],s=0;r<=a;r++,s++)n[s]=Number(o.charAt(r))}return i>bi&&(n=n.splice(0,bi-1),t=i-1,i=1),{digits:n,exponent:t,integerLen:i}}function Br(e,o,t){if(o>t)throw new M(2307,!1);let n=e.digits,i=n.length-e.integerLen,r=Math.min(Math.max(o,i),t),s=r+e.integerLen,a=n[s];if(s>0){n.splice(Math.max(e.integerLen,s));for(let c=s;c<n.length;c++)n[c]=0}else{i=Math.max(0,i),e.integerLen=1,n.length=Math.max(1,s=r+1),n[0]=0;for(let c=1;c<s;c++)n[c]=0}if(a>=5)if(s-1<0){for(let c=0;c>s;c--)n.unshift(0),e.integerLen++;n.unshift(1),e.integerLen++}else n[s-1]++;for(;i<Math.max(0,r);i++)n.push(0);let l=r!==0,u=o+e.integerLen,d=n.reduceRight(function(c,f,p,h){return f=f+c,h[p]=f<10?f:f-10,l&&(h[p]===0&&p>=u?h.pop():l=!1),f>=10?1:0},0);d&&(n.unshift(d),e.integerLen++)}function Dn(e){let o=parseInt(e);if(isNaN(o))throw new M(2305,!1);return o}var vn=/\s+/,Di=[],$r=(()=>{class e{_ngEl;_renderer;initialClasses=Di;rawClass;stateMap=new Map;constructor(t,n){this._ngEl=t,this._renderer=n}set klass(t){this.initialClasses=t!=null?t.trim().split(vn):Di}set ngClass(t){this.rawClass=typeof t=="string"?t.trim().split(vn):t}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let t=this.rawClass;if(Array.isArray(t)||t instanceof Set)for(let n of t)this._updateState(n,!0);else if(t!=null)for(let n of Object.keys(t))this._updateState(n,!!t[n]);this._applyStateDiff()}_updateState(t,n){let i=this.stateMap.get(t);i!==void 0?(i.enabled!==n&&(i.changed=!0,i.enabled=n),i.touched=!0):this.stateMap.set(t,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let t of this.stateMap){let n=t[0],i=t[1];i.changed?(this._toggleClass(n,i.enabled),i.changed=!1):i.touched||(i.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),i.touched=!1}}_toggleClass(t,n){t=t.trim(),t.length>0&&t.split(vn).forEach(i=>{n?this._renderer.addClass(this._ngEl.nativeElement,i):this._renderer.removeClass(this._ngEl.nativeElement,i)})}static \u0275fac=function(n){return new(n||e)(_(he),_(we))};static \u0275dir=P({type:e,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return e})();var Kt=class{$implicit;ngForOf;index;count;constructor(o,t,n,i){this.$implicit=o,this.ngForOf=t,this.index=n,this.count=i}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},ji=(()=>{class e{_viewContainer;_template;_differs;set ngForOf(t){this._ngForOf=t,this._ngForOfDirty=!0}set ngForTrackBy(t){this._trackByFn=t}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(t,n,i){this._viewContainer=t,this._template=n,this._differs=i}set ngForTemplate(t){t&&(this._template=t)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let t=this._ngForOf;!this._differ&&t&&(this._differ=this._differs.find(t).create(this.ngForTrackBy))}if(this._differ){let t=this._differ.diff(this._ngForOf);t&&this._applyChanges(t)}}_applyChanges(t){let n=this._viewContainer;t.forEachOperation((i,r,s)=>{if(i.previousIndex==null)n.createEmbeddedView(this._template,new Kt(i.item,this._ngForOf,-1,-1),s===null?void 0:s);else if(s==null)n.remove(r===null?void 0:r);else if(r!==null){let a=n.get(r);n.move(a,s),vi(a,i)}});for(let i=0,r=n.length;i<r;i++){let a=n.get(i).context;a.index=i,a.count=r,a.ngForOf=this._ngForOf}t.forEachIdentityChange(i=>{let r=n.get(i.currentIndex);vi(r,i)})}static ngTemplateContextGuard(t,n){return!0}static \u0275fac=function(n){return new(n||e)(_(Lt),_(Xe),_(li))};static \u0275dir=P({type:e,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return e})();function vi(e,o){e.context.$implicit=o.item}var Sn=(()=>{class e{_viewContainer;_context=new Yt;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(t,n){this._viewContainer=t,this._thenTemplateRef=n}set ngIf(t){this._context.$implicit=this._context.ngIf=t,this._updateView()}set ngIfThen(t){Ci(t,!1),this._thenTemplateRef=t,this._thenViewRef=null,this._updateView()}set ngIfElse(t){Ci(t,!1),this._elseTemplateRef=t,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(t,n){return!0}static \u0275fac=function(n){return new(n||e)(_(Lt),_(Xe))};static \u0275dir=P({type:e,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return e})(),Yt=class{$implicit=null;ngIf=null};function Ci(e,o){if(e&&!e.createEmbeddedView)throw new M(2020,!1)}var En=(()=>{class e{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(t,n,i){this._ngEl=t,this._differs=n,this._renderer=i}set ngStyle(t){this._ngStyle=t,!this._differ&&t&&(this._differ=this._differs.find(t).create())}ngDoCheck(){if(this._differ){let t=this._differ.diff(this._ngStyle);t&&this._applyChanges(t)}}_setStyle(t,n){let[i,r]=t.split("."),s=i.indexOf("-")===-1?void 0:Jn.DashCase;n!=null?this._renderer.setStyle(this._ngEl.nativeElement,i,r?`${n}${r}`:n,s):this._renderer.removeStyle(this._ngEl.nativeElement,i,s)}_applyChanges(t){t.forEachRemovedItem(n=>this._setStyle(n.key,null)),t.forEachAddedItem(n=>this._setStyle(n.key,n.currentValue)),t.forEachChangedItem(n=>this._setStyle(n.key,n.currentValue))}static \u0275fac=function(n){return new(n||e)(_(he),_(ui),_(we))};static \u0275dir=P({type:e,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return e})(),wn=(()=>{class e{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=g(qe);constructor(t){this._viewContainerRef=t}ngOnChanges(t){if(this._shouldRecreateView(t)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let i=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,i,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(t){return!!t.ngTemplateOutlet||!!t.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(t,n,i)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,i):!1,get:(t,n,i)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,i)}})}static \u0275fac=function(n){return new(n||e)(_(Lt))};static \u0275dir=P({type:e,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[It]})}return e})();function An(e,o){return new M(2100,!1)}var jr="mediumDate",Ui=new O(""),Hi=new O(""),Ur=(()=>{class e{locale;defaultTimezone;defaultOptions;constructor(t,n,i){this.locale=t,this.defaultTimezone=n,this.defaultOptions=i}transform(t,n,i,r){if(t==null||t===""||t!==t)return null;try{let s=n??this.defaultOptions?.dateFormat??jr,a=i??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return Ni(t,s,r||this.locale,a)}catch(s){throw An(e,s.message)}}static \u0275fac=function(n){return new(n||e)(_(Rt,16),_(Ui,24),_(Hi,24))};static \u0275pipe=Qe({name:"date",type:e,pure:!0})}return e})();var Hr=(()=>{class e{transform(t){return JSON.stringify(t,null,2)}static \u0275fac=function(n){return new(n||e)};static \u0275pipe=Qe({name:"json",type:e,pure:!1})}return e})();var Wr=(()=>{class e{_locale;constructor(t){this._locale=t}transform(t,n,i){if(!Wi(t))return null;i||=this._locale;try{let r=Vi(t);return Bi(r,i,n)}catch(r){throw An(e,r.message)}}static \u0275fac=function(n){return new(n||e)(_(Rt,16))};static \u0275pipe=Qe({name:"number",type:e,pure:!0})}return e})();var Vr=(()=>{class e{_locale;_defaultCurrencyCode;constructor(t,n="USD"){this._locale=t,this._defaultCurrencyCode=n}transform(t,n=this._defaultCurrencyCode,i="symbol",r,s){if(!Wi(t))return null;s||=this._locale,typeof i=="boolean"&&(i=i?"symbol":"code");let a=n||this._defaultCurrencyCode;i!=="code"&&(i==="symbol"||i==="symbol-narrow"?a=Oi(a,i==="symbol"?"wide":"narrow",s):a=i);try{let l=Vi(t);return ki(l,s,a,n,r)}catch(l){throw An(e,l.message)}}static \u0275fac=function(n){return new(n||e)(_(Rt,16),_(ai,16))};static \u0275pipe=Qe({name:"currency",type:e,pure:!0})}return e})();function Wi(e){return!(e==null||e===""||e!==e)}function Vi(e){if(typeof e=="string"&&!isNaN(Number(e)-parseFloat(e)))return Number(e);if(typeof e!="number")throw new M(2309,!1);return e}var me=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=G({type:e});static \u0275inj=z({})}return e})();function zr(e,o){o=encodeURIComponent(o);for(let t of e.split(";")){let n=t.indexOf("="),[i,r]=n==-1?[t,""]:[t.slice(0,n),t.slice(n+1)];if(i.trim()===o)return decodeURIComponent(r)}return null}var _n=class{};var Kr="browser",Yr="server";function st(e){return e===Kr}function Fn(e){return e===Yr}var Ll=(()=>{class e{static \u0275prov=D({token:e,providedIn:"root",factory:()=>new Tn(g(H),window)})}return e})(),Tn=class{document;window;offset=()=>[0,0];constructor(o,t){this.document=o,this.window=t}setOffset(o){Array.isArray(o)?this.offset=()=>o:this.offset=o}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(o,t){this.window.scrollTo(Re(m({},t),{left:o[0],top:o[1]}))}scrollToAnchor(o,t){let n=Zr(this.document,o);n&&(this.scrollToElement(n,t),n.focus({preventScroll:!0}))}setHistoryScrollRestoration(o){try{this.window.history.scrollRestoration=o}catch{console.warn(rn(2400,!1))}}scrollToElement(o,t){let n=o.getBoundingClientRect(),i=n.left+this.window.pageXOffset,r=n.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(Re(m({},t),{left:i-s[0],top:r-s[1]}))}};function Zr(e,o){let t=e.getElementById(o)||e.getElementsByName(o)[0];if(t)return t;if(typeof e.createTreeWalker=="function"&&e.body&&typeof e.body.attachShadow=="function"){let n=e.createTreeWalker(e.body,NodeFilter.SHOW_ELEMENT),i=n.currentNode;for(;i;){let r=i.shadowRoot;if(r){let s=r.getElementById(o)||r.querySelector(`[name="${o}"]`);if(s)return s}i=n.nextNode()}}return null}function Fe(...e){if(e){let o=[];for(let t=0;t<e.length;t++){let n=e[t];if(!n)continue;let i=typeof n;if(i==="string"||i==="number")o.push(n);else if(i==="object"){let r=Array.isArray(n)?[Fe(...n)]:Object.entries(n).map(([s,a])=>a?s:void 0);o=r.length?o.concat(r.filter(s=>!!s)):o}}return o.join(" ").trim()}}function Ln(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&typeof e=="object"&&Object.keys(e).length===0}function In(e,o,t=new WeakSet){if(e===o)return!0;if(!e||!o||typeof e!="object"||typeof o!="object"||t.has(e)||t.has(o))return!1;t.add(e).add(o);let n=Array.isArray(e),i=Array.isArray(o),r,s,a;if(n&&i){if(s=e.length,s!=o.length)return!1;for(r=s;r--!==0;)if(!In(e[r],o[r],t))return!1;return!0}if(n!=i)return!1;let l=e instanceof Date,u=o instanceof Date;if(l!=u)return!1;if(l&&u)return e.getTime()==o.getTime();let d=e instanceof RegExp,c=o instanceof RegExp;if(d!=c)return!1;if(d&&c)return e.toString()==o.toString();let f=Object.keys(e);if(s=f.length,s!==Object.keys(o).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(o,f[r]))return!1;for(r=s;r--!==0;)if(a=f[r],!In(e[a],o[a],t))return!1;return!0}function Xr(e,o){return In(e,o)}function Xt(e){return typeof e=="function"&&"call"in e&&"apply"in e}function Le(e){return!Ln(e)}function qt(e,o){if(!e||!o)return null;try{let t=e[o];if(Le(t))return t}catch{}if(Object.keys(e).length){if(Xt(o))return o(e);if(o.indexOf(".")===-1)return e[o];{let t=o.split("."),n=e;for(let i=0,r=t.length;i<r;++i){if(n==null)return null;n=n[t[i]]}return n}}return null}function at(e,o,t){return t?qt(e,t)===qt(o,t):Xr(e,o)}function Bl(e,o){if(e!=null&&o&&o.length){for(let t of o)if(at(e,t))return!0}return!1}function Qr(e,o=!0){return e instanceof Object&&e.constructor===Object&&(o||Object.keys(e).length!==0)}function $l(e,o){let t=-1;if(Le(e))try{t=e.findLastIndex(o)}catch{t=e.lastIndexOf([...e].reverse().find(o))}return t}function oe(e,...o){return Xt(e)?e(...o):e}function lt(e,o=!0){return typeof e=="string"&&(o||e!=="")}function Ie(e){return lt(e)?e.replace(/(-|_)/g,"").toLowerCase():e}function On(e,o="",t={}){let n=Ie(o).split("."),i=n.shift();if(i){if(Qr(e)){let r=Object.keys(e).find(s=>Ie(s)===i)||"";return On(oe(e[r],t),n.join("."),t)}return}return oe(e,t)}function zi(e,o=!0){return Array.isArray(e)&&(o||e.length!==0)}function jl(e){return e instanceof Date}function Ul(e=""){return Le(e)&&e.length===1&&!!e.match(/\S| /)}function Qt(e){return e&&e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":").trim()}function X(e){if(e&&/[\xC0-\xFF\u0100-\u017E]/.test(e)){let o={A:/[\xC0-\xC5\u0100\u0102\u0104]/g,AE:/[\xC6]/g,C:/[\xC7\u0106\u0108\u010A\u010C]/g,D:/[\xD0\u010E\u0110]/g,E:/[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,G:/[\u011C\u011E\u0120\u0122]/g,H:/[\u0124\u0126]/g,I:/[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,IJ:/[\u0132]/g,J:/[\u0134]/g,K:/[\u0136]/g,L:/[\u0139\u013B\u013D\u013F\u0141]/g,N:/[\xD1\u0143\u0145\u0147\u014A]/g,O:/[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,OE:/[\u0152]/g,R:/[\u0154\u0156\u0158]/g,S:/[\u015A\u015C\u015E\u0160]/g,T:/[\u0162\u0164\u0166]/g,U:/[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,W:/[\u0174]/g,Y:/[\xDD\u0176\u0178]/g,Z:/[\u0179\u017B\u017D]/g,a:/[\xE0-\xE5\u0101\u0103\u0105]/g,ae:/[\xE6]/g,c:/[\xE7\u0107\u0109\u010B\u010D]/g,d:/[\u010F\u0111]/g,e:/[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,g:/[\u011D\u011F\u0121\u0123]/g,i:/[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,ij:/[\u0133]/g,j:/[\u0135]/g,k:/[\u0137,\u0138]/g,l:/[\u013A\u013C\u013E\u0140\u0142]/g,n:/[\xF1\u0144\u0146\u0148\u014B]/g,p:/[\xFE]/g,o:/[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,oe:/[\u0153]/g,r:/[\u0155\u0157\u0159]/g,s:/[\u015B\u015D\u015F\u0161]/g,t:/[\u0163\u0165\u0167]/g,u:/[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,w:/[\u0175]/g,y:/[\xFD\xFF\u0177]/g,z:/[\u017A\u017C\u017E]/g};for(let t in o)e=e.replace(o[t],t)}return e}function Gi(e,o){return e?e.classList?e.classList.contains(o):new RegExp("(^| )"+o+"( |$)","gi").test(e.className):!1}function ut(e,o){if(e&&o){let t=n=>{Gi(e,n)||(e.classList?e.classList.add(n):e.className+=" "+n)};[o].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(t))}}function Jr(){return window.innerWidth-document.documentElement.offsetWidth}function Ki(e){typeof e=="string"?ut(document.body,e||"p-overflow-hidden"):(e!=null&&e.variableName&&document.body.style.setProperty(e.variableName,Jr()+"px"),ut(document.body,e?.className||"p-overflow-hidden"))}function Oe(e,o){if(e&&o){let t=n=>{e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[o].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(t))}}function Yi(e){typeof e=="string"?Oe(document.body,e||"p-overflow-hidden"):(e!=null&&e.variableName&&document.body.style.removeProperty(e.variableName),Oe(document.body,e?.className||"p-overflow-hidden"))}function dt(e){for(let o of document?.styleSheets)try{for(let t of o?.cssRules)for(let n of t?.style)if(e.test(n))return{name:n,value:t.style.getPropertyValue(n).trim()}}catch{}return null}function Zi(e){let o={width:0,height:0};if(e){let[t,n]=[e.style.visibility,e.style.display],i=e.getBoundingClientRect();e.style.visibility="hidden",e.style.display="block",o.width=i.width||e.offsetWidth,o.height=i.height||e.offsetHeight,e.style.display=n,e.style.visibility=t}return o}function qi(){let e=window,o=document,t=o.documentElement,n=o.getElementsByTagName("body")[0],i=e.innerWidth||t.clientWidth||n.clientWidth,r=e.innerHeight||t.clientHeight||n.clientHeight;return{width:i,height:r}}function Pn(e){return e?Math.abs(e.scrollLeft):0}function es(){let e=document.documentElement;return(window.pageXOffset||Pn(e))-(e.clientLeft||0)}function ts(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}function ns(e){return e?getComputedStyle(e).direction==="rtl":!1}function Wl(e,o,t=!0){var n,i,r,s;if(e){let a=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:Zi(e),l=a.height,u=a.width,d=o.offsetHeight,c=o.offsetWidth,f=o.getBoundingClientRect(),p=ts(),h=es(),b=qi(),y,C,E="top";f.top+d+l>b.height?(y=f.top+p-l,E="bottom",y<0&&(y=p)):y=d+f.top+p,f.left+u>b.width?C=Math.max(0,f.left+h+c-u):C=f.left+h,ns(e)?e.style.insetInlineEnd=C+"px":e.style.insetInlineStart=C+"px",e.style.top=y+"px",e.style.transformOrigin=E,t&&(e.style.marginTop=E==="bottom"?`calc(${(i=(n=dt(/-anchor-gutter$/))==null?void 0:n.value)!=null?i:"2px"} * -1)`:(s=(r=dt(/-anchor-gutter$/))==null?void 0:r.value)!=null?s:"")}}function Vl(e,o){e&&(typeof o=="string"?e.style.cssText=o:Object.entries(o||{}).forEach(([t,n])=>e.style[t]=n))}function Xi(e,o){if(e instanceof HTMLElement){let t=e.offsetWidth;if(o){let n=getComputedStyle(e);t+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return t}return 0}function zl(e,o,t=!0,n=void 0){var i;if(e){let r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:Zi(e),s=o.offsetHeight,a=o.getBoundingClientRect(),l=qi(),u,d,c=n??"top";if(!n&&a.top+s+r.height>l.height?(u=-1*r.height,c="bottom",a.top+u<0&&(u=-1*a.top)):u=s,r.width>l.width?d=a.left*-1:a.left+r.width>l.width?d=(a.left+r.width-l.width)*-1:d=0,e.style.top=u+"px",e.style.insetInlineStart=d+"px",e.style.transformOrigin=c,t){let f=(i=dt(/-anchor-gutter$/))==null?void 0:i.value;e.style.marginTop=c==="bottom"?`calc(${f??"2px"} * -1)`:f??""}}}function Qi(e){if(e){let o=e.parentNode;return o&&o instanceof ShadowRoot&&o.host&&(o=o.host),o}return null}function is(e){return!!(e!==null&&typeof e<"u"&&e.nodeName&&Qi(e))}function ke(e){return typeof Element<"u"?e instanceof Element:e!==null&&typeof e=="object"&&e.nodeType===1&&typeof e.nodeName=="string"}function Jt(e){var o;if(ke(e))return e;if(!e||typeof e!="object")return;let t=e;if("current"in e)t=e.current,t=(o=Jt(t?.elementRef))!=null?o:t;else if("value"in e)t=e.value;else if("nativeElement"in e)t=e.nativeElement;else if("el"in e){let n=e.el;n&&typeof n=="object"&&"nativeElement"in n?t=n.nativeElement:t=n}else if("elementRef"in e)return Jt(e.elementRef);return t=oe(t),ke(t)?t:void 0}function os(e,o){var t,n,i;if(e)switch(e){case"document":return document;case"window":return window;case"body":return document.body;case"@next":return o?.nextElementSibling;case"@prev":return o?.previousElementSibling;case"@first":return o?.firstElementChild;case"@last":return o?.lastElementChild;case"@child":return(t=o?.children)==null?void 0:t[0];case"@parent":return o?.parentElement;case"@grandparent":return(n=o?.parentElement)==null?void 0:n.parentElement;default:{if(typeof e=="string"){let a=e.match(/^@child\[(\d+)]/);return a?((i=o?.children)==null?void 0:i[parseInt(a[1],10)])||null:document.querySelector(e)||null}let r=(a=>typeof a=="function"&&"call"in a&&"apply"in a)(e)?e():e,s=Jt(r);return is(s)?s:r?.nodeType===9?r:void 0}}}function Kl(e,o){let t=os(e,o);if(t)t.appendChild(o);else throw new Error("Cannot append "+o+" to "+e)}function en(e,o={}){if(ke(e)){let t=(i,r)=>{var s,a;let l=(s=e?.$attrs)!=null&&s[i]?[(a=e?.$attrs)==null?void 0:a[i]]:[];return[r].flat().reduce((u,d)=>{if(d!=null){let c=typeof d;if(c==="string"||c==="number")u.push(d);else if(c==="object"){let f=Array.isArray(d)?t(i,d):Object.entries(d).map(([p,h])=>i==="style"&&(h||h===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?p:void 0);u=f.length?u.concat(f.filter(p=>!!p)):u}}return u},l)},n=i=>{t("style",i).forEach(r=>{let s=r.indexOf(":");if(s<0)return;let a=r.slice(0,s).trim(),l=r.slice(s+1).trim();a&&e.style.setProperty(a,l)})};Object.entries(o).forEach(([i,r])=>{if(r!=null){let s=i.match(/^on(.+)/);s?e.addEventListener(s[1].toLowerCase(),r):i==="p-bind"||i==="pBind"?en(e,r):i==="style"?(n(r),(e.$attrs=e.$attrs||{})&&(e.$attrs[i]=e.style.cssText)):(r=i==="class"?[...new Set(t("class",r))].join(" ").trim():r,(e.$attrs=e.$attrs||{})&&(e.$attrs[i]=r),e.setAttribute(i,r))}})}}function rs(e,o={},...t){if(e){let n=document.createElement(e);return en(n,o),n.append(...t),n}}function Yl(e,o){if(e){e.style.opacity="0";let t=+new Date,n="0",i=function(){n=`${+e.style.opacity+(new Date().getTime()-t)/o}`,e.style.opacity=n,t=+new Date,+n<1&&("requestAnimationFrame"in window?requestAnimationFrame(i):setTimeout(i,16))};i()}}function ss(e,o){return ke(e)?Array.from(e.querySelectorAll(o)):[]}function Zl(e,o){return ke(e)?e.matches(o)?e:e.querySelector(o):null}function ql(e,o){e&&document.activeElement!==e&&e.focus(o)}function Xl(e,o){if(ke(e)){let t=e.getAttribute(o);return isNaN(t)?t==="true"||t==="false"?t==="true":t:+t}}function Ji(e,o=""){let t=ss(e,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            [href]:not([tabindex = "-1"]):not([style*="display:none"]):not([hidden])${o},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o}`),n=[];for(let i of t)getComputedStyle(i).display!="none"&&getComputedStyle(i).visibility!="hidden"&&n.push(i);return n}function Ql(e,o){let t=Ji(e,o);return t.length>0?t[0]:null}function Nn(e){if(e){let o=e.offsetHeight,t=getComputedStyle(e);return o-=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)+parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),o}return 0}function Jl(e){var o;if(e){let t=(o=Qi(e))==null?void 0:o.childNodes,n=0;if(t)for(let i=0;i<t.length;i++){if(t[i]===e)return n;t[i].nodeType===1&&n++}}return-1}function eu(e,o){let t=Ji(e,o);return t.length>0?t[t.length-1]:null}function eo(e){if(e){let o=e.getBoundingClientRect();return{top:o.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:o.left+(window.pageXOffset||Pn(document.documentElement)||Pn(document.body)||0)}}return{top:"auto",left:"auto"}}function xn(e,o){if(e){let t=e.offsetHeight;if(o){let n=getComputedStyle(e);t+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return t}return 0}function tu(){if(window.getSelection)return window.getSelection().toString();if(document.getSelection)return document.getSelection().toString()}function Rn(e){if(e){let o=e.offsetWidth,t=getComputedStyle(e);return o-=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)+parseFloat(t.borderLeftWidth)+parseFloat(t.borderRightWidth),o}return 0}function nu(e){if(e){let o=e.nodeName,t=e.parentElement&&e.parentElement.nodeName;return o==="INPUT"||o==="TEXTAREA"||o==="BUTTON"||o==="A"||t==="INPUT"||t==="TEXTAREA"||t==="BUTTON"||t==="A"||!!e.closest(".p-button, .p-checkbox, .p-radiobutton")}return!1}function iu(e){return!!(e&&e.offsetParent!=null)}function ou(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window)}function ru(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function su(){return new Promise(e=>{requestAnimationFrame(()=>{requestAnimationFrame(e)})})}function to(e){var o;e&&("remove"in Element.prototype?e.remove():(o=e.parentNode)==null||o.removeChild(e))}function au(e,o){let t=Jt(e);if(t)t.removeChild(o);else throw new Error("Cannot remove "+o+" from "+e)}function lu(e,o){let t=getComputedStyle(e).getPropertyValue("borderTopWidth"),n=t?parseFloat(t):0,i=getComputedStyle(e).getPropertyValue("paddingTop"),r=i?parseFloat(i):0,s=e.getBoundingClientRect(),a=o.getBoundingClientRect().top+document.body.scrollTop-(s.top+document.body.scrollTop)-n-r,l=e.scrollTop,u=e.clientHeight,d=xn(o);a<0?e.scrollTop=l+a:a+d>u&&(e.scrollTop=l+a-u+d)}function no(e,o="",t){if(ke(e)&&t!==null&&t!==void 0){if(o==="style"){typeof t=="string"?e.style.cssText=t:typeof t=="object"&&Object.entries(t).forEach(([n,i])=>{if(i==null)return;let r=n.startsWith("--")?n:n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();e.style.setProperty(r,String(i))});return}e.setAttribute(o,t)}}var as=Object.defineProperty,io=Object.getOwnPropertySymbols,ls=Object.prototype.hasOwnProperty,us=Object.prototype.propertyIsEnumerable,oo=(e,o,t)=>o in e?as(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,ro=(e,o)=>{for(var t in o||(o={}))ls.call(o,t)&&oo(e,t,o[t]);if(io)for(var t of io(o))us.call(o,t)&&oo(e,t,o[t]);return e};function so(...e){if(e){let o=[];for(let t=0;t<e.length;t++){let n=e[t];if(!n)continue;let i=typeof n;if(i==="string"||i==="number")o.push(n);else if(i==="object"){let r=Array.isArray(n)?[so(...n)]:Object.entries(n).map(([s,a])=>a?s:void 0);o=r.length?o.concat(r.filter(s=>!!s)):o}}return o.join(" ").trim()}}function ds(e){return typeof e=="function"&&"call"in e&&"apply"in e}function cs({skipUndefined:e=!1},...o){return o?.reduce((t,n={})=>{for(let i in n){let r=n[i];if(!(e&&r===void 0))if(i==="style")t.style=ro(ro({},t.style),n.style);else if(i==="class"||i==="className")t[i]=so(t[i],n[i]);else if(ds(r)){let s=t[i];t[i]=s?(...a)=>{s(...a),r(...a)}:r}else t[i]=r}return t},{})}function Mn(...e){return cs({skipUndefined:!1},...e)}var tn={};function ct(e="pui_id_"){return Object.hasOwn(tn,e)||(tn[e]=0),tn[e]++,`${e}${tn[e]}`}var ps=["*"],fs=(function(e){return e[e.ACCEPT=0]="ACCEPT",e[e.REJECT=1]="REJECT",e[e.CANCEL=2]="CANCEL",e})(fs||{}),gu=(()=>{class e{requireConfirmationSource=new se;acceptConfirmationSource=new se;requireConfirmation$=this.requireConfirmationSource.asObservable();accept=this.acceptConfirmationSource.asObservable();confirm(t){return this.requireConfirmationSource.next(t),this}close(){return this.requireConfirmationSource.next(null),this}onAccept(){this.acceptConfirmationSource.next(null)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=D({token:e,factory:e.\u0275fac})}return e})();var x=(()=>{class e{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return e})(),mu=(()=>{class e{static AND="and";static OR="or"}return e})(),bu=(()=>{class e{filter(t,n,i,r,s){let a=[];if(t)for(let l of t)for(let u of n){let d=qt(l,u);if(this.filters[r](d,i,s)){a.push(l);break}}return a}filters={startsWith:(t,n,i)=>{if(n==null||n.trim()==="")return!0;if(t==null)return!1;let r=X(n.toString()).toLocaleLowerCase(i);return X(t.toString()).toLocaleLowerCase(i).slice(0,r.length)===r},contains:(t,n,i)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(t==null)return!1;let r=X(n.toString()).toLocaleLowerCase(i);return X(t.toString()).toLocaleLowerCase(i).indexOf(r)!==-1},notContains:(t,n,i)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(t==null)return!1;let r=X(n.toString()).toLocaleLowerCase(i);return X(t.toString()).toLocaleLowerCase(i).indexOf(r)===-1},endsWith:(t,n,i)=>{if(n==null||n.trim()==="")return!0;if(t==null)return!1;let r=X(n.toString()).toLocaleLowerCase(i),s=X(t.toString()).toLocaleLowerCase(i);return s.indexOf(r,s.length-r.length)!==-1},equals:(t,n,i)=>n==null||typeof n=="string"&&n.trim()===""?!0:t==null?!1:t.getTime&&n.getTime?t.getTime()===n.getTime():t==n?!0:X(t.toString()).toLocaleLowerCase(i)==X(n.toString()).toLocaleLowerCase(i),notEquals:(t,n,i)=>n==null||typeof n=="string"&&n.trim()===""?!1:t==null?!0:t.getTime&&n.getTime?t.getTime()!==n.getTime():t==n?!1:X(t.toString()).toLocaleLowerCase(i)!=X(n.toString()).toLocaleLowerCase(i),in:(t,n)=>{if(n==null||n.length===0)return!0;for(let i=0;i<n.length;i++)if(at(t,n[i]))return!0;return!1},between:(t,n)=>n==null||n[0]==null||n[1]==null?!0:t==null?!1:t.getTime?n[0].getTime()<=t.getTime()&&t.getTime()<=n[1].getTime():n[0]<=t&&t<=n[1],lt:(t,n,i)=>n==null?!0:t==null?!1:t.getTime&&n.getTime?t.getTime()<n.getTime():t<n,lte:(t,n,i)=>n==null?!0:t==null?!1:t.getTime&&n.getTime?t.getTime()<=n.getTime():t<=n,gt:(t,n,i)=>n==null?!0:t==null?!1:t.getTime&&n.getTime?t.getTime()>n.getTime():t>n,gte:(t,n,i)=>n==null?!0:t==null?!1:t.getTime&&n.getTime?t.getTime()>=n.getTime():t>=n,is:(t,n,i)=>this.filters.equals(t,n,i),isNot:(t,n,i)=>this.filters.notEquals(t,n,i),before:(t,n,i)=>this.filters.lt(t,n,i),after:(t,n,i)=>this.filters.gt(t,n,i),dateIs:(t,n)=>n==null?!0:t==null?!1:t.toDateString()===n.toDateString(),dateIsNot:(t,n)=>n==null?!0:t==null?!1:t.toDateString()!==n.toDateString(),dateBefore:(t,n)=>n==null?!0:t==null?!1:t.getTime()<n.getTime(),dateAfter:(t,n)=>n==null?!0:t==null?!1:(t.setHours(0,0,0,0),t.getTime()>n.getTime())};register(t,n){this.filters[t]=n}static \u0275fac=function(n){return new(n||e)};static \u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),yu=(()=>{class e{messageSource=new se;clearSource=new se;messageObserver=this.messageSource.asObservable();clearObserver=this.clearSource.asObservable();add(t){t&&this.messageSource.next(t)}addAll(t){t&&t.length&&this.messageSource.next(t)}clear(t){this.clearSource.next(t||null)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=D({token:e,factory:e.\u0275fac})}return e})(),Du=(()=>{class e{clickSource=new se;parentDragSource=new se;clickObservable=this.clickSource.asObservable();parentDragObservable=this.parentDragSource.asObservable();add(t){t&&this.clickSource.next(t)}emitParentDrag(t){this.parentDragSource.next(t)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var vu=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=te({type:e,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:ps,decls:1,vars:0,template:function(n,i){n&1&&(Ae(),_e(0))},encapsulation:2})}return e})(),ao=(()=>{class e{template;type;name;constructor(t){this.template=t}getType(){return this.name}static \u0275fac=function(n){return new(n||e)(_(Xe))};static \u0275dir=P({type:e,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return e})(),Pe=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=G({type:e});static \u0275inj=z({imports:[me]})}return e})(),Cu=(()=>{class e{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static NO_FILTER="noFilter";static LT="lt";static LTE="lte";static GT="gt";static GTE="gte";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static CLEAR="clear";static APPLY="apply";static MATCH_ALL="matchAll";static MATCH_ANY="matchAny";static ADD_RULE="addRule";static REMOVE_RULE="removeRule";static ACCEPT="accept";static REJECT="reject";static CHOOSE="choose";static UPLOAD="upload";static CANCEL="cancel";static PENDING="pending";static FILE_SIZE_TYPES="fileSizeTypes";static DAY_NAMES="dayNames";static DAY_NAMES_SHORT="dayNamesShort";static DAY_NAMES_MIN="dayNamesMin";static MONTH_NAMES="monthNames";static MONTH_NAMES_SHORT="monthNamesShort";static FIRST_DAY_OF_WEEK="firstDayOfWeek";static TODAY="today";static WEEK_HEADER="weekHeader";static WEAK="weak";static MEDIUM="medium";static STRONG="strong";static PASSWORD_PROMPT="passwordPrompt";static EMPTY_MESSAGE="emptyMessage";static EMPTY_FILTER_MESSAGE="emptyFilterMessage";static SHOW_FILTER_MENU="showFilterMenu";static HIDE_FILTER_MENU="hideFilterMenu";static SELECTION_MESSAGE="selectionMessage";static ARIA="aria";static SELECT_COLOR="selectColor";static BROWSE_FILES="browseFiles"}return e})();var hs=Object.defineProperty,lo=Object.getOwnPropertySymbols,gs=Object.prototype.hasOwnProperty,ms=Object.prototype.propertyIsEnumerable,uo=(e,o,t)=>o in e?hs(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,bs=(e,o)=>{for(var t in o||(o={}))gs.call(o,t)&&uo(e,t,o[t]);if(lo)for(var t of lo(o))ms.call(o,t)&&uo(e,t,o[t]);return e};function pt(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&typeof e=="object"&&Object.keys(e).length===0}function ys(e){return typeof e=="function"&&"call"in e&&"apply"in e}function L(e){return!pt(e)}function be(e,o=!0){return e instanceof Object&&e.constructor===Object&&(o||Object.keys(e).length!==0)}function co(e={},o={}){let t=bs({},e);return Object.keys(o).forEach(n=>{let i=n;be(o[i])&&i in e&&be(e[i])?t[i]=co(e[i],o[i]):t[i]=o[i]}),t}function po(...e){return e.reduce((o,t,n)=>n===0?t:co(o,t),{})}function Ne(e,...o){return ys(e)?e(...o):e}function Be(e,o=!0){return typeof e=="string"&&(o||e!=="")}function fo(e){return L(e)&&!isNaN(e)}function ce(e,o){if(o){let t=o.test(e);return o.lastIndex=0,t}return!1}function kn(e){return e&&e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":").trim()}function nn(e){return Be(e)?e.replace(/(_)/g,"-").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase():e}function Eu(e){return e==="auto"?0:typeof e=="number"?e:Number(e.replace(/[^\d.]/g,"").replace(",","."))*1e3}function ho(){let e=new Map;return{on(o,t){let n=e.get(o);return n?n.push(t):n=[t],e.set(o,n),this},off(o,t){let n=e.get(o);return n&&n.splice(n.indexOf(t)>>>0,1),this},emit(o,t){let n=e.get(o);n&&n.forEach(i=>{i(t)})},clear(){e.clear()}}}function Ds(e,o){return e?e.classList?e.classList.contains(o):new RegExp("(^| )"+o+"( |$)","gi").test(e.className):!1}function _u(e,o){if(e&&o){let t=n=>{Ds(e,n)||(e.classList?e.classList.add(n):e.className+=" "+n)};[o].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(t))}}function Tu(e,o){if(e&&o){let t=n=>{e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[o].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(t))}}function Fu(e){let o={width:0,height:0};if(e){let[t,n]=[e.style.visibility,e.style.display],i=e.getBoundingClientRect();e.style.visibility="hidden",e.style.display="block",o.width=i.width||e.offsetWidth,o.height=i.height||e.offsetHeight,e.style.display=n,e.style.visibility=t}return o}function Iu(){return typeof window>"u"||!window.matchMedia?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Lu(e,o,t=null,n){var i;o&&((i=e?.style)==null||i.setProperty(o,t,n))}var vs=Object.defineProperty,Cs=Object.defineProperties,Ss=Object.getOwnPropertyDescriptors,on=Object.getOwnPropertySymbols,bo=Object.prototype.hasOwnProperty,yo=Object.prototype.propertyIsEnumerable,go=(e,o,t)=>o in e?vs(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,fe=(e,o)=>{for(var t in o||(o={}))bo.call(o,t)&&go(e,t,o[t]);if(on)for(var t of on(o))yo.call(o,t)&&go(e,t,o[t]);return e},Bn=(e,o)=>Cs(e,Ss(o)),ve=(e,o)=>{var t={};for(var n in e)bo.call(e,n)&&o.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&on)for(var n of on(e))o.indexOf(n)<0&&yo.call(e,n)&&(t[n]=e[n]);return t};function Ru(...e){return po(...e)}var Es=ho(),Q=Es,ft=/{([^}]*)}/g,Do=/(\d+\s+[\+\-\*\/]\s+\d+)/g,vo=/var\([^)]+\)/g;function mo(e){return Be(e)?e.replace(/[A-Z]/g,(o,t)=>t===0?o:"."+o.toLowerCase()).toLowerCase():e}function ws(e){return be(e)&&e.hasOwnProperty("$value")&&e.hasOwnProperty("$type")?e.$value:e}function As(e){return e.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function $n(e="",o=""){return As(`${Be(e,!1)&&Be(o,!1)?`${e}-`:e}${o}`)}function Co(e="",o=""){return`--${$n(e,o)}`}function _s(e=""){let o=(e.match(/{/g)||[]).length,t=(e.match(/}/g)||[]).length;return(o+t)%2!==0}function So(e,o="",t="",n=[],i){if(Be(e)){let r=e.trim();if(_s(r))return;if(ce(r,ft)){let s=r.replaceAll(ft,a=>{let l=a.replace(/{|}/g,"").split(".").filter(u=>!n.some(d=>ce(u,d)));return`var(${Co(t,nn(l.join("-")))}${L(i)?`, ${i}`:""})`});return ce(s.replace(vo,"0"),Do)?`calc(${s})`:s}return r}else if(fo(e))return e}function Ts(e,o,t){Be(o,!1)&&e.push(`${o}:${t};`)}function Ve(e,o){return e?`${e}{${o}}`:""}function Eo(e,o){if(e.indexOf("dt(")===-1)return e;function t(s,a){let l=[],u=0,d="",c=null,f=0;for(;u<=s.length;){let p=s[u];if((p==='"'||p==="'"||p==="`")&&s[u-1]!=="\\"&&(c=c===p?null:p),!c&&(p==="("&&f++,p===")"&&f--,(p===","||u===s.length)&&f===0)){let h=d.trim();h.startsWith("dt(")?l.push(Eo(h,a)):l.push(n(h)),d="",u++;continue}p!==void 0&&(d+=p),u++}return l}function n(s){let a=s[0];if((a==='"'||a==="'"||a==="`")&&s[s.length-1]===a)return s.slice(1,-1);let l=Number(s);return isNaN(l)?s:l}let i=[],r=[];for(let s=0;s<e.length;s++)if(e[s]==="d"&&e.slice(s,s+3)==="dt(")r.push(s),s+=2;else if(e[s]===")"&&r.length>0){let a=r.pop();r.length===0&&i.push([a,s])}if(!i.length)return e;for(let s=i.length-1;s>=0;s--){let[a,l]=i[s],u=e.slice(a+3,l),d=t(u,o),c=o(...d);e=e.slice(0,a)+c+e.slice(l+1)}return e}var Un=e=>{var o;let t=S.getTheme(),n=jn(t,e,void 0,"variable"),i=(o=n?.match(/--[\w-]+/g))==null?void 0:o[0],r=jn(t,e,void 0,"value");return{name:i,variable:n,value:r}},Ce=(...e)=>jn(S.getTheme(),...e),jn=(e={},o,t,n)=>{if(o){let{variable:i,options:r}=S.defaults||{},{prefix:s,transform:a}=e?.options||r||{},l=ce(o,ft)?o:`{${o}}`;return n==="value"||pt(n)&&a==="strict"?S.getTokenValue(o):So(l,void 0,s,[i.excludedKeyRegex],t)}return""};function ze(e,...o){if(e instanceof Array){let t=e.reduce((n,i,r)=>{var s;return n+i+((s=Ne(o[r],{dt:Ce}))!=null?s:"")},"");return Eo(t,Ce)}return Ne(e,{dt:Ce})}function Fs(e,o={}){let t=S.defaults.variable,{prefix:n=t.prefix,selector:i=t.selector,excludedKeyRegex:r=t.excludedKeyRegex}=o,s=[],a=[],l=[{node:e,path:n}];for(;l.length;){let{node:d,path:c}=l.pop();for(let f in d){let p=d[f],h=ws(p),b=ce(f,r)?$n(c):$n(c,nn(f));if(be(h))l.push({node:h,path:b});else{let y=Co(b),C=So(h,b,n,[r]);Ts(a,y,C);let E=b;n&&E.startsWith(n+"-")&&(E=E.slice(n.length+1)),s.push(E.replace(/-/g,"."))}}}let u=a.join("");return{value:a,tokens:s,declarations:u,css:Ve(i,u)}}var pe={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(e){return{type:"class",selector:e,matched:this.pattern.test(e.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(e){return{type:"attr",selector:`:root${e},:host${e}`,matched:this.pattern.test(e.trim())}}},media:{pattern:/^@media (.*)$/,resolve(e){return{type:"media",selector:e,matched:this.pattern.test(e.trim())}}},system:{pattern:/^system$/,resolve(e){return{type:"system",selector:"@media (prefers-color-scheme: dark)",matched:this.pattern.test(e.trim())}}},custom:{resolve(e){return{type:"custom",selector:e,matched:!0}}}},resolve(e){let o=Object.keys(this.rules).filter(t=>t!=="custom").map(t=>this.rules[t]);return[e].flat().map(t=>{var n;return(n=o.map(i=>i.resolve(t)).find(i=>i.matched))!=null?n:this.rules.custom.resolve(t)})}},_toVariables(e,o){return Fs(e,{prefix:o?.prefix})},getCommon({name:e="",theme:o={},params:t,set:n,defaults:i}){var r,s,a,l,u,d,c;let{preset:f,options:p}=o,h,b,y,C,E,R,Se;if(L(f)&&p.transform!=="strict"){let{primitive:xe,semantic:Ee,extend:ht}=f,Ke=Ee||{},{colorScheme:gt}=Ke,mt=ve(Ke,["colorScheme"]),bt=ht||{},{colorScheme:yt}=bt,Ye=ve(bt,["colorScheme"]),Ze=gt||{},{dark:Dt}=Ze,vt=ve(Ze,["dark"]),Ct=yt||{},{dark:St}=Ct,Et=ve(Ct,["dark"]),wt=L(xe)?this._toVariables({primitive:xe},p):{},At=L(mt)?this._toVariables({semantic:mt},p):{},_t=L(vt)?this._toVariables({light:vt},p):{},Gn=L(Dt)?this._toVariables({dark:Dt},p):{},Kn=L(Ye)?this._toVariables({semantic:Ye},p):{},Yn=L(Et)?this._toVariables({light:Et},p):{},Zn=L(St)?this._toVariables({dark:St},p):{},[Ko,Yo]=[(r=wt.declarations)!=null?r:"",wt.tokens],[Zo,qo]=[(s=At.declarations)!=null?s:"",At.tokens||[]],[Xo,Qo]=[(a=_t.declarations)!=null?a:"",_t.tokens||[]],[Jo,er]=[(l=Gn.declarations)!=null?l:"",Gn.tokens||[]],[tr,nr]=[(u=Kn.declarations)!=null?u:"",Kn.tokens||[]],[ir,or]=[(d=Yn.declarations)!=null?d:"",Yn.tokens||[]],[rr,sr]=[(c=Zn.declarations)!=null?c:"",Zn.tokens||[]];h=this.transformCSS(e,Ko,"light","variable",p,n,i),b=Yo;let ar=this.transformCSS(e,`${Zo}${Xo}`,"light","variable",p,n,i),lr=this.transformCSS(e,`${Jo}`,"dark","variable",p,n,i);y=`${ar}${lr}`,C=[...new Set([...qo,...Qo,...er])];let ur=this.transformCSS(e,`${tr}${ir}color-scheme:light`,"light","variable",p,n,i),dr=this.transformCSS(e,`${rr}color-scheme:dark`,"dark","variable",p,n,i);E=`${ur}${dr}`,R=[...new Set([...nr,...or,...sr])],Se=Ne(f.css,{dt:Ce})}return{primitive:{css:h,tokens:b},semantic:{css:y,tokens:C},global:{css:E,tokens:R},style:Se}},getPreset({name:e="",preset:o={},options:t,params:n,set:i,defaults:r,selector:s}){var a,l,u;let d,c,f;if(L(o)&&t.transform!=="strict"){let p=e.replace("-directive",""),h=o,{colorScheme:b,extend:y,css:C}=h,E=ve(h,["colorScheme","extend","css"]),R=y||{},{colorScheme:Se}=R,xe=ve(R,["colorScheme"]),Ee=b||{},{dark:ht}=Ee,Ke=ve(Ee,["dark"]),gt=Se||{},{dark:mt}=gt,bt=ve(gt,["dark"]),yt=L(E)?this._toVariables({[p]:fe(fe({},E),xe)},t):{},Ye=L(Ke)?this._toVariables({[p]:fe(fe({},Ke),bt)},t):{},Ze=L(ht)?this._toVariables({[p]:fe(fe({},ht),mt)},t):{},[Dt,vt]=[(a=yt.declarations)!=null?a:"",yt.tokens||[]],[Ct,St]=[(l=Ye.declarations)!=null?l:"",Ye.tokens||[]],[Et,wt]=[(u=Ze.declarations)!=null?u:"",Ze.tokens||[]],At=this.transformCSS(p,`${Dt}${Ct}`,"light","variable",t,i,r,s),_t=this.transformCSS(p,Et,"dark","variable",t,i,r,s);d=`${At}${_t}`,c=[...new Set([...vt,...St,...wt])],f=Ne(C,{dt:Ce})}return{css:d,tokens:c,style:f}},getPresetC({name:e="",theme:o={},params:t,set:n,defaults:i}){var r;let{preset:s,options:a}=o,l=(r=s?.components)==null?void 0:r[e];return this.getPreset({name:e,preset:l,options:a,params:t,set:n,defaults:i})},getPresetD({name:e="",theme:o={},params:t,set:n,defaults:i}){var r,s;let a=e.replace("-directive",""),{preset:l,options:u}=o,d=((r=l?.components)==null?void 0:r[a])||((s=l?.directives)==null?void 0:s[a]);return this.getPreset({name:a,preset:d,options:u,params:t,set:n,defaults:i})},applyDarkColorScheme(e){return!(e.darkModeSelector==="none"||e.darkModeSelector===!1)},getColorSchemeOption(e,o){var t;return this.applyDarkColorScheme(e)?this.regex.resolve(e.darkModeSelector===!0?o.options.darkModeSelector:(t=e.darkModeSelector)!=null?t:o.options.darkModeSelector):[]},getLayerOrder(e,o={},t,n){let{cssLayer:i}=o;return i?`@layer ${Ne(i.order||i.name||"primeui",t)}`:""},getCommonStyleSheet({name:e="",theme:o={},params:t,props:n={},set:i,defaults:r}){let s=this.getCommon({name:e,theme:o,params:t,set:i,defaults:r}),a=Object.entries(n).reduce((l,[u,d])=>l.push(`${u}="${d}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[u,d])=>{if(be(d)&&Object.hasOwn(d,"css")){let c=kn(d.css),f=`${u}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${f}" ${a}>${c}</style>`)}return l},[]).join("")},getStyleSheet({name:e="",theme:o={},params:t,props:n={},set:i,defaults:r}){var s;let a={name:e,theme:o,params:t,set:i,defaults:r},l=(s=e.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,u=Object.entries(n).reduce((d,[c,f])=>d.push(`${c}="${f}"`)&&d,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${e}-variables" ${u}>${kn(l)}</style>`:""},createTokens(e={},o,t="",n="",i={}){let r=function(a,l={},u=[]){if(u.includes(this.path))return console.warn(`Circular reference detected at ${this.path}`),{colorScheme:a,path:this.path,paths:l,value:void 0};u.push(this.path),l.name=this.path,l.binding||(l.binding={});let d=this.value;if(typeof this.value=="string"&&ft.test(this.value)){let c=this.value.trim().replace(ft,f=>{var p;let h=f.slice(1,-1),b=this.tokens[h];if(!b)return console.warn(`Token not found for path: ${h}`),"__UNRESOLVED__";let y=b.computed(a,l,u);return Array.isArray(y)&&y.length===2?`light-dark(${y[0].value},${y[1].value})`:(p=y?.value)!=null?p:"__UNRESOLVED__"});d=Do.test(c.replace(vo,"0"))?`calc(${c})`:c}return pt(l.binding)&&delete l.binding,u.pop(),{colorScheme:a,path:this.path,paths:l,value:d.includes("__UNRESOLVED__")?void 0:d}},s=(a,l,u)=>{Object.entries(a).forEach(([d,c])=>{let f=ce(d,o.variable.excludedKeyRegex)?l:l?`${l}.${mo(d)}`:mo(d),p=u?`${u}.${d}`:d;be(c)?s(c,f,p):(i[f]||(i[f]={paths:[],computed:(h,b={},y=[])=>{if(i[f].paths.length===1)return i[f].paths[0].computed(i[f].paths[0].scheme,b.binding,y);if(h&&h!=="none")for(let C=0;C<i[f].paths.length;C++){let E=i[f].paths[C];if(E.scheme===h)return E.computed(h,b.binding,y)}return i[f].paths.map(C=>C.computed(C.scheme,b[C.scheme],y))}}),i[f].paths.push({path:p,value:c,scheme:p.includes("colorScheme.light")?"light":p.includes("colorScheme.dark")?"dark":"none",computed:r,tokens:i}))})};return s(e,t,n),i},getTokenValue(e,o,t){var n;let i=(a=>a.split(".").filter(l=>!ce(l.toLowerCase(),t.variable.excludedKeyRegex)).join("."))(o),r=o.includes("colorScheme.light")?"light":o.includes("colorScheme.dark")?"dark":void 0,s=[(n=e[i])==null?void 0:n.computed(r)].flat().filter(a=>a);return s.length===1?s[0].value:s.reduce((a={},l)=>{let u=l,{colorScheme:d}=u,c=ve(u,["colorScheme"]);return a[d]=c,a},void 0)},getSelectorRule(e,o,t,n){return t==="class"||t==="attr"?Ve(L(o)?`${e}${o},${e} ${o}`:e,n):Ve(e,Ve(o??":root,:host",n))},transformCSS(e,o,t,n,i={},r,s,a){if(L(o)){let{cssLayer:l}=i;if(n!=="style"){let u=this.getColorSchemeOption(i,s);o=t==="dark"?u.reduce((d,{type:c,selector:f})=>(L(f)&&(d+=f.includes("[CSS]")?f.replace("[CSS]",o):this.getSelectorRule(f,a,c,o)),d),""):Ve(a??":root,:host",o)}if(l){let u={name:"primeui",order:"primeui"};be(l)&&(u.name=Ne(l.name,{name:e,type:n})),L(u.name)&&(o=Ve(`@layer ${u.name}`,o),r?.layerNames(u.name))}return o}return""}},S={defaults:{variable:{prefix:"p",selector:":root,:host",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(e={}){let{theme:o}=e;o&&(this._theme=Bn(fe({},o),{options:fe(fe({},this.defaults.options),o.options)}),this._tokens=pe.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var e;return((e=this.theme)==null?void 0:e.preset)||{}},get options(){var e;return((e=this.theme)==null?void 0:e.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(e){this.update({theme:e}),Q.emit("theme:change",e)},getPreset(){return this.preset},setPreset(e){this._theme=Bn(fe({},this.theme),{preset:e}),this._tokens=pe.createTokens(e,this.defaults),this.clearLoadedStyleNames(),Q.emit("preset:change",e),Q.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(e){this._theme=Bn(fe({},this.theme),{options:e}),this.clearLoadedStyleNames(),Q.emit("options:change",e),Q.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(e){this._layerNames.add(e)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(e){return pe.getTokenValue(this.tokens,e,this.defaults)},getCommon(e="",o){return pe.getCommon({name:e,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(e="",o){let t={name:e,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return pe.getPresetC(t)},getDirective(e="",o){let t={name:e,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return pe.getPresetD(t)},getCustomPreset(e="",o,t,n){let i={name:e,preset:o,options:this.options,selector:t,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return pe.getPreset(i)},getLayerOrderCSS(e=""){return pe.getLayerOrder(e,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(e="",o,t="style",n){return pe.transformCSS(e,o,n,t,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(e="",o,t={}){return pe.getCommonStyleSheet({name:e,theme:this.theme,params:o,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(e,o,t={}){return pe.getStyleSheet({name:e,theme:this.theme,params:o,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(e){this._loadingStyles.add(e)},onStyleUpdated(e){this._loadingStyles.add(e)},onStyleLoaded(e,{name:o}){this._loadingStyles.size&&(this._loadingStyles.delete(o),Q.emit(`theme:${o}:load`,e),!this._loadingStyles.size&&Q.emit("theme:load"))}};var wo=`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    .p-collapsible-enter-active {
        animation: p-animate-collapsible-expand 0.2s ease-out;
        overflow: hidden;
    }

    .p-collapsible-leave-active {
        animation: p-animate-collapsible-collapse 0.2s ease-out;
        overflow: hidden;
    }

    @keyframes p-animate-collapsible-expand {
        from {
            grid-template-rows: 0fr;
        }
        to {
            grid-template-rows: 1fr;
        }
    }

    @keyframes p-animate-collapsible-collapse {
        from {
            grid-template-rows: 1fr;
        }
        to {
            grid-template-rows: 0fr;
        }
    }

    .p-disabled,
    .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-disabled,
    .p-component:disabled {
        opacity: dt('disabled.opacity');
    }

    .pi {
        font-size: dt('icon.size');
    }

    .p-icon {
        width: dt('icon.size');
        height: dt('icon.size');
    }

    .p-overlay-mask {
        background: var(--px-mask-background, dt('mask.background'));
        color: dt('mask.color');
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-overlay-mask-enter-active {
        animation: p-animate-overlay-mask-enter dt('mask.transition.duration') forwards;
    }

    .p-overlay-mask-leave-active {
        animation: p-animate-overlay-mask-leave dt('mask.transition.duration') forwards;
    }

    @keyframes p-animate-overlay-mask-enter {
        from {
            background: transparent;
        }
        to {
            background: var(--px-mask-background, dt('mask.background'));
        }
    }
    @keyframes p-animate-overlay-mask-leave {
        from {
            background: var(--px-mask-background, dt('mask.background'));
        }
        to {
            background: transparent;
        }
    }

    .p-anchored-overlay-enter-active {
        animation: p-animate-anchored-overlay-enter 300ms cubic-bezier(.19,1,.22,1);
    }

    .p-anchored-overlay-leave-active {
        animation: p-animate-anchored-overlay-leave 300ms cubic-bezier(.19,1,.22,1);
    }

    @keyframes p-animate-anchored-overlay-enter {
        from {
            opacity: 0;
            transform: scale(0.93);
        }
    }

    @keyframes p-animate-anchored-overlay-leave {
        to {
            opacity: 0;
            transform: scale(0.93);
        }
    }
`;var Is=0,Ao=(()=>{class e{document=g(H);use(t,n={}){let i=!1,r=t,s=null,{immediate:a=!0,manual:l=!1,name:u=`style_${++Is}`,id:d=void 0,media:c=void 0,nonce:f=void 0,first:p=!1,props:h={}}=n;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${u}"]`)||d&&this.document.getElementById(d)||this.document.createElement("style"),s){if(!s.isConnected){r=t;let b=this.document.head;no(s,"nonce",f),p&&b.firstChild?b.insertBefore(s,b.firstChild):b.appendChild(s),en(s,{type:"text/css",media:c,nonce:f,"data-primeng-style-id":u})}s.textContent!==r&&(s.textContent=r)}return{id:d,name:u,el:s,css:r}}}static \u0275fac=function(n){return new(n||e)};static \u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Ge={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},Ls=`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: dt('scrollbar.width');
}
`,U=(()=>{class e{name="base";useStyle=g(Ao);css=void 0;style=void 0;classes={};inlineStyles={};load=(t,n={},i=r=>r)=>{let r=i(ze`${oe(t,{dt:Ce})}`);return r?this.useStyle.use(Qt(r),m({name:this.name},n)):{}};loadCSS=(t={})=>this.load(this.css,t);loadStyle=(t={},n="")=>this.load(this.style,t,(i="")=>S.transformCSS(t.name||this.name,`${i}${ze`${n}`}`));loadBaseCSS=(t={})=>this.load(Ls,t);loadBaseStyle=(t={},n="")=>this.load(wo,t,(i="")=>S.transformCSS(t.name||this.name,`${i}${ze`${n}`}`));getCommonTheme=t=>S.getCommon(this.name,t);getComponentTheme=t=>S.getComponent(this.name,t);getPresetTheme=(t,n,i)=>S.getCustomPreset(this.name,t,n,i);getLayerOrderThemeCSS=()=>S.getLayerOrderCSS(this.name);getStyleSheet=(t="",n={})=>{if(this.css){let i=oe(this.css,{dt:Ce}),r=Qt(ze`${i}${t}`),s=Object.entries(n).reduce((a,[l,u])=>a.push(`${l}="${u}"`)&&a,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${r}</style>`}return""};getCommonThemeStyleSheet=(t,n={})=>S.getCommonStyleSheet(this.name,t,n);getThemeStyleSheet=(t,n={})=>{let i=[S.getStyleSheet(this.name,t,n)];if(this.style){let r=this.name==="base"?"global-style":`${this.name}-style`,s=ze`${oe(this.style,{dt:Ce})}`,a=Qt(S.transformCSS(r,s)),l=Object.entries(n).reduce((u,[d,c])=>u.push(`${d}="${c}"`)&&u,[]).join(" ");i.push(`<style type="text/css" data-primeng-style-id="${r}" ${l}>${a}</style>`)}return i.join("")};static \u0275fac=function(n){return new(n||e)};static \u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Os=(()=>{class e{theme=k(void 0);csp=k({nonce:void 0});isThemeChanged=!1;document=g(H);baseStyle=g(U);constructor(){ee(()=>{Q.on("theme:change",t=>{pn(()=>{this.isThemeChanged=!0,this.theme.set(t)})})}),ee(()=>{let t=this.theme();this.document&&t&&(this.isThemeChanged||this.onThemeChange(t),this.isThemeChanged=!1)})}ngOnDestroy(){S.clearLoadedStyleNames(),Q.clear()}onThemeChange(t){S.setTheme(t),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!S.isStyleNameLoaded("common")){let{primitive:t,semantic:n,global:i,style:r}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(t?.css,m({name:"primitive-variables"},s)),this.baseStyle.load(n?.css,m({name:"semantic-variables"},s)),this.baseStyle.load(i?.css,m({name:"global-variables"},s)),this.baseStyle.loadBaseStyle(m({name:"global-style"},s),r),S.setLoadedStyleName("common")}}setThemeConfig(t){let{theme:n,csp:i}=t||{};n&&this.theme.set(n),i&&this.csp.set(i)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Hn=(()=>{class e extends Os{ripple=k(!1);platformId=g(je);inputStyle=k(null);inputVariant=k(null);overlayAppendTo=k("self");overlayOptions={};csp=k({nonce:void 0});unstyled=k(void 0);pt=k(void 0);ptOptions=k(void 0);filterMatchModeOptions={text:[x.STARTS_WITH,x.CONTAINS,x.NOT_CONTAINS,x.ENDS_WITH,x.EQUALS,x.NOT_EQUALS],numeric:[x.EQUALS,x.NOT_EQUALS,x.LESS_THAN,x.LESS_THAN_OR_EQUAL_TO,x.GREATER_THAN,x.GREATER_THAN_OR_EQUAL_TO],date:[x.DATE_IS,x.DATE_IS_NOT,x.DATE_BEFORE,x.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",completed:"Completed",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize",minimizeLabel:"Minimize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new se;translationObserver=this.translationSource.asObservable();getTranslation(t){return this.translation[t]}setTranslation(t){this.translation=m(m({},this.translation),t),this.translationSource.next(this.translation)}setConfig(t){let{csp:n,ripple:i,inputStyle:r,inputVariant:s,theme:a,overlayOptions:l,translation:u,filterMatchModeOptions:d,overlayAppendTo:c,zIndex:f,ptOptions:p,pt:h,unstyled:b}=t||{};n&&this.csp.set(n),c&&this.overlayAppendTo.set(c),i&&this.ripple.set(i),r&&this.inputStyle.set(r),s&&this.inputVariant.set(s),l&&(this.overlayOptions=l),u&&this.setTranslation(u),d&&(this.filterMatchModeOptions=d),f&&(this.zIndex=f),h&&this.pt.set(h),p&&this.ptOptions.set(p),b&&this.unstyled.set(b),a&&this.setThemeConfig({theme:a,csp:n})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=A(e)))(i||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Ps=new O("PRIME_NG_CONFIG");function dd(...e){let o=e?.map(n=>({provide:Ps,useValue:n,multi:!1})),t=ei(()=>{let n=g(Hn);e?.forEach(i=>n.setConfig(i))});return Xn([...o,t])}var _o=(()=>{class e extends U{name="common";static \u0275fac=(()=>{let t;return function(i){return(t||(t=A(e)))(i||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),$e=new O("PARENT_INSTANCE"),re=(()=>{class e{document=g(H);platformId=g(je);el=g(he);injector=g(qe);cd=g(Mt);renderer=g(we);config=g(Hn);$parentInstance=g($e,{optional:!0,skipSelf:!0})??void 0;baseComponentStyle=g(_o);baseStyle=g(U);scopedStyleEl;parent=this.$params.parent;cn=Fe;_themeScopedListener;themeChangeListenerMap=new Map;dt=B();unstyled=B();pt=B();ptOptions=B();$attrSelector=ct("pc");get $name(){return this.componentName||"UnknownComponent"}get $hostName(){return this.hostName}get $el(){return this.el?.nativeElement}directivePT=k(void 0);directiveUnstyled=k(void 0);$unstyled=Te(()=>this.unstyled()??this.directiveUnstyled()??this.config?.unstyled()??!1);$pt=Te(()=>oe(this.pt()||this.directivePT(),this.$params));get $globalPT(){return this._getPT(this.config?.pt(),void 0,t=>oe(t,this.$params))}get $defaultPT(){return this._getPT(this.config?.pt(),void 0,t=>this._getOptionValue(t,this.$hostName||this.$name,this.$params)||oe(t,this.$params))}get $style(){return m(m({theme:void 0,css:void 0,classes:void 0,inlineStyles:void 0},(this._getHostInstance(this)||{}).$style),this._componentStyle)}get $styleOptions(){return{nonce:this.config?.csp().nonce}}get $params(){let t=this._getHostInstance(this)||this.$parentInstance;return{instance:this,parent:{instance:t}}}onInit(){}onChanges(t){}onDoCheck(){}onAfterContentInit(){}onAfterContentChecked(){}onAfterViewInit(){}onAfterViewChecked(){}onDestroy(){}constructor(){ee(t=>{this.document&&!Fn(this.platformId)&&(this.dt()?(this._loadScopedThemeStyles(this.dt()),this._themeScopedListener=()=>this._loadScopedThemeStyles(this.dt()),this._themeChangeListener("_themeScopedListener",this._themeScopedListener)):this._unloadScopedThemeStyles()),t(()=>{this._offThemeChangeListener("_themeScopedListener")})}),ee(t=>{this.document&&!Fn(this.platformId)&&(this.$unstyled()||(this._loadCoreStyles(),this._themeChangeListener("_loadCoreStyles",this._loadCoreStyles))),t(()=>{this._offThemeChangeListener("_loadCoreStyles")})}),this._hook("onBeforeInit")}ngOnInit(){this._loadCoreStyles(),this._loadStyles(),this.onInit(),this._hook("onInit")}ngOnChanges(t){this.onChanges(t),this._hook("onChanges",t)}ngDoCheck(){this.onDoCheck(),this._hook("onDoCheck")}ngAfterContentInit(){this.onAfterContentInit(),this._hook("onAfterContentInit")}ngAfterContentChecked(){this.onAfterContentChecked(),this._hook("onAfterContentChecked")}ngAfterViewInit(){this.$el?.setAttribute(this.$attrSelector,""),this.onAfterViewInit(),this._hook("onAfterViewInit")}ngAfterViewChecked(){this.onAfterViewChecked(),this._hook("onAfterViewChecked")}ngOnDestroy(){this._removeThemeListeners(),this._unloadScopedThemeStyles(),this.onDestroy(),this._hook("onDestroy")}_mergeProps(t,...n){return Xt(t)?t(...n):Mn(...n)}_getHostInstance(t){return t?this.$hostName?this.$name===this.$hostName?t:this._getHostInstance(t.$parentInstance):t.$parentInstance:void 0}_getPropValue(t){return this[t]||this._getHostInstance(this)?.[t]}_getOptionValue(t,n="",i={}){return On(t,n,i)}_hook(t,...n){if(!this.$hostName){let i=this._usePT(this._getPT(this.$pt(),this.$name),this._getOptionValue,`hooks.${t}`),r=this._useDefaultPT(this._getOptionValue,`hooks.${t}`);i?.(...n),r?.(...n)}}_load(){Ge.isStyleNameLoaded("base")||(this.baseStyle.loadBaseCSS(this.$styleOptions),this._loadGlobalStyles(),Ge.setLoadedStyleName("base")),this._loadThemeStyles()}_loadStyles(){this._load(),this._themeChangeListener("_load",()=>this._load())}_loadGlobalStyles(){let t=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);Le(t)&&this.baseStyle.load(t,m({name:"global"},this.$styleOptions))}_loadCoreStyles(){!Ge.isStyleNameLoaded(this.$style?.name)&&this.$style?.name&&(this.baseComponentStyle.loadCSS(this.$styleOptions),this.$style.loadCSS(this.$styleOptions),Ge.setLoadedStyleName(this.$style.name))}_loadThemeStyles(){if(!(this.$unstyled()||this.config?.theme()==="none")){if(!S.isStyleNameLoaded("common")){let{primitive:t,semantic:n,global:i,style:r}=this.$style?.getCommonTheme?.()||{};this.baseStyle.load(t?.css,m({name:"primitive-variables"},this.$styleOptions)),this.baseStyle.load(n?.css,m({name:"semantic-variables"},this.$styleOptions)),this.baseStyle.load(i?.css,m({name:"global-variables"},this.$styleOptions)),this.baseStyle.loadBaseStyle(m({name:"global-style"},this.$styleOptions),r),S.setLoadedStyleName("common")}if(!S.isStyleNameLoaded(this.$style?.name)&&this.$style?.name){let{css:t,style:n}=this.$style?.getComponentTheme?.()||{};this.$style?.load(t,m({name:`${this.$style?.name}-variables`},this.$styleOptions)),this.$style?.loadStyle(m({name:`${this.$style?.name}-style`},this.$styleOptions),n),S.setLoadedStyleName(this.$style?.name)}if(!S.isStyleNameLoaded("layer-order")){let t=this.$style?.getLayerOrderThemeCSS?.();this.baseStyle.load(t,m({name:"layer-order",first:!0},this.$styleOptions)),S.setLoadedStyleName("layer-order")}}}_loadScopedThemeStyles(t){let{css:n}=this.$style?.getPresetTheme?.(t,`[${this.$attrSelector}]`)||{},i=this.$style?.load(n,m({name:`${this.$attrSelector}-${this.$style?.name}`},this.$styleOptions));this.scopedStyleEl=i?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(t,n=()=>{}){this._offThemeChangeListener(t),Ge.clearLoadedStyleNames();let i=n.bind(this);this.themeChangeListenerMap.set(t,i),Q.on("theme:change",i)}_removeThemeListeners(){this._offThemeChangeListener("_themeScopedListener"),this._offThemeChangeListener("_loadCoreStyles"),this._offThemeChangeListener("_load")}_offThemeChangeListener(t){this.themeChangeListenerMap.has(t)&&(Q.off("theme:change",this.themeChangeListenerMap.get(t)),this.themeChangeListenerMap.delete(t))}_getPTValue(t={},n="",i={},r=!0){let s=/./g.test(n)&&!!i[n.split(".")[0]],{mergeSections:a=!0,mergeProps:l=!1}=this._getPropValue("ptOptions")?.()||this.config?.ptOptions?.()||{},u=r?s?this._useGlobalPT(this._getPTClassValue,n,i):this._useDefaultPT(this._getPTClassValue,n,i):void 0,d=s?void 0:this._usePT(this._getPT(t,this.$hostName||this.$name),this._getPTClassValue,n,Re(m({},i),{global:u||{}})),c=this._getPTDatasets(n);return a||!a&&d?l?this._mergeProps(l,u,d,c):m(m(m({},u),d),c):m(m({},d),c)}_getPTDatasets(t=""){let n="data-pc-",i=t==="root"&&Le(this.$pt()?.["data-pc-section"]);return t!=="transition"&&Re(m({},t==="root"&&Re(m({[`${n}name`]:Ie(i?this.$pt()?.["data-pc-section"]:this.$name)},i&&{[`${n}extend`]:Ie(this.$name)}),{[`${this.$attrSelector}`]:""})),{[`${n}section`]:Ie(t.includes(".")?t.split(".").at(-1)??"":t)})}_getPTClassValue(t,n,i){let r=this._getOptionValue(t,n,i);return lt(r)||zi(r)?{class:r}:r}_getPT(t,n="",i){let r=(s,a=!1)=>{let l=i?i(s):s,u=Ie(n),d=Ie(this.$hostName||this.$name);return(a?u!==d?l?.[u]:void 0:l?.[u])??l};return t?.hasOwnProperty("_usept")?{_usept:t._usept,originalValue:r(t.originalValue),value:r(t.value)}:r(t,!0)}_usePT(t,n,i,r){let s=a=>n?.call(this,a,i,r);if(t?.hasOwnProperty("_usept")){let{mergeSections:a=!0,mergeProps:l=!1}=t._usept||this.config?.ptOptions()||{},u=s(t.originalValue),d=s(t.value);return u===void 0&&d===void 0?void 0:lt(d)?d:lt(u)?u:a||!a&&d?l?this._mergeProps(l,u,d):m(m({},u),d):d}return s(t)}_useGlobalPT(t,n,i){return this._usePT(this.$globalPT,t,n,i)}_useDefaultPT(t,n,i){return this._usePT(this.$defaultPT,t,n,i)}ptm(t="",n={}){return this._getPTValue(this.$pt(),t,m(m({},this.$params),n))}ptms(t,n={}){return t.reduce((i,r)=>(i=Mn(i,this.ptm(r,n))||{},i),{})}ptmo(t={},n="",i={}){return this._getPTValue(t,n,m({instance:this},i),!1)}cx(t,n={}){return this.$unstyled()?void 0:Fe(this._getOptionValue(this.$style.classes,t,m(m({},this.$params),n)))}sx(t="",n=!0,i={}){if(n){let r=this._getOptionValue(this.$style.inlineStyles,t,m(m({},this.$params),i)),s=this._getOptionValue(this.baseComponentStyle.inlineStyles,t,m(m({},this.$params),i));return m(m({},s),r)}}static \u0275fac=function(n){return new(n||e)};static \u0275dir=P({type:e,inputs:{dt:[1,"dt"],unstyled:[1,"unstyled"],pt:[1,"pt"],ptOptions:[1,"ptOptions"]},features:[ne([_o,U]),It]})}return e})();var J=(()=>{class e{el;renderer;pBind=B(void 0);_attrs=k(void 0);attrs=Te(()=>this._attrs()||this.pBind());styles=Te(()=>this.attrs()?.style);classes=Te(()=>Fe(this.attrs()?.class));listeners=[];constructor(t,n){this.el=t,this.renderer=n,ee(()=>{let a=this.attrs()||{},{style:i,class:r}=a,s=qn(a,["style","class"]);for(let[l,u]of Object.entries(s))if(l.startsWith("on")&&typeof u=="function"){let d=l.slice(2).toLowerCase();if(!this.listeners.some(c=>c.eventName===d)){let c=this.renderer.listen(this.el.nativeElement,d,u);this.listeners.push({eventName:d,unlisten:c})}}else u==null?this.renderer.removeAttribute(this.el.nativeElement,l):(this.renderer.setAttribute(this.el.nativeElement,l,u.toString()),l in this.el.nativeElement&&(this.el.nativeElement[l]=u))})}ngOnDestroy(){this.clearListeners()}setAttrs(t){at(this._attrs(),t)||this._attrs.set(t)}clearListeners(){this.listeners.forEach(({unlisten:t})=>t()),this.listeners=[]}static \u0275fac=function(n){return new(n||e)(_(he),_(we))};static \u0275dir=P({type:e,selectors:[["","pBind",""]],hostVars:4,hostBindings:function(n,i){n&2&&(si(i.styles()),Z(i.classes()))},inputs:{pBind:[1,"pBind"]}})}return e})(),To=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=G({type:e});static \u0275inj=z({})}return e})();var Ns=["*"],xs={root:"p-fluid"},Fo=(()=>{class e extends U{name="fluid";classes=xs;static \u0275fac=(()=>{let t;return function(i){return(t||(t=A(e)))(i||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac})}return e})();var Io=new O("FLUID_INSTANCE"),Lo=(()=>{class e extends re{componentName="Fluid";$pcFluid=g(Io,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(J,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=g(Fo);static \u0275fac=(()=>{let t;return function(i){return(t||(t=A(e)))(i||e)}})();static \u0275cmp=te({type:e,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,i){n&2&&Z(i.cx("root"))},features:[ne([Fo,{provide:Io,useExisting:e},{provide:$e,useExisting:e}]),Ue([J]),K],ngContentSelectors:Ns,decls:1,vars:0,template:function(n,i){n&1&&(Ae(),_e(0))},dependencies:[me],encapsulation:2,changeDetection:0})}return e})();var Vn=(()=>{class e{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,n){t&&n&&(t.classList?t.classList.add(n):t.className+=" "+n)}static addMultipleClasses(t,n){if(t&&n)if(t.classList){let i=n.trim().split(" ");for(let r=0;r<i.length;r++)t.classList.add(i[r])}else{let i=n.split(" ");for(let r=0;r<i.length;r++)t.className+=" "+i[r]}}static removeClass(t,n){t&&n&&(t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,n){t&&n&&[n].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(r=>this.removeClass(t,r)))}static hasClass(t,n){return t&&n?t.classList?t.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(n){return n!==t})}static find(t,n){return Array.from(t.querySelectorAll(n))}static findSingle(t,n){return this.isElement(t)?t.querySelector(n):null}static index(t){let n=t.parentNode.childNodes,i=0;for(var r=0;r<n.length;r++){if(n[r]==t)return i;n[r].nodeType==1&&i++}return-1}static indexWithinGroup(t,n){let i=t.parentNode?t.parentNode.childNodes:[],r=0;for(var s=0;s<i.length;s++){if(i[s]==t)return r;i[s].attributes&&i[s].attributes[n]&&i[s].nodeType==1&&r++}return-1}static appendOverlay(t,n,i="self"){i!=="self"&&t&&n&&this.appendChild(t,n)}static alignOverlay(t,n,i="self",r=!0){t&&n&&(r&&(t.style.minWidth=`${e.getOuterWidth(n)}px`),i==="self"?this.relativePosition(t,n):this.absolutePosition(t,n))}static relativePosition(t,n,i=!0){let r=R=>{if(R)return getComputedStyle(R).getPropertyValue("position")==="relative"?R:r(R.parentElement)},s=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),a=n.offsetHeight,l=n.getBoundingClientRect(),u=this.getWindowScrollTop(),d=this.getWindowScrollLeft(),c=this.getViewport(),p=r(t)?.getBoundingClientRect()||{top:-1*u,left:-1*d},h,b,y="top";l.top+a+s.height>c.height?(h=l.top-p.top-s.height,y="bottom",l.top+h<0&&(h=-1*l.top)):(h=a+l.top-p.top,y="top");let C=l.left+s.width-c.width,E=l.left-p.left;if(s.width>c.width?b=(l.left-p.left)*-1:C>0?b=E-C:b=l.left-p.left,t.style.top=h+"px",t.style.left=b+"px",t.style.transformOrigin=y,i){let R=dt(/-anchor-gutter$/)?.value;t.style.marginTop=y==="bottom"?`calc(${R??"2px"} * -1)`:R??""}}static absolutePosition(t,n,i=!0){let r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),s=r.height,a=r.width,l=n.offsetHeight,u=n.offsetWidth,d=n.getBoundingClientRect(),c=this.getWindowScrollTop(),f=this.getWindowScrollLeft(),p=this.getViewport(),h,b;d.top+l+s>p.height?(h=d.top+c-s,t.style.transformOrigin="bottom",h<0&&(h=c)):(h=l+d.top+c,t.style.transformOrigin="top"),d.left+a>p.width?b=Math.max(0,d.left+f+u-a):b=d.left+f,t.style.top=h+"px",t.style.left=b+"px",i&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,n=[]){return t.parentNode===null?n:this.getParents(t.parentNode,n.concat([t.parentNode]))}static getScrollableParents(t){let n=[];if(t){let i=this.getParents(t),r=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let a of i){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let u=l.split(",");for(let d of u){let c=this.findSingle(a,d);c&&s(c)&&n.push(c)}}a.nodeType!==9&&s(a)&&n.push(a)}}return n}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementDimensions(t){let n={};return t.style.visibility="hidden",t.style.display="block",n.width=t.offsetWidth,n.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",n}static scrollInView(t,n){let i=getComputedStyle(t).getPropertyValue("borderTopWidth"),r=i?parseFloat(i):0,s=getComputedStyle(t).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=t.getBoundingClientRect(),d=n.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-a,c=t.scrollTop,f=t.clientHeight,p=this.getOuterHeight(n);d<0?t.scrollTop=c+d:d+p>f&&(t.scrollTop=c+d-f+p)}static fadeIn(t,n){t.style.opacity=0;let i=+new Date,r=0,s=function(){r=+t.style.opacity.replace(",",".")+(new Date().getTime()-i)/n,t.style.opacity=r,i=+new Date,+r<1&&(window.requestAnimationFrame?window.requestAnimationFrame(s):setTimeout(s,16))};s()}static fadeOut(t,n){var i=1,r=50,s=n,a=r/s;let l=setInterval(()=>{i=i-a,i<=0&&(i=0,clearInterval(l)),t.style.opacity=i},r)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,n){var i=Element.prototype,r=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(t,n)}static getOuterWidth(t,n){let i=t.offsetWidth;if(n){let r=getComputedStyle(t);i+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return i}static getHorizontalPadding(t){let n=getComputedStyle(t);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(t){let n=getComputedStyle(t);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(t){let n=t.offsetWidth,i=getComputedStyle(t);return n+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static width(t){let n=t.offsetWidth,i=getComputedStyle(t);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static getInnerHeight(t){let n=t.offsetHeight,i=getComputedStyle(t);return n+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),n}static getOuterHeight(t,n){let i=t.offsetHeight;if(n){let r=getComputedStyle(t);i+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return i}static getHeight(t){let n=t.offsetHeight,i=getComputedStyle(t);return n-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),n}static getWidth(t){let n=t.offsetWidth,i=getComputedStyle(t);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),n}static getViewport(){let t=window,n=document,i=n.documentElement,r=n.getElementsByTagName("body")[0],s=t.innerWidth||i.clientWidth||r.clientWidth,a=t.innerHeight||i.clientHeight||r.clientHeight;return{width:s,height:a}}static getOffset(t){var n=t.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,n){let i=t.parentNode;if(!i)throw"Can't replace element";return i.replaceChild(n,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,n=t.indexOf("MSIE ");if(n>0)return!0;var i=t.indexOf("Trident/");if(i>0){var r=t.indexOf("rv:");return!0}var s=t.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,n){if(this.isElement(n))n.appendChild(t);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(t);else throw"Cannot append "+n+" to "+t}static removeChild(t,n){if(this.isElement(n))n.removeChild(t);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+n}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode?.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let n=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let i=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=i,i}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let n=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(t,n,i){t[n].apply(t,i)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,n){t&&document.activeElement!==t&&t.focus(n)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,n=""){let i=this.find(t,this.getFocusableSelectorString(n)),r=[];for(let s of i){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(t,n=""){let i=this.findSingle(t,this.getFocusableSelectorString(n));if(i){let r=getComputedStyle(i);if(this.isVisible(i)&&r.display!="none"&&r.visibility!="hidden")return i}return null}static getFirstFocusableElement(t,n=""){let i=this.getFocusableElements(t,n);return i.length>0?i[0]:null}static getLastFocusableElement(t,n){let i=this.getFocusableElements(t,n);return i.length>0?i[i.length-1]:null}static getNextFocusableElement(t,n=!1){let i=e.getFocusableElements(t),r=0;if(i&&i.length>0){let s=i.indexOf(i[0].ownerDocument.activeElement);n?s==-1||s===0?r=i.length-1:r=s-1:s!=-1&&s!==i.length-1&&(r=s+1)}return i[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,n){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement?.parentElement;default:let i=typeof t;if(i==="string")return document.querySelector(t);if(i==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(t)?t():t;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,n){if(t){let i=t.getAttribute(n);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,n={},...i){if(t){let r=document.createElement(t);return this.setAttributes(r,n),r.append(...i),r}}static setAttribute(t,n="",i){this.isElement(t)&&i!==null&&i!==void 0&&t.setAttribute(n,i)}static setAttributes(t,n={}){if(this.isElement(t)){let i=(r,s)=>{let a=t?.$attrs?.[r]?[t?.$attrs?.[r]]:[];return[s].flat().reduce((l,u)=>{if(u!=null){let d=typeof u;if(d==="string"||d==="number")l.push(u);else if(d==="object"){let c=Array.isArray(u)?i(r,u):Object.entries(u).map(([f,p])=>r==="style"&&(p||p===0)?`${f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${p}`:p?f:void 0);l=c.length?l.concat(c.filter(f=>!!f)):l}}return l},a)};Object.entries(n).forEach(([r,s])=>{if(s!=null){let a=r.match(/^on(.+)/);a?t.addEventListener(a[1].toLowerCase(),s):r==="pBind"?this.setAttributes(t,s):(s=r==="class"?[...new Set(i("class",s))].join(" ").trim():r==="style"?i("style",s).join(";").trim():s,(t.$attrs=t.$attrs||{})&&(t.$attrs[r]=s),t.setAttribute(r,s))}})}}static isFocusableElement(t,n=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return e})();function Wd(){Ki({variableName:Un("scrollbar.width").name})}function Vd(){Yi({variableName:Un("scrollbar.width").name})}var Oo=class{element;listener;scrollableParents;constructor(o,t=()=>{}){this.element=o,this.listener=t}bindScrollListener(){this.scrollableParents=Vn.getScrollableParents(this.element);for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var Po=(()=>{class e extends re{autofocus=!1;focused=!1;platformId=g(je);document=g(H);host=g(he);onAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){st(this.platformId)&&this.autofocus&&setTimeout(()=>{let t=Vn.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=A(e)))(i||e)}})();static \u0275dir=P({type:e,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[K]})}return e})();var No=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var Rs=`
    ${No}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,Ms={root:({instance:e})=>{let o=typeof e.value=="function"?e.value():e.value,t=typeof e.size=="function"?e.size():e.size,n=typeof e.badgeSize=="function"?e.badgeSize():e.badgeSize,i=typeof e.severity=="function"?e.severity():e.severity;return["p-badge p-component",{"p-badge-circle":Le(o)&&String(o).length===1,"p-badge-dot":Ln(o),"p-badge-sm":t==="small"||n==="small","p-badge-lg":t==="large"||n==="large","p-badge-xl":t==="xlarge"||n==="xlarge","p-badge-info":i==="info","p-badge-success":i==="success","p-badge-warn":i==="warn","p-badge-danger":i==="danger","p-badge-secondary":i==="secondary","p-badge-contrast":i==="contrast"}]}},xo=(()=>{class e extends U{name="badge";style=Rs;classes=Ms;static \u0275fac=(()=>{let t;return function(i){return(t||(t=A(e)))(i||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac})}return e})();var Ro=new O("BADGE_INSTANCE");var zn=(()=>{class e extends re{componentName="Badge";$pcBadge=g(Ro,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(J,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass=B();badgeSize=B();size=B();severity=B();value=B();badgeDisabled=B(!1,{transform:$});_componentStyle=g(xo);get dataP(){return this.cn({circle:this.value()!=null&&String(this.value()).length===1,empty:this.value()==null,disabled:this.badgeDisabled(),[this.severity()]:this.severity(),[this.size()]:this.size()})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=A(e)))(i||e)}})();static \u0275cmp=te({type:e,selectors:[["p-badge"]],hostVars:5,hostBindings:function(n,i){n&2&&(ge("data-p",i.dataP),Z(i.cn(i.cx("root"),i.styleClass())),ri("display",i.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[ne([xo,{provide:Ro,useExisting:e},{provide:$e,useExisting:e}]),Ue([J]),K],decls:1,vars:1,template:function(n,i){n&1&&Nt(0),n&2&&xt(i.value())},dependencies:[me,Pe,To],encapsulation:2,changeDetection:0})}return e})(),Mo=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=G({type:e});static \u0275inj=z({imports:[zn,Pe,Pe]})}return e})();var Bs=["*"],$s=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    flex-shrink: 0;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,ko=(()=>{class e extends U{name="baseicon";css=$s;static \u0275fac=(()=>{let t;return function(i){return(t||(t=A(e)))(i||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Bo=(()=>{class e extends re{spin=!1;_componentStyle=g(ko);getClassNames(){return Fe("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=A(e)))(i||e)}})();static \u0275cmp=te({type:e,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(n,i){n&2&&Z(i.getClassNames())},inputs:{spin:[2,"spin","spin",$]},features:[ne([ko]),K],ngContentSelectors:Bs,decls:1,vars:0,template:function(n,i){n&1&&(Ae(),_e(0))},encapsulation:2,changeDetection:0})}return e})();var js=["data-p-icon","spinner"],$o=(()=>{class e extends Bo{pathId;onInit(){this.pathId="url(#"+ct()+")"}static \u0275fac=(()=>{let t;return function(i){return(t||(t=A(e)))(i||e)}})();static \u0275cmp=te({type:e,selectors:[["","data-p-icon","spinner"]],features:[K],attrs:js,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(Tt(),ln(0,"g"),dn(1,"path",0),un(),ln(2,"defs")(3,"clipPath",1),dn(4,"rect",2),un()()),n&2&&(ge("clip-path",i.pathId),W(3),ni("id",i.pathId))},encapsulation:2})}return e})();var jo=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var Us=`
    ${jo}

    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,Hs={root:"p-ink"},Uo=(()=>{class e extends U{name="ripple";style=Us;classes=Hs;static \u0275fac=(()=>{let t;return function(i){return(t||(t=A(e)))(i||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac})}return e})();var Ho=(()=>{class e extends re{componentName="Ripple";zone=g(Qn);_componentStyle=g(Uo);animationListener;mouseDownListener;timeout;constructor(){super(),ee(()=>{st(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(t){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(!this.$unstyled()&&Oe(n,"p-ink-active"),n.setAttribute("data-p-ink-active","false"),!Nn(n)&&!Rn(n)){let a=Math.max(Xi(this.el.nativeElement),xn(this.el.nativeElement));n.style.height=a+"px",n.style.width=a+"px"}let i=eo(this.el.nativeElement),r=t.pageX-i.left+this.document.body.scrollTop-Rn(n)/2,s=t.pageY-i.top+this.document.body.scrollLeft-Nn(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",r+"px"),!this.$unstyled()&&ut(n,"p-ink-active"),n.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&(!this.$unstyled()&&Oe(a,"p-ink-active"),a.setAttribute("data-p-ink-active","false"))},401)}getInk(){let t=this.el.nativeElement.children;for(let n=0;n<t.length;n++)if(typeof t[n].className=="string"&&t[n].className.indexOf("p-ink")!==-1)return t[n];return null}resetInk(){let t=this.getInk();t&&(!this.$unstyled()&&Oe(t,"p-ink-active"),t.setAttribute("data-p-ink-active","false"))}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),!this.$unstyled()&&Oe(t.currentTarget,"p-ink-active"),t.currentTarget.setAttribute("data-p-ink-active","false")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"data-p-ink","true"),this.renderer.setAttribute(t,"data-p-ink-active","false"),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,to(t))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static \u0275fac=function(n){return new(n||e)};static \u0275dir=P({type:e,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[ne([Uo]),K]})}return e})(),$c=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=G({type:e});static \u0275inj=z({})}return e})();var Wo=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\xA0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var Ws=["content"],Vs=["loadingicon"],zs=["icon"],Gs=["*"],Go=(e,o)=>({class:e,pt:o});function Ks(e,o){e&1&&ti(0)}function Ys(e,o){if(e&1&&Je(0,"span",7),e&2){let t=ae(3);Z(t.cn(t.cx("loadingIcon"),"pi-spin",t.loadingIcon||(t.buttonProps==null?null:t.buttonProps.loadingIcon))),F("pBind",t.ptm("loadingIcon")),ge("aria-hidden",!0)}}function Zs(e,o){if(e&1&&(Tt(),Je(0,"svg",8)),e&2){let t=ae(3);Z(t.cn(t.cx("loadingIcon"),t.cx("spinnerIcon"))),F("pBind",t.ptm("loadingIcon"))("spin",!0),ge("aria-hidden",!0)}}function qs(e,o){if(e&1&&(Ot(0),Me(1,Ys,1,4,"span",3)(2,Zs,1,5,"svg",6),Pt()),e&2){let t=ae(2);W(),F("ngIf",t.loadingIcon||(t.buttonProps==null?null:t.buttonProps.loadingIcon)),W(),F("ngIf",!(t.loadingIcon||t.buttonProps!=null&&t.buttonProps.loadingIcon))}}function Xs(e,o){}function Qs(e,o){if(e&1&&Me(0,Xs,0,0,"ng-template",9),e&2){let t=ae(2);F("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function Js(e,o){if(e&1&&(Ot(0),Me(1,qs,3,2,"ng-container",2)(2,Qs,1,1,null,5),Pt()),e&2){let t=ae();W(),F("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),W(),F("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",cn(3,Go,t.cx("loadingIcon"),t.ptm("loadingIcon")))}}function ea(e,o){if(e&1&&Je(0,"span",7),e&2){let t=ae(2);Z(t.cn(t.cx("icon"),t.icon||(t.buttonProps==null?null:t.buttonProps.icon))),F("pBind",t.ptm("icon")),ge("data-p",t.dataIconP)}}function ta(e,o){}function na(e,o){if(e&1&&Me(0,ta,0,0,"ng-template",9),e&2){let t=ae(2);F("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function ia(e,o){if(e&1&&(Ot(0),Me(1,ea,1,4,"span",3)(2,na,1,1,null,5),Pt()),e&2){let t=ae();W(),F("ngIf",(t.icon||(t.buttonProps==null?null:t.buttonProps.icon))&&!t.iconTemplate&&!t._iconTemplate),W(),F("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",cn(3,Go,t.cx("icon"),t.ptm("icon")))}}function oa(e,o){if(e&1&&(sn(0,"span",7),Nt(1),an()),e&2){let t=ae();Z(t.cx("label")),F("pBind",t.ptm("label")),ge("aria-hidden",(t.icon||(t.buttonProps==null?null:t.buttonProps.icon))&&!(t.label||t.buttonProps!=null&&t.buttonProps.label))("data-p",t.dataLabelP),W(),xt(t.label||(t.buttonProps==null?null:t.buttonProps.label))}}function ra(e,o){if(e&1&&Je(0,"p-badge",10),e&2){let t=ae();F("value",t.badge||(t.buttonProps==null?null:t.buttonProps.badge))("severity",t.badgeSeverity||(t.buttonProps==null?null:t.buttonProps.badgeSeverity))("pt",t.ptm("pcBadge"))("unstyled",t.unstyled())}}var sa={root:({instance:e})=>["p-button p-component",{"p-button-icon-only":e.hasIcon&&!e.label&&!e.buttonProps?.label&&!e.badge,"p-button-vertical":(e.iconPos==="top"||e.iconPos==="bottom")&&e.label,"p-button-loading":e.loading||e.buttonProps?.loading,"p-button-link":e.link||e.buttonProps?.link,[`p-button-${e.severity||e.buttonProps?.severity}`]:e.severity||e.buttonProps?.severity,"p-button-raised":e.raised||e.buttonProps?.raised,"p-button-rounded":e.rounded||e.buttonProps?.rounded,"p-button-text":e.text||e.variant==="text"||e.buttonProps?.text||e.buttonProps?.variant==="text","p-button-outlined":e.outlined||e.variant==="outlined"||e.buttonProps?.outlined||e.buttonProps?.variant==="outlined","p-button-sm":e.size==="small"||e.buttonProps?.size==="small","p-button-lg":e.size==="large"||e.buttonProps?.size==="large","p-button-plain":e.plain||e.buttonProps?.plain,"p-button-fluid":e.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:e})=>["p-button-icon",{[`p-button-icon-${e.iconPos||e.buttonProps?.iconPos}`]:e.label||e.buttonProps?.label,"p-button-icon-left":(e.iconPos==="left"||e.buttonProps?.iconPos==="left")&&e.label||e.buttonProps?.label,"p-button-icon-right":(e.iconPos==="right"||e.buttonProps?.iconPos==="right")&&e.label||e.buttonProps?.label,"p-button-icon-top":(e.iconPos==="top"||e.buttonProps?.iconPos==="top")&&e.label||e.buttonProps?.label,"p-button-icon-bottom":(e.iconPos==="bottom"||e.buttonProps?.iconPos==="bottom")&&e.label||e.buttonProps?.label},e.icon,e.buttonProps?.icon],spinnerIcon:({instance:e})=>Object.entries(e.cx("icon")).filter(([,o])=>!!o).reduce((o,[t])=>o+` ${t}`,"p-button-loading-icon"),label:"p-button-label"},Vo=(()=>{class e extends U{name="button";style=Wo;classes=sa;static \u0275fac=(()=>{let t;return function(i){return(t||(t=A(e)))(i||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac})}return e})();var zo=new O("BUTTON_INSTANCE");var aa=(()=>{class e extends re{componentName="Button";hostName="";$pcButton=g(zo,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(J,{self:!0});_componentStyle=g(Vo);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}type="button";badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;iconPos="left";icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=B(void 0,{transform:$});onClick=new Ft;onFocus=new Ft;onBlur=new Ft;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=g(Lo,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}get hasIcon(){return this.icon||this.buttonProps?.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"loadingicon":this._loadingIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}get dataP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge,loading:this.loading,fluid:this.hasFluid,rounded:this.rounded,raised:this.raised,outlined:this.outlined||this.variant==="outlined",text:this.text||this.variant==="text",link:this.link,vertical:(this.iconPos==="top"||this.iconPos==="bottom")&&this.label})}get dataIconP(){return this.cn({[this.iconPos]:this.iconPos,[this.size]:this.size})}get dataLabelP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=A(e)))(i||e)}})();static \u0275cmp=te({type:e,selectors:[["p-button"]],contentQueries:function(n,i,r){if(n&1&&oi(r,Ws,5)(r,Vs,5)(r,zs,5)(r,ao,4),n&2){let s;et(s=tt())&&(i.contentTemplate=s.first),et(s=tt())&&(i.loadingIconTemplate=s.first),et(s=tt())&&(i.iconTemplate=s.first),et(s=tt())&&(i.templates=s)}},inputs:{hostName:"hostName",type:"type",badge:"badge",disabled:[2,"disabled","disabled",$],raised:[2,"raised","raised",$],rounded:[2,"rounded","rounded",$],text:[2,"text","text",$],plain:[2,"plain","plain",$],outlined:[2,"outlined","outlined",$],link:[2,"link","link",$],tabindex:[2,"tabindex","tabindex",fn],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",$],iconPos:"iconPos",icon:"icon",label:"label",loading:[2,"loading","loading",$],loadingIcon:"loadingIcon",severity:"severity",buttonProps:"buttonProps",fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[ne([Vo,{provide:zo,useExisting:e},{provide:$e,useExisting:e}]),Ue([J]),K],ngContentSelectors:Gs,decls:7,vars:17,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus","pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"value","severity","pt","unstyled",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","pBind","spin",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","spin"],[3,"ngIf"],[3,"value","severity","pt","unstyled"]],template:function(n,i){n&1&&(Ae(),sn(0,"button",0),ii("click",function(s){return i.onClick.emit(s)})("focus",function(s){return i.onFocus.emit(s)})("blur",function(s){return i.onBlur.emit(s)}),_e(1),Me(2,Ks,1,0,"ng-container",1)(3,Js,3,6,"ng-container",2)(4,ia,3,6,"ng-container",2)(5,oa,2,6,"span",3)(6,ra,1,4,"p-badge",4),an()),n&2&&(Z(i.cn(i.cx("root"),i.styleClass,i.buttonProps==null?null:i.buttonProps.styleClass)),F("ngStyle",i.style||(i.buttonProps==null?null:i.buttonProps.style))("disabled",i.disabled||i.loading||(i.buttonProps==null?null:i.buttonProps.disabled))("pAutoFocus",i.autofocus||(i.buttonProps==null?null:i.buttonProps.autofocus))("pBind",i.ptm("root")),ge("type",i.type||(i.buttonProps==null?null:i.buttonProps.type))("aria-label",i.ariaLabel||(i.buttonProps==null?null:i.buttonProps.ariaLabel))("tabindex",i.tabindex||(i.buttonProps==null?null:i.buttonProps.tabindex))("data-p",i.dataP)("data-p-disabled",i.disabled||i.loading||(i.buttonProps==null?null:i.buttonProps.disabled))("data-p-severity",i.severity||(i.buttonProps==null?null:i.buttonProps.severity)),W(2),F("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),W(),F("ngIf",i.loading||(i.buttonProps==null?null:i.buttonProps.loading)),W(),F("ngIf",!(i.loading||i.buttonProps!=null&&i.buttonProps.loading)),W(),F("ngIf",!i.contentTemplate&&!i._contentTemplate&&(i.label||(i.buttonProps==null?null:i.buttonProps.label))),W(),F("ngIf",!i.contentTemplate&&!i._contentTemplate&&(i.badge||(i.buttonProps==null?null:i.buttonProps.badge))))},dependencies:[me,Sn,wn,En,Ho,Po,$o,Mo,zn,Pe,J],encapsulation:2,changeDetection:0})}return e})(),hp=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=G({type:e});static \u0275inj=z({imports:[me,aa,Pe,Pe]})}return e})();export{kt as a,cr as b,hn as c,pr as d,We as e,hi as f,gi as g,mr as h,$r as i,ji as j,Sn as k,En as l,wn as m,Ur as n,Hr as o,Wr as p,Vr as q,me as r,zr as s,_n as t,Kr as u,st as v,Ll as w,Ln as x,Xr as y,Le as z,qt as A,at as B,Bl as C,$l as D,jl as E,Ul as F,Gi as G,ut as H,Oe as I,qi as J,es as K,ts as L,ns as M,Wl as N,Vl as O,Xi as P,zl as Q,os as R,Kl as S,rs as T,Yl as U,ss as V,Zl as W,ql as X,Xl as Y,Ji as Z,Ql as _,Nn as $,Jl as aa,eu as ba,eo as ca,xn as da,tu as ea,Rn as fa,nu as ga,iu as ha,ou as ia,ru as ja,su as ka,au as la,lu as ma,no as na,ct as oa,fs as pa,gu as qa,x as ra,mu as sa,bu as ta,yu as ua,Du as va,vu as wa,ao as xa,Pe as ya,Cu as za,Eu as Aa,_u as Ba,Tu as Ca,Fu as Da,Iu as Ea,Lu as Fa,Ru as Ga,Un as Ha,U as Ia,dd as Ja,$e as Ka,re as La,J as Ma,To as Na,Lo as Oa,Vn as Pa,Wd as Qa,Vd as Ra,Oo as Sa,Po as Ta,Bo as Ua,$o as Va,zn as Wa,Mo as Xa,Ho as Ya,$c as Za,aa as _a,hp as $a};
