const client = require("./connection.js");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

//@route GET api/users/
//@desc gets all users
app.get("/users", (req, res) => {
  client.query(`Select * from users`, (err, result) => {
    if (!err) {
      res.json(result.rows);
    }
  });
  client.end;
});

//@route GET api/users/:id
//@desc gets user by id
app.get("/users/:id", (req, res) => {
  client.query(
    `Select * from users where id=${req.params.id}`,
    (err, result) => {
      if (!err) {
        res.json(result.rows);
      }
    }
  );
  client.end;
});

//@route POST api/users/
//@desc create new user
app.post("/users", (req, res) => {
  const user = req.body;
  let insertQuery = `insert into users(id, firstname, lastname, location) 
                       values(${user.id}, '${user.firstname}', '${user.lastname}', '${user.location}')`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Insertion was successful");
    } else {
      console.log("Error :- ", err.message);
    }
  });
  client.end;
});

//@route PUT api/users/:id
//@desc update user by id
app.put("/users/:id", (req, res) => {
  let user = req.body;
  let updateQuery = `update users
                       set firstname = '${user.firstname}',
                       lastname = '${user.lastname}',
                       location = '${user.location}'
                       where id = ${user.id}`;

  client.query(updateQuery, (err, result) => {
    if (!err) {
      res.send("Update was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

//@route DELETE api/users/:id
//@desc  delete user by id
app.delete("/users/:id", (req, res) => {
  let insertQuery = `delete from users where id=${req.params.id}`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Deletion was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

//@route GET
//@desc general path
app.get("*", (req, res) => {
  res.json({ message: "i'm all route" });
});

app.listen(3000, () => {
  console.log("Sever is now listening at port 3000");
});

client.connect();
