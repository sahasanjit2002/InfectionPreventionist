
const express = require("express");
const app = express();
const userAuthRoutes = require('./routes/userAuthRoutes')
const patientDataRoutes = require('./routes/patientDataRoutes')
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const verifyJWT = require('./middleware/verifyJWT');

//middleware

app.use(cors());
app.use('/',userAuthRoutes);
app.use('/',verifyJWT,patientDataRoutes)
app.use(bodyParser.json());
app.use(cookieParser());

// database connection 
const mongoose = require("mongoose");
const { verify } = require("jsonwebtoken");
const dbURL =
  "mongodb+srv://test-user:test1234@cluster0.mfntxhw.mongodb.net/HAIDb?retryWrites=true&w=majority";
mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("Connected to DB");
    app.listen(process.env.PORT || 4040, () => {
        console.log(`server listening to port ${process.env.PORT || 4040}`);
      });
  })
  .catch((err) => {
    console.log(err);
  });






