(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{155:function(e,t,a){e.exports=a.p+"static/media/sunny.01d21945.ico"},156:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),o=a(43),n=a.n(o),s=(a(55),a(44)),l=a(45),c=a(48),d=a(46),p=a(6),h=a(49),m=(a(56),a(5)),u=a.n(m),b=(a(57),a(17)),y="6c1ce666f73cd6af767b3161e69090cd",g=new(u.a.Icon.extend({options:{iconSize:[35,40],shadowSize:[50,64],iconAnchor:[18,37],shadowAnchor:[20,62],popupAnchor:[-4,-10]}}))({iconUrl:a(153),shadowUrl:a(154)}),f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).onMapClick=a.onMapClick.bind(Object(p.a)(a)),a.getWeather=a.getWeather.bind(Object(p.a)(a)),a.getLocation=a.getLocation.bind(Object(p.a)(a)),a.state={marker:u.a.marker([48.864,2.349],{icon:g}),data:[],weatherDescription:[],weatherDescriptionTime:[],options1:{title:{display:!0,text:"Temperature and Rain",fontSize:20},tooltips:{mode:"label"},scales:{xAxes:[{scaleLabel:{display:!0,labelString:"Date and Time"}}],yAxes:[{scaleLabel:{display:!0,labelString:"Temperature (K)"},type:"linear",display:!0,position:"left",id:"y-axis-1",gridLines:{display:!1},labels:{show:!0}},{scaleLabel:{display:!0,labelString:"Rain (mm)"},type:"linear",display:!0,position:"right",id:"y-axis-2",gridLines:{display:!1}}]}},options2:{title:{display:!0,text:"Pressure and Humidity",fontSize:20},tooltips:{mode:"label"},scales:{xAxes:[{scaleLabel:{display:!0,labelString:"Date and Time"}}],yAxes:[{scaleLabel:{display:!0,labelString:"Pressure (hPa)"},type:"linear",display:!0,position:"left",id:"y-axis-1",gridLines:{display:!1},labels:{show:!0}},{scaleLabel:{display:!0,labelString:"Humidity (%)"},type:"linear",display:!0,position:"right",id:"y-axis-2",gridLines:{display:!1}}]}},options3:{title:{display:!0,text:"Wind Speed and direction",fontSize:20},tooltips:{mode:"label"},scales:{xAxes:[{scaleLabel:{display:!0,labelString:"Date and Time"}}],yAxes:[{scaleLabel:{display:!0,labelString:"Speed (m/s)"},type:"linear",display:!0,position:"left",id:"y-axis-1",gridLines:{display:!1},labels:{show:!0}},{scaleLabel:{display:!0,labelString:"Direction (Degrees)"},type:"linear",display:!0,position:"right",id:"y-axis-2",gridLines:{display:!1}}]}},dict1:{datasets:[{label:"Temperature"},{label:"Rain"}]},dict2:{datasets:[{label:"Pressure bars"},{label:"Humidity bars"}]},dict3:{datasets:[{label:"Wind Speed"},{label:"Wind Direction"}]}},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"onMapClick",value:function(e){var t=this,a=e.latlng.lat,r=e.latlng.lng,i=new u.a.LatLng(a,r);return this.map.removeLayer(this.state.marker),this.setState({marker:u.a.marker(i,{icon:g})}),this.state.marker.addTo(this.map),this.state.marker.bindPopup("coordinates(".concat(Number.parseFloat(a).toFixed(2),",").concat(Number.parseFloat(r).toFixed(2),")")).openPopup(),fetch("http://api.openweathermap.org/data/2.5/forecast?lat=".concat(a,"&lon=").concat(r,"&APPID=").concat(y)).then((function(e){return e.json()})).then((function(e){console.log(e),t.setState({data:e.list}),t.getWeather()})).catch((function(e){console.log("error",e)}))}},{key:"getLocation",value:function(){var e=this,t=document.getElementById("SearchCity").value,a=document.getElementById("SearchCountry").value;return fetch("http://api.openweathermap.org/data/2.5/forecast?q=".concat(t,",").concat(a,"&APPID=").concat(y)).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({data:t.list}),e.getWeather()})).catch((function(e){console.log("error",e)}))}},{key:"getWeather",value:function(){var e=[],t=[],a=[],r=[],i=[],o=[],n=[],s=[],l=[],c="",d=0;for(var p in this.state.data){e.push(this.state.data[p].main.temp);var h=this.state.data[p].weather[0].main;h!=c&&d<8&&(n.push(h),s.push(this.state.data[p].dt_txt),c=h,d+=1),r.push(this.state.data[p].main.humidity),i.push(this.state.data[p].wind.speed),o.push(this.state.data[p].wind.deg);var m=JSON.stringify(this.state.data[p]);if(m.includes("3h")){var u=m.substr(m.indexOf("3h")+4,4);t.push(parseFloat(u))}else t.push(0);a.push(this.state.data[p].main.pressure),l.push(this.state.data[p].dt_txt)}var b={labels:l,datasets:[{label:"Temperature",data:e,yAxisID:"y-axis-1",backgroundColor:"rgba(250,128,114,0.1)",borderColor:"rgb(250,128,114)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgb(250,128,114)",pointBackgroundColor:"#fff",pointBorderWidth:2,pointHoverRadius:5,pointHoverBackgroundColor:"rgb(250,128,114)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:5,pointRadius:4,pointHitRadius:10},{label:"Rain",data:t,yAxisID:"y-axis-2",backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:2,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:5,pointRadius:4,pointHitRadius:10}]},y={labels:l,datasets:[{label:"Pressure bars",backgroundColor:"#9ACD32",borderColor:"#9ACD32",hoverBackgroundColor:"#000080",hoverBorderColor:"#92a1cf",data:a,yAxisID:"y-axis-1"},{label:"Humidity",data:r,borderColor:"#ffefd5",backgroundColor:"#EC932F",hoverBackgroundColor:"#ffefd5",hoverBorderColor:"#EC932F",yAxisID:"y-axis-2"}]},g={labels:l,datasets:[{label:"Wind Speed",fill:!1,data:i,yAxisID:"y-axis-1",backgroundColor:"rgba(75,192,192,0.1)",borderColor:"rgb(75,192,192)"},{label:"Wind direction",fill:!1,data:o,backgroundColor:"#c0c0c0",borderColor:"#c0c0c0",yAxisID:"y-axis-2"}]};this.setState({weatherDescription:n,weatherDescriptionTime:s,dict1:b,dict2:y,dict3:g})}},{key:"render",value:function(){var e=this.state.weatherDescription,t=this.state.weatherDescriptionTime;return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},"Weather App"),i.a.createElement("table",{className:"table"},i.a.createElement("tr",null,i.a.createElement("div",{className:"line1"},i.a.createElement("img",{id:"pic1",src:a(155)}),i.a.createElement("div",{className:"SearchBar"},i.a.createElement("h4",{id:"title"},"Enter city & country or Click on map"),i.a.createElement("input",{type:"search",id:"SearchCity",placeholder:"Paris"}),i.a.createElement("input",{type:"search",id:"SearchCountry",placeholder:"France"}),i.a.createElement("button",{className:"getWeatherbutton",onClick:this.getLocation,value:"Charge"},"Charge"),i.a.createElement("br",null)))),i.a.createElement("tr",null,i.a.createElement("div",{className:"Mapbox",id:"mapid"})),i.a.createElement("tr",null,i.a.createElement("th",{id:"row11"},i.a.createElement("div",{className:"description"},i.a.createElement("h4",{className:"title2"},"Expected changes for the next 5 days"),i.a.createElement("table",{className:"NestedTable"},i.a.createElement("tr",null,i.a.createElement("td",null," ",i.a.createElement("div",{className:"column1Titre"},"Main description")," "),i.a.createElement("td",null," ",i.a.createElement("div",{className:"column2Titre"},"Date and time"))),i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement("div",{className:"DescText"},Object.keys(e).map((function(t,a){return i.a.createElement("p",{key:a},e[t])})))),i.a.createElement("td",null,i.a.createElement("div",{className:"DescTime"},Object.keys(t).map((function(e,a){return i.a.createElement("p",{key:a},t[e])})))))))),i.a.createElement("th",{id:"row22"},i.a.createElement("div",{className:"plot"},i.a.createElement(b.b,{ref:"chart",data:this.state.dict1,getDataSetAtEvent:function(e){return console.log(e)},options:this.state.options1})))),i.a.createElement("tr",null,i.a.createElement("th",null,i.a.createElement("div",{className:"plot2"},i.a.createElement(b.a,{ref:"chart2",data:this.state.dict2,getDataSetAtEvent:function(e){return console.log(e)},options:this.state.options2}))),i.a.createElement("th",null,i.a.createElement("div",{className:"plot3"},i.a.createElement(b.b,{ref:"chart3",data:this.state.dict3,getDataSetAtEvent:function(e){return console.log(e)},options:this.state.options3}))))))}},{key:"componentDidMount",value:function(){var e=this;return this.map=u.a.map("mapid",{center:[45.55,5.12],zoom:5,zoomControl:!0}),u.a.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery \xa9 <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:18,id:"mapbox.streets",accessToken:"pk.eyJ1IjoibWFsZWtoYSIsImEiOiJjazNlajUwNXcwOG54M2Ntemt5NGE1MnFqIn0.zmG039olyjNTguPwa1Q0zA"}).addTo(this.map),this.map.on("click",this.onMapClick),this.state.marker.addTo(this.map),fetch("http://api.openweathermap.org/data/2.5/forecast?q=paris,fr&APPID=".concat(y)).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({data:t.list}),e.getWeather()})).catch((function(e){console.log("error",e)}))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(i.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},50:function(e,t,a){e.exports=a(156)},55:function(e,t,a){},56:function(e,t,a){}},[[50,1,2]]]);
//# sourceMappingURL=main.bd5fed34.chunk.js.map