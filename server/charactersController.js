
module.exports = {
   addCharacter: (req, res) => {
      // resources
      const { name,age,isForceSensitive } = req.body;
      const db = req.app.get('db')
      // // logic
      console.log(db,name,age,isForceSensitive)
      db.add_character(name,age,isForceSensitive)
      .then(() => {
         res.sendStatus(200);
      })
      .catch((e) => {
         res.status(500).send(e)
      })
      // response
      // res.sendStatus(200)
   },
   getAllCharacters: (req, res) => {
      const db = req.app.get('db')
      db.get_characters().then((character) => {
         res.status(200).send(character)
      }).catch((e) => {
         res.status(500).send(e)
      })
   },
   getCharacter: (req, res) => {
      const {id} = req.params
      const db = req.app.get('db')

      db.get_character(id).then((character) => {
         res.status(200).send(character)
      }).catch((e) => {
         res.status(500).send(e)
      })
   },
   deleteCharacter: (req, res) => {
      const {id} = req.params
      const db = req.app.get('db')
      db.delete_character(id).then(() => {
         res.status(200)
      }).catch((e) => {
         res.status(500).send(e)
      })
   },
}