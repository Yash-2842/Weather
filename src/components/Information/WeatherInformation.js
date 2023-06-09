import React from 'react'
import styles from './WeatherInformation.module.css'
import {Box,Typography,Alert,Button} from '@mui/material'

function WeatherInformation({response,onCancel}) {
  return (
<Box>
        <Box display="flex" justifyContent="center" className={styles.container}>
        <Typography variant='h6'>Temperature :</Typography> 
        <Typography variant='subtitle1' className={styles.marginX}> {response.temperature}</Typography> 
        </Box>
        <Box display="flex" justifyContent="center">
        <Typography variant='h6'>Weather Icon : </Typography> 
        <img src={response.weather_icon}  className={`${styles.marginX} ${styles.icon}`} />
        </Box>
        <Box display="flex" justifyContent="center">
        <Typography variant='h6'>Wind Speed : </Typography> 
        <Typography variant='subtitle1' className={styles.marginX}> {response.wind_speed}</Typography> 
        </Box>
        <Box display='flex' justifyContent="center">
        <Typography variant='h6'>Precip : </Typography> 
        <Typography variant='subtitle1' className={styles.marginX}> {response.precip}</Typography> 
        </Box>
        <Box display='flex' justifyContent="center">
        <Button variant="contained" onClick={onCancel} color='error' className={styles.marginX}>Back</Button>
        </Box>
    </Box>
  )
}

export default WeatherInformation