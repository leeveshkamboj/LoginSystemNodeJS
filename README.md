# LoginSystemNodeJS

Simple Login System Boilerplate Made in Node JS


## Enviroment variables

```
DB_URL=Your Mongodb Connection Url
TOKEN_KEY=Secret Key for creating JWT
```
## Routes

@ Get User
URL: / METHOD: GET<br>
Header:-
```
Authorization: Bearer [token]
```

@ Register User
URL: /user/register METHOD: POST<br>
Parameters:-
```
first_name : required, First name
last_name : required, Last name
username : required, Username
email : required, Email
password : required, Password
confirm_password : required, Confirm Password
```
Success Response Example:-
```
{
    "success": true,
    "email": "[email]",
    "token": "[token]"
}
```
Fail Response Example:-
```
{
    "success": false,
    "errors": {
        "first_name": "First name not provided.",
        "last_name": "Last name not provided.",
        "username": "Username not provided.",
        "email": "Email not provided.",
        "password": "Password not provided."
    }
}
```

