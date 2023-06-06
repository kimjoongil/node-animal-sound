const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World')
})


app.get('/user/:id', (req, res) => {
    // const q = req.params
    // console.log(q.id)
    //http://localhost:3000/user/a?id=webvills&name=joongil&age=48
    //query 방식

    const q = req.query
    console.log(q.id)
    console.log(q.name)
    console.log(q.age)
    res.json({'userid':q.id, 'userName': q.name,'userAge':q.age})
})

app.get('/dog/:keyword', (req, res) => {
    const q = req.params
    console.log(q.keyword)
    res.json({'keyword':q.keyword})
    //http://localhost:3000/dog/keyword
    //parameter 방식
})

app.get('/cat', (req, res) => {
    res.send({'sound':'야용'})
  })


//동물소리 API 서버
/**
 * CORS 설치 :
 */
app.get('/sound/:name', (req, res) => {

    const {name} = req.params
    console.log(name)

    if( name == "dog"){
        res.json({'sound':'명멍'});
    } else if( name == "cat"){
        res.json({'sound':'야옹'});
    } else if( name =="pig"){
        res.json({'sound':'꿀꿀'});
    }  else{
        res.json({'sound':'멍멍야옹꿀꿀합창'});
    }

})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


/**
 *         라우팅
 *         ===
 * app.get('/', ()=>{})
 *     ===      ======== 콜백함수
 *  Http 메소드
 *
 *
 * http 메소드 : 요청의 목적 , 종류를 알리는 수단(get,post)
 *               request : 요청, respons : 응답
 *
 * 콜백핰수 (callback)
 * setTimeout(()=>{ console.log(1초지남) },1000)
 *
 *
 * GET:params, query
 *
 *
 */