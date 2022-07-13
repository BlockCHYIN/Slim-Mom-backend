### Команди:

- `npm start` &mdash; старт сервера в режимі production
- `npm run start:dev` &mdash; старт сервера в режимі розробки (development)
- `npm run lint` &mdash; запустити виконання перевірки коду з eslint, необхідно виконувати перед кожним PR та виправляти всі помилки лінтера
- `npm lint:fix` &mdash; та ж перевірка лінтера, але з автоматичними виправленнями простих помилок

========== ENDPOINTS ==========

===============================
Registration request:

POST api/users/signup

Обовʼязкові поля:
"name": "Jon Smit"
"email": "example@example.com",
"password": "examplepassword",

RequestBody: {
"name": "Jon Smit"
"email": "example@example.com",
"password": "examplepassword",
"height": Number,
"age": Number,
"currentWeight": Number,
"desiredWeight": Number,
"bloodType": Number,
}
===============================

===============================
Login request:

POST api/users/login

RequestBody: {
"email": "example@example.com",
"password": "examplepassword"
}
===============================

===============================
Logout request:

GET api/users/logout

# Authorization: "Bearer {{token}}"

===============================
Current user request:

GET api/users/current

# Authorization: "Bearer {{token}}"

==================================

calc request (without login)
GET api/calc

RequestBody (example): {
"height": 180,
"age": 32,
"currentWeight": 85,
"desiredWeight": 75,
"bloodType": 1
}
==================================
calc request (after login)
PUT api/calc/user

# Authorization: "Bearer {{token}}"

RequestBody (example):
{
"height": 180,
"age": 32,
"currentWeight": 85,
"desiredWeight": 75,
"bloodType": 1
}
==================================
setProduct request
POST api/calc/user

# Authorization: "Bearer {{token}}"

RequestBody (example):
{
"date":"2022.07.13Z",
"productId":"5d51694802b2373622ff555c",
"productWeight":100
}
==================================
deleteProduct request
DELETE api/calc/user

# Authorization: "Bearer {{token}}"

RequestBody (example):
{  
"date":"2022.07.13Z",
"productId":"5d51694802b2373622ff555c"
}
==================================
viewDailyInfo request
GET api/calc/user

# Authorization: "Bearer {{token}}"

RequestBody (example):
{  
"date":"2022.07.13Z"
}
