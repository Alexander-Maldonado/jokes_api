const JokeController = require('../controllers/jokes.controllers');

module.exports = (app) =>{
    app.get('/api/jokes', JokeController.findAllJokes);
    app.post('/api/jokes', JokeController.createNewJoke);
    app.get('/api/jokes/:_id', JokeController.findJokeById);
    app.put('/api.jokes/:_id', JokeController.updateJoke);
    app.delete('/api/jokes/:_id', JokeController.deleteJoke);
};