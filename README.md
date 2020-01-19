
# Api Gateway -> Lambda (Scan - Get All) from an existing DynamoDB

## Description

This is a serverless component consisting of:

- an Api Gateway with a GET `/{items}` endpoint, the `items` are any path.
- a Lambda that receives an API Gateway request and retrieves (gets) **all items** from a DynamoDB table.

- Supports CORS.
- Written in Node.js

## Deployment Parameters

This component has two CloudFormation deployment parameters:

- `DynamoDBTable`, a required parameter, represents the name of the existing DynamoDB table.
- `CorsOrigin`, an optional parameter, where you can restrict access to only specified domains.

It's a Nuts & Bolts application component for AWS Serverless Application Repository.

## Latest Release - 2.1.0

- Upgraded to Node.js 12.x LTS

## Roadmap - Upcoming changes

Here are the upcoming changes that I'll add to this serverless component:

- ESLint
- Tests
