const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home/home");
});

/* spring
 * @getmapping("/")
    public void name(request req, response res){
        return "home/home"
    }
 */

module.exports = router;
