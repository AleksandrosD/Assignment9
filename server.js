const express = require("express");
const app = express();
const port = 4000;
const { Recipe } = require("./models");
require("dotenv").config();

app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.originalUrl}`);
  res.on("finish", () => {
    // the 'finish' event will be emitted when the response is handed over to the OS
    console.log(`Response Status: ${res.statusCode}`);
  });
  next();
});
app.use(express.json());

// function getNextIdFromCollection(collection) {
//   if (collection.length === 0) return 1;
//   const lastRecord = collection[collection.length - 1];
//   return lastRecord.id + 1;
// }

app.get("/", (req, res) => {
  res.send("Welcome to the Recipes API!!!!");
});

// Get all the recipes
app.get("/recipe", async (req, res) => {
  try {
    const allRec = await Recipe.findAll();

    res.status(200).json(allRec);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: err.message });
  }
});

// Get a specific recipe
app.get("/recipe/:id", async (req, res) => {
  const recId = parseInt(req.params.id, 10);

  try {
    const job = await Recipe.findOne({ where: { id: recId } });

    if (job) {
      res.status(200).json(job);
    } else {
      res.status(404).send({ message: "Recipe not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: err.message });
  }
});

// Create a new recipe
app.post("/recipe", async (req, res) => {
  try {
    const newRec = await Recipe.create(req.body);

    res.status(201).json(newRec);
  } catch (err) {
    
    console.error(err);
    res.status(500).send({ message: err.message });
  }
});

// Update a specific recipe
app.patch("/recipe/:id", async (req, res) => {
  const recId = parseInt(req.params.id, 10);

  try {
    const [numberOfAffectedRows, affectedRows] = await Recipe.update(
      req.body,
      { where: { id: recId }, returning: true }
    );

    if (numberOfAffectedRows > 0) {
      res.status(200).json(affectedRows[0]);
    } else {
      res.status(404).send({ message: "Recipe not found" });
    }
  } catch (err) {
    
    console.error(err);
    res.status(500).send({ message: err.message });
  }
});

// Delete a specific Recipe
app.delete("/recipe/:id", async (req, res) => {
  const recId = parseInt(req.params.id, 10);

  try {
    const deleteOp = await Recipe.destroy({ where: { id: recId } });

    if (deleteOp > 0) {
      res.status(200).send({ message: "Recipe deleted successfully" });
    } else {
      res.status(404).send({ message: "Recipe not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});