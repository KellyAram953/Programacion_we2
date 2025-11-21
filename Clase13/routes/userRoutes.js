const express = require("express");
const router = express.Router();

//  FORMULARIO PARA CREAR USUARIO
router.get("/nuevo", (req, res) => {
    res.render("user_new", { mensaje: null });
});

//  GUARDAR USUARIO EN BD
router.post("/add", (req, res) => {
    const { name, email, password } = req.body;
    const q = "INSERT INTO users (name, email, password) VALUES (?,?,?)";

    req.db.query(q, [name, email, password], (err, result) => {
        if (err) throw err;

        res.render("user_new", { mensaje: "Usuario guardado correctamente" });
    });
});

// MOSTRAR LISTA DE USUARIOS
router.get("/", (req, res) => {
    const q = "SELECT * FROM users";

    req.db.query(q, (err, results) => {
        if (err) throw err;

        res.render("use_lista", { users: results });
    });
});

module.exports = router;













