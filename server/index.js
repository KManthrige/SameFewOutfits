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

app.listen(PORT, () => {
    console.log("Server listening on", PORT)
})