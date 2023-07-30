// Seems to be a problem with graphql-request 5.2.0, pinning it to 5.1.0 fixes the problem
import { GraphQLClient } from "graphql-request";
import { getSdk } from "@/.generated/graphql-sdk";

export const graphQLClient = new GraphQLClient("", {
  headers: {
    "x-hasura-admin-secret": "",
  },
});

export const graphqlSDK = getSdk(graphQLClient);
