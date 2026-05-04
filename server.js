const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Melayani file statis (HTML, CSS, JS, Images)
app.use(express.static(path.join(__dirname, 'public')));

// Route utama
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Contoh API untuk data proyek (Opsional)
app.get('/api/projects', (req, res) => {
    const projects = [
        { id: 1, title: "Smart Agriculture", category: "IoT" },
        { id: 2, title: "E-Commerce", category: "Web" }
    ];
    res.json(projects);
});

app.listen(PORT, () => {
    console.log(`Server portofolio berjalan di http://localhost:${PORT}`);
});