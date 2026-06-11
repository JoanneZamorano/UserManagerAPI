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

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
}); 