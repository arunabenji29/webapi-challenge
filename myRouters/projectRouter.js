const express = require('express')

const projects = require('../data/helpers/projectModel.js')

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const project = await projects.get(req.params.id)
        console.log('get all projects ',project)
        res.status(200).json(project);
        
    }
    catch (error) {
        res.status(500).json({ error: "The project information could not be retrieved." });
    };
});

router.get('/:id/actions', async (req, res) => {
    try {
        const project = await projects.getProjectActions(req.params.id)
        console.log('get actions for a project ',project)
        res.status(200).json(project);
        
    }
    catch (error) {
        res.status(500).json({ error: "The project information could not be retrieved." });
    };
});

router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        if (req.body.name === '' || req.body.description === '') {
            res.status(400).json({ errorMessage: "Please provide title and contents for the post." })
        }
        else {
            const project = await projects.insert(req.body)
            console.log(project)


            res.status(201).json(project);
        }

    }
    catch (error) {
        res.status(500).json({ error: "There was an error while saving the post to the database" });

    }
});

router.put('/:id', async (req, res) => {
    try {
        console.log(req.body)

        if (req.body.name === '' || req.body.description === '') {
            res.status(400).json({ errorMessage: "Please provide title and contents for the post." })
        }

        else {
            const project = await projects.update(req.params.id, req.body);
            if (project) {

                res.status(200).json(project);
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
        const count = await projects.remove(req.params.id);
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