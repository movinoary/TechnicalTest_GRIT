const express = require("express");
let dataJSON = require("./clothes.json");
const app = express();
const port = 5000;

app.use(express.json());

// Soal No.10
app.get("/", (req, res) => {
  res.status(200).send(dataJSON);
});

app.post("/", (req, res) => {
  const { ...data } = req.body;

  const request = {
    id: data.id,
    title: data.title,
    price: data.price,
    stock: data.stock,
    size: data.size,
    type: data.type,
    color: data.color,
    image: data.image,
  };

  dataJSON = [...dataJSON, request];
  res.status(200).send(dataJSON);
});

// Soal No.11
app.get("/header", (req, res) => {
  const headerUser = req.header("User-id");
  const headerScope = req.header("Scope");

  console.log(headerUser);
  console.log(headerScope);

  if (headerUser === "ifabula" && headerScope === "user") {
    res.status(200).send(dataJSON);
  } else {
    res.status(401).send({ message: "UNAUTHORIZED" });
  }
});

app.post("/header", (req, res) => {
  const headerUser = req.header("User-id");
  const headerScope = req.header("Scope");

  if (headerUser === "ifabula" && headerScope === "user") {
    const { ...data } = req.body;
    const request = {
      id: data.id,
      title: data.title,
      price: data.price,
      stock: data.stock,
      size: data.size,
      type: data.type,
      color: data.color,
      image: data.image,
    };

    dataJSON = [...dataJSON, request];

    res.status(200).send(dataJSON);
  } else {
    res.status(401).send({ message: "UNAUTHORIZED" });
  }
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
