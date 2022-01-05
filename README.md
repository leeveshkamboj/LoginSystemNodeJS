# LoginSystemNodeJS

Simple Login System Boilerplate Made in Node JS


## Enviroment variables

```
DB_URL=Your Mongodb Connection Url
TOKEN_KEY=Secret Key for creating JWT
```
## Routes

### @ Get User <br>
URL: / METHOD: GET<br>
Header:-
```
Authorization: Bearer [token]
```
Success Response Example:-
```
{
    "success": true,
    "msg": "Yo!",
    "user": {
        "username": "[username]",
        "email": "[email]",
        "iat": [jwt_created_at],
        "exp": [jwt_expire_at]
    }
}
```
Fail Response Example:-
```
{
    "success": false,
    "errors": {
        "authorization": "Authorization header must be provided"
    }
}
```

### @ Register User <br>
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

### @ Login User <br>
URL: /user/login METHOD: POST<br>
Parameters:-
```
username : required, Username
password : required, Password
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
        "username": "Username not provided.",
        "password": "Password not provided."
    }
}
```
