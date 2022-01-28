import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination(req, file, cb){
        //Se llama al cb sin errores e indicando la carpeta uploads/
        cb(null, 'uploads/');
    },
    filename(req, file, cb){
        cb(
            null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)
            //Se genera el nombre del archivo usando el fieldname, la fecha actual
            // y la extension del archivo (path.extname)
        );
    },
}); 
const checkFileType =(file, cb)=>{
    const filetypes =/jpeg|jpg|png/;
    //Reemplazar null por los archivos permitidos: jpg, jpge, png
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = filetypes.test(file.mimeType);

    if (extname && mimeType){
        //Retornar el cb sin errores y con true
       return (null,true);
 
    }else {
        cb('Images only!');
    }
};

export const uploadConfig = multer({
    storage,
    fileFilter: function (req, file, cb){
        checkFileType(file, cb);
    },
});

//@desc Upload a image
//@route POST /api/upload
//@access Private/Admin
export const upload =(req, res)=>{
    console.log("algo>", req.file);
    res.send(`/${req.file.path.replace(/\\/g,'/')}`);
};