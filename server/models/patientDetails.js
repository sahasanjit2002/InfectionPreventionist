const mongoose = require('mongoose')
const Schema = mongoose.Schema

const patientSchema = new Schema({
    Patient_name: {type : String , required : true},
    H_no: {type : String , required : true},
    Age: {type : Number , required : true},
    Sex: {type : String , required : true},
    ICU_Ward: {type : String , required : true},
    Department: {type : String , required : true},
    Admitting_Unit: {type : String , required : true},
    Dt_Of_Admission: {type : Date , required : true},
    Dt_Of_Adm_To_ICU: {type : Date , required : true},
    Provisional_Diagnosis: {type : String , required : true},
    Final_Diagnosis: {type : String , required : true},
    Outcome: {type : String , required : true},
    Transfer_out_to_ward_unit_name_and_date : [
      {
        ward_unit_name: {type : String , required : true},
        date: {type : Date , required : true},
      }
    ],
    LAMA_on: {type : Date , required : true},
    Discharge_on: {type : Date , required : true},
    Expired_on: {type : Date , required : true},
  })

  const PatientData = mongoose.model('PatientData',patientSchema)
  module.exports = PatientData