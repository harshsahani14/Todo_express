const Todo = require("../Models/todo");

exports.getTodos = async (req, res) => {
  try {
    const data = await Todo.find({});
    console.log(data);

    res.status(200).json({
      sucess: true,
      data: data,
      message: "Entire data fetched sucessfully",
    });
  } catch (e) {
    res.status(500).json({
      sucess: false,
      data: null,
      message: e.message,
    });
  }
};
