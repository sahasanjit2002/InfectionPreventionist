const patientDetails = require('../models/patientDetails');


const patientRegister = async(req,res)=>{
    var data = req.body
    console.log(data)
    const patientReg = new patientDetails({
            Patient_name: data.Patient_name,
            H_no: data.H_no,
            Age: data.Age,
            Sex: data.Sex,
            ICU_Ward: data.ICU_Ward,
            Department: data.Department,
            Admitting_Unit: data.Admitting_Unit,
            Dt_Of_Admission: data.Dt_Of_Admission,
            Dt_Of_Adm_To_ICU: data.Dt_Of_Adm_To_ICU,
            Provisional_Diagnosis: data.Provisional_Diagnosis,
            Final_Diagnosis: data.Final_Diagnosis,
            Outcome: data.Outcome,
            Transfer_out_to_ward_unit_name_and_date: [
             {
               ward_unit_name: data.ward_unit_name,
               date: data.date
             }
            ],
            LAMA_on: data.LAMA_on,
            Discharge_on: data.Discharge_on,
            Expired_on: data.Expired_on
    })
    patientReg.save().then((result)=>{
        res.status(200).json({msg : "successful"});
    }).catch((err)=>{
        console.log(err)
        res.status(400).json({msg : "Failed"});
    })
}

module.exports = {patientRegister};