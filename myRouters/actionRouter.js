const express = require('express')

const actions = require('../data/helpers/actionModel.js')

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const action = await actions.get(req.params.id)
        res.status(200).json(action);
        
    }
    catch (error) {
        res.status(500).json({ error: "The project information could not be retrieved." });
    };
});

router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        if (req.body.description === '' || req.body.notes === '') {
            res.status(400).json({ errorMessage: "Please provide title and contents for the post." })
        }
        else {
            const action = await actions.insert(req.body)
            console.log(action)


            res.status(201).json(action);
        }

    }
    catch (error) {
        res.status(500).json({ error: "There was an error while saving the post to the database" });

    }
});

router.put('/:id', async (req, res) => {
    try {
        console.log(req.body)

        if (req.body.description === '' || req.body.notes === '') {
            res.status(400).json({ errorMessage: "Please provide title and contents for the post." })
        }

        else {
            const action = await actions.update(req.params.id, req.body);
            if (action) {

                res.status(200).json(action);
            }
            else {
                res.status(404).json({ message: "The post with the specified ID does not exist." })
            }
        }
        
    }
    catch (error) {
        res.status(500).json({ error: "The post information could not be modified." });
    };

})

router.delete('/:id', async (req, res) => {
    try {
        const count = await actions.remove(req.params.id);
        if (count > 0) {
            res.status(200).json()
        }
        else {
            res.status(404).json({ message: "The post with the specified ID does not exist." })
        }
    }
    catch {
        res.status(500).json({ error: "The post could not be removed" })
    }
});
module.exports = router;