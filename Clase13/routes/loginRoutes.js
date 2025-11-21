const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
    res.render("login", { error: null });
});

router.post("/login", (req, res) => {
    const { email, password } = req.body;

    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";

    req.db.query(sql, [email, password], (err, results) => {
        if (err) throw err;

        if (results.length > 0) {
            return res.redirect("/lista");
        }

        res.render("login", { error: "Contraseña incorrecta" });
    });
});

module.exports = router;







