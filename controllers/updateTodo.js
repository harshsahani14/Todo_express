const Todo = require('../Models/todo');

exports.updateTodo = async (req,res) =>{

    try{

        const id = req.params.id;

        const title = req.body.title;
        const description = req.body.description;

        const data = await Todo.findByIdAndUpdate({_id:id},{title,description});

        res.status(200).json(
        {
            sucess:true,
            data:data,
            message:"Todo updated"
        });

    }
    catch(e){

        res.status(500).json({
            sucess: false,
            data: null,
            message: e.message,
        });

    }
}