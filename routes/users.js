import express from 'express'

import {getAllUsers, getUser, createUser, deleteUser, patchUser} from
    '../controllers/users.js';

const router = express.Router();

//All routes in this file, start with /users

//GET requests to /users/
router.get('/', getAllUsers);

//GET request to an specific /user by ID
router.get('/:id', getUser);

//POST requests to /users/
router.post('/', createUser);

//DELETE user specified by :id
router.delete('/:id', deleteUser);

//PATCH user ID by body args
router.patch('/:id', patchUser)

export default router;