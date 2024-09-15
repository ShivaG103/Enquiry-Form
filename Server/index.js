const express = require('express');
const app = express();

const postRoutes = require('./routes/UserData');


const database = require('./database');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 4000;

//database se connect
database.connect();

//middlewares

app.use(express.json());

app.use(
  cors({
    origin: "https://ankit-realestate.vercel.app/",
    credentials: true,
  })
  );
  

// routes
app.use("/enquire", postRoutes);


app.get('/', (req, res) => {
    return res.json({
        success:true,
        message:"Your server is up and running..."
    });
});

//activate server
app.listen(PORT, ()=> {
    console.log(`App is running at port ${PORT}`);
});
