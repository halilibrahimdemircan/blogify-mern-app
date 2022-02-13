//libraries
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req,res) =>{
    res.send("Hello from Blogify App Backend")
})

const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.mongoURI, { useNewUrlParser: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
})})
.catch(err => {
    console.log(err)
})