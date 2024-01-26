1. Setup node, express app with typescript
Download the packages, find the correct path, install

```
npm i
npm run dev
```

Find the processing port and kill it
```
lsof -i :6000
kill -9 PID(replace it with PID number)
```

2. Integrate MongoDB Database connection

3. Register and login on OPENAI portal and get OPENAI API

4. Build a secure authentication with tokens and http-only signed cookies

5. database models
user:
    - name
    - email
    - password
    - chats:Chat[]

6. Middleware
Middleware are functions which gets exected before a request is processed. In Node and Express, middleware can be used to check JSON Body Validations, Tokens or Cookies Validations, Params Validations and more according to requirements.

7. Authentication
Authentication is a step inwhich the user needs to verify their identity. For this application, the user needs to provide the Email and Password which it created during the registration process. The user will be provided a Token After Auth Process.

8. Authorization
Once the user authenticates, he is provided a token. now to access a resource, the user needs to show a token that was sent during authentication. This ensures that the user is entitled to a resource.

9. JWT
JSON Web Token(JWT) is used to encrypt a payload into a signed token that has the permissions or authorities of the user.

10. HTTP only cookies
http-only cookies are a type of web cookie that comes with a special security attribute that restricts cookies from being accessed by Javascript in the web-browser. This prevents XSS attacks.

