const express = require('express');
const path = require('path');
const skills = require('./data/skills.json');
const projects = require('./data/projects.json');

const app = express();
const PORT = process.env.PORT || 3333;
const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));

app.get('/portfolio/api/skills', (req, res) => {
  res.header('Content-Type', 'application/json');
  res.json(skills);
});

app.get('/portfolio/api/projects', (req, res) => {
  res.header('Content-Type', 'application/json');
  res.json(projects);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log('Server is running');
});
