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

const PORT = process.env.PORT || 9090;
app.listen(PORT, console.log(`Server started on port ${PORT}`));