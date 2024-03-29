/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
server.use(async (req, res, next) => {
  await new Promise((result) => {
    setTimeout(result, 800);
  });
  next();
});

// Эндпоинт для логина
server.post('/login', (req, res) => {
  try {
    const { username, password } = req.body;
    const db = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'),
    );
    const { users = [] } = db;

    const userFromBd = users.find(
      (user) => user.username === username && user.password === password,
    );

    if (userFromBd) {
      return res.json(userFromBd);
    }

    return res.status(403).json({ message: 'User not found' });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
});

// server.post('/users', (req, res) => {
//   try {
//     const { username } = req.body;
//     const db = JSON.parse(
//       fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'),
//     );
//     const { users = [] } = db;

//     const userExists = users.find((user) => user.username === username);

//     if (!userExists) {
//       fetch('http://localhost:8000/users', req.body);
//       return res.json(userExists);
//     }

//     return res.status(403).json({ message: 'User already exists' });
//   } catch (e) {
//     return res.status(500).json({ message: e.message });
//   }
// });

// проверяем, авторизован ли пользователь
// eslint-disable-next-line
server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'AUTH ERROR' });
  }

  next();
});

server.use(router);

// запуск сервера
server.listen(8000, () => {
  console.log('server is running on 8000 port');
});
