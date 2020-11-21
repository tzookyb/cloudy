(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{108:function(e,t,c){},109:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(0),r=c.n(a),s=c(35),i=c.n(s),o=c(18),l=c(4),j=c(6),u=c(11),d=c.n(u),b=c(13),h=c(36),x=c.n(h),m="cd3c450c9fe64efe8c8114500201911",f="http://api.weatherapi.com/v1",O={getLocation:function(e){return p.apply(this,arguments)},getSuggestions:function(e){return g.apply(this,arguments)},getForecast:function(e){return v.apply(this,arguments)}};function p(){return(p=Object(b.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=4;break}return e.abrupt("return");case 4:t="".concat(t.lat,",").concat(t.lng);case 5:return e.next=7,w("search",t);case 7:return c=(c=e.sent)[0].name,e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,w("search",t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(b.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return c="".concat(t.lat,",").concat(t.lng,"&days=3"),e.next=5,w("forecast",c);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,t){return N.apply(this,arguments)}function N(){return(N=Object(b.a)(d.a.mark((function e(t,c){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("".concat(f,"/").concat(t,".json?key=").concat(m,"&q=").concat(c));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.error("Had trouble getting to: ".concat(t,",\nwith query: ").concat(c)),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var y=Object(j.e)({isMetric:!0,locationMode:null,weatherMode:null,locationCoords:null,weatherInfo:null});window.store=y,Object(j.c)((function(){y.locationCoords&&O.getForecast(y.locationCoords).then((function(e){console.log("res",e),Object(j.f)((function(){return y.weatherInfo=e}))}))}));var k=c(10),C=c(112),_=c(111),M=Object(_.a)((function(){var e=Object(a.useContext)(U);return Object(n.jsx)("div",{onClick:function(){Object(j.f)((function(){return e.isMetric=!e.isMetric}))},children:e.isMetric?"Celsius":"Fahrenheit"})}));function F(){var e=Object(a.useState)(!1),t=Object(k.a)(e,2),r=t[0],s=t[1],i=Object(l.g)(),o=function(e){r&&s(!1),console.log("routeTo -> history",i),i.push(e)};return Object(n.jsxs)("header",{className:"main-container ".concat(r?"open":""),children:[Object(n.jsxs)("div",{className:"flex align-center space-between",children:[Object(n.jsxs)("div",{className:"flex gap5 align-center",children:[Object(n.jsx)("img",{src:c(71).default,alt:"logo",className:"logo"}),Object(n.jsx)("h1",{children:"Weather-App"})]}),Object(n.jsxs)("nav",{className:"flex align-center",children:[Object(n.jsx)(M,{}),Object(n.jsxs)("ul",{className:"clean-list flex align-center",children:[Object(n.jsx)("li",{onClick:function(){return o("/about")},children:"About"}),Object(n.jsx)("li",{onClick:function(){return o("/weather")},children:"Weather"})]})]}),Object(n.jsx)(C.a,{className:"hamburger",toggled:r,toggle:function(){return s(!r)},rounded:!0})]}),Object(n.jsx)("div",{onClick:function(){return s(!1)},className:"screen ".concat(r?"open":"")})]})}var I=c(38),S=c.n(I),L=function(){var e=r.a.useRef(null);Object(a.useEffect)((function(){return m(),e.current=setInterval((function(){m()}),1e3),function(){clearInterval(e.current)}}),[]);var t=Object(a.useState)(""),c=Object(k.a)(t,2),s=c[0],i=c[1],o=Object(a.useState)(""),l=Object(k.a)(o,2),j=l[0],u=l[1],d=Object(a.useState)(""),b=Object(k.a)(d,2),h=b[0],x=b[1],m=function(){var e=S()(),t=e.hour();x(t>=5&&t<12?"Good Morning!":t>=12&&t<18?"Good Afternoon!":t>=18&&t<24?"Good Evening!":"Good Night!"),i(e.format("dddd D/M/YYYY")),u(e.format("HH:mm:ss"))};return Object(n.jsx)("section",{className:"main-container",children:Object(n.jsxs)("div",{className:"time flex space-between",children:[Object(n.jsx)("div",{className:"flex column space-between",children:Object(n.jsx)("h3",{children:h})}),Object(n.jsxs)("div",{className:"flex column flex-end gap10",children:[Object(n.jsxs)("h4",{children:["Today is ",s]}),Object(n.jsxs)("div",{className:"clock flex space-between",children:[Object(n.jsx)("h4",{children:"The time now is: "}),Object(n.jsx)("h4",{children:j})]})]})]})})},T=c.p+"static/media/react-original.7098e271.svg",P=c.p+"static/media/mobx.b2519d0d.svg",W=c.p+"static/media/sass-original.8ec16938.svg";function A(){return Object(n.jsx)("section",{className:"main-container",children:Object(n.jsxs)("div",{className:"about flex column",children:[Object(n.jsx)("h1",{children:"About"}),Object(n.jsx)("p",{children:"This is a weather app I created."}),Object(n.jsx)("p",{children:"It's main features are:"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"Finding out your location"}),Object(n.jsx)("li",{children:"Searching for other locations"}),Object(n.jsx)("li",{children:"Getting weather forecast using weatherapi.com"})]}),Object(n.jsx)("h4",{children:"This app has been coded using these technologies:"}),Object(n.jsxs)("div",{className:"tech-grid",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{alt:"react",src:T}),"React.js"]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{alt:"mobx",src:P}),"MobX"]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{alt:"sass",src:W}),"Sass"]})]})]})})}var G=Object(_.a)((function(){var e=Object(a.useContext)(U),t=Object(j.b)((function(t){e.weatherInfo=null,e.locationMode=t}));return Object(n.jsx)("div",{className:"flex gap10",children:[{mode:"my-location",txt:"My Location"},{mode:"places",txt:"Other Places"}].map((function(c,a){return Object(n.jsx)("button",{className:"mode-btn ".concat(e.locationMode===c.mode?"location-mode-active":""),onClick:function(){return t(c.mode)},children:c.txt},a)}))})})),E=c(39),H=c.n(E),R=function(e){var t=e.places,c=e.pickLocation,s=e.searchTerm,i=e.setSearchTerm,o=Object(a.useContext)(U),l=Object(j.b)((function(e){c(e.name);var t={lat:e.lat,lng:e.lon};o.locationCoords=t}));return!t.length&&s?Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)("h3",{className:"no-results flex justify-center",children:"No results found..."}),Object(n.jsx)("button",{onClick:function(){return i("")},children:"Clear search"})]}):Object(n.jsx)("ul",{className:"suggest-list clean-list",children:t.map((function(e,t){return Object(n.jsx)("li",{className:"suggest cursor-pointer",onClick:function(){return l(e)},children:e.name},t)}))})},Y=c(40),B=Object(_.a)((function(){var e=Object(a.useContext)(U),t=e.locationMode,c=Object(a.useState)(""),r=Object(k.a)(c,2),s=r[0],i=r[1],o=Object(a.useState)(!1),l=Object(k.a)(o,2),u=l[0],h=l[1],x=Object(a.useState)([]),m=Object(k.a)(x,2),f=m[0],p=m[1],g=Object(a.useRef)(null),v="my-location"===t;Object(a.useEffect)((function(){w(null),i(""),h(!1),v&&(navigator.geolocation?navigator.geolocation.getCurrentPosition((function(t){var c={lat:t.coords.latitude,lng:t.coords.longitude};O.getLocation(c).then((function(e){return i(e)})),Object(j.f)((function(){return e.locationCoords=c}))}),function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:1===t.code&&alert('Allow Location discovery to use "My Location" feature');case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()):alert("Geolocation is not supported by this browser"))}),[t]);var w=Object(a.useRef)(H.a.debounce((function(e){e&&O.getSuggestions(e).then((function(e){p(e),h(!1)}))}),1500)).current;return Object(n.jsxs)("div",{children:[Object(n.jsx)("input",{ref:g,className:"location",type:"search",value:s,placeholder:v?"Getting your location...":"Search for Location",onChange:function(e){return t=e.target.value,i(t),h(!0),w(t),void(t||h(!1));var t},disabled:v}),Object(n.jsx)("div",{children:!v&&u?Object(n.jsx)(Y.WindMillLoading,{size:"large",className:"loading"}):Object(n.jsx)(R,{searchTerm:s,pickLocation:function(e){p([]),i(e)},places:f})})]})}));function D(e){var t=e.current,c=e.location,a=e.isMetric,r=c.localtime.split(" ").splice(1,1)[0],s=t.last_updated;s=(s=s.split(" "))[1]+" "+s[0].split("-").reverse().join("/");var i=a?t.temp_c:t.temp_f,o=a?t.feelslike_c:t.feelslike_f,l=a?"".concat(t.precip_mm,"mm"):"".concat(t.precip_in,"in."),j="".concat(t.wind_dir," ").concat(a?t.wind_kph:t.wind_mph," ").concat(a?"kph":"mph");return Object(n.jsxs)("article",{className:"current",children:[Object(n.jsx)("h3",{children:"Current Weather:"}),Object(n.jsxs)("div",{className:"local-time",children:["Local time: ",r]}),Object(n.jsxs)("small",{className:"last-update",children:["Forecast last updated at: ",s]}),Object(n.jsxs)("div",{className:"condition",children:[t.condition.text,Object(n.jsx)("img",{src:t.condition.icon,alt:"condition"})]}),Object(n.jsxs)("div",{className:"temp",children:["Temperature: ",i,"\xb0",a?"C":"F"]}),Object(n.jsxs)("div",{className:"feels",children:["Feels Like: ",o,"\xb0",a?"C":"F"]}),Object(n.jsxs)("div",{className:"extra-info",children:[Object(n.jsxs)("div",{className:"precip",children:["Precipitation: ",l]}),Object(n.jsxs)("div",{className:"humidity",children:["Humidity: ",t.humidity,"%"]}),Object(n.jsxs)("div",{className:"wind",children:["Wind: ",j]})]})]})}function q(e){var t=e.isMetric,c=e.forecast.forecastday;return Object(n.jsxs)("article",{className:"forecast",children:[Object(n.jsx)("h2",{children:"3 Day Forecast:"}),c.map((function(e){var c=e.day,a=e.date.split("-").reverse().join("/"),r=t?"".concat(c.mintemp_c," - ").concat(c.maxtemp_c,"\xb0C"):"".concat(c.mintemp_f," - ").concat(c.maxtemp_f,"\xb0F"),s=t?c.maxwind_kph+" kph":c.maxwind_mph+" mph";return Object(n.jsxs)("div",{className:"forecast-day",children:[Object(n.jsx)("div",{className:"date",children:a}),Object(n.jsxs)("div",{className:"condition",children:[c.condition.text,Object(n.jsx)("div",{className:"icon",children:Object(n.jsx)("img",{src:c.condition.icon,alt:"condition"})})]}),Object(n.jsxs)("div",{className:"temp",children:["Temperatures: ",r]}),Object(n.jsxs)("div",{className:"rain",children:[c.daily_chance_of_rain,"%"]}),Object(n.jsxs)("div",{className:"snow",children:[c.daily_chance_of_snow,"%"]}),Object(n.jsxs)("div",{className:"wind",children:["Max wind: ",s]})]},e.date)}))]})}var z=Object(_.a)((function(){var e=Object(a.useContext)(U),t=e.weatherInfo,c=e.isMetric,r=t.current,s=t.forecast,i=t.location;return Object(n.jsxs)("section",{children:[Object(n.jsx)(D,{location:i,current:r,isMetric:c}),Object(n.jsx)(q,{forecast:s,isMetric:c})]})})),J=Object(_.a)((function(){var e=Object(a.useContext)(U);return Object(n.jsxs)("section",{className:"weather flex column align-center flex-1",children:[Object(n.jsx)(G,{}),Object(n.jsx)(B,{}),e.weatherInfo&&Object(n.jsx)(z,{})]})})),X=c.p+"static/media/github-original.fad4b944.svg",K=c.p+"static/media/linkedin-original.6494960c.svg";function Q(){return Object(n.jsxs)("footer",{className:"flex align-center space-between",children:[Object(n.jsxs)("div",{className:"flex align-center gap5",children:[Object(n.jsx)("a",{href:"https://www.weatherapi.com/",title:"Free Weather API",children:Object(n.jsx)("img",{src:"//cdn.weatherapi.com/v4/images/weatherapi_logo.png",alt:"Weather data by WeatherAPI.com",border:"0"})}),Object(n.jsxs)("div",{className:"powered-by",children:["Powered by ",Object(n.jsx)("a",{href:"https://www.weatherapi.com/",title:"Weather API",children:"WeatherAPI.com"})]})]}),Object(n.jsxs)("div",{className:"copyright flex flex-end gap10",children:[Object(n.jsx)("a",{href:"https://github.com/tzookyb",children:Object(n.jsx)("img",{className:"social",src:X,title:"to my github profile",alt:"github"})}),Object(n.jsx)("a",{href:"https://www.linkedin.com/in/idanbenjamin",children:Object(n.jsx)("img",{className:"social",src:K,title:"to my linkedin profile",alt:"linkedin"})}),Object(n.jsxs)("small",{children:["\xa9 2020",Object(n.jsx)("br",{})," Idan Benjamin"]})]})]})}var U=r.a.createContext(),V=function(e){var t=e.children;return Object(n.jsx)(U.Provider,{value:y,children:t})};function Z(){return Object(n.jsx)(V,{children:Object(n.jsxs)("div",{className:"app flex column",children:[Object(n.jsx)(F,{}),Object(n.jsxs)("main",{children:[Object(n.jsx)(L,{}),Object(n.jsxs)(l.d,{children:[Object(n.jsx)(l.b,{exact:!0,path:"/",children:Object(n.jsx)(l.a,{to:"/about"})}),Object(n.jsx)(l.b,{component:A,path:"/about"}),Object(n.jsx)(l.b,{component:J,path:"/weather"})]})]}),Object(n.jsx)(Q,{})]})})}c(108);var $=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,113)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};console.clear(),i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(o.a,{children:Object(n.jsx)(Z,{})})}),document.getElementById("root")),$()},71:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/logo.e50c6087.png"}},[[109,1,2]]]);
//# sourceMappingURL=main.40fc7d18.chunk.js.map