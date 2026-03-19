//const express = require("express")  => old syntax
import express from "express"
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

async function  initDB(){
    try {
        await sql`CREATE TABLE IF NOT EXISTS transactions(
        id SERIAL PRIMARY KEY,
        user_id VARCHAR(255) NOT NULL,
        title VARCHAR(255) NOT NULL,
        )` 
    } catch (error) {
        
    }
}

connectDB(process.env.DATABASE_URL)

app.get("/", (req, res) => {
    res.send("It's working ");
});

console.log("my port", process.env.PORT);

app.listen(5001, () => {
    console.log("Server is up and running on PORT:5001");
});