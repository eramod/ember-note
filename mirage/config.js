export default function() {
  this.post('/users');
  this.get('/users', (schema, request) => {
    return schema.users.findBy({name: request.queryParams.name})
  })

  this.get('/notebooks');
  this.get('/notebooks/:id');
  this.put('/notebooks/:id');
  this.post('/notebooks');
  this.del('/notebooks/:id');

  this.get('/notes');
  this.get('/notes/:id');
  this.put('/notes/:id');
  this.post('/notes');
  this.del('/notes/:id');

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
}
