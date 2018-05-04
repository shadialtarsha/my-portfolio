const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const skills = require('./data/skills.json');
const projects = require('./data/projects.json');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3333;

const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/sendmail', (req, res) => {
  const html = `
    <h2>${req.body.name}</h2>
    <h3>${req.body.email}</h3>
    <p>${req.body.message}</p>
  `;

  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true,
    auth: {
      user: 'portfolio@shadialtarsha.com',
      pass: ';A#%]`PSuS2~UxRt',
    },
  });

  const mailOptions = {
    from: 'portfolio@shadialtarsha.com',
    to: 'work@shadialtarsha.com',
    subject: 'From my portfolio',
    html,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log(`Message sent: ${info.response}`);
  });
});

app.get('/api/skills', (req, res) => {
  res.header('Content-Type', 'application/json');
  res.json(skills);
});

app.get('/api/projects', (req, res) => {
  res.header('Content-Type', 'application/json');
  res.json(projects);
});

app.get('/portfolio/resume', (req, res) => {
  res.download('./server/data/cv.pdf', 'Shadi Al-Tarsha.pdf');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log('Server is running');
});
