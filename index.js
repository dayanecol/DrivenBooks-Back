import express from "express";


const app = express();


app.listen(5000, ()=>{
    console.log("Servidor funcionando na porta 5000!");
})