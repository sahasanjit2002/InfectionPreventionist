import React from 'react'
import { useState } from 'react';
import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";





const PatientData = (props) => {
    const [Patient_name, setPatientName] = useState("");
    const [H_no, setH_no] = useState("");
    const [Age, setAge] = useState(0);
    const [Sex, setSex] = useState("");
    const [ICU_Ward, setICU_Ward] = useState("");
    const [Department, setDepartment] = useState("");
    const [Admitting_Unit, setAdmitting_Unit] = useState("");
    const [Dt_Of_Admission, setDt_Of_Admission] = useState("");
    const [Dt_Of_Adm_To_ICU, setDt_Of_Adm_To_ICU] = useState("");
    const [Provisional_Diagnosis, setProvisional_Diagnosis] = useState("");
    const [Final_Diagnosis, setFinal_Diagnosis] = useState("");
    const [Outcome, setOutcome] = useState("");
    const [ward_unit_name, setward_unit_name] = useState("");
    const [date, setDate] = useState("");
    const [LAMA_on, setLAMA_on] = useState("");
    const [Discharge_on, setDischarge_on] = useState("");
    const [Expired_on, setExpired_on] = useState("");
    const [isAuth, setIsAuth] = useState(true);
    const patientRegister = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:4040/patientRegister', {
            headers: { 'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` },
            method: 'POST',
            body: JSON.stringify({Patient_name,H_no,Age,Sex,ICU_Ward,Department,Admitting_Unit,Dt_Of_Admission,Dt_Of_Adm_To_ICU,Provisional_Diagnosis,Final_Diagnosis,Outcome,ward_unit_name,date,LAMA_on,Discharge_on,Expired_on})
        })
        const data = await response.json();
        if((data.status === 401)||(data.status === 403)){
            alert("You are not authorized to perform this action");
            setIsAuth(false);
        }
        else if(data.status === 400){
            alert("Patient Registration Failed");
        }
        else{
            alert("Patient Registered Successfully");
        }
    }
  return (
    <div className='container mx-auto flex-auto px-4 py-4 flex items-center justify-center align-middle pt-14'>
        <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Register Patient Data
        </Typography>
        <form className="mt-8 mb-2 w-100 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">Patient Name</Typography>
            <Input size="lg" value={Patient_name} onChange={(e) => setPatientName(e.target.value)} placeholder="name@mail.com" className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">H_No</Typography>
            <Input size="lg" type='number' value={H_no} onChange={(e) => setH_no(e.target.value)} placeholder="H_no" className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">Age</Typography>
            <Input size="lg" type='number' value={Age} onChange={(e) => setAge(e.target.value)} placeholder="Age" className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                    className: "before:content-none after:content-none",
                }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">Sex</Typography>
            <Input size="lg"value={Sex} onChange={(e) => setSex(e.target.value)} placeholder="Sex" className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                    className: "before:content-none after:content-none",
                }}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">ICU_Ward</Typography>
            <Input size="lg" value={ICU_Ward} onChange={(e) => setICU_Ward(e.target.value)} placeholder="ICU_Ward" className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                    className: "before:content-none after:content-none",
                }}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">Department</Typography>
            <Input size="lg" value={Department} onChange={(e) => setDepartment(e.target.value)} placeholder="Department" className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                    className: "before:content-none after:content-none",
                }}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">Admitting_Unit</Typography>
            <Input size="lg" value={Admitting_Unit} onChange={(e) => setAdmitting_Unit(e.target.value)} placeholder="Admitting_Unit" className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                    className: "before:content-none after:content-none",
                }}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">Dt_Of_Admission</Typography>
            <Input size="lg" type='date' value={Dt_Of_Admission} onChange={(e) => setDt_Of_Admission(e.target.value)} placeholder="Dt_Of_Admission" className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                    className: "before:content-none after:content-none",
                }}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">Dt_Of_Adm_To_ICU</Typography>
            <Input size="lg" type='date' value={Dt_Of_Adm_To_ICU} onChange={(e) => setDt_Of_Adm_To_ICU(e.target.value)} placeholder="Dt_Of_Adm_To_ICU" className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                    className: "before:content-none after:content-none",
                }}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">Provisional_Diagnosis</Typography>
            <Input size="lg"  value={Provisional_Diagnosis} onChange={(e) => setProvisional_Diagnosis(e.target.value)} placeholder="Provisional_Diagnosis" className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                    className: "before:content-none after:content-none",
                }}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">Final_Diagnosis</Typography>
            <Input size="lg" value={Final_Diagnosis} onChange={(e) => setFinal_Diagnosis(e.target.value)} placeholder="Final_Diagnosis" className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                    className: "before:content-none after:content-none",
                }}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">Outcome</Typography>
            <Input size="lg" value={Outcome} onChange={(e) => setOutcome(e.target.value)} placeholder="Outcome" className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                    className: "before:content-none after:content-none",
                }}
                />
            <Typography variant="h6" color="blue-gray" className="-mb-3">Transfer_out_to_ward_unit_name_and_date</Typography>
            <Input size="lg" value={ward_unit_name} onChange={(e) => setward_unit_name(e.target.value)} placeholder="ward_unit_name" className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                    className: "before:content-none after:content-none",
                    }}
                />
            <Input size="lg" type='date' value={date} onChange={(e) => setDate(e.target.value)} placeholder="date" className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                />
            
            <Typography variant="h6" color="blue-gray" className="-mb-3">LAMA_on</Typography>
            <Input size="lg" type='date' value={LAMA_on} onChange={(e) => setLAMA_on(e.target.value)} placeholder="LAMA_on" className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                />

            <Typography variant="h6" color="blue-gray" className="-mb-3">Discharge_on</Typography>
            <Input size="lg" type='date' value={Discharge_on} onChange={(e) => setDischarge_on(e.target.value)} placeholder="Discharge_on" className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                />
            
            <Typography variant="h6" color="blue-gray" className="-mb-3">Expired_on</Typography>
            <Input size="lg" type='date' value={Expired_on} onChange={(e) => setExpired_on(e.target.value)} placeholder="Expired_on" className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                />
            <Button className="mt-6" fullWidth onClick={patientRegister}>
            Register Patient
          </Button>
            </div>
        </form>
      </Card>
    </div>
  )
}

export default PatientData


   
  