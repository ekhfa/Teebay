const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

//For testing
app.get("/hello", (req, res) => {
  try {
    res.send({ msg: "hello" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//For User Registration
app.post("/registration", async (req, res) => {
  try {
    const { first_name, last_name, email, phone, address, password } = req.body;

    const user = await prisma.user.create({
      data: { first_name, last_name, email, phone, address, password },
    });
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//For User Login
app.get("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findFirst({
      where: { email: email },
    });

    //Matching Requested Password with DB.
    if (user.password == password) {
      res.status(200).send("ok");
    } else {
      res.status(401).send("invalid");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//For creating a product
app.post("/product/create", async (req, res) => {
  try {
    const {
      title,
      categories,
      description,
      price,
      rent_price,
      rent_period,
      owner_id,
    } = req.body;

    const product = await prisma.product.create({
      data: {
        title,
        categories,
        description,
        price,
        rent_price,
        rent_period,
        owner: {
          connect: {
            id: owner_id,
          },
        },
      },
    });

    res.status(201).send(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//For updating a product
app.put("/product/update/:id", async (req, res) => {
  try {
    const product = await prisma.product.update({
      where: { id: parseInt(req.params.id) },
      data: req.body,
    });

    res.status(200).send(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//For deleting a product
app.delete("/product/delete/:id", async (req, res) => {
  try {
    const product = await prisma.product.delete({
      where: { id: parseInt(req.params.id) },
    });

    res.status(200).send("deleted");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 9090;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
