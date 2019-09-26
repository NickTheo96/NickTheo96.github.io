var AWS = require('aws-sdk');
var ses = new AWS.SES();
const docClient = new AWS.DynamoDB.DocumentClient({region: 'eu-west-1', convertEmptyValues: 'true'});

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

exports.handler = function (event, context, callback) {
    console.log('Received event:', event);
    sendEmail(event, function (err, data) {
        context.done(err, null);
    });


    var date = Date(Date.now());
    date = date.toString() // returns "Sun May 10 2015 19:50:08 GMT-0600 (MDT)"

    var params = {
        Item: {
            name: event.name,
            phone: event.phone,
            email: event.email,
            time_stamp: Date.now(),
            date: date,
            requestTime: event.requestTime,
            source_IP: event.source_IP,
            userAgent: event.userAgent,
            domainName: event.domainName,
            request_id: event.requestId,
            URL: event.URL,
            ntt_source: event.ntt_source,
            ntt_medium: event.ntt_medium,
            ntt_campaign: event.ntt_campaign,
            ntt_term: event.ntt_term,
            ntt_content: event.ntt_content,
            ntt_adv1: event.ntt_adv1,
            ntt_adv2: event.ntt_adv2,
            ntt_adv3: event.ntt_adv3,
            ntt_adv4: event.ntt_adv4,
            ntt_adv5: event.ntt_adv5,
        },

        TableName: 'email_info'
    };

    docClient.put(params, function(err, data){
        if(err){
            callback(err, null);
        }else{
            callback(null, data);
        }
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
                    Data: 'name: ' + event.name + '\nphone: ' + event.phone + '\nemail: ' + event.email + '\ndesc: ' + event.desc + '\ndate: ' + date + '\nrequestTime: ' + event.requestTime + '\nsourceIp: ' + event.sourceIp + '\nuserAgent: ' + event.userAgent + '\ndomainName: ' + event.domainName + '\nrequestId: ' + event.requestId + '\nURL: ' + event.URL
                        + '\nntt_source: ' + event.ntt_source  + '\nntt_medium: ' + event.ntt_medium  + '\nntt_campaign: ' + event.ntt_campaign  + '\nntt_term: ' + event.ntt_term + '\nntt_content: ' + event.ntt_content  + '\nntt_adv1: ' + event.ntt_adv1  + '\nntt_adv2: ' + event.ntt_adv2  + '\nntt_adv3: ' + event.ntt_adv3  + '\nntt_adv4: ' + event.ntt_adv4  + '\nntt_adv5: ' + event.ntt_adv5,
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
