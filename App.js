import React, { PureComponent } from 'react'
import FeatherIcon, { Command, Droplet, Thermometer, Wind } from "react-feather"
import "./style.css";


function App() {

  function ChangeandApi() {
    var a = document.getElementById("we-sh").value
    document.getElementById("place").innerHTML = a
    console.log(a);
    var b = 'https://api.openweathermap.org/data/2.5/weather?q=+'
    var c = '&appid=98d9e362f7bde1eec66ee72140dfa4ef'
    var d = a + c
    fetch(b + d)
      .then(response => {
        return response.json()
      })
      .then(data => {
        document.getElementById('t').textContent += " : " + (data.main.temp - 273.15).toFixed(2) + "°C"
        document.getElementById('p').textContent += " : " + data.main.pressure + "hPa"
        document.getElementById('h').textContent += " : " + data.main.humidity + "%"
        document.getElementById('w').textContent += " : " + data.wind.speed + "m/s"

      })

  }
  return (
    <>
      <div id='body'>
        <div id='logo'></div>
        <div id='nav'>
          <input type="text" placeholder='Enter the location' id='we-sh'></input>
          <button onClick={ChangeandApi}>Submit</button>
        </div>


        <div className='weather-box' id='we-bx'>
          <div>
            <p id='place'></p>
          </div>
          <div>
            <tr>
              <td id='td1'>
                <Thermometer id='icon'></Thermometer>
                <p id='t'>Temp </p>
              </td>
              <td id='td2'>
                <Command id='icon'></Command>
                <p id='p'>Pressure</p>
              </td>
            </tr>
            <tr>
              <td id='td3'>
                <Droplet id='icon'></Droplet>
                <p id='h'>Humidity</p>
              </td>
              <td id='td4'>
                <Wind id='icon'></Wind>
                <p id='w'>Wind</p>

              </td>
            </tr>
          </div>
        </div>
      </div>
    </>
  )
}

export default App