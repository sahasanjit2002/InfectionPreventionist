import React from 'react'
import { useState } from 'react';
import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";


const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    if(props.isLogin){
        window.location.href = "/dashboard"
    }
    const login = async(e) => { 
        e.preventDefault();
        const response = await fetch('http://localhost:4040/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })  
        })
        const data = await response.json();
        if((data.status === 200)&&(data.message === "User Logged In")){
            localStorage.setItem('token',data.token)
            props.setIsLogin(true)
            props.setUserName(data.name);
        }
        else{
            alert("Invalid Credentials")
        }
        console.log(data)
    }
  return (
    <div className='container mx-auto flex-auto px-4 py-4 flex items-center justify-center align-middle pt-14'>
        <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3"> Username </Typography>
            <Input size="lg"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          
          <Button className="mt-6" fullWidth onClick={login}>
            sign in
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have an account?{" "}
            <a href="/register" className="font-medium text-gray-900">
              Sign up
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  )
}

export default Login


   
  