const express = require("express");
const mysql = require("mysql2");
const path = require("path");

const app = express();

// CONFIGURACIÓN
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// CONEXIÓN A BD
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'node_crud',
    port: 3308
});

db.connect(err => {
    if (err) throw err;
    console.log("BD conectada");
});

// Middleware para compartir DB
app.use((req, res, next) => {
    req.db = db;
    next();
});

// RUTAS
app.use("/", require("./routes/loginRoutes"));
app.use("/users", require("./routes/userRoutes"));
app.use("/lista", require("./routes/listaRoutes"));

app.get("/", (req, res) => {
    res.render("principal");
});

app.get('/delete/:id',(req,res)=>{
    const {id}= req.params;
    const consultaElimina = 'DELETE FROM users WHERE id =?';
    db.query(consultaElimina,[id],(err)=>{
        if(err){
            console.error('Error',err);
            res.send('Error');
        }else{
            res.redirect('/');
        }
    });
});

app.post('/update/:id',(req,res)=>{
        const {id}=req.params;
        const {name, email} = req.body;
        const consultaUpdate='UPDATE users SET name = ?, email=? WHERE id=?';
        db.query(consultaUpdate,[name,email,id],(err)=>{
            if(err){
                console.error('Error',err);
                res.send('Error al actualizar');
            }else{
                res.redirect('/');
            }
        });

    } );

app.listen(3000, () => console.log("Servidor en http://localhost:3000"));
