const mongoose = require('../utils/connection')
///bring in comments schema
const commentSchema = require('./comment')

///destructure schema and comment models
const { Schema, model } = mongoose

const postSchema = new Schema ({
    name: {
        type:String,
        required: true
    },
    caption:{
        type:String,
        required: true
    },
    photo: {
        type: String,
        required: true
    }
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    
}, {
    timestamps: true
})

module.exports = postSchema