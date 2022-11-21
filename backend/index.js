require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors')

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');

const db = mongoose.connection;

var Schema = mongoose.Schema;

var items = mongoose.model('items', new Schema({
    id: Number,
    title: String,
    collectionist: String,
    price: String,
    image: String,
    detailImages: Array,
    colors: String,
    sizes: Array,
    categories: Array,
}),
"items");


db.on('error', (error) => {
    console.log(error)
})

db.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(cors());

app.use(express.json());

app.use('/item/:id', (req,res) => {
    items.findOne({id: req.params.id},(err,docs) => {
        if (err) {res.send(err)} else {
            res.send(docs)
        }
    })
})

app.use('/category/:categories', (req,res) => {

    const categories = decodeURIComponent(req.params.categories).split(",").map(category => {
        return new RegExp(`${category.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')}`,'i')
    })
    items.find({categories: {$all:categories}},(err,docs) => {
        if (err) {res.send(err)} else {
            res.send(docs)
        }
    }).limit(req.query.limit || 8)

})

app.listen(3001, () => {
    console.log(`Server Started at ${3001}`)
})