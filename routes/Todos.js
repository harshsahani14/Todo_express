const express = require("express");
const router = express.Router();
const createTodo = require("../controllers/createTodo");
const getTodo = require("../controllers/getTodo");
const updateTodo = require("../controllers/updateTodo");
const deleteTodo = require("../controllers/deleteTodo");

router.post("/createTodo", createTodo.createTodo);
router.get("/getTodo", getTodo.getTodos);
router.get("/getTodo/:id", getTodo.getTodoById);
router.put("/updateTodo/:id", updateTodo.updateTodo);
router.delete("/deleteTodo/:id",deleteTodo.deleteTodo);

module.exports = router;
