
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + 
        path.extname(file.originalname));
        
    }, 
});

const checkFileType = (file, cb) => {
    const filetypes = /jpg|png|jpeg|jfif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase()); 
    const mimetype = filetypes.test(file.mimetype);
    console.log(extname+'path'+path.extname(file.originalname).toLowerCase()+'fin extname');
    console.log(mimetype+'fin mimetype');
    if (extname && mimetype) {
        console.log(file);
        console.log('listo');
        cb(null, true);
    } 
    else {
        console.log(file);
        console.log('no entro');
        cb('Images only');
    }
    // if (!extname){
    //     console.log('no entro2');
    //     cb(new Error ('images only'));
    //     console.log(cb);
    // }
       

    
};

export const uploadConfig = multer({
    storage,
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
        if ( file.mimetype === 'image/jpeg' ||  file.mimetype ==='image/png' ) {
            cb(null, true);
        } else {
            console.log('entro file');
            
            cb(new Error('Images only'), false);
            return;
            
        }
    },

}).single('file');

export const upload = (req, res) => {
    console.log("algo > ", req.file);
    console.log('este es el cb'+ req.cb)
    if(req.cb=='imagen only')
        res.send('onlyimage');
    if (!req.file)
        return res.send('Please upload a file');
    else {
        res.send(`/${req.file.path.replace(/\\/g, '/')}`);
        console.log('entor upload');
    }
        

}; 