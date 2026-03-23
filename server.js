import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'views')); // folder containing EJS files

// Serve static files (like CSS)
app.use(express.static(path.join(process.cwd(), 'public')));

// Route for index
app.get('/', (req, res) => {
  res.render('index', { title: 'Elective 3 Website' }); // pass data to EJS
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});