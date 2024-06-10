const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


// TODO: This route adds a new feedback entry
router.post('/', (req, res) => {
    console.log('POST/feedback req.body', req.body);
    const feedbackToAdd = req.body;
    const sqlText = `
        INSERT INTO "feedback" 
            ("feeling","understanding","support","comments")
            VALUES 
            ($1,$2,$3,$4);
            
            `
const sqValues = [feedbackToAdd.feeling, feedbackToAdd.understanding, feedbackToAdd.support, feedbackToAdd.comments]
    pool.query(sqlText, sqValues)
        .then((result) => {
            console.log('added this feedback to the database', feedbackToAdd);
            res.sendStatus(201);
        })
        .cathc((error) => {
            console.log(`Error making database query ${sqlText}:`, error);
            res.sendStatus(500); // Good server always respond
        })
})


// DO NOT EDIT THIS ROUTE
// This route must return all feedback.
router.get('/', (req, res) => {
    console.log('testing')
    const sqlText = `SELECT * FROM "feedback" ORDER BY "id"`;
    pool.query(sqlText).then(result => {
        res.send(result.rows)
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = router;
