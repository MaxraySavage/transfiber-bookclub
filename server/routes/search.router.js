const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {default: axios} = require('axios');

console.log('search API key:', process.env.GOOGLE_API_KEY)
/**
 * GET route template
 */
router.get('/', (req, res) => {
  console.log('hit server');
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.query.search}&key=${process.env.GOOGLE_API_KEY}`)
      .then((response)=>{
          console.log('sending back:', response.data)
          res.send(response.data);
      })
      .catch((error)=>{
          console.log('error getting trending', error);
          res.sendStatus(500);
      })
})

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;