// Load express...
const express = require('express')
// Method Override
const methodOverride = require('method-override')
// Instantiate express...
const app = express()

// Add dotenv
require('dotenv').config()
// Mongoose info
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

// Middleware...
app.use(methodOverride('_method'))
app.use((req, res, next) => {
    next()
})
app.use(express.urlencoded({extended:false}))
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())

// Data...
const Log = require('./models/logs')


// Routes...
// Index : Show all the things!
app.get('/logs', (req, res)=>{
    Log.find({}, (error, allLogs)=>{
        res.render('Index', {
            logs: allLogs
        })
    })
})

// main page
app.get('/', (req, res) => {
    let message = '<div style="background-color: lightyellow; color: blue;">Welcome to the Captain Log!'
    message += '<br><br><a  href="/logs"> Logs Index page 🚢 ⚓ </a>'  
    message += '<br><br>'    
    message += '<br><br><a  href="/foodlogs"> Food Logs Index page 🍕 ☕</a>'  
    res.send(message)
})
// GET /log/new
app.get('/logs/new', (req, res) => {
    res.render('New')
})

// DELETE
app.delete('/logs/:id', (req, res)=>{
    Log.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/logs') //redirect back to logs index
    })
})

// Update : Update this specific thing with this updated form 
// PUT 
app.put('/logs/:id', (req, res)=>{
    
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    Log.findByIdAndUpdate(req.params.id, req.body, (err, updatedLog)=>{
       console.log(updatedLog)
        res.redirect(`/logs/${req.params.id}`)
    })
})


// Create : Make a new thing with this filled out form 
//POST 
app.post('/logs', (req, res)=>{
    if(req.body.shipIsBroken === 'on'){ //if checked, req.body.shipIsBroken is set to 'on'
        req.body.shipIsBroken = true 
    } else { 
        req.body.shipIsBroken = false 
    }
   
    Log.create(req.body, (error, createdLog)=>{
        res.send(createdLog)
    });
    
    res.redirect('/logs'); //send the user back to /logs
})


// Edit : A prefilled form to update a specific thing 
// GET 
app.get('/logs/:id/edit', (req, res)=>{
    Log.findById(req.params.id, (err, foundLog)=>{ 
      if(!err){
        res.render(
    		  'Edit',
    		{
    			log: foundLog 
    		}
    	)
    } else {
      res.send({ msg: err.message })
    }
    })
})


//Show : Show me this one thing by ID
//GET 
app.get('/logs/:id', (req, res)=>{
    Log.findById(req.params.id, (err, foundLog)=>{
        res.render('Show', {
            log:foundLog
        })
    })
})

// FOOD LOGS PART

const Food = require('./models/foodlogs')

// Routes...

// Index : Show all the things!
app.get('/foodlogs', (req, res)=>{
    Food.find({}, (error, allFoods)=>{
        res.render('./layout/food/IndexFood', {
            foods: allFoods
        })
    })
})

// GET /log/new
app.get('/foodlogs/new', (req, res) => {
    res.render('./layout/food/NewFood')
})

// DELETE
app.delete('/foodlogs/:id', (req, res)=>{
    Food.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/foodlogs') //redirect back to  index
    })
})

// Update : Update this specific thing with this updated form 
// PUT 
app.put('/foodlogs/:id', (req, res)=>{
    
    if(req.body.haveFood === 'on'){
        req.body.haveFood = true
    } else {
        req.body.haveFood = false
    }
    Food.findByIdAndUpdate(req.params.id, req.body, (err, updatedFood)=>{
       console.log(updatedFood)
        res.redirect(`/foodlogs/${req.params.id}`)
    })
})

// Create : Make a new thing with this filled out form 
//POST 
app.post('/foodlogs', (req, res)=>{
    if(req.body.haveFood === 'on'){ 
        req.body.haveFood = true 
    } else { 
        req.body.haveFood = false 
    }
   
    Food.create(req.body, (error, createdFood)=>{
        res.send(createdFood)
    });
    
    res.redirect('/foodlogs'); //send the user back to /foodlogs
})

// Edit : A prefilled form to update a specific thing 
// GET 
app.get('/foodlogs/:id/edit', (req, res)=>{
    Food.findById(req.params.id, (err, foundFood)=>{ 
      if(!err){
        res.render(
    		  './layout/food/EditFood',
    		{
    			food: foundFood
    		}
    	)
    } else {
      res.send({ msg: err.message })
    }
    })
})

//Show : Show me this one thing by ID
//GET 
app.get('/foodlogs/:id', (req, res)=>{
    Food.findById(req.params.id, (err, foundFood)=>{
        res.render('./layout/food/ShowFood', {
            food:foundFood
        })
    })
})

// Listen port
app.listen(3004, () => {
    console.log('listening');
});