# Project Trybesmith

This project is a CRUD(Create, Read, Update, Delete) API made using _TypeScript_ with _Node.js_ and _Express_.

## Used stacks

**Language:** TypeScript, MySQL.

**Tools:** Node, Express, Joi, JWT.

## Environment variables

To run this project, you will need to add the following environment variables to your .env

`MYSQL_HOST`

`MYSQL_USER`

`MYSQL_PASSWORD`

`PORT`

## Running locally

Clone the project:

```bash
  git clone https://github.com/GabrielBiasoli/Trybesmith.git
```

Enter the directory:

```bash
  cd Trybesmith
```

Install the dependencies:

```bash
  npm install
```

Start the server

```bash
  npm start
```

## API Dcumentation

#### Creating a new user

```http
  POST /users
```

Request body must contain the following structure:

```JSON
{
  "username": "string",
  "classe": "string",
  "level": 1,
  "password": "string"
}
```

Response must return a token:

```JSON
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

##

#### Logging in with an user

```http
  POST /login
```

A valid user must be used in the request body, sending the following structure:

```JSON
{
  "username": "string",
  "password": "string"
}
```

Response must return a token:

```JSON
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

##

#### Registering a product

```http
  POST /products
```

**IMPORTANT:** Request headers must contain a valid token as Authorization key.

Request body must contain the following structure:

```JSON
  {
    "name": "Great sword",
    "amount": "30 gold pieces"
  }
```

##

#### Listing all products

```http
  GET /products
```

**IMPORTANT:** Request headers must contain a valid token as Authorization key.

##

#### Registering an order

```http
  POST /orders
```

**IMPORTANT:** Request headers must contain a valid token as Authorization key.

Request body must contain the following structure:

```JSON
  {
    "products": [1, 2]
  }
```

With the numbers in the array being products ids.

##

#### Listing an specific order

```http
  GET /orders/${id}
```

| Param | Type     | Description                                           |
| :---- | :------- | :---------------------------------------------------- |
| `id`  | `string` | **Mandatory** - Id from the order you want to consult |

**IMPORTANT:** Request headers must contain a valid token as Authorization key.

##

#### Listing all orders

```http
  GET /orders
```

**IMPORTANT:** Request headers must contain a valid token as Authorization key.
