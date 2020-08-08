const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  console.log('collection GET with user id:', req.user.id);
  const queryText = `SELECT * FROM "collection" JOIN book on collection.book_id = book.id WHERE user_id = $1;`
  pool.query(queryText, [req.user.id])
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
// router.delete('/', (req, res) => {
//   // console.log('====>DELETE ROUTE', req.params )
//   const queryText = 'DELETE FROM collection WHERE book_id=$1 AND user_id=$2;';
//   pool.query(queryText, [req.query[0], req.query[1]]).then( result => {
//       res.sendStatus(200);
//   }).catch( error => {
//       console.log( 'ERROR DELETING COLLECTION ITEM -------------->', error );
//       res.sendStatus( 500 );
//   })
// })

router.delete('/:id', rejectUnauthenticated, (req, res) => {
  console.log('====>DELETE ROUTE', req.params, req.user )
  const queryText = 'DELETE FROM collection WHERE book_id=$1 AND user_id=$2;';
  pool.query(queryText, [req.params.id, req.user.id]).then( response => {
      res.sendStatus(200);
  }).catch( error => {
      console.log( 'ERROR DELETING COLLECTION ITEM', error );
      res.sendStatus( 500 );
  })
})

router.put('/complete/:id', rejectUnauthenticated, (req, res) => {
  console.log('Marking as complete:', req.params)
  const queryText = `UPDATE collection SET is_complete = TRUE WHERE book_id = $1 AND user_id = $2;`;
  pool.query(queryText, [req.params.id, req.user.id]).then( response => {
    res.sendStatus(200);
  }).catch(error=>{
    console.log('ERROR UPDATING BOOK ITEM', error);
    res.sendStatus(500);
  })
}) 

router.put('/startover/:id', rejectUnauthenticated, (req, res) => {
  console.log('Marking as not complete:', req.params)
  const queryText = `UPDATE collection SET is_complete = FALSE WHERE book_id = $1 AND user_id = $2;`;
  pool.query(queryText, [req.params.id, req.user.id]).then( response => {
    res.sendStatus(200);
  }).catch(error=>{
    console.log('ERROR UPDATING BOOK ITEM', error);
    res.sendStatus(500);
  })
}) 
// router.put('/', (req, res) => {
//   const queryText = `UPDATE movies SET description = $1 WHERE id = $2;`
//   pool.query(queryText, [req.body[0], req.body[1]])
//   .then(response => {
//       res.sendStatus(200);
//   }).catch( error => {
//       console.log( 'ERROR UPDATING DESCRIPTION', error );
//       res.sendStatus( 500 );
//   })
// })

module.exports = router;