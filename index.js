const express = require("express");
require("dotenv").config();

const app = express();

const example = {
  quiz: {
    sport: {
      q1: {
        question: "Which one is correct team name in NBA?",
        options: [
          "New York Bulls",
          "Los Angeles Kings",
          "Golden State Warriros",
          "Huston Rocket",
        ],
        answer: "Huston Rocket",
      },
    },
    maths: {
      q1: {
        question: "5 + 7 = ?",
        options: ["10", "11", "12", "13"],
        answer: "12",
      },
      q2: {
        question: "12 - 8 = ?",
        options: ["1", "2", "3", "4"],
        answer: "4",
      },
    },
  },
};

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/json", (req, res) => {
  res.json(example);
});

app.listen(process.env.PORT, () => {
  console.log(`Listening to port ${process.env.PORT}`);
});
