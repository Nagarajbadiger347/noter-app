const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON in request body
app.use(express.json());

// Sample in-memory data store (for demonstration)
const notes = [];

// Sample data (for demonstration)
notes.push({ id: '1', title: 'Sample Note 1', content: 'This is the content of note 1' });
notes.push({ id: '2', title: 'Sample Note 2', content: 'This is the content of note 2' });

// Route to get all notes
app.get('/notes', (req, res) => {
  res.json(notes);
});

// Route to get welcome note
app.get('/', (req, res) => {
  res.send('Welcome to the Noter application!......... Nagaraj');
});

// Route to create a new note
app.post('/notes', (req, res) => {
  const newNote = req.body;
  notes.push(newNote);
  res.status(201).json(newNote);
});

// Route to serve the file content
app.get('/readme', (req, res) => {
  // Read the file content (change 'my_file.txt' to your file's name)
  fs.readFile('readme.txt', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading the file');
    } else {
      res.send(data);
    }
  });
});

// Route to get a specific note by ID
app.get('/notes/:id', (req, res) => {
  const noteId = req.params.id;
  const note = notes.find((n) => n.id === noteId);
  if (!note) {
    res.status(404).json({ error: 'Note not found' });
  } else {
    res.json(note);
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Express server is listening on port ${port}`);
});

