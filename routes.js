var captain = require('./controllers/captain');

module.exports = (app) =>{
  
  app.get('/', (req, res) =>{
    res.sendFile('index.html', {root : './public'})
  });
  app.get('/seville', (req, res) =>{
    res.sendFile('seville.html', {root : './public/destinations'})
  });
  app.get('/canaryislands', (req, res) =>{
    res.sendFile('canaryislands.html', {root : './public/destinations'})
  });
  app.get('/capeverde', (req, res) =>{
    res.sendFile('capeverde.html', {root : './public/destinations'})
  });
  app.get('/straitofmagellan', (req, res) =>{
    res.sendFile('straitofmagellan.html', {root : './public/destinations'})
  });
  app.get('/gaum', (req, res) =>{
    res.sendFile('gaum.html', {root : './public/destinations'})
  });
  app.get('/phillipines', (req, res) =>{
    res.sendFile('phillipines.html', {root : './public/destinations'})
  });
}