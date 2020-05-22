module.exports = (app) => {
    const users = require('../controllers/UserController.js');

    // Create a new User
    app.post('/users', users.create);

    // Retrieve all Users
    app.get('/users', users.findAll);

    // Retrieve a single User with projectId
    app.get('/users/:projectId', users.findOne);

    // Update a User with projectId
    app.put('/users/:projectId', users.update);

    // Delete a User with projectId
    app.delete('/users/:projectId', users.delete);
}