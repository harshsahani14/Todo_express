const express = require("express");
const router = express.Router();
const createTodo = require("../controllers/createTodo");
const getTodo = require("../controllers/getTodo");

router.post("/createTodo",createTodo.createTodo);
router.get("/getTodo", getTodo.getTodos);
router.get("/getTodo/:id",getTodo.getTodoById);

module.exports = router;
