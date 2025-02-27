const { Router } = require('express');

const router = new Router();
    
router.get("/", (req, res) => {
   return res.send("Ola")
})

module.exports = router;