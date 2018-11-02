const GraphQLError = require('graphql').GraphQLError
const GraphQLErrorDeep = require('graphql/error/GraphQLError').GraphQLError
const GraphQLErrorDeepModule = require('graphql/error/GraphQLError.mjs').GraphQLError

console.log(GraphQLError === GraphQLErrorDeep)
// false
console.log(GraphQLError === GraphQLErrorDeepModule)
// true
