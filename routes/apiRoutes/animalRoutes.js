const router = require('express').Router();
const { filterByQuery, findById, createNewAnimal, validateAnimal } = require('../../lib/animals');
const { animals } = require('../../data/animals');

// add the route (the get() method requires two arguments. The first is a string that describes the route the client will have to fetch from. The second is a callback function that will execute every time that route is accessed with a GET request. We are using the send () method from the res parameter (short for response) to send the string Hello! to our client.)
router.get('/animals', (req, res) => {
    let results = animals;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

router.get('/animals/:id', (req, res) => {
    const result = findById(req.params.id, animals);
    if (result) {
        res.json(result)
    } else {
        res.send(404);
    }
});

router.post('/animals', (req, res) => {
    //req.body is where our incoming content will be 
    //set id based on what the next index of the array will be
    req.body.id = animals.length.toString();

    // if any data in req.body is incorrect, send 400 error back
    if (!validateAnimal(req.body)) {
        res.status(400).send('The animal is not properly formatted.');
    } else {
        // add animal to json file and animals array in this function
        const animal = createNewAnimal(req.body, animals);
        // console.log(req.body);
        res.json(animal);
    }
});

//export router
module.exports = router;