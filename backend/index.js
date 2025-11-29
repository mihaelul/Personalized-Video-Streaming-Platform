const express= require('express');
const dotenv=require('dotenv');
const cors = require('cors');
const path=require('path');
const multer=require('multer');
mongoose = require('mongoose');

const app= express();
const port = process.env.PORT || 3000;

//configurare cale catre upload
const uploadPath = path.join(__dirname, 'uploads'); 
app.use(cors({
    origin: 'http://127.0.0.1:5500', 
    methods: ['GET', 'POST'], 
    allowedHeaders: ['Content-Type'] 
}));


//in caz ca nu exista fisierul de upload

const fs = require('fs');
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath);
}

//conectare la baza de date
mongoose.connect('mongodb://localhost:27017/Upload',)
.then(() => {
    console.log('Conectat la MongoDB');
}).catch(err => {
    console.error('Eroare la conectarea la MongoDB:',err);
});


//configurare multer
const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now()+path.extname(file.originalname));
    }
});

const upload= multer({storage});

const uploadRoutes = require('./routes/uploadRoutes');

app.use('/upload',uploadRoutes);

app.listen(port, () => {

    console.log(`Serverul ruleaza pe portul ${port}`);
});
