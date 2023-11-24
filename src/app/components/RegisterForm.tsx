'use client'

import { Button, Stack, TextField, Typography } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'

const RegisterForm = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (event: React.FormEvent) =>{
        event.preventDefault()
        if(!fullName || !email || !password){
            setError('Please fill out all fields')
            return;
        }
    }

  return (
    <Stack height={'100vh'} justifyContent={'center'}>
      <Stack justifyContent={'center'} alignItems={'center'} spacing={1}>
      <Typography>Register an account here!</Typography>
      <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
      <TextField onChange={(e) => setFullName(e.target.value)} type='text' placeholder='Full Name'></TextField>
      <TextField onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email'></TextField>
      <TextField onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password'></TextField>
      <Button type='submit'>Login</Button>
      </form>
      {
        error && (
            <Typography color={'red'}>{error}</Typography>

        )
      }
      <Link href={'/'}>Already have an account? Login here</Link>
      </Stack>
    </Stack>
  )
}

export default RegisterForm