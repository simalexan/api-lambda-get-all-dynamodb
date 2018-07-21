
# Api Gateway -> Lambda (Scan - Get All) -> DynamoDB

## Description

This is a Lambda function that receives an API Gateway request and retrieves (gets) **all items** from a DynamoDB table.

- Supports CORS.
- Written in Node.js

It's a Nuts & Bolts application component for AWS Serverless Application Repository.

## Latest Release - 1.0.2

Added a few fixes regarding the CORS and datatable naming:

- Enabled underscore `_` as an enabled character in the table name
- Fixed the CORS issue, now the GET requests are CORS enabled as well

## Roadmap - Upcoming changes

Here are the upcoming changes that I'll add to this serverless component:

- ESLint
- Tests