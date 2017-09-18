var express = require('express');
var app = express();
var path = require('path');
var AWS = require('aws-sdk');
var bodyParser = require('body-parser');

var multiparty = require('connect-multiparty'),
    multipartyMiddleware = multiparty();

app.use(express.static(path.join(__dirname)));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/photoUplad', multipartyMiddleware, function(req, res) {
    console.log(app.BucketName);
    console.log(req.body);
    console.log('-------------------');
    console.log(req.files.file);
    AWS.config.update({ "accessKeyId": "AKIAI3HVZSSQP7V4MGFQ", "secretAccessKey": "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", "region": "ap-south-1" });
    // Create S3 service object
    s3 = new AWS.S3({ apiVersion: '2006-03-01' });

    // call S3 to retrieve upload file to specified bucket
    var uploadParams = { Bucket: 'angularkaknew', Key: req.body.keyname, Body: '' };
    var file = req.files.file;

    var fs = require('fs');
    var fileStream = fs.createReadStream(file.path);
    fileStream.on('error', function(err) {
        console.log('File Error', err);
    });
    uploadParams.Body = fileStream;

    var path = require('path');

    // call S3 to retrieve upload file to specified bucket
    s3.upload(uploadParams, function(err, data) {
        if (err) {
            console.log("Error", err);
        }
        if (data) {
            console.log("Upload Success", data.Location);
        }
    });
    res.end();

});



app.post('/photoDelete', multipartyMiddleware, function(req, res) {
    console.log(req.body.keyname);
    console.log('-------------------');

    var AWS = require('aws-sdk');

    AWS.config.update({ "accessKeyId": "AKIAI3HVZSSQP7V4MGFQ", "secretAccessKey": "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", "region": "ap-south-1" });

    var s3 = new AWS.S3();
    var params = {
        Bucket: 'angularkaknew',
        Key: req.body.keyname
    };

    s3.deleteObject(params, function(err, data) {
        if (err) console.log(err)
        else console.log("Successfully deleted myBucket/myKey");
    });
});