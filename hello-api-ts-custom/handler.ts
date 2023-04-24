import { APIGatewayProxyHandlerV2 } from "aws-lambda";

// 람다 함수는 APIGatewatProxyHandlerV2 타입의 함수로 정의되어야 한다.
export const hello: APIGatewayProxyHandlerV2 = async (event) => {
  if (!event.queryStringParameters || !event.queryStringParameters.name) {
    return { statusCode: 404, body: "Name not found" };
  }
  return {
    statusCode: 200,
    body: `Hello, ${event.queryStringParameters.name}`,
  };
};
