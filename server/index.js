const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080

const { Pool } = require("pg");

const pool = new Pool({
    user: "phitran",
    host: "localhost",
    database: "phitran",
    port: "5432"
})

app.use(express.json())


//getting destinations data
app.get("/api/destinationsData", (req, res) => {
    pool.query("SELECT * FROM destinations", (error, result) => {
        if (error) {
            console.log("Error Executing Query", error)
            res.status(500).json({ error: "Internal Server Error" })
            return
        }
        res.json(result.rows)
    })
})

//getting sightseeting data
app.get("/api/sightseeingData", (req, res) => {
    pool.query("SELECT * FROM sightseeing", (error, result) => {
        if (error) {
            console.log("Error Executing Query", error)
            res.status(500).json({ error: "Internal Server Error" })
            return
        }
        res.json(result.rows)
    })
})

app.get("/api/sightseeingData/totDestinations", (req, res) => {
    pool.query("SELECT COUNT(DISTINCT destination) FROM sightseeing", (error, result) => {
        if (error) {
            console.log("Error Executing Query", error)
            res.status(500).json({ error: "Internal Server Error" })
            return
        }
        res.json(result.rows)
    })
})

app.post("/api/addIntake", (req, res) => {
    const { destination, sights, comments, base64String } = req.body
    console.log("post req", req.body)
    //SQL code
    pool.query("INSERT INTO sightseeing (destination, sights, comments, pictures) VALUES ($1, $2, $3, $4)", [destination, sights, comments, base64String], (error, result) => {
        if (error) {
            console.log("Error Executing Query", error)
            res.json(500).json({ error: "Internal Server Error" })
            return
        }
        res.json({ message: "Data Inserted Successfully" })
    })
})

app.delete("/api/deleteData/:id", (req, res) => {
    const id = req.params.id
    pool.query("DELETE from sightseeing WHERE id=$1", [id], (error, result) => {
        if (error) {
            console.log("Error executing query", error)
            res.status(500).json({ error: "Internal Server Error" })
            return
        }
        res.json({ message: "Data Deleted Successfully" })
    })
})

app.listen(PORT, () => {
    console.log("Server listening on", PORT)
})