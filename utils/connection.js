require('dotenv').config()
const mongoose = require('mongoose')

/////db connection
const DATABASE_URL= process.env.DATABASE_URL

////db config object
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology:tru
}
///establish connection
mongoose.connect(DATABASE_URL, CONFIG)

///tell mongoose what to do upon certain events
mongoose.connection
    .on('open', ()=> console.log('mongoose connected'))
    .on('close', ()=> console.log('mongoose diconnected'))
    .on('error', (err)=> console.log('mongoose error'))

    ///export
    module.exports = mongoose
