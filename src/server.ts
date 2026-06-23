import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

// --- Tarea libre 1: Personalizar el mensaje inicial ---
app.get("/", (req, res) => {
    res.json({
        name: "UserManager API",
        version: "1.0.0",
        status: "running",
        author: "Joanne Zamorano", 
        fecha: "11-06-2026"
    });
});

// --- Tarea libre 2: Añadir una segunda ruta temporal ---
app.get("/api/info", (req, res) => {
    res.json({
        project: "UserManager API",
        description: "API REST para gestionar usuarios",
        day: 2,
        technologies: ["Node.js", "Express", "TypeScript"]
    });
});

// --- Dia 3: Añadir ruta health ---
app.get("/api/health", (req, res) => {
        res.status(200).json({
            status: "ok",
            message: "UserManager API funcionando",
            timestamp: new Date().toISOString()
        });
});

// --- Dia 3: Parte libre ---
app.get("/api/ping", (req, res) => {
    res.json({
        message: "Pong"
    });
});

//Dia 4: GET Users
app.get("/api/users", (req, res) => {
    res.status(200).json({
        message: "Listado de usuarios",
        data: []
    });
});

//Dia 4: POST Users
app.post("/api/users", (req, res) => {
    const userData = req.body;
        res.status(201).json({
        message: "Usuario recibido para crear",
        data: userData
    });
});

//Dia 4: PATCH Users
app.patch("/api/users/:id", (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    res.status(200).json({
        message: "Usuario recibido para actualizar",
        id: id,
        changes: changes
    });
});

//Dia 4: DELETE Users
app.delete("/api/users/:id", (req, res) => {
    const { id } = req.params;

    res.status(200).json({
        message: "Usuario recibido para eliminar o desactivar",
        id: id
    });
});

//Dia 4: Prueba libre - GET me
app.get("/api/users/me", (req, res) => {
    res.status(200).json({
        "id": 1,
        "name": "Joanne Zamorano",
        "email": "joa@email.com",
        "role": "USER",
        "isActive": true
    });
});

//Tarea libre 2: Añadir una ruta para cambiar estado
app.patch("/api/users/:id/status", (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    res.status(200).json({
        "message": "Estado de usuario recibido para actualizar",
        "id": "1",
        "isActive": false
    });
});

//Tarea libre 3: Añadir una ruta para cambiar rol
app.patch("/api/users/:id/role", (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    res.status(200).json({
        "message": "Rol de usuario recibido para actualizar",
        "id": "1",
        "role": "ADMIN"
    });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
}); 