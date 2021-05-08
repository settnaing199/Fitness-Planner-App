
const express = require('express');
const app = express();
const path = require('path');
const ApiRouter = require('./routes/api');



// app.use((req,res)=> res.status(404).send('The page is not found'))
app.use(express.json())

if(process.env.NODE_ENV ===  'production'){
app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html')); 
});
}
app.use('/api', ApiRouter);

app.get('/something', function(req,res){
  res.status(404).send('Something');
});


app.use((req,res)=> res.status(404).send('The page is not found'))



app.listen(3000, ()=>{
  console.log("Port 3000 is running, baby!")
}); //listens on port 3000 -> http://localhost:3000/