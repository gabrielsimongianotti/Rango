module.exports = function (application) {
    var multer = require('multer');

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
        //pasta onde sera salvo 
            cb(null, 'app/public/uploads')
        },
        //adiciona a extensão de arquivo
        filename: function (req, file, cb) {
            var ext = file.originalname.split('.')[1];
            cb(null, Date.now() + '.' + ext)
        }
    })

    var upload = multer({ storage: storage });
    application.post('/salvarimg', upload.single("image"), function (req, res) {
        application.app.controllers.img.upload(application, req, res);
    });
};