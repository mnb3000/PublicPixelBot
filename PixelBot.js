// ==UserScript==
// @name         Pixel Bot
// @namespace    http://tampermonkey.net/
// @version      0.66
// @description  try to take over the world!
// @author       Flyink13, DarkKeks
// @match        https://pixel.vkforms.ru/*
// @downloadURL  https://rawgit.com/DarkKeks/PublicPixelBot/master/PixelBot.js
// @updateURL    https://rawgit.com/DarkKeks/PublicPixelBot/master/PixelBot.js
// @grant        none
// ==/UserScript==

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('6 3(){13.3=3;3.X=1E;3.1n="1z(0, 0, 0)";3.1f={f:6(){h\'1o://1J.1m/1W/1G/1F/3.22\'+\'?v=\'+U.17()},1L:6(){h\'1o://1J.1m/1W/1G/1F/29.2b\'+\'?v=\'+U.17()}};3.n=7.11("1V");3.n.1O=3.C;3.n.2l="Загрузка приложения...";1P.1M(3.n.1e,{o:"1y(0,0,0,0.5)",2e:"M",2f:"M",1q:"B%",1A:"B%",2c:"28",2a:"2g",e:"#1a",1x:"1w",1k:T});7.Z.F(3.n);3.m=7.11("1V");3.m.1O=3.C;1P.1M(3.m.1e,{o:"1y(0,0,0,0)",2h:"M",2o:"M",1q:"27",1A:"B%",e:"#1a",1x:"1w",2i:"2j 2k #1a",2p:"1X",26:"24",1k:1Y});7.Z.F(3.m);3.u=6(x){3.m.1g+=x+"<25>";3.m.23(0,T)};3.k=6(s){3.n.1g="3 "+s;3.u(s)};3.1i=6(){3.G=16 1Z();3.G.20="21";3.G.2n=6(){3.k("перезагрузил зону защиты.");a(3.Y)3.1h()};3.G.1C=(2u(\'2N=\')||3.1f.1L())};3.l=6(14,q){a(!3.g)h;a(14=="1b"){3.g.1H(16 2O("1b",q))}d{3.g.1H(16 2P(14,q))}};3.1K=6(x,y,e){3.18();a(x>w){3.R(w,0);x=x-w}d{3.R(0,0)}b q={1D:N,1U:N,O:1,J:x,I:y+1,2M:x,2L:y+1};b z=3.p(3.Q.D(x,y+1,1,1).8,0);b 1d=7.j(\'[1e="o-e: \'+e+\';"]\');a(!1d){W.u("e 2R %c "+e,\'o:\'+e+\';\');3.k("ошибка подбора цвета "+e);h}d a(z==e){W.u("== "+x+"x"+y+"%c "+z,\'o:\'+z+\';\');3.k("пропускаю "+(x+1)+"x"+(y+1)+" совпал цвет");h}d{W.u(x+"x"+y+"%c "+z+" > %c "+e,\'o:\'+z+\';\',\'o:\'+e+\';\');3.k("поставил точку "+(x+1)+"x"+(y+1))}1d.A();3.l("1u",q);3.l("A",q);q.O=0;3.l("1v",q);7.j(".2Q O").A()};3.1N=6(){b E=3.H.2U();a(!E){3.k("точек нет")}d{3.1K(E[0],E[1],E[2])}};3.1c=6(x,y){b q={1D:N,1U:N,O:1,J:0,I:0};3.l("1u",q);q.I=y;q.J=x;3.l("2T",q);3.l("1v",q)};3.R=6(x,y){3.1c(T,T);3.1c(-2I-x,-2G-y)};3.D=6(){b 8=3.Q.D(0,1,w,2w).8;h 8};3.p=6(8,i){h"1z("+8[i]+", "+8[i+1]+", "+8[i+2]+")"};3.1h=6(){3.H=[];3.H=3.1S(3.1r(0));3.k("осталось точек:"+3.H.S);h 3.H.S};3.1r=6(V){3.18();3.R(V,0);b L=3.D();3.Q.2x(3.G,-V,0);b K=3.D();b 8=[];2v(b i=0;i<L.S;i+=4){b x=V+(i/4)%w,y=~~((i/4)/w);a(3.p(L,i)!==3.p(K,i)&&3.p(K,i)!==3.1n){8.2H([x,y,3.p(K,i),3.p(L,i)])}}h 8};3.1S=6(8){b r=8.S,15,P;2s(0!==r){P=U.2t(U.17()*r);r-=1;15=8[r];8[r]=8[P];8[P]=15}h 8};3.18=6(){3.l("1b",{2E:2F,2D:0,J:B,I:B,})};3.1R=6(){3.Y=1;3.1h();3.k("запущен.")};3.1Q=2A(6(){a(7.j(".1j.1B")){7.j(".1j.1B").A()}d a(7.j(".1s")){7.j(".1s").A()}d a(!3.Y&&3.g){3.Q=3.g.2B("2d");3.1R()}d a(3.g&&7.j(".1p")){b t=7.j(".1p").1g;a(1I(t.1t(9,2))==1||1I(t.1t(12,2))>10){2C.C()}d{3.2z=1}}d a(!3.g){3.g=7.j("g")}d a(!3.X){3.C();3.X=1E}d a(3.Y&&3.g){3.X--;3.1N()}},2y);3.C=6(){3.n.1T="";3.m.1T="";2r(3.1Q);b f=7.11(\'f\');f.1C=3.1f.f();7.Z.F(f)};3.1i();W.u("3 19")}a(13.19){3()}d{b 1l=6(){13.19=1;b f=7.11(\'f\');f.F(7.2S(\'(\'+3+\')();\'));(7.Z||7.2q||7.2K).F(f)};13.2J("2m",6(){1l()})}',62,181,'|||PixelBot|||function|document|data||if|var||else|color|script|canvas|return||querySelector|setState|canvasEvent|loger|state|background|getColor||currentIndex|||log||795|||pxColor|click|100|reload|getImageData|px|appendChild|img|pixs|clientY|clientX|id2|id1|0px|true|button|randomIndex|ctx|canvasMoveTo|length|10000|Math|offsetX|console|pts|inited|body||createElement||window|type|temporaryValue|new|random|resetZoom|loaded|fff|mousewheel|canvasMove|colorEl|style|url|innerHTML|getFullData|reloadImage|Button|zIndex|inject|com|tc|https|Ttl__wait|width|getData|Header__close|substr|mousedown|mouseup|fixed|position|rgba|rgb|height|primary|src|bubbles|30|master|PublicPixelBot|dispatchEvent|parseInt|rawgit|canvasClick|image|assign|draw|onclick|Object|wait|init|randomShuffle|outerHTML|cancelable|div|DarkKeks|11px|10001|Image|crossOrigin|Anonymous|js|scrollTo|12px|br|padding|250px|500px|TJ|textAlign|png|lineHeight||bottom|right|center|top|borderRight|1px|solid|textContent|load|onload|left|fontSize|head|clearInterval|while|floor|atob|for|400|drawImage|1000|timer|setInterval|getContext|location|deltaX|deltaY|100000|149|push|40|addEventListener|documentElement|layerY|layerX|aHR0cHM6Ly9yYXdnaXQuY29tL0RhcmtLZWtzL1B1YmxpY1BpeGVsQm90L21hc3Rlci9USi5wbmc|WheelEvent|MouseEvent|App__confirm|error|createTextNode|mousemove|shift'.split('|'),0,{}))
