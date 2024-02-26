const express = require("express");
const { products } = require("./data");
const app = express();

app.get("/", (req, res) => {
  //*   res.json([
  //     { name: "Numan", id: 1 },
  //     { name: "as", id: 2 },
  //     { name: "ma", id: 3 },
  //     { name: "jaon", id: 4 },
  //   ]);
  //*   res.json(products);
  res.send(`<h1>Home</h1> <a href="/api/products">Go</a.`);
});

app.get("/api/products", (req, res) => {
  const newPros = products.map((p) => {
    const { id, name, image, desc } = p;
    return { id, name, image, desc };
  });
  res.json(newPros);
});

app.get("/api/products/:proID", (req, res) => {
  //   console.log(req.params);
  const { proID } = req.params;
  const siglePro = products.find((p) => {
    return p.id === Number(proID);
  });
  if (!siglePro) {
    return res.status(404).send("Pro does not exist...");
  }
  res.json(siglePro);
});

app.listen(5000, () => {
  console.log("Server is listening...");
});

//TODO 5:48:12
