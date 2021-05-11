const path = require('path');
const router = require('express').Router();

// get index.html connected
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});

//get animals.html connected
router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/animals.html"));
});
// get zookepers.html connected
router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/zookeepers.html"));
});

// if a client makes a request for a route that doesn't exist. The * will act as a wildcard, meaning any route that wasn't previously defined will fall under this request and will receive the homepage as the response.
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});

module.exports = router;