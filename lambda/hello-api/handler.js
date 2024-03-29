"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
const hello = async (event) => {
    if (!event.queryStringParameters || !event.queryStringParameters.name) {
        return { statusCode: 404, body: "Name not found" };
    }
    return {
        statusCode: 200,
        body: `Hello, ${event.queryStringParameters.name}`,
    };
    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
exports.hello = hello;
