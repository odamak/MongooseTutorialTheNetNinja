import express from 'express';
import Ninja from '../models/ninja';
const router = express.Router();


// get a list of ninjas from the db
router.get('/ninjas', (req, res, next)=> {
    /*Ninja.find({"geometry.coordinates" : [ req.query.lng, req.query.lat ]}).then((ninja)=>{
        console.log(`"geometry" : {"coordinates" : [ ${req.query.lng} , ${req.query.lat} ]}`);
        res.send(ninja);
    }).catch(next);*/
    Ninja.find({}).then((ninja)=>res.send(ninja));
    // console.log("**Request of get**");
    // console.log(req);
    // console.log("***Response of get***")
    // console.log(res);
});

// get a list of ninjas from the db using geoNear
router.get('/ninjas/geoNear', (req, res, next)=> {
    Ninja.geoNear(
        {type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
        {maxDistance: 100000, spherical: true}
    ).then((ninjas)=>{
        res.send(ninjas);
    }).catch(next);
});

// add a new ninja to the db
router.post('/ninjas', (req, res, next)=> {
    // var ninja = new Ninja(req.body);
    // ninja.save();
    Ninja.create(req.body).then((ninja)=>{
        res.send(ninja);
    }).catch(next);
    // res.send({
    //     type:'POST',
    //     name: req.body.name,
    //     rank: req.body.rank
    // });
});

// update a ninja in the db
router.put('/ninjas/:id', (req, res, next) => {
    Ninja.findByIdAndUpdate({ _id: req.params.id},req.body).then(() => {
        //following will not work, because will send back old values
        //res.send(ninja)
        //instead we need to request the db
        Ninja.findOne({_id: req.params.id}).then((ninja)=>{
            res.send(ninja);            
        }).catch(next);
}).catch(next);
});

// delete a ninja from the db
router.delete('/ninjas/:id', (req, res, next)=> {
    console.log("***running DELETE REQUEST***");
    // console.log(req.params.id);
    Ninja.findByIdAndRemove({ _id: req.params.id}).then((ninja) => {
        res.send({ninja})
        }).catch(next);
});

module.exports = router;