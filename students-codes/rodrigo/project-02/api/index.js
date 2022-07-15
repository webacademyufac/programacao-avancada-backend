const express = require('express');
const bodyParser = require('body-parser');

const Site = require('./models/Site');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/insert/', async (req, res) => {
   const { name, url } = req.body;

   const site = {
      name,
      url
   };
   
   try {
      await Site.create(site);
      res.status(200);
   } catch (err) {
      res.status(500).send({ error: err.message });
   }
});

app.listen(port);