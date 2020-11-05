const handleError= require('./index')

// generate a new error object
const err2= new Error('Request returns with a 404 response') 
handleError('API called failed',err2,true,false)

const err= new Error('Unhandled ERROR') 
handleError('Display Error',err,false,true)

