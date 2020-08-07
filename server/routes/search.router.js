const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {default: axios} = require('axios');

console.log('search API key:', process.env.GOOGLE_API_KEY)
/**
 * GET route template
 */
router.get('/', (req, res) => {
  console.log('hit server with:', req.query);
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.query.search}&key=${process.env.GOOGLE_API_KEY}`)
      .then((response)=>{
          // console.log('sending back:', response.data)
          res.send(response.data);
      })
      .catch((error)=>{
          console.log('error with / get', error);
          res.sendStatus(500);
      })
})

// const bookId = 'ia7xAwAAQBAJ';
router.get('/details/:id', (req, res) => {
  console.log('hit server with id:', req.params.id);
  axios.get(`https://www.googleapis.com/books/v1/volumes/${req.params.id}?key=${process.env.GOOGLE_API_KEY}`)
      .then((response)=>{
          // console.log('sending back ID get:', response.data)
          res.send(response.data);
      })
      .catch((error)=>{
          console.log('error getting /details get', error);
          res.sendStatus(500);
      })
})

/**
 * POST route template
 */
// router.post('/', (req, res) => {
//     console.log('====>posting:', req.body)
// });
router.post('/', (req, res) => {
    console.log('update attempt:', req.body)
    const queryText = `INSERT INTO "book" ("title", "author", "publisher", "publish_date", "description", "page_count", "img_url")
    VALUES ($1, $2, $3, $4, $5, $6, $7)`;
    pool.query(queryText, [req.body.title, req.body.author, req.body.publisher, req.body.publishDate, req.body.description, req.body.pageCount, req.body.imgUrl])
    .then(response => {
        res.sendStatus(200);
    }).catch( error => {
        console.log( 'ERROR POSTING BOOK', error );
        res.sendStatus( 500 );
    })
  })

module.exports = router;