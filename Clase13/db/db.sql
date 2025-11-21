DROP DATABASE IF EXISTS node_crud;
CREATE DATABASE node_crud;
USE node_crud;

-- Tabla principal de usuarios (coincide con las vistas)
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
);

-- Si deseas seguir usando una lista (tu vista "lista.ejs" hace referencia a esto)
CREATE TABLE lista (
    id INT PRIMARY KEY AUTO_INCREMENT,
    descripcion VARCHAR(200) NOT NULL,
    estado VARCHAR(20) NOT NULL
);
