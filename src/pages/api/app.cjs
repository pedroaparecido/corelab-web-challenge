const { Insert, Get, Patch, Del } = require('../../models/anotation/index.cjs')

const Connect = require('../../lib/middlewares/mongoose.cjs')

const express = require('express')

const mongoose = require('mongoose')

const router = express()

const bodyParser = require('body-parser')
const upload = require('multer')
const cors = require('cors')

const DATABASE_URI = 'mongodb+srv://pedroaparecidori:3IqCJy0zfOhuC3Lu@cluster-corelab.7lp2g5f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-corelab'

const con = Connect()

router.use(cors())
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

router.get('/get', async (req, res) => {
    const response = await Get()
    res.status(200).send(response)
})

router.patch('/patch/:id', async (req, res) => {
    //console.log('aqui')
    const response = await Patch(req.body)
    res.status(200).send(response)
})

router.delete('/delete/:id', async (req, res) => {
    //console.log(req.params.id)
    const response = await Del(req.params.id)
    //console.log(response)
})

router.post('/post', async (req, res) => {
    //console.log(req.body)
    const response = await Insert(req.body)
    //console.log(response)
    res.status(201).send(response)
})

router.listen(3003, 'localhost').on('Connect', async () => {
    try {
        await mongoose.connect(DATABASE_URI)
        console.log('Conectado ao MONGODB')
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
})