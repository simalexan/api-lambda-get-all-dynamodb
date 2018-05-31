const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const processResponse = require('./process-response');
const TABLE_NAME = process.env.TABLE_NAME;
const IS_CORS = process.env.IS_CORS;
const PRIMARY_KEY = process.env.PRIMARY_KEY;

exports.handler = (event) => {
    if (event.httpMethod === 'OPTIONS') {
		return Promise.resolve(processResponse(IS_CORS));
	}
    let params = {
        TableName: TABLE_NAME
    }
    return dynamoDb.scan(params)
    .promise()
    .then(response => (processResponse(IS_CORS, response.Items)))
    .catch(err => {
        console.log(err);
        return processResponse(IS_CORS, 'dynamo-error', 500);
    });
};