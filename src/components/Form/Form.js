import React, { useState } from 'react'
import {Box, TextField,Button,Alert } from '@mui/material'
import style from './Form.module.css'
import axios from 'axios'


function Form(props) {
    const [countryName,setCountryName] = useState('')
    const [error,setError] = useState('')
    const submitHandler = (e) =>{
        e.preventDefault()
        setCountryName('')
        setError("")

        axios.get(`https://restcountries.com/v2/name/${countryName}`)
            .then(res =>{
                const response = {
                    capital : res.data[0].capital,
                    population : res.data[0].population,
                    lat : res.data[0].latlng[0],
                    lng : res.data[0].latlng[1],
                    flag : res.data[0].flags.png,
                }
                props.onSubmit(response)
                console.log(res.data[0].latlng)
            }).catch(err =>{
                console.log(err)
                setError("Invalid Country Name")
            })
    }
  return (
    <>
    <Box onSubmit={submitHandler} component="form" className={style.form}>
        <TextField id="outlined-basic" value={countryName} label="Enter Country" onChange={(e)=>{setCountryName(e.target.value)}} className={style.textField} variant="outlined" />
        <Button type='submit' variant="contained"  disabled={countryName.trim().length === 0}>Submit</Button>
    </Box>
    {error.trim().length !== 0 && <Alert severity="error" className={style.error}> Invalid Country Name!</Alert>}
    </>
  )
}

export default Form