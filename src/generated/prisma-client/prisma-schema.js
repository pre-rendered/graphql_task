module.exports = {
        typeDefs: /* GraphQL */ `type AggregateCar {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Car {
  id: ID!
  title: String!
  vin: String
  make: String
  model: String
  year: Int
  createdAt: DateTime!
}

type CarConnection {
  pageInfo: PageInfo!
  edges: [CarEdge]!
  aggregate: AggregateCar!
}

input CarCreateInput {
  title: String!
  vin: String
  make: String
  model: String
  year: Int
}

type CarEdge {
  node: Car!
  cursor: String!
}

enum CarOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  vin_ASC
  vin_DESC
  make_ASC
  make_DESC
  model_ASC
  model_DESC
  year_ASC
  year_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CarPreviousValues {
  id: ID!
  title: String!
  vin: String
  make: String
  model: String
  year: Int
  createdAt: DateTime!
}

type CarSubscriptionPayload {
  mutation: MutationType!
  node: Car
  updatedFields: [String!]
  previousValues: CarPreviousValues
}

input CarSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CarWhereInput
  AND: [CarSubscriptionWhereInput!]
  OR: [CarSubscriptionWhereInput!]
  NOT: [CarSubscriptionWhereInput!]
}

input CarUpdateInput {
  title: String
  vin: String
  make: String
  model: String
  year: Int
}

input CarUpdateManyMutationInput {
  title: String
  vin: String
  make: String
  model: String
  year: Int
}

input CarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  vin: String
  vin_not: String
  vin_in: [String!]
  vin_not_in: [String!]
  vin_lt: String
  vin_lte: String
  vin_gt: String
  vin_gte: String
  vin_contains: String
  vin_not_contains: String
  vin_starts_with: String
  vin_not_starts_with: String
  vin_ends_with: String
  vin_not_ends_with: String
  make: String
  make_not: String
  make_in: [String!]
  make_not_in: [String!]
  make_lt: String
  make_lte: String
  make_gt: String
  make_gte: String
  make_contains: String
  make_not_contains: String
  make_starts_with: String
  make_not_starts_with: String
  make_ends_with: String
  make_not_ends_with: String
  model: String
  model_not: String
  model_in: [String!]
  model_not_in: [String!]
  model_lt: String
  model_lte: String
  model_gt: String
  model_gte: String
  model_contains: String
  model_not_contains: String
  model_starts_with: String
  model_not_starts_with: String
  model_ends_with: String
  model_not_ends_with: String
  year: Int
  year_not: Int
  year_in: [Int!]
  year_not_in: [Int!]
  year_lt: Int
  year_lte: Int
  year_gt: Int
  year_gte: Int
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [CarWhereInput!]
  OR: [CarWhereInput!]
  NOT: [CarWhereInput!]
}

input CarWhereUniqueInput {
  id: ID
}

scalar DateTime

scalar Long

type Mutation {
  createCar(data: CarCreateInput!): Car!
  updateCar(data: CarUpdateInput!, where: CarWhereUniqueInput!): Car
  updateManyCars(data: CarUpdateManyMutationInput!, where: CarWhereInput): BatchPayload!
  upsertCar(where: CarWhereUniqueInput!, create: CarCreateInput!, update: CarUpdateInput!): Car!
  deleteCar(where: CarWhereUniqueInput!): Car
  deleteManyCars(where: CarWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  car(where: CarWhereUniqueInput!): Car
  cars(where: CarWhereInput, orderBy: CarOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Car]!
  carsConnection(where: CarWhereInput, orderBy: CarOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CarConnection!
  node(id: ID!): Node
}

type Subscription {
  car(where: CarSubscriptionWhereInput): CarSubscriptionPayload
}
`
      }
    