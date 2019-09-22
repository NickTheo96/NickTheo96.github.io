console.log('starting function');

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'eu-west-2'});

exports.handler = function(e, ctx, callback) {

    var date = Date(Date.now());
    date = date.toString() // returns "Sun May 10 2015 19:50:08 GMT-0600 (MDT)"

    var params = {
        Item: {
            time_stamp: Date.now(),
            date: date,
            source_IP: e.user_IP,
            user_agent: e.userAgent,
            email_address: e.email_address,
            domain_URL: e.domain_URL,
            API_domain: e.domainName,
            request_id: e.requestId
        },

        TableName: 'sales_funnel_email'
    };

    docClient.put(params, function(err, data){
        if(err){
            callback(err, null);
        }else{
            callback(null, data);
        }
    });
}