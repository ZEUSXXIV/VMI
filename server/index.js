const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const { query } = require("express");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "zeus2652",
  database: "project",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/insert", (req, res) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const email = req.body.email;
  const password = req.body.password;

  const sqlInsert =
    "insert into user (name,phone,email,password) values (?,?,?,?)";

  db.query(sqlInsert, [name, phone, email, password], (err, result) => {
    console.log(err);
  });
});

app.post("/admin/add", (req, res) => {
  const brand = req.body.brand;
  const color = req.body.color;
  const ram = req.body.ram;
  const processor = req.body.processor;
  const model = req.body.model;
  const desc = req.body.desc;
  const price = req.body.price;
  const quantity = req.body.quantity;
  const camera = req.body.camera;

  const sqlInsert =
    "insert into phone (brand,model,processor,ram,camera,quantity,price,color,des) values (?,?,?,?,?,?,?,?,?)";

  db.query(
    sqlInsert,
    [brand, model, processor, ram, camera, quantity, price, color, desc],
    (err, result) => {
      console.log(err);
    }
  );
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const sqlLogin = "select password,user_id from user where email=?";

  db.query(sqlLogin, email, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

app.post("/home/all", (req, res) => {
  const sqlHomeAll = "select id,brand,model,price from phone";

  db.query(sqlHomeAll, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

app.post("/admin/all", (req, res) => {
  const sqlAll = "select * from phone";

  db.query(sqlAll, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

app.post("/phone", (req, res) => {
  const id = req.body.id;

  const sqlPhone = "select * from phone where id=?";

  db.query(sqlPhone, id, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

app.post("/admin/delete", (req, res) => {
  const id = req.body.id;

  const sqlDelete = "delete from phone where id=?";

  db.query(sqlDelete, id, (err, result) => {
    console.log(result);
  });
});

// filters

app.post("/filter", (req, res) => {
  const ram = req.body.ram;
  const brand = req.body.brand;
  const color = req.body.color;
  const processor = req.body.processor;
  const price = req.body.price;
  var count = req.body.count;
  var fills = "";
  console.log(count);
  console.log("filter working");

  if (brand != "") {
    count--;
    fills += 'brand="' + brand + '"';
    if (count != 0) {
      fills += " and ";
    }
  }
  if (ram != "") {
    count--;
    fills += "ram=" + ram;
    if (count != 0) {
      fills += " and ";
    }
  }
  if (color != "") {
    count--;
    fills += 'color="' + color + '"';
    if (count != 0) {
      fills += " and ";
    }
  }
  if (processor != "") {
    count--;
    fills += 'processor="' + processor + '"';
  }
  if (price != "") {
    count--;
    fills += "price<" + price;
  }

  const sqlFilter = "select * from phone where " + fills;
  console.log(sqlFilter);

  db.query(sqlFilter, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

// save image

// app.post("/admin/image", (req, res) => {
//   const id = req.body.id;

//   const sqlDelete = "delete from phone where id=?";

//   db.query(sqlDelete, id, (err, result) => {
//     console.log(result);
//   });
// });

app.post("/order/insert", (req, res) => {
  const event = new Date();
  const date = event.toLocaleString();
  const id = parseInt(req.body.id);
  const user_id = parseInt(req.body.user_id);

  const sqlOrder = "insert into project.order (id,user_id,date) values (?,?,?)";

  db.query(sqlOrder, [id, user_id, date], (err, result) => {
    console.log(err);
  });
});

app.post("/order/view", (req, res) => {
  const id = req.body.id;

  const sqlViewOrder =
    "select * from project.order natural join phone natural join user";

  db.query(sqlViewOrder, (err, result) => {
    console.log(result);
    console.log(err);
    res.send(result);
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
