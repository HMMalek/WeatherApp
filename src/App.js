import React, { Component } from 'react'
import './App.css';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import  {Bar, Line} from 'react-chartjs-2';

const Key= "6c1ce666f73cd6af767b3161e69090cd";

export default class App extends Component {

  constructor(props){
    super(props)

    this.onMapClick=this.onMapClick.bind(this);
    this.getWeather= this.getWeather.bind(this);
    this.getLocation=this.getLocation.bind(this); 

    this.state= {
      data:[],
      weatherDescription:[],
      weatherDescriptionTime:[],
      options1:{
        title:{ display: true, text: 'Temp and Rain', fontSize:20},
        tooltips: { mode: 'label'},
        scales: {
          xAxes:[{scaleLabel:{display:true,labelString: 'Date and Time'}}],
         yAxes: [{ scaleLabel:{ display:true,labelString:'Temperature(K)' },
                   type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                    gridLines: {display: false },
                    labels: {show: true} 
                  },
                  {scaleLabel:{display:true,labelString:'Rain(mm)'},
                   type: 'linear',
                   display: true,
                   position: 'right',
                    id: 'y-axis-2',
                    gridLines: { display: false},
                  }
      ]}},
      options2:{
        title:{ display: true, text: 'Pressure and Humidity', fontSize:20},
        tooltips: { mode: 'label'},
        scales: {
          xAxes:[{scaleLabel:{display:true,labelString: 'Date and Time'}}],
         yAxes: [{ scaleLabel:{ display:true,labelString:'Pressure(hPa)' },
                   type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                    gridLines: {display: false },
                    labels: {show: true} 
                  },
                  {scaleLabel:{display:true,labelString:'Humidity(%)'},
                   type: 'linear',
                   display: true,
                   position: 'right',
                    id: 'y-axis-2',
                    gridLines: { display: false},
                  }
      ]}}, 
      options3:{
        title:{ display: true, text: 'Wind Speed and direction', fontSize:20},
        tooltips: { mode: 'label'},
        scales: {
          xAxes:[{scaleLabel:{display:true,labelString: 'Date and Time'}}],
         yAxes: [{ scaleLabel:{ display:true,labelString:'Speed(m/s)' },
                   type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                    gridLines: {display: false },
                    labels: {show: true} 
                  },
                  {scaleLabel:{display:true,labelString:'Direction(Degrees)'},
                   type: 'linear',
                   display: true,
                   position: 'right',
                    id: 'y-axis-2',
                    gridLines: { display: false},
                  }
      ]}},
      //Initializing the data to be displayed
      dict1: {
        datasets:[{label:'Temperature'},{label:'Rain' }]
      },
      dict2: {
       datasets: [{ label: 'Pressure bars'},{ label: 'Humidity bars'}]
      },
      dict3: {
        datasets:[{label:"Wind Speed"},{ label:"Wind Direction" }]
      }
    }
  }

  onMapClick(e) {
    var coordLat= e.latlng.lat;
    var coordLng= e.latlng.lng;
    var newLatLng = new L.LatLng(coordLat, coordLng);
    L.marker(newLatLng).addTo(this.map);
    alert(`you are now viewing the weather for following coor ${newLatLng}`);
    return fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${coordLat}&lon=${coordLng}&APPID=${Key}`)
   .then(response => (response.json()))
   .then(json =>{ console.log(json) ;
    this.setState({
      data : json.list
    })
     this.getWeather();
  })
  .catch((error)=>{
      console.log("error",error);
  })
  }

 getLocation(){
   var city = document.getElementById("SearchCity").value;
   var country=document.getElementById("SearchCountry").value;
    return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=${Key}`)
   .then(response => (response.json()))
   .then(json =>{ console.log(json) ;
     this.setState({
      data : json.list
    })
     this.getWeather();
    })
   .catch((error)=>{
      console.log("error",error);
   })
  }

  //Function sorting the json data retrieved
  getWeather(){  

    var temperature =[]; var rain=[];
    var pressure=[]; var humidity=[];
    var windSpeed=[]; var windDirection=[];  
    var weatherDes=[]; var weatherDesTime=[];
    var currentweather=''; var num=0;  var time=[];

    for (var i in this.state.data){

      temperature.push(this.state.data[i].main.temp);

      var weath=this.state.data[i].weather[0].main;
      if (weath!= currentweather && num<9) {
        weatherDes.push(weath);
        weatherDesTime.push(this.state.data[i].dt_txt);
        currentweather=weath; num=num+1;
      } 

      humidity.push(this.state.data[i].main.humidity);

      windSpeed.push(this.state.data[i].wind.speed);

      windDirection.push(this.state.data[i].wind.deg);

      var tochaine= JSON.stringify(this.state.data[i]);
      if (tochaine.includes("3h")){
        var value=tochaine.substr(tochaine.indexOf("3h")+4,4);
        rain.push(parseFloat(value));
      } else{
        rain.push(0);
      }

      pressure.push(this.state.data[i].main.pressure);

      time.push(this.state.data[i].dt_txt);
     }

    var dict1Copy= {
      labels: time,
      datasets:[{
        label:'Temperature',
        data: temperature,
        yAxisID: 'y-axis-1',
        backgroundColor:  'rgba(250,128,114,0.1)',
        borderColor: 'rgb(250,128,114)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgb(250,128,114)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgb(250,128,114)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 5,
        pointRadius: 4,
        pointHitRadius: 10,
      },{
        label:'Rain',
        data: rain,
        yAxisID: 'y-axis-2',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 5,
        pointRadius: 4,
        pointHitRadius: 10,
      }]
    }

    var dict2Copy = {
      labels: time,
      datasets: [{
        label: 'Pressure bars',
        backgroundColor: '#9ACD32',
        borderColor: '#9ACD32',
        hoverBackgroundColor: '#000080',
        hoverBorderColor: '#92a1cf',
        data: pressure,
        yAxisID:'y-axis-1'
      },{
        label:'Humidity',
        data: humidity,
        borderColor: '#ffefd5',
        backgroundColor: '#EC932F',
        hoverBackgroundColor: '#ffefd5',
        hoverBorderColor: '#EC932F',
        yAxisID:'y-axis-2'
      }
    ]
  }

  var dict3Copy={
    labels: time,
    datasets:[{
      label: 'Wind Speed',
      fill:false,
      data: windSpeed,
      yAxisID: 'y-axis-1',
      backgroundColor: 'rgba(75,192,192,0.1)',
      borderColor: 'rgb(75,192,192)',
    },{
      label:'Wind direction',
      fill:false,
      data: windDirection,
      backgroundColor: '#c0c0c0',
      borderColor: '#c0c0c0',
      yAxisID:'y-axis-2'
    }]
  }
    this.setState({
      weatherDescription: weatherDes,
      weatherDescriptionTime: weatherDesTime,
      dict1: dict1Copy,
      dict2: dict2Copy,
      dict3: dict3Copy
    })
  }

  render (){
   const {weatherDescription} = this.state;  
   const {weatherDescriptionTime} =this.state;
   return (
    <div className="App">

      <header className="App-header">
        Weather App
      </header>

      <div className="line1">
        <img id="pic1" src={require('./sunny.ico')} />      
        <div className="SearchBar">
          <h4 id="title">Enter city & country or Click on map</h4>
          <input type="search" id="SearchCity" placeholder="City.." />
          <input type="search" id="SearchCountry"  placeholder="Country.." />
          <button className="getWeatherbutton" onClick={this.getLocation} value="Charge">Charge</button><br/>
        </div>
      </div>

      <div className="Mapbox" id="mapid"></div>
      <div className="row1">
        <div className="description"> 
          <h4 className="title2">Expected changes for the next 5 days</h4>
          <div className="nestedDescTable">
           <div className="DescText">
             {
               Object.keys(weatherDescription).map((key, index) => ( 
                <p key={index}>{weatherDescription[key]}</p> 
               ))
              } 
            </div>
            <div className="DescTime">
              {
                Object.keys(weatherDescriptionTime).map((key, index) => ( 
                <p key={index}>{weatherDescriptionTime[key]}</p> 
                ))
              } 
            </div>
            <div className="DescImag">
              <img id="pic3" src={require('./sunny.ico')} />
              <img id="pic4" src={require('./clouds.ico')} />
              <img id="pic5" src={require('./rain.ico')} />
            </div>
         </div>       
        </div>
        <div className="plot">  
         <Line
            ref="chart"
            data={this.state.dict1}
            getDataSetAtEvent={dataset => console.log(dataset)}
            options={this.state.options1}
         />
       </div>
      </div>

      <div className="row2">
        <div className="plot2">  
         <Bar
            ref="chart2"
            data={this.state.dict2}
            getDataSetAtEvent={dataset => console.log(dataset)}
            options={this.state.options2}
          />
        </div>
        <div className="plot3">
         <Line
            ref="chart3"
            data={this.state.dict3}
            getDataSetAtEvent={dataset => console.log(dataset)}
            options={this.state.options3}
          />
        </div>
      </div> 

    </div>
   );
  }

  componentDidMount(){
     this.map= L.map('mapid', {
      center: [43.55, 5.12],
      zoom: 5,
      zoomControl: true
    })
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
     maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoibWFsZWtoYSIsImEiOiJjazNlajUwNXcwOG54M2Ntemt5NGE1MnFqIn0.zmG039olyjNTguPwa1Q0zA'
   }).addTo(this.map);
    this.map.on('click', this.onMapClick);
  }
}