export const typeDefs = /* GraphQL */ `type AggregateTutorial {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateUserTutorial {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createTutorial(data: TutorialCreateInput!): Tutorial!
  updateTutorial(data: TutorialUpdateInput!, where: TutorialWhereUniqueInput!): Tutorial
  updateManyTutorials(data: TutorialUpdateManyMutationInput!, where: TutorialWhereInput): BatchPayload!
  upsertTutorial(where: TutorialWhereUniqueInput!, create: TutorialCreateInput!, update: TutorialUpdateInput!): Tutorial!
  deleteTutorial(where: TutorialWhereUniqueInput!): Tutorial
  deleteManyTutorials(where: TutorialWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createUserTutorial(data: UserTutorialCreateInput!): UserTutorial!
  updateUserTutorial(data: UserTutorialUpdateInput!, where: UserTutorialWhereUniqueInput!): UserTutorial
  updateManyUserTutorials(data: UserTutorialUpdateManyMutationInput!, where: UserTutorialWhereInput): BatchPayload!
  upsertUserTutorial(where: UserTutorialWhereUniqueInput!, create: UserTutorialCreateInput!, update: UserTutorialUpdateInput!): UserTutorial!
  deleteUserTutorial(where: UserTutorialWhereUniqueInput!): UserTutorial
  deleteManyUserTutorials(where: UserTutorialWhereInput): BatchPayload!
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
  tutorial(where: TutorialWhereUniqueInput!): Tutorial
  tutorials(where: TutorialWhereInput, orderBy: TutorialOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tutorial]!
  tutorialsConnection(where: TutorialWhereInput, orderBy: TutorialOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TutorialConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  userTutorial(where: UserTutorialWhereUniqueInput!): UserTutorial
  userTutorials(where: UserTutorialWhereInput, orderBy: UserTutorialOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserTutorial]!
  userTutorialsConnection(where: UserTutorialWhereInput, orderBy: UserTutorialOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserTutorialConnection!
  node(id: ID!): Node
}

type Subscription {
  tutorial(where: TutorialSubscriptionWhereInput): TutorialSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  userTutorial(where: UserTutorialSubscriptionWhereInput): UserTutorialSubscriptionPayload
}

type Tutorial {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  gatsbyID: String!
  numberofChapters: Int!
  numberofStudents: Int!
  upvotes: Int!
  userTutorials(where: UserTutorialWhereInput, orderBy: UserTutorialOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserTutorial!]
}

type TutorialConnection {
  pageInfo: PageInfo!
  edges: [TutorialEdge]!
  aggregate: AggregateTutorial!
}

input TutorialCreateInput {
  name: String!
  gatsbyID: String!
  numberofChapters: Int!
  numberofStudents: Int
  upvotes: Int
  userTutorials: UserTutorialCreateManyWithoutTutorialInput
}

input TutorialCreateOneWithoutUserTutorialsInput {
  create: TutorialCreateWithoutUserTutorialsInput
  connect: TutorialWhereUniqueInput
}

input TutorialCreateWithoutUserTutorialsInput {
  name: String!
  gatsbyID: String!
  numberofChapters: Int!
  numberofStudents: Int
  upvotes: Int
}

type TutorialEdge {
  node: Tutorial!
  cursor: String!
}

enum TutorialOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  gatsbyID_ASC
  gatsbyID_DESC
  numberofChapters_ASC
  numberofChapters_DESC
  numberofStudents_ASC
  numberofStudents_DESC
  upvotes_ASC
  upvotes_DESC
}

type TutorialPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  gatsbyID: String!
  numberofChapters: Int!
  numberofStudents: Int!
  upvotes: Int!
}

type TutorialSubscriptionPayload {
  mutation: MutationType!
  node: Tutorial
  updatedFields: [String!]
  previousValues: TutorialPreviousValues
}

input TutorialSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TutorialWhereInput
  AND: [TutorialSubscriptionWhereInput!]
  OR: [TutorialSubscriptionWhereInput!]
  NOT: [TutorialSubscriptionWhereInput!]
}

input TutorialUpdateInput {
  name: String
  gatsbyID: String
  numberofChapters: Int
  numberofStudents: Int
  upvotes: Int
  userTutorials: UserTutorialUpdateManyWithoutTutorialInput
}

input TutorialUpdateManyMutationInput {
  name: String
  gatsbyID: String
  numberofChapters: Int
  numberofStudents: Int
  upvotes: Int
}

input TutorialUpdateOneWithoutUserTutorialsInput {
  create: TutorialCreateWithoutUserTutorialsInput
  update: TutorialUpdateWithoutUserTutorialsDataInput
  upsert: TutorialUpsertWithoutUserTutorialsInput
  delete: Boolean
  disconnect: Boolean
  connect: TutorialWhereUniqueInput
}

input TutorialUpdateWithoutUserTutorialsDataInput {
  name: String
  gatsbyID: String
  numberofChapters: Int
  numberofStudents: Int
  upvotes: Int
}

input TutorialUpsertWithoutUserTutorialsInput {
  update: TutorialUpdateWithoutUserTutorialsDataInput!
  create: TutorialCreateWithoutUserTutorialsInput!
}

input TutorialWhereInput {
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
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  gatsbyID: String
  gatsbyID_not: String
  gatsbyID_in: [String!]
  gatsbyID_not_in: [String!]
  gatsbyID_lt: String
  gatsbyID_lte: String
  gatsbyID_gt: String
  gatsbyID_gte: String
  gatsbyID_contains: String
  gatsbyID_not_contains: String
  gatsbyID_starts_with: String
  gatsbyID_not_starts_with: String
  gatsbyID_ends_with: String
  gatsbyID_not_ends_with: String
  numberofChapters: Int
  numberofChapters_not: Int
  numberofChapters_in: [Int!]
  numberofChapters_not_in: [Int!]
  numberofChapters_lt: Int
  numberofChapters_lte: Int
  numberofChapters_gt: Int
  numberofChapters_gte: Int
  numberofStudents: Int
  numberofStudents_not: Int
  numberofStudents_in: [Int!]
  numberofStudents_not_in: [Int!]
  numberofStudents_lt: Int
  numberofStudents_lte: Int
  numberofStudents_gt: Int
  numberofStudents_gte: Int
  upvotes: Int
  upvotes_not: Int
  upvotes_in: [Int!]
  upvotes_not_in: [Int!]
  upvotes_lt: Int
  upvotes_lte: Int
  upvotes_gt: Int
  upvotes_gte: Int
  userTutorials_every: UserTutorialWhereInput
  userTutorials_some: UserTutorialWhereInput
  userTutorials_none: UserTutorialWhereInput
  AND: [TutorialWhereInput!]
  OR: [TutorialWhereInput!]
  NOT: [TutorialWhereInput!]
}

input TutorialWhereUniqueInput {
  id: ID
  gatsbyID: String
}

type User {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  email: String
  githubHandle: String!
  githubUserId: String!
  avatarUrl: String
  bio: String
  contributor: Boolean
  expertise: String
  userTutorials(where: UserTutorialWhereInput, orderBy: UserTutorialOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserTutorial!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String
  githubHandle: String!
  githubUserId: String!
  avatarUrl: String
  bio: String
  contributor: Boolean
  expertise: String
  userTutorials: UserTutorialCreateManyWithoutUserInput
}

input UserCreateOneWithoutUserTutorialsInput {
  create: UserCreateWithoutUserTutorialsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutUserTutorialsInput {
  name: String!
  email: String
  githubHandle: String!
  githubUserId: String!
  avatarUrl: String
  bio: String
  contributor: Boolean
  expertise: String
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  githubHandle_ASC
  githubHandle_DESC
  githubUserId_ASC
  githubUserId_DESC
  avatarUrl_ASC
  avatarUrl_DESC
  bio_ASC
  bio_DESC
  contributor_ASC
  contributor_DESC
  expertise_ASC
  expertise_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  email: String
  githubHandle: String!
  githubUserId: String!
  avatarUrl: String
  bio: String
  contributor: Boolean
  expertise: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

type UserTutorial {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  user: User
  tutorial: Tutorial
  upvoted: Boolean
  bookmarked: Boolean
  currentChapter: Int
}

type UserTutorialConnection {
  pageInfo: PageInfo!
  edges: [UserTutorialEdge]!
  aggregate: AggregateUserTutorial!
}

input UserTutorialCreateInput {
  user: UserCreateOneWithoutUserTutorialsInput
  tutorial: TutorialCreateOneWithoutUserTutorialsInput
  upvoted: Boolean
  bookmarked: Boolean
  currentChapter: Int
}

input UserTutorialCreateManyWithoutTutorialInput {
  create: [UserTutorialCreateWithoutTutorialInput!]
  connect: [UserTutorialWhereUniqueInput!]
}

input UserTutorialCreateManyWithoutUserInput {
  create: [UserTutorialCreateWithoutUserInput!]
  connect: [UserTutorialWhereUniqueInput!]
}

input UserTutorialCreateWithoutTutorialInput {
  user: UserCreateOneWithoutUserTutorialsInput
  upvoted: Boolean
  bookmarked: Boolean
  currentChapter: Int
}

input UserTutorialCreateWithoutUserInput {
  tutorial: TutorialCreateOneWithoutUserTutorialsInput
  upvoted: Boolean
  bookmarked: Boolean
  currentChapter: Int
}

type UserTutorialEdge {
  node: UserTutorial!
  cursor: String!
}

enum UserTutorialOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  upvoted_ASC
  upvoted_DESC
  bookmarked_ASC
  bookmarked_DESC
  currentChapter_ASC
  currentChapter_DESC
}

type UserTutorialPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  upvoted: Boolean
  bookmarked: Boolean
  currentChapter: Int
}

input UserTutorialScalarWhereInput {
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
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  upvoted: Boolean
  upvoted_not: Boolean
  bookmarked: Boolean
  bookmarked_not: Boolean
  currentChapter: Int
  currentChapter_not: Int
  currentChapter_in: [Int!]
  currentChapter_not_in: [Int!]
  currentChapter_lt: Int
  currentChapter_lte: Int
  currentChapter_gt: Int
  currentChapter_gte: Int
  AND: [UserTutorialScalarWhereInput!]
  OR: [UserTutorialScalarWhereInput!]
  NOT: [UserTutorialScalarWhereInput!]
}

type UserTutorialSubscriptionPayload {
  mutation: MutationType!
  node: UserTutorial
  updatedFields: [String!]
  previousValues: UserTutorialPreviousValues
}

input UserTutorialSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserTutorialWhereInput
  AND: [UserTutorialSubscriptionWhereInput!]
  OR: [UserTutorialSubscriptionWhereInput!]
  NOT: [UserTutorialSubscriptionWhereInput!]
}

input UserTutorialUpdateInput {
  user: UserUpdateOneWithoutUserTutorialsInput
  tutorial: TutorialUpdateOneWithoutUserTutorialsInput
  upvoted: Boolean
  bookmarked: Boolean
  currentChapter: Int
}

input UserTutorialUpdateManyDataInput {
  upvoted: Boolean
  bookmarked: Boolean
  currentChapter: Int
}

input UserTutorialUpdateManyMutationInput {
  upvoted: Boolean
  bookmarked: Boolean
  currentChapter: Int
}

input UserTutorialUpdateManyWithoutTutorialInput {
  create: [UserTutorialCreateWithoutTutorialInput!]
  delete: [UserTutorialWhereUniqueInput!]
  connect: [UserTutorialWhereUniqueInput!]
  disconnect: [UserTutorialWhereUniqueInput!]
  update: [UserTutorialUpdateWithWhereUniqueWithoutTutorialInput!]
  upsert: [UserTutorialUpsertWithWhereUniqueWithoutTutorialInput!]
  deleteMany: [UserTutorialScalarWhereInput!]
  updateMany: [UserTutorialUpdateManyWithWhereNestedInput!]
}

input UserTutorialUpdateManyWithoutUserInput {
  create: [UserTutorialCreateWithoutUserInput!]
  delete: [UserTutorialWhereUniqueInput!]
  connect: [UserTutorialWhereUniqueInput!]
  disconnect: [UserTutorialWhereUniqueInput!]
  update: [UserTutorialUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [UserTutorialUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [UserTutorialScalarWhereInput!]
  updateMany: [UserTutorialUpdateManyWithWhereNestedInput!]
}

input UserTutorialUpdateManyWithWhereNestedInput {
  where: UserTutorialScalarWhereInput!
  data: UserTutorialUpdateManyDataInput!
}

input UserTutorialUpdateWithoutTutorialDataInput {
  user: UserUpdateOneWithoutUserTutorialsInput
  upvoted: Boolean
  bookmarked: Boolean
  currentChapter: Int
}

input UserTutorialUpdateWithoutUserDataInput {
  tutorial: TutorialUpdateOneWithoutUserTutorialsInput
  upvoted: Boolean
  bookmarked: Boolean
  currentChapter: Int
}

input UserTutorialUpdateWithWhereUniqueWithoutTutorialInput {
  where: UserTutorialWhereUniqueInput!
  data: UserTutorialUpdateWithoutTutorialDataInput!
}

input UserTutorialUpdateWithWhereUniqueWithoutUserInput {
  where: UserTutorialWhereUniqueInput!
  data: UserTutorialUpdateWithoutUserDataInput!
}

input UserTutorialUpsertWithWhereUniqueWithoutTutorialInput {
  where: UserTutorialWhereUniqueInput!
  update: UserTutorialUpdateWithoutTutorialDataInput!
  create: UserTutorialCreateWithoutTutorialInput!
}

input UserTutorialUpsertWithWhereUniqueWithoutUserInput {
  where: UserTutorialWhereUniqueInput!
  update: UserTutorialUpdateWithoutUserDataInput!
  create: UserTutorialCreateWithoutUserInput!
}

input UserTutorialWhereInput {
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
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  user: UserWhereInput
  tutorial: TutorialWhereInput
  upvoted: Boolean
  upvoted_not: Boolean
  bookmarked: Boolean
  bookmarked_not: Boolean
  currentChapter: Int
  currentChapter_not: Int
  currentChapter_in: [Int!]
  currentChapter_not_in: [Int!]
  currentChapter_lt: Int
  currentChapter_lte: Int
  currentChapter_gt: Int
  currentChapter_gte: Int
  AND: [UserTutorialWhereInput!]
  OR: [UserTutorialWhereInput!]
  NOT: [UserTutorialWhereInput!]
}

input UserTutorialWhereUniqueInput {
  id: ID
}

input UserUpdateInput {
  name: String
  email: String
  githubHandle: String
  githubUserId: String
  avatarUrl: String
  bio: String
  contributor: Boolean
  expertise: String
  userTutorials: UserTutorialUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  githubHandle: String
  githubUserId: String
  avatarUrl: String
  bio: String
  contributor: Boolean
  expertise: String
}

input UserUpdateOneWithoutUserTutorialsInput {
  create: UserCreateWithoutUserTutorialsInput
  update: UserUpdateWithoutUserTutorialsDataInput
  upsert: UserUpsertWithoutUserTutorialsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutUserTutorialsDataInput {
  name: String
  email: String
  githubHandle: String
  githubUserId: String
  avatarUrl: String
  bio: String
  contributor: Boolean
  expertise: String
}

input UserUpsertWithoutUserTutorialsInput {
  update: UserUpdateWithoutUserTutorialsDataInput!
  create: UserCreateWithoutUserTutorialsInput!
}

input UserWhereInput {
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
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  githubHandle: String
  githubHandle_not: String
  githubHandle_in: [String!]
  githubHandle_not_in: [String!]
  githubHandle_lt: String
  githubHandle_lte: String
  githubHandle_gt: String
  githubHandle_gte: String
  githubHandle_contains: String
  githubHandle_not_contains: String
  githubHandle_starts_with: String
  githubHandle_not_starts_with: String
  githubHandle_ends_with: String
  githubHandle_not_ends_with: String
  githubUserId: String
  githubUserId_not: String
  githubUserId_in: [String!]
  githubUserId_not_in: [String!]
  githubUserId_lt: String
  githubUserId_lte: String
  githubUserId_gt: String
  githubUserId_gte: String
  githubUserId_contains: String
  githubUserId_not_contains: String
  githubUserId_starts_with: String
  githubUserId_not_starts_with: String
  githubUserId_ends_with: String
  githubUserId_not_ends_with: String
  avatarUrl: String
  avatarUrl_not: String
  avatarUrl_in: [String!]
  avatarUrl_not_in: [String!]
  avatarUrl_lt: String
  avatarUrl_lte: String
  avatarUrl_gt: String
  avatarUrl_gte: String
  avatarUrl_contains: String
  avatarUrl_not_contains: String
  avatarUrl_starts_with: String
  avatarUrl_not_starts_with: String
  avatarUrl_ends_with: String
  avatarUrl_not_ends_with: String
  bio: String
  bio_not: String
  bio_in: [String!]
  bio_not_in: [String!]
  bio_lt: String
  bio_lte: String
  bio_gt: String
  bio_gte: String
  bio_contains: String
  bio_not_contains: String
  bio_starts_with: String
  bio_not_starts_with: String
  bio_ends_with: String
  bio_not_ends_with: String
  contributor: Boolean
  contributor_not: Boolean
  expertise: String
  expertise_not: String
  expertise_in: [String!]
  expertise_not_in: [String!]
  expertise_lt: String
  expertise_lte: String
  expertise_gt: String
  expertise_gte: String
  expertise_contains: String
  expertise_not_contains: String
  expertise_starts_with: String
  expertise_not_starts_with: String
  expertise_ends_with: String
  expertise_not_ends_with: String
  userTutorials_every: UserTutorialWhereInput
  userTutorials_some: UserTutorialWhereInput
  userTutorials_none: UserTutorialWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
  githubHandle: String
  githubUserId: String
  expertise: String
}
`