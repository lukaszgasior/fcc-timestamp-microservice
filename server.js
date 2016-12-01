var express = require("express");
var moment = require("moment");

var PORT = process.env.PORT || 8080;

var app = express();

app.get('/:date', function(req, res) {
    var date = req.params.date;
    
    var test_date = new Date(date);

    var result = {
        "unix": null,
        "natural": null
    }

    // if date cannot be parsed check if it is unix timestamp
    if (isNaN(test_date)) {
        test_date = new Date(+date * 1000);
    }

    // if date can be parsed create result object
    if (!isNaN(test_date)) {
        var a = moment(test_date);

        result = {
            "unix": a.unix(),
            "natural": a.format("MMMM DD, YYYY")
        }
    }

    res.send(JSON.stringify(result));
});

app.listen(PORT, function(argument) {
    console.log('Server listening on port ' + PORT);
});
