import { Button, Stack, TextField, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const LoginForm = () => {
  return (
    <Stack height={'100vh'} justifyContent={'center'}>
      <Stack justifyContent={'center'} alignItems={'center'} spacing={1}>
      <Typography>Enter your login details</Typography>
      <TextField type='text' placeholder='Username'></TextField>
      <TextField type='password' placeholder='Password'></TextField>
      <Button>Login</Button>
      <Typography color={'red'}>Error message here</Typography>
      <Link href={'/register'}>Don't have an account? Register here</Link>
      </Stack>
    </Stack>
  )
}

export default LoginForm