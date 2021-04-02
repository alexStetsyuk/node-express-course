const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const mockUserData = [{ name: 'Alex' }, { name: 'Sofia' }];

app.use(bodyParser.json());

app.get('/users', (req, res) => {
  res.json({
    success: true,
    message: 'successfully got users. Nice!',
    users: mockUserData,
  });
});

app.get('/users/:id', (req, res) => {
  res.json({
    success: true,
    message: 'got one user',
    user: req.params.id,
  });
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const mockUsername = 'billyTheKid';
  const mockPassword = 'superSecret';

  if (username === mockUsername && password === mockPassword) {
    res.json({
      success: true,
      message: 'password and user match!',
      token: 'encrypted token goes here',
    });
  } else {
    res.json({
      success: false,
      message: 'password and username do not match',
    });
  }
});

app.listen(8000, () => {
  console.log('server is running');
});
