const Query = {
  me() {
    return {
      id: "1",
      name: "Tochi van Moor",
      username: "tochistry",
      age: 28,
      sex: "male",
    };
  },
  goals() {
    return goals;
  },
  todos() {
    return todos;
  },
  notes() {
    return notes;
  },
};

module.exports = { Query };
