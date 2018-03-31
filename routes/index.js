const express = require('express');
const router = express.Router();
const Data = require('../models/Data');
/* GET home page. */
router.get('/', function (req, res, next) {
    res.json({result: true})
});


router.get('/getData', function (req, res) {
    Data.find({}, function (err, data) {
            if (err) {
                console.log("db err in signin");
            } else {
                res.json({result: true, data: data})
            }
        }
    )
});

router.post('/setData', function (req, res) {
    Data.findOne({lon: req.body.lon, lat: req.body.lat}, function (err, data) {
        if (err) {
            console.log("db err in signin");
        } else {
            if (data === null) {
                let newData = new Data();
                newData.lon = req.body.lon;
                newData.lat = req.body.lat;
                newData.count = 1;
                newData.save(function (err) {
                    if (err) {
                        console.error(err);
                        res.json({result: false});
                        return;
                    }
                    res.json({result: true});
                });
            }
            else {
                data.count++;
                data.save()
            }
        }
    })
});

module.exports = router;
