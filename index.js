const {redBright,yellowBright,red, bgRedBright}= require('chalk')
const {error,warning}= require('log-symbols')

/*
* @param {String} heading
* @param {Error} err
* @param {Boolean} display
* @param {Boolean} exitStatus
*/

module.exports= (heading='ERROR: ',err,display=true,exitStatus=true)=>{
    if(err){
        if(display){
            console.log(`\n${error} ${bgRedBright.bold(heading)}\n`)
            console.log(`${redBright('Error Name:')} ${err.name}`)
            console.log(`${redBright('Message:')} ${err.message}`)
            console.log(`${redBright('Error Stack ⬇')}\n${err.stack}\n`)
        }else{
            console.log(`\n${warning} ${yellowBright.inverse.bold(heading)}\n`)
        }

        exitStatus && process.exit(0)  //handled the error therfore exitstatus should not be 1 but 0
        if(!exitStatus){
            return false
        }
    }
}



