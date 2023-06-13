import React, { useState } from 'react'
import axios from 'axios'
import {Box,Typography,Alert,Button,Grid} from '@mui/material'
import styles from './CountryInformation.module.css'
function CountryInformation({response,onCancel,showWeather}) {
    const [error,setError] = useState('')
    const clickHandler = (cityName)=>{
        setError('')
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=993a389b6335e585ebf8aba136c574cd`)
            .then(res =>{
                console.log(res.data)
                response = {
                    temperature : res.data.main.temp,
                    weather_icon : `https://openweathermap.org/img/wn/${res.data.weather[0].icon}.png`,
                    wind_speed : res.data.wind.speed,
                    precip : res.data.weather[0].main
                }
                showWeather(response)
            }).catch(err =>{
                console.log(err)
                setError('Something Went Wrong')
            })
    }
  return (
    <Box>
    <Button margin={[2,0,0,0]} variant="contained" onClick={onCancel} color='error' className={styles.marginX}>Back</Button>
    <Grid container >
        {response.map((response)=>(
            <Grid item xs={12} sm={6} md={4}>
            <Box display="flex" justifyContent="center" className={styles.container}>
        <Typography variant='h6'>Capital :</Typography> 
        <Typography variant='subtitle1' className={styles.marginX}> {response.capital}</Typography> 
        </Box>
        <Box display="flex" justifyContent="center">
        <Typography variant='h6'>Population : </Typography> 
        <Typography variant='subtitle1' className={styles.marginX}> {response.population}</Typography> 
        </Box>
        <Box display="flex" justifyContent="center">
        <Typography variant='h6'>LatLng : </Typography> 
        <Typography variant='subtitle1' className={styles.marginX}> {response.lat} {response.lng}</Typography> 
        </Box>
        <Box display='flex' justifyContent="center">
        <Typography variant='h6'>Flag : </Typography> 
        <img src={response.flag}  className={`${styles.marginX} ${styles.flag}`} />
        </Box>
        <Box display='flex' justifyContent="center">
        <Button variant="contained" onClick={()=>clickHandler(response.capital)}>Capital Weather</Button>
        </Box>
            </Grid>
        ))}
        </Grid>
        <Box>
        {error.trim().length !== 0 && <Alert className={styles.error} severity="error">{error}</Alert>}
        </Box>
        </Box>
  )
  
}

export default CountryInformation