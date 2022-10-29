### What is Rest API
REpresentational State Transfer

Rest is a framework for server communication based on HTTP (HTTP || HTTPS).

Framework -> Fixed set of rules and instruction to build something using pre-acuired data.

How to design a rest api:
HTTP verbs-> (CRUD: Create Read Update Delete)
1) GET -> Read ->
2) POST -> Create
3) PUT -> Update
4) DELETE -> Delete

You are creating new user on facebook:

App/Browser(Sign IN) -> API(Rest API) -> New User is created.

First thing Rest says is define a resource.

So in this case your resource is -> USER
Always use prular for creating resource

POST /users
GET /users
GET /users/<user_id>
DELETE /users/<user_id>
PUT /users/<user_id>

Any request made to server has multiple ways to share data:

1) URL->  /users signifies reource and domains
2) Query parameters -> /users?name=abhinav Generally used to filter data
3) Request Headers (Includes Cookie) -> Generally used to send metadata and session details.
4) Body -> Data of the reource which needs to be created ou updated.

POST /users
BODY: {
    name: "abhinav",
    age: 26,
    class: 10
}




