const router = require("express").Router();

function requireLogin(req, res, next) {
    if (req.session.currentUser) {
        next();
    } else {
        res.redirect("/login");
    }
}

router.get("/public", (req, res) => {
    res.render("rooms/public");
});

router.get("/private", requireLogin, (req, res) => {
    res.render("rooms/private");
});

module.exports = router;