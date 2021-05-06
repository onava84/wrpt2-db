const express = require('express');
const massive = require('massive');
require('dotenv').config();
const { addCharacter, getCharacter, getAllCharacters } = require('./charactersController')

const app = express();

// const PORT = 5555;

app.use(express.json());

massive({
   connectionString: process.env.CONNECTION_STRING,
   ssl: {
      rejectUnauthorized: false,
   }
}).then((dbInstance) => {
   app.set('db', dbInstance); 
   console.log('Successfuly connected with database')
})
.catch((e) => {
   console.log(e);
   return e;
})

app.post('/api/characters', addCharacter)
app.get('/api/characters/:id', getCharacter)
app.get('/api/characters', getAllCharacters)

app.listen(process.env.PORT, () => {
   console.log(`app running on port ${process.env.PORT}`)
})