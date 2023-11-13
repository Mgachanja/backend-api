const {asyncHandler}= require('express-async-handler')


/**
@desc GET goal
@route GET /api/goals
@access Private
 **/
const getGoals = asyncHandler(async (req,res)=>{
    res.status(200).json({message: 'Welcome to the Goal API!'})
})

/**
@desc POST goal
@route POST /api/goals
@access Private
 **/
const setGoals =asyncHandler(async (req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('please add a text field')
    }
    console.log(req.body)

    res.status(200).json({message: 'set goal'})
})
/**
@desc PUT goal
@route PUT /api/goals/:id
@access Private
 **/
const updateGoals =asyncHandler(async (req,res)=>{
    res.status(200).json({message: `update goal ${req.params.id}`})
})
/**
@desc DELETE goal
@route DELETE /api/goals/:id
@access Private
 **/
const deleteGoals =asyncHandler(async(req,res)=>{
    res.status(200).json({message: `update goal ${req.params.id}`})
})


module.exports={
    getGoals,setGoals,deleteGoals,updateGoals
}