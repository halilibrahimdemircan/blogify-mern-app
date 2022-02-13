//libraries
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from "dotenv"
import postRoutes from './routes/posts';
const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req,res) =>{
    res.send("Hello from Blogify App Backend")
})
app.use("/posts", postRoutes)

const PORT = process.env.PORT || 8000;
const URL = "mongodb+srv://halilibrahimdemircan:Halil3677@cluster0.9njpd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
 
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
})})
.catch(err => {
    console.log(err)
})