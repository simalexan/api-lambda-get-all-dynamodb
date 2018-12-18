const AWS = require('aws-sdk'),
    dynamoDb = new AWS.DynamoDB.DocumentClient(),
    processResponse = require('./process-response'),
    TABLE_NAME = process.env.TABLE_NAME,
    IS_CORS = true;

exports.handler = (event) => {
    if (event.httpMethod === 'OPTIONS') {
		return Promise.resolve(processResponse(IS_CORS));
	}
    let params = {
        TableName: TABLE_NAME
    }
    return dynamoDb.scan(params)
    .promise()
    .then(response => (processResponse(true, response.Items)))
    .catch(err => {
        console.log(err);
        return processResponse(IS_CORS, err, 500);
    });
};