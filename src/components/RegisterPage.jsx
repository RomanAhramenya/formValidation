import axios from 'axios'
import React from 'react'
import Form from './Form'

function RegisterPage() {
    const setRegister = async (email,password) => {
        const response = await axios.post('https://6294c7f7a7203b3ed070ec66.mockapi.io/users',{name:email,password})
        alert(response.data)

    }
  return (
    <Form action={setRegister} title='Регестрация' link='/login' linklName='Войти'/>
  )
}

export default RegisterPage