import React from 'react'
import { useState } from 'react';
import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";





const Register = (props) => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [hName, setHospitalname] = useState("");
    const [hId, setHospitalId] = useState("");
    const [password2, setPassword2] = useState("");
    const passwordMatch = () => {
        if(password === password2){
            return true;
        }
        else{
            return false;
        }
    }
    const register = async (e) => {
        e.preventDefault();
        console.log("registering")
        const response = await fetch('http://localhost:4040/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, username, password, hName, hId })  
        })
        const data = await response.json();
        if(data.status === 200){
        localStorage.setItem('token',data.token)
        props.setIsLogin(true)
        props.setUserName(data.name);
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
            <Typography variant="h6" color="blue-gray" className="-mb-3">Name</Typography>
            <Input size="lg" value={name} onChange={(e) => setName(e.target.value)} placeholder="name@mail.com" className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Username
            </Typography>
            <Input
              size="lg"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />


            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            {passwordMatch() ? <Input
              type="password"
              size="lg"
              value={password}
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setPassword(e.target.value)}
              
            /> : <Input
              type="password"
              size="lg"
              value={password}
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setPassword(e.target.value)}
              error
            />}

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Confirm Password
            </Typography>
            {passwordMatch() ? <Input
              type="password"
              size="lg"
              value={password2}
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setPassword2(e.target.value)}
              
            /> : <Input
              type="password"
              size="lg"
              value={password2}
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setPassword2(e.target.value)}
              error
            />}

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Hospital Name
            </Typography>
            <Input
              size="lg"
              onChange={(e) => setHospitalname(e.target.value)}
                value={hName}
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />


            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Hospital Id
            </Typography>
            <Input
              size="lg"
              onChange={(e) => setHospitalId(e.target.value)}
              value={hId}
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          

          <Button className="mt-6" fullWidth onClick={register}>
            sign up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a href="/login" className="font-medium text-gray-900" >
              Sign In
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  )
}

export default Register


   
  