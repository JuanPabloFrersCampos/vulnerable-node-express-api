import {v4 as uuidv4} from 'uuid'; //unique ID library

var users = []

export const getAllUsers = (req, res) => {
    res.send(users);
}

//Returns a specific user by ID
export const getUser = (req, res) => {
    const id = req.params.id;
    
    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
}

//POST requests to create an user
export const createUser = (req, res) => {
    const user = req.body;
    const uniqueId = uuidv4();

    //Create the user with an unique ID
    users.push({ ...user, id: uniqueId}); 

    res.send(`User with the name ${user.firstName} ${user.lastName} 
    and ID ${uniqueId} added to the database.`)
}

//DELETE user specified by :id
export const deleteUser = (req, res) => {
    const id = req.params.id;
    users = users.filter(user => user.id !== id);
    res.send(`User with id ${id} deleted from the database`)
}

//PATCH user by ID, using body args
export const patchUser = (req, res) => {
    const id = req.params.id;
    const { firstName, lastName, age} = req.body;
    const user = users.find(user => user.id === id);

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;

    res.send("Ùser updated");
}