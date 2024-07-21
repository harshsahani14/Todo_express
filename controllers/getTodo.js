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

exports.getTodoById = async(req,res)=>{

    try{
      const id = req.params.id;

      const data = await Todo.findById({_id:id});
      
      if(data == null){
        res.status(404).json({

            sucess:false,
            data:null,
            message:"Todo not found"
        })
      }
      else{
        res.status(200).json(
          {
            sucess:true,
            data:data,
            message:"Todo found"
          }
        )
      }
    }
    catch(e){
      res.status(500).json({
        sucess: false,
        data: null,
        message: e.message,
      });
    }
}
