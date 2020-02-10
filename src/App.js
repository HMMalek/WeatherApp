import React, { Component } from 'react'
import './App.css';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { Bar, Line } from 'react-chartjs-2';

/** API key definition **/
const Key = "6c1ce666f73cd6af767b3161e69090cd";

export default class App extends Component {

    constructor(props) {
        super(props)
        /**Binding the functions to the application context **/
        this.onMapClick = this.onMapClick.bind(this);
        this.getWeather = this.getWeather.bind(this);
        this.getLocation = this.getLocation.bind(this);
        /** Defining the state variables**/
        this.state = {
            data: [],
            weatherDescription: [],
            weatherDescriptionTime: [],
            /**Defining the display options of the plots**/
            options1: {
                title: { display: true, text: 'Temp and Rain', fontSize: 20 },
                tooltips: { mode: 'label' },
                scales: {
                    xAxes: [{ scaleLabel: { display: true, labelString: 'Date and Time' } }],
                    yAxes: [{
                            scaleLabel: { display: true, labelString: 'Temperature (K)' },
                            type: 'linear',
                            display: true,
                            position: 'left',
                            id: 'y-axis-1',
                            gridLines: { display: false },
                            labels: { show: true }
                        },
                        {
                            scaleLabel: { display: true, labelString: 'Rain (mm)' },
                            type: 'linear',
                            display: true,
                            position: 'right',
                            id: 'y-axis-2',
                            gridLines: { display: false },
                        }
                    ]
                }
            },
            options2: {
                title: { display: true, text: 'Pressure and Humidity', fontSize: 20 },
                tooltips: { mode: 'label' },
                scales: {
                    xAxes: [{ scaleLabel: { display: true, labelString: 'Date and Time' } }],
                    yAxes: [{
                            scaleLabel: { display: true, labelString: 'Pressure(hPa)' },
                            type: 'linear',
                            display: true,
                            position: 'left',
                            id: 'y-axis-1',
                            gridLines: { display: false },
                            labels: { show: true }
                        },
                        {
                            scaleLabel: { display: true, labelString: 'Humidity (%)' },
                            type: 'linear',
                            display: true,
                            position: 'right',
                            id: 'y-axis-2',
                            gridLines: { display: false },
                        }
                    ]
                }
            },
            options3: {
                title: { display: true, text: 'Wind Speed and direction', fontSize: 20 },
                tooltips: { mode: 'label' },
                scales: {
                    xAxes: [{ scaleLabel: { display: true, labelString: 'Date and Time' } }],
                    yAxes: [{
                            scaleLabel: { display: true, labelString: 'Speed (m/s)' },
                            type: 'linear',
                            display: true,
                            position: 'left',
                            id: 'y-axis-1',
                            gridLines: { display: false },
                            labels: { show: true }
                        },
                        {
                            scaleLabel: { display: true, labelString: 'Direction (Degrees)' },
                            type: 'linear',
                            display: true,
                            position: 'right',
                            id: 'y-axis-2',
                            gridLines: { display: false },
                        }
                    ]
                }
            },
            /** Initializing the data to be displayed **/
            dict1: {
                datasets: [{ label: 'Temperature' }, { label: 'Rain' }]
            },
            dict2: {
                datasets: [{ label: 'Pressure bars' }, { label: 'Humidity bars' }]
            },
            dict3: {
                datasets: [{ label: "Wind Speed" }, { label: "Wind Direction" }]
            }
        }
    }
    /** Map OnClick Event handler
     * Retrives relative weather data to 
     * the location clicked on map
     *@param {e} - event location
     **/
    onMapClick(e) {
        /** Retrieving the clicked location's coordinates**/
        var coordLat = e.latlng.lat;
        var coordLng = e.latlng.lng;
        var newLatLng = new L.LatLng(coordLat, coordLng);
        L.marker(newLatLng).addTo(this.map);
        alert(`you are now viewing the weather for following coor ${newLatLng}`);
        return fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${coordLat}&lon=${coordLng}&APPID=${Key}`)
            .then(response => (response.json()))
            .then(json => {
                console.log(json);
                /**Saving the retrieved data in the corresponding state variable **/
                this.setState({
                    data: json.list
                })
                /**Call sorting data function**/
                this.getWeather();
            })
            .catch((error) => {
                console.log("error", error);
            })
    }
    /** Button OnClick Listener
     * Retrives relative weather data to 
     * the location entered as input
     **/
    getLocation() {
        /**Retrieving the city's name and country **/
        var city = document.getElementById("SearchCity").value;
        var country = document.getElementById("SearchCountry").value;
        return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=${Key}`)
            .then(response => (response.json()))
            .then(json => {
                console.log(json);
                this.setState({
                    data: json.list
                })
                this.getWeather();
            })
            .catch((error) => {
                console.log("error", error);
            })
    }

    /** Function sorting the json data retrieved
     * Retrieving the temperature, rain, pressure,
     * humidity, wind(speed and direction) and date/time
     **/
    getWeather() {
        var temperature = [];
        var rain = [];
        var pressure = [];
        var humidity = [];
        var windSpeed = [];
        var windDirection = [];
        var weatherDes = [];
        var weatherDesTime = [];
        var time = [];
        var currentweather = '';
        var num = 0;
        /**Iterating through the json data elements**/
        for (var i in this.state.data) {
            /*Collecting temperature*/
            temperature.push(this.state.data[i].main.temp);
            /*Collecting first few weather description changes*/
            var weath = this.state.data[i].weather[0].main;
            if (weath != currentweather && num < 8) {
                weatherDes.push(weath);
                /*Collecting the corresponding description time and date*/
                weatherDesTime.push(this.state.data[i].dt_txt);
                currentweather = weath;
                num = num + 1;
            }
            /*Collecting humidity*/
            humidity.push(this.state.data[i].main.humidity);
            /*Collecting wind speed*/
            windSpeed.push(this.state.data[i].wind.speed);
            /*Collecting wind direction*/
            windDirection.push(this.state.data[i].wind.deg);
            /*Testing if there has been rain the past 3 hours*/
            var tochaine = JSON.stringify(this.state.data[i]);
            if (tochaine.includes("3h")) {
                var value = tochaine.substr(tochaine.indexOf("3h") + 4, 4);
                /*Collecting rain volume*/
                rain.push(parseFloat(value));
            } else {
                /*No rain*/
                rain.push(0);
            }
            /*Collecting pressure*/
            pressure.push(this.state.data[i].main.pressure);
            /*Collecting Date and time*/
            time.push(this.state.data[i].dt_txt);
        }
        /**Defining copies of data to be displayed**/
        var dict1Copy = {
            labels: time,
            datasets: [{
                label: 'Temperature',
                data: temperature,
                yAxisID: 'y-axis-1',
                backgroundColor: 'rgba(250,128,114,0.1)',
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
            }, {
                label: 'Rain',
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
                yAxisID: 'y-axis-1'
            }, {
                label: 'Humidity',
                data: humidity,
                borderColor: '#ffefd5',
                backgroundColor: '#EC932F',
                hoverBackgroundColor: '#ffefd5',
                hoverBorderColor: '#EC932F',
                yAxisID: 'y-axis-2'
            }]
        }

        var dict3Copy = {
            labels: time,
            datasets: [{
                label: 'Wind Speed',
                fill: false,
                data: windSpeed,
                yAxisID: 'y-axis-1',
                backgroundColor: 'rgba(75,192,192,0.1)',
                borderColor: 'rgb(75,192,192)',
            }, {
                label: 'Wind direction',
                fill: false,
                data: windDirection,
                backgroundColor: '#c0c0c0',
                borderColor: '#c0c0c0',
                yAxisID: 'y-axis-2'
            }]
        }
        /*Setting the state variables to corresponding values*/
        this.setState({
            weatherDescription: weatherDes,
            weatherDescriptionTime: weatherDesTime,
            dict1: dict1Copy,
            dict2: dict2Copy,
            dict3: dict3Copy
        })
    }
    /**Render function
     *Defining the application's content
     **/
    render() {
        const { weatherDescription } = this.state;
        const { weatherDescriptionTime } = this.state;
        return (

            <div className="App">
      <header className="App-header">
        Weather App
      </header>
      <div className="line1">
        <img id="pic1" src={require('./sunny.ico')} />      
        <div className="SearchBar">
          <h4 id="title">Enter city & country or Click on map</h4>
          <input type="search" id="SearchCity" placeholder="Paris" />
          <input type="search" id="SearchCountry"  placeholder="France" />
          <button className="getWeatherbutton" onClick={this.getLocation} value="Charge">Charge</button><br/>
        </div>
      </div>

      <div className="Mapbox" id="mapid"></div>
      <div className="row1">
        <div className="description"> 
          <h4 className="title2">Expected changes for the next 5 days</h4>
          <div className="nestedDescTable">
          <div className="column1Titre">Main description</div>
          <div className="column2Titre">Date and time</div>
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
    /**Setting up the map and default plots when component mounts
     *
     **/
    componentDidMount() {
      /*Initialize map */
        this.map = L.map('mapid', {
            center: [43.55, 5.12],
            zoom: 5,
            zoomControl: true
        })
        /*Add layer to view map*/
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoibWFsZWtoYSIsImEiOiJjazNlajUwNXcwOG54M2Ntemt5NGE1MnFqIn0.zmG039olyjNTguPwa1Q0zA'
        }).addTo(this.map);
        /*bind onClick MAP listener*/
        this.map.on('click', this.onMapClick);
        /*Default fetch of forecast for Paris,Fr*/
        return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=paris,fr&APPID=${Key}`)
            .then(response => (response.json()))
            .then(json => {
                console.log(json);
                this.setState({
                    data: json.list
                })
                this.getWeather();
            })
            .catch((error) => {
                console.log("error", error);
            })
    }
}