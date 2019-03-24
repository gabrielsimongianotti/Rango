module.exports.upload = function(Application, req, res){
    var uid = req.params.uid
    , file = req.params.file;
    console.log(mayViewFilesFrom);
  req.user.mayViewFilesFrom(uid, function(yes){
    if (yes) {
        console.log(uid + '/' + file);
      //res.sendFile('/uploads/' + uid + '/' + file);
    } else {
        console.log("Sorry! You can't see that.");
      //res.status(403).send("Sorry! You can't see that.");
    }
  });
    console.log(req);
    res.send(JSON.stringify(req));
    
}