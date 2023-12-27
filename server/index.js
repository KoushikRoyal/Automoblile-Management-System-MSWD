const express = require('express')
const cors = require('cors')
const { MongoClient } = require('mongodb')

const app = express()
app.use(express.json())
app.use(cors())
const uri = "mongodb+srv://koushik:koushik@cluster0.5m6av4p.mongodb.net/AMS?retryWrites=true&w=majority";
const client = new MongoClient(uri);
client.connect();
var db = client.db("s3");
var col1 = db.collection("stu_data");

app.post('/insert_stu',(req,res)=>{

  console.log(req.body)
  col1.insertOne(req.body)
  res.send(req.body)
})

app.post('/insert',(request,response) => {
  response.send('YOUR EXPRESS BACKEND IS CONNECTED TO REACT');
  console.log(request.body)
  col1.insertOne(request.body)
  console.log("Documents Inserted");
})
app.get('/check', (request,response)=> {

  async function run () {
    try {
      console.log(request.query.un);
      const result = await col1.findOne({email:request.query.un})
      if (result != null) {
        console.log(result.email);
        if (result.password === request.query.pw) {
          response.send("pass");
        }
        else {
          response.send("fail");
        }
      }
      else {
        response.send("fail");
      }
    }
    finally {
      
    }
  }
  run().catch(console.dir);
})



app.get('/show_one_stu',(req,res)=>{
  async function find(){
    try{
      const result=await col1.find().toArray()
      console.log(result)
      if(result==null)
      {
        res.send({"Data_Retrieval":"Fail"})
      }
      else{
        res.send(result)
      }
    }
    finally{}
  }
  find().catch(console.dir)
})
app.listen(8081)
//localhost:8081
console.log("server started")