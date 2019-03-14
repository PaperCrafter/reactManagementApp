const express = require('express');
const bodyPareser = require('body-parser');
const app = express();
app.set('port', process.env.port||5000);

app.use(bodyPareser.json());
app.use(bodyPareser.urlencoded({extended:true}));

app.use('/', express.static(__dirname + '/../public'));

app.get('/api/customers', (req, res)=>{
    res.send([{
        'id':1,
        'image':'https://placeimg.com/64/64/1',
        'name':'홍길동',
        'birthday':'961222',
        'gender':'남자',
        'job':'대학생',
      },
      {
        'id':2,
        'image':'https://placeimg.com/64/64/1',
        'name':'paper',
        'birthday':'961222',
        'gender':'남자',
        'job':'대학생',
      },
      {
        'id':3,
        'image':'https://placeimg.com/64/64/1',
        'name':'js',
        'birthday':'961222',
        'gender':'남자',
        'job':'대학생',
      }
      ]
    );
});

app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 번호에서 대기중');
});