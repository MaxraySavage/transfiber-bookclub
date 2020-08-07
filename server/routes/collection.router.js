const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  console.log('collection GET with user id:', req.query.search);
  const queryText = `SELECT * FROM "collection" JOIN book on collection.book_id = book.id WHERE user_id = $1;`
  pool.query(queryText, [req.query.search])
  .then(result => {
      console.log('======>:', result.rows)
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