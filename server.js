const express = require('express');
const bodyPareser = require('body-parser');
const app = express();
app.set('port', process.env.port||5000);

app.use(bodyPareser.json());
app.use(bodyPareser.urlencoded({extended:true}));

app.use('/', express.static(__dirname + '/../public'));

app.get('/api/hello', (req, res)=>{
    res.send({messege:'Hello express!'});
});

app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 번호에서 대기중');
});