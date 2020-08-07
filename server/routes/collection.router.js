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

// delete route
router.delete('/', (req, res) => {
  // console.log('====>DELETE ROUTE', req.params )
  const queryText = 'DELETE FROM collection WHERE book_id=$1 AND user_id=$2;';
  pool.query(queryText, [req.query[0], req.query[1]]).then( result => {
      res.sendStatus(200);
  }).catch( error => {
      console.log( 'ERROR DELETING COLLECTION ITEM -------------->', error );
      res.sendStatus( 500 );
  })
})


module.exports = router;