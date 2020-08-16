const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const {default: axios} = require('axios');

// get results from the API
router.get('/', (req, res) => {
  console.log('hit server with:', req.query);
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.query.search}&key=${process.env.GOOGLE_API_KEY}&maxResults=40`)
      .then((response)=>{
          // console.log('sending back:', response.data)
          res.send(response.data);
      })
      .catch((error)=>{
          console.log('error with / get', error);
          res.sendStatus(500);
      })
})
// get item details from API search results
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

// get results from database
router.get('/db', (req, res) => {
    console.log('searching database with:', req.query.search);
    const queryText = `SELECT * FROM book WHERE title=$1;`;
    pool.query(queryText, [req.query.search])
    .then(result => {
        res.send(result.rows);
    }).catch(error=>{
        console.log('Error getting from database', error);
        res.sendStatus(500);
    })
})

router.get('/details/db/:id', (req, res) => {
    const queryText = `SELECT * FROM book WHERE id=$1;`;
    pool.query(queryText, [req.params.id])
    .then(result => {
        res.send(result.rows);
    }).catch(error=>{
        console.log('Error getting item from database', error);
        res.sendStatus(500);
    })
})


/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('update attempt:', req.body)
    const queryText = `WITH ins1 AS (
        INSERT INTO "book" ("api_id", "title", "author", "publisher", "publish_date", "description", "page_count", "img_url")
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
            RETURNING id
        )
        INSERT INTO "collection" (book_id, user_id)
            VALUES ((SELECT id FROM ins1), $9);`;
    pool.query(queryText, [req.body.api_id, req.body.title, req.body.author, req.body.publisher, req.body.publishedDate, req.body.description, req.body.pageCount, req.body.imgUrl, req.body.user_id])
    .then(response => {
        res.sendStatus(200);
    }).catch( error => {
        console.log( 'ERROR POSTING BOOK', error );
        res.sendStatus( 500 );
    })
  })


module.exports = router;