## Day-03
- Create a repository
- Initilizethe repository
- node_modules, package.json, package-lock.json
- Install express 
- Create a express server
- Listen to PORT 7777
- Write request handler  for /test, /hello
- Install nodemon and update scripts inside package.json
- What are dependencies?
- What is the use of "-g" while npm install
- Difference between caret and tilde (^ vs ~)

## Day-04 
- Initilize  git
- .gitignore
- Create a remote repo on github
- Push all code to remote location
- Play with route extensions - /hello, /hello/2, /xyz
- Order of the routes matter a lot
- Install Postman app and make a workspace/collection > test API call

## Day-05
- Multiple Route Handlers - Play with the code
- next()
- next function and errors along with res.send()
- app.use("/route", rH,[rH,rH3],rH4, rH5);
- What is a Middleware? Why do we need it?
- How express JS basically handles requests behind the scenes
- Difference app.use and app.all
- Write a dummy auth middleware for admin
- Write a dummy auth middleware for all user routes, except /user/login
- Error handling using app.use('/',(err,req,res,next) ={});

## Day-06
- koushikbajpayee06@gmail.com(MongoDB Connection)
- Create a free cluster on MongoDB official website(Mongo Atlas)
- Install mongoose library
- Connect your application to the Database <"connection-url">/devTinder
- Call the connectDB function and connect to database before starting application on 7777
- Create a userSchema & user Model
- Create POST/signup API to add data to database (create instance of an object to add data, not from req.body())
- Push some documents using API calls from postman
- Error handling using try catch.

- JS Object vs JSON(difference)
- Add the express.json middleware to your app.
- Make your signup API dynamic to recive from the end user.
- User.findOne with duplicate email ids, which one will returned.
- API get user by email.
- API - Feed API - GET/feed - get al the users from the database.
- Create a Delete user API.
- Difference between PATCH and PUT API.
- API - Update a user.
- Explore the mongoose Documents for Model methods.
- What are options in a Model.findOneAndUpdate method, explore more about it
- API - Update the user API with email Id.

## Day -07
- Explore schematype options from the documentation
- add required, unique, lowercase, min, minLength, trim
- Add default
- Create a custom validation function for gender
- Improve the DB schema - PUT all appropiate validations on each field in Schema
- Add timestamp to the userSchema
- Add API level validation on Patch request & signup post api
- DATA Sanitizing - Add API Validation for each field
- Install validator
- Explore validator library function and use validator function for password, email,url

## Day-08
- Validate data in signup API
- Install bcrypt package
- Create passwordHash using bcrypt.hash & save the user with bcrupted password
- Create login API
- Compare the password and throw errors if email or password is incorrect
- Install cookie-parser
- Just send a dunny cookie to user
- create GET/profile API and check if you get the cookie back
- Install jsonwebtoken
- In login API, after email and password validation create the JWT token send it back to user in cookies 
- Read the cookies inside your profile API and find the logged in user
- userAuth Middleware
- Add the userAuth middleware in profile and a new sendConnectionRequest  API
- Set the expiry of JWT Token and cookies to 7 days
- create userSchema method to getJWT()
- Create userSchema method to comparepassword(password)

## Day-09
- Explore tinder APIs
- Create a list of all API you can think of Dev Tinder
- Group Multiple routes under respective routers
- Read documentation for express.Router
- craate Routes folder for managing auth, profile,request routers
- create authRouter, profileRouter, requestRouter 
- Import this routers in app.js
- 