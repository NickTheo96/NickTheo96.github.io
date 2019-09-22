var AWS = require('aws-sdk');
var ses = new AWS.SES();

var RECEIVER = 'admin@nicktheodoulou.com';
var SENDER = 'admin@nicktheodoulou.com';

var response = {
    "isBase64Encoded": false,
    "headers": { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
    "statusCode": 200,
    "body": "{\"result\": \"Success.\"}"
};

let date = Date(Date.now());
date = date.toString(); // returns "Sun May 10 2015 19:50:08 GMT-0600 (MDT)"

exports.handler = function (event, context) {
    console.log('Received event:', event);
    sendEmail(event, function (err, data) {
        context.done(err, null);
    });
};

function sendEmail (event, done) {
    var params = {
        Destination: {
            ToAddresses: [
                RECEIVER
            ]
        },
        Message: {
            Body: {
                Text: {
                    Data: {name: event.name, phone: event.phone, email:event.email, desc: event.desc, source_IP: event.source_IP, userAgent: event.userAgent, domainName: event.domainName, requestId: event.requestId},
                    Charset: 'UTF-8'
                }
            },
            Subject: {
                Data: 'Website Referral Form: ' + event.name,
                Charset: 'UTF-8'
            }
        },
        Source: SENDER
    };
    ses.sendEmail(params, done);
}
