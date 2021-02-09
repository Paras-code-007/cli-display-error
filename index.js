const {error,warning}= require('log-symbols')
const red= '\x1b[31m'
const yellow= '\x1b[33m'
const bgRed= '\x1b[41m'
const bold= '\x1b[1m'
const end= '\x1b[0m'
const reverse= '\x1b[7m'
/*
* @param {String} heading
* @param {Error} err
* @param {Boolean} display
* @param {Boolean} exitStatus
*/

module.exports= (heading='ERROR: ',err,display=true,exitStatus=true)=>{
    if(err){
        if(display){
            console.log(`\n${error} ${red}${reverse}${bold}%s${end} \n`,` ${heading} `)
            console.log(`${red}${bold}%s${end}`,`Error Name:`, `${err.name}`)
            console.log(`${red}${bold}%s${end}`,`Message:`,`${err.message}`)
            console.log(`${red}${bold}%s${end}`,`Error Stack ⬇`)
            console.log(err.stack)
            // console.log(`${redBright()
        }else{
            console.log(`\n${warning} ${reverse}${yellow}${bold}%s${end} \n`,` ${heading} `)
        }

        exitStatus && process.exit(0)  //handled the error therfore exitstatus should not be 1 but 0
        if(!exitStatus){
            return false
        }
    }
}
