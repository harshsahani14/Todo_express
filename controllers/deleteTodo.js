const Todo = require('../Models/todo');

exports.deleteTodo=  async(req,res)=>{

    try{

        const id=req.params.id;

        await Todo.findByIdAndDelete(id);

        res.status(200).json({
            sucess:true,
            message:'Todo deleted successfully'
        })

    }
    catch(e){

        res.status(500).json({
            sucess:false,
            message:'Deletion operation failed'
        })
    }
}