const multer= require('multer')
const path=require('path')

const storage=multer.diskStorage({
    destination: 'images/',
    filename:(req,file,cb)=>{
        const fileName= file.fieldname+Date.now()+path.extname(file.originalname)
        cb(null, fileName)
    }
})

const upload=multer({storage:storage,
fileFilter:(req,file,cb)=>{
    if(file.mimetype="image/png" || file.mimetype= "image/jpg" || file.mimetype =="image/jpeg"){
        cb(null,tree);
    } else{
        cb(null,false);
        return cb(new Error('Only .png .jpg and .jpeg format allowed'))
    }
}}).single('imagefile')