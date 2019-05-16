const express = require('express');
const path=require('path');
const app= express();
const members=[
  {
    id:1,
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    status: 'active'
  },
  {
    id:2,
    name: 'Pera Peric',
    email: 'pers@gmail.com',
    status: 'inactive'
  },
  |{
  id:2,
  name: 'Sara Saric',
  email: 'sara@gmail.com',
  status: 'inactive'
}
];
app.get('/api/members', (req,res)=>res.json(members));


app.get('/',(req,res)=>{

//res.sendFile(path.join(__dirname, 'public', 'index.html'));
//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

});

const PORT=process.env.PORT || 5000;

app.listen(PORT, ()=>console.log('Server started on port ${PORT}'));
