import logo from './logo.svg';
import './App.css';
import Form from './components/Form/Form';
import CountryInformation from './components/Information/CountryInformation';
import { useState,useRef } from 'react';
import WeatherInformation from './components/Information/WeatherInformation';

function App() {
  const [showInformation,setShowInformation] = useState(false)
  const [showWeather,setShowWeather] = useState(false)
  // const [response,setResponse] = useState({})
  const response =useRef()
  const weatherData = useRef()
  const submitHandler = (res) =>{
    response.current = [...res]
    // setResponse({...res})
    setShowInformation(true)
  }
  const weatherInfo = (res) =>{
    weatherData.current = {...res}
    setShowInformation(false)
    setShowWeather(true)
  }

  return (
    <div className="App">
      {!showInformation && !showWeather && <Form onSubmit={submitHandler}/>}
      {showInformation &&  <CountryInformation response={response.current} showWeather={weatherInfo}  onCancel={()=>setShowInformation(false)} />}
      {showWeather && <WeatherInformation onCancel={()=>{setShowWeather(false);setShowInformation(true)}}  response={weatherData.current} />}
    </div>
  );
}

export default App;
