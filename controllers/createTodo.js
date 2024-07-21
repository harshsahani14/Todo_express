const Todo = require("../Models/todo");

exports.createTodo = async( req,res )=>{
    try {
        // Fetch data from request body
        const title = req.body.title;
        const description = req.body.description;

        // Creates a object of todo schema and saves it in the db
        const data = await Todo.create({ title, description });

        // Set the response status to 200 and send json response
        console.log("Entry created Sucessfully");

        
        res.status(200).json(
            {
                sucess: true,
                data: data,
                message: "Entry created Sucessfully"  
            }
        )
    } 
    catch (e) {
        console.log(e);
        
        res.status(500).json({
            sucess: false,
            data: null,
            message: e.message,
        });
  }
};
