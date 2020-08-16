const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT id, username FROM "user";`
  pool.query(queryText)
    .then(result => {
      res.send(result.rows);
    }).catch(error=>{
      console.log('Error getting users', error);
      res.sendStatus(500);
    })
})

router.get('/collection', rejectUnauthenticated, (req, res) => {
  console.log('community collection GET with user id:', req.query.search)
  const queryText = `SELECT * FROM "collection" JOIN book on collection.book_id = book.id WHERE user_id = $1;`
  pool.query(queryText, [req.query.search])
    .then(result => {
      // console.log('======>:', result.rows)
      res.send(result.rows);
  }).catch(error=>{
      console.log('Error getting from database', error);
      res.sendStatus(500);
  })
})

/**
 * POST route template
 */
router.post('/', (req, res) => {

}); 

module.exports = router;