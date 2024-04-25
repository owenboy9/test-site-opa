import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join, parse } from 'path';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, '../frontend/index.html'));
}
);

app.get('/about', (req, res) => {
    res.sendFile(join(__dirname, '../frontend/about.html'));
}
);

app.get('/contact', (req, res) => {
    res.sendFile(join(__dirname, '../frontend/contact.html'));
}
);

app.get('/courses', (req, res) => {
    res.sendFile(join(__dirname, '../frontend/courses.html'));
}
);

express.static(join(__dirname, '../frontend'));

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});