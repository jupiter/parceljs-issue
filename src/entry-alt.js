const GraphQLError = require('graphql').GraphQLError
const GraphQLErrorIndex = require('graphql/error').GraphQLError
const GraphQLErrorDeep = require('graphql/error/GraphQLError').GraphQLError
const GraphQLErrorDeepModule = require('graphql/error/GraphQLError.mjs').GraphQLError

console.log(GraphQLError === GraphQLErrorIndex)
// true
console.log(GraphQLError === GraphQLErrorDeep)
// true
console.log(GraphQLError === GraphQLErrorDeepModule)
// false
