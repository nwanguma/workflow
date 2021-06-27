const { v4 } = require("uuid");
const fs = require("fs");

const Mutation = {
  createUser(parent, args, { db }, info) {
    if (db.user) throw new Error("User already exists");

    const user = {
      id: v4(),
      ...args.data,
    };

    const userJSON = JSON.stringify(user);

    fs.writeFile("../api/src/data/user.json", userJSON, (err) => {
      if (err) throw new Error(err);

      console.log("User created succesfully!");
    });

    return user;
  },
  editUser(parent, args, { db }, info) {
    if (!db.user) throw new Error("Unauthenticated!");

    const user = {
      ...db.user,
      ...args.data,
    };

    const userJSON = JSON.stringify(user);

    fs.writeFile("../api/src/data/user.json", userJSON, (err) => {
      if (err) throw new Error(err);

      console.log("User updated succesfully!");
    });

    return user;
  },
};

module.exports = { Mutation };
