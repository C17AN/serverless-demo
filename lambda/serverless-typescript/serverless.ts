import type { AWS } from "@serverless/typescript";
import { hello } from "./handler";
import slsw from "serverless-webpack";

const serverlessConfiguration: AWS = {
  service: "serverless-typescript",
  frameworkVersion: "3",
  plugins: ["serverless-esbuild", "serverless-webpack"],
  provider: {
    name: "aws",
    runtime: "nodejs18.x",
    region: "ap-northeast-2",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
    },
  },
  // import the function via paths
  functions: { hello },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ["aws-sdk"],
      target: "node14",
      define: { "require.resolve": undefined },
      platform: "node",
      concurrency: 10,
    },
  },
};

module.exports = serverlessConfiguration;
