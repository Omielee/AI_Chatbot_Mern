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
