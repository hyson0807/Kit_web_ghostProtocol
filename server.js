import express from 'express';
import { MongoClient } from 'mongodb';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import cors from 'cors';

dotenv.config(); // .env 파일 로드

const app = express();
app.use(cors());
app.use(bodyParser.json()); // JSON 파싱 미들웨어 추가

let db;
const url = process.env.MONGO_URI;

new MongoClient(url).connect().then((client) => {
  console.log('DB연결성공');
  db = client.db('sur');

  app.listen(8080, () => {
    console.log('http://localhost:8080 에서 서버 실행중');
  });
}).catch((err) => {
  console.log(err);
});

app.post('/submit', (req, res) => {
    console.log("123");
  const { email, content } = req.body;

  if (!email || !content) {
    return res.status(400).json({ error: 'Email and content are required' });
  }

  db.collection('content')
    .insertOne({ email, content, createdAt: new Date() })
    .then((result) => {
      res.status(201).json({ message: 'Submission saved successfully!', id: result.insertedId });
    })
    .catch((error) => {
      console.error('Error saving submission:', error);
      res.status(500).json({ error: 'Failed to save submission' });
    });
});
