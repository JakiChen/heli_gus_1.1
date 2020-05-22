var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("easing.Back",["easing.Ease"],function(Ease){var SteppedEase,RoughEase,_createElastic,w=_gsScope.GreenSockGlobals||_gsScope,gs=w.com.greensock,_2PI=2*Math.PI,_HALF_PI=Math.PI/2,_class=gs._class,_create=function(n,f){var C=_class("easing."+n,function(){},!0),p=C.prototype=new Ease;return p.constructor=C,p.getRatio=f,C},_easeReg=Ease.register||function(){},_wrap=function(name,EaseOut,EaseIn,EaseInOut){var C=_class("easing."+name,{easeOut:new EaseOut,easeIn:new EaseIn,easeInOut:new EaseInOut},!0);return _easeReg(C,name),C},EasePoint=function(time,value,next){this.t=time,this.v=value,next&&(this.next=next,next.prev=this,this.c=next.v-value,this.gap=next.t-time)},_createBack=function(n,f){var C=_class("easing."+n,function(overshoot){this._p1=overshoot||0===overshoot?overshoot:1.70158,this._p2=1.525*this._p1},!0),p=C.prototype=new Ease;return p.constructor=C,p.getRatio=f,p.config=function(overshoot){return new C(overshoot)},C},Back=_wrap("Back",_createBack("BackOut",function(p){return(p-=1)*p*((this._p1+1)*p+this._p1)+1}),_createBack("BackIn",function(p){return p*p*((this._p1+1)*p-this._p1)}),_createBack("BackInOut",function(p){return(p*=2)<1?.5*p*p*((this._p2+1)*p-this._p2):.5*((p-=2)*p*((this._p2+1)*p+this._p2)+2)})),SlowMo=_class("easing.SlowMo",function(linearRatio,power,yoyoMode){power=power||0===power?power:.7,null==linearRatio?linearRatio=.7:linearRatio>1&&(linearRatio=1),this._p=1!==linearRatio?power:0,this._p1=(1-linearRatio)/2,this._p2=linearRatio,this._p3=this._p1+this._p2,this._calcEnd=yoyoMode===!0},!0),p=SlowMo.prototype=new Ease;return p.constructor=SlowMo,p.getRatio=function(p){var r=p+(.5-p)*this._p;return p<this._p1?this._calcEnd?1-(p=1-p/this._p1)*p:r-(p=1-p/this._p1)*p*p*p*r:p>this._p3?this._calcEnd?1-(p=(p-this._p3)/this._p1)*p:r+(p-r)*(p=(p-this._p3)/this._p1)*p*p*p:this._calcEnd?1:r},SlowMo.ease=new SlowMo(.7,.7),p.config=SlowMo.config=function(linearRatio,power,yoyoMode){return new SlowMo(linearRatio,power,yoyoMode)},SteppedEase=_class("easing.SteppedEase",function(steps){steps=steps||1,this._p1=1/steps,this._p2=steps+1},!0),p=SteppedEase.prototype=new Ease,p.constructor=SteppedEase,p.getRatio=function(p){return 0>p?p=0:p>=1&&(p=.999999999),(this._p2*p>>0)*this._p1},p.config=SteppedEase.config=function(steps){return new SteppedEase(steps)},RoughEase=_class("easing.RoughEase",function(vars){vars=vars||{};for(var x,y,bump,invX,obj,pnt,taper=vars.taper||"none",a=[],cnt=0,points=0|(vars.points||20),i=points,randomize=vars.randomize!==!1,clamp=vars.clamp===!0,template=vars.template instanceof Ease?vars.template:null,strength="number"==typeof vars.strength?.4*vars.strength:.4;--i>-1;)x=randomize?Math.random():1/points*i,y=template?template.getRatio(x):x,"none"===taper?bump=strength:"out"===taper?(invX=1-x,bump=invX*invX*strength):"in"===taper?bump=x*x*strength:.5>x?(invX=2*x,bump=invX*invX*.5*strength):(invX=2*(1-x),bump=invX*invX*.5*strength),randomize?y+=Math.random()*bump-.5*bump:i%2?y+=.5*bump:y-=.5*bump,clamp&&(y>1?y=1:0>y&&(y=0)),a[cnt++]={x:x,y:y};for(a.sort(function(a,b){return a.x-b.x}),pnt=new EasePoint(1,1,null),i=points;--i>-1;)obj=a[i],pnt=new EasePoint(obj.x,obj.y,pnt);this._prev=new EasePoint(0,0,0!==pnt.t?pnt:pnt.next)},!0),p=RoughEase.prototype=new Ease,p.constructor=RoughEase,p.getRatio=function(p){var pnt=this._prev;if(p>pnt.t){for(;pnt.next&&p>=pnt.t;)pnt=pnt.next;pnt=pnt.prev}else for(;pnt.prev&&p<=pnt.t;)pnt=pnt.prev;return this._prev=pnt,pnt.v+(p-pnt.t)/pnt.gap*pnt.c},p.config=function(vars){return new RoughEase(vars)},RoughEase.ease=new RoughEase,_wrap("Bounce",_create("BounceOut",function(p){return 1/2.75>p?7.5625*p*p:2/2.75>p?7.5625*(p-=1.5/2.75)*p+.75:2.5/2.75>p?7.5625*(p-=2.25/2.75)*p+.9375:7.5625*(p-=2.625/2.75)*p+.984375}),_create("BounceIn",function(p){return(p=1-p)<1/2.75?1-7.5625*p*p:2/2.75>p?1-(7.5625*(p-=1.5/2.75)*p+.75):2.5/2.75>p?1-(7.5625*(p-=2.25/2.75)*p+.9375):1-(7.5625*(p-=2.625/2.75)*p+.984375)}),_create("BounceInOut",function(p){var invert=.5>p;return p=invert?1-2*p:2*p-1,p=1/2.75>p?7.5625*p*p:2/2.75>p?7.5625*(p-=1.5/2.75)*p+.75:2.5/2.75>p?7.5625*(p-=2.25/2.75)*p+.9375:7.5625*(p-=2.625/2.75)*p+.984375,invert?.5*(1-p):.5*p+.5})),_wrap("Circ",_create("CircOut",function(p){return Math.sqrt(1-(p-=1)*p)}),_create("CircIn",function(p){return-(Math.sqrt(1-p*p)-1)}),_create("CircInOut",function(p){return(p*=2)<1?-.5*(Math.sqrt(1-p*p)-1):.5*(Math.sqrt(1-(p-=2)*p)+1)})),_createElastic=function(n,f,def){var C=_class("easing."+n,function(amplitude,period){this._p1=amplitude>=1?amplitude:1,this._p2=(period||def)/(1>amplitude?amplitude:1),this._p3=this._p2/_2PI*(Math.asin(1/this._p1)||0),this._p2=_2PI/this._p2},!0),p=C.prototype=new Ease;return p.constructor=C,p.getRatio=f,p.config=function(amplitude,period){return new C(amplitude,period)},C},_wrap("Elastic",_createElastic("ElasticOut",function(p){return this._p1*Math.pow(2,-10*p)*Math.sin((p-this._p3)*this._p2)+1},.3),_createElastic("ElasticIn",function(p){return-(this._p1*Math.pow(2,10*(p-=1))*Math.sin((p-this._p3)*this._p2))},.3),_createElastic("ElasticInOut",function(p){return(p*=2)<1?-.5*this._p1*Math.pow(2,10*(p-=1))*Math.sin((p-this._p3)*this._p2):this._p1*Math.pow(2,-10*(p-=1))*Math.sin((p-this._p3)*this._p2)*.5+1},.45)),_wrap("Expo",_create("ExpoOut",function(p){return 1-Math.pow(2,-10*p)}),_create("ExpoIn",function(p){return Math.pow(2,10*(p-1))-.001}),_create("ExpoInOut",function(p){return(p*=2)<1?.5*Math.pow(2,10*(p-1)):.5*(2-Math.pow(2,-10*(p-1)))})),_wrap("Sine",_create("SineOut",function(p){return Math.sin(p*_HALF_PI)}),_create("SineIn",function(p){return-Math.cos(p*_HALF_PI)+1}),_create("SineInOut",function(p){return-.5*(Math.cos(Math.PI*p)-1)})),_class("easing.EaseLookup",{find:function(s){return Ease.map[s]}},!0),_easeReg(w.SlowMo,"SlowMo","ease,"),_easeReg(RoughEase,"RoughEase","ease,"),_easeReg(SteppedEase,"SteppedEase","ease,"),Back},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(){"use strict";var getGlobal=function(){return _gsScope.GreenSockGlobals||_gsScope};"function"==typeof define&&define.amd?define(["TweenLite"],getGlobal):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),module.exports=getGlobal())}();