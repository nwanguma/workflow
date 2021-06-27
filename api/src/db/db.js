const user = require("../data/user.json");
const goals = require("../data/goals.json");
const notes = require("../data/notes.json");
const todos = require("../data/todos.json");

const db = {
  user,
  goals,
  notes,
  todos,
};

module.exports = { db };
