(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{154:function(e,t,a){e.exports=a.p+"static/media/clouds.addeb6e9.ico"},155:function(e,t,a){e.exports=a.p+"static/media/rain.89ba78d1.ico"},156:function(e,t,a){"use strict";a.r(t);var i=a(0),o=a.n(i),r=a(44),n=a.n(r),s=(a(56),a(45)),l=a(46),c=a(49),d=a(47),p=a(5),h=a(50),m=(a(57),a(10)),u=a.n(m),b=(a(58),a(17)),g="6c1ce666f73cd6af767b3161e69090cd",y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).onMapClick=a.onMapClick.bind(Object(p.a)(a)),a.getWeather=a.getWeather.bind(Object(p.a)(a)),a.getLocation=a.getLocation.bind(Object(p.a)(a)),a.state={data:[],weatherDescription:[],weatherDescriptionTime:[],options1:{title:{display:!0,text:"Temp and Rain",fontSize:20},tooltips:{mode:"label"},scales:{xAxes:[{scaleLabel:{display:!0,labelString:"Date and Time"}}],yAxes:[{scaleLabel:{display:!0,labelString:"Temperature(K)"},type:"linear",display:!0,position:"left",id:"y-axis-1",gridLines:{display:!1},labels:{show:!0}},{scaleLabel:{display:!0,labelString:"Rain(mm)"},type:"linear",display:!0,position:"right",id:"y-axis-2",gridLines:{display:!1}}]}},options2:{title:{display:!0,text:"Pressure and Humidity",fontSize:20},tooltips:{mode:"label"},scales:{xAxes:[{scaleLabel:{display:!0,labelString:"Date and Time"}}],yAxes:[{scaleLabel:{display:!0,labelString:"Pressure(hPa)"},type:"linear",display:!0,position:"left",id:"y-axis-1",gridLines:{display:!1},labels:{show:!0}},{scaleLabel:{display:!0,labelString:"Humidity(%)"},type:"linear",display:!0,position:"right",id:"y-axis-2",gridLines:{display:!1}}]}},options3:{title:{display:!0,text:"Wind Speed and direction",fontSize:20},tooltips:{mode:"label"},scales:{xAxes:[{scaleLabel:{display:!0,labelString:"Date and Time"}}],yAxes:[{scaleLabel:{display:!0,labelString:"Speed(m/s)"},type:"linear",display:!0,position:"left",id:"y-axis-1",gridLines:{display:!1},labels:{show:!0}},{scaleLabel:{display:!0,labelString:"Direction(Degrees)"},type:"linear",display:!0,position:"right",id:"y-axis-2",gridLines:{display:!1}}]}},dict1:{datasets:[{label:"Temperature"},{label:"Rain"}]},dict2:{datasets:[{label:"Pressure bars"},{label:"Humidity bars"}]},dict3:{datasets:[{label:"Wind Speed"},{label:"Wind Direction"}]}},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"onMapClick",value:function(e){var t=this,a=e.latlng.lat,i=e.latlng.lng,o=new u.a.LatLng(a,i);return u.a.marker(o).addTo(this.map),alert("you are now viewing the weather for following coor ".concat(o)),fetch("http://api.openweathermap.org/data/2.5/forecast?lat=".concat(a,"&lon=").concat(i,"&APPID=").concat(g)).then((function(e){return e.json()})).then((function(e){console.log(e),t.setState({data:e.list}),t.getWeather()})).catch((function(e){console.log("error",e)}))}},{key:"getLocation",value:function(){var e=this,t=document.getElementById("SearchCity").value,a=document.getElementById("SearchCountry").value;return fetch("http://api.openweathermap.org/data/2.5/forecast?q=".concat(t,",").concat(a,"&APPID=").concat(g)).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({data:t.list}),e.getWeather()})).catch((function(e){console.log("error",e)}))}},{key:"getWeather",value:function(){var e=[],t=[],a=[],i=[],o=[],r=[],n=[],s=[],l="",c=0,d=[];for(var p in this.state.data){e.push(this.state.data[p].main.temp);var h=this.state.data[p].weather[0].main;h!=l&&c<9&&(n.push(h),s.push(this.state.data[p].dt_txt),l=h,c+=1),i.push(this.state.data[p].main.humidity),o.push(this.state.data[p].wind.speed),r.push(this.state.data[p].wind.deg);var m=JSON.stringify(this.state.data[p]);if(m.includes("3h")){var u=m.substr(m.indexOf("3h")+4,4);t.push(parseFloat(u))}else t.push(0);a.push(this.state.data[p].main.pressure),d.push(this.state.data[p].dt_txt)}var b={labels:d,datasets:[{label:"Temperature",data:e,yAxisID:"y-axis-1",backgroundColor:"rgba(250,128,114,0.1)",borderColor:"rgb(250,128,114)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgb(250,128,114)",pointBackgroundColor:"#fff",pointBorderWidth:2,pointHoverRadius:5,pointHoverBackgroundColor:"rgb(250,128,114)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:5,pointRadius:4,pointHitRadius:10},{label:"Rain",data:t,yAxisID:"y-axis-2",backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:2,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:5,pointRadius:4,pointHitRadius:10}]},g={labels:d,datasets:[{label:"Pressure bars",backgroundColor:"#9ACD32",borderColor:"#9ACD32",hoverBackgroundColor:"#000080",hoverBorderColor:"#92a1cf",data:a,yAxisID:"y-axis-1"},{label:"Humidity",data:i,borderColor:"#ffefd5",backgroundColor:"#EC932F",hoverBackgroundColor:"#ffefd5",hoverBorderColor:"#EC932F",yAxisID:"y-axis-2"}]},y={labels:d,datasets:[{label:"Wind Speed",fill:!1,data:o,yAxisID:"y-axis-1",backgroundColor:"rgba(75,192,192,0.1)",borderColor:"rgb(75,192,192)"},{label:"Wind direction",fill:!1,data:r,backgroundColor:"#c0c0c0",borderColor:"#c0c0c0",yAxisID:"y-axis-2"}]};this.setState({weatherDescription:n,weatherDescriptionTime:s,dict1:b,dict2:g,dict3:y})}},{key:"render",value:function(){var e=this.state.weatherDescription,t=this.state.weatherDescriptionTime;return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},"Weather App"),o.a.createElement("div",{className:"line1"},o.a.createElement("img",{id:"pic1",src:a(43)}),o.a.createElement("div",{className:"SearchBar"},o.a.createElement("h4",{id:"title"},"Enter city & country or Click on map"),o.a.createElement("input",{type:"search",id:"SearchCity",placeholder:"City.."}),o.a.createElement("input",{type:"search",id:"SearchCountry",placeholder:"Country.."}),o.a.createElement("button",{className:"getWeatherbutton",onClick:this.getLocation,value:"Charge"},"Charge"),o.a.createElement("br",null))),o.a.createElement("div",{className:"Mapbox",id:"mapid"}),o.a.createElement("div",{className:"row1"},o.a.createElement("div",{className:"description"},o.a.createElement("h4",{className:"title2"},"Expected changes for the next 5 days"),o.a.createElement("div",{className:"nestedDescTable"},o.a.createElement("div",{className:"DescText"},Object.keys(e).map((function(t,a){return o.a.createElement("p",{key:a},e[t])}))),o.a.createElement("div",{className:"DescTime"},Object.keys(t).map((function(e,a){return o.a.createElement("p",{key:a},t[e])}))),o.a.createElement("div",{className:"DescImag"},o.a.createElement("img",{id:"pic3",src:a(43)}),o.a.createElement("img",{id:"pic4",src:a(154)}),o.a.createElement("img",{id:"pic5",src:a(155)})))),o.a.createElement("div",{className:"plot"},o.a.createElement(b.b,{ref:"chart",data:this.state.dict1,getDataSetAtEvent:function(e){return console.log(e)},options:this.state.options1}))),o.a.createElement("div",{className:"row2"},o.a.createElement("div",{className:"plot2"},o.a.createElement(b.a,{ref:"chart2",data:this.state.dict2,getDataSetAtEvent:function(e){return console.log(e)},options:this.state.options2})),o.a.createElement("div",{className:"plot3"},o.a.createElement(b.b,{ref:"chart3",data:this.state.dict3,getDataSetAtEvent:function(e){return console.log(e)},options:this.state.options3}))))}},{key:"UNSAFE_componentWillMount",value:function(){var e=this;return fetch("http://api.openweathermap.org/data/2.5/forecast?q=paris,fr&APPID=".concat(g)).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({data:t.list}),e.getWeather()})).catch((function(e){console.log("error",e)}))}},{key:"componentDidMount",value:function(){this.map=u.a.map("mapid",{center:[43.55,5.12],zoom:5,zoomControl:!0}),u.a.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery \xa9 <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:18,id:"mapbox.streets",accessToken:"pk.eyJ1IjoibWFsZWtoYSIsImEiOiJjazNlajUwNXcwOG54M2Ntemt5NGE1MnFqIn0.zmG039olyjNTguPwa1Q0zA"}).addTo(this.map),this.map.on("click",this.onMapClick)}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},43:function(e,t,a){e.exports=a.p+"static/media/sunny.01d21945.ico"},51:function(e,t,a){e.exports=a(156)},56:function(e,t,a){},57:function(e,t,a){}},[[51,1,2]]]);
//# sourceMappingURL=main.1541edc5.chunk.js.map