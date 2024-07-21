import React from 'react'
import { useState } from 'react'
import { Box, InputBase, Button, styled } from '@mui/material'
import { Api } from '../Services/Api'

const Container = styled(Box)({
    background: '#445A6F',
    padding: 10,
    display:"flex",
    justifyContent:'space-evenly',
})

const Input = styled(InputBase)({
    color: '#FFF',
    marginRight: 20,
    fontSize: 18
})

const Wb = styled(Button)({
    background: '#e67e22'
})



const Form = ({ setresult }) => {
    const [data, setdata] = useState("")

    const getInput = (e) => {
        setdata(e.target.value)
    }

    const getWeather = async () => {
        let response = await Api(data);
        setresult(response)
    }


    return (
        <Container>
            <Input placeholder='City' onChange={((e) => getInput(e))} name='City' />
            <Wb variant='contained' onClick={() => getWeather()}>Get Weather</Wb>
        </Container>
    )
}

export default Form