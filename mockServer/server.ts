const mockData = require('./mockData');

const express = require('express');
const app = express();
const cors = require('cors');

const PORT = 3000; // 포트 번호를 원하는 숫자로 변경 가능

// 데이터를 저장할 배열 (임시로 메모리에 저장)
app.use(cors());
// Parse incoming JSON data
app.use(express.json());

// 새로운 메모리 추가
app.post('/memories', (req, res) => {
  const newMemory = req.body;
  mockData.push(newMemory);
  res.status(201).json({ message: 'Memory added successfully' });
});

// 모든 메모리 조회
app.get('/memories', (req, res) => {
  const { page = 1 } = req.query;
  // params로 'memories?min=1&max=3&category=cafe&page=0&size=10'와 같이 전달된 쿼리스트링을 받아올 수 있음
  const { min, max, category, size } = req.query;

  const pageSize = 10; // 페이지당 항목 수
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // 전체 데이터 배열
  const allMemories = mockData.memories;

  // 현재 페이지에 해당하는 데이터 추출
  const paginatedMemories = allMemories
    .filter((memory) => {
      if (min && max) {
        return memory.star >= min && memory.star <= max;
      }
      if (min) {
        return memory.star >= min;
      }
      if (category) {
        return memory.category === category;
      }
      return true;
    })
    .slice(startIndex, endIndex);

  // 전체 페이지 수 계산
  const totalPages = Math.ceil(allMemories.length / pageSize);

  // 응답 데이터 구성
  const response = {
    data: paginatedMemories,
    nextPage: page < totalPages ? parseInt(page) + 1 : null,
    totalPages,
  };

  res.status(200).json(response);
});

// 특정 메모리 조회
app.get('/memory/:id', (req, res) => {
  const { id } = req.params;
  const memory = mockData.memories.find((memory) => memory.id === id);
  res.status(200).json(memory);
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
