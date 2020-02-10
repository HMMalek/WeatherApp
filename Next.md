
## The next steps to improve the application: 

* The application is only tested using Chrome, so there might some styling issues when using other navigators. <br/>

* The openweathermap.org offers an insecure access (HTTP) that contradicts with the github pages security (HTTPS) (you need to disable the Insecure parameter to allow in the settings or update the account to an Entreprise one on openweathermap.org). <br/>

* Use a geocoder in order to get the city's name and country from the geographical coordinates when clicking on the map.<br/>

* Modify the description part of the forecats in order to get more precise information(+CSS).<br/>

* Improve the design of the application. <br/>

* The architecture of the application is as follows:

    -main file : App.js <br/>
    -css file : App.css <br/>
    
 It was chosen since it was the simplest and most suitable for this size and type of application. However a decomposition into different components as children of the main file is possile (creating other .js files for the map/plot1/plot2 .. components).
