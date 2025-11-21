const express = require("express");
const router = express.Router();

// Página principal de lista
router.get("/", (req, res) => {
    const sql = "SELECT * FROM lista";
    req.db.query(sql, (err, resultados) => {
        if (err) throw err;
        res.render("lista", { datos: resultados });
    });
});

// Guardar nuevo registro
router.post("/agregar", (req, res) => {
    const { nombre, correo, institucion } = req.body;
    const sql = "INSERT INTO lista (nombre, correo, institucion) VALUES (?, ?, ?)";
    req.db.query(sql, [nombre, correo, institucion], (err) => {
        if (err) throw err;
        res.redirect("/lista");
    });
});

// Eliminar registro sin recargar
router.post("/eliminar/:id", (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM lista WHERE id = ?";
    req.db.query(sql, [id], (err) => {
        if (err) throw err;
        res.json({ success: true });
    });
});

// Actualizar cualquier campo (nombre, correo o institucion)
router.post("/actualizar/:campo/:id", (req, res) => {
    const { campo, id } = req.params;
    const { nuevoValor } = req.body;

    if (!["nombre","correo","institucion"].includes(campo)) return res.status(400).send("Campo no permitido");

    const sql = `UPDATE lista SET ${campo}=? WHERE id=?`;
    req.db.query(sql, [nuevoValor, id], (err) => {
        if (err) throw err;
        res.json({ success: true });
    });
});

module.exports = router;




