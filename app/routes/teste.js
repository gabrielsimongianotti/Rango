var multer = require('multer');
var path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'app/public/uploads')
    },
    filename: function (req, file, cb) {
      var ext = file.originalname.split('.')[1];
      cb(null, Date.now() + '.' + ext)
    }
  })
var upload = multer({storage:storage});
module.exports =function(application){
    application.post('/testeimg', upload.single("image"),function(req, res){
        application.app.controllers.img.upload(application,req,res);
    });
};