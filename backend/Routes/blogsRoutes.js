const express = require('express'),
    router = express.Router(),
    blogsServices = require('../Services/blogsServices'),
    multer = require('multer'),
    jwt = require("jsonwebtoken"),
    crypto = require('crypto'),
    path = require('path'),
    fileExtension = require("file-extension");

    let authKey="$#$#$@#%loginsecret%$#%$^$%^";

    storage = multer.diskStorage({
        destination: function (req, file, callback) {
            if (file.fieldname == 'image') {
                callback(null, path.join(__dirname, "../public/"));
            }
        },
        filename: function (req, file, cb) {
            let ext = fileExtension(file.mimetype)
            crypto.pseudoRandomBytes(16, function (err, raw) {
                cb(
                    null,
                    raw.toString("hex") + Date.now() + "." + ext
                );
            });
        }
    });


const adminAuth = {
    verifyToken: (req, res, next) => {
        if (!req.headers.authorization) {
           return res.send({"code":401, "message":"Invalid token !!"})
        }
        jwt.verify(req.headers.authorization, authKey, (err, decoded) => {
            if (err) {
                res.send({"code":401, "message":"Invalid token !!", "error":err})
            } else {
                req.user=decoded.user;
                next();
            }
        })
    }
}


var upload = multer({ storage: storage}).fields([{ name: 'image', maxCount: 1 }]);


// router.get('/getblogs', adminAuth.verifyToken, adminService.getEnquiries);
router.get('/getblogs', blogsServices.getblogs);
router.post('/addblogs', adminAuth.verifyToken, upload,blogsServices.addblogs);
router.post('/login', blogsServices.login);
router.post('/signUp', blogsServices.signUp);
router.post('/addCategory',adminAuth.verifyToken, blogsServices.addCategory);
router.get('/getCategory',adminAuth.verifyToken, blogsServices.getCategory);

module.exports = router;