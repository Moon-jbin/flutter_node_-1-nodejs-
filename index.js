// nodejs 설치한다.

var express = require('express');
var app = express();

app.get("/", (req, res) => {
    var userHeader = req.headers["user-header"];
    console.log(userHeader);
    // userHeader가 undefined이면 json data는 ERROR를 보내고
    if(userHeader === undefined) res.json({"key": "ERROR"}); 
    // userHeader가 "1234" 라면 jsondata는 value를 보내라!
    if(userHeader == "1234") res.json(
        [
            {'id':1, 'name': 'MoonJB'},
            {'id':2, 'name': 'LeeEA'},
        ]
    );
    
    res.json({
        "key":"check header"
    });
});

app.listen(3000, (req,res)=>{
    console.log(3000);
});