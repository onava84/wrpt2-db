
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
   }
}