// Seems to be a problem with graphql-request 5.2.0, pinning it to 5.1.0 fixes the problem
import { GraphQLClient } from "graphql-request";
import { getSdk } from "@/.generated/graphql-sdk";

const { GRAPHQL_URL, GRAPHQL_ADMIN_SECRET } = process.env;

export const graphQLClient = new GraphQLClient(GRAPHQL_URL!, {
  headers: {
    "x-hasura-admin-secret": GRAPHQL_ADMIN_SECRET!,
  },
});

export const graphqlSDK = getSdk(graphQLClient);
