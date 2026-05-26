const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is working!");
});

app.post("/simulate", (req, res) => {
  const { career } = req.body;

  let response = "";

  if (career === "developer") {
    response = "You are given a broken login system. Fix the bug.";
  } else if (career === "doctor") {
    response = "A patient has fever and chest pain.";
  } else {
    response = "General career simulation task.";
  }

  res.json({
    simulation: response,
    regretScore: Math.floor(Math.random() * 100)
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});