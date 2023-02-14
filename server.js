const bodyParser = require('body-parser');
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config();
const ProductRoutes = require('./routes/ProductRoutes')
const MembersRoutes = require('./routes/MembersRoutes')
const UsersRoutes = require('./routes/UsersRoutes')
const CartRoutes = require('./routes/CartRoutes')
const OrderRoutes = require('./routes/OrdersRoutes')
const AdminRoutes = require('./routes/AdminRoutes')
// const fileupload = require('express-fileupload');
const multer = require('multer')
//express app
const app = express()

//middleware
// app.use(express.static("files"))
app.use(bodyParser.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next();
})

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'D:/DownloadsBackups/DesktopBackup/New folder/React/mini-ecom-site/mini-shop-admin/public');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

const storage2 = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'D:/DownloadsBackups/DesktopBackup/New folder/React/mini-ecom-site/mini-shop/public');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });
const upload2 = multer({ storage: storage2 });

//planed routes
app.use('/api/Product',ProductRoutes)
app.use('/api/User',UsersRoutes)
app.use('/api/Member',MembersRoutes)
app.use('/api/cart',CartRoutes)
app.use('/api/orders',OrderRoutes)
app.use('/api/admin',AdminRoutes)

// const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
  // req.file is the file that was uploadedsss
  const file = req.file
  console.log(file)
  // do something with the file
  res.send({ message: 'File uploaded!' });
});

// app.post('/upload2', upload2.single('file'), (req, res) => {
//     // req.file is the file that was uploadedsss
//     const file = req.file
//     console.log(file)
//     // do something with the file
//     res.send({ message: 'File uploaded!' });
//   });


// app.use('/upload',(req,res) => {
//     console.log(__dirname)
//     const newpath = __dirname + "/files/"
//     const file = req.files.file;
//     const filename = file.name;
//     console.log(newpath)
//     console.log(file)
//     console.log(filename)
//     file.mv(`${newpath}${filename}`,(err)=>{
//         if(err){
//             res.status(500).send({message:"File upload failed",code:200})
//         }
//         res.status(200).send({message:"File uploaded",code:200});
//     });
// });

mongoose.set("strictQuery",false)
mongoose.connect(process.env.MONGODB_CONNECT).then(()=>{
    
    app.listen(process.env.PORT,()=>{
        console.log("listening on port 4000")
    })

}).catch((err)=>{
    console.log("Error Ocurred !!!",err)
})
