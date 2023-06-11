var http = require('http');
var express = require('express');

var items = [
  [
    { name: '우유', price: '2000' },
    { name: '홍차', price: '5000' },
    { name: '커피', price: '5000' }
  ],
  [
    { name: '단팥빵', price: '3000' },
    { name: '소보루빵', price: '4000' },
    { name: '바게트', price: '6000' }
  ]
];

var app = express();
var router = express.Router();

app.use(express.static('public'));
app.use(router);
// 라우트합니다.
app.all('/data.html', function (request, response) {
  var output = '';
  output += '<!DOCTYPE html>';
  output += '<html>';
  output += '<head>';
  output += '    <title>Data HTML</title>';
  output += '</head>';
  output += '<body>';
  items.forEach(function (category) {
    category.forEach(function (item) {
      output += '<div>';
      output += '    <h1>' + item.name + '</h1>';
      output += '    <h2>' + item.price + '</h2>';
      output += '</div>';
    });
  });
  output += '</body>';
  output += '</html>';
  response.send(output);
});

app.all('/data.json', function (request, response) {
  response.send(items);
});

app.all('/data.xml', function (request, response) {
  var output = '';
  output += '<?xml version="1.0" encoding="UTF-8" ?>';
  output += '<products>';
  items.forEach(function (category) {
    category.forEach(function (item) {
      output += '<product>';
      output += '    <name>' + item.name + '</name>';
      output += '    <price>' + item.price + '</price>';
      output += '</product>';
    });
  });
  output += '</products>';
  response.type('text/xml');
  response.send(output);
});

app.all('/parameter', function (request, response) {
  // 변수를 선언합니다.
  var name = request.param('name');
  var region = request.param('region');

  // 응답합니다.
  response.send('<h1>' + name + ':' + region + '</h1>');
});

app.all('/parameter/:id', function (request, response) {
  // 변수를 선언합니다.
  var id = request.param('id');

  // 응답합니다.
  response.send('<h1>' + id + '</h1>');
});

app.get('/products', function (request, response) {
  response.send(items);
});

app.get('/products/:id', function (request, response) {
  // 변수를 선언합니다.
  var id = Number(request.param('id'));

  if (isNaN(id)) {
    // 오류: 잘못된 경로
    response.send({
      error: '숫자를 입력하세요!'
    });
  } else if (items[id]) {
    // 정상
    response.send(items[id]);
  } else {
    // 오류: 요소가 없을 경우
    response.send({
      error: '존재하지 않는 데이터입니다!'
    });
  }
});

app.post('/products', function (request, response) {
  // 변수를 선언합니다.
  var name = request.param('name');
  var price = request.param('price');
  var item = {
    name: name,
    price: price
  };

  // 데이터를 추가합니다.
  items.push(item);

  // 응답합니다.
  response.send({
    message: '데이터를 추가했습니다.',
    data: item
  });
});







//음료 or 빵..
app.put('/products/:category/:id', function (request, response) {
  // 변수를 선언합니다.
  var category = Number(request.params.category);
  var id = Number(request.params.id);
  var price = Number(request.param('price'));

  if (isNaN(category) || isNaN(id)) {
    response.send({
      error: '숫자를 입력하삼'
    });
  } else if (items[category] && items[category][id]) {
    // 데이터를 수정합니다.
    var newPrice = price + price * 0.1;
    if (newPrice < 0) {
      newPrice = 1000;
    }
    items[category][id].price = newPrice.toString();

    // 응답합니다.
    response.send({
      message: '데이터를 수정완료.',
      data: items[category][id]
    });
  } else {
    // 오류: 요소가 없을 경우
    response.send({
      error: '존재하지 않는 데이터!'
    });
  }
});

app.post('/products/:category', function (request, response) {
  // 변수를 선언합니다.
  var category = Number(request.params.category);
  var name = request.param('name');
  var price = request.param('price');

  if (isNaN(category)) {
    // 오류: 잘못된 경로
    response.send({
      error: '숫자를 입력'
    });
  } else {
    // 새로운 아이템을 추가합니다.
    var newItem = {
      name: name,
      price: price
    };
    items[category].push(newItem);

    // 응답합니다.
    response.send({
      message: '데이터를 추가완료.',
      data: newItem
    });
  }
});


// 웹 서버를 실행합니다.
http.createServer(app).listen(52273, function () {
  console.log('Server Running at http://127.0.0.1:52273');
});
