const express = require('express')
const morgan = require('morgan')
require('dotenv').config()
const methodOveride = require('method-override')


const middleware =(app) =>{
    console.log('Middleware function ran')
    app.use(methodOverride('_method'))
    app.use(morgan('tiny'))
    app.use(express.urlencoded({ extended: true }))
    app.use(express.static('public'))
    app.use(express.json())
}

module.exports = middleware