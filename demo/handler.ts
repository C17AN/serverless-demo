"use strict";
import { APIGatewayEvent } from "aws-lambda";

module.exports.hello = async (event: APIGatewayEvent) => {
  if (!event.queryString)
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "Go Serverless v1.0! Your function executed successfully!",
          input: event,
        },
        null,
        2
      ),
    };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
