const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 52273;

app.use(bodyParser.json());

// 임시 데이터
let students = [
  { name: '홍길동', major: '컴퓨터 공학', studentNumber: 's20210001' },
  { name: '김철수', major: '전자 공학', studentNumber: 's20210002' },
  { name: '이영희', major: '경영학', studentNumber: 's20210003' }
];

// GET - 특정 인덱스의 학생 정보 조회
app.get('/students/:index', (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < students.length) {
    const { name, major, studentNumber } = students[index];
    res.json({ name, major, studentNumber });
  } else {
    res.status(404).send('학생을 찾을 수 없습니다.');
  }
});


// POST - 학생 추가
app.post('/students', (req, res) => {
  const { name, major, studentNumber } = req.body;
  const student = { name, major, studentNumber };

  students.push(student);
  res.json(student);
});



// PUT - 학생 정보 수정
app.put('/students/:index', (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < students.length) {
    const { name, major, studentNumber } = req.body;
    students[index] = { name, major, studentNumber };
    res.json(students[index]);
  } else {
    res.status(404).send('학생을 찾을 수 없습니다.');
  }
});

// DELETE - 학생 삭제
app.delete('/students/:index', (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < students.length) {
    const deletedStudent = students.splice(index, 1);
    res.json(deletedStudent[0]);
  } else {
    res.status(404).send('학생을 찾을 수 없습니다.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
