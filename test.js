const handleError= require('./index')

// generate a new error object
const err= new Error('Unhandled ERROR') 
handleError('Display Error',err,true,false)

// we can still extend Error object to specify particular name and stack to it
// const err2= new Error('Error code 2') 
// err2.name= "very dreadful error"
// err2.stack= "critical error stack"
// handleError('new Error',err,true,false)
// still nmae and stck not updated of error

const err2= new Error('Unhandled ERROR') 
handleError('Display Error',err2,false,false)